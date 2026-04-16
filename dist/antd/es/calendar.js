import { n, P as PropTypes, o as moment, C as ConfigConsumer, l as locale, q as interopDefault, s as moment$1, L as LocaleReceiver, p as propTypesExports } from '../../config-provider.js';
import * as React from 'react';
import React__default, { Component } from 'react';
import { _ as _inherits$2, a as _classCallCheck$2, b as _possibleConstructorReturn$2, e as _extends$1 } from '../../icon.js';
import { p as polyfill } from '../../menu.js';
import { g as getMonthName, c as calendarMixinWrapper, a as commonMixinWrapper, b as getNowByCurrentStateValue, D as DateTable, M as MonthTable, d as calendarMixinPropTypes, p as propType, e as calendarMixinDefaultProps, f as defaultProp } from '../../CommonMixin.js';
import { S as Select } from '../../index15.js';
import { a as RadioGroup, R as RadioButton } from '../../index16.js';
import 'react-dom';
import '../../Divider.js';
import '../../index7.js';
import '../../tree.js';
import '../../input.js';
import '../../Checkbox.js';

var css = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-fullcalendar {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  border-top: 1px solid #d9d9d9;\n  outline: none;\n}\n.ant-select.ant-fullcalendar-year-select {\n  min-width: 90px;\n}\n.ant-select.ant-fullcalendar-year-select.ant-select-sm {\n  min-width: 70px;\n}\n.ant-select.ant-fullcalendar-month-select {\n  min-width: 80px;\n  margin-left: 8px;\n}\n.ant-select.ant-fullcalendar-month-select.ant-select-sm {\n  min-width: 70px;\n}\n.ant-fullcalendar-header {\n  padding: 11px 16px 11px 0;\n  text-align: right;\n}\n.ant-fullcalendar-header .ant-select-dropdown {\n  text-align: left;\n}\n.ant-fullcalendar-header .ant-radio-group {\n  margin-left: 8px;\n  text-align: left;\n}\n.ant-fullcalendar-header label.ant-radio-button {\n  height: 22px;\n  padding: 0 10px;\n  line-height: 20px;\n}\n.ant-fullcalendar-date-panel {\n  position: relative;\n  outline: none;\n}\n.ant-fullcalendar-calendar-body {\n  padding: 8px 12px;\n}\n.ant-fullcalendar table {\n  width: 100%;\n  max-width: 100%;\n  height: 256px;\n  background-color: transparent;\n  border-collapse: collapse;\n}\n.ant-fullcalendar table,\n.ant-fullcalendar th,\n.ant-fullcalendar td {\n  border: 0;\n}\n.ant-fullcalendar td {\n  position: relative;\n}\n.ant-fullcalendar-calendar-table {\n  margin-bottom: 0;\n  border-spacing: 0;\n}\n.ant-fullcalendar-column-header {\n  width: 33px;\n  padding: 0;\n  line-height: 18px;\n  text-align: center;\n}\n.ant-fullcalendar-column-header .ant-fullcalendar-column-header-inner {\n  display: block;\n  font-weight: normal;\n}\n.ant-fullcalendar-week-number-header .ant-fullcalendar-column-header-inner {\n  display: none;\n}\n.ant-fullcalendar-month,\n.ant-fullcalendar-date {\n  text-align: center;\n  transition: all 0.3s;\n}\n.ant-fullcalendar-value {\n  display: block;\n  width: 24px;\n  height: 24px;\n  margin: 0 auto;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  line-height: 24px;\n  background: transparent;\n  border-radius: 2px;\n  transition: all 0.3s;\n}\n.ant-fullcalendar-value:hover {\n  background: #e6f7ff;\n  cursor: pointer;\n}\n.ant-fullcalendar-value:active {\n  color: #fff;\n  background: #1890ff;\n}\n.ant-fullcalendar-month-panel-cell .ant-fullcalendar-value {\n  width: 48px;\n}\n.ant-fullcalendar-today .ant-fullcalendar-value,\n.ant-fullcalendar-month-panel-current-cell .ant-fullcalendar-value {\n  box-shadow: 0 0 0 1px #1890ff inset;\n}\n.ant-fullcalendar-selected-day .ant-fullcalendar-value,\n.ant-fullcalendar-month-panel-selected-cell .ant-fullcalendar-value {\n  color: #fff;\n  background: #1890ff;\n}\n.ant-fullcalendar-disabled-cell-first-of-row .ant-fullcalendar-value {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.ant-fullcalendar-disabled-cell-last-of-row .ant-fullcalendar-value {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.ant-fullcalendar-last-month-cell .ant-fullcalendar-value,\n.ant-fullcalendar-next-month-btn-day .ant-fullcalendar-value {\n  color: rgba(0, 0, 0, 0.25);\n}\n.ant-fullcalendar-month-panel-table {\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n}\n.ant-fullcalendar-content {\n  position: absolute;\n  bottom: -9px;\n  left: 0;\n  width: 100%;\n}\n.ant-fullcalendar-fullscreen {\n  border-top: 0;\n}\n.ant-fullcalendar-fullscreen .ant-fullcalendar-table {\n  table-layout: fixed;\n}\n.ant-fullcalendar-fullscreen .ant-fullcalendar-header .ant-radio-group {\n  margin-left: 16px;\n}\n.ant-fullcalendar-fullscreen .ant-fullcalendar-header label.ant-radio-button {\n  height: 32px;\n  line-height: 30px;\n}\n.ant-fullcalendar-fullscreen .ant-fullcalendar-month,\n.ant-fullcalendar-fullscreen .ant-fullcalendar-date {\n  display: block;\n  height: 116px;\n  margin: 0 4px;\n  padding: 4px 8px;\n  color: rgba(0, 0, 0, 0.65);\n  text-align: left;\n  border-top: 2px solid #e8e8e8;\n  transition: background 0.3s;\n}\n.ant-fullcalendar-fullscreen .ant-fullcalendar-month:hover,\n.ant-fullcalendar-fullscreen .ant-fullcalendar-date:hover {\n  background: #e6f7ff;\n  cursor: pointer;\n}\n.ant-fullcalendar-fullscreen .ant-fullcalendar-month:active,\n.ant-fullcalendar-fullscreen .ant-fullcalendar-date:active {\n  background: #bae7ff;\n}\n.ant-fullcalendar-fullscreen .ant-fullcalendar-column-header {\n  padding-right: 12px;\n  padding-bottom: 5px;\n  text-align: right;\n}\n.ant-fullcalendar-fullscreen .ant-fullcalendar-value {\n  width: auto;\n  text-align: right;\n  background: transparent;\n}\n.ant-fullcalendar-fullscreen .ant-fullcalendar-today .ant-fullcalendar-value {\n  color: rgba(0, 0, 0, 0.65);\n}\n.ant-fullcalendar-fullscreen .ant-fullcalendar-month-panel-current-cell .ant-fullcalendar-month,\n.ant-fullcalendar-fullscreen .ant-fullcalendar-today .ant-fullcalendar-date {\n  background: transparent;\n  border-top-color: #1890ff;\n}\n.ant-fullcalendar-fullscreen .ant-fullcalendar-month-panel-current-cell .ant-fullcalendar-value,\n.ant-fullcalendar-fullscreen .ant-fullcalendar-today .ant-fullcalendar-value {\n  box-shadow: none;\n}\n.ant-fullcalendar-fullscreen .ant-fullcalendar-month-panel-selected-cell .ant-fullcalendar-month,\n.ant-fullcalendar-fullscreen .ant-fullcalendar-selected-day .ant-fullcalendar-date {\n  background: #e6f7ff;\n}\n.ant-fullcalendar-fullscreen .ant-fullcalendar-month-panel-selected-cell .ant-fullcalendar-value,\n.ant-fullcalendar-fullscreen .ant-fullcalendar-selected-day .ant-fullcalendar-value {\n  color: #1890ff;\n}\n.ant-fullcalendar-fullscreen .ant-fullcalendar-last-month-cell .ant-fullcalendar-date,\n.ant-fullcalendar-fullscreen .ant-fullcalendar-next-month-btn-day .ant-fullcalendar-date {\n  color: rgba(0, 0, 0, 0.25);\n}\n.ant-fullcalendar-fullscreen .ant-fullcalendar-content {\n  position: static;\n  width: auto;\n  height: 88px;\n  overflow-y: auto;\n}\n.ant-fullcalendar-disabled-cell .ant-fullcalendar-date,\n.ant-fullcalendar-disabled-cell .ant-fullcalendar-date:hover {\n  cursor: not-allowed;\n}\n.ant-fullcalendar-disabled-cell:not(.ant-fullcalendar-today) .ant-fullcalendar-date,\n.ant-fullcalendar-disabled-cell:not(.ant-fullcalendar-today) .ant-fullcalendar-date:hover {\n  background: transparent;\n}\n.ant-fullcalendar-disabled-cell .ant-fullcalendar-value {\n  width: auto;\n  color: rgba(0, 0, 0, 0.25);\n  border-radius: 0;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=index.css.map */";
n(css,{"prepend":true});

function noop$1() {}

var CalendarHeader = function (_Component) {
  _inherits$2(CalendarHeader, _Component);

  function CalendarHeader() {
    _classCallCheck$2(this, CalendarHeader);

    return _possibleConstructorReturn$2(this, _Component.apply(this, arguments));
  }

  CalendarHeader.prototype.onYearChange = function onYearChange(year) {
    var newValue = this.props.value.clone();
    newValue.year(parseInt(year, 10));
    this.props.onValueChange(newValue);
  };

  CalendarHeader.prototype.onMonthChange = function onMonthChange(month) {
    var newValue = this.props.value.clone();
    newValue.month(parseInt(month, 10));
    this.props.onValueChange(newValue);
  };

  CalendarHeader.prototype.yearSelectElement = function yearSelectElement(year) {
    var _props = this.props,
        yearSelectOffset = _props.yearSelectOffset,
        yearSelectTotal = _props.yearSelectTotal,
        prefixCls = _props.prefixCls,
        Select = _props.Select;

    var start = year - yearSelectOffset;
    var end = start + yearSelectTotal;

    var options = [];
    for (var index = start; index < end; index++) {
      options.push(React__default.createElement(
        Select.Option,
        { key: '' + index },
        index
      ));
    }
    return React__default.createElement(
      Select,
      {
        className: prefixCls + '-header-year-select',
        onChange: this.onYearChange.bind(this),
        dropdownStyle: { zIndex: 2000 },
        dropdownMenuStyle: { maxHeight: 250, overflow: 'auto', fontSize: 12 },
        optionLabelProp: 'children',
        value: String(year),
        showSearch: false
      },
      options
    );
  };

  CalendarHeader.prototype.monthSelectElement = function monthSelectElement(month) {
    var props = this.props;
    var t = props.value.clone();
    var prefixCls = props.prefixCls;

    var options = [];
    var Select = props.Select;

    for (var index = 0; index < 12; index++) {
      t.month(index);
      options.push(React__default.createElement(
        Select.Option,
        { key: '' + index },
        getMonthName(t)
      ));
    }

    return React__default.createElement(
      Select,
      {
        className: prefixCls + '-header-month-select',
        dropdownStyle: { zIndex: 2000 },
        dropdownMenuStyle: { maxHeight: 250, overflow: 'auto', overflowX: 'hidden', fontSize: 12 },
        optionLabelProp: 'children',
        value: String(month),
        showSearch: false,
        onChange: this.onMonthChange.bind(this)
      },
      options
    );
  };

  CalendarHeader.prototype.changeTypeToDate = function changeTypeToDate() {
    this.props.onTypeChange('date');
  };

  CalendarHeader.prototype.changeTypeToMonth = function changeTypeToMonth() {
    this.props.onTypeChange('month');
  };

  CalendarHeader.prototype.render = function render() {
    var _props2 = this.props,
        value = _props2.value,
        locale = _props2.locale,
        prefixCls = _props2.prefixCls,
        type = _props2.type,
        showTypeSwitch = _props2.showTypeSwitch,
        headerComponents = _props2.headerComponents;

    var year = value.year();
    var month = value.month();
    var yearSelect = this.yearSelectElement(year);
    var monthSelect = type === 'month' ? null : this.monthSelectElement(month);
    var switchCls = prefixCls + '-header-switcher';
    var typeSwitcher = showTypeSwitch ? React__default.createElement(
      'span',
      { className: switchCls },
      type === 'date' ? React__default.createElement(
        'span',
        { className: switchCls + '-focus' },
        locale.month
      ) : React__default.createElement(
        'span',
        {
          onClick: this.changeTypeToDate.bind(this),
          className: switchCls + '-normal'
        },
        locale.month
      ),
      type === 'month' ? React__default.createElement(
        'span',
        { className: switchCls + '-focus' },
        locale.year
      ) : React__default.createElement(
        'span',
        {
          onClick: this.changeTypeToMonth.bind(this),
          className: switchCls + '-normal'
        },
        locale.year
      )
    ) : null;

    return React__default.createElement(
      'div',
      { className: prefixCls + '-header' },
      typeSwitcher,
      monthSelect,
      yearSelect,
      headerComponents
    );
  };

  return CalendarHeader;
}(Component);

CalendarHeader.propTypes = {
  value: PropTypes.object,
  locale: PropTypes.object,
  yearSelectOffset: PropTypes.number,
  yearSelectTotal: PropTypes.number,
  onValueChange: PropTypes.func,
  onTypeChange: PropTypes.func,
  Select: PropTypes.func,
  prefixCls: PropTypes.string,
  type: PropTypes.string,
  showTypeSwitch: PropTypes.bool,
  headerComponents: PropTypes.array
};
CalendarHeader.defaultProps = {
  yearSelectOffset: 10,
  yearSelectTotal: 20,
  onValueChange: noop$1,
  onTypeChange: noop$1
};

var FullCalendar = function (_React$Component) {
  _inherits$2(FullCalendar, _React$Component);

  function FullCalendar(props) {
    _classCallCheck$2(this, FullCalendar);

    var _this = _possibleConstructorReturn$2(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var type = void 0;
    if ('type' in props) {
      type = props.type;
    } else {
      type = props.defaultType;
    }

    _this.state = {
      type: type,
      value: props.value || props.defaultValue || moment(),
      selectedValue: props.selectedValue || props.defaultSelectedValue
    };
    return _this;
  }

  FullCalendar.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, state) {
    var newState = {};
    var value = nextProps.value,
        selectedValue = nextProps.selectedValue;


    if ('type' in nextProps) {
      newState = {
        type: nextProps.type
      };
    }
    if ('value' in nextProps) {
      newState.value = value || nextProps.defaultValue || getNowByCurrentStateValue(state.value);
    }
    if ('selectedValue' in nextProps) {
      newState.selectedValue = selectedValue;
    }

    return newState;
  };

  FullCalendar.prototype.render = function render() {
    var props = this.props;
    var locale = props.locale,
        prefixCls = props.prefixCls,
        fullscreen = props.fullscreen,
        showHeader = props.showHeader,
        headerComponent = props.headerComponent,
        headerRender = props.headerRender,
        disabledDate = props.disabledDate;
    var _state = this.state,
        value = _state.value,
        type = _state.type;


    var header = null;
    if (showHeader) {
      if (headerRender) {
        header = headerRender(value, type, locale);
      } else {
        var TheHeader = headerComponent || CalendarHeader;
        header = React__default.createElement(TheHeader, _extends$1({
          key: 'calendar-header'
        }, props, {
          prefixCls: prefixCls + '-full',
          type: type,
          value: value,
          onTypeChange: this.setType,
          onValueChange: this.setValue
        }));
      }
    }

    var table = type === 'date' ? React__default.createElement(DateTable, {
      dateRender: props.dateCellRender,
      contentRender: props.dateCellContentRender,
      locale: locale,
      prefixCls: prefixCls,
      onSelect: this.onSelect,
      value: value,
      disabledDate: disabledDate
    }) : React__default.createElement(MonthTable, {
      cellRender: props.monthCellRender,
      contentRender: props.monthCellContentRender,
      locale: locale,
      onSelect: this.onMonthSelect,
      prefixCls: prefixCls + '-month-panel',
      value: value,
      disabledDate: disabledDate
    });

    var children = [header, React__default.createElement(
      'div',
      { key: 'calendar-body', className: prefixCls + '-calendar-body' },
      table
    )];

    var className = [prefixCls + '-full'];

    if (fullscreen) {
      className.push(prefixCls + '-fullscreen');
    }

    return this.renderRoot({
      children: children,
      className: className.join(' ')
    });
  };

  return FullCalendar;
}(React__default.Component);

FullCalendar.propTypes = _extends$1({}, calendarMixinPropTypes, propType, {
  defaultType: PropTypes.string,
  type: PropTypes.string,
  prefixCls: PropTypes.string,
  locale: PropTypes.object,
  onTypeChange: PropTypes.func,
  fullscreen: PropTypes.bool,
  monthCellRender: PropTypes.func,
  dateCellRender: PropTypes.func,
  showTypeSwitch: PropTypes.bool,
  Select: PropTypes.func.isRequired,
  headerComponents: PropTypes.array,
  headerComponent: PropTypes.object, // The whole header component
  headerRender: PropTypes.func,
  showHeader: PropTypes.bool,
  disabledDate: PropTypes.func,
  value: PropTypes.object,
  defaultValue: PropTypes.object,
  selectedValue: PropTypes.object,
  defaultSelectedValue: PropTypes.object
});
FullCalendar.defaultProps = _extends$1({}, calendarMixinDefaultProps, defaultProp, {
  defaultType: 'date',
  fullscreen: false,
  showTypeSwitch: true,
  showHeader: true,
  onTypeChange: function onTypeChange() {}
});

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onMonthSelect = function (value) {
    _this2.onSelect(value, {
      target: 'month'
    });
  };

  this.setType = function (type) {
    if (!('type' in _this2.props)) {
      _this2.setState({
        type: type
      });
    }
    _this2.props.onTypeChange(type);
  };
};

polyfill(FullCalendar);

var FullCalendar$1 = calendarMixinWrapper(commonMixinWrapper(FullCalendar));

function _typeof$1(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

function _slicedToArray$1(arr, i) { return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1(); }

function _nonIterableRest$1() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$1(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$1(arr) { if (Array.isArray(arr)) return arr; }

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
var Option = Select.Option;

function getMonthsLocale(value) {
  var current = value.clone();
  var localeData = value.localeData();
  var months = [];

  for (var i = 0; i < 12; i++) {
    current.month(i);
    months.push(localeData.monthsShort(current));
  }

  return months;
}

var Header = /*#__PURE__*/function (_React$Component) {
  _inherits$1(Header, _React$Component);

  var _super = _createSuper$1(Header);

  function Header() {
    var _this;

    _classCallCheck$1(this, Header);

    _this = _super.apply(this, arguments);

    _this.onYearChange = function (year) {
      var _this$props = _this.props,
          value = _this$props.value,
          validRange = _this$props.validRange;
      var newValue = value.clone();
      newValue.year(parseInt(year, 10)); // switch the month so that it remains within range when year changes

      if (validRange) {
        var _validRange = _slicedToArray$1(validRange, 2),
            start = _validRange[0],
            end = _validRange[1];

        var newYear = newValue.get('year');
        var newMonth = newValue.get('month');

        if (newYear === end.get('year') && newMonth > end.get('month')) {
          newValue.month(end.get('month'));
        }

        if (newYear === start.get('year') && newMonth < start.get('month')) {
          newValue.month(start.get('month'));
        }
      }

      var onValueChange = _this.props.onValueChange;

      if (onValueChange) {
        onValueChange(newValue);
      }
    };

    _this.onMonthChange = function (month) {
      var newValue = _this.props.value.clone();

      newValue.month(parseInt(month, 10));
      var onValueChange = _this.props.onValueChange;

      if (onValueChange) {
        onValueChange(newValue);
      }
    };

    _this.onInternalTypeChange = function (e) {
      _this.onTypeChange(e.target.value);
    };

    _this.onTypeChange = function (type) {
      var onTypeChange = _this.props.onTypeChange;

      if (onTypeChange) {
        onTypeChange(type);
      }
    };

    _this.getCalenderHeaderNode = function (node) {
      _this.calenderHeaderNode = node;
    };

    _this.getMonthYearSelections = function (getPrefixCls) {
      var _this$props2 = _this.props,
          customizePrefixCls = _this$props2.prefixCls,
          type = _this$props2.type,
          value = _this$props2.value;
      var prefixCls = getPrefixCls('fullcalendar', customizePrefixCls);

      var yearReactNode = _this.getYearSelectElement(prefixCls, value.year());

      var monthReactNode = type === 'month' ? _this.getMonthSelectElement(prefixCls, value.month(), getMonthsLocale(value)) : null;
      return {
        yearReactNode: yearReactNode,
        monthReactNode: monthReactNode
      };
    };

    _this.getTypeSwitch = function () {
      var _this$props3 = _this.props,
          _this$props3$locale = _this$props3.locale,
          locale = _this$props3$locale === void 0 ? {} : _this$props3$locale,
          type = _this$props3.type,
          fullscreen = _this$props3.fullscreen;
      var size = fullscreen ? 'default' : 'small';
      return /*#__PURE__*/React.createElement(RadioGroup, {
        onChange: _this.onInternalTypeChange,
        value: type,
        size: size
      }, /*#__PURE__*/React.createElement(RadioButton, {
        value: "month"
      }, locale.month), /*#__PURE__*/React.createElement(RadioButton, {
        value: "year"
      }, locale.year));
    };

    _this.headerRenderCustom = function (headerRender) {
      var _this$props4 = _this.props,
          type = _this$props4.type,
          onValueChange = _this$props4.onValueChange,
          value = _this$props4.value;
      return headerRender({
        value: value,
        type: type || 'month',
        onChange: onValueChange,
        onTypeChange: _this.onTypeChange
      });
    };

    _this.renderHeader = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;
      var _this$props5 = _this.props,
          prefixCls = _this$props5.prefixCls,
          headerRender = _this$props5.headerRender;

      var typeSwitch = _this.getTypeSwitch();

      var _this$getMonthYearSel = _this.getMonthYearSelections(getPrefixCls),
          yearReactNode = _this$getMonthYearSel.yearReactNode,
          monthReactNode = _this$getMonthYearSel.monthReactNode;

      return headerRender ? _this.headerRenderCustom(headerRender) : /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-header"),
        ref: _this.getCalenderHeaderNode
      }, yearReactNode, monthReactNode, typeSwitch);
    };

    return _this;
  }

  _createClass$1(Header, [{
    key: "getYearSelectElement",
    value: function getYearSelectElement(prefixCls, year) {
      var _this2 = this;

      var _this$props6 = this.props,
          yearSelectOffset = _this$props6.yearSelectOffset,
          yearSelectTotal = _this$props6.yearSelectTotal,
          _this$props6$locale = _this$props6.locale,
          locale = _this$props6$locale === void 0 ? {} : _this$props6$locale,
          fullscreen = _this$props6.fullscreen,
          validRange = _this$props6.validRange;
      var start = year - yearSelectOffset;
      var end = start + yearSelectTotal;

      if (validRange) {
        start = validRange[0].get('year');
        end = validRange[1].get('year') + 1;
      }

      var suffix = locale.year === '年' ? '年' : '';
      var options = [];

      for (var index = start; index < end; index++) {
        options.push( /*#__PURE__*/React.createElement(Option, {
          key: "".concat(index)
        }, index + suffix));
      }

      return /*#__PURE__*/React.createElement(Select, {
        size: fullscreen ? 'default' : 'small',
        dropdownMatchSelectWidth: false,
        className: "".concat(prefixCls, "-year-select"),
        onChange: this.onYearChange,
        value: String(year),
        getPopupContainer: function getPopupContainer() {
          return _this2.calenderHeaderNode;
        }
      }, options);
    }
  }, {
    key: "getMonthSelectElement",
    value: function getMonthSelectElement(prefixCls, month, months) {
      var _this3 = this;

      var _this$props7 = this.props,
          fullscreen = _this$props7.fullscreen,
          validRange = _this$props7.validRange,
          value = _this$props7.value;
      var options = [];
      var start = 0;
      var end = 12;

      if (validRange) {
        var _validRange2 = _slicedToArray$1(validRange, 2),
            rangeStart = _validRange2[0],
            rangeEnd = _validRange2[1];

        var currentYear = value.get('year');

        if (rangeEnd.get('year') === currentYear) {
          end = rangeEnd.get('month') + 1;
        }

        if (rangeStart.get('year') === currentYear) {
          start = rangeStart.get('month');
        }
      }

      for (var index = start; index < end; index++) {
        options.push( /*#__PURE__*/React.createElement(Option, {
          key: "".concat(index)
        }, months[index]));
      }

      return /*#__PURE__*/React.createElement(Select, {
        size: fullscreen ? 'default' : 'small',
        dropdownMatchSelectWidth: false,
        className: "".concat(prefixCls, "-month-select"),
        value: String(month),
        onChange: this.onMonthChange,
        getPopupContainer: function getPopupContainer() {
          return _this3.calenderHeaderNode;
        }
      }, options);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderHeader);
    }
  }]);

  return Header;
}(React.Component);
Header.defaultProps = {
  yearSelectOffset: 10,
  yearSelectTotal: 20
};

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

function noop() {
  return null;
}

function zerofixed(v) {
  if (v < 10) {
    return "0".concat(v);
  }

  return "".concat(v);
}

var Calendar = /*#__PURE__*/function (_React$Component) {
  _inherits(Calendar, _React$Component);

  var _super = _createSuper(Calendar);

  function Calendar(props) {
    var _this;

    _classCallCheck(this, Calendar);

    _this = _super.call(this, props);

    _this.onHeaderValueChange = function (value) {
      _this.setValue(value, 'changePanel');
    };

    _this.onHeaderTypeChange = function (mode) {
      _this.setState({
        mode: mode
      });

      _this.onPanelChange(_this.state.value, mode);
    };

    _this.onSelect = function (value) {
      _this.setValue(value, 'select');
    };

    _this.setValue = function (value, way) {
      var prevValue = _this.props.value || _this.state.value;
      var mode = _this.state.mode;

      if (!('value' in _this.props)) {
        _this.setState({
          value: value
        });
      }

      if (way === 'select') {
        if (prevValue && prevValue.month() !== value.month()) {
          _this.onPanelChange(value, mode);
        }

        if (_this.props.onSelect) {
          _this.props.onSelect(value);
        }
      } else if (way === 'changePanel') {
        _this.onPanelChange(value, mode);
      }
    };

    _this.getDateRange = function (validRange, disabledDate) {
      return function (current) {
        if (!current) {
          return false;
        }

        var _validRange = _slicedToArray(validRange, 2),
            startDate = _validRange[0],
            endDate = _validRange[1];

        var inRange = !current.isBetween(startDate, endDate, 'days', '[]');

        if (disabledDate) {
          return disabledDate(current) || inRange;
        }

        return inRange;
      };
    };

    _this.getDefaultLocale = function () {
      var result = _extends(_extends({}, locale), _this.props.locale);

      result.lang = _extends(_extends({}, result.lang), (_this.props.locale || {}).lang);
      return result;
    };

    _this.monthCellRender = function (value) {
      var _this$props$monthCell = _this.props.monthCellRender,
          monthCellRender = _this$props$monthCell === void 0 ? noop : _this$props$monthCell;

      var _assertThisInitialize = _assertThisInitialized(_this),
          prefixCls = _assertThisInitialize.prefixCls;

      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-month")
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-value")
      }, value.localeData().monthsShort(value)), /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, monthCellRender(value)));
    };

    _this.dateCellRender = function (value) {
      var _this$props$dateCellR = _this.props.dateCellRender,
          dateCellRender = _this$props$dateCellR === void 0 ? noop : _this$props$dateCellR;

      var _assertThisInitialize2 = _assertThisInitialized(_this),
          prefixCls = _assertThisInitialize2.prefixCls;

      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-date")
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-value")
      }, zerofixed(value.date())), /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, dateCellRender(value)));
    };

    _this.renderCalendar = function (locale, localeCode) {
      var _assertThisInitialize3 = _assertThisInitialized(_this),
          state = _assertThisInitialize3.state,
          props = _assertThisInitialize3.props;

      var value = state.value,
          mode = state.mode;

      if (value && localeCode) {
        value.locale(localeCode);
      }

      var customizePrefixCls = props.prefixCls,
          style = props.style,
          className = props.className,
          fullscreen = props.fullscreen,
          headerRender = props.headerRender,
          dateFullCellRender = props.dateFullCellRender,
          monthFullCellRender = props.monthFullCellRender;
      var monthCellRender = monthFullCellRender || _this.monthCellRender;
      var dateCellRender = dateFullCellRender || _this.dateCellRender;
      var disabledDate = props.disabledDate;

      if (props.validRange) {
        disabledDate = _this.getDateRange(props.validRange, disabledDate);
      }

      return /*#__PURE__*/React.createElement(ConfigConsumer, null, function (_ref) {
        var getPrefixCls = _ref.getPrefixCls;
        var prefixCls = getPrefixCls('fullcalendar', customizePrefixCls); // To support old version react.
        // Have to add prefixCls on the instance.
        // https://github.com/facebook/react/issues/12397

        _this.prefixCls = prefixCls;
        var cls = className || '';

        if (fullscreen) {
          cls += " ".concat(prefixCls, "-fullscreen");
        }

        return /*#__PURE__*/React.createElement("div", {
          className: cls,
          style: style
        }, /*#__PURE__*/React.createElement(Header, {
          fullscreen: fullscreen,
          type: mode,
          headerRender: headerRender,
          value: value,
          locale: locale.lang,
          prefixCls: prefixCls,
          onTypeChange: _this.onHeaderTypeChange,
          onValueChange: _this.onHeaderValueChange,
          validRange: props.validRange
        }), /*#__PURE__*/React.createElement(FullCalendar$1, _extends({}, props, {
          disabledDate: disabledDate,
          Select: noop,
          locale: locale.lang,
          type: mode === 'year' ? 'month' : 'date',
          prefixCls: prefixCls,
          showHeader: false,
          value: value,
          monthCellRender: monthCellRender,
          dateCellRender: dateCellRender,
          onSelect: _this.onSelect
        })));
      });
    };

    var value = props.value || props.defaultValue || interopDefault(moment$1)();

    if (!interopDefault(moment$1).isMoment(value)) {
      throw new Error('The value/defaultValue of Calendar must be a moment object after `antd@2.0`, ' + 'see: https://u.ant.design/calendar-value');
    }

    _this.state = {
      value: value,
      mode: props.mode || 'month'
    };
    return _this;
  }

  _createClass(Calendar, [{
    key: "onPanelChange",
    value: function onPanelChange(value, mode) {
      var _this$props = this.props,
          onPanelChange = _this$props.onPanelChange,
          onChange = _this$props.onChange;

      if (onPanelChange) {
        onPanelChange(value, mode);
      }

      if (onChange && value !== this.state.value) {
        onChange(value);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(LocaleReceiver, {
        componentName: "Calendar",
        defaultLocale: this.getDefaultLocale
      }, this.renderCalendar);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      var newState = {};

      if ('value' in nextProps) {
        newState.value = nextProps.value;
      }

      if ('mode' in nextProps) {
        newState.mode = nextProps.mode;
      }

      return Object.keys(newState).length > 0 ? newState : null;
    }
  }]);

  return Calendar;
}(React.Component);

Calendar.defaultProps = {
  locale: {},
  fullscreen: true,
  onSelect: noop,
  onPanelChange: noop,
  onChange: noop
};
Calendar.propTypes = {
  monthCellRender: propTypesExports.func,
  dateCellRender: propTypesExports.func,
  monthFullCellRender: propTypesExports.func,
  dateFullCellRender: propTypesExports.func,
  fullscreen: propTypesExports.bool,
  locale: propTypesExports.object,
  prefixCls: propTypesExports.string,
  className: propTypesExports.string,
  style: propTypesExports.object,
  onPanelChange: propTypesExports.func,
  value: propTypesExports.object,
  onSelect: propTypesExports.func,
  onChange: propTypesExports.func,
  headerRender: propTypesExports.func
};
polyfill(Calendar);

export { Calendar as default };
