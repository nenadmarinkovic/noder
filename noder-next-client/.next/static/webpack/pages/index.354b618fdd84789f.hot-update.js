"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Data.js":
/*!****************************!*\
  !*** ./components/Data.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_nenad_Development_noder_noder_next_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_nenad_Development_noder_noder_next_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nenad_Development_noder_noder_next_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Edit */ \"./components/Edit.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\nfunction Data(param) {\n    var todo1 = param.todo;\n    var _this = this;\n    var deleteTodo1 = function() {\n        var _ref = _asyncToGenerator(_Users_nenad_Development_noder_noder_next_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n            var deleteTodo;\n            return _Users_nenad_Development_noder_noder_next_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return fetch(\"http://localhost:4000/todos/\".concat(id), {\n                            method: \"DELETE\"\n                        });\n                    case 3:\n                        deleteTodo = _ctx.sent;\n                        _ctx.next = 9;\n                        break;\n                    case 6:\n                        _ctx.prev = 6;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.error(_ctx.t0.message);\n                    case 9:\n                        _ctx.prev = 9;\n                        window.location = \"/\";\n                        return _ctx.finish(9);\n                    case 12:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    6,\n                    9,\n                    12\n                ]\n            ]);\n        }));\n        return function deleteTodo1(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"table\", {\n            className: \"table mt-5 text-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"thead\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                children: \"Description\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nenad/Development/noder/noder-next-client/components/Data.js\",\n                                lineNumber: 23,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                children: \"Edit\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nenad/Development/noder/noder-next-client/components/Data.js\",\n                                lineNumber: 24,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nenad/Development/noder/noder-next-client/components/Data.js\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nenad/Development/noder/noder-next-client/components/Data.js\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/nenad/Development/noder/noder-next-client/components/Data.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tbody\", {\n                    children: todo1.map(function(todo) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                    children: todo.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/nenad/Development/noder/noder-next-client/components/Data.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Edit__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        todo: todo\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nenad/Development/noder/noder-next-client/components/Data.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/nenad/Development/noder/noder-next-client/components/Data.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-danger\",\n                                        onClick: function() {\n                                            return deleteTodo1(todo.todo_id);\n                                        },\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nenad/Development/noder/noder-next-client/components/Data.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/nenad/Development/noder/noder-next-client/components/Data.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, todo.todo_id, true, {\n                            fileName: \"/Users/nenad/Development/noder/noder-next-client/components/Data.js\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/nenad/Development/noder/noder-next-client/components/Data.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nenad/Development/noder/noder-next-client/components/Data.js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = Data;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Data);\nvar _c;\n$RefreshReg$(_c, \"Data\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RhdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUVBO0FBRTFCLFNBQVNFLElBQUksQ0FBQyxLQUFRLEVBQUU7UUFBVixLQUFNLEdBQU4sS0FBUSxDQUFOQyxJQUFJOztJQUNsQixJQUFNQyxXQUFVO21CQUFHLCtMQUFPQyxFQUFFLEVBQUs7Z0JBRXZCRCxVQUFVOzs7Ozs7K0JBQVNFLEtBQUssQ0FBQyw4QkFBNkIsQ0FBSyxPQUFIRCxFQUFFLENBQUUsRUFBRTs0QkFDbEVFLE1BQU0sRUFBRSxRQUFRO3lCQUNqQixDQUFDOzt3QkFGSUgsVUFBVSxZQUVkOzs7Ozs7d0JBRUZJLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxRQUFJQyxPQUFPLENBQUMsQ0FBQzs7O3dCQUUzQkMsTUFBTSxDQUFDQyxRQUFRLEdBQUcsR0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7OztTQUV6Qjt3QkFWS1QsV0FBVSxDQUFVQyxFQUFFOzs7T0FVM0I7SUFFRCxxQkFDRTtrQkFDRSw0RUFBQ1MsT0FBSztZQUFDQyxTQUFTLEVBQUMsd0JBQXdCOzs4QkFDdkMsOERBQUNDLE9BQUs7OEJBQ0osNEVBQUNDLElBQUU7OzBDQUNELDhEQUFDQyxJQUFFOzBDQUFDLGFBQVc7Ozs7O29DQUFLOzBDQUNwQiw4REFBQ0EsSUFBRTswQ0FBQyxNQUFJOzs7OztvQ0FBSzswQ0FDYiw4REFBQ0EsSUFBRTswQ0FBQyxRQUFNOzs7OztvQ0FBSzs7Ozs7OzRCQUNaOzs7Ozt3QkFDQzs4QkFDUiw4REFBQ0MsT0FBSzs4QkFDSGhCLEtBQUksQ0FBQ2lCLEdBQUcsQ0FBQyxTQUFDakIsSUFBSTs2Q0FDYiw4REFBQ2MsSUFBRTs7OENBQ0QsOERBQUNJLElBQUU7OENBQUVsQixJQUFJLENBQUNtQixXQUFXOzs7Ozt5Q0FBTTs4Q0FDM0IsOERBQUNELElBQUU7OENBQ0QsNEVBQUNwQiw2Q0FBSTt3Q0FBQ0UsSUFBSSxFQUFFQSxJQUFJOzs7Ozs2Q0FBSTs7Ozs7eUNBQ2pCOzhDQUNMLDhEQUFDa0IsSUFBRTs4Q0FDRCw0RUFBQ0UsUUFBTTt3Q0FDTFIsU0FBUyxFQUFDLGdCQUFnQjt3Q0FDMUJTLE9BQU8sRUFBRTttREFBTXBCLFdBQVUsQ0FBQ0QsSUFBSSxDQUFDc0IsT0FBTyxDQUFDO3lDQUFBO2tEQUN4QyxRQUVEOzs7Ozs2Q0FBUzs7Ozs7eUNBQ047OzJCQVpFdEIsSUFBSSxDQUFDc0IsT0FBTzs7OztpQ0FhaEI7cUJBQ04sQ0FBQzs7Ozs7d0JBQ0k7Ozs7OztnQkFDRjtxQkFDUCxDQUNIO0NBQ0g7QUE1Q1F2QixLQUFBQSxJQUFJO0FBOENiLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXRhLmpzPzY3YzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgRWRpdCBmcm9tIFwiLi9FZGl0XCI7XG5cbmZ1bmN0aW9uIERhdGEoeyB0b2RvIH0pIHtcbiAgY29uc3QgZGVsZXRlVG9kbyA9IGFzeW5jIChpZCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkZWxldGVUb2RvID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC90b2Rvcy8ke2lkfWAsIHtcbiAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvXCI7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSBtdC01IHRleHQtY2VudGVyXCI+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+RGVzY3JpcHRpb248L3RoPlxuICAgICAgICAgICAgPHRoPkVkaXQ8L3RoPlxuICAgICAgICAgICAgPHRoPkRlbGV0ZTwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHt0b2RvLm1hcCgodG9kbykgPT4gKFxuICAgICAgICAgICAgPHRyIGtleT17dG9kby50b2RvX2lkfT5cbiAgICAgICAgICAgICAgPHRkPnt0b2RvLmRlc2NyaXB0aW9ufTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICA8RWRpdCB0b2RvPXt0b2RvfSAvPlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlVG9kbyh0b2RvLnRvZG9faWQpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGE7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJFZGl0IiwiRGF0YSIsInRvZG8iLCJkZWxldGVUb2RvIiwiaWQiLCJmZXRjaCIsIm1ldGhvZCIsImNvbnNvbGUiLCJlcnJvciIsImVyciIsIm1lc3NhZ2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInRhYmxlIiwiY2xhc3NOYW1lIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJtYXAiLCJ0ZCIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIiwib25DbGljayIsInRvZG9faWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Data.js\n");

/***/ })

});