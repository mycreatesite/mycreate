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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./work/js/common/common.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/throttle.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/throttle.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(/*! ./debounce */ "./node_modules/lodash/debounce.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
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

/***/ "./work/js/common/common.js":
/*!**********************************!*\
  !*** ./work/js/common/common.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_common_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../module/common.plugin */ "./work/js/module/common.plugin.js");
/* harmony import */ var _module_common_plugin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_module_common_plugin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _module_bodyScrollPrevent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../module/bodyScrollPrevent */ "./work/js/module/bodyScrollPrevent.js");


 ////////////global variable////////////

var body = $('body');
var accessFlag = sessionStorage.getItem('accessed'); ////////////Draw SVG////////////

(function () {
  var mycLogo = $("#mycLogo").drawsvg({
    duration: 1000,
    stagger: 80,
    easing: "swing",
    callback: function callback() {
      $("#mycLogo g").addClass("fillAnim");
    }
  });

  if (!accessFlag && body.hasClass('home')) {
    setTimeout(function () {
      mycLogo.css("opacity", 1).drawsvg("animate");
    }, 1800);
  } else {
    mycLogo.css("opacity", 1).drawsvg("animate");
  }
})(); ////////////scrollEvents_start////////////


$(function () {
  //navHeaderShow_variables
  var cloneNav = $('#navHeader').clone().attr('id', 'cloneNav').addClass('cloneNav').insertAfter('#navHeader');
  var logoMove = $('.logoFollow:last');
  var showClass = 'isShow'; //showUp_variables

  var forShow1 = $('.forShow1');
  var forShow2 = $('.forShow2');
  var forShow3 = $('.forShow3');
  var forShow4 = $('.forShow4');
  var forShows = [forShow1, forShow2, forShow3, forShow4]; //textillate_variables

  var heading = $('.heading'); //commentAnim_variables

  var commentAnim = $('#commentAnim'); //rollBack_variables

  var rollBack = $('#rollBack'); //helloMogi_variables

  var mogiFooter = $('#mogiFooter');
  var contentsHeight = $(document).height(); ////scrollEvents////

  $(window).on('scroll', lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default()(function () {
    //common_variables
    var windowHeight = $(this).height();
    var scroll = $(this).scrollTop(); //navHeaderShow_func

    if (scroll > 700) {
      logoMove.css('display', 'inline-block');
      cloneNav.addClass(showClass);
    } else {
      cloneNav.removeClass(showClass);
    } //showUp_func


    var len = forShows.length;

    for (var j = 0; j < len; j++) {
      forShows[j].each(function (i) {
        var forShowPoint = $(this).offset().top - 30;
        var delayTime = 90;

        if (scroll > forShowPoint - windowHeight) {
          $(this).delay(i * delayTime).queue(function () {
            $(this).addClass('showUp');
          });
        }
      });
    } //textillate_func


    heading.each(function () {
      var headingPoint = $(this).offset().top;

      if (scroll > headingPoint - windowHeight) {
        $(this).css('opacity', 1).textillate({
          in: {
            effect: 'fadeInUp',
            shuffle: true,
            delay: 20,
            delayScale: 3
          }
        });
      }
    }); //commentAnim_func

    if (commentAnim.length) {
      var myCommentPoint = commentAnim.offset().top;

      if (scroll > myCommentPoint - windowHeight) {
        commentAnim.css('opacity', 1).addClass('animated zoomInDown');
      }
    } //rollBack_func


    if (scroll > 700) {
      rollBack.fadeIn(500);
    } else {
      rollBack.fadeOut(500);
    } //helloMogi_func


    if (contentsHeight - (scroll + windowHeight) < 100) {
      mogiFooter.show(function () {
        $(this).addClass('helloMogi');
      });
    } else {
      if (mogiFooter.hasClass('helloMogi')) {
        mogiFooter.fadeOut(200, function () {
          $(this).removeClass('helloMogi');
        });
      }
    }
  }, 150)); ////scrollEvents////
  ////optional_func////
  //rollBackClicked

  rollBack.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 700, 'easeInOutQuart');
  }); ////optional_func////
}); ////////////scrollEvents_end////////////
////////////spNavHeader////////////

$(function () {
  var hambBtns = $('#hambBtn');
  var hambBtn1 = $('.hambBtn1');
  var hambBtn2 = $('.hambBtn2');
  var hambBtn3 = $('.hambBtn3');
  var spNav = $('#spNavHeader');
  var spNavLists = $('.spNavHeader ul li');
  var spNavLink = $('#spNavHeader li a');
  var delayTime = 80;
  var fadeTime = 200;
  hambBtns.on('click', function () {
    toggleNav();

    if (spNavLists.css('display') == 'list-item') {
      spNavLists.fadeOut(fadeTime);
      Object(_module_bodyScrollPrevent__WEBPACK_IMPORTED_MODULE_2__["default"])(false);
    } else {
      Object(_module_bodyScrollPrevent__WEBPACK_IMPORTED_MODULE_2__["default"])(true);
      spNavLists.each(function (i) {
        $(this).delay(i * delayTime).fadeIn(fadeTime);
      });
    }
  });
  spNavLink.on('click', function () {
    Object(_module_bodyScrollPrevent__WEBPACK_IMPORTED_MODULE_2__["default"])(false);
    toggleNav();
    spNavLists.hide();
  });

  function toggleNav() {
    if (!spNav.hasClass('is-show')) {
      spNav.fadeIn(fadeTime).addClass('is-show');
    } else {
      spNav.fadeOut(fadeTime, function () {
        $(this).removeClass('is-show');
      });
    }

    hambBtn1.toggleClass('hambMove1');
    hambBtn2.toggleClass('hambMove2');
    hambBtn3.toggleClass('hambMove3');
  }
}); ////////////spNavHeader////////////
//↑can not replace↓//
////////////smoothScroll////////////

$(function () {
  $('.navHeader a[href^="#"]').click(function () {
    var href = $(this).attr('href');
    var target = $(href == '#' || href === '' ? 'html' : href);
    var position = target.offset().top;

    if (href === '#contact') {
      $('html,body').animate({
        scrollTop: position
      }, 700, 'easeInOutQuart');
    } else {
      $('html,body').animate({
        scrollTop: position - 50
      }, 700, 'easeInOutQuart');
    }

    return false;
  });
  $('#spNavHeader a[href^="#"]').click(function () {
    var href = $(this).attr('href');
    var target = $(href == '#' || href === '' ? 'html' : href);
    var position = target.offset().top;

    if (href === '#contact') {
      $('html,body').animate({
        scrollTop: position + 100
      }, 700, 'easeInOutQuart');
    } else {
      $('html,body').animate({
        scrollTop: position + 50
      }, 700, 'easeInOutQuart');
    }

    return false;
  });
}); ////////////smoothScroll////////////
////////////otherpage to frontpage////////////

$(window).on('load', function () {
  var fixPx = -50;
  var url = $(location).attr('href');

  if (url.indexOf("?id=") != -1) {
    var idName = url.split("?id=");
    var target = $('#' + idName[idName.length - 1]);

    if (target.length) {
      var pos = target.offset().top + fixPx;

      if (navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
        if (target.prop('id') == "contact") {
          $("html, body").scrollTop(pos + 150);
        } else {
          $("html, body").scrollTop(pos + 100);
        }
      } else {
        if (target.prop('id') == "contact") {
          $("html, body").scrollTop(pos + 50);
        } else {
          $("html, body").scrollTop(pos);
        }
      }
    }
  }
}); ////////////otherpage to frontpage////////////
////////////modal////////////

$(function () {
  $('.modalOpen').on('click', function () {
    Object(_module_bodyScrollPrevent__WEBPACK_IMPORTED_MODULE_2__["default"])(true);

    if ($(this).parents('#spNavHeader')[0]) {
      $('#modalArea').show();
    } else {
      $('#modalArea').fadeIn();
    }

    if ($('#contact')) {
      $('#contact').toggleClass('is-passive');
    }
  });
  $('#modalClose,#modalOuter').on('click', function () {
    $('#modalArea').fadeOut(function () {
      Object(_module_bodyScrollPrevent__WEBPACK_IMPORTED_MODULE_2__["default"])(false);

      if ($('#contact')) {
        $('#contact').toggleClass('is-passive');
      }
    });
  });
}); ////////////modal////////////
////////////scroll control for fuckin'IE11////////////

if (navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge\/12\./)) {
  $('body').on("mousewheel", function () {
    event.preventDefault();
    var wd = event.wheelDelta;
    var csp = window.pageYOffset;
    window.scrollTo(0, csp - wd);
  });
} ////////////scroll control for fuckin'IE11////////////
////////////scrollTriggerAll-bottomFixAbsolutely!!!////////////


$(function () {
  $(window).trigger('scroll');
}); ////////////scrollTriggerAll-bottomFixAbsolutely!!!////////////

/***/ }),

/***/ "./work/js/module/bodyScrollPrevent.js":
/*!*********************************************!*\
  !*** ./work/js/module/bodyScrollPrevent.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bodyScrollPrevent; });
function bodyScrollPrevent(flag) {
  var scrollPosition;
  var body = document.getElementsByTagName('body')[0];
  var ua = window.navigator.userAgent.toLowerCase();
  var isiOS = ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1 || ua.indexOf('macintosh') > -1 && 'ontouchend' in document;
  var scrollBarWidth = window.innerWidth - document.body.clientWidth;

  if (flag) {
    body.style.paddingRight = scrollBarWidth + 'px';

    if (isiOS) {
      scrollPosition = -window.pageYOffset;
      body.style.position = 'fixed';
      body.style.width = '100%';
      body.style.top = scrollPosition + 'px';
    } else {
      body.style.overflow = 'hidden';
    }
  } else if (!flag) {
    body.style.paddingRight = '';

    if (isiOS) {
      scrollPosition = parseInt(body.style.top.replace(/[^0-9]/g, ''));
      body.style.position = '';
      body.style.width = '';
      body.style.top = '';
      window.scrollTo(0, scrollPosition);
    } else {
      body.style.overflow = '';
    }
  }
}

/***/ }),

/***/ "./work/js/module/common.plugin.js":
/*!*****************************************!*\
  !*** ./work/js/module/common.plugin.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable */
//////////////textillate.js//////////////

/*
 * textillate.js
 * http://jschr.github.com/textillate
 * MIT licensed
 *
 * Copyright (C) 2012-2013 Jordan Schroter
 */
(function ($) {
  "use strict";

  function isInEffect(effect) {
    return /In/.test(effect) || $.inArray(effect, $.fn.textillate.defaults.inEffects) >= 0;
  }

  function isOutEffect(effect) {
    return /Out/.test(effect) || $.inArray(effect, $.fn.textillate.defaults.outEffects) >= 0;
  }

  function stringToBoolean(str) {
    if (str !== "true" && str !== "false") return str;
    return str === "true";
  } // custom get data api method


  function getData(node) {
    var attrs = node.attributes || [],
        data = {};
    if (!attrs.length) return data;
    $.each(attrs, function (i, attr) {
      var nodeName = attr.nodeName.replace(/delayscale/, 'delayScale');

      if (/^data-in-*/.test(nodeName)) {
        data.in = data.in || {};
        data.in[nodeName.replace(/data-in-/, '')] = stringToBoolean(attr.nodeValue);
      } else if (/^data-out-*/.test(nodeName)) {
        data.out = data.out || {};
        data.out[nodeName.replace(/data-out-/, '')] = stringToBoolean(attr.nodeValue);
      } else if (/^data-*/.test(nodeName)) {
        data[nodeName.replace(/data-/, '')] = stringToBoolean(attr.nodeValue);
      }
    });
    return data;
  }

  function shuffle(o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x) {
      ;
    }

    return o;
  }

  function animate($t, effect, cb) {
    $t.addClass('animated ' + effect).css('visibility', 'visible').show();
    $t.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
      $t.removeClass('animated ' + effect);
      cb && cb();
    });
  }

  function animateTokens($tokens, options, cb) {
    var that = this,
        count = $tokens.length;

    if (!count) {
      cb && cb();
      return;
    }

    if (options.shuffle) $tokens = shuffle($tokens);
    if (options.reverse) $tokens = $tokens.toArray().reverse();
    $.each($tokens, function (i, t) {
      var $token = $(t);

      function complete() {
        if (isInEffect(options.effect)) {
          $token.css('visibility', 'visible');
        } else if (isOutEffect(options.effect)) {
          $token.css('visibility', 'hidden');
        }

        count -= 1;
        if (!count && cb) cb();
      }

      var delay = options.sync ? options.delay : options.delay * i * options.delayScale;
      $token.text() ? setTimeout(function () {
        animate($token, options.effect, complete);
      }, delay) : complete();
    });
  }

  var Textillate = function Textillate(element, options) {
    var base = this,
        $element = $(element);

    base.init = function () {
      base.$texts = $element.find(options.selector);

      if (!base.$texts.length) {
        base.$texts = $('<ul class="texts"><li>' + $element.html() + '</li></ul>');
        $element.html(base.$texts);
      }

      base.$texts.hide();
      base.$current = $('<span>').html(base.$texts.find(':first-child').html()).prependTo($element);

      if (isInEffect(options.in.effect)) {
        base.$current.css('visibility', 'hidden');
      } else if (isOutEffect(options.out.effect)) {
        base.$current.css('visibility', 'visible');
      }

      base.setOptions(options);
      base.timeoutRun = null;
      setTimeout(function () {
        base.options.autoStart && base.start();
      }, base.options.initialDelay);
    };

    base.setOptions = function (options) {
      base.options = options;
    };

    base.triggerEvent = function (name) {
      var e = $.Event(name + '.tlt');
      $element.trigger(e, base);
      return e;
    };

    base.in = function (index, cb) {
      index = index || 0;
      var $elem = base.$texts.find(':nth-child(' + ((index || 0) + 1) + ')'),
          options = $.extend(true, {}, base.options, $elem.length ? getData($elem[0]) : {}),
          $tokens;
      $elem.addClass('current');
      base.triggerEvent('inAnimationBegin');
      $element.attr('data-active', $elem.data('id'));
      base.$current.html($elem.html()).lettering('words'); // split words to individual characters if token type is set to 'char'

      if (base.options.type == "char") {
        base.$current.find('[class^="word"]').css({
          'display': 'inline-block',
          // fix for poor ios performance
          '-webkit-transform': 'translate3d(0,0,0)',
          '-moz-transform': 'translate3d(0,0,0)',
          '-o-transform': 'translate3d(0,0,0)',
          'transform': 'translate3d(0,0,0)'
        }).each(function () {
          $(this).lettering();
        });
      }

      $tokens = base.$current.find('[class^="' + base.options.type + '"]').css('display', 'inline-block');

      if (isInEffect(options.in.effect)) {
        $tokens.css('visibility', 'hidden');
      } else if (isOutEffect(options.in.effect)) {
        $tokens.css('visibility', 'visible');
      }

      base.currentIndex = index;
      animateTokens($tokens, options.in, function () {
        base.triggerEvent('inAnimationEnd');
        if (options.in.callback) options.in.callback();
        if (cb) cb(base);
      });
    };

    base.out = function (cb) {
      var $elem = base.$texts.find(':nth-child(' + ((base.currentIndex || 0) + 1) + ')'),
          $tokens = base.$current.find('[class^="' + base.options.type + '"]'),
          options = $.extend(true, {}, base.options, $elem.length ? getData($elem[0]) : {});
      base.triggerEvent('outAnimationBegin');
      animateTokens($tokens, options.out, function () {
        $elem.removeClass('current');
        base.triggerEvent('outAnimationEnd');
        $element.removeAttr('data-active');
        if (options.out.callback) options.out.callback();
        if (cb) cb(base);
      });
    };

    base.start = function (index) {
      setTimeout(function () {
        base.triggerEvent('start');

        (function run(index) {
          base.in(index, function () {
            var length = base.$texts.children().length;
            index += 1;

            if (!base.options.loop && index >= length) {
              if (base.options.callback) base.options.callback();
              base.triggerEvent('end');
            } else {
              index = index % length;
              base.timeoutRun = setTimeout(function () {
                base.out(function () {
                  run(index);
                });
              }, base.options.minDisplayTime);
            }
          });
        })(index || 0);
      }, base.options.initialDelay);
    };

    base.stop = function () {
      if (base.timeoutRun) {
        clearInterval(base.timeoutRun);
        base.timeoutRun = null;
      }
    };

    base.init();
  };

  $.fn.textillate = function (settings, args) {
    return this.each(function () {
      var $this = $(this),
          data = $this.data('textillate'),
          options = $.extend(true, {}, $.fn.textillate.defaults, getData(this), _typeof(settings) == 'object' && settings);

      if (!data) {
        $this.data('textillate', data = new Textillate(this, options));
      } else if (typeof settings == 'string') {
        data[settings].apply(data, [].concat(args));
      } else {
        data.setOptions.call(data, options);
      }
    });
  };

  $.fn.textillate.defaults = {
    selector: '.texts',
    loop: false,
    minDisplayTime: 2000,
    initialDelay: 0,
    in: {
      effect: 'fadeInLeftBig',
      delayScale: 1.5,
      delay: 50,
      sync: false,
      reverse: false,
      shuffle: false,
      callback: function callback() {}
    },
    out: {
      effect: 'hinge',
      delayScale: 1.5,
      delay: 50,
      sync: false,
      reverse: false,
      shuffle: false,
      callback: function callback() {}
    },
    autoStart: true,
    inEffects: [],
    outEffects: ['hinge'],
    callback: function callback() {},
    type: 'char'
  };
})(jQuery); //////////////Lettering.js//////////////

/*global jQuery */

/*!	
* Lettering.JS 0.6.1
*
* Copyright 2010, Dave Rupert http://daverupert.com
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
*
* Thanks to Paul Irish - http://paulirish.com - for the feedback.
*
* Date: Mon Sep 20 17:14:00 2010 -0600
*/


(function ($) {
  function injector(t, splitter, klass, after) {
    var a = t.text().split(splitter),
        inject = '';

    if (a.length) {
      $(a).each(function (i, item) {
        inject += '<span class="' + klass + (i + 1) + '">' + item + '</span>' + after;
      });
      t.empty().append(inject);
    }
  }

  var methods = {
    init: function init() {
      return this.each(function () {
        injector($(this), '', 'char', '');
      });
    },
    words: function words() {
      return this.each(function () {
        injector($(this), ' ', 'word', ' ');
      });
    },
    lines: function lines() {
      return this.each(function () {
        var r = "eefec303079ad17405c889e092e105b0"; // Because it's hard to split a <br/> tag consistently across browsers,
        // (*ahem* IE *ahem*), we replaces all <br/> instances with an md5 hash 
        // (of the word "split").  If you're trying to use this plugin on that 
        // md5 hash string, it will fail because you're being ridiculous.

        injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
      });
    }
  };

  $.fn.lettering = function (method) {
    // Method calling logic
    if (method && methods[method]) {
      return methods[method].apply(this, [].slice.call(arguments, 1));
    } else if (method === 'letters' || !method) {
      return methods.init.apply(this, [].slice.call(arguments, 0)); // always pass an array
    }

    $.error('Method ' + method + ' does not exist on jQuery.lettering');
    return this;
  };
})(jQuery); //////////////DrawSVG.js//////////////

/*! jQuery DrawSVG v1.1.0 (2016-10-05) - git.io/vGFa5 - Copyright (c) 2016 Leonardo Santos - MIT License */


!function (t) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (t) {
  "use strict";

  var e = "drawsvg",
      n = {
    duration: 1e3,
    stagger: 200,
    easing: "swing",
    reverse: !1,
    callback: t.noop
  },
      a = function () {
    var a = function a(_a, o) {
      var i = this,
          r = t.extend(n, o);
      i.$elm = t(_a), i.$elm.is("svg") && (i.options = r, i.$paths = i.$elm.find("path"), i.totalDuration = r.duration + r.stagger * i.$paths.length, i.duration = r.duration / i.totalDuration, i.$paths.each(function (t, e) {
        var n = e.getTotalLength();
        e.pathLen = n, e.delay = r.stagger * t / i.totalDuration, e.style.strokeDasharray = [n, n].join(" "), e.style.strokeDashoffset = n;
      }), i.$elm.attr("class", function (t, n) {
        return [n, e + "-initialized"].join(" ");
      }));
    };

    return a.prototype.getVal = function (e, n) {
      return 1 - t.easing[n](e, e, 0, 1, 1);
    }, a.prototype.progress = function (t) {
      var e = this,
          n = e.options,
          a = e.duration;
      e.$paths.each(function (o, i) {
        var r = i.style;
        if (1 === t) r.strokeDashoffset = 0;else if (0 === t) r.strokeDashoffset = i.pathLen + "px";else if (t >= i.delay && t <= a + i.delay) {
          var s = (t - i.delay) / a;
          r.strokeDashoffset = e.getVal(s, n.easing) * i.pathLen * (n.reverse ? -1 : 1) + "px";
        }
      });
    }, a.prototype.animate = function () {
      var n = this;
      n.$elm.attr("class", function (t, n) {
        return [n, e + "-animating"].join(" ");
      }), t({
        len: 0
      }).animate({
        len: 1
      }, {
        easing: "linear",
        duration: n.totalDuration,
        step: function step(t, e) {
          n.progress.call(n, t / e.end);
        },
        complete: function complete() {
          n.options.callback.call(this), n.$elm.attr("class", function (t, n) {
            return n.replace(e + "-animating", "");
          });
        }
      });
    }, a;
  }();

  t.fn[e] = function (n, o) {
    return this.each(function () {
      var i = t.data(this, e);
      i && "" + n === n && i[n] ? i[n](o) : t.data(this, e, new a(this, n));
    });
  };
});
/* eslint-enable */

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2RlYm91bmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3Rocm90dGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9OdW1iZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi93b3JrL2pzL2NvbW1vbi9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vd29yay9qcy9tb2R1bGUvYm9keVNjcm9sbFByZXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vd29yay9qcy9tb2R1bGUvY29tbW9uLnBsdWdpbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJib2R5IiwiJCIsImFjY2Vzc0ZsYWciLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJteWNMb2dvIiwiZHJhd3N2ZyIsImR1cmF0aW9uIiwic3RhZ2dlciIsImVhc2luZyIsImNhbGxiYWNrIiwiYWRkQ2xhc3MiLCJoYXNDbGFzcyIsInNldFRpbWVvdXQiLCJjc3MiLCJjbG9uZU5hdiIsImNsb25lIiwiYXR0ciIsImluc2VydEFmdGVyIiwibG9nb01vdmUiLCJzaG93Q2xhc3MiLCJmb3JTaG93MSIsImZvclNob3cyIiwiZm9yU2hvdzMiLCJmb3JTaG93NCIsImZvclNob3dzIiwiaGVhZGluZyIsImNvbW1lbnRBbmltIiwicm9sbEJhY2siLCJtb2dpRm9vdGVyIiwiY29udGVudHNIZWlnaHQiLCJkb2N1bWVudCIsImhlaWdodCIsIndpbmRvdyIsIm9uIiwidGhyb3R0bGUiLCJ3aW5kb3dIZWlnaHQiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJyZW1vdmVDbGFzcyIsImxlbiIsImxlbmd0aCIsImoiLCJlYWNoIiwiaSIsImZvclNob3dQb2ludCIsIm9mZnNldCIsInRvcCIsImRlbGF5VGltZSIsImRlbGF5IiwicXVldWUiLCJoZWFkaW5nUG9pbnQiLCJ0ZXh0aWxsYXRlIiwiaW4iLCJlZmZlY3QiLCJzaHVmZmxlIiwiZGVsYXlTY2FsZSIsIm15Q29tbWVudFBvaW50IiwiZmFkZUluIiwiZmFkZU91dCIsInNob3ciLCJjbGljayIsImFuaW1hdGUiLCJoYW1iQnRucyIsImhhbWJCdG4xIiwiaGFtYkJ0bjIiLCJoYW1iQnRuMyIsInNwTmF2Iiwic3BOYXZMaXN0cyIsInNwTmF2TGluayIsImZhZGVUaW1lIiwidG9nZ2xlTmF2IiwiYm9keVNjcm9sbFByZXZlbnQiLCJoaWRlIiwidG9nZ2xlQ2xhc3MiLCJocmVmIiwidGFyZ2V0IiwicG9zaXRpb24iLCJmaXhQeCIsInVybCIsImxvY2F0aW9uIiwiaW5kZXhPZiIsImlkTmFtZSIsInNwbGl0IiwicG9zIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwicHJvcCIsInBhcmVudHMiLCJtYXRjaCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ3ZCIsIndoZWVsRGVsdGEiLCJjc3AiLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvIiwidHJpZ2dlciIsImZsYWciLCJzY3JvbGxQb3NpdGlvbiIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwidWEiLCJ0b0xvd2VyQ2FzZSIsImlzaU9TIiwic2Nyb2xsQmFyV2lkdGgiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJzdHlsZSIsInBhZGRpbmdSaWdodCIsIndpZHRoIiwib3ZlcmZsb3ciLCJwYXJzZUludCIsInJlcGxhY2UiLCJpc0luRWZmZWN0IiwidGVzdCIsImluQXJyYXkiLCJmbiIsImRlZmF1bHRzIiwiaW5FZmZlY3RzIiwiaXNPdXRFZmZlY3QiLCJvdXRFZmZlY3RzIiwic3RyaW5nVG9Cb29sZWFuIiwic3RyIiwiZ2V0RGF0YSIsIm5vZGUiLCJhdHRycyIsImF0dHJpYnV0ZXMiLCJkYXRhIiwibm9kZU5hbWUiLCJub2RlVmFsdWUiLCJvdXQiLCJvIiwieCIsIk1hdGgiLCJyYW5kb20iLCIkdCIsImNiIiwib25lIiwiYW5pbWF0ZVRva2VucyIsIiR0b2tlbnMiLCJvcHRpb25zIiwidGhhdCIsImNvdW50IiwicmV2ZXJzZSIsInRvQXJyYXkiLCJ0IiwiJHRva2VuIiwiY29tcGxldGUiLCJzeW5jIiwidGV4dCIsIlRleHRpbGxhdGUiLCJlbGVtZW50IiwiYmFzZSIsIiRlbGVtZW50IiwiaW5pdCIsIiR0ZXh0cyIsImZpbmQiLCJzZWxlY3RvciIsImh0bWwiLCIkY3VycmVudCIsInByZXBlbmRUbyIsInNldE9wdGlvbnMiLCJ0aW1lb3V0UnVuIiwiYXV0b1N0YXJ0Iiwic3RhcnQiLCJpbml0aWFsRGVsYXkiLCJ0cmlnZ2VyRXZlbnQiLCJuYW1lIiwiZSIsIkV2ZW50IiwiaW5kZXgiLCIkZWxlbSIsImV4dGVuZCIsImxldHRlcmluZyIsInR5cGUiLCJjdXJyZW50SW5kZXgiLCJyZW1vdmVBdHRyIiwicnVuIiwiY2hpbGRyZW4iLCJsb29wIiwibWluRGlzcGxheVRpbWUiLCJzdG9wIiwiY2xlYXJJbnRlcnZhbCIsInNldHRpbmdzIiwiYXJncyIsIiR0aGlzIiwiYXBwbHkiLCJjb25jYXQiLCJjYWxsIiwialF1ZXJ5IiwiaW5qZWN0b3IiLCJzcGxpdHRlciIsImtsYXNzIiwiYWZ0ZXIiLCJhIiwiaW5qZWN0IiwiaXRlbSIsImVtcHR5IiwiYXBwZW5kIiwibWV0aG9kcyIsIndvcmRzIiwibGluZXMiLCJyIiwicmVwbGFjZVdpdGgiLCJlbmQiLCJtZXRob2QiLCJzbGljZSIsImFyZ3VtZW50cyIsImVycm9yIiwiZGVmaW5lIiwibiIsIm5vb3AiLCIkZWxtIiwiaXMiLCIkcGF0aHMiLCJ0b3RhbER1cmF0aW9uIiwiZ2V0VG90YWxMZW5ndGgiLCJwYXRoTGVuIiwic3Ryb2tlRGFzaGFycmF5Iiwiam9pbiIsInN0cm9rZURhc2hvZmZzZXQiLCJwcm90b3R5cGUiLCJnZXRWYWwiLCJwcm9ncmVzcyIsInMiLCJzdGVwIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsV0FBVyxtQkFBTyxDQUFDLCtDQUFTOztBQUU1QjtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNMQSxhQUFhLG1CQUFPLENBQUMsbURBQVc7QUFDaEMsZ0JBQWdCLG1CQUFPLENBQUMseURBQWM7QUFDdEMscUJBQXFCLG1CQUFPLENBQUMsbUVBQW1COztBQUVoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDSEEsYUFBYSxtQkFBTyxDQUFDLG1EQUFXOztBQUVoQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUM3Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3JCQSxpQkFBaUIsbUJBQU8sQ0FBQywyREFBZTs7QUFFeEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNSQSxlQUFlLG1CQUFPLENBQUMscURBQVk7QUFDbkMsVUFBVSxtQkFBTyxDQUFDLDJDQUFPO0FBQ3pCLGVBQWUsbUJBQU8sQ0FBQyxxREFBWTs7QUFFbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTyxZQUFZO0FBQzlCLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLDhDQUE4QyxrQkFBa0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDOUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUM1QkEsaUJBQWlCLG1CQUFPLENBQUMsMkRBQWU7QUFDeEMsbUJBQW1CLG1CQUFPLENBQUMsNkRBQWdCOztBQUUzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDNUJBLFdBQVcsbUJBQU8sQ0FBQywrQ0FBUzs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUN0QkEsZUFBZSxtQkFBTyxDQUFDLHFEQUFZO0FBQ25DLGVBQWUsbUJBQU8sQ0FBQyxxREFBWTs7QUFFbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTyxZQUFZO0FBQzlCLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsb0JBQW9CO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7Ozs7Ozs7Ozs7O0FDcEVBLGVBQWUsbUJBQU8sQ0FBQyxxREFBWTtBQUNuQyxlQUFlLG1CQUFPLENBQUMscURBQVk7O0FBRW5DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNqRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Q0FHQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLENBQUMsQ0FBQyxNQUFELENBQWQ7QUFDQSxJQUFNQyxVQUFVLEdBQUdDLGNBQWMsQ0FBQ0MsT0FBZixDQUF1QixVQUF2QixDQUFuQixDLENBRUE7O0FBQ0EsQ0FBQyxZQUFZO0FBQ1osTUFBSUMsT0FBTyxHQUFHSixDQUFDLENBQUMsVUFBRCxDQUFELENBQWNLLE9BQWQsQ0FBc0I7QUFDbkNDLFlBQVEsRUFBRSxJQUR5QjtBQUVuQ0MsV0FBTyxFQUFFLEVBRjBCO0FBR25DQyxVQUFNLEVBQUUsT0FIMkI7QUFJbkNDLFlBQVEsRUFBRSxvQkFBWTtBQUNyQlQsT0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQlUsUUFBaEIsQ0FBeUIsVUFBekI7QUFDQTtBQU5rQyxHQUF0QixDQUFkOztBQVFBLE1BQUksQ0FBQ1QsVUFBRCxJQUFlRixJQUFJLENBQUNZLFFBQUwsQ0FBYyxNQUFkLENBQW5CLEVBQTBDO0FBQ3pDQyxjQUFVLENBQUMsWUFBWTtBQUN0QlIsYUFBTyxDQUFDUyxHQUFSLENBQVksU0FBWixFQUF1QixDQUF2QixFQUEwQlIsT0FBMUIsQ0FBa0MsU0FBbEM7QUFDQSxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0EsR0FKRCxNQUlPO0FBQ05ELFdBQU8sQ0FBQ1MsR0FBUixDQUFZLFNBQVosRUFBdUIsQ0FBdkIsRUFBMEJSLE9BQTFCLENBQWtDLFNBQWxDO0FBQ0E7QUFDRCxDQWhCRCxJLENBa0JBOzs7QUFDQUwsQ0FBQyxDQUFDLFlBQVk7QUFFYjtBQUNBLE1BQUljLFFBQVEsR0FBR2QsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQmUsS0FBaEIsR0FBd0JDLElBQXhCLENBQTZCLElBQTdCLEVBQW1DLFVBQW5DLEVBQStDTixRQUEvQyxDQUF3RCxVQUF4RCxFQUFvRU8sV0FBcEUsQ0FBZ0YsWUFBaEYsQ0FBZjtBQUNBLE1BQUlDLFFBQVEsR0FBR2xCLENBQUMsQ0FBQyxrQkFBRCxDQUFoQjtBQUNBLE1BQUltQixTQUFTLEdBQUcsUUFBaEIsQ0FMYSxDQU1iOztBQUNBLE1BQUlDLFFBQVEsR0FBR3BCLENBQUMsQ0FBQyxXQUFELENBQWhCO0FBQ0EsTUFBSXFCLFFBQVEsR0FBR3JCLENBQUMsQ0FBQyxXQUFELENBQWhCO0FBQ0EsTUFBSXNCLFFBQVEsR0FBR3RCLENBQUMsQ0FBQyxXQUFELENBQWhCO0FBQ0EsTUFBSXVCLFFBQVEsR0FBR3ZCLENBQUMsQ0FBQyxXQUFELENBQWhCO0FBQ0EsTUFBSXdCLFFBQVEsR0FBRyxDQUFDSixRQUFELEVBQVdDLFFBQVgsRUFBcUJDLFFBQXJCLEVBQStCQyxRQUEvQixDQUFmLENBWGEsQ0FZYjs7QUFDQSxNQUFJRSxPQUFPLEdBQUd6QixDQUFDLENBQUMsVUFBRCxDQUFmLENBYmEsQ0FjYjs7QUFDQSxNQUFJMEIsV0FBVyxHQUFHMUIsQ0FBQyxDQUFDLGNBQUQsQ0FBbkIsQ0FmYSxDQWdCYjs7QUFDQSxNQUFJMkIsUUFBUSxHQUFHM0IsQ0FBQyxDQUFDLFdBQUQsQ0FBaEIsQ0FqQmEsQ0FrQmI7O0FBQ0EsTUFBSTRCLFVBQVUsR0FBRzVCLENBQUMsQ0FBQyxhQUFELENBQWxCO0FBQ0EsTUFBSTZCLGNBQWMsR0FBRzdCLENBQUMsQ0FBQzhCLFFBQUQsQ0FBRCxDQUFZQyxNQUFaLEVBQXJCLENBcEJhLENBc0JiOztBQUNBL0IsR0FBQyxDQUFDZ0MsTUFBRCxDQUFELENBQVVDLEVBQVYsQ0FBYSxRQUFiLEVBQXVCQyxzREFBUSxDQUFDLFlBQVk7QUFFM0M7QUFDQSxRQUFJQyxZQUFZLEdBQUduQyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVErQixNQUFSLEVBQW5CO0FBQ0EsUUFBSUssTUFBTSxHQUFHcEMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcUMsU0FBUixFQUFiLENBSjJDLENBTTNDOztBQUNBLFFBQUlELE1BQU0sR0FBRyxHQUFiLEVBQWtCO0FBQ2pCbEIsY0FBUSxDQUFDTCxHQUFULENBQWEsU0FBYixFQUF3QixjQUF4QjtBQUNBQyxjQUFRLENBQUNKLFFBQVQsQ0FBa0JTLFNBQWxCO0FBQ0EsS0FIRCxNQUdPO0FBQ05MLGNBQVEsQ0FBQ3dCLFdBQVQsQ0FBcUJuQixTQUFyQjtBQUNBLEtBWjBDLENBYTNDOzs7QUFDQSxRQUFJb0IsR0FBRyxHQUFHZixRQUFRLENBQUNnQixNQUFuQjs7QUFDQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLEdBQXBCLEVBQXlCRSxDQUFDLEVBQTFCLEVBQThCO0FBQzdCakIsY0FBUSxDQUFDaUIsQ0FBRCxDQUFSLENBQVlDLElBQVosQ0FBaUIsVUFBVUMsQ0FBVixFQUFhO0FBQzdCLFlBQUlDLFlBQVksR0FBRzVDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTZDLE1BQVIsR0FBaUJDLEdBQWpCLEdBQXVCLEVBQTFDO0FBQ0EsWUFBSUMsU0FBUyxHQUFHLEVBQWhCOztBQUNBLFlBQUlYLE1BQU0sR0FBR1EsWUFBWSxHQUFHVCxZQUE1QixFQUEwQztBQUN6Q25DLFdBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWdELEtBQVIsQ0FBY0wsQ0FBQyxHQUFHSSxTQUFsQixFQUE2QkUsS0FBN0IsQ0FBbUMsWUFBWTtBQUM5Q2pELGFBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVUsUUFBUixDQUFpQixRQUFqQjtBQUNBLFdBRkQ7QUFHQTtBQUNELE9BUkQ7QUFTQSxLQXpCMEMsQ0EwQjNDOzs7QUFDQWUsV0FBTyxDQUFDaUIsSUFBUixDQUFhLFlBQVk7QUFDeEIsVUFBSVEsWUFBWSxHQUFHbEQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNkMsTUFBUixHQUFpQkMsR0FBcEM7O0FBQ0EsVUFBSVYsTUFBTSxHQUFHYyxZQUFZLEdBQUdmLFlBQTVCLEVBQTBDO0FBQ3pDbkMsU0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRYSxHQUFSLENBQVksU0FBWixFQUF1QixDQUF2QixFQUEwQnNDLFVBQTFCLENBQXFDO0FBQ3BDQyxZQUFFLEVBQUU7QUFDSEMsa0JBQU0sRUFBRSxVQURMO0FBRUhDLG1CQUFPLEVBQUUsSUFGTjtBQUdITixpQkFBSyxFQUFFLEVBSEo7QUFJSE8sc0JBQVUsRUFBRTtBQUpUO0FBRGdDLFNBQXJDO0FBUUE7QUFDRCxLQVpELEVBM0IyQyxDQXdDM0M7O0FBQ0EsUUFBSTdCLFdBQVcsQ0FBQ2MsTUFBaEIsRUFBd0I7QUFDdkIsVUFBSWdCLGNBQWMsR0FBRzlCLFdBQVcsQ0FBQ21CLE1BQVosR0FBcUJDLEdBQTFDOztBQUNBLFVBQUlWLE1BQU0sR0FBR29CLGNBQWMsR0FBR3JCLFlBQTlCLEVBQTRDO0FBQzNDVCxtQkFBVyxDQUFDYixHQUFaLENBQWdCLFNBQWhCLEVBQTJCLENBQTNCLEVBQThCSCxRQUE5QixDQUF1QyxxQkFBdkM7QUFDQTtBQUNELEtBOUMwQyxDQStDM0M7OztBQUNBLFFBQUkwQixNQUFNLEdBQUcsR0FBYixFQUFrQjtBQUNqQlQsY0FBUSxDQUFDOEIsTUFBVCxDQUFnQixHQUFoQjtBQUNBLEtBRkQsTUFFTztBQUNOOUIsY0FBUSxDQUFDK0IsT0FBVCxDQUFpQixHQUFqQjtBQUNBLEtBcEQwQyxDQXFEM0M7OztBQUNBLFFBQUk3QixjQUFjLElBQUlPLE1BQU0sR0FBR0QsWUFBYixDQUFkLEdBQTJDLEdBQS9DLEVBQW9EO0FBQ25EUCxnQkFBVSxDQUFDK0IsSUFBWCxDQUFnQixZQUFZO0FBQzNCM0QsU0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRVSxRQUFSLENBQWlCLFdBQWpCO0FBQ0EsT0FGRDtBQUdBLEtBSkQsTUFJTztBQUNOLFVBQUlrQixVQUFVLENBQUNqQixRQUFYLENBQW9CLFdBQXBCLENBQUosRUFBc0M7QUFDckNpQixrQkFBVSxDQUFDOEIsT0FBWCxDQUFtQixHQUFuQixFQUF3QixZQUFZO0FBQ25DMUQsV0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRc0MsV0FBUixDQUFvQixXQUFwQjtBQUNBLFNBRkQ7QUFHQTtBQUNEO0FBRUQsR0FsRThCLEVBa0U1QixHQWxFNEIsQ0FBL0IsRUF2QmEsQ0EwRmI7QUFFQTtBQUNBOztBQUNBWCxVQUFRLENBQUNpQyxLQUFULENBQWUsWUFBWTtBQUMxQjVELEtBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZTZELE9BQWYsQ0FBdUI7QUFBRXhCLGVBQVMsRUFBRTtBQUFiLEtBQXZCLEVBQXlDLEdBQXpDLEVBQThDLGdCQUE5QztBQUNBLEdBRkQsRUE5RmEsQ0FpR2I7QUFFQSxDQW5HQSxDQUFELEMsQ0FvR0E7QUFFQTs7QUFDQXJDLENBQUMsQ0FBQyxZQUFZO0FBQ2IsTUFBSThELFFBQVEsR0FBRzlELENBQUMsQ0FBQyxVQUFELENBQWhCO0FBQ0EsTUFBSStELFFBQVEsR0FBRy9ELENBQUMsQ0FBQyxXQUFELENBQWhCO0FBQ0EsTUFBSWdFLFFBQVEsR0FBR2hFLENBQUMsQ0FBQyxXQUFELENBQWhCO0FBQ0EsTUFBSWlFLFFBQVEsR0FBR2pFLENBQUMsQ0FBQyxXQUFELENBQWhCO0FBQ0EsTUFBSWtFLEtBQUssR0FBR2xFLENBQUMsQ0FBQyxjQUFELENBQWI7QUFDQSxNQUFJbUUsVUFBVSxHQUFHbkUsQ0FBQyxDQUFDLG9CQUFELENBQWxCO0FBQ0EsTUFBSW9FLFNBQVMsR0FBR3BFLENBQUMsQ0FBQyxtQkFBRCxDQUFqQjtBQUNBLE1BQUkrQyxTQUFTLEdBQUcsRUFBaEI7QUFDQSxNQUFJc0IsUUFBUSxHQUFHLEdBQWY7QUFDQVAsVUFBUSxDQUFDN0IsRUFBVCxDQUFZLE9BQVosRUFBcUIsWUFBWTtBQUNoQ3FDLGFBQVM7O0FBQ1QsUUFBSUgsVUFBVSxDQUFDdEQsR0FBWCxDQUFlLFNBQWYsS0FBNkIsV0FBakMsRUFBOEM7QUFDN0NzRCxnQkFBVSxDQUFDVCxPQUFYLENBQW1CVyxRQUFuQjtBQUNBRSwrRUFBaUIsQ0FBQyxLQUFELENBQWpCO0FBQ0EsS0FIRCxNQUdPO0FBQ05BLCtFQUFpQixDQUFDLElBQUQsQ0FBakI7QUFDQUosZ0JBQVUsQ0FBQ3pCLElBQVgsQ0FBZ0IsVUFBVUMsQ0FBVixFQUFhO0FBQzVCM0MsU0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0QsS0FBUixDQUFjTCxDQUFDLEdBQUdJLFNBQWxCLEVBQTZCVSxNQUE3QixDQUFvQ1ksUUFBcEM7QUFDQSxPQUZEO0FBR0E7QUFDRCxHQVhEO0FBWUFELFdBQVMsQ0FBQ25DLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLFlBQVk7QUFDakNzQyw2RUFBaUIsQ0FBQyxLQUFELENBQWpCO0FBQ0FELGFBQVM7QUFDVEgsY0FBVSxDQUFDSyxJQUFYO0FBQ0EsR0FKRDs7QUFLQSxXQUFTRixTQUFULEdBQXFCO0FBQ3BCLFFBQUksQ0FBQ0osS0FBSyxDQUFDdkQsUUFBTixDQUFlLFNBQWYsQ0FBTCxFQUFnQztBQUMvQnVELFdBQUssQ0FBQ1QsTUFBTixDQUFhWSxRQUFiLEVBQXVCM0QsUUFBdkIsQ0FBZ0MsU0FBaEM7QUFDQSxLQUZELE1BRU87QUFDTndELFdBQUssQ0FBQ1IsT0FBTixDQUFjVyxRQUFkLEVBQXdCLFlBQVk7QUFDbkNyRSxTQUFDLENBQUMsSUFBRCxDQUFELENBQVFzQyxXQUFSLENBQW9CLFNBQXBCO0FBQ0EsT0FGRDtBQUdBOztBQUVEeUIsWUFBUSxDQUFDVSxXQUFULENBQXFCLFdBQXJCO0FBQ0FULFlBQVEsQ0FBQ1MsV0FBVCxDQUFxQixXQUFyQjtBQUNBUixZQUFRLENBQUNRLFdBQVQsQ0FBcUIsV0FBckI7QUFDQTtBQUNELENBeENBLENBQUQsQyxDQXlDQTtBQUNBO0FBQ0E7O0FBQ0F6RSxDQUFDLENBQUMsWUFBWTtBQUNiQSxHQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QjRELEtBQTdCLENBQW1DLFlBQVk7QUFDOUMsUUFBSWMsSUFBSSxHQUFHMUUsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0IsSUFBUixDQUFhLE1BQWIsQ0FBWDtBQUNBLFFBQUkyRCxNQUFNLEdBQUczRSxDQUFDLENBQUMwRSxJQUFJLElBQUksR0FBUixJQUFlQSxJQUFJLEtBQUssRUFBeEIsR0FBNkIsTUFBN0IsR0FBc0NBLElBQXZDLENBQWQ7QUFDQSxRQUFJRSxRQUFRLEdBQUdELE1BQU0sQ0FBQzlCLE1BQVAsR0FBZ0JDLEdBQS9COztBQUNBLFFBQUk0QixJQUFJLEtBQUssVUFBYixFQUF5QjtBQUN4QjFFLE9BQUMsQ0FBQyxXQUFELENBQUQsQ0FBZTZELE9BQWYsQ0FBdUI7QUFBRXhCLGlCQUFTLEVBQUV1QztBQUFiLE9BQXZCLEVBQWdELEdBQWhELEVBQXFELGdCQUFyRDtBQUNBLEtBRkQsTUFFTztBQUNONUUsT0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlNkQsT0FBZixDQUF1QjtBQUFFeEIsaUJBQVMsRUFBRXVDLFFBQVEsR0FBRztBQUF4QixPQUF2QixFQUFxRCxHQUFyRCxFQUEwRCxnQkFBMUQ7QUFDQTs7QUFDRCxXQUFPLEtBQVA7QUFDQSxHQVZEO0FBV0E1RSxHQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQjRELEtBQS9CLENBQXFDLFlBQVk7QUFDaEQsUUFBSWMsSUFBSSxHQUFHMUUsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0IsSUFBUixDQUFhLE1BQWIsQ0FBWDtBQUNBLFFBQUkyRCxNQUFNLEdBQUczRSxDQUFDLENBQUMwRSxJQUFJLElBQUksR0FBUixJQUFlQSxJQUFJLEtBQUssRUFBeEIsR0FBNkIsTUFBN0IsR0FBc0NBLElBQXZDLENBQWQ7QUFDQSxRQUFJRSxRQUFRLEdBQUdELE1BQU0sQ0FBQzlCLE1BQVAsR0FBZ0JDLEdBQS9COztBQUNBLFFBQUk0QixJQUFJLEtBQUssVUFBYixFQUF5QjtBQUN4QjFFLE9BQUMsQ0FBQyxXQUFELENBQUQsQ0FBZTZELE9BQWYsQ0FBdUI7QUFBRXhCLGlCQUFTLEVBQUV1QyxRQUFRLEdBQUc7QUFBeEIsT0FBdkIsRUFBc0QsR0FBdEQsRUFBMkQsZ0JBQTNEO0FBQ0EsS0FGRCxNQUVPO0FBQ041RSxPQUFDLENBQUMsV0FBRCxDQUFELENBQWU2RCxPQUFmLENBQXVCO0FBQUV4QixpQkFBUyxFQUFFdUMsUUFBUSxHQUFHO0FBQXhCLE9BQXZCLEVBQXFELEdBQXJELEVBQTBELGdCQUExRDtBQUNBOztBQUNELFdBQU8sS0FBUDtBQUNBLEdBVkQ7QUFXQSxDQXZCQSxDQUFELEMsQ0F3QkE7QUFFQTs7QUFDQTVFLENBQUMsQ0FBQ2dDLE1BQUQsQ0FBRCxDQUFVQyxFQUFWLENBQWEsTUFBYixFQUFxQixZQUFZO0FBQ2hDLE1BQUk0QyxLQUFLLEdBQUcsQ0FBQyxFQUFiO0FBQ0EsTUFBSUMsR0FBRyxHQUFHOUUsQ0FBQyxDQUFDK0UsUUFBRCxDQUFELENBQVkvRCxJQUFaLENBQWlCLE1BQWpCLENBQVY7O0FBQ0EsTUFBSThELEdBQUcsQ0FBQ0UsT0FBSixDQUFZLE1BQVosS0FBdUIsQ0FBQyxDQUE1QixFQUErQjtBQUM5QixRQUFJQyxNQUFNLEdBQUdILEdBQUcsQ0FBQ0ksS0FBSixDQUFVLE1BQVYsQ0FBYjtBQUNBLFFBQUlQLE1BQU0sR0FBRzNFLENBQUMsQ0FBQyxNQUFNaUYsTUFBTSxDQUFDQSxNQUFNLENBQUN6QyxNQUFQLEdBQWdCLENBQWpCLENBQWIsQ0FBZDs7QUFDQSxRQUFJbUMsTUFBTSxDQUFDbkMsTUFBWCxFQUFtQjtBQUNsQixVQUFJMkMsR0FBRyxHQUFHUixNQUFNLENBQUM5QixNQUFQLEdBQWdCQyxHQUFoQixHQUFzQitCLEtBQWhDOztBQUNBLFVBQUtPLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkwsT0FBcEIsQ0FBNEIsUUFBNUIsSUFBd0MsQ0FBeEMsSUFBNkNJLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkwsT0FBcEIsQ0FBNEIsTUFBNUIsS0FBdUMsQ0FBQyxDQUF0RixJQUE0RkksU0FBUyxDQUFDQyxTQUFWLENBQW9CTCxPQUFwQixDQUE0QixNQUE1QixJQUFzQyxDQUFsSSxJQUF1SUksU0FBUyxDQUFDQyxTQUFWLENBQW9CTCxPQUFwQixDQUE0QixTQUE1QixJQUF5QyxDQUFwTCxFQUF1TDtBQUN0TCxZQUFJTCxNQUFNLENBQUNXLElBQVAsQ0FBWSxJQUFaLEtBQXFCLFNBQXpCLEVBQW9DO0FBQ25DdEYsV0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQnFDLFNBQWhCLENBQTBCOEMsR0FBRyxHQUFHLEdBQWhDO0FBQ0EsU0FGRCxNQUVPO0FBQ05uRixXQUFDLENBQUMsWUFBRCxDQUFELENBQWdCcUMsU0FBaEIsQ0FBMEI4QyxHQUFHLEdBQUcsR0FBaEM7QUFDQTtBQUNELE9BTkQsTUFNTztBQUNOLFlBQUlSLE1BQU0sQ0FBQ1csSUFBUCxDQUFZLElBQVosS0FBcUIsU0FBekIsRUFBb0M7QUFDbkN0RixXQUFDLENBQUMsWUFBRCxDQUFELENBQWdCcUMsU0FBaEIsQ0FBMEI4QyxHQUFHLEdBQUcsRUFBaEM7QUFDQSxTQUZELE1BRU87QUFDTm5GLFdBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JxQyxTQUFoQixDQUEwQjhDLEdBQTFCO0FBQ0E7QUFDRDtBQUNEO0FBQ0Q7QUFDRCxDQXZCRCxFLENBd0JBO0FBRUE7O0FBQ0FuRixDQUFDLENBQUMsWUFBWTtBQUNiQSxHQUFDLENBQUMsWUFBRCxDQUFELENBQWdCaUMsRUFBaEIsQ0FBbUIsT0FBbkIsRUFBNEIsWUFBWTtBQUN2Q3NDLDZFQUFpQixDQUFDLElBQUQsQ0FBakI7O0FBQ0EsUUFBSXZFLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXVGLE9BQVIsQ0FBZ0IsY0FBaEIsRUFBZ0MsQ0FBaEMsQ0FBSixFQUF3QztBQUN2Q3ZGLE9BQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IyRCxJQUFoQjtBQUNBLEtBRkQsTUFFTztBQUNOM0QsT0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQnlELE1BQWhCO0FBQ0E7O0FBQ0QsUUFBSXpELENBQUMsQ0FBQyxVQUFELENBQUwsRUFBbUI7QUFDbEJBLE9BQUMsQ0FBQyxVQUFELENBQUQsQ0FBY3lFLFdBQWQsQ0FBMEIsWUFBMUI7QUFDQTtBQUNELEdBVkQ7QUFXQXpFLEdBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCaUMsRUFBN0IsQ0FBZ0MsT0FBaEMsRUFBeUMsWUFBWTtBQUNwRGpDLEtBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IwRCxPQUFoQixDQUF3QixZQUFZO0FBQ25DYSwrRUFBaUIsQ0FBQyxLQUFELENBQWpCOztBQUNBLFVBQUl2RSxDQUFDLENBQUMsVUFBRCxDQUFMLEVBQW1CO0FBQ2xCQSxTQUFDLENBQUMsVUFBRCxDQUFELENBQWN5RSxXQUFkLENBQTBCLFlBQTFCO0FBQ0E7QUFDRCxLQUxEO0FBTUEsR0FQRDtBQVFBLENBcEJBLENBQUQsQyxDQXFCQTtBQUVBOztBQUNBLElBQUlXLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkcsS0FBcEIsQ0FBMEIsVUFBMUIsS0FBeUNKLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkcsS0FBcEIsQ0FBMEIsY0FBMUIsQ0FBekMsSUFBc0ZKLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkcsS0FBcEIsQ0FBMEIsWUFBMUIsQ0FBMUYsRUFBbUk7QUFDbEl4RixHQUFDLENBQUMsTUFBRCxDQUFELENBQVVpQyxFQUFWLENBQWEsWUFBYixFQUEyQixZQUFZO0FBQ3RDd0QsU0FBSyxDQUFDQyxjQUFOO0FBQ0EsUUFBSUMsRUFBRSxHQUFHRixLQUFLLENBQUNHLFVBQWY7QUFDQSxRQUFJQyxHQUFHLEdBQUc3RCxNQUFNLENBQUM4RCxXQUFqQjtBQUNBOUQsVUFBTSxDQUFDK0QsUUFBUCxDQUFnQixDQUFoQixFQUFtQkYsR0FBRyxHQUFHRixFQUF6QjtBQUNBLEdBTEQ7QUFNQSxDLENBQ0Q7QUFFQTs7O0FBQ0EzRixDQUFDLENBQUMsWUFBWTtBQUNiQSxHQUFDLENBQUNnQyxNQUFELENBQUQsQ0FBVWdFLE9BQVYsQ0FBa0IsUUFBbEI7QUFDQSxDQUZBLENBQUQsQyxDQUdBLCtEOzs7Ozs7Ozs7Ozs7QUM1UUE7QUFBQTtBQUFlLFNBQVN6QixpQkFBVCxDQUEyQjBCLElBQTNCLEVBQWlDO0FBQy9DLE1BQUlDLGNBQUo7QUFDQSxNQUFNbkcsSUFBSSxHQUFHK0IsUUFBUSxDQUFDcUUsb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsQ0FBYjtBQUNBLE1BQU1DLEVBQUUsR0FBR3BFLE1BQU0sQ0FBQ29ELFNBQVAsQ0FBaUJDLFNBQWpCLENBQTJCZ0IsV0FBM0IsRUFBWDtBQUNBLE1BQU1DLEtBQUssR0FBR0YsRUFBRSxDQUFDcEIsT0FBSCxDQUFXLFFBQVgsSUFBdUIsQ0FBQyxDQUF4QixJQUE2Qm9CLEVBQUUsQ0FBQ3BCLE9BQUgsQ0FBVyxNQUFYLElBQXFCLENBQUMsQ0FBbkQsSUFBd0RvQixFQUFFLENBQUNwQixPQUFILENBQVcsV0FBWCxJQUEwQixDQUFDLENBQTNCLElBQWdDLGdCQUFnQmxELFFBQXRIO0FBQ0EsTUFBTXlFLGNBQWMsR0FBR3ZFLE1BQU0sQ0FBQ3dFLFVBQVAsR0FBb0IxRSxRQUFRLENBQUMvQixJQUFULENBQWMwRyxXQUF6RDs7QUFDQSxNQUFJUixJQUFKLEVBQVU7QUFDVGxHLFFBQUksQ0FBQzJHLEtBQUwsQ0FBV0MsWUFBWCxHQUEwQkosY0FBYyxHQUFHLElBQTNDOztBQUNBLFFBQUlELEtBQUosRUFBVztBQUNWSixvQkFBYyxHQUFHLENBQUNsRSxNQUFNLENBQUM4RCxXQUF6QjtBQUNBL0YsVUFBSSxDQUFDMkcsS0FBTCxDQUFXOUIsUUFBWCxHQUFzQixPQUF0QjtBQUNBN0UsVUFBSSxDQUFDMkcsS0FBTCxDQUFXRSxLQUFYLEdBQW1CLE1BQW5CO0FBQ0E3RyxVQUFJLENBQUMyRyxLQUFMLENBQVc1RCxHQUFYLEdBQWlCb0QsY0FBYyxHQUFHLElBQWxDO0FBQ0EsS0FMRCxNQUtPO0FBQ05uRyxVQUFJLENBQUMyRyxLQUFMLENBQVdHLFFBQVgsR0FBc0IsUUFBdEI7QUFDQTtBQUNELEdBVkQsTUFVTyxJQUFJLENBQUNaLElBQUwsRUFBVztBQUNqQmxHLFFBQUksQ0FBQzJHLEtBQUwsQ0FBV0MsWUFBWCxHQUEwQixFQUExQjs7QUFDQSxRQUFJTCxLQUFKLEVBQVc7QUFDVkosb0JBQWMsR0FBR1ksUUFBUSxDQUFDL0csSUFBSSxDQUFDMkcsS0FBTCxDQUFXNUQsR0FBWCxDQUFlaUUsT0FBZixDQUF1QixTQUF2QixFQUFrQyxFQUFsQyxDQUFELENBQXpCO0FBQ0FoSCxVQUFJLENBQUMyRyxLQUFMLENBQVc5QixRQUFYLEdBQXNCLEVBQXRCO0FBQ0E3RSxVQUFJLENBQUMyRyxLQUFMLENBQVdFLEtBQVgsR0FBbUIsRUFBbkI7QUFDQTdHLFVBQUksQ0FBQzJHLEtBQUwsQ0FBVzVELEdBQVgsR0FBaUIsRUFBakI7QUFDQWQsWUFBTSxDQUFDK0QsUUFBUCxDQUFnQixDQUFoQixFQUFtQkcsY0FBbkI7QUFDQSxLQU5ELE1BTU87QUFDTm5HLFVBQUksQ0FBQzJHLEtBQUwsQ0FBV0csUUFBWCxHQUFzQixFQUF0QjtBQUNBO0FBQ0Q7QUFDRCxDOzs7Ozs7Ozs7Ozs7O0FDNUJEO0FBQ0E7O0FBQ0E7Ozs7Ozs7QUFRQyxXQUFVN0csQ0FBVixFQUFhO0FBQ2I7O0FBRUEsV0FBU2dILFVBQVQsQ0FBb0IzRCxNQUFwQixFQUE0QjtBQUMzQixXQUFPLEtBQUs0RCxJQUFMLENBQVU1RCxNQUFWLEtBQXFCckQsQ0FBQyxDQUFDa0gsT0FBRixDQUFVN0QsTUFBVixFQUFrQnJELENBQUMsQ0FBQ21ILEVBQUYsQ0FBS2hFLFVBQUwsQ0FBZ0JpRSxRQUFoQixDQUF5QkMsU0FBM0MsS0FBeUQsQ0FBckY7QUFDQTs7QUFFRCxXQUFTQyxXQUFULENBQXFCakUsTUFBckIsRUFBNkI7QUFDNUIsV0FBTyxNQUFNNEQsSUFBTixDQUFXNUQsTUFBWCxLQUFzQnJELENBQUMsQ0FBQ2tILE9BQUYsQ0FBVTdELE1BQVYsRUFBa0JyRCxDQUFDLENBQUNtSCxFQUFGLENBQUtoRSxVQUFMLENBQWdCaUUsUUFBaEIsQ0FBeUJHLFVBQTNDLEtBQTBELENBQXZGO0FBQ0E7O0FBR0QsV0FBU0MsZUFBVCxDQUF5QkMsR0FBekIsRUFBOEI7QUFDN0IsUUFBSUEsR0FBRyxLQUFLLE1BQVIsSUFBa0JBLEdBQUcsS0FBSyxPQUE5QixFQUF1QyxPQUFPQSxHQUFQO0FBQ3ZDLFdBQVFBLEdBQUcsS0FBSyxNQUFoQjtBQUNBLEdBZlksQ0FpQmI7OztBQUNBLFdBQVNDLE9BQVQsQ0FBaUJDLElBQWpCLEVBQXVCO0FBQ3RCLFFBQUlDLEtBQUssR0FBR0QsSUFBSSxDQUFDRSxVQUFMLElBQW1CLEVBQS9CO0FBQUEsUUFDR0MsSUFBSSxHQUFHLEVBRFY7QUFHQSxRQUFJLENBQUNGLEtBQUssQ0FBQ3BGLE1BQVgsRUFBbUIsT0FBT3NGLElBQVA7QUFFbkI5SCxLQUFDLENBQUMwQyxJQUFGLENBQU9rRixLQUFQLEVBQWMsVUFBVWpGLENBQVYsRUFBYTNCLElBQWIsRUFBbUI7QUFDaEMsVUFBSStHLFFBQVEsR0FBRy9HLElBQUksQ0FBQytHLFFBQUwsQ0FBY2hCLE9BQWQsQ0FBc0IsWUFBdEIsRUFBb0MsWUFBcEMsQ0FBZjs7QUFDQSxVQUFJLGFBQWFFLElBQWIsQ0FBa0JjLFFBQWxCLENBQUosRUFBaUM7QUFDaENELFlBQUksQ0FBQzFFLEVBQUwsR0FBVTBFLElBQUksQ0FBQzFFLEVBQUwsSUFBVyxFQUFyQjtBQUNBMEUsWUFBSSxDQUFDMUUsRUFBTCxDQUFRMkUsUUFBUSxDQUFDaEIsT0FBVCxDQUFpQixVQUFqQixFQUE2QixFQUE3QixDQUFSLElBQTRDUyxlQUFlLENBQUN4RyxJQUFJLENBQUNnSCxTQUFOLENBQTNEO0FBQ0EsT0FIRCxNQUdPLElBQUksY0FBY2YsSUFBZCxDQUFtQmMsUUFBbkIsQ0FBSixFQUFrQztBQUN4Q0QsWUFBSSxDQUFDRyxHQUFMLEdBQVdILElBQUksQ0FBQ0csR0FBTCxJQUFZLEVBQXZCO0FBQ0FILFlBQUksQ0FBQ0csR0FBTCxDQUFTRixRQUFRLENBQUNoQixPQUFULENBQWlCLFdBQWpCLEVBQThCLEVBQTlCLENBQVQsSUFBOENTLGVBQWUsQ0FBQ3hHLElBQUksQ0FBQ2dILFNBQU4sQ0FBN0Q7QUFDQSxPQUhNLE1BR0EsSUFBSSxVQUFVZixJQUFWLENBQWVjLFFBQWYsQ0FBSixFQUE4QjtBQUNwQ0QsWUFBSSxDQUFDQyxRQUFRLENBQUNoQixPQUFULENBQWlCLE9BQWpCLEVBQTBCLEVBQTFCLENBQUQsQ0FBSixHQUFzQ1MsZUFBZSxDQUFDeEcsSUFBSSxDQUFDZ0gsU0FBTixDQUFyRDtBQUNBO0FBQ0QsS0FYRDtBQWFBLFdBQU9GLElBQVA7QUFDQTs7QUFFRCxXQUFTeEUsT0FBVCxDQUFpQjRFLENBQWpCLEVBQW9CO0FBQ25CLFNBQUssSUFBSXpGLENBQUosRUFBTzBGLENBQVAsRUFBVXhGLENBQUMsR0FBR3VGLENBQUMsQ0FBQzFGLE1BQXJCLEVBQTZCRyxDQUE3QixFQUFnQ0YsQ0FBQyxHQUFHcUUsUUFBUSxDQUFDc0IsSUFBSSxDQUFDQyxNQUFMLEtBQWdCMUYsQ0FBakIsQ0FBWixFQUFpQ3dGLENBQUMsR0FBR0QsQ0FBQyxDQUFDLEVBQUV2RixDQUFILENBQXRDLEVBQTZDdUYsQ0FBQyxDQUFDdkYsQ0FBRCxDQUFELEdBQU91RixDQUFDLENBQUN6RixDQUFELENBQXJELEVBQTBEeUYsQ0FBQyxDQUFDekYsQ0FBRCxDQUFELEdBQU8wRixDQUFqRztBQUFtRztBQUFuRzs7QUFDQSxXQUFPRCxDQUFQO0FBQ0E7O0FBRUQsV0FBU3JFLE9BQVQsQ0FBaUJ5RSxFQUFqQixFQUFxQmpGLE1BQXJCLEVBQTZCa0YsRUFBN0IsRUFBaUM7QUFDaENELE1BQUUsQ0FBQzVILFFBQUgsQ0FBWSxjQUFjMkMsTUFBMUIsRUFDRXhDLEdBREYsQ0FDTSxZQUROLEVBQ29CLFNBRHBCLEVBRUU4QyxJQUZGO0FBSUEyRSxNQUFFLENBQUNFLEdBQUgsQ0FBTyw4RUFBUCxFQUF1RixZQUFZO0FBQ2xHRixRQUFFLENBQUNoRyxXQUFILENBQWUsY0FBY2UsTUFBN0I7QUFDQWtGLFFBQUUsSUFBSUEsRUFBRSxFQUFSO0FBQ0EsS0FIRDtBQUlBOztBQUVELFdBQVNFLGFBQVQsQ0FBdUJDLE9BQXZCLEVBQWdDQyxPQUFoQyxFQUF5Q0osRUFBekMsRUFBNkM7QUFDNUMsUUFBSUssSUFBSSxHQUFHLElBQVg7QUFBQSxRQUNHQyxLQUFLLEdBQUdILE9BQU8sQ0FBQ2xHLE1BRG5COztBQUdBLFFBQUksQ0FBQ3FHLEtBQUwsRUFBWTtBQUNYTixRQUFFLElBQUlBLEVBQUUsRUFBUjtBQUNBO0FBQ0E7O0FBRUQsUUFBSUksT0FBTyxDQUFDckYsT0FBWixFQUFxQm9GLE9BQU8sR0FBR3BGLE9BQU8sQ0FBQ29GLE9BQUQsQ0FBakI7QUFDckIsUUFBSUMsT0FBTyxDQUFDRyxPQUFaLEVBQXFCSixPQUFPLEdBQUdBLE9BQU8sQ0FBQ0ssT0FBUixHQUFrQkQsT0FBbEIsRUFBVjtBQUVyQjlJLEtBQUMsQ0FBQzBDLElBQUYsQ0FBT2dHLE9BQVAsRUFBZ0IsVUFBVS9GLENBQVYsRUFBYXFHLENBQWIsRUFBZ0I7QUFDL0IsVUFBSUMsTUFBTSxHQUFHakosQ0FBQyxDQUFDZ0osQ0FBRCxDQUFkOztBQUVBLGVBQVNFLFFBQVQsR0FBb0I7QUFDbkIsWUFBSWxDLFVBQVUsQ0FBQzJCLE9BQU8sQ0FBQ3RGLE1BQVQsQ0FBZCxFQUFnQztBQUMvQjRGLGdCQUFNLENBQUNwSSxHQUFQLENBQVcsWUFBWCxFQUF5QixTQUF6QjtBQUNBLFNBRkQsTUFFTyxJQUFJeUcsV0FBVyxDQUFDcUIsT0FBTyxDQUFDdEYsTUFBVCxDQUFmLEVBQWlDO0FBQ3ZDNEYsZ0JBQU0sQ0FBQ3BJLEdBQVAsQ0FBVyxZQUFYLEVBQXlCLFFBQXpCO0FBQ0E7O0FBQ0RnSSxhQUFLLElBQUksQ0FBVDtBQUNBLFlBQUksQ0FBQ0EsS0FBRCxJQUFVTixFQUFkLEVBQWtCQSxFQUFFO0FBQ3BCOztBQUVELFVBQUl2RixLQUFLLEdBQUcyRixPQUFPLENBQUNRLElBQVIsR0FBZVIsT0FBTyxDQUFDM0YsS0FBdkIsR0FBK0IyRixPQUFPLENBQUMzRixLQUFSLEdBQWdCTCxDQUFoQixHQUFvQmdHLE9BQU8sQ0FBQ3BGLFVBQXZFO0FBRUEwRixZQUFNLENBQUNHLElBQVAsS0FDQ3hJLFVBQVUsQ0FBQyxZQUFZO0FBQUVpRCxlQUFPLENBQUNvRixNQUFELEVBQVNOLE9BQU8sQ0FBQ3RGLE1BQWpCLEVBQXlCNkYsUUFBekIsQ0FBUDtBQUE0QyxPQUEzRCxFQUE2RGxHLEtBQTdELENBRFgsR0FFQ2tHLFFBQVEsRUFGVDtBQUdBLEtBbEJEO0FBbUJBOztBQUVELE1BQUlHLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQVVDLE9BQVYsRUFBbUJYLE9BQW5CLEVBQTRCO0FBQzVDLFFBQUlZLElBQUksR0FBRyxJQUFYO0FBQUEsUUFDR0MsUUFBUSxHQUFHeEosQ0FBQyxDQUFDc0osT0FBRCxDQURmOztBQUdBQyxRQUFJLENBQUNFLElBQUwsR0FBWSxZQUFZO0FBQ3ZCRixVQUFJLENBQUNHLE1BQUwsR0FBY0YsUUFBUSxDQUFDRyxJQUFULENBQWNoQixPQUFPLENBQUNpQixRQUF0QixDQUFkOztBQUVBLFVBQUksQ0FBQ0wsSUFBSSxDQUFDRyxNQUFMLENBQVlsSCxNQUFqQixFQUF5QjtBQUN4QitHLFlBQUksQ0FBQ0csTUFBTCxHQUFjMUosQ0FBQyxDQUFDLDJCQUEyQndKLFFBQVEsQ0FBQ0ssSUFBVCxFQUEzQixHQUE2QyxZQUE5QyxDQUFmO0FBQ0FMLGdCQUFRLENBQUNLLElBQVQsQ0FBY04sSUFBSSxDQUFDRyxNQUFuQjtBQUNBOztBQUVESCxVQUFJLENBQUNHLE1BQUwsQ0FBWWxGLElBQVo7QUFFQStFLFVBQUksQ0FBQ08sUUFBTCxHQUFnQjlKLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FDZDZKLElBRGMsQ0FDVE4sSUFBSSxDQUFDRyxNQUFMLENBQVlDLElBQVosQ0FBaUIsY0FBakIsRUFBaUNFLElBQWpDLEVBRFMsRUFFZEUsU0FGYyxDQUVKUCxRQUZJLENBQWhCOztBQUlBLFVBQUl4QyxVQUFVLENBQUMyQixPQUFPLENBQUN2RixFQUFSLENBQVdDLE1BQVosQ0FBZCxFQUFtQztBQUNsQ2tHLFlBQUksQ0FBQ08sUUFBTCxDQUFjakosR0FBZCxDQUFrQixZQUFsQixFQUFnQyxRQUFoQztBQUNBLE9BRkQsTUFFTyxJQUFJeUcsV0FBVyxDQUFDcUIsT0FBTyxDQUFDVixHQUFSLENBQVk1RSxNQUFiLENBQWYsRUFBcUM7QUFDM0NrRyxZQUFJLENBQUNPLFFBQUwsQ0FBY2pKLEdBQWQsQ0FBa0IsWUFBbEIsRUFBZ0MsU0FBaEM7QUFDQTs7QUFFRDBJLFVBQUksQ0FBQ1MsVUFBTCxDQUFnQnJCLE9BQWhCO0FBRUFZLFVBQUksQ0FBQ1UsVUFBTCxHQUFrQixJQUFsQjtBQUVBckosZ0JBQVUsQ0FBQyxZQUFZO0FBQ3RCMkksWUFBSSxDQUFDWixPQUFMLENBQWF1QixTQUFiLElBQTBCWCxJQUFJLENBQUNZLEtBQUwsRUFBMUI7QUFDQSxPQUZTLEVBRVBaLElBQUksQ0FBQ1osT0FBTCxDQUFheUIsWUFGTixDQUFWO0FBR0EsS0EzQkQ7O0FBNkJBYixRQUFJLENBQUNTLFVBQUwsR0FBa0IsVUFBVXJCLE9BQVYsRUFBbUI7QUFDcENZLFVBQUksQ0FBQ1osT0FBTCxHQUFlQSxPQUFmO0FBQ0EsS0FGRDs7QUFJQVksUUFBSSxDQUFDYyxZQUFMLEdBQW9CLFVBQVVDLElBQVYsRUFBZ0I7QUFDbkMsVUFBSUMsQ0FBQyxHQUFHdkssQ0FBQyxDQUFDd0ssS0FBRixDQUFRRixJQUFJLEdBQUcsTUFBZixDQUFSO0FBQ0FkLGNBQVEsQ0FBQ3hELE9BQVQsQ0FBaUJ1RSxDQUFqQixFQUFvQmhCLElBQXBCO0FBQ0EsYUFBT2dCLENBQVA7QUFDQSxLQUpEOztBQU1BaEIsUUFBSSxDQUFDbkcsRUFBTCxHQUFVLFVBQVVxSCxLQUFWLEVBQWlCbEMsRUFBakIsRUFBcUI7QUFDOUJrQyxXQUFLLEdBQUdBLEtBQUssSUFBSSxDQUFqQjtBQUVBLFVBQUlDLEtBQUssR0FBR25CLElBQUksQ0FBQ0csTUFBTCxDQUFZQyxJQUFaLENBQWlCLGlCQUFpQixDQUFDYyxLQUFLLElBQUksQ0FBVixJQUFlLENBQWhDLElBQXFDLEdBQXRELENBQVo7QUFBQSxVQUNHOUIsT0FBTyxHQUFHM0ksQ0FBQyxDQUFDMkssTUFBRixDQUFTLElBQVQsRUFBZSxFQUFmLEVBQW1CcEIsSUFBSSxDQUFDWixPQUF4QixFQUFpQytCLEtBQUssQ0FBQ2xJLE1BQU4sR0FBZWtGLE9BQU8sQ0FBQ2dELEtBQUssQ0FBQyxDQUFELENBQU4sQ0FBdEIsR0FBbUMsRUFBcEUsQ0FEYjtBQUFBLFVBRUdoQyxPQUZIO0FBSUFnQyxXQUFLLENBQUNoSyxRQUFOLENBQWUsU0FBZjtBQUVBNkksVUFBSSxDQUFDYyxZQUFMLENBQWtCLGtCQUFsQjtBQUNBYixjQUFRLENBQUN4SSxJQUFULENBQWMsYUFBZCxFQUE2QjBKLEtBQUssQ0FBQzVDLElBQU4sQ0FBVyxJQUFYLENBQTdCO0FBRUF5QixVQUFJLENBQUNPLFFBQUwsQ0FDRUQsSUFERixDQUNPYSxLQUFLLENBQUNiLElBQU4sRUFEUCxFQUVFZSxTQUZGLENBRVksT0FGWixFQVo4QixDQWdCOUI7O0FBQ0EsVUFBSXJCLElBQUksQ0FBQ1osT0FBTCxDQUFha0MsSUFBYixJQUFxQixNQUF6QixFQUFpQztBQUNoQ3RCLFlBQUksQ0FBQ08sUUFBTCxDQUFjSCxJQUFkLENBQW1CLGlCQUFuQixFQUNFOUksR0FERixDQUNNO0FBQ0oscUJBQVcsY0FEUDtBQUVKO0FBQ0EsK0JBQXFCLG9CQUhqQjtBQUlKLDRCQUFrQixvQkFKZDtBQUtKLDBCQUFnQixvQkFMWjtBQU1KLHVCQUFhO0FBTlQsU0FETixFQVNFNkIsSUFURixDQVNPLFlBQVk7QUFBRTFDLFdBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRLLFNBQVI7QUFBc0IsU0FUM0M7QUFVQTs7QUFFRGxDLGFBQU8sR0FBR2EsSUFBSSxDQUFDTyxRQUFMLENBQ1JILElBRFEsQ0FDSCxjQUFjSixJQUFJLENBQUNaLE9BQUwsQ0FBYWtDLElBQTNCLEdBQWtDLElBRC9CLEVBRVJoSyxHQUZRLENBRUosU0FGSSxFQUVPLGNBRlAsQ0FBVjs7QUFJQSxVQUFJbUcsVUFBVSxDQUFDMkIsT0FBTyxDQUFDdkYsRUFBUixDQUFXQyxNQUFaLENBQWQsRUFBbUM7QUFDbENxRixlQUFPLENBQUM3SCxHQUFSLENBQVksWUFBWixFQUEwQixRQUExQjtBQUNBLE9BRkQsTUFFTyxJQUFJeUcsV0FBVyxDQUFDcUIsT0FBTyxDQUFDdkYsRUFBUixDQUFXQyxNQUFaLENBQWYsRUFBb0M7QUFDMUNxRixlQUFPLENBQUM3SCxHQUFSLENBQVksWUFBWixFQUEwQixTQUExQjtBQUNBOztBQUVEMEksVUFBSSxDQUFDdUIsWUFBTCxHQUFvQkwsS0FBcEI7QUFFQWhDLG1CQUFhLENBQUNDLE9BQUQsRUFBVUMsT0FBTyxDQUFDdkYsRUFBbEIsRUFBc0IsWUFBWTtBQUM5Q21HLFlBQUksQ0FBQ2MsWUFBTCxDQUFrQixnQkFBbEI7QUFDQSxZQUFJMUIsT0FBTyxDQUFDdkYsRUFBUixDQUFXM0MsUUFBZixFQUF5QmtJLE9BQU8sQ0FBQ3ZGLEVBQVIsQ0FBVzNDLFFBQVg7QUFDekIsWUFBSThILEVBQUosRUFBUUEsRUFBRSxDQUFDZ0IsSUFBRCxDQUFGO0FBQ1IsT0FKWSxDQUFiO0FBS0EsS0EvQ0Q7O0FBaURBQSxRQUFJLENBQUN0QixHQUFMLEdBQVcsVUFBVU0sRUFBVixFQUFjO0FBQ3hCLFVBQUltQyxLQUFLLEdBQUduQixJQUFJLENBQUNHLE1BQUwsQ0FBWUMsSUFBWixDQUFpQixpQkFBaUIsQ0FBQ0osSUFBSSxDQUFDdUIsWUFBTCxJQUFxQixDQUF0QixJQUEyQixDQUE1QyxJQUFpRCxHQUFsRSxDQUFaO0FBQUEsVUFDR3BDLE9BQU8sR0FBR2EsSUFBSSxDQUFDTyxRQUFMLENBQWNILElBQWQsQ0FBbUIsY0FBY0osSUFBSSxDQUFDWixPQUFMLENBQWFrQyxJQUEzQixHQUFrQyxJQUFyRCxDQURiO0FBQUEsVUFFR2xDLE9BQU8sR0FBRzNJLENBQUMsQ0FBQzJLLE1BQUYsQ0FBUyxJQUFULEVBQWUsRUFBZixFQUFtQnBCLElBQUksQ0FBQ1osT0FBeEIsRUFBaUMrQixLQUFLLENBQUNsSSxNQUFOLEdBQWVrRixPQUFPLENBQUNnRCxLQUFLLENBQUMsQ0FBRCxDQUFOLENBQXRCLEdBQW1DLEVBQXBFLENBRmI7QUFJQW5CLFVBQUksQ0FBQ2MsWUFBTCxDQUFrQixtQkFBbEI7QUFFQTVCLG1CQUFhLENBQUNDLE9BQUQsRUFBVUMsT0FBTyxDQUFDVixHQUFsQixFQUF1QixZQUFZO0FBQy9DeUMsYUFBSyxDQUFDcEksV0FBTixDQUFrQixTQUFsQjtBQUNBaUgsWUFBSSxDQUFDYyxZQUFMLENBQWtCLGlCQUFsQjtBQUNBYixnQkFBUSxDQUFDdUIsVUFBVCxDQUFvQixhQUFwQjtBQUNBLFlBQUlwQyxPQUFPLENBQUNWLEdBQVIsQ0FBWXhILFFBQWhCLEVBQTBCa0ksT0FBTyxDQUFDVixHQUFSLENBQVl4SCxRQUFaO0FBQzFCLFlBQUk4SCxFQUFKLEVBQVFBLEVBQUUsQ0FBQ2dCLElBQUQsQ0FBRjtBQUNSLE9BTlksQ0FBYjtBQU9BLEtBZEQ7O0FBZ0JBQSxRQUFJLENBQUNZLEtBQUwsR0FBYSxVQUFVTSxLQUFWLEVBQWlCO0FBQzdCN0osZ0JBQVUsQ0FBQyxZQUFZO0FBQ3RCMkksWUFBSSxDQUFDYyxZQUFMLENBQWtCLE9BQWxCOztBQUVDLGtCQUFTVyxHQUFULENBQWFQLEtBQWIsRUFBb0I7QUFDcEJsQixjQUFJLENBQUNuRyxFQUFMLENBQVFxSCxLQUFSLEVBQWUsWUFBWTtBQUMxQixnQkFBSWpJLE1BQU0sR0FBRytHLElBQUksQ0FBQ0csTUFBTCxDQUFZdUIsUUFBWixHQUF1QnpJLE1BQXBDO0FBRUFpSSxpQkFBSyxJQUFJLENBQVQ7O0FBRUEsZ0JBQUksQ0FBQ2xCLElBQUksQ0FBQ1osT0FBTCxDQUFhdUMsSUFBZCxJQUFzQlQsS0FBSyxJQUFJakksTUFBbkMsRUFBMkM7QUFDMUMsa0JBQUkrRyxJQUFJLENBQUNaLE9BQUwsQ0FBYWxJLFFBQWpCLEVBQTJCOEksSUFBSSxDQUFDWixPQUFMLENBQWFsSSxRQUFiO0FBQzNCOEksa0JBQUksQ0FBQ2MsWUFBTCxDQUFrQixLQUFsQjtBQUNBLGFBSEQsTUFHTztBQUNOSSxtQkFBSyxHQUFHQSxLQUFLLEdBQUdqSSxNQUFoQjtBQUVBK0csa0JBQUksQ0FBQ1UsVUFBTCxHQUFrQnJKLFVBQVUsQ0FBQyxZQUFZO0FBQ3hDMkksb0JBQUksQ0FBQ3RCLEdBQUwsQ0FBUyxZQUFZO0FBQ3BCK0MscUJBQUcsQ0FBQ1AsS0FBRCxDQUFIO0FBQ0EsaUJBRkQ7QUFHQSxlQUoyQixFQUl6QmxCLElBQUksQ0FBQ1osT0FBTCxDQUFhd0MsY0FKWSxDQUE1QjtBQUtBO0FBQ0QsV0FqQkQ7QUFrQkEsU0FuQkEsRUFtQkNWLEtBQUssSUFBSSxDQW5CVixDQUFEO0FBb0JBLE9BdkJTLEVBdUJQbEIsSUFBSSxDQUFDWixPQUFMLENBQWF5QixZQXZCTixDQUFWO0FBd0JBLEtBekJEOztBQTJCQWIsUUFBSSxDQUFDNkIsSUFBTCxHQUFZLFlBQVk7QUFDdkIsVUFBSTdCLElBQUksQ0FBQ1UsVUFBVCxFQUFxQjtBQUNwQm9CLHFCQUFhLENBQUM5QixJQUFJLENBQUNVLFVBQU4sQ0FBYjtBQUNBVixZQUFJLENBQUNVLFVBQUwsR0FBa0IsSUFBbEI7QUFDQTtBQUNELEtBTEQ7O0FBT0FWLFFBQUksQ0FBQ0UsSUFBTDtBQUNBLEdBL0lEOztBQWlKQXpKLEdBQUMsQ0FBQ21ILEVBQUYsQ0FBS2hFLFVBQUwsR0FBa0IsVUFBVW1JLFFBQVYsRUFBb0JDLElBQXBCLEVBQTBCO0FBQzNDLFdBQU8sS0FBSzdJLElBQUwsQ0FBVSxZQUFZO0FBQzVCLFVBQUk4SSxLQUFLLEdBQUd4TCxDQUFDLENBQUMsSUFBRCxDQUFiO0FBQUEsVUFDRzhILElBQUksR0FBRzBELEtBQUssQ0FBQzFELElBQU4sQ0FBVyxZQUFYLENBRFY7QUFBQSxVQUVHYSxPQUFPLEdBQUczSSxDQUFDLENBQUMySyxNQUFGLENBQVMsSUFBVCxFQUFlLEVBQWYsRUFBbUIzSyxDQUFDLENBQUNtSCxFQUFGLENBQUtoRSxVQUFMLENBQWdCaUUsUUFBbkMsRUFBNkNNLE9BQU8sQ0FBQyxJQUFELENBQXBELEVBQTRELFFBQU80RCxRQUFQLEtBQW1CLFFBQW5CLElBQStCQSxRQUEzRixDQUZiOztBQUlBLFVBQUksQ0FBQ3hELElBQUwsRUFBVztBQUNWMEQsYUFBSyxDQUFDMUQsSUFBTixDQUFXLFlBQVgsRUFBMEJBLElBQUksR0FBRyxJQUFJdUIsVUFBSixDQUFlLElBQWYsRUFBcUJWLE9BQXJCLENBQWpDO0FBQ0EsT0FGRCxNQUVPLElBQUksT0FBTzJDLFFBQVAsSUFBbUIsUUFBdkIsRUFBaUM7QUFDdkN4RCxZQUFJLENBQUN3RCxRQUFELENBQUosQ0FBZUcsS0FBZixDQUFxQjNELElBQXJCLEVBQTJCLEdBQUc0RCxNQUFILENBQVVILElBQVYsQ0FBM0I7QUFDQSxPQUZNLE1BRUE7QUFDTnpELFlBQUksQ0FBQ2tDLFVBQUwsQ0FBZ0IyQixJQUFoQixDQUFxQjdELElBQXJCLEVBQTJCYSxPQUEzQjtBQUNBO0FBQ0QsS0FaTSxDQUFQO0FBYUEsR0FkRDs7QUFnQkEzSSxHQUFDLENBQUNtSCxFQUFGLENBQUtoRSxVQUFMLENBQWdCaUUsUUFBaEIsR0FBMkI7QUFDMUJ3QyxZQUFRLEVBQUUsUUFEZ0I7QUFFMUJzQixRQUFJLEVBQUUsS0FGb0I7QUFHMUJDLGtCQUFjLEVBQUUsSUFIVTtBQUkxQmYsZ0JBQVksRUFBRSxDQUpZO0FBSzFCaEgsTUFBRSxFQUFFO0FBQ0hDLFlBQU0sRUFBRSxlQURMO0FBRUhFLGdCQUFVLEVBQUUsR0FGVDtBQUdIUCxXQUFLLEVBQUUsRUFISjtBQUlIbUcsVUFBSSxFQUFFLEtBSkg7QUFLSEwsYUFBTyxFQUFFLEtBTE47QUFNSHhGLGFBQU8sRUFBRSxLQU5OO0FBT0g3QyxjQUFRLEVBQUUsb0JBQVksQ0FBRztBQVB0QixLQUxzQjtBQWMxQndILE9BQUcsRUFBRTtBQUNKNUUsWUFBTSxFQUFFLE9BREo7QUFFSkUsZ0JBQVUsRUFBRSxHQUZSO0FBR0pQLFdBQUssRUFBRSxFQUhIO0FBSUptRyxVQUFJLEVBQUUsS0FKRjtBQUtKTCxhQUFPLEVBQUUsS0FMTDtBQU1KeEYsYUFBTyxFQUFFLEtBTkw7QUFPSjdDLGNBQVEsRUFBRSxvQkFBWSxDQUFHO0FBUHJCLEtBZHFCO0FBdUIxQnlKLGFBQVMsRUFBRSxJQXZCZTtBQXdCMUI3QyxhQUFTLEVBQUUsRUF4QmU7QUF5QjFCRSxjQUFVLEVBQUUsQ0FBQyxPQUFELENBekJjO0FBMEIxQjlHLFlBQVEsRUFBRSxvQkFBWSxDQUFHLENBMUJDO0FBMkIxQm9LLFFBQUksRUFBRTtBQTNCb0IsR0FBM0I7QUE4QkEsQ0F4UkEsRUF3UkNlLE1BeFJELENBQUQsQyxDQTBSQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7OztBQVdBLENBQUMsVUFBVTVMLENBQVYsRUFBYTtBQUNiLFdBQVM2TCxRQUFULENBQWtCN0MsQ0FBbEIsRUFBcUI4QyxRQUFyQixFQUErQkMsS0FBL0IsRUFBc0NDLEtBQXRDLEVBQTZDO0FBQzVDLFFBQUlDLENBQUMsR0FBR2pELENBQUMsQ0FBQ0ksSUFBRixHQUFTbEUsS0FBVCxDQUFlNEcsUUFBZixDQUFSO0FBQUEsUUFBa0NJLE1BQU0sR0FBRyxFQUEzQzs7QUFDQSxRQUFJRCxDQUFDLENBQUN6SixNQUFOLEVBQWM7QUFDYnhDLE9BQUMsQ0FBQ2lNLENBQUQsQ0FBRCxDQUFLdkosSUFBTCxDQUFVLFVBQVVDLENBQVYsRUFBYXdKLElBQWIsRUFBbUI7QUFDNUJELGNBQU0sSUFBSSxrQkFBa0JILEtBQWxCLElBQTJCcEosQ0FBQyxHQUFHLENBQS9CLElBQW9DLElBQXBDLEdBQTJDd0osSUFBM0MsR0FBa0QsU0FBbEQsR0FBOERILEtBQXhFO0FBQ0EsT0FGRDtBQUdBaEQsT0FBQyxDQUFDb0QsS0FBRixHQUFVQyxNQUFWLENBQWlCSCxNQUFqQjtBQUNBO0FBQ0Q7O0FBRUQsTUFBSUksT0FBTyxHQUFHO0FBQ2I3QyxRQUFJLEVBQUUsZ0JBQVk7QUFFakIsYUFBTyxLQUFLL0csSUFBTCxDQUFVLFlBQVk7QUFDNUJtSixnQkFBUSxDQUFDN0wsQ0FBQyxDQUFDLElBQUQsQ0FBRixFQUFVLEVBQVYsRUFBYyxNQUFkLEVBQXNCLEVBQXRCLENBQVI7QUFDQSxPQUZNLENBQVA7QUFJQSxLQVBZO0FBU2J1TSxTQUFLLEVBQUUsaUJBQVk7QUFFbEIsYUFBTyxLQUFLN0osSUFBTCxDQUFVLFlBQVk7QUFDNUJtSixnQkFBUSxDQUFDN0wsQ0FBQyxDQUFDLElBQUQsQ0FBRixFQUFVLEdBQVYsRUFBZSxNQUFmLEVBQXVCLEdBQXZCLENBQVI7QUFDQSxPQUZNLENBQVA7QUFJQSxLQWZZO0FBaUJid00sU0FBSyxFQUFFLGlCQUFZO0FBRWxCLGFBQU8sS0FBSzlKLElBQUwsQ0FBVSxZQUFZO0FBQzVCLFlBQUkrSixDQUFDLEdBQUcsa0NBQVIsQ0FENEIsQ0FFNUI7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FaLGdCQUFRLENBQUM3TCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFpTCxRQUFSLENBQWlCLElBQWpCLEVBQXVCeUIsV0FBdkIsQ0FBbUNELENBQW5DLEVBQXNDRSxHQUF0QyxFQUFELEVBQThDRixDQUE5QyxFQUFpRCxNQUFqRCxFQUF5RCxFQUF6RCxDQUFSO0FBQ0EsT0FQTSxDQUFQO0FBU0E7QUE1QlksR0FBZDs7QUErQkF6TSxHQUFDLENBQUNtSCxFQUFGLENBQUt5RCxTQUFMLEdBQWlCLFVBQVVnQyxNQUFWLEVBQWtCO0FBQ2xDO0FBQ0EsUUFBSUEsTUFBTSxJQUFJTixPQUFPLENBQUNNLE1BQUQsQ0FBckIsRUFBK0I7QUFDOUIsYUFBT04sT0FBTyxDQUFDTSxNQUFELENBQVAsQ0FBZ0JuQixLQUFoQixDQUFzQixJQUF0QixFQUE0QixHQUFHb0IsS0FBSCxDQUFTbEIsSUFBVCxDQUFjbUIsU0FBZCxFQUF5QixDQUF6QixDQUE1QixDQUFQO0FBQ0EsS0FGRCxNQUVPLElBQUlGLE1BQU0sS0FBSyxTQUFYLElBQXdCLENBQUNBLE1BQTdCLEVBQXFDO0FBQzNDLGFBQU9OLE9BQU8sQ0FBQzdDLElBQVIsQ0FBYWdDLEtBQWIsQ0FBbUIsSUFBbkIsRUFBeUIsR0FBR29CLEtBQUgsQ0FBU2xCLElBQVQsQ0FBY21CLFNBQWQsRUFBeUIsQ0FBekIsQ0FBekIsQ0FBUCxDQUQyQyxDQUNtQjtBQUM5RDs7QUFDRDlNLEtBQUMsQ0FBQytNLEtBQUYsQ0FBUSxZQUFZSCxNQUFaLEdBQXFCLHFDQUE3QjtBQUNBLFdBQU8sSUFBUDtBQUNBLEdBVEQ7QUFXQSxDQXJERCxFQXFER2hCLE1BckRILEUsQ0F1REE7O0FBQ0E7OztBQUNBLENBQUMsVUFBVTVDLENBQVYsRUFBYTtBQUFFLFVBQTRDZ0UsaUNBQU8sQ0FBQywyQ0FBRCxDQUFELG9DQUFhaEUsQ0FBYjtBQUFBO0FBQUE7QUFBQSxvR0FBbEQsR0FBb0UsU0FBcEU7QUFBb1IsQ0FBblMsQ0FBb1MsVUFBVUEsQ0FBVixFQUFhO0FBQUU7O0FBQWMsTUFBSXVCLENBQUMsR0FBRyxTQUFSO0FBQUEsTUFBbUIwQyxDQUFDLEdBQUc7QUFBRTNNLFlBQVEsRUFBRSxHQUFaO0FBQWlCQyxXQUFPLEVBQUUsR0FBMUI7QUFBK0JDLFVBQU0sRUFBRSxPQUF2QztBQUFnRHNJLFdBQU8sRUFBRSxDQUFDLENBQTFEO0FBQTZEckksWUFBUSxFQUFFdUksQ0FBQyxDQUFDa0U7QUFBekUsR0FBdkI7QUFBQSxNQUF3R2pCLENBQUMsR0FBRyxZQUFZO0FBQUUsUUFBSUEsQ0FBQyxHQUFHLFdBQVVBLEVBQVYsRUFBYS9ELENBQWIsRUFBZ0I7QUFBRSxVQUFJdkYsQ0FBQyxHQUFHLElBQVI7QUFBQSxVQUFjOEosQ0FBQyxHQUFHekQsQ0FBQyxDQUFDMkIsTUFBRixDQUFTc0MsQ0FBVCxFQUFZL0UsQ0FBWixDQUFsQjtBQUFrQ3ZGLE9BQUMsQ0FBQ3dLLElBQUYsR0FBU25FLENBQUMsQ0FBQ2lELEVBQUQsQ0FBVixFQUFldEosQ0FBQyxDQUFDd0ssSUFBRixDQUFPQyxFQUFQLENBQVUsS0FBVixNQUFxQnpLLENBQUMsQ0FBQ2dHLE9BQUYsR0FBWThELENBQVosRUFBZTlKLENBQUMsQ0FBQzBLLE1BQUYsR0FBVzFLLENBQUMsQ0FBQ3dLLElBQUYsQ0FBT3hELElBQVAsQ0FBWSxNQUFaLENBQTFCLEVBQStDaEgsQ0FBQyxDQUFDMkssYUFBRixHQUFrQmIsQ0FBQyxDQUFDbk0sUUFBRixHQUFhbU0sQ0FBQyxDQUFDbE0sT0FBRixHQUFZb0MsQ0FBQyxDQUFDMEssTUFBRixDQUFTN0ssTUFBbkcsRUFBMkdHLENBQUMsQ0FBQ3JDLFFBQUYsR0FBYW1NLENBQUMsQ0FBQ25NLFFBQUYsR0FBYXFDLENBQUMsQ0FBQzJLLGFBQXZJLEVBQXNKM0ssQ0FBQyxDQUFDMEssTUFBRixDQUFTM0ssSUFBVCxDQUFjLFVBQVVzRyxDQUFWLEVBQWF1QixDQUFiLEVBQWdCO0FBQUUsWUFBSTBDLENBQUMsR0FBRzFDLENBQUMsQ0FBQ2dELGNBQUYsRUFBUjtBQUE0QmhELFNBQUMsQ0FBQ2lELE9BQUYsR0FBWVAsQ0FBWixFQUFlMUMsQ0FBQyxDQUFDdkgsS0FBRixHQUFVeUosQ0FBQyxDQUFDbE0sT0FBRixHQUFZeUksQ0FBWixHQUFnQnJHLENBQUMsQ0FBQzJLLGFBQTNDLEVBQTBEL0MsQ0FBQyxDQUFDN0QsS0FBRixDQUFRK0csZUFBUixHQUEwQixDQUFDUixDQUFELEVBQUlBLENBQUosRUFBT1MsSUFBUCxDQUFZLEdBQVosQ0FBcEYsRUFBc0duRCxDQUFDLENBQUM3RCxLQUFGLENBQVFpSCxnQkFBUixHQUEyQlYsQ0FBakk7QUFBcUksT0FBak0sQ0FBdEosRUFBMFZ0SyxDQUFDLENBQUN3SyxJQUFGLENBQU9uTSxJQUFQLENBQVksT0FBWixFQUFxQixVQUFVZ0ksQ0FBVixFQUFhaUUsQ0FBYixFQUFnQjtBQUFFLGVBQU8sQ0FBQ0EsQ0FBRCxFQUFJMUMsQ0FBQyxHQUFHLGNBQVIsRUFBd0JtRCxJQUF4QixDQUE2QixHQUE3QixDQUFQO0FBQTJDLE9BQWxGLENBQS9XLENBQWY7QUFBcWQsS0FBamhCOztBQUFtaEIsV0FBT3pCLENBQUMsQ0FBQzJCLFNBQUYsQ0FBWUMsTUFBWixHQUFxQixVQUFVdEQsQ0FBVixFQUFhMEMsQ0FBYixFQUFnQjtBQUFFLGFBQU8sSUFBSWpFLENBQUMsQ0FBQ3hJLE1BQUYsQ0FBU3lNLENBQVQsRUFBWTFDLENBQVosRUFBZUEsQ0FBZixFQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QixDQUF4QixDQUFYO0FBQXdDLEtBQS9FLEVBQWlGMEIsQ0FBQyxDQUFDMkIsU0FBRixDQUFZRSxRQUFaLEdBQXVCLFVBQVU5RSxDQUFWLEVBQWE7QUFBRSxVQUFJdUIsQ0FBQyxHQUFHLElBQVI7QUFBQSxVQUFjMEMsQ0FBQyxHQUFHMUMsQ0FBQyxDQUFDNUIsT0FBcEI7QUFBQSxVQUE2QnNELENBQUMsR0FBRzFCLENBQUMsQ0FBQ2pLLFFBQW5DO0FBQTZDaUssT0FBQyxDQUFDOEMsTUFBRixDQUFTM0ssSUFBVCxDQUFjLFVBQVV3RixDQUFWLEVBQWF2RixDQUFiLEVBQWdCO0FBQUUsWUFBSThKLENBQUMsR0FBRzlKLENBQUMsQ0FBQytELEtBQVY7QUFBaUIsWUFBSSxNQUFNc0MsQ0FBVixFQUFheUQsQ0FBQyxDQUFDa0IsZ0JBQUYsR0FBcUIsQ0FBckIsQ0FBYixLQUEwQyxJQUFJLE1BQU0zRSxDQUFWLEVBQWF5RCxDQUFDLENBQUNrQixnQkFBRixHQUFxQmhMLENBQUMsQ0FBQzZLLE9BQUYsR0FBWSxJQUFqQyxDQUFiLEtBQXlELElBQUl4RSxDQUFDLElBQUlyRyxDQUFDLENBQUNLLEtBQVAsSUFBZ0JnRyxDQUFDLElBQUlpRCxDQUFDLEdBQUd0SixDQUFDLENBQUNLLEtBQS9CLEVBQXNDO0FBQUUsY0FBSStLLENBQUMsR0FBRyxDQUFDL0UsQ0FBQyxHQUFHckcsQ0FBQyxDQUFDSyxLQUFQLElBQWdCaUosQ0FBeEI7QUFBMkJRLFdBQUMsQ0FBQ2tCLGdCQUFGLEdBQXFCcEQsQ0FBQyxDQUFDc0QsTUFBRixDQUFTRSxDQUFULEVBQVlkLENBQUMsQ0FBQ3pNLE1BQWQsSUFBd0JtQyxDQUFDLENBQUM2SyxPQUExQixJQUFxQ1AsQ0FBQyxDQUFDbkUsT0FBRixHQUFZLENBQUMsQ0FBYixHQUFpQixDQUF0RCxJQUEyRCxJQUFoRjtBQUF1RjtBQUFFLE9BQWhUO0FBQW9ULEtBQXhkLEVBQTBkbUQsQ0FBQyxDQUFDMkIsU0FBRixDQUFZL0osT0FBWixHQUFzQixZQUFZO0FBQUUsVUFBSW9KLENBQUMsR0FBRyxJQUFSO0FBQWNBLE9BQUMsQ0FBQ0UsSUFBRixDQUFPbk0sSUFBUCxDQUFZLE9BQVosRUFBcUIsVUFBVWdJLENBQVYsRUFBYWlFLENBQWIsRUFBZ0I7QUFBRSxlQUFPLENBQUNBLENBQUQsRUFBSTFDLENBQUMsR0FBRyxZQUFSLEVBQXNCbUQsSUFBdEIsQ0FBMkIsR0FBM0IsQ0FBUDtBQUF5QyxPQUFoRixHQUFtRjFFLENBQUMsQ0FBQztBQUFFekcsV0FBRyxFQUFFO0FBQVAsT0FBRCxDQUFELENBQWNzQixPQUFkLENBQXNCO0FBQUV0QixXQUFHLEVBQUU7QUFBUCxPQUF0QixFQUFrQztBQUFFL0IsY0FBTSxFQUFFLFFBQVY7QUFBb0JGLGdCQUFRLEVBQUUyTSxDQUFDLENBQUNLLGFBQWhDO0FBQStDVSxZQUFJLEVBQUUsY0FBVWhGLENBQVYsRUFBYXVCLENBQWIsRUFBZ0I7QUFBRTBDLFdBQUMsQ0FBQ2EsUUFBRixDQUFXbkMsSUFBWCxDQUFnQnNCLENBQWhCLEVBQW1CakUsQ0FBQyxHQUFHdUIsQ0FBQyxDQUFDb0MsR0FBekI7QUFBZ0MsU0FBdkc7QUFBeUd6RCxnQkFBUSxFQUFFLG9CQUFZO0FBQUUrRCxXQUFDLENBQUN0RSxPQUFGLENBQVVsSSxRQUFWLENBQW1Ca0wsSUFBbkIsQ0FBd0IsSUFBeEIsR0FBK0JzQixDQUFDLENBQUNFLElBQUYsQ0FBT25NLElBQVAsQ0FBWSxPQUFaLEVBQXFCLFVBQVVnSSxDQUFWLEVBQWFpRSxDQUFiLEVBQWdCO0FBQUUsbUJBQU9BLENBQUMsQ0FBQ2xHLE9BQUYsQ0FBVXdELENBQUMsR0FBRyxZQUFkLEVBQTRCLEVBQTVCLENBQVA7QUFBeUMsV0FBaEYsQ0FBL0I7QUFBbUg7QUFBcFAsT0FBbEMsQ0FBbkY7QUFBK1csS0FBMzNCLEVBQTYzQjBCLENBQXA0QjtBQUF3NEIsR0FBejZDLEVBQTVHOztBQUF5aERqRCxHQUFDLENBQUM3QixFQUFGLENBQUtvRCxDQUFMLElBQVUsVUFBVTBDLENBQVYsRUFBYS9FLENBQWIsRUFBZ0I7QUFBRSxXQUFPLEtBQUt4RixJQUFMLENBQVUsWUFBWTtBQUFFLFVBQUlDLENBQUMsR0FBR3FHLENBQUMsQ0FBQ2xCLElBQUYsQ0FBTyxJQUFQLEVBQWF5QyxDQUFiLENBQVI7QUFBeUI1SCxPQUFDLElBQUksS0FBS3NLLENBQUwsS0FBV0EsQ0FBaEIsSUFBcUJ0SyxDQUFDLENBQUNzSyxDQUFELENBQXRCLEdBQTRCdEssQ0FBQyxDQUFDc0ssQ0FBRCxDQUFELENBQUsvRSxDQUFMLENBQTVCLEdBQXNDYyxDQUFDLENBQUNsQixJQUFGLENBQU8sSUFBUCxFQUFheUMsQ0FBYixFQUFnQixJQUFJMEIsQ0FBSixDQUFNLElBQU4sRUFBWWdCLENBQVosQ0FBaEIsQ0FBdEM7QUFBd0UsS0FBekgsQ0FBUDtBQUFvSSxHQUFoSztBQUFtSyxDQUE3L0QsQ0FBRDtBQUNBLG1COzs7Ozs7Ozs7OztBQzNXQSx3QiIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3dvcmsvanMvY29tbW9uL2NvbW1vbi5qc1wiKTtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgbm93ID0gcmVxdWlyZSgnLi9ub3cnKSxcbiAgICB0b051bWJlciA9IHJlcXVpcmUoJy4vdG9OdW1iZXInKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0byBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS5cbiAqIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZVxuICogbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZFxuICogd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbi4gU3Vic2VxdWVudFxuICogY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2BcbiAqIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXguXG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIEludm9rZSBgc2VuZE1haWxgIHdoZW4gY2xpY2tlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzLlxuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gRW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxscy5cbiAqIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHsgJ21heFdhaXQnOiAxMDAwIH0pO1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBkZWJvdW5jZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgZGVib3VuY2VkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCBkZWJvdW5jZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lLFxuICAgICAgbGFzdEludm9rZVRpbWUgPSAwLFxuICAgICAgbGVhZGluZyA9IGZhbHNlLFxuICAgICAgbWF4aW5nID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHRpbWVXYWl0aW5nID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuXG4gICAgcmV0dXJuIG1heGluZ1xuICAgICAgPyBuYXRpdmVNaW4odGltZVdhaXRpbmcsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKVxuICAgICAgOiB0aW1lV2FpdGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTtcblxuICAgIC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG4gICAgcmV0dXJuIChsYXN0Q2FsbFRpbWUgPT09IHVuZGVmaW5lZCB8fCAodGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCkgfHxcbiAgICAgICh0aW1lU2luY2VMYXN0Q2FsbCA8IDApIHx8IChtYXhpbmcgJiYgdGltZVNpbmNlTGFzdEludm9rZSA+PSBtYXhXYWl0KSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0cmFpbGluZyAmJiBsYXN0QXJncykge1xuICAgICAgcmV0dXJuIGludm9rZUZ1bmModGltZSk7XG4gICAgfVxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcblxuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2U7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N5bWJvbDtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKipcbiAqIEdldHMgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZVxuICogdGhlIFVuaXggZXBvY2ggKDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IERhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHRpbWVzdGFtcC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBMb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBpbnZvY2F0aW9uLlxuICovXG52YXIgbm93ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByb290LkRhdGUubm93KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vdztcbiIsInZhciBkZWJvdW5jZSA9IHJlcXVpcmUoJy4vZGVib3VuY2UnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgdGhyb3R0bGVkIGZ1bmN0aW9uIHRoYXQgb25seSBpbnZva2VzIGBmdW5jYCBhdCBtb3N0IG9uY2UgcGVyXG4gKiBldmVyeSBgd2FpdGAgbWlsbGlzZWNvbmRzLiBUaGUgdGhyb3R0bGVkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYFxuICogbWV0aG9kIHRvIGNhbmNlbCBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0b1xuICogaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgXG4gKiBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGUgbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgXG4gKiB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWQgd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlXG4gKiB0aHJvdHRsZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnQgY2FsbHMgdG8gdGhlIHRocm90dGxlZCBmdW5jdGlvbiByZXR1cm4gdGhlXG4gKiByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8udGhyb3R0bGVgIGFuZCBgXy5kZWJvdW5jZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB0aHJvdHRsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aHJvdHRsZSBpbnZvY2F0aW9ucyB0by5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyB0aHJvdHRsZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGV4Y2Vzc2l2ZWx5IHVwZGF0aW5nIHRoZSBwb3NpdGlvbiB3aGlsZSBzY3JvbGxpbmcuXG4gKiBqUXVlcnkod2luZG93KS5vbignc2Nyb2xsJywgXy50aHJvdHRsZSh1cGRhdGVQb3NpdGlvbiwgMTAwKSk7XG4gKlxuICogLy8gSW52b2tlIGByZW5ld1Rva2VuYCB3aGVuIHRoZSBjbGljayBldmVudCBpcyBmaXJlZCwgYnV0IG5vdCBtb3JlIHRoYW4gb25jZSBldmVyeSA1IG1pbnV0ZXMuXG4gKiB2YXIgdGhyb3R0bGVkID0gXy50aHJvdHRsZShyZW5ld1Rva2VuLCAzMDAwMDAsIHsgJ3RyYWlsaW5nJzogZmFsc2UgfSk7XG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgdGhyb3R0bGVkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIHRocm90dGxlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgdGhyb3R0bGVkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxlYWRpbmcgPSB0cnVlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAnbGVhZGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy5sZWFkaW5nIDogbGVhZGluZztcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG4gIHJldHVybiBkZWJvdW5jZShmdW5jLCB3YWl0LCB7XG4gICAgJ2xlYWRpbmcnOiBsZWFkaW5nLFxuICAgICdtYXhXYWl0Jzogd2FpdCxcbiAgICAndHJhaWxpbmcnOiB0cmFpbGluZ1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0aHJvdHRsZTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvTnVtYmVyO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0ICcuLi9tb2R1bGUvY29tbW9uLnBsdWdpbic7XHJcbmltcG9ydCB0aHJvdHRsZSBmcm9tICdsb2Rhc2gvdGhyb3R0bGUnO1xyXG5pbXBvcnQgYm9keVNjcm9sbFByZXZlbnQgZnJvbSAnLi4vbW9kdWxlL2JvZHlTY3JvbGxQcmV2ZW50JztcclxuXHJcbi8vLy8vLy8vLy8vL2dsb2JhbCB2YXJpYWJsZS8vLy8vLy8vLy8vL1xyXG5cclxuY29uc3QgYm9keSA9ICQoJ2JvZHknKTtcclxuY29uc3QgYWNjZXNzRmxhZyA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc2VkJyk7XHJcblxyXG4vLy8vLy8vLy8vLy9EcmF3IFNWRy8vLy8vLy8vLy8vL1xyXG4oZnVuY3Rpb24gKCkge1xyXG5cdHZhciBteWNMb2dvID0gJChcIiNteWNMb2dvXCIpLmRyYXdzdmcoe1xyXG5cdFx0ZHVyYXRpb246IDEwMDAsXHJcblx0XHRzdGFnZ2VyOiA4MCxcclxuXHRcdGVhc2luZzogXCJzd2luZ1wiLFxyXG5cdFx0Y2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0JChcIiNteWNMb2dvIGdcIikuYWRkQ2xhc3MoXCJmaWxsQW5pbVwiKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRpZiAoIWFjY2Vzc0ZsYWcgJiYgYm9keS5oYXNDbGFzcygnaG9tZScpKSB7XHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0bXljTG9nby5jc3MoXCJvcGFjaXR5XCIsIDEpLmRyYXdzdmcoXCJhbmltYXRlXCIpO1xyXG5cdFx0fSwgMTgwMCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdG15Y0xvZ28uY3NzKFwib3BhY2l0eVwiLCAxKS5kcmF3c3ZnKFwiYW5pbWF0ZVwiKTtcclxuXHR9XHJcbn0pKCk7XHJcblxyXG4vLy8vLy8vLy8vLy9zY3JvbGxFdmVudHNfc3RhcnQvLy8vLy8vLy8vLy9cclxuJChmdW5jdGlvbiAoKSB7XHJcblxyXG5cdC8vbmF2SGVhZGVyU2hvd192YXJpYWJsZXNcclxuXHR2YXIgY2xvbmVOYXYgPSAkKCcjbmF2SGVhZGVyJykuY2xvbmUoKS5hdHRyKCdpZCcsICdjbG9uZU5hdicpLmFkZENsYXNzKCdjbG9uZU5hdicpLmluc2VydEFmdGVyKCcjbmF2SGVhZGVyJyk7XHJcblx0dmFyIGxvZ29Nb3ZlID0gJCgnLmxvZ29Gb2xsb3c6bGFzdCcpO1xyXG5cdHZhciBzaG93Q2xhc3MgPSAnaXNTaG93JztcclxuXHQvL3Nob3dVcF92YXJpYWJsZXNcclxuXHR2YXIgZm9yU2hvdzEgPSAkKCcuZm9yU2hvdzEnKTtcclxuXHR2YXIgZm9yU2hvdzIgPSAkKCcuZm9yU2hvdzInKTtcclxuXHR2YXIgZm9yU2hvdzMgPSAkKCcuZm9yU2hvdzMnKTtcclxuXHR2YXIgZm9yU2hvdzQgPSAkKCcuZm9yU2hvdzQnKTtcclxuXHR2YXIgZm9yU2hvd3MgPSBbZm9yU2hvdzEsIGZvclNob3cyLCBmb3JTaG93MywgZm9yU2hvdzRdO1xyXG5cdC8vdGV4dGlsbGF0ZV92YXJpYWJsZXNcclxuXHR2YXIgaGVhZGluZyA9ICQoJy5oZWFkaW5nJyk7XHJcblx0Ly9jb21tZW50QW5pbV92YXJpYWJsZXNcclxuXHR2YXIgY29tbWVudEFuaW0gPSAkKCcjY29tbWVudEFuaW0nKTtcclxuXHQvL3JvbGxCYWNrX3ZhcmlhYmxlc1xyXG5cdHZhciByb2xsQmFjayA9ICQoJyNyb2xsQmFjaycpO1xyXG5cdC8vaGVsbG9Nb2dpX3ZhcmlhYmxlc1xyXG5cdHZhciBtb2dpRm9vdGVyID0gJCgnI21vZ2lGb290ZXInKTtcclxuXHR2YXIgY29udGVudHNIZWlnaHQgPSAkKGRvY3VtZW50KS5oZWlnaHQoKTtcclxuXHJcblx0Ly8vL3Njcm9sbEV2ZW50cy8vLy9cclxuXHQkKHdpbmRvdykub24oJ3Njcm9sbCcsIHRocm90dGxlKGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHQvL2NvbW1vbl92YXJpYWJsZXNcclxuXHRcdHZhciB3aW5kb3dIZWlnaHQgPSAkKHRoaXMpLmhlaWdodCgpO1xyXG5cdFx0dmFyIHNjcm9sbCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcblxyXG5cdFx0Ly9uYXZIZWFkZXJTaG93X2Z1bmNcclxuXHRcdGlmIChzY3JvbGwgPiA3MDApIHtcclxuXHRcdFx0bG9nb01vdmUuY3NzKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpO1xyXG5cdFx0XHRjbG9uZU5hdi5hZGRDbGFzcyhzaG93Q2xhc3MpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y2xvbmVOYXYucmVtb3ZlQ2xhc3Moc2hvd0NsYXNzKTtcclxuXHRcdH1cclxuXHRcdC8vc2hvd1VwX2Z1bmNcclxuXHRcdHZhciBsZW4gPSBmb3JTaG93cy5sZW5ndGg7XHJcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGxlbjsgaisrKSB7XHJcblx0XHRcdGZvclNob3dzW2pdLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuXHRcdFx0XHR2YXIgZm9yU2hvd1BvaW50ID0gJCh0aGlzKS5vZmZzZXQoKS50b3AgLSAzMDtcclxuXHRcdFx0XHR2YXIgZGVsYXlUaW1lID0gOTA7XHJcblx0XHRcdFx0aWYgKHNjcm9sbCA+IGZvclNob3dQb2ludCAtIHdpbmRvd0hlaWdodCkge1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5kZWxheShpICogZGVsYXlUaW1lKS5xdWV1ZShmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ3Nob3dVcCcpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdC8vdGV4dGlsbGF0ZV9mdW5jXHJcblx0XHRoZWFkaW5nLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR2YXIgaGVhZGluZ1BvaW50ID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XHJcblx0XHRcdGlmIChzY3JvbGwgPiBoZWFkaW5nUG9pbnQgLSB3aW5kb3dIZWlnaHQpIHtcclxuXHRcdFx0XHQkKHRoaXMpLmNzcygnb3BhY2l0eScsIDEpLnRleHRpbGxhdGUoe1xyXG5cdFx0XHRcdFx0aW46IHtcclxuXHRcdFx0XHRcdFx0ZWZmZWN0OiAnZmFkZUluVXAnLFxyXG5cdFx0XHRcdFx0XHRzaHVmZmxlOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRkZWxheTogMjAsXHJcblx0XHRcdFx0XHRcdGRlbGF5U2NhbGU6IDMsXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0Ly9jb21tZW50QW5pbV9mdW5jXHJcblx0XHRpZiAoY29tbWVudEFuaW0ubGVuZ3RoKSB7XHJcblx0XHRcdHZhciBteUNvbW1lbnRQb2ludCA9IGNvbW1lbnRBbmltLm9mZnNldCgpLnRvcDtcclxuXHRcdFx0aWYgKHNjcm9sbCA+IG15Q29tbWVudFBvaW50IC0gd2luZG93SGVpZ2h0KSB7XHJcblx0XHRcdFx0Y29tbWVudEFuaW0uY3NzKCdvcGFjaXR5JywgMSkuYWRkQ2xhc3MoJ2FuaW1hdGVkIHpvb21JbkRvd24nKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ly9yb2xsQmFja19mdW5jXHJcblx0XHRpZiAoc2Nyb2xsID4gNzAwKSB7XHJcblx0XHRcdHJvbGxCYWNrLmZhZGVJbig1MDApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cm9sbEJhY2suZmFkZU91dCg1MDApO1xyXG5cdFx0fVxyXG5cdFx0Ly9oZWxsb01vZ2lfZnVuY1xyXG5cdFx0aWYgKGNvbnRlbnRzSGVpZ2h0IC0gKHNjcm9sbCArIHdpbmRvd0hlaWdodCkgPCAxMDApIHtcclxuXHRcdFx0bW9naUZvb3Rlci5zaG93KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdoZWxsb01vZ2knKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAobW9naUZvb3Rlci5oYXNDbGFzcygnaGVsbG9Nb2dpJykpIHtcclxuXHRcdFx0XHRtb2dpRm9vdGVyLmZhZGVPdXQoMjAwLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdoZWxsb01vZ2knKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHR9LCAxNTApKTtcclxuXHQvLy8vc2Nyb2xsRXZlbnRzLy8vL1xyXG5cclxuXHQvLy8vb3B0aW9uYWxfZnVuYy8vLy9cclxuXHQvL3JvbGxCYWNrQ2xpY2tlZFxyXG5cdHJvbGxCYWNrLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHRcdCQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgNzAwLCAnZWFzZUluT3V0UXVhcnQnKTtcclxuXHR9KTtcclxuXHQvLy8vb3B0aW9uYWxfZnVuYy8vLy9cclxuXHJcbn0pO1xyXG4vLy8vLy8vLy8vLy9zY3JvbGxFdmVudHNfZW5kLy8vLy8vLy8vLy8vXHJcblxyXG4vLy8vLy8vLy8vLy9zcE5hdkhlYWRlci8vLy8vLy8vLy8vL1xyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgaGFtYkJ0bnMgPSAkKCcjaGFtYkJ0bicpO1xyXG5cdHZhciBoYW1iQnRuMSA9ICQoJy5oYW1iQnRuMScpO1xyXG5cdHZhciBoYW1iQnRuMiA9ICQoJy5oYW1iQnRuMicpO1xyXG5cdHZhciBoYW1iQnRuMyA9ICQoJy5oYW1iQnRuMycpO1xyXG5cdHZhciBzcE5hdiA9ICQoJyNzcE5hdkhlYWRlcicpO1xyXG5cdHZhciBzcE5hdkxpc3RzID0gJCgnLnNwTmF2SGVhZGVyIHVsIGxpJyk7XHJcblx0dmFyIHNwTmF2TGluayA9ICQoJyNzcE5hdkhlYWRlciBsaSBhJyk7XHJcblx0dmFyIGRlbGF5VGltZSA9IDgwO1xyXG5cdHZhciBmYWRlVGltZSA9IDIwMDtcclxuXHRoYW1iQnRucy5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHR0b2dnbGVOYXYoKTtcclxuXHRcdGlmIChzcE5hdkxpc3RzLmNzcygnZGlzcGxheScpID09ICdsaXN0LWl0ZW0nKSB7XHJcblx0XHRcdHNwTmF2TGlzdHMuZmFkZU91dChmYWRlVGltZSk7XHJcblx0XHRcdGJvZHlTY3JvbGxQcmV2ZW50KGZhbHNlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGJvZHlTY3JvbGxQcmV2ZW50KHRydWUpO1xyXG5cdFx0XHRzcE5hdkxpc3RzLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuXHRcdFx0XHQkKHRoaXMpLmRlbGF5KGkgKiBkZWxheVRpbWUpLmZhZGVJbihmYWRlVGltZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdHNwTmF2TGluay5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRib2R5U2Nyb2xsUHJldmVudChmYWxzZSk7XHJcblx0XHR0b2dnbGVOYXYoKTtcclxuXHRcdHNwTmF2TGlzdHMuaGlkZSgpO1xyXG5cdH0pO1xyXG5cdGZ1bmN0aW9uIHRvZ2dsZU5hdigpIHtcclxuXHRcdGlmICghc3BOYXYuaGFzQ2xhc3MoJ2lzLXNob3cnKSkge1xyXG5cdFx0XHRzcE5hdi5mYWRlSW4oZmFkZVRpbWUpLmFkZENsYXNzKCdpcy1zaG93Jyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzcE5hdi5mYWRlT3V0KGZhZGVUaW1lLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtc2hvdycpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRoYW1iQnRuMS50b2dnbGVDbGFzcygnaGFtYk1vdmUxJyk7XHJcblx0XHRoYW1iQnRuMi50b2dnbGVDbGFzcygnaGFtYk1vdmUyJyk7XHJcblx0XHRoYW1iQnRuMy50b2dnbGVDbGFzcygnaGFtYk1vdmUzJyk7XHJcblx0fVxyXG59KTtcclxuLy8vLy8vLy8vLy8vc3BOYXZIZWFkZXIvLy8vLy8vLy8vLy9cclxuLy/ihpFjYW4gbm90IHJlcGxhY2XihpMvL1xyXG4vLy8vLy8vLy8vLy9zbW9vdGhTY3JvbGwvLy8vLy8vLy8vLy9cclxuJChmdW5jdGlvbiAoKSB7XHJcblx0JCgnLm5hdkhlYWRlciBhW2hyZWZePVwiI1wiXScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHRcdHZhciBocmVmID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcblx0XHR2YXIgdGFyZ2V0ID0gJChocmVmID09ICcjJyB8fCBocmVmID09PSAnJyA/ICdodG1sJyA6IGhyZWYpO1xyXG5cdFx0dmFyIHBvc2l0aW9uID0gdGFyZ2V0Lm9mZnNldCgpLnRvcDtcclxuXHRcdGlmIChocmVmID09PSAnI2NvbnRhY3QnKSB7XHJcblx0XHRcdCQoJ2h0bWwsYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IHBvc2l0aW9uIH0sIDcwMCwgJ2Vhc2VJbk91dFF1YXJ0Jyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkKCdodG1sLGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiBwb3NpdGlvbiAtIDUwIH0sIDcwMCwgJ2Vhc2VJbk91dFF1YXJ0Jyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblx0JCgnI3NwTmF2SGVhZGVyIGFbaHJlZl49XCIjXCJdJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cdFx0dmFyIGhyZWYgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuXHRcdHZhciB0YXJnZXQgPSAkKGhyZWYgPT0gJyMnIHx8IGhyZWYgPT09ICcnID8gJ2h0bWwnIDogaHJlZik7XHJcblx0XHR2YXIgcG9zaXRpb24gPSB0YXJnZXQub2Zmc2V0KCkudG9wO1xyXG5cdFx0aWYgKGhyZWYgPT09ICcjY29udGFjdCcpIHtcclxuXHRcdFx0JCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogcG9zaXRpb24gKyAxMDAgfSwgNzAwLCAnZWFzZUluT3V0UXVhcnQnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCQoJ2h0bWwsYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IHBvc2l0aW9uICsgNTAgfSwgNzAwLCAnZWFzZUluT3V0UXVhcnQnKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxufSk7XHJcbi8vLy8vLy8vLy8vL3Ntb290aFNjcm9sbC8vLy8vLy8vLy8vL1xyXG5cclxuLy8vLy8vLy8vLy8vb3RoZXJwYWdlIHRvIGZyb250cGFnZS8vLy8vLy8vLy8vL1xyXG4kKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0dmFyIGZpeFB4ID0gLTUwO1xyXG5cdHZhciB1cmwgPSAkKGxvY2F0aW9uKS5hdHRyKCdocmVmJyk7XHJcblx0aWYgKHVybC5pbmRleE9mKFwiP2lkPVwiKSAhPSAtMSkge1xyXG5cdFx0dmFyIGlkTmFtZSA9IHVybC5zcGxpdChcIj9pZD1cIik7XHJcblx0XHR2YXIgdGFyZ2V0ID0gJCgnIycgKyBpZE5hbWVbaWROYW1lLmxlbmd0aCAtIDFdKTtcclxuXHRcdGlmICh0YXJnZXQubGVuZ3RoKSB7XHJcblx0XHRcdHZhciBwb3MgPSB0YXJnZXQub2Zmc2V0KCkudG9wICsgZml4UHg7XHJcblx0XHRcdGlmICgobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdpUGhvbmUnKSA+IDAgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdpUGFkJykgPT0gLTEpIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignaVBvZCcpID4gMCB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0FuZHJvaWQnKSA+IDApIHtcclxuXHRcdFx0XHRpZiAodGFyZ2V0LnByb3AoJ2lkJykgPT0gXCJjb250YWN0XCIpIHtcclxuXHRcdFx0XHRcdCQoXCJodG1sLCBib2R5XCIpLnNjcm9sbFRvcChwb3MgKyAxNTApO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkKFwiaHRtbCwgYm9keVwiKS5zY3JvbGxUb3AocG9zICsgMTAwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKHRhcmdldC5wcm9wKCdpZCcpID09IFwiY29udGFjdFwiKSB7XHJcblx0XHRcdFx0XHQkKFwiaHRtbCwgYm9keVwiKS5zY3JvbGxUb3AocG9zICsgNTApO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkKFwiaHRtbCwgYm9keVwiKS5zY3JvbGxUb3AocG9zKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn0pO1xyXG4vLy8vLy8vLy8vLy9vdGhlcnBhZ2UgdG8gZnJvbnRwYWdlLy8vLy8vLy8vLy8vXHJcblxyXG4vLy8vLy8vLy8vLy9tb2RhbC8vLy8vLy8vLy8vL1xyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHQkKCcubW9kYWxPcGVuJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0Ym9keVNjcm9sbFByZXZlbnQodHJ1ZSk7XHJcblx0XHRpZiAoJCh0aGlzKS5wYXJlbnRzKCcjc3BOYXZIZWFkZXInKVswXSkge1xyXG5cdFx0XHQkKCcjbW9kYWxBcmVhJykuc2hvdygpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JCgnI21vZGFsQXJlYScpLmZhZGVJbigpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCQoJyNjb250YWN0JykpIHtcclxuXHRcdFx0JCgnI2NvbnRhY3QnKS50b2dnbGVDbGFzcygnaXMtcGFzc2l2ZScpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdCQoJyNtb2RhbENsb3NlLCNtb2RhbE91dGVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0JCgnI21vZGFsQXJlYScpLmZhZGVPdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRib2R5U2Nyb2xsUHJldmVudChmYWxzZSk7XHJcblx0XHRcdGlmICgkKCcjY29udGFjdCcpKSB7XHJcblx0XHRcdFx0JCgnI2NvbnRhY3QnKS50b2dnbGVDbGFzcygnaXMtcGFzc2l2ZScpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9KTtcclxufSk7XHJcbi8vLy8vLy8vLy8vL21vZGFsLy8vLy8vLy8vLy8vXHJcblxyXG4vLy8vLy8vLy8vLy9zY3JvbGwgY29udHJvbCBmb3IgZnVja2luJ0lFMTEvLy8vLy8vLy8vLy9cclxuaWYgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL01TSUUgMTAvaSkgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVHJpZGVudFxcLzdcXC4vKSB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvMTJcXC4vKSkge1xyXG5cdCQoJ2JvZHknKS5vbihcIm1vdXNld2hlZWxcIiwgZnVuY3Rpb24gKCkge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHZhciB3ZCA9IGV2ZW50LndoZWVsRGVsdGE7XHJcblx0XHR2YXIgY3NwID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsIGNzcCAtIHdkKTtcclxuXHR9KTtcclxufVxyXG4vLy8vLy8vLy8vLy9zY3JvbGwgY29udHJvbCBmb3IgZnVja2luJ0lFMTEvLy8vLy8vLy8vLy9cclxuXHJcbi8vLy8vLy8vLy8vL3Njcm9sbFRyaWdnZXJBbGwtYm90dG9tRml4QWJzb2x1dGVseSEhIS8vLy8vLy8vLy8vL1xyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHQkKHdpbmRvdykudHJpZ2dlcignc2Nyb2xsJyk7XHJcbn0pO1xyXG4vLy8vLy8vLy8vLy9zY3JvbGxUcmlnZ2VyQWxsLWJvdHRvbUZpeEFic29sdXRlbHkhISEvLy8vLy8vLy8vLy9cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYm9keVNjcm9sbFByZXZlbnQoZmxhZykge1xyXG5cdGxldCBzY3JvbGxQb3NpdGlvbjtcclxuXHRjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcclxuXHRjb25zdCB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XHJcblx0Y29uc3QgaXNpT1MgPSB1YS5pbmRleE9mKCdpcGhvbmUnKSA+IC0xIHx8IHVhLmluZGV4T2YoJ2lwYWQnKSA+IC0xIHx8IHVhLmluZGV4T2YoJ21hY2ludG9zaCcpID4gLTEgJiYgJ29udG91Y2hlbmQnIGluIGRvY3VtZW50O1xyXG5cdGNvbnN0IHNjcm9sbEJhcldpZHRoID0gd2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xyXG5cdGlmIChmbGFnKSB7XHJcblx0XHRib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IHNjcm9sbEJhcldpZHRoICsgJ3B4JztcclxuXHRcdGlmIChpc2lPUykge1xyXG5cdFx0XHRzY3JvbGxQb3NpdGlvbiA9IC13aW5kb3cucGFnZVlPZmZzZXQ7XHJcblx0XHRcdGJvZHkuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xyXG5cdFx0XHRib2R5LnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG5cdFx0XHRib2R5LnN0eWxlLnRvcCA9IHNjcm9sbFBvc2l0aW9uICsgJ3B4JztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuXHRcdH1cclxuXHR9IGVsc2UgaWYgKCFmbGFnKSB7XHJcblx0XHRib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcnO1xyXG5cdFx0aWYgKGlzaU9TKSB7XHJcblx0XHRcdHNjcm9sbFBvc2l0aW9uID0gcGFyc2VJbnQoYm9keS5zdHlsZS50b3AucmVwbGFjZSgvW14wLTldL2csICcnKSk7XHJcblx0XHRcdGJvZHkuc3R5bGUucG9zaXRpb24gPSAnJztcclxuXHRcdFx0Ym9keS5zdHlsZS53aWR0aCA9ICcnO1xyXG5cdFx0XHRib2R5LnN0eWxlLnRvcCA9ICcnO1xyXG5cdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgc2Nyb2xsUG9zaXRpb24pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ym9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsIi8qIGVzbGludC1kaXNhYmxlICovXHJcbi8vLy8vLy8vLy8vLy8vdGV4dGlsbGF0ZS5qcy8vLy8vLy8vLy8vLy8vXHJcbi8qXHJcbiAqIHRleHRpbGxhdGUuanNcclxuICogaHR0cDovL2pzY2hyLmdpdGh1Yi5jb20vdGV4dGlsbGF0ZVxyXG4gKiBNSVQgbGljZW5zZWRcclxuICpcclxuICogQ29weXJpZ2h0IChDKSAyMDEyLTIwMTMgSm9yZGFuIFNjaHJvdGVyXHJcbiAqL1xyXG5cclxuKGZ1bmN0aW9uICgkKSB7XHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdGZ1bmN0aW9uIGlzSW5FZmZlY3QoZWZmZWN0KSB7XHJcblx0XHRyZXR1cm4gL0luLy50ZXN0KGVmZmVjdCkgfHwgJC5pbkFycmF5KGVmZmVjdCwgJC5mbi50ZXh0aWxsYXRlLmRlZmF1bHRzLmluRWZmZWN0cykgPj0gMDtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGlzT3V0RWZmZWN0KGVmZmVjdCkge1xyXG5cdFx0cmV0dXJuIC9PdXQvLnRlc3QoZWZmZWN0KSB8fCAkLmluQXJyYXkoZWZmZWN0LCAkLmZuLnRleHRpbGxhdGUuZGVmYXVsdHMub3V0RWZmZWN0cykgPj0gMDtcclxuXHR9XHJcblxyXG5cclxuXHRmdW5jdGlvbiBzdHJpbmdUb0Jvb2xlYW4oc3RyKSB7XHJcblx0XHRpZiAoc3RyICE9PSBcInRydWVcIiAmJiBzdHIgIT09IFwiZmFsc2VcIikgcmV0dXJuIHN0cjtcclxuXHRcdHJldHVybiAoc3RyID09PSBcInRydWVcIik7XHJcblx0fVxyXG5cclxuXHQvLyBjdXN0b20gZ2V0IGRhdGEgYXBpIG1ldGhvZFxyXG5cdGZ1bmN0aW9uIGdldERhdGEobm9kZSkge1xyXG5cdFx0dmFyIGF0dHJzID0gbm9kZS5hdHRyaWJ1dGVzIHx8IFtdXHJcblx0XHRcdCwgZGF0YSA9IHt9O1xyXG5cclxuXHRcdGlmICghYXR0cnMubGVuZ3RoKSByZXR1cm4gZGF0YTtcclxuXHJcblx0XHQkLmVhY2goYXR0cnMsIGZ1bmN0aW9uIChpLCBhdHRyKSB7XHJcblx0XHRcdHZhciBub2RlTmFtZSA9IGF0dHIubm9kZU5hbWUucmVwbGFjZSgvZGVsYXlzY2FsZS8sICdkZWxheVNjYWxlJyk7XHJcblx0XHRcdGlmICgvXmRhdGEtaW4tKi8udGVzdChub2RlTmFtZSkpIHtcclxuXHRcdFx0XHRkYXRhLmluID0gZGF0YS5pbiB8fCB7fTtcclxuXHRcdFx0XHRkYXRhLmluW25vZGVOYW1lLnJlcGxhY2UoL2RhdGEtaW4tLywgJycpXSA9IHN0cmluZ1RvQm9vbGVhbihhdHRyLm5vZGVWYWx1ZSk7XHJcblx0XHRcdH0gZWxzZSBpZiAoL15kYXRhLW91dC0qLy50ZXN0KG5vZGVOYW1lKSkge1xyXG5cdFx0XHRcdGRhdGEub3V0ID0gZGF0YS5vdXQgfHwge307XHJcblx0XHRcdFx0ZGF0YS5vdXRbbm9kZU5hbWUucmVwbGFjZSgvZGF0YS1vdXQtLywgJycpXSA9IHN0cmluZ1RvQm9vbGVhbihhdHRyLm5vZGVWYWx1ZSk7XHJcblx0XHRcdH0gZWxzZSBpZiAoL15kYXRhLSovLnRlc3Qobm9kZU5hbWUpKSB7XHJcblx0XHRcdFx0ZGF0YVtub2RlTmFtZS5yZXBsYWNlKC9kYXRhLS8sICcnKV0gPSBzdHJpbmdUb0Jvb2xlYW4oYXR0ci5ub2RlVmFsdWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gZGF0YTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHNodWZmbGUobykge1xyXG5cdFx0Zm9yICh2YXIgaiwgeCwgaSA9IG8ubGVuZ3RoOyBpOyBqID0gcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIGkpLCB4ID0gb1stLWldLCBvW2ldID0gb1tqXSwgb1tqXSA9IHgpO1xyXG5cdFx0cmV0dXJuIG87XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBhbmltYXRlKCR0LCBlZmZlY3QsIGNiKSB7XHJcblx0XHQkdC5hZGRDbGFzcygnYW5pbWF0ZWQgJyArIGVmZmVjdClcclxuXHRcdFx0LmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJylcclxuXHRcdFx0LnNob3coKTtcclxuXHJcblx0XHQkdC5vbmUoJ3dlYmtpdEFuaW1hdGlvbkVuZCBtb3pBbmltYXRpb25FbmQgTVNBbmltYXRpb25FbmQgb2FuaW1hdGlvbmVuZCBhbmltYXRpb25lbmQnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdCR0LnJlbW92ZUNsYXNzKCdhbmltYXRlZCAnICsgZWZmZWN0KTtcclxuXHRcdFx0Y2IgJiYgY2IoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYW5pbWF0ZVRva2VucygkdG9rZW5zLCBvcHRpb25zLCBjYikge1xyXG5cdFx0dmFyIHRoYXQgPSB0aGlzXHJcblx0XHRcdCwgY291bnQgPSAkdG9rZW5zLmxlbmd0aDtcclxuXHJcblx0XHRpZiAoIWNvdW50KSB7XHJcblx0XHRcdGNiICYmIGNiKCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAob3B0aW9ucy5zaHVmZmxlKSAkdG9rZW5zID0gc2h1ZmZsZSgkdG9rZW5zKTtcclxuXHRcdGlmIChvcHRpb25zLnJldmVyc2UpICR0b2tlbnMgPSAkdG9rZW5zLnRvQXJyYXkoKS5yZXZlcnNlKCk7XHJcblxyXG5cdFx0JC5lYWNoKCR0b2tlbnMsIGZ1bmN0aW9uIChpLCB0KSB7XHJcblx0XHRcdHZhciAkdG9rZW4gPSAkKHQpO1xyXG5cclxuXHRcdFx0ZnVuY3Rpb24gY29tcGxldGUoKSB7XHJcblx0XHRcdFx0aWYgKGlzSW5FZmZlY3Qob3B0aW9ucy5lZmZlY3QpKSB7XHJcblx0XHRcdFx0XHQkdG9rZW4uY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGlzT3V0RWZmZWN0KG9wdGlvbnMuZWZmZWN0KSkge1xyXG5cdFx0XHRcdFx0JHRva2VuLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y291bnQgLT0gMTtcclxuXHRcdFx0XHRpZiAoIWNvdW50ICYmIGNiKSBjYigpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgZGVsYXkgPSBvcHRpb25zLnN5bmMgPyBvcHRpb25zLmRlbGF5IDogb3B0aW9ucy5kZWxheSAqIGkgKiBvcHRpb25zLmRlbGF5U2NhbGU7XHJcblxyXG5cdFx0XHQkdG9rZW4udGV4dCgpID9cclxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgYW5pbWF0ZSgkdG9rZW4sIG9wdGlvbnMuZWZmZWN0LCBjb21wbGV0ZSk7IH0sIGRlbGF5KSA6XHJcblx0XHRcdFx0Y29tcGxldGUoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0dmFyIFRleHRpbGxhdGUgPSBmdW5jdGlvbiAoZWxlbWVudCwgb3B0aW9ucykge1xyXG5cdFx0dmFyIGJhc2UgPSB0aGlzXHJcblx0XHRcdCwgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xyXG5cclxuXHRcdGJhc2UuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0YmFzZS4kdGV4dHMgPSAkZWxlbWVudC5maW5kKG9wdGlvbnMuc2VsZWN0b3IpO1xyXG5cclxuXHRcdFx0aWYgKCFiYXNlLiR0ZXh0cy5sZW5ndGgpIHtcclxuXHRcdFx0XHRiYXNlLiR0ZXh0cyA9ICQoJzx1bCBjbGFzcz1cInRleHRzXCI+PGxpPicgKyAkZWxlbWVudC5odG1sKCkgKyAnPC9saT48L3VsPicpO1xyXG5cdFx0XHRcdCRlbGVtZW50Lmh0bWwoYmFzZS4kdGV4dHMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRiYXNlLiR0ZXh0cy5oaWRlKCk7XHJcblxyXG5cdFx0XHRiYXNlLiRjdXJyZW50ID0gJCgnPHNwYW4+JylcclxuXHRcdFx0XHQuaHRtbChiYXNlLiR0ZXh0cy5maW5kKCc6Zmlyc3QtY2hpbGQnKS5odG1sKCkpXHJcblx0XHRcdFx0LnByZXBlbmRUbygkZWxlbWVudCk7XHJcblxyXG5cdFx0XHRpZiAoaXNJbkVmZmVjdChvcHRpb25zLmluLmVmZmVjdCkpIHtcclxuXHRcdFx0XHRiYXNlLiRjdXJyZW50LmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuXHRcdFx0fSBlbHNlIGlmIChpc091dEVmZmVjdChvcHRpb25zLm91dC5lZmZlY3QpKSB7XHJcblx0XHRcdFx0YmFzZS4kY3VycmVudC5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRiYXNlLnNldE9wdGlvbnMob3B0aW9ucyk7XHJcblxyXG5cdFx0XHRiYXNlLnRpbWVvdXRSdW4gPSBudWxsO1xyXG5cclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0YmFzZS5vcHRpb25zLmF1dG9TdGFydCAmJiBiYXNlLnN0YXJ0KCk7XHJcblx0XHRcdH0sIGJhc2Uub3B0aW9ucy5pbml0aWFsRGVsYXkpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRiYXNlLnNldE9wdGlvbnMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG5cdFx0XHRiYXNlLm9wdGlvbnMgPSBvcHRpb25zO1xyXG5cdFx0fTtcclxuXHJcblx0XHRiYXNlLnRyaWdnZXJFdmVudCA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcblx0XHRcdHZhciBlID0gJC5FdmVudChuYW1lICsgJy50bHQnKTtcclxuXHRcdFx0JGVsZW1lbnQudHJpZ2dlcihlLCBiYXNlKTtcclxuXHRcdFx0cmV0dXJuIGU7XHJcblx0XHR9O1xyXG5cclxuXHRcdGJhc2UuaW4gPSBmdW5jdGlvbiAoaW5kZXgsIGNiKSB7XHJcblx0XHRcdGluZGV4ID0gaW5kZXggfHwgMDtcclxuXHJcblx0XHRcdHZhciAkZWxlbSA9IGJhc2UuJHRleHRzLmZpbmQoJzpudGgtY2hpbGQoJyArICgoaW5kZXggfHwgMCkgKyAxKSArICcpJylcclxuXHRcdFx0XHQsIG9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB7fSwgYmFzZS5vcHRpb25zLCAkZWxlbS5sZW5ndGggPyBnZXREYXRhKCRlbGVtWzBdKSA6IHt9KVxyXG5cdFx0XHRcdCwgJHRva2VucztcclxuXHJcblx0XHRcdCRlbGVtLmFkZENsYXNzKCdjdXJyZW50Jyk7XHJcblxyXG5cdFx0XHRiYXNlLnRyaWdnZXJFdmVudCgnaW5BbmltYXRpb25CZWdpbicpO1xyXG5cdFx0XHQkZWxlbWVudC5hdHRyKCdkYXRhLWFjdGl2ZScsICRlbGVtLmRhdGEoJ2lkJykpO1xyXG5cclxuXHRcdFx0YmFzZS4kY3VycmVudFxyXG5cdFx0XHRcdC5odG1sKCRlbGVtLmh0bWwoKSlcclxuXHRcdFx0XHQubGV0dGVyaW5nKCd3b3JkcycpO1xyXG5cclxuXHRcdFx0Ly8gc3BsaXQgd29yZHMgdG8gaW5kaXZpZHVhbCBjaGFyYWN0ZXJzIGlmIHRva2VuIHR5cGUgaXMgc2V0IHRvICdjaGFyJ1xyXG5cdFx0XHRpZiAoYmFzZS5vcHRpb25zLnR5cGUgPT0gXCJjaGFyXCIpIHtcclxuXHRcdFx0XHRiYXNlLiRjdXJyZW50LmZpbmQoJ1tjbGFzc149XCJ3b3JkXCJdJylcclxuXHRcdFx0XHRcdC5jc3Moe1xyXG5cdFx0XHRcdFx0XHQnZGlzcGxheSc6ICdpbmxpbmUtYmxvY2snLFxyXG5cdFx0XHRcdFx0XHQvLyBmaXggZm9yIHBvb3IgaW9zIHBlcmZvcm1hbmNlXHJcblx0XHRcdFx0XHRcdCctd2Via2l0LXRyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCgwLDAsMCknLFxyXG5cdFx0XHRcdFx0XHQnLW1vei10cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoMCwwLDApJyxcclxuXHRcdFx0XHRcdFx0Jy1vLXRyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCgwLDAsMCknLFxyXG5cdFx0XHRcdFx0XHQndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKDAsMCwwKSdcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQuZWFjaChmdW5jdGlvbiAoKSB7ICQodGhpcykubGV0dGVyaW5nKCk7IH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQkdG9rZW5zID0gYmFzZS4kY3VycmVudFxyXG5cdFx0XHRcdC5maW5kKCdbY2xhc3NePVwiJyArIGJhc2Uub3B0aW9ucy50eXBlICsgJ1wiXScpXHJcblx0XHRcdFx0LmNzcygnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcclxuXHJcblx0XHRcdGlmIChpc0luRWZmZWN0KG9wdGlvbnMuaW4uZWZmZWN0KSkge1xyXG5cdFx0XHRcdCR0b2tlbnMuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGlzT3V0RWZmZWN0KG9wdGlvbnMuaW4uZWZmZWN0KSkge1xyXG5cdFx0XHRcdCR0b2tlbnMuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YmFzZS5jdXJyZW50SW5kZXggPSBpbmRleDtcclxuXHJcblx0XHRcdGFuaW1hdGVUb2tlbnMoJHRva2Vucywgb3B0aW9ucy5pbiwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGJhc2UudHJpZ2dlckV2ZW50KCdpbkFuaW1hdGlvbkVuZCcpO1xyXG5cdFx0XHRcdGlmIChvcHRpb25zLmluLmNhbGxiYWNrKSBvcHRpb25zLmluLmNhbGxiYWNrKCk7XHJcblx0XHRcdFx0aWYgKGNiKSBjYihiYXNlKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGJhc2Uub3V0ID0gZnVuY3Rpb24gKGNiKSB7XHJcblx0XHRcdHZhciAkZWxlbSA9IGJhc2UuJHRleHRzLmZpbmQoJzpudGgtY2hpbGQoJyArICgoYmFzZS5jdXJyZW50SW5kZXggfHwgMCkgKyAxKSArICcpJylcclxuXHRcdFx0XHQsICR0b2tlbnMgPSBiYXNlLiRjdXJyZW50LmZpbmQoJ1tjbGFzc149XCInICsgYmFzZS5vcHRpb25zLnR5cGUgKyAnXCJdJylcclxuXHRcdFx0XHQsIG9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB7fSwgYmFzZS5vcHRpb25zLCAkZWxlbS5sZW5ndGggPyBnZXREYXRhKCRlbGVtWzBdKSA6IHt9KTtcclxuXHJcblx0XHRcdGJhc2UudHJpZ2dlckV2ZW50KCdvdXRBbmltYXRpb25CZWdpbicpO1xyXG5cclxuXHRcdFx0YW5pbWF0ZVRva2VucygkdG9rZW5zLCBvcHRpb25zLm91dCwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdCRlbGVtLnJlbW92ZUNsYXNzKCdjdXJyZW50Jyk7XHJcblx0XHRcdFx0YmFzZS50cmlnZ2VyRXZlbnQoJ291dEFuaW1hdGlvbkVuZCcpO1xyXG5cdFx0XHRcdCRlbGVtZW50LnJlbW92ZUF0dHIoJ2RhdGEtYWN0aXZlJyk7XHJcblx0XHRcdFx0aWYgKG9wdGlvbnMub3V0LmNhbGxiYWNrKSBvcHRpb25zLm91dC5jYWxsYmFjaygpO1xyXG5cdFx0XHRcdGlmIChjYikgY2IoYmFzZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fTtcclxuXHJcblx0XHRiYXNlLnN0YXJ0ID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGJhc2UudHJpZ2dlckV2ZW50KCdzdGFydCcpO1xyXG5cclxuXHRcdFx0XHQoZnVuY3Rpb24gcnVuKGluZGV4KSB7XHJcblx0XHRcdFx0XHRiYXNlLmluKGluZGV4LCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdHZhciBsZW5ndGggPSBiYXNlLiR0ZXh0cy5jaGlsZHJlbigpLmxlbmd0aDtcclxuXHJcblx0XHRcdFx0XHRcdGluZGV4ICs9IDE7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIWJhc2Uub3B0aW9ucy5sb29wICYmIGluZGV4ID49IGxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChiYXNlLm9wdGlvbnMuY2FsbGJhY2spIGJhc2Uub3B0aW9ucy5jYWxsYmFjaygpO1xyXG5cdFx0XHRcdFx0XHRcdGJhc2UudHJpZ2dlckV2ZW50KCdlbmQnKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRpbmRleCA9IGluZGV4ICUgbGVuZ3RoO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRiYXNlLnRpbWVvdXRSdW4gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGJhc2Uub3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cnVuKGluZGV4KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH0sIGJhc2Uub3B0aW9ucy5taW5EaXNwbGF5VGltZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0oaW5kZXggfHwgMCkpO1xyXG5cdFx0XHR9LCBiYXNlLm9wdGlvbnMuaW5pdGlhbERlbGF5KTtcclxuXHRcdH07XHJcblxyXG5cdFx0YmFzZS5zdG9wID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAoYmFzZS50aW1lb3V0UnVuKSB7XHJcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChiYXNlLnRpbWVvdXRSdW4pO1xyXG5cdFx0XHRcdGJhc2UudGltZW91dFJ1biA9IG51bGw7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0YmFzZS5pbml0KCk7XHJcblx0fTtcclxuXHJcblx0JC5mbi50ZXh0aWxsYXRlID0gZnVuY3Rpb24gKHNldHRpbmdzLCBhcmdzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKVxyXG5cdFx0XHRcdCwgZGF0YSA9ICR0aGlzLmRhdGEoJ3RleHRpbGxhdGUnKVxyXG5cdFx0XHRcdCwgb3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHt9LCAkLmZuLnRleHRpbGxhdGUuZGVmYXVsdHMsIGdldERhdGEodGhpcyksIHR5cGVvZiBzZXR0aW5ncyA9PSAnb2JqZWN0JyAmJiBzZXR0aW5ncyk7XHJcblxyXG5cdFx0XHRpZiAoIWRhdGEpIHtcclxuXHRcdFx0XHQkdGhpcy5kYXRhKCd0ZXh0aWxsYXRlJywgKGRhdGEgPSBuZXcgVGV4dGlsbGF0ZSh0aGlzLCBvcHRpb25zKSkpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBzZXR0aW5ncyA9PSAnc3RyaW5nJykge1xyXG5cdFx0XHRcdGRhdGFbc2V0dGluZ3NdLmFwcGx5KGRhdGEsIFtdLmNvbmNhdChhcmdzKSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZGF0YS5zZXRPcHRpb25zLmNhbGwoZGF0YSwgb3B0aW9ucyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdCQuZm4udGV4dGlsbGF0ZS5kZWZhdWx0cyA9IHtcclxuXHRcdHNlbGVjdG9yOiAnLnRleHRzJyxcclxuXHRcdGxvb3A6IGZhbHNlLFxyXG5cdFx0bWluRGlzcGxheVRpbWU6IDIwMDAsXHJcblx0XHRpbml0aWFsRGVsYXk6IDAsXHJcblx0XHRpbjoge1xyXG5cdFx0XHRlZmZlY3Q6ICdmYWRlSW5MZWZ0QmlnJyxcclxuXHRcdFx0ZGVsYXlTY2FsZTogMS41LFxyXG5cdFx0XHRkZWxheTogNTAsXHJcblx0XHRcdHN5bmM6IGZhbHNlLFxyXG5cdFx0XHRyZXZlcnNlOiBmYWxzZSxcclxuXHRcdFx0c2h1ZmZsZTogZmFsc2UsXHJcblx0XHRcdGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7IH1cclxuXHRcdH0sXHJcblx0XHRvdXQ6IHtcclxuXHRcdFx0ZWZmZWN0OiAnaGluZ2UnLFxyXG5cdFx0XHRkZWxheVNjYWxlOiAxLjUsXHJcblx0XHRcdGRlbGF5OiA1MCxcclxuXHRcdFx0c3luYzogZmFsc2UsXHJcblx0XHRcdHJldmVyc2U6IGZhbHNlLFxyXG5cdFx0XHRzaHVmZmxlOiBmYWxzZSxcclxuXHRcdFx0Y2FsbGJhY2s6IGZ1bmN0aW9uICgpIHsgfVxyXG5cdFx0fSxcclxuXHRcdGF1dG9TdGFydDogdHJ1ZSxcclxuXHRcdGluRWZmZWN0czogW10sXHJcblx0XHRvdXRFZmZlY3RzOiBbJ2hpbmdlJ10sXHJcblx0XHRjYWxsYmFjazogZnVuY3Rpb24gKCkgeyB9LFxyXG5cdFx0dHlwZTogJ2NoYXInXHJcblx0fTtcclxuXHJcbn0oalF1ZXJ5KSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vL0xldHRlcmluZy5qcy8vLy8vLy8vLy8vLy8vXHJcbi8qZ2xvYmFsIGpRdWVyeSAqL1xyXG4vKiFcdFxyXG4qIExldHRlcmluZy5KUyAwLjYuMVxyXG4qXHJcbiogQ29weXJpZ2h0IDIwMTAsIERhdmUgUnVwZXJ0IGh0dHA6Ly9kYXZlcnVwZXJ0LmNvbVxyXG4qIFJlbGVhc2VkIHVuZGVyIHRoZSBXVEZQTCBsaWNlbnNlIFxyXG4qIGh0dHA6Ly9zYW0uem95Lm9yZy93dGZwbC9cclxuKlxyXG4qIFRoYW5rcyB0byBQYXVsIElyaXNoIC0gaHR0cDovL3BhdWxpcmlzaC5jb20gLSBmb3IgdGhlIGZlZWRiYWNrLlxyXG4qXHJcbiogRGF0ZTogTW9uIFNlcCAyMCAxNzoxNDowMCAyMDEwIC0wNjAwXHJcbiovXHJcbihmdW5jdGlvbiAoJCkge1xyXG5cdGZ1bmN0aW9uIGluamVjdG9yKHQsIHNwbGl0dGVyLCBrbGFzcywgYWZ0ZXIpIHtcclxuXHRcdHZhciBhID0gdC50ZXh0KCkuc3BsaXQoc3BsaXR0ZXIpLCBpbmplY3QgPSAnJztcclxuXHRcdGlmIChhLmxlbmd0aCkge1xyXG5cdFx0XHQkKGEpLmVhY2goZnVuY3Rpb24gKGksIGl0ZW0pIHtcclxuXHRcdFx0XHRpbmplY3QgKz0gJzxzcGFuIGNsYXNzPVwiJyArIGtsYXNzICsgKGkgKyAxKSArICdcIj4nICsgaXRlbSArICc8L3NwYW4+JyArIGFmdGVyO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dC5lbXB0eSgpLmFwcGVuZChpbmplY3QpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dmFyIG1ldGhvZHMgPSB7XHJcblx0XHRpbml0OiBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRpbmplY3RvcigkKHRoaXMpLCAnJywgJ2NoYXInLCAnJyk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0d29yZHM6IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGluamVjdG9yKCQodGhpcyksICcgJywgJ3dvcmQnLCAnICcpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdGxpbmVzOiBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR2YXIgciA9IFwiZWVmZWMzMDMwNzlhZDE3NDA1Yzg4OWUwOTJlMTA1YjBcIjtcclxuXHRcdFx0XHQvLyBCZWNhdXNlIGl0J3MgaGFyZCB0byBzcGxpdCBhIDxici8+IHRhZyBjb25zaXN0ZW50bHkgYWNyb3NzIGJyb3dzZXJzLFxyXG5cdFx0XHRcdC8vICgqYWhlbSogSUUgKmFoZW0qKSwgd2UgcmVwbGFjZXMgYWxsIDxici8+IGluc3RhbmNlcyB3aXRoIGFuIG1kNSBoYXNoIFxyXG5cdFx0XHRcdC8vIChvZiB0aGUgd29yZCBcInNwbGl0XCIpLiAgSWYgeW91J3JlIHRyeWluZyB0byB1c2UgdGhpcyBwbHVnaW4gb24gdGhhdCBcclxuXHRcdFx0XHQvLyBtZDUgaGFzaCBzdHJpbmcsIGl0IHdpbGwgZmFpbCBiZWNhdXNlIHlvdSdyZSBiZWluZyByaWRpY3Vsb3VzLlxyXG5cdFx0XHRcdGluamVjdG9yKCQodGhpcykuY2hpbGRyZW4oXCJiclwiKS5yZXBsYWNlV2l0aChyKS5lbmQoKSwgciwgJ2xpbmUnLCAnJyk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQkLmZuLmxldHRlcmluZyA9IGZ1bmN0aW9uIChtZXRob2QpIHtcclxuXHRcdC8vIE1ldGhvZCBjYWxsaW5nIGxvZ2ljXHJcblx0XHRpZiAobWV0aG9kICYmIG1ldGhvZHNbbWV0aG9kXSkge1xyXG5cdFx0XHRyZXR1cm4gbWV0aG9kc1ttZXRob2RdLmFwcGx5KHRoaXMsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XHJcblx0XHR9IGVsc2UgaWYgKG1ldGhvZCA9PT0gJ2xldHRlcnMnIHx8ICFtZXRob2QpIHtcclxuXHRcdFx0cmV0dXJuIG1ldGhvZHMuaW5pdC5hcHBseSh0aGlzLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkpOyAvLyBhbHdheXMgcGFzcyBhbiBhcnJheVxyXG5cdFx0fVxyXG5cdFx0JC5lcnJvcignTWV0aG9kICcgKyBtZXRob2QgKyAnIGRvZXMgbm90IGV4aXN0IG9uIGpRdWVyeS5sZXR0ZXJpbmcnKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblxyXG59KShqUXVlcnkpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy9EcmF3U1ZHLmpzLy8vLy8vLy8vLy8vLy9cclxuLyohIGpRdWVyeSBEcmF3U1ZHIHYxLjEuMCAoMjAxNi0xMC0wNSkgLSBnaXQuaW8vdkdGYTUgLSBDb3B5cmlnaHQgKGMpIDIwMTYgTGVvbmFyZG8gU2FudG9zIC0gTUlUIExpY2Vuc2UgKi9cclxuIWZ1bmN0aW9uICh0KSB7IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoW1wianF1ZXJ5XCJdLCB0KSA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cyA/IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGUsIG4pIHsgcmV0dXJuIHZvaWQgMCA9PT0gbiAmJiAobiA9IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHdpbmRvdyA/IHJlcXVpcmUoXCJqcXVlcnlcIikgOiByZXF1aXJlKFwianF1ZXJ5XCIpKGUpKSwgdChuKSwgbjsgfSA6IHQoalF1ZXJ5KTsgfShmdW5jdGlvbiAodCkgeyBcInVzZSBzdHJpY3RcIjsgdmFyIGUgPSBcImRyYXdzdmdcIiwgbiA9IHsgZHVyYXRpb246IDFlMywgc3RhZ2dlcjogMjAwLCBlYXNpbmc6IFwic3dpbmdcIiwgcmV2ZXJzZTogITEsIGNhbGxiYWNrOiB0Lm5vb3AgfSwgYSA9IGZ1bmN0aW9uICgpIHsgdmFyIGEgPSBmdW5jdGlvbiAoYSwgbykgeyB2YXIgaSA9IHRoaXMsIHIgPSB0LmV4dGVuZChuLCBvKTsgaS4kZWxtID0gdChhKSwgaS4kZWxtLmlzKFwic3ZnXCIpICYmIChpLm9wdGlvbnMgPSByLCBpLiRwYXRocyA9IGkuJGVsbS5maW5kKFwicGF0aFwiKSwgaS50b3RhbER1cmF0aW9uID0gci5kdXJhdGlvbiArIHIuc3RhZ2dlciAqIGkuJHBhdGhzLmxlbmd0aCwgaS5kdXJhdGlvbiA9IHIuZHVyYXRpb24gLyBpLnRvdGFsRHVyYXRpb24sIGkuJHBhdGhzLmVhY2goZnVuY3Rpb24gKHQsIGUpIHsgdmFyIG4gPSBlLmdldFRvdGFsTGVuZ3RoKCk7IGUucGF0aExlbiA9IG4sIGUuZGVsYXkgPSByLnN0YWdnZXIgKiB0IC8gaS50b3RhbER1cmF0aW9uLCBlLnN0eWxlLnN0cm9rZURhc2hhcnJheSA9IFtuLCBuXS5qb2luKFwiIFwiKSwgZS5zdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gbjsgfSksIGkuJGVsbS5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24gKHQsIG4pIHsgcmV0dXJuIFtuLCBlICsgXCItaW5pdGlhbGl6ZWRcIl0uam9pbihcIiBcIik7IH0pKTsgfTsgcmV0dXJuIGEucHJvdG90eXBlLmdldFZhbCA9IGZ1bmN0aW9uIChlLCBuKSB7IHJldHVybiAxIC0gdC5lYXNpbmdbbl0oZSwgZSwgMCwgMSwgMSk7IH0sIGEucHJvdG90eXBlLnByb2dyZXNzID0gZnVuY3Rpb24gKHQpIHsgdmFyIGUgPSB0aGlzLCBuID0gZS5vcHRpb25zLCBhID0gZS5kdXJhdGlvbjsgZS4kcGF0aHMuZWFjaChmdW5jdGlvbiAobywgaSkgeyB2YXIgciA9IGkuc3R5bGU7IGlmICgxID09PSB0KSByLnN0cm9rZURhc2hvZmZzZXQgPSAwOyBlbHNlIGlmICgwID09PSB0KSByLnN0cm9rZURhc2hvZmZzZXQgPSBpLnBhdGhMZW4gKyBcInB4XCI7IGVsc2UgaWYgKHQgPj0gaS5kZWxheSAmJiB0IDw9IGEgKyBpLmRlbGF5KSB7IHZhciBzID0gKHQgLSBpLmRlbGF5KSAvIGE7IHIuc3Ryb2tlRGFzaG9mZnNldCA9IGUuZ2V0VmFsKHMsIG4uZWFzaW5nKSAqIGkucGF0aExlbiAqIChuLnJldmVyc2UgPyAtMSA6IDEpICsgXCJweFwiOyB9IH0pOyB9LCBhLnByb3RvdHlwZS5hbmltYXRlID0gZnVuY3Rpb24gKCkgeyB2YXIgbiA9IHRoaXM7IG4uJGVsbS5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24gKHQsIG4pIHsgcmV0dXJuIFtuLCBlICsgXCItYW5pbWF0aW5nXCJdLmpvaW4oXCIgXCIpOyB9KSwgdCh7IGxlbjogMCB9KS5hbmltYXRlKHsgbGVuOiAxIH0sIHsgZWFzaW5nOiBcImxpbmVhclwiLCBkdXJhdGlvbjogbi50b3RhbER1cmF0aW9uLCBzdGVwOiBmdW5jdGlvbiAodCwgZSkgeyBuLnByb2dyZXNzLmNhbGwobiwgdCAvIGUuZW5kKTsgfSwgY29tcGxldGU6IGZ1bmN0aW9uICgpIHsgbi5vcHRpb25zLmNhbGxiYWNrLmNhbGwodGhpcyksIG4uJGVsbS5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24gKHQsIG4pIHsgcmV0dXJuIG4ucmVwbGFjZShlICsgXCItYW5pbWF0aW5nXCIsIFwiXCIpOyB9KTsgfSB9KTsgfSwgYTsgfSgpOyB0LmZuW2VdID0gZnVuY3Rpb24gKG4sIG8pIHsgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7IHZhciBpID0gdC5kYXRhKHRoaXMsIGUpOyBpICYmIFwiXCIgKyBuID09PSBuICYmIGlbbl0gPyBpW25dKG8pIDogdC5kYXRhKHRoaXMsIGUsIG5ldyBhKHRoaXMsIG4pKTsgfSk7IH07IH0pO1xyXG4vKiBlc2xpbnQtZW5hYmxlICovIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==