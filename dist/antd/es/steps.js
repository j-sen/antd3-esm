import { n, c as classNames, P as PropTypes, C as ConfigConsumer, p as propTypesExports } from '../../config-provider.js';
import * as React from 'react';
import React__default, { Children, cloneElement, Component } from 'react';
import { findDOMNode } from 'react-dom';
import { d as debounce } from '../../tree.js';
import { I as Icon } from '../../icon.js';
import '../../menu.js';
import '../../input.js';

var css = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-steps {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  display: flex;\n  width: 100%;\n  font-size: 0;\n}\n.ant-steps-item {\n  position: relative;\n  display: inline-block;\n  flex: 1;\n  overflow: hidden;\n  vertical-align: top;\n}\n.ant-steps-item-container {\n  outline: none;\n}\n.ant-steps-item:last-child {\n  flex: none;\n}\n.ant-steps-item:last-child > .ant-steps-item-container > .ant-steps-item-tail,\n.ant-steps-item:last-child > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {\n  display: none;\n}\n.ant-steps-item-icon,\n.ant-steps-item-content {\n  display: inline-block;\n  vertical-align: top;\n}\n.ant-steps-item-icon {\n  width: 32px;\n  height: 32px;\n  margin-right: 8px;\n  font-size: 16px;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n  line-height: 32px;\n  text-align: center;\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  border-radius: 32px;\n  transition: background-color 0.3s, border-color 0.3s;\n}\n.ant-steps-item-icon > .ant-steps-icon {\n  position: relative;\n  top: -1px;\n  color: #1890ff;\n  line-height: 1;\n}\n.ant-steps-item-tail {\n  position: absolute;\n  top: 12px;\n  left: 0;\n  width: 100%;\n  padding: 0 10px;\n}\n.ant-steps-item-tail::after {\n  display: inline-block;\n  width: 100%;\n  height: 1px;\n  background: #e8e8e8;\n  border-radius: 1px;\n  transition: background 0.3s;\n  content: '';\n}\n.ant-steps-item-title {\n  position: relative;\n  display: inline-block;\n  padding-right: 16px;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 16px;\n  line-height: 32px;\n}\n.ant-steps-item-title::after {\n  position: absolute;\n  top: 16px;\n  left: 100%;\n  display: block;\n  width: 9999px;\n  height: 1px;\n  background: #e8e8e8;\n  content: '';\n}\n.ant-steps-item-subtitle {\n  display: inline;\n  margin-left: 8px;\n  color: rgba(0, 0, 0, 0.45);\n  font-weight: normal;\n  font-size: 14px;\n}\n.ant-steps-item-description {\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 14px;\n}\n.ant-steps-item-wait .ant-steps-item-icon {\n  background-color: #fff;\n  border-color: rgba(0, 0, 0, 0.25);\n}\n.ant-steps-item-wait .ant-steps-item-icon > .ant-steps-icon {\n  color: rgba(0, 0, 0, 0.25);\n}\n.ant-steps-item-wait .ant-steps-item-icon > .ant-steps-icon .ant-steps-icon-dot {\n  background: rgba(0, 0, 0, 0.25);\n}\n.ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {\n  background-color: #e8e8e8;\n}\n.ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-description {\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-tail::after {\n  background-color: #e8e8e8;\n}\n.ant-steps-item-process .ant-steps-item-icon {\n  background-color: #fff;\n  border-color: #1890ff;\n}\n.ant-steps-item-process .ant-steps-item-icon > .ant-steps-icon {\n  color: #1890ff;\n}\n.ant-steps-item-process .ant-steps-item-icon > .ant-steps-icon .ant-steps-icon-dot {\n  background: #1890ff;\n}\n.ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {\n  color: rgba(0, 0, 0, 0.85);\n}\n.ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {\n  background-color: #e8e8e8;\n}\n.ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-description {\n  color: rgba(0, 0, 0, 0.65);\n}\n.ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-tail::after {\n  background-color: #e8e8e8;\n}\n.ant-steps-item-process .ant-steps-item-icon {\n  background: #1890ff;\n}\n.ant-steps-item-process .ant-steps-item-icon > .ant-steps-icon {\n  color: #fff;\n}\n.ant-steps-item-process .ant-steps-item-title {\n  font-weight: 500;\n}\n.ant-steps-item-finish .ant-steps-item-icon {\n  background-color: #fff;\n  border-color: #1890ff;\n}\n.ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon {\n  color: #1890ff;\n}\n.ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon .ant-steps-icon-dot {\n  background: #1890ff;\n}\n.ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {\n  color: rgba(0, 0, 0, 0.65);\n}\n.ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {\n  background-color: #1890ff;\n}\n.ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-description {\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-tail::after {\n  background-color: #1890ff;\n}\n.ant-steps-item-error .ant-steps-item-icon {\n  background-color: #fff;\n  border-color: #f5222d;\n}\n.ant-steps-item-error .ant-steps-item-icon > .ant-steps-icon {\n  color: #f5222d;\n}\n.ant-steps-item-error .ant-steps-item-icon > .ant-steps-icon .ant-steps-icon-dot {\n  background: #f5222d;\n}\n.ant-steps-item-error > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {\n  color: #f5222d;\n}\n.ant-steps-item-error > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {\n  background-color: #e8e8e8;\n}\n.ant-steps-item-error > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-description {\n  color: #f5222d;\n}\n.ant-steps-item-error > .ant-steps-item-container > .ant-steps-item-tail::after {\n  background-color: #e8e8e8;\n}\n.ant-steps-item.ant-steps-next-error .ant-steps-item-title::after {\n  background: #f5222d;\n}\n.ant-steps .ant-steps-item:not(.ant-steps-item-active) > .ant-steps-item-container[role='button'] {\n  cursor: pointer;\n}\n.ant-steps .ant-steps-item:not(.ant-steps-item-active) > .ant-steps-item-container[role='button'] .ant-steps-item-title,\n.ant-steps .ant-steps-item:not(.ant-steps-item-active) > .ant-steps-item-container[role='button'] .ant-steps-item-description,\n.ant-steps .ant-steps-item:not(.ant-steps-item-active) > .ant-steps-item-container[role='button'] .ant-steps-item-icon .ant-steps-icon {\n  transition: color 0.3s;\n}\n.ant-steps .ant-steps-item:not(.ant-steps-item-active) > .ant-steps-item-container[role='button']:hover .ant-steps-item-title,\n.ant-steps .ant-steps-item:not(.ant-steps-item-active) > .ant-steps-item-container[role='button']:hover .ant-steps-item-subtitle,\n.ant-steps .ant-steps-item:not(.ant-steps-item-active) > .ant-steps-item-container[role='button']:hover .ant-steps-item-description {\n  color: #1890ff;\n}\n.ant-steps .ant-steps-item:not(.ant-steps-item-active):not(.ant-steps-item-process) > .ant-steps-item-container[role='button']:hover .ant-steps-item-icon {\n  border-color: #1890ff;\n}\n.ant-steps .ant-steps-item:not(.ant-steps-item-active):not(.ant-steps-item-process) > .ant-steps-item-container[role='button']:hover .ant-steps-item-icon .ant-steps-icon {\n  color: #1890ff;\n}\n.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item {\n  margin-right: 16px;\n  white-space: nowrap;\n}\n.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item:last-child {\n  margin-right: 0;\n}\n.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item:last-child .ant-steps-item-title {\n  padding-right: 0;\n}\n.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item-tail {\n  display: none;\n}\n.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item-description {\n  max-width: 140px;\n  white-space: normal;\n}\n.ant-steps-item-custom .ant-steps-item-icon {\n  height: auto;\n  background: none;\n  border: 0;\n}\n.ant-steps-item-custom .ant-steps-item-icon > .ant-steps-icon {\n  top: 0;\n  left: 0.5px;\n  width: 32px;\n  height: 32px;\n  font-size: 24px;\n  line-height: 32px;\n}\n.ant-steps-item-custom.ant-steps-item-process .ant-steps-item-icon > .ant-steps-icon {\n  color: #1890ff;\n}\n.ant-steps:not(.ant-steps-vertical) .ant-steps-item-custom .ant-steps-item-icon {\n  width: auto;\n}\n.ant-steps-small.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item {\n  margin-right: 12px;\n}\n.ant-steps-small.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item:last-child {\n  margin-right: 0;\n}\n.ant-steps-small .ant-steps-item-icon {\n  width: 24px;\n  height: 24px;\n  font-size: 12px;\n  line-height: 24px;\n  text-align: center;\n  border-radius: 24px;\n}\n.ant-steps-small .ant-steps-item-title {\n  padding-right: 12px;\n  font-size: 14px;\n  line-height: 24px;\n}\n.ant-steps-small .ant-steps-item-title::after {\n  top: 12px;\n}\n.ant-steps-small .ant-steps-item-description {\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 14px;\n}\n.ant-steps-small .ant-steps-item-tail {\n  top: 8px;\n}\n.ant-steps-small .ant-steps-item-custom .ant-steps-item-icon {\n  width: inherit;\n  height: inherit;\n  line-height: inherit;\n  background: none;\n  border: 0;\n  border-radius: 0;\n}\n.ant-steps-small .ant-steps-item-custom .ant-steps-item-icon > .ant-steps-icon {\n  font-size: 24px;\n  line-height: 24px;\n  transform: none;\n}\n.ant-steps-vertical {\n  display: block;\n}\n.ant-steps-vertical .ant-steps-item {\n  display: block;\n  overflow: visible;\n}\n.ant-steps-vertical .ant-steps-item-icon {\n  float: left;\n  margin-right: 16px;\n}\n.ant-steps-vertical .ant-steps-item-content {\n  display: block;\n  min-height: 48px;\n  overflow: hidden;\n}\n.ant-steps-vertical .ant-steps-item-title {\n  line-height: 32px;\n}\n.ant-steps-vertical .ant-steps-item-description {\n  padding-bottom: 12px;\n}\n.ant-steps-vertical > .ant-steps-item > .ant-steps-item-container > .ant-steps-item-tail {\n  position: absolute;\n  top: 0;\n  left: 16px;\n  width: 1px;\n  height: 100%;\n  padding: 38px 0 6px;\n}\n.ant-steps-vertical > .ant-steps-item > .ant-steps-item-container > .ant-steps-item-tail::after {\n  width: 1px;\n  height: 100%;\n}\n.ant-steps-vertical > .ant-steps-item:not(:last-child) > .ant-steps-item-container > .ant-steps-item-tail {\n  display: block;\n}\n.ant-steps-vertical > .ant-steps-item > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {\n  display: none;\n}\n.ant-steps-vertical.ant-steps-small .ant-steps-item-container .ant-steps-item-tail {\n  position: absolute;\n  top: 0;\n  left: 12px;\n  padding: 30px 0 6px;\n}\n.ant-steps-vertical.ant-steps-small .ant-steps-item-container .ant-steps-item-title {\n  line-height: 24px;\n}\n@media (max-width: 480px) {\n  .ant-steps-horizontal.ant-steps-label-horizontal {\n    display: block;\n  }\n  .ant-steps-horizontal.ant-steps-label-horizontal .ant-steps-item {\n    display: block;\n    overflow: visible;\n  }\n  .ant-steps-horizontal.ant-steps-label-horizontal .ant-steps-item-icon {\n    float: left;\n    margin-right: 16px;\n  }\n  .ant-steps-horizontal.ant-steps-label-horizontal .ant-steps-item-content {\n    display: block;\n    min-height: 48px;\n    overflow: hidden;\n  }\n  .ant-steps-horizontal.ant-steps-label-horizontal .ant-steps-item-title {\n    line-height: 32px;\n  }\n  .ant-steps-horizontal.ant-steps-label-horizontal .ant-steps-item-description {\n    padding-bottom: 12px;\n  }\n  .ant-steps-horizontal.ant-steps-label-horizontal > .ant-steps-item > .ant-steps-item-container > .ant-steps-item-tail {\n    position: absolute;\n    top: 0;\n    left: 16px;\n    width: 1px;\n    height: 100%;\n    padding: 38px 0 6px;\n  }\n  .ant-steps-horizontal.ant-steps-label-horizontal > .ant-steps-item > .ant-steps-item-container > .ant-steps-item-tail::after {\n    width: 1px;\n    height: 100%;\n  }\n  .ant-steps-horizontal.ant-steps-label-horizontal > .ant-steps-item:not(:last-child) > .ant-steps-item-container > .ant-steps-item-tail {\n    display: block;\n  }\n  .ant-steps-horizontal.ant-steps-label-horizontal > .ant-steps-item > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {\n    display: none;\n  }\n  .ant-steps-horizontal.ant-steps-label-horizontal.ant-steps-small .ant-steps-item-container .ant-steps-item-tail {\n    position: absolute;\n    top: 0;\n    left: 12px;\n    padding: 30px 0 6px;\n  }\n  .ant-steps-horizontal.ant-steps-label-horizontal.ant-steps-small .ant-steps-item-container .ant-steps-item-title {\n    line-height: 24px;\n  }\n}\n.ant-steps-label-vertical .ant-steps-item {\n  overflow: visible;\n}\n.ant-steps-label-vertical .ant-steps-item-tail {\n  margin-left: 58px;\n  padding: 3.5px 24px;\n}\n.ant-steps-label-vertical .ant-steps-item-content {\n  display: block;\n  width: 116px;\n  margin-top: 8px;\n  text-align: center;\n}\n.ant-steps-label-vertical .ant-steps-item-icon {\n  display: inline-block;\n  margin-left: 42px;\n}\n.ant-steps-label-vertical .ant-steps-item-title {\n  padding-right: 0;\n}\n.ant-steps-label-vertical .ant-steps-item-title::after {\n  display: none;\n}\n.ant-steps-label-vertical .ant-steps-item-subtitle {\n  display: block;\n  margin-bottom: 4px;\n  margin-left: 0;\n  line-height: 1.5;\n}\n.ant-steps-label-vertical.ant-steps-small:not(.ant-steps-dot) .ant-steps-item-icon {\n  margin-left: 46px;\n}\n.ant-steps-dot .ant-steps-item-title,\n.ant-steps-dot.ant-steps-small .ant-steps-item-title {\n  line-height: 1.5;\n}\n.ant-steps-dot .ant-steps-item-tail,\n.ant-steps-dot.ant-steps-small .ant-steps-item-tail {\n  top: 2px;\n  width: 100%;\n  margin: 0 0 0 70px;\n  padding: 0;\n}\n.ant-steps-dot .ant-steps-item-tail::after,\n.ant-steps-dot.ant-steps-small .ant-steps-item-tail::after {\n  width: calc(100% - 20px);\n  height: 3px;\n  margin-left: 12px;\n}\n.ant-steps-dot .ant-steps-item:first-child .ant-steps-icon-dot,\n.ant-steps-dot.ant-steps-small .ant-steps-item:first-child .ant-steps-icon-dot {\n  left: 2px;\n}\n.ant-steps-dot .ant-steps-item-icon,\n.ant-steps-dot.ant-steps-small .ant-steps-item-icon {\n  width: 8px;\n  height: 8px;\n  margin-left: 67px;\n  padding-right: 0;\n  line-height: 8px;\n  background: transparent;\n  border: 0;\n}\n.ant-steps-dot .ant-steps-item-icon .ant-steps-icon-dot,\n.ant-steps-dot.ant-steps-small .ant-steps-item-icon .ant-steps-icon-dot {\n  position: relative;\n  float: left;\n  width: 100%;\n  height: 100%;\n  border-radius: 100px;\n  transition: all 0.3s;\n  /* expand hover area */\n}\n.ant-steps-dot .ant-steps-item-icon .ant-steps-icon-dot::after,\n.ant-steps-dot.ant-steps-small .ant-steps-item-icon .ant-steps-icon-dot::after {\n  position: absolute;\n  top: -12px;\n  left: -26px;\n  width: 60px;\n  height: 32px;\n  background: rgba(0, 0, 0, 0.001);\n  content: '';\n}\n.ant-steps-dot .ant-steps-item-content,\n.ant-steps-dot.ant-steps-small .ant-steps-item-content {\n  width: 140px;\n}\n.ant-steps-dot .ant-steps-item-process .ant-steps-item-icon,\n.ant-steps-dot.ant-steps-small .ant-steps-item-process .ant-steps-item-icon {\n  width: 10px;\n  height: 10px;\n  line-height: 10px;\n}\n.ant-steps-dot .ant-steps-item-process .ant-steps-item-icon .ant-steps-icon-dot,\n.ant-steps-dot.ant-steps-small .ant-steps-item-process .ant-steps-item-icon .ant-steps-icon-dot {\n  top: -1px;\n}\n.ant-steps-vertical.ant-steps-dot .ant-steps-item-icon {\n  margin-top: 8px;\n  margin-left: 0;\n}\n.ant-steps-vertical.ant-steps-dot .ant-steps-item > .ant-steps-item-container > .ant-steps-item-tail {\n  top: 2px;\n  left: -9px;\n  margin: 0;\n  padding: 22px 0 4px;\n}\n.ant-steps-vertical.ant-steps-dot .ant-steps-item:first-child .ant-steps-icon-dot {\n  left: 0;\n}\n.ant-steps-vertical.ant-steps-dot .ant-steps-item-process .ant-steps-icon-dot {\n  left: -2px;\n}\n.ant-steps-navigation {\n  padding-top: 12px;\n}\n.ant-steps-navigation.ant-steps-small .ant-steps-item-container {\n  margin-left: -12px;\n}\n.ant-steps-navigation .ant-steps-item {\n  overflow: visible;\n  text-align: center;\n}\n.ant-steps-navigation .ant-steps-item-container {\n  display: inline-block;\n  height: 100%;\n  margin-left: -16px;\n  padding-bottom: 12px;\n  text-align: left;\n  transition: opacity 0.3s;\n}\n.ant-steps-navigation .ant-steps-item-container .ant-steps-item-content {\n  max-width: auto;\n}\n.ant-steps-navigation .ant-steps-item-container .ant-steps-item-title {\n  max-width: 100%;\n  padding-right: 0;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.ant-steps-navigation .ant-steps-item-container .ant-steps-item-title::after {\n  display: none;\n}\n.ant-steps-navigation .ant-steps-item:not(.ant-steps-item-active) .ant-steps-item-container[role='button'] {\n  cursor: pointer;\n}\n.ant-steps-navigation .ant-steps-item:not(.ant-steps-item-active) .ant-steps-item-container[role='button']:hover {\n  opacity: 0.85;\n}\n.ant-steps-navigation .ant-steps-item:last-child {\n  flex: 1;\n}\n.ant-steps-navigation .ant-steps-item:last-child::after {\n  display: none;\n}\n.ant-steps-navigation .ant-steps-item::after {\n  position: absolute;\n  top: 50%;\n  left: 100%;\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  margin-top: -14px;\n  margin-left: -2px;\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  border-bottom: none;\n  border-left: none;\n  transform: rotate(45deg);\n  content: '';\n}\n.ant-steps-navigation .ant-steps-item::before {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  display: inline-block;\n  width: 0;\n  height: 3px;\n  background-color: #1890ff;\n  transition: width 0.3s, left 0.3s;\n  transition-timing-function: ease-out;\n  content: '';\n}\n.ant-steps-navigation .ant-steps-item.ant-steps-item-active::before {\n  left: 0;\n  width: 100%;\n}\n@media (max-width: 480px) {\n  .ant-steps-navigation > .ant-steps-item {\n    margin-right: 0 !important;\n  }\n  .ant-steps-navigation > .ant-steps-item::before {\n    display: none;\n  }\n  .ant-steps-navigation > .ant-steps-item.ant-steps-item-active::before {\n    top: 0;\n    right: 0;\n    left: unset;\n    display: block;\n    width: 3px;\n    height: calc(100% - 24px);\n  }\n  .ant-steps-navigation > .ant-steps-item::after {\n    position: relative;\n    top: -2px;\n    left: 50%;\n    display: block;\n    width: 8px;\n    height: 8px;\n    margin-bottom: 8px;\n    text-align: center;\n    transform: rotate(135deg);\n  }\n  .ant-steps-navigation > .ant-steps-item > .ant-steps-item-container > .ant-steps-item-tail {\n    visibility: hidden;\n  }\n}\n.ant-steps-flex-not-supported.ant-steps-horizontal.ant-steps-label-horizontal .ant-steps-item {\n  margin-left: -16px;\n  padding-left: 16px;\n  background: #fff;\n}\n.ant-steps-flex-not-supported.ant-steps-horizontal.ant-steps-label-horizontal.ant-steps-small .ant-steps-item {\n  margin-left: -12px;\n  padding-left: 12px;\n}\n.ant-steps-flex-not-supported.ant-steps-dot .ant-steps-item:last-child {\n  overflow: hidden;\n}\n.ant-steps-flex-not-supported.ant-steps-dot .ant-steps-item:last-child .ant-steps-icon-dot::after {\n  right: -200px;\n  width: 200px;\n}\n.ant-steps-flex-not-supported.ant-steps-dot .ant-steps-item .ant-steps-icon-dot::before,\n.ant-steps-flex-not-supported.ant-steps-dot .ant-steps-item .ant-steps-icon-dot::after {\n  position: absolute;\n  top: 0;\n  left: -10px;\n  width: 10px;\n  height: 8px;\n  background: #fff;\n  content: '';\n}\n.ant-steps-flex-not-supported.ant-steps-dot .ant-steps-item .ant-steps-icon-dot::after {\n  right: -10px;\n  left: auto;\n}\n.ant-steps-flex-not-supported.ant-steps-dot .ant-steps-item-wait .ant-steps-item-icon > .ant-steps-icon .ant-steps-icon-dot {\n  background: #ccc;\n}\n/*# sourceMappingURL=index.css.map */";
n(css,{"prepend":true});

// eslint-disable-next-line import/prefer-default-export
function isFlexSupported() {
  if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
    var documentElement = window.document.documentElement;
    return 'flex' in documentElement.style || 'webkitFlex' in documentElement.style || 'Flex' in documentElement.style || 'msFlex' in documentElement.style;
  }

  return false;
}

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$2(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$2(Constructor.prototype, protoProps); return Constructor; }

function _possibleConstructorReturn$2(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$2(self); }

function _getPrototypeOf$2(o) { _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$2(o); }

function _assertThisInitialized$2(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$2(subClass, superClass); }

function _setPrototypeOf$2(o, p) { _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$2(o, p); }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Steps$1 =
/*#__PURE__*/
function (_Component) {
  _inherits$2(Steps, _Component);

  function Steps(props) {
    var _this;

    _classCallCheck$2(this, Steps);

    _this = _possibleConstructorReturn$2(this, _getPrototypeOf$2(Steps).call(this, props));

    _defineProperty$1(_assertThisInitialized$2(_this), "onStepClick", function (next) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          current = _this$props.current;

      if (onChange && current !== next) {
        onChange(next);
      }
    });

    _defineProperty$1(_assertThisInitialized$2(_this), "calcStepOffsetWidth", function () {
      if (isFlexSupported()) {
        return;
      }

      var lastStepOffsetWidth = _this.state.lastStepOffsetWidth; // Just for IE9

      var domNode = findDOMNode(_assertThisInitialized$2(_this));

      if (domNode.children.length > 0) {
        if (_this.calcTimeout) {
          clearTimeout(_this.calcTimeout);
        }

        _this.calcTimeout = setTimeout(function () {
          // +1 for fit edge bug of digit width, like 35.4px
          var offsetWidth = (domNode.lastChild.offsetWidth || 0) + 1; // Reduce shake bug

          if (lastStepOffsetWidth === offsetWidth || Math.abs(lastStepOffsetWidth - offsetWidth) <= 3) {
            return;
          }

          _this.setState({
            lastStepOffsetWidth: offsetWidth
          });
        });
      }
    });

    _this.state = {
      flexSupported: true,
      lastStepOffsetWidth: 0
    };
    _this.calcStepOffsetWidth = debounce(_this.calcStepOffsetWidth, 150);
    return _this;
  }

  _createClass$2(Steps, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.calcStepOffsetWidth();

      if (!isFlexSupported()) {
        this.setState({
          flexSupported: false
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.calcStepOffsetWidth();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.calcTimeout) {
        clearTimeout(this.calcTimeout);
      }

      if (this.calcStepOffsetWidth && this.calcStepOffsetWidth.cancel) {
        this.calcStepOffsetWidth.cancel();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames,
          _this2 = this;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          _this$props2$style = _this$props2.style,
          style = _this$props2$style === void 0 ? {} : _this$props2$style,
          className = _this$props2.className,
          children = _this$props2.children,
          direction = _this$props2.direction,
          type = _this$props2.type,
          labelPlacement = _this$props2.labelPlacement,
          iconPrefix = _this$props2.iconPrefix,
          status = _this$props2.status,
          size = _this$props2.size,
          current = _this$props2.current,
          progressDot = _this$props2.progressDot,
          initial = _this$props2.initial,
          icons = _this$props2.icons,
          onChange = _this$props2.onChange,
          restProps = _objectWithoutProperties$1(_this$props2, ["prefixCls", "style", "className", "children", "direction", "type", "labelPlacement", "iconPrefix", "status", "size", "current", "progressDot", "initial", "icons", "onChange"]);

      var isNav = type === 'navigation';
      var _this$state = this.state,
          lastStepOffsetWidth = _this$state.lastStepOffsetWidth,
          flexSupported = _this$state.flexSupported;
      var filteredChildren = React__default.Children.toArray(children).filter(function (c) {
        return !!c;
      });
      var lastIndex = filteredChildren.length - 1;
      var adjustedlabelPlacement = progressDot ? 'vertical' : labelPlacement;
      var classString = classNames(prefixCls, "".concat(prefixCls, "-").concat(direction), className, (_classNames = {}, _defineProperty$1(_classNames, "".concat(prefixCls, "-").concat(size), size), _defineProperty$1(_classNames, "".concat(prefixCls, "-label-").concat(adjustedlabelPlacement), direction === 'horizontal'), _defineProperty$1(_classNames, "".concat(prefixCls, "-dot"), !!progressDot), _defineProperty$1(_classNames, "".concat(prefixCls, "-navigation"), isNav), _defineProperty$1(_classNames, "".concat(prefixCls, "-flex-not-supported"), !flexSupported), _classNames));
      return React__default.createElement("div", _extends$2({
        className: classString,
        style: style
      }, restProps), Children.map(filteredChildren, function (child, index) {
        if (!child) {
          return null;
        }

        var stepNumber = initial + index;

        var childProps = _objectSpread$1({
          stepNumber: "".concat(stepNumber + 1),
          stepIndex: stepNumber,
          prefixCls: prefixCls,
          iconPrefix: iconPrefix,
          wrapperStyle: style,
          progressDot: progressDot,
          icons: icons,
          onStepClick: onChange && _this2.onStepClick
        }, child.props);

        if (!flexSupported && direction !== 'vertical') {
          if (isNav) {
            childProps.itemWidth = "".concat(100 / (lastIndex + 1), "%");
            childProps.adjustMarginRight = 0;
          } else if (index !== lastIndex) {
            childProps.itemWidth = "".concat(100 / lastIndex, "%");
            childProps.adjustMarginRight = -Math.round(lastStepOffsetWidth / lastIndex + 1);
          }
        } // fix tail color


        if (status === 'error' && index === current - 1) {
          childProps.className = "".concat(prefixCls, "-next-error");
        }

        if (!child.props.status) {
          if (stepNumber === current) {
            childProps.status = status;
          } else if (stepNumber < current) {
            childProps.status = 'finish';
          } else {
            childProps.status = 'wait';
          }
        }

        childProps.active = stepNumber === current;
        return cloneElement(child, childProps);
      }));
    }
  }]);

  return Steps;
}(Component);

_defineProperty$1(Steps$1, "propTypes", {
  type: PropTypes.string,
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  iconPrefix: PropTypes.string,
  direction: PropTypes.string,
  labelPlacement: PropTypes.string,
  children: PropTypes.any,
  status: PropTypes.string,
  size: PropTypes.string,
  progressDot: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  style: PropTypes.object,
  initial: PropTypes.number,
  current: PropTypes.number,
  icons: PropTypes.shape({
    finish: PropTypes.node,
    error: PropTypes.node
  }),
  onChange: PropTypes.func
});

_defineProperty$1(Steps$1, "defaultProps", {
  type: 'default',
  prefixCls: 'rc-steps',
  iconPrefix: 'rc',
  direction: 'horizontal',
  labelPlacement: 'horizontal',
  initial: 0,
  current: 0,
  status: 'process',
  size: '',
  progressDot: false
});

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); return Constructor; }

function _possibleConstructorReturn$1(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$1(self); }

function _getPrototypeOf$1(o) { _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$1(o); }

function _assertThisInitialized$1(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$1(subClass, superClass); }

function _setPrototypeOf$1(o, p) { _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$1(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function isString(str) {
  return typeof str === 'string';
}

var Step =
/*#__PURE__*/
function (_React$Component) {
  _inherits$1(Step, _React$Component);

  function Step() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck$1(this, Step);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn$1(this, (_getPrototypeOf2 = _getPrototypeOf$1(Step)).call.apply(_getPrototypeOf2, [this].concat(_args)));

    _defineProperty(_assertThisInitialized$1(_this), "onClick", function () {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          onStepClick = _this$props.onStepClick,
          stepIndex = _this$props.stepIndex;

      if (onClick) {
        onClick.apply(void 0, arguments);
      }

      onStepClick(stepIndex);
    });

    return _this;
  }

  _createClass$1(Step, [{
    key: "renderIconNode",
    value: function renderIconNode() {
      var _classNames;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          progressDot = _this$props2.progressDot,
          stepNumber = _this$props2.stepNumber,
          status = _this$props2.status,
          title = _this$props2.title,
          description = _this$props2.description,
          icon = _this$props2.icon,
          iconPrefix = _this$props2.iconPrefix,
          icons = _this$props2.icons;
      var iconNode;
      var iconClassName = classNames("".concat(prefixCls, "-icon"), "".concat(iconPrefix, "icon"), (_classNames = {}, _defineProperty(_classNames, "".concat(iconPrefix, "icon-").concat(icon), icon && isString(icon)), _defineProperty(_classNames, "".concat(iconPrefix, "icon-check"), !icon && status === 'finish' && icons && !icons.finish), _defineProperty(_classNames, "".concat(iconPrefix, "icon-close"), !icon && status === 'error' && icons && !icons.error), _classNames));
      var iconDot = React__default.createElement("span", {
        className: "".concat(prefixCls, "-icon-dot")
      }); // `progressDot` enjoy the highest priority

      if (progressDot) {
        if (typeof progressDot === 'function') {
          iconNode = React__default.createElement("span", {
            className: "".concat(prefixCls, "-icon")
          }, progressDot(iconDot, {
            index: stepNumber - 1,
            status: status,
            title: title,
            description: description
          }));
        } else {
          iconNode = React__default.createElement("span", {
            className: "".concat(prefixCls, "-icon")
          }, iconDot);
        }
      } else if (icon && !isString(icon)) {
        iconNode = React__default.createElement("span", {
          className: "".concat(prefixCls, "-icon")
        }, icon);
      } else if (icons && icons.finish && status === 'finish') {
        iconNode = React__default.createElement("span", {
          className: "".concat(prefixCls, "-icon")
        }, icons.finish);
      } else if (icons && icons.error && status === 'error') {
        iconNode = React__default.createElement("span", {
          className: "".concat(prefixCls, "-icon")
        }, icons.error);
      } else if (icon || status === 'finish' || status === 'error') {
        iconNode = React__default.createElement("span", {
          className: iconClassName
        });
      } else {
        iconNode = React__default.createElement("span", {
          className: "".concat(prefixCls, "-icon")
        }, stepNumber);
      }

      return iconNode;
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames2;

      var _this$props3 = this.props,
          className = _this$props3.className,
          prefixCls = _this$props3.prefixCls,
          style = _this$props3.style,
          itemWidth = _this$props3.itemWidth,
          active = _this$props3.active,
          _this$props3$status = _this$props3.status,
          status = _this$props3$status === void 0 ? 'wait' : _this$props3$status,
          icon = _this$props3.icon,
          adjustMarginRight = _this$props3.adjustMarginRight,
          disabled = _this$props3.disabled,
          description = _this$props3.description,
          title = _this$props3.title,
          subTitle = _this$props3.subTitle,
          tailContent = _this$props3.tailContent,
          onStepClick = _this$props3.onStepClick,
          onClick = _this$props3.onClick,
          restProps = _objectWithoutProperties(_this$props3, ["className", "prefixCls", "style", "itemWidth", "active", "status", "iconPrefix", "icon", "wrapperStyle", "adjustMarginRight", "stepNumber", "disabled", "description", "title", "subTitle", "progressDot", "tailContent", "icons", "stepIndex", "onStepClick", "onClick"]);

      var classString = classNames("".concat(prefixCls, "-item"), "".concat(prefixCls, "-item-").concat(status), className, (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-item-custom"), icon), _defineProperty(_classNames2, "".concat(prefixCls, "-item-active"), active), _defineProperty(_classNames2, "".concat(prefixCls, "-item-disabled"), disabled === true), _classNames2));

      var stepItemStyle = _objectSpread({}, style);

      if (itemWidth) {
        stepItemStyle.width = itemWidth;
      }

      if (adjustMarginRight) {
        stepItemStyle.marginRight = adjustMarginRight;
      }

      var accessibilityProps = {};

      if (onStepClick && !disabled) {
        accessibilityProps.role = 'button';
        accessibilityProps.tabIndex = 0;
        accessibilityProps.onClick = this.onClick;
      }

      return React__default.createElement("div", _extends$1({}, restProps, {
        className: classString,
        style: stepItemStyle
      }), React__default.createElement("div", _extends$1({
        onClick: onClick
      }, accessibilityProps, {
        className: "".concat(prefixCls, "-item-container")
      }), React__default.createElement("div", {
        className: "".concat(prefixCls, "-item-tail")
      }, tailContent), React__default.createElement("div", {
        className: "".concat(prefixCls, "-item-icon")
      }, this.renderIconNode()), React__default.createElement("div", {
        className: "".concat(prefixCls, "-item-content")
      }, React__default.createElement("div", {
        className: "".concat(prefixCls, "-item-title")
      }, title, subTitle && React__default.createElement("div", {
        title: subTitle,
        className: "".concat(prefixCls, "-item-subtitle")
      }, subTitle)), description && React__default.createElement("div", {
        className: "".concat(prefixCls, "-item-description")
      }, description))));
    }
  }]);

  return Step;
}(React__default.Component);

_defineProperty(Step, "propTypes", {
  className: PropTypes.string,
  prefixCls: PropTypes.string,
  style: PropTypes.object,
  wrapperStyle: PropTypes.object,
  itemWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  status: PropTypes.string,
  iconPrefix: PropTypes.string,
  icon: PropTypes.node,
  adjustMarginRight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  stepNumber: PropTypes.string,
  stepIndex: PropTypes.number,
  description: PropTypes.any,
  title: PropTypes.any,
  subTitle: PropTypes.any,
  progressDot: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  tailContent: PropTypes.any,
  icons: PropTypes.shape({
    finish: PropTypes.node,
    error: PropTypes.node
  }),
  onClick: PropTypes.func,
  onStepClick: PropTypes.func
});

Steps$1.Step = Step;

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

var Steps = /*#__PURE__*/function (_React$Component) {
  _inherits(Steps, _React$Component);

  var _super = _createSuper(Steps);

  function Steps() {
    var _this;

    _classCallCheck(this, Steps);

    _this = _super.apply(this, arguments);

    _this.renderSteps = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;
      var prefixCls = getPrefixCls('steps', _this.props.prefixCls);
      var iconPrefix = getPrefixCls('', _this.props.iconPrefix);
      var icons = {
        finish: /*#__PURE__*/React.createElement(Icon, {
          type: "check",
          className: "".concat(prefixCls, "-finish-icon")
        }),
        error: /*#__PURE__*/React.createElement(Icon, {
          type: "close",
          className: "".concat(prefixCls, "-error-icon")
        })
      };
      return /*#__PURE__*/React.createElement(Steps$1, _extends({
        icons: icons
      }, _this.props, {
        prefixCls: prefixCls,
        iconPrefix: iconPrefix
      }));
    };

    return _this;
  }

  _createClass(Steps, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderSteps);
    }
  }]);

  return Steps;
}(React.Component);
Steps.Step = Steps$1.Step;
Steps.defaultProps = {
  current: 0
};
Steps.propTypes = {
  prefixCls: propTypesExports.string,
  iconPrefix: propTypesExports.string,
  current: propTypesExports.number
};

export { Steps as default };
