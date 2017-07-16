'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RestoreScroll = function (_React$Component) {
  _inherits(RestoreScroll, _React$Component);

  function RestoreScroll() {
    _classCallCheck(this, RestoreScroll);

    return _possibleConstructorReturn(this, (RestoreScroll.__proto__ || Object.getPrototypeOf(RestoreScroll)).apply(this, arguments));
  }

  _createClass(RestoreScroll, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var registerScroller = this.context.router.restoreScroll.registerScroller;

      registerScroller(this.props.scrollKey, (0, _reactDom.findDOMNode)(this));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var unregisterScroller = this.context.router.restoreScroll.unregisterScroller;

      unregisterScroller(this.props.scrollKey);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return RestoreScroll;
}(_react2.default.Component);

RestoreScroll.contextTypes = {
  router: _propTypes2.default.object.isRequired
};
RestoreScroll.propTypes = {
  scrollKey: _propTypes2.default.string.isRequired
};
exports.default = RestoreScroll;