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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGxpdHBhbmUuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJnZXRTaXplIiwicHJvcHMiLCJpZCIsInJlbWVtYmVyU2l6ZSIsImRlZmF1bHRTaXplIiwiaXRlbSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlSW50Iiwic2V0U2l6ZSIsInNpemUiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIlNwbGl0UGFuZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsImZpcmVSZXNpemVFdmVudCIsImRvY3VtZW50IiwiY3JlYXRlRXZlbnQiLCJldnQiLCJpbml0RXZlbnQiLCJ3aW5kb3ciLCJkaXNwYXRjaEV2ZW50IiwiaGFuZGxlRHJhZ0ZpbmlzaGVkIiwib25EcmFnRmluaXNoZWQiLCJyZW5kZXIiLCJjaGlsZHJlbiIsIm90aGVyUHJvcHMiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDakJDLEVBRGlCLEdBQ2lCRCxLQURqQixDQUNqQkMsRUFEaUI7QUFBQSxNQUNiQyxZQURhLEdBQ2lCRixLQURqQixDQUNiRSxZQURhO0FBQUEsTUFDQ0MsV0FERCxHQUNpQkgsS0FEakIsQ0FDQ0csV0FERDs7QUFFekIsTUFBSUQsWUFBSixFQUFrQjtBQUNoQixRQUFNRSxPQUFPQyxlQUFlQyxPQUFmLHFCQUF5Q0wsRUFBekMsQ0FBYjtBQUNBLFFBQUlHLElBQUosRUFBVTtBQUNSLGFBQU9HLFNBQVNILElBQVQsRUFBZSxFQUFmLENBQVA7QUFDRDtBQUNGO0FBQ0QsU0FBT0QsV0FBUDtBQUNELENBVEQ7O0FBV0EsSUFBTUssVUFBVSxTQUFWQSxPQUFVLENBQUNQLEVBQUQsRUFBS1EsSUFBTCxFQUFjO0FBQzVCSixpQkFBZUssT0FBZixxQkFBeUNULEVBQXpDLEVBQStDVSxLQUFLQyxTQUFMLENBQWVILElBQWYsQ0FBL0M7QUFDRCxDQUZEOztJQUlxQkksUzs7Ozs7Ozs7Ozs7O3dKQWVuQkMsa0IsR0FBcUIsWUFBTTtBQUN6QixZQUFLQyxlQUFMO0FBQ0QsSyxRQUVEQSxlLEdBQWtCLFlBQU07QUFDdEIsVUFBSUMsU0FBU0MsV0FBYixFQUEwQjtBQUN4QixZQUFNQyxNQUFNRixTQUFTQyxXQUFULENBQXFCLFlBQXJCLENBQVo7QUFDQUMsWUFBSUMsU0FBSixDQUFjLFFBQWQsRUFBd0IsSUFBeEIsRUFBOEIsS0FBOUI7QUFDQUMsZUFBT0MsYUFBUCxDQUFxQkgsR0FBckI7QUFDRDtBQUNGLEssUUFFREksa0IsR0FBcUIsVUFBQ2IsSUFBRCxFQUFVO0FBQUEsd0JBQ0EsTUFBS1QsS0FETDtBQUFBLFVBQ3JCQyxFQURxQixlQUNyQkEsRUFEcUI7QUFBQSxVQUNqQkMsWUFEaUIsZUFDakJBLFlBRGlCOztBQUU3QixVQUFJQSxZQUFKLEVBQWtCO0FBQ2hCTSxnQkFBUVAsRUFBUixFQUFZUSxJQUFaO0FBQ0Q7QUFDRCxZQUFLVCxLQUFMLENBQVd1QixjQUFYLENBQTBCZCxJQUExQjtBQUNBLFlBQUtNLGVBQUw7QUFDRCxLOzs7c0JBRURTLE0scUJBQVM7QUFBQSxpQkFLSCxLQUFLeEIsS0FMRjtBQUFBLFFBRUxDLEVBRkssVUFFTEEsRUFGSztBQUFBLFFBR0x3QixRQUhLLFVBR0xBLFFBSEs7QUFBQSxRQUlGQyxVQUpFOztBQU1QLFdBQ0U7QUFBQTtBQUFBLG1CQUNNQSxVQUROO0FBRUUscUJBQWEzQixRQUFRLEtBQUtDLEtBQWIsQ0FGZjtBQUdFLHdCQUFnQixLQUFLc0I7QUFIdkI7QUFLSUc7QUFMSixLQURGO0FBU0QsRzs7O0VBbkRvQyxnQkFBTUUsUyxVQVNwQ0MsWSxHQUFlO0FBQ3BCekIsZUFBYSxLQURPO0FBRXBCRCxnQkFBYyxJQUZNO0FBR3BCcUIsa0JBQWdCLDBCQUFNLENBQUU7QUFISixDO2tCQVRIVixTIiwiZmlsZSI6InNwbGl0cGFuZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUmVhY3RTcGxpdFBhbmUgZnJvbSAncmVhY3Qtc3BsaXQtcGFuZSc7XHJcbmltcG9ydCAnLi9zcGxpdHBhbmUuY29tcG9uZW50LnNjc3MnO1xyXG5cclxuY29uc3QgZ2V0U2l6ZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaWQsIHJlbWVtYmVyU2l6ZSwgZGVmYXVsdFNpemUgfSA9IHByb3BzO1xyXG4gIGlmIChyZW1lbWJlclNpemUpIHtcclxuICAgIGNvbnN0IGl0ZW0gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGBzcGxpdHBhbmVfc2l6ZV8ke2lkfWApO1xyXG4gICAgaWYgKGl0ZW0pIHtcclxuICAgICAgcmV0dXJuIHBhcnNlSW50KGl0ZW0sIDEwKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGRlZmF1bHRTaXplO1xyXG59O1xyXG5cclxuY29uc3Qgc2V0U2l6ZSA9IChpZCwgc2l6ZSkgPT4ge1xyXG4gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oYHNwbGl0cGFuZV9zaXplXyR7aWR9YCwgSlNPTi5zdHJpbmdpZnkoc2l6ZSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BsaXRQYW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGRlZmF1bHRTaXplOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXHJcbiAgICByZW1lbWJlclNpemU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgb25EcmFnRmluaXNoZWQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKS5pc1JlcXVpcmVkLFxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBkZWZhdWx0U2l6ZTogJzUwJScsXHJcbiAgICByZW1lbWJlclNpemU6IHRydWUsXHJcbiAgICBvbkRyYWdGaW5pc2hlZDogKCkgPT4ge30sXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmZpcmVSZXNpemVFdmVudCgpO1xyXG4gIH1cclxuXHJcbiAgZmlyZVJlc2l6ZUV2ZW50ID0gKCkgPT4ge1xyXG4gICAgaWYgKGRvY3VtZW50LmNyZWF0ZUV2ZW50KSB7XHJcbiAgICAgIGNvbnN0IGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdIVE1MRXZlbnRzJyk7XHJcbiAgICAgIGV2dC5pbml0RXZlbnQoJ3Jlc2l6ZScsIHRydWUsIGZhbHNlKTtcclxuICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZ0KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBoYW5kbGVEcmFnRmluaXNoZWQgPSAoc2l6ZSkgPT4ge1xyXG4gICAgY29uc3QgeyBpZCwgcmVtZW1iZXJTaXplIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgaWYgKHJlbWVtYmVyU2l6ZSkge1xyXG4gICAgICBzZXRTaXplKGlkLCBzaXplKTtcclxuICAgIH1cclxuICAgIHRoaXMucHJvcHMub25EcmFnRmluaXNoZWQoc2l6ZSk7XHJcbiAgICB0aGlzLmZpcmVSZXNpemVFdmVudCgpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgaWQsXHJcbiAgICAgIGNoaWxkcmVuLFxyXG4gICAgICAuLi5vdGhlclByb3BzXHJcbiAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdFNwbGl0UGFuZVxyXG4gICAgICAgIHsuLi5vdGhlclByb3BzfVxyXG4gICAgICAgIGRlZmF1bHRTaXplPXtnZXRTaXplKHRoaXMucHJvcHMpfVxyXG4gICAgICAgIG9uRHJhZ0ZpbmlzaGVkPXt0aGlzLmhhbmRsZURyYWdGaW5pc2hlZH1cclxuICAgICAgPlxyXG4gICAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgICA8L1JlYWN0U3BsaXRQYW5lPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19