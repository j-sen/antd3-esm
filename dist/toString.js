import { r as require_Symbol, a as requireIsSymbol } from './tree.js';
import { r as requireIsArray, a as require_arrayMap } from './_arrayMap.js';

var _baseToString;
var hasRequired_baseToString;

function require_baseToString () {
	if (hasRequired_baseToString) return _baseToString;
	hasRequired_baseToString = 1;
	var Symbol = require_Symbol(),
	    arrayMap = require_arrayMap(),
	    isArray = requireIsArray(),
	    isSymbol = requireIsSymbol();

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -Infinity) ? '-0' : result;
	}

	_baseToString = baseToString;
	return _baseToString;
}

var toString_1;
var hasRequiredToString;

function requireToString () {
	if (hasRequiredToString) return toString_1;
	hasRequiredToString = 1;
	var baseToString = require_baseToString();

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	toString_1 = toString;
	return toString_1;
}

export { requireToString as a, require_baseToString as r };
