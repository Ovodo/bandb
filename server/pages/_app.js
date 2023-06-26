(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1137:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8866);
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_gi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4751);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8098);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1946);
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_ti__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6197);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3365);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _DrawingComponent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5587);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_11__, _DrawingComponent__WEBPACK_IMPORTED_MODULE_13__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_11__, _DrawingComponent__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














// import { ethers } from 'ethers';


const Navbar = ({ children  })=>{
    let sm =  false && 0;
    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [defaultAccount, setDefaultAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [showmenu, setShowmenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch)();
    const controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_11__.useAnimation)();
    const connectWallet = async ()=>{
        // console.log('requesting accounts');
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts"
                });
                setDefaultAccount(accounts[0]);
                dispatch(updateAddress(accounts[0]));
            } catch (error) {
                console.log("err:" + error);
            }
        } else {
            console.log("metamask not detected");
        }
    };
    let primary = "#25092c";
    // let secondary="#9be8a1"
    const toggleMenu = ()=>{
        setShowmenu(!showmenu);
    };
    const hideMenu = ()=>{
        setShowmenu(false);
    };
    const route = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const imageLoader = ({ src , width , quality  })=>{
        return `${src}?w=${width}&q=${quality || 75}`;
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                className: "navbar  sticky top-0  ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("menu", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.ul, {
                            className: "nav-menu md:w-[45vw]",
                            // id={showmenu ? "mobile" : "hide"}
                            whileHover: controls.stop,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.li, {
                                        whileHover: {
                                            scale: 1.2,
                                            y: -5
                                        },
                                        whileTap: {
                                            scale: 0.8
                                        },
                                        drag: true,
                                        dragSnapToOrigin: true,
                                        onHoverStart: (e, i)=>{
                                            console.log(e, i);
                                        },
                                        className: "text-[#07F307]",
                                        transition: {
                                            type: "spring",
                                            stiffness: 500,
                                            duration: 0.1
                                        },
                                        onClick: ()=>{
                                            hideMenu;
                                        },
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.li, {
                                        whileHover: {
                                            scale: 1.2,
                                            y: -5
                                        },
                                        whileTap: {
                                            scale: 0.8
                                        },
                                        drag: true,
                                        dragSnapToOrigin: true,
                                        onHoverStart: (e, i)=>{
                                            console.log(e, i);
                                        },
                                        transition: {
                                            type: "spring",
                                            stiffness: 500,
                                            duration: 0.1
                                        },
                                        onClick: ()=>{
                                            hideMenu;
                                        },
                                        children: "Cryptocurrencies"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.li, {
                                        whileHover: {
                                            scale: 1.2,
                                            y: -5
                                        },
                                        whileTap: {
                                            scale: 0.8
                                        },
                                        drag: true,
                                        dragSnapToOrigin: true,
                                        onHoverStart: (e, i)=>{
                                            console.log(e, i);
                                        },
                                        transition: {
                                            type: "spring",
                                            stiffness: 500,
                                            duration: 0.1
                                        },
                                        onClick: ()=>{
                                            hideMenu;
                                        },
                                        children: "Learn Crypto"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "icon flex border-green-500  items-center"
                    })
                ]
            }),
            children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ createEmotionCache)
});

;// CONCATENATED MODULE: external "@emotion/cache"
const cache_namespaceObject = require("@emotion/cache");
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_namespaceObject);
;// CONCATENATED MODULE: ./config/createEmotionCache.jsx

function createEmotionCache() {
    return cache_default()({
        key: "css",
        prepend: true
    });
}


/***/ }),

/***/ 1396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ config_theme)
});

// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: external "@mui/material/colors"
const colors_namespaceObject = require("@mui/material/colors");
;// CONCATENATED MODULE: ./config/theme.jsx


// Create a theme instance.
const theme = (0,styles_.createTheme)({
    palette: {
        primary: {
            main: "#556cd6"
        },
        secondary: {
            main: "#19857b"
        },
        error: {
            main: colors_namespaceObject.red.A400
        }
    }
});
/* harmony default export */ const config_theme = (theme);


/***/ }),

/***/ 6004:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86);
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5800);
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4960);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1396);
/* harmony import */ var _config_createEmotionCache__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8220);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8201);
/* harmony import */ var _react_oauth_google__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6999);
/* harmony import */ var _react_oauth_google__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_react_oauth_google__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Components_navbar_components_Navbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1137);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__, _Components_navbar_components_Navbar__WEBPACK_IMPORTED_MODULE_13__]);
([_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__, _Components_navbar_components_Navbar__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__.config.autoAddCss = false;










// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = (0,_config_createEmotionCache__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
function App({ Component , ...rest }) {
    const { store , props  } = _store_store__WEBPACK_IMPORTED_MODULE_10__/* .wrapper.useWrappedStore */ .Y.useWrappedStore(rest);
    const { emotionCache =clientSideEmotionCache , pageProps  } = props;
    const Layout = ({ Component , pageProps  })=>{
        if (Component.getLayout) {
            return Component.getLayout(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            }));
        } else {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            });
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_oauth_google__WEBPACK_IMPORTED_MODULE_11__.GoogleOAuthProvider, {
        clientId: "704139097438-0r081l07jdsiru0ktse80r813pm6mlm3.apps.googleusercontent.com",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_12__.Provider, {
            store: store,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.CacheProvider, {
                value: emotionCache,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "viewport",
                            content: "initial-scale=1, width=device-width"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {
                        theme: _config_theme__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default()), {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_navbar_components_Navbar__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Layout, {
                                    Component: Component,
                                    pageProps: pageProps
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ wrapper)
});

;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
;// CONCATENATED MODULE: ./store/slice-reducers/Formslice.js

const initialState = {
    file: null,
    name: "",
    image: null,
    keywords: [
        "voski",
        "dizzle",
        "shalewa"
    ]
};
const formSlice = (0,toolkit_namespaceObject.createSlice)({
    name: "form",
    initialState,
    reducers: {
        fileinput (state, action) {
            state[action.payload.name] = action.payload.value;
        },
        changeinput (state, action) {
            state.name = action.payload;
        },
        addtag (state, action) {
            state.keywords.push(action.payload);
        },
        removetag (state, action) {
            state.keywords = state.keywords.filter((el, i)=>i !== action.payload);
        }
    }
});
const { changeinput , addtag , removetag , fileinput  } = formSlice.actions;
/* harmony default export */ const Formslice = (formSlice.reducer);

;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
;// CONCATENATED MODULE: ./store/store.js


// import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist";



// import { useDispatch, useSelector } from 'react-redux'
// const persistConfig = {
//   key: "root",
//   storage,
// };
const allReducers = (0,toolkit_namespaceObject.combineReducers)({
    form: Formslice
});
// const persistedReducer = persistReducer(persistConfig, allReducers);
const store = (0,toolkit_namespaceObject.configureStore)({
    reducer: allReducers,
    middleware: [
        (external_redux_thunk_default())
    ]
});
// export const persistor = persistStore(store);
const makeStore = ()=>store;
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore);


/***/ }),

/***/ 5800:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 2805:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react");

/***/ }),

/***/ 3365:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 4960:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ 8442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 6999:
/***/ ((module) => {

"use strict";
module.exports = require("@react-oauth/google");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9847:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ai");

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ 8866:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/gi");

/***/ }),

/***/ 4751:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/io");

/***/ }),

/***/ 8098:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ri");

/***/ }),

/***/ 1946:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ti");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 86:
/***/ ((module) => {

"use strict";
module.exports = import("@fortawesome/fontawesome-svg-core");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,61,587], () => (__webpack_exec__(6004)));
module.exports = __webpack_exports__;

})();