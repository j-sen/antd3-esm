import { n } from '../../config-provider.js';
import * as React from 'react';
import { N as Notification } from '../../Notification.js';
import { I as Icon } from '../../icon.js';
import 'react-dom';
import '../../menu.js';

var css = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-notification {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  position: fixed;\n  z-index: 1010;\n  width: 384px;\n  max-width: calc(100vw - 32px);\n  margin-right: 24px;\n}\n.ant-notification-topLeft,\n.ant-notification-bottomLeft {\n  margin-right: 0;\n  margin-left: 24px;\n}\n.ant-notification-topLeft .ant-notification-fade-enter.ant-notification-fade-enter-active,\n.ant-notification-bottomLeft .ant-notification-fade-enter.ant-notification-fade-enter-active,\n.ant-notification-topLeft .ant-notification-fade-appear.ant-notification-fade-appear-active,\n.ant-notification-bottomLeft .ant-notification-fade-appear.ant-notification-fade-appear-active {\n  animation-name: NotificationLeftFadeIn;\n}\n.ant-notification-close-icon {\n  font-size: 14px;\n  cursor: pointer;\n}\n.ant-notification-notice {\n  position: relative;\n  margin-bottom: 16px;\n  padding: 16px 24px;\n  overflow: hidden;\n  line-height: 1.5;\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.ant-notification-notice-message {\n  display: inline-block;\n  margin-bottom: 8px;\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 16px;\n  line-height: 24px;\n}\n.ant-notification-notice-message-single-line-auto-margin {\n  display: block;\n  width: calc(384px - 24px * 2 - 24px - 48px - 100%);\n  max-width: 4px;\n  background-color: transparent;\n  pointer-events: none;\n}\n.ant-notification-notice-message-single-line-auto-margin::before {\n  display: block;\n  content: '';\n}\n.ant-notification-notice-description {\n  font-size: 14px;\n}\n.ant-notification-notice-closable .ant-notification-notice-message {\n  padding-right: 24px;\n}\n.ant-notification-notice-with-icon .ant-notification-notice-message {\n  margin-bottom: 4px;\n  margin-left: 48px;\n  font-size: 16px;\n}\n.ant-notification-notice-with-icon .ant-notification-notice-description {\n  margin-left: 48px;\n  font-size: 14px;\n}\n.ant-notification-notice-icon {\n  position: absolute;\n  margin-left: 4px;\n  font-size: 24px;\n  line-height: 24px;\n}\n.anticon.ant-notification-notice-icon-success {\n  color: #52c41a;\n}\n.anticon.ant-notification-notice-icon-info {\n  color: #1890ff;\n}\n.anticon.ant-notification-notice-icon-warning {\n  color: #faad14;\n}\n.anticon.ant-notification-notice-icon-error {\n  color: #f5222d;\n}\n.ant-notification-notice-close {\n  position: absolute;\n  top: 16px;\n  right: 22px;\n  color: rgba(0, 0, 0, 0.45);\n  outline: none;\n}\n.ant-notification-notice-close:hover {\n  color: rgba(0, 0, 0, 0.67);\n}\n.ant-notification-notice-btn {\n  float: right;\n  margin-top: 16px;\n}\n.ant-notification .notification-fade-effect {\n  animation-duration: 0.24s;\n  animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n  animation-fill-mode: both;\n}\n.ant-notification-fade-enter,\n.ant-notification-fade-appear {\n  opacity: 0;\n  animation-duration: 0.24s;\n  animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n  animation-fill-mode: both;\n  animation-play-state: paused;\n}\n.ant-notification-fade-leave {\n  animation-duration: 0.24s;\n  animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n  animation-fill-mode: both;\n  animation-duration: 0.2s;\n  animation-play-state: paused;\n}\n.ant-notification-fade-enter.ant-notification-fade-enter-active,\n.ant-notification-fade-appear.ant-notification-fade-appear-active {\n  animation-name: NotificationFadeIn;\n  animation-play-state: running;\n}\n.ant-notification-fade-leave.ant-notification-fade-leave-active {\n  animation-name: NotificationFadeOut;\n  animation-play-state: running;\n}\n@keyframes NotificationFadeIn {\n  0% {\n    left: 384px;\n    opacity: 0;\n  }\n  100% {\n    left: 0;\n    opacity: 1;\n  }\n}\n@keyframes NotificationLeftFadeIn {\n  0% {\n    right: 384px;\n    opacity: 0;\n  }\n  100% {\n    right: 0;\n    opacity: 1;\n  }\n}\n@keyframes NotificationFadeOut {\n  0% {\n    max-height: 150px;\n    margin-bottom: 16px;\n    padding-top: 16px 24px;\n    padding-bottom: 16px 24px;\n    opacity: 1;\n  }\n  100% {\n    max-height: 0;\n    margin-bottom: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=index.css.map */";
n(css,{"prepend":true});

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var notificationInstance = {};
var defaultDuration = 4.5;
var defaultTop = 24;
var defaultBottom = 24;
var defaultPlacement = 'topRight';
var defaultGetContainer;
var defaultCloseIcon;

function setNotificationConfig(options) {
  var duration = options.duration,
      placement = options.placement,
      bottom = options.bottom,
      top = options.top,
      getContainer = options.getContainer,
      closeIcon = options.closeIcon;

  if (duration !== undefined) {
    defaultDuration = duration;
  }

  if (placement !== undefined) {
    defaultPlacement = placement;
  }

  if (bottom !== undefined) {
    defaultBottom = bottom;
  }

  if (top !== undefined) {
    defaultTop = top;
  }

  if (getContainer !== undefined) {
    defaultGetContainer = getContainer;
  }

  if (closeIcon !== undefined) {
    defaultCloseIcon = closeIcon;
  }
}

function getPlacementStyle(placement) {
  var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultTop;
  var bottom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultBottom;
  var style;

  switch (placement) {
    case 'topLeft':
      style = {
        left: 0,
        top: top,
        bottom: 'auto'
      };
      break;

    case 'topRight':
      style = {
        right: 0,
        top: top,
        bottom: 'auto'
      };
      break;

    case 'bottomLeft':
      style = {
        left: 0,
        top: 'auto',
        bottom: bottom
      };
      break;

    default:
      style = {
        right: 0,
        top: 'auto',
        bottom: bottom
      };
      break;
  }

  return style;
}

function getNotificationInstance(_ref, callback) {
  var prefixCls = _ref.prefixCls,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? defaultPlacement : _ref$placement,
      _ref$getContainer = _ref.getContainer,
      getContainer = _ref$getContainer === void 0 ? defaultGetContainer : _ref$getContainer,
      top = _ref.top,
      bottom = _ref.bottom,
      _ref$closeIcon = _ref.closeIcon,
      closeIcon = _ref$closeIcon === void 0 ? defaultCloseIcon : _ref$closeIcon;
  var cacheKey = "".concat(prefixCls, "-").concat(placement);

  if (notificationInstance[cacheKey]) {
    callback(notificationInstance[cacheKey]);
    return;
  }

  var closeIconToRender = /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "-close-x")
  }, closeIcon || /*#__PURE__*/React.createElement(Icon, {
    className: "".concat(prefixCls, "-close-icon"),
    type: "close"
  }));
  Notification.newInstance({
    prefixCls: prefixCls,
    className: "".concat(prefixCls, "-").concat(placement),
    style: getPlacementStyle(placement, top, bottom),
    getContainer: getContainer,
    closeIcon: closeIconToRender
  }, function (notification) {
    notificationInstance[cacheKey] = notification;
    callback(notification);
  });
}

var typeToIcon = {
  success: 'check-circle-o',
  info: 'info-circle-o',
  error: 'close-circle-o',
  warning: 'exclamation-circle-o'
};

function notice(args) {
  var outerPrefixCls = args.prefixCls || 'ant-notification';
  var prefixCls = "".concat(outerPrefixCls, "-notice");
  var duration = args.duration === undefined ? defaultDuration : args.duration;
  var iconNode = null;

  if (args.icon) {
    iconNode = /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-icon")
    }, args.icon);
  } else if (args.type) {
    var iconType = typeToIcon[args.type];
    iconNode = /*#__PURE__*/React.createElement(Icon, {
      className: "".concat(prefixCls, "-icon ").concat(prefixCls, "-icon-").concat(args.type),
      type: iconType
    });
  }

  var autoMarginTag = !args.description && iconNode ? /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "-message-single-line-auto-margin")
  }) : null;
  var placement = args.placement,
      top = args.top,
      bottom = args.bottom,
      getContainer = args.getContainer,
      closeIcon = args.closeIcon;
  getNotificationInstance({
    prefixCls: outerPrefixCls,
    placement: placement,
    top: top,
    bottom: bottom,
    getContainer: getContainer,
    closeIcon: closeIcon
  }, function (notification) {
    notification.notice({
      content: /*#__PURE__*/React.createElement("div", {
        className: iconNode ? "".concat(prefixCls, "-with-icon") : ''
      }, iconNode, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-message")
      }, autoMarginTag, args.message), /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-description")
      }, args.description), args.btn ? /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-btn")
      }, args.btn) : null),
      duration: duration,
      closable: true,
      onClose: args.onClose,
      onClick: args.onClick,
      key: args.key,
      style: args.style || {},
      className: args.className
    });
  });
}

var api = {
  open: notice,
  close: function close(key) {
    Object.keys(notificationInstance).forEach(function (cacheKey) {
      return notificationInstance[cacheKey].removeNotice(key);
    });
  },
  config: setNotificationConfig,
  destroy: function destroy() {
    Object.keys(notificationInstance).forEach(function (cacheKey) {
      notificationInstance[cacheKey].destroy();
      delete notificationInstance[cacheKey];
    });
  }
};
['success', 'info', 'warning', 'error'].forEach(function (type) {
  api[type] = function (args) {
    return api.open(_extends(_extends({}, args), {
      type: type
    }));
  };
});
api.warn = api.warning;

export { api as default };
