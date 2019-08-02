/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
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
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Mvvm__ = __webpack_require__(2);


 new __WEBPACK_IMPORTED_MODULE_0__Mvvm__["a" /* default */]({
     el:'#app',
     data(){
         return {
             name:"mayuyu"
         }
     }
 })


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Compile {
    constructor(el, vm) {
        this.el = document.querySelector(el);
        this.vm = vm;
        // 如过传入的根元素存在，才开始编译
        if (this.el && this.isElementNode(this.el)) {
            // 1、把这些真实的 Dom 移动到内存中，即 fragment（文档碎片）
            let fragment = this.node2fragment(this.el);
            //2、将模板中的指令中的变量和 {{}} 中的变量替换成真实的数据
            this.compile(fragment);
        }
    }

    /* 辅助方法 */
    // 判断是否是元素节点
    isElementNode(node) {
        return node.nodeType === 1;
    }
    // 判断属性是否为指令
    isDirective(name) {
        return name.includes("v-");
    }
    /* 核心方法 */
    // 将根节点转移至文档碎片
    node2fragment(el) {
        // 创建文档碎片
        let fragment = document.createDocumentFragment();
        // 第一个子节点
        let firstChild;

        // 循环取出根节点中的节点并放入文档碎片中
        while (firstChild = el.firstChild) {
            fragment.appendChild(firstChild);
        }
        return fragment;
    }
    // 解析文档碎片
    compile(fragment) {
        // 当前父节点节点的子节点，包含文本节点，类数组对象
        let childNodes = fragment.childNodes;

        // 转换成数组并循环判断每一个节点的类型
        Array.from(childNodes).forEach(node => {
            if (this.isElementNode(node)) { // 是元素节点
                // 递归编译子节点
                this.compile(node);

                // 编译元素节点的方法
                this.compileElement(node);
            } else { // 是文本节点
                // 编译文本节点的方法
                this.compileText(node);
            }
        });
    }
    // 编译元素
    compileElement(node) {
        // 取出当前节点的属性，类数组
        let attrs = node.attributes;
        Array.form(attrs).forEach(attr => {
            // 获取属性名，判断属性是否为指令，即含 v-
            let attrName = attr.name;

            if (this.isDirective(attrName)) {
                // 如果是指令，取到该属性值得变量在 data 中对应得值，替换到节点中
                let exp = attr.value;

                // 取出方法名
                let [, type] = attrName.split("-");

                // 调用指令对应得方法
                CompileUtil[type](node, this.vm, exp);
            }
        });

    }
    // 编译文本
    compileText(node) {
        // 获取文本节点的内容
        let exp = node.contentText;

        // 创建匹配 {{}} 的正则表达式
        let reg = /\{\{([^}+])\}\}/g;

        // 如果存在 {{}} 则使用 text 指令的方法
        if (reg.test(exp)) {
            CompileUtil["text"](node, this.vm, exp);
        }
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Compile);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compile__ = __webpack_require__(1);


class MVVM {
    constructor(options) {
        // 先把 el 和 data 挂在 MVVM 实例上
        this.$el = options.el;
        this.$data = options.data;
        console.log(this.$el)
        // 如果有要编译的模板就开始编译
        if (this.$el) {
            // 数据劫持，就是把对象所有的属性添加 get 和 set
            //new Observer(this.$data);

            // 将数据代理到实例上
            //this.proxyData(this.$data);

            // 用数据和元素进行编译
            new __WEBPACK_IMPORTED_MODULE_0__compile__["a" /* default */](this.$el, this);
        }
    }
    proxyData(data) { // 代理数据的方法
        Object.keys(data).forEach(key => {
            Object.defineProperty(this, key, {
                get() {
                    return data[key];
                },
                set(newVal) {
                    data[key] = newVal;
                }
            });
        });
    }
}
/* harmony default export */ __webpack_exports__["a"] = (MVVM);


/***/ })
/******/ ]);