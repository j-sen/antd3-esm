import { n, h as createReactContext, c as classNames, C as ConfigConsumer } from '../../config-provider.js';
import { o as omit$1 } from '../../input.js';
import * as React from 'react';
import { b as Trigger, K as KeyCode, p as polyfill } from '../../menu.js';
import { t as toArray } from '../../tree.js';
import { a as Menu, c as connected } from '../../Divider.js';
import { S as Spin } from '../../index14.js';
import '../../icon.js';
import 'react-dom';
import '../../index7.js';

var css = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-mentions {\n  box-sizing: border-box;\n  margin: 0;\n  font-variant: tabular-nums;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  width: 100%;\n  height: 32px;\n  padding: 4px 11px;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n  transition: all 0.3s;\n  position: relative;\n  display: inline-block;\n  height: auto;\n  padding: 0;\n  overflow: hidden;\n  line-height: 1.5;\n  white-space: pre-wrap;\n  vertical-align: bottom;\n}\n.ant-mentions::-moz-placeholder {\n  color: #bfbfbf;\n  opacity: 1;\n}\n.ant-mentions:-ms-input-placeholder {\n  color: #bfbfbf;\n}\n.ant-mentions::-webkit-input-placeholder {\n  color: #bfbfbf;\n}\n.ant-mentions:placeholder-shown {\n  text-overflow: ellipsis;\n}\n.ant-mentions:hover {\n  border-color: #40a9ff;\n  border-right-width: 1px !important;\n}\n.ant-mentions:focus {\n  border-color: #40a9ff;\n  border-right-width: 1px !important;\n  outline: 0;\n  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);\n}\n.ant-mentions-disabled {\n  color: rgba(0, 0, 0, 0.25);\n  background-color: #f5f5f5;\n  cursor: not-allowed;\n  opacity: 1;\n}\n.ant-mentions-disabled:hover {\n  border-color: #d9d9d9;\n  border-right-width: 1px !important;\n}\n.ant-mentions[disabled] {\n  color: rgba(0, 0, 0, 0.25);\n  background-color: #f5f5f5;\n  cursor: not-allowed;\n  opacity: 1;\n}\n.ant-mentions[disabled]:hover {\n  border-color: #d9d9d9;\n  border-right-width: 1px !important;\n}\ntextarea.ant-mentions {\n  max-width: 100%;\n  height: auto;\n  min-height: 32px;\n  line-height: 1.5;\n  vertical-align: bottom;\n  transition: all 0.3s, height 0s;\n}\n.ant-mentions-lg {\n  height: 40px;\n  padding: 6px 11px;\n  font-size: 16px;\n}\n.ant-mentions-sm {\n  height: 24px;\n  padding: 1px 7px;\n}\n.ant-mentions-disabled > textarea {\n  color: rgba(0, 0, 0, 0.25);\n  background-color: #f5f5f5;\n  cursor: not-allowed;\n  opacity: 1;\n}\n.ant-mentions-disabled > textarea:hover {\n  border-color: #d9d9d9;\n  border-right-width: 1px !important;\n}\n.ant-mentions-focused {\n  border-color: #40a9ff;\n  border-right-width: 1px !important;\n  outline: 0;\n  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);\n}\n.ant-mentions > textarea,\n.ant-mentions-measure {\n  min-height: 30px;\n  margin: 0;\n  padding: 4px 11px;\n  overflow: inherit;\n  overflow-x: hidden;\n  overflow-y: auto;\n  font-weight: inherit;\n  font-size: inherit;\n  font-family: inherit;\n  font-style: inherit;\n  font-variant: inherit;\n  font-size-adjust: inherit;\n  font-stretch: inherit;\n  line-height: inherit;\n  direction: inherit;\n  letter-spacing: inherit;\n  white-space: inherit;\n  text-align: inherit;\n  vertical-align: top;\n  word-wrap: break-word;\n  word-break: inherit;\n  tab-size: inherit;\n}\n.ant-mentions > textarea {\n  width: 100%;\n  border: none;\n  outline: none;\n  resize: none;\n}\n.ant-mentions > textarea::-moz-placeholder {\n  color: #bfbfbf;\n  opacity: 1;\n}\n.ant-mentions > textarea:-ms-input-placeholder {\n  color: #bfbfbf;\n}\n.ant-mentions > textarea::-webkit-input-placeholder {\n  color: #bfbfbf;\n}\n.ant-mentions > textarea:placeholder-shown {\n  text-overflow: ellipsis;\n}\n.ant-mentions > textarea:read-only {\n  cursor: default;\n}\n.ant-mentions-measure {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  color: transparent;\n  pointer-events: none;\n}\n.ant-mentions-measure > span {\n  display: inline-block;\n  min-height: 1em;\n}\n.ant-mentions-dropdown {\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  position: absolute;\n  top: -9999px;\n  left: -9999px;\n  z-index: 1050;\n  box-sizing: border-box;\n  font-size: 14px;\n  font-variant: initial;\n  background-color: #fff;\n  border-radius: 4px;\n  outline: none;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.ant-mentions-dropdown-hidden {\n  display: none;\n}\n.ant-mentions-dropdown-menu {\n  max-height: 250px;\n  margin-bottom: 0;\n  padding-left: 0;\n  overflow: auto;\n  list-style: none;\n  outline: none;\n}\n.ant-mentions-dropdown-menu-item {\n  position: relative;\n  display: block;\n  min-width: 100px;\n  padding: 5px 12px;\n  overflow: hidden;\n  color: rgba(0, 0, 0, 0.65);\n  font-weight: normal;\n  line-height: 22px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  cursor: pointer;\n  transition: background 0.3s ease;\n}\n.ant-mentions-dropdown-menu-item:hover {\n  background-color: #e6f7ff;\n}\n.ant-mentions-dropdown-menu-item:first-child {\n  border-radius: 4px 4px 0 0;\n}\n.ant-mentions-dropdown-menu-item:last-child {\n  border-radius: 0 0 4px 4px;\n}\n.ant-mentions-dropdown-menu-item-disabled {\n  color: rgba(0, 0, 0, 0.25);\n  cursor: not-allowed;\n}\n.ant-mentions-dropdown-menu-item-disabled:hover {\n  color: rgba(0, 0, 0, 0.25);\n  background-color: #fff;\n  cursor: not-allowed;\n}\n.ant-mentions-dropdown-menu-item-selected {\n  color: rgba(0, 0, 0, 0.65);\n  font-weight: 600;\n  background-color: #fafafa;\n}\n.ant-mentions-dropdown-menu-item-active {\n  background-color: #e6f7ff;\n}\n/*# sourceMappingURL=index.css.map */";
n(css,{"prepend":true});

/* tslint:disable: no-object-literal-type-assertion */

var MentionsContext = createReactContext(null);
var MentionsContextProvider = MentionsContext.Provider;
var MentionsContextConsumer = MentionsContext.Consumer;

function _typeof$3(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$3 = function _typeof(obj) { return typeof obj; }; } else { _typeof$3 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$3(obj); }

function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$3(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$3(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$3(Constructor.prototype, protoProps); return Constructor; }

function _possibleConstructorReturn$3(self, call) { if (call && (_typeof$3(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$3(self); }

function _assertThisInitialized$3(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf$3(o) { _getPrototypeOf$3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$3(o); }

function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$3(subClass, superClass); }

function _setPrototypeOf$3(o, p) { _setPrototypeOf$3 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$3(o, p); }
/**
 * We only use Menu to display the candidate.
 * The focus is controlled by textarea to make accessibility easy.
 */

var DropdownMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits$3(DropdownMenu, _React$Component);

  function DropdownMenu() {
    var _this;

    _classCallCheck$3(this, DropdownMenu);

    _this = _possibleConstructorReturn$3(this, _getPrototypeOf$3(DropdownMenu).apply(this, arguments));

    _this.renderDropdown = function (_ref) {
      var notFoundContent = _ref.notFoundContent,
          activeIndex = _ref.activeIndex,
          setActiveIndex = _ref.setActiveIndex,
          selectOption = _ref.selectOption,
          onFocus = _ref.onFocus,
          onBlur = _ref.onBlur;
      var _this$props = _this.props,
          prefixCls = _this$props.prefixCls,
          options = _this$props.options;
      var activeOption = options[activeIndex] || {};
      return React.createElement(Menu, {
        prefixCls: "".concat(prefixCls, "-menu"),
        activeKey: activeOption.value,
        onSelect: function onSelect(_ref2) {
          var key = _ref2.key;
          var option = options.find(function (_ref3) {
            var value = _ref3.value;
            return value === key;
          });
          selectOption(option);
        },
        onFocus: onFocus,
        onBlur: onBlur
      }, options.map(function (option, index) {
        var value = option.value,
            disabled = option.disabled,
            children = option.children,
            className = option.className,
            style = option.style;
        return React.createElement(connected, {
          key: value,
          disabled: disabled,
          className: className,
          style: style,
          onMouseEnter: function onMouseEnter() {
            setActiveIndex(index);
          }
        }, children);
      }), !options.length && React.createElement(connected, {
        disabled: true
      }, notFoundContent));
    };

    return _this;
  }

  _createClass$3(DropdownMenu, [{
    key: "render",
    value: function render() {
      return React.createElement(MentionsContextConsumer, null, this.renderDropdown);
    }
  }]);

  return DropdownMenu;
}(React.Component);

function _typeof$2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$2 = function _typeof(obj) { return typeof obj; }; } else { _typeof$2 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$2(obj); }

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$2(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$2(Constructor.prototype, protoProps); return Constructor; }

function _possibleConstructorReturn$2(self, call) { if (call && (_typeof$2(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$2(self); }

function _assertThisInitialized$2(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf$2(o) { _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$2(o); }

function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$2(subClass, superClass); }

function _setPrototypeOf$2(o, p) { _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$2(o, p); }
var BUILT_IN_PLACEMENTS = {
  bottomRight: {
    points: ['tl', 'br'],
    offset: [0, 4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  topRight: {
    points: ['bl', 'tr'],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  }
};

var KeywordTrigger =
/*#__PURE__*/
function (_React$Component) {
  _inherits$2(KeywordTrigger, _React$Component);

  function KeywordTrigger() {
    var _this;

    _classCallCheck$2(this, KeywordTrigger);

    _this = _possibleConstructorReturn$2(this, _getPrototypeOf$2(KeywordTrigger).apply(this, arguments));

    _this.getDropdownPrefix = function () {
      return "".concat(_this.props.prefixCls, "-dropdown");
    };

    _this.getDropdownElement = function () {
      var options = _this.props.options;
      return React.createElement(DropdownMenu, {
        prefixCls: _this.getDropdownPrefix(),
        options: options
      });
    };

    return _this;
  }

  _createClass$2(KeywordTrigger, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          visible = _this$props.visible,
          placement = _this$props.placement,
          transitionName = _this$props.transitionName,
          getPopupContainer = _this$props.getPopupContainer;
      var popupElement = this.getDropdownElement();
      return React.createElement(Trigger, {
        prefixCls: this.getDropdownPrefix(),
        popupVisible: visible,
        popup: popupElement,
        popupPlacement: placement === 'top' ? 'topRight' : 'bottomRight',
        popupTransitionName: transitionName,
        builtinPlacements: BUILT_IN_PLACEMENTS,
        getPopupContainer: getPopupContainer
      }, children);
    }
  }]);

  return KeywordTrigger;
}(React.Component);

var Option$1 = function Option() {
  return null;
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var omit = function omit(obj) {
  var clone = _objectSpread({}, obj);

  for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  keys.forEach(function (key) {
    delete clone[key];
  });
  return clone;
};
/**
 * Cut input selection into 2 part and return text before selection start
 */

function getBeforeSelectionText(input) {
  var selectionStart = input.selectionStart;
  return input.value.slice(0, selectionStart);
}
/**
 * Find the last match prefix index
 */

function getLastMeasureIndex(text) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var prefixList = Array.isArray(prefix) ? prefix : [prefix];
  return prefixList.reduce(function (lastMatch, prefixStr) {
    var lastIndex = text.lastIndexOf(prefixStr);

    if (lastIndex > lastMatch.location) {
      return {
        location: lastIndex,
        prefix: prefixStr
      };
    }

    return lastMatch;
  }, {
    location: -1,
    prefix: ''
  });
}

function lower(char) {
  return (char || '').toLowerCase();
}

function reduceText(text, targetText, split) {
  var firstChar = text[0];

  if (!firstChar || firstChar === split) {
    return text;
  } // Reuse rest text as it can


  var restText = text;
  var targetTextLen = targetText.length;

  for (var i = 0; i < targetTextLen; i += 1) {
    if (lower(restText[i]) !== lower(targetText[i])) {
      restText = restText.slice(i);
      break;
    } else if (i === targetTextLen - 1) {
      restText = restText.slice(targetTextLen);
    }
  }

  return restText;
}
/**
 * Paint targetText into current text:
 *  text: little@litest
 *  targetText: light
 *  => little @light test
 */


function replaceWithMeasure(text, measureConfig) {
  var measureLocation = measureConfig.measureLocation,
      prefix = measureConfig.prefix,
      targetText = measureConfig.targetText,
      selectionStart = measureConfig.selectionStart,
      split = measureConfig.split; // Before text will append one space if have other text

  var beforeMeasureText = text.slice(0, measureLocation);

  if (beforeMeasureText[beforeMeasureText.length - split.length] === split) {
    beforeMeasureText = beforeMeasureText.slice(0, beforeMeasureText.length - split.length);
  }

  if (beforeMeasureText) {
    beforeMeasureText = "".concat(beforeMeasureText).concat(split);
  } // Cut duplicate string with current targetText


  var restText = reduceText(text.slice(selectionStart), targetText.slice(selectionStart - measureLocation - prefix.length), split);

  if (restText.slice(0, split.length) === split) {
    restText = restText.slice(split.length);
  }

  var connectedStartText = "".concat(beforeMeasureText).concat(prefix).concat(targetText).concat(split);
  return {
    text: "".concat(connectedStartText).concat(restText),
    selectionLocation: connectedStartText.length
  };
}
function setInputSelection(input, location) {
  input.setSelectionRange(location, location);
  /**
   * Reset caret into view.
   * Since this function always called by user control, it's safe to focus element.
   */

  input.blur();
  input.focus();
}
function validateSearch(text, props) {
  var split = props.split;
  return !split || text.indexOf(split) === -1;
}
function filterOption(input, _ref) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value;
  var lowerCase = input.toLowerCase();
  return value.toLowerCase().indexOf(lowerCase) !== -1;
}

function _typeof$1(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); if (staticProps) _defineProperties$1(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$1(self, call) { if (call && (_typeof$1(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$1(self); }

function _assertThisInitialized$1(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf$1(o) { _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$1(o); }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$1(subClass, superClass); }

function _setPrototypeOf$1(o, p) { _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$1(o, p); }

var Mentions$1 =
/*#__PURE__*/
function (_React$Component) {
  _inherits$1(Mentions, _React$Component);

  function Mentions(props) {
    var _this;

    _classCallCheck$1(this, Mentions);

    _this = _possibleConstructorReturn$1(this, _getPrototypeOf$1(Mentions).call(this, props));
    _this.focusId = undefined;

    _this.triggerChange = function (value) {
      var onChange = _this.props.onChange;

      if (!('value' in _this.props)) {
        _this.setState({
          value: value
        });
      }

      if (onChange) {
        onChange(value);
      }
    };

    _this.onChange = function (_ref) {
      var value = _ref.target.value;

      _this.triggerChange(value);
    }; // Check if hit the measure keyword


    _this.onKeyDown = function (event) {
      var which = event.which;
      var _this$state = _this.state,
          activeIndex = _this$state.activeIndex,
          measuring = _this$state.measuring; // Skip if not measuring

      if (!measuring) {
        return;
      }

      if (which === KeyCode.UP || which === KeyCode.DOWN) {
        // Control arrow function
        var optionLen = _this.getOptions().length;

        var offset = which === KeyCode.UP ? -1 : 1;
        var newActiveIndex = (activeIndex + offset + optionLen) % optionLen;

        _this.setState({
          activeIndex: newActiveIndex
        });

        event.preventDefault();
      } else if (which === KeyCode.ESC) {
        _this.stopMeasure();
      } else if (which === KeyCode.ENTER) {
        // Measure hit
        var option = _this.getOptions()[activeIndex];

        _this.selectOption(option);

        event.preventDefault();
      }
    };
    /**
     * When to start measure:
     * 1. When user press `prefix`
     * 2. When measureText !== prevMeasureText
     *  - If measure hit
     *  - If measuring
     *
     * When to stop measure:
     * 1. Selection is out of range
     * 2. Contains `space`
     * 3. ESC or select one
     */


    _this.onKeyUp = function (event) {
      var key = event.key,
          which = event.which;
      var _this$state2 = _this.state,
          prevMeasureText = _this$state2.measureText,
          measuring = _this$state2.measuring;
      var _this$props = _this.props,
          _this$props$prefix = _this$props.prefix,
          prefix = _this$props$prefix === void 0 ? '' : _this$props$prefix,
          onSearch = _this$props.onSearch,
          validateSearch = _this$props.validateSearch;
      var target = event.target;
      var selectionStartText = getBeforeSelectionText(target);

      var _getLastMeasureIndex = getLastMeasureIndex(selectionStartText, prefix),
          measureIndex = _getLastMeasureIndex.location,
          measurePrefix = _getLastMeasureIndex.prefix; // Skip if match the white key list


      if ([KeyCode.ESC, KeyCode.UP, KeyCode.DOWN, KeyCode.ENTER].indexOf(which) !== -1) {
        return;
      }

      if (measureIndex !== -1) {
        var measureText = selectionStartText.slice(measureIndex + measurePrefix.length);
        var validateMeasure = validateSearch(measureText, _this.props);
        var matchOption = !!_this.getOptions(measureText).length;

        if (validateMeasure) {
          if (key === measurePrefix || measuring || measureText !== prevMeasureText && matchOption) {
            _this.startMeasure(measureText, measurePrefix, measureIndex);
          }
        } else if (measuring) {
          // Stop if measureText is invalidate
          _this.stopMeasure();
        }
        /**
         * We will trigger `onSearch` to developer since they may use for async update.
         * If met `space` means user finished searching.
         */


        if (onSearch && validateMeasure) {
          onSearch(measureText, measurePrefix);
        }
      } else if (measuring) {
        _this.stopMeasure();
      }
    };

    _this.onInputFocus = function (event) {
      _this.onFocus(event);
    };

    _this.onInputBlur = function (event) {
      _this.onBlur(event);
    };

    _this.onDropdownFocus = function () {
      _this.onFocus();
    };

    _this.onDropdownBlur = function () {
      _this.onBlur();
    };

    _this.onFocus = function (event) {
      window.clearTimeout(_this.focusId);
      var isFocus = _this.state.isFocus;
      var onFocus = _this.props.onFocus;

      if (!isFocus && event && onFocus) {
        onFocus(event);
      }

      _this.setState({
        isFocus: true
      });
    };

    _this.onBlur = function (event) {
      _this.focusId = window.setTimeout(function () {
        var onBlur = _this.props.onBlur;

        _this.setState({
          isFocus: false
        });

        _this.stopMeasure();

        if (onBlur) {
          onBlur(event);
        }
      }, 0);
    };

    _this.selectOption = function (option) {
      var _this$state3 = _this.state,
          value = _this$state3.value,
          measureLocation = _this$state3.measureLocation,
          measurePrefix = _this$state3.measurePrefix;
      var _this$props2 = _this.props,
          split = _this$props2.split,
          onSelect = _this$props2.onSelect;
      var _option$value = option.value,
          mentionValue = _option$value === void 0 ? '' : _option$value;

      var _replaceWithMeasure = replaceWithMeasure(value, {
        measureLocation: measureLocation,
        targetText: mentionValue,
        prefix: measurePrefix,
        selectionStart: _this.textarea.selectionStart,
        split: split
      }),
          text = _replaceWithMeasure.text,
          selectionLocation = _replaceWithMeasure.selectionLocation;

      _this.triggerChange(text);

      _this.stopMeasure(function () {
        // We need restore the selection position
        setInputSelection(_this.textarea, selectionLocation);
      });

      if (onSelect) {
        onSelect(option, measurePrefix);
      }
    };

    _this.setActiveIndex = function (activeIndex) {
      _this.setState({
        activeIndex: activeIndex
      });
    };

    _this.setTextAreaRef = function (element) {
      _this.textarea = element;
    };

    _this.setMeasureRef = function (element) {
      _this.measure = element;
    };

    _this.getOptions = function (measureText) {
      var targetMeasureText = measureText || _this.state.measureText || '';
      var _this$props3 = _this.props,
          children = _this$props3.children,
          filterOption = _this$props3.filterOption;
      var list = toArray(children).map(function (_ref2) {
        var props = _ref2.props;
        return props;
      }).filter(function (option) {
        /** Return all result if `filterOption` is false. */
        if (filterOption === false) {
          return true;
        }

        return filterOption(targetMeasureText, option);
      });
      return list;
    };

    _this.state = {
      value: props.defaultValue || props.value || '',
      measuring: false,
      measureLocation: 0,
      measureText: null,
      measurePrefix: '',
      activeIndex: 0,
      isFocus: false
    };
    return _this;
  }

  _createClass$1(Mentions, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var measuring = this.state.measuring; // Sync measure div top with textarea for rc-trigger usage

      if (measuring) {
        this.measure.scrollTop = this.textarea.scrollTop;
      }
    }
  }, {
    key: "startMeasure",
    value: function startMeasure(measureText, measurePrefix, measureLocation) {
      this.setState({
        measuring: true,
        measureText: measureText,
        measurePrefix: measurePrefix,
        measureLocation: measureLocation,
        activeIndex: 0
      });
    }
  }, {
    key: "stopMeasure",
    value: function stopMeasure(callback) {
      this.setState({
        measuring: false,
        measureLocation: 0,
        measureText: null
      }, callback);
    }
  }, {
    key: "focus",
    value: function focus() {
      this.textarea.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.textarea.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state4 = this.state,
          value = _this$state4.value,
          measureLocation = _this$state4.measureLocation,
          measurePrefix = _this$state4.measurePrefix,
          measuring = _this$state4.measuring,
          activeIndex = _this$state4.activeIndex;

      var _this$props4 = this.props,
          prefixCls = _this$props4.prefixCls,
          placement = _this$props4.placement,
          transitionName = _this$props4.transitionName,
          className = _this$props4.className,
          style = _this$props4.style,
          autoFocus = _this$props4.autoFocus,
          notFoundContent = _this$props4.notFoundContent,
          getPopupContainer = _this$props4.getPopupContainer,
          restProps = _objectWithoutProperties(_this$props4, ["prefixCls", "placement", "transitionName", "className", "style", "autoFocus", "notFoundContent", "getPopupContainer"]);

      var inputProps = omit(restProps, 'value', 'defaultValue', 'prefix', 'split', 'children', 'validateSearch', 'filterOption', 'onSelect', 'onSearch');
      var options = measuring ? this.getOptions() : [];
      return React.createElement("div", {
        className: classNames(prefixCls, className),
        style: style
      }, React.createElement("textarea", Object.assign({
        autoFocus: autoFocus,
        ref: this.setTextAreaRef,
        value: value
      }, inputProps, {
        onChange: this.onChange,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        onFocus: this.onInputFocus,
        onBlur: this.onInputBlur
      })), measuring && React.createElement("div", {
        ref: this.setMeasureRef,
        className: "".concat(prefixCls, "-measure")
      }, value.slice(0, measureLocation), React.createElement(MentionsContextProvider, {
        value: {
          notFoundContent: notFoundContent,
          activeIndex: activeIndex,
          setActiveIndex: this.setActiveIndex,
          selectOption: this.selectOption,
          onFocus: this.onDropdownFocus,
          onBlur: this.onDropdownBlur
        }
      }, React.createElement(KeywordTrigger, {
        prefixCls: prefixCls,
        transitionName: transitionName,
        placement: placement,
        options: options,
        visible: true,
        getPopupContainer: getPopupContainer
      }, React.createElement("span", null, measurePrefix))), value.slice(measureLocation + measurePrefix.length)));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, prevState) {
      var newState = {};

      if ('value' in props && props.value !== prevState.value) {
        newState.value = props.value || '';
      }

      return newState;
    }
  }]);

  return Mentions;
}(React.Component);

Mentions$1.Option = Option$1;
Mentions$1.defaultProps = {
  prefixCls: 'rc-mentions',
  prefix: '@',
  split: ' ',
  validateSearch: validateSearch,
  filterOption: filterOption,
  notFoundContent: 'Not Found',
  rows: 1
};
polyfill(Mentions$1);

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
var Option = Mentions$1.Option;

function loadingFilterOption() {
  return true;
}

var Mentions = /*#__PURE__*/function (_React$Component) {
  _inherits(Mentions, _React$Component);

  var _super = _createSuper(Mentions);

  function Mentions() {
    var _this;

    _classCallCheck(this, Mentions);

    _this = _super.apply(this, arguments);
    _this.state = {
      focused: false
    };

    _this.onFocus = function () {
      var onFocus = _this.props.onFocus;

      if (onFocus) {
        onFocus.apply(void 0, arguments);
      }

      _this.setState({
        focused: true
      });
    };

    _this.onBlur = function () {
      var onBlur = _this.props.onBlur;

      if (onBlur) {
        onBlur.apply(void 0, arguments);
      }

      _this.setState({
        focused: false
      });
    };

    _this.getOptions = function () {
      var _this$props = _this.props,
          children = _this$props.children,
          loading = _this$props.loading;

      if (loading) {
        return /*#__PURE__*/React.createElement(Option, {
          value: "ANTD_SEARCHING",
          disabled: true
        }, /*#__PURE__*/React.createElement(Spin, {
          size: "small"
        }));
      }

      return children;
    };

    _this.getFilterOption = function () {
      var _this$props2 = _this.props,
          filterOption = _this$props2.filterOption,
          loading = _this$props2.loading;

      if (loading) {
        return loadingFilterOption;
      }

      return filterOption;
    };

    _this.saveMentions = function (node) {
      _this.rcMentions = node;
    };

    _this.renderMentions = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls,
          renderEmpty = _ref.renderEmpty;
      var focused = _this.state.focused;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          className = _a.className,
          disabled = _a.disabled,
          restProps = __rest(_a, ["prefixCls", "className", "disabled"]);

      var prefixCls = getPrefixCls('mentions', customizePrefixCls);
      var mentionsProps = omit$1(restProps, ['loading']);
      var mergedClassName = classNames(className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classNames, "".concat(prefixCls, "-focused"), focused), _classNames));
      return /*#__PURE__*/React.createElement(Mentions$1, _extends({
        prefixCls: prefixCls,
        notFoundContent: _this.getNotFoundContent(renderEmpty),
        className: mergedClassName,
        disabled: disabled
      }, mentionsProps, {
        filterOption: _this.getFilterOption(),
        onFocus: _this.onFocus,
        onBlur: _this.onBlur,
        ref: _this.saveMentions
      }), _this.getOptions());
    };

    return _this;
  }

  _createClass(Mentions, [{
    key: "getNotFoundContent",
    value: function getNotFoundContent(renderEmpty) {
      var notFoundContent = this.props.notFoundContent;

      if (notFoundContent !== undefined) {
        return notFoundContent;
      }

      return renderEmpty('Select');
    }
  }, {
    key: "focus",
    value: function focus() {
      this.rcMentions.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.rcMentions.blur();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderMentions);
    }
  }]);

  return Mentions;
}(React.Component);

Mentions.Option = Option;

Mentions.getMentions = function () {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var config = arguments.length > 1 ? arguments[1] : undefined;

  var _ref2 = config || {},
      _ref2$prefix = _ref2.prefix,
      prefix = _ref2$prefix === void 0 ? '@' : _ref2$prefix,
      _ref2$split = _ref2.split,
      split = _ref2$split === void 0 ? ' ' : _ref2$split;

  var prefixList = Array.isArray(prefix) ? prefix : [prefix];
  return value.split(split).map(function () {
    var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var hitPrefix = null;
    prefixList.some(function (prefixStr) {
      var startStr = str.slice(0, prefixStr.length);

      if (startStr === prefixStr) {
        hitPrefix = prefixStr;
        return true;
      }

      return false;
    });

    if (hitPrefix !== null) {
      return {
        prefix: hitPrefix,
        value: str.slice(hitPrefix.length)
      };
    }

    return null;
  }).filter(function (entity) {
    return !!entity && !!entity.value;
  });
};

polyfill(Mentions);

export { Mentions as default };
