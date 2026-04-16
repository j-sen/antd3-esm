import { n, c as classNames, C as ConfigConsumer, p as propTypesExports, L as LocaleReceiver, u as getConfirmLocale } from '../../config-provider.js';
import * as React from 'react';
import { _ as _inherits$2, a as _classCallCheck$2, b as _possibleConstructorReturn$2, e as _extends$4, I as Icon } from '../../icon.js';
import * as ReactDOM from 'react-dom';
import { K as KeyCode, A as Animate, h as contains, a as addEventListenerWrap } from '../../menu.js';
import { P as Portal } from '../../PortalWrapper.js';
import { B as Button } from '../../index7.js';
import '../../input.js';
import '../../wave.js';
import '../../raf.js';

var css = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-modal {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  position: relative;\n  top: 100px;\n  width: auto;\n  margin: 0 auto;\n  padding-bottom: 24px;\n  pointer-events: none;\n}\n.ant-modal-wrap {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  overflow: auto;\n  outline: 0;\n  -webkit-overflow-scrolling: touch;\n}\n.ant-modal-title {\n  margin: 0;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 22px;\n  word-wrap: break-word;\n}\n.ant-modal-content {\n  position: relative;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 0;\n  border-radius: 4px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  pointer-events: auto;\n}\n.ant-modal-close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 10;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.45);\n  font-weight: 700;\n  line-height: 1;\n  text-decoration: none;\n  background: transparent;\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  transition: color 0.3s;\n}\n.ant-modal-close-x {\n  display: block;\n  width: 56px;\n  height: 56px;\n  font-size: 16px;\n  font-style: normal;\n  line-height: 56px;\n  text-align: center;\n  text-transform: none;\n  text-rendering: auto;\n}\n.ant-modal-close:focus,\n.ant-modal-close:hover {\n  color: rgba(0, 0, 0, 0.75);\n  text-decoration: none;\n}\n.ant-modal-header {\n  padding: 16px 24px;\n  color: rgba(0, 0, 0, 0.65);\n  background: #fff;\n  border-bottom: 1px solid #e8e8e8;\n  border-radius: 4px 4px 0 0;\n}\n.ant-modal-body {\n  padding: 24px;\n  font-size: 14px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.ant-modal-footer {\n  padding: 10px 16px;\n  text-align: right;\n  background: transparent;\n  border-top: 1px solid #e8e8e8;\n  border-radius: 0 0 4px 4px;\n}\n.ant-modal-footer button + button {\n  margin-bottom: 0;\n  margin-left: 8px;\n}\n.ant-modal.zoom-enter,\n.ant-modal.zoom-appear {\n  transform: none;\n  opacity: 0;\n  animation-duration: 0.3s;\n  user-select: none;\n}\n.ant-modal-mask {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.45);\n  filter: alpha(opacity=50);\n}\n.ant-modal-mask-hidden {\n  display: none;\n}\n.ant-modal-open {\n  overflow: hidden;\n}\n.ant-modal-centered {\n  text-align: center;\n}\n.ant-modal-centered::before {\n  display: inline-block;\n  width: 0;\n  height: 100%;\n  vertical-align: middle;\n  content: '';\n}\n.ant-modal-centered .ant-modal {\n  top: 0;\n  display: inline-block;\n  text-align: left;\n  vertical-align: middle;\n}\n@media (max-width: 767px) {\n  .ant-modal {\n    max-width: calc(100vw - 16px);\n    margin: 8px auto;\n  }\n  .ant-modal-centered .ant-modal {\n    flex: 1;\n  }\n}\n.ant-modal-confirm .ant-modal-header {\n  display: none;\n}\n.ant-modal-confirm .ant-modal-close {\n  display: none;\n}\n.ant-modal-confirm .ant-modal-body {\n  padding: 32px 32px 24px;\n}\n.ant-modal-confirm-body-wrapper {\n  zoom: 1;\n}\n.ant-modal-confirm-body-wrapper::before,\n.ant-modal-confirm-body-wrapper::after {\n  display: table;\n  content: '';\n}\n.ant-modal-confirm-body-wrapper::after {\n  clear: both;\n}\n.ant-modal-confirm-body .ant-modal-confirm-title {\n  display: block;\n  overflow: hidden;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.4;\n}\n.ant-modal-confirm-body .ant-modal-confirm-content {\n  margin-top: 8px;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n}\n.ant-modal-confirm-body > .anticon {\n  float: left;\n  margin-right: 16px;\n  font-size: 22px;\n}\n.ant-modal-confirm-body > .anticon + .ant-modal-confirm-title + .ant-modal-confirm-content {\n  margin-left: 38px;\n}\n.ant-modal-confirm .ant-modal-confirm-btns {\n  float: right;\n  margin-top: 24px;\n}\n.ant-modal-confirm .ant-modal-confirm-btns button + button {\n  margin-bottom: 0;\n  margin-left: 8px;\n}\n.ant-modal-confirm-error .ant-modal-confirm-body > .anticon {\n  color: #f5222d;\n}\n.ant-modal-confirm-warning .ant-modal-confirm-body > .anticon,\n.ant-modal-confirm-confirm .ant-modal-confirm-body > .anticon {\n  color: #faad14;\n}\n.ant-modal-confirm-info .ant-modal-confirm-body > .anticon {\n  color: #1890ff;\n}\n.ant-modal-confirm-success .ant-modal-confirm-body > .anticon {\n  color: #52c41a;\n}\n/*# sourceMappingURL=index.css.map */";
n(css,{"prepend":true});

var __rest$1 = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var LazyRenderBox = function (_React$Component) {
    _inherits$2(LazyRenderBox, _React$Component);

    function LazyRenderBox() {
        _classCallCheck$2(this, LazyRenderBox);

        return _possibleConstructorReturn$2(this, _React$Component.apply(this, arguments));
    }

    LazyRenderBox.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        if (nextProps.forceRender) {
            return true;
        }
        return !!nextProps.hiddenClassName || !!nextProps.visible;
    };

    LazyRenderBox.prototype.render = function render() {
        var _a = this.props,
            className = _a.className,
            hiddenClassName = _a.hiddenClassName,
            visible = _a.visible,
            restProps = __rest$1(_a, ["className", "hiddenClassName", "visible", "forceRender"]);
        var useClassName = className;
        if (!!hiddenClassName && !visible) {
            useClassName += " " + hiddenClassName;
        }
        return React.createElement("div", _extends$4({}, restProps, { className: useClassName }));
    };

    return LazyRenderBox;
}(React.Component);

var uuid = 0;
/* eslint react/no-is-mounted:0 */
function getScroll(w, top) {
    var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
    var method = 'scroll' + (top ? 'Top' : 'Left');
    if (typeof ret !== 'number') {
        var d = w.document;
        ret = d.documentElement[method];
        if (typeof ret !== 'number') {
            ret = d.body[method];
        }
    }
    return ret;
}
function setTransformOrigin(node, value) {
    var style = node.style;
    ['Webkit', 'Moz', 'Ms', 'ms'].forEach(function (prefix) {
        style[prefix + 'TransformOrigin'] = value;
    });
    style['transformOrigin'] = value;
}
function offset(el) {
    var rect = el.getBoundingClientRect();
    var pos = {
        left: rect.left,
        top: rect.top
    };
    var doc = el.ownerDocument;
    var w = doc.defaultView || doc.parentWindow;
    pos.left += getScroll(w);
    pos.top += getScroll(w, true);
    return pos;
}

var Dialog$1 = function (_React$Component) {
    _inherits$2(Dialog, _React$Component);

    function Dialog(props) {
        _classCallCheck$2(this, Dialog);

        var _this = _possibleConstructorReturn$2(this, _React$Component.call(this, props));

        _this.inTransition = false;
        _this.onAnimateLeave = function () {
            var afterClose = _this.props.afterClose;
            // need demo?
            // https://github.com/react-component/dialog/pull/28

            if (_this.wrap) {
                _this.wrap.style.display = 'none';
            }
            _this.inTransition = false;
            _this.switchScrollingEffect();
            if (afterClose) {
                afterClose();
            }
        };
        _this.onDialogMouseDown = function () {
            _this.dialogMouseDown = true;
        };
        _this.onMaskMouseUp = function () {
            if (_this.dialogMouseDown) {
                _this.timeoutId = setTimeout(function () {
                    _this.dialogMouseDown = false;
                }, 0);
            }
        };
        _this.onMaskClick = function (e) {
            // android trigger click on open (fastclick??)
            if (Date.now() - _this.openTime < 300) {
                return;
            }
            if (e.target === e.currentTarget && !_this.dialogMouseDown) {
                _this.close(e);
            }
        };
        _this.onKeyDown = function (e) {
            var props = _this.props;
            if (props.keyboard && e.keyCode === KeyCode.ESC) {
                e.stopPropagation();
                _this.close(e);
                return;
            }
            // keep focus inside dialog
            if (props.visible) {
                if (e.keyCode === KeyCode.TAB) {
                    var activeElement = document.activeElement;
                    var sentinelStart = _this.sentinelStart;
                    if (e.shiftKey) {
                        if (activeElement === sentinelStart) {
                            _this.sentinelEnd.focus();
                        }
                    } else if (activeElement === _this.sentinelEnd) {
                        sentinelStart.focus();
                    }
                }
            }
        };
        _this.getDialogElement = function () {
            var props = _this.props;
            var closable = props.closable;
            var prefixCls = props.prefixCls;
            var dest = {};
            if (props.width !== undefined) {
                dest.width = props.width;
            }
            if (props.height !== undefined) {
                dest.height = props.height;
            }
            var footer = void 0;
            if (props.footer) {
                footer = React.createElement("div", { className: prefixCls + '-footer', ref: _this.saveRef('footer') }, props.footer);
            }
            var header = void 0;
            if (props.title) {
                header = React.createElement("div", { className: prefixCls + '-header', ref: _this.saveRef('header') }, React.createElement("div", { className: prefixCls + '-title', id: _this.titleId }, props.title));
            }
            var closer = void 0;
            if (closable) {
                closer = React.createElement("button", { type: "button", onClick: _this.close, "aria-label": "Close", className: prefixCls + '-close' }, props.closeIcon || React.createElement("span", { className: prefixCls + '-close-x' }));
            }
            var style = _extends$4({}, props.style, dest);
            var sentinelStyle = { width: 0, height: 0, overflow: 'hidden', outline: 'none' };
            var transitionName = _this.getTransitionName();
            var dialogElement = React.createElement(LazyRenderBox, { key: "dialog-element", role: "document", ref: _this.saveRef('dialog'), style: style, className: prefixCls + ' ' + (props.className || ''), visible: props.visible, forceRender: props.forceRender, onMouseDown: _this.onDialogMouseDown }, React.createElement("div", { tabIndex: 0, ref: _this.saveRef('sentinelStart'), style: sentinelStyle, "aria-hidden": "true" }), React.createElement("div", { className: prefixCls + '-content' }, closer, header, React.createElement("div", _extends$4({ className: prefixCls + '-body', style: props.bodyStyle, ref: _this.saveRef('body') }, props.bodyProps), props.children), footer), React.createElement("div", { tabIndex: 0, ref: _this.saveRef('sentinelEnd'), style: sentinelStyle, "aria-hidden": "true" }));
            return React.createElement(Animate, { key: "dialog", showProp: "visible", onLeave: _this.onAnimateLeave, transitionName: transitionName, component: "", transitionAppear: true }, props.visible || !props.destroyOnClose ? dialogElement : null);
        };
        _this.getZIndexStyle = function () {
            var style = {};
            var props = _this.props;
            if (props.zIndex !== undefined) {
                style.zIndex = props.zIndex;
            }
            return style;
        };
        _this.getWrapStyle = function () {
            return _extends$4({}, _this.getZIndexStyle(), _this.props.wrapStyle);
        };
        _this.getMaskStyle = function () {
            return _extends$4({}, _this.getZIndexStyle(), _this.props.maskStyle);
        };
        _this.getMaskElement = function () {
            var props = _this.props;
            var maskElement = void 0;
            if (props.mask) {
                var maskTransition = _this.getMaskTransitionName();
                maskElement = React.createElement(LazyRenderBox, _extends$4({ style: _this.getMaskStyle(), key: "mask", className: props.prefixCls + '-mask', hiddenClassName: props.prefixCls + '-mask-hidden', visible: props.visible }, props.maskProps));
                if (maskTransition) {
                    maskElement = React.createElement(Animate, { key: "mask", showProp: "visible", transitionAppear: true, component: "", transitionName: maskTransition }, maskElement);
                }
            }
            return maskElement;
        };
        _this.getMaskTransitionName = function () {
            var props = _this.props;
            var transitionName = props.maskTransitionName;
            var animation = props.maskAnimation;
            if (!transitionName && animation) {
                transitionName = props.prefixCls + '-' + animation;
            }
            return transitionName;
        };
        _this.getTransitionName = function () {
            var props = _this.props;
            var transitionName = props.transitionName;
            var animation = props.animation;
            if (!transitionName && animation) {
                transitionName = props.prefixCls + '-' + animation;
            }
            return transitionName;
        };
        _this.close = function (e) {
            var onClose = _this.props.onClose;

            if (onClose) {
                onClose(e);
            }
        };
        _this.saveRef = function (name) {
            return function (node) {
                _this[name] = node;
            };
        };
        _this.titleId = 'rcDialogTitle' + uuid++;
        _this.switchScrollingEffect = props.switchScrollingEffect || function () {};
        return _this;
    }

    Dialog.prototype.componentDidMount = function componentDidMount() {
        this.componentDidUpdate({});
        // if forceRender is true, set element style display to be none;
        if ((this.props.forceRender || this.props.getContainer === false && !this.props.visible) && this.wrap) {
            this.wrap.style.display = 'none';
        }
    };

    Dialog.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        var _props = this.props,
            visible = _props.visible,
            mask = _props.mask,
            focusTriggerAfterClose = _props.focusTriggerAfterClose;

        var mousePosition = this.props.mousePosition;
        if (visible) {
            // first show
            if (!prevProps.visible) {
                this.openTime = Date.now();
                this.switchScrollingEffect();
                this.tryFocus();
                var dialogNode = ReactDOM.findDOMNode(this.dialog);
                if (mousePosition) {
                    var elOffset = offset(dialogNode);
                    setTransformOrigin(dialogNode, mousePosition.x - elOffset.left + 'px ' + (mousePosition.y - elOffset.top) + 'px');
                } else {
                    setTransformOrigin(dialogNode, '');
                }
            }
        } else if (prevProps.visible) {
            this.inTransition = true;
            if (mask && this.lastOutSideFocusNode && focusTriggerAfterClose) {
                try {
                    this.lastOutSideFocusNode.focus();
                } catch (e) {
                    this.lastOutSideFocusNode = null;
                }
                this.lastOutSideFocusNode = null;
            }
        }
    };

    Dialog.prototype.componentWillUnmount = function componentWillUnmount() {
        var _props2 = this.props,
            visible = _props2.visible,
            getOpenCount = _props2.getOpenCount;

        if ((visible || this.inTransition) && !getOpenCount()) {
            this.switchScrollingEffect();
        }
        clearTimeout(this.timeoutId);
    };

    Dialog.prototype.tryFocus = function tryFocus() {
        if (!contains(this.wrap, document.activeElement)) {
            this.lastOutSideFocusNode = document.activeElement;
            this.sentinelStart.focus();
        }
    };

    Dialog.prototype.render = function render() {
        var props = this.props;
        var prefixCls = props.prefixCls,
            maskClosable = props.maskClosable;

        var style = this.getWrapStyle();
        // clear hide display
        // and only set display after async anim, not here for hide
        if (props.visible) {
            style.display = null;
        }
        return React.createElement("div", { className: prefixCls + '-root' }, this.getMaskElement(), React.createElement("div", _extends$4({ tabIndex: -1, onKeyDown: this.onKeyDown, className: prefixCls + '-wrap ' + (props.wrapClassName || ''), ref: this.saveRef('wrap'), onClick: maskClosable ? this.onMaskClick : null, onMouseUp: maskClosable ? this.onMaskMouseUp : null, role: "dialog", "aria-labelledby": props.title ? this.titleId : null, style: style }, props.wrapProps), this.getDialogElement()));
    };

    return Dialog;
}(React.Component);

Dialog$1.defaultProps = {
    className: '',
    mask: true,
    visible: false,
    keyboard: true,
    closable: true,
    maskClosable: true,
    destroyOnClose: false,
    prefixCls: 'rc-dialog',
    focusTriggerAfterClose: true
};

// fix issue #10656
/*
* getContainer remarks
* Custom container should not be return, because in the Portal component, it will remove the
* return container element here, if the custom container is the only child of it's component,
* like issue #10656, It will has a conflict with removeChild method in react-dom.
* So here should add a child (div element) to custom container.
* */
var Dialog = (function (props) {
    var visible = props.visible,
        getContainer = props.getContainer,
        forceRender = props.forceRender;
    // 渲染在当前 dom 里；

    if (getContainer === false) {
        return React.createElement(Dialog$1, _extends$4({}, props, { getOpenCount: function getOpenCount() {
                return 2;
            } }));
    }
    return React.createElement(Portal, { visible: visible, forceRender: forceRender, getContainer: getContainer }, function (childProps) {
        return React.createElement(Dialog$1, _extends$4({}, props, childProps));
    });
});

function _typeof$1(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

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
var mousePosition;
var destroyFns = []; // ref: https://github.com/ant-design/ant-design/issues/15795

var getClickPosition = function getClickPosition(e) {
  mousePosition = {
    x: e.pageX,
    y: e.pageY
  }; // 100ms 内发生过点击事件，则从点击位置动画展示
  // 否则直接 zoom 展示
  // 这样可以兼容非点击方式展开

  setTimeout(function () {
    return mousePosition = null;
  }, 100);
}; // 只有点击事件支持从鼠标位置动画展开


if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
  addEventListenerWrap(document.documentElement, 'click', getClickPosition);
}

var Modal = /*#__PURE__*/function (_React$Component) {
  _inherits$1(Modal, _React$Component);

  var _super = _createSuper$1(Modal);

  function Modal() {
    var _this;

    _classCallCheck$1(this, Modal);

    _this = _super.apply(this, arguments);

    _this.handleCancel = function (e) {
      var onCancel = _this.props.onCancel;

      if (onCancel) {
        onCancel(e);
      }
    };

    _this.handleOk = function (e) {
      var onOk = _this.props.onOk;

      if (onOk) {
        onOk(e);
      }
    };

    _this.renderFooter = function (locale) {
      var _this$props = _this.props,
          okText = _this$props.okText,
          okType = _this$props.okType,
          cancelText = _this$props.cancelText,
          confirmLoading = _this$props.confirmLoading;
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, _extends$3({
        onClick: _this.handleCancel
      }, _this.props.cancelButtonProps), cancelText || locale.cancelText), /*#__PURE__*/React.createElement(Button, _extends$3({
        type: okType,
        loading: confirmLoading,
        onClick: _this.handleOk
      }, _this.props.okButtonProps), okText || locale.okText));
    };

    _this.renderModal = function (_ref) {
      var getContextPopupContainer = _ref.getPopupContainer,
          getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          footer = _a.footer,
          visible = _a.visible,
          wrapClassName = _a.wrapClassName,
          centered = _a.centered,
          getContainer = _a.getContainer,
          closeIcon = _a.closeIcon,
          restProps = __rest(_a, ["prefixCls", "footer", "visible", "wrapClassName", "centered", "getContainer", "closeIcon"]);

      var prefixCls = getPrefixCls('modal', customizePrefixCls);
      var defaultFooter = /*#__PURE__*/React.createElement(LocaleReceiver, {
        componentName: "Modal",
        defaultLocale: getConfirmLocale()
      }, _this.renderFooter);
      var closeIconToRender = /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-close-x")
      }, closeIcon || /*#__PURE__*/React.createElement(Icon, {
        className: "".concat(prefixCls, "-close-icon"),
        type: "close"
      }));
      return /*#__PURE__*/React.createElement(Dialog, _extends$3({}, restProps, {
        getContainer: getContainer === undefined ? getContextPopupContainer : getContainer,
        prefixCls: prefixCls,
        wrapClassName: classNames(_defineProperty$1({}, "".concat(prefixCls, "-centered"), !!centered), wrapClassName),
        footer: footer === undefined ? defaultFooter : footer,
        visible: visible,
        mousePosition: mousePosition,
        onClose: _this.handleCancel,
        closeIcon: closeIconToRender
      }));
    };

    return _this;
  }

  _createClass$1(Modal, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderModal);
    }
  }]);

  return Modal;
}(React.Component);
Modal.defaultProps = {
  width: 520,
  transitionName: 'zoom',
  maskTransitionName: 'fade',
  confirmLoading: false,
  visible: false,
  okType: 'primary'
};
Modal.propTypes = {
  prefixCls: propTypesExports.string,
  onOk: propTypesExports.func,
  onCancel: propTypesExports.func,
  okText: propTypesExports.node,
  cancelText: propTypesExports.node,
  centered: propTypesExports.bool,
  width: propTypesExports.oneOfType([propTypesExports.number, propTypesExports.string]),
  confirmLoading: propTypesExports.bool,
  visible: propTypesExports.bool,
  footer: propTypesExports.node,
  title: propTypesExports.node,
  closable: propTypesExports.bool,
  closeIcon: propTypesExports.node
};

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

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

var ActionButton = /*#__PURE__*/function (_React$Component) {
  _inherits(ActionButton, _React$Component);

  var _super = _createSuper(ActionButton);

  function ActionButton(props) {
    var _this;

    _classCallCheck(this, ActionButton);

    _this = _super.call(this, props);

    _this.onClick = function () {
      var _this$props = _this.props,
          actionFn = _this$props.actionFn,
          closeModal = _this$props.closeModal;

      if (actionFn) {
        var ret;

        if (actionFn.length) {
          ret = actionFn(closeModal);
        } else {
          ret = actionFn();

          if (!ret) {
            closeModal();
          }
        }

        if (ret && ret.then) {
          _this.setState({
            loading: true
          });

          ret.then(function () {
            // It's unnecessary to set loading=false, for the Modal will be unmounted after close.
            // this.setState({ loading: false });
            closeModal.apply(void 0, arguments);
          }, function (e) {
            // Emit error when catch promise reject
            // eslint-disable-next-line no-console
            console.error(e); // See: https://github.com/ant-design/ant-design/issues/6183

            _this.setState({
              loading: false
            });
          });
        }
      } else {
        closeModal();
      }
    };

    _this.state = {
      loading: false
    };
    return _this;
  }

  _createClass(ActionButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autoFocus) {
        var $this = ReactDOM.findDOMNode(this);
        this.timeoutId = setTimeout(function () {
          return $this.focus();
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeoutId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          type = _this$props2.type,
          children = _this$props2.children,
          buttonProps = _this$props2.buttonProps;
      var loading = this.state.loading;
      return /*#__PURE__*/React.createElement(Button, _extends$2({
        type: type,
        onClick: this.onClick,
        loading: loading
      }, buttonProps), children);
    }
  }]);

  return ActionButton;
}(React.Component);

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var IS_REACT_16 = !!ReactDOM.createPortal;

var ConfirmDialog = function ConfirmDialog(props) {
  var onCancel = props.onCancel,
      onOk = props.onOk,
      close = props.close,
      zIndex = props.zIndex,
      afterClose = props.afterClose,
      visible = props.visible,
      keyboard = props.keyboard,
      centered = props.centered,
      getContainer = props.getContainer,
      maskStyle = props.maskStyle,
      okButtonProps = props.okButtonProps,
      cancelButtonProps = props.cancelButtonProps,
      _props$iconType = props.iconType,
      iconType = _props$iconType === void 0 ? 'question-circle' : _props$iconType;

  var icon = props.icon === undefined ? iconType : props.icon;
  var okType = props.okType || 'primary';
  var prefixCls = props.prefixCls || 'ant-modal';
  var contentPrefixCls = "".concat(prefixCls, "-confirm"); // 默认为 true，保持向下兼容

  var okCancel = 'okCancel' in props ? props.okCancel : true;
  var width = props.width || 416;
  var style = props.style || {};
  var mask = props.mask === undefined ? true : props.mask; // 默认为 false，保持旧版默认行为

  var maskClosable = props.maskClosable === undefined ? false : props.maskClosable;
  var runtimeLocale = getConfirmLocale();
  var okText = props.okText || (okCancel ? runtimeLocale.okText : runtimeLocale.justOkText);
  var cancelText = props.cancelText || runtimeLocale.cancelText;
  var autoFocusButton = props.autoFocusButton === null ? false : props.autoFocusButton || 'ok';
  var transitionName = props.transitionName || 'zoom';
  var maskTransitionName = props.maskTransitionName || 'fade';
  var classString = classNames(contentPrefixCls, "".concat(contentPrefixCls, "-").concat(props.type), props.className);
  var cancelButton = okCancel && /*#__PURE__*/React.createElement(ActionButton, {
    actionFn: onCancel,
    closeModal: close,
    autoFocus: autoFocusButton === 'cancel',
    buttonProps: cancelButtonProps
  }, cancelText);
  var iconNode = typeof icon === 'string' ? /*#__PURE__*/React.createElement(Icon, {
    type: icon
  }) : icon;
  return /*#__PURE__*/React.createElement(Modal, {
    prefixCls: prefixCls,
    className: classString,
    wrapClassName: classNames(_defineProperty({}, "".concat(contentPrefixCls, "-centered"), !!props.centered)),
    onCancel: function onCancel() {
      return close({
        triggerCancel: true
      });
    },
    visible: visible,
    title: "",
    transitionName: transitionName,
    footer: "",
    maskTransitionName: maskTransitionName,
    mask: mask,
    maskClosable: maskClosable,
    maskStyle: maskStyle,
    style: style,
    width: width,
    zIndex: zIndex,
    afterClose: afterClose,
    keyboard: keyboard,
    centered: centered,
    getContainer: getContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(contentPrefixCls, "-body-wrapper")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(contentPrefixCls, "-body")
  }, iconNode, props.title === undefined ? null : /*#__PURE__*/React.createElement("span", {
    className: "".concat(contentPrefixCls, "-title")
  }, props.title), /*#__PURE__*/React.createElement("div", {
    className: "".concat(contentPrefixCls, "-content")
  }, props.content)), /*#__PURE__*/React.createElement("div", {
    className: "".concat(contentPrefixCls, "-btns")
  }, cancelButton, /*#__PURE__*/React.createElement(ActionButton, {
    type: okType,
    actionFn: onOk,
    closeModal: close,
    autoFocus: autoFocusButton === 'ok',
    buttonProps: okButtonProps
  }, okText))));
};

function confirm(config) {
  var div = document.createElement('div');
  document.body.appendChild(div); // eslint-disable-next-line no-use-before-define

  var currentConfig = _extends$1(_extends$1({}, config), {
    close: close,
    visible: true
  });

  function destroy() {
    var unmountResult = ReactDOM.unmountComponentAtNode(div);

    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var triggerCancel = args.some(function (param) {
      return param && param.triggerCancel;
    });

    if (config.onCancel && triggerCancel) {
      config.onCancel.apply(config, args);
    }

    for (var i = 0; i < destroyFns.length; i++) {
      var fn = destroyFns[i]; // eslint-disable-next-line no-use-before-define

      if (fn === close) {
        destroyFns.splice(i, 1);
        break;
      }
    }
  }

  function render(props) {
    ReactDOM.render( /*#__PURE__*/React.createElement(ConfirmDialog, props), div);
  }

  function close() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    currentConfig = _extends$1(_extends$1({}, currentConfig), {
      visible: false,
      afterClose: destroy.bind.apply(destroy, [this].concat(args))
    });

    if (IS_REACT_16) {
      render(currentConfig);
    } else {
      destroy.apply(void 0, args);
    }
  }

  function update(newConfig) {
    currentConfig = _extends$1(_extends$1({}, currentConfig), newConfig);
    render(currentConfig);
  }

  render(currentConfig);
  destroyFns.push(close);
  return {
    destroy: close,
    update: update
  };
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function modalWarn(props) {
  var config = _extends({
    type: 'warning',
    icon: /*#__PURE__*/React.createElement(Icon, {
      type: "exclamation-circle"
    }),
    okCancel: false
  }, props);

  return confirm(config);
}

Modal.info = function infoFn(props) {
  var config = _extends({
    type: 'info',
    icon: /*#__PURE__*/React.createElement(Icon, {
      type: "info-circle"
    }),
    okCancel: false
  }, props);

  return confirm(config);
};

Modal.success = function successFn(props) {
  var config = _extends({
    type: 'success',
    icon: /*#__PURE__*/React.createElement(Icon, {
      type: "check-circle"
    }),
    okCancel: false
  }, props);

  return confirm(config);
};

Modal.error = function errorFn(props) {
  var config = _extends({
    type: 'error',
    icon: /*#__PURE__*/React.createElement(Icon, {
      type: "close-circle"
    }),
    okCancel: false
  }, props);

  return confirm(config);
};

Modal.warning = modalWarn;
Modal.warn = modalWarn;

Modal.confirm = function confirmFn(props) {
  var config = _extends({
    type: 'confirm',
    okCancel: true
  }, props);

  return confirm(config);
};

Modal.destroyAll = function destroyAllFn() {
  while (destroyFns.length) {
    var close = destroyFns.pop();

    if (close) {
      close();
    }
  }
};

export { Modal as default };
