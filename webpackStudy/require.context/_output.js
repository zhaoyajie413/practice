/******/ (function(modules) { // webpackBootstrap

    /******/ 	// 缓存
    /******/ 	var installedModules = {};
    /******/
    /******/ 	// The require function
                //moduleId 是下标
    /******/ 	function __webpack_require__(moduleId) {
        /******/
        /******/ 		// 如果有缓存就返回缓存
        /******/ 		if(installedModules[moduleId]) {
            /******/ 			return installedModules[moduleId].exports;
            /******/ 		}
        /******/ 		// 创建一个模块并且把模块放入缓存
        /******/ 		var module = installedModules[moduleId] = {
            /******/ 			i: moduleId,
            /******/ 			l: false,
            /******/ 			exports: {}
            /******/ 		};
        /******/          //modules传入的函数组
                          // modules[moduleId] 单个的函数
        /******/ 		// 执行初始化函数
        /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ 		// 标记模块已加载
        /******/ 		module.l = true;
        /******/        console.log(module.exports)
        /******/ 		// Return the exports of the module
        /******/ 		return module.exports;
        /******/ 	}
    /******/
    /******/
    /******/ 	// 向外导出模块对象
    /******/ 	__webpack_require__.m = modules;
    /******/
    /******/ 	// 向外导出模块缓存
    /******/ 	__webpack_require__.c = installedModules;
    /******/
    /******/ 	// 定义getter方法兼容 exports
    /******/ 	__webpack_require__.d = function(exports, name, getter) {
        /******/ 		if(!__webpack_require__.o(exports, name)) {
            /******/ 			Object.defineProperty(exports, name, {
                /******/ 				configurable: false,
                /******/ 				enumerable: true,
                /******/ 				get: getter
                /******/ 			});
            /******/ 		}
        /******/ 	};
    /******/
    /******/ 	// 用于与非协调模块兼容的getdefaultexport函数
    /******/ 	__webpack_require__.n = function(module) {
        /******/ 		var getter = module && module.__esModule ?
            /******/ 			function getDefault() { return module['default']; } :
            /******/ 			function getModuleExports() { return module; };
        /******/ 		__webpack_require__.d(getter, 'a', getter);
        /******/ 		return getter;
        /******/ 	};
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /******/
    /******/ 	// 公共路径
    /******/ 	__webpack_require__.p = "";
    /******/
    /******/ 	// 加载入口模块和返回导出
    /******/ 	return __webpack_require__(__webpack_require__.s = 1);
    /******/ })
            //传参
/******/ ([
    /* 0 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        const api = Object.create(null)

        //返回的缓存 module.exports
        const modules = __webpack_require__(3)
        console.log(modules)
        modules.keys().forEach(function (key) {
            if (key !== './index.js') {
                Object.assign(api, modules(key))
            }
        })
        /* harmony default export */ __webpack_exports__["default"] = (api);


        /***/ }),
    /* 1 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mayu_txt__ = __webpack_require__(2);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_index__ = __webpack_require__(0);



        console.log(__WEBPACK_IMPORTED_MODULE_1__js_index__["default"])
        console.log(__WEBPACK_IMPORTED_MODULE_0__mayu_txt__["a" /* default */])



        /***/ }),
    /* 2 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony default export */ __webpack_exports__["a"] = ("渡边麻友\r\n");

        /***/ }),
    /* 3 */
    /***/ (function(module, exports, __webpack_require__) {

        var map = {
            "./index.js": 0,
            "./location.js": 4,
            "./mayu.js": 5
        };
        function webpackContext(req) {
            return __webpack_require__(webpackContextResolve(req));
        };
        function webpackContextResolve(req) {
            var id = map[req];
            if(!(id + 1)) // check for number or string
                throw new Error("Cannot find module '" + req + "'.");
            return id;
        };
        webpackContext.keys = function webpackContextKeys() {
            return Object.keys(map);
        };
        webpackContext.resolve = webpackContextResolve;
        module.exports = webpackContext;
        webpackContext.id = 3;

        /***/ }),
    /* 4 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony export (immutable) */ __webpack_exports__["openLocation"] = openLocation;
        function openLocation ({
                                   latitude,
                                   longitude,
                                   scale,
                                   name,
                                   address
                               }, callbackId) {
            const {
                invokeCallbackHandler: invoke
            } = UniServiceJSBridge

            getApp().$router.push({
                type: 'navigateTo',
                path: '/open-location',
                query: {
                    latitude,
                    longitude,
                    scale,
                    name,
                    address
                }
            }, function () {
                invoke(callbackId, {
                    errMsg: 'openLocation:ok'
                })
            }, function () {
                invoke(callbackId, {
                    errMsg: 'openLocation:fail'
                })
            })
        }


        /***/ }),
    /* 5 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        const mayu = {
            name : "mayuyu",
            age : 26
        }
        /* harmony export (immutable) */ __webpack_exports__["mayu"] = mayu;



        /***/ })
    /******/ ]);
