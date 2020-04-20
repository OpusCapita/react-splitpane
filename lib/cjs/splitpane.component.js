"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = _interopRequireDefault(require("./react-split-pane-patched/index.esm"));

require("./splitpane.component.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getSize = function getSize(props) {
  var id = props.id,
      rememberSize = props.rememberSize,
      defaultSize = props.defaultSize;

  if (rememberSize) {
    var item = sessionStorage.getItem("splitpane_size_" + id);

    if (item) {
      return parseInt(item, 10);
    }
  }

  return defaultSize;
};

var setSize = function setSize(id, size) {
  sessionStorage.setItem("splitpane_size_" + id, JSON.stringify(size));
};

var SplitPane = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(SplitPane, _React$Component);

  var _super = _createSuper(SplitPane);

  function SplitPane() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function () {
      _this.fireResizeEvent();
    });

    _defineProperty(_assertThisInitialized(_this), "fireResizeEvent", function () {
      if (document.createEvent) {
        var evt = document.createEvent('HTMLEvents');
        evt.initEvent('resize', true, false);
        window.dispatchEvent(evt);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleDragFinished", function (size) {
      var _this$props = _this.props,
          id = _this$props.id,
          rememberSize = _this$props.rememberSize,
          onDragFinished = _this$props.onDragFinished;

      if (rememberSize) {
        setSize(id, size);
      }

      onDragFinished(size);

      _this.fireResizeEvent();
    });

    return _this;
  }

  var _proto = SplitPane.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        id = _this$props2.id,
        children = _this$props2.children,
        otherProps = _objectWithoutPropertiesLoose(_this$props2, ["id", "children"]);

    return /*#__PURE__*/_react["default"].createElement(_index["default"], _extends({}, otherProps, {
      defaultSize: getSize(this.props),
      onDragFinished: this.handleDragFinished
    }), children);
  };

  return SplitPane;
}(_react["default"].Component);

exports["default"] = SplitPane;

_defineProperty(SplitPane, "defaultProps", {
  defaultSize: '50%',
  rememberSize: true,
  onDragFinished: function onDragFinished() {}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGxpdHBhbmUuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJnZXRTaXplIiwicHJvcHMiLCJpZCIsInJlbWVtYmVyU2l6ZSIsImRlZmF1bHRTaXplIiwiaXRlbSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlSW50Iiwic2V0U2l6ZSIsInNpemUiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIlNwbGl0UGFuZSIsImZpcmVSZXNpemVFdmVudCIsImRvY3VtZW50IiwiY3JlYXRlRXZlbnQiLCJldnQiLCJpbml0RXZlbnQiLCJ3aW5kb3ciLCJkaXNwYXRjaEV2ZW50Iiwib25EcmFnRmluaXNoZWQiLCJyZW5kZXIiLCJjaGlsZHJlbiIsIm90aGVyUHJvcHMiLCJoYW5kbGVEcmFnRmluaXNoZWQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ2pCQyxFQURpQixHQUNpQkQsS0FEakIsQ0FDakJDLEVBRGlCO0FBQUEsTUFDYkMsWUFEYSxHQUNpQkYsS0FEakIsQ0FDYkUsWUFEYTtBQUFBLE1BQ0NDLFdBREQsR0FDaUJILEtBRGpCLENBQ0NHLFdBREQ7O0FBRXpCLE1BQUlELFlBQUosRUFBa0I7QUFDaEIsUUFBTUUsSUFBSSxHQUFHQyxjQUFjLENBQUNDLE9BQWYscUJBQXlDTCxFQUF6QyxDQUFiOztBQUNBLFFBQUlHLElBQUosRUFBVTtBQUNSLGFBQU9HLFFBQVEsQ0FBQ0gsSUFBRCxFQUFPLEVBQVAsQ0FBZjtBQUNEO0FBQ0Y7O0FBQ0QsU0FBT0QsV0FBUDtBQUNELENBVEQ7O0FBV0EsSUFBTUssT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ1AsRUFBRCxFQUFLUSxJQUFMLEVBQWM7QUFDNUJKLEVBQUFBLGNBQWMsQ0FBQ0ssT0FBZixxQkFBeUNULEVBQXpDLEVBQStDVSxJQUFJLENBQUNDLFNBQUwsQ0FBZUgsSUFBZixDQUEvQztBQUNELENBRkQ7O0lBSXFCSSxTOzs7Ozs7Ozs7Ozs7Ozt5RUFlRSxZQUFNO0FBQ3pCLFlBQUtDLGVBQUw7QUFDRCxLOztzRUFFaUIsWUFBTTtBQUN0QixVQUFJQyxRQUFRLENBQUNDLFdBQWIsRUFBMEI7QUFDeEIsWUFBTUMsR0FBRyxHQUFHRixRQUFRLENBQUNDLFdBQVQsQ0FBcUIsWUFBckIsQ0FBWjtBQUNBQyxRQUFBQSxHQUFHLENBQUNDLFNBQUosQ0FBYyxRQUFkLEVBQXdCLElBQXhCLEVBQThCLEtBQTlCO0FBQ0FDLFFBQUFBLE1BQU0sQ0FBQ0MsYUFBUCxDQUFxQkgsR0FBckI7QUFDRDtBQUNGLEs7O3lFQUVvQixVQUFDUixJQUFELEVBQVU7QUFBQSx3QkFDZ0IsTUFBS1QsS0FEckI7QUFBQSxVQUNyQkMsRUFEcUIsZUFDckJBLEVBRHFCO0FBQUEsVUFDakJDLFlBRGlCLGVBQ2pCQSxZQURpQjtBQUFBLFVBQ0htQixjQURHLGVBQ0hBLGNBREc7O0FBRTdCLFVBQUluQixZQUFKLEVBQWtCO0FBQ2hCTSxRQUFBQSxPQUFPLENBQUNQLEVBQUQsRUFBS1EsSUFBTCxDQUFQO0FBQ0Q7O0FBQ0RZLE1BQUFBLGNBQWMsQ0FBQ1osSUFBRCxDQUFkOztBQUNBLFlBQUtLLGVBQUw7QUFDRCxLOzs7Ozs7O1NBRURRLE0sR0FBQSxrQkFBUztBQUFBLHVCQUtILEtBQUt0QixLQUxGO0FBQUEsUUFFTEMsRUFGSyxnQkFFTEEsRUFGSztBQUFBLFFBR0xzQixRQUhLLGdCQUdMQSxRQUhLO0FBQUEsUUFJRkMsVUFKRTs7QUFNUCx3QkFDRSxnQ0FBQyxpQkFBRCxlQUNNQSxVQUROO0FBRUUsTUFBQSxXQUFXLEVBQUV6QixPQUFPLENBQUMsS0FBS0MsS0FBTixDQUZ0QjtBQUdFLE1BQUEsY0FBYyxFQUFFLEtBQUt5QjtBQUh2QixRQUtJRixRQUxKLENBREY7QUFTRCxHOzs7RUFuRG9DRyxrQkFBTUMsUzs7OztnQkFBeEJkLFMsa0JBU0c7QUFDcEJWLEVBQUFBLFdBQVcsRUFBRSxLQURPO0FBRXBCRCxFQUFBQSxZQUFZLEVBQUUsSUFGTTtBQUdwQm1CLEVBQUFBLGNBQWMsRUFBRSwwQkFBTSxDQUFFO0FBSEosQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0U3BsaXRQYW5lIGZyb20gJy4vcmVhY3Qtc3BsaXQtcGFuZS1wYXRjaGVkL2luZGV4LmVzbSc7XG5pbXBvcnQgJy4vc3BsaXRwYW5lLmNvbXBvbmVudC5zY3NzJztcblxuY29uc3QgZ2V0U2l6ZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGlkLCByZW1lbWJlclNpemUsIGRlZmF1bHRTaXplIH0gPSBwcm9wcztcbiAgaWYgKHJlbWVtYmVyU2l6ZSkge1xuICAgIGNvbnN0IGl0ZW0gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGBzcGxpdHBhbmVfc2l6ZV8ke2lkfWApO1xuICAgIGlmIChpdGVtKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQoaXRlbSwgMTApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVmYXVsdFNpemU7XG59O1xuXG5jb25zdCBzZXRTaXplID0gKGlkLCBzaXplKSA9PiB7XG4gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oYHNwbGl0cGFuZV9zaXplXyR7aWR9YCwgSlNPTi5zdHJpbmdpZnkoc2l6ZSkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BsaXRQYW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGRlZmF1bHRTaXplOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gICAgcmVtZW1iZXJTaXplOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvbkRyYWdGaW5pc2hlZDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKS5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGVmYXVsdFNpemU6ICc1MCUnLFxuICAgIHJlbWVtYmVyU2l6ZTogdHJ1ZSxcbiAgICBvbkRyYWdGaW5pc2hlZDogKCkgPT4ge30sXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUgPSAoKSA9PiB7XG4gICAgdGhpcy5maXJlUmVzaXplRXZlbnQoKTtcbiAgfVxuXG4gIGZpcmVSZXNpemVFdmVudCA9ICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQuY3JlYXRlRXZlbnQpIHtcbiAgICAgIGNvbnN0IGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdIVE1MRXZlbnRzJyk7XG4gICAgICBldnQuaW5pdEV2ZW50KCdyZXNpemUnLCB0cnVlLCBmYWxzZSk7XG4gICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChldnQpO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVEcmFnRmluaXNoZWQgPSAoc2l6ZSkgPT4ge1xuICAgIGNvbnN0IHsgaWQsIHJlbWVtYmVyU2l6ZSwgb25EcmFnRmluaXNoZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHJlbWVtYmVyU2l6ZSkge1xuICAgICAgc2V0U2l6ZShpZCwgc2l6ZSk7XG4gICAgfVxuICAgIG9uRHJhZ0ZpbmlzaGVkKHNpemUpO1xuICAgIHRoaXMuZmlyZVJlc2l6ZUV2ZW50KCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdFNwbGl0UGFuZVxuICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgICAgZGVmYXVsdFNpemU9e2dldFNpemUodGhpcy5wcm9wcyl9XG4gICAgICAgIG9uRHJhZ0ZpbmlzaGVkPXt0aGlzLmhhbmRsZURyYWdGaW5pc2hlZH1cbiAgICAgID5cbiAgICAgICAgeyBjaGlsZHJlbiB9XG4gICAgICA8L1JlYWN0U3BsaXRQYW5lPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==