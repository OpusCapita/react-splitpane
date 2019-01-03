'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSplitPane = require('react-split-pane');

var _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);

require('./splitpane.component.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getSize = function getSize(props) {
  var id = props.id,
      rememberSize = props.rememberSize,
      defaultSize = props.defaultSize;

  if (rememberSize) {
    var item = sessionStorage.getItem('splitpane_size_' + id);
    if (item) {
      return parseInt(item, 10);
    }
  }
  return defaultSize;
};

var setSize = function setSize(id, size) {
  sessionStorage.setItem('splitpane_size_' + id, JSON.stringify(size));
};

var SplitPane = (_temp2 = _class = function (_React$Component) {
  _inherits(SplitPane, _React$Component);

  function SplitPane() {
    var _temp, _this, _ret;

    _classCallCheck(this, SplitPane);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.componentDidUpdate = function () {
      _this.fireResizeEvent();
    }, _this.fireResizeEvent = function () {
      if (document.createEvent) {
        var evt = document.createEvent('HTMLEvents');
        evt.initEvent('resize', true, false);
        window.dispatchEvent(evt);
      }
    }, _this.handleDragFinished = function (size) {
      var _this$props = _this.props,
          id = _this$props.id,
          rememberSize = _this$props.rememberSize;

      if (rememberSize) {
        setSize(id, size);
      }
      _this.props.onDragFinished(size);
      _this.fireResizeEvent();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SplitPane.prototype.render = function render() {
    var _props = this.props,
        id = _props.id,
        children = _props.children,
        otherProps = _objectWithoutProperties(_props, ['id', 'children']);

    return _react2.default.createElement(
      _reactSplitPane2.default,
      _extends({}, otherProps, {
        defaultSize: getSize(this.props),
        onDragFinished: this.handleDragFinished
      }),
      children
    );
  };

  return SplitPane;
}(_react2.default.Component), _class.defaultProps = {
  defaultSize: '50%',
  rememberSize: true,
  onDragFinished: function onDragFinished() {}
}, _temp2);
exports.default = SplitPane;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGxpdHBhbmUuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJnZXRTaXplIiwicHJvcHMiLCJpZCIsInJlbWVtYmVyU2l6ZSIsImRlZmF1bHRTaXplIiwiaXRlbSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlSW50Iiwic2V0U2l6ZSIsInNpemUiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIlNwbGl0UGFuZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsImZpcmVSZXNpemVFdmVudCIsImRvY3VtZW50IiwiY3JlYXRlRXZlbnQiLCJldnQiLCJpbml0RXZlbnQiLCJ3aW5kb3ciLCJkaXNwYXRjaEV2ZW50IiwiaGFuZGxlRHJhZ0ZpbmlzaGVkIiwib25EcmFnRmluaXNoZWQiLCJyZW5kZXIiLCJjaGlsZHJlbiIsIm90aGVyUHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVUsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUNqQkMsRUFEaUIsR0FDaUJELEtBRGpCLENBQ2pCQyxFQURpQjtBQUFBLE1BQ2JDLFlBRGEsR0FDaUJGLEtBRGpCLENBQ2JFLFlBRGE7QUFBQSxNQUNDQyxXQURELEdBQ2lCSCxLQURqQixDQUNDRyxXQUREOztBQUV6QixNQUFJRCxZQUFKLEVBQWtCO0FBQ2hCLFFBQU1FLE9BQU9DLGVBQWVDLE9BQWYscUJBQXlDTCxFQUF6QyxDQUFiO0FBQ0EsUUFBSUcsSUFBSixFQUFVO0FBQ1IsYUFBT0csU0FBU0gsSUFBVCxFQUFlLEVBQWYsQ0FBUDtBQUNEO0FBQ0Y7QUFDRCxTQUFPRCxXQUFQO0FBQ0QsQ0FURDs7QUFXQSxJQUFNSyxVQUFVLFNBQVZBLE9BQVUsQ0FBQ1AsRUFBRCxFQUFLUSxJQUFMLEVBQWM7QUFDNUJKLGlCQUFlSyxPQUFmLHFCQUF5Q1QsRUFBekMsRUFBK0NVLEtBQUtDLFNBQUwsQ0FBZUgsSUFBZixDQUEvQztBQUNELENBRkQ7O0lBSXFCSSxTOzs7Ozs7Ozs7Ozs7d0pBZW5CQyxrQixHQUFxQixZQUFNO0FBQ3pCLFlBQUtDLGVBQUw7QUFDRCxLLFFBRURBLGUsR0FBa0IsWUFBTTtBQUN0QixVQUFJQyxTQUFTQyxXQUFiLEVBQTBCO0FBQ3hCLFlBQU1DLE1BQU1GLFNBQVNDLFdBQVQsQ0FBcUIsWUFBckIsQ0FBWjtBQUNBQyxZQUFJQyxTQUFKLENBQWMsUUFBZCxFQUF3QixJQUF4QixFQUE4QixLQUE5QjtBQUNBQyxlQUFPQyxhQUFQLENBQXFCSCxHQUFyQjtBQUNEO0FBQ0YsSyxRQUVESSxrQixHQUFxQixVQUFDYixJQUFELEVBQVU7QUFBQSx3QkFDQSxNQUFLVCxLQURMO0FBQUEsVUFDckJDLEVBRHFCLGVBQ3JCQSxFQURxQjtBQUFBLFVBQ2pCQyxZQURpQixlQUNqQkEsWUFEaUI7O0FBRTdCLFVBQUlBLFlBQUosRUFBa0I7QUFDaEJNLGdCQUFRUCxFQUFSLEVBQVlRLElBQVo7QUFDRDtBQUNELFlBQUtULEtBQUwsQ0FBV3VCLGNBQVgsQ0FBMEJkLElBQTFCO0FBQ0EsWUFBS00sZUFBTDtBQUNELEs7OztzQkFFRFMsTSxxQkFBUztBQUFBLGlCQUtILEtBQUt4QixLQUxGO0FBQUEsUUFFTEMsRUFGSyxVQUVMQSxFQUZLO0FBQUEsUUFHTHdCLFFBSEssVUFHTEEsUUFISztBQUFBLFFBSUZDLFVBSkU7O0FBTVAsV0FDRTtBQUFDLDhCQUFEO0FBQUEsbUJBQ01BLFVBRE47QUFFRSxxQkFBYTNCLFFBQVEsS0FBS0MsS0FBYixDQUZmO0FBR0Usd0JBQWdCLEtBQUtzQjtBQUh2QjtBQUtJRztBQUxKLEtBREY7QUFTRCxHOzs7RUFuRG9DRSxnQkFBTUMsUyxVQVNwQ0MsWSxHQUFlO0FBQ3BCMUIsZUFBYSxLQURPO0FBRXBCRCxnQkFBYyxJQUZNO0FBR3BCcUIsa0JBQWdCLDBCQUFNLENBQUU7QUFISixDO2tCQVRIVixTIiwiZmlsZSI6InNwbGl0cGFuZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdFNwbGl0UGFuZSBmcm9tICdyZWFjdC1zcGxpdC1wYW5lJztcbmltcG9ydCAnLi9zcGxpdHBhbmUuY29tcG9uZW50LnNjc3MnO1xuXG5jb25zdCBnZXRTaXplID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaWQsIHJlbWVtYmVyU2l6ZSwgZGVmYXVsdFNpemUgfSA9IHByb3BzO1xuICBpZiAocmVtZW1iZXJTaXplKSB7XG4gICAgY29uc3QgaXRlbSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oYHNwbGl0cGFuZV9zaXplXyR7aWR9YCk7XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIHJldHVybiBwYXJzZUludChpdGVtLCAxMCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWZhdWx0U2l6ZTtcbn07XG5cbmNvbnN0IHNldFNpemUgPSAoaWQsIHNpemUpID0+IHtcbiAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShgc3BsaXRwYW5lX3NpemVfJHtpZH1gLCBKU09OLnN0cmluZ2lmeShzaXplKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGxpdFBhbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZGVmYXVsdFNpemU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgICByZW1lbWJlclNpemU6IFByb3BUeXBlcy5ib29sLFxuICAgIG9uRHJhZ0ZpbmlzaGVkOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkZWZhdWx0U2l6ZTogJzUwJScsXG4gICAgcmVtZW1iZXJTaXplOiB0cnVlLFxuICAgIG9uRHJhZ0ZpbmlzaGVkOiAoKSA9PiB7fSxcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSA9ICgpID0+IHtcbiAgICB0aGlzLmZpcmVSZXNpemVFdmVudCgpO1xuICB9XG5cbiAgZmlyZVJlc2l6ZUV2ZW50ID0gKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5jcmVhdGVFdmVudCkge1xuICAgICAgY29uc3QgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0hUTUxFdmVudHMnKTtcbiAgICAgIGV2dC5pbml0RXZlbnQoJ3Jlc2l6ZScsIHRydWUsIGZhbHNlKTtcbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZURyYWdGaW5pc2hlZCA9IChzaXplKSA9PiB7XG4gICAgY29uc3QgeyBpZCwgcmVtZW1iZXJTaXplIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChyZW1lbWJlclNpemUpIHtcbiAgICAgIHNldFNpemUoaWQsIHNpemUpO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uRHJhZ0ZpbmlzaGVkKHNpemUpO1xuICAgIHRoaXMuZmlyZVJlc2l6ZUV2ZW50KCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdFNwbGl0UGFuZVxuICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgICAgZGVmYXVsdFNpemU9e2dldFNpemUodGhpcy5wcm9wcyl9XG4gICAgICAgIG9uRHJhZ0ZpbmlzaGVkPXt0aGlzLmhhbmRsZURyYWdGaW5pc2hlZH1cbiAgICAgID5cbiAgICAgICAgeyBjaGlsZHJlbiB9XG4gICAgICA8L1JlYWN0U3BsaXRQYW5lPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==