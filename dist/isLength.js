import { g as require_baseGetTag, h as requireIsObject, f as require_root, i as requireIsObjectLike } from './tree.js';

var isFunction_1;
var hasRequiredIsFunction;

function requireIsFunction () {
	if (hasRequiredIsFunction) return isFunction_1;
	hasRequiredIsFunction = 1;
	var baseGetTag = require_baseGetTag(),
	    isObject = requireIsObject();

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	isFunction_1 = isFunction;
	return isFunction_1;
}

var _coreJsData;
var hasRequired_coreJsData;

function require_coreJsData () {
	if (hasRequired_coreJsData) return _coreJsData;
	hasRequired_coreJsData = 1;
	var root = require_root();

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	_coreJsData = coreJsData;
	return _coreJsData;
}

var _isMasked;
var hasRequired_isMasked;

function require_isMasked () {
	if (hasRequired_isMasked) return _isMasked;
	hasRequired_isMasked = 1;
	var coreJsData = require_coreJsData();

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	_isMasked = isMasked;
	return _isMasked;
}

/** Used for built-in method references. */

var _toSource;
var hasRequired_toSource;

function require_toSource () {
	if (hasRequired_toSource) return _toSource;
	hasRequired_toSource = 1;
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	_toSource = toSource;
	return _toSource;
}

var _baseIsNative;
var hasRequired_baseIsNative;

function require_baseIsNative () {
	if (hasRequired_baseIsNative) return _baseIsNative;
	hasRequired_baseIsNative = 1;
	var isFunction = requireIsFunction(),
	    isMasked = require_isMasked(),
	    isObject = requireIsObject(),
	    toSource = require_toSource();

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	_baseIsNative = baseIsNative;
	return _baseIsNative;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */

var _getValue;
var hasRequired_getValue;

function require_getValue () {
	if (hasRequired_getValue) return _getValue;
	hasRequired_getValue = 1;
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	_getValue = getValue;
	return _getValue;
}

var _getNative;
var hasRequired_getNative;

function require_getNative () {
	if (hasRequired_getNative) return _getNative;
	hasRequired_getNative = 1;
	var baseIsNative = require_baseIsNative(),
	    getValue = require_getValue();

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	_getNative = getNative;
	return _getNative;
}

var _Map;
var hasRequired_Map;

function require_Map () {
	if (hasRequired_Map) return _Map;
	hasRequired_Map = 1;
	var getNative = require_getNative(),
	    root = require_root();

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	_Map = Map;
	return _Map;
}

var _baseIsArguments;
var hasRequired_baseIsArguments;

function require_baseIsArguments () {
	if (hasRequired_baseIsArguments) return _baseIsArguments;
	hasRequired_baseIsArguments = 1;
	var baseGetTag = require_baseGetTag(),
	    isObjectLike = requireIsObjectLike();

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}

	_baseIsArguments = baseIsArguments;
	return _baseIsArguments;
}

var isArguments_1;
var hasRequiredIsArguments;

function requireIsArguments () {
	if (hasRequiredIsArguments) return isArguments_1;
	hasRequiredIsArguments = 1;
	var baseIsArguments = require_baseIsArguments(),
	    isObjectLike = requireIsObjectLike();

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	isArguments_1 = isArguments;
	return isArguments_1;
}

/** Used as references for various `Number` constants. */

var _isIndex;
var hasRequired_isIndex;

function require_isIndex () {
	if (hasRequired_isIndex) return _isIndex;
	hasRequired_isIndex = 1;
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER : length;

	  return !!length &&
	    (type == 'number' ||
	      (type != 'symbol' && reIsUint.test(value))) &&
	        (value > -1 && value % 1 == 0 && value < length);
	}

	_isIndex = isIndex;
	return _isIndex;
}

/** Used as references for various `Number` constants. */

var isLength_1;
var hasRequiredIsLength;

function requireIsLength () {
	if (hasRequiredIsLength) return isLength_1;
	hasRequiredIsLength = 1;
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	isLength_1 = isLength;
	return isLength_1;
}

export { requireIsLength as a, require_isIndex as b, require_getNative as c, require_Map as d, require_toSource as e, requireIsFunction as f, requireIsArguments as r };
