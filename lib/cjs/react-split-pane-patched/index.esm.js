"use strict";

exports.__esModule = true;
exports.Pane = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactStyleProptype = _interopRequireDefault(require("react-style-proptype"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable */
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
      return _react["default"].createElement("div", {
        ref: eleRef,
        className: classes.join(' '),
        style: style
      }, children);
    }
  }]);

  return Pane;
}(_react["default"].PureComponent);

exports.Pane = Pane;
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
      return _react["default"].createElement("span", {
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
}(_react["default"].Component);

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
  return _react["default"].Children.toArray(children).filter(function (c) {
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
      return _react["default"].createElement("div", {
        className: classes.join(' '),
        ref: function ref(node) {
          _this2.splitPane = node;
        },
        style: style
      }, _react["default"].createElement(Pane, {
        className: pane1Classes,
        key: "pane1",
        eleRef: function eleRef(node) {
          _this2.pane1 = node;
        },
        size: pane1Size,
        size2: pane2Size,
        split: split,
        style: pane1Style
      }, notNullChildren[0]), _react["default"].createElement(Resizer, {
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
      }), _react["default"].createElement(Pane, {
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
}(_react["default"].Component);

SplitPane.defaultProps = {
  allowResize: true,
  minSize: 50,
  primary: 'first',
  split: 'vertical',
  paneClassName: '',
  pane1ClassName: '',
  pane2ClassName: ''
};
(0, _reactLifecyclesCompat.polyfill)(SplitPane);
var _default = SplitPane;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZWFjdC1zcGxpdC1wYW5lLXBhdGNoZWQvaW5kZXguZXNtLmpzIl0sIm5hbWVzIjpbIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsIl9kZWZpbmVQcm9wZXJ0eSIsIm9iaiIsInZhbHVlIiwib3duS2V5cyIsIm9iamVjdCIsImVudW1lcmFibGVPbmx5Iiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsInN5bWJvbHMiLCJmaWx0ZXIiLCJzeW0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkMiIsImFyZ3VtZW50cyIsInNvdXJjZSIsImZvckVhY2giLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIl9pbmhlcml0cyIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwiX3NldFByb3RvdHlwZU9mIiwiX2dldFByb3RvdHlwZU9mIiwibyIsInNldFByb3RvdHlwZU9mIiwiZ2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJwIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsInNlbGYiLCJSZWZlcmVuY2VFcnJvciIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwiY2FsbCIsIlBhbmUiLCJfUmVhY3QkUHVyZUNvbXBvbmVudCIsInJlbmRlciIsIl90aGlzJHByb3BzIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJzcGxpdCIsInN0eWxlUHJvcHMiLCJzdHlsZSIsInNpemUiLCJzaXplMiIsImVsZVJlZiIsImNsYXNzZXMiLCJmbGV4IiwicG9zaXRpb24iLCJvdXRsaW5lIiwidW5kZWZpbmVkIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwiaXNOYU4iLCJpbmRleE9mIiwiYXNzaWduIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwicmVmIiwiam9pbiIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJSRVNJWkVSX0RFRkFVTFRfQ0xBU1NOQU1FIiwiUmVzaXplciIsIl9SZWFjdCRDb21wb25lbnQiLCJfb25DbGljayIsIm9uQ2xpY2siLCJfb25Eb3VibGVDbGljayIsIm9uRG91YmxlQ2xpY2siLCJfb25Nb3VzZURvd24iLCJvbk1vdXNlRG93biIsIl9vblRvdWNoRW5kIiwib25Ub3VjaEVuZCIsIl9vblRvdWNoU3RhcnQiLCJvblRvdWNoU3RhcnQiLCJyZXNpemVyQ2xhc3NOYW1lIiwicm9sZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJDb21wb25lbnQiLCJ1bkZvY3VzIiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJzZWxlY3Rpb24iLCJlbXB0eSIsImdldFNlbGVjdGlvbiIsInJlbW92ZUFsbFJhbmdlcyIsImUiLCJnZXREZWZhdWx0U2l6ZSIsImRlZmF1bHRTaXplIiwibWluU2l6ZSIsIm1heFNpemUiLCJkcmFnZ2VkU2l6ZSIsIm1pbiIsIm1heCIsIkluZmluaXR5IiwiTWF0aCIsInJlbW92ZU51bGxDaGlsZHJlbiIsIkNoaWxkcmVuIiwidG9BcnJheSIsImMiLCJTcGxpdFBhbmUiLCJfdGhpcyIsImJpbmQiLCJvbk1vdXNlTW92ZSIsIm9uVG91Y2hNb3ZlIiwib25Nb3VzZVVwIiwicHJpbWFyeSIsImluaXRpYWxTaXplIiwic3RhdGUiLCJhY3RpdmUiLCJyZXNpemVkIiwicGFuZTFTaXplIiwicGFuZTJTaXplIiwiaW5zdGFuY2VQcm9wcyIsImNvbXBvbmVudERpZE1vdW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFN0YXRlIiwiZ2V0U2l6ZVVwZGF0ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2ZW50V2l0aFRvdWNoZXMiLCJ0b3VjaGVzIiwiY2xpZW50WCIsImNsaWVudFkiLCJhbGxvd1Jlc2l6ZSIsIm9uRHJhZ1N0YXJ0ZWQiLCJfdGhpcyRwcm9wczIiLCJvbkNoYW5nZSIsInN0ZXAiLCJfdGhpcyRzdGF0ZSIsImlzUHJpbWFyeUZpcnN0IiwicGFuZTEiLCJwYW5lMiIsInJlZjIiLCJub2RlIiwibm9kZTIiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjdXJyZW50IiwicG9zaXRpb25EZWx0YSIsImFicyIsInNpemVEZWx0YSIsInBhbmUxT3JkZXIiLCJwYXJzZUludCIsImdldENvbXB1dGVkU3R5bGUiLCJvcmRlciIsInBhbmUyT3JkZXIiLCJuZXdNYXhTaXplIiwic3BsaXRQYW5lIiwibmV3U2l6ZSIsIm5ld1Bvc2l0aW9uIiwiX3RoaXMkcHJvcHMzIiwib25EcmFnRmluaXNoZWQiLCJfdGhpcyRzdGF0ZTIiLCJfdGhpczIiLCJfdGhpcyRwcm9wczQiLCJvblJlc2l6ZXJDbGljayIsIm9uUmVzaXplckRvdWJsZUNsaWNrIiwicGFuZUNsYXNzTmFtZSIsInBhbmUxQ2xhc3NOYW1lIiwicGFuZTJDbGFzc05hbWUiLCJwYW5lU3R5bGUiLCJwYW5lMVN0eWxlUHJvcHMiLCJwYW5lMVN0eWxlIiwicGFuZTJTdHlsZVByb3BzIiwicGFuZTJTdHlsZSIsInJlc2l6ZXJTdHlsZSIsIl90aGlzJHN0YXRlMyIsImRpc2FibGVkQ2xhc3MiLCJyZXNpemVyQ2xhc3NOYW1lc0luY2x1ZGluZ0RlZmF1bHQiLCJjb25jYXQiLCJub3ROdWxsQ2hpbGRyZW4iLCJvdmVyZmxvdyIsIk1velVzZXJTZWxlY3QiLCJXZWJraXRVc2VyU2VsZWN0IiwibXNVc2VyU2VsZWN0IiwidXNlclNlbGVjdCIsImZsZXhEaXJlY3Rpb24iLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJtaW5IZWlnaHQiLCJ0b3AiLCJwYW5lMUNsYXNzZXMiLCJwYW5lMkNsYXNzZXMiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJuZXh0UHJvcHMiLCJwcmV2U3RhdGUiLCJuZXdTdGF0ZSIsImlzUGFuZWwxUHJpbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUpBO0FBTUEsU0FBU0EsZUFBVCxDQUF5QkMsUUFBekIsRUFBbUNDLFdBQW5DLEVBQWdEO0FBQzlDLE1BQUksRUFBRUQsUUFBUSxZQUFZQyxXQUF0QixDQUFKLEVBQXdDO0FBQ3RDLFVBQU0sSUFBSUMsU0FBSixDQUFjLG1DQUFkLENBQU47QUFDRDtBQUNGOztBQUVELFNBQVNDLGlCQUFULENBQTJCQyxNQUEzQixFQUFtQ0MsS0FBbkMsRUFBMEM7QUFDeEMsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxLQUFLLENBQUNFLE1BQTFCLEVBQWtDRCxDQUFDLEVBQW5DLEVBQXVDO0FBQ3JDLFFBQUlFLFVBQVUsR0FBR0gsS0FBSyxDQUFDQyxDQUFELENBQXRCO0FBQ0FFLElBQUFBLFVBQVUsQ0FBQ0MsVUFBWCxHQUF3QkQsVUFBVSxDQUFDQyxVQUFYLElBQXlCLEtBQWpEO0FBQ0FELElBQUFBLFVBQVUsQ0FBQ0UsWUFBWCxHQUEwQixJQUExQjtBQUNBLFFBQUksV0FBV0YsVUFBZixFQUEyQkEsVUFBVSxDQUFDRyxRQUFYLEdBQXNCLElBQXRCO0FBQzNCQyxJQUFBQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JULE1BQXRCLEVBQThCSSxVQUFVLENBQUNNLEdBQXpDLEVBQThDTixVQUE5QztBQUNEO0FBQ0Y7O0FBRUQsU0FBU08sWUFBVCxDQUFzQmQsV0FBdEIsRUFBbUNlLFVBQW5DLEVBQStDQyxXQUEvQyxFQUE0RDtBQUMxRCxNQUFJRCxVQUFKLEVBQWdCYixpQkFBaUIsQ0FBQ0YsV0FBVyxDQUFDaUIsU0FBYixFQUF3QkYsVUFBeEIsQ0FBakI7QUFDaEIsTUFB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dkJBLEdBTEMsQ0EzUVEsQ0FBWjs7QUEwU0EsU0FBT3ZGLFNBQVA7QUFDRCxDQS9VNEIsQ0ErVTNCN0Msa0JBQU11QixTQS9VcUIsQ0FBN0I7O0FBNFdBc0IsU0FBUyxDQUFDeEMsWUFBVixHQUF5QjtBQUN2QmdFLEVBQUFBLFdBQVcsRUFBRSxJQURVO0FBRXZCbkMsRUFBQUEsT0FBTyxFQUFFLEVBRmM7QUFHdkJpQixFQUFBQSxPQUFPLEVBQUUsT0FIYztBQUl2QnBFLEVBQUFBLEtBQUssRUFBRSxVQUpnQjtBQUt2QnVILEVBQUFBLGFBQWEsRUFBRSxFQUxRO0FBTXZCQyxFQUFBQSxjQUFjLEVBQUUsRUFOTztBQU92QkMsRUFBQUEsY0FBYyxFQUFFO0FBUE8sQ0FBekI7QUFTQSxxQ0FBUzNELFNBQVQ7ZUFFZUEsUyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZVByb3BUeXBlIGZyb20gJ3JlYWN0LXN0eWxlLXByb3B0eXBlJztcbmltcG9ydCB7IHBvbHlmaWxsIH0gZnJvbSAncmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQnO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSk7XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbnZhciBQYW5lID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUGFuZSwgX1JlYWN0JFB1cmVDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFBhbmUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhbmUpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihQYW5lKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQYW5lLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICBzcGxpdCA9IF90aGlzJHByb3BzLnNwbGl0LFxuICAgICAgICAgIHN0eWxlUHJvcHMgPSBfdGhpcyRwcm9wcy5zdHlsZSxcbiAgICAgICAgICBzaXplID0gX3RoaXMkcHJvcHMuc2l6ZSxcbiAgICAgICAgICBzaXplMiA9IF90aGlzJHByb3BzLnNpemUyLFxuICAgICAgICAgIGVsZVJlZiA9IF90aGlzJHByb3BzLmVsZVJlZjtcbiAgICAgIHZhciBjbGFzc2VzID0gWydQYW5lJywgc3BsaXQsIGNsYXNzTmFtZV07XG4gICAgICB2YXIgc3R5bGUgPSB7XG4gICAgICAgIGZsZXg6IDEsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBvdXRsaW5lOiAnbm9uZSdcbiAgICAgIH07XG5cbiAgICAgIGlmIChzaXplICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHNwbGl0ID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgc3R5bGUud2lkdGggPSBzaXplO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0eWxlLmhlaWdodCA9IHNpemU7XG4gICAgICAgICAgc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgfVxuXG4gICAgICAgIHN0eWxlLmZsZXggPSAnbm9uZSc7XG4gICAgICB9IGVsc2UgaWYgKHNwbGl0ICE9PSAndmVydGljYWwnKSB7XG4gICAgICAgIGlmICghaXNOYU4oc2l6ZTIpKSB7XG4gICAgICAgICAgc3R5bGUuaGVpZ2h0ID0gJ2NhbGMoMTAwJSAtICcgKyBzaXplMiArICdweCknO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaXplMi5pbmRleE9mICYmIHNpemUyLmluZGV4T2YoJyUnKSAhPT0gLTEpIHtcbiAgICAgICAgICBzdHlsZS5oZWlnaHQgPSAnY2FsYygxMDAlIC0gJyArIHNpemUyICsgJyknO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHN0eWxlID0gT2JqZWN0LmFzc2lnbih7fSwgc3R5bGUsIHN0eWxlUHJvcHMgfHwge30pO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICByZWY6IGVsZVJlZixcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLmpvaW4oJyAnKSxcbiAgICAgICAgc3R5bGU6IHN0eWxlXG4gICAgICB9LCBjaGlsZHJlbik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFBhbmU7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpO1xuXG5QYW5lLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIHNpemUyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIHNwbGl0OiBQcm9wVHlwZXMub25lT2YoWyd2ZXJ0aWNhbCcsICdob3Jpem9udGFsJ10pLFxuICBzdHlsZTogc3R5bGVQcm9wVHlwZSxcbiAgZWxlUmVmOiBQcm9wVHlwZXMuZnVuY1xufTtcblBhbmUuZGVmYXVsdFByb3BzID0ge307XG5cbnZhciBSRVNJWkVSX0RFRkFVTFRfQ0xBU1NOQU1FID0gJ1Jlc2l6ZXInO1xuXG52YXIgUmVzaXplciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUmVzaXplciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUmVzaXplcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVzaXplcik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKFJlc2l6ZXIpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFJlc2l6ZXIsIFt7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICBfb25DbGljayA9IF90aGlzJHByb3BzLm9uQ2xpY2ssXG4gICAgICAgICAgX29uRG91YmxlQ2xpY2sgPSBfdGhpcyRwcm9wcy5vbkRvdWJsZUNsaWNrLFxuICAgICAgICAgIF9vbk1vdXNlRG93biA9IF90aGlzJHByb3BzLm9uTW91c2VEb3duLFxuICAgICAgICAgIF9vblRvdWNoRW5kID0gX3RoaXMkcHJvcHMub25Ub3VjaEVuZCxcbiAgICAgICAgICBfb25Ub3VjaFN0YXJ0ID0gX3RoaXMkcHJvcHMub25Ub3VjaFN0YXJ0LFxuICAgICAgICAgIHJlc2l6ZXJDbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5yZXNpemVyQ2xhc3NOYW1lLFxuICAgICAgICAgIHNwbGl0ID0gX3RoaXMkcHJvcHMuc3BsaXQsXG4gICAgICAgICAgc3R5bGUgPSBfdGhpcyRwcm9wcy5zdHlsZTtcbiAgICAgIHZhciBjbGFzc2VzID0gW3Jlc2l6ZXJDbGFzc05hbWUsIHNwbGl0LCBjbGFzc05hbWVdO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgcm9sZTogXCJwcmVzZW50YXRpb25cIixcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLmpvaW4oJyAnKSxcbiAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICBvbk1vdXNlRG93bjogZnVuY3Rpb24gb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gX29uTW91c2VEb3duKGV2ZW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Ub3VjaFN0YXJ0OiBmdW5jdGlvbiBvblRvdWNoU3RhcnQoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgX29uVG91Y2hTdGFydChldmVudCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uVG91Y2hFbmQ6IGZ1bmN0aW9uIG9uVG91Y2hFbmQoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgX29uVG91Y2hFbmQoZXZlbnQpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKF9vbkNsaWNrKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBfb25DbGljayhldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbkRvdWJsZUNsaWNrOiBmdW5jdGlvbiBvbkRvdWJsZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKF9vbkRvdWJsZUNsaWNrKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBfb25Eb3VibGVDbGljayhldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUmVzaXplcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuUmVzaXplci5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Eb3VibGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTW91c2VEb3duOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvblRvdWNoU3RhcnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uVG91Y2hFbmQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNwbGl0OiBQcm9wVHlwZXMub25lT2YoWyd2ZXJ0aWNhbCcsICdob3Jpem9udGFsJ10pLFxuICBzdHlsZTogc3R5bGVQcm9wVHlwZSxcbiAgcmVzaXplckNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59O1xuUmVzaXplci5kZWZhdWx0UHJvcHMgPSB7XG4gIHJlc2l6ZXJDbGFzc05hbWU6IFJFU0laRVJfREVGQVVMVF9DTEFTU05BTUVcbn07XG5cbmZ1bmN0aW9uIHVuRm9jdXMoZG9jdW1lbnQsIHdpbmRvdykge1xuICBpZiAoZG9jdW1lbnQuc2VsZWN0aW9uKSB7XG4gICAgZG9jdW1lbnQuc2VsZWN0aW9uLmVtcHR5KCk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0U2l6ZShkZWZhdWx0U2l6ZSwgbWluU2l6ZSwgbWF4U2l6ZSwgZHJhZ2dlZFNpemUpIHtcbiAgaWYgKHR5cGVvZiBkcmFnZ2VkU2l6ZSA9PT0gJ251bWJlcicpIHtcbiAgICB2YXIgbWluID0gdHlwZW9mIG1pblNpemUgPT09ICdudW1iZXInID8gbWluU2l6ZSA6IDA7XG4gICAgdmFyIG1heCA9IHR5cGVvZiBtYXhTaXplID09PSAnbnVtYmVyJyAmJiBtYXhTaXplID49IDAgPyBtYXhTaXplIDogSW5maW5pdHk7XG4gICAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCBkcmFnZ2VkU2l6ZSkpO1xuICB9XG5cbiAgaWYgKGRlZmF1bHRTaXplICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZGVmYXVsdFNpemU7XG4gIH1cblxuICByZXR1cm4gbWluU2l6ZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTnVsbENoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHJldHVybiBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKS5maWx0ZXIoZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gYztcbiAgfSk7XG59XG5cbnZhciBTcGxpdFBhbmUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFNwbGl0UGFuZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gU3BsaXRQYW5lKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNwbGl0UGFuZSk7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihTcGxpdFBhbmUpLmNhbGwodGhpcywgcHJvcHMpKTtcbiAgICBfdGhpcy5vbk1vdXNlRG93biA9IF90aGlzLm9uTW91c2VEb3duLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uVG91Y2hTdGFydCA9IF90aGlzLm9uVG91Y2hTdGFydC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbk1vdXNlTW92ZSA9IF90aGlzLm9uTW91c2VNb3ZlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uVG91Y2hNb3ZlID0gX3RoaXMub25Ub3VjaE1vdmUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25Nb3VzZVVwID0gX3RoaXMub25Nb3VzZVVwLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpOyAvLyBvcmRlciBvZiBzZXR0aW5nIHBhbmVsIHNpemVzLlxuICAgIC8vIDEuIHNpemVcbiAgICAvLyAyLiBnZXREZWZhdWx0U2l6ZShkZWZhdWx0U2l6ZSwgbWluc2l6ZSwgbWF4U2l6ZSlcblxuICAgIHZhciBzaXplID0gcHJvcHMuc2l6ZSxcbiAgICAgICAgZGVmYXVsdFNpemUgPSBwcm9wcy5kZWZhdWx0U2l6ZSxcbiAgICAgICAgbWluU2l6ZSA9IHByb3BzLm1pblNpemUsXG4gICAgICAgIG1heFNpemUgPSBwcm9wcy5tYXhTaXplLFxuICAgICAgICBwcmltYXJ5ID0gcHJvcHMucHJpbWFyeTtcbiAgICB2YXIgaW5pdGlhbFNpemUgPSBzaXplICE9PSB1bmRlZmluZWQgPyBzaXplIDogZ2V0RGVmYXVsdFNpemUoZGVmYXVsdFNpemUsIG1pblNpemUsIG1heFNpemUsIG51bGwpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgIHJlc2l6ZWQ6IGZhbHNlLFxuICAgICAgcGFuZTFTaXplOiBwcmltYXJ5ID09PSAnZmlyc3QnID8gaW5pdGlhbFNpemUgOiB1bmRlZmluZWQsXG4gICAgICBwYW5lMlNpemU6IHByaW1hcnkgPT09ICdzZWNvbmQnID8gaW5pdGlhbFNpemUgOiB1bmRlZmluZWQsXG4gICAgICAvLyB0aGVzZSBhcmUgcHJvcHMgdGhhdCBhcmUgbmVlZGVkIGluIHN0YXRpYyBmdW5jdGlvbnMuIGllOiBnRFNGUFxuICAgICAgaW5zdGFuY2VQcm9wczoge1xuICAgICAgICBzaXplOiBzaXplXG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU3BsaXRQYW5lLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2VVcCk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUpO1xuICAgICAgdGhpcy5zZXRTdGF0ZShTcGxpdFBhbmUuZ2V0U2l6ZVVwZGF0ZSh0aGlzLnByb3BzLCB0aGlzLnN0YXRlKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uTW91c2VEb3duXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICB2YXIgZXZlbnRXaXRoVG91Y2hlcyA9IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50LCB7XG4gICAgICAgIHRvdWNoZXM6IFt7XG4gICAgICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZXG4gICAgICAgIH1dXG4gICAgICB9KTtcbiAgICAgIHRoaXMub25Ub3VjaFN0YXJ0KGV2ZW50V2l0aFRvdWNoZXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvblRvdWNoU3RhcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGFsbG93UmVzaXplID0gX3RoaXMkcHJvcHMuYWxsb3dSZXNpemUsXG4gICAgICAgICAgb25EcmFnU3RhcnRlZCA9IF90aGlzJHByb3BzLm9uRHJhZ1N0YXJ0ZWQsXG4gICAgICAgICAgc3BsaXQgPSBfdGhpcyRwcm9wcy5zcGxpdDtcblxuICAgICAgaWYgKGFsbG93UmVzaXplKSB7XG4gICAgICAgIHVuRm9jdXMoZG9jdW1lbnQsIHdpbmRvdyk7XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IHNwbGl0ID09PSAndmVydGljYWwnID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygb25EcmFnU3RhcnRlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIG9uRHJhZ1N0YXJ0ZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICBwb3NpdGlvbjogcG9zaXRpb25cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uTW91c2VNb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgICB2YXIgZXZlbnRXaXRoVG91Y2hlcyA9IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50LCB7XG4gICAgICAgIHRvdWNoZXM6IFt7XG4gICAgICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZXG4gICAgICAgIH1dXG4gICAgICB9KTtcbiAgICAgIHRoaXMub25Ub3VjaE1vdmUoZXZlbnRXaXRoVG91Y2hlcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uVG91Y2hNb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBhbGxvd1Jlc2l6ZSA9IF90aGlzJHByb3BzMi5hbGxvd1Jlc2l6ZSxcbiAgICAgICAgICBtYXhTaXplID0gX3RoaXMkcHJvcHMyLm1heFNpemUsXG4gICAgICAgICAgbWluU2l6ZSA9IF90aGlzJHByb3BzMi5taW5TaXplLFxuICAgICAgICAgIG9uQ2hhbmdlID0gX3RoaXMkcHJvcHMyLm9uQ2hhbmdlLFxuICAgICAgICAgIHNwbGl0ID0gX3RoaXMkcHJvcHMyLnNwbGl0LFxuICAgICAgICAgIHN0ZXAgPSBfdGhpcyRwcm9wczIuc3RlcDtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgYWN0aXZlID0gX3RoaXMkc3RhdGUuYWN0aXZlLFxuICAgICAgICAgIHBvc2l0aW9uID0gX3RoaXMkc3RhdGUucG9zaXRpb247XG5cbiAgICAgIGlmIChhbGxvd1Jlc2l6ZSAmJiBhY3RpdmUpIHtcbiAgICAgICAgdW5Gb2N1cyhkb2N1bWVudCwgd2luZG93KTtcbiAgICAgICAgdmFyIGlzUHJpbWFyeUZpcnN0ID0gdGhpcy5wcm9wcy5wcmltYXJ5ID09PSAnZmlyc3QnO1xuICAgICAgICB2YXIgcmVmID0gaXNQcmltYXJ5Rmlyc3QgPyB0aGlzLnBhbmUxIDogdGhpcy5wYW5lMjtcbiAgICAgICAgdmFyIHJlZjIgPSBpc1ByaW1hcnlGaXJzdCA/IHRoaXMucGFuZTIgOiB0aGlzLnBhbmUxO1xuXG4gICAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgICB2YXIgbm9kZSA9IHJlZjtcbiAgICAgICAgICB2YXIgbm9kZTIgPSByZWYyO1xuXG4gICAgICAgICAgaWYgKG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgICAgICAgICB2YXIgd2lkdGggPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICAgICAgdmFyIGhlaWdodCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBzcGxpdCA9PT0gJ3ZlcnRpY2FsJyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgICAgIHZhciBzaXplID0gc3BsaXQgPT09ICd2ZXJ0aWNhbCcgPyB3aWR0aCA6IGhlaWdodDtcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbkRlbHRhID0gcG9zaXRpb24gLSBjdXJyZW50O1xuXG4gICAgICAgICAgICBpZiAoc3RlcCkge1xuICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMocG9zaXRpb25EZWx0YSkgPCBzdGVwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9IC8vIEludGVnZXIgZGl2aXNpb25cbiAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcblxuXG4gICAgICAgICAgICAgIHBvc2l0aW9uRGVsdGEgPSB+fihwb3NpdGlvbkRlbHRhIC8gc3RlcCkgKiBzdGVwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgc2l6ZURlbHRhID0gaXNQcmltYXJ5Rmlyc3QgPyBwb3NpdGlvbkRlbHRhIDogLXBvc2l0aW9uRGVsdGE7XG4gICAgICAgICAgICB2YXIgcGFuZTFPcmRlciA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpLm9yZGVyKTtcbiAgICAgICAgICAgIHZhciBwYW5lMk9yZGVyID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZTIpLm9yZGVyKTtcblxuICAgICAgICAgICAgaWYgKHBhbmUxT3JkZXIgPiBwYW5lMk9yZGVyKSB7XG4gICAgICAgICAgICAgIHNpemVEZWx0YSA9IC1zaXplRGVsdGE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBuZXdNYXhTaXplID0gbWF4U2l6ZTtcblxuICAgICAgICAgICAgaWYgKG1heFNpemUgIT09IHVuZGVmaW5lZCAmJiBtYXhTaXplIDw9IDApIHtcbiAgICAgICAgICAgICAgdmFyIHNwbGl0UGFuZSA9IHRoaXMuc3BsaXRQYW5lO1xuXG4gICAgICAgICAgICAgIGlmIChzcGxpdCA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgICAgIG5ld01heFNpemUgPSBzcGxpdFBhbmUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggKyBtYXhTaXplO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld01heFNpemUgPSBzcGxpdFBhbmUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ICsgbWF4U2l6ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgbmV3U2l6ZSA9IHNpemUgLSBzaXplRGVsdGE7XG4gICAgICAgICAgICB2YXIgbmV3UG9zaXRpb24gPSBwb3NpdGlvbiAtIHBvc2l0aW9uRGVsdGE7XG5cbiAgICAgICAgICAgIGlmIChuZXdTaXplIDwgbWluU2l6ZSkge1xuICAgICAgICAgICAgICBuZXdTaXplID0gbWluU2l6ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWF4U2l6ZSAhPT0gdW5kZWZpbmVkICYmIG5ld1NpemUgPiBuZXdNYXhTaXplKSB7XG4gICAgICAgICAgICAgIG5ld1NpemUgPSBuZXdNYXhTaXplO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IG5ld1Bvc2l0aW9uLFxuICAgICAgICAgICAgICAgIHJlc2l6ZWQ6IHRydWVcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvbkNoYW5nZSkgb25DaGFuZ2UobmV3U2l6ZSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKF9kZWZpbmVQcm9wZXJ0eSh7XG4gICAgICAgICAgICAgIGRyYWdnZWRTaXplOiBuZXdTaXplXG4gICAgICAgICAgICB9LCBpc1ByaW1hcnlGaXJzdCA/ICdwYW5lMVNpemUnIDogJ3BhbmUyU2l6ZScsIG5ld1NpemUpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25Nb3VzZVVwXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uTW91c2VVcCgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGFsbG93UmVzaXplID0gX3RoaXMkcHJvcHMzLmFsbG93UmVzaXplLFxuICAgICAgICAgIG9uRHJhZ0ZpbmlzaGVkID0gX3RoaXMkcHJvcHMzLm9uRHJhZ0ZpbmlzaGVkO1xuICAgICAgdmFyIF90aGlzJHN0YXRlMiA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgYWN0aXZlID0gX3RoaXMkc3RhdGUyLmFjdGl2ZSxcbiAgICAgICAgICBkcmFnZ2VkU2l6ZSA9IF90aGlzJHN0YXRlMi5kcmFnZ2VkU2l6ZTtcblxuICAgICAgaWYgKGFsbG93UmVzaXplICYmIGFjdGl2ZSkge1xuICAgICAgICBpZiAodHlwZW9mIG9uRHJhZ0ZpbmlzaGVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgb25EcmFnRmluaXNoZWQoZHJhZ2dlZFNpemUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IC8vIHdlIGhhdmUgdG8gY2hlY2sgdmFsdWVzIHNpbmNlIGdEU0ZQIGlzIGNhbGxlZCBvbiBldmVyeSByZW5kZXIgYW5kIG1vcmUgaW4gU3RyaWN0TW9kZVxuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgX3RoaXMkcHJvcHM0ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBhbGxvd1Jlc2l6ZSA9IF90aGlzJHByb3BzNC5hbGxvd1Jlc2l6ZSxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzNC5jaGlsZHJlbixcbiAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wczQuY2xhc3NOYW1lLFxuICAgICAgICAgIG9uUmVzaXplckNsaWNrID0gX3RoaXMkcHJvcHM0Lm9uUmVzaXplckNsaWNrLFxuICAgICAgICAgIG9uUmVzaXplckRvdWJsZUNsaWNrID0gX3RoaXMkcHJvcHM0Lm9uUmVzaXplckRvdWJsZUNsaWNrLFxuICAgICAgICAgIHBhbmVDbGFzc05hbWUgPSBfdGhpcyRwcm9wczQucGFuZUNsYXNzTmFtZSxcbiAgICAgICAgICBwYW5lMUNsYXNzTmFtZSA9IF90aGlzJHByb3BzNC5wYW5lMUNsYXNzTmFtZSxcbiAgICAgICAgICBwYW5lMkNsYXNzTmFtZSA9IF90aGlzJHByb3BzNC5wYW5lMkNsYXNzTmFtZSxcbiAgICAgICAgICBwYW5lU3R5bGUgPSBfdGhpcyRwcm9wczQucGFuZVN0eWxlLFxuICAgICAgICAgIHBhbmUxU3R5bGVQcm9wcyA9IF90aGlzJHByb3BzNC5wYW5lMVN0eWxlLFxuICAgICAgICAgIHBhbmUyU3R5bGVQcm9wcyA9IF90aGlzJHByb3BzNC5wYW5lMlN0eWxlLFxuICAgICAgICAgIHJlc2l6ZXJDbGFzc05hbWUgPSBfdGhpcyRwcm9wczQucmVzaXplckNsYXNzTmFtZSxcbiAgICAgICAgICByZXNpemVyU3R5bGUgPSBfdGhpcyRwcm9wczQucmVzaXplclN0eWxlLFxuICAgICAgICAgIHNwbGl0ID0gX3RoaXMkcHJvcHM0LnNwbGl0LFxuICAgICAgICAgIHN0eWxlUHJvcHMgPSBfdGhpcyRwcm9wczQuc3R5bGU7XG4gICAgICB2YXIgX3RoaXMkc3RhdGUzID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBwYW5lMVNpemUgPSBfdGhpcyRzdGF0ZTMucGFuZTFTaXplLFxuICAgICAgICAgIHBhbmUyU2l6ZSA9IF90aGlzJHN0YXRlMy5wYW5lMlNpemU7XG4gICAgICB2YXIgZGlzYWJsZWRDbGFzcyA9IGFsbG93UmVzaXplID8gJycgOiAnZGlzYWJsZWQnO1xuICAgICAgdmFyIHJlc2l6ZXJDbGFzc05hbWVzSW5jbHVkaW5nRGVmYXVsdCA9IHJlc2l6ZXJDbGFzc05hbWUgPyBcIlwiLmNvbmNhdChyZXNpemVyQ2xhc3NOYW1lLCBcIiBcIikuY29uY2F0KFJFU0laRVJfREVGQVVMVF9DTEFTU05BTUUpIDogcmVzaXplckNsYXNzTmFtZTtcbiAgICAgIHZhciBub3ROdWxsQ2hpbGRyZW4gPSByZW1vdmVOdWxsQ2hpbGRyZW4oY2hpbGRyZW4pO1xuXG4gICAgICB2YXIgc3R5bGUgPSBfb2JqZWN0U3ByZWFkMih7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleDogMSxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgTW96VXNlclNlbGVjdDogJ3RleHQnLFxuICAgICAgICBXZWJraXRVc2VyU2VsZWN0OiAndGV4dCcsXG4gICAgICAgIG1zVXNlclNlbGVjdDogJ3RleHQnLFxuICAgICAgICB1c2VyU2VsZWN0OiAndGV4dCdcbiAgICAgIH0sIHN0eWxlUHJvcHMpO1xuXG4gICAgICBpZiAoc3BsaXQgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihzdHlsZSwge1xuICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgcmlnaHQ6IDBcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKHN0eWxlLCB7XG4gICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2xhc3NlcyA9IFsnU3BsaXRQYW5lJywgY2xhc3NOYW1lLCBzcGxpdCwgZGlzYWJsZWRDbGFzc107XG5cbiAgICAgIHZhciBwYW5lMVN0eWxlID0gX29iamVjdFNwcmVhZDIoe30sIHBhbmVTdHlsZSwge30sIHBhbmUxU3R5bGVQcm9wcyk7XG5cbiAgICAgIHZhciBwYW5lMlN0eWxlID0gX29iamVjdFNwcmVhZDIoe30sIHBhbmVTdHlsZSwge30sIHBhbmUyU3R5bGVQcm9wcyk7XG5cbiAgICAgIHZhciBwYW5lMUNsYXNzZXMgPSBbJ1BhbmUxJywgcGFuZUNsYXNzTmFtZSwgcGFuZTFDbGFzc05hbWVdLmpvaW4oJyAnKTtcbiAgICAgIHZhciBwYW5lMkNsYXNzZXMgPSBbJ1BhbmUyJywgcGFuZUNsYXNzTmFtZSwgcGFuZTJDbGFzc05hbWVdLmpvaW4oJyAnKTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLmpvaW4oJyAnKSxcbiAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYobm9kZSkge1xuICAgICAgICAgIF90aGlzMi5zcGxpdFBhbmUgPSBub2RlO1xuICAgICAgICB9LFxuICAgICAgICBzdHlsZTogc3R5bGVcbiAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFuZSwge1xuICAgICAgICBjbGFzc05hbWU6IHBhbmUxQ2xhc3NlcyxcbiAgICAgICAga2V5OiBcInBhbmUxXCIsXG4gICAgICAgIGVsZVJlZjogZnVuY3Rpb24gZWxlUmVmKG5vZGUpIHtcbiAgICAgICAgICBfdGhpczIucGFuZTEgPSBub2RlO1xuICAgICAgICB9LFxuICAgICAgICBzaXplOiBwYW5lMVNpemUsXG4gICAgICAgIHNpemUyOiBwYW5lMlNpemUsXG4gICAgICAgIHNwbGl0OiBzcGxpdCxcbiAgICAgICAgc3R5bGU6IHBhbmUxU3R5bGVcbiAgICAgIH0sIG5vdE51bGxDaGlsZHJlblswXSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVzaXplciwge1xuICAgICAgICBjbGFzc05hbWU6IGRpc2FibGVkQ2xhc3MsXG4gICAgICAgIG9uQ2xpY2s6IG9uUmVzaXplckNsaWNrLFxuICAgICAgICBvbkRvdWJsZUNsaWNrOiBvblJlc2l6ZXJEb3VibGVDbGljayxcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMub25Nb3VzZURvd24sXG4gICAgICAgIG9uVG91Y2hTdGFydDogdGhpcy5vblRvdWNoU3RhcnQsXG4gICAgICAgIG9uVG91Y2hFbmQ6IHRoaXMub25Nb3VzZVVwLFxuICAgICAgICBrZXk6IFwicmVzaXplclwiLFxuICAgICAgICByZXNpemVyQ2xhc3NOYW1lOiByZXNpemVyQ2xhc3NOYW1lc0luY2x1ZGluZ0RlZmF1bHQsXG4gICAgICAgIHNwbGl0OiBzcGxpdCxcbiAgICAgICAgc3R5bGU6IHJlc2l6ZXJTdHlsZSB8fCB7fVxuICAgICAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFuZSwge1xuICAgICAgICBjbGFzc05hbWU6IHBhbmUyQ2xhc3NlcyxcbiAgICAgICAga2V5OiBcInBhbmUyXCIsXG4gICAgICAgIGVsZVJlZjogZnVuY3Rpb24gZWxlUmVmKG5vZGUpIHtcbiAgICAgICAgICBfdGhpczIucGFuZTIgPSBub2RlO1xuICAgICAgICB9LFxuICAgICAgICBzaXplOiBwYW5lMlNpemUsXG4gICAgICAgIHNpemUyOiBwYW5lMVNpemUsXG4gICAgICAgIHNwbGl0OiBzcGxpdCxcbiAgICAgICAgc3R5bGU6IHBhbmUyU3R5bGVcbiAgICAgIH0sIG5vdE51bGxDaGlsZHJlblsxXSkpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgIHJldHVybiBTcGxpdFBhbmUuZ2V0U2l6ZVVwZGF0ZShuZXh0UHJvcHMsIHByZXZTdGF0ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFNpemVVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2l6ZVVwZGF0ZShwcm9wcywgc3RhdGUpIHtcbiAgICAgIHZhciBuZXdTdGF0ZSA9IHt9O1xuICAgICAgdmFyIGluc3RhbmNlUHJvcHMgPSBzdGF0ZS5pbnN0YW5jZVByb3BzO1xuXG4gICAgICBpZiAoaW5zdGFuY2VQcm9wcy5zaXplID09PSBwcm9wcy5zaXplICYmIHByb3BzLnNpemUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgICB9XG5cbiAgICAgIHZhciBuZXdTaXplID0gcHJvcHMuc2l6ZSAhPT0gdW5kZWZpbmVkID8gcHJvcHMuc2l6ZSA6IGdldERlZmF1bHRTaXplKHByb3BzLmRlZmF1bHRTaXplLCBwcm9wcy5taW5TaXplLCBwcm9wcy5tYXhTaXplLCBzdGF0ZS5kcmFnZ2VkU2l6ZSk7XG5cbiAgICAgIGlmIChwcm9wcy5zaXplICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbmV3U3RhdGUuZHJhZ2dlZFNpemUgPSBuZXdTaXplO1xuICAgICAgfVxuXG4gICAgICB2YXIgaXNQYW5lbDFQcmltYXJ5ID0gcHJvcHMucHJpbWFyeSA9PT0gJ2ZpcnN0JztcbiAgICAgIG5ld1N0YXRlW2lzUGFuZWwxUHJpbWFyeSA/ICdwYW5lMVNpemUnIDogJ3BhbmUyU2l6ZSddID0gbmV3U2l6ZTtcbiAgICAgIG5ld1N0YXRlW2lzUGFuZWwxUHJpbWFyeSA/ICdwYW5lMlNpemUnIDogJ3BhbmUxU2l6ZSddID0gdW5kZWZpbmVkO1xuICAgICAgbmV3U3RhdGUuaW5zdGFuY2VQcm9wcyA9IHtcbiAgICAgICAgc2l6ZTogcHJvcHMuc2l6ZVxuICAgICAgfTtcbiAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3BsaXRQYW5lO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5TcGxpdFBhbmUucHJvcFR5cGVzID0ge1xuICBhbGxvd1Jlc2l6ZTogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSkuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwcmltYXJ5OiBQcm9wVHlwZXMub25lT2YoWydmaXJzdCcsICdzZWNvbmQnXSksXG4gIG1pblNpemU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgbWF4U2l6ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tdW51c2VkLXByb3AtdHlwZXNcbiAgZGVmYXVsdFNpemU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICBzcGxpdDogUHJvcFR5cGVzLm9uZU9mKFsndmVydGljYWwnLCAnaG9yaXpvbnRhbCddKSxcbiAgb25EcmFnU3RhcnRlZDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRHJhZ0ZpbmlzaGVkOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblJlc2l6ZXJDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uUmVzaXplckRvdWJsZUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgc3R5bGU6IHN0eWxlUHJvcFR5cGUsXG4gIHJlc2l6ZXJTdHlsZTogc3R5bGVQcm9wVHlwZSxcbiAgcGFuZUNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGFuZTFDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBhbmUyQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwYW5lU3R5bGU6IHN0eWxlUHJvcFR5cGUsXG4gIHBhbmUxU3R5bGU6IHN0eWxlUHJvcFR5cGUsXG4gIHBhbmUyU3R5bGU6IHN0eWxlUHJvcFR5cGUsXG4gIHJlc2l6ZXJDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0ZXA6IFByb3BUeXBlcy5udW1iZXJcbn07XG5TcGxpdFBhbmUuZGVmYXVsdFByb3BzID0ge1xuICBhbGxvd1Jlc2l6ZTogdHJ1ZSxcbiAgbWluU2l6ZTogNTAsXG4gIHByaW1hcnk6ICdmaXJzdCcsXG4gIHNwbGl0OiAndmVydGljYWwnLFxuICBwYW5lQ2xhc3NOYW1lOiAnJyxcbiAgcGFuZTFDbGFzc05hbWU6ICcnLFxuICBwYW5lMkNsYXNzTmFtZTogJydcbn07XG5wb2x5ZmlsbChTcGxpdFBhbmUpO1xuXG5leHBvcnQgZGVmYXVsdCBTcGxpdFBhbmU7XG5leHBvcnQgeyBQYW5lIH07XG4iXX0=