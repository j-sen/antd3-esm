import { n, C as ConfigConsumer, c as classNames } from '../../config-provider.js';
import * as React from 'react';
import { o as omit } from '../../input.js';
import { T as Tabs } from '../../index17.js';
import { R as Row } from '../../row.js';
import { C as Col } from '../../col.js';
import '../../menu.js';
import 'react-dom';
import '../../icon.js';
import '../../tree.js';
import '../../styleChecker.js';
import '../../RowContext.js';
import '../../responsiveObserve.js';
import '../../index.js';

var css = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-card {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  position: relative;\n  background: #fff;\n  border-radius: 2px;\n  transition: all 0.3s;\n}\n.ant-card-hoverable {\n  cursor: pointer;\n}\n.ant-card-hoverable:hover {\n  border-color: rgba(0, 0, 0, 0.09);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);\n}\n.ant-card-bordered {\n  border: 1px solid #e8e8e8;\n}\n.ant-card-head {\n  min-height: 48px;\n  margin-bottom: -1px;\n  padding: 0 24px;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n  font-size: 16px;\n  background: transparent;\n  border-bottom: 1px solid #e8e8e8;\n  border-radius: 2px 2px 0 0;\n  zoom: 1;\n}\n.ant-card-head::before,\n.ant-card-head::after {\n  display: table;\n  content: '';\n}\n.ant-card-head::after {\n  clear: both;\n}\n.ant-card-head-wrapper {\n  display: flex;\n  align-items: center;\n}\n.ant-card-head-title {\n  display: inline-block;\n  flex: 1;\n  padding: 16px 0;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.ant-card-head .ant-tabs {\n  clear: both;\n  margin-bottom: -17px;\n  color: rgba(0, 0, 0, 0.65);\n  font-weight: normal;\n  font-size: 14px;\n}\n.ant-card-head .ant-tabs-bar {\n  border-bottom: 1px solid #e8e8e8;\n}\n.ant-card-extra {\n  float: right;\n  margin-left: auto;\n  padding: 16px 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-weight: normal;\n  font-size: 14px;\n}\n.ant-card-body {\n  padding: 24px;\n  zoom: 1;\n}\n.ant-card-body::before,\n.ant-card-body::after {\n  display: table;\n  content: '';\n}\n.ant-card-body::after {\n  clear: both;\n}\n.ant-card-contain-grid:not(.ant-card-loading) .ant-card-body {\n  margin: -1px 0 0 -1px;\n  padding: 0;\n}\n.ant-card-grid {\n  float: left;\n  width: 33.33%;\n  padding: 24px;\n  border: 0;\n  border-radius: 0;\n  box-shadow: 1px 0 0 0 #e8e8e8, 0 1px 0 0 #e8e8e8, 1px 1px 0 0 #e8e8e8, 1px 0 0 0 #e8e8e8 inset, 0 1px 0 0 #e8e8e8 inset;\n  transition: all 0.3s;\n}\n.ant-card-grid-hoverable:hover {\n  position: relative;\n  z-index: 1;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.ant-card-contain-tabs > .ant-card-head .ant-card-head-title {\n  min-height: 32px;\n  padding-bottom: 0;\n}\n.ant-card-contain-tabs > .ant-card-head .ant-card-extra {\n  padding-bottom: 0;\n}\n.ant-card-cover > * {\n  display: block;\n  width: 100%;\n}\n.ant-card-cover img {\n  border-radius: 2px 2px 0 0;\n}\n.ant-card-actions {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  background: #fafafa;\n  border-top: 1px solid #e8e8e8;\n  zoom: 1;\n}\n.ant-card-actions::before,\n.ant-card-actions::after {\n  display: table;\n  content: '';\n}\n.ant-card-actions::after {\n  clear: both;\n}\n.ant-card-actions > li {\n  float: left;\n  margin: 12px 0;\n  color: rgba(0, 0, 0, 0.45);\n  text-align: center;\n}\n.ant-card-actions > li > span {\n  position: relative;\n  display: block;\n  min-width: 32px;\n  font-size: 14px;\n  line-height: 22px;\n  cursor: pointer;\n}\n.ant-card-actions > li > span:hover {\n  color: #1890ff;\n  transition: color 0.3s;\n}\n.ant-card-actions > li > span a:not(.ant-btn),\n.ant-card-actions > li > span > .anticon {\n  display: inline-block;\n  width: 100%;\n  color: rgba(0, 0, 0, 0.45);\n  line-height: 22px;\n  transition: color 0.3s;\n}\n.ant-card-actions > li > span a:not(.ant-btn):hover,\n.ant-card-actions > li > span > .anticon:hover {\n  color: #1890ff;\n}\n.ant-card-actions > li > span > .anticon {\n  font-size: 16px;\n  line-height: 22px;\n}\n.ant-card-actions > li:not(:last-child) {\n  border-right: 1px solid #e8e8e8;\n}\n.ant-card-type-inner .ant-card-head {\n  padding: 0 24px;\n  background: #fafafa;\n}\n.ant-card-type-inner .ant-card-head-title {\n  padding: 12px 0;\n  font-size: 14px;\n}\n.ant-card-type-inner .ant-card-body {\n  padding: 16px 24px;\n}\n.ant-card-type-inner .ant-card-extra {\n  padding: 13.5px 0;\n}\n.ant-card-meta {\n  margin: -4px 0;\n  zoom: 1;\n}\n.ant-card-meta::before,\n.ant-card-meta::after {\n  display: table;\n  content: '';\n}\n.ant-card-meta::after {\n  clear: both;\n}\n.ant-card-meta-avatar {\n  float: left;\n  padding-right: 16px;\n}\n.ant-card-meta-detail {\n  overflow: hidden;\n}\n.ant-card-meta-detail > div:not(:last-child) {\n  margin-bottom: 8px;\n}\n.ant-card-meta-title {\n  overflow: hidden;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n  font-size: 16px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.ant-card-meta-description {\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-card-loading {\n  overflow: hidden;\n}\n.ant-card-loading .ant-card-body {\n  user-select: none;\n}\n.ant-card-loading-content p {\n  margin: 0;\n}\n.ant-card-loading-block {\n  height: 14px;\n  margin: 4px 0;\n  background: linear-gradient(90deg, rgba(207, 216, 220, 0.2), rgba(207, 216, 220, 0.4), rgba(207, 216, 220, 0.2));\n  background-size: 600% 600%;\n  border-radius: 2px;\n  animation: card-loading 1.4s ease infinite;\n}\n@keyframes card-loading {\n  0%,\n  100% {\n    background-position: 0 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n}\n.ant-card-small > .ant-card-head {\n  min-height: 36px;\n  padding: 0 12px;\n  font-size: 14px;\n}\n.ant-card-small > .ant-card-head > .ant-card-head-wrapper > .ant-card-head-title {\n  padding: 8px 0;\n}\n.ant-card-small > .ant-card-head > .ant-card-head-wrapper > .ant-card-extra {\n  padding: 8px 0;\n  font-size: 14px;\n}\n.ant-card-small > .ant-card-body {\n  padding: 12px;\n}\n/*# sourceMappingURL=index.css.map */";
n(css,{"prepend":true});

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var Grid = function Grid(props) {
  return /*#__PURE__*/React.createElement(ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;

    var customizePrefixCls = props.prefixCls,
        className = props.className,
        _props$hoverable = props.hoverable,
        hoverable = _props$hoverable === void 0 ? true : _props$hoverable,
        others = __rest$2(props, ["prefixCls", "className", "hoverable"]);

    var prefixCls = getPrefixCls('card', customizePrefixCls);
    var classString = classNames("".concat(prefixCls, "-grid"), className, _defineProperty$1({}, "".concat(prefixCls, "-grid-hoverable"), hoverable));
    return /*#__PURE__*/React.createElement("div", _extends$2({}, others, {
      className: classString
    }));
  });
};

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

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

var Meta = function Meta(props) {
  return /*#__PURE__*/React.createElement(ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;

    var customizePrefixCls = props.prefixCls,
        className = props.className,
        avatar = props.avatar,
        title = props.title,
        description = props.description,
        others = __rest$1(props, ["prefixCls", "className", "avatar", "title", "description"]);

    var prefixCls = getPrefixCls('card', customizePrefixCls);
    var classString = classNames("".concat(prefixCls, "-meta"), className);
    var avatarDom = avatar ? /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-meta-avatar")
    }, avatar) : null;
    var titleDom = title ? /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-meta-title")
    }, title) : null;
    var descriptionDom = description ? /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-meta-description")
    }, description) : null;
    var MetaDetail = titleDom || descriptionDom ? /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-meta-detail")
    }, titleDom, descriptionDom) : null;
    return /*#__PURE__*/React.createElement("div", _extends$1({}, others, {
      className: classString
    }), avatarDom, MetaDetail);
  });
};

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

function getAction(actions) {
  var actionList = actions.map(function (action, index) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      React.createElement("li", {
        style: {
          width: "".concat(100 / actions.length, "%")
        },
        key: "action-".concat(index)
      }, /*#__PURE__*/React.createElement("span", null, action))
    );
  });
  return actionList;
}

var Card = /*#__PURE__*/function (_React$Component) {
  _inherits(Card, _React$Component);

  var _super = _createSuper(Card);

  function Card() {
    var _this;

    _classCallCheck(this, Card);

    _this = _super.apply(this, arguments);

    _this.onTabChange = function (key) {
      if (_this.props.onTabChange) {
        _this.props.onTabChange(key);
      }
    };

    _this.renderCard = function (_ref) {
      var _classNames, _extraProps;

      var getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          className = _a.className,
          extra = _a.extra,
          _a$headStyle = _a.headStyle,
          headStyle = _a$headStyle === void 0 ? {} : _a$headStyle,
          _a$bodyStyle = _a.bodyStyle,
          bodyStyle = _a$bodyStyle === void 0 ? {} : _a$bodyStyle,
          title = _a.title,
          loading = _a.loading,
          _a$bordered = _a.bordered,
          bordered = _a$bordered === void 0 ? true : _a$bordered,
          _a$size = _a.size,
          size = _a$size === void 0 ? 'default' : _a$size,
          type = _a.type,
          cover = _a.cover,
          actions = _a.actions,
          tabList = _a.tabList,
          children = _a.children,
          activeTabKey = _a.activeTabKey,
          defaultActiveTabKey = _a.defaultActiveTabKey,
          tabBarExtraContent = _a.tabBarExtraContent,
          others = __rest(_a, ["prefixCls", "className", "extra", "headStyle", "bodyStyle", "title", "loading", "bordered", "size", "type", "cover", "actions", "tabList", "children", "activeTabKey", "defaultActiveTabKey", "tabBarExtraContent"]);

      var prefixCls = getPrefixCls('card', customizePrefixCls);
      var classString = classNames(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-loading"), loading), _defineProperty(_classNames, "".concat(prefixCls, "-bordered"), bordered), _defineProperty(_classNames, "".concat(prefixCls, "-hoverable"), _this.getCompatibleHoverable()), _defineProperty(_classNames, "".concat(prefixCls, "-contain-grid"), _this.isContainGrid()), _defineProperty(_classNames, "".concat(prefixCls, "-contain-tabs"), tabList && tabList.length), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(size), size !== 'default'), _defineProperty(_classNames, "".concat(prefixCls, "-type-").concat(type), !!type), _classNames));
      var loadingBlockStyle = bodyStyle.padding === 0 || bodyStyle.padding === '0px' ? {
        padding: 24
      } : undefined;
      var loadingBlock = /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-loading-content"),
        style: loadingBlockStyle
      }, /*#__PURE__*/React.createElement(Row, {
        gutter: 8
      }, /*#__PURE__*/React.createElement(Col, {
        span: 22
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-loading-block")
      }))), /*#__PURE__*/React.createElement(Row, {
        gutter: 8
      }, /*#__PURE__*/React.createElement(Col, {
        span: 8
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-loading-block")
      })), /*#__PURE__*/React.createElement(Col, {
        span: 15
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-loading-block")
      }))), /*#__PURE__*/React.createElement(Row, {
        gutter: 8
      }, /*#__PURE__*/React.createElement(Col, {
        span: 6
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-loading-block")
      })), /*#__PURE__*/React.createElement(Col, {
        span: 18
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-loading-block")
      }))), /*#__PURE__*/React.createElement(Row, {
        gutter: 8
      }, /*#__PURE__*/React.createElement(Col, {
        span: 13
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-loading-block")
      })), /*#__PURE__*/React.createElement(Col, {
        span: 9
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-loading-block")
      }))), /*#__PURE__*/React.createElement(Row, {
        gutter: 8
      }, /*#__PURE__*/React.createElement(Col, {
        span: 4
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-loading-block")
      })), /*#__PURE__*/React.createElement(Col, {
        span: 3
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-loading-block")
      })), /*#__PURE__*/React.createElement(Col, {
        span: 16
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-loading-block")
      }))));
      var hasActiveTabKey = activeTabKey !== undefined;
      var extraProps = (_extraProps = {}, _defineProperty(_extraProps, hasActiveTabKey ? 'activeKey' : 'defaultActiveKey', hasActiveTabKey ? activeTabKey : defaultActiveTabKey), _defineProperty(_extraProps, "tabBarExtraContent", tabBarExtraContent), _extraProps);
      var head;
      var tabs = tabList && tabList.length ? /*#__PURE__*/React.createElement(Tabs, _extends({}, extraProps, {
        className: "".concat(prefixCls, "-head-tabs"),
        size: "large",
        onChange: _this.onTabChange
      }), tabList.map(function (item) {
        return /*#__PURE__*/React.createElement(Tabs.TabPane, {
          tab: item.tab,
          disabled: item.disabled,
          key: item.key
        });
      })) : null;

      if (title || extra || tabs) {
        head = /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-head"),
          style: headStyle
        }, /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-head-wrapper")
        }, title && /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-head-title")
        }, title), extra && /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-extra")
        }, extra)), tabs);
      }

      var coverDom = cover ? /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-cover")
      }, cover) : null;
      var body = /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-body"),
        style: bodyStyle
      }, loading ? loadingBlock : children);
      var actionDom = actions && actions.length ? /*#__PURE__*/React.createElement("ul", {
        className: "".concat(prefixCls, "-actions")
      }, getAction(actions)) : null;
      var divProps = omit(others, ['onTabChange', 'noHovering', 'hoverable']);
      return /*#__PURE__*/React.createElement("div", _extends({}, divProps, {
        className: classString
      }), head, coverDom, body, actionDom);
    };

    return _this;
  }

  _createClass(Card, [{
    key: "componentDidMount",
    value: function componentDidMount() {
    } // For 2.x compatible

  }, {
    key: "getCompatibleHoverable",
    value: function getCompatibleHoverable() {
      var _this$props = this.props,
          noHovering = _this$props.noHovering,
          hoverable = _this$props.hoverable;

      if ('noHovering' in this.props) {
        return !noHovering || hoverable;
      }

      return !!hoverable;
    }
  }, {
    key: "isContainGrid",
    value: function isContainGrid() {
      var containGrid;
      React.Children.forEach(this.props.children, function (element) {
        if (element && element.type && element.type === Grid) {
          containGrid = true;
        }
      });
      return containGrid;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderCard);
    }
  }]);

  return Card;
}(React.Component);
Card.Grid = Grid;
Card.Meta = Meta;

export { Card as default };
