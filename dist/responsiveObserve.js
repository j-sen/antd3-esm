/**
 * Delegate to handle a media query being matched and unmatched.
 *
 * @param {object} options
 * @param {function} options.match callback for when the media query is matched
 * @param {function} [options.unmatch] callback for when the media query is unmatched
 * @param {function} [options.setup] one-time callback triggered the first time a query is matched
 * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
 * @constructor
 */

var QueryHandler_1;
var hasRequiredQueryHandler;

function requireQueryHandler () {
	if (hasRequiredQueryHandler) return QueryHandler_1;
	hasRequiredQueryHandler = 1;
	function QueryHandler(options) {
	    this.options = options;
	    !options.deferSetup && this.setup();
	}

	QueryHandler.prototype = {

	    constructor : QueryHandler,

	    /**
	     * coordinates setup of the handler
	     *
	     * @function
	     */
	    setup : function() {
	        if(this.options.setup) {
	            this.options.setup();
	        }
	        this.initialised = true;
	    },

	    /**
	     * coordinates setup and triggering of the handler
	     *
	     * @function
	     */
	    on : function() {
	        !this.initialised && this.setup();
	        this.options.match && this.options.match();
	    },

	    /**
	     * coordinates the unmatch event for the handler
	     *
	     * @function
	     */
	    off : function() {
	        this.options.unmatch && this.options.unmatch();
	    },

	    /**
	     * called when a handler is to be destroyed.
	     * delegates to the destroy or unmatch callbacks, depending on availability.
	     *
	     * @function
	     */
	    destroy : function() {
	        this.options.destroy ? this.options.destroy() : this.off();
	    },

	    /**
	     * determines equality by reference.
	     * if object is supplied compare options, if function, compare match callback
	     *
	     * @function
	     * @param {object || function} [target] the target for comparison
	     */
	    equals : function(target) {
	        return this.options === target || this.options.match === target;
	    }

	};

	QueryHandler_1 = QueryHandler;
	return QueryHandler_1;
}

/**
 * Helper function for iterating over a collection
 *
 * @param collection
 * @param fn
 */

var Util;
var hasRequiredUtil;

function requireUtil () {
	if (hasRequiredUtil) return Util;
	hasRequiredUtil = 1;
	function each(collection, fn) {
	    var i      = 0,
	        length = collection.length,
	        cont;

	    for(i; i < length; i++) {
	        cont = fn(collection[i], i);
	        if(cont === false) {
	            break; //allow early exit
	        }
	    }
	}

	/**
	 * Helper function for determining whether target object is an array
	 *
	 * @param target the object under test
	 * @return {Boolean} true if array, false otherwise
	 */
	function isArray(target) {
	    return Object.prototype.toString.apply(target) === '[object Array]';
	}

	/**
	 * Helper function for determining whether target object is a function
	 *
	 * @param target the object under test
	 * @return {Boolean} true if function, false otherwise
	 */
	function isFunction(target) {
	    return typeof target === 'function';
	}

	Util = {
	    isFunction : isFunction,
	    isArray : isArray,
	    each : each
	};
	return Util;
}

var MediaQuery_1;
var hasRequiredMediaQuery;

function requireMediaQuery () {
	if (hasRequiredMediaQuery) return MediaQuery_1;
	hasRequiredMediaQuery = 1;
	var QueryHandler = requireQueryHandler();
	var each = requireUtil().each;

	/**
	 * Represents a single media query, manages it's state and registered handlers for this query
	 *
	 * @constructor
	 * @param {string} query the media query string
	 * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
	 */
	function MediaQuery(query, isUnconditional) {
	    this.query = query;
	    this.isUnconditional = isUnconditional;
	    this.handlers = [];
	    this.mql = window.matchMedia(query);

	    var self = this;
	    this.listener = function(mql) {
	        // Chrome passes an MediaQueryListEvent object, while other browsers pass MediaQueryList directly
	        self.mql = mql.currentTarget || mql;
	        self.assess();
	    };
	    this.mql.addListener(this.listener);
	}

	MediaQuery.prototype = {

	    constuctor : MediaQuery,

	    /**
	     * add a handler for this query, triggering if already active
	     *
	     * @param {object} handler
	     * @param {function} handler.match callback for when query is activated
	     * @param {function} [handler.unmatch] callback for when query is deactivated
	     * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
	     * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
	     */
	    addHandler : function(handler) {
	        var qh = new QueryHandler(handler);
	        this.handlers.push(qh);

	        this.matches() && qh.on();
	    },

	    /**
	     * removes the given handler from the collection, and calls it's destroy methods
	     *
	     * @param {object || function} handler the handler to remove
	     */
	    removeHandler : function(handler) {
	        var handlers = this.handlers;
	        each(handlers, function(h, i) {
	            if(h.equals(handler)) {
	                h.destroy();
	                return !handlers.splice(i,1); //remove from array and exit each early
	            }
	        });
	    },

	    /**
	     * Determine whether the media query should be considered a match
	     *
	     * @return {Boolean} true if media query can be considered a match, false otherwise
	     */
	    matches : function() {
	        return this.mql.matches || this.isUnconditional;
	    },

	    /**
	     * Clears all handlers and unbinds events
	     */
	    clear : function() {
	        each(this.handlers, function(handler) {
	            handler.destroy();
	        });
	        this.mql.removeListener(this.listener);
	        this.handlers.length = 0; //clear array
	    },

	    /*
	        * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
	        */
	    assess : function() {
	        var action = this.matches() ? 'on' : 'off';

	        each(this.handlers, function(handler) {
	            handler[action]();
	        });
	    }
	};

	MediaQuery_1 = MediaQuery;
	return MediaQuery_1;
}

var MediaQueryDispatch_1;
var hasRequiredMediaQueryDispatch;

function requireMediaQueryDispatch () {
	if (hasRequiredMediaQueryDispatch) return MediaQueryDispatch_1;
	hasRequiredMediaQueryDispatch = 1;
	var MediaQuery = requireMediaQuery();
	var Util = requireUtil();
	var each = Util.each;
	var isFunction = Util.isFunction;
	var isArray = Util.isArray;

	/**
	 * Allows for registration of query handlers.
	 * Manages the query handler's state and is responsible for wiring up browser events
	 *
	 * @constructor
	 */
	function MediaQueryDispatch () {
	    if(!window.matchMedia) {
	        throw new Error('matchMedia not present, legacy browsers require a polyfill');
	    }

	    this.queries = {};
	    this.browserIsIncapable = !window.matchMedia('only all').matches;
	}

	MediaQueryDispatch.prototype = {

	    constructor : MediaQueryDispatch,

	    /**
	     * Registers a handler for the given media query
	     *
	     * @param {string} q the media query
	     * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
	     * @param {function} options.match fired when query matched
	     * @param {function} [options.unmatch] fired when a query is no longer matched
	     * @param {function} [options.setup] fired when handler first triggered
	     * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
	     * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
	     */
	    register : function(q, options, shouldDegrade) {
	        var queries         = this.queries,
	            isUnconditional = shouldDegrade && this.browserIsIncapable;

	        if(!queries[q]) {
	            queries[q] = new MediaQuery(q, isUnconditional);
	        }

	        //normalise to object in an array
	        if(isFunction(options)) {
	            options = { match : options };
	        }
	        if(!isArray(options)) {
	            options = [options];
	        }
	        each(options, function(handler) {
	            if (isFunction(handler)) {
	                handler = { match : handler };
	            }
	            queries[q].addHandler(handler);
	        });

	        return this;
	    },

	    /**
	     * unregisters a query and all it's handlers, or a specific handler for a query
	     *
	     * @param {string} q the media query to target
	     * @param {object || function} [handler] specific handler to unregister
	     */
	    unregister : function(q, handler) {
	        var query = this.queries[q];

	        if(query) {
	            if(handler) {
	                query.removeHandler(handler);
	            }
	            else {
	                query.clear();
	                delete this.queries[q];
	            }
	        }

	        return this;
	    }
	};

	MediaQueryDispatch_1 = MediaQueryDispatch;
	return MediaQueryDispatch_1;
}

var src;
var hasRequiredSrc;

function requireSrc () {
	if (hasRequiredSrc) return src;
	hasRequiredSrc = 1;
	var MediaQueryDispatch = requireMediaQueryDispatch();
	src = new MediaQueryDispatch();
	return src;
}

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82
var enquire; // TODO: Will be removed in antd 4.0 because we will no longer support ie9

if (typeof window !== 'undefined') {
  var matchMediaPolyfill = function matchMediaPolyfill(mediaQuery) {
    return {
      media: mediaQuery,
      matches: false,
      addListener: function addListener() {},
      removeListener: function removeListener() {}
    };
  }; // ref: https://github.com/ant-design/ant-design/issues/18774


  if (!window.matchMedia) window.matchMedia = matchMediaPolyfill; // eslint-disable-next-line global-require

  enquire = requireSrc();
}

var responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
var responsiveMap = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)'
};
var subscribers = [];
var subUid = -1;
var screens = {};
var responsiveObserve = {
  dispatch: function dispatch(pointMap) {
    screens = pointMap;

    if (subscribers.length < 1) {
      return false;
    }

    subscribers.forEach(function (item) {
      item.func(screens);
    });
    return true;
  },
  subscribe: function subscribe(func) {
    if (subscribers.length === 0) {
      this.register();
    }

    var token = (++subUid).toString();
    subscribers.push({
      token: token,
      func: func
    });
    func(screens);
    return token;
  },
  unsubscribe: function unsubscribe(token) {
    subscribers = subscribers.filter(function (item) {
      return item.token !== token;
    });

    if (subscribers.length === 0) {
      this.unregister();
    }
  },
  unregister: function unregister() {
    Object.keys(responsiveMap).map(function (screen) {
      return enquire.unregister(responsiveMap[screen]);
    });
  },
  register: function register() {
    var _this = this;

    Object.keys(responsiveMap).map(function (screen) {
      return enquire.register(responsiveMap[screen], {
        match: function match() {
          var pointMap = _extends(_extends({}, screens), _defineProperty({}, screen, true));

          _this.dispatch(pointMap);
        },
        unmatch: function unmatch() {
          var pointMap = _extends(_extends({}, screens), _defineProperty({}, screen, false));

          _this.dispatch(pointMap);
        },
        // Keep a empty destory to avoid triggering unmatch when unregister
        destroy: function destroy() {}
      });
    });
  }
};

export { responsiveArray as a, responsiveObserve as r };
