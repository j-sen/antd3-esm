import { n, P as PropTypes, c as classNames, m as moment, o as interopDefault, q as moment$1, C as ConfigConsumer, l as locale, L as LocaleReceiver, w as warning } from '../../config-provider.js';
import { _ as _inherits$4, a as _classCallCheck$4, b as _possibleConstructorReturn$4, e as _extends$5, I as Icon } from '../../icon.js';
import * as React from 'react';
import React__default from 'react';
import ReactDOM__default from 'react-dom';
import { p as polyfill, K as KeyCode, b as Trigger, c as createChainedFunction, s as shallowEqual } from '../../menu.js';
import { M as MonthTable, i as isAllowedDate, h as getTodayTime, j as getTodayTimeStr, k as formatDate$1, b as getNowByCurrentStateValue, l as getTimeConfig, D as DateTable, d as calendarMixinPropTypes, p as propType, e as calendarMixinDefaultProps, f as defaultProp, s as syncTime, c as calendarMixinWrapper, a as commonMixinWrapper } from '../../CommonMixin.js';
import { o as omit } from '../../input.js';
import { g as generateShowHourMinuteSecond, P as Panel } from '../../index15.js';
import { T as Tag } from '../../index14.js';
import '../../wave.js';
import '../../raf.js';

function getDataOrAriaProps(props) {
  return Object.keys(props).reduce(function (prev, key) {
    if ((key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role') && key.substr(0, 7) !== 'data-__') {
      prev[key] = props[key];
    }

    return prev;
  }, {});
}

var css = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-calendar-picker-container {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  position: absolute;\n  z-index: 1050;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n}\n.ant-calendar-picker-container.slide-up-enter.slide-up-enter-active.ant-calendar-picker-container-placement-topLeft,\n.ant-calendar-picker-container.slide-up-enter.slide-up-enter-active.ant-calendar-picker-container-placement-topRight,\n.ant-calendar-picker-container.slide-up-appear.slide-up-appear-active.ant-calendar-picker-container-placement-topLeft,\n.ant-calendar-picker-container.slide-up-appear.slide-up-appear-active.ant-calendar-picker-container-placement-topRight {\n  animation-name: antSlideDownIn;\n}\n.ant-calendar-picker-container.slide-up-enter.slide-up-enter-active.ant-calendar-picker-container-placement-bottomLeft,\n.ant-calendar-picker-container.slide-up-enter.slide-up-enter-active.ant-calendar-picker-container-placement-bottomRight,\n.ant-calendar-picker-container.slide-up-appear.slide-up-appear-active.ant-calendar-picker-container-placement-bottomLeft,\n.ant-calendar-picker-container.slide-up-appear.slide-up-appear-active.ant-calendar-picker-container-placement-bottomRight {\n  animation-name: antSlideUpIn;\n}\n.ant-calendar-picker-container.slide-up-leave.slide-up-leave-active.ant-calendar-picker-container-placement-topLeft,\n.ant-calendar-picker-container.slide-up-leave.slide-up-leave-active.ant-calendar-picker-container-placement-topRight {\n  animation-name: antSlideDownOut;\n}\n.ant-calendar-picker-container.slide-up-leave.slide-up-leave-active.ant-calendar-picker-container-placement-bottomLeft,\n.ant-calendar-picker-container.slide-up-leave.slide-up-leave-active.ant-calendar-picker-container-placement-bottomRight {\n  animation-name: antSlideUpOut;\n}\n.ant-calendar-picker {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  position: relative;\n  display: inline-block;\n  outline: none;\n  cursor: text;\n  transition: opacity 0.3s;\n}\n.ant-calendar-picker-input {\n  outline: none;\n}\n.ant-calendar-picker-input.ant-input {\n  line-height: 1.5;\n}\n.ant-calendar-picker-input.ant-input-sm {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.ant-calendar-picker:hover .ant-calendar-picker-input:not(.ant-input-disabled) {\n  border-color: #40a9ff;\n}\n.ant-calendar-picker:focus .ant-calendar-picker-input:not(.ant-input-disabled) {\n  border-color: #40a9ff;\n  border-right-width: 1px !important;\n  outline: 0;\n  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);\n}\n.ant-calendar-picker-clear,\n.ant-calendar-picker-icon {\n  position: absolute;\n  top: 50%;\n  right: 12px;\n  z-index: 1;\n  width: 14px;\n  height: 14px;\n  margin-top: -7px;\n  font-size: 12px;\n  line-height: 14px;\n  transition: all 0.3s;\n  user-select: none;\n}\n.ant-calendar-picker-clear {\n  z-index: 2;\n  color: rgba(0, 0, 0, 0.25);\n  font-size: 14px;\n  background: #fff;\n  cursor: pointer;\n  opacity: 0;\n  pointer-events: none;\n}\n.ant-calendar-picker-clear:hover {\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-calendar-picker:hover .ant-calendar-picker-clear {\n  opacity: 1;\n  pointer-events: auto;\n}\n.ant-calendar-picker-icon {\n  display: inline-block;\n  color: rgba(0, 0, 0, 0.25);\n  font-size: 14px;\n  line-height: 1;\n}\n.ant-input-disabled + .ant-calendar-picker-icon {\n  cursor: not-allowed;\n}\n.ant-calendar-picker-small .ant-calendar-picker-clear,\n.ant-calendar-picker-small .ant-calendar-picker-icon {\n  right: 8px;\n}\n.ant-calendar {\n  position: relative;\n  width: 280px;\n  font-size: 14px;\n  line-height: 1.5;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #fff;\n  border-radius: 4px;\n  outline: none;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.ant-calendar-input-wrap {\n  height: 34px;\n  padding: 6px 10px;\n  border-bottom: 1px solid #e8e8e8;\n}\n.ant-calendar-input {\n  width: 100%;\n  height: 22px;\n  color: rgba(0, 0, 0, 0.65);\n  background: #fff;\n  border: 0;\n  outline: 0;\n  cursor: auto;\n}\n.ant-calendar-input::-moz-placeholder {\n  color: #bfbfbf;\n  opacity: 1;\n}\n.ant-calendar-input:-ms-input-placeholder {\n  color: #bfbfbf;\n}\n.ant-calendar-input::-webkit-input-placeholder {\n  color: #bfbfbf;\n}\n.ant-calendar-input:placeholder-shown {\n  text-overflow: ellipsis;\n}\n.ant-calendar-week-number {\n  width: 286px;\n}\n.ant-calendar-week-number-cell {\n  text-align: center;\n}\n.ant-calendar-header {\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  border-bottom: 1px solid #e8e8e8;\n  user-select: none;\n}\n.ant-calendar-header a:hover {\n  color: #40a9ff;\n}\n.ant-calendar-header .ant-calendar-century-select,\n.ant-calendar-header .ant-calendar-decade-select,\n.ant-calendar-header .ant-calendar-year-select,\n.ant-calendar-header .ant-calendar-month-select {\n  display: inline-block;\n  padding: 0 2px;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n  line-height: 40px;\n}\n.ant-calendar-header .ant-calendar-century-select-arrow,\n.ant-calendar-header .ant-calendar-decade-select-arrow,\n.ant-calendar-header .ant-calendar-year-select-arrow,\n.ant-calendar-header .ant-calendar-month-select-arrow {\n  display: none;\n}\n.ant-calendar-header .ant-calendar-prev-century-btn,\n.ant-calendar-header .ant-calendar-next-century-btn,\n.ant-calendar-header .ant-calendar-prev-decade-btn,\n.ant-calendar-header .ant-calendar-next-decade-btn,\n.ant-calendar-header .ant-calendar-prev-month-btn,\n.ant-calendar-header .ant-calendar-next-month-btn,\n.ant-calendar-header .ant-calendar-prev-year-btn,\n.ant-calendar-header .ant-calendar-next-year-btn {\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  padding: 0 5px;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 16px;\n  font-family: Arial, 'Hiragino Sans GB', 'Microsoft Yahei', 'Microsoft Sans Serif', sans-serif;\n  line-height: 40px;\n}\n.ant-calendar-header .ant-calendar-prev-century-btn,\n.ant-calendar-header .ant-calendar-prev-decade-btn,\n.ant-calendar-header .ant-calendar-prev-year-btn {\n  left: 7px;\n  height: 100%;\n}\n.ant-calendar-header .ant-calendar-prev-century-btn::before,\n.ant-calendar-header .ant-calendar-prev-decade-btn::before,\n.ant-calendar-header .ant-calendar-prev-year-btn::before,\n.ant-calendar-header .ant-calendar-prev-century-btn::after,\n.ant-calendar-header .ant-calendar-prev-decade-btn::after,\n.ant-calendar-header .ant-calendar-prev-year-btn::after {\n  position: relative;\n  top: -1px;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  vertical-align: middle;\n  border: 0 solid #aaa;\n  border-width: 1.5px 0 0 1.5px;\n  border-radius: 1px;\n  transform: rotate(-45deg) scale(0.8);\n  transition: all 0.3s;\n  content: '';\n}\n.ant-calendar-header .ant-calendar-prev-century-btn:hover::before,\n.ant-calendar-header .ant-calendar-prev-decade-btn:hover::before,\n.ant-calendar-header .ant-calendar-prev-year-btn:hover::before,\n.ant-calendar-header .ant-calendar-prev-century-btn:hover::after,\n.ant-calendar-header .ant-calendar-prev-decade-btn:hover::after,\n.ant-calendar-header .ant-calendar-prev-year-btn:hover::after {\n  border-color: rgba(0, 0, 0, 0.65);\n}\n.ant-calendar-header .ant-calendar-prev-century-btn::after,\n.ant-calendar-header .ant-calendar-prev-decade-btn::after,\n.ant-calendar-header .ant-calendar-prev-year-btn::after {\n  display: none;\n}\n.ant-calendar-header .ant-calendar-prev-century-btn::after,\n.ant-calendar-header .ant-calendar-prev-decade-btn::after,\n.ant-calendar-header .ant-calendar-prev-year-btn::after {\n  position: relative;\n  left: -3px;\n  display: inline-block;\n}\n.ant-calendar-header .ant-calendar-next-century-btn,\n.ant-calendar-header .ant-calendar-next-decade-btn,\n.ant-calendar-header .ant-calendar-next-year-btn {\n  right: 7px;\n  height: 100%;\n}\n.ant-calendar-header .ant-calendar-next-century-btn::before,\n.ant-calendar-header .ant-calendar-next-decade-btn::before,\n.ant-calendar-header .ant-calendar-next-year-btn::before,\n.ant-calendar-header .ant-calendar-next-century-btn::after,\n.ant-calendar-header .ant-calendar-next-decade-btn::after,\n.ant-calendar-header .ant-calendar-next-year-btn::after {\n  position: relative;\n  top: -1px;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  vertical-align: middle;\n  border: 0 solid #aaa;\n  border-width: 1.5px 0 0 1.5px;\n  border-radius: 1px;\n  transform: rotate(-45deg) scale(0.8);\n  transition: all 0.3s;\n  content: '';\n}\n.ant-calendar-header .ant-calendar-next-century-btn:hover::before,\n.ant-calendar-header .ant-calendar-next-decade-btn:hover::before,\n.ant-calendar-header .ant-calendar-next-year-btn:hover::before,\n.ant-calendar-header .ant-calendar-next-century-btn:hover::after,\n.ant-calendar-header .ant-calendar-next-decade-btn:hover::after,\n.ant-calendar-header .ant-calendar-next-year-btn:hover::after {\n  border-color: rgba(0, 0, 0, 0.65);\n}\n.ant-calendar-header .ant-calendar-next-century-btn::after,\n.ant-calendar-header .ant-calendar-next-decade-btn::after,\n.ant-calendar-header .ant-calendar-next-year-btn::after {\n  display: none;\n}\n.ant-calendar-header .ant-calendar-next-century-btn::before,\n.ant-calendar-header .ant-calendar-next-decade-btn::before,\n.ant-calendar-header .ant-calendar-next-year-btn::before,\n.ant-calendar-header .ant-calendar-next-century-btn::after,\n.ant-calendar-header .ant-calendar-next-decade-btn::after,\n.ant-calendar-header .ant-calendar-next-year-btn::after {\n  transform: rotate(135deg) scale(0.8);\n}\n.ant-calendar-header .ant-calendar-next-century-btn::before,\n.ant-calendar-header .ant-calendar-next-decade-btn::before,\n.ant-calendar-header .ant-calendar-next-year-btn::before {\n  position: relative;\n  left: 3px;\n}\n.ant-calendar-header .ant-calendar-next-century-btn::after,\n.ant-calendar-header .ant-calendar-next-decade-btn::after,\n.ant-calendar-header .ant-calendar-next-year-btn::after {\n  display: inline-block;\n}\n.ant-calendar-header .ant-calendar-prev-month-btn {\n  left: 29px;\n  height: 100%;\n}\n.ant-calendar-header .ant-calendar-prev-month-btn::before,\n.ant-calendar-header .ant-calendar-prev-month-btn::after {\n  position: relative;\n  top: -1px;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  vertical-align: middle;\n  border: 0 solid #aaa;\n  border-width: 1.5px 0 0 1.5px;\n  border-radius: 1px;\n  transform: rotate(-45deg) scale(0.8);\n  transition: all 0.3s;\n  content: '';\n}\n.ant-calendar-header .ant-calendar-prev-month-btn:hover::before,\n.ant-calendar-header .ant-calendar-prev-month-btn:hover::after {\n  border-color: rgba(0, 0, 0, 0.65);\n}\n.ant-calendar-header .ant-calendar-prev-month-btn::after {\n  display: none;\n}\n.ant-calendar-header .ant-calendar-next-month-btn {\n  right: 29px;\n  height: 100%;\n}\n.ant-calendar-header .ant-calendar-next-month-btn::before,\n.ant-calendar-header .ant-calendar-next-month-btn::after {\n  position: relative;\n  top: -1px;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  vertical-align: middle;\n  border: 0 solid #aaa;\n  border-width: 1.5px 0 0 1.5px;\n  border-radius: 1px;\n  transform: rotate(-45deg) scale(0.8);\n  transition: all 0.3s;\n  content: '';\n}\n.ant-calendar-header .ant-calendar-next-month-btn:hover::before,\n.ant-calendar-header .ant-calendar-next-month-btn:hover::after {\n  border-color: rgba(0, 0, 0, 0.65);\n}\n.ant-calendar-header .ant-calendar-next-month-btn::after {\n  display: none;\n}\n.ant-calendar-header .ant-calendar-next-month-btn::before,\n.ant-calendar-header .ant-calendar-next-month-btn::after {\n  transform: rotate(135deg) scale(0.8);\n}\n.ant-calendar-body {\n  padding: 8px 12px;\n}\n.ant-calendar table {\n  width: 100%;\n  max-width: 100%;\n  background-color: transparent;\n  border-collapse: collapse;\n}\n.ant-calendar table,\n.ant-calendar th,\n.ant-calendar td {\n  text-align: center;\n  border: 0;\n}\n.ant-calendar-calendar-table {\n  margin-bottom: 0;\n  border-spacing: 0;\n}\n.ant-calendar-column-header {\n  width: 33px;\n  padding: 6px 0;\n  line-height: 18px;\n  text-align: center;\n}\n.ant-calendar-column-header .ant-calendar-column-header-inner {\n  display: block;\n  font-weight: normal;\n}\n.ant-calendar-week-number-header .ant-calendar-column-header-inner {\n  display: none;\n}\n.ant-calendar-cell {\n  height: 30px;\n  padding: 3px 0;\n}\n.ant-calendar-date {\n  display: block;\n  width: 24px;\n  height: 24px;\n  margin: 0 auto;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  line-height: 22px;\n  text-align: center;\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: 2px;\n  transition: background 0.3s ease;\n}\n.ant-calendar-date-panel {\n  position: relative;\n  outline: none;\n}\n.ant-calendar-date:hover {\n  background: #e6f7ff;\n  cursor: pointer;\n}\n.ant-calendar-date:active {\n  color: #fff;\n  background: #40a9ff;\n}\n.ant-calendar-today .ant-calendar-date {\n  color: #1890ff;\n  font-weight: bold;\n  border-color: #1890ff;\n}\n.ant-calendar-selected-day .ant-calendar-date {\n  background: #bae7ff;\n}\n.ant-calendar-last-month-cell .ant-calendar-date,\n.ant-calendar-next-month-btn-day .ant-calendar-date,\n.ant-calendar-last-month-cell .ant-calendar-date:hover,\n.ant-calendar-next-month-btn-day .ant-calendar-date:hover {\n  color: rgba(0, 0, 0, 0.25);\n  background: transparent;\n  border-color: transparent;\n}\n.ant-calendar-disabled-cell .ant-calendar-date {\n  position: relative;\n  width: auto;\n  color: rgba(0, 0, 0, 0.25);\n  background: #f5f5f5;\n  border: 1px solid transparent;\n  border-radius: 0;\n  cursor: not-allowed;\n}\n.ant-calendar-disabled-cell .ant-calendar-date:hover {\n  background: #f5f5f5;\n}\n.ant-calendar-disabled-cell.ant-calendar-selected-day .ant-calendar-date::before {\n  position: absolute;\n  top: -1px;\n  left: 5px;\n  width: 24px;\n  height: 24px;\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  content: '';\n}\n.ant-calendar-disabled-cell.ant-calendar-today .ant-calendar-date {\n  position: relative;\n  padding-right: 5px;\n  padding-left: 5px;\n}\n.ant-calendar-disabled-cell.ant-calendar-today .ant-calendar-date::before {\n  position: absolute;\n  top: -1px;\n  left: 5px;\n  width: 24px;\n  height: 24px;\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  border-radius: 2px;\n  content: ' ';\n}\n.ant-calendar-disabled-cell-first-of-row .ant-calendar-date {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.ant-calendar-disabled-cell-last-of-row .ant-calendar-date {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.ant-calendar-footer {\n  padding: 0 12px;\n  line-height: 38px;\n  border-top: 1px solid #e8e8e8;\n}\n.ant-calendar-footer:empty {\n  border-top: 0;\n}\n.ant-calendar-footer-btn {\n  display: block;\n  text-align: center;\n}\n.ant-calendar-footer-extra {\n  text-align: left;\n}\n.ant-calendar .ant-calendar-today-btn,\n.ant-calendar .ant-calendar-clear-btn {\n  display: inline-block;\n  margin: 0 0 0 8px;\n  text-align: center;\n}\n.ant-calendar .ant-calendar-today-btn-disabled,\n.ant-calendar .ant-calendar-clear-btn-disabled {\n  color: rgba(0, 0, 0, 0.25);\n  cursor: not-allowed;\n}\n.ant-calendar .ant-calendar-today-btn:only-child,\n.ant-calendar .ant-calendar-clear-btn:only-child {\n  margin: 0;\n}\n.ant-calendar .ant-calendar-clear-btn {\n  position: absolute;\n  top: 7px;\n  right: 5px;\n  display: none;\n  width: 20px;\n  height: 20px;\n  margin: 0;\n  overflow: hidden;\n  line-height: 20px;\n  text-align: center;\n  text-indent: -76px;\n}\n.ant-calendar .ant-calendar-clear-btn::after {\n  display: inline-block;\n  width: 20px;\n  color: rgba(0, 0, 0, 0.25);\n  font-size: 14px;\n  line-height: 1;\n  text-indent: 43px;\n  transition: color 0.3s ease;\n}\n.ant-calendar .ant-calendar-clear-btn:hover::after {\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-calendar .ant-calendar-ok-btn {\n  position: relative;\n  display: inline-block;\n  font-weight: 400;\n  white-space: nowrap;\n  text-align: center;\n  background-image: none;\n  border: 1px solid transparent;\n  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  user-select: none;\n  touch-action: manipulation;\n  height: 32px;\n  padding: 0 15px;\n  color: #fff;\n  background-color: #1890ff;\n  border-color: #1890ff;\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);\n  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);\n  height: 24px;\n  padding: 0 7px;\n  font-size: 14px;\n  border-radius: 4px;\n  line-height: 22px;\n}\n.ant-calendar .ant-calendar-ok-btn > .anticon {\n  line-height: 1;\n}\n.ant-calendar .ant-calendar-ok-btn,\n.ant-calendar .ant-calendar-ok-btn:active,\n.ant-calendar .ant-calendar-ok-btn:focus {\n  outline: 0;\n}\n.ant-calendar .ant-calendar-ok-btn:not([disabled]):hover {\n  text-decoration: none;\n}\n.ant-calendar .ant-calendar-ok-btn:not([disabled]):active {\n  outline: 0;\n  box-shadow: none;\n}\n.ant-calendar .ant-calendar-ok-btn.disabled,\n.ant-calendar .ant-calendar-ok-btn[disabled] {\n  cursor: not-allowed;\n}\n.ant-calendar .ant-calendar-ok-btn.disabled > *,\n.ant-calendar .ant-calendar-ok-btn[disabled] > * {\n  pointer-events: none;\n}\n.ant-calendar .ant-calendar-ok-btn-lg {\n  height: 40px;\n  padding: 0 15px;\n  font-size: 16px;\n  border-radius: 4px;\n}\n.ant-calendar .ant-calendar-ok-btn-sm {\n  height: 24px;\n  padding: 0 7px;\n  font-size: 14px;\n  border-radius: 4px;\n}\n.ant-calendar .ant-calendar-ok-btn > a:only-child {\n  color: currentColor;\n}\n.ant-calendar .ant-calendar-ok-btn > a:only-child::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: transparent;\n  content: '';\n}\n.ant-calendar .ant-calendar-ok-btn:hover,\n.ant-calendar .ant-calendar-ok-btn:focus {\n  color: #fff;\n  background-color: #40a9ff;\n  border-color: #40a9ff;\n}\n.ant-calendar .ant-calendar-ok-btn:hover > a:only-child,\n.ant-calendar .ant-calendar-ok-btn:focus > a:only-child {\n  color: currentColor;\n}\n.ant-calendar .ant-calendar-ok-btn:hover > a:only-child::after,\n.ant-calendar .ant-calendar-ok-btn:focus > a:only-child::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: transparent;\n  content: '';\n}\n.ant-calendar .ant-calendar-ok-btn:active,\n.ant-calendar .ant-calendar-ok-btn.active {\n  color: #fff;\n  background-color: #096dd9;\n  border-color: #096dd9;\n}\n.ant-calendar .ant-calendar-ok-btn:active > a:only-child,\n.ant-calendar .ant-calendar-ok-btn.active > a:only-child {\n  color: currentColor;\n}\n.ant-calendar .ant-calendar-ok-btn:active > a:only-child::after,\n.ant-calendar .ant-calendar-ok-btn.active > a:only-child::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: transparent;\n  content: '';\n}\n.ant-calendar .ant-calendar-ok-btn-disabled,\n.ant-calendar .ant-calendar-ok-btn.disabled,\n.ant-calendar .ant-calendar-ok-btn[disabled],\n.ant-calendar .ant-calendar-ok-btn-disabled:hover,\n.ant-calendar .ant-calendar-ok-btn.disabled:hover,\n.ant-calendar .ant-calendar-ok-btn[disabled]:hover,\n.ant-calendar .ant-calendar-ok-btn-disabled:focus,\n.ant-calendar .ant-calendar-ok-btn.disabled:focus,\n.ant-calendar .ant-calendar-ok-btn[disabled]:focus,\n.ant-calendar .ant-calendar-ok-btn-disabled:active,\n.ant-calendar .ant-calendar-ok-btn.disabled:active,\n.ant-calendar .ant-calendar-ok-btn[disabled]:active,\n.ant-calendar .ant-calendar-ok-btn-disabled.active,\n.ant-calendar .ant-calendar-ok-btn.disabled.active,\n.ant-calendar .ant-calendar-ok-btn[disabled].active {\n  color: rgba(0, 0, 0, 0.25);\n  background-color: #f5f5f5;\n  border-color: #d9d9d9;\n  text-shadow: none;\n  box-shadow: none;\n}\n.ant-calendar .ant-calendar-ok-btn-disabled > a:only-child,\n.ant-calendar .ant-calendar-ok-btn.disabled > a:only-child,\n.ant-calendar .ant-calendar-ok-btn[disabled] > a:only-child,\n.ant-calendar .ant-calendar-ok-btn-disabled:hover > a:only-child,\n.ant-calendar .ant-calendar-ok-btn.disabled:hover > a:only-child,\n.ant-calendar .ant-calendar-ok-btn[disabled]:hover > a:only-child,\n.ant-calendar .ant-calendar-ok-btn-disabled:focus > a:only-child,\n.ant-calendar .ant-calendar-ok-btn.disabled:focus > a:only-child,\n.ant-calendar .ant-calendar-ok-btn[disabled]:focus > a:only-child,\n.ant-calendar .ant-calendar-ok-btn-disabled:active > a:only-child,\n.ant-calendar .ant-calendar-ok-btn.disabled:active > a:only-child,\n.ant-calendar .ant-calendar-ok-btn[disabled]:active > a:only-child,\n.ant-calendar .ant-calendar-ok-btn-disabled.active > a:only-child,\n.ant-calendar .ant-calendar-ok-btn.disabled.active > a:only-child,\n.ant-calendar .ant-calendar-ok-btn[disabled].active > a:only-child {\n  color: currentColor;\n}\n.ant-calendar .ant-calendar-ok-btn-disabled > a:only-child::after,\n.ant-calendar .ant-calendar-ok-btn.disabled > a:only-child::after,\n.ant-calendar .ant-calendar-ok-btn[disabled] > a:only-child::after,\n.ant-calendar .ant-calendar-ok-btn-disabled:hover > a:only-child::after,\n.ant-calendar .ant-calendar-ok-btn.disabled:hover > a:only-child::after,\n.ant-calendar .ant-calendar-ok-btn[disabled]:hover > a:only-child::after,\n.ant-calendar .ant-calendar-ok-btn-disabled:focus > a:only-child::after,\n.ant-calendar .ant-calendar-ok-btn.disabled:focus > a:only-child::after,\n.ant-calendar .ant-calendar-ok-btn[disabled]:focus > a:only-child::after,\n.ant-calendar .ant-calendar-ok-btn-disabled:active > a:only-child::after,\n.ant-calendar .ant-calendar-ok-btn.disabled:active > a:only-child::after,\n.ant-calendar .ant-calendar-ok-btn[disabled]:active > a:only-child::after,\n.ant-calendar .ant-calendar-ok-btn-disabled.active > a:only-child::after,\n.ant-calendar .ant-calendar-ok-btn.disabled.active > a:only-child::after,\n.ant-calendar .ant-calendar-ok-btn[disabled].active > a:only-child::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: transparent;\n  content: '';\n}\n.ant-calendar .ant-calendar-ok-btn-disabled,\n.ant-calendar .ant-calendar-ok-btn.disabled,\n.ant-calendar .ant-calendar-ok-btn[disabled],\n.ant-calendar .ant-calendar-ok-btn-disabled:hover,\n.ant-calendar .ant-calendar-ok-btn.disabled:hover,\n.ant-calendar .ant-calendar-ok-btn[disabled]:hover,\n.ant-calendar .ant-calendar-ok-btn-disabled:focus,\n.ant-calendar .ant-calendar-ok-btn.disabled:focus,\n.ant-calendar .ant-calendar-ok-btn[disabled]:focus,\n.ant-calendar .ant-calendar-ok-btn-disabled:active,\n.ant-calendar .ant-calendar-ok-btn.disabled:active,\n.ant-calendar .ant-calendar-ok-btn[disabled]:active,\n.ant-calendar .ant-calendar-ok-btn-disabled.active,\n.ant-calendar .ant-calendar-ok-btn.disabled.active,\n.ant-calendar .ant-calendar-ok-btn[disabled].active {\n  color: rgba(0, 0, 0, 0.25);\n  background-color: #f5f5f5;\n  border-color: #d9d9d9;\n  text-shadow: none;\n  box-shadow: none;\n}\n.ant-calendar .ant-calendar-ok-btn-disabled > a:only-child,\n.ant-calendar .ant-calendar-ok-btn.disabled > a:only-child,\n.ant-calendar .ant-calendar-ok-btn[disabled] > a:only-child,\n.ant-calendar .ant-calendar-ok-btn-disabled:hover > a:only-child,\n.ant-calendar .ant-calendar-ok-btn.disabled:hover > a:only-child,\n.ant-calendar .ant-calendar-ok-btn[disabled]:hover > a:only-child,\n.ant-calendar .ant-calendar-ok-btn-disabled:focus > a:only-child,\n.ant-calendar .ant-calendar-ok-btn.disabled:focus > a:only-child,\n.ant-calendar .ant-calendar-ok-btn[disabled]:focus > a:only-child,\n.ant-calendar .ant-calendar-ok-btn-disabled:active > a:only-child,\n.ant-calendar .ant-calendar-ok-btn.disabled:active > a:only-child,\n.ant-calendar .ant-calendar-ok-btn[disabled]:active > a:only-child,\n.ant-calendar .ant-calendar-ok-btn-disabled.active > a:only-child,\n.ant-calendar .ant-calendar-ok-btn.disabled.active > a:only-child,\n.ant-calendar .ant-calendar-ok-btn[disabled].active > a:only-child {\n  color: currentColor;\n}\n.ant-calendar .ant-calendar-ok-btn-disabled > a:only-child::after,\n.ant-calendar .ant-calendar-ok-btn.disabled > a:only-child::after,\n.ant-calendar .ant-calendar-ok-btn[disabled] > a:only-child::after,\n.ant-calendar .ant-calendar-ok-btn-disabled:hover > a:only-child::after,\n.ant-calendar .ant-calendar-ok-btn.disabled:hover > a:only-child::after,\n.ant-calendar .ant-calendar-ok-btn[disabled]:hover > a:only-child::after,\n.ant-calendar .ant-calendar-ok-btn-disabled:focus > a:only-child::after,\n.ant-calendar .ant-calendar-ok-btn.disabled:focus > a:only-child::after,\n.ant-calendar .ant-calendar-ok-btn[disabled]:focus > a:only-child::after,\n.ant-calendar .ant-calendar-ok-btn-disabled:active > a:only-child::after,\n.ant-calendar .ant-calendar-ok-btn.disabled:active > a:only-child::after,\n.ant-calendar .ant-calendar-ok-btn[disabled]:active > a:only-child::after,\n.ant-calendar .ant-calendar-ok-btn-disabled.active > a:only-child::after,\n.ant-calendar .ant-calendar-ok-btn.disabled.active > a:only-child::after,\n.ant-calendar .ant-calendar-ok-btn[disabled].active > a:only-child::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: transparent;\n  content: '';\n}\n.ant-calendar-range-picker-input {\n  width: 44%;\n  height: 99%;\n  text-align: center;\n  background-color: transparent;\n  border: 0;\n  outline: 0;\n}\n.ant-calendar-range-picker-input::-moz-placeholder {\n  color: #bfbfbf;\n  opacity: 1;\n}\n.ant-calendar-range-picker-input:-ms-input-placeholder {\n  color: #bfbfbf;\n}\n.ant-calendar-range-picker-input::-webkit-input-placeholder {\n  color: #bfbfbf;\n}\n.ant-calendar-range-picker-input:placeholder-shown {\n  text-overflow: ellipsis;\n}\n.ant-calendar-range-picker-input[disabled] {\n  cursor: not-allowed;\n}\n.ant-calendar-range-picker-separator {\n  display: inline-block;\n  min-width: 10px;\n  height: 100%;\n  color: rgba(0, 0, 0, 0.45);\n  white-space: nowrap;\n  text-align: center;\n  vertical-align: top;\n  pointer-events: none;\n}\n.ant-calendar-range {\n  width: 552px;\n  overflow: hidden;\n}\n.ant-calendar-range .ant-calendar-date-panel::after {\n  display: block;\n  clear: both;\n  height: 0;\n  visibility: hidden;\n  content: '.';\n}\n.ant-calendar-range-part {\n  position: relative;\n  width: 50%;\n}\n.ant-calendar-range-left {\n  float: left;\n}\n.ant-calendar-range-left .ant-calendar-time-picker-inner {\n  border-right: 1px solid #e8e8e8;\n}\n.ant-calendar-range-right {\n  float: right;\n}\n.ant-calendar-range-right .ant-calendar-time-picker-inner {\n  border-left: 1px solid #e8e8e8;\n}\n.ant-calendar-range-middle {\n  position: absolute;\n  left: 50%;\n  z-index: 1;\n  height: 34px;\n  margin: 1px 0 0 0;\n  padding: 0 200px 0 0;\n  color: rgba(0, 0, 0, 0.45);\n  line-height: 34px;\n  text-align: center;\n  transform: translateX(-50%);\n  pointer-events: none;\n}\n.ant-calendar-range-right .ant-calendar-date-input-wrap {\n  margin-left: -90px;\n}\n.ant-calendar-range.ant-calendar-time .ant-calendar-range-middle {\n  padding: 0 10px 0 0;\n  transform: translateX(-50%);\n}\n.ant-calendar-range .ant-calendar-today :not(.ant-calendar-disabled-cell) :not(.ant-calendar-last-month-cell) :not(.ant-calendar-next-month-btn-day) .ant-calendar-date {\n  color: #1890ff;\n  background: #bae7ff;\n  border-color: #1890ff;\n}\n.ant-calendar-range .ant-calendar-selected-start-date .ant-calendar-date,\n.ant-calendar-range .ant-calendar-selected-end-date .ant-calendar-date {\n  color: #fff;\n  background: #1890ff;\n  border: 1px solid transparent;\n}\n.ant-calendar-range .ant-calendar-selected-start-date .ant-calendar-date:hover,\n.ant-calendar-range .ant-calendar-selected-end-date .ant-calendar-date:hover {\n  background: #1890ff;\n}\n.ant-calendar-range.ant-calendar-time .ant-calendar-range-right .ant-calendar-date-input-wrap {\n  margin-left: 0;\n}\n.ant-calendar-range .ant-calendar-input-wrap {\n  position: relative;\n  height: 34px;\n}\n.ant-calendar-range .ant-calendar-input,\n.ant-calendar-range .ant-calendar-time-picker-input {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: 32px;\n  padding: 4px 11px;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  line-height: 1.5;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n  transition: all 0.3s;\n  height: 24px;\n  padding-right: 0;\n  padding-left: 0;\n  line-height: 24px;\n  border: 0;\n  box-shadow: none;\n}\n.ant-calendar-range .ant-calendar-input::-moz-placeholder,\n.ant-calendar-range .ant-calendar-time-picker-input::-moz-placeholder {\n  color: #bfbfbf;\n  opacity: 1;\n}\n.ant-calendar-range .ant-calendar-input:-ms-input-placeholder,\n.ant-calendar-range .ant-calendar-time-picker-input:-ms-input-placeholder {\n  color: #bfbfbf;\n}\n.ant-calendar-range .ant-calendar-input::-webkit-input-placeholder,\n.ant-calendar-range .ant-calendar-time-picker-input::-webkit-input-placeholder {\n  color: #bfbfbf;\n}\n.ant-calendar-range .ant-calendar-input:placeholder-shown,\n.ant-calendar-range .ant-calendar-time-picker-input:placeholder-shown {\n  text-overflow: ellipsis;\n}\n.ant-calendar-range .ant-calendar-input:hover,\n.ant-calendar-range .ant-calendar-time-picker-input:hover {\n  border-color: #40a9ff;\n  border-right-width: 1px !important;\n}\n.ant-calendar-range .ant-calendar-input:focus,\n.ant-calendar-range .ant-calendar-time-picker-input:focus {\n  border-color: #40a9ff;\n  border-right-width: 1px !important;\n  outline: 0;\n  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);\n}\n.ant-calendar-range .ant-calendar-input-disabled,\n.ant-calendar-range .ant-calendar-time-picker-input-disabled {\n  color: rgba(0, 0, 0, 0.25);\n  background-color: #f5f5f5;\n  cursor: not-allowed;\n  opacity: 1;\n}\n.ant-calendar-range .ant-calendar-input-disabled:hover,\n.ant-calendar-range .ant-calendar-time-picker-input-disabled:hover {\n  border-color: #d9d9d9;\n  border-right-width: 1px !important;\n}\n.ant-calendar-range .ant-calendar-input[disabled],\n.ant-calendar-range .ant-calendar-time-picker-input[disabled] {\n  color: rgba(0, 0, 0, 0.25);\n  background-color: #f5f5f5;\n  cursor: not-allowed;\n  opacity: 1;\n}\n.ant-calendar-range .ant-calendar-input[disabled]:hover,\n.ant-calendar-range .ant-calendar-time-picker-input[disabled]:hover {\n  border-color: #d9d9d9;\n  border-right-width: 1px !important;\n}\ntextarea.ant-calendar-range .ant-calendar-input,\ntextarea.ant-calendar-range .ant-calendar-time-picker-input {\n  max-width: 100%;\n  height: auto;\n  min-height: 32px;\n  line-height: 1.5;\n  vertical-align: bottom;\n  transition: all 0.3s, height 0s;\n}\n.ant-calendar-range .ant-calendar-input-lg,\n.ant-calendar-range .ant-calendar-time-picker-input-lg {\n  height: 40px;\n  padding: 6px 11px;\n  font-size: 16px;\n}\n.ant-calendar-range .ant-calendar-input-sm,\n.ant-calendar-range .ant-calendar-time-picker-input-sm {\n  height: 24px;\n  padding: 1px 7px;\n}\n.ant-calendar-range .ant-calendar-input:focus,\n.ant-calendar-range .ant-calendar-time-picker-input:focus {\n  box-shadow: none;\n}\n.ant-calendar-range .ant-calendar-time-picker-icon {\n  display: none;\n}\n.ant-calendar-range.ant-calendar-week-number {\n  width: 574px;\n}\n.ant-calendar-range.ant-calendar-week-number .ant-calendar-range-part {\n  width: 286px;\n}\n.ant-calendar-range .ant-calendar-year-panel,\n.ant-calendar-range .ant-calendar-month-panel,\n.ant-calendar-range .ant-calendar-decade-panel {\n  top: 34px;\n}\n.ant-calendar-range .ant-calendar-month-panel .ant-calendar-year-panel {\n  top: 0;\n}\n.ant-calendar-range .ant-calendar-decade-panel-table,\n.ant-calendar-range .ant-calendar-year-panel-table,\n.ant-calendar-range .ant-calendar-month-panel-table {\n  height: 208px;\n}\n.ant-calendar-range .ant-calendar-in-range-cell {\n  position: relative;\n  border-radius: 0;\n}\n.ant-calendar-range .ant-calendar-in-range-cell > div {\n  position: relative;\n  z-index: 1;\n}\n.ant-calendar-range .ant-calendar-in-range-cell::before {\n  position: absolute;\n  top: 4px;\n  right: 0;\n  bottom: 4px;\n  left: 0;\n  display: block;\n  background: #e6f7ff;\n  border: 0;\n  border-radius: 0;\n  content: '';\n}\n.ant-calendar-range .ant-calendar-footer-extra {\n  float: left;\n}\ndiv.ant-calendar-range-quick-selector {\n  text-align: left;\n}\ndiv.ant-calendar-range-quick-selector > a {\n  margin-right: 8px;\n}\n.ant-calendar-range .ant-calendar-header,\n.ant-calendar-range .ant-calendar-month-panel-header,\n.ant-calendar-range .ant-calendar-year-panel-header,\n.ant-calendar-range .ant-calendar-decade-panel-header {\n  border-bottom: 0;\n}\n.ant-calendar-range .ant-calendar-body,\n.ant-calendar-range .ant-calendar-month-panel-body,\n.ant-calendar-range .ant-calendar-year-panel-body,\n.ant-calendar-range .ant-calendar-decade-panel-body {\n  border-top: 1px solid #e8e8e8;\n}\n.ant-calendar-range.ant-calendar-time .ant-calendar-time-picker {\n  top: 68px;\n  z-index: 2;\n  width: 100%;\n  height: 207px;\n}\n.ant-calendar-range.ant-calendar-time .ant-calendar-time-picker-panel {\n  height: 267px;\n  margin-top: -34px;\n}\n.ant-calendar-range.ant-calendar-time .ant-calendar-time-picker-inner {\n  height: 100%;\n  padding-top: 40px;\n  background: none;\n}\n.ant-calendar-range.ant-calendar-time .ant-calendar-time-picker-combobox {\n  display: inline-block;\n  height: 100%;\n  background-color: #fff;\n  border-top: 1px solid #e8e8e8;\n}\n.ant-calendar-range.ant-calendar-time .ant-calendar-time-picker-select {\n  height: 100%;\n}\n.ant-calendar-range.ant-calendar-time .ant-calendar-time-picker-select ul {\n  max-height: 100%;\n}\n.ant-calendar-range.ant-calendar-time .ant-calendar-footer .ant-calendar-time-picker-btn {\n  margin-right: 8px;\n}\n.ant-calendar-range.ant-calendar-time .ant-calendar-today-btn {\n  height: 22px;\n  margin: 8px 12px;\n  line-height: 22px;\n}\n.ant-calendar-range-with-ranges.ant-calendar-time .ant-calendar-time-picker {\n  height: 233px;\n}\n.ant-calendar-range.ant-calendar-show-time-picker .ant-calendar-body {\n  border-top-color: transparent;\n}\n.ant-calendar-time-picker {\n  position: absolute;\n  top: 40px;\n  width: 100%;\n  background-color: #fff;\n}\n.ant-calendar-time-picker-panel {\n  position: absolute;\n  z-index: 1050;\n  width: 100%;\n}\n.ant-calendar-time-picker-inner {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  overflow: hidden;\n  font-size: 14px;\n  line-height: 1.5;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  outline: none;\n}\n.ant-calendar-time-picker-combobox {\n  width: 100%;\n}\n.ant-calendar-time-picker-column-1,\n.ant-calendar-time-picker-column-1 .ant-calendar-time-picker-select {\n  width: 100%;\n}\n.ant-calendar-time-picker-column-2 .ant-calendar-time-picker-select {\n  width: 50%;\n}\n.ant-calendar-time-picker-column-3 .ant-calendar-time-picker-select {\n  width: 33.33%;\n}\n.ant-calendar-time-picker-column-4 .ant-calendar-time-picker-select {\n  width: 25%;\n}\n.ant-calendar-time-picker-input-wrap {\n  display: none;\n}\n.ant-calendar-time-picker-select {\n  position: relative;\n  float: left;\n  height: 226px;\n  overflow: hidden;\n  font-size: 14px;\n  border-right: 1px solid #e8e8e8;\n}\n.ant-calendar-time-picker-select:hover {\n  overflow-y: auto;\n}\n.ant-calendar-time-picker-select:first-child {\n  margin-left: 0;\n  border-left: 0;\n}\n.ant-calendar-time-picker-select:last-child {\n  border-right: 0;\n}\n.ant-calendar-time-picker-select ul {\n  width: 100%;\n  max-height: 206px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.ant-calendar-time-picker-select li {\n  width: 100%;\n  height: 24px;\n  margin: 0;\n  line-height: 24px;\n  text-align: center;\n  list-style: none;\n  cursor: pointer;\n  transition: all 0.3s;\n  user-select: none;\n}\n.ant-calendar-time-picker-select li:last-child::after {\n  display: block;\n  height: 202px;\n  content: '';\n}\n.ant-calendar-time-picker-select li:hover {\n  background: #e6f7ff;\n}\n.ant-calendar-time-picker-select li:focus {\n  color: #1890ff;\n  font-weight: 600;\n  outline: none;\n}\nli.ant-calendar-time-picker-select-option-selected {\n  font-weight: 600;\n  background: #f5f5f5;\n}\nli.ant-calendar-time-picker-select-option-disabled {\n  color: rgba(0, 0, 0, 0.25);\n}\nli.ant-calendar-time-picker-select-option-disabled:hover {\n  background: transparent;\n  cursor: not-allowed;\n}\n.ant-calendar-time .ant-calendar-day-select {\n  display: inline-block;\n  padding: 0 2px;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n  line-height: 34px;\n}\n.ant-calendar-time .ant-calendar-footer {\n  position: relative;\n  height: auto;\n}\n.ant-calendar-time .ant-calendar-footer-btn {\n  text-align: right;\n}\n.ant-calendar-time .ant-calendar-footer .ant-calendar-today-btn {\n  float: left;\n  margin: 0;\n}\n.ant-calendar-time .ant-calendar-footer .ant-calendar-time-picker-btn {\n  display: inline-block;\n  margin-right: 8px;\n}\n.ant-calendar-time .ant-calendar-footer .ant-calendar-time-picker-btn-disabled {\n  color: rgba(0, 0, 0, 0.25);\n}\n.ant-calendar-month-panel {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 10;\n  background: #fff;\n  border-radius: 4px;\n  outline: none;\n}\n.ant-calendar-month-panel > div {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.ant-calendar-month-panel-hidden {\n  display: none;\n}\n.ant-calendar-month-panel-header {\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  border-bottom: 1px solid #e8e8e8;\n  user-select: none;\n  position: relative;\n}\n.ant-calendar-month-panel-header a:hover {\n  color: #40a9ff;\n}\n.ant-calendar-month-panel-header .ant-calendar-month-panel-century-select,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-decade-select,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-year-select,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-month-select {\n  display: inline-block;\n  padding: 0 2px;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n  line-height: 40px;\n}\n.ant-calendar-month-panel-header .ant-calendar-month-panel-century-select-arrow,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-decade-select-arrow,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-year-select-arrow,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-month-select-arrow {\n  display: none;\n}\n.ant-calendar-month-panel-header .ant-calendar-month-panel-prev-century-btn,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-century-btn,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-prev-decade-btn,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-decade-btn,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-prev-month-btn,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-month-btn,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-prev-year-btn,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-year-btn {\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  padding: 0 5px;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 16px;\n  font-family: Arial, 'Hiragino Sans GB', 'Microsoft Yahei', 'Microsoft Sans Serif', sans-serif;\n  line-height: 40px;\n}\n.ant-calendar-month-panel-header .ant-calendar-month-panel-prev-century-btn,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-prev-decade-btn,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-prev-year-btn {\n  left: 7px;\n  height: 100%;\n}\n.ant-calendar-month-panel-header .ant-calendar-month-panel-prev-century-btn::before,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-prev-decade-btn::before,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-prev-year-btn::before,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-prev-century-btn::after,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-prev-decade-btn::after,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-prev-year-btn::after {\n  position: relative;\n  top: -1px;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  vertical-align: middle;\n  border: 0 solid #aaa;\n  border-width: 1.5px 0 0 1.5px;\n  border-radius: 1px;\n  transform: rotate(-45deg) scale(0.8);\n  transition: all 0.3s;\n  content: '';\n}\n.ant-calendar-month-panel-header .ant-calendar-month-panel-prev-century-btn:hover::before,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-prev-decade-btn:hover::before,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-prev-year-btn:hover::before,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-prev-century-btn:hover::after,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-prev-decade-btn:hover::after,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-prev-year-btn:hover::after {\n  border-color: rgba(0, 0, 0, 0.65);\n}\n.ant-calendar-month-panel-header .ant-calendar-month-panel-prev-century-btn::after,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-prev-decade-btn::after,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-prev-year-btn::after {\n  display: none;\n}\n.ant-calendar-month-panel-header .ant-calendar-month-panel-prev-century-btn::after,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-prev-decade-btn::after,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-prev-year-btn::after {\n  position: relative;\n  left: -3px;\n  display: inline-block;\n}\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-century-btn,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-decade-btn,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-year-btn {\n  right: 7px;\n  height: 100%;\n}\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-century-btn::before,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-decade-btn::before,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-year-btn::before,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-century-btn::after,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-decade-btn::after,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-year-btn::after {\n  position: relative;\n  top: -1px;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  vertical-align: middle;\n  border: 0 solid #aaa;\n  border-width: 1.5px 0 0 1.5px;\n  border-radius: 1px;\n  transform: rotate(-45deg) scale(0.8);\n  transition: all 0.3s;\n  content: '';\n}\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-century-btn:hover::before,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-decade-btn:hover::before,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-year-btn:hover::before,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-century-btn:hover::after,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-decade-btn:hover::after,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-year-btn:hover::after {\n  border-color: rgba(0, 0, 0, 0.65);\n}\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-century-btn::after,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-decade-btn::after,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-year-btn::after {\n  display: none;\n}\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-century-btn::before,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-decade-btn::before,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-year-btn::before,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-century-btn::after,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-decade-btn::after,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-year-btn::after {\n  transform: rotate(135deg) scale(0.8);\n}\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-century-btn::before,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-decade-btn::before,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-year-btn::before {\n  position: relative;\n  left: 3px;\n}\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-century-btn::after,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-decade-btn::after,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-year-btn::after {\n  display: inline-block;\n}\n.ant-calendar-month-panel-header .ant-calendar-month-panel-prev-month-btn {\n  left: 29px;\n  height: 100%;\n}\n.ant-calendar-month-panel-header .ant-calendar-month-panel-prev-month-btn::before,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-prev-month-btn::after {\n  position: relative;\n  top: -1px;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  vertical-align: middle;\n  border: 0 solid #aaa;\n  border-width: 1.5px 0 0 1.5px;\n  border-radius: 1px;\n  transform: rotate(-45deg) scale(0.8);\n  transition: all 0.3s;\n  content: '';\n}\n.ant-calendar-month-panel-header .ant-calendar-month-panel-prev-month-btn:hover::before,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-prev-month-btn:hover::after {\n  border-color: rgba(0, 0, 0, 0.65);\n}\n.ant-calendar-month-panel-header .ant-calendar-month-panel-prev-month-btn::after {\n  display: none;\n}\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-month-btn {\n  right: 29px;\n  height: 100%;\n}\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-month-btn::before,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-month-btn::after {\n  position: relative;\n  top: -1px;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  vertical-align: middle;\n  border: 0 solid #aaa;\n  border-width: 1.5px 0 0 1.5px;\n  border-radius: 1px;\n  transform: rotate(-45deg) scale(0.8);\n  transition: all 0.3s;\n  content: '';\n}\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-month-btn:hover::before,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-month-btn:hover::after {\n  border-color: rgba(0, 0, 0, 0.65);\n}\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-month-btn::after {\n  display: none;\n}\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-month-btn::before,\n.ant-calendar-month-panel-header .ant-calendar-month-panel-next-month-btn::after {\n  transform: rotate(135deg) scale(0.8);\n}\n.ant-calendar-month-panel-body {\n  flex: 1;\n}\n.ant-calendar-month-panel-footer {\n  border-top: 1px solid #e8e8e8;\n}\n.ant-calendar-month-panel-footer .ant-calendar-footer-extra {\n  padding: 0 12px;\n}\n.ant-calendar-month-panel-table {\n  width: 100%;\n  height: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n}\n.ant-calendar-month-panel-selected-cell .ant-calendar-month-panel-month {\n  color: #fff;\n  background: #1890ff;\n}\n.ant-calendar-month-panel-selected-cell .ant-calendar-month-panel-month:hover {\n  color: #fff;\n  background: #1890ff;\n}\n.ant-calendar-month-panel-cell {\n  text-align: center;\n}\n.ant-calendar-month-panel-cell-disabled .ant-calendar-month-panel-month,\n.ant-calendar-month-panel-cell-disabled .ant-calendar-month-panel-month:hover {\n  color: rgba(0, 0, 0, 0.25);\n  background: #f5f5f5;\n  cursor: not-allowed;\n}\n.ant-calendar-month-panel-month {\n  display: inline-block;\n  height: 24px;\n  margin: 0 auto;\n  padding: 0 8px;\n  color: rgba(0, 0, 0, 0.65);\n  line-height: 24px;\n  text-align: center;\n  background: transparent;\n  border-radius: 2px;\n  transition: background 0.3s ease;\n}\n.ant-calendar-month-panel-month:hover {\n  background: #e6f7ff;\n  cursor: pointer;\n}\n.ant-calendar-year-panel {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 10;\n  background: #fff;\n  border-radius: 4px;\n  outline: none;\n}\n.ant-calendar-year-panel > div {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.ant-calendar-year-panel-hidden {\n  display: none;\n}\n.ant-calendar-year-panel-header {\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  border-bottom: 1px solid #e8e8e8;\n  user-select: none;\n  position: relative;\n}\n.ant-calendar-year-panel-header a:hover {\n  color: #40a9ff;\n}\n.ant-calendar-year-panel-header .ant-calendar-year-panel-century-select,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-decade-select,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-year-select,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-month-select {\n  display: inline-block;\n  padding: 0 2px;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n  line-height: 40px;\n}\n.ant-calendar-year-panel-header .ant-calendar-year-panel-century-select-arrow,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-decade-select-arrow,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-year-select-arrow,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-month-select-arrow {\n  display: none;\n}\n.ant-calendar-year-panel-header .ant-calendar-year-panel-prev-century-btn,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-century-btn,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-prev-decade-btn,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-decade-btn,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-prev-month-btn,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-month-btn,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-prev-year-btn,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-year-btn {\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  padding: 0 5px;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 16px;\n  font-family: Arial, 'Hiragino Sans GB', 'Microsoft Yahei', 'Microsoft Sans Serif', sans-serif;\n  line-height: 40px;\n}\n.ant-calendar-year-panel-header .ant-calendar-year-panel-prev-century-btn,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-prev-decade-btn,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-prev-year-btn {\n  left: 7px;\n  height: 100%;\n}\n.ant-calendar-year-panel-header .ant-calendar-year-panel-prev-century-btn::before,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-prev-decade-btn::before,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-prev-year-btn::before,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-prev-century-btn::after,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-prev-decade-btn::after,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-prev-year-btn::after {\n  position: relative;\n  top: -1px;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  vertical-align: middle;\n  border: 0 solid #aaa;\n  border-width: 1.5px 0 0 1.5px;\n  border-radius: 1px;\n  transform: rotate(-45deg) scale(0.8);\n  transition: all 0.3s;\n  content: '';\n}\n.ant-calendar-year-panel-header .ant-calendar-year-panel-prev-century-btn:hover::before,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-prev-decade-btn:hover::before,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-prev-year-btn:hover::before,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-prev-century-btn:hover::after,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-prev-decade-btn:hover::after,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-prev-year-btn:hover::after {\n  border-color: rgba(0, 0, 0, 0.65);\n}\n.ant-calendar-year-panel-header .ant-calendar-year-panel-prev-century-btn::after,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-prev-decade-btn::after,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-prev-year-btn::after {\n  display: none;\n}\n.ant-calendar-year-panel-header .ant-calendar-year-panel-prev-century-btn::after,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-prev-decade-btn::after,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-prev-year-btn::after {\n  position: relative;\n  left: -3px;\n  display: inline-block;\n}\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-century-btn,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-decade-btn,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-year-btn {\n  right: 7px;\n  height: 100%;\n}\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-century-btn::before,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-decade-btn::before,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-year-btn::before,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-century-btn::after,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-decade-btn::after,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-year-btn::after {\n  position: relative;\n  top: -1px;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  vertical-align: middle;\n  border: 0 solid #aaa;\n  border-width: 1.5px 0 0 1.5px;\n  border-radius: 1px;\n  transform: rotate(-45deg) scale(0.8);\n  transition: all 0.3s;\n  content: '';\n}\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-century-btn:hover::before,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-decade-btn:hover::before,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-year-btn:hover::before,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-century-btn:hover::after,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-decade-btn:hover::after,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-year-btn:hover::after {\n  border-color: rgba(0, 0, 0, 0.65);\n}\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-century-btn::after,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-decade-btn::after,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-year-btn::after {\n  display: none;\n}\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-century-btn::before,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-decade-btn::before,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-year-btn::before,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-century-btn::after,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-decade-btn::after,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-year-btn::after {\n  transform: rotate(135deg) scale(0.8);\n}\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-century-btn::before,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-decade-btn::before,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-year-btn::before {\n  position: relative;\n  left: 3px;\n}\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-century-btn::after,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-decade-btn::after,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-year-btn::after {\n  display: inline-block;\n}\n.ant-calendar-year-panel-header .ant-calendar-year-panel-prev-month-btn {\n  left: 29px;\n  height: 100%;\n}\n.ant-calendar-year-panel-header .ant-calendar-year-panel-prev-month-btn::before,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-prev-month-btn::after {\n  position: relative;\n  top: -1px;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  vertical-align: middle;\n  border: 0 solid #aaa;\n  border-width: 1.5px 0 0 1.5px;\n  border-radius: 1px;\n  transform: rotate(-45deg) scale(0.8);\n  transition: all 0.3s;\n  content: '';\n}\n.ant-calendar-year-panel-header .ant-calendar-year-panel-prev-month-btn:hover::before,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-prev-month-btn:hover::after {\n  border-color: rgba(0, 0, 0, 0.65);\n}\n.ant-calendar-year-panel-header .ant-calendar-year-panel-prev-month-btn::after {\n  display: none;\n}\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-month-btn {\n  right: 29px;\n  height: 100%;\n}\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-month-btn::before,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-month-btn::after {\n  position: relative;\n  top: -1px;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  vertical-align: middle;\n  border: 0 solid #aaa;\n  border-width: 1.5px 0 0 1.5px;\n  border-radius: 1px;\n  transform: rotate(-45deg) scale(0.8);\n  transition: all 0.3s;\n  content: '';\n}\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-month-btn:hover::before,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-month-btn:hover::after {\n  border-color: rgba(0, 0, 0, 0.65);\n}\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-month-btn::after {\n  display: none;\n}\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-month-btn::before,\n.ant-calendar-year-panel-header .ant-calendar-year-panel-next-month-btn::after {\n  transform: rotate(135deg) scale(0.8);\n}\n.ant-calendar-year-panel-body {\n  flex: 1;\n}\n.ant-calendar-year-panel-footer {\n  border-top: 1px solid #e8e8e8;\n}\n.ant-calendar-year-panel-footer .ant-calendar-footer-extra {\n  padding: 0 12px;\n}\n.ant-calendar-year-panel-table {\n  width: 100%;\n  height: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n}\n.ant-calendar-year-panel-cell {\n  text-align: center;\n}\n.ant-calendar-year-panel-year {\n  display: inline-block;\n  height: 24px;\n  margin: 0 auto;\n  padding: 0 8px;\n  color: rgba(0, 0, 0, 0.65);\n  line-height: 24px;\n  text-align: center;\n  background: transparent;\n  border-radius: 2px;\n  transition: background 0.3s ease;\n}\n.ant-calendar-year-panel-year:hover {\n  background: #e6f7ff;\n  cursor: pointer;\n}\n.ant-calendar-year-panel-selected-cell .ant-calendar-year-panel-year {\n  color: #fff;\n  background: #1890ff;\n}\n.ant-calendar-year-panel-selected-cell .ant-calendar-year-panel-year:hover {\n  color: #fff;\n  background: #1890ff;\n}\n.ant-calendar-year-panel-last-decade-cell .ant-calendar-year-panel-year,\n.ant-calendar-year-panel-next-decade-cell .ant-calendar-year-panel-year {\n  color: rgba(0, 0, 0, 0.25);\n  user-select: none;\n}\n.ant-calendar-decade-panel {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 10;\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n  border-radius: 4px;\n  outline: none;\n}\n.ant-calendar-decade-panel-hidden {\n  display: none;\n}\n.ant-calendar-decade-panel-header {\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  border-bottom: 1px solid #e8e8e8;\n  user-select: none;\n  position: relative;\n}\n.ant-calendar-decade-panel-header a:hover {\n  color: #40a9ff;\n}\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-century-select,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-decade-select,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-year-select,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-month-select {\n  display: inline-block;\n  padding: 0 2px;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n  line-height: 40px;\n}\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-century-select-arrow,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-decade-select-arrow,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-year-select-arrow,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-month-select-arrow {\n  display: none;\n}\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-century-btn,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-century-btn,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-decade-btn,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-decade-btn,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-month-btn,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-month-btn,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-year-btn,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-year-btn {\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  padding: 0 5px;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 16px;\n  font-family: Arial, 'Hiragino Sans GB', 'Microsoft Yahei', 'Microsoft Sans Serif', sans-serif;\n  line-height: 40px;\n}\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-century-btn,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-decade-btn,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-year-btn {\n  left: 7px;\n  height: 100%;\n}\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-century-btn::before,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-decade-btn::before,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-year-btn::before,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-century-btn::after,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-decade-btn::after,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-year-btn::after {\n  position: relative;\n  top: -1px;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  vertical-align: middle;\n  border: 0 solid #aaa;\n  border-width: 1.5px 0 0 1.5px;\n  border-radius: 1px;\n  transform: rotate(-45deg) scale(0.8);\n  transition: all 0.3s;\n  content: '';\n}\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-century-btn:hover::before,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-decade-btn:hover::before,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-year-btn:hover::before,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-century-btn:hover::after,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-decade-btn:hover::after,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-year-btn:hover::after {\n  border-color: rgba(0, 0, 0, 0.65);\n}\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-century-btn::after,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-decade-btn::after,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-year-btn::after {\n  display: none;\n}\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-century-btn::after,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-decade-btn::after,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-year-btn::after {\n  position: relative;\n  left: -3px;\n  display: inline-block;\n}\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-century-btn,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-decade-btn,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-year-btn {\n  right: 7px;\n  height: 100%;\n}\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-century-btn::before,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-decade-btn::before,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-year-btn::before,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-century-btn::after,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-decade-btn::after,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-year-btn::after {\n  position: relative;\n  top: -1px;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  vertical-align: middle;\n  border: 0 solid #aaa;\n  border-width: 1.5px 0 0 1.5px;\n  border-radius: 1px;\n  transform: rotate(-45deg) scale(0.8);\n  transition: all 0.3s;\n  content: '';\n}\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-century-btn:hover::before,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-decade-btn:hover::before,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-year-btn:hover::before,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-century-btn:hover::after,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-decade-btn:hover::after,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-year-btn:hover::after {\n  border-color: rgba(0, 0, 0, 0.65);\n}\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-century-btn::after,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-decade-btn::after,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-year-btn::after {\n  display: none;\n}\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-century-btn::before,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-decade-btn::before,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-year-btn::before,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-century-btn::after,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-decade-btn::after,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-year-btn::after {\n  transform: rotate(135deg) scale(0.8);\n}\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-century-btn::before,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-decade-btn::before,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-year-btn::before {\n  position: relative;\n  left: 3px;\n}\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-century-btn::after,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-decade-btn::after,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-year-btn::after {\n  display: inline-block;\n}\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-month-btn {\n  left: 29px;\n  height: 100%;\n}\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-month-btn::before,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-month-btn::after {\n  position: relative;\n  top: -1px;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  vertical-align: middle;\n  border: 0 solid #aaa;\n  border-width: 1.5px 0 0 1.5px;\n  border-radius: 1px;\n  transform: rotate(-45deg) scale(0.8);\n  transition: all 0.3s;\n  content: '';\n}\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-month-btn:hover::before,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-month-btn:hover::after {\n  border-color: rgba(0, 0, 0, 0.65);\n}\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-month-btn::after {\n  display: none;\n}\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-month-btn {\n  right: 29px;\n  height: 100%;\n}\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-month-btn::before,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-month-btn::after {\n  position: relative;\n  top: -1px;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  vertical-align: middle;\n  border: 0 solid #aaa;\n  border-width: 1.5px 0 0 1.5px;\n  border-radius: 1px;\n  transform: rotate(-45deg) scale(0.8);\n  transition: all 0.3s;\n  content: '';\n}\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-month-btn:hover::before,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-month-btn:hover::after {\n  border-color: rgba(0, 0, 0, 0.65);\n}\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-month-btn::after {\n  display: none;\n}\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-month-btn::before,\n.ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-month-btn::after {\n  transform: rotate(135deg) scale(0.8);\n}\n.ant-calendar-decade-panel-body {\n  flex: 1;\n}\n.ant-calendar-decade-panel-footer {\n  border-top: 1px solid #e8e8e8;\n}\n.ant-calendar-decade-panel-footer .ant-calendar-footer-extra {\n  padding: 0 12px;\n}\n.ant-calendar-decade-panel-table {\n  width: 100%;\n  height: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n}\n.ant-calendar-decade-panel-cell {\n  white-space: nowrap;\n  text-align: center;\n}\n.ant-calendar-decade-panel-decade {\n  display: inline-block;\n  height: 24px;\n  margin: 0 auto;\n  padding: 0 6px;\n  color: rgba(0, 0, 0, 0.65);\n  line-height: 24px;\n  text-align: center;\n  background: transparent;\n  border-radius: 2px;\n  transition: background 0.3s ease;\n}\n.ant-calendar-decade-panel-decade:hover {\n  background: #e6f7ff;\n  cursor: pointer;\n}\n.ant-calendar-decade-panel-selected-cell .ant-calendar-decade-panel-decade {\n  color: #fff;\n  background: #1890ff;\n}\n.ant-calendar-decade-panel-selected-cell .ant-calendar-decade-panel-decade:hover {\n  color: #fff;\n  background: #1890ff;\n}\n.ant-calendar-decade-panel-last-century-cell .ant-calendar-decade-panel-decade,\n.ant-calendar-decade-panel-next-century-cell .ant-calendar-decade-panel-decade {\n  color: rgba(0, 0, 0, 0.25);\n  user-select: none;\n}\n.ant-calendar-month .ant-calendar-month-header-wrap {\n  position: relative;\n  height: 288px;\n}\n.ant-calendar-month .ant-calendar-month-panel,\n.ant-calendar-month .ant-calendar-year-panel {\n  top: 0;\n  height: 100%;\n}\n.ant-calendar-week-number-cell {\n  opacity: 0.5;\n}\n.ant-calendar-week-number .ant-calendar-body tr {\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.ant-calendar-week-number .ant-calendar-body tr:hover {\n  background: #e6f7ff;\n}\n.ant-calendar-week-number .ant-calendar-body tr.ant-calendar-active-week {\n  font-weight: bold;\n  background: #bae7ff;\n}\n.ant-calendar-week-number .ant-calendar-body tr .ant-calendar-selected-day .ant-calendar-date,\n.ant-calendar-week-number .ant-calendar-body tr .ant-calendar-selected-day:hover .ant-calendar-date {\n  color: rgba(0, 0, 0, 0.65);\n  background: transparent;\n}\n/*# sourceMappingURL=index.css.map */";
n(css,{"prepend":true});

function mirror(o) {
  return o;
}

function mapSelf(children) {
  // return ReactFragment
  return React__default.Children.map(children, mirror);
}

function goYear$3(direction) {
  this.props.changeYear(direction);
}

function noop$3() {}

var MonthPanel = function (_React$Component) {
  _inherits$4(MonthPanel, _React$Component);

  function MonthPanel(props) {
    _classCallCheck$4(this, MonthPanel);

    var _this = _possibleConstructorReturn$4(this, _React$Component.call(this, props));

    _this.setAndSelectValue = function (value) {
      _this.setValue(value);
      _this.props.onSelect(value);
    };

    _this.setValue = function (value) {
      if ('value' in _this.props) {
        _this.setState({
          value: value
        });
      }
    };

    _this.nextYear = goYear$3.bind(_this, 1);
    _this.previousYear = goYear$3.bind(_this, -1);
    _this.prefixCls = props.rootPrefixCls + '-month-panel';

    _this.state = {
      value: props.value || props.defaultValue
    };
    return _this;
  }

  MonthPanel.getDerivedStateFromProps = function getDerivedStateFromProps(props) {
    var newState = {};

    if ('value' in props) {
      newState = {
        value: props.value
      };
    }

    return newState;
  };

  MonthPanel.prototype.render = function render() {
    var props = this.props;
    var value = this.state.value;
    var locale = props.locale,
        cellRender = props.cellRender,
        contentRender = props.contentRender,
        renderFooter = props.renderFooter;

    var year = value.year();
    var prefixCls = this.prefixCls;

    var footer = renderFooter && renderFooter('month');

    return React__default.createElement(
      'div',
      { className: prefixCls, style: props.style },
      React__default.createElement(
        'div',
        null,
        React__default.createElement(
          'div',
          { className: prefixCls + '-header' },
          React__default.createElement('a', {
            className: prefixCls + '-prev-year-btn',
            role: 'button',
            onClick: this.previousYear,
            title: locale.previousYear
          }),
          React__default.createElement(
            'a',
            {
              className: prefixCls + '-year-select',
              role: 'button',
              onClick: props.onYearPanelShow,
              title: locale.yearSelect
            },
            React__default.createElement(
              'span',
              { className: prefixCls + '-year-select-content' },
              year
            ),
            React__default.createElement(
              'span',
              { className: prefixCls + '-year-select-arrow' },
              'x'
            )
          ),
          React__default.createElement('a', {
            className: prefixCls + '-next-year-btn',
            role: 'button',
            onClick: this.nextYear,
            title: locale.nextYear
          })
        ),
        React__default.createElement(
          'div',
          { className: prefixCls + '-body' },
          React__default.createElement(MonthTable, {
            disabledDate: props.disabledDate,
            onSelect: this.setAndSelectValue,
            locale: locale,
            value: value,
            cellRender: cellRender,
            contentRender: contentRender,
            prefixCls: prefixCls
          })
        ),
        footer && React__default.createElement(
          'div',
          { className: prefixCls + '-footer' },
          footer
        )
      )
    );
  };

  return MonthPanel;
}(React__default.Component);

MonthPanel.propTypes = {
  onChange: PropTypes.func,
  disabledDate: PropTypes.func,
  onSelect: PropTypes.func,
  renderFooter: PropTypes.func,
  rootPrefixCls: PropTypes.string,
  value: PropTypes.object,
  defaultValue: PropTypes.object
};
MonthPanel.defaultProps = {
  onChange: noop$3,
  onSelect: noop$3
};


polyfill(MonthPanel);

var ROW$1 = 4;
var COL$1 = 3;

function goYear$2(direction) {
  var value = this.state.value.clone();
  value.add(direction, 'year');
  this.setState({
    value: value
  });
}

function chooseYear(year) {
  var value = this.state.value.clone();
  value.year(year);
  value.month(this.state.value.month());
  this.setState({
    value: value
  });
  this.props.onSelect(value);
}

var YearPanel = function (_React$Component) {
  _inherits$4(YearPanel, _React$Component);

  function YearPanel(props) {
    _classCallCheck$4(this, YearPanel);

    var _this = _possibleConstructorReturn$4(this, _React$Component.call(this, props));

    _this.prefixCls = props.rootPrefixCls + '-year-panel';
    _this.state = {
      value: props.value || props.defaultValue
    };
    _this.nextDecade = goYear$2.bind(_this, 10);
    _this.previousDecade = goYear$2.bind(_this, -10);
    return _this;
  }

  YearPanel.prototype.years = function years() {
    var value = this.state.value;
    var currentYear = value.year();
    var startYear = parseInt(currentYear / 10, 10) * 10;
    var previousYear = startYear - 1;
    var years = [];
    var index = 0;
    for (var rowIndex = 0; rowIndex < ROW$1; rowIndex++) {
      years[rowIndex] = [];
      for (var colIndex = 0; colIndex < COL$1; colIndex++) {
        var year = previousYear + index;
        var content = String(year);
        years[rowIndex][colIndex] = {
          content: content,
          year: year,
          title: content
        };
        index++;
      }
    }
    return years;
  };

  YearPanel.prototype.render = function render() {
    var _this2 = this;

    var props = this.props;
    var value = this.state.value;
    var locale = props.locale,
        renderFooter = props.renderFooter;

    var years = this.years();
    var currentYear = value.year();
    var startYear = parseInt(currentYear / 10, 10) * 10;
    var endYear = startYear + 9;
    var prefixCls = this.prefixCls;

    var yeasEls = years.map(function (row, index) {
      var tds = row.map(function (yearData) {
        var _classNameMap;

        var classNameMap = (_classNameMap = {}, _classNameMap[prefixCls + '-cell'] = 1, _classNameMap[prefixCls + '-selected-cell'] = yearData.year === currentYear, _classNameMap[prefixCls + '-last-decade-cell'] = yearData.year < startYear, _classNameMap[prefixCls + '-next-decade-cell'] = yearData.year > endYear, _classNameMap);
        var clickHandler = void 0;
        if (yearData.year < startYear) {
          clickHandler = _this2.previousDecade;
        } else if (yearData.year > endYear) {
          clickHandler = _this2.nextDecade;
        } else {
          clickHandler = chooseYear.bind(_this2, yearData.year);
        }
        return React__default.createElement(
          'td',
          {
            role: 'gridcell',
            title: yearData.title,
            key: yearData.content,
            onClick: clickHandler,
            className: classNames(classNameMap)
          },
          React__default.createElement(
            'a',
            {
              className: prefixCls + '-year'
            },
            yearData.content
          )
        );
      });
      return React__default.createElement(
        'tr',
        { key: index, role: 'row' },
        tds
      );
    });

    var footer = renderFooter && renderFooter('year');

    return React__default.createElement(
      'div',
      { className: this.prefixCls },
      React__default.createElement(
        'div',
        null,
        React__default.createElement(
          'div',
          { className: prefixCls + '-header' },
          React__default.createElement('a', {
            className: prefixCls + '-prev-decade-btn',
            role: 'button',
            onClick: this.previousDecade,
            title: locale.previousDecade
          }),
          React__default.createElement(
            'a',
            {
              className: prefixCls + '-decade-select',
              role: 'button',
              onClick: props.onDecadePanelShow,
              title: locale.decadeSelect
            },
            React__default.createElement(
              'span',
              { className: prefixCls + '-decade-select-content' },
              startYear,
              '-',
              endYear
            ),
            React__default.createElement(
              'span',
              { className: prefixCls + '-decade-select-arrow' },
              'x'
            )
          ),
          React__default.createElement('a', {
            className: prefixCls + '-next-decade-btn',
            role: 'button',
            onClick: this.nextDecade,
            title: locale.nextDecade
          })
        ),
        React__default.createElement(
          'div',
          { className: prefixCls + '-body' },
          React__default.createElement(
            'table',
            { className: prefixCls + '-table', cellSpacing: '0', role: 'grid' },
            React__default.createElement(
              'tbody',
              { className: prefixCls + '-tbody' },
              yeasEls
            )
          )
        ),
        footer && React__default.createElement(
          'div',
          { className: prefixCls + '-footer' },
          footer
        )
      )
    );
  };

  return YearPanel;
}(React__default.Component);


YearPanel.propTypes = {
  rootPrefixCls: PropTypes.string,
  value: PropTypes.object,
  defaultValue: PropTypes.object,
  renderFooter: PropTypes.func
};

YearPanel.defaultProps = {
  onSelect: function onSelect() {}
};

var ROW = 4;
var COL = 3;

function goYear$1(direction) {
  var next = this.state.value.clone();
  next.add(direction, 'years');
  this.setState({
    value: next
  });
}

function chooseDecade(year, event) {
  var next = this.state.value.clone();
  next.year(year);
  next.month(this.state.value.month());
  this.props.onSelect(next);
  event.preventDefault();
}

var DecadePanel = function (_React$Component) {
  _inherits$4(DecadePanel, _React$Component);

  function DecadePanel(props) {
    _classCallCheck$4(this, DecadePanel);

    var _this = _possibleConstructorReturn$4(this, _React$Component.call(this, props));

    _this.state = {
      value: props.value || props.defaultValue
    };

    // bind methods
    _this.prefixCls = props.rootPrefixCls + '-decade-panel';
    _this.nextCentury = goYear$1.bind(_this, 100);
    _this.previousCentury = goYear$1.bind(_this, -100);
    return _this;
  }

  DecadePanel.prototype.render = function render() {
    var _this2 = this;

    var value = this.state.value;
    var _props = this.props,
        locale = _props.locale,
        renderFooter = _props.renderFooter;

    var currentYear = value.year();
    var startYear = parseInt(currentYear / 100, 10) * 100;
    var preYear = startYear - 10;
    var endYear = startYear + 99;
    var decades = [];
    var index = 0;
    var prefixCls = this.prefixCls;

    for (var rowIndex = 0; rowIndex < ROW; rowIndex++) {
      decades[rowIndex] = [];
      for (var colIndex = 0; colIndex < COL; colIndex++) {
        var startDecade = preYear + index * 10;
        var endDecade = preYear + index * 10 + 9;
        decades[rowIndex][colIndex] = {
          startDecade: startDecade,
          endDecade: endDecade
        };
        index++;
      }
    }

    var footer = renderFooter && renderFooter('decade');

    var decadesEls = decades.map(function (row, decadeIndex) {
      var tds = row.map(function (decadeData) {
        var _classNameMap;

        var dStartDecade = decadeData.startDecade;
        var dEndDecade = decadeData.endDecade;
        var isLast = dStartDecade < startYear;
        var isNext = dEndDecade > endYear;
        var classNameMap = (_classNameMap = {}, _classNameMap[prefixCls + '-cell'] = 1, _classNameMap[prefixCls + '-selected-cell'] = dStartDecade <= currentYear && currentYear <= dEndDecade, _classNameMap[prefixCls + '-last-century-cell'] = isLast, _classNameMap[prefixCls + '-next-century-cell'] = isNext, _classNameMap);
        var content = dStartDecade + '-' + dEndDecade;
        var clickHandler = void 0;
        if (isLast) {
          clickHandler = _this2.previousCentury;
        } else if (isNext) {
          clickHandler = _this2.nextCentury;
        } else {
          clickHandler = chooseDecade.bind(_this2, dStartDecade);
        }
        return React__default.createElement(
          'td',
          {
            key: dStartDecade,
            onClick: clickHandler,
            role: 'gridcell',
            className: classNames(classNameMap)
          },
          React__default.createElement(
            'a',
            {
              className: prefixCls + '-decade'
            },
            content
          )
        );
      });
      return React__default.createElement(
        'tr',
        { key: decadeIndex, role: 'row' },
        tds
      );
    });

    return React__default.createElement(
      'div',
      { className: this.prefixCls },
      React__default.createElement(
        'div',
        { className: prefixCls + '-header' },
        React__default.createElement('a', {
          className: prefixCls + '-prev-century-btn',
          role: 'button',
          onClick: this.previousCentury,
          title: locale.previousCentury
        }),
        React__default.createElement(
          'div',
          { className: prefixCls + '-century' },
          startYear,
          '-',
          endYear
        ),
        React__default.createElement('a', {
          className: prefixCls + '-next-century-btn',
          role: 'button',
          onClick: this.nextCentury,
          title: locale.nextCentury
        })
      ),
      React__default.createElement(
        'div',
        { className: prefixCls + '-body' },
        React__default.createElement(
          'table',
          { className: prefixCls + '-table', cellSpacing: '0', role: 'grid' },
          React__default.createElement(
            'tbody',
            { className: prefixCls + '-tbody' },
            decadesEls
          )
        )
      ),
      footer && React__default.createElement(
        'div',
        { className: prefixCls + '-footer' },
        footer
      )
    );
  };

  return DecadePanel;
}(React__default.Component);


DecadePanel.propTypes = {
  locale: PropTypes.object,
  value: PropTypes.object,
  defaultValue: PropTypes.object,
  rootPrefixCls: PropTypes.string,
  renderFooter: PropTypes.func
};

DecadePanel.defaultProps = {
  onSelect: function onSelect() {}
};

function goMonth(direction) {
  var next = this.props.value.clone();
  next.add(direction, 'months');
  this.props.onValueChange(next);
}

function goYear(direction) {
  var next = this.props.value.clone();
  next.add(direction, 'years');
  this.props.onValueChange(next);
}

function showIf(condition, el) {
  return condition ? el : null;
}

var CalendarHeader = function (_React$Component) {
  _inherits$4(CalendarHeader, _React$Component);

  function CalendarHeader(props) {
    _classCallCheck$4(this, CalendarHeader);

    var _this = _possibleConstructorReturn$4(this, _React$Component.call(this, props));

    _initialiseProps$4.call(_this);

    _this.nextMonth = goMonth.bind(_this, 1);
    _this.previousMonth = goMonth.bind(_this, -1);
    _this.nextYear = goYear.bind(_this, 1);
    _this.previousYear = goYear.bind(_this, -1);

    _this.state = { yearPanelReferer: null };
    return _this;
  }

  CalendarHeader.prototype.render = function render() {
    var _this2 = this;

    var props = this.props;
    var prefixCls = props.prefixCls,
        locale = props.locale,
        mode = props.mode,
        value = props.value,
        showTimePicker = props.showTimePicker,
        enableNext = props.enableNext,
        enablePrev = props.enablePrev,
        disabledMonth = props.disabledMonth,
        renderFooter = props.renderFooter;


    var panel = null;
    if (mode === 'month') {
      panel = React__default.createElement(MonthPanel, {
        locale: locale,
        value: value,
        rootPrefixCls: prefixCls,
        onSelect: this.onMonthSelect,
        onYearPanelShow: function onYearPanelShow() {
          return _this2.showYearPanel('month');
        },
        disabledDate: disabledMonth,
        cellRender: props.monthCellRender,
        contentRender: props.monthCellContentRender,
        renderFooter: renderFooter,
        changeYear: this.changeYear
      });
    }
    if (mode === 'year') {
      panel = React__default.createElement(YearPanel, {
        locale: locale,
        defaultValue: value,
        rootPrefixCls: prefixCls,
        onSelect: this.onYearSelect,
        onDecadePanelShow: this.showDecadePanel,
        renderFooter: renderFooter
      });
    }
    if (mode === 'decade') {
      panel = React__default.createElement(DecadePanel, {
        locale: locale,
        defaultValue: value,
        rootPrefixCls: prefixCls,
        onSelect: this.onDecadeSelect,
        renderFooter: renderFooter
      });
    }

    return React__default.createElement(
      'div',
      { className: prefixCls + '-header' },
      React__default.createElement(
        'div',
        { style: { position: 'relative' } },
        showIf(enablePrev && !showTimePicker, React__default.createElement('a', {
          className: prefixCls + '-prev-year-btn',
          role: 'button',
          onClick: this.previousYear,
          title: locale.previousYear
        })),
        showIf(enablePrev && !showTimePicker, React__default.createElement('a', {
          className: prefixCls + '-prev-month-btn',
          role: 'button',
          onClick: this.previousMonth,
          title: locale.previousMonth
        })),
        this.monthYearElement(showTimePicker),
        showIf(enableNext && !showTimePicker, React__default.createElement('a', {
          className: prefixCls + '-next-month-btn',
          onClick: this.nextMonth,
          title: locale.nextMonth
        })),
        showIf(enableNext && !showTimePicker, React__default.createElement('a', {
          className: prefixCls + '-next-year-btn',
          onClick: this.nextYear,
          title: locale.nextYear
        }))
      ),
      panel
    );
  };

  return CalendarHeader;
}(React__default.Component);

CalendarHeader.propTypes = {
  prefixCls: PropTypes.string,
  value: PropTypes.object,
  onValueChange: PropTypes.func,
  showTimePicker: PropTypes.bool,
  onPanelChange: PropTypes.func,
  locale: PropTypes.object,
  enablePrev: PropTypes.any,
  enableNext: PropTypes.any,
  disabledMonth: PropTypes.func,
  renderFooter: PropTypes.func,
  onMonthSelect: PropTypes.func
};
CalendarHeader.defaultProps = {
  enableNext: 1,
  enablePrev: 1,
  onPanelChange: function onPanelChange() {},
  onValueChange: function onValueChange() {}
};

var _initialiseProps$4 = function _initialiseProps() {
  var _this3 = this;

  this.onMonthSelect = function (value) {
    _this3.props.onPanelChange(value, 'date');
    if (_this3.props.onMonthSelect) {
      _this3.props.onMonthSelect(value);
    } else {
      _this3.props.onValueChange(value);
    }
  };

  this.onYearSelect = function (value) {
    var referer = _this3.state.yearPanelReferer;
    _this3.setState({ yearPanelReferer: null });
    _this3.props.onPanelChange(value, referer);
    _this3.props.onValueChange(value);
  };

  this.onDecadeSelect = function (value) {
    _this3.props.onPanelChange(value, 'year');
    _this3.props.onValueChange(value);
  };

  this.changeYear = function (direction) {
    if (direction > 0) {
      _this3.nextYear();
    } else {
      _this3.previousYear();
    }
  };

  this.monthYearElement = function (showTimePicker) {
    var props = _this3.props;
    var prefixCls = props.prefixCls;
    var locale = props.locale;
    var value = props.value;
    var localeData = value.localeData();
    var monthBeforeYear = locale.monthBeforeYear;
    var selectClassName = prefixCls + '-' + (monthBeforeYear ? 'my-select' : 'ym-select');
    var timeClassName = showTimePicker ? ' ' + prefixCls + '-time-status' : '';
    var year = React__default.createElement(
      'a',
      {
        className: prefixCls + '-year-select' + timeClassName,
        role: 'button',
        onClick: showTimePicker ? null : function () {
          return _this3.showYearPanel('date');
        },
        title: showTimePicker ? null : locale.yearSelect
      },
      value.format(locale.yearFormat)
    );
    var month = React__default.createElement(
      'a',
      {
        className: prefixCls + '-month-select' + timeClassName,
        role: 'button',
        onClick: showTimePicker ? null : _this3.showMonthPanel,
        title: showTimePicker ? null : locale.monthSelect
      },
      locale.monthFormat ? value.format(locale.monthFormat) : localeData.monthsShort(value)
    );
    var day = void 0;
    if (showTimePicker) {
      day = React__default.createElement(
        'a',
        {
          className: prefixCls + '-day-select' + timeClassName,
          role: 'button'
        },
        value.format(locale.dayFormat)
      );
    }
    var my = [];
    if (monthBeforeYear) {
      my = [month, day, year];
    } else {
      my = [year, month, day];
    }
    return React__default.createElement(
      'span',
      { className: selectClassName },
      mapSelf(my)
    );
  };

  this.showMonthPanel = function () {
    // null means that users' interaction doesn't change value
    _this3.props.onPanelChange(null, 'month');
  };

  this.showYearPanel = function (referer) {
    _this3.setState({ yearPanelReferer: referer });
    _this3.props.onPanelChange(null, 'year');
  };

  this.showDecadePanel = function () {
    _this3.props.onPanelChange(null, 'decade');
  };
};

function TodayButton(_ref) {
  var prefixCls = _ref.prefixCls,
      locale = _ref.locale,
      value = _ref.value,
      timePicker = _ref.timePicker,
      disabled = _ref.disabled,
      disabledDate = _ref.disabledDate,
      onToday = _ref.onToday,
      text = _ref.text;

  var localeNow = (!text && timePicker ? locale.now : text) || locale.today;
  var disabledToday = disabledDate && !isAllowedDate(getTodayTime(value), disabledDate);
  var isDisabled = disabledToday || disabled;
  var disabledTodayClass = isDisabled ? prefixCls + '-today-btn-disabled' : '';
  return React__default.createElement(
    'a',
    {
      className: prefixCls + '-today-btn ' + disabledTodayClass,
      role: 'button',
      onClick: isDisabled ? null : onToday,
      title: getTodayTimeStr(value)
    },
    localeNow
  );
}

function OkButton(_ref) {
  var prefixCls = _ref.prefixCls,
      locale = _ref.locale,
      okDisabled = _ref.okDisabled,
      onOk = _ref.onOk;

  var className = prefixCls + "-ok-btn";
  if (okDisabled) {
    className += " " + prefixCls + "-ok-btn-disabled";
  }
  return React__default.createElement(
    "a",
    {
      className: className,
      role: "button",
      onClick: okDisabled ? null : onOk
    },
    locale.ok
  );
}

function TimePickerButton(_ref) {
  var _classnames;

  var prefixCls = _ref.prefixCls,
      locale = _ref.locale,
      showTimePicker = _ref.showTimePicker,
      onOpenTimePicker = _ref.onOpenTimePicker,
      onCloseTimePicker = _ref.onCloseTimePicker,
      timePickerDisabled = _ref.timePickerDisabled;

  var className = classNames((_classnames = {}, _classnames[prefixCls + '-time-picker-btn'] = true, _classnames[prefixCls + '-time-picker-btn-disabled'] = timePickerDisabled, _classnames));
  var onClick = null;
  if (!timePickerDisabled) {
    onClick = showTimePicker ? onCloseTimePicker : onOpenTimePicker;
  }
  return React__default.createElement(
    'a',
    {
      className: className,
      role: 'button',
      onClick: onClick
    },
    showTimePicker ? locale.dateSelect : locale.timeSelect
  );
}

var CalendarFooter = function (_React$Component) {
  _inherits$4(CalendarFooter, _React$Component);

  function CalendarFooter() {
    _classCallCheck$4(this, CalendarFooter);

    return _possibleConstructorReturn$4(this, _React$Component.apply(this, arguments));
  }

  CalendarFooter.prototype.onSelect = function onSelect(value) {
    this.props.onSelect(value);
  };

  CalendarFooter.prototype.getRootDOMNode = function getRootDOMNode() {
    return ReactDOM__default.findDOMNode(this);
  };

  CalendarFooter.prototype.render = function render() {
    var props = this.props;
    var value = props.value,
        prefixCls = props.prefixCls,
        showOk = props.showOk,
        timePicker = props.timePicker,
        renderFooter = props.renderFooter,
        mode = props.mode;

    var footerEl = null;
    var extraFooter = renderFooter && renderFooter(mode);
    if (props.showToday || timePicker || extraFooter) {
      var _cx;

      var nowEl = void 0;
      if (props.showToday) {
        nowEl = React__default.createElement(TodayButton, _extends$5({}, props, { value: value }));
      }
      var okBtn = void 0;
      if (showOk === true || showOk !== false && !!props.timePicker) {
        okBtn = React__default.createElement(OkButton, props);
      }
      var timePickerBtn = void 0;
      if (!!props.timePicker) {
        timePickerBtn = React__default.createElement(TimePickerButton, props);
      }

      var footerBtn = void 0;
      if (nowEl || timePickerBtn || okBtn || extraFooter) {
        footerBtn = React__default.createElement(
          'span',
          { className: prefixCls + '-footer-btn' },
          extraFooter,
          mapSelf([nowEl, timePickerBtn, okBtn])
        );
      }
      var cls = classNames(prefixCls + '-footer', (_cx = {}, _cx[prefixCls + '-footer-show-ok'] = okBtn, _cx));
      footerEl = React__default.createElement(
        'div',
        { className: cls },
        footerBtn
      );
    }
    return footerEl;
  };

  return CalendarFooter;
}(React__default.Component);

CalendarFooter.propTypes = {
  prefixCls: PropTypes.string,
  showDateInput: PropTypes.bool,
  disabledTime: PropTypes.any,
  timePicker: PropTypes.element,
  selectedValue: PropTypes.any,
  showOk: PropTypes.bool,
  onSelect: PropTypes.func,
  value: PropTypes.object,
  renderFooter: PropTypes.func,
  defaultValue: PropTypes.object,
  mode: PropTypes.string
};

var cachedSelectionStart = void 0;
var cachedSelectionEnd = void 0;
var dateInputInstance = void 0;

var DateInput = function (_React$Component) {
  _inherits$4(DateInput, _React$Component);

  function DateInput(props) {
    _classCallCheck$4(this, DateInput);

    var _this = _possibleConstructorReturn$4(this, _React$Component.call(this, props));

    _initialiseProps$3.call(_this);

    var selectedValue = props.selectedValue;

    _this.state = {
      str: formatDate$1(selectedValue, _this.props.format),
      invalid: false,
      hasFocus: false
    };
    return _this;
  }

  DateInput.prototype.componentDidUpdate = function componentDidUpdate() {
    if (dateInputInstance && this.state.hasFocus && !this.state.invalid && !(cachedSelectionStart === 0 && cachedSelectionEnd === 0)) {
      dateInputInstance.setSelectionRange(cachedSelectionStart, cachedSelectionEnd);
    }
  };

  DateInput.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, state) {
    var newState = {};

    if (dateInputInstance) {
      cachedSelectionStart = dateInputInstance.selectionStart;
      cachedSelectionEnd = dateInputInstance.selectionEnd;
    }
    // when popup show, click body will call this, bug!
    var selectedValue = nextProps.selectedValue;
    if (!state.hasFocus) {
      newState = {
        str: formatDate$1(selectedValue, nextProps.format),
        invalid: false
      };
    }

    return newState;
  };

  DateInput.getInstance = function getInstance() {
    return dateInputInstance;
  };

  DateInput.prototype.render = function render() {
    var props = this.props;
    var _state = this.state,
        invalid = _state.invalid,
        str = _state.str;
    var locale = props.locale,
        prefixCls = props.prefixCls,
        placeholder = props.placeholder,
        clearIcon = props.clearIcon,
        inputMode = props.inputMode;

    var invalidClass = invalid ? prefixCls + '-input-invalid' : '';
    return React__default.createElement(
      'div',
      { className: prefixCls + '-input-wrap' },
      React__default.createElement(
        'div',
        { className: prefixCls + '-date-input-wrap' },
        React__default.createElement('input', {
          ref: this.saveDateInput,
          className: prefixCls + '-input ' + invalidClass,
          value: str,
          disabled: props.disabled,
          placeholder: placeholder,
          onChange: this.onInputChange,
          onKeyDown: this.onKeyDown,
          onFocus: this.onFocus,
          onBlur: this.onBlur,
          inputMode: inputMode
        })
      ),
      props.showClear ? React__default.createElement(
        'a',
        {
          role: 'button',
          title: locale.clear,
          onClick: this.onClear
        },
        clearIcon || React__default.createElement('span', { className: prefixCls + '-clear-btn' })
      ) : null
    );
  };

  return DateInput;
}(React__default.Component);

DateInput.propTypes = {
  prefixCls: PropTypes.string,
  timePicker: PropTypes.object,
  value: PropTypes.object,
  disabledTime: PropTypes.any,
  format: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  locale: PropTypes.object,
  disabledDate: PropTypes.func,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  placeholder: PropTypes.string,
  onSelect: PropTypes.func,
  selectedValue: PropTypes.object,
  clearIcon: PropTypes.node,
  inputMode: PropTypes.string
};

var _initialiseProps$3 = function _initialiseProps() {
  var _this2 = this;

  this.onClear = function () {
    _this2.setState({
      str: ''
    });
    _this2.props.onClear(null);
  };

  this.onInputChange = function (event) {
    var str = event.target.value;
    var _props = _this2.props,
        disabledDate = _props.disabledDate,
        format = _props.format,
        onChange = _props.onChange,
        selectedValue = _props.selectedValue;

    // 没有内容，合法并直接退出

    if (!str) {
      onChange(null);
      _this2.setState({
        invalid: false,
        str: str
      });
      return;
    }

    // 不合法直接退出
    var parsed = moment(str, format, true);
    if (!parsed.isValid()) {
      _this2.setState({
        invalid: true,
        str: str
      });
      return;
    }

    var value = _this2.props.value.clone();
    value.year(parsed.year()).month(parsed.month()).date(parsed.date()).hour(parsed.hour()).minute(parsed.minute()).second(parsed.second());

    if (!value || disabledDate && disabledDate(value)) {
      _this2.setState({
        invalid: true,
        str: str
      });
      return;
    }

    if (selectedValue !== value || selectedValue && value && !selectedValue.isSame(value)) {
      _this2.setState({
        invalid: false,
        str: str
      });
      onChange(value);
    }
  };

  this.onFocus = function () {
    _this2.setState({ hasFocus: true });
  };

  this.onBlur = function () {
    _this2.setState(function (prevState, prevProps) {
      return {
        hasFocus: false,
        str: formatDate$1(prevProps.value, prevProps.format)
      };
    });
  };

  this.onKeyDown = function (event) {
    var keyCode = event.keyCode;
    var _props2 = _this2.props,
        onSelect = _props2.onSelect,
        value = _props2.value,
        disabledDate = _props2.disabledDate;

    if (keyCode === KeyCode.ENTER && onSelect) {
      var validateDate = !disabledDate || !disabledDate(value);
      if (validateDate) {
        onSelect(value.clone());
      }
      event.preventDefault();
    }
  };

  this.getRootDOMNode = function () {
    return ReactDOM__default.findDOMNode(_this2);
  };

  this.focus = function () {
    if (dateInputInstance) {
      dateInputInstance.focus();
    }
  };

  this.saveDateInput = function (dateInput) {
    dateInputInstance = dateInput;
  };
};

polyfill(DateInput);

function goStartMonth(time) {
  return time.clone().startOf('month');
}

function goEndMonth(time) {
  return time.clone().endOf('month');
}

function goTime(time, direction, unit) {
  return time.clone().add(direction, unit);
}

function includesTime() {
  var timeList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var time = arguments[1];
  var unit = arguments[2];

  return timeList.some(function (t) {
    return t.isSame(time, unit);
  });
}

function noop$2() {}

var getMomentObjectIfValid = function getMomentObjectIfValid(date) {
  if (moment.isMoment(date) && date.isValid()) {
    return date;
  }
  return false;
};

var Calendar = function (_React$Component) {
  _inherits$4(Calendar, _React$Component);

  function Calendar(props) {
    _classCallCheck$4(this, Calendar);

    var _this = _possibleConstructorReturn$4(this, _React$Component.call(this, props));

    _initialiseProps$2.call(_this);

    _this.state = {
      mode: _this.props.mode || 'date',
      value: getMomentObjectIfValid(props.value) || getMomentObjectIfValid(props.defaultValue) || moment(),
      selectedValue: props.selectedValue || props.defaultSelectedValue
    };
    return _this;
  }

  Calendar.prototype.componentDidMount = function componentDidMount() {
    if (this.props.showDateInput) {
      this.saveFocusElement(DateInput.getInstance());
    }
  };

  Calendar.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, state) {
    var value = nextProps.value,
        selectedValue = nextProps.selectedValue;

    var newState = {};

    if ('mode' in nextProps && state.mode !== nextProps.mode) {
      newState = { mode: nextProps.mode };
    }
    if ('value' in nextProps) {
      newState.value = getMomentObjectIfValid(value) || getMomentObjectIfValid(nextProps.defaultValue) || getNowByCurrentStateValue(state.value);
    }
    if ('selectedValue' in nextProps) {
      newState.selectedValue = selectedValue;
    }

    return newState;
  };

  Calendar.prototype.render = function render() {
    var props = this.props,
        state = this.state;
    var locale = props.locale,
        prefixCls = props.prefixCls,
        disabledDate = props.disabledDate,
        dateInputPlaceholder = props.dateInputPlaceholder,
        timePicker = props.timePicker,
        disabledTime = props.disabledTime,
        clearIcon = props.clearIcon,
        renderFooter = props.renderFooter,
        inputMode = props.inputMode,
        monthCellRender = props.monthCellRender,
        monthCellContentRender = props.monthCellContentRender;
    var value = state.value,
        selectedValue = state.selectedValue,
        mode = state.mode;

    var showTimePicker = mode === 'time';
    var disabledTimeConfig = showTimePicker && disabledTime && timePicker ? getTimeConfig(selectedValue, disabledTime) : null;

    var timePickerEle = null;

    if (timePicker && showTimePicker) {
      var timePickerProps = _extends$5({
        showHour: true,
        showSecond: true,
        showMinute: true
      }, timePicker.props, disabledTimeConfig, {
        onChange: this.onDateInputChange,
        value: selectedValue,
        disabledTime: disabledTime
      });

      if (timePicker.props.defaultValue !== undefined) {
        timePickerProps.defaultOpenValue = timePicker.props.defaultValue;
      }

      timePickerEle = React__default.cloneElement(timePicker, timePickerProps);
    }

    var dateInputElement = props.showDateInput ? React__default.createElement(DateInput, {
      format: this.getFormat(),
      key: 'date-input',
      value: value,
      locale: locale,
      placeholder: dateInputPlaceholder,
      showClear: true,
      disabledTime: disabledTime,
      disabledDate: disabledDate,
      onClear: this.onClear,
      prefixCls: prefixCls,
      selectedValue: selectedValue,
      onChange: this.onDateInputChange,
      onSelect: this.onDateInputSelect,
      clearIcon: clearIcon,
      inputMode: inputMode
    }) : null;

    var children = [];
    if (props.renderSidebar) {
      children.push(props.renderSidebar());
    }
    children.push(React__default.createElement(
      'div',
      { className: prefixCls + '-panel', key: 'panel' },
      dateInputElement,
      React__default.createElement(
        'div',
        {
          tabIndex: this.props.focusablePanel ? 0 : undefined,
          className: prefixCls + '-date-panel'
        },
        React__default.createElement(CalendarHeader, {
          locale: locale,
          mode: mode,
          value: value,
          onValueChange: this.setValue,
          onPanelChange: this.onPanelChange,
          renderFooter: renderFooter,
          showTimePicker: showTimePicker,
          prefixCls: prefixCls,
          monthCellRender: monthCellRender,
          monthCellContentRender: monthCellContentRender
        }),
        timePicker && showTimePicker ? React__default.createElement(
          'div',
          { className: prefixCls + '-time-picker' },
          React__default.createElement(
            'div',
            { className: prefixCls + '-time-picker-panel' },
            timePickerEle
          )
        ) : null,
        React__default.createElement(
          'div',
          { className: prefixCls + '-body' },
          React__default.createElement(DateTable, {
            locale: locale,
            value: value,
            selectedValue: selectedValue,
            prefixCls: prefixCls,
            dateRender: props.dateRender,
            onSelect: this.onDateTableSelect,
            disabledDate: disabledDate,
            showWeekNumber: props.showWeekNumber
          })
        ),
        React__default.createElement(CalendarFooter, {
          showOk: props.showOk,
          mode: mode,
          renderFooter: props.renderFooter,
          locale: locale,
          prefixCls: prefixCls,
          showToday: props.showToday,
          disabledTime: disabledTime,
          showTimePicker: showTimePicker,
          showDateInput: props.showDateInput,
          timePicker: timePicker,
          selectedValue: selectedValue,
          timePickerDisabled: !selectedValue,
          value: value,
          disabledDate: disabledDate,
          okDisabled: props.showOk !== false && (!selectedValue || !this.isAllowedDate(selectedValue)),
          onOk: this.onOk,
          onSelect: this.onSelect,
          onToday: this.onToday,
          onOpenTimePicker: this.openTimePicker,
          onCloseTimePicker: this.closeTimePicker
        })
      )
    ));

    return this.renderRoot({
      children: children,
      className: props.showWeekNumber ? prefixCls + '-week-number' : ''
    });
  };

  return Calendar;
}(React__default.Component);

Calendar.propTypes = _extends$5({}, calendarMixinPropTypes, propType, {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  defaultValue: PropTypes.object,
  value: PropTypes.object,
  selectedValue: PropTypes.object,
  defaultSelectedValue: PropTypes.object,
  mode: PropTypes.oneOf(['time', 'date', 'month', 'year', 'decade']),
  locale: PropTypes.object,
  showDateInput: PropTypes.bool,
  showWeekNumber: PropTypes.bool,
  showToday: PropTypes.bool,
  showOk: PropTypes.bool,
  onSelect: PropTypes.func,
  onOk: PropTypes.func,
  onKeyDown: PropTypes.func,
  timePicker: PropTypes.element,
  dateInputPlaceholder: PropTypes.any,
  onClear: PropTypes.func,
  onChange: PropTypes.func,
  onPanelChange: PropTypes.func,
  disabledDate: PropTypes.func,
  disabledTime: PropTypes.any,
  dateRender: PropTypes.func,
  renderFooter: PropTypes.func,
  renderSidebar: PropTypes.func,
  clearIcon: PropTypes.node,
  focusablePanel: PropTypes.bool,
  inputMode: PropTypes.string,
  onBlur: PropTypes.func
});
Calendar.defaultProps = _extends$5({}, calendarMixinDefaultProps, defaultProp, {
  showToday: true,
  showDateInput: true,
  timePicker: null,
  onOk: noop$2,
  onPanelChange: noop$2,
  focusablePanel: true
});

var _initialiseProps$2 = function _initialiseProps() {
  var _this2 = this;

  this.onPanelChange = function (value, mode) {
    var props = _this2.props,
        state = _this2.state;

    if (!('mode' in props)) {
      _this2.setState({ mode: mode });
    }
    props.onPanelChange(value || state.value, mode);
  };

  this.onKeyDown = function (event) {
    if (event.target.nodeName.toLowerCase() === 'input') {
      return undefined;
    }
    var keyCode = event.keyCode;
    // mac
    var ctrlKey = event.ctrlKey || event.metaKey;
    var disabledDate = _this2.props.disabledDate;
    var value = _this2.state.value;

    switch (keyCode) {
      case KeyCode.DOWN:
        _this2.goTime(1, 'weeks');
        event.preventDefault();
        return 1;
      case KeyCode.UP:
        _this2.goTime(-1, 'weeks');
        event.preventDefault();
        return 1;
      case KeyCode.LEFT:
        if (ctrlKey) {
          _this2.goTime(-1, 'years');
        } else {
          _this2.goTime(-1, 'days');
        }
        event.preventDefault();
        return 1;
      case KeyCode.RIGHT:
        if (ctrlKey) {
          _this2.goTime(1, 'years');
        } else {
          _this2.goTime(1, 'days');
        }
        event.preventDefault();
        return 1;
      case KeyCode.HOME:
        _this2.setValue(goStartMonth(_this2.state.value));
        event.preventDefault();
        return 1;
      case KeyCode.END:
        _this2.setValue(goEndMonth(_this2.state.value));
        event.preventDefault();
        return 1;
      case KeyCode.PAGE_DOWN:
        _this2.goTime(1, 'month');
        event.preventDefault();
        return 1;
      case KeyCode.PAGE_UP:
        _this2.goTime(-1, 'month');
        event.preventDefault();
        return 1;
      case KeyCode.ENTER:
        if (!disabledDate || !disabledDate(value)) {
          _this2.onSelect(value, {
            source: 'keyboard'
          });
        }
        event.preventDefault();
        return 1;
      default:
        _this2.props.onKeyDown(event);
        return 1;
    }
  };

  this.onClear = function () {
    _this2.onSelect(null);
    _this2.props.onClear();
  };

  this.onOk = function () {
    var selectedValue = _this2.state.selectedValue;

    if (_this2.isAllowedDate(selectedValue)) {
      _this2.props.onOk(selectedValue);
    }
  };

  this.onDateInputChange = function (value) {
    _this2.onSelect(value, {
      source: 'dateInput'
    });
  };

  this.onDateInputSelect = function (value) {
    _this2.onSelect(value, {
      source: 'dateInputSelect'
    });
  };

  this.onDateTableSelect = function (value) {
    var timePicker = _this2.props.timePicker;
    var selectedValue = _this2.state.selectedValue;

    if (!selectedValue && timePicker) {
      var timePickerDefaultValue = timePicker.props.defaultValue;
      if (timePickerDefaultValue) {
        syncTime(timePickerDefaultValue, value);
      }
    }
    _this2.onSelect(value);
  };

  this.onToday = function () {
    var value = _this2.state.value;

    var now = getTodayTime(value);
    _this2.onSelect(now, {
      source: 'todayButton'
    });
  };

  this.onBlur = function (event) {
    setTimeout(function () {
      var dateInput = DateInput.getInstance();
      var rootInstance = _this2.rootInstance;

      if (!rootInstance || rootInstance.contains(document.activeElement) || dateInput && dateInput.contains(document.activeElement)) {
        // focused element is still part of Calendar
        return;
      }

      if (_this2.props.onBlur) {
        _this2.props.onBlur(event);
      }
    }, 0);
  };

  this.getRootDOMNode = function () {
    return ReactDOM__default.findDOMNode(_this2);
  };

  this.openTimePicker = function () {
    _this2.onPanelChange(null, 'time');
  };

  this.closeTimePicker = function () {
    _this2.onPanelChange(null, 'date');
  };

  this.goTime = function (direction, unit) {
    _this2.setValue(goTime(_this2.state.value, direction, unit));
  };
};

polyfill(Calendar);

var Calendar$1 = calendarMixinWrapper(commonMixinWrapper(Calendar));

var MonthCalendar = function (_React$Component) {
  _inherits$4(MonthCalendar, _React$Component);

  function MonthCalendar(props) {
    _classCallCheck$4(this, MonthCalendar);

    var _this = _possibleConstructorReturn$4(this, _React$Component.call(this, props));

    _this.onKeyDown = function (event) {
      var keyCode = event.keyCode;
      var ctrlKey = event.ctrlKey || event.metaKey;
      var stateValue = _this.state.value;
      var disabledDate = _this.props.disabledDate;

      var value = stateValue;
      switch (keyCode) {
        case KeyCode.DOWN:
          value = stateValue.clone();
          value.add(3, 'months');
          break;
        case KeyCode.UP:
          value = stateValue.clone();
          value.add(-3, 'months');
          break;
        case KeyCode.LEFT:
          value = stateValue.clone();
          if (ctrlKey) {
            value.add(-1, 'years');
          } else {
            value.add(-1, 'months');
          }
          break;
        case KeyCode.RIGHT:
          value = stateValue.clone();
          if (ctrlKey) {
            value.add(1, 'years');
          } else {
            value.add(1, 'months');
          }
          break;
        case KeyCode.ENTER:
          if (!disabledDate || !disabledDate(stateValue)) {
            _this.onSelect(stateValue);
          }
          event.preventDefault();
          return 1;
        default:
          return undefined;
      }
      if (value !== stateValue) {
        _this.setValue(value);
        event.preventDefault();
        return 1;
      }
    };

    _this.handlePanelChange = function (_, mode) {
      if (mode !== 'date') {
        _this.setState({ mode: mode });
      }
    };

    _this.state = {
      mode: 'month',
      value: props.value || props.defaultValue || moment(),
      selectedValue: props.selectedValue || props.defaultSelectedValue
    };
    return _this;
  }

  MonthCalendar.prototype.render = function render() {
    var props = this.props,
        state = this.state;
    var mode = state.mode,
        value = state.value;

    var children = React__default.createElement(
      'div',
      { className: props.prefixCls + '-month-calendar-content' },
      React__default.createElement(
        'div',
        { className: props.prefixCls + '-month-header-wrap' },
        React__default.createElement(CalendarHeader, {
          prefixCls: props.prefixCls,
          mode: mode,
          value: value,
          locale: props.locale,
          disabledMonth: props.disabledDate,
          monthCellRender: props.monthCellRender,
          monthCellContentRender: props.monthCellContentRender,
          onMonthSelect: this.onSelect,
          onValueChange: this.setValue,
          onPanelChange: this.handlePanelChange
        })
      ),
      React__default.createElement(CalendarFooter, {
        prefixCls: props.prefixCls,
        renderFooter: props.renderFooter
      })
    );
    return this.renderRoot({
      className: props.prefixCls + '-month-calendar',
      children: children
    });
  };

  return MonthCalendar;
}(React__default.Component);

MonthCalendar.propTypes = _extends$5({}, calendarMixinPropTypes, propType, {
  monthCellRender: PropTypes.func,
  value: PropTypes.object,
  defaultValue: PropTypes.object,
  selectedValue: PropTypes.object,
  defaultSelectedValue: PropTypes.object,
  disabledDate: PropTypes.func
});
MonthCalendar.defaultProps = _extends$5({}, defaultProp, calendarMixinDefaultProps);


var MonthCalendar$1 = polyfill(calendarMixinWrapper(commonMixinWrapper(MonthCalendar)));

var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};

var targetOffset = [0, 0];

var placements = {
  bottomLeft: {
    points: ['tl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -3],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -3],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 3],
    targetOffset: targetOffset
  },
  topLeft: {
    points: ['bl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 3],
    targetOffset: targetOffset
  }
};

function noop$1() {}

function refFn(field, component) {
  this[field] = component;
}

var Picker = function (_React$Component) {
  _inherits$4(Picker, _React$Component);

  function Picker(props) {
    _classCallCheck$4(this, Picker);

    var _this = _possibleConstructorReturn$4(this, _React$Component.call(this, props));

    _initialiseProps$1.call(_this);

    var open = void 0;
    if ('open' in props) {
      open = props.open;
    } else {
      open = props.defaultOpen;
    }
    var value = props.value || props.defaultValue;
    _this.saveCalendarRef = refFn.bind(_this, 'calendarInstance');

    _this.state = {
      open: open,
      value: value
    };
    return _this;
  }

  Picker.prototype.componentDidUpdate = function componentDidUpdate(_, prevState) {
    if (!prevState.open && this.state.open) {
      // setTimeout is for making sure saveCalendarRef happen before focusCalendar
      this.focusTimeout = setTimeout(this.focusCalendar, 0, this);
    }
  };

  Picker.prototype.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.focusTimeout);
  };

  Picker.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
    var newState = {};
    var value = nextProps.value,
        open = nextProps.open;

    if ('value' in nextProps) {
      newState.value = value;
    }
    if (open !== undefined) {
      newState.open = open;
    }
    return newState;
  };

  Picker.prototype.render = function render() {
    var props = this.props;
    var prefixCls = props.prefixCls,
        placement = props.placement,
        style = props.style,
        getCalendarContainer = props.getCalendarContainer,
        align = props.align,
        animation = props.animation,
        disabled = props.disabled,
        dropdownClassName = props.dropdownClassName,
        transitionName = props.transitionName,
        children = props.children;

    var state = this.state;
    return React__default.createElement(
      Trigger,
      {
        popup: this.getCalendarElement(),
        popupAlign: align,
        builtinPlacements: placements,
        popupPlacement: placement,
        action: disabled && !state.open ? [] : ['click'],
        destroyPopupOnHide: true,
        getPopupContainer: getCalendarContainer,
        popupStyle: style,
        popupAnimation: animation,
        popupTransitionName: transitionName,
        popupVisible: state.open,
        onPopupVisibleChange: this.onVisibleChange,
        prefixCls: prefixCls,
        popupClassName: dropdownClassName
      },
      React__default.cloneElement(children(state, props), { onKeyDown: this.onKeyDown })
    );
  };

  return Picker;
}(React__default.Component);

Picker.propTypes = {
  animation: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  disabled: PropTypes.bool,
  transitionName: PropTypes.string,
  onChange: PropTypes.func,
  onOpenChange: PropTypes.func,
  children: PropTypes.func,
  getCalendarContainer: PropTypes.func,
  calendar: PropTypes.element,
  style: PropTypes.object,
  open: PropTypes.bool,
  defaultOpen: PropTypes.bool,
  prefixCls: PropTypes.string,
  placement: PropTypes.any,
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  defaultValue: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  align: PropTypes.object,
  dateRender: PropTypes.func,
  onBlur: PropTypes.func
};
Picker.defaultProps = {
  prefixCls: 'rc-calendar-picker',
  style: {},
  align: {},
  placement: 'bottomLeft',
  defaultOpen: false,
  onChange: noop$1,
  onOpenChange: noop$1,
  onBlur: noop$1
};

var _initialiseProps$1 = function _initialiseProps() {
  var _this2 = this;

  this.onCalendarKeyDown = function (event) {
    if (event.keyCode === KeyCode.ESC) {
      event.stopPropagation();
      _this2.close(_this2.focus);
    }
  };

  this.onCalendarSelect = function (value) {
    var cause = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var props = _this2.props;
    if (!('value' in props)) {
      _this2.setState({
        value: value
      });
    }
    if (cause.source === 'keyboard' || cause.source === 'dateInputSelect' || !props.calendar.props.timePicker && cause.source !== 'dateInput' || cause.source === 'todayButton') {
      _this2.close(_this2.focus);
    }
    props.onChange(value);
  };

  this.onKeyDown = function (event) {
    if (!_this2.state.open && (event.keyCode === KeyCode.DOWN || event.keyCode === KeyCode.ENTER)) {
      _this2.open();
      event.preventDefault();
    }
  };

  this.onCalendarOk = function () {
    _this2.close(_this2.focus);
  };

  this.onCalendarClear = function () {
    _this2.close(_this2.focus);
  };

  this.onCalendarBlur = function () {
    _this2.setOpen(false);
  };

  this.onVisibleChange = function (open) {
    _this2.setOpen(open);
  };

  this.getCalendarElement = function () {
    var props = _this2.props;
    var state = _this2.state;
    var calendarProps = props.calendar.props;
    var value = state.value;

    var defaultValue = value;
    var extraProps = {
      ref: _this2.saveCalendarRef,
      defaultValue: defaultValue || calendarProps.defaultValue,
      selectedValue: value,
      onKeyDown: _this2.onCalendarKeyDown,
      onOk: createChainedFunction(calendarProps.onOk, _this2.onCalendarOk),
      onSelect: createChainedFunction(calendarProps.onSelect, _this2.onCalendarSelect),
      onClear: createChainedFunction(calendarProps.onClear, _this2.onCalendarClear),
      onBlur: createChainedFunction(calendarProps.onBlur, _this2.onCalendarBlur)
    };

    return React__default.cloneElement(props.calendar, extraProps);
  };

  this.setOpen = function (open, callback) {
    var onOpenChange = _this2.props.onOpenChange;

    if (_this2.state.open !== open) {
      if (!('open' in _this2.props)) {
        _this2.setState({
          open: open
        }, callback);
      }
      onOpenChange(open);
    }
  };

  this.open = function (callback) {
    _this2.setOpen(true, callback);
  };

  this.close = function (callback) {
    _this2.setOpen(false, callback);
  };

  this.focus = function () {
    if (!_this2.state.open) {
      ReactDOM__default.findDOMNode(_this2).focus();
    }
  };

  this.focusCalendar = function () {
    if (_this2.state.open && !!_this2.calendarInstance) {
      _this2.calendarInstance.focus();
    }
  };
};

polyfill(Picker);

// eslint-disable-next-line import/prefer-default-export
function formatDate(value, format) {
  if (!value) {
    return '';
  }

  if (Array.isArray(format)) {
    format = format[0];
  }

  return value.format(format);
}

function _typeof$3(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$3 = function _typeof(obj) { return typeof obj; }; } else { _typeof$3 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$3(obj); }

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$3(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$3(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$3(Constructor.prototype, protoProps); if (staticProps) _defineProperties$3(Constructor, staticProps); return Constructor; }

function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$3(subClass, superClass); }

function _setPrototypeOf$3(o, p) { _setPrototypeOf$3 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$3(o, p); }

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf$3(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$3(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$3(this, result); }; }

function _possibleConstructorReturn$3(self, call) { if (call && (_typeof$3(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$3(self); }

function _assertThisInitialized$3(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$3(o) { _getPrototypeOf$3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$3(o); }
function createPicker(TheCalendar) {
  var CalenderWrapper = /*#__PURE__*/function (_React$Component) {
    _inherits$3(CalenderWrapper, _React$Component);

    var _super = _createSuper$3(CalenderWrapper);

    function CalenderWrapper(props) {
      var _this;

      _classCallCheck$3(this, CalenderWrapper);

      _this = _super.call(this, props);

      _this.saveInput = function (node) {
        _this.input = node;
      };

      _this.clearSelection = function (e) {
        e.preventDefault();
        e.stopPropagation();

        _this.handleChange(null);
      };

      _this.handleChange = function (value) {
        var _assertThisInitialize = _assertThisInitialized$3(_this),
            props = _assertThisInitialize.props;

        if (!('value' in props)) {
          _this.setState({
            value: value,
            showDate: value
          });
        }

        props.onChange(value, formatDate(value, props.format));
      };

      _this.handleCalendarChange = function (value) {
        _this.setState({
          showDate: value
        });
      };

      _this.handleOpenChange = function (open) {
        var onOpenChange = _this.props.onOpenChange;

        if (!('open' in _this.props)) {
          _this.setState({
            open: open
          });
        }

        if (onOpenChange) {
          onOpenChange(open);
        }
      };

      _this.renderFooter = function () {
        var renderExtraFooter = _this.props.renderExtraFooter;

        var _assertThisInitialize2 = _assertThisInitialized$3(_this),
            prefixCls = _assertThisInitialize2.prefixCls;

        return renderExtraFooter ? /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-footer-extra")
        }, renderExtraFooter.apply(void 0, arguments)) : null;
      };

      _this.renderPicker = function (_ref) {
        var _classNames, _classNames2;

        var getPrefixCls = _ref.getPrefixCls;
        var _this$state = _this.state,
            value = _this$state.value,
            showDate = _this$state.showDate,
            open = _this$state.open;
        var props = omit(_this.props, ['onChange']);
        var customizePrefixCls = props.prefixCls,
            locale = props.locale,
            localeCode = props.localeCode,
            suffixIcon = props.suffixIcon;
        var prefixCls = getPrefixCls('calendar', customizePrefixCls); // To support old version react.
        // Have to add prefixCls on the instance.
        // https://github.com/facebook/react/issues/12397

        _this.prefixCls = prefixCls;
        var placeholder = 'placeholder' in props ? props.placeholder : locale.lang.placeholder;
        var disabledTime = props.showTime ? props.disabledTime : null;
        var calendarClassName = classNames((_classNames = {}, _defineProperty$3(_classNames, "".concat(prefixCls, "-time"), props.showTime), _defineProperty$3(_classNames, "".concat(prefixCls, "-month"), MonthCalendar$1 === TheCalendar), _classNames));

        if (value && localeCode) {
          value.locale(localeCode);
        }

        var pickerProps = {};
        var calendarProps = {};
        var pickerStyle = {};

        if (props.showTime) {
          calendarProps = {
            // fix https://github.com/ant-design/ant-design/issues/1902
            onSelect: _this.handleChange
          };
          pickerStyle.minWidth = 195;
        } else {
          pickerProps = {
            onChange: _this.handleChange
          };
        }

        if ('mode' in props) {
          calendarProps.mode = props.mode;
        }
        var calendar = /*#__PURE__*/React.createElement(TheCalendar, _extends$4({}, calendarProps, {
          disabledDate: props.disabledDate,
          disabledTime: disabledTime,
          locale: locale.lang,
          timePicker: props.timePicker,
          defaultValue: props.defaultPickerValue || interopDefault(moment$1)(),
          dateInputPlaceholder: placeholder,
          prefixCls: prefixCls,
          className: calendarClassName,
          onOk: props.onOk,
          dateRender: props.dateRender,
          format: props.format,
          showToday: props.showToday,
          monthCellContentRender: props.monthCellContentRender,
          renderFooter: _this.renderFooter,
          onPanelChange: props.onPanelChange,
          onChange: _this.handleCalendarChange,
          value: showDate
        }));
        var clearIcon = !props.disabled && props.allowClear && value ? /*#__PURE__*/React.createElement(Icon, {
          type: "close-circle",
          className: "".concat(prefixCls, "-picker-clear"),
          onClick: _this.clearSelection,
          theme: "filled"
        }) : null;
        var inputIcon = suffixIcon && ( /*#__PURE__*/React.isValidElement(suffixIcon) ? /*#__PURE__*/React.cloneElement(suffixIcon, {
          className: classNames((_classNames2 = {}, _defineProperty$3(_classNames2, suffixIcon.props.className, suffixIcon.props.className), _defineProperty$3(_classNames2, "".concat(prefixCls, "-picker-icon"), true), _classNames2))
        }) : /*#__PURE__*/React.createElement("span", {
          className: "".concat(prefixCls, "-picker-icon")
        }, suffixIcon)) || /*#__PURE__*/React.createElement(Icon, {
          type: "calendar",
          className: "".concat(prefixCls, "-picker-icon")
        });
        var dataOrAriaProps = getDataOrAriaProps(props);

        var input = function input(_ref2) {
          var inputValue = _ref2.value;
          return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", _extends$4({
            ref: _this.saveInput,
            disabled: props.disabled,
            readOnly: true,
            value: formatDate(inputValue, props.format),
            placeholder: placeholder,
            className: props.pickerInputClass,
            tabIndex: props.tabIndex,
            name: props.name
          }, dataOrAriaProps)), clearIcon, inputIcon);
        };

        return /*#__PURE__*/React.createElement("span", {
          id: props.id,
          className: classNames(props.className, props.pickerClass),
          style: _extends$4(_extends$4({}, pickerStyle), props.style),
          onFocus: props.onFocus,
          onBlur: props.onBlur,
          onMouseEnter: props.onMouseEnter,
          onMouseLeave: props.onMouseLeave
        }, /*#__PURE__*/React.createElement(Picker, _extends$4({}, props, pickerProps, {
          calendar: calendar,
          value: value,
          prefixCls: "".concat(prefixCls, "-picker-container"),
          style: props.popupStyle,
          open: open,
          onOpenChange: _this.handleOpenChange
        }), input));
      };

      var value = props.value || props.defaultValue;

      if (value && !interopDefault(moment$1).isMoment(value)) {
        throw new Error('The value/defaultValue of DatePicker or MonthPicker must be ' + 'a moment object after `antd@2.0`, see: https://u.ant.design/date-picker-value');
      }

      _this.state = {
        value: value,
        showDate: value,
        open: false
      };
      return _this;
    }

    _createClass$3(CalenderWrapper, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate(_, prevState) {
        if (!('open' in this.props) && prevState.open && !this.state.open) {
          this.focus();
        }
      }
    }, {
      key: "focus",
      value: function focus() {
        this.input.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.input.blur();
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderPicker);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps, prevState) {
        var state = {};
        var open = prevState.open;

        if ('open' in nextProps) {
          state.open = nextProps.open;
          open = nextProps.open || false;
        }

        if ('value' in nextProps) {
          state.value = nextProps.value;

          if (nextProps.value !== prevState.value || !open && nextProps.value !== prevState.showDate) {
            state.showDate = nextProps.value;
          }
        }

        return Object.keys(state).length > 0 ? state : null;
      }
    }]);

    return CalenderWrapper;
  }(React.Component);

  CalenderWrapper.defaultProps = {
    allowClear: true,
    showToday: true
  };
  polyfill(CalenderWrapper);
  return CalenderWrapper;
}

function _typeof$2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$2 = function _typeof(obj) { return typeof obj; }; } else { _typeof$2 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$2(obj); }

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$2(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$2(Constructor.prototype, protoProps); if (staticProps) _defineProperties$2(Constructor, staticProps); return Constructor; }

function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$2(subClass, superClass); }

function _setPrototypeOf$2(o, p) { _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$2(o, p); }

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf$2(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$2(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$2(this, result); }; }

function _possibleConstructorReturn$2(self, call) { if (call && (_typeof$2(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$2(self); }

function _assertThisInitialized$2(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$2(o) { _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$2(o); }
var DEFAULT_FORMAT = {
  date: 'YYYY-MM-DD',
  dateTime: 'YYYY-MM-DD HH:mm:ss',
  week: 'gggg-wo',
  month: 'YYYY-MM'
};
var LOCALE_FORMAT_MAPPING = {
  date: 'dateFormat',
  dateTime: 'dateTimeFormat',
  week: 'weekFormat',
  month: 'monthFormat'
};

function getColumns(_ref) {
  var showHour = _ref.showHour,
      showMinute = _ref.showMinute,
      showSecond = _ref.showSecond,
      use12Hours = _ref.use12Hours;
  var column = 0;

  if (showHour) {
    column += 1;
  }

  if (showMinute) {
    column += 1;
  }

  if (showSecond) {
    column += 1;
  }

  if (use12Hours) {
    column += 1;
  }

  return column;
}

function checkValidate(value, propName) {
  var values = Array.isArray(value) ? value : [value];
  values.forEach(function (val) {
    if (!val) return;
    warning(!interopDefault(moment$1).isMoment(val) || val.isValid());
  });
}

function wrapPicker(Picker, pickerType) {
  var PickerWrapper = /*#__PURE__*/function (_React$Component) {
    _inherits$2(PickerWrapper, _React$Component);

    var _super = _createSuper$2(PickerWrapper);

    function PickerWrapper() {
      var _this;

      _classCallCheck$2(this, PickerWrapper);

      _this = _super.apply(this, arguments); // Since we need call `getDerivedStateFromProps` for check. Need leave an empty `state` here.

      _this.state = {};

      _this.savePicker = function (node) {
        _this.picker = node;
      };

      _this.getDefaultLocale = function () {
        var result = _extends$3(_extends$3({}, locale), _this.props.locale);

        result.lang = _extends$3(_extends$3({}, result.lang), (_this.props.locale || {}).lang);
        return result;
      };

      _this.handleOpenChange = function (open) {
        var onOpenChange = _this.props.onOpenChange;
        onOpenChange(open);
      };

      _this.handleFocus = function (e) {
        var onFocus = _this.props.onFocus;

        if (onFocus) {
          onFocus(e);
        }
      };

      _this.handleBlur = function (e) {
        var onBlur = _this.props.onBlur;

        if (onBlur) {
          onBlur(e);
        }
      };

      _this.handleMouseEnter = function (e) {
        var onMouseEnter = _this.props.onMouseEnter;

        if (onMouseEnter) {
          onMouseEnter(e);
        }
      };

      _this.handleMouseLeave = function (e) {
        var onMouseLeave = _this.props.onMouseLeave;

        if (onMouseLeave) {
          onMouseLeave(e);
        }
      };

      _this.renderPicker = function (locale, localeCode) {
        var _this$props = _this.props,
            format = _this$props.format,
            showTime = _this$props.showTime;
        var mergedPickerType = showTime ? "".concat(pickerType, "Time") : pickerType;
        var mergedFormat = format || locale[LOCALE_FORMAT_MAPPING[mergedPickerType]] || DEFAULT_FORMAT[mergedPickerType];
        return /*#__PURE__*/React.createElement(ConfigConsumer, null, function (_ref2) {
          var _classNames2;

          var getPrefixCls = _ref2.getPrefixCls,
              getContextPopupContainer = _ref2.getPopupContainer;
          var _this$props2 = _this.props,
              customizePrefixCls = _this$props2.prefixCls,
              customizeInputPrefixCls = _this$props2.inputPrefixCls,
              getCalendarContainer = _this$props2.getCalendarContainer,
              size = _this$props2.size,
              disabled = _this$props2.disabled;
          var getPopupContainer = getCalendarContainer || getContextPopupContainer;
          var prefixCls = getPrefixCls('calendar', customizePrefixCls);
          var inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);
          var pickerClass = classNames("".concat(prefixCls, "-picker"), _defineProperty$2({}, "".concat(prefixCls, "-picker-").concat(size), !!size));
          var pickerInputClass = classNames("".concat(prefixCls, "-picker-input"), inputPrefixCls, (_classNames2 = {}, _defineProperty$2(_classNames2, "".concat(inputPrefixCls, "-lg"), size === 'large'), _defineProperty$2(_classNames2, "".concat(inputPrefixCls, "-sm"), size === 'small'), _defineProperty$2(_classNames2, "".concat(inputPrefixCls, "-disabled"), disabled), _classNames2));
          var timeFormat = showTime && showTime.format || 'HH:mm:ss';

          var rcTimePickerProps = _extends$3(_extends$3({}, generateShowHourMinuteSecond(timeFormat)), {
            format: timeFormat,
            use12Hours: showTime && showTime.use12Hours
          });

          var columns = getColumns(rcTimePickerProps);
          var timePickerCls = "".concat(prefixCls, "-time-picker-column-").concat(columns);
          var timePicker = showTime ? /*#__PURE__*/React.createElement(Panel, _extends$3({}, rcTimePickerProps, showTime, {
            prefixCls: "".concat(prefixCls, "-time-picker"),
            className: timePickerCls,
            placeholder: locale.timePickerLocale.placeholder,
            transitionName: "slide-up",
            onEsc: function onEsc() {}
          })) : null;
          return /*#__PURE__*/React.createElement(Picker, _extends$3({}, _this.props, {
            getCalendarContainer: getPopupContainer,
            format: mergedFormat,
            ref: _this.savePicker,
            pickerClass: pickerClass,
            pickerInputClass: pickerInputClass,
            locale: locale,
            localeCode: localeCode,
            timePicker: timePicker,
            onOpenChange: _this.handleOpenChange,
            onFocus: _this.handleFocus,
            onBlur: _this.handleBlur,
            onMouseEnter: _this.handleMouseEnter,
            onMouseLeave: _this.handleMouseLeave
          }));
        });
      };

      return _this;
    }

    _createClass$2(PickerWrapper, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this$props3 = this.props,
            autoFocus = _this$props3.autoFocus,
            disabled = _this$props3.disabled;

        if (autoFocus && !disabled) {
          this.focus();
        }
      }
    }, {
      key: "focus",
      value: function focus() {
        this.picker.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.picker.blur();
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement(LocaleReceiver, {
          componentName: "DatePicker",
          defaultLocale: this.getDefaultLocale
        }, this.renderPicker);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(_ref3) {
        var value = _ref3.value,
            defaultValue = _ref3.defaultValue;
        checkValidate(defaultValue);
        checkValidate(value);
        return {};
      }
    }]);

    return PickerWrapper;
  }(React.Component);

  PickerWrapper.defaultProps = {
    transitionName: 'slide-up',
    popupStyle: {},
    onChange: function onChange() {},
    onOk: function onOk() {},
    onOpenChange: function onOpenChange() {},
    locale: {}
  };
  polyfill(PickerWrapper);
  return PickerWrapper;
}

var CalendarPart = function (_React$Component) {
  _inherits$4(CalendarPart, _React$Component);

  function CalendarPart() {
    _classCallCheck$4(this, CalendarPart);

    return _possibleConstructorReturn$4(this, _React$Component.apply(this, arguments));
  }

  CalendarPart.prototype.render = function render() {
    var props = this.props;
    var prefixCls = props.prefixCls,
        value = props.value,
        hoverValue = props.hoverValue,
        selectedValue = props.selectedValue,
        mode = props.mode,
        direction = props.direction,
        locale = props.locale,
        format = props.format,
        placeholder = props.placeholder,
        disabledDate = props.disabledDate,
        timePicker = props.timePicker,
        disabledTime = props.disabledTime,
        timePickerDisabledTime = props.timePickerDisabledTime,
        showTimePicker = props.showTimePicker,
        onInputChange = props.onInputChange,
        onInputSelect = props.onInputSelect,
        enablePrev = props.enablePrev,
        enableNext = props.enableNext,
        clearIcon = props.clearIcon,
        showClear = props.showClear,
        inputMode = props.inputMode;

    var shouldShowTimePicker = showTimePicker && timePicker;
    var disabledTimeConfig = shouldShowTimePicker && disabledTime ? getTimeConfig(selectedValue, disabledTime) : null;
    var rangeClassName = prefixCls + '-range';
    var newProps = {
      locale: locale,
      value: value,
      prefixCls: prefixCls,
      showTimePicker: showTimePicker
    };
    var index = direction === 'left' ? 0 : 1;
    var timePickerEle = shouldShowTimePicker && React__default.cloneElement(timePicker, _extends$5({
      showHour: true,
      showMinute: true,
      showSecond: true
    }, timePicker.props, disabledTimeConfig, timePickerDisabledTime, {
      onChange: onInputChange,
      defaultOpenValue: value,
      value: selectedValue[index]
    }));

    var dateInputElement = props.showDateInput && React__default.createElement(DateInput, {
      format: format,
      locale: locale,
      prefixCls: prefixCls,
      timePicker: timePicker,
      disabledDate: disabledDate,
      placeholder: placeholder,
      disabledTime: disabledTime,
      value: value,
      showClear: showClear || false,
      selectedValue: selectedValue[index],
      onChange: onInputChange,
      onSelect: onInputSelect,
      clearIcon: clearIcon,
      inputMode: inputMode
    });

    return React__default.createElement(
      'div',
      {
        className: rangeClassName + '-part ' + rangeClassName + '-' + direction
      },
      dateInputElement,
      React__default.createElement(
        'div',
        { style: { outline: 'none' } },
        React__default.createElement(CalendarHeader, _extends$5({}, newProps, {
          mode: mode,
          enableNext: enableNext,
          enablePrev: enablePrev,
          onValueChange: props.onValueChange,
          onPanelChange: props.onPanelChange,
          disabledMonth: props.disabledMonth
        })),
        showTimePicker ? React__default.createElement(
          'div',
          { className: prefixCls + '-time-picker' },
          React__default.createElement(
            'div',
            { className: prefixCls + '-time-picker-panel' },
            timePickerEle
          )
        ) : null,
        React__default.createElement(
          'div',
          { className: prefixCls + '-body' },
          React__default.createElement(DateTable, _extends$5({}, newProps, {
            hoverValue: hoverValue,
            selectedValue: selectedValue,
            dateRender: props.dateRender,
            onSelect: props.onSelect,
            onDayHover: props.onDayHover,
            disabledDate: disabledDate,
            showWeekNumber: props.showWeekNumber
          }))
        )
      )
    );
  };

  return CalendarPart;
}(React__default.Component);

CalendarPart.propTypes = {
  prefixCls: PropTypes.string,
  value: PropTypes.any,
  hoverValue: PropTypes.any,
  selectedValue: PropTypes.any,
  direction: PropTypes.any,
  locale: PropTypes.any,
  showDateInput: PropTypes.bool,
  showTimePicker: PropTypes.bool,
  format: PropTypes.any,
  placeholder: PropTypes.any,
  disabledDate: PropTypes.any,
  timePicker: PropTypes.any,
  disabledTime: PropTypes.any,
  onInputChange: PropTypes.func,
  onInputSelect: PropTypes.func,
  timePickerDisabledTime: PropTypes.object,
  enableNext: PropTypes.any,
  enablePrev: PropTypes.any,
  clearIcon: PropTypes.node,
  dateRender: PropTypes.func,
  inputMode: PropTypes.string
};

function noop() {}

function isEmptyArray$1(arr) {
  return Array.isArray(arr) && (arr.length === 0 || arr.every(function (i) {
    return !i;
  }));
}

function isArraysEqual(a, b) {
  if (a === b) return true;
  if (a === null || typeof a === 'undefined' || b === null || typeof b === 'undefined') {
    return false;
  }
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function getValueFromSelectedValue(selectedValue) {
  var start = selectedValue[0],
      end = selectedValue[1];

  if (end && (start === undefined || start === null)) {
    start = end.clone().subtract(1, 'month');
  }

  if (start && (end === undefined || end === null)) {
    end = start.clone().add(1, 'month');
  }
  return [start, end];
}

function normalizeAnchor(props, init) {
  var selectedValue = props.selectedValue || init && props.defaultSelectedValue;
  var value = props.value || init && props.defaultValue;
  var normalizedValue = value ? getValueFromSelectedValue(value) : getValueFromSelectedValue(selectedValue);
  return !isEmptyArray$1(normalizedValue) ? normalizedValue : init && [moment(), moment().add(1, 'months')];
}

function generateOptions(length, extraOptionGen) {
  var arr = extraOptionGen ? extraOptionGen().concat() : [];
  for (var value = 0; value < length; value++) {
    if (arr.indexOf(value) === -1) {
      arr.push(value);
    }
  }
  return arr;
}

function onInputSelect(direction, value, cause) {
  if (!value) {
    return;
  }
  var originalValue = this.state.selectedValue;
  var selectedValue = originalValue.concat();
  var index = direction === 'left' ? 0 : 1;
  selectedValue[index] = value;
  if (selectedValue[0] && this.compare(selectedValue[0], selectedValue[1]) > 0) {
    selectedValue[1 - index] = this.state.showTimePicker ? selectedValue[index] : undefined;
  }
  this.props.onInputSelect(selectedValue);
  this.fireSelectValueChange(selectedValue, null, cause || { source: 'dateInput' });
}

var RangeCalendar = function (_React$Component) {
  _inherits$4(RangeCalendar, _React$Component);

  function RangeCalendar(props) {
    _classCallCheck$4(this, RangeCalendar);

    var _this = _possibleConstructorReturn$4(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var selectedValue = props.selectedValue || props.defaultSelectedValue;
    var value = normalizeAnchor(props, 1);
    _this.state = {
      selectedValue: selectedValue,
      prevSelectedValue: selectedValue,
      firstSelectedValue: null,
      hoverValue: props.hoverValue || [],
      value: value,
      showTimePicker: false,
      mode: props.mode || ['date', 'date'],
      panelTriggerSource: '' // Trigger by which picker panel: 'start' & 'end'
    };
    return _this;
  }

  RangeCalendar.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, state) {
    var newState = {};
    if ('value' in nextProps) {
      newState.value = normalizeAnchor(nextProps, 0);
    }
    if ('hoverValue' in nextProps && !isArraysEqual(state.hoverValue, nextProps.hoverValue)) {
      newState.hoverValue = nextProps.hoverValue;
    }
    if ('selectedValue' in nextProps) {
      newState.selectedValue = nextProps.selectedValue;
      newState.prevSelectedValue = nextProps.selectedValue;
    }
    if ('mode' in nextProps && !isArraysEqual(state.mode, nextProps.mode)) {
      newState.mode = nextProps.mode;
    }
    return newState;
  };

  // get disabled hours for second picker


  RangeCalendar.prototype.render = function render() {
    var _className, _classnames;

    var props = this.props,
        state = this.state;
    var prefixCls = props.prefixCls,
        dateInputPlaceholder = props.dateInputPlaceholder,
        seperator = props.seperator,
        timePicker = props.timePicker,
        showOk = props.showOk,
        locale = props.locale,
        showClear = props.showClear,
        showToday = props.showToday,
        type = props.type,
        clearIcon = props.clearIcon;
    var hoverValue = state.hoverValue,
        selectedValue = state.selectedValue,
        mode = state.mode,
        showTimePicker = state.showTimePicker;

    var className = (_className = {}, _className[props.className] = !!props.className, _className[prefixCls] = 1, _className[prefixCls + '-hidden'] = !props.visible, _className[prefixCls + '-range'] = 1, _className[prefixCls + '-show-time-picker'] = showTimePicker, _className[prefixCls + '-week-number'] = props.showWeekNumber, _className);
    var classes = classNames(className);
    var newProps = {
      selectedValue: state.selectedValue,
      onSelect: this.onSelect,
      onDayHover: type === 'start' && selectedValue[1] || type === 'end' && selectedValue[0] || !!hoverValue.length ? this.onDayHover : undefined
    };

    var placeholder1 = void 0;
    var placeholder2 = void 0;

    if (dateInputPlaceholder) {
      if (Array.isArray(dateInputPlaceholder)) {
        placeholder1 = dateInputPlaceholder[0];
        placeholder2 = dateInputPlaceholder[1];
      } else {
        placeholder1 = placeholder2 = dateInputPlaceholder;
      }
    }
    var showOkButton = showOk === true || showOk !== false && !!timePicker;
    var cls = classNames((_classnames = {}, _classnames[prefixCls + '-footer'] = true, _classnames[prefixCls + '-range-bottom'] = true, _classnames[prefixCls + '-footer-show-ok'] = showOkButton, _classnames));

    var startValue = this.getStartValue();
    var endValue = this.getEndValue();
    var todayTime = getTodayTime(startValue);
    var thisMonth = todayTime.month();
    var thisYear = todayTime.year();
    var isTodayInView = startValue.year() === thisYear && startValue.month() === thisMonth || endValue.year() === thisYear && endValue.month() === thisMonth;
    var nextMonthOfStart = startValue.clone().add(1, 'months');
    var isClosestMonths = nextMonthOfStart.year() === endValue.year() && nextMonthOfStart.month() === endValue.month();

    var extraFooter = props.renderFooter();

    return React__default.createElement(
      'div',
      {
        ref: this.saveRoot,
        className: classes,
        style: props.style,
        tabIndex: '0',
        onKeyDown: this.onKeyDown
      },
      props.renderSidebar(),
      React__default.createElement(
        'div',
        { className: prefixCls + '-panel' },
        showClear && selectedValue[0] && selectedValue[1] ? React__default.createElement(
          'a',
          {
            role: 'button',
            title: locale.clear,
            onClick: this.clear
          },
          clearIcon || React__default.createElement('span', { className: prefixCls + '-clear-btn' })
        ) : null,
        React__default.createElement(
          'div',
          {
            className: prefixCls + '-date-panel',
            onMouseLeave: type !== 'both' ? this.onDatePanelLeave : undefined,
            onMouseEnter: type !== 'both' ? this.onDatePanelEnter : undefined
          },
          React__default.createElement(CalendarPart, _extends$5({}, props, newProps, {
            hoverValue: hoverValue,
            direction: 'left',
            disabledTime: this.disabledStartTime,
            disabledMonth: this.disabledStartMonth,
            format: this.getFormat(),
            value: startValue,
            mode: mode[0],
            placeholder: placeholder1,
            onInputChange: this.onStartInputChange,
            onInputSelect: this.onStartInputSelect,
            onValueChange: this.onStartValueChange,
            onPanelChange: this.onStartPanelChange,
            showDateInput: this.props.showDateInput,
            timePicker: timePicker,
            showTimePicker: showTimePicker || mode[0] === 'time',
            enablePrev: true,
            enableNext: !isClosestMonths || this.isMonthYearPanelShow(mode[1]),
            clearIcon: clearIcon
          })),
          React__default.createElement(
            'span',
            { className: prefixCls + '-range-middle' },
            seperator
          ),
          React__default.createElement(CalendarPart, _extends$5({}, props, newProps, {
            hoverValue: hoverValue,
            direction: 'right',
            format: this.getFormat(),
            timePickerDisabledTime: this.getEndDisableTime(),
            placeholder: placeholder2,
            value: endValue,
            mode: mode[1],
            onInputChange: this.onEndInputChange,
            onInputSelect: this.onEndInputSelect,
            onValueChange: this.onEndValueChange,
            onPanelChange: this.onEndPanelChange,
            showDateInput: this.props.showDateInput,
            timePicker: timePicker,
            showTimePicker: showTimePicker || mode[1] === 'time',
            disabledTime: this.disabledEndTime,
            disabledMonth: this.disabledEndMonth,
            enablePrev: !isClosestMonths || this.isMonthYearPanelShow(mode[0]),
            enableNext: true,
            clearIcon: clearIcon
          }))
        ),
        React__default.createElement(
          'div',
          { className: cls },
          showToday || props.timePicker || showOkButton || extraFooter ? React__default.createElement(
            'div',
            { className: prefixCls + '-footer-btn' },
            extraFooter,
            showToday ? React__default.createElement(TodayButton, _extends$5({}, props, {
              disabled: isTodayInView,
              value: state.value[0],
              onToday: this.onToday,
              text: locale.backToToday
            })) : null,
            props.timePicker ? React__default.createElement(TimePickerButton, _extends$5({}, props, {
              showTimePicker: showTimePicker || mode[0] === 'time' && mode[1] === 'time',
              onOpenTimePicker: this.onOpenTimePicker,
              onCloseTimePicker: this.onCloseTimePicker,
              timePickerDisabled: !this.hasSelectedValue() || hoverValue.length
            })) : null,
            showOkButton ? React__default.createElement(OkButton, _extends$5({}, props, {
              onOk: this.onOk,
              okDisabled: !this.isAllowedDateAndTime(selectedValue) || !this.hasSelectedValue() || hoverValue.length
            })) : null
          ) : null
        )
      )
    );
  };

  return RangeCalendar;
}(React__default.Component);

RangeCalendar.propTypes = _extends$5({}, propType, {
  prefixCls: PropTypes.string,
  dateInputPlaceholder: PropTypes.any,
  seperator: PropTypes.string,
  defaultValue: PropTypes.any,
  value: PropTypes.any,
  hoverValue: PropTypes.any,
  mode: PropTypes.arrayOf(PropTypes.oneOf(['time', 'date', 'month', 'year', 'decade'])),
  showDateInput: PropTypes.bool,
  timePicker: PropTypes.any,
  showOk: PropTypes.bool,
  showToday: PropTypes.bool,
  defaultSelectedValue: PropTypes.array,
  selectedValue: PropTypes.array,
  onOk: PropTypes.func,
  showClear: PropTypes.bool,
  locale: PropTypes.object,
  onChange: PropTypes.func,
  onSelect: PropTypes.func,
  onValueChange: PropTypes.func,
  onHoverChange: PropTypes.func,
  onPanelChange: PropTypes.func,
  format: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  onClear: PropTypes.func,
  type: PropTypes.any,
  disabledDate: PropTypes.func,
  disabledTime: PropTypes.func,
  clearIcon: PropTypes.node,
  onKeyDown: PropTypes.func
});
RangeCalendar.defaultProps = _extends$5({}, defaultProp, {
  type: 'both',
  seperator: '~',
  defaultSelectedValue: [],
  onValueChange: noop,
  onHoverChange: noop,
  onPanelChange: noop,
  disabledTime: noop,
  onInputSelect: noop,
  showToday: true,
  showDateInput: true
});

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onDatePanelEnter = function () {
    if (_this2.hasSelectedValue()) {
      _this2.fireHoverValueChange(_this2.state.selectedValue.concat());
    }
  };

  this.onDatePanelLeave = function () {
    if (_this2.hasSelectedValue()) {
      _this2.fireHoverValueChange([]);
    }
  };

  this.onSelect = function (value) {
    var type = _this2.props.type;
    var _state = _this2.state,
        selectedValue = _state.selectedValue,
        prevSelectedValue = _state.prevSelectedValue,
        firstSelectedValue = _state.firstSelectedValue;

    var nextSelectedValue = void 0;
    if (type === 'both') {
      if (!firstSelectedValue) {
        syncTime(prevSelectedValue[0], value);
        nextSelectedValue = [value];
      } else if (_this2.compare(firstSelectedValue, value) < 0) {
        syncTime(prevSelectedValue[1], value);
        nextSelectedValue = [firstSelectedValue, value];
      } else {
        syncTime(prevSelectedValue[0], value);
        syncTime(prevSelectedValue[1], firstSelectedValue);
        nextSelectedValue = [value, firstSelectedValue];
      }
    } else if (type === 'start') {
      syncTime(prevSelectedValue[0], value);
      var endValue = selectedValue[1];
      nextSelectedValue = endValue && _this2.compare(endValue, value) > 0 ? [value, endValue] : [value];
    } else {
      // type === 'end'
      var startValue = selectedValue[0];
      if (startValue && _this2.compare(startValue, value) <= 0) {
        syncTime(prevSelectedValue[1], value);
        nextSelectedValue = [startValue, value];
      } else {
        syncTime(prevSelectedValue[0], value);
        nextSelectedValue = [value];
      }
    }

    _this2.fireSelectValueChange(nextSelectedValue);
  };

  this.onKeyDown = function (event) {
    if (event.target.nodeName.toLowerCase() === 'input') {
      return;
    }

    var keyCode = event.keyCode;

    var ctrlKey = event.ctrlKey || event.metaKey;

    var _state2 = _this2.state,
        selectedValue = _state2.selectedValue,
        hoverValue = _state2.hoverValue,
        firstSelectedValue = _state2.firstSelectedValue,
        value = _state2.value;
    var _props = _this2.props,
        onKeyDown = _props.onKeyDown,
        disabledDate = _props.disabledDate;

    // Update last time of the picker

    var updateHoverPoint = function updateHoverPoint(func) {
      // Change hover to make focus in UI
      var currentHoverTime = void 0;
      var nextHoverTime = void 0;
      var nextHoverValue = void 0;

      if (!firstSelectedValue) {
        currentHoverTime = hoverValue[0] || selectedValue[0] || value[0] || moment();
        nextHoverTime = func(currentHoverTime);
        nextHoverValue = [nextHoverTime];
        _this2.fireHoverValueChange(nextHoverValue);
      } else {
        if (hoverValue.length === 1) {
          currentHoverTime = hoverValue[0].clone();
          nextHoverTime = func(currentHoverTime);
          nextHoverValue = _this2.onDayHover(nextHoverTime);
        } else {
          currentHoverTime = hoverValue[0].isSame(firstSelectedValue, 'day') ? hoverValue[1] : hoverValue[0];
          nextHoverTime = func(currentHoverTime);
          nextHoverValue = _this2.onDayHover(nextHoverTime);
        }
      }

      // Find origin hover time on value index
      if (nextHoverValue.length >= 2) {
        var miss = nextHoverValue.some(function (ht) {
          return !includesTime(value, ht, 'month');
        });
        if (miss) {
          var newValue = nextHoverValue.slice().sort(function (t1, t2) {
            return t1.valueOf() - t2.valueOf();
          });
          if (newValue[0].isSame(newValue[1], 'month')) {
            newValue[1] = newValue[0].clone().add(1, 'month');
          }
          _this2.fireValueChange(newValue);
        }
      } else if (nextHoverValue.length === 1) {
        // If only one value, let's keep the origin panel
        var oriValueIndex = value.findIndex(function (time) {
          return time.isSame(currentHoverTime, 'month');
        });
        if (oriValueIndex === -1) oriValueIndex = 0;

        if (value.every(function (time) {
          return !time.isSame(nextHoverTime, 'month');
        })) {
          var _newValue = value.slice();
          _newValue[oriValueIndex] = nextHoverTime.clone();
          _this2.fireValueChange(_newValue);
        }
      }

      event.preventDefault();

      return nextHoverTime;
    };

    switch (keyCode) {
      case KeyCode.DOWN:
        updateHoverPoint(function (time) {
          return goTime(time, 1, 'weeks');
        });
        return;
      case KeyCode.UP:
        updateHoverPoint(function (time) {
          return goTime(time, -1, 'weeks');
        });
        return;
      case KeyCode.LEFT:
        if (ctrlKey) {
          updateHoverPoint(function (time) {
            return goTime(time, -1, 'years');
          });
        } else {
          updateHoverPoint(function (time) {
            return goTime(time, -1, 'days');
          });
        }
        return;
      case KeyCode.RIGHT:
        if (ctrlKey) {
          updateHoverPoint(function (time) {
            return goTime(time, 1, 'years');
          });
        } else {
          updateHoverPoint(function (time) {
            return goTime(time, 1, 'days');
          });
        }
        return;
      case KeyCode.HOME:
        updateHoverPoint(function (time) {
          return goStartMonth(time);
        });
        return;
      case KeyCode.END:
        updateHoverPoint(function (time) {
          return goEndMonth(time);
        });
        return;
      case KeyCode.PAGE_DOWN:
        updateHoverPoint(function (time) {
          return goTime(time, 1, 'month');
        });
        return;
      case KeyCode.PAGE_UP:
        updateHoverPoint(function (time) {
          return goTime(time, -1, 'month');
        });
        return;
      case KeyCode.ENTER:
        {
          var lastValue = void 0;
          if (hoverValue.length === 0) {
            lastValue = updateHoverPoint(function (time) {
              return time;
            });
          } else if (hoverValue.length === 1) {
            lastValue = hoverValue[0];
          } else {
            lastValue = hoverValue[0].isSame(firstSelectedValue, 'day') ? hoverValue[1] : hoverValue[0];
          }
          if (lastValue && (!disabledDate || !disabledDate(lastValue))) {
            _this2.onSelect(lastValue);
          }
          event.preventDefault();
          return;
        }
      default:
        if (onKeyDown) {
          onKeyDown(event);
        }
    }
  };

  this.onDayHover = function (value) {
    var hoverValue = [];
    var _state3 = _this2.state,
        selectedValue = _state3.selectedValue,
        firstSelectedValue = _state3.firstSelectedValue;
    var type = _this2.props.type;

    if (type === 'start' && selectedValue[1]) {
      hoverValue = _this2.compare(value, selectedValue[1]) < 0 ? [value, selectedValue[1]] : [value];
    } else if (type === 'end' && selectedValue[0]) {
      hoverValue = _this2.compare(value, selectedValue[0]) > 0 ? [selectedValue[0], value] : [];
    } else {
      if (!firstSelectedValue) {
        if (_this2.state.hoverValue.length) {
          _this2.setState({ hoverValue: [] });
        }
        return hoverValue;
      }
      hoverValue = _this2.compare(value, firstSelectedValue) < 0 ? [value, firstSelectedValue] : [firstSelectedValue, value];
    }
    _this2.fireHoverValueChange(hoverValue);

    return hoverValue;
  };

  this.onToday = function () {
    var startValue = getTodayTime(_this2.state.value[0]);
    var endValue = startValue.clone().add(1, 'months');
    _this2.setState({ value: [startValue, endValue] });
  };

  this.onOpenTimePicker = function () {
    _this2.setState({
      showTimePicker: true
    });
  };

  this.onCloseTimePicker = function () {
    _this2.setState({
      showTimePicker: false
    });
  };

  this.onOk = function () {
    var selectedValue = _this2.state.selectedValue;

    if (_this2.isAllowedDateAndTime(selectedValue)) {
      _this2.props.onOk(_this2.state.selectedValue);
    }
  };

  this.onStartInputChange = function () {
    for (var _len = arguments.length, oargs = Array(_len), _key = 0; _key < _len; _key++) {
      oargs[_key] = arguments[_key];
    }

    var args = ['left'].concat(oargs);
    return onInputSelect.apply(_this2, args);
  };

  this.onEndInputChange = function () {
    for (var _len2 = arguments.length, oargs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      oargs[_key2] = arguments[_key2];
    }

    var args = ['right'].concat(oargs);
    return onInputSelect.apply(_this2, args);
  };

  this.onStartInputSelect = function (value) {
    var args = ['left', value, { source: 'dateInputSelect' }];
    return onInputSelect.apply(_this2, args);
  };

  this.onEndInputSelect = function (value) {
    var args = ['right', value, { source: 'dateInputSelect' }];
    return onInputSelect.apply(_this2, args);
  };

  this.onStartValueChange = function (leftValue) {
    var value = [].concat(_this2.state.value);
    value[0] = leftValue;
    return _this2.fireValueChange(value);
  };

  this.onEndValueChange = function (rightValue) {
    var value = [].concat(_this2.state.value);
    value[1] = rightValue;
    return _this2.fireValueChange(value);
  };

  this.onStartPanelChange = function (value, mode) {
    var props = _this2.props,
        state = _this2.state;

    var newMode = [mode, state.mode[1]];
    var newState = {
      panelTriggerSource: 'start'
    };
    if (!('mode' in props)) {
      newState.mode = newMode;
    }
    _this2.setState(newState);
    var newValue = [value || state.value[0], state.value[1]];
    props.onPanelChange(newValue, newMode);
  };

  this.onEndPanelChange = function (value, mode) {
    var props = _this2.props,
        state = _this2.state;

    var newMode = [state.mode[0], mode];
    var newState = {
      panelTriggerSource: 'end'
    };
    if (!('mode' in props)) {
      newState.mode = newMode;
    }
    _this2.setState(newState);
    var newValue = [state.value[0], value || state.value[1]];
    props.onPanelChange(newValue, newMode);
  };

  this.getStartValue = function () {
    var _state4 = _this2.state,
        selectedValue = _state4.selectedValue,
        showTimePicker = _state4.showTimePicker,
        value = _state4.value,
        mode = _state4.mode,
        panelTriggerSource = _state4.panelTriggerSource;

    var startValue = value[0];
    // keep selectedTime when select date
    if (selectedValue[0] && _this2.props.timePicker) {
      startValue = startValue.clone();
      syncTime(selectedValue[0], startValue);
    }
    if (showTimePicker && selectedValue[0]) {
      startValue = selectedValue[0];
    }

    // Adjust month if date not align
    if (panelTriggerSource === 'end' && mode[0] === 'date' && mode[1] === 'date' && startValue.isSame(value[1], 'month')) {
      startValue = startValue.clone().subtract(1, 'month');
    }

    return startValue;
  };

  this.getEndValue = function () {
    var _state5 = _this2.state,
        value = _state5.value,
        selectedValue = _state5.selectedValue,
        showTimePicker = _state5.showTimePicker,
        mode = _state5.mode,
        panelTriggerSource = _state5.panelTriggerSource;

    var endValue = value[1] ? value[1].clone() : value[0].clone().add(1, 'month');
    // keep selectedTime when select date
    if (selectedValue[1] && _this2.props.timePicker) {
      syncTime(selectedValue[1], endValue);
    }
    if (showTimePicker) {
      endValue = selectedValue[1] ? selectedValue[1] : _this2.getStartValue();
    }

    // Adjust month if date not align
    if (!showTimePicker && panelTriggerSource !== 'end' && mode[0] === 'date' && mode[1] === 'date' && endValue.isSame(value[0], 'month')) {
      endValue = endValue.clone().add(1, 'month');
    }

    return endValue;
  };

  this.getEndDisableTime = function () {
    var _state6 = _this2.state,
        selectedValue = _state6.selectedValue,
        value = _state6.value;
    var disabledTime = _this2.props.disabledTime;

    var userSettingDisabledTime = disabledTime(selectedValue, 'end') || {};
    var startValue = selectedValue && selectedValue[0] || value[0].clone();
    // if startTime and endTime is same day..
    // the second time picker will not able to pick time before first time picker
    if (!selectedValue[1] || startValue.isSame(selectedValue[1], 'day')) {
      var hours = startValue.hour();
      var minutes = startValue.minute();
      var second = startValue.second();
      var _disabledHours = userSettingDisabledTime.disabledHours,
          _disabledMinutes = userSettingDisabledTime.disabledMinutes,
          _disabledSeconds = userSettingDisabledTime.disabledSeconds;

      var oldDisabledMinutes = _disabledMinutes ? _disabledMinutes() : [];
      var olddisabledSeconds = _disabledSeconds ? _disabledSeconds() : [];
      _disabledHours = generateOptions(hours, _disabledHours);
      _disabledMinutes = generateOptions(minutes, _disabledMinutes);
      _disabledSeconds = generateOptions(second, _disabledSeconds);
      return {
        disabledHours: function disabledHours() {
          return _disabledHours;
        },
        disabledMinutes: function disabledMinutes(hour) {
          if (hour === hours) {
            return _disabledMinutes;
          }
          return oldDisabledMinutes;
        },
        disabledSeconds: function disabledSeconds(hour, minute) {
          if (hour === hours && minute === minutes) {
            return _disabledSeconds;
          }
          return olddisabledSeconds;
        }
      };
    }
    return userSettingDisabledTime;
  };

  this.isAllowedDateAndTime = function (selectedValue) {
    return isAllowedDate(selectedValue[0], _this2.props.disabledDate, _this2.disabledStartTime) && isAllowedDate(selectedValue[1], _this2.props.disabledDate, _this2.disabledEndTime);
  };

  this.isMonthYearPanelShow = function (mode) {
    return ['month', 'year', 'decade'].indexOf(mode) > -1;
  };

  this.hasSelectedValue = function () {
    var selectedValue = _this2.state.selectedValue;

    return !!selectedValue[1] && !!selectedValue[0];
  };

  this.compare = function (v1, v2) {
    if (_this2.props.timePicker) {
      return v1.diff(v2);
    }
    return v1.diff(v2, 'days');
  };

  this.fireSelectValueChange = function (selectedValue, direct, cause) {
    var timePicker = _this2.props.timePicker;
    var prevSelectedValue = _this2.state.prevSelectedValue;

    if (timePicker && timePicker.props.defaultValue) {
      var timePickerDefaultValue = timePicker.props.defaultValue;
      if (!prevSelectedValue[0] && selectedValue[0]) {
        syncTime(timePickerDefaultValue[0], selectedValue[0]);
      }
      if (!prevSelectedValue[1] && selectedValue[1]) {
        syncTime(timePickerDefaultValue[1], selectedValue[1]);
      }
    }

    if (!('selectedValue' in _this2.props)) {
      _this2.setState({
        selectedValue: selectedValue
      });
    }

    // 尚未选择过时间，直接输入的话
    if (!_this2.state.selectedValue[0] || !_this2.state.selectedValue[1]) {
      var startValue = selectedValue[0] || moment();
      var endValue = selectedValue[1] || startValue.clone().add(1, 'months');
      _this2.setState({
        selectedValue: selectedValue,
        value: getValueFromSelectedValue([startValue, endValue])
      });
    }

    if (selectedValue[0] && !selectedValue[1]) {
      _this2.setState({ firstSelectedValue: selectedValue[0] });
      _this2.fireHoverValueChange(selectedValue.concat());
    }
    _this2.props.onChange(selectedValue);
    if (direct || selectedValue[0] && selectedValue[1]) {
      _this2.setState({
        prevSelectedValue: selectedValue,
        firstSelectedValue: null
      });
      _this2.fireHoverValueChange([]);
      _this2.props.onSelect(selectedValue, cause);
    }
  };

  this.fireValueChange = function (value) {
    var props = _this2.props;
    if (!('value' in props)) {
      _this2.setState({
        value: value
      });
    }
    props.onValueChange(value);
  };

  this.fireHoverValueChange = function (hoverValue) {
    var props = _this2.props;
    if (!('hoverValue' in props)) {
      _this2.setState({ hoverValue: hoverValue });
    }
    props.onHoverChange(hoverValue);
  };

  this.clear = function () {
    _this2.fireSelectValueChange([], true);
    _this2.props.onClear();
  };

  this.disabledStartTime = function (time) {
    return _this2.props.disabledTime(time, 'start');
  };

  this.disabledEndTime = function (time) {
    return _this2.props.disabledTime(time, 'end');
  };

  this.disabledStartMonth = function (month) {
    var value = _this2.state.value;

    return month.isAfter(value[1], 'month');
  };

  this.disabledEndMonth = function (month) {
    var value = _this2.state.value;

    return month.isBefore(value[0], 'month');
  };
};

polyfill(RangeCalendar);

var RangeCalendar$1 = commonMixinWrapper(RangeCalendar);

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function InputIcon(props) {
  var _classNames;

  var suffixIcon = props.suffixIcon,
      prefixCls = props.prefixCls;
  return suffixIcon && ( /*#__PURE__*/React.isValidElement(suffixIcon) ? /*#__PURE__*/React.cloneElement(suffixIcon, {
    className: classNames((_classNames = {}, _defineProperty$1(_classNames, suffixIcon.props.className, suffixIcon.props.className), _defineProperty$1(_classNames, "".concat(prefixCls, "-picker-icon"), true), _classNames))
  }) : /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "-picker-icon")
  }, suffixIcon)) || /*#__PURE__*/React.createElement(Icon, {
    type: "calendar",
    className: "".concat(prefixCls, "-picker-icon")
  });
}

function _typeof$1(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function getShowDateFromValue(value, mode) {
  var _value = _slicedToArray(value, 2),
      start = _value[0],
      end = _value[1]; // value could be an empty array, then we should not reset showDate


  if (!start && !end) {
    return;
  }

  if (mode && mode[0] === 'month') {
    return [start, end];
  }

  var newEnd = end && end.isSame(start, 'month') ? end.clone().add(1, 'month') : end;
  return [start, newEnd];
}

function pickerValueAdapter(value) {
  if (!value) {
    return;
  }

  if (Array.isArray(value)) {
    return value;
  }

  return [value, value.clone().add(1, 'month')];
}

function isEmptyArray(arr) {
  if (Array.isArray(arr)) {
    return arr.length === 0 || arr.every(function (i) {
      return !i;
    });
  }

  return false;
}

function fixLocale(value, localeCode) {
  if (!localeCode) {
    return;
  }

  if (!value || value.length === 0) {
    return;
  }

  var _value2 = _slicedToArray(value, 2),
      start = _value2[0],
      end = _value2[1];

  if (start) {
    start.locale(localeCode);
  }

  if (end) {
    end.locale(localeCode);
  }
}

var RangePicker = /*#__PURE__*/function (_React$Component) {
  _inherits$1(RangePicker, _React$Component);

  var _super = _createSuper$1(RangePicker);

  function RangePicker(props) {
    var _this;

    _classCallCheck$1(this, RangePicker);

    _this = _super.call(this, props);

    _this.savePicker = function (node) {
      _this.picker = node;
    };

    _this.clearSelection = function (e) {
      e.preventDefault();
      e.stopPropagation();

      _this.setState({
        value: []
      });

      _this.handleChange([]);
    };

    _this.clearHoverValue = function () {
      return _this.setState({
        hoverValue: []
      });
    };

    _this.handleChange = function (value) {
      var _assertThisInitialize = _assertThisInitialized$1(_this),
          props = _assertThisInitialize.props;

      if (!('value' in props)) {
        _this.setState(function (_ref) {
          var showDate = _ref.showDate;
          return {
            value: value,
            showDate: getShowDateFromValue(value) || showDate
          };
        });
      }

      if (value[0] && value[1] && value[0].diff(value[1]) > 0) {
        value[1] = undefined;
      }

      var _value3 = _slicedToArray(value, 2),
          start = _value3[0],
          end = _value3[1];

      if (typeof props.onChange === 'function') {
        props.onChange(value, [formatDate(start, props.format), formatDate(end, props.format)]);
      }
    };

    _this.handleOpenChange = function (open) {
      if (!('open' in _this.props)) {
        _this.setState({
          open: open
        });
      }

      if (open === false) {
        _this.clearHoverValue();
      }

      var onOpenChange = _this.props.onOpenChange;

      if (onOpenChange) {
        onOpenChange(open);
      }
    };

    _this.handleShowDateChange = function (showDate) {
      return _this.setState({
        showDate: showDate
      });
    };

    _this.handleHoverChange = function (hoverValue) {
      return _this.setState({
        hoverValue: hoverValue
      });
    };

    _this.handleRangeMouseLeave = function () {
      if (_this.state.open) {
        _this.clearHoverValue();
      }
    };

    _this.handleCalendarInputSelect = function (value) {
      var _value4 = _slicedToArray(value, 1),
          start = _value4[0];

      if (!start) {
        return;
      }

      _this.setState(function (_ref2) {
        var showDate = _ref2.showDate;
        return {
          value: value,
          showDate: getShowDateFromValue(value) || showDate
        };
      });
    };

    _this.handleRangeClick = function (value) {
      if (typeof value === 'function') {
        value = value();
      }

      _this.setValue(value, true);

      var _this$props = _this.props,
          onOk = _this$props.onOk,
          onOpenChange = _this$props.onOpenChange;

      if (onOk) {
        onOk(value);
      }

      if (onOpenChange) {
        onOpenChange(false);
      }
    };

    _this.renderFooter = function () {
      var _this$props2 = _this.props,
          ranges = _this$props2.ranges,
          renderExtraFooter = _this$props2.renderExtraFooter;

      var _assertThisInitialize2 = _assertThisInitialized$1(_this),
          prefixCls = _assertThisInitialize2.prefixCls,
          tagPrefixCls = _assertThisInitialize2.tagPrefixCls;

      if (!ranges && !renderExtraFooter) {
        return null;
      }

      var customFooter = renderExtraFooter ? /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-footer-extra"),
        key: "extra"
      }, renderExtraFooter()) : null;
      var operations = ranges && Object.keys(ranges).map(function (range) {
        var value = ranges[range];
        var hoverValue = typeof value === 'function' ? value.call(_assertThisInitialized$1(_this)) : value;
        return /*#__PURE__*/React.createElement(Tag, {
          key: range,
          prefixCls: tagPrefixCls,
          color: "blue",
          onClick: function onClick() {
            return _this.handleRangeClick(value);
          },
          onMouseEnter: function onMouseEnter() {
            return _this.setState({
              hoverValue: hoverValue
            });
          },
          onMouseLeave: _this.handleRangeMouseLeave
        }, range);
      });
      var rangeNode = operations && operations.length > 0 ? /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-footer-extra ").concat(prefixCls, "-range-quick-selector"),
        key: "range"
      }, operations) : null;
      return [rangeNode, customFooter];
    };

    _this.renderRangePicker = function (_ref3) {
      var _classNames;

      var getPrefixCls = _ref3.getPrefixCls;

      var _assertThisInitialize3 = _assertThisInitialized$1(_this),
          state = _assertThisInitialize3.state,
          props = _assertThisInitialize3.props;

      var value = state.value,
          showDate = state.showDate,
          hoverValue = state.hoverValue,
          open = state.open;
      var customizePrefixCls = props.prefixCls,
          customizeTagPrefixCls = props.tagPrefixCls,
          popupStyle = props.popupStyle,
          style = props.style,
          disabledDate = props.disabledDate,
          disabledTime = props.disabledTime,
          showTime = props.showTime,
          showToday = props.showToday,
          ranges = props.ranges,
          onOk = props.onOk,
          locale = props.locale,
          localeCode = props.localeCode,
          format = props.format,
          dateRender = props.dateRender,
          onCalendarChange = props.onCalendarChange,
          suffixIcon = props.suffixIcon,
          separator = props.separator;
      var prefixCls = getPrefixCls('calendar', customizePrefixCls);
      var tagPrefixCls = getPrefixCls('tag', customizeTagPrefixCls); // To support old version react.
      // Have to add prefixCls on the instance.
      // https://github.com/facebook/react/issues/12397

      _this.prefixCls = prefixCls;
      _this.tagPrefixCls = tagPrefixCls;
      fixLocale(value, localeCode);
      fixLocale(showDate, localeCode);
      var calendarClassName = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-time"), showTime), _defineProperty(_classNames, "".concat(prefixCls, "-range-with-ranges"), ranges), _classNames)); // 需要选择时间时，点击 ok 时才触发 onChange

      var pickerChangeHandler = {
        onChange: _this.handleChange
      };
      var calendarProps = {
        onOk: _this.handleChange
      };

      if (props.timePicker) {
        pickerChangeHandler.onChange = function (changedValue) {
          return _this.handleChange(changedValue);
        };
      } else {
        calendarProps = {};
      }

      if ('mode' in props) {
        calendarProps.mode = props.mode;
      }

      var startPlaceholder = Array.isArray(props.placeholder) ? props.placeholder[0] : locale.lang.rangePlaceholder[0];
      var endPlaceholder = Array.isArray(props.placeholder) ? props.placeholder[1] : locale.lang.rangePlaceholder[1];
      var calendar = /*#__PURE__*/React.createElement(RangeCalendar$1, _extends$2({}, calendarProps, {
        seperator: separator,
        onChange: onCalendarChange,
        format: format,
        prefixCls: prefixCls,
        className: calendarClassName,
        renderFooter: _this.renderFooter,
        timePicker: props.timePicker,
        disabledDate: disabledDate,
        disabledTime: disabledTime,
        dateInputPlaceholder: [startPlaceholder, endPlaceholder],
        locale: locale.lang,
        onOk: onOk,
        dateRender: dateRender,
        value: showDate,
        onValueChange: _this.handleShowDateChange,
        hoverValue: hoverValue,
        onHoverChange: _this.handleHoverChange,
        onPanelChange: props.onPanelChange,
        showToday: showToday,
        onInputSelect: _this.handleCalendarInputSelect
      })); // default width for showTime

      var pickerStyle = {};

      if (props.showTime) {
        pickerStyle.width = style && style.width || 350;
      }

      var _value5 = _slicedToArray(value, 2),
          startValue = _value5[0],
          endValue = _value5[1];

      var clearIcon = !props.disabled && props.allowClear && value && (startValue || endValue) ? /*#__PURE__*/React.createElement(Icon, {
        type: "close-circle",
        className: "".concat(prefixCls, "-picker-clear"),
        onClick: _this.clearSelection,
        theme: "filled"
      }) : null;
      var inputIcon = /*#__PURE__*/React.createElement(InputIcon, {
        suffixIcon: suffixIcon,
        prefixCls: prefixCls
      });

      var input = function input(_ref4) {
        var inputValue = _ref4.value;

        var _inputValue = _slicedToArray(inputValue, 2),
            start = _inputValue[0],
            end = _inputValue[1];

        return /*#__PURE__*/React.createElement("span", {
          className: props.pickerInputClass
        }, /*#__PURE__*/React.createElement("input", {
          disabled: props.disabled,
          readOnly: true,
          value: formatDate(start, props.format),
          placeholder: startPlaceholder,
          className: "".concat(prefixCls, "-range-picker-input"),
          tabIndex: -1
        }), /*#__PURE__*/React.createElement("span", {
          className: "".concat(prefixCls, "-range-picker-separator")
        }, " ", separator, " "), /*#__PURE__*/React.createElement("input", {
          disabled: props.disabled,
          readOnly: true,
          value: formatDate(end, props.format),
          placeholder: endPlaceholder,
          className: "".concat(prefixCls, "-range-picker-input"),
          tabIndex: -1
        }), clearIcon, inputIcon);
      };

      return /*#__PURE__*/React.createElement("span", {
        ref: _this.savePicker,
        id: typeof props.id === 'number' ? props.id.toString() : props.id,
        className: classNames(props.className, props.pickerClass),
        style: _extends$2(_extends$2({}, style), pickerStyle),
        tabIndex: props.disabled ? -1 : 0,
        onFocus: props.onFocus,
        onBlur: props.onBlur,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave
      }, /*#__PURE__*/React.createElement(Picker, _extends$2({}, props, pickerChangeHandler, {
        calendar: calendar,
        value: value,
        open: open,
        onOpenChange: _this.handleOpenChange,
        prefixCls: "".concat(prefixCls, "-picker-container"),
        style: popupStyle
      }), input));
    };

    var value = props.value || props.defaultValue || [];

    var _value6 = _slicedToArray(value, 2),
        start = _value6[0],
        end = _value6[1];

    if (start && !interopDefault(moment$1).isMoment(start) || end && !interopDefault(moment$1).isMoment(end)) {
      throw new Error('The value/defaultValue of RangePicker must be a moment object array after `antd@2.0`, ' + 'see: https://u.ant.design/date-picker-value');
    }

    var pickerValue = !value || isEmptyArray(value) ? props.defaultPickerValue : value;
    _this.state = {
      value: value,
      showDate: pickerValueAdapter(pickerValue || interopDefault(moment$1)()),
      open: props.open,
      hoverValue: []
    };
    return _this;
  }

  _createClass$1(RangePicker, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_, prevState) {
      if (!('open' in this.props) && prevState.open && !this.state.open) {
        this.focus();
      }
    }
  }, {
    key: "setValue",
    value: function setValue(value, hidePanel) {
      this.handleChange(value);

      if ((hidePanel || !this.props.showTime) && !('open' in this.props)) {
        this.setState({
          open: false
        });
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      this.picker.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.picker.blur();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderRangePicker);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var state = null;

      if ('value' in nextProps) {
        var value = nextProps.value || [];
        state = {
          value: value
        };

        if (!shallowEqual(nextProps.value, prevState.value)) {
          state = _extends$2(_extends$2({}, state), {
            showDate: getShowDateFromValue(value, nextProps.mode) || prevState.showDate
          });
        }
      }

      if ('open' in nextProps && prevState.open !== nextProps.open) {
        state = _extends$2(_extends$2({}, state), {
          open: nextProps.open
        });
      }

      return state;
    }
  }]);

  return RangePicker;
}(React.Component);

RangePicker.defaultProps = {
  allowClear: true,
  showToday: false,
  separator: '~'
};
polyfill(RangePicker);

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function formatValue(value, format) {
  return value && value.format(format) || '';
}

var WeekPicker = /*#__PURE__*/function (_React$Component) {
  _inherits(WeekPicker, _React$Component);

  var _super = _createSuper(WeekPicker);

  function WeekPicker(props) {
    var _this;

    _classCallCheck(this, WeekPicker);

    _this = _super.call(this, props);

    _this.saveInput = function (node) {
      _this.input = node;
    };

    _this.weekDateRender = function (current) {
      var selectedValue = _this.state.value;

      var _assertThisInitialize = _assertThisInitialized(_this),
          prefixCls = _assertThisInitialize.prefixCls;

      var dateRender = _this.props.dateRender;
      var dateNode = dateRender ? dateRender(current) : current.date();

      if (selectedValue && current.year() === selectedValue.year() && current.week() === selectedValue.week()) {
        return /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-selected-day")
        }, /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-date")
        }, dateNode));
      }

      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-date")
      }, dateNode);
    };

    _this.handleChange = function (value) {
      if (!('value' in _this.props)) {
        _this.setState({
          value: value
        });
      }

      _this.props.onChange(value, formatValue(value, _this.props.format));
    };

    _this.handleOpenChange = function (open) {
      var onOpenChange = _this.props.onOpenChange;

      if (!('open' in _this.props)) {
        _this.setState({
          open: open
        });
      }

      if (onOpenChange) {
        onOpenChange(open);
      }
    };

    _this.clearSelection = function (e) {
      e.preventDefault();
      e.stopPropagation();

      _this.handleChange(null);
    };

    _this.renderFooter = function () {
      var _this$props = _this.props,
          prefixCls = _this$props.prefixCls,
          renderExtraFooter = _this$props.renderExtraFooter;
      return renderExtraFooter ? /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-footer-extra")
      }, renderExtraFooter.apply(void 0, arguments)) : null;
    };

    _this.renderWeekPicker = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;
      var _this$props2 = _this.props,
          customizePrefixCls = _this$props2.prefixCls,
          className = _this$props2.className,
          disabled = _this$props2.disabled,
          pickerClass = _this$props2.pickerClass,
          popupStyle = _this$props2.popupStyle,
          pickerInputClass = _this$props2.pickerInputClass,
          format = _this$props2.format,
          allowClear = _this$props2.allowClear,
          locale = _this$props2.locale,
          localeCode = _this$props2.localeCode,
          disabledDate = _this$props2.disabledDate,
          style = _this$props2.style,
          onFocus = _this$props2.onFocus,
          onBlur = _this$props2.onBlur,
          id = _this$props2.id,
          suffixIcon = _this$props2.suffixIcon,
          defaultPickerValue = _this$props2.defaultPickerValue;
      var prefixCls = getPrefixCls('calendar', customizePrefixCls); // To support old version react.
      // Have to add prefixCls on the instance.
      // https://github.com/facebook/react/issues/12397

      _this.prefixCls = prefixCls;
      var _this$state = _this.state,
          open = _this$state.open,
          pickerValue = _this$state.value;

      if (pickerValue && localeCode) {
        pickerValue.locale(localeCode);
      }

      var placeholder = 'placeholder' in _this.props ? _this.props.placeholder : locale.lang.placeholder;
      var calendar = /*#__PURE__*/React.createElement(Calendar$1, {
        showWeekNumber: true,
        dateRender: _this.weekDateRender,
        prefixCls: prefixCls,
        format: format,
        locale: locale.lang,
        showDateInput: false,
        showToday: false,
        disabledDate: disabledDate,
        renderFooter: _this.renderFooter,
        defaultValue: defaultPickerValue
      });
      var clearIcon = !disabled && allowClear && _this.state.value ? /*#__PURE__*/React.createElement(Icon, {
        type: "close-circle",
        className: "".concat(prefixCls, "-picker-clear"),
        onClick: _this.clearSelection,
        theme: "filled"
      }) : null;
      var inputIcon = /*#__PURE__*/React.createElement(InputIcon, {
        suffixIcon: suffixIcon,
        prefixCls: prefixCls
      });

      var input = function input(_ref2) {
        var value = _ref2.value;
        return /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'inline-block',
            width: '100%'
          }
        }, /*#__PURE__*/React.createElement("input", {
          ref: _this.saveInput,
          disabled: disabled,
          readOnly: true,
          value: value && value.format(format) || '',
          placeholder: placeholder,
          className: pickerInputClass,
          onFocus: onFocus,
          onBlur: onBlur
        }), clearIcon, inputIcon);
      };

      return /*#__PURE__*/React.createElement("span", {
        className: classNames(className, pickerClass),
        style: style,
        id: id
      }, /*#__PURE__*/React.createElement(Picker, _extends$1({}, _this.props, {
        calendar: calendar,
        prefixCls: "".concat(prefixCls, "-picker-container"),
        value: pickerValue,
        onChange: _this.handleChange,
        open: open,
        onOpenChange: _this.handleOpenChange,
        style: popupStyle
      }), input));
    };

    var value = props.value || props.defaultValue;

    if (value && !interopDefault(moment$1).isMoment(value)) {
      throw new Error('The value/defaultValue of WeekPicker must be ' + 'a moment object after `antd@2.0`, see: https://u.ant.design/date-picker-value');
    }

    _this.state = {
      value: value,
      open: props.open
    };
    return _this;
  }

  _createClass(WeekPicker, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_, prevState) {
      if (!('open' in this.props) && prevState.open && !this.state.open) {
        this.focus();
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      this.input.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.input.blur();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderWeekPicker);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('value' in nextProps || 'open' in nextProps) {
        var state = {};

        if ('value' in nextProps) {
          state.value = nextProps.value;
        }

        if ('open' in nextProps) {
          state.open = nextProps.open;
        }

        return state;
      }

      return null;
    }
  }]);

  return WeekPicker;
}(React.Component);

WeekPicker.defaultProps = {
  format: 'gggg-wo',
  allowClear: true
};
polyfill(WeekPicker);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var DatePicker = wrapPicker(createPicker(Calendar$1), 'date');
var MonthPicker = wrapPicker(createPicker(MonthCalendar$1), 'month');

_extends(DatePicker, {
  RangePicker: wrapPicker(RangePicker, 'date'),
  MonthPicker: MonthPicker,
  WeekPicker: wrapPicker(WeekPicker, 'week')
});

export { DatePicker as default };
