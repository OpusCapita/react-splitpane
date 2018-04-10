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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGxpdHBhbmUuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIlJlYWN0U3BsaXRQYW5lIiwiZ2V0U2l6ZSIsInByb3BzIiwiaWQiLCJyZW1lbWJlclNpemUiLCJkZWZhdWx0U2l6ZSIsIml0ZW0iLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZUludCIsInNldFNpemUiLCJzaXplIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJTcGxpdFBhbmUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJmaXJlUmVzaXplRXZlbnQiLCJkb2N1bWVudCIsImNyZWF0ZUV2ZW50IiwiZXZ0IiwiaW5pdEV2ZW50Iiwid2luZG93IiwiZGlzcGF0Y2hFdmVudCIsImhhbmRsZURyYWdGaW5pc2hlZCIsIm9uRHJhZ0ZpbmlzaGVkIiwicmVuZGVyIiwiY2hpbGRyZW4iLCJvdGhlclByb3BzIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLGNBQVAsTUFBMkIsa0JBQTNCO0FBQ0EsT0FBTyw0QkFBUDs7QUFFQSxJQUFNQyxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDakJDLEVBRGlCLEdBQ2lCRCxLQURqQixDQUNqQkMsRUFEaUI7QUFBQSxNQUNiQyxZQURhLEdBQ2lCRixLQURqQixDQUNiRSxZQURhO0FBQUEsTUFDQ0MsV0FERCxHQUNpQkgsS0FEakIsQ0FDQ0csV0FERDs7QUFFekIsTUFBSUQsWUFBSixFQUFrQjtBQUNoQixRQUFNRSxPQUFPQyxlQUFlQyxPQUFmLHFCQUF5Q0wsRUFBekMsQ0FBYjtBQUNBLFFBQUlHLElBQUosRUFBVTtBQUNSLGFBQU9HLFNBQVNILElBQVQsRUFBZSxFQUFmLENBQVA7QUFDRDtBQUNGO0FBQ0QsU0FBT0QsV0FBUDtBQUNELENBVEQ7O0FBV0EsSUFBTUssVUFBVSxTQUFWQSxPQUFVLENBQUNQLEVBQUQsRUFBS1EsSUFBTCxFQUFjO0FBQzVCSixpQkFBZUssT0FBZixxQkFBeUNULEVBQXpDLEVBQStDVSxLQUFLQyxTQUFMLENBQWVILElBQWYsQ0FBL0M7QUFDRCxDQUZEOztJQUlxQkksUzs7Ozs7Ozs7Ozs7O3dKQWVuQkMsa0IsR0FBcUIsWUFBTTtBQUN6QixZQUFLQyxlQUFMO0FBQ0QsSyxRQUVEQSxlLEdBQWtCLFlBQU07QUFDdEIsVUFBSUMsU0FBU0MsV0FBYixFQUEwQjtBQUN4QixZQUFNQyxNQUFNRixTQUFTQyxXQUFULENBQXFCLFlBQXJCLENBQVo7QUFDQUMsWUFBSUMsU0FBSixDQUFjLFFBQWQsRUFBd0IsSUFBeEIsRUFBOEIsS0FBOUI7QUFDQUMsZUFBT0MsYUFBUCxDQUFxQkgsR0FBckI7QUFDRDtBQUNGLEssUUFFREksa0IsR0FBcUIsVUFBQ2IsSUFBRCxFQUFVO0FBQUEsd0JBQ0EsTUFBS1QsS0FETDtBQUFBLFVBQ3JCQyxFQURxQixlQUNyQkEsRUFEcUI7QUFBQSxVQUNqQkMsWUFEaUIsZUFDakJBLFlBRGlCOztBQUU3QixVQUFJQSxZQUFKLEVBQWtCO0FBQ2hCTSxnQkFBUVAsRUFBUixFQUFZUSxJQUFaO0FBQ0Q7QUFDRCxZQUFLVCxLQUFMLENBQVd1QixjQUFYLENBQTBCZCxJQUExQjtBQUNBLFlBQUtNLGVBQUw7QUFDRCxLOzs7c0JBRURTLE0scUJBQVM7QUFBQSxpQkFLSCxLQUFLeEIsS0FMRjtBQUFBLFFBRUxDLEVBRkssVUFFTEEsRUFGSztBQUFBLFFBR0x3QixRQUhLLFVBR0xBLFFBSEs7QUFBQSxRQUlGQyxVQUpFOztBQU1QLFdBQ0U7QUFBQyxvQkFBRDtBQUFBLG1CQUNNQSxVQUROO0FBRUUscUJBQWEzQixRQUFRLEtBQUtDLEtBQWIsQ0FGZjtBQUdFLHdCQUFnQixLQUFLc0I7QUFIdkI7QUFLSUc7QUFMSixLQURGO0FBU0QsRzs7O0VBbkRvQzdCLE1BQU0rQixTLFVBU3BDQyxZLEdBQWU7QUFDcEJ6QixlQUFhLEtBRE87QUFFcEJELGdCQUFjLElBRk07QUFHcEJxQixrQkFBZ0IsMEJBQU0sQ0FBRTtBQUhKLEM7U0FUSFYsUyIsImZpbGUiOiJzcGxpdHBhbmUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3RTcGxpdFBhbmUgZnJvbSAncmVhY3Qtc3BsaXQtcGFuZSc7XG5pbXBvcnQgJy4vc3BsaXRwYW5lLmNvbXBvbmVudC5zY3NzJztcblxuY29uc3QgZ2V0U2l6ZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGlkLCByZW1lbWJlclNpemUsIGRlZmF1bHRTaXplIH0gPSBwcm9wcztcbiAgaWYgKHJlbWVtYmVyU2l6ZSkge1xuICAgIGNvbnN0IGl0ZW0gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGBzcGxpdHBhbmVfc2l6ZV8ke2lkfWApO1xuICAgIGlmIChpdGVtKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQoaXRlbSwgMTApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVmYXVsdFNpemU7XG59O1xuXG5jb25zdCBzZXRTaXplID0gKGlkLCBzaXplKSA9PiB7XG4gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oYHNwbGl0cGFuZV9zaXplXyR7aWR9YCwgSlNPTi5zdHJpbmdpZnkoc2l6ZSkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BsaXRQYW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGRlZmF1bHRTaXplOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gICAgcmVtZW1iZXJTaXplOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvbkRyYWdGaW5pc2hlZDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKS5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGVmYXVsdFNpemU6ICc1MCUnLFxuICAgIHJlbWVtYmVyU2l6ZTogdHJ1ZSxcbiAgICBvbkRyYWdGaW5pc2hlZDogKCkgPT4ge30sXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUgPSAoKSA9PiB7XG4gICAgdGhpcy5maXJlUmVzaXplRXZlbnQoKTtcbiAgfVxuXG4gIGZpcmVSZXNpemVFdmVudCA9ICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQuY3JlYXRlRXZlbnQpIHtcbiAgICAgIGNvbnN0IGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdIVE1MRXZlbnRzJyk7XG4gICAgICBldnQuaW5pdEV2ZW50KCdyZXNpemUnLCB0cnVlLCBmYWxzZSk7XG4gICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChldnQpO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVEcmFnRmluaXNoZWQgPSAoc2l6ZSkgPT4ge1xuICAgIGNvbnN0IHsgaWQsIHJlbWVtYmVyU2l6ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAocmVtZW1iZXJTaXplKSB7XG4gICAgICBzZXRTaXplKGlkLCBzaXplKTtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbkRyYWdGaW5pc2hlZChzaXplKTtcbiAgICB0aGlzLmZpcmVSZXNpemVFdmVudCgpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3RTcGxpdFBhbmVcbiAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgIGRlZmF1bHRTaXplPXtnZXRTaXplKHRoaXMucHJvcHMpfVxuICAgICAgICBvbkRyYWdGaW5pc2hlZD17dGhpcy5oYW5kbGVEcmFnRmluaXNoZWR9XG4gICAgICA+XG4gICAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgPC9SZWFjdFNwbGl0UGFuZT5cbiAgICApO1xuICB9XG59XG4iXX0=