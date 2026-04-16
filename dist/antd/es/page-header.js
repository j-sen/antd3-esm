import { n, C as ConfigConsumer, c as classNames, L as LocaleReceiver } from '../../config-provider.js';
import * as React from 'react';
import { I as Icon } from '../../icon.js';
import { B as Breadcrumb } from '../../index5.js';
import { A as Avatar } from '../../index4.js';
import { T as TransButton } from '../../transButton.js';
import '../../tree.js';
import '../../menu.js';
import 'react-dom';
import '../../input.js';
import '../../dropdown.js';
import '../../index6.js';
import '../../Divider.js';
import '../../index7.js';
import '../../index8.js';
import '../../Sider.js';
import '../../raf.js';

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
