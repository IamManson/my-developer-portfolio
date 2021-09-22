"use strict";
exports.id = 989;
exports.ids = [989];
exports.modules = {

/***/ 1266:
/***/ ((module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(5318);

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(7154));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(7316));

var _classnames = _interopRequireDefault(__webpack_require__(4036));

var _react = _interopRequireDefault(__webpack_require__(7294));

var _ThemeProvider = __webpack_require__(3349);

var _excluded = ["bsPrefix", "className", "as"];
var DEVICE_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'];

var Col = /*#__PURE__*/_react.default.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'col');
  var spans = [];
  var classes = [];
  DEVICE_SIZES.forEach(function (brkPoint) {
    var propValue = props[brkPoint];
    delete props[brkPoint];
    var span;
    var offset;
    var order;

    if (typeof propValue === 'object' && propValue != null) {
      var _propValue$span = propValue.span;
      span = _propValue$span === void 0 ? true : _propValue$span;
      offset = propValue.offset;
      order = propValue.order;
    } else {
      span = propValue;
    }

    var infix = brkPoint !== 'xs' ? "-" + brkPoint : '';
    if (span) spans.push(span === true ? "" + prefix + infix : "" + prefix + infix + "-" + span);
    if (order != null) classes.push("order" + infix + "-" + order);
    if (offset != null) classes.push("offset" + infix + "-" + offset);
  });

  if (!spans.length) {
    spans.push(prefix); // plain 'col'
  }

  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: _classnames.default.apply(void 0, [className].concat(spans, classes))
  }));
});

Col.displayName = 'Col';
var _default = Col;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ 8269:
/***/ ((module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(5318);

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(7154));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(7316));

var _classnames = _interopRequireDefault(__webpack_require__(4036));

var _react = _interopRequireDefault(__webpack_require__(7294));

var _ThemeProvider = __webpack_require__(3349);

var _excluded = ["bsPrefix", "className", "noGutters", "as"];
var DEVICE_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'];
var defaultProps = {
  noGutters: false
};

var Row = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      noGutters = _ref.noGutters,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  var decoratedBsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'row');
  var sizePrefix = decoratedBsPrefix + "-cols";
  var classes = [];
  DEVICE_SIZES.forEach(function (brkPoint) {
    var propValue = props[brkPoint];
    delete props[brkPoint];
    var cols;

    if (propValue != null && typeof propValue === 'object') {
      cols = propValue.cols;
    } else {
      cols = propValue;
    }

    var infix = brkPoint !== 'xs' ? "-" + brkPoint : '';
    if (cols != null) classes.push("" + sizePrefix + infix + "-" + cols);
  });
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: _classnames.default.apply(void 0, [className, decoratedBsPrefix, noGutters && 'no-gutters'].concat(classes))
  }));
});

Row.displayName = 'Row';
Row.defaultProps = defaultProps;
var _default = Row;
exports.default = _default;
module.exports = exports["default"];

/***/ })

};
;