import { n, g as getDefaultExportFromCjs, r as requireObjectAssign, e as requireReactIs, P as PropTypes, h as createReactContext, c as classNames, w as warning$1, C as ConfigConsumer, p as propTypesExports } from '../../config-provider.js';
import * as React from 'react';
import React__default from 'react';
import { g as require_anObject, h as require_iterators, i as require_wks, j as require_objectDp, k as require_propertyDesc, l as require_cof, m as require_core, n as require_ctx, o as require_export, p as require_toObject, q as require_toLength, s as requireEs6_string_iterator, a as _classCallCheck$2, e as _extends$2, c as _createClass$2, d as _defineProperty$2, _ as _inherits$2, b as _possibleConstructorReturn$2, f as _objectWithoutProperties, I as Icon } from '../../icon.js';
import * as ReactDOM from 'react-dom';
import ReactDOM__default from 'react-dom';
import { s as scrollIntoView } from '../../index5.js';
import { r as require_hasPath } from '../../_hasPath.js';
import { v as unsafeLifecyclesPolyfill, A as Animate } from '../../menu.js';
import { h as requireIsObject, w as warning, e as reactIsExports } from '../../tree.js';
import { e as requireGet, r as require_castPath, a as require_toKey, b as requireEq } from '../../get.js';
import { a as require_assignValue } from '../../_assignValue.js';
import { b as require_isIndex } from '../../isLength.js';
import { o as omit, t as tuple } from '../../input.js';
import { R as Row } from '../../row.js';
import { C as Col } from '../../col.js';
import '../../_arrayMap.js';
import '../../toString.js';
import '../../RowContext.js';
import '../../responsiveObserve.js';

var css = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-form {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: 'tnum';\n}\n.ant-form legend {\n  display: block;\n  width: 100%;\n  margin-bottom: 20px;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 16px;\n  line-height: inherit;\n  border: 0;\n  border-bottom: 1px solid #d9d9d9;\n}\n.ant-form label {\n  font-size: 14px;\n}\n.ant-form input[type='search'] {\n  box-sizing: border-box;\n}\n.ant-form input[type='radio'],\n.ant-form input[type='checkbox'] {\n  line-height: normal;\n}\n.ant-form input[type='file'] {\n  display: block;\n}\n.ant-form input[type='range'] {\n  display: block;\n  width: 100%;\n}\n.ant-form select[multiple],\n.ant-form select[size] {\n  height: auto;\n}\n.ant-form input[type='file']:focus,\n.ant-form input[type='radio']:focus,\n.ant-form input[type='checkbox']:focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n.ant-form output {\n  display: block;\n  padding-top: 15px;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  line-height: 1.5;\n}\n.ant-form-item-required::before {\n  display: inline-block;\n  margin-right: 4px;\n  color: #f5222d;\n  font-size: 14px;\n  font-family: SimSun, sans-serif;\n  line-height: 1;\n  content: '*';\n}\n.ant-form-hide-required-mark .ant-form-item-required::before {\n  display: none;\n}\n.ant-form-item-label > label {\n  color: rgba(0, 0, 0, 0.85);\n}\n.ant-form-item-label > label::after {\n  content: ':';\n  position: relative;\n  top: -0.5px;\n  margin: 0 8px 0 2px;\n}\n.ant-form-item-label > label.ant-form-item-no-colon::after {\n  content: ' ';\n}\n.ant-form-item {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  margin-bottom: 24px;\n  vertical-align: top;\n}\n.ant-form-item label {\n  position: relative;\n}\n.ant-form-item label > .anticon {\n  font-size: 14px;\n  vertical-align: top;\n}\n.ant-form-item-control {\n  position: relative;\n  line-height: 40px;\n  zoom: 1;\n}\n.ant-form-item-control::before,\n.ant-form-item-control::after {\n  display: table;\n  content: '';\n}\n.ant-form-item-control::after {\n  clear: both;\n}\n.ant-form-item-children {\n  position: relative;\n}\n.ant-form-item-with-help {\n  margin-bottom: 5px;\n}\n.ant-form-item-label {\n  display: inline-block;\n  overflow: hidden;\n  line-height: 39.9999px;\n  white-space: nowrap;\n  text-align: right;\n  vertical-align: middle;\n}\n.ant-form-item-label-left {\n  text-align: left;\n}\n.ant-form-item .ant-switch {\n  margin: 2px 0 4px;\n}\n.ant-form-explain,\n.ant-form-extra {\n  clear: both;\n  min-height: 22px;\n  margin-top: -2px;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 14px;\n  line-height: 1.5;\n  transition: color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.ant-form-explain {\n  margin-bottom: -1px;\n}\n.ant-form-extra {\n  padding-top: 4px;\n}\n.ant-form-text {\n  display: inline-block;\n  padding-right: 8px;\n}\n.ant-form-split {\n  display: block;\n  text-align: center;\n}\nform .has-feedback .ant-input {\n  padding-right: 30px;\n}\nform .has-feedback .ant-input-affix-wrapper .ant-input-suffix {\n  padding-right: 18px;\n}\nform .has-feedback .ant-input-affix-wrapper .ant-input {\n  padding-right: 49px;\n}\nform .has-feedback .ant-input-affix-wrapper.ant-input-affix-wrapper-input-with-clear-btn .ant-input {\n  padding-right: 68px;\n}\nform .has-feedback > .ant-select .ant-select-arrow,\nform .has-feedback > .ant-select .ant-select-selection__clear,\nform .has-feedback :not(.ant-input-group-addon) > .ant-select .ant-select-arrow,\nform .has-feedback :not(.ant-input-group-addon) > .ant-select .ant-select-selection__clear {\n  right: 28px;\n}\nform .has-feedback > .ant-select .ant-select-selection-selected-value,\nform .has-feedback :not(.ant-input-group-addon) > .ant-select .ant-select-selection-selected-value {\n  padding-right: 42px;\n}\nform .has-feedback .ant-cascader-picker-arrow {\n  margin-right: 17px;\n}\nform .has-feedback .ant-cascader-picker-clear {\n  right: 28px;\n}\nform .has-feedback .ant-input-search:not(.ant-input-search-enter-button) .ant-input-suffix {\n  right: 28px;\n}\nform .has-feedback .ant-calendar-picker-icon,\nform .has-feedback .ant-time-picker-icon,\nform .has-feedback .ant-calendar-picker-clear,\nform .has-feedback .ant-time-picker-clear {\n  right: 28px;\n}\nform .ant-mentions,\nform textarea.ant-input {\n  height: auto;\n  margin-bottom: 4px;\n}\nform .ant-upload {\n  background: transparent;\n}\nform input[type='radio'],\nform input[type='checkbox'] {\n  width: 14px;\n  height: 14px;\n}\nform .ant-radio-inline,\nform .ant-checkbox-inline {\n  display: inline-block;\n  margin-left: 8px;\n  font-weight: normal;\n  vertical-align: middle;\n  cursor: pointer;\n}\nform .ant-radio-inline:first-child,\nform .ant-checkbox-inline:first-child {\n  margin-left: 0;\n}\nform .ant-checkbox-vertical,\nform .ant-radio-vertical {\n  display: block;\n}\nform .ant-checkbox-vertical + .ant-checkbox-vertical,\nform .ant-radio-vertical + .ant-radio-vertical {\n  margin-left: 0;\n}\nform .ant-input-number + .ant-form-text {\n  margin-left: 8px;\n}\nform .ant-input-number-handler-wrap {\n  z-index: 2;\n}\nform .ant-select,\nform .ant-cascader-picker {\n  width: 100%;\n}\nform .ant-input-group .ant-select,\nform .ant-input-group .ant-cascader-picker {\n  width: auto;\n}\nform :not(.ant-input-group-wrapper) > .ant-input-group,\nform .ant-input-group-wrapper {\n  display: inline-block;\n  vertical-align: middle;\n}\nform:not(.ant-form-vertical) :not(.ant-input-group-wrapper) > .ant-input-group,\nform:not(.ant-form-vertical) .ant-input-group-wrapper {\n  position: relative;\n  top: -1px;\n}\n.ant-form-vertical .ant-form-item-label,\n.ant-col-24.ant-form-item-label,\n.ant-col-xl-24.ant-form-item-label {\n  display: block;\n  margin: 0;\n  padding: 0 0 8px;\n  line-height: 1.5;\n  white-space: initial;\n  text-align: left;\n}\n.ant-form-vertical .ant-form-item-label label::after,\n.ant-col-24.ant-form-item-label label::after,\n.ant-col-xl-24.ant-form-item-label label::after {\n  display: none;\n}\n.ant-form-vertical .ant-form-item {\n  padding-bottom: 8px;\n}\n.ant-form-vertical .ant-form-item-control {\n  line-height: 1.5;\n}\n.ant-form-vertical .ant-form-explain {\n  margin-top: 2px;\n  margin-bottom: -5px;\n}\n.ant-form-vertical .ant-form-extra {\n  margin-top: 2px;\n  margin-bottom: -4px;\n}\n@media (max-width: 575px) {\n  .ant-form-item-label,\n  .ant-form-item-control-wrapper {\n    display: block;\n    width: 100%;\n  }\n  .ant-form-item-label {\n    display: block;\n    margin: 0;\n    padding: 0 0 8px;\n    line-height: 1.5;\n    white-space: initial;\n    text-align: left;\n  }\n  .ant-form-item-label label::after {\n    display: none;\n  }\n  .ant-col-xs-24.ant-form-item-label {\n    display: block;\n    margin: 0;\n    padding: 0 0 8px;\n    line-height: 1.5;\n    white-space: initial;\n    text-align: left;\n  }\n  .ant-col-xs-24.ant-form-item-label label::after {\n    display: none;\n  }\n}\n@media (max-width: 767px) {\n  .ant-col-sm-24.ant-form-item-label {\n    display: block;\n    margin: 0;\n    padding: 0 0 8px;\n    line-height: 1.5;\n    white-space: initial;\n    text-align: left;\n  }\n  .ant-col-sm-24.ant-form-item-label label::after {\n    display: none;\n  }\n}\n@media (max-width: 991px) {\n  .ant-col-md-24.ant-form-item-label {\n    display: block;\n    margin: 0;\n    padding: 0 0 8px;\n    line-height: 1.5;\n    white-space: initial;\n    text-align: left;\n  }\n  .ant-col-md-24.ant-form-item-label label::after {\n    display: none;\n  }\n}\n@media (max-width: 1199px) {\n  .ant-col-lg-24.ant-form-item-label {\n    display: block;\n    margin: 0;\n    padding: 0 0 8px;\n    line-height: 1.5;\n    white-space: initial;\n    text-align: left;\n  }\n  .ant-col-lg-24.ant-form-item-label label::after {\n    display: none;\n  }\n}\n@media (max-width: 1599px) {\n  .ant-col-xl-24.ant-form-item-label {\n    display: block;\n    margin: 0;\n    padding: 0 0 8px;\n    line-height: 1.5;\n    white-space: initial;\n    text-align: left;\n  }\n  .ant-col-xl-24.ant-form-item-label label::after {\n    display: none;\n  }\n}\n.ant-form-inline .ant-form-item {\n  display: inline-block;\n  margin-right: 16px;\n  margin-bottom: 0;\n}\n.ant-form-inline .ant-form-item-with-help {\n  margin-bottom: 24px;\n}\n.ant-form-inline .ant-form-item > .ant-form-item-control-wrapper,\n.ant-form-inline .ant-form-item > .ant-form-item-label {\n  display: inline-block;\n  vertical-align: top;\n}\n.ant-form-inline .ant-form-text {\n  display: inline-block;\n}\n.ant-form-inline .has-feedback {\n  display: inline-block;\n}\n.has-success.has-feedback .ant-form-item-children-icon,\n.has-warning.has-feedback .ant-form-item-children-icon,\n.has-error.has-feedback .ant-form-item-children-icon,\n.is-validating.has-feedback .ant-form-item-children-icon {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  z-index: 1;\n  width: 32px;\n  height: 20px;\n  margin-top: -10px;\n  font-size: 14px;\n  line-height: 20px;\n  text-align: center;\n  visibility: visible;\n  animation: zoomIn 0.3s cubic-bezier(0.12, 0.4, 0.29, 1.46);\n  pointer-events: none;\n}\n.has-success.has-feedback .ant-form-item-children-icon svg,\n.has-warning.has-feedback .ant-form-item-children-icon svg,\n.has-error.has-feedback .ant-form-item-children-icon svg,\n.is-validating.has-feedback .ant-form-item-children-icon svg {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n}\n.has-success.has-feedback .ant-form-item-children-icon {\n  color: #52c41a;\n  animation-name: diffZoomIn1 !important;\n}\n.has-warning .ant-form-explain,\n.has-warning .ant-form-split {\n  color: #faad14;\n}\n.has-warning .ant-input,\n.has-warning .ant-input:hover {\n  background-color: #fff;\n  border-color: #faad14;\n}\n.has-warning .ant-input:focus {\n  border-color: #ffc53d;\n  border-right-width: 1px !important;\n  outline: 0;\n  box-shadow: 0 0 0 2px rgba(250, 173, 20, 0.2);\n}\n.has-warning .ant-input:not([disabled]):hover {\n  border-color: #faad14;\n}\n.has-warning .ant-calendar-picker-open .ant-calendar-picker-input {\n  border-color: #ffc53d;\n  border-right-width: 1px !important;\n  outline: 0;\n  box-shadow: 0 0 0 2px rgba(250, 173, 20, 0.2);\n}\n.has-warning .ant-input-affix-wrapper .ant-input,\n.has-warning .ant-input-affix-wrapper .ant-input:hover {\n  background-color: #fff;\n  border-color: #faad14;\n}\n.has-warning .ant-input-affix-wrapper .ant-input:focus {\n  border-color: #ffc53d;\n  border-right-width: 1px !important;\n  outline: 0;\n  box-shadow: 0 0 0 2px rgba(250, 173, 20, 0.2);\n}\n.has-warning .ant-input-affix-wrapper:hover .ant-input:not(.ant-input-disabled) {\n  border-color: #faad14;\n}\n.has-warning .ant-input-prefix {\n  color: #faad14;\n}\n.has-warning .ant-input-group-addon {\n  color: #faad14;\n  background-color: #fff;\n  border-color: #faad14;\n}\n.has-warning .has-feedback {\n  color: #faad14;\n}\n.has-warning.has-feedback .ant-form-item-children-icon {\n  color: #faad14;\n  animation-name: diffZoomIn3 !important;\n}\n.has-warning .ant-select-selection {\n  border-color: #faad14;\n}\n.has-warning .ant-select-selection:hover {\n  border-color: #faad14;\n}\n.has-warning .ant-select-open .ant-select-selection,\n.has-warning .ant-select-focused .ant-select-selection {\n  border-color: #ffc53d;\n  border-right-width: 1px !important;\n  outline: 0;\n  box-shadow: 0 0 0 2px rgba(250, 173, 20, 0.2);\n}\n.has-warning .ant-calendar-picker-icon::after,\n.has-warning .ant-time-picker-icon::after,\n.has-warning .ant-picker-icon::after,\n.has-warning .ant-select-arrow,\n.has-warning .ant-cascader-picker-arrow {\n  color: #faad14;\n}\n.has-warning .ant-input-number,\n.has-warning .ant-time-picker-input {\n  border-color: #faad14;\n}\n.has-warning .ant-input-number-focused,\n.has-warning .ant-time-picker-input-focused,\n.has-warning .ant-input-number:focus,\n.has-warning .ant-time-picker-input:focus {\n  border-color: #ffc53d;\n  border-right-width: 1px !important;\n  outline: 0;\n  box-shadow: 0 0 0 2px rgba(250, 173, 20, 0.2);\n}\n.has-warning .ant-input-number:not([disabled]):hover,\n.has-warning .ant-time-picker-input:not([disabled]):hover {\n  border-color: #faad14;\n}\n.has-warning .ant-cascader-picker:focus .ant-cascader-input {\n  border-color: #ffc53d;\n  border-right-width: 1px !important;\n  outline: 0;\n  box-shadow: 0 0 0 2px rgba(250, 173, 20, 0.2);\n}\n.has-warning .ant-cascader-picker:hover .ant-cascader-input {\n  border-color: #faad14;\n}\n.has-error .ant-form-explain,\n.has-error .ant-form-split {\n  color: #f5222d;\n}\n.has-error .ant-input,\n.has-error .ant-input:hover {\n  background-color: #fff;\n  border-color: #f5222d;\n}\n.has-error .ant-input:focus {\n  border-color: #ff4d4f;\n  border-right-width: 1px !important;\n  outline: 0;\n  box-shadow: 0 0 0 2px rgba(245, 34, 45, 0.2);\n}\n.has-error .ant-input:not([disabled]):hover {\n  border-color: #f5222d;\n}\n.has-error .ant-calendar-picker-open .ant-calendar-picker-input {\n  border-color: #ff4d4f;\n  border-right-width: 1px !important;\n  outline: 0;\n  box-shadow: 0 0 0 2px rgba(245, 34, 45, 0.2);\n}\n.has-error .ant-input-affix-wrapper .ant-input,\n.has-error .ant-input-affix-wrapper .ant-input:hover {\n  background-color: #fff;\n  border-color: #f5222d;\n}\n.has-error .ant-input-affix-wrapper .ant-input:focus {\n  border-color: #ff4d4f;\n  border-right-width: 1px !important;\n  outline: 0;\n  box-shadow: 0 0 0 2px rgba(245, 34, 45, 0.2);\n}\n.has-error .ant-input-affix-wrapper:hover .ant-input:not(.ant-input-disabled) {\n  border-color: #f5222d;\n}\n.has-error .ant-input-prefix {\n  color: #f5222d;\n}\n.has-error .ant-input-group-addon {\n  color: #f5222d;\n  background-color: #fff;\n  border-color: #f5222d;\n}\n.has-error .has-feedback {\n  color: #f5222d;\n}\n.has-error.has-feedback .ant-form-item-children-icon {\n  color: #f5222d;\n  animation-name: diffZoomIn2 !important;\n}\n.has-error .ant-select-selection {\n  border-color: #f5222d;\n}\n.has-error .ant-select-selection:hover {\n  border-color: #f5222d;\n}\n.has-error .ant-select-open .ant-select-selection,\n.has-error .ant-select-focused .ant-select-selection {\n  border-color: #ff4d4f;\n  border-right-width: 1px !important;\n  outline: 0;\n  box-shadow: 0 0 0 2px rgba(245, 34, 45, 0.2);\n}\n.has-error .ant-select.ant-select-auto-complete .ant-input:focus {\n  border-color: #f5222d;\n}\n.has-error .ant-input-group-addon .ant-select-selection {\n  border-color: transparent;\n  box-shadow: none;\n}\n.has-error .ant-calendar-picker-icon::after,\n.has-error .ant-time-picker-icon::after,\n.has-error .ant-picker-icon::after,\n.has-error .ant-select-arrow,\n.has-error .ant-cascader-picker-arrow {\n  color: #f5222d;\n}\n.has-error .ant-input-number,\n.has-error .ant-time-picker-input {\n  border-color: #f5222d;\n}\n.has-error .ant-input-number-focused,\n.has-error .ant-time-picker-input-focused,\n.has-error .ant-input-number:focus,\n.has-error .ant-time-picker-input:focus {\n  border-color: #ff4d4f;\n  border-right-width: 1px !important;\n  outline: 0;\n  box-shadow: 0 0 0 2px rgba(245, 34, 45, 0.2);\n}\n.has-error .ant-input-number:not([disabled]):hover,\n.has-error .ant-time-picker-input:not([disabled]):hover {\n  border-color: #f5222d;\n}\n.has-error .ant-mention-wrapper .ant-mention-editor,\n.has-error .ant-mention-wrapper .ant-mention-editor:not([disabled]):hover {\n  border-color: #f5222d;\n}\n.has-error .ant-mention-wrapper.ant-mention-active:not([disabled]) .ant-mention-editor,\n.has-error .ant-mention-wrapper .ant-mention-editor:not([disabled]):focus {\n  border-color: #ff4d4f;\n  border-right-width: 1px !important;\n  outline: 0;\n  box-shadow: 0 0 0 2px rgba(245, 34, 45, 0.2);\n}\n.has-error .ant-cascader-picker:focus .ant-cascader-input {\n  border-color: #ff4d4f;\n  border-right-width: 1px !important;\n  outline: 0;\n  box-shadow: 0 0 0 2px rgba(245, 34, 45, 0.2);\n}\n.has-error .ant-cascader-picker:hover .ant-cascader-input {\n  border-color: #f5222d;\n}\n.has-error .ant-transfer-list {\n  border-color: #f5222d;\n}\n.has-error .ant-transfer-list-search:not([disabled]) {\n  border-color: #d9d9d9;\n}\n.has-error .ant-transfer-list-search:not([disabled]):hover {\n  border-color: #40a9ff;\n  border-right-width: 1px !important;\n}\n.has-error .ant-transfer-list-search:not([disabled]):focus {\n  border-color: #40a9ff;\n  border-right-width: 1px !important;\n  outline: 0;\n  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);\n}\n.is-validating.has-feedback .ant-form-item-children-icon {\n  display: inline-block;\n  color: #1890ff;\n}\n.ant-advanced-search-form .ant-form-item {\n  margin-bottom: 24px;\n}\n.ant-advanced-search-form .ant-form-item-with-help {\n  margin-bottom: 5px;\n}\n.show-help-enter,\n.show-help-appear {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-play-state: paused;\n}\n.show-help-leave {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-play-state: paused;\n}\n.show-help-enter.show-help-enter-active,\n.show-help-appear.show-help-appear-active {\n  animation-name: antShowHelpIn;\n  animation-play-state: running;\n}\n.show-help-leave.show-help-leave-active {\n  animation-name: antShowHelpOut;\n  animation-play-state: running;\n  pointer-events: none;\n}\n.show-help-enter,\n.show-help-appear {\n  opacity: 0;\n  animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.show-help-leave {\n  animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n@keyframes antShowHelpIn {\n  0% {\n    transform: translateY(-5px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes antShowHelpOut {\n  to {\n    transform: translateY(-5px);\n    opacity: 0;\n  }\n}\n@keyframes diffZoomIn1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes diffZoomIn2 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes diffZoomIn3 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=index.css.map */";
n(css,{"prepend":true});

/** Used for built-in method references. */

var _baseHas;
var hasRequired_baseHas;

function require_baseHas () {
	if (hasRequired_baseHas) return _baseHas;
	hasRequired_baseHas = 1;
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.has` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHas(object, key) {
	  return object != null && hasOwnProperty.call(object, key);
	}

	_baseHas = baseHas;
	return _baseHas;
}

var has_1;
var hasRequiredHas;

function requireHas () {
	if (hasRequiredHas) return has_1;
	hasRequiredHas = 1;
	var baseHas = require_baseHas(),
	    hasPath = require_hasPath();

	/**
	 * Checks if `path` is a direct property of `object`.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = { 'a': { 'b': 2 } };
	 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.has(object, 'a');
	 * // => true
	 *
	 * _.has(object, 'a.b');
	 * // => true
	 *
	 * _.has(object, ['a', 'b']);
	 * // => true
	 *
	 * _.has(other, 'a');
	 * // => false
	 */
	function has(object, path) {
	  return object != null && hasPath(object, path, baseHas);
	}

	has_1 = has;
	return has_1;
}

var hasExports = requireHas();
var has = /*@__PURE__*/getDefaultExportFromCjs(hasExports);

var toConsumableArray = {};

var es6_array_from = {};

var _iterCall;
var hasRequired_iterCall;

function require_iterCall () {
	if (hasRequired_iterCall) return _iterCall;
	hasRequired_iterCall = 1;
	// call something on iterator step with safe closing on error
	var anObject = require_anObject();
	_iterCall = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};
	return _iterCall;
}

var _isArrayIter;
var hasRequired_isArrayIter;

function require_isArrayIter () {
	if (hasRequired_isArrayIter) return _isArrayIter;
	hasRequired_isArrayIter = 1;
	// check on default Array iterator
	var Iterators = require_iterators();
	var ITERATOR = require_wks()('iterator');
	var ArrayProto = Array.prototype;

	_isArrayIter = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};
	return _isArrayIter;
}

var _createProperty;
var hasRequired_createProperty;

function require_createProperty () {
	if (hasRequired_createProperty) return _createProperty;
	hasRequired_createProperty = 1;
	var $defineProperty = require_objectDp();
	var createDesc = require_propertyDesc();

	_createProperty = function (object, index, value) {
	  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};
	return _createProperty;
}

var _classof;
var hasRequired_classof;

function require_classof () {
	if (hasRequired_classof) return _classof;
	hasRequired_classof = 1;
	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = require_cof();
	var TAG = require_wks()('toStringTag');
	// ES3 wrong here
	var ARG = cof(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};

	_classof = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};
	return _classof;
}

var core_getIteratorMethod;
var hasRequiredCore_getIteratorMethod;

function requireCore_getIteratorMethod () {
	if (hasRequiredCore_getIteratorMethod) return core_getIteratorMethod;
	hasRequiredCore_getIteratorMethod = 1;
	var classof = require_classof();
	var ITERATOR = require_wks()('iterator');
	var Iterators = require_iterators();
	core_getIteratorMethod = require_core().getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};
	return core_getIteratorMethod;
}

var _iterDetect;
var hasRequired_iterDetect;

function require_iterDetect () {
	if (hasRequired_iterDetect) return _iterDetect;
	hasRequired_iterDetect = 1;
	var ITERATOR = require_wks()('iterator');
	var SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () { SAFE_CLOSING = true; };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(riter, function () { throw 2; });
	} catch (e) { /* empty */ }

	_iterDetect = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR]();
	    iter.next = function () { return { done: safe = true }; };
	    arr[ITERATOR] = function () { return iter; };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
	};
	return _iterDetect;
}

var hasRequiredEs6_array_from;

function requireEs6_array_from () {
	if (hasRequiredEs6_array_from) return es6_array_from;
	hasRequiredEs6_array_from = 1;
	var ctx = require_ctx();
	var $export = require_export();
	var toObject = require_toObject();
	var call = require_iterCall();
	var isArrayIter = require_isArrayIter();
	var toLength = require_toLength();
	var createProperty = require_createProperty();
	var getIterFn = requireCore_getIteratorMethod();

	$export($export.S + $export.F * !require_iterDetect()(function (iter) { Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	    var O = toObject(arrayLike);
	    var C = typeof this == 'function' ? this : Array;
	    var aLen = arguments.length;
	    var mapfn = aLen > 1 ? arguments[1] : undefined;
	    var mapping = mapfn !== undefined;
	    var index = 0;
	    var iterFn = getIterFn(O);
	    var length, result, step, iterator;
	    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});
	return es6_array_from;
}

var from$1;
var hasRequiredFrom$1;

function requireFrom$1 () {
	if (hasRequiredFrom$1) return from$1;
	hasRequiredFrom$1 = 1;
	requireEs6_string_iterator();
	requireEs6_array_from();
	from$1 = require_core().Array.from;
	return from$1;
}

var from;
var hasRequiredFrom;

function requireFrom () {
	if (hasRequiredFrom) return from;
	hasRequiredFrom = 1;
	from = { "default": requireFrom$1(), __esModule: true };
	return from;
}

var hasRequiredToConsumableArray;

function requireToConsumableArray () {
	if (hasRequiredToConsumableArray) return toConsumableArray;
	hasRequiredToConsumableArray = 1;

	toConsumableArray.__esModule = true;

	var _from = requireFrom();

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	toConsumableArray.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};
	return toConsumableArray;
}

var toConsumableArrayExports = requireToConsumableArray();
var _toConsumableArray$1 = /*@__PURE__*/getDefaultExportFromCjs(toConsumableArrayExports);

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var factory_1;
var hasRequiredFactory;

function requireFactory () {
	if (hasRequiredFactory) return factory_1;
	hasRequiredFactory = 1;

	var _assign = requireObjectAssign();

	// -- Inlined from fbjs --

	var emptyObject = {};

	function _invariant(condition, format, a, b, c, d, e, f) {

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	// /-- Inlined from fbjs --

	var MIXINS_KEY = 'mixins';

	// Helper function to allow the creation of anonymous functions which do not
	// have .name set to the name of the variable being assigned to.
	function identity(fn) {
	  return fn;
	}

	function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
	  /**
	   * Policies that describe methods in `ReactClassInterface`.
	   */

	  var injectedMixins = [];

	  /**
	   * Composite components are higher-level components that compose other composite
	   * or host components.
	   *
	   * To create a new type of `ReactClass`, pass a specification of
	   * your new class to `React.createClass`. The only requirement of your class
	   * specification is that you implement a `render` method.
	   *
	   *   var MyComponent = React.createClass({
	   *     render: function() {
	   *       return <div>Hello World</div>;
	   *     }
	   *   });
	   *
	   * The class specification supports a specific protocol of methods that have
	   * special meaning (e.g. `render`). See `ReactClassInterface` for
	   * more the comprehensive protocol. Any other properties and methods in the
	   * class specification will be available on the prototype.
	   *
	   * @interface ReactClassInterface
	   * @internal
	   */
	  var ReactClassInterface = {
	    /**
	     * An array of Mixin objects to include when defining your component.
	     *
	     * @type {array}
	     * @optional
	     */
	    mixins: 'DEFINE_MANY',

	    /**
	     * An object containing properties and methods that should be defined on
	     * the component's constructor instead of its prototype (static methods).
	     *
	     * @type {object}
	     * @optional
	     */
	    statics: 'DEFINE_MANY',

	    /**
	     * Definition of prop types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    propTypes: 'DEFINE_MANY',

	    /**
	     * Definition of context types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    contextTypes: 'DEFINE_MANY',

	    /**
	     * Definition of context types this component sets for its children.
	     *
	     * @type {object}
	     * @optional
	     */
	    childContextTypes: 'DEFINE_MANY',

	    // ==== Definition methods ====

	    /**
	     * Invoked when the component is mounted. Values in the mapping will be set on
	     * `this.props` if that prop is not specified (i.e. using an `in` check).
	     *
	     * This method is invoked before `getInitialState` and therefore cannot rely
	     * on `this.state` or use `this.setState`.
	     *
	     * @return {object}
	     * @optional
	     */
	    getDefaultProps: 'DEFINE_MANY_MERGED',

	    /**
	     * Invoked once before the component is mounted. The return value will be used
	     * as the initial value of `this.state`.
	     *
	     *   getInitialState: function() {
	     *     return {
	     *       isOn: false,
	     *       fooBaz: new BazFoo()
	     *     }
	     *   }
	     *
	     * @return {object}
	     * @optional
	     */
	    getInitialState: 'DEFINE_MANY_MERGED',

	    /**
	     * @return {object}
	     * @optional
	     */
	    getChildContext: 'DEFINE_MANY_MERGED',

	    /**
	     * Uses props from `this.props` and state from `this.state` to render the
	     * structure of the component.
	     *
	     * No guarantees are made about when or how often this method is invoked, so
	     * it must not have side effects.
	     *
	     *   render: function() {
	     *     var name = this.props.name;
	     *     return <div>Hello, {name}!</div>;
	     *   }
	     *
	     * @return {ReactComponent}
	     * @required
	     */
	    render: 'DEFINE_ONCE',

	    // ==== Delegate methods ====

	    /**
	     * Invoked when the component is initially created and about to be mounted.
	     * This may have side effects, but any external subscriptions or data created
	     * by this method must be cleaned up in `componentWillUnmount`.
	     *
	     * @optional
	     */
	    componentWillMount: 'DEFINE_MANY',

	    /**
	     * Invoked when the component has been mounted and has a DOM representation.
	     * However, there is no guarantee that the DOM node is in the document.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been mounted (initialized and rendered) for the first time.
	     *
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidMount: 'DEFINE_MANY',

	    /**
	     * Invoked before the component receives new props.
	     *
	     * Use this as an opportunity to react to a prop transition by updating the
	     * state using `this.setState`. Current props are accessed via `this.props`.
	     *
	     *   componentWillReceiveProps: function(nextProps, nextContext) {
	     *     this.setState({
	     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	     *     });
	     *   }
	     *
	     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	     * transition may cause a state change, but the opposite is not true. If you
	     * need it, you are probably looking for `componentWillUpdate`.
	     *
	     * @param {object} nextProps
	     * @optional
	     */
	    componentWillReceiveProps: 'DEFINE_MANY',

	    /**
	     * Invoked while deciding if the component should be updated as a result of
	     * receiving new props, state and/or context.
	     *
	     * Use this as an opportunity to `return false` when you're certain that the
	     * transition to the new props/state/context will not require a component
	     * update.
	     *
	     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	     *     return !equal(nextProps, this.props) ||
	     *       !equal(nextState, this.state) ||
	     *       !equal(nextContext, this.context);
	     *   }
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @return {boolean} True if the component should update.
	     * @optional
	     */
	    shouldComponentUpdate: 'DEFINE_ONCE',

	    /**
	     * Invoked when the component is about to update due to a transition from
	     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	     * and `nextContext`.
	     *
	     * Use this as an opportunity to perform preparation before an update occurs.
	     *
	     * NOTE: You **cannot** use `this.setState()` in this method.
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @param {ReactReconcileTransaction} transaction
	     * @optional
	     */
	    componentWillUpdate: 'DEFINE_MANY',

	    /**
	     * Invoked when the component's DOM representation has been updated.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been updated.
	     *
	     * @param {object} prevProps
	     * @param {?object} prevState
	     * @param {?object} prevContext
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidUpdate: 'DEFINE_MANY',

	    /**
	     * Invoked when the component is about to be removed from its parent and have
	     * its DOM representation destroyed.
	     *
	     * Use this as an opportunity to deallocate any external resources.
	     *
	     * NOTE: There is no `componentDidUnmount` since your component will have been
	     * destroyed by that point.
	     *
	     * @optional
	     */
	    componentWillUnmount: 'DEFINE_MANY',

	    /**
	     * Replacement for (deprecated) `componentWillMount`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillMount: 'DEFINE_MANY',

	    /**
	     * Replacement for (deprecated) `componentWillReceiveProps`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',

	    /**
	     * Replacement for (deprecated) `componentWillUpdate`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillUpdate: 'DEFINE_MANY',

	    // ==== Advanced methods ====

	    /**
	     * Updates the component's currently mounted DOM representation.
	     *
	     * By default, this implements React's rendering and reconciliation algorithm.
	     * Sophisticated clients may wish to override this.
	     *
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     * @overridable
	     */
	    updateComponent: 'OVERRIDE_BASE'
	  };

	  /**
	   * Similar to ReactClassInterface but for static methods.
	   */
	  var ReactClassStaticInterface = {
	    /**
	     * This method is invoked after a component is instantiated and when it
	     * receives new props. Return an object to update state in response to
	     * prop changes. Return null to indicate no change to state.
	     *
	     * If an object is returned, its keys will be merged into the existing state.
	     *
	     * @return {object || null}
	     * @optional
	     */
	    getDerivedStateFromProps: 'DEFINE_MANY_MERGED'
	  };

	  /**
	   * Mapping from class specification keys to special processing functions.
	   *
	   * Although these are declared like instance properties in the specification
	   * when defining classes using `React.createClass`, they are actually static
	   * and are accessible on the constructor instead of the prototype. Despite
	   * being static, they must be defined outside of the "statics" key under
	   * which all other static methods are defined.
	   */
	  var RESERVED_SPEC_KEYS = {
	    displayName: function(Constructor, displayName) {
	      Constructor.displayName = displayName;
	    },
	    mixins: function(Constructor, mixins) {
	      if (mixins) {
	        for (var i = 0; i < mixins.length; i++) {
	          mixSpecIntoComponent(Constructor, mixins[i]);
	        }
	      }
	    },
	    childContextTypes: function(Constructor, childContextTypes) {
	      Constructor.childContextTypes = _assign(
	        {},
	        Constructor.childContextTypes,
	        childContextTypes
	      );
	    },
	    contextTypes: function(Constructor, contextTypes) {
	      Constructor.contextTypes = _assign(
	        {},
	        Constructor.contextTypes,
	        contextTypes
	      );
	    },
	    /**
	     * Special case getDefaultProps which should move into statics but requires
	     * automatic merging.
	     */
	    getDefaultProps: function(Constructor, getDefaultProps) {
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps = createMergedResultFunction(
	          Constructor.getDefaultProps,
	          getDefaultProps
	        );
	      } else {
	        Constructor.getDefaultProps = getDefaultProps;
	      }
	    },
	    propTypes: function(Constructor, propTypes) {
	      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	    },
	    statics: function(Constructor, statics) {
	      mixStaticSpecIntoComponent(Constructor, statics);
	    },
	    autobind: function() {}
	  };

	  function validateMethodOverride(isAlreadyDefined, name) {
	    var specPolicy = ReactClassInterface.hasOwnProperty(name)
	      ? ReactClassInterface[name]
	      : null;

	    // Disallow overriding of base class methods unless explicitly allowed.
	    if (ReactClassMixin.hasOwnProperty(name)) {
	      _invariant(
	        specPolicy === 'OVERRIDE_BASE',
	        'ReactClassInterface: You are attempting to override ' +
	          '`%s` from your class specification. Ensure that your method names ' +
	          'do not overlap with React methods.',
	        name
	      );
	    }

	    // Disallow defining methods more than once unless explicitly allowed.
	    if (isAlreadyDefined) {
	      _invariant(
	        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
	        'ReactClassInterface: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be due ' +
	          'to a mixin.',
	        name
	      );
	    }
	  }

	  /**
	   * Mixin helper which handles policy validation and reserved
	   * specification keys when building React classes.
	   */
	  function mixSpecIntoComponent(Constructor, spec) {
	    if (!spec) {

	      return;
	    }

	    _invariant(
	      typeof spec !== 'function',
	      "ReactClass: You're attempting to " +
	        'use a component class or function as a mixin. Instead, just use a ' +
	        'regular object.'
	    );
	    _invariant(
	      !isValidElement(spec),
	      "ReactClass: You're attempting to " +
	        'use a component as a mixin. Instead, just use a regular object.'
	    );

	    var proto = Constructor.prototype;
	    var autoBindPairs = proto.__reactAutoBindPairs;

	    // By handling mixins before any other properties, we ensure the same
	    // chaining order is applied to methods with DEFINE_MANY policy, whether
	    // mixins are listed before or after these methods in the spec.
	    if (spec.hasOwnProperty(MIXINS_KEY)) {
	      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	    }

	    for (var name in spec) {
	      if (!spec.hasOwnProperty(name)) {
	        continue;
	      }

	      if (name === MIXINS_KEY) {
	        // We have already handled mixins in a special case above.
	        continue;
	      }

	      var property = spec[name];
	      var isAlreadyDefined = proto.hasOwnProperty(name);
	      validateMethodOverride(isAlreadyDefined, name);

	      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	        RESERVED_SPEC_KEYS[name](Constructor, property);
	      } else {
	        // Setup methods on prototype:
	        // The following member methods should not be automatically bound:
	        // 1. Expected ReactClass methods (in the "interface").
	        // 2. Overridden methods (that were mixed in).
	        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	        var isFunction = typeof property === 'function';
	        var shouldAutoBind =
	          isFunction &&
	          !isReactClassMethod &&
	          !isAlreadyDefined &&
	          spec.autobind !== false;

	        if (shouldAutoBind) {
	          autoBindPairs.push(name, property);
	          proto[name] = property;
	        } else {
	          if (isAlreadyDefined) {
	            var specPolicy = ReactClassInterface[name];

	            // These cases should already be caught by validateMethodOverride.
	            _invariant(
	              isReactClassMethod &&
	                (specPolicy === 'DEFINE_MANY_MERGED' ||
	                  specPolicy === 'DEFINE_MANY'),
	              'ReactClass: Unexpected spec policy %s for key %s ' +
	                'when mixing in component specs.',
	              specPolicy,
	              name
	            );

	            // For methods which are defined more than once, call the existing
	            // methods before calling the new property, merging if appropriate.
	            if (specPolicy === 'DEFINE_MANY_MERGED') {
	              proto[name] = createMergedResultFunction(proto[name], property);
	            } else if (specPolicy === 'DEFINE_MANY') {
	              proto[name] = createChainedFunction(proto[name], property);
	            }
	          } else {
	            proto[name] = property;
	          }
	        }
	      }
	    }
	  }

	  function mixStaticSpecIntoComponent(Constructor, statics) {
	    if (!statics) {
	      return;
	    }

	    for (var name in statics) {
	      var property = statics[name];
	      if (!statics.hasOwnProperty(name)) {
	        continue;
	      }

	      var isReserved = name in RESERVED_SPEC_KEYS;
	      _invariant(
	        !isReserved,
	        'ReactClass: You are attempting to define a reserved ' +
	          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
	          'as an instance property instead; it will still be accessible on the ' +
	          'constructor.',
	        name
	      );

	      var isAlreadyDefined = name in Constructor;
	      if (isAlreadyDefined) {
	        var specPolicy = ReactClassStaticInterface.hasOwnProperty(name)
	          ? ReactClassStaticInterface[name]
	          : null;

	        _invariant(
	          specPolicy === 'DEFINE_MANY_MERGED',
	          'ReactClass: You are attempting to define ' +
	            '`%s` on your component more than once. This conflict may be ' +
	            'due to a mixin.',
	          name
	        );

	        Constructor[name] = createMergedResultFunction(Constructor[name], property);

	        return;
	      }

	      Constructor[name] = property;
	    }
	  }

	  /**
	   * Merge two objects, but throw if both contain the same key.
	   *
	   * @param {object} one The first object, which is mutated.
	   * @param {object} two The second object
	   * @return {object} one after it has been mutated to contain everything in two.
	   */
	  function mergeIntoWithNoDuplicateKeys(one, two) {
	    _invariant(
	      one && two && typeof one === 'object' && typeof two === 'object',
	      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
	    );

	    for (var key in two) {
	      if (two.hasOwnProperty(key)) {
	        _invariant(
	          one[key] === undefined,
	          'mergeIntoWithNoDuplicateKeys(): ' +
	            'Tried to merge two objects with the same key: `%s`. This conflict ' +
	            'may be due to a mixin; in particular, this may be caused by two ' +
	            'getInitialState() or getDefaultProps() methods returning objects ' +
	            'with clashing keys.',
	          key
	        );
	        one[key] = two[key];
	      }
	    }
	    return one;
	  }

	  /**
	   * Creates a function that invokes two functions and merges their return values.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createMergedResultFunction(one, two) {
	    return function mergedResult() {
	      var a = one.apply(this, arguments);
	      var b = two.apply(this, arguments);
	      if (a == null) {
	        return b;
	      } else if (b == null) {
	        return a;
	      }
	      var c = {};
	      mergeIntoWithNoDuplicateKeys(c, a);
	      mergeIntoWithNoDuplicateKeys(c, b);
	      return c;
	    };
	  }

	  /**
	   * Creates a function that invokes two functions and ignores their return vales.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createChainedFunction(one, two) {
	    return function chainedFunction() {
	      one.apply(this, arguments);
	      two.apply(this, arguments);
	    };
	  }

	  /**
	   * Binds a method to the component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   * @param {function} method Method to be bound.
	   * @return {function} The bound method.
	   */
	  function bindAutoBindMethod(component, method) {
	    var boundMethod = method.bind(component);
	    return boundMethod;
	  }

	  /**
	   * Binds all auto-bound methods in a component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   */
	  function bindAutoBindMethods(component) {
	    var pairs = component.__reactAutoBindPairs;
	    for (var i = 0; i < pairs.length; i += 2) {
	      var autoBindKey = pairs[i];
	      var method = pairs[i + 1];
	      component[autoBindKey] = bindAutoBindMethod(component, method);
	    }
	  }

	  var IsMountedPreMixin = {
	    componentDidMount: function() {
	      this.__isMounted = true;
	    }
	  };

	  var IsMountedPostMixin = {
	    componentWillUnmount: function() {
	      this.__isMounted = false;
	    }
	  };

	  /**
	   * Add more to the ReactClass base class. These are all legacy features and
	   * therefore not already part of the modern ReactComponent.
	   */
	  var ReactClassMixin = {
	    /**
	     * TODO: This will be deprecated because state should always keep a consistent
	     * type signature and the only use case for this, is to avoid that.
	     */
	    replaceState: function(newState, callback) {
	      this.updater.enqueueReplaceState(this, newState, callback);
	    },

	    /**
	     * Checks whether or not this composite component is mounted.
	     * @return {boolean} True if mounted, false otherwise.
	     * @protected
	     * @final
	     */
	    isMounted: function() {
	      return !!this.__isMounted;
	    }
	  };

	  var ReactClassComponent = function() {};
	  _assign(
	    ReactClassComponent.prototype,
	    ReactComponent.prototype,
	    ReactClassMixin
	  );

	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  function createClass(spec) {
	    // To keep our warnings more understandable, we'll use a little hack here to
	    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
	    // unnecessarily identify a class without displayName as 'Constructor'.
	    var Constructor = identity(function(props, context, updater) {

	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }

	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;

	      this.state = null;

	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.

	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      _invariant(
	        typeof initialState === 'object' && !Array.isArray(initialState),
	        '%s.getInitialState(): must return an object or null',
	        Constructor.displayName || 'ReactCompositeComponent'
	      );

	      this.state = initialState;
	    });
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];

	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

	    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
	    mixSpecIntoComponent(Constructor, spec);
	    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }

	    _invariant(
	      Constructor.prototype.render,
	      'createClass(...): Class specification must implement a `render` method.'
	    );

	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }

	    return Constructor;
	  }

	  return createClass;
	}

	factory_1 = factory;
	return factory_1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var createReactClass$1;
var hasRequiredCreateReactClass;

function requireCreateReactClass () {
	if (hasRequiredCreateReactClass) return createReactClass$1;
	hasRequiredCreateReactClass = 1;

	var React = React__default;
	var factory = requireFactory();

	if (typeof React === 'undefined') {
	  throw Error(
	    'create-react-class could not find the React object. If you are using script tags, ' +
	      'make sure that React is being loaded before create-react-class.'
	  );
	}

	// Hack to grab NoopUpdateQueue from isomorphic React
	var ReactNoopUpdateQueue = new React.Component().updater;

	createReactClass$1 = factory(
	  React.Component,
	  React.isValidElement,
	  ReactNoopUpdateQueue
	);
	return createReactClass$1;
}

var createReactClassExports = requireCreateReactClass();
var createReactClass = /*@__PURE__*/getDefaultExportFromCjs(createReactClassExports);

var es = {};

var util = {};

var hasRequiredUtil;

function requireUtil () {
	if (hasRequiredUtil) return util;
	hasRequiredUtil = 1;

	Object.defineProperty(util, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	util.convertFieldsError = convertFieldsError;
	util.format = format;
	util.isEmptyValue = isEmptyValue;
	util.isEmptyObject = isEmptyObject;
	util.asyncMap = asyncMap;
	util.complementError = complementError;
	util.deepMerge = deepMerge;
	/* eslint no-console:0 */

	var formatRegExp = /%[sdj%]/g;

	util.warning = function warning() {};

	function convertFieldsError(errors) {
	  if (!errors || !errors.length) return null;
	  var fields = {};
	  errors.forEach(function (error) {
	    var field = error.field;
	    fields[field] = fields[field] || [];
	    fields[field].push(error);
	  });
	  return fields;
	}

	function format() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  var i = 1;
	  var f = args[0];
	  var len = args.length;
	  if (typeof f === 'function') {
	    return f.apply(null, args.slice(1));
	  }
	  if (typeof f === 'string') {
	    var str = String(f).replace(formatRegExp, function (x) {
	      if (x === '%%') {
	        return '%';
	      }
	      if (i >= len) {
	        return x;
	      }
	      switch (x) {
	        case '%s':
	          return String(args[i++]);
	        case '%d':
	          return Number(args[i++]);
	        case '%j':
	          try {
	            return JSON.stringify(args[i++]);
	          } catch (_) {
	            return '[Circular]';
	          }
	          break;
	        default:
	          return x;
	      }
	    });
	    for (var arg = args[i]; i < len; arg = args[++i]) {
	      str += ' ' + arg;
	    }
	    return str;
	  }
	  return f;
	}

	function isNativeStringType(type) {
	  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'pattern';
	}

	function isEmptyValue(value, type) {
	  if (value === undefined || value === null) {
	    return true;
	  }
	  if (type === 'array' && Array.isArray(value) && !value.length) {
	    return true;
	  }
	  if (isNativeStringType(type) && typeof value === 'string' && !value) {
	    return true;
	  }
	  return false;
	}

	function isEmptyObject(obj) {
	  return Object.keys(obj).length === 0;
	}

	function asyncParallelArray(arr, func, callback) {
	  var results = [];
	  var total = 0;
	  var arrLength = arr.length;

	  function count(errors) {
	    results.push.apply(results, errors);
	    total++;
	    if (total === arrLength) {
	      callback(results);
	    }
	  }

	  arr.forEach(function (a) {
	    func(a, count);
	  });
	}

	function asyncSerialArray(arr, func, callback) {
	  var index = 0;
	  var arrLength = arr.length;

	  function next(errors) {
	    if (errors && errors.length) {
	      callback(errors);
	      return;
	    }
	    var original = index;
	    index = index + 1;
	    if (original < arrLength) {
	      func(arr[original], next);
	    } else {
	      callback([]);
	    }
	  }

	  next([]);
	}

	function flattenObjArr(objArr) {
	  var ret = [];
	  Object.keys(objArr).forEach(function (k) {
	    ret.push.apply(ret, objArr[k]);
	  });
	  return ret;
	}

	function asyncMap(objArr, option, func, callback) {
	  if (option.first) {
	    var flattenArr = flattenObjArr(objArr);
	    return asyncSerialArray(flattenArr, func, callback);
	  }
	  var firstFields = option.firstFields || [];
	  if (firstFields === true) {
	    firstFields = Object.keys(objArr);
	  }
	  var objArrKeys = Object.keys(objArr);
	  var objArrLength = objArrKeys.length;
	  var total = 0;
	  var results = [];
	  var pending = new Promise(function (resolve, reject) {
	    var next = function next(errors) {
	      results.push.apply(results, errors);
	      total++;
	      if (total === objArrLength) {
	        callback(results);
	        return results.length ? reject({ errors: results, fields: convertFieldsError(results) }) : resolve();
	      }
	    };
	    objArrKeys.forEach(function (key) {
	      var arr = objArr[key];
	      if (firstFields.indexOf(key) !== -1) {
	        asyncSerialArray(arr, func, next);
	      } else {
	        asyncParallelArray(arr, func, next);
	      }
	    });
	  });
	  pending['catch'](function (e) {
	    return e;
	  });
	  return pending;
	}

	function complementError(rule) {
	  return function (oe) {
	    if (oe && oe.message) {
	      oe.field = oe.field || rule.fullField;
	      return oe;
	    }
	    return {
	      message: typeof oe === 'function' ? oe() : oe,
	      field: oe.field || rule.fullField
	    };
	  };
	}

	function deepMerge(target, source) {
	  if (source) {
	    for (var s in source) {
	      if (source.hasOwnProperty(s)) {
	        var value = source[s];
	        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && _typeof(target[s]) === 'object') {
	          target[s] = _extends({}, target[s], value);
	        } else {
	          target[s] = value;
	        }
	      }
	    }
	  }
	  return target;
	}
	return util;
}

var validator = {};

var string = {};

var rule = {};

var required$1 = {};

var hasRequiredRequired$1;

function requireRequired$1 () {
	if (hasRequiredRequired$1) return required$1;
	hasRequiredRequired$1 = 1;
	(function (exports$1) {

		Object.defineProperty(exports$1, "__esModule", {
		  value: true
		});

		var _util = requireUtil();

		var util = _interopRequireWildcard(_util);

		function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

		/**
		 *  Rule for validating required fields.
		 *
		 *  @param rule The validation rule.
		 *  @param value The value of the field on the source object.
		 *  @param source The source object being validated.
		 *  @param errors An array of errors that this rule may add
		 *  validation errors to.
		 *  @param options The validation options.
		 *  @param options.messages The validation messages.
		 */
		function required(rule, value, source, errors, options, type) {
		  if (rule.required && (!source.hasOwnProperty(rule.field) || util.isEmptyValue(value, type || rule.type))) {
		    errors.push(util.format(options.messages.required, rule.fullField));
		  }
		}

		exports$1['default'] = required; 
	} (required$1));
	return required$1;
}

var whitespace = {};

var hasRequiredWhitespace;

function requireWhitespace () {
	if (hasRequiredWhitespace) return whitespace;
	hasRequiredWhitespace = 1;
	(function (exports$1) {

		Object.defineProperty(exports$1, "__esModule", {
		  value: true
		});

		var _util = requireUtil();

		var util = _interopRequireWildcard(_util);

		function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

		/**
		 *  Rule for validating whitespace.
		 *
		 *  @param rule The validation rule.
		 *  @param value The value of the field on the source object.
		 *  @param source The source object being validated.
		 *  @param errors An array of errors that this rule may add
		 *  validation errors to.
		 *  @param options The validation options.
		 *  @param options.messages The validation messages.
		 */
		function whitespace(rule, value, source, errors, options) {
		  if (/^\s+$/.test(value) || value === '') {
		    errors.push(util.format(options.messages.whitespace, rule.fullField));
		  }
		}

		exports$1['default'] = whitespace; 
	} (whitespace));
	return whitespace;
}

var type$1 = {};

var hasRequiredType$1;

function requireType$1 () {
	if (hasRequiredType$1) return type$1;
	hasRequiredType$1 = 1;
	(function (exports$1) {

		Object.defineProperty(exports$1, "__esModule", {
		  value: true
		});

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

		var _util = requireUtil();

		var util = _interopRequireWildcard(_util);

		var _required = requireRequired$1();

		var _required2 = _interopRequireDefault(_required);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

		/* eslint max-len:0 */

		var pattern = {
		  // http://emailregex.com/
		  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		  url: new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i'),
		  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
		};

		var types = {
		  integer: function integer(value) {
		    return types.number(value) && parseInt(value, 10) === value;
		  },
		  float: function float(value) {
		    return types.number(value) && !types.integer(value);
		  },
		  array: function array(value) {
		    return Array.isArray(value);
		  },
		  regexp: function regexp(value) {
		    if (value instanceof RegExp) {
		      return true;
		    }
		    try {
		      return !!new RegExp(value);
		    } catch (e) {
		      return false;
		    }
		  },
		  date: function date(value) {
		    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function';
		  },
		  number: function number(value) {
		    if (isNaN(value)) {
		      return false;
		    }
		    return typeof value === 'number';
		  },
		  object: function object(value) {
		    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && !types.array(value);
		  },
		  method: function method(value) {
		    return typeof value === 'function';
		  },
		  email: function email(value) {
		    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
		  },
		  url: function url(value) {
		    return typeof value === 'string' && !!value.match(pattern.url);
		  },
		  hex: function hex(value) {
		    return typeof value === 'string' && !!value.match(pattern.hex);
		  }
		};

		/**
		 *  Rule for validating the type of a value.
		 *
		 *  @param rule The validation rule.
		 *  @param value The value of the field on the source object.
		 *  @param source The source object being validated.
		 *  @param errors An array of errors that this rule may add
		 *  validation errors to.
		 *  @param options The validation options.
		 *  @param options.messages The validation messages.
		 */
		function type(rule, value, source, errors, options) {
		  if (rule.required && value === undefined) {
		    (0, _required2['default'])(rule, value, source, errors, options);
		    return;
		  }
		  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
		  var ruleType = rule.type;
		  if (custom.indexOf(ruleType) > -1) {
		    if (!types[ruleType](value)) {
		      errors.push(util.format(options.messages.types[ruleType], rule.fullField, rule.type));
		    }
		    // straight typeof check
		  } else if (ruleType && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== rule.type) {
		    errors.push(util.format(options.messages.types[ruleType], rule.fullField, rule.type));
		  }
		}

		exports$1['default'] = type; 
	} (type$1));
	return type$1;
}

var range = {};

var hasRequiredRange;

function requireRange () {
	if (hasRequiredRange) return range;
	hasRequiredRange = 1;
	(function (exports$1) {

		Object.defineProperty(exports$1, "__esModule", {
		  value: true
		});

		var _util = requireUtil();

		var util = _interopRequireWildcard(_util);

		function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

		/**
		 *  Rule for validating minimum and maximum allowed values.
		 *
		 *  @param rule The validation rule.
		 *  @param value The value of the field on the source object.
		 *  @param source The source object being validated.
		 *  @param errors An array of errors that this rule may add
		 *  validation errors to.
		 *  @param options The validation options.
		 *  @param options.messages The validation messages.
		 */
		function range(rule, value, source, errors, options) {
		  var len = typeof rule.len === 'number';
		  var min = typeof rule.min === 'number';
		  var max = typeof rule.max === 'number';
		  // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）
		  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
		  var val = value;
		  var key = null;
		  var num = typeof value === 'number';
		  var str = typeof value === 'string';
		  var arr = Array.isArray(value);
		  if (num) {
		    key = 'number';
		  } else if (str) {
		    key = 'string';
		  } else if (arr) {
		    key = 'array';
		  }
		  // if the value is not of a supported type for range validation
		  // the validation rule rule should use the
		  // type property to also test for a particular type
		  if (!key) {
		    return false;
		  }
		  if (arr) {
		    val = value.length;
		  }
		  if (str) {
		    // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".lenght !== 3
		    val = value.replace(spRegexp, '_').length;
		  }
		  if (len) {
		    if (val !== rule.len) {
		      errors.push(util.format(options.messages[key].len, rule.fullField, rule.len));
		    }
		  } else if (min && !max && val < rule.min) {
		    errors.push(util.format(options.messages[key].min, rule.fullField, rule.min));
		  } else if (max && !min && val > rule.max) {
		    errors.push(util.format(options.messages[key].max, rule.fullField, rule.max));
		  } else if (min && max && (val < rule.min || val > rule.max)) {
		    errors.push(util.format(options.messages[key].range, rule.fullField, rule.min, rule.max));
		  }
		}

		exports$1['default'] = range; 
	} (range));
	return range;
}

var _enum$1 = {};

var hasRequired_enum$1;

function require_enum$1 () {
	if (hasRequired_enum$1) return _enum$1;
	hasRequired_enum$1 = 1;
	(function (exports$1) {

		Object.defineProperty(exports$1, "__esModule", {
		  value: true
		});

		var _util = requireUtil();

		var util = _interopRequireWildcard(_util);

		function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

		var ENUM = 'enum';

		/**
		 *  Rule for validating a value exists in an enumerable list.
		 *
		 *  @param rule The validation rule.
		 *  @param value The value of the field on the source object.
		 *  @param source The source object being validated.
		 *  @param errors An array of errors that this rule may add
		 *  validation errors to.
		 *  @param options The validation options.
		 *  @param options.messages The validation messages.
		 */
		function enumerable(rule, value, source, errors, options) {
		  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
		  if (rule[ENUM].indexOf(value) === -1) {
		    errors.push(util.format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
		  }
		}

		exports$1['default'] = enumerable; 
	} (_enum$1));
	return _enum$1;
}

var pattern$1 = {};

var hasRequiredPattern$1;

function requirePattern$1 () {
	if (hasRequiredPattern$1) return pattern$1;
	hasRequiredPattern$1 = 1;
	(function (exports$1) {

		Object.defineProperty(exports$1, "__esModule", {
		  value: true
		});

		var _util = requireUtil();

		var util = _interopRequireWildcard(_util);

		function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

		/**
		 *  Rule for validating a regular expression pattern.
		 *
		 *  @param rule The validation rule.
		 *  @param value The value of the field on the source object.
		 *  @param source The source object being validated.
		 *  @param errors An array of errors that this rule may add
		 *  validation errors to.
		 *  @param options The validation options.
		 *  @param options.messages The validation messages.
		 */
		function pattern(rule, value, source, errors, options) {
		  if (rule.pattern) {
		    if (rule.pattern instanceof RegExp) {
		      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
		      // flag is accidentally set to `true`, which in a validation scenario
		      // is not necessary and the result might be misleading
		      rule.pattern.lastIndex = 0;
		      if (!rule.pattern.test(value)) {
		        errors.push(util.format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
		      }
		    } else if (typeof rule.pattern === 'string') {
		      var _pattern = new RegExp(rule.pattern);
		      if (!_pattern.test(value)) {
		        errors.push(util.format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
		      }
		    }
		  }
		}

		exports$1['default'] = pattern; 
	} (pattern$1));
	return pattern$1;
}

var hasRequiredRule;

function requireRule () {
	if (hasRequiredRule) return rule;
	hasRequiredRule = 1;
	(function (exports$1) {

		Object.defineProperty(exports$1, "__esModule", {
		  value: true
		});

		var _required = requireRequired$1();

		var _required2 = _interopRequireDefault(_required);

		var _whitespace = requireWhitespace();

		var _whitespace2 = _interopRequireDefault(_whitespace);

		var _type = requireType$1();

		var _type2 = _interopRequireDefault(_type);

		var _range = requireRange();

		var _range2 = _interopRequireDefault(_range);

		var _enum = require_enum$1();

		var _enum2 = _interopRequireDefault(_enum);

		var _pattern = requirePattern$1();

		var _pattern2 = _interopRequireDefault(_pattern);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		exports$1['default'] = {
		  required: _required2['default'],
		  whitespace: _whitespace2['default'],
		  type: _type2['default'],
		  range: _range2['default'],
		  'enum': _enum2['default'],
		  pattern: _pattern2['default']
		}; 
	} (rule));
	return rule;
}

var hasRequiredString;

function requireString () {
	if (hasRequiredString) return string;
	hasRequiredString = 1;
	(function (exports$1) {

		Object.defineProperty(exports$1, "__esModule", {
		  value: true
		});

		var _rule = requireRule();

		var _rule2 = _interopRequireDefault(_rule);

		var _util = requireUtil();

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		/**
		 *  Performs validation for string types.
		 *
		 *  @param rule The validation rule.
		 *  @param value The value of the field on the source object.
		 *  @param callback The callback function.
		 *  @param source The source object being validated.
		 *  @param options The validation options.
		 *  @param options.messages The validation messages.
		 */
		function string(rule, value, callback, source, options) {
		  var errors = [];
		  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
		  if (validate) {
		    if ((0, _util.isEmptyValue)(value, 'string') && !rule.required) {
		      return callback();
		    }
		    _rule2['default'].required(rule, value, source, errors, options, 'string');
		    if (!(0, _util.isEmptyValue)(value, 'string')) {
		      _rule2['default'].type(rule, value, source, errors, options);
		      _rule2['default'].range(rule, value, source, errors, options);
		      _rule2['default'].pattern(rule, value, source, errors, options);
		      if (rule.whitespace === true) {
		        _rule2['default'].whitespace(rule, value, source, errors, options);
		      }
		    }
		  }
		  callback(errors);
		}

		exports$1['default'] = string; 
	} (string));
	return string;
}

var method = {};

var hasRequiredMethod;

function requireMethod () {
	if (hasRequiredMethod) return method;
	hasRequiredMethod = 1;
	(function (exports$1) {

		Object.defineProperty(exports$1, "__esModule", {
		  value: true
		});

		var _rule = requireRule();

		var _rule2 = _interopRequireDefault(_rule);

		var _util = requireUtil();

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		/**
		 *  Validates a function.
		 *
		 *  @param rule The validation rule.
		 *  @param value The value of the field on the source object.
		 *  @param callback The callback function.
		 *  @param source The source object being validated.
		 *  @param options The validation options.
		 *  @param options.messages The validation messages.
		 */
		function method(rule, value, callback, source, options) {
		  var errors = [];
		  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
		  if (validate) {
		    if ((0, _util.isEmptyValue)(value) && !rule.required) {
		      return callback();
		    }
		    _rule2['default'].required(rule, value, source, errors, options);
		    if (value !== undefined) {
		      _rule2['default'].type(rule, value, source, errors, options);
		    }
		  }
		  callback(errors);
		}

		exports$1['default'] = method; 
	} (method));
	return method;
}

var number = {};

var hasRequiredNumber;

function requireNumber () {
	if (hasRequiredNumber) return number;
	hasRequiredNumber = 1;
	(function (exports$1) {

		Object.defineProperty(exports$1, "__esModule", {
		  value: true
		});

		var _rule = requireRule();

		var _rule2 = _interopRequireDefault(_rule);

		var _util = requireUtil();

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		/**
		 *  Validates a number.
		 *
		 *  @param rule The validation rule.
		 *  @param value The value of the field on the source object.
		 *  @param callback The callback function.
		 *  @param source The source object being validated.
		 *  @param options The validation options.
		 *  @param options.messages The validation messages.
		 */
		function number(rule, value, callback, source, options) {
		  var errors = [];
		  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
		  if (validate) {
		    if (value === '') {
		      value = undefined;
		    }
		    if ((0, _util.isEmptyValue)(value) && !rule.required) {
		      return callback();
		    }
		    _rule2['default'].required(rule, value, source, errors, options);
		    if (value !== undefined) {
		      _rule2['default'].type(rule, value, source, errors, options);
		      _rule2['default'].range(rule, value, source, errors, options);
		    }
		  }
		  callback(errors);
		}

		exports$1['default'] = number; 
	} (number));
	return number;
}

var boolean = {};

var hasRequiredBoolean;

function requireBoolean () {
	if (hasRequiredBoolean) return boolean;
	hasRequiredBoolean = 1;
	(function (exports$1) {

		Object.defineProperty(exports$1, "__esModule", {
		  value: true
		});

		var _util = requireUtil();

		var _rule = requireRule();

		var _rule2 = _interopRequireDefault(_rule);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		/**
		 *  Validates a boolean.
		 *
		 *  @param rule The validation rule.
		 *  @param value The value of the field on the source object.
		 *  @param callback The callback function.
		 *  @param source The source object being validated.
		 *  @param options The validation options.
		 *  @param options.messages The validation messages.
		 */
		function boolean(rule, value, callback, source, options) {
		  var errors = [];
		  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
		  if (validate) {
		    if ((0, _util.isEmptyValue)(value) && !rule.required) {
		      return callback();
		    }
		    _rule2['default'].required(rule, value, source, errors, options);
		    if (value !== undefined) {
		      _rule2['default'].type(rule, value, source, errors, options);
		    }
		  }
		  callback(errors);
		}

		exports$1['default'] = boolean; 
	} (boolean));
	return boolean;
}

var regexp = {};

var hasRequiredRegexp;

function requireRegexp () {
	if (hasRequiredRegexp) return regexp;
	hasRequiredRegexp = 1;
	(function (exports$1) {

		Object.defineProperty(exports$1, "__esModule", {
		  value: true
		});

		var _rule = requireRule();

		var _rule2 = _interopRequireDefault(_rule);

		var _util = requireUtil();

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		/**
		 *  Validates the regular expression type.
		 *
		 *  @param rule The validation rule.
		 *  @param value The value of the field on the source object.
		 *  @param callback The callback function.
		 *  @param source The source object being validated.
		 *  @param options The validation options.
		 *  @param options.messages The validation messages.
		 */
		function regexp(rule, value, callback, source, options) {
		  var errors = [];
		  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
		  if (validate) {
		    if ((0, _util.isEmptyValue)(value) && !rule.required) {
		      return callback();
		    }
		    _rule2['default'].required(rule, value, source, errors, options);
		    if (!(0, _util.isEmptyValue)(value)) {
		      _rule2['default'].type(rule, value, source, errors, options);
		    }
		  }
		  callback(errors);
		}

		exports$1['default'] = regexp; 
	} (regexp));
	return regexp;
}

var integer = {};

var hasRequiredInteger;

function requireInteger () {
	if (hasRequiredInteger) return integer;
	hasRequiredInteger = 1;
	(function (exports$1) {

		Object.defineProperty(exports$1, "__esModule", {
		  value: true
		});

		var _rule = requireRule();

		var _rule2 = _interopRequireDefault(_rule);

		var _util = requireUtil();

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		/**
		 *  Validates a number is an integer.
		 *
		 *  @param rule The validation rule.
		 *  @param value The value of the field on the source object.
		 *  @param callback The callback function.
		 *  @param source The source object being validated.
		 *  @param options The validation options.
		 *  @param options.messages The validation messages.
		 */
		function integer(rule, value, callback, source, options) {
		  var errors = [];
		  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
		  if (validate) {
		    if ((0, _util.isEmptyValue)(value) && !rule.required) {
		      return callback();
		    }
		    _rule2['default'].required(rule, value, source, errors, options);
		    if (value !== undefined) {
		      _rule2['default'].type(rule, value, source, errors, options);
		      _rule2['default'].range(rule, value, source, errors, options);
		    }
		  }
		  callback(errors);
		}

		exports$1['default'] = integer; 
	} (integer));
	return integer;
}

var float = {};

var hasRequiredFloat;

function requireFloat () {
	if (hasRequiredFloat) return float;
	hasRequiredFloat = 1;
	(function (exports$1) {

		Object.defineProperty(exports$1, "__esModule", {
		  value: true
		});

		var _rule = requireRule();

		var _rule2 = _interopRequireDefault(_rule);

		var _util = requireUtil();

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		/**
		 *  Validates a number is a floating point number.
		 *
		 *  @param rule The validation rule.
		 *  @param value The value of the field on the source object.
		 *  @param callback The callback function.
		 *  @param source The source object being validated.
		 *  @param options The validation options.
		 *  @param options.messages The validation messages.
		 */
		function floatFn(rule, value, callback, source, options) {
		  var errors = [];
		  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
		  if (validate) {
		    if ((0, _util.isEmptyValue)(value) && !rule.required) {
		      return callback();
		    }
		    _rule2['default'].required(rule, value, source, errors, options);
		    if (value !== undefined) {
		      _rule2['default'].type(rule, value, source, errors, options);
		      _rule2['default'].range(rule, value, source, errors, options);
		    }
		  }
		  callback(errors);
		}

		exports$1['default'] = floatFn; 
	} (float));
	return float;
}

var array = {};

var hasRequiredArray;

function requireArray () {
	if (hasRequiredArray) return array;
	hasRequiredArray = 1;
	(function (exports$1) {

		Object.defineProperty(exports$1, "__esModule", {
		  value: true
		});

		var _rule = requireRule();

		var _rule2 = _interopRequireDefault(_rule);

		var _util = requireUtil();

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		/**
		 *  Validates an array.
		 *
		 *  @param rule The validation rule.
		 *  @param value The value of the field on the source object.
		 *  @param callback The callback function.
		 *  @param source The source object being validated.
		 *  @param options The validation options.
		 *  @param options.messages The validation messages.
		 */
		function array(rule, value, callback, source, options) {
		  var errors = [];
		  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
		  if (validate) {
		    if ((0, _util.isEmptyValue)(value, 'array') && !rule.required) {
		      return callback();
		    }
		    _rule2['default'].required(rule, value, source, errors, options, 'array');
		    if (!(0, _util.isEmptyValue)(value, 'array')) {
		      _rule2['default'].type(rule, value, source, errors, options);
		      _rule2['default'].range(rule, value, source, errors, options);
		    }
		  }
		  callback(errors);
		}

		exports$1['default'] = array; 
	} (array));
	return array;
}

var object = {};

var hasRequiredObject;

function requireObject () {
	if (hasRequiredObject) return object;
	hasRequiredObject = 1;
	(function (exports$1) {

		Object.defineProperty(exports$1, "__esModule", {
		  value: true
		});

		var _rule = requireRule();

		var _rule2 = _interopRequireDefault(_rule);

		var _util = requireUtil();

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		/**
		 *  Validates an object.
		 *
		 *  @param rule The validation rule.
		 *  @param value The value of the field on the source object.
		 *  @param callback The callback function.
		 *  @param source The source object being validated.
		 *  @param options The validation options.
		 *  @param options.messages The validation messages.
		 */
		function object(rule, value, callback, source, options) {
		  var errors = [];
		  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
		  if (validate) {
		    if ((0, _util.isEmptyValue)(value) && !rule.required) {
		      return callback();
		    }
		    _rule2['default'].required(rule, value, source, errors, options);
		    if (value !== undefined) {
		      _rule2['default'].type(rule, value, source, errors, options);
		    }
		  }
		  callback(errors);
		}

		exports$1['default'] = object; 
	} (object));
	return object;
}

var _enum = {};

var hasRequired_enum;

function require_enum () {
	if (hasRequired_enum) return _enum;
	hasRequired_enum = 1;
	(function (exports$1) {

		Object.defineProperty(exports$1, "__esModule", {
		  value: true
		});

		var _rule = requireRule();

		var _rule2 = _interopRequireDefault(_rule);

		var _util = requireUtil();

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		var ENUM = 'enum';

		/**
		 *  Validates an enumerable list.
		 *
		 *  @param rule The validation rule.
		 *  @param value The value of the field on the source object.
		 *  @param callback The callback function.
		 *  @param source The source object being validated.
		 *  @param options The validation options.
		 *  @param options.messages The validation messages.
		 */
		function enumerable(rule, value, callback, source, options) {
		  var errors = [];
		  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
		  if (validate) {
		    if ((0, _util.isEmptyValue)(value) && !rule.required) {
		      return callback();
		    }
		    _rule2['default'].required(rule, value, source, errors, options);
		    if (value) {
		      _rule2['default'][ENUM](rule, value, source, errors, options);
		    }
		  }
		  callback(errors);
		}

		exports$1['default'] = enumerable; 
	} (_enum));
	return _enum;
}

var pattern = {};

var hasRequiredPattern;

function requirePattern () {
	if (hasRequiredPattern) return pattern;
	hasRequiredPattern = 1;
	(function (exports$1) {

		Object.defineProperty(exports$1, "__esModule", {
		  value: true
		});

		var _rule = requireRule();

		var _rule2 = _interopRequireDefault(_rule);

		var _util = requireUtil();

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		/**
		 *  Validates a regular expression pattern.
		 *
		 *  Performs validation when a rule only contains
		 *  a pattern property but is not declared as a string type.
		 *
		 *  @param rule The validation rule.
		 *  @param value The value of the field on the source object.
		 *  @param callback The callback function.
		 *  @param source The source object being validated.
		 *  @param options The validation options.
		 *  @param options.messages The validation messages.
		 */
		function pattern(rule, value, callback, source, options) {
		  var errors = [];
		  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
		  if (validate) {
		    if ((0, _util.isEmptyValue)(value, 'string') && !rule.required) {
		      return callback();
		    }
		    _rule2['default'].required(rule, value, source, errors, options);
		    if (!(0, _util.isEmptyValue)(value, 'string')) {
		      _rule2['default'].pattern(rule, value, source, errors, options);
		    }
		  }
		  callback(errors);
		}

		exports$1['default'] = pattern; 
	} (pattern));
	return pattern;
}

var date = {};

var hasRequiredDate;

function requireDate () {
	if (hasRequiredDate) return date;
	hasRequiredDate = 1;
	(function (exports$1) {

		Object.defineProperty(exports$1, "__esModule", {
		  value: true
		});

		var _rule = requireRule();

		var _rule2 = _interopRequireDefault(_rule);

		var _util = requireUtil();

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		function date(rule, value, callback, source, options) {
		  // console.log('integer rule called %j', rule);
		  var errors = [];
		  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
		  // console.log('validate on %s value', value);
		  if (validate) {
		    if ((0, _util.isEmptyValue)(value) && !rule.required) {
		      return callback();
		    }
		    _rule2['default'].required(rule, value, source, errors, options);
		    if (!(0, _util.isEmptyValue)(value)) {
		      var dateObject = void 0;

		      if (typeof value === 'number') {
		        dateObject = new Date(value);
		      } else {
		        dateObject = value;
		      }

		      _rule2['default'].type(rule, dateObject, source, errors, options);
		      if (dateObject) {
		        _rule2['default'].range(rule, dateObject.getTime(), source, errors, options);
		      }
		    }
		  }
		  callback(errors);
		}

		exports$1['default'] = date; 
	} (date));
	return date;
}

var required = {};

var hasRequiredRequired;

function requireRequired () {
	if (hasRequiredRequired) return required;
	hasRequiredRequired = 1;
	(function (exports$1) {

		Object.defineProperty(exports$1, "__esModule", {
		  value: true
		});

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

		var _rule = requireRule();

		var _rule2 = _interopRequireDefault(_rule);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		function required(rule, value, callback, source, options) {
		  var errors = [];
		  var type = Array.isArray(value) ? 'array' : typeof value === 'undefined' ? 'undefined' : _typeof(value);
		  _rule2['default'].required(rule, value, source, errors, options, type);
		  callback(errors);
		}

		exports$1['default'] = required; 
	} (required));
	return required;
}

var type = {};

var hasRequiredType;

function requireType () {
	if (hasRequiredType) return type;
	hasRequiredType = 1;
	(function (exports$1) {

		Object.defineProperty(exports$1, "__esModule", {
		  value: true
		});

		var _rule = requireRule();

		var _rule2 = _interopRequireDefault(_rule);

		var _util = requireUtil();

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		function type(rule, value, callback, source, options) {
		  var ruleType = rule.type;
		  var errors = [];
		  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
		  if (validate) {
		    if ((0, _util.isEmptyValue)(value, ruleType) && !rule.required) {
		      return callback();
		    }
		    _rule2['default'].required(rule, value, source, errors, options, ruleType);
		    if (!(0, _util.isEmptyValue)(value, ruleType)) {
		      _rule2['default'].type(rule, value, source, errors, options);
		    }
		  }
		  callback(errors);
		}

		exports$1['default'] = type; 
	} (type));
	return type;
}

var hasRequiredValidator;

function requireValidator () {
	if (hasRequiredValidator) return validator;
	hasRequiredValidator = 1;
	(function (exports$1) {

		Object.defineProperty(exports$1, "__esModule", {
		  value: true
		});

		var _string = requireString();

		var _string2 = _interopRequireDefault(_string);

		var _method = requireMethod();

		var _method2 = _interopRequireDefault(_method);

		var _number = requireNumber();

		var _number2 = _interopRequireDefault(_number);

		var _boolean = requireBoolean();

		var _boolean2 = _interopRequireDefault(_boolean);

		var _regexp = requireRegexp();

		var _regexp2 = _interopRequireDefault(_regexp);

		var _integer = requireInteger();

		var _integer2 = _interopRequireDefault(_integer);

		var _float = requireFloat();

		var _float2 = _interopRequireDefault(_float);

		var _array = requireArray();

		var _array2 = _interopRequireDefault(_array);

		var _object = requireObject();

		var _object2 = _interopRequireDefault(_object);

		var _enum = require_enum();

		var _enum2 = _interopRequireDefault(_enum);

		var _pattern = requirePattern();

		var _pattern2 = _interopRequireDefault(_pattern);

		var _date = requireDate();

		var _date2 = _interopRequireDefault(_date);

		var _required = requireRequired();

		var _required2 = _interopRequireDefault(_required);

		var _type = requireType();

		var _type2 = _interopRequireDefault(_type);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		exports$1['default'] = {
		  string: _string2['default'],
		  method: _method2['default'],
		  number: _number2['default'],
		  boolean: _boolean2['default'],
		  regexp: _regexp2['default'],
		  integer: _integer2['default'],
		  float: _float2['default'],
		  array: _array2['default'],
		  object: _object2['default'],
		  'enum': _enum2['default'],
		  pattern: _pattern2['default'],
		  date: _date2['default'],
		  url: _type2['default'],
		  hex: _type2['default'],
		  email: _type2['default'],
		  required: _required2['default']
		}; 
	} (validator));
	return validator;
}

var messages = {};

var hasRequiredMessages;

function requireMessages () {
	if (hasRequiredMessages) return messages;
	hasRequiredMessages = 1;

	Object.defineProperty(messages, "__esModule", {
	  value: true
	});
	messages.newMessages = newMessages;
	function newMessages() {
	  return {
	    'default': 'Validation error on field %s',
	    required: '%s is required',
	    'enum': '%s must be one of %s',
	    whitespace: '%s cannot be empty',
	    date: {
	      format: '%s date %s is invalid for format %s',
	      parse: '%s date could not be parsed, %s is invalid ',
	      invalid: '%s date %s is invalid'
	    },
	    types: {
	      string: '%s is not a %s',
	      method: '%s is not a %s (function)',
	      array: '%s is not an %s',
	      object: '%s is not an %s',
	      number: '%s is not a %s',
	      date: '%s is not a %s',
	      boolean: '%s is not a %s',
	      integer: '%s is not an %s',
	      float: '%s is not a %s',
	      regexp: '%s is not a valid %s',
	      email: '%s is not a valid %s',
	      url: '%s is not a valid %s',
	      hex: '%s is not a valid %s'
	    },
	    string: {
	      len: '%s must be exactly %s characters',
	      min: '%s must be at least %s characters',
	      max: '%s cannot be longer than %s characters',
	      range: '%s must be between %s and %s characters'
	    },
	    number: {
	      len: '%s must equal %s',
	      min: '%s cannot be less than %s',
	      max: '%s cannot be greater than %s',
	      range: '%s must be between %s and %s'
	    },
	    array: {
	      len: '%s must be exactly %s in length',
	      min: '%s cannot be less than %s in length',
	      max: '%s cannot be greater than %s in length',
	      range: '%s must be between %s and %s in length'
	    },
	    pattern: {
	      mismatch: '%s value %s does not match pattern %s'
	    },
	    clone: function clone() {
	      var cloned = JSON.parse(JSON.stringify(this));
	      cloned.clone = this.clone;
	      return cloned;
	    }
	  };
	}

	messages.messages = newMessages();
	return messages;
}

var hasRequiredEs;

function requireEs () {
	if (hasRequiredEs) return es;
	hasRequiredEs = 1;
	(function (exports$1) {

		Object.defineProperty(exports$1, "__esModule", {
		  value: true
		});

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

		var _util = requireUtil();

		var _validator = requireValidator();

		var _validator2 = _interopRequireDefault(_validator);

		var _messages2 = requireMessages();

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

		/**
		 *  Encapsulates a validation schema.
		 *
		 *  @param descriptor An object declaring validation rules
		 *  for this schema.
		 */
		function Schema(descriptor) {
		  this.rules = null;
		  this._messages = _messages2.messages;
		  this.define(descriptor);
		}

		Schema.prototype = {
		  messages: function messages(_messages) {
		    if (_messages) {
		      this._messages = (0, _util.deepMerge)((0, _messages2.newMessages)(), _messages);
		    }
		    return this._messages;
		  },
		  define: function define(rules) {
		    if (!rules) {
		      throw new Error('Cannot configure a schema with no rules');
		    }
		    if ((typeof rules === 'undefined' ? 'undefined' : _typeof(rules)) !== 'object' || Array.isArray(rules)) {
		      throw new Error('Rules must be an object');
		    }
		    this.rules = {};
		    var z = void 0;
		    var item = void 0;
		    for (z in rules) {
		      if (rules.hasOwnProperty(z)) {
		        item = rules[z];
		        this.rules[z] = Array.isArray(item) ? item : [item];
		      }
		    }
		  },
		  validate: function validate(source_) {
		    var _this = this;

		    var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		    var oc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

		    var source = source_;
		    var options = o;
		    var callback = oc;
		    if (typeof options === 'function') {
		      callback = options;
		      options = {};
		    }
		    if (!this.rules || Object.keys(this.rules).length === 0) {
		      if (callback) {
		        callback();
		      }
		      return Promise.resolve();
		    }

		    function complete(results) {
		      var i = void 0;
		      var errors = [];
		      var fields = {};

		      function add(e) {
		        if (Array.isArray(e)) {
		          var _errors;

		          errors = (_errors = errors).concat.apply(_errors, e);
		        } else {
		          errors.push(e);
		        }
		      }

		      for (i = 0; i < results.length; i++) {
		        add(results[i]);
		      }
		      if (!errors.length) {
		        errors = null;
		        fields = null;
		      } else {
		        fields = (0, _util.convertFieldsError)(errors);
		      }
		      callback(errors, fields);
		    }

		    if (options.messages) {
		      var messages = this.messages();
		      if (messages === _messages2.messages) {
		        messages = (0, _messages2.newMessages)();
		      }
		      (0, _util.deepMerge)(messages, options.messages);
		      options.messages = messages;
		    } else {
		      options.messages = this.messages();
		    }
		    var arr = void 0;
		    var value = void 0;
		    var series = {};
		    var keys = options.keys || Object.keys(this.rules);
		    keys.forEach(function (z) {
		      arr = _this.rules[z];
		      value = source[z];
		      arr.forEach(function (r) {
		        var rule = r;
		        if (typeof rule.transform === 'function') {
		          if (source === source_) {
		            source = _extends({}, source);
		          }
		          value = source[z] = rule.transform(value);
		        }
		        if (typeof rule === 'function') {
		          rule = {
		            validator: rule
		          };
		        } else {
		          rule = _extends({}, rule);
		        }
		        rule.validator = _this.getValidationMethod(rule);
		        rule.field = z;
		        rule.fullField = rule.fullField || z;
		        rule.type = _this.getType(rule);
		        if (!rule.validator) {
		          return;
		        }
		        series[z] = series[z] || [];
		        series[z].push({
		          rule: rule,
		          value: value,
		          source: source,
		          field: z
		        });
		      });
		    });
		    return (0, _util.asyncMap)(series, options, function (data, doIt) {
		      var rule = data.rule;
		      var deep = (rule.type === 'object' || rule.type === 'array') && (_typeof(rule.fields) === 'object' || _typeof(rule.defaultField) === 'object');
		      deep = deep && (rule.required || !rule.required && data.value);
		      rule.field = data.field;

		      function addFullfield(key, schema) {
		        return _extends({}, schema, {
		          fullField: rule.fullField + '.' + key
		        });
		      }

		      function cb() {
		        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

		        var errors = e;
		        if (!Array.isArray(errors)) {
		          errors = [errors];
		        }
		        if (!options.suppressWarning && errors.length) {
		          Schema.warning('async-validator:', errors);
		        }
		        if (errors.length && rule.message) {
		          errors = [].concat(rule.message);
		        }

		        errors = errors.map((0, _util.complementError)(rule));

		        if (options.first && errors.length) {
		          return doIt(errors);
		        }
		        if (!deep) {
		          doIt(errors);
		        } else {
		          // if rule is required but the target object
		          // does not exist fail at the rule level and don't
		          // go deeper
		          if (rule.required && !data.value) {
		            if (rule.message) {
		              errors = [].concat(rule.message).map((0, _util.complementError)(rule));
		            } else if (options.error) {
		              errors = [options.error(rule, (0, _util.format)(options.messages.required, rule.field))];
		            } else {
		              errors = [];
		            }
		            return doIt(errors);
		          }

		          var fieldsSchema = {};
		          if (rule.defaultField) {
		            for (var k in data.value) {
		              if (data.value.hasOwnProperty(k)) {
		                fieldsSchema[k] = rule.defaultField;
		              }
		            }
		          }
		          fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
		          for (var f in fieldsSchema) {
		            if (fieldsSchema.hasOwnProperty(f)) {
		              var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
		              fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
		            }
		          }
		          var schema = new Schema(fieldsSchema);
		          schema.messages(options.messages);
		          if (data.rule.options) {
		            data.rule.options.messages = options.messages;
		            data.rule.options.error = options.error;
		          }
		          schema.validate(data.value, data.rule.options || options, function (errs) {
		            var finalErrors = [];
		            if (errors && errors.length) {
		              finalErrors.push.apply(finalErrors, errors);
		            }
		            if (errs && errs.length) {
		              finalErrors.push.apply(finalErrors, errs);
		            }
		            doIt(finalErrors.length ? finalErrors : null);
		          });
		        }
		      }

		      var res = void 0;
		      if (rule.asyncValidator) {
		        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
		      } else if (rule.validator) {
		        res = rule.validator(rule, data.value, cb, data.source, options);
		        if (res === true) {
		          cb();
		        } else if (res === false) {
		          cb(rule.message || rule.field + ' fails');
		        } else if (res instanceof Array) {
		          cb(res);
		        } else if (res instanceof Error) {
		          cb(res.message);
		        }
		      }
		      if (res && res.then) {
		        res.then(function () {
		          return cb();
		        }, function (e) {
		          return cb(e);
		        });
		      }
		    }, function (results) {
		      complete(results);
		    });
		  },
		  getType: function getType(rule) {
		    if (rule.type === undefined && rule.pattern instanceof RegExp) {
		      rule.type = 'pattern';
		    }
		    if (typeof rule.validator !== 'function' && rule.type && !_validator2['default'].hasOwnProperty(rule.type)) {
		      throw new Error((0, _util.format)('Unknown rule type %s', rule.type));
		    }
		    return rule.type || 'string';
		  },
		  getValidationMethod: function getValidationMethod(rule) {
		    if (typeof rule.validator === 'function') {
		      return rule.validator;
		    }
		    var keys = Object.keys(rule);
		    var messageIndex = keys.indexOf('message');
		    if (messageIndex !== -1) {
		      keys.splice(messageIndex, 1);
		    }
		    if (keys.length === 1 && keys[0] === 'required') {
		      return _validator2['default'].required;
		    }
		    return _validator2['default'][this.getType(rule)] || false;
		  }
		};

		Schema.register = function register(type, validator) {
		  if (typeof validator !== 'function') {
		    throw new Error('Cannot register a validator by type, validator is not a function');
		  }
		  _validator2['default'][type] = validator;
		};

		Schema.warning = _util.warning;

		Schema.messages = _messages2.messages;

		exports$1['default'] = Schema; 
	} (es));
	return es;
}

var esExports = requireEs();
var AsyncValidator = /*@__PURE__*/getDefaultExportFromCjs(esExports);

var getExports = requireGet();
var get = /*@__PURE__*/getDefaultExportFromCjs(getExports);

var _baseSet;
var hasRequired_baseSet;

function require_baseSet () {
	if (hasRequired_baseSet) return _baseSet;
	hasRequired_baseSet = 1;
	var assignValue = require_assignValue(),
	    castPath = require_castPath(),
	    isIndex = require_isIndex(),
	    isObject = requireIsObject(),
	    toKey = require_toKey();

	/**
	 * The base implementation of `_.set`.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {Array|string} path The path of the property to set.
	 * @param {*} value The value to set.
	 * @param {Function} [customizer] The function to customize path creation.
	 * @returns {Object} Returns `object`.
	 */
	function baseSet(object, path, value, customizer) {
	  if (!isObject(object)) {
	    return object;
	  }
	  path = castPath(path, object);

	  var index = -1,
	      length = path.length,
	      lastIndex = length - 1,
	      nested = object;

	  while (nested != null && ++index < length) {
	    var key = toKey(path[index]),
	        newValue = value;

	    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
	      return object;
	    }

	    if (index != lastIndex) {
	      var objValue = nested[key];
	      newValue = customizer ? customizer(objValue, key, nested) : undefined;
	      if (newValue === undefined) {
	        newValue = isObject(objValue)
	          ? objValue
	          : (isIndex(path[index + 1]) ? [] : {});
	      }
	    }
	    assignValue(nested, key, newValue);
	    nested = nested[key];
	  }
	  return object;
	}

	_baseSet = baseSet;
	return _baseSet;
}

var set_1;
var hasRequiredSet;

function requireSet () {
	if (hasRequiredSet) return set_1;
	hasRequiredSet = 1;
	var baseSet = require_baseSet();

	/**
	 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
	 * it's created. Arrays are created for missing index properties while objects
	 * are created for all other missing properties. Use `_.setWith` to customize
	 * `path` creation.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to modify.
	 * @param {Array|string} path The path of the property to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.set(object, 'a[0].b.c', 4);
	 * console.log(object.a[0].b.c);
	 * // => 4
	 *
	 * _.set(object, ['x', '0', 'y', 'z'], 5);
	 * console.log(object.x[0].y.z);
	 * // => 5
	 */
	function set(object, path, value) {
	  return object == null ? object : baseSet(object, path, value);
	}

	set_1 = set;
	return set_1;
}

var setExports = requireSet();
var set = /*@__PURE__*/getDefaultExportFromCjs(setExports);

var eqExports = requireEq();
var eq = /*@__PURE__*/getDefaultExportFromCjs(eqExports);

var Field = function Field(fields) {
  _classCallCheck$2(this, Field);

  _extends$2(this, fields);
};

function isFormField(obj) {
  return obj instanceof Field;
}

function createFormField(field) {
  if (isFormField(field)) {
    return field;
  }
  return new Field(field);
}

var hoistNonReactStatics_cjs;
var hasRequiredHoistNonReactStatics_cjs;

function requireHoistNonReactStatics_cjs () {
	if (hasRequiredHoistNonReactStatics_cjs) return hoistNonReactStatics_cjs;
	hasRequiredHoistNonReactStatics_cjs = 1;

	var reactIs = requireReactIs();

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	var REACT_STATICS = {
	  childContextTypes: true,
	  contextType: true,
	  contextTypes: true,
	  defaultProps: true,
	  displayName: true,
	  getDefaultProps: true,
	  getDerivedStateFromError: true,
	  getDerivedStateFromProps: true,
	  mixins: true,
	  propTypes: true,
	  type: true
	};
	var KNOWN_STATICS = {
	  name: true,
	  length: true,
	  prototype: true,
	  caller: true,
	  callee: true,
	  arguments: true,
	  arity: true
	};
	var FORWARD_REF_STATICS = {
	  '$$typeof': true,
	  render: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true
	};
	var MEMO_STATICS = {
	  '$$typeof': true,
	  compare: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true,
	  type: true
	};
	var TYPE_STATICS = {};
	TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
	TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

	function getStatics(component) {
	  // React v16.11 and below
	  if (reactIs.isMemo(component)) {
	    return MEMO_STATICS;
	  } // React v16.12 and above


	  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
	}

	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = Object.prototype;
	function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	  if (typeof sourceComponent !== 'string') {
	    // don't hoist over string (html) components
	    if (objectPrototype) {
	      var inheritedComponent = getPrototypeOf(sourceComponent);

	      if (inheritedComponent && inheritedComponent !== objectPrototype) {
	        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	      }
	    }

	    var keys = getOwnPropertyNames(sourceComponent);

	    if (getOwnPropertySymbols) {
	      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
	    }

	    var targetStatics = getStatics(targetComponent);
	    var sourceStatics = getStatics(sourceComponent);

	    for (var i = 0; i < keys.length; ++i) {
	      var key = keys[i];

	      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
	        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

	        try {
	          // Avoid failures from read-only properties
	          defineProperty(targetComponent, key, descriptor);
	        } catch (e) {}
	      }
	    }
	  }

	  return targetComponent;
	}

	hoistNonReactStatics_cjs = hoistNonReactStatics;
	return hoistNonReactStatics_cjs;
}

var hoistNonReactStatics_cjsExports = requireHoistNonReactStatics_cjs();
var hoistStatics = /*@__PURE__*/getDefaultExportFromCjs(hoistNonReactStatics_cjsExports);

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'WrappedComponent';
}

function argumentContainer(Container, WrappedComponent) {
  /* eslint no-param-reassign:0 */
  Container.displayName = 'Form(' + getDisplayName(WrappedComponent) + ')';
  Container.WrappedComponent = WrappedComponent;
  return hoistStatics(Container, WrappedComponent);
}

function identity(obj) {
  return obj;
}

function flattenArray(arr) {
  return Array.prototype.concat.apply([], arr);
}

function treeTraverse() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var tree = arguments[1];
  var isLeafNode = arguments[2];
  var errorMessage = arguments[3];
  var callback = arguments[4];

  if (isLeafNode(path, tree)) {
    callback(path, tree);
  } else if (tree === undefined || tree === null) ; else if (Array.isArray(tree)) {
    tree.forEach(function (subTree, index) {
      return treeTraverse(path + '[' + index + ']', subTree, isLeafNode, errorMessage, callback);
    });
  } else {
    // It's object and not a leaf node
    if (typeof tree !== 'object') {
      warning(false, errorMessage);
      return;
    }
    Object.keys(tree).forEach(function (subTreeKey) {
      var subTree = tree[subTreeKey];
      treeTraverse('' + path + (path ? '.' : '') + subTreeKey, subTree, isLeafNode, errorMessage, callback);
    });
  }
}

function flattenFields(maybeNestedFields, isLeafNode, errorMessage) {
  var fields = {};
  treeTraverse(undefined, maybeNestedFields, isLeafNode, errorMessage, function (path, node) {
    fields[path] = node;
  });
  return fields;
}

function normalizeValidateRules(validate, rules, validateTrigger) {
  var validateRules = validate.map(function (item) {
    var newItem = _extends$2({}, item, {
      trigger: item.trigger || []
    });
    if (typeof newItem.trigger === 'string') {
      newItem.trigger = [newItem.trigger];
    }
    return newItem;
  });
  if (rules) {
    validateRules.push({
      trigger: validateTrigger ? [].concat(validateTrigger) : [],
      rules: rules
    });
  }
  return validateRules;
}

function getValidateTriggers(validateRules) {
  return validateRules.filter(function (item) {
    return !!item.rules && item.rules.length;
  }).map(function (item) {
    return item.trigger;
  }).reduce(function (pre, curr) {
    return pre.concat(curr);
  }, []);
}

function getValueFromEvent(e) {
  // To support custom element
  if (!e || !e.target) {
    return e;
  }
  var target = e.target;

  return target.type === 'checkbox' ? target.checked : target.value;
}

function getErrorStrs(errors) {
  if (errors) {
    return errors.map(function (e) {
      if (e && e.message) {
        return e.message;
      }
      return e;
    });
  }
  return errors;
}

function getParams(ns, opt, cb) {
  var names = ns;
  var options = opt;
  var callback = cb;
  if (cb === undefined) {
    if (typeof names === 'function') {
      callback = names;
      options = {};
      names = undefined;
    } else if (Array.isArray(names)) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      } else {
        options = options || {};
      }
    } else {
      callback = options;
      options = names || {};
      names = undefined;
    }
  }
  return {
    names: names,
    options: options,
    callback: callback
  };
}

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

function hasRules(validate) {
  if (validate) {
    return validate.some(function (item) {
      return item.rules && item.rules.length;
    });
  }
  return false;
}

function startsWith(str, prefix) {
  return str.lastIndexOf(prefix, 0) === 0;
}

function supportRef(nodeOrComponent) {
  var type = reactIsExports.isMemo(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type;

  // Function component node
  if (typeof type === 'function' && !(type.prototype && type.prototype.render)) {
    return false;
  }

  // Class component
  if (typeof nodeOrComponent === 'function' && !(nodeOrComponent.prototype && nodeOrComponent.prototype.render)) {
    return false;
  }

  return true;
}

function partOf(a, b) {
  return b.indexOf(a) === 0 && ['.', '['].indexOf(b[a.length]) !== -1;
}

function internalFlattenFields(fields) {
  return flattenFields(fields, function (_, node) {
    return isFormField(node);
  }, 'You must wrap field data with `createFormField`.');
}

var FieldsStore = function () {
  function FieldsStore(fields) {
    _classCallCheck$2(this, FieldsStore);

    _initialiseProps.call(this);

    this.fields = internalFlattenFields(fields);
    this.fieldsMeta = {};
  }

  _createClass$2(FieldsStore, [{
    key: 'updateFields',
    value: function updateFields(fields) {
      this.fields = internalFlattenFields(fields);
    }
  }, {
    key: 'flattenRegisteredFields',
    value: function flattenRegisteredFields(fields) {
      var validFieldsName = this.getAllFieldsName();
      return flattenFields(fields, function (path) {
        return validFieldsName.indexOf(path) >= 0;
      }, 'You cannot set a form field before rendering a field associated with the value.');
    }
  }, {
    key: 'setFields',
    value: function setFields(fields) {
      var _this = this;

      var fieldsMeta = this.fieldsMeta;
      var nowFields = _extends$2({}, this.fields, fields);
      var nowValues = {};
      Object.keys(fieldsMeta).forEach(function (f) {
        nowValues[f] = _this.getValueFromFields(f, nowFields);
      });
      Object.keys(nowValues).forEach(function (f) {
        var value = nowValues[f];
        var fieldMeta = _this.getFieldMeta(f);
        if (fieldMeta && fieldMeta.normalize) {
          var nowValue = fieldMeta.normalize(value, _this.getValueFromFields(f, _this.fields), nowValues);
          if (nowValue !== value) {
            nowFields[f] = _extends$2({}, nowFields[f], {
              value: nowValue
            });
          }
        }
      });
      this.fields = nowFields;
    }
  }, {
    key: 'resetFields',
    value: function resetFields(ns) {
      var fields = this.fields;

      var names = ns ? this.getValidFieldsFullName(ns) : this.getAllFieldsName();
      return names.reduce(function (acc, name) {
        var field = fields[name];
        if (field && 'value' in field) {
          acc[name] = {};
        }
        return acc;
      }, {});
    }
  }, {
    key: 'setFieldMeta',
    value: function setFieldMeta(name, meta) {
      this.fieldsMeta[name] = meta;
    }
  }, {
    key: 'setFieldsAsDirty',
    value: function setFieldsAsDirty() {
      var _this2 = this;

      Object.keys(this.fields).forEach(function (name) {
        var field = _this2.fields[name];
        var fieldMeta = _this2.fieldsMeta[name];
        if (field && fieldMeta && hasRules(fieldMeta.validate)) {
          _this2.fields[name] = _extends$2({}, field, {
            dirty: true
          });
        }
      });
    }
  }, {
    key: 'getFieldMeta',
    value: function getFieldMeta(name) {
      this.fieldsMeta[name] = this.fieldsMeta[name] || {};
      return this.fieldsMeta[name];
    }
  }, {
    key: 'getValueFromFields',
    value: function getValueFromFields(name, fields) {
      var field = fields[name];
      if (field && 'value' in field) {
        return field.value;
      }
      var fieldMeta = this.getFieldMeta(name);
      return fieldMeta && fieldMeta.initialValue;
    }
  }, {
    key: 'getValidFieldsName',
    value: function getValidFieldsName() {
      var _this3 = this;

      var fieldsMeta = this.fieldsMeta;

      return fieldsMeta ? Object.keys(fieldsMeta).filter(function (name) {
        return !_this3.getFieldMeta(name).hidden;
      }) : [];
    }
  }, {
    key: 'getAllFieldsName',
    value: function getAllFieldsName() {
      var fieldsMeta = this.fieldsMeta;

      return fieldsMeta ? Object.keys(fieldsMeta) : [];
    }
  }, {
    key: 'getValidFieldsFullName',
    value: function getValidFieldsFullName(maybePartialName) {
      var maybePartialNames = Array.isArray(maybePartialName) ? maybePartialName : [maybePartialName];
      return this.getValidFieldsName().filter(function (fullName) {
        return maybePartialNames.some(function (partialName) {
          return fullName === partialName || startsWith(fullName, partialName) && ['.', '['].indexOf(fullName[partialName.length]) >= 0;
        });
      });
    }
  }, {
    key: 'getFieldValuePropValue',
    value: function getFieldValuePropValue(fieldMeta) {
      var name = fieldMeta.name,
          getValueProps = fieldMeta.getValueProps,
          valuePropName = fieldMeta.valuePropName;

      var field = this.getField(name);
      var fieldValue = 'value' in field ? field.value : fieldMeta.initialValue;
      if (getValueProps) {
        return getValueProps(fieldValue);
      }
      return _defineProperty$2({}, valuePropName, fieldValue);
    }
  }, {
    key: 'getField',
    value: function getField(name) {
      return _extends$2({}, this.fields[name], {
        name: name
      });
    }
  }, {
    key: 'getNotCollectedFields',
    value: function getNotCollectedFields() {
      var _this4 = this;

      var fieldsName = this.getValidFieldsName();
      return fieldsName.filter(function (name) {
        return !_this4.fields[name];
      }).map(function (name) {
        return {
          name: name,
          dirty: false,
          value: _this4.getFieldMeta(name).initialValue
        };
      }).reduce(function (acc, field) {
        return set(acc, field.name, createFormField(field));
      }, {});
    }
  }, {
    key: 'getNestedAllFields',
    value: function getNestedAllFields() {
      var _this5 = this;

      return Object.keys(this.fields).reduce(function (acc, name) {
        return set(acc, name, createFormField(_this5.fields[name]));
      }, this.getNotCollectedFields());
    }
  }, {
    key: 'getFieldMember',
    value: function getFieldMember(name, member) {
      return this.getField(name)[member];
    }
  }, {
    key: 'getNestedFields',
    value: function getNestedFields(names, getter) {
      var fields = names || this.getValidFieldsName();
      return fields.reduce(function (acc, f) {
        return set(acc, f, getter(f));
      }, {});
    }
  }, {
    key: 'getNestedField',
    value: function getNestedField(name, getter) {
      var fullNames = this.getValidFieldsFullName(name);
      if (fullNames.length === 0 || // Not registered
      fullNames.length === 1 && fullNames[0] === name // Name already is full name.
      ) {
          return getter(name);
        }
      var isArrayValue = fullNames[0][name.length] === '[';
      var suffixNameStartIndex = isArrayValue ? name.length : name.length + 1;
      return fullNames.reduce(function (acc, fullName) {
        return set(acc, fullName.slice(suffixNameStartIndex), getter(fullName));
      }, isArrayValue ? [] : {});
    }
  }, {
    key: 'isValidNestedFieldName',


    // @private
    // BG: `a` and `a.b` cannot be use in the same form
    value: function isValidNestedFieldName(name) {
      var names = this.getAllFieldsName();
      return names.every(function (n) {
        return !partOf(n, name) && !partOf(name, n);
      });
    }
  }, {
    key: 'clearField',
    value: function clearField(name) {
      delete this.fields[name];
      delete this.fieldsMeta[name];
    }
  }]);

  return FieldsStore;
}();

var _initialiseProps = function _initialiseProps() {
  var _this6 = this;

  this.setFieldsInitialValue = function (initialValues) {
    var flattenedInitialValues = _this6.flattenRegisteredFields(initialValues);
    var fieldsMeta = _this6.fieldsMeta;
    Object.keys(flattenedInitialValues).forEach(function (name) {
      if (fieldsMeta[name]) {
        _this6.setFieldMeta(name, _extends$2({}, _this6.getFieldMeta(name), {
          initialValue: flattenedInitialValues[name]
        }));
      }
    });
  };

  this.getAllValues = function () {
    var fieldsMeta = _this6.fieldsMeta,
        fields = _this6.fields;

    return Object.keys(fieldsMeta).reduce(function (acc, name) {
      return set(acc, name, _this6.getValueFromFields(name, fields));
    }, {});
  };

  this.getFieldsValue = function (names) {
    return _this6.getNestedFields(names, _this6.getFieldValue);
  };

  this.getFieldValue = function (name) {
    var fields = _this6.fields;

    return _this6.getNestedField(name, function (fullName) {
      return _this6.getValueFromFields(fullName, fields);
    });
  };

  this.getFieldsError = function (names) {
    return _this6.getNestedFields(names, _this6.getFieldError);
  };

  this.getFieldError = function (name) {
    return _this6.getNestedField(name, function (fullName) {
      return getErrorStrs(_this6.getFieldMember(fullName, 'errors'));
    });
  };

  this.isFieldValidating = function (name) {
    return _this6.getFieldMember(name, 'validating');
  };

  this.isFieldsValidating = function (ns) {
    var names = ns || _this6.getValidFieldsName();
    return names.some(function (n) {
      return _this6.isFieldValidating(n);
    });
  };

  this.isFieldTouched = function (name) {
    return _this6.getFieldMember(name, 'touched');
  };

  this.isFieldsTouched = function (ns) {
    var names = ns || _this6.getValidFieldsName();
    return names.some(function (n) {
      return _this6.isFieldTouched(n);
    });
  };
};

function createFieldsStore(fields) {
  return new FieldsStore(fields);
}

var FieldElemWrapper = function (_React$Component) {
  _inherits$2(FieldElemWrapper, _React$Component);

  function FieldElemWrapper() {
    _classCallCheck$2(this, FieldElemWrapper);

    return _possibleConstructorReturn$2(this, (FieldElemWrapper.__proto__ || Object.getPrototypeOf(FieldElemWrapper)).apply(this, arguments));
  }

  _createClass$2(FieldElemWrapper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          name = _props.name,
          form = _props.form;

      form.domFields[name] = true;
      form.recoverClearedField(name);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _props2 = this.props,
          name = _props2.name,
          form = _props2.form;

      var fieldMeta = form.fieldsStore.getFieldMeta(name);
      if (!fieldMeta.preserve) {
        // after destroy, delete data
        form.clearedFieldMetaCache[name] = {
          field: form.fieldsStore.getField(name),
          meta: fieldMeta
        };
        form.clearField(name);
      }
      delete form.domFields[name];
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return FieldElemWrapper;
}(React__default.Component);


FieldElemWrapper.propTypes = {
  name: PropTypes.string,
  form: PropTypes.shape({
    domFields: PropTypes.objectOf(PropTypes.bool),
    recoverClearedField: PropTypes.func,
    fieldsStore: PropTypes.shape({
      getFieldMeta: PropTypes.func,
      getField: PropTypes.func
    }),
    clearedFieldMetaCache: PropTypes.objectOf(PropTypes.shape({
      field: PropTypes.object,
      meta: PropTypes.object
    })),
    clearField: PropTypes.func
  }),
  children: PropTypes.node
};

var DEFAULT_TRIGGER = 'onChange';

function createBaseForm() {
  var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var mixins = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var validateMessages = option.validateMessages,
      onFieldsChange = option.onFieldsChange,
      onValuesChange = option.onValuesChange,
      _option$mapProps = option.mapProps,
      mapProps = _option$mapProps === undefined ? identity : _option$mapProps,
      mapPropsToFields = option.mapPropsToFields,
      fieldNameProp = option.fieldNameProp,
      fieldMetaProp = option.fieldMetaProp,
      fieldDataProp = option.fieldDataProp,
      _option$formPropName = option.formPropName,
      formPropName = _option$formPropName === undefined ? 'form' : _option$formPropName,
      formName = option.name,
      withRef = option.withRef;


  return function decorate(WrappedComponent) {
    var Form = createReactClass({
      displayName: 'Form',

      mixins: mixins,

      getInitialState: function getInitialState() {
        var _this = this;

        var fields = mapPropsToFields && mapPropsToFields(this.props);
        this.fieldsStore = createFieldsStore(fields || {});

        this.instances = {};
        this.cachedBind = {};
        this.clearedFieldMetaCache = {};

        this.renderFields = {};
        this.domFields = {};

        // HACK: https://github.com/ant-design/ant-design/issues/6406
        ['getFieldsValue', 'getFieldValue', 'setFieldsInitialValue', 'getFieldsError', 'getFieldError', 'isFieldValidating', 'isFieldsValidating', 'isFieldsTouched', 'isFieldTouched'].forEach(function (key) {
          _this[key] = function () {
            var _fieldsStore;
            return (_fieldsStore = _this.fieldsStore)[key].apply(_fieldsStore, arguments);
          };
        });

        return {
          submitting: false
        };
      },
      componentDidMount: function componentDidMount() {
        this.cleanUpUselessFields();
      },
      componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        if (mapPropsToFields) {
          this.fieldsStore.updateFields(mapPropsToFields(nextProps));
        }
      },
      componentDidUpdate: function componentDidUpdate() {
        this.cleanUpUselessFields();
      },
      onCollectCommon: function onCollectCommon(name, action, args) {
        var fieldMeta = this.fieldsStore.getFieldMeta(name);
        if (fieldMeta[action]) {
          fieldMeta[action].apply(fieldMeta, _toConsumableArray$1(args));
        } else if (fieldMeta.originalProps && fieldMeta.originalProps[action]) {
          var _fieldMeta$originalPr;

          (_fieldMeta$originalPr = fieldMeta.originalProps)[action].apply(_fieldMeta$originalPr, _toConsumableArray$1(args));
        }
        var value = fieldMeta.getValueFromEvent ? fieldMeta.getValueFromEvent.apply(fieldMeta, _toConsumableArray$1(args)) : getValueFromEvent.apply(undefined, _toConsumableArray$1(args));
        if (onValuesChange && value !== this.fieldsStore.getFieldValue(name)) {
          var valuesAll = this.fieldsStore.getAllValues();
          var valuesAllSet = {};
          valuesAll[name] = value;
          Object.keys(valuesAll).forEach(function (key) {
            return set(valuesAllSet, key, valuesAll[key]);
          });
          onValuesChange(_extends$2(_defineProperty$2({}, formPropName, this.getForm()), this.props), set({}, name, value), valuesAllSet);
        }
        var field = this.fieldsStore.getField(name);
        return { name: name, field: _extends$2({}, field, { value: value, touched: true }), fieldMeta: fieldMeta };
      },
      onCollect: function onCollect(name_, action) {
        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }

        var _onCollectCommon = this.onCollectCommon(name_, action, args),
            name = _onCollectCommon.name,
            field = _onCollectCommon.field,
            fieldMeta = _onCollectCommon.fieldMeta;

        var validate = fieldMeta.validate;


        this.fieldsStore.setFieldsAsDirty();

        var newField = _extends$2({}, field, {
          dirty: hasRules(validate)
        });
        this.setFields(_defineProperty$2({}, name, newField));
      },
      onCollectValidate: function onCollectValidate(name_, action) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        var _onCollectCommon2 = this.onCollectCommon(name_, action, args),
            field = _onCollectCommon2.field,
            fieldMeta = _onCollectCommon2.fieldMeta;

        var newField = _extends$2({}, field, {
          dirty: true
        });

        this.fieldsStore.setFieldsAsDirty();

        this.validateFieldsInternal([newField], {
          action: action,
          options: {
            firstFields: !!fieldMeta.validateFirst
          }
        });
      },
      getCacheBind: function getCacheBind(name, action, fn) {
        if (!this.cachedBind[name]) {
          this.cachedBind[name] = {};
        }
        var cache = this.cachedBind[name];
        if (!cache[action] || cache[action].oriFn !== fn) {
          cache[action] = {
            fn: fn.bind(this, name, action),
            oriFn: fn
          };
        }
        return cache[action].fn;
      },
      getFieldDecorator: function getFieldDecorator(name, fieldOption) {
        var _this2 = this;

        var props = this.getFieldProps(name, fieldOption);
        return function (fieldElem) {
          // We should put field in record if it is rendered
          _this2.renderFields[name] = true;

          var fieldMeta = _this2.fieldsStore.getFieldMeta(name);
          var originalProps = fieldElem.props;
          fieldMeta.originalProps = originalProps;
          fieldMeta.ref = fieldElem.ref;
          var decoratedFieldElem = React__default.cloneElement(fieldElem, _extends$2({}, props, _this2.fieldsStore.getFieldValuePropValue(fieldMeta)));
          return supportRef(fieldElem) ? decoratedFieldElem : React__default.createElement(
            FieldElemWrapper,
            { name: name, form: _this2 },
            decoratedFieldElem
          );
        };
      },
      getFieldProps: function getFieldProps(name) {
        var _this3 = this;

        var usersFieldOption = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (!name) {
          throw new Error('Must call `getFieldProps` with valid name string!');
        }

        delete this.clearedFieldMetaCache[name];

        var fieldOption = _extends$2({
          name: name,
          trigger: DEFAULT_TRIGGER,
          valuePropName: 'value',
          validate: []
        }, usersFieldOption);

        var rules = fieldOption.rules,
            trigger = fieldOption.trigger,
            _fieldOption$validate = fieldOption.validateTrigger,
            validateTrigger = _fieldOption$validate === undefined ? trigger : _fieldOption$validate,
            validate = fieldOption.validate;


        var fieldMeta = this.fieldsStore.getFieldMeta(name);
        if ('initialValue' in fieldOption) {
          fieldMeta.initialValue = fieldOption.initialValue;
        }

        var inputProps = _extends$2({}, this.fieldsStore.getFieldValuePropValue(fieldOption), {
          ref: this.getCacheBind(name, name + '__ref', this.saveRef)
        });
        if (fieldNameProp) {
          inputProps[fieldNameProp] = formName ? formName + '_' + name : name;
        }

        var validateRules = normalizeValidateRules(validate, rules, validateTrigger);
        var validateTriggers = getValidateTriggers(validateRules);
        validateTriggers.forEach(function (action) {
          if (inputProps[action]) return;
          inputProps[action] = _this3.getCacheBind(name, action, _this3.onCollectValidate);
        });

        // make sure that the value will be collect
        if (trigger && validateTriggers.indexOf(trigger) === -1) {
          inputProps[trigger] = this.getCacheBind(name, trigger, this.onCollect);
        }

        var meta = _extends$2({}, fieldMeta, fieldOption, {
          validate: validateRules
        });
        this.fieldsStore.setFieldMeta(name, meta);
        if (fieldMetaProp) {
          inputProps[fieldMetaProp] = meta;
        }

        if (fieldDataProp) {
          inputProps[fieldDataProp] = this.fieldsStore.getField(name);
        }

        // This field is rendered, record it
        this.renderFields[name] = true;

        return inputProps;
      },
      getFieldInstance: function getFieldInstance(name) {
        return this.instances[name];
      },
      getRules: function getRules(fieldMeta, action) {
        var actionRules = fieldMeta.validate.filter(function (item) {
          return !action || item.trigger.indexOf(action) >= 0;
        }).map(function (item) {
          return item.rules;
        });
        return flattenArray(actionRules);
      },
      setFields: function setFields(maybeNestedFields, callback) {
        var _this4 = this;

        var fields = this.fieldsStore.flattenRegisteredFields(maybeNestedFields);
        this.fieldsStore.setFields(fields);
        if (onFieldsChange) {
          var changedFields = Object.keys(fields).reduce(function (acc, name) {
            return set(acc, name, _this4.fieldsStore.getField(name));
          }, {});
          onFieldsChange(_extends$2(_defineProperty$2({}, formPropName, this.getForm()), this.props), changedFields, this.fieldsStore.getNestedAllFields());
        }
        this.forceUpdate(callback);
      },
      setFieldsValue: function setFieldsValue(changedValues, callback) {
        var fieldsMeta = this.fieldsStore.fieldsMeta;

        var values = this.fieldsStore.flattenRegisteredFields(changedValues);
        var newFields = Object.keys(values).reduce(function (acc, name) {
          var isRegistered = fieldsMeta[name];
          if (isRegistered) {
            var value = values[name];
            acc[name] = {
              value: value
            };
          }
          return acc;
        }, {});
        this.setFields(newFields, callback);
        if (onValuesChange) {
          var allValues = this.fieldsStore.getAllValues();
          onValuesChange(_extends$2(_defineProperty$2({}, formPropName, this.getForm()), this.props), changedValues, allValues);
        }
      },
      saveRef: function saveRef(name, _, component) {
        if (!component) {
          var _fieldMeta = this.fieldsStore.getFieldMeta(name);
          if (!_fieldMeta.preserve) {
            // after destroy, delete data
            this.clearedFieldMetaCache[name] = {
              field: this.fieldsStore.getField(name),
              meta: _fieldMeta
            };
            this.clearField(name);
          }
          delete this.domFields[name];
          return;
        }
        this.domFields[name] = true;
        this.recoverClearedField(name);
        var fieldMeta = this.fieldsStore.getFieldMeta(name);
        if (fieldMeta) {
          var ref = fieldMeta.ref;
          if (ref) {
            if (typeof ref === 'string') {
              throw new Error('can not set ref string for ' + name);
            } else if (typeof ref === 'function') {
              ref(component);
            } else if (Object.prototype.hasOwnProperty.call(ref, 'current')) {
              ref.current = component;
            }
          }
        }
        this.instances[name] = component;
      },
      cleanUpUselessFields: function cleanUpUselessFields() {
        var _this5 = this;

        var fieldList = this.fieldsStore.getAllFieldsName();
        var removedList = fieldList.filter(function (field) {
          var fieldMeta = _this5.fieldsStore.getFieldMeta(field);
          return !_this5.renderFields[field] && !_this5.domFields[field] && !fieldMeta.preserve;
        });
        if (removedList.length) {
          removedList.forEach(this.clearField);
        }
        this.renderFields = {};
      },
      clearField: function clearField(name) {
        this.fieldsStore.clearField(name);
        delete this.instances[name];
        delete this.cachedBind[name];
      },
      resetFields: function resetFields(ns) {
        var _this6 = this;

        var newFields = this.fieldsStore.resetFields(ns);
        if (Object.keys(newFields).length > 0) {
          this.setFields(newFields);
        }
        if (ns) {
          var names = Array.isArray(ns) ? ns : [ns];
          names.forEach(function (name) {
            return delete _this6.clearedFieldMetaCache[name];
          });
        } else {
          this.clearedFieldMetaCache = {};
        }
      },
      recoverClearedField: function recoverClearedField(name) {
        if (this.clearedFieldMetaCache[name]) {
          this.fieldsStore.setFields(_defineProperty$2({}, name, this.clearedFieldMetaCache[name].field));
          this.fieldsStore.setFieldMeta(name, this.clearedFieldMetaCache[name].meta);
          delete this.clearedFieldMetaCache[name];
        }
      },
      validateFieldsInternal: function validateFieldsInternal(fields, _ref, callback) {
        var _this7 = this;

        var fieldNames = _ref.fieldNames,
            action = _ref.action,
            _ref$options = _ref.options,
            options = _ref$options === undefined ? {} : _ref$options;

        var allRules = {};
        var allValues = {};
        var allFields = {};
        var alreadyErrors = {};
        fields.forEach(function (field) {
          var name = field.name;
          if (options.force !== true && field.dirty === false) {
            if (field.errors) {
              set(alreadyErrors, name, { errors: field.errors });
            }
            return;
          }
          var fieldMeta = _this7.fieldsStore.getFieldMeta(name);
          var newField = _extends$2({}, field);
          newField.errors = undefined;
          newField.validating = true;
          newField.dirty = true;
          allRules[name] = _this7.getRules(fieldMeta, action);
          allValues[name] = newField.value;
          allFields[name] = newField;
        });
        this.setFields(allFields);
        // in case normalize
        Object.keys(allValues).forEach(function (f) {
          allValues[f] = _this7.fieldsStore.getFieldValue(f);
        });
        if (callback && isEmptyObject(allFields)) {
          callback(isEmptyObject(alreadyErrors) ? null : alreadyErrors, this.fieldsStore.getFieldsValue(fieldNames));
          return;
        }
        var validator = new AsyncValidator(allRules);
        if (validateMessages) {
          validator.messages(validateMessages);
        }
        validator.validate(allValues, options, function (errors) {
          var errorsGroup = _extends$2({}, alreadyErrors);
          if (errors && errors.length) {
            errors.forEach(function (e) {
              var errorFieldName = e.field;
              var fieldName = errorFieldName;

              // Handle using array validation rule.
              // ref: https://github.com/ant-design/ant-design/issues/14275
              Object.keys(allRules).some(function (ruleFieldName) {
                var rules = allRules[ruleFieldName] || [];

                // Exist if match rule
                if (ruleFieldName === errorFieldName) {
                  fieldName = ruleFieldName;
                  return true;
                }

                // Skip if not match array type
                if (rules.every(function (_ref2) {
                  var type = _ref2.type;
                  return type !== 'array';
                }) || errorFieldName.indexOf(ruleFieldName + '.') !== 0) {
                  return false;
                }

                // Exist if match the field name
                var restPath = errorFieldName.slice(ruleFieldName.length + 1);
                if (/^\d+$/.test(restPath)) {
                  fieldName = ruleFieldName;
                  return true;
                }

                return false;
              });

              var field = get(errorsGroup, fieldName);
              if (typeof field !== 'object' || Array.isArray(field)) {
                set(errorsGroup, fieldName, { errors: [] });
              }
              var fieldErrors = get(errorsGroup, fieldName.concat('.errors'));
              fieldErrors.push(e);
            });
          }
          var expired = [];
          var nowAllFields = {};
          Object.keys(allRules).forEach(function (name) {
            var fieldErrors = get(errorsGroup, name);
            var nowField = _this7.fieldsStore.getField(name);
            // avoid concurrency problems
            if (!eq(nowField.value, allValues[name])) {
              expired.push({
                name: name
              });
            } else {
              nowField.errors = fieldErrors && fieldErrors.errors;
              nowField.value = allValues[name];
              nowField.validating = false;
              nowField.dirty = false;
              nowAllFields[name] = nowField;
            }
          });
          _this7.setFields(nowAllFields);
          if (callback) {
            if (expired.length) {
              expired.forEach(function (_ref3) {
                var name = _ref3.name;

                var fieldErrors = [{
                  message: name + ' need to revalidate',
                  field: name
                }];
                set(errorsGroup, name, {
                  expired: true,
                  errors: fieldErrors
                });
              });
            }

            callback(isEmptyObject(errorsGroup) ? null : errorsGroup, _this7.fieldsStore.getFieldsValue(fieldNames));
          }
        });
      },
      validateFields: function validateFields(ns, opt, cb) {
        var _this8 = this;

        var pending = new Promise(function (resolve, reject) {
          var _getParams = getParams(ns, opt, cb),
              names = _getParams.names,
              options = _getParams.options;

          var _getParams2 = getParams(ns, opt, cb),
              callback = _getParams2.callback;

          if (!callback || typeof callback === 'function') {
            var oldCb = callback;
            callback = function callback(errors, values) {
              if (oldCb) {
                oldCb(errors, values);
              }
              if (errors) {
                reject({ errors: errors, values: values });
              } else {
                resolve(values);
              }
            };
          }
          var fieldNames = names ? _this8.fieldsStore.getValidFieldsFullName(names) : _this8.fieldsStore.getValidFieldsName();
          var fields = fieldNames.filter(function (name) {
            var fieldMeta = _this8.fieldsStore.getFieldMeta(name);
            return hasRules(fieldMeta.validate);
          }).map(function (name) {
            var field = _this8.fieldsStore.getField(name);
            field.value = _this8.fieldsStore.getFieldValue(name);
            return field;
          });
          if (!fields.length) {
            callback(null, _this8.fieldsStore.getFieldsValue(fieldNames));
            return;
          }
          if (!('firstFields' in options)) {
            options.firstFields = fieldNames.filter(function (name) {
              var fieldMeta = _this8.fieldsStore.getFieldMeta(name);
              return !!fieldMeta.validateFirst;
            });
          }
          _this8.validateFieldsInternal(fields, {
            fieldNames: fieldNames,
            options: options
          }, callback);
        });
        pending['catch'](function (e) {
          return e;
        });
        return pending;
      },
      isSubmitting: function isSubmitting() {
        return this.state.submitting;
      },
      submit: function submit(callback) {
        var _this9 = this;
        var fn = function fn() {
          _this9.setState({
            submitting: false
          });
        };
        this.setState({
          submitting: true
        });
        callback(fn);
      },
      render: function render() {
        var _props = this.props,
            wrappedComponentRef = _props.wrappedComponentRef,
            restProps = _objectWithoutProperties(_props, ['wrappedComponentRef']); // eslint-disable-line


        var formProps = _defineProperty$2({}, formPropName, this.getForm());
        if (withRef) {
          formProps.ref = 'wrappedComponent';
        } else if (wrappedComponentRef) {
          formProps.ref = wrappedComponentRef;
        }
        var props = mapProps.call(this, _extends$2({}, formProps, restProps));
        return React__default.createElement(WrappedComponent, props);
      }
    });

    return argumentContainer(unsafeLifecyclesPolyfill(Form), WrappedComponent);
  };
}

var mixin$1 = {
  getForm: function getForm() {
    return {
      getFieldsValue: this.fieldsStore.getFieldsValue,
      getFieldValue: this.fieldsStore.getFieldValue,
      getFieldInstance: this.getFieldInstance,
      setFieldsValue: this.setFieldsValue,
      setFields: this.setFields,
      setFieldsInitialValue: this.fieldsStore.setFieldsInitialValue,
      getFieldDecorator: this.getFieldDecorator,
      getFieldProps: this.getFieldProps,
      getFieldsError: this.fieldsStore.getFieldsError,
      getFieldError: this.fieldsStore.getFieldError,
      isFieldValidating: this.fieldsStore.isFieldValidating,
      isFieldsValidating: this.fieldsStore.isFieldsValidating,
      isFieldsTouched: this.fieldsStore.isFieldsTouched,
      isFieldTouched: this.fieldsStore.isFieldTouched,
      isSubmitting: this.isSubmitting,
      submit: this.submit,
      validateFields: this.validateFields,
      resetFields: this.resetFields
    };
  }
};

function computedStyle(el, prop) {
  var getComputedStyle = window.getComputedStyle;
  var style =
  // If we have getComputedStyle
  getComputedStyle ?
  // Query it
  // TODO: From CSS-Query notes, we might need (node, null) for FF
  getComputedStyle(el) :

  // Otherwise, we are in IE and use currentStyle
  el.currentStyle;
  if (style) {
    return style[
    // Switch to camelCase for CSSOM
    // DEV: Grabbed from jQuery
    // https://github.com/jquery/jquery/blob/1.9-stable/src/css.js#L191-L194
    // https://github.com/jquery/jquery/blob/1.9-stable/src/core.js#L593-L597
    prop.replace(/-(\w)/gi, function (word, letter) {
      return letter.toUpperCase();
    })];
  }
  return undefined;
}

function getScrollableContainer(n) {
  var node = n;
  var nodeName = void 0;
  /* eslint no-cond-assign:0 */
  while ((nodeName = node.nodeName.toLowerCase()) !== 'body') {
    var overflowY = computedStyle(node, 'overflowY');
    // https://stackoverflow.com/a/36900407/3040605
    if (node !== n && (overflowY === 'auto' || overflowY === 'scroll') && node.scrollHeight > node.clientHeight) {
      return node;
    }
    node = node.parentNode;
  }
  return nodeName === 'body' ? node.ownerDocument : node;
}

var mixin = {
  getForm: function getForm() {
    return _extends$2({}, mixin$1.getForm.call(this), {
      validateFieldsAndScroll: this.validateFieldsAndScroll
    });
  },
  validateFieldsAndScroll: function validateFieldsAndScroll(ns, opt, cb) {
    var _this = this;

    var _getParams = getParams(ns, opt, cb),
        names = _getParams.names,
        callback = _getParams.callback,
        options = _getParams.options;

    var newCb = function newCb(error, values) {
      if (error) {
        var validNames = _this.fieldsStore.getValidFieldsName();
        var firstNode = void 0;
        var firstTop = void 0;

        validNames.forEach(function (name) {
          if (has(error, name)) {
            var instance = _this.getFieldInstance(name);
            if (instance) {
              var node = ReactDOM__default.findDOMNode(instance);
              var top = node.getBoundingClientRect().top;
              if (node.type !== 'hidden' && (firstTop === undefined || firstTop > top)) {
                firstTop = top;
                firstNode = node;
              }
            }
          }
        });

        if (firstNode) {
          var c = options.container || getScrollableContainer(firstNode);
          scrollIntoView(firstNode, c, _extends$2({
            onlyScrollIfNeeded: true
          }, options.scroll));
        }
      }

      if (typeof callback === 'function') {
        callback(error, values);
      }
    };

    return this.validateFields(names, options, newCb);
  }
};

function createDOMForm(option) {
  return createBaseForm(_extends$2({}, option), [mixin]);
}

var FIELD_META_PROP = 'data-__meta';
var FIELD_DATA_PROP = 'data-__field';

var FormContext = createReactContext({
  labelAlign: 'right',
  vertical: false
});

function _typeof$1(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
var ValidateStatuses = tuple('success', 'warning', 'error', 'validating', '');
tuple('left', 'right');

function intersperseSpace(list) {
  return list.reduce(function (current, item) {
    return [].concat(_toConsumableArray(current), [' ', item]);
  }, []).slice(1);
}

var FormItem = /*#__PURE__*/function (_React$Component) {
  _inherits$1(FormItem, _React$Component);

  var _super = _createSuper$1(FormItem);

  function FormItem() {
    var _this;

    _classCallCheck$1(this, FormItem);

    _this = _super.apply(this, arguments);
    _this.helpShow = false; // Resolve duplicated ids bug between different forms
    // https://github.com/ant-design/ant-design/issues/7351

    _this.onLabelClick = function () {
      var id = _this.props.id || _this.getId();

      if (!id) {
        return;
      }

      var formItemNode = ReactDOM.findDOMNode(_assertThisInitialized$1(_this));
      var control = formItemNode.querySelector("[id=\"".concat(id, "\"]"));

      if (control && control.focus) {
        control.focus();
      }
    };

    _this.onHelpAnimEnd = function (_key, helpShow) {
      _this.helpShow = helpShow;

      if (!helpShow) {
        _this.setState({});
      }
    };

    _this.renderFormItem = function (_ref) {
      var _itemClassName;

      var getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          style = _a.style,
          className = _a.className,
          restProps = __rest(_a, ["prefixCls", "style", "className"]);

      var prefixCls = getPrefixCls('form', customizePrefixCls);

      var children = _this.renderChildren(prefixCls);

      var itemClassName = (_itemClassName = {}, _defineProperty$1(_itemClassName, "".concat(prefixCls, "-item"), true), _defineProperty$1(_itemClassName, "".concat(prefixCls, "-item-with-help"), _this.helpShow), _defineProperty$1(_itemClassName, "".concat(className), !!className), _itemClassName);
      return /*#__PURE__*/React.createElement(Row, _extends$1({
        className: classNames(itemClassName),
        style: style
      }, omit(restProps, ['id', 'htmlFor', 'label', 'labelAlign', 'labelCol', 'wrapperCol', 'help', 'extra', 'validateStatus', 'hasFeedback', 'required', 'colon']), {
        key: "row"
      }), children);
    };

    return _this;
  }

  _createClass$1(FormItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          children = _this$props.children,
          help = _this$props.help,
          validateStatus = _this$props.validateStatus;
      warning$1(this.getControls(children, true).length <= 1 || help !== undefined || validateStatus !== undefined);
    }
  }, {
    key: "getHelpMessage",
    value: function getHelpMessage() {
      var help = this.props.help;

      if (help === undefined && this.getOnlyControl()) {
        var _this$getField = this.getField(),
            errors = _this$getField.errors;

        if (errors) {
          return intersperseSpace(errors.map(function (e, index) {
            var node = null;

            if ( /*#__PURE__*/React.isValidElement(e)) {
              node = e;
            } else if ( /*#__PURE__*/React.isValidElement(e.message)) {
              node = e.message;
            } // eslint-disable-next-line react/no-array-index-key


            return node ? /*#__PURE__*/React.cloneElement(node, {
              key: index
            }) : e.message;
          }));
        }

        return '';
      }

      return help;
    }
  }, {
    key: "getControls",
    value: function getControls(children, recursively) {
      var controls = [];
      var childrenArray = React.Children.toArray(children);

      for (var i = 0; i < childrenArray.length; i++) {
        if (!recursively && controls.length > 0) {
          break;
        }

        var child = childrenArray[i];

        if (child.type && (child.type === FormItem || child.type.displayName === 'FormItem')) {
          continue;
        }

        if (!child.props) {
          continue;
        }

        if (FIELD_META_PROP in child.props) {
          // And means FIELD_DATA_PROP in child.props, too.
          controls.push(child);
        } else if (child.props.children) {
          controls = controls.concat(this.getControls(child.props.children, recursively));
        }
      }

      return controls;
    }
  }, {
    key: "getOnlyControl",
    value: function getOnlyControl() {
      var child = this.getControls(this.props.children, false)[0];
      return child !== undefined ? child : null;
    }
  }, {
    key: "getChildProp",
    value: function getChildProp(prop) {
      var child = this.getOnlyControl();
      return child && child.props && child.props[prop];
    }
  }, {
    key: "getId",
    value: function getId() {
      return this.getChildProp('id');
    }
  }, {
    key: "getMeta",
    value: function getMeta() {
      return this.getChildProp(FIELD_META_PROP);
    }
  }, {
    key: "getField",
    value: function getField() {
      return this.getChildProp(FIELD_DATA_PROP);
    }
  }, {
    key: "getValidateStatus",
    value: function getValidateStatus() {
      var onlyControl = this.getOnlyControl();

      if (!onlyControl) {
        return '';
      }

      var field = this.getField();

      if (field.validating) {
        return 'validating';
      }

      if (field.errors) {
        return 'error';
      }

      var fieldValue = 'value' in field ? field.value : this.getMeta().initialValue;

      if (fieldValue !== undefined && fieldValue !== null && fieldValue !== '') {
        return 'success';
      }

      return '';
    }
  }, {
    key: "isRequired",
    value: function isRequired() {
      var required = this.props.required;

      if (required !== undefined) {
        return required;
      }

      if (this.getOnlyControl()) {
        var meta = this.getMeta() || {};
        var validate = meta.validate || [];
        return validate.filter(function (item) {
          return !!item.rules;
        }).some(function (item) {
          return item.rules.some(function (rule) {
            return rule.required;
          });
        });
      }

      return false;
    }
  }, {
    key: "renderHelp",
    value: function renderHelp(prefixCls) {
      var help = this.getHelpMessage();
      var children = help ? /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-explain"),
        key: "help"
      }, help) : null;

      if (children) {
        this.helpShow = !!children;
      }

      return /*#__PURE__*/React.createElement(Animate, {
        transitionName: "show-help",
        component: "",
        transitionAppear: true,
        key: "help",
        onEnd: this.onHelpAnimEnd
      }, children);
    }
  }, {
    key: "renderExtra",
    value: function renderExtra(prefixCls) {
      var extra = this.props.extra;
      return extra ? /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-extra")
      }, extra) : null;
    }
  }, {
    key: "renderValidateWrapper",
    value: function renderValidateWrapper(prefixCls, c1, c2, c3) {
      var props = this.props;
      var onlyControl = this.getOnlyControl;
      var validateStatus = props.validateStatus === undefined && onlyControl ? this.getValidateStatus() : props.validateStatus;
      var classes = "".concat(prefixCls, "-item-control");

      if (validateStatus) {
        classes = classNames("".concat(prefixCls, "-item-control"), {
          'has-feedback': validateStatus && props.hasFeedback,
          'has-success': validateStatus === 'success',
          'has-warning': validateStatus === 'warning',
          'has-error': validateStatus === 'error',
          'is-validating': validateStatus === 'validating'
        });
      }

      var iconType = '';

      switch (validateStatus) {
        case 'success':
          iconType = 'check-circle';
          break;

        case 'warning':
          iconType = 'exclamation-circle';
          break;

        case 'error':
          iconType = 'close-circle';
          break;

        case 'validating':
          iconType = 'loading';
          break;

        default:
          iconType = '';
          break;
      }

      var icon = props.hasFeedback && iconType ? /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-item-children-icon")
      }, /*#__PURE__*/React.createElement(Icon, {
        type: iconType,
        theme: iconType === 'loading' ? 'outlined' : 'filled'
      })) : null;
      return /*#__PURE__*/React.createElement("div", {
        className: classes
      }, /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-item-children")
      }, c1, icon), c2, c3);
    }
  }, {
    key: "renderWrapper",
    value: function renderWrapper(prefixCls, children) {
      var _this2 = this;

      return /*#__PURE__*/React.createElement(FormContext.Consumer, {
        key: "wrapper"
      }, function (_ref2) {
        var contextWrapperCol = _ref2.wrapperCol,
            vertical = _ref2.vertical;
        var wrapperCol = _this2.props.wrapperCol;
        var mergedWrapperCol = ('wrapperCol' in _this2.props ? wrapperCol : contextWrapperCol) || {};
        var className = classNames("".concat(prefixCls, "-item-control-wrapper"), mergedWrapperCol.className); // No pass FormContext since it's useless

        return /*#__PURE__*/React.createElement(FormContext.Provider, {
          value: {
            vertical: vertical
          }
        }, /*#__PURE__*/React.createElement(Col, _extends$1({}, mergedWrapperCol, {
          className: className
        }), children));
      });
    }
  }, {
    key: "renderLabel",
    value: function renderLabel(prefixCls) {
      var _this3 = this;

      return /*#__PURE__*/React.createElement(FormContext.Consumer, {
        key: "label"
      }, function (_ref3) {
        var _classNames;

        var vertical = _ref3.vertical,
            contextLabelAlign = _ref3.labelAlign,
            contextLabelCol = _ref3.labelCol,
            contextColon = _ref3.colon;
        var _this3$props = _this3.props,
            label = _this3$props.label,
            labelCol = _this3$props.labelCol,
            labelAlign = _this3$props.labelAlign,
            colon = _this3$props.colon,
            id = _this3$props.id,
            htmlFor = _this3$props.htmlFor;

        var required = _this3.isRequired();

        var mergedLabelCol = ('labelCol' in _this3.props ? labelCol : contextLabelCol) || {};
        var mergedLabelAlign = 'labelAlign' in _this3.props ? labelAlign : contextLabelAlign;
        var labelClsBasic = "".concat(prefixCls, "-item-label");
        var labelColClassName = classNames(labelClsBasic, mergedLabelAlign === 'left' && "".concat(labelClsBasic, "-left"), mergedLabelCol.className);
        var labelChildren = label; // Keep label is original where there should have no colon

        var computedColon = colon === true || contextColon !== false && colon !== false;
        var haveColon = computedColon && !vertical; // Remove duplicated user input colon

        if (haveColon && typeof label === 'string' && label.trim() !== '') {
          labelChildren = label.replace(/[：:]\s*$/, '');
        }

        var labelClassName = classNames((_classNames = {}, _defineProperty$1(_classNames, "".concat(prefixCls, "-item-required"), required), _defineProperty$1(_classNames, "".concat(prefixCls, "-item-no-colon"), !computedColon), _classNames));
        return label ? /*#__PURE__*/React.createElement(Col, _extends$1({}, mergedLabelCol, {
          className: labelColClassName
        }), /*#__PURE__*/React.createElement("label", {
          htmlFor: htmlFor || id || _this3.getId(),
          className: labelClassName,
          title: typeof label === 'string' ? label : '',
          onClick: _this3.onLabelClick
        }, labelChildren)) : null;
      });
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(prefixCls) {
      var children = this.props.children;
      return [this.renderLabel(prefixCls), this.renderWrapper(prefixCls, this.renderValidateWrapper(prefixCls, children, this.renderHelp(prefixCls), this.renderExtra(prefixCls)))];
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderFormItem);
    }
  }]);

  return FormItem;
}(React.Component);
FormItem.defaultProps = {
  hasFeedback: false
};
FormItem.propTypes = {
  prefixCls: propTypesExports.string,
  label: propTypesExports.oneOfType([propTypesExports.string, propTypesExports.node]),
  labelCol: propTypesExports.object,
  help: propTypesExports.oneOfType([propTypesExports.node, propTypesExports.bool]),
  validateStatus: propTypesExports.oneOf(ValidateStatuses),
  hasFeedback: propTypesExports.bool,
  wrapperCol: propTypesExports.object,
  className: propTypesExports.string,
  id: propTypesExports.string,
  children: propTypesExports.node,
  colon: propTypesExports.bool
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
var FormLayouts = tuple('horizontal', 'inline', 'vertical');

var Form = /*#__PURE__*/function (_React$Component) {
  _inherits(Form, _React$Component);

  var _super = _createSuper(Form);

  function Form(props) {
    var _this;

    _classCallCheck(this, Form);

    _this = _super.call(this, props);

    _this.renderForm = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls;
      var _this$props = _this.props,
          customizePrefixCls = _this$props.prefixCls,
          hideRequiredMark = _this$props.hideRequiredMark,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? '' : _this$props$className,
          layout = _this$props.layout;
      var prefixCls = getPrefixCls('form', customizePrefixCls);
      var formClassName = classNames(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-horizontal"), layout === 'horizontal'), _defineProperty(_classNames, "".concat(prefixCls, "-vertical"), layout === 'vertical'), _defineProperty(_classNames, "".concat(prefixCls, "-inline"), layout === 'inline'), _defineProperty(_classNames, "".concat(prefixCls, "-hide-required-mark"), hideRequiredMark), _classNames), className);
      var formProps = omit(_this.props, ['prefixCls', 'className', 'layout', 'form', 'hideRequiredMark', 'wrapperCol', 'labelAlign', 'labelCol', 'colon']);
      return /*#__PURE__*/React.createElement("form", _extends({}, formProps, {
        className: formClassName
      }));
    };
    return _this;
  }

  _createClass(Form, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          wrapperCol = _this$props2.wrapperCol,
          labelAlign = _this$props2.labelAlign,
          labelCol = _this$props2.labelCol,
          layout = _this$props2.layout,
          colon = _this$props2.colon;
      return /*#__PURE__*/React.createElement(FormContext.Provider, {
        value: {
          wrapperCol: wrapperCol,
          labelAlign: labelAlign,
          labelCol: labelCol,
          vertical: layout === 'vertical',
          colon: colon
        }
      }, /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderForm));
    }
  }]);

  return Form;
}(React.Component);
Form.defaultProps = {
  colon: true,
  layout: 'horizontal',
  hideRequiredMark: false,
  onSubmit: function onSubmit(e) {
    e.preventDefault();
  }
};
Form.propTypes = {
  prefixCls: propTypesExports.string,
  layout: propTypesExports.oneOf(FormLayouts),
  children: propTypesExports.any,
  onSubmit: propTypesExports.func,
  hideRequiredMark: propTypesExports.bool,
  colon: propTypesExports.bool
};
Form.Item = FormItem;
Form.createFormField = createFormField;

Form.create = function create() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return createDOMForm(_extends(_extends({
    fieldNameProp: 'id'
  }, options), {
    fieldMetaProp: FIELD_META_PROP,
    fieldDataProp: FIELD_DATA_PROP
  }));
};

export { Form as default };
