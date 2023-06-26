"use strict";
exports.id = 587;
exports.ids = [587];
exports.modules = {

/***/ 5587:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const DrawingComponent = ()=>{
    const size = 20; // Size of the square
    const angle = 45; // Angle in degrees for the slanted angle
    return /*#__PURE__*/ _jsxs(motion.svg, {
        initial: {
            rotate: 0
        },
        animate: {
            rotate: 720
        },
        transition: {
            duration: 2,
            repeatDelay: 2,
            repeat: 5
        },
        className: "absolute top-[5vh] right-[5vw]",
        width: size,
        height: size,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: `M 0 0 L ${size} 0 L ${size} ${size} L ${size - size * Math.tan(angle * Math.PI / 180)} ${size} Z`,
                fill: "#9A031E"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: `M ${size} ${size} L ${size} ${size - size * Math.tan(angle * Math.PI / 180)} L ${size - size * Math.tan(angle * Math.PI / 180)} ${size} Z`,
                fill: "#07f307"
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (DrawingComponent))); // const DrawingComponent = () => {
 //   const angle = 45; // Angle in degrees
 //   const length = 100; // Length of the line
 //   // Calculate the end coordinates of the line
 //   const x1 = 0;
 //   const y1 = 0;
 //   const x2 = length * Math.cos((angle * Math.PI) / 180);
 //   const y2 = length * Math.sin((angle * Math.PI) / 180);
 //   return (
 //     <svg width='200' height='200'>
 //       <line x1={x1} y1={y1} x2={x2} y2={y2} stroke='black' />
 //     </svg>
 //   );
 // };
 // export default DrawingComponent;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;