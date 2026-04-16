import { n, b as requirePropTypes, u as requireClassnames, g as getDefaultExportFromCjs, c as classNames, p as propTypesExports, L as LocaleReceiver, i as defaultLocale, C as ConfigConsumer } from '../../config-provider.js';
import * as React from 'react';
import React__default from 'react';
import { o as omit } from '../../input.js';
import { v as requireLib, w as requireLib$1, x as require$$9, o as requireShallowequal, y as requireComponentClasses, s as shallowEqual, d as connected, p as polyfill } from '../../menu.js';
import * as ReactDOM from 'react-dom';
import ReactDOM__default from 'react-dom';
import { r as requireWarning } from '../../warning.js';
import { r as require_Uint8Array, a as require_Stack, b as requireIdentity } from '../../identity.js';
import { a as require_baseAssignValue, r as require_assignValue, b as require_defineProperty } from '../../_assignValue.js';
import { b as requireEq, e as requireGet } from '../../get.js';
import { f as require_root, h as requireIsObject, i as requireIsObjectLike, g as require_baseGetTag } from '../../tree.js';
import { r as require_copyArray } from '../../_copyArray.js';
import { r as require_overArg, a as require_isPrototype, c as requireIsArrayLike, b as require_arrayLikeKeys, d as requireIsBuffer, e as requireIsTypedArray } from '../../_overArg.js';
import { r as requireIsArguments, f as requireIsFunction, b as require_isIndex } from '../../isLength.js';
import { r as requireIsArray } from '../../_arrayMap.js';
import { c as connected$1, a as Menu } from '../../Divider.js';
import '../../index11.js';
import { I as Icon } from '../../icon.js';
import { C as Checkbox } from '../../index10.js';
import { b as Radio } from '../../index16.js';
import { D as Dropdown } from '../../dropdown.js';
import { M as Menu$1 } from '../../index6.js';
import { s as scrollTo } from '../../scrollTo.js';
import { P as Pagination } from '../../Pagination.js';
import { S as Spin } from '../../index14.js';
import { T as TransButton } from '../../transButton.js';
import '../../toString.js';
import '../../index7.js';
import '../../index9.js';
import '../../wave.js';
import '../../raf.js';
import '../../Checkbox.js';
import '../../index8.js';
import '../../Sider.js';
import '../../zh_CN.js';
import '../../index15.js';

var css = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-table-wrapper {\n  zoom: 1;\n}\n.ant-table-wrapper::before,\n.ant-table-wrapper::after {\n  display: table;\n  content: '';\n}\n.ant-table-wrapper::after {\n  clear: both;\n}\n.ant-table {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  position: relative;\n  clear: both;\n}\n.ant-table-body {\n  transition: opacity 0.3s;\n}\n.ant-table-empty .ant-table-body {\n  overflow-x: auto !important;\n  overflow-y: hidden !important;\n}\n.ant-table table {\n  width: 100%;\n  text-align: left;\n  border-radius: 4px 4px 0 0;\n  border-collapse: separate;\n  border-spacing: 0;\n}\n.ant-table-layout-fixed table {\n  table-layout: fixed;\n}\n.ant-table-thead > tr > th {\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n  text-align: left;\n  background: #fafafa;\n  border-bottom: 1px solid #e8e8e8;\n  transition: background 0.3s ease;\n}\n.ant-table-thead > tr > th[colspan]:not([colspan='1']) {\n  text-align: center;\n}\n.ant-table-thead > tr > th .anticon-filter,\n.ant-table-thead > tr > th .ant-table-filter-icon {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 28px;\n  height: 100%;\n  color: #bfbfbf;\n  font-size: 12px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.ant-table-thead > tr > th .anticon-filter > svg,\n.ant-table-thead > tr > th .ant-table-filter-icon > svg {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -5px;\n  margin-left: -6px;\n}\n.ant-table-thead > tr > th .ant-table-filter-selected.anticon {\n  color: #1890ff;\n}\n.ant-table-thead > tr > th .ant-table-column-sorter {\n  display: table-cell;\n  vertical-align: middle;\n}\n.ant-table-thead > tr > th .ant-table-column-sorter .ant-table-column-sorter-inner {\n  height: 1em;\n  margin-top: 0.35em;\n  margin-left: 0.57142857em;\n  color: #bfbfbf;\n  line-height: 1em;\n  text-align: center;\n  transition: all 0.3s;\n}\n.ant-table-thead > tr > th .ant-table-column-sorter .ant-table-column-sorter-inner .ant-table-column-sorter-up,\n.ant-table-thead > tr > th .ant-table-column-sorter .ant-table-column-sorter-inner .ant-table-column-sorter-down {\n  display: inline-block;\n  font-size: 12px;\n  font-size: 11px \\9;\n  transform: scale(0.91666667) rotate(0deg);\n  display: block;\n  height: 1em;\n  line-height: 1em;\n  transition: all 0.3s;\n}\n:root .ant-table-thead > tr > th .ant-table-column-sorter .ant-table-column-sorter-inner .ant-table-column-sorter-up,\n:root .ant-table-thead > tr > th .ant-table-column-sorter .ant-table-column-sorter-inner .ant-table-column-sorter-down {\n  font-size: 12px;\n}\n.ant-table-thead > tr > th .ant-table-column-sorter .ant-table-column-sorter-inner .ant-table-column-sorter-up.on,\n.ant-table-thead > tr > th .ant-table-column-sorter .ant-table-column-sorter-inner .ant-table-column-sorter-down.on {\n  color: #1890ff;\n}\n.ant-table-thead > tr > th .ant-table-column-sorter .ant-table-column-sorter-inner-full {\n  margin-top: -0.15em;\n}\n.ant-table-thead > tr > th .ant-table-column-sorter .ant-table-column-sorter-inner-full .ant-table-column-sorter-up,\n.ant-table-thead > tr > th .ant-table-column-sorter .ant-table-column-sorter-inner-full .ant-table-column-sorter-down {\n  height: 0.5em;\n  line-height: 0.5em;\n}\n.ant-table-thead > tr > th .ant-table-column-sorter .ant-table-column-sorter-inner-full .ant-table-column-sorter-down {\n  margin-top: 0.125em;\n}\n.ant-table-thead > tr > th.ant-table-column-has-actions {\n  position: relative;\n  background-clip: padding-box;\n  /* stylelint-disable-next-line */\n  -webkit-background-clip: border-box;\n}\n.ant-table-thead > tr > th.ant-table-column-has-actions.ant-table-column-has-filters {\n  padding-right: 30px !important;\n}\n.ant-table-thead > tr > th.ant-table-column-has-actions.ant-table-column-has-filters .anticon-filter.ant-table-filter-open,\n.ant-table-thead > tr > th.ant-table-column-has-actions.ant-table-column-has-filters .ant-table-filter-icon.ant-table-filter-open {\n  color: rgba(0, 0, 0, 0.45);\n  background: #e5e5e5;\n}\n.ant-table-thead > tr > th.ant-table-column-has-actions.ant-table-column-has-filters:hover .anticon-filter:hover,\n.ant-table-thead > tr > th.ant-table-column-has-actions.ant-table-column-has-filters:hover .ant-table-filter-icon:hover {\n  color: rgba(0, 0, 0, 0.45);\n  background: #e5e5e5;\n}\n.ant-table-thead > tr > th.ant-table-column-has-actions.ant-table-column-has-filters:hover .anticon-filter:active,\n.ant-table-thead > tr > th.ant-table-column-has-actions.ant-table-column-has-filters:hover .ant-table-filter-icon:active {\n  color: rgba(0, 0, 0, 0.65);\n}\n.ant-table-thead > tr > th.ant-table-column-has-actions.ant-table-column-has-sorters {\n  cursor: pointer;\n}\n.ant-table-thead > tr > th.ant-table-column-has-actions.ant-table-column-has-sorters:hover {\n  background: #f2f2f2;\n}\n.ant-table-thead > tr > th.ant-table-column-has-actions.ant-table-column-has-sorters:hover .anticon-filter,\n.ant-table-thead > tr > th.ant-table-column-has-actions.ant-table-column-has-sorters:hover .ant-table-filter-icon {\n  background: #f2f2f2;\n}\n.ant-table-thead > tr > th.ant-table-column-has-actions.ant-table-column-has-sorters:active .ant-table-column-sorter-up:not(.on),\n.ant-table-thead > tr > th.ant-table-column-has-actions.ant-table-column-has-sorters:active .ant-table-column-sorter-down:not(.on) {\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-table-thead > tr > th .ant-table-header-column {\n  display: inline-block;\n  max-width: 100%;\n  vertical-align: top;\n}\n.ant-table-thead > tr > th .ant-table-header-column .ant-table-column-sorters {\n  display: table;\n}\n.ant-table-thead > tr > th .ant-table-header-column .ant-table-column-sorters > .ant-table-column-title {\n  display: table-cell;\n  vertical-align: middle;\n}\n.ant-table-thead > tr > th .ant-table-header-column .ant-table-column-sorters > *:not(.ant-table-column-sorter) {\n  position: relative;\n}\n.ant-table-thead > tr > th .ant-table-header-column .ant-table-column-sorters::before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: transparent;\n  transition: all 0.3s;\n  content: '';\n}\n.ant-table-thead > tr > th .ant-table-header-column .ant-table-column-sorters:hover::before {\n  background: rgba(0, 0, 0, 0.04);\n}\n.ant-table-thead > tr > th.ant-table-column-has-sorters {\n  user-select: none;\n}\n.ant-table-thead > tr:first-child > th:first-child {\n  border-top-left-radius: 4px;\n}\n.ant-table-thead > tr:first-child > th:last-child {\n  border-top-right-radius: 4px;\n}\n.ant-table-thead > tr:not(:last-child) > th[colspan] {\n  border-bottom: 0;\n}\n.ant-table-tbody > tr > td {\n  border-bottom: 1px solid #e8e8e8;\n  transition: all 0.3s, border 0s;\n}\n.ant-table-thead > tr,\n.ant-table-tbody > tr {\n  transition: all 0.3s, height 0s;\n}\n.ant-table-thead > tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td,\n.ant-table-tbody > tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td,\n.ant-table-thead > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td,\n.ant-table-tbody > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td {\n  background: #e6f7ff;\n}\n.ant-table-thead > tr.ant-table-row-selected > td.ant-table-column-sort,\n.ant-table-tbody > tr.ant-table-row-selected > td.ant-table-column-sort {\n  background: #fafafa;\n}\n.ant-table-thead > tr:hover.ant-table-row-selected > td,\n.ant-table-tbody > tr:hover.ant-table-row-selected > td {\n  background: #fafafa;\n}\n.ant-table-thead > tr:hover.ant-table-row-selected > td.ant-table-column-sort,\n.ant-table-tbody > tr:hover.ant-table-row-selected > td.ant-table-column-sort {\n  background: #fafafa;\n}\n.ant-table-thead > tr:hover {\n  background: none;\n}\n.ant-table-footer {\n  position: relative;\n  padding: 16px 16px;\n  color: rgba(0, 0, 0, 0.85);\n  background: #fafafa;\n  border-top: 1px solid #e8e8e8;\n  border-radius: 0 0 4px 4px;\n}\n.ant-table-footer::before {\n  position: absolute;\n  top: -1px;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background: #fafafa;\n  content: '';\n}\n.ant-table.ant-table-bordered .ant-table-footer {\n  border: 1px solid #e8e8e8;\n}\n.ant-table-title {\n  position: relative;\n  top: 1px;\n  padding: 16px 0;\n  border-radius: 4px 4px 0 0;\n}\n.ant-table.ant-table-bordered .ant-table-title {\n  padding-right: 16px;\n  padding-left: 16px;\n  border: 1px solid #e8e8e8;\n}\n.ant-table-title + .ant-table-content {\n  position: relative;\n  border-radius: 4px 4px 0 0;\n}\n.ant-table-bordered .ant-table-title + .ant-table-content,\n.ant-table-bordered .ant-table-title + .ant-table-content table,\n.ant-table-bordered .ant-table-title + .ant-table-content .ant-table-thead > tr:first-child > th {\n  border-radius: 0;\n}\n.ant-table-without-column-header .ant-table-title + .ant-table-content,\n.ant-table-without-column-header table {\n  border-radius: 0;\n}\n.ant-table-without-column-header.ant-table-bordered.ant-table-empty .ant-table-placeholder {\n  border-top: 1px solid #e8e8e8;\n  border-radius: 4px;\n}\n.ant-table-tbody > tr.ant-table-row-selected td {\n  color: inherit;\n  background: #fafafa;\n}\n.ant-table-thead > tr > th.ant-table-column-sort {\n  background: #f5f5f5;\n}\n.ant-table-tbody > tr > td.ant-table-column-sort {\n  background: rgba(0, 0, 0, 0.01);\n}\n.ant-table-thead > tr > th,\n.ant-table-tbody > tr > td {\n  padding: 16px 16px;\n  overflow-wrap: break-word;\n}\n.ant-table-expand-icon-th,\n.ant-table-row-expand-icon-cell {\n  width: 50px;\n  min-width: 50px;\n  text-align: center;\n}\n.ant-table-header {\n  overflow: hidden;\n  background: #fafafa;\n}\n.ant-table-header table {\n  border-radius: 4px 4px 0 0;\n}\n.ant-table-loading {\n  position: relative;\n}\n.ant-table-loading .ant-table-body {\n  background: #fff;\n  opacity: 0.5;\n}\n.ant-table-loading .ant-table-spin-holder {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 20px;\n  margin-left: -30px;\n  line-height: 20px;\n}\n.ant-table-loading .ant-table-with-pagination {\n  margin-top: -20px;\n}\n.ant-table-loading .ant-table-without-pagination {\n  margin-top: 10px;\n}\n.ant-table-bordered .ant-table-header > table,\n.ant-table-bordered .ant-table-body > table,\n.ant-table-bordered .ant-table-fixed-left table,\n.ant-table-bordered .ant-table-fixed-right table {\n  border: 1px solid #e8e8e8;\n  border-right: 0;\n  border-bottom: 0;\n}\n.ant-table-bordered.ant-table-empty .ant-table-placeholder {\n  border-right: 1px solid #e8e8e8;\n  border-left: 1px solid #e8e8e8;\n}\n.ant-table-bordered.ant-table-fixed-header .ant-table-header > table {\n  border-bottom: 0;\n}\n.ant-table-bordered.ant-table-fixed-header .ant-table-body > table {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.ant-table-bordered.ant-table-fixed-header .ant-table-header + .ant-table-body > table,\n.ant-table-bordered.ant-table-fixed-header .ant-table-body-inner > table {\n  border-top: 0;\n}\n.ant-table-bordered .ant-table-thead > tr:not(:last-child) > th {\n  border-bottom: 1px solid #e8e8e8;\n}\n.ant-table-bordered .ant-table-thead > tr > th,\n.ant-table-bordered .ant-table-tbody > tr > td {\n  border-right: 1px solid #e8e8e8;\n}\n.ant-table-placeholder {\n  position: relative;\n  z-index: 1;\n  margin-top: -1px;\n  padding: 16px 16px;\n  color: rgba(0, 0, 0, 0.25);\n  font-size: 14px;\n  text-align: center;\n  background: #fff;\n  border-top: 1px solid #e8e8e8;\n  border-bottom: 1px solid #e8e8e8;\n  border-radius: 0 0 4px 4px;\n}\n.ant-table-pagination.ant-pagination {\n  float: right;\n  margin: 16px 0;\n}\n.ant-table-filter-dropdown {\n  position: relative;\n  min-width: 96px;\n  margin-left: -8px;\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.ant-table-filter-dropdown .ant-dropdown-menu {\n  max-height: calc(100vh - 130px);\n  overflow-x: hidden;\n  border: 0;\n  border-radius: 4px 4px 0 0;\n  box-shadow: none;\n}\n.ant-table-filter-dropdown .ant-dropdown-menu-item > label + span {\n  padding-right: 0;\n}\n.ant-table-filter-dropdown .ant-dropdown-menu-sub {\n  border-radius: 4px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.ant-table-filter-dropdown .ant-dropdown-menu .ant-dropdown-submenu-contain-selected .ant-dropdown-menu-submenu-title::after {\n  color: #1890ff;\n  font-weight: bold;\n  text-shadow: 0 0 2px #bae7ff;\n}\n.ant-table-filter-dropdown .ant-dropdown-menu-item {\n  overflow: hidden;\n}\n.ant-table-filter-dropdown > .ant-dropdown-menu > .ant-dropdown-menu-item:last-child,\n.ant-table-filter-dropdown > .ant-dropdown-menu > .ant-dropdown-menu-submenu:last-child .ant-dropdown-menu-submenu-title {\n  border-radius: 0;\n}\n.ant-table-filter-dropdown-btns {\n  padding: 7px 8px;\n  overflow: hidden;\n  border-top: 1px solid #e8e8e8;\n}\n.ant-table-filter-dropdown-link {\n  color: #1890ff;\n}\n.ant-table-filter-dropdown-link:hover {\n  color: #40a9ff;\n}\n.ant-table-filter-dropdown-link:active {\n  color: #096dd9;\n}\n.ant-table-filter-dropdown-link.confirm {\n  float: left;\n}\n.ant-table-filter-dropdown-link.clear {\n  float: right;\n}\n.ant-table-selection {\n  white-space: nowrap;\n}\n.ant-table-selection-select-all-custom {\n  margin-right: 4px !important;\n}\n.ant-table-selection .anticon-down {\n  color: #bfbfbf;\n  transition: all 0.3s;\n}\n.ant-table-selection-menu {\n  min-width: 96px;\n  margin-top: 5px;\n  margin-left: -30px;\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.ant-table-selection-menu .ant-action-down {\n  color: #bfbfbf;\n}\n.ant-table-selection-down {\n  display: inline-block;\n  padding: 0;\n  line-height: 1;\n  cursor: pointer;\n}\n.ant-table-selection-down:hover .anticon-down {\n  color: rgba(0, 0, 0, 0.6);\n}\n.ant-table-row-expand-icon {\n  color: #1890ff;\n  text-decoration: none;\n  cursor: pointer;\n  transition: color 0.3s;\n  display: inline-block;\n  width: 17px;\n  height: 17px;\n  color: inherit;\n  line-height: 13px;\n  text-align: center;\n  background: #fff;\n  border: 1px solid #e8e8e8;\n  border-radius: 2px;\n  outline: none;\n  transition: all 0.3s;\n  user-select: none;\n}\n.ant-table-row-expand-icon:focus,\n.ant-table-row-expand-icon:hover {\n  color: #40a9ff;\n}\n.ant-table-row-expand-icon:active {\n  color: #096dd9;\n}\n.ant-table-row-expand-icon:focus,\n.ant-table-row-expand-icon:hover,\n.ant-table-row-expand-icon:active {\n  border-color: currentColor;\n}\n.ant-table-row-expanded::after {\n  content: '-';\n}\n.ant-table-row-collapsed::after {\n  content: '+';\n}\n.ant-table-row-spaced {\n  visibility: hidden;\n}\n.ant-table-row-spaced::after {\n  content: '.';\n}\n.ant-table-row-cell-ellipsis,\n.ant-table-row-cell-ellipsis .ant-table-column-title {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.ant-table-row-cell-ellipsis .ant-table-column-title {\n  display: block;\n}\n.ant-table-row-cell-break-word {\n  word-wrap: break-word;\n  word-break: break-word;\n}\ntr.ant-table-expanded-row,\ntr.ant-table-expanded-row:hover {\n  background: #fbfbfb;\n}\ntr.ant-table-expanded-row td > .ant-table-wrapper {\n  margin: -16px -16px -17px;\n}\n.ant-table .ant-table-row-indent + .ant-table-row-expand-icon {\n  margin-right: 8px;\n}\n.ant-table-scroll {\n  overflow: auto;\n  overflow-x: hidden;\n}\n.ant-table-scroll table {\n  min-width: 100%;\n}\n.ant-table-scroll table .ant-table-fixed-columns-in-body:not([colspan]) {\n  color: transparent;\n}\n.ant-table-scroll table .ant-table-fixed-columns-in-body:not([colspan]) > * {\n  visibility: hidden;\n}\n.ant-table-body-inner {\n  height: 100%;\n}\n.ant-table-fixed-header > .ant-table-content > .ant-table-scroll > .ant-table-body {\n  position: relative;\n  background: #fff;\n}\n.ant-table-fixed-header .ant-table-body-inner {\n  overflow: scroll;\n}\n.ant-table-fixed-header .ant-table-scroll .ant-table-header {\n  margin-bottom: -20px;\n  padding-bottom: 20px;\n  overflow: scroll;\n  opacity: 0.9999;\n}\n.ant-table-fixed-header .ant-table-scroll .ant-table-header::-webkit-scrollbar {\n  border: 1px solid #e8e8e8;\n  border-width: 0 0 1px 0;\n}\n.ant-table-hide-scrollbar {\n  scrollbar-color: transparent transparent;\n  min-width: unset;\n}\n.ant-table-hide-scrollbar::-webkit-scrollbar {\n  min-width: inherit;\n  background-color: transparent;\n}\n.ant-table-bordered.ant-table-fixed-header .ant-table-scroll .ant-table-header::-webkit-scrollbar {\n  border: 1px solid #e8e8e8;\n  border-width: 1px 1px 1px 0;\n}\n.ant-table-bordered.ant-table-fixed-header .ant-table-scroll .ant-table-header.ant-table-hide-scrollbar .ant-table-thead > tr:only-child > th:last-child {\n  border-right-color: transparent;\n}\n.ant-table-fixed-left,\n.ant-table-fixed-right {\n  position: absolute;\n  top: 0;\n  z-index: 1;\n  overflow: hidden;\n  border-radius: 0;\n  transition: box-shadow 0.3s ease;\n}\n.ant-table-fixed-left table,\n.ant-table-fixed-right table {\n  width: auto;\n  background: #fff;\n}\n.ant-table-fixed-header .ant-table-fixed-left .ant-table-body-outer .ant-table-fixed,\n.ant-table-fixed-header .ant-table-fixed-right .ant-table-body-outer .ant-table-fixed {\n  border-radius: 0;\n}\n.ant-table-fixed-left {\n  left: 0;\n  box-shadow: 6px 0 6px -4px rgba(0, 0, 0, 0.15);\n}\n.ant-table-fixed-left .ant-table-header {\n  overflow-y: hidden;\n}\n.ant-table-fixed-left .ant-table-body-inner {\n  margin-right: -20px;\n  padding-right: 20px;\n}\n.ant-table-fixed-header .ant-table-fixed-left .ant-table-body-inner {\n  padding-right: 0;\n}\n.ant-table-fixed-left,\n.ant-table-fixed-left table {\n  border-radius: 4px 0 0 0;\n}\n.ant-table-fixed-left .ant-table-thead > tr > th:last-child {\n  border-top-right-radius: 0;\n}\n.ant-table-fixed-right {\n  right: 0;\n  box-shadow: -6px 0 6px -4px rgba(0, 0, 0, 0.15);\n}\n.ant-table-fixed-right,\n.ant-table-fixed-right table {\n  border-radius: 0 4px 0 0;\n}\n.ant-table-fixed-right .ant-table-expanded-row {\n  color: transparent;\n  pointer-events: none;\n}\n.ant-table-fixed-right .ant-table-thead > tr > th:first-child {\n  border-top-left-radius: 0;\n}\n.ant-table.ant-table-scroll-position-left .ant-table-fixed-left {\n  box-shadow: none;\n}\n.ant-table.ant-table-scroll-position-right .ant-table-fixed-right {\n  box-shadow: none;\n}\n.ant-table colgroup > col.ant-table-selection-col {\n  width: 60px;\n}\n.ant-table-thead > tr > th.ant-table-selection-column-custom .ant-table-selection {\n  margin-right: -15px;\n}\n.ant-table-thead > tr > th.ant-table-selection-column,\n.ant-table-tbody > tr > td.ant-table-selection-column {\n  text-align: center;\n}\n.ant-table-thead > tr > th.ant-table-selection-column .ant-radio-wrapper,\n.ant-table-tbody > tr > td.ant-table-selection-column .ant-radio-wrapper {\n  margin-right: 0;\n}\n.ant-table-row[class*='ant-table-row-level-0'] .ant-table-selection-column > span {\n  display: inline-block;\n}\n.ant-table-filter-dropdown .ant-checkbox-wrapper + span,\n.ant-table-filter-dropdown-submenu .ant-checkbox-wrapper + span {\n  padding-left: 8px;\n}\n/**\n* Another fix of Firefox:\n*/\n@supports (-moz-appearance: meterbar) {\n  .ant-table-thead > tr > th.ant-table-column-has-actions {\n    background-clip: padding-box;\n  }\n}\n.ant-table-middle > .ant-table-title,\n.ant-table-middle > .ant-table-content > .ant-table-footer {\n  padding: 12px 8px;\n}\n.ant-table-middle > .ant-table-content > .ant-table-header > table > .ant-table-thead > tr > th,\n.ant-table-middle > .ant-table-content > .ant-table-body > table > .ant-table-thead > tr > th,\n.ant-table-middle > .ant-table-content > .ant-table-scroll > .ant-table-header > table > .ant-table-thead > tr > th,\n.ant-table-middle > .ant-table-content > .ant-table-scroll > .ant-table-body > table > .ant-table-thead > tr > th,\n.ant-table-middle > .ant-table-content > .ant-table-fixed-left > .ant-table-header > table > .ant-table-thead > tr > th,\n.ant-table-middle > .ant-table-content > .ant-table-fixed-right > .ant-table-header > table > .ant-table-thead > tr > th,\n.ant-table-middle > .ant-table-content > .ant-table-fixed-left > .ant-table-body-outer > .ant-table-body-inner > table > .ant-table-thead > tr > th,\n.ant-table-middle > .ant-table-content > .ant-table-fixed-right > .ant-table-body-outer > .ant-table-body-inner > table > .ant-table-thead > tr > th,\n.ant-table-middle > .ant-table-content > .ant-table-header > table > .ant-table-tbody > tr > td,\n.ant-table-middle > .ant-table-content > .ant-table-body > table > .ant-table-tbody > tr > td,\n.ant-table-middle > .ant-table-content > .ant-table-scroll > .ant-table-header > table > .ant-table-tbody > tr > td,\n.ant-table-middle > .ant-table-content > .ant-table-scroll > .ant-table-body > table > .ant-table-tbody > tr > td,\n.ant-table-middle > .ant-table-content > .ant-table-fixed-left > .ant-table-header > table > .ant-table-tbody > tr > td,\n.ant-table-middle > .ant-table-content > .ant-table-fixed-right > .ant-table-header > table > .ant-table-tbody > tr > td,\n.ant-table-middle > .ant-table-content > .ant-table-fixed-left > .ant-table-body-outer > .ant-table-body-inner > table > .ant-table-tbody > tr > td,\n.ant-table-middle > .ant-table-content > .ant-table-fixed-right > .ant-table-body-outer > .ant-table-body-inner > table > .ant-table-tbody > tr > td {\n  padding: 12px 8px;\n}\n.ant-table-middle tr.ant-table-expanded-row td > .ant-table-wrapper {\n  margin: -12px -8px -13px;\n}\n.ant-table-small {\n  border: 1px solid #e8e8e8;\n  border-radius: 4px;\n}\n.ant-table-small > .ant-table-title,\n.ant-table-small > .ant-table-content > .ant-table-footer {\n  padding: 8px 8px;\n}\n.ant-table-small > .ant-table-title {\n  top: 0;\n  border-bottom: 1px solid #e8e8e8;\n}\n.ant-table-small > .ant-table-content > .ant-table-footer {\n  background-color: transparent;\n  border-top: 1px solid #e8e8e8;\n}\n.ant-table-small > .ant-table-content > .ant-table-footer::before {\n  background-color: transparent;\n}\n.ant-table-small > .ant-table-content > .ant-table-body {\n  margin: 0 8px;\n}\n.ant-table-small > .ant-table-content > .ant-table-header > table,\n.ant-table-small > .ant-table-content > .ant-table-body > table,\n.ant-table-small > .ant-table-content > .ant-table-scroll > .ant-table-header > table,\n.ant-table-small > .ant-table-content > .ant-table-scroll > .ant-table-body > table,\n.ant-table-small > .ant-table-content > .ant-table-fixed-left > .ant-table-header > table,\n.ant-table-small > .ant-table-content > .ant-table-fixed-right > .ant-table-header > table,\n.ant-table-small > .ant-table-content > .ant-table-fixed-left > .ant-table-body-outer > .ant-table-body-inner > table,\n.ant-table-small > .ant-table-content > .ant-table-fixed-right > .ant-table-body-outer > .ant-table-body-inner > table {\n  border: 0;\n}\n.ant-table-small > .ant-table-content > .ant-table-header > table > .ant-table-thead > tr > th,\n.ant-table-small > .ant-table-content > .ant-table-body > table > .ant-table-thead > tr > th,\n.ant-table-small > .ant-table-content > .ant-table-scroll > .ant-table-header > table > .ant-table-thead > tr > th,\n.ant-table-small > .ant-table-content > .ant-table-scroll > .ant-table-body > table > .ant-table-thead > tr > th,\n.ant-table-small > .ant-table-content > .ant-table-fixed-left > .ant-table-header > table > .ant-table-thead > tr > th,\n.ant-table-small > .ant-table-content > .ant-table-fixed-right > .ant-table-header > table > .ant-table-thead > tr > th,\n.ant-table-small > .ant-table-content > .ant-table-fixed-left > .ant-table-body-outer > .ant-table-body-inner > table > .ant-table-thead > tr > th,\n.ant-table-small > .ant-table-content > .ant-table-fixed-right > .ant-table-body-outer > .ant-table-body-inner > table > .ant-table-thead > tr > th,\n.ant-table-small > .ant-table-content > .ant-table-header > table > .ant-table-tbody > tr > td,\n.ant-table-small > .ant-table-content > .ant-table-body > table > .ant-table-tbody > tr > td,\n.ant-table-small > .ant-table-content > .ant-table-scroll > .ant-table-header > table > .ant-table-tbody > tr > td,\n.ant-table-small > .ant-table-content > .ant-table-scroll > .ant-table-body > table > .ant-table-tbody > tr > td,\n.ant-table-small > .ant-table-content > .ant-table-fixed-left > .ant-table-header > table > .ant-table-tbody > tr > td,\n.ant-table-small > .ant-table-content > .ant-table-fixed-right > .ant-table-header > table > .ant-table-tbody > tr > td,\n.ant-table-small > .ant-table-content > .ant-table-fixed-left > .ant-table-body-outer > .ant-table-body-inner > table > .ant-table-tbody > tr > td,\n.ant-table-small > .ant-table-content > .ant-table-fixed-right > .ant-table-body-outer > .ant-table-body-inner > table > .ant-table-tbody > tr > td {\n  padding: 8px 8px;\n}\n.ant-table-small > .ant-table-content > .ant-table-header > table > .ant-table-thead > tr > th,\n.ant-table-small > .ant-table-content > .ant-table-body > table > .ant-table-thead > tr > th,\n.ant-table-small > .ant-table-content > .ant-table-scroll > .ant-table-header > table > .ant-table-thead > tr > th,\n.ant-table-small > .ant-table-content > .ant-table-scroll > .ant-table-body > table > .ant-table-thead > tr > th,\n.ant-table-small > .ant-table-content > .ant-table-fixed-left > .ant-table-header > table > .ant-table-thead > tr > th,\n.ant-table-small > .ant-table-content > .ant-table-fixed-right > .ant-table-header > table > .ant-table-thead > tr > th,\n.ant-table-small > .ant-table-content > .ant-table-fixed-left > .ant-table-body-outer > .ant-table-body-inner > table > .ant-table-thead > tr > th,\n.ant-table-small > .ant-table-content > .ant-table-fixed-right > .ant-table-body-outer > .ant-table-body-inner > table > .ant-table-thead > tr > th {\n  background-color: transparent;\n}\n.ant-table-small > .ant-table-content > .ant-table-header > table > .ant-table-thead > tr,\n.ant-table-small > .ant-table-content > .ant-table-body > table > .ant-table-thead > tr,\n.ant-table-small > .ant-table-content > .ant-table-scroll > .ant-table-header > table > .ant-table-thead > tr,\n.ant-table-small > .ant-table-content > .ant-table-scroll > .ant-table-body > table > .ant-table-thead > tr,\n.ant-table-small > .ant-table-content > .ant-table-fixed-left > .ant-table-header > table > .ant-table-thead > tr,\n.ant-table-small > .ant-table-content > .ant-table-fixed-right > .ant-table-header > table > .ant-table-thead > tr,\n.ant-table-small > .ant-table-content > .ant-table-fixed-left > .ant-table-body-outer > .ant-table-body-inner > table > .ant-table-thead > tr,\n.ant-table-small > .ant-table-content > .ant-table-fixed-right > .ant-table-body-outer > .ant-table-body-inner > table > .ant-table-thead > tr {\n  border-bottom: 1px solid #e8e8e8;\n}\n.ant-table-small > .ant-table-content > .ant-table-header > table > .ant-table-thead > tr > th.ant-table-column-sort,\n.ant-table-small > .ant-table-content > .ant-table-body > table > .ant-table-thead > tr > th.ant-table-column-sort,\n.ant-table-small > .ant-table-content > .ant-table-scroll > .ant-table-header > table > .ant-table-thead > tr > th.ant-table-column-sort,\n.ant-table-small > .ant-table-content > .ant-table-scroll > .ant-table-body > table > .ant-table-thead > tr > th.ant-table-column-sort,\n.ant-table-small > .ant-table-content > .ant-table-fixed-left > .ant-table-header > table > .ant-table-thead > tr > th.ant-table-column-sort,\n.ant-table-small > .ant-table-content > .ant-table-fixed-right > .ant-table-header > table > .ant-table-thead > tr > th.ant-table-column-sort,\n.ant-table-small > .ant-table-content > .ant-table-fixed-left > .ant-table-body-outer > .ant-table-body-inner > table > .ant-table-thead > tr > th.ant-table-column-sort,\n.ant-table-small > .ant-table-content > .ant-table-fixed-right > .ant-table-body-outer > .ant-table-body-inner > table > .ant-table-thead > tr > th.ant-table-column-sort {\n  background-color: rgba(0, 0, 0, 0.01);\n}\n.ant-table-small > .ant-table-content > .ant-table-scroll > .ant-table-header > table,\n.ant-table-small > .ant-table-content > .ant-table-scroll > .ant-table-body > table,\n.ant-table-small > .ant-table-content > .ant-table-fixed-left > .ant-table-header > table,\n.ant-table-small > .ant-table-content > .ant-table-fixed-right > .ant-table-header > table,\n.ant-table-small > .ant-table-content > .ant-table-fixed-left > .ant-table-body-outer > .ant-table-body-inner > table,\n.ant-table-small > .ant-table-content > .ant-table-fixed-right > .ant-table-body-outer > .ant-table-body-inner > table {\n  padding: 0;\n}\n.ant-table-small > .ant-table-content .ant-table-header {\n  background-color: transparent;\n  border-radius: 4px 4px 0 0;\n}\n.ant-table-small > .ant-table-content .ant-table-placeholder,\n.ant-table-small > .ant-table-content .ant-table-row:last-child td {\n  border-bottom: 0;\n}\n.ant-table-small.ant-table-bordered {\n  border-right: 0;\n}\n.ant-table-small.ant-table-bordered .ant-table-title {\n  border: 0;\n  border-right: 1px solid #e8e8e8;\n  border-bottom: 1px solid #e8e8e8;\n}\n.ant-table-small.ant-table-bordered .ant-table-content {\n  border-right: 1px solid #e8e8e8;\n}\n.ant-table-small.ant-table-bordered .ant-table-footer {\n  border: 0;\n  border-top: 1px solid #e8e8e8;\n}\n.ant-table-small.ant-table-bordered .ant-table-footer::before {\n  display: none;\n}\n.ant-table-small.ant-table-bordered .ant-table-placeholder {\n  border-right: 0;\n  border-bottom: 0;\n  border-left: 0;\n}\n.ant-table-small.ant-table-bordered .ant-table-thead > tr > th.ant-table-row-cell-last,\n.ant-table-small.ant-table-bordered .ant-table-tbody > tr > td:last-child {\n  border-right: none;\n}\n.ant-table-small.ant-table-bordered .ant-table-fixed-left .ant-table-thead > tr > th:last-child,\n.ant-table-small.ant-table-bordered .ant-table-fixed-left .ant-table-tbody > tr > td:last-child {\n  border-right: 1px solid #e8e8e8;\n}\n.ant-table-small.ant-table-bordered .ant-table-fixed-right {\n  border-right: 1px solid #e8e8e8;\n  border-left: 1px solid #e8e8e8;\n}\n.ant-table-small tr.ant-table-expanded-row td > .ant-table-wrapper {\n  margin: -8px -8px -9px;\n}\n.ant-table-small.ant-table-fixed-header > .ant-table-content > .ant-table-scroll > .ant-table-body {\n  border-radius: 0 0 4px 4px;\n}\n/*# sourceMappingURL=index.css.map */";
n(css,{"prepend":true});

var es = {};

var Table$1 = {};

var addEventListener = {};

var hasRequiredAddEventListener;

function requireAddEventListener () {
	if (hasRequiredAddEventListener) return addEventListener;
	hasRequiredAddEventListener = 1;

	Object.defineProperty(addEventListener, "__esModule", {
	  value: true
	});
	addEventListener.default = addEventListenerWrap;

	var _addDomEventListener = _interopRequireDefault(requireLib());

	var _reactDom = _interopRequireDefault(ReactDOM__default);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function addEventListenerWrap(target, eventType, cb, option) {
	  /* eslint camelcase: 2 */
	  var callback = _reactDom.default.unstable_batchedUpdates ? function run(e) {
	    _reactDom.default.unstable_batchedUpdates(cb, e);
	  } : cb;
	  return (0, _addDomEventListener.default)(target, eventType, callback, option);
	}
	return addEventListener;
}

var _assignMergeValue;
var hasRequired_assignMergeValue;

function require_assignMergeValue () {
	if (hasRequired_assignMergeValue) return _assignMergeValue;
	hasRequired_assignMergeValue = 1;
	var baseAssignValue = require_baseAssignValue(),
	    eq = requireEq();

	/**
	 * This function is like `assignValue` except that it doesn't assign
	 * `undefined` values.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignMergeValue(object, key, value) {
	  if ((value !== undefined && !eq(object[key], value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	_assignMergeValue = assignMergeValue;
	return _assignMergeValue;
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */

var _createBaseFor;
var hasRequired_createBaseFor;

function require_createBaseFor () {
	if (hasRequired_createBaseFor) return _createBaseFor;
	hasRequired_createBaseFor = 1;
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	_createBaseFor = createBaseFor;
	return _createBaseFor;
}

var _baseFor;
var hasRequired_baseFor;

function require_baseFor () {
	if (hasRequired_baseFor) return _baseFor;
	hasRequired_baseFor = 1;
	var createBaseFor = require_createBaseFor();

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	_baseFor = baseFor;
	return _baseFor;
}

var _cloneBuffer = {exports: {}};

var hasRequired_cloneBuffer;

function require_cloneBuffer () {
	if (hasRequired_cloneBuffer) return _cloneBuffer.exports;
	hasRequired_cloneBuffer = 1;
	(function (module, exports$1) {
		var root = require_root();

		/** Detect free variable `exports`. */
		var freeExports = exports$1 && !exports$1.nodeType && exports$1;

		/** Detect free variable `module`. */
		var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

		/** Detect the popular CommonJS extension `module.exports`. */
		var moduleExports = freeModule && freeModule.exports === freeExports;

		/** Built-in value references. */
		var Buffer = moduleExports ? root.Buffer : undefined,
		    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

		/**
		 * Creates a clone of  `buffer`.
		 *
		 * @private
		 * @param {Buffer} buffer The buffer to clone.
		 * @param {boolean} [isDeep] Specify a deep clone.
		 * @returns {Buffer} Returns the cloned buffer.
		 */
		function cloneBuffer(buffer, isDeep) {
		  if (isDeep) {
		    return buffer.slice();
		  }
		  var length = buffer.length,
		      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

		  buffer.copy(result);
		  return result;
		}

		module.exports = cloneBuffer; 
	} (_cloneBuffer, _cloneBuffer.exports));
	return _cloneBuffer.exports;
}

var _cloneArrayBuffer;
var hasRequired_cloneArrayBuffer;

function require_cloneArrayBuffer () {
	if (hasRequired_cloneArrayBuffer) return _cloneArrayBuffer;
	hasRequired_cloneArrayBuffer = 1;
	var Uint8Array = require_Uint8Array();

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}

	_cloneArrayBuffer = cloneArrayBuffer;
	return _cloneArrayBuffer;
}

var _cloneTypedArray;
var hasRequired_cloneTypedArray;

function require_cloneTypedArray () {
	if (hasRequired_cloneTypedArray) return _cloneTypedArray;
	hasRequired_cloneTypedArray = 1;
	var cloneArrayBuffer = require_cloneArrayBuffer();

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	_cloneTypedArray = cloneTypedArray;
	return _cloneTypedArray;
}

var _baseCreate;
var hasRequired_baseCreate;

function require_baseCreate () {
	if (hasRequired_baseCreate) return _baseCreate;
	hasRequired_baseCreate = 1;
	var isObject = requireIsObject();

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());

	_baseCreate = baseCreate;
	return _baseCreate;
}

var _getPrototype;
var hasRequired_getPrototype;

function require_getPrototype () {
	if (hasRequired_getPrototype) return _getPrototype;
	hasRequired_getPrototype = 1;
	var overArg = require_overArg();

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	_getPrototype = getPrototype;
	return _getPrototype;
}

var _initCloneObject;
var hasRequired_initCloneObject;

function require_initCloneObject () {
	if (hasRequired_initCloneObject) return _initCloneObject;
	hasRequired_initCloneObject = 1;
	var baseCreate = require_baseCreate(),
	    getPrototype = require_getPrototype(),
	    isPrototype = require_isPrototype();

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}

	_initCloneObject = initCloneObject;
	return _initCloneObject;
}

var isArrayLikeObject_1;
var hasRequiredIsArrayLikeObject;

function requireIsArrayLikeObject () {
	if (hasRequiredIsArrayLikeObject) return isArrayLikeObject_1;
	hasRequiredIsArrayLikeObject = 1;
	var isArrayLike = requireIsArrayLike(),
	    isObjectLike = requireIsObjectLike();

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	isArrayLikeObject_1 = isArrayLikeObject;
	return isArrayLikeObject_1;
}

var isPlainObject_1;
var hasRequiredIsPlainObject;

function requireIsPlainObject () {
	if (hasRequiredIsPlainObject) return isPlainObject_1;
	hasRequiredIsPlainObject = 1;
	var baseGetTag = require_baseGetTag(),
	    getPrototype = require_getPrototype(),
	    isObjectLike = requireIsObjectLike();

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	isPlainObject_1 = isPlainObject;
	return isPlainObject_1;
}

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */

var _safeGet;
var hasRequired_safeGet;

function require_safeGet () {
	if (hasRequired_safeGet) return _safeGet;
	hasRequired_safeGet = 1;
	function safeGet(object, key) {
	  if (key === 'constructor' && typeof object[key] === 'function') {
	    return;
	  }

	  if (key == '__proto__') {
	    return;
	  }

	  return object[key];
	}

	_safeGet = safeGet;
	return _safeGet;
}

var _copyObject;
var hasRequired_copyObject;

function require_copyObject () {
	if (hasRequired_copyObject) return _copyObject;
	hasRequired_copyObject = 1;
	var assignValue = require_assignValue(),
	    baseAssignValue = require_baseAssignValue();

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	_copyObject = copyObject;
	return _copyObject;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

var _nativeKeysIn;
var hasRequired_nativeKeysIn;

function require_nativeKeysIn () {
	if (hasRequired_nativeKeysIn) return _nativeKeysIn;
	hasRequired_nativeKeysIn = 1;
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	_nativeKeysIn = nativeKeysIn;
	return _nativeKeysIn;
}

var _baseKeysIn;
var hasRequired_baseKeysIn;

function require_baseKeysIn () {
	if (hasRequired_baseKeysIn) return _baseKeysIn;
	hasRequired_baseKeysIn = 1;
	var isObject = requireIsObject(),
	    isPrototype = require_isPrototype(),
	    nativeKeysIn = require_nativeKeysIn();

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	_baseKeysIn = baseKeysIn;
	return _baseKeysIn;
}

var keysIn_1;
var hasRequiredKeysIn;

function requireKeysIn () {
	if (hasRequiredKeysIn) return keysIn_1;
	hasRequiredKeysIn = 1;
	var arrayLikeKeys = require_arrayLikeKeys(),
	    baseKeysIn = require_baseKeysIn(),
	    isArrayLike = requireIsArrayLike();

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}

	keysIn_1 = keysIn;
	return keysIn_1;
}

var toPlainObject_1;
var hasRequiredToPlainObject;

function requireToPlainObject () {
	if (hasRequiredToPlainObject) return toPlainObject_1;
	hasRequiredToPlainObject = 1;
	var copyObject = require_copyObject(),
	    keysIn = requireKeysIn();

	/**
	 * Converts `value` to a plain object flattening inherited enumerable string
	 * keyed properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return copyObject(value, keysIn(value));
	}

	toPlainObject_1 = toPlainObject;
	return toPlainObject_1;
}

var _baseMergeDeep;
var hasRequired_baseMergeDeep;

function require_baseMergeDeep () {
	if (hasRequired_baseMergeDeep) return _baseMergeDeep;
	hasRequired_baseMergeDeep = 1;
	var assignMergeValue = require_assignMergeValue(),
	    cloneBuffer = require_cloneBuffer(),
	    cloneTypedArray = require_cloneTypedArray(),
	    copyArray = require_copyArray(),
	    initCloneObject = require_initCloneObject(),
	    isArguments = requireIsArguments(),
	    isArray = requireIsArray(),
	    isArrayLikeObject = requireIsArrayLikeObject(),
	    isBuffer = requireIsBuffer(),
	    isFunction = requireIsFunction(),
	    isObject = requireIsObject(),
	    isPlainObject = requireIsPlainObject(),
	    isTypedArray = requireIsTypedArray(),
	    safeGet = require_safeGet(),
	    toPlainObject = requireToPlainObject();

	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	  var objValue = safeGet(object, key),
	      srcValue = safeGet(source, key),
	      stacked = stack.get(srcValue);

	  if (stacked) {
	    assignMergeValue(object, key, stacked);
	    return;
	  }
	  var newValue = customizer
	    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
	    : undefined;

	  var isCommon = newValue === undefined;

	  if (isCommon) {
	    var isArr = isArray(srcValue),
	        isBuff = !isArr && isBuffer(srcValue),
	        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

	    newValue = srcValue;
	    if (isArr || isBuff || isTyped) {
	      if (isArray(objValue)) {
	        newValue = objValue;
	      }
	      else if (isArrayLikeObject(objValue)) {
	        newValue = copyArray(objValue);
	      }
	      else if (isBuff) {
	        isCommon = false;
	        newValue = cloneBuffer(srcValue, true);
	      }
	      else if (isTyped) {
	        isCommon = false;
	        newValue = cloneTypedArray(srcValue, true);
	      }
	      else {
	        newValue = [];
	      }
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      newValue = objValue;
	      if (isArguments(objValue)) {
	        newValue = toPlainObject(objValue);
	      }
	      else if (!isObject(objValue) || isFunction(objValue)) {
	        newValue = initCloneObject(srcValue);
	      }
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    stack.set(srcValue, newValue);
	    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	    stack['delete'](srcValue);
	  }
	  assignMergeValue(object, key, newValue);
	}

	_baseMergeDeep = baseMergeDeep;
	return _baseMergeDeep;
}

var _baseMerge;
var hasRequired_baseMerge;

function require_baseMerge () {
	if (hasRequired_baseMerge) return _baseMerge;
	hasRequired_baseMerge = 1;
	var Stack = require_Stack(),
	    assignMergeValue = require_assignMergeValue(),
	    baseFor = require_baseFor(),
	    baseMergeDeep = require_baseMergeDeep(),
	    isObject = requireIsObject(),
	    keysIn = requireKeysIn(),
	    safeGet = require_safeGet();

	/**
	 * The base implementation of `_.merge` without support for multiple sources.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMerge(object, source, srcIndex, customizer, stack) {
	  if (object === source) {
	    return;
	  }
	  baseFor(source, function(srcValue, key) {
	    stack || (stack = new Stack);
	    if (isObject(srcValue)) {
	      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	    }
	    else {
	      var newValue = customizer
	        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
	        : undefined;

	      if (newValue === undefined) {
	        newValue = srcValue;
	      }
	      assignMergeValue(object, key, newValue);
	    }
	  }, keysIn);
	}

	_baseMerge = baseMerge;
	return _baseMerge;
}

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */

var _apply;
var hasRequired_apply;

function require_apply () {
	if (hasRequired_apply) return _apply;
	hasRequired_apply = 1;
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	_apply = apply;
	return _apply;
}

var _overRest;
var hasRequired_overRest;

function require_overRest () {
	if (hasRequired_overRest) return _overRest;
	hasRequired_overRest = 1;
	var apply = require_apply();

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}

	_overRest = overRest;
	return _overRest;
}

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */

var constant_1;
var hasRequiredConstant;

function requireConstant () {
	if (hasRequiredConstant) return constant_1;
	hasRequiredConstant = 1;
	function constant(value) {
	  return function() {
	    return value;
	  };
	}

	constant_1 = constant;
	return constant_1;
}

var _baseSetToString;
var hasRequired_baseSetToString;

function require_baseSetToString () {
	if (hasRequired_baseSetToString) return _baseSetToString;
	hasRequired_baseSetToString = 1;
	var constant = requireConstant(),
	    defineProperty = require_defineProperty(),
	    identity = requireIdentity();

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};

	_baseSetToString = baseSetToString;
	return _baseSetToString;
}

/** Used to detect hot functions by number of calls within a span of milliseconds. */

var _shortOut;
var hasRequired_shortOut;

function require_shortOut () {
	if (hasRequired_shortOut) return _shortOut;
	hasRequired_shortOut = 1;
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	_shortOut = shortOut;
	return _shortOut;
}

var _setToString;
var hasRequired_setToString;

function require_setToString () {
	if (hasRequired_setToString) return _setToString;
	hasRequired_setToString = 1;
	var baseSetToString = require_baseSetToString(),
	    shortOut = require_shortOut();

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);

	_setToString = setToString;
	return _setToString;
}

var _baseRest;
var hasRequired_baseRest;

function require_baseRest () {
	if (hasRequired_baseRest) return _baseRest;
	hasRequired_baseRest = 1;
	var identity = requireIdentity(),
	    overRest = require_overRest(),
	    setToString = require_setToString();

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}

	_baseRest = baseRest;
	return _baseRest;
}

var _isIterateeCall;
var hasRequired_isIterateeCall;

function require_isIterateeCall () {
	if (hasRequired_isIterateeCall) return _isIterateeCall;
	hasRequired_isIterateeCall = 1;
	var eq = requireEq(),
	    isArrayLike = requireIsArrayLike(),
	    isIndex = require_isIndex(),
	    isObject = requireIsObject();

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	_isIterateeCall = isIterateeCall;
	return _isIterateeCall;
}

var _createAssigner;
var hasRequired_createAssigner;

function require_createAssigner () {
	if (hasRequired_createAssigner) return _createAssigner;
	hasRequired_createAssigner = 1;
	var baseRest = require_baseRest(),
	    isIterateeCall = require_isIterateeCall();

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	_createAssigner = createAssigner;
	return _createAssigner;
}

var merge_1;
var hasRequiredMerge;

function requireMerge () {
	if (hasRequiredMerge) return merge_1;
	hasRequiredMerge = 1;
	var baseMerge = require_baseMerge(),
	    createAssigner = require_createAssigner();

	/**
	 * This method is like `_.assign` except that it recursively merges own and
	 * inherited enumerable string keyed properties of source objects into the
	 * destination object. Source properties that resolve to `undefined` are
	 * skipped if a destination value exists. Array and plain object properties
	 * are merged recursively. Other objects and value types are overridden by
	 * assignment. Source objects are applied from left to right. Subsequent
	 * sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.5.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = {
	 *   'a': [{ 'b': 2 }, { 'd': 4 }]
	 * };
	 *
	 * var other = {
	 *   'a': [{ 'c': 3 }, { 'e': 5 }]
	 * };
	 *
	 * _.merge(object, other);
	 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
	 */
	var merge = createAssigner(function(object, source, srcIndex) {
	  baseMerge(object, source, srcIndex);
	});

	merge_1 = merge;
	return merge_1;
}

var utils = {};

var hasRequiredUtils;

function requireUtils () {
	if (hasRequiredUtils) return utils;
	hasRequiredUtils = 1;

	Object.defineProperty(utils, "__esModule", {
	  value: true
	});
	var scrollbarVerticalSize;
	var scrollbarHorizontalSize; // Measure scrollbar width for padding body during modal show/hide

	var scrollbarMeasure = {
	  position: 'absolute',
	  top: '-9999px',
	  width: '50px',
	  height: '50px'
	}; // This const is used for colgroup.col internal props. And should not provides to user.

	utils.INTERNAL_COL_DEFINE = 'RC_TABLE_INTERNAL_COL_DEFINE';

	function measureScrollbar(_ref) {
	  var _ref$direction = _ref.direction,
	      direction = _ref$direction === void 0 ? 'vertical' : _ref$direction,
	      prefixCls = _ref.prefixCls;

	  if (typeof document === 'undefined' || typeof window === 'undefined') {
	    return 0;
	  }

	  var isVertical = direction === 'vertical';

	  if (isVertical && scrollbarVerticalSize) {
	    return scrollbarVerticalSize;
	  }

	  if (!isVertical && scrollbarHorizontalSize) {
	    return scrollbarHorizontalSize;
	  }

	  var scrollDiv = document.createElement('div');
	  Object.keys(scrollbarMeasure).forEach(function (scrollProp) {
	    scrollDiv.style[scrollProp] = scrollbarMeasure[scrollProp];
	  }); // apply hide scrollbar className ahead

	  scrollDiv.className = "".concat(prefixCls, "-hide-scrollbar scroll-div-append-to-body"); // Append related overflow style

	  if (isVertical) {
	    scrollDiv.style.overflowY = 'scroll';
	  } else {
	    scrollDiv.style.overflowX = 'scroll';
	  }

	  document.body.appendChild(scrollDiv);
	  var size = 0;

	  if (isVertical) {
	    size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	    scrollbarVerticalSize = size;
	  } else {
	    size = scrollDiv.offsetHeight - scrollDiv.clientHeight;
	    scrollbarHorizontalSize = size;
	  }

	  document.body.removeChild(scrollDiv);
	  return size;
	}

	utils.measureScrollbar = measureScrollbar;

	function debounce(func, wait, immediate) {
	  var timeout;

	  function debounceFunc() {
	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var context = this; // https://fb.me/react-event-pooling

	    if (args[0] && args[0].persist) {
	      args[0].persist();
	    }

	    var later = function later() {
	      timeout = null;

	      if (!immediate) {
	        func.apply(context, args);
	      }
	    };

	    var callNow = immediate && !timeout;
	    clearTimeout(timeout);
	    timeout = setTimeout(later, wait);

	    if (callNow) {
	      func.apply(context, args);
	    }
	  }

	  debounceFunc.cancel = function cancel() {
	    if (timeout) {
	      clearTimeout(timeout);
	      timeout = null;
	    }
	  };

	  return debounceFunc;
	}

	utils.debounce = debounce;

	function remove(array, item) {
	  var index = array.indexOf(item);
	  var front = array.slice(0, index);
	  var last = array.slice(index + 1, array.length);
	  return front.concat(last);
	}

	utils.remove = remove;
	/**
	 * Returns only data- and aria- key/value pairs
	 * @param {object} props
	 */

	function getDataAndAriaProps(props) {
	  return Object.keys(props).reduce(function (memo, key) {
	    if (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-') {
	      memo[key] = props[key];
	    }

	    return memo;
	  }, {});
	}

	utils.getDataAndAriaProps = getDataAndAriaProps;
	return utils;
}

var ColumnManager = {};

var hasRequiredColumnManager;

function requireColumnManager () {
	if (hasRequiredColumnManager) return ColumnManager;
	hasRequiredColumnManager = 1;

	function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

	function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

	function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

	function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

	function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

	function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); return Constructor; }

	var __importStar = ColumnManager && ColumnManager.__importStar || function (mod) {
	  if (mod && mod.__esModule) return mod;
	  var result = {};
	  if (mod != null) for (var k in mod) {
	    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
	  }
	  result["default"] = mod;
	  return result;
	};

	Object.defineProperty(ColumnManager, "__esModule", {
	  value: true
	});
	/* eslint-disable no-underscore-dangle */

	var React = __importStar(React__default);

	var ColumnManager$1 = /*#__PURE__*/function () {
	  function ColumnManager(columns, elements) {
	    _classCallCheck(this, ColumnManager);

	    this._cached = {};
	    this.columns = columns || this.normalize(elements);
	  }

	  _createClass(ColumnManager, [{
	    key: "isAnyColumnsFixed",
	    value: function isAnyColumnsFixed() {
	      var _this = this;

	      return this._cache('isAnyColumnsFixed', function () {
	        return _this.columns.some(function (column) {
	          return !!column.fixed;
	        });
	      });
	    }
	  }, {
	    key: "isAnyColumnsLeftFixed",
	    value: function isAnyColumnsLeftFixed() {
	      var _this2 = this;

	      return this._cache('isAnyColumnsLeftFixed', function () {
	        return _this2.columns.some(function (column) {
	          return column.fixed === 'left' || column.fixed === true;
	        });
	      });
	    }
	  }, {
	    key: "isAnyColumnsRightFixed",
	    value: function isAnyColumnsRightFixed() {
	      var _this3 = this;

	      return this._cache('isAnyColumnsRightFixed', function () {
	        return _this3.columns.some(function (column) {
	          return column.fixed === 'right';
	        });
	      });
	    }
	  }, {
	    key: "leftColumns",
	    value: function leftColumns() {
	      var _this4 = this;

	      return this._cache('leftColumns', function () {
	        return _this4.groupedColumns().filter(function (column) {
	          return column.fixed === 'left' || column.fixed === true;
	        });
	      });
	    }
	  }, {
	    key: "rightColumns",
	    value: function rightColumns() {
	      var _this5 = this;

	      return this._cache('rightColumns', function () {
	        return _this5.groupedColumns().filter(function (column) {
	          return column.fixed === 'right';
	        });
	      });
	    }
	  }, {
	    key: "leafColumns",
	    value: function leafColumns() {
	      var _this6 = this;

	      return this._cache('leafColumns', function () {
	        return _this6._leafColumns(_this6.columns);
	      });
	    }
	  }, {
	    key: "leftLeafColumns",
	    value: function leftLeafColumns() {
	      var _this7 = this;

	      return this._cache('leftLeafColumns', function () {
	        return _this7._leafColumns(_this7.leftColumns());
	      });
	    }
	  }, {
	    key: "rightLeafColumns",
	    value: function rightLeafColumns() {
	      var _this8 = this;

	      return this._cache('rightLeafColumns', function () {
	        return _this8._leafColumns(_this8.rightColumns());
	      });
	    } // add appropriate rowspan and colspan to column

	  }, {
	    key: "groupedColumns",
	    value: function groupedColumns() {
	      var _this9 = this;

	      return this._cache('groupedColumns', function () {
	        var _groupColumns = function _groupColumns(columns) {
	          var currentRow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	          var parentColumn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	          var rows = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

	          /* eslint-disable no-param-reassign */
	          // track how many rows we got
	          rows[currentRow] = rows[currentRow] || [];
	          var grouped = [];

	          var setRowSpan = function setRowSpan(column) {
	            var rowSpan = rows.length - currentRow;

	            if (column && !column.children && // parent columns are supposed to be one row
	            rowSpan > 1 && (!column.rowSpan || column.rowSpan < rowSpan)) {
	              column.rowSpan = rowSpan;
	            }
	          };

	          columns.forEach(function (column, index) {
	            var newColumn = _objectSpread({}, column);

	            rows[currentRow].push(newColumn);
	            parentColumn.colSpan = parentColumn.colSpan || 0;

	            if (newColumn.children && newColumn.children.length > 0) {
	              newColumn.children = _groupColumns(newColumn.children, currentRow + 1, newColumn, rows);
	              parentColumn.colSpan += newColumn.colSpan;
	            } else {
	              parentColumn.colSpan += 1;
	            } // update rowspan to all same row columns


	            for (var i = 0; i < rows[currentRow].length - 1; i += 1) {
	              setRowSpan(rows[currentRow][i]);
	            } // last column, update rowspan immediately


	            if (index + 1 === columns.length) {
	              setRowSpan(newColumn);
	            }

	            grouped.push(newColumn);
	          });
	          return grouped;
	          /* eslint-enable no-param-reassign */
	        };

	        return _groupColumns(_this9.columns);
	      });
	    }
	  }, {
	    key: "normalize",
	    value: function normalize(elements) {
	      var _this10 = this;

	      var columns = [];
	      React.Children.forEach(elements, function (element) {
	        if (!React.isValidElement(element)) {
	          return;
	        }

	        var column = _objectSpread({}, element.props);

	        if (element.key) {
	          column.key = element.key;
	        }

	        if (element.type.isTableColumnGroup) {
	          column.children = _this10.normalize(column.children);
	        }

	        columns.push(column);
	      });
	      return columns;
	    }
	  }, {
	    key: "reset",
	    value: function reset(columns, elements) {
	      this.columns = columns || this.normalize(elements);
	      this._cached = {};
	    }
	  }, {
	    key: "_cache",
	    value: function _cache(name, fn) {
	      if (name in this._cached) {
	        return this._cached[name];
	      }

	      this._cached[name] = fn();
	      return this._cached[name];
	    }
	  }, {
	    key: "_leafColumns",
	    value: function _leafColumns(columns) {
	      var _this11 = this;

	      var leafColumns = [];
	      columns.forEach(function (column) {
	        if (!column.children) {
	          leafColumns.push(column);
	        } else {
	          leafColumns.push.apply(leafColumns, _toConsumableArray(_this11._leafColumns(column.children)));
	        }
	      });
	      return leafColumns;
	    }
	  }]);

	  return ColumnManager;
	}();

	ColumnManager.default = ColumnManager$1;
	/* eslint-enable */
	return ColumnManager;
}

var HeadTable = {};

var BaseTable = {};

var ColGroup = {};

var hasRequiredColGroup;

function requireColGroup () {
	if (hasRequiredColGroup) return ColGroup;
	hasRequiredColGroup = 1;

	var __importStar = ColGroup && ColGroup.__importStar || function (mod) {
	  if (mod && mod.__esModule) return mod;
	  var result = {};
	  if (mod != null) for (var k in mod) {
	    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
	  }
	  result["default"] = mod;
	  return result;
	};

	Object.defineProperty(ColGroup, "__esModule", {
	  value: true
	});

	var React = __importStar(React__default);

	var PropTypes = __importStar(/*@__PURE__*/ requirePropTypes());

	var utils_1 = requireUtils();

	var ColGroup$1 = function ColGroup(props, _ref) {
	  var table = _ref.table;
	  var _table$props = table.props,
	      prefixCls = _table$props.prefixCls,
	      expandIconAsCell = _table$props.expandIconAsCell;
	  var fixed = props.fixed;
	  var cols = [];

	  if (expandIconAsCell && fixed !== 'right') {
	    cols.push(React.createElement("col", {
	      className: "".concat(prefixCls, "-expand-icon-col"),
	      key: "rc-table-expand-icon-col"
	    }));
	  }

	  var leafColumns;

	  if (fixed === 'left') {
	    leafColumns = table.columnManager.leftLeafColumns();
	  } else if (fixed === 'right') {
	    leafColumns = table.columnManager.rightLeafColumns();
	  } else {
	    leafColumns = table.columnManager.leafColumns();
	  }

	  cols = cols.concat(leafColumns.map(function (_ref2) {
	    var key = _ref2.key,
	        dataIndex = _ref2.dataIndex,
	        width = _ref2.width,
	        additionalProps = _ref2[utils_1.INTERNAL_COL_DEFINE];
	    var mergedKey = key !== undefined ? key : dataIndex;
	    return React.createElement("col", Object.assign({
	      key: mergedKey,
	      style: {
	        width: width,
	        minWidth: width
	      }
	    }, additionalProps));
	  }));
	  return React.createElement("colgroup", null, cols);
	};

	ColGroup$1.contextTypes = {
	  table: PropTypes.any
	};
	ColGroup.default = ColGroup$1;
	return ColGroup;
}

var TableHeader = {};

var TableHeaderRow = {};

var hasRequiredTableHeaderRow;

function requireTableHeaderRow () {
	if (hasRequiredTableHeaderRow) return TableHeaderRow;
	hasRequiredTableHeaderRow = 1;

	function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

	function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var __importStar = TableHeaderRow && TableHeaderRow.__importStar || function (mod) {
	  if (mod && mod.__esModule) return mod;
	  var result = {};
	  if (mod != null) for (var k in mod) {
	    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
	  }
	  result["default"] = mod;
	  return result;
	};

	var __importDefault = TableHeaderRow && TableHeaderRow.__importDefault || function (mod) {
	  return mod && mod.__esModule ? mod : {
	    "default": mod
	  };
	};

	Object.defineProperty(TableHeaderRow, "__esModule", {
	  value: true
	});

	var React = __importStar(React__default);

	var mini_store_1 = requireLib$1();

	var classnames_1 = __importDefault(requireClassnames());

	function TableHeaderRow$1(_ref) {
	  var row = _ref.row,
	      index = _ref.index,
	      height = _ref.height,
	      components = _ref.components,
	      onHeaderRow = _ref.onHeaderRow,
	      prefixCls = _ref.prefixCls;
	  var HeaderRow = components.header.row;
	  var HeaderCell = components.header.cell;
	  var rowProps = onHeaderRow(row.map(function (cell) {
	    return cell.column;
	  }), index);
	  var customStyle = rowProps ? rowProps.style : {};

	  var style = _objectSpread({
	    // https://github.com/ant-design/ant-design/issues/20126
	    // https://github.com/ant-design/ant-design/issues/20269
	    // https://github.com/ant-design/ant-design/issues/20495
	    height: row.length > 1 && index === 0 && height && height !== 'auto' ? parseInt(height.toString(), 10) : height
	  }, customStyle);

	  return React.createElement(HeaderRow, Object.assign({}, rowProps, {
	    style: style
	  }), row.map(function (cell, i) {
	    var _classnames_1$default;

	    var column = cell.column,
	        isLast = cell.isLast,
	        cellProps = _objectWithoutProperties(cell, ["column", "isLast"]);

	    var customProps = column.onHeaderCell ? column.onHeaderCell(column) : {};

	    if (column.align) {
	      customProps.style = _objectSpread({}, customProps.style, {
	        textAlign: column.align
	      });
	    }

	    customProps.className = classnames_1.default(customProps.className, column.className, (_classnames_1$default = {}, _defineProperty(_classnames_1$default, "".concat(prefixCls, "-align-").concat(column.align), !!column.align), _defineProperty(_classnames_1$default, "".concat(prefixCls, "-row-cell-ellipsis"), !!column.ellipsis), _defineProperty(_classnames_1$default, "".concat(prefixCls, "-row-cell-break-word"), !!column.width), _defineProperty(_classnames_1$default, "".concat(prefixCls, "-row-cell-last"), isLast), _classnames_1$default));
	    return React.createElement(HeaderCell, Object.assign({}, cellProps, customProps, {
	      key: column.key || column.dataIndex || i
	    }));
	  }));
	}

	function getRowHeight(state, props) {
	  var fixedColumnsHeadRowsHeight = state.fixedColumnsHeadRowsHeight;
	  var columns = props.columns,
	      rows = props.rows,
	      fixed = props.fixed;
	  var headerHeight = fixedColumnsHeadRowsHeight[0];

	  if (!fixed) {
	    return null;
	  }

	  if (headerHeight && columns) {
	    if (headerHeight === 'auto') {
	      return 'auto';
	    }

	    return headerHeight / rows.length;
	  }

	  return null;
	}

	TableHeaderRow.default = mini_store_1.connect(function (state, props) {
	  return {
	    height: getRowHeight(state, props)
	  };
	})(TableHeaderRow$1);
	return TableHeaderRow;
}

var hasRequiredTableHeader;

function requireTableHeader () {
	if (hasRequiredTableHeader) return TableHeader;
	hasRequiredTableHeader = 1;

	var __importStar = TableHeader && TableHeader.__importStar || function (mod) {
	  if (mod && mod.__esModule) return mod;
	  var result = {};
	  if (mod != null) for (var k in mod) {
	    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
	  }
	  result["default"] = mod;
	  return result;
	};

	var __importDefault = TableHeader && TableHeader.__importDefault || function (mod) {
	  return mod && mod.__esModule ? mod : {
	    "default": mod
	  };
	};

	Object.defineProperty(TableHeader, "__esModule", {
	  value: true
	});

	var React = __importStar(React__default);

	var PropTypes = __importStar(/*@__PURE__*/ requirePropTypes());

	var TableHeaderRow_1 = __importDefault(requireTableHeaderRow());

	function getHeaderRows(_ref) {
	  var _ref$columns = _ref.columns,
	      columns = _ref$columns === void 0 ? [] : _ref$columns,
	      _ref$currentRow = _ref.currentRow,
	      currentRow = _ref$currentRow === void 0 ? 0 : _ref$currentRow,
	      _ref$rows = _ref.rows,
	      rows = _ref$rows === void 0 ? [] : _ref$rows,
	      _ref$isLast = _ref.isLast,
	      isLast = _ref$isLast === void 0 ? true : _ref$isLast;
	  // eslint-disable-next-line no-param-reassign
	  rows[currentRow] = rows[currentRow] || [];
	  columns.forEach(function (column, i) {
	    if (column.rowSpan && rows.length < column.rowSpan) {
	      while (rows.length < column.rowSpan) {
	        rows.push([]);
	      }
	    }

	    var cellIsLast = isLast && i === columns.length - 1;
	    var cell = {
	      key: column.key,
	      className: column.className || '',
	      children: column.title,
	      isLast: cellIsLast,
	      column: column
	    };

	    if (column.children) {
	      getHeaderRows({
	        columns: column.children,
	        currentRow: currentRow + 1,
	        rows: rows,
	        isLast: cellIsLast
	      });
	    }

	    if ('colSpan' in column) {
	      cell.colSpan = column.colSpan;
	    }

	    if ('rowSpan' in column) {
	      cell.rowSpan = column.rowSpan;
	    }

	    if (cell.colSpan !== 0) {
	      rows[currentRow].push(cell);
	    }
	  });
	  return rows.filter(function (row) {
	    return row.length > 0;
	  });
	}

	var TableHeader$1 = function TableHeader(props, _ref2) {
	  var table = _ref2.table;
	  var components = table.components;
	  var _table$props = table.props,
	      prefixCls = _table$props.prefixCls,
	      showHeader = _table$props.showHeader,
	      onHeaderRow = _table$props.onHeaderRow;
	  var expander = props.expander,
	      columns = props.columns,
	      fixed = props.fixed;

	  if (!showHeader) {
	    return null;
	  }

	  var rows = getHeaderRows({
	    columns: columns
	  });
	  expander.renderExpandIndentCell(rows, fixed);
	  var HeaderWrapper = components.header.wrapper;
	  return React.createElement(HeaderWrapper, {
	    className: "".concat(prefixCls, "-thead")
	  }, rows.map(function (row, index) {
	    return React.createElement(TableHeaderRow_1.default, {
	      prefixCls: prefixCls,
	      key: index,
	      index: index,
	      fixed: fixed,
	      columns: columns,
	      rows: rows,
	      row: row,
	      components: components,
	      onHeaderRow: onHeaderRow
	    });
	  }));
	};

	TableHeader$1.contextTypes = {
	  table: PropTypes.any
	};
	TableHeader.default = TableHeader$1;
	return TableHeader;
}

var TableRow = {};

var TableCell = {};

var hasRequiredTableCell;

function requireTableCell () {
	if (hasRequiredTableCell) return TableCell;
	hasRequiredTableCell = 1;

	function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); return Constructor; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	var __importStar = TableCell && TableCell.__importStar || function (mod) {
	  if (mod && mod.__esModule) return mod;
	  var result = {};
	  if (mod != null) for (var k in mod) {
	    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
	  }
	  result["default"] = mod;
	  return result;
	};

	var __importDefault = TableCell && TableCell.__importDefault || function (mod) {
	  return mod && mod.__esModule ? mod : {
	    "default": mod
	  };
	};

	Object.defineProperty(TableCell, "__esModule", {
	  value: true
	});

	var React = __importStar(React__default);

	var classnames_1 = __importDefault(requireClassnames());

	var get_1 = __importDefault(requireGet());

	function isInvalidRenderCellText(text) {
	  return text && !React.isValidElement(text) && Object.prototype.toString.call(text) === '[object Object]';
	}

	var TableCell$1 = /*#__PURE__*/function (_React$Component) {
	  _inherits(TableCell, _React$Component);

	  var _super = _createSuper(TableCell);

	  function TableCell() {
	    var _this;

	    _classCallCheck(this, TableCell);

	    _this = _super.apply(this, arguments);

	    _this.handleClick = function (e) {
	      var _this$props = _this.props,
	          record = _this$props.record,
	          onCellClick = _this$props.column.onCellClick;

	      if (onCellClick) {
	        onCellClick(record, e);
	      }
	    };

	    return _this;
	  }

	  _createClass(TableCell, [{
	    key: "render",
	    value: function render() {
	      var _classnames_1$default;

	      var _this$props2 = this.props,
	          record = _this$props2.record,
	          indentSize = _this$props2.indentSize,
	          prefixCls = _this$props2.prefixCls,
	          indent = _this$props2.indent,
	          index = _this$props2.index,
	          expandIcon = _this$props2.expandIcon,
	          column = _this$props2.column,
	          BodyCell = _this$props2.component;
	      var dataIndex = column.dataIndex,
	          render = column.render,
	          _column$className = column.className,
	          className = _column$className === void 0 ? '' : _column$className; // We should return undefined if no dataIndex is specified, but in order to
	      // be compatible with object-path's behavior, we return the record object instead.

	      var text;

	      if (typeof dataIndex === 'number') {
	        text = get_1.default(record, dataIndex);
	      } else if (!dataIndex || dataIndex.length === 0) {
	        text = record;
	      } else {
	        text = get_1.default(record, dataIndex);
	      }

	      var tdProps = {};
	      var colSpan;
	      var rowSpan;

	      if (render) {
	        text = render(text, record, index); // `render` support cell with additional config like `props`

	        if (isInvalidRenderCellText(text)) {
	          tdProps = text.props || tdProps;
	          var _tdProps = tdProps;
	          colSpan = _tdProps.colSpan;
	          rowSpan = _tdProps.rowSpan;
	          text = text.children;
	        }
	      }

	      if (column.onCell) {
	        tdProps = _objectSpread({}, tdProps, {}, column.onCell(record, index));
	      } // Fix https://github.com/ant-design/ant-design/issues/1202


	      if (isInvalidRenderCellText(text)) {
	        text = null;
	      }

	      var indentText = expandIcon ? React.createElement("span", {
	        style: {
	          paddingLeft: "".concat(indentSize * indent, "px")
	        },
	        className: "".concat(prefixCls, "-indent indent-level-").concat(indent)
	      }) : null;

	      if (rowSpan === 0 || colSpan === 0) {
	        return null;
	      }

	      if (column.align) {
	        tdProps.style = _objectSpread({
	          textAlign: column.align
	        }, tdProps.style);
	      }

	      var cellClassName = classnames_1.default(className, (_classnames_1$default = {}, _defineProperty(_classnames_1$default, "".concat(prefixCls, "-cell-ellipsis"), !!column.ellipsis), _defineProperty(_classnames_1$default, "".concat(prefixCls, "-cell-break-word"), !!column.width), _classnames_1$default));

	      if (column.ellipsis) {
	        if (typeof text === 'string') {
	          tdProps.title = text;
	        } else if (text) {
	          var _text = text,
	              textProps = _text.props;

	          if (textProps && textProps.children && typeof textProps.children === 'string') {
	            tdProps.title = textProps.children;
	          }
	        }
	      }

	      return React.createElement(BodyCell, Object.assign({
	        className: cellClassName,
	        onClick: this.handleClick
	      }, tdProps), indentText, expandIcon, text);
	    }
	  }]);

	  return TableCell;
	}(React.Component);

	TableCell.default = TableCell$1;
	return TableCell;
}

var hasRequiredTableRow;

function requireTableRow () {
	if (hasRequiredTableRow) return TableRow;
	hasRequiredTableRow = 1;

	function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

	function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	var __importStar = TableRow && TableRow.__importStar || function (mod) {
	  if (mod && mod.__esModule) return mod;
	  var result = {};
	  if (mod != null) for (var k in mod) {
	    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
	  }
	  result["default"] = mod;
	  return result;
	};

	var __importDefault = TableRow && TableRow.__importDefault || function (mod) {
	  return mod && mod.__esModule ? mod : {
	    "default": mod
	  };
	};

	Object.defineProperty(TableRow, "__esModule", {
	  value: true
	});

	var React = __importStar(React__default);

	var react_dom_1 = __importDefault(ReactDOM__default);

	var warning_1 = __importDefault(requireWarning());

	var mini_store_1 = requireLib$1();

	var react_lifecycles_compat_1 = require$$9;

	var classnames_1 = __importDefault(requireClassnames());

	var TableCell_1 = __importDefault(requireTableCell());

	var TableRow$1 = /*#__PURE__*/function (_React$Component) {
	  _inherits(TableRow, _React$Component);

	  var _super = _createSuper(TableRow);

	  function TableRow() {
	    var _this;

	    _classCallCheck(this, TableRow);

	    _this = _super.apply(this, arguments);
	    _this.state = {};

	    _this.onTriggerEvent = function (rowPropFunc, legacyFunc, additionalFunc) {
	      var _this$props = _this.props,
	          record = _this$props.record,
	          index = _this$props.index;
	      return function () {
	        // Additional function like trigger `this.onHover` to handle self logic
	        if (additionalFunc) {
	          additionalFunc();
	        } // [Legacy] Some legacy function like `onRowClick`.


	        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        var event = args[0];

	        if (legacyFunc) {
	          legacyFunc(record, index, event);
	        } // Pass to the function from `onRow`


	        if (rowPropFunc) {
	          rowPropFunc.apply(void 0, args);
	        }
	      };
	    };

	    _this.onMouseEnter = function () {
	      var _this$props2 = _this.props,
	          onHover = _this$props2.onHover,
	          rowKey = _this$props2.rowKey;
	      onHover(true, rowKey);
	    };

	    _this.onMouseLeave = function () {
	      var _this$props3 = _this.props,
	          onHover = _this$props3.onHover,
	          rowKey = _this$props3.rowKey;
	      onHover(false, rowKey);
	    };

	    return _this;
	  }

	  _createClass(TableRow, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      if (this.state.shouldRender) {
	        this.saveRowRef();
	      }
	    }
	  }, {
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(nextProps) {
	      return !!(this.props.visible || nextProps.visible);
	    }
	  }, {
	    key: "componentDidUpdate",
	    value: function componentDidUpdate() {
	      if (this.state.shouldRender && !this.rowRef) {
	        this.saveRowRef();
	      }
	    }
	  }, {
	    key: "setExpandedRowHeight",
	    value: function setExpandedRowHeight() {
	      var _this$props4 = this.props,
	          store = _this$props4.store,
	          rowKey = _this$props4.rowKey;

	      var _store$getState = store.getState(),
	          expandedRowsHeight = _store$getState.expandedRowsHeight;

	      var _this$rowRef$getBound = this.rowRef.getBoundingClientRect(),
	          height = _this$rowRef$getBound.height;

	      expandedRowsHeight = _objectSpread({}, expandedRowsHeight, _defineProperty({}, rowKey, height));
	      store.setState({
	        expandedRowsHeight: expandedRowsHeight
	      });
	    }
	  }, {
	    key: "setRowHeight",
	    value: function setRowHeight() {
	      var _this$props5 = this.props,
	          store = _this$props5.store,
	          rowKey = _this$props5.rowKey;

	      var _store$getState2 = store.getState(),
	          fixedColumnsBodyRowsHeight = _store$getState2.fixedColumnsBodyRowsHeight;

	      var _this$rowRef$getBound2 = this.rowRef.getBoundingClientRect(),
	          height = _this$rowRef$getBound2.height;

	      store.setState({
	        fixedColumnsBodyRowsHeight: _objectSpread({}, fixedColumnsBodyRowsHeight, _defineProperty({}, rowKey, height))
	      });
	    }
	  }, {
	    key: "getStyle",
	    value: function getStyle() {
	      var _this$props6 = this.props,
	          height = _this$props6.height,
	          visible = _this$props6.visible;

	      if (height && height !== this.style.height) {
	        this.style = _objectSpread({}, this.style, {
	          height: height
	        });
	      }

	      if (!visible && !this.style.display) {
	        this.style = _objectSpread({}, this.style, {
	          display: 'none'
	        });
	      }

	      return this.style;
	    }
	  }, {
	    key: "saveRowRef",
	    value: function saveRowRef() {
	      this.rowRef = react_dom_1.default.findDOMNode(this);
	      var _this$props7 = this.props,
	          isAnyColumnsFixed = _this$props7.isAnyColumnsFixed,
	          fixed = _this$props7.fixed,
	          expandedRow = _this$props7.expandedRow,
	          ancestorKeys = _this$props7.ancestorKeys;

	      if (!isAnyColumnsFixed || !this.rowRef) {
	        return;
	      }

	      if (!fixed && expandedRow) {
	        this.setExpandedRowHeight();
	      }

	      if (!fixed && ancestorKeys.length >= 0) {
	        this.setRowHeight();
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      if (!this.state.shouldRender) {
	        return null;
	      }

	      var _this$props8 = this.props,
	          prefixCls = _this$props8.prefixCls,
	          columns = _this$props8.columns,
	          record = _this$props8.record,
	          rowKey = _this$props8.rowKey,
	          index = _this$props8.index,
	          onRow = _this$props8.onRow,
	          indent = _this$props8.indent,
	          indentSize = _this$props8.indentSize,
	          hovered = _this$props8.hovered,
	          height = _this$props8.height,
	          visible = _this$props8.visible,
	          components = _this$props8.components,
	          hasExpandIcon = _this$props8.hasExpandIcon,
	          renderExpandIcon = _this$props8.renderExpandIcon,
	          renderExpandIconCell = _this$props8.renderExpandIconCell,
	          onRowClick = _this$props8.onRowClick,
	          onRowDoubleClick = _this$props8.onRowDoubleClick,
	          onRowMouseEnter = _this$props8.onRowMouseEnter,
	          onRowMouseLeave = _this$props8.onRowMouseLeave,
	          onRowContextMenu = _this$props8.onRowContextMenu;
	      var BodyRow = components.body.row;
	      var BodyCell = components.body.cell;
	      var className = this.props.className;

	      if (hovered) {
	        className += " ".concat(prefixCls, "-hover");
	      }

	      var cells = [];
	      renderExpandIconCell(cells);

	      for (var i = 0; i < columns.length; i += 1) {
	        var column = columns[i];
	        warning_1.default(column.onCellClick === undefined, 'column[onCellClick] is deprecated, please use column[onCell] instead.');
	        cells.push(React.createElement(TableCell_1.default, {
	          prefixCls: prefixCls,
	          record: record,
	          indentSize: indentSize,
	          indent: indent,
	          index: index,
	          column: column,
	          key: column.key || column.dataIndex,
	          expandIcon: hasExpandIcon(i) && renderExpandIcon(),
	          component: BodyCell
	        }));
	      }

	      var _ref = onRow(record, index) || {},
	          customClassName = _ref.className,
	          customStyle = _ref.style,
	          rowProps = _objectWithoutProperties(_ref, ["className", "style"]);

	      var style = {
	        height: height
	      };

	      if (!visible) {
	        style.display = 'none';
	      }

	      style = _objectSpread({}, style, {}, customStyle);
	      var rowClassName = classnames_1.default(prefixCls, className, "".concat(prefixCls, "-level-").concat(indent), customClassName);
	      return React.createElement(BodyRow, Object.assign({}, rowProps, {
	        onClick: this.onTriggerEvent(rowProps.onClick, onRowClick),
	        onDoubleClick: this.onTriggerEvent(rowProps.onDoubleClick, onRowDoubleClick),
	        onMouseEnter: this.onTriggerEvent(rowProps.onMouseEnter, onRowMouseEnter, this.onMouseEnter),
	        onMouseLeave: this.onTriggerEvent(rowProps.onMouseLeave, onRowMouseLeave, this.onMouseLeave),
	        onContextMenu: this.onTriggerEvent(rowProps.onContextMenu, onRowContextMenu),
	        className: rowClassName,
	        style: style,
	        "data-row-key": rowKey
	      }), cells);
	    }
	  }], [{
	    key: "getDerivedStateFromProps",
	    value: function getDerivedStateFromProps(nextProps, prevState) {
	      if (prevState.visible || !prevState.visible && nextProps.visible) {
	        return {
	          shouldRender: true,
	          visible: nextProps.visible
	        };
	      }

	      return {
	        visible: nextProps.visible
	      };
	    }
	  }]);

	  return TableRow;
	}(React.Component);

	TableRow$1.defaultProps = {
	  onRow: function onRow() {},
	  onHover: function onHover() {},
	  hasExpandIcon: function hasExpandIcon() {},
	  renderExpandIcon: function renderExpandIcon() {},
	  renderExpandIconCell: function renderExpandIconCell() {}
	};

	function getRowHeight(state, props) {
	  var expandedRowsHeight = state.expandedRowsHeight,
	      fixedColumnsBodyRowsHeight = state.fixedColumnsBodyRowsHeight;
	  var fixed = props.fixed,
	      rowKey = props.rowKey;

	  if (!fixed) {
	    return null;
	  }

	  if (expandedRowsHeight[rowKey]) {
	    return expandedRowsHeight[rowKey];
	  }

	  if (fixedColumnsBodyRowsHeight[rowKey]) {
	    return fixedColumnsBodyRowsHeight[rowKey];
	  }

	  return null;
	}

	react_lifecycles_compat_1.polyfill(TableRow$1);
	TableRow.default = mini_store_1.connect(function (state, props) {
	  var currentHoverKey = state.currentHoverKey,
	      _state$expandedRowKey = state.expandedRowKeys,
	      expandedRowKeys = _state$expandedRowKey === void 0 ? [] : _state$expandedRowKey;
	  var rowKey = props.rowKey,
	      ancestorKeys = props.ancestorKeys;
	  var visible = ancestorKeys.length === 0 || ancestorKeys.every(function (k) {
	    return expandedRowKeys.includes(k);
	  });
	  return {
	    visible: visible,
	    hovered: currentHoverKey === rowKey,
	    height: getRowHeight(state, props)
	  };
	})(TableRow$1);
	return TableRow;
}

var ExpandableRow = {};

var ExpandIcon = {};

var hasRequiredExpandIcon;

function requireExpandIcon () {
	if (hasRequiredExpandIcon) return ExpandIcon;
	hasRequiredExpandIcon = 1;

	function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); return Constructor; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	var __importStar = ExpandIcon && ExpandIcon.__importStar || function (mod) {
	  if (mod && mod.__esModule) return mod;
	  var result = {};
	  if (mod != null) for (var k in mod) {
	    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
	  }
	  result["default"] = mod;
	  return result;
	};

	var __importDefault = ExpandIcon && ExpandIcon.__importDefault || function (mod) {
	  return mod && mod.__esModule ? mod : {
	    "default": mod
	  };
	};

	Object.defineProperty(ExpandIcon, "__esModule", {
	  value: true
	});

	var React = __importStar(React__default);

	var shallowequal_1 = __importDefault(requireShallowequal());

	var ExpandIcon$1 = /*#__PURE__*/function (_React$Component) {
	  _inherits(ExpandIcon, _React$Component);

	  var _super = _createSuper(ExpandIcon);

	  function ExpandIcon() {
	    _classCallCheck(this, ExpandIcon);

	    return _super.apply(this, arguments);
	  }

	  _createClass(ExpandIcon, [{
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(nextProps) {
	      return !shallowequal_1.default(nextProps, this.props);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this$props = this.props,
	          expandable = _this$props.expandable,
	          prefixCls = _this$props.prefixCls,
	          onExpand = _this$props.onExpand,
	          needIndentSpaced = _this$props.needIndentSpaced,
	          expanded = _this$props.expanded,
	          record = _this$props.record;

	      if (expandable) {
	        var expandClassName = expanded ? 'expanded' : 'collapsed';
	        return React.createElement("span", {
	          className: "".concat(prefixCls, "-expand-icon ").concat(prefixCls, "-").concat(expandClassName),
	          onClick: function onClick(e) {
	            return onExpand(record, e);
	          }
	        });
	      }

	      if (needIndentSpaced) {
	        return React.createElement("span", {
	          className: "".concat(prefixCls, "-expand-icon ").concat(prefixCls, "-spaced")
	        });
	      }

	      return null;
	    }
	  }]);

	  return ExpandIcon;
	}(React.Component);

	ExpandIcon.default = ExpandIcon$1;
	return ExpandIcon;
}

var hasRequiredExpandableRow;

function requireExpandableRow () {
	if (hasRequiredExpandableRow) return ExpandableRow;
	hasRequiredExpandableRow = 1;

	function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); return Constructor; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	var __importStar = ExpandableRow && ExpandableRow.__importStar || function (mod) {
	  if (mod && mod.__esModule) return mod;
	  var result = {};
	  if (mod != null) for (var k in mod) {
	    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
	  }
	  result["default"] = mod;
	  return result;
	};

	var __importDefault = ExpandableRow && ExpandableRow.__importDefault || function (mod) {
	  return mod && mod.__esModule ? mod : {
	    "default": mod
	  };
	};

	Object.defineProperty(ExpandableRow, "__esModule", {
	  value: true
	});

	var React = __importStar(React__default);

	var mini_store_1 = requireLib$1();

	var ExpandIcon_1 = __importDefault(requireExpandIcon());

	var ExpandableRow$1 = /*#__PURE__*/function (_React$Component) {
	  _inherits(ExpandableRow, _React$Component);

	  var _super = _createSuper(ExpandableRow);

	  function ExpandableRow() {
	    var _this;

	    _classCallCheck(this, ExpandableRow);

	    _this = _super.apply(this, arguments); // Show icon within first column

	    _this.hasExpandIcon = function (columnIndex) {
	      var _this$props = _this.props,
	          expandRowByClick = _this$props.expandRowByClick,
	          expandIcon = _this$props.expandIcon;

	      if (_this.expandIconAsCell || columnIndex !== _this.expandIconColumnIndex) {
	        return false;
	      }

	      return !!expandIcon || !expandRowByClick;
	    };

	    _this.handleExpandChange = function (record, event) {
	      var _this$props2 = _this.props,
	          onExpandedChange = _this$props2.onExpandedChange,
	          expanded = _this$props2.expanded,
	          rowKey = _this$props2.rowKey;

	      if (_this.expandable) {
	        onExpandedChange(!expanded, record, event, rowKey);
	      }
	    };

	    _this.handleRowClick = function (record, index, event) {
	      var _this$props3 = _this.props,
	          expandRowByClick = _this$props3.expandRowByClick,
	          onRowClick = _this$props3.onRowClick;

	      if (expandRowByClick) {
	        _this.handleExpandChange(record, event);
	      }

	      if (onRowClick) {
	        onRowClick(record, index, event);
	      }
	    };

	    _this.renderExpandIcon = function () {
	      var _this$props4 = _this.props,
	          prefixCls = _this$props4.prefixCls,
	          expanded = _this$props4.expanded,
	          record = _this$props4.record,
	          needIndentSpaced = _this$props4.needIndentSpaced,
	          expandIcon = _this$props4.expandIcon;

	      if (expandIcon) {
	        return expandIcon({
	          prefixCls: prefixCls,
	          expanded: expanded,
	          record: record,
	          needIndentSpaced: needIndentSpaced,
	          expandable: _this.expandable,
	          onExpand: _this.handleExpandChange
	        });
	      }

	      return React.createElement(ExpandIcon_1.default, {
	        expandable: _this.expandable,
	        prefixCls: prefixCls,
	        onExpand: _this.handleExpandChange,
	        needIndentSpaced: needIndentSpaced,
	        expanded: expanded,
	        record: record
	      });
	    };

	    _this.renderExpandIconCell = function (cells) {
	      if (!_this.expandIconAsCell) {
	        return;
	      }

	      var prefixCls = _this.props.prefixCls;
	      cells.push(React.createElement("td", {
	        className: "".concat(prefixCls, "-expand-icon-cell"),
	        key: "rc-table-expand-icon-cell"
	      }, _this.renderExpandIcon()));
	    };

	    return _this;
	  }

	  _createClass(ExpandableRow, [{
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      this.handleDestroy();
	    }
	  }, {
	    key: "handleDestroy",
	    value: function handleDestroy() {
	      var _this$props5 = this.props,
	          onExpandedChange = _this$props5.onExpandedChange,
	          rowKey = _this$props5.rowKey,
	          record = _this$props5.record;

	      if (this.expandable) {
	        onExpandedChange(false, record, null, rowKey, true);
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this$props6 = this.props,
	          childrenColumnName = _this$props6.childrenColumnName,
	          expandedRowRender = _this$props6.expandedRowRender,
	          indentSize = _this$props6.indentSize,
	          record = _this$props6.record,
	          fixed = _this$props6.fixed,
	          expanded = _this$props6.expanded;
	      this.expandIconAsCell = fixed !== 'right' ? this.props.expandIconAsCell : false;
	      this.expandIconColumnIndex = fixed !== 'right' ? this.props.expandIconColumnIndex : -1;
	      var childrenData = record[childrenColumnName];
	      this.expandable = !!(childrenData || expandedRowRender);
	      var expandableRowProps = {
	        indentSize: indentSize,
	        // not used in TableRow, but it's required to re-render TableRow when `expanded` changes
	        expanded: expanded,
	        onRowClick: this.handleRowClick,
	        hasExpandIcon: this.hasExpandIcon,
	        renderExpandIcon: this.renderExpandIcon,
	        renderExpandIconCell: this.renderExpandIconCell
	      };
	      return this.props.children(expandableRowProps);
	    }
	  }]);

	  return ExpandableRow;
	}(React.Component);

	ExpandableRow.default = mini_store_1.connect(function (_ref, _ref2) {
	  var _ref$expandedRowKeys = _ref.expandedRowKeys,
	      expandedRowKeys = _ref$expandedRowKeys === void 0 ? [] : _ref$expandedRowKeys;
	  var rowKey = _ref2.rowKey;
	  return {
	    expanded: expandedRowKeys.includes(rowKey)
	  };
	})(ExpandableRow$1);
	return ExpandableRow;
}

var hasRequiredBaseTable;

function requireBaseTable () {
	if (hasRequiredBaseTable) return BaseTable;
	hasRequiredBaseTable = 1;

	function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); return Constructor; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	var __importStar = BaseTable && BaseTable.__importStar || function (mod) {
	  if (mod && mod.__esModule) return mod;
	  var result = {};
	  if (mod != null) for (var k in mod) {
	    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
	  }
	  result["default"] = mod;
	  return result;
	};

	var __importDefault = BaseTable && BaseTable.__importDefault || function (mod) {
	  return mod && mod.__esModule ? mod : {
	    "default": mod
	  };
	};

	Object.defineProperty(BaseTable, "__esModule", {
	  value: true
	});

	var React = __importStar(React__default);

	var PropTypes = __importStar(/*@__PURE__*/ requirePropTypes());

	var mini_store_1 = requireLib$1();

	var classnames_1 = __importDefault(requireClassnames());

	var ColGroup_1 = __importDefault(requireColGroup());

	var TableHeader_1 = __importDefault(requireTableHeader());

	var TableRow_1 = __importDefault(requireTableRow());

	var ExpandableRow_1 = __importDefault(requireExpandableRow());

	var BaseTable$1 = /*#__PURE__*/function (_React$Component) {
	  _inherits(BaseTable, _React$Component);

	  var _super = _createSuper(BaseTable);

	  function BaseTable() {
	    var _this;

	    _classCallCheck(this, BaseTable);

	    _this = _super.apply(this, arguments);

	    _this.handleRowHover = function (isHover, key) {
	      _this.props.store.setState({
	        currentHoverKey: isHover ? key : null
	      });
	    };

	    _this.renderRows = function (renderData, indent) {
	      var ancestorKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	      var table = _this.context.table;
	      var columnManager = table.columnManager,
	          components = table.components;
	      var _table$props = table.props,
	          prefixCls = _table$props.prefixCls,
	          childrenColumnName = _table$props.childrenColumnName,
	          rowClassName = _table$props.rowClassName,
	          rowRef = _table$props.rowRef,
	          onRowClick = _table$props.onRowClick,
	          onRowDoubleClick = _table$props.onRowDoubleClick,
	          onRowContextMenu = _table$props.onRowContextMenu,
	          onRowMouseEnter = _table$props.onRowMouseEnter,
	          onRowMouseLeave = _table$props.onRowMouseLeave,
	          onRow = _table$props.onRow;
	      var _this$props = _this.props,
	          getRowKey = _this$props.getRowKey,
	          fixed = _this$props.fixed,
	          expander = _this$props.expander,
	          isAnyColumnsFixed = _this$props.isAnyColumnsFixed;
	      var rows = [];

	      var _loop = function _loop(i) {
	        var record = renderData[i];
	        var key = getRowKey(record, i);
	        var className = typeof rowClassName === 'string' ? rowClassName : rowClassName(record, i, indent);
	        var onHoverProps = {};

	        if (columnManager.isAnyColumnsFixed()) {
	          onHoverProps.onHover = _this.handleRowHover;
	        }

	        var leafColumns = void 0;

	        if (fixed === 'left') {
	          leafColumns = columnManager.leftLeafColumns();
	        } else if (fixed === 'right') {
	          leafColumns = columnManager.rightLeafColumns();
	        } else {
	          leafColumns = _this.getColumns(columnManager.leafColumns());
	        }

	        var rowPrefixCls = "".concat(prefixCls, "-row");
	        var row = React.createElement(ExpandableRow_1.default, Object.assign({}, expander.props, {
	          fixed: fixed,
	          index: i,
	          prefixCls: rowPrefixCls,
	          record: record,
	          key: key,
	          rowKey: key,
	          onRowClick: onRowClick,
	          needIndentSpaced: expander.needIndentSpaced,
	          onExpandedChange: expander.handleExpandChange
	        }), function (expandableRow) {
	          return React.createElement(TableRow_1.default, Object.assign({
	            fixed: fixed,
	            indent: indent,
	            className: className,
	            record: record,
	            index: i,
	            prefixCls: rowPrefixCls,
	            childrenColumnName: childrenColumnName,
	            columns: leafColumns,
	            onRow: onRow,
	            onRowDoubleClick: onRowDoubleClick,
	            onRowContextMenu: onRowContextMenu,
	            onRowMouseEnter: onRowMouseEnter,
	            onRowMouseLeave: onRowMouseLeave
	          }, onHoverProps, {
	            rowKey: key,
	            ancestorKeys: ancestorKeys,
	            ref: rowRef(record, i, indent),
	            components: components,
	            isAnyColumnsFixed: isAnyColumnsFixed
	          }, expandableRow));
	        });
	        rows.push(row);
	        expander.renderRows(_this.renderRows, rows, record, i, indent, fixed, key, ancestorKeys);
	      };

	      for (var i = 0; i < renderData.length; i += 1) {
	        _loop(i);
	      }

	      return rows;
	    };

	    return _this;
	  }

	  _createClass(BaseTable, [{
	    key: "getColumns",
	    value: function getColumns(cols) {
	      var _this$props2 = this.props,
	          _this$props2$columns = _this$props2.columns,
	          columns = _this$props2$columns === void 0 ? [] : _this$props2$columns,
	          fixed = _this$props2.fixed;
	      var table = this.context.table;
	      var prefixCls = table.props.prefixCls;
	      return (cols || columns).map(function (column) {
	        return _objectSpread({}, column, {
	          className: !!column.fixed && !fixed ? classnames_1.default("".concat(prefixCls, "-fixed-columns-in-body"), column.className) : column.className
	        });
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var table = this.context.table;
	      var components = table.components;
	      var _table$props2 = table.props,
	          prefixCls = _table$props2.prefixCls,
	          scroll = _table$props2.scroll,
	          data = _table$props2.data,
	          getBodyWrapper = _table$props2.getBodyWrapper;
	      var _this$props3 = this.props,
	          expander = _this$props3.expander,
	          tableClassName = _this$props3.tableClassName,
	          hasHead = _this$props3.hasHead,
	          hasBody = _this$props3.hasBody,
	          fixed = _this$props3.fixed,
	          isAnyColumnsFixed = _this$props3.isAnyColumnsFixed;
	      var tableStyle = {};

	      if (!fixed && scroll.x) {
	        // 当有固定列时，width auto 会导致 body table 的宽度撑不开，从而固定列无法对齐
	        // 详情见：https://github.com/ant-design/ant-design/issues/22160
	        var tableWidthScrollX = isAnyColumnsFixed ? 'max-content' : 'auto'; // not set width, then use content fixed width

	        tableStyle.width = scroll.x === true ? tableWidthScrollX : scroll.x;
	      }

	      var Table = hasBody ? components.table : 'table';
	      var BodyWrapper = components.body.wrapper;
	      var body;

	      if (hasBody) {
	        body = React.createElement(BodyWrapper, {
	          className: "".concat(prefixCls, "-tbody")
	        }, this.renderRows(data, 0));

	        if (getBodyWrapper) {
	          body = getBodyWrapper(body);
	        }
	      }

	      var columns = this.getColumns();
	      return React.createElement(Table, {
	        className: tableClassName,
	        style: tableStyle,
	        key: "table"
	      }, React.createElement(ColGroup_1.default, {
	        columns: columns,
	        fixed: fixed
	      }), hasHead && React.createElement(TableHeader_1.default, {
	        expander: expander,
	        columns: columns,
	        fixed: fixed
	      }), body);
	    }
	  }]);

	  return BaseTable;
	}(React.Component);

	BaseTable$1.contextTypes = {
	  table: PropTypes.any
	};
	BaseTable.default = mini_store_1.connect()(BaseTable$1);
	return BaseTable;
}

var hasRequiredHeadTable;

function requireHeadTable () {
	if (hasRequiredHeadTable) return HeadTable;
	hasRequiredHeadTable = 1;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var __importStar = HeadTable && HeadTable.__importStar || function (mod) {
	  if (mod && mod.__esModule) return mod;
	  var result = {};
	  if (mod != null) for (var k in mod) {
	    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
	  }
	  result["default"] = mod;
	  return result;
	};

	var __importDefault = HeadTable && HeadTable.__importDefault || function (mod) {
	  return mod && mod.__esModule ? mod : {
	    "default": mod
	  };
	};

	Object.defineProperty(HeadTable, "__esModule", {
	  value: true
	});

	var React = __importStar(React__default);

	var PropTypes = __importStar(/*@__PURE__*/ requirePropTypes());

	var classnames_1 = __importDefault(requireClassnames());

	var utils_1 = requireUtils();

	var BaseTable_1 = __importDefault(requireBaseTable());

	function HeadTable$1(props, _ref) {
	  var table = _ref.table;
	  var _table$props = table.props,
	      prefixCls = _table$props.prefixCls,
	      scroll = _table$props.scroll,
	      showHeader = _table$props.showHeader;
	  var columns = props.columns,
	      fixed = props.fixed,
	      tableClassName = props.tableClassName,
	      handleBodyScrollLeft = props.handleBodyScrollLeft,
	      expander = props.expander;
	  var saveRef = table.saveRef;
	  var useFixedHeader = table.props.useFixedHeader;
	  var headStyle = {};
	  var scrollbarWidth = utils_1.measureScrollbar({
	    direction: 'vertical'
	  });

	  if (scroll.y) {
	    useFixedHeader = true; // https://github.com/ant-design/ant-design/issues/17051

	    var scrollbarWidthOfHeader = utils_1.measureScrollbar({
	      direction: 'horizontal',
	      prefixCls: prefixCls
	    }); // Add negative margin bottom for scroll bar overflow bug

	    if (scrollbarWidthOfHeader > 0 && !fixed) {
	      headStyle.marginBottom = "-".concat(scrollbarWidthOfHeader, "px");
	      headStyle.paddingBottom = '0px'; // https://github.com/ant-design/ant-design/pull/19986

	      headStyle.minWidth = "".concat(scrollbarWidth, "px"); // https://github.com/ant-design/ant-design/issues/17051

	      headStyle.overflowX = 'scroll';
	      headStyle.overflowY = scrollbarWidth === 0 ? 'hidden' : 'scroll';
	    }
	  }

	  if (!useFixedHeader || !showHeader) {
	    return null;
	  }

	  return React.createElement("div", {
	    key: "headTable",
	    ref: fixed ? null : saveRef('headTable'),
	    className: classnames_1.default("".concat(prefixCls, "-header"), _defineProperty({}, "".concat(prefixCls, "-hide-scrollbar"), scrollbarWidth > 0)),
	    style: headStyle,
	    onScroll: handleBodyScrollLeft
	  }, React.createElement(BaseTable_1.default, {
	    tableClassName: tableClassName,
	    hasHead: true,
	    hasBody: false,
	    fixed: fixed,
	    columns: columns,
	    expander: expander
	  }));
	}

	HeadTable.default = HeadTable$1;
	HeadTable$1.contextTypes = {
	  table: PropTypes.any
	};
	return HeadTable;
}

var BodyTable = {};

var hasRequiredBodyTable;

function requireBodyTable () {
	if (hasRequiredBodyTable) return BodyTable;
	hasRequiredBodyTable = 1;

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var __importStar = BodyTable && BodyTable.__importStar || function (mod) {
	  if (mod && mod.__esModule) return mod;
	  var result = {};
	  if (mod != null) for (var k in mod) {
	    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
	  }
	  result["default"] = mod;
	  return result;
	};

	var __importDefault = BodyTable && BodyTable.__importDefault || function (mod) {
	  return mod && mod.__esModule ? mod : {
	    "default": mod
	  };
	};

	Object.defineProperty(BodyTable, "__esModule", {
	  value: true
	});

	var React = __importStar(React__default);

	var PropTypes = __importStar(/*@__PURE__*/ requirePropTypes());

	var utils_1 = requireUtils();

	var BaseTable_1 = __importDefault(requireBaseTable());

	function BodyTable$1(props, _ref) {
	  var table = _ref.table;
	  var _table$props = table.props,
	      prefixCls = _table$props.prefixCls,
	      scroll = _table$props.scroll;
	  var columns = props.columns,
	      fixed = props.fixed,
	      tableClassName = props.tableClassName,
	      getRowKey = props.getRowKey,
	      handleBodyScroll = props.handleBodyScroll,
	      handleWheel = props.handleWheel,
	      expander = props.expander,
	      isAnyColumnsFixed = props.isAnyColumnsFixed;
	  var saveRef = table.saveRef;
	  var useFixedHeader = table.props.useFixedHeader;

	  var bodyStyle = _objectSpread({}, table.props.bodyStyle);

	  var innerBodyStyle = {};

	  if (scroll.x || fixed) {
	    bodyStyle.overflowX = bodyStyle.overflowX || 'scroll'; // Fix weird webkit render bug
	    // https://github.com/ant-design/ant-design/issues/7783

	    bodyStyle.WebkitTransform = 'translate3d (0, 0, 0)';
	  }

	  if (scroll.y) {
	    // maxHeight will make fixed-Table scrolling not working
	    // so we only set maxHeight to body-Table here
	    if (fixed) {
	      innerBodyStyle.maxHeight = bodyStyle.maxHeight || scroll.y;
	      innerBodyStyle.overflowY = bodyStyle.overflowY || 'scroll';
	    } else {
	      bodyStyle.maxHeight = bodyStyle.maxHeight || scroll.y;
	    }

	    bodyStyle.overflowY = bodyStyle.overflowY || 'scroll';
	    useFixedHeader = true; // Add negative margin bottom for scroll bar overflow bug

	    var scrollbarWidth = utils_1.measureScrollbar({
	      direction: 'vertical'
	    });

	    if (scrollbarWidth > 0 && fixed) {
	      bodyStyle.marginBottom = "-".concat(scrollbarWidth, "px");
	      bodyStyle.paddingBottom = '0px';
	    }
	  }

	  var baseTable = React.createElement(BaseTable_1.default, {
	    tableClassName: tableClassName,
	    hasHead: !useFixedHeader,
	    hasBody: true,
	    fixed: fixed,
	    columns: columns,
	    expander: expander,
	    getRowKey: getRowKey,
	    isAnyColumnsFixed: isAnyColumnsFixed
	  });

	  if (fixed && columns.length) {
	    var refName;

	    if (columns[0].fixed === 'left' || columns[0].fixed === true) {
	      refName = 'fixedColumnsBodyLeft';
	    } else if (columns[0].fixed === 'right') {
	      refName = 'fixedColumnsBodyRight';
	    }

	    delete bodyStyle.overflowX;
	    delete bodyStyle.overflowY;
	    return React.createElement("div", {
	      key: "bodyTable",
	      className: "".concat(prefixCls, "-body-outer"),
	      style: _objectSpread({}, bodyStyle)
	    }, React.createElement("div", {
	      className: "".concat(prefixCls, "-body-inner"),
	      style: innerBodyStyle,
	      ref: saveRef(refName),
	      onWheel: handleWheel,
	      onScroll: handleBodyScroll
	    }, baseTable));
	  } // Should provides `tabIndex` if use scroll to enable keyboard scroll


	  var useTabIndex = scroll && (scroll.x || scroll.y);
	  return React.createElement("div", {
	    tabIndex: useTabIndex ? -1 : undefined,
	    key: "bodyTable",
	    className: "".concat(prefixCls, "-body"),
	    style: bodyStyle,
	    ref: saveRef('bodyTable'),
	    onWheel: handleWheel,
	    onScroll: handleBodyScroll
	  }, baseTable);
	}

	BodyTable.default = BodyTable$1;
	BodyTable$1.contextTypes = {
	  table: PropTypes.any
	};
	return BodyTable;
}

var Column$1 = {};

var hasRequiredColumn;

function requireColumn () {
	if (hasRequiredColumn) return Column$1;
	hasRequiredColumn = 1;

	Object.defineProperty(Column$1, "__esModule", {
	  value: true
	});

	var Column = function Column() {
	  return null;
	};

	Column$1.default = Column;
	return Column$1;
}

var ColumnGroup$1 = {};

var hasRequiredColumnGroup;

function requireColumnGroup () {
	if (hasRequiredColumnGroup) return ColumnGroup$1;
	hasRequiredColumnGroup = 1;

	function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	var __importStar = ColumnGroup$1 && ColumnGroup$1.__importStar || function (mod) {
	  if (mod && mod.__esModule) return mod;
	  var result = {};
	  if (mod != null) for (var k in mod) {
	    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
	  }
	  result["default"] = mod;
	  return result;
	};

	Object.defineProperty(ColumnGroup$1, "__esModule", {
	  value: true
	});

	var React = __importStar(React__default);

	var ColumnGroup = /*#__PURE__*/function (_React$Component) {
	  _inherits(ColumnGroup, _React$Component);

	  var _super = _createSuper(ColumnGroup);

	  function ColumnGroup() {
	    _classCallCheck(this, ColumnGroup);

	    return _super.apply(this, arguments);
	  }

	  return ColumnGroup;
	}(React.Component);

	ColumnGroup$1.default = ColumnGroup;
	ColumnGroup.isTableColumnGroup = true;
	return ColumnGroup$1;
}

var ExpandableTable = {};

var hasRequiredExpandableTable;

function requireExpandableTable () {
	if (hasRequiredExpandableTable) return ExpandableTable;
	hasRequiredExpandableTable = 1;

	function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

	function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

	function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

	function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

	function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

	function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); return Constructor; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	var __importStar = ExpandableTable && ExpandableTable.__importStar || function (mod) {
	  if (mod && mod.__esModule) return mod;
	  var result = {};
	  if (mod != null) for (var k in mod) {
	    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
	  }
	  result["default"] = mod;
	  return result;
	};

	var __importDefault = ExpandableTable && ExpandableTable.__importDefault || function (mod) {
	  return mod && mod.__esModule ? mod : {
	    "default": mod
	  };
	};

	Object.defineProperty(ExpandableTable, "__esModule", {
	  value: true
	});

	var React = __importStar(React__default);

	var mini_store_1 = requireLib$1();

	var react_lifecycles_compat_1 = require$$9;

	var shallowequal_1 = __importDefault(requireShallowequal());

	var TableRow_1 = __importDefault(requireTableRow());

	var utils_1 = requireUtils();

	var ExpandableTable$1 = /*#__PURE__*/function (_React$Component) {
	  _inherits(ExpandableTable, _React$Component);

	  var _super = _createSuper(ExpandableTable);

	  function ExpandableTable(props) {
	    var _this;

	    _classCallCheck(this, ExpandableTable);

	    _this = _super.call(this, props);

	    _this.handleExpandChange = function (expanded, record, event, rowKey) {
	      var destroy = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

	      if (event) {
	        event.stopPropagation();
	      }

	      var _this$props = _this.props,
	          onExpandedRowsChange = _this$props.onExpandedRowsChange,
	          onExpand = _this$props.onExpand;

	      var _this$store$getState = _this.store.getState(),
	          expandedRowKeys = _this$store$getState.expandedRowKeys;

	      if (expanded) {
	        // row was expanded
	        expandedRowKeys = [].concat(_toConsumableArray(expandedRowKeys), [rowKey]);
	      } else {
	        // row was collapse
	        var expandedRowIndex = expandedRowKeys.indexOf(rowKey);

	        if (expandedRowIndex !== -1) {
	          expandedRowKeys = utils_1.remove(expandedRowKeys, rowKey);
	        }
	      }

	      if (!_this.props.expandedRowKeys) {
	        _this.store.setState({
	          expandedRowKeys: expandedRowKeys
	        });
	      } // De-dup of repeat call


	      if (!_this.latestExpandedRows || !shallowequal_1.default(_this.latestExpandedRows, expandedRowKeys)) {
	        _this.latestExpandedRows = expandedRowKeys;
	        onExpandedRowsChange(expandedRowKeys);
	      }

	      if (!destroy) {
	        onExpand(expanded, record);
	      }
	    };

	    _this.renderExpandIndentCell = function (rows, fixed) {
	      var _this$props2 = _this.props,
	          prefixCls = _this$props2.prefixCls,
	          expandIconAsCell = _this$props2.expandIconAsCell;

	      if (!expandIconAsCell || fixed === 'right' || !rows.length) {
	        return;
	      }

	      var iconColumn = {
	        key: 'rc-table-expand-icon-cell',
	        className: "".concat(prefixCls, "-expand-icon-th"),
	        title: '',
	        rowSpan: rows.length
	      };
	      rows[0].unshift(_objectSpread({}, iconColumn, {
	        column: iconColumn
	      }));
	    };

	    _this.renderRows = function (renderRows, rows, record, index, indent, fixed, parentKey, ancestorKeys) {
	      var _this$props3 = _this.props,
	          expandedRowClassName = _this$props3.expandedRowClassName,
	          expandedRowRender = _this$props3.expandedRowRender,
	          childrenColumnName = _this$props3.childrenColumnName;
	      var childrenData = record[childrenColumnName];
	      var nextAncestorKeys = [].concat(_toConsumableArray(ancestorKeys), [parentKey]);
	      var nextIndent = indent + 1;

	      if (expandedRowRender) {
	        rows.push(_this.renderExpandedRow(record, index, expandedRowRender, expandedRowClassName(record, index, indent), nextAncestorKeys, nextIndent, fixed));
	      }

	      if (childrenData) {
	        rows.push.apply(rows, _toConsumableArray(renderRows(childrenData, nextIndent, nextAncestorKeys)));
	      }
	    };

	    var data = props.data,
	        childrenColumnName = props.childrenColumnName,
	        defaultExpandAllRows = props.defaultExpandAllRows,
	        expandedRowKeys = props.expandedRowKeys,
	        defaultExpandedRowKeys = props.defaultExpandedRowKeys,
	        getRowKey = props.getRowKey;
	    var finalExpandedRowKeys = [];

	    var rows = _toConsumableArray(data);

	    if (defaultExpandAllRows) {
	      for (var i = 0; i < rows.length; i += 1) {
	        var row = rows[i];
	        finalExpandedRowKeys.push(getRowKey(row, i));
	        rows = rows.concat(row[childrenColumnName] || []);
	      }
	    } else {
	      finalExpandedRowKeys = expandedRowKeys || defaultExpandedRowKeys;
	    }

	    _this.columnManager = props.columnManager;
	    _this.store = props.store;

	    _this.store.setState({
	      expandedRowsHeight: {},
	      expandedRowKeys: finalExpandedRowKeys
	    });

	    return _this;
	  }

	  _createClass(ExpandableTable, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      this.handleUpdated();
	    }
	  }, {
	    key: "componentDidUpdate",
	    value: function componentDidUpdate() {
	      if ('expandedRowKeys' in this.props) {
	        this.store.setState({
	          expandedRowKeys: this.props.expandedRowKeys
	        });
	      }

	      this.handleUpdated();
	    }
	  }, {
	    key: "handleUpdated",
	    value: function handleUpdated() {
	      /**
	       * We should record latest expanded rows to avoid
	       * multiple rows remove cause `onExpandedRowsChange` trigger many times
	       */
	      this.latestExpandedRows = null;
	    }
	  }, {
	    key: "renderExpandedRow",
	    value: function renderExpandedRow(record, index, _render, className, ancestorKeys, indent, fixed) {
	      var _this2 = this;

	      var _this$props4 = this.props,
	          prefixCls = _this$props4.prefixCls,
	          expandIconAsCell = _this$props4.expandIconAsCell,
	          indentSize = _this$props4.indentSize;
	      var parentKey = ancestorKeys[ancestorKeys.length - 1];
	      var rowKey = "".concat(parentKey, "-extra-row");
	      var components = {
	        body: {
	          row: 'tr',
	          cell: 'td'
	        }
	      };
	      var colCount;

	      if (fixed === 'left') {
	        colCount = this.columnManager.leftLeafColumns().length;
	      } else if (fixed === 'right') {
	        colCount = this.columnManager.rightLeafColumns().length;
	      } else {
	        colCount = this.columnManager.leafColumns().length;
	      }

	      var columns = [{
	        key: 'extra-row',
	        render: function render() {
	          var _this2$store$getState = _this2.store.getState(),
	              _this2$store$getState2 = _this2$store$getState.expandedRowKeys,
	              expandedRowKeys = _this2$store$getState2 === void 0 ? [] : _this2$store$getState2;

	          var expanded = expandedRowKeys.includes(parentKey);
	          return {
	            props: {
	              colSpan: colCount
	            },
	            children: fixed !== 'right' ? _render(record, index, indent, expanded) : '&nbsp;'
	          };
	        }
	      }];

	      if (expandIconAsCell && fixed !== 'right') {
	        columns.unshift({
	          key: 'expand-icon-placeholder',
	          render: function render() {
	            return null;
	          }
	        });
	      }

	      return React.createElement(TableRow_1.default, {
	        key: rowKey,
	        columns: columns,
	        className: className,
	        rowKey: rowKey,
	        ancestorKeys: ancestorKeys,
	        prefixCls: "".concat(prefixCls, "-expanded-row"),
	        indentSize: indentSize,
	        indent: indent,
	        fixed: fixed,
	        components: components,
	        expandedRow: true
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this$props5 = this.props,
	          data = _this$props5.data,
	          childrenColumnName = _this$props5.childrenColumnName,
	          children = _this$props5.children;
	      var needIndentSpaced = data.some(function (record) {
	        return record[childrenColumnName];
	      });
	      return children({
	        props: this.props,
	        needIndentSpaced: needIndentSpaced,
	        renderRows: this.renderRows,
	        handleExpandChange: this.handleExpandChange,
	        renderExpandIndentCell: this.renderExpandIndentCell
	      });
	    }
	  }]);

	  return ExpandableTable;
	}(React.Component);

	ExpandableTable$1.defaultProps = {
	  expandIconAsCell: false,
	  expandedRowClassName: function expandedRowClassName() {
	    return '';
	  },
	  expandIconColumnIndex: 0,
	  defaultExpandAllRows: false,
	  defaultExpandedRowKeys: [],
	  childrenColumnName: 'children',
	  indentSize: 15,
	  onExpand: function onExpand() {},
	  onExpandedRowsChange: function onExpandedRowsChange() {}
	};
	react_lifecycles_compat_1.polyfill(ExpandableTable$1);
	ExpandableTable.default = mini_store_1.connect()(ExpandableTable$1);
	return ExpandableTable;
}

var hasRequiredTable;

function requireTable () {
	if (hasRequiredTable) return Table$1;
	hasRequiredTable = 1;

	function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	var __importStar = Table$1 && Table$1.__importStar || function (mod) {
	  if (mod && mod.__esModule) return mod;
	  var result = {};
	  if (mod != null) for (var k in mod) {
	    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
	  }
	  result["default"] = mod;
	  return result;
	};

	var __importDefault = Table$1 && Table$1.__importDefault || function (mod) {
	  return mod && mod.__esModule ? mod : {
	    "default": mod
	  };
	};

	Object.defineProperty(Table$1, "__esModule", {
	  value: true
	});

	var React = __importStar(React__default);

	var PropTypes = __importStar(/*@__PURE__*/ requirePropTypes());

	var shallowequal_1 = __importDefault(requireShallowequal());

	var addEventListener_1 = __importDefault(requireAddEventListener());

	var warning_1 = __importDefault(requireWarning());

	var mini_store_1 = requireLib$1();

	var merge_1 = __importDefault(requireMerge());

	var component_classes_1 = __importDefault(requireComponentClasses());

	var classnames_1 = __importDefault(requireClassnames());

	var react_lifecycles_compat_1 = require$$9;

	var utils_1 = requireUtils();

	var ColumnManager_1 = __importDefault(requireColumnManager());

	var HeadTable_1 = __importDefault(requireHeadTable());

	var BodyTable_1 = __importDefault(requireBodyTable());

	var Column_1 = __importDefault(requireColumn());

	var ColumnGroup_1 = __importDefault(requireColumnGroup());

	var ExpandableTable_1 = __importDefault(requireExpandableTable());

	var Table = /*#__PURE__*/function (_React$Component) {
	  _inherits(Table, _React$Component);

	  var _super = _createSuper(Table);

	  function Table(props) {
	    var _this;

	    _classCallCheck(this, Table);

	    _this = _super.call(this, props);
	    _this.state = {};

	    _this.getRowKey = function (record, index) {
	      var rowKey = _this.props.rowKey;
	      var key = typeof rowKey === 'function' ? rowKey(record, index) : record[rowKey];
	      warning_1.default(key !== undefined, 'Each record in table should have a unique `key` prop,' + 'or set `rowKey` to an unique primary key.');
	      return key === undefined ? index : key;
	    };

	    _this.handleWindowResize = function () {
	      _this.syncFixedTableRowHeight();

	      _this.setScrollPositionClassName();
	    };

	    _this.syncFixedTableRowHeight = function () {
	      var tableRect = _this.tableNode.getBoundingClientRect(); // If tableNode's height less than 0, suppose it is hidden and don't recalculate rowHeight.
	      // see: https://github.com/ant-design/ant-design/issues/4836


	      if (tableRect.height !== undefined && tableRect.height <= 0) {
	        return;
	      }

	      var prefixCls = _this.props.prefixCls;
	      var headRows = _this.headTable ? _this.headTable.querySelectorAll('thead') : _this.bodyTable.querySelectorAll('thead');
	      var bodyRows = _this.bodyTable.querySelectorAll(".".concat(prefixCls, "-row")) || [];
	      var fixedColumnsHeadRowsHeight = [].map.call(headRows, function (row) {
	        return row.getBoundingClientRect().height || 'auto';
	      });

	      var state = _this.store.getState();

	      var fixedColumnsBodyRowsHeight = [].reduce.call(bodyRows, function (acc, row) {
	        var rowKey = row.getAttribute('data-row-key');
	        var height = row.getBoundingClientRect().height || state.fixedColumnsBodyRowsHeight[rowKey] || 'auto';
	        acc[rowKey] = height;
	        return acc;
	      }, {});

	      if (shallowequal_1.default(state.fixedColumnsHeadRowsHeight, fixedColumnsHeadRowsHeight) && shallowequal_1.default(state.fixedColumnsBodyRowsHeight, fixedColumnsBodyRowsHeight)) {
	        return;
	      }

	      _this.store.setState({
	        fixedColumnsHeadRowsHeight: fixedColumnsHeadRowsHeight,
	        fixedColumnsBodyRowsHeight: fixedColumnsBodyRowsHeight
	      });
	    };

	    _this.handleBodyScrollLeft = function (e) {
	      // Fix https://github.com/ant-design/ant-design/issues/7635
	      if (e.currentTarget !== e.target) {
	        return;
	      }

	      var target = e.target;
	      var _this$props$scroll = _this.props.scroll,
	          scroll = _this$props$scroll === void 0 ? {} : _this$props$scroll;

	      var _assertThisInitialize = _assertThisInitialized(_this),
	          headTable = _assertThisInitialize.headTable,
	          bodyTable = _assertThisInitialize.bodyTable;

	      if (target.scrollLeft !== _this.lastScrollLeft && scroll.x) {
	        if (target === bodyTable && headTable) {
	          headTable.scrollLeft = target.scrollLeft;
	        } else if (target === headTable && bodyTable) {
	          bodyTable.scrollLeft = target.scrollLeft;
	        }

	        _this.setScrollPositionClassName();
	      } // Remember last scrollLeft for scroll direction detecting.


	      _this.lastScrollLeft = target.scrollLeft;
	    };

	    _this.handleBodyScrollTop = function (e) {
	      var target = e.target; // Fix https://github.com/ant-design/ant-design/issues/9033

	      if (e.currentTarget !== target) {
	        return;
	      }

	      var _this$props$scroll2 = _this.props.scroll,
	          scroll = _this$props$scroll2 === void 0 ? {} : _this$props$scroll2;

	      var _assertThisInitialize2 = _assertThisInitialized(_this),
	          headTable = _assertThisInitialize2.headTable,
	          bodyTable = _assertThisInitialize2.bodyTable,
	          fixedColumnsBodyLeft = _assertThisInitialize2.fixedColumnsBodyLeft,
	          fixedColumnsBodyRight = _assertThisInitialize2.fixedColumnsBodyRight;

	      if (target.scrollTop !== _this.lastScrollTop && scroll.y && target !== headTable) {
	        var scrollTop = target.scrollTop;

	        if (fixedColumnsBodyLeft && target !== fixedColumnsBodyLeft) {
	          fixedColumnsBodyLeft.scrollTop = scrollTop;
	        }

	        if (fixedColumnsBodyRight && target !== fixedColumnsBodyRight) {
	          fixedColumnsBodyRight.scrollTop = scrollTop;
	        }

	        if (bodyTable && target !== bodyTable) {
	          bodyTable.scrollTop = scrollTop;
	        }
	      } // Remember last scrollTop for scroll direction detecting.


	      _this.lastScrollTop = target.scrollTop;
	    };

	    _this.handleBodyScroll = function (e) {
	      _this.handleBodyScrollLeft(e);

	      _this.handleBodyScrollTop(e);
	    };

	    _this.handleWheel = function (event) {
	      var _this$props$scroll3 = _this.props.scroll,
	          scroll = _this$props$scroll3 === void 0 ? {} : _this$props$scroll3;

	      if (window.navigator.userAgent.match(/Trident\/7\./) && scroll.y) {
	        var wd = event.deltaY;
	        var target = event.target;

	        var _assertThisInitialize3 = _assertThisInitialized(_this),
	            bodyTable = _assertThisInitialize3.bodyTable,
	            fixedColumnsBodyLeft = _assertThisInitialize3.fixedColumnsBodyLeft,
	            fixedColumnsBodyRight = _assertThisInitialize3.fixedColumnsBodyRight;

	        var scrollTop = 0;

	        if (_this.lastScrollTop) {
	          scrollTop = _this.lastScrollTop + wd;
	        } else {
	          scrollTop = wd;
	        }

	        if (fixedColumnsBodyLeft && target !== fixedColumnsBodyLeft) {
	          event.preventDefault();
	          fixedColumnsBodyLeft.scrollTop = scrollTop;
	        }

	        if (fixedColumnsBodyRight && target !== fixedColumnsBodyRight) {
	          event.preventDefault();
	          fixedColumnsBodyRight.scrollTop = scrollTop;
	        }

	        if (bodyTable && target !== bodyTable) {
	          // https://github.com/ant-design/ant-design/issues/22341
	          event.preventDefault();
	          bodyTable.scrollTop = scrollTop;
	        }
	      }
	    };

	    _this.saveRef = function (name) {
	      return function (node) {
	        _this[name] = node;
	      };
	    };

	    _this.saveTableNodeRef = function (node) {
	      _this.tableNode = node;
	    };

	    ['onRowClick', 'onRowDoubleClick', 'onRowContextMenu', 'onRowMouseEnter', 'onRowMouseLeave'].forEach(function (name) {
	      warning_1.default(props[name] === undefined, "".concat(name, " is deprecated, please use onRow instead."));
	    });
	    warning_1.default(props.getBodyWrapper === undefined, 'getBodyWrapper is deprecated, please use custom components instead.');
	    _this.columnManager = new ColumnManager_1.default(props.columns, props.children);
	    _this.store = mini_store_1.create({
	      currentHoverKey: null,
	      fixedColumnsHeadRowsHeight: [],
	      fixedColumnsBodyRowsHeight: {}
	    });

	    _this.setScrollPosition('left');

	    _this.debouncedWindowResize = utils_1.debounce(_this.handleWindowResize, 150);
	    return _this;
	  }

	  _createClass(Table, [{
	    key: "getChildContext",
	    value: function getChildContext() {
	      return {
	        table: {
	          props: this.props,
	          columnManager: this.columnManager,
	          saveRef: this.saveRef,
	          components: merge_1.default({
	            table: 'table',
	            header: {
	              wrapper: 'thead',
	              row: 'tr',
	              cell: 'th'
	            },
	            body: {
	              wrapper: 'tbody',
	              row: 'tr',
	              cell: 'td'
	            }
	          }, this.props.components)
	        }
	      };
	    }
	  }, {
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      if (this.columnManager.isAnyColumnsFixed()) {
	        this.handleWindowResize();
	        this.resizeEvent = addEventListener_1.default(window, 'resize', this.debouncedWindowResize);
	      } // https://github.com/ant-design/ant-design/issues/11635


	      if (this.headTable) {
	        this.headTable.scrollLeft = 0;
	      }

	      if (this.bodyTable) {
	        this.bodyTable.scrollLeft = 0;
	      }
	    }
	  }, {
	    key: "componentDidUpdate",
	    value: function componentDidUpdate(prevProps) {
	      if (this.columnManager.isAnyColumnsFixed()) {
	        this.handleWindowResize();

	        if (!this.resizeEvent) {
	          this.resizeEvent = addEventListener_1.default(window, 'resize', this.debouncedWindowResize);
	        }
	      } // when table changes to empty, reset scrollLeft


	      if (prevProps.data.length > 0 && this.props.data.length === 0 && this.hasScrollX()) {
	        this.resetScrollX();
	      }
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      if (this.resizeEvent) {
	        this.resizeEvent.remove();
	      }

	      if (this.debouncedWindowResize) {
	        this.debouncedWindowResize.cancel();
	      }
	    }
	  }, {
	    key: "setScrollPosition",
	    value: function setScrollPosition(position) {
	      this.scrollPosition = position;

	      if (this.tableNode) {
	        var prefixCls = this.props.prefixCls;

	        if (position === 'both') {
	          component_classes_1.default(this.tableNode).remove(new RegExp("^".concat(prefixCls, "-scroll-position-.+$"))).add("".concat(prefixCls, "-scroll-position-left")).add("".concat(prefixCls, "-scroll-position-right"));
	        } else {
	          component_classes_1.default(this.tableNode).remove(new RegExp("^".concat(prefixCls, "-scroll-position-.+$"))).add("".concat(prefixCls, "-scroll-position-").concat(position));
	        }
	      }
	    }
	  }, {
	    key: "setScrollPositionClassName",
	    value: function setScrollPositionClassName() {
	      var node = this.bodyTable;
	      var scrollToLeft = node.scrollLeft === 0;
	      var scrollToRight = node.scrollLeft + 1 >= node.children[0].getBoundingClientRect().width - node.getBoundingClientRect().width;

	      if (scrollToLeft && scrollToRight) {
	        this.setScrollPosition('both');
	      } else if (scrollToLeft) {
	        this.setScrollPosition('left');
	      } else if (scrollToRight) {
	        this.setScrollPosition('right');
	      } else if (this.scrollPosition !== 'middle') {
	        this.setScrollPosition('middle');
	      }
	    }
	  }, {
	    key: "isTableLayoutFixed",
	    value: function isTableLayoutFixed() {
	      var _this$props = this.props,
	          tableLayout = _this$props.tableLayout,
	          _this$props$columns = _this$props.columns,
	          columns = _this$props$columns === void 0 ? [] : _this$props$columns,
	          useFixedHeader = _this$props.useFixedHeader,
	          _this$props$scroll4 = _this$props.scroll,
	          scroll = _this$props$scroll4 === void 0 ? {} : _this$props$scroll4;

	      if (typeof tableLayout !== 'undefined') {
	        return tableLayout === 'fixed';
	      } // if one column is ellipsis, use fixed table layout to fix align issue


	      if (columns.some(function (_ref) {
	        var ellipsis = _ref.ellipsis;
	        return !!ellipsis;
	      })) {
	        return true;
	      } // if header fixed, use fixed table layout to fix align issue


	      if (useFixedHeader || scroll.y) {
	        return true;
	      } // if scroll.x is number/px/% width value, we should fixed table layout
	      // to avoid long word layout broken issue


	      if (scroll.x && scroll.x !== true && scroll.x !== 'max-content') {
	        return true;
	      }

	      return false;
	    }
	  }, {
	    key: "resetScrollX",
	    value: function resetScrollX() {
	      if (this.headTable) {
	        this.headTable.scrollLeft = 0;
	      }

	      if (this.bodyTable) {
	        this.bodyTable.scrollLeft = 0;
	      }
	    }
	  }, {
	    key: "hasScrollX",
	    value: function hasScrollX() {
	      var _this$props$scroll5 = this.props.scroll,
	          scroll = _this$props$scroll5 === void 0 ? {} : _this$props$scroll5;
	      return 'x' in scroll;
	    }
	  }, {
	    key: "renderMainTable",
	    value: function renderMainTable() {
	      var _this$props2 = this.props,
	          scroll = _this$props2.scroll,
	          prefixCls = _this$props2.prefixCls;
	      var isAnyColumnsFixed = this.columnManager.isAnyColumnsFixed();
	      var scrollable = isAnyColumnsFixed || scroll.x || scroll.y;
	      var table = [this.renderTable({
	        columns: this.columnManager.groupedColumns(),
	        isAnyColumnsFixed: isAnyColumnsFixed
	      }), this.renderEmptyText(), this.renderFooter()];
	      return scrollable ? React.createElement("div", {
	        className: "".concat(prefixCls, "-scroll")
	      }, table) : table;
	    }
	  }, {
	    key: "renderLeftFixedTable",
	    value: function renderLeftFixedTable() {
	      var prefixCls = this.props.prefixCls;
	      return React.createElement("div", {
	        className: "".concat(prefixCls, "-fixed-left")
	      }, this.renderTable({
	        columns: this.columnManager.leftColumns(),
	        fixed: 'left'
	      }));
	    }
	  }, {
	    key: "renderRightFixedTable",
	    value: function renderRightFixedTable() {
	      var prefixCls = this.props.prefixCls;
	      return React.createElement("div", {
	        className: "".concat(prefixCls, "-fixed-right")
	      }, this.renderTable({
	        columns: this.columnManager.rightColumns(),
	        fixed: 'right'
	      }));
	    }
	  }, {
	    key: "renderTable",
	    value: function renderTable(options) {
	      var columns = options.columns,
	          fixed = options.fixed,
	          isAnyColumnsFixed = options.isAnyColumnsFixed;
	      var _this$props3 = this.props,
	          prefixCls = _this$props3.prefixCls,
	          _this$props3$scroll = _this$props3.scroll,
	          scroll = _this$props3$scroll === void 0 ? {} : _this$props3$scroll;
	      var tableClassName = scroll.x || fixed ? "".concat(prefixCls, "-fixed") : '';
	      var headTable = React.createElement(HeadTable_1.default, {
	        key: "head",
	        columns: columns,
	        fixed: fixed,
	        tableClassName: tableClassName,
	        handleBodyScrollLeft: this.handleBodyScrollLeft,
	        expander: this.expander
	      });
	      var bodyTable = React.createElement(BodyTable_1.default, {
	        key: "body",
	        columns: columns,
	        fixed: fixed,
	        tableClassName: tableClassName,
	        getRowKey: this.getRowKey,
	        handleWheel: this.handleWheel,
	        handleBodyScroll: this.handleBodyScroll,
	        expander: this.expander,
	        isAnyColumnsFixed: isAnyColumnsFixed
	      });
	      return [headTable, bodyTable];
	    }
	  }, {
	    key: "renderTitle",
	    value: function renderTitle() {
	      var _this$props4 = this.props,
	          title = _this$props4.title,
	          prefixCls = _this$props4.prefixCls;
	      return title ? React.createElement("div", {
	        className: "".concat(prefixCls, "-title"),
	        key: "title"
	      }, title(this.props.data)) : null;
	    }
	  }, {
	    key: "renderFooter",
	    value: function renderFooter() {
	      var _this$props5 = this.props,
	          footer = _this$props5.footer,
	          prefixCls = _this$props5.prefixCls;
	      return footer ? React.createElement("div", {
	        className: "".concat(prefixCls, "-footer"),
	        key: "footer"
	      }, footer(this.props.data)) : null;
	    }
	  }, {
	    key: "renderEmptyText",
	    value: function renderEmptyText() {
	      var _this$props6 = this.props,
	          emptyText = _this$props6.emptyText,
	          prefixCls = _this$props6.prefixCls,
	          data = _this$props6.data;

	      if (data.length) {
	        return null;
	      }

	      var emptyClassName = "".concat(prefixCls, "-placeholder");
	      return React.createElement("div", {
	        className: emptyClassName,
	        key: "emptyText"
	      }, typeof emptyText === 'function' ? emptyText() : emptyText);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _classnames_1$default,
	          _this2 = this;

	      var props = this.props;
	      var prefixCls = props.prefixCls;

	      if (this.state.columns) {
	        this.columnManager.reset(props.columns);
	      } else if (this.state.children) {
	        this.columnManager.reset(null, props.children);
	      }

	      var tableClassName = classnames_1.default(props.prefixCls, props.className, (_classnames_1$default = {}, _defineProperty(_classnames_1$default, "".concat(prefixCls, "-fixed-header"), props.useFixedHeader || props.scroll && props.scroll.y), _defineProperty(_classnames_1$default, "".concat(prefixCls, "-scroll-position-left ").concat(prefixCls, "-scroll-position-right"), this.scrollPosition === 'both'), _defineProperty(_classnames_1$default, "".concat(prefixCls, "-scroll-position-").concat(this.scrollPosition), this.scrollPosition !== 'both'), _defineProperty(_classnames_1$default, "".concat(prefixCls, "-layout-fixed"), this.isTableLayoutFixed()), _classnames_1$default));
	      var hasLeftFixed = this.columnManager.isAnyColumnsLeftFixed();
	      var hasRightFixed = this.columnManager.isAnyColumnsRightFixed();
	      var dataAndAriaProps = utils_1.getDataAndAriaProps(props);
	      return React.createElement(mini_store_1.Provider, {
	        store: this.store
	      }, React.createElement(ExpandableTable_1.default, Object.assign({}, props, {
	        columnManager: this.columnManager,
	        getRowKey: this.getRowKey
	      }), function (expander) {
	        _this2.expander = expander;
	        return React.createElement("div", Object.assign({
	          ref: _this2.saveTableNodeRef,
	          className: tableClassName,
	          style: props.style,
	          id: props.id
	        }, dataAndAriaProps), _this2.renderTitle(), React.createElement("div", {
	          className: "".concat(prefixCls, "-content")
	        }, _this2.renderMainTable(), hasLeftFixed && _this2.renderLeftFixedTable(), hasRightFixed && _this2.renderRightFixedTable()));
	      }));
	    }
	  }], [{
	    key: "getDerivedStateFromProps",
	    value: function getDerivedStateFromProps(nextProps, prevState) {
	      if (nextProps.columns && nextProps.columns !== prevState.columns) {
	        return {
	          columns: nextProps.columns,
	          children: null
	        };
	      }

	      if (nextProps.children !== prevState.children) {
	        return {
	          columns: null,
	          children: nextProps.children
	        };
	      }

	      return null;
	    }
	  }]);

	  return Table;
	}(React.Component);

	Table.childContextTypes = {
	  table: PropTypes.any,
	  components: PropTypes.any
	};
	Table.Column = Column_1.default;
	Table.ColumnGroup = ColumnGroup_1.default;
	Table.defaultProps = {
	  data: [],
	  useFixedHeader: false,
	  rowKey: 'key',
	  rowClassName: function rowClassName() {
	    return '';
	  },
	  onRow: function onRow() {},
	  onHeaderRow: function onHeaderRow() {},
	  prefixCls: 'rc-table',
	  bodyStyle: {},
	  style: {},
	  showHeader: true,
	  scroll: {},
	  rowRef: function rowRef() {
	    return null;
	  },
	  emptyText: function emptyText() {
	    return 'No Data';
	  }
	};
	react_lifecycles_compat_1.polyfill(Table);
	Table$1.default = Table;
	return Table$1;
}

var hasRequiredEs;

function requireEs () {
	if (hasRequiredEs) return es;
	hasRequiredEs = 1;

	var __importDefault = es && es.__importDefault || function (mod) {
	  return mod && mod.__esModule ? mod : {
	    "default": mod
	  };
	};

	Object.defineProperty(es, "__esModule", {
	  value: true
	});

	var Table_1 = __importDefault(requireTable());

	var Column_1 = __importDefault(requireColumn());

	es.Column = Column_1.default;

	var ColumnGroup_1 = __importDefault(requireColumnGroup());

	es.ColumnGroup = ColumnGroup_1.default;

	var utils_1 = requireUtils();

	es.INTERNAL_COL_DEFINE = utils_1.INTERNAL_COL_DEFINE;
	es.default = Table_1.default;
	return es;
}

var esExports = requireEs();
var RcTable = /*@__PURE__*/getDefaultExportFromCjs(esExports);

var domMatches;
var hasRequiredDomMatches;

function requireDomMatches () {
	if (hasRequiredDomMatches) return domMatches;
	hasRequiredDomMatches = 1;

	/**
	 * Determine if a DOM element matches a CSS selector
	 *
	 * @param {Element} elem
	 * @param {String} selector
	 * @return {Boolean}
	 * @api public
	 */

	function matches(elem, selector) {
	  // Vendor-specific implementations of `Element.prototype.matches()`.
	  var proto = window.Element.prototype;
	  var nativeMatches = proto.matches ||
	      proto.mozMatchesSelector ||
	      proto.msMatchesSelector ||
	      proto.oMatchesSelector ||
	      proto.webkitMatchesSelector;

	  if (!elem || elem.nodeType !== 1) {
	    return false;
	  }

	  var parentElem = elem.parentNode;

	  // use native 'matches'
	  if (nativeMatches) {
	    return nativeMatches.call(elem, selector);
	  }

	  // native support for `matches` is missing and a fallback is required
	  var nodes = parentElem.querySelectorAll(selector);
	  var len = nodes.length;

	  for (var i = 0; i < len; i++) {
	    if (nodes[i] === elem) {
	      return true;
	    }
	  }

	  return false;
	}

	/**
	 * Expose `matches`
	 */

	domMatches = matches;
	return domMatches;
}

/**
 * Module dependencies
 */

var domClosest;
var hasRequiredDomClosest;

function requireDomClosest () {
	if (hasRequiredDomClosest) return domClosest;
	hasRequiredDomClosest = 1;
	var matches = requireDomMatches();

	/**
	 * @param element {Element}
	 * @param selector {String}
	 * @param context {Element}
	 * @return {Element}
	 */
	domClosest = function (element, selector, context) {
	  context = context || document;
	  // guard against orphans
	  element = { parentNode: element };

	  while ((element = element.parentNode) && element !== context) {
	    if (matches(element, selector)) {
	      return element;
	    }
	  }
	};
	return domClosest;
}

var domClosestExports = requireDomClosest();
var closest = /*@__PURE__*/getDefaultExportFromCjs(domClosestExports);

var FilterDropdownMenuWrapper = function FilterDropdownMenuWrapper(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, props.children);
};

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }
function flatArray() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var childrenName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'children';
  var result = [];

  var loop = function loop(array) {
    array.forEach(function (item) {
      if (item[childrenName]) {
        var newItem = _extends$5({}, item);

        delete newItem[childrenName];
        result.push(newItem);

        if (item[childrenName].length > 0) {
          loop(item[childrenName]);
        }
      } else {
        result.push(item);
      }
    });
  };

  loop(data);
  return result;
}
function treeMap(tree, mapper) {
  var childrenName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';
  return tree.map(function (node, index) {
    var extra = {};

    if (node[childrenName]) {
      extra[childrenName] = treeMap(node[childrenName], mapper, childrenName);
    }

    return _extends$5(_extends$5({}, mapper(node, index)), extra);
  });
}
function flatFilter(tree, callback) {
  return tree.reduce(function (acc, node) {
    if (callback(node)) {
      acc.push(node);
    }

    if (node.children) {
      var children = flatFilter(node.children, callback);
      acc.push.apply(acc, _toConsumableArray(children));
    }

    return acc;
  }, []);
}
function normalizeColumns(elements) {
  var columns = [];
  React.Children.forEach(elements, function (element) {
    if (! /*#__PURE__*/React.isValidElement(element)) {
      return;
    }

    var column = _extends$5({}, element.props);

    if (element.key) {
      column.key = element.key;
    }

    if (element.type && element.type.__ANT_TABLE_COLUMN_GROUP) {
      column.children = normalizeColumns(column.children);
    }

    columns.push(column);
  });
  return columns;
}
function generateValueMaps(items) {
  var maps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  (items || []).forEach(function (_ref) {
    var value = _ref.value,
        children = _ref.children;
    maps[value.toString()] = value;
    generateValueMaps(children, maps);
  });
  return maps;
}

function _typeof$6(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$6 = function _typeof(obj) { return typeof obj; }; } else { _typeof$6 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$6(obj); }

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$6(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$4(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$4(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$4(Constructor.prototype, protoProps); if (staticProps) _defineProperties$4(Constructor, staticProps); return Constructor; }

function _inherits$6(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$6(subClass, superClass); }

function _setPrototypeOf$6(o, p) { _setPrototypeOf$6 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$6(o, p); }

function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = _getPrototypeOf$6(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$6(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$6(this, result); }; }

function _possibleConstructorReturn$6(self, call) { if (call && (_typeof$6(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$6(self); }

function _assertThisInitialized$6(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$6(o) { _getPrototypeOf$6 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$6(o); }

function stopPropagation$1(e) {
  e.stopPropagation();

  if (e.nativeEvent.stopImmediatePropagation) {
    e.nativeEvent.stopImmediatePropagation();
  }
}

var FilterMenu = /*#__PURE__*/function (_React$Component) {
  _inherits$6(FilterMenu, _React$Component);

  var _super = _createSuper$6(FilterMenu);

  function FilterMenu(props) {
    var _this;

    _classCallCheck$6(this, FilterMenu);

    _this = _super.call(this, props);

    _this.setNeverShown = function (column) {
      var rootNode = ReactDOM.findDOMNode(_assertThisInitialized$6(_this));
      var filterBelongToScrollBody = !!closest(rootNode, ".ant-table-scroll");

      if (filterBelongToScrollBody) {
        // When fixed column have filters, there will be two dropdown menus
        // Filter dropdown menu inside scroll body should never be shown
        // To fix https://github.com/ant-design/ant-design/issues/5010 and
        // https://github.com/ant-design/ant-design/issues/7909
        _this.neverShown = !!column.fixed;
      }
    };

    _this.setSelectedKeys = function (_ref) {
      var selectedKeys = _ref.selectedKeys;

      _this.setState({
        selectedKeys: selectedKeys
      });
    };

    _this.handleClearFilters = function () {
      _this.setState({
        selectedKeys: []
      }, _this.handleConfirm);
    };

    _this.handleConfirm = function () {
      _this.setVisible(false); // Call `setSelectedKeys` & `confirm` in the same time will make filter data not up to date
      // https://github.com/ant-design/ant-design/issues/12284


      _this.setState({}, _this.confirmFilter);
    };

    _this.onVisibleChange = function (visible) {
      _this.setVisible(visible);

      var column = _this.props.column; // https://github.com/ant-design/ant-design/issues/17833

      if (!visible && !(column.filterDropdown instanceof Function)) {
        _this.confirmFilter();
      }
    };

    _this.handleMenuItemClick = function (info) {
      var selectedKeys = _this.state.selectedKeys;

      if (!info.keyPath || info.keyPath.length <= 1) {
        return;
      }

      var keyPathOfSelectedItem = _this.state.keyPathOfSelectedItem;

      if (selectedKeys && selectedKeys.indexOf(info.key) >= 0) {
        // deselect SubMenu child
        delete keyPathOfSelectedItem[info.key];
      } else {
        // select SubMenu child
        keyPathOfSelectedItem[info.key] = info.keyPath;
      }

      _this.setState({
        keyPathOfSelectedItem: keyPathOfSelectedItem
      });
    };

    _this.renderFilterIcon = function () {
      var _classNames;

      var _this$props = _this.props,
          column = _this$props.column,
          locale = _this$props.locale,
          prefixCls = _this$props.prefixCls,
          selectedKeys = _this$props.selectedKeys;
      var filtered = selectedKeys && selectedKeys.length > 0;
      var filterIcon = column.filterIcon;

      if (typeof filterIcon === 'function') {
        filterIcon = filterIcon(filtered);
      }

      var dropdownIconClass = classNames((_classNames = {}, _defineProperty$3(_classNames, "".concat(prefixCls, "-selected"), 'filtered' in column ? column.filtered : filtered), _defineProperty$3(_classNames, "".concat(prefixCls, "-open"), _this.getDropdownVisible()), _classNames));

      if (!filterIcon) {
        return /*#__PURE__*/React.createElement(Icon, {
          title: locale.filterTitle,
          type: "filter",
          theme: "filled",
          className: dropdownIconClass,
          onClick: stopPropagation$1
        });
      }

      if ( /*#__PURE__*/React.isValidElement(filterIcon)) {
        return /*#__PURE__*/React.cloneElement(filterIcon, {
          title: filterIcon.props.title || locale.filterTitle,
          className: classNames("".concat(prefixCls, "-icon"), dropdownIconClass, filterIcon.props.className),
          onClick: stopPropagation$1
        });
      }

      return /*#__PURE__*/React.createElement("span", {
        className: classNames("".concat(prefixCls, "-icon"), dropdownIconClass)
      }, filterIcon);
    };

    var visible = 'filterDropdownVisible' in props.column ? props.column.filterDropdownVisible : false;
    _this.state = {
      selectedKeys: props.selectedKeys,
      valueKeys: generateValueMaps(props.column.filters),
      keyPathOfSelectedItem: {},
      visible: visible,
      prevProps: props
    };
    return _this;
  }

  _createClass$4(FilterMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var column = this.props.column;
      this.setNeverShown(column);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var column = this.props.column;
      this.setNeverShown(column);
    }
  }, {
    key: "getDropdownVisible",
    value: function getDropdownVisible() {
      return this.neverShown ? false : this.state.visible;
    }
  }, {
    key: "setVisible",
    value: function setVisible(visible) {
      var column = this.props.column;

      if (!('filterDropdownVisible' in column)) {
        this.setState({
          visible: visible
        });
      }

      if (column.onFilterDropdownVisibleChange) {
        column.onFilterDropdownVisibleChange(visible);
      }
    }
  }, {
    key: "hasSubMenu",
    value: function hasSubMenu() {
      var _this$props$column$fi = this.props.column.filters,
          filters = _this$props$column$fi === void 0 ? [] : _this$props$column$fi;
      return filters.some(function (item) {
        return !!(item.children && item.children.length > 0);
      });
    }
  }, {
    key: "confirmFilter",
    value: function confirmFilter() {
      var _this$props2 = this.props,
          column = _this$props2.column,
          propSelectedKeys = _this$props2.selectedKeys,
          confirmFilter = _this$props2.confirmFilter;
      var _this$state = this.state,
          selectedKeys = _this$state.selectedKeys,
          valueKeys = _this$state.valueKeys;
      var filterDropdown = column.filterDropdown;

      if (!shallowEqual(selectedKeys, propSelectedKeys)) {
        confirmFilter(column, filterDropdown ? selectedKeys : selectedKeys.map(function (key) {
          return valueKeys[key];
        }).filter(function (key) {
          return key !== undefined;
        }));
      }
    }
  }, {
    key: "renderMenus",
    value: function renderMenus(items) {
      var _this2 = this;

      var _this$props3 = this.props,
          dropdownPrefixCls = _this$props3.dropdownPrefixCls,
          prefixCls = _this$props3.prefixCls;
      return items.map(function (item) {
        if (item.children && item.children.length > 0) {
          var keyPathOfSelectedItem = _this2.state.keyPathOfSelectedItem;
          var containSelected = Object.keys(keyPathOfSelectedItem).some(function (key) {
            return keyPathOfSelectedItem[key].indexOf(item.value) >= 0;
          });
          var subMenuCls = classNames("".concat(prefixCls, "-dropdown-submenu"), _defineProperty$3({}, "".concat(dropdownPrefixCls, "-submenu-contain-selected"), containSelected));
          return /*#__PURE__*/React.createElement(connected, {
            title: item.text,
            popupClassName: subMenuCls,
            key: item.value.toString()
          }, _this2.renderMenus(item.children));
        }

        return _this2.renderMenuItem(item);
      });
    }
  }, {
    key: "renderMenuItem",
    value: function renderMenuItem(item) {
      var column = this.props.column;
      var selectedKeys = this.state.selectedKeys;
      var multiple = 'filterMultiple' in column ? column.filterMultiple : true; // We still need trade key as string since Menu render need string

      var internalSelectedKeys = (selectedKeys || []).map(function (key) {
        return key.toString();
      });
      var input = multiple ? /*#__PURE__*/React.createElement(Checkbox, {
        checked: internalSelectedKeys.indexOf(item.value.toString()) >= 0
      }) : /*#__PURE__*/React.createElement(Radio, {
        checked: internalSelectedKeys.indexOf(item.value.toString()) >= 0
      });
      return /*#__PURE__*/React.createElement(connected$1, {
        key: item.value
      }, input, /*#__PURE__*/React.createElement("span", null, item.text));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var originSelectedKeys = this.state.selectedKeys;
      var _this$props4 = this.props,
          column = _this$props4.column,
          locale = _this$props4.locale,
          prefixCls = _this$props4.prefixCls,
          dropdownPrefixCls = _this$props4.dropdownPrefixCls,
          getPopupContainer = _this$props4.getPopupContainer; // default multiple selection in filter dropdown

      var multiple = 'filterMultiple' in column ? column.filterMultiple : true;
      var dropdownMenuClass = classNames(_defineProperty$3({}, "".concat(dropdownPrefixCls, "-menu-without-submenu"), !this.hasSubMenu()));
      var filterDropdown = column.filterDropdown;

      if (filterDropdown instanceof Function) {
        filterDropdown = filterDropdown({
          prefixCls: "".concat(dropdownPrefixCls, "-custom"),
          setSelectedKeys: function setSelectedKeys(selectedKeys) {
            return _this3.setSelectedKeys({
              selectedKeys: selectedKeys
            });
          },
          selectedKeys: originSelectedKeys,
          confirm: this.handleConfirm,
          clearFilters: this.handleClearFilters,
          filters: column.filters,
          visible: this.getDropdownVisible()
        });
      }

      var menus = filterDropdown ? /*#__PURE__*/React.createElement(FilterDropdownMenuWrapper, {
        className: "".concat(prefixCls, "-dropdown")
      }, filterDropdown) : /*#__PURE__*/React.createElement(FilterDropdownMenuWrapper, {
        className: "".concat(prefixCls, "-dropdown")
      }, /*#__PURE__*/React.createElement(Menu, {
        multiple: multiple,
        onClick: this.handleMenuItemClick,
        prefixCls: "".concat(dropdownPrefixCls, "-menu"),
        className: dropdownMenuClass,
        onSelect: this.setSelectedKeys,
        onDeselect: this.setSelectedKeys,
        selectedKeys: originSelectedKeys && originSelectedKeys.map(function (val) {
          return val.toString();
        }),
        getPopupContainer: getPopupContainer
      }, this.renderMenus(column.filters)), /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-dropdown-btns")
      }, /*#__PURE__*/React.createElement("a", {
        className: "".concat(prefixCls, "-dropdown-link confirm"),
        onClick: this.handleConfirm
      }, locale.filterConfirm), /*#__PURE__*/React.createElement("a", {
        className: "".concat(prefixCls, "-dropdown-link clear"),
        onClick: this.handleClearFilters
      }, locale.filterReset)));
      return /*#__PURE__*/React.createElement(Dropdown, {
        trigger: ['click'],
        placement: "bottomRight",
        overlay: menus,
        visible: this.getDropdownVisible(),
        onVisibleChange: this.onVisibleChange,
        getPopupContainer: getPopupContainer,
        forceRender: true
      }, this.renderFilterIcon());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var column = nextProps.column;
      var prevProps = prevState.prevProps;
      var newState = {
        prevProps: nextProps
      };
      /**
       * if the state is visible the component should ignore updates on selectedKeys prop to avoid
       * that the user selection is lost
       * this happens frequently when a table is connected on some sort of realtime data
       * Fixes https://github.com/ant-design/ant-design/issues/10289 and
       * https://github.com/ant-design/ant-design/issues/10209
       */

      if ('selectedKeys' in nextProps && !shallowEqual(prevProps.selectedKeys, nextProps.selectedKeys)) {
        newState.selectedKeys = nextProps.selectedKeys;
      }

      if (!shallowEqual((prevProps.column || {}).filters, (nextProps.column || {}).filters)) {
        newState.valueKeys = generateValueMaps(nextProps.column.filters);
      }

      if ('filterDropdownVisible' in column) {
        newState.visible = column.filterDropdownVisible;
      }

      return newState;
    }
  }]);

  return FilterMenu;
}(React.Component);

FilterMenu.defaultProps = {
  column: {}
};
polyfill(FilterMenu);

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

function createStore(initialState) {
  var state = initialState;
  var listeners = [];

  function setState(partial) {
    state = _extends$4(_extends$4({}, state), partial);

    for (var i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }

  function getState() {
    return state;
  }

  function subscribe(listener) {
    listeners.push(listener);
    return function unsubscribe() {
      var index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }

  return {
    setState: setState,
    getState: getState,
    subscribe: subscribe
  };
}

function _typeof$5(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$5 = function _typeof(obj) { return typeof obj; }; } else { _typeof$5 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$5(obj); }

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

function _classCallCheck$5(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$3(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$3(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$3(Constructor.prototype, protoProps); return Constructor; }

function _inherits$5(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$5(subClass, superClass); }

function _setPrototypeOf$5(o, p) { _setPrototypeOf$5 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$5(o, p); }

function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = _getPrototypeOf$5(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$5(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$5(this, result); }; }

function _possibleConstructorReturn$5(self, call) { if (call && (_typeof$5(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$5(self); }

function _assertThisInitialized$5(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$5(o) { _getPrototypeOf$5 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$5(o); }

var __rest$1 = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var SelectionBox = /*#__PURE__*/function (_React$Component) {
  _inherits$5(SelectionBox, _React$Component);

  var _super = _createSuper$5(SelectionBox);

  function SelectionBox(props) {
    var _this;

    _classCallCheck$5(this, SelectionBox);

    _this = _super.call(this, props);
    _this.state = {
      checked: _this.getCheckState(props)
    };
    return _this;
  }

  _createClass$3(SelectionBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.subscribe();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.unsubscribe) {
        this.unsubscribe();
      }
    } // eslint-disable-next-line class-methods-use-this

  }, {
    key: "getCheckState",
    value: function getCheckState(props) {
      var store = props.store,
          defaultSelection = props.defaultSelection,
          rowIndex = props.rowIndex;
      var checked = false;

      if (store.getState().selectionDirty) {
        checked = store.getState().selectedRowKeys.indexOf(rowIndex) >= 0;
      } else {
        checked = store.getState().selectedRowKeys.indexOf(rowIndex) >= 0 || defaultSelection.indexOf(rowIndex) >= 0;
      }

      return checked;
    }
  }, {
    key: "subscribe",
    value: function subscribe() {
      var _this2 = this;

      var store = this.props.store;
      this.unsubscribe = store.subscribe(function () {
        var checked = _this2.getCheckState(_this2.props);

        _this2.setState({
          checked: checked
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
          type = _a.type,
          rowIndex = _a.rowIndex,
          rest = __rest$1(_a, ["type", "rowIndex"]);

      var checked = this.state.checked;

      if (type === 'radio') {
        return /*#__PURE__*/React.createElement(Radio, _extends$3({
          checked: checked,
          value: rowIndex
        }, rest));
      }

      return /*#__PURE__*/React.createElement(Checkbox, _extends$3({
        checked: checked
      }, rest));
    }
  }]);

  return SelectionBox;
}(React.Component);

function _typeof$4(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$4 = function _typeof(obj) { return typeof obj; }; } else { _typeof$4 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$4(obj); }

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$2(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$2(Constructor.prototype, protoProps); if (staticProps) _defineProperties$2(Constructor, staticProps); return Constructor; }

function _inherits$4(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$4(subClass, superClass); }

function _setPrototypeOf$4(o, p) { _setPrototypeOf$4 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$4(o, p); }

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf$4(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$4(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$4(this, result); }; }

function _possibleConstructorReturn$4(self, call) { if (call && (_typeof$4(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$4(self); }

function _assertThisInitialized$4(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$4(o) { _getPrototypeOf$4 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$4(o); }

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function checkSelection(_ref) {
  var store = _ref.store,
      getCheckboxPropsByItem = _ref.getCheckboxPropsByItem,
      getRecordKey = _ref.getRecordKey,
      data = _ref.data,
      type = _ref.type,
      byDefaultChecked = _ref.byDefaultChecked;
  return byDefaultChecked ? data[type](function (item, i) {
    return getCheckboxPropsByItem(item, i).defaultChecked;
  }) : data[type](function (item, i) {
    return store.getState().selectedRowKeys.indexOf(getRecordKey(item, i)) >= 0;
  });
}

function getIndeterminateState(props) {
  var store = props.store,
      data = props.data;

  if (!data.length) {
    return false;
  }

  var someCheckedNotByDefaultChecked = checkSelection(_extends$2(_extends$2({}, props), {
    data: data,
    type: 'some',
    byDefaultChecked: false
  })) && !checkSelection(_extends$2(_extends$2({}, props), {
    data: data,
    type: 'every',
    byDefaultChecked: false
  }));
  var someCheckedByDefaultChecked = checkSelection(_extends$2(_extends$2({}, props), {
    data: data,
    type: 'some',
    byDefaultChecked: true
  })) && !checkSelection(_extends$2(_extends$2({}, props), {
    data: data,
    type: 'every',
    byDefaultChecked: true
  }));

  if (store.getState().selectionDirty) {
    return someCheckedNotByDefaultChecked;
  }

  return someCheckedNotByDefaultChecked || someCheckedByDefaultChecked;
}

function getCheckState(props) {
  var store = props.store,
      data = props.data;

  if (!data.length) {
    return false;
  }

  if (store.getState().selectionDirty) {
    return checkSelection(_extends$2(_extends$2({}, props), {
      data: data,
      type: 'every',
      byDefaultChecked: false
    }));
  }

  return checkSelection(_extends$2(_extends$2({}, props), {
    data: data,
    type: 'every',
    byDefaultChecked: false
  })) || checkSelection(_extends$2(_extends$2({}, props), {
    data: data,
    type: 'every',
    byDefaultChecked: true
  }));
}

var SelectionCheckboxAll = /*#__PURE__*/function (_React$Component) {
  _inherits$4(SelectionCheckboxAll, _React$Component);

  var _super = _createSuper$4(SelectionCheckboxAll);

  function SelectionCheckboxAll(props) {
    var _this;

    _classCallCheck$4(this, SelectionCheckboxAll);

    _this = _super.call(this, props);
    _this.state = {
      checked: false,
      indeterminate: false
    };

    _this.handleSelectAllChange = function (e) {
      var checked = e.target.checked;

      _this.props.onSelect(checked ? 'all' : 'removeAll', 0, null);
    };

    _this.defaultSelections = props.hideDefaultSelections ? [] : [{
      key: 'all',
      text: props.locale.selectAll
    }, {
      key: 'invert',
      text: props.locale.selectInvert
    }];
    return _this;
  }

  _createClass$2(SelectionCheckboxAll, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.subscribe();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.unsubscribe) {
        this.unsubscribe();
      }
    }
  }, {
    key: "setCheckState",
    value: function setCheckState(props) {
      var checked = getCheckState(props);
      var indeterminate = getIndeterminateState(props);
      this.setState(function (prevState) {
        var newState = {};

        if (indeterminate !== prevState.indeterminate) {
          newState.indeterminate = indeterminate;
        }

        if (checked !== prevState.checked) {
          newState.checked = checked;
        }

        return newState;
      });
    }
  }, {
    key: "subscribe",
    value: function subscribe() {
      var _this2 = this;

      var store = this.props.store;
      this.unsubscribe = store.subscribe(function () {
        _this2.setCheckState(_this2.props);
      });
    }
  }, {
    key: "renderMenus",
    value: function renderMenus(selections) {
      var _this3 = this;

      return selections.map(function (selection, index) {
        return /*#__PURE__*/React.createElement(Menu$1.Item, {
          key: selection.key || index
        }, /*#__PURE__*/React.createElement("div", {
          onClick: function onClick() {
            _this3.props.onSelect(selection.key, index, selection.onSelect);
          }
        }, selection.text));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          disabled = _this$props.disabled,
          prefixCls = _this$props.prefixCls,
          selections = _this$props.selections,
          getPopupContainer = _this$props.getPopupContainer;
      var _this$state = this.state,
          checked = _this$state.checked,
          indeterminate = _this$state.indeterminate;
      var selectionPrefixCls = "".concat(prefixCls, "-selection");
      var customSelections = null;

      if (selections) {
        var newSelections = Array.isArray(selections) ? this.defaultSelections.concat(selections) : this.defaultSelections;
        var menu = /*#__PURE__*/React.createElement(Menu$1, {
          className: "".concat(selectionPrefixCls, "-menu"),
          selectedKeys: []
        }, this.renderMenus(newSelections));
        customSelections = newSelections.length > 0 ? /*#__PURE__*/React.createElement(Dropdown, {
          overlay: menu,
          getPopupContainer: getPopupContainer
        }, /*#__PURE__*/React.createElement("div", {
          className: "".concat(selectionPrefixCls, "-down")
        }, /*#__PURE__*/React.createElement(Icon, {
          type: "down"
        }))) : null;
      }

      return /*#__PURE__*/React.createElement("div", {
        className: selectionPrefixCls
      }, /*#__PURE__*/React.createElement(Checkbox, {
        className: classNames(_defineProperty$2({}, "".concat(selectionPrefixCls, "-select-all-custom"), customSelections)),
        checked: checked,
        indeterminate: indeterminate,
        disabled: disabled,
        onChange: this.handleSelectAllChange
      }), customSelections);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var checked = getCheckState(props);
      var indeterminate = getIndeterminateState(props);
      var newState = {};

      if (indeterminate !== state.indeterminate) {
        newState.indeterminate = indeterminate;
      }

      if (checked !== state.checked) {
        newState.checked = checked;
      }

      return newState;
    }
  }]);

  return SelectionCheckboxAll;
}(React.Component);

polyfill(SelectionCheckboxAll);

function _typeof$3(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$3 = function _typeof(obj) { return typeof obj; }; } else { _typeof$3 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$3(obj); }

function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$3(subClass, superClass); }

function _setPrototypeOf$3(o, p) { _setPrototypeOf$3 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$3(o, p); }

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf$3(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$3(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$3(this, result); }; }

function _possibleConstructorReturn$3(self, call) { if (call && (_typeof$3(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$3(self); }

function _assertThisInitialized$3(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$3(o) { _getPrototypeOf$3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$3(o); }
/* eslint-disable react/prefer-stateless-function */

var Column = /*#__PURE__*/function (_React$Component) {
  _inherits$3(Column, _React$Component);

  var _super = _createSuper$3(Column);

  function Column() {
    _classCallCheck$3(this, Column);

    return _super.apply(this, arguments);
  }

  return Column;
}(React.Component);

function _typeof$2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$2 = function _typeof(obj) { return typeof obj; }; } else { _typeof$2 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$2(obj); }

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$2(subClass, superClass); }

function _setPrototypeOf$2(o, p) { _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$2(o, p); }

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf$2(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$2(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$2(this, result); }; }

function _possibleConstructorReturn$2(self, call) { if (call && (_typeof$2(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$2(self); }

function _assertThisInitialized$2(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$2(o) { _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$2(o); }

var ColumnGroup = /*#__PURE__*/function (_React$Component) {
  _inherits$2(ColumnGroup, _React$Component);

  var _super = _createSuper$2(ColumnGroup);

  function ColumnGroup() {
    _classCallCheck$2(this, ColumnGroup);

    return _super.apply(this, arguments);
  }

  return ColumnGroup;
}(React.Component);
ColumnGroup.__ANT_TABLE_COLUMN_GROUP = true;

function _typeof$1(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); return Constructor; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$1(subClass, superClass); }

function _setPrototypeOf$1(o, p) { _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$1(o, p); }

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }

function _possibleConstructorReturn$1(self, call) { if (call && (_typeof$1(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$1(self); }

function _assertThisInitialized$1(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$1(o) { _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$1(o); }
function createBodyRow() {
  var Component = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'tr';

  var BodyRow = /*#__PURE__*/function (_React$Component) {
    _inherits$1(BodyRow, _React$Component);

    var _super = _createSuper$1(BodyRow);

    function BodyRow(props) {
      var _this;

      _classCallCheck$1(this, BodyRow);

      _this = _super.call(this, props);
      _this.store = props.store;

      var _this$store$getState = _this.store.getState(),
          selectedRowKeys = _this$store$getState.selectedRowKeys;

      _this.state = {
        selected: selectedRowKeys.indexOf(props.rowKey) >= 0
      };
      return _this;
    }

    _createClass$1(BodyRow, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.subscribe();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.unsubscribe) {
          this.unsubscribe();
        }
      }
    }, {
      key: "subscribe",
      value: function subscribe() {
        var _this2 = this;

        var _this$props = this.props,
            store = _this$props.store,
            rowKey = _this$props.rowKey;
        this.unsubscribe = store.subscribe(function () {
          var _this2$store$getState = _this2.store.getState(),
              selectedRowKeys = _this2$store$getState.selectedRowKeys;

          var selected = selectedRowKeys.indexOf(rowKey) >= 0;

          if (selected !== _this2.state.selected) {
            _this2.setState({
              selected: selected
            });
          }
        });
      }
    }, {
      key: "render",
      value: function render() {
        var rowProps = omit(this.props, ['prefixCls', 'rowKey', 'store']);
        var className = classNames(this.props.className, _defineProperty$1({}, "".concat(this.props.prefixCls, "-row-selected"), this.state.selected));
        return /*#__PURE__*/React.createElement(Component, _extends$1(_extends$1({}, rowProps), {
          className: className
        }), this.props.children);
      }
    }]);

    return BodyRow;
  }(React.Component);

  return BodyRow;
}

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

function noop() {}

function stopPropagation(e) {
  e.stopPropagation();
}

function getRowSelection(props) {
  return props.rowSelection || {};
}

function getColumnKey(column, index) {
  return column.key || column.dataIndex || index;
}

function isSameColumn(a, b) {
  if (a && b && a.key && a.key === b.key) {
    return true;
  }

  return a === b || shallowEqual(a, b, function (value, other) {
    // https://github.com/ant-design/ant-design/issues/12737
    if (typeof value === 'function' && typeof other === 'function') {
      return value === other || value.toString() === other.toString();
    } // https://github.com/ant-design/ant-design/issues/19398


    if (Array.isArray(value) && Array.isArray(other)) {
      return value === other || shallowEqual(value, other);
    }
  });
}

var defaultPagination = {
  onChange: noop,
  onShowSizeChange: noop
};
/**
 * Avoid creating new object, so that parent component's shouldComponentUpdate
 * can works appropriately。
 */

var emptyObject = {};

var createComponents = function createComponents() {
  var components = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var bodyRow = components && components.body && components.body.row;
  return _extends(_extends({}, components), {
    body: _extends(_extends({}, components.body), {
      row: createBodyRow(bodyRow)
    })
  });
};

function isTheSameComponents() {
  var components1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var components2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return components1 === components2 || ['table', 'header', 'body'].every(function (key) {
    return shallowEqual(components1[key], components2[key]);
  });
}

function getFilteredValueColumns(state, columns) {
  return flatFilter(columns || (state || {}).columns || [], function (column) {
    return typeof column.filteredValue !== 'undefined';
  });
}

function getFiltersFromColumns() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var columns = arguments.length > 1 ? arguments[1] : undefined;
  var filters = {};
  getFilteredValueColumns(state, columns).forEach(function (col) {
    var colKey = getColumnKey(col);
    filters[colKey] = col.filteredValue;
  });
  return filters;
}

function isFiltersChanged(state, filters) {
  if (Object.keys(filters).length !== Object.keys(state.filters).length) {
    return true;
  }

  return Object.keys(filters).some(function (columnKey) {
    return filters[columnKey] !== state.filters[columnKey];
  });
}

var Table = /*#__PURE__*/function (_React$Component) {
  _inherits(Table, _React$Component);

  var _super = _createSuper(Table);

  function Table(props) {
    var _this;

    _classCallCheck(this, Table);

    _this = _super.call(this, props);

    _this.setTableRef = function (table) {
      _this.rcTable = table;
    };

    _this.getCheckboxPropsByItem = function (item, index) {
      var rowSelection = getRowSelection(_this.props);

      if (!rowSelection.getCheckboxProps) {
        return {};
      }

      var key = _this.getRecordKey(item, index); // Cache checkboxProps


      if (!_this.props.checkboxPropsCache[key]) {
        _this.props.checkboxPropsCache[key] = rowSelection.getCheckboxProps(item) || {};
      }

      return _this.props.checkboxPropsCache[key];
    };

    _this.getRecordKey = function (record, index) {
      var rowKey = _this.props.rowKey;
      var recordKey = typeof rowKey === 'function' ? rowKey(record, index) : record[rowKey];
      return recordKey === undefined ? index : recordKey;
    };

    _this.onRow = function (prefixCls, record, index) {
      var onRow = _this.props.onRow;
      var custom = onRow ? onRow(record, index) : {};
      return _extends(_extends({}, custom), {
        prefixCls: prefixCls,
        store: _this.props.store,
        rowKey: _this.getRecordKey(record, index)
      });
    };

    _this.generatePopupContainerFunc = function (getPopupContainer) {
      var scroll = _this.props.scroll;
      var table = _this.rcTable;

      if (getPopupContainer) {
        return getPopupContainer;
      } // Use undefined to let rc component use default logic.


      return scroll && table ? function () {
        return table.tableNode;
      } : undefined;
    };

    _this.scrollToFirstRow = function () {
      var scroll = _this.props.scroll;

      if (scroll && scroll.scrollToFirstRowOnChange !== false) {
        scrollTo(0, {
          getContainer: function getContainer() {
            return _this.rcTable.bodyTable;
          }
        });
      }
    };

    _this.handleFilter = function (column, nextFilters) {
      var props = _this.props;

      var pagination = _extends({}, _this.state.pagination);

      var filters = _extends(_extends({}, _this.state.filters), _defineProperty({}, getColumnKey(column), nextFilters)); // Remove filters not in current columns


      var currentColumnKeys = [];
      treeMap(_this.state.columns, function (c) {
        if (!c.children) {
          currentColumnKeys.push(getColumnKey(c));
        }
      });
      Object.keys(filters).forEach(function (columnKey) {
        if (currentColumnKeys.indexOf(columnKey) < 0) {
          delete filters[columnKey];
        }
      });

      if (props.pagination) {
        // Reset current prop
        pagination.current = 1;
        pagination.onChange(pagination.current);
      }

      var newState = {
        pagination: pagination,
        filters: {}
      };

      var filtersToSetState = _extends({}, filters); // Remove filters which is controlled


      getFilteredValueColumns(_this.state).forEach(function (col) {
        var columnKey = getColumnKey(col);

        if (columnKey) {
          delete filtersToSetState[columnKey];
        }
      });

      if (Object.keys(filtersToSetState).length > 0) {
        newState.filters = filtersToSetState;
      } // Controlled current prop will not respond user interaction


      if (_typeof(props.pagination) === 'object' && 'current' in props.pagination) {
        newState.pagination = _extends(_extends({}, pagination), {
          current: _this.state.pagination.current
        });
      }

      _this.setState(newState, function () {
        _this.scrollToFirstRow();

        _this.props.store.setState({
          selectionDirty: false
        });

        var onChange = _this.props.onChange;

        if (onChange) {
          onChange.apply(null, _this.prepareParamsArguments(_extends(_extends({}, _this.state), {
            selectionDirty: false,
            filters: filters,
            pagination: pagination
          })));
        }
      });
    };

    _this.handleSelect = function (record, rowIndex, e) {
      var checked = e.target.checked;
      var nativeEvent = e.nativeEvent;
      var defaultSelection = _this.props.store.getState().selectionDirty ? [] : _this.getDefaultSelection();

      var selectedRowKeys = _this.props.store.getState().selectedRowKeys.concat(defaultSelection);

      var key = _this.getRecordKey(record, rowIndex);

      var pivot = _this.state.pivot;

      var rows = _this.getFlatCurrentPageData();

      var realIndex = rowIndex;

      if (_this.props.expandedRowRender) {
        realIndex = rows.findIndex(function (row) {
          return _this.getRecordKey(row, rowIndex) === key;
        });
      }

      if (nativeEvent.shiftKey && pivot !== undefined && realIndex !== pivot) {
        var changeRowKeys = [];
        var direction = Math.sign(pivot - realIndex);
        var dist = Math.abs(pivot - realIndex);
        var step = 0;

        var _loop = function _loop() {
          var i = realIndex + step * direction;
          step += 1;
          var row = rows[i];

          var rowKey = _this.getRecordKey(row, i);

          var checkboxProps = _this.getCheckboxPropsByItem(row, i);

          if (!checkboxProps.disabled) {
            if (selectedRowKeys.includes(rowKey)) {
              if (!checked) {
                selectedRowKeys = selectedRowKeys.filter(function (j) {
                  return rowKey !== j;
                });
                changeRowKeys.push(rowKey);
              }
            } else if (checked) {
              selectedRowKeys.push(rowKey);
              changeRowKeys.push(rowKey);
            }
          }
        };

        while (step <= dist) {
          _loop();
        }

        _this.setState({
          pivot: realIndex
        });

        _this.props.store.setState({
          selectionDirty: true
        });

        _this.setSelectedRowKeys(selectedRowKeys, {
          selectWay: 'onSelectMultiple',
          record: record,
          checked: checked,
          changeRowKeys: changeRowKeys,
          nativeEvent: nativeEvent
        });
      } else {
        if (checked) {
          selectedRowKeys.push(_this.getRecordKey(record, realIndex));
        } else {
          selectedRowKeys = selectedRowKeys.filter(function (i) {
            return key !== i;
          });
        }

        _this.setState({
          pivot: realIndex
        });

        _this.props.store.setState({
          selectionDirty: true
        });

        _this.setSelectedRowKeys(selectedRowKeys, {
          selectWay: 'onSelect',
          record: record,
          checked: checked,
          changeRowKeys: undefined,
          nativeEvent: nativeEvent
        });
      }
    };

    _this.handleRadioSelect = function (record, rowIndex, e) {
      var checked = e.target.checked;
      var nativeEvent = e.nativeEvent;

      var key = _this.getRecordKey(record, rowIndex);

      var selectedRowKeys = [key];

      _this.props.store.setState({
        selectionDirty: true
      });

      _this.setSelectedRowKeys(selectedRowKeys, {
        selectWay: 'onSelect',
        record: record,
        checked: checked,
        changeRowKeys: undefined,
        nativeEvent: nativeEvent
      });
    };

    _this.handleSelectRow = function (selectionKey, index, onSelectFunc) {
      var data = _this.getFlatCurrentPageData();

      var defaultSelection = _this.props.store.getState().selectionDirty ? [] : _this.getDefaultSelection();

      var selectedRowKeys = _this.props.store.getState().selectedRowKeys.concat(defaultSelection);

      var changeableRowKeys = data.filter(function (item, i) {
        return !_this.getCheckboxPropsByItem(item, i).disabled;
      }).map(function (item, i) {
        return _this.getRecordKey(item, i);
      });
      var changeRowKeys = [];
      var selectWay = 'onSelectAll';
      var checked; // handle default selection

      switch (selectionKey) {
        case 'all':
          changeableRowKeys.forEach(function (key) {
            if (selectedRowKeys.indexOf(key) < 0) {
              selectedRowKeys.push(key);
              changeRowKeys.push(key);
            }
          });
          selectWay = 'onSelectAll';
          checked = true;
          break;

        case 'removeAll':
          changeableRowKeys.forEach(function (key) {
            if (selectedRowKeys.indexOf(key) >= 0) {
              selectedRowKeys.splice(selectedRowKeys.indexOf(key), 1);
              changeRowKeys.push(key);
            }
          });
          selectWay = 'onSelectAll';
          checked = false;
          break;

        case 'invert':
          changeableRowKeys.forEach(function (key) {
            if (selectedRowKeys.indexOf(key) < 0) {
              selectedRowKeys.push(key);
            } else {
              selectedRowKeys.splice(selectedRowKeys.indexOf(key), 1);
            }

            changeRowKeys.push(key);
            selectWay = 'onSelectInvert';
          });
          break;
      }

      _this.props.store.setState({
        selectionDirty: true
      }); // when select custom selection, callback selections[n].onSelect


      var rowSelection = _this.props.rowSelection;
      var customSelectionStartIndex = 2;

      if (rowSelection && rowSelection.hideDefaultSelections) {
        customSelectionStartIndex = 0;
      }

      if (index >= customSelectionStartIndex && typeof onSelectFunc === 'function') {
        return onSelectFunc(changeableRowKeys);
      }

      _this.setSelectedRowKeys(selectedRowKeys, {
        selectWay: selectWay,
        checked: checked,
        changeRowKeys: changeRowKeys
      });
    };

    _this.handlePageChange = function (current) {
      var props = _this.props;

      var pagination = _extends({}, _this.state.pagination);

      if (current) {
        pagination.current = current;
      } else {
        pagination.current = pagination.current || 1;
      }

      for (var _len = arguments.length, otherArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        otherArguments[_key - 1] = arguments[_key];
      }

      pagination.onChange.apply(pagination, [pagination.current].concat(otherArguments));
      var newState = {
        pagination: pagination
      }; // Controlled current prop will not respond user interaction

      if (props.pagination && _typeof(props.pagination) === 'object' && 'current' in props.pagination) {
        newState.pagination = _extends(_extends({}, pagination), {
          current: _this.state.pagination.current
        });
      }

      _this.setState(newState, _this.scrollToFirstRow);

      _this.props.store.setState({
        selectionDirty: false
      });

      var onChange = _this.props.onChange;

      if (onChange) {
        onChange.apply(null, _this.prepareParamsArguments(_extends(_extends({}, _this.state), {
          selectionDirty: false,
          pagination: pagination
        })));
      }
    };

    _this.handleShowSizeChange = function (current, pageSize) {
      var pagination = _this.state.pagination;
      pagination.onShowSizeChange(current, pageSize);

      var nextPagination = _extends(_extends({}, pagination), {
        pageSize: pageSize,
        current: current
      });

      _this.setState({
        pagination: nextPagination
      }, _this.scrollToFirstRow);

      var onChange = _this.props.onChange;

      if (onChange) {
        onChange.apply(null, _this.prepareParamsArguments(_extends(_extends({}, _this.state), {
          pagination: nextPagination
        })));
      }
    };

    _this.renderExpandIcon = function (prefixCls) {
      return function (_ref) {
        var expandable = _ref.expandable,
            expanded = _ref.expanded,
            needIndentSpaced = _ref.needIndentSpaced,
            record = _ref.record,
            onExpand = _ref.onExpand;

        if (expandable) {
          return /*#__PURE__*/React.createElement(LocaleReceiver, {
            componentName: "Table",
            defaultLocale: defaultLocale.Table
          }, function (locale) {
            var _classNames;

            return /*#__PURE__*/React.createElement(TransButton, {
              className: classNames("".concat(prefixCls, "-row-expand-icon"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-row-collapsed"), !expanded), _defineProperty(_classNames, "".concat(prefixCls, "-row-expanded"), expanded), _classNames)),
              onClick: function onClick(event) {
                onExpand(record, event);
              },
              "aria-label": expanded ? locale.collapse : locale.expand,
              noStyle: true
            });
          });
        }

        if (needIndentSpaced) {
          return /*#__PURE__*/React.createElement("span", {
            className: "".concat(prefixCls, "-row-expand-icon ").concat(prefixCls, "-row-spaced")
          });
        }

        return null;
      };
    };

    _this.renderSelectionBox = function (type) {
      return function (_, record, index) {
        var rowKey = _this.getRecordKey(record, index);

        var props = _this.getCheckboxPropsByItem(record, index);

        var handleChange = function handleChange(e) {
          return type === 'radio' ? _this.handleRadioSelect(record, index, e) : _this.handleSelect(record, index, e);
        };

        return /*#__PURE__*/React.createElement("span", {
          onClick: stopPropagation
        }, /*#__PURE__*/React.createElement(SelectionBox, _extends({
          type: type,
          store: _this.props.store,
          rowIndex: rowKey,
          onChange: handleChange,
          defaultSelection: _this.getDefaultSelection()
        }, props)));
      };
    };

    _this.renderTable = function (_ref2) {
      var _classNames2;

      var prefixCls = _ref2.prefixCls,
          renderEmpty = _ref2.renderEmpty,
          dropdownPrefixCls = _ref2.dropdownPrefixCls,
          contextLocale = _ref2.contextLocale,
          contextGetPopupContainer = _ref2.getPopupContainer;

      var _a = _this.props,
          showHeader = _a.showHeader,
          locale = _a.locale,
          getPopupContainer = _a.getPopupContainer,
          restTableProps = __rest(_a, ["showHeader", "locale", "getPopupContainer"]); // do not pass prop.style to rc-table, since already apply it to container div


      var restProps = omit(restTableProps, ['style']);

      var data = _this.getCurrentPageData();

      var expandIconAsCell = _this.props.expandedRowRender && _this.props.expandIconAsCell !== false; // use props.getPopupContainer first

      var realGetPopupContainer = getPopupContainer || contextGetPopupContainer; // Merge too locales

      var mergedLocale = _extends(_extends({}, contextLocale), locale);

      if (!locale || !locale.emptyText) {
        mergedLocale.emptyText = renderEmpty('Table');
      }

      var classString = classNames("".concat(prefixCls, "-").concat(_this.props.size), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-bordered"), _this.props.bordered), _defineProperty(_classNames2, "".concat(prefixCls, "-empty"), !data.length), _defineProperty(_classNames2, "".concat(prefixCls, "-without-column-header"), !showHeader), _classNames2));

      var columnsWithRowSelection = _this.renderRowSelection({
        prefixCls: prefixCls,
        locale: mergedLocale,
        getPopupContainer: realGetPopupContainer
      });

      var columns = _this.renderColumnsDropdown({
        columns: columnsWithRowSelection,
        prefixCls: prefixCls,
        dropdownPrefixCls: dropdownPrefixCls,
        locale: mergedLocale,
        getPopupContainer: realGetPopupContainer
      }).map(function (column, i) {
        var newColumn = _extends({}, column);

        newColumn.key = getColumnKey(newColumn, i);
        return newColumn;
      });

      var expandIconColumnIndex = columns[0] && columns[0].key === 'selection-column' ? 1 : 0;

      if ('expandIconColumnIndex' in restProps) {
        expandIconColumnIndex = restProps.expandIconColumnIndex;
      }

      return /*#__PURE__*/React.createElement(RcTable, _extends({
        ref: _this.setTableRef,
        key: "table",
        expandIcon: _this.renderExpandIcon(prefixCls)
      }, restProps, {
        onRow: function onRow(record, index) {
          return _this.onRow(prefixCls, record, index);
        },
        components: _this.state.components,
        prefixCls: prefixCls,
        data: data,
        columns: columns,
        showHeader: showHeader,
        className: classString,
        expandIconColumnIndex: expandIconColumnIndex,
        expandIconAsCell: expandIconAsCell,
        emptyText: mergedLocale.emptyText
      }));
    };

    _this.renderComponent = function (_ref3) {
      var getPrefixCls = _ref3.getPrefixCls,
          renderEmpty = _ref3.renderEmpty,
          getPopupContainer = _ref3.getPopupContainer;
      var _this$props = _this.props,
          customizePrefixCls = _this$props.prefixCls,
          customizeDropdownPrefixCls = _this$props.dropdownPrefixCls,
          style = _this$props.style,
          className = _this$props.className;

      var data = _this.getCurrentPageData();

      var loading = _this.props.loading;

      if (typeof loading === 'boolean') {
        loading = {
          spinning: loading
        };
      }

      var prefixCls = getPrefixCls('table', customizePrefixCls);
      var dropdownPrefixCls = getPrefixCls('dropdown', customizeDropdownPrefixCls);
      var table = /*#__PURE__*/React.createElement(LocaleReceiver, {
        componentName: "Table",
        defaultLocale: defaultLocale.Table
      }, function (locale) {
        return _this.renderTable({
          prefixCls: prefixCls,
          renderEmpty: renderEmpty,
          dropdownPrefixCls: dropdownPrefixCls,
          contextLocale: locale,
          getPopupContainer: getPopupContainer
        });
      }); // if there is no pagination or no data,
      // the height of spin should decrease by half of pagination

      var paginationPatchClass = _this.hasPagination() && data && data.length !== 0 ? "".concat(prefixCls, "-with-pagination") : "".concat(prefixCls, "-without-pagination");
      return /*#__PURE__*/React.createElement("div", {
        className: classNames("".concat(prefixCls, "-wrapper"), className),
        style: style
      }, /*#__PURE__*/React.createElement(Spin, _extends({}, loading, {
        className: loading.spinning ? "".concat(paginationPatchClass, " ").concat(prefixCls, "-spin-holder") : ''
      }), _this.renderPagination(prefixCls, 'top'), table, _this.renderPagination(prefixCls, 'bottom')));
    };

    var expandedRowRender = props.expandedRowRender,
        columnsProp = props.columns;

    if (expandedRowRender && (columnsProp || []).some(function (_ref4) {
      var fixed = _ref4.fixed;
      return !!fixed;
    })) ;

    var columns = columnsProp || normalizeColumns(props.children);
    _this.state = _extends(_extends({}, _this.getDefaultSortOrder(columns || [])), {
      // 减少状态
      filters: _this.getDefaultFilters(columns),
      pagination: _this.getDefaultPagination(props),
      pivot: undefined,
      prevProps: props,
      components: createComponents(props.components),
      columns: columns
    });
    return _this;
  }

  _createClass(Table, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$state = this.state,
          columns = _this$state.columns,
          sortColumn = _this$state.sortColumn,
          sortOrder = _this$state.sortOrder;

      if (this.getSortOrderColumns(columns).length > 0) {
        var sortState = this.getSortStateFromColumns(columns);

        if (!isSameColumn(sortState.sortColumn, sortColumn) || sortState.sortOrder !== sortOrder) {
          this.setState(sortState);
        }
      }
    }
  }, {
    key: "getDefaultSelection",
    value: function getDefaultSelection() {
      var _this2 = this;

      var rowSelection = getRowSelection(this.props);

      if (!rowSelection.getCheckboxProps) {
        return [];
      }

      return this.getFlatData().filter(function (item, rowIndex) {
        return _this2.getCheckboxPropsByItem(item, rowIndex).defaultChecked;
      }).map(function (record, rowIndex) {
        return _this2.getRecordKey(record, rowIndex);
      });
    }
  }, {
    key: "getDefaultPagination",
    value: function getDefaultPagination(props) {
      var pagination = _typeof(props.pagination) === 'object' ? props.pagination : {};
      var current;

      if ('current' in pagination) {
        current = pagination.current;
      } else if ('defaultCurrent' in pagination) {
        current = pagination.defaultCurrent;
      }

      var pageSize;

      if ('pageSize' in pagination) {
        pageSize = pagination.pageSize;
      } else if ('defaultPageSize' in pagination) {
        pageSize = pagination.defaultPageSize;
      }

      return this.hasPagination(props) ? _extends(_extends(_extends({}, defaultPagination), pagination), {
        current: current || 1,
        pageSize: pageSize || 10
      }) : {};
    }
  }, {
    key: "getSortOrderColumns",
    value: function getSortOrderColumns(columns) {
      return flatFilter(columns || (this.state || {}).columns || [], function (column) {
        return 'sortOrder' in column;
      });
    }
  }, {
    key: "getDefaultFilters",
    value: function getDefaultFilters(columns) {
      var definedFilters = getFiltersFromColumns(this.state, columns);
      var defaultFilteredValueColumns = flatFilter(columns || [], function (column) {
        return typeof column.defaultFilteredValue !== 'undefined';
      });
      var defaultFilters = defaultFilteredValueColumns.reduce(function (soFar, col) {
        var colKey = getColumnKey(col);
        soFar[colKey] = col.defaultFilteredValue;
        return soFar;
      }, {});
      return _extends(_extends({}, defaultFilters), definedFilters);
    }
  }, {
    key: "getDefaultSortOrder",
    value: function getDefaultSortOrder(columns) {
      var definedSortState = this.getSortStateFromColumns(columns);
      var defaultSortedColumn = flatFilter(columns || [], function (column) {
        return column.defaultSortOrder != null;
      })[0];

      if (defaultSortedColumn && !definedSortState.sortColumn) {
        return {
          sortColumn: defaultSortedColumn,
          sortOrder: defaultSortedColumn.defaultSortOrder
        };
      }

      return definedSortState;
    }
  }, {
    key: "getSortStateFromColumns",
    value: function getSortStateFromColumns(columns) {
      // return first column which sortOrder is not falsy
      var sortedColumn = this.getSortOrderColumns(columns).filter(function (col) {
        return col.sortOrder;
      })[0];

      if (sortedColumn) {
        return {
          sortColumn: sortedColumn,
          sortOrder: sortedColumn.sortOrder
        };
      }

      return {
        sortColumn: null,
        sortOrder: null
      };
    }
  }, {
    key: "getMaxCurrent",
    value: function getMaxCurrent(total) {
      var _this$state$paginatio = this.state.pagination,
          current = _this$state$paginatio.current,
          pageSize = _this$state$paginatio.pageSize;

      if ((current - 1) * pageSize >= total) {
        return Math.floor((total - 1) / pageSize) + 1;
      }

      return current;
    }
  }, {
    key: "getSorterFn",
    value: function getSorterFn(state) {
      var _ref5 = state || this.state,
          sortOrder = _ref5.sortOrder,
          sortColumn = _ref5.sortColumn;

      if (!sortOrder || !sortColumn || typeof sortColumn.sorter !== 'function') {
        return;
      }

      return function (a, b) {
        var result = sortColumn.sorter(a, b, sortOrder);

        if (result !== 0) {
          return sortOrder === 'descend' ? -result : result;
        }

        return 0;
      };
    }
  }, {
    key: "getCurrentPageData",
    value: function getCurrentPageData() {
      var data = this.getLocalData();
      var current;
      var pageSize;
      var state = this.state; // 如果没有分页的话，默认全部展示

      if (!this.hasPagination()) {
        pageSize = Number.MAX_VALUE;
        current = 1;
      } else {
        pageSize = state.pagination.pageSize;
        current = this.getMaxCurrent(state.pagination.total || data.length);
      } // 分页
      // ---
      // 当数据量少于等于每页数量时，直接设置数据
      // 否则进行读取分页数据


      if (data.length > pageSize || pageSize === Number.MAX_VALUE) {
        data = data.slice((current - 1) * pageSize, current * pageSize);
      }

      return data;
    }
  }, {
    key: "getFlatData",
    value: function getFlatData() {
      var childrenColumnName = this.props.childrenColumnName;
      return flatArray(this.getLocalData(null, false), childrenColumnName);
    }
  }, {
    key: "getFlatCurrentPageData",
    value: function getFlatCurrentPageData() {
      var childrenColumnName = this.props.childrenColumnName;
      return flatArray(this.getCurrentPageData(), childrenColumnName);
    }
  }, {
    key: "getLocalData",
    value: function getLocalData(state) {
      var _this3 = this;

      var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var currentState = state || this.state;
      var dataSource = this.props.dataSource;
      var data = dataSource || []; // 优化本地排序

      data = data.slice(0);
      var sorterFn = this.getSorterFn(currentState);

      if (sorterFn) {
        data = this.recursiveSort(data, sorterFn);
      } // 筛选


      if (filter && currentState.filters) {
        Object.keys(currentState.filters).forEach(function (columnKey) {
          var col = _this3.findColumn(columnKey);

          if (!col) {
            return;
          }

          var values = currentState.filters[columnKey] || [];

          if (values.length === 0) {
            return;
          }

          var onFilter = col.onFilter;
          data = onFilter ? data.filter(function (record) {
            return values.some(function (v) {
              return onFilter(v, record);
            });
          }) : data;
        });
      }

      return data;
    }
  }, {
    key: "setSelectedRowKeys",
    value: function setSelectedRowKeys(selectedRowKeys, selectionInfo) {
      var _this4 = this;

      var selectWay = selectionInfo.selectWay,
          record = selectionInfo.record,
          checked = selectionInfo.checked,
          changeRowKeys = selectionInfo.changeRowKeys,
          nativeEvent = selectionInfo.nativeEvent;
      var rowSelection = getRowSelection(this.props);

      if (rowSelection && !('selectedRowKeys' in rowSelection)) {
        this.props.store.setState({
          selectedRowKeys: selectedRowKeys
        });
      }

      var data = this.getFlatData();

      if (!rowSelection.onChange && !rowSelection[selectWay]) {
        return;
      }

      var selectedRows = data.filter(function (row, i) {
        return selectedRowKeys.indexOf(_this4.getRecordKey(row, i)) >= 0;
      });

      if (rowSelection.onChange) {
        rowSelection.onChange(selectedRowKeys, selectedRows);
      }

      if (selectWay === 'onSelect' && rowSelection.onSelect) {
        rowSelection.onSelect(record, checked, selectedRows, nativeEvent);
      } else if (selectWay === 'onSelectMultiple' && rowSelection.onSelectMultiple) {
        var changeRows = data.filter(function (row, i) {
          return changeRowKeys.indexOf(_this4.getRecordKey(row, i)) >= 0;
        });
        rowSelection.onSelectMultiple(checked, selectedRows, changeRows);
      } else if (selectWay === 'onSelectAll' && rowSelection.onSelectAll) {
        var _changeRows = data.filter(function (row, i) {
          return changeRowKeys.indexOf(_this4.getRecordKey(row, i)) >= 0;
        });

        rowSelection.onSelectAll(checked, selectedRows, _changeRows);
      } else if (selectWay === 'onSelectInvert' && rowSelection.onSelectInvert) {
        rowSelection.onSelectInvert(selectedRowKeys);
      }
    }
  }, {
    key: "toggleSortOrder",
    value: function toggleSortOrder(column) {
      var sortDirections = column.sortDirections || this.props.sortDirections;
      var _this$state2 = this.state,
          sortOrder = _this$state2.sortOrder,
          sortColumn = _this$state2.sortColumn; // 只同时允许一列进行排序，否则会导致排序顺序的逻辑问题

      var newSortOrder; // 切换另一列时，丢弃 sortOrder 的状态

      if (isSameColumn(sortColumn, column) && sortOrder !== undefined) {
        // 按照sortDirections的内容依次切换排序状态
        var methodIndex = sortDirections.indexOf(sortOrder) + 1;
        newSortOrder = methodIndex === sortDirections.length ? undefined : sortDirections[methodIndex];
      } else {
        newSortOrder = sortDirections[0];
      }

      var newState = {
        sortOrder: newSortOrder,
        sortColumn: newSortOrder ? column : null
      }; // Controlled

      if (this.getSortOrderColumns().length === 0) {
        this.setState(newState, this.scrollToFirstRow);
      }

      var onChange = this.props.onChange;

      if (onChange) {
        onChange.apply(null, this.prepareParamsArguments(_extends(_extends({}, this.state), newState), column));
      }
    }
  }, {
    key: "hasPagination",
    value: function hasPagination(props) {
      return (props || this.props).pagination !== false;
    }
  }, {
    key: "isSortColumn",
    value: function isSortColumn(column) {
      var sortColumn = this.state.sortColumn;

      if (!column || !sortColumn) {
        return false;
      }

      return getColumnKey(sortColumn) === getColumnKey(column);
    } // Get pagination, filters, sorter

  }, {
    key: "prepareParamsArguments",
    value: function prepareParamsArguments(state, column) {
      var pagination = _extends({}, state.pagination); // remove useless handle function in Table.onChange


      delete pagination.onChange;
      delete pagination.onShowSizeChange;
      var filters = state.filters;
      var sorter = {};
      var currentColumn = column;

      if (state.sortColumn && state.sortOrder) {
        currentColumn = state.sortColumn;
        sorter.column = state.sortColumn;
        sorter.order = state.sortOrder;
      }

      if (currentColumn) {
        sorter.field = currentColumn.dataIndex;
        sorter.columnKey = getColumnKey(currentColumn);
      }

      var extra = {
        currentDataSource: this.getLocalData(state)
      };
      return [pagination, filters, sorter, extra];
    }
  }, {
    key: "findColumn",
    value: function findColumn(myKey) {
      var column;
      treeMap(this.state.columns, function (c) {
        if (getColumnKey(c) === myKey) {
          column = c;
        }
      });
      return column;
    }
  }, {
    key: "recursiveSort",
    value: function recursiveSort(data, sorterFn) {
      var _this5 = this;

      var _this$props$childrenC = this.props.childrenColumnName,
          childrenColumnName = _this$props$childrenC === void 0 ? 'children' : _this$props$childrenC;
      return data.sort(sorterFn).map(function (item) {
        return item[childrenColumnName] ? _extends(_extends({}, item), _defineProperty({}, childrenColumnName, _this5.recursiveSort(item[childrenColumnName], sorterFn))) : item;
      });
    }
  }, {
    key: "renderPagination",
    value: function renderPagination(prefixCls, paginationPosition) {
      // 强制不需要分页
      if (!this.hasPagination()) {
        return null;
      }

      var size = 'default';
      var pagination = this.state.pagination;

      if (pagination.size) {
        size = pagination.size;
      } else if (this.props.size === 'middle' || this.props.size === 'small') {
        size = 'small';
      }

      var position = pagination.position || 'bottom';
      var total = pagination.total || this.getLocalData().length;
      return total > 0 && (position === paginationPosition || position === 'both') ? /*#__PURE__*/React.createElement(Pagination, _extends({
        key: "pagination-".concat(paginationPosition)
      }, pagination, {
        className: classNames(pagination.className, "".concat(prefixCls, "-pagination")),
        onChange: this.handlePageChange,
        total: total,
        size: size,
        current: this.getMaxCurrent(total),
        onShowSizeChange: this.handleShowSizeChange
      })) : null;
    }
  }, {
    key: "renderRowSelection",
    value: function renderRowSelection(_ref6) {
      var _this6 = this;

      var prefixCls = _ref6.prefixCls,
          locale = _ref6.locale,
          getPopupContainer = _ref6.getPopupContainer;
      var rowSelection = this.props.rowSelection;
      var columns = this.state.columns.concat();

      if (rowSelection) {
        var data = this.getFlatCurrentPageData().filter(function (item, index) {
          if (rowSelection.getCheckboxProps) {
            return !_this6.getCheckboxPropsByItem(item, index).disabled;
          }

          return true;
        });
        var selectionColumnClass = classNames("".concat(prefixCls, "-selection-column"), _defineProperty({}, "".concat(prefixCls, "-selection-column-custom"), rowSelection.selections));

        var selectionColumn = _defineProperty({
          key: 'selection-column',
          render: this.renderSelectionBox(rowSelection.type),
          className: selectionColumnClass,
          fixed: rowSelection.fixed,
          width: rowSelection.columnWidth,
          title: rowSelection.columnTitle
        }, esExports.INTERNAL_COL_DEFINE, {
          className: "".concat(prefixCls, "-selection-col")
        });

        if (rowSelection.type !== 'radio') {
          var checkboxAllDisabled = data.every(function (item, index) {
            return _this6.getCheckboxPropsByItem(item, index).disabled;
          });
          selectionColumn.title = selectionColumn.title || /*#__PURE__*/React.createElement(SelectionCheckboxAll, {
            store: this.props.store,
            locale: locale,
            data: data,
            getCheckboxPropsByItem: this.getCheckboxPropsByItem,
            getRecordKey: this.getRecordKey,
            disabled: checkboxAllDisabled,
            prefixCls: prefixCls,
            onSelect: this.handleSelectRow,
            selections: rowSelection.selections,
            hideDefaultSelections: rowSelection.hideDefaultSelections,
            getPopupContainer: this.generatePopupContainerFunc(getPopupContainer)
          });
        }

        if ('fixed' in rowSelection) {
          selectionColumn.fixed = rowSelection.fixed;
        } else if (columns.some(function (column) {
          return column.fixed === 'left' || column.fixed === true;
        })) {
          selectionColumn.fixed = 'left';
        }

        if (columns[0] && columns[0].key === 'selection-column') {
          columns[0] = selectionColumn;
        } else {
          columns.unshift(selectionColumn);
        }
      }

      return columns;
    }
  }, {
    key: "renderColumnsDropdown",
    value: function renderColumnsDropdown(_ref7) {
      var _this7 = this;

      var prefixCls = _ref7.prefixCls,
          dropdownPrefixCls = _ref7.dropdownPrefixCls,
          columns = _ref7.columns,
          locale = _ref7.locale,
          getPopupContainer = _ref7.getPopupContainer;
      var _this$state3 = this.state,
          sortOrder = _this$state3.sortOrder,
          filters = _this$state3.filters;
      return treeMap(columns, function (column, i) {
        var _classNames4;

        var key = getColumnKey(column, i);
        var filterDropdown;
        var sortButton;
        var onHeaderCell = column.onHeaderCell;

        var isSortColumn = _this7.isSortColumn(column);

        if (column.filters && column.filters.length > 0 || column.filterDropdown) {
          var colFilters = key in filters ? filters[key] : [];
          filterDropdown = /*#__PURE__*/React.createElement(FilterMenu, {
            locale: locale,
            column: column,
            selectedKeys: colFilters,
            confirmFilter: _this7.handleFilter,
            prefixCls: "".concat(prefixCls, "-filter"),
            dropdownPrefixCls: dropdownPrefixCls || 'ant-dropdown',
            getPopupContainer: _this7.generatePopupContainerFunc(getPopupContainer),
            key: "filter-dropdown"
          });
        }

        if (column.sorter) {
          var sortDirections = column.sortDirections || _this7.props.sortDirections;
          var isAscend = isSortColumn && sortOrder === 'ascend';
          var isDescend = isSortColumn && sortOrder === 'descend';
          var ascend = sortDirections.indexOf('ascend') !== -1 && /*#__PURE__*/React.createElement(Icon, {
            className: "".concat(prefixCls, "-column-sorter-up ").concat(isAscend ? 'on' : 'off'),
            type: "caret-up",
            theme: "filled"
          });
          var descend = sortDirections.indexOf('descend') !== -1 && /*#__PURE__*/React.createElement(Icon, {
            className: "".concat(prefixCls, "-column-sorter-down ").concat(isDescend ? 'on' : 'off'),
            type: "caret-down",
            theme: "filled"
          });
          sortButton = /*#__PURE__*/React.createElement("div", {
            title: locale.sortTitle,
            className: classNames("".concat(prefixCls, "-column-sorter-inner"), ascend && descend && "".concat(prefixCls, "-column-sorter-inner-full")),
            key: "sorter"
          }, ascend, descend);

          onHeaderCell = function onHeaderCell(col) {
            var colProps = {}; // Get original first

            if (column.onHeaderCell) {
              colProps = _extends({}, column.onHeaderCell(col));
            } // Add sorter logic


            var onHeaderCellClick = colProps.onClick;

            colProps.onClick = function () {
              _this7.toggleSortOrder(column);

              if (onHeaderCellClick) {
                onHeaderCellClick.apply(void 0, arguments);
              }
            };

            return colProps;
          };
        }

        return _extends(_extends({}, column), {
          className: classNames(column.className, (_classNames4 = {}, _defineProperty(_classNames4, "".concat(prefixCls, "-column-has-actions"), sortButton || filterDropdown), _defineProperty(_classNames4, "".concat(prefixCls, "-column-has-filters"), filterDropdown), _defineProperty(_classNames4, "".concat(prefixCls, "-column-has-sorters"), sortButton), _defineProperty(_classNames4, "".concat(prefixCls, "-column-sort"), isSortColumn && sortOrder), _classNames4)),
          title: [/*#__PURE__*/React.createElement("span", {
            key: "title",
            className: "".concat(prefixCls, "-header-column")
          }, /*#__PURE__*/React.createElement("div", {
            className: sortButton ? "".concat(prefixCls, "-column-sorters") : undefined
          }, /*#__PURE__*/React.createElement("span", {
            className: "".concat(prefixCls, "-column-title")
          }, _this7.renderColumnTitle(column.title)), /*#__PURE__*/React.createElement("span", {
            className: "".concat(prefixCls, "-column-sorter")
          }, sortButton))), filterDropdown],
          onHeaderCell: onHeaderCell
        });
      });
    }
  }, {
    key: "renderColumnTitle",
    value: function renderColumnTitle(title) {
      var _this$state4 = this.state,
          filters = _this$state4.filters,
          sortOrder = _this$state4.sortOrder,
          sortColumn = _this$state4.sortColumn; // https://github.com/ant-design/ant-design/issues/11246#issuecomment-405009167

      if (title instanceof Function) {
        return title({
          filters: filters,
          sortOrder: sortOrder,
          sortColumn: sortColumn
        });
      }

      return title;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderComponent);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var prevProps = prevState.prevProps;
      var columns = nextProps.columns || normalizeColumns(nextProps.children);

      var nextState = _extends(_extends({}, prevState), {
        prevProps: nextProps,
        columns: columns
      });

      if ('pagination' in nextProps || 'pagination' in prevProps) {
        var newPagination = _extends(_extends(_extends({}, defaultPagination), prevState.pagination), nextProps.pagination);

        newPagination.current = newPagination.current || 1;
        newPagination.pageSize = newPagination.pageSize || 10;
        nextState = _extends(_extends({}, nextState), {
          pagination: nextProps.pagination !== false ? newPagination : emptyObject
        });
      }

      if (nextProps.rowSelection && 'selectedRowKeys' in nextProps.rowSelection) {
        nextProps.store.setState({
          selectedRowKeys: nextProps.rowSelection.selectedRowKeys || []
        });
      } else if (prevProps.rowSelection && !nextProps.rowSelection) {
        nextProps.store.setState({
          selectedRowKeys: []
        });
      }

      if ('dataSource' in nextProps && nextProps.dataSource !== prevProps.dataSource) {
        nextProps.store.setState({
          selectionDirty: false
        });
      } // https://github.com/ant-design/ant-design/issues/10133


      nextProps.setCheckboxPropsCache({}); // Update filters

      var filteredValueColumns = getFilteredValueColumns(nextState, nextState.columns);

      if (filteredValueColumns.length > 0) {
        var filtersFromColumns = getFiltersFromColumns(nextState, nextState.columns);

        var newFilters = _extends({}, nextState.filters);

        Object.keys(filtersFromColumns).forEach(function (key) {
          newFilters[key] = filtersFromColumns[key];
        });

        if (isFiltersChanged(nextState, newFilters)) {
          nextState = _extends(_extends({}, nextState), {
            filters: newFilters
          });
        }
      }

      if (!isTheSameComponents(nextProps.components, prevProps.components)) {
        var components = createComponents(nextProps.components);
        nextState = _extends(_extends({}, nextState), {
          components: components
        });
      }

      return nextState;
    }
  }]);

  return Table;
}(React.Component);

Table.propTypes = {
  dataSource: propTypesExports.array,
  columns: propTypesExports.array,
  prefixCls: propTypesExports.string,
  useFixedHeader: propTypesExports.bool,
  rowSelection: propTypesExports.object,
  className: propTypesExports.string,
  size: propTypesExports.string,
  loading: propTypesExports.oneOfType([propTypesExports.bool, propTypesExports.object]),
  bordered: propTypesExports.bool,
  onChange: propTypesExports.func,
  locale: propTypesExports.object,
  dropdownPrefixCls: propTypesExports.string,
  sortDirections: propTypesExports.array,
  getPopupContainer: propTypesExports.func
};
Table.defaultProps = {
  dataSource: [],
  useFixedHeader: false,
  className: '',
  size: 'default',
  loading: false,
  bordered: false,
  indentSize: 20,
  locale: {},
  rowKey: 'key',
  showHeader: true,
  sortDirections: ['ascend', 'descend'],
  childrenColumnName: 'children'
};
polyfill(Table);

var StoreTable = /*#__PURE__*/function (_React$Component2) {
  _inherits(StoreTable, _React$Component2);

  var _super2 = _createSuper(StoreTable);

  function StoreTable(props) {
    var _this8;

    _classCallCheck(this, StoreTable);

    _this8 = _super2.call(this, props);

    _this8.setCheckboxPropsCache = function (cache) {
      return _this8.CheckboxPropsCache = cache;
    };

    _this8.CheckboxPropsCache = {};
    _this8.store = createStore({
      selectedRowKeys: getRowSelection(props).selectedRowKeys || [],
      selectionDirty: false
    });
    return _this8;
  }

  _createClass(StoreTable, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(Table, _extends({}, this.props, {
        store: this.store,
        checkboxPropsCache: this.CheckboxPropsCache,
        setCheckboxPropsCache: this.setCheckboxPropsCache
      }));
    }
  }]);

  return StoreTable;
}(React.Component);

StoreTable.displayName = 'withStore(Table)';
StoreTable.Column = Column;
StoreTable.ColumnGroup = ColumnGroup;

export { StoreTable as default };
