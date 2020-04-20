function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import ReactSplitPane from './react-split-pane-patched/index.esm';
import './splitpane.component.scss';

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

    return /*#__PURE__*/React.createElement(ReactSplitPane, _extends({}, otherProps, {
      defaultSize: getSize(this.props),
      onDragFinished: this.handleDragFinished
    }), children);
  };

  return SplitPane;
}(React.Component);

_defineProperty(SplitPane, "defaultProps", {
  defaultSize: '50%',
  rememberSize: true,
  onDragFinished: function onDragFinished() {}
});

export { SplitPane as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGxpdHBhbmUuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIlJlYWN0U3BsaXRQYW5lIiwiZ2V0U2l6ZSIsInByb3BzIiwiaWQiLCJyZW1lbWJlclNpemUiLCJkZWZhdWx0U2l6ZSIsIml0ZW0iLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZUludCIsInNldFNpemUiLCJzaXplIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJTcGxpdFBhbmUiLCJmaXJlUmVzaXplRXZlbnQiLCJkb2N1bWVudCIsImNyZWF0ZUV2ZW50IiwiZXZ0IiwiaW5pdEV2ZW50Iiwid2luZG93IiwiZGlzcGF0Y2hFdmVudCIsIm9uRHJhZ0ZpbmlzaGVkIiwicmVuZGVyIiwiY2hpbGRyZW4iLCJvdGhlclByb3BzIiwiaGFuZGxlRHJhZ0ZpbmlzaGVkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLGNBQVAsTUFBMkIsc0NBQTNCO0FBQ0EsT0FBTyw0QkFBUDs7QUFFQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUNqQkMsRUFEaUIsR0FDaUJELEtBRGpCLENBQ2pCQyxFQURpQjtBQUFBLE1BQ2JDLFlBRGEsR0FDaUJGLEtBRGpCLENBQ2JFLFlBRGE7QUFBQSxNQUNDQyxXQURELEdBQ2lCSCxLQURqQixDQUNDRyxXQUREOztBQUV6QixNQUFJRCxZQUFKLEVBQWtCO0FBQ2hCLFFBQU1FLElBQUksR0FBR0MsY0FBYyxDQUFDQyxPQUFmLHFCQUF5Q0wsRUFBekMsQ0FBYjs7QUFDQSxRQUFJRyxJQUFKLEVBQVU7QUFDUixhQUFPRyxRQUFRLENBQUNILElBQUQsRUFBTyxFQUFQLENBQWY7QUFDRDtBQUNGOztBQUNELFNBQU9ELFdBQVA7QUFDRCxDQVREOztBQVdBLElBQU1LLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNQLEVBQUQsRUFBS1EsSUFBTCxFQUFjO0FBQzVCSixFQUFBQSxjQUFjLENBQUNLLE9BQWYscUJBQXlDVCxFQUF6QyxFQUErQ1UsSUFBSSxDQUFDQyxTQUFMLENBQWVILElBQWYsQ0FBL0M7QUFDRCxDQUZEOztJQUlxQkksUzs7Ozs7Ozs7Ozs7Ozs7eUVBZUUsWUFBTTtBQUN6QixZQUFLQyxlQUFMO0FBQ0QsSzs7c0VBRWlCLFlBQU07QUFDdEIsVUFBSUMsUUFBUSxDQUFDQyxXQUFiLEVBQTBCO0FBQ3hCLFlBQU1DLEdBQUcsR0FBR0YsUUFBUSxDQUFDQyxXQUFULENBQXFCLFlBQXJCLENBQVo7QUFDQUMsUUFBQUEsR0FBRyxDQUFDQyxTQUFKLENBQWMsUUFBZCxFQUF3QixJQUF4QixFQUE4QixLQUE5QjtBQUNBQyxRQUFBQSxNQUFNLENBQUNDLGFBQVAsQ0FBcUJILEdBQXJCO0FBQ0Q7QUFDRixLOzt5RUFFb0IsVUFBQ1IsSUFBRCxFQUFVO0FBQUEsd0JBQ2dCLE1BQUtULEtBRHJCO0FBQUEsVUFDckJDLEVBRHFCLGVBQ3JCQSxFQURxQjtBQUFBLFVBQ2pCQyxZQURpQixlQUNqQkEsWUFEaUI7QUFBQSxVQUNIbUIsY0FERyxlQUNIQSxjQURHOztBQUU3QixVQUFJbkIsWUFBSixFQUFrQjtBQUNoQk0sUUFBQUEsT0FBTyxDQUFDUCxFQUFELEVBQUtRLElBQUwsQ0FBUDtBQUNEOztBQUNEWSxNQUFBQSxjQUFjLENBQUNaLElBQUQsQ0FBZDs7QUFDQSxZQUFLSyxlQUFMO0FBQ0QsSzs7Ozs7OztTQUVEUSxNLEdBQUEsa0JBQVM7QUFBQSx1QkFLSCxLQUFLdEIsS0FMRjtBQUFBLFFBRUxDLEVBRkssZ0JBRUxBLEVBRks7QUFBQSxRQUdMc0IsUUFISyxnQkFHTEEsUUFISztBQUFBLFFBSUZDLFVBSkU7O0FBTVAsd0JBQ0Usb0JBQUMsY0FBRCxlQUNNQSxVQUROO0FBRUUsTUFBQSxXQUFXLEVBQUV6QixPQUFPLENBQUMsS0FBS0MsS0FBTixDQUZ0QjtBQUdFLE1BQUEsY0FBYyxFQUFFLEtBQUt5QjtBQUh2QixRQUtJRixRQUxKLENBREY7QUFTRCxHOzs7RUFuRG9DM0IsS0FBSyxDQUFDOEIsUzs7Z0JBQXhCYixTLGtCQVNHO0FBQ3BCVixFQUFBQSxXQUFXLEVBQUUsS0FETztBQUVwQkQsRUFBQUEsWUFBWSxFQUFFLElBRk07QUFHcEJtQixFQUFBQSxjQUFjLEVBQUUsMEJBQU0sQ0FBRTtBQUhKLEM7O1NBVEhSLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdFNwbGl0UGFuZSBmcm9tICcuL3JlYWN0LXNwbGl0LXBhbmUtcGF0Y2hlZC9pbmRleC5lc20nO1xuaW1wb3J0ICcuL3NwbGl0cGFuZS5jb21wb25lbnQuc2Nzcyc7XG5cbmNvbnN0IGdldFNpemUgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBpZCwgcmVtZW1iZXJTaXplLCBkZWZhdWx0U2l6ZSB9ID0gcHJvcHM7XG4gIGlmIChyZW1lbWJlclNpemUpIHtcbiAgICBjb25zdCBpdGVtID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShgc3BsaXRwYW5lX3NpemVfJHtpZH1gKTtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KGl0ZW0sIDEwKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlZmF1bHRTaXplO1xufTtcblxuY29uc3Qgc2V0U2l6ZSA9IChpZCwgc2l6ZSkgPT4ge1xuICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGBzcGxpdHBhbmVfc2l6ZV8ke2lkfWAsIEpTT04uc3RyaW5naWZ5KHNpemUpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwbGl0UGFuZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBkZWZhdWx0U2l6ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIHJlbWVtYmVyU2l6ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25EcmFnRmluaXNoZWQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSkuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGRlZmF1bHRTaXplOiAnNTAlJyxcbiAgICByZW1lbWJlclNpemU6IHRydWUsXG4gICAgb25EcmFnRmluaXNoZWQ6ICgpID0+IHt9LFxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlID0gKCkgPT4ge1xuICAgIHRoaXMuZmlyZVJlc2l6ZUV2ZW50KCk7XG4gIH1cblxuICBmaXJlUmVzaXplRXZlbnQgPSAoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LmNyZWF0ZUV2ZW50KSB7XG4gICAgICBjb25zdCBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpO1xuICAgICAgZXZ0LmluaXRFdmVudCgncmVzaXplJywgdHJ1ZSwgZmFsc2UpO1xuICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlRHJhZ0ZpbmlzaGVkID0gKHNpemUpID0+IHtcbiAgICBjb25zdCB7IGlkLCByZW1lbWJlclNpemUsIG9uRHJhZ0ZpbmlzaGVkIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChyZW1lbWJlclNpemUpIHtcbiAgICAgIHNldFNpemUoaWQsIHNpemUpO1xuICAgIH1cbiAgICBvbkRyYWdGaW5pc2hlZChzaXplKTtcbiAgICB0aGlzLmZpcmVSZXNpemVFdmVudCgpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3RTcGxpdFBhbmVcbiAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgIGRlZmF1bHRTaXplPXtnZXRTaXplKHRoaXMucHJvcHMpfVxuICAgICAgICBvbkRyYWdGaW5pc2hlZD17dGhpcy5oYW5kbGVEcmFnRmluaXNoZWR9XG4gICAgICA+XG4gICAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgPC9SZWFjdFNwbGl0UGFuZT5cbiAgICApO1xuICB9XG59XG4iXX0=