import { c as classNames, C as ConfigConsumer, n, L as LocaleReceiver } from '../../config-provider.js';
import * as React from 'react';
import { I as Icon } from '../../icon.js';
import { B as Breadcrumb } from '../../index3.js';
import { T as TransButton } from '../../transButton.js';
import '../../tree.js';
import '../../menu.js';
import 'react-dom';
import '../../input.js';
import '../../dropdown.js';
import '../../index4.js';
import '../../Divider.js';
import '../../index5.js';
import '../../index6.js';
import '../../Sider.js';
import '../../raf.js';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var Avatar = /*#__PURE__*/function (_React$Component) {
  _inherits(Avatar, _React$Component);

  var _super = _createSuper(Avatar);

  function Avatar() {
    var _this;

    _classCallCheck(this, Avatar);

    _this = _super.apply(this, arguments);
    _this.state = {
      scale: 1,
      mounted: false,
      isImgExist: true
    };

    _this.setScale = function () {
      if (!_this.avatarChildren || !_this.avatarNode) {
        return;
      }

      var childrenWidth = _this.avatarChildren.offsetWidth; // offsetWidth avoid affecting be transform scale

      var nodeWidth = _this.avatarNode.offsetWidth; // denominator is 0 is no meaning

      if (childrenWidth === 0 || nodeWidth === 0 || _this.lastChildrenWidth === childrenWidth && _this.lastNodeWidth === nodeWidth) {
        return;
      }

      _this.lastChildrenWidth = childrenWidth;
      _this.lastNodeWidth = nodeWidth; // add 4px gap for each side to get better performance

      _this.setState({
        scale: nodeWidth - 8 < childrenWidth ? (nodeWidth - 8) / childrenWidth : 1
      });
    };

    _this.handleImgLoadError = function () {
      var onError = _this.props.onError;
      var errorFlag = onError ? onError() : undefined;

      if (errorFlag !== false) {
        _this.setState({
          isImgExist: false
        });
      }
    };

    _this.renderAvatar = function (_ref) {
      var _classNames, _classNames2;

      var getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          shape = _a.shape,
          size = _a.size,
          src = _a.src,
          srcSet = _a.srcSet,
          icon = _a.icon,
          className = _a.className,
          alt = _a.alt,
          others = __rest(_a, ["prefixCls", "shape", "size", "src", "srcSet", "icon", "className", "alt"]);

      var _this$state = _this.state,
          isImgExist = _this$state.isImgExist,
          scale = _this$state.scale,
          mounted = _this$state.mounted;
      var prefixCls = getPrefixCls('avatar', customizePrefixCls);
      var sizeCls = classNames((_classNames = {}, _defineProperty$1(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), _defineProperty$1(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _classNames));
      var classString = classNames(prefixCls, className, sizeCls, (_classNames2 = {}, _defineProperty$1(_classNames2, "".concat(prefixCls, "-").concat(shape), shape), _defineProperty$1(_classNames2, "".concat(prefixCls, "-image"), src && isImgExist), _defineProperty$1(_classNames2, "".concat(prefixCls, "-icon"), icon), _classNames2));
      var sizeStyle = typeof size === 'number' ? {
        width: size,
        height: size,
        lineHeight: "".concat(size, "px"),
        fontSize: icon ? size / 2 : 18
      } : {};
      var children = _this.props.children;

      if (src && isImgExist) {
        children = /*#__PURE__*/React.createElement("img", {
          src: src,
          srcSet: srcSet,
          onError: _this.handleImgLoadError,
          alt: alt
        });
      } else if (icon) {
        if (typeof icon === 'string') {
          children = /*#__PURE__*/React.createElement(Icon, {
            type: icon
          });
        } else {
          children = icon;
        }
      } else {
        var childrenNode = _this.avatarChildren;

        if (childrenNode || scale !== 1) {
          var transformString = "scale(".concat(scale, ") translateX(-50%)");
          var childrenStyle = {
            msTransform: transformString,
            WebkitTransform: transformString,
            transform: transformString
          };
          var sizeChildrenStyle = typeof size === 'number' ? {
            lineHeight: "".concat(size, "px")
          } : {};
          children = /*#__PURE__*/React.createElement("span", {
            className: "".concat(prefixCls, "-string"),
            ref: function ref(node) {
              return _this.avatarChildren = node;
            },
            style: _extends(_extends({}, sizeChildrenStyle), childrenStyle)
          }, children);
        } else {
          var _childrenStyle = {};

          if (!mounted) {
            _childrenStyle.opacity = 0;
          }

          children = /*#__PURE__*/React.createElement("span", {
            className: "".concat(prefixCls, "-string"),
            style: {
              opacity: 0
            },
            ref: function ref(node) {
              return _this.avatarChildren = node;
            }
          }, children);
        }
      }

      return /*#__PURE__*/React.createElement("span", _extends({}, others, {
        style: _extends(_extends({}, sizeStyle), others.style),
        className: classString,
        ref: function ref(node) {
          return _this.avatarNode = node;
        }
      }), children);
    };

    return _this;
  }

  _createClass(Avatar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setScale();
      this.setState({
        mounted: true
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.setScale();

      if (prevProps.src !== this.props.src) {
        this.setState({
          isImgExist: true,
          scale: 1
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderAvatar);
    }
  }]);

  return Avatar;
}(React.Component);
Avatar.defaultProps = {
  shape: 'circle',
  size: 'default'
};

var css = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-page-header {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  position: relative;\n  padding: 16px 24px;\n  background-color: #fff;\n}\n.ant-page-header-ghost {\n  background-color: inherit;\n}\n.ant-page-header.has-breadcrumb {\n  padding-top: 12px;\n}\n.ant-page-header.has-footer {\n  padding-bottom: 0;\n}\n.ant-page-header-back {\n  float: left;\n  margin: 8px 0;\n  margin-right: 16px;\n  font-size: 16px;\n  line-height: 1;\n}\n.ant-page-header-back-button {\n  color: #1890ff;\n  text-decoration: none;\n  outline: none;\n  transition: color 0.3s;\n  color: #000;\n  cursor: pointer;\n}\n.ant-page-header-back-button:focus,\n.ant-page-header-back-button:hover {\n  color: #40a9ff;\n}\n.ant-page-header-back-button:active {\n  color: #096dd9;\n}\n.ant-page-header .ant-divider-vertical {\n  height: 14px;\n  margin: 0 12px;\n  vertical-align: middle;\n}\n.ant-breadcrumb + .ant-page-header-heading {\n  margin-top: 8px;\n}\n.ant-page-header-heading {\n  width: 100%;\n  overflow: hidden;\n}\n.ant-page-header-heading-title {\n  display: block;\n  float: left;\n  margin-bottom: 0;\n  padding-right: 12px;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 32px;\n}\n.ant-page-header-heading .ant-avatar {\n  float: left;\n  margin-right: 12px;\n}\n.ant-page-header-heading-sub-title {\n  float: left;\n  margin: 5px 0;\n  margin-right: 12px;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 14px;\n  line-height: 22px;\n}\n.ant-page-header-heading-tags {\n  float: left;\n  margin: 4px 0;\n}\n.ant-page-header-heading-extra {\n  float: right;\n}\n.ant-page-header-heading-extra > * {\n  margin-left: 8px;\n}\n.ant-page-header-heading-extra > *:first-child {\n  margin-left: 0;\n}\n.ant-page-header-content {\n  padding-top: 12px;\n  overflow: hidden;\n}\n.ant-page-header-footer {\n  margin-top: 16px;\n}\n.ant-page-header-footer .ant-tabs-bar {\n  margin-bottom: 1px;\n  border-bottom: 0;\n}\n.ant-page-header-footer .ant-tabs-bar .ant-tabs-nav .ant-tabs-tab {\n  padding: 8px;\n  font-size: 16px;\n}\n@media (max-width: 576px) {\n  .ant-page-header-heading-extra {\n    display: block;\n    float: unset;\n    width: 100%;\n    padding-top: 12px;\n    overflow: hidden;\n  }\n}\n/*# sourceMappingURL=index.css.map */";
n(css,{"prepend":true});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var renderBack = function renderBack(prefixCls, backIcon, onBack) {
  if (!backIcon || !onBack) {
    return null;
  }

  return /*#__PURE__*/React.createElement(LocaleReceiver, {
    componentName: "PageHeader"
  }, function (_ref) {
    var back = _ref.back;
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-back")
    }, /*#__PURE__*/React.createElement(TransButton, {
      onClick: function onClick(e) {
        if (onBack) {
          onBack(e);
        }
      },
      className: "".concat(prefixCls, "-back-button"),
      "aria-label": back
    }, backIcon));
  });
};

var renderBreadcrumb = function renderBreadcrumb(breadcrumb) {
  return /*#__PURE__*/React.createElement(Breadcrumb, breadcrumb);
};

var renderTitle = function renderTitle(prefixCls, props) {
  var title = props.title,
      avatar = props.avatar,
      subTitle = props.subTitle,
      tags = props.tags,
      extra = props.extra,
      backIcon = props.backIcon,
      onBack = props.onBack;
  var headingPrefixCls = "".concat(prefixCls, "-heading");

  if (title || subTitle || tags || extra) {
    var backIconDom = renderBack(prefixCls, backIcon, onBack);
    return /*#__PURE__*/React.createElement("div", {
      className: headingPrefixCls
    }, backIconDom, avatar && /*#__PURE__*/React.createElement(Avatar, avatar), title && /*#__PURE__*/React.createElement("span", {
      className: "".concat(headingPrefixCls, "-title")
    }, title), subTitle && /*#__PURE__*/React.createElement("span", {
      className: "".concat(headingPrefixCls, "-sub-title")
    }, subTitle), tags && /*#__PURE__*/React.createElement("span", {
      className: "".concat(headingPrefixCls, "-tags")
    }, tags), extra && /*#__PURE__*/React.createElement("span", {
      className: "".concat(headingPrefixCls, "-extra")
    }, extra));
  }

  return null;
};

var renderFooter = function renderFooter(prefixCls, footer) {
  if (footer) {
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-footer")
    }, footer);
  }

  return null;
};

var renderChildren = function renderChildren(prefixCls, children) {
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-content")
  }, children);
};

var PageHeader = function PageHeader(props) {
  return /*#__PURE__*/React.createElement(ConfigConsumer, null, function (_ref2) {
    var getPrefixCls = _ref2.getPrefixCls,
        pageHeader = _ref2.pageHeader;
    var customizePrefixCls = props.prefixCls,
        style = props.style,
        footer = props.footer,
        children = props.children,
        breadcrumb = props.breadcrumb,
        customizeClassName = props.className;
    var ghost = true; // Use `ghost` from `props` or from `ConfigProvider` instead.

    if ('ghost' in props) {
      ghost = props.ghost;
    } else if (pageHeader && 'ghost' in pageHeader) {
      ghost = pageHeader.ghost;
    }

    var prefixCls = getPrefixCls('page-header', customizePrefixCls);
    var breadcrumbDom = breadcrumb && breadcrumb.routes ? renderBreadcrumb(breadcrumb) : null;
    var className = classNames(prefixCls, customizeClassName, _defineProperty({
      'has-breadcrumb': breadcrumbDom,
      'has-footer': footer
    }, "".concat(prefixCls, "-ghost"), ghost));
    return /*#__PURE__*/React.createElement("div", {
      className: className,
      style: style
    }, breadcrumbDom, renderTitle(prefixCls, props), children && renderChildren(prefixCls, children), renderFooter(prefixCls, footer));
  });
};

PageHeader.defaultProps = {
  backIcon: /*#__PURE__*/React.createElement(Icon, {
    type: "arrow-left"
  })
};

export { PageHeader as default };
