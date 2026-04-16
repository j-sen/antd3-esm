import { n, g as getDefaultExportFromCjs, c as classNames, P as PropTypes, C as ConfigConsumer } from '../../config-provider.js';
import * as React from 'react';
import React__default from 'react';
import { d as _defineProperty$1, e as _extends$1, n as require_export, m as require_core, t as require_fails, u as require_objectGpo, o as require_toObject, v as require_toIobject, w as require_objectGopd, _ as _inherits$1, a as _classCallCheck$1, b as _possibleConstructorReturn$1, c as _createClass$1, f as _objectWithoutProperties } from '../../icon.js';
import { w as warning } from '../../tree.js';
import { a as addEventListenerWrap, K as KeyCode, s as shallowEqual, p as polyfill } from '../../menu.js';
import { _ as _toConsumableArray } from '../../toConsumableArray.js';
import { findDOMNode } from 'react-dom';
import { T as Tooltip } from '../../index8.js';
import '../../input.js';

var css = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-slider {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  position: relative;\n  height: 12px;\n  margin: 14px 6px 10px;\n  padding: 4px 0;\n  cursor: pointer;\n  touch-action: none;\n}\n.ant-slider-vertical {\n  width: 12px;\n  height: 100%;\n  margin: 6px 10px;\n  padding: 0 4px;\n}\n.ant-slider-vertical .ant-slider-rail {\n  width: 4px;\n  height: 100%;\n}\n.ant-slider-vertical .ant-slider-track {\n  width: 4px;\n}\n.ant-slider-vertical .ant-slider-handle {\n  margin-bottom: -7px;\n  margin-left: -5px;\n}\n.ant-slider-vertical .ant-slider-mark {\n  top: 0;\n  left: 12px;\n  width: 18px;\n  height: 100%;\n}\n.ant-slider-vertical .ant-slider-mark-text {\n  left: 4px;\n  white-space: nowrap;\n}\n.ant-slider-vertical .ant-slider-step {\n  width: 4px;\n  height: 100%;\n}\n.ant-slider-vertical .ant-slider-dot {\n  top: auto;\n  left: 2px;\n  margin-bottom: -4px;\n}\n.ant-slider-tooltip .ant-tooltip-inner {\n  min-width: unset;\n}\n.ant-slider-with-marks {\n  margin-bottom: 28px;\n}\n.ant-slider-rail {\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  background-color: #f5f5f5;\n  border-radius: 2px;\n  transition: background-color 0.3s;\n}\n.ant-slider-track {\n  position: absolute;\n  height: 4px;\n  background-color: #91d5ff;\n  border-radius: 4px;\n  transition: background-color 0.3s;\n}\n.ant-slider-handle {\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  margin-top: -5px;\n  background-color: #fff;\n  border: solid 2px #91d5ff;\n  border-radius: 50%;\n  box-shadow: 0;\n  cursor: pointer;\n  transition: border-color 0.3s, box-shadow 0.6s, transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n}\n.ant-slider-handle:focus {\n  border-color: #46a6ff;\n  outline: none;\n  box-shadow: 0 0 0 5px rgba(24, 144, 255, 0.2);\n}\n.ant-slider-handle.ant-tooltip-open {\n  border-color: #1890ff;\n}\n.ant-slider:hover .ant-slider-rail {\n  background-color: #e1e1e1;\n}\n.ant-slider:hover .ant-slider-track {\n  background-color: #69c0ff;\n}\n.ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open) {\n  border-color: #69c0ff;\n}\n.ant-slider-mark {\n  position: absolute;\n  top: 14px;\n  left: 0;\n  width: 100%;\n  font-size: 14px;\n}\n.ant-slider-mark-text {\n  position: absolute;\n  display: inline-block;\n  color: rgba(0, 0, 0, 0.45);\n  text-align: center;\n  word-break: keep-all;\n  cursor: pointer;\n}\n.ant-slider-mark-text-active {\n  color: rgba(0, 0, 0, 0.65);\n}\n.ant-slider-step {\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  background: transparent;\n}\n.ant-slider-dot {\n  position: absolute;\n  top: -2px;\n  width: 8px;\n  height: 8px;\n  margin-left: -4px;\n  background-color: #fff;\n  border: 2px solid #e8e8e8;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.ant-slider-dot:first-child {\n  margin-left: -4px;\n}\n.ant-slider-dot:last-child {\n  margin-left: -4px;\n}\n.ant-slider-dot-active {\n  border-color: #8cc8ff;\n}\n.ant-slider-disabled {\n  cursor: not-allowed;\n}\n.ant-slider-disabled .ant-slider-track {\n  background-color: rgba(0, 0, 0, 0.25) !important;\n}\n.ant-slider-disabled .ant-slider-handle,\n.ant-slider-disabled .ant-slider-dot {\n  background-color: #fff;\n  border-color: rgba(0, 0, 0, 0.25) !important;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n.ant-slider-disabled .ant-slider-mark-text,\n.ant-slider-disabled .ant-slider-dot {\n  cursor: not-allowed !important;\n}\n/*# sourceMappingURL=index.css.map */";
n(css,{"prepend":true});

var Track = function Track(props) {
  var _ref, _ref2;

  var className = props.className,
      included = props.included,
      vertical = props.vertical,
      offset = props.offset,
      length = props.length,
      style = props.style,
      reverse = props.reverse;

  var positonStyle = vertical ? (_ref = {}, _defineProperty$1(_ref, reverse ? 'top' : 'bottom', offset + '%'), _defineProperty$1(_ref, reverse ? 'bottom' : 'top', 'auto'), _defineProperty$1(_ref, 'height', length + '%'), _ref) : (_ref2 = {}, _defineProperty$1(_ref2, reverse ? 'right' : 'left', offset + '%'), _defineProperty$1(_ref2, reverse ? 'left' : 'right', 'auto'), _defineProperty$1(_ref2, 'width', length + '%'), _ref2);

  var elStyle = _extends$1({}, style, positonStyle);
  return included ? React__default.createElement('div', { className: className, style: elStyle }) : null;
};

var get = {};

var es6_object_getPrototypeOf = {};

var _objectSap;
var hasRequired_objectSap;

function require_objectSap () {
	if (hasRequired_objectSap) return _objectSap;
	hasRequired_objectSap = 1;
	// most Object methods by ES6 should accept primitives
	var $export = require_export();
	var core = require_core();
	var fails = require_fails();
	_objectSap = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
	};
	return _objectSap;
}

var hasRequiredEs6_object_getPrototypeOf;

function requireEs6_object_getPrototypeOf () {
	if (hasRequiredEs6_object_getPrototypeOf) return es6_object_getPrototypeOf;
	hasRequiredEs6_object_getPrototypeOf = 1;
	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = require_toObject();
	var $getPrototypeOf = require_objectGpo();

	require_objectSap()('getPrototypeOf', function () {
	  return function getPrototypeOf(it) {
	    return $getPrototypeOf(toObject(it));
	  };
	});
	return es6_object_getPrototypeOf;
}

var getPrototypeOf$1;
var hasRequiredGetPrototypeOf$1;

function requireGetPrototypeOf$1 () {
	if (hasRequiredGetPrototypeOf$1) return getPrototypeOf$1;
	hasRequiredGetPrototypeOf$1 = 1;
	requireEs6_object_getPrototypeOf();
	getPrototypeOf$1 = require_core().Object.getPrototypeOf;
	return getPrototypeOf$1;
}

var getPrototypeOf;
var hasRequiredGetPrototypeOf;

function requireGetPrototypeOf () {
	if (hasRequiredGetPrototypeOf) return getPrototypeOf;
	hasRequiredGetPrototypeOf = 1;
	getPrototypeOf = { "default": requireGetPrototypeOf$1(), __esModule: true };
	return getPrototypeOf;
}

var es6_object_getOwnPropertyDescriptor = {};

var hasRequiredEs6_object_getOwnPropertyDescriptor;

function requireEs6_object_getOwnPropertyDescriptor () {
	if (hasRequiredEs6_object_getOwnPropertyDescriptor) return es6_object_getOwnPropertyDescriptor;
	hasRequiredEs6_object_getOwnPropertyDescriptor = 1;
	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = require_toIobject();
	var $getOwnPropertyDescriptor = require_objectGopd().f;

	require_objectSap()('getOwnPropertyDescriptor', function () {
	  return function getOwnPropertyDescriptor(it, key) {
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});
	return es6_object_getOwnPropertyDescriptor;
}

var getOwnPropertyDescriptor$1;
var hasRequiredGetOwnPropertyDescriptor$1;

function requireGetOwnPropertyDescriptor$1 () {
	if (hasRequiredGetOwnPropertyDescriptor$1) return getOwnPropertyDescriptor$1;
	hasRequiredGetOwnPropertyDescriptor$1 = 1;
	requireEs6_object_getOwnPropertyDescriptor();
	var $Object = require_core().Object;
	getOwnPropertyDescriptor$1 = function getOwnPropertyDescriptor(it, key) {
	  return $Object.getOwnPropertyDescriptor(it, key);
	};
	return getOwnPropertyDescriptor$1;
}

var getOwnPropertyDescriptor;
var hasRequiredGetOwnPropertyDescriptor;

function requireGetOwnPropertyDescriptor () {
	if (hasRequiredGetOwnPropertyDescriptor) return getOwnPropertyDescriptor;
	hasRequiredGetOwnPropertyDescriptor = 1;
	getOwnPropertyDescriptor = { "default": requireGetOwnPropertyDescriptor$1(), __esModule: true };
	return getOwnPropertyDescriptor;
}

var hasRequiredGet;

function requireGet () {
	if (hasRequiredGet) return get;
	hasRequiredGet = 1;

	get.__esModule = true;

	var _getPrototypeOf = requireGetPrototypeOf();

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _getOwnPropertyDescriptor = requireGetOwnPropertyDescriptor();

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	get.default = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;
	  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

	  if (desc === undefined) {
	    var parent = (0, _getPrototypeOf2.default)(object);

	    if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;

	    if (getter === undefined) {
	      return undefined;
	    }

	    return getter.call(receiver);
	  }
	};
	return get;
}

var getExports = requireGet();
var _get = /*@__PURE__*/getDefaultExportFromCjs(getExports);

var calcPoints = function calcPoints(vertical, marks, dots, step, min, max) {
  warning(dots ? step > 0 : true, '`Slider[step]` should be a positive number in order to make Slider[dots] work.');
  var points = Object.keys(marks).map(parseFloat).sort(function (a, b) {
    return a - b;
  });
  if (dots && step) {
    for (var i = min; i <= max; i += step) {
      if (points.indexOf(i) === -1) {
        points.push(i);
      }
    }
  }
  return points;
};

var Steps = function Steps(_ref) {
  var prefixCls = _ref.prefixCls,
      vertical = _ref.vertical,
      reverse = _ref.reverse,
      marks = _ref.marks,
      dots = _ref.dots,
      step = _ref.step,
      included = _ref.included,
      lowerBound = _ref.lowerBound,
      upperBound = _ref.upperBound,
      max = _ref.max,
      min = _ref.min,
      dotStyle = _ref.dotStyle,
      activeDotStyle = _ref.activeDotStyle;

  var range = max - min;
  var elements = calcPoints(vertical, marks, dots, step, min, max).map(function (point) {
    var _classNames;

    var offset = Math.abs(point - min) / range * 100 + '%';

    var isActived = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var style = vertical ? _extends$1({}, dotStyle, _defineProperty$1({}, reverse ? 'top' : 'bottom', offset)) : _extends$1({}, dotStyle, _defineProperty$1({}, reverse ? 'right' : 'left', offset));
    if (isActived) {
      style = _extends$1({}, style, activeDotStyle);
    }

    var pointClassName = classNames((_classNames = {}, _defineProperty$1(_classNames, prefixCls + '-dot', true), _defineProperty$1(_classNames, prefixCls + '-dot-active', isActived), _defineProperty$1(_classNames, prefixCls + '-dot-reverse', reverse), _classNames));

    return React__default.createElement('span', { className: pointClassName, style: style, key: point });
  });

  return React__default.createElement(
    'div',
    { className: prefixCls + '-step' },
    elements
  );
};

Steps.propTypes = {
  prefixCls: PropTypes.string,
  activeDotStyle: PropTypes.object,
  dotStyle: PropTypes.object,
  min: PropTypes.number,
  max: PropTypes.number,
  upperBound: PropTypes.number,
  lowerBound: PropTypes.number,
  included: PropTypes.bool,
  dots: PropTypes.bool,
  step: PropTypes.number,
  marks: PropTypes.object,
  vertical: PropTypes.bool,
  reverse: PropTypes.bool
};

var Marks = function Marks(_ref) {
  var className = _ref.className,
      vertical = _ref.vertical,
      reverse = _ref.reverse,
      marks = _ref.marks,
      included = _ref.included,
      upperBound = _ref.upperBound,
      lowerBound = _ref.lowerBound,
      max = _ref.max,
      min = _ref.min,
      onClickLabel = _ref.onClickLabel;

  var marksKeys = Object.keys(marks);

  var range = max - min;
  var elements = marksKeys.map(parseFloat).sort(function (a, b) {
    return a - b;
  }).map(function (point) {
    var _classNames;

    var markPoint = marks[point];
    var markPointIsObject = typeof markPoint === 'object' && !React__default.isValidElement(markPoint);
    var markLabel = markPointIsObject ? markPoint.label : markPoint;
    if (!markLabel && markLabel !== 0) {
      return null;
    }

    var isActive = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var markClassName = classNames((_classNames = {}, _defineProperty$1(_classNames, className + '-text', true), _defineProperty$1(_classNames, className + '-text-active', isActive), _classNames));

    var bottomStyle = _defineProperty$1({
      marginBottom: '-50%'
    }, reverse ? 'top' : 'bottom', (point - min) / range * 100 + '%');

    var leftStyle = _defineProperty$1({
      transform: 'translateX(-50%)',
      msTransform: 'translateX(-50%)'
    }, reverse ? 'right' : 'left', reverse ? (point - min / 4) / range * 100 + '%' : (point - min) / range * 100 + '%');

    var style = vertical ? bottomStyle : leftStyle;
    var markStyle = markPointIsObject ? _extends$1({}, style, markPoint.style) : style;
    return React__default.createElement(
      'span',
      {
        className: markClassName,
        style: markStyle,
        key: point,
        onMouseDown: function onMouseDown(e) {
          return onClickLabel(e, point);
        },
        onTouchStart: function onTouchStart(e) {
          return onClickLabel(e, point);
        }
      },
      markLabel
    );
  });

  return React__default.createElement(
    'div',
    { className: className },
    elements
  );
};

Marks.propTypes = {
  className: PropTypes.string,
  vertical: PropTypes.bool,
  reverse: PropTypes.bool,
  marks: PropTypes.object,
  included: PropTypes.bool,
  upperBound: PropTypes.number,
  lowerBound: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  onClickLabel: PropTypes.func
};

var Handle = function (_React$Component) {
  _inherits$1(Handle, _React$Component);

  function Handle() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck$1(this, Handle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$1(this, (_ref = Handle.__proto__ || Object.getPrototypeOf(Handle)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      clickFocused: false
    }, _this.setHandleRef = function (node) {
      _this.handle = node;
    }, _this.handleMouseUp = function () {
      if (document.activeElement === _this.handle) {
        _this.setClickFocus(true);
      }
    }, _this.handleMouseDown = function () {
      // fix https://github.com/ant-design/ant-design/issues/15324
      _this.focus();
    }, _this.handleBlur = function () {
      _this.setClickFocus(false);
    }, _this.handleKeyDown = function () {
      _this.setClickFocus(false);
    }, _temp), _possibleConstructorReturn$1(_this, _ret);
  }

  _createClass$1(Handle, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // mouseup won't trigger if mouse moved out of handle,
      // so we listen on document here.
      this.onMouseUpListener = addEventListenerWrap(document, 'mouseup', this.handleMouseUp);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.onMouseUpListener) {
        this.onMouseUpListener.remove();
      }
    }
  }, {
    key: 'setClickFocus',
    value: function setClickFocus(focused) {
      this.setState({ clickFocused: focused });
    }
  }, {
    key: 'clickFocus',
    value: function clickFocus() {
      this.setClickFocus(true);
      this.focus();
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.handle.focus();
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.handle.blur();
    }
  }, {
    key: 'render',
    value: function render() {
      var _ref2, _ref3;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          vertical = _props.vertical,
          reverse = _props.reverse,
          offset = _props.offset,
          style = _props.style,
          disabled = _props.disabled,
          min = _props.min,
          max = _props.max,
          value = _props.value,
          tabIndex = _props.tabIndex,
          restProps = _objectWithoutProperties(_props, ['prefixCls', 'vertical', 'reverse', 'offset', 'style', 'disabled', 'min', 'max', 'value', 'tabIndex']);

      var className = classNames(this.props.className, _defineProperty$1({}, prefixCls + '-handle-click-focused', this.state.clickFocused));
      var positionStyle = vertical ? (_ref2 = {}, _defineProperty$1(_ref2, reverse ? 'top' : 'bottom', offset + '%'), _defineProperty$1(_ref2, reverse ? 'bottom' : 'top', 'auto'), _defineProperty$1(_ref2, 'transform', 'translateY(+50%)'), _ref2) : (_ref3 = {}, _defineProperty$1(_ref3, reverse ? 'right' : 'left', offset + '%'), _defineProperty$1(_ref3, reverse ? 'left' : 'right', 'auto'), _defineProperty$1(_ref3, 'transform', 'translateX(' + (reverse ? '+' : '-') + '50%)'), _ref3);
      var elStyle = _extends$1({}, style, positionStyle);

      var _tabIndex = tabIndex || 0;
      if (disabled || tabIndex === null) {
        _tabIndex = null;
      }

      return React__default.createElement('div', _extends$1({
        ref: this.setHandleRef,
        tabIndex: _tabIndex
      }, restProps, {
        className: className,
        style: elStyle,
        onBlur: this.handleBlur,
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleMouseDown

        // aria attribute
        , role: 'slider',
        'aria-valuemin': min,
        'aria-valuemax': max,
        'aria-valuenow': value,
        'aria-disabled': !!disabled
      }));
    }
  }]);

  return Handle;
}(React__default.Component);


Handle.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  vertical: PropTypes.bool,
  offset: PropTypes.number,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  tabIndex: PropTypes.number,
  reverse: PropTypes.bool
};

function isEventFromHandle(e, handles) {
  try {
    return Object.keys(handles).some(function (key) {
      return e.target === findDOMNode(handles[key]);
    });
  } catch (error) {
    return false;
  }
}

function isValueOutOfRange(value, _ref) {
  var min = _ref.min,
      max = _ref.max;

  return value < min || value > max;
}

function isNotTouchEvent(e) {
  return e.touches.length > 1 || e.type.toLowerCase() === 'touchend' && e.touches.length > 0;
}

function getClosestPoint(val, _ref2) {
  var marks = _ref2.marks,
      step = _ref2.step,
      min = _ref2.min,
      max = _ref2.max;

  var points = Object.keys(marks).map(parseFloat);
  if (step !== null) {
    var maxSteps = Math.floor((max - min) / step);
    var steps = Math.min((val - min) / step, maxSteps);
    var closestStep = Math.round(steps) * step + min;
    points.push(closestStep);
  }
  var diffs = points.map(function (point) {
    return Math.abs(val - point);
  });
  return points[diffs.indexOf(Math.min.apply(Math, _toConsumableArray(diffs)))];
}

function getPrecision(step) {
  var stepString = step.toString();
  var precision = 0;
  if (stepString.indexOf('.') >= 0) {
    precision = stepString.length - stepString.indexOf('.') - 1;
  }
  return precision;
}

function getMousePosition(vertical, e) {
  return vertical ? e.clientY : e.pageX;
}

function getTouchPosition(vertical, e) {
  return vertical ? e.touches[0].clientY : e.touches[0].pageX;
}

function getHandleCenterPosition(vertical, handle) {
  var coords = handle.getBoundingClientRect();
  return vertical ? coords.top + coords.height * 0.5 : window.pageXOffset + coords.left + coords.width * 0.5;
}

function ensureValueInRange(val, _ref3) {
  var max = _ref3.max,
      min = _ref3.min;

  if (val <= min) {
    return min;
  }
  if (val >= max) {
    return max;
  }
  return val;
}

function ensureValuePrecision(val, props) {
  var step = props.step;

  var closestPoint = isFinite(getClosestPoint(val, props)) ? getClosestPoint(val, props) : 0; // eslint-disable-line
  return step === null ? closestPoint : parseFloat(closestPoint.toFixed(getPrecision(step)));
}

function pauseEvent(e) {
  e.stopPropagation();
  e.preventDefault();
}

function calculateNextValue(func, value, props) {
  var operations = {
    increase: function increase(a, b) {
      return a + b;
    },
    decrease: function decrease(a, b) {
      return a - b;
    }
  };

  var indexToGet = operations[func](Object.keys(props.marks).indexOf(JSON.stringify(value)), 1);
  var keyToGet = Object.keys(props.marks)[indexToGet];

  if (props.step) {
    return operations[func](value, props.step);
  } else if (!!Object.keys(props.marks).length && !!props.marks[keyToGet]) {
    return props.marks[keyToGet];
  }
  return value;
}

function getKeyboardValueMutator(e, vertical, reverse) {
  var increase = 'increase';
  var decrease = 'decrease';
  var method = increase;
  switch (e.keyCode) {
    case KeyCode.UP:
      method = vertical && reverse ? decrease : increase;break;
    case KeyCode.RIGHT:
      method = !vertical && reverse ? decrease : increase;break;
    case KeyCode.DOWN:
      method = vertical && reverse ? increase : decrease;break;
    case KeyCode.LEFT:
      method = !vertical && reverse ? increase : decrease;break;

    case KeyCode.END:
      return function (value, props) {
        return props.max;
      };
    case KeyCode.HOME:
      return function (value, props) {
        return props.min;
      };
    case KeyCode.PAGE_UP:
      return function (value, props) {
        return value + props.step * 2;
      };
    case KeyCode.PAGE_DOWN:
      return function (value, props) {
        return value - props.step * 2;
      };

    default:
      return undefined;
  }
  return function (value, props) {
    return calculateNextValue(method, value, props);
  };
}

function noop() {}

function createSlider(Component) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    _inherits$1(ComponentEnhancer, _Component);

    function ComponentEnhancer(props) {
      _classCallCheck$1(this, ComponentEnhancer);

      var _this = _possibleConstructorReturn$1(this, (ComponentEnhancer.__proto__ || Object.getPrototypeOf(ComponentEnhancer)).call(this, props));

      _this.onMouseDown = function (e) {
        if (e.button !== 0) {
          return;
        }

        var isVertical = _this.props.vertical;
        var position = getMousePosition(isVertical, e);
        if (!isEventFromHandle(e, _this.handlesRefs)) {
          _this.dragOffset = 0;
        } else {
          var handlePosition = getHandleCenterPosition(isVertical, e.target);
          _this.dragOffset = position - handlePosition;
          position = handlePosition;
        }
        _this.removeDocumentEvents();
        _this.onStart(position);
        _this.addDocumentMouseEvents();
      };

      _this.onTouchStart = function (e) {
        if (isNotTouchEvent(e)) return;

        var isVertical = _this.props.vertical;
        var position = getTouchPosition(isVertical, e);
        if (!isEventFromHandle(e, _this.handlesRefs)) {
          _this.dragOffset = 0;
        } else {
          var handlePosition = getHandleCenterPosition(isVertical, e.target);
          _this.dragOffset = position - handlePosition;
          position = handlePosition;
        }
        _this.onStart(position);
        _this.addDocumentTouchEvents();
        pauseEvent(e);
      };

      _this.onFocus = function (e) {
        var _this$props = _this.props,
            onFocus = _this$props.onFocus,
            vertical = _this$props.vertical;

        if (isEventFromHandle(e, _this.handlesRefs)) {
          var handlePosition = getHandleCenterPosition(vertical, e.target);
          _this.dragOffset = 0;
          _this.onStart(handlePosition);
          pauseEvent(e);
          if (onFocus) {
            onFocus(e);
          }
        }
      };

      _this.onBlur = function (e) {
        var onBlur = _this.props.onBlur;

        _this.onEnd();
        if (onBlur) {
          onBlur(e);
        }
      };

      _this.onMouseUp = function () {
        if (_this.handlesRefs[_this.prevMovedHandleIndex]) {
          _this.handlesRefs[_this.prevMovedHandleIndex].clickFocus();
        }
      };

      _this.onMouseMove = function (e) {
        if (!_this.sliderRef) {
          _this.onEnd();
          return;
        }
        var position = getMousePosition(_this.props.vertical, e);
        _this.onMove(e, position - _this.dragOffset);
      };

      _this.onTouchMove = function (e) {
        if (isNotTouchEvent(e) || !_this.sliderRef) {
          _this.onEnd();
          return;
        }

        var position = getTouchPosition(_this.props.vertical, e);
        _this.onMove(e, position - _this.dragOffset);
      };

      _this.onKeyDown = function (e) {
        if (_this.sliderRef && isEventFromHandle(e, _this.handlesRefs)) {
          _this.onKeyboard(e);
        }
      };

      _this.onClickMarkLabel = function (e, value) {
        e.stopPropagation();
        _this.onChange({ value: value });
        _this.setState({ value: value }, function () {
          return _this.onEnd(true);
        });
      };

      _this.saveSlider = function (slider) {
        _this.sliderRef = slider;
      };

      var step = props.step,
          max = props.max,
          min = props.min;

      var isPointDiffEven = isFinite(max - min) ? (max - min) % step === 0 : true; // eslint-disable-line
      warning(step && Math.floor(step) === step ? isPointDiffEven : true, 'Slider[max] - Slider[min] (%s) should be a multiple of Slider[step] (%s)', max - min, step);
      _this.handlesRefs = {};
      return _this;
    }

    _createClass$1(ComponentEnhancer, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        // Snapshot testing cannot handle refs, so be sure to null-check this.
        this.document = this.sliderRef && this.sliderRef.ownerDocument;

        var _props = this.props,
            autoFocus = _props.autoFocus,
            disabled = _props.disabled;

        if (autoFocus && !disabled) {
          this.focus();
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (_get(ComponentEnhancer.prototype.__proto__ || Object.getPrototypeOf(ComponentEnhancer.prototype), 'componentWillUnmount', this)) _get(ComponentEnhancer.prototype.__proto__ || Object.getPrototypeOf(ComponentEnhancer.prototype), 'componentWillUnmount', this).call(this);
        this.removeDocumentEvents();
      }
    }, {
      key: 'getSliderStart',
      value: function getSliderStart() {
        var slider = this.sliderRef;
        var _props2 = this.props,
            vertical = _props2.vertical,
            reverse = _props2.reverse;

        var rect = slider.getBoundingClientRect();
        if (vertical) {
          return reverse ? rect.bottom : rect.top;
        }
        return window.pageXOffset + (reverse ? rect.right : rect.left);
      }
    }, {
      key: 'getSliderLength',
      value: function getSliderLength() {
        var slider = this.sliderRef;
        if (!slider) {
          return 0;
        }

        var coords = slider.getBoundingClientRect();
        return this.props.vertical ? coords.height : coords.width;
      }
    }, {
      key: 'addDocumentTouchEvents',
      value: function addDocumentTouchEvents() {
        // just work for Chrome iOS Safari and Android Browser
        this.onTouchMoveListener = addEventListenerWrap(this.document, 'touchmove', this.onTouchMove);
        this.onTouchUpListener = addEventListenerWrap(this.document, 'touchend', this.onEnd);
      }
    }, {
      key: 'addDocumentMouseEvents',
      value: function addDocumentMouseEvents() {
        this.onMouseMoveListener = addEventListenerWrap(this.document, 'mousemove', this.onMouseMove);
        this.onMouseUpListener = addEventListenerWrap(this.document, 'mouseup', this.onEnd);
      }
    }, {
      key: 'removeDocumentEvents',
      value: function removeDocumentEvents() {
        /* eslint-disable no-unused-expressions */
        this.onTouchMoveListener && this.onTouchMoveListener.remove();
        this.onTouchUpListener && this.onTouchUpListener.remove();

        this.onMouseMoveListener && this.onMouseMoveListener.remove();
        this.onMouseUpListener && this.onMouseUpListener.remove();
        /* eslint-enable no-unused-expressions */
      }
    }, {
      key: 'focus',
      value: function focus() {
        if (!this.props.disabled) {
          this.handlesRefs[0].focus();
        }
      }
    }, {
      key: 'blur',
      value: function blur() {
        var _this2 = this;

        if (!this.props.disabled) {
          Object.keys(this.handlesRefs).forEach(function (key) {
            if (_this2.handlesRefs[key] && _this2.handlesRefs[key].blur) {
              _this2.handlesRefs[key].blur();
            }
          });
        }
      }
    }, {
      key: 'calcValue',
      value: function calcValue(offset) {
        var _props3 = this.props,
            vertical = _props3.vertical,
            min = _props3.min,
            max = _props3.max;

        var ratio = Math.abs(Math.max(offset, 0) / this.getSliderLength());
        var value = vertical ? (1 - ratio) * (max - min) + min : ratio * (max - min) + min;
        return value;
      }
    }, {
      key: 'calcValueByPos',
      value: function calcValueByPos(position) {
        var sign = this.props.reverse ? -1 : 1;
        var pixelOffset = sign * (position - this.getSliderStart());
        var nextValue = this.trimAlignValue(this.calcValue(pixelOffset));
        return nextValue;
      }
    }, {
      key: 'calcOffset',
      value: function calcOffset(value) {
        var _props4 = this.props,
            min = _props4.min,
            max = _props4.max;

        var ratio = (value - min) / (max - min);
        return ratio * 100;
      }
    }, {
      key: 'saveHandle',
      value: function saveHandle(index, handle) {
        this.handlesRefs[index] = handle;
      }
    }, {
      key: 'render',
      value: function render() {
        var _classNames;

        var _props5 = this.props,
            prefixCls = _props5.prefixCls,
            className = _props5.className,
            marks = _props5.marks,
            dots = _props5.dots,
            step = _props5.step,
            included = _props5.included,
            disabled = _props5.disabled,
            vertical = _props5.vertical,
            reverse = _props5.reverse,
            min = _props5.min,
            max = _props5.max,
            children = _props5.children,
            maximumTrackStyle = _props5.maximumTrackStyle,
            style = _props5.style,
            railStyle = _props5.railStyle,
            dotStyle = _props5.dotStyle,
            activeDotStyle = _props5.activeDotStyle;

        var _get$call = _get(ComponentEnhancer.prototype.__proto__ || Object.getPrototypeOf(ComponentEnhancer.prototype), 'render', this).call(this),
            tracks = _get$call.tracks,
            handles = _get$call.handles;

        var sliderClassName = classNames(prefixCls, (_classNames = {}, _defineProperty$1(_classNames, prefixCls + '-with-marks', Object.keys(marks).length), _defineProperty$1(_classNames, prefixCls + '-disabled', disabled), _defineProperty$1(_classNames, prefixCls + '-vertical', vertical), _defineProperty$1(_classNames, className, className), _classNames));
        return React__default.createElement(
          'div',
          {
            ref: this.saveSlider,
            className: sliderClassName,
            onTouchStart: disabled ? noop : this.onTouchStart,
            onMouseDown: disabled ? noop : this.onMouseDown,
            onMouseUp: disabled ? noop : this.onMouseUp,
            onKeyDown: disabled ? noop : this.onKeyDown,
            onFocus: disabled ? noop : this.onFocus,
            onBlur: disabled ? noop : this.onBlur,
            style: style
          },
          React__default.createElement('div', {
            className: prefixCls + '-rail',
            style: _extends$1({}, maximumTrackStyle, railStyle)
          }),
          tracks,
          React__default.createElement(Steps, {
            prefixCls: prefixCls,
            vertical: vertical,
            reverse: reverse,
            marks: marks,
            dots: dots,
            step: step,
            included: included,
            lowerBound: this.getLowerBound(),
            upperBound: this.getUpperBound(),
            max: max,
            min: min,
            dotStyle: dotStyle,
            activeDotStyle: activeDotStyle
          }),
          handles,
          React__default.createElement(Marks, {
            className: prefixCls + '-mark',
            onClickLabel: disabled ? noop : this.onClickMarkLabel,
            vertical: vertical,
            marks: marks,
            included: included,
            lowerBound: this.getLowerBound(),
            upperBound: this.getUpperBound(),
            max: max,
            min: min,
            reverse: reverse
          }),
          children
        );
      }
    }]);

    return ComponentEnhancer;
  }(Component), _class.displayName = 'ComponentEnhancer(' + Component.displayName + ')', _class.propTypes = _extends$1({}, Component.propTypes, {
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    marks: PropTypes.object,
    included: PropTypes.bool,
    className: PropTypes.string,
    prefixCls: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.any,
    onBeforeChange: PropTypes.func,
    onChange: PropTypes.func,
    onAfterChange: PropTypes.func,
    handle: PropTypes.func,
    dots: PropTypes.bool,
    vertical: PropTypes.bool,
    style: PropTypes.object,
    reverse: PropTypes.bool,
    minimumTrackStyle: PropTypes.object, // just for compatibility, will be deperecate
    maximumTrackStyle: PropTypes.object, // just for compatibility, will be deperecate
    handleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),
    trackStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),
    railStyle: PropTypes.object,
    dotStyle: PropTypes.object,
    activeDotStyle: PropTypes.object,
    autoFocus: PropTypes.bool,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
  }), _class.defaultProps = _extends$1({}, Component.defaultProps, {
    prefixCls: 'rc-slider',
    className: '',
    min: 0,
    max: 100,
    step: 1,
    marks: {},
    handle: function handle(_ref) {
      var index = _ref.index,
          restProps = _objectWithoutProperties(_ref, ['index']);

      delete restProps.dragging;
      if (restProps.value === null) {
        return null;
      }

      return React__default.createElement(Handle, _extends$1({}, restProps, { key: index }));
    },

    onBeforeChange: noop,
    onChange: noop,
    onAfterChange: noop,
    included: true,
    disabled: false,
    dots: false,
    vertical: false,
    reverse: false,
    trackStyle: [{}],
    handleStyle: [{}],
    railStyle: {},
    dotStyle: {},
    activeDotStyle: {}
  }), _temp;
}

var Slider$1 = function (_React$Component) {
  _inherits$1(Slider, _React$Component);

  function Slider(props) {
    _classCallCheck$1(this, Slider);

    var _this = _possibleConstructorReturn$1(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

    _this.onEnd = function (force) {
      var dragging = _this.state.dragging;

      _this.removeDocumentEvents();
      if (dragging || force) {
        _this.props.onAfterChange(_this.getValue());
      }
      _this.setState({ dragging: false });
    };

    var defaultValue = props.defaultValue !== undefined ? props.defaultValue : props.min;
    var value = props.value !== undefined ? props.value : defaultValue;

    _this.state = {
      value: _this.trimAlignValue(value),
      dragging: false
    };

    warning(!('minimumTrackStyle' in props), 'minimumTrackStyle will be deprecated, please use trackStyle instead.');
    warning(!('maximumTrackStyle' in props), 'maximumTrackStyle will be deprecated, please use railStyle instead.');
    return _this;
  }

  _createClass$1(Slider, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (!('value' in this.props || 'min' in this.props || 'max' in this.props)) {
        return;
      }
      var _props = this.props,
          value = _props.value,
          onChange = _props.onChange;

      var theValue = value !== undefined ? value : prevState.value;
      var nextValue = this.trimAlignValue(theValue, this.props);
      if (nextValue !== prevState.value) {
        // eslint-disable-next-line
        this.setState({ value: nextValue });
        if (isValueOutOfRange(theValue, this.props)) {
          onChange(nextValue);
        }
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      var props = this.props;
      var isNotControlled = !('value' in props);
      var nextState = state.value > this.props.max ? _extends$1({}, state, { value: this.props.max }) : state;
      if (isNotControlled) {
        this.setState(nextState);
      }

      var changedValue = nextState.value;
      props.onChange(changedValue);
    }
  }, {
    key: 'onStart',
    value: function onStart(position) {
      this.setState({ dragging: true });
      var props = this.props;
      var prevValue = this.getValue();
      props.onBeforeChange(prevValue);

      var value = this.calcValueByPos(position);
      this.startValue = value;
      this.startPosition = position;

      if (value === prevValue) return;

      this.prevMovedHandleIndex = 0;

      this.onChange({ value: value });
    }
  }, {
    key: 'onMove',
    value: function onMove(e, position) {
      pauseEvent(e);
      var oldValue = this.state.value;

      var value = this.calcValueByPos(position);
      if (value === oldValue) return;

      this.onChange({ value: value });
    }
  }, {
    key: 'onKeyboard',
    value: function onKeyboard(e) {
      var _props2 = this.props,
          reverse = _props2.reverse,
          vertical = _props2.vertical;

      var valueMutator = getKeyboardValueMutator(e, vertical, reverse);
      if (valueMutator) {
        pauseEvent(e);
        var state = this.state;
        var oldValue = state.value;
        var mutatedValue = valueMutator(oldValue, this.props);
        var value = this.trimAlignValue(mutatedValue);
        if (value === oldValue) return;

        this.onChange({ value: value });
        this.props.onAfterChange(value);
        this.onEnd();
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.state.value;
    }
  }, {
    key: 'getLowerBound',
    value: function getLowerBound() {
      return this.props.min;
    }
  }, {
    key: 'getUpperBound',
    value: function getUpperBound() {
      return this.state.value;
    }
  }, {
    key: 'trimAlignValue',
    value: function trimAlignValue(v) {
      var nextProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (v === null) {
        return null;
      }

      var mergedProps = _extends$1({}, this.props, nextProps);
      var val = ensureValueInRange(v, mergedProps);
      return ensureValuePrecision(val, mergedProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props3 = this.props,
          prefixCls = _props3.prefixCls,
          vertical = _props3.vertical,
          included = _props3.included,
          disabled = _props3.disabled,
          minimumTrackStyle = _props3.minimumTrackStyle,
          trackStyle = _props3.trackStyle,
          handleStyle = _props3.handleStyle,
          tabIndex = _props3.tabIndex,
          min = _props3.min,
          max = _props3.max,
          reverse = _props3.reverse,
          handleGenerator = _props3.handle;
      var _state = this.state,
          value = _state.value,
          dragging = _state.dragging;

      var offset = this.calcOffset(value);
      var handle = handleGenerator({
        className: prefixCls + '-handle',
        prefixCls: prefixCls,
        vertical: vertical,
        offset: offset,
        value: value,
        dragging: dragging,
        disabled: disabled,
        min: min,
        max: max,
        reverse: reverse,
        index: 0,
        tabIndex: tabIndex,
        style: handleStyle[0] || handleStyle,
        ref: function ref(h) {
          return _this2.saveHandle(0, h);
        }
      });

      var _trackStyle = trackStyle[0] || trackStyle;
      var track = React__default.createElement(Track, {
        className: prefixCls + '-track',
        vertical: vertical,
        included: included,
        offset: 0,
        reverse: reverse,
        length: offset,
        style: _extends$1({}, minimumTrackStyle, _trackStyle)
      });

      return { tracks: track, handles: handle };
    }
  }]);

  return Slider;
}(React__default.Component);

Slider$1.propTypes = {
  defaultValue: PropTypes.number,
  value: PropTypes.number,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  tabIndex: PropTypes.number,
  reverse: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number
};


var RcSlider = createSlider(Slider$1);

var _trimAlignValue = function _trimAlignValue(_ref) {
  var value = _ref.value,
      handle = _ref.handle,
      bounds = _ref.bounds,
      props = _ref.props;
  var allowCross = props.allowCross,
      pushable = props.pushable;

  var thershold = Number(pushable);
  var valInRange = ensureValueInRange(value, props);
  var valNotConflict = valInRange;
  if (!allowCross && handle != null && bounds !== undefined) {
    if (handle > 0 && valInRange <= bounds[handle - 1] + thershold) {
      valNotConflict = bounds[handle - 1] + thershold;
    }
    if (handle < bounds.length - 1 && valInRange >= bounds[handle + 1] - thershold) {
      valNotConflict = bounds[handle + 1] - thershold;
    }
  }
  return ensureValuePrecision(valNotConflict, props);
};

var Range = function (_React$Component) {
  _inherits$1(Range, _React$Component);

  function Range(props) {
    _classCallCheck$1(this, Range);

    var _this = _possibleConstructorReturn$1(this, (Range.__proto__ || Object.getPrototypeOf(Range)).call(this, props));

    _this.onEnd = function (force) {
      var handle = _this.state.handle;

      _this.removeDocumentEvents();

      if (handle !== null || force) {
        _this.props.onAfterChange(_this.getValue());
      }

      _this.setState({
        handle: null
      });
    };

    var count = props.count,
        min = props.min,
        max = props.max;

    var initialValue = Array.apply(undefined, _toConsumableArray(Array(count + 1))).map(function () {
      return min;
    });
    var defaultValue = 'defaultValue' in props ? props.defaultValue : initialValue;
    var value = props.value !== undefined ? props.value : defaultValue;
    var bounds = value.map(function (v, i) {
      return _trimAlignValue({
        value: v,
        handle: i,
        props: props
      });
    });
    var recent = bounds[0] === max ? 0 : bounds.length - 1;

    _this.state = {
      handle: null,
      recent: recent,
      bounds: bounds
    };
    return _this;
  }

  _createClass$1(Range, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (!('value' in this.props || 'min' in this.props || 'max' in this.props)) {
        return;
      }
      if (this.props.min === prevProps.min && this.props.max === prevProps.max && shallowEqual(this.props.value, prevProps.value)) {
        return;
      }
      var _props = this.props,
          onChange = _props.onChange,
          value = _props.value;

      var currentValue = value || prevState.bounds;
      if (currentValue.some(function (v) {
        return isValueOutOfRange(v, _this2.props);
      })) {
        var newValues = currentValue.map(function (v) {
          return ensureValueInRange(v, _this2.props);
        });
        onChange(newValues);
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      var props = this.props;
      var isNotControlled = !('value' in props);
      if (isNotControlled) {
        this.setState(state);
      } else {
        var controlledState = {};

        ['handle', 'recent'].forEach(function (item) {
          if (state[item] !== undefined) {
            controlledState[item] = state[item];
          }
        });

        if (Object.keys(controlledState).length) {
          this.setState(controlledState);
        }
      }

      var data = _extends$1({}, this.state, state);
      var changedValue = data.bounds;
      props.onChange(changedValue);
    }
  }, {
    key: 'onStart',
    value: function onStart(position) {
      var props = this.props;
      var state = this.state;
      var bounds = this.getValue();
      props.onBeforeChange(bounds);

      var value = this.calcValueByPos(position);
      this.startValue = value;
      this.startPosition = position;

      var closestBound = this.getClosestBound(value);
      this.prevMovedHandleIndex = this.getBoundNeedMoving(value, closestBound);

      this.setState({
        handle: this.prevMovedHandleIndex,
        recent: this.prevMovedHandleIndex
      });

      var prevValue = bounds[this.prevMovedHandleIndex];
      if (value === prevValue) return;

      var nextBounds = [].concat(_toConsumableArray(state.bounds));
      nextBounds[this.prevMovedHandleIndex] = value;
      this.onChange({ bounds: nextBounds });
    }
  }, {
    key: 'onMove',
    value: function onMove(e, position) {
      pauseEvent(e);
      var state = this.state;

      var value = this.calcValueByPos(position);
      var oldValue = state.bounds[state.handle];
      if (value === oldValue) return;

      this.moveTo(value);
    }
  }, {
    key: 'onKeyboard',
    value: function onKeyboard(e) {
      var _props2 = this.props,
          reverse = _props2.reverse,
          vertical = _props2.vertical;

      var valueMutator = getKeyboardValueMutator(e, vertical, reverse);

      if (valueMutator) {
        pauseEvent(e);
        var state = this.state,
            props = this.props;
        var bounds = state.bounds,
            handle = state.handle;

        var oldValue = bounds[handle === null ? state.recent : handle];
        var mutatedValue = valueMutator(oldValue, props);
        var value = _trimAlignValue({
          value: mutatedValue,
          handle: handle,
          bounds: state.bounds,
          props: props
        });
        if (value === oldValue) return;
        var isFromKeyboardEvent = true;
        this.moveTo(value, isFromKeyboardEvent);
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.state.bounds;
    }
  }, {
    key: 'getClosestBound',
    value: function getClosestBound(value) {
      var bounds = this.state.bounds;

      var closestBound = 0;
      for (var i = 1; i < bounds.length - 1; ++i) {
        if (value >= bounds[i]) {
          closestBound = i;
        }
      }
      if (Math.abs(bounds[closestBound + 1] - value) < Math.abs(bounds[closestBound] - value)) {
        closestBound += 1;
      }
      return closestBound;
    }
  }, {
    key: 'getBoundNeedMoving',
    value: function getBoundNeedMoving(value, closestBound) {
      var _state = this.state,
          bounds = _state.bounds,
          recent = _state.recent;

      var boundNeedMoving = closestBound;
      var isAtTheSamePoint = bounds[closestBound + 1] === bounds[closestBound];

      if (isAtTheSamePoint && bounds[recent] === bounds[closestBound]) {
        boundNeedMoving = recent;
      }

      if (isAtTheSamePoint && value !== bounds[closestBound + 1]) {
        boundNeedMoving = value < bounds[closestBound + 1] ? closestBound : closestBound + 1;
      }
      return boundNeedMoving;
    }
  }, {
    key: 'getLowerBound',
    value: function getLowerBound() {
      return this.state.bounds[0];
    }
  }, {
    key: 'getUpperBound',
    value: function getUpperBound() {
      var bounds = this.state.bounds;

      return bounds[bounds.length - 1];
    }

    /**
     * Returns an array of possible slider points, taking into account both
     * `marks` and `step`. The result is cached.
     */

  }, {
    key: 'getPoints',
    value: function getPoints() {
      var _props3 = this.props,
          marks = _props3.marks,
          step = _props3.step,
          min = _props3.min,
          max = _props3.max;

      var cache = this._getPointsCache;
      if (!cache || cache.marks !== marks || cache.step !== step) {
        var pointsObject = _extends$1({}, marks);
        if (step !== null) {
          for (var point = min; point <= max; point += step) {
            pointsObject[point] = point;
          }
        }
        var points = Object.keys(pointsObject).map(parseFloat);
        points.sort(function (a, b) {
          return a - b;
        });
        this._getPointsCache = { marks: marks, step: step, points: points };
      }
      return this._getPointsCache.points;
    }
  }, {
    key: 'moveTo',
    value: function moveTo(value, isFromKeyboardEvent) {
      var _this3 = this;

      var state = this.state,
          props = this.props;

      var nextBounds = [].concat(_toConsumableArray(state.bounds));
      var handle = state.handle === null ? state.recent : state.handle;
      nextBounds[handle] = value;
      var nextHandle = handle;
      if (props.pushable !== false) {
        this.pushSurroundingHandles(nextBounds, nextHandle);
      } else if (props.allowCross) {
        nextBounds.sort(function (a, b) {
          return a - b;
        });
        nextHandle = nextBounds.indexOf(value);
      }
      this.onChange({
        recent: nextHandle,
        handle: nextHandle,
        bounds: nextBounds
      });
      if (isFromKeyboardEvent) {
        // known problem: because setState is async,
        // so trigger focus will invoke handler's onEnd and another handler's onStart too early,
        // cause onBeforeChange and onAfterChange receive wrong value.
        // here use setState callback to hack，but not elegant
        this.props.onAfterChange(nextBounds);
        this.setState({}, function () {
          _this3.handlesRefs[nextHandle].focus();
        });
        this.onEnd();
      }
    }
  }, {
    key: 'pushSurroundingHandles',
    value: function pushSurroundingHandles(bounds, handle) {
      var value = bounds[handle];
      var threshold = this.props.pushable;

      threshold = Number(threshold);

      var direction = 0;
      if (bounds[handle + 1] - value < threshold) {
        direction = 1; // push to right
      }
      if (value - bounds[handle - 1] < threshold) {
        direction = -1; // push to left
      }

      if (direction === 0) {
        return;
      }

      var nextHandle = handle + direction;
      var diffToNext = direction * (bounds[nextHandle] - value);
      if (!this.pushHandle(bounds, nextHandle, direction, threshold - diffToNext)) {
        // revert to original value if pushing is impossible
        bounds[handle] = bounds[nextHandle] - direction * threshold;
      }
    }
  }, {
    key: 'pushHandle',
    value: function pushHandle(bounds, handle, direction, amount) {
      var originalValue = bounds[handle];
      var currentValue = bounds[handle];
      while (direction * (currentValue - originalValue) < amount) {
        if (!this.pushHandleOnePoint(bounds, handle, direction)) {
          // can't push handle enough to create the needed `amount` gap, so we
          // revert its position to the original value
          bounds[handle] = originalValue;
          return false;
        }
        currentValue = bounds[handle];
      }
      // the handle was pushed enough to create the needed `amount` gap
      return true;
    }
  }, {
    key: 'pushHandleOnePoint',
    value: function pushHandleOnePoint(bounds, handle, direction) {
      var points = this.getPoints();
      var pointIndex = points.indexOf(bounds[handle]);
      var nextPointIndex = pointIndex + direction;
      if (nextPointIndex >= points.length || nextPointIndex < 0) {
        // reached the minimum or maximum available point, can't push anymore
        return false;
      }
      var nextHandle = handle + direction;
      var nextValue = points[nextPointIndex];
      var threshold = this.props.pushable;

      var diffToNext = direction * (bounds[nextHandle] - nextValue);
      if (!this.pushHandle(bounds, nextHandle, direction, threshold - diffToNext)) {
        // couldn't push next handle, so we won't push this one either
        return false;
      }
      // push the handle
      bounds[handle] = nextValue;
      return true;
    }
  }, {
    key: 'trimAlignValue',
    value: function trimAlignValue(value) {
      var _state2 = this.state,
          handle = _state2.handle,
          bounds = _state2.bounds;

      return _trimAlignValue({
        value: value,
        handle: handle,
        bounds: bounds,
        props: this.props
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _state3 = this.state,
          handle = _state3.handle,
          bounds = _state3.bounds;
      var _props4 = this.props,
          prefixCls = _props4.prefixCls,
          vertical = _props4.vertical,
          included = _props4.included,
          disabled = _props4.disabled,
          min = _props4.min,
          max = _props4.max,
          reverse = _props4.reverse,
          handleGenerator = _props4.handle,
          trackStyle = _props4.trackStyle,
          handleStyle = _props4.handleStyle,
          tabIndex = _props4.tabIndex;


      var offsets = bounds.map(function (v) {
        return _this4.calcOffset(v);
      });

      var handleClassName = prefixCls + '-handle';
      var handles = bounds.map(function (v, i) {
        var _classNames;

        var _tabIndex = tabIndex[i] || 0;
        if (disabled || tabIndex[i] === null) {
          _tabIndex = null;
        }
        return handleGenerator({
          className: classNames((_classNames = {}, _defineProperty$1(_classNames, handleClassName, true), _defineProperty$1(_classNames, handleClassName + '-' + (i + 1), true), _classNames)),
          prefixCls: prefixCls,
          vertical: vertical,
          offset: offsets[i],
          value: v,
          dragging: handle === i,
          index: i,
          tabIndex: _tabIndex,
          min: min,
          max: max,
          reverse: reverse,
          disabled: disabled,
          style: handleStyle[i],
          ref: function ref(h) {
            return _this4.saveHandle(i, h);
          }
        });
      });

      var tracks = bounds.slice(0, -1).map(function (_, index) {
        var _classNames2;

        var i = index + 1;
        var trackClassName = classNames((_classNames2 = {}, _defineProperty$1(_classNames2, prefixCls + '-track', true), _defineProperty$1(_classNames2, prefixCls + '-track-' + i, true), _classNames2));
        return React__default.createElement(Track, {
          className: trackClassName,
          vertical: vertical,
          reverse: reverse,
          included: included,
          offset: offsets[i - 1],
          length: offsets[i] - offsets[i - 1],
          style: trackStyle[index],
          key: i
        });
      });

      return { tracks: tracks, handles: handles };
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, state) {
      if ('value' in props || 'min' in props || 'max' in props) {
        var value = props.value || state.bounds;
        var nextBounds = value.map(function (v, i) {
          return _trimAlignValue({
            value: v,
            handle: i,
            bounds: state.bounds,
            props: props
          });
        });
        if (nextBounds.length === state.bounds.length && nextBounds.every(function (v, i) {
          return v === state.bounds[i];
        })) {
          return null;
        }
        return _extends$1({}, state, {
          bounds: nextBounds
        });
      }
      return null;
    }
  }]);

  return Range;
}(React__default.Component);

Range.displayName = 'Range';
Range.propTypes = {
  autoFocus: PropTypes.bool,
  defaultValue: PropTypes.arrayOf(PropTypes.number),
  value: PropTypes.arrayOf(PropTypes.number),
  count: PropTypes.number,
  pushable: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  allowCross: PropTypes.bool,
  disabled: PropTypes.bool,
  reverse: PropTypes.bool,
  tabIndex: PropTypes.arrayOf(PropTypes.number),
  min: PropTypes.number,
  max: PropTypes.number
};
Range.defaultProps = {
  count: 1,
  allowCross: true,
  pushable: false,
  tabIndex: []
};


polyfill(Range);

var RcRange = createSlider(Range);

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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

var Slider = /*#__PURE__*/function (_React$Component) {
  _inherits(Slider, _React$Component);

  var _super = _createSuper(Slider);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _super.call(this, props);

    _this.toggleTooltipVisible = function (index, visible) {
      _this.setState(function (_ref) {
        var visibles = _ref.visibles;
        return {
          visibles: _extends(_extends({}, visibles), _defineProperty({}, index, visible))
        };
      });
    };

    _this.handleWithTooltip = function (_a) {
      var tooltipPrefixCls = _a.tooltipPrefixCls,
          prefixCls = _a.prefixCls,
          _b = _a.info,
          value = _b.value,
          dragging = _b.dragging,
          index = _b.index,
          restProps = __rest(_b, ["value", "dragging", "index"]);

      var _this$props = _this.props,
          tipFormatter = _this$props.tipFormatter,
          tooltipVisible = _this$props.tooltipVisible,
          tooltipPlacement = _this$props.tooltipPlacement,
          getTooltipPopupContainer = _this$props.getTooltipPopupContainer;
      var visibles = _this.state.visibles;
      var isTipFormatter = tipFormatter ? visibles[index] || dragging : false;
      var visible = tooltipVisible || tooltipVisible === undefined && isTipFormatter;
      return /*#__PURE__*/React.createElement(Tooltip, {
        prefixCls: tooltipPrefixCls,
        title: tipFormatter ? tipFormatter(value) : '',
        visible: visible,
        placement: tooltipPlacement || 'top',
        transitionName: "zoom-down",
        key: index,
        overlayClassName: "".concat(prefixCls, "-tooltip"),
        getPopupContainer: getTooltipPopupContainer || function () {
          return document.body;
        }
      }, /*#__PURE__*/React.createElement(Handle, _extends({}, restProps, {
        value: value,
        onMouseEnter: function onMouseEnter() {
          return _this.toggleTooltipVisible(index, true);
        },
        onMouseLeave: function onMouseLeave() {
          return _this.toggleTooltipVisible(index, false);
        }
      })));
    };

    _this.saveSlider = function (node) {
      _this.rcSlider = node;
    };

    _this.renderSlider = function (_ref2) {
      var getPrefixCls = _ref2.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          customizeTooltipPrefixCls = _a.tooltipPrefixCls,
          range = _a.range,
          restProps = __rest(_a, ["prefixCls", "tooltipPrefixCls", "range"]);

      var prefixCls = getPrefixCls('slider', customizePrefixCls);
      var tooltipPrefixCls = getPrefixCls('tooltip', customizeTooltipPrefixCls);

      if (range) {
        return /*#__PURE__*/React.createElement(RcRange, _extends({}, restProps, {
          ref: _this.saveSlider,
          handle: function handle(info) {
            return _this.handleWithTooltip({
              tooltipPrefixCls: tooltipPrefixCls,
              prefixCls: prefixCls,
              info: info
            });
          },
          prefixCls: prefixCls,
          tooltipPrefixCls: tooltipPrefixCls
        }));
      }

      return /*#__PURE__*/React.createElement(RcSlider, _extends({}, restProps, {
        ref: _this.saveSlider,
        handle: function handle(info) {
          return _this.handleWithTooltip({
            tooltipPrefixCls: tooltipPrefixCls,
            prefixCls: prefixCls,
            info: info
          });
        },
        prefixCls: prefixCls,
        tooltipPrefixCls: tooltipPrefixCls
      }));
    };

    _this.state = {
      visibles: {}
    };
    return _this;
  }

  _createClass(Slider, [{
    key: "focus",
    value: function focus() {
      this.rcSlider.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.rcSlider.blur();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderSlider);
    }
  }]);

  return Slider;
}(React.Component);
Slider.defaultProps = {
  tipFormatter: function tipFormatter(value) {
    return value.toString();
  }
};

export { Slider as default };
