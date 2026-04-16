import { f as requireIsFunction, a as requireIsLength, r as requireIsArguments, b as require_isIndex } from './isLength.js';
import { r as requireIsArray } from './_arrayMap.js';
import { f as require_root, g as require_baseGetTag, i as requireIsObjectLike, j as require_freeGlobal } from './tree.js';

var isArrayLike_1;
var hasRequiredIsArrayLike;

function requireIsArrayLike () {
	if (hasRequiredIsArrayLike) return isArrayLike_1;
	hasRequiredIsArrayLike = 1;
	var isFunction = requireIsFunction(),
	    isLength = requireIsLength();

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	isArrayLike_1 = isArrayLike;
	return isArrayLike_1;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */

var _baseTimes;
var hasRequired_baseTimes;

function require_baseTimes () {
	if (hasRequired_baseTimes) return _baseTimes;
	hasRequired_baseTimes = 1;
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	_baseTimes = baseTimes;
	return _baseTimes;
}

var isBuffer = {exports: {}};

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */

var stubFalse_1;
var hasRequiredStubFalse;

function requireStubFalse () {
	if (hasRequiredStubFalse) return stubFalse_1;
	hasRequiredStubFalse = 1;
	function stubFalse() {
	  return false;
	}

	stubFalse_1 = stubFalse;
	return stubFalse_1;
}

var hasRequiredIsBuffer;

function requireIsBuffer () {
	if (hasRequiredIsBuffer) return isBuffer.exports;
	hasRequiredIsBuffer = 1;
	(function (module, exports$1) {
		var root = require_root(),
		    stubFalse = requireStubFalse();

		/** Detect free variable `exports`. */
		var freeExports = exports$1 && !exports$1.nodeType && exports$1;

		/** Detect free variable `module`. */
		var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

		/** Detect the popular CommonJS extension `module.exports`. */
		var moduleExports = freeModule && freeModule.exports === freeExports;

		/** Built-in value references. */
		var Buffer = moduleExports ? root.Buffer : undefined;

		/* Built-in method references for those with the same name as other `lodash` methods. */
		var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

		/**
		 * Checks if `value` is a buffer.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.3.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
		 * @example
		 *
		 * _.isBuffer(new Buffer(2));
		 * // => true
		 *
		 * _.isBuffer(new Uint8Array(2));
		 * // => false
		 */
		var isBuffer = nativeIsBuffer || stubFalse;

		module.exports = isBuffer; 
	} (isBuffer, isBuffer.exports));
	return isBuffer.exports;
}

var _baseIsTypedArray;
var hasRequired_baseIsTypedArray;

function require_baseIsTypedArray () {
	if (hasRequired_baseIsTypedArray) return _baseIsTypedArray;
	hasRequired_baseIsTypedArray = 1;
	var baseGetTag = require_baseGetTag(),
	    isLength = requireIsLength(),
	    isObjectLike = requireIsObjectLike();

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	_baseIsTypedArray = baseIsTypedArray;
	return _baseIsTypedArray;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */

var _baseUnary;
var hasRequired_baseUnary;

function require_baseUnary () {
	if (hasRequired_baseUnary) return _baseUnary;
	hasRequired_baseUnary = 1;
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	_baseUnary = baseUnary;
	return _baseUnary;
}

var _nodeUtil = {exports: {}};

var hasRequired_nodeUtil;

function require_nodeUtil () {
	if (hasRequired_nodeUtil) return _nodeUtil.exports;
	hasRequired_nodeUtil = 1;
	(function (module, exports$1) {
		var freeGlobal = require_freeGlobal();

		/** Detect free variable `exports`. */
		var freeExports = exports$1 && !exports$1.nodeType && exports$1;

		/** Detect free variable `module`. */
		var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

		/** Detect the popular CommonJS extension `module.exports`. */
		var moduleExports = freeModule && freeModule.exports === freeExports;

		/** Detect free variable `process` from Node.js. */
		var freeProcess = moduleExports && freeGlobal.process;

		/** Used to access faster Node.js helpers. */
		var nodeUtil = (function() {
		  try {
		    // Use `util.types` for Node.js 10+.
		    var types = freeModule && freeModule.require && freeModule.require('util').types;

		    if (types) {
		      return types;
		    }

		    // Legacy `process.binding('util')` for Node.js < 10.
		    return freeProcess && freeProcess.binding && freeProcess.binding('util');
		  } catch (e) {}
		}());

		module.exports = nodeUtil; 
	} (_nodeUtil, _nodeUtil.exports));
	return _nodeUtil.exports;
}

var isTypedArray_1;
var hasRequiredIsTypedArray;

function requireIsTypedArray () {
	if (hasRequiredIsTypedArray) return isTypedArray_1;
	hasRequiredIsTypedArray = 1;
	var baseIsTypedArray = require_baseIsTypedArray(),
	    baseUnary = require_baseUnary(),
	    nodeUtil = require_nodeUtil();

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	isTypedArray_1 = isTypedArray;
	return isTypedArray_1;
}

var _arrayLikeKeys;
var hasRequired_arrayLikeKeys;

function require_arrayLikeKeys () {
	if (hasRequired_arrayLikeKeys) return _arrayLikeKeys;
	hasRequired_arrayLikeKeys = 1;
	var baseTimes = require_baseTimes(),
	    isArguments = requireIsArguments(),
	    isArray = requireIsArray(),
	    isBuffer = requireIsBuffer(),
	    isIndex = require_isIndex(),
	    isTypedArray = requireIsTypedArray();

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	_arrayLikeKeys = arrayLikeKeys;
	return _arrayLikeKeys;
}

/** Used for built-in method references. */

var _isPrototype;
var hasRequired_isPrototype;

function require_isPrototype () {
	if (hasRequired_isPrototype) return _isPrototype;
	hasRequired_isPrototype = 1;
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	_isPrototype = isPrototype;
	return _isPrototype;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */

var _overArg;
var hasRequired_overArg;

function require_overArg () {
	if (hasRequired_overArg) return _overArg;
	hasRequired_overArg = 1;
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	_overArg = overArg;
	return _overArg;
}

export { require_isPrototype as a, require_arrayLikeKeys as b, requireIsArrayLike as c, requireIsBuffer as d, requireIsTypedArray as e, require_overArg as r };
