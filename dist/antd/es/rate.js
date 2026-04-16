import { n, P as PropTypes, c as classNames, C as ConfigConsumer, p as propTypesExports } from '../../config-provider.js';
import * as React from 'react';
import React__default from 'react';
import ReactDOM__default from 'react-dom';
import { K as KeyCode, p as polyfill } from '../../menu.js';
import { o as omit } from '../../input.js';
import { I as Icon } from '../../icon.js';
import { T as Tooltip } from '../../index8.js';

var css = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-rate {\n  box-sizing: border-box;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  font-feature-settings: 'tnum';\n  display: inline-block;\n  margin: 0;\n  padding: 0;\n  color: #fadb14;\n  font-size: 20px;\n  line-height: unset;\n  list-style: none;\n  outline: none;\n}\n.ant-rate-disabled .ant-rate-star {\n  cursor: default;\n}\n.ant-rate-disabled .ant-rate-star:hover {\n  transform: scale(1);\n}\n.ant-rate-star {\n  position: relative;\n  display: inline-block;\n  margin: 0;\n  padding: 0;\n  color: inherit;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.ant-rate-star:not(:last-child) {\n  margin-right: 8px;\n}\n.ant-rate-star > div:focus {\n  outline: 0;\n}\n.ant-rate-star > div:hover,\n.ant-rate-star > div:focus {\n  transform: scale(1.1);\n}\n.ant-rate-star-first,\n.ant-rate-star-second {\n  color: #e8e8e8;\n  transition: all 0.3s;\n  user-select: none;\n}\n.ant-rate-star-first .anticon,\n.ant-rate-star-second .anticon {\n  vertical-align: middle;\n}\n.ant-rate-star-first {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  opacity: 0;\n}\n.ant-rate-star-half .ant-rate-star-first,\n.ant-rate-star-half .ant-rate-star-second {\n  opacity: 1;\n}\n.ant-rate-star-half .ant-rate-star-first,\n.ant-rate-star-full .ant-rate-star-second {\n  color: inherit;\n}\n.ant-rate-text {\n  display: inline-block;\n  margin-left: 8px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=index.css.map */";
n(css,{"prepend":true});

/* eslint-disable import/prefer-default-export */
function getScroll(w, top) {
  var ret = top ? w.pageYOffset : w.pageXOffset;
  var method = 'scrollLeft';

  if (typeof ret !== 'number') {
    var d = w.document; // ie6,7,8 standard mode

    ret = d.documentElement[method];

    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }

  return ret;
}

function getClientPosition(elem) {
  var x;
  var y;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement;
  var box = elem.getBoundingClientRect();
  x = box.left;
  y = box.top;
  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;
  return {
    left: x,
    top: y
  };
}

function getOffsetLeft(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScroll(w);
  return pos.left;
}

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$2(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$2(Constructor.prototype, protoProps); return Constructor; }

function _possibleConstructorReturn$2(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$2(self); }

function _getPrototypeOf$2(o) { _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$2(o); }

function _assertThisInitialized$2(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$2(subClass, superClass); }

function _setPrototypeOf$2(o, p) { _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$2(o, p); }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Star =
/*#__PURE__*/
function (_React$Component) {
  _inherits$2(Star, _React$Component);

  function Star() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck$2(this, Star);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn$2(this, (_getPrototypeOf2 = _getPrototypeOf$2(Star)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty$1(_assertThisInitialized$2(_this), "onHover", function (e) {
      var _this$props = _this.props,
          onHover = _this$props.onHover,
          index = _this$props.index;
      onHover(e, index);
    });

    _defineProperty$1(_assertThisInitialized$2(_this), "onClick", function (e) {
      var _this$props2 = _this.props,
          onClick = _this$props2.onClick,
          index = _this$props2.index;
      onClick(e, index);
    });

    _defineProperty$1(_assertThisInitialized$2(_this), "onKeyDown", function (e) {
      var _this$props3 = _this.props,
          onClick = _this$props3.onClick,
          index = _this$props3.index;

      if (e.keyCode === 13) {
        onClick(e, index);
      }
    });

    return _this;
  }

  _createClass$2(Star, [{
    key: "getClassName",
    value: function getClassName() {
      var _this$props4 = this.props,
          prefixCls = _this$props4.prefixCls,
          index = _this$props4.index,
          value = _this$props4.value,
          allowHalf = _this$props4.allowHalf,
          focused = _this$props4.focused;
      var starValue = index + 1;
      var className = prefixCls;

      if (value === 0 && index === 0 && focused) {
        className += " ".concat(prefixCls, "-focused");
      } else if (allowHalf && value + 0.5 === starValue) {
        className += " ".concat(prefixCls, "-half ").concat(prefixCls, "-active");

        if (focused) {
          className += " ".concat(prefixCls, "-focused");
        }
      } else {
        className += starValue <= value ? " ".concat(prefixCls, "-full") : " ".concat(prefixCls, "-zero");

        if (starValue === value && focused) {
          className += " ".concat(prefixCls, "-focused");
        }
      }

      return className;
    }
  }, {
    key: "render",
    value: function render() {
      var onHover = this.onHover,
          onClick = this.onClick,
          onKeyDown = this.onKeyDown;
      var _this$props5 = this.props,
          disabled = _this$props5.disabled,
          prefixCls = _this$props5.prefixCls,
          character = _this$props5.character,
          characterRender = _this$props5.characterRender,
          index = _this$props5.index,
          count = _this$props5.count,
          value = _this$props5.value;
      var start = React__default.createElement("li", {
        className: this.getClassName()
      }, React__default.createElement("div", {
        onClick: disabled ? null : onClick,
        onKeyDown: disabled ? null : onKeyDown,
        onMouseMove: disabled ? null : onHover,
        role: "radio",
        "aria-checked": value > index ? 'true' : 'false',
        "aria-posinset": index + 1,
        "aria-setsize": count,
        tabIndex: 0
      }, React__default.createElement("div", {
        className: "".concat(prefixCls, "-first")
      }, character), React__default.createElement("div", {
        className: "".concat(prefixCls, "-second")
      }, character)));

      if (characterRender) {
        start = characterRender(start, this.props);
      }

      return start;
    }
  }]);

  return Star;
}(React__default.Component);

_defineProperty$1(Star, "propTypes", {
  value: PropTypes.number,
  index: PropTypes.number,
  prefixCls: PropTypes.string,
  allowHalf: PropTypes.bool,
  disabled: PropTypes.bool,
  onHover: PropTypes.func,
  onClick: PropTypes.func,
  character: PropTypes.node,
  characterRender: PropTypes.func,
  focused: PropTypes.bool,
  count: PropTypes.number
});

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); if (staticProps) _defineProperties$1(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$1(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$1(self); }

function _getPrototypeOf$1(o) { _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$1(o); }

function _assertThisInitialized$1(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$1(subClass, superClass); }

function _setPrototypeOf$1(o, p) { _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$1(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function noop() {}

var Rate$1 =
/*#__PURE__*/
function (_React$Component) {
  _inherits$1(Rate, _React$Component);

  function Rate(props) {
    var _this;

    _classCallCheck$1(this, Rate);

    _this = _possibleConstructorReturn$1(this, _getPrototypeOf$1(Rate).call(this, props));

    _defineProperty(_assertThisInitialized$1(_this), "onHover", function (event, index) {
      var onHoverChange = _this.props.onHoverChange;

      var hoverValue = _this.getStarValue(index, event.pageX);

      var cleanedValue = _this.state.cleanedValue;

      if (hoverValue !== cleanedValue) {
        _this.setState({
          hoverValue: hoverValue,
          cleanedValue: null
        });
      }

      onHoverChange(hoverValue);
    });

    _defineProperty(_assertThisInitialized$1(_this), "onMouseLeave", function () {
      var onHoverChange = _this.props.onHoverChange;

      _this.setState({
        hoverValue: undefined,
        cleanedValue: null
      });

      onHoverChange(undefined);
    });

    _defineProperty(_assertThisInitialized$1(_this), "onClick", function (event, index) {
      var allowClear = _this.props.allowClear;
      var value = _this.state.value;

      var newValue = _this.getStarValue(index, event.pageX);

      var isReset = false;

      if (allowClear) {
        isReset = newValue === value;
      }

      _this.onMouseLeave(true);

      _this.changeValue(isReset ? 0 : newValue);

      _this.setState({
        cleanedValue: isReset ? newValue : null
      });
    });

    _defineProperty(_assertThisInitialized$1(_this), "onFocus", function () {
      var onFocus = _this.props.onFocus;

      _this.setState({
        focused: true
      });

      if (onFocus) {
        onFocus();
      }
    });

    _defineProperty(_assertThisInitialized$1(_this), "onBlur", function () {
      var onBlur = _this.props.onBlur;

      _this.setState({
        focused: false
      });

      if (onBlur) {
        onBlur();
      }
    });

    _defineProperty(_assertThisInitialized$1(_this), "onKeyDown", function (event) {
      var keyCode = event.keyCode;
      var _this$props = _this.props,
          count = _this$props.count,
          allowHalf = _this$props.allowHalf,
          onKeyDown = _this$props.onKeyDown;
      var value = _this.state.value;

      if (keyCode === KeyCode.RIGHT && value < count) {
        if (allowHalf) {
          value += 0.5;
        } else {
          value += 1;
        }

        _this.changeValue(value);

        event.preventDefault();
      } else if (keyCode === KeyCode.LEFT && value > 0) {
        if (allowHalf) {
          value -= 0.5;
        } else {
          value -= 1;
        }

        _this.changeValue(value);

        event.preventDefault();
      }

      if (onKeyDown) {
        onKeyDown(event);
      }
    });

    _defineProperty(_assertThisInitialized$1(_this), "saveRef", function (index) {
      return function (node) {
        _this.stars[index] = node;
      };
    });

    _defineProperty(_assertThisInitialized$1(_this), "saveRate", function (node) {
      _this.rate = node;
    });

    var _value = props.value;

    if (_value === undefined) {
      _value = props.defaultValue;
    }

    _this.stars = {};
    _this.state = {
      value: _value,
      focused: false,
      cleanedValue: null
    };
    return _this;
  }

  _createClass$1(Rate, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          autoFocus = _this$props2.autoFocus,
          disabled = _this$props2.disabled;

      if (autoFocus && !disabled) {
        this.focus();
      }
    }
  }, {
    key: "getStarDOM",
    value: function getStarDOM(index) {
      return ReactDOM__default.findDOMNode(this.stars[index]);
    }
  }, {
    key: "getStarValue",
    value: function getStarValue(index, x) {
      var allowHalf = this.props.allowHalf;
      var value = index + 1;

      if (allowHalf) {
        var starEle = this.getStarDOM(index);
        var leftDis = getOffsetLeft(starEle);
        var width = starEle.clientWidth;

        if (x - leftDis < width / 2) {
          value -= 0.5;
        }
      }

      return value;
    }
  }, {
    key: "focus",
    value: function focus() {
      var disabled = this.props.disabled;

      if (!disabled) {
        this.rate.focus();
      }
    }
  }, {
    key: "blur",
    value: function blur() {
      var disabled = this.props.disabled;

      if (!disabled) {
        this.rate.blur();
      }
    }
  }, {
    key: "changeValue",
    value: function changeValue(value) {
      var onChange = this.props.onChange;

      if (!('value' in this.props)) {
        this.setState({
          value: value
        });
      }

      onChange(value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          count = _this$props3.count,
          allowHalf = _this$props3.allowHalf,
          style = _this$props3.style,
          prefixCls = _this$props3.prefixCls,
          disabled = _this$props3.disabled,
          className = _this$props3.className,
          character = _this$props3.character,
          characterRender = _this$props3.characterRender,
          tabIndex = _this$props3.tabIndex;
      var _this$state = this.state,
          value = _this$state.value,
          hoverValue = _this$state.hoverValue,
          focused = _this$state.focused;
      var stars = [];
      var disabledClass = disabled ? "".concat(prefixCls, "-disabled") : '';

      for (var index = 0; index < count; index++) {
        stars.push(React__default.createElement(Star, {
          ref: this.saveRef(index),
          index: index,
          count: count,
          disabled: disabled,
          prefixCls: "".concat(prefixCls, "-star"),
          allowHalf: allowHalf,
          value: hoverValue === undefined ? value : hoverValue,
          onClick: this.onClick,
          onHover: this.onHover,
          key: index,
          character: character,
          characterRender: characterRender,
          focused: focused
        }));
      }

      return React__default.createElement("ul", {
        className: classNames(prefixCls, disabledClass, className),
        style: style,
        onMouseLeave: disabled ? null : this.onMouseLeave,
        tabIndex: disabled ? -1 : tabIndex,
        onFocus: disabled ? null : this.onFocus,
        onBlur: disabled ? null : this.onBlur,
        onKeyDown: disabled ? null : this.onKeyDown,
        ref: this.saveRate,
        role: "radiogroup"
      }, stars);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, state) {
      if ('value' in nextProps && nextProps.value !== undefined) {
        return _objectSpread({}, state, {
          value: nextProps.value
        });
      }

      return state;
    }
  }]);

  return Rate;
}(React__default.Component);

_defineProperty(Rate$1, "propTypes", {
  disabled: PropTypes.bool,
  value: PropTypes.number,
  defaultValue: PropTypes.number,
  count: PropTypes.number,
  allowHalf: PropTypes.bool,
  allowClear: PropTypes.bool,
  style: PropTypes.object,
  prefixCls: PropTypes.string,
  onChange: PropTypes.func,
  onHoverChange: PropTypes.func,
  className: PropTypes.string,
  character: PropTypes.node,
  characterRender: PropTypes.func,
  tabIndex: PropTypes.number,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
  autoFocus: PropTypes.bool
});

_defineProperty(Rate$1, "defaultProps", {
  defaultValue: 0,
  count: 5,
  allowHalf: false,
  allowClear: true,
  style: {},
  prefixCls: 'rc-rate',
  onChange: noop,
  character: '★',
  onHoverChange: noop,
  tabIndex: 0
});

polyfill(Rate$1);

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var Rate = /*#__PURE__*/function (_React$Component) {
  _inherits(Rate, _React$Component);

  var _super = _createSuper(Rate);

  function Rate() {
    var _this;

    _classCallCheck(this, Rate);

    _this = _super.apply(this, arguments);

    _this.saveRate = function (node) {
      _this.rcRate = node;
    };

    _this.characterRender = function (node, _ref) {
      var index = _ref.index;
      var tooltips = _this.props.tooltips;
      if (!tooltips) return node;
      return /*#__PURE__*/React.createElement(Tooltip, {
        title: tooltips[index]
      }, node);
    };

    _this.renderRate = function (_ref2) {
      var getPrefixCls = _ref2.getPrefixCls;

      var _a = _this.props,
          prefixCls = _a.prefixCls,
          restProps = __rest(_a, ["prefixCls"]);

      var rateProps = omit(restProps, ['tooltips']);
      return /*#__PURE__*/React.createElement(Rate$1, _extends({
        ref: _this.saveRate,
        characterRender: _this.characterRender
      }, rateProps, {
        prefixCls: getPrefixCls('rate', prefixCls)
      }));
    };

    return _this;
  }

  _createClass(Rate, [{
    key: "focus",
    value: function focus() {
      this.rcRate.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.rcRate.blur();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderRate);
    }
  }]);

  return Rate;
}(React.Component);
Rate.propTypes = {
  prefixCls: propTypesExports.string,
  character: propTypesExports.node
};
Rate.defaultProps = {
  character: /*#__PURE__*/React.createElement(Icon, {
    type: "star",
    theme: "filled"
  })
};

export { Rate as default };
