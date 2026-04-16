import * as React from 'react';
import React__default, { Component } from 'react';
import { o as moment, c as classNames, P as PropTypes, j as locale, C as ConfigConsumer, q as interopDefault, s as moment$1, L as LocaleReceiver } from './config-provider.js';
import { o as omit } from './input.js';
import { r as raf, p as polyfill, b as Trigger } from './menu.js';
import ReactDOM__default from 'react-dom';
import { I as Icon } from './icon.js';

function _classCallCheck$5(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$5(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$5(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$5(Constructor.prototype, protoProps); return Constructor; }

function _possibleConstructorReturn$5(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$5(self); }

function _getPrototypeOf$5(o) { _getPrototypeOf$5 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$5(o); }

function _assertThisInitialized$5(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits$5(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$5(subClass, superClass); }

function _setPrototypeOf$5(o, p) { _setPrototypeOf$5 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$5(o, p); }

function _defineProperty$5(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Header =
/*#__PURE__*/
function (_Component) {
  _inherits$5(Header, _Component);

  function Header(props) {
    var _this;

    _classCallCheck$5(this, Header);

    _this = _possibleConstructorReturn$5(this, _getPrototypeOf$5(Header).call(this, props));

    _defineProperty$5(_assertThisInitialized$5(_this), "onInputChange", function (event) {
      var str = event.target.value;

      _this.setState({
        str: str
      });

      var _this$props = _this.props,
          format = _this$props.format,
          hourOptions = _this$props.hourOptions,
          minuteOptions = _this$props.minuteOptions,
          secondOptions = _this$props.secondOptions,
          disabledHours = _this$props.disabledHours,
          disabledMinutes = _this$props.disabledMinutes,
          disabledSeconds = _this$props.disabledSeconds,
          onChange = _this$props.onChange;

      if (str) {
        var originalValue = _this.props.value;

        var value = _this.getProtoValue().clone();

        var parsed = moment(str, format, true);

        if (!parsed.isValid()) {
          _this.setState({
            invalid: true
          });

          return;
        }

        value.hour(parsed.hour()).minute(parsed.minute()).second(parsed.second()); // if time value not allowed, response warning.

        if (hourOptions.indexOf(value.hour()) < 0 || minuteOptions.indexOf(value.minute()) < 0 || secondOptions.indexOf(value.second()) < 0) {
          _this.setState({
            invalid: true
          });

          return;
        } // if time value is disabled, response warning.


        var disabledHourOptions = disabledHours();
        var disabledMinuteOptions = disabledMinutes(value.hour());
        var disabledSecondOptions = disabledSeconds(value.hour(), value.minute());

        if (disabledHourOptions && disabledHourOptions.indexOf(value.hour()) >= 0 || disabledMinuteOptions && disabledMinuteOptions.indexOf(value.minute()) >= 0 || disabledSecondOptions && disabledSecondOptions.indexOf(value.second()) >= 0) {
          _this.setState({
            invalid: true
          });

          return;
        }

        if (originalValue) {
          if (originalValue.hour() !== value.hour() || originalValue.minute() !== value.minute() || originalValue.second() !== value.second()) {
            // keep other fields for rc-calendar
            var changedValue = originalValue.clone();
            changedValue.hour(value.hour());
            changedValue.minute(value.minute());
            changedValue.second(value.second());
            onChange(changedValue);
          }
        } else if (originalValue !== value) {
          onChange(value);
        }
      } else {
        onChange(null);
      }

      _this.setState({
        invalid: false
      });
    });

    _defineProperty$5(_assertThisInitialized$5(_this), "onKeyDown", function (e) {
      var _this$props2 = _this.props,
          onEsc = _this$props2.onEsc,
          onKeyDown = _this$props2.onKeyDown;

      if (e.keyCode === 27) {
        onEsc();
      }

      onKeyDown(e);
    });

    var _value = props.value,
        _format = props.format;
    _this.state = {
      str: _value && _value.format(_format) || '',
      invalid: false
    };
    return _this;
  }

  _createClass$5(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var focusOnOpen = this.props.focusOnOpen;

      if (focusOnOpen) {
        // Wait one frame for the panel to be positioned before focusing
        var requestAnimationFrame = window.requestAnimationFrame || window.setTimeout;
        requestAnimationFrame(function () {
          _this2.refInput.focus();

          _this2.refInput.select();
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props3 = this.props,
          value = _this$props3.value,
          format = _this$props3.format;

      if (value !== prevProps.value) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          str: value && value.format(format) || '',
          invalid: false
        });
      }
    }
  }, {
    key: "getProtoValue",
    value: function getProtoValue() {
      var _this$props4 = this.props,
          value = _this$props4.value,
          defaultOpenValue = _this$props4.defaultOpenValue;
      return value || defaultOpenValue;
    }
  }, {
    key: "getInput",
    value: function getInput() {
      var _this3 = this;

      var _this$props5 = this.props,
          prefixCls = _this$props5.prefixCls,
          placeholder = _this$props5.placeholder,
          inputReadOnly = _this$props5.inputReadOnly;
      var _this$state = this.state,
          invalid = _this$state.invalid,
          str = _this$state.str;
      var invalidClass = invalid ? "".concat(prefixCls, "-input-invalid") : '';
      return React__default.createElement("input", {
        className: classNames("".concat(prefixCls, "-input"), invalidClass),
        ref: function ref(_ref) {
          _this3.refInput = _ref;
        },
        onKeyDown: this.onKeyDown,
        value: str,
        placeholder: placeholder,
        onChange: this.onInputChange,
        readOnly: !!inputReadOnly
      });
    }
  }, {
    key: "render",
    value: function render() {
      var prefixCls = this.props.prefixCls;
      return React__default.createElement("div", {
        className: "".concat(prefixCls, "-input-wrap")
      }, this.getInput());
    }
  }]);

  return Header;
}(Component);

_defineProperty$5(Header, "propTypes", {
  format: PropTypes.string,
  prefixCls: PropTypes.string,
  disabledDate: PropTypes.func,
  placeholder: PropTypes.string,
  clearText: PropTypes.string,
  value: PropTypes.object,
  inputReadOnly: PropTypes.bool,
  hourOptions: PropTypes.array,
  minuteOptions: PropTypes.array,
  secondOptions: PropTypes.array,
  disabledHours: PropTypes.func,
  disabledMinutes: PropTypes.func,
  disabledSeconds: PropTypes.func,
  onChange: PropTypes.func,
  onEsc: PropTypes.func,
  defaultOpenValue: PropTypes.object,
  currentSelectPanel: PropTypes.string,
  focusOnOpen: PropTypes.bool,
  onKeyDown: PropTypes.func,
  clearIcon: PropTypes.node
});

_defineProperty$5(Header, "defaultProps", {
  inputReadOnly: false
});

function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$4(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$4(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$4(Constructor.prototype, protoProps); return Constructor; }

function _possibleConstructorReturn$4(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$4(self); }

function _getPrototypeOf$4(o) { _getPrototypeOf$4 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$4(o); }

function _assertThisInitialized$4(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits$4(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$4(subClass, superClass); }

function _setPrototypeOf$4(o, p) { _setPrototypeOf$4 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$4(o, p); }

function _defineProperty$4(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var scrollTo = function scrollTo(element, to, duration) {
  // jump to target if duration zero
  if (duration <= 0) {
    raf(function () {
      element.scrollTop = to;
    });
    return;
  }

  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;
  raf(function () {
    element.scrollTop += perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  });
};

var Select =
/*#__PURE__*/
function (_Component) {
  _inherits$4(Select, _Component);

  function Select() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck$4(this, Select);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn$4(this, (_getPrototypeOf2 = _getPrototypeOf$4(Select)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty$4(_assertThisInitialized$4(_this), "state", {
      active: false
    });

    _defineProperty$4(_assertThisInitialized$4(_this), "onSelect", function (value) {
      var _this$props = _this.props,
          onSelect = _this$props.onSelect,
          type = _this$props.type;
      onSelect(type, value);
    });

    _defineProperty$4(_assertThisInitialized$4(_this), "handleMouseEnter", function (e) {
      var onMouseEnter = _this.props.onMouseEnter;

      _this.setState({
        active: true
      });

      onMouseEnter(e);
    });

    _defineProperty$4(_assertThisInitialized$4(_this), "handleMouseLeave", function () {
      _this.setState({
        active: false
      });
    });

    _defineProperty$4(_assertThisInitialized$4(_this), "saveList", function (node) {
      _this.list = node;
    });

    return _this;
  }

  _createClass$4(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // jump to selected option
      this.scrollToSelected(0);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var selectedIndex = this.props.selectedIndex; // smooth scroll to selected option

      if (prevProps.selectedIndex !== selectedIndex) {
        this.scrollToSelected(120);
      }
    }
  }, {
    key: "getOptions",
    value: function getOptions() {
      var _this2 = this;

      var _this$props2 = this.props,
          options = _this$props2.options,
          selectedIndex = _this$props2.selectedIndex,
          prefixCls = _this$props2.prefixCls,
          onEsc = _this$props2.onEsc;
      return options.map(function (item, index) {
        var _classNames;

        var cls = classNames((_classNames = {}, _defineProperty$4(_classNames, "".concat(prefixCls, "-select-option-selected"), selectedIndex === index), _defineProperty$4(_classNames, "".concat(prefixCls, "-select-option-disabled"), item.disabled), _classNames));
        var onClick = item.disabled ? undefined : function () {
          _this2.onSelect(item.value);
        };

        var onKeyDown = function onKeyDown(e) {
          if (e.keyCode === 13) onClick();else if (e.keyCode === 27) onEsc();
        };

        return React__default.createElement("li", {
          role: "button",
          onClick: onClick,
          className: cls,
          key: index,
          disabled: item.disabled,
          tabIndex: "0",
          onKeyDown: onKeyDown
        }, item.value);
      });
    }
  }, {
    key: "scrollToSelected",
    value: function scrollToSelected(duration) {
      // move to selected item
      var selectedIndex = this.props.selectedIndex;
      var select = ReactDOM__default.findDOMNode(this);
      var list = ReactDOM__default.findDOMNode(this.list);

      if (!list) {
        return;
      }

      var index = selectedIndex;

      if (index < 0) {
        index = 0;
      }

      var topOption = list.children[index];
      var to = topOption.offsetTop;
      scrollTo(select, to, duration);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          options = _this$props3.options;
      var active = this.state.active;

      if (options.length === 0) {
        return null;
      }

      var cls = classNames("".concat(prefixCls, "-select"), _defineProperty$4({}, "".concat(prefixCls, "-select-active"), active));
      return React__default.createElement("div", {
        className: cls,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      }, React__default.createElement("ul", {
        ref: this.saveList
      }, this.getOptions()));
    }
  }]);

  return Select;
}(Component);

_defineProperty$4(Select, "propTypes", {
  prefixCls: PropTypes.string,
  options: PropTypes.array,
  selectedIndex: PropTypes.number,
  type: PropTypes.string,
  onSelect: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onEsc: PropTypes.func
});

function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$3(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$3(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$3(Constructor.prototype, protoProps); return Constructor; }

function _possibleConstructorReturn$3(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$3(self); }

function _getPrototypeOf$3(o) { _getPrototypeOf$3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$3(o); }

function _assertThisInitialized$3(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$3(subClass, superClass); }

function _setPrototypeOf$3(o, p) { _setPrototypeOf$3 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$3(o, p); }

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var formatOption = function formatOption(option, disabledOptions) {
  var value = "".concat(option);

  if (option < 10) {
    value = "0".concat(option);
  }

  var disabled = false;

  if (disabledOptions && disabledOptions.indexOf(option) >= 0) {
    disabled = true;
  }

  return {
    value: value,
    disabled: disabled
  };
};

var Combobox =
/*#__PURE__*/
function (_Component) {
  _inherits$3(Combobox, _Component);

  function Combobox() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck$3(this, Combobox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn$3(this, (_getPrototypeOf2 = _getPrototypeOf$3(Combobox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty$3(_assertThisInitialized$3(_this), "onItemChange", function (type, itemValue) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          defaultOpenValue = _this$props.defaultOpenValue,
          use12Hours = _this$props.use12Hours,
          propValue = _this$props.value,
          isAM = _this$props.isAM,
          onAmPmChange = _this$props.onAmPmChange;
      var value = (propValue || defaultOpenValue).clone();

      if (type === 'hour') {
        if (use12Hours) {
          if (isAM) {
            value.hour(+itemValue % 12);
          } else {
            value.hour(+itemValue % 12 + 12);
          }
        } else {
          value.hour(+itemValue);
        }
      } else if (type === 'minute') {
        value.minute(+itemValue);
      } else if (type === 'ampm') {
        var ampm = itemValue.toUpperCase();

        if (use12Hours) {
          if (ampm === 'PM' && value.hour() < 12) {
            value.hour(value.hour() % 12 + 12);
          }

          if (ampm === 'AM') {
            if (value.hour() >= 12) {
              value.hour(value.hour() - 12);
            }
          }
        }

        onAmPmChange(ampm);
      } else {
        value.second(+itemValue);
      }

      onChange(value);
    });

    _defineProperty$3(_assertThisInitialized$3(_this), "onEnterSelectPanel", function (range) {
      var onCurrentSelectPanelChange = _this.props.onCurrentSelectPanelChange;
      onCurrentSelectPanelChange(range);
    });

    return _this;
  }

  _createClass$3(Combobox, [{
    key: "getHourSelect",
    value: function getHourSelect(hour) {
      var _this2 = this;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          hourOptions = _this$props2.hourOptions,
          disabledHours = _this$props2.disabledHours,
          showHour = _this$props2.showHour,
          use12Hours = _this$props2.use12Hours,
          onEsc = _this$props2.onEsc;

      if (!showHour) {
        return null;
      }

      var disabledOptions = disabledHours();
      var hourOptionsAdj;
      var hourAdj;

      if (use12Hours) {
        hourOptionsAdj = [12].concat(hourOptions.filter(function (h) {
          return h < 12 && h > 0;
        }));
        hourAdj = hour % 12 || 12;
      } else {
        hourOptionsAdj = hourOptions;
        hourAdj = hour;
      }

      return React__default.createElement(Select, {
        prefixCls: prefixCls,
        options: hourOptionsAdj.map(function (option) {
          return formatOption(option, disabledOptions);
        }),
        selectedIndex: hourOptionsAdj.indexOf(hourAdj),
        type: "hour",
        onSelect: this.onItemChange,
        onMouseEnter: function onMouseEnter() {
          return _this2.onEnterSelectPanel('hour');
        },
        onEsc: onEsc
      });
    }
  }, {
    key: "getMinuteSelect",
    value: function getMinuteSelect(minute) {
      var _this3 = this;

      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          minuteOptions = _this$props3.minuteOptions,
          disabledMinutes = _this$props3.disabledMinutes,
          defaultOpenValue = _this$props3.defaultOpenValue,
          showMinute = _this$props3.showMinute,
          propValue = _this$props3.value,
          onEsc = _this$props3.onEsc;

      if (!showMinute) {
        return null;
      }

      var value = propValue || defaultOpenValue;
      var disabledOptions = disabledMinutes(value.hour());
      return React__default.createElement(Select, {
        prefixCls: prefixCls,
        options: minuteOptions.map(function (option) {
          return formatOption(option, disabledOptions);
        }),
        selectedIndex: minuteOptions.indexOf(minute),
        type: "minute",
        onSelect: this.onItemChange,
        onMouseEnter: function onMouseEnter() {
          return _this3.onEnterSelectPanel('minute');
        },
        onEsc: onEsc
      });
    }
  }, {
    key: "getSecondSelect",
    value: function getSecondSelect(second) {
      var _this4 = this;

      var _this$props4 = this.props,
          prefixCls = _this$props4.prefixCls,
          secondOptions = _this$props4.secondOptions,
          disabledSeconds = _this$props4.disabledSeconds,
          showSecond = _this$props4.showSecond,
          defaultOpenValue = _this$props4.defaultOpenValue,
          propValue = _this$props4.value,
          onEsc = _this$props4.onEsc;

      if (!showSecond) {
        return null;
      }

      var value = propValue || defaultOpenValue;
      var disabledOptions = disabledSeconds(value.hour(), value.minute());
      return React__default.createElement(Select, {
        prefixCls: prefixCls,
        options: secondOptions.map(function (option) {
          return formatOption(option, disabledOptions);
        }),
        selectedIndex: secondOptions.indexOf(second),
        type: "second",
        onSelect: this.onItemChange,
        onMouseEnter: function onMouseEnter() {
          return _this4.onEnterSelectPanel('second');
        },
        onEsc: onEsc
      });
    }
  }, {
    key: "getAMPMSelect",
    value: function getAMPMSelect() {
      var _this5 = this;

      var _this$props5 = this.props,
          prefixCls = _this$props5.prefixCls,
          use12Hours = _this$props5.use12Hours,
          format = _this$props5.format,
          isAM = _this$props5.isAM,
          onEsc = _this$props5.onEsc;

      if (!use12Hours) {
        return null;
      }

      var AMPMOptions = ['am', 'pm'] // If format has A char, then we should uppercase AM/PM
      .map(function (c) {
        return format.match(/\sA/) ? c.toUpperCase() : c;
      }).map(function (c) {
        return {
          value: c
        };
      });
      var selected = isAM ? 0 : 1;
      return React__default.createElement(Select, {
        prefixCls: prefixCls,
        options: AMPMOptions,
        selectedIndex: selected,
        type: "ampm",
        onSelect: this.onItemChange,
        onMouseEnter: function onMouseEnter() {
          return _this5.onEnterSelectPanel('ampm');
        },
        onEsc: onEsc
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          prefixCls = _this$props6.prefixCls,
          defaultOpenValue = _this$props6.defaultOpenValue,
          propValue = _this$props6.value;
      var value = propValue || defaultOpenValue;
      return React__default.createElement("div", {
        className: "".concat(prefixCls, "-combobox")
      }, this.getHourSelect(value.hour()), this.getMinuteSelect(value.minute()), this.getSecondSelect(value.second()), this.getAMPMSelect(value.hour()));
    }
  }]);

  return Combobox;
}(Component);

_defineProperty$3(Combobox, "propTypes", {
  format: PropTypes.string,
  defaultOpenValue: PropTypes.object,
  prefixCls: PropTypes.string,
  value: PropTypes.object,
  onChange: PropTypes.func,
  onAmPmChange: PropTypes.func,
  showHour: PropTypes.bool,
  showMinute: PropTypes.bool,
  showSecond: PropTypes.bool,
  hourOptions: PropTypes.array,
  minuteOptions: PropTypes.array,
  secondOptions: PropTypes.array,
  disabledHours: PropTypes.func,
  disabledMinutes: PropTypes.func,
  disabledSeconds: PropTypes.func,
  onCurrentSelectPanelChange: PropTypes.func,
  use12Hours: PropTypes.bool,
  onEsc: PropTypes.func,
  isAM: PropTypes.bool
});

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$2(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$2(Constructor.prototype, protoProps); if (staticProps) _defineProperties$2(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$2(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$2(self); }

function _getPrototypeOf$2(o) { _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$2(o); }

function _assertThisInitialized$2(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$2(subClass, superClass); }

function _setPrototypeOf$2(o, p) { _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$2(o, p); }

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function noop$1() {}

function generateOptions(length, disabledOptions, hideDisabledOptions) {
  var step = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var arr = [];

  for (var value = 0; value < length; value += step) {
    if (!disabledOptions || disabledOptions.indexOf(value) < 0 || !hideDisabledOptions) {
      arr.push(value);
    }
  }

  return arr;
}

function toNearestValidTime(time, hourOptions, minuteOptions, secondOptions) {
  var hour = hourOptions.slice().sort(function (a, b) {
    return Math.abs(time.hour() - a) - Math.abs(time.hour() - b);
  })[0];
  var minute = minuteOptions.slice().sort(function (a, b) {
    return Math.abs(time.minute() - a) - Math.abs(time.minute() - b);
  })[0];
  var second = secondOptions.slice().sort(function (a, b) {
    return Math.abs(time.second() - a) - Math.abs(time.second() - b);
  })[0];
  return moment("".concat(hour, ":").concat(minute, ":").concat(second), 'HH:mm:ss');
}

var Panel =
/*#__PURE__*/
function (_Component) {
  _inherits$2(Panel, _Component);

  function Panel() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck$2(this, Panel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn$2(this, (_getPrototypeOf2 = _getPrototypeOf$2(Panel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty$2(_assertThisInitialized$2(_this), "state", {});

    _defineProperty$2(_assertThisInitialized$2(_this), "onChange", function (newValue) {
      var onChange = _this.props.onChange;

      _this.setState({
        value: newValue
      });

      onChange(newValue);
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "onAmPmChange", function (ampm) {
      var onAmPmChange = _this.props.onAmPmChange;
      onAmPmChange(ampm);
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "onCurrentSelectPanelChange", function (currentSelectPanel) {
      _this.setState({
        currentSelectPanel: currentSelectPanel
      });
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "disabledHours", function () {
      var _this$props = _this.props,
          use12Hours = _this$props.use12Hours,
          disabledHours = _this$props.disabledHours;
      var disabledOptions = disabledHours();

      if (use12Hours && Array.isArray(disabledOptions)) {
        if (_this.isAM()) {
          disabledOptions = disabledOptions.filter(function (h) {
            return h < 12;
          }).map(function (h) {
            return h === 0 ? 12 : h;
          });
        } else {
          disabledOptions = disabledOptions.map(function (h) {
            return h === 12 ? 12 : h - 12;
          });
        }
      }

      return disabledOptions;
    });

    return _this;
  }

  _createClass$2(Panel, [{
    key: "close",
    // https://github.com/ant-design/ant-design/issues/5829
    value: function close() {
      var onEsc = this.props.onEsc;
      onEsc();
    }
  }, {
    key: "isAM",
    value: function isAM() {
      var defaultOpenValue = this.props.defaultOpenValue;
      var value = this.state.value;
      var realValue = value || defaultOpenValue;
      return realValue.hour() >= 0 && realValue.hour() < 12;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          className = _this$props2.className,
          placeholder = _this$props2.placeholder,
          disabledMinutes = _this$props2.disabledMinutes,
          disabledSeconds = _this$props2.disabledSeconds,
          hideDisabledOptions = _this$props2.hideDisabledOptions,
          showHour = _this$props2.showHour,
          showMinute = _this$props2.showMinute,
          showSecond = _this$props2.showSecond,
          format = _this$props2.format,
          defaultOpenValue = _this$props2.defaultOpenValue,
          clearText = _this$props2.clearText,
          onEsc = _this$props2.onEsc,
          addon = _this$props2.addon,
          use12Hours = _this$props2.use12Hours,
          focusOnOpen = _this$props2.focusOnOpen,
          onKeyDown = _this$props2.onKeyDown,
          hourStep = _this$props2.hourStep,
          minuteStep = _this$props2.minuteStep,
          secondStep = _this$props2.secondStep,
          inputReadOnly = _this$props2.inputReadOnly,
          clearIcon = _this$props2.clearIcon;
      var _this$state = this.state,
          value = _this$state.value,
          currentSelectPanel = _this$state.currentSelectPanel;
      var disabledHourOptions = this.disabledHours();
      var disabledMinuteOptions = disabledMinutes(value ? value.hour() : null);
      var disabledSecondOptions = disabledSeconds(value ? value.hour() : null, value ? value.minute() : null);
      var hourOptions = generateOptions(24, disabledHourOptions, hideDisabledOptions, hourStep);
      var minuteOptions = generateOptions(60, disabledMinuteOptions, hideDisabledOptions, minuteStep);
      var secondOptions = generateOptions(60, disabledSecondOptions, hideDisabledOptions, secondStep);
      var validDefaultOpenValue = toNearestValidTime(defaultOpenValue, hourOptions, minuteOptions, secondOptions);
      return React__default.createElement("div", {
        className: classNames(className, "".concat(prefixCls, "-inner"))
      }, React__default.createElement(Header, {
        clearText: clearText,
        prefixCls: prefixCls,
        defaultOpenValue: validDefaultOpenValue,
        value: value,
        currentSelectPanel: currentSelectPanel,
        onEsc: onEsc,
        format: format,
        placeholder: placeholder,
        hourOptions: hourOptions,
        minuteOptions: minuteOptions,
        secondOptions: secondOptions,
        disabledHours: this.disabledHours,
        disabledMinutes: disabledMinutes,
        disabledSeconds: disabledSeconds,
        onChange: this.onChange,
        focusOnOpen: focusOnOpen,
        onKeyDown: onKeyDown,
        inputReadOnly: inputReadOnly,
        clearIcon: clearIcon
      }), React__default.createElement(Combobox, {
        prefixCls: prefixCls,
        value: value,
        defaultOpenValue: validDefaultOpenValue,
        format: format,
        onChange: this.onChange,
        onAmPmChange: this.onAmPmChange,
        showHour: showHour,
        showMinute: showMinute,
        showSecond: showSecond,
        hourOptions: hourOptions,
        minuteOptions: minuteOptions,
        secondOptions: secondOptions,
        disabledHours: this.disabledHours,
        disabledMinutes: disabledMinutes,
        disabledSeconds: disabledSeconds,
        onCurrentSelectPanelChange: this.onCurrentSelectPanelChange,
        use12Hours: use12Hours,
        onEsc: onEsc,
        isAM: this.isAM()
      }), addon(this));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if ('value' in props) {
        return _objectSpread$1({}, state, {
          value: props.value
        });
      }

      return null;
    }
  }]);

  return Panel;
}(Component);

_defineProperty$2(Panel, "propTypes", {
  clearText: PropTypes.string,
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  defaultOpenValue: PropTypes.object,
  value: PropTypes.object,
  placeholder: PropTypes.string,
  format: PropTypes.string,
  inputReadOnly: PropTypes.bool,
  disabledHours: PropTypes.func,
  disabledMinutes: PropTypes.func,
  disabledSeconds: PropTypes.func,
  hideDisabledOptions: PropTypes.bool,
  onChange: PropTypes.func,
  onAmPmChange: PropTypes.func,
  onEsc: PropTypes.func,
  showHour: PropTypes.bool,
  showMinute: PropTypes.bool,
  showSecond: PropTypes.bool,
  use12Hours: PropTypes.bool,
  hourStep: PropTypes.number,
  minuteStep: PropTypes.number,
  secondStep: PropTypes.number,
  addon: PropTypes.func,
  focusOnOpen: PropTypes.bool,
  onKeyDown: PropTypes.func,
  clearIcon: PropTypes.node
});

_defineProperty$2(Panel, "defaultProps", {
  prefixCls: 'rc-time-picker-panel',
  onChange: noop$1,
  disabledHours: noop$1,
  disabledMinutes: noop$1,
  disabledSeconds: noop$1,
  defaultOpenValue: moment(),
  use12Hours: false,
  addon: noop$1,
  onKeyDown: noop$1,
  onAmPmChange: noop$1,
  inputReadOnly: false
});

polyfill(Panel);

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); if (staticProps) _defineProperties$1(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$1(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$1(self); }

function _getPrototypeOf$1(o) { _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$1(o); }

function _assertThisInitialized$1(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$1(subClass, superClass); }

function _setPrototypeOf$1(o, p) { _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$1(o, p); }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function noop() {}

function refFn(field, component) {
  this[field] = component;
}

var Picker =
/*#__PURE__*/
function (_Component) {
  _inherits$1(Picker, _Component);

  function Picker(props) {
    var _this;

    _classCallCheck$1(this, Picker);

    _this = _possibleConstructorReturn$1(this, _getPrototypeOf$1(Picker).call(this, props));

    _defineProperty$1(_assertThisInitialized$1(_this), "onPanelChange", function (value) {
      _this.setValue(value);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onAmPmChange", function (ampm) {
      var onAmPmChange = _this.props.onAmPmChange;
      onAmPmChange(ampm);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onClear", function (event) {
      event.stopPropagation();

      _this.setValue(null);

      _this.setOpen(false);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onVisibleChange", function (open) {
      _this.setOpen(open);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onEsc", function () {
      _this.setOpen(false);

      _this.focus();
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onKeyDown", function (e) {
      if (e.keyCode === 40) {
        _this.setOpen(true);
      }
    });

    _this.saveInputRef = refFn.bind(_assertThisInitialized$1(_this), 'picker');
    _this.savePanelRef = refFn.bind(_assertThisInitialized$1(_this), 'panelInstance');

    var defaultOpen = props.defaultOpen,
        defaultValue = props.defaultValue,
        _props$open = props.open,
        _open = _props$open === void 0 ? defaultOpen : _props$open,
        _props$value = props.value,
        _value = _props$value === void 0 ? defaultValue : _props$value;

    _this.state = {
      open: _open,
      value: _value
    };
    return _this;
  }

  _createClass$1(Picker, [{
    key: "setValue",
    value: function setValue(value) {
      var onChange = this.props.onChange;

      if (!('value' in this.props)) {
        this.setState({
          value: value
        });
      }

      onChange(value);
    }
  }, {
    key: "getFormat",
    value: function getFormat() {
      var _this$props = this.props,
          format = _this$props.format,
          showHour = _this$props.showHour,
          showMinute = _this$props.showMinute,
          showSecond = _this$props.showSecond,
          use12Hours = _this$props.use12Hours;

      if (format) {
        return format;
      }

      if (use12Hours) {
        var fmtString = [showHour ? 'h' : '', showMinute ? 'mm' : '', showSecond ? 'ss' : ''].filter(function (item) {
          return !!item;
        }).join(':');
        return fmtString.concat(' a');
      }

      return [showHour ? 'HH' : '', showMinute ? 'mm' : '', showSecond ? 'ss' : ''].filter(function (item) {
        return !!item;
      }).join(':');
    }
  }, {
    key: "getPanelElement",
    value: function getPanelElement() {
      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          placeholder = _this$props2.placeholder,
          disabledHours = _this$props2.disabledHours,
          disabledMinutes = _this$props2.disabledMinutes,
          disabledSeconds = _this$props2.disabledSeconds,
          hideDisabledOptions = _this$props2.hideDisabledOptions,
          inputReadOnly = _this$props2.inputReadOnly,
          showHour = _this$props2.showHour,
          showMinute = _this$props2.showMinute,
          showSecond = _this$props2.showSecond,
          defaultOpenValue = _this$props2.defaultOpenValue,
          clearText = _this$props2.clearText,
          addon = _this$props2.addon,
          use12Hours = _this$props2.use12Hours,
          focusOnOpen = _this$props2.focusOnOpen,
          onKeyDown = _this$props2.onKeyDown,
          hourStep = _this$props2.hourStep,
          minuteStep = _this$props2.minuteStep,
          secondStep = _this$props2.secondStep,
          clearIcon = _this$props2.clearIcon;
      var value = this.state.value;
      return React__default.createElement(Panel, {
        clearText: clearText,
        prefixCls: "".concat(prefixCls, "-panel"),
        ref: this.savePanelRef,
        value: value,
        inputReadOnly: inputReadOnly,
        onChange: this.onPanelChange,
        onAmPmChange: this.onAmPmChange,
        defaultOpenValue: defaultOpenValue,
        showHour: showHour,
        showMinute: showMinute,
        showSecond: showSecond,
        onEsc: this.onEsc,
        format: this.getFormat(),
        placeholder: placeholder,
        disabledHours: disabledHours,
        disabledMinutes: disabledMinutes,
        disabledSeconds: disabledSeconds,
        hideDisabledOptions: hideDisabledOptions,
        use12Hours: use12Hours,
        hourStep: hourStep,
        minuteStep: minuteStep,
        secondStep: secondStep,
        addon: addon,
        focusOnOpen: focusOnOpen,
        onKeyDown: onKeyDown,
        clearIcon: clearIcon
      });
    }
  }, {
    key: "getPopupClassName",
    value: function getPopupClassName() {
      var _this$props3 = this.props,
          showHour = _this$props3.showHour,
          showMinute = _this$props3.showMinute,
          showSecond = _this$props3.showSecond,
          use12Hours = _this$props3.use12Hours,
          prefixCls = _this$props3.prefixCls,
          popupClassName = _this$props3.popupClassName;
      var selectColumnCount = 0;

      if (showHour) {
        selectColumnCount += 1;
      }

      if (showMinute) {
        selectColumnCount += 1;
      }

      if (showSecond) {
        selectColumnCount += 1;
      }

      if (use12Hours) {
        selectColumnCount += 1;
      } // Keep it for old compatibility


      return classNames(popupClassName, _defineProperty$1({}, "".concat(prefixCls, "-panel-narrow"), (!showHour || !showMinute || !showSecond) && !use12Hours), "".concat(prefixCls, "-panel-column-").concat(selectColumnCount));
    }
  }, {
    key: "setOpen",
    value: function setOpen(open) {
      var _this$props4 = this.props,
          onOpen = _this$props4.onOpen,
          onClose = _this$props4.onClose;
      var currentOpen = this.state.open;

      if (currentOpen !== open) {
        if (!('open' in this.props)) {
          this.setState({
            open: open
          });
        }

        if (open) {
          onOpen({
            open: open
          });
        } else {
          onClose({
            open: open
          });
        }
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
    key: "renderClearButton",
    value: function renderClearButton() {
      var _this2 = this;

      var value = this.state.value;
      var _this$props5 = this.props,
          prefixCls = _this$props5.prefixCls,
          allowEmpty = _this$props5.allowEmpty,
          clearIcon = _this$props5.clearIcon,
          clearText = _this$props5.clearText,
          disabled = _this$props5.disabled;

      if (!allowEmpty || !value || disabled) {
        return null;
      }

      if (React__default.isValidElement(clearIcon)) {
        var _ref = clearIcon.props || {},
            _onClick = _ref.onClick;

        return React__default.cloneElement(clearIcon, {
          onClick: function onClick() {
            if (_onClick) _onClick.apply(void 0, arguments);

            _this2.onClear.apply(_this2, arguments);
          }
        });
      }

      return React__default.createElement("a", {
        role: "button",
        className: "".concat(prefixCls, "-clear"),
        title: clearText,
        onClick: this.onClear,
        tabIndex: 0
      }, clearIcon || React__default.createElement("i", {
        className: "".concat(prefixCls, "-clear-icon")
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          prefixCls = _this$props6.prefixCls,
          placeholder = _this$props6.placeholder,
          placement = _this$props6.placement,
          align = _this$props6.align,
          id = _this$props6.id,
          disabled = _this$props6.disabled,
          transitionName = _this$props6.transitionName,
          style = _this$props6.style,
          className = _this$props6.className,
          getPopupContainer = _this$props6.getPopupContainer,
          name = _this$props6.name,
          autoComplete = _this$props6.autoComplete,
          onFocus = _this$props6.onFocus,
          onBlur = _this$props6.onBlur,
          autoFocus = _this$props6.autoFocus,
          inputReadOnly = _this$props6.inputReadOnly,
          inputIcon = _this$props6.inputIcon,
          popupStyle = _this$props6.popupStyle;
      var _this$state = this.state,
          open = _this$state.open,
          value = _this$state.value;
      var popupClassName = this.getPopupClassName();
      return React__default.createElement(Trigger, {
        prefixCls: "".concat(prefixCls, "-panel"),
        popupClassName: popupClassName,
        popupStyle: popupStyle,
        popup: this.getPanelElement(),
        popupAlign: align,
        builtinPlacements: placements,
        popupPlacement: placement,
        action: disabled ? [] : ['click'],
        destroyPopupOnHide: true,
        getPopupContainer: getPopupContainer,
        popupTransitionName: transitionName,
        popupVisible: open,
        onPopupVisibleChange: this.onVisibleChange
      }, React__default.createElement("span", {
        className: classNames(prefixCls, className),
        style: style
      }, React__default.createElement("input", {
        className: "".concat(prefixCls, "-input"),
        ref: this.saveInputRef,
        type: "text",
        placeholder: placeholder,
        name: name,
        onKeyDown: this.onKeyDown,
        disabled: disabled,
        value: value && value.format(this.getFormat()) || '',
        autoComplete: autoComplete,
        onFocus: onFocus,
        onBlur: onBlur,
        autoFocus: autoFocus,
        onChange: noop,
        readOnly: !!inputReadOnly,
        id: id
      }), inputIcon || React__default.createElement("span", {
        className: "".concat(prefixCls, "-icon")
      }), this.renderClearButton()));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var newState = {};

      if ('value' in props) {
        newState.value = props.value;
      }

      if (props.open !== undefined) {
        newState.open = props.open;
      }

      return Object.keys(newState).length > 0 ? _objectSpread({}, state, {}, newState) : null;
    }
  }]);

  return Picker;
}(Component);

_defineProperty$1(Picker, "propTypes", {
  prefixCls: PropTypes.string,
  clearText: PropTypes.string,
  value: PropTypes.object,
  defaultOpenValue: PropTypes.object,
  inputReadOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  allowEmpty: PropTypes.bool,
  defaultValue: PropTypes.object,
  open: PropTypes.bool,
  defaultOpen: PropTypes.bool,
  align: PropTypes.object,
  placement: PropTypes.any,
  transitionName: PropTypes.string,
  getPopupContainer: PropTypes.func,
  placeholder: PropTypes.string,
  format: PropTypes.string,
  showHour: PropTypes.bool,
  showMinute: PropTypes.bool,
  showSecond: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
  popupClassName: PropTypes.string,
  popupStyle: PropTypes.object,
  disabledHours: PropTypes.func,
  disabledMinutes: PropTypes.func,
  disabledSeconds: PropTypes.func,
  hideDisabledOptions: PropTypes.bool,
  onChange: PropTypes.func,
  onAmPmChange: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  addon: PropTypes.func,
  name: PropTypes.string,
  autoComplete: PropTypes.string,
  use12Hours: PropTypes.bool,
  hourStep: PropTypes.number,
  minuteStep: PropTypes.number,
  secondStep: PropTypes.number,
  focusOnOpen: PropTypes.bool,
  onKeyDown: PropTypes.func,
  autoFocus: PropTypes.bool,
  id: PropTypes.string,
  inputIcon: PropTypes.node,
  clearIcon: PropTypes.node
});

_defineProperty$1(Picker, "defaultProps", {
  clearText: 'clear',
  prefixCls: 'rc-time-picker',
  defaultOpen: false,
  inputReadOnly: false,
  style: {},
  className: '',
  popupClassName: '',
  popupStyle: {},
  align: {},
  defaultOpenValue: moment(),
  allowEmpty: true,
  showHour: true,
  showMinute: true,
  showSecond: true,
  disabledHours: noop,
  disabledMinutes: noop,
  disabledSeconds: noop,
  hideDisabledOptions: false,
  placement: 'bottomLeft',
  onChange: noop,
  onAmPmChange: noop,
  onOpen: noop,
  onClose: noop,
  onFocus: noop,
  onBlur: noop,
  addon: noop,
  use12Hours: false,
  focusOnOpen: false,
  onKeyDown: noop
});

polyfill(Picker);

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
function generateShowHourMinuteSecond(format) {
  // Ref: http://momentjs.com/docs/#/parsing/string-format/
  return {
    showHour: format.indexOf('H') > -1 || format.indexOf('h') > -1 || format.indexOf('k') > -1,
    showMinute: format.indexOf('m') > -1,
    showSecond: format.indexOf('s') > -1
  };
}

var TimePicker = /*#__PURE__*/function (_React$Component) {
  _inherits(TimePicker, _React$Component);

  var _super = _createSuper(TimePicker);

  function TimePicker(props) {
    var _this;

    _classCallCheck(this, TimePicker);

    _this = _super.call(this, props);

    _this.getDefaultLocale = function () {
      var defaultLocale = _extends(_extends({}, locale), _this.props.locale);

      return defaultLocale;
    };

    _this.handleOpenClose = function (_ref) {
      var open = _ref.open;
      var onOpenChange = _this.props.onOpenChange;

      if (onOpenChange) {
        onOpenChange(open);
      }
    };

    _this.saveTimePicker = function (timePickerRef) {
      _this.timePickerRef = timePickerRef;
    };

    _this.handleChange = function (value) {
      if (!('value' in _this.props)) {
        _this.setState({
          value: value
        });
      }

      var _this$props = _this.props,
          onChange = _this$props.onChange,
          _this$props$format = _this$props.format,
          format = _this$props$format === void 0 ? 'HH:mm:ss' : _this$props$format;

      if (onChange) {
        onChange(value, value && value.format(format) || '');
      }
    };

    _this.renderTimePicker = function (locale) {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, function (_ref2) {
        var getContextPopupContainer = _ref2.getPopupContainer,
            getPrefixCls = _ref2.getPrefixCls;

        var _a = _this.props,
            getPopupContainer = _a.getPopupContainer,
            customizePrefixCls = _a.prefixCls,
            className = _a.className,
            addon = _a.addon,
            placeholder = _a.placeholder,
            props = __rest(_a, ["getPopupContainer", "prefixCls", "className", "addon", "placeholder"]);

        var size = props.size;
        var pickerProps = omit(props, ['defaultValue', 'suffixIcon', 'allowEmpty', 'allowClear']);

        var format = _this.getDefaultFormat();

        var prefixCls = getPrefixCls('time-picker', customizePrefixCls);
        var pickerClassName = classNames(className, _defineProperty({}, "".concat(prefixCls, "-").concat(size), !!size));

        var pickerAddon = function pickerAddon(panel) {
          return addon ? /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-panel-addon")
          }, addon(panel)) : null;
        };

        return /*#__PURE__*/React.createElement(Picker, _extends({}, generateShowHourMinuteSecond(format), pickerProps, {
          allowEmpty: _this.getAllowClear(),
          prefixCls: prefixCls,
          getPopupContainer: getPopupContainer || getContextPopupContainer,
          ref: _this.saveTimePicker,
          format: format,
          className: pickerClassName,
          value: _this.state.value,
          placeholder: placeholder === undefined ? locale.placeholder : placeholder,
          onChange: _this.handleChange,
          onOpen: _this.handleOpenClose,
          onClose: _this.handleOpenClose,
          addon: pickerAddon,
          inputIcon: _this.renderInputIcon(prefixCls),
          clearIcon: _this.renderClearIcon(prefixCls)
        }));
      });
    };

    var value = props.value || props.defaultValue;

    if (value && !interopDefault(moment$1).isMoment(value)) {
      throw new Error('The value/defaultValue of TimePicker must be a moment object after `antd@2.0`, ' + 'see: https://u.ant.design/time-picker-value');
    }

    _this.state = {
      value: value
    };
    return _this;
  }

  _createClass(TimePicker, [{
    key: "getDefaultFormat",
    value: function getDefaultFormat() {
      var _this$props2 = this.props,
          format = _this$props2.format,
          use12Hours = _this$props2.use12Hours;

      if (format) {
        return format;
      }

      if (use12Hours) {
        return 'h:mm:ss a';
      }

      return 'HH:mm:ss';
    }
  }, {
    key: "getAllowClear",
    value: function getAllowClear() {
      var _this$props3 = this.props,
          allowClear = _this$props3.allowClear,
          allowEmpty = _this$props3.allowEmpty;

      if ('allowClear' in this.props) {
        return allowClear;
      }

      return allowEmpty;
    }
  }, {
    key: "focus",
    value: function focus() {
      this.timePickerRef.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.timePickerRef.blur();
    }
  }, {
    key: "renderInputIcon",
    value: function renderInputIcon(prefixCls) {
      var suffixIcon = this.props.suffixIcon;
      var clockIcon = suffixIcon && /*#__PURE__*/React.isValidElement(suffixIcon) && /*#__PURE__*/React.cloneElement(suffixIcon, {
        className: classNames(suffixIcon.props.className, "".concat(prefixCls, "-clock-icon"))
      }) || /*#__PURE__*/React.createElement(Icon, {
        type: "clock-circle",
        className: "".concat(prefixCls, "-clock-icon")
      });
      return /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-icon")
      }, clockIcon);
    }
  }, {
    key: "renderClearIcon",
    value: function renderClearIcon(prefixCls) {
      var clearIcon = this.props.clearIcon;
      var clearIconPrefixCls = "".concat(prefixCls, "-clear");

      if (clearIcon && /*#__PURE__*/React.isValidElement(clearIcon)) {
        return /*#__PURE__*/React.cloneElement(clearIcon, {
          className: classNames(clearIcon.props.className, clearIconPrefixCls)
        });
      }

      return /*#__PURE__*/React.createElement(Icon, {
        type: "close-circle",
        className: clearIconPrefixCls,
        theme: "filled"
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(LocaleReceiver, {
        componentName: "TimePicker",
        defaultLocale: this.getDefaultLocale()
      }, this.renderTimePicker);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('value' in nextProps) {
        return {
          value: nextProps.value
        };
      }

      return null;
    }
  }]);

  return TimePicker;
}(React.Component);

TimePicker.defaultProps = {
  align: {
    offset: [0, -2]
  },
  disabledHours: undefined,
  disabledMinutes: undefined,
  disabledSeconds: undefined,
  hideDisabledOptions: false,
  placement: 'bottomLeft',
  transitionName: 'slide-up',
  focusOnOpen: true
};
polyfill(TimePicker);

export { Panel as P, TimePicker as T, generateShowHourMinuteSecond as g };
