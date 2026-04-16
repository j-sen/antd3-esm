import { n, c as classNames, C as ConfigConsumer } from '../../config-provider.js';
import * as React from 'react';
import { t as toArray } from '../../tree.js';
import { r as responsiveObserve, a as responsiveArray } from '../../responsiveObserve.js';
import '../../menu.js';
import 'react-dom';
import '../../icon.js';
import '../../input.js';
import '../../index.js';

var css = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-descriptions-title {\n  margin-bottom: 20px;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 1.5;\n}\n.ant-descriptions-view {\n  width: 100%;\n  overflow: hidden;\n  border-radius: 4px;\n}\n.ant-descriptions-view table {\n  width: 100%;\n  table-layout: fixed;\n}\n.ant-descriptions-row > th,\n.ant-descriptions-row > td {\n  padding-bottom: 16px;\n}\n.ant-descriptions-row:last-child {\n  border-bottom: none;\n}\n.ant-descriptions-item-label {\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 1.5;\n}\n.ant-descriptions-item-label::after {\n  position: relative;\n  top: -0.5px;\n  margin: 0 8px 0 2px;\n  content: ' ';\n}\n.ant-descriptions-item-colon::after {\n  content: ':';\n}\n.ant-descriptions-item-no-label::after {\n  margin: 0;\n  content: '';\n}\n.ant-descriptions-item-content {\n  display: table-cell;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  line-height: 1.5;\n}\n.ant-descriptions-item {\n  padding-bottom: 0;\n}\n.ant-descriptions-item > span {\n  display: inline-block;\n}\n.ant-descriptions-middle .ant-descriptions-row > th,\n.ant-descriptions-middle .ant-descriptions-row > td {\n  padding-bottom: 12px;\n}\n.ant-descriptions-small .ant-descriptions-row > th,\n.ant-descriptions-small .ant-descriptions-row > td {\n  padding-bottom: 8px;\n}\n.ant-descriptions-bordered .ant-descriptions-view {\n  border: 1px solid #e8e8e8;\n}\n.ant-descriptions-bordered .ant-descriptions-view > table {\n  table-layout: auto;\n}\n.ant-descriptions-bordered .ant-descriptions-item-label,\n.ant-descriptions-bordered .ant-descriptions-item-content {\n  padding: 16px 24px;\n  border-right: 1px solid #e8e8e8;\n}\n.ant-descriptions-bordered .ant-descriptions-item-label:last-child,\n.ant-descriptions-bordered .ant-descriptions-item-content:last-child {\n  border-right: none;\n}\n.ant-descriptions-bordered .ant-descriptions-item-label {\n  background-color: #fafafa;\n}\n.ant-descriptions-bordered .ant-descriptions-item-label::after {\n  display: none;\n}\n.ant-descriptions-bordered .ant-descriptions-row {\n  border-bottom: 1px solid #e8e8e8;\n}\n.ant-descriptions-bordered .ant-descriptions-row:last-child {\n  border-bottom: none;\n}\n.ant-descriptions-bordered.ant-descriptions-middle .ant-descriptions-item-label,\n.ant-descriptions-bordered.ant-descriptions-middle .ant-descriptions-item-content {\n  padding: 12px 24px;\n}\n.ant-descriptions-bordered.ant-descriptions-small .ant-descriptions-item-label,\n.ant-descriptions-bordered.ant-descriptions-small .ant-descriptions-item-content {\n  padding: 8px 16px;\n}\n/*# sourceMappingURL=index.css.map */";
n(css,{"prepend":true});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Col = function Col(props) {
  var _classNames;

  var child = props.child,
      bordered = props.bordered,
      colon = props.colon,
      type = props.type,
      layout = props.layout;
  var _child$props = child.props,
      prefixCls = _child$props.prefixCls,
      label = _child$props.label,
      className = _child$props.className,
      children = _child$props.children,
      _child$props$span = _child$props.span,
      span = _child$props$span === void 0 ? 1 : _child$props$span;
  var labelProps = {
    className: classNames("".concat(prefixCls, "-item-label"), (_classNames = {}, _defineProperty$1(_classNames, "".concat(prefixCls, "-item-colon"), colon), _defineProperty$1(_classNames, "".concat(prefixCls, "-item-no-label"), !label), _classNames)),
    key: 'label'
  };

  if (layout === 'vertical') {
    labelProps.colSpan = span * 2 - 1;
  }

  if (bordered) {
    if (type === 'label') {
      return /*#__PURE__*/React.createElement("th", labelProps, label);
    }

    return /*#__PURE__*/React.createElement("td", {
      className: classNames("".concat(prefixCls, "-item-content"), className),
      key: "content",
      colSpan: span * 2 - 1
    }, children);
  }

  if (layout === 'vertical') {
    if (type === 'content') {
      return /*#__PURE__*/React.createElement("td", {
        colSpan: span,
        className: classNames("".concat(prefixCls, "-item"), className)
      }, /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-item-content"),
        key: "content"
      }, children));
    }

    return /*#__PURE__*/React.createElement("td", {
      colSpan: span,
      className: classNames("".concat(prefixCls, "-item"), className)
    }, /*#__PURE__*/React.createElement("span", {
      className: classNames("".concat(prefixCls, "-item-label"), _defineProperty$1({}, "".concat(prefixCls, "-item-colon"), colon)),
      key: "label"
    }, label));
  }

  return /*#__PURE__*/React.createElement("td", {
    colSpan: span,
    className: classNames("".concat(prefixCls, "-item"), className)
  }, /*#__PURE__*/React.createElement("span", labelProps, label), /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "-item-content"),
    key: "content"
  }, children));
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function flattenChildren(children) {
  if (!children) {
    return [];
  }

  return toArray(children).reduce(function (flatChildren, child) {
    if (child && child.type === React.Fragment) {
      return flatChildren.concat(flattenChildren(child.props.children));
    }

    flatChildren.push(child);
    return flatChildren;
  }, []);
}

var DescriptionsItem = function DescriptionsItem(_ref) {
  var children = _ref.children;
  return children;
};
/**
 * Convert children into `column` groups.
 * @param children: DescriptionsItem
 * @param column: number
 */


var generateChildrenRows = function generateChildrenRows(children, column) {
  var rows = [];
  var columns = null;
  var leftSpans;
  var itemNodes = flattenChildren(children);
  itemNodes.forEach(function (node, index) {
    var itemNode = node;

    if (!columns) {
      leftSpans = column;
      columns = [];
      rows.push(columns);
    } // Always set last span to align the end of Descriptions


    var lastItem = index === itemNodes.length - 1;

    if (lastItem) {
      itemNode = /*#__PURE__*/React.cloneElement(itemNode, {
        span: leftSpans
      });
    } // Calculate left fill span


    var _itemNode$props$span = itemNode.props.span,
        span = _itemNode$props$span === void 0 ? 1 : _itemNode$props$span;
    columns.push(itemNode);
    leftSpans -= span;

    if (leftSpans <= 0) {
      columns = null;
    }
  });
  return rows;
};

var renderRow = function renderRow(children, index, _ref2, bordered, layout, colon) {
  var prefixCls = _ref2.prefixCls;

  var renderCol = function renderCol(colItem, type, idx) {
    return /*#__PURE__*/React.createElement(Col, {
      child: colItem,
      bordered: bordered,
      colon: colon,
      type: type,
      key: "".concat(type, "-").concat(colItem.key || idx),
      layout: layout
    });
  };

  var cloneChildren = [];
  var cloneContentChildren = [];
  flattenChildren(children).forEach(function (childrenItem, idx) {
    cloneChildren.push(renderCol(childrenItem, 'label', idx));

    if (layout === 'vertical') {
      cloneContentChildren.push(renderCol(childrenItem, 'content', idx));
    } else if (bordered) {
      cloneChildren.push(renderCol(childrenItem, 'content', idx));
    }
  });

  if (layout === 'vertical') {
    return [/*#__PURE__*/React.createElement("tr", {
      className: "".concat(prefixCls, "-row"),
      key: "label-".concat(index)
    }, cloneChildren), /*#__PURE__*/React.createElement("tr", {
      className: "".concat(prefixCls, "-row"),
      key: "content-".concat(index)
    }, cloneContentChildren)];
  }

  return /*#__PURE__*/React.createElement("tr", {
    className: "".concat(prefixCls, "-row"),
    key: index
  }, cloneChildren);
};

var defaultColumnMap = {
  xxl: 3,
  xl: 3,
  lg: 3,
  md: 3,
  sm: 2,
  xs: 1
};

var Descriptions = /*#__PURE__*/function (_React$Component) {
  _inherits(Descriptions, _React$Component);

  var _super = _createSuper(Descriptions);

  function Descriptions() {
    var _this;

    _classCallCheck(this, Descriptions);

    _this = _super.apply(this, arguments);
    _this.state = {
      screens: {}
    };
    return _this;
  }

  _createClass(Descriptions, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var column = this.props.column;
      this.token = responsiveObserve.subscribe(function (screens) {
        if (_typeof(column) !== 'object') {
          return;
        }

        _this2.setState({
          screens: screens
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      responsiveObserve.unsubscribe(this.token);
    }
  }, {
    key: "getColumn",
    value: function getColumn() {
      var column = this.props.column;

      if (_typeof(column) === 'object') {
        for (var i = 0; i < responsiveArray.length; i++) {
          var breakpoint = responsiveArray[i];

          if (this.state.screens[breakpoint] && column[breakpoint] !== undefined) {
            return column[breakpoint] || defaultColumnMap[breakpoint];
          }
        }
      } // If the configuration is not an object, it is a number, return number


      if (typeof column === 'number') {
        return column;
      } // If it is an object, but no response is found, this happens only in the test.
      // Maybe there are some strange environments


      return 3;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/React.createElement(ConfigConsumer, null, function (_ref3) {
        var _classNames;

        var getPrefixCls = _ref3.getPrefixCls;
        var _this3$props = _this3.props,
            className = _this3$props.className,
            customizePrefixCls = _this3$props.prefixCls,
            title = _this3$props.title,
            size = _this3$props.size,
            children = _this3$props.children,
            _this3$props$bordered = _this3$props.bordered,
            bordered = _this3$props$bordered === void 0 ? false : _this3$props$bordered,
            _this3$props$layout = _this3$props.layout,
            layout = _this3$props$layout === void 0 ? 'horizontal' : _this3$props$layout,
            _this3$props$colon = _this3$props.colon,
            colon = _this3$props$colon === void 0 ? true : _this3$props$colon,
            style = _this3$props.style;
        var prefixCls = getPrefixCls('descriptions', customizePrefixCls);

        var column = _this3.getColumn();

        var cloneChildren = flattenChildren(children).map(function (child) {
          if ( /*#__PURE__*/React.isValidElement(child)) {
            return /*#__PURE__*/React.cloneElement(child, {
              prefixCls: prefixCls
            });
          }

          return null;
        }).filter(function (node) {
          return node;
        });
        var childrenArray = generateChildrenRows(cloneChildren, column);
        return /*#__PURE__*/React.createElement("div", {
          className: classNames(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(size), size !== 'default'), _defineProperty(_classNames, "".concat(prefixCls, "-bordered"), !!bordered), _classNames)),
          style: style
        }, title && /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-title")
        }, title), /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-view")
        }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tbody", null, childrenArray.map(function (child, index) {
          return renderRow(child, index, {
            prefixCls: prefixCls
          }, bordered, layout, colon);
        })))));
      });
    }
  }]);

  return Descriptions;
}(React.Component);

Descriptions.defaultProps = {
  size: 'default',
  column: defaultColumnMap
};
Descriptions.Item = DescriptionsItem;

export { Descriptions as default };
