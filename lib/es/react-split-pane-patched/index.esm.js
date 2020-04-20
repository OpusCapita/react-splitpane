/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import { polyfill } from 'react-lifecycles-compat';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var Pane = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Pane, _React$PureComponent);

  function Pane() {
    _classCallCheck(this, Pane);

    return _possibleConstructorReturn(this, _getPrototypeOf(Pane).apply(this, arguments));
  }

  _createClass(Pane, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          split = _this$props.split,
          styleProps = _this$props.style,
          size = _this$props.size,
          size2 = _this$props.size2,
          eleRef = _this$props.eleRef;
      var classes = ['Pane', split, className];
      var style = {
        flex: 1,
        position: 'relative',
        outline: 'none'
      };

      if (size !== undefined) {
        if (split === 'vertical') {
          style.width = size;
        } else {
          style.height = size;
          style.display = 'flex';
        }

        style.flex = 'none';
      } else if (split !== 'vertical') {
        if (!isNaN(size2)) {
          style.height = 'calc(100% - ' + size2 + 'px)';
        }

        if (size2.indexOf && size2.indexOf('%') !== -1) {
          style.height = 'calc(100% - ' + size2 + ')';
        }
      }

      style = Object.assign({}, style, styleProps || {});
      return React.createElement("div", {
        ref: eleRef,
        className: classes.join(' '),
        style: style
      }, children);
    }
  }]);

  return Pane;
}(React.PureComponent);

Pane.defaultProps = {};
var RESIZER_DEFAULT_CLASSNAME = 'Resizer';

var Resizer = /*#__PURE__*/function (_React$Component) {
  _inherits(Resizer, _React$Component);

  function Resizer() {
    _classCallCheck(this, Resizer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Resizer).apply(this, arguments));
  }

  _createClass(Resizer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          _onClick = _this$props.onClick,
          _onDoubleClick = _this$props.onDoubleClick,
          _onMouseDown = _this$props.onMouseDown,
          _onTouchEnd = _this$props.onTouchEnd,
          _onTouchStart = _this$props.onTouchStart,
          resizerClassName = _this$props.resizerClassName,
          split = _this$props.split,
          style = _this$props.style;
      var classes = [resizerClassName, split, className];
      return React.createElement("span", {
        role: "presentation",
        className: classes.join(' '),
        style: style,
        onMouseDown: function onMouseDown(event) {
          return _onMouseDown(event);
        },
        onTouchStart: function onTouchStart(event) {
          event.preventDefault();

          _onTouchStart(event);
        },
        onTouchEnd: function onTouchEnd(event) {
          event.preventDefault();

          _onTouchEnd(event);
        },
        onClick: function onClick(event) {
          if (_onClick) {
            event.preventDefault();

            _onClick(event);
          }
        },
        onDoubleClick: function onDoubleClick(event) {
          if (_onDoubleClick) {
            event.preventDefault();

            _onDoubleClick(event);
          }
        }
      });
    }
  }]);

  return Resizer;
}(React.Component);

Resizer.defaultProps = {
  resizerClassName: RESIZER_DEFAULT_CLASSNAME
};

function unFocus(document, window) {
  if (document.selection) {
    document.selection.empty();
  } else {
    try {
      window.getSelection().removeAllRanges(); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}

function getDefaultSize(defaultSize, minSize, maxSize, draggedSize) {
  if (typeof draggedSize === 'number') {
    var min = typeof minSize === 'number' ? minSize : 0;
    var max = typeof maxSize === 'number' && maxSize >= 0 ? maxSize : Infinity;
    return Math.max(min, Math.min(max, draggedSize));
  }

  if (defaultSize !== undefined) {
    return defaultSize;
  }

  return minSize;
}

function removeNullChildren(children) {
  return React.Children.toArray(children).filter(function (c) {
    return c;
  });
}

var SplitPane = /*#__PURE__*/function (_React$Component) {
  _inherits(SplitPane, _React$Component);

  function SplitPane(props) {
    var _this;

    _classCallCheck(this, SplitPane);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SplitPane).call(this, props));
    _this.onMouseDown = _this.onMouseDown.bind(_assertThisInitialized(_this));
    _this.onTouchStart = _this.onTouchStart.bind(_assertThisInitialized(_this));
    _this.onMouseMove = _this.onMouseMove.bind(_assertThisInitialized(_this));
    _this.onTouchMove = _this.onTouchMove.bind(_assertThisInitialized(_this));
    _this.onMouseUp = _this.onMouseUp.bind(_assertThisInitialized(_this)); // order of setting panel sizes.
    // 1. size
    // 2. getDefaultSize(defaultSize, minsize, maxSize)

    var size = props.size,
        defaultSize = props.defaultSize,
        minSize = props.minSize,
        maxSize = props.maxSize,
        primary = props.primary;
    var initialSize = size !== undefined ? size : getDefaultSize(defaultSize, minSize, maxSize, null);
    _this.state = {
      active: false,
      resized: false,
      pane1Size: primary === 'first' ? initialSize : undefined,
      pane2Size: primary === 'second' ? initialSize : undefined,
      // these are props that are needed in static functions. ie: gDSFP
      instanceProps: {
        size: size
      }
    };
    return _this;
  }

  _createClass(SplitPane, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mouseup', this.onMouseUp);
      document.addEventListener('mousemove', this.onMouseMove);
      document.addEventListener('touchmove', this.onTouchMove);
      this.setState(SplitPane.getSizeUpdate(this.props, this.state));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mouseup', this.onMouseUp);
      document.removeEventListener('mousemove', this.onMouseMove);
      document.removeEventListener('touchmove', this.onTouchMove);
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(event) {
      var eventWithTouches = Object.assign({}, event, {
        touches: [{
          clientX: event.clientX,
          clientY: event.clientY
        }]
      });
      this.onTouchStart(eventWithTouches);
    }
  }, {
    key: "onTouchStart",
    value: function onTouchStart(event) {
      var _this$props = this.props,
          allowResize = _this$props.allowResize,
          onDragStarted = _this$props.onDragStarted,
          split = _this$props.split;

      if (allowResize) {
        unFocus(document, window);
        var position = split === 'vertical' ? event.touches[0].clientX : event.touches[0].clientY;

        if (typeof onDragStarted === 'function') {
          onDragStarted();
        }

        this.setState({
          active: true,
          position: position
        });
      }
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(event) {
      var eventWithTouches = Object.assign({}, event, {
        touches: [{
          clientX: event.clientX,
          clientY: event.clientY
        }]
      });
      this.onTouchMove(eventWithTouches);
    }
  }, {
    key: "onTouchMove",
    value: function onTouchMove(event) {
      var _this$props2 = this.props,
          allowResize = _this$props2.allowResize,
          maxSize = _this$props2.maxSize,
          minSize = _this$props2.minSize,
          onChange = _this$props2.onChange,
          split = _this$props2.split,
          step = _this$props2.step;
      var _this$state = this.state,
          active = _this$state.active,
          position = _this$state.position;

      if (allowResize && active) {
        unFocus(document, window);
        var isPrimaryFirst = this.props.primary === 'first';
        var ref = isPrimaryFirst ? this.pane1 : this.pane2;
        var ref2 = isPrimaryFirst ? this.pane2 : this.pane1;

        if (ref) {
          var node = ref;
          var node2 = ref2;

          if (node.getBoundingClientRect) {
            var width = node.getBoundingClientRect().width;
            var height = node.getBoundingClientRect().height;
            var current = split === 'vertical' ? event.touches[0].clientX : event.touches[0].clientY;
            var size = split === 'vertical' ? width : height;
            var positionDelta = position - current;

            if (step) {
              if (Math.abs(positionDelta) < step) {
                return;
              } // Integer division
              // eslint-disable-next-line no-bitwise


              positionDelta = ~~(positionDelta / step) * step;
            }

            var sizeDelta = isPrimaryFirst ? positionDelta : -positionDelta;
            var pane1Order = parseInt(window.getComputedStyle(node).order);
            var pane2Order = parseInt(window.getComputedStyle(node2).order);

            if (pane1Order > pane2Order) {
              sizeDelta = -sizeDelta;
            }

            var newMaxSize = maxSize;

            if (maxSize !== undefined && maxSize <= 0) {
              var splitPane = this.splitPane;

              if (split === 'vertical') {
                newMaxSize = splitPane.getBoundingClientRect().width + maxSize;
              } else {
                newMaxSize = splitPane.getBoundingClientRect().height + maxSize;
              }
            }

            var newSize = size - sizeDelta;
            var newPosition = position - positionDelta;

            if (newSize < minSize) {
              newSize = minSize;
            } else if (maxSize !== undefined && newSize > newMaxSize) {
              newSize = newMaxSize;
            } else {
              this.setState({
                position: newPosition,
                resized: true
              });
            }

            if (onChange) onChange(newSize);
            this.setState(_defineProperty({
              draggedSize: newSize
            }, isPrimaryFirst ? 'pane1Size' : 'pane2Size', newSize));
          }
        }
      }
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp() {
      var _this$props3 = this.props,
          allowResize = _this$props3.allowResize,
          onDragFinished = _this$props3.onDragFinished;
      var _this$state2 = this.state,
          active = _this$state2.active,
          draggedSize = _this$state2.draggedSize;

      if (allowResize && active) {
        if (typeof onDragFinished === 'function') {
          onDragFinished(draggedSize);
        }

        this.setState({
          active: false
        });
      }
    } // we have to check values since gDSFP is called on every render and more in StrictMode

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          allowResize = _this$props4.allowResize,
          children = _this$props4.children,
          className = _this$props4.className,
          onResizerClick = _this$props4.onResizerClick,
          onResizerDoubleClick = _this$props4.onResizerDoubleClick,
          paneClassName = _this$props4.paneClassName,
          pane1ClassName = _this$props4.pane1ClassName,
          pane2ClassName = _this$props4.pane2ClassName,
          paneStyle = _this$props4.paneStyle,
          pane1StyleProps = _this$props4.pane1Style,
          pane2StyleProps = _this$props4.pane2Style,
          resizerClassName = _this$props4.resizerClassName,
          resizerStyle = _this$props4.resizerStyle,
          split = _this$props4.split,
          styleProps = _this$props4.style;
      var _this$state3 = this.state,
          pane1Size = _this$state3.pane1Size,
          pane2Size = _this$state3.pane2Size;
      var disabledClass = allowResize ? '' : 'disabled';
      var resizerClassNamesIncludingDefault = resizerClassName ? "".concat(resizerClassName, " ").concat(RESIZER_DEFAULT_CLASSNAME) : resizerClassName;
      var notNullChildren = removeNullChildren(children);

      var style = _objectSpread2({
        display: 'flex',
        flex: 1,
        height: '100%',
        position: 'absolute',
        outline: 'none',
        overflow: 'hidden',
        MozUserSelect: 'text',
        WebkitUserSelect: 'text',
        msUserSelect: 'text',
        userSelect: 'text'
      }, styleProps);

      if (split === 'vertical') {
        Object.assign(style, {
          flexDirection: 'row',
          left: 0,
          right: 0
        });
      } else {
        Object.assign(style, {
          bottom: 0,
          flexDirection: 'column',
          minHeight: '100%',
          top: 0,
          width: '100%'
        });
      }

      var classes = ['SplitPane', className, split, disabledClass];

      var pane1Style = _objectSpread2({}, paneStyle, {}, pane1StyleProps);

      var pane2Style = _objectSpread2({}, paneStyle, {}, pane2StyleProps);

      var pane1Classes = ['Pane1', paneClassName, pane1ClassName].join(' ');
      var pane2Classes = ['Pane2', paneClassName, pane2ClassName].join(' ');
      return React.createElement("div", {
        className: classes.join(' '),
        ref: function ref(node) {
          _this2.splitPane = node;
        },
        style: style
      }, React.createElement(Pane, {
        className: pane1Classes,
        key: "pane1",
        eleRef: function eleRef(node) {
          _this2.pane1 = node;
        },
        size: pane1Size,
        size2: pane2Size,
        split: split,
        style: pane1Style
      }, notNullChildren[0]), React.createElement(Resizer, {
        className: disabledClass,
        onClick: onResizerClick,
        onDoubleClick: onResizerDoubleClick,
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        onTouchEnd: this.onMouseUp,
        key: "resizer",
        resizerClassName: resizerClassNamesIncludingDefault,
        split: split,
        style: resizerStyle || {}
      }), React.createElement(Pane, {
        className: pane2Classes,
        key: "pane2",
        eleRef: function eleRef(node) {
          _this2.pane2 = node;
        },
        size: pane2Size,
        size2: pane1Size,
        split: split,
        style: pane2Style
      }, notNullChildren[1]));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      return SplitPane.getSizeUpdate(nextProps, prevState);
    }
  }, {
    key: "getSizeUpdate",
    value: function getSizeUpdate(props, state) {
      var newState = {};
      var instanceProps = state.instanceProps;

      if (instanceProps.size === props.size && props.size !== undefined) {
        return {};
      }

      var newSize = props.size !== undefined ? props.size : getDefaultSize(props.defaultSize, props.minSize, props.maxSize, state.draggedSize);

      if (props.size !== undefined) {
        newState.draggedSize = newSize;
      }

      var isPanel1Primary = props.primary === 'first';
      newState[isPanel1Primary ? 'pane1Size' : 'pane2Size'] = newSize;
      newState[isPanel1Primary ? 'pane2Size' : 'pane1Size'] = undefined;
      newState.instanceProps = {
        size: props.size
      };
      return newState;
    }
  }]);

  return SplitPane;
}(React.Component);

SplitPane.defaultProps = {
  allowResize: true,
  minSize: 50,
  primary: 'first',
  split: 'vertical',
  paneClassName: '',
  pane1ClassName: '',
  pane2ClassName: ''
};
polyfill(SplitPane);
export default SplitPane;
export { Pane };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZWFjdC1zcGxpdC1wYW5lLXBhdGNoZWQvaW5kZXguZXNtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwic3R5bGVQcm9wVHlwZSIsInBvbHlmaWxsIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwiX2RlZmluZVByb3BlcnR5Iiwib2JqIiwidmFsdWUiLCJvd25LZXlzIiwib2JqZWN0IiwiZW51bWVyYWJsZU9ubHkiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInB1c2giLCJhcHBseSIsIl9vYmplY3RTcHJlYWQyIiwiYXJndW1lbnRzIiwic291cmNlIiwiZm9yRWFjaCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiX2luaGVyaXRzIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiY3JlYXRlIiwiY29uc3RydWN0b3IiLCJfc2V0UHJvdG90eXBlT2YiLCJfZ2V0UHJvdG90eXBlT2YiLCJvIiwic2V0UHJvdG90eXBlT2YiLCJnZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsInAiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwic2VsZiIsIlJlZmVyZW5jZUVycm9yIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJjYWxsIiwiUGFuZSIsIl9SZWFjdCRQdXJlQ29tcG9uZW50IiwicmVuZGVyIiwiX3RoaXMkcHJvcHMiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInNwbGl0Iiwic3R5bGVQcm9wcyIsInN0eWxlIiwic2l6ZSIsInNpemUyIiwiZWxlUmVmIiwiY2xhc3NlcyIsImZsZXgiLCJwb3NpdGlvbiIsIm91dGxpbmUiLCJ1bmRlZmluZWQiLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJpc05hTiIsImluZGV4T2YiLCJhc3NpZ24iLCJjcmVhdGVFbGVtZW50IiwicmVmIiwiam9pbiIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJSRVNJWkVSX0RFRkFVTFRfQ0xBU1NOQU1FIiwiUmVzaXplciIsIl9SZWFjdCRDb21wb25lbnQiLCJfb25DbGljayIsIm9uQ2xpY2siLCJfb25Eb3VibGVDbGljayIsIm9uRG91YmxlQ2xpY2siLCJfb25Nb3VzZURvd24iLCJvbk1vdXNlRG93biIsIl9vblRvdWNoRW5kIiwib25Ub3VjaEVuZCIsIl9vblRvdWNoU3RhcnQiLCJvblRvdWNoU3RhcnQiLCJyZXNpemVyQ2xhc3NOYW1lIiwicm9sZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJDb21wb25lbnQiLCJ1bkZvY3VzIiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJzZWxlY3Rpb24iLCJlbXB0eSIsImdldFNlbGVjdGlvbiIsInJlbW92ZUFsbFJhbmdlcyIsImUiLCJnZXREZWZhdWx0U2l6ZSIsImRlZmF1bHRTaXplIiwibWluU2l6ZSIsIm1heFNpemUiLCJkcmFnZ2VkU2l6ZSIsIm1pbiIsIm1heCIsIkluZmluaXR5IiwiTWF0aCIsInJlbW92ZU51bGxDaGlsZHJlbiIsIkNoaWxkcmVuIiwidG9BcnJheSIsImMiLCJTcGxpdFBhbmUiLCJfdGhpcyIsImJpbmQiLCJvbk1vdXNlTW92ZSIsIm9uVG91Y2hNb3ZlIiwib25Nb3VzZVVwIiwicHJpbWFyeSIsImluaXRpYWxTaXplIiwic3RhdGUiLCJhY3RpdmUiLCJyZXNpemVkIiwicGFuZTFTaXplIiwicGFuZTJTaXplIiwiaW5zdGFuY2VQcm9wcyIsImNvbXBvbmVudERpZE1vdW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFN0YXRlIiwiZ2V0U2l6ZVVwZGF0ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2ZW50V2l0aFRvdWNoZXMiLCJ0b3VjaGVzIiwiY2xpZW50WCIsImNsaWVudFkiLCJhbGxvd1Jlc2l6ZSIsIm9uRHJhZ1N0YXJ0ZWQiLCJfdGhpcyRwcm9wczIiLCJvbkNoYW5nZSIsInN0ZXAiLCJfdGhpcyRzdGF0ZSIsImlzUHJpbWFyeUZpcnN0IiwicGFuZTEiLCJwYW5lMiIsInJlZjIiLCJub2RlIiwibm9kZTIiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjdXJyZW50IiwicG9zaXRpb25EZWx0YSIsImFicyIsInNpemVEZWx0YSIsInBhbmUxT3JkZXIiLCJwYXJzZUludCIsImdldENvbXB1dGVkU3R5bGUiLCJvcmRlciIsInBhbmUyT3JkZXIiLCJuZXdNYXhTaXplIiwic3BsaXRQYW5lIiwibmV3U2l6ZSIsIm5ld1Bvc2l0aW9uIiwiX3RoaXMkcHJvcHMzIiwib25EcmFnRmluaXNoZWQiLCJfdGhpcyRzdGF0ZTIiLCJfdGhpczIiLCJfdGhpcyRwcm9wczQiLCJvblJlc2l6ZXJDbGljayIsIm9uUmVzaXplckRvdWJsZUNsaWNrIiwicGFuZUNsYXNzTmFtZSIsInBhbmUxQ2xhc3NOYW1lIiwicGFuZTJDbGFzc05hbWUiLCJwYW5lU3R5bGUiLCJwYW5lMVN0eWxlUHJvcHMiLCJwYW5lMVN0eWxlIiwicGFuZTJTdHlsZVByb3BzIiwicGFuZTJTdHlsZSIsInJlc2l6ZXJTdHlsZSIsIl90aGlzJHN0YXRlMyIsImRpc2FibGVkQ2xhc3MiLCJyZXNpemVyQ2xhc3NOYW1lc0luY2x1ZGluZ0RlZmF1bHQiLCJjb25jYXQiLCJub3ROdWxsQ2hpbGRyZW4iLCJvdmVyZmxvdyIsIk1velVzZXJTZWxlY3QiLCJXZWJraXRVc2VyU2VsZWN0IiwibXNVc2VyU2VsZWN0IiwidXNlclNlbGVjdCIsImZsZXhEaXJlY3Rpb24iLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJtaW5IZWlnaHQiLCJ0b3AiLCJwYW5lMUNsYXNzZXMiLCJwYW5lMkNsYXNzZXMiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJuZXh0UHJvcHMiLCJwcmV2U3RhdGUiLCJuZXdTdGF0ZSIsImlzUGFuZWwxUHJpbWFyeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLGFBQVAsTUFBMEIsc0JBQTFCO0FBQ0EsU0FBU0MsUUFBVCxRQUF5Qix5QkFBekI7O0FBRUEsU0FBU0MsZUFBVCxDQUF5QkMsUUFBekIsRUFBbUNDLFdBQW5DLEVBQWdEO0FBQzlDLE1BQUksRUFBRUQsUUFBUSxZQUFZQyxXQUF0QixDQUFKLEVBQXdDO0FBQ3RDLFVBQU0sSUFBSUMsU0FBSixDQUFjLG1DQUFkLENBQU47QUFDRDtBQUNGOztBQUVELFNBQVNDLGlCQUFULENBQTJCQyxNQUEzQixFQUFtQ0MsS0FBbkMsRUFBMEM7QUFDeEMsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxLQUFLLENBQUNFLE1BQTFCLEVBQWtDRCxDQUFDLEVBQW5DLEVBQXVDO0FBQ3JDLFFBQUlFLFVBQVUsR0FBR0gsS0FBSyxDQUFDQyxDQUFELENBQXRCO0FBQ0FFLElBQUFBLFVBQVUsQ0FBQ0MsVUFBWCxHQUF3QkQsVUFBVSxDQUFDQyxVQUFYLElBQXlCLEtBQWpEO0FBQ0FELElBQUFBLFVBQVUsQ0FBQ0UsWUFBWCxHQUEwQixJQUExQjtBQUNBLFFBQUksV0FBV0YsVUFBZixFQUEyQkEsVUFBVSxDQUFDRyxRQUFYLEdBQXNCLElBQXRCO0FBQzNCQyxJQUFBQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JULE1BQXRCLEVBQThCSSxVQUFVLENBQUNNLEdBQXpDLEVBQThDTixVQUE5QztBQUNEO0FBQ0Y7O0FBRUQsU0FBU08sWUFBVCxDQUFz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QSxRQUFRLENBQUNDLGVBQWUsR0FBRyxXQUFILEdBQWlCLFdBQWpDLENBQVIsR0FBd0QzSSxTQUF4RDtBQUNBMEksTUFBQUEsUUFBUSxDQUFDMUUsYUFBVCxHQUF5QjtBQUN2QnZFLFFBQUFBLElBQUksRUFBRTVELEtBQUssQ0FBQzREO0FBRFcsT0FBekI7QUFHQSxhQUFPaUosUUFBUDtBQUNEO0FBdkJBLEdBTEMsQ0EzUVEsQ0FBWjs7QUEwU0EsU0FBT3ZGLFNBQVA7QUFDRCxDQS9VNEIsQ0ErVTNCaEksS0FBSyxDQUFDMEcsU0EvVXFCLENBQTdCOztBQTRXQXNCLFNBQVMsQ0FBQ3hDLFlBQVYsR0FBeUI7QUFDdkJnRSxFQUFBQSxXQUFXLEVBQUUsSUFEVTtBQUV2Qm5DLEVBQUFBLE9BQU8sRUFBRSxFQUZjO0FBR3ZCaUIsRUFBQUEsT0FBTyxFQUFFLE9BSGM7QUFJdkJuRSxFQUFBQSxLQUFLLEVBQUUsVUFKZ0I7QUFLdkJzSCxFQUFBQSxhQUFhLEVBQUUsRUFMUTtBQU12QkMsRUFBQUEsY0FBYyxFQUFFLEVBTk87QUFPdkJDLEVBQUFBLGNBQWMsRUFBRTtBQVBPLENBQXpCO0FBU0F4TCxRQUFRLENBQUM2SCxTQUFELENBQVI7QUFFQSxlQUFlQSxTQUFmO0FBQ0EsU0FBU25FLElBQVQiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVQcm9wVHlwZSBmcm9tICdyZWFjdC1zdHlsZS1wcm9wdHlwZSc7XG5pbXBvcnQgeyBwb2x5ZmlsbCB9IGZyb20gJ3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0JztcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgIGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgIH0pO1xuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuXG4gIHJldHVybiBrZXlzO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcblxuICAgIGlmIChpICUgMikge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG52YXIgUGFuZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JFB1cmVDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFBhbmUsIF9SZWFjdCRQdXJlQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBQYW5lKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQYW5lKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoUGFuZSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUGFuZSwgW3tcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgc3BsaXQgPSBfdGhpcyRwcm9wcy5zcGxpdCxcbiAgICAgICAgICBzdHlsZVByb3BzID0gX3RoaXMkcHJvcHMuc3R5bGUsXG4gICAgICAgICAgc2l6ZSA9IF90aGlzJHByb3BzLnNpemUsXG4gICAgICAgICAgc2l6ZTIgPSBfdGhpcyRwcm9wcy5zaXplMixcbiAgICAgICAgICBlbGVSZWYgPSBfdGhpcyRwcm9wcy5lbGVSZWY7XG4gICAgICB2YXIgY2xhc3NlcyA9IFsnUGFuZScsIHNwbGl0LCBjbGFzc05hbWVdO1xuICAgICAgdmFyIHN0eWxlID0ge1xuICAgICAgICBmbGV4OiAxLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgb3V0bGluZTogJ25vbmUnXG4gICAgICB9O1xuXG4gICAgICBpZiAoc2l6ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChzcGxpdCA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgIHN0eWxlLndpZHRoID0gc2l6ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHlsZS5oZWlnaHQgPSBzaXplO1xuICAgICAgICAgIHN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIH1cblxuICAgICAgICBzdHlsZS5mbGV4ID0gJ25vbmUnO1xuICAgICAgfSBlbHNlIGlmIChzcGxpdCAhPT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICBpZiAoIWlzTmFOKHNpemUyKSkge1xuICAgICAgICAgIHN0eWxlLmhlaWdodCA9ICdjYWxjKDEwMCUgLSAnICsgc2l6ZTIgKyAncHgpJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2l6ZTIuaW5kZXhPZiAmJiBzaXplMi5pbmRleE9mKCclJykgIT09IC0xKSB7XG4gICAgICAgICAgc3R5bGUuaGVpZ2h0ID0gJ2NhbGMoMTAwJSAtICcgKyBzaXplMiArICcpJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzdHlsZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0eWxlLCBzdHlsZVByb3BzIHx8IHt9KTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgcmVmOiBlbGVSZWYsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5qb2luKCcgJyksXG4gICAgICAgIHN0eWxlOiBzdHlsZVxuICAgICAgfSwgY2hpbGRyZW4pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQYW5lO1xufShSZWFjdC5QdXJlQ29tcG9uZW50KTtcblxuUGFuZS5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICBzaXplMjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICBzcGxpdDogUHJvcFR5cGVzLm9uZU9mKFsndmVydGljYWwnLCAnaG9yaXpvbnRhbCddKSxcbiAgc3R5bGU6IHN0eWxlUHJvcFR5cGUsXG4gIGVsZVJlZjogUHJvcFR5cGVzLmZ1bmNcbn07XG5QYW5lLmRlZmF1bHRQcm9wcyA9IHt9O1xuXG52YXIgUkVTSVpFUl9ERUZBVUxUX0NMQVNTTkFNRSA9ICdSZXNpemVyJztcblxudmFyIFJlc2l6ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFJlc2l6ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFJlc2l6ZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlc2l6ZXIpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihSZXNpemVyKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSZXNpemVyLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgX29uQ2xpY2sgPSBfdGhpcyRwcm9wcy5vbkNsaWNrLFxuICAgICAgICAgIF9vbkRvdWJsZUNsaWNrID0gX3RoaXMkcHJvcHMub25Eb3VibGVDbGljayxcbiAgICAgICAgICBfb25Nb3VzZURvd24gPSBfdGhpcyRwcm9wcy5vbk1vdXNlRG93bixcbiAgICAgICAgICBfb25Ub3VjaEVuZCA9IF90aGlzJHByb3BzLm9uVG91Y2hFbmQsXG4gICAgICAgICAgX29uVG91Y2hTdGFydCA9IF90aGlzJHByb3BzLm9uVG91Y2hTdGFydCxcbiAgICAgICAgICByZXNpemVyQ2xhc3NOYW1lID0gX3RoaXMkcHJvcHMucmVzaXplckNsYXNzTmFtZSxcbiAgICAgICAgICBzcGxpdCA9IF90aGlzJHByb3BzLnNwbGl0LFxuICAgICAgICAgIHN0eWxlID0gX3RoaXMkcHJvcHMuc3R5bGU7XG4gICAgICB2YXIgY2xhc3NlcyA9IFtyZXNpemVyQ2xhc3NOYW1lLCBzcGxpdCwgY2xhc3NOYW1lXTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIHJvbGU6IFwicHJlc2VudGF0aW9uXCIsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5qb2luKCcgJyksXG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgb25Nb3VzZURvd246IGZ1bmN0aW9uIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF9vbk1vdXNlRG93bihldmVudCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uVG91Y2hTdGFydDogZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgIF9vblRvdWNoU3RhcnQoZXZlbnQpO1xuICAgICAgICB9LFxuICAgICAgICBvblRvdWNoRW5kOiBmdW5jdGlvbiBvblRvdWNoRW5kKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgIF9vblRvdWNoRW5kKGV2ZW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhldmVudCkge1xuICAgICAgICAgIGlmIChfb25DbGljaykge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgX29uQ2xpY2soZXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25Eb3VibGVDbGljazogZnVuY3Rpb24gb25Eb3VibGVDbGljayhldmVudCkge1xuICAgICAgICAgIGlmIChfb25Eb3VibGVDbGljaykge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgX29uRG91YmxlQ2xpY2soZXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJlc2l6ZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cblJlc2l6ZXIucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRG91YmxlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBvbk1vdXNlRG93bjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25Ub3VjaFN0YXJ0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvblRvdWNoRW5kOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzcGxpdDogUHJvcFR5cGVzLm9uZU9mKFsndmVydGljYWwnLCAnaG9yaXpvbnRhbCddKSxcbiAgc3R5bGU6IHN0eWxlUHJvcFR5cGUsXG4gIHJlc2l6ZXJDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblJlc2l6ZXIuZGVmYXVsdFByb3BzID0ge1xuICByZXNpemVyQ2xhc3NOYW1lOiBSRVNJWkVSX0RFRkFVTFRfQ0xBU1NOQU1FXG59O1xuXG5mdW5jdGlvbiB1bkZvY3VzKGRvY3VtZW50LCB3aW5kb3cpIHtcbiAgaWYgKGRvY3VtZW50LnNlbGVjdGlvbikge1xuICAgIGRvY3VtZW50LnNlbGVjdGlvbi5lbXB0eSgpO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdFNpemUoZGVmYXVsdFNpemUsIG1pblNpemUsIG1heFNpemUsIGRyYWdnZWRTaXplKSB7XG4gIGlmICh0eXBlb2YgZHJhZ2dlZFNpemUgPT09ICdudW1iZXInKSB7XG4gICAgdmFyIG1pbiA9IHR5cGVvZiBtaW5TaXplID09PSAnbnVtYmVyJyA/IG1pblNpemUgOiAwO1xuICAgIHZhciBtYXggPSB0eXBlb2YgbWF4U2l6ZSA9PT0gJ251bWJlcicgJiYgbWF4U2l6ZSA+PSAwID8gbWF4U2l6ZSA6IEluZmluaXR5O1xuICAgIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgZHJhZ2dlZFNpemUpKTtcbiAgfVxuXG4gIGlmIChkZWZhdWx0U2l6ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRTaXplO1xuICB9XG5cbiAgcmV0dXJuIG1pblNpemU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU51bGxDaGlsZHJlbihjaGlsZHJlbikge1xuICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbikuZmlsdGVyKGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIGM7XG4gIH0pO1xufVxuXG52YXIgU3BsaXRQYW5lID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhTcGxpdFBhbmUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFNwbGl0UGFuZShwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTcGxpdFBhbmUpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoU3BsaXRQYW5lKS5jYWxsKHRoaXMsIHByb3BzKSk7XG4gICAgX3RoaXMub25Nb3VzZURvd24gPSBfdGhpcy5vbk1vdXNlRG93bi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vblRvdWNoU3RhcnQgPSBfdGhpcy5vblRvdWNoU3RhcnQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25Nb3VzZU1vdmUgPSBfdGhpcy5vbk1vdXNlTW92ZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vblRvdWNoTW92ZSA9IF90aGlzLm9uVG91Y2hNb3ZlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uTW91c2VVcCA9IF90aGlzLm9uTW91c2VVcC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTsgLy8gb3JkZXIgb2Ygc2V0dGluZyBwYW5lbCBzaXplcy5cbiAgICAvLyAxLiBzaXplXG4gICAgLy8gMi4gZ2V0RGVmYXVsdFNpemUoZGVmYXVsdFNpemUsIG1pbnNpemUsIG1heFNpemUpXG5cbiAgICB2YXIgc2l6ZSA9IHByb3BzLnNpemUsXG4gICAgICAgIGRlZmF1bHRTaXplID0gcHJvcHMuZGVmYXVsdFNpemUsXG4gICAgICAgIG1pblNpemUgPSBwcm9wcy5taW5TaXplLFxuICAgICAgICBtYXhTaXplID0gcHJvcHMubWF4U2l6ZSxcbiAgICAgICAgcHJpbWFyeSA9IHByb3BzLnByaW1hcnk7XG4gICAgdmFyIGluaXRpYWxTaXplID0gc2l6ZSAhPT0gdW5kZWZpbmVkID8gc2l6ZSA6IGdldERlZmF1bHRTaXplKGRlZmF1bHRTaXplLCBtaW5TaXplLCBtYXhTaXplLCBudWxsKTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICByZXNpemVkOiBmYWxzZSxcbiAgICAgIHBhbmUxU2l6ZTogcHJpbWFyeSA9PT0gJ2ZpcnN0JyA/IGluaXRpYWxTaXplIDogdW5kZWZpbmVkLFxuICAgICAgcGFuZTJTaXplOiBwcmltYXJ5ID09PSAnc2Vjb25kJyA/IGluaXRpYWxTaXplIDogdW5kZWZpbmVkLFxuICAgICAgLy8gdGhlc2UgYXJlIHByb3BzIHRoYXQgYXJlIG5lZWRlZCBpbiBzdGF0aWMgZnVuY3Rpb25zLiBpZTogZ0RTRlBcbiAgICAgIGluc3RhbmNlUHJvcHM6IHtcbiAgICAgICAgc2l6ZTogc2l6ZVxuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFNwbGl0UGFuZSwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXApO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoU3BsaXRQYW5lLmdldFNpemVVcGRhdGUodGhpcy5wcm9wcywgdGhpcy5zdGF0ZSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2VVcCk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbk1vdXNlRG93blwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1vdXNlRG93bihldmVudCkge1xuICAgICAgdmFyIGV2ZW50V2l0aFRvdWNoZXMgPSBPYmplY3QuYXNzaWduKHt9LCBldmVudCwge1xuICAgICAgICB0b3VjaGVzOiBbe1xuICAgICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WVxuICAgICAgICB9XVxuICAgICAgfSk7XG4gICAgICB0aGlzLm9uVG91Y2hTdGFydChldmVudFdpdGhUb3VjaGVzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25Ub3VjaFN0YXJ0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uVG91Y2hTdGFydChldmVudCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBhbGxvd1Jlc2l6ZSA9IF90aGlzJHByb3BzLmFsbG93UmVzaXplLFxuICAgICAgICAgIG9uRHJhZ1N0YXJ0ZWQgPSBfdGhpcyRwcm9wcy5vbkRyYWdTdGFydGVkLFxuICAgICAgICAgIHNwbGl0ID0gX3RoaXMkcHJvcHMuc3BsaXQ7XG5cbiAgICAgIGlmIChhbGxvd1Jlc2l6ZSkge1xuICAgICAgICB1bkZvY3VzKGRvY3VtZW50LCB3aW5kb3cpO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSBzcGxpdCA9PT0gJ3ZlcnRpY2FsJyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcblxuICAgICAgICBpZiAodHlwZW9mIG9uRHJhZ1N0YXJ0ZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBvbkRyYWdTdGFydGVkKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbk1vdXNlTW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1vdXNlTW92ZShldmVudCkge1xuICAgICAgdmFyIGV2ZW50V2l0aFRvdWNoZXMgPSBPYmplY3QuYXNzaWduKHt9LCBldmVudCwge1xuICAgICAgICB0b3VjaGVzOiBbe1xuICAgICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WVxuICAgICAgICB9XVxuICAgICAgfSk7XG4gICAgICB0aGlzLm9uVG91Y2hNb3ZlKGV2ZW50V2l0aFRvdWNoZXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvblRvdWNoTW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvblRvdWNoTW92ZShldmVudCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYWxsb3dSZXNpemUgPSBfdGhpcyRwcm9wczIuYWxsb3dSZXNpemUsXG4gICAgICAgICAgbWF4U2l6ZSA9IF90aGlzJHByb3BzMi5tYXhTaXplLFxuICAgICAgICAgIG1pblNpemUgPSBfdGhpcyRwcm9wczIubWluU2l6ZSxcbiAgICAgICAgICBvbkNoYW5nZSA9IF90aGlzJHByb3BzMi5vbkNoYW5nZSxcbiAgICAgICAgICBzcGxpdCA9IF90aGlzJHByb3BzMi5zcGxpdCxcbiAgICAgICAgICBzdGVwID0gX3RoaXMkcHJvcHMyLnN0ZXA7XG4gICAgICB2YXIgX3RoaXMkc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIGFjdGl2ZSA9IF90aGlzJHN0YXRlLmFjdGl2ZSxcbiAgICAgICAgICBwb3NpdGlvbiA9IF90aGlzJHN0YXRlLnBvc2l0aW9uO1xuXG4gICAgICBpZiAoYWxsb3dSZXNpemUgJiYgYWN0aXZlKSB7XG4gICAgICAgIHVuRm9jdXMoZG9jdW1lbnQsIHdpbmRvdyk7XG4gICAgICAgIHZhciBpc1ByaW1hcnlGaXJzdCA9IHRoaXMucHJvcHMucHJpbWFyeSA9PT0gJ2ZpcnN0JztcbiAgICAgICAgdmFyIHJlZiA9IGlzUHJpbWFyeUZpcnN0ID8gdGhpcy5wYW5lMSA6IHRoaXMucGFuZTI7XG4gICAgICAgIHZhciByZWYyID0gaXNQcmltYXJ5Rmlyc3QgPyB0aGlzLnBhbmUyIDogdGhpcy5wYW5lMTtcblxuICAgICAgICBpZiAocmVmKSB7XG4gICAgICAgICAgdmFyIG5vZGUgPSByZWY7XG4gICAgICAgICAgdmFyIG5vZGUyID0gcmVmMjtcblxuICAgICAgICAgIGlmIChub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgICAgICAgICAgdmFyIHdpZHRoID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gc3BsaXQgPT09ICd2ZXJ0aWNhbCcgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC50b3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICAgICAgICB2YXIgc2l6ZSA9IHNwbGl0ID09PSAndmVydGljYWwnID8gd2lkdGggOiBoZWlnaHQ7XG4gICAgICAgICAgICB2YXIgcG9zaXRpb25EZWx0YSA9IHBvc2l0aW9uIC0gY3VycmVudDtcblxuICAgICAgICAgICAgaWYgKHN0ZXApIHtcbiAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHBvc2l0aW9uRGVsdGEpIDwgc3RlcCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfSAvLyBJbnRlZ2VyIGRpdmlzaW9uXG4gICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG5cblxuICAgICAgICAgICAgICBwb3NpdGlvbkRlbHRhID0gfn4ocG9zaXRpb25EZWx0YSAvIHN0ZXApICogc3RlcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHNpemVEZWx0YSA9IGlzUHJpbWFyeUZpcnN0ID8gcG9zaXRpb25EZWx0YSA6IC1wb3NpdGlvbkRlbHRhO1xuICAgICAgICAgICAgdmFyIHBhbmUxT3JkZXIgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5vcmRlcik7XG4gICAgICAgICAgICB2YXIgcGFuZTJPcmRlciA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUyKS5vcmRlcik7XG5cbiAgICAgICAgICAgIGlmIChwYW5lMU9yZGVyID4gcGFuZTJPcmRlcikge1xuICAgICAgICAgICAgICBzaXplRGVsdGEgPSAtc2l6ZURlbHRhO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgbmV3TWF4U2l6ZSA9IG1heFNpemU7XG5cbiAgICAgICAgICAgIGlmIChtYXhTaXplICE9PSB1bmRlZmluZWQgJiYgbWF4U2l6ZSA8PSAwKSB7XG4gICAgICAgICAgICAgIHZhciBzcGxpdFBhbmUgPSB0aGlzLnNwbGl0UGFuZTtcblxuICAgICAgICAgICAgICBpZiAoc3BsaXQgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgICAgICBuZXdNYXhTaXplID0gc3BsaXRQYW5lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICsgbWF4U2l6ZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdNYXhTaXplID0gc3BsaXRQYW5lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCArIG1heFNpemU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIG5ld1NpemUgPSBzaXplIC0gc2l6ZURlbHRhO1xuICAgICAgICAgICAgdmFyIG5ld1Bvc2l0aW9uID0gcG9zaXRpb24gLSBwb3NpdGlvbkRlbHRhO1xuXG4gICAgICAgICAgICBpZiAobmV3U2l6ZSA8IG1pblNpemUpIHtcbiAgICAgICAgICAgICAgbmV3U2l6ZSA9IG1pblNpemU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1heFNpemUgIT09IHVuZGVmaW5lZCAmJiBuZXdTaXplID4gbmV3TWF4U2l6ZSkge1xuICAgICAgICAgICAgICBuZXdTaXplID0gbmV3TWF4U2l6ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBuZXdQb3NpdGlvbixcbiAgICAgICAgICAgICAgICByZXNpemVkOiB0cnVlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob25DaGFuZ2UpIG9uQ2hhbmdlKG5ld1NpemUpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShfZGVmaW5lUHJvcGVydHkoe1xuICAgICAgICAgICAgICBkcmFnZ2VkU2l6ZTogbmV3U2l6ZVxuICAgICAgICAgICAgfSwgaXNQcmltYXJ5Rmlyc3QgPyAncGFuZTFTaXplJyA6ICdwYW5lMlNpemUnLCBuZXdTaXplKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uTW91c2VVcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1vdXNlVXAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBhbGxvd1Jlc2l6ZSA9IF90aGlzJHByb3BzMy5hbGxvd1Jlc2l6ZSxcbiAgICAgICAgICBvbkRyYWdGaW5pc2hlZCA9IF90aGlzJHByb3BzMy5vbkRyYWdGaW5pc2hlZDtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZTIgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIGFjdGl2ZSA9IF90aGlzJHN0YXRlMi5hY3RpdmUsXG4gICAgICAgICAgZHJhZ2dlZFNpemUgPSBfdGhpcyRzdGF0ZTIuZHJhZ2dlZFNpemU7XG5cbiAgICAgIGlmIChhbGxvd1Jlc2l6ZSAmJiBhY3RpdmUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvbkRyYWdGaW5pc2hlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIG9uRHJhZ0ZpbmlzaGVkKGRyYWdnZWRTaXplKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSAvLyB3ZSBoYXZlIHRvIGNoZWNrIHZhbHVlcyBzaW5jZSBnRFNGUCBpcyBjYWxsZWQgb24gZXZlcnkgcmVuZGVyIGFuZCBtb3JlIGluIFN0cmljdE1vZGVcblxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF90aGlzJHByb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYWxsb3dSZXNpemUgPSBfdGhpcyRwcm9wczQuYWxsb3dSZXNpemUsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wczQuY2hpbGRyZW4sXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHM0LmNsYXNzTmFtZSxcbiAgICAgICAgICBvblJlc2l6ZXJDbGljayA9IF90aGlzJHByb3BzNC5vblJlc2l6ZXJDbGljayxcbiAgICAgICAgICBvblJlc2l6ZXJEb3VibGVDbGljayA9IF90aGlzJHByb3BzNC5vblJlc2l6ZXJEb3VibGVDbGljayxcbiAgICAgICAgICBwYW5lQ2xhc3NOYW1lID0gX3RoaXMkcHJvcHM0LnBhbmVDbGFzc05hbWUsXG4gICAgICAgICAgcGFuZTFDbGFzc05hbWUgPSBfdGhpcyRwcm9wczQucGFuZTFDbGFzc05hbWUsXG4gICAgICAgICAgcGFuZTJDbGFzc05hbWUgPSBfdGhpcyRwcm9wczQucGFuZTJDbGFzc05hbWUsXG4gICAgICAgICAgcGFuZVN0eWxlID0gX3RoaXMkcHJvcHM0LnBhbmVTdHlsZSxcbiAgICAgICAgICBwYW5lMVN0eWxlUHJvcHMgPSBfdGhpcyRwcm9wczQucGFuZTFTdHlsZSxcbiAgICAgICAgICBwYW5lMlN0eWxlUHJvcHMgPSBfdGhpcyRwcm9wczQucGFuZTJTdHlsZSxcbiAgICAgICAgICByZXNpemVyQ2xhc3NOYW1lID0gX3RoaXMkcHJvcHM0LnJlc2l6ZXJDbGFzc05hbWUsXG4gICAgICAgICAgcmVzaXplclN0eWxlID0gX3RoaXMkcHJvcHM0LnJlc2l6ZXJTdHlsZSxcbiAgICAgICAgICBzcGxpdCA9IF90aGlzJHByb3BzNC5zcGxpdCxcbiAgICAgICAgICBzdHlsZVByb3BzID0gX3RoaXMkcHJvcHM0LnN0eWxlO1xuICAgICAgdmFyIF90aGlzJHN0YXRlMyA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgcGFuZTFTaXplID0gX3RoaXMkc3RhdGUzLnBhbmUxU2l6ZSxcbiAgICAgICAgICBwYW5lMlNpemUgPSBfdGhpcyRzdGF0ZTMucGFuZTJTaXplO1xuICAgICAgdmFyIGRpc2FibGVkQ2xhc3MgPSBhbGxvd1Jlc2l6ZSA/ICcnIDogJ2Rpc2FibGVkJztcbiAgICAgIHZhciByZXNpemVyQ2xhc3NOYW1lc0luY2x1ZGluZ0RlZmF1bHQgPSByZXNpemVyQ2xhc3NOYW1lID8gXCJcIi5jb25jYXQocmVzaXplckNsYXNzTmFtZSwgXCIgXCIpLmNvbmNhdChSRVNJWkVSX0RFRkFVTFRfQ0xBU1NOQU1FKSA6IHJlc2l6ZXJDbGFzc05hbWU7XG4gICAgICB2YXIgbm90TnVsbENoaWxkcmVuID0gcmVtb3ZlTnVsbENoaWxkcmVuKGNoaWxkcmVuKTtcblxuICAgICAgdmFyIHN0eWxlID0gX29iamVjdFNwcmVhZDIoe1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXg6IDEsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIE1velVzZXJTZWxlY3Q6ICd0ZXh0JyxcbiAgICAgICAgV2Via2l0VXNlclNlbGVjdDogJ3RleHQnLFxuICAgICAgICBtc1VzZXJTZWxlY3Q6ICd0ZXh0JyxcbiAgICAgICAgdXNlclNlbGVjdDogJ3RleHQnXG4gICAgICB9LCBzdHlsZVByb3BzKTtcblxuICAgICAgaWYgKHNwbGl0ID09PSAndmVydGljYWwnKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oc3R5bGUsIHtcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIHJpZ2h0OiAwXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihzdHlsZSwge1xuICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNsYXNzZXMgPSBbJ1NwbGl0UGFuZScsIGNsYXNzTmFtZSwgc3BsaXQsIGRpc2FibGVkQ2xhc3NdO1xuXG4gICAgICB2YXIgcGFuZTFTdHlsZSA9IF9vYmplY3RTcHJlYWQyKHt9LCBwYW5lU3R5bGUsIHt9LCBwYW5lMVN0eWxlUHJvcHMpO1xuXG4gICAgICB2YXIgcGFuZTJTdHlsZSA9IF9vYmplY3RTcHJlYWQyKHt9LCBwYW5lU3R5bGUsIHt9LCBwYW5lMlN0eWxlUHJvcHMpO1xuXG4gICAgICB2YXIgcGFuZTFDbGFzc2VzID0gWydQYW5lMScsIHBhbmVDbGFzc05hbWUsIHBhbmUxQ2xhc3NOYW1lXS5qb2luKCcgJyk7XG4gICAgICB2YXIgcGFuZTJDbGFzc2VzID0gWydQYW5lMicsIHBhbmVDbGFzc05hbWUsIHBhbmUyQ2xhc3NOYW1lXS5qb2luKCcgJyk7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5qb2luKCcgJyksXG4gICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKG5vZGUpIHtcbiAgICAgICAgICBfdGhpczIuc3BsaXRQYW5lID0gbm9kZTtcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGU6IHN0eWxlXG4gICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFBhbmUsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBwYW5lMUNsYXNzZXMsXG4gICAgICAgIGtleTogXCJwYW5lMVwiLFxuICAgICAgICBlbGVSZWY6IGZ1bmN0aW9uIGVsZVJlZihub2RlKSB7XG4gICAgICAgICAgX3RoaXMyLnBhbmUxID0gbm9kZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZTogcGFuZTFTaXplLFxuICAgICAgICBzaXplMjogcGFuZTJTaXplLFxuICAgICAgICBzcGxpdDogc3BsaXQsXG4gICAgICAgIHN0eWxlOiBwYW5lMVN0eWxlXG4gICAgICB9LCBub3ROdWxsQ2hpbGRyZW5bMF0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJlc2l6ZXIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBkaXNhYmxlZENsYXNzLFxuICAgICAgICBvbkNsaWNrOiBvblJlc2l6ZXJDbGljayxcbiAgICAgICAgb25Eb3VibGVDbGljazogb25SZXNpemVyRG91YmxlQ2xpY2ssXG4gICAgICAgIG9uTW91c2VEb3duOiB0aGlzLm9uTW91c2VEb3duLFxuICAgICAgICBvblRvdWNoU3RhcnQ6IHRoaXMub25Ub3VjaFN0YXJ0LFxuICAgICAgICBvblRvdWNoRW5kOiB0aGlzLm9uTW91c2VVcCxcbiAgICAgICAga2V5OiBcInJlc2l6ZXJcIixcbiAgICAgICAgcmVzaXplckNsYXNzTmFtZTogcmVzaXplckNsYXNzTmFtZXNJbmNsdWRpbmdEZWZhdWx0LFxuICAgICAgICBzcGxpdDogc3BsaXQsXG4gICAgICAgIHN0eWxlOiByZXNpemVyU3R5bGUgfHwge31cbiAgICAgIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFBhbmUsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBwYW5lMkNsYXNzZXMsXG4gICAgICAgIGtleTogXCJwYW5lMlwiLFxuICAgICAgICBlbGVSZWY6IGZ1bmN0aW9uIGVsZVJlZihub2RlKSB7XG4gICAgICAgICAgX3RoaXMyLnBhbmUyID0gbm9kZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZTogcGFuZTJTaXplLFxuICAgICAgICBzaXplMjogcGFuZTFTaXplLFxuICAgICAgICBzcGxpdDogc3BsaXQsXG4gICAgICAgIHN0eWxlOiBwYW5lMlN0eWxlXG4gICAgICB9LCBub3ROdWxsQ2hpbGRyZW5bMV0pKTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICByZXR1cm4gU3BsaXRQYW5lLmdldFNpemVVcGRhdGUobmV4dFByb3BzLCBwcmV2U3RhdGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTaXplVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNpemVVcGRhdGUocHJvcHMsIHN0YXRlKSB7XG4gICAgICB2YXIgbmV3U3RhdGUgPSB7fTtcbiAgICAgIHZhciBpbnN0YW5jZVByb3BzID0gc3RhdGUuaW5zdGFuY2VQcm9wcztcblxuICAgICAgaWYgKGluc3RhbmNlUHJvcHMuc2l6ZSA9PT0gcHJvcHMuc2l6ZSAmJiBwcm9wcy5zaXplICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV3U2l6ZSA9IHByb3BzLnNpemUgIT09IHVuZGVmaW5lZCA/IHByb3BzLnNpemUgOiBnZXREZWZhdWx0U2l6ZShwcm9wcy5kZWZhdWx0U2l6ZSwgcHJvcHMubWluU2l6ZSwgcHJvcHMubWF4U2l6ZSwgc3RhdGUuZHJhZ2dlZFNpemUpO1xuXG4gICAgICBpZiAocHJvcHMuc2l6ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5ld1N0YXRlLmRyYWdnZWRTaXplID0gbmV3U2l6ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGlzUGFuZWwxUHJpbWFyeSA9IHByb3BzLnByaW1hcnkgPT09ICdmaXJzdCc7XG4gICAgICBuZXdTdGF0ZVtpc1BhbmVsMVByaW1hcnkgPyAncGFuZTFTaXplJyA6ICdwYW5lMlNpemUnXSA9IG5ld1NpemU7XG4gICAgICBuZXdTdGF0ZVtpc1BhbmVsMVByaW1hcnkgPyAncGFuZTJTaXplJyA6ICdwYW5lMVNpemUnXSA9IHVuZGVmaW5lZDtcbiAgICAgIG5ld1N0YXRlLmluc3RhbmNlUHJvcHMgPSB7XG4gICAgICAgIHNpemU6IHByb3BzLnNpemVcbiAgICAgIH07XG4gICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNwbGl0UGFuZTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuU3BsaXRQYW5lLnByb3BUeXBlcyA9IHtcbiAgYWxsb3dSZXNpemU6IFByb3BUeXBlcy5ib29sLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcHJpbWFyeTogUHJvcFR5cGVzLm9uZU9mKFsnZmlyc3QnLCAnc2Vjb25kJ10pLFxuICBtaW5TaXplOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIG1heFNpemU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzXG4gIGRlZmF1bHRTaXplOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgc3BsaXQ6IFByb3BUeXBlcy5vbmVPZihbJ3ZlcnRpY2FsJywgJ2hvcml6b250YWwnXSksXG4gIG9uRHJhZ1N0YXJ0ZWQ6IFByb3BUeXBlcy5mdW5jLFxuICBvbkRyYWdGaW5pc2hlZDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25SZXNpemVyQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBvblJlc2l6ZXJEb3VibGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIHN0eWxlOiBzdHlsZVByb3BUeXBlLFxuICByZXNpemVyU3R5bGU6IHN0eWxlUHJvcFR5cGUsXG4gIHBhbmVDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBhbmUxQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwYW5lMkNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGFuZVN0eWxlOiBzdHlsZVByb3BUeXBlLFxuICBwYW5lMVN0eWxlOiBzdHlsZVByb3BUeXBlLFxuICBwYW5lMlN0eWxlOiBzdHlsZVByb3BUeXBlLFxuICByZXNpemVyQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdGVwOiBQcm9wVHlwZXMubnVtYmVyXG59O1xuU3BsaXRQYW5lLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWxsb3dSZXNpemU6IHRydWUsXG4gIG1pblNpemU6IDUwLFxuICBwcmltYXJ5OiAnZmlyc3QnLFxuICBzcGxpdDogJ3ZlcnRpY2FsJyxcbiAgcGFuZUNsYXNzTmFtZTogJycsXG4gIHBhbmUxQ2xhc3NOYW1lOiAnJyxcbiAgcGFuZTJDbGFzc05hbWU6ICcnXG59O1xucG9seWZpbGwoU3BsaXRQYW5lKTtcblxuZXhwb3J0IGRlZmF1bHQgU3BsaXRQYW5lO1xuZXhwb3J0IHsgUGFuZSB9O1xuIl19