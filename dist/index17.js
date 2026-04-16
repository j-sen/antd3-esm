import * as React from 'react';
import React__default, { cloneElement } from 'react';
import * as ReactDOM from 'react-dom';
import { d as _defineProperty$2, _ as _inherits$2, a as _classCallCheck$2, b as _possibleConstructorReturn$2, c as _createClass$2, f as _objectWithoutProperties, e as _extends$2, I as Icon } from './icon.js';
import { h as createReactContext, P as PropTypes, c as classNames, w as warning$1, C as ConfigConsumer } from './config-provider.js';
import { K as KeyCode$1, r as raf, p as polyfill, k as index } from './menu.js';
import { o as omit } from './input.js';
import { w as warning, d as debounce } from './tree.js';
import { a as isFlexSupported } from './styleChecker.js';

var KeyCode = {
  /**
   * LEFT
   */
  LEFT: 37, // also NUM_WEST
  /**
   * UP
   */
  UP: 38, // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39, // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40 // also NUM_SOUTH
};

function toArray(children) {
  // allow [c,[a,b]]
  var c = [];
  React__default.Children.forEach(children, function (child) {
    if (child) {
      c.push(child);
    }
  });
  return c;
}

function getActiveIndex(children, activeKey) {
  var c = toArray(children);
  for (var i = 0; i < c.length; i++) {
    if (c[i].key === activeKey) {
      return i;
    }
  }
  return -1;
}

function setTransform(style, v) {
  style.transform = v;
  style.webkitTransform = v;
  style.mozTransform = v;
}

function isTransform3dSupported(style) {
  return ('transform' in style || 'webkitTransform' in style || 'MozTransform' in style) && window.atob;
}

function getTransformPropValue(v) {
  return {
    transform: v,
    WebkitTransform: v,
    MozTransform: v
  };
}

function isVertical(tabBarPosition) {
  return tabBarPosition === 'left' || tabBarPosition === 'right';
}

function getTransformByIndex(index, tabBarPosition) {
  var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'ltr';

  var translate = isVertical(tabBarPosition) ? 'translateY' : 'translateX';

  if (!isVertical(tabBarPosition) && direction === 'rtl') {
    return translate + '(' + index * 100 + '%) translateZ(0)';
  }
  return translate + '(' + -index * 100 + '%) translateZ(0)';
}

function getMarginStyle(index, tabBarPosition) {
  var marginDirection = isVertical(tabBarPosition) ? 'marginTop' : 'marginLeft';
  return _defineProperty$2({}, marginDirection, -index * 100 + '%');
}

function getStyle(el, property) {
  return +window.getComputedStyle(el).getPropertyValue(property).replace('px', '');
}

function getDataAttr(props) {
  return Object.keys(props).reduce(function (prev, key) {
    if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
      prev[key] = props[key];
    }
    return prev;
  }, {});
}

function toNum(style, property) {
  return +style.getPropertyValue(property).replace('px', '');
}

function getTypeValue(start, current, end, tabNode, wrapperNode) {
  var total = getStyle(wrapperNode, 'padding-' + start);
  if (!tabNode || !tabNode.parentNode) {
    return total;
  }

  var childNodes = tabNode.parentNode.childNodes;

  Array.prototype.some.call(childNodes, function (node) {
    var style = window.getComputedStyle(node);

    if (node !== tabNode) {
      total += toNum(style, 'margin-' + start);
      total += node[current];
      total += toNum(style, 'margin-' + end);

      if (style.boxSizing === 'content-box') {
        total += toNum(style, 'border-' + start + '-width') + toNum(style, 'border-' + end + '-width');
      }
      return false;
    }

    // We need count current node margin
    // ref: https://github.com/react-component/tabs/pull/139#issuecomment-431005262
    total += toNum(style, 'margin-' + start);

    return true;
  });

  return total;
}

function getLeft(tabNode, wrapperNode) {
  return getTypeValue('left', 'offsetWidth', 'right', tabNode, wrapperNode);
}

function getTop(tabNode, wrapperNode) {
  return getTypeValue('top', 'offsetHeight', 'bottom', tabNode, wrapperNode);
}

var SentinelContext = createReactContext({});
var SentinelProvider = SentinelContext.Provider;
var SentinelConsumer = SentinelContext.Consumer;

var sentinelStyle = { width: 0, height: 0, overflow: 'hidden', position: 'absolute' };

var Sentinel = function (_React$Component) {
  _inherits$2(Sentinel, _React$Component);

  function Sentinel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck$2(this, Sentinel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$2(this, (_ref = Sentinel.__proto__ || Object.getPrototypeOf(Sentinel)).call.apply(_ref, [this].concat(args))), _this), _this.onKeyDown = function (_ref2) {
      var target = _ref2.target,
          which = _ref2.which,
          shiftKey = _ref2.shiftKey;
      var _this$props = _this.props,
          nextElement = _this$props.nextElement,
          prevElement = _this$props.prevElement;

      if (which !== KeyCode$1.TAB || document.activeElement !== target) return;

      // Tab next
      if (!shiftKey && nextElement) {
        nextElement.focus();
      }

      // Tab prev
      if (shiftKey && prevElement) {
        prevElement.focus();
      }
    }, _temp), _possibleConstructorReturn$2(_this, _ret);
  }

  _createClass$2(Sentinel, [{
    key: 'render',
    value: function render() {
      var setRef = this.props.setRef;


      return React__default.createElement('div', {
        tabIndex: 0,
        ref: setRef,
        style: sentinelStyle,
        onKeyDown: this.onKeyDown,
        role: 'presentation'
      });
    }
  }]);

  return Sentinel;
}(React__default.Component);

Sentinel.propTypes = {
  setRef: PropTypes.func,
  prevElement: PropTypes.object,
  nextElement: PropTypes.object
};

var TabPane = function (_React$Component) {
  _inherits$2(TabPane, _React$Component);

  function TabPane() {
    _classCallCheck$2(this, TabPane);

    return _possibleConstructorReturn$2(this, (TabPane.__proto__ || Object.getPrototypeOf(TabPane)).apply(this, arguments));
  }

  _createClass$2(TabPane, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          id = _props.id,
          className = _props.className,
          destroyInactiveTabPane = _props.destroyInactiveTabPane,
          active = _props.active,
          forceRender = _props.forceRender,
          rootPrefixCls = _props.rootPrefixCls,
          style = _props.style,
          children = _props.children,
          placeholder = _props.placeholder,
          restProps = _objectWithoutProperties(_props, ['id', 'className', 'destroyInactiveTabPane', 'active', 'forceRender', 'rootPrefixCls', 'style', 'children', 'placeholder']);

      this._isActived = this._isActived || active;
      var prefixCls = rootPrefixCls + '-tabpane';
      var cls = classNames((_classnames = {}, _defineProperty$2(_classnames, prefixCls, 1), _defineProperty$2(_classnames, prefixCls + '-inactive', !active), _defineProperty$2(_classnames, prefixCls + '-active', active), _defineProperty$2(_classnames, className, className), _classnames));
      var isRender = destroyInactiveTabPane ? active : this._isActived;
      var shouldRender = isRender || forceRender;

      return React__default.createElement(
        SentinelConsumer,
        null,
        function (_ref) {
          var sentinelStart = _ref.sentinelStart,
              sentinelEnd = _ref.sentinelEnd,
              setPanelSentinelStart = _ref.setPanelSentinelStart,
              setPanelSentinelEnd = _ref.setPanelSentinelEnd;

          // Create sentinel
          var panelSentinelStart = void 0;
          var panelSentinelEnd = void 0;
          if (active && shouldRender) {
            panelSentinelStart = React__default.createElement(Sentinel, {
              setRef: setPanelSentinelStart,
              prevElement: sentinelStart
            });
            panelSentinelEnd = React__default.createElement(Sentinel, {
              setRef: setPanelSentinelEnd,
              nextElement: sentinelEnd
            });
          }

          return React__default.createElement(
            'div',
            _extends$2({
              style: style,
              role: 'tabpanel',
              'aria-hidden': active ? 'false' : 'true',
              className: cls,
              id: id
            }, getDataAttr(restProps)),
            panelSentinelStart,
            shouldRender ? children : placeholder,
            panelSentinelEnd
          );
        }
      );
    }
  }]);

  return TabPane;
}(React__default.Component);


TabPane.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  style: PropTypes.any,
  destroyInactiveTabPane: PropTypes.bool,
  forceRender: PropTypes.bool,
  placeholder: PropTypes.node,
  rootPrefixCls: PropTypes.string,
  children: PropTypes.node,
  id: PropTypes.string
};

TabPane.defaultProps = {
  placeholder: null
};

function noop() {}

function getDefaultActiveKey(props) {
  var activeKey = void 0;
  React__default.Children.forEach(props.children, function (child) {
    if (child && !activeKey && !child.props.disabled) {
      activeKey = child.key;
    }
  });
  return activeKey;
}

function activeKeyIsValid(props, key) {
  var keys = React__default.Children.map(props.children, function (child) {
    return child && child.key;
  });
  return keys.indexOf(key) >= 0;
}

var Tabs$1 = function (_React$Component) {
  _inherits$2(Tabs, _React$Component);

  function Tabs(props) {
    _classCallCheck$2(this, Tabs);

    var _this = _possibleConstructorReturn$2(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    _initialiseProps.call(_this);

    var activeKey = void 0;
    if ('activeKey' in props) {
      activeKey = props.activeKey;
    } else if ('defaultActiveKey' in props) {
      activeKey = props.defaultActiveKey;
    } else {
      activeKey = getDefaultActiveKey(props);
    }

    _this.state = {
      activeKey: activeKey
    };
    return _this;
  }

  _createClass$2(Tabs, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.destroy = true;
      raf.cancel(this.sentinelId);
    }

    // Sentinel for tab index

  }, {
    key: 'updateSentinelContext',
    value: function updateSentinelContext() {
      var _this2 = this;

      if (this.destroy) return;

      raf.cancel(this.sentinelId);
      this.sentinelId = raf(function () {
        if (_this2.destroy) return;
        _this2.forceUpdate();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var props = this.props;

      var prefixCls = props.prefixCls,
          navWrapper = props.navWrapper,
          tabBarPosition = props.tabBarPosition,
          className = props.className,
          renderTabContent = props.renderTabContent,
          renderTabBar = props.renderTabBar,
          destroyInactiveTabPane = props.destroyInactiveTabPane,
          direction = props.direction,
          restProps = _objectWithoutProperties(props, ['prefixCls', 'navWrapper', 'tabBarPosition', 'className', 'renderTabContent', 'renderTabBar', 'destroyInactiveTabPane', 'direction']);

      var cls = classNames((_classnames = {}, _defineProperty$2(_classnames, prefixCls, 1), _defineProperty$2(_classnames, prefixCls + '-' + tabBarPosition, 1), _defineProperty$2(_classnames, className, !!className), _defineProperty$2(_classnames, prefixCls + '-rtl', direction === 'rtl'), _classnames));

      this.tabBar = renderTabBar();

      var tabBar = React__default.cloneElement(this.tabBar, {
        prefixCls: prefixCls,
        navWrapper: navWrapper,
        key: 'tabBar',
        onKeyDown: this.onNavKeyDown,
        tabBarPosition: tabBarPosition,
        onTabClick: this.onTabClick,
        panels: props.children,
        activeKey: this.state.activeKey,
        direction: this.props.direction
      });

      var tabContent = React__default.cloneElement(renderTabContent(), {
        prefixCls: prefixCls,
        tabBarPosition: tabBarPosition,
        activeKey: this.state.activeKey,
        destroyInactiveTabPane: destroyInactiveTabPane,
        children: props.children,
        onChange: this.setActiveKey,
        key: 'tabContent',
        direction: this.props.direction
      });

      var sentinelStart = React__default.createElement(Sentinel, {
        key: 'sentinelStart',
        setRef: this.setSentinelStart,
        nextElement: this.panelSentinelStart
      });
      var sentinelEnd = React__default.createElement(Sentinel, {
        key: 'sentinelEnd',
        setRef: this.setSentinelEnd,
        prevElement: this.panelSentinelEnd
      });

      var contents = [];
      if (tabBarPosition === 'bottom') {
        contents.push(sentinelStart, tabContent, sentinelEnd, tabBar);
      } else {
        contents.push(tabBar, sentinelStart, tabContent, sentinelEnd);
      }

      return React__default.createElement(
        SentinelProvider,
        {
          value: {
            sentinelStart: this.sentinelStart,
            sentinelEnd: this.sentinelEnd,
            setPanelSentinelStart: this.setPanelSentinelStart,
            setPanelSentinelEnd: this.setPanelSentinelEnd
          }
        },
        React__default.createElement(
          'div',
          _extends$2({
            className: cls,
            style: props.style
          }, getDataAttr(restProps), {
            onScroll: this.onScroll
          }),
          contents
        )
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, state) {
      var newState = {};
      if ('activeKey' in props) {
        newState.activeKey = props.activeKey;
      } else if (!activeKeyIsValid(props, state.activeKey)) {
        newState.activeKey = getDefaultActiveKey(props);
      }
      if (Object.keys(newState).length > 0) {
        return newState;
      }
      return null;
    }
  }]);

  return Tabs;
}(React__default.Component);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onTabClick = function (activeKey, e) {
    if (_this3.tabBar.props.onTabClick) {
      _this3.tabBar.props.onTabClick(activeKey, e);
    }
    _this3.setActiveKey(activeKey);
  };

  this.onNavKeyDown = function (e) {
    var eventKeyCode = e.keyCode;
    if (eventKeyCode === KeyCode.RIGHT || eventKeyCode === KeyCode.DOWN) {
      e.preventDefault();
      var nextKey = _this3.getNextActiveKey(true);
      _this3.onTabClick(nextKey);
    } else if (eventKeyCode === KeyCode.LEFT || eventKeyCode === KeyCode.UP) {
      e.preventDefault();
      var previousKey = _this3.getNextActiveKey(false);
      _this3.onTabClick(previousKey);
    }
  };

  this.onScroll = function (_ref) {
    var target = _ref.target,
        currentTarget = _ref.currentTarget;

    if (target === currentTarget && target.scrollLeft > 0) {
      target.scrollLeft = 0;
    }
  };

  this.setSentinelStart = function (node) {
    _this3.sentinelStart = node;
  };

  this.setSentinelEnd = function (node) {
    _this3.sentinelEnd = node;
  };

  this.setPanelSentinelStart = function (node) {
    if (node !== _this3.panelSentinelStart) {
      _this3.updateSentinelContext();
    }
    _this3.panelSentinelStart = node;
  };

  this.setPanelSentinelEnd = function (node) {
    if (node !== _this3.panelSentinelEnd) {
      _this3.updateSentinelContext();
    }
    _this3.panelSentinelEnd = node;
  };

  this.setActiveKey = function (activeKey) {
    if (_this3.state.activeKey !== activeKey) {
      if (!('activeKey' in _this3.props)) {
        _this3.setState({
          activeKey: activeKey
        });
      }
      _this3.props.onChange(activeKey);
    }
  };

  this.getNextActiveKey = function (next) {
    var activeKey = _this3.state.activeKey;
    var children = [];
    React__default.Children.forEach(_this3.props.children, function (c) {
      if (c && !c.props.disabled) {
        if (next) {
          children.push(c);
        } else {
          children.unshift(c);
        }
      }
    });
    var length = children.length;
    var ret = length && children[0].key;
    children.forEach(function (child, i) {
      if (child.key === activeKey) {
        if (i === length - 1) {
          ret = children[0].key;
        } else {
          ret = children[i + 1].key;
        }
      }
    });
    return ret;
  };
};

Tabs$1.propTypes = {
  destroyInactiveTabPane: PropTypes.bool,
  renderTabBar: PropTypes.func.isRequired,
  renderTabContent: PropTypes.func.isRequired,
  navWrapper: PropTypes.func,
  onChange: PropTypes.func,
  children: PropTypes.node,
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  tabBarPosition: PropTypes.string,
  style: PropTypes.object,
  activeKey: PropTypes.string,
  defaultActiveKey: PropTypes.string,
  direction: PropTypes.string
};

Tabs$1.defaultProps = {
  prefixCls: 'rc-tabs',
  destroyInactiveTabPane: false,
  onChange: noop,
  navWrapper: function navWrapper(arg) {
    return arg;
  },
  tabBarPosition: 'top',
  children: null,
  style: {},
  direction: 'ltr'
};

Tabs$1.TabPane = TabPane;

polyfill(Tabs$1);

var TabContent = function (_React$Component) {
  _inherits$2(TabContent, _React$Component);

  function TabContent() {
    _classCallCheck$2(this, TabContent);

    return _possibleConstructorReturn$2(this, (TabContent.__proto__ || Object.getPrototypeOf(TabContent)).apply(this, arguments));
  }

  _createClass$2(TabContent, [{
    key: 'getTabPanes',
    value: function getTabPanes() {
      var props = this.props;
      var activeKey = props.activeKey;
      var children = props.children;
      var newChildren = [];

      React__default.Children.forEach(children, function (child) {
        if (!child) {
          return;
        }
        var key = child.key;
        var active = activeKey === key;
        newChildren.push(React__default.cloneElement(child, {
          active: active,
          destroyInactiveTabPane: props.destroyInactiveTabPane,
          rootPrefixCls: props.prefixCls
        }));
      });

      return newChildren;
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var props = this.props;
      var prefixCls = props.prefixCls,
          children = props.children,
          activeKey = props.activeKey,
          className = props.className,
          tabBarPosition = props.tabBarPosition,
          animated = props.animated,
          animatedWithMargin = props.animatedWithMargin,
          direction = props.direction;
      var style = props.style;

      var classes = classNames((_classnames = {}, _defineProperty$2(_classnames, prefixCls + '-content', true), _defineProperty$2(_classnames, animated ? prefixCls + '-content-animated' : prefixCls + '-content-no-animated', true), _classnames), className);
      if (animated) {
        var activeIndex = getActiveIndex(children, activeKey);
        if (activeIndex !== -1) {
          var animatedStyle = animatedWithMargin ? getMarginStyle(activeIndex, tabBarPosition) : getTransformPropValue(getTransformByIndex(activeIndex, tabBarPosition, direction));
          style = _extends$2({}, style, animatedStyle);
        } else {
          style = _extends$2({}, style, {
            display: 'none'
          });
        }
      }
      return React__default.createElement(
        'div',
        {
          className: classes,
          style: style
        },
        this.getTabPanes()
      );
    }
  }]);

  return TabContent;
}(React__default.Component);


TabContent.propTypes = {
  animated: PropTypes.bool,
  animatedWithMargin: PropTypes.bool,
  prefixCls: PropTypes.string,
  children: PropTypes.node,
  activeKey: PropTypes.string,
  style: PropTypes.any,
  tabBarPosition: PropTypes.string,
  className: PropTypes.string,
  destroyInactiveTabPane: PropTypes.bool,
  direction: PropTypes.string
};

TabContent.defaultProps = {
  animated: true
};

function _componentDidUpdate(component, init) {
  var _component$props = component.props,
      styles = _component$props.styles,
      panels = _component$props.panels,
      activeKey = _component$props.activeKey,
      direction = _component$props.direction;

  var rootNode = component.props.getRef('root');
  var wrapNode = component.props.getRef('nav') || rootNode;
  var inkBarNode = component.props.getRef('inkBar');
  var activeTab = component.props.getRef('activeTab');
  var inkBarNodeStyle = inkBarNode.style;
  var tabBarPosition = component.props.tabBarPosition;
  var activeIndex = getActiveIndex(panels, activeKey);
  if (init) {
    // prevent mount animation
    inkBarNodeStyle.display = 'none';
  }
  if (activeTab) {
    var tabNode = activeTab;
    var transformSupported = isTransform3dSupported(inkBarNodeStyle);

    // Reset current style
    setTransform(inkBarNodeStyle, '');
    inkBarNodeStyle.width = '';
    inkBarNodeStyle.height = '';
    inkBarNodeStyle.left = '';
    inkBarNodeStyle.top = '';
    inkBarNodeStyle.bottom = '';
    inkBarNodeStyle.right = '';

    if (tabBarPosition === 'top' || tabBarPosition === 'bottom') {
      var left = getLeft(tabNode, wrapNode);
      var width = tabNode.offsetWidth;

      // If tabNode'width width equal to wrapNode'width when tabBarPosition is top or bottom
      // It means no css working, then ink bar should not have width until css is loaded
      // Fix https://github.com/ant-design/ant-design/issues/7564
      if (width === rootNode.offsetWidth) {
        width = 0;
      } else if (styles.inkBar && styles.inkBar.width !== undefined) {
        width = parseFloat(styles.inkBar.width, 10);
        if (width) {
          left += (tabNode.offsetWidth - width) / 2;
        }
      }
      if (direction === 'rtl') {
        left = getStyle(tabNode, 'margin-left') - left;
      }
      // use 3d gpu to optimize render
      if (transformSupported) {
        setTransform(inkBarNodeStyle, 'translate3d(' + left + 'px,0,0)');
      } else {
        inkBarNodeStyle.left = left + 'px';
      }
      inkBarNodeStyle.width = width + 'px';
    } else {
      var top = getTop(tabNode, wrapNode);
      var height = tabNode.offsetHeight;
      if (styles.inkBar && styles.inkBar.height !== undefined) {
        height = parseFloat(styles.inkBar.height, 10);
        if (height) {
          top += (tabNode.offsetHeight - height) / 2;
        }
      }
      if (transformSupported) {
        setTransform(inkBarNodeStyle, 'translate3d(0,' + top + 'px,0)');
        inkBarNodeStyle.top = '0';
      } else {
        inkBarNodeStyle.top = top + 'px';
      }
      inkBarNodeStyle.height = height + 'px';
    }
  }
  inkBarNodeStyle.display = activeIndex !== -1 ? 'block' : 'none';
}

var InkTabBarNode = function (_React$Component) {
  _inherits$2(InkTabBarNode, _React$Component);

  function InkTabBarNode() {
    _classCallCheck$2(this, InkTabBarNode);

    return _possibleConstructorReturn$2(this, (InkTabBarNode.__proto__ || Object.getPrototypeOf(InkTabBarNode)).apply(this, arguments));
  }

  _createClass$2(InkTabBarNode, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // ref https://github.com/ant-design/ant-design/issues/8678
      // ref https://github.com/react-component/tabs/issues/135
      // InkTabBarNode need parent/root ref for calculating position
      // since parent componentDidMount triggered after child componentDidMount
      // we're doing a quick fix here to use setTimeout to calculate position
      // after parent/root component mounted
      this.timeout = setTimeout(function () {
        _componentDidUpdate(_this2, true);
      }, 0);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      _componentDidUpdate(this);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          styles = _props.styles,
          inkBarAnimated = _props.inkBarAnimated;

      var className = prefixCls + '-ink-bar';
      var classes = classNames((_classnames = {}, _defineProperty$2(_classnames, className, true), _defineProperty$2(_classnames, inkBarAnimated ? className + '-animated' : className + '-no-animated', true), _classnames));
      return React__default.createElement('div', {
        style: styles.inkBar,
        className: classes,
        key: 'inkBar',
        ref: this.props.saveRef('inkBar')
      });
    }
  }]);

  return InkTabBarNode;
}(React__default.Component);


InkTabBarNode.propTypes = {
  prefixCls: PropTypes.string,
  styles: PropTypes.object,
  inkBarAnimated: PropTypes.bool,
  saveRef: PropTypes.func,
  direction: PropTypes.string
};

InkTabBarNode.defaultProps = {
  prefixCls: '',
  inkBarAnimated: true,
  styles: {},
  saveRef: function saveRef() {}
};

var TabBarTabsNode = function (_React$Component) {
  _inherits$2(TabBarTabsNode, _React$Component);

  function TabBarTabsNode() {
    _classCallCheck$2(this, TabBarTabsNode);

    return _possibleConstructorReturn$2(this, (TabBarTabsNode.__proto__ || Object.getPrototypeOf(TabBarTabsNode)).apply(this, arguments));
  }

  _createClass$2(TabBarTabsNode, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.panels,
          activeKey = _props.activeKey,
          prefixCls = _props.prefixCls,
          tabBarGutter = _props.tabBarGutter,
          saveRef = _props.saveRef,
          tabBarPosition = _props.tabBarPosition,
          renderTabBarNode = _props.renderTabBarNode,
          direction = _props.direction;

      var rst = [];

      React__default.Children.forEach(children, function (child, index) {
        if (!child) {
          return;
        }
        var key = child.key;
        var cls = activeKey === key ? prefixCls + '-tab-active' : '';
        cls += ' ' + prefixCls + '-tab';
        var events = {};
        if (child.props.disabled) {
          cls += ' ' + prefixCls + '-tab-disabled';
        } else {
          events = {
            onClick: _this2.props.onTabClick.bind(_this2, key)
          };
        }
        var ref = {};
        if (activeKey === key) {
          ref.ref = saveRef('activeTab');
        }

        var gutter = tabBarGutter && index === children.length - 1 ? 0 : tabBarGutter;

        var marginProperty = direction === 'rtl' ? 'marginLeft' : 'marginRight';
        var style = _defineProperty$2({}, isVertical(tabBarPosition) ? 'marginBottom' : marginProperty, gutter);
        warning('tab' in child.props, 'There must be `tab` property on children of Tabs.');

        var node = React__default.createElement(
          'div',
          _extends$2({
            role: 'tab',
            'aria-disabled': child.props.disabled ? 'true' : 'false',
            'aria-selected': activeKey === key ? 'true' : 'false'
          }, events, {
            className: cls,
            key: key,
            style: style
          }, ref),
          child.props.tab
        );

        if (renderTabBarNode) {
          node = renderTabBarNode(node);
        }

        rst.push(node);
      });

      return React__default.createElement(
        'div',
        { ref: saveRef('navTabsContainer') },
        rst
      );
    }
  }]);

  return TabBarTabsNode;
}(React__default.Component);


TabBarTabsNode.propTypes = {
  activeKey: PropTypes.string,
  panels: PropTypes.node,
  prefixCls: PropTypes.string,
  tabBarGutter: PropTypes.number,
  onTabClick: PropTypes.func,
  saveRef: PropTypes.func,
  renderTabBarNode: PropTypes.func,
  tabBarPosition: PropTypes.string,
  direction: PropTypes.string
};

TabBarTabsNode.defaultProps = {
  panels: [],
  prefixCls: [],
  tabBarGutter: null,
  onTabClick: function onTabClick() {},
  saveRef: function saveRef() {}
};

var TabBarRootNode = function (_React$Component) {
  _inherits$2(TabBarRootNode, _React$Component);

  function TabBarRootNode() {
    _classCallCheck$2(this, TabBarRootNode);

    return _possibleConstructorReturn$2(this, (TabBarRootNode.__proto__ || Object.getPrototypeOf(TabBarRootNode)).apply(this, arguments));
  }

  _createClass$2(TabBarRootNode, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          prefixCls = _props.prefixCls,
          onKeyDown = _props.onKeyDown,
          className = _props.className,
          extraContent = _props.extraContent,
          style = _props.style,
          tabBarPosition = _props.tabBarPosition,
          children = _props.children,
          restProps = _objectWithoutProperties(_props, ['prefixCls', 'onKeyDown', 'className', 'extraContent', 'style', 'tabBarPosition', 'children']);

      var cls = classNames(prefixCls + '-bar', _defineProperty$2({}, className, !!className));
      var topOrBottom = tabBarPosition === 'top' || tabBarPosition === 'bottom';
      var tabBarExtraContentStyle = topOrBottom ? { float: 'right' } : {};
      var extraContentStyle = extraContent && extraContent.props ? extraContent.props.style : {};
      var newChildren = children;
      if (extraContent) {
        newChildren = [cloneElement(extraContent, {
          key: 'extra',
          style: _extends$2({}, tabBarExtraContentStyle, extraContentStyle)
        }), cloneElement(children, { key: 'content' })];
        newChildren = topOrBottom ? newChildren : newChildren.reverse();
      }
      return React__default.createElement(
        'div',
        _extends$2({
          role: 'tablist',
          className: cls,
          tabIndex: '0',
          ref: this.props.saveRef('root'),
          onKeyDown: onKeyDown,
          style: style
        }, getDataAttr(restProps)),
        newChildren
      );
    }
  }]);

  return TabBarRootNode;
}(React__default.Component);


TabBarRootNode.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  tabBarPosition: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  children: PropTypes.node,
  extraContent: PropTypes.node,
  onKeyDown: PropTypes.func,
  saveRef: PropTypes.func
};

TabBarRootNode.defaultProps = {
  prefixCls: '',
  className: '',
  style: {},
  tabBarPosition: 'top',
  extraContent: null,
  children: null,
  onKeyDown: function onKeyDown() {},
  saveRef: function saveRef() {}
};

var ScrollableTabBarNode = function (_React$Component) {
  _inherits$2(ScrollableTabBarNode, _React$Component);

  function ScrollableTabBarNode(props) {
    _classCallCheck$2(this, ScrollableTabBarNode);

    var _this = _possibleConstructorReturn$2(this, (ScrollableTabBarNode.__proto__ || Object.getPrototypeOf(ScrollableTabBarNode)).call(this, props));

    _this.prevTransitionEnd = function (e) {
      if (e.propertyName !== 'opacity') {
        return;
      }
      var container = _this.props.getRef('container');
      _this.scrollToActiveTab({
        target: container,
        currentTarget: container
      });
    };

    _this.scrollToActiveTab = function (e) {
      var activeTab = _this.props.getRef('activeTab');
      var navWrap = _this.props.getRef('navWrap');
      if (e && e.target !== e.currentTarget || !activeTab) {
        return;
      }

      // when not scrollable or enter scrollable first time, don't emit scrolling
      var needToSroll = _this.isNextPrevShown() && _this.lastNextPrevShown;
      _this.lastNextPrevShown = _this.isNextPrevShown();
      if (!needToSroll) {
        return;
      }

      var activeTabWH = _this.getScrollWH(activeTab);
      var navWrapNodeWH = _this.getOffsetWH(navWrap);
      var offset = _this.offset;

      var wrapOffset = _this.getOffsetLT(navWrap);
      var activeTabOffset = _this.getOffsetLT(activeTab);
      if (wrapOffset > activeTabOffset) {
        offset += wrapOffset - activeTabOffset;
        _this.setOffset(offset);
      } else if (wrapOffset + navWrapNodeWH < activeTabOffset + activeTabWH) {
        offset -= activeTabOffset + activeTabWH - (wrapOffset + navWrapNodeWH);
        _this.setOffset(offset);
      }
    };

    _this.prev = function (e) {
      _this.props.onPrevClick(e);
      var navWrapNode = _this.props.getRef('navWrap');
      var navWrapNodeWH = _this.getOffsetWH(navWrapNode);
      var offset = _this.offset;

      _this.setOffset(offset + navWrapNodeWH);
    };

    _this.next = function (e) {
      _this.props.onNextClick(e);
      var navWrapNode = _this.props.getRef('navWrap');
      var navWrapNodeWH = _this.getOffsetWH(navWrapNode);
      var offset = _this.offset;

      _this.setOffset(offset - navWrapNodeWH);
    };

    _this.offset = 0;

    _this.state = {
      next: false,
      prev: false
    };
    return _this;
  }

  _createClass$2(ScrollableTabBarNode, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.componentDidUpdate();
      this.debouncedResize = debounce(function () {
        _this2.setNextPrev();
        _this2.scrollToActiveTab();
      }, 200);
      this.resizeObserver = new index(this.debouncedResize);
      this.resizeObserver.observe(this.props.getRef('container'));
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var props = this.props;
      if (prevProps && prevProps.tabBarPosition !== props.tabBarPosition) {
        this.setOffset(0);
        return;
      }
      var nextPrev = this.setNextPrev();
      // wait next, prev show hide
      /* eslint react/no-did-update-set-state:0 */
      if (this.isNextPrevShown(this.state) !== this.isNextPrevShown(nextPrev)) {
        this.setState({}, this.scrollToActiveTab);
      } else if (!prevProps || props.activeKey !== prevProps.activeKey) {
        // can not use props.activeKey
        this.scrollToActiveTab();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
      }
      if (this.debouncedResize && this.debouncedResize.cancel) {
        this.debouncedResize.cancel();
      }
    }
  }, {
    key: 'setNextPrev',
    value: function setNextPrev() {
      var navNode = this.props.getRef('nav');
      var navTabsContainer = this.props.getRef('navTabsContainer');
      var navNodeWH = this.getScrollWH(navTabsContainer || navNode);
      // Add 1px to fix `offsetWidth` with decimal in Chrome not correct handle
      // https://github.com/ant-design/ant-design/issues/13423
      var containerWH = this.getOffsetWH(this.props.getRef('container')) + 1;
      var navWrapNodeWH = this.getOffsetWH(this.props.getRef('navWrap'));
      var offset = this.offset;

      var minOffset = containerWH - navNodeWH;
      var _state = this.state,
          next = _state.next,
          prev = _state.prev;

      if (minOffset >= 0) {
        next = false;
        this.setOffset(0, false);
        offset = 0;
      } else if (minOffset < offset) {
        next = true;
      } else {
        next = false;
        // Fix https://github.com/ant-design/ant-design/issues/8861
        // Test with container offset which is stable
        // and set the offset of the nav wrap node
        var realOffset = navWrapNodeWH - navNodeWH;
        this.setOffset(realOffset, false);
        offset = realOffset;
      }

      if (offset < 0) {
        prev = true;
      } else {
        prev = false;
      }

      this.setNext(next);
      this.setPrev(prev);
      return {
        next: next,
        prev: prev
      };
    }
  }, {
    key: 'getOffsetWH',
    value: function getOffsetWH(node) {
      var tabBarPosition = this.props.tabBarPosition;
      var prop = 'offsetWidth';
      if (tabBarPosition === 'left' || tabBarPosition === 'right') {
        prop = 'offsetHeight';
      }
      return node[prop];
    }
  }, {
    key: 'getScrollWH',
    value: function getScrollWH(node) {
      var tabBarPosition = this.props.tabBarPosition;
      var prop = 'scrollWidth';
      if (tabBarPosition === 'left' || tabBarPosition === 'right') {
        prop = 'scrollHeight';
      }
      return node[prop];
    }
  }, {
    key: 'getOffsetLT',
    value: function getOffsetLT(node) {
      var tabBarPosition = this.props.tabBarPosition;
      var prop = 'left';
      if (tabBarPosition === 'left' || tabBarPosition === 'right') {
        prop = 'top';
      }
      return node.getBoundingClientRect()[prop];
    }
  }, {
    key: 'setOffset',
    value: function setOffset(offset) {
      var checkNextPrev = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var target = Math.min(0, offset);
      if (this.offset !== target) {
        this.offset = target;
        var navOffset = {};
        var tabBarPosition = this.props.tabBarPosition;
        var navStyle = this.props.getRef('nav').style;
        var transformSupported = isTransform3dSupported(navStyle);
        if (tabBarPosition === 'left' || tabBarPosition === 'right') {
          if (transformSupported) {
            navOffset = {
              value: 'translate3d(0,' + target + 'px,0)'
            };
          } else {
            navOffset = {
              name: 'top',
              value: target + 'px'
            };
          }
        } else if (transformSupported) {
          if (this.props.direction === 'rtl') {
            target = -target;
          }
          navOffset = {
            value: 'translate3d(' + target + 'px,0,0)'
          };
        } else {
          navOffset = {
            name: 'left',
            value: target + 'px'
          };
        }
        if (transformSupported) {
          setTransform(navStyle, navOffset.value);
        } else {
          navStyle[navOffset.name] = navOffset.value;
        }
        if (checkNextPrev) {
          this.setNextPrev();
        }
      }
    }
  }, {
    key: 'setPrev',
    value: function setPrev(v) {
      if (this.state.prev !== v) {
        this.setState({
          prev: v
        });
      }
    }
  }, {
    key: 'setNext',
    value: function setNext(v) {
      if (this.state.next !== v) {
        this.setState({
          next: v
        });
      }
    }
  }, {
    key: 'isNextPrevShown',
    value: function isNextPrevShown(state) {
      if (state) {
        return state.next || state.prev;
      }
      return this.state.next || this.state.prev;
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames, _classnames2, _classnames3, _classnames4;

      var _state2 = this.state,
          next = _state2.next,
          prev = _state2.prev;
      var _props = this.props,
          prefixCls = _props.prefixCls,
          scrollAnimated = _props.scrollAnimated,
          navWrapper = _props.navWrapper,
          prevIcon = _props.prevIcon,
          nextIcon = _props.nextIcon;

      var showNextPrev = prev || next;

      var prevButton = React__default.createElement(
        'span',
        {
          onClick: prev ? this.prev : null,
          unselectable: 'unselectable',
          className: classNames((_classnames = {}, _defineProperty$2(_classnames, prefixCls + '-tab-prev', 1), _defineProperty$2(_classnames, prefixCls + '-tab-btn-disabled', !prev), _defineProperty$2(_classnames, prefixCls + '-tab-arrow-show', showNextPrev), _classnames)),
          onTransitionEnd: this.prevTransitionEnd
        },
        prevIcon || React__default.createElement('span', { className: prefixCls + '-tab-prev-icon' })
      );

      var nextButton = React__default.createElement(
        'span',
        {
          onClick: next ? this.next : null,
          unselectable: 'unselectable',
          className: classNames((_classnames2 = {}, _defineProperty$2(_classnames2, prefixCls + '-tab-next', 1), _defineProperty$2(_classnames2, prefixCls + '-tab-btn-disabled', !next), _defineProperty$2(_classnames2, prefixCls + '-tab-arrow-show', showNextPrev), _classnames2))
        },
        nextIcon || React__default.createElement('span', { className: prefixCls + '-tab-next-icon' })
      );

      var navClassName = prefixCls + '-nav';
      var navClasses = classNames((_classnames3 = {}, _defineProperty$2(_classnames3, navClassName, true), _defineProperty$2(_classnames3, scrollAnimated ? navClassName + '-animated' : navClassName + '-no-animated', true), _classnames3));

      return React__default.createElement(
        'div',
        {
          className: classNames((_classnames4 = {}, _defineProperty$2(_classnames4, prefixCls + '-nav-container', 1), _defineProperty$2(_classnames4, prefixCls + '-nav-container-scrolling', showNextPrev), _classnames4)),
          key: 'container',
          ref: this.props.saveRef('container')
        },
        prevButton,
        nextButton,
        React__default.createElement(
          'div',
          { className: prefixCls + '-nav-wrap', ref: this.props.saveRef('navWrap') },
          React__default.createElement(
            'div',
            { className: prefixCls + '-nav-scroll' },
            React__default.createElement(
              'div',
              { className: navClasses, ref: this.props.saveRef('nav') },
              navWrapper(this.props.children)
            )
          )
        )
      );
    }
  }]);

  return ScrollableTabBarNode;
}(React__default.Component);


ScrollableTabBarNode.propTypes = {
  activeKey: PropTypes.string,
  getRef: PropTypes.func.isRequired,
  saveRef: PropTypes.func.isRequired,
  tabBarPosition: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  prefixCls: PropTypes.string,
  scrollAnimated: PropTypes.bool,
  onPrevClick: PropTypes.func,
  onNextClick: PropTypes.func,
  navWrapper: PropTypes.func,
  children: PropTypes.node,
  prevIcon: PropTypes.node,
  nextIcon: PropTypes.node,
  direction: PropTypes.node
};

ScrollableTabBarNode.defaultProps = {
  tabBarPosition: 'left',
  prefixCls: '',
  scrollAnimated: true,
  onPrevClick: function onPrevClick() {},
  onNextClick: function onNextClick() {},
  navWrapper: function navWrapper(ele) {
    return ele;
  }
};

var SaveRef = function (_React$Component) {
  _inherits$2(SaveRef, _React$Component);

  function SaveRef() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck$2(this, SaveRef);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$2(this, (_ref = SaveRef.__proto__ || Object.getPrototypeOf(SaveRef)).call.apply(_ref, [this].concat(args))), _this), _this.getRef = function (name) {
      return _this[name];
    }, _this.saveRef = function (name) {
      return function (node) {
        if (node) {
          _this[name] = node;
        }
      };
    }, _temp), _possibleConstructorReturn$2(_this, _ret);
  }

  _createClass$2(SaveRef, [{
    key: 'render',
    value: function render() {
      return this.props.children(this.saveRef, this.getRef);
    }
  }]);

  return SaveRef;
}(React__default.Component);


SaveRef.propTypes = {
  children: PropTypes.func
};

SaveRef.defaultProps = {
  children: function children() {
    return null;
  }
};

var ScrollableInkTabBar = function (_React$Component) {
  _inherits$2(ScrollableInkTabBar, _React$Component);

  function ScrollableInkTabBar() {
    _classCallCheck$2(this, ScrollableInkTabBar);

    return _possibleConstructorReturn$2(this, (ScrollableInkTabBar.__proto__ || Object.getPrototypeOf(ScrollableInkTabBar)).apply(this, arguments));
  }

  _createClass$2(ScrollableInkTabBar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          renderTabBarNode = _props.children,
          restProps = _objectWithoutProperties(_props, ['children']);

      return React__default.createElement(
        SaveRef,
        null,
        function (saveRef, getRef) {
          return React__default.createElement(
            TabBarRootNode,
            _extends$2({ saveRef: saveRef }, restProps),
            React__default.createElement(
              ScrollableTabBarNode,
              _extends$2({ saveRef: saveRef, getRef: getRef }, restProps),
              React__default.createElement(TabBarTabsNode, _extends$2({ saveRef: saveRef, renderTabBarNode: renderTabBarNode }, restProps)),
              React__default.createElement(InkTabBarNode, _extends$2({ saveRef: saveRef, getRef: getRef }, restProps))
            )
          );
        }
      );
    }
  }]);

  return ScrollableInkTabBar;
}(React__default.Component);


ScrollableInkTabBar.propTypes = {
  children: PropTypes.func
};

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof$1(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

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

var TabBar = /*#__PURE__*/function (_React$Component) {
  _inherits$1(TabBar, _React$Component);

  var _super = _createSuper$1(TabBar);

  function TabBar() {
    _classCallCheck$1(this, TabBar);

    return _super.apply(this, arguments);
  }

  _createClass$1(TabBar, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          tabBarStyle = _this$props.tabBarStyle,
          animated = _this$props.animated,
          renderTabBar = _this$props.renderTabBar,
          tabBarExtraContent = _this$props.tabBarExtraContent,
          tabPosition = _this$props.tabPosition,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          size = _this$props.size,
          type = _this$props.type;
      var inkBarAnimated = _typeof$1(animated) === 'object' ? animated.inkBar : animated;
      var isVertical = tabPosition === 'left' || tabPosition === 'right';
      var prevIconType = isVertical ? 'up' : 'left';
      var nextIconType = isVertical ? 'down' : 'right';
      var prevIcon = /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-tab-prev-icon")
      }, /*#__PURE__*/React.createElement(Icon, {
        type: prevIconType,
        className: "".concat(prefixCls, "-tab-prev-icon-target")
      }));
      var nextIcon = /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-tab-next-icon")
      }, /*#__PURE__*/React.createElement(Icon, {
        type: nextIconType,
        className: "".concat(prefixCls, "-tab-next-icon-target")
      })); // Additional className for style usage

      var cls = classNames("".concat(prefixCls, "-").concat(tabPosition, "-bar"), (_classNames = {}, _defineProperty$1(_classNames, "".concat(prefixCls, "-").concat(size, "-bar"), !!size), _defineProperty$1(_classNames, "".concat(prefixCls, "-card-bar"), type && type.indexOf('card') >= 0), _classNames), className);

      var renderProps = _extends$1(_extends$1({}, this.props), {
        children: null,
        inkBarAnimated: inkBarAnimated,
        extraContent: tabBarExtraContent,
        style: tabBarStyle,
        prevIcon: prevIcon,
        nextIcon: nextIcon,
        className: cls
      });

      var RenderTabBar;

      if (renderTabBar) {
        RenderTabBar = renderTabBar(renderProps, ScrollableInkTabBar);
      } else {
        RenderTabBar = /*#__PURE__*/React.createElement(ScrollableInkTabBar, renderProps);
      }

      return /*#__PURE__*/React.cloneElement(RenderTabBar);
    }
  }]);

  return TabBar;
}(React.Component);
TabBar.defaultProps = {
  animated: true,
  type: 'line'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var Tabs = /*#__PURE__*/function (_React$Component) {
  _inherits(Tabs, _React$Component);

  var _super = _createSuper(Tabs);

  function Tabs() {
    var _this;

    _classCallCheck(this, Tabs);

    _this = _super.apply(this, arguments);

    _this.removeTab = function (targetKey, e) {
      e.stopPropagation();

      if (!targetKey) {
        return;
      }

      var onEdit = _this.props.onEdit;

      if (onEdit) {
        onEdit(targetKey, 'remove');
      }
    };

    _this.handleChange = function (activeKey) {
      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(activeKey);
      }
    };

    _this.createNewTab = function (targetKey) {
      var onEdit = _this.props.onEdit;

      if (onEdit) {
        onEdit(targetKey, 'add');
      }
    };

    _this.renderTabs = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls;
      var _this$props = _this.props,
          customizePrefixCls = _this$props.prefixCls,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? '' : _this$props$className,
          size = _this$props.size,
          _this$props$type = _this$props.type,
          type = _this$props$type === void 0 ? 'line' : _this$props$type,
          tabPosition = _this$props.tabPosition,
          children = _this$props.children,
          _this$props$animated = _this$props.animated,
          animated = _this$props$animated === void 0 ? true : _this$props$animated,
          hideAdd = _this$props.hideAdd;
      var tabBarExtraContent = _this.props.tabBarExtraContent;
      var tabPaneAnimated = _typeof(animated) === 'object' ? animated.tabPane : animated; // card tabs should not have animation

      if (type !== 'line') {
        tabPaneAnimated = 'animated' in _this.props ? tabPaneAnimated : false;
      }

      warning$1(!(type.indexOf('card') >= 0 && (size === 'small' || size === 'large')));
      var prefixCls = getPrefixCls('tabs', customizePrefixCls);
      var cls = classNames(className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-vertical"), tabPosition === 'left' || tabPosition === 'right'), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(size), !!size), _defineProperty(_classNames, "".concat(prefixCls, "-card"), type.indexOf('card') >= 0), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(type), true), _defineProperty(_classNames, "".concat(prefixCls, "-no-animation"), !tabPaneAnimated), _classNames)); // only card type tabs can be added and closed

      var childrenWithClose = [];

      if (type === 'editable-card') {
        childrenWithClose = [];
        React.Children.forEach(children, function (child, index) {
          if (! /*#__PURE__*/React.isValidElement(child)) return child;
          var closable = child.props.closable;
          closable = typeof closable === 'undefined' ? true : closable;
          var closeIcon = closable ? /*#__PURE__*/React.createElement(Icon, {
            type: "close",
            className: "".concat(prefixCls, "-close-x"),
            onClick: function onClick(e) {
              return _this.removeTab(child.key, e);
            }
          }) : null;
          childrenWithClose.push( /*#__PURE__*/React.cloneElement(child, {
            tab: /*#__PURE__*/React.createElement("div", {
              className: closable ? undefined : "".concat(prefixCls, "-tab-unclosable")
            }, child.props.tab, closeIcon),
            key: child.key || index
          }));
        }); // Add new tab handler

        if (!hideAdd) {
          tabBarExtraContent = /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
            type: "plus",
            className: "".concat(prefixCls, "-new-tab"),
            onClick: _this.createNewTab
          }), tabBarExtraContent);
        }
      }

      tabBarExtraContent = tabBarExtraContent ? /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-extra-content")
      }, tabBarExtraContent) : null;

      var tabBarProps = __rest(_this.props, []);

      var contentCls = classNames("".concat(prefixCls, "-").concat(tabPosition, "-content"), type.indexOf('card') >= 0 && "".concat(prefixCls, "-card-content"));
      return /*#__PURE__*/React.createElement(Tabs$1, _extends({}, _this.props, {
        prefixCls: prefixCls,
        className: cls,
        tabBarPosition: tabPosition,
        renderTabBar: function renderTabBar() {
          return /*#__PURE__*/React.createElement(TabBar, _extends({}, omit(tabBarProps, ['className']), {
            tabBarExtraContent: tabBarExtraContent
          }));
        },
        renderTabContent: function renderTabContent() {
          return /*#__PURE__*/React.createElement(TabContent, {
            className: contentCls,
            animated: tabPaneAnimated,
            animatedWithMargin: true
          });
        },
        onChange: _this.handleChange
      }), childrenWithClose.length > 0 ? childrenWithClose : children);
    };

    return _this;
  }

  _createClass(Tabs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var NO_FLEX = ' no-flex';
      var tabNode = ReactDOM.findDOMNode(this);

      if (tabNode && !isFlexSupported && tabNode.className.indexOf(NO_FLEX) === -1) {
        tabNode.className += NO_FLEX;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderTabs);
    }
  }]);

  return Tabs;
}(React.Component);
Tabs.TabPane = TabPane;
Tabs.defaultProps = {
  hideAdd: false,
  tabPosition: 'top'
};

export { Tabs as T };
