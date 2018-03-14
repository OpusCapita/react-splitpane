var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import ReactSplitPane from 'react-split-pane';
import './splitpane.component.scss';

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

    return React.createElement(
      ReactSplitPane,
      _extends({}, otherProps, {
        defaultSize: this.defaultSize,
        onDragFinished: this.handleDragFinished
      }),
      children
    );
  };

  return SplitPane;
}(React.Component), _class.defaultProps = {
  defaultSize: '50%',
  rememberSize: true,
  onDragFinished: function onDragFinished() {}
}, _temp);
export { SplitPane as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGxpdHBhbmUuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIlJlYWN0U3BsaXRQYW5lIiwiZ2V0U2l6ZSIsInByb3BzIiwiaWQiLCJyZW1lbWJlclNpemUiLCJkZWZhdWx0U2l6ZSIsIml0ZW0iLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZUludCIsInNldFNpemUiLCJzaXplIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJTcGxpdFBhbmUiLCJmaXJlUmVzaXplRXZlbnQiLCJkb2N1bWVudCIsImNyZWF0ZUV2ZW50IiwiZXZ0IiwiaW5pdEV2ZW50Iiwid2luZG93IiwiZGlzcGF0Y2hFdmVudCIsImhhbmRsZURyYWdGaW5pc2hlZCIsIm9uRHJhZ0ZpbmlzaGVkIiwicmVuZGVyIiwiY2hpbGRyZW4iLCJvdGhlclByb3BzIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLGNBQVAsTUFBMkIsa0JBQTNCO0FBQ0EsT0FBTyw0QkFBUDs7QUFFQSxJQUFNQyxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDakJDLEVBRGlCLEdBQ2lCRCxLQURqQixDQUNqQkMsRUFEaUI7QUFBQSxNQUNiQyxZQURhLEdBQ2lCRixLQURqQixDQUNiRSxZQURhO0FBQUEsTUFDQ0MsV0FERCxHQUNpQkgsS0FEakIsQ0FDQ0csV0FERDs7QUFFekIsTUFBSUQsWUFBSixFQUFrQjtBQUNoQixRQUFNRSxPQUFPQyxlQUFlQyxPQUFmLHFCQUF5Q0wsRUFBekMsQ0FBYjtBQUNBLFFBQUlHLElBQUosRUFBVTtBQUNSLGFBQU9HLFNBQVNILElBQVQsRUFBZSxFQUFmLENBQVA7QUFDRDtBQUNGO0FBQ0QsU0FBT0QsV0FBUDtBQUNELENBVEQ7O0FBV0EsSUFBTUssVUFBVSxTQUFWQSxPQUFVLENBQUNQLEVBQUQsRUFBS1EsSUFBTCxFQUFjO0FBQzVCSixpQkFBZUssT0FBZixxQkFBeUNULEVBQXpDLEVBQStDVSxLQUFLQyxTQUFMLENBQWVILElBQWYsQ0FBL0M7QUFDRCxDQUZEOztJQUlxQkksUzs7O0FBZW5CLHFCQUFZYixLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLDRCQUFNQSxLQUFOLENBRGlCOztBQUFBLFVBS25CYyxlQUxtQixHQUtELFlBQU07QUFDdEIsVUFBSUMsU0FBU0MsV0FBYixFQUEwQjtBQUN4QixZQUFNQyxNQUFNRixTQUFTQyxXQUFULENBQXFCLFlBQXJCLENBQVo7QUFDQUMsWUFBSUMsU0FBSixDQUFjLFFBQWQsRUFBd0IsSUFBeEIsRUFBOEIsS0FBOUI7QUFDQUMsZUFBT0MsYUFBUCxDQUFxQkgsR0FBckI7QUFDRDtBQUNGLEtBWGtCOztBQUFBLFVBYW5CSSxrQkFibUIsR0FhRSxVQUFDWixJQUFELEVBQVU7QUFBQSx3QkFDQSxNQUFLVCxLQURMO0FBQUEsVUFDckJDLEVBRHFCLGVBQ3JCQSxFQURxQjtBQUFBLFVBQ2pCQyxZQURpQixlQUNqQkEsWUFEaUI7O0FBRTdCLFVBQUlBLFlBQUosRUFBa0I7QUFDaEJNLGdCQUFRUCxFQUFSLEVBQVlRLElBQVo7QUFDRDtBQUNELFlBQUtULEtBQUwsQ0FBV3NCLGNBQVgsQ0FBMEJiLElBQTFCO0FBQ0EsWUFBS0ssZUFBTDtBQUNELEtBcEJrQjs7QUFFakIsVUFBS1gsV0FBTCxHQUFtQkosUUFBUUMsS0FBUixDQUFuQjtBQUZpQjtBQUdsQjs7c0JBbUJEdUIsTSxxQkFBUztBQUFBLGlCQUtILEtBQUt2QixLQUxGO0FBQUEsUUFFTEMsRUFGSyxVQUVMQSxFQUZLO0FBQUEsUUFHTHVCLFFBSEssVUFHTEEsUUFISztBQUFBLFFBSUZDLFVBSkU7O0FBTVAsV0FDRTtBQUFDLG9CQUFEO0FBQUEsbUJBQ01BLFVBRE47QUFFRSxxQkFBYSxLQUFLdEIsV0FGcEI7QUFHRSx3QkFBZ0IsS0FBS2tCO0FBSHZCO0FBS0lHO0FBTEosS0FERjtBQVNELEc7OztFQXBEb0M1QixNQUFNOEIsUyxVQVNwQ0MsWSxHQUFlO0FBQ3BCeEIsZUFBYSxLQURPO0FBRXBCRCxnQkFBYyxJQUZNO0FBR3BCb0Isa0JBQWdCLDBCQUFNLENBQUU7QUFISixDO1NBVEhULFMiLCJmaWxlIjoic3BsaXRwYW5lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0U3BsaXRQYW5lIGZyb20gJ3JlYWN0LXNwbGl0LXBhbmUnO1xuaW1wb3J0ICcuL3NwbGl0cGFuZS5jb21wb25lbnQuc2Nzcyc7XG5cbmNvbnN0IGdldFNpemUgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBpZCwgcmVtZW1iZXJTaXplLCBkZWZhdWx0U2l6ZSB9ID0gcHJvcHM7XG4gIGlmIChyZW1lbWJlclNpemUpIHtcbiAgICBjb25zdCBpdGVtID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShgc3BsaXRwYW5lX3NpemVfJHtpZH1gKTtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KGl0ZW0sIDEwKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlZmF1bHRTaXplO1xufTtcblxuY29uc3Qgc2V0U2l6ZSA9IChpZCwgc2l6ZSkgPT4ge1xuICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGBzcGxpdHBhbmVfc2l6ZV8ke2lkfWAsIEpTT04uc3RyaW5naWZ5KHNpemUpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwbGl0UGFuZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBkZWZhdWx0U2l6ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIHJlbWVtYmVyU2l6ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25EcmFnRmluaXNoZWQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSkuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGRlZmF1bHRTaXplOiAnNTAlJyxcbiAgICByZW1lbWJlclNpemU6IHRydWUsXG4gICAgb25EcmFnRmluaXNoZWQ6ICgpID0+IHt9LFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5kZWZhdWx0U2l6ZSA9IGdldFNpemUocHJvcHMpO1xuICB9XG5cbiAgZmlyZVJlc2l6ZUV2ZW50ID0gKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5jcmVhdGVFdmVudCkge1xuICAgICAgY29uc3QgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0hUTUxFdmVudHMnKTtcbiAgICAgIGV2dC5pbml0RXZlbnQoJ3Jlc2l6ZScsIHRydWUsIGZhbHNlKTtcbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZURyYWdGaW5pc2hlZCA9IChzaXplKSA9PiB7XG4gICAgY29uc3QgeyBpZCwgcmVtZW1iZXJTaXplIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChyZW1lbWJlclNpemUpIHtcbiAgICAgIHNldFNpemUoaWQsIHNpemUpO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uRHJhZ0ZpbmlzaGVkKHNpemUpO1xuICAgIHRoaXMuZmlyZVJlc2l6ZUV2ZW50KCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdFNwbGl0UGFuZVxuICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgICAgZGVmYXVsdFNpemU9e3RoaXMuZGVmYXVsdFNpemV9XG4gICAgICAgIG9uRHJhZ0ZpbmlzaGVkPXt0aGlzLmhhbmRsZURyYWdGaW5pc2hlZH1cbiAgICAgID5cbiAgICAgICAgeyBjaGlsZHJlbiB9XG4gICAgICA8L1JlYWN0U3BsaXRQYW5lPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==