import { _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _createClass, d as _defineProperty, e as _extends, f as _objectWithoutProperties } from './icon.js';
import React__default, { Component } from 'react';
import { c as classNames, P as PropTypes } from './config-provider.js';
import ReactDOM__default from 'react-dom';
import { c as createChainedFunction, A as Animate } from './menu.js';

var Notice = function (_Component) {
  _inherits(Notice, _Component);

  function Notice() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Notice);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Notice.__proto__ || Object.getPrototypeOf(Notice)).call.apply(_ref, [this].concat(args))), _this), _this.close = function (e) {
      if (e) {
        e.stopPropagation();
      }
      _this.clearCloseTimer();
      _this.props.onClose();
    }, _this.startCloseTimer = function () {
      if (_this.props.duration) {
        _this.closeTimer = setTimeout(function () {
          _this.close();
        }, _this.props.duration * 1000);
      }
    }, _this.clearCloseTimer = function () {
      if (_this.closeTimer) {
        clearTimeout(_this.closeTimer);
        _this.closeTimer = null;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Notice, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.startCloseTimer();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.duration !== prevProps.duration || this.props.update) {
        this.restartCloseTimer();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearCloseTimer();
    }
  }, {
    key: 'restartCloseTimer',
    value: function restartCloseTimer() {
      this.clearCloseTimer();
      this.startCloseTimer();
    }
  }, {
    key: 'render',
    value: function render() {
      var _className;

      var props = this.props;
      var componentClass = props.prefixCls + '-notice';
      var className = (_className = {}, _defineProperty(_className, '' + componentClass, 1), _defineProperty(_className, componentClass + '-closable', props.closable), _defineProperty(_className, props.className, !!props.className), _className);
      return React__default.createElement(
        'div',
        {
          className: classNames(className),
          style: props.style,
          onMouseEnter: this.clearCloseTimer,
          onMouseLeave: this.startCloseTimer,
          onClick: props.onClick
        },
        React__default.createElement(
          'div',
          { className: componentClass + '-content' },
          props.children
        ),
        props.closable ? React__default.createElement(
          'a',
          { tabIndex: '0', onClick: this.close, className: componentClass + '-close' },
          props.closeIcon || React__default.createElement('span', { className: componentClass + '-close-x' })
        ) : null
      );
    }
  }]);

  return Notice;
}(Component);

Notice.propTypes = {
  duration: PropTypes.number,
  onClose: PropTypes.func,
  children: PropTypes.any,
  update: PropTypes.bool,
  closeIcon: PropTypes.node
};
Notice.defaultProps = {
  onEnd: function onEnd() {},
  onClose: function onClose() {},

  duration: 1.5,
  style: {
    right: '50%'
  }
};

var seed = 0;
var now = Date.now();

function getUuid() {
  return 'rcNotification_' + now + '_' + seed++;
}

var Notification = function (_Component) {
  _inherits(Notification, _Component);

  function Notification() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Notification);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Notification.__proto__ || Object.getPrototypeOf(Notification)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      notices: []
    }, _this.add = function (notice) {
      var key = notice.key = notice.key || getUuid();
      var maxCount = _this.props.maxCount;

      _this.setState(function (previousState) {
        var notices = previousState.notices;
        var noticeIndex = notices.map(function (v) {
          return v.key;
        }).indexOf(key);
        var updatedNotices = notices.concat();
        if (noticeIndex !== -1) {
          updatedNotices.splice(noticeIndex, 1, notice);
        } else {
          if (maxCount && notices.length >= maxCount) {
                                                notice.updateKey = updatedNotices[0].updateKey || updatedNotices[0].key;
            updatedNotices.shift();
          }
          updatedNotices.push(notice);
        }
        return {
          notices: updatedNotices
        };
      });
    }, _this.remove = function (key) {
      _this.setState(function (previousState) {
        return {
          notices: previousState.notices.filter(function (notice) {
            return notice.key !== key;
          })
        };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Notification, [{
    key: 'getTransitionName',
    value: function getTransitionName() {
      var props = this.props;
      var transitionName = props.transitionName;
      if (!transitionName && props.animation) {
        transitionName = props.prefixCls + '-' + props.animation;
      }
      return transitionName;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this,
          _className;

      var props = this.props;
      var notices = this.state.notices;

      var noticeNodes = notices.map(function (notice, index) {
        var update = Boolean(index === notices.length - 1 && notice.updateKey);
        var key = notice.updateKey ? notice.updateKey : notice.key;
        var onClose = createChainedFunction(_this2.remove.bind(_this2, notice.key), notice.onClose);
        return React__default.createElement(
          Notice,
          _extends({
            prefixCls: props.prefixCls
          }, notice, {
            key: key,
            update: update,
            onClose: onClose,
            onClick: notice.onClick,
            closeIcon: props.closeIcon
          }),
          notice.content
        );
      });
      var className = (_className = {}, _defineProperty(_className, props.prefixCls, 1), _defineProperty(_className, props.className, !!props.className), _className);
      return React__default.createElement(
        'div',
        { className: classNames(className), style: props.style },
        React__default.createElement(
          Animate,
          { transitionName: this.getTransitionName() },
          noticeNodes
        )
      );
    }
  }]);

  return Notification;
}(Component);

Notification.propTypes = {
  prefixCls: PropTypes.string,
  transitionName: PropTypes.string,
  animation: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.object,
  maxCount: PropTypes.number,
  closeIcon: PropTypes.node
};
Notification.defaultProps = {
  prefixCls: 'rc-notification',
  animation: 'fade',
  style: {
    top: 65,
    left: '50%'
  }
};


Notification.newInstance = function newNotificationInstance(properties, callback) {
  var _ref2 = properties || {},
      getContainer = _ref2.getContainer,
      props = _objectWithoutProperties(_ref2, ['getContainer']);

  var div = document.createElement('div');
  if (getContainer) {
    var root = getContainer();
    root.appendChild(div);
  } else {
    document.body.appendChild(div);
  }
  var called = false;
  function ref(notification) {
    if (called) {
      return;
    }
    called = true;
    callback({
      notice: function notice(noticeProps) {
        notification.add(noticeProps);
      },
      removeNotice: function removeNotice(key) {
        notification.remove(key);
      },

      component: notification,
      destroy: function destroy() {
        ReactDOM__default.unmountComponentAtNode(div);
        div.parentNode.removeChild(div);
      }
    });
  }
  ReactDOM__default.render(React__default.createElement(Notification, _extends({}, props, { ref: ref })), div);
};

export { Notification as N };
