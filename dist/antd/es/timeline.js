import { n, C as ConfigConsumer, c as classNames } from '../../config-provider.js';
import * as React from 'react';
import { o as omit } from '../../input.js';
import { I as Icon } from '../../icon.js';
import '../../menu.js';
import 'react-dom';

var css = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-timeline {\n  box-sizing: border-box;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  font-feature-settings: 'tnum';\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.ant-timeline-item {\n  position: relative;\n  margin: 0;\n  padding: 0 0 20px;\n  font-size: 14px;\n  list-style: none;\n}\n.ant-timeline-item-tail {\n  position: absolute;\n  top: 10px;\n  left: 4px;\n  height: calc(100% - 10px);\n  border-left: 2px solid #e8e8e8;\n}\n.ant-timeline-item-pending .ant-timeline-item-head {\n  font-size: 12px;\n  background-color: transparent;\n}\n.ant-timeline-item-pending .ant-timeline-item-tail {\n  display: none;\n}\n.ant-timeline-item-head {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background-color: #fff;\n  border: 2px solid transparent;\n  border-radius: 100px;\n}\n.ant-timeline-item-head-blue {\n  color: #1890ff;\n  border-color: #1890ff;\n}\n.ant-timeline-item-head-red {\n  color: #f5222d;\n  border-color: #f5222d;\n}\n.ant-timeline-item-head-green {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n.ant-timeline-item-head-gray {\n  color: rgba(0, 0, 0, 0.25);\n  border-color: rgba(0, 0, 0, 0.25);\n}\n.ant-timeline-item-head-custom {\n  position: absolute;\n  top: 5.5px;\n  left: 5px;\n  width: auto;\n  height: auto;\n  margin-top: 0;\n  padding: 3px 1px;\n  line-height: 1;\n  text-align: center;\n  border: 0;\n  border-radius: 0;\n  transform: translate(-50%, -50%);\n}\n.ant-timeline-item-content {\n  position: relative;\n  top: -6px;\n  margin: 0 0 0 18px;\n  word-break: break-word;\n}\n.ant-timeline-item-last > .ant-timeline-item-tail {\n  display: none;\n}\n.ant-timeline-item-last > .ant-timeline-item-content {\n  min-height: 48px;\n}\n.ant-timeline.ant-timeline-alternate .ant-timeline-item-tail,\n.ant-timeline.ant-timeline-right .ant-timeline-item-tail,\n.ant-timeline.ant-timeline-alternate .ant-timeline-item-head,\n.ant-timeline.ant-timeline-right .ant-timeline-item-head,\n.ant-timeline.ant-timeline-alternate .ant-timeline-item-head-custom,\n.ant-timeline.ant-timeline-right .ant-timeline-item-head-custom {\n  left: 50%;\n}\n.ant-timeline.ant-timeline-alternate .ant-timeline-item-head,\n.ant-timeline.ant-timeline-right .ant-timeline-item-head {\n  margin-left: -4px;\n}\n.ant-timeline.ant-timeline-alternate .ant-timeline-item-head-custom,\n.ant-timeline.ant-timeline-right .ant-timeline-item-head-custom {\n  margin-left: 1px;\n}\n.ant-timeline.ant-timeline-alternate .ant-timeline-item-left .ant-timeline-item-content,\n.ant-timeline.ant-timeline-right .ant-timeline-item-left .ant-timeline-item-content {\n  left: calc(50% - 4px);\n  width: calc(50% - 14px);\n  text-align: left;\n}\n.ant-timeline.ant-timeline-alternate .ant-timeline-item-right .ant-timeline-item-content,\n.ant-timeline.ant-timeline-right .ant-timeline-item-right .ant-timeline-item-content {\n  width: calc(50% - 12px);\n  margin: 0;\n  text-align: right;\n}\n.ant-timeline.ant-timeline-right .ant-timeline-item-right .ant-timeline-item-tail,\n.ant-timeline.ant-timeline-right .ant-timeline-item-right .ant-timeline-item-head,\n.ant-timeline.ant-timeline-right .ant-timeline-item-right .ant-timeline-item-head-custom {\n  left: calc(100% - 4px - 2px);\n}\n.ant-timeline.ant-timeline-right .ant-timeline-item-right .ant-timeline-item-content {\n  width: calc(100% - 18px);\n}\n.ant-timeline.ant-timeline-pending .ant-timeline-item-last .ant-timeline-item-tail {\n  display: block;\n  height: calc(100% - 14px);\n  border-left: 2px dotted #e8e8e8;\n}\n.ant-timeline.ant-timeline-reverse .ant-timeline-item-last .ant-timeline-item-tail {\n  display: none;\n}\n.ant-timeline.ant-timeline-reverse .ant-timeline-item-pending .ant-timeline-item-tail {\n  top: 15px;\n  display: block;\n  height: calc(100% - 15px);\n  border-left: 2px dotted #e8e8e8;\n}\n.ant-timeline.ant-timeline-reverse .ant-timeline-item-pending .ant-timeline-item-content {\n  min-height: 48px;\n}\n/*# sourceMappingURL=index.css.map */";
n(css,{"prepend":true});

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var TimelineItem = function TimelineItem(props) {
  return /*#__PURE__*/React.createElement(ConfigConsumer, null, function (_ref) {
    var _classNames, _classNames2;

    var getPrefixCls = _ref.getPrefixCls;

    var customizePrefixCls = props.prefixCls,
        className = props.className,
        _props$color = props.color,
        color = _props$color === void 0 ? '' : _props$color,
        children = props.children,
        pending = props.pending,
        dot = props.dot,
        restProps = __rest$1(props, ["prefixCls", "className", "color", "children", "pending", "dot"]);

    var prefixCls = getPrefixCls('timeline', customizePrefixCls);
    var itemClassName = classNames((_classNames = {}, _defineProperty$1(_classNames, "".concat(prefixCls, "-item"), true), _defineProperty$1(_classNames, "".concat(prefixCls, "-item-pending"), pending), _classNames), className);
    var dotClassName = classNames((_classNames2 = {}, _defineProperty$1(_classNames2, "".concat(prefixCls, "-item-head"), true), _defineProperty$1(_classNames2, "".concat(prefixCls, "-item-head-custom"), dot), _defineProperty$1(_classNames2, "".concat(prefixCls, "-item-head-").concat(color), true), _classNames2));
    return /*#__PURE__*/React.createElement("li", _extends$1({}, omit(restProps, ['position']), {
      className: itemClassName
    }), /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-item-tail")
    }), /*#__PURE__*/React.createElement("div", {
      className: dotClassName,
      style: {
        borderColor: /blue|red|green|gray/.test(color) ? undefined : color
      }
    }, dot), /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-item-content")
    }, children));
  });
};

TimelineItem.defaultProps = {
  color: 'blue',
  pending: false,
  position: ''
};

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var Timeline = /*#__PURE__*/function (_React$Component) {
  _inherits(Timeline, _React$Component);

  var _super = _createSuper(Timeline);

  function Timeline() {
    var _this;

    _classCallCheck(this, Timeline);

    _this = _super.apply(this, arguments);

    _this.renderTimeline = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          _a$pending = _a.pending,
          pending = _a$pending === void 0 ? null : _a$pending,
          pendingDot = _a.pendingDot,
          children = _a.children,
          className = _a.className,
          reverse = _a.reverse,
          mode = _a.mode,
          restProps = __rest(_a, ["prefixCls", "pending", "pendingDot", "children", "className", "reverse", "mode"]);

      var prefixCls = getPrefixCls('timeline', customizePrefixCls);
      var pendingNode = typeof pending === 'boolean' ? null : pending;
      var classString = classNames(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-pending"), !!pending), _defineProperty(_classNames, "".concat(prefixCls, "-reverse"), !!reverse), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(mode), !!mode), _classNames), className);
      var pendingItem = pending ? /*#__PURE__*/React.createElement(TimelineItem, {
        pending: !!pending,
        dot: pendingDot || /*#__PURE__*/React.createElement(Icon, {
          type: "loading"
        })
      }, pendingNode) : null;
      var timeLineItems = reverse ? [pendingItem].concat(_toConsumableArray(React.Children.toArray(children).reverse())) : [].concat(_toConsumableArray(React.Children.toArray(children)), [pendingItem]);

      var getPositionCls = function getPositionCls(ele, idx) {
        if (mode === 'alternate') {
          if (ele.props.position === 'right') return "".concat(prefixCls, "-item-right");
          if (ele.props.position === 'left') return "".concat(prefixCls, "-item-left");
          return idx % 2 === 0 ? "".concat(prefixCls, "-item-left") : "".concat(prefixCls, "-item-right");
        }

        if (mode === 'left') return "".concat(prefixCls, "-item-left");
        if (mode === 'right') return "".concat(prefixCls, "-item-right");
        if (ele.props.position === 'right') return "".concat(prefixCls, "-item-right");
        return '';
      }; // Remove falsy items


      var truthyItems = timeLineItems.filter(function (item) {
        return !!item;
      });
      var itemsCount = React.Children.count(truthyItems);
      var lastCls = "".concat(prefixCls, "-item-last");
      var items = React.Children.map(truthyItems, function (ele, idx) {
        var pendingClass = idx === itemsCount - 2 ? lastCls : '';
        var readyClass = idx === itemsCount - 1 ? lastCls : '';
        return /*#__PURE__*/React.cloneElement(ele, {
          className: classNames([ele.props.className, !reverse && !!pending ? pendingClass : readyClass, getPositionCls(ele, idx)])
        });
      });
      return /*#__PURE__*/React.createElement("ul", _extends({}, restProps, {
        className: classString
      }), items);
    };

    return _this;
  }

  _createClass(Timeline, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderTimeline);
    }
  }]);

  return Timeline;
}(React.Component);
Timeline.Item = TimelineItem;
Timeline.defaultProps = {
  reverse: false,
  mode: ''
};

export { Timeline as default };
