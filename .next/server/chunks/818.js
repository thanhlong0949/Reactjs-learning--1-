"use strict";
exports.id = 818;
exports.ids = [818];
exports.modules = {

/***/ 6818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Fetcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(264);
/* harmony import */ var _app_redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4556);


const path = {
    update: "/address/update-address",
    create: "/address/create-new-address",
    getAll: "/address/get-all-address-By",
    delete: "/address/update-address-status"
};
function creatAddress(data) {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: path.create,
        method: "post",
        data: data
    });
}
function updateAddress(data) {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: path.update,
        method: "put",
        data: data
    });
}
function deleteAddress(id) {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: path.delete + "/" + id,
        method: "put"
    });
}
function getAllAddress() {
    var ref, ref1;
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: path.getAll + "/" + ((ref = _app_redux_store__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getState */ .Z.getState()) === null || ref === void 0 ? void 0 : (ref1 = ref.user) === null || ref1 === void 0 ? void 0 : ref1.id),
        method: "get"
    });
}
function getAddressByUserId(userId) {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: `/address/get-all-address-By/${userId}`,
        method: "get"
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    creatAddress,
    updateAddress,
    getAllAddress,
    deleteAddress,
    getAddressByUserId
});


/***/ })

};
;