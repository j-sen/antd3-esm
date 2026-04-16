import { n, C as ConfigConsumer, c as classNames, g as getDefaultExportFromCjs, s as withConfigConsumer, w as warning, L as LocaleReceiver, v as configConsumerProps } from '../../config-provider.js';
import * as React from 'react';
import { K as KeyCode, p as polyfill, j as findDOMNode } from '../../menu.js';
import { t as toArray, w as warning$1 } from '../../tree.js';
import { o as omit, a as tupleNum } from '../../input.js';
import { R as ResizeObserver } from '../../index2.js';
import { T as TransButton } from '../../transButton.js';
import { w as wrapperRaf } from '../../raf.js';
import { I as Icon } from '../../icon.js';
import { T as Tooltip } from '../../index6.js';
import { T as TextArea } from '../../TextArea.js';
import { render, unmountComponentAtNode } from 'react-dom';
import '../../warning.js';

var isStyleSupport = function isStyleSupport(styleName) {
  if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
    var styleNameList = Array.isArray(styleName) ? styleName : [styleName];
    var documentElement = window.document.documentElement;
    return styleNameList.some(function (name) {
      return name in documentElement.style;
    });
  }

  return false;
};

isStyleSupport(['flex', 'webkitFlex', 'Flex', 'msFlex']);

var css = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-typography {\n  color: rgba(0, 0, 0, 0.65);\n}\n.ant-typography.ant-typography-secondary {\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-typography.ant-typography-warning {\n  color: #faad14;\n}\n.ant-typography.ant-typography-danger {\n  color: #f5222d;\n}\n.ant-typography.ant-typography-disabled {\n  color: rgba(0, 0, 0, 0.25);\n  cursor: not-allowed;\n  user-select: none;\n}\ndiv.ant-typography,\n.ant-typography p {\n  margin-bottom: 1em;\n}\nh1.ant-typography,\n.ant-typography h1 {\n  margin-bottom: 0.5em;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 600;\n  font-size: 38px;\n  line-height: 1.23;\n}\nh2.ant-typography,\n.ant-typography h2 {\n  margin-bottom: 0.5em;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 600;\n  font-size: 30px;\n  line-height: 1.35;\n}\nh3.ant-typography,\n.ant-typography h3 {\n  margin-bottom: 0.5em;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 1.35;\n}\nh4.ant-typography,\n.ant-typography h4 {\n  margin-bottom: 0.5em;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 1.4;\n}\n.ant-typography + h1.ant-typography,\n.ant-typography + h2.ant-typography,\n.ant-typography + h3.ant-typography,\n.ant-typography + h4.ant-typography {\n  margin-top: 1.2em;\n}\n.ant-typography div + h1,\n.ant-typography ul + h1,\n.ant-typography li + h1,\n.ant-typography p + h1,\n.ant-typography h1 + h1,\n.ant-typography h2 + h1,\n.ant-typography h3 + h1,\n.ant-typography h4 + h1,\n.ant-typography div + h2,\n.ant-typography ul + h2,\n.ant-typography li + h2,\n.ant-typography p + h2,\n.ant-typography h1 + h2,\n.ant-typography h2 + h2,\n.ant-typography h3 + h2,\n.ant-typography h4 + h2,\n.ant-typography div + h3,\n.ant-typography ul + h3,\n.ant-typography li + h3,\n.ant-typography p + h3,\n.ant-typography h1 + h3,\n.ant-typography h2 + h3,\n.ant-typography h3 + h3,\n.ant-typography h4 + h3,\n.ant-typography div + h4,\n.ant-typography ul + h4,\n.ant-typography li + h4,\n.ant-typography p + h4,\n.ant-typography h1 + h4,\n.ant-typography h2 + h4,\n.ant-typography h3 + h4,\n.ant-typography h4 + h4 {\n  margin-top: 1.2em;\n}\nspan.ant-typography-ellipsis {\n  display: inline-block;\n}\n.ant-typography a {\n  color: #1890ff;\n  text-decoration: none;\n  outline: none;\n  cursor: pointer;\n  transition: color 0.3s;\n}\n.ant-typography a:focus,\n.ant-typography a:hover {\n  color: #40a9ff;\n}\n.ant-typography a:active {\n  color: #096dd9;\n}\n.ant-typography a:active,\n.ant-typography a:hover {\n  text-decoration: none;\n}\n.ant-typography a[disabled] {\n  color: rgba(0, 0, 0, 0.25);\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.ant-typography code {\n  margin: 0 0.2em;\n  padding: 0.2em 0.4em 0.1em;\n  font-size: 85%;\n  background: rgba(0, 0, 0, 0.06);\n  border: 1px solid rgba(0, 0, 0, 0.06);\n  border-radius: 3px;\n}\n.ant-typography mark {\n  padding: 0;\n  background-color: #ffe58f;\n}\n.ant-typography u,\n.ant-typography ins {\n  text-decoration: underline;\n  text-decoration-skip-ink: auto;\n}\n.ant-typography s,\n.ant-typography del {\n  text-decoration: line-through;\n}\n.ant-typography strong {\n  font-weight: 600;\n}\n.ant-typography-expand,\n.ant-typography-edit,\n.ant-typography-copy {\n  color: #1890ff;\n  text-decoration: none;\n  outline: none;\n  cursor: pointer;\n  transition: color 0.3s;\n  margin-left: 8px;\n}\n.ant-typography-expand:focus,\n.ant-typography-edit:focus,\n.ant-typography-copy:focus,\n.ant-typography-expand:hover,\n.ant-typography-edit:hover,\n.ant-typography-copy:hover {\n  color: #40a9ff;\n}\n.ant-typography-expand:active,\n.ant-typography-edit:active,\n.ant-typography-copy:active {\n  color: #096dd9;\n}\n.ant-typography-copy-success,\n.ant-typography-copy-success:hover,\n.ant-typography-copy-success:focus {\n  color: #52c41a;\n}\n.ant-typography-edit-content {\n  position: relative;\n}\ndiv.ant-typography-edit-content {\n  left: -12px;\n  margin-top: -5px;\n  margin-bottom: calc(1em - 4px - 2px);\n}\n.ant-typography-edit-content-confirm {\n  position: absolute;\n  right: 10px;\n  bottom: 8px;\n  color: rgba(0, 0, 0, 0.45);\n  pointer-events: none;\n}\n.ant-typography-edit-content textarea {\n  -moz-transition: none;\n}\n.ant-typography ul,\n.ant-typography ol {\n  margin: 0 0 1em 0;\n  padding: 0;\n}\n.ant-typography ul li,\n.ant-typography ol li {\n  margin: 0 0 0 20px;\n  padding: 0 0 0 4px;\n}\n.ant-typography ul li {\n  list-style-type: circle;\n}\n.ant-typography ul li li {\n  list-style-type: disc;\n}\n.ant-typography ol li {\n  list-style-type: decimal;\n}\n.ant-typography-ellipsis-single-line {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.ant-typography-ellipsis-multiple-line {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  /*! autoprefixer: ignore next */\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n/*# sourceMappingURL=index.css.map */";
n(css,{"prepend":true});

function _typeof$4(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$4 = function _typeof(obj) { return typeof obj; }; } else { _typeof$4 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$4(obj); }

function fillRef(ref, node) {
  if (typeof ref === 'function') {
    ref(node);
  } else if (_typeof$4(ref) === 'object' && ref && 'current' in ref) {
    ref.current = node;
  }
}
function composeRef() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  return function (node) {
    refs.forEach(function (ref) {
      fillRef(ref, node);
    });
  };
}

function _typeof$3(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$3 = function _typeof(obj) { return typeof obj; }; } else { _typeof$3 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$3(obj); }

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$2(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$2(Constructor.prototype, protoProps); return Constructor; }

function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$2(subClass, superClass); }

function _setPrototypeOf$2(o, p) { _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$2(o, p); }

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf$2(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$2(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$2(this, result); }; }

function _possibleConstructorReturn$2(self, call) { if (call && (_typeof$3(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$2(self); }

function _assertThisInitialized$2(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$2(o) { _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$2(o); }

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

var __rest$3 = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var Typography$1 = function Typography(_a, ref) {
  var customizePrefixCls = _a.prefixCls,
      _a$component = _a.component,
      component = _a$component === void 0 ? 'article' : _a$component,
      className = _a.className,
      ariaLabel = _a['aria-label'],
      setContentRef = _a.setContentRef,
      children = _a.children,
      restProps = __rest$3(_a, ["prefixCls", "component", "className", 'aria-label', "setContentRef", "children"]);

  var mergedRef = ref;

  if (setContentRef) {
    mergedRef = composeRef(ref, setContentRef);
  }

  return /*#__PURE__*/React.createElement(ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;
    var Component = component;
    var prefixCls = getPrefixCls('typography', customizePrefixCls);
    return /*#__PURE__*/React.createElement(Component, _extends$4({
      className: classNames(prefixCls, className),
      "aria-label": ariaLabel,
      ref: mergedRef
    }, restProps), children);
  });
};

var RefTypography;

if (React.forwardRef) {
  RefTypography = /*#__PURE__*/React.forwardRef(Typography$1);
  RefTypography.displayName = 'Typography';
} else {
  var TypographyWrapper = /*#__PURE__*/function (_React$Component) {
    _inherits$2(TypographyWrapper, _React$Component);

    var _super = _createSuper$2(TypographyWrapper);

    function TypographyWrapper() {
      var _this;

      _classCallCheck$2(this, TypographyWrapper);

      _this = _super.apply(this, arguments);
      _this.state = {};
      return _this;
    }

    _createClass$2(TypographyWrapper, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement(Typography$1, this.props);
      }
    }]);

    return TypographyWrapper;
  }(React.Component);

  RefTypography = TypographyWrapper;
} // es default export should use const instead of let


var ExportTypography = RefTypography;

var toggleSelection;
var hasRequiredToggleSelection;

function requireToggleSelection () {
	if (hasRequiredToggleSelection) return toggleSelection;
	hasRequiredToggleSelection = 1;
	toggleSelection = function () {
	  var selection = document.getSelection();
	  if (!selection.rangeCount) {
	    return function () {};
	  }
	  var active = document.activeElement;

	  var ranges = [];
	  for (var i = 0; i < selection.rangeCount; i++) {
	    ranges.push(selection.getRangeAt(i));
	  }

	  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
	    case 'INPUT':
	    case 'TEXTAREA':
	      active.blur();
	      break;

	    default:
	      active = null;
	      break;
	  }

	  selection.removeAllRanges();
	  return function () {
	    selection.type === 'Caret' &&
	    selection.removeAllRanges();

	    if (!selection.rangeCount) {
	      ranges.forEach(function(range) {
	        selection.addRange(range);
	      });
	    }

	    active &&
	    active.focus();
	  };
	};
	return toggleSelection;
}

var copyToClipboard;
var hasRequiredCopyToClipboard;

function requireCopyToClipboard () {
	if (hasRequiredCopyToClipboard) return copyToClipboard;
	hasRequiredCopyToClipboard = 1;

	var deselectCurrent = requireToggleSelection();

	var clipboardToIE11Formatting = {
	  "text/plain": "Text",
	  "text/html": "Url",
	  "default": "Text"
	};

	var defaultMessage = "Copy to clipboard: #{key}, Enter";

	function format(message) {
	  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
	  return message.replace(/#{\s*key\s*}/g, copyKey);
	}

	function copy(text, options) {
	  var debug,
	    message,
	    reselectPrevious,
	    range,
	    selection,
	    mark,
	    success = false;
	  if (!options) {
	    options = {};
	  }
	  debug = options.debug || false;
	  try {
	    reselectPrevious = deselectCurrent();

	    range = document.createRange();
	    selection = document.getSelection();

	    mark = document.createElement("span");
	    mark.textContent = text;
	    // avoid screen readers from reading out loud the text
	    mark.ariaHidden = "true";
	    // reset user styles for span element
	    mark.style.all = "unset";
	    // prevents scrolling to the end of the page
	    mark.style.position = "fixed";
	    mark.style.top = 0;
	    mark.style.clip = "rect(0, 0, 0, 0)";
	    // used to preserve spaces and line breaks
	    mark.style.whiteSpace = "pre";
	    // do not inherit user-select (it may be `none`)
	    mark.style.webkitUserSelect = "text";
	    mark.style.MozUserSelect = "text";
	    mark.style.msUserSelect = "text";
	    mark.style.userSelect = "text";
	    mark.addEventListener("copy", function(e) {
	      e.stopPropagation();
	      if (options.format) {
	        e.preventDefault();
	        if (typeof e.clipboardData === "undefined") { // IE 11
	          debug && console.warn("unable to use e.clipboardData");
	          debug && console.warn("trying IE specific stuff");
	          window.clipboardData.clearData();
	          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
	          window.clipboardData.setData(format, text);
	        } else { // all other browsers
	          e.clipboardData.clearData();
	          e.clipboardData.setData(options.format, text);
	        }
	      }
	      if (options.onCopy) {
	        e.preventDefault();
	        options.onCopy(e.clipboardData);
	      }
	    });

	    document.body.appendChild(mark);

	    range.selectNodeContents(mark);
	    selection.addRange(range);

	    var successful = document.execCommand("copy");
	    if (!successful) {
	      throw new Error("copy command was unsuccessful");
	    }
	    success = true;
	  } catch (err) {
	    debug && console.error("unable to copy using execCommand: ", err);
	    debug && console.warn("trying IE specific stuff");
	    try {
	      window.clipboardData.setData(options.format || "text", text);
	      options.onCopy && options.onCopy(window.clipboardData);
	      success = true;
	    } catch (err) {
	      debug && console.error("unable to copy using clipboardData: ", err);
	      debug && console.error("falling back to prompt");
	      message = format("message" in options ? options.message : defaultMessage);
	      window.prompt(message, text);
	    }
	  } finally {
	    if (selection) {
	      if (typeof selection.removeRange == "function") {
	        selection.removeRange(range);
	      } else {
	        selection.removeAllRanges();
	      }
	    }

	    if (mark) {
	      document.body.removeChild(mark);
	    }
	    reselectPrevious();
	  }

	  return success;
	}

	copyToClipboard = copy;
	return copyToClipboard;
}

var copyToClipboardExports = requireCopyToClipboard();
var copy = /*@__PURE__*/getDefaultExportFromCjs(copyToClipboardExports);

function _typeof$2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$2 = function _typeof(obj) { return typeof obj; }; } else { _typeof$2 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$2(obj); }

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); if (staticProps) _defineProperties$1(Constructor, staticProps); return Constructor; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$1(subClass, superClass); }

function _setPrototypeOf$1(o, p) { _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$1(o, p); }

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }

function _possibleConstructorReturn$1(self, call) { if (call && (_typeof$2(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$1(self); }

function _assertThisInitialized$1(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$1(o) { _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$1(o); }

var Editable = /*#__PURE__*/function (_React$Component) {
  _inherits$1(Editable, _React$Component);

  var _super = _createSuper$1(Editable);

  function Editable() {
    var _this;

    _classCallCheck$1(this, Editable);

    _this = _super.apply(this, arguments);
    _this.inComposition = false;
    _this.state = {
      current: ''
    };

    _this.onChange = function (_ref) {
      var value = _ref.target.value;

      _this.setState({
        current: value.replace(/[\r\n]/g, '')
      });
    };

    _this.onCompositionStart = function () {
      _this.inComposition = true;
    };

    _this.onCompositionEnd = function () {
      _this.inComposition = false;
    };

    _this.onKeyDown = function (_ref2) {
      var keyCode = _ref2.keyCode;
      // We don't record keyCode when IME is using
      if (_this.inComposition) return;
      _this.lastKeyCode = keyCode;
    };

    _this.onKeyUp = function (_ref3) {
      var keyCode = _ref3.keyCode,
          ctrlKey = _ref3.ctrlKey,
          altKey = _ref3.altKey,
          metaKey = _ref3.metaKey,
          shiftKey = _ref3.shiftKey;
      var onCancel = _this.props.onCancel; // Check if it's a real key

      if (_this.lastKeyCode === keyCode && !_this.inComposition && !ctrlKey && !altKey && !metaKey && !shiftKey) {
        if (keyCode === KeyCode.ENTER) {
          _this.confirmChange();
        } else if (keyCode === KeyCode.ESC) {
          onCancel();
        }
      }
    };

    _this.onBlur = function () {
      _this.confirmChange();
    };

    _this.confirmChange = function () {
      var current = _this.state.current;
      var onSave = _this.props.onSave;
      onSave(current.trim());
    };

    _this.setTextarea = function (textarea) {
      _this.textarea = textarea;
    };

    return _this;
  }

  _createClass$1(Editable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.textarea && this.textarea.resizableTextArea) {
        var textArea = this.textarea.resizableTextArea.textArea;
        textArea.focus();
        var length = textArea.value.length;
        textArea.setSelectionRange(length, length);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var current = this.state.current;
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          ariaLabel = _this$props['aria-label'],
          className = _this$props.className,
          style = _this$props.style;
      return /*#__PURE__*/React.createElement("div", {
        className: classNames(prefixCls, "".concat(prefixCls, "-edit-content"), className),
        style: style
      }, /*#__PURE__*/React.createElement(TextArea, {
        ref: this.setTextarea,
        value: current,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        onCompositionStart: this.onCompositionStart,
        onCompositionEnd: this.onCompositionEnd,
        onBlur: this.onBlur,
        "aria-label": ariaLabel,
        autoSize: true
      }), /*#__PURE__*/React.createElement(Icon, {
        type: "enter",
        className: "".concat(prefixCls, "-edit-content-confirm")
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var prevValue = prevState.prevValue;
      var value = nextProps.value;
      var newState = {
        prevValue: value
      };

      if (prevValue !== value) {
        newState.current = value;
      }

      return newState;
    }
  }]);

  return Editable;
}(React.Component);

polyfill(Editable);

var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
var ellipsisContainer;
var wrapperStyle = {
  padding: 0,
  margin: 0,
  display: 'inline',
  lineHeight: 'inherit'
};

function pxToNumber(value) {
  if (!value) return 0;
  var match = value.match(/^\d*(\.\d*)?/);
  return match ? Number(match[0]) : 0;
}

function styleToString(style) {
  // There are some different behavior between Firefox & Chrome.
  // We have to handle this ourself.
  var styleNames = Array.prototype.slice.apply(style);
  return styleNames.map(function (name) {
    return "".concat(name, ": ").concat(style.getPropertyValue(name), ";");
  }).join('');
}

function mergeChildren(children) {
  var childList = [];
  children.forEach(function (child) {
    var prevChild = childList[childList.length - 1];

    if (typeof child === 'string' && typeof prevChild === 'string') {
      childList[childList.length - 1] += child;
    } else {
      childList.push(child);
    }
  });
  return childList;
}

var measure = (function (originEle, rows, content, fixedContent, ellipsisStr) {
  if (!ellipsisContainer) {
    ellipsisContainer = document.createElement('div');
    ellipsisContainer.setAttribute('aria-hidden', 'true');
    document.body.appendChild(ellipsisContainer);
  } // Get origin style


  var originStyle = window.getComputedStyle(originEle);
  var originCSS = styleToString(originStyle);
  var lineHeight = pxToNumber(originStyle.lineHeight);
  var maxHeight = lineHeight * (rows + 1) + pxToNumber(originStyle.paddingTop) + pxToNumber(originStyle.paddingBottom); // Set shadow

  ellipsisContainer.setAttribute('style', originCSS);
  ellipsisContainer.style.position = 'fixed';
  ellipsisContainer.style.left = '0';
  ellipsisContainer.style.height = 'auto';
  ellipsisContainer.style.minHeight = 'auto';
  ellipsisContainer.style.maxHeight = 'auto';
  ellipsisContainer.style.top = '-999999px';
  ellipsisContainer.style.zIndex = '-1000'; // clean up css overflow

  ellipsisContainer.style.textOverflow = 'clip';
  ellipsisContainer.style.whiteSpace = 'normal';
  ellipsisContainer.style.webkitLineClamp = 'none'; // Render in the fake container

  var contentList = mergeChildren(toArray(content));
  render( /*#__PURE__*/React.createElement("div", {
    style: wrapperStyle
  }, /*#__PURE__*/React.createElement("span", {
    style: wrapperStyle
  }, contentList), /*#__PURE__*/React.createElement("span", {
    style: wrapperStyle
  }, fixedContent)), ellipsisContainer); // wrap in an div for old version react
  // Check if ellipsis in measure div is height enough for content

  function inRange() {
    return ellipsisContainer.offsetHeight < maxHeight;
  } // Skip ellipsis if already match


  if (inRange()) {
    unmountComponentAtNode(ellipsisContainer);
    return {
      content: content,
      text: ellipsisContainer.innerHTML,
      ellipsis: false
    };
  } // We should clone the childNode since they're controlled by React and we can't reuse it without warning


  var childNodes = Array.prototype.slice.apply(ellipsisContainer.childNodes[0].childNodes[0].cloneNode(true).childNodes).filter(function (_ref) {
    var nodeType = _ref.nodeType;
    return nodeType !== COMMENT_NODE;
  });
  var fixedNodes = Array.prototype.slice.apply(ellipsisContainer.childNodes[0].childNodes[1].cloneNode(true).childNodes);
  unmountComponentAtNode(ellipsisContainer); // ========================= Find match ellipsis content =========================

  var ellipsisChildren = [];
  ellipsisContainer.innerHTML = ''; // Create origin content holder

  var ellipsisContentHolder = document.createElement('span');
  ellipsisContainer.appendChild(ellipsisContentHolder);
  var ellipsisTextNode = document.createTextNode(ellipsisStr);
  ellipsisContentHolder.appendChild(ellipsisTextNode);
  fixedNodes.forEach(function (childNode) {
    ellipsisContainer.appendChild(childNode);
  }); // Append before fixed nodes

  function appendChildNode(node) {
    ellipsisContentHolder.insertBefore(node, ellipsisTextNode);
  } // Get maximum text


  function measureText(textNode, fullText) {
    var startLoc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var endLoc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : fullText.length;
    var lastSuccessLoc = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var midLoc = Math.floor((startLoc + endLoc) / 2);
    var currentText = fullText.slice(0, midLoc);
    textNode.textContent = currentText;

    if (startLoc >= endLoc - 1) {
      // Loop when step is small
      for (var step = endLoc; step >= startLoc; step -= 1) {
        var currentStepText = fullText.slice(0, step);
        textNode.textContent = currentStepText;

        if (inRange()) {
          return step === fullText.length ? {
            finished: false,
            reactNode: fullText
          } : {
            finished: true,
            reactNode: currentStepText
          };
        }
      }
    }

    if (inRange()) {
      return measureText(textNode, fullText, midLoc, endLoc, midLoc);
    }

    return measureText(textNode, fullText, startLoc, midLoc, lastSuccessLoc);
  }

  function measureNode(childNode, index) {
    var type = childNode.nodeType;

    if (type === ELEMENT_NODE) {
      // We don't split element, it will keep if whole element can be displayed.
      appendChildNode(childNode);

      if (inRange()) {
        return {
          finished: false,
          reactNode: contentList[index]
        };
      } // Clean up if can not pull in


      ellipsisContentHolder.removeChild(childNode);
      return {
        finished: true,
        reactNode: null
      };
    }

    if (type === TEXT_NODE) {
      var fullText = childNode.textContent || '';
      var textNode = document.createTextNode(fullText);
      appendChildNode(textNode);
      return measureText(textNode, fullText);
    } // Not handle other type of content
    // PS: This code should not be attached after react 16


    return {
      finished: false,
      reactNode: null
    };
  }

  childNodes.some(function (childNode, index) {
    var _measureNode = measureNode(childNode, index),
        finished = _measureNode.finished,
        reactNode = _measureNode.reactNode;

    if (reactNode) {
      ellipsisChildren.push(reactNode);
    }

    return finished;
  });
  return {
    content: ellipsisChildren,
    text: ellipsisContainer.innerHTML,
    ellipsis: true
  };
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof$1(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof$1(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __rest$2 = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var isLineClampSupport = isStyleSupport('webkitLineClamp');
var isTextOverflowSupport = isStyleSupport('textOverflow');

function wrapperDecorations(_ref, content) {
  var mark = _ref.mark,
      code = _ref.code,
      underline = _ref.underline,
      del = _ref["delete"],
      strong = _ref.strong;
  var currentContent = content;

  function wrap(needed, tag) {
    if (!needed) return;
    currentContent = /*#__PURE__*/React.createElement(tag, {}, currentContent);
  }

  wrap(strong, 'strong');
  wrap(underline, 'u');
  wrap(del, 'del');
  wrap(code, 'code');
  wrap(mark, 'mark');
  return currentContent;
}

var ELLIPSIS_STR = '...';

var Base = /*#__PURE__*/function (_React$Component) {
  _inherits(Base, _React$Component);

  var _super = _createSuper(Base);

  function Base() {
    var _this;

    _classCallCheck(this, Base);

    _this = _super.apply(this, arguments);
    _this.state = {
      edit: false,
      copied: false,
      ellipsisText: '',
      ellipsisContent: null,
      isEllipsis: false,
      expanded: false,
      clientRendered: false
    }; // =============== Expend ===============

    _this.onExpandClick = function () {
      var _this$getEllipsis = _this.getEllipsis(),
          onExpand = _this$getEllipsis.onExpand;

      _this.setState({
        expanded: true
      });

      if (onExpand) {
        onExpand();
      }
    }; // ================ Edit ================


    _this.onEditClick = function () {
      _this.triggerEdit(true);
    };

    _this.onEditChange = function (value) {
      var _this$getEditable = _this.getEditable(),
          onChange = _this$getEditable.onChange;

      if (onChange) {
        onChange(value);
      }

      _this.triggerEdit(false);
    };

    _this.onEditCancel = function () {
      _this.triggerEdit(false);
    }; // ================ Copy ================


    _this.onCopyClick = function () {
      var _this$props = _this.props,
          children = _this$props.children,
          copyable = _this$props.copyable;

      var copyConfig = _extends$3({}, _typeof$1(copyable) === 'object' ? copyable : null);

      if (copyConfig.text === undefined) {
        copyConfig.text = String(children);
      }

      copy(copyConfig.text || '');

      _this.setState({
        copied: true
      }, function () {
        if (copyConfig.onCopy) {
          copyConfig.onCopy();
        }

        _this.copyId = window.setTimeout(function () {
          _this.setState({
            copied: false
          });
        }, 3000);
      });
    };

    _this.setContentRef = function (node) {
      _this.content = node;
    };

    _this.setEditRef = function (node) {
      _this.editIcon = node;
    };

    _this.triggerEdit = function (edit) {
      var _this$getEditable2 = _this.getEditable(),
          onStart = _this$getEditable2.onStart;

      if (edit && onStart) {
        onStart();
      }

      _this.setState({
        edit: edit
      }, function () {
        if (!edit && _this.editIcon) {
          _this.editIcon.focus();
        }
      });
    }; // ============== Ellipsis ==============


    _this.resizeOnNextFrame = function () {
      wrapperRaf.cancel(_this.rafId);
      _this.rafId = wrapperRaf(function () {
        // Do not bind `syncEllipsis`. It need for test usage on prototype
        _this.syncEllipsis();
      });
    };

    return _this;
  }

  _createClass(Base, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        clientRendered: true
      });
      this.resizeOnNextFrame();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var children = this.props.children;
      var ellipsis = this.getEllipsis();
      var prevEllipsis = this.getEllipsis(prevProps);

      if (children !== prevProps.children || ellipsis.rows !== prevEllipsis.rows) {
        this.resizeOnNextFrame();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.clearTimeout(this.copyId);
      wrapperRaf.cancel(this.rafId);
    }
  }, {
    key: "getEditable",
    value: function getEditable(props) {
      var edit = this.state.edit;

      var _ref2 = props || this.props,
          editable = _ref2.editable;

      if (!editable) return {
        editing: edit
      };
      return _extends$3({
        editing: edit
      }, _typeof$1(editable) === 'object' ? editable : null);
    }
  }, {
    key: "getEllipsis",
    value: function getEllipsis(props) {
      var _ref3 = props || this.props,
          ellipsis = _ref3.ellipsis;

      if (!ellipsis) return {};
      return _extends$3({
        rows: 1,
        expandable: false
      }, _typeof$1(ellipsis) === 'object' ? ellipsis : null);
    }
  }, {
    key: "canUseCSSEllipsis",
    value: function canUseCSSEllipsis() {
      var clientRendered = this.state.clientRendered;
      var _this$props2 = this.props,
          editable = _this$props2.editable,
          copyable = _this$props2.copyable;

      var _this$getEllipsis2 = this.getEllipsis(),
          rows = _this$getEllipsis2.rows,
          expandable = _this$getEllipsis2.expandable; // Can't use css ellipsis since we need to provide the place for button


      if (editable || copyable || expandable || !clientRendered) {
        return false;
      }

      if (rows === 1) {
        return isTextOverflowSupport;
      }

      return isLineClampSupport;
    }
  }, {
    key: "syncEllipsis",
    value: function syncEllipsis() {
      var _this$state = this.state,
          ellipsisText = _this$state.ellipsisText,
          isEllipsis = _this$state.isEllipsis,
          expanded = _this$state.expanded;

      var _this$getEllipsis3 = this.getEllipsis(),
          rows = _this$getEllipsis3.rows;

      var children = this.props.children;
      if (!rows || rows < 0 || !this.content || expanded) return; // Do not measure if css already support ellipsis

      if (this.canUseCSSEllipsis()) return;
      warning(toArray(children).every(function (child) {
        return typeof child === 'string';
      }));

      var _measure = measure(findDOMNode(this.content), rows, children, this.renderOperations(true), ELLIPSIS_STR),
          content = _measure.content,
          text = _measure.text,
          ellipsis = _measure.ellipsis;

      if (ellipsisText !== text || isEllipsis !== ellipsis) {
        this.setState({
          ellipsisText: text,
          ellipsisContent: content,
          isEllipsis: ellipsis
        });
      }
    }
  }, {
    key: "renderExpand",
    value: function renderExpand(forceRender) {
      var _this$getEllipsis4 = this.getEllipsis(),
          expandable = _this$getEllipsis4.expandable;

      var prefixCls = this.props.prefixCls;
      var _this$state2 = this.state,
          expanded = _this$state2.expanded,
          isEllipsis = _this$state2.isEllipsis;
      if (!expandable) return null; // force render expand icon for measure usage or it will cause dead loop

      if (!forceRender && (expanded || !isEllipsis)) return null;
      return /*#__PURE__*/React.createElement("a", {
        key: "expand",
        className: "".concat(prefixCls, "-expand"),
        onClick: this.onExpandClick,
        "aria-label": this.expandStr
      }, this.expandStr);
    }
  }, {
    key: "renderEdit",
    value: function renderEdit() {
      var _this$props3 = this.props,
          editable = _this$props3.editable,
          prefixCls = _this$props3.prefixCls;
      if (!editable) return;
      return /*#__PURE__*/React.createElement(Tooltip, {
        key: "edit",
        title: this.editStr
      }, /*#__PURE__*/React.createElement(TransButton, {
        ref: this.setEditRef,
        className: "".concat(prefixCls, "-edit"),
        onClick: this.onEditClick,
        "aria-label": this.editStr
      }, /*#__PURE__*/React.createElement(Icon, {
        role: "button",
        type: "edit"
      })));
    }
  }, {
    key: "renderCopy",
    value: function renderCopy() {
      var copied = this.state.copied;
      var _this$props4 = this.props,
          copyable = _this$props4.copyable,
          prefixCls = _this$props4.prefixCls;
      if (!copyable) return;
      var title = copied ? this.copiedStr : this.copyStr;
      return /*#__PURE__*/React.createElement(Tooltip, {
        key: "copy",
        title: title
      }, /*#__PURE__*/React.createElement(TransButton, {
        className: classNames("".concat(prefixCls, "-copy"), copied && "".concat(prefixCls, "-copy-success")),
        onClick: this.onCopyClick,
        "aria-label": title
      }, /*#__PURE__*/React.createElement(Icon, {
        role: "button",
        type: copied ? 'check' : 'copy'
      })));
    }
  }, {
    key: "renderEditInput",
    value: function renderEditInput() {
      var _this$props5 = this.props,
          children = _this$props5.children,
          prefixCls = _this$props5.prefixCls,
          className = _this$props5.className,
          style = _this$props5.style;
      return /*#__PURE__*/React.createElement(Editable, {
        value: typeof children === 'string' ? children : '',
        onSave: this.onEditChange,
        onCancel: this.onEditCancel,
        prefixCls: prefixCls,
        className: className,
        style: style
      });
    }
  }, {
    key: "renderOperations",
    value: function renderOperations(forceRenderExpanded) {
      return [this.renderExpand(forceRenderExpanded), this.renderEdit(), this.renderCopy()].filter(function (node) {
        return node;
      });
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this2 = this;

      var _this$state3 = this.state,
          ellipsisContent = _this$state3.ellipsisContent,
          isEllipsis = _this$state3.isEllipsis,
          expanded = _this$state3.expanded;

      var _a = this.props,
          component = _a.component,
          children = _a.children,
          className = _a.className,
          prefixCls = _a.prefixCls,
          type = _a.type,
          disabled = _a.disabled,
          style = _a.style,
          restProps = __rest$2(_a, ["component", "children", "className", "prefixCls", "type", "disabled", "style"]);

      var _this$getEllipsis5 = this.getEllipsis(),
          rows = _this$getEllipsis5.rows;

      var textProps = omit(restProps, ['prefixCls', 'editable', 'copyable', 'ellipsis', 'mark', 'underline', 'mark', 'code', 'delete', 'underline', 'strong'].concat(_toConsumableArray(configConsumerProps)));
      var cssEllipsis = this.canUseCSSEllipsis();
      var cssTextOverflow = rows === 1 && cssEllipsis;
      var cssLineClamp = rows && rows > 1 && cssEllipsis;
      var textNode = children;
      var ariaLabel = null; // Only use js ellipsis when css ellipsis not support

      if (rows && isEllipsis && !expanded && !cssEllipsis) {
        ariaLabel = String(children); // We move full content to outer element to avoid repeat read the content by accessibility

        textNode = /*#__PURE__*/React.createElement("span", {
          title: String(children),
          "aria-hidden": "true"
        }, ellipsisContent, ELLIPSIS_STR);
      }

      textNode = wrapperDecorations(this.props, textNode);
      return /*#__PURE__*/React.createElement(LocaleReceiver, {
        componentName: "Text"
      }, function (_ref4) {
        var _classNames;

        var edit = _ref4.edit,
            copyStr = _ref4.copy,
            copied = _ref4.copied,
            expand = _ref4.expand;
        _this2.editStr = edit;
        _this2.copyStr = copyStr;
        _this2.copiedStr = copied;
        _this2.expandStr = expand;
        return /*#__PURE__*/React.createElement(ResizeObserver, {
          onResize: _this2.resizeOnNextFrame,
          disabled: !rows
        }, /*#__PURE__*/React.createElement(ExportTypography, _extends$3({
          className: classNames(className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(type), type), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classNames, "".concat(prefixCls, "-ellipsis"), rows), _defineProperty(_classNames, "".concat(prefixCls, "-ellipsis-single-line"), cssTextOverflow), _defineProperty(_classNames, "".concat(prefixCls, "-ellipsis-multiple-line"), cssLineClamp), _classNames)),
          style: _extends$3(_extends$3({}, style), {
            WebkitLineClamp: cssLineClamp ? rows : null
          }),
          component: component,
          ref: _this2.setContentRef,
          "aria-label": ariaLabel
        }, textProps), textNode, _this2.renderOperations()));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$getEditable3 = this.getEditable(),
          editing = _this$getEditable3.editing;

      if (editing) {
        return this.renderEditInput();
      }

      return this.renderContent();
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      return {};
    }
  }]);

  return Base;
}(React.Component);

Base.defaultProps = {
  children: ''
};
polyfill(Base);
var Base$1 = withConfigConsumer({
  prefixCls: 'typography'
})(Base);

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __rest$1 = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var Text = function Text(_a) {
  var ellipsis = _a.ellipsis,
      restProps = __rest$1(_a, ["ellipsis"]);

  warning(_typeof(ellipsis) !== 'object');
  return /*#__PURE__*/React.createElement(Base$1, _extends$2({}, restProps, {
    ellipsis: !!ellipsis,
    component: "span"
  }));
};

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

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
var TITLE_ELE_LIST = tupleNum(1, 2, 3, 4);

var Title = function Title(props) {
  var _props$level = props.level,
      level = _props$level === void 0 ? 1 : _props$level,
      restProps = __rest(props, ["level"]);

  var component;

  if (TITLE_ELE_LIST.indexOf(level) !== -1) {
    component = "h".concat(level);
  } else {
    warning$1(false, 'Title only accept `1 | 2 | 3 | 4` as `level` value.');
    component = 'h1';
  }

  return /*#__PURE__*/React.createElement(Base$1, _extends$1({}, restProps, {
    component: component
  }));
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Paragraph = function Paragraph(props) {
  return /*#__PURE__*/React.createElement(Base$1, _extends({}, props, {
    component: "div"
  }));
};

var Typography = ExportTypography;
Typography.Text = Text;
Typography.Title = Title;
Typography.Paragraph = Paragraph;

export { Typography as default };
