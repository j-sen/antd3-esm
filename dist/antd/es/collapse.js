import { n, c as classNames, P as PropTypes, C as ConfigConsumer } from '../../config-provider.js';
import * as React from 'react';
import React__default, { Component, Children } from 'react';
import { s as shallowEqual, A as Animate, f as cssAnimation, p as polyfill, r as raf } from '../../menu.js';
import { e as reactIsExports } from '../../tree.js';
import { I as Icon } from '../../icon.js';
import 'react-dom';
import '../../input.js';

var css = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-collapse {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  background-color: #fafafa;\n  border: 1px solid #d9d9d9;\n  border-bottom: 0;\n  border-radius: 4px;\n}\n.ant-collapse > .ant-collapse-item {\n  border-bottom: 1px solid #d9d9d9;\n}\n.ant-collapse > .ant-collapse-item:last-child,\n.ant-collapse > .ant-collapse-item:last-child > .ant-collapse-header {\n  border-radius: 0 0 4px 4px;\n}\n.ant-collapse > .ant-collapse-item > .ant-collapse-header {\n  position: relative;\n  padding: 12px 16px;\n  padding-left: 40px;\n  color: rgba(0, 0, 0, 0.85);\n  line-height: 22px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow {\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  position: absolute;\n  top: 50%;\n  left: 16px;\n  display: inline-block;\n  font-size: 12px;\n  transform: translateY(-50%);\n}\n.ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow > * {\n  line-height: 1;\n}\n.ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow svg {\n  display: inline-block;\n}\n.ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow::before {\n  display: none;\n}\n.ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow .ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow-icon {\n  display: block;\n}\n.ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow svg {\n  transition: transform 0.24s;\n}\n.ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-extra {\n  float: right;\n}\n.ant-collapse > .ant-collapse-item > .ant-collapse-header:focus {\n  outline: none;\n}\n.ant-collapse > .ant-collapse-item.ant-collapse-no-arrow > .ant-collapse-header {\n  padding-left: 12px;\n}\n.ant-collapse-icon-position-right > .ant-collapse-item > .ant-collapse-header {\n  padding: 12px 16px;\n  padding-right: 40px;\n}\n.ant-collapse-icon-position-right > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow {\n  right: 16px;\n  left: auto;\n}\n.ant-collapse-anim-active {\n  transition: height 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.ant-collapse-content {\n  overflow: hidden;\n  color: rgba(0, 0, 0, 0.65);\n  background-color: #fff;\n  border-top: 1px solid #d9d9d9;\n}\n.ant-collapse-content > .ant-collapse-content-box {\n  padding: 16px;\n}\n.ant-collapse-content-inactive {\n  display: none;\n}\n.ant-collapse-item:last-child > .ant-collapse-content {\n  border-radius: 0 0 4px 4px;\n}\n.ant-collapse-borderless {\n  background-color: #fafafa;\n  border: 0;\n}\n.ant-collapse-borderless > .ant-collapse-item {\n  border-bottom: 1px solid #d9d9d9;\n}\n.ant-collapse-borderless > .ant-collapse-item:last-child,\n.ant-collapse-borderless > .ant-collapse-item:last-child .ant-collapse-header {\n  border-radius: 0;\n}\n.ant-collapse-borderless > .ant-collapse-item > .ant-collapse-content {\n  background-color: transparent;\n  border-top: 0;\n}\n.ant-collapse-borderless > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box {\n  padding-top: 4px;\n}\n.ant-collapse .ant-collapse-item-disabled > .ant-collapse-header,\n.ant-collapse .ant-collapse-item-disabled > .ant-collapse-header > .arrow {\n  color: rgba(0, 0, 0, 0.25);\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=index.css.map */";
n(css,{"prepend":true});

var _createClass$4 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty$4(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$4(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$4(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PanelContent = function (_Component) {
  _inherits$4(PanelContent, _Component);

  function PanelContent() {
    _classCallCheck$4(this, PanelContent);

    return _possibleConstructorReturn$4(this, (PanelContent.__proto__ || Object.getPrototypeOf(PanelContent)).apply(this, arguments));
  }

  _createClass$4(PanelContent, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.forceRender || !shallowEqual(this.props, nextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      this._isActived = this.props.forceRender || this._isActived || this.props.isActive;
      if (!this._isActived) {
        return null;
      }
      var _props = this.props,
          prefixCls = _props.prefixCls,
          isActive = _props.isActive,
          children = _props.children,
          destroyInactivePanel = _props.destroyInactivePanel,
          forceRender = _props.forceRender,
          role = _props.role;

      var contentCls = classNames((_classnames = {}, _defineProperty$4(_classnames, prefixCls + '-content', true), _defineProperty$4(_classnames, prefixCls + '-content-active', isActive), _defineProperty$4(_classnames, prefixCls + '-content-inactive', !isActive), _classnames));
      var child = !forceRender && !isActive && destroyInactivePanel ? null : React__default.createElement(
        'div',
        { className: prefixCls + '-content-box' },
        children
      );
      return React__default.createElement(
        'div',
        {
          className: contentCls,
          role: role
        },
        child
      );
    }
  }]);

  return PanelContent;
}(Component);

PanelContent.propTypes = {
  prefixCls: PropTypes.string,
  isActive: PropTypes.bool,
  children: PropTypes.any,
  destroyInactivePanel: PropTypes.bool,
  forceRender: PropTypes.bool,
  role: PropTypes.string
};

var _createClass$3 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$3(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CollapsePanel$1 = function (_Component) {
  _inherits$3(CollapsePanel, _Component);

  function CollapsePanel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck$3(this, CollapsePanel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$3(this, (_ref = CollapsePanel.__proto__ || Object.getPrototypeOf(CollapsePanel)).call.apply(_ref, [this].concat(args))), _this), _this.handleItemClick = function () {
      var _this$props = _this.props,
          onItemClick = _this$props.onItemClick,
          panelKey = _this$props.panelKey;


      if (typeof onItemClick === 'function') {
        onItemClick(panelKey);
      }
    }, _this.handleKeyPress = function (e) {
      if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
        _this.handleItemClick();
      }
    }, _temp), _possibleConstructorReturn$3(_this, _ret);
  }

  _createClass$3(CollapsePanel, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !shallowEqual(this.props, nextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames2;

      var _props = this.props,
          className = _props.className,
          id = _props.id,
          style = _props.style,
          prefixCls = _props.prefixCls,
          header = _props.header,
          headerClass = _props.headerClass,
          children = _props.children,
          isActive = _props.isActive,
          showArrow = _props.showArrow,
          destroyInactivePanel = _props.destroyInactivePanel,
          disabled = _props.disabled,
          accordion = _props.accordion,
          forceRender = _props.forceRender,
          expandIcon = _props.expandIcon,
          extra = _props.extra;

      var headerCls = classNames(prefixCls + '-header', _defineProperty$3({}, headerClass, headerClass));
      var itemCls = classNames((_classNames2 = {}, _defineProperty$3(_classNames2, prefixCls + '-item', true), _defineProperty$3(_classNames2, prefixCls + '-item-active', isActive), _defineProperty$3(_classNames2, prefixCls + '-item-disabled', disabled), _classNames2), className);

      var icon = React__default.createElement('i', { className: 'arrow' });
      if (showArrow && typeof expandIcon === 'function') {
        icon = expandIcon(this.props);
      }
      return React__default.createElement(
        'div',
        { className: itemCls, style: style, id: id },
        React__default.createElement(
          'div',
          {
            className: headerCls,
            onClick: this.handleItemClick,
            role: accordion ? 'tab' : 'button',
            tabIndex: disabled ? -1 : 0,
            'aria-expanded': '' + isActive,
            onKeyPress: this.handleKeyPress
          },
          showArrow && icon,
          header,
          extra && React__default.createElement(
            'div',
            { className: prefixCls + '-extra' },
            extra
          )
        ),
        React__default.createElement(
          Animate,
          {
            showProp: 'isActive',
            exclusive: true,
            component: '',
            animation: this.props.openAnimation
          },
          React__default.createElement(
            PanelContent,
            {
              prefixCls: prefixCls,
              isActive: isActive,
              destroyInactivePanel: destroyInactivePanel,
              forceRender: forceRender,
              role: accordion ? 'tabpanel' : null
            },
            children
          )
        )
      );
    }
  }]);

  return CollapsePanel;
}(Component);

CollapsePanel$1.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  id: PropTypes.string,
  children: PropTypes.any,
  openAnimation: PropTypes.object,
  prefixCls: PropTypes.string,
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
  headerClass: PropTypes.string,
  showArrow: PropTypes.bool,
  isActive: PropTypes.bool,
  onItemClick: PropTypes.func,
  style: PropTypes.object,
  destroyInactivePanel: PropTypes.bool,
  disabled: PropTypes.bool,
  accordion: PropTypes.bool,
  forceRender: PropTypes.bool,
  expandIcon: PropTypes.func,
  extra: PropTypes.node,
  panelKey: PropTypes.any
};

CollapsePanel$1.defaultProps = {
  showArrow: true,
  isActive: false,
  destroyInactivePanel: false,
  onItemClick: function onItemClick() {},

  headerClass: '',
  forceRender: false
};

function animate$1(node, show, transitionName, done) {
  var height = void 0;
  return cssAnimation(node, transitionName, {
    start: function start() {
      if (!show) {
        node.style.height = node.offsetHeight + 'px';
      } else {
        height = node.offsetHeight;
        node.style.height = 0;
      }
    },
    active: function active() {
      node.style.height = (show ? height : 0) + 'px';
    },
    end: function end() {
      node.style.height = '';
      done();
    }
  });
}

function animation$1(prefixCls) {
  return {
    enter: function enter(node, done) {
      return animate$1(node, true, prefixCls + '-anim', done);
    },
    leave: function leave(node, done) {
      return animate$1(node, false, prefixCls + '-anim', done);
    }
  };
}

var _createClass$2 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$2(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function toArray(activeKey) {
  var currentActiveKey = activeKey;
  if (!Array.isArray(currentActiveKey)) {
    currentActiveKey = currentActiveKey ? [currentActiveKey] : [];
  }
  return currentActiveKey.map(function (key) {
    return String(key);
  });
}

var Collapse$1 = function (_Component) {
  _inherits$2(Collapse, _Component);

  function Collapse(props) {
    _classCallCheck$2(this, Collapse);

    var _this = _possibleConstructorReturn$2(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call(this, props));

    _initialiseProps.call(_this);

    var activeKey = props.activeKey,
        defaultActiveKey = props.defaultActiveKey;

    var currentActiveKey = defaultActiveKey;
    if ('activeKey' in props) {
      currentActiveKey = activeKey;
    }

    _this.state = {
      openAnimation: props.openAnimation || animation$1(props.prefixCls),
      activeKey: toArray(currentActiveKey)
    };
    return _this;
  }

  _createClass$2(Collapse, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          className = _props.className,
          style = _props.style,
          accordion = _props.accordion;

      var collapseClassName = classNames((_classNames = {}, _defineProperty$2(_classNames, prefixCls, true), _defineProperty$2(_classNames, className, !!className), _classNames));
      return React__default.createElement(
        'div',
        { className: collapseClassName, style: style, role: accordion ? 'tablist' : null },
        this.getItems()
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps) {
      var newState = {};
      if ('activeKey' in nextProps) {
        newState.activeKey = toArray(nextProps.activeKey);
      }
      if ('openAnimation' in nextProps) {
        newState.openAnimation = nextProps.openAnimation;
      }
      return newState.activeKey || newState.openAnimation ? newState : null;
    }
  }]);

  return Collapse;
}(Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onClickItem = function (key) {
    var activeKey = _this2.state.activeKey;
    if (_this2.props.accordion) {
      activeKey = activeKey[0] === key ? [] : [key];
    } else {
      activeKey = [].concat(_toConsumableArray(activeKey));
      var index = activeKey.indexOf(key);
      var isActive = index > -1;
      if (isActive) {
        // remove active state
        activeKey.splice(index, 1);
      } else {
        activeKey.push(key);
      }
    }
    _this2.setActiveKey(activeKey);
  };

  this.getNewChild = function (child, index) {
    if (!child) return null;

    var activeKey = _this2.state.activeKey;
    var _props2 = _this2.props,
        prefixCls = _props2.prefixCls,
        accordion = _props2.accordion,
        destroyInactivePanel = _props2.destroyInactivePanel,
        expandIcon = _props2.expandIcon;
    // If there is no key provide, use the panel order as default key

    var key = child.key || String(index);
    var _child$props = child.props,
        header = _child$props.header,
        headerClass = _child$props.headerClass,
        disabled = _child$props.disabled;

    var isActive = false;
    if (accordion) {
      isActive = activeKey[0] === key;
    } else {
      isActive = activeKey.indexOf(key) > -1;
    }

    var props = {
      key: key,
      panelKey: key,
      header: header,
      headerClass: headerClass,
      isActive: isActive,
      prefixCls: prefixCls,
      destroyInactivePanel: destroyInactivePanel,
      openAnimation: _this2.state.openAnimation,
      accordion: accordion,
      children: child.props.children,
      onItemClick: disabled ? null : _this2.onClickItem,
      expandIcon: expandIcon
    };

    // https://github.com/ant-design/ant-design/issues/20479
    if (typeof child.type === 'string') {
      return child;
    }

    return React__default.cloneElement(child, props);
  };

  this.getItems = function () {
    var children = _this2.props.children;

    var childList = reactIsExports.isFragment(children) ? children.props.children : children;
    var newChildren = Children.map(childList, _this2.getNewChild);

    //  ref: https://github.com/ant-design/ant-design/issues/13884
    if (reactIsExports.isFragment(children)) {
      return React__default.createElement(
        React__default.Fragment,
        null,
        newChildren
      );
    }

    return newChildren;
  };

  this.setActiveKey = function (activeKey) {
    if (!('activeKey' in _this2.props)) {
      _this2.setState({ activeKey: activeKey });
    }
    _this2.props.onChange(_this2.props.accordion ? activeKey[0] : activeKey);
  };
};

Collapse$1.propTypes = {
  children: PropTypes.any,
  prefixCls: PropTypes.string,
  activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))]),
  defaultActiveKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))]),
  openAnimation: PropTypes.object,
  onChange: PropTypes.func,
  accordion: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  destroyInactivePanel: PropTypes.bool,
  expandIcon: PropTypes.func
};

Collapse$1.defaultProps = {
  prefixCls: 'rc-collapse',
  onChange: function onChange() {},

  accordion: false,
  destroyInactivePanel: false
};

Collapse$1.Panel = CollapsePanel$1;

polyfill(Collapse$1);

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

var CollapsePanel = /*#__PURE__*/function (_React$Component) {
  _inherits$1(CollapsePanel, _React$Component);

  var _super = _createSuper$1(CollapsePanel);

  function CollapsePanel() {
    var _this;

    _classCallCheck$1(this, CollapsePanel);

    _this = _super.apply(this, arguments);

    _this.renderCollapsePanel = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;
      var _this$props = _this.props,
          customizePrefixCls = _this$props.prefixCls,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? '' : _this$props$className,
          _this$props$showArrow = _this$props.showArrow,
          showArrow = _this$props$showArrow === void 0 ? true : _this$props$showArrow;
      var prefixCls = getPrefixCls('collapse', customizePrefixCls);
      var collapsePanelClassName = classNames(_defineProperty$1({}, "".concat(prefixCls, "-no-arrow"), !showArrow), className);
      return /*#__PURE__*/React.createElement(Collapse$1.Panel, _extends$1({}, _this.props, {
        prefixCls: prefixCls,
        className: collapsePanelClassName
      }));
    };

    return _this;
  }

  _createClass$1(CollapsePanel, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderCollapsePanel);
    }
  }]);

  return CollapsePanel;
}(React.Component);

/**
 * Deprecated. We should replace the animation with pure react motion instead of modify style directly.
 * If you are creating new component with animation, please use `./motion`.
 */

function animate(node, show, done) {
  var height;
  var requestAnimationFrameId;
  return cssAnimation(node, 'ant-motion-collapse-legacy', {
    start: function start() {
      if (!show) {
        node.style.height = "".concat(node.offsetHeight, "px");
        node.style.opacity = '1';
      } else {
        height = node.offsetHeight;
        node.style.height = '0px';
        node.style.opacity = '0';
      }
    },
    active: function active() {
      if (requestAnimationFrameId) {
        raf.cancel(requestAnimationFrameId);
      }

      requestAnimationFrameId = raf(function () {
        node.style.height = "".concat(show ? height : 0, "px");
        node.style.opacity = show ? '1' : '0';
      });
    },
    end: function end() {
      if (requestAnimationFrameId) {
        raf.cancel(requestAnimationFrameId);
      }

      node.style.height = '';
      node.style.opacity = '';
      done();
    }
  });
}

var animation = {
  enter: function enter(node, done) {
    return animate(node, true, done);
  },
  leave: function leave(node, done) {
    return animate(node, false, done);
  },
  appear: function appear(node, done) {
    return animate(node, true, done);
  }
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

var Collapse = /*#__PURE__*/function (_React$Component) {
  _inherits(Collapse, _React$Component);

  var _super = _createSuper(Collapse);

  function Collapse() {
    var _this;

    _classCallCheck(this, Collapse);

    _this = _super.apply(this, arguments);

    _this.renderExpandIcon = function () {
      var panelProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var prefixCls = arguments.length > 1 ? arguments[1] : undefined;
      var expandIcon = _this.props.expandIcon;
      var icon = expandIcon ? expandIcon(panelProps) : /*#__PURE__*/React.createElement(Icon, {
        type: "right",
        rotate: panelProps.isActive ? 90 : undefined
      });
      return /*#__PURE__*/React.isValidElement(icon) ? /*#__PURE__*/React.cloneElement(icon, {
        className: classNames(icon.props.className, "".concat(prefixCls, "-arrow"))
      }) : icon;
    };

    _this.renderCollapse = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls;
      var _this$props = _this.props,
          customizePrefixCls = _this$props.prefixCls,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? '' : _this$props$className,
          bordered = _this$props.bordered,
          expandIconPosition = _this$props.expandIconPosition;
      var prefixCls = getPrefixCls('collapse', customizePrefixCls);
      var collapseClassName = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-borderless"), !bordered), _defineProperty(_classNames, "".concat(prefixCls, "-icon-position-").concat(expandIconPosition), true), _classNames), className);
      return /*#__PURE__*/React.createElement(Collapse$1, _extends({}, _this.props, {
        expandIcon: function expandIcon(panelProps) {
          return _this.renderExpandIcon(panelProps, prefixCls);
        },
        prefixCls: prefixCls,
        className: collapseClassName
      }));
    };

    return _this;
  }

  _createClass(Collapse, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderCollapse);
    }
  }]);

  return Collapse;
}(React.Component);
Collapse.Panel = CollapsePanel;
Collapse.defaultProps = {
  bordered: true,
  openAnimation: _extends(_extends({}, animation), {
    appear: function appear() {}
  }),
  expandIconPosition: 'left'
};

export { Collapse as default };
