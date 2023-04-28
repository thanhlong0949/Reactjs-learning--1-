"use strict";
exports.id = 232;
exports.ids = [232];
exports.modules = {

/***/ 232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// HEIGHT NAVBAR
const HEIGHT_NAVBAR = 55;
// NAME
const STORE_NAME = "state";
// NETWORK
const NETWORK_CONFIG = {
    HOST: process.env.NEXT_PUBLIC_APP_URL,
    API_BASE_URL: process.env.NEXT_PUBLIC_APP_URL + "/api",
    BASE_URL: process.env.NEXT_PUBLIC_WEB_URL,
    TIMEOUT: 30000,
    RETRY: false,
    DISPLAY_ERROR: process.env.NEXT_PUBLIC_DISPLAY_ERROR === "true",
    DISPLAY_SUCCESS: false,
    TYPE_SUCCESS: "default",
    USE_TOKEN: true,
    WITH_METADATA: false
};
// PATHNAME
const PATHNAME = {
    HOME: "/",
    LOGIN: "/login"
};
// LAYOUT
const LAYOUT_CONFIG = {
    useSidebar: true,
    useNavbar: true,
    useFooter: true,
    useBottomNavigator: true,
    minWidthWindow: 1024
};
// LANGUAGE
const LANGUAGE = {
    DEFAULT: "vi"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    STORE_NAME,
    NETWORK_CONFIG,
    PATHNAME,
    LAYOUT_CONFIG,
    LANGUAGE,
    HEIGHT_NAVBAR
});


/***/ })

};
;