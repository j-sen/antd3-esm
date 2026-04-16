import { n, g as getDefaultExportFromCjs, P as PropTypes, c as classNames, C as ConfigConsumer, L as LocaleReceiver } from '../../config-provider.js';
import * as React from 'react';
import React__default, { cloneElement, Component } from 'react';
import { b as Trigger, K as KeyCode, p as polyfill } from '../../menu.js';
import { w as warning } from '../../tree.js';
import { findDOMNode } from 'react-dom';
import { o as omit, I as Input } from '../../input.js';
import '../../index10.js';
import { I as Icon } from '../../icon.js';
import '../../index7.js';
import '../../wave.js';
import '../../raf.js';
import '../../TextArea.js';
import '../../index2.js';
import '../../warning.js';

var css = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-cascader {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: 'tnum';\n}\n.ant-cascader-input.ant-input {\n  position: static;\n  width: 100%;\n  padding-right: 24px;\n  background-color: transparent !important;\n  cursor: pointer;\n}\n.ant-cascader-picker-show-search .ant-cascader-input.ant-input {\n  position: relative;\n}\n.ant-cascader-picker {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  position: relative;\n  display: inline-block;\n  background-color: #fff;\n  border-radius: 4px;\n  outline: 0;\n  cursor: pointer;\n  transition: color 0.3s;\n}\n.ant-cascader-picker-with-value .ant-cascader-picker-label {\n  color: transparent;\n}\n.ant-cascader-picker-disabled {\n  color: rgba(0, 0, 0, 0.25);\n  background: #f5f5f5;\n  cursor: not-allowed;\n}\n.ant-cascader-picker-disabled .ant-cascader-input {\n  cursor: not-allowed;\n}\n.ant-cascader-picker:focus .ant-cascader-input {\n  border-color: #40a9ff;\n  border-right-width: 1px !important;\n  outline: 0;\n  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);\n}\n.ant-cascader-picker-show-search.ant-cascader-picker-focused {\n  color: rgba(0, 0, 0, 0.25);\n}\n.ant-cascader-picker-label {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  height: 20px;\n  margin-top: -10px;\n  padding: 0 20px 0 12px;\n  overflow: hidden;\n  line-height: 20px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.ant-cascader-picker-clear {\n  position: absolute;\n  top: 50%;\n  right: 12px;\n  z-index: 2;\n  width: 12px;\n  height: 12px;\n  margin-top: -6px;\n  color: rgba(0, 0, 0, 0.25);\n  font-size: 12px;\n  line-height: 12px;\n  background: #fff;\n  cursor: pointer;\n  opacity: 0;\n  transition: color 0.3s ease, opacity 0.15s ease;\n}\n.ant-cascader-picker-clear:hover {\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-cascader-picker:hover .ant-cascader-picker-clear {\n  opacity: 1;\n}\n.ant-cascader-picker-arrow {\n  position: absolute;\n  top: 50%;\n  right: 12px;\n  z-index: 1;\n  width: 12px;\n  height: 12px;\n  margin-top: -6px;\n  color: rgba(0, 0, 0, 0.25);\n  font-size: 12px;\n  line-height: 12px;\n  transition: transform 0.2s;\n}\n.ant-cascader-picker-arrow.ant-cascader-picker-arrow-expand {\n  transform: rotate(180deg);\n}\n.ant-cascader-picker-label:hover + .ant-cascader-input {\n  border-color: #40a9ff;\n  border-right-width: 1px !important;\n}\n.ant-cascader-picker-small .ant-cascader-picker-clear,\n.ant-cascader-picker-small .ant-cascader-picker-arrow {\n  right: 8px;\n}\n.ant-cascader-menus {\n  position: absolute;\n  z-index: 1050;\n  font-size: 14px;\n  white-space: nowrap;\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.ant-cascader-menus ul,\n.ant-cascader-menus ol {\n  margin: 0;\n  list-style: none;\n}\n.ant-cascader-menus-empty,\n.ant-cascader-menus-hidden {\n  display: none;\n}\n.ant-cascader-menus.slide-up-enter.slide-up-enter-active.ant-cascader-menus-placement-bottomLeft,\n.ant-cascader-menus.slide-up-appear.slide-up-appear-active.ant-cascader-menus-placement-bottomLeft {\n  animation-name: antSlideUpIn;\n}\n.ant-cascader-menus.slide-up-enter.slide-up-enter-active.ant-cascader-menus-placement-topLeft,\n.ant-cascader-menus.slide-up-appear.slide-up-appear-active.ant-cascader-menus-placement-topLeft {\n  animation-name: antSlideDownIn;\n}\n.ant-cascader-menus.slide-up-leave.slide-up-leave-active.ant-cascader-menus-placement-bottomLeft {\n  animation-name: antSlideUpOut;\n}\n.ant-cascader-menus.slide-up-leave.slide-up-leave-active.ant-cascader-menus-placement-topLeft {\n  animation-name: antSlideDownOut;\n}\n.ant-cascader-menu {\n  display: inline-block;\n  min-width: 111px;\n  height: 180px;\n  margin: 0;\n  padding: 4px 0;\n  overflow: auto;\n  vertical-align: top;\n  list-style: none;\n  border-right: 1px solid #e8e8e8;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n.ant-cascader-menu:first-child {\n  border-radius: 4px 0 0 4px;\n}\n.ant-cascader-menu:last-child {\n  margin-right: -1px;\n  border-right-color: transparent;\n  border-radius: 0 4px 4px 0;\n}\n.ant-cascader-menu:only-child {\n  border-radius: 4px;\n}\n.ant-cascader-menu-item {\n  padding: 5px 12px;\n  line-height: 22px;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.ant-cascader-menu-item:hover {\n  background: #e6f7ff;\n}\n.ant-cascader-menu-item-disabled {\n  color: rgba(0, 0, 0, 0.25);\n  cursor: not-allowed;\n}\n.ant-cascader-menu-item-disabled:hover {\n  background: transparent;\n}\n.ant-cascader-menu-item-active:not(.ant-cascader-menu-item-disabled),\n.ant-cascader-menu-item-active:not(.ant-cascader-menu-item-disabled):hover {\n  font-weight: 600;\n  background-color: #fafafa;\n}\n.ant-cascader-menu-item-expand {\n  position: relative;\n  padding-right: 24px;\n}\n.ant-cascader-menu-item-expand .ant-cascader-menu-item-expand-icon,\n.ant-cascader-menu-item-loading-icon {\n  display: inline-block;\n  font-size: 12px;\n  font-size: 10px \\9;\n  transform: scale(0.83333333) rotate(0deg);\n  position: absolute;\n  right: 12px;\n  color: rgba(0, 0, 0, 0.45);\n}\n:root .ant-cascader-menu-item-expand .ant-cascader-menu-item-expand-icon,\n:root .ant-cascader-menu-item-loading-icon {\n  font-size: 12px;\n}\n.ant-cascader-menu-item .ant-cascader-menu-item-keyword {\n  color: #f5222d;\n}\n/*# sourceMappingURL=index.css.map */";
n(css,{"prepend":true});

var lib$1 = {exports: {}};

var lib = lib$1.exports;

var hasRequiredLib;

function requireLib () {
	if (hasRequiredLib) return lib$1.exports;
	hasRequiredLib = 1;
	(function (module, exports$1) {
		(function (global, factory) {
			module.exports = factory() ;
		}(lib, (function () {
		function arrayTreeFilter(data, filterFn, options) {
		    options = options || {};
		    options.childrenKeyName = options.childrenKeyName || "children";
		    var children = data || [];
		    var result = [];
		    var level = 0;
		    do {
		        var foundItem = children.filter(function (item) {
		            return filterFn(item, level);
		        })[0];
		        if (!foundItem) {
		            break;
		        }
		        result.push(foundItem);
		        children = foundItem[options.childrenKeyName] || [];
		        level += 1;
		    } while (children.length > 0);
		    return result;
		}

		return arrayTreeFilter;

		}))); 
	} (lib$1));
	return lib$1.exports;
}

var libExports = requireLib();
var arrayTreeFilter = /*@__PURE__*/getDefaultExportFromCjs(libExports);

var arrays;
var hasRequiredArrays;

function requireArrays () {
	if (hasRequiredArrays) return arrays;
	hasRequiredArrays = 1;

	function shallowEqualArrays(arrA, arrB) {
	  if (arrA === arrB) {
	    return true;
	  }

	  if (!arrA || !arrB) {
	    return false;
	  }

	  var len = arrA.length;

	  if (arrB.length !== len) {
	    return false;
	  }

	  for (var i = 0; i < len; i++) {
	    if (arrA[i] !== arrB[i]) {
	      return false;
	    }
	  }

	  return true;
	}

	arrays = shallowEqualArrays;
	return arrays;
}

var arraysExports = requireArrays();
var shallowEqualArrays = /*@__PURE__*/getDefaultExportFromCjs(arraysExports);

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass$2 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$2(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menus = function (_React$Component) {
  _inherits$2(Menus, _React$Component);

  function Menus(props) {
    _classCallCheck$2(this, Menus);

    var _this = _possibleConstructorReturn$2(this, (Menus.__proto__ || Object.getPrototypeOf(Menus)).call(this, props));

    _this.saveMenuItem = function (index) {
      return function (node) {
        _this.menuItems[index] = node;
      };
    };

    _this.menuItems = {};
    return _this;
  }

  _createClass$2(Menus, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.scrollActiveItemToView();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.visible && this.props.visible) {
        this.scrollActiveItemToView();
      }
    }
  }, {
    key: 'getFieldName',
    value: function getFieldName(name) {
      var _props = this.props,
          fieldNames = _props.fieldNames,
          defaultFieldNames = _props.defaultFieldNames;
      // 防止只设置单个属性的名字

      return fieldNames[name] || defaultFieldNames[name];
    }
  }, {
    key: 'getOption',
    value: function getOption(option, menuIndex) {
      var _props2 = this.props,
          prefixCls = _props2.prefixCls,
          expandTrigger = _props2.expandTrigger,
          expandIcon = _props2.expandIcon,
          loadingIcon = _props2.loadingIcon;

      var onSelect = this.props.onSelect.bind(this, option, menuIndex);
      var onItemDoubleClick = this.props.onItemDoubleClick.bind(this, option, menuIndex);
      var expandProps = {
        onClick: onSelect,
        onDoubleClick: onItemDoubleClick
      };
      var menuItemCls = prefixCls + '-menu-item';
      var expandIconNode = null;
      var hasChildren = option[this.getFieldName('children')] && option[this.getFieldName('children')].length > 0;
      if (hasChildren || option.isLeaf === false) {
        menuItemCls += ' ' + prefixCls + '-menu-item-expand';
        if (!option.loading) {
          expandIconNode = React__default.createElement(
            'span',
            { className: prefixCls + '-menu-item-expand-icon' },
            expandIcon
          );
        }
      }
      if (expandTrigger === 'hover' && (hasChildren || option.isLeaf === false)) {
        expandProps = {
          onMouseEnter: this.delayOnSelect.bind(this, onSelect),
          onMouseLeave: this.delayOnSelect.bind(this),
          onClick: onSelect
        };
      }
      if (this.isActiveOption(option, menuIndex)) {
        menuItemCls += ' ' + prefixCls + '-menu-item-active';
        expandProps.ref = this.saveMenuItem(menuIndex);
      }
      if (option.disabled) {
        menuItemCls += ' ' + prefixCls + '-menu-item-disabled';
      }

      var loadingIconNode = null;
      if (option.loading) {
        menuItemCls += ' ' + prefixCls + '-menu-item-loading';
        loadingIconNode = loadingIcon || null;
      }

      var title = '';
      if ('title' in option) {
        title = option.title;
      } else if (typeof option[this.getFieldName('label')] === 'string') {
        title = option[this.getFieldName('label')];
      }

      return React__default.createElement(
        'li',
        _extends$2({
          key: option[this.getFieldName('value')],
          className: menuItemCls,
          title: title
        }, expandProps, {
          role: 'menuitem',
          onMouseDown: function onMouseDown(e) {
            return e.preventDefault();
          }
        }),
        option[this.getFieldName('label')],
        expandIconNode,
        loadingIconNode
      );
    }
  }, {
    key: 'getActiveOptions',
    value: function getActiveOptions(values) {
      var _this2 = this;

      var activeValue = values || this.props.activeValue;
      var options = this.props.options;
      return arrayTreeFilter(options, function (o, level) {
        return o[_this2.getFieldName('value')] === activeValue[level];
      }, { childrenKeyName: this.getFieldName('children') });
    }
  }, {
    key: 'getShowOptions',
    value: function getShowOptions() {
      var _this3 = this;

      var options = this.props.options;

      var result = this.getActiveOptions().map(function (activeOption) {
        return activeOption[_this3.getFieldName('children')];
      }).filter(function (activeOption) {
        return !!activeOption;
      });
      result.unshift(options);
      return result;
    }
  }, {
    key: 'delayOnSelect',
    value: function delayOnSelect(onSelect) {
      var _this4 = this;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (this.delayTimer) {
        clearTimeout(this.delayTimer);
        this.delayTimer = null;
      }
      if (typeof onSelect === 'function') {
        this.delayTimer = setTimeout(function () {
          onSelect(args);
          _this4.delayTimer = null;
        }, 150);
      }
    }
  }, {
    key: 'scrollActiveItemToView',
    value: function scrollActiveItemToView() {
      // scroll into view
      var optionsLength = this.getShowOptions().length;
      for (var i = 0; i < optionsLength; i++) {
        var itemComponent = this.menuItems[i];
        if (itemComponent) {
          var target = findDOMNode(itemComponent);
          target.parentNode.scrollTop = target.offsetTop;
        }
      }
    }
  }, {
    key: 'isActiveOption',
    value: function isActiveOption(option, menuIndex) {
      var _props$activeValue = this.props.activeValue,
          activeValue = _props$activeValue === undefined ? [] : _props$activeValue;

      return activeValue[menuIndex] === option[this.getFieldName('value')];
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var _props3 = this.props,
          prefixCls = _props3.prefixCls,
          dropdownMenuColumnStyle = _props3.dropdownMenuColumnStyle;

      return React__default.createElement(
        'div',
        null,
        this.getShowOptions().map(function (options, menuIndex) {
          return React__default.createElement(
            'ul',
            { className: prefixCls + '-menu', key: menuIndex, style: dropdownMenuColumnStyle },
            options.map(function (option) {
              return _this5.getOption(option, menuIndex);
            })
          );
        })
      );
    }
  }]);

  return Menus;
}(React__default.Component);

Menus.defaultProps = {
  options: [],
  value: [],
  activeValue: [],
  onSelect: function onSelect() {},

  prefixCls: 'rc-cascader-menus',
  visible: false,
  expandTrigger: 'click'
};

Menus.propTypes = {
  value: PropTypes.array,
  activeValue: PropTypes.array,
  options: PropTypes.array,
  prefixCls: PropTypes.string,
  expandTrigger: PropTypes.string,
  onSelect: PropTypes.func,
  visible: PropTypes.bool,
  dropdownMenuColumnStyle: PropTypes.object,
  defaultFieldNames: PropTypes.object,
  fieldNames: PropTypes.object,
  expandIcon: PropTypes.node,
  loadingIcon: PropTypes.node,
  onItemDoubleClick: PropTypes.func
};

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BUILT_IN_PLACEMENTS = {
  bottomLeft: {
    points: ['tl', 'bl'],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  topLeft: {
    points: ['bl', 'tl'],
    offset: [0, -4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  bottomRight: {
    points: ['tr', 'br'],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  topRight: {
    points: ['br', 'tr'],
    offset: [0, -4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  }
};

var Cascader$1 = function (_Component) {
  _inherits$1(Cascader, _Component);

  function Cascader(props) {
    _classCallCheck$1(this, Cascader);

    var _this = _possibleConstructorReturn$1(this, (Cascader.__proto__ || Object.getPrototypeOf(Cascader)).call(this, props));

    _this.setPopupVisible = function (popupVisible) {
      if (!('popupVisible' in _this.props)) {
        _this.setState({ popupVisible: popupVisible });
      }
      // sync activeValue with value when panel open
      if (popupVisible && !_this.state.popupVisible) {
        _this.setState({
          activeValue: _this.state.value
        });
      }
      _this.props.onPopupVisibleChange(popupVisible);
    };

    _this.handleChange = function (options, setProps, e) {
      if (e.type !== 'keydown' || e.keyCode === KeyCode.ENTER) {
        _this.props.onChange(options.map(function (o) {
          return o[_this.getFieldName('value')];
        }), options);
        _this.setPopupVisible(setProps.visible);
      }
    };

    _this.handlePopupVisibleChange = function (popupVisible) {
      _this.setPopupVisible(popupVisible);
    };

    _this.handleMenuSelect = function (targetOption, menuIndex, e) {
      // Keep focused state for keyboard support
      var triggerNode = _this.trigger.getRootDomNode();
      if (triggerNode && triggerNode.focus) {
        triggerNode.focus();
      }
      var _this$props = _this.props,
          changeOnSelect = _this$props.changeOnSelect,
          loadData = _this$props.loadData,
          expandTrigger = _this$props.expandTrigger;

      if (!targetOption || targetOption.disabled) {
        return;
      }
      var activeValue = _this.state.activeValue;

      activeValue = activeValue.slice(0, menuIndex + 1);
      activeValue[menuIndex] = targetOption[_this.getFieldName('value')];
      var activeOptions = _this.getActiveOptions(activeValue);
      if (targetOption.isLeaf === false && !targetOption[_this.getFieldName('children')] && loadData) {
        if (changeOnSelect) {
          _this.handleChange(activeOptions, { visible: true }, e);
        }
        _this.setState({ activeValue: activeValue });
        loadData(activeOptions);
        return;
      }
      var newState = {};
      if (!targetOption[_this.getFieldName('children')] || !targetOption[_this.getFieldName('children')].length) {
        _this.handleChange(activeOptions, { visible: false }, e);
        // set value to activeValue when select leaf option
        newState.value = activeValue;
        // add e.type judgement to prevent `onChange` being triggered by mouseEnter
      } else if (changeOnSelect && (e.type === 'click' || e.type === 'keydown')) {
        if (expandTrigger === 'hover') {
          _this.handleChange(activeOptions, { visible: false }, e);
        } else {
          _this.handleChange(activeOptions, { visible: true }, e);
        }
        // set value to activeValue on every select
        newState.value = activeValue;
      }
      newState.activeValue = activeValue;
      //  not change the value by keyboard
      if ('value' in _this.props || e.type === 'keydown' && e.keyCode !== KeyCode.ENTER) {
        delete newState.value;
      }
      _this.setState(newState);
    };

    _this.handleItemDoubleClick = function () {
      var changeOnSelect = _this.props.changeOnSelect;

      if (changeOnSelect) {
        _this.setPopupVisible(false);
      }
    };

    _this.handleKeyDown = function (e) {
      var children = _this.props.children;
      // https://github.com/ant-design/ant-design/issues/6717
      // Don't bind keyboard support when children specify the onKeyDown

      if (children && children.props.onKeyDown) {
        children.props.onKeyDown(e);
        return;
      }
      var activeValue = [].concat(_toConsumableArray(_this.state.activeValue));
      var currentLevel = activeValue.length - 1 < 0 ? 0 : activeValue.length - 1;
      var currentOptions = _this.getCurrentLevelOptions();
      var currentIndex = currentOptions.map(function (o) {
        return o[_this.getFieldName('value')];
      }).indexOf(activeValue[currentLevel]);
      if (e.keyCode !== KeyCode.DOWN && e.keyCode !== KeyCode.UP && e.keyCode !== KeyCode.LEFT && e.keyCode !== KeyCode.RIGHT && e.keyCode !== KeyCode.ENTER && e.keyCode !== KeyCode.SPACE && e.keyCode !== KeyCode.BACKSPACE && e.keyCode !== KeyCode.ESC && e.keyCode !== KeyCode.TAB) {
        return;
      }
      // Press any keys above to reopen menu
      if (!_this.state.popupVisible && e.keyCode !== KeyCode.BACKSPACE && e.keyCode !== KeyCode.LEFT && e.keyCode !== KeyCode.RIGHT && e.keyCode !== KeyCode.ESC && e.keyCode !== KeyCode.TAB) {
        _this.setPopupVisible(true);
        return;
      }
      if (e.keyCode === KeyCode.DOWN || e.keyCode === KeyCode.UP) {
        e.preventDefault();
        var nextIndex = currentIndex;
        if (nextIndex !== -1) {
          if (e.keyCode === KeyCode.DOWN) {
            nextIndex += 1;
            nextIndex = nextIndex >= currentOptions.length ? 0 : nextIndex;
          } else {
            nextIndex -= 1;
            nextIndex = nextIndex < 0 ? currentOptions.length - 1 : nextIndex;
          }
        } else {
          nextIndex = 0;
        }
        activeValue[currentLevel] = currentOptions[nextIndex][_this.getFieldName('value')];
      } else if (e.keyCode === KeyCode.LEFT || e.keyCode === KeyCode.BACKSPACE) {
        e.preventDefault();
        activeValue.splice(activeValue.length - 1, 1);
      } else if (e.keyCode === KeyCode.RIGHT) {
        e.preventDefault();
        if (currentOptions[currentIndex] && currentOptions[currentIndex][_this.getFieldName('children')]) {
          activeValue.push(currentOptions[currentIndex][_this.getFieldName('children')][0][_this.getFieldName('value')]);
        }
      } else if (e.keyCode === KeyCode.ESC || e.keyCode === KeyCode.TAB) {
        _this.setPopupVisible(false);
        return;
      }
      if (!activeValue || activeValue.length === 0) {
        _this.setPopupVisible(false);
      }
      var activeOptions = _this.getActiveOptions(activeValue);
      var targetOption = activeOptions[activeOptions.length - 1];
      _this.handleMenuSelect(targetOption, activeOptions.length - 1, e);

      if (_this.props.onKeyDown) {
        _this.props.onKeyDown(e);
      }
    };

    _this.saveTrigger = function (node) {
      _this.trigger = node;
    };

    var initialValue = [];
    if ('value' in props) {
      initialValue = props.value || [];
    } else if ('defaultValue' in props) {
      initialValue = props.defaultValue || [];
    }

    warning(!('filedNames' in props), '`filedNames` of Cascader is a typo usage and deprecated, please use `fieldNames` instead.');

    _this.state = {
      popupVisible: props.popupVisible,
      activeValue: initialValue,
      value: initialValue,
      prevProps: props
    };
    _this.defaultFieldNames = { label: 'label', value: 'value', children: 'children' };
    return _this;
  }

  _createClass$1(Cascader, [{
    key: 'getPopupDOMNode',
    value: function getPopupDOMNode() {
      return this.trigger.getPopupDomNode();
    }
  }, {
    key: 'getFieldName',
    value: function getFieldName(name) {
      var defaultFieldNames = this.defaultFieldNames;
      var _props = this.props,
          fieldNames = _props.fieldNames,
          filedNames = _props.filedNames;

      if ('filedNames' in this.props) {
        return filedNames[name] || defaultFieldNames[name]; // For old compatibility
      }
      return fieldNames[name] || defaultFieldNames[name];
    }
  }, {
    key: 'getFieldNames',
    value: function getFieldNames() {
      var _props2 = this.props,
          fieldNames = _props2.fieldNames,
          filedNames = _props2.filedNames;

      if ('filedNames' in this.props) {
        return filedNames; // For old compatibility
      }
      return fieldNames;
    }
  }, {
    key: 'getCurrentLevelOptions',
    value: function getCurrentLevelOptions() {
      var _this2 = this;

      var _props$options = this.props.options,
          options = _props$options === undefined ? [] : _props$options;
      var _state$activeValue = this.state.activeValue,
          activeValue = _state$activeValue === undefined ? [] : _state$activeValue;

      var result = arrayTreeFilter(options, function (o, level) {
        return o[_this2.getFieldName('value')] === activeValue[level];
      }, { childrenKeyName: this.getFieldName('children') });
      if (result[result.length - 2]) {
        return result[result.length - 2][this.getFieldName('children')];
      }
      return [].concat(_toConsumableArray(options)).filter(function (o) {
        return !o.disabled;
      });
    }
  }, {
    key: 'getActiveOptions',
    value: function getActiveOptions(activeValue) {
      var _this3 = this;

      return arrayTreeFilter(this.props.options || [], function (o, level) {
        return o[_this3.getFieldName('value')] === activeValue[level];
      }, { childrenKeyName: this.getFieldName('children') });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          prefixCls = _props3.prefixCls,
          transitionName = _props3.transitionName,
          popupClassName = _props3.popupClassName,
          _props3$options = _props3.options,
          options = _props3$options === undefined ? [] : _props3$options,
          disabled = _props3.disabled,
          builtinPlacements = _props3.builtinPlacements,
          popupPlacement = _props3.popupPlacement,
          children = _props3.children,
          restProps = _objectWithoutProperties(_props3, ['prefixCls', 'transitionName', 'popupClassName', 'options', 'disabled', 'builtinPlacements', 'popupPlacement', 'children']);
      // Did not show popup when there is no options


      var menus = React__default.createElement('div', null);
      var emptyMenuClassName = '';
      if (options && options.length > 0) {
        menus = React__default.createElement(Menus, _extends$1({}, this.props, {
          fieldNames: this.getFieldNames(),
          defaultFieldNames: this.defaultFieldNames,
          activeValue: this.state.activeValue,
          onSelect: this.handleMenuSelect,
          onItemDoubleClick: this.handleItemDoubleClick,
          visible: this.state.popupVisible
        }));
      } else {
        emptyMenuClassName = ' ' + prefixCls + '-menus-empty';
      }
      return React__default.createElement(
        Trigger,
        _extends$1({
          ref: this.saveTrigger
        }, restProps, {
          options: options,
          disabled: disabled,
          popupPlacement: popupPlacement,
          builtinPlacements: builtinPlacements,
          popupTransitionName: transitionName,
          action: disabled ? [] : ['click'],
          popupVisible: disabled ? false : this.state.popupVisible,
          onPopupVisibleChange: this.handlePopupVisibleChange,
          prefixCls: prefixCls + '-menus',
          popupClassName: popupClassName + emptyMenuClassName,
          popup: menus
        }),
        cloneElement(children, {
          onKeyDown: this.handleKeyDown,
          tabIndex: disabled ? undefined : 0
        })
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var _prevState$prevProps = prevState.prevProps,
          prevProps = _prevState$prevProps === undefined ? {} : _prevState$prevProps;

      var newState = {
        prevProps: nextProps
      };

      if ('value' in nextProps && !shallowEqualArrays(prevProps.value, nextProps.value)) {
        newState.value = nextProps.value || [];

        // allow activeValue diff from value
        // https://github.com/ant-design/ant-design/issues/2767
        if (!('loadData' in nextProps)) {
          newState.activeValue = nextProps.value || [];
        }
      }
      if ('popupVisible' in nextProps) {
        newState.popupVisible = nextProps.popupVisible;
      }

      return newState;
    }
  }]);

  return Cascader;
}(Component);

Cascader$1.defaultProps = {
  onChange: function onChange() {},
  onPopupVisibleChange: function onPopupVisibleChange() {},

  disabled: false,
  transitionName: '',
  prefixCls: 'rc-cascader',
  popupClassName: '',
  popupPlacement: 'bottomLeft',
  builtinPlacements: BUILT_IN_PLACEMENTS,
  expandTrigger: 'click',
  fieldNames: { label: 'label', value: 'value', children: 'children' },
  expandIcon: '>'
};

Cascader$1.propTypes = {
  value: PropTypes.array,
  defaultValue: PropTypes.array,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  onPopupVisibleChange: PropTypes.func,
  popupVisible: PropTypes.bool,
  disabled: PropTypes.bool,
  transitionName: PropTypes.string,
  popupClassName: PropTypes.string,
  popupPlacement: PropTypes.string,
  prefixCls: PropTypes.string,
  dropdownMenuColumnStyle: PropTypes.object,
  builtinPlacements: PropTypes.object,
  loadData: PropTypes.func,
  changeOnSelect: PropTypes.bool,
  children: PropTypes.node,
  onKeyDown: PropTypes.func,
  expandTrigger: PropTypes.string,
  fieldNames: PropTypes.object,
  filedNames: PropTypes.object, // typo but for compatibility
  expandIcon: PropTypes.node,
  loadingIcon: PropTypes.node
};

polyfill(Cascader$1);

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var defaultLimit = 50;

function highlightKeyword(str, keyword, prefixCls) {
  return str.split(keyword).map(function (node, index) {
    return index === 0 ? node : [/*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-menu-item-keyword"),
      key: "seperator"
    }, keyword), node];
  });
}

function defaultFilterOption(inputValue, path, names) {
  return path.some(function (option) {
    return option[names.label].indexOf(inputValue) > -1;
  });
}

function defaultRenderFilteredOption(inputValue, path, prefixCls, names) {
  return path.map(function (option, index) {
    var label = option[names.label];
    var node = label.indexOf(inputValue) > -1 ? highlightKeyword(label, inputValue, prefixCls) : label;
    return index === 0 ? node : [' / ', node];
  });
}

function defaultSortFilteredOption(a, b, inputValue, names) {
  function callback(elem) {
    return elem[names.label].indexOf(inputValue) > -1;
  }

  return a.findIndex(callback) - b.findIndex(callback);
}

function getFieldNames(props) {
  var fieldNames = props.fieldNames,
      filedNames = props.filedNames;

  if ('filedNames' in props) {
    return filedNames; // For old compatibility
  }

  return fieldNames;
}

function getFilledFieldNames(props) {
  var fieldNames = getFieldNames(props) || {};
  var names = {
    children: fieldNames.children || 'children',
    label: fieldNames.label || 'label',
    value: fieldNames.value || 'value'
  };
  return names;
}

function flattenTree(options, props) {
  var ancestor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var names = getFilledFieldNames(props);
  var flattenOptions = [];
  var childrenName = names.children;
  options.forEach(function (option) {
    var path = ancestor.concat(option);

    if (props.changeOnSelect || !option[childrenName] || !option[childrenName].length) {
      flattenOptions.push(path);
    }

    if (option[childrenName]) {
      flattenOptions = flattenOptions.concat(flattenTree(option[childrenName], props, path));
    }
  });
  return flattenOptions;
}

var defaultDisplayRender = function defaultDisplayRender(label) {
  return label.join(' / ');
};

var Cascader = /*#__PURE__*/function (_React$Component) {
  _inherits(Cascader, _React$Component);

  var _super = _createSuper(Cascader);

  function Cascader(props) {
    var _this;

    _classCallCheck(this, Cascader);

    _this = _super.call(this, props);
    _this.cachedOptions = [];

    _this.setValue = function (value) {
      var selectedOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      if (!('value' in _this.props)) {
        _this.setState({
          value: value
        });
      }

      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(value, selectedOptions);
      }
    };

    _this.saveInput = function (node) {
      _this.input = node;
    };

    _this.handleChange = function (value, selectedOptions) {
      _this.setState({
        inputValue: ''
      });

      if (selectedOptions[0].__IS_FILTERED_OPTION) {
        var unwrappedValue = value[0];
        var unwrappedSelectedOptions = selectedOptions[0].path;

        _this.setValue(unwrappedValue, unwrappedSelectedOptions);

        return;
      }

      _this.setValue(value, selectedOptions);
    };

    _this.handlePopupVisibleChange = function (popupVisible) {
      if (!('popupVisible' in _this.props)) {
        _this.setState(function (state) {
          return {
            popupVisible: popupVisible,
            inputFocused: popupVisible,
            inputValue: popupVisible ? state.inputValue : ''
          };
        });
      }

      var onPopupVisibleChange = _this.props.onPopupVisibleChange;

      if (onPopupVisibleChange) {
        onPopupVisibleChange(popupVisible);
      }
    };

    _this.handleInputBlur = function () {
      _this.setState({
        inputFocused: false
      });
    };

    _this.handleInputClick = function (e) {
      var _this$state = _this.state,
          inputFocused = _this$state.inputFocused,
          popupVisible = _this$state.popupVisible; // Prevent `Trigger` behaviour.

      if (inputFocused || popupVisible) {
        e.stopPropagation();

        if (e.nativeEvent.stopImmediatePropagation) {
          e.nativeEvent.stopImmediatePropagation();
        }
      }
    };

    _this.handleKeyDown = function (e) {
      // SPACE => https://github.com/ant-design/ant-design/issues/16871
      if (e.keyCode === KeyCode.BACKSPACE || e.keyCode === KeyCode.SPACE) {
        e.stopPropagation();
      }
    };

    _this.handleInputChange = function (e) {
      var inputValue = e.target.value;

      _this.setState({
        inputValue: inputValue
      });
    };

    _this.clearSelection = function (e) {
      e.preventDefault();
      e.stopPropagation();

      if (!_this.state.inputValue) {
        _this.setValue([]);

        _this.handlePopupVisibleChange(false);
      } else {
        _this.setState({
          inputValue: ''
        });
      }
    };

    _this.renderCascader = function (_ref, locale) {
      var _classNames, _classNames2, _classNames3, _classNames4;

      var getContextPopupContainer = _ref.getPopupContainer,
          getPrefixCls = _ref.getPrefixCls,
          renderEmpty = _ref.renderEmpty;

      var _assertThisInitialize = _assertThisInitialized(_this),
          props = _assertThisInitialize.props,
          state = _assertThisInitialize.state;

      var customizePrefixCls = props.prefixCls,
          customizeInputPrefixCls = props.inputPrefixCls,
          children = props.children,
          _props$placeholder = props.placeholder,
          placeholder = _props$placeholder === void 0 ? locale.placeholder || 'Please select' : _props$placeholder,
          size = props.size,
          disabled = props.disabled,
          className = props.className,
          style = props.style,
          allowClear = props.allowClear,
          _props$showSearch = props.showSearch,
          showSearch = _props$showSearch === void 0 ? false : _props$showSearch,
          suffixIcon = props.suffixIcon,
          notFoundContent = props.notFoundContent,
          otherProps = __rest(props, ["prefixCls", "inputPrefixCls", "children", "placeholder", "size", "disabled", "className", "style", "allowClear", "showSearch", "suffixIcon", "notFoundContent"]);

      var value = state.value,
          inputFocused = state.inputFocused;
      var prefixCls = getPrefixCls('cascader', customizePrefixCls);
      var inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);
      var sizeCls = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(inputPrefixCls, "-lg"), size === 'large'), _defineProperty(_classNames, "".concat(inputPrefixCls, "-sm"), size === 'small'), _classNames));
      var clearIcon = allowClear && !disabled && value.length > 0 || state.inputValue ? /*#__PURE__*/React.createElement(Icon, {
        type: "close-circle",
        theme: "filled",
        className: "".concat(prefixCls, "-picker-clear"),
        onClick: _this.clearSelection
      }) : null;
      var arrowCls = classNames((_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-picker-arrow"), true), _defineProperty(_classNames2, "".concat(prefixCls, "-picker-arrow-expand"), state.popupVisible), _classNames2));
      var pickerCls = classNames(className, "".concat(prefixCls, "-picker"), (_classNames3 = {}, _defineProperty(_classNames3, "".concat(prefixCls, "-picker-with-value"), state.inputValue), _defineProperty(_classNames3, "".concat(prefixCls, "-picker-disabled"), disabled), _defineProperty(_classNames3, "".concat(prefixCls, "-picker-").concat(size), !!size), _defineProperty(_classNames3, "".concat(prefixCls, "-picker-show-search"), !!showSearch), _defineProperty(_classNames3, "".concat(prefixCls, "-picker-focused"), inputFocused), _classNames3)); // Fix bug of https://github.com/facebook/react/pull/5004
      // and https://fb.me/react-unknown-prop

      var inputProps = omit(otherProps, ['onChange', 'options', 'popupPlacement', 'transitionName', 'displayRender', 'onPopupVisibleChange', 'changeOnSelect', 'expandTrigger', 'popupVisible', 'getPopupContainer', 'loadData', 'popupClassName', 'filterOption', 'renderFilteredOption', 'sortFilteredOption', 'notFoundContent', 'fieldNames', 'filedNames']);
      var options = props.options;
      var names = getFilledFieldNames(_this.props);

      if (options && options.length > 0) {
        if (state.inputValue) {
          options = _this.generateFilteredOptions(prefixCls, renderEmpty);
        }
      } else {
        var _ref2;

        options = [(_ref2 = {}, _defineProperty(_ref2, names.value, 'ANT_CASCADER_NOT_FOUND'), _defineProperty(_ref2, names.label, notFoundContent || renderEmpty('Cascader')), _defineProperty(_ref2, "disabled", true), _defineProperty(_ref2, "isEmptyNode", true), _ref2)];
      } // Dropdown menu should keep previous status until it is fully closed.


      if (!state.popupVisible) {
        options = _this.cachedOptions;
      } else {
        _this.cachedOptions = options;
      }

      var dropdownMenuColumnStyle = {};
      var isNotFound = (options || []).length === 1 && options[0].isEmptyNode;

      if (isNotFound) {
        dropdownMenuColumnStyle.height = 'auto'; // Height of one row.
      } // The default value of `matchInputWidth` is `true`


      var resultListMatchInputWidth = showSearch.matchInputWidth !== false;

      if (resultListMatchInputWidth && (state.inputValue || isNotFound) && _this.input) {
        dropdownMenuColumnStyle.width = _this.input.input.offsetWidth;
      }

      var inputIcon = suffixIcon && ( /*#__PURE__*/React.isValidElement(suffixIcon) ? /*#__PURE__*/React.cloneElement(suffixIcon, {
        className: classNames((_classNames4 = {}, _defineProperty(_classNames4, suffixIcon.props.className, suffixIcon.props.className), _defineProperty(_classNames4, "".concat(prefixCls, "-picker-arrow"), true), _classNames4))
      }) : /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-picker-arrow")
      }, suffixIcon)) || /*#__PURE__*/React.createElement(Icon, {
        type: "down",
        className: arrowCls
      });
      var input = children || /*#__PURE__*/React.createElement("span", {
        style: style,
        className: pickerCls
      }, /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-picker-label")
      }, _this.getLabel()), /*#__PURE__*/React.createElement(Input, _extends({}, inputProps, {
        tabIndex: "-1",
        ref: _this.saveInput,
        prefixCls: inputPrefixCls,
        placeholder: value && value.length > 0 ? undefined : placeholder,
        className: "".concat(prefixCls, "-input ").concat(sizeCls),
        value: state.inputValue,
        disabled: disabled,
        readOnly: !showSearch,
        autoComplete: inputProps.autoComplete || 'off',
        onClick: showSearch ? _this.handleInputClick : undefined,
        onBlur: showSearch ? _this.handleInputBlur : undefined,
        onKeyDown: _this.handleKeyDown,
        onChange: showSearch ? _this.handleInputChange : undefined
      })), clearIcon, inputIcon);
      var expandIcon = /*#__PURE__*/React.createElement(Icon, {
        type: "right"
      });
      var loadingIcon = /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-menu-item-loading-icon")
      }, /*#__PURE__*/React.createElement(Icon, {
        type: "redo",
        spin: true
      }));
      var getPopupContainer = props.getPopupContainer || getContextPopupContainer;
      var rest = omit(props, ['inputIcon', 'expandIcon', 'loadingIcon']);
      return /*#__PURE__*/React.createElement(Cascader$1, _extends({}, rest, {
        prefixCls: prefixCls,
        getPopupContainer: getPopupContainer,
        options: options,
        value: value,
        popupVisible: state.popupVisible,
        onPopupVisibleChange: _this.handlePopupVisibleChange,
        onChange: _this.handleChange,
        dropdownMenuColumnStyle: dropdownMenuColumnStyle,
        expandIcon: expandIcon,
        loadingIcon: loadingIcon
      }), input);
    };

    _this.state = {
      value: props.value || props.defaultValue || [],
      inputValue: '',
      inputFocused: false,
      popupVisible: props.popupVisible,
      flattenOptions: props.showSearch ? flattenTree(props.options, props) : undefined,
      prevProps: props
    };
    return _this;
  }

  _createClass(Cascader, [{
    key: "getLabel",
    value: function getLabel() {
      var _this$props = this.props,
          options = _this$props.options,
          _this$props$displayRe = _this$props.displayRender,
          displayRender = _this$props$displayRe === void 0 ? defaultDisplayRender : _this$props$displayRe;
      var names = getFilledFieldNames(this.props);
      var value = this.state.value;
      var unwrappedValue = Array.isArray(value[0]) ? value[0] : value;
      var selectedOptions = arrayTreeFilter(options, function (o, level) {
        return o[names.value] === unwrappedValue[level];
      }, {
        childrenKeyName: names.children
      });
      var label = selectedOptions.map(function (o) {
        return o[names.label];
      });
      return displayRender(label, selectedOptions);
    }
  }, {
    key: "generateFilteredOptions",
    value: function generateFilteredOptions(prefixCls, renderEmpty) {
      var _this2 = this,
          _ref4;

      var _this$props2 = this.props,
          showSearch = _this$props2.showSearch,
          notFoundContent = _this$props2.notFoundContent;
      var names = getFilledFieldNames(this.props);
      var _showSearch$filter = showSearch.filter,
          filter = _showSearch$filter === void 0 ? defaultFilterOption : _showSearch$filter,
          _showSearch$render = showSearch.render,
          render = _showSearch$render === void 0 ? defaultRenderFilteredOption : _showSearch$render,
          _showSearch$sort = showSearch.sort,
          sort = _showSearch$sort === void 0 ? defaultSortFilteredOption : _showSearch$sort,
          _showSearch$limit = showSearch.limit,
          limit = _showSearch$limit === void 0 ? defaultLimit : _showSearch$limit;
      var _this$state2 = this.state,
          _this$state2$flattenO = _this$state2.flattenOptions,
          flattenOptions = _this$state2$flattenO === void 0 ? [] : _this$state2$flattenO,
          inputValue = _this$state2.inputValue; // Limit the filter if needed

      var filtered;

      if (limit > 0) {
        filtered = [];
        var matchCount = 0; // Perf optimization to filter items only below the limit

        flattenOptions.some(function (path) {
          var match = filter(_this2.state.inputValue, path, names);

          if (match) {
            filtered.push(path);
            matchCount += 1;
          }

          return matchCount >= limit;
        });
      } else {
        filtered = flattenOptions.filter(function (path) {
          return filter(_this2.state.inputValue, path, names);
        });
      }

      filtered.sort(function (a, b) {
        return sort(a, b, inputValue, names);
      });

      if (filtered.length > 0) {
        return filtered.map(function (path) {
          var _ref3;

          return _ref3 = {
            __IS_FILTERED_OPTION: true,
            path: path
          }, _defineProperty(_ref3, names.value, path.map(function (o) {
            return o[names.value];
          })), _defineProperty(_ref3, names.label, render(inputValue, path, prefixCls, names)), _defineProperty(_ref3, "disabled", path.some(function (o) {
            return !!o.disabled;
          })), _defineProperty(_ref3, "isEmptyNode", true), _ref3;
        });
      }

      return [(_ref4 = {}, _defineProperty(_ref4, names.value, 'ANT_CASCADER_NOT_FOUND'), _defineProperty(_ref4, names.label, notFoundContent || renderEmpty('Cascader')), _defineProperty(_ref4, "disabled", true), _defineProperty(_ref4, "isEmptyNode", true), _ref4)];
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
      var _this3 = this;

      return /*#__PURE__*/React.createElement(ConfigConsumer, null, function (configArgument) {
        return /*#__PURE__*/React.createElement(LocaleReceiver, null, function (locale) {
          return _this3.renderCascader(configArgument, locale);
        });
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, _ref5) {
      var prevProps = _ref5.prevProps;
      var newState = {
        prevProps: nextProps
      };

      if ('value' in nextProps) {
        newState.value = nextProps.value || [];
      }

      if ('popupVisible' in nextProps) {
        newState.popupVisible = nextProps.popupVisible;
      }

      if (nextProps.showSearch && prevProps.options !== nextProps.options) {
        newState.flattenOptions = flattenTree(nextProps.options, nextProps);
      }

      return newState;
    }
  }]);

  return Cascader;
}(React.Component);

Cascader.defaultProps = {
  transitionName: 'slide-up',
  popupPlacement: 'bottomLeft',
  options: [],
  disabled: false,
  allowClear: true
};
polyfill(Cascader);

export { Cascader as default };
