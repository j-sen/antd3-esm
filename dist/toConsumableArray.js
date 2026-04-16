import { g as getDefaultExportFromCjs } from './config-provider.js';
import { g as require_anObject, h as require_wks, i as require_iterators, j as require_objectDp, k as require_propertyDesc, l as require_cof, m as require_core, n as require_export, o as require_toObject, p as require_ctx, q as require_toLength, s as requireEs6_string_iterator } from './icon.js';

var toConsumableArray = {};

var es6_array_from = {};

var _iterCall;
var hasRequired_iterCall;

function require_iterCall () {
	if (hasRequired_iterCall) return _iterCall;
	hasRequired_iterCall = 1;
	// call something on iterator step with safe closing on error
	var anObject = require_anObject();
	_iterCall = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};
	return _iterCall;
}

var _isArrayIter;
var hasRequired_isArrayIter;

function require_isArrayIter () {
	if (hasRequired_isArrayIter) return _isArrayIter;
	hasRequired_isArrayIter = 1;
	// check on default Array iterator
	var Iterators = require_iterators();
	var ITERATOR = require_wks()('iterator');
	var ArrayProto = Array.prototype;

	_isArrayIter = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};
	return _isArrayIter;
}

var _createProperty;
var hasRequired_createProperty;

function require_createProperty () {
	if (hasRequired_createProperty) return _createProperty;
	hasRequired_createProperty = 1;
	var $defineProperty = require_objectDp();
	var createDesc = require_propertyDesc();

	_createProperty = function (object, index, value) {
	  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};
	return _createProperty;
}

var _classof;
var hasRequired_classof;

function require_classof () {
	if (hasRequired_classof) return _classof;
	hasRequired_classof = 1;
	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = require_cof();
	var TAG = require_wks()('toStringTag');
	// ES3 wrong here
	var ARG = cof(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};

	_classof = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};
	return _classof;
}

var core_getIteratorMethod;
var hasRequiredCore_getIteratorMethod;

function requireCore_getIteratorMethod () {
	if (hasRequiredCore_getIteratorMethod) return core_getIteratorMethod;
	hasRequiredCore_getIteratorMethod = 1;
	var classof = require_classof();
	var ITERATOR = require_wks()('iterator');
	var Iterators = require_iterators();
	core_getIteratorMethod = require_core().getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};
	return core_getIteratorMethod;
}

var _iterDetect;
var hasRequired_iterDetect;

function require_iterDetect () {
	if (hasRequired_iterDetect) return _iterDetect;
	hasRequired_iterDetect = 1;
	var ITERATOR = require_wks()('iterator');
	var SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () { SAFE_CLOSING = true; };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(riter, function () { throw 2; });
	} catch (e) { /* empty */ }

	_iterDetect = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR]();
	    iter.next = function () { return { done: safe = true }; };
	    arr[ITERATOR] = function () { return iter; };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
	};
	return _iterDetect;
}

var hasRequiredEs6_array_from;

function requireEs6_array_from () {
	if (hasRequiredEs6_array_from) return es6_array_from;
	hasRequiredEs6_array_from = 1;
	var ctx = require_ctx();
	var $export = require_export();
	var toObject = require_toObject();
	var call = require_iterCall();
	var isArrayIter = require_isArrayIter();
	var toLength = require_toLength();
	var createProperty = require_createProperty();
	var getIterFn = requireCore_getIteratorMethod();

	$export($export.S + $export.F * !require_iterDetect()(function (iter) { Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	    var O = toObject(arrayLike);
	    var C = typeof this == 'function' ? this : Array;
	    var aLen = arguments.length;
	    var mapfn = aLen > 1 ? arguments[1] : undefined;
	    var mapping = mapfn !== undefined;
	    var index = 0;
	    var iterFn = getIterFn(O);
	    var length, result, step, iterator;
	    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});
	return es6_array_from;
}

var from$1;
var hasRequiredFrom$1;

function requireFrom$1 () {
	if (hasRequiredFrom$1) return from$1;
	hasRequiredFrom$1 = 1;
	requireEs6_string_iterator();
	requireEs6_array_from();
	from$1 = require_core().Array.from;
	return from$1;
}

var from;
var hasRequiredFrom;

function requireFrom () {
	if (hasRequiredFrom) return from;
	hasRequiredFrom = 1;
	from = { "default": requireFrom$1(), __esModule: true };
	return from;
}

var hasRequiredToConsumableArray;

function requireToConsumableArray () {
	if (hasRequiredToConsumableArray) return toConsumableArray;
	hasRequiredToConsumableArray = 1;

	toConsumableArray.__esModule = true;

	var _from = requireFrom();

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	toConsumableArray.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};
	return toConsumableArray;
}

var toConsumableArrayExports = requireToConsumableArray();
var _toConsumableArray = /*@__PURE__*/getDefaultExportFromCjs(toConsumableArrayExports);

export { _toConsumableArray as _ };
