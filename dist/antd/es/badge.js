import { n, C as ConfigConsumer, c as classNames, p as propTypesExports } from '../../config-provider.js';
import * as React from 'react';
import { p as polyfill, A as Animate } from '../../menu.js';
import { o as omit } from '../../input.js';
import { P as PresetColorTypes } from '../../colors.js';
import 'react-dom';
import '../../icon.js';

var css = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-badge {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  position: relative;\n  display: inline-block;\n  color: unset;\n  line-height: 1;\n}\n.ant-badge-count {\n  min-width: 20px;\n  height: 20px;\n  padding: 0 6px;\n  color: #fff;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 20px;\n  white-space: nowrap;\n  text-align: center;\n  background: #f5222d;\n  border-radius: 10px;\n  box-shadow: 0 0 0 1px #fff;\n}\n.ant-badge-count a,\n.ant-badge-count a:hover {\n  color: #fff;\n}\n.ant-badge-multiple-words {\n  padding: 0 8px;\n}\n.ant-badge-dot {\n  width: 6px;\n  height: 6px;\n  background: #f5222d;\n  border-radius: 100%;\n  box-shadow: 0 0 0 1px #fff;\n}\n.ant-badge-count,\n.ant-badge-dot,\n.ant-badge .ant-scroll-number-custom-component {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 1;\n  transform: translate(50%, -50%);\n  transform-origin: 100% 0%;\n}\n.ant-badge-status {\n  line-height: inherit;\n  vertical-align: baseline;\n}\n.ant-badge-status-dot {\n  position: relative;\n  top: -1px;\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  vertical-align: middle;\n  border-radius: 50%;\n}\n.ant-badge-status-success {\n  background-color: #52c41a;\n}\n.ant-badge-status-processing {\n  position: relative;\n  background-color: #1890ff;\n}\n.ant-badge-status-processing::after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 1px solid #1890ff;\n  border-radius: 50%;\n  animation: antStatusProcessing 1.2s infinite ease-in-out;\n  content: '';\n}\n.ant-badge-status-default {\n  background-color: #d9d9d9;\n}\n.ant-badge-status-error {\n  background-color: #f5222d;\n}\n.ant-badge-status-warning {\n  background-color: #faad14;\n}\n.ant-badge-status-pink {\n  background: #eb2f96;\n}\n.ant-badge-status-magenta {\n  background: #eb2f96;\n}\n.ant-badge-status-red {\n  background: #f5222d;\n}\n.ant-badge-status-volcano {\n  background: #fa541c;\n}\n.ant-badge-status-orange {\n  background: #fa8c16;\n}\n.ant-badge-status-yellow {\n  background: #fadb14;\n}\n.ant-badge-status-gold {\n  background: #faad14;\n}\n.ant-badge-status-cyan {\n  background: #13c2c2;\n}\n.ant-badge-status-lime {\n  background: #a0d911;\n}\n.ant-badge-status-green {\n  background: #52c41a;\n}\n.ant-badge-status-blue {\n  background: #1890ff;\n}\n.ant-badge-status-geekblue {\n  background: #2f54eb;\n}\n.ant-badge-status-purple {\n  background: #722ed1;\n}\n.ant-badge-status-text {\n  margin-left: 8px;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n}\n.ant-badge-zoom-appear,\n.ant-badge-zoom-enter {\n  animation: antZoomBadgeIn 0.3s cubic-bezier(0.12, 0.4, 0.29, 1.46);\n  animation-fill-mode: both;\n}\n.ant-badge-zoom-leave {\n  animation: antZoomBadgeOut 0.3s cubic-bezier(0.71, -0.46, 0.88, 0.6);\n  animation-fill-mode: both;\n}\n.ant-badge-not-a-wrapper:not(.ant-badge-status) {\n  vertical-align: middle;\n}\n.ant-badge-not-a-wrapper .ant-scroll-number {\n  position: relative;\n  top: auto;\n  display: block;\n}\n.ant-badge-not-a-wrapper .ant-badge-count {\n  transform: none;\n}\n@keyframes antStatusProcessing {\n  0% {\n    transform: scale(0.8);\n    opacity: 0.5;\n  }\n  100% {\n    transform: scale(2.4);\n    opacity: 0;\n  }\n}\n.ant-scroll-number {\n  overflow: hidden;\n}\n.ant-scroll-number-only {\n  display: inline-block;\n  height: 20px;\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.ant-scroll-number-only > p.ant-scroll-number-only-unit {\n  height: 20px;\n  margin: 0;\n}\n.ant-scroll-number-symbol {\n  vertical-align: top;\n}\n@keyframes antZoomBadgeIn {\n  0% {\n    transform: scale(0) translate(50%, -50%);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1) translate(50%, -50%);\n  }\n}\n@keyframes antZoomBadgeOut {\n  0% {\n    transform: scale(1) translate(50%, -50%);\n  }\n  100% {\n    transform: scale(0) translate(50%, -50%);\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=index.css.map */";
n(css,{"prepend":true});

function _typeof$1(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); if (staticProps) _defineProperties$1(Constructor, staticProps); return Constructor; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$1(subClass, superClass); }

function _setPrototypeOf$1(o, p) { _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$1(o, p); }

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }

function _possibleConstructorReturn$1(self, call) { if (call && (_typeof$1(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$1(self); }

function _assertThisInitialized$1(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$1(o) { _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$1(o); }

function getNumberArray(num) {
  return num ? num.toString().split('').reverse().map(function (i) {
    var current = Number(i);
    return isNaN(current) ? i : current;
  }) : [];
}

function renderNumberList(position, className) {
  var childrenToReturn = [];

  for (var i = 0; i < 30; i++) {
    childrenToReturn.push( /*#__PURE__*/React.createElement("p", {
      key: i.toString(),
      className: classNames(className, {
        current: position === i
      })
    }, i % 10));
  }

  return childrenToReturn;
}

var ScrollNumber = /*#__PURE__*/function (_React$Component) {
  _inherits$1(ScrollNumber, _React$Component);

  var _super = _createSuper$1(ScrollNumber);

  function ScrollNumber(props) {
    var _this;

    _classCallCheck$1(this, ScrollNumber);

    _this = _super.call(this, props);

    _this.onAnimated = function () {
      var onAnimated = _this.props.onAnimated;

      if (onAnimated) {
        onAnimated();
      }
    };

    _this.renderScrollNumber = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;
      var _this$props = _this.props,
          customizePrefixCls = _this$props.prefixCls,
          className = _this$props.className,
          style = _this$props.style,
          title = _this$props.title,
          _this$props$component = _this$props.component,
          component = _this$props$component === void 0 ? 'sup' : _this$props$component,
          displayComponent = _this$props.displayComponent; // fix https://fb.me/react-unknown-prop

      var restProps = omit(_this.props, ['count', 'onAnimated', 'component', 'prefixCls', 'displayComponent']);
      var prefixCls = getPrefixCls('scroll-number', customizePrefixCls);

      var newProps = _extends$1(_extends$1({}, restProps), {
        className: classNames(prefixCls, className),
        title: title
      }); // allow specify the border
      // mock border-color by box-shadow for compatible with old usage:
      // <Badge count={4} style={{ backgroundColor: '#fff', color: '#999', borderColor: '#d9d9d9' }} />


      if (style && style.borderColor) {
        newProps.style = _extends$1(_extends$1({}, style), {
          boxShadow: "0 0 0 1px ".concat(style.borderColor, " inset")
        });
      }

      if (displayComponent) {
        return /*#__PURE__*/React.cloneElement(displayComponent, {
          className: classNames("".concat(prefixCls, "-custom-component"), displayComponent.props && displayComponent.props.className)
        });
      }

      return /*#__PURE__*/React.createElement(component, newProps, _this.renderNumberElement(prefixCls));
    };

    _this.state = {
      animateStarted: true,
      count: props.count
    };
    return _this;
  }

  _createClass$1(ScrollNumber, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_, prevState) {
      var _this2 = this;

      this.lastCount = prevState.count;
      var animateStarted = this.state.animateStarted;

      if (animateStarted) {
        this.clearTimeout(); // Let browser has time to reset the scroller before actually
        // performing the transition.

        this.timeout = setTimeout(function () {
          // eslint-disable-next-line react/no-did-update-set-state
          _this2.setState(function (__, props) {
            return {
              animateStarted: false,
              count: props.count
            };
          }, _this2.onAnimated);
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearTimeout();
    }
  }, {
    key: "getPositionByNum",
    value: function getPositionByNum(num, i) {
      var count = this.state.count;
      var currentCount = Math.abs(Number(count));
      var lastCount = Math.abs(Number(this.lastCount));
      var currentDigit = Math.abs(getNumberArray(this.state.count)[i]);
      var lastDigit = Math.abs(getNumberArray(this.lastCount)[i]);

      if (this.state.animateStarted) {
        return 10 + num;
      } // 同方向则在同一侧切换数字


      if (currentCount > lastCount) {
        if (currentDigit >= lastDigit) {
          return 10 + num;
        }

        return 20 + num;
      }

      if (currentDigit <= lastDigit) {
        return 10 + num;
      }

      return num;
    }
  }, {
    key: "renderCurrentNumber",
    value: function renderCurrentNumber(prefixCls, num, i) {
      if (typeof num === 'number') {
        var position = this.getPositionByNum(num, i);
        var removeTransition = this.state.animateStarted || getNumberArray(this.lastCount)[i] === undefined;
        return /*#__PURE__*/React.createElement('span', {
          className: "".concat(prefixCls, "-only"),
          style: {
            transition: removeTransition ? 'none' : undefined,
            msTransform: "translateY(".concat(-position * 100, "%)"),
            WebkitTransform: "translateY(".concat(-position * 100, "%)"),
            transform: "translateY(".concat(-position * 100, "%)")
          },
          key: i
        }, renderNumberList(position, "".concat(prefixCls, "-only-unit")));
      }

      return /*#__PURE__*/React.createElement("span", {
        key: "symbol",
        className: "".concat(prefixCls, "-symbol")
      }, num);
    }
  }, {
    key: "renderNumberElement",
    value: function renderNumberElement(prefixCls) {
      var _this3 = this;

      var count = this.state.count;

      if (count && Number(count) % 1 === 0) {
        return getNumberArray(count).map(function (num, i) {
          return _this3.renderCurrentNumber(prefixCls, num, i);
        }).reverse();
      }

      return count;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderScrollNumber);
    }
  }, {
    key: "clearTimeout",
    value: function (_clearTimeout) {
      function clearTimeout() {
        return _clearTimeout.apply(this, arguments);
      }

      clearTimeout.toString = function () {
        return _clearTimeout.toString();
      };

      return clearTimeout;
    }(function () {
      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = undefined;
      }
    })
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, nextState) {
      if ('count' in nextProps) {
        if (nextState.count === nextProps.count) {
          return null;
        }

        return {
          animateStarted: true
        };
      }

      return null;
    }
  }]);

  return ScrollNumber;
}(React.Component);

ScrollNumber.defaultProps = {
  count: null,
  onAnimated: function onAnimated() {}
};
polyfill(ScrollNumber);

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

function isPresetColor(color) {
  return PresetColorTypes.indexOf(color) !== -1;
}

var Badge = /*#__PURE__*/function (_React$Component) {
  _inherits(Badge, _React$Component);

  var _super = _createSuper(Badge);

  function Badge() {
    var _this;

    _classCallCheck(this, Badge);

    _this = _super.apply(this, arguments);

    _this.renderBadge = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          customizeScrollNumberPrefixCls = _a.scrollNumberPrefixCls,
          children = _a.children,
          status = _a.status,
          text = _a.text,
          color = _a.color,
          restProps = __rest(_a, ["prefixCls", "scrollNumberPrefixCls", "children", "status", "text", "color"]);

      var omitArr = ['count', 'showZero', 'overflowCount', 'className', 'style', 'dot', 'offset', 'title'];
      var prefixCls = getPrefixCls('badge', customizePrefixCls);
      var scrollNumberPrefixCls = getPrefixCls('scroll-number', customizeScrollNumberPrefixCls);

      var scrollNumber = _this.renderBadgeNumber(prefixCls, scrollNumberPrefixCls);

      var statusText = _this.renderStatusText(prefixCls);

      var statusCls = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-status-dot"), _this.hasStatus()), _defineProperty(_classNames, "".concat(prefixCls, "-status-").concat(status), !!status), _defineProperty(_classNames, "".concat(prefixCls, "-status-").concat(color), isPresetColor(color)), _classNames));
      var statusStyle = {};

      if (color && !isPresetColor(color)) {
        statusStyle.background = color;
      } // <Badge status="success" />


      if (!children && _this.hasStatus()) {
        var styleWithOffset = _this.getStyleWithOffset();

        var statusTextColor = styleWithOffset && styleWithOffset.color;
        return /*#__PURE__*/React.createElement("span", _extends({}, omit(restProps, omitArr), {
          className: _this.getBadgeClassName(prefixCls),
          style: styleWithOffset
        }), /*#__PURE__*/React.createElement("span", {
          className: statusCls,
          style: statusStyle
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            color: statusTextColor
          },
          className: "".concat(prefixCls, "-status-text")
        }, text));
      }

      return /*#__PURE__*/React.createElement("span", _extends({}, omit(restProps, omitArr), {
        className: _this.getBadgeClassName(prefixCls)
      }), children, /*#__PURE__*/React.createElement(Animate, {
        component: "",
        showProp: "data-show",
        transitionName: children ? "".concat(prefixCls, "-zoom") : '',
        transitionAppear: true
      }, scrollNumber), statusText);
    };

    return _this;
  }

  _createClass(Badge, [{
    key: "getNumberedDispayCount",
    value: function getNumberedDispayCount() {
      var _this$props = this.props,
          count = _this$props.count,
          overflowCount = _this$props.overflowCount;
      var displayCount = count > overflowCount ? "".concat(overflowCount, "+") : count;
      return displayCount;
    }
  }, {
    key: "getDispayCount",
    value: function getDispayCount() {
      var isDot = this.isDot(); // dot mode don't need count

      if (isDot) {
        return '';
      }

      return this.getNumberedDispayCount();
    }
  }, {
    key: "getScrollNumberTitle",
    value: function getScrollNumberTitle() {
      var _this$props2 = this.props,
          title = _this$props2.title,
          count = _this$props2.count;

      if (title) {
        return title;
      }

      return typeof count === 'string' || typeof count === 'number' ? count : undefined;
    }
  }, {
    key: "getStyleWithOffset",
    value: function getStyleWithOffset() {
      var _this$props3 = this.props,
          offset = _this$props3.offset,
          style = _this$props3.style;
      return offset ? _extends({
        right: -parseInt(offset[0], 10),
        marginTop: offset[1]
      }, style) : style;
    }
  }, {
    key: "getBadgeClassName",
    value: function getBadgeClassName(prefixCls) {
      var _classNames2;

      var _this$props4 = this.props,
          className = _this$props4.className,
          children = _this$props4.children;
      return classNames(className, prefixCls, (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-status"), this.hasStatus()), _defineProperty(_classNames2, "".concat(prefixCls, "-not-a-wrapper"), !children), _classNames2));
    }
  }, {
    key: "hasStatus",
    value: function hasStatus() {
      var _this$props5 = this.props,
          status = _this$props5.status,
          color = _this$props5.color;
      return !!status || !!color;
    }
  }, {
    key: "isZero",
    value: function isZero() {
      var numberedDispayCount = this.getNumberedDispayCount();
      return numberedDispayCount === '0' || numberedDispayCount === 0;
    }
  }, {
    key: "isDot",
    value: function isDot() {
      var dot = this.props.dot;
      var isZero = this.isZero();
      return dot && !isZero || this.hasStatus();
    }
  }, {
    key: "isHidden",
    value: function isHidden() {
      var showZero = this.props.showZero;
      var displayCount = this.getDispayCount();
      var isZero = this.isZero();
      var isDot = this.isDot();
      var isEmpty = displayCount === null || displayCount === undefined || displayCount === '';
      return (isEmpty || isZero && !showZero) && !isDot;
    }
  }, {
    key: "renderStatusText",
    value: function renderStatusText(prefixCls) {
      var text = this.props.text;
      var hidden = this.isHidden();
      return hidden || !text ? null : /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-status-text")
      }, text);
    }
  }, {
    key: "renderDispayComponent",
    value: function renderDispayComponent() {
      var count = this.props.count;
      var customNode = count;

      if (!customNode || _typeof(customNode) !== 'object') {
        return undefined;
      }

      return /*#__PURE__*/React.cloneElement(customNode, {
        style: _extends(_extends({}, this.getStyleWithOffset()), customNode.props && customNode.props.style)
      });
    }
  }, {
    key: "renderBadgeNumber",
    value: function renderBadgeNumber(prefixCls, scrollNumberPrefixCls) {
      var _classNames3;

      var _this$props6 = this.props,
          status = _this$props6.status,
          count = _this$props6.count,
          color = _this$props6.color;
      var displayCount = this.getDispayCount();
      var isDot = this.isDot();
      var hidden = this.isHidden();
      var scrollNumberCls = classNames((_classNames3 = {}, _defineProperty(_classNames3, "".concat(prefixCls, "-dot"), isDot), _defineProperty(_classNames3, "".concat(prefixCls, "-count"), !isDot), _defineProperty(_classNames3, "".concat(prefixCls, "-multiple-words"), !isDot && count && count.toString && count.toString().length > 1), _defineProperty(_classNames3, "".concat(prefixCls, "-status-").concat(status), !!status), _defineProperty(_classNames3, "".concat(prefixCls, "-status-").concat(color), isPresetColor(color)), _classNames3));
      var statusStyle = this.getStyleWithOffset();

      if (color && !isPresetColor(color)) {
        statusStyle = statusStyle || {};
        statusStyle.background = color;
      }

      return hidden ? null : /*#__PURE__*/React.createElement(ScrollNumber, {
        prefixCls: scrollNumberPrefixCls,
        "data-show": !hidden,
        className: scrollNumberCls,
        count: displayCount,
        displayComponent: this.renderDispayComponent() // <Badge status="success" count={<Icon type="xxx" />}></Badge>
        ,
        title: this.getScrollNumberTitle(),
        style: statusStyle,
        key: "scrollNumber"
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderBadge);
    }
  }]);

  return Badge;
}(React.Component);
Badge.defaultProps = {
  count: null,
  showZero: false,
  dot: false,
  overflowCount: 99
};
Badge.propTypes = {
  count: propTypesExports.node,
  showZero: propTypesExports.bool,
  dot: propTypesExports.bool,
  overflowCount: propTypesExports.number
};

export { Badge as default };
