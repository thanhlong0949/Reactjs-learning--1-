"use strict";
exports.id = 264;
exports.ids = [264];
exports.modules = {

/***/ 264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_i": () => (/* binding */ fetcher),
  "kS": () => (/* binding */ logout)
});

// UNUSED EXPORTS: fetcherWithMetadata

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);
// EXTERNAL MODULE: ./config/index.tsx
var config_0 = __webpack_require__(232);
// EXTERNAL MODULE: ./redux/store.tsx + 2 modules
var redux_store = __webpack_require__(4556);
;// CONCATENATED MODULE: ./api/ErrorMessage/ListErrorMessage.tsx
const ListErrorMessage = [
    {
        error_code: "unique.ValidatorInvalid",
        description: "L\xf4̃i validate",
        message: "Đ\xe3 c\xf3 lỗi xảy ra"
    }, 
];
/* harmony default export */ const ErrorMessage_ListErrorMessage = (ListErrorMessage);

// EXTERNAL MODULE: ./redux/slices/UserSlice.tsx
var UserSlice = __webpack_require__(4673);
;// CONCATENATED MODULE: ./api/Fetcher.tsx







function logout() {
    redux_store/* persistor.purge */.D.purge().then(()=>{
        redux_store/* default.dispatch */.Z.dispatch((0,UserSlice/* logoutUser */.TX)());
    // window.location.href = "/login";
    }).catch(()=>{
        // eslint-disable-next-line no-alert
        window.alert("Tr\xecnh duyệt bị lỗi. X\xf3a Cookie tr\xecnh duyệt v\xe0 thử lại");
    });
}
function confirmLogout(msg, cnt, isRequiredLogOut) {
    logout();
// Modal.destroyAll();
// if (!isRequiredLogOut) {
//   Modal.confirm({
//     title: msg,
//     content: cnt,
//     onOk: (): void => logout(),
//     // onCancel: (): void => logout(),
//   });
// } else {
//   Modal.confirm({
//     title: msg,
//     content: cnt,
//     onOk: (): void => logout(),
//     onCancel: (): void => logout(),
//   });
// }
}
function displayError(dataError) {
    try {
        const { errorCode  } = dataError;
        let errorMessage;
        let errorMessageMain;
        const error = ErrorMessage_ListErrorMessage.find((dt)=>dt.error_code === errorCode);
        if (error) {
            errorMessage = error.description;
            errorMessageMain = error === null || error === void 0 ? void 0 : error.message;
        } else {
            errorMessage = dataError.errorMessage ?? "Somethings Wrong";
        }
        external_antd_.notification.error({
            message: errorMessageMain || "C\xf3 lỗi xảy ra. H\xe3y thử lại!",
            description: errorMessage,
            duration: 3
        });
    } catch (e) {
        external_antd_.notification.error({
            message: "C\xf3 lỗi xảy ra. H\xe3y thử lại!",
            description: external_lodash_default().toString(e),
            duration: 3
        });
    }
}
function handleRefreshToken() {
    return new Promise((resolve)=>{
        var ref;
        fetcher({
            url: "/auth/refresh-token",
            method: "post",
            data: {
                refreshToken: (ref = redux_store/* default.getState */.Z.getState().user) === null || ref === void 0 ? void 0 : ref.refreshToken
            }
        }, {
            displayError: false
        }).then((res)=>{
            redux_store/* default.dispatch */.Z.dispatch((0,UserSlice/* loginUser */.pH)(res));
            resolve(true);
        }).catch(()=>{
            resolve(false);
        });
    });
}
async function fetcher(config, options = {}) {
    const defaultOptions = {
        withToken: config_0/* default.NETWORK_CONFIG.USE_TOKEN */.Z.NETWORK_CONFIG.USE_TOKEN,
        withMetadata: config_0/* default.NETWORK_CONFIG.WITH_METADATA */.Z.NETWORK_CONFIG.WITH_METADATA,
        displayError: config_0/* default.NETWORK_CONFIG.DISPLAY_ERROR */.Z.NETWORK_CONFIG.DISPLAY_ERROR,
        ...options
    };
    const apiClient = external_axios_default().create({
        headers: {
            "Content-Type": "application/json"
        },
        baseURL: "https://lobster-app-uadur.ondigitalocean.app/api",
        timeout: config_0/* default.NETWORK_CONFIG.TIMEOUT */.Z.NETWORK_CONFIG.TIMEOUT
    });
    // Access Token
    if (defaultOptions.token) {
        apiClient.defaults.headers.common.Authorization = `Bearer ${defaultOptions.token}`;
    } else {
        if (defaultOptions.withToken) {
            var ref, ref1, ref2;
            const state = redux_store/* default.getState */.Z.getState();
            const token = ((ref = state.user) === null || ref === void 0 ? void 0 : ref.accesstoken) ?? ((ref1 = state.user) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.stsTokenManager) === null || ref2 === void 0 ? void 0 : ref2.accesstoken);
            if (token) {
                apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;
            }
        }
    }
    return new Promise((resolve, reject)=>{
        apiClient.request(config).then(async (response)=>{
            // console.log("response fetcher", response);
            if (response.data) {
                if (response.data.data === undefined) {
                    const dataEmpty = {
                        errorCode: "ERROR???",
                        errorMessage: "Data is empty"
                    };
                    if (defaultOptions.displayError) {
                        displayError(dataEmpty);
                    }
                    reject(dataEmpty);
                    return;
                }
                resolve(response.data.data);
                return;
            }
            const dataError = {
                errorCode: response.data,
                errorMessage: response.data
            };
            if ((dataError === null || dataError === void 0 ? void 0 : dataError.errorCode) === "AUTH000221") {
                try {
                    const checkRefresh = await handleRefreshToken();
                    if (checkRefresh) {
                        const data = await fetcher(config, options);
                        resolve(data);
                    } else {
                    // confirmLogout(
                    //   "Phiên đăng nhập hết hạn",
                    //   "Vui lòng đăng nhập lại!",
                    //   false
                    // );
                    }
                    return;
                } catch (error) {
                    confirmLogout("Phi\xean đăng nhập hết hạn", "Vui l\xf2ng đăng nhập lại!", false);
                    return;
                }
            }
            if ((dataError === null || dataError === void 0 ? void 0 : dataError.errorCode) === "AUTH000220") {
                confirmLogout("Phi\xean đăng nhập hết hạn", "Vui l\xf2ng đăng nhập lại!", true);
                return;
            }
            if ((dataError === null || dataError === void 0 ? void 0 : dataError.errorCode) === "JWT000201" || (dataError === null || dataError === void 0 ? void 0 : dataError.errorCode) === "ROLE011G" || (dataError === null || dataError === void 0 ? void 0 : dataError.errorCode) === "JWT011G") {
                confirmLogout("Bạn chưa đăng nhập", "Vui l\xf2ng đăng nhập để sử dụng chức năng n\xe0y!", false);
                return;
            }
            if (defaultOptions.displayError) {
                displayError(dataError);
            }
            reject(dataError);
        }).catch((error)=>{
            if (external_axios_default().isAxiosError(error)) {
                var ref;
                // Axios error
                const somethingsWrong = {
                    errorCode: "ERROR???",
                    errorMessage: "Somethings Wrong"
                };
                const dataError = (error === null || error === void 0 ? void 0 : (ref = error.response) === null || ref === void 0 ? void 0 : ref.data) ?? somethingsWrong;
                if ((dataError === null || dataError === void 0 ? void 0 : dataError.errorCode) === "AUTH3001.NotAuthenticated") {
                    redux_store/* persistor.purge */.D.purge().then(()=>{
                        window.location.reload();
                    }).catch(()=>{
                        // eslint-disable-next-line no-alert
                        window.alert("Tr\xecnh duyệt bị lỗi. X\xf3a Cookie tr\xecnh duyệt v\xe0 thử lại");
                    });
                } else {
                    if (defaultOptions.displayError) {
                        displayError(dataError);
                    }
                }
            } else {
                // Native error
                external_antd_.notification.error({
                    message: "C\xf3 lỗi xảy ra. H\xe3y thử lại!",
                    description: external_lodash_default().toString(error)
                });
            }
            return reject(error);
        });
    });
}
async function fetcherWithMetadata(config, options = {}) {
    const defaultOptions = {
        withToken: Config.NETWORK_CONFIG.USE_TOKEN,
        withMetadata: true,
        displayError: Config.NETWORK_CONFIG.DISPLAY_ERROR,
        ...options
    };
    const apiClient = axios.create({
        headers: {
            "Content-Type": "application/json"
        },
        baseURL: Config.NETWORK_CONFIG.API_BASE_URL,
        timeout: Config.NETWORK_CONFIG.TIMEOUT
    });
    // Access Token
    if (defaultOptions.withToken) {
        var ref;
        const state = store.getState();
        const token = (ref = state.user) === null || ref === void 0 ? void 0 : ref.accesstoken;
        if (token) {
            apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;
        }
    }
    return new Promise((resolve, reject)=>{
        apiClient.request(config).then(async (response)=>{
            if (response.data.success) {
                if (response.data.data === undefined) {
                    const dataEmpty = {
                        errorCode: "ERROR???",
                        errorMessage: "Data is empty"
                    };
                    if (defaultOptions.displayError) {
                        displayError(dataEmpty);
                    }
                    reject(dataEmpty);
                    return;
                }
                resolve({
                    data: response.data.data,
                    meta: response.data.meta
                });
                return;
            }
            const dataError = {
                errorCode: response.data.errorCode,
                errorMessage: response.data.message
            };
            if ((dataError === null || dataError === void 0 ? void 0 : dataError.errorCode) === "AUTH000221") {
                try {
                    const checkRefresh = await handleRefreshToken();
                    if (checkRefresh) {
                        const data = await fetcher(config, options);
                        resolve(data);
                    } else {
                    // confirmLogout(
                    //   "Phiên đăng nhập hết hạn",
                    //   "Vui lòng đăng nhập lại!",
                    //   false
                    // );
                    }
                    return;
                } catch (error) {
                    confirmLogout("Phi\xean đăng nhập hết hạn", "Vui l\xf2ng đăng nhập lại!", false);
                    return;
                }
            }
            if ((dataError === null || dataError === void 0 ? void 0 : dataError.errorCode) === "AUTH000220") {
                confirmLogout("Phi\xean đăng nhập hết hạn", "Vui l\xf2ng đăng nhập lại!", true);
                return;
            }
            if ((dataError === null || dataError === void 0 ? void 0 : dataError.errorCode) === "JWT000201" || (dataError === null || dataError === void 0 ? void 0 : dataError.errorCode) === "AUTH000220") {
                confirmLogout("Bạn chưa đăng nhập", "Vui l\xf2ng đăng nhập để sử dụng chức năng n\xe0y!", false);
                return;
            }
            if (defaultOptions.displayError) {
                displayError(dataError);
            }
            reject(dataError);
        }).catch((error)=>{
            if (axios.isAxiosError(error)) {
                var ref;
                // Axios error
                const somethingsWrong = {
                    errorCode: "ERROR???",
                    errorMessage: "Somethings Wrong"
                };
                const dataError = (error === null || error === void 0 ? void 0 : (ref = error.response) === null || ref === void 0 ? void 0 : ref.data) ?? somethingsWrong;
                if ((dataError === null || dataError === void 0 ? void 0 : dataError.errorCode) === "AUTH3001.NotAuthenticated") {
                    persistor.purge().then(()=>{
                        window.location.reload();
                    }).catch(()=>{
                        // eslint-disable-next-line no-alert
                        window.alert("Tr\xecnh duyệt bị lỗi. X\xf3a Cookie tr\xecnh duyệt v\xe0 thử lại");
                    });
                } else {
                    if (defaultOptions.displayError) {
                        displayError(dataError);
                    }
                }
            } else {
            // Native error
            // notification.error({
            //   message: "Có lỗi xảy ra. Hãy thử lại!",
            //   description: _.toString(error),
            //   duration: 3,
            // });
            }
            return reject(error);
        });
    });
}


/***/ }),

/***/ 3627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fV": () => (/* binding */ noRememberAccount),
/* harmony export */   "zh": () => (/* binding */ rememberAccount)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    isRemember: true
};
const RememberAccountSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "remember",
    initialState,
    reducers: {
        rememberAccount: (state)=>{
            state.isRemember = true;
        },
        noRememberAccount: (state)=>{
            state.isRemember = false;
        }
    }
});
const { rememberAccount , noRememberAccount  } = RememberAccountSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RememberAccountSlice.reducer);


/***/ }),

/***/ 4673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TX": () => (/* binding */ logoutUser),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "pH": () => (/* binding */ loginUser)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {};
const UserSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "user",
    initialState,
    reducers: {
        loginUser: (_, action)=>{
            return action.payload;
        },
        logoutUser: ()=>{
            return initialState;
        }
    }
});
// Action creators are generated for each case reducer function
const { loginUser , logoutUser  } = UserSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserSlice.reducer);


/***/ }),

/***/ 844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nb": () => (/* binding */ categorys),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export clearCategory */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = [];
const CategorySlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "Category",
    initialState,
    reducers: {
        categorys: (_, action)=>{
            return action.payload;
        },
        clearCategory: ()=>{
            return initialState;
        }
    }
});
// Action creators are generated for each case reducer function
const { categorys , clearCategory  } = CategorySlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategorySlice.reducer);


/***/ }),

/***/ 4556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ redux_store),
  "D": () => (/* binding */ persistor)
});

// EXTERNAL MODULE: ./config/index.tsx
var config = __webpack_require__(232);
// EXTERNAL MODULE: external "redux-persist/lib/storage/createWebStorage"
var createWebStorage_ = __webpack_require__(7388);
// EXTERNAL MODULE: external "redux-persist"
var external_redux_persist_ = __webpack_require__(4161);
// EXTERNAL MODULE: ./redux/slices/UserSlice.tsx
var UserSlice = __webpack_require__(4673);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: ./redux/slices/MenuSlice.tsx

const initialState = {
    isOpen: false
};
const MenuSlice = (0,toolkit_.createSlice)({
    name: "menu",
    initialState,
    reducers: {
        openMenu: (state)=>{
            state.isOpen = true;
        },
        closeMenu: (state)=>{
            state.isOpen = false;
        },
        toggleMenu: (state)=>{
            state.isOpen = true;
        }
    }
});
// Action creators are generated for each case reducer function
const { openMenu , closeMenu , toggleMenu  } = MenuSlice.actions;
/* harmony default export */ const slices_MenuSlice = (MenuSlice.reducer);

;// CONCATENATED MODULE: ./redux/slices/LanguageSlice.tsx

const LanguageSlice_initialState = {
    lang: "vi"
};
const LanguageSlice = (0,toolkit_.createSlice)({
    name: "language",
    initialState: LanguageSlice_initialState,
    reducers: {
        changeLang: (state, actions)=>{
            state.lang = actions.payload;
        }
    }
});
const { changeLang  } = LanguageSlice.actions;
/* harmony default export */ const slices_LanguageSlice = (LanguageSlice.reducer);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
// EXTERNAL MODULE: ./redux/slices/RememberAccountSlice.tsx
var RememberAccountSlice = __webpack_require__(3627);
// EXTERNAL MODULE: ./redux/slices/categorySlice.tsx
var categorySlice = __webpack_require__(844);
;// CONCATENATED MODULE: ./redux/store.tsx










// import sessionStorage from "redux-persist/lib/storage/session";
const createNoopStorage = ()=>{
    return {
        getItem (_key) {
            return Promise.resolve(null);
        },
        setItem (_key, value) {
            return Promise.resolve(value);
        },
        removeItem (_key) {
            return Promise.resolve();
        }
    };
};
const storage =  false ? 0 : createNoopStorage();
const persistConfig = {
    key: config/* default.STORE_NAME */.Z.STORE_NAME,
    version: 1,
    storage: storage
};
// const persistConfigNotRemember = {
//   key: Config.STORE_NAME,
//   storage: sessionStorage,
//   version: 1,
// };
const rootReducers = (0,external_redux_.combineReducers)({
    user: UserSlice/* default */.ZP,
    menu: slices_MenuSlice,
    language: slices_LanguageSlice,
    remember: RememberAccountSlice/* default */.ZP,
    category: categorySlice/* default */.ZP
});
const persistedReducer = (0,external_redux_persist_.persistReducer)(persistConfig, rootReducers);
const store = (0,toolkit_.configureStore)({
    reducer: persistedReducer,
    devTools: "production" !== "production",
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    external_redux_persist_.FLUSH,
                    external_redux_persist_.REHYDRATE,
                    external_redux_persist_.PAUSE,
                    external_redux_persist_.PERSIST,
                    external_redux_persist_.PURGE,
                    external_redux_persist_.REGISTER
                ]
            }
        })
});
const persistor = (0,external_redux_persist_.persistStore)(store);
/* harmony default export */ const redux_store = (store);


/***/ })

};
;