import { n, c as classNames, C as ConfigConsumer } from '../../config-provider.js';
import * as React from 'react';
import { A as Animate, a as addEventListenerWrap } from '../../menu.js';
import { o as omit } from '../../input.js';
import { s as scrollTo, g as getScroll } from '../../scrollTo.js';
import 'react-dom';
import '../../icon.js';

var css = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-back-top {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  position: fixed;\n  right: 100px;\n  bottom: 50px;\n  z-index: 10;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n}\n.ant-back-top-content {\n  width: 40px;\n  height: 40px;\n  overflow: hidden;\n  color: #fff;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.45);\n  border-radius: 20px;\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.ant-back-top-content:hover {\n  background-color: rgba(0, 0, 0, 0.65);\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.ant-back-top-icon {\n  width: 14px;\n  height: 16px;\n  margin: 12px auto;\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAoCAYAAACWwljjAAAABGdBTUEAALGPC/xhBQAAAbtJREFUWAntmMtKw0AUhhMvS5cuxILgQlRUpIggIoKIIoigG1eC+AA+jo+i6FIXBfeuXIgoeKVeitVWJX5HWhhDksnUpp3FDPyZk3Nm5nycmZKkXhAEOXSA3lG7muTeRzmfy6HneUvIhnYkQK+Q9NhAA0Opg0vBEhjBKHiyb8iGMyQMOYuK41BcBSypAL+MYXSKjtFAW7EAGEO3qN4uMQbbAkXiSfRQJ1H6a+yhlkKRcAoVFYiweYNjtCVQJJpBz2GCiPt7fBOZQpFgDpUikse5HgnkM4Fi4QX0Fpc5wf9EbLqpUCy4jMoJSXWhFwbMNgWKhVbRhy5jirhs9fy/oFhgHVVTJEs7RLZ8sSEoJm6iz7SZDMbJ+/OKERQTttCXQRLToRUmrKWCYuA2+jbN0MB4OQobYShfdTCgn/sL1K36M7TLrN3n+758aPy2rrpR6+/od5E8tf/A1uLS9aId5T7J3CNYihkQ4D9PiMdMC7mp4rjB9kjFjZp8BlnVHJBuO1yFXIV0FdDF3RlyFdJVQBdv5AxVdIsq8apiZ2PyYO1EVykesGfZEESsCkweyR8MUW+V8uJ1gkYipmpdP1pm2aJVPEGzAAAAAElFTkSuQmCC) 100%/100% no-repeat;\n}\n@media screen and (max-width: 768px) {\n  .ant-back-top {\n    right: 60px;\n  }\n}\n@media screen and (max-width: 480px) {\n  .ant-back-top {\n    right: 20px;\n  }\n}\n/*# sourceMappingURL=index.css.map */";
n(css,{"prepend":true});

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

function getDefaultTarget() {
  return window;
}

var BackTop = /*#__PURE__*/function (_React$Component) {
  _inherits(BackTop, _React$Component);

  var _super = _createSuper(BackTop);

  function BackTop(props) {
    var _this;

    _classCallCheck(this, BackTop);

    _this = _super.call(this, props);

    _this.scrollToTop = function (e) {
      var _this$props = _this.props,
          _this$props$target = _this$props.target,
          target = _this$props$target === void 0 ? getDefaultTarget : _this$props$target,
          onClick = _this$props.onClick;
      scrollTo(0, {
        getContainer: target
      });

      if (typeof onClick === 'function') {
        onClick(e);
      }
    };

    _this.handleScroll = function () {
      var _this$props2 = _this.props,
          visibilityHeight = _this$props2.visibilityHeight,
          _this$props2$target = _this$props2.target,
          target = _this$props2$target === void 0 ? getDefaultTarget : _this$props2$target;
      var scrollTop = getScroll(target());

      _this.setState({
        visible: scrollTop > visibilityHeight
      });
    };

    _this.renderBackTop = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;
      var _this$props3 = _this.props,
          customizePrefixCls = _this$props3.prefixCls,
          _this$props3$classNam = _this$props3.className,
          className = _this$props3$classNam === void 0 ? '' : _this$props3$classNam,
          children = _this$props3.children;
      var prefixCls = getPrefixCls('back-top', customizePrefixCls);
      var classString = classNames(prefixCls, className);
      var defaultElement = /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-icon")
      })); // fix https://fb.me/react-unknown-prop

      var divProps = omit(_this.props, ['prefixCls', 'className', 'children', 'visibilityHeight', 'target', 'visible']);
      var visible = 'visible' in _this.props ? _this.props.visible : _this.state.visible;
      var backTopBtn = visible ? /*#__PURE__*/React.createElement("div", _extends({}, divProps, {
        className: classString,
        onClick: _this.scrollToTop
      }), children || defaultElement) : null;
      return /*#__PURE__*/React.createElement(Animate, {
        component: "",
        transitionName: "fade"
      }, backTopBtn);
    };

    _this.state = {
      visible: false
    };
    return _this;
  }

  _createClass(BackTop, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var getTarget = this.props.target || getDefaultTarget;
      this.scrollEvent = addEventListenerWrap(getTarget(), 'scroll', this.handleScroll);
      this.handleScroll();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.scrollEvent) {
        this.scrollEvent.remove();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderBackTop);
    }
  }]);

  return BackTop;
}(React.Component);
BackTop.defaultProps = {
  visibilityHeight: 400
};

export { BackTop as default };
