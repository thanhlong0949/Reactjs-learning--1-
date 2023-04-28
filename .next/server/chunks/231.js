"use strict";
exports.id = 231;
exports.ids = [231];
exports.modules = {

/***/ 6231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Fetcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(264);

const path = {
    category: "/category/get-all-category-and-subcategory",
    get_all_post: "/post/search-post-by-Keyword"
};
function getAllPost(params) {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: `${path.get_all_post}`,
        method: "get",
        params: params
    });
}
function getKindBook(params) {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: `/post/get_all_post_by_subcategoryId`,
        method: "get",
        params: params
    });
}
function getCategory() {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: path.category,
        method: "get"
    });
}
function getBookDetail(postId) {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: `/book/get-all-book-by/${postId}`,
        method: "get"
    });
}
function searchPost(search) {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: `/post/search-post-by-Keyword/${search}`,
        method: "get"
    });
}
function getCategoryDetail() {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: `/category/get-all-category`,
        method: "get"
    });
}
function getAllCity() {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: `/address/get_all_city_in_list_post`,
        method: "get"
    });
}
function getSubcategoryDeatail(id) {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: `/subcategory/get-all-subcategory/${id}`,
        method: "get"
    });
}
function getAllSellOrder(id, status) {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: `/order/get_All_Sell_Order`,
        method: "get",
        params: {
            userId: id,
            status: status
        }
    });
}
function getAllBoughOrder(id, status) {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: `/order/get_All_Bought_Order`,
        method: "get",
        params: {
            userId: id,
            status: status
        }
    });
}
function cancelOrderByOrderId(orderId, cancelReason) {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: `/order/cancel_order_by_orderId`,
        method: "put",
        params: {
            orderId: orderId,
            cancelReason: cancelReason
        }
    });
}
function convertOrderStatus(params) {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: `/order/convert-order-status_by_orderId`,
        method: "put",
        params: params
    });
}
function cancelOrder(params) {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: `/order/cancel_order_by_orderId`,
        method: "put",
        params: params
    });
}
function updateResentDate(params) {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: `/order/update_resent_date`,
        method: "put",
        params: params
    });
}
function getAllMyPostByUseId(email) {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: `/post/get_all_my_post_by_email`,
        method: "get",
        params: {
            email: email
        }
    });
}
function updatePostStatus(params) {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: `/post/update-post-status/${params.id}`,
        method: "put"
    });
}
function createNewOrder(params) {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: "/order/create-new-order-with-my-wallet",
        method: "post",
        data: params
    });
}
function createNewOrderMoMO(params) {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: "/order/create-new-order-with-momo",
        method: "post",
        data: params
    });
}
function updatePost(params) {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: "/post/update-post-info",
        method: "put",
        data: params
    });
}
function updateBook(params) {
    return (0,_Fetcher__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: "/book/update-book-information",
        method: "put",
        data: params
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    getAllPost,
    getCategory,
    getKindBook,
    getBookDetail,
    searchPost,
    getCategoryDetail,
    getSubcategoryDeatail,
    getAllCity,
    getAllSellOrder,
    cancelOrderByOrderId,
    convertOrderStatus,
    getAllBoughOrder,
    getAllMyPostByUseId,
    createNewOrder,
    createNewOrderMoMO,
    cancelOrder,
    updatePostStatus,
    updateResentDate,
    updateBook,
    updatePost
});


/***/ })

};
;