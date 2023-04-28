"use strict";
exports.id = 981;
exports.ids = [981];
exports.modules = {

/***/ 1981:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_components_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(993);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(232);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_api_Fetcher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(264);
/* harmony import */ var _app_api_ApiUser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2255);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(830);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _app_firebase_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1909);
/* harmony import */ var _app_components_Layout_Sidebar_ContextProvider_ContextSearchHome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3210);
/* harmony import */ var _app_utils_convert_ConvertHelper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3461);
/* harmony import */ var _app_utils_notification__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9701);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_firebase_config__WEBPACK_IMPORTED_MODULE_11__]);
_app_firebase_config__WEBPACK_IMPORTED_MODULE_11__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







// import store from "@app/redux/store";








function Navbar() {
    var ref;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { 0: openModal , 1: setOpenModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // const [search, setSearch] = useState<string>();
    // const [defaultSeach, setDefaultSeach] = useState(router.query.search);
    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.user);
    const avatar = user === null || user === void 0 ? void 0 : user.imageUrl;
    const [form] = antd__WEBPACK_IMPORTED_MODULE_2__.Form.useForm();
    const [userSocial] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_10__.useAuthState)(_app_firebase_config__WEBPACK_IMPORTED_MODULE_11__/* .authFirebase */ .W);
    const { setSearchHomeListBook  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_app_components_Layout_Sidebar_ContextProvider_ContextSearchHome__WEBPACK_IMPORTED_MODULE_12__/* .ContextSearchHome */ .Z);
    const { 0: valueChangeSearch , 1: setValueChangeSearch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("null");
    const { 0: moneyUser , 1: setMoneyUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: moneyRechange , 1: setMoneyRechange  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: nameBook , 1: setNameBook  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: checkmoneyRechange , 1: setCheckMoneyRechange  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const handleSearch = (valueSearch)=>{
        setValueChangeSearch(valueSearch.target.value.length === 0 ? "null" : valueSearch.target.value);
    };
    const { 0: isModalOpen , 1: setIsModalOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: isOpenModalNoti , 1: setIsOpenModalNoti  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const showModal = ()=>{
        setIsModalOpen(true);
    };
    const handleOk = ()=>{
        if (moneyRechange) {
            const data = {
                userId: user === null || user === void 0 ? void 0 : user.id,
                depositAmount: parseInt(moneyRechange, 10)
            };
            _app_api_ApiUser__WEBPACK_IMPORTED_MODULE_9__/* ["default"].rechargeMoney */ .Z.rechargeMoney(data).then((res)=>{
                if (res) {
                    window.open(res.body.payUrl);
                    setIsModalOpen(false);
                    setMoneyRechange("");
                    setCheckMoneyRechange(checkmoneyRechange + 1);
                } else {
                    (0,_app_utils_notification__WEBPACK_IMPORTED_MODULE_14__/* .notificationError */ .YZ)("Đã có l\xf4̃i xảy ra vui lòng thử lại sau!");
                }
            });
        } else {
            (0,_app_utils_notification__WEBPACK_IMPORTED_MODULE_14__/* .notificationError */ .YZ)("Vui lòng nh\xe2̣p s\xf4́ ti\xeàn c\xe2̀n nạp!");
        }
    };
    const handleOkNotify = ()=>{
        if (nameBook) {
            const data = {
                userId: user === null || user === void 0 ? void 0 : user.id,
                bookReceive: nameBook
            };
            _app_api_ApiUser__WEBPACK_IMPORTED_MODULE_9__/* ["default"].createBookNoti */ .Z.createBookNoti(data).then((res)=>{
                (0,_app_utils_notification__WEBPACK_IMPORTED_MODULE_14__/* .notificationSuccess */ .$h)(`Đăng ký thông báo cho cuốn ${nameBook} thành công `);
                setIsOpenModalNoti(false);
                setNameBook("");
            }).catch((err)=>{
                (0,_app_utils_notification__WEBPACK_IMPORTED_MODULE_14__/* .notificationError */ .YZ)("Đã có l\xf4̃i xảy ra vui lòng thử lại sau!");
            });
        } else {
            (0,_app_utils_notification__WEBPACK_IMPORTED_MODULE_14__/* .notificationError */ .YZ)("Vui lòng nh\xe2̣p t\xean sách mu\xf4́n nh\xe2̣n th\xf4ng báo");
        }
    };
    const handleCancel = ()=>{
        setIsModalOpen(false);
        setMoneyRechange("");
        setIsOpenModalNoti(false);
    };
    const toPageSearch = ()=>{
        router.push(`/`);
        if (valueChangeSearch) {
            setSearchHomeListBook(valueChangeSearch);
        }
    };
    const toSelfBook = ()=>{
        if (user === null || user === void 0 ? void 0 : user.id) {
            router.push(`/self_book`);
        } else {
            antd__WEBPACK_IMPORTED_MODULE_2__.Modal.confirm({
                title: "T\xednh năng n\xe0y cần đăng nhập",
                content: "Bạn c\xf3 muốn đăng nhập kh\xf4ng?",
                onOk: ()=>{
                    router.push(`/login`);
                }
            });
        }
    };
    const goToHomePage = ()=>{
        router.push("/home");
    };
    const goToLoginPage = ()=>{
        router.push("/login");
    };
    const goToRegisterPage = ()=>{
        router.push("/register");
    };
    const validateConfirmPassword = ({ getFieldValue  })=>({
            validator (_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                    return Promise.resolve();
                }
                return Promise.reject(new Error("Mật khẩu nhập lại kh\xf4ng khớp"));
            }
        });
    const handleChangePass = (data)=>{
        const putData = {
            ...data,
            email: user === null || user === void 0 ? void 0 : user.email
        };
        _app_api_ApiUser__WEBPACK_IMPORTED_MODULE_9__/* ["default"].changePass */ .Z.changePass(putData).then((res)=>{
            if (res) {
                antd__WEBPACK_IMPORTED_MODULE_2__.notification.success({
                    message: "Đổi mật khẩu th\xe0nh c\xf4ng"
                });
                setOpenModal(false);
            } else {
                antd__WEBPACK_IMPORTED_MODULE_2__.notification.error({
                    message: "Đổi mật khẩu thất bại"
                });
            }
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (user) {
            const params = {
                userId: user === null || user === void 0 ? void 0 : user.id
            };
            _app_api_ApiUser__WEBPACK_IMPORTED_MODULE_9__/* ["default"].getMoneyUser */ .Z.getMoneyUser(params).then((res)=>{
                setMoneyUser(res);
            });
        }
    }, [
        checkmoneyRechange
    ]);
    const items = [
        {
            key: "1",
            label: // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "",
                onClick: ()=>router.push("/user_profile"),
                children: "Th\xf4ng tin c\xe1 nh\xe2n"
            }),
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.InfoCircleOutlined, {})
        },
        {
            key: "2",
            label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "",
                        children: "S\xf4́ dư tài khoản: "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        },
                        children: [
                            (0,_app_utils_convert_ConvertHelper__WEBPACK_IMPORTED_MODULE_13__/* .getMoneyFormat */ .n5)((moneyUser === null || moneyUser === void 0 ? void 0 : moneyUser.amount) ?? 0),
                            " VNĐ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.PlusCircleOutlined, {
                                style: {
                                    marginLeft: 10
                                },
                                color: "#0000FF",
                                onClick: showModal
                            })
                        ]
                    })
                ]
            })
        },
        {
            key: "2.4",
            label: // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>{
                    setIsOpenModalNoti(true);
                },
                children: "Th\xf4ng báo nh\xe2̣n sách"
            }),
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.NotificationOutlined, {})
        },
        {
            key: "3",
            label: // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "",
                onClick: toSelfBook,
                children: "B\xe1n s\xe1ch"
            }),
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.LockOutlined, {})
        },
        {
            key: "4",
            label: // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "",
                onClick: ()=>{
                    setOpenModal(true);
                },
                children: "Đổi mật khẩu"
            }),
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.LockOutlined, {})
        },
        {
            key: "5",
            label: // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "",
                onClick: ()=>{
                    const showConfirm = ()=>{
                        antd__WEBPACK_IMPORTED_MODULE_2__.Modal.confirm({
                            title: "Bạn chắc chắn muốn đăng xuất?",
                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.ExclamationCircleFilled, {}),
                            onOk () {
                                if (userSocial) {
                                    _app_firebase_config__WEBPACK_IMPORTED_MODULE_11__/* .authFirebase.signOut */ .W.signOut();
                                    antd__WEBPACK_IMPORTED_MODULE_2__.notification.success({
                                        message: "Đăng xuất th\xe0nh c\xf4ng",
                                        duration: 3
                                    });
                                } else {
                                    (0,_app_api_Fetcher__WEBPACK_IMPORTED_MODULE_8__/* .logout */ .kS)();
                                    router.push("/");
                                }
                            },
                            onCancel () {
                            // console.log('Cancel');
                            }
                        });
                    };
                    showConfirm();
                },
                children: "Đăng xuất"
            }),
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.LogoutOutlined, {})
        }, 
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "navbar",
        style: {
            height: _app_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"].HEIGHT_NAVBAR */ .Z.HEIGHT_NAVBAR
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: goToHomePage,
                className: "logo",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Image, {
                    width: 80,
                    height: 40,
                    preview: false,
                    src: "/logo_book.jpg"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "search-navbar",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
                        placeholder: "T\xecm Kiếm S\xe1ch ...",
                        className: "input-search",
                        prefix: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.SearchOutlined, {}),
                        // value={valueChangeSearch === "null" ? "" : valueChangeSearch}
                        onChange: handleSearch
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: toPageSearch,
                        className: "button-search",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            children: "T\xecm kiếm"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "action-navbar",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_Icon__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .JO, {
                        icon: "Bell",
                        size: 15,
                        color: "white"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "contact-navbar",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-contact",
                                children: "Li\xean Hệ"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.PhoneOutlined, {
                                style: {
                                    color: "white"
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "author-navbar",
                        children: (user === null || user === void 0 ? void 0 : user.accesstoken) ? // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "author-infor",
                            onClick: ()=>{
                                setCheckMoneyRechange(checkmoneyRechange + 1);
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
                                menu: {
                                    items
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    onClick: (e)=>e.preventDefault(),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Space, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.UserOutlined, {}),
                                                src: avatar
                                            }),
                                            user.name.slice(0, 15) + (((ref = user.name) === null || ref === void 0 ? void 0 : ref.length) > 15 ? "..." : ""),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.DownOutlined, {})
                                        ]
                                    })
                                })
                            })
                        }) : userSocial ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
                            menu: {
                                items
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                onClick: (e)=>e.preventDefault(),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Space, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.UserOutlined, {}),
                                            src: userSocial.photoURL
                                        }),
                                        userSocial.displayName,
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.DownOutlined, {})
                                    ]
                                })
                            })
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "author-login-resgister",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    onClick: goToLoginPage,
                                    className: "text-hover",
                                    children: "Đăng nhập"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "vertical",
                                    children: "|"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    onClick: goToRegisterPage,
                                    className: "text-hover",
                                    children: "Đăng k\xed"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Modal, {
                title: "Đổi mật khẩu",
                open: openModal,
                destroyOnClose: true,
                footer: [],
                onCancel: ()=>setOpenModal(false),
                width: 600,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Form, {
                        name: "basic",
                        labelAlign: "left",
                        labelCol: {
                            span: 8
                        },
                        wrapperCol: {
                            span: 16
                        },
                        onFinish: (data)=>{
                            handleChangePass(data);
                        },
                        style: {
                            padding: "8px"
                        },
                        form: form,
                        autoComplete: "off",
                        colon: false,
                        id: "form-changePass",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                label: "Mật khẩu cũ",
                                rules: [
                                    {
                                        required: true,
                                        message: "Vui l\xf2ng nhập trường n\xe0y"
                                    }
                                ],
                                name: "oldPassword",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                    placeholder: "Nhập mật khẩu cũ"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                label: "Mật khẩu mới",
                                name: "newPassword",
                                rules: [
                                    {
                                        required: true,
                                        message: "Vui l\xf2ng nhập trường n\xe0y"
                                    },
                                    {
                                        min: 6,
                                        message: "Mật khẩu c\xf3 độ d\xe0i tối thiểu 6 k\xed tự"
                                    }, 
                                ],
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                    placeholder: "Nhập mật khẩu mới"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                label: "Nhập lại mật khẩu",
                                rules: [
                                    {
                                        required: true,
                                        message: "Vui l\xf2ng nhập trường n\xe0y"
                                    },
                                    {
                                        min: 6,
                                        message: "Mật khẩu c\xf3 độ d\xe0i tối thiểu 6 k\xed tự"
                                    },
                                    validateConfirmPassword, 
                                ],
                                name: "confirmPassword",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                    placeholder: "Nhập lại mật khẩu"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "btn",
                        style: {
                            textAlign: "center",
                            marginTop: "24px"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            htmlType: "submit",
                            form: "form-changePass",
                            type: "primary",
                            children: "X\xe1c nhận"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Modal, {
                title: "Vui lòng nh\xe2̣p s\xf4́ ti\xeàn c\xe2̀n nạp: (VNĐ)",
                open: isModalOpen,
                onOk: handleOk,
                onCancel: handleCancel,
                cancelText: "Hủy",
                okText: "Nạp",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
                    type: "number",
                    placeholder: "Nh\xe2̣p s\xf4́ ti\xeàn tại đ\xe2y",
                    value: moneyRechange,
                    onChange: (e)=>setMoneyRechange(e.target.value)
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Modal, {
                title: "Đi\xeàn sách mu\xf4́n nh\xe2̣n th\xf4ng báo",
                open: isOpenModalNoti,
                onOk: handleOkNotify,
                onCancel: handleCancel,
                cancelText: "Hủy",
                okText: "Xác nh\xe2̣n",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
                    placeholder: "Nh\xe2̣p t\xean sách.....",
                    value: nameBook,
                    onChange: (e)=>setNameBook(e.target.value)
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1909:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ authFirebase)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3392);
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_storage__WEBPACK_IMPORTED_MODULE_1__, _firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_storage__WEBPACK_IMPORTED_MODULE_1__, _firebase_auth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Import the functions you need from the SDKs you need



const firebaseConfig = {
    apiKey: "AIzaSyDuy-Rh6czNs1Jm4LGfFUAdHvB-AIncyng",
    authDomain: "storage-4255a.firebaseapp.com",
    projectId: "storage-4255a",
    storageBucket: "storage-4255a.appspot.com",
    messagingSenderId: "76967828674",
    appId: "1:76967828674:web:8949168713af2353262f5b",
    measurementId: "G-C4CVCPRJQ8"
};
// Initialize Firebase
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.getStorage)(app);
const authFirebase = (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$h": () => (/* binding */ notificationSuccess),
/* harmony export */   "YZ": () => (/* binding */ notificationError)
/* harmony export */ });
/* unused harmony export notificationWarning */
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);

const notificationSuccess = (message)=>{
    antd__WEBPACK_IMPORTED_MODULE_0__.notification.success({
        message: message
    });
};
const notificationWarning = (message)=>{
    notification.warning({
        message: message
    });
};
const notificationError = (message)=>{
    antd__WEBPACK_IMPORTED_MODULE_0__.notification.error({
        message: message
    });
};


/***/ })

};
;