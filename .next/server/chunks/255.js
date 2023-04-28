"use strict";
exports.id = 255;
exports.ids = [255];
exports.modules = {

/***/ 2255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Fetcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(264);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4556);


const path = {
    getUser: "/auth/get-user-info-by-email",
    login: "/auth/login",
    register: "/auth/register-user",
    updateUser: "/auth/update-user-infor",
    changePass: "/auth/change_password",
    getMoney: "/wallet/view-money-in-wallet",
    getAllUser: "/auth/get-all-user"
};
function register(body) {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: path.register,
        method: "post",
        data: body
    });
}
function login(body) {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: path.login,
        method: "post",
        data: body
    }, {
        displayError: true
    });
}
function sendVerifyCode(param) {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: "/auth/send-verificationCodes",
        method: "put",
        params: param
    }, {
        displayError: true
    });
}
function forgotPassword(param) {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: `/auth/forgot-password`,
        method: "put",
        data: param
    }, {
        displayError: true
    });
}
function loginSocial(body) {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: "/auth/login_google",
        method: "post",
        data: body
    }, {
        displayError: true
    });
}
function getUser() {
    var ref, ref1;
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: `${path.getUser}/${(ref = _redux_store__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getState */ .Z.getState()) === null || ref === void 0 ? void 0 : (ref1 = ref.user) === null || ref1 === void 0 ? void 0 : ref1.id}`,
        method: "get"
    });
}
function getMoneyUser(params) {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: `${path.getMoney}`,
        method: "get",
        params: params
    });
}
function rechargeMoney(body) {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: "/wallet/recharge-into-wallet",
        method: "post",
        params: body
    }, {
        displayError: true
    });
}
function createBookNoti(body) {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: "/book/create-book-to-get-noti",
        method: "post",
        params: body
    }, {
        displayError: true
    });
}
function getUserInfoSocial(params) {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: `/auth/get-user-info-by-email`,
        method: "get",
        params: params
    });
}
function getTopUser() {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: `/auth/get_users_has_highest_order_complete`,
        method: "get"
    });
}
function getPopularGenre() {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: `/subcategory/get-publication-subcategory`,
        method: "get"
    });
}
function getTopPosts() {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: `/post/get-all-new-post`,
        method: "get"
    });
}
function getHistoryPayment(params) {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: `/transaction/get-all-transaction`,
        method: "get",
        params: params
    });
}
function updateUser(data) {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: path.updateUser,
        method: "put",
        data: data
    });
}
function changePass(data) {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: path.changePass,
        method: "put",
        data: data
    });
}
function isLogin() {
    const { user  } = _redux_store__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getState */ .Z.getState();
    return !!(user === null || user === void 0 ? void 0 : user.accesstoken);
}
function getAllUser() {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: path.getAllUser,
        method: "get"
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    login,
    isLogin,
    getUser,
    register,
    updateUser,
    changePass,
    loginSocial,
    getUserInfoSocial,
    getMoneyUser,
    rechargeMoney,
    getTopUser,
    getPopularGenre,
    getTopPosts,
    createBookNoti,
    sendVerifyCode,
    forgotPassword,
    getAllUser,
    getHistoryPayment
});


/***/ })

};
;