import { n, c as classNames, C as ConfigConsumer } from '../../config-provider.js';
import * as React from 'react';
import { O as Option, S as Select, a as OptGroup } from '../../index15.js';
import '../../index12.js';
import { I as Input } from '../../input.js';
import '../../menu.js';
import 'react-dom';
import '../../icon.js';
import '../../Divider.js';
import '../../index7.js';
import '../../tree.js';
import '../../index9.js';
import '../../wave.js';
import '../../raf.js';
import '../../TextArea.js';
import '../../index3.js';
import '../../warning.js';
import '../../ResizeObserver.es.js';

var css = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-select-auto-complete {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: 'tnum';\n}\n.ant-select-auto-complete.ant-select .ant-select-selection {\n  border: 0;\n  box-shadow: none;\n}\n.ant-select-auto-complete.ant-select .ant-select-selection__rendered {\n  height: 100%;\n  margin-right: 0;\n  margin-left: 0;\n  line-height: 32px;\n}\n.ant-select-auto-complete.ant-select .ant-select-selection__placeholder {\n  margin-right: 12px;\n  margin-left: 12px;\n}\n.ant-select-auto-complete.ant-select .ant-select-selection--single {\n  height: auto;\n}\n.ant-select-auto-complete.ant-select .ant-select-search--inline {\n  position: static;\n  float: left;\n}\n.ant-select-auto-complete.ant-select-allow-clear .ant-select-selection:hover .ant-select-selection__rendered {\n  margin-right: 0 !important;\n}\n.ant-select-auto-complete.ant-select .ant-input {\n  height: 32px;\n  line-height: 1.5;\n  background: transparent;\n  border-width: 1px;\n}\n.ant-select-auto-complete.ant-select .ant-input:focus,\n.ant-select-auto-complete.ant-select .ant-input:hover {\n  border-color: #40a9ff;\n  border-right-width: 1px !important;\n}\n.ant-select-auto-complete.ant-select .ant-input[disabled] {\n  color: rgba(0, 0, 0, 0.25);\n  background-color: #f5f5f5;\n  cursor: not-allowed;\n  opacity: 1;\n  background-color: transparent;\n}\n.ant-select-auto-complete.ant-select .ant-input[disabled]:hover {\n  border-color: #d9d9d9;\n  border-right-width: 1px !important;\n}\n.ant-select-auto-complete.ant-select-lg .ant-select-selection__rendered {\n  line-height: 40px;\n}\n.ant-select-auto-complete.ant-select-lg .ant-input {\n  height: 40px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n.ant-select-auto-complete.ant-select-sm .ant-select-selection__rendered {\n  line-height: 24px;\n}\n.ant-select-auto-complete.ant-select-sm .ant-input {\n  height: 24px;\n  padding-top: 1px;\n  padding-bottom: 1px;\n}\n.ant-input-group > .ant-select-auto-complete .ant-select-search__field.ant-input-affix-wrapper {\n  display: inline;\n  float: none;\n}\n/*# sourceMappingURL=index.css.map */";
n(css,{"prepend":true});

function _typeof$1(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

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

var InputElement = /*#__PURE__*/function (_React$Component) {
  _inherits$1(InputElement, _React$Component);

  var _super = _createSuper$1(InputElement);

  function InputElement() {
    var _this;

    _classCallCheck$1(this, InputElement);

    _this = _super.apply(this, arguments);

    _this.saveRef = function (ele) {
      var childRef = _this.props.children.ref;

      if (typeof childRef === 'function') {
        childRef(ele);
      }
    };

    return _this;
  }

  _createClass$1(InputElement, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.cloneElement(this.props.children, _extends$1(_extends$1({}, this.props), {
        ref: this.saveRef
      }), null);
    }
  }]);

  return InputElement;
}(React.Component);

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function isSelectOptionOrSelectOptGroup(child) {
  return child && child.type && (child.type.isSelectOption || child.type.isSelectOptGroup);
}

var AutoComplete = /*#__PURE__*/function (_React$Component) {
  _inherits(AutoComplete, _React$Component);

  var _super = _createSuper(AutoComplete);

  function AutoComplete() {
    var _this;

    _classCallCheck(this, AutoComplete);

    _this = _super.apply(this, arguments);

    _this.saveSelect = function (node) {
      _this.select = node;
    };

    _this.getInputElement = function () {
      var children = _this.props.children;
      var element = children && /*#__PURE__*/React.isValidElement(children) && children.type !== Option ? React.Children.only(_this.props.children) : /*#__PURE__*/React.createElement(Input, null);

      var elementProps = _extends({}, element.props); // https://github.com/ant-design/ant-design/pull/7742


      delete elementProps.children;
      return /*#__PURE__*/React.createElement(InputElement, elementProps, element);
    };

    _this.renderAutoComplete = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls;
      var _this$props = _this.props,
          customizePrefixCls = _this$props.prefixCls,
          size = _this$props.size,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? '' : _this$props$className,
          notFoundContent = _this$props.notFoundContent,
          optionLabelProp = _this$props.optionLabelProp,
          dataSource = _this$props.dataSource,
          children = _this$props.children;
      var prefixCls = getPrefixCls('select', customizePrefixCls);
      var cls = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), _defineProperty(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, "".concat(prefixCls, "-show-search"), true), _defineProperty(_classNames, "".concat(prefixCls, "-auto-complete"), true), _classNames));
      var options;
      var childArray = React.Children.toArray(children);

      if (childArray.length && isSelectOptionOrSelectOptGroup(childArray[0])) {
        options = children;
      } else {
        options = dataSource ? dataSource.map(function (item) {
          if ( /*#__PURE__*/React.isValidElement(item)) {
            return item;
          }

          switch (_typeof(item)) {
            case 'string':
              return /*#__PURE__*/React.createElement(Option, {
                key: item
              }, item);

            case 'object':
              return /*#__PURE__*/React.createElement(Option, {
                key: item.value
              }, item.text);

            default:
              throw new Error('AutoComplete[dataSource] only supports type `string[] | Object[]`.');
          }
        }) : [];
      }

      return /*#__PURE__*/React.createElement(Select, _extends({}, _this.props, {
        className: cls,
        mode: Select.SECRET_COMBOBOX_MODE_DO_NOT_USE,
        optionLabelProp: optionLabelProp,
        getInputElement: _this.getInputElement,
        notFoundContent: notFoundContent,
        ref: _this.saveSelect
      }), options);
    };

    return _this;
  }

  _createClass(AutoComplete, [{
    key: "focus",
    value: function focus() {
      this.select.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.select.blur();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderAutoComplete);
    }
  }]);

  return AutoComplete;
}(React.Component);
AutoComplete.Option = Option;
AutoComplete.OptGroup = OptGroup;
AutoComplete.defaultProps = {
  transitionName: 'slide-up',
  optionLabelProp: 'children',
  choiceTransitionName: 'zoom',
  showSearch: false,
  filterOption: false
};

export { AutoComplete as default };
