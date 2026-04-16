import { rollup } from 'rollup';
import { parseAst } from 'rollup/parseAst';
import styles from 'rollup-plugin-styles';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import { readdir, readFile, rm, writeFile } from 'node:fs/promises';
import json from '@rollup/plugin-json';

import { fileURLToPath } from 'node:url';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const distDir = fileURLToPath(import.meta.resolve('./dist'));

const createExports = async (jsId: string, jsPath: string) => {
    const jsCode = await readFile(jsPath, {
        encoding: 'utf-8',
    });
    const ast = parseAst(jsCode, {
        jsx: true,
    });
    let hasNamedExport = false;
    let hasDefaultExport = false;
    for (const stm of ast.body) {
        if (stm.type === 'ExportAllDeclaration') {
            hasNamedExport = true;
        } else if (stm.type === 'ExportNamedDeclaration') {
            if (stm.declaration) {
                hasNamedExport = true;
            } else if (stm.specifiers.length > 0) {
                if (stm.specifiers.some((it) => it.exported.type === 'Identifier' && it.exported.name === 'default')) {
                    hasDefaultExport = true;
                    if (stm.specifiers.length > 1) {
                        hasNamedExport = true;
                    }
                } else {
                    hasNamedExport = true;
                }
            }
        } else if (stm.type === 'ExportDefaultDeclaration') {
            hasDefaultExport = true;
        }
    }

    return {
        exportStar: hasNamedExport ? jsId : '',
        exportDefault: hasDefaultExport ? jsId : '',
        sideEffect: !hasNamedExport && !hasDefaultExport ? jsId : '',
        id: jsId,
    };
};

const getExportList = async () => {
    const items = await readdir(fileURLToPath(import.meta.resolve('antd/es')));
    const subModules = items.filter((it) => !it.startsWith('_') && !it.includes('.'));
    return (
        await Array.fromAsync(subModules, async (moduleId) => {
            const styleId = `antd/es/${moduleId}/style/index.less`;
            const hasStyle = existsSync(fileURLToPath(import.meta.resolve(styleId)));
            const dirPath = `antd/es/${moduleId}`;
            const jsId = `${dirPath}/index.js`;
            const jsPath = fileURLToPath(import.meta.resolve(jsId));
            if (!existsSync(jsPath)) {
                const files = await readdir(fileURLToPath(import.meta.resolve(dirPath)));
                return (
                    await Array.fromAsync(files, async (fileId) => {
                        if (!fileId.endsWith('.js')) {
                            return [];
                        }
                        const jsId = `${dirPath}/${fileId}`;
                        return [
                            {
                                less: '',
                                ...(await createExports(jsId, fileURLToPath(import.meta.resolve(jsId)))),
                            },
                        ];
                    })
                ).flat(1);
            }

            return [
                {
                    less: hasStyle ? styleId : '',
                    ...(await createExports(jsId, jsPath)),
                },
            ];
        })
    ).flat(1);
};
const codeLine = (seg: TemplateStringsArray, ...args: any[]) => {
    if (args.some((it) => it === '' || !it)) {
        return '';
    }
    return seg.flatMap((it, i) => [it, args[i] ?? '']).join('');
};

const Prefix = 'antd3-esm';
const PrefixReg = /^antd3-esm(?=\/)/;
const PrefixRegSlash = /^antd3-esm\//;
const sourcePattern = `ReactIcon.add.apply(ReactIcon, _toConsumableArray(Object.keys(allIcons).map(function (key) {`;
const sourcePatternReplace = `ReactIcon.add.apply(ReactIcon, _toConsumableArray(Object.keys(allIcons).filter(function(k) {return k !== "default" && k !== '__proto__'}).map(function (key) {`;

export const build = async () => {
    const list = await getExportList();
    const entryMap = new Map(
        list.map(
            (it) =>
                [it.id.replace(/^antd\/es\//, Prefix + '/$&').replace(/(\/index)?\.js$/, ''), it] as [
                    string,
                    (typeof list)[number],
                ],
        ),
    );

    const { default: pkgJson } = await import('./package.json', { with: { type: 'json' } });

    const pkgJsonWithExports = {
        ...pkgJson,
        exports: Object.fromEntries(
            entryMap
                .keys()
                .map((id) => [id.replace(PrefixReg, '.'), id.replace(PrefixReg, './dist') + '.js'] as [string, string]),
        ),
    };

    await writeFile(fileURLToPath(import.meta.resolve('./package.json')), JSON.stringify(pkgJsonWithExports, null, 4), {
        encoding: 'utf-8',
    });

    await (
        await rollup({
            input: entryMap.keys().toArray(),
            external: ['react', 'react-dom'],
            plugins: [
                {
                    name: 'entry-module',
                    resolveId(id) {
                        if (entryMap.has(id)) {
                            return { id };
                        }
                    },
                    load(id) {
                        if (entryMap.has(id)) {
                            const { less, exportDefault, exportStar, sideEffect } = entryMap.get(id)!;
                            const source = {
                                code: [
                                    codeLine`//${id}`,
                                    codeLine`import '${less}'`,
                                    codeLine`export * from '${exportStar}'`,
                                    codeLine`export { default } from '${exportDefault}'`,
                                    codeLine`import '${sideEffect}'`,
                                ].join(';\n'),
                            };
                            return source;
                        }
                    },
                },
                json({}),
                nodeResolve({ browser: true }),
                commonjs({
                    extensions: ['.js', '.ts', '.tsx', '.jsx'],
                    transformMixedEsModules: true,
                }),
                styles({
                    less: {
                        paths: [fileURLToPath(import.meta.resolve('./node_modules'))],
                        sourceMap: false,
                        javascriptEnabled: true,
                        math: 'always',
                    },
                    url: false,
                    mode: [
                        'inject',
                        {
                            prepend: true,
                        },
                    ],
                }),
                replace({
                    'process.env.NODE_ENV': JSON.stringify('production'),
                    'process.env.TEST_IE': JSON.stringify('false'),
                    'process && process.env': JSON.stringify(true),
                    preventAssignment: true,
                }),
                {
                    name: 'antd3-icon',
                    transform(code, id) {
                        const modulePath = id.replace(/\\/g, '/');
                        const pattern = 'antd/es/icon/index.js';

                        if (modulePath.includes(pattern)) {
                            return {
                                code: code.replace(sourcePattern, sourcePatternReplace),
                                map: null,
                            };
                        }
                        return {
                            code,
                            map: null,
                        };
                    },
                },
            ],
            treeshake: {
                propertyReadSideEffects: false,
            },
            onLog(level, log, defaultHandler) {
                if (level === 'warn' && log.code === 'THIS_IS_UNDEFINED') {
                    return;
                }
                defaultHandler(level, log);
            },
        })
    ).write({
        dir: distDir,
        format: 'es',
        manualChunks: (id) => {
            const posixPath = id.replaceAll('\\', '/');

            const circlularDependencies = {
                icon: ['/antd/es/icon/index.js', '/antd/es/icon/IconFont.js'],

                'config-provider': [
                    '/antd/es/config-provider/index.js',
                    '/antd/es/config-provider/context.js',
                    '/antd/es/config-provider/renderEmpty.js',
                    '/antd/es/empty/index.js',
                ],
                menu: ['/rc-menu/es/SubPopupMenu.js', '/rc-menu/es/DOMWrap.js', '/rc-menu/es/SubMenu.js'],
                input: ['/antd/es/input/Input.js', '/antd/es/input/ClearableLabeledInput.js'],
                tree: [
                    '/rc-tree/es/util.js',
                    '/rc-tree/es/TreeNode.js',
                    '/antd/es/tree/Tree.js',
                    '/antd/es/tree/DirectoryTree.js,',
                ],
            };

            for (const [chunkName, testes] of Object.entries(circlularDependencies)) {
                if (testes.some((it) => posixPath.includes(it))) {
                    return chunkName;
                }
            }

            if (posixPath.includes('/antd/es/config-provider') || posixPath.includes('/antd/es/config-provider')) {
                return 'config-provider';
            }
        },
        entryFileNames({ name, facadeModuleId }) {
            if (!facadeModuleId) {
                return name;
            }
            return facadeModuleId.replace(PrefixRegSlash, '') + '.js';
        },
        chunkFileNames(chunkInfo) {
            return chunkInfo.name + '.js';
        },
    });

    for (const [id, { exportDefault, exportStar }] of entryMap) {
        const types = [];
        if (exportDefault) {
            types.push(`export { default } from '${exportDefault.replace(/\.js$/, '')}'`);
        }
        if (exportStar) {
            types.push(`export * from '${exportStar.replace(/\.js$/, '')}'`);
        }
        if (types.length > 0) {
            await writeFile(join(distDir, id.replace(PrefixRegSlash, '') + '.d.ts'), types.join(';\n'), {
                encoding: 'utf-8',
            });
        }
    }
};

export const clear = async () => {
    if (existsSync(distDir)) {
        await rm(distDir, { recursive: true });
    }
};

if ((import.meta as ImportMeta & { main: boolean }).main) {
    await clear();
    build();
}
