"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/loginpage/test";
exports.ids = ["pages/loginpage/test"];
exports.modules = {

/***/ "./src/pages/loginpage/test.js":
/*!*************************************!*\
  !*** ./src/pages/loginpage/test.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst App = ()=>{\n    const onFinish = (values)=>{\n        console.log(\"Success:\", values);\n    };\n    const onFinishFailed = (errorInfo)=>{\n        console.log(\"Failed:\", errorInfo);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form, {\n        name: \"basic\",\n        labelCol: {\n            span: 8\n        },\n        wrapperCol: {\n            span: 16\n        },\n        initialValues: {\n            remember: true\n        },\n        onFinish: onFinish,\n        onFinishFailed: onFinishFailed,\n        autoComplete: \"off\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {\n                label: \"Username\",\n                name: \"username\",\n                rules: [\n                    {\n                        required: true,\n                        message: \"Please input your username!\"\n                    }\n                ],\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {}, void 0, false, {\n                    fileName: \"/Users/jimimkim/Desktop/greenyday/frontend/src/pages/loginpage/test.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jimimkim/Desktop/greenyday/frontend/src/pages/loginpage/test.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {\n                label: \"Password\",\n                name: \"password\",\n                rules: [\n                    {\n                        required: true,\n                        message: \"Please input your password!\"\n                    }\n                ],\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Input.Password, {}, void 0, false, {\n                    fileName: \"/Users/jimimkim/Desktop/greenyday/frontend/src/pages/loginpage/test.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jimimkim/Desktop/greenyday/frontend/src/pages/loginpage/test.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {\n                name: \"remember\",\n                valuePropName: \"checked\",\n                wrapperCol: {\n                    offset: 8,\n                    span: 16\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {\n                    children: \"Remember me\"\n                }, void 0, false, {\n                    fileName: \"/Users/jimimkim/Desktop/greenyday/frontend/src/pages/loginpage/test.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jimimkim/Desktop/greenyday/frontend/src/pages/loginpage/test.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {\n                wrapperCol: {\n                    offset: 8,\n                    span: 16\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    type: \"primary\",\n                    htmlType: \"submit\",\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"/Users/jimimkim/Desktop/greenyday/frontend/src/pages/loginpage/test.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jimimkim/Desktop/greenyday/frontend/src/pages/loginpage/test.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jimimkim/Desktop/greenyday/frontend/src/pages/loginpage/test.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW5wYWdlL3Rlc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQzJCO0FBQ3JELE1BQU1LLE1BQU0sSUFBTTtJQUNoQixNQUFNQyxXQUFXLENBQUNDLFNBQVc7UUFDM0JDLFFBQVFDLEdBQUcsQ0FBQyxZQUFZRjtJQUMxQjtJQUNBLE1BQU1HLGlCQUFpQixDQUFDQyxZQUFjO1FBQ3BDSCxRQUFRQyxHQUFHLENBQUMsV0FBV0U7SUFDekI7SUFDQSxxQkFDRSw4REFBQ1Isc0NBQUlBO1FBQ0hTLE1BQUs7UUFDTEMsVUFBVTtZQUNSQyxNQUFNO1FBQ1I7UUFDQUMsWUFBWTtZQUNWRCxNQUFNO1FBQ1I7UUFDQUUsZUFBZTtZQUNiQyxVQUFVLElBQUk7UUFDaEI7UUFDQVgsVUFBVUE7UUFDVkksZ0JBQWdCQTtRQUNoQlEsY0FBYTs7MEJBRWIsOERBQUNmLDJDQUFTO2dCQUNSaUIsT0FBTTtnQkFDTlIsTUFBSztnQkFDTFMsT0FBTztvQkFDTDt3QkFDRUMsVUFBVSxJQUFJO3dCQUNkQyxTQUFTO29CQUNYO2lCQUNEOzBCQUVELDRFQUFDbkIsdUNBQUtBOzs7Ozs7Ozs7OzBCQUdSLDhEQUFDRCwyQ0FBUztnQkFDUmlCLE9BQU07Z0JBQ05SLE1BQUs7Z0JBQ0xTLE9BQU87b0JBQ0w7d0JBQ0VDLFVBQVUsSUFBSTt3QkFDZEMsU0FBUztvQkFDWDtpQkFDRDswQkFFRCw0RUFBQ25CLGdEQUFjOzs7Ozs7Ozs7OzBCQUdqQiw4REFBQ0QsMkNBQVM7Z0JBQ1JTLE1BQUs7Z0JBQ0xhLGVBQWM7Z0JBQ2RWLFlBQVk7b0JBQ1ZXLFFBQVE7b0JBQ1JaLE1BQU07Z0JBQ1I7MEJBRUEsNEVBQUNaLDBDQUFRQTs4QkFBQzs7Ozs7Ozs7Ozs7MEJBR1osOERBQUNDLDJDQUFTO2dCQUNSWSxZQUFZO29CQUNWVyxRQUFRO29CQUNSWixNQUFNO2dCQUNSOzBCQUVBLDRFQUFDYix3Q0FBTUE7b0JBQUMwQixNQUFLO29CQUFVQyxVQUFTOzhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1qRDtBQUNBLGlFQUFldkIsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL2xvZ2lucGFnZS90ZXN0LmpzPzJjY2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBDaGVja2JveCwgRm9ybSwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBvbkZpbmlzaCA9ICh2YWx1ZXMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3M6XCIsIHZhbHVlcyk7XG4gIH07XG4gIGNvbnN0IG9uRmluaXNoRmFpbGVkID0gKGVycm9ySW5mbykgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkOlwiLCBlcnJvckluZm8pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxGb3JtXG4gICAgICBuYW1lPVwiYmFzaWNcIlxuICAgICAgbGFiZWxDb2w9e3tcbiAgICAgICAgc3BhbjogOCxcbiAgICAgIH19XG4gICAgICB3cmFwcGVyQ29sPXt7XG4gICAgICAgIHNwYW46IDE2LFxuICAgICAgfX1cbiAgICAgIGluaXRpYWxWYWx1ZXM9e3tcbiAgICAgICAgcmVtZW1iZXI6IHRydWUsXG4gICAgICB9fVxuICAgICAgb25GaW5pc2g9e29uRmluaXNofVxuICAgICAgb25GaW5pc2hGYWlsZWQ9e29uRmluaXNoRmFpbGVkfVxuICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICA+XG4gICAgICA8Rm9ybS5JdGVtXG4gICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxuICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICBydWxlcz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJQbGVhc2UgaW5wdXQgeW91ciB1c2VybmFtZSFcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgPlxuICAgICAgICA8SW5wdXQgLz5cbiAgICAgIDwvRm9ybS5JdGVtPlxuXG4gICAgICA8Rm9ybS5JdGVtXG4gICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICBydWxlcz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJQbGVhc2UgaW5wdXQgeW91ciBwYXNzd29yZCFcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgPlxuICAgICAgICA8SW5wdXQuUGFzc3dvcmQgLz5cbiAgICAgIDwvRm9ybS5JdGVtPlxuXG4gICAgICA8Rm9ybS5JdGVtXG4gICAgICAgIG5hbWU9XCJyZW1lbWJlclwiXG4gICAgICAgIHZhbHVlUHJvcE5hbWU9XCJjaGVja2VkXCJcbiAgICAgICAgd3JhcHBlckNvbD17e1xuICAgICAgICAgIG9mZnNldDogOCxcbiAgICAgICAgICBzcGFuOiAxNixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPENoZWNrYm94PlJlbWVtYmVyIG1lPC9DaGVja2JveD5cbiAgICAgIDwvRm9ybS5JdGVtPlxuXG4gICAgICA8Rm9ybS5JdGVtXG4gICAgICAgIHdyYXBwZXJDb2w9e3tcbiAgICAgICAgICBvZmZzZXQ6IDgsXG4gICAgICAgICAgc3BhbjogMTYsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgIFN1Ym1pdFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvRm9ybS5JdGVtPlxuICAgIDwvRm9ybT5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b24iLCJDaGVja2JveCIsIkZvcm0iLCJJbnB1dCIsIkFwcCIsIm9uRmluaXNoIiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsIm9uRmluaXNoRmFpbGVkIiwiZXJyb3JJbmZvIiwibmFtZSIsImxhYmVsQ29sIiwic3BhbiIsIndyYXBwZXJDb2wiLCJpbml0aWFsVmFsdWVzIiwicmVtZW1iZXIiLCJhdXRvQ29tcGxldGUiLCJJdGVtIiwibGFiZWwiLCJydWxlcyIsInJlcXVpcmVkIiwibWVzc2FnZSIsIlBhc3N3b3JkIiwidmFsdWVQcm9wTmFtZSIsIm9mZnNldCIsInR5cGUiLCJodG1sVHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/loginpage/test.js\n");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/loginpage/test.js"));
module.exports = __webpack_exports__;

})();