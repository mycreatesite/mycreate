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


    if (contentsHeight - (scroll + windowHeight) < 300) {
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

  rollBack.on('click', function () {
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
  $('.navHeader a[href^="#"]').on('click', function () {
    var href = $(this).attr('href');
    var target = $(href == '#' || href === '' ? 'html' : href);
    var position = target.offset().top;
    console.log(position);

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
  $('#spNavHeader a[href^="#"]').on('click', function () {
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

  if (url.includes("?id=")) {
    var idName = url.split("?id=");
    var target = $("#".concat(idName[idName.length - 1]));

    if (target.length) {
      var pos = target.offset().top + fixPx;

      if (navigator.userAgent.indexOf('iPhone') > 0 && !navigator.userAgent.includes('iPad') || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
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
// if (navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge\/12\./)) {
// 	$('body').on("mousewheel", () => {
// 		event.preventDefault();
// 		const wd = event.wheelDelta;
// 		const csp = window.pageYOffset;
// 		window.scrollTo(0, csp - wd);
// 	});
// }
////////////scroll control for fuckin'IE11////////////
////////////mouse stalker////////////

$(function () {
  var cursor = document.getElementById('cursor');
  var stalker = document.getElementById('stalker');
  document.addEventListener('mousemove', translate);

  function translate(e) {
    cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
  }

  var linkEl = document.querySelectorAll('a, #myslider .nav, .mouseStalker');

  for (var i = 0; i < linkEl.length; i++) {
    linkEl[i].addEventListener('mouseover', function () {
      cursor.classList.add('is-hovered');
    });
    linkEl[i].addEventListener('mouseout', function () {
      cursor.classList.remove('is-hovered');
    });
  }
}); ////////////mouse stalker////////////
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2RlYm91bmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3Rocm90dGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9OdW1iZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi93b3JrL2pzL2NvbW1vbi9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vd29yay9qcy9tb2R1bGUvYm9keVNjcm9sbFByZXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vd29yay9qcy9tb2R1bGUvY29tbW9uLnBsdWdpbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJib2R5IiwiJCIsImFjY2Vzc0ZsYWciLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJteWNMb2dvIiwiZHJhd3N2ZyIsImR1cmF0aW9uIiwic3RhZ2dlciIsImVhc2luZyIsImNhbGxiYWNrIiwiYWRkQ2xhc3MiLCJoYXNDbGFzcyIsInNldFRpbWVvdXQiLCJjc3MiLCJjbG9uZU5hdiIsImNsb25lIiwiYXR0ciIsImluc2VydEFmdGVyIiwibG9nb01vdmUiLCJzaG93Q2xhc3MiLCJmb3JTaG93MSIsImZvclNob3cyIiwiZm9yU2hvdzMiLCJmb3JTaG93NCIsImZvclNob3dzIiwiaGVhZGluZyIsImNvbW1lbnRBbmltIiwicm9sbEJhY2siLCJtb2dpRm9vdGVyIiwiY29udGVudHNIZWlnaHQiLCJkb2N1bWVudCIsImhlaWdodCIsIndpbmRvdyIsIm9uIiwidGhyb3R0bGUiLCJ3aW5kb3dIZWlnaHQiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJyZW1vdmVDbGFzcyIsImxlbiIsImxlbmd0aCIsImoiLCJlYWNoIiwiaSIsImZvclNob3dQb2ludCIsIm9mZnNldCIsInRvcCIsImRlbGF5VGltZSIsImRlbGF5IiwicXVldWUiLCJoZWFkaW5nUG9pbnQiLCJ0ZXh0aWxsYXRlIiwiaW4iLCJlZmZlY3QiLCJzaHVmZmxlIiwiZGVsYXlTY2FsZSIsIm15Q29tbWVudFBvaW50IiwiZmFkZUluIiwiZmFkZU91dCIsInNob3ciLCJhbmltYXRlIiwiaGFtYkJ0bnMiLCJoYW1iQnRuMSIsImhhbWJCdG4yIiwiaGFtYkJ0bjMiLCJzcE5hdiIsInNwTmF2TGlzdHMiLCJzcE5hdkxpbmsiLCJmYWRlVGltZSIsInRvZ2dsZU5hdiIsImJvZHlTY3JvbGxQcmV2ZW50IiwiaGlkZSIsInRvZ2dsZUNsYXNzIiwiaHJlZiIsInRhcmdldCIsInBvc2l0aW9uIiwiY29uc29sZSIsImxvZyIsImZpeFB4IiwidXJsIiwibG9jYXRpb24iLCJpbmNsdWRlcyIsImlkTmFtZSIsInNwbGl0IiwicG9zIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaW5kZXhPZiIsInByb3AiLCJwYXJlbnRzIiwiY3Vyc29yIiwiZ2V0RWxlbWVudEJ5SWQiLCJzdGFsa2VyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRyYW5zbGF0ZSIsImUiLCJzdHlsZSIsInRyYW5zZm9ybSIsImNsaWVudFgiLCJjbGllbnRZIiwibGlua0VsIiwicXVlcnlTZWxlY3RvckFsbCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInRyaWdnZXIiLCJmbGFnIiwic2Nyb2xsUG9zaXRpb24iLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInVhIiwidG9Mb3dlckNhc2UiLCJpc2lPUyIsInNjcm9sbEJhcldpZHRoIiwiaW5uZXJXaWR0aCIsImNsaWVudFdpZHRoIiwicGFkZGluZ1JpZ2h0IiwicGFnZVlPZmZzZXQiLCJ3aWR0aCIsIm92ZXJmbG93IiwicGFyc2VJbnQiLCJyZXBsYWNlIiwic2Nyb2xsVG8iLCJpc0luRWZmZWN0IiwidGVzdCIsImluQXJyYXkiLCJmbiIsImRlZmF1bHRzIiwiaW5FZmZlY3RzIiwiaXNPdXRFZmZlY3QiLCJvdXRFZmZlY3RzIiwic3RyaW5nVG9Cb29sZWFuIiwic3RyIiwiZ2V0RGF0YSIsIm5vZGUiLCJhdHRycyIsImF0dHJpYnV0ZXMiLCJkYXRhIiwibm9kZU5hbWUiLCJub2RlVmFsdWUiLCJvdXQiLCJvIiwieCIsIk1hdGgiLCJyYW5kb20iLCIkdCIsImNiIiwib25lIiwiYW5pbWF0ZVRva2VucyIsIiR0b2tlbnMiLCJvcHRpb25zIiwidGhhdCIsImNvdW50IiwicmV2ZXJzZSIsInRvQXJyYXkiLCJ0IiwiJHRva2VuIiwiY29tcGxldGUiLCJzeW5jIiwidGV4dCIsIlRleHRpbGxhdGUiLCJlbGVtZW50IiwiYmFzZSIsIiRlbGVtZW50IiwiaW5pdCIsIiR0ZXh0cyIsImZpbmQiLCJzZWxlY3RvciIsImh0bWwiLCIkY3VycmVudCIsInByZXBlbmRUbyIsInNldE9wdGlvbnMiLCJ0aW1lb3V0UnVuIiwiYXV0b1N0YXJ0Iiwic3RhcnQiLCJpbml0aWFsRGVsYXkiLCJ0cmlnZ2VyRXZlbnQiLCJuYW1lIiwiRXZlbnQiLCJpbmRleCIsIiRlbGVtIiwiZXh0ZW5kIiwibGV0dGVyaW5nIiwidHlwZSIsImN1cnJlbnRJbmRleCIsInJlbW92ZUF0dHIiLCJydW4iLCJjaGlsZHJlbiIsImxvb3AiLCJtaW5EaXNwbGF5VGltZSIsInN0b3AiLCJjbGVhckludGVydmFsIiwic2V0dGluZ3MiLCJhcmdzIiwiJHRoaXMiLCJhcHBseSIsImNvbmNhdCIsImNhbGwiLCJqUXVlcnkiLCJpbmplY3RvciIsInNwbGl0dGVyIiwia2xhc3MiLCJhZnRlciIsImEiLCJpbmplY3QiLCJpdGVtIiwiZW1wdHkiLCJhcHBlbmQiLCJtZXRob2RzIiwid29yZHMiLCJsaW5lcyIsInIiLCJyZXBsYWNlV2l0aCIsImVuZCIsIm1ldGhvZCIsInNsaWNlIiwiYXJndW1lbnRzIiwiZXJyb3IiLCJkZWZpbmUiLCJuIiwibm9vcCIsIiRlbG0iLCJpcyIsIiRwYXRocyIsInRvdGFsRHVyYXRpb24iLCJnZXRUb3RhbExlbmd0aCIsInBhdGhMZW4iLCJzdHJva2VEYXNoYXJyYXkiLCJqb2luIiwic3Ryb2tlRGFzaG9mZnNldCIsInByb3RvdHlwZSIsImdldFZhbCIsInByb2dyZXNzIiwicyIsInN0ZXAiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hB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LENBQVYsRUFBYWdFLENBQWIsRUFBZ0I7QUFBRSxtQkFBT0EsQ0FBQyxDQUFDbEcsT0FBRixDQUFVekIsQ0FBQyxHQUFHLFlBQWQsRUFBNEIsRUFBNUIsQ0FBUDtBQUF5QyxXQUFoRixDQUEvQjtBQUFtSDtBQUFwUCxPQUFsQyxDQUFuRjtBQUErVyxLQUEzM0IsRUFBNjNCMkcsQ0FBcDRCO0FBQXc0QixHQUF6NkMsRUFBNUc7O0FBQXloRGhELEdBQUMsQ0FBQzdCLEVBQUYsQ0FBSzlCLENBQUwsSUFBVSxVQUFVMkgsQ0FBVixFQUFhOUUsQ0FBYixFQUFnQjtBQUFFLFdBQU8sS0FBS2xHLElBQUwsQ0FBVSxZQUFZO0FBQUUsVUFBSUMsQ0FBQyxHQUFHK0csQ0FBQyxDQUFDbEIsSUFBRixDQUFPLElBQVAsRUFBYXpDLENBQWIsQ0FBUjtBQUF5QnBELE9BQUMsSUFBSSxLQUFLK0ssQ0FBTCxLQUFXQSxDQUFoQixJQUFxQi9LLENBQUMsQ0FBQytLLENBQUQsQ0FBdEIsR0FBNEIvSyxDQUFDLENBQUMrSyxDQUFELENBQUQsQ0FBSzlFLENBQUwsQ0FBNUIsR0FBc0NjLENBQUMsQ0FBQ2xCLElBQUYsQ0FBTyxJQUFQLEVBQWF6QyxDQUFiLEVBQWdCLElBQUkyRyxDQUFKLENBQU0sSUFBTixFQUFZZ0IsQ0FBWixDQUFoQixDQUF0QztBQUF3RSxLQUF6SCxDQUFQO0FBQW9JLEdBQWhLO0FBQW1LLENBQTcvRCxDQUFEO0FBQ0EsbUI7Ozs7Ozs7Ozs7O0FDM1dBLHdCIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vd29yay9qcy9jb21tb24vY29tbW9uLmpzXCIpO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG4iLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBub3cgPSByZXF1aXJlKCcuL25vdycpLFxuICAgIHRvTnVtYmVyID0gcmVxdWlyZSgnLi90b051bWJlcicpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgdGltZVdhaXRpbmcgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG5cbiAgICByZXR1cm4gbWF4aW5nXG4gICAgICA/IG5hdGl2ZU1pbih0aW1lV2FpdGluZywgbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZva2UpXG4gICAgICA6IHRpbWVXYWl0aW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lO1xuXG4gICAgLy8gRWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwsIGFjdGl2aXR5IGhhcyBzdG9wcGVkIGFuZCB3ZSdyZSBhdCB0aGVcbiAgICAvLyB0cmFpbGluZyBlZGdlLCB0aGUgc3lzdGVtIHRpbWUgaGFzIGdvbmUgYmFja3dhcmRzIGFuZCB3ZSdyZSB0cmVhdGluZ1xuICAgIC8vIGl0IGFzIHRoZSB0cmFpbGluZyBlZGdlLCBvciB3ZSd2ZSBoaXQgdGhlIGBtYXhXYWl0YCBsaW1pdC5cbiAgICByZXR1cm4gKGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8ICh0aW1lU2luY2VMYXN0Q2FsbCA+PSB3YWl0KSB8fFxuICAgICAgKHRpbWVTaW5jZUxhc3RDYWxsIDwgMCkgfHwgKG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVyRXhwaXJlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfVxuICAgIC8vIFJlc3RhcnQgdGhlIHRpbWVyLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgcmVtYWluaW5nV2FpdCh0aW1lKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFpbGluZ0VkZ2UodGltZSkge1xuICAgIHRpbWVySWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBPbmx5IGludm9rZSBpZiB3ZSBoYXZlIGBsYXN0QXJnc2Agd2hpY2ggbWVhbnMgYGZ1bmNgIGhhcyBiZWVuXG4gICAgLy8gZGVib3VuY2VkIGF0IGxlYXN0IG9uY2UuXG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gICAgbGFzdEludm9rZVRpbWUgPSAwO1xuICAgIGxhc3RBcmdzID0gbGFzdENhbGxUaW1lID0gbGFzdFRoaXMgPSB0aW1lcklkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgcmV0dXJuIHRpbWVySWQgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRyYWlsaW5nRWRnZShub3coKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKSxcbiAgICAgICAgaXNJbnZva2luZyA9IHNob3VsZEludm9rZSh0aW1lKTtcblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lO1xuXG4gICAgaWYgKGlzSW52b2tpbmcpIHtcbiAgICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdFZGdlKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW5nKSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnZvY2F0aW9ucyBpbiBhIHRpZ2h0IGxvb3AuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZTtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbm93O1xuIiwidmFyIGRlYm91bmNlID0gcmVxdWlyZSgnLi9kZWJvdW5jZScpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKipcbiAqIENyZWF0ZXMgYSB0aHJvdHRsZWQgZnVuY3Rpb24gdGhhdCBvbmx5IGludm9rZXMgYGZ1bmNgIGF0IG1vc3Qgb25jZSBwZXJcbiAqIGV2ZXJ5IGB3YWl0YCBtaWxsaXNlY29uZHMuIFRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgXG4gKiBtZXRob2QgdG8gY2FuY2VsIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvXG4gKiBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS4gUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2BcbiAqIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZSBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGBcbiAqIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZCB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGVcbiAqIHRocm90dGxlZCBmdW5jdGlvbi4gU3Vic2VxdWVudCBjYWxscyB0byB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uIHJldHVybiB0aGVcbiAqIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2AgaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIHRocm90dGxlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy50aHJvdHRsZWAgYW5kIGBfLmRlYm91bmNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHRocm90dGxlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRocm90dGxlIGludm9jYXRpb25zIHRvLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHRocm90dGxlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgZXhjZXNzaXZlbHkgdXBkYXRpbmcgdGhlIHBvc2l0aW9uIHdoaWxlIHNjcm9sbGluZy5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdzY3JvbGwnLCBfLnRocm90dGxlKHVwZGF0ZVBvc2l0aW9uLCAxMDApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHJlbmV3VG9rZW5gIHdoZW4gdGhlIGNsaWNrIGV2ZW50IGlzIGZpcmVkLCBidXQgbm90IG1vcmUgdGhhbiBvbmNlIGV2ZXJ5IDUgbWludXRlcy5cbiAqIHZhciB0aHJvdHRsZWQgPSBfLnRocm90dGxlKHJlbmV3VG9rZW4sIDMwMDAwMCwgeyAndHJhaWxpbmcnOiBmYWxzZSB9KTtcbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCB0aHJvdHRsZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgdGhyb3R0bGVkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCB0aHJvdHRsZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGVhZGluZyA9IHRydWUsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICdsZWFkaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLmxlYWRpbmcgOiBsZWFkaW5nO1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cbiAgcmV0dXJuIGRlYm91bmNlKGZ1bmMsIHdhaXQsIHtcbiAgICAnbGVhZGluZyc6IGxlYWRpbmcsXG4gICAgJ21heFdhaXQnOiB3YWl0LFxuICAgICd0cmFpbGluZyc6IHRyYWlsaW5nXG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRocm90dGxlO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9OdW1iZXI7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgJy4uL21vZHVsZS9jb21tb24ucGx1Z2luJztcclxuaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC90aHJvdHRsZSc7XHJcbmltcG9ydCBib2R5U2Nyb2xsUHJldmVudCBmcm9tICcuLi9tb2R1bGUvYm9keVNjcm9sbFByZXZlbnQnO1xyXG5cclxuLy8vLy8vLy8vLy8vZ2xvYmFsIHZhcmlhYmxlLy8vLy8vLy8vLy8vXHJcblxyXG5jb25zdCBib2R5ID0gJCgnYm9keScpO1xyXG5jb25zdCBhY2Nlc3NGbGFnID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzZWQnKTtcclxuXHJcbi8vLy8vLy8vLy8vL0RyYXcgU1ZHLy8vLy8vLy8vLy8vXHJcbigoKSA9PiB7XHJcblx0Y29uc3QgbXljTG9nbyA9ICQoXCIjbXljTG9nb1wiKS5kcmF3c3ZnKHtcclxuXHRcdGR1cmF0aW9uOiAxMDAwLFxyXG5cdFx0c3RhZ2dlcjogODAsXHJcblx0XHRlYXNpbmc6IFwic3dpbmdcIixcclxuXHRcdGNhbGxiYWNrKCkge1xyXG5cdFx0XHQkKFwiI215Y0xvZ28gZ1wiKS5hZGRDbGFzcyhcImZpbGxBbmltXCIpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdGlmICghYWNjZXNzRmxhZyAmJiBib2R5Lmhhc0NsYXNzKCdob21lJykpIHtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRteWNMb2dvLmNzcyhcIm9wYWNpdHlcIiwgMSkuZHJhd3N2ZyhcImFuaW1hdGVcIik7XHJcblx0XHR9LCAxODAwKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0bXljTG9nby5jc3MoXCJvcGFjaXR5XCIsIDEpLmRyYXdzdmcoXCJhbmltYXRlXCIpO1xyXG5cdH1cclxufSkoKTtcclxuXHJcbi8vLy8vLy8vLy8vL3Njcm9sbEV2ZW50c19zdGFydC8vLy8vLy8vLy8vL1xyXG4kKCgpID0+IHtcclxuXHJcblx0Ly9uYXZIZWFkZXJTaG93X3ZhcmlhYmxlc1xyXG5cdGNvbnN0IGNsb25lTmF2ID0gJCgnI25hdkhlYWRlcicpLmNsb25lKCkuYXR0cignaWQnLCAnY2xvbmVOYXYnKS5hZGRDbGFzcygnY2xvbmVOYXYnKS5pbnNlcnRBZnRlcignI25hdkhlYWRlcicpO1xyXG5cdGNvbnN0IGxvZ29Nb3ZlID0gJCgnLmxvZ29Gb2xsb3c6bGFzdCcpO1xyXG5cdGNvbnN0IHNob3dDbGFzcyA9ICdpc1Nob3cnO1xyXG5cdC8vc2hvd1VwX3ZhcmlhYmxlc1xyXG5cdGNvbnN0IGZvclNob3cxID0gJCgnLmZvclNob3cxJyk7XHJcblx0Y29uc3QgZm9yU2hvdzIgPSAkKCcuZm9yU2hvdzInKTtcclxuXHRjb25zdCBmb3JTaG93MyA9ICQoJy5mb3JTaG93MycpO1xyXG5cdGNvbnN0IGZvclNob3c0ID0gJCgnLmZvclNob3c0Jyk7XHJcblx0Y29uc3QgZm9yU2hvd3MgPSBbZm9yU2hvdzEsIGZvclNob3cyLCBmb3JTaG93MywgZm9yU2hvdzRdO1xyXG5cdC8vdGV4dGlsbGF0ZV92YXJpYWJsZXNcclxuXHRjb25zdCBoZWFkaW5nID0gJCgnLmhlYWRpbmcnKTtcclxuXHQvL2NvbW1lbnRBbmltX3ZhcmlhYmxlc1xyXG5cdGNvbnN0IGNvbW1lbnRBbmltID0gJCgnI2NvbW1lbnRBbmltJyk7XHJcblx0Ly9yb2xsQmFja192YXJpYWJsZXNcclxuXHRjb25zdCByb2xsQmFjayA9ICQoJyNyb2xsQmFjaycpO1xyXG5cdC8vaGVsbG9Nb2dpX3ZhcmlhYmxlc1xyXG5cdGNvbnN0IG1vZ2lGb290ZXIgPSAkKCcjbW9naUZvb3RlcicpO1xyXG5cdGNvbnN0IGNvbnRlbnRzSGVpZ2h0ID0gJChkb2N1bWVudCkuaGVpZ2h0KCk7XHJcblxyXG5cdC8vLy9zY3JvbGxFdmVudHMvLy8vXHJcblx0JCh3aW5kb3cpLm9uKCdzY3JvbGwnLCB0aHJvdHRsZShmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0Ly9jb21tb25fdmFyaWFibGVzXHJcblx0XHRjb25zdCB3aW5kb3dIZWlnaHQgPSAkKHRoaXMpLmhlaWdodCgpO1xyXG5cdFx0Y29uc3Qgc2Nyb2xsID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuXHJcblx0XHQvL25hdkhlYWRlclNob3dfZnVuY1xyXG5cdFx0aWYgKHNjcm9sbCA+IDcwMCkge1xyXG5cdFx0XHRsb2dvTW92ZS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XHJcblx0XHRcdGNsb25lTmF2LmFkZENsYXNzKHNob3dDbGFzcyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjbG9uZU5hdi5yZW1vdmVDbGFzcyhzaG93Q2xhc3MpO1xyXG5cdFx0fVxyXG5cdFx0Ly9zaG93VXBfZnVuY1xyXG5cdFx0Y29uc3QgbGVuID0gZm9yU2hvd3MubGVuZ3RoO1xyXG5cdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBsZW47IGorKykge1xyXG5cdFx0XHRmb3JTaG93c1tqXS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcblx0XHRcdFx0Y29uc3QgZm9yU2hvd1BvaW50ID0gJCh0aGlzKS5vZmZzZXQoKS50b3AgLSAzMDtcclxuXHRcdFx0XHRjb25zdCBkZWxheVRpbWUgPSA5MDtcclxuXHRcdFx0XHRpZiAoc2Nyb2xsID4gZm9yU2hvd1BvaW50IC0gd2luZG93SGVpZ2h0KSB7XHJcblx0XHRcdFx0XHQkKHRoaXMpLmRlbGF5KGkgKiBkZWxheVRpbWUpLnF1ZXVlKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnc2hvd1VwJyk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0Ly90ZXh0aWxsYXRlX2Z1bmNcclxuXHRcdGhlYWRpbmcuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGNvbnN0IGhlYWRpbmdQb2ludCA9ICQodGhpcykub2Zmc2V0KCkudG9wO1xyXG5cdFx0XHRpZiAoc2Nyb2xsID4gaGVhZGluZ1BvaW50IC0gd2luZG93SGVpZ2h0KSB7XHJcblx0XHRcdFx0JCh0aGlzKS5jc3MoJ29wYWNpdHknLCAxKS50ZXh0aWxsYXRlKHtcclxuXHRcdFx0XHRcdGluOiB7XHJcblx0XHRcdFx0XHRcdGVmZmVjdDogJ2ZhZGVJblVwJyxcclxuXHRcdFx0XHRcdFx0c2h1ZmZsZTogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0ZGVsYXk6IDIwLFxyXG5cdFx0XHRcdFx0XHRkZWxheVNjYWxlOiAzLFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdC8vY29tbWVudEFuaW1fZnVuY1xyXG5cdFx0aWYgKGNvbW1lbnRBbmltLmxlbmd0aCkge1xyXG5cdFx0XHRjb25zdCBteUNvbW1lbnRQb2ludCA9IGNvbW1lbnRBbmltLm9mZnNldCgpLnRvcDtcclxuXHRcdFx0aWYgKHNjcm9sbCA+IG15Q29tbWVudFBvaW50IC0gd2luZG93SGVpZ2h0KSB7XHJcblx0XHRcdFx0Y29tbWVudEFuaW0uY3NzKCdvcGFjaXR5JywgMSkuYWRkQ2xhc3MoJ2FuaW1hdGVkIHpvb21JbkRvd24nKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ly9yb2xsQmFja19mdW5jXHJcblx0XHRpZiAoc2Nyb2xsID4gNzAwKSB7XHJcblx0XHRcdHJvbGxCYWNrLmZhZGVJbig1MDApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cm9sbEJhY2suZmFkZU91dCg1MDApO1xyXG5cdFx0fVxyXG5cdFx0Ly9oZWxsb01vZ2lfZnVuY1xyXG5cdFx0aWYgKGNvbnRlbnRzSGVpZ2h0IC0gKHNjcm9sbCArIHdpbmRvd0hlaWdodCkgPCAzMDApIHtcclxuXHRcdFx0bW9naUZvb3Rlci5zaG93KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdoZWxsb01vZ2knKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAobW9naUZvb3Rlci5oYXNDbGFzcygnaGVsbG9Nb2dpJykpIHtcclxuXHRcdFx0XHRtb2dpRm9vdGVyLmZhZGVPdXQoMjAwLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdoZWxsb01vZ2knKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHR9LCAxNTApKTtcclxuXHQvLy8vc2Nyb2xsRXZlbnRzLy8vL1xyXG5cclxuXHQvLy8vb3B0aW9uYWxfZnVuYy8vLy9cclxuXHQvL3JvbGxCYWNrQ2xpY2tlZFxyXG5cdHJvbGxCYWNrLm9uKCdjbGljaycsKCkgPT4ge1xyXG5cdFx0JCgnYm9keSxodG1sJykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCA3MDAsICdlYXNlSW5PdXRRdWFydCcpO1xyXG5cdH0pO1xyXG5cdC8vLy9vcHRpb25hbF9mdW5jLy8vL1xyXG5cclxufSk7XHJcbi8vLy8vLy8vLy8vL3Njcm9sbEV2ZW50c19lbmQvLy8vLy8vLy8vLy9cclxuXHJcbi8vLy8vLy8vLy8vL3NwTmF2SGVhZGVyLy8vLy8vLy8vLy8vXHJcbiQoKCkgPT4ge1xyXG5cdGNvbnN0IGhhbWJCdG5zID0gJCgnI2hhbWJCdG4nKTtcclxuXHRjb25zdCBoYW1iQnRuMSA9ICQoJy5oYW1iQnRuMScpO1xyXG5cdGNvbnN0IGhhbWJCdG4yID0gJCgnLmhhbWJCdG4yJyk7XHJcblx0Y29uc3QgaGFtYkJ0bjMgPSAkKCcuaGFtYkJ0bjMnKTtcclxuXHRjb25zdCBzcE5hdiA9ICQoJyNzcE5hdkhlYWRlcicpO1xyXG5cdGNvbnN0IHNwTmF2TGlzdHMgPSAkKCcuc3BOYXZIZWFkZXIgdWwgbGknKTtcclxuXHRjb25zdCBzcE5hdkxpbmsgPSAkKCcjc3BOYXZIZWFkZXIgbGkgYScpO1xyXG5cdGNvbnN0IGRlbGF5VGltZSA9IDgwO1xyXG5cdGNvbnN0IGZhZGVUaW1lID0gMjAwO1xyXG5cdGhhbWJCdG5zLm9uKCdjbGljaycsICgpID0+IHtcclxuXHRcdHRvZ2dsZU5hdigpO1xyXG5cdFx0aWYgKHNwTmF2TGlzdHMuY3NzKCdkaXNwbGF5JykgPT0gJ2xpc3QtaXRlbScpIHtcclxuXHRcdFx0c3BOYXZMaXN0cy5mYWRlT3V0KGZhZGVUaW1lKTtcclxuXHRcdFx0Ym9keVNjcm9sbFByZXZlbnQoZmFsc2UpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ym9keVNjcm9sbFByZXZlbnQodHJ1ZSk7XHJcblx0XHRcdHNwTmF2TGlzdHMuZWFjaChmdW5jdGlvbiAoaSkge1xyXG5cdFx0XHRcdCQodGhpcykuZGVsYXkoaSAqIGRlbGF5VGltZSkuZmFkZUluKGZhZGVUaW1lKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0c3BOYXZMaW5rLm9uKCdjbGljaycsICgpID0+IHtcclxuXHRcdGJvZHlTY3JvbGxQcmV2ZW50KGZhbHNlKTtcclxuXHRcdHRvZ2dsZU5hdigpO1xyXG5cdFx0c3BOYXZMaXN0cy5oaWRlKCk7XHJcblx0fSk7XHJcblx0ZnVuY3Rpb24gdG9nZ2xlTmF2KCkge1xyXG5cdFx0aWYgKCFzcE5hdi5oYXNDbGFzcygnaXMtc2hvdycpKSB7XHJcblx0XHRcdHNwTmF2LmZhZGVJbihmYWRlVGltZSkuYWRkQ2xhc3MoJ2lzLXNob3cnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNwTmF2LmZhZGVPdXQoZmFkZVRpbWUsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy1zaG93Jyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGhhbWJCdG4xLnRvZ2dsZUNsYXNzKCdoYW1iTW92ZTEnKTtcclxuXHRcdGhhbWJCdG4yLnRvZ2dsZUNsYXNzKCdoYW1iTW92ZTInKTtcclxuXHRcdGhhbWJCdG4zLnRvZ2dsZUNsYXNzKCdoYW1iTW92ZTMnKTtcclxuXHR9XHJcbn0pO1xyXG4vLy8vLy8vLy8vLy9zcE5hdkhlYWRlci8vLy8vLy8vLy8vL1xyXG4vL+KGkWNhbiBub3QgcmVwbGFjZeKGky8vXHJcbi8vLy8vLy8vLy8vL3Ntb290aFNjcm9sbC8vLy8vLy8vLy8vL1xyXG4kKCgpID0+IHtcclxuXHQkKCcubmF2SGVhZGVyIGFbaHJlZl49XCIjXCJdJykub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCBocmVmID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcblx0XHRjb25zdCB0YXJnZXQgPSAkKGhyZWYgPT0gJyMnIHx8IGhyZWYgPT09ICcnID8gJ2h0bWwnIDogaHJlZik7XHJcblx0XHRjb25zdCBwb3NpdGlvbiA9IHRhcmdldC5vZmZzZXQoKS50b3A7XHJcblx0XHRjb25zb2xlLmxvZyhwb3NpdGlvbik7XHJcblx0XHRpZiAoaHJlZiA9PT0gJyNjb250YWN0Jykge1xyXG5cdFx0XHQkKCdodG1sLGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiBwb3NpdGlvbiB9LCA3MDAsICdlYXNlSW5PdXRRdWFydCcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogcG9zaXRpb24gLSA1MCB9LCA3MDAsICdlYXNlSW5PdXRRdWFydCcpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cdCQoJyNzcE5hdkhlYWRlciBhW2hyZWZePVwiI1wiXScpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgaHJlZiA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG5cdFx0Y29uc3QgdGFyZ2V0ID0gJChocmVmID09ICcjJyB8fCBocmVmID09PSAnJyA/ICdodG1sJyA6IGhyZWYpO1xyXG5cdFx0Y29uc3QgcG9zaXRpb24gPSB0YXJnZXQub2Zmc2V0KCkudG9wO1xyXG5cdFx0aWYgKGhyZWYgPT09ICcjY29udGFjdCcpIHtcclxuXHRcdFx0JCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogcG9zaXRpb24gKyAxMDAgfSwgNzAwLCAnZWFzZUluT3V0UXVhcnQnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCQoJ2h0bWwsYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IHBvc2l0aW9uICsgNTAgfSwgNzAwLCAnZWFzZUluT3V0UXVhcnQnKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxufSk7XHJcbi8vLy8vLy8vLy8vL3Ntb290aFNjcm9sbC8vLy8vLy8vLy8vL1xyXG5cclxuLy8vLy8vLy8vLy8vb3RoZXJwYWdlIHRvIGZyb250cGFnZS8vLy8vLy8vLy8vL1xyXG4kKHdpbmRvdykub24oJ2xvYWQnLCAoKSA9PiB7XHJcblx0Y29uc3QgZml4UHggPSAtNTA7XHJcblx0Y29uc3QgdXJsID0gJChsb2NhdGlvbikuYXR0cignaHJlZicpO1xyXG5cdGlmICh1cmwuaW5jbHVkZXMoXCI/aWQ9XCIpKSB7XHJcblx0XHRjb25zdCBpZE5hbWUgPSB1cmwuc3BsaXQoXCI/aWQ9XCIpO1xyXG5cdFx0Y29uc3QgdGFyZ2V0ID0gJChgIyR7aWROYW1lW2lkTmFtZS5sZW5ndGggLSAxXX1gKTtcclxuXHRcdGlmICh0YXJnZXQubGVuZ3RoKSB7XHJcblx0XHRcdGNvbnN0IHBvcyA9IHRhcmdldC5vZmZzZXQoKS50b3AgKyBmaXhQeDtcclxuXHRcdFx0aWYgKChuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQaG9uZScpID4gMCAmJiAhbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcygnaVBhZCcpKSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQb2QnKSA+IDAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdBbmRyb2lkJykgPiAwKSB7XHJcblx0XHRcdFx0aWYgKHRhcmdldC5wcm9wKCdpZCcpID09IFwiY29udGFjdFwiKSB7XHJcblx0XHRcdFx0XHQkKFwiaHRtbCwgYm9keVwiKS5zY3JvbGxUb3AocG9zICsgMTUwKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JChcImh0bWwsIGJvZHlcIikuc2Nyb2xsVG9wKHBvcyArIDEwMCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmICh0YXJnZXQucHJvcCgnaWQnKSA9PSBcImNvbnRhY3RcIikge1xyXG5cdFx0XHRcdFx0JChcImh0bWwsIGJvZHlcIikuc2Nyb2xsVG9wKHBvcyArIDUwKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JChcImh0bWwsIGJvZHlcIikuc2Nyb2xsVG9wKHBvcyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59KTtcclxuLy8vLy8vLy8vLy8vb3RoZXJwYWdlIHRvIGZyb250cGFnZS8vLy8vLy8vLy8vL1xyXG5cclxuLy8vLy8vLy8vLy8vbW9kYWwvLy8vLy8vLy8vLy9cclxuJCgoKSA9PiB7XHJcblx0JCgnLm1vZGFsT3BlbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdGJvZHlTY3JvbGxQcmV2ZW50KHRydWUpO1xyXG5cdFx0aWYgKCQodGhpcykucGFyZW50cygnI3NwTmF2SGVhZGVyJylbMF0pIHtcclxuXHRcdFx0JCgnI21vZGFsQXJlYScpLnNob3coKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCQoJyNtb2RhbEFyZWEnKS5mYWRlSW4oKTtcclxuXHRcdH1cclxuXHRcdGlmICgkKCcjY29udGFjdCcpKSB7XHJcblx0XHRcdCQoJyNjb250YWN0JykudG9nZ2xlQ2xhc3MoJ2lzLXBhc3NpdmUnKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHQkKCcjbW9kYWxDbG9zZSwjbW9kYWxPdXRlcicpLm9uKCdjbGljaycsICgpID0+IHtcclxuXHRcdCQoJyNtb2RhbEFyZWEnKS5mYWRlT3V0KCgpID0+IHtcclxuXHRcdFx0Ym9keVNjcm9sbFByZXZlbnQoZmFsc2UpO1xyXG5cdFx0XHRpZiAoJCgnI2NvbnRhY3QnKSkge1xyXG5cdFx0XHRcdCQoJyNjb250YWN0JykudG9nZ2xlQ2xhc3MoJ2lzLXBhc3NpdmUnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn0pO1xyXG4vLy8vLy8vLy8vLy9tb2RhbC8vLy8vLy8vLy8vL1xyXG5cclxuLy8vLy8vLy8vLy8vc2Nyb2xsIGNvbnRyb2wgZm9yIGZ1Y2tpbidJRTExLy8vLy8vLy8vLy8vXHJcbi8vIGlmIChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9NU0lFIDEwL2kpIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1RyaWRlbnRcXC83XFwuLykgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvRWRnZVxcLzEyXFwuLykpIHtcclxuLy8gXHQkKCdib2R5Jykub24oXCJtb3VzZXdoZWVsXCIsICgpID0+IHtcclxuLy8gXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbi8vIFx0XHRjb25zdCB3ZCA9IGV2ZW50LndoZWVsRGVsdGE7XHJcbi8vIFx0XHRjb25zdCBjc3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbi8vIFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgY3NwIC0gd2QpO1xyXG4vLyBcdH0pO1xyXG4vLyB9XHJcbi8vLy8vLy8vLy8vL3Njcm9sbCBjb250cm9sIGZvciBmdWNraW4nSUUxMS8vLy8vLy8vLy8vL1xyXG5cclxuLy8vLy8vLy8vLy8vbW91c2Ugc3RhbGtlci8vLy8vLy8vLy8vL1xyXG4kKGZ1bmN0aW9uKCl7XHJcblx0XHJcblx0Y29uc3QgY3Vyc29yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnNvcicpO1xyXG5cdGNvbnN0IHN0YWxrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhbGtlcicpO1xyXG5cclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0cmFuc2xhdGUpO1xyXG5cdFxyXG5cdGZ1bmN0aW9uIHRyYW5zbGF0ZShlKSB7XHJcblx0XHRjdXJzb3Iuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgnICsgZS5jbGllbnRYICsgJ3B4LCAnICsgZS5jbGllbnRZICsgJ3B4KSc7XHJcblx0XHRzdGFsa2VyLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoJyArIGUuY2xpZW50WCArICdweCwgJyArIGUuY2xpZW50WSArICdweCknO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbGlua0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYSwgI215c2xpZGVyIC5uYXYsIC5tb3VzZVN0YWxrZXInKTtcclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGxpbmtFbC5sZW5ndGg7IGkrKykge1xyXG5cdFx0bGlua0VsW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0Y3Vyc29yLmNsYXNzTGlzdC5hZGQoJ2lzLWhvdmVyZWQnKTtcclxuXHRcdH0pO1xyXG5cdFx0bGlua0VsW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRjdXJzb3IuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaG92ZXJlZCcpOyAgICAgIFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdFxyXG59KTtcclxuLy8vLy8vLy8vLy8vbW91c2Ugc3RhbGtlci8vLy8vLy8vLy8vL1xyXG5cclxuLy8vLy8vLy8vLy8vc2Nyb2xsVHJpZ2dlckFsbC1ib3R0b21GaXhBYnNvbHV0ZWx5ISEhLy8vLy8vLy8vLy8vXHJcbiQoKCkgPT4ge1xyXG5cdCQod2luZG93KS50cmlnZ2VyKCdzY3JvbGwnKTtcclxufSk7XHJcbi8vLy8vLy8vLy8vL3Njcm9sbFRyaWdnZXJBbGwtYm90dG9tRml4QWJzb2x1dGVseSEhIS8vLy8vLy8vLy8vL1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBib2R5U2Nyb2xsUHJldmVudChmbGFnKSB7XHJcblx0bGV0IHNjcm9sbFBvc2l0aW9uO1xyXG5cdGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xyXG5cdGNvbnN0IHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcclxuXHRjb25zdCBpc2lPUyA9IHVhLmluZGV4T2YoJ2lwaG9uZScpID4gLTEgfHwgdWEuaW5kZXhPZignaXBhZCcpID4gLTEgfHwgdWEuaW5kZXhPZignbWFjaW50b3NoJykgPiAtMSAmJiAnb250b3VjaGVuZCcgaW4gZG9jdW1lbnQ7XHJcblx0Y29uc3Qgc2Nyb2xsQmFyV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XHJcblx0aWYgKGZsYWcpIHtcclxuXHRcdGJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gc2Nyb2xsQmFyV2lkdGggKyAncHgnO1xyXG5cdFx0aWYgKGlzaU9TKSB7XHJcblx0XHRcdHNjcm9sbFBvc2l0aW9uID0gLXdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHRcdFx0Ym9keS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XHJcblx0XHRcdGJvZHkuc3R5bGUud2lkdGggPSAnMTAwJSc7XHJcblx0XHRcdGJvZHkuc3R5bGUudG9wID0gc2Nyb2xsUG9zaXRpb24gKyAncHgnO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ym9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG5cdFx0fVxyXG5cdH0gZWxzZSBpZiAoIWZsYWcpIHtcclxuXHRcdGJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJyc7XHJcblx0XHRpZiAoaXNpT1MpIHtcclxuXHRcdFx0c2Nyb2xsUG9zaXRpb24gPSBwYXJzZUludChib2R5LnN0eWxlLnRvcC5yZXBsYWNlKC9bXjAtOV0vZywgJycpKTtcclxuXHRcdFx0Ym9keS5zdHlsZS5wb3NpdGlvbiA9ICcnO1xyXG5cdFx0XHRib2R5LnN0eWxlLndpZHRoID0gJyc7XHJcblx0XHRcdGJvZHkuc3R5bGUudG9wID0gJyc7XHJcblx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCBzY3JvbGxQb3NpdGlvbik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcblx0XHR9XHJcblx0fVxyXG59IiwiLyogZXNsaW50LWRpc2FibGUgKi9cclxuLy8vLy8vLy8vLy8vLy90ZXh0aWxsYXRlLmpzLy8vLy8vLy8vLy8vLy9cclxuLypcclxuICogdGV4dGlsbGF0ZS5qc1xyXG4gKiBodHRwOi8vanNjaHIuZ2l0aHViLmNvbS90ZXh0aWxsYXRlXHJcbiAqIE1JVCBsaWNlbnNlZFxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTItMjAxMyBKb3JkYW4gU2Nocm90ZXJcclxuICovXHJcblxyXG4oZnVuY3Rpb24gKCQpIHtcclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHJcblx0ZnVuY3Rpb24gaXNJbkVmZmVjdChlZmZlY3QpIHtcclxuXHRcdHJldHVybiAvSW4vLnRlc3QoZWZmZWN0KSB8fCAkLmluQXJyYXkoZWZmZWN0LCAkLmZuLnRleHRpbGxhdGUuZGVmYXVsdHMuaW5FZmZlY3RzKSA+PSAwO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaXNPdXRFZmZlY3QoZWZmZWN0KSB7XHJcblx0XHRyZXR1cm4gL091dC8udGVzdChlZmZlY3QpIHx8ICQuaW5BcnJheShlZmZlY3QsICQuZm4udGV4dGlsbGF0ZS5kZWZhdWx0cy5vdXRFZmZlY3RzKSA+PSAwO1xyXG5cdH1cclxuXHJcblxyXG5cdGZ1bmN0aW9uIHN0cmluZ1RvQm9vbGVhbihzdHIpIHtcclxuXHRcdGlmIChzdHIgIT09IFwidHJ1ZVwiICYmIHN0ciAhPT0gXCJmYWxzZVwiKSByZXR1cm4gc3RyO1xyXG5cdFx0cmV0dXJuIChzdHIgPT09IFwidHJ1ZVwiKTtcclxuXHR9XHJcblxyXG5cdC8vIGN1c3RvbSBnZXQgZGF0YSBhcGkgbWV0aG9kXHJcblx0ZnVuY3Rpb24gZ2V0RGF0YShub2RlKSB7XHJcblx0XHR2YXIgYXR0cnMgPSBub2RlLmF0dHJpYnV0ZXMgfHwgW11cclxuXHRcdFx0LCBkYXRhID0ge307XHJcblxyXG5cdFx0aWYgKCFhdHRycy5sZW5ndGgpIHJldHVybiBkYXRhO1xyXG5cclxuXHRcdCQuZWFjaChhdHRycywgZnVuY3Rpb24gKGksIGF0dHIpIHtcclxuXHRcdFx0dmFyIG5vZGVOYW1lID0gYXR0ci5ub2RlTmFtZS5yZXBsYWNlKC9kZWxheXNjYWxlLywgJ2RlbGF5U2NhbGUnKTtcclxuXHRcdFx0aWYgKC9eZGF0YS1pbi0qLy50ZXN0KG5vZGVOYW1lKSkge1xyXG5cdFx0XHRcdGRhdGEuaW4gPSBkYXRhLmluIHx8IHt9O1xyXG5cdFx0XHRcdGRhdGEuaW5bbm9kZU5hbWUucmVwbGFjZSgvZGF0YS1pbi0vLCAnJyldID0gc3RyaW5nVG9Cb29sZWFuKGF0dHIubm9kZVZhbHVlKTtcclxuXHRcdFx0fSBlbHNlIGlmICgvXmRhdGEtb3V0LSovLnRlc3Qobm9kZU5hbWUpKSB7XHJcblx0XHRcdFx0ZGF0YS5vdXQgPSBkYXRhLm91dCB8fCB7fTtcclxuXHRcdFx0XHRkYXRhLm91dFtub2RlTmFtZS5yZXBsYWNlKC9kYXRhLW91dC0vLCAnJyldID0gc3RyaW5nVG9Cb29sZWFuKGF0dHIubm9kZVZhbHVlKTtcclxuXHRcdFx0fSBlbHNlIGlmICgvXmRhdGEtKi8udGVzdChub2RlTmFtZSkpIHtcclxuXHRcdFx0XHRkYXRhW25vZGVOYW1lLnJlcGxhY2UoL2RhdGEtLywgJycpXSA9IHN0cmluZ1RvQm9vbGVhbihhdHRyLm5vZGVWYWx1ZSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiBkYXRhO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gc2h1ZmZsZShvKSB7XHJcblx0XHRmb3IgKHZhciBqLCB4LCBpID0gby5sZW5ndGg7IGk7IGogPSBwYXJzZUludChNYXRoLnJhbmRvbSgpICogaSksIHggPSBvWy0taV0sIG9baV0gPSBvW2pdLCBvW2pdID0geCk7XHJcblx0XHRyZXR1cm4gbztcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGFuaW1hdGUoJHQsIGVmZmVjdCwgY2IpIHtcclxuXHRcdCR0LmFkZENsYXNzKCdhbmltYXRlZCAnICsgZWZmZWN0KVxyXG5cdFx0XHQuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKVxyXG5cdFx0XHQuc2hvdygpO1xyXG5cclxuXHRcdCR0Lm9uZSgnd2Via2l0QW5pbWF0aW9uRW5kIG1vekFuaW1hdGlvbkVuZCBNU0FuaW1hdGlvbkVuZCBvYW5pbWF0aW9uZW5kIGFuaW1hdGlvbmVuZCcsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0JHQucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkICcgKyBlZmZlY3QpO1xyXG5cdFx0XHRjYiAmJiBjYigpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBhbmltYXRlVG9rZW5zKCR0b2tlbnMsIG9wdGlvbnMsIGNiKSB7XHJcblx0XHR2YXIgdGhhdCA9IHRoaXNcclxuXHRcdFx0LCBjb3VudCA9ICR0b2tlbnMubGVuZ3RoO1xyXG5cclxuXHRcdGlmICghY291bnQpIHtcclxuXHRcdFx0Y2IgJiYgY2IoKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChvcHRpb25zLnNodWZmbGUpICR0b2tlbnMgPSBzaHVmZmxlKCR0b2tlbnMpO1xyXG5cdFx0aWYgKG9wdGlvbnMucmV2ZXJzZSkgJHRva2VucyA9ICR0b2tlbnMudG9BcnJheSgpLnJldmVyc2UoKTtcclxuXHJcblx0XHQkLmVhY2goJHRva2VucywgZnVuY3Rpb24gKGksIHQpIHtcclxuXHRcdFx0dmFyICR0b2tlbiA9ICQodCk7XHJcblxyXG5cdFx0XHRmdW5jdGlvbiBjb21wbGV0ZSgpIHtcclxuXHRcdFx0XHRpZiAoaXNJbkVmZmVjdChvcHRpb25zLmVmZmVjdCkpIHtcclxuXHRcdFx0XHRcdCR0b2tlbi5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoaXNPdXRFZmZlY3Qob3B0aW9ucy5lZmZlY3QpKSB7XHJcblx0XHRcdFx0XHQkdG9rZW4uY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjb3VudCAtPSAxO1xyXG5cdFx0XHRcdGlmICghY291bnQgJiYgY2IpIGNiKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBkZWxheSA9IG9wdGlvbnMuc3luYyA/IG9wdGlvbnMuZGVsYXkgOiBvcHRpb25zLmRlbGF5ICogaSAqIG9wdGlvbnMuZGVsYXlTY2FsZTtcclxuXHJcblx0XHRcdCR0b2tlbi50ZXh0KCkgP1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBhbmltYXRlKCR0b2tlbiwgb3B0aW9ucy5lZmZlY3QsIGNvbXBsZXRlKTsgfSwgZGVsYXkpIDpcclxuXHRcdFx0XHRjb21wbGV0ZSgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHR2YXIgVGV4dGlsbGF0ZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBvcHRpb25zKSB7XHJcblx0XHR2YXIgYmFzZSA9IHRoaXNcclxuXHRcdFx0LCAkZWxlbWVudCA9ICQoZWxlbWVudCk7XHJcblxyXG5cdFx0YmFzZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRiYXNlLiR0ZXh0cyA9ICRlbGVtZW50LmZpbmQob3B0aW9ucy5zZWxlY3Rvcik7XHJcblxyXG5cdFx0XHRpZiAoIWJhc2UuJHRleHRzLmxlbmd0aCkge1xyXG5cdFx0XHRcdGJhc2UuJHRleHRzID0gJCgnPHVsIGNsYXNzPVwidGV4dHNcIj48bGk+JyArICRlbGVtZW50Lmh0bWwoKSArICc8L2xpPjwvdWw+Jyk7XHJcblx0XHRcdFx0JGVsZW1lbnQuaHRtbChiYXNlLiR0ZXh0cyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGJhc2UuJHRleHRzLmhpZGUoKTtcclxuXHJcblx0XHRcdGJhc2UuJGN1cnJlbnQgPSAkKCc8c3Bhbj4nKVxyXG5cdFx0XHRcdC5odG1sKGJhc2UuJHRleHRzLmZpbmQoJzpmaXJzdC1jaGlsZCcpLmh0bWwoKSlcclxuXHRcdFx0XHQucHJlcGVuZFRvKCRlbGVtZW50KTtcclxuXHJcblx0XHRcdGlmIChpc0luRWZmZWN0KG9wdGlvbnMuaW4uZWZmZWN0KSkge1xyXG5cdFx0XHRcdGJhc2UuJGN1cnJlbnQuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGlzT3V0RWZmZWN0KG9wdGlvbnMub3V0LmVmZmVjdCkpIHtcclxuXHRcdFx0XHRiYXNlLiRjdXJyZW50LmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGJhc2Uuc2V0T3B0aW9ucyhvcHRpb25zKTtcclxuXHJcblx0XHRcdGJhc2UudGltZW91dFJ1biA9IG51bGw7XHJcblxyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRiYXNlLm9wdGlvbnMuYXV0b1N0YXJ0ICYmIGJhc2Uuc3RhcnQoKTtcclxuXHRcdFx0fSwgYmFzZS5vcHRpb25zLmluaXRpYWxEZWxheSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGJhc2Uuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcblx0XHRcdGJhc2Uub3B0aW9ucyA9IG9wdGlvbnM7XHJcblx0XHR9O1xyXG5cclxuXHRcdGJhc2UudHJpZ2dlckV2ZW50ID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuXHRcdFx0dmFyIGUgPSAkLkV2ZW50KG5hbWUgKyAnLnRsdCcpO1xyXG5cdFx0XHQkZWxlbWVudC50cmlnZ2VyKGUsIGJhc2UpO1xyXG5cdFx0XHRyZXR1cm4gZTtcclxuXHRcdH07XHJcblxyXG5cdFx0YmFzZS5pbiA9IGZ1bmN0aW9uIChpbmRleCwgY2IpIHtcclxuXHRcdFx0aW5kZXggPSBpbmRleCB8fCAwO1xyXG5cclxuXHRcdFx0dmFyICRlbGVtID0gYmFzZS4kdGV4dHMuZmluZCgnOm50aC1jaGlsZCgnICsgKChpbmRleCB8fCAwKSArIDEpICsgJyknKVxyXG5cdFx0XHRcdCwgb3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBiYXNlLm9wdGlvbnMsICRlbGVtLmxlbmd0aCA/IGdldERhdGEoJGVsZW1bMF0pIDoge30pXHJcblx0XHRcdFx0LCAkdG9rZW5zO1xyXG5cclxuXHRcdFx0JGVsZW0uYWRkQ2xhc3MoJ2N1cnJlbnQnKTtcclxuXHJcblx0XHRcdGJhc2UudHJpZ2dlckV2ZW50KCdpbkFuaW1hdGlvbkJlZ2luJyk7XHJcblx0XHRcdCRlbGVtZW50LmF0dHIoJ2RhdGEtYWN0aXZlJywgJGVsZW0uZGF0YSgnaWQnKSk7XHJcblxyXG5cdFx0XHRiYXNlLiRjdXJyZW50XHJcblx0XHRcdFx0Lmh0bWwoJGVsZW0uaHRtbCgpKVxyXG5cdFx0XHRcdC5sZXR0ZXJpbmcoJ3dvcmRzJyk7XHJcblxyXG5cdFx0XHQvLyBzcGxpdCB3b3JkcyB0byBpbmRpdmlkdWFsIGNoYXJhY3RlcnMgaWYgdG9rZW4gdHlwZSBpcyBzZXQgdG8gJ2NoYXInXHJcblx0XHRcdGlmIChiYXNlLm9wdGlvbnMudHlwZSA9PSBcImNoYXJcIikge1xyXG5cdFx0XHRcdGJhc2UuJGN1cnJlbnQuZmluZCgnW2NsYXNzXj1cIndvcmRcIl0nKVxyXG5cdFx0XHRcdFx0LmNzcyh7XHJcblx0XHRcdFx0XHRcdCdkaXNwbGF5JzogJ2lubGluZS1ibG9jaycsXHJcblx0XHRcdFx0XHRcdC8vIGZpeCBmb3IgcG9vciBpb3MgcGVyZm9ybWFuY2VcclxuXHRcdFx0XHRcdFx0Jy13ZWJraXQtdHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKDAsMCwwKScsXHJcblx0XHRcdFx0XHRcdCctbW96LXRyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCgwLDAsMCknLFxyXG5cdFx0XHRcdFx0XHQnLW8tdHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKDAsMCwwKScsXHJcblx0XHRcdFx0XHRcdCd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoMCwwLDApJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5lYWNoKGZ1bmN0aW9uICgpIHsgJCh0aGlzKS5sZXR0ZXJpbmcoKTsgfSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCR0b2tlbnMgPSBiYXNlLiRjdXJyZW50XHJcblx0XHRcdFx0LmZpbmQoJ1tjbGFzc149XCInICsgYmFzZS5vcHRpb25zLnR5cGUgKyAnXCJdJylcclxuXHRcdFx0XHQuY3NzKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpO1xyXG5cclxuXHRcdFx0aWYgKGlzSW5FZmZlY3Qob3B0aW9ucy5pbi5lZmZlY3QpKSB7XHJcblx0XHRcdFx0JHRva2Vucy5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XHJcblx0XHRcdH0gZWxzZSBpZiAoaXNPdXRFZmZlY3Qob3B0aW9ucy5pbi5lZmZlY3QpKSB7XHJcblx0XHRcdFx0JHRva2Vucy5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRiYXNlLmN1cnJlbnRJbmRleCA9IGluZGV4O1xyXG5cclxuXHRcdFx0YW5pbWF0ZVRva2VucygkdG9rZW5zLCBvcHRpb25zLmluLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0YmFzZS50cmlnZ2VyRXZlbnQoJ2luQW5pbWF0aW9uRW5kJyk7XHJcblx0XHRcdFx0aWYgKG9wdGlvbnMuaW4uY2FsbGJhY2spIG9wdGlvbnMuaW4uY2FsbGJhY2soKTtcclxuXHRcdFx0XHRpZiAoY2IpIGNiKGJhc2UpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH07XHJcblxyXG5cdFx0YmFzZS5vdXQgPSBmdW5jdGlvbiAoY2IpIHtcclxuXHRcdFx0dmFyICRlbGVtID0gYmFzZS4kdGV4dHMuZmluZCgnOm50aC1jaGlsZCgnICsgKChiYXNlLmN1cnJlbnRJbmRleCB8fCAwKSArIDEpICsgJyknKVxyXG5cdFx0XHRcdCwgJHRva2VucyA9IGJhc2UuJGN1cnJlbnQuZmluZCgnW2NsYXNzXj1cIicgKyBiYXNlLm9wdGlvbnMudHlwZSArICdcIl0nKVxyXG5cdFx0XHRcdCwgb3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBiYXNlLm9wdGlvbnMsICRlbGVtLmxlbmd0aCA/IGdldERhdGEoJGVsZW1bMF0pIDoge30pO1xyXG5cclxuXHRcdFx0YmFzZS50cmlnZ2VyRXZlbnQoJ291dEFuaW1hdGlvbkJlZ2luJyk7XHJcblxyXG5cdFx0XHRhbmltYXRlVG9rZW5zKCR0b2tlbnMsIG9wdGlvbnMub3V0LCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0JGVsZW0ucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKTtcclxuXHRcdFx0XHRiYXNlLnRyaWdnZXJFdmVudCgnb3V0QW5pbWF0aW9uRW5kJyk7XHJcblx0XHRcdFx0JGVsZW1lbnQucmVtb3ZlQXR0cignZGF0YS1hY3RpdmUnKTtcclxuXHRcdFx0XHRpZiAob3B0aW9ucy5vdXQuY2FsbGJhY2spIG9wdGlvbnMub3V0LmNhbGxiYWNrKCk7XHJcblx0XHRcdFx0aWYgKGNiKSBjYihiYXNlKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGJhc2Uuc3RhcnQgPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0YmFzZS50cmlnZ2VyRXZlbnQoJ3N0YXJ0Jyk7XHJcblxyXG5cdFx0XHRcdChmdW5jdGlvbiBydW4oaW5kZXgpIHtcclxuXHRcdFx0XHRcdGJhc2UuaW4oaW5kZXgsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0dmFyIGxlbmd0aCA9IGJhc2UuJHRleHRzLmNoaWxkcmVuKCkubGVuZ3RoO1xyXG5cclxuXHRcdFx0XHRcdFx0aW5kZXggKz0gMTtcclxuXHJcblx0XHRcdFx0XHRcdGlmICghYmFzZS5vcHRpb25zLmxvb3AgJiYgaW5kZXggPj0gbGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGJhc2Uub3B0aW9ucy5jYWxsYmFjaykgYmFzZS5vcHRpb25zLmNhbGxiYWNrKCk7XHJcblx0XHRcdFx0XHRcdFx0YmFzZS50cmlnZ2VyRXZlbnQoJ2VuZCcpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGluZGV4ID0gaW5kZXggJSBsZW5ndGg7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGJhc2UudGltZW91dFJ1biA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0YmFzZS5vdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRydW4oaW5kZXgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0fSwgYmFzZS5vcHRpb25zLm1pbkRpc3BsYXlUaW1lKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fShpbmRleCB8fCAwKSk7XHJcblx0XHRcdH0sIGJhc2Uub3B0aW9ucy5pbml0aWFsRGVsYXkpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRiYXNlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmIChiYXNlLnRpbWVvdXRSdW4pIHtcclxuXHRcdFx0XHRjbGVhckludGVydmFsKGJhc2UudGltZW91dFJ1bik7XHJcblx0XHRcdFx0YmFzZS50aW1lb3V0UnVuID0gbnVsbDtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRiYXNlLmluaXQoKTtcclxuXHR9O1xyXG5cclxuXHQkLmZuLnRleHRpbGxhdGUgPSBmdW5jdGlvbiAoc2V0dGluZ3MsIGFyZ3MpIHtcclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpXHJcblx0XHRcdFx0LCBkYXRhID0gJHRoaXMuZGF0YSgndGV4dGlsbGF0ZScpXHJcblx0XHRcdFx0LCBvcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sICQuZm4udGV4dGlsbGF0ZS5kZWZhdWx0cywgZ2V0RGF0YSh0aGlzKSwgdHlwZW9mIHNldHRpbmdzID09ICdvYmplY3QnICYmIHNldHRpbmdzKTtcclxuXHJcblx0XHRcdGlmICghZGF0YSkge1xyXG5cdFx0XHRcdCR0aGlzLmRhdGEoJ3RleHRpbGxhdGUnLCAoZGF0YSA9IG5ldyBUZXh0aWxsYXRlKHRoaXMsIG9wdGlvbnMpKSk7XHJcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIHNldHRpbmdzID09ICdzdHJpbmcnKSB7XHJcblx0XHRcdFx0ZGF0YVtzZXR0aW5nc10uYXBwbHkoZGF0YSwgW10uY29uY2F0KGFyZ3MpKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkYXRhLnNldE9wdGlvbnMuY2FsbChkYXRhLCBvcHRpb25zKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0JC5mbi50ZXh0aWxsYXRlLmRlZmF1bHRzID0ge1xyXG5cdFx0c2VsZWN0b3I6ICcudGV4dHMnLFxyXG5cdFx0bG9vcDogZmFsc2UsXHJcblx0XHRtaW5EaXNwbGF5VGltZTogMjAwMCxcclxuXHRcdGluaXRpYWxEZWxheTogMCxcclxuXHRcdGluOiB7XHJcblx0XHRcdGVmZmVjdDogJ2ZhZGVJbkxlZnRCaWcnLFxyXG5cdFx0XHRkZWxheVNjYWxlOiAxLjUsXHJcblx0XHRcdGRlbGF5OiA1MCxcclxuXHRcdFx0c3luYzogZmFsc2UsXHJcblx0XHRcdHJldmVyc2U6IGZhbHNlLFxyXG5cdFx0XHRzaHVmZmxlOiBmYWxzZSxcclxuXHRcdFx0Y2FsbGJhY2s6IGZ1bmN0aW9uICgpIHsgfVxyXG5cdFx0fSxcclxuXHRcdG91dDoge1xyXG5cdFx0XHRlZmZlY3Q6ICdoaW5nZScsXHJcblx0XHRcdGRlbGF5U2NhbGU6IDEuNSxcclxuXHRcdFx0ZGVsYXk6IDUwLFxyXG5cdFx0XHRzeW5jOiBmYWxzZSxcclxuXHRcdFx0cmV2ZXJzZTogZmFsc2UsXHJcblx0XHRcdHNodWZmbGU6IGZhbHNlLFxyXG5cdFx0XHRjYWxsYmFjazogZnVuY3Rpb24gKCkgeyB9XHJcblx0XHR9LFxyXG5cdFx0YXV0b1N0YXJ0OiB0cnVlLFxyXG5cdFx0aW5FZmZlY3RzOiBbXSxcclxuXHRcdG91dEVmZmVjdHM6IFsnaGluZ2UnXSxcclxuXHRcdGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7IH0sXHJcblx0XHR0eXBlOiAnY2hhcidcclxuXHR9O1xyXG5cclxufShqUXVlcnkpKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vTGV0dGVyaW5nLmpzLy8vLy8vLy8vLy8vLy9cclxuLypnbG9iYWwgalF1ZXJ5ICovXHJcbi8qIVx0XHJcbiogTGV0dGVyaW5nLkpTIDAuNi4xXHJcbipcclxuKiBDb3B5cmlnaHQgMjAxMCwgRGF2ZSBSdXBlcnQgaHR0cDovL2RhdmVydXBlcnQuY29tXHJcbiogUmVsZWFzZWQgdW5kZXIgdGhlIFdURlBMIGxpY2Vuc2UgXHJcbiogaHR0cDovL3NhbS56b3kub3JnL3d0ZnBsL1xyXG4qXHJcbiogVGhhbmtzIHRvIFBhdWwgSXJpc2ggLSBodHRwOi8vcGF1bGlyaXNoLmNvbSAtIGZvciB0aGUgZmVlZGJhY2suXHJcbipcclxuKiBEYXRlOiBNb24gU2VwIDIwIDE3OjE0OjAwIDIwMTAgLTA2MDBcclxuKi9cclxuKGZ1bmN0aW9uICgkKSB7XHJcblx0ZnVuY3Rpb24gaW5qZWN0b3IodCwgc3BsaXR0ZXIsIGtsYXNzLCBhZnRlcikge1xyXG5cdFx0dmFyIGEgPSB0LnRleHQoKS5zcGxpdChzcGxpdHRlciksIGluamVjdCA9ICcnO1xyXG5cdFx0aWYgKGEubGVuZ3RoKSB7XHJcblx0XHRcdCQoYSkuZWFjaChmdW5jdGlvbiAoaSwgaXRlbSkge1xyXG5cdFx0XHRcdGluamVjdCArPSAnPHNwYW4gY2xhc3M9XCInICsga2xhc3MgKyAoaSArIDEpICsgJ1wiPicgKyBpdGVtICsgJzwvc3Bhbj4nICsgYWZ0ZXI7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0LmVtcHR5KCkuYXBwZW5kKGluamVjdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR2YXIgbWV0aG9kcyA9IHtcclxuXHRcdGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGluamVjdG9yKCQodGhpcyksICcnLCAnY2hhcicsICcnKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHR3b3JkczogZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0aW5qZWN0b3IoJCh0aGlzKSwgJyAnLCAnd29yZCcsICcgJyk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0bGluZXM6IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHZhciByID0gXCJlZWZlYzMwMzA3OWFkMTc0MDVjODg5ZTA5MmUxMDViMFwiO1xyXG5cdFx0XHRcdC8vIEJlY2F1c2UgaXQncyBoYXJkIHRvIHNwbGl0IGEgPGJyLz4gdGFnIGNvbnNpc3RlbnRseSBhY3Jvc3MgYnJvd3NlcnMsXHJcblx0XHRcdFx0Ly8gKCphaGVtKiBJRSAqYWhlbSopLCB3ZSByZXBsYWNlcyBhbGwgPGJyLz4gaW5zdGFuY2VzIHdpdGggYW4gbWQ1IGhhc2ggXHJcblx0XHRcdFx0Ly8gKG9mIHRoZSB3b3JkIFwic3BsaXRcIikuICBJZiB5b3UncmUgdHJ5aW5nIHRvIHVzZSB0aGlzIHBsdWdpbiBvbiB0aGF0IFxyXG5cdFx0XHRcdC8vIG1kNSBoYXNoIHN0cmluZywgaXQgd2lsbCBmYWlsIGJlY2F1c2UgeW91J3JlIGJlaW5nIHJpZGljdWxvdXMuXHJcblx0XHRcdFx0aW5qZWN0b3IoJCh0aGlzKS5jaGlsZHJlbihcImJyXCIpLnJlcGxhY2VXaXRoKHIpLmVuZCgpLCByLCAnbGluZScsICcnKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdCQuZm4ubGV0dGVyaW5nID0gZnVuY3Rpb24gKG1ldGhvZCkge1xyXG5cdFx0Ly8gTWV0aG9kIGNhbGxpbmcgbG9naWNcclxuXHRcdGlmIChtZXRob2QgJiYgbWV0aG9kc1ttZXRob2RdKSB7XHJcblx0XHRcdHJldHVybiBtZXRob2RzW21ldGhvZF0uYXBwbHkodGhpcywgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcclxuXHRcdH0gZWxzZSBpZiAobWV0aG9kID09PSAnbGV0dGVycycgfHwgIW1ldGhvZCkge1xyXG5cdFx0XHRyZXR1cm4gbWV0aG9kcy5pbml0LmFwcGx5KHRoaXMsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSk7IC8vIGFsd2F5cyBwYXNzIGFuIGFycmF5XHJcblx0XHR9XHJcblx0XHQkLmVycm9yKCdNZXRob2QgJyArIG1ldGhvZCArICcgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LmxldHRlcmluZycpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHJcbn0pKGpRdWVyeSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vL0RyYXdTVkcuanMvLy8vLy8vLy8vLy8vL1xyXG4vKiEgalF1ZXJ5IERyYXdTVkcgdjEuMS4wICgyMDE2LTEwLTA1KSAtIGdpdC5pby92R0ZhNSAtIENvcHlyaWdodCAoYykgMjAxNiBMZW9uYXJkbyBTYW50b3MgLSBNSVQgTGljZW5zZSAqL1xyXG4hZnVuY3Rpb24gKHQpIHsgXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbXCJqcXVlcnlcIl0sIHQpIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgbW9kdWxlICYmIG1vZHVsZS5leHBvcnRzID8gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZSwgbikgeyByZXR1cm4gdm9pZCAwID09PSBuICYmIChuID0gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygd2luZG93ID8gcmVxdWlyZShcImpxdWVyeVwiKSA6IHJlcXVpcmUoXCJqcXVlcnlcIikoZSkpLCB0KG4pLCBuOyB9IDogdChqUXVlcnkpOyB9KGZ1bmN0aW9uICh0KSB7IFwidXNlIHN0cmljdFwiOyB2YXIgZSA9IFwiZHJhd3N2Z1wiLCBuID0geyBkdXJhdGlvbjogMWUzLCBzdGFnZ2VyOiAyMDAsIGVhc2luZzogXCJzd2luZ1wiLCByZXZlcnNlOiAhMSwgY2FsbGJhY2s6IHQubm9vcCB9LCBhID0gZnVuY3Rpb24gKCkgeyB2YXIgYSA9IGZ1bmN0aW9uIChhLCBvKSB7IHZhciBpID0gdGhpcywgciA9IHQuZXh0ZW5kKG4sIG8pOyBpLiRlbG0gPSB0KGEpLCBpLiRlbG0uaXMoXCJzdmdcIikgJiYgKGkub3B0aW9ucyA9IHIsIGkuJHBhdGhzID0gaS4kZWxtLmZpbmQoXCJwYXRoXCIpLCBpLnRvdGFsRHVyYXRpb24gPSByLmR1cmF0aW9uICsgci5zdGFnZ2VyICogaS4kcGF0aHMubGVuZ3RoLCBpLmR1cmF0aW9uID0gci5kdXJhdGlvbiAvIGkudG90YWxEdXJhdGlvbiwgaS4kcGF0aHMuZWFjaChmdW5jdGlvbiAodCwgZSkgeyB2YXIgbiA9IGUuZ2V0VG90YWxMZW5ndGgoKTsgZS5wYXRoTGVuID0gbiwgZS5kZWxheSA9IHIuc3RhZ2dlciAqIHQgLyBpLnRvdGFsRHVyYXRpb24sIGUuc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gW24sIG5dLmpvaW4oXCIgXCIpLCBlLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSBuOyB9KSwgaS4kZWxtLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbiAodCwgbikgeyByZXR1cm4gW24sIGUgKyBcIi1pbml0aWFsaXplZFwiXS5qb2luKFwiIFwiKTsgfSkpOyB9OyByZXR1cm4gYS5wcm90b3R5cGUuZ2V0VmFsID0gZnVuY3Rpb24gKGUsIG4pIHsgcmV0dXJuIDEgLSB0LmVhc2luZ1tuXShlLCBlLCAwLCAxLCAxKTsgfSwgYS5wcm90b3R5cGUucHJvZ3Jlc3MgPSBmdW5jdGlvbiAodCkgeyB2YXIgZSA9IHRoaXMsIG4gPSBlLm9wdGlvbnMsIGEgPSBlLmR1cmF0aW9uOyBlLiRwYXRocy5lYWNoKGZ1bmN0aW9uIChvLCBpKSB7IHZhciByID0gaS5zdHlsZTsgaWYgKDEgPT09IHQpIHIuc3Ryb2tlRGFzaG9mZnNldCA9IDA7IGVsc2UgaWYgKDAgPT09IHQpIHIuc3Ryb2tlRGFzaG9mZnNldCA9IGkucGF0aExlbiArIFwicHhcIjsgZWxzZSBpZiAodCA+PSBpLmRlbGF5ICYmIHQgPD0gYSArIGkuZGVsYXkpIHsgdmFyIHMgPSAodCAtIGkuZGVsYXkpIC8gYTsgci5zdHJva2VEYXNob2Zmc2V0ID0gZS5nZXRWYWwocywgbi5lYXNpbmcpICogaS5wYXRoTGVuICogKG4ucmV2ZXJzZSA/IC0xIDogMSkgKyBcInB4XCI7IH0gfSk7IH0sIGEucHJvdG90eXBlLmFuaW1hdGUgPSBmdW5jdGlvbiAoKSB7IHZhciBuID0gdGhpczsgbi4kZWxtLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbiAodCwgbikgeyByZXR1cm4gW24sIGUgKyBcIi1hbmltYXRpbmdcIl0uam9pbihcIiBcIik7IH0pLCB0KHsgbGVuOiAwIH0pLmFuaW1hdGUoeyBsZW46IDEgfSwgeyBlYXNpbmc6IFwibGluZWFyXCIsIGR1cmF0aW9uOiBuLnRvdGFsRHVyYXRpb24sIHN0ZXA6IGZ1bmN0aW9uICh0LCBlKSB7IG4ucHJvZ3Jlc3MuY2FsbChuLCB0IC8gZS5lbmQpOyB9LCBjb21wbGV0ZTogZnVuY3Rpb24gKCkgeyBuLm9wdGlvbnMuY2FsbGJhY2suY2FsbCh0aGlzKSwgbi4kZWxtLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbiAodCwgbikgeyByZXR1cm4gbi5yZXBsYWNlKGUgKyBcIi1hbmltYXRpbmdcIiwgXCJcIik7IH0pOyB9IH0pOyB9LCBhOyB9KCk7IHQuZm5bZV0gPSBmdW5jdGlvbiAobiwgbykgeyByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHsgdmFyIGkgPSB0LmRhdGEodGhpcywgZSk7IGkgJiYgXCJcIiArIG4gPT09IG4gJiYgaVtuXSA/IGlbbl0obykgOiB0LmRhdGEodGhpcywgZSwgbmV3IGEodGhpcywgbikpOyB9KTsgfTsgfSk7XHJcbi8qIGVzbGludC1lbmFibGUgKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9