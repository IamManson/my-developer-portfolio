exports.id = 85;
exports.ids = [85];
exports.modules = {

/***/ 728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MyLayout)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "react-bootstrap/Navbar"
var Navbar_ = __webpack_require__(990);
var Navbar_default = /*#__PURE__*/__webpack_require__.n(Navbar_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/Header.js

// Import the Link API to support client-side navigation
 // Import Navbar component from React-Bootstrap

 // Import JSXStyle

 // Link styling



const linkStyle = {
  marginRight: 20
}; // Navbar component

const Header = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  className: "jsx-145126434",
  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((Navbar_default()), {
    bg: "light",
    className: "navbar",
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        style: linkStyle,
        className: "jsx-145126434",
        children: "Home"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/about",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        style: linkStyle,
        className: "jsx-145126434",
        children: "About"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/projects",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        style: linkStyle,
        className: "jsx-145126434",
        children: "Projects"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/contact",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        style: linkStyle,
        className: "jsx-145126434",
        children: "Contact Me"
      })
    })]
  }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
    id: "145126434",
    children: ["a.jsx-145126434{color:black;}"]
  })]
});

/* harmony default export */ const components_Header = (Header);
;// CONCATENATED MODULE: ./components/MyLayout.js
// Import the Link API to support client-side navigation
 // Importing next/react-bootstrap components





const layoutStyle = {
  margin: 20,
  padding: 20
}; // Layout

const Layout = props => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
    children: /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "stylesheet",
      href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
      integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
      crossorigin: "anonymous"
    })
  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    style: layoutStyle,
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Header, {}), props.children]
  })]
});

/* harmony default export */ const MyLayout = (Layout);

/***/ }),

/***/ 431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;