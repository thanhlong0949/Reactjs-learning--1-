"use strict";
exports.id = 646;
exports.ids = [646];
exports.modules = {

/***/ 7881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ BreakCrumGlobal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);



function BreakCrumGlobal(props) {
    const { listBreakcrum  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Breadcrumb, {
            children: listBreakcrum.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Breadcrumb.Item, {
                    children: item
                }, index))
        })
    });
}


/***/ }),

/***/ 4646:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ ManagerPermission)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_components_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(993);
/* harmony import */ var _app_components_BreakCrumGlobal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7881);
/* harmony import */ var _app_api_ApiBook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6231);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_components_FilterGroupGlobal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48);
/* harmony import */ var _app_components_Loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9759);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _app_components_Layout_Sidebar_ContextProvider_ContextSearchHome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3210);
/* harmony import */ var _app_utils_convert_ConvertHelper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3461);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var firebase_messaging__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3512);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3745);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_messaging__WEBPACK_IMPORTED_MODULE_14__, firebase_app__WEBPACK_IMPORTED_MODULE_15__]);
([firebase_messaging__WEBPACK_IMPORTED_MODULE_14__, firebase_app__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const firebaseConfig = {
    apiKey: "AIzaSyDuy-Rh6czNs1Jm4LGfFUAdHvB-AIncyng",
    authDomain: "storage-4255a.firebaseapp.com",
    projectId: "storage-4255a",
    storageBucket: "storage-4255a.appspot.com",
    messagingSenderId: "76967828674",
    appId: "1:76967828674:web:8949168713af2353262f5b",
    measurementId: "G-C4CVCPRJQ8"
};
function ManagerPermission() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const category = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.category);
    const { 0: listBookInitial , 1: setListBookInitial  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: listBook , 1: setListBook  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: pageSize , 1: setPageSize  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(20);
    const { 0: pageCurent , 1: setPageCurent  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const { 0: path , 1: setPath  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([
        "Trang chủ",
        "Tất cả s\xe1ch"
    ]);
    const { searchHomeListBook  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_app_components_Layout_Sidebar_ContextProvider_ContextSearchHome__WEBPACK_IMPORTED_MODULE_11__/* .ContextSearchHome */ .Z);
    const { 0: paramSubmit , 1: setParamSubmit  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        sortBy: "null",
        filter: "null",
        keyWord: "null"
    });
    const { 0: totalItemBook , 1: setTotalItemBook  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const listDataCity = [
        {
            value: "null",
            label: "Tất cả"
        }, 
    ];
    const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_14__.getMessaging)((0,firebase_app__WEBPACK_IMPORTED_MODULE_15__.initializeApp)(firebaseConfig));
    const onMessageListener = ()=>new Promise((resolve)=>{
            (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_14__.onMessage)(messaging, (payload)=>{
                resolve(payload);
            });
        });
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_14__.getToken)(messaging, {
            vapidKey: "BIYxNzI3XKaLdK5VLm9H65f2_bnUoqGKluFT8efWn7tN4XYunCAgUexKAdWx0wKhVQ7LD4Zm-DLF8RNK0K4Alh8"
        }).then((currentToken)=>{
            if (currentToken) {
                console.log("current token for client: ", currentToken);
                localStorage.setItem("FCMToken", currentToken);
            } else {
                console.log("No registration token available. Request permission to generate one.");
            }
        }).catch((err)=>{
            console.log("An error occurred while retrieving token. ", err);
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        onMessageListener().then((payload)=>{
            console.log(payload);
        }).catch((err)=>console.log("failed: ", err));
    }, []);
    const toDetailBook = (item)=>{
        router.push({
            pathname: "/detail_book",
            query: {
                key: item.form,
                postId: item.id,
                bookId: item.bookList[0].bookId,
                userId: item.userId
            }
        });
    };
    const handleChangePage = (page, pageSizeNew)=>{
        if (page !== pageCurent || pageSizeNew !== pageSize) {
            setPageSize(pageSizeNew);
            setPageCurent(page);
            setListBook(listBookInitial.slice((page - 1) * pageSizeNew, page * pageSizeNew));
        }
    };
    const handleReset = ()=>{
        setParamSubmit({
            keyWord: "null",
            sortBy: "null",
            filter: "null"
        });
        setListBook([]);
        _app_api_ApiBook__WEBPACK_IMPORTED_MODULE_6__/* ["default"].getAllPost */ .Z.getAllPost(paramSubmit).then((res)=>{
            setListBook(res === null || res === void 0 ? void 0 : res.slice(0, pageSize));
            setListBookInitial(res);
        });
    };
    const handleGetPath = ()=>{
        const temp = [
            ""
        ];
        const paths = category.find((e)=>e.id === router.query.kind);
        if (paths) {
            temp.push(paths.name);
            if (paths === null || paths === void 0 ? void 0 : paths.subcategoryList) {
                var ref;
                temp.push((ref = paths.subcategoryList.find((e)=>e.id === router.query.type)) === null || ref === void 0 ? void 0 : ref.name);
            }
        }
        setPath(temp);
    };
    const handleSelectSort = (value)=>{
        setParamSubmit({
            ...paramSubmit,
            sortBy: value
        });
    };
    const handleSelectCity = (value)=>{
        setParamSubmit({
            ...paramSubmit,
            filter: value
        });
    };
    const listSelectOption = [
        {
            title: "Sắp x\xeáp theo",
            placeholder: "Gi\xe1",
            width: 120,
            value: paramSubmit.sortBy === "null" ? "" : paramSubmit.sortBy,
            handleChange: handleSelectSort,
            optionSelect: [
                {
                    value: "Tăng dần",
                    label: "Tăng dần"
                },
                {
                    value: "Giảm dần",
                    label: "Giảm dần"
                }, 
            ]
        },
        {
            title: "Th\xe0nh phố",
            placeholder: "Chọn th\xe0nh phố",
            width: 120,
            value: paramSubmit.filter === "null" ? "" : paramSubmit.filter,
            handleChange: handleSelectCity,
            optionSelect: listDataCity ?? []
        }, 
    ];
    const getDataListAllCity = ()=>_app_api_ApiBook__WEBPACK_IMPORTED_MODULE_6__/* ["default"].getAllCity */ .Z.getAllCity();
    const getDataCity = (0,react_query__WEBPACK_IMPORTED_MODULE_10__.useQuery)("GET_DATA_CITY", getDataListAllCity);
    if (getDataCity === null || getDataCity === void 0 ? void 0 : getDataCity.data) {
        getDataCity.data.map((item)=>listDataCity.push({
                value: item,
                label: item
            }));
    }
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (router.query.search) {
            _app_api_ApiBook__WEBPACK_IMPORTED_MODULE_6__/* ["default"].searchPost */ .Z.searchPost(router.query.search).then((res)=>{
                setListBook(res === null || res === void 0 ? void 0 : res.slice(0, pageSize));
                setListBookInitial(res);
                setPath([
                    "Trang chủ",
                    "T\xecm kiếm"
                ]);
            });
        } else if (router.query.kind) {
            _app_api_ApiBook__WEBPACK_IMPORTED_MODULE_6__/* ["default"].getKindBook */ .Z.getKindBook({
                subcategoryId: router.query.type,
                sortBy: "null",
                filter: "null"
            }).then((res)=>{
                setListBookInitial(res);
                setListBook(res === null || res === void 0 ? void 0 : res.slice(0, pageSize));
                handleGetPath();
                setPath((0,lodash__WEBPACK_IMPORTED_MODULE_13__.concat)([
                    "Trang chủ",
                    "Tất cả s\xe1ch"
                ], category));
            });
        } else {
            if (window.history.state.as === "/") {
                _app_api_ApiBook__WEBPACK_IMPORTED_MODULE_6__/* ["default"].getAllPost */ .Z.getAllPost({
                    keyWord: searchHomeListBook,
                    sortBy: paramSubmit.sortBy,
                    filter: paramSubmit.filter
                }).then((res)=>{
                    setListBook(res === null || res === void 0 ? void 0 : res.slice(0, pageSize));
                    setListBookInitial(res);
                    setTotalItemBook(res.length);
                });
                setPath([
                    "Trang chủ",
                    "Tất cả s\xe1ch"
                ]);
            }
        }
    }, [
        router.query,
        paramSubmit,
        searchHomeListBook
    ]);
    return(// <ContextSearchHome.Provider value={{setParamSubmit, paramSubmit}}>
    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "home-container",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_BreakCrumGlobal__WEBPACK_IMPORTED_MODULE_5__/* .BreakCrumGlobal */ .A, {
                listBreakcrum: path
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingRight: "10%"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            display: "flex",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_FilterGroupGlobal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                // listSearchText={listSearchText}
                                listSelectOption: listSelectOption
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                onClick: handleReset,
                                children: "Đặt lại"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        style: {
                            marginLeft: 5
                        },
                        children: [
                            "Kết quả: ",
                            totalItemBook
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "home-list-book",
                children: listBook.isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_Loading__WEBPACK_IMPORTED_MODULE_9__/* .LoadingGlobal */ .Y, {}) : listBook.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "item-book",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                preview: false,
                                width: 160,
                                height: 160,
                                src: item.imageUrl
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-title",
                                children: item.title
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row-end",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-align-center",
                                                    children: item.price ? `${(0,_app_utils_convert_ConvertHelper__WEBPACK_IMPORTED_MODULE_12__/* .getMoneyFormat */ .n5)(item.price)} VNĐ` : "Chưa c\xf3 gi\xe1"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_Icon__WEBPACK_IMPORTED_MODULE_4__/* .Icon */ .JO, {
                                                        icon: "location",
                                                        size: 18
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        style: {
                                                            fontSize: "12px"
                                                        },
                                                        children: item.location
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                            style: {
                                                borderColor: item.form === "B\xe1n" ? "red" : "blue",
                                                color: item.form === "B\xe1n" ? "red" : "blue"
                                            },
                                            onClick: ()=>toDetailBook(item),
                                            children: item.form.toLowerCase() === "b\xe1n" ? "B\xe1n" : "Trao đổi"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "author",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Người đăng:"
                                    }),
                                    item.userName
                                ]
                            })
                        ]
                    }, index))
            }),
            listBookInitial.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "pagination-home",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Pagination, {
                    responsive: true,
                    current: pageCurent,
                    total: listBookInitial.length,
                    pageSize: pageSize,
                    onChange: (page, PageSizes)=>{
                        handleChangePage(page, PageSizes);
                    }
                })
            })
        ]
    }));
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;