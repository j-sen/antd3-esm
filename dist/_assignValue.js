import { c as require_getNative } from './isLength.js';
import { b as requireEq } from './get.js';

var _defineProperty;
var hasRequired_defineProperty;

function require_defineProperty () {
	if (hasRequired_defineProperty) return _defineProperty;
	hasRequired_defineProperty = 1;
	var getNative = require_getNative();

	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	_defineProperty = defineProperty;
	return _defineProperty;
}

var _baseAssignValue;
var hasRequired_baseAssignValue;

function require_baseAssignValue () {
	if (hasRequired_baseAssignValue) return _baseAssignValue;
	hasRequired_baseAssignValue = 1;
	var defineProperty = require_defineProperty();

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	_baseAssignValue = baseAssignValue;
	return _baseAssignValue;
}

var _assignValue;
var hasRequired_assignValue;

function require_assignValue () {
	if (hasRequired_assignValue) return _assignValue;
	hasRequired_assignValue = 1;
	var baseAssignValue = require_baseAssignValue(),
	    eq = requireEq();

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	_assignValue = assignValue;
	return _assignValue;
}

export { require_baseAssignValue as a, require_defineProperty as b, require_assignValue as r };
