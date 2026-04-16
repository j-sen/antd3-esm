import { n, u as requireClassnames, P as PropTypes, d as getAugmentedNamespace, g as getDefaultExportFromCjs, c as classNames$1, C as ConfigConsumer, p as propTypesExports } from '../../config-provider.js';
import * as React from 'react';
import React__default, { Component } from 'react';
import { p as polyfill } from '../../menu.js';
import { o as omit } from '../../input.js';
import { W as Wave } from '../../wave.js';
import { I as Icon } from '../../icon.js';
import 'react-dom';
import '../../raf.js';

var css = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-switch {\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  min-width: 44px;\n  height: 22px;\n  line-height: 20px;\n  vertical-align: middle;\n  background-color: rgba(0, 0, 0, 0.25);\n  border: 1px solid transparent;\n  border-radius: 100px;\n  cursor: pointer;\n  transition: all 0.36s;\n  user-select: none;\n}\n.ant-switch-inner {\n  display: block;\n  margin-right: 6px;\n  margin-left: 24px;\n  color: #fff;\n  font-size: 12px;\n}\n.ant-switch-loading-icon,\n.ant-switch::after {\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  width: 18px;\n  height: 18px;\n  background-color: #fff;\n  border-radius: 18px;\n  cursor: pointer;\n  transition: all 0.36s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  content: ' ';\n}\n.ant-switch::after {\n  box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);\n}\n.ant-switch:not(.ant-switch-disabled):active::before,\n.ant-switch:not(.ant-switch-disabled):active::after {\n  width: 24px;\n}\n.ant-switch-loading-icon {\n  z-index: 1;\n  display: none;\n  font-size: 12px;\n  background: transparent;\n}\n.ant-switch-loading-icon svg {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n}\n.ant-switch-loading .ant-switch-loading-icon {\n  display: inline-block;\n  color: rgba(0, 0, 0, 0.65);\n}\n.ant-switch-checked.ant-switch-loading .ant-switch-loading-icon {\n  color: #1890ff;\n}\n.ant-switch:focus {\n  outline: 0;\n  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);\n}\n.ant-switch:focus:hover {\n  box-shadow: none;\n}\n.ant-switch-small {\n  min-width: 28px;\n  height: 16px;\n  line-height: 14px;\n}\n.ant-switch-small .ant-switch-inner {\n  margin-right: 3px;\n  margin-left: 18px;\n  font-size: 12px;\n}\n.ant-switch-small::after {\n  width: 12px;\n  height: 12px;\n}\n.ant-switch-small:active::before,\n.ant-switch-small:active::after {\n  width: 16px;\n}\n.ant-switch-small .ant-switch-loading-icon {\n  width: 12px;\n  height: 12px;\n}\n.ant-switch-small.ant-switch-checked .ant-switch-inner {\n  margin-right: 18px;\n  margin-left: 3px;\n}\n.ant-switch-small.ant-switch-checked .ant-switch-loading-icon {\n  left: 100%;\n  margin-left: -13px;\n}\n.ant-switch-small.ant-switch-loading .ant-switch-loading-icon {\n  font-weight: bold;\n  transform: scale(0.66667);\n}\n.ant-switch-checked {\n  background-color: #1890ff;\n}\n.ant-switch-checked .ant-switch-inner {\n  margin-right: 24px;\n  margin-left: 6px;\n}\n.ant-switch-checked::after {\n  left: 100%;\n  margin-left: -1px;\n  transform: translateX(-100%);\n}\n.ant-switch-checked .ant-switch-loading-icon {\n  left: 100%;\n  margin-left: -19px;\n}\n.ant-switch-loading,\n.ant-switch-disabled {\n  cursor: not-allowed;\n  opacity: 0.4;\n}\n.ant-switch-loading *,\n.ant-switch-disabled * {\n  cursor: not-allowed;\n}\n.ant-switch-loading::before,\n.ant-switch-disabled::before,\n.ant-switch-loading::after,\n.ant-switch-disabled::after {\n  cursor: not-allowed;\n}\n@keyframes AntSwitchSmallLoadingCircle {\n  0% {\n    transform: rotate(0deg) scale(0.66667);\n    transform-origin: 50% 50%;\n  }\n  100% {\n    transform: rotate(360deg) scale(0.66667);\n    transform-origin: 50% 50%;\n  }\n}\n/*# sourceMappingURL=index.css.map */";
n(css,{"prepend":true});

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); if (staticProps) _defineProperties$1(Constructor, staticProps); return Constructor; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$1(subClass, superClass); }

function _setPrototypeOf$1(o, p) { _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$1(o, p); }

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }

function _possibleConstructorReturn$1(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$1(self); }

function _assertThisInitialized$1(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$1(o) { _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$1(o); }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var classNames = requireClassnames();

var Switch$1 = /*#__PURE__*/function (_Component) {
  _inherits$1(Switch, _Component);

  var _super = _createSuper$1(Switch);

  function Switch(props) {
    var _this;

    _classCallCheck$1(this, Switch);

    _this = _super.call(this, props);

    _defineProperty$1(_assertThisInitialized$1(_this), "handleClick", function (e) {
      var checked = _this.state.checked;
      var onClick = _this.props.onClick;
      var newChecked = !checked;

      _this.setChecked(newChecked, e);

      if (onClick) {
        onClick(newChecked, e);
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "handleKeyDown", function (e) {
      if (e.keyCode === 37) {
        // Left
        _this.setChecked(false, e);
      } else if (e.keyCode === 39) {
        // Right
        _this.setChecked(true, e);
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "handleMouseUp", function (e) {
      var onMouseUp = _this.props.onMouseUp;

      if (_this.node) {
        _this.node.blur();
      }

      if (onMouseUp) {
        onMouseUp(e);
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "saveNode", function (node) {
      _this.node = node;
    });

    var _checked = false;

    if ('checked' in props) {
      _checked = !!props.checked;
    } else {
      _checked = !!props.defaultChecked;
    }

    _this.state = {
      checked: _checked
    };
    return _this;
  }

  _createClass$1(Switch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          autoFocus = _this$props.autoFocus,
          disabled = _this$props.disabled;

      if (autoFocus && !disabled) {
        this.focus();
      }
    }
  }, {
    key: "setChecked",
    value: function setChecked(checked, e) {
      var _this$props2 = this.props,
          disabled = _this$props2.disabled,
          onChange = _this$props2.onChange;

      if (disabled) {
        return;
      }

      if (!('checked' in this.props)) {
        this.setState({
          checked: checked
        });
      }

      if (onChange) {
        onChange(checked, e);
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      this.node.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.node.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props3 = this.props,
          className = _this$props3.className,
          prefixCls = _this$props3.prefixCls,
          disabled = _this$props3.disabled,
          loadingIcon = _this$props3.loadingIcon,
          checkedChildren = _this$props3.checkedChildren,
          unCheckedChildren = _this$props3.unCheckedChildren,
          restProps = _objectWithoutProperties(_this$props3, ["className", "prefixCls", "disabled", "loadingIcon", "checkedChildren", "unCheckedChildren"]);

      var checked = this.state.checked;
      var switchClassName = classNames((_classNames = {}, _defineProperty$1(_classNames, className, !!className), _defineProperty$1(_classNames, prefixCls, true), _defineProperty$1(_classNames, "".concat(prefixCls, "-checked"), checked), _defineProperty$1(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
      return /*#__PURE__*/React__default.createElement("button", _extends$1({}, restProps, {
        type: "button",
        role: "switch",
        "aria-checked": checked,
        disabled: disabled,
        className: switchClassName,
        ref: this.saveNode,
        onKeyDown: this.handleKeyDown,
        onClick: this.handleClick,
        onMouseUp: this.handleMouseUp
      }), loadingIcon, /*#__PURE__*/React__default.createElement("span", {
        className: "".concat(prefixCls, "-inner")
      }, checked ? checkedChildren : unCheckedChildren));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      var newState = {};
      var checked = nextProps.checked;

      if ('checked' in nextProps) {
        newState.checked = !!checked;
      }

      return newState;
    }
  }]);

  return Switch;
}(Component);

Switch$1.propTypes = {
  className: PropTypes.string,
  prefixCls: PropTypes.string,
  disabled: PropTypes.bool,
  checkedChildren: PropTypes.any,
  unCheckedChildren: PropTypes.any,
  onChange: PropTypes.func,
  onMouseUp: PropTypes.func,
  onClick: PropTypes.func,
  tabIndex: PropTypes.number,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  autoFocus: PropTypes.bool,
  loadingIcon: PropTypes.node
};
Switch$1.defaultProps = {
  prefixCls: 'rc-switch',
  checkedChildren: null,
  unCheckedChildren: null,
  className: '',
  defaultChecked: false
};
polyfill(Switch$1);

var Switch$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: Switch$1
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(Switch$2);

var es;
var hasRequiredEs;

function requireEs () {
	if (hasRequiredEs) return es;
	hasRequiredEs = 1;
	es = require$$0;
	return es;
}

var esExports = requireEs();
var RcSwitch = /*@__PURE__*/getDefaultExportFromCjs(esExports);

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

var Switch = /*#__PURE__*/function (_React$Component) {
  _inherits(Switch, _React$Component);

  var _super = _createSuper(Switch);

  function Switch(props) {
    var _this;

    _classCallCheck(this, Switch);

    _this = _super.call(this, props);

    _this.saveSwitch = function (node) {
      _this.rcSwitch = node;
    };

    _this.renderSwitch = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls;
      var _this$props = _this.props,
          customizePrefixCls = _this$props.prefixCls,
          size = _this$props.size,
          loading = _this$props.loading,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? '' : _this$props$className,
          disabled = _this$props.disabled;
      var prefixCls = getPrefixCls('switch', customizePrefixCls);
      var classes = classNames$1(className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-small"), size === 'small'), _defineProperty(_classNames, "".concat(prefixCls, "-loading"), loading), _classNames));
      var loadingIcon = loading ? /*#__PURE__*/React.createElement(Icon, {
        type: "loading",
        className: "".concat(prefixCls, "-loading-icon")
      }) : null;
      return /*#__PURE__*/React.createElement(Wave, {
        insertExtraNode: true
      }, /*#__PURE__*/React.createElement(RcSwitch, _extends({}, omit(_this.props, ['loading']), {
        prefixCls: prefixCls,
        className: classes,
        disabled: disabled || loading,
        ref: _this.saveSwitch,
        loadingIcon: loadingIcon
      })));
    };
    return _this;
  }

  _createClass(Switch, [{
    key: "focus",
    value: function focus() {
      this.rcSwitch.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.rcSwitch.blur();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderSwitch);
    }
  }]);

  return Switch;
}(React.Component);
Switch.__ANT_SWITCH = true;
Switch.propTypes = {
  prefixCls: propTypesExports.string,
  // HACK: https://github.com/ant-design/ant-design/issues/5368
  // size=default and size=large are the same
  size: propTypesExports.oneOf(['small', 'default', 'large']),
  className: propTypesExports.string
};

export { Switch as default };
