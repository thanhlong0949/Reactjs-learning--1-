"use strict";
exports.id = 48;
exports.ids = [48];
exports.modules = {

/***/ 48:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_utils_convert_ConvertHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3461);





function FilterGroupGlobal(props) {
    const { listSearchText , listSelectOption , listDatePicker , listCascader  } = props;
    const { Search  } = antd__WEBPACK_IMPORTED_MODULE_2__.Input;
    const { RangePicker  } = antd__WEBPACK_IMPORTED_MODULE_2__.DatePicker;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "group-filter-global",
        children: [
            listSearchText && listSearchText.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
                    title: item.tooltip,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Search, {
                        placeholder: item.placeHolder ?? "T\xecm kiếm...",
                        allowClear: true,
                        onSearch: item.onSearch,
                        style: {
                            width: item.width ? item.width : 200
                        },
                        className: "search-text",
                        enterButton: true,
                        maxLength: item.maxLength
                    })
                }, index)),
            listCascader && listCascader.map((item, index)=>// <Tooltip key={index} title={item.tooltip}>
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Cascader, {
                    options: item.optionGroup,
                    onChange: item.onChangeCascader,
                    placeholder: item.placeHolder,
                    className: "slect-option"
                }, index)),
            listSelectOption && listSelectOption.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
                    title: item.tooltip,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            marginRight: 10
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                style: {
                                    marginRight: 3
                                },
                                children: [
                                    item.title,
                                    ": "
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Select, {
                                mode: item.mode,
                                // allowClear
                                value: item.value,
                                placeholder: item.placeholder,
                                defaultValue: item.defaultValue,
                                style: {
                                    width: item.width ? item.width : 200
                                },
                                onChange: item.handleChange,
                                options: item.optionSelect,
                                className: "slect-option",
                                loading: item.loading
                            })
                        ]
                    })
                }, index)),
            listDatePicker && listDatePicker.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
                    title: item.tooltip,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            marginLeft: 10
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                style: {
                                    marginRight: 3
                                },
                                children: [
                                    item.title,
                                    ": "
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RangePicker, {
                                onChange: (dates)=>{
                                    let startTime = 0;
                                    let endTime = 0;
                                    if (dates && dates.length > 0) {
                                        startTime = (0,_app_utils_convert_ConvertHelper__WEBPACK_IMPORTED_MODULE_3__/* .convertTime */ .rJ)(dates[0]);
                                        endTime = (0,_app_utils_convert_ConvertHelper__WEBPACK_IMPORTED_MODULE_3__/* .convertTime */ .rJ)(dates[1], true);
                                    }
                                    item.onChange(startTime, endTime);
                                },
                                style: {
                                    width: item.width ? item.width : 250
                                },
                                className: "date-picker",
                                format: "DD-MM-YYYY"
                            })
                        ]
                    })
                }, index))
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterGroupGlobal);


/***/ })

};
;