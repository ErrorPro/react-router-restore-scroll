'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RestoreWindowScroll = require('./RestoreWindowScroll');

var _RestoreWindowScroll2 = _interopRequireDefault(_RestoreWindowScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useRouterRestoreScroll = function useRouterRestoreScroll() {
  return {
    renderRouterContext: function renderRouterContext(child, props) {
      return _react2.default.createElement(_RestoreWindowScroll2.default, {
        restoreWindow: props.router.restoreScroll.restoreWindow,
        location: props.location,
        children: child
      });
    }
  };
};

exports.default = useRouterRestoreScroll;