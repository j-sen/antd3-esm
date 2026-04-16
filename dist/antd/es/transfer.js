import { n, g as getDefaultExportFromCjs, a as commonjsGlobal, b as requirePropTypes, c as classNames, C as ConfigConsumer, L as LocaleReceiver, i as defaultLocale, p as propTypesExports } from '../../config-provider.js';
import * as React from 'react';
import React__default from 'react';
import { o as requireShallowequal, A as Animate, p as polyfill } from '../../menu.js';
import * as ReactDOM from 'react-dom';
import ReactDOM__default, { findDOMNode } from 'react-dom';
import { I as Input, t as tuple, o as omit } from '../../input.js';
import { C as Checkbox } from '../../index10.js';
import { I as Icon } from '../../icon.js';
import '../../index12.js';
import { w as wrapperRaf } from '../../raf.js';
import { r as requireLodash_debounce } from '../../index13.js';
import { B as Button } from '../../index9.js';
import '../../Checkbox.js';
import '../../TextArea.js';
import '../../index3.js';
import '../../warning.js';
import '../../ResizeObserver.es.js';
import '../../wave.js';

var css = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n@keyframes antCheckboxEffect {\n  0% {\n    transform: scale(1);\n    opacity: 0.5;\n  }\n  100% {\n    transform: scale(1.6);\n    opacity: 0;\n  }\n}\n.ant-transfer-customize-list {\n  display: flex;\n}\n.ant-transfer-customize-list .ant-transfer-operation {\n  flex: none;\n  align-self: center;\n}\n.ant-transfer-customize-list .ant-transfer-list {\n  flex: auto;\n  width: auto;\n  height: auto;\n  min-height: 200px;\n}\n.ant-transfer-customize-list .ant-transfer-list-body-with-search {\n  padding-top: 0;\n}\n.ant-transfer-customize-list .ant-transfer-list-body-search-wrapper {\n  position: relative;\n  padding-bottom: 0;\n}\n.ant-transfer-customize-list .ant-transfer-list-body-customize-wrapper {\n  padding: 12px;\n}\n.ant-transfer-customize-list .ant-table-wrapper .ant-table-small {\n  border: 0;\n  border-radius: 0;\n}\n.ant-transfer-customize-list .ant-table-wrapper .ant-table-small > .ant-table-content > .ant-table-body > table > .ant-table-thead > tr > th {\n  background: #fafafa;\n}\n.ant-transfer-customize-list .ant-table-wrapper .ant-table-small > .ant-table-content .ant-table-row:last-child td {\n  border-bottom: 1px solid #e8e8e8;\n}\n.ant-transfer-customize-list .ant-table-wrapper .ant-table-small .ant-table-body {\n  margin: 0;\n}\n.ant-transfer-customize-list .ant-table-wrapper .ant-table-pagination.ant-pagination {\n  margin: 16px 0 4px;\n}\n.ant-transfer {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  position: relative;\n}\n.ant-transfer-disabled .ant-transfer-list {\n  background: #f5f5f5;\n}\n.ant-transfer-list {\n  position: relative;\n  display: inline-block;\n  width: 180px;\n  height: 200px;\n  padding-top: 40px;\n  vertical-align: middle;\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n}\n.ant-transfer-list-with-footer {\n  padding-bottom: 34px;\n}\n.ant-transfer-list-search {\n  padding: 0 24px 0 8px;\n}\n.ant-transfer-list-search-action {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  bottom: 12px;\n  width: 28px;\n  color: rgba(0, 0, 0, 0.25);\n  line-height: 32px;\n  text-align: center;\n}\n.ant-transfer-list-search-action .anticon {\n  color: rgba(0, 0, 0, 0.25);\n  transition: all 0.3s;\n}\n.ant-transfer-list-search-action .anticon:hover {\n  color: rgba(0, 0, 0, 0.45);\n}\nspan.ant-transfer-list-search-action {\n  pointer-events: none;\n}\n.ant-transfer-list-header {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 8px 12px 9px;\n  overflow: hidden;\n  color: rgba(0, 0, 0, 0.65);\n  background: #fff;\n  border-bottom: 1px solid #e8e8e8;\n  border-radius: 4px 4px 0 0;\n}\n.ant-transfer-list-header-title {\n  position: absolute;\n  right: 12px;\n}\n.ant-transfer-list-header .ant-checkbox-wrapper + span {\n  padding-left: 8px;\n}\n.ant-transfer-list-body {\n  position: relative;\n  height: 100%;\n  font-size: 14px;\n}\n.ant-transfer-list-body-search-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 12px;\n}\n.ant-transfer-list-body-with-search {\n  padding-top: 56px;\n}\n.ant-transfer-list-content {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: auto;\n  list-style: none;\n}\n.ant-transfer-list-content > .LazyLoad {\n  animation: transferHighlightIn 1s;\n}\n.ant-transfer-list-content-item {\n  min-height: 32px;\n  padding: 6px 12px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  transition: all 0.3s;\n}\n.ant-transfer-list-content-item > span {\n  padding-right: 0;\n}\n.ant-transfer-list-content-item-text {\n  padding-left: 8px;\n}\n.ant-transfer-list-content-item:not(.ant-transfer-list-content-item-disabled):hover {\n  background-color: #e6f7ff;\n  cursor: pointer;\n}\n.ant-transfer-list-content-item-disabled {\n  color: rgba(0, 0, 0, 0.25);\n  cursor: not-allowed;\n}\n.ant-transfer-list-body-not-found {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  padding-top: 0;\n  color: rgba(0, 0, 0, 0.25);\n  text-align: center;\n  transform: translateY(-50%);\n}\n.ant-transfer-list-body-with-search .ant-transfer-list-body-not-found {\n  margin-top: 16px;\n}\n.ant-transfer-list-footer {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  border-top: 1px solid #e8e8e8;\n  border-radius: 0 0 4px 4px;\n}\n.ant-transfer-operation {\n  display: inline-block;\n  margin: 0 8px;\n  overflow: hidden;\n  vertical-align: middle;\n}\n.ant-transfer-operation .ant-btn {\n  display: block;\n}\n.ant-transfer-operation .ant-btn:first-child {\n  margin-bottom: 4px;\n}\n.ant-transfer-operation .ant-btn .anticon {\n  font-size: 12px;\n}\n@keyframes transferHighlightIn {\n  0% {\n    background: #bae7ff;\n  }\n  100% {\n    background: transparent;\n  }\n}\n/*# sourceMappingURL=index.css.map */";
n(css,{"prepend":true});

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponentWithPureRenderMixin
 */

var PureRenderMixin$1;
var hasRequiredPureRenderMixin;

function requirePureRenderMixin () {
	if (hasRequiredPureRenderMixin) return PureRenderMixin$1;
	hasRequiredPureRenderMixin = 1;
	var shallowEqual = requireShallowequal();

	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}
	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this mixin for a
	 * considerable performance boost.
	 *
	 * Most React components have pure render functions.
	 *
	 * Example:
	 *
	 *   var ReactComponentWithPureRenderMixin =
	 *     require('ReactComponentWithPureRenderMixin');
	 *   React.createClass({
	 *     mixins: [ReactComponentWithPureRenderMixin],
	 *
	 *     render: function() {
	 *       return <div className={this.props.className}>foo</div>;
	 *     }
	 *   });
	 *
	 * Note: This only checks shallow equality for props and state. If these contain
	 * complex data structures this mixin may have false-negatives for deeper
	 * differences. Only mixin to components which have simple props and state, or
	 * use `forceUpdate()` when you know deep data structures have changed.
	 *
	 * See https://facebook.github.io/react/docs/pure-render-mixin.html
	 */


	var ReactComponentWithPureRenderMixin = {
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    return shallowCompare(this, nextProps, nextState);
	  }
	};
	PureRenderMixin$1 = ReactComponentWithPureRenderMixin;
	return PureRenderMixin$1;
}

var PureRenderMixinExports = requirePureRenderMixin();
var PureRenderMixin = /*@__PURE__*/getDefaultExportFromCjs(PureRenderMixinExports);

function _typeof$4(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$4 = function _typeof(obj) { return typeof obj; }; } else { _typeof$4 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$4(obj); }

function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$4(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$4(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$4(Constructor.prototype, protoProps); return Constructor; }

function _inherits$4(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$4(subClass, superClass); }

function _setPrototypeOf$4(o, p) { _setPrototypeOf$4 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$4(o, p); }

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf$4(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$4(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$4(this, result); }; }

function _possibleConstructorReturn$4(self, call) { if (call && (_typeof$4(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$4(self); }

function _assertThisInitialized$4(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$4(o) { _getPrototypeOf$4 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$4(o); }

var Search = /*#__PURE__*/function (_React$Component) {
  _inherits$4(Search, _React$Component);

  var _super = _createSuper$4(Search);

  function Search() {
    var _this;

    _classCallCheck$4(this, Search);

    _this = _super.apply(this, arguments);

    _this.handleChange = function (e) {
      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(e);
      }
    };

    _this.handleClear = function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          handleClear = _this$props.handleClear,
          disabled = _this$props.disabled;

      if (!disabled && handleClear) {
        handleClear(e);
      }
    };

    return _this;
  }

  _createClass$4(Search, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          placeholder = _this$props2.placeholder,
          value = _this$props2.value,
          prefixCls = _this$props2.prefixCls,
          disabled = _this$props2.disabled;
      var icon = value && value.length > 0 ? /*#__PURE__*/React.createElement("a", {
        href: "#",
        className: "".concat(prefixCls, "-action"),
        onClick: this.handleClear
      }, /*#__PURE__*/React.createElement(Icon, {
        type: "close-circle",
        theme: "filled"
      })) : /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-action")
      }, /*#__PURE__*/React.createElement(Icon, {
        type: "search"
      }));
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Input, {
        placeholder: placeholder,
        className: prefixCls,
        value: value,
        onChange: this.handleChange,
        disabled: disabled
      }), icon);
    }
  }]);

  return Search;
}(React.Component);
Search.defaultProps = {
  placeholder: ''
};

var LazyLoad = {};

var eventlistener$1 = {exports: {}};

var eventlistener = eventlistener$1.exports;

var hasRequiredEventlistener;

function requireEventlistener () {
	if (hasRequiredEventlistener) return eventlistener$1.exports;
	hasRequiredEventlistener = 1;
	(function (module, exports$1) {
		(function(root,factory){
		    {
		        module.exports = factory();
		    }
		}(eventlistener, function () {
			function wrap(standard, fallback) {
				return function (el, evtName, listener, useCapture) {
					if (el[standard]) {
						el[standard](evtName, listener, useCapture);
					} else if (el[fallback]) {
						el[fallback]('on' + evtName, listener);
					}
				}
			}

		    return {
				add: wrap('addEventListener', 'attachEvent'),
				remove: wrap('removeEventListener', 'detachEvent')
			};
		})); 
	} (eventlistener$1));
	return eventlistener$1.exports;
}

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

var lodash_throttle;
var hasRequiredLodash_throttle;

function requireLodash_throttle () {
	if (hasRequiredLodash_throttle) return lodash_throttle;
	hasRequiredLodash_throttle = 1;
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;

	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;

	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }

	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }

	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;

	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }

	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;

	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }

	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }

	  function trailingEdge(time) {
	    timerId = undefined;

	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }

	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }

	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }

	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);

	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;

	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}

	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed `func` invocations and a `flush` method to
	 * immediately invoke them. Provide `options` to indicate whether `func`
	 * should be invoked on the leading and/or trailing edge of the `wait`
	 * timeout. The `func` is invoked with the last arguments provided to the
	 * throttled function. Subsequent calls to the throttled function return the
	 * result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the throttled function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=true]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // Avoid excessively updating the position while scrolling.
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	 * jQuery(element).on('click', throttled);
	 *
	 * // Cancel the trailing throttled invocation.
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, {
	    'leading': leading,
	    'maxWait': wait,
	    'trailing': trailing
	  });
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	lodash_throttle = throttle;
	return lodash_throttle;
}

var parentScroll = {};

var hasRequiredParentScroll;

function requireParentScroll () {
	if (hasRequiredParentScroll) return parentScroll;
	hasRequiredParentScroll = 1;

	Object.defineProperty(parentScroll, "__esModule", {
	  value: true
	});
	var style = function style(element, prop) {
	  return typeof getComputedStyle !== 'undefined' ? getComputedStyle(element, null).getPropertyValue(prop) : element.style[prop];
	};

	var overflow = function overflow(element) {
	  return style(element, 'overflow') + style(element, 'overflow-y') + style(element, 'overflow-x');
	};

	var scrollParent = function scrollParent(element) {
	  if (!(element instanceof HTMLElement)) {
	    return window;
	  }

	  var parent = element;

	  while (parent) {
	    if (parent === document.body || parent === document.documentElement) {
	      break;
	    }

	    if (!parent.parentNode) {
	      break;
	    }

	    if (/(scroll|auto)/.test(overflow(parent))) {
	      return parent;
	    }

	    parent = parent.parentNode;
	  }

	  return window;
	};

	parentScroll.default = scrollParent;
	return parentScroll;
}

var inViewport = {};

var getElementPosition = {};

var hasRequiredGetElementPosition;

function requireGetElementPosition () {
	if (hasRequiredGetElementPosition) return getElementPosition;
	hasRequiredGetElementPosition = 1;

	Object.defineProperty(getElementPosition, "__esModule", {
	  value: true
	});
	getElementPosition.default = getElementPosition$1;
	/*
	* Finds element's position relative to the whole document,
	* rather than to the viewport as it is the case with .getBoundingClientRect().
	*/
	function getElementPosition$1(element) {
	  var rect = element.getBoundingClientRect();

	  return {
	    top: rect.top + window.pageYOffset,
	    left: rect.left + window.pageXOffset
	  };
	}
	return getElementPosition;
}

var hasRequiredInViewport;

function requireInViewport () {
	if (hasRequiredInViewport) return inViewport;
	hasRequiredInViewport = 1;

	Object.defineProperty(inViewport, "__esModule", {
	  value: true
	});
	inViewport.default = inViewport$1;

	var _getElementPosition = requireGetElementPosition();

	var _getElementPosition2 = _interopRequireDefault(_getElementPosition);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isHidden = function isHidden(element) {
	  return element.offsetParent === null;
	};

	function inViewport$1(element, container, customOffset) {
	  if (isHidden(element)) {
	    return false;
	  }

	  var top = void 0;
	  var bottom = void 0;
	  var left = void 0;
	  var right = void 0;

	  if (typeof container === 'undefined' || container === window) {
	    top = window.pageYOffset;
	    left = window.pageXOffset;
	    bottom = top + window.innerHeight;
	    right = left + window.innerWidth;
	  } else {
	    if (!inViewport$1(container, window, customOffset)) return false;

	    var containerPosition = (0, _getElementPosition2.default)(container);

	    top = containerPosition.top;
	    left = containerPosition.left;
	    bottom = top + container.offsetHeight;
	    right = left + container.offsetWidth;
	  }

	  var elementPosition = (0, _getElementPosition2.default)(element);

	  return top <= elementPosition.top + element.offsetHeight + customOffset.top && bottom >= elementPosition.top - customOffset.bottom && left <= elementPosition.left + element.offsetWidth + customOffset.left && right >= elementPosition.left - customOffset.right;
	}
	return inViewport;
}

var hasRequiredLazyLoad;

function requireLazyLoad () {
	if (hasRequiredLazyLoad) return LazyLoad;
	hasRequiredLazyLoad = 1;

	Object.defineProperty(LazyLoad, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = React__default;

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = /*@__PURE__*/ requirePropTypes();

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactDom = ReactDOM__default;

	var _eventlistener = requireEventlistener();

	var _lodash = requireLodash_debounce();

	var _lodash2 = _interopRequireDefault(_lodash);

	var _lodash3 = requireLodash_throttle();

	var _lodash4 = _interopRequireDefault(_lodash3);

	var _parentScroll = requireParentScroll();

	var _parentScroll2 = _interopRequireDefault(_parentScroll);

	var _inViewport = requireInViewport();

	var _inViewport2 = _interopRequireDefault(_inViewport);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LazyLoad$1 = function (_Component) {
	  _inherits(LazyLoad, _Component);

	  function LazyLoad(props) {
	    _classCallCheck(this, LazyLoad);

	    var _this = _possibleConstructorReturn(this, (LazyLoad.__proto__ || Object.getPrototypeOf(LazyLoad)).call(this, props));

	    _this.lazyLoadHandler = _this.lazyLoadHandler.bind(_this);

	    if (props.throttle > 0) {
	      if (props.debounce) {
	        _this.lazyLoadHandler = (0, _lodash2.default)(_this.lazyLoadHandler, props.throttle);
	      } else {
	        _this.lazyLoadHandler = (0, _lodash4.default)(_this.lazyLoadHandler, props.throttle);
	      }
	    }

	    _this.state = { visible: false };
	    return _this;
	  }

	  _createClass(LazyLoad, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._mounted = true;
	      var eventNode = this.getEventNode();

	      this.lazyLoadHandler();

	      if (this.lazyLoadHandler.flush) {
	        this.lazyLoadHandler.flush();
	      }

	      (0, _eventlistener.add)(window, 'resize', this.lazyLoadHandler);
	      (0, _eventlistener.add)(eventNode, 'scroll', this.lazyLoadHandler);

	      if (eventNode !== window) (0, _eventlistener.add)(window, 'scroll', this.lazyLoadHandler);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (!this.state.visible) {
	        this.lazyLoadHandler();
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(_nextProps, nextState) {
	      return nextState.visible;
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this._mounted = false;
	      if (this.lazyLoadHandler.cancel) {
	        this.lazyLoadHandler.cancel();
	      }

	      this.detachListeners();
	    }
	  }, {
	    key: 'getEventNode',
	    value: function getEventNode() {
	      return (0, _parentScroll2.default)((0, _reactDom.findDOMNode)(this));
	    }
	  }, {
	    key: 'getOffset',
	    value: function getOffset() {
	      var _props = this.props,
	          offset = _props.offset,
	          offsetVertical = _props.offsetVertical,
	          offsetHorizontal = _props.offsetHorizontal,
	          offsetTop = _props.offsetTop,
	          offsetBottom = _props.offsetBottom,
	          offsetLeft = _props.offsetLeft,
	          offsetRight = _props.offsetRight,
	          threshold = _props.threshold;


	      var _offsetAll = threshold || offset;
	      var _offsetVertical = offsetVertical || _offsetAll;
	      var _offsetHorizontal = offsetHorizontal || _offsetAll;

	      return {
	        top: offsetTop || _offsetVertical,
	        bottom: offsetBottom || _offsetVertical,
	        left: offsetLeft || _offsetHorizontal,
	        right: offsetRight || _offsetHorizontal
	      };
	    }
	  }, {
	    key: 'lazyLoadHandler',
	    value: function lazyLoadHandler() {
	      if (!this._mounted) {
	        return;
	      }
	      var offset = this.getOffset();
	      var node = (0, _reactDom.findDOMNode)(this);
	      var eventNode = this.getEventNode();

	      if ((0, _inViewport2.default)(node, eventNode, offset)) {
	        var onContentVisible = this.props.onContentVisible;


	        this.setState({ visible: true }, function () {
	          if (onContentVisible) {
	            onContentVisible();
	          }
	        });
	        this.detachListeners();
	      }
	    }
	  }, {
	    key: 'detachListeners',
	    value: function detachListeners() {
	      var eventNode = this.getEventNode();

	      (0, _eventlistener.remove)(window, 'resize', this.lazyLoadHandler);
	      (0, _eventlistener.remove)(eventNode, 'scroll', this.lazyLoadHandler);

	      if (eventNode !== window) (0, _eventlistener.remove)(window, 'scroll', this.lazyLoadHandler);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          children = _props2.children,
	          className = _props2.className,
	          height = _props2.height,
	          width = _props2.width;
	      var visible = this.state.visible;


	      var elStyles = { height: height, width: width };
	      var elClasses = 'LazyLoad' + (visible ? ' is-visible' : '') + (className ? ' ' + className : '');

	      return _react2.default.createElement(this.props.elementType, {
	        className: elClasses,
	        style: elStyles
	      }, visible && _react.Children.only(children));
	    }
	  }]);

	  return LazyLoad;
	}(_react.Component);

	LazyLoad.default = LazyLoad$1;


	LazyLoad$1.propTypes = {
	  children: _propTypes2.default.node.isRequired,
	  className: _propTypes2.default.string,
	  debounce: _propTypes2.default.bool,
	  elementType: _propTypes2.default.string,
	  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
	  offset: _propTypes2.default.number,
	  offsetBottom: _propTypes2.default.number,
	  offsetHorizontal: _propTypes2.default.number,
	  offsetLeft: _propTypes2.default.number,
	  offsetRight: _propTypes2.default.number,
	  offsetTop: _propTypes2.default.number,
	  offsetVertical: _propTypes2.default.number,
	  threshold: _propTypes2.default.number,
	  throttle: _propTypes2.default.number,
	  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
	  onContentVisible: _propTypes2.default.func
	};

	LazyLoad$1.defaultProps = {
	  elementType: 'div',
	  debounce: true,
	  offset: 0,
	  offsetBottom: 0,
	  offsetHorizontal: 0,
	  offsetLeft: 0,
	  offsetRight: 0,
	  offsetTop: 0,
	  offsetVertical: 0,
	  throttle: 250
	};
	return LazyLoad;
}

var LazyLoadExports = requireLazyLoad();
var Lazyload = /*@__PURE__*/getDefaultExportFromCjs(LazyLoadExports);

function _typeof$3(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$3 = function _typeof(obj) { return typeof obj; }; } else { _typeof$3 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$3(obj); }

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$3(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$3(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$3(Constructor.prototype, protoProps); return Constructor; }

function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$3(subClass, superClass); }

function _setPrototypeOf$3(o, p) { _setPrototypeOf$3 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$3(o, p); }

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf$3(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$3(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$3(this, result); }; }

function _possibleConstructorReturn$3(self, call) { if (call && (_typeof$3(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$3(self); }

function _assertThisInitialized$3(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$3(o) { _getPrototypeOf$3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$3(o); }

var ListItem = /*#__PURE__*/function (_React$Component) {
  _inherits$3(ListItem, _React$Component);

  var _super = _createSuper$3(ListItem);

  function ListItem() {
    _classCallCheck$3(this, ListItem);

    return _super.apply(this, arguments);
  }

  _createClass$3(ListItem, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return PureRenderMixin.shouldComponentUpdate.apply(this, args);
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          renderedText = _this$props.renderedText,
          renderedEl = _this$props.renderedEl,
          item = _this$props.item,
          lazy = _this$props.lazy,
          checked = _this$props.checked,
          disabled = _this$props.disabled,
          prefixCls = _this$props.prefixCls,
          onClick = _this$props.onClick;
      var className = classNames((_classNames = {}, _defineProperty$2(_classNames, "".concat(prefixCls, "-content-item"), true), _defineProperty$2(_classNames, "".concat(prefixCls, "-content-item-disabled"), disabled || item.disabled), _classNames));
      var title;

      if (typeof renderedText === 'string' || typeof renderedText === 'number') {
        title = String(renderedText);
      }

      var listItem = /*#__PURE__*/React.createElement("li", {
        className: className,
        title: title,
        onClick: disabled || item.disabled ? undefined : function () {
          return onClick(item);
        }
      }, /*#__PURE__*/React.createElement(Checkbox, {
        checked: checked,
        disabled: disabled || item.disabled
      }), /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-content-item-text")
      }, renderedEl));
      var children = null;

      if (lazy) {
        var lazyProps = _extends$2({
          height: 32,
          offset: 500,
          throttle: 0,
          debounce: false
        }, lazy);

        children = /*#__PURE__*/React.createElement(Lazyload, lazyProps, listItem);
      } else {
        children = listItem;
      }

      return children;
    }
  }]);

  return ListItem;
}(React.Component);

function _typeof$2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$2 = function _typeof(obj) { return typeof obj; }; } else { _typeof$2 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$2(obj); }

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$2(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$2(Constructor.prototype, protoProps); return Constructor; }

function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$2(subClass, superClass); }

function _setPrototypeOf$2(o, p) { _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$2(o, p); }

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf$2(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$2(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$2(this, result); }; }

function _possibleConstructorReturn$2(self, call) { if (call && (_typeof$2(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$2(self); }

function _assertThisInitialized$2(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$2(o) { _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$2(o); }
var OmitProps = tuple('handleFilter', 'handleSelect', 'handleSelectAll', 'handleClear', 'body', 'checkedKeys');

var ListBody = /*#__PURE__*/function (_React$Component) {
  _inherits$2(ListBody, _React$Component);

  var _super = _createSuper$2(ListBody);

  function ListBody() {
    var _this;

    _classCallCheck$2(this, ListBody);

    _this = _super.apply(this, arguments);
    _this.state = {
      mounted: false
    };

    _this.onItemSelect = function (item) {
      var _this$props = _this.props,
          onItemSelect = _this$props.onItemSelect,
          selectedKeys = _this$props.selectedKeys;
      var checked = selectedKeys.indexOf(item.key) >= 0;
      onItemSelect(item.key, !checked);
    };

    return _this;
  }

  _createClass$2(ListBody, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.mountId = wrapperRaf(function () {
        _this2.setState({
          mounted: true
        });
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props2 = this.props,
          filteredRenderItems = _this$props2.filteredRenderItems,
          lazy = _this$props2.lazy;

      if (prevProps.filteredRenderItems.length !== filteredRenderItems.length && lazy !== false) {
        // TODO: Replace this with ref when react 15 support removed.
        var container = findDOMNode(this);
        wrapperRaf.cancel(this.lazyId);
        this.lazyId = wrapperRaf(function () {
          if (container) {
            var scrollEvent = new Event('scroll', {
              bubbles: true
            });
            container.dispatchEvent(scrollEvent);
          }
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      wrapperRaf.cancel(this.mountId);
      wrapperRaf.cancel(this.lazyId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var mounted = this.state.mounted;
      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          onScroll = _this$props3.onScroll,
          filteredRenderItems = _this$props3.filteredRenderItems,
          lazy = _this$props3.lazy,
          selectedKeys = _this$props3.selectedKeys,
          globalDisabled = _this$props3.disabled;
      return /*#__PURE__*/React.createElement(Animate, {
        component: "ul",
        componentProps: {
          onScroll: onScroll
        },
        className: "".concat(prefixCls, "-content"),
        transitionName: mounted ? "".concat(prefixCls, "-content-item-highlight") : '',
        transitionLeave: false
      }, filteredRenderItems.map(function (_ref) {
        var renderedEl = _ref.renderedEl,
            renderedText = _ref.renderedText,
            item = _ref.item;
        var disabled = item.disabled;
        var checked = selectedKeys.indexOf(item.key) >= 0;
        return /*#__PURE__*/React.createElement(ListItem, {
          disabled: globalDisabled || disabled,
          key: item.key,
          item: item,
          lazy: lazy,
          renderedText: renderedText,
          renderedEl: renderedEl,
          checked: checked,
          prefixCls: prefixCls,
          onClick: _this3.onItemSelect
        });
      }));
    }
  }]);

  return ListBody;
}(React.Component);

var ListBodyWrapper = function ListBodyWrapper(props) {
  return /*#__PURE__*/React.createElement(ListBody, props);
};

function triggerEvent(el, type) {
  if ('createEvent' in document) {
    // modern browsers, IE9+
    var e = document.createEvent('HTMLEvents');
    e.initEvent(type, false, true);
    el.dispatchEvent(e);
  }
}

function _typeof$1(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

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

var defaultRender = function defaultRender() {
  return null;
};

function isRenderResultPlainObject(result) {
  return result && ! /*#__PURE__*/React.isValidElement(result) && Object.prototype.toString.call(result) === '[object Object]';
}

function renderListNode(renderList, props) {
  var bodyContent = renderList ? renderList(props) : null;
  var customize = !!bodyContent;

  if (!customize) {
    bodyContent = ListBodyWrapper(props);
  }

  return {
    customize: customize,
    bodyContent: bodyContent
  };
}

var TransferList = /*#__PURE__*/function (_React$Component) {
  _inherits$1(TransferList, _React$Component);

  var _super = _createSuper$1(TransferList);

  function TransferList(props) {
    var _this;

    _classCallCheck$1(this, TransferList);

    _this = _super.call(this, props);

    _this.handleFilter = function (e) {
      var handleFilter = _this.props.handleFilter;
      var filterValue = e.target.value;

      _this.setState({
        filterValue: filterValue
      });

      handleFilter(e);

      if (!filterValue) {
        return;
      } // Manually trigger scroll event for lazy search bug
      // https://github.com/ant-design/ant-design/issues/5631


      _this.triggerScrollTimer = window.setTimeout(function () {
        var transferNode = ReactDOM.findDOMNode(_assertThisInitialized$1(_this));
        var listNode = transferNode.querySelectorAll('.ant-transfer-list-content')[0];

        if (listNode) {
          triggerEvent(listNode, 'scroll');
        }
      }, 0);
    };

    _this.handleClear = function () {
      var handleClear = _this.props.handleClear;

      _this.setState({
        filterValue: ''
      });

      handleClear();
    };

    _this.matchFilter = function (text, item) {
      var filterValue = _this.state.filterValue;
      var filterOption = _this.props.filterOption;

      if (filterOption) {
        return filterOption(filterValue, item);
      }

      return text.indexOf(filterValue) >= 0;
    };

    _this.renderItem = function (item) {
      var _this$props$render = _this.props.render,
          render = _this$props$render === void 0 ? defaultRender : _this$props$render;
      var renderResult = render(item);
      var isRenderResultPlain = isRenderResultPlainObject(renderResult);
      return {
        renderedText: isRenderResultPlain ? renderResult.value : renderResult,
        renderedEl: isRenderResultPlain ? renderResult.label : renderResult,
        item: item
      };
    };

    _this.state = {
      filterValue: ''
    };
    return _this;
  }

  _createClass$1(TransferList, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return PureRenderMixin.shouldComponentUpdate.apply(this, args);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.triggerScrollTimer);
    }
  }, {
    key: "getCheckStatus",
    value: function getCheckStatus(filteredItems) {
      var checkedKeys = this.props.checkedKeys;

      if (checkedKeys.length === 0) {
        return 'none';
      }

      if (filteredItems.every(function (item) {
        return checkedKeys.indexOf(item.key) >= 0 || !!item.disabled;
      })) {
        return 'all';
      }

      return 'part';
    }
  }, {
    key: "getFilteredItems",
    value: function getFilteredItems(dataSource, filterValue) {
      var _this2 = this;

      var filteredItems = [];
      var filteredRenderItems = [];
      dataSource.forEach(function (item) {
        var renderedItem = _this2.renderItem(item);

        var renderedText = renderedItem.renderedText; // Filter skip

        if (filterValue && filterValue.trim() && !_this2.matchFilter(renderedText, item)) {
          return null;
        }

        filteredItems.push(item);
        filteredRenderItems.push(renderedItem);
      });
      return {
        filteredItems: filteredItems,
        filteredRenderItems: filteredRenderItems
      };
    }
  }, {
    key: "getListBody",
    value: function getListBody(prefixCls, searchPlaceholder, filterValue, filteredItems, notFoundContent, bodyDom, filteredRenderItems, checkedKeys, renderList, showSearch, disabled) {
      var search = showSearch ? /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-body-search-wrapper")
      }, /*#__PURE__*/React.createElement(Search, {
        prefixCls: "".concat(prefixCls, "-search"),
        onChange: this.handleFilter,
        handleClear: this.handleClear,
        placeholder: searchPlaceholder,
        value: filterValue,
        disabled: disabled
      })) : null;
      var listBody = bodyDom;

      if (!listBody) {
        var bodyNode;

        var _renderListNode = renderListNode(renderList, _extends$1(_extends$1({}, omit(this.props, OmitProps)), {
          filteredItems: filteredItems,
          filteredRenderItems: filteredRenderItems,
          selectedKeys: checkedKeys
        })),
            bodyContent = _renderListNode.bodyContent,
            customize = _renderListNode.customize; // We should wrap customize list body in a classNamed div to use flex layout.


        if (customize) {
          bodyNode = /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-body-customize-wrapper")
          }, bodyContent);
        } else {
          bodyNode = filteredItems.length ? bodyContent : /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-body-not-found")
          }, notFoundContent);
        }

        listBody = /*#__PURE__*/React.createElement("div", {
          className: classNames(showSearch ? "".concat(prefixCls, "-body ").concat(prefixCls, "-body-with-search") : "".concat(prefixCls, "-body"))
        }, search, bodyNode);
      }

      return listBody;
    }
  }, {
    key: "getCheckBox",
    value: function getCheckBox(filteredItems, onItemSelectAll, showSelectAll, disabled) {
      var checkStatus = this.getCheckStatus(filteredItems);
      var checkedAll = checkStatus === 'all';
      var checkAllCheckbox = showSelectAll !== false && /*#__PURE__*/React.createElement(Checkbox, {
        disabled: disabled,
        checked: checkedAll,
        indeterminate: checkStatus === 'part',
        onChange: function onChange() {
          // Only select enabled items
          onItemSelectAll(filteredItems.filter(function (item) {
            return !item.disabled;
          }).map(function (_ref) {
            var key = _ref.key;
            return key;
          }), !checkedAll);
        }
      });
      return checkAllCheckbox;
    }
  }, {
    key: "render",
    value: function render() {
      var filterValue = this.state.filterValue;
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          dataSource = _this$props.dataSource,
          titleText = _this$props.titleText,
          checkedKeys = _this$props.checkedKeys,
          disabled = _this$props.disabled,
          body = _this$props.body,
          footer = _this$props.footer,
          showSearch = _this$props.showSearch,
          style = _this$props.style,
          searchPlaceholder = _this$props.searchPlaceholder,
          notFoundContent = _this$props.notFoundContent,
          itemUnit = _this$props.itemUnit,
          itemsUnit = _this$props.itemsUnit,
          renderList = _this$props.renderList,
          onItemSelectAll = _this$props.onItemSelectAll,
          showSelectAll = _this$props.showSelectAll; // Custom Layout

      var footerDom = footer && footer(this.props);
      var bodyDom = body && body(this.props);
      var listCls = classNames(prefixCls, _defineProperty$1({}, "".concat(prefixCls, "-with-footer"), !!footerDom)); // ====================== Get filtered, checked item list ======================

      var _this$getFilteredItem = this.getFilteredItems(dataSource, filterValue),
          filteredItems = _this$getFilteredItem.filteredItems,
          filteredRenderItems = _this$getFilteredItem.filteredRenderItems; // ================================= List Body =================================


      var unit = dataSource.length > 1 ? itemsUnit : itemUnit;
      var listBody = this.getListBody(prefixCls, searchPlaceholder, filterValue, filteredItems, notFoundContent, bodyDom, filteredRenderItems, checkedKeys, renderList, showSearch, disabled); // ================================ List Footer ================================

      var listFooter = footerDom ? /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-footer")
      }, footerDom) : null;
      var checkAllCheckbox = this.getCheckBox(filteredItems, onItemSelectAll, showSelectAll, disabled); // ================================== Render ===================================

      return /*#__PURE__*/React.createElement("div", {
        className: listCls,
        style: style
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-header")
      }, checkAllCheckbox, /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-header-selected")
      }, /*#__PURE__*/React.createElement("span", null, (checkedKeys.length > 0 ? "".concat(checkedKeys.length, "/") : '') + filteredItems.length, ' ', unit), /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-header-title")
      }, titleText))), listBody, listFooter);
    }
  }]);

  return TransferList;
}(React.Component);
TransferList.defaultProps = {
  dataSource: [],
  titleText: '',
  showSearch: false,
  lazy: {}
};

var Operation = function Operation(_ref) {
  var disabled = _ref.disabled,
      moveToLeft = _ref.moveToLeft,
      moveToRight = _ref.moveToRight,
      _ref$leftArrowText = _ref.leftArrowText,
      leftArrowText = _ref$leftArrowText === void 0 ? '' : _ref$leftArrowText,
      _ref$rightArrowText = _ref.rightArrowText,
      rightArrowText = _ref$rightArrowText === void 0 ? '' : _ref$rightArrowText,
      leftActive = _ref.leftActive,
      rightActive = _ref.rightActive,
      className = _ref.className,
      style = _ref.style;
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: style
  }, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    size: "small",
    disabled: disabled || !rightActive,
    onClick: moveToRight,
    icon: "right"
  }, rightArrowText), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    size: "small",
    disabled: disabled || !leftActive,
    onClick: moveToLeft,
    icon: "left"
  }, leftArrowText));
};

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var Transfer = /*#__PURE__*/function (_React$Component) {
  _inherits(Transfer, _React$Component);

  var _super = _createSuper(Transfer);

  function Transfer(props) {
    var _this;

    _classCallCheck(this, Transfer);

    _this = _super.call(this, props);
    _this.separatedDataSource = null;

    _this.getLocale = function (transferLocale, renderEmpty) {
      // Keep old locale props still working.
      var oldLocale = {
        notFoundContent: renderEmpty('Transfer')
      };

      if ('notFoundContent' in _this.props) {
        oldLocale.notFoundContent = _this.props.notFoundContent;
      }

      if ('searchPlaceholder' in _this.props) {
        oldLocale.searchPlaceholder = _this.props.searchPlaceholder;
      }

      return _extends(_extends(_extends({}, transferLocale), oldLocale), _this.props.locale);
    };

    _this.moveTo = function (direction) {
      var _this$props = _this.props,
          _this$props$targetKey = _this$props.targetKeys,
          targetKeys = _this$props$targetKey === void 0 ? [] : _this$props$targetKey,
          _this$props$dataSourc = _this$props.dataSource,
          dataSource = _this$props$dataSourc === void 0 ? [] : _this$props$dataSourc,
          onChange = _this$props.onChange;
      var _this$state = _this.state,
          sourceSelectedKeys = _this$state.sourceSelectedKeys,
          targetSelectedKeys = _this$state.targetSelectedKeys;
      var moveKeys = direction === 'right' ? sourceSelectedKeys : targetSelectedKeys; // filter the disabled options

      var newMoveKeys = moveKeys.filter(function (key) {
        return !dataSource.some(function (data) {
          return !!(key === data.key && data.disabled);
        });
      }); // move items to target box

      var newTargetKeys = direction === 'right' ? newMoveKeys.concat(targetKeys) : targetKeys.filter(function (targetKey) {
        return newMoveKeys.indexOf(targetKey) === -1;
      }); // empty checked keys

      var oppositeDirection = direction === 'right' ? 'left' : 'right';

      _this.setState(_defineProperty({}, _this.getSelectedKeysName(oppositeDirection), []));

      _this.handleSelectChange(oppositeDirection, []);

      if (onChange) {
        onChange(newTargetKeys, direction, newMoveKeys);
      }
    };

    _this.moveToLeft = function () {
      return _this.moveTo('left');
    };

    _this.moveToRight = function () {
      return _this.moveTo('right');
    };

    _this.onItemSelectAll = function (direction, selectedKeys, checkAll) {
      var originalSelectedKeys = _this.state[_this.getSelectedKeysName(direction)] || [];
      var mergedCheckedKeys = [];

      if (checkAll) {
        // Merge current keys with origin key
        mergedCheckedKeys = Array.from(new Set([].concat(_toConsumableArray(originalSelectedKeys), _toConsumableArray(selectedKeys))));
      } else {
        // Remove current keys from origin keys
        mergedCheckedKeys = originalSelectedKeys.filter(function (key) {
          return selectedKeys.indexOf(key) === -1;
        });
      }

      _this.handleSelectChange(direction, mergedCheckedKeys);

      if (!_this.props.selectedKeys) {
        _this.setState(_defineProperty({}, _this.getSelectedKeysName(direction), mergedCheckedKeys));
      }
    };

    _this.handleSelectAll = function (direction, filteredDataSource, checkAll) {

      _this.onItemSelectAll(direction, filteredDataSource.map(function (_ref) {
        var key = _ref.key;
        return key;
      }), !checkAll);
    }; // [Legacy] Old prop `body` pass origin check as arg. It's confusing.
    // TODO: Remove this in next version.


    _this.handleLeftSelectAll = function (filteredDataSource, checkAll) {
      return _this.handleSelectAll('left', filteredDataSource, !checkAll);
    };

    _this.handleRightSelectAll = function (filteredDataSource, checkAll) {
      return _this.handleSelectAll('right', filteredDataSource, !checkAll);
    };

    _this.onLeftItemSelectAll = function (selectedKeys, checkAll) {
      return _this.onItemSelectAll('left', selectedKeys, checkAll);
    };

    _this.onRightItemSelectAll = function (selectedKeys, checkAll) {
      return _this.onItemSelectAll('right', selectedKeys, checkAll);
    };

    _this.handleFilter = function (direction, e) {
      var _this$props2 = _this.props,
          onSearchChange = _this$props2.onSearchChange,
          onSearch = _this$props2.onSearch;
      var value = e.target.value;

      if (onSearchChange) {
        onSearchChange(direction, e);
      }

      if (onSearch) {
        onSearch(direction, value);
      }
    };

    _this.handleLeftFilter = function (e) {
      return _this.handleFilter('left', e);
    };

    _this.handleRightFilter = function (e) {
      return _this.handleFilter('right', e);
    };

    _this.handleClear = function (direction) {
      var onSearch = _this.props.onSearch;

      if (onSearch) {
        onSearch(direction, '');
      }
    };

    _this.handleLeftClear = function () {
      return _this.handleClear('left');
    };

    _this.handleRightClear = function () {
      return _this.handleClear('right');
    };

    _this.onItemSelect = function (direction, selectedKey, checked) {
      var _this$state2 = _this.state,
          sourceSelectedKeys = _this$state2.sourceSelectedKeys,
          targetSelectedKeys = _this$state2.targetSelectedKeys;
      var holder = direction === 'left' ? _toConsumableArray(sourceSelectedKeys) : _toConsumableArray(targetSelectedKeys);
      var index = holder.indexOf(selectedKey);

      if (index > -1) {
        holder.splice(index, 1);
      }

      if (checked) {
        holder.push(selectedKey);
      }

      _this.handleSelectChange(direction, holder);

      if (!_this.props.selectedKeys) {
        _this.setState(_defineProperty({}, _this.getSelectedKeysName(direction), holder));
      }
    };

    _this.handleSelect = function (direction, selectedItem, checked) {

      _this.onItemSelect(direction, selectedItem.key, checked);
    };

    _this.handleLeftSelect = function (selectedItem, checked) {
      return _this.handleSelect('left', selectedItem, checked);
    };

    _this.handleRightSelect = function (selectedItem, checked) {
      return _this.handleSelect('right', selectedItem, checked);
    };

    _this.onLeftItemSelect = function (selectedKey, checked) {
      return _this.onItemSelect('left', selectedKey, checked);
    };

    _this.onRightItemSelect = function (selectedKey, checked) {
      return _this.onItemSelect('right', selectedKey, checked);
    };

    _this.handleScroll = function (direction, e) {
      var onScroll = _this.props.onScroll;

      if (onScroll) {
        onScroll(direction, e);
      }
    };

    _this.handleLeftScroll = function (e) {
      return _this.handleScroll('left', e);
    };

    _this.handleRightScroll = function (e) {
      return _this.handleScroll('right', e);
    };

    _this.handleListStyle = function (listStyle, direction) {
      if (typeof listStyle === 'function') {
        return listStyle({
          direction: direction
        });
      }

      return listStyle;
    };

    _this.renderTransfer = function (transferLocale) {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, function (_ref2) {
        var _classNames;

        var getPrefixCls = _ref2.getPrefixCls,
            renderEmpty = _ref2.renderEmpty;
        var _this$props3 = _this.props,
            customizePrefixCls = _this$props3.prefixCls,
            className = _this$props3.className,
            disabled = _this$props3.disabled,
            _this$props3$operatio = _this$props3.operations,
            operations = _this$props3$operatio === void 0 ? [] : _this$props3$operatio,
            showSearch = _this$props3.showSearch,
            body = _this$props3.body,
            footer = _this$props3.footer,
            style = _this$props3.style,
            listStyle = _this$props3.listStyle,
            operationStyle = _this$props3.operationStyle,
            filterOption = _this$props3.filterOption,
            render = _this$props3.render,
            lazy = _this$props3.lazy,
            children = _this$props3.children,
            showSelectAll = _this$props3.showSelectAll;
        var prefixCls = getPrefixCls('transfer', customizePrefixCls);

        var locale = _this.getLocale(transferLocale, renderEmpty);

        var _this$state3 = _this.state,
            sourceSelectedKeys = _this$state3.sourceSelectedKeys,
            targetSelectedKeys = _this$state3.targetSelectedKeys;

        var _this$separateDataSou = _this.separateDataSource(),
            leftDataSource = _this$separateDataSou.leftDataSource,
            rightDataSource = _this$separateDataSou.rightDataSource;

        var leftActive = targetSelectedKeys.length > 0;
        var rightActive = sourceSelectedKeys.length > 0;
        var cls = classNames(className, prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classNames, "".concat(prefixCls, "-customize-list"), !!children), _classNames));

        var titles = _this.getTitles(locale);

        return /*#__PURE__*/React.createElement("div", {
          className: cls,
          style: style
        }, /*#__PURE__*/React.createElement(TransferList, _extends({
          prefixCls: "".concat(prefixCls, "-list"),
          titleText: titles[0],
          dataSource: leftDataSource,
          filterOption: filterOption,
          style: _this.handleListStyle(listStyle, 'left'),
          checkedKeys: sourceSelectedKeys,
          handleFilter: _this.handleLeftFilter,
          handleClear: _this.handleLeftClear,
          handleSelect: _this.handleLeftSelect,
          handleSelectAll: _this.handleLeftSelectAll,
          onItemSelect: _this.onLeftItemSelect,
          onItemSelectAll: _this.onLeftItemSelectAll,
          render: render,
          showSearch: showSearch,
          body: body,
          renderList: children,
          footer: footer,
          lazy: lazy,
          onScroll: _this.handleLeftScroll,
          disabled: disabled,
          direction: "left",
          showSelectAll: showSelectAll
        }, locale)), /*#__PURE__*/React.createElement(Operation, {
          className: "".concat(prefixCls, "-operation"),
          rightActive: rightActive,
          rightArrowText: operations[0],
          moveToRight: _this.moveToRight,
          leftActive: leftActive,
          leftArrowText: operations[1],
          moveToLeft: _this.moveToLeft,
          style: operationStyle,
          disabled: disabled
        }), /*#__PURE__*/React.createElement(TransferList, _extends({
          prefixCls: "".concat(prefixCls, "-list"),
          titleText: titles[1],
          dataSource: rightDataSource,
          filterOption: filterOption,
          style: _this.handleListStyle(listStyle, 'right'),
          checkedKeys: targetSelectedKeys,
          handleFilter: _this.handleRightFilter,
          handleClear: _this.handleRightClear,
          handleSelect: _this.handleRightSelect,
          handleSelectAll: _this.handleRightSelectAll,
          onItemSelect: _this.onRightItemSelect,
          onItemSelectAll: _this.onRightItemSelectAll,
          render: render,
          showSearch: showSearch,
          body: body,
          renderList: children,
          footer: footer,
          lazy: lazy,
          onScroll: _this.handleRightScroll,
          disabled: disabled,
          direction: "right",
          showSelectAll: showSelectAll
        }, locale)));
      });
    };
    var _props$selectedKeys = props.selectedKeys,
        selectedKeys = _props$selectedKeys === void 0 ? [] : _props$selectedKeys,
        _props$targetKeys = props.targetKeys,
        targetKeys = _props$targetKeys === void 0 ? [] : _props$targetKeys;
    _this.state = {
      sourceSelectedKeys: selectedKeys.filter(function (key) {
        return targetKeys.indexOf(key) === -1;
      }),
      targetSelectedKeys: selectedKeys.filter(function (key) {
        return targetKeys.indexOf(key) > -1;
      })
    };
    return _this;
  }

  _createClass(Transfer, [{
    key: "getSelectedKeysName",
    // eslint-disable-next-line
    value: function getSelectedKeysName(direction) {
      return direction === 'left' ? 'sourceSelectedKeys' : 'targetSelectedKeys';
    }
  }, {
    key: "getTitles",
    value: function getTitles(transferLocale) {
      var props = this.props;

      if (props.titles) {
        return props.titles;
      }

      return transferLocale.titles;
    }
  }, {
    key: "handleSelectChange",
    value: function handleSelectChange(direction, holder) {
      var _this$state4 = this.state,
          sourceSelectedKeys = _this$state4.sourceSelectedKeys,
          targetSelectedKeys = _this$state4.targetSelectedKeys;
      var onSelectChange = this.props.onSelectChange;

      if (!onSelectChange) {
        return;
      }

      if (direction === 'left') {
        onSelectChange(holder, targetSelectedKeys);
      } else {
        onSelectChange(sourceSelectedKeys, holder);
      }
    }
  }, {
    key: "separateDataSource",
    value: function separateDataSource() {
      var _this$props4 = this.props,
          dataSource = _this$props4.dataSource,
          rowKey = _this$props4.rowKey,
          _this$props4$targetKe = _this$props4.targetKeys,
          targetKeys = _this$props4$targetKe === void 0 ? [] : _this$props4$targetKe;
      var leftDataSource = [];
      var rightDataSource = new Array(targetKeys.length);
      dataSource.forEach(function (record) {
        if (rowKey) {
          record.key = rowKey(record);
        } // rightDataSource should be ordered by targetKeys
        // leftDataSource should be ordered by dataSource


        var indexOfKey = targetKeys.indexOf(record.key);

        if (indexOfKey !== -1) {
          rightDataSource[indexOfKey] = record;
        } else {
          leftDataSource.push(record);
        }
      });
      return {
        leftDataSource: leftDataSource,
        rightDataSource: rightDataSource
      };
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(LocaleReceiver, {
        componentName: "Transfer",
        defaultLocale: defaultLocale.Transfer
      }, this.renderTransfer);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if (nextProps.selectedKeys) {
        var targetKeys = nextProps.targetKeys || [];
        return {
          sourceSelectedKeys: nextProps.selectedKeys.filter(function (key) {
            return !targetKeys.includes(key);
          }),
          targetSelectedKeys: nextProps.selectedKeys.filter(function (key) {
            return targetKeys.includes(key);
          })
        };
      }

      return null;
    }
  }]);

  return Transfer;
}(React.Component); // For high-level customized Transfer @dqaria


Transfer.List = TransferList;
Transfer.Operation = Operation;
Transfer.Search = Search;
Transfer.defaultProps = {
  dataSource: [],
  locale: {},
  showSearch: false,
  listStyle: function listStyle() {}
};
Transfer.propTypes = {
  prefixCls: propTypesExports.string,
  disabled: propTypesExports.bool,
  dataSource: propTypesExports.array,
  render: propTypesExports.func,
  targetKeys: propTypesExports.array,
  onChange: propTypesExports.func,
  height: propTypesExports.number,
  style: propTypesExports.object,
  listStyle: propTypesExports.oneOfType([propTypesExports.func, propTypesExports.object]),
  operationStyle: propTypesExports.object,
  className: propTypesExports.string,
  titles: propTypesExports.array,
  operations: propTypesExports.array,
  showSearch: propTypesExports.bool,
  filterOption: propTypesExports.func,
  searchPlaceholder: propTypesExports.string,
  notFoundContent: propTypesExports.node,
  locale: propTypesExports.object,
  body: propTypesExports.func,
  footer: propTypesExports.func,
  rowKey: propTypesExports.func,
  lazy: propTypesExports.oneOfType([propTypesExports.object, propTypesExports.bool])
};
polyfill(Transfer);

export { Transfer as default };
