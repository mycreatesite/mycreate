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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2RlYm91bmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3Rocm90dGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9OdW1iZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi93b3JrL2pzL2NvbW1vbi9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vd29yay9qcy9tb2R1bGUvYm9keVNjcm9sbFByZXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vd29yay9qcy9tb2R1bGUvY29tbW9uLnBsdWdpbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJib2R5IiwiJCIsImFjY2Vzc0ZsYWciLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJteWNMb2dvIiwiZHJhd3N2ZyIsImR1cmF0aW9uIiwic3RhZ2dlciIsImVhc2luZyIsImNhbGxiYWNrIiwiYWRkQ2xhc3MiLCJoYXNDbGFzcyIsInNldFRpbWVvdXQiLCJjc3MiLCJjbG9uZU5hdiIsImNsb25lIiwiYXR0ciIsImluc2VydEFmdGVyIiwibG9nb01vdmUiLCJzaG93Q2xhc3MiLCJmb3JTaG93MSIsImZvclNob3cyIiwiZm9yU2hvdzMiLCJmb3JTaG93NCIsImZvclNob3dzIiwiaGVhZGluZyIsImNvbW1lbnRBbmltIiwicm9sbEJhY2siLCJtb2dpRm9vdGVyIiwiY29udGVudHNIZWlnaHQiLCJkb2N1bWVudCIsImhlaWdodCIsIndpbmRvdyIsIm9uIiwidGhyb3R0bGUiLCJ3aW5kb3dIZWlnaHQiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJyZW1vdmVDbGFzcyIsImxlbiIsImxlbmd0aCIsImoiLCJlYWNoIiwiaSIsImZvclNob3dQb2ludCIsIm9mZnNldCIsInRvcCIsImRlbGF5VGltZSIsImRlbGF5IiwicXVldWUiLCJoZWFkaW5nUG9pbnQiLCJ0ZXh0aWxsYXRlIiwiaW4iLCJlZmZlY3QiLCJzaHVmZmxlIiwiZGVsYXlTY2FsZSIsIm15Q29tbWVudFBvaW50IiwiZmFkZUluIiwiZmFkZU91dCIsInNob3ciLCJhbmltYXRlIiwiaGFtYkJ0bnMiLCJoYW1iQnRuMSIsImhhbWJCdG4yIiwiaGFtYkJ0bjMiLCJzcE5hdiIsInNwTmF2TGlzdHMiLCJzcE5hdkxpbmsiLCJmYWRlVGltZSIsInRvZ2dsZU5hdiIsImJvZHlTY3JvbGxQcmV2ZW50IiwiaGlkZSIsInRvZ2dsZUNsYXNzIiwiaHJlZiIsInRhcmdldCIsInBvc2l0aW9uIiwiZml4UHgiLCJ1cmwiLCJsb2NhdGlvbiIsImluY2x1ZGVzIiwiaWROYW1lIiwic3BsaXQiLCJwb3MiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmRleE9mIiwicHJvcCIsInBhcmVudHMiLCJtYXRjaCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ3ZCIsIndoZWVsRGVsdGEiLCJjc3AiLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvIiwidHJpZ2dlciIsImZsYWciLCJzY3JvbGxQb3NpdGlvbiIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwidWEiLCJ0b0xvd2VyQ2FzZSIsImlzaU9TIiwic2Nyb2xsQmFyV2lkdGgiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJzdHlsZSIsInBhZGRpbmdSaWdodCIsIndpZHRoIiwib3ZlcmZsb3ciLCJwYXJzZUludCIsInJlcGxhY2UiLCJpc0luRWZmZWN0IiwidGVzdCIsImluQXJyYXkiLCJmbiIsImRlZmF1bHRzIiwiaW5FZmZlY3RzIiwiaXNPdXRFZmZlY3QiLCJvdXRFZmZlY3RzIiwic3RyaW5nVG9Cb29sZWFuIiwic3RyIiwiZ2V0RGF0YSIsIm5vZGUiLCJhdHRycyIsImF0dHJpYnV0ZXMiLCJkYXRhIiwibm9kZU5hbWUiLCJub2RlVmFsdWUiLCJvdXQiLCJvIiwieCIsIk1hdGgiLCJyYW5kb20iLCIkdCIsImNiIiwib25lIiwiYW5pbWF0ZVRva2VucyIsIiR0b2tlbnMiLCJvcHRpb25zIiwidGhhdCIsImNvdW50IiwicmV2ZXJzZSIsInRvQXJyYXkiLCJ0IiwiJHRva2VuIiwiY29tcGxldGUiLCJzeW5jIiwidGV4dCIsIlRleHRpbGxhdGUiLCJlbGVtZW50IiwiYmFzZSIsIiRlbGVtZW50IiwiaW5pdCIsIiR0ZXh0cyIsImZpbmQiLCJzZWxlY3RvciIsImh0bWwiLCIkY3VycmVudCIsInByZXBlbmRUbyIsInNldE9wdGlvbnMiLCJ0aW1lb3V0UnVuIiwiYXV0b1N0YXJ0Iiwic3RhcnQiLCJpbml0aWFsRGVsYXkiLCJ0cmlnZ2VyRXZlbnQiLCJuYW1lIiwiZSIsIkV2ZW50IiwiaW5kZXgiLCIkZWxlbSIsImV4dGVuZCIsImxldHRlcmluZyIsInR5cGUiLCJjdXJyZW50SW5kZXgiLCJyZW1vdmVBdHRyIiwicnVuIiwiY2hpbGRyZW4iLCJsb29wIiwibWluRGlzcGxheVRpbWUiLCJzdG9wIiwiY2xlYXJJbnRlcnZhbCIsInNldHRpbmdzIiwiYXJncyIsIiR0aGlzIiwiYXBwbHkiLCJjb25jYXQiLCJjYWxsIiwialF1ZXJ5IiwiaW5qZWN0b3IiLCJzcGxpdHRlciIsImtsYXNzIiwiYWZ0ZXIiLCJhIiwiaW5qZWN0IiwiaXRlbSIsImVtcHR5IiwiYXBwZW5kIiwibWV0aG9kcyIsIndvcmRzIiwibGluZXMiLCJyIiwicmVwbGFjZVdpdGgiLCJlbmQiLCJtZXRob2QiLCJzbGljZSIsImFyZ3VtZW50cyIsImVycm9yIiwiZGVmaW5lIiwibiIsIm5vb3AiLCIkZWxtIiwiaXMiLCIkcGF0aHMiLCJ0b3RhbER1cmF0aW9uIiwiZ2V0VG90YWxMZW5ndGgiLCJwYXRoTGVuIiwic3Ryb2tlRGFzaGFycmF5Iiwiam9pbiIsInN0cm9rZURhc2hvZmZzZXQiLCJwcm90b3R5cGUiLCJnZXRWYWwiLCJwcm9ncmVzcyIsInMiLCJzdGVwIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxz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c291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi93b3JrL2pzL2NvbW1vbi9jb21tb24uanNcIik7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcbiIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIG5vdyA9IHJlcXVpcmUoJy4vbm93JyksXG4gICAgdG9OdW1iZXIgPSByZXF1aXJlKCcuL3RvTnVtYmVyJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB0b051bWJlcih3YWl0KSB8fCAwO1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncyxcbiAgICAgICAgdGhpc0FyZyA9IGxhc3RUaGlzO1xuXG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1haW5pbmdXYWl0KHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lLFxuICAgICAgICB0aW1lV2FpdGluZyA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmdcbiAgICAgID8gbmF0aXZlTWluKHRpbWVXYWl0aW5nLCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSlcbiAgICAgIDogdGltZVdhaXRpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTeW1ib2w7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSB0aW1lc3RhbXAgb2YgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2VcbiAqIHRoZSBVbml4IGVwb2NoICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lc3RhbXAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gTG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgaW52b2NhdGlvbi5cbiAqL1xudmFyIG5vdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBub3c7XG4iLCJ2YXIgZGVib3VuY2UgPSByZXF1aXJlKCcuL2RlYm91bmNlJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRocm90dGxlZCBmdW5jdGlvbiB0aGF0IG9ubHkgaW52b2tlcyBgZnVuY2AgYXQgbW9zdCBvbmNlIHBlclxuICogZXZlcnkgYHdhaXRgIG1pbGxpc2Vjb25kcy4gVGhlIHRocm90dGxlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGBcbiAqIG1ldGhvZCB0byBjYW5jZWwgZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG9cbiAqIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYFxuICogc2hvdWxkIGJlIGludm9rZWQgb24gdGhlIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YFxuICogdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZVxuICogdGhyb3R0bGVkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50IGNhbGxzIHRvIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gcmV0dXJuIHRoZVxuICogcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYCBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLnRocm90dGxlYCBhbmQgYF8uZGVib3VuY2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gdGhyb3R0bGUuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhyb3R0bGUgaW52b2NhdGlvbnMgdG8uXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgdGhyb3R0bGVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBleGNlc3NpdmVseSB1cGRhdGluZyB0aGUgcG9zaXRpb24gd2hpbGUgc2Nyb2xsaW5nLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Njcm9sbCcsIF8udGhyb3R0bGUodXBkYXRlUG9zaXRpb24sIDEwMCkpO1xuICpcbiAqIC8vIEludm9rZSBgcmVuZXdUb2tlbmAgd2hlbiB0aGUgY2xpY2sgZXZlbnQgaXMgZmlyZWQsIGJ1dCBub3QgbW9yZSB0aGFuIG9uY2UgZXZlcnkgNSBtaW51dGVzLlxuICogdmFyIHRocm90dGxlZCA9IF8udGhyb3R0bGUocmVuZXdUb2tlbiwgMzAwMDAwLCB7ICd0cmFpbGluZyc6IGZhbHNlIH0pO1xuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIHRocm90dGxlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyB0aHJvdHRsZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIHRocm90dGxlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsZWFkaW5nID0gdHJ1ZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gJ2xlYWRpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMubGVhZGluZyA6IGxlYWRpbmc7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuICByZXR1cm4gZGVib3VuY2UoZnVuYywgd2FpdCwge1xuICAgICdsZWFkaW5nJzogbGVhZGluZyxcbiAgICAnbWF4V2FpdCc6IHdhaXQsXG4gICAgJ3RyYWlsaW5nJzogdHJhaWxpbmdcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGhyb3R0bGU7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE5BTiA9IDAgLyAwO1xuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbSA9IC9eXFxzK3xcXHMrJC9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmFkIHNpZ25lZCBoZXhhZGVjaW1hbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCYWRIZXggPSAvXlstK10weFswLTlhLWZdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJpbmFyeSBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCaW5hcnkgPSAvXjBiWzAxXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvY3RhbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNPY3RhbCA9IC9eMG9bMC03XSskL2k7XG5cbi8qKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB3aXRob3V0IGEgZGVwZW5kZW5jeSBvbiBgcm9vdGAuICovXG52YXIgZnJlZVBhcnNlSW50ID0gcGFyc2VJbnQ7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9OdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gSW5maW5pdHlcbiAqXG4gKiBfLnRvTnVtYmVyKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyAob3RoZXIgKyAnJykgOiBvdGhlcjtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHJlVHJpbSwgJycpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b051bWJlcjtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCAnLi4vbW9kdWxlL2NvbW1vbi5wbHVnaW4nO1xyXG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnbG9kYXNoL3Rocm90dGxlJztcclxuaW1wb3J0IGJvZHlTY3JvbGxQcmV2ZW50IGZyb20gJy4uL21vZHVsZS9ib2R5U2Nyb2xsUHJldmVudCc7XHJcblxyXG4vLy8vLy8vLy8vLy9nbG9iYWwgdmFyaWFibGUvLy8vLy8vLy8vLy9cclxuXHJcbmNvbnN0IGJvZHkgPSAkKCdib2R5Jyk7XHJcbmNvbnN0IGFjY2Vzc0ZsYWcgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NlZCcpO1xyXG5cclxuLy8vLy8vLy8vLy8vRHJhdyBTVkcvLy8vLy8vLy8vLy9cclxuKCgpID0+IHtcclxuXHRjb25zdCBteWNMb2dvID0gJChcIiNteWNMb2dvXCIpLmRyYXdzdmcoe1xyXG5cdFx0ZHVyYXRpb246IDEwMDAsXHJcblx0XHRzdGFnZ2VyOiA4MCxcclxuXHRcdGVhc2luZzogXCJzd2luZ1wiLFxyXG5cdFx0Y2FsbGJhY2soKSB7XHJcblx0XHRcdCQoXCIjbXljTG9nbyBnXCIpLmFkZENsYXNzKFwiZmlsbEFuaW1cIik7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0aWYgKCFhY2Nlc3NGbGFnICYmIGJvZHkuaGFzQ2xhc3MoJ2hvbWUnKSkge1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdG15Y0xvZ28uY3NzKFwib3BhY2l0eVwiLCAxKS5kcmF3c3ZnKFwiYW5pbWF0ZVwiKTtcclxuXHRcdH0sIDE4MDApO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRteWNMb2dvLmNzcyhcIm9wYWNpdHlcIiwgMSkuZHJhd3N2ZyhcImFuaW1hdGVcIik7XHJcblx0fVxyXG59KSgpO1xyXG5cclxuLy8vLy8vLy8vLy8vc2Nyb2xsRXZlbnRzX3N0YXJ0Ly8vLy8vLy8vLy8vXHJcbiQoKCkgPT4ge1xyXG5cclxuXHQvL25hdkhlYWRlclNob3dfdmFyaWFibGVzXHJcblx0Y29uc3QgY2xvbmVOYXYgPSAkKCcjbmF2SGVhZGVyJykuY2xvbmUoKS5hdHRyKCdpZCcsICdjbG9uZU5hdicpLmFkZENsYXNzKCdjbG9uZU5hdicpLmluc2VydEFmdGVyKCcjbmF2SGVhZGVyJyk7XHJcblx0Y29uc3QgbG9nb01vdmUgPSAkKCcubG9nb0ZvbGxvdzpsYXN0Jyk7XHJcblx0Y29uc3Qgc2hvd0NsYXNzID0gJ2lzU2hvdyc7XHJcblx0Ly9zaG93VXBfdmFyaWFibGVzXHJcblx0Y29uc3QgZm9yU2hvdzEgPSAkKCcuZm9yU2hvdzEnKTtcclxuXHRjb25zdCBmb3JTaG93MiA9ICQoJy5mb3JTaG93MicpO1xyXG5cdGNvbnN0IGZvclNob3czID0gJCgnLmZvclNob3czJyk7XHJcblx0Y29uc3QgZm9yU2hvdzQgPSAkKCcuZm9yU2hvdzQnKTtcclxuXHRjb25zdCBmb3JTaG93cyA9IFtmb3JTaG93MSwgZm9yU2hvdzIsIGZvclNob3czLCBmb3JTaG93NF07XHJcblx0Ly90ZXh0aWxsYXRlX3ZhcmlhYmxlc1xyXG5cdGNvbnN0IGhlYWRpbmcgPSAkKCcuaGVhZGluZycpO1xyXG5cdC8vY29tbWVudEFuaW1fdmFyaWFibGVzXHJcblx0Y29uc3QgY29tbWVudEFuaW0gPSAkKCcjY29tbWVudEFuaW0nKTtcclxuXHQvL3JvbGxCYWNrX3ZhcmlhYmxlc1xyXG5cdGNvbnN0IHJvbGxCYWNrID0gJCgnI3JvbGxCYWNrJyk7XHJcblx0Ly9oZWxsb01vZ2lfdmFyaWFibGVzXHJcblx0Y29uc3QgbW9naUZvb3RlciA9ICQoJyNtb2dpRm9vdGVyJyk7XHJcblx0Y29uc3QgY29udGVudHNIZWlnaHQgPSAkKGRvY3VtZW50KS5oZWlnaHQoKTtcclxuXHJcblx0Ly8vL3Njcm9sbEV2ZW50cy8vLy9cclxuXHQkKHdpbmRvdykub24oJ3Njcm9sbCcsIHRocm90dGxlKGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHQvL2NvbW1vbl92YXJpYWJsZXNcclxuXHRcdGNvbnN0IHdpbmRvd0hlaWdodCA9ICQodGhpcykuaGVpZ2h0KCk7XHJcblx0XHRjb25zdCBzY3JvbGwgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG5cclxuXHRcdC8vbmF2SGVhZGVyU2hvd19mdW5jXHJcblx0XHRpZiAoc2Nyb2xsID4gNzAwKSB7XHJcblx0XHRcdGxvZ29Nb3ZlLmNzcygnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcclxuXHRcdFx0Y2xvbmVOYXYuYWRkQ2xhc3Moc2hvd0NsYXNzKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNsb25lTmF2LnJlbW92ZUNsYXNzKHNob3dDbGFzcyk7XHJcblx0XHR9XHJcblx0XHQvL3Nob3dVcF9mdW5jXHJcblx0XHRjb25zdCBsZW4gPSBmb3JTaG93cy5sZW5ndGg7XHJcblx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGxlbjsgaisrKSB7XHJcblx0XHRcdGZvclNob3dzW2pdLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuXHRcdFx0XHRjb25zdCBmb3JTaG93UG9pbnQgPSAkKHRoaXMpLm9mZnNldCgpLnRvcCAtIDMwO1xyXG5cdFx0XHRcdGNvbnN0IGRlbGF5VGltZSA9IDkwO1xyXG5cdFx0XHRcdGlmIChzY3JvbGwgPiBmb3JTaG93UG9pbnQgLSB3aW5kb3dIZWlnaHQpIHtcclxuXHRcdFx0XHRcdCQodGhpcykuZGVsYXkoaSAqIGRlbGF5VGltZSkucXVldWUoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdzaG93VXAnKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHQvL3RleHRpbGxhdGVfZnVuY1xyXG5cdFx0aGVhZGluZy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0Y29uc3QgaGVhZGluZ1BvaW50ID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XHJcblx0XHRcdGlmIChzY3JvbGwgPiBoZWFkaW5nUG9pbnQgLSB3aW5kb3dIZWlnaHQpIHtcclxuXHRcdFx0XHQkKHRoaXMpLmNzcygnb3BhY2l0eScsIDEpLnRleHRpbGxhdGUoe1xyXG5cdFx0XHRcdFx0aW46IHtcclxuXHRcdFx0XHRcdFx0ZWZmZWN0OiAnZmFkZUluVXAnLFxyXG5cdFx0XHRcdFx0XHRzaHVmZmxlOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRkZWxheTogMjAsXHJcblx0XHRcdFx0XHRcdGRlbGF5U2NhbGU6IDMsXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0Ly9jb21tZW50QW5pbV9mdW5jXHJcblx0XHRpZiAoY29tbWVudEFuaW0ubGVuZ3RoKSB7XHJcblx0XHRcdGNvbnN0IG15Q29tbWVudFBvaW50ID0gY29tbWVudEFuaW0ub2Zmc2V0KCkudG9wO1xyXG5cdFx0XHRpZiAoc2Nyb2xsID4gbXlDb21tZW50UG9pbnQgLSB3aW5kb3dIZWlnaHQpIHtcclxuXHRcdFx0XHRjb21tZW50QW5pbS5jc3MoJ29wYWNpdHknLCAxKS5hZGRDbGFzcygnYW5pbWF0ZWQgem9vbUluRG93bicpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQvL3JvbGxCYWNrX2Z1bmNcclxuXHRcdGlmIChzY3JvbGwgPiA3MDApIHtcclxuXHRcdFx0cm9sbEJhY2suZmFkZUluKDUwMCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyb2xsQmFjay5mYWRlT3V0KDUwMCk7XHJcblx0XHR9XHJcblx0XHQvL2hlbGxvTW9naV9mdW5jXHJcblx0XHRpZiAoY29udGVudHNIZWlnaHQgLSAoc2Nyb2xsICsgd2luZG93SGVpZ2h0KSA8IDEwMCkge1xyXG5cdFx0XHRtb2dpRm9vdGVyLnNob3coZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2hlbGxvTW9naScpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChtb2dpRm9vdGVyLmhhc0NsYXNzKCdoZWxsb01vZ2knKSkge1xyXG5cdFx0XHRcdG1vZ2lGb290ZXIuZmFkZU91dCgyMDAsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2hlbGxvTW9naScpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdH0sIDE1MCkpO1xyXG5cdC8vLy9zY3JvbGxFdmVudHMvLy8vXHJcblxyXG5cdC8vLy9vcHRpb25hbF9mdW5jLy8vL1xyXG5cdC8vcm9sbEJhY2tDbGlja2VkXHJcblx0cm9sbEJhY2sub24oJ2NsaWNrJywoKSA9PiB7XHJcblx0XHQkKCdib2R5LGh0bWwnKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIDcwMCwgJ2Vhc2VJbk91dFF1YXJ0Jyk7XHJcblx0fSk7XHJcblx0Ly8vL29wdGlvbmFsX2Z1bmMvLy8vXHJcblxyXG59KTtcclxuLy8vLy8vLy8vLy8vc2Nyb2xsRXZlbnRzX2VuZC8vLy8vLy8vLy8vL1xyXG5cclxuLy8vLy8vLy8vLy8vc3BOYXZIZWFkZXIvLy8vLy8vLy8vLy9cclxuJCgoKSA9PiB7XHJcblx0Y29uc3QgaGFtYkJ0bnMgPSAkKCcjaGFtYkJ0bicpO1xyXG5cdGNvbnN0IGhhbWJCdG4xID0gJCgnLmhhbWJCdG4xJyk7XHJcblx0Y29uc3QgaGFtYkJ0bjIgPSAkKCcuaGFtYkJ0bjInKTtcclxuXHRjb25zdCBoYW1iQnRuMyA9ICQoJy5oYW1iQnRuMycpO1xyXG5cdGNvbnN0IHNwTmF2ID0gJCgnI3NwTmF2SGVhZGVyJyk7XHJcblx0Y29uc3Qgc3BOYXZMaXN0cyA9ICQoJy5zcE5hdkhlYWRlciB1bCBsaScpO1xyXG5cdGNvbnN0IHNwTmF2TGluayA9ICQoJyNzcE5hdkhlYWRlciBsaSBhJyk7XHJcblx0Y29uc3QgZGVsYXlUaW1lID0gODA7XHJcblx0Y29uc3QgZmFkZVRpbWUgPSAyMDA7XHJcblx0aGFtYkJ0bnMub24oJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0dG9nZ2xlTmF2KCk7XHJcblx0XHRpZiAoc3BOYXZMaXN0cy5jc3MoJ2Rpc3BsYXknKSA9PSAnbGlzdC1pdGVtJykge1xyXG5cdFx0XHRzcE5hdkxpc3RzLmZhZGVPdXQoZmFkZVRpbWUpO1xyXG5cdFx0XHRib2R5U2Nyb2xsUHJldmVudChmYWxzZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRib2R5U2Nyb2xsUHJldmVudCh0cnVlKTtcclxuXHRcdFx0c3BOYXZMaXN0cy5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcblx0XHRcdFx0JCh0aGlzKS5kZWxheShpICogZGVsYXlUaW1lKS5mYWRlSW4oZmFkZVRpbWUpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRzcE5hdkxpbmsub24oJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0Ym9keVNjcm9sbFByZXZlbnQoZmFsc2UpO1xyXG5cdFx0dG9nZ2xlTmF2KCk7XHJcblx0XHRzcE5hdkxpc3RzLmhpZGUoKTtcclxuXHR9KTtcclxuXHRmdW5jdGlvbiB0b2dnbGVOYXYoKSB7XHJcblx0XHRpZiAoIXNwTmF2Lmhhc0NsYXNzKCdpcy1zaG93JykpIHtcclxuXHRcdFx0c3BOYXYuZmFkZUluKGZhZGVUaW1lKS5hZGRDbGFzcygnaXMtc2hvdycpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3BOYXYuZmFkZU91dChmYWRlVGltZSwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2lzLXNob3cnKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aGFtYkJ0bjEudG9nZ2xlQ2xhc3MoJ2hhbWJNb3ZlMScpO1xyXG5cdFx0aGFtYkJ0bjIudG9nZ2xlQ2xhc3MoJ2hhbWJNb3ZlMicpO1xyXG5cdFx0aGFtYkJ0bjMudG9nZ2xlQ2xhc3MoJ2hhbWJNb3ZlMycpO1xyXG5cdH1cclxufSk7XHJcbi8vLy8vLy8vLy8vL3NwTmF2SGVhZGVyLy8vLy8vLy8vLy8vXHJcbi8v4oaRY2FuIG5vdCByZXBsYWNl4oaTLy9cclxuLy8vLy8vLy8vLy8vc21vb3RoU2Nyb2xsLy8vLy8vLy8vLy8vXHJcbiQoKCkgPT4ge1xyXG5cdCQoJy5uYXZIZWFkZXIgYVtocmVmXj1cIiNcIl0nKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IGhyZWYgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuXHRcdGNvbnN0IHRhcmdldCA9ICQoaHJlZiA9PSAnIycgfHwgaHJlZiA9PT0gJycgPyAnaHRtbCcgOiBocmVmKTtcclxuXHRcdGNvbnN0IHBvc2l0aW9uID0gdGFyZ2V0Lm9mZnNldCgpLnRvcDtcclxuXHRcdGlmIChocmVmID09PSAnI2NvbnRhY3QnKSB7XHJcblx0XHRcdCQoJ2h0bWwsYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IHBvc2l0aW9uIH0sIDcwMCwgJ2Vhc2VJbk91dFF1YXJ0Jyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkKCdodG1sLGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiBwb3NpdGlvbiAtIDUwIH0sIDcwMCwgJ2Vhc2VJbk91dFF1YXJ0Jyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblx0JCgnI3NwTmF2SGVhZGVyIGFbaHJlZl49XCIjXCJdJykub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCBocmVmID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcblx0XHRjb25zdCB0YXJnZXQgPSAkKGhyZWYgPT0gJyMnIHx8IGhyZWYgPT09ICcnID8gJ2h0bWwnIDogaHJlZik7XHJcblx0XHRjb25zdCBwb3NpdGlvbiA9IHRhcmdldC5vZmZzZXQoKS50b3A7XHJcblx0XHRpZiAoaHJlZiA9PT0gJyNjb250YWN0Jykge1xyXG5cdFx0XHQkKCdodG1sLGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiBwb3NpdGlvbiArIDEwMCB9LCA3MDAsICdlYXNlSW5PdXRRdWFydCcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogcG9zaXRpb24gKyA1MCB9LCA3MDAsICdlYXNlSW5PdXRRdWFydCcpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG59KTtcclxuLy8vLy8vLy8vLy8vc21vb3RoU2Nyb2xsLy8vLy8vLy8vLy8vXHJcblxyXG4vLy8vLy8vLy8vLy9vdGhlcnBhZ2UgdG8gZnJvbnRwYWdlLy8vLy8vLy8vLy8vXHJcbiQod2luZG93KS5vbignbG9hZCcsICgpID0+IHtcclxuXHRjb25zdCBmaXhQeCA9IC01MDtcclxuXHRjb25zdCB1cmwgPSAkKGxvY2F0aW9uKS5hdHRyKCdocmVmJyk7XHJcblx0aWYgKHVybC5pbmNsdWRlcyhcIj9pZD1cIikpIHtcclxuXHRcdGNvbnN0IGlkTmFtZSA9IHVybC5zcGxpdChcIj9pZD1cIik7XHJcblx0XHRjb25zdCB0YXJnZXQgPSAkKGAjJHtpZE5hbWVbaWROYW1lLmxlbmd0aCAtIDFdfWApO1xyXG5cdFx0aWYgKHRhcmdldC5sZW5ndGgpIHtcclxuXHRcdFx0Y29uc3QgcG9zID0gdGFyZ2V0Lm9mZnNldCgpLnRvcCArIGZpeFB4O1xyXG5cdFx0XHRpZiAoKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignaVBob25lJykgPiAwICYmICFuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKCdpUGFkJykpIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignaVBvZCcpID4gMCB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0FuZHJvaWQnKSA+IDApIHtcclxuXHRcdFx0XHRpZiAodGFyZ2V0LnByb3AoJ2lkJykgPT0gXCJjb250YWN0XCIpIHtcclxuXHRcdFx0XHRcdCQoXCJodG1sLCBib2R5XCIpLnNjcm9sbFRvcChwb3MgKyAxNTApO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkKFwiaHRtbCwgYm9keVwiKS5zY3JvbGxUb3AocG9zICsgMTAwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKHRhcmdldC5wcm9wKCdpZCcpID09IFwiY29udGFjdFwiKSB7XHJcblx0XHRcdFx0XHQkKFwiaHRtbCwgYm9keVwiKS5zY3JvbGxUb3AocG9zICsgNTApO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkKFwiaHRtbCwgYm9keVwiKS5zY3JvbGxUb3AocG9zKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn0pO1xyXG4vLy8vLy8vLy8vLy9vdGhlcnBhZ2UgdG8gZnJvbnRwYWdlLy8vLy8vLy8vLy8vXHJcblxyXG4vLy8vLy8vLy8vLy9tb2RhbC8vLy8vLy8vLy8vL1xyXG4kKCgpID0+IHtcclxuXHQkKCcubW9kYWxPcGVuJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0Ym9keVNjcm9sbFByZXZlbnQodHJ1ZSk7XHJcblx0XHRpZiAoJCh0aGlzKS5wYXJlbnRzKCcjc3BOYXZIZWFkZXInKVswXSkge1xyXG5cdFx0XHQkKCcjbW9kYWxBcmVhJykuc2hvdygpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JCgnI21vZGFsQXJlYScpLmZhZGVJbigpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCQoJyNjb250YWN0JykpIHtcclxuXHRcdFx0JCgnI2NvbnRhY3QnKS50b2dnbGVDbGFzcygnaXMtcGFzc2l2ZScpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdCQoJyNtb2RhbENsb3NlLCNtb2RhbE91dGVyJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0JCgnI21vZGFsQXJlYScpLmZhZGVPdXQoKCkgPT4ge1xyXG5cdFx0XHRib2R5U2Nyb2xsUHJldmVudChmYWxzZSk7XHJcblx0XHRcdGlmICgkKCcjY29udGFjdCcpKSB7XHJcblx0XHRcdFx0JCgnI2NvbnRhY3QnKS50b2dnbGVDbGFzcygnaXMtcGFzc2l2ZScpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9KTtcclxufSk7XHJcbi8vLy8vLy8vLy8vL21vZGFsLy8vLy8vLy8vLy8vXHJcblxyXG4vLy8vLy8vLy8vLy9zY3JvbGwgY29udHJvbCBmb3IgZnVja2luJ0lFMTEvLy8vLy8vLy8vLy9cclxuaWYgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL01TSUUgMTAvaSkgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVHJpZGVudFxcLzdcXC4vKSB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvMTJcXC4vKSkge1xyXG5cdCQoJ2JvZHknKS5vbihcIm1vdXNld2hlZWxcIiwgKCkgPT4ge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNvbnN0IHdkID0gZXZlbnQud2hlZWxEZWx0YTtcclxuXHRcdGNvbnN0IGNzcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLCBjc3AgLSB3ZCk7XHJcblx0fSk7XHJcbn1cclxuLy8vLy8vLy8vLy8vc2Nyb2xsIGNvbnRyb2wgZm9yIGZ1Y2tpbidJRTExLy8vLy8vLy8vLy8vXHJcblxyXG4vLy8vLy8vLy8vLy9zY3JvbGxUcmlnZ2VyQWxsLWJvdHRvbUZpeEFic29sdXRlbHkhISEvLy8vLy8vLy8vLy9cclxuJCgoKSA9PiB7XHJcblx0JCh3aW5kb3cpLnRyaWdnZXIoJ3Njcm9sbCcpO1xyXG59KTtcclxuLy8vLy8vLy8vLy8vc2Nyb2xsVHJpZ2dlckFsbC1ib3R0b21GaXhBYnNvbHV0ZWx5ISEhLy8vLy8vLy8vLy8vXHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJvZHlTY3JvbGxQcmV2ZW50KGZsYWcpIHtcclxuXHRsZXQgc2Nyb2xsUG9zaXRpb247XHJcblx0Y29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XHJcblx0Y29uc3QgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xyXG5cdGNvbnN0IGlzaU9TID0gdWEuaW5kZXhPZignaXBob25lJykgPiAtMSB8fCB1YS5pbmRleE9mKCdpcGFkJykgPiAtMSB8fCB1YS5pbmRleE9mKCdtYWNpbnRvc2gnKSA+IC0xICYmICdvbnRvdWNoZW5kJyBpbiBkb2N1bWVudDtcclxuXHRjb25zdCBzY3JvbGxCYXJXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcclxuXHRpZiAoZmxhZykge1xyXG5cdFx0Ym9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBzY3JvbGxCYXJXaWR0aCArICdweCc7XHJcblx0XHRpZiAoaXNpT1MpIHtcclxuXHRcdFx0c2Nyb2xsUG9zaXRpb24gPSAtd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cdFx0XHRib2R5LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuXHRcdFx0Ym9keS5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuXHRcdFx0Ym9keS5zdHlsZS50b3AgPSBzY3JvbGxQb3NpdGlvbiArICdweCc7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcblx0XHR9XHJcblx0fSBlbHNlIGlmICghZmxhZykge1xyXG5cdFx0Ym9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJztcclxuXHRcdGlmIChpc2lPUykge1xyXG5cdFx0XHRzY3JvbGxQb3NpdGlvbiA9IHBhcnNlSW50KGJvZHkuc3R5bGUudG9wLnJlcGxhY2UoL1teMC05XS9nLCAnJykpO1xyXG5cdFx0XHRib2R5LnN0eWxlLnBvc2l0aW9uID0gJyc7XHJcblx0XHRcdGJvZHkuc3R5bGUud2lkdGggPSAnJztcclxuXHRcdFx0Ym9keS5zdHlsZS50b3AgPSAnJztcclxuXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIHNjcm9sbFBvc2l0aW9uKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuXHRcdH1cclxuXHR9XHJcbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG4vLy8vLy8vLy8vLy8vL3RleHRpbGxhdGUuanMvLy8vLy8vLy8vLy8vL1xyXG4vKlxyXG4gKiB0ZXh0aWxsYXRlLmpzXHJcbiAqIGh0dHA6Ly9qc2Noci5naXRodWIuY29tL3RleHRpbGxhdGVcclxuICogTUlUIGxpY2Vuc2VkXHJcbiAqXHJcbiAqIENvcHlyaWdodCAoQykgMjAxMi0yMDEzIEpvcmRhbiBTY2hyb3RlclxyXG4gKi9cclxuXHJcbihmdW5jdGlvbiAoJCkge1xyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHRmdW5jdGlvbiBpc0luRWZmZWN0KGVmZmVjdCkge1xyXG5cdFx0cmV0dXJuIC9Jbi8udGVzdChlZmZlY3QpIHx8ICQuaW5BcnJheShlZmZlY3QsICQuZm4udGV4dGlsbGF0ZS5kZWZhdWx0cy5pbkVmZmVjdHMpID49IDA7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBpc091dEVmZmVjdChlZmZlY3QpIHtcclxuXHRcdHJldHVybiAvT3V0Ly50ZXN0KGVmZmVjdCkgfHwgJC5pbkFycmF5KGVmZmVjdCwgJC5mbi50ZXh0aWxsYXRlLmRlZmF1bHRzLm91dEVmZmVjdHMpID49IDA7XHJcblx0fVxyXG5cclxuXHJcblx0ZnVuY3Rpb24gc3RyaW5nVG9Cb29sZWFuKHN0cikge1xyXG5cdFx0aWYgKHN0ciAhPT0gXCJ0cnVlXCIgJiYgc3RyICE9PSBcImZhbHNlXCIpIHJldHVybiBzdHI7XHJcblx0XHRyZXR1cm4gKHN0ciA9PT0gXCJ0cnVlXCIpO1xyXG5cdH1cclxuXHJcblx0Ly8gY3VzdG9tIGdldCBkYXRhIGFwaSBtZXRob2RcclxuXHRmdW5jdGlvbiBnZXREYXRhKG5vZGUpIHtcclxuXHRcdHZhciBhdHRycyA9IG5vZGUuYXR0cmlidXRlcyB8fCBbXVxyXG5cdFx0XHQsIGRhdGEgPSB7fTtcclxuXHJcblx0XHRpZiAoIWF0dHJzLmxlbmd0aCkgcmV0dXJuIGRhdGE7XHJcblxyXG5cdFx0JC5lYWNoKGF0dHJzLCBmdW5jdGlvbiAoaSwgYXR0cikge1xyXG5cdFx0XHR2YXIgbm9kZU5hbWUgPSBhdHRyLm5vZGVOYW1lLnJlcGxhY2UoL2RlbGF5c2NhbGUvLCAnZGVsYXlTY2FsZScpO1xyXG5cdFx0XHRpZiAoL15kYXRhLWluLSovLnRlc3Qobm9kZU5hbWUpKSB7XHJcblx0XHRcdFx0ZGF0YS5pbiA9IGRhdGEuaW4gfHwge307XHJcblx0XHRcdFx0ZGF0YS5pbltub2RlTmFtZS5yZXBsYWNlKC9kYXRhLWluLS8sICcnKV0gPSBzdHJpbmdUb0Jvb2xlYW4oYXR0ci5ub2RlVmFsdWUpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKC9eZGF0YS1vdXQtKi8udGVzdChub2RlTmFtZSkpIHtcclxuXHRcdFx0XHRkYXRhLm91dCA9IGRhdGEub3V0IHx8IHt9O1xyXG5cdFx0XHRcdGRhdGEub3V0W25vZGVOYW1lLnJlcGxhY2UoL2RhdGEtb3V0LS8sICcnKV0gPSBzdHJpbmdUb0Jvb2xlYW4oYXR0ci5ub2RlVmFsdWUpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKC9eZGF0YS0qLy50ZXN0KG5vZGVOYW1lKSkge1xyXG5cdFx0XHRcdGRhdGFbbm9kZU5hbWUucmVwbGFjZSgvZGF0YS0vLCAnJyldID0gc3RyaW5nVG9Cb29sZWFuKGF0dHIubm9kZVZhbHVlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIGRhdGE7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBzaHVmZmxlKG8pIHtcclxuXHRcdGZvciAodmFyIGosIHgsIGkgPSBvLmxlbmd0aDsgaTsgaiA9IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiBpKSwgeCA9IG9bLS1pXSwgb1tpXSA9IG9bal0sIG9bal0gPSB4KTtcclxuXHRcdHJldHVybiBvO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYW5pbWF0ZSgkdCwgZWZmZWN0LCBjYikge1xyXG5cdFx0JHQuYWRkQ2xhc3MoJ2FuaW1hdGVkICcgKyBlZmZlY3QpXHJcblx0XHRcdC5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpXHJcblx0XHRcdC5zaG93KCk7XHJcblxyXG5cdFx0JHQub25lKCd3ZWJraXRBbmltYXRpb25FbmQgbW96QW5pbWF0aW9uRW5kIE1TQW5pbWF0aW9uRW5kIG9hbmltYXRpb25lbmQgYW5pbWF0aW9uZW5kJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHQkdC5yZW1vdmVDbGFzcygnYW5pbWF0ZWQgJyArIGVmZmVjdCk7XHJcblx0XHRcdGNiICYmIGNiKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGFuaW1hdGVUb2tlbnMoJHRva2Vucywgb3B0aW9ucywgY2IpIHtcclxuXHRcdHZhciB0aGF0ID0gdGhpc1xyXG5cdFx0XHQsIGNvdW50ID0gJHRva2Vucy5sZW5ndGg7XHJcblxyXG5cdFx0aWYgKCFjb3VudCkge1xyXG5cdFx0XHRjYiAmJiBjYigpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKG9wdGlvbnMuc2h1ZmZsZSkgJHRva2VucyA9IHNodWZmbGUoJHRva2Vucyk7XHJcblx0XHRpZiAob3B0aW9ucy5yZXZlcnNlKSAkdG9rZW5zID0gJHRva2Vucy50b0FycmF5KCkucmV2ZXJzZSgpO1xyXG5cclxuXHRcdCQuZWFjaCgkdG9rZW5zLCBmdW5jdGlvbiAoaSwgdCkge1xyXG5cdFx0XHR2YXIgJHRva2VuID0gJCh0KTtcclxuXHJcblx0XHRcdGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xyXG5cdFx0XHRcdGlmIChpc0luRWZmZWN0KG9wdGlvbnMuZWZmZWN0KSkge1xyXG5cdFx0XHRcdFx0JHRva2VuLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChpc091dEVmZmVjdChvcHRpb25zLmVmZmVjdCkpIHtcclxuXHRcdFx0XHRcdCR0b2tlbi5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNvdW50IC09IDE7XHJcblx0XHRcdFx0aWYgKCFjb3VudCAmJiBjYikgY2IoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIGRlbGF5ID0gb3B0aW9ucy5zeW5jID8gb3B0aW9ucy5kZWxheSA6IG9wdGlvbnMuZGVsYXkgKiBpICogb3B0aW9ucy5kZWxheVNjYWxlO1xyXG5cclxuXHRcdFx0JHRva2VuLnRleHQoKSA/XHJcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7IGFuaW1hdGUoJHRva2VuLCBvcHRpb25zLmVmZmVjdCwgY29tcGxldGUpOyB9LCBkZWxheSkgOlxyXG5cdFx0XHRcdGNvbXBsZXRlKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHZhciBUZXh0aWxsYXRlID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuXHRcdHZhciBiYXNlID0gdGhpc1xyXG5cdFx0XHQsICRlbGVtZW50ID0gJChlbGVtZW50KTtcclxuXHJcblx0XHRiYXNlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGJhc2UuJHRleHRzID0gJGVsZW1lbnQuZmluZChvcHRpb25zLnNlbGVjdG9yKTtcclxuXHJcblx0XHRcdGlmICghYmFzZS4kdGV4dHMubGVuZ3RoKSB7XHJcblx0XHRcdFx0YmFzZS4kdGV4dHMgPSAkKCc8dWwgY2xhc3M9XCJ0ZXh0c1wiPjxsaT4nICsgJGVsZW1lbnQuaHRtbCgpICsgJzwvbGk+PC91bD4nKTtcclxuXHRcdFx0XHQkZWxlbWVudC5odG1sKGJhc2UuJHRleHRzKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YmFzZS4kdGV4dHMuaGlkZSgpO1xyXG5cclxuXHRcdFx0YmFzZS4kY3VycmVudCA9ICQoJzxzcGFuPicpXHJcblx0XHRcdFx0Lmh0bWwoYmFzZS4kdGV4dHMuZmluZCgnOmZpcnN0LWNoaWxkJykuaHRtbCgpKVxyXG5cdFx0XHRcdC5wcmVwZW5kVG8oJGVsZW1lbnQpO1xyXG5cclxuXHRcdFx0aWYgKGlzSW5FZmZlY3Qob3B0aW9ucy5pbi5lZmZlY3QpKSB7XHJcblx0XHRcdFx0YmFzZS4kY3VycmVudC5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XHJcblx0XHRcdH0gZWxzZSBpZiAoaXNPdXRFZmZlY3Qob3B0aW9ucy5vdXQuZWZmZWN0KSkge1xyXG5cdFx0XHRcdGJhc2UuJGN1cnJlbnQuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YmFzZS5zZXRPcHRpb25zKG9wdGlvbnMpO1xyXG5cclxuXHRcdFx0YmFzZS50aW1lb3V0UnVuID0gbnVsbDtcclxuXHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGJhc2Uub3B0aW9ucy5hdXRvU3RhcnQgJiYgYmFzZS5zdGFydCgpO1xyXG5cdFx0XHR9LCBiYXNlLm9wdGlvbnMuaW5pdGlhbERlbGF5KTtcclxuXHRcdH07XHJcblxyXG5cdFx0YmFzZS5zZXRPcHRpb25zID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuXHRcdFx0YmFzZS5vcHRpb25zID0gb3B0aW9ucztcclxuXHRcdH07XHJcblxyXG5cdFx0YmFzZS50cmlnZ2VyRXZlbnQgPSBmdW5jdGlvbiAobmFtZSkge1xyXG5cdFx0XHR2YXIgZSA9ICQuRXZlbnQobmFtZSArICcudGx0Jyk7XHJcblx0XHRcdCRlbGVtZW50LnRyaWdnZXIoZSwgYmFzZSk7XHJcblx0XHRcdHJldHVybiBlO1xyXG5cdFx0fTtcclxuXHJcblx0XHRiYXNlLmluID0gZnVuY3Rpb24gKGluZGV4LCBjYikge1xyXG5cdFx0XHRpbmRleCA9IGluZGV4IHx8IDA7XHJcblxyXG5cdFx0XHR2YXIgJGVsZW0gPSBiYXNlLiR0ZXh0cy5maW5kKCc6bnRoLWNoaWxkKCcgKyAoKGluZGV4IHx8IDApICsgMSkgKyAnKScpXHJcblx0XHRcdFx0LCBvcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sIGJhc2Uub3B0aW9ucywgJGVsZW0ubGVuZ3RoID8gZ2V0RGF0YSgkZWxlbVswXSkgOiB7fSlcclxuXHRcdFx0XHQsICR0b2tlbnM7XHJcblxyXG5cdFx0XHQkZWxlbS5hZGRDbGFzcygnY3VycmVudCcpO1xyXG5cclxuXHRcdFx0YmFzZS50cmlnZ2VyRXZlbnQoJ2luQW5pbWF0aW9uQmVnaW4nKTtcclxuXHRcdFx0JGVsZW1lbnQuYXR0cignZGF0YS1hY3RpdmUnLCAkZWxlbS5kYXRhKCdpZCcpKTtcclxuXHJcblx0XHRcdGJhc2UuJGN1cnJlbnRcclxuXHRcdFx0XHQuaHRtbCgkZWxlbS5odG1sKCkpXHJcblx0XHRcdFx0LmxldHRlcmluZygnd29yZHMnKTtcclxuXHJcblx0XHRcdC8vIHNwbGl0IHdvcmRzIHRvIGluZGl2aWR1YWwgY2hhcmFjdGVycyBpZiB0b2tlbiB0eXBlIGlzIHNldCB0byAnY2hhcidcclxuXHRcdFx0aWYgKGJhc2Uub3B0aW9ucy50eXBlID09IFwiY2hhclwiKSB7XHJcblx0XHRcdFx0YmFzZS4kY3VycmVudC5maW5kKCdbY2xhc3NePVwid29yZFwiXScpXHJcblx0XHRcdFx0XHQuY3NzKHtcclxuXHRcdFx0XHRcdFx0J2Rpc3BsYXknOiAnaW5saW5lLWJsb2NrJyxcclxuXHRcdFx0XHRcdFx0Ly8gZml4IGZvciBwb29yIGlvcyBwZXJmb3JtYW5jZVxyXG5cdFx0XHRcdFx0XHQnLXdlYmtpdC10cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoMCwwLDApJyxcclxuXHRcdFx0XHRcdFx0Jy1tb3otdHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKDAsMCwwKScsXHJcblx0XHRcdFx0XHRcdCctby10cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoMCwwLDApJyxcclxuXHRcdFx0XHRcdFx0J3RyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCgwLDAsMCknXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LmVhY2goZnVuY3Rpb24gKCkgeyAkKHRoaXMpLmxldHRlcmluZygpOyB9KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0JHRva2VucyA9IGJhc2UuJGN1cnJlbnRcclxuXHRcdFx0XHQuZmluZCgnW2NsYXNzXj1cIicgKyBiYXNlLm9wdGlvbnMudHlwZSArICdcIl0nKVxyXG5cdFx0XHRcdC5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XHJcblxyXG5cdFx0XHRpZiAoaXNJbkVmZmVjdChvcHRpb25zLmluLmVmZmVjdCkpIHtcclxuXHRcdFx0XHQkdG9rZW5zLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuXHRcdFx0fSBlbHNlIGlmIChpc091dEVmZmVjdChvcHRpb25zLmluLmVmZmVjdCkpIHtcclxuXHRcdFx0XHQkdG9rZW5zLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGJhc2UuY3VycmVudEluZGV4ID0gaW5kZXg7XHJcblxyXG5cdFx0XHRhbmltYXRlVG9rZW5zKCR0b2tlbnMsIG9wdGlvbnMuaW4sIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRiYXNlLnRyaWdnZXJFdmVudCgnaW5BbmltYXRpb25FbmQnKTtcclxuXHRcdFx0XHRpZiAob3B0aW9ucy5pbi5jYWxsYmFjaykgb3B0aW9ucy5pbi5jYWxsYmFjaygpO1xyXG5cdFx0XHRcdGlmIChjYikgY2IoYmFzZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fTtcclxuXHJcblx0XHRiYXNlLm91dCA9IGZ1bmN0aW9uIChjYikge1xyXG5cdFx0XHR2YXIgJGVsZW0gPSBiYXNlLiR0ZXh0cy5maW5kKCc6bnRoLWNoaWxkKCcgKyAoKGJhc2UuY3VycmVudEluZGV4IHx8IDApICsgMSkgKyAnKScpXHJcblx0XHRcdFx0LCAkdG9rZW5zID0gYmFzZS4kY3VycmVudC5maW5kKCdbY2xhc3NePVwiJyArIGJhc2Uub3B0aW9ucy50eXBlICsgJ1wiXScpXHJcblx0XHRcdFx0LCBvcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sIGJhc2Uub3B0aW9ucywgJGVsZW0ubGVuZ3RoID8gZ2V0RGF0YSgkZWxlbVswXSkgOiB7fSk7XHJcblxyXG5cdFx0XHRiYXNlLnRyaWdnZXJFdmVudCgnb3V0QW5pbWF0aW9uQmVnaW4nKTtcclxuXHJcblx0XHRcdGFuaW1hdGVUb2tlbnMoJHRva2Vucywgb3B0aW9ucy5vdXQsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHQkZWxlbS5yZW1vdmVDbGFzcygnY3VycmVudCcpO1xyXG5cdFx0XHRcdGJhc2UudHJpZ2dlckV2ZW50KCdvdXRBbmltYXRpb25FbmQnKTtcclxuXHRcdFx0XHQkZWxlbWVudC5yZW1vdmVBdHRyKCdkYXRhLWFjdGl2ZScpO1xyXG5cdFx0XHRcdGlmIChvcHRpb25zLm91dC5jYWxsYmFjaykgb3B0aW9ucy5vdXQuY2FsbGJhY2soKTtcclxuXHRcdFx0XHRpZiAoY2IpIGNiKGJhc2UpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH07XHJcblxyXG5cdFx0YmFzZS5zdGFydCA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRiYXNlLnRyaWdnZXJFdmVudCgnc3RhcnQnKTtcclxuXHJcblx0XHRcdFx0KGZ1bmN0aW9uIHJ1bihpbmRleCkge1xyXG5cdFx0XHRcdFx0YmFzZS5pbihpbmRleCwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHR2YXIgbGVuZ3RoID0gYmFzZS4kdGV4dHMuY2hpbGRyZW4oKS5sZW5ndGg7XHJcblxyXG5cdFx0XHRcdFx0XHRpbmRleCArPSAxO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCFiYXNlLm9wdGlvbnMubG9vcCAmJiBpbmRleCA+PSBsZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoYmFzZS5vcHRpb25zLmNhbGxiYWNrKSBiYXNlLm9wdGlvbnMuY2FsbGJhY2soKTtcclxuXHRcdFx0XHRcdFx0XHRiYXNlLnRyaWdnZXJFdmVudCgnZW5kJyk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0aW5kZXggPSBpbmRleCAlIGxlbmd0aDtcclxuXHJcblx0XHRcdFx0XHRcdFx0YmFzZS50aW1lb3V0UnVuID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRiYXNlLm91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJ1bihpbmRleCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHR9LCBiYXNlLm9wdGlvbnMubWluRGlzcGxheVRpbWUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KGluZGV4IHx8IDApKTtcclxuXHRcdFx0fSwgYmFzZS5vcHRpb25zLmluaXRpYWxEZWxheSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGJhc2Uuc3RvcCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKGJhc2UudGltZW91dFJ1bikge1xyXG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwoYmFzZS50aW1lb3V0UnVuKTtcclxuXHRcdFx0XHRiYXNlLnRpbWVvdXRSdW4gPSBudWxsO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGJhc2UuaW5pdCgpO1xyXG5cdH07XHJcblxyXG5cdCQuZm4udGV4dGlsbGF0ZSA9IGZ1bmN0aW9uIChzZXR0aW5ncywgYXJncykge1xyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcylcclxuXHRcdFx0XHQsIGRhdGEgPSAkdGhpcy5kYXRhKCd0ZXh0aWxsYXRlJylcclxuXHRcdFx0XHQsIG9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB7fSwgJC5mbi50ZXh0aWxsYXRlLmRlZmF1bHRzLCBnZXREYXRhKHRoaXMpLCB0eXBlb2Ygc2V0dGluZ3MgPT0gJ29iamVjdCcgJiYgc2V0dGluZ3MpO1xyXG5cclxuXHRcdFx0aWYgKCFkYXRhKSB7XHJcblx0XHRcdFx0JHRoaXMuZGF0YSgndGV4dGlsbGF0ZScsIChkYXRhID0gbmV3IFRleHRpbGxhdGUodGhpcywgb3B0aW9ucykpKTtcclxuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2Ygc2V0dGluZ3MgPT0gJ3N0cmluZycpIHtcclxuXHRcdFx0XHRkYXRhW3NldHRpbmdzXS5hcHBseShkYXRhLCBbXS5jb25jYXQoYXJncykpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGRhdGEuc2V0T3B0aW9ucy5jYWxsKGRhdGEsIG9wdGlvbnMpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHQkLmZuLnRleHRpbGxhdGUuZGVmYXVsdHMgPSB7XHJcblx0XHRzZWxlY3RvcjogJy50ZXh0cycsXHJcblx0XHRsb29wOiBmYWxzZSxcclxuXHRcdG1pbkRpc3BsYXlUaW1lOiAyMDAwLFxyXG5cdFx0aW5pdGlhbERlbGF5OiAwLFxyXG5cdFx0aW46IHtcclxuXHRcdFx0ZWZmZWN0OiAnZmFkZUluTGVmdEJpZycsXHJcblx0XHRcdGRlbGF5U2NhbGU6IDEuNSxcclxuXHRcdFx0ZGVsYXk6IDUwLFxyXG5cdFx0XHRzeW5jOiBmYWxzZSxcclxuXHRcdFx0cmV2ZXJzZTogZmFsc2UsXHJcblx0XHRcdHNodWZmbGU6IGZhbHNlLFxyXG5cdFx0XHRjYWxsYmFjazogZnVuY3Rpb24gKCkgeyB9XHJcblx0XHR9LFxyXG5cdFx0b3V0OiB7XHJcblx0XHRcdGVmZmVjdDogJ2hpbmdlJyxcclxuXHRcdFx0ZGVsYXlTY2FsZTogMS41LFxyXG5cdFx0XHRkZWxheTogNTAsXHJcblx0XHRcdHN5bmM6IGZhbHNlLFxyXG5cdFx0XHRyZXZlcnNlOiBmYWxzZSxcclxuXHRcdFx0c2h1ZmZsZTogZmFsc2UsXHJcblx0XHRcdGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7IH1cclxuXHRcdH0sXHJcblx0XHRhdXRvU3RhcnQ6IHRydWUsXHJcblx0XHRpbkVmZmVjdHM6IFtdLFxyXG5cdFx0b3V0RWZmZWN0czogWydoaW5nZSddLFxyXG5cdFx0Y2FsbGJhY2s6IGZ1bmN0aW9uICgpIHsgfSxcclxuXHRcdHR5cGU6ICdjaGFyJ1xyXG5cdH07XHJcblxyXG59KGpRdWVyeSkpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy9MZXR0ZXJpbmcuanMvLy8vLy8vLy8vLy8vL1xyXG4vKmdsb2JhbCBqUXVlcnkgKi9cclxuLyohXHRcclxuKiBMZXR0ZXJpbmcuSlMgMC42LjFcclxuKlxyXG4qIENvcHlyaWdodCAyMDEwLCBEYXZlIFJ1cGVydCBodHRwOi8vZGF2ZXJ1cGVydC5jb21cclxuKiBSZWxlYXNlZCB1bmRlciB0aGUgV1RGUEwgbGljZW5zZSBcclxuKiBodHRwOi8vc2FtLnpveS5vcmcvd3RmcGwvXHJcbipcclxuKiBUaGFua3MgdG8gUGF1bCBJcmlzaCAtIGh0dHA6Ly9wYXVsaXJpc2guY29tIC0gZm9yIHRoZSBmZWVkYmFjay5cclxuKlxyXG4qIERhdGU6IE1vbiBTZXAgMjAgMTc6MTQ6MDAgMjAxMCAtMDYwMFxyXG4qL1xyXG4oZnVuY3Rpb24gKCQpIHtcclxuXHRmdW5jdGlvbiBpbmplY3Rvcih0LCBzcGxpdHRlciwga2xhc3MsIGFmdGVyKSB7XHJcblx0XHR2YXIgYSA9IHQudGV4dCgpLnNwbGl0KHNwbGl0dGVyKSwgaW5qZWN0ID0gJyc7XHJcblx0XHRpZiAoYS5sZW5ndGgpIHtcclxuXHRcdFx0JChhKS5lYWNoKGZ1bmN0aW9uIChpLCBpdGVtKSB7XHJcblx0XHRcdFx0aW5qZWN0ICs9ICc8c3BhbiBjbGFzcz1cIicgKyBrbGFzcyArIChpICsgMSkgKyAnXCI+JyArIGl0ZW0gKyAnPC9zcGFuPicgKyBhZnRlcjtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHQuZW1wdHkoKS5hcHBlbmQoaW5qZWN0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHZhciBtZXRob2RzID0ge1xyXG5cdFx0aW5pdDogZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0aW5qZWN0b3IoJCh0aGlzKSwgJycsICdjaGFyJywgJycpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdHdvcmRzOiBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRpbmplY3RvcigkKHRoaXMpLCAnICcsICd3b3JkJywgJyAnKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRsaW5lczogZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dmFyIHIgPSBcImVlZmVjMzAzMDc5YWQxNzQwNWM4ODllMDkyZTEwNWIwXCI7XHJcblx0XHRcdFx0Ly8gQmVjYXVzZSBpdCdzIGhhcmQgdG8gc3BsaXQgYSA8YnIvPiB0YWcgY29uc2lzdGVudGx5IGFjcm9zcyBicm93c2VycyxcclxuXHRcdFx0XHQvLyAoKmFoZW0qIElFICphaGVtKiksIHdlIHJlcGxhY2VzIGFsbCA8YnIvPiBpbnN0YW5jZXMgd2l0aCBhbiBtZDUgaGFzaCBcclxuXHRcdFx0XHQvLyAob2YgdGhlIHdvcmQgXCJzcGxpdFwiKS4gIElmIHlvdSdyZSB0cnlpbmcgdG8gdXNlIHRoaXMgcGx1Z2luIG9uIHRoYXQgXHJcblx0XHRcdFx0Ly8gbWQ1IGhhc2ggc3RyaW5nLCBpdCB3aWxsIGZhaWwgYmVjYXVzZSB5b3UncmUgYmVpbmcgcmlkaWN1bG91cy5cclxuXHRcdFx0XHRpbmplY3RvcigkKHRoaXMpLmNoaWxkcmVuKFwiYnJcIikucmVwbGFjZVdpdGgocikuZW5kKCksIHIsICdsaW5lJywgJycpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0JC5mbi5sZXR0ZXJpbmcgPSBmdW5jdGlvbiAobWV0aG9kKSB7XHJcblx0XHQvLyBNZXRob2QgY2FsbGluZyBsb2dpY1xyXG5cdFx0aWYgKG1ldGhvZCAmJiBtZXRob2RzW21ldGhvZF0pIHtcclxuXHRcdFx0cmV0dXJuIG1ldGhvZHNbbWV0aG9kXS5hcHBseSh0aGlzLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xyXG5cdFx0fSBlbHNlIGlmIChtZXRob2QgPT09ICdsZXR0ZXJzJyB8fCAhbWV0aG9kKSB7XHJcblx0XHRcdHJldHVybiBtZXRob2RzLmluaXQuYXBwbHkodGhpcywgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDApKTsgLy8gYWx3YXlzIHBhc3MgYW4gYXJyYXlcclxuXHRcdH1cclxuXHRcdCQuZXJyb3IoJ01ldGhvZCAnICsgbWV0aG9kICsgJyBkb2VzIG5vdCBleGlzdCBvbiBqUXVlcnkubGV0dGVyaW5nJyk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cclxufSkoalF1ZXJ5KTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vRHJhd1NWRy5qcy8vLy8vLy8vLy8vLy8vXHJcbi8qISBqUXVlcnkgRHJhd1NWRyB2MS4xLjAgKDIwMTYtMTAtMDUpIC0gZ2l0LmlvL3ZHRmE1IC0gQ29weXJpZ2h0IChjKSAyMDE2IExlb25hcmRvIFNhbnRvcyAtIE1JVCBMaWNlbnNlICovXHJcbiFmdW5jdGlvbiAodCkgeyBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFtcImpxdWVyeVwiXSwgdCkgOiBcIm9iamVjdFwiID09IHR5cGVvZiBtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMgPyBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChlLCBuKSB7IHJldHVybiB2b2lkIDAgPT09IG4gJiYgKG4gPSBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiB3aW5kb3cgPyByZXF1aXJlKFwianF1ZXJ5XCIpIDogcmVxdWlyZShcImpxdWVyeVwiKShlKSksIHQobiksIG47IH0gOiB0KGpRdWVyeSk7IH0oZnVuY3Rpb24gKHQpIHsgXCJ1c2Ugc3RyaWN0XCI7IHZhciBlID0gXCJkcmF3c3ZnXCIsIG4gPSB7IGR1cmF0aW9uOiAxZTMsIHN0YWdnZXI6IDIwMCwgZWFzaW5nOiBcInN3aW5nXCIsIHJldmVyc2U6ICExLCBjYWxsYmFjazogdC5ub29wIH0sIGEgPSBmdW5jdGlvbiAoKSB7IHZhciBhID0gZnVuY3Rpb24gKGEsIG8pIHsgdmFyIGkgPSB0aGlzLCByID0gdC5leHRlbmQobiwgbyk7IGkuJGVsbSA9IHQoYSksIGkuJGVsbS5pcyhcInN2Z1wiKSAmJiAoaS5vcHRpb25zID0gciwgaS4kcGF0aHMgPSBpLiRlbG0uZmluZChcInBhdGhcIiksIGkudG90YWxEdXJhdGlvbiA9IHIuZHVyYXRpb24gKyByLnN0YWdnZXIgKiBpLiRwYXRocy5sZW5ndGgsIGkuZHVyYXRpb24gPSByLmR1cmF0aW9uIC8gaS50b3RhbER1cmF0aW9uLCBpLiRwYXRocy5lYWNoKGZ1bmN0aW9uICh0LCBlKSB7IHZhciBuID0gZS5nZXRUb3RhbExlbmd0aCgpOyBlLnBhdGhMZW4gPSBuLCBlLmRlbGF5ID0gci5zdGFnZ2VyICogdCAvIGkudG90YWxEdXJhdGlvbiwgZS5zdHlsZS5zdHJva2VEYXNoYXJyYXkgPSBbbiwgbl0uam9pbihcIiBcIiksIGUuc3R5bGUuc3Ryb2tlRGFzaG9mZnNldCA9IG47IH0pLCBpLiRlbG0uYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uICh0LCBuKSB7IHJldHVybiBbbiwgZSArIFwiLWluaXRpYWxpemVkXCJdLmpvaW4oXCIgXCIpOyB9KSk7IH07IHJldHVybiBhLnByb3RvdHlwZS5nZXRWYWwgPSBmdW5jdGlvbiAoZSwgbikgeyByZXR1cm4gMSAtIHQuZWFzaW5nW25dKGUsIGUsIDAsIDEsIDEpOyB9LCBhLnByb3RvdHlwZS5wcm9ncmVzcyA9IGZ1bmN0aW9uICh0KSB7IHZhciBlID0gdGhpcywgbiA9IGUub3B0aW9ucywgYSA9IGUuZHVyYXRpb247IGUuJHBhdGhzLmVhY2goZnVuY3Rpb24gKG8sIGkpIHsgdmFyIHIgPSBpLnN0eWxlOyBpZiAoMSA9PT0gdCkgci5zdHJva2VEYXNob2Zmc2V0ID0gMDsgZWxzZSBpZiAoMCA9PT0gdCkgci5zdHJva2VEYXNob2Zmc2V0ID0gaS5wYXRoTGVuICsgXCJweFwiOyBlbHNlIGlmICh0ID49IGkuZGVsYXkgJiYgdCA8PSBhICsgaS5kZWxheSkgeyB2YXIgcyA9ICh0IC0gaS5kZWxheSkgLyBhOyByLnN0cm9rZURhc2hvZmZzZXQgPSBlLmdldFZhbChzLCBuLmVhc2luZykgKiBpLnBhdGhMZW4gKiAobi5yZXZlcnNlID8gLTEgOiAxKSArIFwicHhcIjsgfSB9KTsgfSwgYS5wcm90b3R5cGUuYW5pbWF0ZSA9IGZ1bmN0aW9uICgpIHsgdmFyIG4gPSB0aGlzOyBuLiRlbG0uYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uICh0LCBuKSB7IHJldHVybiBbbiwgZSArIFwiLWFuaW1hdGluZ1wiXS5qb2luKFwiIFwiKTsgfSksIHQoeyBsZW46IDAgfSkuYW5pbWF0ZSh7IGxlbjogMSB9LCB7IGVhc2luZzogXCJsaW5lYXJcIiwgZHVyYXRpb246IG4udG90YWxEdXJhdGlvbiwgc3RlcDogZnVuY3Rpb24gKHQsIGUpIHsgbi5wcm9ncmVzcy5jYWxsKG4sIHQgLyBlLmVuZCk7IH0sIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7IG4ub3B0aW9ucy5jYWxsYmFjay5jYWxsKHRoaXMpLCBuLiRlbG0uYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uICh0LCBuKSB7IHJldHVybiBuLnJlcGxhY2UoZSArIFwiLWFuaW1hdGluZ1wiLCBcIlwiKTsgfSk7IH0gfSk7IH0sIGE7IH0oKTsgdC5mbltlXSA9IGZ1bmN0aW9uIChuLCBvKSB7IHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkgeyB2YXIgaSA9IHQuZGF0YSh0aGlzLCBlKTsgaSAmJiBcIlwiICsgbiA9PT0gbiAmJiBpW25dID8gaVtuXShvKSA6IHQuZGF0YSh0aGlzLCBlLCBuZXcgYSh0aGlzLCBuKSk7IH0pOyB9OyB9KTtcclxuLyogZXNsaW50LWVuYWJsZSAqLyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=