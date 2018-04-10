var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;

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

    return React.createElement(
      ReactSplitPane,
      _extends({}, otherProps, {
        defaultSize: getSize(this.props),
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
}, _temp2);
export { SplitPane as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGxpdHBhbmUuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIlJlYWN0U3BsaXRQYW5lIiwiZ2V0U2l6ZSIsInByb3BzIiwiaWQiLCJyZW1lbWJlclNpemUiLCJkZWZhdWx0U2l6ZSIsIml0ZW0iLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZUludCIsInNldFNpemUiLCJzaXplIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJTcGxpdFBhbmUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJmaXJlUmVzaXplRXZlbnQiLCJkb2N1bWVudCIsImNyZWF0ZUV2ZW50IiwiZXZ0IiwiaW5pdEV2ZW50Iiwid2luZG93IiwiZGlzcGF0Y2hFdmVudCIsImhhbmRsZURyYWdGaW5pc2hlZCIsIm9uRHJhZ0ZpbmlzaGVkIiwicmVuZGVyIiwiY2hpbGRyZW4iLCJvdGhlclByb3BzIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLGNBQVAsTUFBMkIsa0JBQTNCO0FBQ0EsT0FBTyw0QkFBUDs7QUFFQSxJQUFNQyxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDakJDLEVBRGlCLEdBQ2lCRCxLQURqQixDQUNqQkMsRUFEaUI7QUFBQSxNQUNiQyxZQURhLEdBQ2lCRixLQURqQixDQUNiRSxZQURhO0FBQUEsTUFDQ0MsV0FERCxHQUNpQkgsS0FEakIsQ0FDQ0csV0FERDs7QUFFekIsTUFBSUQsWUFBSixFQUFrQjtBQUNoQixRQUFNRSxPQUFPQyxlQUFlQyxPQUFmLHFCQUF5Q0wsRUFBekMsQ0FBYjtBQUNBLFFBQUlHLElBQUosRUFBVTtBQUNSLGFBQU9HLFNBQVNILElBQVQsRUFBZSxFQUFmLENBQVA7QUFDRDtBQUNGO0FBQ0QsU0FBT0QsV0FBUDtBQUNELENBVEQ7O0FBV0EsSUFBTUssVUFBVSxTQUFWQSxPQUFVLENBQUNQLEVBQUQsRUFBS1EsSUFBTCxFQUFjO0FBQzVCSixpQkFBZUssT0FBZixxQkFBeUNULEVBQXpDLEVBQStDVSxLQUFLQyxTQUFMLENBQWVILElBQWYsQ0FBL0M7QUFDRCxDQUZEOztJQUlxQkksUzs7Ozs7Ozs7Ozs7O3dKQWVuQkMsa0IsR0FBcUIsWUFBTTtBQUN6QixZQUFLQyxlQUFMO0FBQ0QsSyxRQUVEQSxlLEdBQWtCLFlBQU07QUFDdEIsVUFBSUMsU0FBU0MsV0FBYixFQUEwQjtBQUN4QixZQUFNQyxNQUFNRixTQUFTQyxXQUFULENBQXFCLFlBQXJCLENBQVo7QUFDQUMsWUFBSUMsU0FBSixDQUFjLFFBQWQsRUFBd0IsSUFBeEIsRUFBOEIsS0FBOUI7QUFDQUMsZUFBT0MsYUFBUCxDQUFxQkgsR0FBckI7QUFDRDtBQUNGLEssUUFFREksa0IsR0FBcUIsVUFBQ2IsSUFBRCxFQUFVO0FBQUEsd0JBQ0EsTUFBS1QsS0FETDtBQUFBLFVBQ3JCQyxFQURxQixlQUNyQkEsRUFEcUI7QUFBQSxVQUNqQkMsWUFEaUIsZUFDakJBLFlBRGlCOztBQUU3QixVQUFJQSxZQUFKLEVBQWtCO0FBQ2hCTSxnQkFBUVAsRUFBUixFQUFZUSxJQUFaO0FBQ0Q7QUFDRCxZQUFLVCxLQUFMLENBQVd1QixjQUFYLENBQTBCZCxJQUExQjtBQUNBLFlBQUtNLGVBQUw7QUFDRCxLOzs7c0JBRURTLE0scUJBQVM7QUFBQSxpQkFLSCxLQUFLeEIsS0FMRjtBQUFBLFFBRUxDLEVBRkssVUFFTEEsRUFGSztBQUFBLFFBR0x3QixRQUhLLFVBR0xBLFFBSEs7QUFBQSxRQUlGQyxVQUpFOztBQU1QLFdBQ0U7QUFBQyxvQkFBRDtBQUFBLG1CQUNNQSxVQUROO0FBRUUscUJBQWEzQixRQUFRLEtBQUtDLEtBQWIsQ0FGZjtBQUdFLHdCQUFnQixLQUFLc0I7QUFIdkI7QUFLSUc7QUFMSixLQURGO0FBU0QsRzs7O0VBbkRvQzdCLE1BQU0rQixTLFVBU3BDQyxZLEdBQWU7QUFDcEJ6QixlQUFhLEtBRE87QUFFcEJELGdCQUFjLElBRk07QUFHcEJxQixrQkFBZ0IsMEJBQU0sQ0FBRTtBQUhKLEM7U0FUSFYsUyIsImZpbGUiOiJzcGxpdHBhbmUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFJlYWN0U3BsaXRQYW5lIGZyb20gJ3JlYWN0LXNwbGl0LXBhbmUnO1xyXG5pbXBvcnQgJy4vc3BsaXRwYW5lLmNvbXBvbmVudC5zY3NzJztcclxuXHJcbmNvbnN0IGdldFNpemUgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGlkLCByZW1lbWJlclNpemUsIGRlZmF1bHRTaXplIH0gPSBwcm9wcztcclxuICBpZiAocmVtZW1iZXJTaXplKSB7XHJcbiAgICBjb25zdCBpdGVtID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShgc3BsaXRwYW5lX3NpemVfJHtpZH1gKTtcclxuICAgIGlmIChpdGVtKSB7XHJcbiAgICAgIHJldHVybiBwYXJzZUludChpdGVtLCAxMCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBkZWZhdWx0U2l6ZTtcclxufTtcclxuXHJcbmNvbnN0IHNldFNpemUgPSAoaWQsIHNpemUpID0+IHtcclxuICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGBzcGxpdHBhbmVfc2l6ZV8ke2lkfWAsIEpTT04uc3RyaW5naWZ5KHNpemUpKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwbGl0UGFuZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBkZWZhdWx0U2l6ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxyXG4gICAgcmVtZW1iZXJTaXplOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIG9uRHJhZ0ZpbmlzaGVkOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSkuaXNSZXF1aXJlZCxcclxuICB9O1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgZGVmYXVsdFNpemU6ICc1MCUnLFxyXG4gICAgcmVtZW1iZXJTaXplOiB0cnVlLFxyXG4gICAgb25EcmFnRmluaXNoZWQ6ICgpID0+IHt9LFxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5maXJlUmVzaXplRXZlbnQoKTtcclxuICB9XHJcblxyXG4gIGZpcmVSZXNpemVFdmVudCA9ICgpID0+IHtcclxuICAgIGlmIChkb2N1bWVudC5jcmVhdGVFdmVudCkge1xyXG4gICAgICBjb25zdCBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpO1xyXG4gICAgICBldnQuaW5pdEV2ZW50KCdyZXNpemUnLCB0cnVlLCBmYWxzZSk7XHJcbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2dCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlRHJhZ0ZpbmlzaGVkID0gKHNpemUpID0+IHtcclxuICAgIGNvbnN0IHsgaWQsIHJlbWVtYmVyU2l6ZSB9ID0gdGhpcy5wcm9wcztcclxuICAgIGlmIChyZW1lbWJlclNpemUpIHtcclxuICAgICAgc2V0U2l6ZShpZCwgc2l6ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnByb3BzLm9uRHJhZ0ZpbmlzaGVkKHNpemUpO1xyXG4gICAgdGhpcy5maXJlUmVzaXplRXZlbnQoKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGlkLFxyXG4gICAgICBjaGlsZHJlbixcclxuICAgICAgLi4ub3RoZXJQcm9wc1xyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3RTcGxpdFBhbmVcclxuICAgICAgICB7Li4ub3RoZXJQcm9wc31cclxuICAgICAgICBkZWZhdWx0U2l6ZT17Z2V0U2l6ZSh0aGlzLnByb3BzKX1cclxuICAgICAgICBvbkRyYWdGaW5pc2hlZD17dGhpcy5oYW5kbGVEcmFnRmluaXNoZWR9XHJcbiAgICAgID5cclxuICAgICAgICB7IGNoaWxkcmVuIH1cclxuICAgICAgPC9SZWFjdFNwbGl0UGFuZT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==