import { n, C as ConfigConsumer, c as classNames } from '../../config-provider.js';
import * as React from 'react';

var css = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-divider {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  background: #e8e8e8;\n}\n.ant-divider,\n.ant-divider-vertical {\n  position: relative;\n  top: -0.06em;\n  display: inline-block;\n  width: 1px;\n  height: 0.9em;\n  margin: 0 8px;\n  vertical-align: middle;\n}\n.ant-divider-horizontal {\n  display: block;\n  clear: both;\n  width: 100%;\n  min-width: 100%;\n  height: 1px;\n  margin: 24px 0;\n}\n.ant-divider-horizontal.ant-divider-with-text-center,\n.ant-divider-horizontal.ant-divider-with-text-left,\n.ant-divider-horizontal.ant-divider-with-text-right {\n  display: table;\n  margin: 16px 0;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n  font-size: 16px;\n  white-space: nowrap;\n  text-align: center;\n  background: transparent;\n}\n.ant-divider-horizontal.ant-divider-with-text-center::before,\n.ant-divider-horizontal.ant-divider-with-text-left::before,\n.ant-divider-horizontal.ant-divider-with-text-right::before,\n.ant-divider-horizontal.ant-divider-with-text-center::after,\n.ant-divider-horizontal.ant-divider-with-text-left::after,\n.ant-divider-horizontal.ant-divider-with-text-right::after {\n  position: relative;\n  top: 50%;\n  display: table-cell;\n  width: 50%;\n  border-top: 1px solid #e8e8e8;\n  transform: translateY(50%);\n  content: '';\n}\n.ant-divider-horizontal.ant-divider-with-text-left .ant-divider-inner-text,\n.ant-divider-horizontal.ant-divider-with-text-right .ant-divider-inner-text {\n  display: inline-block;\n  padding: 0 10px;\n}\n.ant-divider-horizontal.ant-divider-with-text-left::before {\n  top: 50%;\n  width: 5%;\n}\n.ant-divider-horizontal.ant-divider-with-text-left::after {\n  top: 50%;\n  width: 95%;\n}\n.ant-divider-horizontal.ant-divider-with-text-right::before {\n  top: 50%;\n  width: 95%;\n}\n.ant-divider-horizontal.ant-divider-with-text-right::after {\n  top: 50%;\n  width: 5%;\n}\n.ant-divider-inner-text {\n  display: inline-block;\n  padding: 0 24px;\n}\n.ant-divider-dashed {\n  background: none;\n  border-color: #e8e8e8;\n  border-style: dashed;\n  border-width: 1px 0 0;\n}\n.ant-divider-horizontal.ant-divider-with-text-center.ant-divider-dashed,\n.ant-divider-horizontal.ant-divider-with-text-left.ant-divider-dashed,\n.ant-divider-horizontal.ant-divider-with-text-right.ant-divider-dashed {\n  border-top: 0;\n}\n.ant-divider-horizontal.ant-divider-with-text-center.ant-divider-dashed::before,\n.ant-divider-horizontal.ant-divider-with-text-left.ant-divider-dashed::before,\n.ant-divider-horizontal.ant-divider-with-text-right.ant-divider-dashed::before,\n.ant-divider-horizontal.ant-divider-with-text-center.ant-divider-dashed::after,\n.ant-divider-horizontal.ant-divider-with-text-left.ant-divider-dashed::after,\n.ant-divider-horizontal.ant-divider-with-text-right.ant-divider-dashed::after {\n  border-style: dashed none none;\n}\n.ant-divider-vertical.ant-divider-dashed {\n  border-width: 0 0 0 1px;\n}\n/*# sourceMappingURL=index.css.map */";
n(css,{"prepend":true});

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var Divider = function Divider(props) {
  return /*#__PURE__*/React.createElement(ConfigConsumer, null, function (_ref) {
    var _classNames;

    var getPrefixCls = _ref.getPrefixCls;

    var customizePrefixCls = props.prefixCls,
        _props$type = props.type,
        type = _props$type === void 0 ? 'horizontal' : _props$type,
        _props$orientation = props.orientation,
        orientation = _props$orientation === void 0 ? 'center' : _props$orientation,
        className = props.className,
        children = props.children,
        dashed = props.dashed,
        restProps = __rest(props, ["prefixCls", "type", "orientation", "className", "children", "dashed"]);

    var prefixCls = getPrefixCls('divider', customizePrefixCls);
    var orientationPrefix = orientation.length > 0 ? "-".concat(orientation) : orientation;
    var classString = classNames(className, prefixCls, "".concat(prefixCls, "-").concat(type), (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-with-text").concat(orientationPrefix), children), _defineProperty(_classNames, "".concat(prefixCls, "-dashed"), !!dashed), _classNames));
    return /*#__PURE__*/React.createElement("div", _extends({
      className: classString
    }, restProps, {
      role: "separator"
    }), children && /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-inner-text")
    }, children));
  });
};

export { Divider as default };
