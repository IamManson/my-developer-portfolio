"use strict";
exports.id = 523;
exports.ids = [523];
exports.modules = {

/***/ 6523:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(5318);

__webpack_unused_export__ = true;
exports.ZP = __webpack_unused_export__ = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(7154));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(7316));

var _classnames = _interopRequireDefault(__webpack_require__(4036));

var _react = _interopRequireDefault(__webpack_require__(7294));

var _propTypes = _interopRequireDefault(__webpack_require__(5697));

var _ThemeProvider = __webpack_require__(3349);

var _excluded = ["bsPrefix", "className", "fluid", "rounded", "roundedCircle", "thumbnail"];
var propTypes = {
  /**
   * @default 'img'
   */
  bsPrefix: _propTypes.default.string,

  /**
   * Sets image as fluid image.
   */
  fluid: _propTypes.default.bool,

  /**
   * Sets image shape as rounded.
   */
  rounded: _propTypes.default.bool,

  /**
   * Sets image shape as circle.
   */
  roundedCircle: _propTypes.default.bool,

  /**
   * Sets image shape as thumbnail.
   */
  thumbnail: _propTypes.default.bool
};
__webpack_unused_export__ = propTypes;
var defaultProps = {
  fluid: false,
  rounded: false,
  roundedCircle: false,
  thumbnail: false
};

var Image = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      fluid = _ref.fluid,
      rounded = _ref.rounded,
      roundedCircle = _ref.roundedCircle,
      thumbnail = _ref.thumbnail,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'img');
  var classes = (0, _classnames.default)(fluid && bsPrefix + "-fluid", rounded && "rounded", roundedCircle && "rounded-circle", thumbnail && bsPrefix + "-thumbnail");
  return /*#__PURE__*/_react.default.createElement("img", (0, _extends2.default)({
    // eslint-disable-line jsx-a11y/alt-text
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, classes)
  }));
});

Image.displayName = 'Image';
Image.defaultProps = defaultProps;
var _default = Image;
exports.ZP = _default;

/***/ })

};
;