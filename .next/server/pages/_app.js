(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Content)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Content({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "content",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: children
        })
    });
}


/***/ }),

/***/ 1444:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DashboardLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1981);
/* harmony import */ var _Content_Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8019);
/* harmony import */ var _Main_Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5999);
/* harmony import */ var _LoadingLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2918);
/* harmony import */ var _app_components_Layout_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5737);
/* harmony import */ var _app_components_Layout_Sidebar_ContextProvider_ContextSearchHome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__]);
_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function DashboardLayout({ children  }) {
    const { 0: searchHomeListBook , 1: setSearchHomeListBook  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("null");
    const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return {
            searchHomeListBook,
            setSearchHomeListBook
        };
    }, [
        searchHomeListBook,
        setSearchHomeListBook
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_Layout_Sidebar_ContextProvider_ContextSearchHome__WEBPACK_IMPORTED_MODULE_7__/* .ContextSearchHome.Provider */ .Z.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "wrapper",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Main_Main__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            display: "flex",
                            padding: "20px",
                            marginTop: "55px"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_Layout_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LoadingLayout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Content_Content__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    children: children
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LandingLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function LandingLayout({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "wrapper",
        children: children
    });
}


/***/ }),

/***/ 2918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_components_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(993);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




function LoadingLayout({ children  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
    // console.log(router.asPath)
    // const handleStart = (url: string): void | boolean =>
    //   url !== router.asPath && setLoading(true);
    // const handleComplete = (url: string): void | boolean =>
    //   url === router.asPath && setLoading(false);
    // router.events.on("routeChangeStart", handleStart);
    // router.events.on("routeChangeComplete", handleComplete);
    // router.events.on("routeChangeError", handleComplete);
    // return () => {
    //   router.events.off("routeChangeStart", handleStart);
    //   router.events.off("routeChangeComplete", handleComplete);
    //   router.events.off("routeChangeError", handleComplete);
    // };
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "loading-layout",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "loading-layout-content",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_Icon__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .JO, {
                    icon: "Logo_Visang",
                    size: 300,
                    className: "logo"
                })
            }),
            children
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingLayout);


/***/ }),

/***/ 5999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Main({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "main",
        children: children
    });
}


/***/ }),

/***/ 5737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_api_ApiBook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6231);
/* harmony import */ var _app_redux_slices_categorySlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(844);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);



// eslint-disable-next-line no-duplicate-imports
// import type {MenuProps} from "antd";






function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type
    };
}
function Sidebar() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
    const { 0: category , 1: setCategory  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    let key;
    let sub;
    if (router.query.kind) {
        key = router.query.type;
        sub = router.query.kind;
    } else {
        var ref, ref1;
        const searchParams = new URLSearchParams(window.location.search);
        sub = (ref = Object.fromEntries(searchParams)) === null || ref === void 0 ? void 0 : ref.kind;
        key = (ref1 = Object.fromEntries(searchParams)) === null || ref1 === void 0 ? void 0 : ref1.type;
    }
    const convertItemSidebar = ()=>{
        const itemsTmp = [];
        category.forEach((item)=>{
            if (item.subcategoryList) {
                const tmpGrandChidren = [];
                item.subcategoryList.forEach((item)=>{
                    tmpGrandChidren.push(getItem(item.name, item.id));
                });
                itemsTmp.push(getItem(item.name, item.id, null, tmpGrandChidren));
            } else {
                itemsTmp.push(getItem(item.name, item.id));
            }
        });
        const itemsTmpNew = itemsTmp.map((it)=>{
            return {
                ...it,
                key: it.key + 0.1
            };
        });
        return itemsTmpNew;
    };
    const onClick = (e)=>{
        router.push(`/?kind=${Math.round(e === null || e === void 0 ? void 0 : e.keyPath[1])}&type=${e.keyPath[0]}`);
        const pathOnClicked = e.keyPath.reverse();
        const tmp = [];
        if (convertItemSidebar()) {
            // eslint-disable-next-line array-callback-return
            convertItemSidebar().map((item)=>{
                if (item.key.toString() === pathOnClicked[0]) {
                    tmp.push(item.label);
                    // eslint-disable-next-line array-callback-return
                    item.children.map((item, index)=>{
                        if (item.key.toString() === pathOnClicked[1]) {
                            tmp.push(item.label);
                        }
                    });
                }
            });
        }
        dispatch((0,_app_redux_slices_categorySlice__WEBPACK_IMPORTED_MODULE_4__/* .categorys */ .Nb)(tmp));
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        _app_api_ApiBook__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getCategory */ .Z.getCategory().then((res)=>{
            setCategory(res);
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "sidebar-container",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    width: "270px"
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "menu",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            display: "flex"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.BlockOutlined, {
                                style: {
                                    fontSize: 22,
                                    color: "red",
                                    marginRight: 5
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: "Danh mục sản phẩm"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "post-all",
                        onClick: ()=>{
                            router.push("/");
                        },
                        children: "Tất cả b\xe0i đăng"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Menu, {
                        onClick: onClick,
                        style: {
                            width: 256
                        },
                        mode: "inline",
                        defaultSelectedKeys: [
                            key
                        ],
                        defaultOpenKeys: [
                            (sub * 1 + 0.1).toString()
                        ],
                        items: convertItemSidebar()
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 5656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1127);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4556);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3283);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4722);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(232);
/* harmony import */ var _firebase_config_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1909);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_routes__WEBPACK_IMPORTED_MODULE_5__, _firebase_config_ts__WEBPACK_IMPORTED_MODULE_8__]);
([_routes__WEBPACK_IMPORTED_MODULE_5__, _firebase_config_ts__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









// eslint-disable-next-line import/extensions


const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient({
    defaultOptions: {
        queries: {
            retry: _config__WEBPACK_IMPORTED_MODULE_7__/* ["default"].NETWORK_CONFIG.RETRY */ .Z.NETWORK_CONFIG.RETRY,
            refetchOnWindowFocus: false
        }
    }
});
function MyApp({ Component , pageProps , router  }) {
    if (false) {}
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
        store: _redux_store__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {
            client: queryClient,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_routes__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                Component: Component,
                pageProps: pageProps,
                router: router
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_components_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(993);


const routes = [
    {
        path: "/login",
        name: "Đăng nhập",
        isSidebar: false,
        isLanding: true
    },
    {
        path: "/user_profile",
        name: "Th\xf4ng tin c\xe1 nh\xe2n",
        isSidebar: false,
        isLanding: true
    },
    {
        path: "/register",
        name: "Đăng K\xed",
        isSidebar: false,
        isLanding: true
    },
    {
        path: "/forgot-password",
        name: "Đăng K\xed",
        isSidebar: false,
        isLanding: true
    },
    {
        path: "/home",
        name: "Trang chủ",
        isSidebar: false,
        isLanding: true
    },
    {
        path: "/manager_permission",
        name: "Quản l\xfd ph\xe2n quyền",
        isSidebar: true,
        isLanding: false
    },
    {
        path: "/self_book",
        name: "B\xe1n s\xe1ch",
        isSidebar: false,
        isLanding: true
    },
    {
        path: "/detail_book",
        name: "Chi tiết s\xe1ch",
        isSidebar: false,
        isLanding: true
    },
    {
        path: "/payment",
        name: "Thanh to\xe1n",
        isSidebar: false,
        isLanding: true
    },
    {
        path: "/manager_popup",
        name: "Quản l\xfd Popup",
        isSidebar: true
    },
    {
        path: "/list_posting",
        name: "Danh s\xe1ch b\xe0i đăng",
        isSidebar: false,
        isLanding: true
    },
    {
        path: "/login_page",
        name: "Quản l\xfd Popup",
        isSidebar: true
    },
    {
        path: "/chat-seller",
        name: "chat seller",
        isSidebar: false,
        isLanding: true
    },
    {
        path: "/blogs",
        name: "Blogs",
        isSidebar: true,
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_Icon__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .JO, {
            icon: "blog",
            size: "40"
        }),
        children: [
            {
                path: "",
                name: "",
                isSidebar: false
            }, 
        ]
    }, 
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);


/***/ }),

/***/ 3283:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Routes)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout_DashboardLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1444);
/* harmony import */ var _components_Layout_LandingLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(555);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(232);
/* harmony import */ var _RouteList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7724);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout_DashboardLayout__WEBPACK_IMPORTED_MODULE_2__]);
_components_Layout_DashboardLayout__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






// import {IRootState} from "@app/redux/store";
// import {useDispatch, useSelector} from "react-redux";
// import {logoutUser} from "@app/redux/slices/UserSlice";
function Routes({ Component , pageProps , router  }) {
    // const dispatch = useDispatch();
    // const isRemember = useSelector(
    //   (state: IRootState) => state.remember.isRemember
    // );
    if (true) {
        return null;
    }
    // const isRememberSessionStorage = sessionStorage.getItem("isRemember");
    const goToLogin = ()=>{
        router.push(_config__WEBPACK_IMPORTED_MODULE_4__/* ["default"].PATHNAME.LOGIN */ .Z.PATHNAME.LOGIN);
        return null;
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
    // if (!isRemember) {
    //   dispatch(logoutUser());
    //   goToLogin();
    // }
    // if (!ApiUser.isLogin()) {  // check đã đăng nhập hay chưa
    //   goToLogin();
    // }
    }, []);
    const isRoute = (key)=>{
        for (const route of _RouteList__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z){
            if (router.pathname === route.path) {
                return !!route[key];
            }
        }
        return false;
    };
    if (isRoute("isLanding")) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_LandingLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_DashboardLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4722:
/***/ (() => {



/***/ }),

/***/ 7066:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons");

/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 5725:
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 4417:
/***/ ((module) => {

"use strict";
module.exports = require("icomoon-react");

/***/ }),

/***/ 6517:
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ 2245:
/***/ ((module) => {

"use strict";
module.exports = require("moment");

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

/***/ 830:
/***/ ((module) => {

"use strict";
module.exports = require("react-firebase-hooks/auth");

/***/ }),

/***/ 1175:
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

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

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ 4161:
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist");

/***/ }),

/***/ 1127:
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ 7388:
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/lib/storage/createWebStorage");

/***/ }),

/***/ 61:
/***/ ((module) => {

"use strict";
module.exports = import("@firebase/auth");;

/***/ }),

/***/ 3745:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ 3392:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/storage");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [232,264,255,473,981,231], () => (__webpack_exec__(5656)));
module.exports = __webpack_exports__;

})();