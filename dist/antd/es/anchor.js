import { n, c as classNames, C as ConfigConsumer, p as propTypesExports } from '../../config-provider.js';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { a as addEventListenerWrap, p as polyfill } from '../../menu.js';
import { A as Affix } from '../../index.js';
import { s as scrollTo, g as getScroll } from '../../scrollTo.js';
import '../../icon.js';
import '../../input.js';
import '../../index2.js';
import '../../warning.js';

var css = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-anchor {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  position: relative;\n  padding-left: 2px;\n}\n.ant-anchor-wrapper {\n  margin-left: -4px;\n  padding-left: 4px;\n  overflow: auto;\n  background-color: #fff;\n}\n.ant-anchor-ink {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n}\n.ant-anchor-ink::before {\n  position: relative;\n  display: block;\n  width: 2px;\n  height: 100%;\n  margin: 0 auto;\n  background-color: #e8e8e8;\n  content: ' ';\n}\n.ant-anchor-ink-ball {\n  position: absolute;\n  left: 50%;\n  display: none;\n  width: 8px;\n  height: 8px;\n  background-color: #fff;\n  border: 2px solid #1890ff;\n  border-radius: 8px;\n  transform: translateX(-50%);\n  transition: top 0.3s ease-in-out;\n}\n.ant-anchor-ink-ball.visible {\n  display: inline-block;\n}\n.ant-anchor.fixed .ant-anchor-ink .ant-anchor-ink-ball {\n  display: none;\n}\n.ant-anchor-link {\n  padding: 7px 0 7px 16px;\n  line-height: 1.143;\n}\n.ant-anchor-link-title {\n  position: relative;\n  display: block;\n  margin-bottom: 6px;\n  overflow: hidden;\n  color: rgba(0, 0, 0, 0.65);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  transition: all 0.3s;\n}\n.ant-anchor-link-title:only-child {\n  margin-bottom: 0;\n}\n.ant-anchor-link-active > .ant-anchor-link-title {\n  color: #1890ff;\n}\n.ant-anchor-link .ant-anchor-link {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n/*# sourceMappingURL=index.css.map */";
n(css,{"prepend":true});

function _typeof$1(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function getDefaultContainer() {
  return window;
}

function getOffsetTop(element, container) {
  if (!element) {
    return 0;
  }

  if (!element.getClientRects().length) {
    return 0;
  }

  var rect = element.getBoundingClientRect();

  if (rect.width || rect.height) {
    if (container === window) {
      container = element.ownerDocument.documentElement;
      return rect.top - container.clientTop;
    }

    return rect.top - container.getBoundingClientRect().top;
  }

  return rect.top;
}

var sharpMatcherRegx = /#([^#]+)$/;

var Anchor = /*#__PURE__*/function (_React$Component) {
  _inherits$1(Anchor, _React$Component);

  var _super = _createSuper$1(Anchor);

  function Anchor() {
    var _this;

    _classCallCheck$1(this, Anchor);

    _this = _super.apply(this, arguments);
    _this.state = {
      activeLink: null
    };
    _this.links = [];

    _this.handleScrollTo = function (link) {
      var _this$props = _this.props,
          offsetTop = _this$props.offsetTop,
          getContainer = _this$props.getContainer,
          targetOffset = _this$props.targetOffset;

      _this.setCurrentActiveLink(link);

      var container = getContainer();
      var scrollTop = getScroll(container);
      var sharpLinkMatch = sharpMatcherRegx.exec(link);

      if (!sharpLinkMatch) {
        return;
      }

      var targetElement = document.getElementById(sharpLinkMatch[1]);

      if (!targetElement) {
        return;
      }

      var eleOffsetTop = getOffsetTop(targetElement, container);
      var y = scrollTop + eleOffsetTop;
      y -= targetOffset !== undefined ? targetOffset : offsetTop || 0;
      _this.animating = true;
      scrollTo(y, {
        callback: function callback() {
          _this.animating = false;
        },
        getContainer: getContainer
      });
    };

    _this.saveInkNode = function (node) {
      _this.inkNode = node;
    };

    _this.setCurrentActiveLink = function (link) {
      var activeLink = _this.state.activeLink;
      var onChange = _this.props.onChange;

      if (activeLink !== link) {
        _this.setState({
          activeLink: link
        });

        if (onChange) {
          onChange(link);
        }
      }
    };

    _this.handleScroll = function () {
      if (_this.animating) {
        return;
      }

      var _this$props2 = _this.props,
          offsetTop = _this$props2.offsetTop,
          bounds = _this$props2.bounds,
          targetOffset = _this$props2.targetOffset;

      var currentActiveLink = _this.getCurrentAnchor(targetOffset !== undefined ? targetOffset : offsetTop || 0, bounds);

      _this.setCurrentActiveLink(currentActiveLink);
    };

    _this.updateInk = function () {
      if (typeof document === 'undefined') {
        return;
      }

      var _assertThisInitialize = _assertThisInitialized$1(_this),
          prefixCls = _assertThisInitialize.prefixCls;

      var anchorNode = ReactDOM.findDOMNode(_assertThisInitialized$1(_this));
      var linkNode = anchorNode.getElementsByClassName("".concat(prefixCls, "-link-title-active"))[0];

      if (linkNode) {
        _this.inkNode.style.top = "".concat(linkNode.offsetTop + linkNode.clientHeight / 2 - 4.5, "px");
      }
    };

    _this.renderAnchor = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;
      var _this$props3 = _this.props,
          customizePrefixCls = _this$props3.prefixCls,
          _this$props3$classNam = _this$props3.className,
          className = _this$props3$classNam === void 0 ? '' : _this$props3$classNam,
          style = _this$props3.style,
          offsetTop = _this$props3.offsetTop,
          affix = _this$props3.affix,
          showInkInFixed = _this$props3.showInkInFixed,
          children = _this$props3.children,
          getContainer = _this$props3.getContainer;
      var activeLink = _this.state.activeLink;
      var prefixCls = getPrefixCls('anchor', customizePrefixCls); // To support old version react.
      // Have to add prefixCls on the instance.
      // https://github.com/facebook/react/issues/12397

      _this.prefixCls = prefixCls;
      var inkClass = classNames("".concat(prefixCls, "-ink-ball"), {
        visible: activeLink
      });
      var wrapperClass = classNames(className, "".concat(prefixCls, "-wrapper"));
      var anchorClass = classNames(prefixCls, {
        fixed: !affix && !showInkInFixed
      });

      var wrapperStyle = _extends({
        maxHeight: offsetTop ? "calc(100vh - ".concat(offsetTop, "px)") : '100vh'
      }, style);

      var anchorContent = /*#__PURE__*/React.createElement("div", {
        className: wrapperClass,
        style: wrapperStyle
      }, /*#__PURE__*/React.createElement("div", {
        className: anchorClass
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-ink")
      }, /*#__PURE__*/React.createElement("span", {
        className: inkClass,
        ref: _this.saveInkNode
      })), children));
      return !affix ? anchorContent : /*#__PURE__*/React.createElement(Affix, {
        offsetTop: offsetTop,
        target: getContainer
      }, anchorContent);
    };

    return _this;
  }

  _createClass$1(Anchor, [{
    key: "getChildContext",
    value: function getChildContext() {
      var _this2 = this;

      var antAnchor = {
        registerLink: function registerLink(link) {
          if (!_this2.links.includes(link)) {
            _this2.links.push(link);
          }
        },
        unregisterLink: function unregisterLink(link) {
          var index = _this2.links.indexOf(link);

          if (index !== -1) {
            _this2.links.splice(index, 1);
          }
        },
        activeLink: this.state.activeLink,
        scrollTo: this.handleScrollTo,
        onClick: this.props.onClick
      };
      return {
        antAnchor: antAnchor
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var getContainer = this.props.getContainer;
      this.scrollContainer = getContainer();
      this.scrollEvent = addEventListenerWrap(this.scrollContainer, 'scroll', this.handleScroll);
      this.handleScroll();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.scrollEvent) {
        var getContainer = this.props.getContainer;
        var currentContainer = getContainer();

        if (this.scrollContainer !== currentContainer) {
          this.scrollContainer = currentContainer;
          this.scrollEvent.remove();
          this.scrollEvent = addEventListenerWrap(this.scrollContainer, 'scroll', this.handleScroll);
          this.handleScroll();
        }
      }

      this.updateInk();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.scrollEvent) {
        this.scrollEvent.remove();
      }
    }
  }, {
    key: "getCurrentAnchor",
    value: function getCurrentAnchor() {
      var offsetTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var bounds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
      var getCurrentAnchor = this.props.getCurrentAnchor;

      if (typeof getCurrentAnchor === 'function') {
        return getCurrentAnchor();
      }

      var activeLink = '';

      if (typeof document === 'undefined') {
        return activeLink;
      }

      var linkSections = [];
      var getContainer = this.props.getContainer;
      var container = getContainer();
      this.links.forEach(function (link) {
        var sharpLinkMatch = sharpMatcherRegx.exec(link.toString());

        if (!sharpLinkMatch) {
          return;
        }

        var target = document.getElementById(sharpLinkMatch[1]);

        if (target) {
          var top = getOffsetTop(target, container);

          if (top < offsetTop + bounds) {
            linkSections.push({
              link: link,
              top: top
            });
          }
        }
      });

      if (linkSections.length) {
        var maxSection = linkSections.reduce(function (prev, curr) {
          return curr.top > prev.top ? curr : prev;
        });
        return maxSection.link;
      }

      return '';
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderAnchor);
    }
  }]);

  return Anchor;
}(React.Component);
Anchor.defaultProps = {
  affix: true,
  showInkInFixed: false,
  getContainer: getDefaultContainer
};
Anchor.childContextTypes = {
  antAnchor: propTypesExports.object
};

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var AnchorLink = /*#__PURE__*/function (_React$Component) {
  _inherits(AnchorLink, _React$Component);

  var _super = _createSuper(AnchorLink);

  function AnchorLink() {
    var _this;

    _classCallCheck(this, AnchorLink);

    _this = _super.apply(this, arguments);

    _this.handleClick = function (e) {
      var _this$context$antAnch = _this.context.antAnchor,
          scrollTo = _this$context$antAnch.scrollTo,
          onClick = _this$context$antAnch.onClick;
      var _this$props = _this.props,
          href = _this$props.href,
          title = _this$props.title;

      if (onClick) {
        onClick(e, {
          title: title,
          href: href
        });
      }

      scrollTo(href);
    };

    _this.renderAnchorLink = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;
      var _this$props2 = _this.props,
          customizePrefixCls = _this$props2.prefixCls,
          href = _this$props2.href,
          title = _this$props2.title,
          children = _this$props2.children,
          className = _this$props2.className,
          target = _this$props2.target;
      var prefixCls = getPrefixCls('anchor', customizePrefixCls);
      var active = _this.context.antAnchor.activeLink === href;
      var wrapperClassName = classNames(className, "".concat(prefixCls, "-link"), _defineProperty({}, "".concat(prefixCls, "-link-active"), active));
      var titleClassName = classNames("".concat(prefixCls, "-link-title"), _defineProperty({}, "".concat(prefixCls, "-link-title-active"), active));
      return /*#__PURE__*/React.createElement("div", {
        className: wrapperClassName
      }, /*#__PURE__*/React.createElement("a", {
        className: titleClassName,
        href: href,
        title: typeof title === 'string' ? title : '',
        target: target,
        onClick: _this.handleClick
      }, title), children);
    };

    return _this;
  }

  _createClass(AnchorLink, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.context.antAnchor.registerLink(this.props.href);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref2) {
      var prevHref = _ref2.href;
      var href = this.props.href;

      if (prevHref !== href) {
        this.context.antAnchor.unregisterLink(prevHref);
        this.context.antAnchor.registerLink(href);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.context.antAnchor.unregisterLink(this.props.href);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderAnchorLink);
    }
  }]);

  return AnchorLink;
}(React.Component);

AnchorLink.defaultProps = {
  href: '#'
};
AnchorLink.contextTypes = {
  antAnchor: propTypesExports.object
};
polyfill(AnchorLink);

Anchor.Link = AnchorLink;

export { Anchor as default };
