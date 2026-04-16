import * as React from 'react';
import React__default, { Component } from 'react';
import { p as propTypesExports, c as classNames, C as ConfigConsumer } from './config-provider.js';
import { r as raf, b as Trigger, K as KeyCode, i as classes, A as Animate, p as polyfill } from './menu.js';
import { a as Menu, c as connected, M as MenuItemGroup } from './Divider.js';
import { t as toArray$1, w as warning } from './tree.js';
import * as ReactDOM from 'react-dom';
import { findDOMNode } from 'react-dom';
import { s as scrollIntoView } from './index7.js';
import { o as omit, t as tuple } from './input.js';
import { I as Icon } from './icon.js';

function _classCallCheck$5(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$5(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$5(self); }

function _assertThisInitialized$5(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf$5(o) { _getPrototypeOf$5 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$5(o); }

function _inherits$5(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$5(subClass, superClass); }

function _setPrototypeOf$5(o, p) { _setPrototypeOf$5 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$5(o, p); }

var OptGroup =
/*#__PURE__*/
function (_Component) {
  _inherits$5(OptGroup, _Component);

  function OptGroup() {
    _classCallCheck$5(this, OptGroup);

    return _possibleConstructorReturn$5(this, _getPrototypeOf$5(OptGroup).apply(this, arguments));
  }

  return OptGroup;
}(Component);
OptGroup.isSelectOptGroup = true;

function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$4(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$4(self); }

function _assertThisInitialized$4(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf$4(o) { _getPrototypeOf$4 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$4(o); }

function _inherits$4(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$4(subClass, superClass); }

function _setPrototypeOf$4(o, p) { _setPrototypeOf$4 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$4(o, p); }

var Option =
/*#__PURE__*/
function (_Component) {
  _inherits$4(Option, _Component);

  function Option() {
    _classCallCheck$4(this, Option);

    return _possibleConstructorReturn$4(this, _getPrototypeOf$4(Option).apply(this, arguments));
  }

  return Option;
}(Component);
Option.propTypes = {
  value: propTypesExports.oneOfType([propTypesExports.string, propTypesExports.number])
};
Option.isSelectOption = true;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function propsValueType() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var props = args[0],
      propName = args[1],
      componentName = args[2],
      rest = args.slice(3);
  var basicType = propTypesExports.oneOfType([propTypesExports.string, propTypesExports.number]);
  var labelInValueShape = propTypesExports.shape({
    key: basicType.isRequired,
    label: propTypesExports.node
  });

  if (props.labelInValue) {
    var validate = propTypesExports.oneOfType([propTypesExports.arrayOf(labelInValueShape), labelInValueShape]);
    var error = validate.apply(void 0, [props, propName, componentName].concat(_toConsumableArray(rest)));

    if (error) {
      return new Error("Invalid prop `".concat(propName, "` supplied to `").concat(componentName, "`, ") + "when you set `labelInValue` to `true`, `".concat(propName, "` should in ") + "shape of `{ key: string | number, label?: ReactNode }`.");
    }
  } else if ((props.mode === 'multiple' || props.mode === 'tags' || props.multiple || props.tags) && props[propName] === '') {
    return new Error("Invalid prop `".concat(propName, "` of type `string` supplied to `").concat(componentName, "`, ") + "expected `array` when `multiple` or `tags` is `true`.");
  } else {
    var _validate = propTypesExports.oneOfType([propTypesExports.arrayOf(basicType), basicType]);

    return _validate.apply(void 0, [props, propName, componentName].concat(_toConsumableArray(rest)));
  }

  return null;
}

var SelectPropTypes$1 = {
  id: propTypesExports.string,
  defaultActiveFirstOption: propTypesExports.bool,
  multiple: propTypesExports.bool,
  filterOption: propTypesExports.any,
  children: propTypesExports.any,
  showSearch: propTypesExports.bool,
  disabled: propTypesExports.bool,
  allowClear: propTypesExports.bool,
  showArrow: propTypesExports.bool,
  tags: propTypesExports.bool,
  prefixCls: propTypesExports.string,
  className: propTypesExports.string,
  transitionName: propTypesExports.string,
  optionLabelProp: propTypesExports.string,
  optionFilterProp: propTypesExports.string,
  animation: propTypesExports.string,
  choiceTransitionName: propTypesExports.string,
  open: propTypesExports.bool,
  defaultOpen: propTypesExports.bool,
  onChange: propTypesExports.func,
  onBlur: propTypesExports.func,
  onFocus: propTypesExports.func,
  onSelect: propTypesExports.func,
  onSearch: propTypesExports.func,
  onPopupScroll: propTypesExports.func,
  onMouseEnter: propTypesExports.func,
  onMouseLeave: propTypesExports.func,
  onInputKeyDown: propTypesExports.func,
  placeholder: propTypesExports.any,
  onDeselect: propTypesExports.func,
  labelInValue: propTypesExports.bool,
  loading: propTypesExports.bool,
  value: propsValueType,
  defaultValue: propsValueType,
  dropdownStyle: propTypesExports.object,
  maxTagTextLength: propTypesExports.number,
  maxTagCount: propTypesExports.number,
  maxTagPlaceholder: propTypesExports.oneOfType([propTypesExports.node, propTypesExports.func]),
  tokenSeparators: propTypesExports.arrayOf(propTypesExports.string),
  getInputElement: propTypesExports.func,
  showAction: propTypesExports.arrayOf(propTypesExports.string),
  clearIcon: propTypesExports.node,
  inputIcon: propTypesExports.node,
  removeIcon: propTypesExports.node,
  menuItemSelectedIcon: propTypesExports.oneOfType([propTypesExports.func, propTypesExports.node]),
  dropdownRender: propTypesExports.func
};

function toTitle(title) {
  if (typeof title === 'string') {
    return title;
  }

  return '';
}
function getValuePropValue(child) {
  if (!child) {
    return null;
  }

  var props = child.props;

  if ('value' in props) {
    return props.value;
  }

  if (child.key) {
    return child.key;
  }

  if (child.type && child.type.isSelectOptGroup && props.label) {
    return props.label;
  }

  throw new Error("Need at least a key or a value or a label (only for OptGroup) for ".concat(child));
}
function getPropValue(child, prop) {
  if (prop === 'value') {
    return getValuePropValue(child);
  }

  return child.props[prop];
}
function isMultiple(props) {
  return props.multiple;
}
function isCombobox(props) {
  return props.combobox;
}
function isMultipleOrTags(props) {
  return props.multiple || props.tags;
}
function isMultipleOrTagsOrCombobox(props) {
  return isMultipleOrTags(props) || isCombobox(props);
}
function isSingleMode(props) {
  return !isMultipleOrTagsOrCombobox(props);
}
function toArray(value) {
  var ret = value;

  if (value === undefined) {
    ret = [];
  } else if (!Array.isArray(value)) {
    ret = [value];
  }

  return ret;
}
function getMapKey(value) {
  return "".concat(typeof value, "-").concat(value);
}
function preventDefaultEvent(e) {
  e.preventDefault();
}
function findIndexInValueBySingleValue(value, singleValue) {
  var index = -1;

  if (value) {
    for (var i = 0; i < value.length; i++) {
      if (value[i] === singleValue) {
        index = i;
        break;
      }
    }
  }

  return index;
}
function getLabelFromPropsValue(value, key) {
  var label;
  value = toArray(value);

  if (value) {
    // tslint:disable-next-line:prefer-for-of
    for (var i = 0; i < value.length; i++) {
      if (value[i].key === key) {
        label = value[i].label;
        break;
      }
    }
  }

  return label;
}
function getSelectKeys(menuItems, value) {
  if (value === null || value === undefined) {
    return [];
  }

  var selectedKeys = [];
  React__default.Children.forEach(menuItems, function (item) {
    var type = item.type;

    if (type.isMenuItemGroup) {
      selectedKeys = selectedKeys.concat(getSelectKeys(item.props.children, value));
    } else {
      var itemValue = getValuePropValue(item);
      var itemKey = item.key;

      if (findIndexInValueBySingleValue(value, itemValue) !== -1 && itemKey) {
        selectedKeys.push(itemKey);
      }
    }
  });
  return selectedKeys;
}
var UNSELECTABLE_STYLE = {
  userSelect: 'none',
  WebkitUserSelect: 'none'
};
var UNSELECTABLE_ATTRIBUTE = {
  unselectable: 'on'
};
function findFirstMenuItem(children) {
  // tslint:disable-next-line:prefer-for-of
  for (var i = 0; i < children.length; i++) {
    var child = children[i];

    if (child.type.isMenuItemGroup) {
      var found = findFirstMenuItem(child.props.children);

      if (found) {
        return found;
      }
    } else if (!child.props.disabled) {
      return child;
    }
  }

  return null;
}
function includesSeparators(str, separators) {
  // tslint:disable-next-line:prefer-for-of
  for (var i = 0; i < separators.length; ++i) {
    if (str.lastIndexOf(separators[i]) > 0) {
      return true;
    }
  }

  return false;
}
function splitBySeparators(str, separators) {
  var reg = new RegExp("[".concat(separators.join(), "]"));
  return str.split(reg).filter(function (token) {
    return token;
  });
}
function defaultFilterFn(input, child) {
  if (child.props.disabled) {
    return false;
  }

  var value = toArray(getPropValue(child, this.props.optionFilterProp)).join('');
  return value.toLowerCase().indexOf(input.toLowerCase()) > -1;
}
function validateOptionValue(value, props) {
  if (isSingleMode(props) || isMultiple(props)) {
    return;
  }

  if (typeof value !== 'string') {
    throw new Error("Invalid `value` of type `".concat(typeof value, "` supplied to Option, ") + "expected `string` when `tags/combobox` is `true`.");
  }
}
function saveRef(instance, name) {
  return function (node) {
    instance[name] = node;
  };
}
function generateUUID() {

  var d = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    // tslint:disable-next-line:no-bitwise
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16); // tslint:disable-next-line:no-bitwise

    return (c === 'x' ? r : r & 0x7 | 0x8).toString(16);
  });
  return uuid;
}

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$3(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$3(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$3(Constructor.prototype, protoProps); return Constructor; }

function _possibleConstructorReturn$3(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$3(self); }

function _getPrototypeOf$3(o) { _getPrototypeOf$3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$3(o); }

function _assertThisInitialized$3(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$3(subClass, superClass); }

function _setPrototypeOf$3(o, p) { _setPrototypeOf$3 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$3(o, p); }

var DropdownMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits$3(DropdownMenu, _React$Component);

  function DropdownMenu(props) {
    var _this;

    _classCallCheck$3(this, DropdownMenu);

    _this = _possibleConstructorReturn$3(this, _getPrototypeOf$3(DropdownMenu).call(this, props));
    _this.rafInstance = null;
    _this.lastVisible = false;

    _this.scrollActiveItemToView = function () {
      // scroll into view
      var itemComponent = findDOMNode(_this.firstActiveItem);
      var _this$props = _this.props,
          visible = _this$props.visible,
          firstActiveValue = _this$props.firstActiveValue;
      var value = _this.props.value;

      if (!itemComponent || !visible) {
        return;
      }

      var scrollIntoViewOpts = {
        onlyScrollIfNeeded: true
      };

      if ((!value || value.length === 0) && firstActiveValue) {
        scrollIntoViewOpts.alignWithTop = true;
      } // Delay to scroll since current frame item position is not ready when pre view is by filter
      // https://github.com/ant-design/ant-design/issues/11268#issuecomment-406634462


      _this.rafInstance = raf(function () {
        scrollIntoView(itemComponent, findDOMNode(_this.menuRef), scrollIntoViewOpts);
      });
    };

    _this.renderMenu = function () {
      var _this$props2 = _this.props,
          menuItems = _this$props2.menuItems,
          menuItemSelectedIcon = _this$props2.menuItemSelectedIcon,
          defaultActiveFirstOption = _this$props2.defaultActiveFirstOption,
          prefixCls = _this$props2.prefixCls,
          multiple = _this$props2.multiple,
          onMenuSelect = _this$props2.onMenuSelect,
          inputValue = _this$props2.inputValue,
          backfillValue = _this$props2.backfillValue,
          onMenuDeselect = _this$props2.onMenuDeselect,
          visible = _this$props2.visible;
      var firstActiveValue = _this.props.firstActiveValue;

      if (menuItems && menuItems.length) {
        var menuProps = {};

        if (multiple) {
          menuProps.onDeselect = onMenuDeselect;
          menuProps.onSelect = onMenuSelect;
        } else {
          menuProps.onClick = onMenuSelect;
        }

        var value = _this.props.value;
        var selectedKeys = getSelectKeys(menuItems, value);
        var activeKeyProps = {};
        var defaultActiveFirst = defaultActiveFirstOption;
        var clonedMenuItems = menuItems;

        if (selectedKeys.length || firstActiveValue) {
          if (visible && !_this.lastVisible) {
            activeKeyProps.activeKey = selectedKeys[0] || firstActiveValue;
          } else if (!visible) {
            // Do not trigger auto active since we already have selectedKeys
            if (selectedKeys[0]) {
              defaultActiveFirst = false;
            }

            activeKeyProps.activeKey = undefined;
          }

          var foundFirst = false; // set firstActiveItem via cloning menus
          // for scroll into view

          var clone = function clone(item) {
            var key = item.key;

            if (!foundFirst && selectedKeys.indexOf(key) !== -1 || !foundFirst && !selectedKeys.length && firstActiveValue.indexOf(item.key) !== -1) {
              foundFirst = true;
              return React.cloneElement(item, {
                ref: function ref(_ref) {
                  _this.firstActiveItem = _ref;
                }
              });
            }

            return item;
          };

          clonedMenuItems = menuItems.map(function (item) {
            if (item.type.isMenuItemGroup) {
              var children = toArray$1(item.props.children).map(clone);
              return React.cloneElement(item, {}, children);
            }

            return clone(item);
          });
        } else {
          // Clear firstActiveItem when dropdown menu items was empty
          // Avoid `Unable to find node on an unmounted component`
          // https://github.com/ant-design/ant-design/issues/10774
          _this.firstActiveItem = null;
        } // clear activeKey when inputValue change


        var lastValue = value && value[value.length - 1];

        if (inputValue !== _this.lastInputValue && (!lastValue || lastValue !== backfillValue)) {
          activeKeyProps.activeKey = '';
        }

        return React.createElement(Menu, _extends$3({
          ref: _this.saveMenuRef,
          style: _this.props.dropdownMenuStyle,
          defaultActiveFirst: defaultActiveFirst,
          role: "listbox",
          itemIcon: multiple ? menuItemSelectedIcon : null
        }, activeKeyProps, {
          multiple: multiple
        }, menuProps, {
          selectedKeys: selectedKeys,
          prefixCls: "".concat(prefixCls, "-menu")
        }), clonedMenuItems);
      }

      return null;
    };

    _this.lastInputValue = props.inputValue;
    _this.saveMenuRef = saveRef(_assertThisInitialized$3(_this), 'menuRef');
    return _this;
  }

  _createClass$3(DropdownMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollActiveItemToView();
      this.lastVisible = this.props.visible;
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (!nextProps.visible) {
        this.lastVisible = false;
      } // freeze when hide


      return this.props.visible && !nextProps.visible || nextProps.visible || nextProps.inputValue !== this.props.inputValue;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var props = this.props;

      if (!prevProps.visible && props.visible) {
        this.scrollActiveItemToView();
      }

      this.lastVisible = props.visible;
      this.lastInputValue = props.inputValue;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.rafInstance) {
        raf.cancel(this.rafInstance);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var renderMenu = this.renderMenu();
      return renderMenu ? React.createElement("div", {
        style: {
          overflow: 'auto',
          transform: 'translateZ(0)'
        },
        id: this.props.ariaId,
        onFocus: this.props.onPopupFocus,
        onMouseDown: preventDefaultEvent,
        onScroll: this.props.onPopupScroll
      }, renderMenu) : null;
    }
  }]);

  return DropdownMenu;
}(React.Component);
DropdownMenu.displayName = 'DropdownMenu';
DropdownMenu.propTypes = {
  ariaId: propTypesExports.string,
  defaultActiveFirstOption: propTypesExports.bool,
  value: propTypesExports.any,
  dropdownMenuStyle: propTypesExports.object,
  multiple: propTypesExports.bool,
  onPopupFocus: propTypesExports.func,
  onPopupScroll: propTypesExports.func,
  onMenuDeSelect: propTypesExports.func,
  onMenuSelect: propTypesExports.func,
  prefixCls: propTypesExports.string,
  menuItems: propTypesExports.any,
  inputValue: propTypesExports.string,
  visible: propTypesExports.bool,
  firstActiveValue: propTypesExports.string,
  menuItemSelectedIcon: propTypesExports.oneOfType([propTypesExports.func, propTypesExports.node])
};

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$2(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$2(Constructor.prototype, protoProps); return Constructor; }

function _possibleConstructorReturn$2(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$2(self); }

function _getPrototypeOf$2(o) { _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$2(o); }

function _assertThisInitialized$2(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$2(subClass, superClass); }

function _setPrototypeOf$2(o, p) { _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$2(o, p); }

var __rest$1 = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
Trigger.displayName = 'Trigger';
var BUILT_IN_PLACEMENTS = {
  bottomLeft: {
    points: ['tl', 'bl'],
    offset: [0, 4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  topLeft: {
    points: ['bl', 'tl'],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  }
};

var SelectTrigger =
/*#__PURE__*/
function (_React$Component) {
  _inherits$2(SelectTrigger, _React$Component);

  function SelectTrigger(props) {
    var _this;

    _classCallCheck$2(this, SelectTrigger);

    _this = _possibleConstructorReturn$2(this, _getPrototypeOf$2(SelectTrigger).call(this, props));
    _this.dropdownMenuRef = null;
    _this.rafInstance = null;

    _this.setDropdownWidth = function () {
      _this.cancelRafInstance();

      _this.rafInstance = raf(function () {
        var dom = ReactDOM.findDOMNode(_assertThisInitialized$2(_this));
        var width = dom.offsetWidth;

        if (width !== _this.state.dropdownWidth) {
          _this.setState({
            dropdownWidth: width
          });
        }
      });
    };

    _this.cancelRafInstance = function () {
      if (_this.rafInstance) {
        raf.cancel(_this.rafInstance);
      }
    };

    _this.getInnerMenu = function () {
      return _this.dropdownMenuRef && _this.dropdownMenuRef.menuRef;
    };

    _this.getPopupDOMNode = function () {
      return _this.triggerRef.getPopupDomNode();
    };

    _this.getDropdownElement = function (newProps) {
      var props = _this.props;
      var dropdownRender = props.dropdownRender,
          ariaId = props.ariaId;
      var menuNode = React.createElement(DropdownMenu, _extends$2({
        ref: _this.saveDropdownMenuRef
      }, newProps, {
        ariaId: ariaId,
        prefixCls: _this.getDropdownPrefixCls(),
        onMenuSelect: props.onMenuSelect,
        onMenuDeselect: props.onMenuDeselect,
        onPopupScroll: props.onPopupScroll,
        value: props.value,
        backfillValue: props.backfillValue,
        firstActiveValue: props.firstActiveValue,
        defaultActiveFirstOption: props.defaultActiveFirstOption,
        dropdownMenuStyle: props.dropdownMenuStyle,
        menuItemSelectedIcon: props.menuItemSelectedIcon
      }));

      if (dropdownRender) {
        return dropdownRender(menuNode, props);
      }

      return null;
    };

    _this.getDropdownTransitionName = function () {
      var props = _this.props;
      var transitionName = props.transitionName;

      if (!transitionName && props.animation) {
        transitionName = "".concat(_this.getDropdownPrefixCls(), "-").concat(props.animation);
      }

      return transitionName;
    };

    _this.getDropdownPrefixCls = function () {
      return "".concat(_this.props.prefixCls, "-dropdown");
    };

    _this.saveDropdownMenuRef = saveRef(_assertThisInitialized$2(_this), 'dropdownMenuRef');
    _this.saveTriggerRef = saveRef(_assertThisInitialized$2(_this), 'triggerRef');
    _this.state = {
      dropdownWidth: 0
    };
    return _this;
  }

  _createClass$2(SelectTrigger, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setDropdownWidth();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.setDropdownWidth();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cancelRafInstance();
    }
  }, {
    key: "render",
    value: function render() {
      var _popupClassName;

      var _a = this.props,
          onPopupFocus = _a.onPopupFocus,
          empty = _a.empty,
          props = __rest$1(_a, ["onPopupFocus", "empty"]);

      var multiple = props.multiple,
          visible = props.visible,
          inputValue = props.inputValue,
          dropdownAlign = props.dropdownAlign,
          disabled = props.disabled,
          showSearch = props.showSearch,
          dropdownClassName = props.dropdownClassName,
          dropdownStyle = props.dropdownStyle,
          dropdownMatchSelectWidth = props.dropdownMatchSelectWidth;
      var dropdownPrefixCls = this.getDropdownPrefixCls();
      var popupClassName = (_popupClassName = {}, _defineProperty$2(_popupClassName, dropdownClassName, !!dropdownClassName), _defineProperty$2(_popupClassName, "".concat(dropdownPrefixCls, "--").concat(multiple ? 'multiple' : 'single'), 1), _defineProperty$2(_popupClassName, "".concat(dropdownPrefixCls, "--empty"), empty), _popupClassName);
      var popupElement = this.getDropdownElement({
        menuItems: props.options,
        onPopupFocus: onPopupFocus,
        multiple: multiple,
        inputValue: inputValue,
        visible: visible
      });
      var hideAction;

      if (disabled) {
        hideAction = [];
      } else if (isSingleMode(props) && !showSearch) {
        hideAction = ['click'];
      } else {
        hideAction = ['blur'];
      }

      var popupStyle = _extends$2({}, dropdownStyle);

      var widthProp = dropdownMatchSelectWidth ? 'width' : 'minWidth';

      if (this.state.dropdownWidth) {
        popupStyle[widthProp] = "".concat(this.state.dropdownWidth, "px");
      }

      return React.createElement(Trigger, _extends$2({}, props, {
        showAction: disabled ? [] : this.props.showAction,
        hideAction: hideAction,
        ref: this.saveTriggerRef,
        popupPlacement: "bottomLeft",
        builtinPlacements: BUILT_IN_PLACEMENTS,
        prefixCls: dropdownPrefixCls,
        popupTransitionName: this.getDropdownTransitionName(),
        onPopupVisibleChange: props.onDropdownVisibleChange,
        popup: popupElement,
        popupAlign: dropdownAlign,
        popupVisible: visible,
        getPopupContainer: props.getPopupContainer,
        popupClassName: classNames(popupClassName),
        popupStyle: popupStyle
      }), props.children);
    }
  }]);

  return SelectTrigger;
}(React.Component);
SelectTrigger.defaultProps = {
  dropdownRender: function dropdownRender(menu) {
    return menu;
  }
};
SelectTrigger.propTypes = {
  onPopupFocus: propTypesExports.func,
  onPopupScroll: propTypesExports.func,
  dropdownMatchSelectWidth: propTypesExports.bool,
  dropdownAlign: propTypesExports.object,
  visible: propTypesExports.bool,
  disabled: propTypesExports.bool,
  showSearch: propTypesExports.bool,
  dropdownClassName: propTypesExports.string,
  multiple: propTypesExports.bool,
  inputValue: propTypesExports.string,
  filterOption: propTypesExports.any,
  options: propTypesExports.any,
  prefixCls: propTypesExports.string,
  popupClassName: propTypesExports.string,
  children: propTypesExports.any,
  showAction: propTypesExports.arrayOf(propTypesExports.string),
  menuItemSelectedIcon: propTypesExports.oneOfType([propTypesExports.func, propTypesExports.node]),
  dropdownRender: propTypesExports.func,
  ariaId: propTypesExports.string
};
SelectTrigger.displayName = 'SelectTrigger';

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); return Constructor; }

function _possibleConstructorReturn$1(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$1(self); }

function _getPrototypeOf$1(o) { _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$1(o); }

function _assertThisInitialized$1(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$1(subClass, superClass); }

function _setPrototypeOf$1(o, p) { _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$1(o, p); }

function isHidden(node) {
  return !node || node.offsetParent === null;
}
var SELECT_EMPTY_VALUE_KEY = 'RC_SELECT_EMPTY_VALUE_KEY';

var noop = function noop() {
  return null;
};

function chaining() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    // tslint:disable-next-line:prefer-for-of
    for (var i = 0; i < fns.length; i++) {
      if (fns[i] && typeof fns[i] === 'function') {
        fns[i].apply(chaining, args);
      }
    }
  };
}

var Select$1 =
/*#__PURE__*/
function (_React$Component) {
  _inherits$1(Select, _React$Component);

  function Select(props) {
    var _this;

    _classCallCheck$1(this, Select);

    _this = _possibleConstructorReturn$1(this, _getPrototypeOf$1(Select).call(this, props));
    _this.inputRef = null;
    _this.inputMirrorRef = null;
    _this.topCtrlRef = null;
    _this.selectTriggerRef = null;
    _this.rootRef = null;
    _this.selectionRef = null;
    _this.dropdownContainer = null;
    _this.blurTimer = null;
    _this.focusTimer = null;
    _this.comboboxTimer = null; // tslint:disable-next-line:variable-name

    _this._focused = false; // tslint:disable-next-line:variable-name

    _this._mouseDown = false; // tslint:disable-next-line:variable-name

    _this._options = []; // tslint:disable-next-line:variable-name

    _this._empty = false;

    _this.onInputChange = function (event) {
      var tokenSeparators = _this.props.tokenSeparators;
      var val = event.target.value;

      if (isMultipleOrTags(_this.props) && tokenSeparators.length && includesSeparators(val, tokenSeparators)) {
        var nextValue = _this.getValueByInput(val);

        if (nextValue !== undefined) {
          _this.fireChange(nextValue);
        }

        _this.setOpenState(false, {
          needFocus: true
        });

        _this.setInputValue('', false);

        return;
      }

      _this.setInputValue(val);

      _this.setState({
        open: true
      });

      if (isCombobox(_this.props)) {
        _this.fireChange([val]);
      }
    };

    _this.onDropdownVisibleChange = function (open) {
      if (open && !_this._focused) {
        _this.clearBlurTime();

        _this.timeoutFocus();

        _this._focused = true;

        _this.updateFocusClassName();
      }

      _this.setOpenState(open);
    }; // combobox ignore


    _this.onKeyDown = function (event) {
      var open = _this.state.open;
      var disabled = _this.props.disabled;

      if (disabled) {
        return;
      }

      var keyCode = event.keyCode;

      if (open && !_this.getInputDOMNode()) {
        _this.onInputKeyDown(event);
      } else if (keyCode === KeyCode.ENTER || keyCode === KeyCode.DOWN) {
        if (!open) {
          _this.setOpenState(true);
        }

        event.preventDefault();
      } else if (keyCode === KeyCode.SPACE) {
        // Not block space if popup is shown
        if (!open) {
          _this.setOpenState(true);

          event.preventDefault();
        }
      }
    };

    _this.onInputKeyDown = function (event) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          combobox = _this$props.combobox,
          defaultActiveFirstOption = _this$props.defaultActiveFirstOption;

      if (disabled) {
        return;
      }

      var state = _this.state;

      var isRealOpen = _this.getRealOpenState(state); // magic code


      var keyCode = event.keyCode;

      if (isMultipleOrTags(_this.props) && !event.target.value && keyCode === KeyCode.BACKSPACE) {
        event.preventDefault();
        var value = state.value;

        if (value.length) {
          _this.removeSelected(value[value.length - 1]);
        }

        return;
      }

      if (keyCode === KeyCode.DOWN) {
        if (!state.open) {
          _this.openIfHasChildren();

          event.preventDefault();
          event.stopPropagation();
          return;
        }
      } else if (keyCode === KeyCode.ENTER && state.open) {
        // Aviod trigger form submit when select item
        // https://github.com/ant-design/ant-design/issues/10861
        // https://github.com/ant-design/ant-design/issues/14544
        if (isRealOpen || !combobox) {
          event.preventDefault();
        } // Hard close popup to avoid lock of non option in combobox mode


        if (isRealOpen && combobox && defaultActiveFirstOption === false) {
          _this.comboboxTimer = setTimeout(function () {
            _this.setOpenState(false);
          });
        }
      } else if (keyCode === KeyCode.ESC) {
        if (state.open) {
          _this.setOpenState(false);

          event.preventDefault();
          event.stopPropagation();
        }

        return;
      }

      if (isRealOpen && _this.selectTriggerRef) {
        var menu = _this.selectTriggerRef.getInnerMenu();

        if (menu && menu.onKeyDown(event, _this.handleBackfill)) {
          event.preventDefault();
          event.stopPropagation();
        }
      }
    };

    _this.onMenuSelect = function (_ref) {
      var item = _ref.item;

      if (!item) {
        return;
      }

      var value = _this.state.value;
      var props = _this.props;
      var selectedValue = getValuePropValue(item);
      var lastValue = value[value.length - 1];
      var skipTrigger = false;

      if (isMultipleOrTags(props)) {
        if (findIndexInValueBySingleValue(value, selectedValue) !== -1) {
          skipTrigger = true;
        } else {
          value = value.concat([selectedValue]);
        }
      } else {
        if (!isCombobox(props) && lastValue !== undefined && lastValue === selectedValue && selectedValue !== _this.state.backfillValue) {
          _this.setOpenState(false, {
            needFocus: true,
            fireSearch: false
          });

          skipTrigger = true;
        } else {
          value = [selectedValue];

          _this.setOpenState(false, {
            needFocus: true,
            fireSearch: false
          });
        }
      }

      if (!skipTrigger) {
        _this.fireChange(value);
      }

      _this.fireSelect(selectedValue);

      if (!skipTrigger) {
        var inputValue = isCombobox(props) ? getPropValue(item, props.optionLabelProp) : '';

        if (props.autoClearSearchValue) {
          _this.setInputValue(inputValue, false);
        }
      }
    };

    _this.onMenuDeselect = function (_ref2) {
      var item = _ref2.item,
          domEvent = _ref2.domEvent;

      if (domEvent.type === 'keydown' && domEvent.keyCode === KeyCode.ENTER) {
        var menuItemDomNode = ReactDOM.findDOMNode(item); // https://github.com/ant-design/ant-design/issues/20465#issuecomment-569033796

        if (!isHidden(menuItemDomNode)) {
          _this.removeSelected(getValuePropValue(item));
        }

        return;
      }

      if (domEvent.type === 'click') {
        _this.removeSelected(getValuePropValue(item));
      }

      var props = _this.props;

      if (props.autoClearSearchValue) {
        _this.setInputValue('');
      }
    };

    _this.onArrowClick = function (e) {
      e.stopPropagation();
      e.preventDefault();

      if (!_this.props.disabled) {
        _this.setOpenState(!_this.state.open, {
          needFocus: !_this.state.open
        });
      }
    };

    _this.onPlaceholderClick = function () {
      if (_this.getInputDOMNode && _this.getInputDOMNode()) {
        _this.getInputDOMNode().focus();
      }
    };

    _this.onOuterFocus = function (e) {
      if (_this.props.disabled) {
        e.preventDefault();
        return;
      }

      _this.clearBlurTime(); // In IE11, onOuterFocus will be trigger twice when focus input
      // First one: e.target is div
      // Second one: e.target is input
      // other browser only trigger second one
      // https://github.com/ant-design/ant-design/issues/15942
      // Here we ignore the first one when e.target is div


      var inputNode = _this.getInputDOMNode();

      if (inputNode && e.target === _this.rootRef) {
        return;
      }

      if (!isMultipleOrTagsOrCombobox(_this.props) && e.target === inputNode) {
        return;
      }

      if (_this._focused) {
        return;
      }

      _this._focused = true;

      _this.updateFocusClassName(); // only effect multiple or tag mode


      if (!isMultipleOrTags(_this.props) || !_this._mouseDown) {
        _this.timeoutFocus();
      }
    };

    _this.onPopupFocus = function () {
      // fix ie scrollbar, focus element again
      _this.maybeFocus(true, true);
    };

    _this.onOuterBlur = function (e) {
      if (_this.props.disabled) {
        e.preventDefault();
        return;
      }

      _this.blurTimer = window.setTimeout(function () {
        _this._focused = false;

        _this.updateFocusClassName();

        var props = _this.props;
        var value = _this.state.value;
        var inputValue = _this.state.inputValue;

        if (isSingleMode(props) && props.showSearch && inputValue && props.defaultActiveFirstOption) {
          var options = _this._options || [];

          if (options.length) {
            var firstOption = findFirstMenuItem(options);

            if (firstOption) {
              value = [getValuePropValue(firstOption)];

              _this.fireChange(value);
            }
          }
        } else if (isMultipleOrTags(props) && inputValue) {
          if (_this._mouseDown) {
            // need update dropmenu when not blur
            _this.setInputValue('');
          } else {
            // why not use setState?
            // https://github.com/ant-design/ant-design/issues/14262
            _this.state.inputValue = '';

            if (_this.getInputDOMNode && _this.getInputDOMNode()) {
              _this.getInputDOMNode().value = '';
            }
          }

          var tmpValue = _this.getValueByInput(inputValue);

          if (tmpValue !== undefined) {
            value = tmpValue;

            _this.fireChange(value);
          }
        } // if click the rest space of Select in multiple mode


        if (isMultipleOrTags(props) && _this._mouseDown) {
          _this.maybeFocus(true, true);

          _this._mouseDown = false;
          return;
        }

        _this.setOpenState(false);

        if (props.onBlur) {
          props.onBlur(_this.getVLForOnChange(value));
        }
      }, 10);
    };

    _this.onClearSelection = function (event) {
      var props = _this.props;
      var state = _this.state;

      if (props.disabled) {
        return;
      }

      var inputValue = state.inputValue;
      var value = state.value;
      event.stopPropagation();

      if (inputValue || value.length) {
        if (value.length) {
          _this.fireChange([]);
        }

        _this.setOpenState(false, {
          needFocus: true
        });

        if (inputValue) {
          _this.setInputValue('');
        }
      }
    };

    _this.onChoiceAnimationLeave = function () {
      _this.forcePopupAlign();
    };

    _this.getOptionInfoBySingleValue = function (value, optionsInfo) {
      var info;
      optionsInfo = optionsInfo || _this.state.optionsInfo;

      if (optionsInfo[getMapKey(value)]) {
        info = optionsInfo[getMapKey(value)];
      }

      if (info) {
        return info;
      }

      var defaultLabel = value;

      if (_this.props.labelInValue) {
        var valueLabel = getLabelFromPropsValue(_this.props.value, value);
        var defaultValueLabel = getLabelFromPropsValue(_this.props.defaultValue, value);

        if (valueLabel !== undefined) {
          defaultLabel = valueLabel;
        } else if (defaultValueLabel !== undefined) {
          defaultLabel = defaultValueLabel;
        }
      }

      var defaultInfo = {
        option: React.createElement(Option, {
          value: value,
          key: value
        }, value),
        value: value,
        label: defaultLabel
      };
      return defaultInfo;
    };

    _this.getOptionBySingleValue = function (value) {
      var _this$getOptionInfoBy = _this.getOptionInfoBySingleValue(value),
          option = _this$getOptionInfoBy.option;

      return option;
    };

    _this.getOptionsBySingleValue = function (values) {
      return values.map(function (value) {
        return _this.getOptionBySingleValue(value);
      });
    };

    _this.getValueByLabel = function (label) {
      if (label === undefined) {
        return null;
      }

      var value = null;
      Object.keys(_this.state.optionsInfo).forEach(function (key) {
        var info = _this.state.optionsInfo[key];
        var disabled = info.disabled;

        if (disabled) {
          return;
        }

        var oldLable = toArray(info.label);

        if (oldLable && oldLable.join('') === label) {
          value = info.value;
        }
      });
      return value;
    };

    _this.getVLBySingleValue = function (value) {
      if (_this.props.labelInValue) {
        return {
          key: value,
          label: _this.getLabelBySingleValue(value)
        };
      }

      return value;
    };

    _this.getVLForOnChange = function (vlsS) {
      var vls = vlsS;

      if (vls !== undefined) {
        if (!_this.props.labelInValue) {
          vls = vls.map(function (v) {
            return v;
          });
        } else {
          vls = vls.map(function (vl) {
            return {
              key: vl,
              label: _this.getLabelBySingleValue(vl)
            };
          });
        }

        return isMultipleOrTags(_this.props) ? vls : vls[0];
      }

      return vls;
    };

    _this.getLabelBySingleValue = function (value, optionsInfo) {
      var _this$getOptionInfoBy2 = _this.getOptionInfoBySingleValue(value, optionsInfo),
          label = _this$getOptionInfoBy2.label;

      return label;
    };

    _this.getDropdownContainer = function () {
      if (!_this.dropdownContainer) {
        _this.dropdownContainer = document.createElement('div');
        document.body.appendChild(_this.dropdownContainer);
      }

      return _this.dropdownContainer;
    };

    _this.getPlaceholderElement = function () {
      var props = _this.props;
      var state = _this.state;
      var hidden = false;

      if (state.inputValue) {
        hidden = true;
      }

      var value = state.value;

      if (value.length) {
        hidden = true;
      }

      if (isCombobox(props) && value.length === 1 && state.value && !state.value[0]) {
        hidden = false;
      }

      var placeholder = props.placeholder;

      if (placeholder) {
        return React.createElement("div", _extends$1({
          onMouseDown: preventDefaultEvent,
          style: _extends$1({
            display: hidden ? 'none' : 'block'
          }, UNSELECTABLE_STYLE)
        }, UNSELECTABLE_ATTRIBUTE, {
          onClick: _this.onPlaceholderClick,
          className: "".concat(props.prefixCls, "-selection__placeholder")
        }), placeholder);
      }

      return null;
    };

    _this.getInputElement = function () {
      var props = _this.props;
      var defaultInput = React.createElement("input", {
        id: props.id,
        autoComplete: "off"
      }); // tslint:disable-next-line:typedef-whitespace

      var inputElement = props.getInputElement ? props.getInputElement() : defaultInput;
      var inputCls = classNames(inputElement.props.className, _defineProperty$1({}, "".concat(props.prefixCls, "-search__field"), true)); // https://github.com/ant-design/ant-design/issues/4992#issuecomment-281542159
      // Add space to the end of the inputValue as the width measurement tolerance

      return React.createElement("div", {
        className: "".concat(props.prefixCls, "-search__field__wrap")
      }, React.cloneElement(inputElement, {
        ref: _this.saveInputRef,
        onChange: _this.onInputChange,
        onKeyDown: chaining(_this.onInputKeyDown, inputElement.props.onKeyDown, _this.props.onInputKeyDown),
        value: _this.state.inputValue,
        disabled: props.disabled,
        className: inputCls
      }), React.createElement("span", {
        ref: _this.saveInputMirrorRef,
        className: "".concat(props.prefixCls, "-search__field__mirror")
      }, _this.state.inputValue, "\xA0"));
    };

    _this.getInputDOMNode = function () {
      return _this.topCtrlRef ? _this.topCtrlRef.querySelector('input,textarea,div[contentEditable]') : _this.inputRef;
    };

    _this.getInputMirrorDOMNode = function () {
      return _this.inputMirrorRef;
    };

    _this.getPopupDOMNode = function () {
      if (_this.selectTriggerRef) {
        return _this.selectTriggerRef.getPopupDOMNode();
      }
    };

    _this.getPopupMenuComponent = function () {
      if (_this.selectTriggerRef) {
        return _this.selectTriggerRef.getInnerMenu();
      }
    };

    _this.setOpenState = function (open) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var needFocus = config.needFocus,
          fireSearch = config.fireSearch;
      var props = _this.props;
      var state = _this.state;

      if (state.open === open) {
        _this.maybeFocus(open, !!needFocus);

        return;
      }

      if (_this.props.onDropdownVisibleChange) {
        _this.props.onDropdownVisibleChange(open);
      }

      var nextState = {
        open: open,
        backfillValue: ''
      }; // clear search input value when open is false in singleMode.
      // https://github.com/ant-design/ant-design/issues/16572

      if (!open && isSingleMode(props) && props.showSearch) {
        _this.setInputValue('', fireSearch);
      }

      if (!open) {
        _this.maybeFocus(open, !!needFocus);
      }

      _this.setState(_extends$1({
        open: open
      }, nextState), function () {
        if (open) {
          _this.maybeFocus(open, !!needFocus);
        }
      });
    };

    _this.setInputValue = function (inputValue) {
      var fireSearch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var onSearch = _this.props.onSearch;

      if (inputValue !== _this.state.inputValue) {
        _this.setState(function (prevState) {
          // Additional check if `inputValue` changed in latest state.
          if (fireSearch && inputValue !== prevState.inputValue && onSearch) {
            onSearch(inputValue);
          }

          return {
            inputValue: inputValue
          };
        }, _this.forcePopupAlign);
      }
    };

    _this.getValueByInput = function (str) {
      var _this$props2 = _this.props,
          multiple = _this$props2.multiple,
          tokenSeparators = _this$props2.tokenSeparators;
      var nextValue = _this.state.value;
      var hasNewValue = false;
      splitBySeparators(str, tokenSeparators).forEach(function (label) {
        var selectedValue = [label];

        if (multiple) {
          var value = _this.getValueByLabel(label);

          if (value && findIndexInValueBySingleValue(nextValue, value) === -1) {
            nextValue = nextValue.concat(value);
            hasNewValue = true;

            _this.fireSelect(value);
          }
        } else if (findIndexInValueBySingleValue(nextValue, label) === -1) {
          nextValue = nextValue.concat(selectedValue);
          hasNewValue = true;

          _this.fireSelect(label);
        }
      });
      return hasNewValue ? nextValue : undefined;
    };

    _this.getRealOpenState = function (state) {
      // tslint:disable-next-line:variable-name
      var _open = _this.props.open;

      if (typeof _open === 'boolean') {
        return _open;
      }

      var open = (state || _this.state).open;
      var options = _this._options || [];

      if (isMultipleOrTagsOrCombobox(_this.props) || !_this.props.showSearch) {
        if (open && !options.length) {
          open = false;
        }
      }

      return open;
    };

    _this.markMouseDown = function () {
      _this._mouseDown = true;
    };

    _this.markMouseLeave = function () {
      _this._mouseDown = false;
    };

    _this.handleBackfill = function (item) {
      if (!_this.props.backfill || !(isSingleMode(_this.props) || isCombobox(_this.props))) {
        return;
      }

      var key = getValuePropValue(item);

      if (isCombobox(_this.props)) {
        _this.setInputValue(key, false);
      }

      _this.setState({
        value: [key],
        backfillValue: key
      });
    };

    _this.filterOption = function (input, child) {
      var defaultFilter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultFilterFn;
      var value = _this.state.value;
      var lastValue = value[value.length - 1];

      if (!input || lastValue && lastValue === _this.state.backfillValue) {
        return true;
      }

      var filterFn = _this.props.filterOption;

      if ('filterOption' in _this.props) {
        if (filterFn === true) {
          filterFn = defaultFilter.bind(_assertThisInitialized$1(_this));
        }
      } else {
        filterFn = defaultFilter.bind(_assertThisInitialized$1(_this));
      }

      if (!filterFn) {
        return true;
      } else if (typeof filterFn === 'function') {
        return filterFn.call(_assertThisInitialized$1(_this), input, child);
      } else if (child.props.disabled) {
        return false;
      }

      return true;
    };

    _this.timeoutFocus = function () {
      var onFocus = _this.props.onFocus;

      if (_this.focusTimer) {
        _this.clearFocusTime();
      }

      _this.focusTimer = window.setTimeout(function () {
        if (onFocus) {
          onFocus();
        }
      }, 10);
    };

    _this.clearFocusTime = function () {
      if (_this.focusTimer) {
        clearTimeout(_this.focusTimer);
        _this.focusTimer = null;
      }
    };

    _this.clearBlurTime = function () {
      if (_this.blurTimer) {
        clearTimeout(_this.blurTimer);
        _this.blurTimer = null;
      }
    };

    _this.clearComboboxTime = function () {
      if (_this.comboboxTimer) {
        clearTimeout(_this.comboboxTimer);
        _this.comboboxTimer = null;
      }
    };

    _this.updateFocusClassName = function () {
      var rootRef = _this.rootRef;
      var props = _this.props; // avoid setState and its side effect

      if (_this._focused) {
        classes(rootRef).add("".concat(props.prefixCls, "-focused"));
      } else {
        classes(rootRef).remove("".concat(props.prefixCls, "-focused"));
      }
    };

    _this.maybeFocus = function (open, needFocus) {
      if (needFocus || open) {
        var input = _this.getInputDOMNode();

        var _document = document,
            activeElement = _document.activeElement;

        if (input && (open || isMultipleOrTagsOrCombobox(_this.props))) {
          if (activeElement !== input) {
            input.focus();
            _this._focused = true;
          }
        } else if (activeElement !== _this.selectionRef && _this.selectionRef) {
          _this.selectionRef.focus();

          _this._focused = true;
        }
      }
    };

    _this.removeSelected = function (selectedKey, e) {
      var props = _this.props;

      if (props.disabled || _this.isChildDisabled(selectedKey)) {
        return;
      } // Do not trigger Trigger popup


      if (e && e.stopPropagation) {
        e.stopPropagation();
      }

      var oldValue = _this.state.value;
      var value = oldValue.filter(function (singleValue) {
        return singleValue !== selectedKey;
      });
      var canMultiple = isMultipleOrTags(props);

      if (canMultiple) {
        var event = selectedKey;

        if (props.labelInValue) {
          event = {
            key: selectedKey,
            label: _this.getLabelBySingleValue(selectedKey)
          };
        }

        if (props.onDeselect) {
          props.onDeselect(event, _this.getOptionBySingleValue(selectedKey));
        }
      }

      _this.fireChange(value);
    };

    _this.openIfHasChildren = function () {
      var props = _this.props;

      if (React.Children.count(props.children) || isSingleMode(props)) {
        _this.setOpenState(true);
      }
    };

    _this.fireSelect = function (value) {
      if (_this.props.onSelect) {
        _this.props.onSelect(_this.getVLBySingleValue(value), _this.getOptionBySingleValue(value));
      }
    };

    _this.fireChange = function (value) {
      var props = _this.props;

      if (!('value' in props)) {
        _this.setState({
          value: value
        }, _this.forcePopupAlign);
      }

      var vls = _this.getVLForOnChange(value);

      var options = _this.getOptionsBySingleValue(value);

      if (props.onChange) {
        props.onChange(vls, isMultipleOrTags(_this.props) ? options : options[0]);
      }
    };

    _this.isChildDisabled = function (key) {
      return toArray$1(_this.props.children).some(function (child) {
        var childValue = getValuePropValue(child);
        return childValue === key && child.props && child.props.disabled;
      });
    };

    _this.forcePopupAlign = function () {
      if (!_this.state.open) {
        return;
      }

      if (_this.selectTriggerRef && _this.selectTriggerRef.triggerRef) {
        _this.selectTriggerRef.triggerRef.forcePopupAlign();
      }
    };

    _this.renderFilterOptions = function () {
      var inputValue = _this.state.inputValue;
      var _this$props3 = _this.props,
          children = _this$props3.children,
          tags = _this$props3.tags,
          notFoundContent = _this$props3.notFoundContent;
      var menuItems = [];
      var childrenKeys = [];
      var empty = false;

      var options = _this.renderFilterOptionsFromChildren(children, childrenKeys, menuItems);

      if (tags) {
        // tags value must be string
        var value = _this.state.value;
        value = value.filter(function (singleValue) {
          return childrenKeys.indexOf(singleValue) === -1 && (!inputValue || String(singleValue).indexOf(String(inputValue)) > -1);
        }); // sort by length

        value.sort(function (val1, val2) {
          return val1.length - val2.length;
        });
        value.forEach(function (singleValue) {
          var key = singleValue;
          var menuItem = React.createElement(connected, {
            style: UNSELECTABLE_STYLE,
            role: "option",
            attribute: UNSELECTABLE_ATTRIBUTE,
            value: key,
            key: key
          }, key);
          options.push(menuItem);
          menuItems.push(menuItem);
        }); // ref: https://github.com/ant-design/ant-design/issues/14090

        if (inputValue && menuItems.every(function (option) {
          return getValuePropValue(option) !== inputValue;
        })) {
          options.unshift(React.createElement(connected, {
            style: UNSELECTABLE_STYLE,
            role: "option",
            attribute: UNSELECTABLE_ATTRIBUTE,
            value: inputValue,
            key: inputValue
          }, inputValue));
        }
      }

      if (!options.length && notFoundContent) {
        empty = true;
        options = [React.createElement(connected, {
          style: UNSELECTABLE_STYLE,
          attribute: UNSELECTABLE_ATTRIBUTE,
          disabled: true,
          role: "option",
          value: "NOT_FOUND",
          key: "NOT_FOUND"
        }, notFoundContent)];
      }

      return {
        empty: empty,
        options: options
      };
    };

    _this.renderFilterOptionsFromChildren = function (children, childrenKeys, menuItems) {
      var sel = [];
      var props = _this.props;
      var inputValue = _this.state.inputValue;
      var tags = props.tags;
      React.Children.forEach(children, function (child) {
        if (!child) {
          return;
        }

        var type = child.type;

        if (type.isSelectOptGroup) {
          var label = child.props.label;
          var key = child.key;

          if (!key && typeof label === 'string') {
            key = label;
          } else if (!label && key) {
            label = key;
          } // Match option group label


          if (inputValue && _this.filterOption(inputValue, child)) {
            var innerItems = toArray$1(child.props.children).map(function (subChild) {
              var childValueSub = getValuePropValue(subChild) || subChild.key;
              return React.createElement(connected, _extends$1({
                key: childValueSub,
                value: childValueSub
              }, subChild.props));
            });
            sel.push(React.createElement(MenuItemGroup, {
              key: key,
              title: label
            }, innerItems)); // Not match
          } else {
            var _innerItems = _this.renderFilterOptionsFromChildren(child.props.children, childrenKeys, menuItems);

            if (_innerItems.length) {
              sel.push(React.createElement(MenuItemGroup, {
                key: key,
                title: label
              }, _innerItems));
            }
          }

          return;
        }

        warning(type.isSelectOption, 'the children of `Select` should be `Select.Option` or `Select.OptGroup`, ' + "instead of `".concat(type.name || type.displayName || child.type, "`."));
        var childValue = getValuePropValue(child);
        validateOptionValue(childValue, _this.props);

        if (_this.filterOption(inputValue, child)) {
          var menuItem = React.createElement(connected, _extends$1({
            style: UNSELECTABLE_STYLE,
            attribute: UNSELECTABLE_ATTRIBUTE,
            value: childValue,
            key: childValue,
            role: "option"
          }, child.props));
          sel.push(menuItem);
          menuItems.push(menuItem);
        }

        if (tags) {
          childrenKeys.push(childValue);
        }
      });
      return sel;
    };

    _this.renderTopControlNode = function () {
      var _this$state = _this.state,
          open = _this$state.open,
          inputValue = _this$state.inputValue;
      var value = _this.state.value;
      var props = _this.props;
      var choiceTransitionName = props.choiceTransitionName,
          prefixCls = props.prefixCls,
          maxTagTextLength = props.maxTagTextLength,
          maxTagCount = props.maxTagCount,
          showSearch = props.showSearch,
          removeIcon = props.removeIcon;
      var maxTagPlaceholder = props.maxTagPlaceholder;
      var className = "".concat(prefixCls, "-selection__rendered"); // search input is inside topControlNode in single, multiple & combobox. 2016/04/13

      var innerNode = null;

      if (isSingleMode(props)) {
        var selectedValue = null;

        if (value.length) {
          var showSelectedValue = false;
          var opacity = 1;

          if (!showSearch) {
            showSelectedValue = true;
          } else if (open) {
            showSelectedValue = !inputValue;

            if (showSelectedValue) {
              opacity = 0.4;
            }
          } else {
            showSelectedValue = true;
          }

          var singleValue = value[0];

          var _this$getOptionInfoBy3 = _this.getOptionInfoBySingleValue(singleValue),
              label = _this$getOptionInfoBy3.label,
              title = _this$getOptionInfoBy3.title;

          selectedValue = React.createElement("div", {
            key: "value",
            className: "".concat(prefixCls, "-selection-selected-value"),
            title: toTitle(title || label),
            style: {
              display: showSelectedValue ? 'block' : 'none',
              opacity: opacity
            }
          }, label);
        }

        if (!showSearch) {
          innerNode = [selectedValue];
        } else {
          innerNode = [selectedValue, React.createElement("div", {
            className: "".concat(prefixCls, "-search ").concat(prefixCls, "-search--inline"),
            key: "input",
            style: {
              display: open ? 'block' : 'none'
            }
          }, _this.getInputElement())];
        }
      } else {
        var selectedValueNodes = [];
        var limitedCountValue = value;
        var maxTagPlaceholderEl;

        if (maxTagCount !== undefined && value.length > maxTagCount) {
          limitedCountValue = limitedCountValue.slice(0, maxTagCount);

          var omittedValues = _this.getVLForOnChange(value.slice(maxTagCount, value.length));

          var content = "+ ".concat(value.length - maxTagCount, " ...");

          if (maxTagPlaceholder) {
            content = typeof maxTagPlaceholder === 'function' ? maxTagPlaceholder(omittedValues) : maxTagPlaceholder;
          }

          maxTagPlaceholderEl = React.createElement("li", _extends$1({
            style: UNSELECTABLE_STYLE
          }, UNSELECTABLE_ATTRIBUTE, {
            role: "presentation",
            onMouseDown: preventDefaultEvent,
            className: "".concat(prefixCls, "-selection__choice ").concat(prefixCls, "-selection__choice__disabled"),
            key: "maxTagPlaceholder",
            title: toTitle(content)
          }), React.createElement("div", {
            className: "".concat(prefixCls, "-selection__choice__content")
          }, content));
        }

        if (isMultipleOrTags(props)) {
          selectedValueNodes = limitedCountValue.map(function (singleValue) {
            var info = _this.getOptionInfoBySingleValue(singleValue);

            var content = info.label;
            var title = info.title || content;

            if (maxTagTextLength && typeof content === 'string' && content.length > maxTagTextLength) {
              content = "".concat(content.slice(0, maxTagTextLength), "...");
            }

            var disabled = _this.isChildDisabled(singleValue);

            var choiceClassName = disabled ? "".concat(prefixCls, "-selection__choice ").concat(prefixCls, "-selection__choice__disabled") : "".concat(prefixCls, "-selection__choice");
            return React.createElement("li", _extends$1({
              style: UNSELECTABLE_STYLE
            }, UNSELECTABLE_ATTRIBUTE, {
              onMouseDown: preventDefaultEvent,
              className: choiceClassName,
              role: "presentation",
              key: singleValue || SELECT_EMPTY_VALUE_KEY,
              title: toTitle(title)
            }), React.createElement("div", {
              className: "".concat(prefixCls, "-selection__choice__content")
            }, content), disabled ? null : React.createElement("span", {
              onClick: function onClick(event) {
                _this.removeSelected(singleValue, event);
              },
              className: "".concat(prefixCls, "-selection__choice__remove")
            }, removeIcon || React.createElement("i", {
              className: "".concat(prefixCls, "-selection__choice__remove-icon")
            }, "\xD7")));
          });
        }

        if (maxTagPlaceholderEl) {
          selectedValueNodes.push(maxTagPlaceholderEl);
        }

        selectedValueNodes.push(React.createElement("li", {
          className: "".concat(prefixCls, "-search ").concat(prefixCls, "-search--inline"),
          key: "__input"
        }, _this.getInputElement()));

        if (isMultipleOrTags(props) && choiceTransitionName) {
          innerNode = React.createElement(Animate, {
            onLeave: _this.onChoiceAnimationLeave,
            component: "ul",
            transitionName: choiceTransitionName
          }, selectedValueNodes);
        } else {
          innerNode = React.createElement("ul", null, selectedValueNodes);
        }
      }

      return React.createElement("div", {
        className: className,
        ref: _this.saveTopCtrlRef
      }, _this.getPlaceholderElement(), innerNode);
    };

    var optionsInfo = Select.getOptionsInfoFromProps(props);

    if (props.tags && typeof props.filterOption !== 'function') {
      var isDisabledExist = Object.keys(optionsInfo).some(function (key) {
        return optionsInfo[key].disabled;
      });
      warning(!isDisabledExist, 'Please avoid setting option to disabled in tags mode since user can always type text as tag.');
    }

    _this.state = {
      value: Select.getValueFromProps(props, true),
      inputValue: props.combobox ? Select.getInputValueForCombobox(props, optionsInfo, true) : '',
      open: props.defaultOpen,
      optionsInfo: optionsInfo,
      backfillValue: '',
      // a flag for aviod redundant getOptionsInfoFromProps call
      skipBuildOptionsInfo: true,
      ariaId: ''
    };
    _this.saveInputRef = saveRef(_assertThisInitialized$1(_this), 'inputRef');
    _this.saveInputMirrorRef = saveRef(_assertThisInitialized$1(_this), 'inputMirrorRef');
    _this.saveTopCtrlRef = saveRef(_assertThisInitialized$1(_this), 'topCtrlRef');
    _this.saveSelectTriggerRef = saveRef(_assertThisInitialized$1(_this), 'selectTriggerRef');
    _this.saveRootRef = saveRef(_assertThisInitialized$1(_this), 'rootRef');
    _this.saveSelectionRef = saveRef(_assertThisInitialized$1(_this), 'selectionRef');
    return _this;
  }

  _createClass$1(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // when defaultOpen is true, we should auto focus search input
      // https://github.com/ant-design/ant-design/issues/14254
      if (this.props.autoFocus || this.state.open) {
        this.focus();
      }

      this.setState({
        ariaId: generateUUID()
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (isMultipleOrTags(this.props)) {
        var inputNode = this.getInputDOMNode();
        var mirrorNode = this.getInputMirrorDOMNode();

        if (inputNode && inputNode.value && mirrorNode) {
          inputNode.style.width = '';
          inputNode.style.width = "".concat(mirrorNode.clientWidth, "px");
        } else if (inputNode) {
          inputNode.style.width = '';
        }
      }

      this.forcePopupAlign();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearFocusTime();
      this.clearBlurTime();
      this.clearComboboxTime();

      if (this.dropdownContainer) {
        ReactDOM.unmountComponentAtNode(this.dropdownContainer);
        document.body.removeChild(this.dropdownContainer);
        this.dropdownContainer = null;
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      if (isSingleMode(this.props) && this.selectionRef) {
        this.selectionRef.focus();
      } else if (this.getInputDOMNode()) {
        this.getInputDOMNode().focus();
      }
    }
  }, {
    key: "blur",
    value: function blur() {
      if (isSingleMode(this.props) && this.selectionRef) {
        this.selectionRef.blur();
      } else if (this.getInputDOMNode()) {
        this.getInputDOMNode().blur();
      }
    }
  }, {
    key: "renderArrow",
    value: function renderArrow(multiple) {
      // showArrow : Set to true if not multiple by default but keep set value.
      var _this$props4 = this.props,
          _this$props4$showArro = _this$props4.showArrow,
          showArrow = _this$props4$showArro === void 0 ? !multiple : _this$props4$showArro,
          loading = _this$props4.loading,
          inputIcon = _this$props4.inputIcon,
          prefixCls = _this$props4.prefixCls;

      if (!showArrow && !loading) {
        return null;
      } // if loading  have loading icon


      var defaultIcon = loading ? React.createElement("i", {
        className: "".concat(prefixCls, "-arrow-loading")
      }) : React.createElement("i", {
        className: "".concat(prefixCls, "-arrow-icon")
      });
      return React.createElement("span", _extends$1({
        key: "arrow",
        className: "".concat(prefixCls, "-arrow"),
        style: UNSELECTABLE_STYLE
      }, UNSELECTABLE_ATTRIBUTE, {
        onClick: this.onArrowClick
      }), inputIcon || defaultIcon);
    }
  }, {
    key: "renderClear",
    value: function renderClear() {
      var _this$props5 = this.props,
          prefixCls = _this$props5.prefixCls,
          allowClear = _this$props5.allowClear,
          clearIcon = _this$props5.clearIcon;
      var inputValue = this.state.inputValue;
      var value = this.state.value;
      var clear = React.createElement("span", _extends$1({
        key: "clear",
        className: "".concat(prefixCls, "-selection__clear"),
        onMouseDown: preventDefaultEvent,
        style: UNSELECTABLE_STYLE
      }, UNSELECTABLE_ATTRIBUTE, {
        onClick: this.onClearSelection
      }), clearIcon || React.createElement("i", {
        className: "".concat(prefixCls, "-selection__clear-icon")
      }, "\xD7"));

      if (!allowClear) {
        return null;
      }

      if (isCombobox(this.props)) {
        if (inputValue) {
          return clear;
        }

        return null;
      }

      if (inputValue || value.length) {
        return clear;
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _rootCls;

      var props = this.props;
      var multiple = isMultipleOrTags(props); // Default set showArrow to true if not set (not set directly in defaultProps to handle multiple case)

      var _props$showArrow = props.showArrow,
          showArrow = _props$showArrow === void 0 ? true : _props$showArrow;
      var state = this.state;
      var className = props.className,
          disabled = props.disabled,
          prefixCls = props.prefixCls,
          loading = props.loading;
      var ctrlNode = this.renderTopControlNode();
      var _this$state2 = this.state,
          open = _this$state2.open,
          ariaId = _this$state2.ariaId;

      if (open) {
        var filterOptions = this.renderFilterOptions();
        this._empty = filterOptions.empty;
        this._options = filterOptions.options;
      }

      var realOpen = this.getRealOpenState();
      var empty = this._empty;
      var options = this._options || [];
      var dataOrAriaAttributeProps = {};
      Object.keys(props).forEach(function (key) {
        if (Object.prototype.hasOwnProperty.call(props, key) && (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role')) {
          dataOrAriaAttributeProps[key] = props[key];
        }
      }); // for (const key in props) {
      //   if (
      //     Object.prototype.hasOwnProperty.call(props, key) &&
      //     (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role')
      //   ) {
      //     dataOrAriaAttributeProps[key] = props[key];
      //   }
      // }

      var extraSelectionProps = _extends$1({}, dataOrAriaAttributeProps);

      if (!isMultipleOrTagsOrCombobox(props)) {
        extraSelectionProps = _extends$1(_extends$1({}, extraSelectionProps), {
          onKeyDown: this.onKeyDown,
          tabIndex: props.disabled ? -1 : props.tabIndex
        });
      }

      var rootCls = (_rootCls = {}, _defineProperty$1(_rootCls, className, !!className), _defineProperty$1(_rootCls, prefixCls, 1), _defineProperty$1(_rootCls, "".concat(prefixCls, "-open"), open), _defineProperty$1(_rootCls, "".concat(prefixCls, "-focused"), open || !!this._focused), _defineProperty$1(_rootCls, "".concat(prefixCls, "-combobox"), isCombobox(props)), _defineProperty$1(_rootCls, "".concat(prefixCls, "-disabled"), disabled), _defineProperty$1(_rootCls, "".concat(prefixCls, "-enabled"), !disabled), _defineProperty$1(_rootCls, "".concat(prefixCls, "-allow-clear"), !!props.allowClear), _defineProperty$1(_rootCls, "".concat(prefixCls, "-no-arrow"), !showArrow), _defineProperty$1(_rootCls, "".concat(prefixCls, "-loading"), !!loading), _rootCls);
      return React.createElement(SelectTrigger, {
        onPopupFocus: this.onPopupFocus,
        onMouseEnter: this.props.onMouseEnter,
        onMouseLeave: this.props.onMouseLeave,
        dropdownAlign: props.dropdownAlign,
        dropdownClassName: props.dropdownClassName,
        dropdownMatchSelectWidth: props.dropdownMatchSelectWidth,
        defaultActiveFirstOption: props.defaultActiveFirstOption,
        dropdownMenuStyle: props.dropdownMenuStyle,
        transitionName: props.transitionName,
        animation: props.animation,
        prefixCls: props.prefixCls,
        dropdownStyle: props.dropdownStyle,
        combobox: props.combobox,
        showSearch: props.showSearch,
        options: options,
        empty: empty,
        multiple: multiple,
        disabled: disabled,
        visible: realOpen,
        inputValue: state.inputValue,
        value: state.value,
        backfillValue: state.backfillValue,
        firstActiveValue: props.firstActiveValue,
        onDropdownVisibleChange: this.onDropdownVisibleChange,
        getPopupContainer: props.getPopupContainer,
        onMenuSelect: this.onMenuSelect,
        onMenuDeselect: this.onMenuDeselect,
        onPopupScroll: props.onPopupScroll,
        showAction: props.showAction,
        ref: this.saveSelectTriggerRef,
        menuItemSelectedIcon: props.menuItemSelectedIcon,
        dropdownRender: props.dropdownRender,
        ariaId: ariaId
      }, React.createElement("div", {
        id: props.id,
        style: props.style,
        ref: this.saveRootRef,
        onBlur: this.onOuterBlur,
        onFocus: this.onOuterFocus,
        className: classNames(rootCls),
        onMouseDown: this.markMouseDown,
        onMouseUp: this.markMouseLeave,
        onMouseOut: this.markMouseLeave
      }, React.createElement("div", _extends$1({
        ref: this.saveSelectionRef,
        key: "selection",
        className: "".concat(prefixCls, "-selection\n            ").concat(prefixCls, "-selection--").concat(multiple ? 'multiple' : 'single'),
        role: "combobox",
        "aria-autocomplete": "list",
        "aria-haspopup": "true",
        "aria-controls": ariaId,
        "aria-expanded": realOpen
      }, extraSelectionProps), ctrlNode, this.renderClear(), this.renderArrow(!!multiple))));
    }
  }]);

  return Select;
}(React.Component);

Select$1.propTypes = SelectPropTypes$1;
Select$1.defaultProps = {
  prefixCls: 'rc-select',
  defaultOpen: false,
  labelInValue: false,
  defaultActiveFirstOption: true,
  showSearch: true,
  allowClear: false,
  placeholder: '',
  onChange: noop,
  onFocus: noop,
  onBlur: noop,
  onSelect: noop,
  onSearch: noop,
  onDeselect: noop,
  onInputKeyDown: noop,
  dropdownMatchSelectWidth: true,
  dropdownStyle: {},
  dropdownMenuStyle: {},
  optionFilterProp: 'value',
  optionLabelProp: 'value',
  notFoundContent: 'Not Found',
  backfill: false,
  showAction: ['click'],
  tokenSeparators: [],
  autoClearSearchValue: true,
  tabIndex: 0,
  dropdownRender: function dropdownRender(menu) {
    return menu;
  }
};

Select$1.getDerivedStateFromProps = function (nextProps, prevState) {
  var optionsInfo = prevState.skipBuildOptionsInfo ? prevState.optionsInfo : Select$1.getOptionsInfoFromProps(nextProps, prevState);
  var newState = {
    optionsInfo: optionsInfo,
    skipBuildOptionsInfo: false
  };

  if ('open' in nextProps) {
    newState.open = nextProps.open;
  }

  if (nextProps.disabled && prevState.open) {
    newState.open = false;
  }

  if ('value' in nextProps) {
    var value = Select$1.getValueFromProps(nextProps);
    newState.value = value;

    if (nextProps.combobox) {
      newState.inputValue = Select$1.getInputValueForCombobox(nextProps, optionsInfo);
    }
  }

  return newState;
};

Select$1.getOptionsFromChildren = function (children) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  React.Children.forEach(children, function (child) {
    if (!child) {
      return;
    }

    var type = child.type;

    if (type.isSelectOptGroup) {
      Select$1.getOptionsFromChildren(child.props.children, options);
    } else {
      options.push(child);
    }
  });
  return options;
};

Select$1.getInputValueForCombobox = function (props, optionsInfo, useDefaultValue) {
  var value = [];

  if ('value' in props && !useDefaultValue) {
    value = toArray(props.value);
  }

  if ('defaultValue' in props && useDefaultValue) {
    value = toArray(props.defaultValue);
  }

  if (value.length) {
    value = value[0];
  } else {
    return '';
  }

  var label = value;

  if (props.labelInValue) {
    label = value.label;
  } else if (optionsInfo[getMapKey(value)]) {
    label = optionsInfo[getMapKey(value)].label;
  }

  if (label === undefined) {
    label = '';
  }

  return label;
};

Select$1.getLabelFromOption = function (props, option) {
  return getPropValue(option, props.optionLabelProp);
};

Select$1.getOptionsInfoFromProps = function (props, preState) {
  var options = Select$1.getOptionsFromChildren(props.children);
  var optionsInfo = {};
  options.forEach(function (option) {
    var singleValue = getValuePropValue(option);
    optionsInfo[getMapKey(singleValue)] = {
      option: option,
      value: singleValue,
      label: Select$1.getLabelFromOption(props, option),
      title: option.props.title,
      disabled: option.props.disabled
    };
  });

  if (preState) {
    // keep option info in pre state value.
    var oldOptionsInfo = preState.optionsInfo;
    var value = preState.value;

    if (value) {
      value.forEach(function (v) {
        var key = getMapKey(v);

        if (!optionsInfo[key] && oldOptionsInfo[key] !== undefined) {
          optionsInfo[key] = oldOptionsInfo[key];
        }
      });
    }
  }

  return optionsInfo;
};

Select$1.getValueFromProps = function (props, useDefaultValue) {
  var value = [];

  if ('value' in props && !useDefaultValue) {
    value = toArray(props.value);
  }

  if ('defaultValue' in props && useDefaultValue) {
    value = toArray(props.defaultValue);
  }

  if (props.labelInValue) {
    value = value.map(function (v) {
      return v.key;
    });
  }

  return value;
};

Select$1.displayName = 'Select';
polyfill(Select$1);

Select$1.Option = Option;
Select$1.OptGroup = OptGroup;

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
var SelectSizes = tuple('default', 'large', 'small');
tuple('default', 'multiple', 'tags', 'combobox', 'SECRET_COMBOBOX_MODE_DO_NOT_USE');
var SelectPropTypes = {
  prefixCls: propTypesExports.string,
  className: propTypesExports.string,
  size: propTypesExports.oneOf(SelectSizes),
  notFoundContent: propTypesExports.any,
  showSearch: propTypesExports.bool,
  optionLabelProp: propTypesExports.string,
  transitionName: propTypesExports.string,
  choiceTransitionName: propTypesExports.string,
  id: propTypesExports.string
};

var Select = /*#__PURE__*/function (_React$Component) {
  _inherits(Select, _React$Component);

  var _super = _createSuper(Select);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _super.call(this, props);

    _this.saveSelect = function (node) {
      _this.rcSelect = node;
    };

    _this.renderSelect = function (_ref) {
      var _classNames;

      var getContextPopupContainer = _ref.getPopupContainer,
          getPrefixCls = _ref.getPrefixCls,
          renderEmpty = _ref.renderEmpty;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          _a$className = _a.className,
          className = _a$className === void 0 ? '' : _a$className,
          size = _a.size,
          mode = _a.mode,
          getPopupContainer = _a.getPopupContainer,
          removeIcon = _a.removeIcon,
          clearIcon = _a.clearIcon,
          menuItemSelectedIcon = _a.menuItemSelectedIcon,
          showArrow = _a.showArrow,
          restProps = __rest(_a, ["prefixCls", "className", "size", "mode", "getPopupContainer", "removeIcon", "clearIcon", "menuItemSelectedIcon", "showArrow"]);

      var rest = omit(restProps, ['inputIcon']);
      var prefixCls = getPrefixCls('select', customizePrefixCls);
      var cls = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), _defineProperty(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _defineProperty(_classNames, "".concat(prefixCls, "-show-arrow"), showArrow), _classNames), className);
      var optionLabelProp = _this.props.optionLabelProp;

      if (_this.isCombobox()) {
        // children 带 dom 结构时，无法填入输入框
        optionLabelProp = optionLabelProp || 'value';
      }

      var modeConfig = {
        multiple: mode === 'multiple',
        tags: mode === 'tags',
        combobox: _this.isCombobox()
      };
      var finalRemoveIcon = removeIcon && ( /*#__PURE__*/React.isValidElement(removeIcon) ? /*#__PURE__*/React.cloneElement(removeIcon, {
        className: classNames(removeIcon.props.className, "".concat(prefixCls, "-remove-icon"))
      }) : removeIcon) || /*#__PURE__*/React.createElement(Icon, {
        type: "close",
        className: "".concat(prefixCls, "-remove-icon")
      });
      var finalClearIcon = clearIcon && ( /*#__PURE__*/React.isValidElement(clearIcon) ? /*#__PURE__*/React.cloneElement(clearIcon, {
        className: classNames(clearIcon.props.className, "".concat(prefixCls, "-clear-icon"))
      }) : clearIcon) || /*#__PURE__*/React.createElement(Icon, {
        type: "close-circle",
        theme: "filled",
        className: "".concat(prefixCls, "-clear-icon")
      });
      var finalMenuItemSelectedIcon = menuItemSelectedIcon && ( /*#__PURE__*/React.isValidElement(menuItemSelectedIcon) ? /*#__PURE__*/React.cloneElement(menuItemSelectedIcon, {
        className: classNames(menuItemSelectedIcon.props.className, "".concat(prefixCls, "-selected-icon"))
      }) : menuItemSelectedIcon) || /*#__PURE__*/React.createElement(Icon, {
        type: "check",
        className: "".concat(prefixCls, "-selected-icon")
      });
      return /*#__PURE__*/React.createElement(Select$1, _extends({
        inputIcon: _this.renderSuffixIcon(prefixCls),
        removeIcon: finalRemoveIcon,
        clearIcon: finalClearIcon,
        menuItemSelectedIcon: finalMenuItemSelectedIcon,
        showArrow: showArrow
      }, rest, modeConfig, {
        prefixCls: prefixCls,
        className: cls,
        optionLabelProp: optionLabelProp || 'children',
        notFoundContent: _this.getNotFoundContent(renderEmpty),
        getPopupContainer: getPopupContainer || getContextPopupContainer,
        ref: _this.saveSelect
      }));
    };
    return _this;
  }

  _createClass(Select, [{
    key: "getNotFoundContent",
    value: function getNotFoundContent(renderEmpty) {
      var notFoundContent = this.props.notFoundContent;

      if (notFoundContent !== undefined) {
        return notFoundContent;
      }

      if (this.isCombobox()) {
        return null;
      }

      return renderEmpty('Select');
    }
  }, {
    key: "focus",
    value: function focus() {
      this.rcSelect.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.rcSelect.blur();
    }
  }, {
    key: "isCombobox",
    value: function isCombobox() {
      var mode = this.props.mode;
      return mode === 'combobox' || mode === Select.SECRET_COMBOBOX_MODE_DO_NOT_USE;
    }
  }, {
    key: "renderSuffixIcon",
    value: function renderSuffixIcon(prefixCls) {
      var _this$props = this.props,
          loading = _this$props.loading,
          suffixIcon = _this$props.suffixIcon;

      if (suffixIcon) {
        return /*#__PURE__*/React.isValidElement(suffixIcon) ? /*#__PURE__*/React.cloneElement(suffixIcon, {
          className: classNames(suffixIcon.props.className, "".concat(prefixCls, "-arrow-icon"))
        }) : suffixIcon;
      }

      if (loading) {
        return /*#__PURE__*/React.createElement(Icon, {
          type: "loading"
        });
      }

      return /*#__PURE__*/React.createElement(Icon, {
        type: "down",
        className: "".concat(prefixCls, "-arrow-icon")
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderSelect);
    }
  }]);

  return Select;
}(React.Component);
Select.Option = Option;
Select.OptGroup = OptGroup;
Select.SECRET_COMBOBOX_MODE_DO_NOT_USE = 'SECRET_COMBOBOX_MODE_DO_NOT_USE';
Select.defaultProps = {
  showSearch: false,
  transitionName: 'slide-up',
  choiceTransitionName: 'zoom'
};
Select.propTypes = SelectPropTypes;

export { Option as O, Select as S, OptGroup as a };
