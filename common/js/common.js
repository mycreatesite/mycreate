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
////////////imports////////////

 ////////////global variable////////////

var body = $('body'); ////////////Draw SVG////////////

(function () {
  var accessFlag = sessionStorage.getItem('accessed');
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
    } else {
      spNavLists.each(function (i) {
        $(this).delay(i * delayTime).fadeIn(fadeTime);
      });
    }
  });
  spNavLink.on('click', function () {
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
    if ($(this).parents('#spNavHeader')[0]) {
      $('#modalArea').show();
    } else {
      $('#modalArea').fadeIn();
    }
  });
  $('#modalClose,#modalOuter').on('click', function () {
    $('#modalArea').fadeOut();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2RlYm91bmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3Rocm90dGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9OdW1iZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi93b3JrL2pzL2NvbW1vbi9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vd29yay9qcy9tb2R1bGUvY29tbW9uLnBsdWdpbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJib2R5IiwiJCIsImFjY2Vzc0ZsYWciLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJteWNMb2dvIiwiZHJhd3N2ZyIsImR1cmF0aW9uIiwic3RhZ2dlciIsImVhc2luZyIsImNhbGxiYWNrIiwiYWRkQ2xhc3MiLCJoYXNDbGFzcyIsInNldFRpbWVvdXQiLCJjc3MiLCJjbG9uZU5hdiIsImNsb25lIiwiYXR0ciIsImluc2VydEFmdGVyIiwibG9nb01vdmUiLCJzaG93Q2xhc3MiLCJmb3JTaG93MSIsImZvclNob3cyIiwiZm9yU2hvdzMiLCJmb3JTaG93NCIsImZvclNob3dzIiwiaGVhZGluZyIsImNvbW1lbnRBbmltIiwicm9sbEJhY2siLCJtb2dpRm9vdGVyIiwiY29udGVudHNIZWlnaHQiLCJkb2N1bWVudCIsImhlaWdodCIsIndpbmRvdyIsIm9uIiwidGhyb3R0bGUiLCJ3aW5kb3dIZWlnaHQiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJyZW1vdmVDbGFzcyIsImxlbiIsImxlbmd0aCIsImoiLCJlYWNoIiwiaSIsImZvclNob3dQb2ludCIsIm9mZnNldCIsInRvcCIsImRlbGF5VGltZSIsImRlbGF5IiwicXVldWUiLCJoZWFkaW5nUG9pbnQiLCJ0ZXh0aWxsYXRlIiwiaW4iLCJlZmZlY3QiLCJzaHVmZmxlIiwiZGVsYXlTY2FsZSIsIm15Q29tbWVudFBvaW50IiwiZmFkZUluIiwiZmFkZU91dCIsInNob3ciLCJjbGljayIsImFuaW1hdGUiLCJoYW1iQnRucyIsImhhbWJCdG4xIiwiaGFtYkJ0bjIiLCJoYW1iQnRuMyIsInNwTmF2Iiwic3BOYXZMaXN0cyIsInNwTmF2TGluayIsImZhZGVUaW1lIiwidG9nZ2xlTmF2IiwiaGlkZSIsInRvZ2dsZUNsYXNzIiwiaHJlZiIsInRhcmdldCIsInBvc2l0aW9uIiwiZml4UHgiLCJ1cmwiLCJsb2NhdGlvbiIsImluZGV4T2YiLCJpZE5hbWUiLCJzcGxpdCIsInBvcyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInByb3AiLCJwYXJlbnRzIiwibWF0Y2giLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwid2QiLCJ3aGVlbERlbHRhIiwiY3NwIiwicGFnZVlPZmZzZXQiLCJzY3JvbGxUbyIsInRyaWdnZXIiLCJpc0luRWZmZWN0IiwidGVzdCIsImluQXJyYXkiLCJmbiIsImRlZmF1bHRzIiwiaW5FZmZlY3RzIiwiaXNPdXRFZmZlY3QiLCJvdXRFZmZlY3RzIiwic3RyaW5nVG9Cb29sZWFuIiwic3RyIiwiZ2V0RGF0YSIsIm5vZGUiLCJhdHRycyIsImF0dHJpYnV0ZXMiLCJkYXRhIiwibm9kZU5hbWUiLCJyZXBsYWNlIiwibm9kZVZhbHVlIiwib3V0IiwibyIsIngiLCJwYXJzZUludCIsIk1hdGgiLCJyYW5kb20iLCIkdCIsImNiIiwib25lIiwiYW5pbWF0ZVRva2VucyIsIiR0b2tlbnMiLCJvcHRpb25zIiwidGhhdCIsImNvdW50IiwicmV2ZXJzZSIsInRvQXJyYXkiLCJ0IiwiJHRva2VuIiwiY29tcGxldGUiLCJzeW5jIiwidGV4dCIsIlRleHRpbGxhdGUiLCJlbGVtZW50IiwiYmFzZSIsIiRlbGVtZW50IiwiaW5pdCIsIiR0ZXh0cyIsImZpbmQiLCJzZWxlY3RvciIsImh0bWwiLCIkY3VycmVudCIsInByZXBlbmRUbyIsInNldE9wdGlvbnMiLCJ0aW1lb3V0UnVuIiwiYXV0b1N0YXJ0Iiwic3RhcnQiLCJpbml0aWFsRGVsYXkiLCJ0cmlnZ2VyRXZlbnQiLCJuYW1lIiwiZSIsIkV2ZW50IiwiaW5kZXgiLCIkZWxlbSIsImV4dGVuZCIsImxldHRlcmluZyIsInR5cGUiLCJjdXJyZW50SW5kZXgiLCJyZW1vdmVBdHRyIiwicnVuIiwiY2hpbGRyZW4iLCJsb29wIiwibWluRGlzcGxheVRpbWUiLCJzdG9wIiwiY2xlYXJJbnRlcnZhbCIsInNldHRpbmdzIiwiYXJncyIsIiR0aGlzIiwiYXBwbHkiLCJjb25jYXQiLCJjYWxsIiwialF1ZXJ5IiwiaW5qZWN0b3IiLCJzcGxpdHRlciIsImtsYXNzIiwiYWZ0ZXIiLCJhIiwiaW5qZWN0IiwiaXRlbSIsImVtcHR5IiwiYXBwZW5kIiwibWV0aG9kcyIsIndvcmRzIiwibGluZXMiLCJyIiwicmVwbGFjZVdpdGgiLCJlbmQiLCJtZXRob2QiLCJzbGljZSIsImFyZ3VtZW50cyIsImVycm9yIiwiZGVmaW5lIiwibiIsIm5vb3AiLCIkZWxtIiwiaXMiLCIkcGF0aHMiLCJ0b3RhbER1cmF0aW9uIiwiZ2V0VG90YWxMZW5ndGgiLCJwYXRoTGVuIiwic3R5bGUiLCJzdHJva2VEYXNoYXJyYXkiLCJqb2luIiwic3Ryb2tlRGFzaG9mZnNldCIsInByb3RvdHlwZSIsImdldFZhbCIsInByb2dyZXNzIiwicyIsInN0ZXAiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxXQUFXLG1CQUFPLENBQUMsK0NBQVM7O0FBRTVCO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ0xBLGFBQWEsbUJBQU8sQ0FBQyxtREFBVztBQUNoQyxnQkFBZ0IsbUJBQU8sQ0FBQyx5REFBYztBQUN0QyxxQkFBcUIsbUJBQU8sQ0FBQyxtRUFBbUI7O0FBRWhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNIQSxhQUFhLG1CQUFPLENBQUMsbURBQVc7O0FBRWhDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzdDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDckJBLGlCQUFpQixtQkFBTyxDQUFDLDJEQUFlOztBQUV4QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ1JBLGVBQWUsbUJBQU8sQ0FBQyxxREFBWTtBQUNuQyxVQUFVLG1CQUFPLENBQUMsMkNBQU87QUFDekIsZUFBZSxtQkFBTyxDQUFDLHFEQUFZOztBQUVuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPLFlBQVk7QUFDOUIsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsOENBQThDLGtCQUFrQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUM5TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFtQm9LLElBQW5CLENBQXdCLElBQXhCLEdBQStCc0IsQ0FBQyxDQUFDRSxJQUFGLENBQU9yTCxJQUFQLENBQVksT0FBWixFQUFxQixVQUFVa0gsQ0FBVixFQUFhaUUsQ0FBYixFQUFnQjtBQUFFLG1CQUFPQSxDQUFDLENBQUNuRixPQUFGLENBQVV5QyxDQUFDLEdBQUcsWUFBZCxFQUE0QixFQUE1QixDQUFQO0FBQXlDLFdBQWhGLENBQS9CO0FBQW1IO0FBQXBQLE9BQWxDLENBQW5GO0FBQStXLEtBQTMzQixFQUE2M0IwQixDQUFwNEI7QUFBdzRCLEdBQXo2QyxFQUE1Rzs7QUFBeWhEakQsR0FBQyxDQUFDL0IsRUFBRixDQUFLc0QsQ0FBTCxJQUFVLFVBQVUwQyxDQUFWLEVBQWFoRixDQUFiLEVBQWdCO0FBQUUsV0FBTyxLQUFLekUsSUFBTCxDQUFVLFlBQVk7QUFBRSxVQUFJQyxDQUFDLEdBQUd1RixDQUFDLENBQUNwQixJQUFGLENBQU8sSUFBUCxFQUFhMkMsQ0FBYixDQUFSO0FBQXlCOUcsT0FBQyxJQUFJLEtBQUt3SixDQUFMLEtBQVdBLENBQWhCLElBQXFCeEosQ0FBQyxDQUFDd0osQ0FBRCxDQUF0QixHQUE0QnhKLENBQUMsQ0FBQ3dKLENBQUQsQ0FBRCxDQUFLaEYsQ0FBTCxDQUE1QixHQUFzQ2UsQ0FBQyxDQUFDcEIsSUFBRixDQUFPLElBQVAsRUFBYTJDLENBQWIsRUFBZ0IsSUFBSTBCLENBQUosQ0FBTSxJQUFOLEVBQVlnQixDQUFaLENBQWhCLENBQXRDO0FBQXdFLEtBQXpILENBQVA7QUFBb0ksR0FBaEs7QUFBbUssQ0FBNy9ELENBQUQ7QUFDQSxtQjs7Ozs7Ozs7Ozs7QUMzV0Esd0IiLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi93b3JrL2pzL2NvbW1vbi9jb21tb24uanNcIik7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcbiIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIG5vdyA9IHJlcXVpcmUoJy4vbm93JyksXG4gICAgdG9OdW1iZXIgPSByZXF1aXJlKCcuL3RvTnVtYmVyJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB0b051bWJlcih3YWl0KSB8fCAwO1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncyxcbiAgICAgICAgdGhpc0FyZyA9IGxhc3RUaGlzO1xuXG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1haW5pbmdXYWl0KHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lLFxuICAgICAgICB0aW1lV2FpdGluZyA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmdcbiAgICAgID8gbmF0aXZlTWluKHRpbWVXYWl0aW5nLCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSlcbiAgICAgIDogdGltZVdhaXRpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTeW1ib2w7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSB0aW1lc3RhbXAgb2YgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2VcbiAqIHRoZSBVbml4IGVwb2NoICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lc3RhbXAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gTG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgaW52b2NhdGlvbi5cbiAqL1xudmFyIG5vdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBub3c7XG4iLCJ2YXIgZGVib3VuY2UgPSByZXF1aXJlKCcuL2RlYm91bmNlJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRocm90dGxlZCBmdW5jdGlvbiB0aGF0IG9ubHkgaW52b2tlcyBgZnVuY2AgYXQgbW9zdCBvbmNlIHBlclxuICogZXZlcnkgYHdhaXRgIG1pbGxpc2Vjb25kcy4gVGhlIHRocm90dGxlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGBcbiAqIG1ldGhvZCB0byBjYW5jZWwgZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG9cbiAqIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYFxuICogc2hvdWxkIGJlIGludm9rZWQgb24gdGhlIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YFxuICogdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZVxuICogdGhyb3R0bGVkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50IGNhbGxzIHRvIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gcmV0dXJuIHRoZVxuICogcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYCBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLnRocm90dGxlYCBhbmQgYF8uZGVib3VuY2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gdGhyb3R0bGUuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhyb3R0bGUgaW52b2NhdGlvbnMgdG8uXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgdGhyb3R0bGVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBleGNlc3NpdmVseSB1cGRhdGluZyB0aGUgcG9zaXRpb24gd2hpbGUgc2Nyb2xsaW5nLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Njcm9sbCcsIF8udGhyb3R0bGUodXBkYXRlUG9zaXRpb24sIDEwMCkpO1xuICpcbiAqIC8vIEludm9rZSBgcmVuZXdUb2tlbmAgd2hlbiB0aGUgY2xpY2sgZXZlbnQgaXMgZmlyZWQsIGJ1dCBub3QgbW9yZSB0aGFuIG9uY2UgZXZlcnkgNSBtaW51dGVzLlxuICogdmFyIHRocm90dGxlZCA9IF8udGhyb3R0bGUocmVuZXdUb2tlbiwgMzAwMDAwLCB7ICd0cmFpbGluZyc6IGZhbHNlIH0pO1xuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIHRocm90dGxlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyB0aHJvdHRsZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIHRocm90dGxlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsZWFkaW5nID0gdHJ1ZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gJ2xlYWRpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMubGVhZGluZyA6IGxlYWRpbmc7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuICByZXR1cm4gZGVib3VuY2UoZnVuYywgd2FpdCwge1xuICAgICdsZWFkaW5nJzogbGVhZGluZyxcbiAgICAnbWF4V2FpdCc6IHdhaXQsXG4gICAgJ3RyYWlsaW5nJzogdHJhaWxpbmdcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGhyb3R0bGU7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE5BTiA9IDAgLyAwO1xuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbSA9IC9eXFxzK3xcXHMrJC9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmFkIHNpZ25lZCBoZXhhZGVjaW1hbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCYWRIZXggPSAvXlstK10weFswLTlhLWZdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJpbmFyeSBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCaW5hcnkgPSAvXjBiWzAxXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvY3RhbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNPY3RhbCA9IC9eMG9bMC03XSskL2k7XG5cbi8qKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB3aXRob3V0IGEgZGVwZW5kZW5jeSBvbiBgcm9vdGAuICovXG52YXIgZnJlZVBhcnNlSW50ID0gcGFyc2VJbnQ7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9OdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gSW5maW5pdHlcbiAqXG4gKiBfLnRvTnVtYmVyKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyAob3RoZXIgKyAnJykgOiBvdGhlcjtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHJlVHJpbSwgJycpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b051bWJlcjtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIi8vLy8vLy8vLy8vL2ltcG9ydHMvLy8vLy8vLy8vLy9cclxuXHJcbmltcG9ydCAnLi4vbW9kdWxlL2NvbW1vbi5wbHVnaW4nO1xyXG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnbG9kYXNoL3Rocm90dGxlJztcclxuXHJcbi8vLy8vLy8vLy8vL2dsb2JhbCB2YXJpYWJsZS8vLy8vLy8vLy8vL1xyXG5cclxuY29uc3QgYm9keSA9ICQoJ2JvZHknKTtcclxuXHJcbi8vLy8vLy8vLy8vL0RyYXcgU1ZHLy8vLy8vLy8vLy8vXHJcbihmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgYWNjZXNzRmxhZyA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc2VkJyk7XHJcblx0dmFyIG15Y0xvZ28gPSAkKFwiI215Y0xvZ29cIikuZHJhd3N2Zyh7XHJcblx0XHRkdXJhdGlvbjogMTAwMCxcclxuXHRcdHN0YWdnZXI6IDgwLFxyXG5cdFx0ZWFzaW5nOiBcInN3aW5nXCIsXHJcblx0XHRjYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHQkKFwiI215Y0xvZ28gZ1wiKS5hZGRDbGFzcyhcImZpbGxBbmltXCIpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdGlmICghYWNjZXNzRmxhZyAmJiBib2R5Lmhhc0NsYXNzKCdob21lJykpIHtcclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRteWNMb2dvLmNzcyhcIm9wYWNpdHlcIiwgMSkuZHJhd3N2ZyhcImFuaW1hdGVcIik7XHJcblx0XHR9LCAxODAwKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0bXljTG9nby5jc3MoXCJvcGFjaXR5XCIsIDEpLmRyYXdzdmcoXCJhbmltYXRlXCIpO1xyXG5cdH1cclxufSkoKTtcclxuXHJcbi8vLy8vLy8vLy8vL3Njcm9sbEV2ZW50c19zdGFydC8vLy8vLy8vLy8vL1xyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHJcblx0Ly9uYXZIZWFkZXJTaG93X3ZhcmlhYmxlc1xyXG5cdHZhciBjbG9uZU5hdiA9ICQoJyNuYXZIZWFkZXInKS5jbG9uZSgpLmF0dHIoJ2lkJywgJ2Nsb25lTmF2JykuYWRkQ2xhc3MoJ2Nsb25lTmF2JykuaW5zZXJ0QWZ0ZXIoJyNuYXZIZWFkZXInKTtcclxuXHR2YXIgbG9nb01vdmUgPSAkKCcubG9nb0ZvbGxvdzpsYXN0Jyk7XHJcblx0dmFyIHNob3dDbGFzcyA9ICdpc1Nob3cnO1xyXG5cdC8vc2hvd1VwX3ZhcmlhYmxlc1xyXG5cdHZhciBmb3JTaG93MSA9ICQoJy5mb3JTaG93MScpO1xyXG5cdHZhciBmb3JTaG93MiA9ICQoJy5mb3JTaG93MicpO1xyXG5cdHZhciBmb3JTaG93MyA9ICQoJy5mb3JTaG93MycpO1xyXG5cdHZhciBmb3JTaG93NCA9ICQoJy5mb3JTaG93NCcpO1xyXG5cdHZhciBmb3JTaG93cyA9IFtmb3JTaG93MSwgZm9yU2hvdzIsIGZvclNob3czLCBmb3JTaG93NF07XHJcblx0Ly90ZXh0aWxsYXRlX3ZhcmlhYmxlc1xyXG5cdHZhciBoZWFkaW5nID0gJCgnLmhlYWRpbmcnKTtcclxuXHQvL2NvbW1lbnRBbmltX3ZhcmlhYmxlc1xyXG5cdHZhciBjb21tZW50QW5pbSA9ICQoJyNjb21tZW50QW5pbScpO1xyXG5cdC8vcm9sbEJhY2tfdmFyaWFibGVzXHJcblx0dmFyIHJvbGxCYWNrID0gJCgnI3JvbGxCYWNrJyk7XHJcblx0Ly9oZWxsb01vZ2lfdmFyaWFibGVzXHJcblx0dmFyIG1vZ2lGb290ZXIgPSAkKCcjbW9naUZvb3RlcicpO1xyXG5cdHZhciBjb250ZW50c0hlaWdodCA9ICQoZG9jdW1lbnQpLmhlaWdodCgpO1xyXG5cclxuXHQvLy8vc2Nyb2xsRXZlbnRzLy8vL1xyXG5cdCQod2luZG93KS5vbignc2Nyb2xsJywgdGhyb3R0bGUoZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdC8vY29tbW9uX3ZhcmlhYmxlc1xyXG5cdFx0dmFyIHdpbmRvd0hlaWdodCA9ICQodGhpcykuaGVpZ2h0KCk7XHJcblx0XHR2YXIgc2Nyb2xsID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuXHJcblx0XHQvL25hdkhlYWRlclNob3dfZnVuY1xyXG5cdFx0aWYgKHNjcm9sbCA+IDcwMCkge1xyXG5cdFx0XHRsb2dvTW92ZS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XHJcblx0XHRcdGNsb25lTmF2LmFkZENsYXNzKHNob3dDbGFzcyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjbG9uZU5hdi5yZW1vdmVDbGFzcyhzaG93Q2xhc3MpO1xyXG5cdFx0fVxyXG5cdFx0Ly9zaG93VXBfZnVuY1xyXG5cdFx0dmFyIGxlbiA9IGZvclNob3dzLmxlbmd0aDtcclxuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgbGVuOyBqKyspIHtcclxuXHRcdFx0Zm9yU2hvd3Nbal0uZWFjaChmdW5jdGlvbiAoaSkge1xyXG5cdFx0XHRcdHZhciBmb3JTaG93UG9pbnQgPSAkKHRoaXMpLm9mZnNldCgpLnRvcCAtIDMwO1xyXG5cdFx0XHRcdHZhciBkZWxheVRpbWUgPSA5MDtcclxuXHRcdFx0XHRpZiAoc2Nyb2xsID4gZm9yU2hvd1BvaW50IC0gd2luZG93SGVpZ2h0KSB7XHJcblx0XHRcdFx0XHQkKHRoaXMpLmRlbGF5KGkgKiBkZWxheVRpbWUpLnF1ZXVlKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnc2hvd1VwJyk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0Ly90ZXh0aWxsYXRlX2Z1bmNcclxuXHRcdGhlYWRpbmcuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHZhciBoZWFkaW5nUG9pbnQgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcclxuXHRcdFx0aWYgKHNjcm9sbCA+IGhlYWRpbmdQb2ludCAtIHdpbmRvd0hlaWdodCkge1xyXG5cdFx0XHRcdCQodGhpcykuY3NzKCdvcGFjaXR5JywgMSkudGV4dGlsbGF0ZSh7XHJcblx0XHRcdFx0XHRpbjoge1xyXG5cdFx0XHRcdFx0XHRlZmZlY3Q6ICdmYWRlSW5VcCcsXHJcblx0XHRcdFx0XHRcdHNodWZmbGU6IHRydWUsXHJcblx0XHRcdFx0XHRcdGRlbGF5OiAyMCxcclxuXHRcdFx0XHRcdFx0ZGVsYXlTY2FsZTogMyxcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHQvL2NvbW1lbnRBbmltX2Z1bmNcclxuXHRcdGlmIChjb21tZW50QW5pbS5sZW5ndGgpIHtcclxuXHRcdFx0dmFyIG15Q29tbWVudFBvaW50ID0gY29tbWVudEFuaW0ub2Zmc2V0KCkudG9wO1xyXG5cdFx0XHRpZiAoc2Nyb2xsID4gbXlDb21tZW50UG9pbnQgLSB3aW5kb3dIZWlnaHQpIHtcclxuXHRcdFx0XHRjb21tZW50QW5pbS5jc3MoJ29wYWNpdHknLCAxKS5hZGRDbGFzcygnYW5pbWF0ZWQgem9vbUluRG93bicpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQvL3JvbGxCYWNrX2Z1bmNcclxuXHRcdGlmIChzY3JvbGwgPiA3MDApIHtcclxuXHRcdFx0cm9sbEJhY2suZmFkZUluKDUwMCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyb2xsQmFjay5mYWRlT3V0KDUwMCk7XHJcblx0XHR9XHJcblx0XHQvL2hlbGxvTW9naV9mdW5jXHJcblx0XHRpZiAoY29udGVudHNIZWlnaHQgLSAoc2Nyb2xsICsgd2luZG93SGVpZ2h0KSA8IDEwMCkge1xyXG5cdFx0XHRtb2dpRm9vdGVyLnNob3coZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2hlbGxvTW9naScpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChtb2dpRm9vdGVyLmhhc0NsYXNzKCdoZWxsb01vZ2knKSkge1xyXG5cdFx0XHRcdG1vZ2lGb290ZXIuZmFkZU91dCgyMDAsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2hlbGxvTW9naScpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdH0sIDE1MCkpO1xyXG5cdC8vLy9zY3JvbGxFdmVudHMvLy8vXHJcblxyXG5cdC8vLy9vcHRpb25hbF9mdW5jLy8vL1xyXG5cdC8vcm9sbEJhY2tDbGlja2VkXHJcblx0cm9sbEJhY2suY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cdFx0JCgnYm9keSxodG1sJykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCA3MDAsICdlYXNlSW5PdXRRdWFydCcpO1xyXG5cdH0pO1xyXG5cdC8vLy9vcHRpb25hbF9mdW5jLy8vL1xyXG5cclxufSk7XHJcbi8vLy8vLy8vLy8vL3Njcm9sbEV2ZW50c19lbmQvLy8vLy8vLy8vLy9cclxuXHJcbi8vLy8vLy8vLy8vL3NwTmF2SGVhZGVyLy8vLy8vLy8vLy8vXHJcbiQoZnVuY3Rpb24gKCkge1xyXG5cdHZhciBoYW1iQnRucyA9ICQoJyNoYW1iQnRuJyk7XHJcblx0dmFyIGhhbWJCdG4xID0gJCgnLmhhbWJCdG4xJyk7XHJcblx0dmFyIGhhbWJCdG4yID0gJCgnLmhhbWJCdG4yJyk7XHJcblx0dmFyIGhhbWJCdG4zID0gJCgnLmhhbWJCdG4zJyk7XHJcblx0dmFyIHNwTmF2ID0gJCgnI3NwTmF2SGVhZGVyJyk7XHJcblx0dmFyIHNwTmF2TGlzdHMgPSAkKCcuc3BOYXZIZWFkZXIgdWwgbGknKTtcclxuXHR2YXIgc3BOYXZMaW5rID0gJCgnI3NwTmF2SGVhZGVyIGxpIGEnKTtcclxuXHR2YXIgZGVsYXlUaW1lID0gODA7XHJcblx0dmFyIGZhZGVUaW1lID0gMjAwO1xyXG5cdGhhbWJCdG5zLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdHRvZ2dsZU5hdigpO1xyXG5cdFx0aWYgKHNwTmF2TGlzdHMuY3NzKCdkaXNwbGF5JykgPT0gJ2xpc3QtaXRlbScpIHtcclxuXHRcdFx0c3BOYXZMaXN0cy5mYWRlT3V0KGZhZGVUaW1lKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNwTmF2TGlzdHMuZWFjaChmdW5jdGlvbiAoaSkge1xyXG5cdFx0XHRcdCQodGhpcykuZGVsYXkoaSAqIGRlbGF5VGltZSkuZmFkZUluKGZhZGVUaW1lKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0c3BOYXZMaW5rLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdHRvZ2dsZU5hdigpO1xyXG5cdFx0c3BOYXZMaXN0cy5oaWRlKCk7XHJcblx0fSk7XHJcblx0ZnVuY3Rpb24gdG9nZ2xlTmF2KCkge1xyXG5cdFx0aWYgKCFzcE5hdi5oYXNDbGFzcygnaXMtc2hvdycpKSB7XHJcblx0XHRcdHNwTmF2LmZhZGVJbihmYWRlVGltZSkuYWRkQ2xhc3MoJ2lzLXNob3cnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNwTmF2LmZhZGVPdXQoZmFkZVRpbWUsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy1zaG93Jyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGhhbWJCdG4xLnRvZ2dsZUNsYXNzKCdoYW1iTW92ZTEnKTtcclxuXHRcdGhhbWJCdG4yLnRvZ2dsZUNsYXNzKCdoYW1iTW92ZTInKTtcclxuXHRcdGhhbWJCdG4zLnRvZ2dsZUNsYXNzKCdoYW1iTW92ZTMnKTtcclxuXHR9XHJcbn0pO1xyXG4vLy8vLy8vLy8vLy9zcE5hdkhlYWRlci8vLy8vLy8vLy8vL1xyXG4vL+KGkWNhbiBub3QgcmVwbGFjZeKGky8vXHJcbi8vLy8vLy8vLy8vL3Ntb290aFNjcm9sbC8vLy8vLy8vLy8vL1xyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHQkKCcubmF2SGVhZGVyIGFbaHJlZl49XCIjXCJdJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cdFx0dmFyIGhyZWYgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuXHRcdHZhciB0YXJnZXQgPSAkKGhyZWYgPT0gJyMnIHx8IGhyZWYgPT09ICcnID8gJ2h0bWwnIDogaHJlZik7XHJcblx0XHR2YXIgcG9zaXRpb24gPSB0YXJnZXQub2Zmc2V0KCkudG9wO1xyXG5cdFx0aWYgKGhyZWYgPT09ICcjY29udGFjdCcpIHtcclxuXHRcdFx0JCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogcG9zaXRpb24gfSwgNzAwLCAnZWFzZUluT3V0UXVhcnQnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCQoJ2h0bWwsYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IHBvc2l0aW9uIC0gNTAgfSwgNzAwLCAnZWFzZUluT3V0UXVhcnQnKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHQkKCcjc3BOYXZIZWFkZXIgYVtocmVmXj1cIiNcIl0nKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcblx0XHR2YXIgaHJlZiA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG5cdFx0dmFyIHRhcmdldCA9ICQoaHJlZiA9PSAnIycgfHwgaHJlZiA9PT0gJycgPyAnaHRtbCcgOiBocmVmKTtcclxuXHRcdHZhciBwb3NpdGlvbiA9IHRhcmdldC5vZmZzZXQoKS50b3A7XHJcblx0XHRpZiAoaHJlZiA9PT0gJyNjb250YWN0Jykge1xyXG5cdFx0XHQkKCdodG1sLGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiBwb3NpdGlvbiArIDEwMCB9LCA3MDAsICdlYXNlSW5PdXRRdWFydCcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogcG9zaXRpb24gKyA1MCB9LCA3MDAsICdlYXNlSW5PdXRRdWFydCcpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG59KTtcclxuLy8vLy8vLy8vLy8vc21vb3RoU2Nyb2xsLy8vLy8vLy8vLy8vXHJcblxyXG4vLy8vLy8vLy8vLy9vdGhlcnBhZ2UgdG8gZnJvbnRwYWdlLy8vLy8vLy8vLy8vXHJcbiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgZml4UHggPSAtNTA7XHJcblx0dmFyIHVybCA9ICQobG9jYXRpb24pLmF0dHIoJ2hyZWYnKTtcclxuXHRpZiAodXJsLmluZGV4T2YoXCI/aWQ9XCIpICE9IC0xKSB7XHJcblx0XHR2YXIgaWROYW1lID0gdXJsLnNwbGl0KFwiP2lkPVwiKTtcclxuXHRcdHZhciB0YXJnZXQgPSAkKCcjJyArIGlkTmFtZVtpZE5hbWUubGVuZ3RoIC0gMV0pO1xyXG5cdFx0aWYgKHRhcmdldC5sZW5ndGgpIHtcclxuXHRcdFx0dmFyIHBvcyA9IHRhcmdldC5vZmZzZXQoKS50b3AgKyBmaXhQeDtcclxuXHRcdFx0aWYgKChuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQaG9uZScpID4gMCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQYWQnKSA9PSAtMSkgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdpUG9kJykgPiAwIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQW5kcm9pZCcpID4gMCkge1xyXG5cdFx0XHRcdGlmICh0YXJnZXQucHJvcCgnaWQnKSA9PSBcImNvbnRhY3RcIikge1xyXG5cdFx0XHRcdFx0JChcImh0bWwsIGJvZHlcIikuc2Nyb2xsVG9wKHBvcyArIDE1MCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdCQoXCJodG1sLCBib2R5XCIpLnNjcm9sbFRvcChwb3MgKyAxMDApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAodGFyZ2V0LnByb3AoJ2lkJykgPT0gXCJjb250YWN0XCIpIHtcclxuXHRcdFx0XHRcdCQoXCJodG1sLCBib2R5XCIpLnNjcm9sbFRvcChwb3MgKyA1MCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdCQoXCJodG1sLCBib2R5XCIpLnNjcm9sbFRvcChwb3MpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufSk7XHJcbi8vLy8vLy8vLy8vL290aGVycGFnZSB0byBmcm9udHBhZ2UvLy8vLy8vLy8vLy9cclxuXHJcbi8vLy8vLy8vLy8vL21vZGFsLy8vLy8vLy8vLy8vXHJcbiQoZnVuY3Rpb24gKCkge1xyXG5cdCQoJy5tb2RhbE9wZW4nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAoJCh0aGlzKS5wYXJlbnRzKCcjc3BOYXZIZWFkZXInKVswXSkge1xyXG5cdFx0XHQkKCcjbW9kYWxBcmVhJykuc2hvdygpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JCgnI21vZGFsQXJlYScpLmZhZGVJbigpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdCQoJyNtb2RhbENsb3NlLCNtb2RhbE91dGVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0JCgnI21vZGFsQXJlYScpLmZhZGVPdXQoKTtcclxuXHR9KTtcclxufSk7XHJcbi8vLy8vLy8vLy8vL21vZGFsLy8vLy8vLy8vLy8vXHJcblxyXG4vLy8vLy8vLy8vLy9zY3JvbGwgY29udHJvbCBmb3IgZnVja2luJ0lFMTEvLy8vLy8vLy8vLy9cclxuaWYgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL01TSUUgMTAvaSkgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVHJpZGVudFxcLzdcXC4vKSB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvMTJcXC4vKSkge1xyXG5cdCQoJ2JvZHknKS5vbihcIm1vdXNld2hlZWxcIiwgZnVuY3Rpb24gKCkge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHZhciB3ZCA9IGV2ZW50LndoZWVsRGVsdGE7XHJcblx0XHR2YXIgY3NwID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsIGNzcCAtIHdkKTtcclxuXHR9KTtcclxufVxyXG4vLy8vLy8vLy8vLy9zY3JvbGwgY29udHJvbCBmb3IgZnVja2luJ0lFMTEvLy8vLy8vLy8vLy9cclxuXHJcbi8vLy8vLy8vLy8vL3Njcm9sbFRyaWdnZXJBbGwtYm90dG9tRml4QWJzb2x1dGVseSEhIS8vLy8vLy8vLy8vL1xyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHQkKHdpbmRvdykudHJpZ2dlcignc2Nyb2xsJyk7XHJcbn0pO1xyXG4vLy8vLy8vLy8vLy9zY3JvbGxUcmlnZ2VyQWxsLWJvdHRvbUZpeEFic29sdXRlbHkhISEvLy8vLy8vLy8vLy9cclxuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cclxuLy8vLy8vLy8vLy8vLy90ZXh0aWxsYXRlLmpzLy8vLy8vLy8vLy8vLy9cclxuLypcclxuICogdGV4dGlsbGF0ZS5qc1xyXG4gKiBodHRwOi8vanNjaHIuZ2l0aHViLmNvbS90ZXh0aWxsYXRlXHJcbiAqIE1JVCBsaWNlbnNlZFxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTItMjAxMyBKb3JkYW4gU2Nocm90ZXJcclxuICovXHJcblxyXG4oZnVuY3Rpb24gKCQpIHtcclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHJcblx0ZnVuY3Rpb24gaXNJbkVmZmVjdChlZmZlY3QpIHtcclxuXHRcdHJldHVybiAvSW4vLnRlc3QoZWZmZWN0KSB8fCAkLmluQXJyYXkoZWZmZWN0LCAkLmZuLnRleHRpbGxhdGUuZGVmYXVsdHMuaW5FZmZlY3RzKSA+PSAwO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaXNPdXRFZmZlY3QoZWZmZWN0KSB7XHJcblx0XHRyZXR1cm4gL091dC8udGVzdChlZmZlY3QpIHx8ICQuaW5BcnJheShlZmZlY3QsICQuZm4udGV4dGlsbGF0ZS5kZWZhdWx0cy5vdXRFZmZlY3RzKSA+PSAwO1xyXG5cdH1cclxuXHJcblxyXG5cdGZ1bmN0aW9uIHN0cmluZ1RvQm9vbGVhbihzdHIpIHtcclxuXHRcdGlmIChzdHIgIT09IFwidHJ1ZVwiICYmIHN0ciAhPT0gXCJmYWxzZVwiKSByZXR1cm4gc3RyO1xyXG5cdFx0cmV0dXJuIChzdHIgPT09IFwidHJ1ZVwiKTtcclxuXHR9XHJcblxyXG5cdC8vIGN1c3RvbSBnZXQgZGF0YSBhcGkgbWV0aG9kXHJcblx0ZnVuY3Rpb24gZ2V0RGF0YShub2RlKSB7XHJcblx0XHR2YXIgYXR0cnMgPSBub2RlLmF0dHJpYnV0ZXMgfHwgW11cclxuXHRcdFx0LCBkYXRhID0ge307XHJcblxyXG5cdFx0aWYgKCFhdHRycy5sZW5ndGgpIHJldHVybiBkYXRhO1xyXG5cclxuXHRcdCQuZWFjaChhdHRycywgZnVuY3Rpb24gKGksIGF0dHIpIHtcclxuXHRcdFx0dmFyIG5vZGVOYW1lID0gYXR0ci5ub2RlTmFtZS5yZXBsYWNlKC9kZWxheXNjYWxlLywgJ2RlbGF5U2NhbGUnKTtcclxuXHRcdFx0aWYgKC9eZGF0YS1pbi0qLy50ZXN0KG5vZGVOYW1lKSkge1xyXG5cdFx0XHRcdGRhdGEuaW4gPSBkYXRhLmluIHx8IHt9O1xyXG5cdFx0XHRcdGRhdGEuaW5bbm9kZU5hbWUucmVwbGFjZSgvZGF0YS1pbi0vLCAnJyldID0gc3RyaW5nVG9Cb29sZWFuKGF0dHIubm9kZVZhbHVlKTtcclxuXHRcdFx0fSBlbHNlIGlmICgvXmRhdGEtb3V0LSovLnRlc3Qobm9kZU5hbWUpKSB7XHJcblx0XHRcdFx0ZGF0YS5vdXQgPSBkYXRhLm91dCB8fCB7fTtcclxuXHRcdFx0XHRkYXRhLm91dFtub2RlTmFtZS5yZXBsYWNlKC9kYXRhLW91dC0vLCAnJyldID0gc3RyaW5nVG9Cb29sZWFuKGF0dHIubm9kZVZhbHVlKTtcclxuXHRcdFx0fSBlbHNlIGlmICgvXmRhdGEtKi8udGVzdChub2RlTmFtZSkpIHtcclxuXHRcdFx0XHRkYXRhW25vZGVOYW1lLnJlcGxhY2UoL2RhdGEtLywgJycpXSA9IHN0cmluZ1RvQm9vbGVhbihhdHRyLm5vZGVWYWx1ZSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiBkYXRhO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gc2h1ZmZsZShvKSB7XHJcblx0XHRmb3IgKHZhciBqLCB4LCBpID0gby5sZW5ndGg7IGk7IGogPSBwYXJzZUludChNYXRoLnJhbmRvbSgpICogaSksIHggPSBvWy0taV0sIG9baV0gPSBvW2pdLCBvW2pdID0geCk7XHJcblx0XHRyZXR1cm4gbztcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGFuaW1hdGUoJHQsIGVmZmVjdCwgY2IpIHtcclxuXHRcdCR0LmFkZENsYXNzKCdhbmltYXRlZCAnICsgZWZmZWN0KVxyXG5cdFx0XHQuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKVxyXG5cdFx0XHQuc2hvdygpO1xyXG5cclxuXHRcdCR0Lm9uZSgnd2Via2l0QW5pbWF0aW9uRW5kIG1vekFuaW1hdGlvbkVuZCBNU0FuaW1hdGlvbkVuZCBvYW5pbWF0aW9uZW5kIGFuaW1hdGlvbmVuZCcsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0JHQucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkICcgKyBlZmZlY3QpO1xyXG5cdFx0XHRjYiAmJiBjYigpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBhbmltYXRlVG9rZW5zKCR0b2tlbnMsIG9wdGlvbnMsIGNiKSB7XHJcblx0XHR2YXIgdGhhdCA9IHRoaXNcclxuXHRcdFx0LCBjb3VudCA9ICR0b2tlbnMubGVuZ3RoO1xyXG5cclxuXHRcdGlmICghY291bnQpIHtcclxuXHRcdFx0Y2IgJiYgY2IoKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChvcHRpb25zLnNodWZmbGUpICR0b2tlbnMgPSBzaHVmZmxlKCR0b2tlbnMpO1xyXG5cdFx0aWYgKG9wdGlvbnMucmV2ZXJzZSkgJHRva2VucyA9ICR0b2tlbnMudG9BcnJheSgpLnJldmVyc2UoKTtcclxuXHJcblx0XHQkLmVhY2goJHRva2VucywgZnVuY3Rpb24gKGksIHQpIHtcclxuXHRcdFx0dmFyICR0b2tlbiA9ICQodCk7XHJcblxyXG5cdFx0XHRmdW5jdGlvbiBjb21wbGV0ZSgpIHtcclxuXHRcdFx0XHRpZiAoaXNJbkVmZmVjdChvcHRpb25zLmVmZmVjdCkpIHtcclxuXHRcdFx0XHRcdCR0b2tlbi5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoaXNPdXRFZmZlY3Qob3B0aW9ucy5lZmZlY3QpKSB7XHJcblx0XHRcdFx0XHQkdG9rZW4uY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjb3VudCAtPSAxO1xyXG5cdFx0XHRcdGlmICghY291bnQgJiYgY2IpIGNiKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBkZWxheSA9IG9wdGlvbnMuc3luYyA/IG9wdGlvbnMuZGVsYXkgOiBvcHRpb25zLmRlbGF5ICogaSAqIG9wdGlvbnMuZGVsYXlTY2FsZTtcclxuXHJcblx0XHRcdCR0b2tlbi50ZXh0KCkgP1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBhbmltYXRlKCR0b2tlbiwgb3B0aW9ucy5lZmZlY3QsIGNvbXBsZXRlKTsgfSwgZGVsYXkpIDpcclxuXHRcdFx0XHRjb21wbGV0ZSgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHR2YXIgVGV4dGlsbGF0ZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBvcHRpb25zKSB7XHJcblx0XHR2YXIgYmFzZSA9IHRoaXNcclxuXHRcdFx0LCAkZWxlbWVudCA9ICQoZWxlbWVudCk7XHJcblxyXG5cdFx0YmFzZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRiYXNlLiR0ZXh0cyA9ICRlbGVtZW50LmZpbmQob3B0aW9ucy5zZWxlY3Rvcik7XHJcblxyXG5cdFx0XHRpZiAoIWJhc2UuJHRleHRzLmxlbmd0aCkge1xyXG5cdFx0XHRcdGJhc2UuJHRleHRzID0gJCgnPHVsIGNsYXNzPVwidGV4dHNcIj48bGk+JyArICRlbGVtZW50Lmh0bWwoKSArICc8L2xpPjwvdWw+Jyk7XHJcblx0XHRcdFx0JGVsZW1lbnQuaHRtbChiYXNlLiR0ZXh0cyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGJhc2UuJHRleHRzLmhpZGUoKTtcclxuXHJcblx0XHRcdGJhc2UuJGN1cnJlbnQgPSAkKCc8c3Bhbj4nKVxyXG5cdFx0XHRcdC5odG1sKGJhc2UuJHRleHRzLmZpbmQoJzpmaXJzdC1jaGlsZCcpLmh0bWwoKSlcclxuXHRcdFx0XHQucHJlcGVuZFRvKCRlbGVtZW50KTtcclxuXHJcblx0XHRcdGlmIChpc0luRWZmZWN0KG9wdGlvbnMuaW4uZWZmZWN0KSkge1xyXG5cdFx0XHRcdGJhc2UuJGN1cnJlbnQuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGlzT3V0RWZmZWN0KG9wdGlvbnMub3V0LmVmZmVjdCkpIHtcclxuXHRcdFx0XHRiYXNlLiRjdXJyZW50LmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGJhc2Uuc2V0T3B0aW9ucyhvcHRpb25zKTtcclxuXHJcblx0XHRcdGJhc2UudGltZW91dFJ1biA9IG51bGw7XHJcblxyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRiYXNlLm9wdGlvbnMuYXV0b1N0YXJ0ICYmIGJhc2Uuc3RhcnQoKTtcclxuXHRcdFx0fSwgYmFzZS5vcHRpb25zLmluaXRpYWxEZWxheSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGJhc2Uuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcblx0XHRcdGJhc2Uub3B0aW9ucyA9IG9wdGlvbnM7XHJcblx0XHR9O1xyXG5cclxuXHRcdGJhc2UudHJpZ2dlckV2ZW50ID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuXHRcdFx0dmFyIGUgPSAkLkV2ZW50KG5hbWUgKyAnLnRsdCcpO1xyXG5cdFx0XHQkZWxlbWVudC50cmlnZ2VyKGUsIGJhc2UpO1xyXG5cdFx0XHRyZXR1cm4gZTtcclxuXHRcdH07XHJcblxyXG5cdFx0YmFzZS5pbiA9IGZ1bmN0aW9uIChpbmRleCwgY2IpIHtcclxuXHRcdFx0aW5kZXggPSBpbmRleCB8fCAwO1xyXG5cclxuXHRcdFx0dmFyICRlbGVtID0gYmFzZS4kdGV4dHMuZmluZCgnOm50aC1jaGlsZCgnICsgKChpbmRleCB8fCAwKSArIDEpICsgJyknKVxyXG5cdFx0XHRcdCwgb3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBiYXNlLm9wdGlvbnMsICRlbGVtLmxlbmd0aCA/IGdldERhdGEoJGVsZW1bMF0pIDoge30pXHJcblx0XHRcdFx0LCAkdG9rZW5zO1xyXG5cclxuXHRcdFx0JGVsZW0uYWRkQ2xhc3MoJ2N1cnJlbnQnKTtcclxuXHJcblx0XHRcdGJhc2UudHJpZ2dlckV2ZW50KCdpbkFuaW1hdGlvbkJlZ2luJyk7XHJcblx0XHRcdCRlbGVtZW50LmF0dHIoJ2RhdGEtYWN0aXZlJywgJGVsZW0uZGF0YSgnaWQnKSk7XHJcblxyXG5cdFx0XHRiYXNlLiRjdXJyZW50XHJcblx0XHRcdFx0Lmh0bWwoJGVsZW0uaHRtbCgpKVxyXG5cdFx0XHRcdC5sZXR0ZXJpbmcoJ3dvcmRzJyk7XHJcblxyXG5cdFx0XHQvLyBzcGxpdCB3b3JkcyB0byBpbmRpdmlkdWFsIGNoYXJhY3RlcnMgaWYgdG9rZW4gdHlwZSBpcyBzZXQgdG8gJ2NoYXInXHJcblx0XHRcdGlmIChiYXNlLm9wdGlvbnMudHlwZSA9PSBcImNoYXJcIikge1xyXG5cdFx0XHRcdGJhc2UuJGN1cnJlbnQuZmluZCgnW2NsYXNzXj1cIndvcmRcIl0nKVxyXG5cdFx0XHRcdFx0LmNzcyh7XHJcblx0XHRcdFx0XHRcdCdkaXNwbGF5JzogJ2lubGluZS1ibG9jaycsXHJcblx0XHRcdFx0XHRcdC8vIGZpeCBmb3IgcG9vciBpb3MgcGVyZm9ybWFuY2VcclxuXHRcdFx0XHRcdFx0Jy13ZWJraXQtdHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKDAsMCwwKScsXHJcblx0XHRcdFx0XHRcdCctbW96LXRyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCgwLDAsMCknLFxyXG5cdFx0XHRcdFx0XHQnLW8tdHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKDAsMCwwKScsXHJcblx0XHRcdFx0XHRcdCd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoMCwwLDApJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5lYWNoKGZ1bmN0aW9uICgpIHsgJCh0aGlzKS5sZXR0ZXJpbmcoKTsgfSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCR0b2tlbnMgPSBiYXNlLiRjdXJyZW50XHJcblx0XHRcdFx0LmZpbmQoJ1tjbGFzc149XCInICsgYmFzZS5vcHRpb25zLnR5cGUgKyAnXCJdJylcclxuXHRcdFx0XHQuY3NzKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpO1xyXG5cclxuXHRcdFx0aWYgKGlzSW5FZmZlY3Qob3B0aW9ucy5pbi5lZmZlY3QpKSB7XHJcblx0XHRcdFx0JHRva2Vucy5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XHJcblx0XHRcdH0gZWxzZSBpZiAoaXNPdXRFZmZlY3Qob3B0aW9ucy5pbi5lZmZlY3QpKSB7XHJcblx0XHRcdFx0JHRva2Vucy5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRiYXNlLmN1cnJlbnRJbmRleCA9IGluZGV4O1xyXG5cclxuXHRcdFx0YW5pbWF0ZVRva2VucygkdG9rZW5zLCBvcHRpb25zLmluLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0YmFzZS50cmlnZ2VyRXZlbnQoJ2luQW5pbWF0aW9uRW5kJyk7XHJcblx0XHRcdFx0aWYgKG9wdGlvbnMuaW4uY2FsbGJhY2spIG9wdGlvbnMuaW4uY2FsbGJhY2soKTtcclxuXHRcdFx0XHRpZiAoY2IpIGNiKGJhc2UpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH07XHJcblxyXG5cdFx0YmFzZS5vdXQgPSBmdW5jdGlvbiAoY2IpIHtcclxuXHRcdFx0dmFyICRlbGVtID0gYmFzZS4kdGV4dHMuZmluZCgnOm50aC1jaGlsZCgnICsgKChiYXNlLmN1cnJlbnRJbmRleCB8fCAwKSArIDEpICsgJyknKVxyXG5cdFx0XHRcdCwgJHRva2VucyA9IGJhc2UuJGN1cnJlbnQuZmluZCgnW2NsYXNzXj1cIicgKyBiYXNlLm9wdGlvbnMudHlwZSArICdcIl0nKVxyXG5cdFx0XHRcdCwgb3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBiYXNlLm9wdGlvbnMsICRlbGVtLmxlbmd0aCA/IGdldERhdGEoJGVsZW1bMF0pIDoge30pO1xyXG5cclxuXHRcdFx0YmFzZS50cmlnZ2VyRXZlbnQoJ291dEFuaW1hdGlvbkJlZ2luJyk7XHJcblxyXG5cdFx0XHRhbmltYXRlVG9rZW5zKCR0b2tlbnMsIG9wdGlvbnMub3V0LCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0JGVsZW0ucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKTtcclxuXHRcdFx0XHRiYXNlLnRyaWdnZXJFdmVudCgnb3V0QW5pbWF0aW9uRW5kJyk7XHJcblx0XHRcdFx0JGVsZW1lbnQucmVtb3ZlQXR0cignZGF0YS1hY3RpdmUnKTtcclxuXHRcdFx0XHRpZiAob3B0aW9ucy5vdXQuY2FsbGJhY2spIG9wdGlvbnMub3V0LmNhbGxiYWNrKCk7XHJcblx0XHRcdFx0aWYgKGNiKSBjYihiYXNlKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGJhc2Uuc3RhcnQgPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0YmFzZS50cmlnZ2VyRXZlbnQoJ3N0YXJ0Jyk7XHJcblxyXG5cdFx0XHRcdChmdW5jdGlvbiBydW4oaW5kZXgpIHtcclxuXHRcdFx0XHRcdGJhc2UuaW4oaW5kZXgsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0dmFyIGxlbmd0aCA9IGJhc2UuJHRleHRzLmNoaWxkcmVuKCkubGVuZ3RoO1xyXG5cclxuXHRcdFx0XHRcdFx0aW5kZXggKz0gMTtcclxuXHJcblx0XHRcdFx0XHRcdGlmICghYmFzZS5vcHRpb25zLmxvb3AgJiYgaW5kZXggPj0gbGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGJhc2Uub3B0aW9ucy5jYWxsYmFjaykgYmFzZS5vcHRpb25zLmNhbGxiYWNrKCk7XHJcblx0XHRcdFx0XHRcdFx0YmFzZS50cmlnZ2VyRXZlbnQoJ2VuZCcpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGluZGV4ID0gaW5kZXggJSBsZW5ndGg7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGJhc2UudGltZW91dFJ1biA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0YmFzZS5vdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRydW4oaW5kZXgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0fSwgYmFzZS5vcHRpb25zLm1pbkRpc3BsYXlUaW1lKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fShpbmRleCB8fCAwKSk7XHJcblx0XHRcdH0sIGJhc2Uub3B0aW9ucy5pbml0aWFsRGVsYXkpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRiYXNlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmIChiYXNlLnRpbWVvdXRSdW4pIHtcclxuXHRcdFx0XHRjbGVhckludGVydmFsKGJhc2UudGltZW91dFJ1bik7XHJcblx0XHRcdFx0YmFzZS50aW1lb3V0UnVuID0gbnVsbDtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRiYXNlLmluaXQoKTtcclxuXHR9O1xyXG5cclxuXHQkLmZuLnRleHRpbGxhdGUgPSBmdW5jdGlvbiAoc2V0dGluZ3MsIGFyZ3MpIHtcclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpXHJcblx0XHRcdFx0LCBkYXRhID0gJHRoaXMuZGF0YSgndGV4dGlsbGF0ZScpXHJcblx0XHRcdFx0LCBvcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sICQuZm4udGV4dGlsbGF0ZS5kZWZhdWx0cywgZ2V0RGF0YSh0aGlzKSwgdHlwZW9mIHNldHRpbmdzID09ICdvYmplY3QnICYmIHNldHRpbmdzKTtcclxuXHJcblx0XHRcdGlmICghZGF0YSkge1xyXG5cdFx0XHRcdCR0aGlzLmRhdGEoJ3RleHRpbGxhdGUnLCAoZGF0YSA9IG5ldyBUZXh0aWxsYXRlKHRoaXMsIG9wdGlvbnMpKSk7XHJcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIHNldHRpbmdzID09ICdzdHJpbmcnKSB7XHJcblx0XHRcdFx0ZGF0YVtzZXR0aW5nc10uYXBwbHkoZGF0YSwgW10uY29uY2F0KGFyZ3MpKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkYXRhLnNldE9wdGlvbnMuY2FsbChkYXRhLCBvcHRpb25zKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0JC5mbi50ZXh0aWxsYXRlLmRlZmF1bHRzID0ge1xyXG5cdFx0c2VsZWN0b3I6ICcudGV4dHMnLFxyXG5cdFx0bG9vcDogZmFsc2UsXHJcblx0XHRtaW5EaXNwbGF5VGltZTogMjAwMCxcclxuXHRcdGluaXRpYWxEZWxheTogMCxcclxuXHRcdGluOiB7XHJcblx0XHRcdGVmZmVjdDogJ2ZhZGVJbkxlZnRCaWcnLFxyXG5cdFx0XHRkZWxheVNjYWxlOiAxLjUsXHJcblx0XHRcdGRlbGF5OiA1MCxcclxuXHRcdFx0c3luYzogZmFsc2UsXHJcblx0XHRcdHJldmVyc2U6IGZhbHNlLFxyXG5cdFx0XHRzaHVmZmxlOiBmYWxzZSxcclxuXHRcdFx0Y2FsbGJhY2s6IGZ1bmN0aW9uICgpIHsgfVxyXG5cdFx0fSxcclxuXHRcdG91dDoge1xyXG5cdFx0XHRlZmZlY3Q6ICdoaW5nZScsXHJcblx0XHRcdGRlbGF5U2NhbGU6IDEuNSxcclxuXHRcdFx0ZGVsYXk6IDUwLFxyXG5cdFx0XHRzeW5jOiBmYWxzZSxcclxuXHRcdFx0cmV2ZXJzZTogZmFsc2UsXHJcblx0XHRcdHNodWZmbGU6IGZhbHNlLFxyXG5cdFx0XHRjYWxsYmFjazogZnVuY3Rpb24gKCkgeyB9XHJcblx0XHR9LFxyXG5cdFx0YXV0b1N0YXJ0OiB0cnVlLFxyXG5cdFx0aW5FZmZlY3RzOiBbXSxcclxuXHRcdG91dEVmZmVjdHM6IFsnaGluZ2UnXSxcclxuXHRcdGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7IH0sXHJcblx0XHR0eXBlOiAnY2hhcidcclxuXHR9O1xyXG5cclxufShqUXVlcnkpKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vTGV0dGVyaW5nLmpzLy8vLy8vLy8vLy8vLy9cclxuLypnbG9iYWwgalF1ZXJ5ICovXHJcbi8qIVx0XHJcbiogTGV0dGVyaW5nLkpTIDAuNi4xXHJcbipcclxuKiBDb3B5cmlnaHQgMjAxMCwgRGF2ZSBSdXBlcnQgaHR0cDovL2RhdmVydXBlcnQuY29tXHJcbiogUmVsZWFzZWQgdW5kZXIgdGhlIFdURlBMIGxpY2Vuc2UgXHJcbiogaHR0cDovL3NhbS56b3kub3JnL3d0ZnBsL1xyXG4qXHJcbiogVGhhbmtzIHRvIFBhdWwgSXJpc2ggLSBodHRwOi8vcGF1bGlyaXNoLmNvbSAtIGZvciB0aGUgZmVlZGJhY2suXHJcbipcclxuKiBEYXRlOiBNb24gU2VwIDIwIDE3OjE0OjAwIDIwMTAgLTA2MDBcclxuKi9cclxuKGZ1bmN0aW9uICgkKSB7XHJcblx0ZnVuY3Rpb24gaW5qZWN0b3IodCwgc3BsaXR0ZXIsIGtsYXNzLCBhZnRlcikge1xyXG5cdFx0dmFyIGEgPSB0LnRleHQoKS5zcGxpdChzcGxpdHRlciksIGluamVjdCA9ICcnO1xyXG5cdFx0aWYgKGEubGVuZ3RoKSB7XHJcblx0XHRcdCQoYSkuZWFjaChmdW5jdGlvbiAoaSwgaXRlbSkge1xyXG5cdFx0XHRcdGluamVjdCArPSAnPHNwYW4gY2xhc3M9XCInICsga2xhc3MgKyAoaSArIDEpICsgJ1wiPicgKyBpdGVtICsgJzwvc3Bhbj4nICsgYWZ0ZXI7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0LmVtcHR5KCkuYXBwZW5kKGluamVjdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR2YXIgbWV0aG9kcyA9IHtcclxuXHRcdGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGluamVjdG9yKCQodGhpcyksICcnLCAnY2hhcicsICcnKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHR3b3JkczogZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0aW5qZWN0b3IoJCh0aGlzKSwgJyAnLCAnd29yZCcsICcgJyk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0bGluZXM6IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHZhciByID0gXCJlZWZlYzMwMzA3OWFkMTc0MDVjODg5ZTA5MmUxMDViMFwiO1xyXG5cdFx0XHRcdC8vIEJlY2F1c2UgaXQncyBoYXJkIHRvIHNwbGl0IGEgPGJyLz4gdGFnIGNvbnNpc3RlbnRseSBhY3Jvc3MgYnJvd3NlcnMsXHJcblx0XHRcdFx0Ly8gKCphaGVtKiBJRSAqYWhlbSopLCB3ZSByZXBsYWNlcyBhbGwgPGJyLz4gaW5zdGFuY2VzIHdpdGggYW4gbWQ1IGhhc2ggXHJcblx0XHRcdFx0Ly8gKG9mIHRoZSB3b3JkIFwic3BsaXRcIikuICBJZiB5b3UncmUgdHJ5aW5nIHRvIHVzZSB0aGlzIHBsdWdpbiBvbiB0aGF0IFxyXG5cdFx0XHRcdC8vIG1kNSBoYXNoIHN0cmluZywgaXQgd2lsbCBmYWlsIGJlY2F1c2UgeW91J3JlIGJlaW5nIHJpZGljdWxvdXMuXHJcblx0XHRcdFx0aW5qZWN0b3IoJCh0aGlzKS5jaGlsZHJlbihcImJyXCIpLnJlcGxhY2VXaXRoKHIpLmVuZCgpLCByLCAnbGluZScsICcnKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdCQuZm4ubGV0dGVyaW5nID0gZnVuY3Rpb24gKG1ldGhvZCkge1xyXG5cdFx0Ly8gTWV0aG9kIGNhbGxpbmcgbG9naWNcclxuXHRcdGlmIChtZXRob2QgJiYgbWV0aG9kc1ttZXRob2RdKSB7XHJcblx0XHRcdHJldHVybiBtZXRob2RzW21ldGhvZF0uYXBwbHkodGhpcywgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcclxuXHRcdH0gZWxzZSBpZiAobWV0aG9kID09PSAnbGV0dGVycycgfHwgIW1ldGhvZCkge1xyXG5cdFx0XHRyZXR1cm4gbWV0aG9kcy5pbml0LmFwcGx5KHRoaXMsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSk7IC8vIGFsd2F5cyBwYXNzIGFuIGFycmF5XHJcblx0XHR9XHJcblx0XHQkLmVycm9yKCdNZXRob2QgJyArIG1ldGhvZCArICcgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LmxldHRlcmluZycpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHJcbn0pKGpRdWVyeSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vL0RyYXdTVkcuanMvLy8vLy8vLy8vLy8vL1xyXG4vKiEgalF1ZXJ5IERyYXdTVkcgdjEuMS4wICgyMDE2LTEwLTA1KSAtIGdpdC5pby92R0ZhNSAtIENvcHlyaWdodCAoYykgMjAxNiBMZW9uYXJkbyBTYW50b3MgLSBNSVQgTGljZW5zZSAqL1xyXG4hZnVuY3Rpb24gKHQpIHsgXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbXCJqcXVlcnlcIl0sIHQpIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgbW9kdWxlICYmIG1vZHVsZS5leHBvcnRzID8gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZSwgbikgeyByZXR1cm4gdm9pZCAwID09PSBuICYmIChuID0gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygd2luZG93ID8gcmVxdWlyZShcImpxdWVyeVwiKSA6IHJlcXVpcmUoXCJqcXVlcnlcIikoZSkpLCB0KG4pLCBuOyB9IDogdChqUXVlcnkpOyB9KGZ1bmN0aW9uICh0KSB7IFwidXNlIHN0cmljdFwiOyB2YXIgZSA9IFwiZHJhd3N2Z1wiLCBuID0geyBkdXJhdGlvbjogMWUzLCBzdGFnZ2VyOiAyMDAsIGVhc2luZzogXCJzd2luZ1wiLCByZXZlcnNlOiAhMSwgY2FsbGJhY2s6IHQubm9vcCB9LCBhID0gZnVuY3Rpb24gKCkgeyB2YXIgYSA9IGZ1bmN0aW9uIChhLCBvKSB7IHZhciBpID0gdGhpcywgciA9IHQuZXh0ZW5kKG4sIG8pOyBpLiRlbG0gPSB0KGEpLCBpLiRlbG0uaXMoXCJzdmdcIikgJiYgKGkub3B0aW9ucyA9IHIsIGkuJHBhdGhzID0gaS4kZWxtLmZpbmQoXCJwYXRoXCIpLCBpLnRvdGFsRHVyYXRpb24gPSByLmR1cmF0aW9uICsgci5zdGFnZ2VyICogaS4kcGF0aHMubGVuZ3RoLCBpLmR1cmF0aW9uID0gci5kdXJhdGlvbiAvIGkudG90YWxEdXJhdGlvbiwgaS4kcGF0aHMuZWFjaChmdW5jdGlvbiAodCwgZSkgeyB2YXIgbiA9IGUuZ2V0VG90YWxMZW5ndGgoKTsgZS5wYXRoTGVuID0gbiwgZS5kZWxheSA9IHIuc3RhZ2dlciAqIHQgLyBpLnRvdGFsRHVyYXRpb24sIGUuc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gW24sIG5dLmpvaW4oXCIgXCIpLCBlLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSBuOyB9KSwgaS4kZWxtLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbiAodCwgbikgeyByZXR1cm4gW24sIGUgKyBcIi1pbml0aWFsaXplZFwiXS5qb2luKFwiIFwiKTsgfSkpOyB9OyByZXR1cm4gYS5wcm90b3R5cGUuZ2V0VmFsID0gZnVuY3Rpb24gKGUsIG4pIHsgcmV0dXJuIDEgLSB0LmVhc2luZ1tuXShlLCBlLCAwLCAxLCAxKTsgfSwgYS5wcm90b3R5cGUucHJvZ3Jlc3MgPSBmdW5jdGlvbiAodCkgeyB2YXIgZSA9IHRoaXMsIG4gPSBlLm9wdGlvbnMsIGEgPSBlLmR1cmF0aW9uOyBlLiRwYXRocy5lYWNoKGZ1bmN0aW9uIChvLCBpKSB7IHZhciByID0gaS5zdHlsZTsgaWYgKDEgPT09IHQpIHIuc3Ryb2tlRGFzaG9mZnNldCA9IDA7IGVsc2UgaWYgKDAgPT09IHQpIHIuc3Ryb2tlRGFzaG9mZnNldCA9IGkucGF0aExlbiArIFwicHhcIjsgZWxzZSBpZiAodCA+PSBpLmRlbGF5ICYmIHQgPD0gYSArIGkuZGVsYXkpIHsgdmFyIHMgPSAodCAtIGkuZGVsYXkpIC8gYTsgci5zdHJva2VEYXNob2Zmc2V0ID0gZS5nZXRWYWwocywgbi5lYXNpbmcpICogaS5wYXRoTGVuICogKG4ucmV2ZXJzZSA/IC0xIDogMSkgKyBcInB4XCI7IH0gfSk7IH0sIGEucHJvdG90eXBlLmFuaW1hdGUgPSBmdW5jdGlvbiAoKSB7IHZhciBuID0gdGhpczsgbi4kZWxtLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbiAodCwgbikgeyByZXR1cm4gW24sIGUgKyBcIi1hbmltYXRpbmdcIl0uam9pbihcIiBcIik7IH0pLCB0KHsgbGVuOiAwIH0pLmFuaW1hdGUoeyBsZW46IDEgfSwgeyBlYXNpbmc6IFwibGluZWFyXCIsIGR1cmF0aW9uOiBuLnRvdGFsRHVyYXRpb24sIHN0ZXA6IGZ1bmN0aW9uICh0LCBlKSB7IG4ucHJvZ3Jlc3MuY2FsbChuLCB0IC8gZS5lbmQpOyB9LCBjb21wbGV0ZTogZnVuY3Rpb24gKCkgeyBuLm9wdGlvbnMuY2FsbGJhY2suY2FsbCh0aGlzKSwgbi4kZWxtLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbiAodCwgbikgeyByZXR1cm4gbi5yZXBsYWNlKGUgKyBcIi1hbmltYXRpbmdcIiwgXCJcIik7IH0pOyB9IH0pOyB9LCBhOyB9KCk7IHQuZm5bZV0gPSBmdW5jdGlvbiAobiwgbykgeyByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHsgdmFyIGkgPSB0LmRhdGEodGhpcywgZSk7IGkgJiYgXCJcIiArIG4gPT09IG4gJiYgaVtuXSA/IGlbbl0obykgOiB0LmRhdGEodGhpcywgZSwgbmV3IGEodGhpcywgbikpOyB9KTsgfTsgfSk7XHJcbi8qIGVzbGludC1lbmFibGUgKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9