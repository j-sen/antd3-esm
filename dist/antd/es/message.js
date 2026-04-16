import { n } from '../../config-provider.js';
import * as React from 'react';
import { N as Notification } from '../../Notification.js';
import { I as Icon } from '../../icon.js';
import 'react-dom';
import '../../menu.js';

var css = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-message {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  position: fixed;\n  top: 16px;\n  left: 0;\n  z-index: 1010;\n  width: 100%;\n  pointer-events: none;\n}\n.ant-message-notice {\n  padding: 8px;\n  text-align: center;\n}\n.ant-message-notice:first-child {\n  margin-top: -8px;\n}\n.ant-message-notice-content {\n  display: inline-block;\n  padding: 10px 16px;\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  pointer-events: all;\n}\n.ant-message-success .anticon {\n  color: #52c41a;\n}\n.ant-message-error .anticon {\n  color: #f5222d;\n}\n.ant-message-warning .anticon {\n  color: #faad14;\n}\n.ant-message-info .anticon,\n.ant-message-loading .anticon {\n  color: #1890ff;\n}\n.ant-message .anticon {\n  position: relative;\n  top: 1px;\n  margin-right: 8px;\n  font-size: 16px;\n}\n.ant-message-notice.move-up-leave.move-up-leave-active {\n  overflow: hidden;\n  animation-name: MessageMoveOut;\n  animation-duration: 0.3s;\n}\n@keyframes MessageMoveOut {\n  0% {\n    max-height: 150px;\n    padding: 8px;\n    opacity: 1;\n  }\n  100% {\n    max-height: 0;\n    padding: 0;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=index.css.map */";
n(css,{"prepend":true});

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var defaultDuration = 3;
var defaultTop;
var messageInstance;
var key = 1;
var prefixCls = 'ant-message';
var transitionName = 'move-up';
var getContainer;
var maxCount;

function getMessageInstance(callback) {
  if (messageInstance) {
    callback(messageInstance);
    return;
  }

  Notification.newInstance({
    prefixCls: prefixCls,
    transitionName: transitionName,
    style: {
      top: defaultTop
    },
    getContainer: getContainer,
    maxCount: maxCount
  }, function (instance) {
    if (messageInstance) {
      callback(messageInstance);
      return;
    }

    messageInstance = instance;
    callback(instance);
  });
}

function notice(args) {
  var duration = args.duration !== undefined ? args.duration : defaultDuration;
  var iconType = {
    info: 'info-circle',
    success: 'check-circle',
    error: 'close-circle',
    warning: 'exclamation-circle',
    loading: 'loading'
  }[args.type];
  var target = args.key || key++;
  var closePromise = new Promise(function (resolve) {
    var callback = function callback() {
      if (typeof args.onClose === 'function') {
        args.onClose();
      }

      return resolve(true);
    };

    getMessageInstance(function (instance) {
      var iconNode = /*#__PURE__*/React.createElement(Icon, {
        type: iconType,
        theme: iconType === 'loading' ? 'outlined' : 'filled'
      });
      var switchIconNode = iconType ? iconNode : '';
      instance.notice({
        key: target,
        duration: duration,
        style: {},
        content: /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-custom-content").concat(args.type ? " ".concat(prefixCls, "-").concat(args.type) : '')
        }, args.icon ? args.icon : switchIconNode, /*#__PURE__*/React.createElement("span", null, args.content)),
        onClose: callback
      });
    });
  });

  var result = function result() {
    if (messageInstance) {
      messageInstance.removeNotice(target);
    }
  };

  result.then = function (filled, rejected) {
    return closePromise.then(filled, rejected);
  };

  result.promise = closePromise;
  return result;
}

function isArgsProps(content) {
  return Object.prototype.toString.call(content) === '[object Object]' && !!content.content;
}

var api = {
  open: notice,
  config: function config(options) {
    if (options.top !== undefined) {
      defaultTop = options.top;
      messageInstance = null; // delete messageInstance for new defaultTop
    }

    if (options.duration !== undefined) {
      defaultDuration = options.duration;
    }

    if (options.prefixCls !== undefined) {
      prefixCls = options.prefixCls;
    }

    if (options.getContainer !== undefined) {
      getContainer = options.getContainer;
    }

    if (options.transitionName !== undefined) {
      transitionName = options.transitionName;
      messageInstance = null; // delete messageInstance for new transitionName
    }

    if (options.maxCount !== undefined) {
      maxCount = options.maxCount;
      messageInstance = null;
    }
  },
  destroy: function destroy() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  }
};
['success', 'info', 'warning', 'error', 'loading'].forEach(function (type) {
  api[type] = function (content, duration, onClose) {
    if (isArgsProps(content)) {
      return api.open(_extends(_extends({}, content), {
        type: type
      }));
    }

    if (typeof duration === 'function') {
      onClose = duration;
      duration = undefined;
    }

    return api.open({
      content: content,
      duration: duration,
      type: type,
      onClose: onClose
    });
  };
});
api.warn = api.warning;

export { api as default };
