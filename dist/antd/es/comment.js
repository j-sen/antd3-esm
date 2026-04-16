import { n, c as classNames, C as ConfigConsumer } from '../../config-provider.js';
import * as React from 'react';

var css = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-comment {\n  position: relative;\n}\n.ant-comment-inner {\n  display: flex;\n  padding: 16px 0;\n}\n.ant-comment-avatar {\n  position: relative;\n  flex-shrink: 0;\n  margin-right: 12px;\n  cursor: pointer;\n}\n.ant-comment-avatar img {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n}\n.ant-comment-content {\n  position: relative;\n  flex: 1 1 auto;\n  min-width: 1px;\n  font-size: 14px;\n  word-wrap: break-word;\n}\n.ant-comment-content-author {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  margin-bottom: 4px;\n  font-size: 14px;\n}\n.ant-comment-content-author > a,\n.ant-comment-content-author > span {\n  padding-right: 8px;\n  font-size: 12px;\n  line-height: 18px;\n}\n.ant-comment-content-author-name {\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 14px;\n  transition: color 0.3s;\n}\n.ant-comment-content-author-name > * {\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-comment-content-author-name > *:hover {\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-comment-content-author-time {\n  color: #ccc;\n  white-space: nowrap;\n  cursor: auto;\n}\n.ant-comment-content-detail p {\n  white-space: pre-wrap;\n}\n.ant-comment-actions {\n  margin-top: 12px;\n  padding-left: 0;\n}\n.ant-comment-actions > li {\n  display: inline-block;\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-comment-actions > li > span {\n  padding-right: 10px;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 12px;\n  cursor: pointer;\n  transition: color 0.3s;\n  user-select: none;\n}\n.ant-comment-actions > li > span:hover {\n  color: #595959;\n}\n.ant-comment-nested {\n  margin-left: 44px;\n}\n/*# sourceMappingURL=index.css.map */";
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
  if (!actions || !actions.length) {
    return null;
  } // eslint-disable-next-line react/no-array-index-key


  var actionList = actions.map(function (action, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: "action-".concat(index)
    }, action);
  });
  return actionList;
}

var Comment = /*#__PURE__*/function (_React$Component) {
  _inherits(Comment, _React$Component);

  var _super = _createSuper(Comment);

  function Comment() {
    var _this;

    _classCallCheck(this, Comment);

    _this = _super.apply(this, arguments);

    _this.renderNested = function (prefixCls, children) {
      return /*#__PURE__*/React.createElement("div", {
        className: classNames("".concat(prefixCls, "-nested"))
      }, children);
    };

    _this.renderComment = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          actions = _a.actions,
          author = _a.author,
          avatar = _a.avatar,
          children = _a.children,
          className = _a.className,
          content = _a.content,
          customizePrefixCls = _a.prefixCls,
          style = _a.style,
          datetime = _a.datetime,
          otherProps = __rest(_a, ["actions", "author", "avatar", "children", "className", "content", "prefixCls", "style", "datetime"]);

      var prefixCls = getPrefixCls('comment', customizePrefixCls);
      var avatarDom = /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-avatar")
      }, typeof avatar === 'string' ? /*#__PURE__*/React.createElement("img", {
        src: avatar,
        alt: "comment-avatar"
      }) : avatar);
      var actionDom = actions && actions.length ? /*#__PURE__*/React.createElement("ul", {
        className: "".concat(prefixCls, "-actions")
      }, getAction(actions)) : null;
      var authorContent = /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-content-author")
      }, author && /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-content-author-name")
      }, author), datetime && /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-content-author-time")
      }, datetime));
      var contentDom = /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, authorContent, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-content-detail")
      }, content), actionDom);
      var comment = /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-inner")
      }, avatarDom, contentDom);
      return /*#__PURE__*/React.createElement("div", _extends({}, otherProps, {
        className: classNames(prefixCls, className),
        style: style
      }), comment, children ? _this.renderNested(prefixCls, children) : null);
    };

    return _this;
  }

  _createClass(Comment, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderComment);
    }
  }]);

  return Comment;
}(React.Component);

export { Comment as default };
