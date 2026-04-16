import { r as require_castPath, a as require_toKey } from './get.js';
import { r as requireIsArguments, a as requireIsLength, b as require_isIndex } from './isLength.js';
import { r as requireIsArray } from './_arrayMap.js';

var _hasPath;
var hasRequired_hasPath;

function require_hasPath () {
	if (hasRequired_hasPath) return _hasPath;
	hasRequired_hasPath = 1;
	var castPath = require_castPath(),
	    isArguments = requireIsArguments(),
	    isArray = requireIsArray(),
	    isIndex = require_isIndex(),
	    isLength = requireIsLength(),
	    toKey = require_toKey();

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = castPath(path, object);

	  var index = -1,
	      length = path.length,
	      result = false;

	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object == null ? 0 : object.length;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isArguments(object));
	}

	_hasPath = hasPath;
	return _hasPath;
}

export { require_hasPath as r };
