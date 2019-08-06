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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./quill.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../Program Files/nodejs/node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "../../../../../../Program Files/nodejs/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../../../../../../Program Files/nodejs/node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "../../../../../../Program Files/nodejs/node_modules/webpack/node_modules/base64-js/index.js":
/*!*************************************************!*\
  !*** (webpack)/node_modules/base64-js/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "../../../../../../Program Files/nodejs/node_modules/webpack/node_modules/buffer/index.js":
/*!**********************************************!*\
  !*** (webpack)/node_modules/buffer/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "../../../../../../Program Files/nodejs/node_modules/webpack/node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "../../../../../../Program Files/nodejs/node_modules/webpack/node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "../../../../../../Program Files/nodejs/node_modules/webpack/node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../buildin/global.js */ "../../../../../../Program Files/nodejs/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../../../../../Program Files/nodejs/node_modules/webpack/node_modules/ieee754/index.js":
/*!***********************************************!*\
  !*** (webpack)/node_modules/ieee754/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "../../../../../../Program Files/nodejs/node_modules/webpack/node_modules/isarray/index.js":
/*!***********************************************!*\
  !*** (webpack)/node_modules/isarray/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./assets/icons/align-center.svg":
/*!***************************************!*\
  !*** ./assets/icons/align-center.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTggMTgiPg0KICA8bGluZSBjbGFzcz0icWwtc3Ryb2tlIiB4MT0iMTUiIHgyPSIzIiB5MT0iOSIgeTI9IjkiPjwvbGluZT4NCiAgPGxpbmUgY2xhc3M9InFsLXN0cm9rZSIgeDE9IjE0IiB4Mj0iNCIgeTE9IjE0IiB5Mj0iMTQiPjwvbGluZT4NCiAgPGxpbmUgY2xhc3M9InFsLXN0cm9rZSIgeDE9IjEyIiB4Mj0iNiIgeTE9IjQiIHkyPSI0Ij48L2xpbmU+DQo8L3N2Zz4="

/***/ }),

/***/ "./assets/icons/align-justify.svg":
/*!****************************************!*\
  !*** ./assets/icons/align-justify.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTggMTgiPg0KICA8bGluZSBjbGFzcz0icWwtc3Ryb2tlIiB4MT0iMTUiIHgyPSIzIiB5MT0iOSIgeTI9IjkiPjwvbGluZT4NCiAgPGxpbmUgY2xhc3M9InFsLXN0cm9rZSIgeDE9IjE1IiB4Mj0iMyIgeTE9IjE0IiB5Mj0iMTQiPjwvbGluZT4NCiAgPGxpbmUgY2xhc3M9InFsLXN0cm9rZSIgeDE9IjE1IiB4Mj0iMyIgeTE9IjQiIHkyPSI0Ij48L2xpbmU+DQo8L3N2Zz4="

/***/ }),

/***/ "./assets/icons/align-left.svg":
/*!*************************************!*\
  !*** ./assets/icons/align-left.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTggMTgiPg0KICA8bGluZSBjbGFzcz0icWwtc3Ryb2tlIiB4MT0iMyIgeDI9IjE1IiB5MT0iOSIgeTI9IjkiPjwvbGluZT4NCiAgPGxpbmUgY2xhc3M9InFsLXN0cm9rZSIgeDE9IjMiIHgyPSIxMyIgeTE9IjE0IiB5Mj0iMTQiPjwvbGluZT4NCiAgPGxpbmUgY2xhc3M9InFsLXN0cm9rZSIgeDE9IjMiIHgyPSI5IiB5MT0iNCIgeTI9IjQiPjwvbGluZT4NCjwvc3ZnPg=="

/***/ }),

/***/ "./assets/icons/align-right.svg":
/*!**************************************!*\
  !*** ./assets/icons/align-right.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTggMTgiPg0KICA8bGluZSBjbGFzcz0icWwtc3Ryb2tlIiB4MT0iMTUiIHgyPSIzIiB5MT0iOSIgeTI9IjkiPjwvbGluZT4NCiAgPGxpbmUgY2xhc3M9InFsLXN0cm9rZSIgeDE9IjE1IiB4Mj0iNSIgeTE9IjE0IiB5Mj0iMTQiPjwvbGluZT4NCiAgPGxpbmUgY2xhc3M9InFsLXN0cm9rZSIgeDE9IjE1IiB4Mj0iOSIgeTE9IjQiIHkyPSI0Ij48L2xpbmU+DQo8L3N2Zz4="

/***/ }),

/***/ "./assets/icons/background.svg":
/*!*************************************!*\
  !*** ./assets/icons/background.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTggMTgiPg0KICA8ZyBjbGFzcz0icWwtZmlsbCBxbC1jb2xvci1sYWJlbCI+DQogICAgPHBvbHlnb24gcG9pbnRzPSI2IDYuODY4IDYgNiA1IDYgNSA3IDUuOTQyIDcgNiA2Ljg2OCI+PC9wb2x5Z29uPg0KICAgIDxyZWN0IGhlaWdodD0iMSIgd2lkdGg9IjEiIHg9IjQiIHk9IjQiPjwvcmVjdD4NCiAgICA8cG9seWdvbiBwb2ludHM9IjYuODE3IDUgNiA1IDYgNiA2LjM4IDYgNi44MTcgNSI+PC9wb2x5Z29uPg0KICAgIDxyZWN0IGhlaWdodD0iMSIgd2lkdGg9IjEiIHg9IjIiIHk9IjYiPjwvcmVjdD4NCiAgICA8cmVjdCBoZWlnaHQ9IjEiIHdpZHRoPSIxIiB4PSIzIiB5PSI1Ij48L3JlY3Q+DQogICAgPHJlY3QgaGVpZ2h0PSIxIiB3aWR0aD0iMSIgeD0iNCIgeT0iNyI+PC9yZWN0Pg0KICAgIDxwb2x5Z29uIHBvaW50cz0iNCAxMS40MzkgNCAxMSAzIDExIDMgMTIgMy43NTUgMTIgNCAxMS40MzkiPjwvcG9seWdvbj4NCiAgICA8cmVjdCBoZWlnaHQ9IjEiIHdpZHRoPSIxIiB4PSIyIiB5PSIxMiI+PC9yZWN0Pg0KICAgIDxyZWN0IGhlaWdodD0iMSIgd2lkdGg9IjEiIHg9IjIiIHk9IjkiPjwvcmVjdD4NCiAgICA8cmVjdCBoZWlnaHQ9IjEiIHdpZHRoPSIxIiB4PSIyIiB5PSIxNSI+PC9yZWN0Pg0KICAgIDxwb2x5Z29uIHBvaW50cz0iNC42MyAxMCA0IDEwIDQgMTEgNC4xOTIgMTEgNC42MyAxMCI+PC9wb2x5Z29uPg0KICAgIDxyZWN0IGhlaWdodD0iMSIgd2lkdGg9IjEiIHg9IjMiIHk9IjgiPjwvcmVjdD4NCiAgICA8cGF0aCBkPSJNMTAuODMyLDQuMkwxMSw0LjU4MlY0SDEwLjcwOEExLjk0OCwxLjk0OCwwLDAsMSwxMC44MzIsNC4yWiI+PC9wYXRoPg0KICAgIDxwYXRoIGQ9Ik03LDQuNTgyTDcuMTY4LDQuMkExLjkyOSwxLjkyOSwwLDAsMSw3LjI5Miw0SDdWNC41ODJaIj48L3BhdGg+DQogICAgPHBhdGggZD0iTTgsMTNINy42ODNsLTAuMzUxLjhhMS45MzMsMS45MzMsMCwwLDEtLjEyNC4ySDhWMTNaIj48L3BhdGg+DQogICAgPHJlY3QgaGVpZ2h0PSIxIiB3aWR0aD0iMSIgeD0iMTIiIHk9IjIiPjwvcmVjdD4NCiAgICA8cmVjdCBoZWlnaHQ9IjEiIHdpZHRoPSIxIiB4PSIxMSIgeT0iMyI+PC9yZWN0Pg0KICAgIDxwYXRoIGQ9Ik05LDNIOFYzLjI4MkExLjk4NSwxLjk4NSwwLDAsMSw5LDNaIj48L3BhdGg+DQogICAgPHJlY3QgaGVpZ2h0PSIxIiB3aWR0aD0iMSIgeD0iMiIgeT0iMyI+PC9yZWN0Pg0KICAgIDxyZWN0IGhlaWdodD0iMSIgd2lkdGg9IjEiIHg9IjYiIHk9IjIiPjwvcmVjdD4NCiAgICA8cmVjdCBoZWlnaHQ9IjEiIHdpZHRoPSIxIiB4PSIzIiB5PSIyIj48L3JlY3Q+DQogICAgPHJlY3QgaGVpZ2h0PSIxIiB3aWR0aD0iMSIgeD0iNSIgeT0iMyI+PC9yZWN0Pg0KICAgIDxyZWN0IGhlaWdodD0iMSIgd2lkdGg9IjEiIHg9IjkiIHk9IjIiPjwvcmVjdD4NCiAgICA8cmVjdCBoZWlnaHQ9IjEiIHdpZHRoPSIxIiB4PSIxNSIgeT0iMTQiPjwvcmVjdD4NCiAgICA8cG9seWdvbiBwb2ludHM9IjEzLjQ0NyAxMC4xNzQgMTMuNDY5IDEwLjIyNSAxMy40NzIgMTAuMjMyIDEzLjgwOCAxMSAxNCAxMSAxNCAxMCAxMy4zNyAxMCAxMy40NDcgMTAuMTc0Ij48L3BvbHlnb24+DQogICAgPHJlY3QgaGVpZ2h0PSIxIiB3aWR0aD0iMSIgeD0iMTMiIHk9IjciPjwvcmVjdD4NCiAgICA8cmVjdCBoZWlnaHQ9IjEiIHdpZHRoPSIxIiB4PSIxNSIgeT0iNSI+PC9yZWN0Pg0KICAgIDxyZWN0IGhlaWdodD0iMSIgd2lkdGg9IjEiIHg9IjE0IiB5PSI2Ij48L3JlY3Q+DQogICAgPHJlY3QgaGVpZ2h0PSIxIiB3aWR0aD0iMSIgeD0iMTUiIHk9IjgiPjwvcmVjdD4NCiAgICA8cmVjdCBoZWlnaHQ9IjEiIHdpZHRoPSIxIiB4PSIxNCIgeT0iOSI+PC9yZWN0Pg0KICAgIDxwYXRoIGQ9Ik0zLjc3NSwxNEgzdjFINFYxNC4zMTRBMS45NywxLjk3LDAsMCwxLDMuNzc1LDE0WiI+PC9wYXRoPg0KICAgIDxyZWN0IGhlaWdodD0iMSIgd2lkdGg9IjEiIHg9IjE0IiB5PSIzIj48L3JlY3Q+DQogICAgPHBvbHlnb24gcG9pbnRzPSIxMiA2Ljg2OCAxMiA2IDExLjYyIDYgMTIgNi44NjgiPjwvcG9seWdvbj4NCiAgICA8cmVjdCBoZWlnaHQ9IjEiIHdpZHRoPSIxIiB4PSIxNSIgeT0iMiI+PC9yZWN0Pg0KICAgIDxyZWN0IGhlaWdodD0iMSIgd2lkdGg9IjEiIHg9IjEyIiB5PSI1Ij48L3JlY3Q+DQogICAgPHJlY3QgaGVpZ2h0PSIxIiB3aWR0aD0iMSIgeD0iMTMiIHk9IjQiPjwvcmVjdD4NCiAgICA8cG9seWdvbiBwb2ludHM9IjEyLjkzMyA5IDEzIDkgMTMgOCAxMi40OTUgOCAxMi45MzMgOSI+PC9wb2x5Z29uPg0KICAgIDxyZWN0IGhlaWdodD0iMSIgd2lkdGg9IjEiIHg9IjkiIHk9IjE0Ij48L3JlY3Q+DQogICAgPHJlY3QgaGVpZ2h0PSIxIiB3aWR0aD0iMSIgeD0iOCIgeT0iMTUiPjwvcmVjdD4NCiAgICA8cGF0aCBkPSJNNiwxNC45MjZWMTVIN1YxNC4zMTZBMS45OTMsMS45OTMsMCwwLDEsNiwxNC45MjZaIj48L3BhdGg+DQogICAgPHJlY3QgaGVpZ2h0PSIxIiB3aWR0aD0iMSIgeD0iNSIgeT0iMTUiPjwvcmVjdD4NCiAgICA8cGF0aCBkPSJNMTAuNjY4LDEzLjhMMTAuMzE3LDEzSDEwdjFoMC43OTJBMS45NDcsMS45NDcsMCwwLDEsMTAuNjY4LDEzLjhaIj48L3BhdGg+DQogICAgPHJlY3QgaGVpZ2h0PSIxIiB3aWR0aD0iMSIgeD0iMTEiIHk9IjE1Ij48L3JlY3Q+DQogICAgPHBhdGggZD0iTTE0LjMzMiwxMi4yYTEuOTksMS45OSwwLDAsMSwuMTY2LjhIMTVWMTJIMTQuMjQ1WiI+PC9wYXRoPg0KICAgIDxyZWN0IGhlaWdodD0iMSIgd2lkdGg9IjEiIHg9IjE0IiB5PSIxNSI+PC9yZWN0Pg0KICAgIDxyZWN0IGhlaWdodD0iMSIgd2lkdGg9IjEiIHg9IjE1IiB5PSIxMSI+PC9yZWN0Pg0KICA8L2c+DQogIDxwb2x5bGluZSBjbGFzcz0icWwtc3Ryb2tlIiBwb2ludHM9IjUuNSAxMyA5IDUgMTIuNSAxMyI+PC9wb2x5bGluZT4NCiAgPGxpbmUgY2xhc3M9InFsLXN0cm9rZSIgeDE9IjExLjYzIiB4Mj0iNi4zOCIgeTE9IjExIiB5Mj0iMTEiPjwvbGluZT4NCjwvc3ZnPg=="

/***/ }),

/***/ "./assets/icons/blockquote.svg":
/*!*************************************!*\
  !*** ./assets/icons/blockquote.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTggMTgiPg0KICA8cmVjdCBjbGFzcz0icWwtZmlsbCBxbC1zdHJva2UiIGhlaWdodD0iMyIgd2lkdGg9IjMiIHg9IjQiIHk9IjUiPjwvcmVjdD4NCiAgPHJlY3QgY2xhc3M9InFsLWZpbGwgcWwtc3Ryb2tlIiBoZWlnaHQ9IjMiIHdpZHRoPSIzIiB4PSIxMSIgeT0iNSI+PC9yZWN0Pg0KICA8cGF0aCBjbGFzcz0icWwtZXZlbiBxbC1maWxsIHFsLXN0cm9rZSIgZD0iTTcsOGMwLDQuMDMxLTMsNS0zLDUiPjwvcGF0aD4NCiAgPHBhdGggY2xhc3M9InFsLWV2ZW4gcWwtZmlsbCBxbC1zdHJva2UiIGQ9Ik0xNCw4YzAsNC4wMzEtMyw1LTMsNSI+PC9wYXRoPg0KPC9zdmc+"

/***/ }),

/***/ "./assets/icons/bold.svg":
/*!*******************************!*\
  !*** ./assets/icons/bold.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTggMTgiPg0KICA8cGF0aCBjbGFzcz0icWwtc3Ryb2tlIiBkPSJNNSw0SDkuNUEyLjUsMi41LDAsMCwxLDEyLDYuNXYwQTIuNSwyLjUsMCwwLDEsOS41LDlINUEwLDAsMCwwLDEsNSw5VjRBMCwwLDAsMCwxLDUsNFoiPjwvcGF0aD4NCiAgPHBhdGggY2xhc3M9InFsLXN0cm9rZSIgZD0iTTUsOWg1LjVBMi41LDIuNSwwLDAsMSwxMywxMS41djBBMi41LDIuNSwwLDAsMSwxMC41LDE0SDVhMCwwLDAsMCwxLDAsMFY5QTAsMCwwLDAsMSw1LDlaIj48L3BhdGg+DQo8L3N2Zz4="

/***/ }),

/***/ "./assets/icons/clean.svg":
/*!********************************!*\
  !*** ./assets/icons/clean.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iIiB2aWV3Ym94PSIwIDAgMTggMTgiPg0KICA8bGluZSBjbGFzcz0icWwtc3Ryb2tlIiB4MT0iNSIgeDI9IjEzIiB5MT0iMyIgeTI9IjMiPjwvbGluZT4NCiAgPGxpbmUgY2xhc3M9InFsLXN0cm9rZSIgeDE9IjYiIHgyPSI5LjM1IiB5MT0iMTIiIHkyPSIzIj48L2xpbmU+DQogIDxsaW5lIGNsYXNzPSJxbC1zdHJva2UiIHgxPSIxMSIgeDI9IjE1IiB5MT0iMTEiIHkyPSIxNSI+PC9saW5lPg0KICA8bGluZSBjbGFzcz0icWwtc3Ryb2tlIiB4MT0iMTUiIHgyPSIxMSIgeTE9IjExIiB5Mj0iMTUiPjwvbGluZT4NCiAgPHJlY3QgY2xhc3M9InFsLWZpbGwiIGhlaWdodD0iMSIgcng9IjAuNSIgcnk9IjAuNSIgd2lkdGg9IjciIHg9IjIiIHk9IjE0Ij48L3JlY3Q+DQo8L3N2Zz4="

/***/ }),

/***/ "./assets/icons/code.svg":
/*!*******************************!*\
  !*** ./assets/icons/code.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTggMTgiPg0KICA8cG9seWxpbmUgY2xhc3M9InFsLWV2ZW4gcWwtc3Ryb2tlIiBwb2ludHM9IjUgNyAzIDkgNSAxMSI+PC9wb2x5bGluZT4NCiAgPHBvbHlsaW5lIGNsYXNzPSJxbC1ldmVuIHFsLXN0cm9rZSIgcG9pbnRzPSIxMyA3IDE1IDkgMTMgMTEiPjwvcG9seWxpbmU+DQogIDxsaW5lIGNsYXNzPSJxbC1zdHJva2UiIHgxPSIxMCIgeDI9IjgiIHkxPSI1IiB5Mj0iMTMiPjwvbGluZT4NCjwvc3ZnPg=="

/***/ }),

/***/ "./assets/icons/color.svg":
/*!********************************!*\
  !*** ./assets/icons/color.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTggMTgiPg0KICA8bGluZSBjbGFzcz0icWwtY29sb3ItbGFiZWwgcWwtc3Ryb2tlIHFsLXRyYW5zcGFyZW50IiB4MT0iMyIgeDI9IjE1IiB5MT0iMTUiIHkyPSIxNSI+PC9saW5lPg0KICA8cG9seWxpbmUgY2xhc3M9InFsLXN0cm9rZSIgcG9pbnRzPSI1LjUgMTEgOSAzIDEyLjUgMTEiPjwvcG9seWxpbmU+DQogIDxsaW5lIGNsYXNzPSJxbC1zdHJva2UiIHgxPSIxMS42MyIgeDI9IjYuMzgiIHkxPSI5IiB5Mj0iOSI+PC9saW5lPg0KPC9zdmc+"

/***/ }),

/***/ "./assets/icons/direction-ltr.svg":
/*!****************************************!*\
  !*** ./assets/icons/direction-ltr.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTggMTgiPg0KICA8cG9seWdvbiBjbGFzcz0icWwtc3Ryb2tlIHFsLWZpbGwiIHBvaW50cz0iMyAxMSA1IDkgMyA3IDMgMTEiPjwvcG9seWdvbj4NCiAgPGxpbmUgY2xhc3M9InFsLXN0cm9rZSBxbC1maWxsIiB4MT0iMTUiIHgyPSIxMSIgeTE9IjQiIHkyPSI0Ij48L2xpbmU+DQogIDxwYXRoIGNsYXNzPSJxbC1maWxsIiBkPSJNMTEsM2EzLDMsMCwwLDAsMCw2aDFWM0gxMVoiPjwvcGF0aD4NCiAgPHJlY3QgY2xhc3M9InFsLWZpbGwiIGhlaWdodD0iMTEiIHdpZHRoPSIxIiB4PSIxMSIgeT0iNCI+PC9yZWN0Pg0KICA8cmVjdCBjbGFzcz0icWwtZmlsbCIgaGVpZ2h0PSIxMSIgd2lkdGg9IjEiIHg9IjEzIiB5PSI0Ij48L3JlY3Q+DQo8L3N2Zz4="

/***/ }),

/***/ "./assets/icons/direction-rtl.svg":
/*!****************************************!*\
  !*** ./assets/icons/direction-rtl.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTggMTgiPg0KICA8cG9seWdvbiBjbGFzcz0icWwtc3Ryb2tlIHFsLWZpbGwiIHBvaW50cz0iMTUgMTIgMTMgMTAgMTUgOCAxNSAxMiI+PC9wb2x5Z29uPg0KICA8bGluZSBjbGFzcz0icWwtc3Ryb2tlIHFsLWZpbGwiIHgxPSI5IiB4Mj0iNSIgeTE9IjQiIHkyPSI0Ij48L2xpbmU+DQogIDxwYXRoIGNsYXNzPSJxbC1maWxsIiBkPSJNNSwzQTMsMywwLDAsMCw1LDlINlYzSDVaIj48L3BhdGg+DQogIDxyZWN0IGNsYXNzPSJxbC1maWxsIiBoZWlnaHQ9IjExIiB3aWR0aD0iMSIgeD0iNSIgeT0iNCI+PC9yZWN0Pg0KICA8cmVjdCBjbGFzcz0icWwtZmlsbCIgaGVpZ2h0PSIxMSIgd2lkdGg9IjEiIHg9IjciIHk9IjQiPjwvcmVjdD4NCjwvc3ZnPg=="

/***/ }),

/***/ "./assets/icons/dropdown.svg":
/*!***********************************!*\
  !*** ./assets/icons/dropdown.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTggMTgiPg0KICA8cG9seWdvbiBjbGFzcz0icWwtc3Ryb2tlIiBwb2ludHM9IjcgMTEgOSAxMyAxMSAxMSA3IDExIj48L3BvbHlnb24+DQogIDxwb2x5Z29uIGNsYXNzPSJxbC1zdHJva2UiIHBvaW50cz0iNyA3IDkgNSAxMSA3IDcgNyI+PC9wb2x5Z29uPg0KPC9zdmc+"

/***/ }),

/***/ "./assets/icons/formula.svg":
/*!**********************************!*\
  !*** ./assets/icons/formula.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTggMTgiPg0KICA8cGF0aCBjbGFzcz0icWwtZmlsbCIgZD0iTTExLjc1OSwyLjQ4MmEyLjU2MSwyLjU2MSwwLDAsMC0zLjUzLjYwN0E3LjY1Niw3LjY1NiwwLDAsMCw2LjgsNi4yQzYuMTA5LDkuMTg4LDUuMjc1LDE0LjY3Nyw0LjE1LDE0LjkyN2ExLjU0NSwxLjU0NSwwLDAsMC0xLjMtLjkzM0EwLjkyMiwwLjkyMiwwLDAsMCwyLDE1LjAzNlMxLjk1NCwxNiw0LjExOSwxNnMzLjA5MS0yLjY5MSwzLjctNS41NTNjMC4xNzctLjgyNi4zNi0xLjcyNiwwLjU1NC0yLjZMOC43NzUsNi4yYzAuMzgxLTEuNDIxLjgwNy0yLjUyMSwxLjMwNi0yLjY3NmExLjAxNCwxLjAxNCwwLDAsMCwxLjAyLjU2QTAuOTY2LDAuOTY2LDAsMCwwLDExLjc1OSwyLjQ4MloiPjwvcGF0aD4NCiAgPHJlY3QgY2xhc3M9InFsLWZpbGwiIGhlaWdodD0iMS42IiByeD0iMC44IiByeT0iMC44IiB3aWR0aD0iNSIgeD0iNS4xNSIgeT0iNi4yIj48L3JlY3Q+DQogIDxwYXRoIGNsYXNzPSJxbC1maWxsIiBkPSJNMTMuNjYzLDEyLjAyN2ExLjY2MiwxLjY2MiwwLDAsMSwuMjY2LTAuMjc2cTAuMTkzLDAuMDY5LjQ1NiwwLjEzOGEyLjEsMi4xLDAsMCwwLC41MzUuMDY5LDEuMDc1LDEuMDc1LDAsMCwwLC43NjctMC4zLDEuMDQ0LDEuMDQ0LDAsMCwwLC4zMTQtMC44LDAuODQsMC44NCwwLDAsMC0uMjM4LTAuNjE5LDAuOCwwLjgsMCwwLDAtLjU5NC0wLjIzOSwxLjE1NCwxLjE1NCwwLDAsMC0uNzgxLjMsNC42MDcsNC42MDcsMCwwLDAtLjc4MSwxcS0wLjA5MS4xNS0uMjE4LDAuMzQ2bC0wLjI0Ni4zOGMtMC4wNjgtLjI4OC0wLjEzNy0wLjU4Mi0wLjIxMi0wLjg4NS0wLjQ1OS0xLjg0Ny0yLjQ5NC0uOTg0LTIuOTQxLTAuOC0wLjQ4Mi4yLS4zNTMsMC42NDctMC4wOTQsMC41MjlhMC44NjksMC44NjksMCwwLDEsMS4yODEuNTg1YzAuMjE3LDAuNzUxLjM3NywxLjQzNiwwLjUyNywyLjAzOGE1LjY4OCw1LjY4OCwwLDAsMS0uMzYyLjQ2NywyLjY5LDIuNjksMCwwLDEtLjI2NC4yNzFxLTAuMjIxLS4wOC0wLjQ3MS0wLjE0N2EyLjAyOSwyLjAyOSwwLDAsMC0uNTIyLTAuMDY2LDEuMDc5LDEuMDc5LDAsMCwwLS43NjguM0ExLjA1OCwxLjA1OCwwLDAsMCw5LDE1LjEzMWEwLjgyLDAuODIsMCwwLDAsLjgzMi44NTIsMS4xMzQsMS4xMzQsMCwwLDAsLjc4Ny0wLjMsNS4xMSw1LjExLDAsMCwwLC43NzYtMC45OTNxMC4xNDEtLjIxOS4yMTUtMC4zNGMwLjA0Ni0uMDc2LjEyMi0wLjE5NCwwLjIyMy0wLjM0NmEyLjc4NiwyLjc4NiwwLDAsMCwuOTE4LDEuNzI2LDIuNTgyLDIuNTgyLDAsMCwwLDIuMzc2LS4xODVjMC4zMTctLjE4MS4yMTItMC41NjUsMC0wLjQ5NEEwLjgwNywwLjgwNywwLDAsMSwxNC4xNzYsMTVhNS4xNTksNS4xNTksMCwwLDEtLjkxMy0yLjQ0NmwwLDBRMTMuNDg3LDEyLjI0LDEzLjY2MywxMi4wMjdaIj48L3BhdGg+DQo8L3N2Zz4="

/***/ }),

/***/ "./assets/icons/header-2.svg":
/*!***********************************!*\
  !*** ./assets/icons/header-2.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiPg0KICA8cGF0aCBjbGFzcz0icWwtZmlsbCIgZD0iTTE2LjczOTc1LDEzLjgxNDQ1di40Mzk0NWEuNTQwODUuNTQwODUsMCwwLDEtLjYwNS42MDU0N0gxMS44NTVhLjU4MzkyLjU4MzkyLDAsMCwxLS42NDg5My0uNjA1NDdWMTQuMDEyN2MwLTIuOTA1MjcsMy4zOTk0MS0zLjQyMTg3LDMuMzk5NDEtNC41NTQ2OWEuNzc2NzUuNzc2NzUsMCwwLDAtLjg0NzE3LS43ODEyNSwxLjE3Njg0LDEuMTc2ODQsMCwwLDAtLjgzNTk0LjM4NDc3Yy0uMjc0OS4yNjM2Ny0uNTYxLjM3NC0uODU3OTEuMTMxODRsLS40MjkyLS4zNDA4MmMtLjMwODExLS4yNDIxOS0uMzg1MjUtLjUxNzU4LS4xNTQzLS44MTQ0NWEyLjk3MTU1LDIuOTcxNTUsMCwwLDEsMi40NTM2MS0xLjE3Njc2LDIuNDUzOTMsMi40NTM5MywwLDAsMSwyLjY4NDA4LDIuNDA5MThjMCwyLjQ1MzEyLTMuMTc5MiwyLjkyNjc2LTMuMjc4MzIsMy45Mzg0OGgyLjc5NDQzQS41NDA4NS41NDA4NSwwLDAsMSwxNi43Mzk3NSwxMy44MTQ0NVpNOSwzQS45OTk3NC45OTk3NCwwLDAsMCw4LDRWOEgzVjRBMSwxLDAsMCwwLDEsNFYxNGExLDEsMCwwLDAsMiwwVjEwSDh2NGExLDEsMCwwLDAsMiwwVjRBLjk5OTc0Ljk5OTc0LDAsMCwwLDksM1oiLz4NCjwvc3ZnPg=="

/***/ }),

/***/ "./assets/icons/header.svg":
/*!*********************************!*\
  !*** ./assets/icons/header.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiPg0KICA8cGF0aCBjbGFzcz0icWwtZmlsbCIgZD0iTTEwLDRWMTRhMSwxLDAsMCwxLTIsMFYxMEgzdjRhMSwxLDAsMCwxLTIsMFY0QTEsMSwwLDAsMSwzLDRWOEg4VjRhMSwxLDAsMCwxLDIsMFptNi4wNjc4Nyw5LjIwOUgxNC45ODk3NVY3LjU5ODYzYS41NDA4NS41NDA4NSwwLDAsMC0uNjA1LS42MDU0N2gtLjYyNzQ0YTEuMDExMTksMS4wMTExOSwwLDAsMC0uNzQ4LjI5Njg4TDExLjY0NSw4LjU2NjQxYS41NDM1LjU0MzUsMCwwLDAtLjAyMi44NTg0bC4yODYxMy4zMDc2MmEuNTM4NjEuNTM4NjEsMCwwLDAsLjg0NzE3LjAzMzJsLjA5OTEyLS4wODc4OWExLjIxMzcsMS4yMTM3LDAsMCwwLC4yNDE3LS4zNTI1NGguMDIyNDZzLS4wMTEyMy4zMDg1OS0uMDExMjMuNjA1NDdWMTMuMjA5SDEyLjA0MWEuNTQwODUuNTQwODUsMCwwLDAtLjYwNS42MDU0N3YuNDM5NDVhLjU0MDg1LjU0MDg1LDAsMCwwLC42MDUuNjA1NDdoNC4wMjY4NmEuNTQwODUuNTQwODUsMCwwLDAsLjYwNS0uNjA1NDd2LS40Mzk0NUEuNTQwODUuNTQwODUsMCwwLDAsMTYuMDY3ODcsMTMuMjA5WiIvPg0KPC9zdmc+"

/***/ }),

/***/ "./assets/icons/image.svg":
/*!********************************!*\
  !*** ./assets/icons/image.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTggMTgiPg0KICA8cmVjdCBjbGFzcz0icWwtc3Ryb2tlIiBoZWlnaHQ9IjEwIiB3aWR0aD0iMTIiIHg9IjMiIHk9IjQiPjwvcmVjdD4NCiAgPGNpcmNsZSBjbGFzcz0icWwtZmlsbCIgY3g9IjYiIGN5PSI3IiByPSIxIj48L2NpcmNsZT4NCiAgPHBvbHlsaW5lIGNsYXNzPSJxbC1ldmVuIHFsLWZpbGwiIHBvaW50cz0iNSAxMiA1IDExIDcgOSA4IDEwIDExIDcgMTMgOSAxMyAxMiA1IDEyIj48L3BvbHlsaW5lPg0KPC9zdmc+"

/***/ }),

/***/ "./assets/icons/indent.svg":
/*!*********************************!*\
  !*** ./assets/icons/indent.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTggMTgiPg0KICA8bGluZSBjbGFzcz0icWwtc3Ryb2tlIiB4MT0iMyIgeDI9IjE1IiB5MT0iMTQiIHkyPSIxNCI+PC9saW5lPg0KICA8bGluZSBjbGFzcz0icWwtc3Ryb2tlIiB4MT0iMyIgeDI9IjE1IiB5MT0iNCIgeTI9IjQiPjwvbGluZT4NCiAgPGxpbmUgY2xhc3M9InFsLXN0cm9rZSIgeDE9IjkiIHgyPSIxNSIgeTE9IjkiIHkyPSI5Ij48L2xpbmU+DQogIDxwb2x5bGluZSBjbGFzcz0icWwtZmlsbCBxbC1zdHJva2UiIHBvaW50cz0iMyA3IDMgMTEgNSA5IDMgNyI+PC9wb2x5bGluZT4NCjwvc3ZnPg=="

/***/ }),

/***/ "./assets/icons/italic.svg":
/*!*********************************!*\
  !*** ./assets/icons/italic.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTggMTgiPg0KICA8bGluZSBjbGFzcz0icWwtc3Ryb2tlIiB4MT0iNyIgeDI9IjEzIiB5MT0iNCIgeTI9IjQiPjwvbGluZT4NCiAgPGxpbmUgY2xhc3M9InFsLXN0cm9rZSIgeDE9IjUiIHgyPSIxMSIgeTE9IjE0IiB5Mj0iMTQiPjwvbGluZT4NCiAgPGxpbmUgY2xhc3M9InFsLXN0cm9rZSIgeDE9IjgiIHgyPSIxMCIgeTE9IjE0IiB5Mj0iNCI+PC9saW5lPg0KPC9zdmc+"

/***/ }),

/***/ "./assets/icons/link.svg":
/*!*******************************!*\
  !*** ./assets/icons/link.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTggMTgiPg0KICA8bGluZSBjbGFzcz0icWwtc3Ryb2tlIiB4MT0iNyIgeDI9IjExIiB5MT0iNyIgeTI9IjExIj48L2xpbmU+DQogIDxwYXRoIGNsYXNzPSJxbC1ldmVuIHFsLXN0cm9rZSIgZD0iTTguOSw0LjU3N2EzLjQ3NiwzLjQ3NiwwLDAsMSwuMzYsNC42NzlBMy40NzYsMy40NzYsMCwwLDEsNC41NzcsOC45QzMuMTg1LDcuNSwyLjAzNSw2LjQsNC4yMTcsNC4yMTdTNy41LDMuMTg1LDguOSw0LjU3N1oiPjwvcGF0aD4NCiAgPHBhdGggY2xhc3M9InFsLWV2ZW4gcWwtc3Ryb2tlIiBkPSJNMTMuNDIzLDkuMWEzLjQ3NiwzLjQ3NiwwLDAsMC00LjY3OS0uMzYsMy40NzYsMy40NzYsMCwwLDAsLjM2LDQuNjc5YzEuMzkyLDEuMzkyLDIuNSwyLjU0Miw0LjY3OS4zNlMxNC44MTUsMTAuNSwxMy40MjMsOS4xWiI+PC9wYXRoPg0KPC9zdmc+"

/***/ }),

/***/ "./assets/icons/list-bullet.svg":
/*!**************************************!*\
  !*** ./assets/icons/list-bullet.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTggMTgiPg0KICA8bGluZSBjbGFzcz0icWwtc3Ryb2tlIiB4MT0iNiIgeDI9IjE1IiB5MT0iNCIgeTI9IjQiPjwvbGluZT4NCiAgPGxpbmUgY2xhc3M9InFsLXN0cm9rZSIgeDE9IjYiIHgyPSIxNSIgeTE9IjkiIHkyPSI5Ij48L2xpbmU+DQogIDxsaW5lIGNsYXNzPSJxbC1zdHJva2UiIHgxPSI2IiB4Mj0iMTUiIHkxPSIxNCIgeTI9IjE0Ij48L2xpbmU+DQogIDxsaW5lIGNsYXNzPSJxbC1zdHJva2UiIHgxPSIzIiB4Mj0iMyIgeTE9IjQiIHkyPSI0Ij48L2xpbmU+DQogIDxsaW5lIGNsYXNzPSJxbC1zdHJva2UiIHgxPSIzIiB4Mj0iMyIgeTE9IjkiIHkyPSI5Ij48L2xpbmU+DQogIDxsaW5lIGNsYXNzPSJxbC1zdHJva2UiIHgxPSIzIiB4Mj0iMyIgeTE9IjE0IiB5Mj0iMTQiPjwvbGluZT4NCjwvc3ZnPg=="

/***/ }),

/***/ "./assets/icons/list-check.svg":
/*!*************************************!*\
  !*** ./assets/icons/list-check.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iIiB2aWV3Ym94PSIwIDAgMTggMTgiPg0KICA8bGluZSBjbGFzcz0icWwtc3Ryb2tlIiB4MT0iOSIgeDI9IjE1IiB5MT0iNCIgeTI9IjQiPjwvbGluZT4NCiAgPHBvbHlsaW5lIGNsYXNzPSJxbC1zdHJva2UiIHBvaW50cz0iMyA0IDQgNSA2IDMiPjwvcG9seWxpbmU+DQogIDxsaW5lIGNsYXNzPSJxbC1zdHJva2UiIHgxPSI5IiB4Mj0iMTUiIHkxPSIxNCIgeTI9IjE0Ij48L2xpbmU+DQogIDxwb2x5bGluZSBjbGFzcz0icWwtc3Ryb2tlIiBwb2ludHM9IjMgMTQgNCAxNSA2IDEzIj48L3BvbHlsaW5lPg0KICA8bGluZSBjbGFzcz0icWwtc3Ryb2tlIiB4MT0iOSIgeDI9IjE1IiB5MT0iOSIgeTI9IjkiPjwvbGluZT4NCiAgPHBvbHlsaW5lIGNsYXNzPSJxbC1zdHJva2UiIHBvaW50cz0iMyA5IDQgMTAgNiA4Ij48L3BvbHlsaW5lPg0KPC9zdmc+"

/***/ }),

/***/ "./assets/icons/list-ordered.svg":
/*!***************************************!*\
  !*** ./assets/icons/list-ordered.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTggMTgiPg0KICA8bGluZSBjbGFzcz0icWwtc3Ryb2tlIiB4MT0iNyIgeDI9IjE1IiB5MT0iNCIgeTI9IjQiPjwvbGluZT4NCiAgPGxpbmUgY2xhc3M9InFsLXN0cm9rZSIgeDE9IjciIHgyPSIxNSIgeTE9IjkiIHkyPSI5Ij48L2xpbmU+DQogIDxsaW5lIGNsYXNzPSJxbC1zdHJva2UiIHgxPSI3IiB4Mj0iMTUiIHkxPSIxNCIgeTI9IjE0Ij48L2xpbmU+DQogIDxsaW5lIGNsYXNzPSJxbC1zdHJva2UgcWwtdGhpbiIgeDE9IjIuNSIgeDI9IjQuNSIgeTE9IjUuNSIgeTI9IjUuNSI+PC9saW5lPg0KICA8cGF0aCBjbGFzcz0icWwtZmlsbCIgZD0iTTMuNSw2QTAuNSwwLjUsMCwwLDEsMyw1LjVWMy4wODVsLTAuMjc2LjEzOEEwLjUsMC41LDAsMCwxLDIuMDUzLDNjLTAuMTI0LS4yNDctMC4wMjMtMC4zMjQuMjI0LTAuNDQ3bDEtLjVBMC41LDAuNSwwLDAsMSw0LDIuNXYzQTAuNSwwLjUsMCwwLDEsMy41LDZaIj48L3BhdGg+DQogIDxwYXRoIGNsYXNzPSJxbC1zdHJva2UgcWwtdGhpbiIgZD0iTTQuNSwxMC41aC0yYzAtLjIzNCwxLjg1LTEuMDc2LDEuODUtMi4yMzRBMC45NTksMC45NTksMCwwLDAsMi41LDguMTU2Ij48L3BhdGg+DQogIDxwYXRoIGNsYXNzPSJxbC1zdHJva2UgcWwtdGhpbiIgZD0iTTIuNSwxNC44NDZhMC45NTksMC45NTksMCwwLDAsMS44NS0uMTA5QTAuNywwLjcsMCwwLDAsMy43NSwxNGEwLjY4OCwwLjY4OCwwLDAsMCwuNi0wLjczNiwwLjk1OSwwLjk1OSwwLDAsMC0xLjg1LS4xMDkiPjwvcGF0aD4NCjwvc3ZnPg=="

/***/ }),

/***/ "./assets/icons/outdent.svg":
/*!**********************************!*\
  !*** ./assets/icons/outdent.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTggMTgiPg0KICA8bGluZSBjbGFzcz0icWwtc3Ryb2tlIiB4MT0iMyIgeDI9IjE1IiB5MT0iMTQiIHkyPSIxNCI+PC9saW5lPg0KICA8bGluZSBjbGFzcz0icWwtc3Ryb2tlIiB4MT0iMyIgeDI9IjE1IiB5MT0iNCIgeTI9IjQiPjwvbGluZT4NCiAgPGxpbmUgY2xhc3M9InFsLXN0cm9rZSIgeDE9IjkiIHgyPSIxNSIgeTE9IjkiIHkyPSI5Ij48L2xpbmU+DQogIDxwb2x5bGluZSBjbGFzcz0icWwtc3Ryb2tlIiBwb2ludHM9IjUgNyA1IDExIDMgOSA1IDciPjwvcG9seWxpbmU+DQo8L3N2Zz4="

/***/ }),

/***/ "./assets/icons/strike.svg":
/*!*********************************!*\
  !*** ./assets/icons/strike.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTggMTgiPg0KICA8bGluZSBjbGFzcz0icWwtc3Ryb2tlIHFsLXRoaW4iIHgxPSIxNS41IiB4Mj0iMi41IiB5MT0iOC41IiB5Mj0iOS41Ij48L2xpbmU+DQogIDxwYXRoIGNsYXNzPSJxbC1maWxsIiBkPSJNOS4wMDcsOEM2LjU0Miw3Ljc5MSw2LDcuNTE5LDYsNi41LDYsNS43OTIsNy4yODMsNSw5LDVjMS41NzEsMCwyLjc2NS42NzksMi45NjksMS4zMDlhMSwxLDAsMCwwLDEuOS0uNjE3QzEzLjM1Niw0LjEwNiwxMS4zNTQsMyw5LDMsNi4yLDMsNCw0LjUzOCw0LDYuNWEzLjIsMy4yLDAsMCwwLC41LDEuODQzWiI+PC9wYXRoPg0KICA8cGF0aCBjbGFzcz0icWwtZmlsbCIgZD0iTTguOTg0LDEwQzExLjQ1NywxMC4yMDgsMTIsMTAuNDc5LDEyLDExLjVjMCwwLjcwOC0xLjI4MywxLjUtMywxLjUtMS41NzEsMC0yLjc2NS0uNjc5LTIuOTY5LTEuMzA5YTEsMSwwLDEsMC0xLjkuNjE3QzQuNjQ0LDEzLjg5NCw2LjY0NiwxNSw5LDE1YzIuOCwwLDUtMS41MzgsNS0zLjVhMy4yLDMuMiwwLDAsMC0uNS0xLjg0M1oiPjwvcGF0aD4NCjwvc3ZnPg=="

/***/ }),

/***/ "./assets/icons/subscript.svg":
/*!************************************!*\
  !*** ./assets/icons/subscript.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTggMTgiPg0KICA8cGF0aCBjbGFzcz0icWwtZmlsbCIgZD0iTTE1LjUsMTVIMTMuODYxYTMuODU4LDMuODU4LDAsMCwwLDEuOTE0LTIuOTc1LDEuOCwxLjgsMCwwLDAtMS42LTEuNzUxQTEuOTIxLDEuOTIxLDAsMCwwLDEyLjAyMSwxMS43YTAuNTAwMTMsMC41MDAxMywwLDEsMCwuOTU3LjI5MWgwYTAuOTE0LDAuOTE0LDAsMCwxLDEuMDUzLS43MjUsMC44MSwwLjgxLDAsMCwxLC43NDQuNzYyYzAsMS4wNzYtMS4xNjk3MSwxLjg2OTgyLTEuOTM5NzEsMi40MzA4MkExLjQ1NjM5LDEuNDU2MzksMCwwLDAsMTIsMTUuNWEwLjUsMC41LDAsMCwwLC41LjVoM0EwLjUsMC41LDAsMCwwLDE1LjUsMTVaIi8+DQogIDxwYXRoIGNsYXNzPSJxbC1maWxsIiBkPSJNOS42NSw1LjI0MWExLDEsMCwwLDAtMS40MDkuMTA4TDYsNy45NjQsMy43NTksNS4zNDlBMSwxLDAsMCwwLDIuMTkyLDYuNTkxNzhRMi4yMTU0MSw2LjYyMTMsMi4yNDEsNi42NDlMNC42ODQsOS41LDIuMjQxLDEyLjM1QTEsMSwwLDAsMCwzLjcxLDEzLjcwNzIycTAuMDI1NTctLjAyNzY4LjA0OS0wLjA1NzIyTDYsMTEuMDM2LDguMjQxLDEzLjY1YTEsMSwwLDEsMCwxLjU2Ny0xLjI0Mjc3UTkuNzg0NTksMTIuMzc3Nyw5Ljc1OSwxMi4zNUw3LjMxNiw5LjUsOS43NTksNi42NTFBMSwxLDAsMCwwLDkuNjUsNS4yNDFaIi8+DQo8L3N2Zz4="

/***/ }),

/***/ "./assets/icons/superscript.svg":
/*!**************************************!*\
  !*** ./assets/icons/superscript.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTggMTgiPg0KICA8cGF0aCBjbGFzcz0icWwtZmlsbCIgZD0iTTE1LjUsN0gxMy44NjFhNC4wMTUsNC4wMTUsMCwwLDAsMS45MTQtMi45NzUsMS44LDEuOCwwLDAsMC0xLjYtMS43NTFBMS45MjIsMS45MjIsMCwwLDAsMTIuMDIxLDMuN2EwLjUsMC41LDAsMSwwLC45NTcuMjkxLDAuOTE3LDAuOTE3LDAsMCwxLDEuMDUzLS43MjUsMC44MSwwLjgxLDAsMCwxLC43NDQuNzYyYzAsMS4wNzctMS4xNjQsMS45MjUtMS45MzQsMi40ODZBMS40MjMsMS40MjMsMCwwLDAsMTIsNy41YTAuNSwwLjUsMCwwLDAsLjUuNWgzQTAuNSwwLjUsMCwwLDAsMTUuNSw3WiIvPg0KICA8cGF0aCBjbGFzcz0icWwtZmlsbCIgZD0iTTkuNjUxLDUuMjQxYTEsMSwwLDAsMC0xLjQxLjEwOEw2LDcuOTY0LDMuNzU5LDUuMzQ5YTEsMSwwLDEsMC0xLjUxOSwxLjNMNC42ODMsOS41LDIuMjQxLDEyLjM1YTEsMSwwLDEsMCwxLjUxOSwxLjNMNiwxMS4wMzYsOC4yNDEsMTMuNjVhMSwxLDAsMCwwLDEuNTE5LTEuM0w3LjMxNyw5LjUsOS43NTksNi42NTFBMSwxLDAsMCwwLDkuNjUxLDUuMjQxWiIvPg0KPC9zdmc+"

/***/ }),

/***/ "./assets/icons/table.svg":
/*!********************************!*\
  !*** ./assets/icons/table.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTggMTgiPg0KICA8cmVjdCBjbGFzcz0icWwtc3Ryb2tlIiBoZWlnaHQ9IjEyIiB3aWR0aD0iMTIiIHg9IjMiIHk9IjMiPjwvcmVjdD4NCiAgPHJlY3QgY2xhc3M9InFsLWZpbGwiIGhlaWdodD0iMiIgd2lkdGg9IjMiIHg9IjUiIHk9IjUiPjwvcmVjdD4NCiAgPHJlY3QgY2xhc3M9InFsLWZpbGwiIGhlaWdodD0iMiIgd2lkdGg9IjQiIHg9IjkiIHk9IjUiPjwvcmVjdD4NCiAgPGcgY2xhc3M9InFsLWZpbGwgcWwtdHJhbnNwYXJlbnQiPg0KICAgIDxyZWN0IGhlaWdodD0iMiIgd2lkdGg9IjMiIHg9IjUiIHk9IjgiPjwvcmVjdD4NCiAgICA8cmVjdCBoZWlnaHQ9IjIiIHdpZHRoPSI0IiB4PSI5IiB5PSI4Ij48L3JlY3Q+DQogICAgPHJlY3QgaGVpZ2h0PSIyIiB3aWR0aD0iMyIgeD0iNSIgeT0iMTEiPjwvcmVjdD4NCiAgICA8cmVjdCBoZWlnaHQ9IjIiIHdpZHRoPSI0IiB4PSI5IiB5PSIxMSI+PC9yZWN0Pg0KICA8L2c+DQo8L3N2Zz4="

/***/ }),

/***/ "./assets/icons/underline.svg":
/*!************************************!*\
  !*** ./assets/icons/underline.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTggMTgiPg0KICA8cGF0aCBjbGFzcz0icWwtc3Ryb2tlIiBkPSJNNSwzVjlhNC4wMTIsNC4wMTIsMCwwLDAsNCw0SDlhNC4wMTIsNC4wMTIsMCwwLDAsNC00VjMiPjwvcGF0aD4NCiAgPHJlY3QgY2xhc3M9InFsLWZpbGwiIGhlaWdodD0iMSIgcng9IjAuNSIgcnk9IjAuNSIgd2lkdGg9IjEyIiB4PSIzIiB5PSIxNSI+PC9yZWN0Pg0KPC9zdmc+"

/***/ }),

/***/ "./assets/icons/video.svg":
/*!********************************!*\
  !*** ./assets/icons/video.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMTggMTgiPg0KICA8cmVjdCBjbGFzcz0icWwtc3Ryb2tlIiBoZWlnaHQ9IjEyIiB3aWR0aD0iMTIiIHg9IjMiIHk9IjMiPjwvcmVjdD4NCiAgPHJlY3QgY2xhc3M9InFsLWZpbGwiIGhlaWdodD0iMTIiIHdpZHRoPSIxIiB4PSI1IiB5PSIzIj48L3JlY3Q+DQogIDxyZWN0IGNsYXNzPSJxbC1maWxsIiBoZWlnaHQ9IjEyIiB3aWR0aD0iMSIgeD0iMTIiIHk9IjMiPjwvcmVjdD4NCiAgPHJlY3QgY2xhc3M9InFsLWZpbGwiIGhlaWdodD0iMiIgd2lkdGg9IjgiIHg9IjUiIHk9IjgiPjwvcmVjdD4NCiAgPHJlY3QgY2xhc3M9InFsLWZpbGwiIGhlaWdodD0iMSIgd2lkdGg9IjMiIHg9IjMiIHk9IjUiPjwvcmVjdD4NCiAgPHJlY3QgY2xhc3M9InFsLWZpbGwiIGhlaWdodD0iMSIgd2lkdGg9IjMiIHg9IjMiIHk9IjciPjwvcmVjdD4NCiAgPHJlY3QgY2xhc3M9InFsLWZpbGwiIGhlaWdodD0iMSIgd2lkdGg9IjMiIHg9IjMiIHk9IjEwIj48L3JlY3Q+DQogIDxyZWN0IGNsYXNzPSJxbC1maWxsIiBoZWlnaHQ9IjEiIHdpZHRoPSIzIiB4PSIzIiB5PSIxMiI+PC9yZWN0Pg0KICA8cmVjdCBjbGFzcz0icWwtZmlsbCIgaGVpZ2h0PSIxIiB3aWR0aD0iMyIgeD0iMTIiIHk9IjUiPjwvcmVjdD4NCiAgPHJlY3QgY2xhc3M9InFsLWZpbGwiIGhlaWdodD0iMSIgd2lkdGg9IjMiIHg9IjEyIiB5PSI3Ij48L3JlY3Q+DQogIDxyZWN0IGNsYXNzPSJxbC1maWxsIiBoZWlnaHQ9IjEiIHdpZHRoPSIzIiB4PSIxMiIgeT0iMTAiPjwvcmVjdD4NCiAgPHJlY3QgY2xhc3M9InFsLWZpbGwiIGhlaWdodD0iMSIgd2lkdGg9IjMiIHg9IjEyIiB5PSIxMiI+PC9yZWN0Pg0KPC9zdmc+"

/***/ }),

/***/ "./blots/block.js":
/*!************************!*\
  !*** ./blots/block.js ***!
  \************************/
/*! exports provided: blockDelta, bubbleFormats, BlockEmbed, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockDelta", function() { return blockDelta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bubbleFormats", function() { return bubbleFormats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockEmbed", function() { return BlockEmbed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Block; });
/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! extend */ "./node_modules/extend/index.js");
/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill-delta */ "./node_modules/quill-delta/dist/Delta.js");
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/dist/parchment.js");
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _break__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./break */ "./blots/break.js");
/* harmony import */ var _inline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inline */ "./blots/inline.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./text */ "./blots/text.js");







const NEWLINE_LENGTH = 1;

class Block extends parchment__WEBPACK_IMPORTED_MODULE_2__["BlockBlot"] {
  constructor(scroll, domNode) {
    super(scroll, domNode);
    this.cache = {};
  }

  delta() {
    if (this.cache.delta == null) {
      this.cache.delta = blockDelta(this);
    }
    return this.cache.delta;
  }

  deleteAt(index, length) {
    super.deleteAt(index, length);
    this.cache = {};
  }

  formatAt(index, length, name, value) {
    if (length <= 0) return;
    if (this.scroll.query(name, parchment__WEBPACK_IMPORTED_MODULE_2__["Scope"].BLOCK)) {
      if (index + length === this.length()) {
        this.format(name, value);
      }
    } else {
      super.formatAt(
        index,
        Math.min(length, this.length() - index - 1),
        name,
        value,
      );
    }
    this.cache = {};
  }

  insertAt(index, value, def) {
    if (def != null) {
      super.insertAt(index, value, def);
      this.cache = {};
      return;
    }
    if (value.length === 0) return;
    const lines = value.split('\n');
    const text = lines.shift();
    if (text.length > 0) {
      if (index < this.length() - 1 || this.children.tail == null) {
        super.insertAt(Math.min(index, this.length() - 1), text);
      } else {
        this.children.tail.insertAt(this.children.tail.length(), text);
      }
      this.cache = {};
    }
    let block = this;
    lines.reduce((lineIndex, line) => {
      block = block.split(lineIndex, true);
      block.insertAt(0, line);
      return line.length;
    }, index + text.length);
  }

  insertBefore(blot, ref) {
    const { head } = this.children;
    super.insertBefore(blot, ref);
    if (head instanceof _break__WEBPACK_IMPORTED_MODULE_3__["default"]) {
      head.remove();
    }
    this.cache = {};
  }

  length() {
    if (this.cache.length == null) {
      this.cache.length = super.length() + NEWLINE_LENGTH;
    }
    return this.cache.length;
  }

  moveChildren(target, ref) {
    super.moveChildren(target, ref);
    this.cache = {};
  }

  optimize(context) {
    super.optimize(context);
    this.cache = {};
  }

  path(index) {
    return super.path(index, true);
  }

  removeChild(child) {
    super.removeChild(child);
    this.cache = {};
  }

  split(index, force = false) {
    if (force && (index === 0 || index >= this.length() - NEWLINE_LENGTH)) {
      const clone = this.clone();
      if (index === 0) {
        this.parent.insertBefore(clone, this);
        return this;
      }
      this.parent.insertBefore(clone, this.next);
      return clone;
    }
    const next = super.split(index, force);
    this.cache = {};
    return next;
  }
}
Block.blotName = 'block';
Block.tagName = 'P';
Block.defaultChild = _break__WEBPACK_IMPORTED_MODULE_3__["default"];
Block.allowedChildren = [_break__WEBPACK_IMPORTED_MODULE_3__["default"], _inline__WEBPACK_IMPORTED_MODULE_4__["default"], parchment__WEBPACK_IMPORTED_MODULE_2__["EmbedBlot"], _text__WEBPACK_IMPORTED_MODULE_5__["default"]];

class BlockEmbed extends parchment__WEBPACK_IMPORTED_MODULE_2__["EmbedBlot"] {
  attach() {
    super.attach();
    this.attributes = new parchment__WEBPACK_IMPORTED_MODULE_2__["AttributorStore"](this.domNode);
  }

  delta() {
    return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().insert(
      this.value(),
      extend__WEBPACK_IMPORTED_MODULE_0___default()(this.formats(), this.attributes.values()),
    );
  }

  format(name, value) {
    const attribute = this.scroll.query(name, parchment__WEBPACK_IMPORTED_MODULE_2__["Scope"].BLOCK_ATTRIBUTE);
    if (attribute != null) {
      this.attributes.attribute(attribute, value);
    }
  }

  formatAt(index, length, name, value) {
    this.format(name, value);
  }

  insertAt(index, value, def) {
    if (typeof value === 'string' && value.endsWith('\n')) {
      const block = this.scroll.create(Block.blotName);
      this.parent.insertBefore(block, index === 0 ? this : this.next);
      block.insertAt(0, value.slice(0, -1));
    } else {
      super.insertAt(index, value, def);
    }
  }
}
BlockEmbed.scope = parchment__WEBPACK_IMPORTED_MODULE_2__["Scope"].BLOCK_BLOT;
// It is important for cursor behavior BlockEmbeds use tags that are block level elements

function blockDelta(blot, filter = true) {
  return blot
    .descendants(parchment__WEBPACK_IMPORTED_MODULE_2__["LeafBlot"])
    .reduce((delta, leaf) => {
      if (leaf.length() === 0) {
        return delta;
      }
      return delta.insert(leaf.value(), bubbleFormats(leaf, {}, filter));
    }, new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a())
    .insert('\n', bubbleFormats(blot));
}

function bubbleFormats(blot, formats = {}, filter = true) {
  if (blot == null) return formats;
  if (typeof blot.formats === 'function') {
    formats = extend__WEBPACK_IMPORTED_MODULE_0___default()(formats, blot.formats());
    if (filter) {
      // exclude syntax highlighting from deltas and getFormat()
      delete formats['code-token'];
    }
  }
  if (
    blot.parent == null ||
    blot.parent.statics.blotName === 'scroll' ||
    blot.parent.statics.scope !== blot.statics.scope
  ) {
    return formats;
  }
  return bubbleFormats(blot.parent, formats, filter);
}




/***/ }),

/***/ "./blots/break.js":
/*!************************!*\
  !*** ./blots/break.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/dist/parchment.js");
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_0__);


class Break extends parchment__WEBPACK_IMPORTED_MODULE_0__["EmbedBlot"] {
  static value() {
    return undefined;
  }

  optimize() {
    if (this.prev || this.next) {
      this.remove();
    }
  }

  length() {
    return 0;
  }

  value() {
    return '';
  }
}
Break.blotName = 'break';
Break.tagName = 'BR';

/* harmony default export */ __webpack_exports__["default"] = (Break);


/***/ }),

/***/ "./blots/container.js":
/*!****************************!*\
  !*** ./blots/container.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/dist/parchment.js");
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_0__);


class Container extends parchment__WEBPACK_IMPORTED_MODULE_0__["ContainerBlot"] {}

/* harmony default export */ __webpack_exports__["default"] = (Container);


/***/ }),

/***/ "./blots/cursor.js":
/*!*************************!*\
  !*** ./blots/cursor.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/dist/parchment.js");
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text */ "./blots/text.js");



class Cursor extends parchment__WEBPACK_IMPORTED_MODULE_0__["EmbedBlot"] {
  static value() {
    return undefined;
  }

  constructor(scroll, domNode, selection) {
    super(scroll, domNode);
    this.selection = selection;
    this.textNode = document.createTextNode(Cursor.CONTENTS);
    this.domNode.appendChild(this.textNode);
    this.savedLength = 0;
  }

  detach() {
    // super.detach() will also clear domNode.__blot
    if (this.parent != null) this.parent.removeChild(this);
  }

  format(name, value) {
    if (this.savedLength !== 0) {
      super.format(name, value);
      return;
    }
    let target = this;
    let index = 0;
    while (target != null && target.statics.scope !== parchment__WEBPACK_IMPORTED_MODULE_0__["Scope"].BLOCK_BLOT) {
      index += target.offset(target.parent);
      target = target.parent;
    }
    if (target != null) {
      this.savedLength = Cursor.CONTENTS.length;
      target.optimize();
      target.formatAt(index, Cursor.CONTENTS.length, name, value);
      this.savedLength = 0;
    }
  }

  index(node, offset) {
    if (node === this.textNode) return 0;
    return super.index(node, offset);
  }

  length() {
    return this.savedLength;
  }

  position() {
    return [this.textNode, this.textNode.data.length];
  }

  remove() {
    super.remove();
    this.parent = null;
  }

  restore() {
    if (this.selection.composing || this.parent == null) return null;
    const range = this.selection.getNativeRange();
    // Link format will insert text outside of anchor tag
    while (
      this.domNode.lastChild != null &&
      this.domNode.lastChild !== this.textNode
    ) {
      this.domNode.parentNode.insertBefore(
        this.domNode.lastChild,
        this.domNode,
      );
    }

    const prevTextBlot = this.prev instanceof _text__WEBPACK_IMPORTED_MODULE_1__["default"] ? this.prev : null;
    const prevTextLength = prevTextBlot ? prevTextBlot.length() : 0;
    const nextTextBlot = this.next instanceof _text__WEBPACK_IMPORTED_MODULE_1__["default"] ? this.next : null;
    const nextText = nextTextBlot ? nextTextBlot.text : '';
    const { textNode } = this;
    // take text from inside this blot and reset it
    const newText = textNode.data.split(Cursor.CONTENTS).join('');
    textNode.data = Cursor.CONTENTS;

    // proactively merge TextBlots around cursor so that optimization
    // doesn't lose the cursor.  the reason we are here in cursor.restore
    // could be that the user clicked in prevTextBlot or nextTextBlot, or
    // the user typed something.
    let mergedTextBlot;
    if (prevTextBlot) {
      mergedTextBlot = prevTextBlot;
      if (newText || nextTextBlot) {
        prevTextBlot.insertAt(prevTextBlot.length(), newText + nextText);
        if (nextTextBlot) {
          nextTextBlot.remove();
        }
      }
    } else if (nextTextBlot) {
      mergedTextBlot = nextTextBlot;
      nextTextBlot.insertAt(0, newText);
    } else {
      const newTextNode = document.createTextNode(newText);
      mergedTextBlot = this.scroll.create(newTextNode);
      this.parent.insertBefore(mergedTextBlot, this);
    }

    this.remove();
    if (range) {
      // calculate selection to restore
      const remapOffset = (node, offset) => {
        if (prevTextBlot && node === prevTextBlot.domNode) {
          return offset;
        }
        if (node === textNode) {
          return prevTextLength + offset - 1;
        }
        if (nextTextBlot && node === nextTextBlot.domNode) {
          return prevTextLength + newText.length + offset;
        }
        return null;
      };

      const start = remapOffset(range.start.node, range.start.offset);
      const end = remapOffset(range.end.node, range.end.offset);
      if (start !== null && end !== null) {
        return {
          startNode: mergedTextBlot.domNode,
          startOffset: start,
          endNode: mergedTextBlot.domNode,
          endOffset: end,
        };
      }
    }
    return null;
  }

  update(mutations, context) {
    if (
      mutations.some(mutation => {
        return (
          mutation.type === 'characterData' && mutation.target === this.textNode
        );
      })
    ) {
      const range = this.restore();
      if (range) context.range = range;
    }
  }

  value() {
    return '';
  }
}
Cursor.blotName = 'cursor';
Cursor.className = 'ql-cursor';
Cursor.tagName = 'span';
Cursor.CONTENTS = '\uFEFF'; // Zero width no break space

/* harmony default export */ __webpack_exports__["default"] = (Cursor);


/***/ }),

/***/ "./blots/embed.js":
/*!************************!*\
  !*** ./blots/embed.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/dist/parchment.js");
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text */ "./blots/text.js");



const GUARD_TEXT = '\uFEFF';

class Embed extends parchment__WEBPACK_IMPORTED_MODULE_0__["EmbedBlot"] {
  constructor(scroll, node) {
    super(scroll, node);
    this.contentNode = document.createElement('span');
    this.contentNode.setAttribute('contenteditable', false);
    Array.from(this.domNode.childNodes).forEach(childNode => {
      this.contentNode.appendChild(childNode);
    });
    this.leftGuard = document.createTextNode(GUARD_TEXT);
    this.rightGuard = document.createTextNode(GUARD_TEXT);
    this.domNode.appendChild(this.leftGuard);
    this.domNode.appendChild(this.contentNode);
    this.domNode.appendChild(this.rightGuard);
  }

  index(node, offset) {
    if (node === this.leftGuard) return 0;
    if (node === this.rightGuard) return 1;
    return super.index(node, offset);
  }

  restore(node) {
    let range;
    let textNode;
    const text = node.data.split(GUARD_TEXT).join('');
    if (node === this.leftGuard) {
      if (this.prev instanceof _text__WEBPACK_IMPORTED_MODULE_1__["default"]) {
        const prevLength = this.prev.length();
        this.prev.insertAt(prevLength, text);
        range = {
          startNode: this.prev.domNode,
          startOffset: prevLength + text.length,
        };
      } else {
        textNode = document.createTextNode(text);
        this.parent.insertBefore(this.scroll.create(textNode), this);
        range = {
          startNode: textNode,
          startOffset: text.length,
        };
      }
    } else if (node === this.rightGuard) {
      if (this.next instanceof _text__WEBPACK_IMPORTED_MODULE_1__["default"]) {
        this.next.insertAt(0, text);
        range = {
          startNode: this.next.domNode,
          startOffset: text.length,
        };
      } else {
        textNode = document.createTextNode(text);
        this.parent.insertBefore(this.scroll.create(textNode), this.next);
        range = {
          startNode: textNode,
          startOffset: text.length,
        };
      }
    }
    node.data = GUARD_TEXT;
    return range;
  }

  update(mutations, context) {
    mutations.forEach(mutation => {
      if (
        mutation.type === 'characterData' &&
        (mutation.target === this.leftGuard ||
          mutation.target === this.rightGuard)
      ) {
        const range = this.restore(mutation.target);
        if (range) context.range = range;
      }
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Embed);


/***/ }),

/***/ "./blots/inline.js":
/*!*************************!*\
  !*** ./blots/inline.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/dist/parchment.js");
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _break__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./break */ "./blots/break.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text */ "./blots/text.js");




class Inline extends parchment__WEBPACK_IMPORTED_MODULE_0__["InlineBlot"] {
  static compare(self, other) {
    const selfIndex = Inline.order.indexOf(self);
    const otherIndex = Inline.order.indexOf(other);
    if (selfIndex >= 0 || otherIndex >= 0) {
      return selfIndex - otherIndex;
    }
    if (self === other) {
      return 0;
    }
    if (self < other) {
      return -1;
    }
    return 1;
  }

  formatAt(index, length, name, value) {
    if (
      Inline.compare(this.statics.blotName, name) < 0 &&
      this.scroll.query(name, parchment__WEBPACK_IMPORTED_MODULE_0__["Scope"].BLOT)
    ) {
      const blot = this.isolate(index, length);
      if (value) {
        blot.wrap(name, value);
      }
    } else {
      super.formatAt(index, length, name, value);
    }
  }

  optimize(context) {
    super.optimize(context);
    if (
      this.parent instanceof Inline &&
      Inline.compare(this.statics.blotName, this.parent.statics.blotName) > 0
    ) {
      const parent = this.parent.isolate(this.offset(), this.length());
      this.moveChildren(parent);
      parent.wrap(this);
    }
  }
}
Inline.allowedChildren = [Inline, _break__WEBPACK_IMPORTED_MODULE_1__["default"], parchment__WEBPACK_IMPORTED_MODULE_0__["EmbedBlot"], _text__WEBPACK_IMPORTED_MODULE_2__["default"]];
// Lower index means deeper in the DOM tree, since not found (-1) is for embeds
Inline.order = [
  'cursor',
  'inline', // Must be lower
  'underline',
  'strike',
  'italic',
  'bold',
  'script',
  'link',
  'code', // Must be higher
];

/* harmony default export */ __webpack_exports__["default"] = (Inline);


/***/ }),

/***/ "./blots/scroll.js":
/*!*************************!*\
  !*** ./blots/scroll.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/dist/parchment.js");
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/emitter */ "./core/emitter.js");
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block */ "./blots/block.js");
/* harmony import */ var _break__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./break */ "./blots/break.js");
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./container */ "./blots/container.js");






function isLine(blot) {
  return blot instanceof _block__WEBPACK_IMPORTED_MODULE_2__["default"] || blot instanceof _block__WEBPACK_IMPORTED_MODULE_2__["BlockEmbed"];
}

class Scroll extends parchment__WEBPACK_IMPORTED_MODULE_0__["ScrollBlot"] {
  constructor(registry, domNode, { emitter }) {
    super(registry, domNode);
    this.emitter = emitter;
    this.batch = false;
    this.optimize();
    this.enable();
    this.domNode.addEventListener('dragstart', e => this.handleDragStart(e));
  }

  batchStart() {
    if (!Array.isArray(this.batch)) {
      this.batch = [];
    }
  }

  batchEnd() {
    const mutations = this.batch;
    this.batch = false;
    this.update(mutations);
  }

  emitMount(blot) {
    this.emitter.emit(_core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].events.SCROLL_BLOT_MOUNT, blot);
  }

  emitUnmount(blot) {
    this.emitter.emit(_core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].events.SCROLL_BLOT_UNMOUNT, blot);
  }

  deleteAt(index, length) {
    const [first, offset] = this.line(index);
    const [last] = this.line(index + length);
    super.deleteAt(index, length);
    if (last != null && first !== last && offset > 0) {
      if (first instanceof _block__WEBPACK_IMPORTED_MODULE_2__["BlockEmbed"] || last instanceof _block__WEBPACK_IMPORTED_MODULE_2__["BlockEmbed"]) {
        this.optimize();
        return;
      }
      const ref =
        last.children.head instanceof _break__WEBPACK_IMPORTED_MODULE_3__["default"] ? null : last.children.head;
      first.moveChildren(last, ref);
      first.remove();
    }
    this.optimize();
  }

  enable(enabled = true) {
    this.domNode.setAttribute('contenteditable', enabled);
  }

  formatAt(index, length, format, value) {
    super.formatAt(index, length, format, value);
    this.optimize();
  }

  handleDragStart(event) {
    event.preventDefault();
  }

  insertAt(index, value, def) {
    if (index >= this.length()) {
      if (def == null || this.scroll.query(value, parchment__WEBPACK_IMPORTED_MODULE_0__["Scope"].BLOCK) == null) {
        const blot = this.scroll.create(this.statics.defaultChild.blotName);
        this.appendChild(blot);
        if (def == null && value.endsWith('\n')) {
          blot.insertAt(0, value.slice(0, -1), def);
        } else {
          blot.insertAt(0, value, def);
        }
      } else {
        const embed = this.scroll.create(value, def);
        this.appendChild(embed);
      }
    } else {
      super.insertAt(index, value, def);
    }
    this.optimize();
  }

  insertBefore(blot, ref) {
    if (blot.statics.scope === parchment__WEBPACK_IMPORTED_MODULE_0__["Scope"].INLINE_BLOT) {
      const wrapper = this.scroll.create(this.statics.defaultChild.blotName);
      wrapper.appendChild(blot);
      super.insertBefore(wrapper, ref);
    } else {
      super.insertBefore(blot, ref);
    }
  }

  isEnabled() {
    return this.domNode.getAttribute('contenteditable') === 'true';
  }

  leaf(index) {
    return this.path(index).pop() || [null, -1];
  }

  line(index) {
    if (index === this.length()) {
      return this.line(index - 1);
    }
    return this.descendant(isLine, index);
  }

  lines(index = 0, length = Number.MAX_VALUE) {
    const getLines = (blot, blotIndex, blotLength) => {
      let lines = [];
      let lengthLeft = blotLength;
      blot.children.forEachAt(
        blotIndex,
        blotLength,
        (child, childIndex, childLength) => {
          if (isLine(child)) {
            lines.push(child);
          } else if (child instanceof parchment__WEBPACK_IMPORTED_MODULE_0__["ContainerBlot"]) {
            lines = lines.concat(getLines(child, childIndex, lengthLeft));
          }
          lengthLeft -= childLength;
        },
      );
      return lines;
    };
    return getLines(this, index, length);
  }

  optimize(mutations = [], context = {}) {
    if (this.batch) return;
    super.optimize(mutations, context);
    if (mutations.length > 0) {
      this.emitter.emit(_core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].events.SCROLL_OPTIMIZE, mutations, context);
    }
  }

  path(index) {
    return super.path(index).slice(1); // Exclude self
  }

  remove() {
    // Never remove self
  }

  update(mutations) {
    if (this.batch) {
      if (Array.isArray(mutations)) {
        this.batch = this.batch.concat(mutations);
      }
      return;
    }
    let source = _core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER;
    if (typeof mutations === 'string') {
      source = mutations;
    }
    if (!Array.isArray(mutations)) {
      mutations = this.observer.takeRecords();
    }
    if (mutations.length > 0) {
      this.emitter.emit(_core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].events.SCROLL_BEFORE_UPDATE, source, mutations);
    }
    super.update(mutations.concat([])); // pass copy
    if (mutations.length > 0) {
      this.emitter.emit(_core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].events.SCROLL_UPDATE, source, mutations);
    }
  }
}
Scroll.blotName = 'scroll';
Scroll.className = 'ql-editor';
Scroll.tagName = 'DIV';
Scroll.defaultChild = _block__WEBPACK_IMPORTED_MODULE_2__["default"];
Scroll.allowedChildren = [_block__WEBPACK_IMPORTED_MODULE_2__["default"], _block__WEBPACK_IMPORTED_MODULE_2__["BlockEmbed"], _container__WEBPACK_IMPORTED_MODULE_4__["default"]];

/* harmony default export */ __webpack_exports__["default"] = (Scroll);


/***/ }),

/***/ "./blots/text.js":
/*!***********************!*\
  !*** ./blots/text.js ***!
  \***********************/
/*! exports provided: default, escapeText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeText", function() { return escapeText; });
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/dist/parchment.js");
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_0__);


class Text extends parchment__WEBPACK_IMPORTED_MODULE_0__["TextBlot"] {}

function escapeText(text) {
  return text.replace(/[&<>"']/g, s => {
    // https://lodash.com/docs#escape
    const entityMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return entityMap[s];
  });
}




/***/ }),

/***/ "./core.js":
/*!*****************!*\
  !*** ./core.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/quill */ "./core/quill.js");
/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blots/block */ "./blots/block.js");
/* harmony import */ var _blots_break__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blots/break */ "./blots/break.js");
/* harmony import */ var _blots_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blots/container */ "./blots/container.js");
/* harmony import */ var _blots_cursor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blots/cursor */ "./blots/cursor.js");
/* harmony import */ var _blots_embed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blots/embed */ "./blots/embed.js");
/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blots/inline */ "./blots/inline.js");
/* harmony import */ var _blots_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blots/scroll */ "./blots/scroll.js");
/* harmony import */ var _blots_text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blots/text */ "./blots/text.js");
/* harmony import */ var _modules_clipboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/clipboard */ "./modules/clipboard.js");
/* harmony import */ var _modules_history__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/history */ "./modules/history.js");
/* harmony import */ var _modules_keyboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/keyboard */ "./modules/keyboard.js");
/* harmony import */ var _modules_uploader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/uploader */ "./modules/uploader.js");
















_core_quill__WEBPACK_IMPORTED_MODULE_0__["default"].register({
  'blots/block': _blots_block__WEBPACK_IMPORTED_MODULE_1__["default"],
  'blots/block/embed': _blots_block__WEBPACK_IMPORTED_MODULE_1__["BlockEmbed"],
  'blots/break': _blots_break__WEBPACK_IMPORTED_MODULE_2__["default"],
  'blots/container': _blots_container__WEBPACK_IMPORTED_MODULE_3__["default"],
  'blots/cursor': _blots_cursor__WEBPACK_IMPORTED_MODULE_4__["default"],
  'blots/embed': _blots_embed__WEBPACK_IMPORTED_MODULE_5__["default"],
  'blots/inline': _blots_inline__WEBPACK_IMPORTED_MODULE_6__["default"],
  'blots/scroll': _blots_scroll__WEBPACK_IMPORTED_MODULE_7__["default"],
  'blots/text': _blots_text__WEBPACK_IMPORTED_MODULE_8__["default"],

  'modules/clipboard': _modules_clipboard__WEBPACK_IMPORTED_MODULE_9__["default"],
  'modules/history': _modules_history__WEBPACK_IMPORTED_MODULE_10__["default"],
  'modules/keyboard': _modules_keyboard__WEBPACK_IMPORTED_MODULE_11__["default"],
  'modules/uploader': _modules_uploader__WEBPACK_IMPORTED_MODULE_12__["default"],
});

/* harmony default export */ __webpack_exports__["default"] = (_core_quill__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./core/editor.js":
/*!************************!*\
  !*** ./core/editor.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clone */ "./node_modules/clone/clone.js");
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deep-equal */ "./node_modules/deep-equal/index.js");
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(deep_equal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! extend */ "./node_modules/extend/index.js");
/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! quill-delta */ "./node_modules/quill-delta/dist/Delta.js");
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/dist/parchment.js");
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _selection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selection */ "./core/selection.js");
/* harmony import */ var _blots_cursor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blots/cursor */ "./blots/cursor.js");
/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../blots/block */ "./blots/block.js");
/* harmony import */ var _blots_break__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../blots/break */ "./blots/break.js");
/* harmony import */ var _blots_text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../blots/text */ "./blots/text.js");











const ASCII = /^[ -~]*$/;

class Editor {
  constructor(scroll) {
    this.scroll = scroll;
    this.delta = this.getDelta();
  }

  applyDelta(delta) {
    let consumeNextNewline = false;
    this.scroll.update();
    let scrollLength = this.scroll.length();
    this.scroll.batchStart();
    const normalizedDelta = normalizeDelta(delta);
    normalizedDelta.reduce((index, op) => {
      const length = op.retain || op.delete || op.insert.length || 1;
      let attributes = op.attributes || {};
      if (op.insert != null) {
        if (typeof op.insert === 'string') {
          let text = op.insert;
          if (text.endsWith('\n') && consumeNextNewline) {
            consumeNextNewline = false;
            text = text.slice(0, -1);
          }
          if (
            (index >= scrollLength ||
              this.scroll.descendant(_blots_block__WEBPACK_IMPORTED_MODULE_7__["BlockEmbed"], index)[0]) &&
            !text.endsWith('\n')
          ) {
            consumeNextNewline = true;
          }
          this.scroll.insertAt(index, text);
          const [line, offset] = this.scroll.line(index);
          let formats = extend__WEBPACK_IMPORTED_MODULE_2___default()({}, Object(_blots_block__WEBPACK_IMPORTED_MODULE_7__["bubbleFormats"])(line));
          if (line instanceof _blots_block__WEBPACK_IMPORTED_MODULE_7__["default"]) {
            const [leaf] = line.descendant(parchment__WEBPACK_IMPORTED_MODULE_4__["LeafBlot"], offset);
            formats = extend__WEBPACK_IMPORTED_MODULE_2___default()(formats, Object(_blots_block__WEBPACK_IMPORTED_MODULE_7__["bubbleFormats"])(leaf));
          }
          attributes = quill_delta__WEBPACK_IMPORTED_MODULE_3__["AttributeMap"].diff(formats, attributes) || {};
        } else if (typeof op.insert === 'object') {
          const key = Object.keys(op.insert)[0]; // There should only be one key
          if (key == null) return index;
          this.scroll.insertAt(index, key, op.insert[key]);
        }
        scrollLength += length;
      }
      Object.keys(attributes).forEach(name => {
        this.scroll.formatAt(index, length, name, attributes[name]);
      });
      return index + length;
    }, 0);
    normalizedDelta.reduce((index, op) => {
      if (typeof op.delete === 'number') {
        this.scroll.deleteAt(index, op.delete);
        return index;
      }
      return index + (op.retain || op.insert.length || 1);
    }, 0);
    this.scroll.batchEnd();
    this.scroll.optimize();
    return this.update(normalizedDelta);
  }

  deleteText(index, length) {
    this.scroll.deleteAt(index, length);
    return this.update(new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).delete(length));
  }

  formatLine(index, length, formats = {}) {
    this.scroll.update();
    Object.keys(formats).forEach(format => {
      this.scroll.lines(index, Math.max(length, 1)).forEach(line => {
        line.format(format, formats[format]);
      });
    });
    this.scroll.optimize();
    const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).retain(length, clone__WEBPACK_IMPORTED_MODULE_0___default()(formats));
    return this.update(delta);
  }

  formatText(index, length, formats = {}) {
    Object.keys(formats).forEach(format => {
      this.scroll.formatAt(index, length, format, formats[format]);
    });
    const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).retain(length, clone__WEBPACK_IMPORTED_MODULE_0___default()(formats));
    return this.update(delta);
  }

  getContents(index, length) {
    return this.delta.slice(index, index + length);
  }

  getDelta() {
    return this.scroll.lines().reduce((delta, line) => {
      return delta.concat(line.delta());
    }, new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a());
  }

  getFormat(index, length = 0) {
    let lines = [];
    let leaves = [];
    if (length === 0) {
      this.scroll.path(index).forEach(path => {
        const [blot] = path;
        if (blot instanceof _blots_block__WEBPACK_IMPORTED_MODULE_7__["default"]) {
          lines.push(blot);
        } else if (blot instanceof parchment__WEBPACK_IMPORTED_MODULE_4__["LeafBlot"]) {
          leaves.push(blot);
        }
      });
    } else {
      lines = this.scroll.lines(index, length);
      leaves = this.scroll.descendants(parchment__WEBPACK_IMPORTED_MODULE_4__["LeafBlot"], index, length);
    }
    const formatsArr = [lines, leaves].map(blots => {
      if (blots.length === 0) return {};
      let formats = Object(_blots_block__WEBPACK_IMPORTED_MODULE_7__["bubbleFormats"])(blots.shift());
      while (Object.keys(formats).length > 0) {
        const blot = blots.shift();
        if (blot == null) return formats;
        formats = combineFormats(Object(_blots_block__WEBPACK_IMPORTED_MODULE_7__["bubbleFormats"])(blot), formats);
      }
      return formats;
    });
    return extend__WEBPACK_IMPORTED_MODULE_2___default.a.apply(extend__WEBPACK_IMPORTED_MODULE_2___default.a, formatsArr);
  }

  getHTML(index, length) {
    const [line, lineOffset] = this.scroll.line(index);
    if (line.length() >= lineOffset + length) {
      return convertHTML(line, lineOffset, length, true);
    }
    return convertHTML(this.scroll, index, length, true);
  }

  getText(index, length) {
    return this.getContents(index, length)
      .filter(op => typeof op.insert === 'string')
      .map(op => op.insert)
      .join('');
  }

  insertEmbed(index, embed, value) {
    this.scroll.insertAt(index, embed, value);
    return this.update(new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).insert({ [embed]: value }));
  }

  insertText(index, text, formats = {}) {
    text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    this.scroll.insertAt(index, text);
    Object.keys(formats).forEach(format => {
      this.scroll.formatAt(index, text.length, format, formats[format]);
    });
    return this.update(new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).insert(text, clone__WEBPACK_IMPORTED_MODULE_0___default()(formats)));
  }

  isBlank() {
    if (this.scroll.children.length === 0) return true;
    if (this.scroll.children.length > 1) return false;
    const block = this.scroll.children.head;
    if (block.statics.blotName !== _blots_block__WEBPACK_IMPORTED_MODULE_7__["default"].blotName) return false;
    if (block.children.length > 1) return false;
    return block.children.head instanceof _blots_break__WEBPACK_IMPORTED_MODULE_8__["default"];
  }

  removeFormat(index, length) {
    const text = this.getText(index, length);
    const [line, offset] = this.scroll.line(index + length);
    let suffixLength = 0;
    let suffix = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a();
    if (line != null) {
      suffixLength = line.length() - offset;
      suffix = line
        .delta()
        .slice(offset, offset + suffixLength - 1)
        .insert('\n');
    }
    const contents = this.getContents(index, length + suffixLength);
    const diff = contents.diff(new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().insert(text).concat(suffix));
    const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).concat(diff);
    return this.applyDelta(delta);
  }

  update(change, mutations = [], selectionInfo = undefined) {
    const oldDelta = this.delta;
    if (
      mutations.length === 1 &&
      mutations[0].type === 'characterData' &&
      mutations[0].target.data.match(ASCII) &&
      this.scroll.find(mutations[0].target)
    ) {
      // Optimization for character changes
      const textBlot = this.scroll.find(mutations[0].target);
      const formats = Object(_blots_block__WEBPACK_IMPORTED_MODULE_7__["bubbleFormats"])(textBlot);
      const index = textBlot.offset(this.scroll);
      const oldValue = mutations[0].oldValue.replace(_blots_cursor__WEBPACK_IMPORTED_MODULE_6__["default"].CONTENTS, '');
      const oldText = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().insert(oldValue);
      const newText = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().insert(textBlot.value());
      const relativeSelectionInfo = selectionInfo && {
        oldRange: shiftRange(selectionInfo.oldRange, -index),
        newRange: shiftRange(selectionInfo.newRange, -index),
      };
      const diffDelta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a()
        .retain(index)
        .concat(oldText.diff(newText, relativeSelectionInfo));
      change = diffDelta.reduce((delta, op) => {
        if (op.insert) {
          return delta.insert(op.insert, formats);
        }
        return delta.push(op);
      }, new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a());
      this.delta = oldDelta.compose(change);
    } else {
      this.delta = this.getDelta();
      if (!change || !deep_equal__WEBPACK_IMPORTED_MODULE_1___default()(oldDelta.compose(change), this.delta)) {
        change = oldDelta.diff(this.delta, selectionInfo);
      }
    }
    return change;
  }
}

function convertListHTML(items, lastIndent, types) {
  if (items.length === 0) {
    const [endTag] = getListType(types.pop());
    if (lastIndent <= 0) {
      return `</li></${endTag}>`;
    }
    return `</li></${endTag}>${convertListHTML([], lastIndent - 1, types)}`;
  }
  const [{ child, offset, length, indent, type }, ...rest] = items;
  const [tag, attribute] = getListType(type);
  if (indent > lastIndent) {
    types.push(type);
    if (indent === lastIndent + 1) {
      return `<${tag}><li${attribute}>${convertHTML(
        child,
        offset,
        length,
      )}${convertListHTML(rest, indent, types)}`;
    }
    return `<${tag}><li>${convertListHTML(items, lastIndent + 1, types)}`;
  }
  const previousType = types[types.length - 1];
  if (indent === lastIndent && type === previousType) {
    return `</li><li${attribute}>${convertHTML(
      child,
      offset,
      length,
    )}${convertListHTML(rest, indent, types)}`;
  }
  const [endTag] = getListType(types.pop());
  return `</li></${endTag}>${convertListHTML(items, lastIndent - 1, types)}`;
}

function convertHTML(blot, index, length, isRoot = false) {
  if (typeof blot.html === 'function') {
    return blot.html(index, length);
  }
  if (blot instanceof _blots_text__WEBPACK_IMPORTED_MODULE_9__["default"]) {
    return Object(_blots_text__WEBPACK_IMPORTED_MODULE_9__["escapeText"])(blot.value().slice(index, index + length));
  }
  if (blot.children) {
    // TODO fix API
    if (blot.statics.blotName === 'list-container') {
      const items = [];
      blot.children.forEachAt(index, length, (child, offset, childLength) => {
        const formats = child.formats();
        items.push({
          child,
          offset,
          length: childLength,
          indent: formats.indent || 0,
          type: formats.list,
        });
      });
      return convertListHTML(items, -1, []);
    }
    const parts = [];
    blot.children.forEachAt(index, length, (child, offset, childLength) => {
      parts.push(convertHTML(child, offset, childLength));
    });
    if (isRoot || blot.statics.blotName === 'list') {
      return parts.join('');
    }
    const { outerHTML, innerHTML } = blot.domNode;
    const [start, end] = outerHTML.split(`>${innerHTML}<`);
    // TODO cleanup
    if (start === '<table') {
      return `<table style="border: 1px solid #000;">${parts.join('')}<${end}`;
    }
    return `${start}>${parts.join('')}<${end}`;
  }
  return blot.domNode.outerHTML;
}

function combineFormats(formats, combined) {
  return Object.keys(combined).reduce((merged, name) => {
    if (formats[name] == null) return merged;
    if (combined[name] === formats[name]) {
      merged[name] = combined[name];
    } else if (Array.isArray(combined[name])) {
      if (combined[name].indexOf(formats[name]) < 0) {
        merged[name] = combined[name].concat([formats[name]]);
      }
    } else {
      merged[name] = [combined[name], formats[name]];
    }
    return merged;
  }, {});
}

function getListType(type) {
  const tag = type === 'ordered' ? 'ol' : 'ul';
  switch (type) {
    case 'checked':
      return [tag, ' data-list="checked"'];
    case 'unchecked':
      return [tag, ' data-list="unchecked"'];
    default:
      return [tag, ''];
  }
}

function normalizeDelta(delta) {
  return delta.reduce((normalizedDelta, op) => {
    if (typeof op.insert === 'string') {
      const text = op.insert.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
      return normalizedDelta.insert(text, op.attributes);
    }
    return normalizedDelta.push(op);
  }, new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a());
}

function shiftRange({ index, length }, amount) {
  return new _selection__WEBPACK_IMPORTED_MODULE_5__["Range"](index + amount, length);
}

/* harmony default export */ __webpack_exports__["default"] = (Editor);


/***/ }),

/***/ "./core/emitter.js":
/*!*************************!*\
  !*** ./core/emitter.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _instances__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instances */ "./core/instances.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger */ "./core/logger.js");




const debug = Object(_logger__WEBPACK_IMPORTED_MODULE_2__["default"])('quill:events');
const EVENTS = ['selectionchange', 'mousedown', 'mouseup', 'click'];

EVENTS.forEach(eventName => {
  document.addEventListener(eventName, (...args) => {
    Array.from(document.querySelectorAll('.ql-container')).forEach(node => {
      const quill = _instances__WEBPACK_IMPORTED_MODULE_1__["default"].get(node);
      if (quill && quill.emitter) {
        quill.emitter.handleDOM(...args);
      }
    });
  });
});

class Emitter extends eventemitter3__WEBPACK_IMPORTED_MODULE_0___default.a {
  constructor() {
    super();
    this.listeners = {};
    this.on('error', debug.error);
  }

  emit(...args) {
    debug.log.call(debug, ...args);
    super.emit(...args);
  }

  handleDOM(event, ...args) {
    (this.listeners[event.type] || []).forEach(({ node, handler }) => {
      if (event.target === node || node.contains(event.target)) {
        handler(event, ...args);
      }
    });
  }

  listenDOM(eventName, node, handler) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push({ node, handler });
  }
}

Emitter.events = {
  EDITOR_CHANGE: 'editor-change',
  SCROLL_BEFORE_UPDATE: 'scroll-before-update',
  SCROLL_BLOT_MOUNT: 'scroll-blot-mount',
  SCROLL_BLOT_UNMOUNT: 'scroll-blot-unmount',
  SCROLL_OPTIMIZE: 'scroll-optimize',
  SCROLL_UPDATE: 'scroll-update',
  SELECTION_CHANGE: 'selection-change',
  TEXT_CHANGE: 'text-change',
};
Emitter.sources = {
  API: 'api',
  SILENT: 'silent',
  USER: 'user',
};

/* harmony default export */ __webpack_exports__["default"] = (Emitter);


/***/ }),

/***/ "./core/instances.js":
/*!***************************!*\
  !*** ./core/instances.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (new WeakMap());


/***/ }),

/***/ "./core/logger.js":
/*!************************!*\
  !*** ./core/logger.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const levels = ['error', 'warn', 'log', 'info'];
let level = 'warn';

function debug(method, ...args) {
  if (levels.indexOf(method) <= levels.indexOf(level)) {
    console[method](...args); // eslint-disable-line no-console
  }
}

function namespace(ns) {
  return levels.reduce((logger, method) => {
    logger[method] = debug.bind(console, method, ns);
    return logger;
  }, {});
}

namespace.level = newLevel => {
  level = newLevel;
};
debug.level = namespace.level;

/* harmony default export */ __webpack_exports__["default"] = (namespace);


/***/ }),

/***/ "./core/module.js":
/*!************************!*\
  !*** ./core/module.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Module {
  constructor(quill, options = {}) {
    this.quill = quill;
    this.options = options;
  }
}
Module.DEFAULTS = {};

/* harmony default export */ __webpack_exports__["default"] = (Module);


/***/ }),

/***/ "./core/quill.js":
/*!***********************!*\
  !*** ./core/quill.js ***!
  \***********************/
/*! exports provided: globalRegistry, expandConfig, overload, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalRegistry", function() { return globalRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandConfig", function() { return expandConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overload", function() { return overload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Quill; });
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill-delta */ "./node_modules/quill-delta/dist/Delta.js");
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/dist/parchment.js");
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! extend */ "./node_modules/extend/index.js");
/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor */ "./core/editor.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emitter */ "./core/emitter.js");
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module */ "./core/module.js");
/* harmony import */ var _selection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selection */ "./core/selection.js");
/* harmony import */ var _instances__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instances */ "./core/instances.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logger */ "./core/logger.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./theme */ "./core/theme.js");











const debug = Object(_logger__WEBPACK_IMPORTED_MODULE_8__["default"])('quill');

const globalRegistry = new parchment__WEBPACK_IMPORTED_MODULE_1__["Registry"]();
parchment__WEBPACK_IMPORTED_MODULE_1__["ParentBlot"].uiClass = 'ql-ui';

class Quill {
  static debug(limit) {
    if (limit === true) {
      limit = 'log';
    }
    _logger__WEBPACK_IMPORTED_MODULE_8__["default"].level(limit);
  }

  static find(node) {
    return _instances__WEBPACK_IMPORTED_MODULE_7__["default"].get(node) || globalRegistry.find(node);
  }

  static import(name) {
    if (this.imports[name] == null) {
      debug.error(`Cannot import ${name}. Are you sure it was registered?`);
    }
    return this.imports[name];
  }

  static register(path, target, overwrite = false) {
    if (typeof path !== 'string') {
      const name = path.attrName || path.blotName;
      if (typeof name === 'string') {
        // register(Blot | Attributor, overwrite)
        this.register(`formats/${name}`, path, target);
      } else {
        Object.keys(path).forEach(key => {
          this.register(key, path[key], target);
        });
      }
    } else {
      if (this.imports[path] != null && !overwrite) {
        debug.warn(`Overwriting ${path} with`, target);
      }
      this.imports[path] = target;
      if (
        (path.startsWith('blots/') || path.startsWith('formats/')) &&
        target.blotName !== 'abstract'
      ) {
        globalRegistry.register(target);
      }
      if (typeof target.register === 'function') {
        target.register(globalRegistry);
      }
    }
  }

  constructor(container, options = {}) {
    //配置选项
    this.options = expandConfig(container, options);
    //返回根节点
    this.container = this.options.container;
    if (this.container == null) {
      return debug.error('Invalid Quill container', container);
    }
    if (this.options.debug) {
      Quill.debug(this.options.debug);
    }
    //缓存html
    const html = this.container.innerHTML.trim();
    this.container.classList.add('ql-container');
    this.container.innerHTML = '';
    //
    _instances__WEBPACK_IMPORTED_MODULE_7__["default"].set(this.container, this);
    //根节点下添加子节点
    this.root = this.addContainer('ql-editor');
    this.root.classList.add('ql-blank');
    this.root.setAttribute('data-gramm', false);

    //
    this.scrollingContainer = this.options.scrollingContainer || this.root;
    //事件触发器
    this.emitter = new _emitter__WEBPACK_IMPORTED_MODULE_4__["default"]();

    const ScrollBlot = this.options.registry.query(
      parchment__WEBPACK_IMPORTED_MODULE_1__["ScrollBlot"].blotName,
    );
    console.log(ScrollBlot)
    this.scroll = new ScrollBlot(this.options.registry, this.root, {
      emitter: this.emitter,
    });
    this.editor = new _editor__WEBPACK_IMPORTED_MODULE_3__["default"](this.scroll);
    this.selection = new _selection__WEBPACK_IMPORTED_MODULE_6__["default"](this.scroll, this.emitter);
    this.theme = new this.options.theme(this, this.options); // eslint-disable-line new-cap
    this.keyboard = this.theme.addModule('keyboard');
    this.clipboard = this.theme.addModule('clipboard');
    this.history = this.theme.addModule('history');
    this.uploader = this.theme.addModule('uploader');
    this.theme.init();
    this.emitter.on(_emitter__WEBPACK_IMPORTED_MODULE_4__["default"].events.EDITOR_CHANGE, type => {
      if (type === _emitter__WEBPACK_IMPORTED_MODULE_4__["default"].events.TEXT_CHANGE) {
        this.root.classList.toggle('ql-blank', this.editor.isBlank());
      }
    });
    this.emitter.on(_emitter__WEBPACK_IMPORTED_MODULE_4__["default"].events.SCROLL_UPDATE, (source, mutations) => {
      const oldRange = this.selection.lastRange;
      const [newRange] = this.selection.getRange();
      const selectionInfo =
        oldRange && newRange ? { oldRange, newRange } : undefined;
      modify.call(
        this,
        () => this.editor.update(null, mutations, selectionInfo),
        source,
      );
    });
    const contents = this.clipboard.convert({
      html: `${html}<p><br></p>`,
      text: '\n',
    });
    this.setContents(contents);
    this.history.clear();
    if (this.options.placeholder) {
      this.root.setAttribute('data-placeholder', this.options.placeholder);
    }
    if (this.options.readOnly) {
      this.disable();
    }
    this.allowReadOnlyEdits = false;
  }

  addContainer(container, refNode = null) {
    if (typeof container === 'string') {
      const className = container;
      container = document.createElement('div');
      container.classList.add(className);
    }
    this.container.insertBefore(container, refNode);
    return container;
  }

  blur() {
    this.selection.setRange(null);
  }

  deleteText(index, length, source) {
    [index, length, , source] = overload(index, length, source);
    return modify.call(
      this,
      () => {
        return this.editor.deleteText(index, length);
      },
      source,
      index,
      -1 * length,
    );
  }

  disable() {
    this.enable(false);
  }

  editReadOnly(modifier) {
    this.allowReadOnlyEdits = true;
    const value = modifier();
    this.allowReadOnlyEdits = false;
    return value;
  }

  enable(enabled = true) {
    this.scroll.enable(enabled);
    this.container.classList.toggle('ql-disabled', !enabled);
  }

  focus() {
    const { scrollTop } = this.scrollingContainer;
    this.selection.focus();
    this.scrollingContainer.scrollTop = scrollTop;
    this.scrollIntoView();
  }

  format(name, value, source = _emitter__WEBPACK_IMPORTED_MODULE_4__["default"].sources.API) {
    return modify.call(
      this,
      () => {
        const range = this.getSelection(true);
        let change = new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a();
        if (range == null) return change;
        if (this.scroll.query(name, parchment__WEBPACK_IMPORTED_MODULE_1__["Scope"].BLOCK)) {
          change = this.editor.formatLine(range.index, range.length, {
            [name]: value,
          });
        } else if (range.length === 0) {
          this.selection.format(name, value);
          return change;
        } else {
          change = this.editor.formatText(range.index, range.length, {
            [name]: value,
          });
        }
        this.setSelection(range, _emitter__WEBPACK_IMPORTED_MODULE_4__["default"].sources.SILENT);
        return change;
      },
      source,
    );
  }

  formatLine(index, length, name, value, source) {
    let formats;
    // eslint-disable-next-line prefer-const
    [index, length, formats, source] = overload(
      index,
      length,
      name,
      value,
      source,
    );
    return modify.call(
      this,
      () => {
        return this.editor.formatLine(index, length, formats);
      },
      source,
      index,
      0,
    );
  }

  formatText(index, length, name, value, source) {
    let formats;
    // eslint-disable-next-line prefer-const
    [index, length, formats, source] = overload(
      index,
      length,
      name,
      value,
      source,
    );
    return modify.call(
      this,
      () => {
        return this.editor.formatText(index, length, formats);
      },
      source,
      index,
      0,
    );
  }

  getBounds(index, length = 0) {
    let bounds;
    if (typeof index === 'number') {
      bounds = this.selection.getBounds(index, length);
    } else {
      bounds = this.selection.getBounds(index.index, index.length);
    }
    const containerBounds = this.container.getBoundingClientRect();
    return {
      bottom: bounds.bottom - containerBounds.top,
      height: bounds.height,
      left: bounds.left - containerBounds.left,
      right: bounds.right - containerBounds.left,
      top: bounds.top - containerBounds.top,
      width: bounds.width,
    };
  }

  getContents(index = 0, length = this.getLength() - index) {
    [index, length] = overload(index, length);
    return this.editor.getContents(index, length);
  }

  getFormat(index = this.getSelection(true), length = 0) {
    if (typeof index === 'number') {
      return this.editor.getFormat(index, length);
    }
    return this.editor.getFormat(index.index, index.length);
  }

  getIndex(blot) {
    return blot.offset(this.scroll);
  }

  getLength() {
    return this.scroll.length();
  }

  getLeaf(index) {
    return this.scroll.leaf(index);
  }

  getLine(index) {
    return this.scroll.line(index);
  }

  getLines(index = 0, length = Number.MAX_VALUE) {
    if (typeof index !== 'number') {
      return this.scroll.lines(index.index, index.length);
    }
    return this.scroll.lines(index, length);
  }

  getModule(name) {
    return this.theme.modules[name];
  }

  getSelection(focus = false) {
    if (focus) this.focus();
    this.update(); // Make sure we access getRange with editor in consistent state
    return this.selection.getRange()[0];
  }

  getSemanticHTML(index = 0, length = this.getLength() - index) {
    [index, length] = overload(index, length);
    return this.editor.getHTML(index, length);
  }

  getText(index = 0, length = this.getLength() - index) {
    [index, length] = overload(index, length);
    return this.editor.getText(index, length);
  }

  hasFocus() {
    return this.selection.hasFocus();
  }

  insertEmbed(index, embed, value, source = Quill.sources.API) {
    return modify.call(
      this,
      () => {
        return this.editor.insertEmbed(index, embed, value);
      },
      source,
      index,
    );
  }

  insertText(index, text, name, value, source) {
    let formats;
    // eslint-disable-next-line prefer-const
    [index, , formats, source] = overload(index, 0, name, value, source);
    return modify.call(
      this,
      () => {
        return this.editor.insertText(index, text, formats);
      },
      source,
      index,
      text.length,
    );
  }

  isEnabled() {
    return this.scroll.isEnabled();
  }

  off(...args) {
    return this.emitter.off(...args);
  }

  on(...args) {
    return this.emitter.on(...args);
  }

  once(...args) {
    return this.emitter.once(...args);
  }

  removeFormat(index, length, source) {
    [index, length, , source] = overload(index, length, source);
    return modify.call(
      this,
      () => {
        return this.editor.removeFormat(index, length);
      },
      source,
      index,
    );
  }

  scrollIntoView() {
    this.selection.scrollIntoView(this.scrollingContainer);
  }

  setContents(delta, source = _emitter__WEBPACK_IMPORTED_MODULE_4__["default"].sources.API) {
    return modify.call(
      this,
      () => {
        delta = new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a(delta);
        const length = this.getLength();
        const deleted = this.editor.deleteText(0, length);
        const applied = this.editor.applyDelta(delta);
        const lastOp = applied.ops[applied.ops.length - 1];
        if (
          lastOp != null &&
          typeof lastOp.insert === 'string' &&
          lastOp.insert[lastOp.insert.length - 1] === '\n'
        ) {
          this.editor.deleteText(this.getLength() - 1, 1);
          applied.delete(1);
        }
        return deleted.compose(applied);
      },
      source,
    );
  }

  setSelection(index, length, source) {
    if (index == null) {
      this.selection.setRange(null, length || Quill.sources.API);
    } else {
      [index, length, , source] = overload(index, length, source);
      this.selection.setRange(new _selection__WEBPACK_IMPORTED_MODULE_6__["Range"](Math.max(0, index), length), source);
      if (source !== _emitter__WEBPACK_IMPORTED_MODULE_4__["default"].sources.SILENT) {
        this.selection.scrollIntoView(this.scrollingContainer);
      }
    }
  }

  setText(text, source = _emitter__WEBPACK_IMPORTED_MODULE_4__["default"].sources.API) {
    const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a().insert(text);
    return this.setContents(delta, source);
  }

  update(source = _emitter__WEBPACK_IMPORTED_MODULE_4__["default"].sources.USER) {
    const change = this.scroll.update(source); // Will update selection before selection.update() does if text changes
    this.selection.update(source);
    // TODO this is usually undefined
    return change;
  }

  updateContents(delta, source = _emitter__WEBPACK_IMPORTED_MODULE_4__["default"].sources.API) {
    return modify.call(
      this,
      () => {
        delta = new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a(delta);
        return this.editor.applyDelta(delta, source);
      },
      source,
      true,
    );
  }
}
Quill.DEFAULTS = {
  bounds: null,
  modules: {},
  placeholder: '',
  readOnly: false,
  registry: globalRegistry,
  scrollingContainer: null,
  theme: 'default',
};
Quill.events = _emitter__WEBPACK_IMPORTED_MODULE_4__["default"].events;
Quill.sources = _emitter__WEBPACK_IMPORTED_MODULE_4__["default"].sources;
// eslint-disable-next-line no-undef
Quill.version = typeof QUILL_VERSION === 'undefined' ? 'dev' : QUILL_VERSION;

Quill.imports = {
  delta: quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a,
  parchment: parchment__WEBPACK_IMPORTED_MODULE_1__,
  'core/module': _module__WEBPACK_IMPORTED_MODULE_5__["default"],
  'core/theme': _theme__WEBPACK_IMPORTED_MODULE_9__["default"],
};

function expandConfig(container, userConfig) {
  userConfig = extend__WEBPACK_IMPORTED_MODULE_2___default()(
    true,
    {
      container,
      modules: {
        clipboard: true,
        keyboard: true,
        history: true,
        uploader: true,
      },
    },
    userConfig,
  );
  if (!userConfig.theme || userConfig.theme === Quill.DEFAULTS.theme) {
    userConfig.theme = _theme__WEBPACK_IMPORTED_MODULE_9__["default"];
  } else {
    userConfig.theme = Quill.import(`themes/${userConfig.theme}`);
    if (userConfig.theme == null) {
      throw new Error(
        `Invalid theme ${userConfig.theme}. Did you register it?`,
      );
    }
  }
  const themeConfig = extend__WEBPACK_IMPORTED_MODULE_2___default()(true, {}, userConfig.theme.DEFAULTS);
  [themeConfig, userConfig].forEach(config => {
    config.modules = config.modules || {};
    Object.keys(config.modules).forEach(module => {
      if (config.modules[module] === true) {
        config.modules[module] = {};
      }
    });
  });
  const moduleNames = Object.keys(themeConfig.modules).concat(
    Object.keys(userConfig.modules),
  );
  const moduleConfig = moduleNames.reduce((config, name) => {
    const moduleClass = Quill.import(`modules/${name}`);
    if (moduleClass == null) {
      debug.error(
        `Cannot load ${name} module. Are you sure you registered it?`,
      );
    } else {
      config[name] = moduleClass.DEFAULTS || {};
    }
    return config;
  }, {});
  // Special case toolbar shorthand
  if (
    userConfig.modules != null &&
    userConfig.modules.toolbar &&
    userConfig.modules.toolbar.constructor !== Object
  ) {
    userConfig.modules.toolbar = {
      container: userConfig.modules.toolbar,
    };
  }
  userConfig = extend__WEBPACK_IMPORTED_MODULE_2___default()(
    true,
    {},
    Quill.DEFAULTS,
    { modules: moduleConfig },
    themeConfig,
    userConfig,
  );
  ['bounds', 'container', 'scrollingContainer'].forEach(key => {
    if (typeof userConfig[key] === 'string') {
      userConfig[key] = document.querySelector(userConfig[key]);
    }
  });
  userConfig.modules = Object.keys(userConfig.modules).reduce(
    (config, name) => {
      if (userConfig.modules[name]) {
        config[name] = userConfig.modules[name];
      }
      return config;
    },
    {},
  );
  return userConfig;
}

// Handle selection preservation and TEXT_CHANGE emission
// common to modification APIs
function modify(modifier, source, index, shift) {
  if (
    !this.isEnabled() &&
    source === _emitter__WEBPACK_IMPORTED_MODULE_4__["default"].sources.USER &&
    !this.allowReadOnlyEdits
  ) {
    return new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a();
  }
  let range = index == null ? null : this.getSelection();
  const oldDelta = this.editor.delta;
  const change = modifier();
  if (range != null) {
    if (index === true) {
      index = range.index; // eslint-disable-line prefer-destructuring
    }
    if (shift == null) {
      range = shiftRange(range, change, source);
    } else if (shift !== 0) {
      range = shiftRange(range, index, shift, source);
    }
    this.setSelection(range, _emitter__WEBPACK_IMPORTED_MODULE_4__["default"].sources.SILENT);
  }
  if (change.length() > 0) {
    const args = [_emitter__WEBPACK_IMPORTED_MODULE_4__["default"].events.TEXT_CHANGE, change, oldDelta, source];
    this.emitter.emit(_emitter__WEBPACK_IMPORTED_MODULE_4__["default"].events.EDITOR_CHANGE, ...args);
    if (source !== _emitter__WEBPACK_IMPORTED_MODULE_4__["default"].sources.SILENT) {
      this.emitter.emit(...args);
    }
  }
  return change;
}

function overload(index, length, name, value, source) {
  let formats = {};
  if (typeof index.index === 'number' && typeof index.length === 'number') {
    // Allow for throwaway end (used by insertText/insertEmbed)
    if (typeof length !== 'number') {
      source = value;
      value = name;
      name = length;
      length = index.length; // eslint-disable-line prefer-destructuring
      index = index.index; // eslint-disable-line prefer-destructuring
    } else {
      length = index.length; // eslint-disable-line prefer-destructuring
      index = index.index; // eslint-disable-line prefer-destructuring
    }
  } else if (typeof length !== 'number') {
    source = value;
    value = name;
    name = length;
    length = 0;
  }
  // Handle format being object, two format name/value strings or excluded
  if (typeof name === 'object') {
    formats = name;
    source = value;
  } else if (typeof name === 'string') {
    if (value != null) {
      formats[name] = value;
    } else {
      source = name;
    }
  }
  // Handle optional source
  source = source || _emitter__WEBPACK_IMPORTED_MODULE_4__["default"].sources.API;
  return [index, length, formats, source];
}

function shiftRange(range, index, length, source) {
  if (range == null) return null;
  let start;
  let end;
  if (index instanceof quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a) {
    [start, end] = [range.index, range.index + range.length].map(pos =>
      index.transformPosition(pos, source !== _emitter__WEBPACK_IMPORTED_MODULE_4__["default"].sources.USER),
    );
  } else {
    [start, end] = [range.index, range.index + range.length].map(pos => {
      if (pos < index || (pos === index && source === _emitter__WEBPACK_IMPORTED_MODULE_4__["default"].sources.USER))
        return pos;
      if (length >= 0) {
        return pos + length;
      }
      return Math.max(index, pos + length);
    });
  }
  return new _selection__WEBPACK_IMPORTED_MODULE_6__["Range"](start, end - start);
}




/***/ }),

/***/ "./core/selection.js":
/*!***************************!*\
  !*** ./core/selection.js ***!
  \***************************/
/*! exports provided: Range, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Selection; });
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/dist/parchment.js");
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clone */ "./node_modules/clone/clone.js");
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! deep-equal */ "./node_modules/deep-equal/index.js");
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(deep_equal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emitter */ "./core/emitter.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logger */ "./core/logger.js");






const debug = Object(_logger__WEBPACK_IMPORTED_MODULE_4__["default"])('quill:selection');

class Range {
  constructor(index, length = 0) {
    this.index = index;
    this.length = length;
  }
}

class Selection {
  constructor(scroll, emitter) {
    this.emitter = emitter;
    this.scroll = scroll;
    this.composing = false;
    this.mouseDown = false;
    this.root = this.scroll.domNode;
    this.cursor = this.scroll.create('cursor', this);
    // savedRange is last non-null range
    this.savedRange = new Range(0, 0);
    this.lastRange = this.savedRange;
    this.handleComposition();
    this.handleDragging();
    this.emitter.listenDOM('selectionchange', document, () => {
      if (!this.mouseDown && !this.composing) {
        setTimeout(this.update.bind(this, _emitter__WEBPACK_IMPORTED_MODULE_3__["default"].sources.USER), 1);
      }
    });
    this.emitter.on(_emitter__WEBPACK_IMPORTED_MODULE_3__["default"].events.SCROLL_BEFORE_UPDATE, () => {
      if (!this.hasFocus()) return;
      const native = this.getNativeRange();
      if (native == null) return;
      if (native.start.node === this.cursor.textNode) return; // cursor.restore() will handle
      this.emitter.once(_emitter__WEBPACK_IMPORTED_MODULE_3__["default"].events.SCROLL_UPDATE, () => {
        try {
          if (
            this.root.contains(native.start.node) &&
            this.root.contains(native.end.node)
          ) {
            this.setNativeRange(
              native.start.node,
              native.start.offset,
              native.end.node,
              native.end.offset,
            );
          }
          this.update(_emitter__WEBPACK_IMPORTED_MODULE_3__["default"].sources.SILENT);
        } catch (ignored) {
          // ignore
        }
      });
    });
    this.emitter.on(_emitter__WEBPACK_IMPORTED_MODULE_3__["default"].events.SCROLL_OPTIMIZE, (mutations, context) => {
      if (context.range) {
        const { startNode, startOffset, endNode, endOffset } = context.range;
        this.setNativeRange(startNode, startOffset, endNode, endOffset);
        this.update(_emitter__WEBPACK_IMPORTED_MODULE_3__["default"].sources.SILENT);
      }
    });
    this.update(_emitter__WEBPACK_IMPORTED_MODULE_3__["default"].sources.SILENT);
  }

  handleComposition() {
    this.root.addEventListener('compositionstart', () => {
      this.composing = true;
      this.scroll.batchStart();
    });
    this.root.addEventListener('compositionend', () => {
      this.scroll.batchEnd();
      this.composing = false;
      if (this.cursor.parent) {
        const range = this.cursor.restore();
        if (!range) return;
        setTimeout(() => {
          this.setNativeRange(
            range.startNode,
            range.startOffset,
            range.endNode,
            range.endOffset,
          );
        }, 1);
      }
    });
  }

  handleDragging() {
    this.emitter.listenDOM('mousedown', document.body, () => {
      this.mouseDown = true;
    });
    this.emitter.listenDOM('mouseup', document.body, () => {
      this.mouseDown = false;
      this.update(_emitter__WEBPACK_IMPORTED_MODULE_3__["default"].sources.USER);
    });
  }

  focus() {
    if (this.hasFocus()) return;
    this.root.focus();
    this.setRange(this.savedRange);
  }

  format(format, value) {
    this.scroll.update();
    const nativeRange = this.getNativeRange();
    if (
      nativeRange == null ||
      !nativeRange.native.collapsed ||
      this.scroll.query(format, parchment__WEBPACK_IMPORTED_MODULE_0__["Scope"].BLOCK)
    )
      return;
    if (nativeRange.start.node !== this.cursor.textNode) {
      const blot = this.scroll.find(nativeRange.start.node, false);
      if (blot == null) return;
      // TODO Give blot ability to not split
      if (blot instanceof parchment__WEBPACK_IMPORTED_MODULE_0__["LeafBlot"]) {
        const after = blot.split(nativeRange.start.offset);
        blot.parent.insertBefore(this.cursor, after);
      } else {
        blot.insertBefore(this.cursor, nativeRange.start.node); // Should never happen
      }
      this.cursor.attach();
    }
    this.cursor.format(format, value);
    this.scroll.optimize();
    this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length);
    this.update();
  }

  getBounds(index, length = 0) {
    const scrollLength = this.scroll.length();
    index = Math.min(index, scrollLength - 1);
    length = Math.min(index + length, scrollLength - 1) - index;
    let node;
    let [leaf, offset] = this.scroll.leaf(index);
    if (leaf == null) return null;
    [node, offset] = leaf.position(offset, true);
    const range = document.createRange();
    if (length > 0) {
      range.setStart(node, offset);
      [leaf, offset] = this.scroll.leaf(index + length);
      if (leaf == null) return null;
      [node, offset] = leaf.position(offset, true);
      range.setEnd(node, offset);
      return range.getBoundingClientRect();
    }
    let side = 'left';
    let rect;
    if (node instanceof Text) {
      if (offset < node.data.length) {
        range.setStart(node, offset);
        range.setEnd(node, offset + 1);
      } else {
        range.setStart(node, offset - 1);
        range.setEnd(node, offset);
        side = 'right';
      }
      rect = range.getBoundingClientRect();
    } else {
      rect = leaf.domNode.getBoundingClientRect();
      if (offset > 0) side = 'right';
    }
    return {
      bottom: rect.top + rect.height,
      height: rect.height,
      left: rect[side],
      right: rect[side],
      top: rect.top,
      width: 0,
    };
  }

  getNativeRange() {
    const selection = document.getSelection();
    if (selection == null || selection.rangeCount <= 0) return null;
    const nativeRange = selection.getRangeAt(0);
    if (nativeRange == null) return null;
    const range = this.normalizeNative(nativeRange);
    debug.info('getNativeRange', range);
    return range;
  }

  getRange() {
    const normalized = this.getNativeRange();
    if (normalized == null) return [null, null];
    const range = this.normalizedToRange(normalized);
    return [range, normalized];
  }

  hasFocus() {
    return (
      document.activeElement === this.root ||
      contains(this.root, document.activeElement)
    );
  }

  normalizedToRange(range) {
    const positions = [[range.start.node, range.start.offset]];
    if (!range.native.collapsed) {
      positions.push([range.end.node, range.end.offset]);
    }
    const indexes = positions.map(position => {
      const [node, offset] = position;
      const blot = this.scroll.find(node, true);
      const index = blot.offset(this.scroll);
      if (offset === 0) {
        return index;
      }
      if (blot instanceof parchment__WEBPACK_IMPORTED_MODULE_0__["LeafBlot"]) {
        return index + blot.index(node, offset);
      }
      return index + blot.length();
    });
    const end = Math.min(Math.max(...indexes), this.scroll.length() - 1);
    const start = Math.min(end, ...indexes);
    return new Range(start, end - start);
  }

  normalizeNative(nativeRange) {
    if (
      !contains(this.root, nativeRange.startContainer) ||
      (!nativeRange.collapsed && !contains(this.root, nativeRange.endContainer))
    ) {
      return null;
    }
    const range = {
      start: {
        node: nativeRange.startContainer,
        offset: nativeRange.startOffset,
      },
      end: { node: nativeRange.endContainer, offset: nativeRange.endOffset },
      native: nativeRange,
    };
    [range.start, range.end].forEach(position => {
      let { node, offset } = position;
      while (!(node instanceof Text) && node.childNodes.length > 0) {
        if (node.childNodes.length > offset) {
          node = node.childNodes[offset];
          offset = 0;
        } else if (node.childNodes.length === offset) {
          node = node.lastChild;
          if (node instanceof Text) {
            offset = node.data.length;
          } else if (node.childNodes.length > 0) {
            // Container case
            offset = node.childNodes.length;
          } else {
            // Embed case
            offset = node.childNodes.length + 1;
          }
        } else {
          break;
        }
      }
      position.node = node;
      position.offset = offset;
    });
    return range;
  }

  rangeToNative(range) {
    const indexes = range.collapsed
      ? [range.index]
      : [range.index, range.index + range.length];
    const args = [];
    const scrollLength = this.scroll.length();
    indexes.forEach((index, i) => {
      index = Math.min(scrollLength - 1, index);
      const [leaf, leafOffset] = this.scroll.leaf(index);
      const [node, offset] = leaf.position(leafOffset, i !== 0);
      args.push(node, offset);
    });
    if (args.length < 2) {
      return args.concat(args);
    }
    return args;
  }

  scrollIntoView(scrollingContainer) {
    const range = this.lastRange;
    if (range == null) return;
    const bounds = this.getBounds(range.index, range.length);
    if (bounds == null) return;
    const limit = this.scroll.length() - 1;
    const [first] = this.scroll.line(Math.min(range.index, limit));
    let last = first;
    if (range.length > 0) {
      [last] = this.scroll.line(Math.min(range.index + range.length, limit));
    }
    if (first == null || last == null) return;
    const scrollBounds = scrollingContainer.getBoundingClientRect();
    if (bounds.top < scrollBounds.top) {
      scrollingContainer.scrollTop -= scrollBounds.top - bounds.top;
    } else if (bounds.bottom > scrollBounds.bottom) {
      scrollingContainer.scrollTop += bounds.bottom - scrollBounds.bottom;
    }
  }

  setNativeRange(
    startNode,
    startOffset,
    endNode = startNode,
    endOffset = startOffset,
    force = false,
  ) {
    debug.info('setNativeRange', startNode, startOffset, endNode, endOffset);
    if (
      startNode != null &&
      (this.root.parentNode == null ||
        startNode.parentNode == null ||
        endNode.parentNode == null)
    ) {
      return;
    }
    const selection = document.getSelection();
    if (selection == null) return;
    if (startNode != null) {
      if (!this.hasFocus()) this.root.focus();
      const { native } = this.getNativeRange() || {};
      if (
        native == null ||
        force ||
        startNode !== native.startContainer ||
        startOffset !== native.startOffset ||
        endNode !== native.endContainer ||
        endOffset !== native.endOffset
      ) {
        if (startNode.tagName === 'BR') {
          startOffset = Array.from(startNode.parentNode.childNodes).indexOf(
            startNode,
          );
          startNode = startNode.parentNode;
        }
        if (endNode.tagName === 'BR') {
          endOffset = Array.from(endNode.parentNode.childNodes).indexOf(
            endNode,
          );
          endNode = endNode.parentNode;
        }
        const range = document.createRange();
        range.setStart(startNode, startOffset);
        range.setEnd(endNode, endOffset);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    } else {
      selection.removeAllRanges();
      this.root.blur();
    }
  }

  setRange(range, force = false, source = _emitter__WEBPACK_IMPORTED_MODULE_3__["default"].sources.API) {
    if (typeof force === 'string') {
      source = force;
      force = false;
    }
    debug.info('setRange', range);
    if (range != null) {
      const args = this.rangeToNative(range);
      this.setNativeRange(...args, force);
    } else {
      this.setNativeRange(null);
    }
    this.update(source);
  }

  update(source = _emitter__WEBPACK_IMPORTED_MODULE_3__["default"].sources.USER) {
    const oldRange = this.lastRange;
    const [lastRange, nativeRange] = this.getRange();
    this.lastRange = lastRange;
    if (this.lastRange != null) {
      this.savedRange = this.lastRange;
    }
    if (!deep_equal__WEBPACK_IMPORTED_MODULE_2___default()(oldRange, this.lastRange)) {
      if (
        !this.composing &&
        nativeRange != null &&
        nativeRange.native.collapsed &&
        nativeRange.start.node !== this.cursor.textNode
      ) {
        const range = this.cursor.restore();
        if (range) {
          this.setNativeRange(
            range.startNode,
            range.startOffset,
            range.endNode,
            range.endOffset,
          );
        }
      }
      const args = [
        _emitter__WEBPACK_IMPORTED_MODULE_3__["default"].events.SELECTION_CHANGE,
        clone__WEBPACK_IMPORTED_MODULE_1___default()(this.lastRange),
        clone__WEBPACK_IMPORTED_MODULE_1___default()(oldRange),
        source,
      ];
      this.emitter.emit(_emitter__WEBPACK_IMPORTED_MODULE_3__["default"].events.EDITOR_CHANGE, ...args);
      if (source !== _emitter__WEBPACK_IMPORTED_MODULE_3__["default"].sources.SILENT) {
        this.emitter.emit(...args);
      }
    }
  }
}

function contains(parent, descendant) {
  try {
    // Firefox inserts inaccessible nodes around video elements
    descendant.parentNode; // eslint-disable-line no-unused-expressions
  } catch (e) {
    return false;
  }
  return parent.contains(descendant);
}




/***/ }),

/***/ "./core/theme.js":
/*!***********************!*\
  !*** ./core/theme.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Theme {
  constructor(quill, options) {
    this.quill = quill;
    this.options = options;
    this.modules = {};
  }

  init() {
    Object.keys(this.options.modules).forEach(name => {
      if (this.modules[name] == null) {
        this.addModule(name);
      }
    });
  }

  addModule(name) {
    const ModuleClass = this.quill.constructor.import(`modules/${name}`);
    this.modules[name] = new ModuleClass(
      this.quill,
      this.options.modules[name] || {},
    );
    return this.modules[name];
  }
}
Theme.DEFAULTS = {
  modules: {},
};
Theme.themes = {
  default: Theme,
};

/* harmony default export */ __webpack_exports__["default"] = (Theme);


/***/ }),

/***/ "./formats/align.js":
/*!**************************!*\
  !*** ./formats/align.js ***!
  \**************************/
/*! exports provided: AlignAttribute, AlignClass, AlignStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignAttribute", function() { return AlignAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignClass", function() { return AlignClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignStyle", function() { return AlignStyle; });
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/dist/parchment.js");
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_0__);


const config = {
  scope: parchment__WEBPACK_IMPORTED_MODULE_0__["Scope"].BLOCK,
  whitelist: ['right', 'center', 'justify'],
};

const AlignAttribute = new parchment__WEBPACK_IMPORTED_MODULE_0__["Attributor"]('align', 'align', config);
const AlignClass = new parchment__WEBPACK_IMPORTED_MODULE_0__["ClassAttributor"]('align', 'ql-align', config);
const AlignStyle = new parchment__WEBPACK_IMPORTED_MODULE_0__["StyleAttributor"]('align', 'text-align', config);




/***/ }),

/***/ "./formats/background.js":
/*!*******************************!*\
  !*** ./formats/background.js ***!
  \*******************************/
/*! exports provided: BackgroundClass, BackgroundStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundClass", function() { return BackgroundClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundStyle", function() { return BackgroundStyle; });
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/dist/parchment.js");
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./formats/color.js");



const BackgroundClass = new parchment__WEBPACK_IMPORTED_MODULE_0__["ClassAttributor"]('background', 'ql-bg', {
  scope: parchment__WEBPACK_IMPORTED_MODULE_0__["Scope"].INLINE,
});
const BackgroundStyle = new _color__WEBPACK_IMPORTED_MODULE_1__["ColorAttributor"]('background', 'background-color', {
  scope: parchment__WEBPACK_IMPORTED_MODULE_0__["Scope"].INLINE,
});




/***/ }),

/***/ "./formats/blockquote.js":
/*!*******************************!*\
  !*** ./formats/blockquote.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/block */ "./blots/block.js");


class Blockquote extends _blots_block__WEBPACK_IMPORTED_MODULE_0__["default"] {}
Blockquote.blotName = 'blockquote';
Blockquote.tagName = 'blockquote';

/* harmony default export */ __webpack_exports__["default"] = (Blockquote);


/***/ }),

/***/ "./formats/bold.js":
/*!*************************!*\
  !*** ./formats/bold.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/inline */ "./blots/inline.js");


class Bold extends _blots_inline__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static create() {
    return super.create();
  }

  static formats() {
    return true;
  }

  optimize(context) {
    super.optimize(context);
    if (this.domNode.tagName !== this.statics.tagName[0]) {
      this.replaceWith(this.statics.blotName);
    }
  }
}
Bold.blotName = 'bold';
Bold.tagName = ['STRONG', 'B'];

/* harmony default export */ __webpack_exports__["default"] = (Bold);


/***/ }),

/***/ "./formats/code.js":
/*!*************************!*\
  !*** ./formats/code.js ***!
  \*************************/
/*! exports provided: Code, CodeBlockContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return Code; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeBlockContainer", function() { return CodeBlockContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CodeBlock; });
/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/block */ "./blots/block.js");
/* harmony import */ var _blots_break__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blots/break */ "./blots/break.js");
/* harmony import */ var _blots_cursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blots/cursor */ "./blots/cursor.js");
/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blots/inline */ "./blots/inline.js");
/* harmony import */ var _blots_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blots/text */ "./blots/text.js");
/* harmony import */ var _blots_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blots/container */ "./blots/container.js");
/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/quill */ "./core/quill.js");








class CodeBlockContainer extends _blots_container__WEBPACK_IMPORTED_MODULE_5__["default"] {
  static create(value) {
    const domNode = super.create(value);
    domNode.setAttribute('spellcheck', false);
    return domNode;
  }

  html(index, length) {
    const text = this.children
      .map(child => child.domNode.innerText)
      .join('\n')
      .slice(index, index + length);
    return `<pre>${Object(_blots_text__WEBPACK_IMPORTED_MODULE_4__["escapeText"])(text)}</pre>`;
  }
}

class CodeBlock extends _blots_block__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static register() {
    _core_quill__WEBPACK_IMPORTED_MODULE_6__["default"].register(CodeBlockContainer);
  }
}

class Code extends _blots_inline__WEBPACK_IMPORTED_MODULE_3__["default"] {}
Code.blotName = 'code';
Code.tagName = 'CODE';

CodeBlock.blotName = 'code-block';
CodeBlock.className = 'ql-code-block';
CodeBlock.tagName = 'DIV';
CodeBlockContainer.blotName = 'code-block-container';
CodeBlockContainer.className = 'ql-code-block-container';
CodeBlockContainer.tagName = 'DIV';

CodeBlockContainer.allowedChildren = [CodeBlock];

CodeBlock.allowedChildren = [_blots_text__WEBPACK_IMPORTED_MODULE_4__["default"], _blots_break__WEBPACK_IMPORTED_MODULE_1__["default"], _blots_cursor__WEBPACK_IMPORTED_MODULE_2__["default"]];
CodeBlock.requiredContainer = CodeBlockContainer;
CodeBlock.TAB = '  ';




/***/ }),

/***/ "./formats/color.js":
/*!**************************!*\
  !*** ./formats/color.js ***!
  \**************************/
/*! exports provided: ColorAttributor, ColorClass, ColorStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorAttributor", function() { return ColorAttributor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorClass", function() { return ColorClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorStyle", function() { return ColorStyle; });
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/dist/parchment.js");
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_0__);


class ColorAttributor extends parchment__WEBPACK_IMPORTED_MODULE_0__["StyleAttributor"] {
  value(domNode) {
    let value = super.value(domNode);
    if (!value.startsWith('rgb(')) return value;
    value = value.replace(/^[^\d]+/, '').replace(/[^\d]+$/, '');
    const hex = value
      .split(',')
      .map(component => `00${parseInt(component, 10).toString(16)}`.slice(-2))
      .join('');
    return `#${hex}`;
  }
}

const ColorClass = new parchment__WEBPACK_IMPORTED_MODULE_0__["ClassAttributor"]('color', 'ql-color', {
  scope: parchment__WEBPACK_IMPORTED_MODULE_0__["Scope"].INLINE,
});
const ColorStyle = new ColorAttributor('color', 'color', {
  scope: parchment__WEBPACK_IMPORTED_MODULE_0__["Scope"].INLINE,
});




/***/ }),

/***/ "./formats/direction.js":
/*!******************************!*\
  !*** ./formats/direction.js ***!
  \******************************/
/*! exports provided: DirectionAttribute, DirectionClass, DirectionStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionAttribute", function() { return DirectionAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionClass", function() { return DirectionClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionStyle", function() { return DirectionStyle; });
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/dist/parchment.js");
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_0__);


const config = {
  scope: parchment__WEBPACK_IMPORTED_MODULE_0__["Scope"].BLOCK,
  whitelist: ['rtl'],
};

const DirectionAttribute = new parchment__WEBPACK_IMPORTED_MODULE_0__["Attributor"]('direction', 'dir', config);
const DirectionClass = new parchment__WEBPACK_IMPORTED_MODULE_0__["ClassAttributor"]('direction', 'ql-direction', config);
const DirectionStyle = new parchment__WEBPACK_IMPORTED_MODULE_0__["StyleAttributor"]('direction', 'direction', config);




/***/ }),

/***/ "./formats/font.js":
/*!*************************!*\
  !*** ./formats/font.js ***!
  \*************************/
/*! exports provided: FontStyle, FontClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontStyle", function() { return FontStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontClass", function() { return FontClass; });
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/dist/parchment.js");
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_0__);


const config = {
  scope: parchment__WEBPACK_IMPORTED_MODULE_0__["Scope"].INLINE,
  whitelist: ['serif', 'monospace'],
};

const FontClass = new parchment__WEBPACK_IMPORTED_MODULE_0__["ClassAttributor"]('font', 'ql-font', config);

class FontStyleAttributor extends parchment__WEBPACK_IMPORTED_MODULE_0__["StyleAttributor"] {
  value(node) {
    return super.value(node).replace(/["']/g, '');
  }
}

const FontStyle = new FontStyleAttributor('font', 'font-family', config);




/***/ }),

/***/ "./formats/formula.js":
/*!****************************!*\
  !*** ./formats/formula.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blots_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/embed */ "./blots/embed.js");


class Formula extends _blots_embed__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static create(value) {
    if (window.katex == null) {
      throw new Error('Formula module requires KaTeX.');
    }
    const node = super.create(value);
    if (typeof value === 'string') {
      window.katex.render(value, node, {
        throwOnError: false,
        errorColor: '#f00',
      });
      node.setAttribute('data-value', value);
    }
    return node;
  }

  static value(domNode) {
    return domNode.getAttribute('data-value');
  }

  html() {
    const { formula } = this.value();
    return `<span>${formula}</span>`;
  }
}
Formula.blotName = 'formula';
Formula.className = 'ql-formula';
Formula.tagName = 'SPAN';

/* harmony default export */ __webpack_exports__["default"] = (Formula);


/***/ }),

/***/ "./formats/header.js":
/*!***************************!*\
  !*** ./formats/header.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/block */ "./blots/block.js");


class Header extends _blots_block__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static formats(domNode) {
    return this.tagName.indexOf(domNode.tagName) + 1;
  }
}
Header.blotName = 'header';
Header.tagName = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];

/* harmony default export */ __webpack_exports__["default"] = (Header);


/***/ }),

/***/ "./formats/image.js":
/*!**************************!*\
  !*** ./formats/image.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/dist/parchment.js");
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link */ "./formats/link.js");



const ATTRIBUTES = ['alt', 'height', 'width'];

class Image extends parchment__WEBPACK_IMPORTED_MODULE_0__["EmbedBlot"] {
  static create(value) {
    const node = super.create(value);
    if (typeof value === 'string') {
      node.setAttribute('src', this.sanitize(value));
    }
    return node;
  }

  static formats(domNode) {
    return ATTRIBUTES.reduce((formats, attribute) => {
      if (domNode.hasAttribute(attribute)) {
        formats[attribute] = domNode.getAttribute(attribute);
      }
      return formats;
    }, {});
  }

  static match(url) {
    return /\.(jpe?g|gif|png)$/.test(url) || /^data:image\/.+;base64/.test(url);
  }

  static register() {
    if (/Firefox/i.test(navigator.userAgent)) {
      setTimeout(() => {
        // Disable image resizing in Firefox
        document.execCommand('enableObjectResizing', false, false);
      }, 1);
    }
  }

  static sanitize(url) {
    return Object(_link__WEBPACK_IMPORTED_MODULE_1__["sanitize"])(url, ['http', 'https', 'data']) ? url : '//:0';
  }

  static value(domNode) {
    return domNode.getAttribute('src');
  }

  format(name, value) {
    if (ATTRIBUTES.indexOf(name) > -1) {
      if (value) {
        this.domNode.setAttribute(name, value);
      } else {
        this.domNode.removeAttribute(name);
      }
    } else {
      super.format(name, value);
    }
  }
}
Image.blotName = 'image';
Image.tagName = 'IMG';

/* harmony default export */ __webpack_exports__["default"] = (Image);


/***/ }),

/***/ "./formats/indent.js":
/*!***************************!*\
  !*** ./formats/indent.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/dist/parchment.js");
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_0__);


class IndentAttributor extends parchment__WEBPACK_IMPORTED_MODULE_0__["ClassAttributor"] {
  add(node, value) {
    if (value === '+1' || value === '-1') {
      const indent = this.value(node) || 0;
      value = value === '+1' ? indent + 1 : indent - 1;
    }
    if (value === 0) {
      this.remove(node);
      return true;
    }
    return super.add(node, value);
  }

  canAdd(node, value) {
    return super.canAdd(node, value) || super.canAdd(node, parseInt(value, 10));
  }

  value(node) {
    return parseInt(super.value(node), 10) || undefined; // Don't return NaN
  }
}

const IndentClass = new IndentAttributor('indent', 'ql-indent', {
  scope: parchment__WEBPACK_IMPORTED_MODULE_0__["Scope"].BLOCK,
  whitelist: [1, 2, 3, 4, 5, 6, 7, 8],
});

/* harmony default export */ __webpack_exports__["default"] = (IndentClass);


/***/ }),

/***/ "./formats/italic.js":
/*!***************************!*\
  !*** ./formats/italic.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bold__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bold */ "./formats/bold.js");


class Italic extends _bold__WEBPACK_IMPORTED_MODULE_0__["default"] {}
Italic.blotName = 'italic';
Italic.tagName = ['EM', 'I'];

/* harmony default export */ __webpack_exports__["default"] = (Italic);


/***/ }),

/***/ "./formats/link.js":
/*!*************************!*\
  !*** ./formats/link.js ***!
  \*************************/
/*! exports provided: default, sanitize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitize", function() { return sanitize; });
/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/inline */ "./blots/inline.js");


class Link extends _blots_inline__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static create(value) {
    const node = super.create(value);
    node.setAttribute('href', this.sanitize(value));
    node.setAttribute('target', '_blank');
    return node;
  }

  static formats(domNode) {
    return domNode.getAttribute('href');
  }

  static sanitize(url) {
    return sanitize(url, this.PROTOCOL_WHITELIST) ? url : this.SANITIZED_URL;
  }

  format(name, value) {
    if (name !== this.statics.blotName || !value) {
      super.format(name, value);
    } else {
      this.domNode.setAttribute('href', this.constructor.sanitize(value));
    }
  }
}
Link.blotName = 'link';
Link.tagName = 'A';
Link.SANITIZED_URL = 'about:blank';
Link.PROTOCOL_WHITELIST = ['http', 'https', 'mailto', 'tel'];

function sanitize(url, protocols) {
  const anchor = document.createElement('a');
  anchor.href = url;
  const protocol = anchor.href.slice(0, anchor.href.indexOf(':'));
  return protocols.indexOf(protocol) > -1;
}




/***/ }),

/***/ "./formats/list.js":
/*!*************************!*\
  !*** ./formats/list.js ***!
  \*************************/
/*! exports provided: ListContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListContainer", function() { return ListContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListItem; });
/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/block */ "./blots/block.js");
/* harmony import */ var _blots_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blots/container */ "./blots/container.js");
/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/quill */ "./core/quill.js");




class ListContainer extends _blots_container__WEBPACK_IMPORTED_MODULE_1__["default"] {}
ListContainer.blotName = 'list-container';
ListContainer.tagName = 'OL';

class ListItem extends _blots_block__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static create(value) {
    const node = super.create();
    node.setAttribute('data-list', value);
    return node;
  }

  static formats(domNode) {
    return domNode.getAttribute('data-list') || undefined;
  }

  static register() {
    _core_quill__WEBPACK_IMPORTED_MODULE_2__["default"].register(ListContainer);
  }

  constructor(scroll, domNode) {
    super(scroll, domNode);
    const ui = domNode.ownerDocument.createElement('span');
    const listEventHandler = e => {
      if (!scroll.isEnabled()) return;
      const format = this.statics.formats(domNode, scroll);
      if (format === 'checked') {
        this.format('list', 'unchecked');
        e.preventDefault();
      } else if (format === 'unchecked') {
        this.format('list', 'checked');
        e.preventDefault();
      }
    };
    ui.addEventListener('mousedown', listEventHandler);
    ui.addEventListener('touchstart', listEventHandler);
    this.attachUI(ui);
  }

  format(name, value) {
    if (name === this.statics.blotName && value) {
      this.domNode.setAttribute('data-list', value);
    } else {
      super.format(name, value);
    }
  }
}
ListItem.blotName = 'list';
ListItem.tagName = 'LI';

ListContainer.allowedChildren = [ListItem];
ListItem.requiredContainer = ListContainer;




/***/ }),

/***/ "./formats/script.js":
/*!***************************!*\
  !*** ./formats/script.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/inline */ "./blots/inline.js");


class Script extends _blots_inline__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static create(value) {
    if (value === 'super') {
      return document.createElement('sup');
    }
    if (value === 'sub') {
      return document.createElement('sub');
    }
    return super.create(value);
  }

  static formats(domNode) {
    if (domNode.tagName === 'SUB') return 'sub';
    if (domNode.tagName === 'SUP') return 'super';
    return undefined;
  }
}
Script.blotName = 'script';
Script.tagName = ['SUB', 'SUP'];

/* harmony default export */ __webpack_exports__["default"] = (Script);


/***/ }),

/***/ "./formats/size.js":
/*!*************************!*\
  !*** ./formats/size.js ***!
  \*************************/
/*! exports provided: SizeClass, SizeStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizeClass", function() { return SizeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizeStyle", function() { return SizeStyle; });
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/dist/parchment.js");
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_0__);


const SizeClass = new parchment__WEBPACK_IMPORTED_MODULE_0__["ClassAttributor"]('size', 'ql-size', {
  scope: parchment__WEBPACK_IMPORTED_MODULE_0__["Scope"].INLINE,
  whitelist: ['small', 'large', 'huge'],
});
const SizeStyle = new parchment__WEBPACK_IMPORTED_MODULE_0__["StyleAttributor"]('size', 'font-size', {
  scope: parchment__WEBPACK_IMPORTED_MODULE_0__["Scope"].INLINE,
  whitelist: ['10px', '18px', '32px'],
});




/***/ }),

/***/ "./formats/strike.js":
/*!***************************!*\
  !*** ./formats/strike.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/inline */ "./blots/inline.js");


class Strike extends _blots_inline__WEBPACK_IMPORTED_MODULE_0__["default"] {}
Strike.blotName = 'strike';
Strike.tagName = 'S';

/* harmony default export */ __webpack_exports__["default"] = (Strike);


/***/ }),

/***/ "./formats/table.js":
/*!**************************!*\
  !*** ./formats/table.js ***!
  \**************************/
/*! exports provided: TableCell, TableRow, TableBody, TableContainer, tableId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableCell", function() { return TableCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableRow", function() { return TableRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableBody", function() { return TableBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableContainer", function() { return TableContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableId", function() { return tableId; });
/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/block */ "./blots/block.js");
/* harmony import */ var _blots_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blots/container */ "./blots/container.js");



class TableCell extends _blots_block__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static create(value) {
    const node = super.create();
    if (value) {
      node.setAttribute('data-row', value);
    } else {
      node.setAttribute('data-row', tableId());
    }
    return node;
  }

  static formats(domNode) {
    if (domNode.hasAttribute('data-row')) {
      return domNode.getAttribute('data-row');
    }
    return undefined;
  }

  cellOffset() {
    if (this.parent) {
      return this.parent.children.indexOf(this);
    }
    return -1;
  }

  format(name, value) {
    if (name === TableCell.blotName && value) {
      this.domNode.setAttribute('data-row', value);
    } else {
      super.format(name, value);
    }
  }

  row() {
    return this.parent;
  }

  rowOffset() {
    if (this.row()) {
      return this.row().rowOffset();
    }
    return -1;
  }

  table() {
    return this.row() && this.row().table();
  }
}
TableCell.blotName = 'table';
TableCell.tagName = 'TD';

class TableRow extends _blots_container__WEBPACK_IMPORTED_MODULE_1__["default"] {
  checkMerge() {
    if (super.checkMerge() && this.next.children.head != null) {
      const thisHead = this.children.head.formats();
      const thisTail = this.children.tail.formats();
      const nextHead = this.next.children.head.formats();
      const nextTail = this.next.children.tail.formats();
      return (
        thisHead.table === thisTail.table &&
        thisHead.table === nextHead.table &&
        thisHead.table === nextTail.table
      );
    }
    return false;
  }

  optimize(...args) {
    super.optimize(...args);
    this.children.forEach(child => {
      if (child.next == null) return;
      const childFormats = child.formats();
      const nextFormats = child.next.formats();
      if (childFormats.table !== nextFormats.table) {
        const next = this.splitAfter(child);
        if (next) {
          next.optimize();
        }
        // We might be able to merge with prev now
        if (this.prev) {
          this.prev.optimize();
        }
      }
    });
  }

  rowOffset() {
    if (this.parent) {
      return this.parent.children.indexOf(this);
    }
    return -1;
  }

  table() {
    return this.parent && this.parent.parent;
  }
}
TableRow.blotName = 'table-row';
TableRow.tagName = 'TR';

class TableBody extends _blots_container__WEBPACK_IMPORTED_MODULE_1__["default"] {}
TableBody.blotName = 'table-body';
TableBody.tagName = 'TBODY';

class TableContainer extends _blots_container__WEBPACK_IMPORTED_MODULE_1__["default"] {
  balanceCells() {
    const rows = this.descendants(TableRow);
    const maxColumns = rows.reduce((max, row) => {
      return Math.max(row.children.length, max);
    }, 0);
    rows.forEach(row => {
      new Array(maxColumns - row.children.length).fill(0).forEach(() => {
        let value;
        if (row.children.head != null) {
          value = TableCell.formats(row.children.head.domNode);
        }
        const blot = this.scroll.create(TableCell.blotName, value);
        row.appendChild(blot);
        blot.optimize(); // Add break blot
      });
    });
  }

  cells(column) {
    return this.rows().map(row => row.children.at(column));
  }

  deleteColumn(index) {
    const [body] = this.descendant(TableBody);
    if (body == null || body.children.head == null) return;
    body.children.forEach(row => {
      const cell = row.children.at(index);
      if (cell != null) {
        cell.remove();
      }
    });
  }

  insertColumn(index) {
    const [body] = this.descendant(TableBody);
    if (body == null || body.children.head == null) return;
    body.children.forEach(row => {
      const ref = row.children.at(index);
      const value = TableCell.formats(row.children.head.domNode);
      const cell = this.scroll.create(TableCell.blotName, value);
      row.insertBefore(cell, ref);
    });
  }

  insertRow(index) {
    const [body] = this.descendant(TableBody);
    if (body == null || body.children.head == null) return;
    const id = tableId();
    const row = this.scroll.create(TableRow.blotName);
    body.children.head.children.forEach(() => {
      const cell = this.scroll.create(TableCell.blotName, id);
      row.appendChild(cell);
    });
    const ref = body.children.at(index);
    body.insertBefore(row, ref);
  }

  rows() {
    const body = this.children.head;
    if (body == null) return [];
    return body.children.map(row => row);
  }
}
TableContainer.blotName = 'table-container';
TableContainer.tagName = 'TABLE';

TableContainer.allowedChildren = [TableBody];
TableBody.requiredContainer = TableContainer;

TableBody.allowedChildren = [TableRow];
TableRow.requiredContainer = TableBody;

TableRow.allowedChildren = [TableCell];
TableCell.requiredContainer = TableRow;

function tableId() {
  const id = Math.random()
    .toString(36)
    .slice(2, 6);
  return `row-${id}`;
}




/***/ }),

/***/ "./formats/underline.js":
/*!******************************!*\
  !*** ./formats/underline.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/inline */ "./blots/inline.js");


class Underline extends _blots_inline__WEBPACK_IMPORTED_MODULE_0__["default"] {}
Underline.blotName = 'underline';
Underline.tagName = 'U';

/* harmony default export */ __webpack_exports__["default"] = (Underline);


/***/ }),

/***/ "./formats/video.js":
/*!**************************!*\
  !*** ./formats/video.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/block */ "./blots/block.js");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link */ "./formats/link.js");



const ATTRIBUTES = ['height', 'width'];

class Video extends _blots_block__WEBPACK_IMPORTED_MODULE_0__["BlockEmbed"] {
  static create(value) {
    const node = super.create(value);
    node.setAttribute('frameborder', '0');
    node.setAttribute('allowfullscreen', true);
    node.setAttribute('src', this.sanitize(value));
    return node;
  }

  static formats(domNode) {
    return ATTRIBUTES.reduce((formats, attribute) => {
      if (domNode.hasAttribute(attribute)) {
        formats[attribute] = domNode.getAttribute(attribute);
      }
      return formats;
    }, {});
  }

  static sanitize(url) {
    return _link__WEBPACK_IMPORTED_MODULE_1__["default"].sanitize(url); // eslint-disable-line import/no-named-as-default-member
  }

  static value(domNode) {
    return domNode.getAttribute('src');
  }

  format(name, value) {
    if (ATTRIBUTES.indexOf(name) > -1) {
      if (value) {
        this.domNode.setAttribute(name, value);
      } else {
        this.domNode.removeAttribute(name);
      }
    } else {
      super.format(name, value);
    }
  }

  html() {
    const { video } = this.value();
    return `<a href="${video}">${video}</a>`;
  }
}
Video.blotName = 'video';
Video.className = 'ql-video';
Video.tagName = 'IFRAME';

/* harmony default export */ __webpack_exports__["default"] = (Video);


/***/ }),

/***/ "./modules/clipboard.js":
/*!******************************!*\
  !*** ./modules/clipboard.js ***!
  \******************************/
/*! exports provided: default, matchAttributor, matchBlot, matchNewline, matchText, traverse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Clipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchAttributor", function() { return matchAttributor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchBlot", function() { return matchBlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchNewline", function() { return matchNewline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchText", function() { return matchText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traverse", function() { return traverse; });
/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! extend */ "./node_modules/extend/index.js");
/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill-delta */ "./node_modules/quill-delta/dist/Delta.js");
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/dist/parchment.js");
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blots/block */ "./blots/block.js");
/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/quill */ "./core/quill.js");
/* harmony import */ var _core_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/logger */ "./core/logger.js");
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/module */ "./core/module.js");
/* harmony import */ var _formats_align__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../formats/align */ "./formats/align.js");
/* harmony import */ var _formats_background__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../formats/background */ "./formats/background.js");
/* harmony import */ var _formats_code__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../formats/code */ "./formats/code.js");
/* harmony import */ var _formats_color__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../formats/color */ "./formats/color.js");
/* harmony import */ var _formats_direction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../formats/direction */ "./formats/direction.js");
/* harmony import */ var _formats_font__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../formats/font */ "./formats/font.js");
/* harmony import */ var _formats_size__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../formats/size */ "./formats/size.js");
















const debug = Object(_core_logger__WEBPACK_IMPORTED_MODULE_5__["default"])('quill:clipboard');

const CLIPBOARD_CONFIG = [
  [Node.TEXT_NODE, matchText],
  [Node.TEXT_NODE, matchNewline],
  ['br', matchBreak],
  [Node.ELEMENT_NODE, matchNewline],
  [Node.ELEMENT_NODE, matchBlot],
  [Node.ELEMENT_NODE, matchAttributor],
  [Node.ELEMENT_NODE, matchStyles],
  ['li', matchIndent],
  ['ol, ul', matchList],
  ['pre', matchCodeBlock],
  ['tr', matchTable],
  ['b', matchAlias.bind(matchAlias, 'bold')],
  ['i', matchAlias.bind(matchAlias, 'italic')],
  ['style', matchIgnore],
];

const ATTRIBUTE_ATTRIBUTORS = [_formats_align__WEBPACK_IMPORTED_MODULE_7__["AlignAttribute"], _formats_direction__WEBPACK_IMPORTED_MODULE_11__["DirectionAttribute"]].reduce(
  (memo, attr) => {
    memo[attr.keyName] = attr;
    return memo;
  },
  {},
);

const STYLE_ATTRIBUTORS = [
  _formats_align__WEBPACK_IMPORTED_MODULE_7__["AlignStyle"],
  _formats_background__WEBPACK_IMPORTED_MODULE_8__["BackgroundStyle"],
  _formats_color__WEBPACK_IMPORTED_MODULE_10__["ColorStyle"],
  _formats_direction__WEBPACK_IMPORTED_MODULE_11__["DirectionStyle"],
  _formats_font__WEBPACK_IMPORTED_MODULE_12__["FontStyle"],
  _formats_size__WEBPACK_IMPORTED_MODULE_13__["SizeStyle"],
].reduce((memo, attr) => {
  memo[attr.keyName] = attr;
  return memo;
}, {});

class Clipboard extends _core_module__WEBPACK_IMPORTED_MODULE_6__["default"] {
  constructor(quill, options) {
    super(quill, options);
    this.quill.root.addEventListener('copy', e => this.onCaptureCopy(e, false));
    this.quill.root.addEventListener('cut', e => this.onCaptureCopy(e, true));
    this.quill.root.addEventListener('paste', this.onCapturePaste.bind(this));
    this.matchers = [];
    CLIPBOARD_CONFIG.concat(this.options.matchers).forEach(
      ([selector, matcher]) => {
        this.addMatcher(selector, matcher);
      },
    );
  }

  addMatcher(selector, matcher) {
    this.matchers.push([selector, matcher]);
  }

  convert({ html, text }, formats = {}) {
    if (formats[_formats_code__WEBPACK_IMPORTED_MODULE_9__["default"].blotName]) {
      return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().insert(text, {
        [_formats_code__WEBPACK_IMPORTED_MODULE_9__["default"].blotName]: formats[_formats_code__WEBPACK_IMPORTED_MODULE_9__["default"].blotName],
      });
    }
    if (!html) {
      return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().insert(text || '');
    }
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const container = doc.body;
    const nodeMatches = new WeakMap();
    const [elementMatchers, textMatchers] = this.prepareMatching(
      container,
      nodeMatches,
    );
    const delta = traverse(
      this.quill.scroll,
      container,
      elementMatchers,
      textMatchers,
      nodeMatches,
    );
    // Remove trailing newline
    if (
      deltaEndsWith(delta, '\n') &&
      (delta.ops[delta.ops.length - 1].attributes == null || formats.table)
    ) {
      return delta.compose(new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().retain(delta.length() - 1).delete(1));
    }
    return delta;
  }

  dangerouslyPasteHTML(index, html, source = _core_quill__WEBPACK_IMPORTED_MODULE_4__["default"].sources.API) {
    if (typeof index === 'string') {
      const delta = this.convert({ html: index, text: '' });
      this.quill.setContents(delta, html);
      this.quill.setSelection(0, _core_quill__WEBPACK_IMPORTED_MODULE_4__["default"].sources.SILENT);
    } else {
      const paste = this.convert({ html, text: '' });
      this.quill.updateContents(
        new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().retain(index).concat(paste),
        source,
      );
      this.quill.setSelection(index + paste.length(), _core_quill__WEBPACK_IMPORTED_MODULE_4__["default"].sources.SILENT);
    }
  }

  onCaptureCopy(e, isCut = false) {
    if (e.defaultPrevented) return;
    e.preventDefault();
    const [range] = this.quill.selection.getRange();
    if (range == null) return;
    const { html, text } = this.onCopy(range, isCut);
    e.clipboardData.setData('text/plain', text);
    e.clipboardData.setData('text/html', html);
    if (isCut) {
      this.quill.deleteText(range, _core_quill__WEBPACK_IMPORTED_MODULE_4__["default"].sources.USER);
    }
  }

  onCapturePaste(e) {
    if (e.defaultPrevented || !this.quill.isEnabled()) return;
    e.preventDefault();
    const range = this.quill.getSelection(true);
    if (range == null) return;
    const html = e.clipboardData.getData('text/html');
    const text = e.clipboardData.getData('text/plain');
    const files = Array.from(e.clipboardData.files || []);
    if (!html && files.length > 0) {
      this.quill.uploader.upload(range, files);
    } else {
      this.onPaste(range, { html, text });
    }
  }

  onCopy(range) {
    const text = this.quill.getText(range);
    const html = this.quill.getSemanticHTML(range);
    return { html, text };
  }

  onPaste(range, { text, html }) {
    const formats = this.quill.getFormat(range.index);
    const pastedDelta = this.convert({ text, html }, formats);
    debug.log('onPaste', pastedDelta, { text, html });
    const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a()
      .retain(range.index)
      .delete(range.length)
      .concat(pastedDelta);
    this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_4__["default"].sources.USER);
    // range.length contributes to delta.length()
    this.quill.setSelection(
      delta.length() - range.length,
      _core_quill__WEBPACK_IMPORTED_MODULE_4__["default"].sources.SILENT,
    );
    this.quill.scrollIntoView();
  }

  prepareMatching(container, nodeMatches) {
    const elementMatchers = [];
    const textMatchers = [];
    this.matchers.forEach(pair => {
      const [selector, matcher] = pair;
      switch (selector) {
        case Node.TEXT_NODE:
          textMatchers.push(matcher);
          break;
        case Node.ELEMENT_NODE:
          elementMatchers.push(matcher);
          break;
        default:
          Array.from(container.querySelectorAll(selector)).forEach(node => {
            if (nodeMatches.has(node)) {
              const matches = nodeMatches.get(node);
              matches.push(matcher);
            } else {
              nodeMatches.set(node, [matcher]);
            }
          });
          break;
      }
    });
    return [elementMatchers, textMatchers];
  }
}
Clipboard.DEFAULTS = {
  matchers: [],
};

function applyFormat(delta, format, value) {
  if (typeof format === 'object') {
    return Object.keys(format).reduce((newDelta, key) => {
      return applyFormat(newDelta, key, format[key]);
    }, delta);
  }
  return delta.reduce((newDelta, op) => {
    if (op.attributes && op.attributes[format]) {
      return newDelta.push(op);
    }
    return newDelta.insert(
      op.insert,
      extend__WEBPACK_IMPORTED_MODULE_0___default()({}, { [format]: value }, op.attributes),
    );
  }, new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a());
}

function deltaEndsWith(delta, text) {
  let endText = '';
  for (
    let i = delta.ops.length - 1;
    i >= 0 && endText.length < text.length;
    --i // eslint-disable-line no-plusplus
  ) {
    const op = delta.ops[i];
    if (typeof op.insert !== 'string') break;
    endText = op.insert + endText;
  }
  return endText.slice(-1 * text.length) === text;
}

function isLine(node) {
  if (node.childNodes.length === 0) return false; // Exclude embed blocks
  return [
    'address',
    'article',
    'blockquote',
    'canvas',
    'dd',
    'div',
    'dl',
    'dt',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'header',
    'iframe',
    'li',
    'main',
    'nav',
    'ol',
    'output',
    'p',
    'pre',
    'section',
    'table',
    'td',
    'tr',
    'ul',
    'video',
  ].includes(node.tagName.toLowerCase());
}

const preNodes = new WeakMap();
function isPre(node) {
  if (node == null) return false;
  if (!preNodes.has(node)) {
    if (node.tagName === 'PRE') {
      preNodes.set(node, true);
    } else {
      preNodes.set(node, isPre(node.parentNode));
    }
  }
  return preNodes.get(node);
}

function traverse(scroll, node, elementMatchers, textMatchers, nodeMatches) {
  // Post-order
  if (node.nodeType === node.TEXT_NODE) {
    return textMatchers.reduce((delta, matcher) => {
      return matcher(node, delta, scroll);
    }, new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a());
  }
  if (node.nodeType === node.ELEMENT_NODE) {
    return Array.from(node.childNodes || []).reduce((delta, childNode) => {
      let childrenDelta = traverse(
        scroll,
        childNode,
        elementMatchers,
        textMatchers,
        nodeMatches,
      );
      if (childNode.nodeType === node.ELEMENT_NODE) {
        childrenDelta = elementMatchers.reduce((reducedDelta, matcher) => {
          return matcher(childNode, reducedDelta, scroll);
        }, childrenDelta);
        childrenDelta = (nodeMatches.get(childNode) || []).reduce(
          (reducedDelta, matcher) => {
            return matcher(childNode, reducedDelta, scroll);
          },
          childrenDelta,
        );
      }
      return delta.concat(childrenDelta);
    }, new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a());
  }
  return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a();
}

function matchAlias(format, node, delta) {
  return applyFormat(delta, format, true);
}

function matchAttributor(node, delta, scroll) {
  const attributes = parchment__WEBPACK_IMPORTED_MODULE_2__["Attributor"].keys(node);
  const classes = parchment__WEBPACK_IMPORTED_MODULE_2__["ClassAttributor"].keys(node);
  const styles = parchment__WEBPACK_IMPORTED_MODULE_2__["StyleAttributor"].keys(node);
  const formats = {};
  attributes
    .concat(classes)
    .concat(styles)
    .forEach(name => {
      let attr = scroll.query(name, parchment__WEBPACK_IMPORTED_MODULE_2__["Scope"].ATTRIBUTE);
      if (attr != null) {
        formats[attr.attrName] = attr.value(node);
        if (formats[attr.attrName]) return;
      }
      attr = ATTRIBUTE_ATTRIBUTORS[name];
      if (attr != null && (attr.attrName === name || attr.keyName === name)) {
        formats[attr.attrName] = attr.value(node) || undefined;
      }
      attr = STYLE_ATTRIBUTORS[name];
      if (attr != null && (attr.attrName === name || attr.keyName === name)) {
        attr = STYLE_ATTRIBUTORS[name];
        formats[attr.attrName] = attr.value(node) || undefined;
      }
    });
  if (Object.keys(formats).length > 0) {
    return applyFormat(delta, formats);
  }
  return delta;
}

function matchBlot(node, delta, scroll) {
  const match = scroll.query(node);
  if (match == null) return delta;
  if (match.prototype instanceof parchment__WEBPACK_IMPORTED_MODULE_2__["EmbedBlot"]) {
    const embed = {};
    const value = match.value(node);
    if (value != null) {
      embed[match.blotName] = value;
      return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().insert(embed, match.formats(node, scroll));
    }
  } else {
    if (match.prototype instanceof parchment__WEBPACK_IMPORTED_MODULE_2__["BlockBlot"] && !deltaEndsWith(delta, '\n')) {
      delta.insert('\n');
    }
    if (typeof match.formats === 'function') {
      return applyFormat(delta, match.blotName, match.formats(node, scroll));
    }
  }
  return delta;
}

function matchBreak(node, delta) {
  if (!deltaEndsWith(delta, '\n')) {
    delta.insert('\n');
  }
  return delta;
}

function matchCodeBlock(node, delta, scroll) {
  const match = scroll.query('code-block');
  const language = match ? match.formats(node, scroll) : true;
  return applyFormat(delta, 'code-block', language);
}

function matchIgnore() {
  return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a();
}

function matchIndent(node, delta, scroll) {
  const match = scroll.query(node);
  if (
    match == null ||
    match.blotName !== 'list' ||
    !deltaEndsWith(delta, '\n')
  ) {
    return delta;
  }
  let indent = -1;
  let parent = node.parentNode;
  while (parent != null) {
    if (['OL', 'UL'].includes(parent.tagName)) {
      indent += 1;
    }
    parent = parent.parentNode;
  }
  if (indent <= 0) return delta;
  return delta.reduce((composed, op) => {
    if (op.attributes && op.attributes.list) {
      return composed.push(op);
    }
    return composed.insert(op.insert, { indent, ...(op.attributes || {}) });
  }, new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a());
}

function matchList(node, delta) {
  const list = node.tagName === 'OL' ? 'ordered' : 'bullet';
  return applyFormat(delta, 'list', list);
}

function matchNewline(node, delta, scroll) {
  if (!deltaEndsWith(delta, '\n')) {
    if (isLine(node)) {
      return delta.insert('\n');
    }
    if (delta.length() > 0 && node.nextSibling) {
      let { nextSibling } = node;
      while (nextSibling != null) {
        if (isLine(nextSibling)) {
          return delta.insert('\n');
        }
        const match = scroll.query(nextSibling);
        if (match && match.prototype instanceof _blots_block__WEBPACK_IMPORTED_MODULE_3__["BlockEmbed"]) {
          return delta.insert('\n');
        }
        nextSibling = nextSibling.firstChild;
      }
    }
  }
  return delta;
}

function matchStyles(node, delta) {
  const formats = {};
  const style = node.style || {};
  if (style.fontStyle === 'italic') {
    formats.italic = true;
  }
  if (
    style.fontWeight.startsWith('bold') ||
    parseInt(style.fontWeight, 10) >= 700
  ) {
    formats.bold = true;
  }
  if (Object.keys(formats).length > 0) {
    delta = applyFormat(delta, formats);
  }
  if (parseFloat(style.textIndent || 0) > 0) {
    // Could be 0.5in
    return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().insert('\t').concat(delta);
  }
  return delta;
}

function matchTable(node, delta) {
  const table =
    node.parentNode.tagName === 'TABLE'
      ? node.parentNode
      : node.parentNode.parentNode;
  const rows = Array.from(table.querySelectorAll('tr'));
  const row = rows.indexOf(node) + 1;
  return applyFormat(delta, 'table', row);
}

function matchText(node, delta) {
  let text = node.data;
  // Word represents empty line with <o:p>&nbsp;</o:p>
  if (node.parentNode.tagName === 'O:P') {
    return delta.insert(text.trim());
  }
  if (text.trim().length === 0 && text.includes('\n')) {
    return delta;
  }
  if (!isPre(node)) {
    const replacer = (collapse, match) => {
      const replaced = match.replace(/[^\u00a0]/g, ''); // \u00a0 is nbsp;
      return replaced.length < 1 && collapse ? ' ' : replaced;
    };
    text = text.replace(/\r\n/g, ' ').replace(/\n/g, ' ');
    text = text.replace(/\s\s+/g, replacer.bind(replacer, true)); // collapse whitespace
    if (
      (node.previousSibling == null && isLine(node.parentNode)) ||
      (node.previousSibling != null && isLine(node.previousSibling))
    ) {
      text = text.replace(/^\s+/, replacer.bind(replacer, false));
    }
    if (
      (node.nextSibling == null && isLine(node.parentNode)) ||
      (node.nextSibling != null && isLine(node.nextSibling))
    ) {
      text = text.replace(/\s+$/, replacer.bind(replacer, false));
    }
  }
  return delta.insert(text);
}




/***/ }),

/***/ "./modules/history.js":
/*!****************************!*\
  !*** ./modules/history.js ***!
  \****************************/
/*! exports provided: default, getLastChangeIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return History; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastChangeIndex", function() { return getLastChangeIndex; });
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/dist/parchment.js");
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/quill */ "./core/quill.js");
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/module */ "./core/module.js");




class History extends _core_module__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(quill, options) {
    super(quill, options);
    this.lastRecorded = 0;
    this.ignoreChange = false;
    this.clear();
    this.quill.on(
      _core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].events.EDITOR_CHANGE,
      (eventName, delta, oldDelta, source) => {
        if (eventName !== _core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].events.TEXT_CHANGE || this.ignoreChange) return;
        if (!this.options.userOnly || source === _core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER) {
          this.record(delta, oldDelta);
        } else {
          this.transform(delta);
        }
      },
    );
    this.quill.keyboard.addBinding(
      { key: 'z', shortKey: true },
      this.undo.bind(this),
    );
    this.quill.keyboard.addBinding(
      { key: 'z', shortKey: true, shiftKey: true },
      this.redo.bind(this),
    );
    if (/Win/i.test(navigator.platform)) {
      this.quill.keyboard.addBinding(
        { key: 'y', shortKey: true },
        this.redo.bind(this),
      );
    }
  }

  change(source, dest) {
    if (this.stack[source].length === 0) return;
    const delta = this.stack[source].pop();
    const base = this.quill.getContents();
    const inverseDelta = delta.invert(base);
    this.stack[dest].push(inverseDelta);
    this.lastRecorded = 0;
    this.ignoreChange = true;
    this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER);
    this.ignoreChange = false;
    const index = getLastChangeIndex(this.quill.scroll, delta);
    this.quill.setSelection(index);
  }

  clear() {
    this.stack = { undo: [], redo: [] };
  }

  cutoff() {
    this.lastRecorded = 0;
  }

  record(changeDelta, oldDelta) {
    if (changeDelta.ops.length === 0) return;
    this.stack.redo = [];
    let undoDelta = changeDelta.invert(oldDelta);
    const timestamp = Date.now();
    if (
      this.lastRecorded + this.options.delay > timestamp &&
      this.stack.undo.length > 0
    ) {
      const delta = this.stack.undo.pop();
      undoDelta = undoDelta.compose(delta);
    } else {
      this.lastRecorded = timestamp;
    }
    if (undoDelta.length() === 0) return;
    this.stack.undo.push(undoDelta);
    if (this.stack.undo.length > this.options.maxStack) {
      this.stack.undo.shift();
    }
  }

  redo() {
    this.change('redo', 'undo');
  }

  transform(delta) {
    transformStack(this.stack.undo, delta);
    transformStack(this.stack.redo, delta);
  }

  undo() {
    this.change('undo', 'redo');
  }
}
History.DEFAULTS = {
  delay: 1000,
  maxStack: 100,
  userOnly: false,
};

function transformStack(stack, delta) {
  let remoteDelta = delta;
  for (let i = stack.length - 1; i >= 0; i -= 1) {
    const oldDelta = stack[i];
    stack[i] = remoteDelta.transform(oldDelta, true);
    remoteDelta = oldDelta.transform(remoteDelta);
    if (stack[i].length() === 0) {
      stack.splice(i, 1);
    }
  }
}

function endsWithNewlineChange(scroll, delta) {
  const lastOp = delta.ops[delta.ops.length - 1];
  if (lastOp == null) return false;
  if (lastOp.insert != null) {
    return typeof lastOp.insert === 'string' && lastOp.insert.endsWith('\n');
  }
  if (lastOp.attributes != null) {
    return Object.keys(lastOp.attributes).some(attr => {
      return scroll.query(attr, parchment__WEBPACK_IMPORTED_MODULE_0__["Scope"].BLOCK) != null;
    });
  }
  return false;
}

function getLastChangeIndex(scroll, delta) {
  const deleteLength = delta.reduce((length, op) => {
    return length + (op.delete || 0);
  }, 0);
  let changeIndex = delta.length() - deleteLength;
  if (endsWithNewlineChange(scroll, delta)) {
    changeIndex -= 1;
  }
  return changeIndex;
}




/***/ }),

/***/ "./modules/keyboard.js":
/*!*****************************!*\
  !*** ./modules/keyboard.js ***!
  \*****************************/
/*! exports provided: default, SHORTKEY, normalize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Keyboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHORTKEY", function() { return SHORTKEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clone */ "./node_modules/clone/clone.js");
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deep-equal */ "./node_modules/deep-equal/index.js");
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(deep_equal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! extend */ "./node_modules/extend/index.js");
/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! quill-delta */ "./node_modules/quill-delta/dist/Delta.js");
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/dist/parchment.js");
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/quill */ "./core/quill.js");
/* harmony import */ var _core_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/logger */ "./core/logger.js");
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/module */ "./core/module.js");









const debug = Object(_core_logger__WEBPACK_IMPORTED_MODULE_6__["default"])('quill:keyboard');

const SHORTKEY = /Mac/i.test(navigator.platform) ? 'metaKey' : 'ctrlKey';

class Keyboard extends _core_module__WEBPACK_IMPORTED_MODULE_7__["default"] {
  static match(evt, binding) {
    if (
      ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'].some(key => {
        return !!binding[key] !== evt[key] && binding[key] !== null;
      })
    ) {
      return false;
    }
    return binding.key === evt.key || binding.key === evt.which;
  }

  constructor(quill, options) {
    super(quill, options);
    this.bindings = {};
    Object.keys(this.options.bindings).forEach(name => {
      if (this.options.bindings[name]) {
        this.addBinding(this.options.bindings[name]);
      }
    });
    this.addBinding({ key: 'Enter', shiftKey: null }, this.handleEnter);
    this.addBinding(
      { key: 'Enter', metaKey: null, ctrlKey: null, altKey: null },
      () => {},
    );
    if (/Firefox/i.test(navigator.userAgent)) {
      // Need to handle delete and backspace for Firefox in the general case #1171
      this.addBinding(
        { key: 'Backspace' },
        { collapsed: true },
        this.handleBackspace,
      );
      this.addBinding(
        { key: 'Delete' },
        { collapsed: true },
        this.handleDelete,
      );
    } else {
      this.addBinding(
        { key: 'Backspace' },
        { collapsed: true, prefix: /^.?$/ },
        this.handleBackspace,
      );
      this.addBinding(
        { key: 'Delete' },
        { collapsed: true, suffix: /^.?$/ },
        this.handleDelete,
      );
    }
    this.addBinding(
      { key: 'Backspace' },
      { collapsed: false },
      this.handleDeleteRange,
    );
    this.addBinding(
      { key: 'Delete' },
      { collapsed: false },
      this.handleDeleteRange,
    );
    this.addBinding(
      {
        key: 'Backspace',
        altKey: null,
        ctrlKey: null,
        metaKey: null,
        shiftKey: null,
      },
      { collapsed: true, offset: 0 },
      this.handleBackspace,
    );
    this.listen();
  }

  addBinding(keyBinding, context = {}, handler = {}) {
    const binding = normalize(keyBinding);
    if (binding == null) {
      debug.warn('Attempted to add invalid keyboard binding', binding);
      return;
    }
    if (typeof context === 'function') {
      context = { handler: context };
    }
    if (typeof handler === 'function') {
      handler = { handler };
    }
    const keys = Array.isArray(binding.key) ? binding.key : [binding.key];
    keys.forEach(key => {
      const singleBinding = extend__WEBPACK_IMPORTED_MODULE_2___default()({}, binding, { key }, context, handler);
      this.bindings[singleBinding.key] = this.bindings[singleBinding.key] || [];
      this.bindings[singleBinding.key].push(singleBinding);
    });
  }

  listen() {
    this.quill.root.addEventListener('keydown', evt => {
      if (evt.defaultPrevented) return;
      const bindings = (this.bindings[evt.key] || []).concat(
        this.bindings[evt.which] || [],
      );
      const matches = bindings.filter(binding => Keyboard.match(evt, binding));
      if (matches.length === 0) return;
      const range = this.quill.getSelection();
      if (range == null || !this.quill.hasFocus()) return;
      const [line, offset] = this.quill.getLine(range.index);
      const [leafStart, offsetStart] = this.quill.getLeaf(range.index);
      const [leafEnd, offsetEnd] =
        range.length === 0
          ? [leafStart, offsetStart]
          : this.quill.getLeaf(range.index + range.length);
      const prefixText =
        leafStart instanceof parchment__WEBPACK_IMPORTED_MODULE_4__["TextBlot"]
          ? leafStart.value().slice(0, offsetStart)
          : '';
      const suffixText =
        leafEnd instanceof parchment__WEBPACK_IMPORTED_MODULE_4__["TextBlot"] ? leafEnd.value().slice(offsetEnd) : '';
      const curContext = {
        collapsed: range.length === 0,
        empty: range.length === 0 && line.length() <= 1,
        format: this.quill.getFormat(range),
        line,
        offset,
        prefix: prefixText,
        suffix: suffixText,
        event: evt,
      };
      const prevented = matches.some(binding => {
        if (
          binding.collapsed != null &&
          binding.collapsed !== curContext.collapsed
        ) {
          return false;
        }
        if (binding.empty != null && binding.empty !== curContext.empty) {
          return false;
        }
        if (binding.offset != null && binding.offset !== curContext.offset) {
          return false;
        }
        if (Array.isArray(binding.format)) {
          // any format is present
          if (binding.format.every(name => curContext.format[name] == null)) {
            return false;
          }
        } else if (typeof binding.format === 'object') {
          // all formats must match
          if (
            !Object.keys(binding.format).every(name => {
              if (binding.format[name] === true)
                return curContext.format[name] != null;
              if (binding.format[name] === false)
                return curContext.format[name] == null;
              return deep_equal__WEBPACK_IMPORTED_MODULE_1___default()(binding.format[name], curContext.format[name]);
            })
          ) {
            return false;
          }
        }
        if (binding.prefix != null && !binding.prefix.test(curContext.prefix)) {
          return false;
        }
        if (binding.suffix != null && !binding.suffix.test(curContext.suffix)) {
          return false;
        }
        return binding.handler.call(this, range, curContext, binding) !== true;
      });
      if (prevented) {
        evt.preventDefault();
      }
    });
  }

  handleBackspace(range, context) {
    // Check for astral symbols
    const length = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(context.prefix)
      ? 2
      : 1;
    if (range.index === 0 || this.quill.getLength() <= 1) return;
    let formats = {};
    const [line] = this.quill.getLine(range.index);
    let delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index - length).delete(length);
    if (context.offset === 0) {
      // Always deleting newline here, length always 1
      const [prev] = this.quill.getLine(range.index - 1);
      if (prev) {
        const curFormats = line.formats();
        const prevFormats = this.quill.getFormat(range.index - 1, 1);
        formats = quill_delta__WEBPACK_IMPORTED_MODULE_3__["AttributeMap"].diff(curFormats, prevFormats) || {};
        if (Object.keys(formats).length > 0) {
          // line.length() - 1 targets \n in line, another -1 for newline being deleted
          const formatDelta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a()
            .retain(range.index + line.length() - 2)
            .retain(1, formats);
          delta = delta.compose(formatDelta);
        }
      }
    }
    this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
    this.quill.focus();
  }

  handleDelete(range, context) {
    // Check for astral symbols
    const length = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(context.suffix)
      ? 2
      : 1;
    if (range.index >= this.quill.getLength() - length) return;
    let formats = {};
    const [line] = this.quill.getLine(range.index);
    let delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index).delete(length);
    if (context.offset >= line.length() - 1) {
      const [next] = this.quill.getLine(range.index + 1);
      if (next) {
        const curFormats = line.formats();
        const nextFormats = this.quill.getFormat(range.index, 1);
        formats = quill_delta__WEBPACK_IMPORTED_MODULE_3__["AttributeMap"].diff(curFormats, nextFormats) || {};
        if (Object.keys(formats).length > 0) {
          delta = delta.retain(next.length() - 1).retain(1, formats);
        }
      }
    }
    this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
    this.quill.focus();
  }

  handleDeleteRange(range) {
    const lines = this.quill.getLines(range);
    let formats = {};
    if (lines.length > 1) {
      const firstFormats = lines[0].formats();
      const lastFormats = lines[lines.length - 1].formats();
      formats = quill_delta__WEBPACK_IMPORTED_MODULE_3__["AttributeMap"].diff(lastFormats, firstFormats) || {};
    }
    this.quill.deleteText(range, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
    if (Object.keys(formats).length > 0) {
      this.quill.formatLine(range.index, 1, formats, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
    }
    this.quill.setSelection(range.index, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.SILENT);
    this.quill.focus();
  }

  handleEnter(range, context) {
    const lineFormats = Object.keys(context.format).reduce(
      (formats, format) => {
        if (
          this.quill.scroll.query(format, parchment__WEBPACK_IMPORTED_MODULE_4__["Scope"].BLOCK) &&
          !Array.isArray(context.format[format])
        ) {
          formats[format] = context.format[format];
        }
        return formats;
      },
      {},
    );
    const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a()
      .retain(range.index)
      .delete(range.length)
      .insert('\n', lineFormats);
    this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
    this.quill.setSelection(range.index + 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.SILENT);
    this.quill.focus();

    Object.keys(context.format).forEach(name => {
      if (lineFormats[name] != null) return;
      if (Array.isArray(context.format[name])) return;
      if (name === 'code' || name === 'link') return;
      this.quill.format(name, context.format[name], _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
    });
  }
}

Keyboard.DEFAULTS = {
  bindings: {
    bold: makeFormatHandler('bold'),
    italic: makeFormatHandler('italic'),
    underline: makeFormatHandler('underline'),
    indent: {
      // highlight tab or tab at beginning of list, indent or blockquote
      key: 'Tab',
      format: ['blockquote', 'indent', 'list'],
      handler(range, context) {
        if (context.collapsed && context.offset !== 0) return true;
        this.quill.format('indent', '+1', _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
        return false;
      },
    },
    outdent: {
      key: 'Tab',
      shiftKey: true,
      format: ['blockquote', 'indent', 'list'],
      // highlight tab or tab at beginning of list, indent or blockquote
      handler(range, context) {
        if (context.collapsed && context.offset !== 0) return true;
        this.quill.format('indent', '-1', _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
        return false;
      },
    },
    'outdent backspace': {
      key: 'Backspace',
      collapsed: true,
      shiftKey: null,
      metaKey: null,
      ctrlKey: null,
      altKey: null,
      format: ['indent', 'list'],
      offset: 0,
      handler(range, context) {
        if (context.format.indent != null) {
          this.quill.format('indent', '-1', _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
        } else if (context.format.list != null) {
          this.quill.format('list', false, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
        }
      },
    },
    'indent code-block': makeCodeBlockHandler(true),
    'outdent code-block': makeCodeBlockHandler(false),
    'remove tab': {
      key: 'Tab',
      shiftKey: true,
      collapsed: true,
      prefix: /\t$/,
      handler(range) {
        this.quill.deleteText(range.index - 1, 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
      },
    },
    tab: {
      key: 'Tab',
      handler(range, context) {
        if (context.format.table) return true;
        this.quill.history.cutoff();
        const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a()
          .retain(range.index)
          .delete(range.length)
          .insert('\t');
        this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
        this.quill.history.cutoff();
        this.quill.setSelection(range.index + 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.SILENT);
        return false;
      },
    },
    'blockquote empty enter': {
      key: 'Enter',
      collapsed: true,
      format: ['blockquote'],
      empty: true,
      handler() {
        this.quill.format('blockquote', false, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
      },
    },
    'list empty enter': {
      key: 'Enter',
      collapsed: true,
      format: ['list'],
      empty: true,
      handler(range, context) {
        const formats = { list: false };
        if (context.format.indent) {
          formats.indent = false;
        }
        this.quill.formatLine(
          range.index,
          range.length,
          formats,
          _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER,
        );
      },
    },
    'checklist enter': {
      key: 'Enter',
      collapsed: true,
      format: { list: 'checked' },
      handler(range) {
        const [line, offset] = this.quill.getLine(range.index);
        const formats = extend__WEBPACK_IMPORTED_MODULE_2___default()({}, line.formats(), { list: 'checked' });
        const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a()
          .retain(range.index)
          .insert('\n', formats)
          .retain(line.length() - offset - 1)
          .retain(1, { list: 'unchecked' });
        this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
        this.quill.setSelection(range.index + 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.SILENT);
        this.quill.scrollIntoView();
      },
    },
    'header enter': {
      key: 'Enter',
      collapsed: true,
      format: ['header'],
      suffix: /^$/,
      handler(range, context) {
        const [line, offset] = this.quill.getLine(range.index);
        const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a()
          .retain(range.index)
          .insert('\n', context.format)
          .retain(line.length() - offset - 1)
          .retain(1, { header: null });
        this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
        this.quill.setSelection(range.index + 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.SILENT);
        this.quill.scrollIntoView();
      },
    },
    'table backspace': {
      key: 'Backspace',
      format: ['table'],
      collapsed: true,
      offset: 0,
      handler() {},
    },
    'table delete': {
      key: 'Delete',
      format: ['table'],
      collapsed: true,
      suffix: /^$/,
      handler() {},
    },
    'table enter': {
      key: 'Enter',
      shiftKey: null,
      format: ['table'],
      handler(range) {
        const module = this.quill.getModule('table');
        if (module) {
          const [table, row, cell, offset] = module.getTable(range);
          const shift = tableSide(table, row, cell, offset);
          if (shift == null) return;
          let index = table.offset();
          if (shift < 0) {
            const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).insert('\n');
            this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
            this.quill.setSelection(
              range.index + 1,
              range.length,
              _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.SILENT,
            );
          } else if (shift > 0) {
            index += table.length();
            const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).insert('\n');
            this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
            this.quill.setSelection(index, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
          }
        }
      },
    },
    'table tab': {
      key: 'Tab',
      shiftKey: null,
      format: ['table'],
      handler(range, context) {
        const { event, line: cell } = context;
        const offset = cell.offset(this.quill.scroll);
        if (event.shiftKey) {
          this.quill.setSelection(offset - 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
        } else {
          this.quill.setSelection(offset + cell.length(), _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
        }
      },
    },
    'list autofill': {
      key: ' ',
      shiftKey: null,
      collapsed: true,
      format: {
        list: false,
        'code-block': false,
        blockquote: false,
        header: false,
        table: false,
      },
      prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
      handler(range, context) {
        if (this.quill.scroll.query('list') == null) return true;
        const { length } = context.prefix;
        const [line, offset] = this.quill.getLine(range.index);
        if (offset > length) return true;
        let value;
        switch (context.prefix.trim()) {
          case '[]':
          case '[ ]':
            value = 'unchecked';
            break;
          case '[x]':
            value = 'checked';
            break;
          case '-':
          case '*':
            value = 'bullet';
            break;
          default:
            value = 'ordered';
        }
        this.quill.insertText(range.index, ' ', _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
        this.quill.history.cutoff();
        const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a()
          .retain(range.index - offset)
          .delete(length + 1)
          .retain(line.length() - 2 - offset)
          .retain(1, { list: value });
        this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
        this.quill.history.cutoff();
        this.quill.setSelection(range.index - length, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.SILENT);
        return false;
      },
    },
    'code exit': {
      key: 'Enter',
      collapsed: true,
      format: ['code-block'],
      prefix: /^$/,
      suffix: /^\s*$/,
      handler(range) {
        const [line, offset] = this.quill.getLine(range.index);
        let numLines = 2;
        let cur = line;
        while (
          cur != null &&
          cur.length() <= 1 &&
          cur.formats()['code-block']
        ) {
          cur = cur.prev;
          numLines -= 1;
          // Requisite prev lines are empty
          if (numLines <= 0) {
            const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a()
              .retain(range.index + line.length() - offset - 2)
              .retain(1, { 'code-block': null })
              .delete(1);
            this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
            this.quill.setSelection(range.index - 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.SILENT);
            return false;
          }
        }
        return true;
      },
    },
    'embed left': makeEmbedArrowHandler('ArrowLeft', false),
    'embed left shift': makeEmbedArrowHandler('ArrowLeft', true),
    'embed right': makeEmbedArrowHandler('ArrowRight', false),
    'embed right shift': makeEmbedArrowHandler('ArrowRight', true),
    'table down': makeTableArrowHandler(false),
    'table up': makeTableArrowHandler(true),
  },
};

function makeCodeBlockHandler(indent) {
  return {
    key: 'Tab',
    shiftKey: !indent,
    format: { 'code-block': true },
    handler(range) {
      const CodeBlock = this.quill.scroll.query('code-block');
      const lines =
        range.length === 0
          ? this.quill.getLines(range.index, 1)
          : this.quill.getLines(range);
      let { index, length } = range;
      lines.forEach((line, i) => {
        if (indent) {
          line.insertAt(0, CodeBlock.TAB);
          if (i === 0) {
            index += CodeBlock.TAB.length;
          } else {
            length += CodeBlock.TAB.length;
          }
        } else if (line.domNode.textContent.startsWith(CodeBlock.TAB)) {
          line.deleteAt(0, CodeBlock.TAB.length);
          if (i === 0) {
            index -= CodeBlock.TAB.length;
          } else {
            length -= CodeBlock.TAB.length;
          }
        }
      });
      this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
      this.quill.setSelection(index, length, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.SILENT);
    },
  };
}

function makeEmbedArrowHandler(key, shiftKey) {
  const where = key === 'ArrowLeft' ? 'prefix' : 'suffix';
  return {
    key,
    shiftKey,
    altKey: null,
    [where]: /^$/,
    handler(range) {
      let { index } = range;
      if (key === 'ArrowRight') {
        index += range.length + 1;
      }
      const [leaf] = this.quill.getLeaf(index);
      if (!(leaf instanceof parchment__WEBPACK_IMPORTED_MODULE_4__["EmbedBlot"])) return true;
      if (key === 'ArrowLeft') {
        if (shiftKey) {
          this.quill.setSelection(
            range.index - 1,
            range.length + 1,
            _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER,
          );
        } else {
          this.quill.setSelection(range.index - 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
        }
      } else if (shiftKey) {
        this.quill.setSelection(
          range.index,
          range.length + 1,
          _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER,
        );
      } else {
        this.quill.setSelection(
          range.index + range.length + 1,
          _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER,
        );
      }
      return false;
    },
  };
}

function makeFormatHandler(format) {
  return {
    key: format[0],
    shortKey: true,
    handler(range, context) {
      this.quill.format(format, !context.format[format], _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
    },
  };
}

function makeTableArrowHandler(up) {
  return {
    key: up ? 'ArrowUp' : 'ArrowDown',
    collapsed: true,
    format: ['table'],
    handler(range, context) {
      // TODO move to table module
      const key = up ? 'prev' : 'next';
      const cell = context.line;
      const targetRow = cell.parent[key];
      if (targetRow != null) {
        if (targetRow.statics.blotName === 'table-row') {
          let targetCell = targetRow.children.head;
          let cur = cell;
          while (cur.prev != null) {
            cur = cur.prev;
            targetCell = targetCell.next;
          }
          const index =
            targetCell.offset(this.quill.scroll) +
            Math.min(context.offset, targetCell.length() - 1);
          this.quill.setSelection(index, 0, _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER);
        }
      } else {
        const targetLine = cell.table()[key];
        if (targetLine != null) {
          if (up) {
            this.quill.setSelection(
              targetLine.offset(this.quill.scroll) + targetLine.length() - 1,
              0,
              _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER,
            );
          } else {
            this.quill.setSelection(
              targetLine.offset(this.quill.scroll),
              0,
              _core_quill__WEBPACK_IMPORTED_MODULE_5__["default"].sources.USER,
            );
          }
        }
      }
      return false;
    },
  };
}

function normalize(binding) {
  if (typeof binding === 'string' || typeof binding === 'number') {
    binding = { key: binding };
  } else if (typeof binding === 'object') {
    binding = clone__WEBPACK_IMPORTED_MODULE_0___default()(binding, false);
  } else {
    return null;
  }
  if (binding.shortKey) {
    binding[SHORTKEY] = binding.shortKey;
    delete binding.shortKey;
  }
  return binding;
}

function tableSide(table, row, cell, offset) {
  if (row.prev == null && row.next == null) {
    if (cell.prev == null && cell.next == null) {
      return offset === 0 ? -1 : 1;
    }
    return cell.prev == null ? -1 : 1;
  }
  if (row.prev == null) {
    return -1;
  }
  if (row.next == null) {
    return 1;
  }
  return null;
}




/***/ }),

/***/ "./modules/syntax.js":
/*!***************************!*\
  !*** ./modules/syntax.js ***!
  \***************************/
/*! exports provided: CodeBlock, CodeToken, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeBlock", function() { return SyntaxCodeBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeToken", function() { return CodeToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Syntax; });
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill-delta */ "./node_modules/quill-delta/dist/Delta.js");
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/dist/parchment.js");
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blots/inline */ "./blots/inline.js");
/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/quill */ "./core/quill.js");
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/module */ "./core/module.js");
/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blots/block */ "./blots/block.js");
/* harmony import */ var _blots_break__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blots/break */ "./blots/break.js");
/* harmony import */ var _blots_cursor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../blots/cursor */ "./blots/cursor.js");
/* harmony import */ var _blots_text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../blots/text */ "./blots/text.js");
/* harmony import */ var _formats_code__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../formats/code */ "./formats/code.js");
/* harmony import */ var _clipboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./clipboard */ "./modules/clipboard.js");












const TokenAttributor = new parchment__WEBPACK_IMPORTED_MODULE_1__["ClassAttributor"]('code-token', 'hljs', {
  scope: parchment__WEBPACK_IMPORTED_MODULE_1__["Scope"].INLINE,
});
class CodeToken extends _blots_inline__WEBPACK_IMPORTED_MODULE_2__["default"] {
  static formats(node, scroll) {
    while (node != null && node !== scroll.domNode) {
      if (node.classList.contains(_formats_code__WEBPACK_IMPORTED_MODULE_9__["default"].className)) {
        return super.formats(node, scroll);
      }
      node = node.parentNode;
    }
    return undefined;
  }

  constructor(scroll, domNode, value) {
    super(scroll, domNode, value);
    TokenAttributor.add(this.domNode, value);
  }

  format(format, value) {
    if (format !== CodeToken.blotName) {
      super.format(format, value);
    } else if (value) {
      TokenAttributor.add(this.domNode, value);
    } else {
      TokenAttributor.remove(this.domNode);
      this.domNode.classList.remove(this.statics.className);
    }
  }

  optimize(...args) {
    super.optimize(...args);
    if (!TokenAttributor.value(this.domNode)) {
      this.unwrap();
    }
  }
}
CodeToken.blotName = 'code-token';
CodeToken.className = 'ql-token';

class SyntaxCodeBlock extends _formats_code__WEBPACK_IMPORTED_MODULE_9__["default"] {
  static create(value) {
    const domNode = super.create(value);
    if (typeof value === 'string') {
      domNode.setAttribute('data-language', value);
    }
    return domNode;
  }

  static formats(domNode) {
    return domNode.getAttribute('data-language') || 'plain';
  }

  static register() {} // Syntax module will register

  format(name, value) {
    if (name === this.statics.blotName && value) {
      this.domNode.setAttribute('data-language', value);
    } else {
      super.format(name, value);
    }
  }

  replaceWith(name, value) {
    this.formatAt(0, this.length(), CodeToken.blotName, false);
    return super.replaceWith(name, value);
  }
}

class SyntaxCodeBlockContainer extends _formats_code__WEBPACK_IMPORTED_MODULE_9__["CodeBlockContainer"] {
  attach() {
    super.attach();
    this.forceNext = false;
    this.scroll.emitMount(this);
  }

  format(name, value) {
    if (name === SyntaxCodeBlock.blotName) {
      this.forceNext = true;
      this.children.forEach(child => {
        child.format(name, value);
      });
    }
  }

  formatAt(index, length, name, value) {
    if (name === SyntaxCodeBlock.blotName) {
      this.forceNext = true;
    }
    super.formatAt(index, length, name, value);
  }

  highlight(highlight, forced = false) {
    if (this.children.head == null) return;
    const nodes = Array.from(this.domNode.childNodes).filter(
      node => node !== this.uiNode,
    );
    const text = `${nodes.map(node => node.textContent).join('\n')}\n`;
    const language = SyntaxCodeBlock.formats(this.children.head.domNode);
    if (forced || this.forceNext || this.cachedText !== text) {
      if (text.trim().length > 0 || this.cachedText == null) {
        const oldDelta = this.children.reduce((delta, child) => {
          return delta.concat(Object(_blots_block__WEBPACK_IMPORTED_MODULE_5__["blockDelta"])(child, false));
        }, new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a());
        const delta = highlight(text, language);
        oldDelta.diff(delta).reduce((index, { retain, attributes }) => {
          // Should be all retains
          if (!retain) return index;
          if (attributes) {
            Object.keys(attributes).forEach(format => {
              if (
                [SyntaxCodeBlock.blotName, CodeToken.blotName].includes(format)
              ) {
                this.formatAt(index, retain, format, attributes[format]);
              }
            });
          }
          return index + retain;
        }, 0);
      }
      this.cachedText = text;
      this.forceNext = false;
    }
  }

  optimize(context) {
    super.optimize(context);
    if (
      this.parent != null &&
      this.children.head != null &&
      this.uiNode != null
    ) {
      const language = SyntaxCodeBlock.formats(this.children.head.domNode);
      if (language !== this.uiNode.value) {
        this.uiNode.value = language;
      }
    }
  }
}
SyntaxCodeBlockContainer.allowedChildren = [SyntaxCodeBlock];
SyntaxCodeBlock.requiredContainer = SyntaxCodeBlockContainer;
SyntaxCodeBlock.allowedChildren = [CodeToken, _blots_cursor__WEBPACK_IMPORTED_MODULE_7__["default"], _blots_text__WEBPACK_IMPORTED_MODULE_8__["default"], _blots_break__WEBPACK_IMPORTED_MODULE_6__["default"]];

class Syntax extends _core_module__WEBPACK_IMPORTED_MODULE_4__["default"] {
  static register() {
    _core_quill__WEBPACK_IMPORTED_MODULE_3__["default"].register(CodeToken, true);
    _core_quill__WEBPACK_IMPORTED_MODULE_3__["default"].register(SyntaxCodeBlock, true);
    _core_quill__WEBPACK_IMPORTED_MODULE_3__["default"].register(SyntaxCodeBlockContainer, true);
  }

  constructor(quill, options) {
    super(quill, options);
    if (this.options.hljs == null) {
      throw new Error(
        'Syntax module requires highlight.js. Please include the library on the page before Quill.',
      );
    }
    this.highlightBlot = this.highlightBlot.bind(this);
    this.initListener();
    this.initTimer();
  }

  initListener() {
    this.quill.on(_core_quill__WEBPACK_IMPORTED_MODULE_3__["default"].events.SCROLL_BLOT_MOUNT, blot => {
      if (!(blot instanceof SyntaxCodeBlockContainer)) return;
      const select = this.quill.root.ownerDocument.createElement('select');
      this.options.languages.forEach(({ key, label }) => {
        const option = select.ownerDocument.createElement('option');
        option.textContent = label;
        option.setAttribute('value', key);
        select.appendChild(option);
      });
      select.addEventListener('change', () => {
        blot.format(SyntaxCodeBlock.blotName, select.value);
        this.quill.root.focus(); // Prevent scrolling
        this.highlight(blot, true);
      });
      if (blot.uiNode == null) {
        blot.attachUI(select);
        if (blot.children.head) {
          select.value = SyntaxCodeBlock.formats(blot.children.head.domNode);
        }
      }
    });
  }

  initTimer() {
    let timer = null;
    this.quill.on(_core_quill__WEBPACK_IMPORTED_MODULE_3__["default"].events.SCROLL_OPTIMIZE, () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        this.highlight();
        timer = null;
      }, this.options.interval);
    });
  }

  highlight(blot = null, force = false) {
    if (this.quill.selection.composing) return;
    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_3__["default"].sources.USER);
    const range = this.quill.getSelection();
    const blots =
      blot == null
        ? this.quill.scroll.descendants(SyntaxCodeBlockContainer)
        : [blot];
    blots.forEach(container => {
      container.highlight(this.highlightBlot, force);
    });
    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_3__["default"].sources.SILENT);
    if (range != null) {
      this.quill.setSelection(range, _core_quill__WEBPACK_IMPORTED_MODULE_3__["default"].sources.SILENT);
    }
  }

  highlightBlot(text, language = 'plain') {
    if (language === 'plain') {
      return Object(_blots_text__WEBPACK_IMPORTED_MODULE_8__["escapeText"])(text)
        .split('\n')
        .reduce((delta, line, i) => {
          if (i !== 0) {
            delta.insert('\n', { [_formats_code__WEBPACK_IMPORTED_MODULE_9__["default"].blotName]: language });
          }
          return delta.insert(line);
        }, new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a());
    }
    const container = this.quill.root.ownerDocument.createElement('div');
    container.classList.add(_formats_code__WEBPACK_IMPORTED_MODULE_9__["default"].className);
    container.innerHTML = this.options.hljs.highlight(language, text).value;
    return Object(_clipboard__WEBPACK_IMPORTED_MODULE_10__["traverse"])(
      this.quill.scroll,
      container,
      [
        (node, delta) => {
          const value = TokenAttributor.value(node);
          if (value) {
            return delta.compose(
              new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a().retain(delta.length(), {
                [CodeToken.blotName]: value,
              }),
            );
          }
          return delta;
        },
      ],
      [
        (node, delta) => {
          return node.data.split('\n').reduce((memo, nodeText, i) => {
            if (i !== 0) memo.insert('\n', { [_formats_code__WEBPACK_IMPORTED_MODULE_9__["default"].blotName]: language });
            return memo.insert(nodeText);
          }, delta);
        },
      ],
      new WeakMap(),
    );
  }
}
Syntax.DEFAULTS = {
  hljs: (() => {
    return window.hljs;
  })(),
  interval: 1000,
  languages: [
    { key: 'plain', label: 'Plain' },
    { key: 'bash', label: 'Bash' },
    { key: 'cpp', label: 'C++' },
    { key: 'cs', label: 'C#' },
    { key: 'css', label: 'CSS' },
    { key: 'diff', label: 'Diff' },
    { key: 'xml', label: 'HTML/XML' },
    { key: 'java', label: 'Java' },
    { key: 'javascript', label: 'Javascript' },
    { key: 'markdown', label: 'Markdown' },
    { key: 'php', label: 'PHP' },
    { key: 'python', label: 'Python' },
    { key: 'ruby', label: 'Ruby' },
    { key: 'sql', label: 'SQL' },
  ],
};




/***/ }),

/***/ "./modules/table.js":
/*!**************************!*\
  !*** ./modules/table.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill-delta */ "./node_modules/quill-delta/dist/Delta.js");
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/quill */ "./core/quill.js");
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/module */ "./core/module.js");
/* harmony import */ var _formats_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../formats/table */ "./formats/table.js");





class Table extends _core_module__WEBPACK_IMPORTED_MODULE_2__["default"] {
  static register() {
    _core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].register(_formats_table__WEBPACK_IMPORTED_MODULE_3__["TableCell"]);
    _core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].register(_formats_table__WEBPACK_IMPORTED_MODULE_3__["TableRow"]);
    _core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].register(_formats_table__WEBPACK_IMPORTED_MODULE_3__["TableBody"]);
    _core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].register(_formats_table__WEBPACK_IMPORTED_MODULE_3__["TableContainer"]);
  }

  constructor(...args) {
    super(...args);
    this.listenBalanceCells();
  }

  balanceTables() {
    this.quill.scroll.descendants(_formats_table__WEBPACK_IMPORTED_MODULE_3__["TableContainer"]).forEach(table => {
      table.balanceCells();
    });
  }

  deleteColumn() {
    const [table, , cell] = this.getTable();
    if (cell == null) return;
    table.deleteColumn(cell.cellOffset());
    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER);
  }

  deleteRow() {
    const [, row] = this.getTable();
    if (row == null) return;
    row.remove();
    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER);
  }

  deleteTable() {
    const [table] = this.getTable();
    if (table == null) return;
    const offset = table.offset();
    table.remove();
    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER);
    this.quill.setSelection(offset, _core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].sources.SILENT);
  }

  getTable(range = this.quill.getSelection()) {
    if (range == null) return [null, null, null, -1];
    const [cell, offset] = this.quill.getLine(range.index);
    if (cell == null || cell.statics.blotName !== _formats_table__WEBPACK_IMPORTED_MODULE_3__["TableCell"].blotName) {
      return [null, null, null, -1];
    }
    const row = cell.parent;
    const table = row.parent.parent;
    return [table, row, cell, offset];
  }

  insertColumn(offset) {
    const range = this.quill.getSelection();
    const [table, row, cell] = this.getTable(range);
    if (cell == null) return;
    const column = cell.cellOffset();
    table.insertColumn(column + offset);
    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER);
    let shift = row.rowOffset();
    if (offset === 0) {
      shift += 1;
    }
    this.quill.setSelection(
      range.index + shift,
      range.length,
      _core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].sources.SILENT,
    );
  }

  insertColumnLeft() {
    this.insertColumn(0);
  }

  insertColumnRight() {
    this.insertColumn(1);
  }

  insertRow(offset) {
    const range = this.quill.getSelection();
    const [table, row, cell] = this.getTable(range);
    if (cell == null) return;
    const index = row.rowOffset();
    table.insertRow(index + offset);
    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER);
    if (offset > 0) {
      this.quill.setSelection(range, _core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].sources.SILENT);
    } else {
      this.quill.setSelection(
        range.index + row.children.length,
        range.length,
        _core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].sources.SILENT,
      );
    }
  }

  insertRowAbove() {
    this.insertRow(0);
  }

  insertRowBelow() {
    this.insertRow(1);
  }

  insertTable(rows, columns) {
    const range = this.quill.getSelection();
    if (range == null) return;
    const delta = new Array(rows).fill(0).reduce(memo => {
      const text = new Array(columns).fill('\n').join('');
      return memo.insert(text, { table: Object(_formats_table__WEBPACK_IMPORTED_MODULE_3__["tableId"])() });
    }, new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a().retain(range.index));
    this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER);
    this.quill.setSelection(range.index, _core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].sources.SILENT);
    this.balanceTables();
  }

  listenBalanceCells() {
    this.quill.on(_core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].events.SCROLL_OPTIMIZE, mutations => {
      mutations.some(mutation => {
        if (['TD', 'TR', 'TBODY', 'TABLE'].includes(mutation.target.tagName)) {
          this.quill.once(_core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].events.TEXT_CHANGE, (delta, old, source) => {
            if (source !== _core_quill__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER) return;
            this.balanceTables();
          });
          return true;
        }
        return false;
      });
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Table);


/***/ }),

/***/ "./modules/toolbar.js":
/*!****************************!*\
  !*** ./modules/toolbar.js ***!
  \****************************/
/*! exports provided: default, addControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Toolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addControls", function() { return addControls; });
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill-delta */ "./node_modules/quill-delta/dist/Delta.js");
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! parchment */ "./node_modules/parchment/dist/parchment.js");
/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(parchment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/quill */ "./core/quill.js");
/* harmony import */ var _core_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/logger */ "./core/logger.js");
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/module */ "./core/module.js");






const debug = Object(_core_logger__WEBPACK_IMPORTED_MODULE_3__["default"])('quill:toolbar');

class Toolbar extends _core_module__WEBPACK_IMPORTED_MODULE_4__["default"] {
  constructor(quill, options) {
    super(quill, options);
    if (Array.isArray(this.options.container)) {
      const container = document.createElement('div');
      addControls(container, this.options.container);
      quill.container.parentNode.insertBefore(container, quill.container);
      this.container = container;
    } else if (typeof this.options.container === 'string') {
      this.container = document.querySelector(this.options.container);
    } else {
      this.container = this.options.container;
    }
    if (!(this.container instanceof HTMLElement)) {
      return debug.error('Container required for toolbar', this.options);
    }
    this.container.classList.add('ql-toolbar');
    this.controls = [];
    this.handlers = {};
    Object.keys(this.options.handlers).forEach(format => {
      this.addHandler(format, this.options.handlers[format]);
    });
    Array.from(this.container.querySelectorAll('button, select')).forEach(
      input => {
        this.attach(input);
      },
    );
    this.quill.on(_core_quill__WEBPACK_IMPORTED_MODULE_2__["default"].events.EDITOR_CHANGE, (type, range) => {
      if (type === _core_quill__WEBPACK_IMPORTED_MODULE_2__["default"].events.SELECTION_CHANGE) {
        this.update(range);
      }
    });
    this.quill.on(_core_quill__WEBPACK_IMPORTED_MODULE_2__["default"].events.SCROLL_OPTIMIZE, () => {
      const [range] = this.quill.selection.getRange(); // quill.getSelection triggers update
      this.update(range);
    });
  }

  addHandler(format, handler) {
    this.handlers[format] = handler;
  }

  attach(input) {
    let format = Array.from(input.classList).find(className => {
      return className.indexOf('ql-') === 0;
    });
    if (!format) return;
    format = format.slice('ql-'.length);
    if (input.tagName === 'BUTTON') {
      input.setAttribute('type', 'button');
    }
    if (
      this.handlers[format] == null &&
      this.quill.scroll.query(format) == null
    ) {
      debug.warn('ignoring attaching to nonexistent format', format, input);
      return;
    }
    const eventName = input.tagName === 'SELECT' ? 'change' : 'click';
    input.addEventListener(eventName, e => {
      let value;
      if (input.tagName === 'SELECT') {
        if (input.selectedIndex < 0) return;
        const selected = input.options[input.selectedIndex];
        if (selected.hasAttribute('selected')) {
          value = false;
        } else {
          value = selected.value || false;
        }
      } else {
        if (input.classList.contains('ql-active')) {
          value = false;
        } else {
          value = input.value || !input.hasAttribute('value');
        }
        e.preventDefault();
      }
      this.quill.focus();
      const [range] = this.quill.selection.getRange();
      if (this.handlers[format] != null) {
        this.handlers[format].call(this, value);
      } else if (
        this.quill.scroll.query(format).prototype instanceof parchment__WEBPACK_IMPORTED_MODULE_1__["EmbedBlot"]
      ) {
        value = prompt(`Enter ${format}`); // eslint-disable-line no-alert
        if (!value) return;
        this.quill.updateContents(
          new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a()
            .retain(range.index)
            .delete(range.length)
            .insert({ [format]: value }),
          _core_quill__WEBPACK_IMPORTED_MODULE_2__["default"].sources.USER,
        );
      } else {
        this.quill.format(format, value, _core_quill__WEBPACK_IMPORTED_MODULE_2__["default"].sources.USER);
      }
      this.update(range);
    });
    this.controls.push([format, input]);
  }

  update(range) {
    const formats = range == null ? {} : this.quill.getFormat(range);
    this.controls.forEach(pair => {
      const [format, input] = pair;
      if (input.tagName === 'SELECT') {
        let option;
        if (range == null) {
          option = null;
        } else if (formats[format] == null) {
          option = input.querySelector('option[selected]');
        } else if (!Array.isArray(formats[format])) {
          let value = formats[format];
          if (typeof value === 'string') {
            value = value.replace(/"/g, '\\"');
          }
          option = input.querySelector(`option[value="${value}"]`);
        }
        if (option == null) {
          input.value = ''; // TODO make configurable?
          input.selectedIndex = -1;
        } else {
          option.selected = true;
        }
      } else if (range == null) {
        input.classList.remove('ql-active');
      } else if (input.hasAttribute('value')) {
        // both being null should match (default values)
        // '1' should match with 1 (headers)
        const isActive =
          formats[format] === input.getAttribute('value') ||
          (formats[format] != null &&
            formats[format].toString() === input.getAttribute('value')) ||
          (formats[format] == null && !input.getAttribute('value'));
        input.classList.toggle('ql-active', isActive);
      } else {
        input.classList.toggle('ql-active', formats[format] != null);
      }
    });
  }
}
Toolbar.DEFAULTS = {};

function addButton(container, format, value) {
  const input = document.createElement('button');
  input.setAttribute('type', 'button');
  input.classList.add(`ql-${format}`);
  if (value != null) {
    input.value = value;
  }
  container.appendChild(input);
}

function addControls(container, groups) {
  if (!Array.isArray(groups[0])) {
    groups = [groups];
  }
  groups.forEach(controls => {
    const group = document.createElement('span');
    group.classList.add('ql-formats');
    controls.forEach(control => {
      if (typeof control === 'string') {
        addButton(group, control);
      } else {
        const format = Object.keys(control)[0];
        const value = control[format];
        if (Array.isArray(value)) {
          addSelect(group, format, value);
        } else {
          addButton(group, format, value);
        }
      }
    });
    container.appendChild(group);
  });
}

function addSelect(container, format, values) {
  const input = document.createElement('select');
  input.classList.add(`ql-${format}`);
  values.forEach(value => {
    const option = document.createElement('option');
    if (value !== false) {
      option.setAttribute('value', value);
    } else {
      option.setAttribute('selected', 'selected');
    }
    input.appendChild(option);
  });
  container.appendChild(input);
}

Toolbar.DEFAULTS = {
  container: null,
  handlers: {
    clean() {
      const range = this.quill.getSelection();
      if (range == null) return;
      if (range.length === 0) {
        const formats = this.quill.getFormat();
        Object.keys(formats).forEach(name => {
          // Clean functionality in existing apps only clean inline formats
          if (this.quill.scroll.query(name, parchment__WEBPACK_IMPORTED_MODULE_1__["Scope"].INLINE) != null) {
            this.quill.format(name, false, _core_quill__WEBPACK_IMPORTED_MODULE_2__["default"].sources.USER);
          }
        });
      } else {
        this.quill.removeFormat(range, _core_quill__WEBPACK_IMPORTED_MODULE_2__["default"].sources.USER);
      }
    },
    direction(value) {
      const { align } = this.quill.getFormat();
      if (value === 'rtl' && align == null) {
        this.quill.format('align', 'right', _core_quill__WEBPACK_IMPORTED_MODULE_2__["default"].sources.USER);
      } else if (!value && align === 'right') {
        this.quill.format('align', false, _core_quill__WEBPACK_IMPORTED_MODULE_2__["default"].sources.USER);
      }
      this.quill.format('direction', value, _core_quill__WEBPACK_IMPORTED_MODULE_2__["default"].sources.USER);
    },
    indent(value) {
      const range = this.quill.getSelection();
      const formats = this.quill.getFormat(range);
      const indent = parseInt(formats.indent || 0, 10);
      if (value === '+1' || value === '-1') {
        let modifier = value === '+1' ? 1 : -1;
        if (formats.direction === 'rtl') modifier *= -1;
        this.quill.format('indent', indent + modifier, _core_quill__WEBPACK_IMPORTED_MODULE_2__["default"].sources.USER);
      }
    },
    link(value) {
      if (value === true) {
        value = prompt('Enter link URL:'); // eslint-disable-line no-alert
      }
      this.quill.format('link', value, _core_quill__WEBPACK_IMPORTED_MODULE_2__["default"].sources.USER);
    },
    list(value) {
      const range = this.quill.getSelection();
      const formats = this.quill.getFormat(range);
      if (value === 'check') {
        if (formats.list === 'checked' || formats.list === 'unchecked') {
          this.quill.format('list', false, _core_quill__WEBPACK_IMPORTED_MODULE_2__["default"].sources.USER);
        } else {
          this.quill.format('list', 'unchecked', _core_quill__WEBPACK_IMPORTED_MODULE_2__["default"].sources.USER);
        }
      } else {
        this.quill.format('list', value, _core_quill__WEBPACK_IMPORTED_MODULE_2__["default"].sources.USER);
      }
    },
  },
};




/***/ }),

/***/ "./modules/uploader.js":
/*!*****************************!*\
  !*** ./modules/uploader.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill-delta */ "./node_modules/quill-delta/dist/Delta.js");
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/emitter */ "./core/emitter.js");
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/module */ "./core/module.js");




class Uploader extends _core_module__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(quill, options) {
    super(quill, options);
    quill.root.addEventListener('drop', e => {
      e.preventDefault();
      let native;
      if (document.caretRangeFromPoint) {
        native = document.caretRangeFromPoint(e.clientX, e.clientY);
      } else if (document.caretPositionFromPoint) {
        const position = document.caretPositionFromPoint(e.clientX, e.clientY);
        native = document.createRange();
        native.setStart(position.offsetNode, position.offset);
        native.setEnd(position.offsetNode, position.offset);
      } else {
        return;
      }
      const normalized = quill.selection.normalizeNative(native);
      const range = quill.selection.normalizedToRange(normalized);
      this.upload(range, e.dataTransfer.files);
    });
  }

  upload(range, files) {
    const uploads = [];
    Array.from(files).forEach(file => {
      if (file && this.options.mimetypes.includes(file.type)) {
        uploads.push(file);
      }
    });
    if (uploads.length > 0) {
      this.options.handler.call(this, range, uploads);
    }
  }
}

Uploader.DEFAULTS = {
  mimetypes: ['image/png', 'image/jpeg'],
  handler(range, files) {
    const promises = files.map(file => {
      return new Promise(resolve => {
        const reader = new FileReader();
        reader.onload = e => {
          resolve(e.target.result);
        };
        reader.readAsDataURL(file);
      });
    });
    Promise.all(promises).then(images => {
      const update = images.reduce((delta, image) => {
        return delta.insert({ image });
      }, new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a().retain(range.index).delete(range.length));
      this.quill.updateContents(update, _core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER);
      this.quill.setSelection(
        range.index + images.length,
        _core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].sources.SILENT,
      );
    });
  },
};

/* harmony default export */ __webpack_exports__["default"] = (Uploader);


/***/ }),

/***/ "./node_modules/clone/clone.js":
/*!*************************************!*\
  !*** ./node_modules/clone/clone.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {var clone = (function() {
'use strict';

function _instanceof(obj, type) {
  return type != null && obj instanceof type;
}

var nativeMap;
try {
  nativeMap = Map;
} catch(_) {
  // maybe a reference error because no `Map`. Give it a dummy value that no
  // value will ever be an instanceof.
  nativeMap = function() {};
}

var nativeSet;
try {
  nativeSet = Set;
} catch(_) {
  nativeSet = function() {};
}

var nativePromise;
try {
  nativePromise = Promise;
} catch(_) {
  nativePromise = function() {};
}

/**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
 * @param `includeNonEnumerable` - set to true if the non-enumerable properties
 *    should be cloned as well. Non-enumerable properties on the prototype
 *    chain will be ignored. (optional - false by default)
*/
function clone(parent, circular, depth, prototype, includeNonEnumerable) {
  if (typeof circular === 'object') {
    depth = circular.depth;
    prototype = circular.prototype;
    includeNonEnumerable = circular.includeNonEnumerable;
    circular = circular.circular;
  }
  // maintain two arrays for circular references, where corresponding parents
  // and children have the same index
  var allParents = [];
  var allChildren = [];

  var useBuffer = typeof Buffer != 'undefined';

  if (typeof circular == 'undefined')
    circular = true;

  if (typeof depth == 'undefined')
    depth = Infinity;

  // recurse this function so we don't reset allParents and allChildren
  function _clone(parent, depth) {
    // cloning null always returns null
    if (parent === null)
      return null;

    if (depth === 0)
      return parent;

    var child;
    var proto;
    if (typeof parent != 'object') {
      return parent;
    }

    if (_instanceof(parent, nativeMap)) {
      child = new nativeMap();
    } else if (_instanceof(parent, nativeSet)) {
      child = new nativeSet();
    } else if (_instanceof(parent, nativePromise)) {
      child = new nativePromise(function (resolve, reject) {
        parent.then(function(value) {
          resolve(_clone(value, depth - 1));
        }, function(err) {
          reject(_clone(err, depth - 1));
        });
      });
    } else if (clone.__isArray(parent)) {
      child = [];
    } else if (clone.__isRegExp(parent)) {
      child = new RegExp(parent.source, __getRegExpFlags(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (clone.__isDate(parent)) {
      child = new Date(parent.getTime());
    } else if (useBuffer && Buffer.isBuffer(parent)) {
      if (Buffer.allocUnsafe) {
        // Node.js >= 4.5.0
        child = Buffer.allocUnsafe(parent.length);
      } else {
        // Older Node.js versions
        child = new Buffer(parent.length);
      }
      parent.copy(child);
      return child;
    } else if (_instanceof(parent, Error)) {
      child = Object.create(parent);
    } else {
      if (typeof prototype == 'undefined') {
        proto = Object.getPrototypeOf(parent);
        child = Object.create(proto);
      }
      else {
        child = Object.create(prototype);
        proto = prototype;
      }
    }

    if (circular) {
      var index = allParents.indexOf(parent);

      if (index != -1) {
        return allChildren[index];
      }
      allParents.push(parent);
      allChildren.push(child);
    }

    if (_instanceof(parent, nativeMap)) {
      parent.forEach(function(value, key) {
        var keyChild = _clone(key, depth - 1);
        var valueChild = _clone(value, depth - 1);
        child.set(keyChild, valueChild);
      });
    }
    if (_instanceof(parent, nativeSet)) {
      parent.forEach(function(value) {
        var entryChild = _clone(value, depth - 1);
        child.add(entryChild);
      });
    }

    for (var i in parent) {
      var attrs;
      if (proto) {
        attrs = Object.getOwnPropertyDescriptor(proto, i);
      }

      if (attrs && attrs.set == null) {
        continue;
      }
      child[i] = _clone(parent[i], depth - 1);
    }

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(parent);
      for (var i = 0; i < symbols.length; i++) {
        // Don't need to worry about cloning a symbol because it is a primitive,
        // like a number or string.
        var symbol = symbols[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
        if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
          continue;
        }
        child[symbol] = _clone(parent[symbol], depth - 1);
        if (!descriptor.enumerable) {
          Object.defineProperty(child, symbol, {
            enumerable: false
          });
        }
      }
    }

    if (includeNonEnumerable) {
      var allPropertyNames = Object.getOwnPropertyNames(parent);
      for (var i = 0; i < allPropertyNames.length; i++) {
        var propertyName = allPropertyNames[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
        if (descriptor && descriptor.enumerable) {
          continue;
        }
        child[propertyName] = _clone(parent[propertyName], depth - 1);
        Object.defineProperty(child, propertyName, {
          enumerable: false
        });
      }
    }

    return child;
  }

  return _clone(parent, depth);
}

/**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */
clone.clonePrototype = function clonePrototype(parent) {
  if (parent === null)
    return null;

  var c = function () {};
  c.prototype = parent;
  return new c();
};

// private utility functions

function __objToStr(o) {
  return Object.prototype.toString.call(o);
}
clone.__objToStr = __objToStr;

function __isDate(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Date]';
}
clone.__isDate = __isDate;

function __isArray(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Array]';
}
clone.__isArray = __isArray;

function __isRegExp(o) {
  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
}
clone.__isRegExp = __isRegExp;

function __getRegExpFlags(re) {
  var flags = '';
  if (re.global) flags += 'g';
  if (re.ignoreCase) flags += 'i';
  if (re.multiline) flags += 'm';
  return flags;
}
clone.__getRegExpFlags = __getRegExpFlags;

return clone;
})();

if ( true && module.exports) {
  module.exports = clone;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../Program Files/nodejs/node_modules/webpack/node_modules/buffer/index.js */ "../../../../../../Program Files/nodejs/node_modules/webpack/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/deep-equal/index.js":
/*!******************************************!*\
  !*** ./node_modules/deep-equal/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pSlice = Array.prototype.slice;
var objectKeys = __webpack_require__(/*! ./lib/keys.js */ "./node_modules/deep-equal/lib/keys.js");
var isArguments = __webpack_require__(/*! ./lib/is_arguments.js */ "./node_modules/deep-equal/lib/is_arguments.js");

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}


/***/ }),

/***/ "./node_modules/deep-equal/lib/is_arguments.js":
/*!*****************************************************!*\
  !*** ./node_modules/deep-equal/lib/is_arguments.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};


/***/ }),

/***/ "./node_modules/deep-equal/lib/keys.js":
/*!*********************************************!*\
  !*** ./node_modules/deep-equal/lib/keys.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}


/***/ }),

/***/ "./node_modules/eventemitter3/index.js":
/*!*********************************************!*\
  !*** ./node_modules/eventemitter3/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ "./node_modules/extend/index.js":
/*!**************************************!*\
  !*** ./node_modules/extend/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty = function setProperty(target, options) {
	if (defineProperty && options.name === '__proto__') {
		defineProperty(target, options.name, {
			enumerable: true,
			configurable: true,
			value: options.newValue,
			writable: true
		});
	} else {
		target[options.name] = options.newValue;
	}
};

// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty = function getProperty(obj, name) {
	if (name === '__proto__') {
		if (!hasOwn.call(obj, name)) {
			return void 0;
		} else if (gOPD) {
			// In early versions of node, obj['__proto__'] is buggy when obj has
			// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
			return gOPD(obj, name).value;
		}
	}

	return obj[name];
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = getProperty(target, name);
				copy = getProperty(options, name);

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						setProperty(target, { name: name, newValue: copy });
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};


/***/ }),

/***/ "./node_modules/fast-diff/diff.js":
/*!****************************************!*\
  !*** ./node_modules/fast-diff/diff.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This library modifies the diff-patch-match library by Neil Fraser
 * by removing the patch and match functionality and certain advanced
 * options in the diff function. The original license is as follows:
 *
 * ===
 *
 * Diff Match and Patch
 *
 * Copyright 2006 Google Inc.
 * http://code.google.com/p/google-diff-match-patch/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * The data structure representing a diff is an array of tuples:
 * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
 * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
 */
var DIFF_DELETE = -1;
var DIFF_INSERT = 1;
var DIFF_EQUAL = 0;


/**
 * Find the differences between two texts.  Simplifies the problem by stripping
 * any common prefix or suffix off the texts before diffing.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {Int|Object} [cursor_pos] Edit position in text1 or object with more info
 * @return {Array} Array of diff tuples.
 */
function diff_main(text1, text2, cursor_pos, _fix_unicode) {
  // Check for equality
  if (text1 === text2) {
    if (text1) {
      return [[DIFF_EQUAL, text1]];
    }
    return [];
  }

  if (cursor_pos != null) {
    var editdiff = find_cursor_edit_diff(text1, text2, cursor_pos);
    if (editdiff) {
      return editdiff;
    }
  }

  // Trim off common prefix (speedup).
  var commonlength = diff_commonPrefix(text1, text2);
  var commonprefix = text1.substring(0, commonlength);
  text1 = text1.substring(commonlength);
  text2 = text2.substring(commonlength);

  // Trim off common suffix (speedup).
  commonlength = diff_commonSuffix(text1, text2);
  var commonsuffix = text1.substring(text1.length - commonlength);
  text1 = text1.substring(0, text1.length - commonlength);
  text2 = text2.substring(0, text2.length - commonlength);

  // Compute the diff on the middle block.
  var diffs = diff_compute_(text1, text2);

  // Restore the prefix and suffix.
  if (commonprefix) {
    diffs.unshift([DIFF_EQUAL, commonprefix]);
  }
  if (commonsuffix) {
    diffs.push([DIFF_EQUAL, commonsuffix]);
  }
  diff_cleanupMerge(diffs, _fix_unicode);
  return diffs;
};


/**
 * Find the differences between two texts.  Assumes that the texts do not
 * have any common prefix or suffix.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @return {Array} Array of diff tuples.
 */
function diff_compute_(text1, text2) {
  var diffs;

  if (!text1) {
    // Just add some text (speedup).
    return [[DIFF_INSERT, text2]];
  }

  if (!text2) {
    // Just delete some text (speedup).
    return [[DIFF_DELETE, text1]];
  }

  var longtext = text1.length > text2.length ? text1 : text2;
  var shorttext = text1.length > text2.length ? text2 : text1;
  var i = longtext.indexOf(shorttext);
  if (i !== -1) {
    // Shorter text is inside the longer text (speedup).
    diffs = [
      [DIFF_INSERT, longtext.substring(0, i)],
      [DIFF_EQUAL, shorttext],
      [DIFF_INSERT, longtext.substring(i + shorttext.length)]
    ];
    // Swap insertions for deletions if diff is reversed.
    if (text1.length > text2.length) {
      diffs[0][0] = diffs[2][0] = DIFF_DELETE;
    }
    return diffs;
  }

  if (shorttext.length === 1) {
    // Single character string.
    // After the previous speedup, the character can't be an equality.
    return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
  }

  // Check to see if the problem can be split in two.
  var hm = diff_halfMatch_(text1, text2);
  if (hm) {
    // A half-match was found, sort out the return data.
    var text1_a = hm[0];
    var text1_b = hm[1];
    var text2_a = hm[2];
    var text2_b = hm[3];
    var mid_common = hm[4];
    // Send both pairs off for separate processing.
    var diffs_a = diff_main(text1_a, text2_a);
    var diffs_b = diff_main(text1_b, text2_b);
    // Merge the results.
    return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);
  }

  return diff_bisect_(text1, text2);
};


/**
 * Find the 'middle snake' of a diff, split the problem in two
 * and return the recursively constructed diff.
 * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @return {Array} Array of diff tuples.
 * @private
 */
function diff_bisect_(text1, text2) {
  // Cache the text lengths to prevent multiple calls.
  var text1_length = text1.length;
  var text2_length = text2.length;
  var max_d = Math.ceil((text1_length + text2_length) / 2);
  var v_offset = max_d;
  var v_length = 2 * max_d;
  var v1 = new Array(v_length);
  var v2 = new Array(v_length);
  // Setting all elements to -1 is faster in Chrome & Firefox than mixing
  // integers and undefined.
  for (var x = 0; x < v_length; x++) {
    v1[x] = -1;
    v2[x] = -1;
  }
  v1[v_offset + 1] = 0;
  v2[v_offset + 1] = 0;
  var delta = text1_length - text2_length;
  // If the total number of characters is odd, then the front path will collide
  // with the reverse path.
  var front = (delta % 2 !== 0);
  // Offsets for start and end of k loop.
  // Prevents mapping of space beyond the grid.
  var k1start = 0;
  var k1end = 0;
  var k2start = 0;
  var k2end = 0;
  for (var d = 0; d < max_d; d++) {
    // Walk the front path one step.
    for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
      var k1_offset = v_offset + k1;
      var x1;
      if (k1 === -d || (k1 !== d && v1[k1_offset - 1] < v1[k1_offset + 1])) {
        x1 = v1[k1_offset + 1];
      } else {
        x1 = v1[k1_offset - 1] + 1;
      }
      var y1 = x1 - k1;
      while (
        x1 < text1_length && y1 < text2_length &&
        text1.charAt(x1) === text2.charAt(y1)
      ) {
        x1++;
        y1++;
      }
      v1[k1_offset] = x1;
      if (x1 > text1_length) {
        // Ran off the right of the graph.
        k1end += 2;
      } else if (y1 > text2_length) {
        // Ran off the bottom of the graph.
        k1start += 2;
      } else if (front) {
        var k2_offset = v_offset + delta - k1;
        if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] !== -1) {
          // Mirror x2 onto top-left coordinate system.
          var x2 = text1_length - v2[k2_offset];
          if (x1 >= x2) {
            // Overlap detected.
            return diff_bisectSplit_(text1, text2, x1, y1);
          }
        }
      }
    }

    // Walk the reverse path one step.
    for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
      var k2_offset = v_offset + k2;
      var x2;
      if (k2 === -d || (k2 !== d && v2[k2_offset - 1] < v2[k2_offset + 1])) {
        x2 = v2[k2_offset + 1];
      } else {
        x2 = v2[k2_offset - 1] + 1;
      }
      var y2 = x2 - k2;
      while (
        x2 < text1_length && y2 < text2_length &&
        text1.charAt(text1_length - x2 - 1) === text2.charAt(text2_length - y2 - 1)
      ) {
        x2++;
        y2++;
      }
      v2[k2_offset] = x2;
      if (x2 > text1_length) {
        // Ran off the left of the graph.
        k2end += 2;
      } else if (y2 > text2_length) {
        // Ran off the top of the graph.
        k2start += 2;
      } else if (!front) {
        var k1_offset = v_offset + delta - k2;
        if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] !== -1) {
          var x1 = v1[k1_offset];
          var y1 = v_offset + x1 - k1_offset;
          // Mirror x2 onto top-left coordinate system.
          x2 = text1_length - x2;
          if (x1 >= x2) {
            // Overlap detected.
            return diff_bisectSplit_(text1, text2, x1, y1);
          }
        }
      }
    }
  }
  // Diff took too long and hit the deadline or
  // number of diffs equals number of characters, no commonality at all.
  return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
};


/**
 * Given the location of the 'middle snake', split the diff in two parts
 * and recurse.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {number} x Index of split point in text1.
 * @param {number} y Index of split point in text2.
 * @return {Array} Array of diff tuples.
 */
function diff_bisectSplit_(text1, text2, x, y) {
  var text1a = text1.substring(0, x);
  var text2a = text2.substring(0, y);
  var text1b = text1.substring(x);
  var text2b = text2.substring(y);

  // Compute both diffs serially.
  var diffs = diff_main(text1a, text2a);
  var diffsb = diff_main(text1b, text2b);

  return diffs.concat(diffsb);
};


/**
 * Determine the common prefix of two strings.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the start of each
 *     string.
 */
function diff_commonPrefix(text1, text2) {
  // Quick check for common null cases.
  if (!text1 || !text2 || text1.charAt(0) !== text2.charAt(0)) {
    return 0;
  }
  // Binary search.
  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
  var pointermin = 0;
  var pointermax = Math.min(text1.length, text2.length);
  var pointermid = pointermax;
  var pointerstart = 0;
  while (pointermin < pointermid) {
    if (
      text1.substring(pointerstart, pointermid) ==
      text2.substring(pointerstart, pointermid)
    ) {
      pointermin = pointermid;
      pointerstart = pointermin;
    } else {
      pointermax = pointermid;
    }
    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  }

  if (is_surrogate_pair_start(text1.charCodeAt(pointermid - 1))) {
    pointermid--;
  }

  return pointermid;
};


/**
 * Determine the common suffix of two strings.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the end of each string.
 */
function diff_commonSuffix(text1, text2) {
  // Quick check for common null cases.
  if (!text1 || !text2 || text1.slice(-1) !== text2.slice(-1)) {
    return 0;
  }
  // Binary search.
  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
  var pointermin = 0;
  var pointermax = Math.min(text1.length, text2.length);
  var pointermid = pointermax;
  var pointerend = 0;
  while (pointermin < pointermid) {
    if (
      text1.substring(text1.length - pointermid, text1.length - pointerend) ==
      text2.substring(text2.length - pointermid, text2.length - pointerend)
    ) {
      pointermin = pointermid;
      pointerend = pointermin;
    } else {
      pointermax = pointermid;
    }
    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  }

  if (is_surrogate_pair_end(text1.charCodeAt(text1.length - pointermid))) {
    pointermid--;
  }

  return pointermid;
};


/**
 * Do the two texts share a substring which is at least half the length of the
 * longer text?
 * This speedup can produce non-minimal diffs.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {Array.<string>} Five element Array, containing the prefix of
 *     text1, the suffix of text1, the prefix of text2, the suffix of
 *     text2 and the common middle.  Or null if there was no match.
 */
function diff_halfMatch_(text1, text2) {
  var longtext = text1.length > text2.length ? text1 : text2;
  var shorttext = text1.length > text2.length ? text2 : text1;
  if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
    return null;  // Pointless.
  }

  /**
   * Does a substring of shorttext exist within longtext such that the substring
   * is at least half the length of longtext?
   * Closure, but does not reference any external variables.
   * @param {string} longtext Longer string.
   * @param {string} shorttext Shorter string.
   * @param {number} i Start index of quarter length substring within longtext.
   * @return {Array.<string>} Five element Array, containing the prefix of
   *     longtext, the suffix of longtext, the prefix of shorttext, the suffix
   *     of shorttext and the common middle.  Or null if there was no match.
   * @private
   */
  function diff_halfMatchI_(longtext, shorttext, i) {
    // Start with a 1/4 length substring at position i as a seed.
    var seed = longtext.substring(i, i + Math.floor(longtext.length / 4));
    var j = -1;
    var best_common = '';
    var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
    while ((j = shorttext.indexOf(seed, j + 1)) !== -1) {
      var prefixLength = diff_commonPrefix(
        longtext.substring(i), shorttext.substring(j));
      var suffixLength = diff_commonSuffix(
        longtext.substring(0, i), shorttext.substring(0, j));
      if (best_common.length < suffixLength + prefixLength) {
        best_common = shorttext.substring(
          j - suffixLength, j) + shorttext.substring(j, j + prefixLength);
        best_longtext_a = longtext.substring(0, i - suffixLength);
        best_longtext_b = longtext.substring(i + prefixLength);
        best_shorttext_a = shorttext.substring(0, j - suffixLength);
        best_shorttext_b = shorttext.substring(j + prefixLength);
      }
    }
    if (best_common.length * 2 >= longtext.length) {
      return [
        best_longtext_a, best_longtext_b,
        best_shorttext_a, best_shorttext_b, best_common
      ];
    } else {
      return null;
    }
  }

  // First check if the second quarter is the seed for a half-match.
  var hm1 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 4));
  // Check again based on the third quarter.
  var hm2 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 2));
  var hm;
  if (!hm1 && !hm2) {
    return null;
  } else if (!hm2) {
    hm = hm1;
  } else if (!hm1) {
    hm = hm2;
  } else {
    // Both matched.  Select the longest.
    hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
  }

  // A half-match was found, sort out the return data.
  var text1_a, text1_b, text2_a, text2_b;
  if (text1.length > text2.length) {
    text1_a = hm[0];
    text1_b = hm[1];
    text2_a = hm[2];
    text2_b = hm[3];
  } else {
    text2_a = hm[0];
    text2_b = hm[1];
    text1_a = hm[2];
    text1_b = hm[3];
  }
  var mid_common = hm[4];
  return [text1_a, text1_b, text2_a, text2_b, mid_common];
};


/**
 * Reorder and merge like edit sections.  Merge equalities.
 * Any edit section can move as long as it doesn't cross an equality.
 * @param {Array} diffs Array of diff tuples.
 * @param {boolean} fix_unicode Whether to normalize to a unicode-correct diff
 */
function diff_cleanupMerge(diffs, fix_unicode) {
  diffs.push([DIFF_EQUAL, '']);  // Add a dummy entry at the end.
  var pointer = 0;
  var count_delete = 0;
  var count_insert = 0;
  var text_delete = '';
  var text_insert = '';
  var commonlength;
  while (pointer < diffs.length) {
    if (pointer < diffs.length - 1 && !diffs[pointer][1]) {
      diffs.splice(pointer, 1);
      continue;
    }
    switch (diffs[pointer][0]) {
      case DIFF_INSERT:

        count_insert++;
        text_insert += diffs[pointer][1];
        pointer++;
        break;
      case DIFF_DELETE:
        count_delete++;
        text_delete += diffs[pointer][1];
        pointer++;
        break;
      case DIFF_EQUAL:
        var previous_equality = pointer - count_insert - count_delete - 1;
        if (fix_unicode) {
          // prevent splitting of unicode surrogate pairs.  when fix_unicode is true,
          // we assume that the old and new text in the diff are complete and correct
          // unicode-encoded JS strings, but the tuple boundaries may fall between
          // surrogate pairs.  we fix this by shaving off stray surrogates from the end
          // of the previous equality and the beginning of this equality.  this may create
          // empty equalities or a common prefix or suffix.  for example, if AB and AC are
          // emojis, `[[0, 'A'], [-1, 'BA'], [0, 'C']]` would turn into deleting 'ABAC' and
          // inserting 'AC', and then the common suffix 'AC' will be eliminated.  in this
          // particular case, both equalities go away, we absorb any previous inequalities,
          // and we keep scanning for the next equality before rewriting the tuples.
          if (previous_equality >= 0 && ends_with_pair_start(diffs[previous_equality][1])) {
            var stray = diffs[previous_equality][1].slice(-1);
            diffs[previous_equality][1] = diffs[previous_equality][1].slice(0, -1);
            text_delete = stray + text_delete;
            text_insert = stray + text_insert;
            if (!diffs[previous_equality][1]) {
              // emptied out previous equality, so delete it and include previous delete/insert
              diffs.splice(previous_equality, 1);
              pointer--;
              var k = previous_equality - 1;
              if (diffs[k] && diffs[k][0] === DIFF_INSERT) {
                count_insert++;
                text_insert = diffs[k][1] + text_insert;
                k--;
              }
              if (diffs[k] && diffs[k][0] === DIFF_DELETE) {
                count_delete++;
                text_delete = diffs[k][1] + text_delete;
                k--;
              }
              previous_equality = k;
            }
          }
          if (starts_with_pair_end(diffs[pointer][1])) {
            var stray = diffs[pointer][1].charAt(0);
            diffs[pointer][1] = diffs[pointer][1].slice(1);
            text_delete += stray;
            text_insert += stray;
          }
        }
        if (pointer < diffs.length - 1 && !diffs[pointer][1]) {
          // for empty equality not at end, wait for next equality
          diffs.splice(pointer, 1);
          break;
        }
        if (text_delete.length > 0 || text_insert.length > 0) {
          // note that diff_commonPrefix and diff_commonSuffix are unicode-aware
          if (text_delete.length > 0 && text_insert.length > 0) {
            // Factor out any common prefixes.
            commonlength = diff_commonPrefix(text_insert, text_delete);
            if (commonlength !== 0) {
              if (previous_equality >= 0) {
                diffs[previous_equality][1] += text_insert.substring(0, commonlength);
              } else {
                diffs.splice(0, 0, [DIFF_EQUAL, text_insert.substring(0, commonlength)]);
                pointer++;
              }
              text_insert = text_insert.substring(commonlength);
              text_delete = text_delete.substring(commonlength);
            }
            // Factor out any common suffixes.
            commonlength = diff_commonSuffix(text_insert, text_delete);
            if (commonlength !== 0) {
              diffs[pointer][1] =
                text_insert.substring(text_insert.length - commonlength) + diffs[pointer][1];
              text_insert = text_insert.substring(0, text_insert.length - commonlength);
              text_delete = text_delete.substring(0, text_delete.length - commonlength);
            }
          }
          // Delete the offending records and add the merged ones.
          var n = count_insert + count_delete;
          if (text_delete.length === 0 && text_insert.length === 0) {
            diffs.splice(pointer - n, n);
            pointer = pointer - n;
          } else if (text_delete.length === 0) {
            diffs.splice(pointer - n, n, [DIFF_INSERT, text_insert]);
            pointer = pointer - n + 1;
          } else if (text_insert.length === 0) {
            diffs.splice(pointer - n, n, [DIFF_DELETE, text_delete]);
            pointer = pointer - n + 1;
          } else {
            diffs.splice(pointer - n, n, [DIFF_DELETE, text_delete], [DIFF_INSERT, text_insert]);
            pointer = pointer - n + 2;
          }
        }
        if (pointer !== 0 && diffs[pointer - 1][0] === DIFF_EQUAL) {
          // Merge this equality with the previous one.
          diffs[pointer - 1][1] += diffs[pointer][1];
          diffs.splice(pointer, 1);
        } else {
          pointer++;
        }
        count_insert = 0;
        count_delete = 0;
        text_delete = '';
        text_insert = '';
        break;
    }
  }
  if (diffs[diffs.length - 1][1] === '') {
    diffs.pop();  // Remove the dummy entry at the end.
  }

  // Second pass: look for single edits surrounded on both sides by equalities
  // which can be shifted sideways to eliminate an equality.
  // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC
  var changes = false;
  pointer = 1;
  // Intentionally ignore the first and last element (don't need checking).
  while (pointer < diffs.length - 1) {
    if (diffs[pointer - 1][0] === DIFF_EQUAL &&
      diffs[pointer + 1][0] === DIFF_EQUAL) {
      // This is a single edit surrounded by equalities.
      if (diffs[pointer][1].substring(diffs[pointer][1].length -
        diffs[pointer - 1][1].length) === diffs[pointer - 1][1]) {
        // Shift the edit over the previous equality.
        diffs[pointer][1] = diffs[pointer - 1][1] +
          diffs[pointer][1].substring(0, diffs[pointer][1].length -
            diffs[pointer - 1][1].length);
        diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
        diffs.splice(pointer - 1, 1);
        changes = true;
      } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) ==
        diffs[pointer + 1][1]) {
        // Shift the edit over the next equality.
        diffs[pointer - 1][1] += diffs[pointer + 1][1];
        diffs[pointer][1] =
          diffs[pointer][1].substring(diffs[pointer + 1][1].length) +
          diffs[pointer + 1][1];
        diffs.splice(pointer + 1, 1);
        changes = true;
      }
    }
    pointer++;
  }
  // If shifts were made, the diff needs reordering and another shift sweep.
  if (changes) {
    diff_cleanupMerge(diffs, fix_unicode);
  }
};

function is_surrogate_pair_start(charCode) {
  return charCode >= 0xD800 && charCode <= 0xDBFF;
}

function is_surrogate_pair_end(charCode) {
  return charCode >= 0xDC00 && charCode <= 0xDFFF;
}

function starts_with_pair_end(str) {
  return is_surrogate_pair_end(str.charCodeAt(0));
}

function ends_with_pair_start(str) {
  return is_surrogate_pair_start(str.charCodeAt(str.length - 1));
}

function remove_empty_tuples(tuples) {
  var ret = [];
  for (var i = 0; i < tuples.length; i++) {
    if (tuples[i][1].length > 0) {
      ret.push(tuples[i]);
    }
  }
  return ret;
}

function make_edit_splice(before, oldMiddle, newMiddle, after) {
  if (ends_with_pair_start(before) || starts_with_pair_end(after)) {
    return null;
  }
  return remove_empty_tuples([
    [DIFF_EQUAL, before],
    [DIFF_DELETE, oldMiddle],
    [DIFF_INSERT, newMiddle],
    [DIFF_EQUAL, after]
  ]);
}

function find_cursor_edit_diff(oldText, newText, cursor_pos) {
  // note: this runs after equality check has ruled out exact equality
  var oldRange = typeof cursor_pos === 'number' ?
    { index: cursor_pos, length: 0 } : cursor_pos.oldRange;
  var newRange = typeof cursor_pos === 'number' ?
    null : cursor_pos.newRange;
  // take into account the old and new selection to generate the best diff
  // possible for a text edit.  for example, a text change from "xxx" to "xx"
  // could be a delete or forwards-delete of any one of the x's, or the
  // result of selecting two of the x's and typing "x".
  var oldLength = oldText.length;
  var newLength = newText.length;
  if (oldRange.length === 0 && (newRange === null || newRange.length === 0)) {
    // see if we have an insert or delete before or after cursor
    var oldCursor = oldRange.index;
    var oldBefore = oldText.slice(0, oldCursor);
    var oldAfter = oldText.slice(oldCursor);
    var maybeNewCursor = newRange ? newRange.index : null;
    editBefore: {
      // is this an insert or delete right before oldCursor?
      var newCursor = oldCursor + newLength - oldLength;
      if (maybeNewCursor !== null && maybeNewCursor !== newCursor) {
        break editBefore;
      }
      if (newCursor < 0 || newCursor > newLength) {
        break editBefore;
      }
      var newBefore = newText.slice(0, newCursor);
      var newAfter = newText.slice(newCursor);
      if (newAfter !== oldAfter) {
        break editBefore;
      }
      var prefixLength = Math.min(oldCursor, newCursor);
      var oldPrefix = oldBefore.slice(0, prefixLength);
      var newPrefix = newBefore.slice(0, prefixLength);
      if (oldPrefix !== newPrefix) {
        break editBefore;
      }
      var oldMiddle = oldBefore.slice(prefixLength);
      var newMiddle = newBefore.slice(prefixLength);
      return make_edit_splice(oldPrefix, oldMiddle, newMiddle, oldAfter);
    }
    editAfter: {
      // is this an insert or delete right after oldCursor?
      if (maybeNewCursor !== null && maybeNewCursor !== oldCursor) {
        break editAfter;
      }
      var cursor = oldCursor;
      var newBefore = newText.slice(0, cursor);
      var newAfter = newText.slice(cursor);
      if (newBefore !== oldBefore) {
        break editAfter;
      }
      var suffixLength = Math.min(oldLength - cursor, newLength - cursor);
      var oldSuffix = oldAfter.slice(oldAfter.length - suffixLength);
      var newSuffix = newAfter.slice(newAfter.length - suffixLength);
      if (oldSuffix !== newSuffix) {
        break editAfter;
      }
      var oldMiddle = oldAfter.slice(0, oldAfter.length - suffixLength);
      var newMiddle = newAfter.slice(0, newAfter.length - suffixLength);
      return make_edit_splice(oldBefore, oldMiddle, newMiddle, oldSuffix);
    }
  }
  if (oldRange.length > 0 && newRange && newRange.length === 0) {
    replaceRange: {
      // see if diff could be a splice of the old selection range
      var oldPrefix = oldText.slice(0, oldRange.index);
      var oldSuffix = oldText.slice(oldRange.index + oldRange.length);
      var prefixLength = oldPrefix.length;
      var suffixLength = oldSuffix.length;
      if (newLength < prefixLength + suffixLength) {
        break replaceRange;
      }
      var newPrefix = newText.slice(0, prefixLength);
      var newSuffix = newText.slice(newLength - suffixLength);
      if (oldPrefix !== newPrefix || oldSuffix !== newSuffix) {
        break replaceRange;
      }
      var oldMiddle = oldText.slice(prefixLength, oldLength - suffixLength);
      var newMiddle = newText.slice(prefixLength, newLength - suffixLength);
      return make_edit_splice(oldPrefix, oldMiddle, newMiddle, oldSuffix);
    }
  }

  return null;
}

function diff(text1, text2, cursor_pos) {
  // only pass fix_unicode=true at the top level, not when diff_main is
  // recursively invoked
  return diff_main(text1, text2, cursor_pos, true);
}

diff.INSERT = DIFF_INSERT;
diff.DELETE = DIFF_DELETE;
diff.EQUAL = DIFF_EQUAL;

module.exports = diff;


/***/ }),

/***/ "./node_modules/parchment/dist/parchment.js":
/*!**************************************************!*\
  !*** ./node_modules/parchment/dist/parchment.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function s(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,s),r.l=!0,r.exports}return s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(i,r,function(e){return t[e]}.bind(null,r));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){t.exports=s(1)},function(t,e,s){"use strict";var i;s.r(e),function(t){t[t.TYPE=3]="TYPE",t[t.LEVEL=12]="LEVEL",t[t.ATTRIBUTE=13]="ATTRIBUTE",t[t.BLOT=14]="BLOT",t[t.INLINE=7]="INLINE",t[t.BLOCK=11]="BLOCK",t[t.BLOCK_BLOT=10]="BLOCK_BLOT",t[t.INLINE_BLOT=6]="INLINE_BLOT",t[t.BLOCK_ATTRIBUTE=9]="BLOCK_ATTRIBUTE",t[t.INLINE_ATTRIBUTE=5]="INLINE_ATTRIBUTE",t[t.ANY=15]="ANY"}(i||(i={}));var r=i;var n=class{constructor(){this.head=null,this.tail=null,this.length=0}append(...t){this.insertBefore(t[0],null),t.length>1&&this.append.apply(this,t.slice(1))}at(t){const e=this.iterator();let s=e();for(;s&&t>0;)t-=1,s=e();return s}contains(t){const e=this.iterator();let s=e();for(;s;){if(s===t)return!0;s=e()}return!1}indexOf(t){const e=this.iterator();let s=e(),i=0;for(;s;){if(s===t)return i;i+=1,s=e()}return-1}insertBefore(t,e){null!=t&&(this.remove(t),t.next=e,null!=e?(t.prev=e.prev,null!=e.prev&&(e.prev.next=t),e.prev=t,e===this.head&&(this.head=t)):null!=this.tail?(this.tail.next=t,t.prev=this.tail,this.tail=t):(t.prev=null,this.head=this.tail=t),this.length+=1)}offset(t){let e=0,s=this.head;for(;null!=s;){if(s===t)return e;e+=s.length(),s=s.next}return-1}remove(t){this.contains(t)&&(null!=t.prev&&(t.prev.next=t.next),null!=t.next&&(t.next.prev=t.prev),t===this.head&&(this.head=t.next),t===this.tail&&(this.tail=t.prev),this.length-=1)}iterator(t=this.head){return()=>{const e=t;return null!=t&&(t=t.next),e}}find(t,e=!1){const s=this.iterator();let i=s();for(;i;){const r=i.length();if(t<r||e&&t===r&&(null==i.next||0!==i.next.length()))return[i,t];t-=r,i=s()}return[null,0]}forEach(t){const e=this.iterator();let s=e();for(;s;)t(s),s=e()}forEachAt(t,e,s){if(e<=0)return;const[i,r]=this.find(t);let n=t-r;const o=this.iterator(i);let a=o();for(;a&&n<t+e;){const i=a.length();t>n?s(a,t-n,Math.min(e,n+i-t)):s(a,0,Math.min(i,t+e-n)),n+=i,a=o()}}map(t){return this.reduce((e,s)=>(e.push(t(s)),e),[])}reduce(t,e){const s=this.iterator();let i=s();for(;i;)e=t(e,i),i=s();return e}};class o extends Error{constructor(t){super(t="[Parchment] "+t),this.message=t,this.name=this.constructor.name}}class a{constructor(){this.attributes={},this.classes={},this.tags={},this.types={}}static find(t,e=!1){return null==t?null:this.blots.has(t)?this.blots.get(t)||null:e?this.find(t.parentNode,e):null}create(t,e,s){const i=this.query(e);if(null==i)throw new o(`Unable to create ${e} blot`);const r=i,n=new r(t,e instanceof Node||e.nodeType===Node.TEXT_NODE?e:r.create(s),s);return a.blots.set(n.domNode,n),n}find(t,e=!1){return a.find(t,e)}query(t,e=r.ANY){let s;if("string"==typeof t)s=this.types[t]||this.attributes[t];else if(t instanceof Text||t.nodeType===Node.TEXT_NODE)s=this.types.text;else if("number"==typeof t)t&r.LEVEL&r.BLOCK?s=this.types.block:t&r.LEVEL&r.INLINE&&(s=this.types.inline);else if(t instanceof HTMLElement){(t.getAttribute("class")||"").split(/\s+/).some(t=>!!(s=this.classes[t])),s=s||this.tags[t.tagName]}return null==s?null:e&r.LEVEL&s.scope&&e&r.TYPE&s.scope?s:null}register(...t){if(t.length>1)return t.map(t=>this.register(t));const e=t[0];if("string"!=typeof e.blotName&&"string"!=typeof e.attrName)throw new o("Invalid definition");if("abstract"===e.blotName)throw new o("Cannot register abstract class");if(this.types[e.blotName||e.attrName]=e,"string"==typeof e.keyName)this.attributes[e.keyName]=e;else if(null!=e.className&&(this.classes[e.className]=e),null!=e.tagName){Array.isArray(e.tagName)?e.tagName=e.tagName.map(t=>t.toUpperCase()):e.tagName=e.tagName.toUpperCase(),(Array.isArray(e.tagName)?e.tagName:[e.tagName]).forEach(t=>{null!=this.tags[t]&&null!=e.className||(this.tags[t]=e)})}return e}}a.blots=new WeakMap;class l{constructor(t,e){this.scroll=t,this.domNode=e,a.blots.set(e,this),this.prev=null,this.next=null}static create(t){if(null==this.tagName)throw new o("Blot definition missing tagName");let e;return Array.isArray(this.tagName)?("string"==typeof t&&(t=t.toUpperCase(),parseInt(t,10).toString()===t&&(t=parseInt(t,10))),e="number"==typeof t?document.createElement(this.tagName[t-1]):this.tagName.indexOf(t)>-1?document.createElement(t):document.createElement(this.tagName[0])):e=document.createElement(this.tagName),this.className&&e.classList.add(this.className),e}get statics(){return this.constructor}attach(){}clone(){const t=this.domNode.cloneNode(!1);return this.scroll.create(t)}detach(){null!=this.parent&&this.parent.removeChild(this),a.blots.delete(this.domNode)}deleteAt(t,e){this.isolate(t,e).remove()}formatAt(t,e,s,i){const n=this.isolate(t,e);if(null!=this.scroll.query(s,r.BLOT)&&i)n.wrap(s,i);else if(null!=this.scroll.query(s,r.ATTRIBUTE)){const t=this.scroll.create(this.statics.scope);n.wrap(t),t.format(s,i)}}insertAt(t,e,s){const i=null==s?this.scroll.create("text",e):this.scroll.create(e,s),r=this.split(t);this.parent.insertBefore(i,r||void 0)}isolate(t,e){const s=this.split(t);if(null==s)throw new Error("Attempt to isolate at end");return s.split(e),s}length(){return 1}offset(t=this.parent){return null==this.parent||this===t?0:this.parent.children.offset(this)+this.parent.offset(t)}optimize(t){!this.statics.requiredContainer||this.parent instanceof this.statics.requiredContainer||this.wrap(this.statics.requiredContainer.blotName)}remove(){null!=this.domNode.parentNode&&this.domNode.parentNode.removeChild(this.domNode),this.detach()}replaceWith(t,e){const s="string"==typeof t?this.scroll.create(t,e):t;return null!=this.parent&&(this.parent.insertBefore(s,this.next||void 0),this.remove()),s}split(t,e){return 0===t?this:this.next}update(t,e){}wrap(t,e){const s="string"==typeof t?this.scroll.create(t,e):t;if(null!=this.parent&&this.parent.insertBefore(s,this.next||void 0),"function"!=typeof s.appendChild)throw new o(`Cannot wrap ${t}`);return s.appendChild(this),s}}l.blotName="abstract";var h=l;class c extends h{constructor(t,e){super(t,e),this.uiNode=null,this.build()}appendChild(t){this.insertBefore(t)}attach(){super.attach(),this.children.forEach(t=>{t.attach()})}attachUI(t){null!=this.uiNode&&this.uiNode.remove(),this.uiNode=t,c.uiClass&&this.uiNode.classList.add(c.uiClass),this.uiNode.setAttribute("contenteditable","false"),this.domNode.insertBefore(this.uiNode,this.domNode.firstChild)}build(){this.children=new n,Array.from(this.domNode.childNodes).filter(t=>t!==this.uiNode).reverse().forEach(t=>{try{const e=d(t,this.scroll);this.insertBefore(e,this.children.head||void 0)}catch(t){if(t instanceof o)return;throw t}})}deleteAt(t,e){if(0===t&&e===this.length())return this.remove();this.children.forEachAt(t,e,(t,e,s)=>{t.deleteAt(e,s)})}descendant(t,e=0){const[s,i]=this.children.find(e);return null==t.blotName&&t(s)||null!=t.blotName&&s instanceof t?[s,i]:s instanceof c?s.descendant(t,i):[null,-1]}descendants(t,e=0,s=Number.MAX_VALUE){let i=[],r=s;return this.children.forEachAt(e,s,(e,s,n)=>{(null==t.blotName&&t(e)||null!=t.blotName&&e instanceof t)&&i.push(e),e instanceof c&&(i=i.concat(e.descendants(t,s,r))),r-=n}),i}detach(){this.children.forEach(t=>{t.detach()}),super.detach()}enforceAllowedChildren(){let t=!1;this.children.forEach(e=>{if(t)return;this.statics.allowedChildren.some(t=>e instanceof t)||(e.statics.scope===r.BLOCK_BLOT?(null!=e.next&&this.splitAfter(e),null!=e.prev&&this.splitAfter(e.prev),e.parent.unwrap(),t=!0):e instanceof c?e.unwrap():e.remove())})}formatAt(t,e,s,i){this.children.forEachAt(t,e,(t,e,r)=>{t.formatAt(e,r,s,i)})}insertAt(t,e,s){const[i,r]=this.children.find(t);if(i)i.insertAt(r,e,s);else{const t=null==s?this.scroll.create("text",e):this.scroll.create(e,s);this.appendChild(t)}}insertBefore(t,e){null!=t.parent&&t.parent.children.remove(t);let s=null;this.children.insertBefore(t,e||null),null!=e&&(s=e.domNode),this.domNode.parentNode===t.domNode&&this.domNode.nextSibling===s||this.domNode.insertBefore(t.domNode,s),t.parent=this,t.attach()}length(){return this.children.reduce((t,e)=>t+e.length(),0)}moveChildren(t,e){this.children.forEach(s=>{t.insertBefore(s,e)})}optimize(t){if(super.optimize(t),this.enforceAllowedChildren(),null!=this.uiNode&&this.uiNode!==this.domNode.firstChild&&this.domNode.insertBefore(this.uiNode,this.domNode.firstChild),0===this.children.length)if(null!=this.statics.defaultChild){const t=this.scroll.create(this.statics.defaultChild.blotName);this.appendChild(t)}else this.remove()}path(t,e=!1){const[s,i]=this.children.find(t,e),r=[[this,t]];return s instanceof c?r.concat(s.path(i,e)):(null!=s&&r.push([s,i]),r)}removeChild(t){this.children.remove(t)}replaceWith(t,e){const s="string"==typeof t?this.scroll.create(t,e):t;return s instanceof c&&this.moveChildren(s),super.replaceWith(s)}split(t,e=!1){if(!e){if(0===t)return this;if(t===this.length())return this.next}const s=this.clone();return this.parent&&this.parent.insertBefore(s,this.next||void 0),this.children.forEachAt(t,this.length(),(t,i,r)=>{const n=t.split(i,e);null!=n&&s.appendChild(n)}),s}splitAfter(t){const e=this.clone();for(;null!=t.next;)e.appendChild(t.next);return this.parent&&this.parent.insertBefore(e,this.next||void 0),e}unwrap(){this.parent&&this.moveChildren(this.parent,this.next||void 0),this.remove()}update(t,e){const s=[],i=[];t.forEach(t=>{t.target===this.domNode&&"childList"===t.type&&(s.push.apply(s,t.addedNodes),i.push.apply(i,t.removedNodes))}),i.forEach(t=>{if(null!=t.parentNode&&"IFRAME"!==t.tagName&&document.body.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY)return;const e=this.scroll.find(t);null!=e&&(null!=e.domNode.parentNode&&e.domNode.parentNode!==this.domNode||e.detach())}),s.filter(t=>t.parentNode===this.domNode||t===this.uiNode).sort((t,e)=>t===e?0:t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING?1:-1).forEach(t=>{let e=null;null!=t.nextSibling&&(e=this.scroll.find(t.nextSibling));const s=d(t,this.scroll);s.next===e&&null!=s.next||(null!=s.parent&&s.parent.removeChild(this),this.insertBefore(s,e||void 0))}),this.enforceAllowedChildren()}}function d(t,e){let s=e.find(t);if(null==s)try{s=e.create(t)}catch(i){s=e.create(r.INLINE),Array.from(t.childNodes).forEach(t=>{s.domNode.appendChild(t)}),t.parentNode&&t.parentNode.replaceChild(s.domNode,t),s.attach()}return s}c.uiClass="";var u=c;class m extends u{checkMerge(){return null!==this.next&&this.next.statics.blotName===this.statics.blotName}deleteAt(t,e){super.deleteAt(t,e),this.enforceAllowedChildren()}formatAt(t,e,s,i){super.formatAt(t,e,s,i),this.enforceAllowedChildren()}insertAt(t,e,s){super.insertAt(t,e,s),this.enforceAllowedChildren()}optimize(t){super.optimize(t),this.children.length>0&&null!=this.next&&this.checkMerge()&&(this.next.moveChildren(this),this.next.remove())}}m.blotName="container",m.scope=r.BLOCK_BLOT;var p=m;class f extends h{static value(t){return!0}index(t,e){return this.domNode===t||this.domNode.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY?Math.min(e,1):-1}position(t,e){let s=Array.from(this.parent.domNode.childNodes).indexOf(this.domNode);return t>0&&(s+=1),[this.parent.domNode,s]}value(){return{[this.statics.blotName]:this.statics.value(this.domNode)||!0}}}f.scope=r.INLINE_BLOT;var N=f;class b{static keys(t){return Array.from(t.attributes).map(t=>t.name)}constructor(t,e,s={}){this.attrName=t,this.keyName=e;const i=r.TYPE&r.ATTRIBUTE;this.scope=null!=s.scope?s.scope&r.LEVEL|i:r.ATTRIBUTE,null!=s.whitelist&&(this.whitelist=s.whitelist)}add(t,e){return!!this.canAdd(t,e)&&(t.setAttribute(this.keyName,e),!0)}canAdd(t,e){return null==this.whitelist||("string"==typeof e?this.whitelist.indexOf(e.replace(/["']/g,""))>-1:this.whitelist.indexOf(e)>-1)}remove(t){t.removeAttribute(this.keyName)}value(t){const e=t.getAttribute(this.keyName);return this.canAdd(t,e)&&e?e:""}}function g(t,e){return(t.getAttribute("class")||"").split(/\s+/).filter(t=>0===t.indexOf(`${e}-`))}var y=class extends b{static keys(t){return(t.getAttribute("class")||"").split(/\s+/).map(t=>t.split("-").slice(0,-1).join("-"))}add(t,e){return!!this.canAdd(t,e)&&(this.remove(t),t.classList.add(`${this.keyName}-${e}`),!0)}remove(t){g(t,this.keyName).forEach(e=>{t.classList.remove(e)}),0===t.classList.length&&t.removeAttribute("class")}value(t){const e=(g(t,this.keyName)[0]||"").slice(this.keyName.length+1);return this.canAdd(t,e)?e:""}};function v(t){const e=t.split("-"),s=e.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("");return e[0]+s}var A=class extends b{static keys(t){return(t.getAttribute("style")||"").split(";").map(t=>t.split(":")[0].trim())}add(t,e){return!!this.canAdd(t,e)&&(t.style[v(this.keyName)]=e,!0)}remove(t){t.style[v(this.keyName)]="",t.getAttribute("style")||t.removeAttribute("style")}value(t){const e=t.style[v(this.keyName)];return this.canAdd(t,e)?e:""}};var x=class{constructor(t){this.attributes={},this.domNode=t,this.build()}attribute(t,e){e?t.add(this.domNode,e)&&(null!=t.value(this.domNode)?this.attributes[t.attrName]=t:delete this.attributes[t.attrName]):(t.remove(this.domNode),delete this.attributes[t.attrName])}build(){this.attributes={};const t=a.find(this.domNode);if(null==t)return;const e=b.keys(this.domNode),s=y.keys(this.domNode),i=A.keys(this.domNode);e.concat(s).concat(i).forEach(e=>{const s=t.scroll.query(e,r.ATTRIBUTE);s instanceof b&&(this.attributes[s.attrName]=s)})}copy(t){Object.keys(this.attributes).forEach(e=>{const s=this.attributes[e].value(this.domNode);t.format(e,s)})}move(t){this.copy(t),Object.keys(this.attributes).forEach(t=>{this.attributes[t].remove(this.domNode)}),this.attributes={}}values(){return Object.keys(this.attributes).reduce((t,e)=>(t[e]=this.attributes[e].value(this.domNode),t),{})}};class E extends u{constructor(t,e){super(t,e),this.attributes=new x(this.domNode)}static formats(t,e){const s=e.query(E.blotName);if(null==s||t.tagName!==s.tagName)return"string"==typeof this.tagName||(Array.isArray(this.tagName)?t.tagName.toLowerCase():void 0)}format(t,e){if(t!==this.statics.blotName||e){const s=this.scroll.query(t,r.INLINE);if(null==s)return;s instanceof b?this.attributes.attribute(s,e):!e||t===this.statics.blotName&&this.formats()[t]===e||this.replaceWith(t,e)}else this.children.forEach(t=>{t instanceof E||(t=t.wrap(E.blotName,!0)),this.attributes.copy(t)}),this.unwrap()}formats(){const t=this.attributes.values(),e=this.statics.formats(this.domNode,this.scroll);return null!=e&&(t[this.statics.blotName]=e),t}formatAt(t,e,s,i){if(null!=this.formats()[s]||this.scroll.query(s,r.ATTRIBUTE)){this.isolate(t,e).format(s,i)}else super.formatAt(t,e,s,i)}optimize(t){super.optimize(t);const e=this.formats();if(0===Object.keys(e).length)return this.unwrap();const s=this.next;s instanceof E&&s.prev===this&&function(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const s in t)if(t[s]!==e[s])return!1;return!0}(e,s.formats())&&(s.moveChildren(this),s.remove())}replaceWith(t,e){const s=super.replaceWith(t,e);return this.attributes.copy(s),s}update(t,e){super.update(t,e),t.some(t=>t.target===this.domNode&&"attributes"===t.type)&&this.attributes.build()}wrap(t,e){const s=super.wrap(t,e);return s instanceof E&&this.attributes.move(s),s}}E.allowedChildren=[E,N],E.blotName="inline",E.scope=r.INLINE_BLOT,E.tagName="SPAN";var T=E;class B extends u{constructor(t,e){super(t,e),this.attributes=new x(this.domNode)}static formats(t,e){const s=e.query(B.blotName);if(null==s||t.tagName!==s.tagName)return"string"==typeof this.tagName||(Array.isArray(this.tagName)?t.tagName.toLowerCase():void 0)}format(t,e){const s=this.scroll.query(t,r.BLOCK);null!=s&&(s instanceof b?this.attributes.attribute(s,e):t!==this.statics.blotName||e?!e||t===this.statics.blotName&&this.formats()[t]===e||this.replaceWith(t,e):this.replaceWith(B.blotName))}formats(){const t=this.attributes.values(),e=this.statics.formats(this.domNode,this.scroll);return null!=e&&(t[this.statics.blotName]=e),t}formatAt(t,e,s,i){null!=this.scroll.query(s,r.BLOCK)?this.format(s,i):super.formatAt(t,e,s,i)}insertAt(t,e,s){if(null==s||null!=this.scroll.query(e,r.INLINE))super.insertAt(t,e,s);else{const i=this.split(t);if(null==i)throw new Error("Attempt to insertAt after block boundaries");{const t=this.scroll.create(e,s);i.parent.insertBefore(t,i)}}}replaceWith(t,e){const s=super.replaceWith(t,e);return this.attributes.copy(s),s}update(t,e){super.update(t,e),t.some(t=>t.target===this.domNode&&"attributes"===t.type)&&this.attributes.build()}}B.blotName="block",B.scope=r.BLOCK_BLOT,B.tagName="P",B.allowedChildren=[T,B,N];var C=B;var L=class extends N{static formats(t,e){}format(t,e){super.formatAt(0,this.length(),t,e)}formatAt(t,e,s,i){0===t&&e===this.length()?this.format(s,i):super.formatAt(t,e,s,i)}formats(){return this.statics.formats(this.domNode,this.scroll)}};const O={attributes:!0,characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0},w=100;class I extends u{constructor(t,e){super(null,e),this.registry=t,this.scroll=this,this.build(),this.observer=new MutationObserver(t=>{this.update(t)}),this.observer.observe(this.domNode,O),this.attach()}create(t,e){return this.registry.create(this,t,e)}find(t,e=!1){return this.registry.find(t,e)}query(t,e=r.ANY){return this.registry.query(t,e)}register(...t){return this.registry.register(...t)}build(){null!=this.scroll&&super.build()}detach(){super.detach(),this.observer.disconnect()}deleteAt(t,e){this.update(),0===t&&e===this.length()?this.children.forEach(t=>{t.remove()}):super.deleteAt(t,e)}formatAt(t,e,s,i){this.update(),super.formatAt(t,e,s,i)}insertAt(t,e,s){this.update(),super.insertAt(t,e,s)}optimize(t=[],e={}){super.optimize(e);const s=e.mutationsMap||new WeakMap;let i=Array.from(this.observer.takeRecords());for(;i.length>0;)t.push(i.pop());const r=(t,e=!0)=>{null!=t&&t!==this&&null!=t.domNode.parentNode&&(s.has(t.domNode)||s.set(t.domNode,[]),e&&r(t.parent))},n=t=>{s.has(t.domNode)&&(t instanceof u&&t.children.forEach(n),s.delete(t.domNode),t.optimize(e))};let o=t;for(let e=0;o.length>0;e+=1){if(e>=w)throw new Error("[Parchment] Maximum optimize iterations reached");for(o.forEach(t=>{const e=this.find(t.target,!0);null!=e&&(e.domNode===t.target&&("childList"===t.type?(r(this.find(t.previousSibling,!1)),Array.from(t.addedNodes).forEach(t=>{const e=this.find(t,!1);r(e,!1),e instanceof u&&e.children.forEach(t=>{r(t,!1)})})):"attributes"===t.type&&r(e.prev)),r(e))}),this.children.forEach(n),i=(o=Array.from(this.observer.takeRecords())).slice();i.length>0;)t.push(i.pop())}}update(t,e={}){t=t||this.observer.takeRecords();const s=new WeakMap;t.map(t=>{const e=a.find(t.target,!0);return null==e?null:s.has(e.domNode)?(s.get(e.domNode).push(t),null):(s.set(e.domNode,[t]),e)}).forEach(t=>{null!=t&&t!==this&&s.has(t.domNode)&&t.update(s.get(t.domNode)||[],e)}),e.mutationsMap=s,s.has(this.domNode)&&super.update(s.get(this.domNode),e),this.optimize(t,e)}}I.blotName="scroll",I.defaultChild=C,I.allowedChildren=[C,p],I.scope=r.BLOCK_BLOT,I.tagName="DIV";var k=I;class _ extends N{constructor(t,e){super(t,e),this.text=this.statics.value(this.domNode)}static create(t){return document.createTextNode(t)}static value(t){return t.data}deleteAt(t,e){this.domNode.data=this.text=this.text.slice(0,t)+this.text.slice(t+e)}index(t,e){return this.domNode===t?e:-1}insertAt(t,e,s){null==s?(this.text=this.text.slice(0,t)+e+this.text.slice(t),this.domNode.data=this.text):super.insertAt(t,e,s)}length(){return this.text.length}optimize(t){super.optimize(t),this.text=this.statics.value(this.domNode),0===this.text.length?this.remove():this.next instanceof _&&this.next.prev===this&&(this.insertAt(this.length(),this.next.value()),this.next.remove())}position(t,e=!1){return[this.domNode,t]}split(t,e=!1){if(!e){if(0===t)return this;if(t===this.length())return this.next}const s=this.scroll.create(this.domNode.splitText(t));return this.parent.insertBefore(s,this.next||void 0),this.text=this.statics.value(this.domNode),s}update(t,e){t.some(t=>"characterData"===t.type&&t.target===this.domNode)&&(this.text=this.statics.value(this.domNode))}value(){return this.text}}_.blotName="text",_.scope=r.INLINE_BLOT;var M=_;s.d(e,"ParentBlot",function(){return u}),s.d(e,"ContainerBlot",function(){return p}),s.d(e,"LeafBlot",function(){return N}),s.d(e,"EmbedBlot",function(){return L}),s.d(e,"ScrollBlot",function(){return k}),s.d(e,"BlockBlot",function(){return C}),s.d(e,"InlineBlot",function(){return T}),s.d(e,"TextBlot",function(){return M}),s.d(e,"Attributor",function(){return b}),s.d(e,"ClassAttributor",function(){return y}),s.d(e,"StyleAttributor",function(){return A}),s.d(e,"AttributorStore",function(){return x}),s.d(e,"Registry",function(){return a}),s.d(e,"Scope",function(){return r})}])});
//# sourceMappingURL=parchment.js.map

/***/ }),

/***/ "./node_modules/quill-delta/dist/AttributeMap.js":
/*!*******************************************************!*\
  !*** ./node_modules/quill-delta/dist/AttributeMap.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var deep_equal_1 = __importDefault(__webpack_require__(/*! deep-equal */ "./node_modules/deep-equal/index.js"));
var extend_1 = __importDefault(__webpack_require__(/*! extend */ "./node_modules/extend/index.js"));
var AttributeMap;
(function (AttributeMap) {
    function compose(a, b, keepNull) {
        if (a === void 0) { a = {}; }
        if (b === void 0) { b = {}; }
        if (typeof a !== 'object') {
            a = {};
        }
        if (typeof b !== 'object') {
            b = {};
        }
        var attributes = extend_1.default(true, {}, b);
        if (!keepNull) {
            attributes = Object.keys(attributes).reduce(function (copy, key) {
                if (attributes[key] != null) {
                    copy[key] = attributes[key];
                }
                return copy;
            }, {});
        }
        for (var key in a) {
            if (a[key] !== undefined && b[key] === undefined) {
                attributes[key] = a[key];
            }
        }
        return Object.keys(attributes).length > 0 ? attributes : undefined;
    }
    AttributeMap.compose = compose;
    function diff(a, b) {
        if (a === void 0) { a = {}; }
        if (b === void 0) { b = {}; }
        if (typeof a !== 'object') {
            a = {};
        }
        if (typeof b !== 'object') {
            b = {};
        }
        var attributes = Object.keys(a)
            .concat(Object.keys(b))
            .reduce(function (attrs, key) {
            if (!deep_equal_1.default(a[key], b[key])) {
                attrs[key] = b[key] === undefined ? null : b[key];
            }
            return attrs;
        }, {});
        return Object.keys(attributes).length > 0 ? attributes : undefined;
    }
    AttributeMap.diff = diff;
    function invert(attr, base) {
        if (attr === void 0) { attr = {}; }
        if (base === void 0) { base = {}; }
        attr = attr || {};
        var baseInverted = Object.keys(base).reduce(function (memo, key) {
            if (base[key] !== attr[key] && attr[key] !== undefined) {
                memo[key] = base[key];
            }
            return memo;
        }, {});
        return Object.keys(attr).reduce(function (memo, key) {
            if (attr[key] !== base[key] && base[key] === undefined) {
                memo[key] = null;
            }
            return memo;
        }, baseInverted);
    }
    AttributeMap.invert = invert;
    function transform(a, b, priority) {
        if (priority === void 0) { priority = false; }
        if (typeof a !== 'object') {
            return b;
        }
        if (typeof b !== 'object') {
            return undefined;
        }
        if (!priority) {
            return b; // b simply overwrites us without priority
        }
        var attributes = Object.keys(b).reduce(function (attrs, key) {
            if (a[key] === undefined) {
                attrs[key] = b[key]; // null is a valid value
            }
            return attrs;
        }, {});
        return Object.keys(attributes).length > 0 ? attributes : undefined;
    }
    AttributeMap.transform = transform;
})(AttributeMap || (AttributeMap = {}));
exports.default = AttributeMap;
//# sourceMappingURL=AttributeMap.js.map

/***/ }),

/***/ "./node_modules/quill-delta/dist/Delta.js":
/*!************************************************!*\
  !*** ./node_modules/quill-delta/dist/Delta.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var deep_equal_1 = __importDefault(__webpack_require__(/*! deep-equal */ "./node_modules/deep-equal/index.js"));
var extend_1 = __importDefault(__webpack_require__(/*! extend */ "./node_modules/extend/index.js"));
var fast_diff_1 = __importDefault(__webpack_require__(/*! fast-diff */ "./node_modules/fast-diff/diff.js"));
var AttributeMap_1 = __importDefault(__webpack_require__(/*! ./AttributeMap */ "./node_modules/quill-delta/dist/AttributeMap.js"));
var Op_1 = __importDefault(__webpack_require__(/*! ./Op */ "./node_modules/quill-delta/dist/Op.js"));
var NULL_CHARACTER = String.fromCharCode(0); // Placeholder char for embed in diff()
var Delta = /** @class */ (function () {
    function Delta(ops) {
        // Assume we are given a well formed ops
        if (Array.isArray(ops)) {
            this.ops = ops;
        }
        else if (ops != null && Array.isArray(ops.ops)) {
            this.ops = ops.ops;
        }
        else {
            this.ops = [];
        }
    }
    Delta.prototype.insert = function (arg, attributes) {
        var newOp = {};
        if (typeof arg === 'string' && arg.length === 0) {
            return this;
        }
        newOp.insert = arg;
        if (attributes != null &&
            typeof attributes === 'object' &&
            Object.keys(attributes).length > 0) {
            newOp.attributes = attributes;
        }
        return this.push(newOp);
    };
    Delta.prototype.delete = function (length) {
        if (length <= 0) {
            return this;
        }
        return this.push({ delete: length });
    };
    Delta.prototype.retain = function (length, attributes) {
        if (length <= 0) {
            return this;
        }
        var newOp = { retain: length };
        if (attributes != null &&
            typeof attributes === 'object' &&
            Object.keys(attributes).length > 0) {
            newOp.attributes = attributes;
        }
        return this.push(newOp);
    };
    Delta.prototype.push = function (newOp) {
        var index = this.ops.length;
        var lastOp = this.ops[index - 1];
        newOp = extend_1.default(true, {}, newOp);
        if (typeof lastOp === 'object') {
            if (typeof newOp.delete === 'number' &&
                typeof lastOp.delete === 'number') {
                this.ops[index - 1] = { delete: lastOp.delete + newOp.delete };
                return this;
            }
            // Since it does not matter if we insert before or after deleting at the same index,
            // always prefer to insert first
            if (typeof lastOp.delete === 'number' && newOp.insert != null) {
                index -= 1;
                lastOp = this.ops[index - 1];
                if (typeof lastOp !== 'object') {
                    this.ops.unshift(newOp);
                    return this;
                }
            }
            if (deep_equal_1.default(newOp.attributes, lastOp.attributes)) {
                if (typeof newOp.insert === 'string' &&
                    typeof lastOp.insert === 'string') {
                    this.ops[index - 1] = { insert: lastOp.insert + newOp.insert };
                    if (typeof newOp.attributes === 'object') {
                        this.ops[index - 1].attributes = newOp.attributes;
                    }
                    return this;
                }
                else if (typeof newOp.retain === 'number' &&
                    typeof lastOp.retain === 'number') {
                    this.ops[index - 1] = { retain: lastOp.retain + newOp.retain };
                    if (typeof newOp.attributes === 'object') {
                        this.ops[index - 1].attributes = newOp.attributes;
                    }
                    return this;
                }
            }
        }
        if (index === this.ops.length) {
            this.ops.push(newOp);
        }
        else {
            this.ops.splice(index, 0, newOp);
        }
        return this;
    };
    Delta.prototype.chop = function () {
        var lastOp = this.ops[this.ops.length - 1];
        if (lastOp && lastOp.retain && !lastOp.attributes) {
            this.ops.pop();
        }
        return this;
    };
    Delta.prototype.filter = function (predicate) {
        return this.ops.filter(predicate);
    };
    Delta.prototype.forEach = function (predicate) {
        this.ops.forEach(predicate);
    };
    Delta.prototype.map = function (predicate) {
        return this.ops.map(predicate);
    };
    Delta.prototype.partition = function (predicate) {
        var passed = [];
        var failed = [];
        this.forEach(function (op) {
            var target = predicate(op) ? passed : failed;
            target.push(op);
        });
        return [passed, failed];
    };
    Delta.prototype.reduce = function (predicate, initialValue) {
        return this.ops.reduce(predicate, initialValue);
    };
    Delta.prototype.changeLength = function () {
        return this.reduce(function (length, elem) {
            if (elem.insert) {
                return length + Op_1.default.length(elem);
            }
            else if (elem.delete) {
                return length - elem.delete;
            }
            return length;
        }, 0);
    };
    Delta.prototype.length = function () {
        return this.reduce(function (length, elem) {
            return length + Op_1.default.length(elem);
        }, 0);
    };
    Delta.prototype.slice = function (start, end) {
        if (start === void 0) { start = 0; }
        if (end === void 0) { end = Infinity; }
        var ops = [];
        var iter = Op_1.default.iterator(this.ops);
        var index = 0;
        while (index < end && iter.hasNext()) {
            var nextOp = void 0;
            if (index < start) {
                nextOp = iter.next(start - index);
            }
            else {
                nextOp = iter.next(end - index);
                ops.push(nextOp);
            }
            index += Op_1.default.length(nextOp);
        }
        return new Delta(ops);
    };
    Delta.prototype.compose = function (other) {
        var thisIter = Op_1.default.iterator(this.ops);
        var otherIter = Op_1.default.iterator(other.ops);
        var ops = [];
        var firstOther = otherIter.peek();
        if (firstOther != null &&
            typeof firstOther.retain === 'number' &&
            firstOther.attributes == null) {
            var firstLeft = firstOther.retain;
            while (thisIter.peekType() === 'insert' &&
                thisIter.peekLength() <= firstLeft) {
                firstLeft -= thisIter.peekLength();
                ops.push(thisIter.next());
            }
            if (firstOther.retain - firstLeft > 0) {
                otherIter.next(firstOther.retain - firstLeft);
            }
        }
        var delta = new Delta(ops);
        while (thisIter.hasNext() || otherIter.hasNext()) {
            if (otherIter.peekType() === 'insert') {
                delta.push(otherIter.next());
            }
            else if (thisIter.peekType() === 'delete') {
                delta.push(thisIter.next());
            }
            else {
                var length_1 = Math.min(thisIter.peekLength(), otherIter.peekLength());
                var thisOp = thisIter.next(length_1);
                var otherOp = otherIter.next(length_1);
                if (typeof otherOp.retain === 'number') {
                    var newOp = {};
                    if (typeof thisOp.retain === 'number') {
                        newOp.retain = length_1;
                    }
                    else {
                        newOp.insert = thisOp.insert;
                    }
                    // Preserve null when composing with a retain, otherwise remove it for inserts
                    var attributes = AttributeMap_1.default.compose(thisOp.attributes, otherOp.attributes, typeof thisOp.retain === 'number');
                    if (attributes) {
                        newOp.attributes = attributes;
                    }
                    delta.push(newOp);
                    // Optimization if rest of other is just retain
                    if (!otherIter.hasNext() &&
                        deep_equal_1.default(delta.ops[delta.ops.length - 1], newOp)) {
                        var rest = new Delta(thisIter.rest());
                        return delta.concat(rest).chop();
                    }
                    // Other op should be delete, we could be an insert or retain
                    // Insert + delete cancels out
                }
                else if (typeof otherOp.delete === 'number' &&
                    typeof thisOp.retain === 'number') {
                    delta.push(otherOp);
                }
            }
        }
        return delta.chop();
    };
    Delta.prototype.concat = function (other) {
        var delta = new Delta(this.ops.slice());
        if (other.ops.length > 0) {
            delta.push(other.ops[0]);
            delta.ops = delta.ops.concat(other.ops.slice(1));
        }
        return delta;
    };
    Delta.prototype.diff = function (other, cursor) {
        if (this.ops === other.ops) {
            return new Delta();
        }
        var strings = [this, other].map(function (delta) {
            return delta
                .map(function (op) {
                if (op.insert != null) {
                    return typeof op.insert === 'string' ? op.insert : NULL_CHARACTER;
                }
                var prep = delta === other ? 'on' : 'with';
                throw new Error('diff() called ' + prep + ' non-document');
            })
                .join('');
        });
        var retDelta = new Delta();
        var diffResult = fast_diff_1.default(strings[0], strings[1], cursor);
        var thisIter = Op_1.default.iterator(this.ops);
        var otherIter = Op_1.default.iterator(other.ops);
        diffResult.forEach(function (component) {
            var length = component[1].length;
            while (length > 0) {
                var opLength = 0;
                switch (component[0]) {
                    case fast_diff_1.default.INSERT:
                        opLength = Math.min(otherIter.peekLength(), length);
                        retDelta.push(otherIter.next(opLength));
                        break;
                    case fast_diff_1.default.DELETE:
                        opLength = Math.min(length, thisIter.peekLength());
                        thisIter.next(opLength);
                        retDelta.delete(opLength);
                        break;
                    case fast_diff_1.default.EQUAL:
                        opLength = Math.min(thisIter.peekLength(), otherIter.peekLength(), length);
                        var thisOp = thisIter.next(opLength);
                        var otherOp = otherIter.next(opLength);
                        if (deep_equal_1.default(thisOp.insert, otherOp.insert)) {
                            retDelta.retain(opLength, AttributeMap_1.default.diff(thisOp.attributes, otherOp.attributes));
                        }
                        else {
                            retDelta.push(otherOp).delete(opLength);
                        }
                        break;
                }
                length -= opLength;
            }
        });
        return retDelta.chop();
    };
    Delta.prototype.eachLine = function (predicate, newline) {
        if (newline === void 0) { newline = '\n'; }
        var iter = Op_1.default.iterator(this.ops);
        var line = new Delta();
        var i = 0;
        while (iter.hasNext()) {
            if (iter.peekType() !== 'insert') {
                return;
            }
            var thisOp = iter.peek();
            var start = Op_1.default.length(thisOp) - iter.peekLength();
            var index = typeof thisOp.insert === 'string'
                ? thisOp.insert.indexOf(newline, start) - start
                : -1;
            if (index < 0) {
                line.push(iter.next());
            }
            else if (index > 0) {
                line.push(iter.next(index));
            }
            else {
                if (predicate(line, iter.next(1).attributes || {}, i) === false) {
                    return;
                }
                i += 1;
                line = new Delta();
            }
        }
        if (line.length() > 0) {
            predicate(line, {}, i);
        }
    };
    Delta.prototype.invert = function (base) {
        var inverted = new Delta();
        this.reduce(function (baseIndex, op) {
            if (op.insert) {
                inverted.delete(Op_1.default.length(op));
            }
            else if (op.retain && op.attributes == null) {
                inverted.retain(op.retain);
                return baseIndex + op.retain;
            }
            else if (op.delete || (op.retain && op.attributes)) {
                var length_2 = (op.delete || op.retain);
                var slice = base.slice(baseIndex, baseIndex + length_2);
                slice.forEach(function (baseOp) {
                    if (op.delete) {
                        inverted.push(baseOp);
                    }
                    else if (op.retain && op.attributes) {
                        inverted.retain(Op_1.default.length(baseOp), AttributeMap_1.default.invert(op.attributes, baseOp.attributes));
                    }
                });
                return baseIndex + length_2;
            }
            return baseIndex;
        }, 0);
        return inverted.chop();
    };
    Delta.prototype.transform = function (arg, priority) {
        if (priority === void 0) { priority = false; }
        priority = !!priority;
        if (typeof arg === 'number') {
            return this.transformPosition(arg, priority);
        }
        var other = arg;
        var thisIter = Op_1.default.iterator(this.ops);
        var otherIter = Op_1.default.iterator(other.ops);
        var delta = new Delta();
        while (thisIter.hasNext() || otherIter.hasNext()) {
            if (thisIter.peekType() === 'insert' &&
                (priority || otherIter.peekType() !== 'insert')) {
                delta.retain(Op_1.default.length(thisIter.next()));
            }
            else if (otherIter.peekType() === 'insert') {
                delta.push(otherIter.next());
            }
            else {
                var length_3 = Math.min(thisIter.peekLength(), otherIter.peekLength());
                var thisOp = thisIter.next(length_3);
                var otherOp = otherIter.next(length_3);
                if (thisOp.delete) {
                    // Our delete either makes their delete redundant or removes their retain
                    continue;
                }
                else if (otherOp.delete) {
                    delta.push(otherOp);
                }
                else {
                    // We retain either their retain or insert
                    delta.retain(length_3, AttributeMap_1.default.transform(thisOp.attributes, otherOp.attributes, priority));
                }
            }
        }
        return delta.chop();
    };
    Delta.prototype.transformPosition = function (index, priority) {
        if (priority === void 0) { priority = false; }
        priority = !!priority;
        var thisIter = Op_1.default.iterator(this.ops);
        var offset = 0;
        while (thisIter.hasNext() && offset <= index) {
            var length_4 = thisIter.peekLength();
            var nextType = thisIter.peekType();
            thisIter.next();
            if (nextType === 'delete') {
                index -= Math.min(length_4, index - offset);
                continue;
            }
            else if (nextType === 'insert' && (offset < index || !priority)) {
                index += length_4;
            }
            offset += length_4;
        }
        return index;
    };
    Delta.Op = Op_1.default;
    Delta.AttributeMap = AttributeMap_1.default;
    return Delta;
}());
module.exports = Delta;
//# sourceMappingURL=Delta.js.map

/***/ }),

/***/ "./node_modules/quill-delta/dist/Iterator.js":
/*!***************************************************!*\
  !*** ./node_modules/quill-delta/dist/Iterator.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Op_1 = __importDefault(__webpack_require__(/*! ./Op */ "./node_modules/quill-delta/dist/Op.js"));
var Iterator = /** @class */ (function () {
    function Iterator(ops) {
        this.ops = ops;
        this.index = 0;
        this.offset = 0;
    }
    Iterator.prototype.hasNext = function () {
        return this.peekLength() < Infinity;
    };
    Iterator.prototype.next = function (length) {
        if (!length) {
            length = Infinity;
        }
        var nextOp = this.ops[this.index];
        if (nextOp) {
            var offset = this.offset;
            var opLength = Op_1.default.length(nextOp);
            if (length >= opLength - offset) {
                length = opLength - offset;
                this.index += 1;
                this.offset = 0;
            }
            else {
                this.offset += length;
            }
            if (typeof nextOp.delete === 'number') {
                return { delete: length };
            }
            else {
                var retOp = {};
                if (nextOp.attributes) {
                    retOp.attributes = nextOp.attributes;
                }
                if (typeof nextOp.retain === 'number') {
                    retOp.retain = length;
                }
                else if (typeof nextOp.insert === 'string') {
                    retOp.insert = nextOp.insert.substr(offset, length);
                }
                else {
                    // offset should === 0, length should === 1
                    retOp.insert = nextOp.insert;
                }
                return retOp;
            }
        }
        else {
            return { retain: Infinity };
        }
    };
    Iterator.prototype.peek = function () {
        return this.ops[this.index];
    };
    Iterator.prototype.peekLength = function () {
        if (this.ops[this.index]) {
            // Should never return 0 if our index is being managed correctly
            return Op_1.default.length(this.ops[this.index]) - this.offset;
        }
        else {
            return Infinity;
        }
    };
    Iterator.prototype.peekType = function () {
        if (this.ops[this.index]) {
            if (typeof this.ops[this.index].delete === 'number') {
                return 'delete';
            }
            else if (typeof this.ops[this.index].retain === 'number') {
                return 'retain';
            }
            else {
                return 'insert';
            }
        }
        return 'retain';
    };
    Iterator.prototype.rest = function () {
        if (!this.hasNext()) {
            return [];
        }
        else if (this.offset === 0) {
            return this.ops.slice(this.index);
        }
        else {
            var offset = this.offset;
            var index = this.index;
            var next = this.next();
            var rest = this.ops.slice(this.index);
            this.offset = offset;
            this.index = index;
            return [next].concat(rest);
        }
    };
    return Iterator;
}());
exports.default = Iterator;
//# sourceMappingURL=Iterator.js.map

/***/ }),

/***/ "./node_modules/quill-delta/dist/Op.js":
/*!*********************************************!*\
  !*** ./node_modules/quill-delta/dist/Op.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Iterator_1 = __importDefault(__webpack_require__(/*! ./Iterator */ "./node_modules/quill-delta/dist/Iterator.js"));
var Op;
(function (Op) {
    function iterator(ops) {
        return new Iterator_1.default(ops);
    }
    Op.iterator = iterator;
    function length(op) {
        if (typeof op.delete === 'number') {
            return op.delete;
        }
        else if (typeof op.retain === 'number') {
            return op.retain;
        }
        else {
            return typeof op.insert === 'string' ? op.insert.length : 1;
        }
    }
    Op.length = length;
})(Op || (Op = {}));
exports.default = Op;
//# sourceMappingURL=Op.js.map

/***/ }),

/***/ "./quill.js":
/*!******************!*\
  !*** ./quill.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./core.js");
/* harmony import */ var _formats_align__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formats/align */ "./formats/align.js");
/* harmony import */ var _formats_direction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formats/direction */ "./formats/direction.js");
/* harmony import */ var _formats_indent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formats/indent */ "./formats/indent.js");
/* harmony import */ var _formats_blockquote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formats/blockquote */ "./formats/blockquote.js");
/* harmony import */ var _formats_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formats/header */ "./formats/header.js");
/* harmony import */ var _formats_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formats/list */ "./formats/list.js");
/* harmony import */ var _formats_background__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./formats/background */ "./formats/background.js");
/* harmony import */ var _formats_color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./formats/color */ "./formats/color.js");
/* harmony import */ var _formats_font__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./formats/font */ "./formats/font.js");
/* harmony import */ var _formats_size__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./formats/size */ "./formats/size.js");
/* harmony import */ var _formats_bold__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./formats/bold */ "./formats/bold.js");
/* harmony import */ var _formats_italic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./formats/italic */ "./formats/italic.js");
/* harmony import */ var _formats_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./formats/link */ "./formats/link.js");
/* harmony import */ var _formats_script__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./formats/script */ "./formats/script.js");
/* harmony import */ var _formats_strike__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./formats/strike */ "./formats/strike.js");
/* harmony import */ var _formats_underline__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./formats/underline */ "./formats/underline.js");
/* harmony import */ var _formats_formula__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./formats/formula */ "./formats/formula.js");
/* harmony import */ var _formats_image__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./formats/image */ "./formats/image.js");
/* harmony import */ var _formats_video__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./formats/video */ "./formats/video.js");
/* harmony import */ var _formats_code__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./formats/code */ "./formats/code.js");
/* harmony import */ var _modules_syntax__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/syntax */ "./modules/syntax.js");
/* harmony import */ var _modules_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/table */ "./modules/table.js");
/* harmony import */ var _modules_toolbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/toolbar */ "./modules/toolbar.js");
/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ui/icons */ "./ui/icons.js");
/* harmony import */ var _ui_picker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ui/picker */ "./ui/picker.js");
/* harmony import */ var _ui_color_picker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ui/color-picker */ "./ui/color-picker.js");
/* harmony import */ var _ui_icon_picker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ui/icon-picker */ "./ui/icon-picker.js");
/* harmony import */ var _ui_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ui/tooltip */ "./ui/tooltip.js");
/* harmony import */ var _themes_bubble__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./themes/bubble */ "./themes/bubble.js");
/* harmony import */ var _themes_snow__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./themes/snow */ "./themes/snow.js");









































_core__WEBPACK_IMPORTED_MODULE_0__["default"].register(
  {
    'attributors/attribute/direction': _formats_direction__WEBPACK_IMPORTED_MODULE_2__["DirectionAttribute"],

    'attributors/class/align': _formats_align__WEBPACK_IMPORTED_MODULE_1__["AlignClass"],
    'attributors/class/background': _formats_background__WEBPACK_IMPORTED_MODULE_7__["BackgroundClass"],
    'attributors/class/color': _formats_color__WEBPACK_IMPORTED_MODULE_8__["ColorClass"],
    'attributors/class/direction': _formats_direction__WEBPACK_IMPORTED_MODULE_2__["DirectionClass"],
    'attributors/class/font': _formats_font__WEBPACK_IMPORTED_MODULE_9__["FontClass"],
    'attributors/class/size': _formats_size__WEBPACK_IMPORTED_MODULE_10__["SizeClass"],

    'attributors/style/align': _formats_align__WEBPACK_IMPORTED_MODULE_1__["AlignStyle"],
    'attributors/style/background': _formats_background__WEBPACK_IMPORTED_MODULE_7__["BackgroundStyle"],
    'attributors/style/color': _formats_color__WEBPACK_IMPORTED_MODULE_8__["ColorStyle"],
    'attributors/style/direction': _formats_direction__WEBPACK_IMPORTED_MODULE_2__["DirectionStyle"],
    'attributors/style/font': _formats_font__WEBPACK_IMPORTED_MODULE_9__["FontStyle"],
    'attributors/style/size': _formats_size__WEBPACK_IMPORTED_MODULE_10__["SizeStyle"],
  },
  true,
);

_core__WEBPACK_IMPORTED_MODULE_0__["default"].register(
  {
    'formats/align': _formats_align__WEBPACK_IMPORTED_MODULE_1__["AlignClass"],
    'formats/direction': _formats_direction__WEBPACK_IMPORTED_MODULE_2__["DirectionClass"],
    'formats/indent': _formats_indent__WEBPACK_IMPORTED_MODULE_3__["default"],

    'formats/background': _formats_background__WEBPACK_IMPORTED_MODULE_7__["BackgroundStyle"],
    'formats/color': _formats_color__WEBPACK_IMPORTED_MODULE_8__["ColorStyle"],
    'formats/font': _formats_font__WEBPACK_IMPORTED_MODULE_9__["FontClass"],
    'formats/size': _formats_size__WEBPACK_IMPORTED_MODULE_10__["SizeClass"],

    'formats/blockquote': _formats_blockquote__WEBPACK_IMPORTED_MODULE_4__["default"],
    'formats/code-block': _formats_code__WEBPACK_IMPORTED_MODULE_20__["default"],
    'formats/header': _formats_header__WEBPACK_IMPORTED_MODULE_5__["default"],
    'formats/list': _formats_list__WEBPACK_IMPORTED_MODULE_6__["default"],

    'formats/bold': _formats_bold__WEBPACK_IMPORTED_MODULE_11__["default"],
    'formats/code': _formats_code__WEBPACK_IMPORTED_MODULE_20__["Code"],
    'formats/italic': _formats_italic__WEBPACK_IMPORTED_MODULE_12__["default"],
    'formats/link': _formats_link__WEBPACK_IMPORTED_MODULE_13__["default"],
    'formats/script': _formats_script__WEBPACK_IMPORTED_MODULE_14__["default"],
    'formats/strike': _formats_strike__WEBPACK_IMPORTED_MODULE_15__["default"],
    'formats/underline': _formats_underline__WEBPACK_IMPORTED_MODULE_16__["default"],

    'formats/formula': _formats_formula__WEBPACK_IMPORTED_MODULE_17__["default"],
    'formats/image': _formats_image__WEBPACK_IMPORTED_MODULE_18__["default"],
    'formats/video': _formats_video__WEBPACK_IMPORTED_MODULE_19__["default"],

    'modules/syntax': _modules_syntax__WEBPACK_IMPORTED_MODULE_21__["default"],
    'modules/table': _modules_table__WEBPACK_IMPORTED_MODULE_22__["default"],
    'modules/toolbar': _modules_toolbar__WEBPACK_IMPORTED_MODULE_23__["default"],

    'themes/bubble': _themes_bubble__WEBPACK_IMPORTED_MODULE_29__["default"],
    'themes/snow': _themes_snow__WEBPACK_IMPORTED_MODULE_30__["default"],

    'ui/icons': _ui_icons__WEBPACK_IMPORTED_MODULE_24__["default"],
    'ui/picker': _ui_picker__WEBPACK_IMPORTED_MODULE_25__["default"],
    'ui/icon-picker': _ui_icon_picker__WEBPACK_IMPORTED_MODULE_27__["default"],
    'ui/color-picker': _ui_color_picker__WEBPACK_IMPORTED_MODULE_26__["default"],
    'ui/tooltip': _ui_tooltip__WEBPACK_IMPORTED_MODULE_28__["default"],
  },
  true,
);

if (  true && module && typeof module.exports === "object" ) {
    module.exports = _core__WEBPACK_IMPORTED_MODULE_0__["default"];
} else {
    if ( typeof define === "function" && __webpack_require__(/*! !webpack amd options */ "../../../../../../Program Files/nodejs/node_modules/webpack/buildin/amd-options.js") ) {
        define( "Quill", [], function () { return jQuery; } );
    }
}

if ( typeof window === "object" && typeof window.document === "object" ) {
    window.Quill = window.Quill = _core__WEBPACK_IMPORTED_MODULE_0__["default"];
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../Program Files/nodejs/node_modules/webpack/buildin/harmony-module.js */ "../../../../../../Program Files/nodejs/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./themes/base.js":
/*!************************!*\
  !*** ./themes/base.js ***!
  \************************/
/*! exports provided: BaseTooltip, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseTooltip", function() { return BaseTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseTheme; });
/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! extend */ "./node_modules/extend/index.js");
/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/emitter */ "./core/emitter.js");
/* harmony import */ var _core_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/theme */ "./core/theme.js");
/* harmony import */ var _ui_color_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/color-picker */ "./ui/color-picker.js");
/* harmony import */ var _ui_icon_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/icon-picker */ "./ui/icon-picker.js");
/* harmony import */ var _ui_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/picker */ "./ui/picker.js");
/* harmony import */ var _ui_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/tooltip */ "./ui/tooltip.js");








const ALIGNS = [false, 'center', 'right', 'justify'];

const COLORS = [
  '#000000',
  '#e60000',
  '#ff9900',
  '#ffff00',
  '#008a00',
  '#0066cc',
  '#9933ff',
  '#ffffff',
  '#facccc',
  '#ffebcc',
  '#ffffcc',
  '#cce8cc',
  '#cce0f5',
  '#ebd6ff',
  '#bbbbbb',
  '#f06666',
  '#ffc266',
  '#ffff66',
  '#66b966',
  '#66a3e0',
  '#c285ff',
  '#888888',
  '#a10000',
  '#b26b00',
  '#b2b200',
  '#006100',
  '#0047b2',
  '#6b24b2',
  '#444444',
  '#5c0000',
  '#663d00',
  '#666600',
  '#003700',
  '#002966',
  '#3d1466',
];

const FONTS = [false, 'serif', 'monospace'];

const HEADERS = ['1', '2', '3', false];

const SIZES = ['small', false, 'large', 'huge'];

class BaseTheme extends _core_theme__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(quill, options) {
    super(quill, options);
    const listener = e => {
      if (!document.body.contains(quill.root)) {
        document.body.removeEventListener('click', listener);
        return;
      }
      if (
        this.tooltip != null &&
        !this.tooltip.root.contains(e.target) &&
        document.activeElement !== this.tooltip.textbox &&
        !this.quill.hasFocus()
      ) {
        this.tooltip.hide();
      }
      if (this.pickers != null) {
        this.pickers.forEach(picker => {
          if (!picker.container.contains(e.target)) {
            picker.close();
          }
        });
      }
    };
    quill.emitter.listenDOM('click', document.body, listener);
  }

  addModule(name) {
    const module = super.addModule(name);
    if (name === 'toolbar') {
      this.extendToolbar(module);
    }
    return module;
  }

  buildButtons(buttons, icons) {
    Array.from(buttons).forEach(button => {
      const className = button.getAttribute('class') || '';
      className.split(/\s+/).forEach(name => {
        if (!name.startsWith('ql-')) return;
        name = name.slice('ql-'.length);
        if (icons[name] == null) return;
        if (name === 'direction') {
          button.innerHTML = icons[name][''] + icons[name].rtl;
        } else if (typeof icons[name] === 'string') {
          button.innerHTML = icons[name];
        } else {
          const value = button.value || '';
          if (value != null && icons[name][value]) {
            button.innerHTML = icons[name][value];
          }
        }
      });
    });
  }

  buildPickers(selects, icons) {
    this.pickers = Array.from(selects).map(select => {
      if (select.classList.contains('ql-align')) {
        if (select.querySelector('option') == null) {
          fillSelect(select, ALIGNS);
        }
        return new _ui_icon_picker__WEBPACK_IMPORTED_MODULE_4__["default"](select, icons.align);
      }
      if (
        select.classList.contains('ql-background') ||
        select.classList.contains('ql-color')
      ) {
        const format = select.classList.contains('ql-background')
          ? 'background'
          : 'color';
        if (select.querySelector('option') == null) {
          fillSelect(
            select,
            COLORS,
            format === 'background' ? '#ffffff' : '#000000',
          );
        }
        return new _ui_color_picker__WEBPACK_IMPORTED_MODULE_3__["default"](select, icons[format]);
      }
      if (select.querySelector('option') == null) {
        if (select.classList.contains('ql-font')) {
          fillSelect(select, FONTS);
        } else if (select.classList.contains('ql-header')) {
          fillSelect(select, HEADERS);
        } else if (select.classList.contains('ql-size')) {
          fillSelect(select, SIZES);
        }
      }
      return new _ui_picker__WEBPACK_IMPORTED_MODULE_5__["default"](select);
    });
    const update = () => {
      this.pickers.forEach(picker => {
        picker.update();
      });
    };
    this.quill.on(_core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].events.EDITOR_CHANGE, update);
  }
}
BaseTheme.DEFAULTS = extend__WEBPACK_IMPORTED_MODULE_0___default()(true, {}, _core_theme__WEBPACK_IMPORTED_MODULE_2__["default"].DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        formula() {
          this.quill.theme.tooltip.edit('formula');
        },
        image() {
          let fileInput = this.container.querySelector(
            'input.ql-image[type=file]',
          );
          if (fileInput == null) {
            fileInput = document.createElement('input');
            fileInput.setAttribute('type', 'file');
            fileInput.setAttribute(
              'accept',
              this.quill.uploader.options.mimetypes.join(', '),
            );
            fileInput.classList.add('ql-image');
            fileInput.addEventListener('change', () => {
              const range = this.quill.getSelection(true);
              this.quill.uploader.upload(range, fileInput.files);
              fileInput.value = '';
            });
            this.container.appendChild(fileInput);
          }
          fileInput.click();
        },
        video() {
          this.quill.theme.tooltip.edit('video');
        },
      },
    },
  },
});

class BaseTooltip extends _ui_tooltip__WEBPACK_IMPORTED_MODULE_6__["default"] {
  constructor(quill, boundsContainer) {
    super(quill, boundsContainer);
    this.textbox = this.root.querySelector('input[type="text"]');
    this.listen();
  }

  listen() {
    this.textbox.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        this.save();
        event.preventDefault();
      } else if (event.key === 'Escape') {
        this.cancel();
        event.preventDefault();
      }
    });
  }

  cancel() {
    this.hide();
  }

  edit(mode = 'link', preview = null) {
    this.root.classList.remove('ql-hidden');
    this.root.classList.add('ql-editing');
    if (preview != null) {
      this.textbox.value = preview;
    } else if (mode !== this.root.getAttribute('data-mode')) {
      this.textbox.value = '';
    }
    this.position(this.quill.getBounds(this.quill.selection.savedRange));
    this.textbox.select();
    this.textbox.setAttribute(
      'placeholder',
      this.textbox.getAttribute(`data-${mode}`) || '',
    );
    this.root.setAttribute('data-mode', mode);
  }

  restoreFocus() {
    const { scrollTop } = this.quill.scrollingContainer;
    this.quill.focus();
    this.quill.scrollingContainer.scrollTop = scrollTop;
  }

  save() {
    let { value } = this.textbox;
    switch (this.root.getAttribute('data-mode')) {
      case 'link': {
        const { scrollTop } = this.quill.root;
        if (this.linkRange) {
          this.quill.formatText(
            this.linkRange,
            'link',
            value,
            _core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER,
          );
          delete this.linkRange;
        } else {
          this.restoreFocus();
          this.quill.format('link', value, _core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER);
        }
        this.quill.root.scrollTop = scrollTop;
        break;
      }
      case 'video': {
        value = extractVideoUrl(value);
      } // eslint-disable-next-line no-fallthrough
      case 'formula': {
        if (!value) break;
        const range = this.quill.getSelection(true);
        if (range != null) {
          const index = range.index + range.length;
          this.quill.insertEmbed(
            index,
            this.root.getAttribute('data-mode'),
            value,
            _core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER,
          );
          if (this.root.getAttribute('data-mode') === 'formula') {
            this.quill.insertText(index + 1, ' ', _core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER);
          }
          this.quill.setSelection(index + 2, _core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER);
        }
        break;
      }
      default:
    }
    this.textbox.value = '';
    this.hide();
  }
}

function extractVideoUrl(url) {
  let match =
    url.match(
      /^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/,
    ) ||
    url.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (match) {
    return `${match[1] || 'https'}://www.youtube.com/embed/${
      match[2]
    }?showinfo=0`;
  }
  // eslint-disable-next-line no-cond-assign
  if ((match = url.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/))) {
    return `${match[1] || 'https'}://player.vimeo.com/video/${match[2]}/`;
  }
  return url;
}

function fillSelect(select, values, defaultValue = false) {
  values.forEach(value => {
    const option = document.createElement('option');
    if (value === defaultValue) {
      option.setAttribute('selected', 'selected');
    } else {
      option.setAttribute('value', value);
    }
    select.appendChild(option);
  });
}




/***/ }),

/***/ "./themes/bubble.js":
/*!**************************!*\
  !*** ./themes/bubble.js ***!
  \**************************/
/*! exports provided: BubbleTooltip, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BubbleTooltip", function() { return BubbleTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BubbleTheme; });
/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! extend */ "./node_modules/extend/index.js");
/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/emitter */ "./core/emitter.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./themes/base.js");
/* harmony import */ var _core_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/selection */ "./core/selection.js");
/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/icons */ "./ui/icons.js");






const TOOLBAR_CONFIG = [
  ['bold', 'italic', 'link'],
  [{ header: 1 }, { header: 2 }, 'blockquote'],
];

class BubbleTooltip extends _base__WEBPACK_IMPORTED_MODULE_2__["BaseTooltip"] {
  constructor(quill, bounds) {
    super(quill, bounds);
    this.quill.on(
      _core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].events.EDITOR_CHANGE,
      (type, range, oldRange, source) => {
        if (type !== _core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].events.SELECTION_CHANGE) return;
        if (
          range != null &&
          range.length > 0 &&
          source === _core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER
        ) {
          this.show();
          // Lock our width so we will expand beyond our offsetParent boundaries
          this.root.style.left = '0px';
          this.root.style.width = '';
          this.root.style.width = `${this.root.offsetWidth}px`;
          const lines = this.quill.getLines(range.index, range.length);
          if (lines.length === 1) {
            this.position(this.quill.getBounds(range));
          } else {
            const lastLine = lines[lines.length - 1];
            const index = this.quill.getIndex(lastLine);
            const length = Math.min(
              lastLine.length() - 1,
              range.index + range.length - index,
            );
            const indexBounds = this.quill.getBounds(new _core_selection__WEBPACK_IMPORTED_MODULE_3__["Range"](index, length));
            this.position(indexBounds);
          }
        } else if (
          document.activeElement !== this.textbox &&
          this.quill.hasFocus()
        ) {
          this.hide();
        }
      },
    );
  }

  listen() {
    super.listen();
    this.root.querySelector('.ql-close').addEventListener('click', () => {
      this.root.classList.remove('ql-editing');
    });
    this.quill.on(_core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].events.SCROLL_OPTIMIZE, () => {
      // Let selection be restored by toolbar handlers before repositioning
      setTimeout(() => {
        if (this.root.classList.contains('ql-hidden')) return;
        const range = this.quill.getSelection();
        if (range != null) {
          this.position(this.quill.getBounds(range));
        }
      }, 1);
    });
  }

  cancel() {
    this.show();
  }

  position(reference) {
    const shift = super.position(reference);
    const arrow = this.root.querySelector('.ql-tooltip-arrow');
    arrow.style.marginLeft = '';
    if (shift !== 0) {
      arrow.style.marginLeft = `${-1 * shift - arrow.offsetWidth / 2}px`;
    }
    return shift;
  }
}
BubbleTooltip.TEMPLATE = [
  '<span class="ql-tooltip-arrow"></span>',
  '<div class="ql-tooltip-editor">',
  '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">',
  '<a class="ql-close"></a>',
  '</div>',
].join('');

class BubbleTheme extends _base__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(quill, options) {
    if (
      options.modules.toolbar != null &&
      options.modules.toolbar.container == null
    ) {
      options.modules.toolbar.container = TOOLBAR_CONFIG;
    }
    super(quill, options);
    this.quill.container.classList.add('ql-bubble');
  }

  extendToolbar(toolbar) {
    this.tooltip = new BubbleTooltip(this.quill, this.options.bounds);
    this.tooltip.root.appendChild(toolbar.container);
    this.buildButtons(toolbar.container.querySelectorAll('button'), _ui_icons__WEBPACK_IMPORTED_MODULE_4__["default"]);
    this.buildPickers(toolbar.container.querySelectorAll('select'), _ui_icons__WEBPACK_IMPORTED_MODULE_4__["default"]);
  }
}
BubbleTheme.DEFAULTS = extend__WEBPACK_IMPORTED_MODULE_0___default()(true, {}, _base__WEBPACK_IMPORTED_MODULE_2__["default"].DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link(value) {
          if (!value) {
            this.quill.format('link', false);
          } else {
            this.quill.theme.tooltip.edit();
          }
        },
      },
    },
  },
});




/***/ }),

/***/ "./themes/snow.js":
/*!************************!*\
  !*** ./themes/snow.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! extend */ "./node_modules/extend/index.js");
/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/emitter */ "./core/emitter.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./themes/base.js");
/* harmony import */ var _formats_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../formats/link */ "./formats/link.js");
/* harmony import */ var _core_selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/selection */ "./core/selection.js");
/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/icons */ "./ui/icons.js");







const TOOLBAR_CONFIG = [
  [{ header: ['1', '2', '3', false] }],
  ['bold', 'italic', 'underline', 'link'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  ['clean'],
];

class SnowTooltip extends _base__WEBPACK_IMPORTED_MODULE_2__["BaseTooltip"] {
  constructor(quill, bounds) {
    super(quill, bounds);
    this.preview = this.root.querySelector('a.ql-preview');
  }

  listen() {
    super.listen();
    this.root.querySelector('a.ql-action').addEventListener('click', event => {
      if (this.root.classList.contains('ql-editing')) {
        this.save();
      } else {
        this.edit('link', this.preview.textContent);
      }
      event.preventDefault();
    });
    this.root.querySelector('a.ql-remove').addEventListener('click', event => {
      if (this.linkRange != null) {
        const range = this.linkRange;
        this.restoreFocus();
        this.quill.formatText(range, 'link', false, _core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER);
        delete this.linkRange;
      }
      event.preventDefault();
      this.hide();
    });
    this.quill.on(
      _core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].events.SELECTION_CHANGE,
      (range, oldRange, source) => {
        if (range == null) return;
        if (range.length === 0 && source === _core_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].sources.USER) {
          const [link, offset] = this.quill.scroll.descendant(
            _formats_link__WEBPACK_IMPORTED_MODULE_3__["default"],
            range.index,
          );
          if (link != null) {
            this.linkRange = new _core_selection__WEBPACK_IMPORTED_MODULE_4__["Range"](range.index - offset, link.length());
            const preview = _formats_link__WEBPACK_IMPORTED_MODULE_3__["default"].formats(link.domNode);
            this.preview.textContent = preview;
            this.preview.setAttribute('href', preview);
            this.show();
            this.position(this.quill.getBounds(this.linkRange));
            return;
          }
        } else {
          delete this.linkRange;
        }
        this.hide();
      },
    );
  }

  show() {
    super.show();
    this.root.removeAttribute('data-mode');
  }
}
SnowTooltip.TEMPLATE = [
  '<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>',
  '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">',
  '<a class="ql-action"></a>',
  '<a class="ql-remove"></a>',
].join('');

class SnowTheme extends _base__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(quill, options) {
    if (
      options.modules.toolbar != null &&
      options.modules.toolbar.container == null
    ) {
      options.modules.toolbar.container = TOOLBAR_CONFIG;
    }
    super(quill, options);
    this.quill.container.classList.add('ql-snow');
  }

  extendToolbar(toolbar) {
    toolbar.container.classList.add('ql-snow');
    this.buildButtons(toolbar.container.querySelectorAll('button'), _ui_icons__WEBPACK_IMPORTED_MODULE_5__["default"]);
    this.buildPickers(toolbar.container.querySelectorAll('select'), _ui_icons__WEBPACK_IMPORTED_MODULE_5__["default"]);
    this.tooltip = new SnowTooltip(this.quill, this.options.bounds);
    if (toolbar.container.querySelector('.ql-link')) {
      this.quill.keyboard.addBinding(
        { key: 'k', shortKey: true },
        (range, context) => {
          toolbar.handlers.link.call(toolbar, !context.format.link);
        },
      );
    }
  }
}
SnowTheme.DEFAULTS = extend__WEBPACK_IMPORTED_MODULE_0___default()(true, {}, _base__WEBPACK_IMPORTED_MODULE_2__["default"].DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link(value) {
          if (value) {
            const range = this.quill.getSelection();
            if (range == null || range.length === 0) return;
            let preview = this.quill.getText(range);
            if (
              /^\S+@\S+\.\S+$/.test(preview) &&
              preview.indexOf('mailto:') !== 0
            ) {
              preview = `mailto:${preview}`;
            }
            const { tooltip } = this.quill.theme;
            tooltip.edit('link', preview);
          } else {
            this.quill.format('link', false);
          }
        },
      },
    },
  },
});

/* harmony default export */ __webpack_exports__["default"] = (SnowTheme);


/***/ }),

/***/ "./ui/color-picker.js":
/*!****************************!*\
  !*** ./ui/color-picker.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./picker */ "./ui/picker.js");


class ColorPicker extends _picker__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(select, label) {
    super(select);
    this.label.innerHTML = label;
    this.container.classList.add('ql-color-picker');
    Array.from(this.container.querySelectorAll('.ql-picker-item'))
      .slice(0, 7)
      .forEach(item => {
        item.classList.add('ql-primary');
      });
  }

  buildItem(option) {
    const item = super.buildItem(option);
    item.style.backgroundColor = option.getAttribute('value') || '';
    return item;
  }

  selectItem(item, trigger) {
    super.selectItem(item, trigger);
    const colorLabel = this.label.querySelector('.ql-color-label');
    const value = item ? item.getAttribute('data-value') || '' : '';
    if (colorLabel) {
      if (colorLabel.tagName === 'line') {
        colorLabel.style.stroke = value;
      } else {
        colorLabel.style.fill = value;
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (ColorPicker);


/***/ }),

/***/ "./ui/icon-picker.js":
/*!***************************!*\
  !*** ./ui/icon-picker.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./picker */ "./ui/picker.js");


class IconPicker extends _picker__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(select, icons) {
    super(select);
    this.container.classList.add('ql-icon-picker');
    Array.from(this.container.querySelectorAll('.ql-picker-item')).forEach(
      item => {
        item.innerHTML = icons[item.getAttribute('data-value') || ''];
      },
    );
    this.defaultItem = this.container.querySelector('.ql-selected');
    this.selectItem(this.defaultItem);
  }

  selectItem(target, trigger) {
    super.selectItem(target, trigger);
    const item = target || this.defaultItem;
    if (this.label.innerHTML === item.innerHTML) return;
    this.label.innerHTML = item.innerHTML;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (IconPicker);


/***/ }),

/***/ "./ui/icons.js":
/*!*********************!*\
  !*** ./ui/icons.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_icons_align_left_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/align-left.svg */ "./assets/icons/align-left.svg");
/* harmony import */ var _assets_icons_align_left_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_align_left_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_icons_align_center_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/align-center.svg */ "./assets/icons/align-center.svg");
/* harmony import */ var _assets_icons_align_center_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_align_center_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_icons_align_right_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/align-right.svg */ "./assets/icons/align-right.svg");
/* harmony import */ var _assets_icons_align_right_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_align_right_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_icons_align_justify_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/align-justify.svg */ "./assets/icons/align-justify.svg");
/* harmony import */ var _assets_icons_align_justify_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_align_justify_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_icons_background_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/background.svg */ "./assets/icons/background.svg");
/* harmony import */ var _assets_icons_background_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_background_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_icons_blockquote_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/blockquote.svg */ "./assets/icons/blockquote.svg");
/* harmony import */ var _assets_icons_blockquote_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_blockquote_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_icons_bold_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icons/bold.svg */ "./assets/icons/bold.svg");
/* harmony import */ var _assets_icons_bold_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_bold_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_icons_clean_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/icons/clean.svg */ "./assets/icons/clean.svg");
/* harmony import */ var _assets_icons_clean_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_clean_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_icons_code_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/icons/code.svg */ "./assets/icons/code.svg");
/* harmony import */ var _assets_icons_code_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_code_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_icons_color_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/icons/color.svg */ "./assets/icons/color.svg");
/* harmony import */ var _assets_icons_color_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_color_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_icons_direction_ltr_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/icons/direction-ltr.svg */ "./assets/icons/direction-ltr.svg");
/* harmony import */ var _assets_icons_direction_ltr_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_direction_ltr_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_icons_direction_rtl_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/icons/direction-rtl.svg */ "./assets/icons/direction-rtl.svg");
/* harmony import */ var _assets_icons_direction_rtl_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_direction_rtl_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_icons_formula_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/icons/formula.svg */ "./assets/icons/formula.svg");
/* harmony import */ var _assets_icons_formula_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_formula_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_icons_header_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/icons/header.svg */ "./assets/icons/header.svg");
/* harmony import */ var _assets_icons_header_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_header_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_icons_header_2_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/icons/header-2.svg */ "./assets/icons/header-2.svg");
/* harmony import */ var _assets_icons_header_2_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_header_2_svg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_icons_italic_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/icons/italic.svg */ "./assets/icons/italic.svg");
/* harmony import */ var _assets_icons_italic_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_italic_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_icons_image_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/icons/image.svg */ "./assets/icons/image.svg");
/* harmony import */ var _assets_icons_image_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_image_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_icons_indent_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/icons/indent.svg */ "./assets/icons/indent.svg");
/* harmony import */ var _assets_icons_indent_svg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_indent_svg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _assets_icons_outdent_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/icons/outdent.svg */ "./assets/icons/outdent.svg");
/* harmony import */ var _assets_icons_outdent_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_outdent_svg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _assets_icons_link_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/icons/link.svg */ "./assets/icons/link.svg");
/* harmony import */ var _assets_icons_link_svg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_link_svg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _assets_icons_list_bullet_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/icons/list-bullet.svg */ "./assets/icons/list-bullet.svg");
/* harmony import */ var _assets_icons_list_bullet_svg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_list_bullet_svg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _assets_icons_list_check_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../assets/icons/list-check.svg */ "./assets/icons/list-check.svg");
/* harmony import */ var _assets_icons_list_check_svg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_list_check_svg__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _assets_icons_list_ordered_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../assets/icons/list-ordered.svg */ "./assets/icons/list-ordered.svg");
/* harmony import */ var _assets_icons_list_ordered_svg__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_list_ordered_svg__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _assets_icons_subscript_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../assets/icons/subscript.svg */ "./assets/icons/subscript.svg");
/* harmony import */ var _assets_icons_subscript_svg__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_subscript_svg__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _assets_icons_superscript_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../assets/icons/superscript.svg */ "./assets/icons/superscript.svg");
/* harmony import */ var _assets_icons_superscript_svg__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_superscript_svg__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _assets_icons_strike_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../assets/icons/strike.svg */ "./assets/icons/strike.svg");
/* harmony import */ var _assets_icons_strike_svg__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_strike_svg__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _assets_icons_table_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../assets/icons/table.svg */ "./assets/icons/table.svg");
/* harmony import */ var _assets_icons_table_svg__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_table_svg__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _assets_icons_underline_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../assets/icons/underline.svg */ "./assets/icons/underline.svg");
/* harmony import */ var _assets_icons_underline_svg__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_underline_svg__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _assets_icons_video_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../assets/icons/video.svg */ "./assets/icons/video.svg");
/* harmony import */ var _assets_icons_video_svg__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_video_svg__WEBPACK_IMPORTED_MODULE_28__);






























/* harmony default export */ __webpack_exports__["default"] = ({
  align: {
    '': _assets_icons_align_left_svg__WEBPACK_IMPORTED_MODULE_0___default.a,
    center: _assets_icons_align_center_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
    right: _assets_icons_align_right_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    justify: _assets_icons_align_justify_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
  },
  background: _assets_icons_background_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
  blockquote: _assets_icons_blockquote_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
  bold: _assets_icons_bold_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  clean: _assets_icons_clean_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
  code: _assets_icons_code_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
  'code-block': _assets_icons_code_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
  color: _assets_icons_color_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
  direction: {
    '': _assets_icons_direction_ltr_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
    rtl: _assets_icons_direction_rtl_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
  },
  formula: _assets_icons_formula_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
  header: {
    '1': _assets_icons_header_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
    '2': _assets_icons_header_2_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
  },
  italic: _assets_icons_italic_svg__WEBPACK_IMPORTED_MODULE_15___default.a,
  image: _assets_icons_image_svg__WEBPACK_IMPORTED_MODULE_16___default.a,
  indent: {
    '+1': _assets_icons_indent_svg__WEBPACK_IMPORTED_MODULE_17___default.a,
    '-1': _assets_icons_outdent_svg__WEBPACK_IMPORTED_MODULE_18___default.a,
  },
  link: _assets_icons_link_svg__WEBPACK_IMPORTED_MODULE_19___default.a,
  list: {
    bullet: _assets_icons_list_bullet_svg__WEBPACK_IMPORTED_MODULE_20___default.a,
    check: _assets_icons_list_check_svg__WEBPACK_IMPORTED_MODULE_21___default.a,
    ordered: _assets_icons_list_ordered_svg__WEBPACK_IMPORTED_MODULE_22___default.a,
  },
  script: {
    sub: _assets_icons_subscript_svg__WEBPACK_IMPORTED_MODULE_23___default.a,
    super: _assets_icons_superscript_svg__WEBPACK_IMPORTED_MODULE_24___default.a,
  },
  strike: _assets_icons_strike_svg__WEBPACK_IMPORTED_MODULE_25___default.a,
  table: _assets_icons_table_svg__WEBPACK_IMPORTED_MODULE_26___default.a,
  underline: _assets_icons_underline_svg__WEBPACK_IMPORTED_MODULE_27___default.a,
  video: _assets_icons_video_svg__WEBPACK_IMPORTED_MODULE_28___default.a,
});


/***/ }),

/***/ "./ui/picker.js":
/*!**********************!*\
  !*** ./ui/picker.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_icons_dropdown_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/dropdown.svg */ "./assets/icons/dropdown.svg");
/* harmony import */ var _assets_icons_dropdown_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_dropdown_svg__WEBPACK_IMPORTED_MODULE_0__);


let optionsCounter = 0;

function toggleAriaAttribute(element, attribute) {
  element.setAttribute(
    attribute,
    !(element.getAttribute(attribute) === 'true'),
  );
}

class Picker {
  constructor(select) {
    this.select = select;
    this.container = document.createElement('span');
    this.buildPicker();
    this.select.style.display = 'none';
    this.select.parentNode.insertBefore(this.container, this.select);

    this.label.addEventListener('mousedown', () => {
      this.togglePicker();
    });
    this.label.addEventListener('keydown', event => {
      switch (event.key) {
        case 'Enter':
          this.togglePicker();
          break;
        case 'Escape':
          this.escape();
          event.preventDefault();
          break;
        default:
      }
    });
    this.select.addEventListener('change', this.update.bind(this));
  }

  togglePicker() {
    this.container.classList.toggle('ql-expanded');
    // Toggle aria-expanded and aria-hidden to make the picker accessible
    toggleAriaAttribute(this.label, 'aria-expanded');
    toggleAriaAttribute(this.options, 'aria-hidden');
  }

  buildItem(option) {
    const item = document.createElement('span');
    item.tabIndex = '0';
    item.setAttribute('role', 'button');
    item.classList.add('ql-picker-item');
    if (option.hasAttribute('value')) {
      item.setAttribute('data-value', option.getAttribute('value'));
    }
    if (option.textContent) {
      item.setAttribute('data-label', option.textContent);
    }
    item.addEventListener('click', () => {
      this.selectItem(item, true);
    });
    item.addEventListener('keydown', event => {
      switch (event.key) {
        case 'Enter':
          this.selectItem(item, true);
          event.preventDefault();
          break;
        case 'Escape':
          this.escape();
          event.preventDefault();
          break;
        default:
      }
    });

    return item;
  }

  buildLabel() {
    const label = document.createElement('span');
    label.classList.add('ql-picker-label');
    label.innerHTML = _assets_icons_dropdown_svg__WEBPACK_IMPORTED_MODULE_0___default.a;
    label.tabIndex = '0';
    label.setAttribute('role', 'button');
    label.setAttribute('aria-expanded', 'false');
    this.container.appendChild(label);
    return label;
  }

  buildOptions() {
    const options = document.createElement('span');
    options.classList.add('ql-picker-options');

    // Don't want screen readers to read this until options are visible
    options.setAttribute('aria-hidden', 'true');
    options.tabIndex = '-1';

    // Need a unique id for aria-controls
    options.id = `ql-picker-options-${optionsCounter}`;
    optionsCounter += 1;
    this.label.setAttribute('aria-controls', options.id);

    this.options = options;

    Array.from(this.select.options).forEach(option => {
      const item = this.buildItem(option);
      options.appendChild(item);
      if (option.selected === true) {
        this.selectItem(item);
      }
    });
    this.container.appendChild(options);
  }

  buildPicker() {
    Array.from(this.select.attributes).forEach(item => {
      this.container.setAttribute(item.name, item.value);
    });
    this.container.classList.add('ql-picker');
    this.label = this.buildLabel();
    this.buildOptions();
  }

  escape() {
    // Close menu and return focus to trigger label
    this.close();
    // Need setTimeout for accessibility to ensure that the browser executes
    // focus on the next process thread and after any DOM content changes
    setTimeout(() => this.label.focus(), 1);
  }

  close() {
    this.container.classList.remove('ql-expanded');
    this.label.setAttribute('aria-expanded', 'false');
    this.options.setAttribute('aria-hidden', 'true');
  }

  selectItem(item, trigger = false) {
    const selected = this.container.querySelector('.ql-selected');
    if (item === selected) return;
    if (selected != null) {
      selected.classList.remove('ql-selected');
    }
    if (item == null) return;
    item.classList.add('ql-selected');
    this.select.selectedIndex = Array.from(item.parentNode.children).indexOf(
      item,
    );
    if (item.hasAttribute('data-value')) {
      this.label.setAttribute('data-value', item.getAttribute('data-value'));
    } else {
      this.label.removeAttribute('data-value');
    }
    if (item.hasAttribute('data-label')) {
      this.label.setAttribute('data-label', item.getAttribute('data-label'));
    } else {
      this.label.removeAttribute('data-label');
    }
    if (trigger) {
      this.select.dispatchEvent(new Event('change'));
      this.close();
    }
  }

  update() {
    let option;
    if (this.select.selectedIndex > -1) {
      const item = this.container.querySelector('.ql-picker-options').children[
        this.select.selectedIndex
      ];
      option = this.select.options[this.select.selectedIndex];
      this.selectItem(item);
    } else {
      this.selectItem(null);
    }
    const isActive =
      option != null &&
      option !== this.select.querySelector('option[selected]');
    this.label.classList.toggle('ql-active', isActive);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Picker);


/***/ }),

/***/ "./ui/tooltip.js":
/*!***********************!*\
  !*** ./ui/tooltip.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Tooltip {
  constructor(quill, boundsContainer) {
    this.quill = quill;
    this.boundsContainer = boundsContainer || document.body;
    this.root = quill.addContainer('ql-tooltip');
    this.root.innerHTML = this.constructor.TEMPLATE;
    if (this.quill.root === this.quill.scrollingContainer) {
      this.quill.root.addEventListener('scroll', () => {
        this.root.style.marginTop = `${-1 * this.quill.root.scrollTop}px`;
      });
    }
    this.hide();
  }

  hide() {
    this.root.classList.add('ql-hidden');
  }

  position(reference) {
    const left =
      reference.left + reference.width / 2 - this.root.offsetWidth / 2;
    // root.scrollTop should be 0 if scrollContainer !== root
    const top = reference.bottom + this.quill.root.scrollTop;
    this.root.style.left = `${left}px`;
    this.root.style.top = `${top}px`;
    this.root.classList.remove('ql-flip');
    const containerBounds = this.boundsContainer.getBoundingClientRect();
    const rootBounds = this.root.getBoundingClientRect();
    let shift = 0;
    if (rootBounds.right > containerBounds.right) {
      shift = containerBounds.right - rootBounds.right;
      this.root.style.left = `${left + shift}px`;
    }
    if (rootBounds.left < containerBounds.left) {
      shift = containerBounds.left - rootBounds.left;
      this.root.style.left = `${left + shift}px`;
    }
    if (rootBounds.bottom > containerBounds.bottom) {
      const height = rootBounds.bottom - rootBounds.top;
      const verticalShift = reference.bottom - reference.top + height;
      this.root.style.top = `${top - verticalShift}px`;
      this.root.classList.add('ql-flip');
    }
    return shift;
  }

  show() {
    this.root.classList.remove('ql-editing');
    this.root.classList.remove('ql-hidden');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Tooltip);


/***/ })

/******/ });
//# sourceMappingURL=quill.js.map