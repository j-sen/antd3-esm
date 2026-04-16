import { n, c as classNames, C as ConfigConsumer } from '../../config-provider.js';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { A as Animate } from '../../menu.js';
import { I as Icon } from '../../icon.js';
import { g as getDataOrAriaProps } from '../../getDataOrAriaProps.js';

var css = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-alert {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  position: relative;\n  padding: 8px 15px 8px 37px;\n  word-wrap: break-word;\n  border-radius: 4px;\n}\n.ant-alert.ant-alert-no-icon {\n  padding: 8px 15px;\n}\n.ant-alert.ant-alert-closable {\n  padding-right: 30px;\n}\n.ant-alert-icon {\n  position: absolute;\n  top: 11.5px;\n  left: 16px;\n}\n.ant-alert-description {\n  display: none;\n  font-size: 14px;\n  line-height: 22px;\n}\n.ant-alert-success {\n  background-color: #f6ffed;\n  border: 1px solid #b7eb8f;\n}\n.ant-alert-success .ant-alert-icon {\n  color: #52c41a;\n}\n.ant-alert-info {\n  background-color: #e6f7ff;\n  border: 1px solid #91d5ff;\n}\n.ant-alert-info .ant-alert-icon {\n  color: #1890ff;\n}\n.ant-alert-warning {\n  background-color: #fffbe6;\n  border: 1px solid #ffe58f;\n}\n.ant-alert-warning .ant-alert-icon {\n  color: #faad14;\n}\n.ant-alert-error {\n  background-color: #fff1f0;\n  border: 1px solid #ffa39e;\n}\n.ant-alert-error .ant-alert-icon {\n  color: #f5222d;\n}\n.ant-alert-close-icon {\n  position: absolute;\n  top: 8px;\n  right: 16px;\n  padding: 0;\n  overflow: hidden;\n  font-size: 12px;\n  line-height: 22px;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  cursor: pointer;\n}\n.ant-alert-close-icon .anticon-close {\n  color: rgba(0, 0, 0, 0.45);\n  transition: color 0.3s;\n}\n.ant-alert-close-icon .anticon-close:hover {\n  color: rgba(0, 0, 0, 0.75);\n}\n.ant-alert-close-text {\n  color: rgba(0, 0, 0, 0.45);\n  transition: color 0.3s;\n}\n.ant-alert-close-text:hover {\n  color: rgba(0, 0, 0, 0.75);\n}\n.ant-alert-with-description {\n  position: relative;\n  padding: 15px 15px 15px 64px;\n  color: rgba(0, 0, 0, 0.65);\n  line-height: 1.5;\n  border-radius: 4px;\n}\n.ant-alert-with-description.ant-alert-no-icon {\n  padding: 15px;\n}\n.ant-alert-with-description .ant-alert-icon {\n  position: absolute;\n  top: 16px;\n  left: 24px;\n  font-size: 24px;\n}\n.ant-alert-with-description .ant-alert-close-icon {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  font-size: 14px;\n  cursor: pointer;\n}\n.ant-alert-with-description .ant-alert-message {\n  display: block;\n  margin-bottom: 4px;\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 16px;\n}\n.ant-alert-message {\n  color: rgba(0, 0, 0, 0.85);\n}\n.ant-alert-with-description .ant-alert-description {\n  display: block;\n}\n.ant-alert.ant-alert-closing {\n  height: 0 !important;\n  margin: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  transform-origin: 50% 0;\n  transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n}\n.ant-alert-slide-up-leave {\n  animation: antAlertSlideUpOut 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  animation-fill-mode: both;\n}\n.ant-alert-banner {\n  margin-bottom: 0;\n  border: 0;\n  border-radius: 0;\n}\n@keyframes antAlertSlideUpIn {\n  0% {\n    transform: scaleY(0);\n    transform-origin: 0% 0%;\n    opacity: 0;\n  }\n  100% {\n    transform: scaleY(1);\n    transform-origin: 0% 0%;\n    opacity: 1;\n  }\n}\n@keyframes antAlertSlideUpOut {\n  0% {\n    transform: scaleY(1);\n    transform-origin: 0% 0%;\n    opacity: 1;\n  }\n  100% {\n    transform: scaleY(0);\n    transform-origin: 0% 0%;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=index.css.map */";
n(css,{"prepend":true});

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

function noop() {}

var Alert = /*#__PURE__*/function (_React$Component) {
  _inherits(Alert, _React$Component);

  var _super = _createSuper(Alert);

  function Alert(props) {
    var _this;

    _classCallCheck(this, Alert);

    _this = _super.call(this, props);

    _this.handleClose = function (e) {
      e.preventDefault();
      var dom = ReactDOM.findDOMNode(_assertThisInitialized(_this));
      dom.style.height = "".concat(dom.offsetHeight, "px"); // Magic code
      // 重复一次后才能正确设置 height

      dom.style.height = "".concat(dom.offsetHeight, "px");

      _this.setState({
        closing: true
      });

      (_this.props.onClose || noop)(e);
    };

    _this.animationEnd = function () {
      _this.setState({
        closing: false,
        closed: true
      });

      (_this.props.afterClose || noop)();
    };

    _this.renderAlert = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls;
      var _this$props = _this.props,
          description = _this$props.description,
          customizePrefixCls = _this$props.prefixCls,
          message = _this$props.message,
          closeText = _this$props.closeText,
          banner = _this$props.banner,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? '' : _this$props$className,
          style = _this$props.style,
          icon = _this$props.icon;
      var _this$props2 = _this.props,
          closable = _this$props2.closable,
          type = _this$props2.type,
          showIcon = _this$props2.showIcon,
          iconType = _this$props2.iconType;
      var _this$state = _this.state,
          closing = _this$state.closing,
          closed = _this$state.closed;
      var prefixCls = getPrefixCls('alert', customizePrefixCls); // banner模式默认有 Icon

      showIcon = banner && showIcon === undefined ? true : showIcon; // banner模式默认为警告

      type = banner && type === undefined ? 'warning' : type || 'info';
      var iconTheme = 'filled';

      if (!iconType) {
        switch (type) {
          case 'success':
            iconType = 'check-circle';
            break;

          case 'info':
            iconType = 'info-circle';
            break;

          case 'error':
            iconType = 'close-circle';
            break;

          case 'warning':
            iconType = 'exclamation-circle';
            break;

          default:
            iconType = 'default';
        } // use outline icon in alert with description


        if (description) {
          iconTheme = 'outlined';
        }
      } // closeable when closeText is assigned


      if (closeText) {
        closable = true;
      }

      var alertCls = classNames(prefixCls, "".concat(prefixCls, "-").concat(type), (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-closing"), closing), _defineProperty(_classNames, "".concat(prefixCls, "-with-description"), !!description), _defineProperty(_classNames, "".concat(prefixCls, "-no-icon"), !showIcon), _defineProperty(_classNames, "".concat(prefixCls, "-banner"), !!banner), _defineProperty(_classNames, "".concat(prefixCls, "-closable"), closable), _classNames), className);
      var closeIcon = closable ? /*#__PURE__*/React.createElement("button", {
        type: "button",
        onClick: _this.handleClose,
        className: "".concat(prefixCls, "-close-icon"),
        tabIndex: 0
      }, closeText ? /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-close-text")
      }, closeText) : /*#__PURE__*/React.createElement(Icon, {
        type: "close"
      })) : null;
      var dataOrAriaProps = getDataOrAriaProps(_this.props);
      var iconNode = icon && ( /*#__PURE__*/React.isValidElement(icon) ? /*#__PURE__*/React.cloneElement(icon, {
        className: classNames("".concat(prefixCls, "-icon"), _defineProperty({}, icon.props.className, icon.props.className))
      }) : /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-icon")
      }, icon)) || /*#__PURE__*/React.createElement(Icon, {
        className: "".concat(prefixCls, "-icon"),
        type: iconType,
        theme: iconTheme
      });
      return closed ? null : /*#__PURE__*/React.createElement(Animate, {
        component: "",
        showProp: "data-show",
        transitionName: "".concat(prefixCls, "-slide-up"),
        onEnd: _this.animationEnd
      }, /*#__PURE__*/React.createElement("div", _extends({
        "data-show": !closing,
        className: alertCls,
        style: style
      }, dataOrAriaProps), showIcon ? iconNode : null, /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-message")
      }, message), /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-description")
      }, description), closeIcon));
    };
    _this.state = {
      closing: false,
      closed: false
    };
    return _this;
  }

  _createClass(Alert, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderAlert);
    }
  }]);

  return Alert;
}(React.Component);

export { Alert as default };
