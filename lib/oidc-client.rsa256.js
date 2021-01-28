(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Log = __webpack_require__(/*! ./src/Log.js */ "./src/Log.js");

var _OidcClient = __webpack_require__(/*! ./src/OidcClient.js */ "./src/OidcClient.js");

var _OidcClientSettings = __webpack_require__(/*! ./src/OidcClientSettings.js */ "./src/OidcClientSettings.js");

var _WebStorageStateStore = __webpack_require__(/*! ./src/WebStorageStateStore.js */ "./src/WebStorageStateStore.js");

var _InMemoryWebStorage = __webpack_require__(/*! ./src/InMemoryWebStorage.js */ "./src/InMemoryWebStorage.js");

var _UserManager = __webpack_require__(/*! ./src/UserManager.js */ "./src/UserManager.js");

var _AccessTokenEvents = __webpack_require__(/*! ./src/AccessTokenEvents.js */ "./src/AccessTokenEvents.js");

var _MetadataService = __webpack_require__(/*! ./src/MetadataService.js */ "./src/MetadataService.js");

var _CordovaPopupNavigator = __webpack_require__(/*! ./src/CordovaPopupNavigator.js */ "./src/CordovaPopupNavigator.js");

var _CordovaIFrameNavigator = __webpack_require__(/*! ./src/CordovaIFrameNavigator.js */ "./src/CordovaIFrameNavigator.js");

var _CheckSessionIFrame = __webpack_require__(/*! ./src/CheckSessionIFrame.js */ "./src/CheckSessionIFrame.js");

var _TokenRevocationClient = __webpack_require__(/*! ./src/TokenRevocationClient.js */ "./src/TokenRevocationClient.js");

var _SessionMonitor = __webpack_require__(/*! ./src/SessionMonitor.js */ "./src/SessionMonitor.js");

var _Global = __webpack_require__(/*! ./src/Global.js */ "./src/Global.js");

var _User = __webpack_require__(/*! ./src/User.js */ "./src/User.js");

var _version = __webpack_require__(/*! ./version.js */ "./version.js");

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

exports.default = {
    Version: _version.Version,
    Log: _Log.Log,
    OidcClient: _OidcClient.OidcClient,
    OidcClientSettings: _OidcClientSettings.OidcClientSettings,
    WebStorageStateStore: _WebStorageStateStore.WebStorageStateStore,
    InMemoryWebStorage: _InMemoryWebStorage.InMemoryWebStorage,
    UserManager: _UserManager.UserManager,
    AccessTokenEvents: _AccessTokenEvents.AccessTokenEvents,
    MetadataService: _MetadataService.MetadataService,
    CordovaPopupNavigator: _CordovaPopupNavigator.CordovaPopupNavigator,
    CordovaIFrameNavigator: _CordovaIFrameNavigator.CordovaIFrameNavigator,
    CheckSessionIFrame: _CheckSessionIFrame.CheckSessionIFrame,
    TokenRevocationClient: _TokenRevocationClient.TokenRevocationClient,
    SessionMonitor: _SessionMonitor.SessionMonitor,
    Global: _Global.Global,
    User: _User.User
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
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

/***/ "./node_modules/crypto-js/core.js":
/*!****************************************!*\
  !*** ./node_modules/crypto-js/core.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory();
	}
	else {}
}(this, function () {

	/**
	 * CryptoJS core components.
	 */
	var CryptoJS = CryptoJS || (function (Math, undefined) {
	    /*
	     * Local polyfil of Object.create
	     */
	    var create = Object.create || (function () {
	        function F() {};

	        return function (obj) {
	            var subtype;

	            F.prototype = obj;

	            subtype = new F();

	            F.prototype = null;

	            return subtype;
	        };
	    }())

	    /**
	     * CryptoJS namespace.
	     */
	    var C = {};

	    /**
	     * Library namespace.
	     */
	    var C_lib = C.lib = {};

	    /**
	     * Base object for prototypal inheritance.
	     */
	    var Base = C_lib.Base = (function () {


	        return {
	            /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */
	            extend: function (overrides) {
	                // Spawn
	                var subtype = create(this);

	                // Augment
	                if (overrides) {
	                    subtype.mixIn(overrides);
	                }

	                // Create default initializer
	                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
	                    subtype.init = function () {
	                        subtype.$super.init.apply(this, arguments);
	                    };
	                }

	                // Initializer's prototype is the subtype object
	                subtype.init.prototype = subtype;

	                // Reference supertype
	                subtype.$super = this;

	                return subtype;
	            },

	            /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */
	            create: function () {
	                var instance = this.extend();
	                instance.init.apply(instance, arguments);

	                return instance;
	            },

	            /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */
	            init: function () {
	            },

	            /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */
	            mixIn: function (properties) {
	                for (var propertyName in properties) {
	                    if (properties.hasOwnProperty(propertyName)) {
	                        this[propertyName] = properties[propertyName];
	                    }
	                }

	                // IE won't copy toString using the loop above
	                if (properties.hasOwnProperty('toString')) {
	                    this.toString = properties.toString;
	                }
	            },

	            /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */
	            clone: function () {
	                return this.init.prototype.extend(this);
	            }
	        };
	    }());

	    /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var WordArray = C_lib.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 4;
	            }
	        },

	        /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */
	        toString: function (encoder) {
	            return (encoder || Hex).stringify(this);
	        },

	        /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */
	        concat: function (wordArray) {
	            // Shortcuts
	            var thisWords = this.words;
	            var thatWords = wordArray.words;
	            var thisSigBytes = this.sigBytes;
	            var thatSigBytes = wordArray.sigBytes;

	            // Clamp excess bits
	            this.clamp();

	            // Concat
	            if (thisSigBytes % 4) {
	                // Copy one byte at a time
	                for (var i = 0; i < thatSigBytes; i++) {
	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
	                }
	            } else {
	                // Copy one word at a time
	                for (var i = 0; i < thatSigBytes; i += 4) {
	                    thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
	                }
	            }
	            this.sigBytes += thatSigBytes;

	            // Chainable
	            return this;
	        },

	        /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */
	        clamp: function () {
	            // Shortcuts
	            var words = this.words;
	            var sigBytes = this.sigBytes;

	            // Clamp
	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
	            words.length = Math.ceil(sigBytes / 4);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone.words = this.words.slice(0);

	            return clone;
	        },

	        /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */
	        random: function (nBytes) {
	            var words = [];

	            var r = (function (m_w) {
	                var m_w = m_w;
	                var m_z = 0x3ade68b1;
	                var mask = 0xffffffff;

	                return function () {
	                    m_z = (0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10)) & mask;
	                    m_w = (0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10)) & mask;
	                    var result = ((m_z << 0x10) + m_w) & mask;
	                    result /= 0x100000000;
	                    result += 0.5;
	                    return result * (Math.random() > .5 ? 1 : -1);
	                }
	            });

	            for (var i = 0, rcache; i < nBytes; i += 4) {
	                var _r = r((rcache || Math.random()) * 0x100000000);

	                rcache = _r() * 0x3ade67b7;
	                words.push((_r() * 0x100000000) | 0);
	            }

	            return new WordArray.init(words, nBytes);
	        }
	    });

	    /**
	     * Encoder namespace.
	     */
	    var C_enc = C.enc = {};

	    /**
	     * Hex encoding strategy.
	     */
	    var Hex = C_enc.Hex = {
	        /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var hexChars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                hexChars.push((bite >>> 4).toString(16));
	                hexChars.push((bite & 0x0f).toString(16));
	            }

	            return hexChars.join('');
	        },

	        /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */
	        parse: function (hexStr) {
	            // Shortcut
	            var hexStrLength = hexStr.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < hexStrLength; i += 2) {
	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
	            }

	            return new WordArray.init(words, hexStrLength / 2);
	        }
	    };

	    /**
	     * Latin1 encoding strategy.
	     */
	    var Latin1 = C_enc.Latin1 = {
	        /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var latin1Chars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                latin1Chars.push(String.fromCharCode(bite));
	            }

	            return latin1Chars.join('');
	        },

	        /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */
	        parse: function (latin1Str) {
	            // Shortcut
	            var latin1StrLength = latin1Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < latin1StrLength; i++) {
	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
	            }

	            return new WordArray.init(words, latin1StrLength);
	        }
	    };

	    /**
	     * UTF-8 encoding strategy.
	     */
	    var Utf8 = C_enc.Utf8 = {
	        /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            try {
	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
	            } catch (e) {
	                throw new Error('Malformed UTF-8 data');
	            }
	        },

	        /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */
	        parse: function (utf8Str) {
	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
	        }
	    };

	    /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
	        /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */
	        reset: function () {
	            // Initial values
	            this._data = new WordArray.init();
	            this._nDataBytes = 0;
	        },

	        /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */
	        _append: function (data) {
	            // Convert string to WordArray, else assume WordArray already
	            if (typeof data == 'string') {
	                data = Utf8.parse(data);
	            }

	            // Append
	            this._data.concat(data);
	            this._nDataBytes += data.sigBytes;
	        },

	        /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */
	        _process: function (doFlush) {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var dataSigBytes = data.sigBytes;
	            var blockSize = this.blockSize;
	            var blockSizeBytes = blockSize * 4;

	            // Count blocks ready
	            var nBlocksReady = dataSigBytes / blockSizeBytes;
	            if (doFlush) {
	                // Round up to include partial blocks
	                nBlocksReady = Math.ceil(nBlocksReady);
	            } else {
	                // Round down to include only full blocks,
	                // less the number of blocks that must remain in the buffer
	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
	            }

	            // Count words ready
	            var nWordsReady = nBlocksReady * blockSize;

	            // Count bytes ready
	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

	            // Process blocks
	            if (nWordsReady) {
	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
	                    // Perform concrete-algorithm logic
	                    this._doProcessBlock(dataWords, offset);
	                }

	                // Remove processed words
	                var processedWords = dataWords.splice(0, nWordsReady);
	                data.sigBytes -= nBytesReady;
	            }

	            // Return processed words
	            return new WordArray.init(processedWords, nBytesReady);
	        },

	        /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone._data = this._data.clone();

	            return clone;
	        },

	        _minBufferSize: 0
	    });

	    /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */
	    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         */
	        cfg: Base.extend(),

	        /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */
	        init: function (cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-hasher logic
	            this._doReset();
	        },

	        /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            // Append
	            this._append(messageUpdate);

	            // Update the hash
	            this._process();

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Final message update
	            if (messageUpdate) {
	                this._append(messageUpdate);
	            }

	            // Perform concrete-hasher logic
	            var hash = this._doFinalize();

	            return hash;
	        },

	        blockSize: 512/32,

	        /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */
	        _createHelper: function (hasher) {
	            return function (message, cfg) {
	                return new hasher.init(cfg).finalize(message);
	            };
	        },

	        /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */
	        _createHmacHelper: function (hasher) {
	            return function (message, key) {
	                return new C_algo.HMAC.init(hasher, key).finalize(message);
	            };
	        }
	    });

	    /**
	     * Algorithm namespace.
	     */
	    var C_algo = C.algo = {};

	    return C;
	}(Math));


	return CryptoJS;

}));

/***/ }),

/***/ "./node_modules/crypto-js/sha256.js":
/*!******************************************!*\
  !*** ./node_modules/crypto-js/sha256.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Initialization and round constants tables
	    var H = [];
	    var K = [];

	    // Compute constants
	    (function () {
	        function isPrime(n) {
	            var sqrtN = Math.sqrt(n);
	            for (var factor = 2; factor <= sqrtN; factor++) {
	                if (!(n % factor)) {
	                    return false;
	                }
	            }

	            return true;
	        }

	        function getFractionalBits(n) {
	            return ((n - (n | 0)) * 0x100000000) | 0;
	        }

	        var n = 2;
	        var nPrime = 0;
	        while (nPrime < 64) {
	            if (isPrime(n)) {
	                if (nPrime < 8) {
	                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
	                }
	                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

	                nPrime++;
	            }

	            n++;
	        }
	    }());

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-256 hash algorithm.
	     */
	    var SHA256 = C_algo.SHA256 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init(H.slice(0));
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];
	            var f = H[5];
	            var g = H[6];
	            var h = H[7];

	            // Computation
	            for (var i = 0; i < 64; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var gamma0x = W[i - 15];
	                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
	                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
	                                   (gamma0x >>> 3);

	                    var gamma1x = W[i - 2];
	                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
	                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
	                                   (gamma1x >>> 10);

	                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
	                }

	                var ch  = (e & f) ^ (~e & g);
	                var maj = (a & b) ^ (a & c) ^ (b & c);

	                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
	                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

	                var t1 = h + sigma1 + ch + K[i] + W[i];
	                var t2 = sigma0 + maj;

	                h = g;
	                g = f;
	                f = e;
	                e = (d + t1) | 0;
	                d = c;
	                c = b;
	                b = a;
	                a = (t1 + t2) | 0;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	            H[5] = (H[5] + f) | 0;
	            H[6] = (H[6] + g) | 0;
	            H[7] = (H[7] + h) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA256('message');
	     *     var hash = CryptoJS.SHA256(wordArray);
	     */
	    C.SHA256 = Hasher._createHelper(SHA256);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA256(message, key);
	     */
	    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
	}(Math));


	return CryptoJS.SHA256;

}));

/***/ }),

/***/ "./node_modules/jsbn/index.js":
/*!************************************!*\
  !*** ./node_modules/jsbn/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(){

    // Copyright (c) 2005  Tom Wu
    // All Rights Reserved.
    // See "LICENSE" for details.

    // Basic JavaScript BN library - subset useful for RSA encryption.

    // Bits per digit
    var dbits;

    // JavaScript engine analysis
    var canary = 0xdeadbeefcafe;
    var j_lm = ((canary&0xffffff)==0xefcafe);

    // (public) Constructor
    function BigInteger(a,b,c) {
      if(a != null)
        if("number" == typeof a) this.fromNumber(a,b,c);
        else if(b == null && "string" != typeof a) this.fromString(a,256);
        else this.fromString(a,b);
    }

    // return new, unset BigInteger
    function nbi() { return new BigInteger(null); }

    // am: Compute w_j += (x*this_i), propagate carries,
    // c is initial carry, returns final carry.
    // c < 3*dvalue, x < 2*dvalue, this_i < dvalue
    // We need to select the fastest one that works in this environment.

    // am1: use a single mult and divide to get the high bits,
    // max digit bits should be 26 because
    // max internal value = 2*dvalue^2-2*dvalue (< 2^53)
    function am1(i,x,w,j,c,n) {
      while(--n >= 0) {
        var v = x*this[i++]+w[j]+c;
        c = Math.floor(v/0x4000000);
        w[j++] = v&0x3ffffff;
      }
      return c;
    }
    // am2 avoids a big mult-and-extract completely.
    // Max digit bits should be <= 30 because we do bitwise ops
    // on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
    function am2(i,x,w,j,c,n) {
      var xl = x&0x7fff, xh = x>>15;
      while(--n >= 0) {
        var l = this[i]&0x7fff;
        var h = this[i++]>>15;
        var m = xh*l+h*xl;
        l = xl*l+((m&0x7fff)<<15)+w[j]+(c&0x3fffffff);
        c = (l>>>30)+(m>>>15)+xh*h+(c>>>30);
        w[j++] = l&0x3fffffff;
      }
      return c;
    }
    // Alternately, set max digit bits to 28 since some
    // browsers slow down when dealing with 32-bit numbers.
    function am3(i,x,w,j,c,n) {
      var xl = x&0x3fff, xh = x>>14;
      while(--n >= 0) {
        var l = this[i]&0x3fff;
        var h = this[i++]>>14;
        var m = xh*l+h*xl;
        l = xl*l+((m&0x3fff)<<14)+w[j]+c;
        c = (l>>28)+(m>>14)+xh*h;
        w[j++] = l&0xfffffff;
      }
      return c;
    }
    var inBrowser = typeof navigator !== "undefined";
    if(inBrowser && j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
      BigInteger.prototype.am = am2;
      dbits = 30;
    }
    else if(inBrowser && j_lm && (navigator.appName != "Netscape")) {
      BigInteger.prototype.am = am1;
      dbits = 26;
    }
    else { // Mozilla/Netscape seems to prefer am3
      BigInteger.prototype.am = am3;
      dbits = 28;
    }

    BigInteger.prototype.DB = dbits;
    BigInteger.prototype.DM = ((1<<dbits)-1);
    BigInteger.prototype.DV = (1<<dbits);

    var BI_FP = 52;
    BigInteger.prototype.FV = Math.pow(2,BI_FP);
    BigInteger.prototype.F1 = BI_FP-dbits;
    BigInteger.prototype.F2 = 2*dbits-BI_FP;

    // Digit conversions
    var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
    var BI_RC = new Array();
    var rr,vv;
    rr = "0".charCodeAt(0);
    for(vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
    rr = "a".charCodeAt(0);
    for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
    rr = "A".charCodeAt(0);
    for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;

    function int2char(n) { return BI_RM.charAt(n); }
    function intAt(s,i) {
      var c = BI_RC[s.charCodeAt(i)];
      return (c==null)?-1:c;
    }

    // (protected) copy this to r
    function bnpCopyTo(r) {
      for(var i = this.t-1; i >= 0; --i) r[i] = this[i];
      r.t = this.t;
      r.s = this.s;
    }

    // (protected) set from integer value x, -DV <= x < DV
    function bnpFromInt(x) {
      this.t = 1;
      this.s = (x<0)?-1:0;
      if(x > 0) this[0] = x;
      else if(x < -1) this[0] = x+this.DV;
      else this.t = 0;
    }

    // return bigint initialized to value
    function nbv(i) { var r = nbi(); r.fromInt(i); return r; }

    // (protected) set from string and radix
    function bnpFromString(s,b) {
      var k;
      if(b == 16) k = 4;
      else if(b == 8) k = 3;
      else if(b == 256) k = 8; // byte array
      else if(b == 2) k = 1;
      else if(b == 32) k = 5;
      else if(b == 4) k = 2;
      else { this.fromRadix(s,b); return; }
      this.t = 0;
      this.s = 0;
      var i = s.length, mi = false, sh = 0;
      while(--i >= 0) {
        var x = (k==8)?s[i]&0xff:intAt(s,i);
        if(x < 0) {
          if(s.charAt(i) == "-") mi = true;
          continue;
        }
        mi = false;
        if(sh == 0)
          this[this.t++] = x;
        else if(sh+k > this.DB) {
          this[this.t-1] |= (x&((1<<(this.DB-sh))-1))<<sh;
          this[this.t++] = (x>>(this.DB-sh));
        }
        else
          this[this.t-1] |= x<<sh;
        sh += k;
        if(sh >= this.DB) sh -= this.DB;
      }
      if(k == 8 && (s[0]&0x80) != 0) {
        this.s = -1;
        if(sh > 0) this[this.t-1] |= ((1<<(this.DB-sh))-1)<<sh;
      }
      this.clamp();
      if(mi) BigInteger.ZERO.subTo(this,this);
    }

    // (protected) clamp off excess high words
    function bnpClamp() {
      var c = this.s&this.DM;
      while(this.t > 0 && this[this.t-1] == c) --this.t;
    }

    // (public) return string representation in given radix
    function bnToString(b) {
      if(this.s < 0) return "-"+this.negate().toString(b);
      var k;
      if(b == 16) k = 4;
      else if(b == 8) k = 3;
      else if(b == 2) k = 1;
      else if(b == 32) k = 5;
      else if(b == 4) k = 2;
      else return this.toRadix(b);
      var km = (1<<k)-1, d, m = false, r = "", i = this.t;
      var p = this.DB-(i*this.DB)%k;
      if(i-- > 0) {
        if(p < this.DB && (d = this[i]>>p) > 0) { m = true; r = int2char(d); }
        while(i >= 0) {
          if(p < k) {
            d = (this[i]&((1<<p)-1))<<(k-p);
            d |= this[--i]>>(p+=this.DB-k);
          }
          else {
            d = (this[i]>>(p-=k))&km;
            if(p <= 0) { p += this.DB; --i; }
          }
          if(d > 0) m = true;
          if(m) r += int2char(d);
        }
      }
      return m?r:"0";
    }

    // (public) -this
    function bnNegate() { var r = nbi(); BigInteger.ZERO.subTo(this,r); return r; }

    // (public) |this|
    function bnAbs() { return (this.s<0)?this.negate():this; }

    // (public) return + if this > a, - if this < a, 0 if equal
    function bnCompareTo(a) {
      var r = this.s-a.s;
      if(r != 0) return r;
      var i = this.t;
      r = i-a.t;
      if(r != 0) return (this.s<0)?-r:r;
      while(--i >= 0) if((r=this[i]-a[i]) != 0) return r;
      return 0;
    }

    // returns bit length of the integer x
    function nbits(x) {
      var r = 1, t;
      if((t=x>>>16) != 0) { x = t; r += 16; }
      if((t=x>>8) != 0) { x = t; r += 8; }
      if((t=x>>4) != 0) { x = t; r += 4; }
      if((t=x>>2) != 0) { x = t; r += 2; }
      if((t=x>>1) != 0) { x = t; r += 1; }
      return r;
    }

    // (public) return the number of bits in "this"
    function bnBitLength() {
      if(this.t <= 0) return 0;
      return this.DB*(this.t-1)+nbits(this[this.t-1]^(this.s&this.DM));
    }

    // (protected) r = this << n*DB
    function bnpDLShiftTo(n,r) {
      var i;
      for(i = this.t-1; i >= 0; --i) r[i+n] = this[i];
      for(i = n-1; i >= 0; --i) r[i] = 0;
      r.t = this.t+n;
      r.s = this.s;
    }

    // (protected) r = this >> n*DB
    function bnpDRShiftTo(n,r) {
      for(var i = n; i < this.t; ++i) r[i-n] = this[i];
      r.t = Math.max(this.t-n,0);
      r.s = this.s;
    }

    // (protected) r = this << n
    function bnpLShiftTo(n,r) {
      var bs = n%this.DB;
      var cbs = this.DB-bs;
      var bm = (1<<cbs)-1;
      var ds = Math.floor(n/this.DB), c = (this.s<<bs)&this.DM, i;
      for(i = this.t-1; i >= 0; --i) {
        r[i+ds+1] = (this[i]>>cbs)|c;
        c = (this[i]&bm)<<bs;
      }
      for(i = ds-1; i >= 0; --i) r[i] = 0;
      r[ds] = c;
      r.t = this.t+ds+1;
      r.s = this.s;
      r.clamp();
    }

    // (protected) r = this >> n
    function bnpRShiftTo(n,r) {
      r.s = this.s;
      var ds = Math.floor(n/this.DB);
      if(ds >= this.t) { r.t = 0; return; }
      var bs = n%this.DB;
      var cbs = this.DB-bs;
      var bm = (1<<bs)-1;
      r[0] = this[ds]>>bs;
      for(var i = ds+1; i < this.t; ++i) {
        r[i-ds-1] |= (this[i]&bm)<<cbs;
        r[i-ds] = this[i]>>bs;
      }
      if(bs > 0) r[this.t-ds-1] |= (this.s&bm)<<cbs;
      r.t = this.t-ds;
      r.clamp();
    }

    // (protected) r = this - a
    function bnpSubTo(a,r) {
      var i = 0, c = 0, m = Math.min(a.t,this.t);
      while(i < m) {
        c += this[i]-a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      if(a.t < this.t) {
        c -= a.s;
        while(i < this.t) {
          c += this[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c += this.s;
      }
      else {
        c += this.s;
        while(i < a.t) {
          c -= a[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c -= a.s;
      }
      r.s = (c<0)?-1:0;
      if(c < -1) r[i++] = this.DV+c;
      else if(c > 0) r[i++] = c;
      r.t = i;
      r.clamp();
    }

    // (protected) r = this * a, r != this,a (HAC 14.12)
    // "this" should be the larger one if appropriate.
    function bnpMultiplyTo(a,r) {
      var x = this.abs(), y = a.abs();
      var i = x.t;
      r.t = i+y.t;
      while(--i >= 0) r[i] = 0;
      for(i = 0; i < y.t; ++i) r[i+x.t] = x.am(0,y[i],r,i,0,x.t);
      r.s = 0;
      r.clamp();
      if(this.s != a.s) BigInteger.ZERO.subTo(r,r);
    }

    // (protected) r = this^2, r != this (HAC 14.16)
    function bnpSquareTo(r) {
      var x = this.abs();
      var i = r.t = 2*x.t;
      while(--i >= 0) r[i] = 0;
      for(i = 0; i < x.t-1; ++i) {
        var c = x.am(i,x[i],r,2*i,0,1);
        if((r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1)) >= x.DV) {
          r[i+x.t] -= x.DV;
          r[i+x.t+1] = 1;
        }
      }
      if(r.t > 0) r[r.t-1] += x.am(i,x[i],r,2*i,0,1);
      r.s = 0;
      r.clamp();
    }

    // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
    // r != q, this != m.  q or r may be null.
    function bnpDivRemTo(m,q,r) {
      var pm = m.abs();
      if(pm.t <= 0) return;
      var pt = this.abs();
      if(pt.t < pm.t) {
        if(q != null) q.fromInt(0);
        if(r != null) this.copyTo(r);
        return;
      }
      if(r == null) r = nbi();
      var y = nbi(), ts = this.s, ms = m.s;
      var nsh = this.DB-nbits(pm[pm.t-1]);   // normalize modulus
      if(nsh > 0) { pm.lShiftTo(nsh,y); pt.lShiftTo(nsh,r); }
      else { pm.copyTo(y); pt.copyTo(r); }
      var ys = y.t;
      var y0 = y[ys-1];
      if(y0 == 0) return;
      var yt = y0*(1<<this.F1)+((ys>1)?y[ys-2]>>this.F2:0);
      var d1 = this.FV/yt, d2 = (1<<this.F1)/yt, e = 1<<this.F2;
      var i = r.t, j = i-ys, t = (q==null)?nbi():q;
      y.dlShiftTo(j,t);
      if(r.compareTo(t) >= 0) {
        r[r.t++] = 1;
        r.subTo(t,r);
      }
      BigInteger.ONE.dlShiftTo(ys,t);
      t.subTo(y,y);  // "negative" y so we can replace sub with am later
      while(y.t < ys) y[y.t++] = 0;
      while(--j >= 0) {
        // Estimate quotient digit
        var qd = (r[--i]==y0)?this.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);
        if((r[i]+=y.am(0,qd,r,j,0,ys)) < qd) {   // Try it out
          y.dlShiftTo(j,t);
          r.subTo(t,r);
          while(r[i] < --qd) r.subTo(t,r);
        }
      }
      if(q != null) {
        r.drShiftTo(ys,q);
        if(ts != ms) BigInteger.ZERO.subTo(q,q);
      }
      r.t = ys;
      r.clamp();
      if(nsh > 0) r.rShiftTo(nsh,r); // Denormalize remainder
      if(ts < 0) BigInteger.ZERO.subTo(r,r);
    }

    // (public) this mod a
    function bnMod(a) {
      var r = nbi();
      this.abs().divRemTo(a,null,r);
      if(this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r,r);
      return r;
    }

    // Modular reduction using "classic" algorithm
    function Classic(m) { this.m = m; }
    function cConvert(x) {
      if(x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
      else return x;
    }
    function cRevert(x) { return x; }
    function cReduce(x) { x.divRemTo(this.m,null,x); }
    function cMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
    function cSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

    Classic.prototype.convert = cConvert;
    Classic.prototype.revert = cRevert;
    Classic.prototype.reduce = cReduce;
    Classic.prototype.mulTo = cMulTo;
    Classic.prototype.sqrTo = cSqrTo;

    // (protected) return "-1/this % 2^DB"; useful for Mont. reduction
    // justification:
    //         xy == 1 (mod m)
    //         xy =  1+km
    //   xy(2-xy) = (1+km)(1-km)
    // x[y(2-xy)] = 1-k^2m^2
    // x[y(2-xy)] == 1 (mod m^2)
    // if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
    // should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
    // JS multiply "overflows" differently from C/C++, so care is needed here.
    function bnpInvDigit() {
      if(this.t < 1) return 0;
      var x = this[0];
      if((x&1) == 0) return 0;
      var y = x&3;       // y == 1/x mod 2^2
      y = (y*(2-(x&0xf)*y))&0xf; // y == 1/x mod 2^4
      y = (y*(2-(x&0xff)*y))&0xff;   // y == 1/x mod 2^8
      y = (y*(2-(((x&0xffff)*y)&0xffff)))&0xffff;    // y == 1/x mod 2^16
      // last step - calculate inverse mod DV directly;
      // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
      y = (y*(2-x*y%this.DV))%this.DV;       // y == 1/x mod 2^dbits
      // we really want the negative inverse, and -DV < y < DV
      return (y>0)?this.DV-y:-y;
    }

    // Montgomery reduction
    function Montgomery(m) {
      this.m = m;
      this.mp = m.invDigit();
      this.mpl = this.mp&0x7fff;
      this.mph = this.mp>>15;
      this.um = (1<<(m.DB-15))-1;
      this.mt2 = 2*m.t;
    }

    // xR mod m
    function montConvert(x) {
      var r = nbi();
      x.abs().dlShiftTo(this.m.t,r);
      r.divRemTo(this.m,null,r);
      if(x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r,r);
      return r;
    }

    // x/R mod m
    function montRevert(x) {
      var r = nbi();
      x.copyTo(r);
      this.reduce(r);
      return r;
    }

    // x = x/R mod m (HAC 14.32)
    function montReduce(x) {
      while(x.t <= this.mt2) // pad x so am has enough room later
        x[x.t++] = 0;
      for(var i = 0; i < this.m.t; ++i) {
        // faster way of calculating u0 = x[i]*mp mod DV
        var j = x[i]&0x7fff;
        var u0 = (j*this.mpl+(((j*this.mph+(x[i]>>15)*this.mpl)&this.um)<<15))&x.DM;
        // use am to combine the multiply-shift-add into one call
        j = i+this.m.t;
        x[j] += this.m.am(0,u0,x,i,0,this.m.t);
        // propagate carry
        while(x[j] >= x.DV) { x[j] -= x.DV; x[++j]++; }
      }
      x.clamp();
      x.drShiftTo(this.m.t,x);
      if(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
    }

    // r = "x^2/R mod m"; x != r
    function montSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

    // r = "xy/R mod m"; x,y != r
    function montMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }

    Montgomery.prototype.convert = montConvert;
    Montgomery.prototype.revert = montRevert;
    Montgomery.prototype.reduce = montReduce;
    Montgomery.prototype.mulTo = montMulTo;
    Montgomery.prototype.sqrTo = montSqrTo;

    // (protected) true iff this is even
    function bnpIsEven() { return ((this.t>0)?(this[0]&1):this.s) == 0; }

    // (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
    function bnpExp(e,z) {
      if(e > 0xffffffff || e < 1) return BigInteger.ONE;
      var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e)-1;
      g.copyTo(r);
      while(--i >= 0) {
        z.sqrTo(r,r2);
        if((e&(1<<i)) > 0) z.mulTo(r2,g,r);
        else { var t = r; r = r2; r2 = t; }
      }
      return z.revert(r);
    }

    // (public) this^e % m, 0 <= e < 2^32
    function bnModPowInt(e,m) {
      var z;
      if(e < 256 || m.isEven()) z = new Classic(m); else z = new Montgomery(m);
      return this.exp(e,z);
    }

    // protected
    BigInteger.prototype.copyTo = bnpCopyTo;
    BigInteger.prototype.fromInt = bnpFromInt;
    BigInteger.prototype.fromString = bnpFromString;
    BigInteger.prototype.clamp = bnpClamp;
    BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
    BigInteger.prototype.drShiftTo = bnpDRShiftTo;
    BigInteger.prototype.lShiftTo = bnpLShiftTo;
    BigInteger.prototype.rShiftTo = bnpRShiftTo;
    BigInteger.prototype.subTo = bnpSubTo;
    BigInteger.prototype.multiplyTo = bnpMultiplyTo;
    BigInteger.prototype.squareTo = bnpSquareTo;
    BigInteger.prototype.divRemTo = bnpDivRemTo;
    BigInteger.prototype.invDigit = bnpInvDigit;
    BigInteger.prototype.isEven = bnpIsEven;
    BigInteger.prototype.exp = bnpExp;

    // public
    BigInteger.prototype.toString = bnToString;
    BigInteger.prototype.negate = bnNegate;
    BigInteger.prototype.abs = bnAbs;
    BigInteger.prototype.compareTo = bnCompareTo;
    BigInteger.prototype.bitLength = bnBitLength;
    BigInteger.prototype.mod = bnMod;
    BigInteger.prototype.modPowInt = bnModPowInt;

    // "constants"
    BigInteger.ZERO = nbv(0);
    BigInteger.ONE = nbv(1);

    // Copyright (c) 2005-2009  Tom Wu
    // All Rights Reserved.
    // See "LICENSE" for details.

    // Extended JavaScript BN functions, required for RSA private ops.

    // Version 1.1: new BigInteger("0", 10) returns "proper" zero
    // Version 1.2: square() API, isProbablePrime fix

    // (public)
    function bnClone() { var r = nbi(); this.copyTo(r); return r; }

    // (public) return value as integer
    function bnIntValue() {
      if(this.s < 0) {
        if(this.t == 1) return this[0]-this.DV;
        else if(this.t == 0) return -1;
      }
      else if(this.t == 1) return this[0];
      else if(this.t == 0) return 0;
      // assumes 16 < DB < 32
      return ((this[1]&((1<<(32-this.DB))-1))<<this.DB)|this[0];
    }

    // (public) return value as byte
    function bnByteValue() { return (this.t==0)?this.s:(this[0]<<24)>>24; }

    // (public) return value as short (assumes DB>=16)
    function bnShortValue() { return (this.t==0)?this.s:(this[0]<<16)>>16; }

    // (protected) return x s.t. r^x < DV
    function bnpChunkSize(r) { return Math.floor(Math.LN2*this.DB/Math.log(r)); }

    // (public) 0 if this == 0, 1 if this > 0
    function bnSigNum() {
      if(this.s < 0) return -1;
      else if(this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
      else return 1;
    }

    // (protected) convert to radix string
    function bnpToRadix(b) {
      if(b == null) b = 10;
      if(this.signum() == 0 || b < 2 || b > 36) return "0";
      var cs = this.chunkSize(b);
      var a = Math.pow(b,cs);
      var d = nbv(a), y = nbi(), z = nbi(), r = "";
      this.divRemTo(d,y,z);
      while(y.signum() > 0) {
        r = (a+z.intValue()).toString(b).substr(1) + r;
        y.divRemTo(d,y,z);
      }
      return z.intValue().toString(b) + r;
    }

    // (protected) convert from radix string
    function bnpFromRadix(s,b) {
      this.fromInt(0);
      if(b == null) b = 10;
      var cs = this.chunkSize(b);
      var d = Math.pow(b,cs), mi = false, j = 0, w = 0;
      for(var i = 0; i < s.length; ++i) {
        var x = intAt(s,i);
        if(x < 0) {
          if(s.charAt(i) == "-" && this.signum() == 0) mi = true;
          continue;
        }
        w = b*w+x;
        if(++j >= cs) {
          this.dMultiply(d);
          this.dAddOffset(w,0);
          j = 0;
          w = 0;
        }
      }
      if(j > 0) {
        this.dMultiply(Math.pow(b,j));
        this.dAddOffset(w,0);
      }
      if(mi) BigInteger.ZERO.subTo(this,this);
    }

    // (protected) alternate constructor
    function bnpFromNumber(a,b,c) {
      if("number" == typeof b) {
        // new BigInteger(int,int,RNG)
        if(a < 2) this.fromInt(1);
        else {
          this.fromNumber(a,c);
          if(!this.testBit(a-1))    // force MSB set
            this.bitwiseTo(BigInteger.ONE.shiftLeft(a-1),op_or,this);
          if(this.isEven()) this.dAddOffset(1,0); // force odd
          while(!this.isProbablePrime(b)) {
            this.dAddOffset(2,0);
            if(this.bitLength() > a) this.subTo(BigInteger.ONE.shiftLeft(a-1),this);
          }
        }
      }
      else {
        // new BigInteger(int,RNG)
        var x = new Array(), t = a&7;
        x.length = (a>>3)+1;
        b.nextBytes(x);
        if(t > 0) x[0] &= ((1<<t)-1); else x[0] = 0;
        this.fromString(x,256);
      }
    }

    // (public) convert to bigendian byte array
    function bnToByteArray() {
      var i = this.t, r = new Array();
      r[0] = this.s;
      var p = this.DB-(i*this.DB)%8, d, k = 0;
      if(i-- > 0) {
        if(p < this.DB && (d = this[i]>>p) != (this.s&this.DM)>>p)
          r[k++] = d|(this.s<<(this.DB-p));
        while(i >= 0) {
          if(p < 8) {
            d = (this[i]&((1<<p)-1))<<(8-p);
            d |= this[--i]>>(p+=this.DB-8);
          }
          else {
            d = (this[i]>>(p-=8))&0xff;
            if(p <= 0) { p += this.DB; --i; }
          }
          if((d&0x80) != 0) d |= -256;
          if(k == 0 && (this.s&0x80) != (d&0x80)) ++k;
          if(k > 0 || d != this.s) r[k++] = d;
        }
      }
      return r;
    }

    function bnEquals(a) { return(this.compareTo(a)==0); }
    function bnMin(a) { return(this.compareTo(a)<0)?this:a; }
    function bnMax(a) { return(this.compareTo(a)>0)?this:a; }

    // (protected) r = this op a (bitwise)
    function bnpBitwiseTo(a,op,r) {
      var i, f, m = Math.min(a.t,this.t);
      for(i = 0; i < m; ++i) r[i] = op(this[i],a[i]);
      if(a.t < this.t) {
        f = a.s&this.DM;
        for(i = m; i < this.t; ++i) r[i] = op(this[i],f);
        r.t = this.t;
      }
      else {
        f = this.s&this.DM;
        for(i = m; i < a.t; ++i) r[i] = op(f,a[i]);
        r.t = a.t;
      }
      r.s = op(this.s,a.s);
      r.clamp();
    }

    // (public) this & a
    function op_and(x,y) { return x&y; }
    function bnAnd(a) { var r = nbi(); this.bitwiseTo(a,op_and,r); return r; }

    // (public) this | a
    function op_or(x,y) { return x|y; }
    function bnOr(a) { var r = nbi(); this.bitwiseTo(a,op_or,r); return r; }

    // (public) this ^ a
    function op_xor(x,y) { return x^y; }
    function bnXor(a) { var r = nbi(); this.bitwiseTo(a,op_xor,r); return r; }

    // (public) this & ~a
    function op_andnot(x,y) { return x&~y; }
    function bnAndNot(a) { var r = nbi(); this.bitwiseTo(a,op_andnot,r); return r; }

    // (public) ~this
    function bnNot() {
      var r = nbi();
      for(var i = 0; i < this.t; ++i) r[i] = this.DM&~this[i];
      r.t = this.t;
      r.s = ~this.s;
      return r;
    }

    // (public) this << n
    function bnShiftLeft(n) {
      var r = nbi();
      if(n < 0) this.rShiftTo(-n,r); else this.lShiftTo(n,r);
      return r;
    }

    // (public) this >> n
    function bnShiftRight(n) {
      var r = nbi();
      if(n < 0) this.lShiftTo(-n,r); else this.rShiftTo(n,r);
      return r;
    }

    // return index of lowest 1-bit in x, x < 2^31
    function lbit(x) {
      if(x == 0) return -1;
      var r = 0;
      if((x&0xffff) == 0) { x >>= 16; r += 16; }
      if((x&0xff) == 0) { x >>= 8; r += 8; }
      if((x&0xf) == 0) { x >>= 4; r += 4; }
      if((x&3) == 0) { x >>= 2; r += 2; }
      if((x&1) == 0) ++r;
      return r;
    }

    // (public) returns index of lowest 1-bit (or -1 if none)
    function bnGetLowestSetBit() {
      for(var i = 0; i < this.t; ++i)
        if(this[i] != 0) return i*this.DB+lbit(this[i]);
      if(this.s < 0) return this.t*this.DB;
      return -1;
    }

    // return number of 1 bits in x
    function cbit(x) {
      var r = 0;
      while(x != 0) { x &= x-1; ++r; }
      return r;
    }

    // (public) return number of set bits
    function bnBitCount() {
      var r = 0, x = this.s&this.DM;
      for(var i = 0; i < this.t; ++i) r += cbit(this[i]^x);
      return r;
    }

    // (public) true iff nth bit is set
    function bnTestBit(n) {
      var j = Math.floor(n/this.DB);
      if(j >= this.t) return(this.s!=0);
      return((this[j]&(1<<(n%this.DB)))!=0);
    }

    // (protected) this op (1<<n)
    function bnpChangeBit(n,op) {
      var r = BigInteger.ONE.shiftLeft(n);
      this.bitwiseTo(r,op,r);
      return r;
    }

    // (public) this | (1<<n)
    function bnSetBit(n) { return this.changeBit(n,op_or); }

    // (public) this & ~(1<<n)
    function bnClearBit(n) { return this.changeBit(n,op_andnot); }

    // (public) this ^ (1<<n)
    function bnFlipBit(n) { return this.changeBit(n,op_xor); }

    // (protected) r = this + a
    function bnpAddTo(a,r) {
      var i = 0, c = 0, m = Math.min(a.t,this.t);
      while(i < m) {
        c += this[i]+a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      if(a.t < this.t) {
        c += a.s;
        while(i < this.t) {
          c += this[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c += this.s;
      }
      else {
        c += this.s;
        while(i < a.t) {
          c += a[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c += a.s;
      }
      r.s = (c<0)?-1:0;
      if(c > 0) r[i++] = c;
      else if(c < -1) r[i++] = this.DV+c;
      r.t = i;
      r.clamp();
    }

    // (public) this + a
    function bnAdd(a) { var r = nbi(); this.addTo(a,r); return r; }

    // (public) this - a
    function bnSubtract(a) { var r = nbi(); this.subTo(a,r); return r; }

    // (public) this * a
    function bnMultiply(a) { var r = nbi(); this.multiplyTo(a,r); return r; }

    // (public) this^2
    function bnSquare() { var r = nbi(); this.squareTo(r); return r; }

    // (public) this / a
    function bnDivide(a) { var r = nbi(); this.divRemTo(a,r,null); return r; }

    // (public) this % a
    function bnRemainder(a) { var r = nbi(); this.divRemTo(a,null,r); return r; }

    // (public) [this/a,this%a]
    function bnDivideAndRemainder(a) {
      var q = nbi(), r = nbi();
      this.divRemTo(a,q,r);
      return new Array(q,r);
    }

    // (protected) this *= n, this >= 0, 1 < n < DV
    function bnpDMultiply(n) {
      this[this.t] = this.am(0,n-1,this,0,0,this.t);
      ++this.t;
      this.clamp();
    }

    // (protected) this += n << w words, this >= 0
    function bnpDAddOffset(n,w) {
      if(n == 0) return;
      while(this.t <= w) this[this.t++] = 0;
      this[w] += n;
      while(this[w] >= this.DV) {
        this[w] -= this.DV;
        if(++w >= this.t) this[this.t++] = 0;
        ++this[w];
      }
    }

    // A "null" reducer
    function NullExp() {}
    function nNop(x) { return x; }
    function nMulTo(x,y,r) { x.multiplyTo(y,r); }
    function nSqrTo(x,r) { x.squareTo(r); }

    NullExp.prototype.convert = nNop;
    NullExp.prototype.revert = nNop;
    NullExp.prototype.mulTo = nMulTo;
    NullExp.prototype.sqrTo = nSqrTo;

    // (public) this^e
    function bnPow(e) { return this.exp(e,new NullExp()); }

    // (protected) r = lower n words of "this * a", a.t <= n
    // "this" should be the larger one if appropriate.
    function bnpMultiplyLowerTo(a,n,r) {
      var i = Math.min(this.t+a.t,n);
      r.s = 0; // assumes a,this >= 0
      r.t = i;
      while(i > 0) r[--i] = 0;
      var j;
      for(j = r.t-this.t; i < j; ++i) r[i+this.t] = this.am(0,a[i],r,i,0,this.t);
      for(j = Math.min(a.t,n); i < j; ++i) this.am(0,a[i],r,i,0,n-i);
      r.clamp();
    }

    // (protected) r = "this * a" without lower n words, n > 0
    // "this" should be the larger one if appropriate.
    function bnpMultiplyUpperTo(a,n,r) {
      --n;
      var i = r.t = this.t+a.t-n;
      r.s = 0; // assumes a,this >= 0
      while(--i >= 0) r[i] = 0;
      for(i = Math.max(n-this.t,0); i < a.t; ++i)
        r[this.t+i-n] = this.am(n-i,a[i],r,0,0,this.t+i-n);
      r.clamp();
      r.drShiftTo(1,r);
    }

    // Barrett modular reduction
    function Barrett(m) {
      // setup Barrett
      this.r2 = nbi();
      this.q3 = nbi();
      BigInteger.ONE.dlShiftTo(2*m.t,this.r2);
      this.mu = this.r2.divide(m);
      this.m = m;
    }

    function barrettConvert(x) {
      if(x.s < 0 || x.t > 2*this.m.t) return x.mod(this.m);
      else if(x.compareTo(this.m) < 0) return x;
      else { var r = nbi(); x.copyTo(r); this.reduce(r); return r; }
    }

    function barrettRevert(x) { return x; }

    // x = x mod m (HAC 14.42)
    function barrettReduce(x) {
      x.drShiftTo(this.m.t-1,this.r2);
      if(x.t > this.m.t+1) { x.t = this.m.t+1; x.clamp(); }
      this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3);
      this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);
      while(x.compareTo(this.r2) < 0) x.dAddOffset(1,this.m.t+1);
      x.subTo(this.r2,x);
      while(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
    }

    // r = x^2 mod m; x != r
    function barrettSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

    // r = x*y mod m; x,y != r
    function barrettMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }

    Barrett.prototype.convert = barrettConvert;
    Barrett.prototype.revert = barrettRevert;
    Barrett.prototype.reduce = barrettReduce;
    Barrett.prototype.mulTo = barrettMulTo;
    Barrett.prototype.sqrTo = barrettSqrTo;

    // (public) this^e % m (HAC 14.85)
    function bnModPow(e,m) {
      var i = e.bitLength(), k, r = nbv(1), z;
      if(i <= 0) return r;
      else if(i < 18) k = 1;
      else if(i < 48) k = 3;
      else if(i < 144) k = 4;
      else if(i < 768) k = 5;
      else k = 6;
      if(i < 8)
        z = new Classic(m);
      else if(m.isEven())
        z = new Barrett(m);
      else
        z = new Montgomery(m);

      // precomputation
      var g = new Array(), n = 3, k1 = k-1, km = (1<<k)-1;
      g[1] = z.convert(this);
      if(k > 1) {
        var g2 = nbi();
        z.sqrTo(g[1],g2);
        while(n <= km) {
          g[n] = nbi();
          z.mulTo(g2,g[n-2],g[n]);
          n += 2;
        }
      }

      var j = e.t-1, w, is1 = true, r2 = nbi(), t;
      i = nbits(e[j])-1;
      while(j >= 0) {
        if(i >= k1) w = (e[j]>>(i-k1))&km;
        else {
          w = (e[j]&((1<<(i+1))-1))<<(k1-i);
          if(j > 0) w |= e[j-1]>>(this.DB+i-k1);
        }

        n = k;
        while((w&1) == 0) { w >>= 1; --n; }
        if((i -= n) < 0) { i += this.DB; --j; }
        if(is1) {    // ret == 1, don't bother squaring or multiplying it
          g[w].copyTo(r);
          is1 = false;
        }
        else {
          while(n > 1) { z.sqrTo(r,r2); z.sqrTo(r2,r); n -= 2; }
          if(n > 0) z.sqrTo(r,r2); else { t = r; r = r2; r2 = t; }
          z.mulTo(r2,g[w],r);
        }

        while(j >= 0 && (e[j]&(1<<i)) == 0) {
          z.sqrTo(r,r2); t = r; r = r2; r2 = t;
          if(--i < 0) { i = this.DB-1; --j; }
        }
      }
      return z.revert(r);
    }

    // (public) gcd(this,a) (HAC 14.54)
    function bnGCD(a) {
      var x = (this.s<0)?this.negate():this.clone();
      var y = (a.s<0)?a.negate():a.clone();
      if(x.compareTo(y) < 0) { var t = x; x = y; y = t; }
      var i = x.getLowestSetBit(), g = y.getLowestSetBit();
      if(g < 0) return x;
      if(i < g) g = i;
      if(g > 0) {
        x.rShiftTo(g,x);
        y.rShiftTo(g,y);
      }
      while(x.signum() > 0) {
        if((i = x.getLowestSetBit()) > 0) x.rShiftTo(i,x);
        if((i = y.getLowestSetBit()) > 0) y.rShiftTo(i,y);
        if(x.compareTo(y) >= 0) {
          x.subTo(y,x);
          x.rShiftTo(1,x);
        }
        else {
          y.subTo(x,y);
          y.rShiftTo(1,y);
        }
      }
      if(g > 0) y.lShiftTo(g,y);
      return y;
    }

    // (protected) this % n, n < 2^26
    function bnpModInt(n) {
      if(n <= 0) return 0;
      var d = this.DV%n, r = (this.s<0)?n-1:0;
      if(this.t > 0)
        if(d == 0) r = this[0]%n;
        else for(var i = this.t-1; i >= 0; --i) r = (d*r+this[i])%n;
      return r;
    }

    // (public) 1/this % m (HAC 14.61)
    function bnModInverse(m) {
      var ac = m.isEven();
      if((this.isEven() && ac) || m.signum() == 0) return BigInteger.ZERO;
      var u = m.clone(), v = this.clone();
      var a = nbv(1), b = nbv(0), c = nbv(0), d = nbv(1);
      while(u.signum() != 0) {
        while(u.isEven()) {
          u.rShiftTo(1,u);
          if(ac) {
            if(!a.isEven() || !b.isEven()) { a.addTo(this,a); b.subTo(m,b); }
            a.rShiftTo(1,a);
          }
          else if(!b.isEven()) b.subTo(m,b);
          b.rShiftTo(1,b);
        }
        while(v.isEven()) {
          v.rShiftTo(1,v);
          if(ac) {
            if(!c.isEven() || !d.isEven()) { c.addTo(this,c); d.subTo(m,d); }
            c.rShiftTo(1,c);
          }
          else if(!d.isEven()) d.subTo(m,d);
          d.rShiftTo(1,d);
        }
        if(u.compareTo(v) >= 0) {
          u.subTo(v,u);
          if(ac) a.subTo(c,a);
          b.subTo(d,b);
        }
        else {
          v.subTo(u,v);
          if(ac) c.subTo(a,c);
          d.subTo(b,d);
        }
      }
      if(v.compareTo(BigInteger.ONE) != 0) return BigInteger.ZERO;
      if(d.compareTo(m) >= 0) return d.subtract(m);
      if(d.signum() < 0) d.addTo(m,d); else return d;
      if(d.signum() < 0) return d.add(m); else return d;
    }

    var lowprimes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997];
    var lplim = (1<<26)/lowprimes[lowprimes.length-1];

    // (public) test primality with certainty >= 1-.5^t
    function bnIsProbablePrime(t) {
      var i, x = this.abs();
      if(x.t == 1 && x[0] <= lowprimes[lowprimes.length-1]) {
        for(i = 0; i < lowprimes.length; ++i)
          if(x[0] == lowprimes[i]) return true;
        return false;
      }
      if(x.isEven()) return false;
      i = 1;
      while(i < lowprimes.length) {
        var m = lowprimes[i], j = i+1;
        while(j < lowprimes.length && m < lplim) m *= lowprimes[j++];
        m = x.modInt(m);
        while(i < j) if(m%lowprimes[i++] == 0) return false;
      }
      return x.millerRabin(t);
    }

    // (protected) true if probably prime (HAC 4.24, Miller-Rabin)
    function bnpMillerRabin(t) {
      var n1 = this.subtract(BigInteger.ONE);
      var k = n1.getLowestSetBit();
      if(k <= 0) return false;
      var r = n1.shiftRight(k);
      t = (t+1)>>1;
      if(t > lowprimes.length) t = lowprimes.length;
      var a = nbi();
      for(var i = 0; i < t; ++i) {
        //Pick bases at random, instead of starting at 2
        a.fromInt(lowprimes[Math.floor(Math.random()*lowprimes.length)]);
        var y = a.modPow(r,this);
        if(y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
          var j = 1;
          while(j++ < k && y.compareTo(n1) != 0) {
            y = y.modPowInt(2,this);
            if(y.compareTo(BigInteger.ONE) == 0) return false;
          }
          if(y.compareTo(n1) != 0) return false;
        }
      }
      return true;
    }

    // protected
    BigInteger.prototype.chunkSize = bnpChunkSize;
    BigInteger.prototype.toRadix = bnpToRadix;
    BigInteger.prototype.fromRadix = bnpFromRadix;
    BigInteger.prototype.fromNumber = bnpFromNumber;
    BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
    BigInteger.prototype.changeBit = bnpChangeBit;
    BigInteger.prototype.addTo = bnpAddTo;
    BigInteger.prototype.dMultiply = bnpDMultiply;
    BigInteger.prototype.dAddOffset = bnpDAddOffset;
    BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
    BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
    BigInteger.prototype.modInt = bnpModInt;
    BigInteger.prototype.millerRabin = bnpMillerRabin;

    // public
    BigInteger.prototype.clone = bnClone;
    BigInteger.prototype.intValue = bnIntValue;
    BigInteger.prototype.byteValue = bnByteValue;
    BigInteger.prototype.shortValue = bnShortValue;
    BigInteger.prototype.signum = bnSigNum;
    BigInteger.prototype.toByteArray = bnToByteArray;
    BigInteger.prototype.equals = bnEquals;
    BigInteger.prototype.min = bnMin;
    BigInteger.prototype.max = bnMax;
    BigInteger.prototype.and = bnAnd;
    BigInteger.prototype.or = bnOr;
    BigInteger.prototype.xor = bnXor;
    BigInteger.prototype.andNot = bnAndNot;
    BigInteger.prototype.not = bnNot;
    BigInteger.prototype.shiftLeft = bnShiftLeft;
    BigInteger.prototype.shiftRight = bnShiftRight;
    BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
    BigInteger.prototype.bitCount = bnBitCount;
    BigInteger.prototype.testBit = bnTestBit;
    BigInteger.prototype.setBit = bnSetBit;
    BigInteger.prototype.clearBit = bnClearBit;
    BigInteger.prototype.flipBit = bnFlipBit;
    BigInteger.prototype.add = bnAdd;
    BigInteger.prototype.subtract = bnSubtract;
    BigInteger.prototype.multiply = bnMultiply;
    BigInteger.prototype.divide = bnDivide;
    BigInteger.prototype.remainder = bnRemainder;
    BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
    BigInteger.prototype.modPow = bnModPow;
    BigInteger.prototype.modInverse = bnModInverse;
    BigInteger.prototype.pow = bnPow;
    BigInteger.prototype.gcd = bnGCD;
    BigInteger.prototype.isProbablePrime = bnIsProbablePrime;

    // JSBN-specific extension
    BigInteger.prototype.square = bnSquare;

    // Expose the Barrett function
    BigInteger.prototype.Barrett = Barrett

    // BigInteger interfaces not implemented in jsbn:

    // BigInteger(int signum, byte[] magnitude)
    // double doubleValue()
    // float floatValue()
    // int hashCode()
    // long longValue()
    // static BigInteger valueOf(long val)

    // Random number generator - requires a PRNG backend, e.g. prng4.js

    // For best results, put code like
    // <body onClick='rng_seed_time();' onKeyPress='rng_seed_time();'>
    // in your main HTML document.

    var rng_state;
    var rng_pool;
    var rng_pptr;

    // Mix in a 32-bit integer into the pool
    function rng_seed_int(x) {
      rng_pool[rng_pptr++] ^= x & 255;
      rng_pool[rng_pptr++] ^= (x >> 8) & 255;
      rng_pool[rng_pptr++] ^= (x >> 16) & 255;
      rng_pool[rng_pptr++] ^= (x >> 24) & 255;
      if(rng_pptr >= rng_psize) rng_pptr -= rng_psize;
    }

    // Mix in the current time (w/milliseconds) into the pool
    function rng_seed_time() {
      rng_seed_int(new Date().getTime());
    }

    // Initialize the pool with junk if needed.
    if(rng_pool == null) {
      rng_pool = new Array();
      rng_pptr = 0;
      var t;
      if(typeof window !== "undefined" && window.crypto) {
        if (window.crypto.getRandomValues) {
          // Use webcrypto if available
          var ua = new Uint8Array(32);
          window.crypto.getRandomValues(ua);
          for(t = 0; t < 32; ++t)
            rng_pool[rng_pptr++] = ua[t];
        }
        else if(navigator.appName == "Netscape" && navigator.appVersion < "5") {
          // Extract entropy (256 bits) from NS4 RNG if available
          var z = window.crypto.random(32);
          for(t = 0; t < z.length; ++t)
            rng_pool[rng_pptr++] = z.charCodeAt(t) & 255;
        }
      }
      while(rng_pptr < rng_psize) {  // extract some randomness from Math.random()
        t = Math.floor(65536 * Math.random());
        rng_pool[rng_pptr++] = t >>> 8;
        rng_pool[rng_pptr++] = t & 255;
      }
      rng_pptr = 0;
      rng_seed_time();
      //rng_seed_int(window.screenX);
      //rng_seed_int(window.screenY);
    }

    function rng_get_byte() {
      if(rng_state == null) {
        rng_seed_time();
        rng_state = prng_newstate();
        rng_state.init(rng_pool);
        for(rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr)
          rng_pool[rng_pptr] = 0;
        rng_pptr = 0;
        //rng_pool = null;
      }
      // TODO: allow reseeding after first request
      return rng_state.next();
    }

    function rng_get_bytes(ba) {
      var i;
      for(i = 0; i < ba.length; ++i) ba[i] = rng_get_byte();
    }

    function SecureRandom() {}

    SecureRandom.prototype.nextBytes = rng_get_bytes;

    // prng4.js - uses Arcfour as a PRNG

    function Arcfour() {
      this.i = 0;
      this.j = 0;
      this.S = new Array();
    }

    // Initialize arcfour context from key, an array of ints, each from [0..255]
    function ARC4init(key) {
      var i, j, t;
      for(i = 0; i < 256; ++i)
        this.S[i] = i;
      j = 0;
      for(i = 0; i < 256; ++i) {
        j = (j + this.S[i] + key[i % key.length]) & 255;
        t = this.S[i];
        this.S[i] = this.S[j];
        this.S[j] = t;
      }
      this.i = 0;
      this.j = 0;
    }

    function ARC4next() {
      var t;
      this.i = (this.i + 1) & 255;
      this.j = (this.j + this.S[this.i]) & 255;
      t = this.S[this.i];
      this.S[this.i] = this.S[this.j];
      this.S[this.j] = t;
      return this.S[(t + this.S[this.i]) & 255];
    }

    Arcfour.prototype.init = ARC4init;
    Arcfour.prototype.next = ARC4next;

    // Plug in your RNG constructor here
    function prng_newstate() {
      return new Arcfour();
    }

    // Pool size must be a multiple of 4 and greater than 32.
    // An array of bytes the size of the pool will be passed to init()
    var rng_psize = 256;

    if (true) {
        exports = module.exports = {
            default: BigInteger,
            BigInteger: BigInteger,
            SecureRandom: SecureRandom,
        };
    } else {}

}).call(this);


/***/ }),

/***/ "./src/AccessTokenEvents.js":
/*!**********************************!*\
  !*** ./src/AccessTokenEvents.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AccessTokenEvents = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _Timer = __webpack_require__(/*! ./Timer.js */ "./src/Timer.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var DefaultAccessTokenExpiringNotificationTime = 60; // seconds

var AccessTokenEvents = exports.AccessTokenEvents = function () {
    function AccessTokenEvents() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$accessTokenExpir = _ref.accessTokenExpiringNotificationTime,
            accessTokenExpiringNotificationTime = _ref$accessTokenExpir === undefined ? DefaultAccessTokenExpiringNotificationTime : _ref$accessTokenExpir,
            _ref$accessTokenExpir2 = _ref.accessTokenExpiringTimer,
            accessTokenExpiringTimer = _ref$accessTokenExpir2 === undefined ? new _Timer.Timer("Access token expiring") : _ref$accessTokenExpir2,
            _ref$accessTokenExpir3 = _ref.accessTokenExpiredTimer,
            accessTokenExpiredTimer = _ref$accessTokenExpir3 === undefined ? new _Timer.Timer("Access token expired") : _ref$accessTokenExpir3;

        _classCallCheck(this, AccessTokenEvents);

        this._accessTokenExpiringNotificationTime = accessTokenExpiringNotificationTime;

        this._accessTokenExpiring = accessTokenExpiringTimer;
        this._accessTokenExpired = accessTokenExpiredTimer;
    }

    AccessTokenEvents.prototype.load = function load(container) {
        // only register events if there's an access token and it has an expiration
        if (container.access_token && container.expires_in !== undefined) {
            var duration = container.expires_in;
            _Log.Log.debug("AccessTokenEvents.load: access token present, remaining duration:", duration);

            if (duration > 0) {
                // only register expiring if we still have time
                var expiring = duration - this._accessTokenExpiringNotificationTime;
                if (expiring <= 0) {
                    expiring = 1;
                }

                _Log.Log.debug("AccessTokenEvents.load: registering expiring timer in:", expiring);
                this._accessTokenExpiring.init(expiring);
            } else {
                _Log.Log.debug("AccessTokenEvents.load: canceling existing expiring timer becase we're past expiration.");
                this._accessTokenExpiring.cancel();
            }

            // if it's negative, it will still fire
            var expired = duration + 1;
            _Log.Log.debug("AccessTokenEvents.load: registering expired timer in:", expired);
            this._accessTokenExpired.init(expired);
        } else {
            this._accessTokenExpiring.cancel();
            this._accessTokenExpired.cancel();
        }
    };

    AccessTokenEvents.prototype.unload = function unload() {
        _Log.Log.debug("AccessTokenEvents.unload: canceling existing access token timers");
        this._accessTokenExpiring.cancel();
        this._accessTokenExpired.cancel();
    };

    AccessTokenEvents.prototype.addAccessTokenExpiring = function addAccessTokenExpiring(cb) {
        this._accessTokenExpiring.addHandler(cb);
    };

    AccessTokenEvents.prototype.removeAccessTokenExpiring = function removeAccessTokenExpiring(cb) {
        this._accessTokenExpiring.removeHandler(cb);
    };

    AccessTokenEvents.prototype.addAccessTokenExpired = function addAccessTokenExpired(cb) {
        this._accessTokenExpired.addHandler(cb);
    };

    AccessTokenEvents.prototype.removeAccessTokenExpired = function removeAccessTokenExpired(cb) {
        this._accessTokenExpired.removeHandler(cb);
    };

    return AccessTokenEvents;
}();

/***/ }),

/***/ "./src/CheckSessionIFrame.js":
/*!***********************************!*\
  !*** ./src/CheckSessionIFrame.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CheckSessionIFrame = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var DefaultInterval = 2000;

var CheckSessionIFrame = exports.CheckSessionIFrame = function () {
    function CheckSessionIFrame(callback, client_id, url, interval) {
        var stopOnError = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

        _classCallCheck(this, CheckSessionIFrame);

        this._callback = callback;
        this._client_id = client_id;
        this._url = url;
        this._interval = interval || DefaultInterval;
        this._stopOnError = stopOnError;

        var idx = url.indexOf("/", url.indexOf("//") + 2);
        this._frame_origin = url.substr(0, idx);

        this._frame = window.document.createElement("iframe");

        // shotgun approach
        this._frame.style.visibility = "hidden";
        this._frame.style.position = "absolute";
        this._frame.style.display = "none";
        this._frame.style.width = 0;
        this._frame.style.height = 0;

        this._frame.src = url;
    }

    CheckSessionIFrame.prototype.load = function load() {
        var _this = this;

        return new Promise(function (resolve) {
            _this._frame.onload = function () {
                resolve();
            };

            window.document.body.appendChild(_this._frame);
            _this._boundMessageEvent = _this._message.bind(_this);
            window.addEventListener("message", _this._boundMessageEvent, false);
        });
    };

    CheckSessionIFrame.prototype._message = function _message(e) {
        if (e.origin === this._frame_origin && e.source === this._frame.contentWindow) {
            if (e.data === "error") {
                _Log.Log.error("CheckSessionIFrame: error message from check session op iframe");
                if (this._stopOnError) {
                    this.stop();
                }
            } else if (e.data === "changed") {
                _Log.Log.debug("CheckSessionIFrame: changed message from check session op iframe");
                this.stop();
                this._callback();
            } else {
                _Log.Log.debug("CheckSessionIFrame: " + e.data + " message from check session op iframe");
            }
        }
    };

    CheckSessionIFrame.prototype.start = function start(session_state) {
        var _this2 = this;

        if (this._session_state !== session_state) {
            _Log.Log.debug("CheckSessionIFrame.start");

            this.stop();

            this._session_state = session_state;

            var send = function send() {
                _this2._frame.contentWindow.postMessage(_this2._client_id + " " + _this2._session_state, _this2._frame_origin);
            };

            // trigger now
            send();

            // and setup timer
            this._timer = window.setInterval(send, this._interval);
        }
    };

    CheckSessionIFrame.prototype.stop = function stop() {
        this._session_state = null;

        if (this._timer) {
            _Log.Log.debug("CheckSessionIFrame.stop");

            window.clearInterval(this._timer);
            this._timer = null;
        }
    };

    return CheckSessionIFrame;
}();

/***/ }),

/***/ "./src/ClockService.js":
/*!*****************************!*\
  !*** ./src/ClockService.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClockService = exports.ClockService = function () {
    function ClockService() {
        _classCallCheck(this, ClockService);
    }

    ClockService.prototype.getEpochTime = function getEpochTime() {
        return Promise.resolve(Date.now() / 1000 | 0);
    };

    return ClockService;
}();

/***/ }),

/***/ "./src/CordovaIFrameNavigator.js":
/*!***************************************!*\
  !*** ./src/CordovaIFrameNavigator.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CordovaIFrameNavigator = undefined;

var _CordovaPopupWindow = __webpack_require__(/*! ./CordovaPopupWindow.js */ "./src/CordovaPopupWindow.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var CordovaIFrameNavigator = exports.CordovaIFrameNavigator = function () {
    function CordovaIFrameNavigator() {
        _classCallCheck(this, CordovaIFrameNavigator);
    }

    CordovaIFrameNavigator.prototype.prepare = function prepare(params) {
        params.popupWindowFeatures = 'hidden=yes';
        var popup = new _CordovaPopupWindow.CordovaPopupWindow(params);
        return Promise.resolve(popup);
    };

    return CordovaIFrameNavigator;
}();

/***/ }),

/***/ "./src/CordovaPopupNavigator.js":
/*!**************************************!*\
  !*** ./src/CordovaPopupNavigator.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CordovaPopupNavigator = undefined;

var _CordovaPopupWindow = __webpack_require__(/*! ./CordovaPopupWindow.js */ "./src/CordovaPopupWindow.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var CordovaPopupNavigator = exports.CordovaPopupNavigator = function () {
    function CordovaPopupNavigator() {
        _classCallCheck(this, CordovaPopupNavigator);
    }

    CordovaPopupNavigator.prototype.prepare = function prepare(params) {
        var popup = new _CordovaPopupWindow.CordovaPopupWindow(params);
        return Promise.resolve(popup);
    };

    return CordovaPopupNavigator;
}();

/***/ }),

/***/ "./src/CordovaPopupWindow.js":
/*!***********************************!*\
  !*** ./src/CordovaPopupWindow.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CordovaPopupWindow = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DefaultPopupFeatures = 'location=no,toolbar=no,zoom=no';
var DefaultPopupTarget = "_blank";

var CordovaPopupWindow = exports.CordovaPopupWindow = function () {
    function CordovaPopupWindow(params) {
        var _this = this;

        _classCallCheck(this, CordovaPopupWindow);

        this._promise = new Promise(function (resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
        });

        this.features = params.popupWindowFeatures || DefaultPopupFeatures;
        this.target = params.popupWindowTarget || DefaultPopupTarget;

        this.redirect_uri = params.startUrl;
        _Log.Log.debug("CordovaPopupWindow.ctor: redirect_uri: " + this.redirect_uri);
    }

    CordovaPopupWindow.prototype._isInAppBrowserInstalled = function _isInAppBrowserInstalled(cordovaMetadata) {
        return ["cordova-plugin-inappbrowser", "cordova-plugin-inappbrowser.inappbrowser", "org.apache.cordova.inappbrowser", "cordova-plugin-inappbrowser-transparent"].some(function (name) {
            return cordovaMetadata.hasOwnProperty(name);
        });
    };

    CordovaPopupWindow.prototype.navigate = function navigate(params) {
        if (!params || !params.url) {
            this._error("No url provided");
        } else {
            if (!window.cordova) {
                return this._error("cordova is undefined");
            }

            var cordovaMetadata = window.cordova.require("cordova/plugin_list").metadata;
            if (this._isInAppBrowserInstalled(cordovaMetadata) === false) {
                return this._error("InAppBrowser plugin not found");
            }
            this._popup = cordova.InAppBrowser.open(params.url, this.target, this.features);
            if (this._popup) {
                _Log.Log.debug("CordovaPopupWindow.navigate: popup successfully created");

                this._exitCallbackEvent = this._exitCallback.bind(this);
                this._loadStartCallbackEvent = this._loadStartCallback.bind(this);

                this._popup.addEventListener("exit", this._exitCallbackEvent, false);
                this._popup.addEventListener("loadstart", this._loadStartCallbackEvent, false);
            } else {
                this._error("Error opening popup window");
            }
        }
        return this.promise;
    };

    CordovaPopupWindow.prototype._loadStartCallback = function _loadStartCallback(event) {
        if (event.url.indexOf(this.redirect_uri) === 0) {
            this._success({ url: event.url });
        }
    };

    CordovaPopupWindow.prototype._exitCallback = function _exitCallback(message) {
        this._error(message);
    };

    CordovaPopupWindow.prototype._success = function _success(data) {
        this._cleanup();

        _Log.Log.debug("CordovaPopupWindow: Successful response from cordova popup window");
        this._resolve(data);
    };

    CordovaPopupWindow.prototype._error = function _error(message) {
        this._cleanup();

        _Log.Log.error(message);
        this._reject(new Error(message));
    };

    CordovaPopupWindow.prototype.close = function close() {
        this._cleanup();
    };

    CordovaPopupWindow.prototype._cleanup = function _cleanup() {
        if (this._popup) {
            _Log.Log.debug("CordovaPopupWindow: cleaning up popup");
            this._popup.removeEventListener("exit", this._exitCallbackEvent, false);
            this._popup.removeEventListener("loadstart", this._loadStartCallbackEvent, false);
            //this._popup.hide();
            this._popup.close();
        }
        this._popup = null;
    };

    _createClass(CordovaPopupWindow, [{
        key: 'promise',
        get: function get() {
            return this._promise;
        }
    }]);

    return CordovaPopupWindow;
}();

/***/ }),

/***/ "./src/ErrorResponse.js":
/*!******************************!*\
  !*** ./src/ErrorResponse.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.ErrorResponse = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var ErrorResponse = exports.ErrorResponse = function (_Error) {
        _inherits(ErrorResponse, _Error);

        function ErrorResponse() {
                var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    error = _ref.error,
                    error_description = _ref.error_description,
                    error_uri = _ref.error_uri,
                    state = _ref.state,
                    session_state = _ref.session_state;

                _classCallCheck(this, ErrorResponse);

                if (!error) {
                        _Log.Log.error("No error passed to ErrorResponse");
                        throw new Error("error");
                }

                var _this = _possibleConstructorReturn(this, _Error.call(this, error_description || error));

                _this.name = "ErrorResponse";

                _this.error = error;
                _this.error_description = error_description;
                _this.error_uri = error_uri;

                _this.state = state;
                _this.session_state = session_state;
                return _this;
        }

        return ErrorResponse;
}(Error);

/***/ }),

/***/ "./src/Event.js":
/*!**********************!*\
  !*** ./src/Event.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Event = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var Event = exports.Event = function () {
    function Event(name) {
        _classCallCheck(this, Event);

        this._name = name;
        this._callbacks = [];
    }

    Event.prototype.addHandler = function addHandler(cb) {
        this._callbacks.push(cb);
    };

    Event.prototype.removeHandler = function removeHandler(cb) {
        var idx = this._callbacks.findIndex(function (item) {
            return item === cb;
        });
        if (idx >= 0) {
            this._callbacks.splice(idx, 1);
        }
    };

    Event.prototype.raise = function raise() {
        _Log.Log.debug("Event: Raising event: " + this._name);
        for (var i = 0; i < this._callbacks.length; i++) {
            var _callbacks;

            (_callbacks = this._callbacks)[i].apply(_callbacks, arguments);
        }
    };

    return Event;
}();

/***/ }),

/***/ "./src/Global.js":
/*!***********************!*\
  !*** ./src/Global.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var timer = {
    setInterval: function (_setInterval) {
        function setInterval(_x, _x2) {
            return _setInterval.apply(this, arguments);
        }

        setInterval.toString = function () {
            return _setInterval.toString();
        };

        return setInterval;
    }(function (cb, duration) {
        return setInterval(cb, duration);
    }),
    clearInterval: function (_clearInterval) {
        function clearInterval(_x3) {
            return _clearInterval.apply(this, arguments);
        }

        clearInterval.toString = function () {
            return _clearInterval.toString();
        };

        return clearInterval;
    }(function (handle) {
        return clearInterval(handle);
    })
};

var testing = false;
var request = null;

var Global = exports.Global = function () {
    function Global() {
        _classCallCheck(this, Global);
    }

    Global._testing = function _testing() {
        testing = true;
    };

    Global.setXMLHttpRequest = function setXMLHttpRequest(newRequest) {
        request = newRequest;
    };

    _createClass(Global, null, [{
        key: 'location',
        get: function get() {
            if (!testing) {
                return location;
            }
        }
    }, {
        key: 'localStorage',
        get: function get() {
            if (!testing && typeof window !== 'undefined') {
                return localStorage;
            }
        }
    }, {
        key: 'sessionStorage',
        get: function get() {
            if (!testing && typeof window !== 'undefined') {
                return sessionStorage;
            }
        }
    }, {
        key: 'XMLHttpRequest',
        get: function get() {
            if (!testing && typeof window !== 'undefined') {
                return request || XMLHttpRequest;
            }
        }
    }, {
        key: 'timer',
        get: function get() {
            if (!testing) {
                return timer;
            }
        }
    }]);

    return Global;
}();

/***/ }),

/***/ "./src/IFrameNavigator.js":
/*!********************************!*\
  !*** ./src/IFrameNavigator.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IFrameNavigator = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _IFrameWindow = __webpack_require__(/*! ./IFrameWindow.js */ "./src/IFrameWindow.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var IFrameNavigator = exports.IFrameNavigator = function () {
    function IFrameNavigator() {
        _classCallCheck(this, IFrameNavigator);
    }

    IFrameNavigator.prototype.prepare = function prepare(params) {
        var frame = new _IFrameWindow.IFrameWindow(params);
        return Promise.resolve(frame);
    };

    IFrameNavigator.prototype.callback = function callback(url) {
        _Log.Log.debug("IFrameNavigator.callback");

        try {
            _IFrameWindow.IFrameWindow.notifyParent(url);
            return Promise.resolve();
        } catch (e) {
            return Promise.reject(e);
        }
    };

    return IFrameNavigator;
}();

/***/ }),

/***/ "./src/IFrameWindow.js":
/*!*****************************!*\
  !*** ./src/IFrameWindow.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IFrameWindow = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DefaultTimeout = 10000;

var IFrameWindow = exports.IFrameWindow = function () {
    function IFrameWindow(params) {
        var _this = this;

        _classCallCheck(this, IFrameWindow);

        this._promise = new Promise(function (resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
        });

        this._boundMessageEvent = this._message.bind(this);
        window.addEventListener("message", this._boundMessageEvent, false);

        this._frame = window.document.createElement("iframe");

        // shotgun approach
        this._frame.style.visibility = "hidden";
        this._frame.style.position = "absolute";
        this._frame.style.width = 0;
        this._frame.style.height = 0;

        window.document.body.appendChild(this._frame);
    }

    IFrameWindow.prototype.navigate = function navigate(params) {
        if (!params || !params.url) {
            this._error("No url provided");
        } else {
            var timeout = params.silentRequestTimeout || DefaultTimeout;
            _Log.Log.debug("IFrameWindow.navigate: Using timeout of:", timeout);
            this._timer = window.setTimeout(this._timeout.bind(this), timeout);
            this._frame.src = params.url;
        }

        return this.promise;
    };

    IFrameWindow.prototype._success = function _success(data) {
        this._cleanup();

        _Log.Log.debug("IFrameWindow: Successful response from frame window");
        this._resolve(data);
    };

    IFrameWindow.prototype._error = function _error(message) {
        this._cleanup();

        _Log.Log.error(message);
        this._reject(new Error(message));
    };

    IFrameWindow.prototype.close = function close() {
        this._cleanup();
    };

    IFrameWindow.prototype._cleanup = function _cleanup() {
        if (this._frame) {
            _Log.Log.debug("IFrameWindow: cleanup");

            window.removeEventListener("message", this._boundMessageEvent, false);
            window.clearTimeout(this._timer);
            window.document.body.removeChild(this._frame);

            this._timer = null;
            this._frame = null;
            this._boundMessageEvent = null;
        }
    };

    IFrameWindow.prototype._timeout = function _timeout() {
        _Log.Log.debug("IFrameWindow.timeout");
        this._error("Frame window timed out");
    };

    IFrameWindow.prototype._message = function _message(e) {
        _Log.Log.debug("IFrameWindow.message");

        if (this._timer && e.origin === this._origin && e.source === this._frame.contentWindow) {
            var url = e.data;
            if (url) {
                this._success({ url: url });
            } else {
                this._error("Invalid response from frame");
            }
        }
    };

    IFrameWindow.notifyParent = function notifyParent(url) {
        _Log.Log.debug("IFrameWindow.notifyParent");
        url = url || window.location.href;
        if (url) {
            _Log.Log.debug("IFrameWindow.notifyParent: posting url message to parent");
            window.parent.postMessage(url, location.protocol + "//" + location.host);
        }
    };

    _createClass(IFrameWindow, [{
        key: "promise",
        get: function get() {
            return this._promise;
        }
    }, {
        key: "_origin",
        get: function get() {
            return location.protocol + "//" + location.host;
        }
    }]);

    return IFrameWindow;
}();

/***/ }),

/***/ "./src/InMemoryWebStorage.js":
/*!***********************************!*\
  !*** ./src/InMemoryWebStorage.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InMemoryWebStorage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InMemoryWebStorage = exports.InMemoryWebStorage = function () {
    function InMemoryWebStorage() {
        _classCallCheck(this, InMemoryWebStorage);

        this._data = {};
    }

    InMemoryWebStorage.prototype.getItem = function getItem(key) {
        _Log.Log.debug("InMemoryWebStorage.getItem", key);
        return this._data[key];
    };

    InMemoryWebStorage.prototype.setItem = function setItem(key, value) {
        _Log.Log.debug("InMemoryWebStorage.setItem", key);
        this._data[key] = value;
    };

    InMemoryWebStorage.prototype.removeItem = function removeItem(key) {
        _Log.Log.debug("InMemoryWebStorage.removeItem", key);
        delete this._data[key];
    };

    InMemoryWebStorage.prototype.key = function key(index) {
        return Object.getOwnPropertyNames(this._data)[index];
    };

    _createClass(InMemoryWebStorage, [{
        key: "length",
        get: function get() {
            return Object.getOwnPropertyNames(this._data).length;
        }
    }]);

    return InMemoryWebStorage;
}();

/***/ }),

/***/ "./src/JoseUtilImpl.js":
/*!*****************************!*\
  !*** ./src/JoseUtilImpl.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getJoseUtil;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

function getJoseUtil(_ref) {
    var jws = _ref.jws,
        KeyUtil = _ref.KeyUtil,
        X509 = _ref.X509,
        crypto = _ref.crypto,
        hextob64u = _ref.hextob64u,
        b64tohex = _ref.b64tohex,
        AllowedSigningAlgs = _ref.AllowedSigningAlgs;

    return function () {
        function JoseUtil() {
            _classCallCheck(this, JoseUtil);
        }

        JoseUtil.parseJwt = function parseJwt(jwt) {
            _Log.Log.debug("JoseUtil.parseJwt");
            try {
                var token = jws.JWS.parse(jwt);
                return {
                    header: token.headerObj,
                    payload: token.payloadObj
                };
            } catch (e) {
                _Log.Log.error(e);
            }
        };

        JoseUtil.validateJwt = function validateJwt(jwt, key, issuer, audience, clockSkew, now, timeInsensitive) {
            _Log.Log.debug("JoseUtil.validateJwt");

            try {
                if (key.kty === "RSA") {
                    if (key.e && key.n) {
                        key = KeyUtil.getKey(key);
                    } else if (key.x5c && key.x5c.length) {
                        var hex = b64tohex(key.x5c[0]);
                        key = X509.getPublicKeyFromCertHex(hex);
                    } else {
                        _Log.Log.error("JoseUtil.validateJwt: RSA key missing key material", key);
                        return Promise.reject(new Error("RSA key missing key material"));
                    }
                } else if (key.kty === "EC") {
                    if (key.crv && key.x && key.y) {
                        key = KeyUtil.getKey(key);
                    } else {
                        _Log.Log.error("JoseUtil.validateJwt: EC key missing key material", key);
                        return Promise.reject(new Error("EC key missing key material"));
                    }
                } else {
                    _Log.Log.error("JoseUtil.validateJwt: Unsupported key type", key && key.kty);
                    return Promise.reject(new Error( true && key.kty));
                }

                return JoseUtil._validateJwt(jwt, key, issuer, audience, clockSkew, now, timeInsensitive);
            } catch (e) {
                _Log.Log.error(e && e.message || e);
                return Promise.reject("JWT validation failed");
            }
        };

        JoseUtil.validateJwtAttributes = function validateJwtAttributes(jwt, issuer, audience, clockSkew, now, timeInsensitive) {
            if (!clockSkew) {
                clockSkew = 0;
            }

            if (!now) {
                now = parseInt(Date.now() / 1000);
            }

            var payload = JoseUtil.parseJwt(jwt).payload;

            if (!payload.iss) {
                _Log.Log.error("JoseUtil._validateJwt: issuer was not provided");
                return Promise.reject(new Error("issuer was not provided"));
            }
            if (payload.iss !== issuer) {
                _Log.Log.error("JoseUtil._validateJwt: Invalid issuer in token", payload.iss);
                return Promise.reject(new Error("Invalid issuer in token: " + payload.iss));
            }

            if (!payload.aud) {
                _Log.Log.error("JoseUtil._validateJwt: aud was not provided");
                return Promise.reject(new Error("aud was not provided"));
            }
            var validAudience = payload.aud === audience || Array.isArray(payload.aud) && payload.aud.indexOf(audience) >= 0;
            if (!validAudience) {
                _Log.Log.error("JoseUtil._validateJwt: Invalid audience in token", payload.aud);
                return Promise.reject(new Error("Invalid audience in token: " + payload.aud));
            }
            if (payload.azp && payload.azp !== audience) {
                _Log.Log.error("JoseUtil._validateJwt: Invalid azp in token", payload.azp);
                return Promise.reject(new Error("Invalid azp in token: " + payload.azp));
            }

            if (!timeInsensitive) {
                var lowerNow = now + clockSkew;
                var upperNow = now - clockSkew;

                if (!payload.iat) {
                    _Log.Log.error("JoseUtil._validateJwt: iat was not provided");
                    return Promise.reject(new Error("iat was not provided"));
                }
                if (lowerNow < payload.iat) {
                    _Log.Log.error("JoseUtil._validateJwt: iat is in the future", payload.iat);
                    return Promise.reject(new Error("iat is in the future: " + payload.iat));
                }

                if (payload.nbf && lowerNow < payload.nbf) {
                    _Log.Log.error("JoseUtil._validateJwt: nbf is in the future", payload.nbf);
                    return Promise.reject(new Error("nbf is in the future: " + payload.nbf));
                }

                if (!payload.exp) {
                    _Log.Log.error("JoseUtil._validateJwt: exp was not provided");
                    return Promise.reject(new Error("exp was not provided"));
                }
                if (payload.exp < upperNow) {
                    _Log.Log.error("JoseUtil._validateJwt: exp is in the past", payload.exp);
                    return Promise.reject(new Error("exp is in the past:" + payload.exp));
                }
            }

            return Promise.resolve(payload);
        };

        JoseUtil._validateJwt = function _validateJwt(jwt, key, issuer, audience, clockSkew, now, timeInsensitive) {

            return JoseUtil.validateJwtAttributes(jwt, issuer, audience, clockSkew, now, timeInsensitive).then(function (payload) {
                try {
                    if (!jws.JWS.verify(jwt, key, AllowedSigningAlgs)) {
                        _Log.Log.error("JoseUtil._validateJwt: signature validation failed");
                        return Promise.reject(new Error("signature validation failed"));
                    }

                    return payload;
                } catch (e) {
                    _Log.Log.error(e && e.message || e);
                    return Promise.reject(new Error("signature validation failed"));
                }
            });
        };

        JoseUtil.hashString = function hashString(value, alg) {
            try {
                return crypto.Util.hashString(value, alg);
            } catch (e) {
                _Log.Log.error(e);
            }
        };

        JoseUtil.hexToBase64Url = function hexToBase64Url(value) {
            try {
                return hextob64u(value);
            } catch (e) {
                _Log.Log.error(e);
            }
        };

        return JoseUtil;
    }();
}
module.exports = exports["default"];

/***/ }),

/***/ "./src/JoseUtilRsa.js":
/*!****************************!*\
  !*** ./src/JoseUtilRsa.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JoseUtil = undefined;

var _rsa = __webpack_require__(/*! ./crypto/rsa */ "./src/crypto/rsa.js");

var _JoseUtilImpl = __webpack_require__(/*! ./JoseUtilImpl */ "./src/JoseUtilImpl.js");

var _JoseUtilImpl2 = _interopRequireDefault(_JoseUtilImpl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JoseUtil = exports.JoseUtil = (0, _JoseUtilImpl2.default)({ jws: _rsa.jws, KeyUtil: _rsa.KeyUtil, X509: _rsa.X509, crypto: _rsa.crypto, hextob64u: _rsa.hextob64u, b64tohex: _rsa.b64tohex, AllowedSigningAlgs: _rsa.AllowedSigningAlgs });

/***/ }),

/***/ "./src/JsonService.js":
/*!****************************!*\
  !*** ./src/JsonService.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.JsonService = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var JsonService = exports.JsonService = function () {
    function JsonService() {
        var additionalContentTypes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var XMLHttpRequestCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Global.Global.XMLHttpRequest;
        var jwtHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        _classCallCheck(this, JsonService);

        if (additionalContentTypes && Array.isArray(additionalContentTypes)) {
            this._contentTypes = additionalContentTypes.slice();
        } else {
            this._contentTypes = [];
        }
        this._contentTypes.push('application/json');
        if (jwtHandler) {
            this._contentTypes.push('application/jwt');
        }

        this._XMLHttpRequest = XMLHttpRequestCtor;
        this._jwtHandler = jwtHandler;
    }

    JsonService.prototype.getJson = function getJson(url, token) {
        var _this = this;

        if (!url) {
            _Log.Log.error("JsonService.getJson: No url passed");
            throw new Error("url");
        }

        _Log.Log.debug("JsonService.getJson, url: ", url);

        return new Promise(function (resolve, reject) {

            var req = new _this._XMLHttpRequest();
            req.open('GET', url);

            var allowedContentTypes = _this._contentTypes;
            var jwtHandler = _this._jwtHandler;

            req.onload = function () {
                _Log.Log.debug("JsonService.getJson: HTTP response received, status", req.status);

                if (req.status === 200) {

                    var contentType = req.getResponseHeader("Content-Type");
                    if (contentType) {

                        var found = allowedContentTypes.find(function (item) {
                            if (contentType.startsWith(item)) {
                                return true;
                            }
                        });

                        if (found == "application/jwt") {
                            jwtHandler(req).then(resolve, reject);
                            return;
                        }

                        if (found) {
                            try {
                                resolve(JSON.parse(req.responseText));
                                return;
                            } catch (e) {
                                _Log.Log.error("JsonService.getJson: Error parsing JSON response", e.message);
                                reject(e);
                                return;
                            }
                        }
                    }

                    reject(Error("Invalid response Content-Type: " + contentType + ", from URL: " + url));
                } else {
                    reject(Error(req.statusText + " (" + req.status + ")"));
                }
            };

            req.onerror = function () {
                _Log.Log.error("JsonService.getJson: network error");
                reject(Error("Network Error"));
            };

            if (token) {
                _Log.Log.debug("JsonService.getJson: token passed, setting Authorization header");
                req.setRequestHeader("Authorization", "Bearer " + token);
            }

            req.send();
        });
    };

    JsonService.prototype.postForm = function postForm(url, payload) {
        var _this2 = this;

        if (!url) {
            _Log.Log.error("JsonService.postForm: No url passed");
            throw new Error("url");
        }

        _Log.Log.debug("JsonService.postForm, url: ", url);

        return new Promise(function (resolve, reject) {

            var req = new _this2._XMLHttpRequest();
            req.open('POST', url);

            var allowedContentTypes = _this2._contentTypes;

            req.onload = function () {
                _Log.Log.debug("JsonService.postForm: HTTP response received, status", req.status);

                if (req.status === 200) {

                    var contentType = req.getResponseHeader("Content-Type");
                    if (contentType) {

                        var found = allowedContentTypes.find(function (item) {
                            if (contentType.startsWith(item)) {
                                return true;
                            }
                        });

                        if (found) {
                            try {
                                resolve(JSON.parse(req.responseText));
                                return;
                            } catch (e) {
                                _Log.Log.error("JsonService.postForm: Error parsing JSON response", e.message);
                                reject(e);
                                return;
                            }
                        }
                    }

                    reject(Error("Invalid response Content-Type: " + contentType + ", from URL: " + url));
                    return;
                }

                if (req.status === 400) {

                    var contentType = req.getResponseHeader("Content-Type");
                    if (contentType) {

                        var found = allowedContentTypes.find(function (item) {
                            if (contentType.startsWith(item)) {
                                return true;
                            }
                        });

                        if (found) {
                            try {
                                var payload = JSON.parse(req.responseText);
                                if (payload && payload.error) {
                                    _Log.Log.error("JsonService.postForm: Error from server: ", payload.error);
                                    reject(new Error(payload.error));
                                    return;
                                }
                            } catch (e) {
                                _Log.Log.error("JsonService.postForm: Error parsing JSON response", e.message);
                                reject(e);
                                return;
                            }
                        }
                    }
                }

                reject(Error(req.statusText + " (" + req.status + ")"));
            };

            req.onerror = function () {
                _Log.Log.error("JsonService.postForm: network error");
                reject(Error("Network Error"));
            };

            var body = "";
            for (var key in payload) {

                var value = payload[key];

                if (value) {

                    if (body.length > 0) {
                        body += "&";
                    }

                    body += encodeURIComponent(key);
                    body += "=";
                    body += encodeURIComponent(value);
                }
            }

            req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            req.send(body);
        });
    };

    return JsonService;
}();

/***/ }),

/***/ "./src/Log.js":
/*!********************!*\
  !*** ./src/Log.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var nopLogger = {
    debug: function debug() {},
    info: function info() {},
    warn: function warn() {},
    error: function error() {}
};

var NONE = 0;
var ERROR = 1;
var WARN = 2;
var INFO = 3;
var DEBUG = 4;

var logger = void 0;
var level = void 0;

var Log = exports.Log = function () {
    function Log() {
        _classCallCheck(this, Log);
    }

    Log.reset = function reset() {
        level = INFO;
        logger = nopLogger;
    };

    Log.debug = function debug() {
        if (level >= DEBUG) {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            logger.debug.apply(logger, Array.from(args));
        }
    };

    Log.info = function info() {
        if (level >= INFO) {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            logger.info.apply(logger, Array.from(args));
        }
    };

    Log.warn = function warn() {
        if (level >= WARN) {
            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
            }

            logger.warn.apply(logger, Array.from(args));
        }
    };

    Log.error = function error() {
        if (level >= ERROR) {
            for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                args[_key4] = arguments[_key4];
            }

            logger.error.apply(logger, Array.from(args));
        }
    };

    _createClass(Log, null, [{
        key: "NONE",
        get: function get() {
            return NONE;
        }
    }, {
        key: "ERROR",
        get: function get() {
            return ERROR;
        }
    }, {
        key: "WARN",
        get: function get() {
            return WARN;
        }
    }, {
        key: "INFO",
        get: function get() {
            return INFO;
        }
    }, {
        key: "DEBUG",
        get: function get() {
            return DEBUG;
        }
    }, {
        key: "level",
        get: function get() {
            return level;
        },
        set: function set(value) {
            if (NONE <= value && value <= DEBUG) {
                level = value;
            } else {
                throw new Error("Invalid log level");
            }
        }
    }, {
        key: "logger",
        get: function get() {
            return logger;
        },
        set: function set(value) {
            if (!value.debug && value.info) {
                // just to stay backwards compat. can remove in 2.0
                value.debug = value.info;
            }

            if (value.debug && value.info && value.warn && value.error) {
                logger = value;
            } else {
                throw new Error("Invalid logger");
            }
        }
    }]);

    return Log;
}();

Log.reset();

/***/ }),

/***/ "./src/MetadataService.js":
/*!********************************!*\
  !*** ./src/MetadataService.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MetadataService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _JsonService = __webpack_require__(/*! ./JsonService.js */ "./src/JsonService.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OidcMetadataUrlPath = '.well-known/openid-configuration';

var MetadataService = exports.MetadataService = function () {
    function MetadataService(settings) {
        var JsonServiceCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _JsonService.JsonService;

        _classCallCheck(this, MetadataService);

        if (!settings) {
            _Log.Log.error("MetadataService: No settings passed to MetadataService");
            throw new Error("settings");
        }

        this._settings = settings;
        this._jsonService = new JsonServiceCtor(['application/jwk-set+json']);
    }

    MetadataService.prototype.getMetadata = function getMetadata() {
        var _this = this;

        if (this._settings.metadata) {
            _Log.Log.debug("MetadataService.getMetadata: Returning metadata from settings");
            return Promise.resolve(this._settings.metadata);
        }

        if (!this.metadataUrl) {
            _Log.Log.error("MetadataService.getMetadata: No authority or metadataUrl configured on settings");
            return Promise.reject(new Error("No authority or metadataUrl configured on settings"));
        }

        _Log.Log.debug("MetadataService.getMetadata: getting metadata from", this.metadataUrl);

        return this._jsonService.getJson(this.metadataUrl).then(function (metadata) {
            _Log.Log.debug("MetadataService.getMetadata: json received");
            _this._settings.metadata = metadata;
            return metadata;
        });
    };

    MetadataService.prototype.getIssuer = function getIssuer() {
        return this._getMetadataProperty("issuer");
    };

    MetadataService.prototype.getAuthorizationEndpoint = function getAuthorizationEndpoint() {
        return this._getMetadataProperty("authorization_endpoint");
    };

    MetadataService.prototype.getUserInfoEndpoint = function getUserInfoEndpoint() {
        return this._getMetadataProperty("userinfo_endpoint");
    };

    MetadataService.prototype.getTokenEndpoint = function getTokenEndpoint() {
        var optional = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        return this._getMetadataProperty("token_endpoint", optional);
    };

    MetadataService.prototype.getCheckSessionIframe = function getCheckSessionIframe() {
        return this._getMetadataProperty("check_session_iframe", true);
    };

    MetadataService.prototype.getEndSessionEndpoint = function getEndSessionEndpoint() {
        return this._getMetadataProperty("end_session_endpoint", true);
    };

    MetadataService.prototype.getRevocationEndpoint = function getRevocationEndpoint() {
        return this._getMetadataProperty("revocation_endpoint", true);
    };

    MetadataService.prototype.getKeysEndpoint = function getKeysEndpoint() {
        return this._getMetadataProperty("jwks_uri", true);
    };

    MetadataService.prototype._getMetadataProperty = function _getMetadataProperty(name) {
        var optional = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        _Log.Log.debug("MetadataService.getMetadataProperty for: " + name);

        return this.getMetadata().then(function (metadata) {
            _Log.Log.debug("MetadataService.getMetadataProperty: metadata recieved");

            if (metadata[name] === undefined) {

                if (optional === true) {
                    _Log.Log.warn("MetadataService.getMetadataProperty: Metadata does not contain optional property " + name);
                    return undefined;
                } else {
                    _Log.Log.error("MetadataService.getMetadataProperty: Metadata does not contain property " + name);
                    throw new Error("Metadata does not contain property " + name);
                }
            }

            return metadata[name];
        });
    };

    MetadataService.prototype.getSigningKeys = function getSigningKeys() {
        var _this2 = this;

        if (this._settings.signingKeys) {
            _Log.Log.debug("MetadataService.getSigningKeys: Returning signingKeys from settings");
            return Promise.resolve(this._settings.signingKeys);
        }

        return this._getMetadataProperty("jwks_uri").then(function (jwks_uri) {
            _Log.Log.debug("MetadataService.getSigningKeys: jwks_uri received", jwks_uri);

            return _this2._jsonService.getJson(jwks_uri).then(function (keySet) {
                _Log.Log.debug("MetadataService.getSigningKeys: key set received", keySet);

                if (!keySet.keys) {
                    _Log.Log.error("MetadataService.getSigningKeys: Missing keys on keyset");
                    throw new Error("Missing keys on keyset");
                }

                _this2._settings.signingKeys = keySet.keys;
                return _this2._settings.signingKeys;
            });
        });
    };

    _createClass(MetadataService, [{
        key: 'metadataUrl',
        get: function get() {
            if (!this._metadataUrl) {
                if (this._settings.metadataUrl) {
                    this._metadataUrl = this._settings.metadataUrl;
                } else {
                    this._metadataUrl = this._settings.authority;

                    if (this._metadataUrl && this._metadataUrl.indexOf(OidcMetadataUrlPath) < 0) {
                        if (this._metadataUrl[this._metadataUrl.length - 1] !== '/') {
                            this._metadataUrl += '/';
                        }
                        this._metadataUrl += OidcMetadataUrlPath;
                    }
                }
            }

            return this._metadataUrl;
        }
    }]);

    return MetadataService;
}();

/***/ }),

/***/ "./src/OidcClient.js":
/*!***************************!*\
  !*** ./src/OidcClient.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OidcClient = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _OidcClientSettings = __webpack_require__(/*! ./OidcClientSettings.js */ "./src/OidcClientSettings.js");

var _ErrorResponse = __webpack_require__(/*! ./ErrorResponse.js */ "./src/ErrorResponse.js");

var _SigninRequest = __webpack_require__(/*! ./SigninRequest.js */ "./src/SigninRequest.js");

var _SigninResponse = __webpack_require__(/*! ./SigninResponse.js */ "./src/SigninResponse.js");

var _SignoutRequest = __webpack_require__(/*! ./SignoutRequest.js */ "./src/SignoutRequest.js");

var _SignoutResponse = __webpack_require__(/*! ./SignoutResponse.js */ "./src/SignoutResponse.js");

var _SigninState = __webpack_require__(/*! ./SigninState.js */ "./src/SigninState.js");

var _State = __webpack_require__(/*! ./State.js */ "./src/State.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OidcClient = exports.OidcClient = function () {
    function OidcClient() {
        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, OidcClient);

        if (settings instanceof _OidcClientSettings.OidcClientSettings) {
            this._settings = settings;
        } else {
            this._settings = new _OidcClientSettings.OidcClientSettings(settings);
        }
    }

    OidcClient.prototype.createSigninRequest = function createSigninRequest() {
        var _this = this;

        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            response_type = _ref.response_type,
            scope = _ref.scope,
            redirect_uri = _ref.redirect_uri,
            data = _ref.data,
            state = _ref.state,
            prompt = _ref.prompt,
            display = _ref.display,
            max_age = _ref.max_age,
            ui_locales = _ref.ui_locales,
            id_token_hint = _ref.id_token_hint,
            login_hint = _ref.login_hint,
            acr_values = _ref.acr_values,
            resource = _ref.resource,
            request = _ref.request,
            request_uri = _ref.request_uri,
            response_mode = _ref.response_mode,
            extraQueryParams = _ref.extraQueryParams,
            extraTokenParams = _ref.extraTokenParams,
            request_type = _ref.request_type,
            skipUserInfo = _ref.skipUserInfo;

        var stateStore = arguments[1];

        _Log.Log.debug("OidcClient.createSigninRequest");

        var client_id = this._settings.client_id;
        response_type = response_type || this._settings.response_type;
        scope = scope || this._settings.scope;
        redirect_uri = redirect_uri || this._settings.redirect_uri;

        // id_token_hint, login_hint aren't allowed on _settings
        prompt = prompt || this._settings.prompt;
        display = display || this._settings.display;
        max_age = max_age || this._settings.max_age;
        ui_locales = ui_locales || this._settings.ui_locales;
        acr_values = acr_values || this._settings.acr_values;
        resource = resource || this._settings.resource;
        response_mode = response_mode || this._settings.response_mode;
        extraQueryParams = extraQueryParams || this._settings.extraQueryParams;
        extraTokenParams = extraTokenParams || this._settings.extraTokenParams;

        var authority = this._settings.authority;

        if (_SigninRequest.SigninRequest.isCode(response_type) && response_type !== "code") {
            return Promise.reject(new Error("OpenID Connect hybrid flow is not supported"));
        }

        return this._metadataService.getAuthorizationEndpoint().then(function (url) {
            _Log.Log.debug("OidcClient.createSigninRequest: Received authorization endpoint", url);

            var signinRequest = new _SigninRequest.SigninRequest({
                url: url,
                client_id: client_id,
                redirect_uri: redirect_uri,
                response_type: response_type,
                scope: scope,
                data: data || state,
                authority: authority,
                prompt: prompt, display: display, max_age: max_age, ui_locales: ui_locales, id_token_hint: id_token_hint, login_hint: login_hint, acr_values: acr_values,
                resource: resource, request: request, request_uri: request_uri, extraQueryParams: extraQueryParams, extraTokenParams: extraTokenParams, request_type: request_type, response_mode: response_mode,
                client_secret: _this._settings.client_secret,
                skipUserInfo: skipUserInfo
            });

            var signinState = signinRequest.state;
            stateStore = stateStore || _this._stateStore;

            return stateStore.set(signinState.id, signinState.toStorageString()).then(function () {
                return signinRequest;
            });
        });
    };

    OidcClient.prototype.readSigninResponseState = function readSigninResponseState(url, stateStore) {
        var removeState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        _Log.Log.debug("OidcClient.readSigninResponseState");

        var useQuery = this._settings.response_mode === "query" || !this._settings.response_mode && _SigninRequest.SigninRequest.isCode(this._settings.response_type);
        var delimiter = useQuery ? "?" : "#";

        var response = new _SigninResponse.SigninResponse(url, delimiter);

        if (!response.state) {
            _Log.Log.error("OidcClient.readSigninResponseState: No state in response");
            return Promise.reject(new Error("No state in response"));
        }

        stateStore = stateStore || this._stateStore;

        var stateApi = removeState ? stateStore.remove.bind(stateStore) : stateStore.get.bind(stateStore);

        return stateApi(response.state).then(function (storedStateString) {
            if (!storedStateString) {
                _Log.Log.error("OidcClient.readSigninResponseState: No matching state found in storage");
                throw new Error("No matching state found in storage");
            }

            var state = _SigninState.SigninState.fromStorageString(storedStateString);
            return { state: state, response: response };
        });
    };

    OidcClient.prototype.processSigninResponse = function processSigninResponse(url, stateStore) {
        var _this2 = this;

        _Log.Log.debug("OidcClient.processSigninResponse");

        return this.readSigninResponseState(url, stateStore, true).then(function (_ref2) {
            var state = _ref2.state,
                response = _ref2.response;

            _Log.Log.debug("OidcClient.processSigninResponse: Received state from storage; validating response");
            return _this2._validator.validateSigninResponse(state, response);
        });
    };

    OidcClient.prototype.createSignoutRequest = function createSignoutRequest() {
        var _this3 = this;

        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            id_token_hint = _ref3.id_token_hint,
            data = _ref3.data,
            state = _ref3.state,
            post_logout_redirect_uri = _ref3.post_logout_redirect_uri,
            extraQueryParams = _ref3.extraQueryParams,
            request_type = _ref3.request_type;

        var stateStore = arguments[1];

        _Log.Log.debug("OidcClient.createSignoutRequest");

        post_logout_redirect_uri = post_logout_redirect_uri || this._settings.post_logout_redirect_uri;
        extraQueryParams = extraQueryParams || this._settings.extraQueryParams;

        return this._metadataService.getEndSessionEndpoint().then(function (url) {
            if (!url) {
                _Log.Log.error("OidcClient.createSignoutRequest: No end session endpoint url returned");
                throw new Error("no end session endpoint");
            }

            _Log.Log.debug("OidcClient.createSignoutRequest: Received end session endpoint", url);

            var request = new _SignoutRequest.SignoutRequest({
                url: url,
                id_token_hint: id_token_hint,
                post_logout_redirect_uri: post_logout_redirect_uri,
                data: data || state,
                extraQueryParams: extraQueryParams,
                request_type: request_type
            });

            var signoutState = request.state;
            if (signoutState) {
                _Log.Log.debug("OidcClient.createSignoutRequest: Signout request has state to persist");

                stateStore = stateStore || _this3._stateStore;
                stateStore.set(signoutState.id, signoutState.toStorageString());
            }

            return request;
        });
    };

    OidcClient.prototype.readSignoutResponseState = function readSignoutResponseState(url, stateStore) {
        var removeState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        _Log.Log.debug("OidcClient.readSignoutResponseState");

        var response = new _SignoutResponse.SignoutResponse(url);
        if (!response.state) {
            _Log.Log.debug("OidcClient.readSignoutResponseState: No state in response");

            if (response.error) {
                _Log.Log.warn("OidcClient.readSignoutResponseState: Response was error: ", response.error);
                return Promise.reject(new _ErrorResponse.ErrorResponse(response));
            }

            return Promise.resolve({ state: undefined, response: response });
        }

        var stateKey = response.state;

        stateStore = stateStore || this._stateStore;

        var stateApi = removeState ? stateStore.remove.bind(stateStore) : stateStore.get.bind(stateStore);
        return stateApi(stateKey).then(function (storedStateString) {
            if (!storedStateString) {
                _Log.Log.error("OidcClient.readSignoutResponseState: No matching state found in storage");
                throw new Error("No matching state found in storage");
            }

            var state = _State.State.fromStorageString(storedStateString);

            return { state: state, response: response };
        });
    };

    OidcClient.prototype.processSignoutResponse = function processSignoutResponse(url, stateStore) {
        var _this4 = this;

        _Log.Log.debug("OidcClient.processSignoutResponse");

        return this.readSignoutResponseState(url, stateStore, true).then(function (_ref4) {
            var state = _ref4.state,
                response = _ref4.response;

            if (state) {
                _Log.Log.debug("OidcClient.processSignoutResponse: Received state from storage; validating response");
                return _this4._validator.validateSignoutResponse(state, response);
            } else {
                _Log.Log.debug("OidcClient.processSignoutResponse: No state from storage; skipping validating response");
                return response;
            }
        });
    };

    OidcClient.prototype.clearStaleState = function clearStaleState(stateStore) {
        _Log.Log.debug("OidcClient.clearStaleState");

        stateStore = stateStore || this._stateStore;

        return _State.State.clearStaleState(stateStore, this.settings.staleStateAge);
    };

    _createClass(OidcClient, [{
        key: '_stateStore',
        get: function get() {
            return this.settings.stateStore;
        }
    }, {
        key: '_validator',
        get: function get() {
            return this.settings.validator;
        }
    }, {
        key: '_metadataService',
        get: function get() {
            return this.settings.metadataService;
        }
    }, {
        key: 'settings',
        get: function get() {
            return this._settings;
        }
    }, {
        key: 'metadataService',
        get: function get() {
            return this._metadataService;
        }
    }]);

    return OidcClient;
}();

/***/ }),

/***/ "./src/OidcClientSettings.js":
/*!***********************************!*\
  !*** ./src/OidcClientSettings.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OidcClientSettings = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _ClockService = __webpack_require__(/*! ./ClockService.js */ "./src/ClockService.js");

var _WebStorageStateStore = __webpack_require__(/*! ./WebStorageStateStore.js */ "./src/WebStorageStateStore.js");

var _ResponseValidator = __webpack_require__(/*! ./ResponseValidator.js */ "./src/ResponseValidator.js");

var _MetadataService = __webpack_require__(/*! ./MetadataService.js */ "./src/MetadataService.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OidcMetadataUrlPath = '.well-known/openid-configuration';

var DefaultResponseType = "id_token";
var DefaultScope = "openid";
var DefaultStaleStateAge = 60 * 15; // seconds
var DefaultClockSkewInSeconds = 60 * 5;

var OidcClientSettings = exports.OidcClientSettings = function () {
    function OidcClientSettings() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            authority = _ref.authority,
            metadataUrl = _ref.metadataUrl,
            metadata = _ref.metadata,
            signingKeys = _ref.signingKeys,
            client_id = _ref.client_id,
            client_secret = _ref.client_secret,
            _ref$response_type = _ref.response_type,
            response_type = _ref$response_type === undefined ? DefaultResponseType : _ref$response_type,
            _ref$scope = _ref.scope,
            scope = _ref$scope === undefined ? DefaultScope : _ref$scope,
            redirect_uri = _ref.redirect_uri,
            post_logout_redirect_uri = _ref.post_logout_redirect_uri,
            prompt = _ref.prompt,
            display = _ref.display,
            max_age = _ref.max_age,
            ui_locales = _ref.ui_locales,
            acr_values = _ref.acr_values,
            resource = _ref.resource,
            response_mode = _ref.response_mode,
            _ref$filterProtocolCl = _ref.filterProtocolClaims,
            filterProtocolClaims = _ref$filterProtocolCl === undefined ? true : _ref$filterProtocolCl,
            _ref$loadUserInfo = _ref.loadUserInfo,
            loadUserInfo = _ref$loadUserInfo === undefined ? true : _ref$loadUserInfo,
            _ref$staleStateAge = _ref.staleStateAge,
            staleStateAge = _ref$staleStateAge === undefined ? DefaultStaleStateAge : _ref$staleStateAge,
            _ref$clockSkew = _ref.clockSkew,
            clockSkew = _ref$clockSkew === undefined ? DefaultClockSkewInSeconds : _ref$clockSkew,
            _ref$clockService = _ref.clockService,
            clockService = _ref$clockService === undefined ? new _ClockService.ClockService() : _ref$clockService,
            _ref$userInfoJwtIssue = _ref.userInfoJwtIssuer,
            userInfoJwtIssuer = _ref$userInfoJwtIssue === undefined ? 'OP' : _ref$userInfoJwtIssue,
            _ref$stateStore = _ref.stateStore,
            stateStore = _ref$stateStore === undefined ? new _WebStorageStateStore.WebStorageStateStore() : _ref$stateStore,
            _ref$ResponseValidato = _ref.ResponseValidatorCtor,
            ResponseValidatorCtor = _ref$ResponseValidato === undefined ? _ResponseValidator.ResponseValidator : _ref$ResponseValidato,
            _ref$MetadataServiceC = _ref.MetadataServiceCtor,
            MetadataServiceCtor = _ref$MetadataServiceC === undefined ? _MetadataService.MetadataService : _ref$MetadataServiceC,
            _ref$extraQueryParams = _ref.extraQueryParams,
            extraQueryParams = _ref$extraQueryParams === undefined ? {} : _ref$extraQueryParams,
            _ref$extraTokenParams = _ref.extraTokenParams,
            extraTokenParams = _ref$extraTokenParams === undefined ? {} : _ref$extraTokenParams;

        _classCallCheck(this, OidcClientSettings);

        this._authority = authority;
        this._metadataUrl = metadataUrl;
        this._metadata = metadata;
        this._signingKeys = signingKeys;

        this._client_id = client_id;
        this._client_secret = client_secret;
        this._response_type = response_type;
        this._scope = scope;
        this._redirect_uri = redirect_uri;
        this._post_logout_redirect_uri = post_logout_redirect_uri;

        this._prompt = prompt;
        this._display = display;
        this._max_age = max_age;
        this._ui_locales = ui_locales;
        this._acr_values = acr_values;
        this._resource = resource;
        this._response_mode = response_mode;

        this._filterProtocolClaims = !!filterProtocolClaims;
        this._loadUserInfo = !!loadUserInfo;
        this._staleStateAge = staleStateAge;
        this._clockSkew = clockSkew;
        this._clockService = clockService;
        this._userInfoJwtIssuer = userInfoJwtIssuer;

        this._stateStore = stateStore;
        this._validator = new ResponseValidatorCtor(this);
        this._metadataService = new MetadataServiceCtor(this);

        this._extraQueryParams = (typeof extraQueryParams === 'undefined' ? 'undefined' : _typeof(extraQueryParams)) === 'object' ? extraQueryParams : {};
        this._extraTokenParams = (typeof extraTokenParams === 'undefined' ? 'undefined' : _typeof(extraTokenParams)) === 'object' ? extraTokenParams : {};
    }

    // client config


    // get the time
    OidcClientSettings.prototype.getEpochTime = function getEpochTime() {
        return this._clockService.getEpochTime();
    };

    _createClass(OidcClientSettings, [{
        key: 'client_id',
        get: function get() {
            return this._client_id;
        },
        set: function set(value) {
            if (!this._client_id) {
                // one-time set only
                this._client_id = value;
            } else {
                _Log.Log.error("OidcClientSettings.set_client_id: client_id has already been assigned.");
                throw new Error("client_id has already been assigned.");
            }
        }
    }, {
        key: 'client_secret',
        get: function get() {
            return this._client_secret;
        }
    }, {
        key: 'response_type',
        get: function get() {
            return this._response_type;
        }
    }, {
        key: 'scope',
        get: function get() {
            return this._scope;
        }
    }, {
        key: 'redirect_uri',
        get: function get() {
            return this._redirect_uri;
        }
    }, {
        key: 'post_logout_redirect_uri',
        get: function get() {
            return this._post_logout_redirect_uri;
        }

        // optional protocol params

    }, {
        key: 'prompt',
        get: function get() {
            return this._prompt;
        }
    }, {
        key: 'display',
        get: function get() {
            return this._display;
        }
    }, {
        key: 'max_age',
        get: function get() {
            return this._max_age;
        }
    }, {
        key: 'ui_locales',
        get: function get() {
            return this._ui_locales;
        }
    }, {
        key: 'acr_values',
        get: function get() {
            return this._acr_values;
        }
    }, {
        key: 'resource',
        get: function get() {
            return this._resource;
        }
    }, {
        key: 'response_mode',
        get: function get() {
            return this._response_mode;
        }

        // metadata

    }, {
        key: 'authority',
        get: function get() {
            return this._authority;
        },
        set: function set(value) {
            if (!this._authority) {
                // one-time set only
                this._authority = value;
            } else {
                _Log.Log.error("OidcClientSettings.set_authority: authority has already been assigned.");
                throw new Error("authority has already been assigned.");
            }
        }
    }, {
        key: 'metadataUrl',
        get: function get() {
            if (!this._metadataUrl) {
                this._metadataUrl = this.authority;

                if (this._metadataUrl && this._metadataUrl.indexOf(OidcMetadataUrlPath) < 0) {
                    if (this._metadataUrl[this._metadataUrl.length - 1] !== '/') {
                        this._metadataUrl += '/';
                    }
                    this._metadataUrl += OidcMetadataUrlPath;
                }
            }

            return this._metadataUrl;
        }

        // settable/cachable metadata values

    }, {
        key: 'metadata',
        get: function get() {
            return this._metadata;
        },
        set: function set(value) {
            this._metadata = value;
        }
    }, {
        key: 'signingKeys',
        get: function get() {
            return this._signingKeys;
        },
        set: function set(value) {
            this._signingKeys = value;
        }

        // behavior flags

    }, {
        key: 'filterProtocolClaims',
        get: function get() {
            return this._filterProtocolClaims;
        }
    }, {
        key: 'loadUserInfo',
        get: function get() {
            return this._loadUserInfo;
        }
    }, {
        key: 'staleStateAge',
        get: function get() {
            return this._staleStateAge;
        }
    }, {
        key: 'clockSkew',
        get: function get() {
            return this._clockSkew;
        }
    }, {
        key: 'userInfoJwtIssuer',
        get: function get() {
            return this._userInfoJwtIssuer;
        }
    }, {
        key: 'stateStore',
        get: function get() {
            return this._stateStore;
        }
    }, {
        key: 'validator',
        get: function get() {
            return this._validator;
        }
    }, {
        key: 'metadataService',
        get: function get() {
            return this._metadataService;
        }

        // extra query params

    }, {
        key: 'extraQueryParams',
        get: function get() {
            return this._extraQueryParams;
        },
        set: function set(value) {
            if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
                this._extraQueryParams = value;
            } else {
                this._extraQueryParams = {};
            }
        }

        // extra token params

    }, {
        key: 'extraTokenParams',
        get: function get() {
            return this._extraTokenParams;
        },
        set: function set(value) {
            if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
                this._extraTokenParams = value;
            } else {
                this._extraTokenParams = {};
            }
        }
    }]);

    return OidcClientSettings;
}();

/***/ }),

/***/ "./src/PopupNavigator.js":
/*!*******************************!*\
  !*** ./src/PopupNavigator.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PopupNavigator = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _PopupWindow = __webpack_require__(/*! ./PopupWindow.js */ "./src/PopupWindow.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var PopupNavigator = exports.PopupNavigator = function () {
    function PopupNavigator() {
        _classCallCheck(this, PopupNavigator);
    }

    PopupNavigator.prototype.prepare = function prepare(params) {
        var popup = new _PopupWindow.PopupWindow(params);
        return Promise.resolve(popup);
    };

    PopupNavigator.prototype.callback = function callback(url, keepOpen, delimiter) {
        _Log.Log.debug("PopupNavigator.callback");

        try {
            _PopupWindow.PopupWindow.notifyOpener(url, keepOpen, delimiter);
            return Promise.resolve();
        } catch (e) {
            return Promise.reject(e);
        }
    };

    return PopupNavigator;
}();

/***/ }),

/***/ "./src/PopupWindow.js":
/*!****************************!*\
  !*** ./src/PopupWindow.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PopupWindow = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _UrlUtility = __webpack_require__(/*! ./UrlUtility.js */ "./src/UrlUtility.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CheckForPopupClosedInterval = 500;
var DefaultPopupFeatures = 'location=no,toolbar=no,width=500,height=500,left=100,top=100;';
//const DefaultPopupFeatures = 'location=no,toolbar=no,width=500,height=500,left=100,top=100;resizable=yes';

var DefaultPopupTarget = "_blank";

var PopupWindow = exports.PopupWindow = function () {
    function PopupWindow(params) {
        var _this = this;

        _classCallCheck(this, PopupWindow);

        this._promise = new Promise(function (resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
        });

        var target = params.popupWindowTarget || DefaultPopupTarget;
        var features = params.popupWindowFeatures || DefaultPopupFeatures;

        this._popup = window.open('', target, features);
        if (this._popup) {
            _Log.Log.debug("PopupWindow.ctor: popup successfully created");
            this._checkForPopupClosedTimer = window.setInterval(this._checkForPopupClosed.bind(this), CheckForPopupClosedInterval);
        }
    }

    PopupWindow.prototype.navigate = function navigate(params) {
        if (!this._popup) {
            this._error("PopupWindow.navigate: Error opening popup window");
        } else if (!params || !params.url) {
            this._error("PopupWindow.navigate: no url provided");
            this._error("No url provided");
        } else {
            _Log.Log.debug("PopupWindow.navigate: Setting URL in popup");

            this._id = params.id;
            if (this._id) {
                window["popupCallback_" + params.id] = this._callback.bind(this);
            }

            this._popup.focus();
            this._popup.window.location = params.url;
        }

        return this.promise;
    };

    PopupWindow.prototype._success = function _success(data) {
        _Log.Log.debug("PopupWindow.callback: Successful response from popup window");

        this._cleanup();
        this._resolve(data);
    };

    PopupWindow.prototype._error = function _error(message) {
        _Log.Log.error("PopupWindow.error: ", message);

        this._cleanup();
        this._reject(new Error(message));
    };

    PopupWindow.prototype.close = function close() {
        this._cleanup(false);
    };

    PopupWindow.prototype._cleanup = function _cleanup(keepOpen) {
        _Log.Log.debug("PopupWindow.cleanup");

        window.clearInterval(this._checkForPopupClosedTimer);
        this._checkForPopupClosedTimer = null;

        delete window["popupCallback_" + this._id];

        if (this._popup && !keepOpen) {
            this._popup.close();
        }
        this._popup = null;
    };

    PopupWindow.prototype._checkForPopupClosed = function _checkForPopupClosed() {
        if (!this._popup || this._popup.closed) {
            this._error("Popup window closed");
        }
    };

    PopupWindow.prototype._callback = function _callback(url, keepOpen) {
        this._cleanup(keepOpen);

        if (url) {
            _Log.Log.debug("PopupWindow.callback success");
            this._success({ url: url });
        } else {
            _Log.Log.debug("PopupWindow.callback: Invalid response from popup");
            this._error("Invalid response from popup");
        }
    };

    PopupWindow.notifyOpener = function notifyOpener(url, keepOpen, delimiter) {
        if (window.opener) {
            url = url || window.location.href;
            if (url) {
                var data = _UrlUtility.UrlUtility.parseUrlFragment(url, delimiter);

                if (data.state) {
                    var name = "popupCallback_" + data.state;
                    var callback = window.opener[name];
                    if (callback) {
                        _Log.Log.debug("PopupWindow.notifyOpener: passing url message to opener");
                        callback(url, keepOpen);
                    } else {
                        _Log.Log.warn("PopupWindow.notifyOpener: no matching callback found on opener");
                    }
                } else {
                    _Log.Log.warn("PopupWindow.notifyOpener: no state found in response url");
                }
            }
        } else {
            _Log.Log.warn("PopupWindow.notifyOpener: no window.opener. Can't complete notification.");
        }
    };

    _createClass(PopupWindow, [{
        key: 'promise',
        get: function get() {
            return this._promise;
        }
    }]);

    return PopupWindow;
}();

/***/ }),

/***/ "./src/RedirectNavigator.js":
/*!**********************************!*\
  !*** ./src/RedirectNavigator.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RedirectNavigator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RedirectNavigator = exports.RedirectNavigator = function () {
    function RedirectNavigator() {
        _classCallCheck(this, RedirectNavigator);
    }

    RedirectNavigator.prototype.prepare = function prepare() {
        return Promise.resolve(this);
    };

    RedirectNavigator.prototype.navigate = function navigate(params) {
        if (!params || !params.url) {
            _Log.Log.error("RedirectNavigator.navigate: No url provided");
            return Promise.reject(new Error("No url provided"));
        }

        if (params.useReplaceToNavigate) {
            window.location.replace(params.url);
        } else {
            window.location = params.url;
        }

        return Promise.resolve();
    };

    _createClass(RedirectNavigator, [{
        key: "url",
        get: function get() {
            return window.location.href;
        }
    }]);

    return RedirectNavigator;
}();

/***/ }),

/***/ "./src/ResponseValidator.js":
/*!**********************************!*\
  !*** ./src/ResponseValidator.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ResponseValidator = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _MetadataService = __webpack_require__(/*! ./MetadataService.js */ "./src/MetadataService.js");

var _UserInfoService = __webpack_require__(/*! ./UserInfoService.js */ "./src/UserInfoService.js");

var _TokenClient = __webpack_require__(/*! ./TokenClient.js */ "./src/TokenClient.js");

var _ErrorResponse = __webpack_require__(/*! ./ErrorResponse.js */ "./src/ErrorResponse.js");

var _JoseUtil = __webpack_require__(/*! ./JoseUtil.js */ "./src/JoseUtilRsa.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var ProtocolClaims = ["nonce", "at_hash", "iat", "nbf", "exp", "aud", "iss", "c_hash"];

var ResponseValidator = exports.ResponseValidator = function () {
    function ResponseValidator(settings) {
        var MetadataServiceCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _MetadataService.MetadataService;
        var UserInfoServiceCtor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _UserInfoService.UserInfoService;
        var joseUtil = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _JoseUtil.JoseUtil;
        var TokenClientCtor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _TokenClient.TokenClient;

        _classCallCheck(this, ResponseValidator);

        if (!settings) {
            _Log.Log.error("ResponseValidator.ctor: No settings passed to ResponseValidator");
            throw new Error("settings");
        }

        this._settings = settings;
        this._metadataService = new MetadataServiceCtor(this._settings);
        this._userInfoService = new UserInfoServiceCtor(this._settings);
        this._joseUtil = joseUtil;
        this._tokenClient = new TokenClientCtor(this._settings);
    }

    ResponseValidator.prototype.validateSigninResponse = function validateSigninResponse(state, response) {
        var _this = this;

        _Log.Log.debug("ResponseValidator.validateSigninResponse");

        return this._processSigninParams(state, response).then(function (response) {
            _Log.Log.debug("ResponseValidator.validateSigninResponse: state processed");
            return _this._validateTokens(state, response).then(function (response) {
                _Log.Log.debug("ResponseValidator.validateSigninResponse: tokens validated");
                return _this._processClaims(state, response).then(function (response) {
                    _Log.Log.debug("ResponseValidator.validateSigninResponse: claims processed");
                    return response;
                });
            });
        });
    };

    ResponseValidator.prototype.validateSignoutResponse = function validateSignoutResponse(state, response) {
        if (state.id !== response.state) {
            _Log.Log.error("ResponseValidator.validateSignoutResponse: State does not match");
            return Promise.reject(new Error("State does not match"));
        }

        // now that we know the state matches, take the stored data
        // and set it into the response so callers can get their state
        // this is important for both success & error outcomes
        _Log.Log.debug("ResponseValidator.validateSignoutResponse: state validated");
        response.state = state.data;

        if (response.error) {
            _Log.Log.warn("ResponseValidator.validateSignoutResponse: Response was error", response.error);
            return Promise.reject(new _ErrorResponse.ErrorResponse(response));
        }

        return Promise.resolve(response);
    };

    ResponseValidator.prototype._processSigninParams = function _processSigninParams(state, response) {
        if (state.id !== response.state) {
            _Log.Log.error("ResponseValidator._processSigninParams: State does not match");
            return Promise.reject(new Error("State does not match"));
        }

        if (!state.client_id) {
            _Log.Log.error("ResponseValidator._processSigninParams: No client_id on state");
            return Promise.reject(new Error("No client_id on state"));
        }

        if (!state.authority) {
            _Log.Log.error("ResponseValidator._processSigninParams: No authority on state");
            return Promise.reject(new Error("No authority on state"));
        }

        // this allows the authority to be loaded from the signin state
        if (!this._settings.authority) {
            this._settings.authority = state.authority;
        }
        // ensure we're using the correct authority if the authority is not loaded from signin state
        else if (this._settings.authority && this._settings.authority !== state.authority) {
                _Log.Log.error("ResponseValidator._processSigninParams: authority mismatch on settings vs. signin state");
                return Promise.reject(new Error("authority mismatch on settings vs. signin state"));
            }
        // this allows the client_id to be loaded from the signin state
        if (!this._settings.client_id) {
            this._settings.client_id = state.client_id;
        }
        // ensure we're using the correct client_id if the client_id is not loaded from signin state
        else if (this._settings.client_id && this._settings.client_id !== state.client_id) {
                _Log.Log.error("ResponseValidator._processSigninParams: client_id mismatch on settings vs. signin state");
                return Promise.reject(new Error("client_id mismatch on settings vs. signin state"));
            }

        // now that we know the state matches, take the stored data
        // and set it into the response so callers can get their state
        // this is important for both success & error outcomes
        _Log.Log.debug("ResponseValidator._processSigninParams: state validated");
        response.state = state.data;

        if (response.error) {
            _Log.Log.warn("ResponseValidator._processSigninParams: Response was error", response.error);
            return Promise.reject(new _ErrorResponse.ErrorResponse(response));
        }

        if (state.nonce && !response.id_token) {
            _Log.Log.error("ResponseValidator._processSigninParams: Expecting id_token in response");
            return Promise.reject(new Error("No id_token in response"));
        }

        if (!state.nonce && response.id_token) {
            _Log.Log.error("ResponseValidator._processSigninParams: Not expecting id_token in response");
            return Promise.reject(new Error("Unexpected id_token in response"));
        }

        if (state.code_verifier && !response.code) {
            _Log.Log.error("ResponseValidator._processSigninParams: Expecting code in response");
            return Promise.reject(new Error("No code in response"));
        }

        if (!state.code_verifier && response.code) {
            _Log.Log.error("ResponseValidator._processSigninParams: Not expecting code in response");
            return Promise.reject(new Error("Unexpected code in response"));
        }

        if (!response.scope) {
            // if there's no scope on the response, then assume all scopes granted (per-spec) and copy over scopes from original request
            response.scope = state.scope;
        }

        return Promise.resolve(response);
    };

    ResponseValidator.prototype._processClaims = function _processClaims(state, response) {
        var _this2 = this;

        if (response.isOpenIdConnect) {
            _Log.Log.debug("ResponseValidator._processClaims: response is OIDC, processing claims");

            response.profile = this._filterProtocolClaims(response.profile);

            if (state.skipUserInfo !== true && this._settings.loadUserInfo && response.access_token) {
                _Log.Log.debug("ResponseValidator._processClaims: loading user info");

                return this._userInfoService.getClaims(response.access_token).then(function (claims) {
                    _Log.Log.debug("ResponseValidator._processClaims: user info claims received from user info endpoint");

                    if (claims.sub !== response.profile.sub) {
                        _Log.Log.error("ResponseValidator._processClaims: sub from user info endpoint does not match sub in access_token");
                        return Promise.reject(new Error("sub from user info endpoint does not match sub in access_token"));
                    }

                    response.profile = _this2._mergeClaims(response.profile, claims);
                    _Log.Log.debug("ResponseValidator._processClaims: user info claims received, updated profile:", response.profile);

                    return response;
                });
            } else {
                _Log.Log.debug("ResponseValidator._processClaims: not loading user info");
            }
        } else {
            _Log.Log.debug("ResponseValidator._processClaims: response is not OIDC, not processing claims");
        }

        return Promise.resolve(response);
    };

    ResponseValidator.prototype._mergeClaims = function _mergeClaims(claims1, claims2) {
        var result = Object.assign({}, claims1);

        for (var name in claims2) {
            var values = claims2[name];
            if (!Array.isArray(values)) {
                values = [values];
            }

            for (var i = 0; i < values.length; i++) {
                var value = values[i];
                if (!result[name]) {
                    result[name] = value;
                } else if (Array.isArray(result[name])) {
                    if (result[name].indexOf(value) < 0) {
                        result[name].push(value);
                    }
                } else if (result[name] !== value) {
                    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
                        result[name] = this._mergeClaims(result[name], value);
                    } else {
                        result[name] = [result[name], value];
                    }
                }
            }
        }

        return result;
    };

    ResponseValidator.prototype._filterProtocolClaims = function _filterProtocolClaims(claims) {
        _Log.Log.debug("ResponseValidator._filterProtocolClaims, incoming claims:", claims);

        var result = Object.assign({}, claims);

        if (this._settings._filterProtocolClaims) {
            ProtocolClaims.forEach(function (type) {
                delete result[type];
            });

            _Log.Log.debug("ResponseValidator._filterProtocolClaims: protocol claims filtered", result);
        } else {
            _Log.Log.debug("ResponseValidator._filterProtocolClaims: protocol claims not filtered");
        }

        return result;
    };

    ResponseValidator.prototype._validateTokens = function _validateTokens(state, response) {
        if (response.code) {
            _Log.Log.debug("ResponseValidator._validateTokens: Validating code");
            return this._processCode(state, response);
        }

        if (response.id_token) {
            if (response.access_token) {
                _Log.Log.debug("ResponseValidator._validateTokens: Validating id_token and access_token");
                return this._validateIdTokenAndAccessToken(state, response);
            }

            _Log.Log.debug("ResponseValidator._validateTokens: Validating id_token");
            return this._validateIdToken(state, response);
        }

        _Log.Log.debug("ResponseValidator._validateTokens: No code to process or id_token to validate");
        return Promise.resolve(response);
    };

    ResponseValidator.prototype._processCode = function _processCode(state, response) {
        var _this3 = this;

        var request = {
            client_id: state.client_id,
            client_secret: state.client_secret,
            code: response.code,
            redirect_uri: state.redirect_uri,
            code_verifier: state.code_verifier
        };

        if (state.extraTokenParams && _typeof(state.extraTokenParams) === 'object') {
            Object.assign(request, state.extraTokenParams);
        }

        return this._tokenClient.exchangeCode(request).then(function (tokenResponse) {

            for (var key in tokenResponse) {
                response[key] = tokenResponse[key];
            }

            if (response.id_token) {
                _Log.Log.debug("ResponseValidator._processCode: token response successful, processing id_token");
                return _this3._validateIdTokenAttributes(state, response);
            } else {
                _Log.Log.debug("ResponseValidator._processCode: token response successful, returning response");
            }

            return response;
        });
    };

    ResponseValidator.prototype._validateIdTokenAttributes = function _validateIdTokenAttributes(state, response) {
        var _this4 = this;

        return this._metadataService.getIssuer().then(function (issuer) {

            var audience = state.client_id;
            var clockSkewInSeconds = _this4._settings.clockSkew;
            _Log.Log.debug("ResponseValidator._validateIdTokenAttributes: Validaing JWT attributes; using clock skew (in seconds) of: ", clockSkewInSeconds);

            return _this4._settings.getEpochTime().then(function (now) {
                return _this4._joseUtil.validateJwtAttributes(response.id_token, issuer, audience, clockSkewInSeconds, now).then(function (payload) {

                    if (state.nonce && state.nonce !== payload.nonce) {
                        _Log.Log.error("ResponseValidator._validateIdTokenAttributes: Invalid nonce in id_token");
                        return Promise.reject(new Error("Invalid nonce in id_token"));
                    }

                    if (!payload.sub) {
                        _Log.Log.error("ResponseValidator._validateIdTokenAttributes: No sub present in id_token");
                        return Promise.reject(new Error("No sub present in id_token"));
                    }

                    response.profile = payload;
                    return response;
                });
            });
        });
    };

    ResponseValidator.prototype._validateIdTokenAndAccessToken = function _validateIdTokenAndAccessToken(state, response) {
        var _this5 = this;

        return this._validateIdToken(state, response).then(function (response) {
            return _this5._validateAccessToken(response);
        });
    };

    ResponseValidator.prototype._validateIdToken = function _validateIdToken(state, response) {
        var _this6 = this;

        if (!state.nonce) {
            _Log.Log.error("ResponseValidator._validateIdToken: No nonce on state");
            return Promise.reject(new Error("No nonce on state"));
        }

        var jwt = this._joseUtil.parseJwt(response.id_token);
        if (!jwt || !jwt.header || !jwt.payload) {
            _Log.Log.error("ResponseValidator._validateIdToken: Failed to parse id_token", jwt);
            return Promise.reject(new Error("Failed to parse id_token"));
        }

        if (state.nonce !== jwt.payload.nonce) {
            _Log.Log.error("ResponseValidator._validateIdToken: Invalid nonce in id_token");
            return Promise.reject(new Error("Invalid nonce in id_token"));
        }

        var kid = jwt.header.kid;

        return this._metadataService.getIssuer().then(function (issuer) {
            _Log.Log.debug("ResponseValidator._validateIdToken: Received issuer");

            return _this6._metadataService.getSigningKeys().then(function (keys) {
                if (!keys) {
                    _Log.Log.error("ResponseValidator._validateIdToken: No signing keys from metadata");
                    return Promise.reject(new Error("No signing keys from metadata"));
                }

                _Log.Log.debug("ResponseValidator._validateIdToken: Received signing keys");
                var key = void 0;
                if (!kid) {
                    keys = _this6._filterByAlg(keys, jwt.header.alg);

                    if (keys.length > 1) {
                        _Log.Log.error("ResponseValidator._validateIdToken: No kid found in id_token and more than one key found in metadata");
                        return Promise.reject(new Error("No kid found in id_token and more than one key found in metadata"));
                    } else {
                        // kid is mandatory only when there are multiple keys in the referenced JWK Set document
                        // see http://openid.net/specs/openid-connect-core-1_0.html#Signing
                        key = keys[0];
                    }
                } else {
                    key = keys.filter(function (key) {
                        return key.kid === kid;
                    })[0];
                }

                if (!key) {
                    _Log.Log.error("ResponseValidator._validateIdToken: No key matching kid or alg found in signing keys");
                    return Promise.reject(new Error("No key matching kid or alg found in signing keys"));
                }

                var audience = state.client_id;

                var clockSkewInSeconds = _this6._settings.clockSkew;
                _Log.Log.debug("ResponseValidator._validateIdToken: Validaing JWT; using clock skew (in seconds) of: ", clockSkewInSeconds);

                return _this6._joseUtil.validateJwt(response.id_token, key, issuer, audience, clockSkewInSeconds).then(function () {
                    _Log.Log.debug("ResponseValidator._validateIdToken: JWT validation successful");

                    if (!jwt.payload.sub) {
                        _Log.Log.error("ResponseValidator._validateIdToken: No sub present in id_token");
                        return Promise.reject(new Error("No sub present in id_token"));
                    }

                    response.profile = jwt.payload;

                    return response;
                });
            });
        });
    };

    ResponseValidator.prototype._filterByAlg = function _filterByAlg(keys, alg) {
        var kty = null;
        if (alg.startsWith("RS")) {
            kty = "RSA";
        } else if (alg.startsWith("PS")) {
            kty = "PS";
        } else if (alg.startsWith("ES")) {
            kty = "EC";
        } else {
            _Log.Log.debug("ResponseValidator._filterByAlg: alg not supported: ", alg);
            return [];
        }

        _Log.Log.debug("ResponseValidator._filterByAlg: Looking for keys that match kty: ", kty);

        keys = keys.filter(function (key) {
            return key.kty === kty;
        });

        _Log.Log.debug("ResponseValidator._filterByAlg: Number of keys that match kty: ", kty, keys.length);

        return keys;
    };

    ResponseValidator.prototype._validateAccessToken = function _validateAccessToken(response) {
        if (!response.profile) {
            _Log.Log.error("ResponseValidator._validateAccessToken: No profile loaded from id_token");
            return Promise.reject(new Error("No profile loaded from id_token"));
        }

        if (!response.profile.at_hash) {
            _Log.Log.error("ResponseValidator._validateAccessToken: No at_hash in id_token");
            return Promise.reject(new Error("No at_hash in id_token"));
        }

        if (!response.id_token) {
            _Log.Log.error("ResponseValidator._validateAccessToken: No id_token");
            return Promise.reject(new Error("No id_token"));
        }

        var jwt = this._joseUtil.parseJwt(response.id_token);
        if (!jwt || !jwt.header) {
            _Log.Log.error("ResponseValidator._validateAccessToken: Failed to parse id_token", jwt);
            return Promise.reject(new Error("Failed to parse id_token"));
        }

        var hashAlg = jwt.header.alg;
        if (!hashAlg || hashAlg.length !== 5) {
            _Log.Log.error("ResponseValidator._validateAccessToken: Unsupported alg:", hashAlg);
            return Promise.reject(new Error("Unsupported alg: " + hashAlg));
        }

        var hashBits = hashAlg.substr(2, 3);
        if (!hashBits) {
            _Log.Log.error("ResponseValidator._validateAccessToken: Unsupported alg:", hashAlg, hashBits);
            return Promise.reject(new Error("Unsupported alg: " + hashAlg));
        }

        hashBits = parseInt(hashBits);
        if (hashBits !== 256 && hashBits !== 384 && hashBits !== 512) {
            _Log.Log.error("ResponseValidator._validateAccessToken: Unsupported alg:", hashAlg, hashBits);
            return Promise.reject(new Error("Unsupported alg: " + hashAlg));
        }

        var sha = "sha" + hashBits;
        var hash = this._joseUtil.hashString(response.access_token, sha);
        if (!hash) {
            _Log.Log.error("ResponseValidator._validateAccessToken: access_token hash failed:", sha);
            return Promise.reject(new Error("Failed to validate at_hash"));
        }

        var left = hash.substr(0, hash.length / 2);
        var left_b64u = this._joseUtil.hexToBase64Url(left);
        if (left_b64u !== response.profile.at_hash) {
            _Log.Log.error("ResponseValidator._validateAccessToken: Failed to validate at_hash", left_b64u, response.profile.at_hash);
            return Promise.reject(new Error("Failed to validate at_hash"));
        }

        _Log.Log.debug("ResponseValidator._validateAccessToken: success");

        return Promise.resolve(response);
    };

    return ResponseValidator;
}();

/***/ }),

/***/ "./src/SessionMonitor.js":
/*!*******************************!*\
  !*** ./src/SessionMonitor.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SessionMonitor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _CheckSessionIFrame = __webpack_require__(/*! ./CheckSessionIFrame.js */ "./src/CheckSessionIFrame.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SessionMonitor = exports.SessionMonitor = function () {
    function SessionMonitor(userManager) {
        var _this = this;

        var CheckSessionIFrameCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _CheckSessionIFrame.CheckSessionIFrame;
        var timer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _Global.Global.timer;

        _classCallCheck(this, SessionMonitor);

        if (!userManager) {
            _Log.Log.error("SessionMonitor.ctor: No user manager passed to SessionMonitor");
            throw new Error("userManager");
        }

        this._userManager = userManager;
        this._CheckSessionIFrameCtor = CheckSessionIFrameCtor;
        this._timer = timer;

        this._userManager.events.addUserLoaded(this._start.bind(this));
        this._userManager.events.addUserUnloaded(this._stop.bind(this));

        this._userManager.getUser().then(function (user) {
            // doing this manually here since calling getUser 
            // doesn't trigger load event.
            if (user) {
                _this._start(user);
            } else if (_this._settings.monitorAnonymousSession) {
                _this._userManager.querySessionStatus().then(function (session) {
                    var tmpUser = {
                        session_state: session.session_state
                    };
                    if (session.sub && session.sid) {
                        tmpUser.profile = {
                            sub: session.sub,
                            sid: session.sid
                        };
                    }
                    _this._start(tmpUser);
                }).catch(function (err) {
                    // catch to suppress errors since we're in a ctor
                    _Log.Log.error("SessionMonitor ctor: error from querySessionStatus:", err.message);
                });
            }
        }).catch(function (err) {
            // catch to suppress errors since we're in a ctor
            _Log.Log.error("SessionMonitor ctor: error from getUser:", err.message);
        });
    }

    SessionMonitor.prototype._start = function _start(user) {
        var _this2 = this;

        var session_state = user.session_state;

        if (session_state) {
            if (user.profile) {
                this._sub = user.profile.sub;
                this._sid = user.profile.sid;
                _Log.Log.debug("SessionMonitor._start: session_state:", session_state, ", sub:", this._sub);
            } else {
                this._sub = undefined;
                this._sid = undefined;
                _Log.Log.debug("SessionMonitor._start: session_state:", session_state, ", anonymous user");
            }

            if (!this._checkSessionIFrame) {
                this._metadataService.getCheckSessionIframe().then(function (url) {
                    if (url) {
                        _Log.Log.debug("SessionMonitor._start: Initializing check session iframe");

                        var client_id = _this2._client_id;
                        var interval = _this2._checkSessionInterval;
                        var stopOnError = _this2._stopCheckSessionOnError;

                        _this2._checkSessionIFrame = new _this2._CheckSessionIFrameCtor(_this2._callback.bind(_this2), client_id, url, interval, stopOnError);
                        _this2._checkSessionIFrame.load().then(function () {
                            _this2._checkSessionIFrame.start(session_state);
                        });
                    } else {
                        _Log.Log.warn("SessionMonitor._start: No check session iframe found in the metadata");
                    }
                }).catch(function (err) {
                    // catch to suppress errors since we're in non-promise callback
                    _Log.Log.error("SessionMonitor._start: Error from getCheckSessionIframe:", err.message);
                });
            } else {
                this._checkSessionIFrame.start(session_state);
            }
        }
    };

    SessionMonitor.prototype._stop = function _stop() {
        var _this3 = this;

        this._sub = undefined;
        this._sid = undefined;

        if (this._checkSessionIFrame) {
            _Log.Log.debug("SessionMonitor._stop");
            this._checkSessionIFrame.stop();
        }

        if (this._settings.monitorAnonymousSession) {
            // using a timer to delay re-initialization to avoid race conditions during signout
            var timerHandle = this._timer.setInterval(function () {
                _this3._timer.clearInterval(timerHandle);

                _this3._userManager.querySessionStatus().then(function (session) {
                    var tmpUser = {
                        session_state: session.session_state
                    };
                    if (session.sub && session.sid) {
                        tmpUser.profile = {
                            sub: session.sub,
                            sid: session.sid
                        };
                    }
                    _this3._start(tmpUser);
                }).catch(function (err) {
                    // catch to suppress errors since we're in a callback
                    _Log.Log.error("SessionMonitor: error from querySessionStatus:", err.message);
                });
            }, 1000);
        }
    };

    SessionMonitor.prototype._callback = function _callback() {
        var _this4 = this;

        this._userManager.querySessionStatus().then(function (session) {
            var raiseEvent = true;

            if (session) {
                if (session.sub === _this4._sub) {
                    raiseEvent = false;
                    _this4._checkSessionIFrame.start(session.session_state);

                    if (session.sid === _this4._sid) {
                        _Log.Log.debug("SessionMonitor._callback: Same sub still logged in at OP, restarting check session iframe; session_state:", session.session_state);
                    } else {
                        _Log.Log.debug("SessionMonitor._callback: Same sub still logged in at OP, session state has changed, restarting check session iframe; session_state:", session.session_state);
                        _this4._userManager.events._raiseUserSessionChanged();
                    }
                } else {
                    _Log.Log.debug("SessionMonitor._callback: Different subject signed into OP:", session.sub);
                }
            } else {
                _Log.Log.debug("SessionMonitor._callback: Subject no longer signed into OP");
            }

            if (raiseEvent) {
                if (_this4._sub) {
                    _Log.Log.debug("SessionMonitor._callback: SessionMonitor._callback; raising signed out event");
                    _this4._userManager.events._raiseUserSignedOut();
                } else {
                    _Log.Log.debug("SessionMonitor._callback: SessionMonitor._callback; raising signed in event");
                    _this4._userManager.events._raiseUserSignedIn();
                }
            }
        }).catch(function (err) {
            if (_this4._sub) {
                _Log.Log.debug("SessionMonitor._callback: Error calling queryCurrentSigninSession; raising signed out event", err.message);
                _this4._userManager.events._raiseUserSignedOut();
            }
        });
    };

    _createClass(SessionMonitor, [{
        key: '_settings',
        get: function get() {
            return this._userManager.settings;
        }
    }, {
        key: '_metadataService',
        get: function get() {
            return this._userManager.metadataService;
        }
    }, {
        key: '_client_id',
        get: function get() {
            return this._settings.client_id;
        }
    }, {
        key: '_checkSessionInterval',
        get: function get() {
            return this._settings.checkSessionInterval;
        }
    }, {
        key: '_stopCheckSessionOnError',
        get: function get() {
            return this._settings.stopCheckSessionOnError;
        }
    }]);

    return SessionMonitor;
}();

/***/ }),

/***/ "./src/SigninRequest.js":
/*!******************************!*\
  !*** ./src/SigninRequest.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SigninRequest = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _UrlUtility = __webpack_require__(/*! ./UrlUtility.js */ "./src/UrlUtility.js");

var _SigninState = __webpack_require__(/*! ./SigninState.js */ "./src/SigninState.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var SigninRequest = exports.SigninRequest = function () {
    function SigninRequest(_ref) {
        var url = _ref.url,
            client_id = _ref.client_id,
            redirect_uri = _ref.redirect_uri,
            response_type = _ref.response_type,
            scope = _ref.scope,
            authority = _ref.authority,
            data = _ref.data,
            prompt = _ref.prompt,
            display = _ref.display,
            max_age = _ref.max_age,
            ui_locales = _ref.ui_locales,
            id_token_hint = _ref.id_token_hint,
            login_hint = _ref.login_hint,
            acr_values = _ref.acr_values,
            resource = _ref.resource,
            response_mode = _ref.response_mode,
            request = _ref.request,
            request_uri = _ref.request_uri,
            extraQueryParams = _ref.extraQueryParams,
            request_type = _ref.request_type,
            client_secret = _ref.client_secret,
            extraTokenParams = _ref.extraTokenParams,
            skipUserInfo = _ref.skipUserInfo;

        _classCallCheck(this, SigninRequest);

        if (!url) {
            _Log.Log.error("SigninRequest.ctor: No url passed");
            throw new Error("url");
        }
        if (!client_id) {
            _Log.Log.error("SigninRequest.ctor: No client_id passed");
            throw new Error("client_id");
        }
        if (!redirect_uri) {
            _Log.Log.error("SigninRequest.ctor: No redirect_uri passed");
            throw new Error("redirect_uri");
        }
        if (!response_type) {
            _Log.Log.error("SigninRequest.ctor: No response_type passed");
            throw new Error("response_type");
        }
        if (!scope) {
            _Log.Log.error("SigninRequest.ctor: No scope passed");
            throw new Error("scope");
        }
        if (!authority) {
            _Log.Log.error("SigninRequest.ctor: No authority passed");
            throw new Error("authority");
        }

        var oidc = SigninRequest.isOidc(response_type);
        var code = SigninRequest.isCode(response_type);

        if (!response_mode) {
            response_mode = SigninRequest.isCode(response_type) ? "query" : null;
        }

        this.state = new _SigninState.SigninState({ nonce: oidc,
            data: data, client_id: client_id, authority: authority, redirect_uri: redirect_uri,
            code_verifier: code,
            request_type: request_type, response_mode: response_mode,
            client_secret: client_secret, scope: scope, extraTokenParams: extraTokenParams, skipUserInfo: skipUserInfo });

        url = _UrlUtility.UrlUtility.addQueryParam(url, "client_id", client_id);
        url = _UrlUtility.UrlUtility.addQueryParam(url, "redirect_uri", redirect_uri);
        url = _UrlUtility.UrlUtility.addQueryParam(url, "response_type", response_type);
        url = _UrlUtility.UrlUtility.addQueryParam(url, "scope", scope);

        url = _UrlUtility.UrlUtility.addQueryParam(url, "state", this.state.id);
        if (oidc) {
            url = _UrlUtility.UrlUtility.addQueryParam(url, "nonce", this.state.nonce);
        }
        if (code) {
            url = _UrlUtility.UrlUtility.addQueryParam(url, "code_challenge", this.state.code_challenge);
            url = _UrlUtility.UrlUtility.addQueryParam(url, "code_challenge_method", "S256");
        }

        var optional = { prompt: prompt, display: display, max_age: max_age, ui_locales: ui_locales, id_token_hint: id_token_hint, login_hint: login_hint, acr_values: acr_values, resource: resource, request: request, request_uri: request_uri, response_mode: response_mode };
        for (var key in optional) {
            if (optional[key]) {
                url = _UrlUtility.UrlUtility.addQueryParam(url, key, optional[key]);
            }
        }

        for (var _key in extraQueryParams) {
            url = _UrlUtility.UrlUtility.addQueryParam(url, _key, extraQueryParams[_key]);
        }

        this.url = url;
    }

    SigninRequest.isOidc = function isOidc(response_type) {
        var result = response_type.split(/\s+/g).filter(function (item) {
            return item === "id_token";
        });
        return !!result[0];
    };

    SigninRequest.isOAuth = function isOAuth(response_type) {
        var result = response_type.split(/\s+/g).filter(function (item) {
            return item === "token";
        });
        return !!result[0];
    };

    SigninRequest.isCode = function isCode(response_type) {
        var result = response_type.split(/\s+/g).filter(function (item) {
            return item === "code";
        });
        return !!result[0];
    };

    return SigninRequest;
}();

/***/ }),

/***/ "./src/SigninResponse.js":
/*!*******************************!*\
  !*** ./src/SigninResponse.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SigninResponse = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _UrlUtility = __webpack_require__(/*! ./UrlUtility.js */ "./src/UrlUtility.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OidcScope = "openid";

var SigninResponse = exports.SigninResponse = function () {
    function SigninResponse(url) {
        var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#";

        _classCallCheck(this, SigninResponse);

        var values = _UrlUtility.UrlUtility.parseUrlFragment(url, delimiter);

        this.error = values.error;
        this.error_description = values.error_description;
        this.error_uri = values.error_uri;

        this.code = values.code;
        this.state = values.state;
        this.id_token = values.id_token;
        this.session_state = values.session_state;
        this.access_token = values.access_token;
        this.token_type = values.token_type;
        this.scope = values.scope;
        this.profile = undefined; // will be set from ResponseValidator

        this.expires_in = values.expires_in;
    }

    _createClass(SigninResponse, [{
        key: "expires_in",
        get: function get() {
            if (this.expires_at) {
                var now = parseInt(Date.now() / 1000);
                return this.expires_at - now;
            }
            return undefined;
        },
        set: function set(value) {
            var expires_in = parseInt(value);
            if (typeof expires_in === 'number' && expires_in > 0) {
                var now = parseInt(Date.now() / 1000);
                this.expires_at = now + expires_in;
            }
        }
    }, {
        key: "expired",
        get: function get() {
            var expires_in = this.expires_in;
            if (expires_in !== undefined) {
                return expires_in <= 0;
            }
            return undefined;
        }
    }, {
        key: "scopes",
        get: function get() {
            return (this.scope || "").split(" ");
        }
    }, {
        key: "isOpenIdConnect",
        get: function get() {
            return this.scopes.indexOf(OidcScope) >= 0 || !!this.id_token;
        }
    }]);

    return SigninResponse;
}();

/***/ }),

/***/ "./src/SigninState.js":
/*!****************************!*\
  !*** ./src/SigninState.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SigninState = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _State2 = __webpack_require__(/*! ./State.js */ "./src/State.js");

var _JoseUtil = __webpack_require__(/*! ./JoseUtil.js */ "./src/JoseUtilRsa.js");

var _random = __webpack_require__(/*! ./random.js */ "./src/random.js");

var _random2 = _interopRequireDefault(_random);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var SigninState = exports.SigninState = function (_State) {
    _inherits(SigninState, _State);

    function SigninState() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            nonce = _ref.nonce,
            authority = _ref.authority,
            client_id = _ref.client_id,
            redirect_uri = _ref.redirect_uri,
            code_verifier = _ref.code_verifier,
            response_mode = _ref.response_mode,
            client_secret = _ref.client_secret,
            scope = _ref.scope,
            extraTokenParams = _ref.extraTokenParams,
            skipUserInfo = _ref.skipUserInfo;

        _classCallCheck(this, SigninState);

        var _this = _possibleConstructorReturn(this, _State.call(this, arguments[0]));

        if (nonce === true) {
            _this._nonce = (0, _random2.default)();
        } else if (nonce) {
            _this._nonce = nonce;
        }

        if (code_verifier === true) {
            // random() produces 32 length
            _this._code_verifier = (0, _random2.default)() + (0, _random2.default)() + (0, _random2.default)();
        } else if (code_verifier) {
            _this._code_verifier = code_verifier;
        }

        if (_this.code_verifier) {
            var hash = _JoseUtil.JoseUtil.hashString(_this.code_verifier, "SHA256");
            _this._code_challenge = _JoseUtil.JoseUtil.hexToBase64Url(hash);
        }

        _this._redirect_uri = redirect_uri;
        _this._authority = authority;
        _this._client_id = client_id;
        _this._response_mode = response_mode;
        _this._client_secret = client_secret;
        _this._scope = scope;
        _this._extraTokenParams = extraTokenParams;
        _this._skipUserInfo = skipUserInfo;
        return _this;
    }

    SigninState.prototype.toStorageString = function toStorageString() {
        _Log.Log.debug("SigninState.toStorageString");
        return JSON.stringify({
            id: this.id,
            data: this.data,
            created: this.created,
            request_type: this.request_type,
            nonce: this.nonce,
            code_verifier: this.code_verifier,
            redirect_uri: this.redirect_uri,
            authority: this.authority,
            client_id: this.client_id,
            response_mode: this.response_mode,
            client_secret: this.client_secret,
            scope: this.scope,
            extraTokenParams: this.extraTokenParams,
            skipUserInfo: this.skipUserInfo
        });
    };

    SigninState.fromStorageString = function fromStorageString(storageString) {
        _Log.Log.debug("SigninState.fromStorageString");
        var data = JSON.parse(storageString);
        return new SigninState(data);
    };

    _createClass(SigninState, [{
        key: 'nonce',
        get: function get() {
            return this._nonce;
        }
    }, {
        key: 'authority',
        get: function get() {
            return this._authority;
        }
    }, {
        key: 'client_id',
        get: function get() {
            return this._client_id;
        }
    }, {
        key: 'redirect_uri',
        get: function get() {
            return this._redirect_uri;
        }
    }, {
        key: 'code_verifier',
        get: function get() {
            return this._code_verifier;
        }
    }, {
        key: 'code_challenge',
        get: function get() {
            return this._code_challenge;
        }
    }, {
        key: 'response_mode',
        get: function get() {
            return this._response_mode;
        }
    }, {
        key: 'client_secret',
        get: function get() {
            return this._client_secret;
        }
    }, {
        key: 'scope',
        get: function get() {
            return this._scope;
        }
    }, {
        key: 'extraTokenParams',
        get: function get() {
            return this._extraTokenParams;
        }
    }, {
        key: 'skipUserInfo',
        get: function get() {
            return this._skipUserInfo;
        }
    }]);

    return SigninState;
}(_State2.State);

/***/ }),

/***/ "./src/SignoutRequest.js":
/*!*******************************!*\
  !*** ./src/SignoutRequest.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SignoutRequest = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _UrlUtility = __webpack_require__(/*! ./UrlUtility.js */ "./src/UrlUtility.js");

var _State = __webpack_require__(/*! ./State.js */ "./src/State.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var SignoutRequest = exports.SignoutRequest = function SignoutRequest(_ref) {
    var url = _ref.url,
        id_token_hint = _ref.id_token_hint,
        post_logout_redirect_uri = _ref.post_logout_redirect_uri,
        data = _ref.data,
        extraQueryParams = _ref.extraQueryParams,
        request_type = _ref.request_type;

    _classCallCheck(this, SignoutRequest);

    if (!url) {
        _Log.Log.error("SignoutRequest.ctor: No url passed");
        throw new Error("url");
    }

    if (id_token_hint) {
        url = _UrlUtility.UrlUtility.addQueryParam(url, "id_token_hint", id_token_hint);
    }

    if (post_logout_redirect_uri) {
        url = _UrlUtility.UrlUtility.addQueryParam(url, "post_logout_redirect_uri", post_logout_redirect_uri);

        if (data) {
            this.state = new _State.State({ data: data, request_type: request_type });

            url = _UrlUtility.UrlUtility.addQueryParam(url, "state", this.state.id);
        }
    }

    for (var key in extraQueryParams) {
        url = _UrlUtility.UrlUtility.addQueryParam(url, key, extraQueryParams[key]);
    }

    this.url = url;
};

/***/ }),

/***/ "./src/SignoutResponse.js":
/*!********************************!*\
  !*** ./src/SignoutResponse.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.SignoutResponse = undefined;

var _UrlUtility = __webpack_require__(/*! ./UrlUtility.js */ "./src/UrlUtility.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var SignoutResponse = exports.SignoutResponse = function SignoutResponse(url) {
        _classCallCheck(this, SignoutResponse);

        var values = _UrlUtility.UrlUtility.parseUrlFragment(url, "?");

        this.error = values.error;
        this.error_description = values.error_description;
        this.error_uri = values.error_uri;

        this.state = values.state;
};

/***/ }),

/***/ "./src/SilentRenewService.js":
/*!***********************************!*\
  !*** ./src/SilentRenewService.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SilentRenewService = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var SilentRenewService = exports.SilentRenewService = function () {
    function SilentRenewService(userManager) {
        _classCallCheck(this, SilentRenewService);

        this._userManager = userManager;
    }

    SilentRenewService.prototype.start = function start() {
        if (!this._callback) {
            this._callback = this._tokenExpiring.bind(this);
            this._userManager.events.addAccessTokenExpiring(this._callback);

            // this will trigger loading of the user so the expiring events can be initialized
            this._userManager.getUser().then(function (user) {
                // deliberate nop
            }).catch(function (err) {
                // catch to suppress errors since we're in a ctor
                _Log.Log.error("SilentRenewService.start: Error from getUser:", err.message);
            });
        }
    };

    SilentRenewService.prototype.stop = function stop() {
        if (this._callback) {
            this._userManager.events.removeAccessTokenExpiring(this._callback);
            delete this._callback;
        }
    };

    SilentRenewService.prototype._tokenExpiring = function _tokenExpiring() {
        var _this = this;

        this._userManager.signinSilent().then(function (user) {
            _Log.Log.debug("SilentRenewService._tokenExpiring: Silent token renewal successful");
        }, function (err) {
            _Log.Log.error("SilentRenewService._tokenExpiring: Error from signinSilent:", err.message);
            _this._userManager.events._raiseSilentRenewError(err);
        });
    };

    return SilentRenewService;
}();

/***/ }),

/***/ "./src/State.js":
/*!**********************!*\
  !*** ./src/State.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.State = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _random = __webpack_require__(/*! ./random.js */ "./src/random.js");

var _random2 = _interopRequireDefault(_random);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var State = exports.State = function () {
    function State() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            id = _ref.id,
            data = _ref.data,
            created = _ref.created,
            request_type = _ref.request_type;

        _classCallCheck(this, State);

        this._id = id || (0, _random2.default)();
        this._data = data;

        if (typeof created === 'number' && created > 0) {
            this._created = created;
        } else {
            this._created = parseInt(Date.now() / 1000);
        }
        this._request_type = request_type;
    }

    State.prototype.toStorageString = function toStorageString() {
        _Log.Log.debug("State.toStorageString");
        return JSON.stringify({
            id: this.id,
            data: this.data,
            created: this.created,
            request_type: this.request_type
        });
    };

    State.fromStorageString = function fromStorageString(storageString) {
        _Log.Log.debug("State.fromStorageString");
        return new State(JSON.parse(storageString));
    };

    State.clearStaleState = function clearStaleState(storage, age) {

        var cutoff = Date.now() / 1000 - age;

        return storage.getAllKeys().then(function (keys) {
            _Log.Log.debug("State.clearStaleState: got keys", keys);

            var promises = [];

            var _loop = function _loop(i) {
                var key = keys[i];
                p = storage.get(key).then(function (item) {
                    var remove = false;

                    if (item) {
                        try {
                            var state = State.fromStorageString(item);

                            _Log.Log.debug("State.clearStaleState: got item from key: ", key, state.created);

                            if (state.created <= cutoff) {
                                remove = true;
                            }
                        } catch (e) {
                            _Log.Log.error("State.clearStaleState: Error parsing state for key", key, e.message);
                            remove = true;
                        }
                    } else {
                        _Log.Log.debug("State.clearStaleState: no item in storage for key: ", key);
                        remove = true;
                    }

                    if (remove) {
                        _Log.Log.debug("State.clearStaleState: removed item for key: ", key);
                        return storage.remove(key);
                    }
                });


                promises.push(p);
            };

            for (var i = 0; i < keys.length; i++) {
                var p;

                _loop(i);
            }

            _Log.Log.debug("State.clearStaleState: waiting on promise count:", promises.length);
            return Promise.all(promises);
        });
    };

    _createClass(State, [{
        key: 'id',
        get: function get() {
            return this._id;
        }
    }, {
        key: 'data',
        get: function get() {
            return this._data;
        }
    }, {
        key: 'created',
        get: function get() {
            return this._created;
        }
    }, {
        key: 'request_type',
        get: function get() {
            return this._request_type;
        }
    }]);

    return State;
}();

/***/ }),

/***/ "./src/Timer.js":
/*!**********************!*\
  !*** ./src/Timer.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Timer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

var _Event2 = __webpack_require__(/*! ./Event.js */ "./src/Event.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var TimerDuration = 5; // seconds

var Timer = exports.Timer = function (_Event) {
    _inherits(Timer, _Event);

    function Timer(name) {
        var timer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Global.Global.timer;
        var nowFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

        _classCallCheck(this, Timer);

        var _this = _possibleConstructorReturn(this, _Event.call(this, name));

        _this._timer = timer;

        if (nowFunc) {
            _this._nowFunc = nowFunc;
        } else {
            _this._nowFunc = function () {
                return Date.now() / 1000;
            };
        }
        return _this;
    }

    Timer.prototype.init = function init(duration) {
        if (duration <= 0) {
            duration = 1;
        }
        duration = parseInt(duration);

        var expiration = this.now + duration;
        if (this.expiration === expiration && this._timerHandle) {
            // no need to reinitialize to same expiration, so bail out
            _Log.Log.debug("Timer.init timer " + this._name + " skipping initialization since already initialized for expiration:", this.expiration);
            return;
        }

        this.cancel();

        _Log.Log.debug("Timer.init timer " + this._name + " for duration:", duration);
        this._expiration = expiration;

        // we're using a fairly short timer and then checking the expiration in the
        // callback to handle scenarios where the browser device sleeps, and then
        // the timers end up getting delayed.
        var timerDuration = TimerDuration;
        if (duration < timerDuration) {
            timerDuration = duration;
        }
        this._timerHandle = this._timer.setInterval(this._callback.bind(this), timerDuration * 1000);
    };

    Timer.prototype.cancel = function cancel() {
        if (this._timerHandle) {
            _Log.Log.debug("Timer.cancel: ", this._name);
            this._timer.clearInterval(this._timerHandle);
            this._timerHandle = null;
        }
    };

    Timer.prototype._callback = function _callback() {
        var diff = this._expiration - this.now;
        _Log.Log.debug("Timer.callback; " + this._name + " timer expires in:", diff);

        if (this._expiration <= this.now) {
            this.cancel();
            _Event.prototype.raise.call(this);
        }
    };

    _createClass(Timer, [{
        key: 'now',
        get: function get() {
            return parseInt(this._nowFunc());
        }
    }, {
        key: 'expiration',
        get: function get() {
            return this._expiration;
        }
    }]);

    return Timer;
}(_Event2.Event);

/***/ }),

/***/ "./src/TokenClient.js":
/*!****************************!*\
  !*** ./src/TokenClient.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TokenClient = undefined;

var _JsonService = __webpack_require__(/*! ./JsonService.js */ "./src/JsonService.js");

var _MetadataService = __webpack_require__(/*! ./MetadataService.js */ "./src/MetadataService.js");

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var TokenClient = exports.TokenClient = function () {
    function TokenClient(settings) {
        var JsonServiceCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _JsonService.JsonService;
        var MetadataServiceCtor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _MetadataService.MetadataService;

        _classCallCheck(this, TokenClient);

        if (!settings) {
            _Log.Log.error("TokenClient.ctor: No settings passed");
            throw new Error("settings");
        }

        this._settings = settings;
        this._jsonService = new JsonServiceCtor();
        this._metadataService = new MetadataServiceCtor(this._settings);
    }

    TokenClient.prototype.exchangeCode = function exchangeCode() {
        var _this = this;

        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args = Object.assign({}, args);

        args.grant_type = args.grant_type || "authorization_code";
        args.client_id = args.client_id || this._settings.client_id;
        args.redirect_uri = args.redirect_uri || this._settings.redirect_uri;

        if (!args.code) {
            _Log.Log.error("TokenClient.exchangeCode: No code passed");
            return Promise.reject(new Error("A code is required"));
        }
        if (!args.redirect_uri) {
            _Log.Log.error("TokenClient.exchangeCode: No redirect_uri passed");
            return Promise.reject(new Error("A redirect_uri is required"));
        }
        if (!args.code_verifier) {
            _Log.Log.error("TokenClient.exchangeCode: No code_verifier passed");
            return Promise.reject(new Error("A code_verifier is required"));
        }
        if (!args.client_id) {
            _Log.Log.error("TokenClient.exchangeCode: No client_id passed");
            return Promise.reject(new Error("A client_id is required"));
        }

        return this._metadataService.getTokenEndpoint(false).then(function (url) {
            _Log.Log.debug("TokenClient.exchangeCode: Received token endpoint");

            return _this._jsonService.postForm(url, args).then(function (response) {
                _Log.Log.debug("TokenClient.exchangeCode: response received");
                return response;
            });
        });
    };

    TokenClient.prototype.exchangeRefreshToken = function exchangeRefreshToken() {
        var _this2 = this;

        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args = Object.assign({}, args);

        args.grant_type = args.grant_type || "refresh_token";
        args.client_id = args.client_id || this._settings.client_id;
        args.client_secret = args.client_secret || this._settings.client_secret;

        if (!args.refresh_token) {
            _Log.Log.error("TokenClient.exchangeRefreshToken: No refresh_token passed");
            return Promise.reject(new Error("A refresh_token is required"));
        }
        if (!args.client_id) {
            _Log.Log.error("TokenClient.exchangeRefreshToken: No client_id passed");
            return Promise.reject(new Error("A client_id is required"));
        }

        return this._metadataService.getTokenEndpoint(false).then(function (url) {
            _Log.Log.debug("TokenClient.exchangeRefreshToken: Received token endpoint");

            return _this2._jsonService.postForm(url, args).then(function (response) {
                _Log.Log.debug("TokenClient.exchangeRefreshToken: response received");
                return response;
            });
        });
    };

    return TokenClient;
}();

/***/ }),

/***/ "./src/TokenRevocationClient.js":
/*!**************************************!*\
  !*** ./src/TokenRevocationClient.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TokenRevocationClient = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _MetadataService = __webpack_require__(/*! ./MetadataService.js */ "./src/MetadataService.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var AccessTokenTypeHint = "access_token";
var RefreshTokenTypeHint = "refresh_token";

var TokenRevocationClient = exports.TokenRevocationClient = function () {
    function TokenRevocationClient(settings) {
        var XMLHttpRequestCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Global.Global.XMLHttpRequest;
        var MetadataServiceCtor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _MetadataService.MetadataService;

        _classCallCheck(this, TokenRevocationClient);

        if (!settings) {
            _Log.Log.error("TokenRevocationClient.ctor: No settings provided");
            throw new Error("No settings provided.");
        }

        this._settings = settings;
        this._XMLHttpRequestCtor = XMLHttpRequestCtor;
        this._metadataService = new MetadataServiceCtor(this._settings);
    }

    TokenRevocationClient.prototype.revoke = function revoke(token, required) {
        var _this = this;

        var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "access_token";

        if (!token) {
            _Log.Log.error("TokenRevocationClient.revoke: No token provided");
            throw new Error("No token provided.");
        }

        if (type !== AccessTokenTypeHint && type != RefreshTokenTypeHint) {
            _Log.Log.error("TokenRevocationClient.revoke: Invalid token type");
            throw new Error("Invalid token type.");
        }

        return this._metadataService.getRevocationEndpoint().then(function (url) {
            if (!url) {
                if (required) {
                    _Log.Log.error("TokenRevocationClient.revoke: Revocation not supported");
                    throw new Error("Revocation not supported");
                }

                // not required, so don't error and just return
                return;
            }

            _Log.Log.debug("TokenRevocationClient.revoke: Revoking " + type);
            var client_id = _this._settings.client_id;
            var client_secret = _this._settings.client_secret;
            return _this._revoke(url, client_id, client_secret, token, type);
        });
    };

    TokenRevocationClient.prototype._revoke = function _revoke(url, client_id, client_secret, token, type) {
        var _this2 = this;

        return new Promise(function (resolve, reject) {

            var xhr = new _this2._XMLHttpRequestCtor();
            xhr.open("POST", url);

            xhr.onload = function () {
                _Log.Log.debug("TokenRevocationClient.revoke: HTTP response received, status", xhr.status);

                if (xhr.status === 200) {
                    resolve();
                } else {
                    reject(Error(xhr.statusText + " (" + xhr.status + ")"));
                }
            };
            xhr.onerror = function () {
                _Log.Log.debug("TokenRevocationClient.revoke: Network Error.");
                reject("Network Error");
            };

            var body = "client_id=" + encodeURIComponent(client_id);
            if (client_secret) {
                body += "&client_secret=" + encodeURIComponent(client_secret);
            }
            body += "&token_type_hint=" + encodeURIComponent(type);
            body += "&token=" + encodeURIComponent(token);

            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send(body);
        });
    };

    return TokenRevocationClient;
}();

/***/ }),

/***/ "./src/UrlUtility.js":
/*!***************************!*\
  !*** ./src/UrlUtility.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UrlUtility = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var UrlUtility = exports.UrlUtility = function () {
    function UrlUtility() {
        _classCallCheck(this, UrlUtility);
    }

    UrlUtility.addQueryParam = function addQueryParam(url, name, value) {
        if (url.indexOf('?') < 0) {
            url += "?";
        }

        if (url[url.length - 1] !== "?") {
            url += "&";
        }

        url += encodeURIComponent(name);
        url += "=";
        url += encodeURIComponent(value);

        return url;
    };

    UrlUtility.parseUrlFragment = function parseUrlFragment(value) {
        var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#";
        var global = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _Global.Global;

        if (typeof value !== 'string') {
            value = global.location.href;
        }

        var idx = value.lastIndexOf(delimiter);
        if (idx >= 0) {
            value = value.substr(idx + 1);
        }

        if (delimiter === "?") {
            // if we're doing query, then strip off hash fragment before we parse
            idx = value.indexOf('#');
            if (idx >= 0) {
                value = value.substr(0, idx);
            }
        }

        var params = {},
            regex = /([^&=]+)=([^&]*)/g,
            m;

        var counter = 0;
        while (m = regex.exec(value)) {
            params[decodeURIComponent(m[1])] = decodeURIComponent(m[2].replace(/\+/g, ' '));
            if (counter++ > 50) {
                _Log.Log.error("UrlUtility.parseUrlFragment: response exceeded expected number of parameters", value);
                return {
                    error: "Response exceeded expected number of parameters"
                };
            }
        }

        for (var prop in params) {
            return params;
        }

        return {};
    };

    return UrlUtility;
}();

/***/ }),

/***/ "./src/User.js":
/*!*********************!*\
  !*** ./src/User.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.User = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = exports.User = function () {
    function User(_ref) {
        var id_token = _ref.id_token,
            session_state = _ref.session_state,
            access_token = _ref.access_token,
            refresh_token = _ref.refresh_token,
            token_type = _ref.token_type,
            scope = _ref.scope,
            profile = _ref.profile,
            expires_at = _ref.expires_at,
            state = _ref.state;

        _classCallCheck(this, User);

        this.id_token = id_token;
        this.session_state = session_state;
        this.access_token = access_token;
        this.refresh_token = refresh_token;
        this.token_type = token_type;
        this.scope = scope;
        this.profile = profile;
        this.expires_at = expires_at;
        this.state = state;
    }

    User.prototype.toStorageString = function toStorageString() {
        _Log.Log.debug("User.toStorageString");
        return JSON.stringify({
            id_token: this.id_token,
            session_state: this.session_state,
            access_token: this.access_token,
            refresh_token: this.refresh_token,
            token_type: this.token_type,
            scope: this.scope,
            profile: this.profile,
            expires_at: this.expires_at
        });
    };

    User.fromStorageString = function fromStorageString(storageString) {
        _Log.Log.debug("User.fromStorageString");
        return new User(JSON.parse(storageString));
    };

    _createClass(User, [{
        key: 'expires_in',
        get: function get() {
            if (this.expires_at) {
                var now = parseInt(Date.now() / 1000);
                return this.expires_at - now;
            }
            return undefined;
        },
        set: function set(value) {
            var expires_in = parseInt(value);
            if (typeof expires_in === 'number' && expires_in > 0) {
                var now = parseInt(Date.now() / 1000);
                this.expires_at = now + expires_in;
            }
        }
    }, {
        key: 'expired',
        get: function get() {
            var expires_in = this.expires_in;
            if (expires_in !== undefined) {
                return expires_in <= 0;
            }
            return undefined;
        }
    }, {
        key: 'scopes',
        get: function get() {
            return (this.scope || "").split(" ");
        }
    }]);

    return User;
}();

/***/ }),

/***/ "./src/UserInfoService.js":
/*!********************************!*\
  !*** ./src/UserInfoService.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserInfoService = undefined;

var _JsonService = __webpack_require__(/*! ./JsonService.js */ "./src/JsonService.js");

var _MetadataService = __webpack_require__(/*! ./MetadataService.js */ "./src/MetadataService.js");

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _JoseUtil = __webpack_require__(/*! ./JoseUtil.js */ "./src/JoseUtilRsa.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var UserInfoService = exports.UserInfoService = function () {
    function UserInfoService(settings) {
        var JsonServiceCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _JsonService.JsonService;
        var MetadataServiceCtor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _MetadataService.MetadataService;
        var joseUtil = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _JoseUtil.JoseUtil;

        _classCallCheck(this, UserInfoService);

        if (!settings) {
            _Log.Log.error("UserInfoService.ctor: No settings passed");
            throw new Error("settings");
        }

        this._settings = settings;
        this._jsonService = new JsonServiceCtor(undefined, undefined, this._getClaimsFromJwt.bind(this));
        this._metadataService = new MetadataServiceCtor(this._settings);
        this._joseUtil = joseUtil;
    }

    UserInfoService.prototype.getClaims = function getClaims(token) {
        var _this = this;

        if (!token) {
            _Log.Log.error("UserInfoService.getClaims: No token passed");
            return Promise.reject(new Error("A token is required"));
        }

        return this._metadataService.getUserInfoEndpoint().then(function (url) {
            _Log.Log.debug("UserInfoService.getClaims: received userinfo url", url);

            return _this._jsonService.getJson(url, token).then(function (claims) {
                _Log.Log.debug("UserInfoService.getClaims: claims received", claims);
                return claims;
            });
        });
    };

    UserInfoService.prototype._getClaimsFromJwt = function _getClaimsFromJwt(req) {
        var _this2 = this;

        try {
            var jwt = this._joseUtil.parseJwt(req.responseText);
            if (!jwt || !jwt.header || !jwt.payload) {
                _Log.Log.error("UserInfoService._getClaimsFromJwt: Failed to parse JWT", jwt);
                return Promise.reject(new Error("Failed to parse id_token"));
            }

            var kid = jwt.header.kid;

            var issuerPromise = void 0;
            switch (this._settings.userInfoJwtIssuer) {
                case 'OP':
                    issuerPromise = this._metadataService.getIssuer();
                    break;
                case 'ANY':
                    issuerPromise = Promise.resolve(jwt.payload.iss);
                    break;
                default:
                    issuerPromise = Promise.resolve(this._settings.userInfoJwtIssuer);
                    break;
            }

            return issuerPromise.then(function (issuer) {
                _Log.Log.debug("UserInfoService._getClaimsFromJwt: Received issuer:" + issuer);

                return _this2._metadataService.getSigningKeys().then(function (keys) {
                    if (!keys) {
                        _Log.Log.error("UserInfoService._getClaimsFromJwt: No signing keys from metadata");
                        return Promise.reject(new Error("No signing keys from metadata"));
                    }

                    _Log.Log.debug("UserInfoService._getClaimsFromJwt: Received signing keys");
                    var key = void 0;
                    if (!kid) {
                        keys = _this2._filterByAlg(keys, jwt.header.alg);

                        if (keys.length > 1) {
                            _Log.Log.error("UserInfoService._getClaimsFromJwt: No kid found in id_token and more than one key found in metadata");
                            return Promise.reject(new Error("No kid found in id_token and more than one key found in metadata"));
                        } else {
                            // kid is mandatory only when there are multiple keys in the referenced JWK Set document
                            // see http://openid.net/specs/openid-connect-core-1_0.html#Signing
                            key = keys[0];
                        }
                    } else {
                        key = keys.filter(function (key) {
                            return key.kid === kid;
                        })[0];
                    }

                    if (!key) {
                        _Log.Log.error("UserInfoService._getClaimsFromJwt: No key matching kid or alg found in signing keys");
                        return Promise.reject(new Error("No key matching kid or alg found in signing keys"));
                    }

                    var audience = _this2._settings.client_id;

                    var clockSkewInSeconds = _this2._settings.clockSkew;
                    _Log.Log.debug("UserInfoService._getClaimsFromJwt: Validaing JWT; using clock skew (in seconds) of: ", clockSkewInSeconds);

                    return _this2._joseUtil.validateJwt(req.responseText, key, issuer, audience, clockSkewInSeconds, undefined, true).then(function () {
                        _Log.Log.debug("UserInfoService._getClaimsFromJwt: JWT validation successful");
                        return jwt.payload;
                    });
                });
            });
            return;
        } catch (e) {
            _Log.Log.error("UserInfoService._getClaimsFromJwt: Error parsing JWT response", e.message);
            reject(e);
            return;
        }
    };

    UserInfoService.prototype._filterByAlg = function _filterByAlg(keys, alg) {
        var kty = null;
        if (alg.startsWith("RS")) {
            kty = "RSA";
        } else if (alg.startsWith("PS")) {
            kty = "PS";
        } else if (alg.startsWith("ES")) {
            kty = "EC";
        } else {
            _Log.Log.debug("UserInfoService._filterByAlg: alg not supported: ", alg);
            return [];
        }

        _Log.Log.debug("UserInfoService._filterByAlg: Looking for keys that match kty: ", kty);

        keys = keys.filter(function (key) {
            return key.kty === kty;
        });

        _Log.Log.debug("UserInfoService._filterByAlg: Number of keys that match kty: ", kty, keys.length);

        return keys;
    };

    return UserInfoService;
}();

/***/ }),

/***/ "./src/UserManager.js":
/*!****************************!*\
  !*** ./src/UserManager.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserManager = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _OidcClient2 = __webpack_require__(/*! ./OidcClient.js */ "./src/OidcClient.js");

var _UserManagerSettings = __webpack_require__(/*! ./UserManagerSettings.js */ "./src/UserManagerSettings.js");

var _User = __webpack_require__(/*! ./User.js */ "./src/User.js");

var _UserManagerEvents = __webpack_require__(/*! ./UserManagerEvents.js */ "./src/UserManagerEvents.js");

var _SilentRenewService = __webpack_require__(/*! ./SilentRenewService.js */ "./src/SilentRenewService.js");

var _SessionMonitor = __webpack_require__(/*! ./SessionMonitor.js */ "./src/SessionMonitor.js");

var _TokenRevocationClient = __webpack_require__(/*! ./TokenRevocationClient.js */ "./src/TokenRevocationClient.js");

var _TokenClient = __webpack_require__(/*! ./TokenClient.js */ "./src/TokenClient.js");

var _JoseUtil = __webpack_require__(/*! ./JoseUtil.js */ "./src/JoseUtilRsa.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var UserManager = exports.UserManager = function (_OidcClient) {
    _inherits(UserManager, _OidcClient);

    function UserManager() {
        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var SilentRenewServiceCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _SilentRenewService.SilentRenewService;
        var SessionMonitorCtor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _SessionMonitor.SessionMonitor;
        var TokenRevocationClientCtor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _TokenRevocationClient.TokenRevocationClient;
        var TokenClientCtor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _TokenClient.TokenClient;
        var joseUtil = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : _JoseUtil.JoseUtil;

        _classCallCheck(this, UserManager);

        if (!(settings instanceof _UserManagerSettings.UserManagerSettings)) {
            settings = new _UserManagerSettings.UserManagerSettings(settings);
        }

        var _this = _possibleConstructorReturn(this, _OidcClient.call(this, settings));

        _this._events = new _UserManagerEvents.UserManagerEvents(settings);
        _this._silentRenewService = new SilentRenewServiceCtor(_this);

        // order is important for the following properties; these services depend upon the events.
        if (_this.settings.automaticSilentRenew) {
            _Log.Log.debug("UserManager.ctor: automaticSilentRenew is configured, setting up silent renew");
            _this.startSilentRenew();
        }

        if (_this.settings.monitorSession) {
            _Log.Log.debug("UserManager.ctor: monitorSession is configured, setting up session monitor");
            _this._sessionMonitor = new SessionMonitorCtor(_this);
        }

        _this._tokenRevocationClient = new TokenRevocationClientCtor(_this._settings);
        _this._tokenClient = new TokenClientCtor(_this._settings);
        _this._joseUtil = joseUtil;
        return _this;
    }

    UserManager.prototype.getUser = function getUser() {
        var _this2 = this;

        return this._loadUser().then(function (user) {
            if (user) {
                _Log.Log.info("UserManager.getUser: user loaded");

                _this2._events.load(user, false);

                return user;
            } else {
                _Log.Log.info("UserManager.getUser: user not found in storage");
                return null;
            }
        });
    };

    UserManager.prototype.removeUser = function removeUser() {
        var _this3 = this;

        return this.storeUser(null).then(function () {
            _Log.Log.info("UserManager.removeUser: user removed from storage");
            _this3._events.unload();
        });
    };

    UserManager.prototype.signinRedirect = function signinRedirect() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args = Object.assign({}, args);

        args.request_type = "si:r";
        var navParams = {
            useReplaceToNavigate: args.useReplaceToNavigate
        };
        return this._signinStart(args, this._redirectNavigator, navParams).then(function () {
            _Log.Log.info("UserManager.signinRedirect: successful");
        });
    };

    UserManager.prototype.signinRedirectCallback = function signinRedirectCallback(url) {
        return this._signinEnd(url || this._redirectNavigator.url).then(function (user) {
            if (user.profile && user.profile.sub) {
                _Log.Log.info("UserManager.signinRedirectCallback: successful, signed in sub: ", user.profile.sub);
            } else {
                _Log.Log.info("UserManager.signinRedirectCallback: no sub");
            }

            return user;
        });
    };

    UserManager.prototype.signinPopup = function signinPopup() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args = Object.assign({}, args);

        args.request_type = "si:p";
        var url = args.redirect_uri || this.settings.popup_redirect_uri || this.settings.redirect_uri;
        if (!url) {
            _Log.Log.error("UserManager.signinPopup: No popup_redirect_uri or redirect_uri configured");
            return Promise.reject(new Error("No popup_redirect_uri or redirect_uri configured"));
        }

        args.redirect_uri = url;
        args.display = "popup";

        return this._signin(args, this._popupNavigator, {
            startUrl: url,
            popupWindowFeatures: args.popupWindowFeatures || this.settings.popupWindowFeatures,
            popupWindowTarget: args.popupWindowTarget || this.settings.popupWindowTarget
        }).then(function (user) {
            if (user) {
                if (user.profile && user.profile.sub) {
                    _Log.Log.info("UserManager.signinPopup: signinPopup successful, signed in sub: ", user.profile.sub);
                } else {
                    _Log.Log.info("UserManager.signinPopup: no sub");
                }
            }

            return user;
        }).catch(function (reason) {
            _Log.Log.error("UserManager.signinPopup error: ", reason.message);
        });
    };

    UserManager.prototype.signinPopupCallback = function signinPopupCallback(url) {
        return this._signinCallback(url, this._popupNavigator).then(function (user) {
            if (user) {
                if (user.profile && user.profile.sub) {
                    _Log.Log.info("UserManager.signinPopupCallback: successful, signed in sub: ", user.profile.sub);
                } else {
                    _Log.Log.info("UserManager.signinPopupCallback: no sub");
                }
            }

            return user;
        }).catch(function (err) {
            _Log.Log.error( true && err.message);
        });
    };

    UserManager.prototype.signinSilent = function signinSilent() {
        var _this4 = this;

        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args = Object.assign({}, args);

        args.request_type = "si:s";
        // first determine if we have a refresh token, or need to use iframe
        return this._loadUser().then(function (user) {
            if (user && user.refresh_token) {
                args.refresh_token = user.refresh_token;
                return _this4._useRefreshToken(args);
            } else {
                args.id_token_hint = args.id_token_hint || _this4.settings.includeIdTokenInSilentRenew && user && user.id_token;
                if (user && _this4._settings.validateSubOnSilentRenew) {
                    _Log.Log.debug("UserManager.signinSilent, subject prior to silent renew: ", user.profile.sub);
                    args.current_sub = user.profile.sub;
                }
                return _this4._signinSilentIframe(args);
            }
        });
    };

    UserManager.prototype._useRefreshToken = function _useRefreshToken() {
        var _this5 = this;

        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return this._tokenClient.exchangeRefreshToken(args).then(function (result) {
            if (!result) {
                _Log.Log.error("UserManager._useRefreshToken: No response returned from token endpoint");
                return Promise.reject("No response returned from token endpoint");
            }
            if (!result.access_token) {
                _Log.Log.error("UserManager._useRefreshToken: No access token returned from token endpoint");
                return Promise.reject("No access token returned from token endpoint");
            }

            return _this5._loadUser().then(function (user) {
                if (user) {
                    var idTokenValidation = Promise.resolve();
                    if (result.id_token) {
                        idTokenValidation = _this5._validateIdTokenFromTokenRefreshToken(user.profile, result.id_token);
                    }

                    return idTokenValidation.then(function () {
                        _Log.Log.debug("UserManager._useRefreshToken: refresh token response success");
                        user.id_token = result.id_token;
                        user.access_token = result.access_token;
                        user.refresh_token = result.refresh_token || user.refresh_token;
                        user.expires_in = result.expires_in;

                        return _this5.storeUser(user).then(function () {
                            _this5._events.load(user);
                            return user;
                        });
                    });
                } else {
                    return null;
                }
            });
        });
    };

    UserManager.prototype._validateIdTokenFromTokenRefreshToken = function _validateIdTokenFromTokenRefreshToken(profile, id_token) {
        var _this6 = this;

        return this._metadataService.getIssuer().then(function (issuer) {
            return _this6.settings.getEpochTime().then(function (now) {
                return _this6._joseUtil.validateJwtAttributes(id_token, issuer, _this6._settings.client_id, _this6._settings.clockSkew, now).then(function (payload) {
                    if (!payload) {
                        _Log.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: Failed to validate id_token");
                        return Promise.reject(new Error("Failed to validate id_token"));
                    }
                    if (payload.sub !== profile.sub) {
                        _Log.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: sub in id_token does not match current sub");
                        return Promise.reject(new Error("sub in id_token does not match current sub"));
                    }
                    if (payload.auth_time && payload.auth_time !== profile.auth_time) {
                        _Log.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: auth_time in id_token does not match original auth_time");
                        return Promise.reject(new Error("auth_time in id_token does not match original auth_time"));
                    }
                    if (payload.azp && payload.azp !== profile.azp) {
                        _Log.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: azp in id_token does not match original azp");
                        return Promise.reject(new Error("azp in id_token does not match original azp"));
                    }
                    if (!payload.azp && profile.azp) {
                        _Log.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: azp not in id_token, but present in original id_token");
                        return Promise.reject(new Error("azp not in id_token, but present in original id_token"));
                    }
                });
            });
        });
    };

    UserManager.prototype._signinSilentIframe = function _signinSilentIframe() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var url = args.redirect_uri || this.settings.silent_redirect_uri || this.settings.redirect_uri;
        if (!url) {
            _Log.Log.error("UserManager.signinSilent: No silent_redirect_uri configured");
            return Promise.reject(new Error("No silent_redirect_uri configured"));
        }

        args.redirect_uri = url;
        args.prompt = args.prompt || "none";

        return this._signin(args, this._iframeNavigator, {
            startUrl: url,
            silentRequestTimeout: args.silentRequestTimeout || this.settings.silentRequestTimeout
        }).then(function (user) {
            if (user) {
                if (user.profile && user.profile.sub) {
                    _Log.Log.info("UserManager.signinSilent: successful, signed in sub: ", user.profile.sub);
                } else {
                    _Log.Log.info("UserManager.signinSilent: no sub");
                }
            }

            return user;
        });
    };

    UserManager.prototype.signinSilentCallback = function signinSilentCallback(url) {
        return this._signinCallback(url, this._iframeNavigator).then(function (user) {
            if (user) {
                if (user.profile && user.profile.sub) {
                    _Log.Log.info("UserManager.signinSilentCallback: successful, signed in sub: ", user.profile.sub);
                } else {
                    _Log.Log.info("UserManager.signinSilentCallback: no sub");
                }
            }

            return user;
        });
    };

    UserManager.prototype.signinCallback = function signinCallback(url) {
        var _this7 = this;

        return this.readSigninResponseState(url).then(function (_ref) {
            var state = _ref.state,
                response = _ref.response;

            if (state.request_type === "si:r") {
                return _this7.signinRedirectCallback(url);
            }
            if (state.request_type === "si:p") {
                return _this7.signinPopupCallback(url);
            }
            if (state.request_type === "si:s") {
                return _this7.signinSilentCallback(url);
            }
            return Promise.reject(new Error("invalid response_type in state"));
        });
    };

    UserManager.prototype.signoutCallback = function signoutCallback(url, keepOpen) {
        var _this8 = this;

        return this.readSignoutResponseState(url).then(function (_ref2) {
            var state = _ref2.state,
                response = _ref2.response;

            if (state) {
                if (state.request_type === "so:r") {
                    return _this8.signoutRedirectCallback(url);
                }
                if (state.request_type === "so:p") {
                    return _this8.signoutPopupCallback(url, keepOpen);
                }
                return Promise.reject(new Error("invalid response_type in state"));
            }
            return response;
        });
    };

    UserManager.prototype.querySessionStatus = function querySessionStatus() {
        var _this9 = this;

        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args = Object.assign({}, args);

        args.request_type = "si:s"; // this acts like a signin silent
        var url = args.redirect_uri || this.settings.silent_redirect_uri || this.settings.redirect_uri;
        if (!url) {
            _Log.Log.error("UserManager.querySessionStatus: No silent_redirect_uri configured");
            return Promise.reject(new Error("No silent_redirect_uri configured"));
        }

        args.redirect_uri = url;
        args.prompt = "none";
        args.response_type = args.response_type || this.settings.query_status_response_type;
        args.scope = args.scope || "openid";
        args.skipUserInfo = true;

        return this._signinStart(args, this._iframeNavigator, {
            startUrl: url,
            silentRequestTimeout: args.silentRequestTimeout || this.settings.silentRequestTimeout
        }).then(function (navResponse) {
            return _this9.processSigninResponse(navResponse.url).then(function (signinResponse) {
                _Log.Log.debug("UserManager.querySessionStatus: got signin response");

                if (signinResponse.session_state && signinResponse.profile.sub) {
                    _Log.Log.info("UserManager.querySessionStatus: querySessionStatus success for sub: ", signinResponse.profile.sub);
                    return {
                        session_state: signinResponse.session_state,
                        sub: signinResponse.profile.sub,
                        sid: signinResponse.profile.sid
                    };
                } else {
                    _Log.Log.info("querySessionStatus successful, user not authenticated");
                }
            }).catch(function (err) {
                if (err.session_state && _this9.settings.monitorAnonymousSession) {
                    if (err.message == "login_required" || err.message == "consent_required" || err.message == "interaction_required" || err.message == "account_selection_required") {
                        _Log.Log.info("UserManager.querySessionStatus: querySessionStatus success for anonymous user");
                        return {
                            session_state: err.session_state
                        };
                    }
                }

                throw err;
            });
        });
    };

    UserManager.prototype._signin = function _signin(args, navigator) {
        var _this10 = this;

        var navigatorParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        return this._signinStart(args, navigator, navigatorParams).then(function (navResponse) {
            return _this10._signinEnd(navResponse.url, args);
        });
    };

    UserManager.prototype._signinStart = function _signinStart(args, navigator) {
        var _this11 = this;

        var navigatorParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};


        return navigator.prepare(navigatorParams).then(function (handle) {
            _Log.Log.debug("UserManager._signinStart: got navigator window handle");

            return _this11.createSigninRequest(args).then(function (signinRequest) {
                _Log.Log.debug("UserManager._signinStart: got signin request");

                navigatorParams.url = signinRequest.url;
                navigatorParams.id = signinRequest.state.id;

                return handle.navigate(navigatorParams);
            }).catch(function (err) {
                if (handle.close) {
                    _Log.Log.debug("UserManager._signinStart: Error after preparing navigator, closing navigator window");
                    handle.close();
                }
                throw err;
            });
        });
    };

    UserManager.prototype._signinEnd = function _signinEnd(url) {
        var _this12 = this;

        var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return this.processSigninResponse(url).then(function (signinResponse) {
            _Log.Log.debug("UserManager._signinEnd: got signin response");

            var user = new _User.User(signinResponse);

            if (args.current_sub) {
                if (args.current_sub !== user.profile.sub) {
                    _Log.Log.debug("UserManager._signinEnd: current user does not match user returned from signin. sub from signin: ", user.profile.sub);
                    return Promise.reject(new Error("login_required"));
                } else {
                    _Log.Log.debug("UserManager._signinEnd: current user matches user returned from signin");
                }
            }

            return _this12.storeUser(user).then(function () {
                _Log.Log.debug("UserManager._signinEnd: user stored");

                _this12._events.load(user);

                return user;
            });
        });
    };

    UserManager.prototype._signinCallback = function _signinCallback(url, navigator) {
        _Log.Log.debug("UserManager._signinCallback");
        return navigator.callback(url);
    };

    UserManager.prototype.signoutRedirect = function signoutRedirect() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args = Object.assign({}, args);

        args.request_type = "so:r";
        var postLogoutRedirectUri = args.post_logout_redirect_uri || this.settings.post_logout_redirect_uri;
        if (postLogoutRedirectUri) {
            args.post_logout_redirect_uri = postLogoutRedirectUri;
        }
        var navParams = {
            useReplaceToNavigate: args.useReplaceToNavigate
        };
        return this._signoutStart(args, this._redirectNavigator, navParams).then(function () {
            _Log.Log.info("UserManager.signoutRedirect: successful");
        });
    };

    UserManager.prototype.signoutRedirectCallback = function signoutRedirectCallback(url) {
        return this._signoutEnd(url || this._redirectNavigator.url).then(function (response) {
            _Log.Log.info("UserManager.signoutRedirectCallback: successful");
            return response;
        });
    };

    UserManager.prototype.signoutPopup = function signoutPopup() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args = Object.assign({}, args);

        args.request_type = "so:p";
        var url = args.post_logout_redirect_uri || this.settings.popup_post_logout_redirect_uri || this.settings.post_logout_redirect_uri;
        args.post_logout_redirect_uri = url;
        args.display = "popup";
        if (args.post_logout_redirect_uri) {
            // we're putting a dummy entry in here because we
            // need a unique id from the state for notification
            // to the parent window, which is necessary if we
            // plan to return back to the client after signout
            // and so we can close the popup after signout
            args.state = args.state || {};
        }

        return this._signout(args, this._popupNavigator, {
            startUrl: url,
            popupWindowFeatures: args.popupWindowFeatures || this.settings.popupWindowFeatures,
            popupWindowTarget: args.popupWindowTarget || this.settings.popupWindowTarget
        }).then(function () {
            _Log.Log.info("UserManager.signoutPopup: successful");
        });
    };

    UserManager.prototype.signoutPopupCallback = function signoutPopupCallback(url, keepOpen) {
        if (typeof keepOpen === 'undefined' && typeof url === 'boolean') {
            keepOpen = url;
            url = null;
        }

        var delimiter = '?';
        return this._popupNavigator.callback(url, keepOpen, delimiter).then(function () {
            _Log.Log.info("UserManager.signoutPopupCallback: successful");
        });
    };

    UserManager.prototype._signout = function _signout(args, navigator) {
        var _this13 = this;

        var navigatorParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        return this._signoutStart(args, navigator, navigatorParams).then(function (navResponse) {
            return _this13._signoutEnd(navResponse.url);
        });
    };

    UserManager.prototype._signoutStart = function _signoutStart() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _this14 = this;

        var navigator = arguments[1];
        var navigatorParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        return navigator.prepare(navigatorParams).then(function (handle) {
            _Log.Log.debug("UserManager._signoutStart: got navigator window handle");

            return _this14._loadUser().then(function (user) {
                _Log.Log.debug("UserManager._signoutStart: loaded current user from storage");

                var revokePromise = _this14._settings.revokeAccessTokenOnSignout ? _this14._revokeInternal(user) : Promise.resolve();
                return revokePromise.then(function () {

                    var id_token = args.id_token_hint || user && user.id_token;
                    if (id_token) {
                        _Log.Log.debug("UserManager._signoutStart: Setting id_token into signout request");
                        args.id_token_hint = id_token;
                    }

                    return _this14.removeUser().then(function () {
                        _Log.Log.debug("UserManager._signoutStart: user removed, creating signout request");

                        return _this14.createSignoutRequest(args).then(function (signoutRequest) {
                            _Log.Log.debug("UserManager._signoutStart: got signout request");

                            navigatorParams.url = signoutRequest.url;
                            if (signoutRequest.state) {
                                navigatorParams.id = signoutRequest.state.id;
                            }
                            return handle.navigate(navigatorParams);
                        });
                    });
                });
            }).catch(function (err) {
                if (handle.close) {
                    _Log.Log.debug("UserManager._signoutStart: Error after preparing navigator, closing navigator window");
                    handle.close();
                }
                throw err;
            });
        });
    };

    UserManager.prototype._signoutEnd = function _signoutEnd(url) {
        return this.processSignoutResponse(url).then(function (signoutResponse) {
            _Log.Log.debug("UserManager._signoutEnd: got signout response");

            return signoutResponse;
        });
    };

    UserManager.prototype.revokeAccessToken = function revokeAccessToken() {
        var _this15 = this;

        return this._loadUser().then(function (user) {
            return _this15._revokeInternal(user, true).then(function (success) {
                if (success) {
                    _Log.Log.debug("UserManager.revokeAccessToken: removing token properties from user and re-storing");

                    user.access_token = null;
                    user.refresh_token = null;
                    user.expires_at = null;
                    user.token_type = null;

                    return _this15.storeUser(user).then(function () {
                        _Log.Log.debug("UserManager.revokeAccessToken: user stored");
                        _this15._events.load(user);
                    });
                }
            });
        }).then(function () {
            _Log.Log.info("UserManager.revokeAccessToken: access token revoked successfully");
        });
    };

    UserManager.prototype._revokeInternal = function _revokeInternal(user, required) {
        var _this16 = this;

        if (user) {
            var access_token = user.access_token;
            var refresh_token = user.refresh_token;

            return this._revokeAccessTokenInternal(access_token, required).then(function (atSuccess) {
                return _this16._revokeRefreshTokenInternal(refresh_token, required).then(function (rtSuccess) {
                    if (!atSuccess && !rtSuccess) {
                        _Log.Log.debug("UserManager.revokeAccessToken: no need to revoke due to no token(s), or JWT format");
                    }

                    return atSuccess || rtSuccess;
                });
            });
        }

        return Promise.resolve(false);
    };

    UserManager.prototype._revokeAccessTokenInternal = function _revokeAccessTokenInternal(access_token, required) {
        // check for JWT vs. reference token
        if (!access_token || access_token.indexOf('.') >= 0) {
            return Promise.resolve(false);
        }

        return this._tokenRevocationClient.revoke(access_token, required).then(function () {
            return true;
        });
    };

    UserManager.prototype._revokeRefreshTokenInternal = function _revokeRefreshTokenInternal(refresh_token, required) {
        if (!refresh_token) {
            return Promise.resolve(false);
        }

        return this._tokenRevocationClient.revoke(refresh_token, required, "refresh_token").then(function () {
            return true;
        });
    };

    UserManager.prototype.startSilentRenew = function startSilentRenew() {
        this._silentRenewService.start();
    };

    UserManager.prototype.stopSilentRenew = function stopSilentRenew() {
        this._silentRenewService.stop();
    };

    UserManager.prototype._loadUser = function _loadUser() {
        return this._userStore.get(this._userStoreKey).then(function (storageString) {
            if (storageString) {
                _Log.Log.debug("UserManager._loadUser: user storageString loaded");
                return _User.User.fromStorageString(storageString);
            }

            _Log.Log.debug("UserManager._loadUser: no user storageString");
            return null;
        });
    };

    UserManager.prototype.storeUser = function storeUser(user) {
        if (user) {
            _Log.Log.debug("UserManager.storeUser: storing user");

            var storageString = user.toStorageString();
            return this._userStore.set(this._userStoreKey, storageString);
        } else {
            _Log.Log.debug("storeUser.storeUser: removing user");
            return this._userStore.remove(this._userStoreKey);
        }
    };

    _createClass(UserManager, [{
        key: '_redirectNavigator',
        get: function get() {
            return this.settings.redirectNavigator;
        }
    }, {
        key: '_popupNavigator',
        get: function get() {
            return this.settings.popupNavigator;
        }
    }, {
        key: '_iframeNavigator',
        get: function get() {
            return this.settings.iframeNavigator;
        }
    }, {
        key: '_userStore',
        get: function get() {
            return this.settings.userStore;
        }
    }, {
        key: 'events',
        get: function get() {
            return this._events;
        }
    }, {
        key: '_userStoreKey',
        get: function get() {
            return 'user:' + this.settings.authority + ':' + this.settings.client_id;
        }
    }]);

    return UserManager;
}(_OidcClient2.OidcClient);

/***/ }),

/***/ "./src/UserManagerEvents.js":
/*!**********************************!*\
  !*** ./src/UserManagerEvents.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserManagerEvents = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _AccessTokenEvents2 = __webpack_require__(/*! ./AccessTokenEvents.js */ "./src/AccessTokenEvents.js");

var _Event = __webpack_require__(/*! ./Event.js */ "./src/Event.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var UserManagerEvents = exports.UserManagerEvents = function (_AccessTokenEvents) {
    _inherits(UserManagerEvents, _AccessTokenEvents);

    function UserManagerEvents(settings) {
        _classCallCheck(this, UserManagerEvents);

        var _this = _possibleConstructorReturn(this, _AccessTokenEvents.call(this, settings));

        _this._userLoaded = new _Event.Event("User loaded");
        _this._userUnloaded = new _Event.Event("User unloaded");
        _this._silentRenewError = new _Event.Event("Silent renew error");
        _this._userSignedIn = new _Event.Event("User signed in");
        _this._userSignedOut = new _Event.Event("User signed out");
        _this._userSessionChanged = new _Event.Event("User session changed");
        return _this;
    }

    UserManagerEvents.prototype.load = function load(user) {
        var raiseEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        _Log.Log.debug("UserManagerEvents.load");
        _AccessTokenEvents.prototype.load.call(this, user);
        if (raiseEvent) {
            this._userLoaded.raise(user);
        }
    };

    UserManagerEvents.prototype.unload = function unload() {
        _Log.Log.debug("UserManagerEvents.unload");
        _AccessTokenEvents.prototype.unload.call(this);
        this._userUnloaded.raise();
    };

    UserManagerEvents.prototype.addUserLoaded = function addUserLoaded(cb) {
        this._userLoaded.addHandler(cb);
    };

    UserManagerEvents.prototype.removeUserLoaded = function removeUserLoaded(cb) {
        this._userLoaded.removeHandler(cb);
    };

    UserManagerEvents.prototype.addUserUnloaded = function addUserUnloaded(cb) {
        this._userUnloaded.addHandler(cb);
    };

    UserManagerEvents.prototype.removeUserUnloaded = function removeUserUnloaded(cb) {
        this._userUnloaded.removeHandler(cb);
    };

    UserManagerEvents.prototype.addSilentRenewError = function addSilentRenewError(cb) {
        this._silentRenewError.addHandler(cb);
    };

    UserManagerEvents.prototype.removeSilentRenewError = function removeSilentRenewError(cb) {
        this._silentRenewError.removeHandler(cb);
    };

    UserManagerEvents.prototype._raiseSilentRenewError = function _raiseSilentRenewError(e) {
        _Log.Log.debug("UserManagerEvents._raiseSilentRenewError", e.message);
        this._silentRenewError.raise(e);
    };

    UserManagerEvents.prototype.addUserSignedIn = function addUserSignedIn(cb) {
        this._userSignedIn.addHandler(cb);
    };

    UserManagerEvents.prototype.removeUserSignedIn = function removeUserSignedIn(cb) {
        this._userSignedIn.removeHandler(cb);
    };

    UserManagerEvents.prototype._raiseUserSignedIn = function _raiseUserSignedIn() {
        _Log.Log.debug("UserManagerEvents._raiseUserSignedIn");
        this._userSignedIn.raise();
    };

    UserManagerEvents.prototype.addUserSignedOut = function addUserSignedOut(cb) {
        this._userSignedOut.addHandler(cb);
    };

    UserManagerEvents.prototype.removeUserSignedOut = function removeUserSignedOut(cb) {
        this._userSignedOut.removeHandler(cb);
    };

    UserManagerEvents.prototype._raiseUserSignedOut = function _raiseUserSignedOut() {
        _Log.Log.debug("UserManagerEvents._raiseUserSignedOut");
        this._userSignedOut.raise();
    };

    UserManagerEvents.prototype.addUserSessionChanged = function addUserSessionChanged(cb) {
        this._userSessionChanged.addHandler(cb);
    };

    UserManagerEvents.prototype.removeUserSessionChanged = function removeUserSessionChanged(cb) {
        this._userSessionChanged.removeHandler(cb);
    };

    UserManagerEvents.prototype._raiseUserSessionChanged = function _raiseUserSessionChanged() {
        _Log.Log.debug("UserManagerEvents._raiseUserSessionChanged");
        this._userSessionChanged.raise();
    };

    return UserManagerEvents;
}(_AccessTokenEvents2.AccessTokenEvents);

/***/ }),

/***/ "./src/UserManagerSettings.js":
/*!************************************!*\
  !*** ./src/UserManagerSettings.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserManagerSettings = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _OidcClientSettings2 = __webpack_require__(/*! ./OidcClientSettings.js */ "./src/OidcClientSettings.js");

var _RedirectNavigator = __webpack_require__(/*! ./RedirectNavigator.js */ "./src/RedirectNavigator.js");

var _PopupNavigator = __webpack_require__(/*! ./PopupNavigator.js */ "./src/PopupNavigator.js");

var _IFrameNavigator = __webpack_require__(/*! ./IFrameNavigator.js */ "./src/IFrameNavigator.js");

var _WebStorageStateStore = __webpack_require__(/*! ./WebStorageStateStore.js */ "./src/WebStorageStateStore.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

var _SigninRequest = __webpack_require__(/*! ./SigninRequest.js */ "./src/SigninRequest.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var DefaultAccessTokenExpiringNotificationTime = 60;
var DefaultCheckSessionInterval = 2000;

var UserManagerSettings = exports.UserManagerSettings = function (_OidcClientSettings) {
    _inherits(UserManagerSettings, _OidcClientSettings);

    function UserManagerSettings() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            popup_redirect_uri = _ref.popup_redirect_uri,
            popup_post_logout_redirect_uri = _ref.popup_post_logout_redirect_uri,
            popupWindowFeatures = _ref.popupWindowFeatures,
            popupWindowTarget = _ref.popupWindowTarget,
            silent_redirect_uri = _ref.silent_redirect_uri,
            silentRequestTimeout = _ref.silentRequestTimeout,
            _ref$automaticSilentR = _ref.automaticSilentRenew,
            automaticSilentRenew = _ref$automaticSilentR === undefined ? false : _ref$automaticSilentR,
            _ref$validateSubOnSil = _ref.validateSubOnSilentRenew,
            validateSubOnSilentRenew = _ref$validateSubOnSil === undefined ? false : _ref$validateSubOnSil,
            _ref$includeIdTokenIn = _ref.includeIdTokenInSilentRenew,
            includeIdTokenInSilentRenew = _ref$includeIdTokenIn === undefined ? true : _ref$includeIdTokenIn,
            _ref$monitorSession = _ref.monitorSession,
            monitorSession = _ref$monitorSession === undefined ? true : _ref$monitorSession,
            _ref$monitorAnonymous = _ref.monitorAnonymousSession,
            monitorAnonymousSession = _ref$monitorAnonymous === undefined ? false : _ref$monitorAnonymous,
            _ref$checkSessionInte = _ref.checkSessionInterval,
            checkSessionInterval = _ref$checkSessionInte === undefined ? DefaultCheckSessionInterval : _ref$checkSessionInte,
            _ref$stopCheckSession = _ref.stopCheckSessionOnError,
            stopCheckSessionOnError = _ref$stopCheckSession === undefined ? true : _ref$stopCheckSession,
            query_status_response_type = _ref.query_status_response_type,
            _ref$revokeAccessToke = _ref.revokeAccessTokenOnSignout,
            revokeAccessTokenOnSignout = _ref$revokeAccessToke === undefined ? false : _ref$revokeAccessToke,
            _ref$accessTokenExpir = _ref.accessTokenExpiringNotificationTime,
            accessTokenExpiringNotificationTime = _ref$accessTokenExpir === undefined ? DefaultAccessTokenExpiringNotificationTime : _ref$accessTokenExpir,
            _ref$redirectNavigato = _ref.redirectNavigator,
            redirectNavigator = _ref$redirectNavigato === undefined ? new _RedirectNavigator.RedirectNavigator() : _ref$redirectNavigato,
            _ref$popupNavigator = _ref.popupNavigator,
            popupNavigator = _ref$popupNavigator === undefined ? new _PopupNavigator.PopupNavigator() : _ref$popupNavigator,
            _ref$iframeNavigator = _ref.iframeNavigator,
            iframeNavigator = _ref$iframeNavigator === undefined ? new _IFrameNavigator.IFrameNavigator() : _ref$iframeNavigator,
            _ref$userStore = _ref.userStore,
            userStore = _ref$userStore === undefined ? new _WebStorageStateStore.WebStorageStateStore({ store: _Global.Global.sessionStorage }) : _ref$userStore;

        _classCallCheck(this, UserManagerSettings);

        var _this = _possibleConstructorReturn(this, _OidcClientSettings.call(this, arguments[0]));

        _this._popup_redirect_uri = popup_redirect_uri;
        _this._popup_post_logout_redirect_uri = popup_post_logout_redirect_uri;
        _this._popupWindowFeatures = popupWindowFeatures;
        _this._popupWindowTarget = popupWindowTarget;

        _this._silent_redirect_uri = silent_redirect_uri;
        _this._silentRequestTimeout = silentRequestTimeout;
        _this._automaticSilentRenew = automaticSilentRenew;
        _this._validateSubOnSilentRenew = validateSubOnSilentRenew;
        _this._includeIdTokenInSilentRenew = includeIdTokenInSilentRenew;
        _this._accessTokenExpiringNotificationTime = accessTokenExpiringNotificationTime;

        _this._monitorSession = monitorSession;
        _this._monitorAnonymousSession = monitorAnonymousSession;
        _this._checkSessionInterval = checkSessionInterval;
        _this._stopCheckSessionOnError = stopCheckSessionOnError;
        if (query_status_response_type) {
            _this._query_status_response_type = query_status_response_type;
        } else if (arguments[0] && arguments[0].response_type) {
            _this._query_status_response_type = _SigninRequest.SigninRequest.isOidc(arguments[0].response_type) ? "id_token" : "code";
        } else {
            _this._query_status_response_type = "id_token";
        }
        _this._revokeAccessTokenOnSignout = revokeAccessTokenOnSignout;

        _this._redirectNavigator = redirectNavigator;
        _this._popupNavigator = popupNavigator;
        _this._iframeNavigator = iframeNavigator;

        _this._userStore = userStore;
        return _this;
    }

    _createClass(UserManagerSettings, [{
        key: 'popup_redirect_uri',
        get: function get() {
            return this._popup_redirect_uri;
        }
    }, {
        key: 'popup_post_logout_redirect_uri',
        get: function get() {
            return this._popup_post_logout_redirect_uri;
        }
    }, {
        key: 'popupWindowFeatures',
        get: function get() {
            return this._popupWindowFeatures;
        }
    }, {
        key: 'popupWindowTarget',
        get: function get() {
            return this._popupWindowTarget;
        }
    }, {
        key: 'silent_redirect_uri',
        get: function get() {
            return this._silent_redirect_uri;
        }
    }, {
        key: 'silentRequestTimeout',
        get: function get() {
            return this._silentRequestTimeout;
        }
    }, {
        key: 'automaticSilentRenew',
        get: function get() {
            return this._automaticSilentRenew;
        }
    }, {
        key: 'validateSubOnSilentRenew',
        get: function get() {
            return this._validateSubOnSilentRenew;
        }
    }, {
        key: 'includeIdTokenInSilentRenew',
        get: function get() {
            return this._includeIdTokenInSilentRenew;
        }
    }, {
        key: 'accessTokenExpiringNotificationTime',
        get: function get() {
            return this._accessTokenExpiringNotificationTime;
        }
    }, {
        key: 'monitorSession',
        get: function get() {
            return this._monitorSession;
        }
    }, {
        key: 'monitorAnonymousSession',
        get: function get() {
            return this._monitorAnonymousSession;
        }
    }, {
        key: 'checkSessionInterval',
        get: function get() {
            return this._checkSessionInterval;
        }
    }, {
        key: 'stopCheckSessionOnError',
        get: function get() {
            return this._stopCheckSessionOnError;
        }
    }, {
        key: 'query_status_response_type',
        get: function get() {
            return this._query_status_response_type;
        }
    }, {
        key: 'revokeAccessTokenOnSignout',
        get: function get() {
            return this._revokeAccessTokenOnSignout;
        }
    }, {
        key: 'redirectNavigator',
        get: function get() {
            return this._redirectNavigator;
        }
    }, {
        key: 'popupNavigator',
        get: function get() {
            return this._popupNavigator;
        }
    }, {
        key: 'iframeNavigator',
        get: function get() {
            return this._iframeNavigator;
        }
    }, {
        key: 'userStore',
        get: function get() {
            return this._userStore;
        }
    }]);

    return UserManagerSettings;
}(_OidcClientSettings2.OidcClientSettings);

/***/ }),

/***/ "./src/WebStorageStateStore.js":
/*!*************************************!*\
  !*** ./src/WebStorageStateStore.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WebStorageStateStore = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var WebStorageStateStore = exports.WebStorageStateStore = function () {
    function WebStorageStateStore() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$prefix = _ref.prefix,
            prefix = _ref$prefix === undefined ? "oidc." : _ref$prefix,
            _ref$store = _ref.store,
            store = _ref$store === undefined ? _Global.Global.localStorage : _ref$store;

        _classCallCheck(this, WebStorageStateStore);

        this._store = store;
        this._prefix = prefix;
    }

    WebStorageStateStore.prototype.set = function set(key, value) {
        _Log.Log.debug("WebStorageStateStore.set", key);

        key = this._prefix + key;

        this._store.setItem(key, value);

        return Promise.resolve();
    };

    WebStorageStateStore.prototype.get = function get(key) {
        _Log.Log.debug("WebStorageStateStore.get", key);

        key = this._prefix + key;

        var item = this._store.getItem(key);

        return Promise.resolve(item);
    };

    WebStorageStateStore.prototype.remove = function remove(key) {
        _Log.Log.debug("WebStorageStateStore.remove", key);

        key = this._prefix + key;

        var item = this._store.getItem(key);
        this._store.removeItem(key);

        return Promise.resolve(item);
    };

    WebStorageStateStore.prototype.getAllKeys = function getAllKeys() {
        _Log.Log.debug("WebStorageStateStore.getAllKeys");

        var keys = [];

        for (var index = 0; index < this._store.length; index++) {
            var key = this._store.key(index);

            if (key.indexOf(this._prefix) === 0) {
                keys.push(key.substr(this._prefix.length));
            }
        }

        return Promise.resolve(keys);
    };

    return WebStorageStateStore;
}();

/***/ }),

/***/ "./src/crypto/rsa.js":
/*!***************************!*\
  !*** ./src/crypto/rsa.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AllowedSigningAlgs = exports.b64tohex = exports.hextob64u = exports.crypto = exports.X509 = exports.KeyUtil = exports.jws = undefined;

var _jsbn = __webpack_require__(/*! jsbn */ "./node_modules/jsbn/index.js");

var _jsbn2 = _interopRequireDefault(_jsbn);

var _sha = __webpack_require__(/*! crypto-js/sha256 */ "./node_modules/crypto-js/sha256.js");

var _sha2 = _interopRequireDefault(_sha);

var _base64Js = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js");

var _base64Js2 = _interopRequireDefault(_base64Js);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BigInteger = _jsbn2.default.BigInteger;

/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
 */
/*
Based on the work of Auth0
https://github.com/auth0/idtoken-verifier
https://github.com/auth0/idtoken-verifier/blob/master/LICENSE
Which is based on the work of Tom Wu
http://www-cs-students.stanford.edu/~tjw/jsbn/
http://www-cs-students.stanford.edu/~tjw/jsbn/LICENSE
*/

/*
 * To support most basic OpenId use cases (using RSA256), we can get away without
 * requiring the full jrsasign feature set (and resulting massive bundle).
 *
 * - Support RSA 256 algorithm (optionally could support RSA* family)
 * - Parse JWT tokens using the (n) parameter.
 * - Verify signature of id_tokens
 * - Verify at_hash of access_tokens
 * - Perform common base64 encoding/decoding tasks.
 */

var b64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var b64pad = "=";

var Base64 = {
    b64tohex: function b64tohex(s) {
        var ret = "";
        var i;
        var k = 0; // b64 state, 0-3
        var slop;
        for (i = 0; i < s.length; ++i) {
            if (s.charAt(i) === b64pad) break;
            var v = b64map.indexOf(s.charAt(i));
            if (v < 0) continue;
            if (k === 0) {
                ret += String.fromCharCode(v >> 2);
                slop = v & 3;
                k = 1;
            } else if (k === 1) {
                ret += String.fromCharCode(slop << 2 | v >> 4);
                slop = v & 0xf;
                k = 2;
            } else if (k === 2) {
                ret += String.fromCharCode(slop);
                ret += String.fromCharCode(v >> 2);
                slop = v & 3;
                k = 3;
            } else {
                ret += String.fromCharCode(slop << 2 | v >> 4);
                ret += String.fromCharCode(v & 0xf);
                k = 0;
            }
        }
        if (k === 1) ret += String.fromCharCode(slop << 2);
        return ret;
    },
    hexToBase64: function hexToBase64(h) {
        var i;
        var c;
        var ret = "";
        for (i = 0; i + 3 <= h.length; i += 3) {
            c = parseInt(h.substring(i, i + 3), 16);
            ret += b64map.charAt(c >> 6) + b64map.charAt(c & 63);
        }
        if (i + 1 === h.length) {
            c = parseInt(h.substring(i, i + 1), 16);
            ret += b64map.charAt(c << 2);
        } else if (i + 2 === h.length) {
            c = parseInt(h.substring(i, i + 2), 16);
            ret += b64map.charAt(c >> 2) + b64map.charAt((c & 3) << 4);
        }
        if (b64pad) while ((ret.length & 3) > 0) {
            ret += b64pad;
        }return ret;
    },
    padding: function padding(str) {
        var mod = str.length % 4;
        var pad = 4 - mod;

        if (mod === 0) {
            return str;
        }

        return str + new Array(1 + pad).join('=');
    },
    byteArrayToHex: function byteArrayToHex(raw) {
        var HEX = '';

        for (var i = 0; i < raw.length; i++) {
            var _hex = raw[i].toString(16);
            HEX += _hex.length === 2 ? _hex : '0' + _hex;
        }

        return HEX;
    },
    decodeToHEX: function decodeToHEX(str) {
        return Base64.byteArrayToHex(_base64Js2.default.toByteArray(Base64.padding(str)));
    },
    base64ToBase64Url: function base64ToBase64Url(s) {
        s = s.replace(/=/g, "");
        s = s.replace(/\+/g, "-");
        s = s.replace(/\//g, "_");
        return s;
    },
    urlDecode: function urlDecode(str) {
        str = str.replace(/-/g, '+') // Convert '-' to '+'
        .replace(/_/g, '/') // Convert '_' to '/'
        .replace(/\s/g, ' '); // Convert '\s' to ' '

        return atob(str);
    }
};

var DigestInfoHead = {
    sha1: '3021300906052b0e03021a05000414',
    sha224: '302d300d06096086480165030402040500041c',
    sha256: '3031300d060960864801650304020105000420',
    sha384: '3041300d060960864801650304020205000430',
    sha512: '3051300d060960864801650304020305000440',
    md2: '3020300c06082a864886f70d020205000410',
    md5: '3020300c06082a864886f70d020505000410',
    ripemd160: '3021300906052b2403020105000414'
};

var DigestAlgs = {
    sha256: _sha2.default,
    SHA256: _sha2.default
};

function RSAVerifier(modulus, exp) {
    this.n = null;
    this.e = 0;

    if (modulus != null && exp != null && modulus.length > 0 && exp.length > 0) {
        this.n = new BigInteger(modulus, 16);
        this.e = parseInt(exp, 16);
    } else {
        throw new Error('Invalid key data');
    }
}

function getAlgorithmFromDigest(hDigestInfo) {
    for (var algName in DigestInfoHead) {
        var head = DigestInfoHead[algName];
        var len = head.length;

        if (hDigestInfo.substring(0, len) === head) {
            return {
                alg: algName,
                hash: hDigestInfo.substring(len)
            };
        }
    }
    return [];
}

RSAVerifier.prototype.verify = function (msg, encsig) {
    encsig = Base64.decodeToHEX(encsig);
    encsig = encsig.replace(/[^0-9a-f]|[\s\n]]/ig, '');

    var sig = new BigInteger(encsig, 16);

    if (sig.bitLength() > this.n.bitLength()) {
        throw new Error('Signature does not match with the key modulus.');
    }

    var decryptedSig = sig.modPowInt(this.e, this.n);
    var digest = decryptedSig.toString(16).replace(/^1f+00/, '');
    var digestInfo = getAlgorithmFromDigest(digest);

    if (digestInfo.length === 0) {
        return false;
    }

    if (!DigestAlgs.hasOwnProperty(digestInfo.alg)) {
        throw new Error('Hashing algorithm is not supported.');
    }

    var msgHash = DigestAlgs[digestInfo.alg](msg).toString();
    return digestInfo.hash === msgHash;
};

var AllowedSigningAlgs = ['RS256'];

var jws = {
    JWS: {
        parse: function parse(token) {
            var parts = token.split('.');
            var header;
            var payload;

            // This diverges from Auth0's implementation, which throws rather than
            // returning undefined
            if (parts.length !== 3) {
                return undefined;
            }

            try {
                header = JSON.parse(Base64.urlDecode(parts[0]));
                payload = JSON.parse(Base64.urlDecode(parts[1]));
            } catch (e) {
                return new Error('Token header or payload is not valid JSON');
            }

            return {
                headerObj: header,
                payloadObj: payload
            };
        },
        verify: function verify(jwt, key) {
            var allowedSigningAlgs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

            allowedSigningAlgs.forEach(function (alg) {
                if (AllowedSigningAlgs.indexOf(alg) === -1) {
                    throw new Error('Invalid signing algorithm: ' + alg);
                }
            });
            var verify = new RSAVerifier(key.n, key.e);
            var parts = jwt.split('.');

            var headerAndPayload = [parts[0], parts[1]].join('.');
            return verify.verify(headerAndPayload, parts[2]);
        }
    }
};

var KeyUtil = {
    /**
     * Returns decoded keys in Hex format for use in crypto functions.
     * Supports modulus/exponent-style keys.
     *
     * @param {object} key the security key
     * @returns
     */
    getKey: function getKey(key) {
        if (key.kty === 'RSA') {
            return {
                e: Base64.decodeToHEX(key.e),
                n: Base64.decodeToHEX(key.n)
            };
        }

        return null;
    }
};

var X509 = {
    getPublicKeyFromCertPEM: function getPublicKeyFromCertPEM() {
        throw new Error('Not implemented. Use the full oidc-client library if you need support for X509.');
    }
};

var crypto = {
    Util: {
        hashString: function hashString(value, alg) {
            var hashFunc = DigestAlgs[alg];
            return hashFunc(value).toString();
        }
    }
};

function hextob64u(s) {
    if (s.length % 2 === 1) {
        s = '0' + s;
    }
    return Base64.base64ToBase64Url(Base64.hexToBase64(s));
}

var b64tohex = Base64.b64tohex;
exports.jws = jws;
exports.KeyUtil = KeyUtil;
exports.X509 = X509;
exports.crypto = crypto;
exports.hextob64u = hextob64u;
exports.b64tohex = b64tohex;
exports.AllowedSigningAlgs = AllowedSigningAlgs;

/***/ }),

/***/ "./src/random.js":
/*!***********************!*\
  !*** ./src/random.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = random;
/**
 * Generates RFC4122 version 4 guid ()
 */

var crypto = typeof window !== 'undefined' ? window.crypto || window.msCrypto : null;

function _cryptoUuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
    return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
  });
}

function _uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
    return (c ^ Math.random() * 16 >> c / 4).toString(16);
  });
}

function random() {
  var hasCrypto = crypto != 'undefined' && crypto !== null;
  var hasRandomValues = hasCrypto && typeof crypto.getRandomValues != 'undefined';
  var uuid = hasRandomValues ? _cryptoUuidv4 : _uuidv4;
  return uuid().replace(/-/g, '');
}
module.exports = exports['default'];

/***/ }),

/***/ "./version.js":
/*!********************!*\
  !*** ./version.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Version = "1.11.0";exports.Version = Version;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL3NoYTI1Ni5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNibi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQWNjZXNzVG9rZW5FdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NoZWNrU2Vzc2lvbklGcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2xvY2tTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9Db3Jkb3ZhSUZyYW1lTmF2aWdhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9Db3Jkb3ZhUG9wdXBOYXZpZ2F0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvcmRvdmFQb3B1cFdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3JSZXNwb25zZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSUZyYW1lTmF2aWdhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9JRnJhbWVXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luTWVtb3J5V2ViU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSm9zZVV0aWxJbXBsLmpzIiwid2VicGFjazovLy8uL3NyYy9Kb3NlVXRpbFJzYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSnNvblNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTWV0YWRhdGFTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9PaWRjQ2xpZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9PaWRjQ2xpZW50U2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BvcHVwTmF2aWdhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9Qb3B1cFdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVkaXJlY3ROYXZpZ2F0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc3BvbnNlVmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9TZXNzaW9uTW9uaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2lnbmluUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2lnbmluUmVzcG9uc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpZ25pblN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9TaWdub3V0UmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2lnbm91dFJlc3BvbnNlLmpzIiwid2VicGFjazovLy8uL3NyYy9TaWxlbnRSZW5ld1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9UaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVG9rZW5DbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Rva2VuUmV2b2NhdGlvbkNsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXJsVXRpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXNlckluZm9TZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9Vc2VyTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXNlck1hbmFnZXJFdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXJNYW5hZ2VyU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1dlYlN0b3JhZ2VTdGF0ZVN0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9jcnlwdG8vcnNhLmpzIiwid2VicGFjazovLy8uL3NyYy9yYW5kb20uanMiLCJ3ZWJwYWNrOi8vLy4vdmVyc2lvbi5qcyJdLCJuYW1lcyI6WyJWZXJzaW9uIiwiTG9nIiwiT2lkY0NsaWVudCIsIk9pZGNDbGllbnRTZXR0aW5ncyIsIldlYlN0b3JhZ2VTdGF0ZVN0b3JlIiwiSW5NZW1vcnlXZWJTdG9yYWdlIiwiVXNlck1hbmFnZXIiLCJBY2Nlc3NUb2tlbkV2ZW50cyIsIk1ldGFkYXRhU2VydmljZSIsIkNvcmRvdmFQb3B1cE5hdmlnYXRvciIsIkNvcmRvdmFJRnJhbWVOYXZpZ2F0b3IiLCJDaGVja1Nlc3Npb25JRnJhbWUiLCJUb2tlblJldm9jYXRpb25DbGllbnQiLCJTZXNzaW9uTW9uaXRvciIsIkdsb2JhbCIsIlVzZXIiLCJEZWZhdWx0QWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUiLCJhY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSIsImFjY2Vzc1Rva2VuRXhwaXJpbmdUaW1lciIsIlRpbWVyIiwiYWNjZXNzVG9rZW5FeHBpcmVkVGltZXIiLCJfYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUiLCJfYWNjZXNzVG9rZW5FeHBpcmluZyIsIl9hY2Nlc3NUb2tlbkV4cGlyZWQiLCJsb2FkIiwiY29udGFpbmVyIiwiYWNjZXNzX3Rva2VuIiwiZXhwaXJlc19pbiIsInVuZGVmaW5lZCIsImR1cmF0aW9uIiwiZGVidWciLCJleHBpcmluZyIsImluaXQiLCJjYW5jZWwiLCJleHBpcmVkIiwidW5sb2FkIiwiYWRkQWNjZXNzVG9rZW5FeHBpcmluZyIsImNiIiwiYWRkSGFuZGxlciIsInJlbW92ZUFjY2Vzc1Rva2VuRXhwaXJpbmciLCJyZW1vdmVIYW5kbGVyIiwiYWRkQWNjZXNzVG9rZW5FeHBpcmVkIiwicmVtb3ZlQWNjZXNzVG9rZW5FeHBpcmVkIiwiRGVmYXVsdEludGVydmFsIiwiY2FsbGJhY2siLCJjbGllbnRfaWQiLCJ1cmwiLCJpbnRlcnZhbCIsInN0b3BPbkVycm9yIiwiX2NhbGxiYWNrIiwiX2NsaWVudF9pZCIsIl91cmwiLCJfaW50ZXJ2YWwiLCJfc3RvcE9uRXJyb3IiLCJpZHgiLCJpbmRleE9mIiwiX2ZyYW1lX29yaWdpbiIsInN1YnN0ciIsIl9mcmFtZSIsIndpbmRvdyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwidmlzaWJpbGl0eSIsInBvc2l0aW9uIiwiZGlzcGxheSIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiUHJvbWlzZSIsInJlc29sdmUiLCJvbmxvYWQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJfYm91bmRNZXNzYWdlRXZlbnQiLCJfbWVzc2FnZSIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIm9yaWdpbiIsInNvdXJjZSIsImNvbnRlbnRXaW5kb3ciLCJkYXRhIiwiZXJyb3IiLCJzdG9wIiwic3RhcnQiLCJzZXNzaW9uX3N0YXRlIiwiX3Nlc3Npb25fc3RhdGUiLCJzZW5kIiwicG9zdE1lc3NhZ2UiLCJfdGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJDbG9ja1NlcnZpY2UiLCJnZXRFcG9jaFRpbWUiLCJEYXRlIiwibm93IiwicHJlcGFyZSIsInBhcmFtcyIsInBvcHVwV2luZG93RmVhdHVyZXMiLCJwb3B1cCIsIkNvcmRvdmFQb3B1cFdpbmRvdyIsIkRlZmF1bHRQb3B1cEZlYXR1cmVzIiwiRGVmYXVsdFBvcHVwVGFyZ2V0IiwiX3Byb21pc2UiLCJyZWplY3QiLCJfcmVzb2x2ZSIsIl9yZWplY3QiLCJmZWF0dXJlcyIsInRhcmdldCIsInBvcHVwV2luZG93VGFyZ2V0IiwicmVkaXJlY3RfdXJpIiwic3RhcnRVcmwiLCJfaXNJbkFwcEJyb3dzZXJJbnN0YWxsZWQiLCJjb3Jkb3ZhTWV0YWRhdGEiLCJzb21lIiwibmFtZSIsImhhc093blByb3BlcnR5IiwibmF2aWdhdGUiLCJfZXJyb3IiLCJjb3Jkb3ZhIiwicmVxdWlyZSIsIm1ldGFkYXRhIiwiX3BvcHVwIiwiSW5BcHBCcm93c2VyIiwib3BlbiIsIl9leGl0Q2FsbGJhY2tFdmVudCIsIl9leGl0Q2FsbGJhY2siLCJfbG9hZFN0YXJ0Q2FsbGJhY2tFdmVudCIsIl9sb2FkU3RhcnRDYWxsYmFjayIsInByb21pc2UiLCJldmVudCIsIl9zdWNjZXNzIiwibWVzc2FnZSIsIl9jbGVhbnVwIiwiRXJyb3IiLCJjbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJFcnJvclJlc3BvbnNlIiwiZXJyb3JfZGVzY3JpcHRpb24iLCJlcnJvcl91cmkiLCJzdGF0ZSIsIkV2ZW50IiwiX25hbWUiLCJfY2FsbGJhY2tzIiwicHVzaCIsImZpbmRJbmRleCIsIml0ZW0iLCJzcGxpY2UiLCJyYWlzZSIsImkiLCJsZW5ndGgiLCJ0aW1lciIsImhhbmRsZSIsInRlc3RpbmciLCJyZXF1ZXN0IiwiX3Rlc3RpbmciLCJzZXRYTUxIdHRwUmVxdWVzdCIsIm5ld1JlcXVlc3QiLCJsb2NhdGlvbiIsImxvY2FsU3RvcmFnZSIsInNlc3Npb25TdG9yYWdlIiwiWE1MSHR0cFJlcXVlc3QiLCJJRnJhbWVOYXZpZ2F0b3IiLCJmcmFtZSIsIklGcmFtZVdpbmRvdyIsIm5vdGlmeVBhcmVudCIsIkRlZmF1bHRUaW1lb3V0IiwidGltZW91dCIsInNpbGVudFJlcXVlc3RUaW1lb3V0Iiwic2V0VGltZW91dCIsIl90aW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwicmVtb3ZlQ2hpbGQiLCJfb3JpZ2luIiwiaHJlZiIsInBhcmVudCIsInByb3RvY29sIiwiaG9zdCIsIl9kYXRhIiwiZ2V0SXRlbSIsImtleSIsInNldEl0ZW0iLCJ2YWx1ZSIsInJlbW92ZUl0ZW0iLCJpbmRleCIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJnZXRKb3NlVXRpbCIsImp3cyIsIktleVV0aWwiLCJYNTA5IiwiY3J5cHRvIiwiaGV4dG9iNjR1IiwiYjY0dG9oZXgiLCJBbGxvd2VkU2lnbmluZ0FsZ3MiLCJwYXJzZUp3dCIsImp3dCIsInRva2VuIiwiSldTIiwicGFyc2UiLCJoZWFkZXIiLCJoZWFkZXJPYmoiLCJwYXlsb2FkIiwicGF5bG9hZE9iaiIsInZhbGlkYXRlSnd0IiwiaXNzdWVyIiwiYXVkaWVuY2UiLCJjbG9ja1NrZXciLCJ0aW1lSW5zZW5zaXRpdmUiLCJrdHkiLCJuIiwiZ2V0S2V5IiwieDVjIiwiaGV4IiwiZ2V0UHVibGljS2V5RnJvbUNlcnRIZXgiLCJjcnYiLCJ4IiwieSIsIkpvc2VVdGlsIiwiX3ZhbGlkYXRlSnd0IiwidmFsaWRhdGVKd3RBdHRyaWJ1dGVzIiwicGFyc2VJbnQiLCJpc3MiLCJhdWQiLCJ2YWxpZEF1ZGllbmNlIiwiQXJyYXkiLCJpc0FycmF5IiwiYXpwIiwibG93ZXJOb3ciLCJ1cHBlck5vdyIsImlhdCIsIm5iZiIsImV4cCIsInRoZW4iLCJ2ZXJpZnkiLCJoYXNoU3RyaW5nIiwiYWxnIiwiVXRpbCIsImhleFRvQmFzZTY0VXJsIiwiSnNvblNlcnZpY2UiLCJhZGRpdGlvbmFsQ29udGVudFR5cGVzIiwiWE1MSHR0cFJlcXVlc3RDdG9yIiwiand0SGFuZGxlciIsIl9jb250ZW50VHlwZXMiLCJzbGljZSIsIl9YTUxIdHRwUmVxdWVzdCIsIl9qd3RIYW5kbGVyIiwiZ2V0SnNvbiIsInJlcSIsImFsbG93ZWRDb250ZW50VHlwZXMiLCJzdGF0dXMiLCJjb250ZW50VHlwZSIsImdldFJlc3BvbnNlSGVhZGVyIiwiZm91bmQiLCJmaW5kIiwic3RhcnRzV2l0aCIsIkpTT04iLCJyZXNwb25zZVRleHQiLCJzdGF0dXNUZXh0Iiwib25lcnJvciIsInNldFJlcXVlc3RIZWFkZXIiLCJwb3N0Rm9ybSIsImVuY29kZVVSSUNvbXBvbmVudCIsIm5vcExvZ2dlciIsImluZm8iLCJ3YXJuIiwiTk9ORSIsIkVSUk9SIiwiV0FSTiIsIklORk8iLCJERUJVRyIsImxvZ2dlciIsImxldmVsIiwicmVzZXQiLCJhcmdzIiwiYXBwbHkiLCJmcm9tIiwiT2lkY01ldGFkYXRhVXJsUGF0aCIsInNldHRpbmdzIiwiSnNvblNlcnZpY2VDdG9yIiwiX3NldHRpbmdzIiwiX2pzb25TZXJ2aWNlIiwiZ2V0TWV0YWRhdGEiLCJtZXRhZGF0YVVybCIsImdldElzc3VlciIsIl9nZXRNZXRhZGF0YVByb3BlcnR5IiwiZ2V0QXV0aG9yaXphdGlvbkVuZHBvaW50IiwiZ2V0VXNlckluZm9FbmRwb2ludCIsImdldFRva2VuRW5kcG9pbnQiLCJvcHRpb25hbCIsImdldENoZWNrU2Vzc2lvbklmcmFtZSIsImdldEVuZFNlc3Npb25FbmRwb2ludCIsImdldFJldm9jYXRpb25FbmRwb2ludCIsImdldEtleXNFbmRwb2ludCIsImdldFNpZ25pbmdLZXlzIiwic2lnbmluZ0tleXMiLCJqd2tzX3VyaSIsImtleVNldCIsImtleXMiLCJfbWV0YWRhdGFVcmwiLCJhdXRob3JpdHkiLCJjcmVhdGVTaWduaW5SZXF1ZXN0IiwicmVzcG9uc2VfdHlwZSIsInNjb3BlIiwicHJvbXB0IiwibWF4X2FnZSIsInVpX2xvY2FsZXMiLCJpZF90b2tlbl9oaW50IiwibG9naW5faGludCIsImFjcl92YWx1ZXMiLCJyZXNvdXJjZSIsInJlcXVlc3RfdXJpIiwicmVzcG9uc2VfbW9kZSIsImV4dHJhUXVlcnlQYXJhbXMiLCJleHRyYVRva2VuUGFyYW1zIiwicmVxdWVzdF90eXBlIiwic2tpcFVzZXJJbmZvIiwic3RhdGVTdG9yZSIsIlNpZ25pblJlcXVlc3QiLCJpc0NvZGUiLCJfbWV0YWRhdGFTZXJ2aWNlIiwic2lnbmluUmVxdWVzdCIsImNsaWVudF9zZWNyZXQiLCJzaWduaW5TdGF0ZSIsIl9zdGF0ZVN0b3JlIiwic2V0IiwiaWQiLCJ0b1N0b3JhZ2VTdHJpbmciLCJyZWFkU2lnbmluUmVzcG9uc2VTdGF0ZSIsInJlbW92ZVN0YXRlIiwidXNlUXVlcnkiLCJkZWxpbWl0ZXIiLCJyZXNwb25zZSIsIlNpZ25pblJlc3BvbnNlIiwic3RhdGVBcGkiLCJyZW1vdmUiLCJnZXQiLCJzdG9yZWRTdGF0ZVN0cmluZyIsIlNpZ25pblN0YXRlIiwiZnJvbVN0b3JhZ2VTdHJpbmciLCJwcm9jZXNzU2lnbmluUmVzcG9uc2UiLCJfdmFsaWRhdG9yIiwidmFsaWRhdGVTaWduaW5SZXNwb25zZSIsImNyZWF0ZVNpZ25vdXRSZXF1ZXN0IiwicG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpIiwiU2lnbm91dFJlcXVlc3QiLCJzaWdub3V0U3RhdGUiLCJyZWFkU2lnbm91dFJlc3BvbnNlU3RhdGUiLCJTaWdub3V0UmVzcG9uc2UiLCJzdGF0ZUtleSIsIlN0YXRlIiwicHJvY2Vzc1NpZ25vdXRSZXNwb25zZSIsInZhbGlkYXRlU2lnbm91dFJlc3BvbnNlIiwiY2xlYXJTdGFsZVN0YXRlIiwic3RhbGVTdGF0ZUFnZSIsInZhbGlkYXRvciIsIm1ldGFkYXRhU2VydmljZSIsIkRlZmF1bHRSZXNwb25zZVR5cGUiLCJEZWZhdWx0U2NvcGUiLCJEZWZhdWx0U3RhbGVTdGF0ZUFnZSIsIkRlZmF1bHRDbG9ja1NrZXdJblNlY29uZHMiLCJmaWx0ZXJQcm90b2NvbENsYWltcyIsImxvYWRVc2VySW5mbyIsImNsb2NrU2VydmljZSIsInVzZXJJbmZvSnd0SXNzdWVyIiwiUmVzcG9uc2VWYWxpZGF0b3JDdG9yIiwiUmVzcG9uc2VWYWxpZGF0b3IiLCJNZXRhZGF0YVNlcnZpY2VDdG9yIiwiX2F1dGhvcml0eSIsIl9tZXRhZGF0YSIsIl9zaWduaW5nS2V5cyIsIl9jbGllbnRfc2VjcmV0IiwiX3Jlc3BvbnNlX3R5cGUiLCJfc2NvcGUiLCJfcmVkaXJlY3RfdXJpIiwiX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSIsIl9wcm9tcHQiLCJfZGlzcGxheSIsIl9tYXhfYWdlIiwiX3VpX2xvY2FsZXMiLCJfYWNyX3ZhbHVlcyIsIl9yZXNvdXJjZSIsIl9yZXNwb25zZV9tb2RlIiwiX2ZpbHRlclByb3RvY29sQ2xhaW1zIiwiX2xvYWRVc2VySW5mbyIsIl9zdGFsZVN0YXRlQWdlIiwiX2Nsb2NrU2tldyIsIl9jbG9ja1NlcnZpY2UiLCJfdXNlckluZm9Kd3RJc3N1ZXIiLCJfZXh0cmFRdWVyeVBhcmFtcyIsIl9leHRyYVRva2VuUGFyYW1zIiwiUG9wdXBOYXZpZ2F0b3IiLCJQb3B1cFdpbmRvdyIsImtlZXBPcGVuIiwibm90aWZ5T3BlbmVyIiwiQ2hlY2tGb3JQb3B1cENsb3NlZEludGVydmFsIiwiX2NoZWNrRm9yUG9wdXBDbG9zZWRUaW1lciIsIl9jaGVja0ZvclBvcHVwQ2xvc2VkIiwiX2lkIiwiZm9jdXMiLCJjbG9zZWQiLCJvcGVuZXIiLCJVcmxVdGlsaXR5IiwicGFyc2VVcmxGcmFnbWVudCIsIlJlZGlyZWN0TmF2aWdhdG9yIiwidXNlUmVwbGFjZVRvTmF2aWdhdGUiLCJyZXBsYWNlIiwiUHJvdG9jb2xDbGFpbXMiLCJVc2VySW5mb1NlcnZpY2VDdG9yIiwiVXNlckluZm9TZXJ2aWNlIiwiam9zZVV0aWwiLCJUb2tlbkNsaWVudEN0b3IiLCJUb2tlbkNsaWVudCIsIl91c2VySW5mb1NlcnZpY2UiLCJfam9zZVV0aWwiLCJfdG9rZW5DbGllbnQiLCJfcHJvY2Vzc1NpZ25pblBhcmFtcyIsIl92YWxpZGF0ZVRva2VucyIsIl9wcm9jZXNzQ2xhaW1zIiwibm9uY2UiLCJpZF90b2tlbiIsImNvZGVfdmVyaWZpZXIiLCJjb2RlIiwiaXNPcGVuSWRDb25uZWN0IiwicHJvZmlsZSIsImdldENsYWltcyIsImNsYWltcyIsInN1YiIsIl9tZXJnZUNsYWltcyIsImNsYWltczEiLCJjbGFpbXMyIiwicmVzdWx0IiwiYXNzaWduIiwidmFsdWVzIiwiZm9yRWFjaCIsInR5cGUiLCJfcHJvY2Vzc0NvZGUiLCJfdmFsaWRhdGVJZFRva2VuQW5kQWNjZXNzVG9rZW4iLCJfdmFsaWRhdGVJZFRva2VuIiwiZXhjaGFuZ2VDb2RlIiwidG9rZW5SZXNwb25zZSIsIl92YWxpZGF0ZUlkVG9rZW5BdHRyaWJ1dGVzIiwiY2xvY2tTa2V3SW5TZWNvbmRzIiwiX3ZhbGlkYXRlQWNjZXNzVG9rZW4iLCJraWQiLCJfZmlsdGVyQnlBbGciLCJmaWx0ZXIiLCJhdF9oYXNoIiwiaGFzaEFsZyIsImhhc2hCaXRzIiwic2hhIiwiaGFzaCIsImxlZnQiLCJsZWZ0X2I2NHUiLCJ1c2VyTWFuYWdlciIsIkNoZWNrU2Vzc2lvbklGcmFtZUN0b3IiLCJfdXNlck1hbmFnZXIiLCJfQ2hlY2tTZXNzaW9uSUZyYW1lQ3RvciIsImV2ZW50cyIsImFkZFVzZXJMb2FkZWQiLCJfc3RhcnQiLCJhZGRVc2VyVW5sb2FkZWQiLCJfc3RvcCIsImdldFVzZXIiLCJ1c2VyIiwibW9uaXRvckFub255bW91c1Nlc3Npb24iLCJxdWVyeVNlc3Npb25TdGF0dXMiLCJ0bXBVc2VyIiwic2Vzc2lvbiIsInNpZCIsImNhdGNoIiwiZXJyIiwiX3N1YiIsIl9zaWQiLCJfY2hlY2tTZXNzaW9uSUZyYW1lIiwiX2NoZWNrU2Vzc2lvbkludGVydmFsIiwiX3N0b3BDaGVja1Nlc3Npb25PbkVycm9yIiwidGltZXJIYW5kbGUiLCJyYWlzZUV2ZW50IiwiX3JhaXNlVXNlclNlc3Npb25DaGFuZ2VkIiwiX3JhaXNlVXNlclNpZ25lZE91dCIsIl9yYWlzZVVzZXJTaWduZWRJbiIsImNoZWNrU2Vzc2lvbkludGVydmFsIiwic3RvcENoZWNrU2Vzc2lvbk9uRXJyb3IiLCJvaWRjIiwiaXNPaWRjIiwiYWRkUXVlcnlQYXJhbSIsImNvZGVfY2hhbGxlbmdlIiwic3BsaXQiLCJpc09BdXRoIiwiT2lkY1Njb3BlIiwidG9rZW5fdHlwZSIsImV4cGlyZXNfYXQiLCJzY29wZXMiLCJhcmd1bWVudHMiLCJfbm9uY2UiLCJfY29kZV92ZXJpZmllciIsIl9jb2RlX2NoYWxsZW5nZSIsIl9za2lwVXNlckluZm8iLCJzdHJpbmdpZnkiLCJjcmVhdGVkIiwic3RvcmFnZVN0cmluZyIsIlNpbGVudFJlbmV3U2VydmljZSIsIl90b2tlbkV4cGlyaW5nIiwic2lnbmluU2lsZW50IiwiX3JhaXNlU2lsZW50UmVuZXdFcnJvciIsIl9jcmVhdGVkIiwiX3JlcXVlc3RfdHlwZSIsInN0b3JhZ2UiLCJhZ2UiLCJjdXRvZmYiLCJnZXRBbGxLZXlzIiwicHJvbWlzZXMiLCJwIiwiYWxsIiwiVGltZXJEdXJhdGlvbiIsIm5vd0Z1bmMiLCJfbm93RnVuYyIsImV4cGlyYXRpb24iLCJfdGltZXJIYW5kbGUiLCJfZXhwaXJhdGlvbiIsInRpbWVyRHVyYXRpb24iLCJkaWZmIiwiZ3JhbnRfdHlwZSIsImV4Y2hhbmdlUmVmcmVzaFRva2VuIiwicmVmcmVzaF90b2tlbiIsIkFjY2Vzc1Rva2VuVHlwZUhpbnQiLCJSZWZyZXNoVG9rZW5UeXBlSGludCIsIl9YTUxIdHRwUmVxdWVzdEN0b3IiLCJyZXZva2UiLCJyZXF1aXJlZCIsIl9yZXZva2UiLCJ4aHIiLCJnbG9iYWwiLCJsYXN0SW5kZXhPZiIsInJlZ2V4IiwibSIsImNvdW50ZXIiLCJleGVjIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicHJvcCIsIl9nZXRDbGFpbXNGcm9tSnd0IiwiaXNzdWVyUHJvbWlzZSIsIlNpbGVudFJlbmV3U2VydmljZUN0b3IiLCJTZXNzaW9uTW9uaXRvckN0b3IiLCJUb2tlblJldm9jYXRpb25DbGllbnRDdG9yIiwiVXNlck1hbmFnZXJTZXR0aW5ncyIsIl9ldmVudHMiLCJVc2VyTWFuYWdlckV2ZW50cyIsIl9zaWxlbnRSZW5ld1NlcnZpY2UiLCJhdXRvbWF0aWNTaWxlbnRSZW5ldyIsInN0YXJ0U2lsZW50UmVuZXciLCJtb25pdG9yU2Vzc2lvbiIsIl9zZXNzaW9uTW9uaXRvciIsIl90b2tlblJldm9jYXRpb25DbGllbnQiLCJfbG9hZFVzZXIiLCJyZW1vdmVVc2VyIiwic3RvcmVVc2VyIiwic2lnbmluUmVkaXJlY3QiLCJuYXZQYXJhbXMiLCJfc2lnbmluU3RhcnQiLCJfcmVkaXJlY3ROYXZpZ2F0b3IiLCJzaWduaW5SZWRpcmVjdENhbGxiYWNrIiwiX3NpZ25pbkVuZCIsInNpZ25pblBvcHVwIiwicG9wdXBfcmVkaXJlY3RfdXJpIiwiX3NpZ25pbiIsIl9wb3B1cE5hdmlnYXRvciIsInJlYXNvbiIsInNpZ25pblBvcHVwQ2FsbGJhY2siLCJfc2lnbmluQ2FsbGJhY2siLCJfdXNlUmVmcmVzaFRva2VuIiwiaW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3IiwidmFsaWRhdGVTdWJPblNpbGVudFJlbmV3IiwiY3VycmVudF9zdWIiLCJfc2lnbmluU2lsZW50SWZyYW1lIiwiaWRUb2tlblZhbGlkYXRpb24iLCJfdmFsaWRhdGVJZFRva2VuRnJvbVRva2VuUmVmcmVzaFRva2VuIiwiYXV0aF90aW1lIiwic2lsZW50X3JlZGlyZWN0X3VyaSIsIl9pZnJhbWVOYXZpZ2F0b3IiLCJzaWduaW5TaWxlbnRDYWxsYmFjayIsInNpZ25pbkNhbGxiYWNrIiwic2lnbm91dENhbGxiYWNrIiwic2lnbm91dFJlZGlyZWN0Q2FsbGJhY2siLCJzaWdub3V0UG9wdXBDYWxsYmFjayIsInF1ZXJ5X3N0YXR1c19yZXNwb25zZV90eXBlIiwibmF2UmVzcG9uc2UiLCJzaWduaW5SZXNwb25zZSIsIm5hdmlnYXRvciIsIm5hdmlnYXRvclBhcmFtcyIsInNpZ25vdXRSZWRpcmVjdCIsInBvc3RMb2dvdXRSZWRpcmVjdFVyaSIsIl9zaWdub3V0U3RhcnQiLCJfc2lnbm91dEVuZCIsInNpZ25vdXRQb3B1cCIsInBvcHVwX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSIsIl9zaWdub3V0IiwicmV2b2tlUHJvbWlzZSIsInJldm9rZUFjY2Vzc1Rva2VuT25TaWdub3V0IiwiX3Jldm9rZUludGVybmFsIiwic2lnbm91dFJlcXVlc3QiLCJzaWdub3V0UmVzcG9uc2UiLCJyZXZva2VBY2Nlc3NUb2tlbiIsInN1Y2Nlc3MiLCJfcmV2b2tlQWNjZXNzVG9rZW5JbnRlcm5hbCIsIl9yZXZva2VSZWZyZXNoVG9rZW5JbnRlcm5hbCIsImF0U3VjY2VzcyIsInJ0U3VjY2VzcyIsInN0b3BTaWxlbnRSZW5ldyIsIl91c2VyU3RvcmUiLCJfdXNlclN0b3JlS2V5IiwicmVkaXJlY3ROYXZpZ2F0b3IiLCJwb3B1cE5hdmlnYXRvciIsImlmcmFtZU5hdmlnYXRvciIsInVzZXJTdG9yZSIsIl91c2VyTG9hZGVkIiwiX3VzZXJVbmxvYWRlZCIsIl9zaWxlbnRSZW5ld0Vycm9yIiwiX3VzZXJTaWduZWRJbiIsIl91c2VyU2lnbmVkT3V0IiwiX3VzZXJTZXNzaW9uQ2hhbmdlZCIsInJlbW92ZVVzZXJMb2FkZWQiLCJyZW1vdmVVc2VyVW5sb2FkZWQiLCJhZGRTaWxlbnRSZW5ld0Vycm9yIiwicmVtb3ZlU2lsZW50UmVuZXdFcnJvciIsImFkZFVzZXJTaWduZWRJbiIsInJlbW92ZVVzZXJTaWduZWRJbiIsImFkZFVzZXJTaWduZWRPdXQiLCJyZW1vdmVVc2VyU2lnbmVkT3V0IiwiYWRkVXNlclNlc3Npb25DaGFuZ2VkIiwicmVtb3ZlVXNlclNlc3Npb25DaGFuZ2VkIiwiRGVmYXVsdENoZWNrU2Vzc2lvbkludGVydmFsIiwic3RvcmUiLCJfcG9wdXBfcmVkaXJlY3RfdXJpIiwiX3BvcHVwX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSIsIl9wb3B1cFdpbmRvd0ZlYXR1cmVzIiwiX3BvcHVwV2luZG93VGFyZ2V0IiwiX3NpbGVudF9yZWRpcmVjdF91cmkiLCJfc2lsZW50UmVxdWVzdFRpbWVvdXQiLCJfYXV0b21hdGljU2lsZW50UmVuZXciLCJfdmFsaWRhdGVTdWJPblNpbGVudFJlbmV3IiwiX2luY2x1ZGVJZFRva2VuSW5TaWxlbnRSZW5ldyIsIl9tb25pdG9yU2Vzc2lvbiIsIl9tb25pdG9yQW5vbnltb3VzU2Vzc2lvbiIsIl9xdWVyeV9zdGF0dXNfcmVzcG9uc2VfdHlwZSIsIl9yZXZva2VBY2Nlc3NUb2tlbk9uU2lnbm91dCIsInByZWZpeCIsIl9zdG9yZSIsIl9wcmVmaXgiLCJCaWdJbnRlZ2VyIiwiSlNCTiIsImI2NG1hcCIsImI2NHBhZCIsIkJhc2U2NCIsInMiLCJyZXQiLCJrIiwic2xvcCIsImNoYXJBdCIsInYiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJoZXhUb0Jhc2U2NCIsImgiLCJjIiwic3Vic3RyaW5nIiwicGFkZGluZyIsInN0ciIsIm1vZCIsInBhZCIsImpvaW4iLCJieXRlQXJyYXlUb0hleCIsInJhdyIsIkhFWCIsIl9oZXgiLCJ0b1N0cmluZyIsImRlY29kZVRvSEVYIiwiYmFzZTY0SnMiLCJ0b0J5dGVBcnJheSIsImJhc2U2NFRvQmFzZTY0VXJsIiwidXJsRGVjb2RlIiwiYXRvYiIsIkRpZ2VzdEluZm9IZWFkIiwic2hhMSIsInNoYTIyNCIsInNoYTI1NiIsInNoYTM4NCIsInNoYTUxMiIsIm1kMiIsIm1kNSIsInJpcGVtZDE2MCIsIkRpZ2VzdEFsZ3MiLCJTSEEyNTYiLCJSU0FWZXJpZmllciIsIm1vZHVsdXMiLCJnZXRBbGdvcml0aG1Gcm9tRGlnZXN0IiwiaERpZ2VzdEluZm8iLCJhbGdOYW1lIiwiaGVhZCIsImxlbiIsInByb3RvdHlwZSIsIm1zZyIsImVuY3NpZyIsInNpZyIsImJpdExlbmd0aCIsImRlY3J5cHRlZFNpZyIsIm1vZFBvd0ludCIsImRpZ2VzdCIsImRpZ2VzdEluZm8iLCJtc2dIYXNoIiwicGFydHMiLCJhbGxvd2VkU2lnbmluZ0FsZ3MiLCJoZWFkZXJBbmRQYXlsb2FkIiwiZ2V0UHVibGljS2V5RnJvbUNlcnRQRU0iLCJoYXNoRnVuYyIsInJhbmRvbSIsIm1zQ3J5cHRvIiwiX2NyeXB0b1V1aWR2NCIsImdldFJhbmRvbVZhbHVlcyIsIlVpbnQ4QXJyYXkiLCJfdXVpZHY0IiwiTWF0aCIsImhhc0NyeXB0byIsImhhc1JhbmRvbVZhbHVlcyIsInV1aWQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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aEIsZUFBUCxDQUF1QixJQUFJQyxVQUFKLENBQWUsQ0FBZixDQUF2QixFQUEwQyxDQUExQyxJQUErQyxNQUFNdkQsSUFBSSxDQUE5RCxFQUFpRVcsUUFBakUsQ0FBMEUsRUFBMUUsQ0FEb0Q7QUFBQSxHQUEvQyxDQUFQO0FBR0Q7O0FBRUQsU0FBUzZDLE9BQVQsR0FBbUI7QUFDZixTQUFPLENBQUMsQ0FBQyxHQUFELElBQU0sQ0FBQyxHQUFQLEdBQVcsQ0FBQyxHQUFaLEdBQWdCLENBQUMsR0FBakIsR0FBcUIsQ0FBQyxJQUF2QixFQUE2QjNULE9BQTdCLENBQXFDLFFBQXJDLEVBQStDO0FBQUEsV0FDdEQsQ0FBQ21RLElBQUl5RCxLQUFLTixNQUFMLEtBQWdCLEVBQWhCLElBQXNCbkQsSUFBSSxDQUEvQixFQUFrQ1csUUFBbEMsQ0FBMkMsRUFBM0MsQ0FEc0Q7QUFBQSxHQUEvQyxDQUFQO0FBR0g7O0FBRWMsU0FBU3dDLE1BQVQsR0FBa0I7QUFDL0IsTUFBSU8sWUFBWXBoQixVQUFVLFdBQVYsSUFBeUJBLFdBQVcsSUFBcEQ7QUFDQSxNQUFJcWhCLGtCQUFrQkQsYUFBYyxPQUFPcGhCLE9BQU9naEIsZUFBZCxJQUFrQyxXQUF0RTtBQUNBLE1BQUlNLE9BQU9ELGtCQUFrQk4sYUFBbEIsR0FBa0NHLE9BQTdDO0FBQ0EsU0FBT0ksT0FBTy9ULE9BQVAsQ0FBZSxJQUFmLEVBQXFCLEVBQXJCLENBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJELElBQU12WixVQUFVLFFBQWhCLEMsUUFBa0NBLE8sR0FBQUEsTyIsImZpbGUiOiJvaWRjLWNsaWVudC5yc2EyNTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vc3JjL0xvZy5qcyc7XHJcbmltcG9ydCB7IE9pZGNDbGllbnQgfSBmcm9tICcuL3NyYy9PaWRjQ2xpZW50LmpzJztcclxuaW1wb3J0IHsgT2lkY0NsaWVudFNldHRpbmdzIH0gZnJvbSAnLi9zcmMvT2lkY0NsaWVudFNldHRpbmdzLmpzJztcclxuaW1wb3J0IHsgV2ViU3RvcmFnZVN0YXRlU3RvcmUgfSBmcm9tICcuL3NyYy9XZWJTdG9yYWdlU3RhdGVTdG9yZS5qcyc7XHJcbmltcG9ydCB7IEluTWVtb3J5V2ViU3RvcmFnZSB9IGZyb20gJy4vc3JjL0luTWVtb3J5V2ViU3RvcmFnZS5qcyc7XHJcbmltcG9ydCB7IFVzZXJNYW5hZ2VyIH0gZnJvbSAnLi9zcmMvVXNlck1hbmFnZXIuanMnO1xyXG5pbXBvcnQgeyBBY2Nlc3NUb2tlbkV2ZW50cyB9IGZyb20gJy4vc3JjL0FjY2Vzc1Rva2VuRXZlbnRzLmpzJztcclxuaW1wb3J0IHsgTWV0YWRhdGFTZXJ2aWNlIH0gZnJvbSAnLi9zcmMvTWV0YWRhdGFTZXJ2aWNlLmpzJztcclxuaW1wb3J0IHsgQ29yZG92YVBvcHVwTmF2aWdhdG9yIH0gZnJvbSAnLi9zcmMvQ29yZG92YVBvcHVwTmF2aWdhdG9yLmpzJztcclxuaW1wb3J0IHsgQ29yZG92YUlGcmFtZU5hdmlnYXRvciB9IGZyb20gJy4vc3JjL0NvcmRvdmFJRnJhbWVOYXZpZ2F0b3IuanMnO1xyXG5pbXBvcnQgeyBDaGVja1Nlc3Npb25JRnJhbWUgfSBmcm9tICcuL3NyYy9DaGVja1Nlc3Npb25JRnJhbWUuanMnO1xyXG5pbXBvcnQgeyBUb2tlblJldm9jYXRpb25DbGllbnQgfSBmcm9tICcuL3NyYy9Ub2tlblJldm9jYXRpb25DbGllbnQuanMnO1xyXG5pbXBvcnQgeyBTZXNzaW9uTW9uaXRvciB9IGZyb20gJy4vc3JjL1Nlc3Npb25Nb25pdG9yLmpzJztcclxuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSAnLi9zcmMvR2xvYmFsLmpzJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vc3JjL1VzZXIuanMnO1xyXG5cclxuaW1wb3J0IHsgVmVyc2lvbiB9IGZyb20gJy4vdmVyc2lvbi5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBWZXJzaW9uLFxyXG4gICAgTG9nLFxyXG4gICAgT2lkY0NsaWVudCxcclxuICAgIE9pZGNDbGllbnRTZXR0aW5ncyxcclxuICAgIFdlYlN0b3JhZ2VTdGF0ZVN0b3JlLFxyXG4gICAgSW5NZW1vcnlXZWJTdG9yYWdlLFxyXG4gICAgVXNlck1hbmFnZXIsXHJcbiAgICBBY2Nlc3NUb2tlbkV2ZW50cyxcclxuICAgIE1ldGFkYXRhU2VydmljZSxcclxuICAgIENvcmRvdmFQb3B1cE5hdmlnYXRvcixcclxuICAgIENvcmRvdmFJRnJhbWVOYXZpZ2F0b3IsXHJcbiAgICBDaGVja1Nlc3Npb25JRnJhbWUsXHJcbiAgICBUb2tlblJldm9jYXRpb25DbGllbnQsXHJcbiAgICBTZXNzaW9uTW9uaXRvcixcclxuICAgIEdsb2JhbCxcclxuICAgIFVzZXJcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydHMuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcbmV4cG9ydHMudG9CeXRlQXJyYXkgPSB0b0J5dGVBcnJheVxuZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gZnJvbUJ5dGVBcnJheVxuXG52YXIgbG9va3VwID0gW11cbnZhciByZXZMb29rdXAgPSBbXVxudmFyIEFyciA9IHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyA/IFVpbnQ4QXJyYXkgOiBBcnJheVxuXG52YXIgY29kZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJ1xuZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvZGUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgbG9va3VwW2ldID0gY29kZVtpXVxuICByZXZMb29rdXBbY29kZS5jaGFyQ29kZUF0KGkpXSA9IGlcbn1cblxuLy8gU3VwcG9ydCBkZWNvZGluZyBVUkwtc2FmZSBiYXNlNjQgc3RyaW5ncywgYXMgTm9kZS5qcyBkb2VzLlxuLy8gU2VlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CYXNlNjQjVVJMX2FwcGxpY2F0aW9uc1xucmV2TG9va3VwWyctJy5jaGFyQ29kZUF0KDApXSA9IDYyXG5yZXZMb29rdXBbJ18nLmNoYXJDb2RlQXQoMCldID0gNjNcblxuZnVuY3Rpb24gZ2V0TGVucyAoYjY0KSB7XG4gIHZhciBsZW4gPSBiNjQubGVuZ3RoXG5cbiAgaWYgKGxlbiAlIDQgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0JylcbiAgfVxuXG4gIC8vIFRyaW0gb2ZmIGV4dHJhIGJ5dGVzIGFmdGVyIHBsYWNlaG9sZGVyIGJ5dGVzIGFyZSBmb3VuZFxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9iZWF0Z2FtbWl0L2Jhc2U2NC1qcy9pc3N1ZXMvNDJcbiAgdmFyIHZhbGlkTGVuID0gYjY0LmluZGV4T2YoJz0nKVxuICBpZiAodmFsaWRMZW4gPT09IC0xKSB2YWxpZExlbiA9IGxlblxuXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSB2YWxpZExlbiA9PT0gbGVuXG4gICAgPyAwXG4gICAgOiA0IC0gKHZhbGlkTGVuICUgNClcblxuICByZXR1cm4gW3ZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW5dXG59XG5cbi8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoYjY0KSB7XG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIF9ieXRlTGVuZ3RoIChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pIHtcbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIHRvQnl0ZUFycmF5IChiNjQpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG5cbiAgdmFyIGFyciA9IG5ldyBBcnIoX2J5dGVMZW5ndGgoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSlcblxuICB2YXIgY3VyQnl0ZSA9IDBcblxuICAvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG4gIHZhciBsZW4gPSBwbGFjZUhvbGRlcnNMZW4gPiAwXG4gICAgPyB2YWxpZExlbiAtIDRcbiAgICA6IHZhbGlkTGVuXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxOCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDEyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPDwgNikgfFxuICAgICAgcmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAzKV1cbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gMTYpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDIpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldID4+IDQpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAxKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDEwKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgNCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildID4+IDIpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiB0cmlwbGV0VG9CYXNlNjQgKG51bSkge1xuICByZXR1cm4gbG9va3VwW251bSA+PiAxOCAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDEyICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gNiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtICYgMHgzRl1cbn1cblxuZnVuY3Rpb24gZW5jb2RlQ2h1bmsgKHVpbnQ4LCBzdGFydCwgZW5kKSB7XG4gIHZhciB0bXBcbiAgdmFyIG91dHB1dCA9IFtdXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSArPSAzKSB7XG4gICAgdG1wID1cbiAgICAgICgodWludDhbaV0gPDwgMTYpICYgMHhGRjAwMDApICtcbiAgICAgICgodWludDhbaSArIDFdIDw8IDgpICYgMHhGRjAwKSArXG4gICAgICAodWludDhbaSArIDJdICYgMHhGRilcbiAgICBvdXRwdXQucHVzaCh0cmlwbGV0VG9CYXNlNjQodG1wKSlcbiAgfVxuICByZXR1cm4gb3V0cHV0LmpvaW4oJycpXG59XG5cbmZ1bmN0aW9uIGZyb21CeXRlQXJyYXkgKHVpbnQ4KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbiA9IHVpbnQ4Lmxlbmd0aFxuICB2YXIgZXh0cmFCeXRlcyA9IGxlbiAlIDMgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcbiAgdmFyIHBhcnRzID0gW11cbiAgdmFyIG1heENodW5rTGVuZ3RoID0gMTYzODMgLy8gbXVzdCBiZSBtdWx0aXBsZSBvZiAzXG5cbiAgLy8gZ28gdGhyb3VnaCB0aGUgYXJyYXkgZXZlcnkgdGhyZWUgYnl0ZXMsIHdlJ2xsIGRlYWwgd2l0aCB0cmFpbGluZyBzdHVmZiBsYXRlclxuICBmb3IgKHZhciBpID0gMCwgbGVuMiA9IGxlbiAtIGV4dHJhQnl0ZXM7IGkgPCBsZW4yOyBpICs9IG1heENodW5rTGVuZ3RoKSB7XG4gICAgcGFydHMucHVzaChlbmNvZGVDaHVuayhcbiAgICAgIHVpbnQ4LCBpLCAoaSArIG1heENodW5rTGVuZ3RoKSA+IGxlbjIgPyBsZW4yIDogKGkgKyBtYXhDaHVua0xlbmd0aClcbiAgICApKVxuICB9XG5cbiAgLy8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuICBpZiAoZXh0cmFCeXRlcyA9PT0gMSkge1xuICAgIHRtcCA9IHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgNCkgJiAweDNGXSArXG4gICAgICAnPT0nXG4gICAgKVxuICB9IGVsc2UgaWYgKGV4dHJhQnl0ZXMgPT09IDIpIHtcbiAgICB0bXAgPSAodWludDhbbGVuIC0gMl0gPDwgOCkgKyB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDEwXSArXG4gICAgICBsb29rdXBbKHRtcCA+PiA0KSAmIDB4M0ZdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDIpICYgMHgzRl0gK1xuICAgICAgJz0nXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzLmpvaW4oJycpXG59XG4iLCI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeSgpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0cm9vdC5DcnlwdG9KUyA9IGZhY3RvcnkoKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG5cblx0LyoqXG5cdCAqIENyeXB0b0pTIGNvcmUgY29tcG9uZW50cy5cblx0ICovXG5cdHZhciBDcnlwdG9KUyA9IENyeXB0b0pTIHx8IChmdW5jdGlvbiAoTWF0aCwgdW5kZWZpbmVkKSB7XG5cdCAgICAvKlxuXHQgICAgICogTG9jYWwgcG9seWZpbCBvZiBPYmplY3QuY3JlYXRlXG5cdCAgICAgKi9cblx0ICAgIHZhciBjcmVhdGUgPSBPYmplY3QuY3JlYXRlIHx8IChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgZnVuY3Rpb24gRigpIHt9O1xuXG5cdCAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChvYmopIHtcblx0ICAgICAgICAgICAgdmFyIHN1YnR5cGU7XG5cblx0ICAgICAgICAgICAgRi5wcm90b3R5cGUgPSBvYmo7XG5cblx0ICAgICAgICAgICAgc3VidHlwZSA9IG5ldyBGKCk7XG5cblx0ICAgICAgICAgICAgRi5wcm90b3R5cGUgPSBudWxsO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBzdWJ0eXBlO1xuXHQgICAgICAgIH07XG5cdCAgICB9KCkpXG5cblx0ICAgIC8qKlxuXHQgICAgICogQ3J5cHRvSlMgbmFtZXNwYWNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQyA9IHt9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIExpYnJhcnkgbmFtZXNwYWNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYiA9IHt9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIEJhc2Ugb2JqZWN0IGZvciBwcm90b3R5cGFsIGluaGVyaXRhbmNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQmFzZSA9IENfbGliLkJhc2UgPSAoZnVuY3Rpb24gKCkge1xuXG5cblx0ICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBvYmplY3QgdGhhdCBpbmhlcml0cyBmcm9tIHRoaXMgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3ZlcnJpZGVzIFByb3BlcnRpZXMgdG8gY29weSBpbnRvIHRoZSBuZXcgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBuZXcgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICB2YXIgTXlUeXBlID0gQ3J5cHRvSlMubGliLkJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAgICAgICogICAgICAgICBmaWVsZDogJ3ZhbHVlJyxcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgICAgICBtZXRob2Q6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICogICAgICAgICB9XG5cdCAgICAgICAgICAgICAqICAgICB9KTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIGV4dGVuZDogZnVuY3Rpb24gKG92ZXJyaWRlcykge1xuXHQgICAgICAgICAgICAgICAgLy8gU3Bhd25cblx0ICAgICAgICAgICAgICAgIHZhciBzdWJ0eXBlID0gY3JlYXRlKHRoaXMpO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBBdWdtZW50XG5cdCAgICAgICAgICAgICAgICBpZiAob3ZlcnJpZGVzKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgc3VidHlwZS5taXhJbihvdmVycmlkZXMpO1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAvLyBDcmVhdGUgZGVmYXVsdCBpbml0aWFsaXplclxuXHQgICAgICAgICAgICAgICAgaWYgKCFzdWJ0eXBlLmhhc093blByb3BlcnR5KCdpbml0JykgfHwgdGhpcy5pbml0ID09PSBzdWJ0eXBlLmluaXQpIHtcblx0ICAgICAgICAgICAgICAgICAgICBzdWJ0eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN1YnR5cGUuJHN1cGVyLmluaXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0ICAgICAgICAgICAgICAgICAgICB9O1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAvLyBJbml0aWFsaXplcidzIHByb3RvdHlwZSBpcyB0aGUgc3VidHlwZSBvYmplY3Rcblx0ICAgICAgICAgICAgICAgIHN1YnR5cGUuaW5pdC5wcm90b3R5cGUgPSBzdWJ0eXBlO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBSZWZlcmVuY2Ugc3VwZXJ0eXBlXG5cdCAgICAgICAgICAgICAgICBzdWJ0eXBlLiRzdXBlciA9IHRoaXM7XG5cblx0ICAgICAgICAgICAgICAgIHJldHVybiBzdWJ0eXBlO1xuXHQgICAgICAgICAgICB9LFxuXG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBFeHRlbmRzIHRoaXMgb2JqZWN0IGFuZCBydW5zIHRoZSBpbml0IG1ldGhvZC5cblx0ICAgICAgICAgICAgICogQXJndW1lbnRzIHRvIGNyZWF0ZSgpIHdpbGwgYmUgcGFzc2VkIHRvIGluaXQoKS5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgbmV3IG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgdmFyIGluc3RhbmNlID0gTXlUeXBlLmNyZWF0ZSgpO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLmV4dGVuZCgpO1xuXHQgICAgICAgICAgICAgICAgaW5zdGFuY2UuaW5pdC5hcHBseShpbnN0YW5jZSwgYXJndW1lbnRzKTtcblxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuXHQgICAgICAgICAgICB9LFxuXG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBJbml0aWFsaXplcyBhIG5ld2x5IGNyZWF0ZWQgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBhZGQgc29tZSBsb2dpYyB3aGVuIHlvdXIgb2JqZWN0cyBhcmUgY3JlYXRlZC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIHZhciBNeVR5cGUgPSBDcnlwdG9KUy5saWIuQmFzZS5leHRlbmQoe1xuXHQgICAgICAgICAgICAgKiAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICogICAgICAgICAgICAgLy8gLi4uXG5cdCAgICAgICAgICAgICAqICAgICAgICAgfVxuXHQgICAgICAgICAgICAgKiAgICAgfSk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIH0sXG5cblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIENvcGllcyBwcm9wZXJ0aWVzIGludG8gdGhpcyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzIFRoZSBwcm9wZXJ0aWVzIHRvIG1peCBpbi5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIE15VHlwZS5taXhJbih7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgZmllbGQ6ICd2YWx1ZSdcblx0ICAgICAgICAgICAgICogICAgIH0pO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgbWl4SW46IGZ1bmN0aW9uIChwcm9wZXJ0aWVzKSB7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eU5hbWUgaW4gcHJvcGVydGllcykge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KHByb3BlcnR5TmFtZSkpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1twcm9wZXJ0eU5hbWVdID0gcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gSUUgd29uJ3QgY29weSB0b1N0cmluZyB1c2luZyB0aGUgbG9vcCBhYm92ZVxuXHQgICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoJ3RvU3RyaW5nJykpIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnRvU3RyaW5nID0gcHJvcGVydGllcy50b1N0cmluZztcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhpcyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIGNsb25lLlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgdmFyIGNsb25lID0gaW5zdGFuY2UuY2xvbmUoKTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbml0LnByb3RvdHlwZS5leHRlbmQodGhpcyk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9O1xuXHQgICAgfSgpKTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBbiBhcnJheSBvZiAzMi1iaXQgd29yZHMuXG5cdCAgICAgKlxuXHQgICAgICogQHByb3BlcnR5IHtBcnJheX0gd29yZHMgVGhlIGFycmF5IG9mIDMyLWJpdCB3b3Jkcy5cblx0ICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzaWdCeXRlcyBUaGUgbnVtYmVyIG9mIHNpZ25pZmljYW50IGJ5dGVzIGluIHRoaXMgd29yZCBhcnJheS5cblx0ICAgICAqL1xuXHQgICAgdmFyIFdvcmRBcnJheSA9IENfbGliLldvcmRBcnJheSA9IEJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJbml0aWFsaXplcyBhIG5ld2x5IGNyZWF0ZWQgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IHdvcmRzIChPcHRpb25hbCkgQW4gYXJyYXkgb2YgMzItYml0IHdvcmRzLlxuXHQgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaWdCeXRlcyAoT3B0aW9uYWwpIFRoZSBudW1iZXIgb2Ygc2lnbmlmaWNhbnQgYnl0ZXMgaW4gdGhlIHdvcmRzLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMubGliLldvcmRBcnJheS5jcmVhdGUoKTtcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkuY3JlYXRlKFsweDAwMDEwMjAzLCAweDA0MDUwNjA3XSk7XG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LmNyZWF0ZShbMHgwMDAxMDIwMywgMHgwNDA1MDYwN10sIDYpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGluaXQ6IGZ1bmN0aW9uICh3b3Jkcywgc2lnQnl0ZXMpIHtcblx0ICAgICAgICAgICAgd29yZHMgPSB0aGlzLndvcmRzID0gd29yZHMgfHwgW107XG5cblx0ICAgICAgICAgICAgaWYgKHNpZ0J5dGVzICE9IHVuZGVmaW5lZCkge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5zaWdCeXRlcyA9IHNpZ0J5dGVzO1xuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5zaWdCeXRlcyA9IHdvcmRzLmxlbmd0aCAqIDQ7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgdGhpcyB3b3JkIGFycmF5IHRvIGEgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtFbmNvZGVyfSBlbmNvZGVyIChPcHRpb25hbCkgVGhlIGVuY29kaW5nIHN0cmF0ZWd5IHRvIHVzZS4gRGVmYXVsdDogQ3J5cHRvSlMuZW5jLkhleFxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgc3RyaW5naWZpZWQgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHN0cmluZyA9IHdvcmRBcnJheSArICcnO1xuXHQgICAgICAgICAqICAgICB2YXIgc3RyaW5nID0gd29yZEFycmF5LnRvU3RyaW5nKCk7XG5cdCAgICAgICAgICogICAgIHZhciBzdHJpbmcgPSB3b3JkQXJyYXkudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoZW5jb2Rlcikge1xuXHQgICAgICAgICAgICByZXR1cm4gKGVuY29kZXIgfHwgSGV4KS5zdHJpbmdpZnkodGhpcyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbmNhdGVuYXRlcyBhIHdvcmQgYXJyYXkgdG8gdGhpcyB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheSB0byBhcHBlbmQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoaXMgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgd29yZEFycmF5MS5jb25jYXQod29yZEFycmF5Mik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY29uY2F0OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgdGhpc1dvcmRzID0gdGhpcy53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHRoYXRXb3JkcyA9IHdvcmRBcnJheS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHRoaXNTaWdCeXRlcyA9IHRoaXMuc2lnQnl0ZXM7XG5cdCAgICAgICAgICAgIHZhciB0aGF0U2lnQnl0ZXMgPSB3b3JkQXJyYXkuc2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ2xhbXAgZXhjZXNzIGJpdHNcblx0ICAgICAgICAgICAgdGhpcy5jbGFtcCgpO1xuXG5cdCAgICAgICAgICAgIC8vIENvbmNhdFxuXHQgICAgICAgICAgICBpZiAodGhpc1NpZ0J5dGVzICUgNCkge1xuXHQgICAgICAgICAgICAgICAgLy8gQ29weSBvbmUgYnl0ZSBhdCBhIHRpbWVcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhhdFNpZ0J5dGVzOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgdGhhdEJ5dGUgPSAodGhhdFdvcmRzW2kgPj4+IDJdID4+PiAoMjQgLSAoaSAlIDQpICogOCkpICYgMHhmZjtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzV29yZHNbKHRoaXNTaWdCeXRlcyArIGkpID4+PiAyXSB8PSB0aGF0Qnl0ZSA8PCAoMjQgLSAoKHRoaXNTaWdCeXRlcyArIGkpICUgNCkgKiA4KTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIC8vIENvcHkgb25lIHdvcmQgYXQgYSB0aW1lXG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoYXRTaWdCeXRlczsgaSArPSA0KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpc1dvcmRzWyh0aGlzU2lnQnl0ZXMgKyBpKSA+Pj4gMl0gPSB0aGF0V29yZHNbaSA+Pj4gMl07XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgdGhpcy5zaWdCeXRlcyArPSB0aGF0U2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ2hhaW5hYmxlXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSZW1vdmVzIGluc2lnbmlmaWNhbnQgYml0cy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgd29yZEFycmF5LmNsYW1wKCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2xhbXA6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IHRoaXMud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBzaWdCeXRlcyA9IHRoaXMuc2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ2xhbXBcblx0ICAgICAgICAgICAgd29yZHNbc2lnQnl0ZXMgPj4+IDJdICY9IDB4ZmZmZmZmZmYgPDwgKDMyIC0gKHNpZ0J5dGVzICUgNCkgKiA4KTtcblx0ICAgICAgICAgICAgd29yZHMubGVuZ3RoID0gTWF0aC5jZWlsKHNpZ0J5dGVzIC8gNCk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoaXMgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGNsb25lLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgY2xvbmUgPSB3b3JkQXJyYXkuY2xvbmUoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB2YXIgY2xvbmUgPSBCYXNlLmNsb25lLmNhbGwodGhpcyk7XG5cdCAgICAgICAgICAgIGNsb25lLndvcmRzID0gdGhpcy53b3Jkcy5zbGljZSgwKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gY2xvbmU7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgYSB3b3JkIGFycmF5IGZpbGxlZCB3aXRoIHJhbmRvbSBieXRlcy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuQnl0ZXMgVGhlIG51bWJlciBvZiByYW5kb20gYnl0ZXMgdG8gZ2VuZXJhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSByYW5kb20gd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkucmFuZG9tKDE2KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICByYW5kb206IGZ1bmN0aW9uIChuQnl0ZXMpIHtcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gW107XG5cblx0ICAgICAgICAgICAgdmFyIHIgPSAoZnVuY3Rpb24gKG1fdykge1xuXHQgICAgICAgICAgICAgICAgdmFyIG1fdyA9IG1fdztcblx0ICAgICAgICAgICAgICAgIHZhciBtX3ogPSAweDNhZGU2OGIxO1xuXHQgICAgICAgICAgICAgICAgdmFyIG1hc2sgPSAweGZmZmZmZmZmO1xuXG5cdCAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgICAgIG1feiA9ICgweDkwNjkgKiAobV96ICYgMHhGRkZGKSArIChtX3ogPj4gMHgxMCkpICYgbWFzaztcblx0ICAgICAgICAgICAgICAgICAgICBtX3cgPSAoMHg0NjUwICogKG1fdyAmIDB4RkZGRikgKyAobV93ID4+IDB4MTApKSAmIG1hc2s7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9ICgobV96IDw8IDB4MTApICsgbV93KSAmIG1hc2s7XG5cdCAgICAgICAgICAgICAgICAgICAgcmVzdWx0IC89IDB4MTAwMDAwMDAwO1xuXHQgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAwLjU7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCAqIChNYXRoLnJhbmRvbSgpID4gLjUgPyAxIDogLTEpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9KTtcblxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgcmNhY2hlOyBpIDwgbkJ5dGVzOyBpICs9IDQpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBfciA9IHIoKHJjYWNoZSB8fCBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDAwMDAwKTtcblxuXHQgICAgICAgICAgICAgICAgcmNhY2hlID0gX3IoKSAqIDB4M2FkZTY3Yjc7XG5cdCAgICAgICAgICAgICAgICB3b3Jkcy5wdXNoKChfcigpICogMHgxMDAwMDAwMDApIHwgMCk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gbmV3IFdvcmRBcnJheS5pbml0KHdvcmRzLCBuQnl0ZXMpO1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEVuY29kZXIgbmFtZXNwYWNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQ19lbmMgPSBDLmVuYyA9IHt9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIEhleCBlbmNvZGluZyBzdHJhdGVneS5cblx0ICAgICAqL1xuXHQgICAgdmFyIEhleCA9IENfZW5jLkhleCA9IHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIHdvcmQgYXJyYXkgdG8gYSBoZXggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGhleCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBoZXhTdHJpbmcgPSBDcnlwdG9KUy5lbmMuSGV4LnN0cmluZ2lmeSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gd29yZEFycmF5LndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgc2lnQnl0ZXMgPSB3b3JkQXJyYXkuc2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgaGV4Q2hhcnMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaWdCeXRlczsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgYml0ZSA9ICh3b3Jkc1tpID4+PiAyXSA+Pj4gKDI0IC0gKGkgJSA0KSAqIDgpKSAmIDB4ZmY7XG5cdCAgICAgICAgICAgICAgICBoZXhDaGFycy5wdXNoKChiaXRlID4+PiA0KS50b1N0cmluZygxNikpO1xuXHQgICAgICAgICAgICAgICAgaGV4Q2hhcnMucHVzaCgoYml0ZSAmIDB4MGYpLnRvU3RyaW5nKDE2KSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gaGV4Q2hhcnMuam9pbignJyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgaGV4IHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaGV4U3RyIFRoZSBoZXggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmVuYy5IZXgucGFyc2UoaGV4U3RyaW5nKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gKGhleFN0cikge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgaGV4U3RyTGVuZ3RoID0gaGV4U3RyLmxlbmd0aDtcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhleFN0ckxlbmd0aDsgaSArPSAyKSB7XG5cdCAgICAgICAgICAgICAgICB3b3Jkc1tpID4+PiAzXSB8PSBwYXJzZUludChoZXhTdHIuc3Vic3RyKGksIDIpLCAxNikgPDwgKDI0IC0gKGkgJSA4KSAqIDQpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdCh3b3JkcywgaGV4U3RyTGVuZ3RoIC8gMik7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBMYXRpbjEgZW5jb2Rpbmcgc3RyYXRlZ3kuXG5cdCAgICAgKi9cblx0ICAgIHZhciBMYXRpbjEgPSBDX2VuYy5MYXRpbjEgPSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSB3b3JkIGFycmF5IHRvIGEgTGF0aW4xIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBMYXRpbjEgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgbGF0aW4xU3RyaW5nID0gQ3J5cHRvSlMuZW5jLkxhdGluMS5zdHJpbmdpZnkod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IHdvcmRBcnJheS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIGxhdGluMUNoYXJzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2lnQnl0ZXM7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgdmFyIGJpdGUgPSAod29yZHNbaSA+Pj4gMl0gPj4+ICgyNCAtIChpICUgNCkgKiA4KSkgJiAweGZmO1xuXHQgICAgICAgICAgICAgICAgbGF0aW4xQ2hhcnMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGJpdGUpKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBsYXRpbjFDaGFycy5qb2luKCcnKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSBMYXRpbjEgc3RyaW5nIHRvIGEgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYXRpbjFTdHIgVGhlIExhdGluMSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMuZW5jLkxhdGluMS5wYXJzZShsYXRpbjFTdHJpbmcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHBhcnNlOiBmdW5jdGlvbiAobGF0aW4xU3RyKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgIHZhciBsYXRpbjFTdHJMZW5ndGggPSBsYXRpbjFTdHIubGVuZ3RoO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGF0aW4xU3RyTGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHdvcmRzW2kgPj4+IDJdIHw9IChsYXRpbjFTdHIuY2hhckNvZGVBdChpKSAmIDB4ZmYpIDw8ICgyNCAtIChpICUgNCkgKiA4KTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgV29yZEFycmF5LmluaXQod29yZHMsIGxhdGluMVN0ckxlbmd0aCk7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBVVEYtOCBlbmNvZGluZyBzdHJhdGVneS5cblx0ICAgICAqL1xuXHQgICAgdmFyIFV0ZjggPSBDX2VuYy5VdGY4ID0ge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgd29yZCBhcnJheSB0byBhIFVURi04IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBVVEYtOCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB1dGY4U3RyaW5nID0gQ3J5cHRvSlMuZW5jLlV0Zjguc3RyaW5naWZ5KHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZShMYXRpbjEuc3RyaW5naWZ5KHdvcmRBcnJheSkpKTtcblx0ICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuXHQgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYWxmb3JtZWQgVVRGLTggZGF0YScpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgVVRGLTggc3RyaW5nIHRvIGEgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1dGY4U3RyIFRoZSBVVEYtOCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMuZW5jLlV0ZjgucGFyc2UodXRmOFN0cmluZyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uICh1dGY4U3RyKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBMYXRpbjEucGFyc2UodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHV0ZjhTdHIpKSk7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBYnN0cmFjdCBidWZmZXJlZCBibG9jayBhbGdvcml0aG0gdGVtcGxhdGUuXG5cdCAgICAgKlxuXHQgICAgICogVGhlIHByb3BlcnR5IGJsb2NrU2l6ZSBtdXN0IGJlIGltcGxlbWVudGVkIGluIGEgY29uY3JldGUgc3VidHlwZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcHJvcGVydHkge251bWJlcn0gX21pbkJ1ZmZlclNpemUgVGhlIG51bWJlciBvZiBibG9ja3MgdGhhdCBzaG91bGQgYmUga2VwdCB1bnByb2Nlc3NlZCBpbiB0aGUgYnVmZmVyLiBEZWZhdWx0OiAwXG5cdCAgICAgKi9cblx0ICAgIHZhciBCdWZmZXJlZEJsb2NrQWxnb3JpdGhtID0gQ19saWIuQnVmZmVyZWRCbG9ja0FsZ29yaXRobSA9IEJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSZXNldHMgdGhpcyBibG9jayBhbGdvcml0aG0ncyBkYXRhIGJ1ZmZlciB0byBpdHMgaW5pdGlhbCBzdGF0ZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5yZXNldCgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIEluaXRpYWwgdmFsdWVzXG5cdCAgICAgICAgICAgIHRoaXMuX2RhdGEgPSBuZXcgV29yZEFycmF5LmluaXQoKTtcblx0ICAgICAgICAgICAgdGhpcy5fbkRhdGFCeXRlcyA9IDA7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEFkZHMgbmV3IGRhdGEgdG8gdGhpcyBibG9jayBhbGdvcml0aG0ncyBidWZmZXIuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYXBwZW5kLiBTdHJpbmdzIGFyZSBjb252ZXJ0ZWQgdG8gYSBXb3JkQXJyYXkgdXNpbmcgVVRGLTguXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uX2FwcGVuZCgnZGF0YScpO1xuXHQgICAgICAgICAqICAgICBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9hcHBlbmQod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBfYXBwZW5kOiBmdW5jdGlvbiAoZGF0YSkge1xuXHQgICAgICAgICAgICAvLyBDb252ZXJ0IHN0cmluZyB0byBXb3JkQXJyYXksIGVsc2UgYXNzdW1lIFdvcmRBcnJheSBhbHJlYWR5XG5cdCAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PSAnc3RyaW5nJykge1xuXHQgICAgICAgICAgICAgICAgZGF0YSA9IFV0ZjgucGFyc2UoZGF0YSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBBcHBlbmRcblx0ICAgICAgICAgICAgdGhpcy5fZGF0YS5jb25jYXQoZGF0YSk7XG5cdCAgICAgICAgICAgIHRoaXMuX25EYXRhQnl0ZXMgKz0gZGF0YS5zaWdCeXRlcztcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUHJvY2Vzc2VzIGF2YWlsYWJsZSBkYXRhIGJsb2Nrcy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIFRoaXMgbWV0aG9kIGludm9rZXMgX2RvUHJvY2Vzc0Jsb2NrKG9mZnNldCksIHdoaWNoIG11c3QgYmUgaW1wbGVtZW50ZWQgYnkgYSBjb25jcmV0ZSBzdWJ0eXBlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBkb0ZsdXNoIFdoZXRoZXIgYWxsIGJsb2NrcyBhbmQgcGFydGlhbCBibG9ja3Mgc2hvdWxkIGJlIHByb2Nlc3NlZC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHByb2Nlc3NlZCBkYXRhLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgcHJvY2Vzc2VkRGF0YSA9IGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uX3Byb2Nlc3MoKTtcblx0ICAgICAgICAgKiAgICAgdmFyIHByb2Nlc3NlZERhdGEgPSBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9wcm9jZXNzKCEhJ2ZsdXNoJyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgX3Byb2Nlc3M6IGZ1bmN0aW9uIChkb0ZsdXNoKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuX2RhdGE7XG5cdCAgICAgICAgICAgIHZhciBkYXRhV29yZHMgPSBkYXRhLndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgZGF0YVNpZ0J5dGVzID0gZGF0YS5zaWdCeXRlcztcblx0ICAgICAgICAgICAgdmFyIGJsb2NrU2l6ZSA9IHRoaXMuYmxvY2tTaXplO1xuXHQgICAgICAgICAgICB2YXIgYmxvY2tTaXplQnl0ZXMgPSBibG9ja1NpemUgKiA0O1xuXG5cdCAgICAgICAgICAgIC8vIENvdW50IGJsb2NrcyByZWFkeVxuXHQgICAgICAgICAgICB2YXIgbkJsb2Nrc1JlYWR5ID0gZGF0YVNpZ0J5dGVzIC8gYmxvY2tTaXplQnl0ZXM7XG5cdCAgICAgICAgICAgIGlmIChkb0ZsdXNoKSB7XG5cdCAgICAgICAgICAgICAgICAvLyBSb3VuZCB1cCB0byBpbmNsdWRlIHBhcnRpYWwgYmxvY2tzXG5cdCAgICAgICAgICAgICAgICBuQmxvY2tzUmVhZHkgPSBNYXRoLmNlaWwobkJsb2Nrc1JlYWR5KTtcblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIC8vIFJvdW5kIGRvd24gdG8gaW5jbHVkZSBvbmx5IGZ1bGwgYmxvY2tzLFxuXHQgICAgICAgICAgICAgICAgLy8gbGVzcyB0aGUgbnVtYmVyIG9mIGJsb2NrcyB0aGF0IG11c3QgcmVtYWluIGluIHRoZSBidWZmZXJcblx0ICAgICAgICAgICAgICAgIG5CbG9ja3NSZWFkeSA9IE1hdGgubWF4KChuQmxvY2tzUmVhZHkgfCAwKSAtIHRoaXMuX21pbkJ1ZmZlclNpemUsIDApO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gQ291bnQgd29yZHMgcmVhZHlcblx0ICAgICAgICAgICAgdmFyIG5Xb3Jkc1JlYWR5ID0gbkJsb2Nrc1JlYWR5ICogYmxvY2tTaXplO1xuXG5cdCAgICAgICAgICAgIC8vIENvdW50IGJ5dGVzIHJlYWR5XG5cdCAgICAgICAgICAgIHZhciBuQnl0ZXNSZWFkeSA9IE1hdGgubWluKG5Xb3Jkc1JlYWR5ICogNCwgZGF0YVNpZ0J5dGVzKTtcblxuXHQgICAgICAgICAgICAvLyBQcm9jZXNzIGJsb2Nrc1xuXHQgICAgICAgICAgICBpZiAobldvcmRzUmVhZHkpIHtcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIG9mZnNldCA9IDA7IG9mZnNldCA8IG5Xb3Jkc1JlYWR5OyBvZmZzZXQgKz0gYmxvY2tTaXplKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgLy8gUGVyZm9ybSBjb25jcmV0ZS1hbGdvcml0aG0gbG9naWNcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLl9kb1Byb2Nlc3NCbG9jayhkYXRhV29yZHMsIG9mZnNldCk7XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBwcm9jZXNzZWQgd29yZHNcblx0ICAgICAgICAgICAgICAgIHZhciBwcm9jZXNzZWRXb3JkcyA9IGRhdGFXb3Jkcy5zcGxpY2UoMCwgbldvcmRzUmVhZHkpO1xuXHQgICAgICAgICAgICAgICAgZGF0YS5zaWdCeXRlcyAtPSBuQnl0ZXNSZWFkeTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIFJldHVybiBwcm9jZXNzZWQgd29yZHNcblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdChwcm9jZXNzZWRXb3JkcywgbkJ5dGVzUmVhZHkpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGlzIG9iamVjdC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIGNsb25lLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgY2xvbmUgPSBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLmNsb25lKCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIGNsb25lID0gQmFzZS5jbG9uZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICBjbG9uZS5fZGF0YSA9IHRoaXMuX2RhdGEuY2xvbmUoKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gY2xvbmU7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9taW5CdWZmZXJTaXplOiAwXG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBYnN0cmFjdCBoYXNoZXIgdGVtcGxhdGUuXG5cdCAgICAgKlxuXHQgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGJsb2NrU2l6ZSBUaGUgbnVtYmVyIG9mIDMyLWJpdCB3b3JkcyB0aGlzIGhhc2hlciBvcGVyYXRlcyBvbi4gRGVmYXVsdDogMTYgKDUxMiBiaXRzKVxuXHQgICAgICovXG5cdCAgICB2YXIgSGFzaGVyID0gQ19saWIuSGFzaGVyID0gQnVmZmVyZWRCbG9ja0FsZ29yaXRobS5leHRlbmQoe1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbmZpZ3VyYXRpb24gb3B0aW9ucy5cblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjZmc6IEJhc2UuZXh0ZW5kKCksXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJbml0aWFsaXplcyBhIG5ld2x5IGNyZWF0ZWQgaGFzaGVyLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNmZyAoT3B0aW9uYWwpIFRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGlzIGhhc2ggY29tcHV0YXRpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBoYXNoZXIgPSBDcnlwdG9KUy5hbGdvLlNIQTI1Ni5jcmVhdGUoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBpbml0OiBmdW5jdGlvbiAoY2ZnKSB7XG5cdCAgICAgICAgICAgIC8vIEFwcGx5IGNvbmZpZyBkZWZhdWx0c1xuXHQgICAgICAgICAgICB0aGlzLmNmZyA9IHRoaXMuY2ZnLmV4dGVuZChjZmcpO1xuXG5cdCAgICAgICAgICAgIC8vIFNldCBpbml0aWFsIHZhbHVlc1xuXHQgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFJlc2V0cyB0aGlzIGhhc2hlciB0byBpdHMgaW5pdGlhbCBzdGF0ZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgaGFzaGVyLnJlc2V0KCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gUmVzZXQgZGF0YSBidWZmZXJcblx0ICAgICAgICAgICAgQnVmZmVyZWRCbG9ja0FsZ29yaXRobS5yZXNldC5jYWxsKHRoaXMpO1xuXG5cdCAgICAgICAgICAgIC8vIFBlcmZvcm0gY29uY3JldGUtaGFzaGVyIGxvZ2ljXG5cdCAgICAgICAgICAgIHRoaXMuX2RvUmVzZXQoKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogVXBkYXRlcyB0aGlzIGhhc2hlciB3aXRoIGEgbWVzc2FnZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZVVwZGF0ZSBUaGUgbWVzc2FnZSB0byBhcHBlbmQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtIYXNoZXJ9IFRoaXMgaGFzaGVyLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICBoYXNoZXIudXBkYXRlKCdtZXNzYWdlJyk7XG5cdCAgICAgICAgICogICAgIGhhc2hlci51cGRhdGUod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uIChtZXNzYWdlVXBkYXRlKSB7XG5cdCAgICAgICAgICAgIC8vIEFwcGVuZFxuXHQgICAgICAgICAgICB0aGlzLl9hcHBlbmQobWVzc2FnZVVwZGF0ZSk7XG5cblx0ICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBoYXNoXG5cdCAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3MoKTtcblxuXHQgICAgICAgICAgICAvLyBDaGFpbmFibGVcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEZpbmFsaXplcyB0aGUgaGFzaCBjb21wdXRhdGlvbi5cblx0ICAgICAgICAgKiBOb3RlIHRoYXQgdGhlIGZpbmFsaXplIG9wZXJhdGlvbiBpcyBlZmZlY3RpdmVseSBhIGRlc3RydWN0aXZlLCByZWFkLW9uY2Ugb3BlcmF0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlVXBkYXRlIChPcHRpb25hbCkgQSBmaW5hbCBtZXNzYWdlIHVwZGF0ZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGhhc2guXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBoYXNoID0gaGFzaGVyLmZpbmFsaXplKCk7XG5cdCAgICAgICAgICogICAgIHZhciBoYXNoID0gaGFzaGVyLmZpbmFsaXplKCdtZXNzYWdlJyk7XG5cdCAgICAgICAgICogICAgIHZhciBoYXNoID0gaGFzaGVyLmZpbmFsaXplKHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgZmluYWxpemU6IGZ1bmN0aW9uIChtZXNzYWdlVXBkYXRlKSB7XG5cdCAgICAgICAgICAgIC8vIEZpbmFsIG1lc3NhZ2UgdXBkYXRlXG5cdCAgICAgICAgICAgIGlmIChtZXNzYWdlVXBkYXRlKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLl9hcHBlbmQobWVzc2FnZVVwZGF0ZSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBQZXJmb3JtIGNvbmNyZXRlLWhhc2hlciBsb2dpY1xuXHQgICAgICAgICAgICB2YXIgaGFzaCA9IHRoaXMuX2RvRmluYWxpemUoKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gaGFzaDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgYmxvY2tTaXplOiA1MTIvMzIsXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgc2hvcnRjdXQgZnVuY3Rpb24gdG8gYSBoYXNoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtIYXNoZXJ9IGhhc2hlciBUaGUgaGFzaGVyIHRvIGNyZWF0ZSBhIGhlbHBlciBmb3IuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIHNob3J0Y3V0IGZ1bmN0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgU0hBMjU2ID0gQ3J5cHRvSlMubGliLkhhc2hlci5fY3JlYXRlSGVscGVyKENyeXB0b0pTLmFsZ28uU0hBMjU2KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBfY3JlYXRlSGVscGVyOiBmdW5jdGlvbiAoaGFzaGVyKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAobWVzc2FnZSwgY2ZnKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gbmV3IGhhc2hlci5pbml0KGNmZykuZmluYWxpemUobWVzc2FnZSk7XG5cdCAgICAgICAgICAgIH07XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgYSBzaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgSE1BQydzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0hhc2hlcn0gaGFzaGVyIFRoZSBoYXNoZXIgdG8gdXNlIGluIHRoaXMgSE1BQyBoZWxwZXIuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIHNob3J0Y3V0IGZ1bmN0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgSG1hY1NIQTI1NiA9IENyeXB0b0pTLmxpYi5IYXNoZXIuX2NyZWF0ZUhtYWNIZWxwZXIoQ3J5cHRvSlMuYWxnby5TSEEyNTYpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIF9jcmVhdGVIbWFjSGVscGVyOiBmdW5jdGlvbiAoaGFzaGVyKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAobWVzc2FnZSwga2V5KSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENfYWxnby5ITUFDLmluaXQoaGFzaGVyLCBrZXkpLmZpbmFsaXplKG1lc3NhZ2UpO1xuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEFsZ29yaXRobSBuYW1lc3BhY2UuXG5cdCAgICAgKi9cblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ28gPSB7fTtcblxuXHQgICAgcmV0dXJuIEM7XG5cdH0oTWF0aCkpO1xuXG5cblx0cmV0dXJuIENyeXB0b0pTO1xuXG59KSk7IiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQoZnVuY3Rpb24gKE1hdGgpIHtcblx0ICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xuXHQgICAgdmFyIFdvcmRBcnJheSA9IENfbGliLldvcmRBcnJheTtcblx0ICAgIHZhciBIYXNoZXIgPSBDX2xpYi5IYXNoZXI7XG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvO1xuXG5cdCAgICAvLyBJbml0aWFsaXphdGlvbiBhbmQgcm91bmQgY29uc3RhbnRzIHRhYmxlc1xuXHQgICAgdmFyIEggPSBbXTtcblx0ICAgIHZhciBLID0gW107XG5cblx0ICAgIC8vIENvbXB1dGUgY29uc3RhbnRzXG5cdCAgICAoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGZ1bmN0aW9uIGlzUHJpbWUobikge1xuXHQgICAgICAgICAgICB2YXIgc3FydE4gPSBNYXRoLnNxcnQobik7XG5cdCAgICAgICAgICAgIGZvciAodmFyIGZhY3RvciA9IDI7IGZhY3RvciA8PSBzcXJ0TjsgZmFjdG9yKyspIHtcblx0ICAgICAgICAgICAgICAgIGlmICghKG4gJSBmYWN0b3IpKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgZnVuY3Rpb24gZ2V0RnJhY3Rpb25hbEJpdHMobikge1xuXHQgICAgICAgICAgICByZXR1cm4gKChuIC0gKG4gfCAwKSkgKiAweDEwMDAwMDAwMCkgfCAwO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHZhciBuID0gMjtcblx0ICAgICAgICB2YXIgblByaW1lID0gMDtcblx0ICAgICAgICB3aGlsZSAoblByaW1lIDwgNjQpIHtcblx0ICAgICAgICAgICAgaWYgKGlzUHJpbWUobikpIHtcblx0ICAgICAgICAgICAgICAgIGlmIChuUHJpbWUgPCA4KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgSFtuUHJpbWVdID0gZ2V0RnJhY3Rpb25hbEJpdHMoTWF0aC5wb3cobiwgMSAvIDIpKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIEtbblByaW1lXSA9IGdldEZyYWN0aW9uYWxCaXRzKE1hdGgucG93KG4sIDEgLyAzKSk7XG5cblx0ICAgICAgICAgICAgICAgIG5QcmltZSsrO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgbisrO1xuXHQgICAgICAgIH1cblx0ICAgIH0oKSk7XG5cblx0ICAgIC8vIFJldXNhYmxlIG9iamVjdFxuXHQgICAgdmFyIFcgPSBbXTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTSEEtMjU2IGhhc2ggYWxnb3JpdGhtLlxuXHQgICAgICovXG5cdCAgICB2YXIgU0hBMjU2ID0gQ19hbGdvLlNIQTI1NiA9IEhhc2hlci5leHRlbmQoe1xuXHQgICAgICAgIF9kb1Jlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuX2hhc2ggPSBuZXcgV29yZEFycmF5LmluaXQoSC5zbGljZSgwKSk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9kb1Byb2Nlc3NCbG9jazogZnVuY3Rpb24gKE0sIG9mZnNldCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgSCA9IHRoaXMuX2hhc2gud29yZHM7XG5cblx0ICAgICAgICAgICAgLy8gV29ya2luZyB2YXJpYWJsZXNcblx0ICAgICAgICAgICAgdmFyIGEgPSBIWzBdO1xuXHQgICAgICAgICAgICB2YXIgYiA9IEhbMV07XG5cdCAgICAgICAgICAgIHZhciBjID0gSFsyXTtcblx0ICAgICAgICAgICAgdmFyIGQgPSBIWzNdO1xuXHQgICAgICAgICAgICB2YXIgZSA9IEhbNF07XG5cdCAgICAgICAgICAgIHZhciBmID0gSFs1XTtcblx0ICAgICAgICAgICAgdmFyIGcgPSBIWzZdO1xuXHQgICAgICAgICAgICB2YXIgaCA9IEhbN107XG5cblx0ICAgICAgICAgICAgLy8gQ29tcHV0YXRpb25cblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA2NDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoaSA8IDE2KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgV1tpXSA9IE1bb2Zmc2V0ICsgaV0gfCAwO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWEweCA9IFdbaSAtIDE1XTtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWEwICA9ICgoZ2FtbWEweCA8PCAyNSkgfCAoZ2FtbWEweCA+Pj4gNykpICBeXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKGdhbW1hMHggPDwgMTQpIHwgKGdhbW1hMHggPj4+IDE4KSkgXlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChnYW1tYTB4ID4+PiAzKTtcblxuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTF4ID0gV1tpIC0gMl07XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMSAgPSAoKGdhbW1hMXggPDwgMTUpIHwgKGdhbW1hMXggPj4+IDE3KSkgXlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChnYW1tYTF4IDw8IDEzKSB8IChnYW1tYTF4ID4+PiAxOSkpIF5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZ2FtbWExeCA+Pj4gMTApO1xuXG5cdCAgICAgICAgICAgICAgICAgICAgV1tpXSA9IGdhbW1hMCArIFdbaSAtIDddICsgZ2FtbWExICsgV1tpIC0gMTZdO1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICB2YXIgY2ggID0gKGUgJiBmKSBeICh+ZSAmIGcpO1xuXHQgICAgICAgICAgICAgICAgdmFyIG1haiA9IChhICYgYikgXiAoYSAmIGMpIF4gKGIgJiBjKTtcblxuXHQgICAgICAgICAgICAgICAgdmFyIHNpZ21hMCA9ICgoYSA8PCAzMCkgfCAoYSA+Pj4gMikpIF4gKChhIDw8IDE5KSB8IChhID4+PiAxMykpIF4gKChhIDw8IDEwKSB8IChhID4+PiAyMikpO1xuXHQgICAgICAgICAgICAgICAgdmFyIHNpZ21hMSA9ICgoZSA8PCAyNikgfCAoZSA+Pj4gNikpIF4gKChlIDw8IDIxKSB8IChlID4+PiAxMSkpIF4gKChlIDw8IDcpICB8IChlID4+PiAyNSkpO1xuXG5cdCAgICAgICAgICAgICAgICB2YXIgdDEgPSBoICsgc2lnbWExICsgY2ggKyBLW2ldICsgV1tpXTtcblx0ICAgICAgICAgICAgICAgIHZhciB0MiA9IHNpZ21hMCArIG1hajtcblxuXHQgICAgICAgICAgICAgICAgaCA9IGc7XG5cdCAgICAgICAgICAgICAgICBnID0gZjtcblx0ICAgICAgICAgICAgICAgIGYgPSBlO1xuXHQgICAgICAgICAgICAgICAgZSA9IChkICsgdDEpIHwgMDtcblx0ICAgICAgICAgICAgICAgIGQgPSBjO1xuXHQgICAgICAgICAgICAgICAgYyA9IGI7XG5cdCAgICAgICAgICAgICAgICBiID0gYTtcblx0ICAgICAgICAgICAgICAgIGEgPSAodDEgKyB0MikgfCAwO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gSW50ZXJtZWRpYXRlIGhhc2ggdmFsdWVcblx0ICAgICAgICAgICAgSFswXSA9IChIWzBdICsgYSkgfCAwO1xuXHQgICAgICAgICAgICBIWzFdID0gKEhbMV0gKyBiKSB8IDA7XG5cdCAgICAgICAgICAgIEhbMl0gPSAoSFsyXSArIGMpIHwgMDtcblx0ICAgICAgICAgICAgSFszXSA9IChIWzNdICsgZCkgfCAwO1xuXHQgICAgICAgICAgICBIWzRdID0gKEhbNF0gKyBlKSB8IDA7XG5cdCAgICAgICAgICAgIEhbNV0gPSAoSFs1XSArIGYpIHwgMDtcblx0ICAgICAgICAgICAgSFs2XSA9IChIWzZdICsgZykgfCAwO1xuXHQgICAgICAgICAgICBIWzddID0gKEhbN10gKyBoKSB8IDA7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9kb0ZpbmFsaXplOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuX2RhdGE7XG5cdCAgICAgICAgICAgIHZhciBkYXRhV29yZHMgPSBkYXRhLndvcmRzO1xuXG5cdCAgICAgICAgICAgIHZhciBuQml0c1RvdGFsID0gdGhpcy5fbkRhdGFCeXRlcyAqIDg7XG5cdCAgICAgICAgICAgIHZhciBuQml0c0xlZnQgPSBkYXRhLnNpZ0J5dGVzICogODtcblxuXHQgICAgICAgICAgICAvLyBBZGQgcGFkZGluZ1xuXHQgICAgICAgICAgICBkYXRhV29yZHNbbkJpdHNMZWZ0ID4+PiA1XSB8PSAweDgwIDw8ICgyNCAtIG5CaXRzTGVmdCAlIDMyKTtcblx0ICAgICAgICAgICAgZGF0YVdvcmRzWygoKG5CaXRzTGVmdCArIDY0KSA+Pj4gOSkgPDwgNCkgKyAxNF0gPSBNYXRoLmZsb29yKG5CaXRzVG90YWwgLyAweDEwMDAwMDAwMCk7XG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyA2NCkgPj4+IDkpIDw8IDQpICsgMTVdID0gbkJpdHNUb3RhbDtcblx0ICAgICAgICAgICAgZGF0YS5zaWdCeXRlcyA9IGRhdGFXb3Jkcy5sZW5ndGggKiA0O1xuXG5cdCAgICAgICAgICAgIC8vIEhhc2ggZmluYWwgYmxvY2tzXG5cdCAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3MoKTtcblxuXHQgICAgICAgICAgICAvLyBSZXR1cm4gZmluYWwgY29tcHV0ZWQgaGFzaFxuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5faGFzaDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIGNsb25lID0gSGFzaGVyLmNsb25lLmNhbGwodGhpcyk7XG5cdCAgICAgICAgICAgIGNsb25lLl9oYXNoID0gdGhpcy5faGFzaC5jbG9uZSgpO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBjbG9uZTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgaGFzaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cblx0ICAgICAqXG5cdCAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBoYXNoLlxuXHQgICAgICpcblx0ICAgICAqIEBzdGF0aWNcblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlNIQTI1NignbWVzc2FnZScpO1xuXHQgICAgICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBMjU2KHdvcmRBcnJheSk7XG5cdCAgICAgKi9cblx0ICAgIEMuU0hBMjU2ID0gSGFzaGVyLl9jcmVhdGVIZWxwZXIoU0hBMjU2KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgSE1BQydzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgKlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IGtleSBUaGUgc2VjcmV0IGtleS5cblx0ICAgICAqXG5cdCAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBITUFDLlxuXHQgICAgICpcblx0ICAgICAqIEBzdGF0aWNcblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIgaG1hYyA9IENyeXB0b0pTLkhtYWNTSEEyNTYobWVzc2FnZSwga2V5KTtcblx0ICAgICAqL1xuXHQgICAgQy5IbWFjU0hBMjU2ID0gSGFzaGVyLl9jcmVhdGVIbWFjSGVscGVyKFNIQTI1Nik7XG5cdH0oTWF0aCkpO1xuXG5cblx0cmV0dXJuIENyeXB0b0pTLlNIQTI1NjtcblxufSkpOyIsIihmdW5jdGlvbigpe1xuXG4gICAgLy8gQ29weXJpZ2h0IChjKSAyMDA1ICBUb20gV3VcbiAgICAvLyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgIC8vIFNlZSBcIkxJQ0VOU0VcIiBmb3IgZGV0YWlscy5cblxuICAgIC8vIEJhc2ljIEphdmFTY3JpcHQgQk4gbGlicmFyeSAtIHN1YnNldCB1c2VmdWwgZm9yIFJTQSBlbmNyeXB0aW9uLlxuXG4gICAgLy8gQml0cyBwZXIgZGlnaXRcbiAgICB2YXIgZGJpdHM7XG5cbiAgICAvLyBKYXZhU2NyaXB0IGVuZ2luZSBhbmFseXNpc1xuICAgIHZhciBjYW5hcnkgPSAweGRlYWRiZWVmY2FmZTtcbiAgICB2YXIgal9sbSA9ICgoY2FuYXJ5JjB4ZmZmZmZmKT09MHhlZmNhZmUpO1xuXG4gICAgLy8gKHB1YmxpYykgQ29uc3RydWN0b3JcbiAgICBmdW5jdGlvbiBCaWdJbnRlZ2VyKGEsYixjKSB7XG4gICAgICBpZihhICE9IG51bGwpXG4gICAgICAgIGlmKFwibnVtYmVyXCIgPT0gdHlwZW9mIGEpIHRoaXMuZnJvbU51bWJlcihhLGIsYyk7XG4gICAgICAgIGVsc2UgaWYoYiA9PSBudWxsICYmIFwic3RyaW5nXCIgIT0gdHlwZW9mIGEpIHRoaXMuZnJvbVN0cmluZyhhLDI1Nik7XG4gICAgICAgIGVsc2UgdGhpcy5mcm9tU3RyaW5nKGEsYik7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIG5ldywgdW5zZXQgQmlnSW50ZWdlclxuICAgIGZ1bmN0aW9uIG5iaSgpIHsgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKG51bGwpOyB9XG5cbiAgICAvLyBhbTogQ29tcHV0ZSB3X2ogKz0gKHgqdGhpc19pKSwgcHJvcGFnYXRlIGNhcnJpZXMsXG4gICAgLy8gYyBpcyBpbml0aWFsIGNhcnJ5LCByZXR1cm5zIGZpbmFsIGNhcnJ5LlxuICAgIC8vIGMgPCAzKmR2YWx1ZSwgeCA8IDIqZHZhbHVlLCB0aGlzX2kgPCBkdmFsdWVcbiAgICAvLyBXZSBuZWVkIHRvIHNlbGVjdCB0aGUgZmFzdGVzdCBvbmUgdGhhdCB3b3JrcyBpbiB0aGlzIGVudmlyb25tZW50LlxuXG4gICAgLy8gYW0xOiB1c2UgYSBzaW5nbGUgbXVsdCBhbmQgZGl2aWRlIHRvIGdldCB0aGUgaGlnaCBiaXRzLFxuICAgIC8vIG1heCBkaWdpdCBiaXRzIHNob3VsZCBiZSAyNiBiZWNhdXNlXG4gICAgLy8gbWF4IGludGVybmFsIHZhbHVlID0gMipkdmFsdWVeMi0yKmR2YWx1ZSAoPCAyXjUzKVxuICAgIGZ1bmN0aW9uIGFtMShpLHgsdyxqLGMsbikge1xuICAgICAgd2hpbGUoLS1uID49IDApIHtcbiAgICAgICAgdmFyIHYgPSB4KnRoaXNbaSsrXSt3W2pdK2M7XG4gICAgICAgIGMgPSBNYXRoLmZsb29yKHYvMHg0MDAwMDAwKTtcbiAgICAgICAgd1tqKytdID0gdiYweDNmZmZmZmY7XG4gICAgICB9XG4gICAgICByZXR1cm4gYztcbiAgICB9XG4gICAgLy8gYW0yIGF2b2lkcyBhIGJpZyBtdWx0LWFuZC1leHRyYWN0IGNvbXBsZXRlbHkuXG4gICAgLy8gTWF4IGRpZ2l0IGJpdHMgc2hvdWxkIGJlIDw9IDMwIGJlY2F1c2Ugd2UgZG8gYml0d2lzZSBvcHNcbiAgICAvLyBvbiB2YWx1ZXMgdXAgdG8gMipoZHZhbHVlXjItaGR2YWx1ZS0xICg8IDJeMzEpXG4gICAgZnVuY3Rpb24gYW0yKGkseCx3LGosYyxuKSB7XG4gICAgICB2YXIgeGwgPSB4JjB4N2ZmZiwgeGggPSB4Pj4xNTtcbiAgICAgIHdoaWxlKC0tbiA+PSAwKSB7XG4gICAgICAgIHZhciBsID0gdGhpc1tpXSYweDdmZmY7XG4gICAgICAgIHZhciBoID0gdGhpc1tpKytdPj4xNTtcbiAgICAgICAgdmFyIG0gPSB4aCpsK2gqeGw7XG4gICAgICAgIGwgPSB4bCpsKygobSYweDdmZmYpPDwxNSkrd1tqXSsoYyYweDNmZmZmZmZmKTtcbiAgICAgICAgYyA9IChsPj4+MzApKyhtPj4+MTUpK3hoKmgrKGM+Pj4zMCk7XG4gICAgICAgIHdbaisrXSA9IGwmMHgzZmZmZmZmZjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjO1xuICAgIH1cbiAgICAvLyBBbHRlcm5hdGVseSwgc2V0IG1heCBkaWdpdCBiaXRzIHRvIDI4IHNpbmNlIHNvbWVcbiAgICAvLyBicm93c2VycyBzbG93IGRvd24gd2hlbiBkZWFsaW5nIHdpdGggMzItYml0IG51bWJlcnMuXG4gICAgZnVuY3Rpb24gYW0zKGkseCx3LGosYyxuKSB7XG4gICAgICB2YXIgeGwgPSB4JjB4M2ZmZiwgeGggPSB4Pj4xNDtcbiAgICAgIHdoaWxlKC0tbiA+PSAwKSB7XG4gICAgICAgIHZhciBsID0gdGhpc1tpXSYweDNmZmY7XG4gICAgICAgIHZhciBoID0gdGhpc1tpKytdPj4xNDtcbiAgICAgICAgdmFyIG0gPSB4aCpsK2gqeGw7XG4gICAgICAgIGwgPSB4bCpsKygobSYweDNmZmYpPDwxNCkrd1tqXStjO1xuICAgICAgICBjID0gKGw+PjI4KSsobT4+MTQpK3hoKmg7XG4gICAgICAgIHdbaisrXSA9IGwmMHhmZmZmZmZmO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGM7XG4gICAgfVxuICAgIHZhciBpbkJyb3dzZXIgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiO1xuICAgIGlmKGluQnJvd3NlciAmJiBqX2xtICYmIChuYXZpZ2F0b3IuYXBwTmFtZSA9PSBcIk1pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3JlclwiKSkge1xuICAgICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYW0gPSBhbTI7XG4gICAgICBkYml0cyA9IDMwO1xuICAgIH1cbiAgICBlbHNlIGlmKGluQnJvd3NlciAmJiBqX2xtICYmIChuYXZpZ2F0b3IuYXBwTmFtZSAhPSBcIk5ldHNjYXBlXCIpKSB7XG4gICAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hbSA9IGFtMTtcbiAgICAgIGRiaXRzID0gMjY7XG4gICAgfVxuICAgIGVsc2UgeyAvLyBNb3ppbGxhL05ldHNjYXBlIHNlZW1zIHRvIHByZWZlciBhbTNcbiAgICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFtID0gYW0zO1xuICAgICAgZGJpdHMgPSAyODtcbiAgICB9XG5cbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5EQiA9IGRiaXRzO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLkRNID0gKCgxPDxkYml0cyktMSk7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuRFYgPSAoMTw8ZGJpdHMpO1xuXG4gICAgdmFyIEJJX0ZQID0gNTI7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuRlYgPSBNYXRoLnBvdygyLEJJX0ZQKTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5GMSA9IEJJX0ZQLWRiaXRzO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLkYyID0gMipkYml0cy1CSV9GUDtcblxuICAgIC8vIERpZ2l0IGNvbnZlcnNpb25zXG4gICAgdmFyIEJJX1JNID0gXCIwMTIzNDU2Nzg5YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpcIjtcbiAgICB2YXIgQklfUkMgPSBuZXcgQXJyYXkoKTtcbiAgICB2YXIgcnIsdnY7XG4gICAgcnIgPSBcIjBcIi5jaGFyQ29kZUF0KDApO1xuICAgIGZvcih2diA9IDA7IHZ2IDw9IDk7ICsrdnYpIEJJX1JDW3JyKytdID0gdnY7XG4gICAgcnIgPSBcImFcIi5jaGFyQ29kZUF0KDApO1xuICAgIGZvcih2diA9IDEwOyB2diA8IDM2OyArK3Z2KSBCSV9SQ1tycisrXSA9IHZ2O1xuICAgIHJyID0gXCJBXCIuY2hhckNvZGVBdCgwKTtcbiAgICBmb3IodnYgPSAxMDsgdnYgPCAzNjsgKyt2dikgQklfUkNbcnIrK10gPSB2djtcblxuICAgIGZ1bmN0aW9uIGludDJjaGFyKG4pIHsgcmV0dXJuIEJJX1JNLmNoYXJBdChuKTsgfVxuICAgIGZ1bmN0aW9uIGludEF0KHMsaSkge1xuICAgICAgdmFyIGMgPSBCSV9SQ1tzLmNoYXJDb2RlQXQoaSldO1xuICAgICAgcmV0dXJuIChjPT1udWxsKT8tMTpjO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIGNvcHkgdGhpcyB0byByXG4gICAgZnVuY3Rpb24gYm5wQ29weVRvKHIpIHtcbiAgICAgIGZvcih2YXIgaSA9IHRoaXMudC0xOyBpID49IDA7IC0taSkgcltpXSA9IHRoaXNbaV07XG4gICAgICByLnQgPSB0aGlzLnQ7XG4gICAgICByLnMgPSB0aGlzLnM7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgc2V0IGZyb20gaW50ZWdlciB2YWx1ZSB4LCAtRFYgPD0geCA8IERWXG4gICAgZnVuY3Rpb24gYm5wRnJvbUludCh4KSB7XG4gICAgICB0aGlzLnQgPSAxO1xuICAgICAgdGhpcy5zID0gKHg8MCk/LTE6MDtcbiAgICAgIGlmKHggPiAwKSB0aGlzWzBdID0geDtcbiAgICAgIGVsc2UgaWYoeCA8IC0xKSB0aGlzWzBdID0geCt0aGlzLkRWO1xuICAgICAgZWxzZSB0aGlzLnQgPSAwO1xuICAgIH1cblxuICAgIC8vIHJldHVybiBiaWdpbnQgaW5pdGlhbGl6ZWQgdG8gdmFsdWVcbiAgICBmdW5jdGlvbiBuYnYoaSkgeyB2YXIgciA9IG5iaSgpOyByLmZyb21JbnQoaSk7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSBzZXQgZnJvbSBzdHJpbmcgYW5kIHJhZGl4XG4gICAgZnVuY3Rpb24gYm5wRnJvbVN0cmluZyhzLGIpIHtcbiAgICAgIHZhciBrO1xuICAgICAgaWYoYiA9PSAxNikgayA9IDQ7XG4gICAgICBlbHNlIGlmKGIgPT0gOCkgayA9IDM7XG4gICAgICBlbHNlIGlmKGIgPT0gMjU2KSBrID0gODsgLy8gYnl0ZSBhcnJheVxuICAgICAgZWxzZSBpZihiID09IDIpIGsgPSAxO1xuICAgICAgZWxzZSBpZihiID09IDMyKSBrID0gNTtcbiAgICAgIGVsc2UgaWYoYiA9PSA0KSBrID0gMjtcbiAgICAgIGVsc2UgeyB0aGlzLmZyb21SYWRpeChzLGIpOyByZXR1cm47IH1cbiAgICAgIHRoaXMudCA9IDA7XG4gICAgICB0aGlzLnMgPSAwO1xuICAgICAgdmFyIGkgPSBzLmxlbmd0aCwgbWkgPSBmYWxzZSwgc2ggPSAwO1xuICAgICAgd2hpbGUoLS1pID49IDApIHtcbiAgICAgICAgdmFyIHggPSAoaz09OCk/c1tpXSYweGZmOmludEF0KHMsaSk7XG4gICAgICAgIGlmKHggPCAwKSB7XG4gICAgICAgICAgaWYocy5jaGFyQXQoaSkgPT0gXCItXCIpIG1pID0gdHJ1ZTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtaSA9IGZhbHNlO1xuICAgICAgICBpZihzaCA9PSAwKVxuICAgICAgICAgIHRoaXNbdGhpcy50KytdID0geDtcbiAgICAgICAgZWxzZSBpZihzaCtrID4gdGhpcy5EQikge1xuICAgICAgICAgIHRoaXNbdGhpcy50LTFdIHw9ICh4JigoMTw8KHRoaXMuREItc2gpKS0xKSk8PHNoO1xuICAgICAgICAgIHRoaXNbdGhpcy50KytdID0gKHg+Pih0aGlzLkRCLXNoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgIHRoaXNbdGhpcy50LTFdIHw9IHg8PHNoO1xuICAgICAgICBzaCArPSBrO1xuICAgICAgICBpZihzaCA+PSB0aGlzLkRCKSBzaCAtPSB0aGlzLkRCO1xuICAgICAgfVxuICAgICAgaWYoayA9PSA4ICYmIChzWzBdJjB4ODApICE9IDApIHtcbiAgICAgICAgdGhpcy5zID0gLTE7XG4gICAgICAgIGlmKHNoID4gMCkgdGhpc1t0aGlzLnQtMV0gfD0gKCgxPDwodGhpcy5EQi1zaCkpLTEpPDxzaDtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2xhbXAoKTtcbiAgICAgIGlmKG1pKSBCaWdJbnRlZ2VyLlpFUk8uc3ViVG8odGhpcyx0aGlzKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSBjbGFtcCBvZmYgZXhjZXNzIGhpZ2ggd29yZHNcbiAgICBmdW5jdGlvbiBibnBDbGFtcCgpIHtcbiAgICAgIHZhciBjID0gdGhpcy5zJnRoaXMuRE07XG4gICAgICB3aGlsZSh0aGlzLnQgPiAwICYmIHRoaXNbdGhpcy50LTFdID09IGMpIC0tdGhpcy50O1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHJldHVybiBzdHJpbmcgcmVwcmVzZW50YXRpb24gaW4gZ2l2ZW4gcmFkaXhcbiAgICBmdW5jdGlvbiBiblRvU3RyaW5nKGIpIHtcbiAgICAgIGlmKHRoaXMucyA8IDApIHJldHVybiBcIi1cIit0aGlzLm5lZ2F0ZSgpLnRvU3RyaW5nKGIpO1xuICAgICAgdmFyIGs7XG4gICAgICBpZihiID09IDE2KSBrID0gNDtcbiAgICAgIGVsc2UgaWYoYiA9PSA4KSBrID0gMztcbiAgICAgIGVsc2UgaWYoYiA9PSAyKSBrID0gMTtcbiAgICAgIGVsc2UgaWYoYiA9PSAzMikgayA9IDU7XG4gICAgICBlbHNlIGlmKGIgPT0gNCkgayA9IDI7XG4gICAgICBlbHNlIHJldHVybiB0aGlzLnRvUmFkaXgoYik7XG4gICAgICB2YXIga20gPSAoMTw8ayktMSwgZCwgbSA9IGZhbHNlLCByID0gXCJcIiwgaSA9IHRoaXMudDtcbiAgICAgIHZhciBwID0gdGhpcy5EQi0oaSp0aGlzLkRCKSVrO1xuICAgICAgaWYoaS0tID4gMCkge1xuICAgICAgICBpZihwIDwgdGhpcy5EQiAmJiAoZCA9IHRoaXNbaV0+PnApID4gMCkgeyBtID0gdHJ1ZTsgciA9IGludDJjaGFyKGQpOyB9XG4gICAgICAgIHdoaWxlKGkgPj0gMCkge1xuICAgICAgICAgIGlmKHAgPCBrKSB7XG4gICAgICAgICAgICBkID0gKHRoaXNbaV0mKCgxPDxwKS0xKSk8PChrLXApO1xuICAgICAgICAgICAgZCB8PSB0aGlzWy0taV0+PihwKz10aGlzLkRCLWspO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGQgPSAodGhpc1tpXT4+KHAtPWspKSZrbTtcbiAgICAgICAgICAgIGlmKHAgPD0gMCkgeyBwICs9IHRoaXMuREI7IC0taTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZihkID4gMCkgbSA9IHRydWU7XG4gICAgICAgICAgaWYobSkgciArPSBpbnQyY2hhcihkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG0/cjpcIjBcIjtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSAtdGhpc1xuICAgIGZ1bmN0aW9uIGJuTmVnYXRlKCkgeyB2YXIgciA9IG5iaSgpOyBCaWdJbnRlZ2VyLlpFUk8uc3ViVG8odGhpcyxyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIHx0aGlzfFxuICAgIGZ1bmN0aW9uIGJuQWJzKCkgeyByZXR1cm4gKHRoaXMuczwwKT90aGlzLm5lZ2F0ZSgpOnRoaXM7IH1cblxuICAgIC8vIChwdWJsaWMpIHJldHVybiArIGlmIHRoaXMgPiBhLCAtIGlmIHRoaXMgPCBhLCAwIGlmIGVxdWFsXG4gICAgZnVuY3Rpb24gYm5Db21wYXJlVG8oYSkge1xuICAgICAgdmFyIHIgPSB0aGlzLnMtYS5zO1xuICAgICAgaWYociAhPSAwKSByZXR1cm4gcjtcbiAgICAgIHZhciBpID0gdGhpcy50O1xuICAgICAgciA9IGktYS50O1xuICAgICAgaWYociAhPSAwKSByZXR1cm4gKHRoaXMuczwwKT8tcjpyO1xuICAgICAgd2hpbGUoLS1pID49IDApIGlmKChyPXRoaXNbaV0tYVtpXSkgIT0gMCkgcmV0dXJuIHI7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvLyByZXR1cm5zIGJpdCBsZW5ndGggb2YgdGhlIGludGVnZXIgeFxuICAgIGZ1bmN0aW9uIG5iaXRzKHgpIHtcbiAgICAgIHZhciByID0gMSwgdDtcbiAgICAgIGlmKCh0PXg+Pj4xNikgIT0gMCkgeyB4ID0gdDsgciArPSAxNjsgfVxuICAgICAgaWYoKHQ9eD4+OCkgIT0gMCkgeyB4ID0gdDsgciArPSA4OyB9XG4gICAgICBpZigodD14Pj40KSAhPSAwKSB7IHggPSB0OyByICs9IDQ7IH1cbiAgICAgIGlmKCh0PXg+PjIpICE9IDApIHsgeCA9IHQ7IHIgKz0gMjsgfVxuICAgICAgaWYoKHQ9eD4+MSkgIT0gMCkgeyB4ID0gdDsgciArPSAxOyB9XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSByZXR1cm4gdGhlIG51bWJlciBvZiBiaXRzIGluIFwidGhpc1wiXG4gICAgZnVuY3Rpb24gYm5CaXRMZW5ndGgoKSB7XG4gICAgICBpZih0aGlzLnQgPD0gMCkgcmV0dXJuIDA7XG4gICAgICByZXR1cm4gdGhpcy5EQioodGhpcy50LTEpK25iaXRzKHRoaXNbdGhpcy50LTFdXih0aGlzLnMmdGhpcy5ETSkpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzIDw8IG4qREJcbiAgICBmdW5jdGlvbiBibnBETFNoaWZ0VG8obixyKSB7XG4gICAgICB2YXIgaTtcbiAgICAgIGZvcihpID0gdGhpcy50LTE7IGkgPj0gMDsgLS1pKSByW2krbl0gPSB0aGlzW2ldO1xuICAgICAgZm9yKGkgPSBuLTE7IGkgPj0gMDsgLS1pKSByW2ldID0gMDtcbiAgICAgIHIudCA9IHRoaXMudCtuO1xuICAgICAgci5zID0gdGhpcy5zO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzID4+IG4qREJcbiAgICBmdW5jdGlvbiBibnBEUlNoaWZ0VG8obixyKSB7XG4gICAgICBmb3IodmFyIGkgPSBuOyBpIDwgdGhpcy50OyArK2kpIHJbaS1uXSA9IHRoaXNbaV07XG4gICAgICByLnQgPSBNYXRoLm1heCh0aGlzLnQtbiwwKTtcbiAgICAgIHIucyA9IHRoaXMucztcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyA8PCBuXG4gICAgZnVuY3Rpb24gYm5wTFNoaWZ0VG8obixyKSB7XG4gICAgICB2YXIgYnMgPSBuJXRoaXMuREI7XG4gICAgICB2YXIgY2JzID0gdGhpcy5EQi1icztcbiAgICAgIHZhciBibSA9ICgxPDxjYnMpLTE7XG4gICAgICB2YXIgZHMgPSBNYXRoLmZsb29yKG4vdGhpcy5EQiksIGMgPSAodGhpcy5zPDxicykmdGhpcy5ETSwgaTtcbiAgICAgIGZvcihpID0gdGhpcy50LTE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHJbaStkcysxXSA9ICh0aGlzW2ldPj5jYnMpfGM7XG4gICAgICAgIGMgPSAodGhpc1tpXSZibSk8PGJzO1xuICAgICAgfVxuICAgICAgZm9yKGkgPSBkcy0xOyBpID49IDA7IC0taSkgcltpXSA9IDA7XG4gICAgICByW2RzXSA9IGM7XG4gICAgICByLnQgPSB0aGlzLnQrZHMrMTtcbiAgICAgIHIucyA9IHRoaXMucztcbiAgICAgIHIuY2xhbXAoKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyA+PiBuXG4gICAgZnVuY3Rpb24gYm5wUlNoaWZ0VG8obixyKSB7XG4gICAgICByLnMgPSB0aGlzLnM7XG4gICAgICB2YXIgZHMgPSBNYXRoLmZsb29yKG4vdGhpcy5EQik7XG4gICAgICBpZihkcyA+PSB0aGlzLnQpIHsgci50ID0gMDsgcmV0dXJuOyB9XG4gICAgICB2YXIgYnMgPSBuJXRoaXMuREI7XG4gICAgICB2YXIgY2JzID0gdGhpcy5EQi1icztcbiAgICAgIHZhciBibSA9ICgxPDxicyktMTtcbiAgICAgIHJbMF0gPSB0aGlzW2RzXT4+YnM7XG4gICAgICBmb3IodmFyIGkgPSBkcysxOyBpIDwgdGhpcy50OyArK2kpIHtcbiAgICAgICAgcltpLWRzLTFdIHw9ICh0aGlzW2ldJmJtKTw8Y2JzO1xuICAgICAgICByW2ktZHNdID0gdGhpc1tpXT4+YnM7XG4gICAgICB9XG4gICAgICBpZihicyA+IDApIHJbdGhpcy50LWRzLTFdIHw9ICh0aGlzLnMmYm0pPDxjYnM7XG4gICAgICByLnQgPSB0aGlzLnQtZHM7XG4gICAgICByLmNsYW1wKCk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXMgLSBhXG4gICAgZnVuY3Rpb24gYm5wU3ViVG8oYSxyKSB7XG4gICAgICB2YXIgaSA9IDAsIGMgPSAwLCBtID0gTWF0aC5taW4oYS50LHRoaXMudCk7XG4gICAgICB3aGlsZShpIDwgbSkge1xuICAgICAgICBjICs9IHRoaXNbaV0tYVtpXTtcbiAgICAgICAgcltpKytdID0gYyZ0aGlzLkRNO1xuICAgICAgICBjID4+PSB0aGlzLkRCO1xuICAgICAgfVxuICAgICAgaWYoYS50IDwgdGhpcy50KSB7XG4gICAgICAgIGMgLT0gYS5zO1xuICAgICAgICB3aGlsZShpIDwgdGhpcy50KSB7XG4gICAgICAgICAgYyArPSB0aGlzW2ldO1xuICAgICAgICAgIHJbaSsrXSA9IGMmdGhpcy5ETTtcbiAgICAgICAgICBjID4+PSB0aGlzLkRCO1xuICAgICAgICB9XG4gICAgICAgIGMgKz0gdGhpcy5zO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGMgKz0gdGhpcy5zO1xuICAgICAgICB3aGlsZShpIDwgYS50KSB7XG4gICAgICAgICAgYyAtPSBhW2ldO1xuICAgICAgICAgIHJbaSsrXSA9IGMmdGhpcy5ETTtcbiAgICAgICAgICBjID4+PSB0aGlzLkRCO1xuICAgICAgICB9XG4gICAgICAgIGMgLT0gYS5zO1xuICAgICAgfVxuICAgICAgci5zID0gKGM8MCk/LTE6MDtcbiAgICAgIGlmKGMgPCAtMSkgcltpKytdID0gdGhpcy5EVitjO1xuICAgICAgZWxzZSBpZihjID4gMCkgcltpKytdID0gYztcbiAgICAgIHIudCA9IGk7XG4gICAgICByLmNsYW1wKCk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXMgKiBhLCByICE9IHRoaXMsYSAoSEFDIDE0LjEyKVxuICAgIC8vIFwidGhpc1wiIHNob3VsZCBiZSB0aGUgbGFyZ2VyIG9uZSBpZiBhcHByb3ByaWF0ZS5cbiAgICBmdW5jdGlvbiBibnBNdWx0aXBseVRvKGEscikge1xuICAgICAgdmFyIHggPSB0aGlzLmFicygpLCB5ID0gYS5hYnMoKTtcbiAgICAgIHZhciBpID0geC50O1xuICAgICAgci50ID0gaSt5LnQ7XG4gICAgICB3aGlsZSgtLWkgPj0gMCkgcltpXSA9IDA7XG4gICAgICBmb3IoaSA9IDA7IGkgPCB5LnQ7ICsraSkgcltpK3gudF0gPSB4LmFtKDAseVtpXSxyLGksMCx4LnQpO1xuICAgICAgci5zID0gMDtcbiAgICAgIHIuY2xhbXAoKTtcbiAgICAgIGlmKHRoaXMucyAhPSBhLnMpIEJpZ0ludGVnZXIuWkVSTy5zdWJUbyhyLHIpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzXjIsIHIgIT0gdGhpcyAoSEFDIDE0LjE2KVxuICAgIGZ1bmN0aW9uIGJucFNxdWFyZVRvKHIpIHtcbiAgICAgIHZhciB4ID0gdGhpcy5hYnMoKTtcbiAgICAgIHZhciBpID0gci50ID0gMip4LnQ7XG4gICAgICB3aGlsZSgtLWkgPj0gMCkgcltpXSA9IDA7XG4gICAgICBmb3IoaSA9IDA7IGkgPCB4LnQtMTsgKytpKSB7XG4gICAgICAgIHZhciBjID0geC5hbShpLHhbaV0sciwyKmksMCwxKTtcbiAgICAgICAgaWYoKHJbaSt4LnRdKz14LmFtKGkrMSwyKnhbaV0sciwyKmkrMSxjLHgudC1pLTEpKSA+PSB4LkRWKSB7XG4gICAgICAgICAgcltpK3gudF0gLT0geC5EVjtcbiAgICAgICAgICByW2kreC50KzFdID0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYoci50ID4gMCkgcltyLnQtMV0gKz0geC5hbShpLHhbaV0sciwyKmksMCwxKTtcbiAgICAgIHIucyA9IDA7XG4gICAgICByLmNsYW1wKCk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgZGl2aWRlIHRoaXMgYnkgbSwgcXVvdGllbnQgYW5kIHJlbWFpbmRlciB0byBxLCByIChIQUMgMTQuMjApXG4gICAgLy8gciAhPSBxLCB0aGlzICE9IG0uICBxIG9yIHIgbWF5IGJlIG51bGwuXG4gICAgZnVuY3Rpb24gYm5wRGl2UmVtVG8obSxxLHIpIHtcbiAgICAgIHZhciBwbSA9IG0uYWJzKCk7XG4gICAgICBpZihwbS50IDw9IDApIHJldHVybjtcbiAgICAgIHZhciBwdCA9IHRoaXMuYWJzKCk7XG4gICAgICBpZihwdC50IDwgcG0udCkge1xuICAgICAgICBpZihxICE9IG51bGwpIHEuZnJvbUludCgwKTtcbiAgICAgICAgaWYociAhPSBudWxsKSB0aGlzLmNvcHlUbyhyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYociA9PSBudWxsKSByID0gbmJpKCk7XG4gICAgICB2YXIgeSA9IG5iaSgpLCB0cyA9IHRoaXMucywgbXMgPSBtLnM7XG4gICAgICB2YXIgbnNoID0gdGhpcy5EQi1uYml0cyhwbVtwbS50LTFdKTsgICAvLyBub3JtYWxpemUgbW9kdWx1c1xuICAgICAgaWYobnNoID4gMCkgeyBwbS5sU2hpZnRUbyhuc2gseSk7IHB0LmxTaGlmdFRvKG5zaCxyKTsgfVxuICAgICAgZWxzZSB7IHBtLmNvcHlUbyh5KTsgcHQuY29weVRvKHIpOyB9XG4gICAgICB2YXIgeXMgPSB5LnQ7XG4gICAgICB2YXIgeTAgPSB5W3lzLTFdO1xuICAgICAgaWYoeTAgPT0gMCkgcmV0dXJuO1xuICAgICAgdmFyIHl0ID0geTAqKDE8PHRoaXMuRjEpKygoeXM+MSk/eVt5cy0yXT4+dGhpcy5GMjowKTtcbiAgICAgIHZhciBkMSA9IHRoaXMuRlYveXQsIGQyID0gKDE8PHRoaXMuRjEpL3l0LCBlID0gMTw8dGhpcy5GMjtcbiAgICAgIHZhciBpID0gci50LCBqID0gaS15cywgdCA9IChxPT1udWxsKT9uYmkoKTpxO1xuICAgICAgeS5kbFNoaWZ0VG8oaix0KTtcbiAgICAgIGlmKHIuY29tcGFyZVRvKHQpID49IDApIHtcbiAgICAgICAgcltyLnQrK10gPSAxO1xuICAgICAgICByLnN1YlRvKHQscik7XG4gICAgICB9XG4gICAgICBCaWdJbnRlZ2VyLk9ORS5kbFNoaWZ0VG8oeXMsdCk7XG4gICAgICB0LnN1YlRvKHkseSk7ICAvLyBcIm5lZ2F0aXZlXCIgeSBzbyB3ZSBjYW4gcmVwbGFjZSBzdWIgd2l0aCBhbSBsYXRlclxuICAgICAgd2hpbGUoeS50IDwgeXMpIHlbeS50KytdID0gMDtcbiAgICAgIHdoaWxlKC0taiA+PSAwKSB7XG4gICAgICAgIC8vIEVzdGltYXRlIHF1b3RpZW50IGRpZ2l0XG4gICAgICAgIHZhciBxZCA9IChyWy0taV09PXkwKT90aGlzLkRNOk1hdGguZmxvb3IocltpXSpkMSsocltpLTFdK2UpKmQyKTtcbiAgICAgICAgaWYoKHJbaV0rPXkuYW0oMCxxZCxyLGosMCx5cykpIDwgcWQpIHsgICAvLyBUcnkgaXQgb3V0XG4gICAgICAgICAgeS5kbFNoaWZ0VG8oaix0KTtcbiAgICAgICAgICByLnN1YlRvKHQscik7XG4gICAgICAgICAgd2hpbGUocltpXSA8IC0tcWQpIHIuc3ViVG8odCxyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYocSAhPSBudWxsKSB7XG4gICAgICAgIHIuZHJTaGlmdFRvKHlzLHEpO1xuICAgICAgICBpZih0cyAhPSBtcykgQmlnSW50ZWdlci5aRVJPLnN1YlRvKHEscSk7XG4gICAgICB9XG4gICAgICByLnQgPSB5cztcbiAgICAgIHIuY2xhbXAoKTtcbiAgICAgIGlmKG5zaCA+IDApIHIuclNoaWZ0VG8obnNoLHIpOyAvLyBEZW5vcm1hbGl6ZSByZW1haW5kZXJcbiAgICAgIGlmKHRzIDwgMCkgQmlnSW50ZWdlci5aRVJPLnN1YlRvKHIscik7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyBtb2QgYVxuICAgIGZ1bmN0aW9uIGJuTW9kKGEpIHtcbiAgICAgIHZhciByID0gbmJpKCk7XG4gICAgICB0aGlzLmFicygpLmRpdlJlbVRvKGEsbnVsbCxyKTtcbiAgICAgIGlmKHRoaXMucyA8IDAgJiYgci5jb21wYXJlVG8oQmlnSW50ZWdlci5aRVJPKSA+IDApIGEuc3ViVG8ocixyKTtcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIE1vZHVsYXIgcmVkdWN0aW9uIHVzaW5nIFwiY2xhc3NpY1wiIGFsZ29yaXRobVxuICAgIGZ1bmN0aW9uIENsYXNzaWMobSkgeyB0aGlzLm0gPSBtOyB9XG4gICAgZnVuY3Rpb24gY0NvbnZlcnQoeCkge1xuICAgICAgaWYoeC5zIDwgMCB8fCB4LmNvbXBhcmVUbyh0aGlzLm0pID49IDApIHJldHVybiB4Lm1vZCh0aGlzLm0pO1xuICAgICAgZWxzZSByZXR1cm4geDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY1JldmVydCh4KSB7IHJldHVybiB4OyB9XG4gICAgZnVuY3Rpb24gY1JlZHVjZSh4KSB7IHguZGl2UmVtVG8odGhpcy5tLG51bGwseCk7IH1cbiAgICBmdW5jdGlvbiBjTXVsVG8oeCx5LHIpIHsgeC5tdWx0aXBseVRvKHkscik7IHRoaXMucmVkdWNlKHIpOyB9XG4gICAgZnVuY3Rpb24gY1NxclRvKHgscikgeyB4LnNxdWFyZVRvKHIpOyB0aGlzLnJlZHVjZShyKTsgfVxuXG4gICAgQ2xhc3NpYy5wcm90b3R5cGUuY29udmVydCA9IGNDb252ZXJ0O1xuICAgIENsYXNzaWMucHJvdG90eXBlLnJldmVydCA9IGNSZXZlcnQ7XG4gICAgQ2xhc3NpYy5wcm90b3R5cGUucmVkdWNlID0gY1JlZHVjZTtcbiAgICBDbGFzc2ljLnByb3RvdHlwZS5tdWxUbyA9IGNNdWxUbztcbiAgICBDbGFzc2ljLnByb3RvdHlwZS5zcXJUbyA9IGNTcXJUbztcblxuICAgIC8vIChwcm90ZWN0ZWQpIHJldHVybiBcIi0xL3RoaXMgJSAyXkRCXCI7IHVzZWZ1bCBmb3IgTW9udC4gcmVkdWN0aW9uXG4gICAgLy8ganVzdGlmaWNhdGlvbjpcbiAgICAvLyAgICAgICAgIHh5ID09IDEgKG1vZCBtKVxuICAgIC8vICAgICAgICAgeHkgPSAgMStrbVxuICAgIC8vICAgeHkoMi14eSkgPSAoMStrbSkoMS1rbSlcbiAgICAvLyB4W3koMi14eSldID0gMS1rXjJtXjJcbiAgICAvLyB4W3koMi14eSldID09IDEgKG1vZCBtXjIpXG4gICAgLy8gaWYgeSBpcyAxL3ggbW9kIG0sIHRoZW4geSgyLXh5KSBpcyAxL3ggbW9kIG1eMlxuICAgIC8vIHNob3VsZCByZWR1Y2UgeCBhbmQgeSgyLXh5KSBieSBtXjIgYXQgZWFjaCBzdGVwIHRvIGtlZXAgc2l6ZSBib3VuZGVkLlxuICAgIC8vIEpTIG11bHRpcGx5IFwib3ZlcmZsb3dzXCIgZGlmZmVyZW50bHkgZnJvbSBDL0MrKywgc28gY2FyZSBpcyBuZWVkZWQgaGVyZS5cbiAgICBmdW5jdGlvbiBibnBJbnZEaWdpdCgpIHtcbiAgICAgIGlmKHRoaXMudCA8IDEpIHJldHVybiAwO1xuICAgICAgdmFyIHggPSB0aGlzWzBdO1xuICAgICAgaWYoKHgmMSkgPT0gMCkgcmV0dXJuIDA7XG4gICAgICB2YXIgeSA9IHgmMzsgICAgICAgLy8geSA9PSAxL3ggbW9kIDJeMlxuICAgICAgeSA9ICh5KigyLSh4JjB4ZikqeSkpJjB4ZjsgLy8geSA9PSAxL3ggbW9kIDJeNFxuICAgICAgeSA9ICh5KigyLSh4JjB4ZmYpKnkpKSYweGZmOyAgIC8vIHkgPT0gMS94IG1vZCAyXjhcbiAgICAgIHkgPSAoeSooMi0oKCh4JjB4ZmZmZikqeSkmMHhmZmZmKSkpJjB4ZmZmZjsgICAgLy8geSA9PSAxL3ggbW9kIDJeMTZcbiAgICAgIC8vIGxhc3Qgc3RlcCAtIGNhbGN1bGF0ZSBpbnZlcnNlIG1vZCBEViBkaXJlY3RseTtcbiAgICAgIC8vIGFzc3VtZXMgMTYgPCBEQiA8PSAzMiBhbmQgYXNzdW1lcyBhYmlsaXR5IHRvIGhhbmRsZSA0OC1iaXQgaW50c1xuICAgICAgeSA9ICh5KigyLXgqeSV0aGlzLkRWKSkldGhpcy5EVjsgICAgICAgLy8geSA9PSAxL3ggbW9kIDJeZGJpdHNcbiAgICAgIC8vIHdlIHJlYWxseSB3YW50IHRoZSBuZWdhdGl2ZSBpbnZlcnNlLCBhbmQgLURWIDwgeSA8IERWXG4gICAgICByZXR1cm4gKHk+MCk/dGhpcy5EVi15Oi15O1xuICAgIH1cblxuICAgIC8vIE1vbnRnb21lcnkgcmVkdWN0aW9uXG4gICAgZnVuY3Rpb24gTW9udGdvbWVyeShtKSB7XG4gICAgICB0aGlzLm0gPSBtO1xuICAgICAgdGhpcy5tcCA9IG0uaW52RGlnaXQoKTtcbiAgICAgIHRoaXMubXBsID0gdGhpcy5tcCYweDdmZmY7XG4gICAgICB0aGlzLm1waCA9IHRoaXMubXA+PjE1O1xuICAgICAgdGhpcy51bSA9ICgxPDwobS5EQi0xNSkpLTE7XG4gICAgICB0aGlzLm10MiA9IDIqbS50O1xuICAgIH1cblxuICAgIC8vIHhSIG1vZCBtXG4gICAgZnVuY3Rpb24gbW9udENvbnZlcnQoeCkge1xuICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgIHguYWJzKCkuZGxTaGlmdFRvKHRoaXMubS50LHIpO1xuICAgICAgci5kaXZSZW1Ubyh0aGlzLm0sbnVsbCxyKTtcbiAgICAgIGlmKHgucyA8IDAgJiYgci5jb21wYXJlVG8oQmlnSW50ZWdlci5aRVJPKSA+IDApIHRoaXMubS5zdWJUbyhyLHIpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8geC9SIG1vZCBtXG4gICAgZnVuY3Rpb24gbW9udFJldmVydCh4KSB7XG4gICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgeC5jb3B5VG8ocik7XG4gICAgICB0aGlzLnJlZHVjZShyKTtcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIHggPSB4L1IgbW9kIG0gKEhBQyAxNC4zMilcbiAgICBmdW5jdGlvbiBtb250UmVkdWNlKHgpIHtcbiAgICAgIHdoaWxlKHgudCA8PSB0aGlzLm10MikgLy8gcGFkIHggc28gYW0gaGFzIGVub3VnaCByb29tIGxhdGVyXG4gICAgICAgIHhbeC50KytdID0gMDtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLm0udDsgKytpKSB7XG4gICAgICAgIC8vIGZhc3RlciB3YXkgb2YgY2FsY3VsYXRpbmcgdTAgPSB4W2ldKm1wIG1vZCBEVlxuICAgICAgICB2YXIgaiA9IHhbaV0mMHg3ZmZmO1xuICAgICAgICB2YXIgdTAgPSAoaip0aGlzLm1wbCsoKChqKnRoaXMubXBoKyh4W2ldPj4xNSkqdGhpcy5tcGwpJnRoaXMudW0pPDwxNSkpJnguRE07XG4gICAgICAgIC8vIHVzZSBhbSB0byBjb21iaW5lIHRoZSBtdWx0aXBseS1zaGlmdC1hZGQgaW50byBvbmUgY2FsbFxuICAgICAgICBqID0gaSt0aGlzLm0udDtcbiAgICAgICAgeFtqXSArPSB0aGlzLm0uYW0oMCx1MCx4LGksMCx0aGlzLm0udCk7XG4gICAgICAgIC8vIHByb3BhZ2F0ZSBjYXJyeVxuICAgICAgICB3aGlsZSh4W2pdID49IHguRFYpIHsgeFtqXSAtPSB4LkRWOyB4Wysral0rKzsgfVxuICAgICAgfVxuICAgICAgeC5jbGFtcCgpO1xuICAgICAgeC5kclNoaWZ0VG8odGhpcy5tLnQseCk7XG4gICAgICBpZih4LmNvbXBhcmVUbyh0aGlzLm0pID49IDApIHguc3ViVG8odGhpcy5tLHgpO1xuICAgIH1cblxuICAgIC8vIHIgPSBcInheMi9SIG1vZCBtXCI7IHggIT0gclxuICAgIGZ1bmN0aW9uIG1vbnRTcXJUbyh4LHIpIHsgeC5zcXVhcmVUbyhyKTsgdGhpcy5yZWR1Y2Uocik7IH1cblxuICAgIC8vIHIgPSBcInh5L1IgbW9kIG1cIjsgeCx5ICE9IHJcbiAgICBmdW5jdGlvbiBtb250TXVsVG8oeCx5LHIpIHsgeC5tdWx0aXBseVRvKHkscik7IHRoaXMucmVkdWNlKHIpOyB9XG5cbiAgICBNb250Z29tZXJ5LnByb3RvdHlwZS5jb252ZXJ0ID0gbW9udENvbnZlcnQ7XG4gICAgTW9udGdvbWVyeS5wcm90b3R5cGUucmV2ZXJ0ID0gbW9udFJldmVydDtcbiAgICBNb250Z29tZXJ5LnByb3RvdHlwZS5yZWR1Y2UgPSBtb250UmVkdWNlO1xuICAgIE1vbnRnb21lcnkucHJvdG90eXBlLm11bFRvID0gbW9udE11bFRvO1xuICAgIE1vbnRnb21lcnkucHJvdG90eXBlLnNxclRvID0gbW9udFNxclRvO1xuXG4gICAgLy8gKHByb3RlY3RlZCkgdHJ1ZSBpZmYgdGhpcyBpcyBldmVuXG4gICAgZnVuY3Rpb24gYm5wSXNFdmVuKCkgeyByZXR1cm4gKCh0aGlzLnQ+MCk/KHRoaXNbMF0mMSk6dGhpcy5zKSA9PSAwOyB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSB0aGlzXmUsIGUgPCAyXjMyLCBkb2luZyBzcXIgYW5kIG11bCB3aXRoIFwiclwiIChIQUMgMTQuNzkpXG4gICAgZnVuY3Rpb24gYm5wRXhwKGUseikge1xuICAgICAgaWYoZSA+IDB4ZmZmZmZmZmYgfHwgZSA8IDEpIHJldHVybiBCaWdJbnRlZ2VyLk9ORTtcbiAgICAgIHZhciByID0gbmJpKCksIHIyID0gbmJpKCksIGcgPSB6LmNvbnZlcnQodGhpcyksIGkgPSBuYml0cyhlKS0xO1xuICAgICAgZy5jb3B5VG8ocik7XG4gICAgICB3aGlsZSgtLWkgPj0gMCkge1xuICAgICAgICB6LnNxclRvKHIscjIpO1xuICAgICAgICBpZigoZSYoMTw8aSkpID4gMCkgei5tdWxUbyhyMixnLHIpO1xuICAgICAgICBlbHNlIHsgdmFyIHQgPSByOyByID0gcjI7IHIyID0gdDsgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHoucmV2ZXJ0KHIpO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXNeZSAlIG0sIDAgPD0gZSA8IDJeMzJcbiAgICBmdW5jdGlvbiBibk1vZFBvd0ludChlLG0pIHtcbiAgICAgIHZhciB6O1xuICAgICAgaWYoZSA8IDI1NiB8fCBtLmlzRXZlbigpKSB6ID0gbmV3IENsYXNzaWMobSk7IGVsc2UgeiA9IG5ldyBNb250Z29tZXJ5KG0pO1xuICAgICAgcmV0dXJuIHRoaXMuZXhwKGUseik7XG4gICAgfVxuXG4gICAgLy8gcHJvdGVjdGVkXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuY29weVRvID0gYm5wQ29weVRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmZyb21JbnQgPSBibnBGcm9tSW50O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmZyb21TdHJpbmcgPSBibnBGcm9tU3RyaW5nO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNsYW1wID0gYm5wQ2xhbXA7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZGxTaGlmdFRvID0gYm5wRExTaGlmdFRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRyU2hpZnRUbyA9IGJucERSU2hpZnRUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5sU2hpZnRUbyA9IGJucExTaGlmdFRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnJTaGlmdFRvID0gYm5wUlNoaWZ0VG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc3ViVG8gPSBibnBTdWJUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tdWx0aXBseVRvID0gYm5wTXVsdGlwbHlUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zcXVhcmVUbyA9IGJucFNxdWFyZVRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRpdlJlbVRvID0gYm5wRGl2UmVtVG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaW52RGlnaXQgPSBibnBJbnZEaWdpdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc0V2ZW4gPSBibnBJc0V2ZW47XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZXhwID0gYm5wRXhwO1xuXG4gICAgLy8gcHVibGljXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUudG9TdHJpbmcgPSBiblRvU3RyaW5nO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm5lZ2F0ZSA9IGJuTmVnYXRlO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFicyA9IGJuQWJzO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNvbXBhcmVUbyA9IGJuQ29tcGFyZVRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmJpdExlbmd0aCA9IGJuQml0TGVuZ3RoO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZCA9IGJuTW9kO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZFBvd0ludCA9IGJuTW9kUG93SW50O1xuXG4gICAgLy8gXCJjb25zdGFudHNcIlxuICAgIEJpZ0ludGVnZXIuWkVSTyA9IG5idigwKTtcbiAgICBCaWdJbnRlZ2VyLk9ORSA9IG5idigxKTtcblxuICAgIC8vIENvcHlyaWdodCAoYykgMjAwNS0yMDA5ICBUb20gV3VcbiAgICAvLyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgIC8vIFNlZSBcIkxJQ0VOU0VcIiBmb3IgZGV0YWlscy5cblxuICAgIC8vIEV4dGVuZGVkIEphdmFTY3JpcHQgQk4gZnVuY3Rpb25zLCByZXF1aXJlZCBmb3IgUlNBIHByaXZhdGUgb3BzLlxuXG4gICAgLy8gVmVyc2lvbiAxLjE6IG5ldyBCaWdJbnRlZ2VyKFwiMFwiLCAxMCkgcmV0dXJucyBcInByb3BlclwiIHplcm9cbiAgICAvLyBWZXJzaW9uIDEuMjogc3F1YXJlKCkgQVBJLCBpc1Byb2JhYmxlUHJpbWUgZml4XG5cbiAgICAvLyAocHVibGljKVxuICAgIGZ1bmN0aW9uIGJuQ2xvbmUoKSB7IHZhciByID0gbmJpKCk7IHRoaXMuY29weVRvKHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgcmV0dXJuIHZhbHVlIGFzIGludGVnZXJcbiAgICBmdW5jdGlvbiBibkludFZhbHVlKCkge1xuICAgICAgaWYodGhpcy5zIDwgMCkge1xuICAgICAgICBpZih0aGlzLnQgPT0gMSkgcmV0dXJuIHRoaXNbMF0tdGhpcy5EVjtcbiAgICAgICAgZWxzZSBpZih0aGlzLnQgPT0gMCkgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgZWxzZSBpZih0aGlzLnQgPT0gMSkgcmV0dXJuIHRoaXNbMF07XG4gICAgICBlbHNlIGlmKHRoaXMudCA9PSAwKSByZXR1cm4gMDtcbiAgICAgIC8vIGFzc3VtZXMgMTYgPCBEQiA8IDMyXG4gICAgICByZXR1cm4gKCh0aGlzWzFdJigoMTw8KDMyLXRoaXMuREIpKS0xKSk8PHRoaXMuREIpfHRoaXNbMF07XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgcmV0dXJuIHZhbHVlIGFzIGJ5dGVcbiAgICBmdW5jdGlvbiBibkJ5dGVWYWx1ZSgpIHsgcmV0dXJuICh0aGlzLnQ9PTApP3RoaXMuczoodGhpc1swXTw8MjQpPj4yNDsgfVxuXG4gICAgLy8gKHB1YmxpYykgcmV0dXJuIHZhbHVlIGFzIHNob3J0IChhc3N1bWVzIERCPj0xNilcbiAgICBmdW5jdGlvbiBiblNob3J0VmFsdWUoKSB7IHJldHVybiAodGhpcy50PT0wKT90aGlzLnM6KHRoaXNbMF08PDE2KT4+MTY7IH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHJldHVybiB4IHMudC4gcl54IDwgRFZcbiAgICBmdW5jdGlvbiBibnBDaHVua1NpemUocikgeyByZXR1cm4gTWF0aC5mbG9vcihNYXRoLkxOMip0aGlzLkRCL01hdGgubG9nKHIpKTsgfVxuXG4gICAgLy8gKHB1YmxpYykgMCBpZiB0aGlzID09IDAsIDEgaWYgdGhpcyA+IDBcbiAgICBmdW5jdGlvbiBiblNpZ051bSgpIHtcbiAgICAgIGlmKHRoaXMucyA8IDApIHJldHVybiAtMTtcbiAgICAgIGVsc2UgaWYodGhpcy50IDw9IDAgfHwgKHRoaXMudCA9PSAxICYmIHRoaXNbMF0gPD0gMCkpIHJldHVybiAwO1xuICAgICAgZWxzZSByZXR1cm4gMTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSBjb252ZXJ0IHRvIHJhZGl4IHN0cmluZ1xuICAgIGZ1bmN0aW9uIGJucFRvUmFkaXgoYikge1xuICAgICAgaWYoYiA9PSBudWxsKSBiID0gMTA7XG4gICAgICBpZih0aGlzLnNpZ251bSgpID09IDAgfHwgYiA8IDIgfHwgYiA+IDM2KSByZXR1cm4gXCIwXCI7XG4gICAgICB2YXIgY3MgPSB0aGlzLmNodW5rU2l6ZShiKTtcbiAgICAgIHZhciBhID0gTWF0aC5wb3coYixjcyk7XG4gICAgICB2YXIgZCA9IG5idihhKSwgeSA9IG5iaSgpLCB6ID0gbmJpKCksIHIgPSBcIlwiO1xuICAgICAgdGhpcy5kaXZSZW1UbyhkLHkseik7XG4gICAgICB3aGlsZSh5LnNpZ251bSgpID4gMCkge1xuICAgICAgICByID0gKGErei5pbnRWYWx1ZSgpKS50b1N0cmluZyhiKS5zdWJzdHIoMSkgKyByO1xuICAgICAgICB5LmRpdlJlbVRvKGQseSx6KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB6LmludFZhbHVlKCkudG9TdHJpbmcoYikgKyByO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIGNvbnZlcnQgZnJvbSByYWRpeCBzdHJpbmdcbiAgICBmdW5jdGlvbiBibnBGcm9tUmFkaXgocyxiKSB7XG4gICAgICB0aGlzLmZyb21JbnQoMCk7XG4gICAgICBpZihiID09IG51bGwpIGIgPSAxMDtcbiAgICAgIHZhciBjcyA9IHRoaXMuY2h1bmtTaXplKGIpO1xuICAgICAgdmFyIGQgPSBNYXRoLnBvdyhiLGNzKSwgbWkgPSBmYWxzZSwgaiA9IDAsIHcgPSAwO1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIHggPSBpbnRBdChzLGkpO1xuICAgICAgICBpZih4IDwgMCkge1xuICAgICAgICAgIGlmKHMuY2hhckF0KGkpID09IFwiLVwiICYmIHRoaXMuc2lnbnVtKCkgPT0gMCkgbWkgPSB0cnVlO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHcgPSBiKncreDtcbiAgICAgICAgaWYoKytqID49IGNzKSB7XG4gICAgICAgICAgdGhpcy5kTXVsdGlwbHkoZCk7XG4gICAgICAgICAgdGhpcy5kQWRkT2Zmc2V0KHcsMCk7XG4gICAgICAgICAgaiA9IDA7XG4gICAgICAgICAgdyA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKGogPiAwKSB7XG4gICAgICAgIHRoaXMuZE11bHRpcGx5KE1hdGgucG93KGIsaikpO1xuICAgICAgICB0aGlzLmRBZGRPZmZzZXQodywwKTtcbiAgICAgIH1cbiAgICAgIGlmKG1pKSBCaWdJbnRlZ2VyLlpFUk8uc3ViVG8odGhpcyx0aGlzKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSBhbHRlcm5hdGUgY29uc3RydWN0b3JcbiAgICBmdW5jdGlvbiBibnBGcm9tTnVtYmVyKGEsYixjKSB7XG4gICAgICBpZihcIm51bWJlclwiID09IHR5cGVvZiBiKSB7XG4gICAgICAgIC8vIG5ldyBCaWdJbnRlZ2VyKGludCxpbnQsUk5HKVxuICAgICAgICBpZihhIDwgMikgdGhpcy5mcm9tSW50KDEpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLmZyb21OdW1iZXIoYSxjKTtcbiAgICAgICAgICBpZighdGhpcy50ZXN0Qml0KGEtMSkpICAgIC8vIGZvcmNlIE1TQiBzZXRcbiAgICAgICAgICAgIHRoaXMuYml0d2lzZVRvKEJpZ0ludGVnZXIuT05FLnNoaWZ0TGVmdChhLTEpLG9wX29yLHRoaXMpO1xuICAgICAgICAgIGlmKHRoaXMuaXNFdmVuKCkpIHRoaXMuZEFkZE9mZnNldCgxLDApOyAvLyBmb3JjZSBvZGRcbiAgICAgICAgICB3aGlsZSghdGhpcy5pc1Byb2JhYmxlUHJpbWUoYikpIHtcbiAgICAgICAgICAgIHRoaXMuZEFkZE9mZnNldCgyLDApO1xuICAgICAgICAgICAgaWYodGhpcy5iaXRMZW5ndGgoKSA+IGEpIHRoaXMuc3ViVG8oQmlnSW50ZWdlci5PTkUuc2hpZnRMZWZ0KGEtMSksdGhpcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8gbmV3IEJpZ0ludGVnZXIoaW50LFJORylcbiAgICAgICAgdmFyIHggPSBuZXcgQXJyYXkoKSwgdCA9IGEmNztcbiAgICAgICAgeC5sZW5ndGggPSAoYT4+MykrMTtcbiAgICAgICAgYi5uZXh0Qnl0ZXMoeCk7XG4gICAgICAgIGlmKHQgPiAwKSB4WzBdICY9ICgoMTw8dCktMSk7IGVsc2UgeFswXSA9IDA7XG4gICAgICAgIHRoaXMuZnJvbVN0cmluZyh4LDI1Nik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgY29udmVydCB0byBiaWdlbmRpYW4gYnl0ZSBhcnJheVxuICAgIGZ1bmN0aW9uIGJuVG9CeXRlQXJyYXkoKSB7XG4gICAgICB2YXIgaSA9IHRoaXMudCwgciA9IG5ldyBBcnJheSgpO1xuICAgICAgclswXSA9IHRoaXMucztcbiAgICAgIHZhciBwID0gdGhpcy5EQi0oaSp0aGlzLkRCKSU4LCBkLCBrID0gMDtcbiAgICAgIGlmKGktLSA+IDApIHtcbiAgICAgICAgaWYocCA8IHRoaXMuREIgJiYgKGQgPSB0aGlzW2ldPj5wKSAhPSAodGhpcy5zJnRoaXMuRE0pPj5wKVxuICAgICAgICAgIHJbaysrXSA9IGR8KHRoaXMuczw8KHRoaXMuREItcCkpO1xuICAgICAgICB3aGlsZShpID49IDApIHtcbiAgICAgICAgICBpZihwIDwgOCkge1xuICAgICAgICAgICAgZCA9ICh0aGlzW2ldJigoMTw8cCktMSkpPDwoOC1wKTtcbiAgICAgICAgICAgIGQgfD0gdGhpc1stLWldPj4ocCs9dGhpcy5EQi04KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkID0gKHRoaXNbaV0+PihwLT04KSkmMHhmZjtcbiAgICAgICAgICAgIGlmKHAgPD0gMCkgeyBwICs9IHRoaXMuREI7IC0taTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZigoZCYweDgwKSAhPSAwKSBkIHw9IC0yNTY7XG4gICAgICAgICAgaWYoayA9PSAwICYmICh0aGlzLnMmMHg4MCkgIT0gKGQmMHg4MCkpICsraztcbiAgICAgICAgICBpZihrID4gMCB8fCBkICE9IHRoaXMucykgcltrKytdID0gZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYm5FcXVhbHMoYSkgeyByZXR1cm4odGhpcy5jb21wYXJlVG8oYSk9PTApOyB9XG4gICAgZnVuY3Rpb24gYm5NaW4oYSkgeyByZXR1cm4odGhpcy5jb21wYXJlVG8oYSk8MCk/dGhpczphOyB9XG4gICAgZnVuY3Rpb24gYm5NYXgoYSkgeyByZXR1cm4odGhpcy5jb21wYXJlVG8oYSk+MCk/dGhpczphOyB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyBvcCBhIChiaXR3aXNlKVxuICAgIGZ1bmN0aW9uIGJucEJpdHdpc2VUbyhhLG9wLHIpIHtcbiAgICAgIHZhciBpLCBmLCBtID0gTWF0aC5taW4oYS50LHRoaXMudCk7XG4gICAgICBmb3IoaSA9IDA7IGkgPCBtOyArK2kpIHJbaV0gPSBvcCh0aGlzW2ldLGFbaV0pO1xuICAgICAgaWYoYS50IDwgdGhpcy50KSB7XG4gICAgICAgIGYgPSBhLnMmdGhpcy5ETTtcbiAgICAgICAgZm9yKGkgPSBtOyBpIDwgdGhpcy50OyArK2kpIHJbaV0gPSBvcCh0aGlzW2ldLGYpO1xuICAgICAgICByLnQgPSB0aGlzLnQ7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZiA9IHRoaXMucyZ0aGlzLkRNO1xuICAgICAgICBmb3IoaSA9IG07IGkgPCBhLnQ7ICsraSkgcltpXSA9IG9wKGYsYVtpXSk7XG4gICAgICAgIHIudCA9IGEudDtcbiAgICAgIH1cbiAgICAgIHIucyA9IG9wKHRoaXMucyxhLnMpO1xuICAgICAgci5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgJiBhXG4gICAgZnVuY3Rpb24gb3BfYW5kKHgseSkgeyByZXR1cm4geCZ5OyB9XG4gICAgZnVuY3Rpb24gYm5BbmQoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLmJpdHdpc2VUbyhhLG9wX2FuZCxyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgfCBhXG4gICAgZnVuY3Rpb24gb3Bfb3IoeCx5KSB7IHJldHVybiB4fHk7IH1cbiAgICBmdW5jdGlvbiBibk9yKGEpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5iaXR3aXNlVG8oYSxvcF9vcixyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgXiBhXG4gICAgZnVuY3Rpb24gb3BfeG9yKHgseSkgeyByZXR1cm4geF55OyB9XG4gICAgZnVuY3Rpb24gYm5Yb3IoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLmJpdHdpc2VUbyhhLG9wX3hvcixyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgJiB+YVxuICAgIGZ1bmN0aW9uIG9wX2FuZG5vdCh4LHkpIHsgcmV0dXJuIHgmfnk7IH1cbiAgICBmdW5jdGlvbiBibkFuZE5vdChhKSB7IHZhciByID0gbmJpKCk7IHRoaXMuYml0d2lzZVRvKGEsb3BfYW5kbm90LHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgfnRoaXNcbiAgICBmdW5jdGlvbiBibk5vdCgpIHtcbiAgICAgIHZhciByID0gbmJpKCk7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy50OyArK2kpIHJbaV0gPSB0aGlzLkRNJn50aGlzW2ldO1xuICAgICAgci50ID0gdGhpcy50O1xuICAgICAgci5zID0gfnRoaXMucztcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgPDwgblxuICAgIGZ1bmN0aW9uIGJuU2hpZnRMZWZ0KG4pIHtcbiAgICAgIHZhciByID0gbmJpKCk7XG4gICAgICBpZihuIDwgMCkgdGhpcy5yU2hpZnRUbygtbixyKTsgZWxzZSB0aGlzLmxTaGlmdFRvKG4scik7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzID4+IG5cbiAgICBmdW5jdGlvbiBiblNoaWZ0UmlnaHQobikge1xuICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgIGlmKG4gPCAwKSB0aGlzLmxTaGlmdFRvKC1uLHIpOyBlbHNlIHRoaXMuclNoaWZ0VG8obixyKTtcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIHJldHVybiBpbmRleCBvZiBsb3dlc3QgMS1iaXQgaW4geCwgeCA8IDJeMzFcbiAgICBmdW5jdGlvbiBsYml0KHgpIHtcbiAgICAgIGlmKHggPT0gMCkgcmV0dXJuIC0xO1xuICAgICAgdmFyIHIgPSAwO1xuICAgICAgaWYoKHgmMHhmZmZmKSA9PSAwKSB7IHggPj49IDE2OyByICs9IDE2OyB9XG4gICAgICBpZigoeCYweGZmKSA9PSAwKSB7IHggPj49IDg7IHIgKz0gODsgfVxuICAgICAgaWYoKHgmMHhmKSA9PSAwKSB7IHggPj49IDQ7IHIgKz0gNDsgfVxuICAgICAgaWYoKHgmMykgPT0gMCkgeyB4ID4+PSAyOyByICs9IDI7IH1cbiAgICAgIGlmKCh4JjEpID09IDApICsrcjtcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHJldHVybnMgaW5kZXggb2YgbG93ZXN0IDEtYml0IChvciAtMSBpZiBub25lKVxuICAgIGZ1bmN0aW9uIGJuR2V0TG93ZXN0U2V0Qml0KCkge1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMudDsgKytpKVxuICAgICAgICBpZih0aGlzW2ldICE9IDApIHJldHVybiBpKnRoaXMuREIrbGJpdCh0aGlzW2ldKTtcbiAgICAgIGlmKHRoaXMucyA8IDApIHJldHVybiB0aGlzLnQqdGhpcy5EQjtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gbnVtYmVyIG9mIDEgYml0cyBpbiB4XG4gICAgZnVuY3Rpb24gY2JpdCh4KSB7XG4gICAgICB2YXIgciA9IDA7XG4gICAgICB3aGlsZSh4ICE9IDApIHsgeCAmPSB4LTE7ICsrcjsgfVxuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgcmV0dXJuIG51bWJlciBvZiBzZXQgYml0c1xuICAgIGZ1bmN0aW9uIGJuQml0Q291bnQoKSB7XG4gICAgICB2YXIgciA9IDAsIHggPSB0aGlzLnMmdGhpcy5ETTtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnQ7ICsraSkgciArPSBjYml0KHRoaXNbaV1eeCk7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSB0cnVlIGlmZiBudGggYml0IGlzIHNldFxuICAgIGZ1bmN0aW9uIGJuVGVzdEJpdChuKSB7XG4gICAgICB2YXIgaiA9IE1hdGguZmxvb3Iobi90aGlzLkRCKTtcbiAgICAgIGlmKGogPj0gdGhpcy50KSByZXR1cm4odGhpcy5zIT0wKTtcbiAgICAgIHJldHVybigodGhpc1tqXSYoMTw8KG4ldGhpcy5EQikpKSE9MCk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgdGhpcyBvcCAoMTw8bilcbiAgICBmdW5jdGlvbiBibnBDaGFuZ2VCaXQobixvcCkge1xuICAgICAgdmFyIHIgPSBCaWdJbnRlZ2VyLk9ORS5zaGlmdExlZnQobik7XG4gICAgICB0aGlzLmJpdHdpc2VUbyhyLG9wLHIpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyB8ICgxPDxuKVxuICAgIGZ1bmN0aW9uIGJuU2V0Qml0KG4pIHsgcmV0dXJuIHRoaXMuY2hhbmdlQml0KG4sb3Bfb3IpOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzICYgfigxPDxuKVxuICAgIGZ1bmN0aW9uIGJuQ2xlYXJCaXQobikgeyByZXR1cm4gdGhpcy5jaGFuZ2VCaXQobixvcF9hbmRub3QpOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzIF4gKDE8PG4pXG4gICAgZnVuY3Rpb24gYm5GbGlwQml0KG4pIHsgcmV0dXJuIHRoaXMuY2hhbmdlQml0KG4sb3BfeG9yKTsgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXMgKyBhXG4gICAgZnVuY3Rpb24gYm5wQWRkVG8oYSxyKSB7XG4gICAgICB2YXIgaSA9IDAsIGMgPSAwLCBtID0gTWF0aC5taW4oYS50LHRoaXMudCk7XG4gICAgICB3aGlsZShpIDwgbSkge1xuICAgICAgICBjICs9IHRoaXNbaV0rYVtpXTtcbiAgICAgICAgcltpKytdID0gYyZ0aGlzLkRNO1xuICAgICAgICBjID4+PSB0aGlzLkRCO1xuICAgICAgfVxuICAgICAgaWYoYS50IDwgdGhpcy50KSB7XG4gICAgICAgIGMgKz0gYS5zO1xuICAgICAgICB3aGlsZShpIDwgdGhpcy50KSB7XG4gICAgICAgICAgYyArPSB0aGlzW2ldO1xuICAgICAgICAgIHJbaSsrXSA9IGMmdGhpcy5ETTtcbiAgICAgICAgICBjID4+PSB0aGlzLkRCO1xuICAgICAgICB9XG4gICAgICAgIGMgKz0gdGhpcy5zO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGMgKz0gdGhpcy5zO1xuICAgICAgICB3aGlsZShpIDwgYS50KSB7XG4gICAgICAgICAgYyArPSBhW2ldO1xuICAgICAgICAgIHJbaSsrXSA9IGMmdGhpcy5ETTtcbiAgICAgICAgICBjID4+PSB0aGlzLkRCO1xuICAgICAgICB9XG4gICAgICAgIGMgKz0gYS5zO1xuICAgICAgfVxuICAgICAgci5zID0gKGM8MCk/LTE6MDtcbiAgICAgIGlmKGMgPiAwKSByW2krK10gPSBjO1xuICAgICAgZWxzZSBpZihjIDwgLTEpIHJbaSsrXSA9IHRoaXMuRFYrYztcbiAgICAgIHIudCA9IGk7XG4gICAgICByLmNsYW1wKCk7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyArIGFcbiAgICBmdW5jdGlvbiBibkFkZChhKSB7IHZhciByID0gbmJpKCk7IHRoaXMuYWRkVG8oYSxyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgLSBhXG4gICAgZnVuY3Rpb24gYm5TdWJ0cmFjdChhKSB7IHZhciByID0gbmJpKCk7IHRoaXMuc3ViVG8oYSxyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgKiBhXG4gICAgZnVuY3Rpb24gYm5NdWx0aXBseShhKSB7IHZhciByID0gbmJpKCk7IHRoaXMubXVsdGlwbHlUbyhhLHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpc14yXG4gICAgZnVuY3Rpb24gYm5TcXVhcmUoKSB7IHZhciByID0gbmJpKCk7IHRoaXMuc3F1YXJlVG8ocik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzIC8gYVxuICAgIGZ1bmN0aW9uIGJuRGl2aWRlKGEpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5kaXZSZW1UbyhhLHIsbnVsbCk7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzICUgYVxuICAgIGZ1bmN0aW9uIGJuUmVtYWluZGVyKGEpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5kaXZSZW1UbyhhLG51bGwscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSBbdGhpcy9hLHRoaXMlYV1cbiAgICBmdW5jdGlvbiBibkRpdmlkZUFuZFJlbWFpbmRlcihhKSB7XG4gICAgICB2YXIgcSA9IG5iaSgpLCByID0gbmJpKCk7XG4gICAgICB0aGlzLmRpdlJlbVRvKGEscSxyKTtcbiAgICAgIHJldHVybiBuZXcgQXJyYXkocSxyKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSB0aGlzICo9IG4sIHRoaXMgPj0gMCwgMSA8IG4gPCBEVlxuICAgIGZ1bmN0aW9uIGJucERNdWx0aXBseShuKSB7XG4gICAgICB0aGlzW3RoaXMudF0gPSB0aGlzLmFtKDAsbi0xLHRoaXMsMCwwLHRoaXMudCk7XG4gICAgICArK3RoaXMudDtcbiAgICAgIHRoaXMuY2xhbXAoKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSB0aGlzICs9IG4gPDwgdyB3b3JkcywgdGhpcyA+PSAwXG4gICAgZnVuY3Rpb24gYm5wREFkZE9mZnNldChuLHcpIHtcbiAgICAgIGlmKG4gPT0gMCkgcmV0dXJuO1xuICAgICAgd2hpbGUodGhpcy50IDw9IHcpIHRoaXNbdGhpcy50KytdID0gMDtcbiAgICAgIHRoaXNbd10gKz0gbjtcbiAgICAgIHdoaWxlKHRoaXNbd10gPj0gdGhpcy5EVikge1xuICAgICAgICB0aGlzW3ddIC09IHRoaXMuRFY7XG4gICAgICAgIGlmKCsrdyA+PSB0aGlzLnQpIHRoaXNbdGhpcy50KytdID0gMDtcbiAgICAgICAgKyt0aGlzW3ddO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEEgXCJudWxsXCIgcmVkdWNlclxuICAgIGZ1bmN0aW9uIE51bGxFeHAoKSB7fVxuICAgIGZ1bmN0aW9uIG5Ob3AoeCkgeyByZXR1cm4geDsgfVxuICAgIGZ1bmN0aW9uIG5NdWxUbyh4LHkscikgeyB4Lm11bHRpcGx5VG8oeSxyKTsgfVxuICAgIGZ1bmN0aW9uIG5TcXJUbyh4LHIpIHsgeC5zcXVhcmVUbyhyKTsgfVxuXG4gICAgTnVsbEV4cC5wcm90b3R5cGUuY29udmVydCA9IG5Ob3A7XG4gICAgTnVsbEV4cC5wcm90b3R5cGUucmV2ZXJ0ID0gbk5vcDtcbiAgICBOdWxsRXhwLnByb3RvdHlwZS5tdWxUbyA9IG5NdWxUbztcbiAgICBOdWxsRXhwLnByb3RvdHlwZS5zcXJUbyA9IG5TcXJUbztcblxuICAgIC8vIChwdWJsaWMpIHRoaXNeZVxuICAgIGZ1bmN0aW9uIGJuUG93KGUpIHsgcmV0dXJuIHRoaXMuZXhwKGUsbmV3IE51bGxFeHAoKSk7IH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSBsb3dlciBuIHdvcmRzIG9mIFwidGhpcyAqIGFcIiwgYS50IDw9IG5cbiAgICAvLyBcInRoaXNcIiBzaG91bGQgYmUgdGhlIGxhcmdlciBvbmUgaWYgYXBwcm9wcmlhdGUuXG4gICAgZnVuY3Rpb24gYm5wTXVsdGlwbHlMb3dlclRvKGEsbixyKSB7XG4gICAgICB2YXIgaSA9IE1hdGgubWluKHRoaXMudCthLnQsbik7XG4gICAgICByLnMgPSAwOyAvLyBhc3N1bWVzIGEsdGhpcyA+PSAwXG4gICAgICByLnQgPSBpO1xuICAgICAgd2hpbGUoaSA+IDApIHJbLS1pXSA9IDA7XG4gICAgICB2YXIgajtcbiAgICAgIGZvcihqID0gci50LXRoaXMudDsgaSA8IGo7ICsraSkgcltpK3RoaXMudF0gPSB0aGlzLmFtKDAsYVtpXSxyLGksMCx0aGlzLnQpO1xuICAgICAgZm9yKGogPSBNYXRoLm1pbihhLnQsbik7IGkgPCBqOyArK2kpIHRoaXMuYW0oMCxhW2ldLHIsaSwwLG4taSk7XG4gICAgICByLmNsYW1wKCk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IFwidGhpcyAqIGFcIiB3aXRob3V0IGxvd2VyIG4gd29yZHMsIG4gPiAwXG4gICAgLy8gXCJ0aGlzXCIgc2hvdWxkIGJlIHRoZSBsYXJnZXIgb25lIGlmIGFwcHJvcHJpYXRlLlxuICAgIGZ1bmN0aW9uIGJucE11bHRpcGx5VXBwZXJUbyhhLG4scikge1xuICAgICAgLS1uO1xuICAgICAgdmFyIGkgPSByLnQgPSB0aGlzLnQrYS50LW47XG4gICAgICByLnMgPSAwOyAvLyBhc3N1bWVzIGEsdGhpcyA+PSAwXG4gICAgICB3aGlsZSgtLWkgPj0gMCkgcltpXSA9IDA7XG4gICAgICBmb3IoaSA9IE1hdGgubWF4KG4tdGhpcy50LDApOyBpIDwgYS50OyArK2kpXG4gICAgICAgIHJbdGhpcy50K2ktbl0gPSB0aGlzLmFtKG4taSxhW2ldLHIsMCwwLHRoaXMudCtpLW4pO1xuICAgICAgci5jbGFtcCgpO1xuICAgICAgci5kclNoaWZ0VG8oMSxyKTtcbiAgICB9XG5cbiAgICAvLyBCYXJyZXR0IG1vZHVsYXIgcmVkdWN0aW9uXG4gICAgZnVuY3Rpb24gQmFycmV0dChtKSB7XG4gICAgICAvLyBzZXR1cCBCYXJyZXR0XG4gICAgICB0aGlzLnIyID0gbmJpKCk7XG4gICAgICB0aGlzLnEzID0gbmJpKCk7XG4gICAgICBCaWdJbnRlZ2VyLk9ORS5kbFNoaWZ0VG8oMiptLnQsdGhpcy5yMik7XG4gICAgICB0aGlzLm11ID0gdGhpcy5yMi5kaXZpZGUobSk7XG4gICAgICB0aGlzLm0gPSBtO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJhcnJldHRDb252ZXJ0KHgpIHtcbiAgICAgIGlmKHgucyA8IDAgfHwgeC50ID4gMip0aGlzLm0udCkgcmV0dXJuIHgubW9kKHRoaXMubSk7XG4gICAgICBlbHNlIGlmKHguY29tcGFyZVRvKHRoaXMubSkgPCAwKSByZXR1cm4geDtcbiAgICAgIGVsc2UgeyB2YXIgciA9IG5iaSgpOyB4LmNvcHlUbyhyKTsgdGhpcy5yZWR1Y2Uocik7IHJldHVybiByOyB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmFycmV0dFJldmVydCh4KSB7IHJldHVybiB4OyB9XG5cbiAgICAvLyB4ID0geCBtb2QgbSAoSEFDIDE0LjQyKVxuICAgIGZ1bmN0aW9uIGJhcnJldHRSZWR1Y2UoeCkge1xuICAgICAgeC5kclNoaWZ0VG8odGhpcy5tLnQtMSx0aGlzLnIyKTtcbiAgICAgIGlmKHgudCA+IHRoaXMubS50KzEpIHsgeC50ID0gdGhpcy5tLnQrMTsgeC5jbGFtcCgpOyB9XG4gICAgICB0aGlzLm11Lm11bHRpcGx5VXBwZXJUbyh0aGlzLnIyLHRoaXMubS50KzEsdGhpcy5xMyk7XG4gICAgICB0aGlzLm0ubXVsdGlwbHlMb3dlclRvKHRoaXMucTMsdGhpcy5tLnQrMSx0aGlzLnIyKTtcbiAgICAgIHdoaWxlKHguY29tcGFyZVRvKHRoaXMucjIpIDwgMCkgeC5kQWRkT2Zmc2V0KDEsdGhpcy5tLnQrMSk7XG4gICAgICB4LnN1YlRvKHRoaXMucjIseCk7XG4gICAgICB3aGlsZSh4LmNvbXBhcmVUbyh0aGlzLm0pID49IDApIHguc3ViVG8odGhpcy5tLHgpO1xuICAgIH1cblxuICAgIC8vIHIgPSB4XjIgbW9kIG07IHggIT0gclxuICAgIGZ1bmN0aW9uIGJhcnJldHRTcXJUbyh4LHIpIHsgeC5zcXVhcmVUbyhyKTsgdGhpcy5yZWR1Y2Uocik7IH1cblxuICAgIC8vIHIgPSB4KnkgbW9kIG07IHgseSAhPSByXG4gICAgZnVuY3Rpb24gYmFycmV0dE11bFRvKHgseSxyKSB7IHgubXVsdGlwbHlUbyh5LHIpOyB0aGlzLnJlZHVjZShyKTsgfVxuXG4gICAgQmFycmV0dC5wcm90b3R5cGUuY29udmVydCA9IGJhcnJldHRDb252ZXJ0O1xuICAgIEJhcnJldHQucHJvdG90eXBlLnJldmVydCA9IGJhcnJldHRSZXZlcnQ7XG4gICAgQmFycmV0dC5wcm90b3R5cGUucmVkdWNlID0gYmFycmV0dFJlZHVjZTtcbiAgICBCYXJyZXR0LnByb3RvdHlwZS5tdWxUbyA9IGJhcnJldHRNdWxUbztcbiAgICBCYXJyZXR0LnByb3RvdHlwZS5zcXJUbyA9IGJhcnJldHRTcXJUbztcblxuICAgIC8vIChwdWJsaWMpIHRoaXNeZSAlIG0gKEhBQyAxNC44NSlcbiAgICBmdW5jdGlvbiBibk1vZFBvdyhlLG0pIHtcbiAgICAgIHZhciBpID0gZS5iaXRMZW5ndGgoKSwgaywgciA9IG5idigxKSwgejtcbiAgICAgIGlmKGkgPD0gMCkgcmV0dXJuIHI7XG4gICAgICBlbHNlIGlmKGkgPCAxOCkgayA9IDE7XG4gICAgICBlbHNlIGlmKGkgPCA0OCkgayA9IDM7XG4gICAgICBlbHNlIGlmKGkgPCAxNDQpIGsgPSA0O1xuICAgICAgZWxzZSBpZihpIDwgNzY4KSBrID0gNTtcbiAgICAgIGVsc2UgayA9IDY7XG4gICAgICBpZihpIDwgOClcbiAgICAgICAgeiA9IG5ldyBDbGFzc2ljKG0pO1xuICAgICAgZWxzZSBpZihtLmlzRXZlbigpKVxuICAgICAgICB6ID0gbmV3IEJhcnJldHQobSk7XG4gICAgICBlbHNlXG4gICAgICAgIHogPSBuZXcgTW9udGdvbWVyeShtKTtcblxuICAgICAgLy8gcHJlY29tcHV0YXRpb25cbiAgICAgIHZhciBnID0gbmV3IEFycmF5KCksIG4gPSAzLCBrMSA9IGstMSwga20gPSAoMTw8ayktMTtcbiAgICAgIGdbMV0gPSB6LmNvbnZlcnQodGhpcyk7XG4gICAgICBpZihrID4gMSkge1xuICAgICAgICB2YXIgZzIgPSBuYmkoKTtcbiAgICAgICAgei5zcXJUbyhnWzFdLGcyKTtcbiAgICAgICAgd2hpbGUobiA8PSBrbSkge1xuICAgICAgICAgIGdbbl0gPSBuYmkoKTtcbiAgICAgICAgICB6Lm11bFRvKGcyLGdbbi0yXSxnW25dKTtcbiAgICAgICAgICBuICs9IDI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGogPSBlLnQtMSwgdywgaXMxID0gdHJ1ZSwgcjIgPSBuYmkoKSwgdDtcbiAgICAgIGkgPSBuYml0cyhlW2pdKS0xO1xuICAgICAgd2hpbGUoaiA+PSAwKSB7XG4gICAgICAgIGlmKGkgPj0gazEpIHcgPSAoZVtqXT4+KGktazEpKSZrbTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdyA9IChlW2pdJigoMTw8KGkrMSkpLTEpKTw8KGsxLWkpO1xuICAgICAgICAgIGlmKGogPiAwKSB3IHw9IGVbai0xXT4+KHRoaXMuREIraS1rMSk7XG4gICAgICAgIH1cblxuICAgICAgICBuID0gaztcbiAgICAgICAgd2hpbGUoKHcmMSkgPT0gMCkgeyB3ID4+PSAxOyAtLW47IH1cbiAgICAgICAgaWYoKGkgLT0gbikgPCAwKSB7IGkgKz0gdGhpcy5EQjsgLS1qOyB9XG4gICAgICAgIGlmKGlzMSkgeyAgICAvLyByZXQgPT0gMSwgZG9uJ3QgYm90aGVyIHNxdWFyaW5nIG9yIG11bHRpcGx5aW5nIGl0XG4gICAgICAgICAgZ1t3XS5jb3B5VG8ocik7XG4gICAgICAgICAgaXMxID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgd2hpbGUobiA+IDEpIHsgei5zcXJUbyhyLHIyKTsgei5zcXJUbyhyMixyKTsgbiAtPSAyOyB9XG4gICAgICAgICAgaWYobiA+IDApIHouc3FyVG8ocixyMik7IGVsc2UgeyB0ID0gcjsgciA9IHIyOyByMiA9IHQ7IH1cbiAgICAgICAgICB6Lm11bFRvKHIyLGdbd10scik7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZShqID49IDAgJiYgKGVbal0mKDE8PGkpKSA9PSAwKSB7XG4gICAgICAgICAgei5zcXJUbyhyLHIyKTsgdCA9IHI7IHIgPSByMjsgcjIgPSB0O1xuICAgICAgICAgIGlmKC0taSA8IDApIHsgaSA9IHRoaXMuREItMTsgLS1qOyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB6LnJldmVydChyKTtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSBnY2QodGhpcyxhKSAoSEFDIDE0LjU0KVxuICAgIGZ1bmN0aW9uIGJuR0NEKGEpIHtcbiAgICAgIHZhciB4ID0gKHRoaXMuczwwKT90aGlzLm5lZ2F0ZSgpOnRoaXMuY2xvbmUoKTtcbiAgICAgIHZhciB5ID0gKGEuczwwKT9hLm5lZ2F0ZSgpOmEuY2xvbmUoKTtcbiAgICAgIGlmKHguY29tcGFyZVRvKHkpIDwgMCkgeyB2YXIgdCA9IHg7IHggPSB5OyB5ID0gdDsgfVxuICAgICAgdmFyIGkgPSB4LmdldExvd2VzdFNldEJpdCgpLCBnID0geS5nZXRMb3dlc3RTZXRCaXQoKTtcbiAgICAgIGlmKGcgPCAwKSByZXR1cm4geDtcbiAgICAgIGlmKGkgPCBnKSBnID0gaTtcbiAgICAgIGlmKGcgPiAwKSB7XG4gICAgICAgIHguclNoaWZ0VG8oZyx4KTtcbiAgICAgICAgeS5yU2hpZnRUbyhnLHkpO1xuICAgICAgfVxuICAgICAgd2hpbGUoeC5zaWdudW0oKSA+IDApIHtcbiAgICAgICAgaWYoKGkgPSB4LmdldExvd2VzdFNldEJpdCgpKSA+IDApIHguclNoaWZ0VG8oaSx4KTtcbiAgICAgICAgaWYoKGkgPSB5LmdldExvd2VzdFNldEJpdCgpKSA+IDApIHkuclNoaWZ0VG8oaSx5KTtcbiAgICAgICAgaWYoeC5jb21wYXJlVG8oeSkgPj0gMCkge1xuICAgICAgICAgIHguc3ViVG8oeSx4KTtcbiAgICAgICAgICB4LnJTaGlmdFRvKDEseCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgeS5zdWJUbyh4LHkpO1xuICAgICAgICAgIHkuclNoaWZ0VG8oMSx5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYoZyA+IDApIHkubFNoaWZ0VG8oZyx5KTtcbiAgICAgIHJldHVybiB5O1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHRoaXMgJSBuLCBuIDwgMl4yNlxuICAgIGZ1bmN0aW9uIGJucE1vZEludChuKSB7XG4gICAgICBpZihuIDw9IDApIHJldHVybiAwO1xuICAgICAgdmFyIGQgPSB0aGlzLkRWJW4sIHIgPSAodGhpcy5zPDApP24tMTowO1xuICAgICAgaWYodGhpcy50ID4gMClcbiAgICAgICAgaWYoZCA9PSAwKSByID0gdGhpc1swXSVuO1xuICAgICAgICBlbHNlIGZvcih2YXIgaSA9IHRoaXMudC0xOyBpID49IDA7IC0taSkgciA9IChkKnIrdGhpc1tpXSklbjtcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIDEvdGhpcyAlIG0gKEhBQyAxNC42MSlcbiAgICBmdW5jdGlvbiBibk1vZEludmVyc2UobSkge1xuICAgICAgdmFyIGFjID0gbS5pc0V2ZW4oKTtcbiAgICAgIGlmKCh0aGlzLmlzRXZlbigpICYmIGFjKSB8fCBtLnNpZ251bSgpID09IDApIHJldHVybiBCaWdJbnRlZ2VyLlpFUk87XG4gICAgICB2YXIgdSA9IG0uY2xvbmUoKSwgdiA9IHRoaXMuY2xvbmUoKTtcbiAgICAgIHZhciBhID0gbmJ2KDEpLCBiID0gbmJ2KDApLCBjID0gbmJ2KDApLCBkID0gbmJ2KDEpO1xuICAgICAgd2hpbGUodS5zaWdudW0oKSAhPSAwKSB7XG4gICAgICAgIHdoaWxlKHUuaXNFdmVuKCkpIHtcbiAgICAgICAgICB1LnJTaGlmdFRvKDEsdSk7XG4gICAgICAgICAgaWYoYWMpIHtcbiAgICAgICAgICAgIGlmKCFhLmlzRXZlbigpIHx8ICFiLmlzRXZlbigpKSB7IGEuYWRkVG8odGhpcyxhKTsgYi5zdWJUbyhtLGIpOyB9XG4gICAgICAgICAgICBhLnJTaGlmdFRvKDEsYSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYoIWIuaXNFdmVuKCkpIGIuc3ViVG8obSxiKTtcbiAgICAgICAgICBiLnJTaGlmdFRvKDEsYik7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUodi5pc0V2ZW4oKSkge1xuICAgICAgICAgIHYuclNoaWZ0VG8oMSx2KTtcbiAgICAgICAgICBpZihhYykge1xuICAgICAgICAgICAgaWYoIWMuaXNFdmVuKCkgfHwgIWQuaXNFdmVuKCkpIHsgYy5hZGRUbyh0aGlzLGMpOyBkLnN1YlRvKG0sZCk7IH1cbiAgICAgICAgICAgIGMuclNoaWZ0VG8oMSxjKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZighZC5pc0V2ZW4oKSkgZC5zdWJUbyhtLGQpO1xuICAgICAgICAgIGQuclNoaWZ0VG8oMSxkKTtcbiAgICAgICAgfVxuICAgICAgICBpZih1LmNvbXBhcmVUbyh2KSA+PSAwKSB7XG4gICAgICAgICAgdS5zdWJUbyh2LHUpO1xuICAgICAgICAgIGlmKGFjKSBhLnN1YlRvKGMsYSk7XG4gICAgICAgICAgYi5zdWJUbyhkLGIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHYuc3ViVG8odSx2KTtcbiAgICAgICAgICBpZihhYykgYy5zdWJUbyhhLGMpO1xuICAgICAgICAgIGQuc3ViVG8oYixkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYodi5jb21wYXJlVG8oQmlnSW50ZWdlci5PTkUpICE9IDApIHJldHVybiBCaWdJbnRlZ2VyLlpFUk87XG4gICAgICBpZihkLmNvbXBhcmVUbyhtKSA+PSAwKSByZXR1cm4gZC5zdWJ0cmFjdChtKTtcbiAgICAgIGlmKGQuc2lnbnVtKCkgPCAwKSBkLmFkZFRvKG0sZCk7IGVsc2UgcmV0dXJuIGQ7XG4gICAgICBpZihkLnNpZ251bSgpIDwgMCkgcmV0dXJuIGQuYWRkKG0pOyBlbHNlIHJldHVybiBkO1xuICAgIH1cblxuICAgIHZhciBsb3dwcmltZXMgPSBbMiwzLDUsNywxMSwxMywxNywxOSwyMywyOSwzMSwzNyw0MSw0Myw0Nyw1Myw1OSw2MSw2Nyw3MSw3Myw3OSw4Myw4OSw5NywxMDEsMTAzLDEwNywxMDksMTEzLDEyNywxMzEsMTM3LDEzOSwxNDksMTUxLDE1NywxNjMsMTY3LDE3MywxNzksMTgxLDE5MSwxOTMsMTk3LDE5OSwyMTEsMjIzLDIyNywyMjksMjMzLDIzOSwyNDEsMjUxLDI1NywyNjMsMjY5LDI3MSwyNzcsMjgxLDI4MywyOTMsMzA3LDMxMSwzMTMsMzE3LDMzMSwzMzcsMzQ3LDM0OSwzNTMsMzU5LDM2NywzNzMsMzc5LDM4MywzODksMzk3LDQwMSw0MDksNDE5LDQyMSw0MzEsNDMzLDQzOSw0NDMsNDQ5LDQ1Nyw0NjEsNDYzLDQ2Nyw0NzksNDg3LDQ5MSw0OTksNTAzLDUwOSw1MjEsNTIzLDU0MSw1NDcsNTU3LDU2Myw1NjksNTcxLDU3Nyw1ODcsNTkzLDU5OSw2MDEsNjA3LDYxMyw2MTcsNjE5LDYzMSw2NDEsNjQzLDY0Nyw2NTMsNjU5LDY2MSw2NzMsNjc3LDY4Myw2OTEsNzAxLDcwOSw3MTksNzI3LDczMyw3MzksNzQzLDc1MSw3NTcsNzYxLDc2OSw3NzMsNzg3LDc5Nyw4MDksODExLDgyMSw4MjMsODI3LDgyOSw4MzksODUzLDg1Nyw4NTksODYzLDg3Nyw4ODEsODgzLDg4Nyw5MDcsOTExLDkxOSw5MjksOTM3LDk0MSw5NDcsOTUzLDk2Nyw5NzEsOTc3LDk4Myw5OTEsOTk3XTtcbiAgICB2YXIgbHBsaW0gPSAoMTw8MjYpL2xvd3ByaW1lc1tsb3dwcmltZXMubGVuZ3RoLTFdO1xuXG4gICAgLy8gKHB1YmxpYykgdGVzdCBwcmltYWxpdHkgd2l0aCBjZXJ0YWludHkgPj0gMS0uNV50XG4gICAgZnVuY3Rpb24gYm5Jc1Byb2JhYmxlUHJpbWUodCkge1xuICAgICAgdmFyIGksIHggPSB0aGlzLmFicygpO1xuICAgICAgaWYoeC50ID09IDEgJiYgeFswXSA8PSBsb3dwcmltZXNbbG93cHJpbWVzLmxlbmd0aC0xXSkge1xuICAgICAgICBmb3IoaSA9IDA7IGkgPCBsb3dwcmltZXMubGVuZ3RoOyArK2kpXG4gICAgICAgICAgaWYoeFswXSA9PSBsb3dwcmltZXNbaV0pIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZih4LmlzRXZlbigpKSByZXR1cm4gZmFsc2U7XG4gICAgICBpID0gMTtcbiAgICAgIHdoaWxlKGkgPCBsb3dwcmltZXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBtID0gbG93cHJpbWVzW2ldLCBqID0gaSsxO1xuICAgICAgICB3aGlsZShqIDwgbG93cHJpbWVzLmxlbmd0aCAmJiBtIDwgbHBsaW0pIG0gKj0gbG93cHJpbWVzW2orK107XG4gICAgICAgIG0gPSB4Lm1vZEludChtKTtcbiAgICAgICAgd2hpbGUoaSA8IGopIGlmKG0lbG93cHJpbWVzW2krK10gPT0gMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHgubWlsbGVyUmFiaW4odCk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgdHJ1ZSBpZiBwcm9iYWJseSBwcmltZSAoSEFDIDQuMjQsIE1pbGxlci1SYWJpbilcbiAgICBmdW5jdGlvbiBibnBNaWxsZXJSYWJpbih0KSB7XG4gICAgICB2YXIgbjEgPSB0aGlzLnN1YnRyYWN0KEJpZ0ludGVnZXIuT05FKTtcbiAgICAgIHZhciBrID0gbjEuZ2V0TG93ZXN0U2V0Qml0KCk7XG4gICAgICBpZihrIDw9IDApIHJldHVybiBmYWxzZTtcbiAgICAgIHZhciByID0gbjEuc2hpZnRSaWdodChrKTtcbiAgICAgIHQgPSAodCsxKT4+MTtcbiAgICAgIGlmKHQgPiBsb3dwcmltZXMubGVuZ3RoKSB0ID0gbG93cHJpbWVzLmxlbmd0aDtcbiAgICAgIHZhciBhID0gbmJpKCk7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdDsgKytpKSB7XG4gICAgICAgIC8vUGljayBiYXNlcyBhdCByYW5kb20sIGluc3RlYWQgb2Ygc3RhcnRpbmcgYXQgMlxuICAgICAgICBhLmZyb21JbnQobG93cHJpbWVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpsb3dwcmltZXMubGVuZ3RoKV0pO1xuICAgICAgICB2YXIgeSA9IGEubW9kUG93KHIsdGhpcyk7XG4gICAgICAgIGlmKHkuY29tcGFyZVRvKEJpZ0ludGVnZXIuT05FKSAhPSAwICYmIHkuY29tcGFyZVRvKG4xKSAhPSAwKSB7XG4gICAgICAgICAgdmFyIGogPSAxO1xuICAgICAgICAgIHdoaWxlKGorKyA8IGsgJiYgeS5jb21wYXJlVG8objEpICE9IDApIHtcbiAgICAgICAgICAgIHkgPSB5Lm1vZFBvd0ludCgyLHRoaXMpO1xuICAgICAgICAgICAgaWYoeS5jb21wYXJlVG8oQmlnSW50ZWdlci5PTkUpID09IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoeS5jb21wYXJlVG8objEpICE9IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gcHJvdGVjdGVkXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuY2h1bmtTaXplID0gYm5wQ2h1bmtTaXplO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnRvUmFkaXggPSBibnBUb1JhZGl4O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmZyb21SYWRpeCA9IGJucEZyb21SYWRpeDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5mcm9tTnVtYmVyID0gYm5wRnJvbU51bWJlcjtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5iaXR3aXNlVG8gPSBibnBCaXR3aXNlVG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuY2hhbmdlQml0ID0gYm5wQ2hhbmdlQml0O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFkZFRvID0gYm5wQWRkVG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZE11bHRpcGx5ID0gYm5wRE11bHRpcGx5O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRBZGRPZmZzZXQgPSBibnBEQWRkT2Zmc2V0O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm11bHRpcGx5TG93ZXJUbyA9IGJucE11bHRpcGx5TG93ZXJUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tdWx0aXBseVVwcGVyVG8gPSBibnBNdWx0aXBseVVwcGVyVG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubW9kSW50ID0gYm5wTW9kSW50O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1pbGxlclJhYmluID0gYm5wTWlsbGVyUmFiaW47XG5cbiAgICAvLyBwdWJsaWNcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jbG9uZSA9IGJuQ2xvbmU7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaW50VmFsdWUgPSBibkludFZhbHVlO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmJ5dGVWYWx1ZSA9IGJuQnl0ZVZhbHVlO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNob3J0VmFsdWUgPSBiblNob3J0VmFsdWU7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc2lnbnVtID0gYm5TaWdOdW07XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUudG9CeXRlQXJyYXkgPSBiblRvQnl0ZUFycmF5O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmVxdWFscyA9IGJuRXF1YWxzO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1pbiA9IGJuTWluO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1heCA9IGJuTWF4O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFuZCA9IGJuQW5kO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm9yID0gYm5PcjtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS54b3IgPSBiblhvcjtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hbmROb3QgPSBibkFuZE5vdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ub3QgPSBibk5vdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zaGlmdExlZnQgPSBiblNoaWZ0TGVmdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zaGlmdFJpZ2h0ID0gYm5TaGlmdFJpZ2h0O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmdldExvd2VzdFNldEJpdCA9IGJuR2V0TG93ZXN0U2V0Qml0O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmJpdENvdW50ID0gYm5CaXRDb3VudDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS50ZXN0Qml0ID0gYm5UZXN0Qml0O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNldEJpdCA9IGJuU2V0Qml0O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNsZWFyQml0ID0gYm5DbGVhckJpdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5mbGlwQml0ID0gYm5GbGlwQml0O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFkZCA9IGJuQWRkO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnN1YnRyYWN0ID0gYm5TdWJ0cmFjdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tdWx0aXBseSA9IGJuTXVsdGlwbHk7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZGl2aWRlID0gYm5EaXZpZGU7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUucmVtYWluZGVyID0gYm5SZW1haW5kZXI7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZGl2aWRlQW5kUmVtYWluZGVyID0gYm5EaXZpZGVBbmRSZW1haW5kZXI7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubW9kUG93ID0gYm5Nb2RQb3c7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubW9kSW52ZXJzZSA9IGJuTW9kSW52ZXJzZTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5wb3cgPSBiblBvdztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5nY2QgPSBibkdDRDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc1Byb2JhYmxlUHJpbWUgPSBibklzUHJvYmFibGVQcmltZTtcblxuICAgIC8vIEpTQk4tc3BlY2lmaWMgZXh0ZW5zaW9uXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc3F1YXJlID0gYm5TcXVhcmU7XG5cbiAgICAvLyBFeHBvc2UgdGhlIEJhcnJldHQgZnVuY3Rpb25cbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5CYXJyZXR0ID0gQmFycmV0dFxuXG4gICAgLy8gQmlnSW50ZWdlciBpbnRlcmZhY2VzIG5vdCBpbXBsZW1lbnRlZCBpbiBqc2JuOlxuXG4gICAgLy8gQmlnSW50ZWdlcihpbnQgc2lnbnVtLCBieXRlW10gbWFnbml0dWRlKVxuICAgIC8vIGRvdWJsZSBkb3VibGVWYWx1ZSgpXG4gICAgLy8gZmxvYXQgZmxvYXRWYWx1ZSgpXG4gICAgLy8gaW50IGhhc2hDb2RlKClcbiAgICAvLyBsb25nIGxvbmdWYWx1ZSgpXG4gICAgLy8gc3RhdGljIEJpZ0ludGVnZXIgdmFsdWVPZihsb25nIHZhbClcblxuICAgIC8vIFJhbmRvbSBudW1iZXIgZ2VuZXJhdG9yIC0gcmVxdWlyZXMgYSBQUk5HIGJhY2tlbmQsIGUuZy4gcHJuZzQuanNcblxuICAgIC8vIEZvciBiZXN0IHJlc3VsdHMsIHB1dCBjb2RlIGxpa2VcbiAgICAvLyA8Ym9keSBvbkNsaWNrPSdybmdfc2VlZF90aW1lKCk7JyBvbktleVByZXNzPSdybmdfc2VlZF90aW1lKCk7Jz5cbiAgICAvLyBpbiB5b3VyIG1haW4gSFRNTCBkb2N1bWVudC5cblxuICAgIHZhciBybmdfc3RhdGU7XG4gICAgdmFyIHJuZ19wb29sO1xuICAgIHZhciBybmdfcHB0cjtcblxuICAgIC8vIE1peCBpbiBhIDMyLWJpdCBpbnRlZ2VyIGludG8gdGhlIHBvb2xcbiAgICBmdW5jdGlvbiBybmdfc2VlZF9pbnQoeCkge1xuICAgICAgcm5nX3Bvb2xbcm5nX3BwdHIrK10gXj0geCAmIDI1NTtcbiAgICAgIHJuZ19wb29sW3JuZ19wcHRyKytdIF49ICh4ID4+IDgpICYgMjU1O1xuICAgICAgcm5nX3Bvb2xbcm5nX3BwdHIrK10gXj0gKHggPj4gMTYpICYgMjU1O1xuICAgICAgcm5nX3Bvb2xbcm5nX3BwdHIrK10gXj0gKHggPj4gMjQpICYgMjU1O1xuICAgICAgaWYocm5nX3BwdHIgPj0gcm5nX3BzaXplKSBybmdfcHB0ciAtPSBybmdfcHNpemU7XG4gICAgfVxuXG4gICAgLy8gTWl4IGluIHRoZSBjdXJyZW50IHRpbWUgKHcvbWlsbGlzZWNvbmRzKSBpbnRvIHRoZSBwb29sXG4gICAgZnVuY3Rpb24gcm5nX3NlZWRfdGltZSgpIHtcbiAgICAgIHJuZ19zZWVkX2ludChuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgcG9vbCB3aXRoIGp1bmsgaWYgbmVlZGVkLlxuICAgIGlmKHJuZ19wb29sID09IG51bGwpIHtcbiAgICAgIHJuZ19wb29sID0gbmV3IEFycmF5KCk7XG4gICAgICBybmdfcHB0ciA9IDA7XG4gICAgICB2YXIgdDtcbiAgICAgIGlmKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmNyeXB0bykge1xuICAgICAgICBpZiAod2luZG93LmNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgICAvLyBVc2Ugd2ViY3J5cHRvIGlmIGF2YWlsYWJsZVxuICAgICAgICAgIHZhciB1YSA9IG5ldyBVaW50OEFycmF5KDMyKTtcbiAgICAgICAgICB3aW5kb3cuY3J5cHRvLmdldFJhbmRvbVZhbHVlcyh1YSk7XG4gICAgICAgICAgZm9yKHQgPSAwOyB0IDwgMzI7ICsrdClcbiAgICAgICAgICAgIHJuZ19wb29sW3JuZ19wcHRyKytdID0gdWFbdF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihuYXZpZ2F0b3IuYXBwTmFtZSA9PSBcIk5ldHNjYXBlXCIgJiYgbmF2aWdhdG9yLmFwcFZlcnNpb24gPCBcIjVcIikge1xuICAgICAgICAgIC8vIEV4dHJhY3QgZW50cm9weSAoMjU2IGJpdHMpIGZyb20gTlM0IFJORyBpZiBhdmFpbGFibGVcbiAgICAgICAgICB2YXIgeiA9IHdpbmRvdy5jcnlwdG8ucmFuZG9tKDMyKTtcbiAgICAgICAgICBmb3IodCA9IDA7IHQgPCB6Lmxlbmd0aDsgKyt0KVxuICAgICAgICAgICAgcm5nX3Bvb2xbcm5nX3BwdHIrK10gPSB6LmNoYXJDb2RlQXQodCkgJiAyNTU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHdoaWxlKHJuZ19wcHRyIDwgcm5nX3BzaXplKSB7ICAvLyBleHRyYWN0IHNvbWUgcmFuZG9tbmVzcyBmcm9tIE1hdGgucmFuZG9tKClcbiAgICAgICAgdCA9IE1hdGguZmxvb3IoNjU1MzYgKiBNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgcm5nX3Bvb2xbcm5nX3BwdHIrK10gPSB0ID4+PiA4O1xuICAgICAgICBybmdfcG9vbFtybmdfcHB0cisrXSA9IHQgJiAyNTU7XG4gICAgICB9XG4gICAgICBybmdfcHB0ciA9IDA7XG4gICAgICBybmdfc2VlZF90aW1lKCk7XG4gICAgICAvL3JuZ19zZWVkX2ludCh3aW5kb3cuc2NyZWVuWCk7XG4gICAgICAvL3JuZ19zZWVkX2ludCh3aW5kb3cuc2NyZWVuWSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcm5nX2dldF9ieXRlKCkge1xuICAgICAgaWYocm5nX3N0YXRlID09IG51bGwpIHtcbiAgICAgICAgcm5nX3NlZWRfdGltZSgpO1xuICAgICAgICBybmdfc3RhdGUgPSBwcm5nX25ld3N0YXRlKCk7XG4gICAgICAgIHJuZ19zdGF0ZS5pbml0KHJuZ19wb29sKTtcbiAgICAgICAgZm9yKHJuZ19wcHRyID0gMDsgcm5nX3BwdHIgPCBybmdfcG9vbC5sZW5ndGg7ICsrcm5nX3BwdHIpXG4gICAgICAgICAgcm5nX3Bvb2xbcm5nX3BwdHJdID0gMDtcbiAgICAgICAgcm5nX3BwdHIgPSAwO1xuICAgICAgICAvL3JuZ19wb29sID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIC8vIFRPRE86IGFsbG93IHJlc2VlZGluZyBhZnRlciBmaXJzdCByZXF1ZXN0XG4gICAgICByZXR1cm4gcm5nX3N0YXRlLm5leHQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBybmdfZ2V0X2J5dGVzKGJhKSB7XG4gICAgICB2YXIgaTtcbiAgICAgIGZvcihpID0gMDsgaSA8IGJhLmxlbmd0aDsgKytpKSBiYVtpXSA9IHJuZ19nZXRfYnl0ZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIFNlY3VyZVJhbmRvbSgpIHt9XG5cbiAgICBTZWN1cmVSYW5kb20ucHJvdG90eXBlLm5leHRCeXRlcyA9IHJuZ19nZXRfYnl0ZXM7XG5cbiAgICAvLyBwcm5nNC5qcyAtIHVzZXMgQXJjZm91ciBhcyBhIFBSTkdcblxuICAgIGZ1bmN0aW9uIEFyY2ZvdXIoKSB7XG4gICAgICB0aGlzLmkgPSAwO1xuICAgICAgdGhpcy5qID0gMDtcbiAgICAgIHRoaXMuUyA9IG5ldyBBcnJheSgpO1xuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemUgYXJjZm91ciBjb250ZXh0IGZyb20ga2V5LCBhbiBhcnJheSBvZiBpbnRzLCBlYWNoIGZyb20gWzAuLjI1NV1cbiAgICBmdW5jdGlvbiBBUkM0aW5pdChrZXkpIHtcbiAgICAgIHZhciBpLCBqLCB0O1xuICAgICAgZm9yKGkgPSAwOyBpIDwgMjU2OyArK2kpXG4gICAgICAgIHRoaXMuU1tpXSA9IGk7XG4gICAgICBqID0gMDtcbiAgICAgIGZvcihpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gICAgICAgIGogPSAoaiArIHRoaXMuU1tpXSArIGtleVtpICUga2V5Lmxlbmd0aF0pICYgMjU1O1xuICAgICAgICB0ID0gdGhpcy5TW2ldO1xuICAgICAgICB0aGlzLlNbaV0gPSB0aGlzLlNbal07XG4gICAgICAgIHRoaXMuU1tqXSA9IHQ7XG4gICAgICB9XG4gICAgICB0aGlzLmkgPSAwO1xuICAgICAgdGhpcy5qID0gMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBBUkM0bmV4dCgpIHtcbiAgICAgIHZhciB0O1xuICAgICAgdGhpcy5pID0gKHRoaXMuaSArIDEpICYgMjU1O1xuICAgICAgdGhpcy5qID0gKHRoaXMuaiArIHRoaXMuU1t0aGlzLmldKSAmIDI1NTtcbiAgICAgIHQgPSB0aGlzLlNbdGhpcy5pXTtcbiAgICAgIHRoaXMuU1t0aGlzLmldID0gdGhpcy5TW3RoaXMual07XG4gICAgICB0aGlzLlNbdGhpcy5qXSA9IHQ7XG4gICAgICByZXR1cm4gdGhpcy5TWyh0ICsgdGhpcy5TW3RoaXMuaV0pICYgMjU1XTtcbiAgICB9XG5cbiAgICBBcmNmb3VyLnByb3RvdHlwZS5pbml0ID0gQVJDNGluaXQ7XG4gICAgQXJjZm91ci5wcm90b3R5cGUubmV4dCA9IEFSQzRuZXh0O1xuXG4gICAgLy8gUGx1ZyBpbiB5b3VyIFJORyBjb25zdHJ1Y3RvciBoZXJlXG4gICAgZnVuY3Rpb24gcHJuZ19uZXdzdGF0ZSgpIHtcbiAgICAgIHJldHVybiBuZXcgQXJjZm91cigpO1xuICAgIH1cblxuICAgIC8vIFBvb2wgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCBhbmQgZ3JlYXRlciB0aGFuIDMyLlxuICAgIC8vIEFuIGFycmF5IG9mIGJ5dGVzIHRoZSBzaXplIG9mIHRoZSBwb29sIHdpbGwgYmUgcGFzc2VkIHRvIGluaXQoKVxuICAgIHZhciBybmdfcHNpemUgPSAyNTY7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IEJpZ0ludGVnZXIsXG4gICAgICAgICAgICBCaWdJbnRlZ2VyOiBCaWdJbnRlZ2VyLFxuICAgICAgICAgICAgU2VjdXJlUmFuZG9tOiBTZWN1cmVSYW5kb20sXG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5qc2JuID0ge1xuICAgICAgICAgIEJpZ0ludGVnZXI6IEJpZ0ludGVnZXIsXG4gICAgICAgICAgU2VjdXJlUmFuZG9tOiBTZWN1cmVSYW5kb21cbiAgICAgICAgfTtcbiAgICB9XG5cbn0pLmNhbGwodGhpcyk7XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcbmltcG9ydCB7IFRpbWVyIH0gZnJvbSAnLi9UaW1lci5qcyc7XHJcblxyXG5jb25zdCBEZWZhdWx0QWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUgPSA2MDsgLy8gc2Vjb25kc1xyXG5cclxuZXhwb3J0IGNsYXNzIEFjY2Vzc1Rva2VuRXZlbnRzIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUgPSBEZWZhdWx0QWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUsXHJcbiAgICAgICAgYWNjZXNzVG9rZW5FeHBpcmluZ1RpbWVyID0gbmV3IFRpbWVyKFwiQWNjZXNzIHRva2VuIGV4cGlyaW5nXCIpLFxyXG4gICAgICAgIGFjY2Vzc1Rva2VuRXhwaXJlZFRpbWVyID0gbmV3IFRpbWVyKFwiQWNjZXNzIHRva2VuIGV4cGlyZWRcIilcclxuICAgIH0gPSB7fSkge1xyXG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lID0gYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWU7XHJcblxyXG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmcgPSBhY2Nlc3NUb2tlbkV4cGlyaW5nVGltZXI7XHJcbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmVkID0gYWNjZXNzVG9rZW5FeHBpcmVkVGltZXI7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZChjb250YWluZXIpIHtcclxuICAgICAgICAvLyBvbmx5IHJlZ2lzdGVyIGV2ZW50cyBpZiB0aGVyZSdzIGFuIGFjY2VzcyB0b2tlbiBhbmQgaXQgaGFzIGFuIGV4cGlyYXRpb25cclxuICAgICAgICBpZiAoY29udGFpbmVyLmFjY2Vzc190b2tlbiAmJiBjb250YWluZXIuZXhwaXJlc19pbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxldCBkdXJhdGlvbiA9IGNvbnRhaW5lci5leHBpcmVzX2luO1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJBY2Nlc3NUb2tlbkV2ZW50cy5sb2FkOiBhY2Nlc3MgdG9rZW4gcHJlc2VudCwgcmVtYWluaW5nIGR1cmF0aW9uOlwiLCBkdXJhdGlvbik7XHJcblxyXG4gICAgICAgICAgICBpZiAoZHVyYXRpb24gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBvbmx5IHJlZ2lzdGVyIGV4cGlyaW5nIGlmIHdlIHN0aWxsIGhhdmUgdGltZVxyXG4gICAgICAgICAgICAgICAgbGV0IGV4cGlyaW5nID0gZHVyYXRpb24gLSB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZTtcclxuICAgICAgICAgICAgICAgIGlmIChleHBpcmluZyA8PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICBleHBpcmluZyA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkFjY2Vzc1Rva2VuRXZlbnRzLmxvYWQ6IHJlZ2lzdGVyaW5nIGV4cGlyaW5nIHRpbWVyIGluOlwiLCBleHBpcmluZyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nLmluaXQoZXhwaXJpbmcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiQWNjZXNzVG9rZW5FdmVudHMubG9hZDogY2FuY2VsaW5nIGV4aXN0aW5nIGV4cGlyaW5nIHRpbWVyIGJlY2FzZSB3ZSdyZSBwYXN0IGV4cGlyYXRpb24uXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmluZy5jYW5jZWwoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gaWYgaXQncyBuZWdhdGl2ZSwgaXQgd2lsbCBzdGlsbCBmaXJlXHJcbiAgICAgICAgICAgIGxldCBleHBpcmVkID0gZHVyYXRpb24gKyAxO1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJBY2Nlc3NUb2tlbkV2ZW50cy5sb2FkOiByZWdpc3RlcmluZyBleHBpcmVkIHRpbWVyIGluOlwiLCBleHBpcmVkKTtcclxuICAgICAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmVkLmluaXQoZXhwaXJlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyZWQuY2FuY2VsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVubG9hZCgpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJBY2Nlc3NUb2tlbkV2ZW50cy51bmxvYWQ6IGNhbmNlbGluZyBleGlzdGluZyBhY2Nlc3MgdG9rZW4gdGltZXJzXCIpO1xyXG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmcuY2FuY2VsKCk7XHJcbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmVkLmNhbmNlbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEFjY2Vzc1Rva2VuRXhwaXJpbmcoY2IpIHtcclxuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nLmFkZEhhbmRsZXIoY2IpO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlQWNjZXNzVG9rZW5FeHBpcmluZyhjYikge1xyXG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmcucmVtb3ZlSGFuZGxlcihjYik7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQWNjZXNzVG9rZW5FeHBpcmVkKGNiKSB7XHJcbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmVkLmFkZEhhbmRsZXIoY2IpO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlQWNjZXNzVG9rZW5FeHBpcmVkKGNiKSB7XHJcbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmVkLnJlbW92ZUhhbmRsZXIoY2IpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuXHJcbmNvbnN0IERlZmF1bHRJbnRlcnZhbCA9IDIwMDA7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hlY2tTZXNzaW9uSUZyYW1lIHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbGxiYWNrLCBjbGllbnRfaWQsIHVybCwgaW50ZXJ2YWwsIHN0b3BPbkVycm9yID0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5fY2xpZW50X2lkID0gY2xpZW50X2lkO1xyXG4gICAgICAgIHRoaXMuX3VybCA9IHVybDtcclxuICAgICAgICB0aGlzLl9pbnRlcnZhbCA9IGludGVydmFsIHx8IERlZmF1bHRJbnRlcnZhbDtcclxuICAgICAgICB0aGlzLl9zdG9wT25FcnJvciA9IHN0b3BPbkVycm9yO1xyXG5cclxuICAgICAgICB2YXIgaWR4ID0gdXJsLmluZGV4T2YoXCIvXCIsIHVybC5pbmRleE9mKFwiLy9cIikgKyAyKTtcclxuICAgICAgICB0aGlzLl9mcmFtZV9vcmlnaW4gPSB1cmwuc3Vic3RyKDAsIGlkeCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2ZyYW1lID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XHJcblxyXG4gICAgICAgIC8vIHNob3RndW4gYXBwcm9hY2hcclxuICAgICAgICB0aGlzLl9mcmFtZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICB0aGlzLl9mcmFtZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICB0aGlzLl9mcmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgdGhpcy5fZnJhbWUuc3R5bGUud2lkdGggPSAwO1xyXG4gICAgICAgIHRoaXMuX2ZyYW1lLnN0eWxlLmhlaWdodCA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuX2ZyYW1lLnNyYyA9IHVybDtcclxuICAgIH1cclxuICAgIGxvYWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZyYW1lLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fZnJhbWUpO1xyXG4gICAgICAgICAgICB0aGlzLl9ib3VuZE1lc3NhZ2VFdmVudCA9IHRoaXMuX21lc3NhZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHRoaXMuX2JvdW5kTWVzc2FnZUV2ZW50LCBmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBfbWVzc2FnZShlKSB7XHJcbiAgICAgICAgaWYgKGUub3JpZ2luID09PSB0aGlzLl9mcmFtZV9vcmlnaW4gJiZcclxuICAgICAgICAgICAgZS5zb3VyY2UgPT09IHRoaXMuX2ZyYW1lLmNvbnRlbnRXaW5kb3dcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKGUuZGF0YSA9PT0gXCJlcnJvclwiKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJDaGVja1Nlc3Npb25JRnJhbWU6IGVycm9yIG1lc3NhZ2UgZnJvbSBjaGVjayBzZXNzaW9uIG9wIGlmcmFtZVwiKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zdG9wT25FcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGUuZGF0YSA9PT0gXCJjaGFuZ2VkXCIpIHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkNoZWNrU2Vzc2lvbklGcmFtZTogY2hhbmdlZCBtZXNzYWdlIGZyb20gY2hlY2sgc2Vzc2lvbiBvcCBpZnJhbWVcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJDaGVja1Nlc3Npb25JRnJhbWU6IFwiICsgZS5kYXRhICsgXCIgbWVzc2FnZSBmcm9tIGNoZWNrIHNlc3Npb24gb3AgaWZyYW1lXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhcnQoc2Vzc2lvbl9zdGF0ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zZXNzaW9uX3N0YXRlICE9PSBzZXNzaW9uX3N0YXRlKSB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkNoZWNrU2Vzc2lvbklGcmFtZS5zdGFydFwiKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fc2Vzc2lvbl9zdGF0ZSA9IHNlc3Npb25fc3RhdGU7XHJcblxyXG4gICAgICAgICAgICBsZXQgc2VuZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2ZyYW1lLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UodGhpcy5fY2xpZW50X2lkICsgXCIgXCIgKyB0aGlzLl9zZXNzaW9uX3N0YXRlLCB0aGlzLl9mcmFtZV9vcmlnaW4pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gdHJpZ2dlciBub3dcclxuICAgICAgICAgICAgc2VuZCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gYW5kIHNldHVwIHRpbWVyXHJcbiAgICAgICAgICAgIHRoaXMuX3RpbWVyID0gd2luZG93LnNldEludGVydmFsKHNlbmQsIHRoaXMuX2ludGVydmFsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcCgpIHtcclxuICAgICAgICB0aGlzLl9zZXNzaW9uX3N0YXRlID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3RpbWVyKSB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkNoZWNrU2Vzc2lvbklGcmFtZS5zdG9wXCIpO1xyXG5cclxuICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5fdGltZXIpO1xyXG4gICAgICAgICAgICB0aGlzLl90aW1lciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBDbG9ja1NlcnZpY2Uge1xyXG4gICAgZ2V0RXBvY2hUaW1lKCkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoRGF0ZS5ub3coKSAvIDEwMDAgfCAwKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBDb3Jkb3ZhUG9wdXBXaW5kb3cgfSBmcm9tICcuL0NvcmRvdmFQb3B1cFdpbmRvdy5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29yZG92YUlGcmFtZU5hdmlnYXRvciB7XHJcblxyXG4gICAgcHJlcGFyZShwYXJhbXMpIHtcclxuICAgICAgICBwYXJhbXMucG9wdXBXaW5kb3dGZWF0dXJlcyA9ICdoaWRkZW49eWVzJztcclxuICAgICAgICBsZXQgcG9wdXAgPSBuZXcgQ29yZG92YVBvcHVwV2luZG93KHBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwb3B1cCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgQ29yZG92YVBvcHVwV2luZG93IH0gZnJvbSAnLi9Db3Jkb3ZhUG9wdXBXaW5kb3cuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvcmRvdmFQb3B1cE5hdmlnYXRvciB7XHJcblxyXG4gICAgcHJlcGFyZShwYXJhbXMpIHtcclxuICAgICAgICBsZXQgcG9wdXAgPSBuZXcgQ29yZG92YVBvcHVwV2luZG93KHBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwb3B1cCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5cclxuY29uc3QgRGVmYXVsdFBvcHVwRmVhdHVyZXMgPSAnbG9jYXRpb249bm8sdG9vbGJhcj1ubyx6b29tPW5vJztcclxuY29uc3QgRGVmYXVsdFBvcHVwVGFyZ2V0ID0gXCJfYmxhbmtcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb3Jkb3ZhUG9wdXBXaW5kb3cge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtcykge1xyXG4gICAgICAgIHRoaXMuX3Byb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmUgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICB0aGlzLl9yZWplY3QgPSByZWplY3Q7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZmVhdHVyZXMgPSBwYXJhbXMucG9wdXBXaW5kb3dGZWF0dXJlcyB8fCBEZWZhdWx0UG9wdXBGZWF0dXJlcztcclxuICAgICAgICB0aGlzLnRhcmdldCA9IHBhcmFtcy5wb3B1cFdpbmRvd1RhcmdldCB8fCBEZWZhdWx0UG9wdXBUYXJnZXQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZWRpcmVjdF91cmkgPSBwYXJhbXMuc3RhcnRVcmw7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiQ29yZG92YVBvcHVwV2luZG93LmN0b3I6IHJlZGlyZWN0X3VyaTogXCIgKyB0aGlzLnJlZGlyZWN0X3VyaSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2lzSW5BcHBCcm93c2VySW5zdGFsbGVkKGNvcmRvdmFNZXRhZGF0YSkge1xyXG4gICAgICAgIHJldHVybiBbXCJjb3Jkb3ZhLXBsdWdpbi1pbmFwcGJyb3dzZXJcIiwgXCJjb3Jkb3ZhLXBsdWdpbi1pbmFwcGJyb3dzZXIuaW5hcHBicm93c2VyXCIsIFwib3JnLmFwYWNoZS5jb3Jkb3ZhLmluYXBwYnJvd3NlclwiLCBcImNvcmRvdmEtcGx1Z2luLWluYXBwYnJvd3Nlci10cmFuc3BhcmVudFwiXS5zb21lKGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb3Jkb3ZhTWV0YWRhdGEuaGFzT3duUHJvcGVydHkobmFtZSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBuYXZpZ2F0ZShwYXJhbXMpIHtcclxuICAgICAgICBpZiAoIXBhcmFtcyB8fCAhcGFyYW1zLnVybCkge1xyXG4gICAgICAgICAgICB0aGlzLl9lcnJvcihcIk5vIHVybCBwcm92aWRlZFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5jb3Jkb3ZhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3IoXCJjb3Jkb3ZhIGlzIHVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgY29yZG92YU1ldGFkYXRhID0gd2luZG93LmNvcmRvdmEucmVxdWlyZShcImNvcmRvdmEvcGx1Z2luX2xpc3RcIikubWV0YWRhdGE7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0luQXBwQnJvd3Nlckluc3RhbGxlZChjb3Jkb3ZhTWV0YWRhdGEpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yKFwiSW5BcHBCcm93c2VyIHBsdWdpbiBub3QgZm91bmRcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9wb3B1cCA9IGNvcmRvdmEuSW5BcHBCcm93c2VyLm9wZW4ocGFyYW1zLnVybCwgdGhpcy50YXJnZXQsIHRoaXMuZmVhdHVyZXMpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcG9wdXApIHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkNvcmRvdmFQb3B1cFdpbmRvdy5uYXZpZ2F0ZTogcG9wdXAgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuX2V4aXRDYWxsYmFja0V2ZW50ID0gdGhpcy5fZXhpdENhbGxiYWNrLmJpbmQodGhpcyk7IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZFN0YXJ0Q2FsbGJhY2tFdmVudCA9IHRoaXMuX2xvYWRTdGFydENhbGxiYWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoXCJleGl0XCIsIHRoaXMuX2V4aXRDYWxsYmFja0V2ZW50LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wb3B1cC5hZGRFdmVudExpc3RlbmVyKFwibG9hZHN0YXJ0XCIsIHRoaXMuX2xvYWRTdGFydENhbGxiYWNrRXZlbnQsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yKFwiRXJyb3Igb3BlbmluZyBwb3B1cCB3aW5kb3dcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcHJvbWlzZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICBfbG9hZFN0YXJ0Q2FsbGJhY2soZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQudXJsLmluZGV4T2YodGhpcy5yZWRpcmVjdF91cmkpID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1Y2Nlc3MoeyB1cmw6IGV2ZW50LnVybCB9KTtcclxuICAgICAgICB9ICAgIFxyXG4gICAgfVxyXG4gICAgX2V4aXRDYWxsYmFjayhtZXNzYWdlKSB7XHJcbiAgICAgICAgdGhpcy5fZXJyb3IobWVzc2FnZSk7ICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBfc3VjY2VzcyhkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fY2xlYW51cCgpO1xyXG5cclxuICAgICAgICBMb2cuZGVidWcoXCJDb3Jkb3ZhUG9wdXBXaW5kb3c6IFN1Y2Nlc3NmdWwgcmVzcG9uc2UgZnJvbSBjb3Jkb3ZhIHBvcHVwIHdpbmRvd1wiKTtcclxuICAgICAgICB0aGlzLl9yZXNvbHZlKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgX2Vycm9yKG1lc3NhZ2UpIHtcclxuICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XHJcblxyXG4gICAgICAgIExvZy5lcnJvcihtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLl9yZWplY3QobmV3IEVycm9yKG1lc3NhZ2UpKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NsZWFudXAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BvcHVwKXtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiQ29yZG92YVBvcHVwV2luZG93OiBjbGVhbmluZyB1cCBwb3B1cFwiKTtcclxuICAgICAgICAgICAgdGhpcy5fcG9wdXAucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImV4aXRcIiwgdGhpcy5fZXhpdENhbGxiYWNrRXZlbnQsIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5fcG9wdXAucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRzdGFydFwiLCB0aGlzLl9sb2FkU3RhcnRDYWxsYmFja0V2ZW50LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5fcG9wdXAuaGlkZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9wb3B1cC5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9wb3B1cCA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVycm9yUmVzcG9uc2UgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7ZXJyb3IsIGVycm9yX2Rlc2NyaXB0aW9uLCBlcnJvcl91cmksIHN0YXRlLCBzZXNzaW9uX3N0YXRlfT17fVxyXG4gICAgKSB7XHJcbiAgICAgICAgIGlmICghZXJyb3Ipe1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJObyBlcnJvciBwYXNzZWQgdG8gRXJyb3JSZXNwb25zZVwiKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZXJyb3JcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdXBlcihlcnJvcl9kZXNjcmlwdGlvbiB8fCBlcnJvcik7XHJcblxyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiRXJyb3JSZXNwb25zZVwiO1xyXG5cclxuICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XHJcbiAgICAgICAgdGhpcy5lcnJvcl9kZXNjcmlwdGlvbiA9IGVycm9yX2Rlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZXJyb3JfdXJpID0gZXJyb3JfdXJpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uX3N0YXRlID0gc2Vzc2lvbl9zdGF0ZTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRXZlbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRIYW5kbGVyKGNiKSB7XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzLnB1c2goY2IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUhhbmRsZXIoY2IpIHtcclxuICAgICAgICB2YXIgaWR4ID0gdGhpcy5fY2FsbGJhY2tzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0gPT09IGNiKTtcclxuICAgICAgICBpZiAoaWR4ID49IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByYWlzZSguLi5wYXJhbXMpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJFdmVudDogUmFpc2luZyBldmVudDogXCIgKyB0aGlzLl9uYW1lKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2NhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFja3NbaV0oLi4ucGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuY29uc3QgdGltZXIgPSB7XHJcbiAgICBzZXRJbnRlcnZhbDogZnVuY3Rpb24gKGNiLCBkdXJhdGlvbikge1xyXG4gICAgICAgIHJldHVybiBzZXRJbnRlcnZhbChjYiwgZHVyYXRpb24pO1xyXG4gICAgfSxcclxuICAgIGNsZWFySW50ZXJ2YWw6IGZ1bmN0aW9uIChoYW5kbGUpIHtcclxuICAgICAgICByZXR1cm4gY2xlYXJJbnRlcnZhbChoYW5kbGUpO1xyXG4gICAgfVxyXG59O1xyXG5cclxubGV0IHRlc3RpbmcgPSBmYWxzZTtcclxubGV0IHJlcXVlc3QgPSBudWxsO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdsb2JhbCB7XHJcblxyXG4gICAgc3RhdGljIF90ZXN0aW5nKCkge1xyXG4gICAgICAgIHRlc3RpbmcgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgbG9jYXRpb24oKSB7XHJcbiAgICAgICAgaWYgKCF0ZXN0aW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBsb2NhdGlvbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBsb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICAgICAgaWYgKCF0ZXN0aW5nICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgc2Vzc2lvblN0b3JhZ2UoKSB7XHJcbiAgICAgICAgaWYgKCF0ZXN0aW5nICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldFhNTEh0dHBSZXF1ZXN0KG5ld1JlcXVlc3QpIHtcclxuICAgICAgICByZXF1ZXN0ID0gbmV3UmVxdWVzdDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IFhNTEh0dHBSZXF1ZXN0KCkge1xyXG4gICAgICAgIGlmICghdGVzdGluZyAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdCB8fCBYTUxIdHRwUmVxdWVzdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCB0aW1lcigpIHtcclxuICAgICAgICBpZiAoIXRlc3RpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRpbWVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcbmltcG9ydCB7IElGcmFtZVdpbmRvdyB9IGZyb20gJy4vSUZyYW1lV2luZG93LmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJRnJhbWVOYXZpZ2F0b3Ige1xyXG5cclxuICAgIHByZXBhcmUocGFyYW1zKSB7XHJcbiAgICAgICAgbGV0IGZyYW1lID0gbmV3IElGcmFtZVdpbmRvdyhwYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZnJhbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxiYWNrKHVybCkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIklGcmFtZU5hdmlnYXRvci5jYWxsYmFja1wiKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgSUZyYW1lV2luZG93Lm5vdGlmeVBhcmVudCh1cmwpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5cclxuY29uc3QgRGVmYXVsdFRpbWVvdXQgPSAxMDAwMDtcclxuXHJcbmV4cG9ydCBjbGFzcyBJRnJhbWVXaW5kb3cge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtcykge1xyXG4gICAgICAgIHRoaXMuX3Byb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmUgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICB0aGlzLl9yZWplY3QgPSByZWplY3Q7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2JvdW5kTWVzc2FnZUV2ZW50ID0gdGhpcy5fbWVzc2FnZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB0aGlzLl9ib3VuZE1lc3NhZ2VFdmVudCwgZmFsc2UpO1xyXG5cclxuICAgICAgICB0aGlzLl9mcmFtZSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xyXG5cclxuICAgICAgICAvLyBzaG90Z3VuIGFwcHJvYWNoXHJcbiAgICAgICAgdGhpcy5fZnJhbWUuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgdGhpcy5fZnJhbWUuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgdGhpcy5fZnJhbWUuc3R5bGUud2lkdGggPSAwO1xyXG4gICAgICAgIHRoaXMuX2ZyYW1lLnN0eWxlLmhlaWdodCA9IDA7XHJcblxyXG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX2ZyYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBuYXZpZ2F0ZShwYXJhbXMpIHtcclxuICAgICAgICBpZiAoIXBhcmFtcyB8fCAhcGFyYW1zLnVybCkge1xyXG4gICAgICAgICAgICB0aGlzLl9lcnJvcihcIk5vIHVybCBwcm92aWRlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCB0aW1lb3V0ID0gcGFyYW1zLnNpbGVudFJlcXVlc3RUaW1lb3V0IHx8IERlZmF1bHRUaW1lb3V0O1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJJRnJhbWVXaW5kb3cubmF2aWdhdGU6IFVzaW5nIHRpbWVvdXQgb2Y6XCIsIHRpbWVvdXQpO1xyXG4gICAgICAgICAgICB0aGlzLl90aW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMuX3RpbWVvdXQuYmluZCh0aGlzKSwgdGltZW91dCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZyYW1lLnNyYyA9IHBhcmFtcy51cmw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcm9taXNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIF9zdWNjZXNzKGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XHJcblxyXG4gICAgICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdzogU3VjY2Vzc2Z1bCByZXNwb25zZSBmcm9tIGZyYW1lIHdpbmRvd1wiKTtcclxuICAgICAgICB0aGlzLl9yZXNvbHZlKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgX2Vycm9yKG1lc3NhZ2UpIHtcclxuICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XHJcblxyXG4gICAgICAgIExvZy5lcnJvcihtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLl9yZWplY3QobmV3IEVycm9yKG1lc3NhZ2UpKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NsZWFudXAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2ZyYW1lKSB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdzogY2xlYW51cFwiKTtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB0aGlzLl9ib3VuZE1lc3NhZ2VFdmVudCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyKTtcclxuICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5fZnJhbWUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fdGltZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9mcmFtZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuX2JvdW5kTWVzc2FnZUV2ZW50ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX3RpbWVvdXQoKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiSUZyYW1lV2luZG93LnRpbWVvdXRcIik7XHJcbiAgICAgICAgdGhpcy5fZXJyb3IoXCJGcmFtZSB3aW5kb3cgdGltZWQgb3V0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIF9tZXNzYWdlKGUpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJJRnJhbWVXaW5kb3cubWVzc2FnZVwiKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3RpbWVyICYmXHJcbiAgICAgICAgICAgIGUub3JpZ2luID09PSB0aGlzLl9vcmlnaW4gJiZcclxuICAgICAgICAgICAgZS5zb3VyY2UgPT09IHRoaXMuX2ZyYW1lLmNvbnRlbnRXaW5kb3dcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgbGV0IHVybCA9IGUuZGF0YTtcclxuICAgICAgICAgICAgaWYgKHVybCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3VjY2Vzcyh7IHVybDogdXJsIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IoXCJJbnZhbGlkIHJlc3BvbnNlIGZyb20gZnJhbWVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IF9vcmlnaW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbm90aWZ5UGFyZW50KHVybCkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdy5ub3RpZnlQYXJlbnRcIik7XHJcbiAgICAgICAgdXJsID0gdXJsIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgIGlmICh1cmwpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiSUZyYW1lV2luZG93Lm5vdGlmeVBhcmVudDogcG9zdGluZyB1cmwgbWVzc2FnZSB0byBwYXJlbnRcIik7XHJcbiAgICAgICAgICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UodXJsLCBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5NZW1vcnlXZWJTdG9yYWdle1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLl9kYXRhID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbShrZXkpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJJbk1lbW9yeVdlYlN0b3JhZ2UuZ2V0SXRlbVwiLCBrZXkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SXRlbShrZXksIHZhbHVlKXtcclxuICAgICAgICBMb2cuZGVidWcoXCJJbk1lbW9yeVdlYlN0b3JhZ2Uuc2V0SXRlbVwiLCBrZXkpO1xyXG4gICAgICAgIHRoaXMuX2RhdGFba2V5XSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUl0ZW0oa2V5KXtcclxuICAgICAgICBMb2cuZGVidWcoXCJJbk1lbW9yeVdlYlN0b3JhZ2UucmVtb3ZlSXRlbVwiLCBrZXkpO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9kYXRhW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGxlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcy5fZGF0YSkubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGtleShpbmRleCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzLl9kYXRhKVtpbmRleF07XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Sm9zZVV0aWwoeyBqd3MsIEtleVV0aWwsIFg1MDksIGNyeXB0bywgaGV4dG9iNjR1LCBiNjR0b2hleCwgQWxsb3dlZFNpZ25pbmdBbGdzIH0pIHtcclxuICAgIHJldHVybiBjbGFzcyBKb3NlVXRpbCB7XHJcblxyXG4gICAgICAgIHN0YXRpYyBwYXJzZUp3dChqd3QpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiSm9zZVV0aWwucGFyc2VKd3RcIik7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9rZW4gPSBqd3MuSldTLnBhcnNlKGp3dCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjogdG9rZW4uaGVhZGVyT2JqLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHRva2VuLnBheWxvYWRPYmpcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgdmFsaWRhdGVKd3Qoand0LCBrZXksIGlzc3VlciwgYXVkaWVuY2UsIGNsb2NrU2tldywgbm93LCB0aW1lSW5zZW5zaXRpdmUpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiSm9zZVV0aWwudmFsaWRhdGVKd3RcIik7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleS5rdHkgPT09IFwiUlNBXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LmUgJiYga2V5Lm4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0gS2V5VXRpbC5nZXRLZXkoa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtleS54NWMgJiYga2V5Lng1Yy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhleCA9IGI2NHRvaGV4KGtleS54NWNbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSBYNTA5LmdldFB1YmxpY0tleUZyb21DZXJ0SGV4KGhleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwudmFsaWRhdGVKd3Q6IFJTQSBrZXkgbWlzc2luZyBrZXkgbWF0ZXJpYWxcIiwga2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlJTQSBrZXkgbWlzc2luZyBrZXkgbWF0ZXJpYWxcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5Lmt0eSA9PT0gXCJFQ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5jcnYgJiYga2V5LnggJiYga2V5LnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0gS2V5VXRpbC5nZXRLZXkoa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC52YWxpZGF0ZUp3dDogRUMga2V5IG1pc3Npbmcga2V5IG1hdGVyaWFsXCIsIGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJFQyBrZXkgbWlzc2luZyBrZXkgbWF0ZXJpYWxcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwudmFsaWRhdGVKd3Q6IFVuc3VwcG9ydGVkIGtleSB0eXBlXCIsIGtleSAmJiBrZXkua3R5KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQga2V5IHR5cGU6IFwiICsga2V5ICYmIGtleS5rdHkpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSm9zZVV0aWwuX3ZhbGlkYXRlSnd0KGp3dCwga2V5LCBpc3N1ZXIsIGF1ZGllbmNlLCBjbG9ja1NrZXcsIG5vdywgdGltZUluc2Vuc2l0aXZlKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKGUgJiYgZS5tZXNzYWdlIHx8IGUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiSldUIHZhbGlkYXRpb24gZmFpbGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgdmFsaWRhdGVKd3RBdHRyaWJ1dGVzKGp3dCwgaXNzdWVyLCBhdWRpZW5jZSwgY2xvY2tTa2V3LCBub3csIHRpbWVJbnNlbnNpdGl2ZSkge1xyXG4gICAgICAgICAgICBpZiAoIWNsb2NrU2tldykge1xyXG4gICAgICAgICAgICAgICAgY2xvY2tTa2V3ID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFub3cpIHtcclxuICAgICAgICAgICAgICAgIG5vdyA9IHBhcnNlSW50KERhdGUubm93KCkgLyAxMDAwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHBheWxvYWQgPSBKb3NlVXRpbC5wYXJzZUp3dChqd3QpLnBheWxvYWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXBheWxvYWQuaXNzKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IGlzc3VlciB3YXMgbm90IHByb3ZpZGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImlzc3VlciB3YXMgbm90IHByb3ZpZGVkXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGF5bG9hZC5pc3MgIT09IGlzc3Vlcikge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwuX3ZhbGlkYXRlSnd0OiBJbnZhbGlkIGlzc3VlciBpbiB0b2tlblwiLCBwYXlsb2FkLmlzcyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBpc3N1ZXIgaW4gdG9rZW46IFwiICsgcGF5bG9hZC5pc3MpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFwYXlsb2FkLmF1ZCkge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwuX3ZhbGlkYXRlSnd0OiBhdWQgd2FzIG5vdCBwcm92aWRlZFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJhdWQgd2FzIG5vdCBwcm92aWRlZFwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHZhbGlkQXVkaWVuY2UgPSBwYXlsb2FkLmF1ZCA9PT0gYXVkaWVuY2UgfHwgKEFycmF5LmlzQXJyYXkocGF5bG9hZC5hdWQpICYmIHBheWxvYWQuYXVkLmluZGV4T2YoYXVkaWVuY2UpID49IDApO1xyXG4gICAgICAgICAgICBpZiAoIXZhbGlkQXVkaWVuY2UpIHtcclxuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogSW52YWxpZCBhdWRpZW5jZSBpbiB0b2tlblwiLCBwYXlsb2FkLmF1ZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBhdWRpZW5jZSBpbiB0b2tlbjogXCIgKyBwYXlsb2FkLmF1ZCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwYXlsb2FkLmF6cCAmJiBwYXlsb2FkLmF6cCAhPT0gYXVkaWVuY2UpIHtcclxuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogSW52YWxpZCBhenAgaW4gdG9rZW5cIiwgcGF5bG9hZC5henApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgYXpwIGluIHRva2VuOiBcIiArIHBheWxvYWQuYXpwKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGltZUluc2Vuc2l0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbG93ZXJOb3cgPSBub3cgKyBjbG9ja1NrZXc7XHJcbiAgICAgICAgICAgICAgICB2YXIgdXBwZXJOb3cgPSBub3cgLSBjbG9ja1NrZXc7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFwYXlsb2FkLmlhdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogaWF0IHdhcyBub3QgcHJvdmlkZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImlhdCB3YXMgbm90IHByb3ZpZGVkXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChsb3dlck5vdyA8IHBheWxvYWQuaWF0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwuX3ZhbGlkYXRlSnd0OiBpYXQgaXMgaW4gdGhlIGZ1dHVyZVwiLCBwYXlsb2FkLmlhdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImlhdCBpcyBpbiB0aGUgZnV0dXJlOiBcIiArIHBheWxvYWQuaWF0KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHBheWxvYWQubmJmICYmIGxvd2VyTm93IDwgcGF5bG9hZC5uYmYpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IG5iZiBpcyBpbiB0aGUgZnV0dXJlXCIsIHBheWxvYWQubmJmKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwibmJmIGlzIGluIHRoZSBmdXR1cmU6IFwiICsgcGF5bG9hZC5uYmYpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXBheWxvYWQuZXhwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwuX3ZhbGlkYXRlSnd0OiBleHAgd2FzIG5vdCBwcm92aWRlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiZXhwIHdhcyBub3QgcHJvdmlkZWRcIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHBheWxvYWQuZXhwIDwgdXBwZXJOb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IGV4cCBpcyBpbiB0aGUgcGFzdFwiLCBwYXlsb2FkLmV4cCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImV4cCBpcyBpbiB0aGUgcGFzdDpcIiArIHBheWxvYWQuZXhwKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocGF5bG9hZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgX3ZhbGlkYXRlSnd0KGp3dCwga2V5LCBpc3N1ZXIsIGF1ZGllbmNlLCBjbG9ja1NrZXcsIG5vdywgdGltZUluc2Vuc2l0aXZlKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gSm9zZVV0aWwudmFsaWRhdGVKd3RBdHRyaWJ1dGVzKGp3dCwgaXNzdWVyLCBhdWRpZW5jZSwgY2xvY2tTa2V3LCBub3csIHRpbWVJbnNlbnNpdGl2ZSkudGhlbihwYXlsb2FkID0+IHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFqd3MuSldTLnZlcmlmeShqd3QsIGtleSwgQWxsb3dlZFNpZ25pbmdBbGdzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IHNpZ25hdHVyZSB2YWxpZGF0aW9uIGZhaWxlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcInNpZ25hdHVyZSB2YWxpZGF0aW9uIGZhaWxlZFwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGF5bG9hZDtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoZSAmJiBlLm1lc3NhZ2UgfHwgZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcInNpZ25hdHVyZSB2YWxpZGF0aW9uIGZhaWxlZFwiKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIGhhc2hTdHJpbmcodmFsdWUsIGFsZykge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyeXB0by5VdGlsLmhhc2hTdHJpbmcodmFsdWUsIGFsZyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIExvZy5lcnJvcihlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIGhleFRvQmFzZTY0VXJsKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaGV4dG9iNjR1KHZhbHVlKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGp3cywgS2V5VXRpbCwgWDUwOSwgY3J5cHRvLCBoZXh0b2I2NHUsIGI2NHRvaGV4LCBBbGxvd2VkU2lnbmluZ0FsZ3MgfSBmcm9tICcuL2NyeXB0by9yc2EnO1xyXG5pbXBvcnQgZ2V0Sm9zZVV0aWwgZnJvbSAnLi9Kb3NlVXRpbEltcGwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEpvc2VVdGlsID0gZ2V0Sm9zZVV0aWwoeyBqd3MsIEtleVV0aWwsIFg1MDksIGNyeXB0bywgaGV4dG9iNjR1LCBiNjR0b2hleCwgQWxsb3dlZFNpZ25pbmdBbGdzIH0pO1xyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gJy4vR2xvYmFsLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBKc29uU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBhZGRpdGlvbmFsQ29udGVudFR5cGVzID0gbnVsbCwgXHJcbiAgICAgICAgWE1MSHR0cFJlcXVlc3RDdG9yID0gR2xvYmFsLlhNTEh0dHBSZXF1ZXN0LCBcclxuICAgICAgICBqd3RIYW5kbGVyID0gbnVsbFxyXG4gICAgKSB7XHJcbiAgICAgICAgaWYgKGFkZGl0aW9uYWxDb250ZW50VHlwZXMgJiYgQXJyYXkuaXNBcnJheShhZGRpdGlvbmFsQ29udGVudFR5cGVzKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbnRlbnRUeXBlcyA9IGFkZGl0aW9uYWxDb250ZW50VHlwZXMuc2xpY2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fY29udGVudFR5cGVzID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NvbnRlbnRUeXBlcy5wdXNoKCdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICAgICAgaWYgKGp3dEhhbmRsZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29udGVudFR5cGVzLnB1c2goJ2FwcGxpY2F0aW9uL2p3dCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fWE1MSHR0cFJlcXVlc3QgPSBYTUxIdHRwUmVxdWVzdEN0b3I7XHJcbiAgICAgICAgdGhpcy5fand0SGFuZGxlciA9IGp3dEhhbmRsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SnNvbih1cmwsIHRva2VuKSB7XHJcbiAgICAgICAgaWYgKCF1cmwpe1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJKc29uU2VydmljZS5nZXRKc29uOiBObyB1cmwgcGFzc2VkXCIpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1cmxcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBMb2cuZGVidWcoXCJKc29uU2VydmljZS5nZXRKc29uLCB1cmw6IFwiLCB1cmwpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlcSA9IG5ldyB0aGlzLl9YTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICByZXEub3BlbignR0VUJywgdXJsKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBhbGxvd2VkQ29udGVudFR5cGVzID0gdGhpcy5fY29udGVudFR5cGVzO1xyXG4gICAgICAgICAgICB2YXIgand0SGFuZGxlciA9IHRoaXMuX2p3dEhhbmRsZXI7XHJcblxyXG4gICAgICAgICAgICByZXEub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJKc29uU2VydmljZS5nZXRKc29uOiBIVFRQIHJlc3BvbnNlIHJlY2VpdmVkLCBzdGF0dXNcIiwgcmVxLnN0YXR1cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcS5zdGF0dXMgPT09IDIwMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudFR5cGUgPSByZXEuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSBhbGxvd2VkQ29udGVudFR5cGVzLmZpbmQoaXRlbT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlLnN0YXJ0c1dpdGgoaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm91bmQgPT0gXCJhcHBsaWNhdGlvbi9qd3RcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgand0SGFuZGxlcihyZXEpLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShyZXEucmVzcG9uc2VUZXh0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKc29uU2VydmljZS5nZXRKc29uOiBFcnJvciBwYXJzaW5nIEpTT04gcmVzcG9uc2VcIiwgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IoXCJJbnZhbGlkIHJlc3BvbnNlIENvbnRlbnQtVHlwZTogXCIgKyBjb250ZW50VHlwZSArIFwiLCBmcm9tIFVSTDogXCIgKyB1cmwpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChFcnJvcihyZXEuc3RhdHVzVGV4dCArIFwiIChcIiArIHJlcS5zdGF0dXMgKyBcIilcIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpzb25TZXJ2aWNlLmdldEpzb246IG5ldHdvcmsgZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IoXCJOZXR3b3JrIEVycm9yXCIpKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiSnNvblNlcnZpY2UuZ2V0SnNvbjogdG9rZW4gcGFzc2VkLCBzZXR0aW5nIEF1dGhvcml6YXRpb24gaGVhZGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIFwiQmVhcmVyIFwiICsgdG9rZW4pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXEuc2VuZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHBvc3RGb3JtKHVybCwgcGF5bG9hZCkge1xyXG4gICAgICAgIGlmICghdXJsKXtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiSnNvblNlcnZpY2UucG9zdEZvcm06IE5vIHVybCBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVybFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIExvZy5kZWJ1ZyhcIkpzb25TZXJ2aWNlLnBvc3RGb3JtLCB1cmw6IFwiLCB1cmwpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlcSA9IG5ldyB0aGlzLl9YTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICByZXEub3BlbignUE9TVCcsIHVybCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgYWxsb3dlZENvbnRlbnRUeXBlcyA9IHRoaXMuX2NvbnRlbnRUeXBlcztcclxuXHJcbiAgICAgICAgICAgIHJlcS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkpzb25TZXJ2aWNlLnBvc3RGb3JtOiBIVFRQIHJlc3BvbnNlIHJlY2VpdmVkLCBzdGF0dXNcIiwgcmVxLnN0YXR1cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcS5zdGF0dXMgPT09IDIwMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudFR5cGUgPSByZXEuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSBhbGxvd2VkQ29udGVudFR5cGVzLmZpbmQoaXRlbT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlLnN0YXJ0c1dpdGgoaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlcS5yZXNwb25zZVRleHQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpzb25TZXJ2aWNlLnBvc3RGb3JtOiBFcnJvciBwYXJzaW5nIEpTT04gcmVzcG9uc2VcIiwgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IoXCJJbnZhbGlkIHJlc3BvbnNlIENvbnRlbnQtVHlwZTogXCIgKyBjb250ZW50VHlwZSArIFwiLCBmcm9tIFVSTDogXCIgKyB1cmwpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcS5zdGF0dXMgPT09IDQwMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudFR5cGUgPSByZXEuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSBhbGxvd2VkQ29udGVudFR5cGVzLmZpbmQoaXRlbT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlLnN0YXJ0c1dpdGgoaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBheWxvYWQgPSBKU09OLnBhcnNlKHJlcS5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkICYmIHBheWxvYWQuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSnNvblNlcnZpY2UucG9zdEZvcm06IEVycm9yIGZyb20gc2VydmVyOiBcIiwgcGF5bG9hZC5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IocGF5bG9hZC5lcnJvcikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKc29uU2VydmljZS5wb3N0Rm9ybTogRXJyb3IgcGFyc2luZyBKU09OIHJlc3BvbnNlXCIsIGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IocmVxLnN0YXR1c1RleHQgKyBcIiAoXCIgKyByZXEuc3RhdHVzICsgXCIpXCIpKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKc29uU2VydmljZS5wb3N0Rm9ybTogbmV0d29yayBlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChFcnJvcihcIk5ldHdvcmsgRXJyb3JcIikpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgbGV0IGJvZHkgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IobGV0IGtleSBpbiBwYXlsb2FkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gcGF5bG9hZFtrZXldO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYm9keS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gXCImXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBib2R5ICs9IGVuY29kZVVSSUNvbXBvbmVudChrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gXCI9XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keSArPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcclxuICAgICAgICAgICAgcmVxLnNlbmQoYm9keSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxubGV0IG5vcExvZ2dlciA9IHtcclxuICAgIGRlYnVnKCl7fSxcclxuICAgIGluZm8oKXt9LFxyXG4gICAgd2Fybigpe30sXHJcbiAgICBlcnJvcigpe31cclxufTtcclxuXHJcbmNvbnN0IE5PTkUgPSAwO1xyXG5jb25zdCBFUlJPUiA9IDE7XHJcbmNvbnN0IFdBUk4gPSAyO1xyXG5jb25zdCBJTkZPID0gMztcclxuY29uc3QgREVCVUcgPSA0O1xyXG5cclxubGV0IGxvZ2dlcjtcclxubGV0IGxldmVsO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvZyB7XHJcbiAgICBzdGF0aWMgZ2V0IE5PTkUoKSB7cmV0dXJuIE5PTkV9O1xyXG4gICAgc3RhdGljIGdldCBFUlJPUigpIHtyZXR1cm4gRVJST1J9O1xyXG4gICAgc3RhdGljIGdldCBXQVJOKCkge3JldHVybiBXQVJOfTtcclxuICAgIHN0YXRpYyBnZXQgSU5GTygpIHtyZXR1cm4gSU5GT307XHJcbiAgICBzdGF0aWMgZ2V0IERFQlVHKCkge3JldHVybiBERUJVR307XHJcbiAgICBcclxuICAgIHN0YXRpYyByZXNldCgpe1xyXG4gICAgICAgIGxldmVsID0gSU5GTztcclxuICAgICAgICBsb2dnZXIgPSBub3BMb2dnZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBnZXQgbGV2ZWwoKXtcclxuICAgICAgICByZXR1cm4gbGV2ZWw7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc2V0IGxldmVsKHZhbHVlKXtcclxuICAgICAgICBpZiAoTk9ORSA8PSB2YWx1ZSAmJiB2YWx1ZSA8PSBERUJVRyl7XHJcbiAgICAgICAgICAgIGxldmVsID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGxvZyBsZXZlbFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBnZXQgbG9nZ2VyKCl7XHJcbiAgICAgICAgcmV0dXJuIGxvZ2dlcjtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzZXQgbG9nZ2VyKHZhbHVlKXtcclxuICAgICAgICBpZiAoIXZhbHVlLmRlYnVnICYmIHZhbHVlLmluZm8pIHtcclxuICAgICAgICAgICAgLy8ganVzdCB0byBzdGF5IGJhY2t3YXJkcyBjb21wYXQuIGNhbiByZW1vdmUgaW4gMi4wXHJcbiAgICAgICAgICAgIHZhbHVlLmRlYnVnID0gdmFsdWUuaW5mbztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZS5kZWJ1ZyAmJiB2YWx1ZS5pbmZvICYmIHZhbHVlLndhcm4gJiYgdmFsdWUuZXJyb3Ipe1xyXG4gICAgICAgICAgICBsb2dnZXIgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbG9nZ2VyXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIGRlYnVnKC4uLmFyZ3Mpe1xyXG4gICAgICAgIGlmIChsZXZlbCA+PSBERUJVRyl7XHJcbiAgICAgICAgICAgIGxvZ2dlci5kZWJ1Zy5hcHBseShsb2dnZXIsIEFycmF5LmZyb20oYXJncykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXRpYyBpbmZvKC4uLmFyZ3Mpe1xyXG4gICAgICAgIGlmIChsZXZlbCA+PSBJTkZPKXtcclxuICAgICAgICAgICAgbG9nZ2VyLmluZm8uYXBwbHkobG9nZ2VyLCBBcnJheS5mcm9tKGFyZ3MpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgd2FybiguLi5hcmdzKXtcclxuICAgICAgICBpZiAobGV2ZWwgPj0gV0FSTil7XHJcbiAgICAgICAgICAgIGxvZ2dlci53YXJuLmFwcGx5KGxvZ2dlciwgQXJyYXkuZnJvbShhcmdzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhdGljIGVycm9yKC4uLmFyZ3Mpe1xyXG4gICAgICAgIGlmIChsZXZlbCA+PSBFUlJPUil7XHJcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvci5hcHBseShsb2dnZXIsIEFycmF5LmZyb20oYXJncykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuTG9nLnJlc2V0KCk7XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgSnNvblNlcnZpY2UgfSBmcm9tICcuL0pzb25TZXJ2aWNlLmpzJztcclxuXHJcbmNvbnN0IE9pZGNNZXRhZGF0YVVybFBhdGggPSAnLndlbGwta25vd24vb3BlbmlkLWNvbmZpZ3VyYXRpb24nO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1ldGFkYXRhU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgSnNvblNlcnZpY2VDdG9yID0gSnNvblNlcnZpY2UpIHtcclxuICAgICAgICBpZiAoIXNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk1ldGFkYXRhU2VydmljZTogTm8gc2V0dGluZ3MgcGFzc2VkIHRvIE1ldGFkYXRhU2VydmljZVwiKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2V0dGluZ3NcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9zZXR0aW5ncyA9IHNldHRpbmdzO1xyXG4gICAgICAgIHRoaXMuX2pzb25TZXJ2aWNlID0gbmV3IEpzb25TZXJ2aWNlQ3RvcihbJ2FwcGxpY2F0aW9uL2p3ay1zZXQranNvbiddKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWV0YWRhdGFVcmwoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9tZXRhZGF0YVVybCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MubWV0YWRhdGFVcmwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhVXJsID0gdGhpcy5fc2V0dGluZ3MubWV0YWRhdGFVcmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tZXRhZGF0YVVybCA9IHRoaXMuX3NldHRpbmdzLmF1dGhvcml0eTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWV0YWRhdGFVcmwgJiYgdGhpcy5fbWV0YWRhdGFVcmwuaW5kZXhPZihPaWRjTWV0YWRhdGFVcmxQYXRoKSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWV0YWRhdGFVcmxbdGhpcy5fbWV0YWRhdGFVcmwubGVuZ3RoIC0gMV0gIT09ICcvJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tZXRhZGF0YVVybCArPSAnLyc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhVXJsICs9IE9pZGNNZXRhZGF0YVVybFBhdGg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVVybDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNZXRhZGF0YSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MubWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldE1ldGFkYXRhOiBSZXR1cm5pbmcgbWV0YWRhdGEgZnJvbSBzZXR0aW5nc1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9zZXR0aW5ncy5tZXRhZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMubWV0YWRhdGFVcmwpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiTWV0YWRhdGFTZXJ2aWNlLmdldE1ldGFkYXRhOiBObyBhdXRob3JpdHkgb3IgbWV0YWRhdGFVcmwgY29uZmlndXJlZCBvbiBzZXR0aW5nc1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGF1dGhvcml0eSBvciBtZXRhZGF0YVVybCBjb25maWd1cmVkIG9uIHNldHRpbmdzXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIExvZy5kZWJ1ZyhcIk1ldGFkYXRhU2VydmljZS5nZXRNZXRhZGF0YTogZ2V0dGluZyBtZXRhZGF0YSBmcm9tXCIsIHRoaXMubWV0YWRhdGFVcmwpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fanNvblNlcnZpY2UuZ2V0SnNvbih0aGlzLm1ldGFkYXRhVXJsKVxyXG4gICAgICAgICAgICAudGhlbihtZXRhZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJNZXRhZGF0YVNlcnZpY2UuZ2V0TWV0YWRhdGE6IGpzb24gcmVjZWl2ZWRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXR0aW5ncy5tZXRhZGF0YSA9IG1ldGFkYXRhO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGFkYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJc3N1ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJpc3N1ZXJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXV0aG9yaXphdGlvbkVuZHBvaW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwiYXV0aG9yaXphdGlvbl9lbmRwb2ludFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2VySW5mb0VuZHBvaW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwidXNlcmluZm9fZW5kcG9pbnRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG9rZW5FbmRwb2ludChvcHRpb25hbD10cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJ0b2tlbl9lbmRwb2ludFwiLCBvcHRpb25hbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2hlY2tTZXNzaW9uSWZyYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwiY2hlY2tfc2Vzc2lvbl9pZnJhbWVcIiwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RW5kU2Vzc2lvbkVuZHBvaW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwiZW5kX3Nlc3Npb25fZW5kcG9pbnRcIiwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmV2b2NhdGlvbkVuZHBvaW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwicmV2b2NhdGlvbl9lbmRwb2ludFwiLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRLZXlzRW5kcG9pbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJqd2tzX3VyaVwiLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0TWV0YWRhdGFQcm9wZXJ0eShuYW1lLCBvcHRpb25hbD1mYWxzZSkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIk1ldGFkYXRhU2VydmljZS5nZXRNZXRhZGF0YVByb3BlcnR5IGZvcjogXCIgKyBuYW1lKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TWV0YWRhdGEoKS50aGVuKG1ldGFkYXRhID0+IHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldE1ldGFkYXRhUHJvcGVydHk6IG1ldGFkYXRhIHJlY2lldmVkXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1ldGFkYXRhW25hbWVdID09PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cud2FybihcIk1ldGFkYXRhU2VydmljZS5nZXRNZXRhZGF0YVByb3BlcnR5OiBNZXRhZGF0YSBkb2VzIG5vdCBjb250YWluIG9wdGlvbmFsIHByb3BlcnR5IFwiICsgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIk1ldGFkYXRhU2VydmljZS5nZXRNZXRhZGF0YVByb3BlcnR5OiBNZXRhZGF0YSBkb2VzIG5vdCBjb250YWluIHByb3BlcnR5IFwiICsgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0YWRhdGEgZG9lcyBub3QgY29udGFpbiBwcm9wZXJ0eSBcIiArIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbWV0YWRhdGFbbmFtZV07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2lnbmluZ0tleXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLnNpZ25pbmdLZXlzKSB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk1ldGFkYXRhU2VydmljZS5nZXRTaWduaW5nS2V5czogUmV0dXJuaW5nIHNpZ25pbmdLZXlzIGZyb20gc2V0dGluZ3NcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fc2V0dGluZ3Muc2lnbmluZ0tleXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJqd2tzX3VyaVwiKS50aGVuKGp3a3NfdXJpID0+IHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldFNpZ25pbmdLZXlzOiBqd2tzX3VyaSByZWNlaXZlZFwiLCBqd2tzX3VyaSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvblNlcnZpY2UuZ2V0SnNvbihqd2tzX3VyaSkudGhlbihrZXlTZXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldFNpZ25pbmdLZXlzOiBrZXkgc2V0IHJlY2VpdmVkXCIsIGtleVNldCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFrZXlTZXQua2V5cykge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIk1ldGFkYXRhU2VydmljZS5nZXRTaWduaW5nS2V5czogTWlzc2luZyBrZXlzIG9uIGtleXNldFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIGtleXMgb24ga2V5c2V0XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldHRpbmdzLnNpZ25pbmdLZXlzID0ga2V5U2V0LmtleXM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3Muc2lnbmluZ0tleXM7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgT2lkY0NsaWVudFNldHRpbmdzIH0gZnJvbSAnLi9PaWRjQ2xpZW50U2V0dGluZ3MuanMnO1xyXG5pbXBvcnQgeyBFcnJvclJlc3BvbnNlIH0gZnJvbSAnLi9FcnJvclJlc3BvbnNlLmpzJztcclxuaW1wb3J0IHsgU2lnbmluUmVxdWVzdCB9IGZyb20gJy4vU2lnbmluUmVxdWVzdC5qcyc7XHJcbmltcG9ydCB7IFNpZ25pblJlc3BvbnNlIH0gZnJvbSAnLi9TaWduaW5SZXNwb25zZS5qcyc7XHJcbmltcG9ydCB7IFNpZ25vdXRSZXF1ZXN0IH0gZnJvbSAnLi9TaWdub3V0UmVxdWVzdC5qcyc7XHJcbmltcG9ydCB7IFNpZ25vdXRSZXNwb25zZSB9IGZyb20gJy4vU2lnbm91dFJlc3BvbnNlLmpzJztcclxuaW1wb3J0IHsgU2lnbmluU3RhdGUgfSBmcm9tICcuL1NpZ25pblN0YXRlLmpzJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL1N0YXRlLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBPaWRjQ2xpZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzID0ge30pIHtcclxuICAgICAgICBpZiAoc2V0dGluZ3MgaW5zdGFuY2VvZiBPaWRjQ2xpZW50U2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldHRpbmdzID0gbmV3IE9pZGNDbGllbnRTZXR0aW5ncyhzZXR0aW5ncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBfc3RhdGVTdG9yZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5zdGF0ZVN0b3JlO1xyXG4gICAgfVxyXG4gICAgZ2V0IF92YWxpZGF0b3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MudmFsaWRhdG9yO1xyXG4gICAgfVxyXG4gICAgZ2V0IF9tZXRhZGF0YVNlcnZpY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MubWV0YWRhdGFTZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzZXR0aW5ncygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3M7XHJcbiAgICB9XHJcbiAgICBnZXQgbWV0YWRhdGFTZXJ2aWNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlU2lnbmluUmVxdWVzdCh7XHJcbiAgICAgICAgcmVzcG9uc2VfdHlwZSwgc2NvcGUsIHJlZGlyZWN0X3VyaSxcclxuICAgICAgICAvLyBkYXRhIHdhcyBtZWFudCB0byBiZSB0aGUgcGxhY2UgYSBjYWxsZXIgY291bGQgaW5kaWNhdGUgdGhlIGRhdGEgdG9cclxuICAgICAgICAvLyBoYXZlIHJvdW5kIHRyaXBwZWQsIGJ1dCBwZW9wbGUgd2VyZSBnZXR0aW5nIGNvbmZ1c2VkLCBzbyBpIGFkZGVkIHN0YXRlIChzaW5jZSB0aGF0IG1hdGNoZXMgdGhlIHNwZWMpXHJcbiAgICAgICAgLy8gYW5kIHNvIG5vdyBpZiBkYXRhIGlzIG5vdCBwYXNzZWQsIGJ1dCBzdGF0ZSBpcyB0aGVuIHN0YXRlIHdpbGwgYmUgdXNlZFxyXG4gICAgICAgIGRhdGEsIHN0YXRlLCBwcm9tcHQsIGRpc3BsYXksIG1heF9hZ2UsIHVpX2xvY2FsZXMsIGlkX3Rva2VuX2hpbnQsIGxvZ2luX2hpbnQsIGFjcl92YWx1ZXMsXHJcbiAgICAgICAgcmVzb3VyY2UsIHJlcXVlc3QsIHJlcXVlc3RfdXJpLCByZXNwb25zZV9tb2RlLCBleHRyYVF1ZXJ5UGFyYW1zLCBleHRyYVRva2VuUGFyYW1zLCByZXF1ZXN0X3R5cGUsIHNraXBVc2VySW5mbyB9ID0ge30sXHJcbiAgICAgICAgc3RhdGVTdG9yZVxyXG4gICAgKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5jcmVhdGVTaWduaW5SZXF1ZXN0XCIpO1xyXG5cclxuICAgICAgICBsZXQgY2xpZW50X2lkID0gdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkO1xyXG4gICAgICAgIHJlc3BvbnNlX3R5cGUgPSByZXNwb25zZV90eXBlIHx8IHRoaXMuX3NldHRpbmdzLnJlc3BvbnNlX3R5cGU7XHJcbiAgICAgICAgc2NvcGUgPSBzY29wZSB8fCB0aGlzLl9zZXR0aW5ncy5zY29wZTtcclxuICAgICAgICByZWRpcmVjdF91cmkgPSByZWRpcmVjdF91cmkgfHwgdGhpcy5fc2V0dGluZ3MucmVkaXJlY3RfdXJpO1xyXG5cclxuICAgICAgICAvLyBpZF90b2tlbl9oaW50LCBsb2dpbl9oaW50IGFyZW4ndCBhbGxvd2VkIG9uIF9zZXR0aW5nc1xyXG4gICAgICAgIHByb21wdCA9IHByb21wdCB8fCB0aGlzLl9zZXR0aW5ncy5wcm9tcHQ7XHJcbiAgICAgICAgZGlzcGxheSA9IGRpc3BsYXkgfHwgdGhpcy5fc2V0dGluZ3MuZGlzcGxheTtcclxuICAgICAgICBtYXhfYWdlID0gbWF4X2FnZSB8fCB0aGlzLl9zZXR0aW5ncy5tYXhfYWdlO1xyXG4gICAgICAgIHVpX2xvY2FsZXMgPSB1aV9sb2NhbGVzIHx8IHRoaXMuX3NldHRpbmdzLnVpX2xvY2FsZXM7XHJcbiAgICAgICAgYWNyX3ZhbHVlcyA9IGFjcl92YWx1ZXMgfHwgdGhpcy5fc2V0dGluZ3MuYWNyX3ZhbHVlcztcclxuICAgICAgICByZXNvdXJjZSA9IHJlc291cmNlIHx8IHRoaXMuX3NldHRpbmdzLnJlc291cmNlO1xyXG4gICAgICAgIHJlc3BvbnNlX21vZGUgPSByZXNwb25zZV9tb2RlIHx8IHRoaXMuX3NldHRpbmdzLnJlc3BvbnNlX21vZGU7XHJcbiAgICAgICAgZXh0cmFRdWVyeVBhcmFtcyA9IGV4dHJhUXVlcnlQYXJhbXMgfHwgdGhpcy5fc2V0dGluZ3MuZXh0cmFRdWVyeVBhcmFtcztcclxuICAgICAgICBleHRyYVRva2VuUGFyYW1zID0gZXh0cmFUb2tlblBhcmFtcyB8fCB0aGlzLl9zZXR0aW5ncy5leHRyYVRva2VuUGFyYW1zO1xyXG5cclxuICAgICAgICBsZXQgYXV0aG9yaXR5ID0gdGhpcy5fc2V0dGluZ3MuYXV0aG9yaXR5O1xyXG5cclxuICAgICAgICBpZiAoU2lnbmluUmVxdWVzdC5pc0NvZGUocmVzcG9uc2VfdHlwZSkgJiYgcmVzcG9uc2VfdHlwZSAhPT0gXCJjb2RlXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk9wZW5JRCBDb25uZWN0IGh5YnJpZCBmbG93IGlzIG5vdCBzdXBwb3J0ZWRcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRBdXRob3JpemF0aW9uRW5kcG9pbnQoKS50aGVuKHVybCA9PiB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQuY3JlYXRlU2lnbmluUmVxdWVzdDogUmVjZWl2ZWQgYXV0aG9yaXphdGlvbiBlbmRwb2ludFwiLCB1cmwpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHNpZ25pblJlcXVlc3QgPSBuZXcgU2lnbmluUmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgICAgICBjbGllbnRfaWQsXHJcbiAgICAgICAgICAgICAgICByZWRpcmVjdF91cmksXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZV90eXBlLFxyXG4gICAgICAgICAgICAgICAgc2NvcGUsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhIHx8IHN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYXV0aG9yaXR5LFxyXG4gICAgICAgICAgICAgICAgcHJvbXB0LCBkaXNwbGF5LCBtYXhfYWdlLCB1aV9sb2NhbGVzLCBpZF90b2tlbl9oaW50LCBsb2dpbl9oaW50LCBhY3JfdmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgcmVzb3VyY2UsIHJlcXVlc3QsIHJlcXVlc3RfdXJpLCBleHRyYVF1ZXJ5UGFyYW1zLCBleHRyYVRva2VuUGFyYW1zLCByZXF1ZXN0X3R5cGUsIHJlc3BvbnNlX21vZGUsXHJcbiAgICAgICAgICAgICAgICBjbGllbnRfc2VjcmV0OiB0aGlzLl9zZXR0aW5ncy5jbGllbnRfc2VjcmV0LFxyXG4gICAgICAgICAgICAgICAgc2tpcFVzZXJJbmZvXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNpZ25pblN0YXRlID0gc2lnbmluUmVxdWVzdC5zdGF0ZTtcclxuICAgICAgICAgICAgc3RhdGVTdG9yZSA9IHN0YXRlU3RvcmUgfHwgdGhpcy5fc3RhdGVTdG9yZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVN0b3JlLnNldChzaWduaW5TdGF0ZS5pZCwgc2lnbmluU3RhdGUudG9TdG9yYWdlU3RyaW5nKCkpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNpZ25pblJlcXVlc3Q7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlYWRTaWduaW5SZXNwb25zZVN0YXRlKHVybCwgc3RhdGVTdG9yZSwgcmVtb3ZlU3RhdGUgPSBmYWxzZSkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQucmVhZFNpZ25pblJlc3BvbnNlU3RhdGVcIik7XHJcblxyXG4gICAgICAgIGxldCB1c2VRdWVyeSA9IHRoaXMuX3NldHRpbmdzLnJlc3BvbnNlX21vZGUgPT09IFwicXVlcnlcIiB8fCBcclxuICAgICAgICAgICAgKCF0aGlzLl9zZXR0aW5ncy5yZXNwb25zZV9tb2RlICYmIFNpZ25pblJlcXVlc3QuaXNDb2RlKHRoaXMuX3NldHRpbmdzLnJlc3BvbnNlX3R5cGUpKTtcclxuICAgICAgICBsZXQgZGVsaW1pdGVyID0gdXNlUXVlcnkgPyBcIj9cIiA6IFwiI1wiO1xyXG5cclxuICAgICAgICB2YXIgcmVzcG9uc2UgPSBuZXcgU2lnbmluUmVzcG9uc2UodXJsLCBkZWxpbWl0ZXIpO1xyXG5cclxuICAgICAgICBpZiAoIXJlc3BvbnNlLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk9pZGNDbGllbnQucmVhZFNpZ25pblJlc3BvbnNlU3RhdGU6IE5vIHN0YXRlIGluIHJlc3BvbnNlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gc3RhdGUgaW4gcmVzcG9uc2VcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGVTdG9yZSA9IHN0YXRlU3RvcmUgfHwgdGhpcy5fc3RhdGVTdG9yZTtcclxuXHJcbiAgICAgICAgdmFyIHN0YXRlQXBpID0gcmVtb3ZlU3RhdGUgPyBzdGF0ZVN0b3JlLnJlbW92ZS5iaW5kKHN0YXRlU3RvcmUpIDogc3RhdGVTdG9yZS5nZXQuYmluZChzdGF0ZVN0b3JlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN0YXRlQXBpKHJlc3BvbnNlLnN0YXRlKS50aGVuKHN0b3JlZFN0YXRlU3RyaW5nID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzdG9yZWRTdGF0ZVN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiT2lkY0NsaWVudC5yZWFkU2lnbmluUmVzcG9uc2VTdGF0ZTogTm8gbWF0Y2hpbmcgc3RhdGUgZm91bmQgaW4gc3RvcmFnZVwiKTtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIG1hdGNoaW5nIHN0YXRlIGZvdW5kIGluIHN0b3JhZ2VcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBzdGF0ZSA9IFNpZ25pblN0YXRlLmZyb21TdG9yYWdlU3RyaW5nKHN0b3JlZFN0YXRlU3RyaW5nKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtzdGF0ZSwgcmVzcG9uc2V9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2Nlc3NTaWduaW5SZXNwb25zZSh1cmwsIHN0YXRlU3RvcmUpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJPaWRjQ2xpZW50LnByb2Nlc3NTaWduaW5SZXNwb25zZVwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZFNpZ25pblJlc3BvbnNlU3RhdGUodXJsLCBzdGF0ZVN0b3JlLCB0cnVlKS50aGVuKCh7c3RhdGUsIHJlc3BvbnNlfSkgPT4ge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJPaWRjQ2xpZW50LnByb2Nlc3NTaWduaW5SZXNwb25zZTogUmVjZWl2ZWQgc3RhdGUgZnJvbSBzdG9yYWdlOyB2YWxpZGF0aW5nIHJlc3BvbnNlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdG9yLnZhbGlkYXRlU2lnbmluUmVzcG9uc2Uoc3RhdGUsIHJlc3BvbnNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVTaWdub3V0UmVxdWVzdCh7aWRfdG9rZW5faGludCwgZGF0YSwgc3RhdGUsIHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSwgZXh0cmFRdWVyeVBhcmFtcywgcmVxdWVzdF90eXBlIH0gPSB7fSxcclxuICAgICAgICBzdGF0ZVN0b3JlXHJcbiAgICApIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJPaWRjQ2xpZW50LmNyZWF0ZVNpZ25vdXRSZXF1ZXN0XCIpO1xyXG5cclxuICAgICAgICBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmkgPSBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmkgfHwgdGhpcy5fc2V0dGluZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpO1xyXG4gICAgICAgIGV4dHJhUXVlcnlQYXJhbXMgPSBleHRyYVF1ZXJ5UGFyYW1zIHx8IHRoaXMuX3NldHRpbmdzLmV4dHJhUXVlcnlQYXJhbXM7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0RW5kU2Vzc2lvbkVuZHBvaW50KCkudGhlbih1cmwgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXVybCkge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiT2lkY0NsaWVudC5jcmVhdGVTaWdub3V0UmVxdWVzdDogTm8gZW5kIHNlc3Npb24gZW5kcG9pbnQgdXJsIHJldHVybmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm8gZW5kIHNlc3Npb24gZW5kcG9pbnRcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQuY3JlYXRlU2lnbm91dFJlcXVlc3Q6IFJlY2VpdmVkIGVuZCBzZXNzaW9uIGVuZHBvaW50XCIsIHVybCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBTaWdub3V0UmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgICAgICBpZF90b2tlbl9oaW50LFxyXG4gICAgICAgICAgICAgICAgcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YSB8fCBzdGF0ZSxcclxuICAgICAgICAgICAgICAgIGV4dHJhUXVlcnlQYXJhbXMsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0X3R5cGVcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2lnbm91dFN0YXRlID0gcmVxdWVzdC5zdGF0ZTtcclxuICAgICAgICAgICAgaWYgKHNpZ25vdXRTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5jcmVhdGVTaWdub3V0UmVxdWVzdDogU2lnbm91dCByZXF1ZXN0IGhhcyBzdGF0ZSB0byBwZXJzaXN0XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHN0YXRlU3RvcmUgPSBzdGF0ZVN0b3JlIHx8IHRoaXMuX3N0YXRlU3RvcmU7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZVN0b3JlLnNldChzaWdub3V0U3RhdGUuaWQsIHNpZ25vdXRTdGF0ZS50b1N0b3JhZ2VTdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlYWRTaWdub3V0UmVzcG9uc2VTdGF0ZSh1cmwsIHN0YXRlU3RvcmUsIHJlbW92ZVN0YXRlID0gZmFsc2UpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJPaWRjQ2xpZW50LnJlYWRTaWdub3V0UmVzcG9uc2VTdGF0ZVwiKTtcclxuXHJcbiAgICAgICAgdmFyIHJlc3BvbnNlID0gbmV3IFNpZ25vdXRSZXNwb25zZSh1cmwpO1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uuc3RhdGUpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5yZWFkU2lnbm91dFJlc3BvbnNlU3RhdGU6IE5vIHN0YXRlIGluIHJlc3BvbnNlXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cud2FybihcIk9pZGNDbGllbnQucmVhZFNpZ25vdXRSZXNwb25zZVN0YXRlOiBSZXNwb25zZSB3YXMgZXJyb3I6IFwiLCByZXNwb25zZS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yUmVzcG9uc2UocmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7c3RhdGU6IHVuZGVmaW5lZCwgcmVzcG9uc2V9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzdGF0ZUtleSA9IHJlc3BvbnNlLnN0YXRlO1xyXG5cclxuICAgICAgICBzdGF0ZVN0b3JlID0gc3RhdGVTdG9yZSB8fCB0aGlzLl9zdGF0ZVN0b3JlO1xyXG5cclxuICAgICAgICB2YXIgc3RhdGVBcGkgPSByZW1vdmVTdGF0ZSA/IHN0YXRlU3RvcmUucmVtb3ZlLmJpbmQoc3RhdGVTdG9yZSkgOiBzdGF0ZVN0b3JlLmdldC5iaW5kKHN0YXRlU3RvcmUpO1xyXG4gICAgICAgIHJldHVybiBzdGF0ZUFwaShzdGF0ZUtleSkudGhlbihzdG9yZWRTdGF0ZVN0cmluZyA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc3RvcmVkU3RhdGVTdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIk9pZGNDbGllbnQucmVhZFNpZ25vdXRSZXNwb25zZVN0YXRlOiBObyBtYXRjaGluZyBzdGF0ZSBmb3VuZCBpbiBzdG9yYWdlXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gbWF0Y2hpbmcgc3RhdGUgZm91bmQgaW4gc3RvcmFnZVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHN0YXRlID0gU3RhdGUuZnJvbVN0b3JhZ2VTdHJpbmcoc3RvcmVkU3RhdGVTdHJpbmcpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtzdGF0ZSwgcmVzcG9uc2V9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2Nlc3NTaWdub3V0UmVzcG9uc2UodXJsLCBzdGF0ZVN0b3JlKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5wcm9jZXNzU2lnbm91dFJlc3BvbnNlXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yZWFkU2lnbm91dFJlc3BvbnNlU3RhdGUodXJsLCBzdGF0ZVN0b3JlLCB0cnVlKS50aGVuKCh7c3RhdGUsIHJlc3BvbnNlfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQucHJvY2Vzc1NpZ25vdXRSZXNwb25zZTogUmVjZWl2ZWQgc3RhdGUgZnJvbSBzdG9yYWdlOyB2YWxpZGF0aW5nIHJlc3BvbnNlXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRvci52YWxpZGF0ZVNpZ25vdXRSZXNwb25zZShzdGF0ZSwgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5wcm9jZXNzU2lnbm91dFJlc3BvbnNlOiBObyBzdGF0ZSBmcm9tIHN0b3JhZ2U7IHNraXBwaW5nIHZhbGlkYXRpbmcgcmVzcG9uc2VcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhclN0YWxlU3RhdGUoc3RhdGVTdG9yZSkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQuY2xlYXJTdGFsZVN0YXRlXCIpO1xyXG5cclxuICAgICAgICBzdGF0ZVN0b3JlID0gc3RhdGVTdG9yZSB8fCB0aGlzLl9zdGF0ZVN0b3JlO1xyXG5cclxuICAgICAgICByZXR1cm4gU3RhdGUuY2xlYXJTdGFsZVN0YXRlKHN0YXRlU3RvcmUsIHRoaXMuc2V0dGluZ3Muc3RhbGVTdGF0ZUFnZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5pbXBvcnQgeyBDbG9ja1NlcnZpY2UgfSBmcm9tICcuL0Nsb2NrU2VydmljZS5qcyc7XHJcbmltcG9ydCB7IFdlYlN0b3JhZ2VTdGF0ZVN0b3JlIH0gZnJvbSAnLi9XZWJTdG9yYWdlU3RhdGVTdG9yZS5qcyc7XHJcbmltcG9ydCB7IFJlc3BvbnNlVmFsaWRhdG9yIH0gZnJvbSAnLi9SZXNwb25zZVZhbGlkYXRvci5qcyc7XHJcbmltcG9ydCB7IE1ldGFkYXRhU2VydmljZSB9IGZyb20gJy4vTWV0YWRhdGFTZXJ2aWNlLmpzJztcclxuXHJcbmNvbnN0IE9pZGNNZXRhZGF0YVVybFBhdGggPSAnLndlbGwta25vd24vb3BlbmlkLWNvbmZpZ3VyYXRpb24nO1xyXG5cclxuY29uc3QgRGVmYXVsdFJlc3BvbnNlVHlwZSA9IFwiaWRfdG9rZW5cIjtcclxuY29uc3QgRGVmYXVsdFNjb3BlID0gXCJvcGVuaWRcIjtcclxuY29uc3QgRGVmYXVsdFN0YWxlU3RhdGVBZ2UgPSA2MCAqIDE1OyAvLyBzZWNvbmRzXHJcbmNvbnN0IERlZmF1bHRDbG9ja1NrZXdJblNlY29uZHMgPSA2MCAqIDU7XHJcblxyXG5leHBvcnQgY2xhc3MgT2lkY0NsaWVudFNldHRpbmdzIHtcclxuICAgIGNvbnN0cnVjdG9yKHtcclxuICAgICAgICAvLyBtZXRhZGF0YSByZWxhdGVkXHJcbiAgICAgICAgYXV0aG9yaXR5LCBtZXRhZGF0YVVybCwgbWV0YWRhdGEsIHNpZ25pbmdLZXlzLFxyXG4gICAgICAgIC8vIGNsaWVudCByZWxhdGVkXHJcbiAgICAgICAgY2xpZW50X2lkLCBjbGllbnRfc2VjcmV0LCByZXNwb25zZV90eXBlID0gRGVmYXVsdFJlc3BvbnNlVHlwZSwgc2NvcGUgPSBEZWZhdWx0U2NvcGUsXHJcbiAgICAgICAgcmVkaXJlY3RfdXJpLCBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmksXHJcbiAgICAgICAgLy8gb3B0aW9uYWwgcHJvdG9jb2xcclxuICAgICAgICBwcm9tcHQsIGRpc3BsYXksIG1heF9hZ2UsIHVpX2xvY2FsZXMsIGFjcl92YWx1ZXMsIHJlc291cmNlLCByZXNwb25zZV9tb2RlLFxyXG4gICAgICAgIC8vIGJlaGF2aW9yIGZsYWdzXHJcbiAgICAgICAgZmlsdGVyUHJvdG9jb2xDbGFpbXMgPSB0cnVlLCBsb2FkVXNlckluZm8gPSB0cnVlLFxyXG4gICAgICAgIHN0YWxlU3RhdGVBZ2UgPSBEZWZhdWx0U3RhbGVTdGF0ZUFnZSwgXHJcbiAgICAgICAgY2xvY2tTa2V3ID0gRGVmYXVsdENsb2NrU2tld0luU2Vjb25kcyxcclxuICAgICAgICBjbG9ja1NlcnZpY2UgPSBuZXcgQ2xvY2tTZXJ2aWNlKCksXHJcbiAgICAgICAgdXNlckluZm9Kd3RJc3N1ZXIgPSAnT1AnLFxyXG4gICAgICAgIC8vIG90aGVyIGJlaGF2aW9yXHJcbiAgICAgICAgc3RhdGVTdG9yZSA9IG5ldyBXZWJTdG9yYWdlU3RhdGVTdG9yZSgpLFxyXG4gICAgICAgIFJlc3BvbnNlVmFsaWRhdG9yQ3RvciA9IFJlc3BvbnNlVmFsaWRhdG9yLFxyXG4gICAgICAgIE1ldGFkYXRhU2VydmljZUN0b3IgPSBNZXRhZGF0YVNlcnZpY2UsXHJcbiAgICAgICAgLy8gZXh0cmEgcXVlcnkgcGFyYW1zXHJcbiAgICAgICAgZXh0cmFRdWVyeVBhcmFtcyA9IHt9LFxyXG4gICAgICAgIGV4dHJhVG9rZW5QYXJhbXMgPSB7fVxyXG4gICAgfSA9IHt9KSB7XHJcblxyXG4gICAgICAgIHRoaXMuX2F1dGhvcml0eSA9IGF1dGhvcml0eTtcclxuICAgICAgICB0aGlzLl9tZXRhZGF0YVVybCA9IG1ldGFkYXRhVXJsO1xyXG4gICAgICAgIHRoaXMuX21ldGFkYXRhID0gbWV0YWRhdGE7XHJcbiAgICAgICAgdGhpcy5fc2lnbmluZ0tleXMgPSBzaWduaW5nS2V5cztcclxuXHJcbiAgICAgICAgdGhpcy5fY2xpZW50X2lkID0gY2xpZW50X2lkO1xyXG4gICAgICAgIHRoaXMuX2NsaWVudF9zZWNyZXQgPSBjbGllbnRfc2VjcmV0O1xyXG4gICAgICAgIHRoaXMuX3Jlc3BvbnNlX3R5cGUgPSByZXNwb25zZV90eXBlO1xyXG4gICAgICAgIHRoaXMuX3Njb3BlID0gc2NvcGU7XHJcbiAgICAgICAgdGhpcy5fcmVkaXJlY3RfdXJpID0gcmVkaXJlY3RfdXJpO1xyXG4gICAgICAgIHRoaXMuX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSA9IHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaTtcclxuXHJcbiAgICAgICAgdGhpcy5fcHJvbXB0ID0gcHJvbXB0O1xyXG4gICAgICAgIHRoaXMuX2Rpc3BsYXkgPSBkaXNwbGF5O1xyXG4gICAgICAgIHRoaXMuX21heF9hZ2UgPSBtYXhfYWdlO1xyXG4gICAgICAgIHRoaXMuX3VpX2xvY2FsZXMgPSB1aV9sb2NhbGVzO1xyXG4gICAgICAgIHRoaXMuX2Fjcl92YWx1ZXMgPSBhY3JfdmFsdWVzO1xyXG4gICAgICAgIHRoaXMuX3Jlc291cmNlID0gcmVzb3VyY2U7XHJcbiAgICAgICAgdGhpcy5fcmVzcG9uc2VfbW9kZSA9IHJlc3BvbnNlX21vZGU7XHJcblxyXG4gICAgICAgIHRoaXMuX2ZpbHRlclByb3RvY29sQ2xhaW1zID0gISFmaWx0ZXJQcm90b2NvbENsYWltcztcclxuICAgICAgICB0aGlzLl9sb2FkVXNlckluZm8gPSAhIWxvYWRVc2VySW5mbztcclxuICAgICAgICB0aGlzLl9zdGFsZVN0YXRlQWdlID0gc3RhbGVTdGF0ZUFnZTtcclxuICAgICAgICB0aGlzLl9jbG9ja1NrZXcgPSBjbG9ja1NrZXc7XHJcbiAgICAgICAgdGhpcy5fY2xvY2tTZXJ2aWNlID0gY2xvY2tTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuX3VzZXJJbmZvSnd0SXNzdWVyID0gdXNlckluZm9Kd3RJc3N1ZXI7XHJcblxyXG4gICAgICAgIHRoaXMuX3N0YXRlU3RvcmUgPSBzdGF0ZVN0b3JlO1xyXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRvciA9IG5ldyBSZXNwb25zZVZhbGlkYXRvckN0b3IodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fbWV0YWRhdGFTZXJ2aWNlID0gbmV3IE1ldGFkYXRhU2VydmljZUN0b3IodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuX2V4dHJhUXVlcnlQYXJhbXMgPSB0eXBlb2YgZXh0cmFRdWVyeVBhcmFtcyA9PT0gJ29iamVjdCcgPyBleHRyYVF1ZXJ5UGFyYW1zIDoge307XHJcbiAgICAgICAgdGhpcy5fZXh0cmFUb2tlblBhcmFtcyA9IHR5cGVvZiBleHRyYVRva2VuUGFyYW1zID09PSAnb2JqZWN0JyA/IGV4dHJhVG9rZW5QYXJhbXMgOiB7fTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjbGllbnQgY29uZmlnXHJcbiAgICBnZXQgY2xpZW50X2lkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jbGllbnRfaWQ7XHJcbiAgICB9XHJcbiAgICBzZXQgY2xpZW50X2lkKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9jbGllbnRfaWQpIHtcclxuICAgICAgICAgICAgLy8gb25lLXRpbWUgc2V0IG9ubHlcclxuICAgICAgICAgICAgdGhpcy5fY2xpZW50X2lkID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJPaWRjQ2xpZW50U2V0dGluZ3Muc2V0X2NsaWVudF9pZDogY2xpZW50X2lkIGhhcyBhbHJlYWR5IGJlZW4gYXNzaWduZWQuXCIpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImNsaWVudF9pZCBoYXMgYWxyZWFkeSBiZWVuIGFzc2lnbmVkLlwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBjbGllbnRfc2VjcmV0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jbGllbnRfc2VjcmV0O1xyXG4gICAgfVxyXG4gICAgZ2V0IHJlc3BvbnNlX3R5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlX3R5cGU7XHJcbiAgICB9XHJcbiAgICBnZXQgc2NvcGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Njb3BlO1xyXG4gICAgfVxyXG4gICAgZ2V0IHJlZGlyZWN0X3VyaSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVkaXJlY3RfdXJpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBvcHRpb25hbCBwcm90b2NvbCBwYXJhbXNcclxuICAgIGdldCBwcm9tcHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb21wdDtcclxuICAgIH1cclxuICAgIGdldCBkaXNwbGF5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kaXNwbGF5O1xyXG4gICAgfVxyXG4gICAgZ2V0IG1heF9hZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21heF9hZ2U7XHJcbiAgICB9XHJcbiAgICBnZXQgdWlfbG9jYWxlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdWlfbG9jYWxlcztcclxuICAgIH1cclxuICAgIGdldCBhY3JfdmFsdWVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hY3JfdmFsdWVzO1xyXG4gICAgfVxyXG4gICAgZ2V0IHJlc291cmNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNvdXJjZTtcclxuICAgIH1cclxuICAgIGdldCByZXNwb25zZV9tb2RlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZV9tb2RlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBtZXRhZGF0YVxyXG4gICAgZ2V0IGF1dGhvcml0eSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aG9yaXR5O1xyXG4gICAgfVxyXG4gICAgc2V0IGF1dGhvcml0eSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5fYXV0aG9yaXR5KSB7XHJcbiAgICAgICAgICAgIC8vIG9uZS10aW1lIHNldCBvbmx5XHJcbiAgICAgICAgICAgIHRoaXMuX2F1dGhvcml0eSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiT2lkY0NsaWVudFNldHRpbmdzLnNldF9hdXRob3JpdHk6IGF1dGhvcml0eSBoYXMgYWxyZWFkeSBiZWVuIGFzc2lnbmVkLlwiKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhdXRob3JpdHkgaGFzIGFscmVhZHkgYmVlbiBhc3NpZ25lZC5cIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgbWV0YWRhdGFVcmwoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9tZXRhZGF0YVVybCkge1xyXG4gICAgICAgICAgICB0aGlzLl9tZXRhZGF0YVVybCA9IHRoaXMuYXV0aG9yaXR5O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX21ldGFkYXRhVXJsICYmIHRoaXMuX21ldGFkYXRhVXJsLmluZGV4T2YoT2lkY01ldGFkYXRhVXJsUGF0aCkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWV0YWRhdGFVcmxbdGhpcy5fbWV0YWRhdGFVcmwubGVuZ3RoIC0gMV0gIT09ICcvJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhVXJsICs9ICcvJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhVXJsICs9IE9pZGNNZXRhZGF0YVVybFBhdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVVybDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXR0YWJsZS9jYWNoYWJsZSBtZXRhZGF0YSB2YWx1ZXNcclxuICAgIGdldCBtZXRhZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGE7XHJcbiAgICB9XHJcbiAgICBzZXQgbWV0YWRhdGEodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9tZXRhZGF0YSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzaWduaW5nS2V5cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluZ0tleXM7XHJcbiAgICB9XHJcbiAgICBzZXQgc2lnbmluZ0tleXModmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9zaWduaW5nS2V5cyA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGJlaGF2aW9yIGZsYWdzXHJcbiAgICBnZXQgZmlsdGVyUHJvdG9jb2xDbGFpbXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbHRlclByb3RvY29sQ2xhaW1zO1xyXG4gICAgfVxyXG4gICAgZ2V0IGxvYWRVc2VySW5mbygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZFVzZXJJbmZvO1xyXG4gICAgfVxyXG4gICAgZ2V0IHN0YWxlU3RhdGVBZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YWxlU3RhdGVBZ2U7XHJcbiAgICB9XHJcbiAgICBnZXQgY2xvY2tTa2V3KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jbG9ja1NrZXc7XHJcbiAgICB9XHJcbiAgICBnZXQgdXNlckluZm9Kd3RJc3N1ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJJbmZvSnd0SXNzdWVyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzdGF0ZVN0b3JlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZVN0b3JlO1xyXG4gICAgfVxyXG4gICAgZ2V0IHZhbGlkYXRvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdG9yO1xyXG4gICAgfVxyXG4gICAgZ2V0IG1ldGFkYXRhU2VydmljZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGV4dHJhIHF1ZXJ5IHBhcmFtc1xyXG4gICAgZ2V0IGV4dHJhUXVlcnlQYXJhbXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4dHJhUXVlcnlQYXJhbXM7XHJcbiAgICB9XHJcbiAgICBzZXQgZXh0cmFRdWVyeVBhcmFtcyh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKXtcclxuICAgICAgICAgICAgdGhpcy5fZXh0cmFRdWVyeVBhcmFtcyA9IHZhbHVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2V4dHJhUXVlcnlQYXJhbXMgPSB7fTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXh0cmEgdG9rZW4gcGFyYW1zXHJcbiAgICBnZXQgZXh0cmFUb2tlblBhcmFtcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZXh0cmFUb2tlblBhcmFtcztcclxuICAgIH1cclxuICAgIHNldCBleHRyYVRva2VuUGFyYW1zKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpe1xyXG4gICAgICAgICAgICB0aGlzLl9leHRyYVRva2VuUGFyYW1zID0gdmFsdWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZXh0cmFUb2tlblBhcmFtcyA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXQgdGhlIHRpbWVcclxuICAgIGdldEVwb2NoVGltZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2xvY2tTZXJ2aWNlLmdldEVwb2NoVGltZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgUG9wdXBXaW5kb3cgfSBmcm9tICcuL1BvcHVwV2luZG93LmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3B1cE5hdmlnYXRvciB7XHJcblxyXG4gICAgcHJlcGFyZShwYXJhbXMpIHtcclxuICAgICAgICBsZXQgcG9wdXAgPSBuZXcgUG9wdXBXaW5kb3cocGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHBvcHVwKTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxsYmFjayh1cmwsIGtlZXBPcGVuLCBkZWxpbWl0ZXIpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJQb3B1cE5hdmlnYXRvci5jYWxsYmFja1wiKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgUG9wdXBXaW5kb3cubm90aWZ5T3BlbmVyKHVybCwga2VlcE9wZW4sIGRlbGltaXRlcik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcbmltcG9ydCB7IFVybFV0aWxpdHkgfSBmcm9tICcuL1VybFV0aWxpdHkuanMnO1xyXG5cclxuY29uc3QgQ2hlY2tGb3JQb3B1cENsb3NlZEludGVydmFsID0gNTAwO1xyXG5jb25zdCBEZWZhdWx0UG9wdXBGZWF0dXJlcyA9ICdsb2NhdGlvbj1ubyx0b29sYmFyPW5vLHdpZHRoPTUwMCxoZWlnaHQ9NTAwLGxlZnQ9MTAwLHRvcD0xMDA7JztcclxuLy9jb25zdCBEZWZhdWx0UG9wdXBGZWF0dXJlcyA9ICdsb2NhdGlvbj1ubyx0b29sYmFyPW5vLHdpZHRoPTUwMCxoZWlnaHQ9NTAwLGxlZnQ9MTAwLHRvcD0xMDA7cmVzaXphYmxlPXllcyc7XHJcblxyXG5jb25zdCBEZWZhdWx0UG9wdXBUYXJnZXQgPSBcIl9ibGFua1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvcHVwV2luZG93IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcclxuICAgICAgICB0aGlzLl9wcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgdGhpcy5fcmVqZWN0ID0gcmVqZWN0O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgdGFyZ2V0ID0gcGFyYW1zLnBvcHVwV2luZG93VGFyZ2V0IHx8IERlZmF1bHRQb3B1cFRhcmdldDtcclxuICAgICAgICBsZXQgZmVhdHVyZXMgPSBwYXJhbXMucG9wdXBXaW5kb3dGZWF0dXJlcyB8fCBEZWZhdWx0UG9wdXBGZWF0dXJlcztcclxuXHJcbiAgICAgICAgdGhpcy5fcG9wdXAgPSB3aW5kb3cub3BlbignJywgdGFyZ2V0LCBmZWF0dXJlcyk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BvcHVwKSB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlBvcHVwV2luZG93LmN0b3I6IHBvcHVwIHN1Y2Nlc3NmdWxseSBjcmVhdGVkXCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9jaGVja0ZvclBvcHVwQ2xvc2VkVGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwodGhpcy5fY2hlY2tGb3JQb3B1cENsb3NlZC5iaW5kKHRoaXMpLCBDaGVja0ZvclBvcHVwQ2xvc2VkSW50ZXJ2YWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgcHJvbWlzZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICBuYXZpZ2F0ZShwYXJhbXMpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3BvcHVwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yKFwiUG9wdXBXaW5kb3cubmF2aWdhdGU6IEVycm9yIG9wZW5pbmcgcG9wdXAgd2luZG93XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghcGFyYW1zIHx8ICFwYXJhbXMudXJsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yKFwiUG9wdXBXaW5kb3cubmF2aWdhdGU6IG5vIHVybCBwcm92aWRlZFwiKTtcclxuICAgICAgICAgICAgdGhpcy5fZXJyb3IoXCJObyB1cmwgcHJvdmlkZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJQb3B1cFdpbmRvdy5uYXZpZ2F0ZTogU2V0dGluZyBVUkwgaW4gcG9wdXBcIik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9pZCA9IHBhcmFtcy5pZDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2lkKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3dbXCJwb3B1cENhbGxiYWNrX1wiICsgcGFyYW1zLmlkXSA9IHRoaXMuX2NhbGxiYWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3BvcHVwLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3BvcHVwLndpbmRvdy5sb2NhdGlvbiA9IHBhcmFtcy51cmw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIF9zdWNjZXNzKGRhdGEpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJQb3B1cFdpbmRvdy5jYWxsYmFjazogU3VjY2Vzc2Z1bCByZXNwb25zZSBmcm9tIHBvcHVwIHdpbmRvd1wiKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY2xlYW51cCgpO1xyXG4gICAgICAgIHRoaXMuX3Jlc29sdmUoZGF0YSk7XHJcbiAgICB9XHJcbiAgICBfZXJyb3IobWVzc2FnZSkge1xyXG4gICAgICAgIExvZy5lcnJvcihcIlBvcHVwV2luZG93LmVycm9yOiBcIiwgbWVzc2FnZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fY2xlYW51cCgpO1xyXG4gICAgICAgIHRoaXMuX3JlamVjdChuZXcgRXJyb3IobWVzc2FnZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuX2NsZWFudXAoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIF9jbGVhbnVwKGtlZXBPcGVuKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiUG9wdXBXaW5kb3cuY2xlYW51cFwiKTtcclxuXHJcbiAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5fY2hlY2tGb3JQb3B1cENsb3NlZFRpbWVyKTtcclxuICAgICAgICB0aGlzLl9jaGVja0ZvclBvcHVwQ2xvc2VkVGltZXIgPSBudWxsO1xyXG5cclxuICAgICAgICBkZWxldGUgd2luZG93W1wicG9wdXBDYWxsYmFja19cIiArIHRoaXMuX2lkXTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3BvcHVwICYmICFrZWVwT3Blbikge1xyXG4gICAgICAgICAgICB0aGlzLl9wb3B1cC5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9wb3B1cCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgX2NoZWNrRm9yUG9wdXBDbG9zZWQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9wb3B1cCB8fCB0aGlzLl9wb3B1cC5jbG9zZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZXJyb3IoXCJQb3B1cCB3aW5kb3cgY2xvc2VkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfY2FsbGJhY2sodXJsLCBrZWVwT3Blbikge1xyXG4gICAgICAgIHRoaXMuX2NsZWFudXAoa2VlcE9wZW4pO1xyXG5cclxuICAgICAgICBpZiAodXJsKSB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlBvcHVwV2luZG93LmNhbGxiYWNrIHN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1Y2Nlc3MoeyB1cmw6IHVybCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlBvcHVwV2luZG93LmNhbGxiYWNrOiBJbnZhbGlkIHJlc3BvbnNlIGZyb20gcG9wdXBcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yKFwiSW52YWxpZCByZXNwb25zZSBmcm9tIHBvcHVwXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbm90aWZ5T3BlbmVyKHVybCwga2VlcE9wZW4sIGRlbGltaXRlcikge1xyXG4gICAgICAgIGlmICh3aW5kb3cub3BlbmVyKSB7XHJcbiAgICAgICAgICAgIHVybCA9IHVybCB8fCB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgICAgICAgaWYgKHVybCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBVcmxVdGlsaXR5LnBhcnNlVXJsRnJhZ21lbnQodXJsLCBkZWxpbWl0ZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBcInBvcHVwQ2FsbGJhY2tfXCIgKyBkYXRhLnN0YXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IHdpbmRvdy5vcGVuZXJbbmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlBvcHVwV2luZG93Lm5vdGlmeU9wZW5lcjogcGFzc2luZyB1cmwgbWVzc2FnZSB0byBvcGVuZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHVybCwga2VlcE9wZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLndhcm4oXCJQb3B1cFdpbmRvdy5ub3RpZnlPcGVuZXI6IG5vIG1hdGNoaW5nIGNhbGxiYWNrIGZvdW5kIG9uIG9wZW5lclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cud2FybihcIlBvcHVwV2luZG93Lm5vdGlmeU9wZW5lcjogbm8gc3RhdGUgZm91bmQgaW4gcmVzcG9uc2UgdXJsXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBMb2cud2FybihcIlBvcHVwV2luZG93Lm5vdGlmeU9wZW5lcjogbm8gd2luZG93Lm9wZW5lci4gQ2FuJ3QgY29tcGxldGUgbm90aWZpY2F0aW9uLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlZGlyZWN0TmF2aWdhdG9yIHtcclxuXHJcbiAgICBwcmVwYXJlKCkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmF2aWdhdGUocGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKCFwYXJhbXMgfHwgIXBhcmFtcy51cmwpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVkaXJlY3ROYXZpZ2F0b3IubmF2aWdhdGU6IE5vIHVybCBwcm92aWRlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHVybCBwcm92aWRlZFwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGFyYW1zLnVzZVJlcGxhY2VUb05hdmlnYXRlKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHBhcmFtcy51cmwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gcGFyYW1zLnVybDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdXJsKCkge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcbmltcG9ydCB7IE1ldGFkYXRhU2VydmljZSB9IGZyb20gJy4vTWV0YWRhdGFTZXJ2aWNlLmpzJztcclxuaW1wb3J0IHsgVXNlckluZm9TZXJ2aWNlIH0gZnJvbSAnLi9Vc2VySW5mb1NlcnZpY2UuanMnO1xyXG5pbXBvcnQgeyBUb2tlbkNsaWVudCB9IGZyb20gJy4vVG9rZW5DbGllbnQuanMnO1xyXG5pbXBvcnQgeyBFcnJvclJlc3BvbnNlIH0gZnJvbSAnLi9FcnJvclJlc3BvbnNlLmpzJztcclxuaW1wb3J0IHsgSm9zZVV0aWwgfSBmcm9tICcuL0pvc2VVdGlsLmpzJztcclxuXHJcbmNvbnN0IFByb3RvY29sQ2xhaW1zID0gW1wibm9uY2VcIiwgXCJhdF9oYXNoXCIsIFwiaWF0XCIsIFwibmJmXCIsIFwiZXhwXCIsIFwiYXVkXCIsIFwiaXNzXCIsIFwiY19oYXNoXCJdO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlc3BvbnNlVmFsaWRhdG9yIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgXHJcbiAgICAgICAgTWV0YWRhdGFTZXJ2aWNlQ3RvciA9IE1ldGFkYXRhU2VydmljZSxcclxuICAgICAgICBVc2VySW5mb1NlcnZpY2VDdG9yID0gVXNlckluZm9TZXJ2aWNlLCBcclxuICAgICAgICBqb3NlVXRpbCA9IEpvc2VVdGlsLFxyXG4gICAgICAgIFRva2VuQ2xpZW50Q3RvciA9IFRva2VuQ2xpZW50KSB7XHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncykge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5jdG9yOiBObyBzZXR0aW5ncyBwYXNzZWQgdG8gUmVzcG9uc2VWYWxpZGF0b3JcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInNldHRpbmdzXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuICAgICAgICB0aGlzLl9tZXRhZGF0YVNlcnZpY2UgPSBuZXcgTWV0YWRhdGFTZXJ2aWNlQ3Rvcih0aGlzLl9zZXR0aW5ncyk7XHJcbiAgICAgICAgdGhpcy5fdXNlckluZm9TZXJ2aWNlID0gbmV3IFVzZXJJbmZvU2VydmljZUN0b3IodGhpcy5fc2V0dGluZ3MpO1xyXG4gICAgICAgIHRoaXMuX2pvc2VVdGlsID0gam9zZVV0aWw7XHJcbiAgICAgICAgdGhpcy5fdG9rZW5DbGllbnQgPSBuZXcgVG9rZW5DbGllbnRDdG9yKHRoaXMuX3NldHRpbmdzKTtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZVNpZ25pblJlc3BvbnNlKHN0YXRlLCByZXNwb25zZSkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLnZhbGlkYXRlU2lnbmluUmVzcG9uc2VcIik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9jZXNzU2lnbmluUGFyYW1zKHN0YXRlLCByZXNwb25zZSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLnZhbGlkYXRlU2lnbmluUmVzcG9uc2U6IHN0YXRlIHByb2Nlc3NlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlVG9rZW5zKHN0YXRlLCByZXNwb25zZSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci52YWxpZGF0ZVNpZ25pblJlc3BvbnNlOiB0b2tlbnMgdmFsaWRhdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2Nlc3NDbGFpbXMoc3RhdGUsIHJlc3BvbnNlKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci52YWxpZGF0ZVNpZ25pblJlc3BvbnNlOiBjbGFpbXMgcHJvY2Vzc2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZVNpZ25vdXRSZXNwb25zZShzdGF0ZSwgcmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAoc3RhdGUuaWQgIT09IHJlc3BvbnNlLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLnZhbGlkYXRlU2lnbm91dFJlc3BvbnNlOiBTdGF0ZSBkb2VzIG5vdCBtYXRjaFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlN0YXRlIGRvZXMgbm90IG1hdGNoXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIG5vdyB0aGF0IHdlIGtub3cgdGhlIHN0YXRlIG1hdGNoZXMsIHRha2UgdGhlIHN0b3JlZCBkYXRhXHJcbiAgICAgICAgLy8gYW5kIHNldCBpdCBpbnRvIHRoZSByZXNwb25zZSBzbyBjYWxsZXJzIGNhbiBnZXQgdGhlaXIgc3RhdGVcclxuICAgICAgICAvLyB0aGlzIGlzIGltcG9ydGFudCBmb3IgYm90aCBzdWNjZXNzICYgZXJyb3Igb3V0Y29tZXNcclxuICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci52YWxpZGF0ZVNpZ25vdXRSZXNwb25zZTogc3RhdGUgdmFsaWRhdGVkXCIpO1xyXG4gICAgICAgIHJlc3BvbnNlLnN0YXRlID0gc3RhdGUuZGF0YTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgICAgICAgIExvZy53YXJuKFwiUmVzcG9uc2VWYWxpZGF0b3IudmFsaWRhdGVTaWdub3V0UmVzcG9uc2U6IFJlc3BvbnNlIHdhcyBlcnJvclwiLCByZXNwb25zZS5lcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3JSZXNwb25zZShyZXNwb25zZSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3Byb2Nlc3NTaWduaW5QYXJhbXMoc3RhdGUsIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKHN0YXRlLmlkICE9PSByZXNwb25zZS5zdGF0ZSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogU3RhdGUgZG9lcyBub3QgbWF0Y2hcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJTdGF0ZSBkb2VzIG5vdCBtYXRjaFwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXN0YXRlLmNsaWVudF9pZCkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogTm8gY2xpZW50X2lkIG9uIHN0YXRlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gY2xpZW50X2lkIG9uIHN0YXRlXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc3RhdGUuYXV0aG9yaXR5KSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBObyBhdXRob3JpdHkgb24gc3RhdGVcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBhdXRob3JpdHkgb24gc3RhdGVcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcyBhbGxvd3MgdGhlIGF1dGhvcml0eSB0byBiZSBsb2FkZWQgZnJvbSB0aGUgc2lnbmluIHN0YXRlXHJcbiAgICAgICAgaWYgKCF0aGlzLl9zZXR0aW5ncy5hdXRob3JpdHkpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0dGluZ3MuYXV0aG9yaXR5ID0gc3RhdGUuYXV0aG9yaXR5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBlbnN1cmUgd2UncmUgdXNpbmcgdGhlIGNvcnJlY3QgYXV0aG9yaXR5IGlmIHRoZSBhdXRob3JpdHkgaXMgbm90IGxvYWRlZCBmcm9tIHNpZ25pbiBzdGF0ZVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3NldHRpbmdzLmF1dGhvcml0eSAmJiB0aGlzLl9zZXR0aW5ncy5hdXRob3JpdHkgIT09IHN0YXRlLmF1dGhvcml0eSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogYXV0aG9yaXR5IG1pc21hdGNoIG9uIHNldHRpbmdzIHZzLiBzaWduaW4gc3RhdGVcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJhdXRob3JpdHkgbWlzbWF0Y2ggb24gc2V0dGluZ3MgdnMuIHNpZ25pbiBzdGF0ZVwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMgYWxsb3dzIHRoZSBjbGllbnRfaWQgdG8gYmUgbG9hZGVkIGZyb20gdGhlIHNpZ25pbiBzdGF0ZVxyXG4gICAgICAgIGlmICghdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZCA9IHN0YXRlLmNsaWVudF9pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZW5zdXJlIHdlJ3JlIHVzaW5nIHRoZSBjb3JyZWN0IGNsaWVudF9pZCBpZiB0aGUgY2xpZW50X2lkIGlzIG5vdCBsb2FkZWQgZnJvbSBzaWduaW4gc3RhdGVcclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9zZXR0aW5ncy5jbGllbnRfaWQgJiYgdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkICE9PSBzdGF0ZS5jbGllbnRfaWQpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NTaWduaW5QYXJhbXM6IGNsaWVudF9pZCBtaXNtYXRjaCBvbiBzZXR0aW5ncyB2cy4gc2lnbmluIHN0YXRlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiY2xpZW50X2lkIG1pc21hdGNoIG9uIHNldHRpbmdzIHZzLiBzaWduaW4gc3RhdGVcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbm93IHRoYXQgd2Uga25vdyB0aGUgc3RhdGUgbWF0Y2hlcywgdGFrZSB0aGUgc3RvcmVkIGRhdGFcclxuICAgICAgICAvLyBhbmQgc2V0IGl0IGludG8gdGhlIHJlc3BvbnNlIHNvIGNhbGxlcnMgY2FuIGdldCB0aGVpciBzdGF0ZVxyXG4gICAgICAgIC8vIHRoaXMgaXMgaW1wb3J0YW50IGZvciBib3RoIHN1Y2Nlc3MgJiBlcnJvciBvdXRjb21lc1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBzdGF0ZSB2YWxpZGF0ZWRcIik7XHJcbiAgICAgICAgcmVzcG9uc2Uuc3RhdGUgPSBzdGF0ZS5kYXRhO1xyXG5cclxuICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgICAgICAgTG9nLndhcm4oXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogUmVzcG9uc2Ugd2FzIGVycm9yXCIsIHJlc3BvbnNlLmVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvclJlc3BvbnNlKHJlc3BvbnNlKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RhdGUubm9uY2UgJiYgIXJlc3BvbnNlLmlkX3Rva2VuKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBFeHBlY3RpbmcgaWRfdG9rZW4gaW4gcmVzcG9uc2VcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBpZF90b2tlbiBpbiByZXNwb25zZVwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXN0YXRlLm5vbmNlICYmIHJlc3BvbnNlLmlkX3Rva2VuKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBOb3QgZXhwZWN0aW5nIGlkX3Rva2VuIGluIHJlc3BvbnNlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiVW5leHBlY3RlZCBpZF90b2tlbiBpbiByZXNwb25zZVwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RhdGUuY29kZV92ZXJpZmllciAmJiAhcmVzcG9uc2UuY29kZSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogRXhwZWN0aW5nIGNvZGUgaW4gcmVzcG9uc2VcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBjb2RlIGluIHJlc3BvbnNlXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc3RhdGUuY29kZV92ZXJpZmllciAmJiByZXNwb25zZS5jb2RlKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBOb3QgZXhwZWN0aW5nIGNvZGUgaW4gcmVzcG9uc2VcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIGNvZGUgaW4gcmVzcG9uc2VcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5zY29wZSkge1xyXG4gICAgICAgICAgICAvLyBpZiB0aGVyZSdzIG5vIHNjb3BlIG9uIHRoZSByZXNwb25zZSwgdGhlbiBhc3N1bWUgYWxsIHNjb3BlcyBncmFudGVkIChwZXItc3BlYykgYW5kIGNvcHkgb3ZlciBzY29wZXMgZnJvbSBvcmlnaW5hbCByZXF1ZXN0XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLnNjb3BlID0gc3RhdGUuc2NvcGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgIH1cclxuXHJcbiAgICBfcHJvY2Vzc0NsYWltcyhzdGF0ZSwgcmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAocmVzcG9uc2UuaXNPcGVuSWRDb25uZWN0KSB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzQ2xhaW1zOiByZXNwb25zZSBpcyBPSURDLCBwcm9jZXNzaW5nIGNsYWltc1wiKTtcclxuXHJcbiAgICAgICAgICAgIHJlc3BvbnNlLnByb2ZpbGUgPSB0aGlzLl9maWx0ZXJQcm90b2NvbENsYWltcyhyZXNwb25zZS5wcm9maWxlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5za2lwVXNlckluZm8gIT09IHRydWUgJiYgdGhpcy5fc2V0dGluZ3MubG9hZFVzZXJJbmZvICYmIHJlc3BvbnNlLmFjY2Vzc190b2tlbikge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NDbGFpbXM6IGxvYWRpbmcgdXNlciBpbmZvXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl91c2VySW5mb1NlcnZpY2UuZ2V0Q2xhaW1zKHJlc3BvbnNlLmFjY2Vzc190b2tlbikudGhlbihjbGFpbXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzQ2xhaW1zOiB1c2VyIGluZm8gY2xhaW1zIHJlY2VpdmVkIGZyb20gdXNlciBpbmZvIGVuZHBvaW50XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xhaW1zLnN1YiAhPT0gcmVzcG9uc2UucHJvZmlsZS5zdWIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NDbGFpbXM6IHN1YiBmcm9tIHVzZXIgaW5mbyBlbmRwb2ludCBkb2VzIG5vdCBtYXRjaCBzdWIgaW4gYWNjZXNzX3Rva2VuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwic3ViIGZyb20gdXNlciBpbmZvIGVuZHBvaW50IGRvZXMgbm90IG1hdGNoIHN1YiBpbiBhY2Nlc3NfdG9rZW5cIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UucHJvZmlsZSA9IHRoaXMuX21lcmdlQ2xhaW1zKHJlc3BvbnNlLnByb2ZpbGUsIGNsYWltcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NDbGFpbXM6IHVzZXIgaW5mbyBjbGFpbXMgcmVjZWl2ZWQsIHVwZGF0ZWQgcHJvZmlsZTpcIiwgcmVzcG9uc2UucHJvZmlsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NDbGFpbXM6IG5vdCBsb2FkaW5nIHVzZXIgaW5mb1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NDbGFpbXM6IHJlc3BvbnNlIGlzIG5vdCBPSURDLCBub3QgcHJvY2Vzc2luZyBjbGFpbXNcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgIH1cclxuXHJcbiAgICBfbWVyZ2VDbGFpbXMoY2xhaW1zMSwgY2xhaW1zMikge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBPYmplY3QuYXNzaWduKHt9LCBjbGFpbXMxKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBjbGFpbXMyKSB7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBjbGFpbXMyW25hbWVdO1xyXG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWVzKSkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzID0gW3ZhbHVlc107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB2YWx1ZXNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdFtuYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHRbbmFtZV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdFtuYW1lXS5pbmRleE9mKHZhbHVlKSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W25hbWVdLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlc3VsdFtuYW1lXSAhPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbbmFtZV0gPSB0aGlzLl9tZXJnZUNsYWltcyhyZXN1bHRbbmFtZV0sIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbbmFtZV0gPSBbcmVzdWx0W25hbWVdLCB2YWx1ZV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIF9maWx0ZXJQcm90b2NvbENsYWltcyhjbGFpbXMpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fZmlsdGVyUHJvdG9jb2xDbGFpbXMsIGluY29taW5nIGNsYWltczpcIiwgY2xhaW1zKTtcclxuXHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oe30sIGNsYWltcyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5fZmlsdGVyUHJvdG9jb2xDbGFpbXMpIHtcclxuICAgICAgICAgICAgUHJvdG9jb2xDbGFpbXMuZm9yRWFjaCh0eXBlID0+IHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSByZXN1bHRbdHlwZV07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX2ZpbHRlclByb3RvY29sQ2xhaW1zOiBwcm90b2NvbCBjbGFpbXMgZmlsdGVyZWRcIiwgcmVzdWx0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9maWx0ZXJQcm90b2NvbENsYWltczogcHJvdG9jb2wgY2xhaW1zIG5vdCBmaWx0ZXJlZFwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBfdmFsaWRhdGVUb2tlbnMoc3RhdGUsIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmNvZGUpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlVG9rZW5zOiBWYWxpZGF0aW5nIGNvZGVcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wcm9jZXNzQ29kZShzdGF0ZSwgcmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmlkX3Rva2VuKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5hY2Nlc3NfdG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZVRva2VuczogVmFsaWRhdGluZyBpZF90b2tlbiBhbmQgYWNjZXNzX3Rva2VuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlSWRUb2tlbkFuZEFjY2Vzc1Rva2VuKHN0YXRlLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZVRva2VuczogVmFsaWRhdGluZyBpZF90b2tlblwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlSWRUb2tlbihzdGF0ZSwgcmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlVG9rZW5zOiBObyBjb2RlIHRvIHByb2Nlc3Mgb3IgaWRfdG9rZW4gdG8gdmFsaWRhdGVcIik7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3Byb2Nlc3NDb2RlKHN0YXRlLCByZXNwb25zZSkge1xyXG4gICAgICAgIHZhciByZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICBjbGllbnRfaWQ6IHN0YXRlLmNsaWVudF9pZCxcclxuICAgICAgICAgICAgY2xpZW50X3NlY3JldDogc3RhdGUuY2xpZW50X3NlY3JldCxcclxuICAgICAgICAgICAgY29kZSA6IHJlc3BvbnNlLmNvZGUsXHJcbiAgICAgICAgICAgIHJlZGlyZWN0X3VyaTogc3RhdGUucmVkaXJlY3RfdXJpLFxyXG4gICAgICAgICAgICBjb2RlX3ZlcmlmaWVyOiBzdGF0ZS5jb2RlX3ZlcmlmaWVyXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXRlLmV4dHJhVG9rZW5QYXJhbXMgJiYgdHlwZW9mKHN0YXRlLmV4dHJhVG9rZW5QYXJhbXMpID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHJlcXVlc3QsIHN0YXRlLmV4dHJhVG9rZW5QYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9rZW5DbGllbnQuZXhjaGFuZ2VDb2RlKHJlcXVlc3QpLnRoZW4odG9rZW5SZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IodmFyIGtleSBpbiB0b2tlblJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZVtrZXldID0gdG9rZW5SZXNwb25zZVtrZXldO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuaWRfdG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzQ29kZTogdG9rZW4gcmVzcG9uc2Ugc3VjY2Vzc2Z1bCwgcHJvY2Vzc2luZyBpZF90b2tlblwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZUlkVG9rZW5BdHRyaWJ1dGVzKHN0YXRlLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc0NvZGU6IHRva2VuIHJlc3BvbnNlIHN1Y2Nlc3NmdWwsIHJldHVybmluZyByZXNwb25zZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF92YWxpZGF0ZUlkVG9rZW5BdHRyaWJ1dGVzKHN0YXRlLCByZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0SXNzdWVyKCkudGhlbihpc3N1ZXIgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IGF1ZGllbmNlID0gc3RhdGUuY2xpZW50X2lkO1xyXG4gICAgICAgICAgICBsZXQgY2xvY2tTa2V3SW5TZWNvbmRzID0gdGhpcy5fc2V0dGluZ3MuY2xvY2tTa2V3O1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuQXR0cmlidXRlczogVmFsaWRhaW5nIEpXVCBhdHRyaWJ1dGVzOyB1c2luZyBjbG9jayBza2V3IChpbiBzZWNvbmRzKSBvZjogXCIsIGNsb2NrU2tld0luU2Vjb25kcyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MuZ2V0RXBvY2hUaW1lKCkudGhlbihub3cgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pvc2VVdGlsLnZhbGlkYXRlSnd0QXR0cmlidXRlcyhyZXNwb25zZS5pZF90b2tlbiwgaXNzdWVyLCBhdWRpZW5jZSwgY2xvY2tTa2V3SW5TZWNvbmRzLCBub3cpLnRoZW4ocGF5bG9hZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUubm9uY2UgJiYgc3RhdGUubm9uY2UgIT09IHBheWxvYWQubm9uY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbkF0dHJpYnV0ZXM6IEludmFsaWQgbm9uY2UgaW4gaWRfdG9rZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIG5vbmNlIGluIGlkX3Rva2VuXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXBheWxvYWQuc3ViKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW5BdHRyaWJ1dGVzOiBObyBzdWIgcHJlc2VudCBpbiBpZF90b2tlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHN1YiBwcmVzZW50IGluIGlkX3Rva2VuXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5wcm9maWxlID0gcGF5bG9hZDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3ZhbGlkYXRlSWRUb2tlbkFuZEFjY2Vzc1Rva2VuKHN0YXRlLCByZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZUlkVG9rZW4oc3RhdGUsIHJlc3BvbnNlKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlQWNjZXNzVG9rZW4ocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF92YWxpZGF0ZUlkVG9rZW4oc3RhdGUsIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKCFzdGF0ZS5ub25jZSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuOiBObyBub25jZSBvbiBzdGF0ZVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIG5vbmNlIG9uIHN0YXRlXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBqd3QgPSB0aGlzLl9qb3NlVXRpbC5wYXJzZUp3dChyZXNwb25zZS5pZF90b2tlbik7XHJcbiAgICAgICAgaWYgKCFqd3QgfHwgIWp3dC5oZWFkZXIgfHwgIWp3dC5wYXlsb2FkKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IEZhaWxlZCB0byBwYXJzZSBpZF90b2tlblwiLCBqd3QpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIGlkX3Rva2VuXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdGF0ZS5ub25jZSAhPT0gand0LnBheWxvYWQubm9uY2UpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogSW52YWxpZCBub25jZSBpbiBpZF90b2tlblwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgbm9uY2UgaW4gaWRfdG9rZW5cIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGtpZCA9IGp3dC5oZWFkZXIua2lkO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldElzc3VlcigpLnRoZW4oaXNzdWVyID0+IHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogUmVjZWl2ZWQgaXNzdWVyXCIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRTaWduaW5nS2V5cygpLnRoZW4oa2V5cyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWtleXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuOiBObyBzaWduaW5nIGtleXMgZnJvbSBtZXRhZGF0YVwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gc2lnbmluZyBrZXlzIGZyb20gbWV0YWRhdGFcIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IFJlY2VpdmVkIHNpZ25pbmcga2V5c1wiKTtcclxuICAgICAgICAgICAgICAgIGxldCBrZXk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWtpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleXMgPSB0aGlzLl9maWx0ZXJCeUFsZyhrZXlzLCBqd3QuaGVhZGVyLmFsZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogTm8ga2lkIGZvdW5kIGluIGlkX3Rva2VuIGFuZCBtb3JlIHRoYW4gb25lIGtleSBmb3VuZCBpbiBtZXRhZGF0YVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGtpZCBmb3VuZCBpbiBpZF90b2tlbiBhbmQgbW9yZSB0aGFuIG9uZSBrZXkgZm91bmQgaW4gbWV0YWRhdGFcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ga2lkIGlzIG1hbmRhdG9yeSBvbmx5IHdoZW4gdGhlcmUgYXJlIG11bHRpcGxlIGtleXMgaW4gdGhlIHJlZmVyZW5jZWQgSldLIFNldCBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWUgaHR0cDovL29wZW5pZC5uZXQvc3BlY3Mvb3BlbmlkLWNvbm5lY3QtY29yZS0xXzAuaHRtbCNTaWduaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IGtleXNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5ID0ga2V5cy5maWx0ZXIoa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleS5raWQgPT09IGtpZDtcclxuICAgICAgICAgICAgICAgICAgICB9KVswXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IE5vIGtleSBtYXRjaGluZyBraWQgb3IgYWxnIGZvdW5kIGluIHNpZ25pbmcga2V5c1wiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8ga2V5IG1hdGNoaW5nIGtpZCBvciBhbGcgZm91bmQgaW4gc2lnbmluZyBrZXlzXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYXVkaWVuY2UgPSBzdGF0ZS5jbGllbnRfaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGNsb2NrU2tld0luU2Vjb25kcyA9IHRoaXMuX3NldHRpbmdzLmNsb2NrU2tldztcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IFZhbGlkYWluZyBKV1Q7IHVzaW5nIGNsb2NrIHNrZXcgKGluIHNlY29uZHMpIG9mOiBcIiwgY2xvY2tTa2V3SW5TZWNvbmRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fam9zZVV0aWwudmFsaWRhdGVKd3QocmVzcG9uc2UuaWRfdG9rZW4sIGtleSwgaXNzdWVyLCBhdWRpZW5jZSwgY2xvY2tTa2V3SW5TZWNvbmRzKS50aGVuKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogSldUIHZhbGlkYXRpb24gc3VjY2Vzc2Z1bFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFqd3QucGF5bG9hZC5zdWIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogTm8gc3ViIHByZXNlbnQgaW4gaWRfdG9rZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBzdWIgcHJlc2VudCBpbiBpZF90b2tlblwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5wcm9maWxlID0gand0LnBheWxvYWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfZmlsdGVyQnlBbGcoa2V5cywgYWxnKXtcclxuICAgICAgICB2YXIga3R5ID0gbnVsbDtcclxuICAgICAgICBpZiAoYWxnLnN0YXJ0c1dpdGgoXCJSU1wiKSkge1xyXG4gICAgICAgICAgICBrdHkgPSBcIlJTQVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChhbGcuc3RhcnRzV2l0aChcIlBTXCIpKSB7XHJcbiAgICAgICAgICAgIGt0eSA9IFwiUFNcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYWxnLnN0YXJ0c1dpdGgoXCJFU1wiKSkge1xyXG4gICAgICAgICAgICBrdHkgPSBcIkVDXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fZmlsdGVyQnlBbGc6IGFsZyBub3Qgc3VwcG9ydGVkOiBcIiwgYWxnKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX2ZpbHRlckJ5QWxnOiBMb29raW5nIGZvciBrZXlzIHRoYXQgbWF0Y2gga3R5OiBcIiwga3R5KTtcclxuXHJcbiAgICAgICAga2V5cyA9IGtleXMuZmlsdGVyKGtleSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBrZXkua3R5ID09PSBrdHk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9maWx0ZXJCeUFsZzogTnVtYmVyIG9mIGtleXMgdGhhdCBtYXRjaCBrdHk6IFwiLCBrdHksIGtleXMubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGtleXM7XHJcbiAgICB9XHJcblxyXG4gICAgX3ZhbGlkYXRlQWNjZXNzVG9rZW4ocmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLnByb2ZpbGUpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IE5vIHByb2ZpbGUgbG9hZGVkIGZyb20gaWRfdG9rZW5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBwcm9maWxlIGxvYWRlZCBmcm9tIGlkX3Rva2VuXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghcmVzcG9uc2UucHJvZmlsZS5hdF9oYXNoKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUFjY2Vzc1Rva2VuOiBObyBhdF9oYXNoIGluIGlkX3Rva2VuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gYXRfaGFzaCBpbiBpZF90b2tlblwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXJlc3BvbnNlLmlkX3Rva2VuKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUFjY2Vzc1Rva2VuOiBObyBpZF90b2tlblwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGlkX3Rva2VuXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBqd3QgPSB0aGlzLl9qb3NlVXRpbC5wYXJzZUp3dChyZXNwb25zZS5pZF90b2tlbik7XHJcbiAgICAgICAgaWYgKCFqd3QgfHwgIWp3dC5oZWFkZXIpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IEZhaWxlZCB0byBwYXJzZSBpZF90b2tlblwiLCBqd3QpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIGlkX3Rva2VuXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBoYXNoQWxnID0gand0LmhlYWRlci5hbGc7XHJcbiAgICAgICAgaWYgKCFoYXNoQWxnIHx8IGhhc2hBbGcubGVuZ3RoICE9PSA1KSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUFjY2Vzc1Rva2VuOiBVbnN1cHBvcnRlZCBhbGc6XCIsIGhhc2hBbGcpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgYWxnOiBcIiArIGhhc2hBbGcpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBoYXNoQml0cyA9IGhhc2hBbGcuc3Vic3RyKDIsIDMpO1xyXG4gICAgICAgIGlmICghaGFzaEJpdHMpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IFVuc3VwcG9ydGVkIGFsZzpcIiwgaGFzaEFsZywgaGFzaEJpdHMpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgYWxnOiBcIiArIGhhc2hBbGcpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhhc2hCaXRzID0gcGFyc2VJbnQoaGFzaEJpdHMpO1xyXG4gICAgICAgIGlmIChoYXNoQml0cyAhPT0gMjU2ICYmIGhhc2hCaXRzICE9PSAzODQgJiYgaGFzaEJpdHMgIT09IDUxMikge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVBY2Nlc3NUb2tlbjogVW5zdXBwb3J0ZWQgYWxnOlwiLCBoYXNoQWxnLCBoYXNoQml0cyk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBhbGc6IFwiICsgaGFzaEFsZykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHNoYSA9IFwic2hhXCIgKyBoYXNoQml0cztcclxuICAgICAgICB2YXIgaGFzaCA9IHRoaXMuX2pvc2VVdGlsLmhhc2hTdHJpbmcocmVzcG9uc2UuYWNjZXNzX3Rva2VuLCBzaGEpO1xyXG4gICAgICAgIGlmICghaGFzaCkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVBY2Nlc3NUb2tlbjogYWNjZXNzX3Rva2VuIGhhc2ggZmFpbGVkOlwiLCBzaGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiRmFpbGVkIHRvIHZhbGlkYXRlIGF0X2hhc2hcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGxlZnQgPSBoYXNoLnN1YnN0cigwLCBoYXNoLmxlbmd0aCAvIDIpO1xyXG4gICAgICAgIHZhciBsZWZ0X2I2NHUgPSB0aGlzLl9qb3NlVXRpbC5oZXhUb0Jhc2U2NFVybChsZWZ0KTtcclxuICAgICAgICBpZiAobGVmdF9iNjR1ICE9PSByZXNwb25zZS5wcm9maWxlLmF0X2hhc2gpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IEZhaWxlZCB0byB2YWxpZGF0ZSBhdF9oYXNoXCIsIGxlZnRfYjY0dSwgcmVzcG9uc2UucHJvZmlsZS5hdF9oYXNoKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkZhaWxlZCB0byB2YWxpZGF0ZSBhdF9oYXNoXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUFjY2Vzc1Rva2VuOiBzdWNjZXNzXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcbmltcG9ydCB7IENoZWNrU2Vzc2lvbklGcmFtZSB9IGZyb20gJy4vQ2hlY2tTZXNzaW9uSUZyYW1lLmpzJztcclxuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSAnLi9HbG9iYWwuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlc3Npb25Nb25pdG9yIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih1c2VyTWFuYWdlciwgQ2hlY2tTZXNzaW9uSUZyYW1lQ3RvciA9IENoZWNrU2Vzc2lvbklGcmFtZSwgdGltZXIgPSBHbG9iYWwudGltZXIpIHtcclxuICAgICAgICBpZiAoIXVzZXJNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlNlc3Npb25Nb25pdG9yLmN0b3I6IE5vIHVzZXIgbWFuYWdlciBwYXNzZWQgdG8gU2Vzc2lvbk1vbml0b3JcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVzZXJNYW5hZ2VyXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIgPSB1c2VyTWFuYWdlcjtcclxuICAgICAgICB0aGlzLl9DaGVja1Nlc3Npb25JRnJhbWVDdG9yID0gQ2hlY2tTZXNzaW9uSUZyYW1lQ3RvcjtcclxuICAgICAgICB0aGlzLl90aW1lciA9IHRpbWVyO1xyXG5cclxuICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuYWRkVXNlckxvYWRlZCh0aGlzLl9zdGFydC5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuYWRkVXNlclVubG9hZGVkKHRoaXMuX3N0b3AuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmdldFVzZXIoKS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICAvLyBkb2luZyB0aGlzIG1hbnVhbGx5IGhlcmUgc2luY2UgY2FsbGluZyBnZXRVc2VyIFxyXG4gICAgICAgICAgICAvLyBkb2Vzbid0IHRyaWdnZXIgbG9hZCBldmVudC5cclxuICAgICAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0KHVzZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3NldHRpbmdzLm1vbml0b3JBbm9ueW1vdXNTZXNzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5xdWVyeVNlc3Npb25TdGF0dXMoKS50aGVuKHNlc3Npb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0bXBVc2VyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uX3N0YXRlIDogc2Vzc2lvbi5zZXNzaW9uX3N0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2Vzc2lvbi5zdWIgJiYgc2Vzc2lvbi5zaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wVXNlci5wcm9maWxlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViOiBzZXNzaW9uLnN1YixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZDogc2Vzc2lvbi5zaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhcnQodG1wVXNlcik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2F0Y2ggdG8gc3VwcHJlc3MgZXJyb3JzIHNpbmNlIHdlJ3JlIGluIGEgY3RvclxyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlNlc3Npb25Nb25pdG9yIGN0b3I6IGVycm9yIGZyb20gcXVlcnlTZXNzaW9uU3RhdHVzOlwiLCBlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNhdGNoIHRvIHN1cHByZXNzIGVycm9ycyBzaW5jZSB3ZSdyZSBpbiBhIGN0b3JcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiU2Vzc2lvbk1vbml0b3IgY3RvcjogZXJyb3IgZnJvbSBnZXRVc2VyOlwiLCBlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IF9zZXR0aW5ncygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlck1hbmFnZXIuc2V0dGluZ3M7XHJcbiAgICB9XHJcbiAgICBnZXQgX21ldGFkYXRhU2VydmljZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlck1hbmFnZXIubWV0YWRhdGFTZXJ2aWNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IF9jbGllbnRfaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZDtcclxuICAgIH1cclxuICAgIGdldCBfY2hlY2tTZXNzaW9uSW50ZXJ2YWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLmNoZWNrU2Vzc2lvbkludGVydmFsO1xyXG4gICAgfVxyXG4gICAgZ2V0IF9zdG9wQ2hlY2tTZXNzaW9uT25FcnJvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3Muc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3I7XHJcbiAgICB9XHJcblxyXG4gICAgX3N0YXJ0KHVzZXIpIHtcclxuICAgICAgICBsZXQgc2Vzc2lvbl9zdGF0ZSA9IHVzZXIuc2Vzc2lvbl9zdGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKHNlc3Npb25fc3RhdGUpIHtcclxuICAgICAgICAgICAgaWYgKHVzZXIucHJvZmlsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3ViID0gdXNlci5wcm9maWxlLnN1YjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NpZCA9IHVzZXIucHJvZmlsZS5zaWQ7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTZXNzaW9uTW9uaXRvci5fc3RhcnQ6IHNlc3Npb25fc3RhdGU6XCIsIHNlc3Npb25fc3RhdGUsIFwiLCBzdWI6XCIsIHRoaXMuX3N1Yik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zaWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTZXNzaW9uTW9uaXRvci5fc3RhcnQ6IHNlc3Npb25fc3RhdGU6XCIsIHNlc3Npb25fc3RhdGUsIFwiLCBhbm9ueW1vdXMgdXNlclwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9jaGVja1Nlc3Npb25JRnJhbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRDaGVja1Nlc3Npb25JZnJhbWUoKS50aGVuKHVybCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVybCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTZXNzaW9uTW9uaXRvci5fc3RhcnQ6IEluaXRpYWxpemluZyBjaGVjayBzZXNzaW9uIGlmcmFtZVwiKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNsaWVudF9pZCA9IHRoaXMuX2NsaWVudF9pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGludGVydmFsID0gdGhpcy5fY2hlY2tTZXNzaW9uSW50ZXJ2YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdG9wT25FcnJvciA9IHRoaXMuX3N0b3BDaGVja1Nlc3Npb25PbkVycm9yO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tTZXNzaW9uSUZyYW1lID0gbmV3IHRoaXMuX0NoZWNrU2Vzc2lvbklGcmFtZUN0b3IodGhpcy5fY2FsbGJhY2suYmluZCh0aGlzKSwgY2xpZW50X2lkLCB1cmwsIGludGVydmFsLCBzdG9wT25FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrU2Vzc2lvbklGcmFtZS5sb2FkKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGVja1Nlc3Npb25JRnJhbWUuc3RhcnQoc2Vzc2lvbl9zdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLndhcm4oXCJTZXNzaW9uTW9uaXRvci5fc3RhcnQ6IE5vIGNoZWNrIHNlc3Npb24gaWZyYW1lIGZvdW5kIGluIHRoZSBtZXRhZGF0YVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhdGNoIHRvIHN1cHByZXNzIGVycm9ycyBzaW5jZSB3ZSdyZSBpbiBub24tcHJvbWlzZSBjYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlNlc3Npb25Nb25pdG9yLl9zdGFydDogRXJyb3IgZnJvbSBnZXRDaGVja1Nlc3Npb25JZnJhbWU6XCIsIGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tTZXNzaW9uSUZyYW1lLnN0YXJ0KHNlc3Npb25fc3RhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9zdG9wKCkge1xyXG4gICAgICAgIHRoaXMuX3N1YiA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLl9zaWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jaGVja1Nlc3Npb25JRnJhbWUpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiU2Vzc2lvbk1vbml0b3IuX3N0b3BcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrU2Vzc2lvbklGcmFtZS5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MubW9uaXRvckFub255bW91c1Nlc3Npb24pIHtcclxuICAgICAgICAgICAgLy8gdXNpbmcgYSB0aW1lciB0byBkZWxheSByZS1pbml0aWFsaXphdGlvbiB0byBhdm9pZCByYWNlIGNvbmRpdGlvbnMgZHVyaW5nIHNpZ25vdXRcclxuICAgICAgICAgICAgbGV0IHRpbWVySGFuZGxlID0gdGhpcy5fdGltZXIuc2V0SW50ZXJ2YWwoKCk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RpbWVyLmNsZWFySW50ZXJ2YWwodGltZXJIYW5kbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLnF1ZXJ5U2Vzc2lvblN0YXR1cygpLnRoZW4oc2Vzc2lvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRtcFVzZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25fc3RhdGUgOiBzZXNzaW9uLnNlc3Npb25fc3RhdGVcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXNzaW9uLnN1YiAmJiBzZXNzaW9uLnNpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0bXBVc2VyLnByb2ZpbGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWI6IHNlc3Npb24uc3ViLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkOiBzZXNzaW9uLnNpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFydCh0bXBVc2VyKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYXRjaCB0byBzdXBwcmVzcyBlcnJvcnMgc2luY2Ugd2UncmUgaW4gYSBjYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlNlc3Npb25Nb25pdG9yOiBlcnJvciBmcm9tIHF1ZXJ5U2Vzc2lvblN0YXR1czpcIiwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2NhbGxiYWNrKCkge1xyXG4gICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLnF1ZXJ5U2Vzc2lvblN0YXR1cygpLnRoZW4oc2Vzc2lvbiA9PiB7XHJcbiAgICAgICAgICAgIHZhciByYWlzZUV2ZW50ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZXNzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2Vzc2lvbi5zdWIgPT09IHRoaXMuX3N1Yikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJhaXNlRXZlbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGVja1Nlc3Npb25JRnJhbWUuc3RhcnQoc2Vzc2lvbi5zZXNzaW9uX3N0YXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlc3Npb24uc2lkID09PSB0aGlzLl9zaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiU2Vzc2lvbk1vbml0b3IuX2NhbGxiYWNrOiBTYW1lIHN1YiBzdGlsbCBsb2dnZWQgaW4gYXQgT1AsIHJlc3RhcnRpbmcgY2hlY2sgc2Vzc2lvbiBpZnJhbWU7IHNlc3Npb25fc3RhdGU6XCIsIHNlc3Npb24uc2Vzc2lvbl9zdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTZXNzaW9uTW9uaXRvci5fY2FsbGJhY2s6IFNhbWUgc3ViIHN0aWxsIGxvZ2dlZCBpbiBhdCBPUCwgc2Vzc2lvbiBzdGF0ZSBoYXMgY2hhbmdlZCwgcmVzdGFydGluZyBjaGVjayBzZXNzaW9uIGlmcmFtZTsgc2Vzc2lvbl9zdGF0ZTpcIiwgc2Vzc2lvbi5zZXNzaW9uX3N0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIuZXZlbnRzLl9yYWlzZVVzZXJTZXNzaW9uQ2hhbmdlZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlNlc3Npb25Nb25pdG9yLl9jYWxsYmFjazogRGlmZmVyZW50IHN1YmplY3Qgc2lnbmVkIGludG8gT1A6XCIsIHNlc3Npb24uc3ViKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlNlc3Npb25Nb25pdG9yLl9jYWxsYmFjazogU3ViamVjdCBubyBsb25nZXIgc2lnbmVkIGludG8gT1BcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChyYWlzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc3ViKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiU2Vzc2lvbk1vbml0b3IuX2NhbGxiYWNrOiBTZXNzaW9uTW9uaXRvci5fY2FsbGJhY2s7IHJhaXNpbmcgc2lnbmVkIG91dCBldmVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuX3JhaXNlVXNlclNpZ25lZE91dCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiU2Vzc2lvbk1vbml0b3IuX2NhbGxiYWNrOiBTZXNzaW9uTW9uaXRvci5fY2FsbGJhY2s7IHJhaXNpbmcgc2lnbmVkIGluIGV2ZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5fcmFpc2VVc2VyU2lnbmVkSW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zdWIpIHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlNlc3Npb25Nb25pdG9yLl9jYWxsYmFjazogRXJyb3IgY2FsbGluZyBxdWVyeUN1cnJlbnRTaWduaW5TZXNzaW9uOyByYWlzaW5nIHNpZ25lZCBvdXQgZXZlbnRcIiwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIuZXZlbnRzLl9yYWlzZVVzZXJTaWduZWRPdXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgVXJsVXRpbGl0eSB9IGZyb20gJy4vVXJsVXRpbGl0eS5qcyc7XHJcbmltcG9ydCB7IFNpZ25pblN0YXRlIH0gZnJvbSAnLi9TaWduaW5TdGF0ZS5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmluUmVxdWVzdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgLy8gbWFuZGF0b3J5XHJcbiAgICAgICAgdXJsLCBjbGllbnRfaWQsIHJlZGlyZWN0X3VyaSwgcmVzcG9uc2VfdHlwZSwgc2NvcGUsIGF1dGhvcml0eSxcclxuICAgICAgICAvLyBvcHRpb25hbFxyXG4gICAgICAgIGRhdGEsIHByb21wdCwgZGlzcGxheSwgbWF4X2FnZSwgdWlfbG9jYWxlcywgaWRfdG9rZW5faGludCwgbG9naW5faGludCwgYWNyX3ZhbHVlcywgcmVzb3VyY2UsIHJlc3BvbnNlX21vZGUsXHJcbiAgICAgICAgcmVxdWVzdCwgcmVxdWVzdF91cmksIGV4dHJhUXVlcnlQYXJhbXMsIHJlcXVlc3RfdHlwZSwgY2xpZW50X3NlY3JldCwgZXh0cmFUb2tlblBhcmFtcywgc2tpcFVzZXJJbmZvXHJcbiAgICB9KSB7XHJcbiAgICAgICAgaWYgKCF1cmwpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiU2lnbmluUmVxdWVzdC5jdG9yOiBObyB1cmwgcGFzc2VkXCIpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1cmxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY2xpZW50X2lkKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlNpZ25pblJlcXVlc3QuY3RvcjogTm8gY2xpZW50X2lkIHBhc3NlZFwiKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2xpZW50X2lkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJlZGlyZWN0X3VyaSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJTaWduaW5SZXF1ZXN0LmN0b3I6IE5vIHJlZGlyZWN0X3VyaSBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInJlZGlyZWN0X3VyaVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZV90eXBlKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlNpZ25pblJlcXVlc3QuY3RvcjogTm8gcmVzcG9uc2VfdHlwZSBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInJlc3BvbnNlX3R5cGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2NvcGUpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiU2lnbmluUmVxdWVzdC5jdG9yOiBObyBzY29wZSBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInNjb3BlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWF1dGhvcml0eSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJTaWduaW5SZXF1ZXN0LmN0b3I6IE5vIGF1dGhvcml0eSBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImF1dGhvcml0eVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBvaWRjID0gU2lnbmluUmVxdWVzdC5pc09pZGMocmVzcG9uc2VfdHlwZSk7XHJcbiAgICAgICAgbGV0IGNvZGUgPSBTaWduaW5SZXF1ZXN0LmlzQ29kZShyZXNwb25zZV90eXBlKTtcclxuXHJcbiAgICAgICAgaWYgKCFyZXNwb25zZV9tb2RlKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlX21vZGUgPSBTaWduaW5SZXF1ZXN0LmlzQ29kZShyZXNwb25zZV90eXBlKSA/IFwicXVlcnlcIiA6IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IFNpZ25pblN0YXRlKHsgbm9uY2U6IG9pZGMsIFxyXG4gICAgICAgICAgICBkYXRhLCBjbGllbnRfaWQsIGF1dGhvcml0eSwgcmVkaXJlY3RfdXJpLCBcclxuICAgICAgICAgICAgY29kZV92ZXJpZmllcjogY29kZSwgXHJcbiAgICAgICAgICAgIHJlcXVlc3RfdHlwZSwgcmVzcG9uc2VfbW9kZSxcclxuICAgICAgICAgICAgY2xpZW50X3NlY3JldCwgc2NvcGUsIGV4dHJhVG9rZW5QYXJhbXMsIHNraXBVc2VySW5mbyB9KTtcclxuXHJcbiAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwgXCJjbGllbnRfaWRcIiwgY2xpZW50X2lkKTtcclxuICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcInJlZGlyZWN0X3VyaVwiLCByZWRpcmVjdF91cmkpO1xyXG4gICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIFwicmVzcG9uc2VfdHlwZVwiLCByZXNwb25zZV90eXBlKTtcclxuICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcInNjb3BlXCIsIHNjb3BlKTtcclxuXHJcbiAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwgXCJzdGF0ZVwiLCB0aGlzLnN0YXRlLmlkKTtcclxuICAgICAgICBpZiAob2lkYykge1xyXG4gICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcIm5vbmNlXCIsIHRoaXMuc3RhdGUubm9uY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29kZSkge1xyXG4gICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcImNvZGVfY2hhbGxlbmdlXCIsIHRoaXMuc3RhdGUuY29kZV9jaGFsbGVuZ2UpO1xyXG4gICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcImNvZGVfY2hhbGxlbmdlX21ldGhvZFwiLCBcIlMyNTZcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgb3B0aW9uYWwgPSB7IHByb21wdCwgZGlzcGxheSwgbWF4X2FnZSwgdWlfbG9jYWxlcywgaWRfdG9rZW5faGludCwgbG9naW5faGludCwgYWNyX3ZhbHVlcywgcmVzb3VyY2UsIHJlcXVlc3QsIHJlcXVlc3RfdXJpLCByZXNwb25zZV9tb2RlIH07XHJcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gb3B0aW9uYWwpe1xyXG4gICAgICAgICAgICBpZiAob3B0aW9uYWxba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwga2V5LCBvcHRpb25hbFtrZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gZXh0cmFRdWVyeVBhcmFtcyl7XHJcbiAgICAgICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIGtleSwgZXh0cmFRdWVyeVBhcmFtc1trZXldKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGlzT2lkYyhyZXNwb25zZV90eXBlKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3BvbnNlX3R5cGUuc3BsaXQoL1xccysvZykuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0gPT09IFwiaWRfdG9rZW5cIjtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gISEocmVzdWx0WzBdKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaXNPQXV0aChyZXNwb25zZV90eXBlKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3BvbnNlX3R5cGUuc3BsaXQoL1xccysvZykuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0gPT09IFwidG9rZW5cIjtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gISEocmVzdWx0WzBdKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIGlzQ29kZShyZXNwb25zZV90eXBlKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3BvbnNlX3R5cGUuc3BsaXQoL1xccysvZykuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0gPT09IFwiY29kZVwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiAhIShyZXN1bHRbMF0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IFVybFV0aWxpdHkgfSBmcm9tICcuL1VybFV0aWxpdHkuanMnO1xyXG5cclxuY29uc3QgT2lkY1Njb3BlID0gXCJvcGVuaWRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduaW5SZXNwb25zZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih1cmwsIGRlbGltaXRlciA9IFwiI1wiKSB7XHJcblxyXG4gICAgICAgIHZhciB2YWx1ZXMgPSBVcmxVdGlsaXR5LnBhcnNlVXJsRnJhZ21lbnQodXJsLCBkZWxpbWl0ZXIpO1xyXG5cclxuICAgICAgICB0aGlzLmVycm9yID0gdmFsdWVzLmVycm9yO1xyXG4gICAgICAgIHRoaXMuZXJyb3JfZGVzY3JpcHRpb24gPSB2YWx1ZXMuZXJyb3JfZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5lcnJvcl91cmkgPSB2YWx1ZXMuZXJyb3JfdXJpO1xyXG5cclxuICAgICAgICB0aGlzLmNvZGUgPSB2YWx1ZXMuY29kZTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gdmFsdWVzLnN0YXRlO1xyXG4gICAgICAgIHRoaXMuaWRfdG9rZW4gPSB2YWx1ZXMuaWRfdG9rZW47XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uX3N0YXRlID0gdmFsdWVzLnNlc3Npb25fc3RhdGU7XHJcbiAgICAgICAgdGhpcy5hY2Nlc3NfdG9rZW4gPSB2YWx1ZXMuYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgIHRoaXMudG9rZW5fdHlwZSA9IHZhbHVlcy50b2tlbl90eXBlO1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSB2YWx1ZXMuc2NvcGU7XHJcbiAgICAgICAgdGhpcy5wcm9maWxlID0gdW5kZWZpbmVkOyAvLyB3aWxsIGJlIHNldCBmcm9tIFJlc3BvbnNlVmFsaWRhdG9yXHJcblxyXG4gICAgICAgIHRoaXMuZXhwaXJlc19pbiA9IHZhbHVlcy5leHBpcmVzX2luO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBleHBpcmVzX2luKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmV4cGlyZXNfYXQpIHtcclxuICAgICAgICAgICAgbGV0IG5vdyA9IHBhcnNlSW50KERhdGUubm93KCkgLyAxMDAwKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhwaXJlc19hdCAtIG5vdztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIHNldCBleHBpcmVzX2luKHZhbHVlKXtcclxuICAgICAgICBsZXQgZXhwaXJlc19pbiA9IHBhcnNlSW50KHZhbHVlKTtcclxuICAgICAgICBpZiAodHlwZW9mIGV4cGlyZXNfaW4gPT09ICdudW1iZXInICYmIGV4cGlyZXNfaW4gPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBub3cgPSBwYXJzZUludChEYXRlLm5vdygpIC8gMTAwMCk7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwaXJlc19hdCA9IG5vdyArIGV4cGlyZXNfaW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBleHBpcmVkKCkge1xyXG4gICAgICAgIGxldCBleHBpcmVzX2luID0gdGhpcy5leHBpcmVzX2luO1xyXG4gICAgICAgIGlmIChleHBpcmVzX2luICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGV4cGlyZXNfaW4gPD0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2NvcGVzKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5zY29wZSB8fCBcIlwiKS5zcGxpdChcIiBcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzT3BlbklkQ29ubmVjdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY29wZXMuaW5kZXhPZihPaWRjU2NvcGUpID49IDAgfHwgISF0aGlzLmlkX3Rva2VuO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL1N0YXRlLmpzJztcclxuaW1wb3J0IHsgSm9zZVV0aWwgfSBmcm9tICcuL0pvc2VVdGlsLmpzJztcclxuaW1wb3J0IHJhbmRvbSBmcm9tICcuL3JhbmRvbS5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmluU3RhdGUgZXh0ZW5kcyBTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7bm9uY2UsIGF1dGhvcml0eSwgY2xpZW50X2lkLCByZWRpcmVjdF91cmksIGNvZGVfdmVyaWZpZXIsIHJlc3BvbnNlX21vZGUsIGNsaWVudF9zZWNyZXQsIHNjb3BlLCBleHRyYVRva2VuUGFyYW1zLCBza2lwVXNlckluZm99ID0ge30pIHtcclxuICAgICAgICBzdXBlcihhcmd1bWVudHNbMF0pO1xyXG5cclxuICAgICAgICBpZiAobm9uY2UgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fbm9uY2UgPSByYW5kb20oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobm9uY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5fbm9uY2UgPSBub25jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb2RlX3ZlcmlmaWVyID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIC8vIHJhbmRvbSgpIHByb2R1Y2VzIDMyIGxlbmd0aFxyXG4gICAgICAgICAgICB0aGlzLl9jb2RlX3ZlcmlmaWVyID0gcmFuZG9tKCkgKyByYW5kb20oKSArIHJhbmRvbSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjb2RlX3ZlcmlmaWVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvZGVfdmVyaWZpZXIgPSBjb2RlX3ZlcmlmaWVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5jb2RlX3ZlcmlmaWVyKSB7XHJcbiAgICAgICAgICAgIGxldCBoYXNoID0gSm9zZVV0aWwuaGFzaFN0cmluZyh0aGlzLmNvZGVfdmVyaWZpZXIsIFwiU0hBMjU2XCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9jb2RlX2NoYWxsZW5nZSA9IEpvc2VVdGlsLmhleFRvQmFzZTY0VXJsKGhhc2gpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fcmVkaXJlY3RfdXJpID0gcmVkaXJlY3RfdXJpO1xyXG4gICAgICAgIHRoaXMuX2F1dGhvcml0eSA9IGF1dGhvcml0eTtcclxuICAgICAgICB0aGlzLl9jbGllbnRfaWQgPSBjbGllbnRfaWQ7XHJcbiAgICAgICAgdGhpcy5fcmVzcG9uc2VfbW9kZSA9IHJlc3BvbnNlX21vZGU7XHJcbiAgICAgICAgdGhpcy5fY2xpZW50X3NlY3JldCA9IGNsaWVudF9zZWNyZXQ7XHJcbiAgICAgICAgdGhpcy5fc2NvcGUgPSBzY29wZTtcclxuICAgICAgICB0aGlzLl9leHRyYVRva2VuUGFyYW1zID0gZXh0cmFUb2tlblBhcmFtcztcclxuICAgICAgICB0aGlzLl9za2lwVXNlckluZm8gPSBza2lwVXNlckluZm87XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG5vbmNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ub25jZTtcclxuICAgIH1cclxuICAgIGdldCBhdXRob3JpdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhvcml0eTtcclxuICAgIH1cclxuICAgIGdldCBjbGllbnRfaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudF9pZDtcclxuICAgIH1cclxuICAgIGdldCByZWRpcmVjdF91cmkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZGlyZWN0X3VyaTtcclxuICAgIH1cclxuICAgIGdldCBjb2RlX3ZlcmlmaWVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb2RlX3ZlcmlmaWVyO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNvZGVfY2hhbGxlbmdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb2RlX2NoYWxsZW5nZTtcclxuICAgIH1cclxuICAgIGdldCByZXNwb25zZV9tb2RlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZV9tb2RlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNsaWVudF9zZWNyZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudF9zZWNyZXQ7XHJcbiAgICB9XHJcbiAgICBnZXQgc2NvcGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Njb3BlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGV4dHJhVG9rZW5QYXJhbXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4dHJhVG9rZW5QYXJhbXM7XHJcbiAgICB9XHJcbiAgICBnZXQgc2tpcFVzZXJJbmZvKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9za2lwVXNlckluZm87XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRvU3RvcmFnZVN0cmluZygpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJTaWduaW5TdGF0ZS50b1N0b3JhZ2VTdHJpbmdcIik7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgIGRhdGE6IHRoaXMuZGF0YSxcclxuICAgICAgICAgICAgY3JlYXRlZDogdGhpcy5jcmVhdGVkLFxyXG4gICAgICAgICAgICByZXF1ZXN0X3R5cGU6IHRoaXMucmVxdWVzdF90eXBlLFxyXG4gICAgICAgICAgICBub25jZTogdGhpcy5ub25jZSxcclxuICAgICAgICAgICAgY29kZV92ZXJpZmllcjogdGhpcy5jb2RlX3ZlcmlmaWVyLFxyXG4gICAgICAgICAgICByZWRpcmVjdF91cmk6IHRoaXMucmVkaXJlY3RfdXJpLFxyXG4gICAgICAgICAgICBhdXRob3JpdHk6IHRoaXMuYXV0aG9yaXR5LFxyXG4gICAgICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxyXG4gICAgICAgICAgICByZXNwb25zZV9tb2RlOiB0aGlzLnJlc3BvbnNlX21vZGUsXHJcbiAgICAgICAgICAgIGNsaWVudF9zZWNyZXQ6IHRoaXMuY2xpZW50X3NlY3JldCxcclxuICAgICAgICAgICAgc2NvcGU6IHRoaXMuc2NvcGUsXHJcbiAgICAgICAgICAgIGV4dHJhVG9rZW5QYXJhbXMgOiB0aGlzLmV4dHJhVG9rZW5QYXJhbXMsXHJcbiAgICAgICAgICAgIHNraXBVc2VySW5mbzogdGhpcy5za2lwVXNlckluZm9cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZnJvbVN0b3JhZ2VTdHJpbmcoc3RvcmFnZVN0cmluZykge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlNpZ25pblN0YXRlLmZyb21TdG9yYWdlU3RyaW5nXCIpO1xyXG4gICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShzdG9yYWdlU3RyaW5nKTtcclxuICAgICAgICByZXR1cm4gbmV3IFNpZ25pblN0YXRlKGRhdGEpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgVXJsVXRpbGl0eSB9IGZyb20gJy4vVXJsVXRpbGl0eS5qcyc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi9TdGF0ZS5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbm91dFJlcXVlc3Qge1xyXG4gICAgY29uc3RydWN0b3Ioe3VybCwgaWRfdG9rZW5faGludCwgcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpLCBkYXRhLCBleHRyYVF1ZXJ5UGFyYW1zLCByZXF1ZXN0X3R5cGV9KSB7XHJcbiAgICAgICAgaWYgKCF1cmwpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiU2lnbm91dFJlcXVlc3QuY3RvcjogTm8gdXJsIHBhc3NlZFwiKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidXJsXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlkX3Rva2VuX2hpbnQpIHtcclxuICAgICAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwgXCJpZF90b2tlbl9oaW50XCIsIGlkX3Rva2VuX2hpbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSkge1xyXG4gICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcInBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaVwiLCBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgU3RhdGUoeyBkYXRhLCByZXF1ZXN0X3R5cGUgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwgXCJzdGF0ZVwiLCB0aGlzLnN0YXRlLmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gZXh0cmFRdWVyeVBhcmFtcyl7XHJcbiAgICAgICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIGtleSwgZXh0cmFRdWVyeVBhcmFtc1trZXldKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgVXJsVXRpbGl0eSB9IGZyb20gJy4vVXJsVXRpbGl0eS5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbm91dFJlc3BvbnNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHVybCkge1xyXG5cclxuICAgICAgICB2YXIgdmFsdWVzID0gVXJsVXRpbGl0eS5wYXJzZVVybEZyYWdtZW50KHVybCwgXCI/XCIpO1xyXG5cclxuICAgICAgICB0aGlzLmVycm9yID0gdmFsdWVzLmVycm9yO1xyXG4gICAgICAgIHRoaXMuZXJyb3JfZGVzY3JpcHRpb24gPSB2YWx1ZXMuZXJyb3JfZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5lcnJvcl91cmkgPSB2YWx1ZXMuZXJyb3JfdXJpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gdmFsdWVzLnN0YXRlO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWxlbnRSZW5ld1NlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHVzZXJNYW5hZ2VyKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIgPSB1c2VyTWFuYWdlcjtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrID0gdGhpcy5fdG9rZW5FeHBpcmluZy5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuYWRkQWNjZXNzVG9rZW5FeHBpcmluZyh0aGlzLl9jYWxsYmFjayk7XHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzIHdpbGwgdHJpZ2dlciBsb2FkaW5nIG9mIHRoZSB1c2VyIHNvIHRoZSBleHBpcmluZyBldmVudHMgY2FuIGJlIGluaXRpYWxpemVkXHJcbiAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmdldFVzZXIoKS50aGVuKHVzZXI9PntcclxuICAgICAgICAgICAgICAgIC8vIGRlbGliZXJhdGUgbm9wXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICAgICAgLy8gY2F0Y2ggdG8gc3VwcHJlc3MgZXJyb3JzIHNpbmNlIHdlJ3JlIGluIGEgY3RvclxyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiU2lsZW50UmVuZXdTZXJ2aWNlLnN0YXJ0OiBFcnJvciBmcm9tIGdldFVzZXI6XCIsIGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5yZW1vdmVBY2Nlc3NUb2tlbkV4cGlyaW5nKHRoaXMuX2NhbGxiYWNrKTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfdG9rZW5FeHBpcmluZygpIHtcclxuICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5zaWduaW5TaWxlbnQoKS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJTaWxlbnRSZW5ld1NlcnZpY2UuX3Rva2VuRXhwaXJpbmc6IFNpbGVudCB0b2tlbiByZW5ld2FsIHN1Y2Nlc3NmdWxcIik7XHJcbiAgICAgICAgfSwgZXJyID0+IHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiU2lsZW50UmVuZXdTZXJ2aWNlLl90b2tlbkV4cGlyaW5nOiBFcnJvciBmcm9tIHNpZ25pblNpbGVudDpcIiwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuX3JhaXNlU2lsZW50UmVuZXdFcnJvcihlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHJhbmRvbSBmcm9tICcuL3JhbmRvbS5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhdGUge1xyXG4gICAgY29uc3RydWN0b3Ioe2lkLCBkYXRhLCBjcmVhdGVkLCByZXF1ZXN0X3R5cGV9ID0ge30pIHtcclxuICAgICAgICB0aGlzLl9pZCA9IGlkIHx8IHJhbmRvbSgpO1xyXG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGNyZWF0ZWQgPT09ICdudW1iZXInICYmIGNyZWF0ZWQgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZWQgPSBjcmVhdGVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlZCA9IHBhcnNlSW50KERhdGUubm93KCkgLyAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcmVxdWVzdF90eXBlID0gIHJlcXVlc3RfdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gICAgfVxyXG4gICAgZ2V0IGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XHJcbiAgICB9XHJcbiAgICBnZXQgY3JlYXRlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlZDtcclxuICAgIH1cclxuICAgIGdldCByZXF1ZXN0X3R5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3RfdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICB0b1N0b3JhZ2VTdHJpbmcoKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiU3RhdGUudG9TdG9yYWdlU3RyaW5nXCIpO1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBkYXRhOiB0aGlzLmRhdGEsXHJcbiAgICAgICAgICAgIGNyZWF0ZWQ6IHRoaXMuY3JlYXRlZCxcclxuICAgICAgICAgICAgcmVxdWVzdF90eXBlOiB0aGlzLnJlcXVlc3RfdHlwZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmcm9tU3RvcmFnZVN0cmluZyhzdG9yYWdlU3RyaW5nKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiU3RhdGUuZnJvbVN0b3JhZ2VTdHJpbmdcIik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdGF0ZShKU09OLnBhcnNlKHN0b3JhZ2VTdHJpbmcpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2xlYXJTdGFsZVN0YXRlKHN0b3JhZ2UsIGFnZSkge1xyXG5cclxuICAgICAgICB2YXIgY3V0b2ZmID0gRGF0ZS5ub3coKSAvIDEwMDAgLSBhZ2U7XHJcblxyXG4gICAgICAgIHJldHVybiBzdG9yYWdlLmdldEFsbEtleXMoKS50aGVuKGtleXMgPT4ge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJTdGF0ZS5jbGVhclN0YWxlU3RhdGU6IGdvdCBrZXlzXCIsIGtleXMpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHByb21pc2VzID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IGtleXNbaV07XHJcbiAgICAgICAgICAgICAgICB2YXIgcCA9IHN0b3JhZ2UuZ2V0KGtleSkudGhlbihpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVtb3ZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBTdGF0ZS5mcm9tU3RvcmFnZVN0cmluZyhpdGVtKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlN0YXRlLmNsZWFyU3RhbGVTdGF0ZTogZ290IGl0ZW0gZnJvbSBrZXk6IFwiLCBrZXksIHN0YXRlLmNyZWF0ZWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5jcmVhdGVkIDw9IGN1dG9mZikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlN0YXRlLmNsZWFyU3RhbGVTdGF0ZTogRXJyb3IgcGFyc2luZyBzdGF0ZSBmb3Iga2V5XCIsIGtleSwgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlN0YXRlLmNsZWFyU3RhbGVTdGF0ZTogbm8gaXRlbSBpbiBzdG9yYWdlIGZvciBrZXk6IFwiLCBrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlbW92ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTdGF0ZS5jbGVhclN0YWxlU3RhdGU6IHJlbW92ZWQgaXRlbSBmb3Iga2V5OiBcIiwga2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0b3JhZ2UucmVtb3ZlKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiU3RhdGUuY2xlYXJTdGFsZVN0YXRlOiB3YWl0aW5nIG9uIHByb21pc2UgY291bnQ6XCIsIHByb21pc2VzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tICcuL0dsb2JhbC5qcyc7XHJcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSAnLi9FdmVudC5qcyc7XHJcblxyXG5jb25zdCBUaW1lckR1cmF0aW9uID0gNTsgLy8gc2Vjb25kc1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbWVyIGV4dGVuZHMgRXZlbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHRpbWVyID0gR2xvYmFsLnRpbWVyLCBub3dGdW5jID0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSk7XHJcbiAgICAgICAgdGhpcy5fdGltZXIgPSB0aW1lcjtcclxuXHJcbiAgICAgICAgaWYgKG5vd0Z1bmMpIHtcclxuICAgICAgICAgICAgdGhpcy5fbm93RnVuYyA9IG5vd0Z1bmM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9ub3dGdW5jID0gKCkgPT4gRGF0ZS5ub3coKSAvIDEwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBub3coKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuX25vd0Z1bmMoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdChkdXJhdGlvbikge1xyXG4gICAgICAgIGlmIChkdXJhdGlvbiA8PSAwKSB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZHVyYXRpb24gPSBwYXJzZUludChkdXJhdGlvbik7XHJcblxyXG4gICAgICAgIHZhciBleHBpcmF0aW9uID0gdGhpcy5ub3cgKyBkdXJhdGlvbjtcclxuICAgICAgICBpZiAodGhpcy5leHBpcmF0aW9uID09PSBleHBpcmF0aW9uICYmIHRoaXMuX3RpbWVySGFuZGxlKSB7XHJcbiAgICAgICAgICAgIC8vIG5vIG5lZWQgdG8gcmVpbml0aWFsaXplIHRvIHNhbWUgZXhwaXJhdGlvbiwgc28gYmFpbCBvdXRcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVGltZXIuaW5pdCB0aW1lciBcIiArIHRoaXMuX25hbWUgKyBcIiBza2lwcGluZyBpbml0aWFsaXphdGlvbiBzaW5jZSBhbHJlYWR5IGluaXRpYWxpemVkIGZvciBleHBpcmF0aW9uOlwiLCB0aGlzLmV4cGlyYXRpb24pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNhbmNlbCgpO1xyXG5cclxuICAgICAgICBMb2cuZGVidWcoXCJUaW1lci5pbml0IHRpbWVyIFwiICsgdGhpcy5fbmFtZSArIFwiIGZvciBkdXJhdGlvbjpcIiwgZHVyYXRpb24pO1xyXG4gICAgICAgIHRoaXMuX2V4cGlyYXRpb24gPSBleHBpcmF0aW9uO1xyXG5cclxuICAgICAgICAvLyB3ZSdyZSB1c2luZyBhIGZhaXJseSBzaG9ydCB0aW1lciBhbmQgdGhlbiBjaGVja2luZyB0aGUgZXhwaXJhdGlvbiBpbiB0aGVcclxuICAgICAgICAvLyBjYWxsYmFjayB0byBoYW5kbGUgc2NlbmFyaW9zIHdoZXJlIHRoZSBicm93c2VyIGRldmljZSBzbGVlcHMsIGFuZCB0aGVuXHJcbiAgICAgICAgLy8gdGhlIHRpbWVycyBlbmQgdXAgZ2V0dGluZyBkZWxheWVkLlxyXG4gICAgICAgIHZhciB0aW1lckR1cmF0aW9uID0gVGltZXJEdXJhdGlvbjtcclxuICAgICAgICBpZiAoZHVyYXRpb24gPCB0aW1lckR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRpbWVyRHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdGltZXJIYW5kbGUgPSB0aGlzLl90aW1lci5zZXRJbnRlcnZhbCh0aGlzLl9jYWxsYmFjay5iaW5kKHRoaXMpLCB0aW1lckR1cmF0aW9uICogMTAwMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCBleHBpcmF0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9leHBpcmF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbmNlbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fdGltZXJIYW5kbGUpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVGltZXIuY2FuY2VsOiBcIiwgdGhpcy5fbmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3RpbWVyLmNsZWFySW50ZXJ2YWwodGhpcy5fdGltZXJIYW5kbGUpO1xyXG4gICAgICAgICAgICB0aGlzLl90aW1lckhhbmRsZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9jYWxsYmFjaygpIHtcclxuICAgICAgICB2YXIgZGlmZiA9IHRoaXMuX2V4cGlyYXRpb24gLSB0aGlzLm5vdztcclxuICAgICAgICBMb2cuZGVidWcoXCJUaW1lci5jYWxsYmFjazsgXCIgKyB0aGlzLl9uYW1lICsgXCIgdGltZXIgZXhwaXJlcyBpbjpcIiwgZGlmZik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9leHBpcmF0aW9uIDw9IHRoaXMubm93KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsKCk7XHJcbiAgICAgICAgICAgIHN1cGVyLnJhaXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IEpzb25TZXJ2aWNlIH0gZnJvbSAnLi9Kc29uU2VydmljZS5qcyc7XHJcbmltcG9ydCB7IE1ldGFkYXRhU2VydmljZSB9IGZyb20gJy4vTWV0YWRhdGFTZXJ2aWNlLmpzJztcclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRva2VuQ2xpZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBKc29uU2VydmljZUN0b3IgPSBKc29uU2VydmljZSwgTWV0YWRhdGFTZXJ2aWNlQ3RvciA9IE1ldGFkYXRhU2VydmljZSkge1xyXG4gICAgICAgIGlmICghc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiVG9rZW5DbGllbnQuY3RvcjogTm8gc2V0dGluZ3MgcGFzc2VkXCIpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzZXR0aW5nc1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzID0gc2V0dGluZ3M7XHJcbiAgICAgICAgdGhpcy5fanNvblNlcnZpY2UgPSBuZXcgSnNvblNlcnZpY2VDdG9yKCk7XHJcbiAgICAgICAgdGhpcy5fbWV0YWRhdGFTZXJ2aWNlID0gbmV3IE1ldGFkYXRhU2VydmljZUN0b3IodGhpcy5fc2V0dGluZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGV4Y2hhbmdlQ29kZShhcmdzID0ge30pIHtcclxuICAgICAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgYXJncyk7XHJcblxyXG4gICAgICAgIGFyZ3MuZ3JhbnRfdHlwZSA9IGFyZ3MuZ3JhbnRfdHlwZSB8fCBcImF1dGhvcml6YXRpb25fY29kZVwiO1xyXG4gICAgICAgIGFyZ3MuY2xpZW50X2lkID0gYXJncy5jbGllbnRfaWQgfHwgdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkO1xyXG4gICAgICAgIGFyZ3MucmVkaXJlY3RfdXJpID0gYXJncy5yZWRpcmVjdF91cmkgfHwgdGhpcy5fc2V0dGluZ3MucmVkaXJlY3RfdXJpO1xyXG5cclxuICAgICAgICBpZiAoIWFyZ3MuY29kZSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlbkNsaWVudC5leGNoYW5nZUNvZGU6IE5vIGNvZGUgcGFzc2VkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQSBjb2RlIGlzIHJlcXVpcmVkXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFhcmdzLnJlZGlyZWN0X3VyaSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlbkNsaWVudC5leGNoYW5nZUNvZGU6IE5vIHJlZGlyZWN0X3VyaSBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJBIHJlZGlyZWN0X3VyaSBpcyByZXF1aXJlZFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYXJncy5jb2RlX3ZlcmlmaWVyKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlRva2VuQ2xpZW50LmV4Y2hhbmdlQ29kZTogTm8gY29kZV92ZXJpZmllciBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJBIGNvZGVfdmVyaWZpZXIgaXMgcmVxdWlyZWRcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWFyZ3MuY2xpZW50X2lkKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlRva2VuQ2xpZW50LmV4Y2hhbmdlQ29kZTogTm8gY2xpZW50X2lkIHBhc3NlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkEgY2xpZW50X2lkIGlzIHJlcXVpcmVkXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0VG9rZW5FbmRwb2ludChmYWxzZSkudGhlbih1cmwgPT4ge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJUb2tlbkNsaWVudC5leGNoYW5nZUNvZGU6IFJlY2VpdmVkIHRva2VuIGVuZHBvaW50XCIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pzb25TZXJ2aWNlLnBvc3RGb3JtKHVybCwgYXJncykudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJUb2tlbkNsaWVudC5leGNoYW5nZUNvZGU6IHJlc3BvbnNlIHJlY2VpdmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBleGNoYW5nZVJlZnJlc2hUb2tlbihhcmdzID0ge30pIHtcclxuICAgICAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgYXJncyk7XHJcblxyXG4gICAgICAgIGFyZ3MuZ3JhbnRfdHlwZSA9IGFyZ3MuZ3JhbnRfdHlwZSB8fCBcInJlZnJlc2hfdG9rZW5cIjtcclxuICAgICAgICBhcmdzLmNsaWVudF9pZCA9IGFyZ3MuY2xpZW50X2lkIHx8IHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZDtcclxuICAgICAgICBhcmdzLmNsaWVudF9zZWNyZXQgPSBhcmdzLmNsaWVudF9zZWNyZXQgfHwgdGhpcy5fc2V0dGluZ3MuY2xpZW50X3NlY3JldDtcclxuXHJcbiAgICAgICAgaWYgKCFhcmdzLnJlZnJlc2hfdG9rZW4pIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiVG9rZW5DbGllbnQuZXhjaGFuZ2VSZWZyZXNoVG9rZW46IE5vIHJlZnJlc2hfdG9rZW4gcGFzc2VkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQSByZWZyZXNoX3Rva2VuIGlzIHJlcXVpcmVkXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFhcmdzLmNsaWVudF9pZCkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlbkNsaWVudC5leGNoYW5nZVJlZnJlc2hUb2tlbjogTm8gY2xpZW50X2lkIHBhc3NlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkEgY2xpZW50X2lkIGlzIHJlcXVpcmVkXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0VG9rZW5FbmRwb2ludChmYWxzZSkudGhlbih1cmwgPT4ge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJUb2tlbkNsaWVudC5leGNoYW5nZVJlZnJlc2hUb2tlbjogUmVjZWl2ZWQgdG9rZW4gZW5kcG9pbnRcIik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvblNlcnZpY2UucG9zdEZvcm0odXJsLCBhcmdzKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlRva2VuQ2xpZW50LmV4Y2hhbmdlUmVmcmVzaFRva2VuOiByZXNwb25zZSByZWNlaXZlZFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5pbXBvcnQgeyBNZXRhZGF0YVNlcnZpY2UgfSBmcm9tICcuL01ldGFkYXRhU2VydmljZS5qcyc7XHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gJy4vR2xvYmFsLmpzJztcclxuXHJcbmNvbnN0IEFjY2Vzc1Rva2VuVHlwZUhpbnQgPSBcImFjY2Vzc190b2tlblwiO1xyXG5jb25zdCBSZWZyZXNoVG9rZW5UeXBlSGludCA9IFwicmVmcmVzaF90b2tlblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRva2VuUmV2b2NhdGlvbkNsaWVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgWE1MSHR0cFJlcXVlc3RDdG9yID0gR2xvYmFsLlhNTEh0dHBSZXF1ZXN0LCBNZXRhZGF0YVNlcnZpY2VDdG9yID0gTWV0YWRhdGFTZXJ2aWNlKSB7XHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncykge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlblJldm9jYXRpb25DbGllbnQuY3RvcjogTm8gc2V0dGluZ3MgcHJvdmlkZWRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHNldHRpbmdzIHByb3ZpZGVkLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzID0gc2V0dGluZ3M7XHJcbiAgICAgICAgdGhpcy5fWE1MSHR0cFJlcXVlc3RDdG9yID0gWE1MSHR0cFJlcXVlc3RDdG9yO1xyXG4gICAgICAgIHRoaXMuX21ldGFkYXRhU2VydmljZSA9IG5ldyBNZXRhZGF0YVNlcnZpY2VDdG9yKHRoaXMuX3NldHRpbmdzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXZva2UodG9rZW4sIHJlcXVpcmVkLCB0eXBlID0gXCJhY2Nlc3NfdG9rZW5cIikge1xyXG4gICAgICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiVG9rZW5SZXZvY2F0aW9uQ2xpZW50LnJldm9rZTogTm8gdG9rZW4gcHJvdmlkZWRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHRva2VuIHByb3ZpZGVkLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlICE9PSBBY2Nlc3NUb2tlblR5cGVIaW50ICYmIHR5cGUgIT0gUmVmcmVzaFRva2VuVHlwZUhpbnQpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiVG9rZW5SZXZvY2F0aW9uQ2xpZW50LnJldm9rZTogSW52YWxpZCB0b2tlbiB0eXBlXCIpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHRva2VuIHR5cGUuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRSZXZvY2F0aW9uRW5kcG9pbnQoKS50aGVuKHVybCA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlblJldm9jYXRpb25DbGllbnQucmV2b2tlOiBSZXZvY2F0aW9uIG5vdCBzdXBwb3J0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmV2b2NhdGlvbiBub3Qgc3VwcG9ydGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIG5vdCByZXF1aXJlZCwgc28gZG9uJ3QgZXJyb3IgYW5kIGp1c3QgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlRva2VuUmV2b2NhdGlvbkNsaWVudC5yZXZva2U6IFJldm9raW5nIFwiICsgdHlwZSk7XHJcbiAgICAgICAgICAgIHZhciBjbGllbnRfaWQgPSB0aGlzLl9zZXR0aW5ncy5jbGllbnRfaWQ7XHJcbiAgICAgICAgICAgIHZhciBjbGllbnRfc2VjcmV0ID0gdGhpcy5fc2V0dGluZ3MuY2xpZW50X3NlY3JldDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jldm9rZSh1cmwsIGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCwgdG9rZW4sIHR5cGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZXZva2UodXJsLCBjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQsIHRva2VuLCB0eXBlKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICAgICAgICB2YXIgeGhyID0gbmV3IHRoaXMuX1hNTEh0dHBSZXF1ZXN0Q3RvcigpO1xyXG4gICAgICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsKTtcclxuXHJcbiAgICAgICAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJUb2tlblJldm9jYXRpb25DbGllbnQucmV2b2tlOiBIVFRQIHJlc3BvbnNlIHJlY2VpdmVkLCBzdGF0dXNcIiwgeGhyLnN0YXR1cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChFcnJvcih4aHIuc3RhdHVzVGV4dCArIFwiIChcIiArIHhoci5zdGF0dXMgKyBcIilcIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB4aHIub25lcnJvciA9ICgpID0+IHsgXHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJUb2tlblJldm9jYXRpb25DbGllbnQucmV2b2tlOiBOZXR3b3JrIEVycm9yLlwiKVxyXG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiTmV0d29yayBFcnJvclwiKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBib2R5ID0gXCJjbGllbnRfaWQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoY2xpZW50X2lkKTtcclxuICAgICAgICAgICAgaWYgKGNsaWVudF9zZWNyZXQpIHtcclxuICAgICAgICAgICAgICAgIGJvZHkgKz0gXCImY2xpZW50X3NlY3JldD1cIiArIGVuY29kZVVSSUNvbXBvbmVudChjbGllbnRfc2VjcmV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBib2R5ICs9IFwiJnRva2VuX3R5cGVfaGludD1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh0eXBlKTtcclxuICAgICAgICAgICAgYm9keSArPSBcIiZ0b2tlbj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh0b2tlbik7XHJcblxyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcclxuICAgICAgICAgICAgeGhyLnNlbmQoYm9keSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xyXG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tICcuL0dsb2JhbC5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVXJsVXRpbGl0eSB7XHJcbiAgICBzdGF0aWMgYWRkUXVlcnlQYXJhbSh1cmwsIG5hbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHVybC5pbmRleE9mKCc/JykgPCAwKSB7XHJcbiAgICAgICAgICAgIHVybCArPSBcIj9cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1cmxbdXJsLmxlbmd0aCAtIDFdICE9PSBcIj9cIikge1xyXG4gICAgICAgICAgICB1cmwgKz0gXCImXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1cmwgKz0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpO1xyXG4gICAgICAgIHVybCArPSBcIj1cIjtcclxuICAgICAgICB1cmwgKz0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcGFyc2VVcmxGcmFnbWVudCh2YWx1ZSwgZGVsaW1pdGVyID0gXCIjXCIsIGdsb2JhbCA9IEdsb2JhbCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKXtcclxuICAgICAgICAgICAgdmFsdWUgPSBnbG9iYWwubG9jYXRpb24uaHJlZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBpZHggPSB2YWx1ZS5sYXN0SW5kZXhPZihkZWxpbWl0ZXIpO1xyXG4gICAgICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cihpZHggKyAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkZWxpbWl0ZXIgPT09IFwiP1wiKSB7XHJcbiAgICAgICAgICAgIC8vIGlmIHdlJ3JlIGRvaW5nIHF1ZXJ5LCB0aGVuIHN0cmlwIG9mZiBoYXNoIGZyYWdtZW50IGJlZm9yZSB3ZSBwYXJzZVxyXG4gICAgICAgICAgICBpZHggPSB2YWx1ZS5pbmRleE9mKCcjJyk7XHJcbiAgICAgICAgICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJzdHIoMCwgaWR4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IHt9LFxyXG4gICAgICAgICAgICByZWdleCA9IC8oW14mPV0rKT0oW14mXSopL2csXHJcbiAgICAgICAgICAgIG07XHJcblxyXG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgICAgICB3aGlsZSAobSA9IHJlZ2V4LmV4ZWModmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHBhcmFtc1tkZWNvZGVVUklDb21wb25lbnQobVsxXSldID0gZGVjb2RlVVJJQ29tcG9uZW50KG1bMl0ucmVwbGFjZSgvXFwrL2csICcgJykpO1xyXG4gICAgICAgICAgICBpZiAoY291bnRlcisrID4gNTApIHtcclxuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVybFV0aWxpdHkucGFyc2VVcmxGcmFnbWVudDogcmVzcG9uc2UgZXhjZWVkZWQgZXhwZWN0ZWQgbnVtYmVyIG9mIHBhcmFtZXRlcnNcIiwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogXCJSZXNwb25zZSBleGNlZWRlZCBleHBlY3RlZCBudW1iZXIgb2YgcGFyYW1ldGVyc1wiXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBwcm9wIGluIHBhcmFtcykge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKHtpZF90b2tlbiwgc2Vzc2lvbl9zdGF0ZSwgYWNjZXNzX3Rva2VuLCByZWZyZXNoX3Rva2VuLCB0b2tlbl90eXBlLCBzY29wZSwgcHJvZmlsZSwgZXhwaXJlc19hdCwgc3RhdGV9KSB7XHJcbiAgICAgICAgdGhpcy5pZF90b2tlbiA9IGlkX3Rva2VuO1xyXG4gICAgICAgIHRoaXMuc2Vzc2lvbl9zdGF0ZSA9IHNlc3Npb25fc3RhdGU7XHJcbiAgICAgICAgdGhpcy5hY2Nlc3NfdG9rZW4gPSBhY2Nlc3NfdG9rZW47XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoX3Rva2VuID0gcmVmcmVzaF90b2tlbjtcclxuICAgICAgICB0aGlzLnRva2VuX3R5cGUgPSB0b2tlbl90eXBlO1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcclxuICAgICAgICB0aGlzLnByb2ZpbGUgPSBwcm9maWxlO1xyXG4gICAgICAgIHRoaXMuZXhwaXJlc19hdCA9IGV4cGlyZXNfYXQ7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBleHBpcmVzX2luKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmV4cGlyZXNfYXQpIHtcclxuICAgICAgICAgICAgbGV0IG5vdyA9IHBhcnNlSW50KERhdGUubm93KCkgLyAxMDAwKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhwaXJlc19hdCAtIG5vdztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIHNldCBleHBpcmVzX2luKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IGV4cGlyZXNfaW4gPSBwYXJzZUludCh2YWx1ZSk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBleHBpcmVzX2luID09PSAnbnVtYmVyJyAmJiBleHBpcmVzX2luID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgbm93ID0gcGFyc2VJbnQoRGF0ZS5ub3coKSAvIDEwMDApO1xyXG4gICAgICAgICAgICB0aGlzLmV4cGlyZXNfYXQgPSBub3cgKyBleHBpcmVzX2luO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgZXhwaXJlZCgpIHtcclxuICAgICAgICBsZXQgZXhwaXJlc19pbiA9IHRoaXMuZXhwaXJlc19pbjtcclxuICAgICAgICBpZiAoZXhwaXJlc19pbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBleHBpcmVzX2luIDw9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNjb3BlcygpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuc2NvcGUgfHwgXCJcIikuc3BsaXQoXCIgXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RvcmFnZVN0cmluZygpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJVc2VyLnRvU3RvcmFnZVN0cmluZ1wiKTtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBpZF90b2tlbjogdGhpcy5pZF90b2tlbixcclxuICAgICAgICAgICAgc2Vzc2lvbl9zdGF0ZTogdGhpcy5zZXNzaW9uX3N0YXRlLFxyXG4gICAgICAgICAgICBhY2Nlc3NfdG9rZW46IHRoaXMuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICByZWZyZXNoX3Rva2VuOiB0aGlzLnJlZnJlc2hfdG9rZW4sXHJcbiAgICAgICAgICAgIHRva2VuX3R5cGU6IHRoaXMudG9rZW5fdHlwZSxcclxuICAgICAgICAgICAgc2NvcGU6IHRoaXMuc2NvcGUsXHJcbiAgICAgICAgICAgIHByb2ZpbGU6IHRoaXMucHJvZmlsZSxcclxuICAgICAgICAgICAgZXhwaXJlc19hdDogdGhpcy5leHBpcmVzX2F0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZyb21TdG9yYWdlU3RyaW5nKHN0b3JhZ2VTdHJpbmcpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJVc2VyLmZyb21TdG9yYWdlU3RyaW5nXCIpO1xyXG4gICAgICAgIHJldHVybiBuZXcgVXNlcihKU09OLnBhcnNlKHN0b3JhZ2VTdHJpbmcpKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBKc29uU2VydmljZSB9IGZyb20gJy4vSnNvblNlcnZpY2UuanMnO1xyXG5pbXBvcnQgeyBNZXRhZGF0YVNlcnZpY2UgfSBmcm9tICcuL01ldGFkYXRhU2VydmljZS5qcyc7XHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgSm9zZVV0aWwgfSBmcm9tICcuL0pvc2VVdGlsLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VySW5mb1NlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgc2V0dGluZ3MsIFxyXG4gICAgICAgIEpzb25TZXJ2aWNlQ3RvciA9IEpzb25TZXJ2aWNlLCBcclxuICAgICAgICBNZXRhZGF0YVNlcnZpY2VDdG9yID0gTWV0YWRhdGFTZXJ2aWNlLCBcclxuICAgICAgICBqb3NlVXRpbCA9IEpvc2VVdGlsXHJcbiAgICApIHtcclxuICAgICAgICBpZiAoIXNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJJbmZvU2VydmljZS5jdG9yOiBObyBzZXR0aW5ncyBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInNldHRpbmdzXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuICAgICAgICB0aGlzLl9qc29uU2VydmljZSA9IG5ldyBKc29uU2VydmljZUN0b3IodW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMuX2dldENsYWltc0Zyb21Kd3QuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5fbWV0YWRhdGFTZXJ2aWNlID0gbmV3IE1ldGFkYXRhU2VydmljZUN0b3IodGhpcy5fc2V0dGluZ3MpO1xyXG4gICAgICAgIHRoaXMuX2pvc2VVdGlsID0gam9zZVV0aWw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2xhaW1zKHRva2VuKSB7XHJcbiAgICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VySW5mb1NlcnZpY2UuZ2V0Q2xhaW1zOiBObyB0b2tlbiBwYXNzZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJBIHRva2VuIGlzIHJlcXVpcmVkXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0VXNlckluZm9FbmRwb2ludCgpLnRoZW4odXJsID0+IHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlckluZm9TZXJ2aWNlLmdldENsYWltczogcmVjZWl2ZWQgdXNlcmluZm8gdXJsXCIsIHVybCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvblNlcnZpY2UuZ2V0SnNvbih1cmwsIHRva2VuKS50aGVuKGNsYWltcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VySW5mb1NlcnZpY2UuZ2V0Q2xhaW1zOiBjbGFpbXMgcmVjZWl2ZWRcIiwgY2xhaW1zKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjbGFpbXM7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRDbGFpbXNGcm9tSnd0KHJlcSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBqd3QgPSB0aGlzLl9qb3NlVXRpbC5wYXJzZUp3dChyZXEucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgaWYgKCFqd3QgfHwgIWp3dC5oZWFkZXIgfHwgIWp3dC5wYXlsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VySW5mb1NlcnZpY2UuX2dldENsYWltc0Zyb21Kd3Q6IEZhaWxlZCB0byBwYXJzZSBKV1RcIiwgand0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgaWRfdG9rZW5cIikpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIga2lkID0gand0LmhlYWRlci5raWQ7XHJcblxyXG4gICAgICAgICAgICBsZXQgaXNzdWVyUHJvbWlzZTtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9zZXR0aW5ncy51c2VySW5mb0p3dElzc3Vlcikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnT1AnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlzc3VlclByb21pc2UgPSB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0SXNzdWVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdBTlknOlxyXG4gICAgICAgICAgICAgICAgICAgIGlzc3VlclByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoand0LnBheWxvYWQuaXNzKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaXNzdWVyUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSh0aGlzLl9zZXR0aW5ncy51c2VySW5mb0p3dElzc3Vlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBpc3N1ZXJQcm9taXNlLnRoZW4oaXNzdWVyID0+IHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogUmVjZWl2ZWQgaXNzdWVyOlwiICsgaXNzdWVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldFNpZ25pbmdLZXlzKCkudGhlbihrZXlzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWtleXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlckluZm9TZXJ2aWNlLl9nZXRDbGFpbXNGcm9tSnd0OiBObyBzaWduaW5nIGtleXMgZnJvbSBtZXRhZGF0YVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHNpZ25pbmcga2V5cyBmcm9tIG1ldGFkYXRhXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogUmVjZWl2ZWQgc2lnbmluZyBrZXlzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBrZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFraWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5cyA9IHRoaXMuX2ZpbHRlckJ5QWxnKGtleXMsIGp3dC5oZWFkZXIuYWxnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogTm8ga2lkIGZvdW5kIGluIGlkX3Rva2VuIGFuZCBtb3JlIHRoYW4gb25lIGtleSBmb3VuZCBpbiBtZXRhZGF0YVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBraWQgZm91bmQgaW4gaWRfdG9rZW4gYW5kIG1vcmUgdGhhbiBvbmUga2V5IGZvdW5kIGluIG1ldGFkYXRhXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGtpZCBpcyBtYW5kYXRvcnkgb25seSB3aGVuIHRoZXJlIGFyZSBtdWx0aXBsZSBrZXlzIGluIHRoZSByZWZlcmVuY2VkIEpXSyBTZXQgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlZSBodHRwOi8vb3BlbmlkLm5ldC9zcGVjcy9vcGVuaWQtY29ubmVjdC1jb3JlLTFfMC5odG1sI1NpZ25pbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IGtleXNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IGtleXMuZmlsdGVyKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5LmtpZCA9PT0ga2lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVswXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgha2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogTm8ga2V5IG1hdGNoaW5nIGtpZCBvciBhbGcgZm91bmQgaW4gc2lnbmluZyBrZXlzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8ga2V5IG1hdGNoaW5nIGtpZCBvciBhbGcgZm91bmQgaW4gc2lnbmluZyBrZXlzXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhdWRpZW5jZSA9IHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNsb2NrU2tld0luU2Vjb25kcyA9IHRoaXMuX3NldHRpbmdzLmNsb2NrU2tldztcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VySW5mb1NlcnZpY2UuX2dldENsYWltc0Zyb21Kd3Q6IFZhbGlkYWluZyBKV1Q7IHVzaW5nIGNsb2NrIHNrZXcgKGluIHNlY29uZHMpIG9mOiBcIiwgY2xvY2tTa2V3SW5TZWNvbmRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pvc2VVdGlsLnZhbGlkYXRlSnd0KHJlcS5yZXNwb25zZVRleHQsIGtleSwgaXNzdWVyLCBhdWRpZW5jZSwgY2xvY2tTa2V3SW5TZWNvbmRzLCB1bmRlZmluZWQsIHRydWUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VySW5mb1NlcnZpY2UuX2dldENsYWltc0Zyb21Kd3Q6IEpXVCB2YWxpZGF0aW9uIHN1Y2Nlc3NmdWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBqd3QucGF5bG9hZDtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VySW5mb1NlcnZpY2UuX2dldENsYWltc0Zyb21Kd3Q6IEVycm9yIHBhcnNpbmcgSldUIHJlc3BvbnNlXCIsIGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfZmlsdGVyQnlBbGcoa2V5cywgYWxnKSB7XHJcbiAgICAgICAgdmFyIGt0eSA9IG51bGw7XHJcbiAgICAgICAgaWYgKGFsZy5zdGFydHNXaXRoKFwiUlNcIikpIHtcclxuICAgICAgICAgICAga3R5ID0gXCJSU0FcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYWxnLnN0YXJ0c1dpdGgoXCJQU1wiKSkge1xyXG4gICAgICAgICAgICBrdHkgPSBcIlBTXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGFsZy5zdGFydHNXaXRoKFwiRVNcIikpIHtcclxuICAgICAgICAgICAga3R5ID0gXCJFQ1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlckluZm9TZXJ2aWNlLl9maWx0ZXJCeUFsZzogYWxnIG5vdCBzdXBwb3J0ZWQ6IFwiLCBhbGcpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBMb2cuZGVidWcoXCJVc2VySW5mb1NlcnZpY2UuX2ZpbHRlckJ5QWxnOiBMb29raW5nIGZvciBrZXlzIHRoYXQgbWF0Y2gga3R5OiBcIiwga3R5KTtcclxuXHJcbiAgICAgICAga2V5cyA9IGtleXMuZmlsdGVyKGtleSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBrZXkua3R5ID09PSBrdHk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJJbmZvU2VydmljZS5fZmlsdGVyQnlBbGc6IE51bWJlciBvZiBrZXlzIHRoYXQgbWF0Y2gga3R5OiBcIiwga3R5LCBrZXlzLmxlbmd0aCk7XHJcblxyXG4gICAgICAgIHJldHVybiBrZXlzO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgT2lkY0NsaWVudCB9IGZyb20gJy4vT2lkY0NsaWVudC5qcyc7XHJcbmltcG9ydCB7IFVzZXJNYW5hZ2VyU2V0dGluZ3MgfSBmcm9tICcuL1VzZXJNYW5hZ2VyU2V0dGluZ3MuanMnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi9Vc2VyLmpzJztcclxuaW1wb3J0IHsgVXNlck1hbmFnZXJFdmVudHMgfSBmcm9tICcuL1VzZXJNYW5hZ2VyRXZlbnRzLmpzJztcclxuaW1wb3J0IHsgU2lsZW50UmVuZXdTZXJ2aWNlIH0gZnJvbSAnLi9TaWxlbnRSZW5ld1NlcnZpY2UuanMnO1xyXG5pbXBvcnQgeyBTZXNzaW9uTW9uaXRvciB9IGZyb20gJy4vU2Vzc2lvbk1vbml0b3IuanMnO1xyXG5pbXBvcnQgeyBUb2tlblJldm9jYXRpb25DbGllbnQgfSBmcm9tICcuL1Rva2VuUmV2b2NhdGlvbkNsaWVudC5qcyc7XHJcbmltcG9ydCB7IFRva2VuQ2xpZW50IH0gZnJvbSAnLi9Ub2tlbkNsaWVudC5qcyc7XHJcbmltcG9ydCB7IEpvc2VVdGlsIH0gZnJvbSAnLi9Kb3NlVXRpbC5qcyc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJNYW5hZ2VyIGV4dGVuZHMgT2lkY0NsaWVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncyA9IHt9LFxyXG4gICAgICAgIFNpbGVudFJlbmV3U2VydmljZUN0b3IgPSBTaWxlbnRSZW5ld1NlcnZpY2UsXHJcbiAgICAgICAgU2Vzc2lvbk1vbml0b3JDdG9yID0gU2Vzc2lvbk1vbml0b3IsXHJcbiAgICAgICAgVG9rZW5SZXZvY2F0aW9uQ2xpZW50Q3RvciA9IFRva2VuUmV2b2NhdGlvbkNsaWVudCxcclxuICAgICAgICBUb2tlbkNsaWVudEN0b3IgPSBUb2tlbkNsaWVudCxcclxuICAgICAgICBqb3NlVXRpbCA9IEpvc2VVdGlsXHJcbiAgICApIHtcclxuXHJcbiAgICAgICAgaWYgKCEoc2V0dGluZ3MgaW5zdGFuY2VvZiBVc2VyTWFuYWdlclNldHRpbmdzKSkge1xyXG4gICAgICAgICAgICBzZXR0aW5ncyA9IG5ldyBVc2VyTWFuYWdlclNldHRpbmdzKHNldHRpbmdzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIoc2V0dGluZ3MpO1xyXG5cclxuICAgICAgICB0aGlzLl9ldmVudHMgPSBuZXcgVXNlck1hbmFnZXJFdmVudHMoc2V0dGluZ3MpO1xyXG4gICAgICAgIHRoaXMuX3NpbGVudFJlbmV3U2VydmljZSA9IG5ldyBTaWxlbnRSZW5ld1NlcnZpY2VDdG9yKHRoaXMpO1xyXG5cclxuICAgICAgICAvLyBvcmRlciBpcyBpbXBvcnRhbnQgZm9yIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczsgdGhlc2Ugc2VydmljZXMgZGVwZW5kIHVwb24gdGhlIGV2ZW50cy5cclxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5hdXRvbWF0aWNTaWxlbnRSZW5ldykge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5jdG9yOiBhdXRvbWF0aWNTaWxlbnRSZW5ldyBpcyBjb25maWd1cmVkLCBzZXR0aW5nIHVwIHNpbGVudCByZW5ld1wiKTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFNpbGVudFJlbmV3KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5tb25pdG9yU2Vzc2lvbikge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5jdG9yOiBtb25pdG9yU2Vzc2lvbiBpcyBjb25maWd1cmVkLCBzZXR0aW5nIHVwIHNlc3Npb24gbW9uaXRvclwiKTtcclxuICAgICAgICAgICAgdGhpcy5fc2Vzc2lvbk1vbml0b3IgPSBuZXcgU2Vzc2lvbk1vbml0b3JDdG9yKHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fdG9rZW5SZXZvY2F0aW9uQ2xpZW50ID0gbmV3IFRva2VuUmV2b2NhdGlvbkNsaWVudEN0b3IodGhpcy5fc2V0dGluZ3MpO1xyXG4gICAgICAgIHRoaXMuX3Rva2VuQ2xpZW50ID0gbmV3IFRva2VuQ2xpZW50Q3Rvcih0aGlzLl9zZXR0aW5ncyk7XHJcbiAgICAgICAgdGhpcy5fam9zZVV0aWwgPSBqb3NlVXRpbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgX3JlZGlyZWN0TmF2aWdhdG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLnJlZGlyZWN0TmF2aWdhdG9yO1xyXG4gICAgfVxyXG4gICAgZ2V0IF9wb3B1cE5hdmlnYXRvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5wb3B1cE5hdmlnYXRvcjtcclxuICAgIH1cclxuICAgIGdldCBfaWZyYW1lTmF2aWdhdG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmlmcmFtZU5hdmlnYXRvcjtcclxuICAgIH1cclxuICAgIGdldCBfdXNlclN0b3JlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLnVzZXJTdG9yZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZXZlbnRzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ldmVudHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZFVzZXIoKS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5nZXRVc2VyOiB1c2VyIGxvYWRlZFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHMubG9hZCh1c2VyLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLmdldFVzZXI6IHVzZXIgbm90IGZvdW5kIGluIHN0b3JhZ2VcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVVzZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmVVc2VyKG51bGwpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnJlbW92ZVVzZXI6IHVzZXIgcmVtb3ZlZCBmcm9tIHN0b3JhZ2VcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cy51bmxvYWQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaWduaW5SZWRpcmVjdChhcmdzID0ge30pIHtcclxuICAgICAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgYXJncyk7XHJcblxyXG4gICAgICAgIGFyZ3MucmVxdWVzdF90eXBlID0gXCJzaTpyXCI7XHJcbiAgICAgICAgbGV0IG5hdlBhcmFtcyA9IHtcclxuICAgICAgICAgICAgdXNlUmVwbGFjZVRvTmF2aWdhdGUgOiBhcmdzLnVzZVJlcGxhY2VUb05hdmlnYXRlXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluU3RhcnQoYXJncywgdGhpcy5fcmVkaXJlY3ROYXZpZ2F0b3IsIG5hdlBhcmFtcykudGhlbigoKT0+e1xyXG4gICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblJlZGlyZWN0OiBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2lnbmluUmVkaXJlY3RDYWxsYmFjayh1cmwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluRW5kKHVybCB8fCB0aGlzLl9yZWRpcmVjdE5hdmlnYXRvci51cmwpLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyLnByb2ZpbGUgJiYgdXNlci5wcm9maWxlLnN1Yikge1xyXG4gICAgICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWduaW5SZWRpcmVjdENhbGxiYWNrOiBzdWNjZXNzZnVsLCBzaWduZWQgaW4gc3ViOiBcIiwgdXNlci5wcm9maWxlLnN1Yik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblJlZGlyZWN0Q2FsbGJhY2s6IG5vIHN1YlwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2lnbmluUG9wdXAoYXJncyA9IHt9KSB7XHJcbiAgICAgICAgYXJncyA9IE9iamVjdC5hc3NpZ24oe30sIGFyZ3MpO1xyXG5cclxuICAgICAgICBhcmdzLnJlcXVlc3RfdHlwZSA9IFwic2k6cFwiO1xyXG4gICAgICAgIGxldCB1cmwgPSBhcmdzLnJlZGlyZWN0X3VyaSB8fCB0aGlzLnNldHRpbmdzLnBvcHVwX3JlZGlyZWN0X3VyaSB8fCB0aGlzLnNldHRpbmdzLnJlZGlyZWN0X3VyaTtcclxuICAgICAgICBpZiAoIXVybCkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VyTWFuYWdlci5zaWduaW5Qb3B1cDogTm8gcG9wdXBfcmVkaXJlY3RfdXJpIG9yIHJlZGlyZWN0X3VyaSBjb25maWd1cmVkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gcG9wdXBfcmVkaXJlY3RfdXJpIG9yIHJlZGlyZWN0X3VyaSBjb25maWd1cmVkXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFyZ3MucmVkaXJlY3RfdXJpID0gdXJsO1xyXG4gICAgICAgIGFyZ3MuZGlzcGxheSA9IFwicG9wdXBcIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25pbihhcmdzLCB0aGlzLl9wb3B1cE5hdmlnYXRvciwge1xyXG4gICAgICAgICAgICBzdGFydFVybDogdXJsLFxyXG4gICAgICAgICAgICBwb3B1cFdpbmRvd0ZlYXR1cmVzOiBhcmdzLnBvcHVwV2luZG93RmVhdHVyZXMgfHwgdGhpcy5zZXR0aW5ncy5wb3B1cFdpbmRvd0ZlYXR1cmVzLFxyXG4gICAgICAgICAgICBwb3B1cFdpbmRvd1RhcmdldDogYXJncy5wb3B1cFdpbmRvd1RhcmdldCB8fCB0aGlzLnNldHRpbmdzLnBvcHVwV2luZG93VGFyZ2V0XHJcbiAgICAgICAgfSkudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyLnByb2ZpbGUgJiYgdXNlci5wcm9maWxlLnN1Yikge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbmluUG9wdXA6IHNpZ25pblBvcHVwIHN1Y2Nlc3NmdWwsIHNpZ25lZCBpbiBzdWI6IFwiLCB1c2VyLnByb2ZpbGUuc3ViKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbmluUG9wdXA6IG5vIHN1YlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgfSkuY2F0Y2gocmVhc29uID0+IHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlck1hbmFnZXIuc2lnbmluUG9wdXAgZXJyb3I6IFwiLCByZWFzb24ubWVzc2FnZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzaWduaW5Qb3B1cENhbGxiYWNrKHVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWduaW5DYWxsYmFjayh1cmwsIHRoaXMuX3BvcHVwTmF2aWdhdG9yKS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXIucHJvZmlsZSAmJiB1c2VyLnByb2ZpbGUuc3ViKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWduaW5Qb3B1cENhbGxiYWNrOiBzdWNjZXNzZnVsLCBzaWduZWQgaW4gc3ViOiBcIiwgdXNlci5wcm9maWxlLnN1Yik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblBvcHVwQ2FsbGJhY2s6IG5vIHN1YlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJNYW5hZ2VyLnNpZ25pblBvcHVwQ2FsbGJhY2sgZXJyb3I6IFwiICsgZXJyICYmIGVyci5tZXNzYWdlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaWduaW5TaWxlbnQoYXJncyA9IHt9KSB7XHJcbiAgICAgICAgYXJncyA9IE9iamVjdC5hc3NpZ24oe30sIGFyZ3MpO1xyXG5cclxuICAgICAgICBhcmdzLnJlcXVlc3RfdHlwZSA9IFwic2k6c1wiO1xyXG4gICAgICAgIC8vIGZpcnN0IGRldGVybWluZSBpZiB3ZSBoYXZlIGEgcmVmcmVzaCB0b2tlbiwgb3IgbmVlZCB0byB1c2UgaWZyYW1lXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRVc2VyKCkudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgaWYgKHVzZXIgJiYgdXNlci5yZWZyZXNoX3Rva2VuKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzLnJlZnJlc2hfdG9rZW4gPSB1c2VyLnJlZnJlc2hfdG9rZW47XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdXNlUmVmcmVzaFRva2VuKGFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXJncy5pZF90b2tlbl9oaW50ID0gYXJncy5pZF90b2tlbl9oaW50IHx8ICh0aGlzLnNldHRpbmdzLmluY2x1ZGVJZFRva2VuSW5TaWxlbnRSZW5ldyAmJiB1c2VyICYmIHVzZXIuaWRfdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXIgJiYgdGhpcy5fc2V0dGluZ3MudmFsaWRhdGVTdWJPblNpbGVudFJlbmV3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuc2lnbmluU2lsZW50LCBzdWJqZWN0IHByaW9yIHRvIHNpbGVudCByZW5ldzogXCIsIHVzZXIucHJvZmlsZS5zdWIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MuY3VycmVudF9zdWIgPSB1c2VyLnByb2ZpbGUuc3ViO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25pblNpbGVudElmcmFtZShhcmdzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF91c2VSZWZyZXNoVG9rZW4oYXJncyA9IHt9KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rva2VuQ2xpZW50LmV4Y2hhbmdlUmVmcmVzaFRva2VuKGFyZ3MpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJNYW5hZ2VyLl91c2VSZWZyZXNoVG9rZW46IE5vIHJlc3BvbnNlIHJldHVybmVkIGZyb20gdG9rZW4gZW5kcG9pbnRcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJObyByZXNwb25zZSByZXR1cm5lZCBmcm9tIHRva2VuIGVuZHBvaW50XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0LmFjY2Vzc190b2tlbikge1xyXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlck1hbmFnZXIuX3VzZVJlZnJlc2hUb2tlbjogTm8gYWNjZXNzIHRva2VuIHJldHVybmVkIGZyb20gdG9rZW4gZW5kcG9pbnRcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJObyBhY2Nlc3MgdG9rZW4gcmV0dXJuZWQgZnJvbSB0b2tlbiBlbmRwb2ludFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRVc2VyKCkudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkVG9rZW5WYWxpZGF0aW9uID0gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5pZF90b2tlbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFRva2VuVmFsaWRhdGlvbiA9IHRoaXMuX3ZhbGlkYXRlSWRUb2tlbkZyb21Ub2tlblJlZnJlc2hUb2tlbih1c2VyLnByb2ZpbGUsIHJlc3VsdC5pZF90b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWRUb2tlblZhbGlkYXRpb24udGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl91c2VSZWZyZXNoVG9rZW46IHJlZnJlc2ggdG9rZW4gcmVzcG9uc2Ugc3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5pZF90b2tlbiA9IHJlc3VsdC5pZF90b2tlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5hY2Nlc3NfdG9rZW4gPSByZXN1bHQuYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyLnJlZnJlc2hfdG9rZW4gPSByZXN1bHQucmVmcmVzaF90b2tlbiB8fCB1c2VyLnJlZnJlc2hfdG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIuZXhwaXJlc19pbiA9IHJlc3VsdC5leHBpcmVzX2luO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmVVc2VyKHVzZXIpLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50cy5sb2FkKHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF92YWxpZGF0ZUlkVG9rZW5Gcm9tVG9rZW5SZWZyZXNoVG9rZW4ocHJvZmlsZSwgaWRfdG9rZW4pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldElzc3VlcigpLnRoZW4oaXNzdWVyID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MuZ2V0RXBvY2hUaW1lKCkudGhlbihub3cgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pvc2VVdGlsLnZhbGlkYXRlSnd0QXR0cmlidXRlcyhpZF90b2tlbiwgaXNzdWVyLCB0aGlzLl9zZXR0aW5ncy5jbGllbnRfaWQsIHRoaXMuX3NldHRpbmdzLmNsb2NrU2tldywgbm93KS50aGVuKHBheWxvYWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcGF5bG9hZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VyTWFuYWdlci5fdmFsaWRhdGVJZFRva2VuRnJvbVRva2VuUmVmcmVzaFRva2VuOiBGYWlsZWQgdG8gdmFsaWRhdGUgaWRfdG9rZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gdmFsaWRhdGUgaWRfdG9rZW5cIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGF5bG9hZC5zdWIgIT09IHByb2ZpbGUuc3ViKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJNYW5hZ2VyLl92YWxpZGF0ZUlkVG9rZW5Gcm9tVG9rZW5SZWZyZXNoVG9rZW46IHN1YiBpbiBpZF90b2tlbiBkb2VzIG5vdCBtYXRjaCBjdXJyZW50IHN1YlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcInN1YiBpbiBpZF90b2tlbiBkb2VzIG5vdCBtYXRjaCBjdXJyZW50IHN1YlwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkLmF1dGhfdGltZSAmJiBwYXlsb2FkLmF1dGhfdGltZSAhPT0gcHJvZmlsZS5hdXRoX3RpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlck1hbmFnZXIuX3ZhbGlkYXRlSWRUb2tlbkZyb21Ub2tlblJlZnJlc2hUb2tlbjogYXV0aF90aW1lIGluIGlkX3Rva2VuIGRvZXMgbm90IG1hdGNoIG9yaWdpbmFsIGF1dGhfdGltZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImF1dGhfdGltZSBpbiBpZF90b2tlbiBkb2VzIG5vdCBtYXRjaCBvcmlnaW5hbCBhdXRoX3RpbWVcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGF5bG9hZC5henAgJiYgcGF5bG9hZC5henAgIT09IHByb2ZpbGUuYXpwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJNYW5hZ2VyLl92YWxpZGF0ZUlkVG9rZW5Gcm9tVG9rZW5SZWZyZXNoVG9rZW46IGF6cCBpbiBpZF90b2tlbiBkb2VzIG5vdCBtYXRjaCBvcmlnaW5hbCBhenBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJhenAgaW4gaWRfdG9rZW4gZG9lcyBub3QgbWF0Y2ggb3JpZ2luYWwgYXpwXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwYXlsb2FkLmF6cCAmJiBwcm9maWxlLmF6cCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VyTWFuYWdlci5fdmFsaWRhdGVJZFRva2VuRnJvbVRva2VuUmVmcmVzaFRva2VuOiBhenAgbm90IGluIGlkX3Rva2VuLCBidXQgcHJlc2VudCBpbiBvcmlnaW5hbCBpZF90b2tlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImF6cCBub3QgaW4gaWRfdG9rZW4sIGJ1dCBwcmVzZW50IGluIG9yaWdpbmFsIGlkX3Rva2VuXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIF9zaWduaW5TaWxlbnRJZnJhbWUoYXJncyA9IHt9KSB7XHJcbiAgICAgICAgbGV0IHVybCA9IGFyZ3MucmVkaXJlY3RfdXJpIHx8IHRoaXMuc2V0dGluZ3Muc2lsZW50X3JlZGlyZWN0X3VyaSB8fCB0aGlzLnNldHRpbmdzLnJlZGlyZWN0X3VyaTtcclxuICAgICAgICBpZiAoIXVybCkge1xyXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VyTWFuYWdlci5zaWduaW5TaWxlbnQ6IE5vIHNpbGVudF9yZWRpcmVjdF91cmkgY29uZmlndXJlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHNpbGVudF9yZWRpcmVjdF91cmkgY29uZmlndXJlZFwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhcmdzLnJlZGlyZWN0X3VyaSA9IHVybDtcclxuICAgICAgICBhcmdzLnByb21wdCA9IGFyZ3MucHJvbXB0IHx8IFwibm9uZVwiO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluKGFyZ3MsIHRoaXMuX2lmcmFtZU5hdmlnYXRvciwge1xyXG4gICAgICAgICAgICBzdGFydFVybDogdXJsLFxyXG4gICAgICAgICAgICBzaWxlbnRSZXF1ZXN0VGltZW91dDogYXJncy5zaWxlbnRSZXF1ZXN0VGltZW91dCB8fCB0aGlzLnNldHRpbmdzLnNpbGVudFJlcXVlc3RUaW1lb3V0XHJcbiAgICAgICAgfSkudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyLnByb2ZpbGUgJiYgdXNlci5wcm9maWxlLnN1Yikge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbmluU2lsZW50OiBzdWNjZXNzZnVsLCBzaWduZWQgaW4gc3ViOiBcIiwgdXNlci5wcm9maWxlLnN1Yik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblNpbGVudDogbm8gc3ViXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaWduaW5TaWxlbnRDYWxsYmFjayh1cmwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluQ2FsbGJhY2sodXJsLCB0aGlzLl9pZnJhbWVOYXZpZ2F0b3IpLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXNlci5wcm9maWxlICYmIHVzZXIucHJvZmlsZS5zdWIpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblNpbGVudENhbGxiYWNrOiBzdWNjZXNzZnVsLCBzaWduZWQgaW4gc3ViOiBcIiwgdXNlci5wcm9maWxlLnN1Yik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblNpbGVudENhbGxiYWNrOiBubyBzdWJcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNpZ25pbkNhbGxiYWNrKHVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRTaWduaW5SZXNwb25zZVN0YXRlKHVybCkudGhlbigoe3N0YXRlLCByZXNwb25zZX0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLnJlcXVlc3RfdHlwZSA9PT0gXCJzaTpyXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNpZ25pblJlZGlyZWN0Q2FsbGJhY2sodXJsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3RhdGUucmVxdWVzdF90eXBlID09PSBcInNpOnBcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2lnbmluUG9wdXBDYWxsYmFjayh1cmwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5yZXF1ZXN0X3R5cGUgPT09IFwic2k6c1wiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaWduaW5TaWxlbnRDYWxsYmFjayh1cmwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJpbnZhbGlkIHJlc3BvbnNlX3R5cGUgaW4gc3RhdGVcIikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNpZ25vdXRDYWxsYmFjayh1cmwsIGtlZXBPcGVuKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZFNpZ25vdXRSZXNwb25zZVN0YXRlKHVybCkudGhlbigoe3N0YXRlLCByZXNwb25zZX0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUucmVxdWVzdF90eXBlID09PSBcInNvOnJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNpZ25vdXRSZWRpcmVjdENhbGxiYWNrKHVybCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUucmVxdWVzdF90eXBlID09PSBcInNvOnBcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNpZ25vdXRQb3B1cENhbGxiYWNrKHVybCwga2VlcE9wZW4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImludmFsaWQgcmVzcG9uc2VfdHlwZSBpbiBzdGF0ZVwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHF1ZXJ5U2Vzc2lvblN0YXR1cyhhcmdzID0ge30pIHtcclxuICAgICAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgYXJncyk7XHJcblxyXG4gICAgICAgIGFyZ3MucmVxdWVzdF90eXBlID0gXCJzaTpzXCI7IC8vIHRoaXMgYWN0cyBsaWtlIGEgc2lnbmluIHNpbGVudFxyXG4gICAgICAgIGxldCB1cmwgPSBhcmdzLnJlZGlyZWN0X3VyaSB8fCB0aGlzLnNldHRpbmdzLnNpbGVudF9yZWRpcmVjdF91cmkgfHwgdGhpcy5zZXR0aW5ncy5yZWRpcmVjdF91cmk7XHJcbiAgICAgICAgaWYgKCF1cmwpIHtcclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlck1hbmFnZXIucXVlcnlTZXNzaW9uU3RhdHVzOiBObyBzaWxlbnRfcmVkaXJlY3RfdXJpIGNvbmZpZ3VyZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBzaWxlbnRfcmVkaXJlY3RfdXJpIGNvbmZpZ3VyZWRcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXJncy5yZWRpcmVjdF91cmkgPSB1cmw7XHJcbiAgICAgICAgYXJncy5wcm9tcHQgPSBcIm5vbmVcIjtcclxuICAgICAgICBhcmdzLnJlc3BvbnNlX3R5cGUgPSBhcmdzLnJlc3BvbnNlX3R5cGUgfHwgdGhpcy5zZXR0aW5ncy5xdWVyeV9zdGF0dXNfcmVzcG9uc2VfdHlwZTtcclxuICAgICAgICBhcmdzLnNjb3BlID0gYXJncy5zY29wZSB8fCBcIm9wZW5pZFwiO1xyXG4gICAgICAgIGFyZ3Muc2tpcFVzZXJJbmZvID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25pblN0YXJ0KGFyZ3MsIHRoaXMuX2lmcmFtZU5hdmlnYXRvciwge1xyXG4gICAgICAgICAgICBzdGFydFVybDogdXJsLFxyXG4gICAgICAgICAgICBzaWxlbnRSZXF1ZXN0VGltZW91dDogYXJncy5zaWxlbnRSZXF1ZXN0VGltZW91dCB8fCB0aGlzLnNldHRpbmdzLnNpbGVudFJlcXVlc3RUaW1lb3V0XHJcbiAgICAgICAgfSkudGhlbihuYXZSZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NTaWduaW5SZXNwb25zZShuYXZSZXNwb25zZS51cmwpLnRoZW4oc2lnbmluUmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIucXVlcnlTZXNzaW9uU3RhdHVzOiBnb3Qgc2lnbmluIHJlc3BvbnNlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzaWduaW5SZXNwb25zZS5zZXNzaW9uX3N0YXRlICYmIHNpZ25pblJlc3BvbnNlLnByb2ZpbGUuc3ViKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5xdWVyeVNlc3Npb25TdGF0dXM6IHF1ZXJ5U2Vzc2lvblN0YXR1cyBzdWNjZXNzIGZvciBzdWI6IFwiLCAgc2lnbmluUmVzcG9uc2UucHJvZmlsZS5zdWIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25fc3RhdGU6IHNpZ25pblJlc3BvbnNlLnNlc3Npb25fc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Yjogc2lnbmluUmVzcG9uc2UucHJvZmlsZS5zdWIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZDogc2lnbmluUmVzcG9uc2UucHJvZmlsZS5zaWRcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJxdWVyeVNlc3Npb25TdGF0dXMgc3VjY2Vzc2Z1bCwgdXNlciBub3QgYXV0aGVudGljYXRlZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyLnNlc3Npb25fc3RhdGUgJiYgdGhpcy5zZXR0aW5ncy5tb25pdG9yQW5vbnltb3VzU2Vzc2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIubWVzc2FnZSA9PSBcImxvZ2luX3JlcXVpcmVkXCIgfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVyci5tZXNzYWdlID09IFwiY29uc2VudF9yZXF1aXJlZFwiIHx8IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIubWVzc2FnZSA9PSBcImludGVyYWN0aW9uX3JlcXVpcmVkXCIgfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVyci5tZXNzYWdlID09IFwiYWNjb3VudF9zZWxlY3Rpb25fcmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnF1ZXJ5U2Vzc2lvblN0YXR1czogcXVlcnlTZXNzaW9uU3RhdHVzIHN1Y2Nlc3MgZm9yIGFub255bW91cyB1c2VyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbl9zdGF0ZTogZXJyLnNlc3Npb25fc3RhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfc2lnbmluKGFyZ3MsIG5hdmlnYXRvciwgbmF2aWdhdG9yUGFyYW1zID0ge30pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluU3RhcnQoYXJncywgbmF2aWdhdG9yLCBuYXZpZ2F0b3JQYXJhbXMpLnRoZW4obmF2UmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluRW5kKG5hdlJlc3BvbnNlLnVybCwgYXJncyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBfc2lnbmluU3RhcnQoYXJncywgbmF2aWdhdG9yLCBuYXZpZ2F0b3JQYXJhbXMgPSB7fSkge1xyXG5cclxuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnByZXBhcmUobmF2aWdhdG9yUGFyYW1zKS50aGVuKGhhbmRsZSA9PiB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWduaW5TdGFydDogZ290IG5hdmlnYXRvciB3aW5kb3cgaGFuZGxlXCIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlU2lnbmluUmVxdWVzdChhcmdzKS50aGVuKHNpZ25pblJlcXVlc3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25pblN0YXJ0OiBnb3Qgc2lnbmluIHJlcXVlc3RcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yUGFyYW1zLnVybCA9IHNpZ25pblJlcXVlc3QudXJsO1xyXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yUGFyYW1zLmlkID0gc2lnbmluUmVxdWVzdC5zdGF0ZS5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlLm5hdmlnYXRlKG5hdmlnYXRvclBhcmFtcyk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlLmNsb3NlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25pblN0YXJ0OiBFcnJvciBhZnRlciBwcmVwYXJpbmcgbmF2aWdhdG9yLCBjbG9zaW5nIG5hdmlnYXRvciB3aW5kb3dcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgX3NpZ25pbkVuZCh1cmwsIGFyZ3MgPSB7fSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NTaWduaW5SZXNwb25zZSh1cmwpLnRoZW4oc2lnbmluUmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbmluRW5kOiBnb3Qgc2lnbmluIHJlc3BvbnNlXCIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHVzZXIgPSBuZXcgVXNlcihzaWduaW5SZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYXJncy5jdXJyZW50X3N1Yikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MuY3VycmVudF9zdWIgIT09IHVzZXIucHJvZmlsZS5zdWIpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbmluRW5kOiBjdXJyZW50IHVzZXIgZG9lcyBub3QgbWF0Y2ggdXNlciByZXR1cm5lZCBmcm9tIHNpZ25pbi4gc3ViIGZyb20gc2lnbmluOiBcIiwgdXNlci5wcm9maWxlLnN1Yik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImxvZ2luX3JlcXVpcmVkXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWduaW5FbmQ6IGN1cnJlbnQgdXNlciBtYXRjaGVzIHVzZXIgcmV0dXJuZWQgZnJvbSBzaWduaW5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JlVXNlcih1c2VyKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWduaW5FbmQ6IHVzZXIgc3RvcmVkXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50cy5sb2FkKHVzZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF9zaWduaW5DYWxsYmFjayh1cmwsIG5hdmlnYXRvcikge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWduaW5DYWxsYmFja1wiKTtcclxuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLmNhbGxiYWNrKHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2lnbm91dFJlZGlyZWN0KGFyZ3MgPSB7fSkge1xyXG4gICAgICAgIGFyZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBhcmdzKTtcclxuXHJcbiAgICAgICAgYXJncy5yZXF1ZXN0X3R5cGUgPSBcInNvOnJcIjtcclxuICAgICAgICBsZXQgcG9zdExvZ291dFJlZGlyZWN0VXJpID0gYXJncy5wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkgfHwgdGhpcy5zZXR0aW5ncy5wb3N0X2xvZ291dF9yZWRpcmVjdF91cmk7XHJcbiAgICAgICAgaWYgKHBvc3RMb2dvdXRSZWRpcmVjdFVyaSl7XHJcbiAgICAgICAgICAgIGFyZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpID0gcG9zdExvZ291dFJlZGlyZWN0VXJpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbmF2UGFyYW1zID0ge1xyXG4gICAgICAgICAgICB1c2VSZXBsYWNlVG9OYXZpZ2F0ZSA6IGFyZ3MudXNlUmVwbGFjZVRvTmF2aWdhdGVcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWdub3V0U3RhcnQoYXJncywgdGhpcy5fcmVkaXJlY3ROYXZpZ2F0b3IsIG5hdlBhcmFtcykudGhlbigoKT0+e1xyXG4gICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25vdXRSZWRpcmVjdDogc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNpZ25vdXRSZWRpcmVjdENhbGxiYWNrKHVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWdub3V0RW5kKHVybCB8fCB0aGlzLl9yZWRpcmVjdE5hdmlnYXRvci51cmwpLnRoZW4ocmVzcG9uc2U9PntcclxuICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWdub3V0UmVkaXJlY3RDYWxsYmFjazogc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNpZ25vdXRQb3B1cChhcmdzID0ge30pIHtcclxuICAgICAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgYXJncyk7XHJcblxyXG4gICAgICAgIGFyZ3MucmVxdWVzdF90eXBlID0gXCJzbzpwXCI7XHJcbiAgICAgICAgbGV0IHVybCA9IGFyZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpIHx8IHRoaXMuc2V0dGluZ3MucG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpIHx8IHRoaXMuc2V0dGluZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpO1xyXG4gICAgICAgIGFyZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpID0gdXJsO1xyXG4gICAgICAgIGFyZ3MuZGlzcGxheSA9IFwicG9wdXBcIjtcclxuICAgICAgICBpZiAoYXJncy5wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkpe1xyXG4gICAgICAgICAgICAvLyB3ZSdyZSBwdXR0aW5nIGEgZHVtbXkgZW50cnkgaW4gaGVyZSBiZWNhdXNlIHdlXHJcbiAgICAgICAgICAgIC8vIG5lZWQgYSB1bmlxdWUgaWQgZnJvbSB0aGUgc3RhdGUgZm9yIG5vdGlmaWNhdGlvblxyXG4gICAgICAgICAgICAvLyB0byB0aGUgcGFyZW50IHdpbmRvdywgd2hpY2ggaXMgbmVjZXNzYXJ5IGlmIHdlXHJcbiAgICAgICAgICAgIC8vIHBsYW4gdG8gcmV0dXJuIGJhY2sgdG8gdGhlIGNsaWVudCBhZnRlciBzaWdub3V0XHJcbiAgICAgICAgICAgIC8vIGFuZCBzbyB3ZSBjYW4gY2xvc2UgdGhlIHBvcHVwIGFmdGVyIHNpZ25vdXRcclxuICAgICAgICAgICAgYXJncy5zdGF0ZSA9IGFyZ3Muc3RhdGUgfHwge307XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbm91dChhcmdzLCB0aGlzLl9wb3B1cE5hdmlnYXRvciwge1xyXG4gICAgICAgICAgICBzdGFydFVybDogdXJsLFxyXG4gICAgICAgICAgICBwb3B1cFdpbmRvd0ZlYXR1cmVzOiBhcmdzLnBvcHVwV2luZG93RmVhdHVyZXMgfHwgdGhpcy5zZXR0aW5ncy5wb3B1cFdpbmRvd0ZlYXR1cmVzLFxyXG4gICAgICAgICAgICBwb3B1cFdpbmRvd1RhcmdldDogYXJncy5wb3B1cFdpbmRvd1RhcmdldCB8fCB0aGlzLnNldHRpbmdzLnBvcHVwV2luZG93VGFyZ2V0XHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbm91dFBvcHVwOiBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2lnbm91dFBvcHVwQ2FsbGJhY2sodXJsLCBrZWVwT3Blbikge1xyXG4gICAgICAgIGlmICh0eXBlb2Yoa2VlcE9wZW4pID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YodXJsKSA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICAgIGtlZXBPcGVuID0gdXJsO1xyXG4gICAgICAgICAgICB1cmwgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRlbGltaXRlciA9ICc/JztcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9wdXBOYXZpZ2F0b3IuY2FsbGJhY2sodXJsLCBrZWVwT3BlbiwgZGVsaW1pdGVyKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWdub3V0UG9wdXBDYWxsYmFjazogc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfc2lnbm91dChhcmdzLCBuYXZpZ2F0b3IsIG5hdmlnYXRvclBhcmFtcyA9IHt9KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25vdXRTdGFydChhcmdzLCBuYXZpZ2F0b3IsIG5hdmlnYXRvclBhcmFtcykudGhlbihuYXZSZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaWdub3V0RW5kKG5hdlJlc3BvbnNlLnVybCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBfc2lnbm91dFN0YXJ0KGFyZ3MgPSB7fSwgbmF2aWdhdG9yLCBuYXZpZ2F0b3JQYXJhbXMgPSB7fSkge1xyXG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IucHJlcGFyZShuYXZpZ2F0b3JQYXJhbXMpLnRoZW4oaGFuZGxlID0+IHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25vdXRTdGFydDogZ290IG5hdmlnYXRvciB3aW5kb3cgaGFuZGxlXCIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRVc2VyKCkudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWdub3V0U3RhcnQ6IGxvYWRlZCBjdXJyZW50IHVzZXIgZnJvbSBzdG9yYWdlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXZva2VQcm9taXNlID0gdGhpcy5fc2V0dGluZ3MucmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXQgPyB0aGlzLl9yZXZva2VJbnRlcm5hbCh1c2VyKSA6IFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldm9rZVByb21pc2UudGhlbigoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpZF90b2tlbiA9IGFyZ3MuaWRfdG9rZW5faGludCB8fCB1c2VyICYmIHVzZXIuaWRfdG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkX3Rva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWdub3V0U3RhcnQ6IFNldHRpbmcgaWRfdG9rZW4gaW50byBzaWdub3V0IHJlcXVlc3RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MuaWRfdG9rZW5faGludCA9IGlkX3Rva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlVXNlcigpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbm91dFN0YXJ0OiB1c2VyIHJlbW92ZWQsIGNyZWF0aW5nIHNpZ25vdXQgcmVxdWVzdFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVNpZ25vdXRSZXF1ZXN0KGFyZ3MpLnRoZW4oc2lnbm91dFJlcXVlc3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25vdXRTdGFydDogZ290IHNpZ25vdXQgcmVxdWVzdFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3JQYXJhbXMudXJsID0gc2lnbm91dFJlcXVlc3QudXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNpZ25vdXRSZXF1ZXN0LnN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yUGFyYW1zLmlkID0gc2lnbm91dFJlcXVlc3Quc3RhdGUuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlLm5hdmlnYXRlKG5hdmlnYXRvclBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlLmNsb3NlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25vdXRTdGFydDogRXJyb3IgYWZ0ZXIgcHJlcGFyaW5nIG5hdmlnYXRvciwgY2xvc2luZyBuYXZpZ2F0b3Igd2luZG93XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF9zaWdub3V0RW5kKHVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NTaWdub3V0UmVzcG9uc2UodXJsKS50aGVuKHNpZ25vdXRSZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWdub3V0RW5kOiBnb3Qgc2lnbm91dCByZXNwb25zZVwiKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzaWdub3V0UmVzcG9uc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV2b2tlQWNjZXNzVG9rZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRVc2VyKCkudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jldm9rZUludGVybmFsKHVzZXIsIHRydWUpLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLnJldm9rZUFjY2Vzc1Rva2VuOiByZW1vdmluZyB0b2tlbiBwcm9wZXJ0aWVzIGZyb20gdXNlciBhbmQgcmUtc3RvcmluZ1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci5hY2Nlc3NfdG9rZW4gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXIucmVmcmVzaF90b2tlbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci5leHBpcmVzX2F0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLnRva2VuX3R5cGUgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yZVVzZXIodXNlcikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLnJldm9rZUFjY2Vzc1Rva2VuOiB1c2VyIHN0b3JlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzLmxvYWQodXNlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5yZXZva2VBY2Nlc3NUb2tlbjogYWNjZXNzIHRva2VuIHJldm9rZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZXZva2VJbnRlcm5hbCh1c2VyLCByZXF1aXJlZCkge1xyXG4gICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgIHZhciBhY2Nlc3NfdG9rZW4gPSB1c2VyLmFjY2Vzc190b2tlbjtcclxuICAgICAgICAgICAgdmFyIHJlZnJlc2hfdG9rZW4gPSB1c2VyLnJlZnJlc2hfdG9rZW47XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmV2b2tlQWNjZXNzVG9rZW5JbnRlcm5hbChhY2Nlc3NfdG9rZW4sIHJlcXVpcmVkKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oYXRTdWNjZXNzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmV2b2tlUmVmcmVzaFRva2VuSW50ZXJuYWwocmVmcmVzaF90b2tlbiwgcmVxdWlyZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJ0U3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWF0U3VjY2VzcyAmJiAhcnRTdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIucmV2b2tlQWNjZXNzVG9rZW46IG5vIG5lZWQgdG8gcmV2b2tlIGR1ZSB0byBubyB0b2tlbihzKSwgb3IgSldUIGZvcm1hdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF0U3VjY2VzcyB8fCBydFN1Y2Nlc3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBfcmV2b2tlQWNjZXNzVG9rZW5JbnRlcm5hbChhY2Nlc3NfdG9rZW4sIHJlcXVpcmVkKSB7XHJcbiAgICAgICAgLy8gY2hlY2sgZm9yIEpXVCB2cy4gcmVmZXJlbmNlIHRva2VuXHJcbiAgICAgICAgaWYgKCFhY2Nlc3NfdG9rZW4gfHwgYWNjZXNzX3Rva2VuLmluZGV4T2YoJy4nKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rva2VuUmV2b2NhdGlvbkNsaWVudC5yZXZva2UoYWNjZXNzX3Rva2VuLCByZXF1aXJlZCkudGhlbigoKSA9PiB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBfcmV2b2tlUmVmcmVzaFRva2VuSW50ZXJuYWwocmVmcmVzaF90b2tlbiwgcmVxdWlyZWQpIHtcclxuICAgICAgICBpZiAoIXJlZnJlc2hfdG9rZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9rZW5SZXZvY2F0aW9uQ2xpZW50LnJldm9rZShyZWZyZXNoX3Rva2VuLCByZXF1aXJlZCwgXCJyZWZyZXNoX3Rva2VuXCIpLnRoZW4oKCkgPT4gdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRTaWxlbnRSZW5ldygpIHtcclxuICAgICAgICB0aGlzLl9zaWxlbnRSZW5ld1NlcnZpY2Uuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wU2lsZW50UmVuZXcoKSB7XHJcbiAgICAgICAgdGhpcy5fc2lsZW50UmVuZXdTZXJ2aWNlLnN0b3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgX3VzZXJTdG9yZUtleSgpIHtcclxuICAgICAgICByZXR1cm4gYHVzZXI6JHt0aGlzLnNldHRpbmdzLmF1dGhvcml0eX06JHt0aGlzLnNldHRpbmdzLmNsaWVudF9pZH1gO1xyXG4gICAgfVxyXG5cclxuICAgIF9sb2FkVXNlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlclN0b3JlLmdldCh0aGlzLl91c2VyU3RvcmVLZXkpLnRoZW4oc3RvcmFnZVN0cmluZyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdG9yYWdlU3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fbG9hZFVzZXI6IHVzZXIgc3RvcmFnZVN0cmluZyBsb2FkZWRcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVXNlci5mcm9tU3RvcmFnZVN0cmluZyhzdG9yYWdlU3RyaW5nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX2xvYWRVc2VyOiBubyB1c2VyIHN0b3JhZ2VTdHJpbmdcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3JlVXNlcih1c2VyKSB7XHJcbiAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuc3RvcmVVc2VyOiBzdG9yaW5nIHVzZXJcIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgc3RvcmFnZVN0cmluZyA9IHVzZXIudG9TdG9yYWdlU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl91c2VyU3RvcmUuc2V0KHRoaXMuX3VzZXJTdG9yZUtleSwgc3RvcmFnZVN0cmluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJzdG9yZVVzZXIuc3RvcmVVc2VyOiByZW1vdmluZyB1c2VyXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdXNlclN0b3JlLnJlbW92ZSh0aGlzLl91c2VyU3RvcmVLZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcbmltcG9ydCB7IEFjY2Vzc1Rva2VuRXZlbnRzIH0gZnJvbSAnLi9BY2Nlc3NUb2tlbkV2ZW50cy5qcyc7XHJcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSAnLi9FdmVudC5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlck1hbmFnZXJFdmVudHMgZXh0ZW5kcyBBY2Nlc3NUb2tlbkV2ZW50cyB7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcclxuICAgICAgICBzdXBlcihzZXR0aW5ncyk7XHJcbiAgICAgICAgdGhpcy5fdXNlckxvYWRlZCA9IG5ldyBFdmVudChcIlVzZXIgbG9hZGVkXCIpO1xyXG4gICAgICAgIHRoaXMuX3VzZXJVbmxvYWRlZCA9IG5ldyBFdmVudChcIlVzZXIgdW5sb2FkZWRcIik7XHJcbiAgICAgICAgdGhpcy5fc2lsZW50UmVuZXdFcnJvciA9IG5ldyBFdmVudChcIlNpbGVudCByZW5ldyBlcnJvclwiKTtcclxuICAgICAgICB0aGlzLl91c2VyU2lnbmVkSW4gPSBuZXcgRXZlbnQoXCJVc2VyIHNpZ25lZCBpblwiKTtcclxuICAgICAgICB0aGlzLl91c2VyU2lnbmVkT3V0ID0gbmV3IEV2ZW50KFwiVXNlciBzaWduZWQgb3V0XCIpO1xyXG4gICAgICAgIHRoaXMuX3VzZXJTZXNzaW9uQ2hhbmdlZCA9IG5ldyBFdmVudChcIlVzZXIgc2Vzc2lvbiBjaGFuZ2VkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWQodXNlciwgcmFpc2VFdmVudD10cnVlKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXJFdmVudHMubG9hZFwiKTtcclxuICAgICAgICBzdXBlci5sb2FkKHVzZXIpO1xyXG4gICAgICAgIGlmIChyYWlzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VzZXJMb2FkZWQucmFpc2UodXNlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdW5sb2FkKCkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyRXZlbnRzLnVubG9hZFwiKTtcclxuICAgICAgICBzdXBlci51bmxvYWQoKTtcclxuICAgICAgICB0aGlzLl91c2VyVW5sb2FkZWQucmFpc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRVc2VyTG9hZGVkKGNiKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlckxvYWRlZC5hZGRIYW5kbGVyKGNiKTtcclxuICAgIH1cclxuICAgIHJlbW92ZVVzZXJMb2FkZWQoY2IpIHtcclxuICAgICAgICB0aGlzLl91c2VyTG9hZGVkLnJlbW92ZUhhbmRsZXIoY2IpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFVzZXJVbmxvYWRlZChjYikge1xyXG4gICAgICAgIHRoaXMuX3VzZXJVbmxvYWRlZC5hZGRIYW5kbGVyKGNiKTtcclxuICAgIH1cclxuICAgIHJlbW92ZVVzZXJVbmxvYWRlZChjYikge1xyXG4gICAgICAgIHRoaXMuX3VzZXJVbmxvYWRlZC5yZW1vdmVIYW5kbGVyKGNiKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRTaWxlbnRSZW5ld0Vycm9yKGNiKSB7XHJcbiAgICAgICAgdGhpcy5fc2lsZW50UmVuZXdFcnJvci5hZGRIYW5kbGVyKGNiKTtcclxuICAgIH1cclxuICAgIHJlbW92ZVNpbGVudFJlbmV3RXJyb3IoY2IpIHtcclxuICAgICAgICB0aGlzLl9zaWxlbnRSZW5ld0Vycm9yLnJlbW92ZUhhbmRsZXIoY2IpO1xyXG4gICAgfVxyXG4gICAgX3JhaXNlU2lsZW50UmVuZXdFcnJvcihlKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXJFdmVudHMuX3JhaXNlU2lsZW50UmVuZXdFcnJvclwiLCBlLm1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMuX3NpbGVudFJlbmV3RXJyb3IucmFpc2UoZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVXNlclNpZ25lZEluKGNiKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlclNpZ25lZEluLmFkZEhhbmRsZXIoY2IpO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlVXNlclNpZ25lZEluKGNiKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlclNpZ25lZEluLnJlbW92ZUhhbmRsZXIoY2IpO1xyXG4gICAgfVxyXG4gICAgX3JhaXNlVXNlclNpZ25lZEluKCkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyRXZlbnRzLl9yYWlzZVVzZXJTaWduZWRJblwiKTtcclxuICAgICAgICB0aGlzLl91c2VyU2lnbmVkSW4ucmFpc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRVc2VyU2lnbmVkT3V0KGNiKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlclNpZ25lZE91dC5hZGRIYW5kbGVyKGNiKTtcclxuICAgIH1cclxuICAgIHJlbW92ZVVzZXJTaWduZWRPdXQoY2IpIHtcclxuICAgICAgICB0aGlzLl91c2VyU2lnbmVkT3V0LnJlbW92ZUhhbmRsZXIoY2IpO1xyXG4gICAgfVxyXG4gICAgX3JhaXNlVXNlclNpZ25lZE91dCgpIHtcclxuICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlckV2ZW50cy5fcmFpc2VVc2VyU2lnbmVkT3V0XCIpO1xyXG4gICAgICAgIHRoaXMuX3VzZXJTaWduZWRPdXQucmFpc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRVc2VyU2Vzc2lvbkNoYW5nZWQoY2IpIHtcclxuICAgICAgICB0aGlzLl91c2VyU2Vzc2lvbkNoYW5nZWQuYWRkSGFuZGxlcihjYik7XHJcbiAgICB9XHJcbiAgICByZW1vdmVVc2VyU2Vzc2lvbkNoYW5nZWQoY2IpIHtcclxuICAgICAgICB0aGlzLl91c2VyU2Vzc2lvbkNoYW5nZWQucmVtb3ZlSGFuZGxlcihjYik7XHJcbiAgICB9XHJcbiAgICBfcmFpc2VVc2VyU2Vzc2lvbkNoYW5nZWQoKSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXJFdmVudHMuX3JhaXNlVXNlclNlc3Npb25DaGFuZ2VkXCIpO1xyXG4gICAgICAgIHRoaXMuX3VzZXJTZXNzaW9uQ2hhbmdlZC5yYWlzZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcclxuaW1wb3J0IHsgT2lkY0NsaWVudFNldHRpbmdzIH0gZnJvbSAnLi9PaWRjQ2xpZW50U2V0dGluZ3MuanMnO1xyXG5pbXBvcnQgeyBSZWRpcmVjdE5hdmlnYXRvciB9IGZyb20gJy4vUmVkaXJlY3ROYXZpZ2F0b3IuanMnO1xyXG5pbXBvcnQgeyBQb3B1cE5hdmlnYXRvciB9IGZyb20gJy4vUG9wdXBOYXZpZ2F0b3IuanMnO1xyXG5pbXBvcnQgeyBJRnJhbWVOYXZpZ2F0b3IgfSBmcm9tICcuL0lGcmFtZU5hdmlnYXRvci5qcyc7XHJcbmltcG9ydCB7IFdlYlN0b3JhZ2VTdGF0ZVN0b3JlIH0gZnJvbSAnLi9XZWJTdG9yYWdlU3RhdGVTdG9yZS5qcyc7XHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gJy4vR2xvYmFsLmpzJztcclxuaW1wb3J0IHsgU2lnbmluUmVxdWVzdCB9IGZyb20gJy4vU2lnbmluUmVxdWVzdC5qcyc7XHJcblxyXG5jb25zdCBEZWZhdWx0QWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUgPSA2MDtcclxuY29uc3QgRGVmYXVsdENoZWNrU2Vzc2lvbkludGVydmFsID0gMjAwMDtcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyTWFuYWdlclNldHRpbmdzIGV4dGVuZHMgT2lkY0NsaWVudFNldHRpbmdzIHtcclxuICAgIGNvbnN0cnVjdG9yKHtcclxuICAgICAgICBwb3B1cF9yZWRpcmVjdF91cmksXHJcbiAgICAgICAgcG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpLFxyXG4gICAgICAgIHBvcHVwV2luZG93RmVhdHVyZXMsXHJcbiAgICAgICAgcG9wdXBXaW5kb3dUYXJnZXQsXHJcbiAgICAgICAgc2lsZW50X3JlZGlyZWN0X3VyaSxcclxuICAgICAgICBzaWxlbnRSZXF1ZXN0VGltZW91dCxcclxuICAgICAgICBhdXRvbWF0aWNTaWxlbnRSZW5ldyA9IGZhbHNlLFxyXG4gICAgICAgIHZhbGlkYXRlU3ViT25TaWxlbnRSZW5ldyA9IGZhbHNlLFxyXG4gICAgICAgIGluY2x1ZGVJZFRva2VuSW5TaWxlbnRSZW5ldyA9IHRydWUsXHJcbiAgICAgICAgbW9uaXRvclNlc3Npb24gPSB0cnVlLFxyXG4gICAgICAgIG1vbml0b3JBbm9ueW1vdXNTZXNzaW9uID0gZmFsc2UsXHJcbiAgICAgICAgY2hlY2tTZXNzaW9uSW50ZXJ2YWwgPSBEZWZhdWx0Q2hlY2tTZXNzaW9uSW50ZXJ2YWwsXHJcbiAgICAgICAgc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3IgPSB0cnVlLFxyXG4gICAgICAgIHF1ZXJ5X3N0YXR1c19yZXNwb25zZV90eXBlLFxyXG4gICAgICAgIHJldm9rZUFjY2Vzc1Rva2VuT25TaWdub3V0ID0gZmFsc2UsXHJcbiAgICAgICAgYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUgPSBEZWZhdWx0QWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUsXHJcbiAgICAgICAgcmVkaXJlY3ROYXZpZ2F0b3IgPSBuZXcgUmVkaXJlY3ROYXZpZ2F0b3IoKSxcclxuICAgICAgICBwb3B1cE5hdmlnYXRvciA9IG5ldyBQb3B1cE5hdmlnYXRvcigpLFxyXG4gICAgICAgIGlmcmFtZU5hdmlnYXRvciA9IG5ldyBJRnJhbWVOYXZpZ2F0b3IoKSxcclxuICAgICAgICB1c2VyU3RvcmUgPSBuZXcgV2ViU3RvcmFnZVN0YXRlU3RvcmUoeyBzdG9yZTogR2xvYmFsLnNlc3Npb25TdG9yYWdlIH0pXHJcbiAgICB9ID0ge30pIHtcclxuICAgICAgICBzdXBlcihhcmd1bWVudHNbMF0pO1xyXG5cclxuICAgICAgICB0aGlzLl9wb3B1cF9yZWRpcmVjdF91cmkgPSBwb3B1cF9yZWRpcmVjdF91cmk7XHJcbiAgICAgICAgdGhpcy5fcG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpID0gcG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpO1xyXG4gICAgICAgIHRoaXMuX3BvcHVwV2luZG93RmVhdHVyZXMgPSBwb3B1cFdpbmRvd0ZlYXR1cmVzO1xyXG4gICAgICAgIHRoaXMuX3BvcHVwV2luZG93VGFyZ2V0ID0gcG9wdXBXaW5kb3dUYXJnZXQ7XHJcblxyXG4gICAgICAgIHRoaXMuX3NpbGVudF9yZWRpcmVjdF91cmkgPSBzaWxlbnRfcmVkaXJlY3RfdXJpO1xyXG4gICAgICAgIHRoaXMuX3NpbGVudFJlcXVlc3RUaW1lb3V0ID0gc2lsZW50UmVxdWVzdFRpbWVvdXQ7XHJcbiAgICAgICAgdGhpcy5fYXV0b21hdGljU2lsZW50UmVuZXcgPSBhdXRvbWF0aWNTaWxlbnRSZW5ldztcclxuICAgICAgICB0aGlzLl92YWxpZGF0ZVN1Yk9uU2lsZW50UmVuZXcgPSB2YWxpZGF0ZVN1Yk9uU2lsZW50UmVuZXc7XHJcbiAgICAgICAgdGhpcy5faW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3ID0gaW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3O1xyXG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lID0gYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWU7XHJcblxyXG4gICAgICAgIHRoaXMuX21vbml0b3JTZXNzaW9uID0gbW9uaXRvclNlc3Npb247XHJcbiAgICAgICAgdGhpcy5fbW9uaXRvckFub255bW91c1Nlc3Npb24gPSBtb25pdG9yQW5vbnltb3VzU2Vzc2lvbjtcclxuICAgICAgICB0aGlzLl9jaGVja1Nlc3Npb25JbnRlcnZhbCA9IGNoZWNrU2Vzc2lvbkludGVydmFsO1xyXG4gICAgICAgIHRoaXMuX3N0b3BDaGVja1Nlc3Npb25PbkVycm9yID0gc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3I7XHJcbiAgICAgICAgaWYgKHF1ZXJ5X3N0YXR1c19yZXNwb25zZV90eXBlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3F1ZXJ5X3N0YXR1c19yZXNwb25zZV90eXBlID0gcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGU7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmIChhcmd1bWVudHNbMF0gJiYgYXJndW1lbnRzWzBdLnJlc3BvbnNlX3R5cGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGUgPSBTaWduaW5SZXF1ZXN0LmlzT2lkYyhhcmd1bWVudHNbMF0ucmVzcG9uc2VfdHlwZSkgPyBcImlkX3Rva2VuXCIgOiBcImNvZGVcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3F1ZXJ5X3N0YXR1c19yZXNwb25zZV90eXBlID0gXCJpZF90b2tlblwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9yZXZva2VBY2Nlc3NUb2tlbk9uU2lnbm91dCA9IHJldm9rZUFjY2Vzc1Rva2VuT25TaWdub3V0O1xyXG5cclxuICAgICAgICB0aGlzLl9yZWRpcmVjdE5hdmlnYXRvciA9IHJlZGlyZWN0TmF2aWdhdG9yO1xyXG4gICAgICAgIHRoaXMuX3BvcHVwTmF2aWdhdG9yID0gcG9wdXBOYXZpZ2F0b3I7XHJcbiAgICAgICAgdGhpcy5faWZyYW1lTmF2aWdhdG9yID0gaWZyYW1lTmF2aWdhdG9yO1xyXG5cclxuICAgICAgICB0aGlzLl91c2VyU3RvcmUgPSB1c2VyU3RvcmU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBvcHVwX3JlZGlyZWN0X3VyaSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9wdXBfcmVkaXJlY3RfdXJpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHBvcHVwX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHBvcHVwV2luZG93RmVhdHVyZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvcHVwV2luZG93RmVhdHVyZXM7XHJcbiAgICB9XHJcbiAgICBnZXQgcG9wdXBXaW5kb3dUYXJnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvcHVwV2luZG93VGFyZ2V0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzaWxlbnRfcmVkaXJlY3RfdXJpKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWxlbnRfcmVkaXJlY3RfdXJpO1xyXG4gICAgfVxyXG4gICAgIGdldCBzaWxlbnRSZXF1ZXN0VGltZW91dCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lsZW50UmVxdWVzdFRpbWVvdXQ7XHJcbiAgICB9XHJcbiAgICBnZXQgYXV0b21hdGljU2lsZW50UmVuZXcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dG9tYXRpY1NpbGVudFJlbmV3O1xyXG4gICAgfVxyXG4gICAgZ2V0IHZhbGlkYXRlU3ViT25TaWxlbnRSZW5ldygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGVTdWJPblNpbGVudFJlbmV3O1xyXG4gICAgfVxyXG4gICAgZ2V0IGluY2x1ZGVJZFRva2VuSW5TaWxlbnRSZW5ldygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3O1xyXG4gICAgfVxyXG4gICAgZ2V0IGFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9uaXRvclNlc3Npb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbml0b3JTZXNzaW9uO1xyXG4gICAgfVxyXG4gICAgZ2V0IG1vbml0b3JBbm9ueW1vdXNTZXNzaW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tb25pdG9yQW5vbnltb3VzU2Vzc2lvbjtcclxuICAgIH1cclxuICAgIGdldCBjaGVja1Nlc3Npb25JbnRlcnZhbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2hlY2tTZXNzaW9uSW50ZXJ2YWw7XHJcbiAgICB9XHJcbiAgICBnZXQgc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3IoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3I7XHJcbiAgICB9XHJcbiAgICBnZXQgcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGU7XHJcbiAgICB9XHJcbiAgICBnZXQgcmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jldm9rZUFjY2Vzc1Rva2VuT25TaWdub3V0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCByZWRpcmVjdE5hdmlnYXRvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVkaXJlY3ROYXZpZ2F0b3I7XHJcbiAgICB9XHJcbiAgICBnZXQgcG9wdXBOYXZpZ2F0b3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvcHVwTmF2aWdhdG9yO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlmcmFtZU5hdmlnYXRvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faWZyYW1lTmF2aWdhdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB1c2VyU3RvcmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJTdG9yZTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gJy4vR2xvYmFsLmpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWJTdG9yYWdlU3RhdGVTdG9yZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7cHJlZml4ID0gXCJvaWRjLlwiLCBzdG9yZSA9IEdsb2JhbC5sb2NhbFN0b3JhZ2V9ID0ge30pIHtcclxuICAgICAgICB0aGlzLl9zdG9yZSA9IHN0b3JlO1xyXG4gICAgICAgIHRoaXMuX3ByZWZpeCA9IHByZWZpeDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIldlYlN0b3JhZ2VTdGF0ZVN0b3JlLnNldFwiLCBrZXkpO1xyXG5cclxuICAgICAgICBrZXkgPSB0aGlzLl9wcmVmaXggKyBrZXk7XHJcblxyXG4gICAgICAgIHRoaXMuX3N0b3JlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQoa2V5KSB7XHJcbiAgICAgICAgTG9nLmRlYnVnKFwiV2ViU3RvcmFnZVN0YXRlU3RvcmUuZ2V0XCIsIGtleSk7XHJcblxyXG4gICAgICAgIGtleSA9IHRoaXMuX3ByZWZpeCArIGtleTtcclxuXHJcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLl9zdG9yZS5nZXRJdGVtKGtleSk7XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKGtleSkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIldlYlN0b3JhZ2VTdGF0ZVN0b3JlLnJlbW92ZVwiLCBrZXkpO1xyXG5cclxuICAgICAgICBrZXkgPSB0aGlzLl9wcmVmaXggKyBrZXk7XHJcblxyXG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5fc3RvcmUuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgIHRoaXMuX3N0b3JlLnJlbW92ZUl0ZW0oa2V5KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGxLZXlzKCkge1xyXG4gICAgICAgIExvZy5kZWJ1ZyhcIldlYlN0b3JhZ2VTdGF0ZVN0b3JlLmdldEFsbEtleXNcIik7XHJcblxyXG4gICAgICAgIHZhciBrZXlzID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl9zdG9yZS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IGtleSA9IHRoaXMuX3N0b3JlLmtleShpbmRleCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YodGhpcy5fcHJlZml4KSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKGtleS5zdWJzdHIodGhpcy5fcHJlZml4Lmxlbmd0aCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGtleXMpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbkJhc2VkIG9uIHRoZSB3b3JrIG9mIEF1dGgwXHJcbmh0dHBzOi8vZ2l0aHViLmNvbS9hdXRoMC9pZHRva2VuLXZlcmlmaWVyXHJcbmh0dHBzOi8vZ2l0aHViLmNvbS9hdXRoMC9pZHRva2VuLXZlcmlmaWVyL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuV2hpY2ggaXMgYmFzZWQgb24gdGhlIHdvcmsgb2YgVG9tIFd1XHJcbmh0dHA6Ly93d3ctY3Mtc3R1ZGVudHMuc3RhbmZvcmQuZWR1L350ancvanNibi9cclxuaHR0cDovL3d3dy1jcy1zdHVkZW50cy5zdGFuZm9yZC5lZHUvfnRqdy9qc2JuL0xJQ0VOU0VcclxuKi9cclxuXHJcbi8qXHJcbiAqIFRvIHN1cHBvcnQgbW9zdCBiYXNpYyBPcGVuSWQgdXNlIGNhc2VzICh1c2luZyBSU0EyNTYpLCB3ZSBjYW4gZ2V0IGF3YXkgd2l0aG91dFxyXG4gKiByZXF1aXJpbmcgdGhlIGZ1bGwganJzYXNpZ24gZmVhdHVyZSBzZXQgKGFuZCByZXN1bHRpbmcgbWFzc2l2ZSBidW5kbGUpLlxyXG4gKlxyXG4gKiAtIFN1cHBvcnQgUlNBIDI1NiBhbGdvcml0aG0gKG9wdGlvbmFsbHkgY291bGQgc3VwcG9ydCBSU0EqIGZhbWlseSlcclxuICogLSBQYXJzZSBKV1QgdG9rZW5zIHVzaW5nIHRoZSAobikgcGFyYW1ldGVyLlxyXG4gKiAtIFZlcmlmeSBzaWduYXR1cmUgb2YgaWRfdG9rZW5zXHJcbiAqIC0gVmVyaWZ5IGF0X2hhc2ggb2YgYWNjZXNzX3Rva2Vuc1xyXG4gKiAtIFBlcmZvcm0gY29tbW9uIGJhc2U2NCBlbmNvZGluZy9kZWNvZGluZyB0YXNrcy5cclxuICovXHJcblxyXG5pbXBvcnQgSlNCTiBmcm9tICdqc2JuJztcclxuaW1wb3J0IFNIQTI1NiBmcm9tICdjcnlwdG8tanMvc2hhMjU2JztcclxuaW1wb3J0IGJhc2U2NEpzIGZyb20gJ2Jhc2U2NC1qcyc7XHJcblxyXG52YXIgQmlnSW50ZWdlciA9IEpTQk4uQmlnSW50ZWdlcjtcclxuXHJcbi8qISAoYykgVG9tIFd1IHwgaHR0cDovL3d3dy1jcy1zdHVkZW50cy5zdGFuZm9yZC5lZHUvfnRqdy9qc2JuL1xyXG4gKi9cclxudmFyIGI2NG1hcCA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrL1wiO1xyXG52YXIgYjY0cGFkID0gXCI9XCI7XHJcblxyXG5jb25zdCBCYXNlNjQgPSB7XHJcbiAgICBiNjR0b2hleChzKSB7XHJcbiAgICAgICAgdmFyIHJldCA9IFwiXCI7XHJcbiAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgdmFyIGsgPSAwOyAvLyBiNjQgc3RhdGUsIDAtM1xyXG4gICAgICAgIHZhciBzbG9wO1xyXG4gICAgICAgIGZvcihpID0gMDsgaSA8IHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgaWYocy5jaGFyQXQoaSkgPT09IGI2NHBhZCkgYnJlYWs7XHJcbiAgICAgICAgICAgIHZhciB2ID0gYjY0bWFwLmluZGV4T2Yocy5jaGFyQXQoaSkpO1xyXG4gICAgICAgICAgICBpZih2IDwgMCkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmKGsgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHYgPj4gMik7XHJcbiAgICAgICAgICAgICAgICBzbG9wID0gdiAmIDM7XHJcbiAgICAgICAgICAgICAgICBrID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGsgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChzbG9wIDw8IDIpIHwgKHYgPj4gNCkpO1xyXG4gICAgICAgICAgICAgICAgc2xvcCA9IHYgJiAweGY7XHJcbiAgICAgICAgICAgICAgICBrID0gMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGsgPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHNsb3ApO1xyXG4gICAgICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodiA+PiAyKTtcclxuICAgICAgICAgICAgICAgIHNsb3AgPSB2ICYgMztcclxuICAgICAgICAgICAgICAgIGsgPSAzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKHNsb3AgPDwgMikgfCAodiA+PiA0KSk7XHJcbiAgICAgICAgICAgICAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSh2ICYgMHhmKTtcclxuICAgICAgICAgICAgICAgIGsgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGsgPT09IDEpXHJcbiAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHNsb3AgPDwgMik7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH0sXHJcbiAgICBoZXhUb0Jhc2U2NChoKSB7XHJcbiAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgdmFyIGM7XHJcbiAgICAgICAgdmFyIHJldCA9IFwiXCI7XHJcbiAgICAgICAgZm9yKGkgPSAwOyBpKzMgPD0gaC5sZW5ndGg7IGkrPTMpIHtcclxuICAgICAgICAgICAgYyA9IHBhcnNlSW50KGguc3Vic3RyaW5nKGksaSszKSwxNik7XHJcbiAgICAgICAgICAgIHJldCArPSBiNjRtYXAuY2hhckF0KGMgPj4gNikgKyBiNjRtYXAuY2hhckF0KGMgJiA2Myk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGkrMSA9PT0gaC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgYyA9IHBhcnNlSW50KGguc3Vic3RyaW5nKGksaSsxKSwxNik7XHJcbiAgICAgICAgICAgIHJldCArPSBiNjRtYXAuY2hhckF0KGMgPDwgMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoaSsyID09PSBoLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjID0gcGFyc2VJbnQoaC5zdWJzdHJpbmcoaSxpKzIpLDE2KTtcclxuICAgICAgICAgICAgcmV0ICs9IGI2NG1hcC5jaGFyQXQoYyA+PiAyKSArIGI2NG1hcC5jaGFyQXQoKGMgJiAzKSA8PCA0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGI2NHBhZCkgd2hpbGUoKHJldC5sZW5ndGggJiAzKSA+IDApIHJldCArPSBiNjRwYWQ7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH0sXHJcblxyXG4gICAgcGFkZGluZyhzdHIpIHtcclxuICAgICAgICB2YXIgbW9kID0gKHN0ci5sZW5ndGggJSA0KTtcclxuICAgICAgICB2YXIgcGFkID0gNCAtIG1vZDtcclxuXHJcbiAgICAgICAgaWYgKG1vZCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHN0ciArIChuZXcgQXJyYXkoMSArIHBhZCkpLmpvaW4oJz0nKTtcclxuICAgIH0sXHJcblxyXG4gICAgYnl0ZUFycmF5VG9IZXgocmF3KSB7XHJcbiAgICAgICAgdmFyIEhFWCA9ICcnO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJhdy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgX2hleCA9IHJhd1tpXS50b1N0cmluZygxNik7XHJcbiAgICAgICAgICAgIEhFWCArPSAoX2hleC5sZW5ndGggPT09IDIgPyBfaGV4IDogJzAnICsgX2hleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gSEVYO1xyXG4gICAgfSxcclxuXHJcbiAgICBkZWNvZGVUb0hFWChzdHIpIHtcclxuICAgICAgICByZXR1cm4gQmFzZTY0LmJ5dGVBcnJheVRvSGV4KGJhc2U2NEpzLnRvQnl0ZUFycmF5KEJhc2U2NC5wYWRkaW5nKHN0cikpKTtcclxuICAgIH0sXHJcblxyXG4gICAgYmFzZTY0VG9CYXNlNjRVcmwocykge1xyXG4gICAgICAgIHMgPSBzLnJlcGxhY2UoLz0vZywgXCJcIik7XHJcbiAgICAgICAgcyA9IHMucmVwbGFjZSgvXFwrL2csIFwiLVwiKTtcclxuICAgICAgICBzID0gcy5yZXBsYWNlKC9cXC8vZywgXCJfXCIpO1xyXG4gICAgICAgIHJldHVybiBzO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cmxEZWNvZGUoc3RyKSB7XHJcbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoLy0vZywgJysnKSAvLyBDb252ZXJ0ICctJyB0byAnKydcclxuICAgICAgICAgICAgLnJlcGxhY2UoL18vZywgJy8nKSAvLyBDb252ZXJ0ICdfJyB0byAnLydcclxuICAgICAgICAgICAgLnJlcGxhY2UoL1xccy9nLCAnICcpOyAvLyBDb252ZXJ0ICdcXHMnIHRvICcgJ1xyXG5cclxuICAgICAgICByZXR1cm4gYXRvYihzdHIpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbnZhciBEaWdlc3RJbmZvSGVhZCA9IHtcclxuICAgIHNoYTE6ICczMDIxMzAwOTA2MDUyYjBlMDMwMjFhMDUwMDA0MTQnLFxyXG4gICAgc2hhMjI0OiAnMzAyZDMwMGQwNjA5NjA4NjQ4MDE2NTAzMDQwMjA0MDUwMDA0MWMnLFxyXG4gICAgc2hhMjU2OiAnMzAzMTMwMGQwNjA5NjA4NjQ4MDE2NTAzMDQwMjAxMDUwMDA0MjAnLFxyXG4gICAgc2hhMzg0OiAnMzA0MTMwMGQwNjA5NjA4NjQ4MDE2NTAzMDQwMjAyMDUwMDA0MzAnLFxyXG4gICAgc2hhNTEyOiAnMzA1MTMwMGQwNjA5NjA4NjQ4MDE2NTAzMDQwMjAzMDUwMDA0NDAnLFxyXG4gICAgbWQyOiAnMzAyMDMwMGMwNjA4MmE4NjQ4ODZmNzBkMDIwMjA1MDAwNDEwJyxcclxuICAgIG1kNTogJzMwMjAzMDBjMDYwODJhODY0ODg2ZjcwZDAyMDUwNTAwMDQxMCcsXHJcbiAgICByaXBlbWQxNjA6ICczMDIxMzAwOTA2MDUyYjI0MDMwMjAxMDUwMDA0MTQnXHJcbn07XHJcblxyXG52YXIgRGlnZXN0QWxncyA9IHtcclxuICAgIHNoYTI1NjogU0hBMjU2LFxyXG4gICAgU0hBMjU2OlNIQTI1NlxyXG59O1xyXG5cclxuZnVuY3Rpb24gUlNBVmVyaWZpZXIobW9kdWx1cywgZXhwKSB7XHJcbiAgICB0aGlzLm4gPSBudWxsO1xyXG4gICAgdGhpcy5lID0gMDtcclxuXHJcbiAgICBpZiAobW9kdWx1cyAhPSBudWxsICYmIGV4cCAhPSBudWxsICYmIG1vZHVsdXMubGVuZ3RoID4gMCAmJiBleHAubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMubiA9IG5ldyBCaWdJbnRlZ2VyKG1vZHVsdXMsIDE2KTtcclxuICAgICAgICB0aGlzLmUgPSBwYXJzZUludChleHAsIDE2KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGtleSBkYXRhJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFsZ29yaXRobUZyb21EaWdlc3QoaERpZ2VzdEluZm8pIHtcclxuICAgIGZvciAodmFyIGFsZ05hbWUgaW4gRGlnZXN0SW5mb0hlYWQpIHtcclxuICAgICAgICB2YXIgaGVhZCA9IERpZ2VzdEluZm9IZWFkW2FsZ05hbWVdO1xyXG4gICAgICAgIHZhciBsZW4gPSBoZWFkLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKGhEaWdlc3RJbmZvLnN1YnN0cmluZygwLCBsZW4pID09PSBoZWFkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBhbGc6IGFsZ05hbWUsXHJcbiAgICAgICAgICAgICAgICBoYXNoOiBoRGlnZXN0SW5mby5zdWJzdHJpbmcobGVuKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxufVxyXG5cclxuXHJcblJTQVZlcmlmaWVyLnByb3RvdHlwZS52ZXJpZnkgPSBmdW5jdGlvbiAobXNnLCBlbmNzaWcpIHtcclxuICAgIGVuY3NpZyA9IEJhc2U2NC5kZWNvZGVUb0hFWChlbmNzaWcpO1xyXG4gICAgZW5jc2lnID0gZW5jc2lnLnJlcGxhY2UoL1teMC05YS1mXXxbXFxzXFxuXV0vaWcsICcnKTtcclxuXHJcbiAgICB2YXIgc2lnID0gbmV3IEJpZ0ludGVnZXIoZW5jc2lnLCAxNik7XHJcblxyXG4gICAgaWYgKHNpZy5iaXRMZW5ndGgoKSA+IHRoaXMubi5iaXRMZW5ndGgoKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU2lnbmF0dXJlIGRvZXMgbm90IG1hdGNoIHdpdGggdGhlIGtleSBtb2R1bHVzLicpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBkZWNyeXB0ZWRTaWcgPSBzaWcubW9kUG93SW50KHRoaXMuZSwgdGhpcy5uKTtcclxuICAgIHZhciBkaWdlc3QgPSBkZWNyeXB0ZWRTaWcudG9TdHJpbmcoMTYpLnJlcGxhY2UoL14xZiswMC8sICcnKTtcclxuICAgIHZhciBkaWdlc3RJbmZvID0gZ2V0QWxnb3JpdGhtRnJvbURpZ2VzdChkaWdlc3QpO1xyXG5cclxuICAgIGlmIChkaWdlc3RJbmZvLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIURpZ2VzdEFsZ3MuaGFzT3duUHJvcGVydHkoZGlnZXN0SW5mby5hbGcpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdIYXNoaW5nIGFsZ29yaXRobSBpcyBub3Qgc3VwcG9ydGVkLicpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBtc2dIYXNoID0gRGlnZXN0QWxnc1tkaWdlc3RJbmZvLmFsZ10obXNnKS50b1N0cmluZygpO1xyXG4gICAgcmV0dXJuIChkaWdlc3RJbmZvLmhhc2ggPT09IG1zZ0hhc2gpO1xyXG59O1xyXG5cclxuY29uc3QgQWxsb3dlZFNpZ25pbmdBbGdzID0gWydSUzI1NiddO1xyXG5cclxuY29uc3QgandzID0ge1xyXG4gICAgSldTOiB7XHJcbiAgICAgICAgcGFyc2U6IGZ1bmN0aW9uKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IHRva2VuLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgICAgIHZhciBoZWFkZXI7XHJcbiAgICAgICAgICAgIHZhciBwYXlsb2FkO1xyXG5cclxuICAgICAgICAgICAgLy8gVGhpcyBkaXZlcmdlcyBmcm9tIEF1dGgwJ3MgaW1wbGVtZW50YXRpb24sIHdoaWNoIHRocm93cyByYXRoZXIgdGhhblxyXG4gICAgICAgICAgICAvLyByZXR1cm5pbmcgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgIGlmIChwYXJ0cy5sZW5ndGggIT09IDMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIgPSBKU09OLnBhcnNlKEJhc2U2NC51cmxEZWNvZGUocGFydHNbMF0pKTtcclxuICAgICAgICAgICAgICAgIHBheWxvYWQgPSBKU09OLnBhcnNlKEJhc2U2NC51cmxEZWNvZGUocGFydHNbMV0pKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignVG9rZW4gaGVhZGVyIG9yIHBheWxvYWQgaXMgbm90IHZhbGlkIEpTT04nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlck9iajogaGVhZGVyLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZE9iajogcGF5bG9hZCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZlcmlmeTogZnVuY3Rpb24oand0LCBrZXksIGFsbG93ZWRTaWduaW5nQWxncyA9IFtdKSB7XHJcbiAgICAgICAgICAgIGFsbG93ZWRTaWduaW5nQWxncy5mb3JFYWNoKChhbGcpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChBbGxvd2VkU2lnbmluZ0FsZ3MuaW5kZXhPZihhbGcpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzaWduaW5nIGFsZ29yaXRobTogJyArIGFsZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgdmVyaWZ5ID0gbmV3IFJTQVZlcmlmaWVyKGtleS5uLCBrZXkuZSk7XHJcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IGp3dC5zcGxpdCgnLicpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGhlYWRlckFuZFBheWxvYWQgPSBbcGFydHNbMF0sIHBhcnRzWzFdXS5qb2luKCcuJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB2ZXJpZnkudmVyaWZ5KGhlYWRlckFuZFBheWxvYWQsIHBhcnRzWzJdKTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuXHJcbmNvbnN0IEtleVV0aWwgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgZGVjb2RlZCBrZXlzIGluIEhleCBmb3JtYXQgZm9yIHVzZSBpbiBjcnlwdG8gZnVuY3Rpb25zLlxyXG4gICAgICogU3VwcG9ydHMgbW9kdWx1cy9leHBvbmVudC1zdHlsZSBrZXlzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBrZXkgdGhlIHNlY3VyaXR5IGtleVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgZ2V0S2V5KGtleSkge1xyXG4gICAgICAgIGlmIChrZXkua3R5ID09PSAnUlNBJykge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZTogQmFzZTY0LmRlY29kZVRvSEVYKGtleS5lKSxcclxuICAgICAgICAgICAgICAgIG46IEJhc2U2NC5kZWNvZGVUb0hFWChrZXkubiksXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0sXHJcbn07XHJcblxyXG5jb25zdCBYNTA5ID0ge1xyXG4gICAgZ2V0UHVibGljS2V5RnJvbUNlcnRQRU06IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudGVkLiBVc2UgdGhlIGZ1bGwgb2lkYy1jbGllbnQgbGlicmFyeSBpZiB5b3UgbmVlZCBzdXBwb3J0IGZvciBYNTA5LicpO1xyXG4gICAgfSxcclxufTtcclxuXHJcbmNvbnN0IGNyeXB0byA9IHtcclxuICAgIFV0aWw6IHtcclxuICAgICAgICBoYXNoU3RyaW5nOiBmdW5jdGlvbih2YWx1ZSwgYWxnKSB7XHJcbiAgICAgICAgICAgIHZhciBoYXNoRnVuYyA9IERpZ2VzdEFsZ3NbYWxnXTtcclxuICAgICAgICAgICAgcmV0dXJuIGhhc2hGdW5jKHZhbHVlKS50b1N0cmluZygpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBoZXh0b2I2NHUocykge1xyXG4gICAgaWYgKHMubGVuZ3RoICUgMiA9PT0gMSkge1xyXG4gICAgICAgIHMgPSAnMCcgKyBzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEJhc2U2NC5iYXNlNjRUb0Jhc2U2NFVybChCYXNlNjQuaGV4VG9CYXNlNjQocykpO1xyXG59XHJcblxyXG5jb25zdCB7YjY0dG9oZXh9ID0gQmFzZTY0O1xyXG5cclxuZXhwb3J0IHtcclxuICAgIGp3cyxcclxuICAgIEtleVV0aWwsXHJcbiAgICBYNTA5LFxyXG4gICAgY3J5cHRvLFxyXG4gICAgaGV4dG9iNjR1LFxyXG4gICAgYjY0dG9oZXgsXHJcbiAgICBBbGxvd2VkU2lnbmluZ0FsZ3NcclxufTtcclxuIiwiLyoqXHJcbiAqIEdlbmVyYXRlcyBSRkM0MTIyIHZlcnNpb24gNCBndWlkICgpXHJcbiAqL1xyXG5cclxudmFyIGNyeXB0byA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgPyAod2luZG93LmNyeXB0byB8fCB3aW5kb3cubXNDcnlwdG8pIDogbnVsbDtcclxuXHJcbmZ1bmN0aW9uIF9jcnlwdG9VdWlkdjQoKSB7XHJcbiAgcmV0dXJuIChbMWU3XSstMWUzKy00ZTMrLThlMystMWUxMSkucmVwbGFjZSgvWzAxOF0vZywgYyA9PlxyXG4gICAgKGMgXiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KDEpKVswXSAmIDE1ID4+IGMgLyA0KS50b1N0cmluZygxNilcclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIF91dWlkdjQoKSB7XHJcbiAgICByZXR1cm4gKFsxZTddKy0xZTMrLTRlMystOGUzKy0xZTExKS5yZXBsYWNlKC9bMDE4XS9nLCBjID0+XHJcbiAgICAoYyBeIE1hdGgucmFuZG9tKCkgKiAxNiA+PiBjIC8gNCkudG9TdHJpbmcoMTYpXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5kb20oKSB7XHJcbiAgdmFyIGhhc0NyeXB0byA9IGNyeXB0byAhPSAndW5kZWZpbmVkJyAmJiBjcnlwdG8gIT09IG51bGw7XHJcbiAgdmFyIGhhc1JhbmRvbVZhbHVlcyA9IGhhc0NyeXB0byAmJiAodHlwZW9mKGNyeXB0by5nZXRSYW5kb21WYWx1ZXMpICE9ICd1bmRlZmluZWQnKTsgIFxyXG4gIHZhciB1dWlkID0gaGFzUmFuZG9tVmFsdWVzID8gX2NyeXB0b1V1aWR2NCA6IF91dWlkdjQ7XHJcbiAgcmV0dXJuIHV1aWQoKS5yZXBsYWNlKC8tL2csICcnKTtcclxufVxyXG4iLCJjb25zdCBWZXJzaW9uID0gXCIxLjExLjBcIjsgZXhwb3J0IHtWZXJzaW9ufTsiXSwic291cmNlUm9vdCI6IiJ9