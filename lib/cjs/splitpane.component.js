'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

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

var SplitPane = (_temp = _class = function (_React$Component) {
  _inherits(SplitPane, _React$Component);

  function SplitPane(props) {
    _classCallCheck(this, SplitPane);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.fireResizeEvent = function () {
      if (document.createEvent) {
        var evt = document.createEvent('HTMLEvents');
        evt.initEvent('resize', true, false);
        window.dispatchEvent(evt);
      }
    };

    _this.handleDragFinished = function (size) {
      var _this$props = _this.props,
          id = _this$props.id,
          rememberSize = _this$props.rememberSize;

      if (rememberSize) {
        setSize(id, size);
      }
      _this.props.onDragFinished(size);
      _this.fireResizeEvent();
    };

    _this.defaultSize = getSize(props);
    return _this;
  }

  SplitPane.prototype.render = function render() {
    var _props = this.props,
        id = _props.id,
        children = _props.children,
        otherProps = _objectWithoutProperties(_props, ['id', 'children']);

    return _react2.default.createElement(
      _reactSplitPane2.default,
      _extends({}, otherProps, {
        defaultSize: this.defaultSize,
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
}, _temp);
exports.default = SplitPane;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGxpdHBhbmUuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJnZXRTaXplIiwicHJvcHMiLCJpZCIsInJlbWVtYmVyU2l6ZSIsImRlZmF1bHRTaXplIiwiaXRlbSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlSW50Iiwic2V0U2l6ZSIsInNpemUiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIlNwbGl0UGFuZSIsImZpcmVSZXNpemVFdmVudCIsImRvY3VtZW50IiwiY3JlYXRlRXZlbnQiLCJldnQiLCJpbml0RXZlbnQiLCJ3aW5kb3ciLCJkaXNwYXRjaEV2ZW50IiwiaGFuZGxlRHJhZ0ZpbmlzaGVkIiwib25EcmFnRmluaXNoZWQiLCJyZW5kZXIiLCJjaGlsZHJlbiIsIm90aGVyUHJvcHMiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDakJDLEVBRGlCLEdBQ2lCRCxLQURqQixDQUNqQkMsRUFEaUI7QUFBQSxNQUNiQyxZQURhLEdBQ2lCRixLQURqQixDQUNiRSxZQURhO0FBQUEsTUFDQ0MsV0FERCxHQUNpQkgsS0FEakIsQ0FDQ0csV0FERDs7QUFFekIsTUFBSUQsWUFBSixFQUFrQjtBQUNoQixRQUFNRSxPQUFPQyxlQUFlQyxPQUFmLHFCQUF5Q0wsRUFBekMsQ0FBYjtBQUNBLFFBQUlHLElBQUosRUFBVTtBQUNSLGFBQU9HLFNBQVNILElBQVQsRUFBZSxFQUFmLENBQVA7QUFDRDtBQUNGO0FBQ0QsU0FBT0QsV0FBUDtBQUNELENBVEQ7O0FBV0EsSUFBTUssVUFBVSxTQUFWQSxPQUFVLENBQUNQLEVBQUQsRUFBS1EsSUFBTCxFQUFjO0FBQzVCSixpQkFBZUssT0FBZixxQkFBeUNULEVBQXpDLEVBQStDVSxLQUFLQyxTQUFMLENBQWVILElBQWYsQ0FBL0M7QUFDRCxDQUZEOztJQUlxQkksUzs7O0FBZW5CLHFCQUFZYixLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLDRCQUFNQSxLQUFOLENBRGlCOztBQUFBLFVBS25CYyxlQUxtQixHQUtELFlBQU07QUFDdEIsVUFBSUMsU0FBU0MsV0FBYixFQUEwQjtBQUN4QixZQUFNQyxNQUFNRixTQUFTQyxXQUFULENBQXFCLFlBQXJCLENBQVo7QUFDQUMsWUFBSUMsU0FBSixDQUFjLFFBQWQsRUFBd0IsSUFBeEIsRUFBOEIsS0FBOUI7QUFDQUMsZUFBT0MsYUFBUCxDQUFxQkgsR0FBckI7QUFDRDtBQUNGLEtBWGtCOztBQUFBLFVBYW5CSSxrQkFibUIsR0FhRSxVQUFDWixJQUFELEVBQVU7QUFBQSx3QkFDQSxNQUFLVCxLQURMO0FBQUEsVUFDckJDLEVBRHFCLGVBQ3JCQSxFQURxQjtBQUFBLFVBQ2pCQyxZQURpQixlQUNqQkEsWUFEaUI7O0FBRTdCLFVBQUlBLFlBQUosRUFBa0I7QUFDaEJNLGdCQUFRUCxFQUFSLEVBQVlRLElBQVo7QUFDRDtBQUNELFlBQUtULEtBQUwsQ0FBV3NCLGNBQVgsQ0FBMEJiLElBQTFCO0FBQ0EsWUFBS0ssZUFBTDtBQUNELEtBcEJrQjs7QUFFakIsVUFBS1gsV0FBTCxHQUFtQkosUUFBUUMsS0FBUixDQUFuQjtBQUZpQjtBQUdsQjs7c0JBbUJEdUIsTSxxQkFBUztBQUFBLGlCQUtILEtBQUt2QixLQUxGO0FBQUEsUUFFTEMsRUFGSyxVQUVMQSxFQUZLO0FBQUEsUUFHTHVCLFFBSEssVUFHTEEsUUFISztBQUFBLFFBSUZDLFVBSkU7O0FBTVAsV0FDRTtBQUFBO0FBQUEsbUJBQ01BLFVBRE47QUFFRSxxQkFBYSxLQUFLdEIsV0FGcEI7QUFHRSx3QkFBZ0IsS0FBS2tCO0FBSHZCO0FBS0lHO0FBTEosS0FERjtBQVNELEc7OztFQXBEb0MsZ0JBQU1FLFMsVUFTcENDLFksR0FBZTtBQUNwQnhCLGVBQWEsS0FETztBQUVwQkQsZ0JBQWMsSUFGTTtBQUdwQm9CLGtCQUFnQiwwQkFBTSxDQUFFO0FBSEosQztrQkFUSFQsUyIsImZpbGUiOiJzcGxpdHBhbmUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3RTcGxpdFBhbmUgZnJvbSAncmVhY3Qtc3BsaXQtcGFuZSc7XG5pbXBvcnQgJy4vc3BsaXRwYW5lLmNvbXBvbmVudC5zY3NzJztcblxuY29uc3QgZ2V0U2l6ZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGlkLCByZW1lbWJlclNpemUsIGRlZmF1bHRTaXplIH0gPSBwcm9wcztcbiAgaWYgKHJlbWVtYmVyU2l6ZSkge1xuICAgIGNvbnN0IGl0ZW0gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGBzcGxpdHBhbmVfc2l6ZV8ke2lkfWApO1xuICAgIGlmIChpdGVtKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQoaXRlbSwgMTApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVmYXVsdFNpemU7XG59O1xuXG5jb25zdCBzZXRTaXplID0gKGlkLCBzaXplKSA9PiB7XG4gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oYHNwbGl0cGFuZV9zaXplXyR7aWR9YCwgSlNPTi5zdHJpbmdpZnkoc2l6ZSkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BsaXRQYW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGRlZmF1bHRTaXplOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gICAgcmVtZW1iZXJTaXplOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvbkRyYWdGaW5pc2hlZDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKS5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGVmYXVsdFNpemU6ICc1MCUnLFxuICAgIHJlbWVtYmVyU2l6ZTogdHJ1ZSxcbiAgICBvbkRyYWdGaW5pc2hlZDogKCkgPT4ge30sXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmRlZmF1bHRTaXplID0gZ2V0U2l6ZShwcm9wcyk7XG4gIH1cblxuICBmaXJlUmVzaXplRXZlbnQgPSAoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LmNyZWF0ZUV2ZW50KSB7XG4gICAgICBjb25zdCBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpO1xuICAgICAgZXZ0LmluaXRFdmVudCgncmVzaXplJywgdHJ1ZSwgZmFsc2UpO1xuICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlRHJhZ0ZpbmlzaGVkID0gKHNpemUpID0+IHtcbiAgICBjb25zdCB7IGlkLCByZW1lbWJlclNpemUgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHJlbWVtYmVyU2l6ZSkge1xuICAgICAgc2V0U2l6ZShpZCwgc2l6ZSk7XG4gICAgfVxuICAgIHRoaXMucHJvcHMub25EcmFnRmluaXNoZWQoc2l6ZSk7XG4gICAgdGhpcy5maXJlUmVzaXplRXZlbnQoKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0U3BsaXRQYW5lXG4gICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICBkZWZhdWx0U2l6ZT17dGhpcy5kZWZhdWx0U2l6ZX1cbiAgICAgICAgb25EcmFnRmluaXNoZWQ9e3RoaXMuaGFuZGxlRHJhZ0ZpbmlzaGVkfVxuICAgICAgPlxuICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICAgIDwvUmVhY3RTcGxpdFBhbmU+XG4gICAgKTtcbiAgfVxufVxuIl19