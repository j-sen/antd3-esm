import { n, P as PropTypes, c as classNames, C as ConfigConsumer } from '../../config-provider.js';
import * as React from 'react';
import React__default, { Component } from 'react';
import ReactDOM__default, { findDOMNode, createPortal } from 'react-dom';
import { u as unsafeLifecyclesPolyfill, r as raf, q as Align, a as addEventListenerWrap, C as ContainerRender, P as Portal, h as contains, p as polyfill, O as OriginCSSMotion, M as MotionPropTypes, t as supportTransition, K as KeyCode, s as shallowEqual } from '../../menu.js';
import { s as scrollIntoView } from '../../index7.js';
import { _ as _inherits$c, a as _classCallCheck$c, b as _possibleConstructorReturn$c, f as _objectWithoutProperties, e as _extends$a, c as _createClass$c, I as Icon } from '../../icon.js';
import { k as conductCheck$1, l as convertDataToTree$1, m as convertTreeToEntities$1, t as toArray$1, w as warning, n as Tree, C as ContextTreeNode } from '../../tree.js';
import { o as omit } from '../../input.js';
import { c as cloneElement } from '../../reactNode.js';

var css = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n@keyframes antCheckboxEffect {\n  0% {\n    transform: scale(1);\n    opacity: 0.5;\n  }\n  100% {\n    transform: scale(1.6);\n    opacity: 0;\n  }\n}\n.ant-select-tree-checkbox {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  position: relative;\n  top: -0.09em;\n  display: inline-block;\n  line-height: 1;\n  white-space: nowrap;\n  vertical-align: middle;\n  outline: none;\n  cursor: pointer;\n}\n.ant-select-tree-checkbox-wrapper:hover .ant-select-tree-checkbox-inner,\n.ant-select-tree-checkbox:hover .ant-select-tree-checkbox-inner,\n.ant-select-tree-checkbox-input:focus + .ant-select-tree-checkbox-inner {\n  border-color: #1890ff;\n}\n.ant-select-tree-checkbox-checked::after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 1px solid #1890ff;\n  border-radius: 2px;\n  visibility: hidden;\n  animation: antCheckboxEffect 0.36s ease-in-out;\n  animation-fill-mode: backwards;\n  content: '';\n}\n.ant-select-tree-checkbox:hover::after,\n.ant-select-tree-checkbox-wrapper:hover .ant-select-tree-checkbox::after {\n  visibility: visible;\n}\n.ant-select-tree-checkbox-inner {\n  position: relative;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 16px;\n  height: 16px;\n  background-color: #fff;\n  border: 1px solid #d9d9d9;\n  border-radius: 2px;\n  border-collapse: separate;\n  transition: all 0.3s;\n}\n.ant-select-tree-checkbox-inner::after {\n  position: absolute;\n  top: 50%;\n  left: 22%;\n  display: table;\n  width: 5.71428571px;\n  height: 9.14285714px;\n  border: 2px solid #fff;\n  border-top: 0;\n  border-left: 0;\n  transform: rotate(45deg) scale(0) translate(-50%, -50%);\n  opacity: 0;\n  transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;\n  content: ' ';\n}\n.ant-select-tree-checkbox-input {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  opacity: 0;\n}\n.ant-select-tree-checkbox-checked .ant-select-tree-checkbox-inner::after {\n  position: absolute;\n  display: table;\n  border: 2px solid #fff;\n  border-top: 0;\n  border-left: 0;\n  transform: rotate(45deg) scale(1) translate(-50%, -50%);\n  opacity: 1;\n  transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;\n  content: ' ';\n}\n.ant-select-tree-checkbox-checked .ant-select-tree-checkbox-inner {\n  background-color: #1890ff;\n  border-color: #1890ff;\n}\n.ant-select-tree-checkbox-disabled {\n  cursor: not-allowed;\n}\n.ant-select-tree-checkbox-disabled.ant-select-tree-checkbox-checked .ant-select-tree-checkbox-inner::after {\n  border-color: rgba(0, 0, 0, 0.25);\n  animation-name: none;\n}\n.ant-select-tree-checkbox-disabled .ant-select-tree-checkbox-input {\n  cursor: not-allowed;\n}\n.ant-select-tree-checkbox-disabled .ant-select-tree-checkbox-inner {\n  background-color: #f5f5f5;\n  border-color: #d9d9d9 !important;\n}\n.ant-select-tree-checkbox-disabled .ant-select-tree-checkbox-inner::after {\n  border-color: #f5f5f5;\n  border-collapse: separate;\n  animation-name: none;\n}\n.ant-select-tree-checkbox-disabled + span {\n  color: rgba(0, 0, 0, 0.25);\n  cursor: not-allowed;\n}\n.ant-select-tree-checkbox-disabled:hover::after,\n.ant-select-tree-checkbox-wrapper:hover .ant-select-tree-checkbox-disabled::after {\n  visibility: hidden;\n}\n.ant-select-tree-checkbox-wrapper {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  display: inline-block;\n  line-height: unset;\n  cursor: pointer;\n}\n.ant-select-tree-checkbox-wrapper.ant-select-tree-checkbox-wrapper-disabled {\n  cursor: not-allowed;\n}\n.ant-select-tree-checkbox-wrapper + .ant-select-tree-checkbox-wrapper {\n  margin-left: 8px;\n}\n.ant-select-tree-checkbox + span {\n  padding-right: 8px;\n  padding-left: 8px;\n}\n.ant-select-tree-checkbox-group {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  display: inline-block;\n}\n.ant-select-tree-checkbox-group-item {\n  display: inline-block;\n  margin-right: 8px;\n}\n.ant-select-tree-checkbox-group-item:last-child {\n  margin-right: 0;\n}\n.ant-select-tree-checkbox-group-item + .ant-select-tree-checkbox-group-item {\n  margin-left: 0;\n}\n.ant-select-tree-checkbox-indeterminate .ant-select-tree-checkbox-inner {\n  background-color: #fff;\n  border-color: #d9d9d9;\n}\n.ant-select-tree-checkbox-indeterminate .ant-select-tree-checkbox-inner::after {\n  top: 50%;\n  left: 50%;\n  width: 8px;\n  height: 8px;\n  background-color: #1890ff;\n  border: 0;\n  transform: translate(-50%, -50%) scale(1);\n  opacity: 1;\n  content: ' ';\n}\n.ant-select-tree-checkbox-indeterminate.ant-select-tree-checkbox-disabled .ant-select-tree-checkbox-inner::after {\n  background-color: rgba(0, 0, 0, 0.25);\n  border-color: rgba(0, 0, 0, 0.25);\n}\n.ant-select-tree {\n  box-sizing: border-box;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  margin: 0;\n  margin-top: -4px;\n  padding: 0 4px;\n}\n.ant-select-tree li {\n  margin: 8px 0;\n  padding: 0;\n  white-space: nowrap;\n  list-style: none;\n  outline: 0;\n}\n.ant-select-tree li.filter-node > span {\n  font-weight: 500;\n}\n.ant-select-tree li ul {\n  margin: 0;\n  padding: 0 0 0 18px;\n}\n.ant-select-tree li .ant-select-tree-node-content-wrapper {\n  display: inline-block;\n  width: calc(100% - 24px);\n  margin: 0;\n  padding: 3px 5px;\n  color: rgba(0, 0, 0, 0.65);\n  text-decoration: none;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.ant-select-tree li .ant-select-tree-node-content-wrapper:hover {\n  background-color: #e6f7ff;\n}\n.ant-select-tree li .ant-select-tree-node-content-wrapper.ant-select-tree-node-selected {\n  background-color: #bae7ff;\n}\n.ant-select-tree li span.ant-select-tree-checkbox {\n  margin: 0 4px 0 0;\n}\n.ant-select-tree li span.ant-select-tree-checkbox + .ant-select-tree-node-content-wrapper {\n  width: calc(100% - 46px);\n}\n.ant-select-tree li span.ant-select-tree-switcher,\n.ant-select-tree li span.ant-select-tree-iconEle {\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  margin: 0;\n  line-height: 22px;\n  text-align: center;\n  vertical-align: middle;\n  border: 0 none;\n  outline: none;\n  cursor: pointer;\n}\n.ant-select-tree li span.ant-select-icon_loading .ant-select-switcher-loading-icon {\n  position: absolute;\n  left: 0;\n  display: inline-block;\n  color: #1890ff;\n  font-size: 14px;\n  transform: none;\n}\n.ant-select-tree li span.ant-select-icon_loading .ant-select-switcher-loading-icon svg {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n}\n.ant-select-tree li span.ant-select-tree-switcher {\n  position: relative;\n}\n.ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher-noop {\n  cursor: auto;\n}\n.ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_open .ant-tree-switcher-icon,\n.ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_open .ant-select-switcher-icon {\n  font-size: 12px;\n  font-size: 10px \\9;\n  transform: scale(0.83333333) rotate(0deg);\n  display: inline-block;\n  font-weight: bold;\n}\n:root .ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_open .ant-tree-switcher-icon,\n:root .ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_open .ant-select-switcher-icon {\n  font-size: 12px;\n}\n.ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_open .ant-tree-switcher-icon svg,\n.ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_open .ant-select-switcher-icon svg {\n  transition: transform 0.3s;\n}\n.ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_close .ant-tree-switcher-icon,\n.ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_close .ant-select-switcher-icon {\n  font-size: 12px;\n  font-size: 10px \\9;\n  transform: scale(0.83333333) rotate(0deg);\n  display: inline-block;\n  font-weight: bold;\n}\n:root .ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_close .ant-tree-switcher-icon,\n:root .ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_close .ant-select-switcher-icon {\n  font-size: 12px;\n}\n.ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_close .ant-tree-switcher-icon svg,\n.ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_close .ant-select-switcher-icon svg {\n  transition: transform 0.3s;\n}\n.ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_close .ant-select-switcher-icon svg {\n  transform: rotate(-90deg);\n}\n.ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_open .ant-select-switcher-loading-icon,\n.ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_close .ant-select-switcher-loading-icon {\n  position: absolute;\n  left: 0;\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  color: #1890ff;\n  font-size: 14px;\n  transform: none;\n}\n.ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_open .ant-select-switcher-loading-icon svg,\n.ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_close .ant-select-switcher-loading-icon svg {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n}\n.ant-select-tree .ant-select-tree-treenode-loading .ant-select-tree-iconEle {\n  display: none;\n}\n.ant-select-tree-child-tree {\n  display: none;\n}\n.ant-select-tree-child-tree-open {\n  display: block;\n}\nli.ant-select-tree-treenode-disabled > span:not(.ant-select-tree-switcher),\nli.ant-select-tree-treenode-disabled > .ant-select-tree-node-content-wrapper,\nli.ant-select-tree-treenode-disabled > .ant-select-tree-node-content-wrapper span {\n  color: rgba(0, 0, 0, 0.25);\n  cursor: not-allowed;\n}\nli.ant-select-tree-treenode-disabled > .ant-select-tree-node-content-wrapper:hover {\n  background: transparent;\n}\n.ant-select-tree-icon__open {\n  margin-right: 2px;\n  vertical-align: top;\n}\n.ant-select-tree-icon__close {\n  margin-right: 2px;\n  vertical-align: top;\n}\n.ant-select-tree-dropdown {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: 'tnum';\n}\n.ant-select-tree-dropdown .ant-select-dropdown-search {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  display: block;\n  padding: 4px;\n  background: #fff;\n}\n.ant-select-tree-dropdown .ant-select-dropdown-search .ant-select-search__field__wrap {\n  width: 100%;\n}\n.ant-select-tree-dropdown .ant-select-dropdown-search .ant-select-search__field {\n  box-sizing: border-box;\n  width: 100%;\n  padding: 4px 7px;\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n  outline: none;\n}\n.ant-select-tree-dropdown .ant-select-dropdown-search.ant-select-search--hide {\n  display: none;\n}\n.ant-select-tree-dropdown .ant-select-not-found {\n  display: block;\n  padding: 7px 16px;\n  color: rgba(0, 0, 0, 0.25);\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=index.css.map */";
n(css,{"prepend":true});

function toArrayChildren(children) {
  var ret = [];
  React__default.Children.forEach(children, function (child) {
    ret.push(child);
  });
  return ret;
}

function findChildInChildrenByKey(children, key) {
  var ret = null;
  if (children) {
    children.forEach(function (child) {
      if (ret) {
        return;
      }
      if (child && child.key === key) {
        ret = child;
      }
    });
  }
  return ret;
}

function findShownChildInChildrenByKey(children, key, showProp) {
  var ret = null;
  if (children) {
    children.forEach(function (child) {
      if (child && child.key === key && child.props[showProp]) {
        if (ret) {
          throw new Error('two child with same key for <rc-animate> children');
        }
        ret = child;
      }
    });
  }
  return ret;
}

function isSameChildren(c1, c2, showProp) {
  var same = c1.length === c2.length;
  if (same) {
    c1.forEach(function (child, index) {
      var child2 = c2[index];
      if (child && child2) {
        if (child && !child2 || !child && child2) {
          same = false;
        } else if (child.key !== child2.key) {
          same = false;
        } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
          same = false;
        }
      }
    });
  }
  return same;
}

function mergeChildren(prev, next) {
  var ret = [];

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextChildrenPending = {};
  var pendingChildren = [];
  prev.forEach(function (child) {
    if (child && findChildInChildrenByKey(next, child.key)) {
      if (pendingChildren.length) {
        nextChildrenPending[child.key] = pendingChildren;
        pendingChildren = [];
      }
    } else {
      pendingChildren.push(child);
    }
  });

  next.forEach(function (child) {
    if (child && Object.prototype.hasOwnProperty.call(nextChildrenPending, child.key)) {
      ret = ret.concat(nextChildrenPending[child.key]);
    }
    ret.push(child);
  });

  ret = ret.concat(pendingChildren);

  return ret;
}

var START_EVENT_NAME_MAP = {
  transitionstart: {
    transition: 'transitionstart',
    WebkitTransition: 'webkitTransitionStart',
    MozTransition: 'mozTransitionStart',
    OTransition: 'oTransitionStart',
    msTransition: 'MSTransitionStart'
  },

  animationstart: {
    animation: 'animationstart',
    WebkitAnimation: 'webkitAnimationStart',
    MozAnimation: 'mozAnimationStart',
    OAnimation: 'oAnimationStart',
    msAnimation: 'MSAnimationStart'
  }
};

var END_EVENT_NAME_MAP = {
  transitionend: {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd'
  },

  animationend: {
    animation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    OAnimation: 'oAnimationEnd',
    msAnimation: 'MSAnimationEnd'
  }
};

var startEvents = [];
var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  if (!('AnimationEvent' in window)) {
    delete START_EVENT_NAME_MAP.animationstart.animation;
    delete END_EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete START_EVENT_NAME_MAP.transitionstart.transition;
    delete END_EVENT_NAME_MAP.transitionend.transition;
  }

  function process(EVENT_NAME_MAP, events) {
    for (var baseEventName in EVENT_NAME_MAP) {
      if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
        var baseEvents = EVENT_NAME_MAP[baseEventName];
        for (var styleName in baseEvents) {
          if (styleName in style) {
            events.push(baseEvents[styleName]);
            break;
          }
        }
      }
    }
  }

  process(START_EVENT_NAME_MAP, startEvents);
  process(END_EVENT_NAME_MAP, endEvents);
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  detectEvents();
}

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var TransitionEvents = {
  // Start events
  startEvents: startEvents,

  addStartEventListener: function addStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    startEvents.forEach(function (startEvent) {
      addEventListener(node, startEvent, eventListener);
    });
  },
  removeStartEventListener: function removeStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      return;
    }
    startEvents.forEach(function (startEvent) {
      removeEventListener(node, startEvent, eventListener);
    });
  },


  // End events
  endEvents: endEvents,

  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },
  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isCssAnimationSupported = TransitionEvents.endEvents.length !== 0;
var capitalPrefixes = ['Webkit', 'Moz', 'O',
// ms is special .... !
'ms'];
var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];

function getStyleProperty(node, name) {
  // old ff need null, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
  var style = window.getComputedStyle(node, null);
  var ret = '';
  for (var i = 0; i < prefixes.length; i++) {
    ret = style.getPropertyValue(prefixes[i] + name);
    if (ret) {
      break;
    }
  }
  return ret;
}

function fixBrowserByTimeout(node) {
  if (isCssAnimationSupported) {
    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
    // sometimes, browser bug
    node.rcEndAnimTimeout = setTimeout(function () {
      node.rcEndAnimTimeout = null;
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }, time * 1000 + 200);
  }
}

function clearBrowserBugTimeout(node) {
  if (node.rcEndAnimTimeout) {
    clearTimeout(node.rcEndAnimTimeout);
    node.rcEndAnimTimeout = null;
  }
}

var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof$1(transitionName)) === 'object';
  var className = nameIsObj ? transitionName.name : transitionName;
  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
  var end = endCallback;
  var start = void 0;
  var active = void 0;

  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
    end = endCallback.end;
    start = endCallback.start;
    active = endCallback.active;
  }

  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    node.classList.remove(className);
    node.classList.remove(activeClassName);

    TransitionEvents.removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional end is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (end) {
      end();
    }
  };

  TransitionEvents.addEndEventListener(node, node.rcEndListener);

  if (start) {
    start();
  }
  node.classList.add(className);

  node.rcAnimTimeout = setTimeout(function () {
    node.rcAnimTimeout = null;
    node.classList.add(activeClassName);
    if (active) {
      active();
    }
    fixBrowserByTimeout(node);
  }, 0);

  return {
    stop: function stop() {
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }
  };
};

cssAnimation.style = function (node, style, callback) {
  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    TransitionEvents.removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional callback is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (callback) {
      callback();
    }
  };

  TransitionEvents.addEndEventListener(node, node.rcEndListener);

  node.rcAnimTimeout = setTimeout(function () {
    for (var s in style) {
      if (style.hasOwnProperty(s)) {
        node.style[s] = style[s];
      }
    }
    node.rcAnimTimeout = null;
    fixBrowserByTimeout(node);
  }, 0);
};

cssAnimation.setTransition = function (node, p, value) {
  var property = p;
  var v = value;
  if (value === undefined) {
    v = property;
    property = '';
  }
  property = property || '';
  capitalPrefixes.forEach(function (prefix) {
    node.style[prefix + 'Transition' + property] = v;
  });
};

cssAnimation.isCssAnimationSupported = isCssAnimationSupported;

var util = {
  isAppearSupported: function isAppearSupported(props) {
    return props.transitionName && props.transitionAppear || props.animation.appear;
  },
  isEnterSupported: function isEnterSupported(props) {
    return props.transitionName && props.transitionEnter || props.animation.enter;
  },
  isLeaveSupported: function isLeaveSupported(props) {
    return props.transitionName && props.transitionLeave || props.animation.leave;
  },
  allowAppearCallback: function allowAppearCallback(props) {
    return props.transitionAppear || props.animation.appear;
  },
  allowEnterCallback: function allowEnterCallback(props) {
    return props.transitionEnter || props.animation.enter;
  },
  allowLeaveCallback: function allowLeaveCallback(props) {
    return props.transitionLeave || props.animation.leave;
  }
};

var _createClass$b = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$b(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$b(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$b(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var transitionMap = {
  enter: 'transitionEnter',
  appear: 'transitionAppear',
  leave: 'transitionLeave'
};

var AnimateChild = function (_React$Component) {
  _inherits$b(AnimateChild, _React$Component);

  function AnimateChild() {
    _classCallCheck$b(this, AnimateChild);

    return _possibleConstructorReturn$b(this, (AnimateChild.__proto__ || Object.getPrototypeOf(AnimateChild)).apply(this, arguments));
  }

  _createClass$b(AnimateChild, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stop();
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(done) {
      if (util.isEnterSupported(this.props)) {
        this.transition('enter', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillAppear',
    value: function componentWillAppear(done) {
      if (util.isAppearSupported(this.props)) {
        this.transition('appear', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(done) {
      if (util.isLeaveSupported(this.props)) {
        this.transition('leave', done);
      } else {
        // always sync, do not interupt with react component life cycle
        // update hidden -> animate hidden ->
        // didUpdate -> animate leave -> unmount (if animate is none)
        done();
      }
    }
  }, {
    key: 'transition',
    value: function transition(animationType, finishCallback) {
      var _this2 = this;

      var node = ReactDOM__default.findDOMNode(this);
      var props = this.props;
      var transitionName = props.transitionName;
      var nameIsObj = typeof transitionName === 'object';
      this.stop();
      var end = function end() {
        _this2.stopper = null;
        finishCallback();
      };
      if ((isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
        var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
        var activeName = name + '-active';
        if (nameIsObj && transitionName[animationType + 'Active']) {
          activeName = transitionName[animationType + 'Active'];
        }
        this.stopper = cssAnimation(node, {
          name: name,
          active: activeName
        }, end);
      } else {
        this.stopper = props.animation[animationType](node, end);
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      var stopper = this.stopper;
      if (stopper) {
        this.stopper = null;
        stopper.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return AnimateChild;
}(React__default.Component);

var _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass$a = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty$c(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$a(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$a(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$a(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultKey = 'rc_animate_' + Date.now();

function getChildrenFromProps(props) {
  var children = props.children;
  if (React__default.isValidElement(children)) {
    if (!children.key) {
      return React__default.cloneElement(children, {
        key: defaultKey
      });
    }
  }
  return children;
}

function noop$1() {}

var Animate = function (_React$Component) {
  _inherits$a(Animate, _React$Component);

  function Animate(props) {
    _classCallCheck$a(this, Animate);

    var _this = _possibleConstructorReturn$a(this, (Animate.__proto__ || Object.getPrototypeOf(Animate)).call(this, props));

    _initialiseProps$2.call(_this);

    _this.currentlyAnimatingKeys = {};
    _this.keysToEnter = [];
    _this.keysToLeave = [];

    _this.state = {
      children: toArrayChildren(getChildrenFromProps(props))
    };

    _this.childrenRefs = {};
    return _this;
  } // eslint-disable-line

  _createClass$a(Animate, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var showProp = this.props.showProp;
      var children = this.state.children;
      if (showProp) {
        children = children.filter(function (child) {
          return !!child.props[showProp];
        });
      }
      children.forEach(function (child) {
        if (child) {
          _this2.performAppear(child.key);
        }
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      this.nextProps = nextProps;
      var nextChildren = toArrayChildren(getChildrenFromProps(nextProps));
      var props = this.props;
      // exclusive needs immediate response
      if (props.exclusive) {
        Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
          _this3.stop(key);
        });
      }
      var showProp = props.showProp;
      var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
      // last props children if exclusive
      var currentChildren = props.exclusive ? toArrayChildren(getChildrenFromProps(props)) : this.state.children;
      // in case destroy in showProp mode
      var newChildren = [];
      if (showProp) {
        currentChildren.forEach(function (currentChild) {
          var nextChild = currentChild && findChildInChildrenByKey(nextChildren, currentChild.key);
          var newChild = void 0;
          if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
            newChild = React__default.cloneElement(nextChild || currentChild, _defineProperty$c({}, showProp, true));
          } else {
            newChild = nextChild;
          }
          if (newChild) {
            newChildren.push(newChild);
          }
        });
        nextChildren.forEach(function (nextChild) {
          if (!nextChild || !findChildInChildrenByKey(currentChildren, nextChild.key)) {
            newChildren.push(nextChild);
          }
        });
      } else {
        newChildren = mergeChildren(currentChildren, nextChildren);
      }

      // need render to avoid update
      this.setState({
        children: newChildren
      });

      nextChildren.forEach(function (child) {
        var key = child && child.key;
        if (child && currentlyAnimatingKeys[key]) {
          return;
        }
        var hasPrev = child && findChildInChildrenByKey(currentChildren, key);
        if (showProp) {
          var showInNext = child.props[showProp];
          if (hasPrev) {
            var showInNow = findShownChildInChildrenByKey(currentChildren, key, showProp);
            if (!showInNow && showInNext) {
              _this3.keysToEnter.push(key);
            }
          } else if (showInNext) {
            _this3.keysToEnter.push(key);
          }
        } else if (!hasPrev) {
          _this3.keysToEnter.push(key);
        }
      });

      currentChildren.forEach(function (child) {
        var key = child && child.key;
        if (child && currentlyAnimatingKeys[key]) {
          return;
        }
        var hasNext = child && findChildInChildrenByKey(nextChildren, key);
        if (showProp) {
          var showInNow = child.props[showProp];
          if (hasNext) {
            var showInNext = findShownChildInChildrenByKey(nextChildren, key, showProp);
            if (!showInNext && showInNow) {
              _this3.keysToLeave.push(key);
            }
          } else if (showInNow) {
            _this3.keysToLeave.push(key);
          }
        } else if (!hasNext) {
          _this3.keysToLeave.push(key);
        }
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var keysToEnter = this.keysToEnter;
      this.keysToEnter = [];
      keysToEnter.forEach(this.performEnter);
      var keysToLeave = this.keysToLeave;
      this.keysToLeave = [];
      keysToLeave.forEach(this.performLeave);
    }
  }, {
    key: 'isValidChildByKey',
    value: function isValidChildByKey(currentChildren, key) {
      var showProp = this.props.showProp;
      if (showProp) {
        return findShownChildInChildrenByKey(currentChildren, key, showProp);
      }
      return findChildInChildrenByKey(currentChildren, key);
    }
  }, {
    key: 'stop',
    value: function stop(key) {
      delete this.currentlyAnimatingKeys[key];
      var component = this.childrenRefs[key];
      if (component) {
        component.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var props = this.props;
      this.nextProps = props;
      var stateChildren = this.state.children;
      var children = null;
      if (stateChildren) {
        children = stateChildren.map(function (child) {
          if (child === null || child === undefined) {
            return child;
          }
          if (!child.key) {
            throw new Error('must set key for <rc-animate> children');
          }
          return React__default.createElement(
            AnimateChild,
            {
              key: child.key,
              ref: function ref(node) {
                _this4.childrenRefs[child.key] = node;
              },
              animation: props.animation,
              transitionName: props.transitionName,
              transitionEnter: props.transitionEnter,
              transitionAppear: props.transitionAppear,
              transitionLeave: props.transitionLeave
            },
            child
          );
        });
      }
      var Component = props.component;
      if (Component) {
        var passedProps = props;
        if (typeof Component === 'string') {
          passedProps = _extends$9({
            className: props.className,
            style: props.style
          }, props.componentProps);
        }
        return React__default.createElement(
          Component,
          passedProps,
          children
        );
      }
      return children[0] || null;
    }
  }]);

  return Animate;
}(React__default.Component);

Animate.isAnimate = true;
Animate.defaultProps = {
  animation: {},
  component: 'span',
  componentProps: {},
  transitionEnter: true,
  transitionLeave: true,
  transitionAppear: false,
  onEnd: noop$1,
  onEnter: noop$1,
  onLeave: noop$1,
  onAppear: noop$1
};

var _initialiseProps$2 = function _initialiseProps() {
  var _this5 = this;

  this.performEnter = function (key) {
    // may already remove by exclusive
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillEnter(_this5.handleDoneAdding.bind(_this5, key, 'enter'));
    }
  };

  this.performAppear = function (key) {
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillAppear(_this5.handleDoneAdding.bind(_this5, key, 'appear'));
    }
  };

  this.handleDoneAdding = function (key, type) {
    var props = _this5.props;
    delete _this5.currentlyAnimatingKeys[key];
    // if update on exclusive mode, skip check
    if (props.exclusive && props !== _this5.nextProps) {
      return;
    }
    var currentChildren = toArrayChildren(getChildrenFromProps(props));
    if (!_this5.isValidChildByKey(currentChildren, key)) {
      // exclusive will not need this
      _this5.performLeave(key);
    } else if (type === 'appear') {
      if (util.allowAppearCallback(props)) {
        props.onAppear(key);
        props.onEnd(key, true);
      }
    } else if (util.allowEnterCallback(props)) {
      props.onEnter(key);
      props.onEnd(key, true);
    }
  };

  this.performLeave = function (key) {
    // may already remove by exclusive
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillLeave(_this5.handleDoneLeaving.bind(_this5, key));
    }
  };

  this.handleDoneLeaving = function (key) {
    var props = _this5.props;
    delete _this5.currentlyAnimatingKeys[key];
    // if update on exclusive mode, skip check
    if (props.exclusive && props !== _this5.nextProps) {
      return;
    }
    var currentChildren = toArrayChildren(getChildrenFromProps(props));
    // in case state change is too fast
    if (_this5.isValidChildByKey(currentChildren, key)) {
      _this5.performEnter(key);
    } else {
      var end = function end() {
        if (util.allowLeaveCallback(props)) {
          props.onLeave(key);
          props.onEnd(key, false);
        }
      };
      if (!isSameChildren(_this5.state.children, currentChildren, props.showProp)) {
        _this5.setState({
          children: currentChildren
        }, end);
      } else {
        end();
      }
    }
  };
};

var Animate$1 = unsafeLifecyclesPolyfill(Animate);

var LazyRenderBox = function (_Component) {
  _inherits$c(LazyRenderBox, _Component);

  function LazyRenderBox() {
    _classCallCheck$c(this, LazyRenderBox);

    return _possibleConstructorReturn$c(this, _Component.apply(this, arguments));
  }

  LazyRenderBox.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return nextProps.hiddenClassName || nextProps.visible;
  };

  LazyRenderBox.prototype.render = function render() {
    var _props = this.props,
        hiddenClassName = _props.hiddenClassName,
        visible = _props.visible,
        props = _objectWithoutProperties(_props, ['hiddenClassName', 'visible']);

    if (hiddenClassName || React__default.Children.count(props.children) > 1) {
      if (!visible && hiddenClassName) {
        props.className += ' ' + hiddenClassName;
      }
      return React__default.createElement('div', props);
    }

    return React__default.Children.only(props.children);
  };

  return LazyRenderBox;
}(Component);

LazyRenderBox.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  visible: PropTypes.bool,
  hiddenClassName: PropTypes.string
};

var PopupInner = function (_Component) {
  _inherits$c(PopupInner, _Component);

  function PopupInner() {
    _classCallCheck$c(this, PopupInner);

    return _possibleConstructorReturn$c(this, _Component.apply(this, arguments));
  }

  PopupInner.prototype.render = function render() {
    var props = this.props;
    var className = props.className;
    if (!props.visible) {
      className += ' ' + props.hiddenClassName;
    }
    return React__default.createElement(
      'div',
      {
        className: className,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        style: props.style
      },
      React__default.createElement(
        LazyRenderBox,
        { className: props.prefixCls + '-content', visible: props.visible },
        props.children
      )
    );
  };

  return PopupInner;
}(Component);

PopupInner.propTypes = {
  hiddenClassName: PropTypes.string,
  className: PropTypes.string,
  prefixCls: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  children: PropTypes.any
};

function isPointsEq(a1, a2, isAlignPoint) {
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }
  return a1[0] === a2[0] && a1[1] === a2[1];
}

function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  var baseAlign = builtinPlacements[placementStr] || {};
  return _extends$a({}, baseAlign, align);
}

function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
  var points = align.points;
  for (var placement in builtinPlacements) {
    if (builtinPlacements.hasOwnProperty(placement)) {
      if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
        return prefixCls + '-placement-' + placement;
      }
    }
  }
  return '';
}

function saveRef(name, component) {
  this[name] = component;
}

var Popup = function (_Component) {
  _inherits$c(Popup, _Component);

  function Popup(props) {
    _classCallCheck$c(this, Popup);

    var _this = _possibleConstructorReturn$c(this, _Component.call(this, props));

    _initialiseProps$1.call(_this);

    _this.state = {
      // Used for stretch
      stretchChecked: false,
      targetWidth: undefined,
      targetHeight: undefined
    };

    _this.savePopupRef = saveRef.bind(_this, 'popupInstance');
    _this.saveAlignRef = saveRef.bind(_this, 'alignInstance');
    return _this;
  }

  Popup.prototype.componentDidMount = function componentDidMount() {
    this.rootNode = this.getPopupDomNode();
    this.setStretchSize();
  };

  Popup.prototype.componentDidUpdate = function componentDidUpdate() {
    this.setStretchSize();
  };

  // Record size if stretch needed


  Popup.prototype.getPopupDomNode = function getPopupDomNode() {
    return ReactDOM__default.findDOMNode(this.popupInstance);
  };

  // `target` on `rc-align` can accept as a function to get the bind element or a point.
  // ref: https://www.npmjs.com/package/rc-align


  Popup.prototype.getMaskTransitionName = function getMaskTransitionName() {
    var props = this.props;
    var transitionName = props.maskTransitionName;
    var animation = props.maskAnimation;
    if (!transitionName && animation) {
      transitionName = props.prefixCls + '-' + animation;
    }
    return transitionName;
  };

  Popup.prototype.getTransitionName = function getTransitionName() {
    var props = this.props;
    var transitionName = props.transitionName;
    if (!transitionName && props.animation) {
      transitionName = props.prefixCls + '-' + props.animation;
    }
    return transitionName;
  };

  Popup.prototype.getClassName = function getClassName(currentAlignClassName) {
    return this.props.prefixCls + ' ' + this.props.className + ' ' + currentAlignClassName;
  };

  Popup.prototype.getPopupElement = function getPopupElement() {
    var _this2 = this;

    var savePopupRef = this.savePopupRef;
    var _state = this.state,
        stretchChecked = _state.stretchChecked,
        targetHeight = _state.targetHeight,
        targetWidth = _state.targetWidth;
    var _props = this.props,
        align = _props.align,
        visible = _props.visible,
        prefixCls = _props.prefixCls,
        style = _props.style,
        getClassNameFromAlign = _props.getClassNameFromAlign,
        destroyPopupOnHide = _props.destroyPopupOnHide,
        stretch = _props.stretch,
        children = _props.children,
        onMouseEnter = _props.onMouseEnter,
        onMouseLeave = _props.onMouseLeave;

    var className = this.getClassName(this.currentAlignClassName || getClassNameFromAlign(align));
    var hiddenClassName = prefixCls + '-hidden';

    if (!visible) {
      this.currentAlignClassName = null;
    }

    var sizeStyle = {};
    if (stretch) {
      // Stretch with target
      if (stretch.indexOf('height') !== -1) {
        sizeStyle.height = targetHeight;
      } else if (stretch.indexOf('minHeight') !== -1) {
        sizeStyle.minHeight = targetHeight;
      }
      if (stretch.indexOf('width') !== -1) {
        sizeStyle.width = targetWidth;
      } else if (stretch.indexOf('minWidth') !== -1) {
        sizeStyle.minWidth = targetWidth;
      }

      // Delay force align to makes ui smooth
      if (!stretchChecked) {
        sizeStyle.visibility = 'hidden';
        raf(function () {
          if (_this2.alignInstance) {
            _this2.alignInstance.forceAlign();
          }
        });
      }
    }

    var newStyle = _extends$a({}, sizeStyle, style, this.getZIndexStyle());

    var popupInnerProps = {
      className: className,
      prefixCls: prefixCls,
      ref: savePopupRef,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      style: newStyle
    };

    if (destroyPopupOnHide) {
      return React__default.createElement(
        Animate$1,
        {
          component: '',
          exclusive: true,
          transitionAppear: true,
          transitionName: this.getTransitionName(),
          onLeave: this.onAnimateLeaved
        },
        visible ? React__default.createElement(
          Align,
          {
            target: this.getAlignTarget(),
            key: 'popup',
            ref: this.saveAlignRef,
            monitorWindowResize: true,
            align: align,
            onAlign: this.onAlign
          },
          React__default.createElement(
            PopupInner,
            _extends$a({
              visible: true
            }, popupInnerProps),
            children
          )
        ) : null
      );
    }

    return React__default.createElement(
      Animate$1,
      {
        component: '',
        exclusive: true,
        transitionAppear: true,
        transitionName: this.getTransitionName(),
        showProp: 'xVisible',
        onLeave: this.onAnimateLeaved
      },
      React__default.createElement(
        Align,
        {
          target: this.getAlignTarget(),
          key: 'popup',
          ref: this.saveAlignRef,
          monitorWindowResize: true,
          xVisible: visible,
          childrenProps: { visible: 'xVisible' },
          disabled: !visible,
          align: align,
          onAlign: this.onAlign
        },
        React__default.createElement(
          PopupInner,
          _extends$a({
            hiddenClassName: hiddenClassName
          }, popupInnerProps),
          children
        )
      )
    );
  };

  Popup.prototype.getZIndexStyle = function getZIndexStyle() {
    var style = {};
    var props = this.props;
    if (props.zIndex !== undefined) {
      style.zIndex = props.zIndex;
    }
    return style;
  };

  Popup.prototype.getMaskElement = function getMaskElement() {
    var props = this.props;
    var maskElement = void 0;
    if (props.mask) {
      var maskTransition = this.getMaskTransitionName();
      maskElement = React__default.createElement(LazyRenderBox, {
        style: this.getZIndexStyle(),
        key: 'mask',
        className: props.prefixCls + '-mask',
        hiddenClassName: props.prefixCls + '-mask-hidden',
        visible: props.visible
      });
      if (maskTransition) {
        maskElement = React__default.createElement(
          Animate$1,
          {
            key: 'mask',
            showProp: 'visible',
            transitionAppear: true,
            component: '',
            transitionName: maskTransition
          },
          maskElement
        );
      }
    }
    return maskElement;
  };

  Popup.prototype.render = function render() {
    return React__default.createElement(
      'div',
      null,
      this.getMaskElement(),
      this.getPopupElement()
    );
  };

  return Popup;
}(Component);

Popup.propTypes = {
  visible: PropTypes.bool,
  style: PropTypes.object,
  getClassNameFromAlign: PropTypes.func,
  onAlign: PropTypes.func,
  getRootDomNode: PropTypes.func,
  onMouseEnter: PropTypes.func,
  align: PropTypes.any,
  destroyPopupOnHide: PropTypes.bool,
  className: PropTypes.string,
  prefixCls: PropTypes.string,
  onMouseLeave: PropTypes.func,
  stretch: PropTypes.string,
  children: PropTypes.node,
  point: PropTypes.shape({
    pageX: PropTypes.number,
    pageY: PropTypes.number
  })
};

var _initialiseProps$1 = function _initialiseProps() {
  var _this3 = this;

  this.onAlign = function (popupDomNode, align) {
    var props = _this3.props;
    var currentAlignClassName = props.getClassNameFromAlign(align);
    // FIX: https://github.com/react-component/trigger/issues/56
    // FIX: https://github.com/react-component/tooltip/issues/79
    if (_this3.currentAlignClassName !== currentAlignClassName) {
      _this3.currentAlignClassName = currentAlignClassName;
      popupDomNode.className = _this3.getClassName(currentAlignClassName);
    }
    props.onAlign(popupDomNode, align);
  };

  this.onAnimateLeaved = function () {
    var stretch = _this3.props.stretch;
    var stretchChecked = _this3.state.stretchChecked;

    if (stretch && stretchChecked) {
      _this3.setState({ stretchChecked: false });
    }
  };

  this.setStretchSize = function () {
    var getRootDomNode = _this3.props.getRootDomNode;
    var _state2 = _this3.state,
        stretchChecked = _state2.stretchChecked,
        targetHeight = _state2.targetHeight,
        targetWidth = _state2.targetWidth;


    var $ele = getRootDomNode();
    if (!$ele) return;

    var height = $ele.offsetHeight;
    var width = $ele.offsetWidth;

    if (targetHeight !== height || targetWidth !== width || !stretchChecked) {
      _this3.setState({
        stretchChecked: true,
        targetHeight: height,
        targetWidth: width
      });
    }
  };

  this.getTargetElement = function () {
    return _this3.props.getRootDomNode();
  };

  this.getAlignTarget = function () {
    var point = _this3.props.point;

    if (point) {
      return point;
    }
    return _this3.getTargetElement;
  };
};

function noop() {}

function returnEmptyString() {
  return '';
}

function returnDocument() {
  return window.document;
}

var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur', 'onContextMenu'];

var IS_REACT_16 = !!createPortal;

var Trigger = function (_React$Component) {
  _inherits$c(Trigger, _React$Component);

  function Trigger(props) {
    _classCallCheck$c(this, Trigger);

    var _this = _possibleConstructorReturn$c(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var popupVisible = void 0;
    if ('popupVisible' in props) {
      popupVisible = !!props.popupVisible;
    } else {
      popupVisible = !!props.defaultPopupVisible;
    }

    _this.prevPopupVisible = popupVisible;

    _this.state = {
      popupVisible: popupVisible
    };

    ALL_HANDLERS.forEach(function (h) {
      _this['fire' + h] = function (e) {
        _this.fireEvents(h, e);
      };
    });
    return _this;
  }

  Trigger.prototype.componentDidMount = function componentDidMount() {
    this.componentDidUpdate({}, {
      popupVisible: this.state.popupVisible
    });
  };

  Trigger.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
    var popupVisible = _ref.popupVisible;

    if (popupVisible !== undefined) {
      this.setState({
        popupVisible: popupVisible
      });
    }
  };

  Trigger.prototype.componentDidUpdate = function componentDidUpdate(_, prevState) {
    var props = this.props;
    var state = this.state;
    var triggerAfterPopupVisibleChange = function triggerAfterPopupVisibleChange() {
      if (prevState.popupVisible !== state.popupVisible) {
        props.afterPopupVisibleChange(state.popupVisible);
      }
    };
    if (!IS_REACT_16) {
      this.renderComponent(null, triggerAfterPopupVisibleChange);
    }

    this.prevPopupVisible = prevState.popupVisible;

    // We must listen to `mousedown` or `touchstart`, edge case:
    // https://github.com/ant-design/ant-design/issues/5804
    // https://github.com/react-component/calendar/issues/250
    // https://github.com/react-component/trigger/issues/50
    if (state.popupVisible) {
      var currentDocument = void 0;
      if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow())) {
        currentDocument = props.getDocument();
        this.clickOutsideHandler = addEventListenerWrap(currentDocument, 'mousedown', this.onDocumentClick);
      }
      // always hide on mobile
      if (!this.touchOutsideHandler) {
        currentDocument = currentDocument || props.getDocument();
        this.touchOutsideHandler = addEventListenerWrap(currentDocument, 'touchstart', this.onDocumentClick);
      }
      // close popup when trigger type contains 'onContextMenu' and document is scrolling.
      if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
        currentDocument = currentDocument || props.getDocument();
        this.contextMenuOutsideHandler1 = addEventListenerWrap(currentDocument, 'scroll', this.onContextMenuClose);
      }
      // close popup when trigger type contains 'onContextMenu' and window is blur.
      if (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow()) {
        this.contextMenuOutsideHandler2 = addEventListenerWrap(window, 'blur', this.onContextMenuClose);
      }
      return;
    }

    this.clearOutsideHandler();
  };

  Trigger.prototype.componentWillUnmount = function componentWillUnmount() {
    this.clearDelayTimer();
    this.clearOutsideHandler();
  };

  Trigger.prototype.getPopupDomNode = function getPopupDomNode() {
    // for test
    if (this._component && this._component.getPopupDomNode) {
      return this._component.getPopupDomNode();
    }
    return null;
  };

  Trigger.prototype.getPopupAlign = function getPopupAlign() {
    var props = this.props;
    var popupPlacement = props.popupPlacement,
        popupAlign = props.popupAlign,
        builtinPlacements = props.builtinPlacements;

    if (popupPlacement && builtinPlacements) {
      return getAlignFromPlacement(builtinPlacements, popupPlacement, popupAlign);
    }
    return popupAlign;
  };

  /**
   * @param popupVisible    Show or not the popup element
   * @param event           SyntheticEvent, used for `pointAlign`
   */
  Trigger.prototype.setPopupVisible = function setPopupVisible(popupVisible, event) {
    var alignPoint = this.props.alignPoint;


    this.clearDelayTimer();

    if (this.state.popupVisible !== popupVisible) {
      if (!('popupVisible' in this.props)) {
        this.setState({ popupVisible: popupVisible });
      }
      this.props.onPopupVisibleChange(popupVisible);
    }

    // Always record the point position since mouseEnterDelay will delay the show
    if (alignPoint && event) {
      this.setPoint(event);
    }
  };

  Trigger.prototype.delaySetPopupVisible = function delaySetPopupVisible(visible, delayS, event) {
    var _this2 = this;

    var delay = delayS * 1000;
    this.clearDelayTimer();
    if (delay) {
      var point = event ? { pageX: event.pageX, pageY: event.pageY } : null;
      this.delayTimer = setTimeout(function () {
        _this2.setPopupVisible(visible, point);
        _this2.clearDelayTimer();
      }, delay);
    } else {
      this.setPopupVisible(visible, event);
    }
  };

  Trigger.prototype.clearDelayTimer = function clearDelayTimer() {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = null;
    }
  };

  Trigger.prototype.clearOutsideHandler = function clearOutsideHandler() {
    if (this.clickOutsideHandler) {
      this.clickOutsideHandler.remove();
      this.clickOutsideHandler = null;
    }

    if (this.contextMenuOutsideHandler1) {
      this.contextMenuOutsideHandler1.remove();
      this.contextMenuOutsideHandler1 = null;
    }

    if (this.contextMenuOutsideHandler2) {
      this.contextMenuOutsideHandler2.remove();
      this.contextMenuOutsideHandler2 = null;
    }

    if (this.touchOutsideHandler) {
      this.touchOutsideHandler.remove();
      this.touchOutsideHandler = null;
    }
  };

  Trigger.prototype.createTwoChains = function createTwoChains(event) {
    var childPros = this.props.children.props;
    var props = this.props;
    if (childPros[event] && props[event]) {
      return this['fire' + event];
    }
    return childPros[event] || props[event];
  };

  Trigger.prototype.isClickToShow = function isClickToShow() {
    var _props = this.props,
        action = _props.action,
        showAction = _props.showAction;

    return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
  };

  Trigger.prototype.isContextMenuToShow = function isContextMenuToShow() {
    var _props2 = this.props,
        action = _props2.action,
        showAction = _props2.showAction;

    return action.indexOf('contextMenu') !== -1 || showAction.indexOf('contextMenu') !== -1;
  };

  Trigger.prototype.isClickToHide = function isClickToHide() {
    var _props3 = this.props,
        action = _props3.action,
        hideAction = _props3.hideAction;

    return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
  };

  Trigger.prototype.isMouseEnterToShow = function isMouseEnterToShow() {
    var _props4 = this.props,
        action = _props4.action,
        showAction = _props4.showAction;

    return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
  };

  Trigger.prototype.isMouseLeaveToHide = function isMouseLeaveToHide() {
    var _props5 = this.props,
        action = _props5.action,
        hideAction = _props5.hideAction;

    return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
  };

  Trigger.prototype.isFocusToShow = function isFocusToShow() {
    var _props6 = this.props,
        action = _props6.action,
        showAction = _props6.showAction;

    return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
  };

  Trigger.prototype.isBlurToHide = function isBlurToHide() {
    var _props7 = this.props,
        action = _props7.action,
        hideAction = _props7.hideAction;

    return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
  };

  Trigger.prototype.forcePopupAlign = function forcePopupAlign() {
    if (this.state.popupVisible && this._component && this._component.alignInstance) {
      this._component.alignInstance.forceAlign();
    }
  };

  Trigger.prototype.fireEvents = function fireEvents(type, e) {
    var childCallback = this.props.children.props[type];
    if (childCallback) {
      childCallback(e);
    }
    var callback = this.props[type];
    if (callback) {
      callback(e);
    }
  };

  Trigger.prototype.close = function close() {
    this.setPopupVisible(false);
  };

  Trigger.prototype.render = function render() {
    var _this3 = this;

    var popupVisible = this.state.popupVisible;
    var _props8 = this.props,
        children = _props8.children,
        forceRender = _props8.forceRender,
        alignPoint = _props8.alignPoint,
        className = _props8.className;

    var child = React__default.Children.only(children);
    var newChildProps = { key: 'trigger' };

    if (this.isContextMenuToShow()) {
      newChildProps.onContextMenu = this.onContextMenu;
    } else {
      newChildProps.onContextMenu = this.createTwoChains('onContextMenu');
    }

    if (this.isClickToHide() || this.isClickToShow()) {
      newChildProps.onClick = this.onClick;
      newChildProps.onMouseDown = this.onMouseDown;
      newChildProps.onTouchStart = this.onTouchStart;
    } else {
      newChildProps.onClick = this.createTwoChains('onClick');
      newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
      newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
    }
    if (this.isMouseEnterToShow()) {
      newChildProps.onMouseEnter = this.onMouseEnter;
      if (alignPoint) {
        newChildProps.onMouseMove = this.onMouseMove;
      }
    } else {
      newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
    }
    if (this.isMouseLeaveToHide()) {
      newChildProps.onMouseLeave = this.onMouseLeave;
    } else {
      newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
    }
    if (this.isFocusToShow() || this.isBlurToHide()) {
      newChildProps.onFocus = this.onFocus;
      newChildProps.onBlur = this.onBlur;
    } else {
      newChildProps.onFocus = this.createTwoChains('onFocus');
      newChildProps.onBlur = this.createTwoChains('onBlur');
    }

    var childrenClassName = classNames(child && child.props && child.props.className, className);
    if (childrenClassName) {
      newChildProps.className = childrenClassName;
    }
    var trigger = React__default.cloneElement(child, newChildProps);

    if (!IS_REACT_16) {
      return React__default.createElement(
        ContainerRender,
        {
          parent: this,
          visible: popupVisible,
          autoMount: false,
          forceRender: forceRender,
          getComponent: this.getComponent,
          getContainer: this.getContainer
        },
        function (_ref2) {
          var renderComponent = _ref2.renderComponent;

          _this3.renderComponent = renderComponent;
          return trigger;
        }
      );
    }

    var portal = void 0;
    // prevent unmounting after it's rendered
    if (popupVisible || this._component || forceRender) {
      portal = React__default.createElement(
        Portal,
        {
          key: 'portal',
          getContainer: this.getContainer,
          didUpdate: this.handlePortalUpdate
        },
        this.getComponent()
      );
    }

    return [trigger, portal];
  };

  return Trigger;
}(React__default.Component);

Trigger.propTypes = {
  children: PropTypes.any,
  action: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  showAction: PropTypes.any,
  hideAction: PropTypes.any,
  getPopupClassNameFromAlign: PropTypes.any,
  onPopupVisibleChange: PropTypes.func,
  afterPopupVisibleChange: PropTypes.func,
  popup: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  popupStyle: PropTypes.object,
  prefixCls: PropTypes.string,
  popupClassName: PropTypes.string,
  className: PropTypes.string,
  popupPlacement: PropTypes.string,
  builtinPlacements: PropTypes.object,
  popupTransitionName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  popupAnimation: PropTypes.any,
  mouseEnterDelay: PropTypes.number,
  mouseLeaveDelay: PropTypes.number,
  zIndex: PropTypes.number,
  focusDelay: PropTypes.number,
  blurDelay: PropTypes.number,
  getPopupContainer: PropTypes.func,
  getDocument: PropTypes.func,
  forceRender: PropTypes.bool,
  destroyPopupOnHide: PropTypes.bool,
  mask: PropTypes.bool,
  maskClosable: PropTypes.bool,
  onPopupAlign: PropTypes.func,
  popupAlign: PropTypes.object,
  popupVisible: PropTypes.bool,
  defaultPopupVisible: PropTypes.bool,
  maskTransitionName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  maskAnimation: PropTypes.string,
  stretch: PropTypes.string,
  alignPoint: PropTypes.bool // Maybe we can support user pass position in the future
};
Trigger.defaultProps = {
  prefixCls: 'rc-trigger-popup',
  getPopupClassNameFromAlign: returnEmptyString,
  getDocument: returnDocument,
  onPopupVisibleChange: noop,
  afterPopupVisibleChange: noop,
  onPopupAlign: noop,
  popupClassName: '',
  mouseEnterDelay: 0,
  mouseLeaveDelay: 0.1,
  focusDelay: 0,
  blurDelay: 0.15,
  popupStyle: {},
  destroyPopupOnHide: false,
  popupAlign: {},
  defaultPopupVisible: false,
  mask: false,
  maskClosable: true,
  action: [],
  showAction: [],
  hideAction: []
};

var _initialiseProps = function _initialiseProps() {
  var _this4 = this;

  this.onMouseEnter = function (e) {
    var mouseEnterDelay = _this4.props.mouseEnterDelay;

    _this4.fireEvents('onMouseEnter', e);
    _this4.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e);
  };

  this.onMouseMove = function (e) {
    _this4.fireEvents('onMouseMove', e);
    _this4.setPoint(e);
  };

  this.onMouseLeave = function (e) {
    _this4.fireEvents('onMouseLeave', e);
    _this4.delaySetPopupVisible(false, _this4.props.mouseLeaveDelay);
  };

  this.onPopupMouseEnter = function () {
    _this4.clearDelayTimer();
  };

  this.onPopupMouseLeave = function (e) {
    // https://github.com/react-component/trigger/pull/13
    // react bug?
    if (e.relatedTarget && !e.relatedTarget.setTimeout && _this4._component && _this4._component.getPopupDomNode && contains(_this4._component.getPopupDomNode(), e.relatedTarget)) {
      return;
    }
    _this4.delaySetPopupVisible(false, _this4.props.mouseLeaveDelay);
  };

  this.onFocus = function (e) {
    _this4.fireEvents('onFocus', e);
    // incase focusin and focusout
    _this4.clearDelayTimer();
    if (_this4.isFocusToShow()) {
      _this4.focusTime = Date.now();
      _this4.delaySetPopupVisible(true, _this4.props.focusDelay);
    }
  };

  this.onMouseDown = function (e) {
    _this4.fireEvents('onMouseDown', e);
    _this4.preClickTime = Date.now();
  };

  this.onTouchStart = function (e) {
    _this4.fireEvents('onTouchStart', e);
    _this4.preTouchTime = Date.now();
  };

  this.onBlur = function (e) {
    _this4.fireEvents('onBlur', e);
    _this4.clearDelayTimer();
    if (_this4.isBlurToHide()) {
      _this4.delaySetPopupVisible(false, _this4.props.blurDelay);
    }
  };

  this.onContextMenu = function (e) {
    e.preventDefault();
    _this4.fireEvents('onContextMenu', e);
    _this4.setPopupVisible(true, e);
  };

  this.onContextMenuClose = function () {
    if (_this4.isContextMenuToShow()) {
      _this4.close();
    }
  };

  this.onClick = function (event) {
    _this4.fireEvents('onClick', event);
    // focus will trigger click
    if (_this4.focusTime) {
      var preTime = void 0;
      if (_this4.preClickTime && _this4.preTouchTime) {
        preTime = Math.min(_this4.preClickTime, _this4.preTouchTime);
      } else if (_this4.preClickTime) {
        preTime = _this4.preClickTime;
      } else if (_this4.preTouchTime) {
        preTime = _this4.preTouchTime;
      }
      if (Math.abs(preTime - _this4.focusTime) < 20) {
        return;
      }
      _this4.focusTime = 0;
    }
    _this4.preClickTime = 0;
    _this4.preTouchTime = 0;
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    var nextVisible = !_this4.state.popupVisible;
    if (_this4.isClickToHide() && !nextVisible || nextVisible && _this4.isClickToShow()) {
      _this4.setPopupVisible(!_this4.state.popupVisible, event);
    }
  };

  this.onDocumentClick = function (event) {
    if (_this4.props.mask && !_this4.props.maskClosable) {
      return;
    }
    var target = event.target;
    var root = findDOMNode(_this4);
    var popupNode = _this4.getPopupDomNode();
    if (!contains(root, target) && !contains(popupNode, target)) {
      _this4.close();
    }
  };

  this.getRootDomNode = function () {
    return findDOMNode(_this4);
  };

  this.getPopupClassNameFromAlign = function (align) {
    var className = [];
    var _props9 = _this4.props,
        popupPlacement = _props9.popupPlacement,
        builtinPlacements = _props9.builtinPlacements,
        prefixCls = _props9.prefixCls,
        alignPoint = _props9.alignPoint,
        getPopupClassNameFromAlign = _props9.getPopupClassNameFromAlign;

    if (popupPlacement && builtinPlacements) {
      className.push(getAlignPopupClassName(builtinPlacements, prefixCls, align, alignPoint));
    }
    if (getPopupClassNameFromAlign) {
      className.push(getPopupClassNameFromAlign(align));
    }
    return className.join(' ');
  };

  this.getComponent = function () {
    var _props10 = _this4.props,
        prefixCls = _props10.prefixCls,
        destroyPopupOnHide = _props10.destroyPopupOnHide,
        popupClassName = _props10.popupClassName,
        action = _props10.action,
        onPopupAlign = _props10.onPopupAlign,
        popupAnimation = _props10.popupAnimation,
        popupTransitionName = _props10.popupTransitionName,
        popupStyle = _props10.popupStyle,
        mask = _props10.mask,
        maskAnimation = _props10.maskAnimation,
        maskTransitionName = _props10.maskTransitionName,
        zIndex = _props10.zIndex,
        popup = _props10.popup,
        stretch = _props10.stretch,
        alignPoint = _props10.alignPoint;
    var _state = _this4.state,
        popupVisible = _state.popupVisible,
        point = _state.point;


    var align = _this4.getPopupAlign();

    var mouseProps = {};
    if (_this4.isMouseEnterToShow()) {
      mouseProps.onMouseEnter = _this4.onPopupMouseEnter;
    }
    if (_this4.isMouseLeaveToHide()) {
      mouseProps.onMouseLeave = _this4.onPopupMouseLeave;
    }

    return React__default.createElement(
      Popup,
      _extends$a({
        prefixCls: prefixCls,
        destroyPopupOnHide: destroyPopupOnHide,
        visible: popupVisible,
        point: alignPoint && point,
        className: popupClassName,
        action: action,
        align: align,
        onAlign: onPopupAlign,
        animation: popupAnimation,
        getClassNameFromAlign: _this4.getPopupClassNameFromAlign
      }, mouseProps, {
        stretch: stretch,
        getRootDomNode: _this4.getRootDomNode,
        style: popupStyle,
        mask: mask,
        zIndex: zIndex,
        transitionName: popupTransitionName,
        maskAnimation: maskAnimation,
        maskTransitionName: maskTransitionName,
        ref: _this4.savePopup
      }),
      typeof popup === 'function' ? popup() : popup
    );
  };

  this.getContainer = function () {
    var props = _this4.props;

    var popupContainer = document.createElement('div');
    // Make sure default popup container will never cause scrollbar appearing
    // https://github.com/react-component/trigger/issues/41
    popupContainer.style.position = 'absolute';
    popupContainer.style.top = '0';
    popupContainer.style.left = '0';
    popupContainer.style.width = '100%';
    var mountNode = props.getPopupContainer ? props.getPopupContainer(findDOMNode(_this4)) : props.getDocument().body;
    mountNode.appendChild(popupContainer);
    return popupContainer;
  };

  this.setPoint = function (point) {
    var alignPoint = _this4.props.alignPoint;

    if (!alignPoint || !point) return;

    _this4.setState({
      point: {
        pageX: point.pageX,
        pageY: point.pageY
      }
    });
  };

  this.handlePortalUpdate = function () {
    if (_this4.prevPopupVisible !== _this4.state.popupVisible) {
      _this4.props.afterPopupVisibleChange(_this4.state.popupVisible);
    }
  };

  this.savePopup = function (node) {
    _this4._component = node;
  };
};

var Trigger$1 = unsafeLifecyclesPolyfill(Trigger);

function hasClass(node, className) {
  if (node.classList) {
    return node.classList.contains(className);
  }

  var originClass = node.className;
  return " ".concat(originClass, " ").indexOf(" ".concat(className, " ")) > -1;
}

var SHOW_ALL = 'SHOW_ALL';
var SHOW_PARENT = 'SHOW_PARENT';
var SHOW_CHILD = 'SHOW_CHILD';

function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }

function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$9(Object(source), true).forEach(function (key) { _defineProperty$b(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$9(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$b(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var warnDeprecatedLabel = false; // =================== DOM =====================

function findPopupContainer(node, prefixClass) {
  var current = node;

  while (current) {
    if (hasClass(current, prefixClass)) {
      return current;
    }

    current = current.parentNode;
  }

  return null;
} // =================== MISC ====================

function toTitle(title) {
  if (typeof title === 'string') {
    return title;
  }

  return null;
}
function toArray(data) {
  if (data === undefined || data === null) return [];
  return Array.isArray(data) ? data : [data];
} // Shallow copy of React 16.3 createRef api

function createRef() {
  var func = function setRef(node) {
    func.current = node;
  };

  return func;
} // =============== Legacy ===============

var UNSELECTABLE_STYLE = {
  userSelect: 'none',
  WebkitUserSelect: 'none'
};
var UNSELECTABLE_ATTRIBUTE = {
  unselectable: 'unselectable'
};
/**
 * Convert position list to hierarchy structure.
 * This is little hack since use '-' to split the position.
 */

function flatToHierarchy(positionList) {
  if (!positionList.length) {
    return [];
  }

  var entrances = {}; // Prepare the position map

  var posMap = {};
  var parsedList = positionList.slice().map(function (entity) {
    var clone = _objectSpread$9({}, entity, {
      fields: entity.pos.split('-')
    });

    delete clone.children;
    return clone;
  });
  parsedList.forEach(function (entity) {
    posMap[entity.pos] = entity;
  });
  parsedList.sort(function (a, b) {
    return a.fields.length - b.fields.length;
  }); // Create the hierarchy

  parsedList.forEach(function (entity) {
    var parentPos = entity.fields.slice(0, -1).join('-');
    var parentEntity = posMap[parentPos];

    if (!parentEntity) {
      entrances[entity.pos] = entity;
    } else {
      parentEntity.children = parentEntity.children || [];
      parentEntity.children.push(entity);
    } // Some time position list provide `key`, we don't need it


    delete entity.key;
    delete entity.fields;
  });
  return Object.keys(entrances).map(function (key) {
    return entrances[key];
  });
} // =============== Accessibility ===============

var ariaId = 0;
function generateAriaId(prefix) {
  ariaId += 1;
  return "".concat(prefix, "_").concat(ariaId);
}
function isLabelInValue(props) {
  var treeCheckable = props.treeCheckable,
      treeCheckStrictly = props.treeCheckStrictly,
      labelInValue = props.labelInValue;

  if (treeCheckable && treeCheckStrictly) {
    return true;
  }

  return labelInValue || false;
} // =================== Tree ====================

function parseSimpleTreeData(treeData, _ref) {
  var id = _ref.id,
      pId = _ref.pId,
      rootPId = _ref.rootPId;
  var keyNodes = {};
  var rootNodeList = []; // Fill in the map

  var nodeList = treeData.map(function (node) {
    var clone = _objectSpread$9({}, node);

    var key = clone[id];
    keyNodes[key] = clone;
    clone.key = clone.key || key;
    return clone;
  }); // Connect tree

  nodeList.forEach(function (node) {
    var parentKey = node[pId];
    var parent = keyNodes[parentKey]; // Fill parent

    if (parent) {
      parent.children = parent.children || [];
      parent.children.push(node);
    } // Fill root tree node


    if (parentKey === rootPId || !parent && rootPId === null) {
      rootNodeList.push(node);
    }
  });
  return rootNodeList;
}
/**
 * Detect if position has relation.
 * e.g. 1-2 related with 1-2-3
 * e.g. 1-3-2 related with 1
 * e.g. 1-2 not related with 1-21
 */

function isPosRelated(pos1, pos2) {
  var fields1 = pos1.split('-');
  var fields2 = pos2.split('-');
  var minLen = Math.min(fields1.length, fields2.length);

  for (var i = 0; i < minLen; i += 1) {
    if (fields1[i] !== fields2[i]) {
      return false;
    }
  }

  return true;
}
/**
 * This function is only used on treeNode check (none treeCheckStrictly but has searchInput).
 * We convert entity to { node, pos, children } format.
 * This is legacy bug but we still need to do with it.
 * @param entity
 */

function cleanEntity(_ref2) {
  var node = _ref2.node,
      pos = _ref2.pos,
      children = _ref2.children;
  var instance = {
    node: node,
    pos: pos
  };

  if (children) {
    instance.children = children.map(cleanEntity);
  }

  return instance;
}
/**
 * Get a filtered TreeNode list by provided treeNodes.
 * [Legacy] Since `Tree` use `key` as map but `key` will changed by React,
 * we have to convert `treeNodes > data > treeNodes` to keep the key.
 * Such performance hungry!
 *
 * We pass `Component` as argument is to fix eslint issue.
 */

function getFilterTree(treeNodes, searchValue, filterFunc, valueEntities, Component) {
  if (!searchValue) {
    return null;
  }

  function mapFilteredNodeToData(node) {
    if (!node) return null;
    var match = false;

    if (filterFunc(searchValue, node)) {
      match = true;
    }

    var children = toArray$1(node.props.children).map(mapFilteredNodeToData).filter(function (n) {
      return n;
    });

    if (children.length || match) {
      return React__default.createElement(Component, _extends$8({}, node.props, {
        key: valueEntities[node.props.value].key
      }), children);
    }

    return null;
  }

  return treeNodes.map(mapFilteredNodeToData).filter(function (node) {
    return node;
  });
} // =================== Value ===================

/**
 * Convert value to array format to make logic simplify.
 */

function formatInternalValue(value, props) {
  var valueList = toArray(value); // Parse label in value

  if (isLabelInValue(props)) {
    return valueList.map(function (val) {
      if (typeof val !== 'object' || !val) {
        return {
          value: '',
          label: ''
        };
      }

      return val;
    });
  }

  return valueList.map(function (val) {
    return {
      value: val
    };
  });
}
function getLabel(wrappedValue, entity, treeNodeLabelProp) {
  if (wrappedValue.label) {
    return wrappedValue.label;
  }

  if (entity && entity.node.props) {
    return entity.node.props[treeNodeLabelProp];
  } // Since value without entity will be in missValueList.
  // This code will never reached, but we still need this in case.


  return wrappedValue.value;
}
/**
 * Convert internal state `valueList` to user needed value list.
 * This will return an array list. You need check if is not multiple when return.
 *
 * `allCheckedNodes` is used for `treeCheckStrictly`
 */

function formatSelectorValue(valueList, props, valueEntities) {
  var treeNodeLabelProp = props.treeNodeLabelProp,
      treeCheckable = props.treeCheckable,
      treeCheckStrictly = props.treeCheckStrictly,
      showCheckedStrategy = props.showCheckedStrategy; // Will hide some value if `showCheckedStrategy` is set

  if (treeCheckable && !treeCheckStrictly) {
    var values = {};
    valueList.forEach(function (wrappedValue) {
      values[wrappedValue.value] = wrappedValue;
    });
    var hierarchyList = flatToHierarchy(valueList.map(function (_ref3) {
      var value = _ref3.value;
      return valueEntities[value];
    }));

    if (showCheckedStrategy === SHOW_PARENT) {
      // Only get the parent checked value
      return hierarchyList.map(function (_ref4) {
        var value = _ref4.node.props.value;
        return {
          label: getLabel(values[value], valueEntities[value], treeNodeLabelProp),
          value: value
        };
      });
    }

    if (showCheckedStrategy === SHOW_CHILD) {
      // Only get the children checked value
      var targetValueList = []; // Find the leaf children

      var traverse = function traverse(_ref5) {
        var value = _ref5.node.props.value,
            children = _ref5.children;

        if (!children || children.length === 0) {
          targetValueList.push({
            label: getLabel(values[value], valueEntities[value], treeNodeLabelProp),
            value: value
          });
          return;
        }

        children.forEach(function (entity) {
          traverse(entity);
        });
      };

      hierarchyList.forEach(function (entity) {
        traverse(entity);
      });
      return targetValueList;
    }
  }

  return valueList.map(function (wrappedValue) {
    return {
      label: getLabel(wrappedValue, valueEntities[wrappedValue.value], treeNodeLabelProp),
      value: wrappedValue.value
    };
  });
}
/**
 * Use `rc-tree` convertDataToTree to convert treeData to TreeNodes.
 * This will change the label to title value
 */

function processProps(props) {
  var title = props.title,
      label = props.label,
      key = props.key,
      value = props.value;

  var cloneProps = _objectSpread$9({}, props); // Warning user not to use deprecated label prop.


  if (label && !title) {
    if (!warnDeprecatedLabel) {
      warning(false, "'label' in treeData is deprecated. Please use 'title' instead.");
      warnDeprecatedLabel = true;
    }

    cloneProps.title = label;
  }

  if (!key) {
    cloneProps.key = value;
  }

  return cloneProps;
}

function convertDataToTree(treeData) {
  return convertDataToTree$1(treeData, {
    processProps: processProps
  });
}
/**
 * Use `rc-tree` convertTreeToEntities for entities calculation.
 * We have additional entities of `valueEntities`
 */

function initWrapper(wrapper) {
  return _objectSpread$9({}, wrapper, {
    valueEntities: {}
  });
}

function processEntity(entity, wrapper) {
  var value = entity.node.props.value;
  entity.value = value; // This should be empty, or will get error message.

  var currentEntity = wrapper.valueEntities[value];

  if (currentEntity) {
    warning(false, "Conflict! value of node '".concat(entity.key, "' (").concat(value, ") has already used by node '").concat(currentEntity.key, "'."));
  }

  wrapper.valueEntities[value] = entity;
}

function convertTreeToEntities(treeNodes) {
  return convertTreeToEntities$1(treeNodes, {
    initWrapper: initWrapper,
    processEntity: processEntity
  });
}
/**
 * https://github.com/ant-design/ant-design/issues/13328
 * We need calculate the half check key when searchValue is set.
 */
// TODO: This logic may better move to rc-tree

function getHalfCheckedKeys(valueList, valueEntities) {
  var values = {}; // Fill checked keys

  valueList.forEach(function (_ref6) {
    var value = _ref6.value;
    values[value] = false;
  }); // Fill half checked keys

  valueList.forEach(function (_ref7) {
    var value = _ref7.value;
    var current = valueEntities[value];

    while (current && current.parent) {
      var parentValue = current.parent.value;
      if (parentValue in values) break;
      values[parentValue] = true;
      current = current.parent;
    }
  }); // Get half keys

  return Object.keys(values).filter(function (value) {
    return values[value];
  }).map(function (value) {
    return valueEntities[value].key;
  });
}
var conductCheck = conductCheck$1;

function _classCallCheck$9(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$9(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$9(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$9(Constructor.prototype, protoProps); return Constructor; }

function _possibleConstructorReturn$9(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$9(self); }

function _getPrototypeOf$9(o) { _getPrototypeOf$9 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$9(o); }

function _assertThisInitialized$9(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits$9(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$9(subClass, superClass); }

function _setPrototypeOf$9(o, p) { _setPrototypeOf$9 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$9(o, p); }

function _defineProperty$a(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var BUILT_IN_PLACEMENTS = {
  bottomLeft: {
    points: ['tl', 'bl'],
    offset: [0, 4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    },
    ignoreShake: true
  },
  topLeft: {
    points: ['bl', 'tl'],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    },
    ignoreShake: true
  }
};

var SelectTrigger =
/*#__PURE__*/
function (_React$Component) {
  _inherits$9(SelectTrigger, _React$Component);

  function SelectTrigger() {
    var _this;

    _classCallCheck$9(this, SelectTrigger);

    _this = _possibleConstructorReturn$9(this, _getPrototypeOf$9(SelectTrigger).call(this));

    _defineProperty$a(_assertThisInitialized$9(_this), "getDropdownTransitionName", function () {
      var _this$props = _this.props,
          transitionName = _this$props.transitionName,
          animation = _this$props.animation,
          dropdownPrefixCls = _this$props.dropdownPrefixCls;

      if (!transitionName && animation) {
        return "".concat(dropdownPrefixCls, "-").concat(animation);
      }

      return transitionName;
    });

    _defineProperty$a(_assertThisInitialized$9(_this), "forcePopupAlign", function () {
      var $trigger = _this.triggerRef.current;

      if ($trigger) {
        $trigger.forcePopupAlign();
      }
    });

    _this.triggerRef = createRef();
    return _this;
  }

  _createClass$9(SelectTrigger, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props2 = this.props,
          disabled = _this$props2.disabled,
          isMultiple = _this$props2.isMultiple,
          dropdownPopupAlign = _this$props2.dropdownPopupAlign,
          dropdownMatchSelectWidth = _this$props2.dropdownMatchSelectWidth,
          dropdownClassName = _this$props2.dropdownClassName,
          dropdownStyle = _this$props2.dropdownStyle,
          onDropdownVisibleChange = _this$props2.onDropdownVisibleChange,
          getPopupContainer = _this$props2.getPopupContainer,
          dropdownPrefixCls = _this$props2.dropdownPrefixCls,
          popupElement = _this$props2.popupElement,
          open = _this$props2.open,
          children = _this$props2.children; // TODO: [Legacy] Use new action when trigger fixed: https://github.com/react-component/trigger/pull/86
      // When false do nothing with the width
      // ref: https://github.com/ant-design/ant-design/issues/10927

      var stretch;

      if (dropdownMatchSelectWidth !== false) {
        stretch = dropdownMatchSelectWidth ? 'width' : 'minWidth';
      }

      return React__default.createElement(Trigger$1, {
        ref: this.triggerRef,
        action: disabled ? [] : ['click'],
        popupPlacement: "bottomLeft",
        builtinPlacements: BUILT_IN_PLACEMENTS,
        popupAlign: dropdownPopupAlign,
        prefixCls: dropdownPrefixCls,
        popupTransitionName: this.getDropdownTransitionName(),
        onPopupVisibleChange: onDropdownVisibleChange,
        popup: popupElement,
        popupVisible: open,
        getPopupContainer: getPopupContainer,
        stretch: stretch,
        popupClassName: classNames(dropdownClassName, (_classNames = {}, _defineProperty$a(_classNames, "".concat(dropdownPrefixCls, "--multiple"), isMultiple), _defineProperty$a(_classNames, "".concat(dropdownPrefixCls, "--single"), !isMultiple), _classNames)),
        popupStyle: dropdownStyle
      }, children);
    }
  }]);

  return SelectTrigger;
}(React__default.Component);

_defineProperty$a(SelectTrigger, "propTypes", {
  // Pass by outside user props
  disabled: PropTypes.bool,
  showSearch: PropTypes.bool,
  prefixCls: PropTypes.string,
  dropdownPopupAlign: PropTypes.object,
  dropdownClassName: PropTypes.string,
  dropdownStyle: PropTypes.object,
  transitionName: PropTypes.string,
  animation: PropTypes.string,
  getPopupContainer: PropTypes.func,
  children: PropTypes.node,
  dropdownMatchSelectWidth: PropTypes.bool,
  // Pass by Select
  isMultiple: PropTypes.bool,
  dropdownPrefixCls: PropTypes.string,
  onDropdownVisibleChange: PropTypes.func,
  popupElement: PropTypes.node,
  open: PropTypes.bool
});

polyfill(SelectTrigger);

function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$8(Object(source), true).forEach(function (key) { _defineProperty$9(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck$8(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$8(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$8(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$8(Constructor.prototype, protoProps); return Constructor; }

function _possibleConstructorReturn$8(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$8(self); }

function _getPrototypeOf$8(o) { _getPrototypeOf$8 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$8(o); }

function _assertThisInitialized$8(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits$8(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$8(subClass, superClass); }

function _setPrototypeOf$8(o, p) { _setPrototypeOf$8 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$8(o, p); }

function _defineProperty$9(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var selectorPropTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  open: PropTypes.bool,
  selectorValueList: PropTypes.array,
  allowClear: PropTypes.bool,
  showArrow: PropTypes.bool,
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  removeSelected: PropTypes.func,
  // Pass by component
  ariaId: PropTypes.string,
  inputIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  clearIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
};
var selectorContextTypes = {
  onSelectorFocus: PropTypes.func.isRequired,
  onSelectorBlur: PropTypes.func.isRequired,
  onSelectorKeyDown: PropTypes.func.isRequired,
  onSelectorClear: PropTypes.func.isRequired
};
function generateSelector (modeName) {
  var BaseSelector =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits$8(BaseSelector, _React$Component);

    function BaseSelector() {
      var _this;

      _classCallCheck$8(this, BaseSelector);

      _this = _possibleConstructorReturn$8(this, _getPrototypeOf$8(BaseSelector).call(this));

      _defineProperty$9(_assertThisInitialized$8(_this), "onFocus", function () {
        var _this$props = _this.props,
            onFocus = _this$props.onFocus,
            focused = _this$props.focused;
        var onSelectorFocus = _this.context.rcTreeSelect.onSelectorFocus;

        if (!focused) {
          onSelectorFocus();
        }

        if (onFocus) {
          onFocus.apply(void 0, arguments);
        }
      });

      _defineProperty$9(_assertThisInitialized$8(_this), "onBlur", function () {
        var onBlur = _this.props.onBlur;
        var onSelectorBlur = _this.context.rcTreeSelect.onSelectorBlur; // TODO: Not trigger when is inner component get focused

        onSelectorBlur();

        if (onBlur) {
          onBlur.apply(void 0, arguments);
        }
      });

      _defineProperty$9(_assertThisInitialized$8(_this), "focus", function () {
        _this.domRef.current.focus();
      });

      _defineProperty$9(_assertThisInitialized$8(_this), "blur", function () {
        _this.domRef.current.focus();
      });

      _this.domRef = createRef();
      return _this;
    }

    _createClass$8(BaseSelector, [{
      key: "renderClear",
      value: function renderClear() {
        var _this$props2 = this.props,
            prefixCls = _this$props2.prefixCls,
            allowClear = _this$props2.allowClear,
            selectorValueList = _this$props2.selectorValueList,
            clearIcon = _this$props2.clearIcon;
        var onSelectorClear = this.context.rcTreeSelect.onSelectorClear;

        if (!allowClear || !selectorValueList.length || !selectorValueList[0].value) {
          return null;
        }

        return React__default.createElement("span", {
          key: "clear",
          className: "".concat(prefixCls, "-selection__clear"),
          onClick: onSelectorClear
        }, typeof clearIcon === 'function' ? React__default.createElement(clearIcon, _objectSpread$8({}, this.props)) : clearIcon);
      }
    }, {
      key: "renderArrow",
      value: function renderArrow() {
        var _this$props3 = this.props,
            prefixCls = _this$props3.prefixCls,
            showArrow = _this$props3.showArrow,
            inputIcon = _this$props3.inputIcon;

        if (!showArrow) {
          return null;
        }

        return React__default.createElement("span", {
          key: "arrow",
          className: "".concat(prefixCls, "-arrow"),
          style: {
            outline: 'none'
          }
        }, typeof inputIcon === 'function' ? React__default.createElement(inputIcon, _objectSpread$8({}, this.props)) : inputIcon);
      }
    }, {
      key: "render",
      value: function render() {
        var _classNames;

        var _this$props4 = this.props,
            prefixCls = _this$props4.prefixCls,
            className = _this$props4.className,
            style = _this$props4.style,
            open = _this$props4.open,
            focused = _this$props4.focused,
            disabled = _this$props4.disabled,
            allowClear = _this$props4.allowClear,
            onClick = _this$props4.onClick,
            ariaId = _this$props4.ariaId,
            renderSelection = _this$props4.renderSelection,
            renderPlaceholder = _this$props4.renderPlaceholder,
            tabIndex = _this$props4.tabIndex;
        var onSelectorKeyDown = this.context.rcTreeSelect.onSelectorKeyDown;
        var myTabIndex = tabIndex;

        if (disabled) {
          myTabIndex = null;
        }

        return React__default.createElement("span", {
          style: style,
          onClick: onClick,
          className: classNames(className, prefixCls, (_classNames = {}, _defineProperty$9(_classNames, "".concat(prefixCls, "-open"), open), _defineProperty$9(_classNames, "".concat(prefixCls, "-focused"), open || focused), _defineProperty$9(_classNames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty$9(_classNames, "".concat(prefixCls, "-enabled"), !disabled), _defineProperty$9(_classNames, "".concat(prefixCls, "-allow-clear"), allowClear), _classNames)),
          ref: this.domRef,
          role: "combobox",
          "aria-expanded": open,
          "aria-owns": open ? ariaId : undefined,
          "aria-controls": open ? ariaId : undefined,
          "aria-haspopup": "listbox",
          "aria-disabled": disabled,
          tabIndex: myTabIndex,
          onFocus: this.onFocus,
          onBlur: this.onBlur,
          onKeyDown: onSelectorKeyDown
        }, React__default.createElement("span", {
          key: "selection",
          className: classNames("".concat(prefixCls, "-selection"), "".concat(prefixCls, "-selection--").concat(modeName))
        }, renderSelection(), this.renderClear(), this.renderArrow(), renderPlaceholder && renderPlaceholder()));
      }
    }]);

    return BaseSelector;
  }(React__default.Component);

  _defineProperty$9(BaseSelector, "propTypes", _objectSpread$8({}, selectorPropTypes, {
    // Pass by HOC
    renderSelection: PropTypes.func.isRequired,
    renderPlaceholder: PropTypes.func,
    tabIndex: PropTypes.number
  }));

  _defineProperty$9(BaseSelector, "contextTypes", {
    rcTreeSelect: PropTypes.shape(_objectSpread$8({}, selectorContextTypes))
  });

  _defineProperty$9(BaseSelector, "defaultProps", {
    tabIndex: 0
  });

  polyfill(BaseSelector);
  return BaseSelector;
}

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(Object(source), true).forEach(function (key) { _defineProperty$8(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

function _classCallCheck$7(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$7(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$7(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$7(Constructor.prototype, protoProps); if (staticProps) _defineProperties$7(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$7(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$7(self); }

function _getPrototypeOf$7(o) { _getPrototypeOf$7 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$7(o); }

function _assertThisInitialized$7(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits$7(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$7(subClass, superClass); }

function _setPrototypeOf$7(o, p) { _setPrototypeOf$7 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$7(o, p); }

function _defineProperty$8(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var popupContextTypes = {
  onPopupKeyDown: PropTypes.func.isRequired,
  onTreeNodeSelect: PropTypes.func.isRequired,
  onTreeNodeCheck: PropTypes.func.isRequired
};

var BasePopup =
/*#__PURE__*/
function (_React$Component) {
  _inherits$7(BasePopup, _React$Component);

  function BasePopup(props) {
    var _this;

    _classCallCheck$7(this, BasePopup);

    _this = _possibleConstructorReturn$7(this, _getPrototypeOf$7(BasePopup).call(this));

    _defineProperty$8(_assertThisInitialized$7(_this), "onTreeExpand", function (expandedKeyList) {
      var _this$props = _this.props,
          treeExpandedKeys = _this$props.treeExpandedKeys,
          onTreeExpand = _this$props.onTreeExpand,
          onTreeExpanded = _this$props.onTreeExpanded; // Set uncontrolled state

      if (!treeExpandedKeys) {
        _this.setState({
          expandedKeyList: expandedKeyList
        }, onTreeExpanded);
      }

      if (onTreeExpand) {
        onTreeExpand(expandedKeyList);
      }
    });

    _defineProperty$8(_assertThisInitialized$7(_this), "onLoad", function (loadedKeys) {
      _this.setState({
        loadedKeys: loadedKeys
      });
    });

    _defineProperty$8(_assertThisInitialized$7(_this), "getTree", function () {
      return _this.treeRef.current;
    });

    _defineProperty$8(_assertThisInitialized$7(_this), "getLoadData", function () {
      var _this$props2 = _this.props,
          loadData = _this$props2.loadData,
          upperSearchValue = _this$props2.upperSearchValue;
      if (upperSearchValue) return null;
      return loadData;
    });

    _defineProperty$8(_assertThisInitialized$7(_this), "filterTreeNode", function (treeNode) {
      var _this$props3 = _this.props,
          upperSearchValue = _this$props3.upperSearchValue,
          treeNodeFilterProp = _this$props3.treeNodeFilterProp;
      var filterVal = treeNode.props[treeNodeFilterProp];

      if (typeof filterVal === 'string') {
        return upperSearchValue && filterVal.toUpperCase().indexOf(upperSearchValue) !== -1;
      }

      return false;
    });

    _defineProperty$8(_assertThisInitialized$7(_this), "renderNotFound", function () {
      var _this$props4 = _this.props,
          prefixCls = _this$props4.prefixCls,
          notFoundContent = _this$props4.notFoundContent;
      return React__default.createElement("span", {
        className: "".concat(prefixCls, "-not-found")
      }, notFoundContent);
    });

    var treeDefaultExpandAll = props.treeDefaultExpandAll,
        treeDefaultExpandedKeys = props.treeDefaultExpandedKeys,
        keyEntities = props.keyEntities; // TODO: make `expandedKeyList` control

    var _expandedKeyList = treeDefaultExpandedKeys;

    if (treeDefaultExpandAll) {
      _expandedKeyList = Object.keys(keyEntities);
    }

    _this.state = {
      keyList: [],
      expandedKeyList: _expandedKeyList,
      // Cache `expandedKeyList` when tree is in filter. This is used in `getDerivedStateFromProps`
      cachedExpandedKeyList: [],
      // eslint-disable-line react/no-unused-state
      loadedKeys: []
    };
    _this.treeRef = createRef();
    return _this;
  }

  _createClass$7(BasePopup, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          keyList = _this$state.keyList,
          expandedKeyList = _this$state.expandedKeyList,
          loadedKeys = _this$state.loadedKeys;
      var _this$props5 = this.props,
          prefixCls = _this$props5.prefixCls,
          treeNodes = _this$props5.treeNodes,
          filteredTreeNodes = _this$props5.filteredTreeNodes,
          treeIcon = _this$props5.treeIcon,
          treeLine = _this$props5.treeLine,
          treeCheckable = _this$props5.treeCheckable,
          treeCheckStrictly = _this$props5.treeCheckStrictly,
          multiple = _this$props5.multiple,
          ariaId = _this$props5.ariaId,
          renderSearch = _this$props5.renderSearch,
          switcherIcon = _this$props5.switcherIcon,
          searchHalfCheckedKeys = _this$props5.searchHalfCheckedKeys;
      var _this$context$rcTreeS = this.context.rcTreeSelect,
          onPopupKeyDown = _this$context$rcTreeS.onPopupKeyDown,
          onTreeNodeSelect = _this$context$rcTreeS.onTreeNodeSelect,
          onTreeNodeCheck = _this$context$rcTreeS.onTreeNodeCheck;
      var loadData = this.getLoadData();
      var treeProps = {};

      if (treeCheckable) {
        treeProps.checkedKeys = keyList;
      } else {
        treeProps.selectedKeys = keyList;
      }

      var $notFound;
      var $treeNodes;

      if (filteredTreeNodes) {
        if (filteredTreeNodes.length) {
          treeProps.checkStrictly = true;
          $treeNodes = filteredTreeNodes; // Fill halfCheckedKeys

          if (treeCheckable && !treeCheckStrictly) {
            treeProps.checkedKeys = {
              checked: keyList,
              halfChecked: searchHalfCheckedKeys
            };
          }
        } else {
          $notFound = this.renderNotFound();
        }
      } else if (!treeNodes || !treeNodes.length) {
        $notFound = this.renderNotFound();
      } else {
        $treeNodes = treeNodes;
      }

      var $tree;

      if ($notFound) {
        $tree = $notFound;
      } else {
        $tree = React__default.createElement(Tree, _extends$7({
          ref: this.treeRef,
          prefixCls: "".concat(prefixCls, "-tree"),
          showIcon: treeIcon,
          showLine: treeLine,
          selectable: !treeCheckable,
          checkable: treeCheckable,
          checkStrictly: treeCheckStrictly,
          multiple: multiple,
          loadData: loadData,
          loadedKeys: loadedKeys,
          expandedKeys: expandedKeyList,
          filterTreeNode: this.filterTreeNode,
          onSelect: onTreeNodeSelect,
          onCheck: onTreeNodeCheck,
          onExpand: this.onTreeExpand,
          onLoad: this.onLoad,
          switcherIcon: switcherIcon
        }, treeProps), $treeNodes);
      }

      return React__default.createElement("div", {
        role: "listbox",
        id: ariaId,
        onKeyDown: onPopupKeyDown,
        tabIndex: -1
      }, renderSearch ? renderSearch() : null, $tree);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var _ref = prevState || {},
          _ref$prevProps = _ref.prevProps,
          prevProps = _ref$prevProps === void 0 ? {} : _ref$prevProps,
          loadedKeys = _ref.loadedKeys,
          expandedKeyList = _ref.expandedKeyList,
          cachedExpandedKeyList = _ref.cachedExpandedKeyList;

      var valueList = nextProps.valueList,
          valueEntities = nextProps.valueEntities,
          keyEntities = nextProps.keyEntities,
          treeExpandedKeys = nextProps.treeExpandedKeys,
          filteredTreeNodes = nextProps.filteredTreeNodes,
          upperSearchValue = nextProps.upperSearchValue;
      var newState = {
        prevProps: nextProps
      }; // Check value update

      if (valueList !== prevProps.valueList) {
        newState.keyList = valueList.map(function (_ref2) {
          var value = _ref2.value;
          return valueEntities[value];
        }).filter(function (entity) {
          return entity;
        }).map(function (_ref3) {
          var key = _ref3.key;
          return key;
        });
      } // Show all when tree is in filter mode


      if (!treeExpandedKeys && filteredTreeNodes && filteredTreeNodes.length && filteredTreeNodes !== prevProps.filteredTreeNodes) {
        newState.expandedKeyList = Object.keys(keyEntities);
      } // Cache `expandedKeyList` when filter set


      if (upperSearchValue && !prevProps.upperSearchValue) {
        newState.cachedExpandedKeyList = expandedKeyList;
      } else if (!upperSearchValue && prevProps.upperSearchValue && !treeExpandedKeys) {
        newState.expandedKeyList = cachedExpandedKeyList || [];
        newState.cachedExpandedKeyList = [];
      } // Use expandedKeys if provided


      if (prevProps.treeExpandedKeys !== treeExpandedKeys) {
        newState.expandedKeyList = treeExpandedKeys;
      } // Clean loadedKeys if key not exist in keyEntities anymore


      if (nextProps.loadData) {
        newState.loadedKeys = loadedKeys.filter(function (key) {
          return key in keyEntities;
        });
      }

      return newState;
    }
  }]);

  return BasePopup;
}(React__default.Component);

_defineProperty$8(BasePopup, "propTypes", {
  prefixCls: PropTypes.string,
  upperSearchValue: PropTypes.string,
  valueList: PropTypes.array,
  searchHalfCheckedKeys: PropTypes.array,
  valueEntities: PropTypes.object,
  keyEntities: PropTypes.object,
  treeIcon: PropTypes.bool,
  treeLine: PropTypes.bool,
  treeNodeFilterProp: PropTypes.string,
  treeCheckable: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
  treeCheckStrictly: PropTypes.bool,
  treeDefaultExpandAll: PropTypes.bool,
  treeDefaultExpandedKeys: PropTypes.array,
  treeExpandedKeys: PropTypes.array,
  loadData: PropTypes.func,
  multiple: PropTypes.bool,
  onTreeExpand: PropTypes.func,
  treeNodes: PropTypes.node,
  filteredTreeNodes: PropTypes.node,
  notFoundContent: PropTypes.node,
  ariaId: PropTypes.string,
  switcherIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  // HOC
  renderSearch: PropTypes.func,
  onTreeExpanded: PropTypes.func
});

_defineProperty$8(BasePopup, "contextTypes", {
  rcTreeSelect: PropTypes.shape(_objectSpread$7({}, popupContextTypes))
});

polyfill(BasePopup);

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(Object(source), true).forEach(function (key) { _defineProperty$7(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

function _classCallCheck$6(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$6(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$6(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$6(Constructor.prototype, protoProps); return Constructor; }

function _possibleConstructorReturn$6(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$6(self); }

function _getPrototypeOf$6(o) { _getPrototypeOf$6 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$6(o); }

function _assertThisInitialized$6(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits$6(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$6(subClass, superClass); }

function _setPrototypeOf$6(o, p) { _setPrototypeOf$6 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$6(o, p); }

function _defineProperty$7(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Selector$1 = generateSelector('single');

var SingleSelector =
/*#__PURE__*/
function (_React$Component) {
  _inherits$6(SingleSelector, _React$Component);

  function SingleSelector() {
    var _this;

    _classCallCheck$6(this, SingleSelector);

    _this = _possibleConstructorReturn$6(this, _getPrototypeOf$6(SingleSelector).call(this));

    _defineProperty$7(_assertThisInitialized$6(_this), "focus", function () {
      _this.selectorRef.current.focus();
    });

    _defineProperty$7(_assertThisInitialized$6(_this), "blur", function () {
      _this.selectorRef.current.blur();
    });

    _defineProperty$7(_assertThisInitialized$6(_this), "renderSelection", function () {
      var _this$props = _this.props,
          selectorValueList = _this$props.selectorValueList,
          placeholder = _this$props.placeholder,
          prefixCls = _this$props.prefixCls;
      var innerNode;

      if (selectorValueList.length) {
        var _selectorValueList$ = selectorValueList[0],
            label = _selectorValueList$.label,
            value = _selectorValueList$.value;
        innerNode = React__default.createElement("span", {
          key: "value",
          title: toTitle(label),
          className: "".concat(prefixCls, "-selection-selected-value")
        }, label || value);
      } else {
        innerNode = React__default.createElement("span", {
          key: "placeholder",
          className: "".concat(prefixCls, "-selection__placeholder")
        }, placeholder);
      }

      return React__default.createElement("span", {
        className: "".concat(prefixCls, "-selection__rendered")
      }, innerNode);
    });

    _this.selectorRef = createRef();
    return _this;
  }

  _createClass$6(SingleSelector, [{
    key: "render",
    value: function render() {
      return React__default.createElement(Selector$1, _extends$6({}, this.props, {
        ref: this.selectorRef,
        renderSelection: this.renderSelection
      }));
    }
  }]);

  return SingleSelector;
}(React__default.Component);

_defineProperty$7(SingleSelector, "propTypes", _objectSpread$6({}, selectorPropTypes));

var STATUS_ADD = 'add';
var STATUS_KEEP = 'keep';
var STATUS_REMOVE = 'remove';
var STATUS_REMOVED = 'removed';

function wrapKeyToObject(key) {
  var keyObj = void 0;
  if (key && typeof key === 'object' && 'key' in key) {
    keyObj = key;
  } else {
    keyObj = { key: key };
  }
  return _extends$a({}, keyObj, {
    key: String(keyObj.key)
  });
}

function parseKeys() {
  var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  return keys.map(wrapKeyToObject);
}

function diffKeys() {
  var prevKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var currentKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var list = [];
  var currentIndex = 0;
  var currentLen = currentKeys.length;

  var prevKeyObjects = parseKeys(prevKeys);
  var currentKeyObjects = parseKeys(currentKeys);

  // Check prev keys to insert or keep
  prevKeyObjects.forEach(function (keyObj) {
    var hit = false;

    for (var i = currentIndex; i < currentLen; i += 1) {
      var currentKeyObj = currentKeyObjects[i];
      if (currentKeyObj.key === keyObj.key) {
        // New added keys should add before current key
        if (currentIndex < i) {
          list = list.concat(currentKeyObjects.slice(currentIndex, i).map(function (obj) {
            return _extends$a({}, obj, { status: STATUS_ADD });
          }));
          currentIndex = i;
        }
        list.push(_extends$a({}, currentKeyObj, {
          status: STATUS_KEEP
        }));
        currentIndex += 1;

        hit = true;
        break;
      }
    }

    // If not hit, it means key is removed
    if (!hit) {
      list.push(_extends$a({}, keyObj, {
        status: STATUS_REMOVE
      }));
    }
  });

  // Add rest to the list
  if (currentIndex < currentLen) {
    list = list.concat(currentKeyObjects.slice(currentIndex).map(function (obj) {
      return _extends$a({}, obj, { status: STATUS_ADD });
    }));
  }

  /**
   * Merge same key when it remove and add again:
   *    [1 - add, 2 - keep, 1 - remove] -> [1 - keep, 2 - keep]
   */
  var keys = {};
  list.forEach(function (_ref) {
    var key = _ref.key;

    keys[key] = (keys[key] || 0) + 1;
  });
  var duplicatedKeys = Object.keys(keys).filter(function (key) {
    return keys[key] > 1;
  });
  duplicatedKeys.forEach(function (matchKey) {
    // Remove `STATUS_REMOVE` node.
    list = list.filter(function (_ref2) {
      var key = _ref2.key,
          status = _ref2.status;
      return key !== matchKey || status !== STATUS_REMOVE;
    });

    // Update `STATUS_ADD` to `STATUS_KEEP`
    list.forEach(function (node) {
      if (node.key === matchKey) {
        node.status = STATUS_KEEP;
      }
    });
  });

  return list;
}

var MOTION_PROP_NAMES = Object.keys(MotionPropTypes);

function genCSSMotionList(transitionSupport) {
  var CSSMotion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : OriginCSSMotion;

  var CSSMotionList = function (_React$Component) {
    _inherits$c(CSSMotionList, _React$Component);

    function CSSMotionList() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck$c(this, CSSMotionList);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn$c(this, (_ref = CSSMotionList.__proto__ || Object.getPrototypeOf(CSSMotionList)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        keyEntities: []
      }, _this.removeKey = function (removeKey) {
        _this.setState(function (_ref2) {
          var keyEntities = _ref2.keyEntities;
          return {
            keyEntities: keyEntities.map(function (entity) {
              if (entity.key !== removeKey) return entity;
              return _extends$a({}, entity, {
                status: STATUS_REMOVED
              });
            })
          };
        });
      }, _temp), _possibleConstructorReturn$c(_this, _ret);
    }

    _createClass$c(CSSMotionList, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var keyEntities = this.state.keyEntities;

        var _props = this.props,
            component = _props.component,
            children = _props.children,
            restProps = _objectWithoutProperties(_props, ['component', 'children']);

        var Component = component || React__default.Fragment;

        var motionProps = {};
        MOTION_PROP_NAMES.forEach(function (prop) {
          motionProps[prop] = restProps[prop];
          delete restProps[prop];
        });
        delete restProps.keys;

        return React__default.createElement(
          Component,
          restProps,
          keyEntities.map(function (_ref3) {
            var status = _ref3.status,
                eventProps = _objectWithoutProperties(_ref3, ['status']);

            var visible = status === STATUS_ADD || status === STATUS_KEEP;
            return React__default.createElement(
              CSSMotion,
              _extends$a({}, motionProps, {
                key: eventProps.key,
                visible: visible,
                eventProps: eventProps,
                onLeaveEnd: function onLeaveEnd() {
                  if (motionProps.onLeaveEnd) {
                    motionProps.onLeaveEnd.apply(motionProps, arguments);
                  }
                  _this2.removeKey(eventProps.key);
                }
              }),
              children
            );
          })
        );
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(_ref4, _ref5) {
        var keys = _ref4.keys;
        var keyEntities = _ref5.keyEntities;

        var parsedKeyObjects = parseKeys(keys);

        // Always as keep when motion not support
        if (!transitionSupport) {
          return {
            keyEntities: parsedKeyObjects.map(function (obj) {
              return _extends$a({}, obj, { status: STATUS_KEEP });
            })
          };
        }

        var mixedKeyEntities = diffKeys(keyEntities, parsedKeyObjects);

        var keyEntitiesLen = keyEntities.length;
        return {
          keyEntities: mixedKeyEntities.filter(function (entity) {
            // IE 9 not support Array.prototype.find
            var prevEntity = null;
            for (var i = 0; i < keyEntitiesLen; i += 1) {
              var currentEntity = keyEntities[i];
              if (currentEntity.key === entity.key) {
                prevEntity = currentEntity;
                break;
              }
            }

            // Remove if already mark as removed
            if (prevEntity && prevEntity.status === STATUS_REMOVED && entity.status === STATUS_REMOVE) {
              return false;
            }
            return true;
          })
        };
      }
    }]);

    return CSSMotionList;
  }(React__default.Component);

  CSSMotionList.propTypes = _extends$a({}, CSSMotion.propTypes, {
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    keys: PropTypes.array
  });
  CSSMotionList.defaultProps = {
    component: 'div'
  };


  polyfill(CSSMotionList);

  return CSSMotionList;
}

var CSSMotionList = genCSSMotionList(supportTransition);

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { _defineProperty$6(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck$5(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$5(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$5(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$5(Constructor.prototype, protoProps); return Constructor; }

function _possibleConstructorReturn$5(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$5(self); }

function _getPrototypeOf$5(o) { _getPrototypeOf$5 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$5(o); }

function _assertThisInitialized$5(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits$5(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$5(subClass, superClass); }

function _setPrototypeOf$5(o, p) { _setPrototypeOf$5 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$5(o, p); }

function _defineProperty$6(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Selection =
/*#__PURE__*/
function (_React$Component) {
  _inherits$5(Selection, _React$Component);

  function Selection() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck$5(this, Selection);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn$5(this, (_getPrototypeOf2 = _getPrototypeOf$5(Selection)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty$6(_assertThisInitialized$5(_this), "onRemove", function (event) {
      var _this$props = _this.props,
          onRemove = _this$props.onRemove,
          value = _this$props.value;
      onRemove(event, value);
      event.stopPropagation();
    });

    return _this;
  }

  _createClass$5(Selection, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          maxTagTextLength = _this$props2.maxTagTextLength,
          className = _this$props2.className,
          style = _this$props2.style,
          label = _this$props2.label,
          value = _this$props2.value,
          onRemove = _this$props2.onRemove,
          removeIcon = _this$props2.removeIcon;
      var content = label || value;

      if (maxTagTextLength && typeof content === 'string' && content.length > maxTagTextLength) {
        content = "".concat(content.slice(0, maxTagTextLength), "...");
      }

      return React__default.createElement("li", _extends$5({
        style: _objectSpread$5({}, UNSELECTABLE_STYLE, {}, style)
      }, UNSELECTABLE_ATTRIBUTE, {
        role: "menuitem",
        className: classNames("".concat(prefixCls, "-selection__choice"), className),
        title: toTitle(label)
      }), onRemove && React__default.createElement("span", {
        className: "".concat(prefixCls, "-selection__choice__remove"),
        onClick: this.onRemove
      }, typeof removeIcon === 'function' ? React__default.createElement(removeIcon, _objectSpread$5({}, this.props)) : removeIcon), React__default.createElement("span", {
        className: "".concat(prefixCls, "-selection__choice__content")
      }, content));
    }
  }]);

  return Selection;
}(React__default.Component);

_defineProperty$6(Selection, "propTypes", {
  prefixCls: PropTypes.string,
  maxTagTextLength: PropTypes.number,
  onRemove: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  label: PropTypes.node,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  removeIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
});

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { _defineProperty$5(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$4(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$4(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$4(Constructor.prototype, protoProps); return Constructor; }

function _possibleConstructorReturn$4(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$4(self); }

function _getPrototypeOf$4(o) { _getPrototypeOf$4 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$4(o); }

function _assertThisInitialized$4(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits$4(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$4(subClass, superClass); }

function _setPrototypeOf$4(o, p) { _setPrototypeOf$4 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$4(o, p); }

function _defineProperty$5(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var searchContextTypes = {
  onSearchInputChange: PropTypes.func.isRequired
};

var SearchInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits$4(SearchInput, _React$Component);

  function SearchInput() {
    var _this;

    _classCallCheck$4(this, SearchInput);

    _this = _possibleConstructorReturn$4(this, _getPrototypeOf$4(SearchInput).call(this));

    _defineProperty$5(_assertThisInitialized$4(_this), "alignInputWidth", function () {
      _this.inputRef.current.style.width = "".concat(_this.mirrorInputRef.current.clientWidth, "px");
    });

    _defineProperty$5(_assertThisInitialized$4(_this), "focus", function (isDidMount) {
      if (_this.inputRef.current) {
        _this.inputRef.current.focus();

        if (isDidMount) {
          setTimeout(function () {
            _this.inputRef.current.focus();
          }, 0);
        }
      }
    });

    _defineProperty$5(_assertThisInitialized$4(_this), "blur", function () {
      if (_this.inputRef.current) {
        _this.inputRef.current.blur();
      }
    });

    _this.inputRef = createRef();
    _this.mirrorInputRef = createRef();
    return _this;
  }

  _createClass$4(SearchInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          open = _this$props.open,
          needAlign = _this$props.needAlign;

      if (needAlign) {
        this.alignInputWidth();
      }

      if (open) {
        this.focus(true);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props2 = this.props,
          open = _this$props2.open,
          searchValue = _this$props2.searchValue,
          needAlign = _this$props2.needAlign;

      if (open && prevProps.open !== open) {
        this.focus();
      }

      if (needAlign && searchValue !== prevProps.searchValue) {
        this.alignInputWidth();
      }
    }
    /**
     * `scrollWidth` is not correct in IE, do the workaround.
     * ref: https://github.com/react-component/tree-select/issues/65
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          searchValue = _this$props3.searchValue,
          prefixCls = _this$props3.prefixCls,
          disabled = _this$props3.disabled,
          renderPlaceholder = _this$props3.renderPlaceholder,
          open = _this$props3.open,
          ariaId = _this$props3.ariaId;
      var _this$context$rcTreeS = this.context.rcTreeSelect,
          onSearchInputChange = _this$context$rcTreeS.onSearchInputChange,
          onSearchInputKeyDown = _this$context$rcTreeS.onSearchInputKeyDown;
      return React__default.createElement("span", {
        className: "".concat(prefixCls, "-search__field__wrap")
      }, React__default.createElement("input", {
        type: "text",
        ref: this.inputRef,
        onChange: onSearchInputChange,
        onKeyDown: onSearchInputKeyDown,
        value: searchValue,
        disabled: disabled,
        className: "".concat(prefixCls, "-search__field"),
        "aria-label": "filter select",
        "aria-autocomplete": "list",
        "aria-controls": open ? ariaId : undefined,
        "aria-multiline": "false"
      }), React__default.createElement("span", {
        ref: this.mirrorInputRef,
        className: "".concat(prefixCls, "-search__field__mirror")
      }, searchValue, "\xA0"), renderPlaceholder ? renderPlaceholder() : null);
    }
  }]);

  return SearchInput;
}(React__default.Component);

_defineProperty$5(SearchInput, "propTypes", {
  open: PropTypes.bool,
  searchValue: PropTypes.string,
  prefixCls: PropTypes.string,
  disabled: PropTypes.bool,
  renderPlaceholder: PropTypes.func,
  needAlign: PropTypes.bool,
  ariaId: PropTypes.string
});

_defineProperty$5(SearchInput, "contextTypes", {
  rcTreeSelect: PropTypes.shape(_objectSpread$4({}, searchContextTypes))
});

polyfill(SearchInput);

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }
var NODE_SELECTOR = 'selector';
var NODE_SEARCH = 'search';
var TREE_SELECT_EMPTY_VALUE_KEY = 'RC_TREE_SELECT_EMPTY_VALUE_KEY';

var SelectorList = function SelectorList(props) {
  var selectorValueList = props.selectorValueList,
      choiceTransitionName = props.choiceTransitionName,
      prefixCls = props.prefixCls,
      onChoiceAnimationLeave = props.onChoiceAnimationLeave,
      labelInValue = props.labelInValue,
      maxTagCount = props.maxTagCount,
      maxTagPlaceholder = props.maxTagPlaceholder,
      showSearch = props.showSearch,
      valueEntities = props.valueEntities,
      inputRef = props.inputRef,
      onMultipleSelectorRemove = props.onMultipleSelectorRemove;
  var nodeKeys = []; // Check if `maxTagCount` is set

  var myValueList = selectorValueList;

  if (maxTagCount >= 0) {
    myValueList = selectorValueList.slice(0, maxTagCount);
  } // Basic selectors


  myValueList.forEach(function (_ref) {
    var label = _ref.label,
        value = _ref.value;

    var _ref2 = (valueEntities[value] || {}).node || {},
        _ref2$props = _ref2.props;

    _ref2$props = _ref2$props === void 0 ? {} : _ref2$props;
    var disabled = _ref2$props.disabled;
    nodeKeys.push({
      key: value,
      type: NODE_SELECTOR,
      label: label,
      value: value,
      disabled: disabled
    });
  }); // Rest node count

  if (maxTagCount >= 0 && maxTagCount < selectorValueList.length) {
    var content = "+ ".concat(selectorValueList.length - maxTagCount, " ...");

    if (typeof maxTagPlaceholder === 'string') {
      content = maxTagPlaceholder;
    } else if (typeof maxTagPlaceholder === 'function') {
      var restValueList = selectorValueList.slice(maxTagCount);
      content = maxTagPlaceholder(labelInValue ? restValueList : restValueList.map(function (_ref3) {
        var value = _ref3.value;
        return value;
      }));
    }

    nodeKeys.push({
      key: 'rc-tree-select-internal-max-tag-counter',
      type: NODE_SELECTOR,
      label: content,
      value: null,
      disabled: true
    });
  } // Search node


  if (showSearch !== false) {
    nodeKeys.push({
      key: '__input',
      type: NODE_SEARCH
    });
  }

  return React__default.createElement(CSSMotionList, {
    keys: nodeKeys,
    className: "".concat(prefixCls, "-selection__rendered"),
    component: "ul",
    role: "menubar",
    motionName: choiceTransitionName,
    onLeaveEnd: onChoiceAnimationLeave
  }, function (_ref4) {
    var type = _ref4.type,
        label = _ref4.label,
        value = _ref4.value,
        disabled = _ref4.disabled,
        className = _ref4.className,
        style = _ref4.style;

    if (type === NODE_SELECTOR) {
      return React__default.createElement(Selection, _extends$4({}, props, {
        className: className,
        style: style,
        key: value || TREE_SELECT_EMPTY_VALUE_KEY,
        label: label,
        value: value,
        onRemove: disabled ? null : onMultipleSelectorRemove
      }));
    }

    return React__default.createElement("li", {
      className: "".concat(prefixCls, "-search ").concat(prefixCls, "-search--inline")
    }, React__default.createElement(SearchInput, _extends$4({}, props, {
      ref: inputRef,
      needAlign: true
    })));
  });
};

SelectorList.propTypes = {
  selectorValueList: PropTypes.array,
  choiceTransitionName: PropTypes.string,
  prefixCls: PropTypes.string,
  onChoiceAnimationLeave: PropTypes.func,
  labelInValue: PropTypes.bool,
  showSearch: PropTypes.bool,
  maxTagCount: PropTypes.number,
  maxTagPlaceholder: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  valueEntities: PropTypes.object,
  inputRef: PropTypes.func,
  onMultipleSelectorRemove: PropTypes.func
};

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty$4(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$3(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$3(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$3(Constructor.prototype, protoProps); return Constructor; }

function _possibleConstructorReturn$3(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$3(self); }

function _getPrototypeOf$3(o) { _getPrototypeOf$3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$3(o); }

function _assertThisInitialized$3(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$3(subClass, superClass); }

function _setPrototypeOf$3(o, p) { _setPrototypeOf$3 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$3(o, p); }

function _defineProperty$4(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Selector = generateSelector('multiple');
var multipleSelectorContextTypes = {
  onMultipleSelectorRemove: PropTypes.func.isRequired
};

var MultipleSelector =
/*#__PURE__*/
function (_React$Component) {
  _inherits$3(MultipleSelector, _React$Component);

  function MultipleSelector() {
    var _this;

    _classCallCheck$3(this, MultipleSelector);

    _this = _possibleConstructorReturn$3(this, _getPrototypeOf$3(MultipleSelector).call(this));

    _defineProperty$4(_assertThisInitialized$3(_this), "onPlaceholderClick", function () {
      _this.inputRef.current.focus();
    });

    _defineProperty$4(_assertThisInitialized$3(_this), "focus", function () {
      _this.inputRef.current.focus();
    });

    _defineProperty$4(_assertThisInitialized$3(_this), "blur", function () {
      _this.inputRef.current.blur();
    });

    _defineProperty$4(_assertThisInitialized$3(_this), "renderPlaceholder", function () {
      var _this$props = _this.props,
          prefixCls = _this$props.prefixCls,
          placeholder = _this$props.placeholder,
          searchPlaceholder = _this$props.searchPlaceholder,
          searchValue = _this$props.searchValue,
          selectorValueList = _this$props.selectorValueList;
      var currentPlaceholder = placeholder || searchPlaceholder;
      if (!currentPlaceholder) return null;
      var hidden = searchValue || selectorValueList.length; // [Legacy] Not remove the placeholder

      return React__default.createElement("span", {
        style: {
          display: hidden ? 'none' : 'block'
        },
        onClick: _this.onPlaceholderClick,
        className: "".concat(prefixCls, "-search__field__placeholder")
      }, currentPlaceholder);
    });

    _defineProperty$4(_assertThisInitialized$3(_this), "renderSelection", function () {
      var onMultipleSelectorRemove = _this.context.rcTreeSelect.onMultipleSelectorRemove;
      return React__default.createElement(SelectorList, _extends$3({}, _this.props, {
        onMultipleSelectorRemove: onMultipleSelectorRemove,
        inputRef: _this.inputRef
      }));
    });

    _this.inputRef = createRef();
    return _this;
  }

  _createClass$3(MultipleSelector, [{
    key: "render",
    value: function render() {
      return React__default.createElement(Selector, _extends$3({}, this.props, {
        tabIndex: -1,
        showArrow: false,
        renderSelection: this.renderSelection,
        renderPlaceholder: this.renderPlaceholder
      }));
    }
  }]);

  return MultipleSelector;
}(React__default.Component);

_defineProperty$4(MultipleSelector, "propTypes", _objectSpread$3({}, selectorPropTypes, {
  selectorValueList: PropTypes.array,
  disabled: PropTypes.bool,
  searchValue: PropTypes.string,
  labelInValue: PropTypes.bool,
  maxTagCount: PropTypes.number,
  maxTagPlaceholder: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  onChoiceAnimationLeave: PropTypes.func
}));

_defineProperty$4(MultipleSelector, "contextTypes", {
  rcTreeSelect: PropTypes.shape(_objectSpread$3({}, multipleSelectorContextTypes, {
    onSearchInputChange: PropTypes.func
  }))
});

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty$3(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$2(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$2(Constructor.prototype, protoProps); return Constructor; }

function _possibleConstructorReturn$2(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$2(self); }

function _getPrototypeOf$2(o) { _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$2(o); }

function _assertThisInitialized$2(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$2(subClass, superClass); }

function _setPrototypeOf$2(o, p) { _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$2(o, p); }

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SinglePopup =
/*#__PURE__*/
function (_React$Component) {
  _inherits$2(SinglePopup, _React$Component);

  function SinglePopup() {
    var _this;

    _classCallCheck$2(this, SinglePopup);

    _this = _possibleConstructorReturn$2(this, _getPrototypeOf$2(SinglePopup).call(this));

    _defineProperty$3(_assertThisInitialized$2(_this), "onPlaceholderClick", function () {
      _this.inputRef.current.focus();
    });

    _defineProperty$3(_assertThisInitialized$2(_this), "getTree", function () {
      return _this.popupRef.current && _this.popupRef.current.getTree();
    });

    _defineProperty$3(_assertThisInitialized$2(_this), "renderPlaceholder", function () {
      var _this$props = _this.props,
          searchPlaceholder = _this$props.searchPlaceholder,
          searchValue = _this$props.searchValue,
          prefixCls = _this$props.prefixCls;

      if (!searchPlaceholder) {
        return null;
      }

      return React__default.createElement("span", {
        style: {
          display: searchValue ? 'none' : 'block'
        },
        onClick: _this.onPlaceholderClick,
        className: "".concat(prefixCls, "-search__field__placeholder")
      }, searchPlaceholder);
    });

    _defineProperty$3(_assertThisInitialized$2(_this), "renderSearch", function () {
      var _this$props2 = _this.props,
          showSearch = _this$props2.showSearch,
          dropdownPrefixCls = _this$props2.dropdownPrefixCls;

      if (!showSearch) {
        return null;
      }

      return React__default.createElement("span", {
        ref: _this.searchRef,
        className: "".concat(dropdownPrefixCls, "-search")
      }, React__default.createElement(SearchInput, _extends$2({}, _this.props, {
        ref: _this.inputRef,
        renderPlaceholder: _this.renderPlaceholder
      })));
    });

    _this.inputRef = createRef();
    _this.searchRef = createRef();
    _this.popupRef = createRef();
    return _this;
  }

  _createClass$2(SinglePopup, [{
    key: "render",
    value: function render() {
      return React__default.createElement(BasePopup, _extends$2({
        ref: this.popupRef
      }, this.props, {
        renderSearch: this.renderSearch
      }));
    }
  }]);

  return SinglePopup;
}(React__default.Component);

_defineProperty$3(SinglePopup, "propTypes", _objectSpread$2({}, BasePopup.propTypes, {
  searchValue: PropTypes.string,
  showSearch: PropTypes.bool,
  dropdownPrefixCls: PropTypes.string,
  disabled: PropTypes.bool,
  searchPlaceholder: PropTypes.string
}));

var internalValProp = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);
function genArrProps(propType) {
  return PropTypes.oneOfType([propType, PropTypes.arrayOf(propType)]);
}
/**
 * Origin code check `multiple` is true when `treeCheckStrictly` & `labelInValue`.
 * But in process logic is already cover to array.
 * Check array is not necessary. Let's simplify this check logic.
 */

function valueProp() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var props = args[0],
      propName = args[1],
      Component = args[2];

  if (isLabelInValue(props)) {
    var _err = genArrProps(PropTypes.shape({
      label: PropTypes.node,
      value: internalValProp
    })).apply(void 0, args);

    if (_err) {
      return new Error("Invalid prop `".concat(propName, "` supplied to `").concat(Component, "`. ") + "You should use { label: string, value: string | number } or [{ label: string, value: string | number }] instead.");
    }

    return null;
  }

  var err = genArrProps(internalValProp).apply(void 0, args);

  if (err) {
    return new Error("Invalid prop `".concat(propName, "` supplied to `").concat(Component, "`. ") + "You should use string or [string] instead.");
  }

  return null;
}

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/**
 * SelectNode wrapped the tree node.
 * Let's use SelectNode instead of TreeNode
 * since TreeNode is so confuse here.
 */

var SelectNode = function SelectNode(props) {
  return React__default.createElement(ContextTreeNode, props);
};

SelectNode.propTypes = _objectSpread$1({}, ContextTreeNode.propTypes, {
  value: valueProp
}); // Let Tree trade as TreeNode to reuse this for performance saving.

SelectNode.isTreeNode = 1;

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

var Select =
/*#__PURE__*/
function (_React$Component) {
  _inherits$1(Select, _React$Component);

  function Select(_props) {
    var _this;

    _classCallCheck$1(this, Select);

    _this = _possibleConstructorReturn$1(this, _getPrototypeOf$1(Select).call(this, _props));

    _defineProperty$1(_assertThisInitialized$1(_this), "onSelectorFocus", function () {
      _this.setState({
        focused: true
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onSelectorBlur", function () {
      _this.setState({
        focused: false
      }); // TODO: Close when Popup is also not focused
      // this.setState({ open: false });

    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onComponentKeyDown", function (event) {
      var open = _this.state.open;
      var keyCode = event.keyCode;

      if (!open) {
        if ([KeyCode.ENTER, KeyCode.DOWN].indexOf(keyCode) !== -1) {
          _this.setOpenState(true);
        }
      } else if (KeyCode.ESC === keyCode) {
        _this.setOpenState(false);
      } else if ([KeyCode.UP, KeyCode.DOWN, KeyCode.LEFT, KeyCode.RIGHT].indexOf(keyCode) !== -1) {
        // TODO: Handle `open` state
        event.stopPropagation();
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onDeselect", function (wrappedValue, node, nodeEventInfo) {
      var onDeselect = _this.props.onDeselect;
      if (!onDeselect) return;
      onDeselect(wrappedValue, node, nodeEventInfo);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onSelectorClear", function (event) {
      var disabled = _this.props.disabled;
      if (disabled) return;

      _this.triggerChange([], []);

      if (!_this.isSearchValueControlled()) {
        _this.setUncontrolledState({
          searchValue: '',
          filteredTreeNodes: null
        });
      }

      event.stopPropagation();
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onMultipleSelectorRemove", function (event, removeValue) {
      event.stopPropagation();
      var _this$state = _this.state,
          valueList = _this$state.valueList,
          missValueList = _this$state.missValueList,
          valueEntities = _this$state.valueEntities;
      var _this$props = _this.props,
          treeCheckable = _this$props.treeCheckable,
          treeCheckStrictly = _this$props.treeCheckStrictly,
          treeNodeLabelProp = _this$props.treeNodeLabelProp,
          disabled = _this$props.disabled;
      if (disabled) return; // Find trigger entity

      var triggerEntity = valueEntities[removeValue]; // Clean up value

      var newValueList = valueList;

      if (triggerEntity) {
        // If value is in tree
        if (treeCheckable && !treeCheckStrictly) {
          newValueList = valueList.filter(function (_ref) {
            var value = _ref.value;
            var entity = valueEntities[value];
            return !isPosRelated(entity.pos, triggerEntity.pos);
          });
        } else {
          newValueList = valueList.filter(function (_ref2) {
            var value = _ref2.value;
            return value !== removeValue;
          });
        }
      }

      var triggerNode = triggerEntity ? triggerEntity.node : null;
      var extraInfo = {
        triggerValue: removeValue,
        triggerNode: triggerNode
      };
      var deselectInfo = {
        node: triggerNode
      }; // [Legacy] Little hack on this to make same action as `onCheck` event.

      if (treeCheckable) {
        var filteredEntityList = newValueList.map(function (_ref3) {
          var value = _ref3.value;
          return valueEntities[value];
        });
        deselectInfo.event = 'check';
        deselectInfo.checked = false;
        deselectInfo.checkedNodes = filteredEntityList.map(function (_ref4) {
          var node = _ref4.node;
          return node;
        });
        deselectInfo.checkedNodesPositions = filteredEntityList.map(function (_ref5) {
          var node = _ref5.node,
              pos = _ref5.pos;
          return {
            node: node,
            pos: pos
          };
        });

        if (treeCheckStrictly) {
          extraInfo.allCheckedNodes = deselectInfo.checkedNodes;
        } else {
          // TODO: It's too expansive to get `halfCheckedKeys` in onDeselect. Not pass this.
          extraInfo.allCheckedNodes = flatToHierarchy(filteredEntityList).map(function (_ref6) {
            var node = _ref6.node;
            return node;
          });
        }
      } else {
        deselectInfo.event = 'select';
        deselectInfo.selected = false;
        deselectInfo.selectedNodes = newValueList.map(function (_ref7) {
          var value = _ref7.value;
          return (valueEntities[value] || {}).node;
        });
      } // Some value user pass prop is not in the tree, we also need clean it


      var newMissValueList = missValueList.filter(function (_ref8) {
        var value = _ref8.value;
        return value !== removeValue;
      });
      var wrappedValue;

      if (_this.isLabelInValue()) {
        wrappedValue = {
          label: triggerNode ? triggerNode.props[treeNodeLabelProp] : null,
          value: removeValue
        };
      } else {
        wrappedValue = removeValue;
      }

      _this.onDeselect(wrappedValue, triggerNode, deselectInfo);

      _this.triggerChange(newMissValueList, newValueList, extraInfo);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onValueTrigger", function (isAdd, nodeList, nodeEventInfo, nodeExtraInfo) {
      var node = nodeEventInfo.node;
      var value = node.props.value;
      var _this$state2 = _this.state,
          missValueList = _this$state2.missValueList,
          valueEntities = _this$state2.valueEntities,
          keyEntities = _this$state2.keyEntities,
          searchValue = _this$state2.searchValue;
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          inputValue = _this$props2.inputValue,
          treeNodeLabelProp = _this$props2.treeNodeLabelProp,
          onSelect = _this$props2.onSelect,
          onSearch = _this$props2.onSearch,
          multiple = _this$props2.multiple,
          treeCheckable = _this$props2.treeCheckable,
          treeCheckStrictly = _this$props2.treeCheckStrictly,
          autoClearSearchValue = _this$props2.autoClearSearchValue;
      var label = node.props[treeNodeLabelProp];
      if (disabled) return; // Wrap the return value for user

      var wrappedValue;

      if (_this.isLabelInValue()) {
        wrappedValue = {
          value: value,
          label: label
        };
      } else {
        wrappedValue = value;
      } // [Legacy] Origin code not trigger `onDeselect` every time. Let's align the behaviour.


      if (isAdd) {
        if (onSelect) {
          onSelect(wrappedValue, node, nodeEventInfo);
        }
      } else {
        _this.onDeselect(wrappedValue, node, nodeEventInfo);
      } // Get wrapped value list.
      // This is a bit hack cause we use key to match the value.


      var newValueList = nodeList.map(function (_ref9) {
        var props = _ref9.props;
        return {
          value: props.value,
          label: props[treeNodeLabelProp]
        };
      }); // When is `treeCheckable` and with `searchValue`, `valueList` is not full filled.
      // We need calculate the missing nodes.

      if (treeCheckable && !treeCheckStrictly) {
        var keyList = newValueList.map(function (_ref10) {
          var val = _ref10.value;
          return valueEntities[val].key;
        });

        if (isAdd) {
          keyList = conductCheck(keyList, true, keyEntities).checkedKeys;
        } else {
          keyList = conductCheck([valueEntities[value].key], false, keyEntities, {
            checkedKeys: keyList
          }).checkedKeys;
        }

        newValueList = keyList.map(function (key) {
          var props = keyEntities[key].node.props;
          return {
            value: props.value,
            label: props[treeNodeLabelProp]
          };
        });
      } // Clean up `searchValue` when this prop is set


      if (autoClearSearchValue || inputValue === null) {
        // Clean state `searchValue` if uncontrolled
        if (!_this.isSearchValueControlled() && (multiple || treeCheckable)) {
          _this.setUncontrolledState({
            searchValue: '',
            filteredTreeNodes: null
          });
        } // Trigger onSearch if `searchValue` to be empty.
        // We should also trigger onSearch with empty string here
        // since if user use `treeExpandedKeys`, it need user have the ability to reset it.


        if (onSearch && searchValue && searchValue.length) {
          onSearch('');
        }
      } // [Legacy] Provide extra info


      var extraInfo = _objectSpread({}, nodeExtraInfo, {
        triggerValue: value,
        triggerNode: node
      });

      _this.triggerChange(missValueList, newValueList, extraInfo);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onTreeNodeSelect", function (_, nodeEventInfo) {
      var _this$state3 = _this.state,
          valueList = _this$state3.valueList,
          valueEntities = _this$state3.valueEntities;
      var _this$props3 = _this.props,
          treeCheckable = _this$props3.treeCheckable,
          multiple = _this$props3.multiple;
      if (treeCheckable) return;

      if (!multiple) {
        _this.setOpenState(false);
      }

      var isAdd = nodeEventInfo.selected;
      var selectedValue = nodeEventInfo.node.props.value;
      var newValueList;

      if (!multiple) {
        newValueList = [{
          value: selectedValue
        }];
      } else {
        newValueList = valueList.filter(function (_ref11) {
          var value = _ref11.value;
          return value !== selectedValue;
        });

        if (isAdd) {
          newValueList.push({
            value: selectedValue
          });
        }
      }

      var selectedNodes = newValueList.map(function (_ref12) {
        var value = _ref12.value;
        return valueEntities[value];
      }).filter(function (entity) {
        return entity;
      }).map(function (_ref13) {
        var node = _ref13.node;
        return node;
      });

      _this.onValueTrigger(isAdd, selectedNodes, nodeEventInfo, {
        selected: isAdd
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onTreeNodeCheck", function (_, nodeEventInfo) {
      var _this$state4 = _this.state,
          searchValue = _this$state4.searchValue,
          keyEntities = _this$state4.keyEntities,
          valueEntities = _this$state4.valueEntities,
          valueList = _this$state4.valueList;
      var treeCheckStrictly = _this.props.treeCheckStrictly;
      var checkedNodes = nodeEventInfo.checkedNodes,
          checkedNodesPositions = nodeEventInfo.checkedNodesPositions;
      var isAdd = nodeEventInfo.checked;
      var extraInfo = {
        checked: isAdd
      };
      var checkedNodeList = checkedNodes; // [Legacy] Check event provide `allCheckedNodes`.
      // When `treeCheckStrictly` or internal `searchValue` is set, TreeNode will be unrelated:
      // - Related: Show the top checked nodes and has children prop.
      // - Unrelated: Show all the checked nodes.

      if (searchValue) {
        var oriKeyList = valueList.map(function (_ref14) {
          var value = _ref14.value;
          return valueEntities[value];
        }).filter(function (entity) {
          return entity;
        }).map(function (_ref15) {
          var key = _ref15.key;
          return key;
        });
        var keyList;

        if (isAdd) {
          keyList = Array.from(new Set([].concat(_toConsumableArray(oriKeyList), _toConsumableArray(checkedNodeList.map(function (_ref16) {
            var value = _ref16.props.value;
            return valueEntities[value].key;
          })))));
        } else {
          keyList = conductCheck([nodeEventInfo.node.props.eventKey], false, keyEntities, {
            checkedKeys: oriKeyList
          }).checkedKeys;
        }

        checkedNodeList = keyList.map(function (key) {
          return keyEntities[key].node;
        }); // Let's follow as not `treeCheckStrictly` format

        extraInfo.allCheckedNodes = keyList.map(function (key) {
          return cleanEntity(keyEntities[key]);
        });
      } else if (treeCheckStrictly) {
        extraInfo.allCheckedNodes = nodeEventInfo.checkedNodes;
      } else {
        extraInfo.allCheckedNodes = flatToHierarchy(checkedNodesPositions);
      }

      _this.onValueTrigger(isAdd, checkedNodeList, nodeEventInfo, extraInfo);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onDropdownVisibleChange", function (open) {
      var _this$props4 = _this.props,
          multiple = _this$props4.multiple,
          treeCheckable = _this$props4.treeCheckable;
      var searchValue = _this.state.searchValue; // When set open success and single mode,
      // we will reset the input content.

      if (open && !multiple && !treeCheckable && searchValue) {
        _this.setUncontrolledState({
          searchValue: '',
          filteredTreeNodes: null
        });
      }

      _this.setOpenState(open, true);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onSearchInputChange", function (_ref17) {
      var value = _ref17.target.value;
      var _this$state5 = _this.state,
          treeNodes = _this$state5.treeNodes,
          valueEntities = _this$state5.valueEntities;
      var _this$props5 = _this.props,
          onSearch = _this$props5.onSearch,
          filterTreeNode = _this$props5.filterTreeNode,
          treeNodeFilterProp = _this$props5.treeNodeFilterProp;

      if (onSearch) {
        onSearch(value);
      }

      var isSet = false;

      if (!_this.isSearchValueControlled()) {
        isSet = _this.setUncontrolledState({
          searchValue: value
        });

        _this.setOpenState(true);
      }

      if (isSet) {
        // Do the search logic
        var upperSearchValue = String(value).toUpperCase();
        var filterTreeNodeFn = filterTreeNode;

        if (filterTreeNode === false) {
          // Don't filter if is false
          filterTreeNodeFn = function filterTreeNodeFn() {
            return true;
          };
        } else if (typeof filterTreeNodeFn !== 'function') {
          // When is not function (true or undefined), use inner filter
          filterTreeNodeFn = function filterTreeNodeFn(_, node) {
            var nodeValue = String(node.props[treeNodeFilterProp]).toUpperCase();
            return nodeValue.indexOf(upperSearchValue) !== -1;
          };
        }

        _this.setState({
          filteredTreeNodes: getFilterTree(treeNodes, value, filterTreeNodeFn, valueEntities, SelectNode)
        });
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onSearchInputKeyDown", function (event) {
      var _this$state6 = _this.state,
          searchValue = _this$state6.searchValue,
          valueList = _this$state6.valueList;
      var keyCode = event.keyCode;

      if (KeyCode.BACKSPACE === keyCode && _this.isMultiple() && !searchValue && valueList.length) {
        var lastValue = valueList[valueList.length - 1].value;

        _this.onMultipleSelectorRemove(event, lastValue);
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onChoiceAnimationLeave", function () {
      raf(function () {
        _this.forcePopupAlign();
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "setPopupRef", function (popup) {
      _this.popup = popup;
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "setUncontrolledState", function (state) {
      var needSync = false;
      var newState = {};
      Object.keys(state).forEach(function (name) {
        if (name in _this.props) return;
        needSync = true;
        newState[name] = state[name];
      });

      if (needSync) {
        _this.setState(newState);
      }

      return needSync;
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "setOpenState", function (open) {
      var byTrigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var onDropdownVisibleChange = _this.props.onDropdownVisibleChange;

      if (onDropdownVisibleChange && onDropdownVisibleChange(open, {
        documentClickClose: !open && byTrigger
      }) === false) {
        return;
      }

      _this.setUncontrolledState({
        open: open
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "isMultiple", function () {
      var _this$props6 = _this.props,
          multiple = _this$props6.multiple,
          treeCheckable = _this$props6.treeCheckable;
      return !!(multiple || treeCheckable);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "isLabelInValue", function () {
      return isLabelInValue(_this.props);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "isSearchValueControlled", function () {
      var inputValue = _this.props.inputValue;
      if ('searchValue' in _this.props) return true;
      return 'inputValue' in _this.props && inputValue !== null;
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "forcePopupAlign", function () {
      var $trigger = _this.selectTriggerRef.current;

      if ($trigger) {
        $trigger.forcePopupAlign();
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "delayForcePopupAlign", function () {
      // Wait 2 frame to avoid dom update & dom algin in the same time
      // https://github.com/ant-design/ant-design/issues/12031
      raf(function () {
        raf(_this.forcePopupAlign);
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "triggerChange", function (missValueList, valueList) {
      var extraInfo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var _this$state7 = _this.state,
          valueEntities = _this$state7.valueEntities,
          searchValue = _this$state7.searchValue,
          prevSelectorValueList = _this$state7.selectorValueList;
      var _this$props7 = _this.props,
          onChange = _this$props7.onChange,
          disabled = _this$props7.disabled,
          treeCheckable = _this$props7.treeCheckable,
          treeCheckStrictly = _this$props7.treeCheckStrictly;
      if (disabled) return; // Trigger

      var extra = _objectSpread({
        // [Legacy] Always return as array contains label & value
        preValue: prevSelectorValueList.map(function (_ref18) {
          var label = _ref18.label,
              value = _ref18.value;
          return {
            label: label,
            value: value
          };
        })
      }, extraInfo); // Format value by `treeCheckStrictly`


      var selectorValueList = formatSelectorValue(valueList, _this.props, valueEntities);

      if (!('value' in _this.props)) {
        var newState = {
          missValueList: missValueList,
          valueList: valueList,
          selectorValueList: selectorValueList
        };

        if (searchValue && treeCheckable && !treeCheckStrictly) {
          newState.searchHalfCheckedKeys = getHalfCheckedKeys(valueList, valueEntities);
        }

        _this.setState(newState);
      } // Only do the logic when `onChange` function provided


      if (onChange) {
        var connectValueList; // Get value by mode

        if (_this.isMultiple()) {
          connectValueList = [].concat(_toConsumableArray(missValueList), _toConsumableArray(selectorValueList));
        } else {
          connectValueList = selectorValueList.slice(0, 1);
        }

        var labelList = null;
        var returnValue;

        if (_this.isLabelInValue()) {
          returnValue = connectValueList.map(function (_ref19) {
            var label = _ref19.label,
                value = _ref19.value;
            return {
              label: label,
              value: value
            };
          });
        } else {
          labelList = [];
          returnValue = connectValueList.map(function (_ref20) {
            var label = _ref20.label,
                value = _ref20.value;
            labelList.push(label);
            return value;
          });
        }

        if (!_this.isMultiple()) {
          returnValue = returnValue[0];
        }

        onChange(returnValue, labelList, extra);
      }
    });

    var prefixAria = _props.prefixAria,
        defaultOpen = _props.defaultOpen,
        _open = _props.open;
    _this.state = {
      open: _open || defaultOpen,
      valueList: [],
      searchHalfCheckedKeys: [],
      missValueList: [],
      // Contains the value not in the tree
      selectorValueList: [],
      // Used for multiple selector
      valueEntities: {},
      keyEntities: {},
      searchValue: '',
      init: true
    };
    _this.selectorRef = createRef();
    _this.selectTriggerRef = createRef(); // ARIA need `aria-controls` props mapping
    // Since this need user input. Let's generate ourselves

    _this.ariaId = generateAriaId("".concat(prefixAria, "-list"));
    return _this;
  }

  _createClass$1(Select, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        rcTreeSelect: {
          onSelectorFocus: this.onSelectorFocus,
          onSelectorBlur: this.onSelectorBlur,
          onSelectorKeyDown: this.onComponentKeyDown,
          onSelectorClear: this.onSelectorClear,
          onMultipleSelectorRemove: this.onMultipleSelectorRemove,
          onTreeNodeSelect: this.onTreeNodeSelect,
          onTreeNodeCheck: this.onTreeNodeCheck,
          onPopupKeyDown: this.onComponentKeyDown,
          onSearchInputChange: this.onSearchInputChange,
          onSearchInputKeyDown: this.onSearchInputKeyDown
        }
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props8 = this.props,
          autoFocus = _this$props8.autoFocus,
          disabled = _this$props8.disabled;

      if (autoFocus && !disabled) {
        this.focus();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_, prevState) {
      var _this2 = this;

      var prefixCls = this.props.prefixCls;
      var _this$state8 = this.state,
          valueList = _this$state8.valueList,
          open = _this$state8.open,
          selectorValueList = _this$state8.selectorValueList,
          valueEntities = _this$state8.valueEntities;
      var isMultiple = this.isMultiple();

      if (prevState.valueList !== valueList) {
        this.forcePopupAlign();
      } // Scroll to value position, only need sync on single mode


      if (!isMultiple && selectorValueList.length && !prevState.open && open && this.popup) {
        var value = selectorValueList[0].value;

        var _this$popup$getTree = this.popup.getTree(),
            domTreeNodes = _this$popup$getTree.domTreeNodes;

        var _ref21 = valueEntities[value] || {},
            key = _ref21.key;

        var treeNode = domTreeNodes[key];

        if (treeNode) {
          var domNode = findDOMNode(treeNode);
          raf(function () {
            var popupNode = findDOMNode(_this2.popup);
            var triggerContainer = findPopupContainer(popupNode, "".concat(prefixCls, "-dropdown"));
            var searchNode = _this2.popup.searchRef.current;

            if (domNode && triggerContainer && searchNode) {
              scrollIntoView(domNode, triggerContainer, {
                onlyScrollIfNeeded: true,
                offsetTop: searchNode.offsetHeight
              });
            }
          });
        }
      }
    } // ==================== Selector ====================

  }, {
    key: "focus",
    value: function focus() {
      this.selectorRef.current.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.selectorRef.current.blur();
    } // ===================== Render =====================

  }, {
    key: "render",
    value: function render() {
      var _this$state9 = this.state,
          valueList = _this$state9.valueList,
          missValueList = _this$state9.missValueList,
          selectorValueList = _this$state9.selectorValueList,
          searchHalfCheckedKeys = _this$state9.searchHalfCheckedKeys,
          valueEntities = _this$state9.valueEntities,
          keyEntities = _this$state9.keyEntities,
          searchValue = _this$state9.searchValue,
          open = _this$state9.open,
          focused = _this$state9.focused,
          treeNodes = _this$state9.treeNodes,
          filteredTreeNodes = _this$state9.filteredTreeNodes;
      var _this$props9 = this.props,
          prefixCls = _this$props9.prefixCls,
          treeExpandedKeys = _this$props9.treeExpandedKeys,
          onTreeExpand = _this$props9.onTreeExpand;
      var isMultiple = this.isMultiple();

      var passProps = _objectSpread({}, this.props, {
        isMultiple: isMultiple,
        valueList: valueList,
        searchHalfCheckedKeys: searchHalfCheckedKeys,
        selectorValueList: [].concat(_toConsumableArray(missValueList), _toConsumableArray(selectorValueList)),
        valueEntities: valueEntities,
        keyEntities: keyEntities,
        searchValue: searchValue,
        upperSearchValue: (searchValue || '').toUpperCase(),
        // Perf save
        open: open,
        focused: focused,
        onChoiceAnimationLeave: this.onChoiceAnimationLeave,
        dropdownPrefixCls: "".concat(prefixCls, "-dropdown"),
        ariaId: this.ariaId
      });

      var Popup = isMultiple ? BasePopup : SinglePopup;
      var $popup = React__default.createElement(Popup, _extends$1({
        ref: this.setPopupRef
      }, passProps, {
        onTreeExpanded: this.delayForcePopupAlign,
        treeNodes: treeNodes,
        filteredTreeNodes: filteredTreeNodes // Tree expanded control
        ,
        treeExpandedKeys: treeExpandedKeys,
        onTreeExpand: onTreeExpand
      }));
      var Selector = isMultiple ? MultipleSelector : SingleSelector;
      var $selector = React__default.createElement(Selector, _extends$1({}, passProps, {
        ref: this.selectorRef
      }));
      return React__default.createElement(SelectTrigger, _extends$1({}, passProps, {
        ref: this.selectTriggerRef,
        popupElement: $popup,
        onKeyDown: this.onKeyDown,
        onDropdownVisibleChange: this.onDropdownVisibleChange
      }), $selector);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var _prevState$prevProps = prevState.prevProps,
          prevProps = _prevState$prevProps === void 0 ? {} : _prevState$prevProps;
      var treeCheckable = nextProps.treeCheckable,
          treeCheckStrictly = nextProps.treeCheckStrictly,
          filterTreeNode = nextProps.filterTreeNode,
          treeNodeFilterProp = nextProps.treeNodeFilterProp,
          treeDataSimpleMode = nextProps.treeDataSimpleMode;
      var newState = {
        prevProps: nextProps,
        init: false
      }; // Process the state when props updated

      function processState(propName, updater) {
        if (prevProps[propName] !== nextProps[propName]) {
          updater(nextProps[propName], prevProps[propName]);
          return true;
        }

        return false;
      }

      var valueRefresh = false; // Open

      processState('open', function (propValue) {
        newState.open = propValue;
      }); // Tree Nodes

      var treeNodes;
      var treeDataChanged = false;
      var treeDataModeChanged = false;
      processState('treeData', function (propValue) {
        treeNodes = convertDataToTree(propValue);
        treeDataChanged = true;
      });
      processState('treeDataSimpleMode', function (propValue, prevValue) {
        if (!propValue) return;
        var prev = !prevValue || prevValue === true ? {} : prevValue; // Shallow equal to avoid dynamic prop object

        if (!shallowEqual(propValue, prev)) {
          treeDataModeChanged = true;
        }
      }); // Parse by `treeDataSimpleMode`

      if (treeDataSimpleMode && (treeDataChanged || treeDataModeChanged)) {
        var simpleMapper = _objectSpread({
          id: 'id',
          pId: 'pId',
          rootPId: null
        }, treeDataSimpleMode !== true ? treeDataSimpleMode : {});

        treeNodes = convertDataToTree(parseSimpleTreeData(nextProps.treeData, simpleMapper));
      } // If `treeData` not provide, use children TreeNodes


      if (!nextProps.treeData) {
        processState('children', function (propValue) {
          treeNodes = Array.isArray(propValue) ? propValue : [propValue];
        });
      } // Convert `treeData` to entities


      if (treeNodes) {
        var entitiesMap = convertTreeToEntities(treeNodes);
        newState.treeNodes = treeNodes;
        newState.posEntities = entitiesMap.posEntities;
        newState.valueEntities = entitiesMap.valueEntities;
        newState.keyEntities = entitiesMap.keyEntities;
        valueRefresh = true;
      } // Value List


      if (prevState.init) {
        processState('defaultValue', function (propValue) {
          newState.valueList = formatInternalValue(propValue, nextProps);
          valueRefresh = true;
        });
      }

      processState('value', function (propValue) {
        newState.valueList = formatInternalValue(propValue, nextProps);
        valueRefresh = true;
      }); // Selector Value List

      if (valueRefresh) {
        // Find out that value not exist in the tree
        var missValueList = [];
        var filteredValueList = [];
        var keyList = []; // Get latest value list

        var latestValueList = newState.valueList;

        if (!latestValueList) {
          // Also need add prev missValueList to avoid new treeNodes contains the value
          latestValueList = [].concat(_toConsumableArray(prevState.valueList), _toConsumableArray(prevState.missValueList));
        } // Get key by value


        var valueLabels = {};
        latestValueList.forEach(function (wrapperValue) {
          var value = wrapperValue.value,
              label = wrapperValue.label;
          var entity = (newState.valueEntities || prevState.valueEntities)[value];
          valueLabels[value] = label;

          if (entity) {
            keyList.push(entity.key);
            filteredValueList.push(wrapperValue);
            return;
          } // If not match, it may caused by ajax load. We need keep this


          missValueList.push(wrapperValue);
        }); // We need calculate the value when tree is checked tree

        if (treeCheckable && !treeCheckStrictly) {
          // Calculate the keys need to be checked
          var _conductCheck = conductCheck(keyList, true, newState.keyEntities || prevState.keyEntities),
              checkedKeys = _conductCheck.checkedKeys; // Format value list again for internal usage


          newState.valueList = checkedKeys.map(function (key) {
            var val = (newState.keyEntities || prevState.keyEntities)[key].value;
            var wrappedValue = {
              value: val
            };

            if (valueLabels[val] !== undefined) {
              wrappedValue.label = valueLabels[val];
            }

            return wrappedValue;
          });
        } else {
          newState.valueList = filteredValueList;
        } // Fill the missValueList, we still need display in the selector


        newState.missValueList = missValueList; // Calculate the value list for `Selector` usage

        newState.selectorValueList = formatSelectorValue(newState.valueList, nextProps, newState.valueEntities || prevState.valueEntities);
      } // [Legacy] To align with `Select` component,
      // We use `searchValue` instead of `inputValue` but still keep the api
      // `inputValue` support `null` to work as `autoClearSearchValue`


      processState('inputValue', function (propValue) {
        if (propValue !== null) {
          newState.searchValue = propValue;
        }
      }); // Search value

      processState('searchValue', function (propValue) {
        newState.searchValue = propValue;
      }); // Do the search logic

      if (newState.searchValue !== undefined || prevState.searchValue && treeNodes) {
        var searchValue = newState.searchValue !== undefined ? newState.searchValue : prevState.searchValue;
        var upperSearchValue = String(searchValue).toUpperCase();
        var filterTreeNodeFn = filterTreeNode;

        if (filterTreeNode === false) {
          // Don't filter if is false
          filterTreeNodeFn = function filterTreeNodeFn() {
            return true;
          };
        } else if (typeof filterTreeNodeFn !== 'function') {
          // When is not function (true or undefined), use inner filter
          filterTreeNodeFn = function filterTreeNodeFn(_, node) {
            var nodeValue = String(node.props[treeNodeFilterProp]).toUpperCase();
            return nodeValue.indexOf(upperSearchValue) !== -1;
          };
        }

        newState.filteredTreeNodes = getFilterTree(newState.treeNodes || prevState.treeNodes, searchValue, filterTreeNodeFn, newState.valueEntities || prevState.valueEntities, SelectNode);
      } // We should re-calculate the halfCheckedKeys when in search mode


      if (valueRefresh && treeCheckable && !treeCheckStrictly && (newState.searchValue || prevState.searchValue)) {
        newState.searchHalfCheckedKeys = getHalfCheckedKeys(newState.valueList, newState.valueEntities || prevState.valueEntities);
      } // Checked Strategy


      processState('showCheckedStrategy', function () {
        newState.selectorValueList = newState.selectorValueList || formatSelectorValue(newState.valueList || prevState.valueList, nextProps, newState.valueEntities || prevState.valueEntities);
      });
      return newState;
    }
  }]);

  return Select;
}(React__default.Component);

_defineProperty$1(Select, "propTypes", {
  prefixCls: PropTypes.string,
  prefixAria: PropTypes.string,
  multiple: PropTypes.bool,
  showArrow: PropTypes.bool,
  open: PropTypes.bool,
  value: valueProp,
  autoFocus: PropTypes.bool,
  defaultOpen: PropTypes.bool,
  defaultValue: valueProp,
  showSearch: PropTypes.bool,
  placeholder: PropTypes.node,
  inputValue: PropTypes.string,
  // [Legacy] Deprecated. Use `searchValue` instead.
  searchValue: PropTypes.string,
  autoClearSearchValue: PropTypes.bool,
  searchPlaceholder: PropTypes.node,
  // [Legacy] Confuse with placeholder
  disabled: PropTypes.bool,
  children: PropTypes.node,
  labelInValue: PropTypes.bool,
  maxTagCount: PropTypes.number,
  maxTagPlaceholder: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  maxTagTextLength: PropTypes.number,
  showCheckedStrategy: PropTypes.oneOf([SHOW_ALL, SHOW_PARENT, SHOW_CHILD]),
  dropdownMatchSelectWidth: PropTypes.bool,
  treeData: PropTypes.array,
  treeDataSimpleMode: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  treeNodeFilterProp: PropTypes.string,
  treeNodeLabelProp: PropTypes.string,
  treeCheckable: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
  treeCheckStrictly: PropTypes.bool,
  treeIcon: PropTypes.bool,
  treeLine: PropTypes.bool,
  treeDefaultExpandAll: PropTypes.bool,
  treeDefaultExpandedKeys: PropTypes.array,
  treeExpandedKeys: PropTypes.array,
  loadData: PropTypes.func,
  filterTreeNode: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  notFoundContent: PropTypes.node,
  onSearch: PropTypes.func,
  onSelect: PropTypes.func,
  onDeselect: PropTypes.func,
  onChange: PropTypes.func,
  onDropdownVisibleChange: PropTypes.func,
  onTreeExpand: PropTypes.func,
  inputIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  clearIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  removeIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  switcherIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
});

_defineProperty$1(Select, "childContextTypes", {
  rcTreeSelect: PropTypes.shape(_objectSpread({}, selectorContextTypes, {}, multipleSelectorContextTypes, {}, popupContextTypes, {
    onSearchInputChange: PropTypes.func,
    onSearchInputKeyDown: PropTypes.func
  }))
});

_defineProperty$1(Select, "defaultProps", {
  prefixCls: 'rc-tree-select',
  prefixAria: 'rc-tree-select',
  showArrow: true,
  showSearch: true,
  autoClearSearchValue: true,
  showCheckedStrategy: SHOW_CHILD,
  // dropdownMatchSelectWidth change the origin design, set to false now
  // ref: https://github.com/react-component/select/blob/4cad95e098a341a09de239ad6981067188842020/src/Select.jsx#L344
  // ref: https://github.com/react-component/select/pull/71
  treeNodeFilterProp: 'value',
  treeNodeLabelProp: 'title',
  treeIcon: false,
  notFoundContent: 'Not Found'
});

Select.TreeNode = SelectNode;
Select.SHOW_ALL = SHOW_ALL;
Select.SHOW_PARENT = SHOW_PARENT;
Select.SHOW_CHILD = SHOW_CHILD; // Let warning show correct component name

Select.displayName = 'TreeSelect';
polyfill(Select);

var TreeNode = SelectNode;

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

var TreeSelect = /*#__PURE__*/function (_React$Component) {
  _inherits(TreeSelect, _React$Component);

  var _super = _createSuper(TreeSelect);

  function TreeSelect(props) {
    var _this;

    _classCallCheck(this, TreeSelect);

    _this = _super.call(this, props);

    _this.saveTreeSelect = function (node) {
      _this.rcTreeSelect = node;
    };

    _this.renderSwitcherIcon = function (prefixCls, _ref) {
      var isLeaf = _ref.isLeaf,
          loading = _ref.loading;

      if (loading) {
        return /*#__PURE__*/React.createElement(Icon, {
          type: "loading",
          className: "".concat(prefixCls, "-switcher-loading-icon")
        });
      }

      if (isLeaf) {
        return null;
      }

      return /*#__PURE__*/React.createElement(Icon, {
        type: "caret-down",
        className: "".concat(prefixCls, "-switcher-icon")
      });
    };

    _this.renderTreeSelect = function (_ref2) {
      var _classNames;

      var getContextPopupContainer = _ref2.getPopupContainer,
          getPrefixCls = _ref2.getPrefixCls,
          renderEmpty = _ref2.renderEmpty;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          className = _a.className,
          size = _a.size,
          notFoundContent = _a.notFoundContent,
          dropdownStyle = _a.dropdownStyle,
          dropdownClassName = _a.dropdownClassName,
          suffixIcon = _a.suffixIcon,
          removeIcon = _a.removeIcon,
          clearIcon = _a.clearIcon,
          getPopupContainer = _a.getPopupContainer,
          restProps = __rest(_a, ["prefixCls", "className", "size", "notFoundContent", "dropdownStyle", "dropdownClassName", "suffixIcon", "removeIcon", "clearIcon", "getPopupContainer"]);

      var rest = omit(restProps, ['inputIcon', 'removeIcon', 'clearIcon', 'switcherIcon']);
      var prefixCls = getPrefixCls('select', customizePrefixCls);
      var cls = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), _defineProperty(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _classNames), className); // showSearch: single - false, multiple - true

      var showSearch = restProps.showSearch;

      if (!('showSearch' in restProps)) {
        showSearch = !!(restProps.multiple || restProps.treeCheckable);
      }

      var checkable = rest.treeCheckable;

      if (checkable) {
        checkable = /*#__PURE__*/React.createElement("span", {
          className: "".concat(prefixCls, "-tree-checkbox-inner")
        });
      }

      var inputIcon = suffixIcon ? cloneElement(suffixIcon) : /*#__PURE__*/React.createElement(Icon, {
        type: "down",
        className: "".concat(prefixCls, "-arrow-icon")
      });
      var finalRemoveIcon = removeIcon ? cloneElement(removeIcon) : /*#__PURE__*/React.createElement(Icon, {
        type: "close",
        className: "".concat(prefixCls, "-remove-icon")
      });
      var finalClearIcon = clearIcon ? cloneElement(clearIcon) : /*#__PURE__*/React.createElement(Icon, {
        type: "close-circle",
        theme: "filled",
        className: "".concat(prefixCls, "-clear-icon")
      });
      return /*#__PURE__*/React.createElement(Select, _extends({
        switcherIcon: function switcherIcon(nodeProps) {
          return _this.renderSwitcherIcon(prefixCls, nodeProps);
        },
        inputIcon: inputIcon,
        removeIcon: finalRemoveIcon,
        clearIcon: finalClearIcon
      }, rest, {
        showSearch: showSearch,
        getPopupContainer: getPopupContainer || getContextPopupContainer,
        dropdownClassName: classNames(dropdownClassName, "".concat(prefixCls, "-tree-dropdown")),
        prefixCls: prefixCls,
        className: cls,
        dropdownStyle: _extends({
          maxHeight: '100vh',
          overflow: 'auto'
        }, dropdownStyle),
        treeCheckable: checkable,
        notFoundContent: notFoundContent || renderEmpty('Select'),
        ref: _this.saveTreeSelect
      }));
    };
    return _this;
  }

  _createClass(TreeSelect, [{
    key: "focus",
    value: function focus() {
      this.rcTreeSelect.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.rcTreeSelect.blur();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderTreeSelect);
    }
  }]);

  return TreeSelect;
}(React.Component);
TreeSelect.TreeNode = TreeNode;
TreeSelect.SHOW_ALL = SHOW_ALL;
TreeSelect.SHOW_PARENT = SHOW_PARENT;
TreeSelect.SHOW_CHILD = SHOW_CHILD;
TreeSelect.defaultProps = {
  transitionName: 'slide-up',
  choiceTransitionName: 'zoom'
};

export { TreeSelect as default };
