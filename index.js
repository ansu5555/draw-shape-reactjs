"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rectangle = exports.Circle = exports.PolyLine = exports.SteppedLine = exports.Line = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var baseStyle = {
  position: 'absolute',
  zIndex: 10,
  backgroundColor: '#000000'
};

function drawLine(from, to, lineWeight, componentStyle) {
  var m = (to[1] - from[1]) / (to[0] - from[0]);
  var line = [];

  if (from[0] < to[0]) {
    for (var x = from[0]; x <= to[0]; x += 0.1) {
      var y = m * (x - to[0]) + to[1];

      var pixel = _objectSpread({}, componentStyle, {
        left: "".concat(x, "px"),
        top: "".concat(y, "px"),
        width: "".concat(lineWeight, "px"),
        height: "".concat(lineWeight, "px")
      });

      line.push(_react["default"].createElement("div", {
        style: pixel
      }));
    }
  } else if (from[0] > to[0]) {
    for (var _x = from[0]; _x >= to[0]; _x -= 0.1) {
      var _y = m * (_x - to[0]) + to[1];

      var _pixel = _objectSpread({}, componentStyle, {
        left: "".concat(_x, "px"),
        top: "".concat(_y, "px"),
        width: "".concat(lineWeight, "px"),
        height: "".concat(lineWeight, "px")
      });

      line.push(_react["default"].createElement("div", {
        style: _pixel
      }));
    }
  } else {
    if (from[1] < to[1]) {
      for (var _y2 = from[1]; _y2 <= to[1]; _y2 += 0.1) {
        var _x2 = from[0];

        var _pixel2 = _objectSpread({}, componentStyle, {
          left: "".concat(_x2, "px"),
          top: "".concat(_y2, "px"),
          width: "".concat(lineWeight, "px"),
          height: "".concat(lineWeight, "px")
        });

        line.push(_react["default"].createElement("div", {
          style: _pixel2
        }));
      }
    } else if (from[1] > to[1]) {
      for (var _y3 = from[1]; _y3 >= to[1]; _y3 -= 0.1) {
        var _x3 = from[0];

        var _pixel3 = _objectSpread({}, componentStyle, {
          left: "".concat(_x3, "px"),
          top: "".concat(_y3, "px"),
          width: "".concat(lineWeight, "px"),
          height: "".concat(lineWeight, "px")
        });

        line.push(_react["default"].createElement("div", {
          style: _pixel3
        }));
      }
    } else {
      var _x4 = from[0];
      var _y4 = from[1];

      var _pixel4 = _objectSpread({}, componentStyle, {
        left: "".concat(_x4, "px"),
        top: "".concat(_y4, "px"),
        width: "".concat(lineWeight, "px"),
        height: "".concat(lineWeight, "px")
      });

      line.push(_react["default"].createElement("div", {
        style: _pixel4
      }));
    }
  }

  return line;
}

var Line =
/*#__PURE__*/
function (_Component) {
  _inherits(Line, _Component);

  function Line() {
    _classCallCheck(this, Line);

    return _possibleConstructorReturn(this, _getPrototypeOf(Line).apply(this, arguments));
  }

  _createClass(Line, [{
    key: "render",
    value: function render() {
      var componentStyle = _objectSpread({}, baseStyle);

      if (this.props.position === 'fixed') {
        componentStyle.position = this.props.position;
      }

      var from;
      this.props.from ? from = this.props.from : from = [0, 0];
      var to;
      this.props.to ? to = this.props.to : to = [0, 0];
      var lineWeight;
      this.props.lineWeight ? lineWeight = this.props.lineWeight : lineWeight = 3;

      if (this.props.color) {
        componentStyle.backgroundColor = this.props.color;
      }

      if (this.props.zIndex) {
        componentStyle.zIndex = this.props.zIndex;
      }

      var line = drawLine(from, to, lineWeight, componentStyle);
      return _react["default"].createElement("div", null, line);
    }
  }]);

  return Line;
}(_react.Component);

exports.Line = Line;

var SteppedLine =
/*#__PURE__*/
function (_Component2) {
  _inherits(SteppedLine, _Component2);

  function SteppedLine() {
    _classCallCheck(this, SteppedLine);

    return _possibleConstructorReturn(this, _getPrototypeOf(SteppedLine).apply(this, arguments));
  }

  _createClass(SteppedLine, [{
    key: "render",
    value: function render() {
      var componentStyle = _objectSpread({}, baseStyle);

      if (this.props.position === 'fixed') {
        componentStyle.position = this.props.position;
      }

      var from;
      this.props.from ? from = this.props.from : from = [0, 0];
      var to;
      this.props.to ? to = this.props.to : to = [0, 0];
      var lineWeight;
      this.props.lineWeight ? lineWeight = this.props.lineWeight : lineWeight = 3;

      if (this.props.color) {
        componentStyle.backgroundColor = this.props.color;
      }

      if (this.props.zIndex) {
        componentStyle.zIndex = this.props.zIndex;
      }

      var _from = from,
          _from2 = _slicedToArray(_from, 2),
          x1 = _from2[0],
          y1 = _from2[1];

      var _to = to,
          _to2 = _slicedToArray(_to, 2),
          x2 = _to2[0],
          y2 = _to2[1];

      var midx = x1 + (x2 - x1) / 2;

      var line1 = _objectSpread({}, componentStyle, {
        left: "".concat(midx >= x1 ? x1 : midx, "px"),
        top: "".concat(y1, "px"),
        width: "".concat(Math.abs((x2 - x1) / 2), "px"),
        height: "".concat(lineWeight, "px")
      });

      var line2 = _objectSpread({}, componentStyle, {
        left: "".concat(midx, "px"),
        top: "".concat(y2 >= y1 ? y1 : y2, "px"),
        width: "".concat(lineWeight, "px"),
        height: "".concat(y2 - y1 === 0 ? 0 : Math.abs(y2 - y1) + lineWeight, "px")
      });

      var line3 = _objectSpread({}, componentStyle, {
        left: "".concat(x2 >= midx ? midx : x2, "px"),
        top: "".concat(y2, "px"),
        width: "".concat(Math.abs((x2 - x1) / 2), "px"),
        height: "".concat(lineWeight, "px")
      });

      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
        style: line1
      }), _react["default"].createElement("div", {
        style: line2
      }), _react["default"].createElement("div", {
        style: line3
      }));
    }
  }]);

  return SteppedLine;
}(_react.Component);

exports.SteppedLine = SteppedLine;

var PolyLine =
/*#__PURE__*/
function (_Component3) {
  _inherits(PolyLine, _Component3);

  function PolyLine() {
    _classCallCheck(this, PolyLine);

    return _possibleConstructorReturn(this, _getPrototypeOf(PolyLine).apply(this, arguments));
  }

  _createClass(PolyLine, [{
    key: "render",
    value: function render() {
      var componentStyle = _objectSpread({}, baseStyle);

      if (this.props.position === 'fixed') {
        componentStyle.position = this.props.position;
      }

      var lines = [];
      var points;

      if (this.props.points) {
        var from = this.props.points.slice(0, -1);
        var to = this.props.points.slice(1);
        points = from.map(function (_, i) {
          return [from[i], to[i]];
        });
      } else {
        points = [[0, 0], [0, 0]];
      }

      var lineWeight;
      this.props.lineWeight ? lineWeight = this.props.lineWeight : lineWeight = 3;

      if (this.props.color) {
        componentStyle.backgroundColor = this.props.color;
      }

      if (this.props.zIndex) {
        componentStyle.zIndex = this.props.zIndex;
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = points[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _slicedToArray(_step.value, 2),
              _from3 = _step$value[0],
              _to3 = _step$value[1];

          lines.push.apply(lines, _toConsumableArray(drawLine(_from3, _to3, lineWeight, componentStyle)));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return _react["default"].createElement("div", null, lines);
    }
  }]);

  return PolyLine;
}(_react.Component);

exports.PolyLine = PolyLine;

var Circle =
/*#__PURE__*/
function (_Component4) {
  _inherits(Circle, _Component4);

  function Circle() {
    _classCallCheck(this, Circle);

    return _possibleConstructorReturn(this, _getPrototypeOf(Circle).apply(this, arguments));
  }

  _createClass(Circle, [{
    key: "render",
    value: function render() {
      var componentStyle = _objectSpread({}, baseStyle);

      if (this.props.position === 'fixed') {
        componentStyle.position = this.props.position;
      }

      var circle = [];
      var center;
      this.props.center ? center = this.props.center : center = [0, 0];
      var radius;
      this.props.radius ? radius = this.props.radius : radius = 1;
      var lineWeight;
      this.props.lineWeight ? lineWeight = this.props.lineWeight : lineWeight = 3;

      if (this.props.color) {
        componentStyle.backgroundColor = this.props.color;
      }

      if (this.props.zIndex) {
        componentStyle.zIndex = this.props.zIndex;
      }

      for (var x = center[0] - radius; x <= center[0] + radius; x += 0.01) {
        var yb = center[1] + Math.sqrt(Math.pow(radius, 2) - Math.pow(x - center[0], 2));
        var yt = center[1] - Math.sqrt(Math.pow(radius, 2) - Math.pow(x - center[0], 2));

        var pixelB = _objectSpread({}, componentStyle, {
          left: "".concat(x, "px"),
          top: "".concat(yb, "px"),
          width: "".concat(lineWeight, "px"),
          height: "".concat(lineWeight, "px")
        });

        var pixelT = _objectSpread({}, componentStyle, {
          left: "".concat(x, "px"),
          top: "".concat(yt, "px"),
          width: "".concat(lineWeight, "px"),
          height: "".concat(lineWeight, "px")
        });

        circle.push(_react["default"].createElement("div", {
          style: pixelB
        }));
        circle.push(_react["default"].createElement("div", {
          style: pixelT
        }));
      }

      return _react["default"].createElement("div", null, circle);
    }
  }]);

  return Circle;
}(_react.Component);

exports.Circle = Circle;

var Rectangle =
/*#__PURE__*/
function (_Component5) {
  _inherits(Rectangle, _Component5);

  function Rectangle() {
    _classCallCheck(this, Rectangle);

    return _possibleConstructorReturn(this, _getPrototypeOf(Rectangle).apply(this, arguments));
  }

  _createClass(Rectangle, [{
    key: "render",
    value: function render() {
      var componentStyle = _objectSpread({}, baseStyle);

      if (this.props.position === 'fixed') {
        componentStyle.position = this.props.position;
      }

      var rectangle = [];
      var corner;
      this.props.corner ? corner = this.props.corner : corner = [0, 0];
      var height;
      this.props.height ? height = this.props.height : height = 1;
      var width;
      this.props.width ? width = this.props.width : width = 1;
      var lineWeight;
      this.props.lineWeight ? lineWeight = this.props.lineWeight : lineWeight = 3;

      if (this.props.color) {
        componentStyle.backgroundColor = this.props.color;
      }

      if (this.props.zIndex) {
        componentStyle.zIndex = this.props.zIndex;
      }

      var corners = [[corner[0], corner[1]], [corner[0] + width, corner[1]], [corner[0] + width, corner[1] + height], [corner[0], corner[1] + height], [corner[0], corner[1]]];
      var from = corners.slice(0, -1);
      var to = corners.slice(1);
      var points = from.map(function (_, i) {
        return [from[i], to[i]];
      });
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = points[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _step2$value = _slicedToArray(_step2.value, 2),
              _from4 = _step2$value[0],
              _to4 = _step2$value[1];

          rectangle.push.apply(rectangle, _toConsumableArray(drawLine(_from4, _to4, lineWeight, componentStyle)));
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return _react["default"].createElement("div", null, rectangle);
    }
  }]);

  return Rectangle;
}(_react.Component);

exports.Rectangle = Rectangle;
