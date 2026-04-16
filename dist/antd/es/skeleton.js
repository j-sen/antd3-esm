import { n, c as classNames, C as ConfigConsumer } from '../../config-provider.js';
import * as React from 'react';

var css = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-skeleton {\n  display: table;\n  width: 100%;\n}\n.ant-skeleton-header {\n  display: table-cell;\n  padding-right: 16px;\n  vertical-align: top;\n}\n.ant-skeleton-header .ant-skeleton-avatar {\n  display: inline-block;\n  vertical-align: top;\n  background: #f2f2f2;\n  width: 32px;\n  height: 32px;\n  line-height: 32px;\n}\n.ant-skeleton-header .ant-skeleton-avatar.ant-skeleton-avatar-circle {\n  border-radius: 50%;\n}\n.ant-skeleton-header .ant-skeleton-avatar-lg {\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n}\n.ant-skeleton-header .ant-skeleton-avatar-lg.ant-skeleton-avatar-circle {\n  border-radius: 50%;\n}\n.ant-skeleton-header .ant-skeleton-avatar-sm {\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n}\n.ant-skeleton-header .ant-skeleton-avatar-sm.ant-skeleton-avatar-circle {\n  border-radius: 50%;\n}\n.ant-skeleton-content {\n  display: table-cell;\n  width: 100%;\n  vertical-align: top;\n}\n.ant-skeleton-content .ant-skeleton-title {\n  width: 100%;\n  height: 16px;\n  margin-top: 16px;\n  background: #f2f2f2;\n}\n.ant-skeleton-content .ant-skeleton-title + .ant-skeleton-paragraph {\n  margin-top: 24px;\n}\n.ant-skeleton-content .ant-skeleton-paragraph {\n  padding: 0;\n}\n.ant-skeleton-content .ant-skeleton-paragraph > li {\n  width: 100%;\n  height: 16px;\n  list-style: none;\n  background: #f2f2f2;\n}\n.ant-skeleton-content .ant-skeleton-paragraph > li:last-child:not(:first-child):not(:nth-child(2)) {\n  width: 61%;\n}\n.ant-skeleton-content .ant-skeleton-paragraph > li + li {\n  margin-top: 16px;\n}\n.ant-skeleton-with-avatar .ant-skeleton-content .ant-skeleton-title {\n  margin-top: 12px;\n}\n.ant-skeleton-with-avatar .ant-skeleton-content .ant-skeleton-title + .ant-skeleton-paragraph {\n  margin-top: 28px;\n}\n.ant-skeleton.ant-skeleton-active .ant-skeleton-content .ant-skeleton-title,\n.ant-skeleton.ant-skeleton-active .ant-skeleton-content .ant-skeleton-paragraph > li {\n  background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);\n  background-size: 400% 100%;\n  animation: ant-skeleton-loading 1.4s ease infinite;\n}\n.ant-skeleton.ant-skeleton-active .ant-skeleton-avatar {\n  background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);\n  background-size: 400% 100%;\n  animation: ant-skeleton-loading 1.4s ease infinite;\n}\n@keyframes ant-skeleton-loading {\n  0% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0 50%;\n  }\n}\n/*# sourceMappingURL=index.css.map */";
n(css,{"prepend":true});

function _typeof$2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$2 = function _typeof(obj) { return typeof obj; }; } else { _typeof$2 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$2(obj); }

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$2(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$2(Constructor.prototype, protoProps); return Constructor; }

function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$2(subClass, superClass); }

function _setPrototypeOf$2(o, p) { _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$2(o, p); }

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf$2(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$2(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$2(this, result); }; }

function _possibleConstructorReturn$2(self, call) { if (call && (_typeof$2(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$2(self); }

function _assertThisInitialized$2(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$2(o) { _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$2(o); }

var SkeletonAvatar = /*#__PURE__*/function (_React$Component) {
  _inherits$2(SkeletonAvatar, _React$Component);

  var _super = _createSuper$2(SkeletonAvatar);

  function SkeletonAvatar() {
    _classCallCheck$2(this, SkeletonAvatar);

    return _super.apply(this, arguments);
  }

  _createClass$2(SkeletonAvatar, [{
    key: "render",
    value: function render() {
      var _classNames, _classNames2;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          style = _this$props.style,
          size = _this$props.size,
          shape = _this$props.shape;
      var sizeCls = classNames((_classNames = {}, _defineProperty$1(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), _defineProperty$1(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _classNames));
      var shapeCls = classNames((_classNames2 = {}, _defineProperty$1(_classNames2, "".concat(prefixCls, "-circle"), shape === 'circle'), _defineProperty$1(_classNames2, "".concat(prefixCls, "-square"), shape === 'square'), _classNames2));
      var sizeStyle = typeof size === 'number' ? {
        width: size,
        height: size,
        lineHeight: "".concat(size, "px")
      } : {};
      return /*#__PURE__*/React.createElement("span", {
        className: classNames(prefixCls, className, sizeCls, shapeCls),
        style: _extends$2(_extends$2({}, sizeStyle), style)
      });
    }
  }]);

  return SkeletonAvatar;
}(React.Component);

SkeletonAvatar.defaultProps = {
  size: 'large'
};

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

var Title = function Title(_ref) {
  var prefixCls = _ref.prefixCls,
      className = _ref.className,
      width = _ref.width,
      style = _ref.style;
  return /*#__PURE__*/React.createElement("h3", {
    className: classNames(prefixCls, className),
    style: _extends$1({
      width: width
    }, style)
  });
};

function _typeof$1(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var Paragraph = /*#__PURE__*/function (_React$Component) {
  _inherits$1(Paragraph, _React$Component);

  var _super = _createSuper$1(Paragraph);

  function Paragraph() {
    _classCallCheck$1(this, Paragraph);

    return _super.apply(this, arguments);
  }

  _createClass$1(Paragraph, [{
    key: "getWidth",
    value: function getWidth(index) {
      var _this$props = this.props,
          width = _this$props.width,
          _this$props$rows = _this$props.rows,
          rows = _this$props$rows === void 0 ? 2 : _this$props$rows;

      if (Array.isArray(width)) {
        return width[index];
      } // last paragraph


      if (rows - 1 === index) {
        return width;
      }

      return undefined;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          className = _this$props2.className,
          style = _this$props2.style,
          rows = _this$props2.rows;

      var rowList = _toConsumableArray(Array(rows)).map(function (_, index) {
        return (
          /*#__PURE__*/
          // eslint-disable-next-line react/no-array-index-key
          React.createElement("li", {
            key: index,
            style: {
              width: _this.getWidth(index)
            }
          })
        );
      });

      return /*#__PURE__*/React.createElement("ul", {
        className: classNames(prefixCls, className),
        style: style
      }, rowList);
    }
  }]);

  return Paragraph;
}(React.Component);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function getComponentProps(prop) {
  if (prop && _typeof(prop) === 'object') {
    return prop;
  }

  return {};
}

function getAvatarBasicProps(hasTitle, hasParagraph) {
  if (hasTitle && !hasParagraph) {
    return {
      shape: 'square'
    };
  }

  return {
    shape: 'circle'
  };
}

function getTitleBasicProps(hasAvatar, hasParagraph) {
  if (!hasAvatar && hasParagraph) {
    return {
      width: '38%'
    };
  }

  if (hasAvatar && hasParagraph) {
    return {
      width: '50%'
    };
  }

  return {};
}

function getParagraphBasicProps(hasAvatar, hasTitle) {
  var basicProps = {}; // Width

  if (!hasAvatar || !hasTitle) {
    basicProps.width = '61%';
  } // Rows


  if (!hasAvatar && hasTitle) {
    basicProps.rows = 3;
  } else {
    basicProps.rows = 2;
  }

  return basicProps;
}

var Skeleton = /*#__PURE__*/function (_React$Component) {
  _inherits(Skeleton, _React$Component);

  var _super = _createSuper(Skeleton);

  function Skeleton() {
    var _this;

    _classCallCheck(this, Skeleton);

    _this = _super.apply(this, arguments);

    _this.renderSkeleton = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;
      var _this$props = _this.props,
          customizePrefixCls = _this$props.prefixCls,
          loading = _this$props.loading,
          className = _this$props.className,
          children = _this$props.children,
          avatar = _this$props.avatar,
          title = _this$props.title,
          paragraph = _this$props.paragraph,
          active = _this$props.active;
      var prefixCls = getPrefixCls('skeleton', customizePrefixCls);

      if (loading || !('loading' in _this.props)) {
        var _classNames;

        var hasAvatar = !!avatar;
        var hasTitle = !!title;
        var hasParagraph = !!paragraph; // Avatar

        var avatarNode;

        if (hasAvatar) {
          var avatarProps = _extends(_extends({
            prefixCls: "".concat(prefixCls, "-avatar")
          }, getAvatarBasicProps(hasTitle, hasParagraph)), getComponentProps(avatar));

          avatarNode = /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-header")
          }, /*#__PURE__*/React.createElement(SkeletonAvatar, avatarProps));
        }

        var contentNode;

        if (hasTitle || hasParagraph) {
          // Title
          var $title;

          if (hasTitle) {
            var titleProps = _extends(_extends({
              prefixCls: "".concat(prefixCls, "-title")
            }, getTitleBasicProps(hasAvatar, hasParagraph)), getComponentProps(title));

            $title = /*#__PURE__*/React.createElement(Title, titleProps);
          } // Paragraph


          var paragraphNode;

          if (hasParagraph) {
            var paragraphProps = _extends(_extends({
              prefixCls: "".concat(prefixCls, "-paragraph")
            }, getParagraphBasicProps(hasAvatar, hasTitle)), getComponentProps(paragraph));

            paragraphNode = /*#__PURE__*/React.createElement(Paragraph, paragraphProps);
          }

          contentNode = /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-content")
          }, $title, paragraphNode);
        }

        var cls = classNames(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-with-avatar"), hasAvatar), _defineProperty(_classNames, "".concat(prefixCls, "-active"), active), _classNames));
        return /*#__PURE__*/React.createElement("div", {
          className: cls
        }, avatarNode, contentNode);
      }

      return children;
    };

    return _this;
  }

  _createClass(Skeleton, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderSkeleton);
    }
  }]);

  return Skeleton;
}(React.Component);

Skeleton.defaultProps = {
  avatar: false,
  title: true,
  paragraph: true
};

export { Skeleton as default };
