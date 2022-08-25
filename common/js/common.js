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
/* harmony import */ var _module_modernizr_custom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../module/modernizr-custom */ "./work/js/module/modernizr-custom.js");
/* harmony import */ var _module_modernizr_custom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_module_modernizr_custom__WEBPACK_IMPORTED_MODULE_3__);



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
  if (!Modernizr.touchevents) {
    (function () {
      // eslint-disable-line
      var cursor = document.getElementById('cursor');
      var stalker = document.getElementById('stalker');
      document.addEventListener('mousemove', translate);

      function translate(e) {
        // eslint-disable-line
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
    })();
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

/***/ "./work/js/module/modernizr-custom.js":
/*!********************************************!*\
  !*** ./work/js/module/modernizr-custom.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable */

/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-touchevents-setclasses !*/
!function (e, n, t) {
  function o(e, n) {
    return _typeof(e) === n;
  }

  function s() {
    var e, n, t, s, a, i, r;

    for (var l in c) {
      if (c.hasOwnProperty(l)) {
        if (e = [], n = c[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (t = 0; t < n.options.aliases.length; t++) {
          e.push(n.options.aliases[t].toLowerCase());
        }

        for (s = o(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++) {
          i = e[a], r = i.split("."), 1 === r.length ? Modernizr[r[0]] = s : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = s), f.push((s ? "" : "no-") + r.join("-"));
        }
      }
    }
  }

  function a(e) {
    var n = u.className,
        t = Modernizr._config.classPrefix || "";

    if (p && (n = n.baseVal), Modernizr._config.enableJSClass) {
      var o = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
      n = n.replace(o, "$1" + t + "js$2");
    }

    Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), p ? u.className.baseVal = n : u.className = n);
  }

  function i() {
    return "function" != typeof n.createElement ? n.createElement(arguments[0]) : p ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments);
  }

  function r() {
    var e = n.body;
    return e || (e = i(p ? "svg" : "body"), e.fake = !0), e;
  }

  function l(e, t, o, s) {
    var a,
        l,
        f,
        c,
        d = "modernizr",
        p = i("div"),
        h = r();
    if (parseInt(o, 10)) for (; o--;) {
      f = i("div"), f.id = s ? s[o] : d + (o + 1), p.appendChild(f);
    }
    return a = i("style"), a.type = "text/css", a.id = "s" + d, (h.fake ? h : p).appendChild(a), h.appendChild(p), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(n.createTextNode(e)), p.id = d, h.fake && (h.style.background = "", h.style.overflow = "hidden", c = u.style.overflow, u.style.overflow = "hidden", u.appendChild(h)), l = t(p, e), h.fake ? (h.parentNode.removeChild(h), u.style.overflow = c, u.offsetHeight) : p.parentNode.removeChild(p), !!l;
  }

  var f = [],
      c = [],
      d = {
    _version: "3.6.0",
    _config: {
      classPrefix: "",
      enableClasses: !0,
      enableJSClass: !0,
      usePrefixes: !0
    },
    _q: [],
    on: function on(e, n) {
      var t = this;
      setTimeout(function () {
        n(t[e]);
      }, 0);
    },
    addTest: function addTest(e, n, t) {
      c.push({
        name: e,
        fn: n,
        options: t
      });
    },
    addAsyncTest: function addAsyncTest(e) {
      c.push({
        name: null,
        fn: e
      });
    }
  },
      Modernizr = function Modernizr() {};

  Modernizr.prototype = d, Modernizr = new Modernizr();
  var u = n.documentElement,
      p = "svg" === u.nodeName.toLowerCase(),
      h = d._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
  d._prefixes = h;
  var m = d.testStyles = l;
  Modernizr.addTest("touchevents", function () {
    var t;
    if ("ontouchstart" in e || e.DocumentTouch && n instanceof DocumentTouch) t = !0;else {
      var o = ["@media (", h.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
      m(o, function (e) {
        t = 9 === e.offsetTop;
      });
    }
    return t;
  }), s(), a(f), delete d.addTest, delete d.addAsyncTest;

  for (var v = 0; v < Modernizr._q.length; v++) {
    Modernizr._q[v]();
  }

  e.Modernizr = Modernizr;
}(window, document);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2RlYm91bmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3Rocm90dGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9OdW1iZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi93b3JrL2pzL2NvbW1vbi9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vd29yay9qcy9tb2R1bGUvYm9keVNjcm9sbFByZXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vd29yay9qcy9tb2R1bGUvY29tbW9uLnBsdWdpbi5qcyIsIndlYnBhY2s6Ly8vLi93b3JrL2pzL21vZHVsZS9tb2Rlcm5penItY3VzdG9tLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbImJvZHkiLCIkIiwiYWNjZXNzRmxhZyIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsIm15Y0xvZ28iLCJkcmF3c3ZnIiwiZHVyYXRpb24iLCJzdGFnZ2VyIiwiZWFzaW5nIiwiY2FsbGJhY2siLCJhZGRDbGFzcyIsImhhc0NsYXNzIiwic2V0VGltZW91dCIsImNzcyIsImNsb25lTmF2IiwiY2xvbmUiLCJhdHRyIiwiaW5zZXJ0QWZ0ZXIiLCJsb2dvTW92ZSIsInNob3dDbGFzcyIsImZvclNob3cxIiwiZm9yU2hvdzIiLCJmb3JTaG93MyIsImZvclNob3c0IiwiZm9yU2hvd3MiLCJoZWFkaW5nIiwiY29tbWVudEFuaW0iLCJyb2xsQmFjayIsIm1vZ2lGb290ZXIiLCJjb250ZW50c0hlaWdodCIsImRvY3VtZW50IiwiaGVpZ2h0Iiwid2luZG93Iiwib24iLCJ0aHJvdHRsZSIsIndpbmRvd0hlaWdodCIsInNjcm9sbCIsInNjcm9sbFRvcCIsInJlbW92ZUNsYXNzIiwibGVuIiwibGVuZ3RoIiwiaiIsImVhY2giLCJpIiwiZm9yU2hvd1BvaW50Iiwib2Zmc2V0IiwidG9wIiwiZGVsYXlUaW1lIiwiZGVsYXkiLCJxdWV1ZSIsImhlYWRpbmdQb2ludCIsInRleHRpbGxhdGUiLCJpbiIsImVmZmVjdCIsInNodWZmbGUiLCJkZWxheVNjYWxlIiwibXlDb21tZW50UG9pbnQiLCJmYWRlSW4iLCJmYWRlT3V0Iiwic2hvdyIsImFuaW1hdGUiLCJoYW1iQnRucyIsImhhbWJCdG4xIiwiaGFtYkJ0bjIiLCJoYW1iQnRuMyIsInNwTmF2Iiwic3BOYXZMaXN0cyIsInNwTmF2TGluayIsImZhZGVUaW1lIiwidG9nZ2xlTmF2IiwiYm9keVNjcm9sbFByZXZlbnQiLCJoaWRlIiwidG9nZ2xlQ2xhc3MiLCJocmVmIiwidGFyZ2V0IiwicG9zaXRpb24iLCJjb25zb2xlIiwibG9nIiwiZml4UHgiLCJ1cmwiLCJsb2NhdGlvbiIsImluY2x1ZGVzIiwiaWROYW1lIiwic3BsaXQiLCJwb3MiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmRleE9mIiwicHJvcCIsInBhcmVudHMiLCJNb2Rlcm5penIiLCJ0b3VjaGV2ZW50cyIsImN1cnNvciIsImdldEVsZW1lbnRCeUlkIiwic3RhbGtlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0cmFuc2xhdGUiLCJlIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJjbGllbnRYIiwiY2xpZW50WSIsImxpbmtFbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ0cmlnZ2VyIiwiZmxhZyIsInNjcm9sbFBvc2l0aW9uIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ1YSIsInRvTG93ZXJDYXNlIiwiaXNpT1MiLCJzY3JvbGxCYXJXaWR0aCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsInBhZGRpbmdSaWdodCIsInBhZ2VZT2Zmc2V0Iiwid2lkdGgiLCJvdmVyZmxvdyIsInBhcnNlSW50IiwicmVwbGFjZSIsInNjcm9sbFRvIiwiaXNJbkVmZmVjdCIsInRlc3QiLCJpbkFycmF5IiwiZm4iLCJkZWZhdWx0cyIsImluRWZmZWN0cyIsImlzT3V0RWZmZWN0Iiwib3V0RWZmZWN0cyIsInN0cmluZ1RvQm9vbGVhbiIsInN0ciIsImdldERhdGEiLCJub2RlIiwiYXR0cnMiLCJhdHRyaWJ1dGVzIiwiZGF0YSIsIm5vZGVOYW1lIiwibm9kZVZhbHVlIiwib3V0IiwibyIsIngiLCJNYXRoIiwicmFuZG9tIiwiJHQiLCJjYiIsIm9uZSIsImFuaW1hdGVUb2tlbnMiLCIkdG9rZW5zIiwib3B0aW9ucyIsInRoYXQiLCJjb3VudCIsInJldmVyc2UiLCJ0b0FycmF5IiwidCIsIiR0b2tlbiIsImNvbXBsZXRlIiwic3luYyIsInRleHQiLCJUZXh0aWxsYXRlIiwiZWxlbWVudCIsImJhc2UiLCIkZWxlbWVudCIsImluaXQiLCIkdGV4dHMiLCJmaW5kIiwic2VsZWN0b3IiLCJodG1sIiwiJGN1cnJlbnQiLCJwcmVwZW5kVG8iLCJzZXRPcHRpb25zIiwidGltZW91dFJ1biIsImF1dG9TdGFydCIsInN0YXJ0IiwiaW5pdGlhbERlbGF5IiwidHJpZ2dlckV2ZW50IiwibmFtZSIsIkV2ZW50IiwiaW5kZXgiLCIkZWxlbSIsImV4dGVuZCIsImxldHRlcmluZyIsInR5cGUiLCJjdXJyZW50SW5kZXgiLCJyZW1vdmVBdHRyIiwicnVuIiwiY2hpbGRyZW4iLCJsb29wIiwibWluRGlzcGxheVRpbWUiLCJzdG9wIiwiY2xlYXJJbnRlcnZhbCIsInNldHRpbmdzIiwiYXJncyIsIiR0aGlzIiwiYXBwbHkiLCJjb25jYXQiLCJjYWxsIiwialF1ZXJ5IiwiaW5qZWN0b3IiLCJzcGxpdHRlciIsImtsYXNzIiwiYWZ0ZXIiLCJhIiwiaW5qZWN0IiwiaXRlbSIsImVtcHR5IiwiYXBwZW5kIiwibWV0aG9kcyIsIndvcmRzIiwibGluZXMiLCJyIiwicmVwbGFjZVdpdGgiLCJlbmQiLCJtZXRob2QiLCJzbGljZSIsImFyZ3VtZW50cyIsImVycm9yIiwiZGVmaW5lIiwibiIsIm5vb3AiLCIkZWxtIiwiaXMiLCIkcGF0aHMiLCJ0b3RhbER1cmF0aW9uIiwiZ2V0VG90YWxMZW5ndGgiLCJwYXRoTGVuIiwic3Ryb2tlRGFzaGFycmF5Iiwiam9pbiIsInN0cm9rZURhc2hvZmZzZXQiLCJwcm90b3R5cGUiLCJnZXRWYWwiLCJwcm9ncmVzcyIsInMiLCJzdGVwIiwibCIsImMiLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJhbGlhc2VzIiwiQm9vbGVhbiIsImYiLCJ1IiwiY2xhc3NOYW1lIiwiX2NvbmZpZyIsImNsYXNzUHJlZml4IiwicCIsImJhc2VWYWwiLCJlbmFibGVKU0NsYXNzIiwiUmVnRXhwIiwiZW5hYmxlQ2xhc3NlcyIsImNyZWF0ZUVsZW1lbnQiLCJjcmVhdGVFbGVtZW50TlMiLCJmYWtlIiwiZCIsImgiLCJpZCIsImFwcGVuZENoaWxkIiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJjcmVhdGVUZXh0Tm9kZSIsImJhY2tncm91bmQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJvZmZzZXRIZWlnaHQiLCJfdmVyc2lvbiIsInVzZVByZWZpeGVzIiwiX3EiLCJhZGRUZXN0IiwiYWRkQXN5bmNUZXN0IiwiZG9jdW1lbnRFbGVtZW50IiwiX3ByZWZpeGVzIiwibSIsInRlc3RTdHlsZXMiLCJEb2N1bWVudFRvdWNoIiwib2Zmc2V0VG9wIiwidiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLFdBQVcsbUJBQU8sQ0FBQywrQ0FBUzs7QUFFNUI7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDTEEsYUFBYSxtQkFBTyxDQUFDLG1EQUFXO0FBQ2hDLGdCQUFnQixtQkFBTyxDQUFDLHlEQUFjO0FBQ3RDLHFCQUFxQixtQkFBTyxDQUFDLG1FQUFtQjs7QUFFaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ0hBLGFBQWEsbUJBQU8sQ0FBQyxtREFBVzs7QUFFaEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNyQkEsaUJBQWlCLG1CQUFPLENBQUMsMkRBQWU7O0FBRXhDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDUkEsZUFBZSxtQkFBTyxDQUFDLHFEQUFZO0FBQ25DLFVBQVUsbUJBQU8sQ0FBQywyQ0FBTztBQUN6QixlQUFlLG1CQUFPLENBQUMscURBQVk7O0FBRW5DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU8sWUFBWTtBQUM5QixXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSw4Q0FBOEMsa0JBQWtCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzlMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDNUJBLGlCQUFpQixtQkFBTyxDQUFDLDJEQUFlO0FBQ3hDLG1CQUFtQixtQkFBTyxDQUFDLDZEQUFnQjs7QUFFM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzVCQSxXQUFXLG1CQUFPLENBQUMsK0NBQVM7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDdEJBLGVBQWUsbUJBQU8sQ0FBQyxxREFBWTtBQUNuQyxlQUFlLG1CQUFPLENBQUMscURBQVk7O0FBRW5DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU8sWUFBWTtBQUM5QixXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELG9CQUFvQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3BFQSxlQUFlLG1CQUFPLENBQUMscURBQVk7QUFDbkMsZUFBZSxtQkFBTyxDQUFDLHFEQUFZOztBQUVuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDakVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0NBR0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxDQUFDLENBQUMsTUFBRCxDQUFkLEMsQ0FFQTs7QUFDQSxDQUFDLFlBQU07QUFDTixNQUFNQyxVQUFVLEdBQUdDLGNBQWMsQ0FBQ0MsT0FBZixDQUF1QixVQUF2QixDQUFuQjtBQUNBLE1BQU1DLE9BQU8sR0FBR0osQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjSyxPQUFkLENBQXNCO0FBQ3JDQyxZQUFRLEVBQUUsSUFEMkI7QUFFckNDLFdBQU8sRUFBRSxFQUY0QjtBQUdyQ0MsVUFBTSxFQUFFLE9BSDZCO0FBSXJDQyxZQUpxQyxzQkFJMUI7QUFDVlQsT0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQlUsUUFBaEIsQ0FBeUIsVUFBekI7QUFDQTtBQU5vQyxHQUF0QixDQUFoQjs7QUFRQSxNQUFJLENBQUNULFVBQUQsSUFBZUYsSUFBSSxDQUFDWSxRQUFMLENBQWMsTUFBZCxDQUFuQixFQUEwQztBQUN6Q0MsY0FBVSxDQUFDLFlBQU07QUFDaEJSLGFBQU8sQ0FBQ1MsR0FBUixDQUFZLFNBQVosRUFBdUIsQ0FBdkIsRUFBMEJSLE9BQTFCLENBQWtDLFNBQWxDO0FBQ0EsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdBLEdBSkQsTUFJTztBQUNORCxXQUFPLENBQUNTLEdBQVIsQ0FBWSxTQUFaLEVBQXVCLENBQXZCLEVBQTBCUixPQUExQixDQUFrQyxTQUFsQztBQUNBO0FBQ0QsQ0FqQkQsSSxDQW1CQTs7O0FBQ0FMLENBQUMsQ0FBQyxZQUFNO0FBRVA7QUFDQSxNQUFNYyxRQUFRLEdBQUdkLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JlLEtBQWhCLEdBQXdCQyxJQUF4QixDQUE2QixJQUE3QixFQUFtQyxVQUFuQyxFQUErQ04sUUFBL0MsQ0FBd0QsVUFBeEQsRUFBb0VPLFdBQXBFLENBQWdGLFlBQWhGLENBQWpCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHbEIsQ0FBQyxDQUFDLGtCQUFELENBQWxCO0FBQ0EsTUFBTW1CLFNBQVMsR0FBRyxRQUFsQixDQUxPLENBTVA7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHcEIsQ0FBQyxDQUFDLFdBQUQsQ0FBbEI7QUFDQSxNQUFNcUIsUUFBUSxHQUFHckIsQ0FBQyxDQUFDLFdBQUQsQ0FBbEI7QUFDQSxNQUFNc0IsUUFBUSxHQUFHdEIsQ0FBQyxDQUFDLFdBQUQsQ0FBbEI7QUFDQSxNQUFNdUIsUUFBUSxHQUFHdkIsQ0FBQyxDQUFDLFdBQUQsQ0FBbEI7QUFDQSxNQUFNd0IsUUFBUSxHQUFHLENBQUNKLFFBQUQsRUFBV0MsUUFBWCxFQUFxQkMsUUFBckIsRUFBK0JDLFFBQS9CLENBQWpCLENBWE8sQ0FZUDs7QUFDQSxNQUFNRSxPQUFPLEdBQUd6QixDQUFDLENBQUMsVUFBRCxDQUFqQixDQWJPLENBY1A7O0FBQ0EsTUFBTTBCLFdBQVcsR0FBRzFCLENBQUMsQ0FBQyxjQUFELENBQXJCLENBZk8sQ0FnQlA7O0FBQ0EsTUFBTTJCLFFBQVEsR0FBRzNCLENBQUMsQ0FBQyxXQUFELENBQWxCLENBakJPLENBa0JQOztBQUNBLE1BQU00QixVQUFVLEdBQUc1QixDQUFDLENBQUMsYUFBRCxDQUFwQjtBQUNBLE1BQU02QixjQUFjLEdBQUc3QixDQUFDLENBQUM4QixRQUFELENBQUQsQ0FBWUMsTUFBWixFQUF2QixDQXBCTyxDQXNCUDs7QUFDQS9CLEdBQUMsQ0FBQ2dDLE1BQUQsQ0FBRCxDQUFVQyxFQUFWLENBQWEsUUFBYixFQUF1QkMsc0RBQVEsQ0FBQyxZQUFZO0FBRTNDO0FBQ0EsUUFBTUMsWUFBWSxHQUFHbkMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRK0IsTUFBUixFQUFyQjtBQUNBLFFBQU1LLE1BQU0sR0FBR3BDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFDLFNBQVIsRUFBZixDQUoyQyxDQU0zQzs7QUFDQSxRQUFJRCxNQUFNLEdBQUcsR0FBYixFQUFrQjtBQUNqQmxCLGNBQVEsQ0FBQ0wsR0FBVCxDQUFhLFNBQWIsRUFBd0IsY0FBeEI7QUFDQUMsY0FBUSxDQUFDSixRQUFULENBQWtCUyxTQUFsQjtBQUNBLEtBSEQsTUFHTztBQUNOTCxjQUFRLENBQUN3QixXQUFULENBQXFCbkIsU0FBckI7QUFDQSxLQVowQyxDQWEzQzs7O0FBQ0EsUUFBTW9CLEdBQUcsR0FBR2YsUUFBUSxDQUFDZ0IsTUFBckI7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixHQUFwQixFQUF5QkUsQ0FBQyxFQUExQixFQUE4QjtBQUM3QmpCLGNBQVEsQ0FBQ2lCLENBQUQsQ0FBUixDQUFZQyxJQUFaLENBQWlCLFVBQVVDLENBQVYsRUFBYTtBQUM3QixZQUFNQyxZQUFZLEdBQUc1QyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVE2QyxNQUFSLEdBQWlCQyxHQUFqQixHQUF1QixFQUE1QztBQUNBLFlBQU1DLFNBQVMsR0FBRyxFQUFsQjs7QUFDQSxZQUFJWCxNQUFNLEdBQUdRLFlBQVksR0FBR1QsWUFBNUIsRUFBMEM7QUFDekNuQyxXQUFDLENBQUMsSUFBRCxDQUFELENBQVFnRCxLQUFSLENBQWNMLENBQUMsR0FBR0ksU0FBbEIsRUFBNkJFLEtBQTdCLENBQW1DLFlBQVk7QUFDOUNqRCxhQUFDLENBQUMsSUFBRCxDQUFELENBQVFVLFFBQVIsQ0FBaUIsUUFBakI7QUFDQSxXQUZEO0FBR0E7QUFDRCxPQVJEO0FBU0EsS0F6QjBDLENBMEIzQzs7O0FBQ0FlLFdBQU8sQ0FBQ2lCLElBQVIsQ0FBYSxZQUFZO0FBQ3hCLFVBQU1RLFlBQVksR0FBR2xELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTZDLE1BQVIsR0FBaUJDLEdBQXRDOztBQUNBLFVBQUlWLE1BQU0sR0FBR2MsWUFBWSxHQUFHZixZQUE1QixFQUEwQztBQUN6Q25DLFNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWEsR0FBUixDQUFZLFNBQVosRUFBdUIsQ0FBdkIsRUFBMEJzQyxVQUExQixDQUFxQztBQUNwQ0MsWUFBRSxFQUFFO0FBQ0hDLGtCQUFNLEVBQUUsVUFETDtBQUVIQyxtQkFBTyxFQUFFLElBRk47QUFHSE4saUJBQUssRUFBRSxFQUhKO0FBSUhPLHNCQUFVLEVBQUU7QUFKVDtBQURnQyxTQUFyQztBQVFBO0FBQ0QsS0FaRCxFQTNCMkMsQ0F3QzNDOztBQUNBLFFBQUk3QixXQUFXLENBQUNjLE1BQWhCLEVBQXdCO0FBQ3ZCLFVBQU1nQixjQUFjLEdBQUc5QixXQUFXLENBQUNtQixNQUFaLEdBQXFCQyxHQUE1Qzs7QUFDQSxVQUFJVixNQUFNLEdBQUdvQixjQUFjLEdBQUdyQixZQUE5QixFQUE0QztBQUMzQ1QsbUJBQVcsQ0FBQ2IsR0FBWixDQUFnQixTQUFoQixFQUEyQixDQUEzQixFQUE4QkgsUUFBOUIsQ0FBdUMscUJBQXZDO0FBQ0E7QUFDRCxLQTlDMEMsQ0ErQzNDOzs7QUFDQSxRQUFJMEIsTUFBTSxHQUFHLEdBQWIsRUFBa0I7QUFDakJULGNBQVEsQ0FBQzhCLE1BQVQsQ0FBZ0IsR0FBaEI7QUFDQSxLQUZELE1BRU87QUFDTjlCLGNBQVEsQ0FBQytCLE9BQVQsQ0FBaUIsR0FBakI7QUFDQSxLQXBEMEMsQ0FxRDNDOzs7QUFDQSxRQUFJN0IsY0FBYyxJQUFJTyxNQUFNLEdBQUdELFlBQWIsQ0FBZCxHQUEyQyxHQUEvQyxFQUFvRDtBQUNuRFAsZ0JBQVUsQ0FBQytCLElBQVgsQ0FBZ0IsWUFBWTtBQUMzQjNELFNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVUsUUFBUixDQUFpQixXQUFqQjtBQUNBLE9BRkQ7QUFHQSxLQUpELE1BSU87QUFDTixVQUFJa0IsVUFBVSxDQUFDakIsUUFBWCxDQUFvQixXQUFwQixDQUFKLEVBQXNDO0FBQ3JDaUIsa0JBQVUsQ0FBQzhCLE9BQVgsQ0FBbUIsR0FBbkIsRUFBd0IsWUFBWTtBQUNuQzFELFdBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXNDLFdBQVIsQ0FBb0IsV0FBcEI7QUFDQSxTQUZEO0FBR0E7QUFDRDtBQUVELEdBbEU4QixFQWtFNUIsR0FsRTRCLENBQS9CLEVBdkJPLENBMEZQO0FBRUE7QUFDQTs7QUFDQVgsVUFBUSxDQUFDTSxFQUFULENBQVksT0FBWixFQUFvQixZQUFNO0FBQ3pCakMsS0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlNEQsT0FBZixDQUF1QjtBQUFFdkIsZUFBUyxFQUFFO0FBQWIsS0FBdkIsRUFBeUMsR0FBekMsRUFBOEMsZ0JBQTlDO0FBQ0EsR0FGRCxFQTlGTyxDQWlHUDtBQUVBLENBbkdBLENBQUQsQyxDQW9HQTtBQUVBOztBQUNBckMsQ0FBQyxDQUFDLFlBQU07QUFDUCxNQUFNNkQsUUFBUSxHQUFHN0QsQ0FBQyxDQUFDLFVBQUQsQ0FBbEI7QUFDQSxNQUFNOEQsUUFBUSxHQUFHOUQsQ0FBQyxDQUFDLFdBQUQsQ0FBbEI7QUFDQSxNQUFNK0QsUUFBUSxHQUFHL0QsQ0FBQyxDQUFDLFdBQUQsQ0FBbEI7QUFDQSxNQUFNZ0UsUUFBUSxHQUFHaEUsQ0FBQyxDQUFDLFdBQUQsQ0FBbEI7QUFDQSxNQUFNaUUsS0FBSyxHQUFHakUsQ0FBQyxDQUFDLGNBQUQsQ0FBZjtBQUNBLE1BQU1rRSxVQUFVLEdBQUdsRSxDQUFDLENBQUMsb0JBQUQsQ0FBcEI7QUFDQSxNQUFNbUUsU0FBUyxHQUFHbkUsQ0FBQyxDQUFDLG1CQUFELENBQW5CO0FBQ0EsTUFBTStDLFNBQVMsR0FBRyxFQUFsQjtBQUNBLE1BQU1xQixRQUFRLEdBQUcsR0FBakI7QUFDQVAsVUFBUSxDQUFDNUIsRUFBVCxDQUFZLE9BQVosRUFBcUIsWUFBTTtBQUMxQm9DLGFBQVM7O0FBQ1QsUUFBSUgsVUFBVSxDQUFDckQsR0FBWCxDQUFlLFNBQWYsS0FBNkIsV0FBakMsRUFBOEM7QUFDN0NxRCxnQkFBVSxDQUFDUixPQUFYLENBQW1CVSxRQUFuQjtBQUNBRSwrRUFBaUIsQ0FBQyxLQUFELENBQWpCO0FBQ0EsS0FIRCxNQUdPO0FBQ05BLCtFQUFpQixDQUFDLElBQUQsQ0FBakI7QUFDQUosZ0JBQVUsQ0FBQ3hCLElBQVgsQ0FBZ0IsVUFBVUMsQ0FBVixFQUFhO0FBQzVCM0MsU0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0QsS0FBUixDQUFjTCxDQUFDLEdBQUdJLFNBQWxCLEVBQTZCVSxNQUE3QixDQUFvQ1csUUFBcEM7QUFDQSxPQUZEO0FBR0E7QUFDRCxHQVhEO0FBWUFELFdBQVMsQ0FBQ2xDLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLFlBQU07QUFDM0JxQyw2RUFBaUIsQ0FBQyxLQUFELENBQWpCO0FBQ0FELGFBQVM7QUFDVEgsY0FBVSxDQUFDSyxJQUFYO0FBQ0EsR0FKRDs7QUFLQSxXQUFTRixTQUFULEdBQXFCO0FBQ3BCLFFBQUksQ0FBQ0osS0FBSyxDQUFDdEQsUUFBTixDQUFlLFNBQWYsQ0FBTCxFQUFnQztBQUMvQnNELFdBQUssQ0FBQ1IsTUFBTixDQUFhVyxRQUFiLEVBQXVCMUQsUUFBdkIsQ0FBZ0MsU0FBaEM7QUFDQSxLQUZELE1BRU87QUFDTnVELFdBQUssQ0FBQ1AsT0FBTixDQUFjVSxRQUFkLEVBQXdCLFlBQVk7QUFDbkNwRSxTQUFDLENBQUMsSUFBRCxDQUFELENBQVFzQyxXQUFSLENBQW9CLFNBQXBCO0FBQ0EsT0FGRDtBQUdBOztBQUVEd0IsWUFBUSxDQUFDVSxXQUFULENBQXFCLFdBQXJCO0FBQ0FULFlBQVEsQ0FBQ1MsV0FBVCxDQUFxQixXQUFyQjtBQUNBUixZQUFRLENBQUNRLFdBQVQsQ0FBcUIsV0FBckI7QUFDQTtBQUNELENBeENBLENBQUQsQyxDQXlDQTtBQUNBO0FBQ0E7O0FBQ0F4RSxDQUFDLENBQUMsWUFBTTtBQUNQQSxHQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QmlDLEVBQTdCLENBQWdDLE9BQWhDLEVBQXdDLFlBQVk7QUFDbkQsUUFBTXdDLElBQUksR0FBR3pFLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWdCLElBQVIsQ0FBYSxNQUFiLENBQWI7QUFDQSxRQUFNMEQsTUFBTSxHQUFHMUUsQ0FBQyxDQUFDeUUsSUFBSSxJQUFJLEdBQVIsSUFBZUEsSUFBSSxLQUFLLEVBQXhCLEdBQTZCLE1BQTdCLEdBQXNDQSxJQUF2QyxDQUFoQjtBQUNBLFFBQU1FLFFBQVEsR0FBR0QsTUFBTSxDQUFDN0IsTUFBUCxHQUFnQkMsR0FBakM7QUFDQThCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaOztBQUNBLFFBQUlGLElBQUksS0FBSyxVQUFiLEVBQXlCO0FBQ3hCekUsT0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlNEQsT0FBZixDQUF1QjtBQUFFdkIsaUJBQVMsRUFBRXNDO0FBQWIsT0FBdkIsRUFBZ0QsR0FBaEQsRUFBcUQsZ0JBQXJEO0FBQ0EsS0FGRCxNQUVPO0FBQ04zRSxPQUFDLENBQUMsV0FBRCxDQUFELENBQWU0RCxPQUFmLENBQXVCO0FBQUV2QixpQkFBUyxFQUFFc0MsUUFBUSxHQUFHO0FBQXhCLE9BQXZCLEVBQXFELEdBQXJELEVBQTBELGdCQUExRDtBQUNBOztBQUNELFdBQU8sS0FBUDtBQUNBLEdBWEQ7QUFZQTNFLEdBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCaUMsRUFBL0IsQ0FBa0MsT0FBbEMsRUFBMEMsWUFBWTtBQUNyRCxRQUFNd0MsSUFBSSxHQUFHekUsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0IsSUFBUixDQUFhLE1BQWIsQ0FBYjtBQUNBLFFBQU0wRCxNQUFNLEdBQUcxRSxDQUFDLENBQUN5RSxJQUFJLElBQUksR0FBUixJQUFlQSxJQUFJLEtBQUssRUFBeEIsR0FBNkIsTUFBN0IsR0FBc0NBLElBQXZDLENBQWhCO0FBQ0EsUUFBTUUsUUFBUSxHQUFHRCxNQUFNLENBQUM3QixNQUFQLEdBQWdCQyxHQUFqQzs7QUFDQSxRQUFJMkIsSUFBSSxLQUFLLFVBQWIsRUFBeUI7QUFDeEJ6RSxPQUFDLENBQUMsV0FBRCxDQUFELENBQWU0RCxPQUFmLENBQXVCO0FBQUV2QixpQkFBUyxFQUFFc0MsUUFBUSxHQUFHO0FBQXhCLE9BQXZCLEVBQXNELEdBQXRELEVBQTJELGdCQUEzRDtBQUNBLEtBRkQsTUFFTztBQUNOM0UsT0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlNEQsT0FBZixDQUF1QjtBQUFFdkIsaUJBQVMsRUFBRXNDLFFBQVEsR0FBRztBQUF4QixPQUF2QixFQUFxRCxHQUFyRCxFQUEwRCxnQkFBMUQ7QUFDQTs7QUFDRCxXQUFPLEtBQVA7QUFDQSxHQVZEO0FBV0EsQ0F4QkEsQ0FBRCxDLENBeUJBO0FBRUE7O0FBQ0EzRSxDQUFDLENBQUNnQyxNQUFELENBQUQsQ0FBVUMsRUFBVixDQUFhLE1BQWIsRUFBcUIsWUFBTTtBQUMxQixNQUFNNkMsS0FBSyxHQUFHLENBQUMsRUFBZjtBQUNBLE1BQU1DLEdBQUcsR0FBRy9FLENBQUMsQ0FBQ2dGLFFBQUQsQ0FBRCxDQUFZaEUsSUFBWixDQUFpQixNQUFqQixDQUFaOztBQUNBLE1BQUkrRCxHQUFHLENBQUNFLFFBQUosQ0FBYSxNQUFiLENBQUosRUFBMEI7QUFDekIsUUFBTUMsTUFBTSxHQUFHSCxHQUFHLENBQUNJLEtBQUosQ0FBVSxNQUFWLENBQWY7QUFDQSxRQUFNVCxNQUFNLEdBQUcxRSxDQUFDLFlBQUtrRixNQUFNLENBQUNBLE1BQU0sQ0FBQzFDLE1BQVAsR0FBZ0IsQ0FBakIsQ0FBWCxFQUFoQjs7QUFDQSxRQUFJa0MsTUFBTSxDQUFDbEMsTUFBWCxFQUFtQjtBQUNsQixVQUFNNEMsR0FBRyxHQUFHVixNQUFNLENBQUM3QixNQUFQLEdBQWdCQyxHQUFoQixHQUFzQmdDLEtBQWxDOztBQUNBLFVBQUtPLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsT0FBcEIsQ0FBNEIsUUFBNUIsSUFBd0MsQ0FBeEMsSUFBNkMsQ0FBQ0YsU0FBUyxDQUFDQyxTQUFWLENBQW9CTCxRQUFwQixDQUE2QixNQUE3QixDQUEvQyxJQUF3RkksU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxPQUFwQixDQUE0QixNQUE1QixJQUFzQyxDQUE5SCxJQUFtSUYsU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxPQUFwQixDQUE0QixTQUE1QixJQUF5QyxDQUFoTCxFQUFtTDtBQUNsTCxZQUFJYixNQUFNLENBQUNjLElBQVAsQ0FBWSxJQUFaLEtBQXFCLFNBQXpCLEVBQW9DO0FBQ25DeEYsV0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQnFDLFNBQWhCLENBQTBCK0MsR0FBRyxHQUFHLEdBQWhDO0FBQ0EsU0FGRCxNQUVPO0FBQ05wRixXQUFDLENBQUMsWUFBRCxDQUFELENBQWdCcUMsU0FBaEIsQ0FBMEIrQyxHQUFHLEdBQUcsR0FBaEM7QUFDQTtBQUNELE9BTkQsTUFNTztBQUNOLFlBQUlWLE1BQU0sQ0FBQ2MsSUFBUCxDQUFZLElBQVosS0FBcUIsU0FBekIsRUFBb0M7QUFDbkN4RixXQUFDLENBQUMsWUFBRCxDQUFELENBQWdCcUMsU0FBaEIsQ0FBMEIrQyxHQUFHLEdBQUcsRUFBaEM7QUFDQSxTQUZELE1BRU87QUFDTnBGLFdBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JxQyxTQUFoQixDQUEwQitDLEdBQTFCO0FBQ0E7QUFDRDtBQUNEO0FBQ0Q7QUFDRCxDQXZCRCxFLENBd0JBO0FBRUE7O0FBQ0FwRixDQUFDLENBQUMsWUFBTTtBQUNQQSxHQUFDLENBQUMsWUFBRCxDQUFELENBQWdCaUMsRUFBaEIsQ0FBbUIsT0FBbkIsRUFBNEIsWUFBWTtBQUN2Q3FDLDZFQUFpQixDQUFDLElBQUQsQ0FBakI7O0FBQ0EsUUFBSXRFLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXlGLE9BQVIsQ0FBZ0IsY0FBaEIsRUFBZ0MsQ0FBaEMsQ0FBSixFQUF3QztBQUN2Q3pGLE9BQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IyRCxJQUFoQjtBQUNBLEtBRkQsTUFFTztBQUNOM0QsT0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQnlELE1BQWhCO0FBQ0E7O0FBQ0QsUUFBSXpELENBQUMsQ0FBQyxVQUFELENBQUwsRUFBbUI7QUFDbEJBLE9BQUMsQ0FBQyxVQUFELENBQUQsQ0FBY3dFLFdBQWQsQ0FBMEIsWUFBMUI7QUFDQTtBQUNELEdBVkQ7QUFXQXhFLEdBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCaUMsRUFBN0IsQ0FBZ0MsT0FBaEMsRUFBeUMsWUFBTTtBQUM5Q2pDLEtBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IwRCxPQUFoQixDQUF3QixZQUFNO0FBQzdCWSwrRUFBaUIsQ0FBQyxLQUFELENBQWpCOztBQUNBLFVBQUl0RSxDQUFDLENBQUMsVUFBRCxDQUFMLEVBQW1CO0FBQ2xCQSxTQUFDLENBQUMsVUFBRCxDQUFELENBQWN3RSxXQUFkLENBQTBCLFlBQTFCO0FBQ0E7QUFDRCxLQUxEO0FBTUEsR0FQRDtBQVFBLENBcEJBLENBQUQsQyxDQXFCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0F4RSxDQUFDLENBQUMsWUFBVTtBQUNYLE1BQUksQ0FBQzBGLFNBQVMsQ0FBQ0MsV0FBZixFQUE0QjtBQUFBO0FBQUM7QUFDNUIsVUFBTUMsTUFBTSxHQUFHOUQsUUFBUSxDQUFDK0QsY0FBVCxDQUF3QixRQUF4QixDQUFmO0FBQ0EsVUFBTUMsT0FBTyxHQUFHaEUsUUFBUSxDQUFDK0QsY0FBVCxDQUF3QixTQUF4QixDQUFoQjtBQUVBL0QsY0FBUSxDQUFDaUUsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUNDLFNBQXZDOztBQUVBLGVBQVNBLFNBQVQsQ0FBbUJDLENBQW5CLEVBQXNCO0FBQUU7QUFDdkJMLGNBQU0sQ0FBQ00sS0FBUCxDQUFhQyxTQUFiLEdBQXlCLGVBQWVGLENBQUMsQ0FBQ0csT0FBakIsR0FBMkIsTUFBM0IsR0FBb0NILENBQUMsQ0FBQ0ksT0FBdEMsR0FBZ0QsS0FBekU7QUFDQVAsZUFBTyxDQUFDSSxLQUFSLENBQWNDLFNBQWQsR0FBMEIsZUFBZUYsQ0FBQyxDQUFDRyxPQUFqQixHQUEyQixNQUEzQixHQUFvQ0gsQ0FBQyxDQUFDSSxPQUF0QyxHQUFnRCxLQUExRTtBQUNBOztBQUVELFVBQU1DLE1BQU0sR0FBR3hFLFFBQVEsQ0FBQ3lFLGdCQUFULENBQTBCLGtDQUExQixDQUFmOztBQUNBLFdBQUssSUFBSTVELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcyRCxNQUFNLENBQUM5RCxNQUEzQixFQUFtQ0csQ0FBQyxFQUFwQyxFQUF3QztBQUN2QzJELGNBQU0sQ0FBQzNELENBQUQsQ0FBTixDQUFVb0QsZ0JBQVYsQ0FBMkIsV0FBM0IsRUFBd0MsWUFBWTtBQUNuREgsZ0JBQU0sQ0FBQ1ksU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsWUFBckI7QUFDQSxTQUZEO0FBR0FILGNBQU0sQ0FBQzNELENBQUQsQ0FBTixDQUFVb0QsZ0JBQVYsQ0FBMkIsVUFBM0IsRUFBdUMsWUFBWTtBQUNsREgsZ0JBQU0sQ0FBQ1ksU0FBUCxDQUFpQkUsTUFBakIsQ0FBd0IsWUFBeEI7QUFDQSxTQUZEO0FBR0E7QUFuQjBCO0FBb0IzQjtBQUNELENBdEJBLENBQUQsQyxDQXVCQTtBQUVBOztBQUNBMUcsQ0FBQyxDQUFDLFlBQU07QUFDUEEsR0FBQyxDQUFDZ0MsTUFBRCxDQUFELENBQVUyRSxPQUFWLENBQWtCLFFBQWxCO0FBQ0EsQ0FGQSxDQUFELEMsQ0FHQSwrRDs7Ozs7Ozs7Ozs7O0FDeFNBO0FBQUE7QUFBZSxTQUFTckMsaUJBQVQsQ0FBMkJzQyxJQUEzQixFQUFpQztBQUMvQyxNQUFJQyxjQUFKO0FBQ0EsTUFBTTlHLElBQUksR0FBRytCLFFBQVEsQ0FBQ2dGLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLENBQWI7QUFDQSxNQUFNQyxFQUFFLEdBQUcvRSxNQUFNLENBQUNxRCxTQUFQLENBQWlCQyxTQUFqQixDQUEyQjBCLFdBQTNCLEVBQVg7QUFDQSxNQUFNQyxLQUFLLEdBQUdGLEVBQUUsQ0FBQ3hCLE9BQUgsQ0FBVyxRQUFYLElBQXVCLENBQUMsQ0FBeEIsSUFBNkJ3QixFQUFFLENBQUN4QixPQUFILENBQVcsTUFBWCxJQUFxQixDQUFDLENBQW5ELElBQXdEd0IsRUFBRSxDQUFDeEIsT0FBSCxDQUFXLFdBQVgsSUFBMEIsQ0FBQyxDQUEzQixJQUFnQyxnQkFBZ0J6RCxRQUF0SDtBQUNBLE1BQU1vRixjQUFjLEdBQUdsRixNQUFNLENBQUNtRixVQUFQLEdBQW9CckYsUUFBUSxDQUFDL0IsSUFBVCxDQUFjcUgsV0FBekQ7O0FBQ0EsTUFBSVIsSUFBSixFQUFVO0FBQ1Q3RyxRQUFJLENBQUNtRyxLQUFMLENBQVdtQixZQUFYLEdBQTBCSCxjQUFjLEdBQUcsSUFBM0M7O0FBQ0EsUUFBSUQsS0FBSixFQUFXO0FBQ1ZKLG9CQUFjLEdBQUcsQ0FBQzdFLE1BQU0sQ0FBQ3NGLFdBQXpCO0FBQ0F2SCxVQUFJLENBQUNtRyxLQUFMLENBQVd2QixRQUFYLEdBQXNCLE9BQXRCO0FBQ0E1RSxVQUFJLENBQUNtRyxLQUFMLENBQVdxQixLQUFYLEdBQW1CLE1BQW5CO0FBQ0F4SCxVQUFJLENBQUNtRyxLQUFMLENBQVdwRCxHQUFYLEdBQWlCK0QsY0FBYyxHQUFHLElBQWxDO0FBQ0EsS0FMRCxNQUtPO0FBQ045RyxVQUFJLENBQUNtRyxLQUFMLENBQVdzQixRQUFYLEdBQXNCLFFBQXRCO0FBQ0E7QUFDRCxHQVZELE1BVU8sSUFBSSxDQUFDWixJQUFMLEVBQVc7QUFDakI3RyxRQUFJLENBQUNtRyxLQUFMLENBQVdtQixZQUFYLEdBQTBCLEVBQTFCOztBQUNBLFFBQUlKLEtBQUosRUFBVztBQUNWSixvQkFBYyxHQUFHWSxRQUFRLENBQUMxSCxJQUFJLENBQUNtRyxLQUFMLENBQVdwRCxHQUFYLENBQWU0RSxPQUFmLENBQXVCLFNBQXZCLEVBQWtDLEVBQWxDLENBQUQsQ0FBekI7QUFDQTNILFVBQUksQ0FBQ21HLEtBQUwsQ0FBV3ZCLFFBQVgsR0FBc0IsRUFBdEI7QUFDQTVFLFVBQUksQ0FBQ21HLEtBQUwsQ0FBV3FCLEtBQVgsR0FBbUIsRUFBbkI7QUFDQXhILFVBQUksQ0FBQ21HLEtBQUwsQ0FBV3BELEdBQVgsR0FBaUIsRUFBakI7QUFDQWQsWUFBTSxDQUFDMkYsUUFBUCxDQUFnQixDQUFoQixFQUFtQmQsY0FBbkI7QUFDQSxLQU5ELE1BTU87QUFDTjlHLFVBQUksQ0FBQ21HLEtBQUwsQ0FBV3NCLFFBQVgsR0FBc0IsRUFBdEI7QUFDQTtBQUNEO0FBQ0QsQzs7Ozs7Ozs7Ozs7OztBQzVCRDtBQUNBOztBQUNBOzs7Ozs7O0FBUUMsV0FBVXhILENBQVYsRUFBYTtBQUNiOztBQUVBLFdBQVM0SCxVQUFULENBQW9CdkUsTUFBcEIsRUFBNEI7QUFDM0IsV0FBTyxLQUFLd0UsSUFBTCxDQUFVeEUsTUFBVixLQUFxQnJELENBQUMsQ0FBQzhILE9BQUYsQ0FBVXpFLE1BQVYsRUFBa0JyRCxDQUFDLENBQUMrSCxFQUFGLENBQUs1RSxVQUFMLENBQWdCNkUsUUFBaEIsQ0FBeUJDLFNBQTNDLEtBQXlELENBQXJGO0FBQ0E7O0FBRUQsV0FBU0MsV0FBVCxDQUFxQjdFLE1BQXJCLEVBQTZCO0FBQzVCLFdBQU8sTUFBTXdFLElBQU4sQ0FBV3hFLE1BQVgsS0FBc0JyRCxDQUFDLENBQUM4SCxPQUFGLENBQVV6RSxNQUFWLEVBQWtCckQsQ0FBQyxDQUFDK0gsRUFBRixDQUFLNUUsVUFBTCxDQUFnQjZFLFFBQWhCLENBQXlCRyxVQUEzQyxLQUEwRCxDQUF2RjtBQUNBOztBQUdELFdBQVNDLGVBQVQsQ0FBeUJDLEdBQXpCLEVBQThCO0FBQzdCLFFBQUlBLEdBQUcsS0FBSyxNQUFSLElBQWtCQSxHQUFHLEtBQUssT0FBOUIsRUFBdUMsT0FBT0EsR0FBUDtBQUN2QyxXQUFRQSxHQUFHLEtBQUssTUFBaEI7QUFDQSxHQWZZLENBaUJiOzs7QUFDQSxXQUFTQyxPQUFULENBQWlCQyxJQUFqQixFQUF1QjtBQUN0QixRQUFJQyxLQUFLLEdBQUdELElBQUksQ0FBQ0UsVUFBTCxJQUFtQixFQUEvQjtBQUFBLFFBQ0dDLElBQUksR0FBRyxFQURWO0FBR0EsUUFBSSxDQUFDRixLQUFLLENBQUNoRyxNQUFYLEVBQW1CLE9BQU9rRyxJQUFQO0FBRW5CMUksS0FBQyxDQUFDMEMsSUFBRixDQUFPOEYsS0FBUCxFQUFjLFVBQVU3RixDQUFWLEVBQWEzQixJQUFiLEVBQW1CO0FBQ2hDLFVBQUkySCxRQUFRLEdBQUczSCxJQUFJLENBQUMySCxRQUFMLENBQWNqQixPQUFkLENBQXNCLFlBQXRCLEVBQW9DLFlBQXBDLENBQWY7O0FBQ0EsVUFBSSxhQUFhRyxJQUFiLENBQWtCYyxRQUFsQixDQUFKLEVBQWlDO0FBQ2hDRCxZQUFJLENBQUN0RixFQUFMLEdBQVVzRixJQUFJLENBQUN0RixFQUFMLElBQVcsRUFBckI7QUFDQXNGLFlBQUksQ0FBQ3RGLEVBQUwsQ0FBUXVGLFFBQVEsQ0FBQ2pCLE9BQVQsQ0FBaUIsVUFBakIsRUFBNkIsRUFBN0IsQ0FBUixJQUE0Q1UsZUFBZSxDQUFDcEgsSUFBSSxDQUFDNEgsU0FBTixDQUEzRDtBQUNBLE9BSEQsTUFHTyxJQUFJLGNBQWNmLElBQWQsQ0FBbUJjLFFBQW5CLENBQUosRUFBa0M7QUFDeENELFlBQUksQ0FBQ0csR0FBTCxHQUFXSCxJQUFJLENBQUNHLEdBQUwsSUFBWSxFQUF2QjtBQUNBSCxZQUFJLENBQUNHLEdBQUwsQ0FBU0YsUUFBUSxDQUFDakIsT0FBVCxDQUFpQixXQUFqQixFQUE4QixFQUE5QixDQUFULElBQThDVSxlQUFlLENBQUNwSCxJQUFJLENBQUM0SCxTQUFOLENBQTdEO0FBQ0EsT0FITSxNQUdBLElBQUksVUFBVWYsSUFBVixDQUFlYyxRQUFmLENBQUosRUFBOEI7QUFDcENELFlBQUksQ0FBQ0MsUUFBUSxDQUFDakIsT0FBVCxDQUFpQixPQUFqQixFQUEwQixFQUExQixDQUFELENBQUosR0FBc0NVLGVBQWUsQ0FBQ3BILElBQUksQ0FBQzRILFNBQU4sQ0FBckQ7QUFDQTtBQUNELEtBWEQ7QUFhQSxXQUFPRixJQUFQO0FBQ0E7O0FBRUQsV0FBU3BGLE9BQVQsQ0FBaUJ3RixDQUFqQixFQUFvQjtBQUNuQixTQUFLLElBQUlyRyxDQUFKLEVBQU9zRyxDQUFQLEVBQVVwRyxDQUFDLEdBQUdtRyxDQUFDLENBQUN0RyxNQUFyQixFQUE2QkcsQ0FBN0IsRUFBZ0NGLENBQUMsR0FBR2dGLFFBQVEsQ0FBQ3VCLElBQUksQ0FBQ0MsTUFBTCxLQUFnQnRHLENBQWpCLENBQVosRUFBaUNvRyxDQUFDLEdBQUdELENBQUMsQ0FBQyxFQUFFbkcsQ0FBSCxDQUF0QyxFQUE2Q21HLENBQUMsQ0FBQ25HLENBQUQsQ0FBRCxHQUFPbUcsQ0FBQyxDQUFDckcsQ0FBRCxDQUFyRCxFQUEwRHFHLENBQUMsQ0FBQ3JHLENBQUQsQ0FBRCxHQUFPc0csQ0FBakc7QUFBbUc7QUFBbkc7O0FBQ0EsV0FBT0QsQ0FBUDtBQUNBOztBQUVELFdBQVNsRixPQUFULENBQWlCc0YsRUFBakIsRUFBcUI3RixNQUFyQixFQUE2QjhGLEVBQTdCLEVBQWlDO0FBQ2hDRCxNQUFFLENBQUN4SSxRQUFILENBQVksY0FBYzJDLE1BQTFCLEVBQ0V4QyxHQURGLENBQ00sWUFETixFQUNvQixTQURwQixFQUVFOEMsSUFGRjtBQUlBdUYsTUFBRSxDQUFDRSxHQUFILENBQU8sOEVBQVAsRUFBdUYsWUFBWTtBQUNsR0YsUUFBRSxDQUFDNUcsV0FBSCxDQUFlLGNBQWNlLE1BQTdCO0FBQ0E4RixRQUFFLElBQUlBLEVBQUUsRUFBUjtBQUNBLEtBSEQ7QUFJQTs7QUFFRCxXQUFTRSxhQUFULENBQXVCQyxPQUF2QixFQUFnQ0MsT0FBaEMsRUFBeUNKLEVBQXpDLEVBQTZDO0FBQzVDLFFBQUlLLElBQUksR0FBRyxJQUFYO0FBQUEsUUFDR0MsS0FBSyxHQUFHSCxPQUFPLENBQUM5RyxNQURuQjs7QUFHQSxRQUFJLENBQUNpSCxLQUFMLEVBQVk7QUFDWE4sUUFBRSxJQUFJQSxFQUFFLEVBQVI7QUFDQTtBQUNBOztBQUVELFFBQUlJLE9BQU8sQ0FBQ2pHLE9BQVosRUFBcUJnRyxPQUFPLEdBQUdoRyxPQUFPLENBQUNnRyxPQUFELENBQWpCO0FBQ3JCLFFBQUlDLE9BQU8sQ0FBQ0csT0FBWixFQUFxQkosT0FBTyxHQUFHQSxPQUFPLENBQUNLLE9BQVIsR0FBa0JELE9BQWxCLEVBQVY7QUFFckIxSixLQUFDLENBQUMwQyxJQUFGLENBQU80RyxPQUFQLEVBQWdCLFVBQVUzRyxDQUFWLEVBQWFpSCxDQUFiLEVBQWdCO0FBQy9CLFVBQUlDLE1BQU0sR0FBRzdKLENBQUMsQ0FBQzRKLENBQUQsQ0FBZDs7QUFFQSxlQUFTRSxRQUFULEdBQW9CO0FBQ25CLFlBQUlsQyxVQUFVLENBQUMyQixPQUFPLENBQUNsRyxNQUFULENBQWQsRUFBZ0M7QUFDL0J3RyxnQkFBTSxDQUFDaEosR0FBUCxDQUFXLFlBQVgsRUFBeUIsU0FBekI7QUFDQSxTQUZELE1BRU8sSUFBSXFILFdBQVcsQ0FBQ3FCLE9BQU8sQ0FBQ2xHLE1BQVQsQ0FBZixFQUFpQztBQUN2Q3dHLGdCQUFNLENBQUNoSixHQUFQLENBQVcsWUFBWCxFQUF5QixRQUF6QjtBQUNBOztBQUNENEksYUFBSyxJQUFJLENBQVQ7QUFDQSxZQUFJLENBQUNBLEtBQUQsSUFBVU4sRUFBZCxFQUFrQkEsRUFBRTtBQUNwQjs7QUFFRCxVQUFJbkcsS0FBSyxHQUFHdUcsT0FBTyxDQUFDUSxJQUFSLEdBQWVSLE9BQU8sQ0FBQ3ZHLEtBQXZCLEdBQStCdUcsT0FBTyxDQUFDdkcsS0FBUixHQUFnQkwsQ0FBaEIsR0FBb0I0RyxPQUFPLENBQUNoRyxVQUF2RTtBQUVBc0csWUFBTSxDQUFDRyxJQUFQLEtBQ0NwSixVQUFVLENBQUMsWUFBWTtBQUFFZ0QsZUFBTyxDQUFDaUcsTUFBRCxFQUFTTixPQUFPLENBQUNsRyxNQUFqQixFQUF5QnlHLFFBQXpCLENBQVA7QUFBNEMsT0FBM0QsRUFBNkQ5RyxLQUE3RCxDQURYLEdBRUM4RyxRQUFRLEVBRlQ7QUFHQSxLQWxCRDtBQW1CQTs7QUFFRCxNQUFJRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFVQyxPQUFWLEVBQW1CWCxPQUFuQixFQUE0QjtBQUM1QyxRQUFJWSxJQUFJLEdBQUcsSUFBWDtBQUFBLFFBQ0dDLFFBQVEsR0FBR3BLLENBQUMsQ0FBQ2tLLE9BQUQsQ0FEZjs7QUFHQUMsUUFBSSxDQUFDRSxJQUFMLEdBQVksWUFBWTtBQUN2QkYsVUFBSSxDQUFDRyxNQUFMLEdBQWNGLFFBQVEsQ0FBQ0csSUFBVCxDQUFjaEIsT0FBTyxDQUFDaUIsUUFBdEIsQ0FBZDs7QUFFQSxVQUFJLENBQUNMLElBQUksQ0FBQ0csTUFBTCxDQUFZOUgsTUFBakIsRUFBeUI7QUFDeEIySCxZQUFJLENBQUNHLE1BQUwsR0FBY3RLLENBQUMsQ0FBQywyQkFBMkJvSyxRQUFRLENBQUNLLElBQVQsRUFBM0IsR0FBNkMsWUFBOUMsQ0FBZjtBQUNBTCxnQkFBUSxDQUFDSyxJQUFULENBQWNOLElBQUksQ0FBQ0csTUFBbkI7QUFDQTs7QUFFREgsVUFBSSxDQUFDRyxNQUFMLENBQVkvRixJQUFaO0FBRUE0RixVQUFJLENBQUNPLFFBQUwsR0FBZ0IxSyxDQUFDLENBQUMsUUFBRCxDQUFELENBQ2R5SyxJQURjLENBQ1ROLElBQUksQ0FBQ0csTUFBTCxDQUFZQyxJQUFaLENBQWlCLGNBQWpCLEVBQWlDRSxJQUFqQyxFQURTLEVBRWRFLFNBRmMsQ0FFSlAsUUFGSSxDQUFoQjs7QUFJQSxVQUFJeEMsVUFBVSxDQUFDMkIsT0FBTyxDQUFDbkcsRUFBUixDQUFXQyxNQUFaLENBQWQsRUFBbUM7QUFDbEM4RyxZQUFJLENBQUNPLFFBQUwsQ0FBYzdKLEdBQWQsQ0FBa0IsWUFBbEIsRUFBZ0MsUUFBaEM7QUFDQSxPQUZELE1BRU8sSUFBSXFILFdBQVcsQ0FBQ3FCLE9BQU8sQ0FBQ1YsR0FBUixDQUFZeEYsTUFBYixDQUFmLEVBQXFDO0FBQzNDOEcsWUFBSSxDQUFDTyxRQUFMLENBQWM3SixHQUFkLENBQWtCLFlBQWxCLEVBQWdDLFNBQWhDO0FBQ0E7O0FBRURzSixVQUFJLENBQUNTLFVBQUwsQ0FBZ0JyQixPQUFoQjtBQUVBWSxVQUFJLENBQUNVLFVBQUwsR0FBa0IsSUFBbEI7QUFFQWpLLGdCQUFVLENBQUMsWUFBWTtBQUN0QnVKLFlBQUksQ0FBQ1osT0FBTCxDQUFhdUIsU0FBYixJQUEwQlgsSUFBSSxDQUFDWSxLQUFMLEVBQTFCO0FBQ0EsT0FGUyxFQUVQWixJQUFJLENBQUNaLE9BQUwsQ0FBYXlCLFlBRk4sQ0FBVjtBQUdBLEtBM0JEOztBQTZCQWIsUUFBSSxDQUFDUyxVQUFMLEdBQWtCLFVBQVVyQixPQUFWLEVBQW1CO0FBQ3BDWSxVQUFJLENBQUNaLE9BQUwsR0FBZUEsT0FBZjtBQUNBLEtBRkQ7O0FBSUFZLFFBQUksQ0FBQ2MsWUFBTCxHQUFvQixVQUFVQyxJQUFWLEVBQWdCO0FBQ25DLFVBQUlqRixDQUFDLEdBQUdqRyxDQUFDLENBQUNtTCxLQUFGLENBQVFELElBQUksR0FBRyxNQUFmLENBQVI7QUFDQWQsY0FBUSxDQUFDekQsT0FBVCxDQUFpQlYsQ0FBakIsRUFBb0JrRSxJQUFwQjtBQUNBLGFBQU9sRSxDQUFQO0FBQ0EsS0FKRDs7QUFNQWtFLFFBQUksQ0FBQy9HLEVBQUwsR0FBVSxVQUFVZ0ksS0FBVixFQUFpQmpDLEVBQWpCLEVBQXFCO0FBQzlCaUMsV0FBSyxHQUFHQSxLQUFLLElBQUksQ0FBakI7QUFFQSxVQUFJQyxLQUFLLEdBQUdsQixJQUFJLENBQUNHLE1BQUwsQ0FBWUMsSUFBWixDQUFpQixpQkFBaUIsQ0FBQ2EsS0FBSyxJQUFJLENBQVYsSUFBZSxDQUFoQyxJQUFxQyxHQUF0RCxDQUFaO0FBQUEsVUFDRzdCLE9BQU8sR0FBR3ZKLENBQUMsQ0FBQ3NMLE1BQUYsQ0FBUyxJQUFULEVBQWUsRUFBZixFQUFtQm5CLElBQUksQ0FBQ1osT0FBeEIsRUFBaUM4QixLQUFLLENBQUM3SSxNQUFOLEdBQWU4RixPQUFPLENBQUMrQyxLQUFLLENBQUMsQ0FBRCxDQUFOLENBQXRCLEdBQW1DLEVBQXBFLENBRGI7QUFBQSxVQUVHL0IsT0FGSDtBQUlBK0IsV0FBSyxDQUFDM0ssUUFBTixDQUFlLFNBQWY7QUFFQXlKLFVBQUksQ0FBQ2MsWUFBTCxDQUFrQixrQkFBbEI7QUFDQWIsY0FBUSxDQUFDcEosSUFBVCxDQUFjLGFBQWQsRUFBNkJxSyxLQUFLLENBQUMzQyxJQUFOLENBQVcsSUFBWCxDQUE3QjtBQUVBeUIsVUFBSSxDQUFDTyxRQUFMLENBQ0VELElBREYsQ0FDT1ksS0FBSyxDQUFDWixJQUFOLEVBRFAsRUFFRWMsU0FGRixDQUVZLE9BRlosRUFaOEIsQ0FnQjlCOztBQUNBLFVBQUlwQixJQUFJLENBQUNaLE9BQUwsQ0FBYWlDLElBQWIsSUFBcUIsTUFBekIsRUFBaUM7QUFDaENyQixZQUFJLENBQUNPLFFBQUwsQ0FBY0gsSUFBZCxDQUFtQixpQkFBbkIsRUFDRTFKLEdBREYsQ0FDTTtBQUNKLHFCQUFXLGNBRFA7QUFFSjtBQUNBLCtCQUFxQixvQkFIakI7QUFJSiw0QkFBa0Isb0JBSmQ7QUFLSiwwQkFBZ0Isb0JBTFo7QUFNSix1QkFBYTtBQU5ULFNBRE4sRUFTRTZCLElBVEYsQ0FTTyxZQUFZO0FBQUUxQyxXQUFDLENBQUMsSUFBRCxDQUFELENBQVF1TCxTQUFSO0FBQXNCLFNBVDNDO0FBVUE7O0FBRURqQyxhQUFPLEdBQUdhLElBQUksQ0FBQ08sUUFBTCxDQUNSSCxJQURRLENBQ0gsY0FBY0osSUFBSSxDQUFDWixPQUFMLENBQWFpQyxJQUEzQixHQUFrQyxJQUQvQixFQUVSM0ssR0FGUSxDQUVKLFNBRkksRUFFTyxjQUZQLENBQVY7O0FBSUEsVUFBSStHLFVBQVUsQ0FBQzJCLE9BQU8sQ0FBQ25HLEVBQVIsQ0FBV0MsTUFBWixDQUFkLEVBQW1DO0FBQ2xDaUcsZUFBTyxDQUFDekksR0FBUixDQUFZLFlBQVosRUFBMEIsUUFBMUI7QUFDQSxPQUZELE1BRU8sSUFBSXFILFdBQVcsQ0FBQ3FCLE9BQU8sQ0FBQ25HLEVBQVIsQ0FBV0MsTUFBWixDQUFmLEVBQW9DO0FBQzFDaUcsZUFBTyxDQUFDekksR0FBUixDQUFZLFlBQVosRUFBMEIsU0FBMUI7QUFDQTs7QUFFRHNKLFVBQUksQ0FBQ3NCLFlBQUwsR0FBb0JMLEtBQXBCO0FBRUEvQixtQkFBYSxDQUFDQyxPQUFELEVBQVVDLE9BQU8sQ0FBQ25HLEVBQWxCLEVBQXNCLFlBQVk7QUFDOUMrRyxZQUFJLENBQUNjLFlBQUwsQ0FBa0IsZ0JBQWxCO0FBQ0EsWUFBSTFCLE9BQU8sQ0FBQ25HLEVBQVIsQ0FBVzNDLFFBQWYsRUFBeUI4SSxPQUFPLENBQUNuRyxFQUFSLENBQVczQyxRQUFYO0FBQ3pCLFlBQUkwSSxFQUFKLEVBQVFBLEVBQUUsQ0FBQ2dCLElBQUQsQ0FBRjtBQUNSLE9BSlksQ0FBYjtBQUtBLEtBL0NEOztBQWlEQUEsUUFBSSxDQUFDdEIsR0FBTCxHQUFXLFVBQVVNLEVBQVYsRUFBYztBQUN4QixVQUFJa0MsS0FBSyxHQUFHbEIsSUFBSSxDQUFDRyxNQUFMLENBQVlDLElBQVosQ0FBaUIsaUJBQWlCLENBQUNKLElBQUksQ0FBQ3NCLFlBQUwsSUFBcUIsQ0FBdEIsSUFBMkIsQ0FBNUMsSUFBaUQsR0FBbEUsQ0FBWjtBQUFBLFVBQ0duQyxPQUFPLEdBQUdhLElBQUksQ0FBQ08sUUFBTCxDQUFjSCxJQUFkLENBQW1CLGNBQWNKLElBQUksQ0FBQ1osT0FBTCxDQUFhaUMsSUFBM0IsR0FBa0MsSUFBckQsQ0FEYjtBQUFBLFVBRUdqQyxPQUFPLEdBQUd2SixDQUFDLENBQUNzTCxNQUFGLENBQVMsSUFBVCxFQUFlLEVBQWYsRUFBbUJuQixJQUFJLENBQUNaLE9BQXhCLEVBQWlDOEIsS0FBSyxDQUFDN0ksTUFBTixHQUFlOEYsT0FBTyxDQUFDK0MsS0FBSyxDQUFDLENBQUQsQ0FBTixDQUF0QixHQUFtQyxFQUFwRSxDQUZiO0FBSUFsQixVQUFJLENBQUNjLFlBQUwsQ0FBa0IsbUJBQWxCO0FBRUE1QixtQkFBYSxDQUFDQyxPQUFELEVBQVVDLE9BQU8sQ0FBQ1YsR0FBbEIsRUFBdUIsWUFBWTtBQUMvQ3dDLGFBQUssQ0FBQy9JLFdBQU4sQ0FBa0IsU0FBbEI7QUFDQTZILFlBQUksQ0FBQ2MsWUFBTCxDQUFrQixpQkFBbEI7QUFDQWIsZ0JBQVEsQ0FBQ3NCLFVBQVQsQ0FBb0IsYUFBcEI7QUFDQSxZQUFJbkMsT0FBTyxDQUFDVixHQUFSLENBQVlwSSxRQUFoQixFQUEwQjhJLE9BQU8sQ0FBQ1YsR0FBUixDQUFZcEksUUFBWjtBQUMxQixZQUFJMEksRUFBSixFQUFRQSxFQUFFLENBQUNnQixJQUFELENBQUY7QUFDUixPQU5ZLENBQWI7QUFPQSxLQWREOztBQWdCQUEsUUFBSSxDQUFDWSxLQUFMLEdBQWEsVUFBVUssS0FBVixFQUFpQjtBQUM3QnhLLGdCQUFVLENBQUMsWUFBWTtBQUN0QnVKLFlBQUksQ0FBQ2MsWUFBTCxDQUFrQixPQUFsQjs7QUFFQyxrQkFBU1UsR0FBVCxDQUFhUCxLQUFiLEVBQW9CO0FBQ3BCakIsY0FBSSxDQUFDL0csRUFBTCxDQUFRZ0ksS0FBUixFQUFlLFlBQVk7QUFDMUIsZ0JBQUk1SSxNQUFNLEdBQUcySCxJQUFJLENBQUNHLE1BQUwsQ0FBWXNCLFFBQVosR0FBdUJwSixNQUFwQztBQUVBNEksaUJBQUssSUFBSSxDQUFUOztBQUVBLGdCQUFJLENBQUNqQixJQUFJLENBQUNaLE9BQUwsQ0FBYXNDLElBQWQsSUFBc0JULEtBQUssSUFBSTVJLE1BQW5DLEVBQTJDO0FBQzFDLGtCQUFJMkgsSUFBSSxDQUFDWixPQUFMLENBQWE5SSxRQUFqQixFQUEyQjBKLElBQUksQ0FBQ1osT0FBTCxDQUFhOUksUUFBYjtBQUMzQjBKLGtCQUFJLENBQUNjLFlBQUwsQ0FBa0IsS0FBbEI7QUFDQSxhQUhELE1BR087QUFDTkcsbUJBQUssR0FBR0EsS0FBSyxHQUFHNUksTUFBaEI7QUFFQTJILGtCQUFJLENBQUNVLFVBQUwsR0FBa0JqSyxVQUFVLENBQUMsWUFBWTtBQUN4Q3VKLG9CQUFJLENBQUN0QixHQUFMLENBQVMsWUFBWTtBQUNwQjhDLHFCQUFHLENBQUNQLEtBQUQsQ0FBSDtBQUNBLGlCQUZEO0FBR0EsZUFKMkIsRUFJekJqQixJQUFJLENBQUNaLE9BQUwsQ0FBYXVDLGNBSlksQ0FBNUI7QUFLQTtBQUNELFdBakJEO0FBa0JBLFNBbkJBLEVBbUJDVixLQUFLLElBQUksQ0FuQlYsQ0FBRDtBQW9CQSxPQXZCUyxFQXVCUGpCLElBQUksQ0FBQ1osT0FBTCxDQUFheUIsWUF2Qk4sQ0FBVjtBQXdCQSxLQXpCRDs7QUEyQkFiLFFBQUksQ0FBQzRCLElBQUwsR0FBWSxZQUFZO0FBQ3ZCLFVBQUk1QixJQUFJLENBQUNVLFVBQVQsRUFBcUI7QUFDcEJtQixxQkFBYSxDQUFDN0IsSUFBSSxDQUFDVSxVQUFOLENBQWI7QUFDQVYsWUFBSSxDQUFDVSxVQUFMLEdBQWtCLElBQWxCO0FBQ0E7QUFDRCxLQUxEOztBQU9BVixRQUFJLENBQUNFLElBQUw7QUFDQSxHQS9JRDs7QUFpSkFySyxHQUFDLENBQUMrSCxFQUFGLENBQUs1RSxVQUFMLEdBQWtCLFVBQVU4SSxRQUFWLEVBQW9CQyxJQUFwQixFQUEwQjtBQUMzQyxXQUFPLEtBQUt4SixJQUFMLENBQVUsWUFBWTtBQUM1QixVQUFJeUosS0FBSyxHQUFHbk0sQ0FBQyxDQUFDLElBQUQsQ0FBYjtBQUFBLFVBQ0cwSSxJQUFJLEdBQUd5RCxLQUFLLENBQUN6RCxJQUFOLENBQVcsWUFBWCxDQURWO0FBQUEsVUFFR2EsT0FBTyxHQUFHdkosQ0FBQyxDQUFDc0wsTUFBRixDQUFTLElBQVQsRUFBZSxFQUFmLEVBQW1CdEwsQ0FBQyxDQUFDK0gsRUFBRixDQUFLNUUsVUFBTCxDQUFnQjZFLFFBQW5DLEVBQTZDTSxPQUFPLENBQUMsSUFBRCxDQUFwRCxFQUE0RCxRQUFPMkQsUUFBUCxLQUFtQixRQUFuQixJQUErQkEsUUFBM0YsQ0FGYjs7QUFJQSxVQUFJLENBQUN2RCxJQUFMLEVBQVc7QUFDVnlELGFBQUssQ0FBQ3pELElBQU4sQ0FBVyxZQUFYLEVBQTBCQSxJQUFJLEdBQUcsSUFBSXVCLFVBQUosQ0FBZSxJQUFmLEVBQXFCVixPQUFyQixDQUFqQztBQUNBLE9BRkQsTUFFTyxJQUFJLE9BQU8wQyxRQUFQLElBQW1CLFFBQXZCLEVBQWlDO0FBQ3ZDdkQsWUFBSSxDQUFDdUQsUUFBRCxDQUFKLENBQWVHLEtBQWYsQ0FBcUIxRCxJQUFyQixFQUEyQixHQUFHMkQsTUFBSCxDQUFVSCxJQUFWLENBQTNCO0FBQ0EsT0FGTSxNQUVBO0FBQ054RCxZQUFJLENBQUNrQyxVQUFMLENBQWdCMEIsSUFBaEIsQ0FBcUI1RCxJQUFyQixFQUEyQmEsT0FBM0I7QUFDQTtBQUNELEtBWk0sQ0FBUDtBQWFBLEdBZEQ7O0FBZ0JBdkosR0FBQyxDQUFDK0gsRUFBRixDQUFLNUUsVUFBTCxDQUFnQjZFLFFBQWhCLEdBQTJCO0FBQzFCd0MsWUFBUSxFQUFFLFFBRGdCO0FBRTFCcUIsUUFBSSxFQUFFLEtBRm9CO0FBRzFCQyxrQkFBYyxFQUFFLElBSFU7QUFJMUJkLGdCQUFZLEVBQUUsQ0FKWTtBQUsxQjVILE1BQUUsRUFBRTtBQUNIQyxZQUFNLEVBQUUsZUFETDtBQUVIRSxnQkFBVSxFQUFFLEdBRlQ7QUFHSFAsV0FBSyxFQUFFLEVBSEo7QUFJSCtHLFVBQUksRUFBRSxLQUpIO0FBS0hMLGFBQU8sRUFBRSxLQUxOO0FBTUhwRyxhQUFPLEVBQUUsS0FOTjtBQU9IN0MsY0FBUSxFQUFFLG9CQUFZLENBQUc7QUFQdEIsS0FMc0I7QUFjMUJvSSxPQUFHLEVBQUU7QUFDSnhGLFlBQU0sRUFBRSxPQURKO0FBRUpFLGdCQUFVLEVBQUUsR0FGUjtBQUdKUCxXQUFLLEVBQUUsRUFISDtBQUlKK0csVUFBSSxFQUFFLEtBSkY7QUFLSkwsYUFBTyxFQUFFLEtBTEw7QUFNSnBHLGFBQU8sRUFBRSxLQU5MO0FBT0o3QyxjQUFRLEVBQUUsb0JBQVksQ0FBRztBQVByQixLQWRxQjtBQXVCMUJxSyxhQUFTLEVBQUUsSUF2QmU7QUF3QjFCN0MsYUFBUyxFQUFFLEVBeEJlO0FBeUIxQkUsY0FBVSxFQUFFLENBQUMsT0FBRCxDQXpCYztBQTBCMUIxSCxZQUFRLEVBQUUsb0JBQVksQ0FBRyxDQTFCQztBQTJCMUIrSyxRQUFJLEVBQUU7QUEzQm9CLEdBQTNCO0FBOEJBLENBeFJBLEVBd1JDZSxNQXhSRCxDQUFELEMsQ0EwUkE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFXQSxDQUFDLFVBQVV2TSxDQUFWLEVBQWE7QUFDYixXQUFTd00sUUFBVCxDQUFrQjVDLENBQWxCLEVBQXFCNkMsUUFBckIsRUFBK0JDLEtBQS9CLEVBQXNDQyxLQUF0QyxFQUE2QztBQUM1QyxRQUFJQyxDQUFDLEdBQUdoRCxDQUFDLENBQUNJLElBQUYsR0FBUzdFLEtBQVQsQ0FBZXNILFFBQWYsQ0FBUjtBQUFBLFFBQWtDSSxNQUFNLEdBQUcsRUFBM0M7O0FBQ0EsUUFBSUQsQ0FBQyxDQUFDcEssTUFBTixFQUFjO0FBQ2J4QyxPQUFDLENBQUM0TSxDQUFELENBQUQsQ0FBS2xLLElBQUwsQ0FBVSxVQUFVQyxDQUFWLEVBQWFtSyxJQUFiLEVBQW1CO0FBQzVCRCxjQUFNLElBQUksa0JBQWtCSCxLQUFsQixJQUEyQi9KLENBQUMsR0FBRyxDQUEvQixJQUFvQyxJQUFwQyxHQUEyQ21LLElBQTNDLEdBQWtELFNBQWxELEdBQThESCxLQUF4RTtBQUNBLE9BRkQ7QUFHQS9DLE9BQUMsQ0FBQ21ELEtBQUYsR0FBVUMsTUFBVixDQUFpQkgsTUFBakI7QUFDQTtBQUNEOztBQUVELE1BQUlJLE9BQU8sR0FBRztBQUNiNUMsUUFBSSxFQUFFLGdCQUFZO0FBRWpCLGFBQU8sS0FBSzNILElBQUwsQ0FBVSxZQUFZO0FBQzVCOEosZ0JBQVEsQ0FBQ3hNLENBQUMsQ0FBQyxJQUFELENBQUYsRUFBVSxFQUFWLEVBQWMsTUFBZCxFQUFzQixFQUF0QixDQUFSO0FBQ0EsT0FGTSxDQUFQO0FBSUEsS0FQWTtBQVNia04sU0FBSyxFQUFFLGlCQUFZO0FBRWxCLGFBQU8sS0FBS3hLLElBQUwsQ0FBVSxZQUFZO0FBQzVCOEosZ0JBQVEsQ0FBQ3hNLENBQUMsQ0FBQyxJQUFELENBQUYsRUFBVSxHQUFWLEVBQWUsTUFBZixFQUF1QixHQUF2QixDQUFSO0FBQ0EsT0FGTSxDQUFQO0FBSUEsS0FmWTtBQWlCYm1OLFNBQUssRUFBRSxpQkFBWTtBQUVsQixhQUFPLEtBQUt6SyxJQUFMLENBQVUsWUFBWTtBQUM1QixZQUFJMEssQ0FBQyxHQUFHLGtDQUFSLENBRDRCLENBRTVCO0FBQ0E7QUFDQTtBQUNBOztBQUNBWixnQkFBUSxDQUFDeE0sQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEwsUUFBUixDQUFpQixJQUFqQixFQUF1QnlCLFdBQXZCLENBQW1DRCxDQUFuQyxFQUFzQ0UsR0FBdEMsRUFBRCxFQUE4Q0YsQ0FBOUMsRUFBaUQsTUFBakQsRUFBeUQsRUFBekQsQ0FBUjtBQUNBLE9BUE0sQ0FBUDtBQVNBO0FBNUJZLEdBQWQ7O0FBK0JBcE4sR0FBQyxDQUFDK0gsRUFBRixDQUFLd0QsU0FBTCxHQUFpQixVQUFVZ0MsTUFBVixFQUFrQjtBQUNsQztBQUNBLFFBQUlBLE1BQU0sSUFBSU4sT0FBTyxDQUFDTSxNQUFELENBQXJCLEVBQStCO0FBQzlCLGFBQU9OLE9BQU8sQ0FBQ00sTUFBRCxDQUFQLENBQWdCbkIsS0FBaEIsQ0FBc0IsSUFBdEIsRUFBNEIsR0FBR29CLEtBQUgsQ0FBU2xCLElBQVQsQ0FBY21CLFNBQWQsRUFBeUIsQ0FBekIsQ0FBNUIsQ0FBUDtBQUNBLEtBRkQsTUFFTyxJQUFJRixNQUFNLEtBQUssU0FBWCxJQUF3QixDQUFDQSxNQUE3QixFQUFxQztBQUMzQyxhQUFPTixPQUFPLENBQUM1QyxJQUFSLENBQWErQixLQUFiLENBQW1CLElBQW5CLEVBQXlCLEdBQUdvQixLQUFILENBQVNsQixJQUFULENBQWNtQixTQUFkLEVBQXlCLENBQXpCLENBQXpCLENBQVAsQ0FEMkMsQ0FDbUI7QUFDOUQ7O0FBQ0R6TixLQUFDLENBQUMwTixLQUFGLENBQVEsWUFBWUgsTUFBWixHQUFxQixxQ0FBN0I7QUFDQSxXQUFPLElBQVA7QUFDQSxHQVREO0FBV0EsQ0FyREQsRUFxREdoQixNQXJESCxFLENBdURBOztBQUNBOzs7QUFDQSxDQUFDLFVBQVUzQyxDQUFWLEVBQWE7QUFBRSxVQUE0QytELGlDQUFPLENBQUMsMkNBQUQsQ0FBRCxvQ0FBYS9ELENBQWI7QUFBQTtBQUFBO0FBQUEsb0dBQWxELEdBQW9FLFNBQXBFO0FBQW9SLENBQW5TLENBQW9TLFVBQVVBLENBQVYsRUFBYTtBQUFFOztBQUFjLE1BQUkzRCxDQUFDLEdBQUcsU0FBUjtBQUFBLE1BQW1CMkgsQ0FBQyxHQUFHO0FBQUV0TixZQUFRLEVBQUUsR0FBWjtBQUFpQkMsV0FBTyxFQUFFLEdBQTFCO0FBQStCQyxVQUFNLEVBQUUsT0FBdkM7QUFBZ0RrSixXQUFPLEVBQUUsQ0FBQyxDQUExRDtBQUE2RGpKLFlBQVEsRUFBRW1KLENBQUMsQ0FBQ2lFO0FBQXpFLEdBQXZCO0FBQUEsTUFBd0dqQixDQUFDLEdBQUcsWUFBWTtBQUFFLFFBQUlBLENBQUMsR0FBRyxXQUFVQSxFQUFWLEVBQWE5RCxDQUFiLEVBQWdCO0FBQUUsVUFBSW5HLENBQUMsR0FBRyxJQUFSO0FBQUEsVUFBY3lLLENBQUMsR0FBR3hELENBQUMsQ0FBQzBCLE1BQUYsQ0FBU3NDLENBQVQsRUFBWTlFLENBQVosQ0FBbEI7QUFBa0NuRyxPQUFDLENBQUNtTCxJQUFGLEdBQVNsRSxDQUFDLENBQUNnRCxFQUFELENBQVYsRUFBZWpLLENBQUMsQ0FBQ21MLElBQUYsQ0FBT0MsRUFBUCxDQUFVLEtBQVYsTUFBcUJwTCxDQUFDLENBQUM0RyxPQUFGLEdBQVk2RCxDQUFaLEVBQWV6SyxDQUFDLENBQUNxTCxNQUFGLEdBQVdyTCxDQUFDLENBQUNtTCxJQUFGLENBQU92RCxJQUFQLENBQVksTUFBWixDQUExQixFQUErQzVILENBQUMsQ0FBQ3NMLGFBQUYsR0FBa0JiLENBQUMsQ0FBQzlNLFFBQUYsR0FBYThNLENBQUMsQ0FBQzdNLE9BQUYsR0FBWW9DLENBQUMsQ0FBQ3FMLE1BQUYsQ0FBU3hMLE1BQW5HLEVBQTJHRyxDQUFDLENBQUNyQyxRQUFGLEdBQWE4TSxDQUFDLENBQUM5TSxRQUFGLEdBQWFxQyxDQUFDLENBQUNzTCxhQUF2SSxFQUFzSnRMLENBQUMsQ0FBQ3FMLE1BQUYsQ0FBU3RMLElBQVQsQ0FBYyxVQUFVa0gsQ0FBVixFQUFhM0QsQ0FBYixFQUFnQjtBQUFFLFlBQUkySCxDQUFDLEdBQUczSCxDQUFDLENBQUNpSSxjQUFGLEVBQVI7QUFBNEJqSSxTQUFDLENBQUNrSSxPQUFGLEdBQVlQLENBQVosRUFBZTNILENBQUMsQ0FBQ2pELEtBQUYsR0FBVW9LLENBQUMsQ0FBQzdNLE9BQUYsR0FBWXFKLENBQVosR0FBZ0JqSCxDQUFDLENBQUNzTCxhQUEzQyxFQUEwRGhJLENBQUMsQ0FBQ0MsS0FBRixDQUFRa0ksZUFBUixHQUEwQixDQUFDUixDQUFELEVBQUlBLENBQUosRUFBT1MsSUFBUCxDQUFZLEdBQVosQ0FBcEYsRUFBc0dwSSxDQUFDLENBQUNDLEtBQUYsQ0FBUW9JLGdCQUFSLEdBQTJCVixDQUFqSTtBQUFxSSxPQUFqTSxDQUF0SixFQUEwVmpMLENBQUMsQ0FBQ21MLElBQUYsQ0FBTzlNLElBQVAsQ0FBWSxPQUFaLEVBQXFCLFVBQVU0SSxDQUFWLEVBQWFnRSxDQUFiLEVBQWdCO0FBQUUsZUFBTyxDQUFDQSxDQUFELEVBQUkzSCxDQUFDLEdBQUcsY0FBUixFQUF3Qm9JLElBQXhCLENBQTZCLEdBQTdCLENBQVA7QUFBMkMsT0FBbEYsQ0FBL1csQ0FBZjtBQUFxZCxLQUFqaEI7O0FBQW1oQixXQUFPekIsQ0FBQyxDQUFDMkIsU0FBRixDQUFZQyxNQUFaLEdBQXFCLFVBQVV2SSxDQUFWLEVBQWEySCxDQUFiLEVBQWdCO0FBQUUsYUFBTyxJQUFJaEUsQ0FBQyxDQUFDcEosTUFBRixDQUFTb04sQ0FBVCxFQUFZM0gsQ0FBWixFQUFlQSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCLENBQXhCLENBQVg7QUFBd0MsS0FBL0UsRUFBaUYyRyxDQUFDLENBQUMyQixTQUFGLENBQVlFLFFBQVosR0FBdUIsVUFBVTdFLENBQVYsRUFBYTtBQUFFLFVBQUkzRCxDQUFDLEdBQUcsSUFBUjtBQUFBLFVBQWMySCxDQUFDLEdBQUczSCxDQUFDLENBQUNzRCxPQUFwQjtBQUFBLFVBQTZCcUQsQ0FBQyxHQUFHM0csQ0FBQyxDQUFDM0YsUUFBbkM7QUFBNkMyRixPQUFDLENBQUMrSCxNQUFGLENBQVN0TCxJQUFULENBQWMsVUFBVW9HLENBQVYsRUFBYW5HLENBQWIsRUFBZ0I7QUFBRSxZQUFJeUssQ0FBQyxHQUFHekssQ0FBQyxDQUFDdUQsS0FBVjtBQUFpQixZQUFJLE1BQU0wRCxDQUFWLEVBQWF3RCxDQUFDLENBQUNrQixnQkFBRixHQUFxQixDQUFyQixDQUFiLEtBQTBDLElBQUksTUFBTTFFLENBQVYsRUFBYXdELENBQUMsQ0FBQ2tCLGdCQUFGLEdBQXFCM0wsQ0FBQyxDQUFDd0wsT0FBRixHQUFZLElBQWpDLENBQWIsS0FBeUQsSUFBSXZFLENBQUMsSUFBSWpILENBQUMsQ0FBQ0ssS0FBUCxJQUFnQjRHLENBQUMsSUFBSWdELENBQUMsR0FBR2pLLENBQUMsQ0FBQ0ssS0FBL0IsRUFBc0M7QUFBRSxjQUFJMEwsQ0FBQyxHQUFHLENBQUM5RSxDQUFDLEdBQUdqSCxDQUFDLENBQUNLLEtBQVAsSUFBZ0I0SixDQUF4QjtBQUEyQlEsV0FBQyxDQUFDa0IsZ0JBQUYsR0FBcUJySSxDQUFDLENBQUN1SSxNQUFGLENBQVNFLENBQVQsRUFBWWQsQ0FBQyxDQUFDcE4sTUFBZCxJQUF3Qm1DLENBQUMsQ0FBQ3dMLE9BQTFCLElBQXFDUCxDQUFDLENBQUNsRSxPQUFGLEdBQVksQ0FBQyxDQUFiLEdBQWlCLENBQXRELElBQTJELElBQWhGO0FBQXVGO0FBQUUsT0FBaFQ7QUFBb1QsS0FBeGQsRUFBMGRrRCxDQUFDLENBQUMyQixTQUFGLENBQVkzSyxPQUFaLEdBQXNCLFlBQVk7QUFBRSxVQUFJZ0ssQ0FBQyxHQUFHLElBQVI7QUFBY0EsT0FBQyxDQUFDRSxJQUFGLENBQU85TSxJQUFQLENBQVksT0FBWixFQUFxQixVQUFVNEksQ0FBVixFQUFhZ0UsQ0FBYixFQUFnQjtBQUFFLGVBQU8sQ0FBQ0EsQ0FBRCxFQUFJM0gsQ0FBQyxHQUFHLFlBQVIsRUFBc0JvSSxJQUF0QixDQUEyQixHQUEzQixDQUFQO0FBQXlDLE9BQWhGLEdBQW1GekUsQ0FBQyxDQUFDO0FBQUVySCxXQUFHLEVBQUU7QUFBUCxPQUFELENBQUQsQ0FBY3FCLE9BQWQsQ0FBc0I7QUFBRXJCLFdBQUcsRUFBRTtBQUFQLE9BQXRCLEVBQWtDO0FBQUUvQixjQUFNLEVBQUUsUUFBVjtBQUFvQkYsZ0JBQVEsRUFBRXNOLENBQUMsQ0FBQ0ssYUFBaEM7QUFBK0NVLFlBQUksRUFBRSxjQUFVL0UsQ0FBVixFQUFhM0QsQ0FBYixFQUFnQjtBQUFFMkgsV0FBQyxDQUFDYSxRQUFGLENBQVduQyxJQUFYLENBQWdCc0IsQ0FBaEIsRUFBbUJoRSxDQUFDLEdBQUczRCxDQUFDLENBQUNxSCxHQUF6QjtBQUFnQyxTQUF2RztBQUF5R3hELGdCQUFRLEVBQUUsb0JBQVk7QUFBRThELFdBQUMsQ0FBQ3JFLE9BQUYsQ0FBVTlJLFFBQVYsQ0FBbUI2TCxJQUFuQixDQUF3QixJQUF4QixHQUErQnNCLENBQUMsQ0FBQ0UsSUFBRixDQUFPOU0sSUFBUCxDQUFZLE9BQVosRUFBcUIsVUFBVTRJLENBQVYsRUFBYWdFLENBQWIsRUFBZ0I7QUFBRSxtQkFBT0EsQ0FBQyxDQUFDbEcsT0FBRixDQUFVekIsQ0FBQyxHQUFHLFlBQWQsRUFBNEIsRUFBNUIsQ0FBUDtBQUF5QyxXQUFoRixDQUEvQjtBQUFtSDtBQUFwUCxPQUFsQyxDQUFuRjtBQUErVyxLQUEzM0IsRUFBNjNCMkcsQ0FBcDRCO0FBQXc0QixHQUF6NkMsRUFBNUc7O0FBQXloRGhELEdBQUMsQ0FBQzdCLEVBQUYsQ0FBSzlCLENBQUwsSUFBVSxVQUFVMkgsQ0FBVixFQUFhOUUsQ0FBYixFQUFnQjtBQUFFLFdBQU8sS0FBS3BHLElBQUwsQ0FBVSxZQUFZO0FBQUUsVUFBSUMsQ0FBQyxHQUFHaUgsQ0FBQyxDQUFDbEIsSUFBRixDQUFPLElBQVAsRUFBYXpDLENBQWIsQ0FBUjtBQUF5QnRELE9BQUMsSUFBSSxLQUFLaUwsQ0FBTCxLQUFXQSxDQUFoQixJQUFxQmpMLENBQUMsQ0FBQ2lMLENBQUQsQ0FBdEIsR0FBNEJqTCxDQUFDLENBQUNpTCxDQUFELENBQUQsQ0FBSzlFLENBQUwsQ0FBNUIsR0FBc0NjLENBQUMsQ0FBQ2xCLElBQUYsQ0FBTyxJQUFQLEVBQWF6QyxDQUFiLEVBQWdCLElBQUkyRyxDQUFKLENBQU0sSUFBTixFQUFZZ0IsQ0FBWixDQUFoQixDQUF0QztBQUF3RSxLQUF6SCxDQUFQO0FBQW9JLEdBQWhLO0FBQW1LLENBQTcvRCxDQUFEO0FBQ0EsbUI7Ozs7Ozs7Ozs7Ozs7QUMzV0E7O0FBQ0E7O0FBRUEsQ0FBQyxVQUFTM0gsQ0FBVCxFQUFXMkgsQ0FBWCxFQUFhaEUsQ0FBYixFQUFlO0FBQUMsV0FBU2QsQ0FBVCxDQUFXN0MsQ0FBWCxFQUFhMkgsQ0FBYixFQUFlO0FBQUMsV0FBTyxRQUFPM0gsQ0FBUCxNQUFXMkgsQ0FBbEI7QUFBb0I7O0FBQUEsV0FBU2MsQ0FBVCxHQUFZO0FBQUMsUUFBSXpJLENBQUosRUFBTTJILENBQU4sRUFBUWhFLENBQVIsRUFBVThFLENBQVYsRUFBWTlCLENBQVosRUFBY2pLLENBQWQsRUFBZ0J5SyxDQUFoQjs7QUFBa0IsU0FBSSxJQUFJd0IsQ0FBUixJQUFhQyxDQUFiO0FBQWUsVUFBR0EsQ0FBQyxDQUFDQyxjQUFGLENBQWlCRixDQUFqQixDQUFILEVBQXVCO0FBQUMsWUFBRzNJLENBQUMsR0FBQyxFQUFGLEVBQUsySCxDQUFDLEdBQUNpQixDQUFDLENBQUNELENBQUQsQ0FBUixFQUFZaEIsQ0FBQyxDQUFDMUMsSUFBRixLQUFTakYsQ0FBQyxDQUFDOEksSUFBRixDQUFPbkIsQ0FBQyxDQUFDMUMsSUFBRixDQUFPbEUsV0FBUCxFQUFQLEdBQTZCNEcsQ0FBQyxDQUFDckUsT0FBRixJQUFXcUUsQ0FBQyxDQUFDckUsT0FBRixDQUFVeUYsT0FBckIsSUFBOEJwQixDQUFDLENBQUNyRSxPQUFGLENBQVV5RixPQUFWLENBQWtCeE0sTUFBdEYsQ0FBZixFQUE2RyxLQUFJb0gsQ0FBQyxHQUFDLENBQU4sRUFBUUEsQ0FBQyxHQUFDZ0UsQ0FBQyxDQUFDckUsT0FBRixDQUFVeUYsT0FBVixDQUFrQnhNLE1BQTVCLEVBQW1Db0gsQ0FBQyxFQUFwQztBQUF1QzNELFdBQUMsQ0FBQzhJLElBQUYsQ0FBT25CLENBQUMsQ0FBQ3JFLE9BQUYsQ0FBVXlGLE9BQVYsQ0FBa0JwRixDQUFsQixFQUFxQjVDLFdBQXJCLEVBQVA7QUFBdkM7O0FBQWtGLGFBQUkwSCxDQUFDLEdBQUM1RixDQUFDLENBQUM4RSxDQUFDLENBQUM3RixFQUFILEVBQU0sVUFBTixDQUFELEdBQW1CNkYsQ0FBQyxDQUFDN0YsRUFBRixFQUFuQixHQUEwQjZGLENBQUMsQ0FBQzdGLEVBQTlCLEVBQWlDNkUsQ0FBQyxHQUFDLENBQXZDLEVBQXlDQSxDQUFDLEdBQUMzRyxDQUFDLENBQUN6RCxNQUE3QyxFQUFvRG9LLENBQUMsRUFBckQ7QUFBd0RqSyxXQUFDLEdBQUNzRCxDQUFDLENBQUMyRyxDQUFELENBQUgsRUFBT1EsQ0FBQyxHQUFDekssQ0FBQyxDQUFDd0MsS0FBRixDQUFRLEdBQVIsQ0FBVCxFQUFzQixNQUFJaUksQ0FBQyxDQUFDNUssTUFBTixHQUFha0QsU0FBUyxDQUFDMEgsQ0FBQyxDQUFDLENBQUQsQ0FBRixDQUFULEdBQWdCc0IsQ0FBN0IsSUFBZ0MsQ0FBQ2hKLFNBQVMsQ0FBQzBILENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBVixJQUFrQjFILFNBQVMsQ0FBQzBILENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBVCxZQUEwQjZCLE9BQTVDLEtBQXNEdkosU0FBUyxDQUFDMEgsQ0FBQyxDQUFDLENBQUQsQ0FBRixDQUFULEdBQWdCLElBQUk2QixPQUFKLENBQVl2SixTQUFTLENBQUMwSCxDQUFDLENBQUMsQ0FBRCxDQUFGLENBQXJCLENBQXRFLEdBQW9HMUgsU0FBUyxDQUFDMEgsQ0FBQyxDQUFDLENBQUQsQ0FBRixDQUFULENBQWdCQSxDQUFDLENBQUMsQ0FBRCxDQUFqQixJQUFzQnNCLENBQTFKLENBQXRCLEVBQW1MUSxDQUFDLENBQUNILElBQUYsQ0FBTyxDQUFDTCxDQUFDLEdBQUMsRUFBRCxHQUFJLEtBQU4sSUFBYXRCLENBQUMsQ0FBQ2lCLElBQUYsQ0FBTyxHQUFQLENBQXBCLENBQW5MO0FBQXhEO0FBQTRRO0FBQWxmO0FBQW1mOztBQUFBLFdBQVN6QixDQUFULENBQVczRyxDQUFYLEVBQWE7QUFBQyxRQUFJMkgsQ0FBQyxHQUFDdUIsQ0FBQyxDQUFDQyxTQUFSO0FBQUEsUUFBa0J4RixDQUFDLEdBQUNsRSxTQUFTLENBQUMySixPQUFWLENBQWtCQyxXQUFsQixJQUErQixFQUFuRDs7QUFBc0QsUUFBR0MsQ0FBQyxLQUFHM0IsQ0FBQyxHQUFDQSxDQUFDLENBQUM0QixPQUFQLENBQUQsRUFBaUI5SixTQUFTLENBQUMySixPQUFWLENBQWtCSSxhQUF0QyxFQUFvRDtBQUFDLFVBQUkzRyxDQUFDLEdBQUMsSUFBSTRHLE1BQUosQ0FBVyxZQUFVOUYsQ0FBVixHQUFZLGNBQXZCLENBQU47QUFBNkNnRSxPQUFDLEdBQUNBLENBQUMsQ0FBQ2xHLE9BQUYsQ0FBVW9CLENBQVYsRUFBWSxPQUFLYyxDQUFMLEdBQU8sTUFBbkIsQ0FBRjtBQUE2Qjs7QUFBQWxFLGFBQVMsQ0FBQzJKLE9BQVYsQ0FBa0JNLGFBQWxCLEtBQWtDL0IsQ0FBQyxJQUFFLE1BQUloRSxDQUFKLEdBQU0zRCxDQUFDLENBQUNvSSxJQUFGLENBQU8sTUFBSXpFLENBQVgsQ0FBVCxFQUF1QjJGLENBQUMsR0FBQ0osQ0FBQyxDQUFDQyxTQUFGLENBQVlJLE9BQVosR0FBb0I1QixDQUFyQixHQUF1QnVCLENBQUMsQ0FBQ0MsU0FBRixHQUFZeEIsQ0FBN0Y7QUFBZ0c7O0FBQUEsV0FBU2pMLENBQVQsR0FBWTtBQUFDLFdBQU0sY0FBWSxPQUFPaUwsQ0FBQyxDQUFDZ0MsYUFBckIsR0FBbUNoQyxDQUFDLENBQUNnQyxhQUFGLENBQWdCbkMsU0FBUyxDQUFDLENBQUQsQ0FBekIsQ0FBbkMsR0FBaUU4QixDQUFDLEdBQUMzQixDQUFDLENBQUNpQyxlQUFGLENBQWtCdkQsSUFBbEIsQ0FBdUJzQixDQUF2QixFQUF5Qiw0QkFBekIsRUFBc0RILFNBQVMsQ0FBQyxDQUFELENBQS9ELENBQUQsR0FBcUVHLENBQUMsQ0FBQ2dDLGFBQUYsQ0FBZ0J4RCxLQUFoQixDQUFzQndCLENBQXRCLEVBQXdCSCxTQUF4QixDQUE3STtBQUFnTDs7QUFBQSxXQUFTTCxDQUFULEdBQVk7QUFBQyxRQUFJbkgsQ0FBQyxHQUFDMkgsQ0FBQyxDQUFDN04sSUFBUjtBQUFhLFdBQU9rRyxDQUFDLEtBQUdBLENBQUMsR0FBQ3RELENBQUMsQ0FBQzRNLENBQUMsR0FBQyxLQUFELEdBQU8sTUFBVCxDQUFILEVBQW9CdEosQ0FBQyxDQUFDNkosSUFBRixHQUFPLENBQUMsQ0FBL0IsQ0FBRCxFQUFtQzdKLENBQTFDO0FBQTRDOztBQUFBLFdBQVMySSxDQUFULENBQVczSSxDQUFYLEVBQWEyRCxDQUFiLEVBQWVkLENBQWYsRUFBaUI0RixDQUFqQixFQUFtQjtBQUFDLFFBQUk5QixDQUFKO0FBQUEsUUFBTWdDLENBQU47QUFBQSxRQUFRTSxDQUFSO0FBQUEsUUFBVUwsQ0FBVjtBQUFBLFFBQVlrQixDQUFDLEdBQUMsV0FBZDtBQUFBLFFBQTBCUixDQUFDLEdBQUM1TSxDQUFDLENBQUMsS0FBRCxDQUE3QjtBQUFBLFFBQXFDcU4sQ0FBQyxHQUFDNUMsQ0FBQyxFQUF4QztBQUEyQyxRQUFHM0YsUUFBUSxDQUFDcUIsQ0FBRCxFQUFHLEVBQUgsQ0FBWCxFQUFrQixPQUFLQSxDQUFDLEVBQU47QUFBVW9HLE9BQUMsR0FBQ3ZNLENBQUMsQ0FBQyxLQUFELENBQUgsRUFBV3VNLENBQUMsQ0FBQ2UsRUFBRixHQUFLdkIsQ0FBQyxHQUFDQSxDQUFDLENBQUM1RixDQUFELENBQUYsR0FBTWlILENBQUMsSUFBRWpILENBQUMsR0FBQyxDQUFKLENBQXhCLEVBQStCeUcsQ0FBQyxDQUFDVyxXQUFGLENBQWNoQixDQUFkLENBQS9CO0FBQVY7QUFBMEQsV0FBT3RDLENBQUMsR0FBQ2pLLENBQUMsQ0FBQyxPQUFELENBQUgsRUFBYWlLLENBQUMsQ0FBQ3BCLElBQUYsR0FBTyxVQUFwQixFQUErQm9CLENBQUMsQ0FBQ3FELEVBQUYsR0FBSyxNQUFJRixDQUF4QyxFQUEwQyxDQUFDQyxDQUFDLENBQUNGLElBQUYsR0FBT0UsQ0FBUCxHQUFTVCxDQUFWLEVBQWFXLFdBQWIsQ0FBeUJ0RCxDQUF6QixDQUExQyxFQUFzRW9ELENBQUMsQ0FBQ0UsV0FBRixDQUFjWCxDQUFkLENBQXRFLEVBQXVGM0MsQ0FBQyxDQUFDdUQsVUFBRixHQUFhdkQsQ0FBQyxDQUFDdUQsVUFBRixDQUFhQyxPQUFiLEdBQXFCbkssQ0FBbEMsR0FBb0MyRyxDQUFDLENBQUNzRCxXQUFGLENBQWN0QyxDQUFDLENBQUN5QyxjQUFGLENBQWlCcEssQ0FBakIsQ0FBZCxDQUEzSCxFQUE4SnNKLENBQUMsQ0FBQ1UsRUFBRixHQUFLRixDQUFuSyxFQUFxS0MsQ0FBQyxDQUFDRixJQUFGLEtBQVNFLENBQUMsQ0FBQzlKLEtBQUYsQ0FBUW9LLFVBQVIsR0FBbUIsRUFBbkIsRUFBc0JOLENBQUMsQ0FBQzlKLEtBQUYsQ0FBUXNCLFFBQVIsR0FBaUIsUUFBdkMsRUFBZ0RxSCxDQUFDLEdBQUNNLENBQUMsQ0FBQ2pKLEtBQUYsQ0FBUXNCLFFBQTFELEVBQW1FMkgsQ0FBQyxDQUFDakosS0FBRixDQUFRc0IsUUFBUixHQUFpQixRQUFwRixFQUE2RjJILENBQUMsQ0FBQ2UsV0FBRixDQUFjRixDQUFkLENBQXRHLENBQXJLLEVBQTZScEIsQ0FBQyxHQUFDaEYsQ0FBQyxDQUFDMkYsQ0FBRCxFQUFHdEosQ0FBSCxDQUFoUyxFQUFzUytKLENBQUMsQ0FBQ0YsSUFBRixJQUFRRSxDQUFDLENBQUNPLFVBQUYsQ0FBYUMsV0FBYixDQUF5QlIsQ0FBekIsR0FBNEJiLENBQUMsQ0FBQ2pKLEtBQUYsQ0FBUXNCLFFBQVIsR0FBaUJxSCxDQUE3QyxFQUErQ00sQ0FBQyxDQUFDc0IsWUFBekQsSUFBdUVsQixDQUFDLENBQUNnQixVQUFGLENBQWFDLFdBQWIsQ0FBeUJqQixDQUF6QixDQUE3VyxFQUF5WSxDQUFDLENBQUNYLENBQWxaO0FBQW9aOztBQUFBLE1BQUlNLENBQUMsR0FBQyxFQUFOO0FBQUEsTUFBU0wsQ0FBQyxHQUFDLEVBQVg7QUFBQSxNQUFja0IsQ0FBQyxHQUFDO0FBQUNXLFlBQVEsRUFBQyxPQUFWO0FBQWtCckIsV0FBTyxFQUFDO0FBQUNDLGlCQUFXLEVBQUMsRUFBYjtBQUFnQkssbUJBQWEsRUFBQyxDQUFDLENBQS9CO0FBQWlDRixtQkFBYSxFQUFDLENBQUMsQ0FBaEQ7QUFBa0RrQixpQkFBVyxFQUFDLENBQUM7QUFBL0QsS0FBMUI7QUFBNEZDLE1BQUUsRUFBQyxFQUEvRjtBQUFrRzNPLE1BQUUsRUFBQyxZQUFTZ0UsQ0FBVCxFQUFXMkgsQ0FBWCxFQUFhO0FBQUMsVUFBSWhFLENBQUMsR0FBQyxJQUFOO0FBQVdoSixnQkFBVSxDQUFDLFlBQVU7QUFBQ2dOLFNBQUMsQ0FBQ2hFLENBQUMsQ0FBQzNELENBQUQsQ0FBRixDQUFEO0FBQVEsT0FBcEIsRUFBcUIsQ0FBckIsQ0FBVjtBQUFrQyxLQUFoSztBQUFpSzRLLFdBQU8sRUFBQyxpQkFBUzVLLENBQVQsRUFBVzJILENBQVgsRUFBYWhFLENBQWIsRUFBZTtBQUFDaUYsT0FBQyxDQUFDRSxJQUFGLENBQU87QUFBQzdELFlBQUksRUFBQ2pGLENBQU47QUFBUThCLFVBQUUsRUFBQzZGLENBQVg7QUFBYXJFLGVBQU8sRUFBQ0s7QUFBckIsT0FBUDtBQUFnQyxLQUF6TjtBQUEwTmtILGdCQUFZLEVBQUMsc0JBQVM3SyxDQUFULEVBQVc7QUFBQzRJLE9BQUMsQ0FBQ0UsSUFBRixDQUFPO0FBQUM3RCxZQUFJLEVBQUMsSUFBTjtBQUFXbkQsVUFBRSxFQUFDOUI7QUFBZCxPQUFQO0FBQXlCO0FBQTVRLEdBQWhCO0FBQUEsTUFBOFJQLFNBQVMsR0FBQyxxQkFBVSxDQUFFLENBQXBUOztBQUFxVEEsV0FBUyxDQUFDNkksU0FBVixHQUFvQndCLENBQXBCLEVBQXNCckssU0FBUyxHQUFDLElBQUlBLFNBQUosRUFBaEM7QUFBOEMsTUFBSXlKLENBQUMsR0FBQ3ZCLENBQUMsQ0FBQ21ELGVBQVI7QUFBQSxNQUF3QnhCLENBQUMsR0FBQyxVQUFRSixDQUFDLENBQUN4RyxRQUFGLENBQVczQixXQUFYLEVBQWxDO0FBQUEsTUFBMkRnSixDQUFDLEdBQUNELENBQUMsQ0FBQ1YsT0FBRixDQUFVc0IsV0FBVixHQUFzQiw0QkFBNEJ4TCxLQUE1QixDQUFrQyxHQUFsQyxDQUF0QixHQUE2RCxDQUFDLEVBQUQsRUFBSSxFQUFKLENBQTFIO0FBQWtJNEssR0FBQyxDQUFDaUIsU0FBRixHQUFZaEIsQ0FBWjtBQUFjLE1BQUlpQixDQUFDLEdBQUNsQixDQUFDLENBQUNtQixVQUFGLEdBQWF0QyxDQUFuQjtBQUFxQmxKLFdBQVMsQ0FBQ21MLE9BQVYsQ0FBa0IsYUFBbEIsRUFBZ0MsWUFBVTtBQUFDLFFBQUlqSCxDQUFKO0FBQU0sUUFBRyxrQkFBaUIzRCxDQUFqQixJQUFvQkEsQ0FBQyxDQUFDa0wsYUFBRixJQUFpQnZELENBQUMsWUFBWXVELGFBQXJELEVBQW1FdkgsQ0FBQyxHQUFDLENBQUMsQ0FBSCxDQUFuRSxLQUE0RTtBQUFDLFVBQUlkLENBQUMsR0FBQyxDQUFDLFVBQUQsRUFBWWtILENBQUMsQ0FBQzNCLElBQUYsQ0FBTyxrQkFBUCxDQUFaLEVBQXVDLFFBQXZDLEVBQWdELEdBQWhELEVBQW9ELHlDQUFwRCxFQUErRkEsSUFBL0YsQ0FBb0csRUFBcEcsQ0FBTjtBQUE4RzRDLE9BQUMsQ0FBQ25JLENBQUQsRUFBRyxVQUFTN0MsQ0FBVCxFQUFXO0FBQUMyRCxTQUFDLEdBQUMsTUFBSTNELENBQUMsQ0FBQ21MLFNBQVI7QUFBa0IsT0FBakMsQ0FBRDtBQUFvQztBQUFBLFdBQU94SCxDQUFQO0FBQVMsR0FBelIsR0FBMlI4RSxDQUFDLEVBQTVSLEVBQStSOUIsQ0FBQyxDQUFDc0MsQ0FBRCxDQUFoUyxFQUFvUyxPQUFPYSxDQUFDLENBQUNjLE9BQTdTLEVBQXFULE9BQU9kLENBQUMsQ0FBQ2UsWUFBOVQ7O0FBQTJVLE9BQUksSUFBSU8sQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDM0wsU0FBUyxDQUFDa0wsRUFBVixDQUFhcE8sTUFBM0IsRUFBa0M2TyxDQUFDLEVBQW5DO0FBQXNDM0wsYUFBUyxDQUFDa0wsRUFBVixDQUFhUyxDQUFiO0FBQXRDOztBQUF3RHBMLEdBQUMsQ0FBQ1AsU0FBRixHQUFZQSxTQUFaO0FBQXNCLENBQTVpRixDQUE2aUYxRCxNQUE3aUYsRUFBb2pGRixRQUFwakYsQ0FBRDtBQUNBLG1COzs7Ozs7Ozs7OztBQ0pBLHdCIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vd29yay9qcy9jb21tb24vY29tbW9uLmpzXCIpO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG4iLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBub3cgPSByZXF1aXJlKCcuL25vdycpLFxuICAgIHRvTnVtYmVyID0gcmVxdWlyZSgnLi90b051bWJlcicpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgdGltZVdhaXRpbmcgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG5cbiAgICByZXR1cm4gbWF4aW5nXG4gICAgICA/IG5hdGl2ZU1pbih0aW1lV2FpdGluZywgbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZva2UpXG4gICAgICA6IHRpbWVXYWl0aW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lO1xuXG4gICAgLy8gRWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwsIGFjdGl2aXR5IGhhcyBzdG9wcGVkIGFuZCB3ZSdyZSBhdCB0aGVcbiAgICAvLyB0cmFpbGluZyBlZGdlLCB0aGUgc3lzdGVtIHRpbWUgaGFzIGdvbmUgYmFja3dhcmRzIGFuZCB3ZSdyZSB0cmVhdGluZ1xuICAgIC8vIGl0IGFzIHRoZSB0cmFpbGluZyBlZGdlLCBvciB3ZSd2ZSBoaXQgdGhlIGBtYXhXYWl0YCBsaW1pdC5cbiAgICByZXR1cm4gKGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8ICh0aW1lU2luY2VMYXN0Q2FsbCA+PSB3YWl0KSB8fFxuICAgICAgKHRpbWVTaW5jZUxhc3RDYWxsIDwgMCkgfHwgKG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVyRXhwaXJlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfVxuICAgIC8vIFJlc3RhcnQgdGhlIHRpbWVyLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgcmVtYWluaW5nV2FpdCh0aW1lKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFpbGluZ0VkZ2UodGltZSkge1xuICAgIHRpbWVySWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBPbmx5IGludm9rZSBpZiB3ZSBoYXZlIGBsYXN0QXJnc2Agd2hpY2ggbWVhbnMgYGZ1bmNgIGhhcyBiZWVuXG4gICAgLy8gZGVib3VuY2VkIGF0IGxlYXN0IG9uY2UuXG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gICAgbGFzdEludm9rZVRpbWUgPSAwO1xuICAgIGxhc3RBcmdzID0gbGFzdENhbGxUaW1lID0gbGFzdFRoaXMgPSB0aW1lcklkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgcmV0dXJuIHRpbWVySWQgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRyYWlsaW5nRWRnZShub3coKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKSxcbiAgICAgICAgaXNJbnZva2luZyA9IHNob3VsZEludm9rZSh0aW1lKTtcblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lO1xuXG4gICAgaWYgKGlzSW52b2tpbmcpIHtcbiAgICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdFZGdlKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW5nKSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnZvY2F0aW9ucyBpbiBhIHRpZ2h0IGxvb3AuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZTtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbm93O1xuIiwidmFyIGRlYm91bmNlID0gcmVxdWlyZSgnLi9kZWJvdW5jZScpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKipcbiAqIENyZWF0ZXMgYSB0aHJvdHRsZWQgZnVuY3Rpb24gdGhhdCBvbmx5IGludm9rZXMgYGZ1bmNgIGF0IG1vc3Qgb25jZSBwZXJcbiAqIGV2ZXJ5IGB3YWl0YCBtaWxsaXNlY29uZHMuIFRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgXG4gKiBtZXRob2QgdG8gY2FuY2VsIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvXG4gKiBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS4gUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2BcbiAqIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZSBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGBcbiAqIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZCB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGVcbiAqIHRocm90dGxlZCBmdW5jdGlvbi4gU3Vic2VxdWVudCBjYWxscyB0byB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uIHJldHVybiB0aGVcbiAqIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2AgaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIHRocm90dGxlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy50aHJvdHRsZWAgYW5kIGBfLmRlYm91bmNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHRocm90dGxlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRocm90dGxlIGludm9jYXRpb25zIHRvLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHRocm90dGxlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgZXhjZXNzaXZlbHkgdXBkYXRpbmcgdGhlIHBvc2l0aW9uIHdoaWxlIHNjcm9sbGluZy5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdzY3JvbGwnLCBfLnRocm90dGxlKHVwZGF0ZVBvc2l0aW9uLCAxMDApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHJlbmV3VG9rZW5gIHdoZW4gdGhlIGNsaWNrIGV2ZW50IGlzIGZpcmVkLCBidXQgbm90IG1vcmUgdGhhbiBvbmNlIGV2ZXJ5IDUgbWludXRlcy5cbiAqIHZhciB0aHJvdHRsZWQgPSBfLnRocm90dGxlKHJlbmV3VG9rZW4sIDMwMDAwMCwgeyAndHJhaWxpbmcnOiBmYWxzZSB9KTtcbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCB0aHJvdHRsZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgdGhyb3R0bGVkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCB0aHJvdHRsZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGVhZGluZyA9IHRydWUsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICdsZWFkaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLmxlYWRpbmcgOiBsZWFkaW5nO1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cbiAgcmV0dXJuIGRlYm91bmNlKGZ1bmMsIHdhaXQsIHtcbiAgICAnbGVhZGluZyc6IGxlYWRpbmcsXG4gICAgJ21heFdhaXQnOiB3YWl0LFxuICAgICd0cmFpbGluZyc6IHRyYWlsaW5nXG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRocm90dGxlO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9OdW1iZXI7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgJy4uL21vZHVsZS9jb21tb24ucGx1Z2luJztcclxuaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC90aHJvdHRsZSc7XHJcbmltcG9ydCBib2R5U2Nyb2xsUHJldmVudCBmcm9tICcuLi9tb2R1bGUvYm9keVNjcm9sbFByZXZlbnQnO1xyXG5pbXBvcnQgJy4uL21vZHVsZS9tb2Rlcm5penItY3VzdG9tJztcclxuXHJcbi8vLy8vLy8vLy8vL2dsb2JhbCB2YXJpYWJsZS8vLy8vLy8vLy8vL1xyXG5cclxuY29uc3QgYm9keSA9ICQoJ2JvZHknKTtcclxuXHJcbi8vLy8vLy8vLy8vL0RyYXcgU1ZHLy8vLy8vLy8vLy8vXHJcbigoKSA9PiB7XHJcblx0Y29uc3QgYWNjZXNzRmxhZyA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc2VkJyk7XHJcblx0Y29uc3QgbXljTG9nbyA9ICQoXCIjbXljTG9nb1wiKS5kcmF3c3ZnKHtcclxuXHRcdGR1cmF0aW9uOiAxMDAwLFxyXG5cdFx0c3RhZ2dlcjogODAsXHJcblx0XHRlYXNpbmc6IFwic3dpbmdcIixcclxuXHRcdGNhbGxiYWNrKCkge1xyXG5cdFx0XHQkKFwiI215Y0xvZ28gZ1wiKS5hZGRDbGFzcyhcImZpbGxBbmltXCIpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdGlmICghYWNjZXNzRmxhZyAmJiBib2R5Lmhhc0NsYXNzKCdob21lJykpIHtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRteWNMb2dvLmNzcyhcIm9wYWNpdHlcIiwgMSkuZHJhd3N2ZyhcImFuaW1hdGVcIik7XHJcblx0XHR9LCAxODAwKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0bXljTG9nby5jc3MoXCJvcGFjaXR5XCIsIDEpLmRyYXdzdmcoXCJhbmltYXRlXCIpO1xyXG5cdH1cclxufSkoKTtcclxuXHJcbi8vLy8vLy8vLy8vL3Njcm9sbEV2ZW50c19zdGFydC8vLy8vLy8vLy8vL1xyXG4kKCgpID0+IHtcclxuXHJcblx0Ly9uYXZIZWFkZXJTaG93X3ZhcmlhYmxlc1xyXG5cdGNvbnN0IGNsb25lTmF2ID0gJCgnI25hdkhlYWRlcicpLmNsb25lKCkuYXR0cignaWQnLCAnY2xvbmVOYXYnKS5hZGRDbGFzcygnY2xvbmVOYXYnKS5pbnNlcnRBZnRlcignI25hdkhlYWRlcicpO1xyXG5cdGNvbnN0IGxvZ29Nb3ZlID0gJCgnLmxvZ29Gb2xsb3c6bGFzdCcpO1xyXG5cdGNvbnN0IHNob3dDbGFzcyA9ICdpc1Nob3cnO1xyXG5cdC8vc2hvd1VwX3ZhcmlhYmxlc1xyXG5cdGNvbnN0IGZvclNob3cxID0gJCgnLmZvclNob3cxJyk7XHJcblx0Y29uc3QgZm9yU2hvdzIgPSAkKCcuZm9yU2hvdzInKTtcclxuXHRjb25zdCBmb3JTaG93MyA9ICQoJy5mb3JTaG93MycpO1xyXG5cdGNvbnN0IGZvclNob3c0ID0gJCgnLmZvclNob3c0Jyk7XHJcblx0Y29uc3QgZm9yU2hvd3MgPSBbZm9yU2hvdzEsIGZvclNob3cyLCBmb3JTaG93MywgZm9yU2hvdzRdO1xyXG5cdC8vdGV4dGlsbGF0ZV92YXJpYWJsZXNcclxuXHRjb25zdCBoZWFkaW5nID0gJCgnLmhlYWRpbmcnKTtcclxuXHQvL2NvbW1lbnRBbmltX3ZhcmlhYmxlc1xyXG5cdGNvbnN0IGNvbW1lbnRBbmltID0gJCgnI2NvbW1lbnRBbmltJyk7XHJcblx0Ly9yb2xsQmFja192YXJpYWJsZXNcclxuXHRjb25zdCByb2xsQmFjayA9ICQoJyNyb2xsQmFjaycpO1xyXG5cdC8vaGVsbG9Nb2dpX3ZhcmlhYmxlc1xyXG5cdGNvbnN0IG1vZ2lGb290ZXIgPSAkKCcjbW9naUZvb3RlcicpO1xyXG5cdGNvbnN0IGNvbnRlbnRzSGVpZ2h0ID0gJChkb2N1bWVudCkuaGVpZ2h0KCk7XHJcblxyXG5cdC8vLy9zY3JvbGxFdmVudHMvLy8vXHJcblx0JCh3aW5kb3cpLm9uKCdzY3JvbGwnLCB0aHJvdHRsZShmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0Ly9jb21tb25fdmFyaWFibGVzXHJcblx0XHRjb25zdCB3aW5kb3dIZWlnaHQgPSAkKHRoaXMpLmhlaWdodCgpO1xyXG5cdFx0Y29uc3Qgc2Nyb2xsID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuXHJcblx0XHQvL25hdkhlYWRlclNob3dfZnVuY1xyXG5cdFx0aWYgKHNjcm9sbCA+IDcwMCkge1xyXG5cdFx0XHRsb2dvTW92ZS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XHJcblx0XHRcdGNsb25lTmF2LmFkZENsYXNzKHNob3dDbGFzcyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjbG9uZU5hdi5yZW1vdmVDbGFzcyhzaG93Q2xhc3MpO1xyXG5cdFx0fVxyXG5cdFx0Ly9zaG93VXBfZnVuY1xyXG5cdFx0Y29uc3QgbGVuID0gZm9yU2hvd3MubGVuZ3RoO1xyXG5cdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBsZW47IGorKykge1xyXG5cdFx0XHRmb3JTaG93c1tqXS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcblx0XHRcdFx0Y29uc3QgZm9yU2hvd1BvaW50ID0gJCh0aGlzKS5vZmZzZXQoKS50b3AgLSAzMDtcclxuXHRcdFx0XHRjb25zdCBkZWxheVRpbWUgPSA5MDtcclxuXHRcdFx0XHRpZiAoc2Nyb2xsID4gZm9yU2hvd1BvaW50IC0gd2luZG93SGVpZ2h0KSB7XHJcblx0XHRcdFx0XHQkKHRoaXMpLmRlbGF5KGkgKiBkZWxheVRpbWUpLnF1ZXVlKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnc2hvd1VwJyk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0Ly90ZXh0aWxsYXRlX2Z1bmNcclxuXHRcdGhlYWRpbmcuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGNvbnN0IGhlYWRpbmdQb2ludCA9ICQodGhpcykub2Zmc2V0KCkudG9wO1xyXG5cdFx0XHRpZiAoc2Nyb2xsID4gaGVhZGluZ1BvaW50IC0gd2luZG93SGVpZ2h0KSB7XHJcblx0XHRcdFx0JCh0aGlzKS5jc3MoJ29wYWNpdHknLCAxKS50ZXh0aWxsYXRlKHtcclxuXHRcdFx0XHRcdGluOiB7XHJcblx0XHRcdFx0XHRcdGVmZmVjdDogJ2ZhZGVJblVwJyxcclxuXHRcdFx0XHRcdFx0c2h1ZmZsZTogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0ZGVsYXk6IDIwLFxyXG5cdFx0XHRcdFx0XHRkZWxheVNjYWxlOiAzLFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdC8vY29tbWVudEFuaW1fZnVuY1xyXG5cdFx0aWYgKGNvbW1lbnRBbmltLmxlbmd0aCkge1xyXG5cdFx0XHRjb25zdCBteUNvbW1lbnRQb2ludCA9IGNvbW1lbnRBbmltLm9mZnNldCgpLnRvcDtcclxuXHRcdFx0aWYgKHNjcm9sbCA+IG15Q29tbWVudFBvaW50IC0gd2luZG93SGVpZ2h0KSB7XHJcblx0XHRcdFx0Y29tbWVudEFuaW0uY3NzKCdvcGFjaXR5JywgMSkuYWRkQ2xhc3MoJ2FuaW1hdGVkIHpvb21JbkRvd24nKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ly9yb2xsQmFja19mdW5jXHJcblx0XHRpZiAoc2Nyb2xsID4gNzAwKSB7XHJcblx0XHRcdHJvbGxCYWNrLmZhZGVJbig1MDApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cm9sbEJhY2suZmFkZU91dCg1MDApO1xyXG5cdFx0fVxyXG5cdFx0Ly9oZWxsb01vZ2lfZnVuY1xyXG5cdFx0aWYgKGNvbnRlbnRzSGVpZ2h0IC0gKHNjcm9sbCArIHdpbmRvd0hlaWdodCkgPCAzMDApIHtcclxuXHRcdFx0bW9naUZvb3Rlci5zaG93KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdoZWxsb01vZ2knKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAobW9naUZvb3Rlci5oYXNDbGFzcygnaGVsbG9Nb2dpJykpIHtcclxuXHRcdFx0XHRtb2dpRm9vdGVyLmZhZGVPdXQoMjAwLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdoZWxsb01vZ2knKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHR9LCAxNTApKTtcclxuXHQvLy8vc2Nyb2xsRXZlbnRzLy8vL1xyXG5cclxuXHQvLy8vb3B0aW9uYWxfZnVuYy8vLy9cclxuXHQvL3JvbGxCYWNrQ2xpY2tlZFxyXG5cdHJvbGxCYWNrLm9uKCdjbGljaycsKCkgPT4ge1xyXG5cdFx0JCgnYm9keSxodG1sJykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCA3MDAsICdlYXNlSW5PdXRRdWFydCcpO1xyXG5cdH0pO1xyXG5cdC8vLy9vcHRpb25hbF9mdW5jLy8vL1xyXG5cclxufSk7XHJcbi8vLy8vLy8vLy8vL3Njcm9sbEV2ZW50c19lbmQvLy8vLy8vLy8vLy9cclxuXHJcbi8vLy8vLy8vLy8vL3NwTmF2SGVhZGVyLy8vLy8vLy8vLy8vXHJcbiQoKCkgPT4ge1xyXG5cdGNvbnN0IGhhbWJCdG5zID0gJCgnI2hhbWJCdG4nKTtcclxuXHRjb25zdCBoYW1iQnRuMSA9ICQoJy5oYW1iQnRuMScpO1xyXG5cdGNvbnN0IGhhbWJCdG4yID0gJCgnLmhhbWJCdG4yJyk7XHJcblx0Y29uc3QgaGFtYkJ0bjMgPSAkKCcuaGFtYkJ0bjMnKTtcclxuXHRjb25zdCBzcE5hdiA9ICQoJyNzcE5hdkhlYWRlcicpO1xyXG5cdGNvbnN0IHNwTmF2TGlzdHMgPSAkKCcuc3BOYXZIZWFkZXIgdWwgbGknKTtcclxuXHRjb25zdCBzcE5hdkxpbmsgPSAkKCcjc3BOYXZIZWFkZXIgbGkgYScpO1xyXG5cdGNvbnN0IGRlbGF5VGltZSA9IDgwO1xyXG5cdGNvbnN0IGZhZGVUaW1lID0gMjAwO1xyXG5cdGhhbWJCdG5zLm9uKCdjbGljaycsICgpID0+IHtcclxuXHRcdHRvZ2dsZU5hdigpO1xyXG5cdFx0aWYgKHNwTmF2TGlzdHMuY3NzKCdkaXNwbGF5JykgPT0gJ2xpc3QtaXRlbScpIHtcclxuXHRcdFx0c3BOYXZMaXN0cy5mYWRlT3V0KGZhZGVUaW1lKTtcclxuXHRcdFx0Ym9keVNjcm9sbFByZXZlbnQoZmFsc2UpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ym9keVNjcm9sbFByZXZlbnQodHJ1ZSk7XHJcblx0XHRcdHNwTmF2TGlzdHMuZWFjaChmdW5jdGlvbiAoaSkge1xyXG5cdFx0XHRcdCQodGhpcykuZGVsYXkoaSAqIGRlbGF5VGltZSkuZmFkZUluKGZhZGVUaW1lKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0c3BOYXZMaW5rLm9uKCdjbGljaycsICgpID0+IHtcclxuXHRcdGJvZHlTY3JvbGxQcmV2ZW50KGZhbHNlKTtcclxuXHRcdHRvZ2dsZU5hdigpO1xyXG5cdFx0c3BOYXZMaXN0cy5oaWRlKCk7XHJcblx0fSk7XHJcblx0ZnVuY3Rpb24gdG9nZ2xlTmF2KCkge1xyXG5cdFx0aWYgKCFzcE5hdi5oYXNDbGFzcygnaXMtc2hvdycpKSB7XHJcblx0XHRcdHNwTmF2LmZhZGVJbihmYWRlVGltZSkuYWRkQ2xhc3MoJ2lzLXNob3cnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNwTmF2LmZhZGVPdXQoZmFkZVRpbWUsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy1zaG93Jyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGhhbWJCdG4xLnRvZ2dsZUNsYXNzKCdoYW1iTW92ZTEnKTtcclxuXHRcdGhhbWJCdG4yLnRvZ2dsZUNsYXNzKCdoYW1iTW92ZTInKTtcclxuXHRcdGhhbWJCdG4zLnRvZ2dsZUNsYXNzKCdoYW1iTW92ZTMnKTtcclxuXHR9XHJcbn0pO1xyXG4vLy8vLy8vLy8vLy9zcE5hdkhlYWRlci8vLy8vLy8vLy8vL1xyXG4vL+KGkWNhbiBub3QgcmVwbGFjZeKGky8vXHJcbi8vLy8vLy8vLy8vL3Ntb290aFNjcm9sbC8vLy8vLy8vLy8vL1xyXG4kKCgpID0+IHtcclxuXHQkKCcubmF2SGVhZGVyIGFbaHJlZl49XCIjXCJdJykub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCBocmVmID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcblx0XHRjb25zdCB0YXJnZXQgPSAkKGhyZWYgPT0gJyMnIHx8IGhyZWYgPT09ICcnID8gJ2h0bWwnIDogaHJlZik7XHJcblx0XHRjb25zdCBwb3NpdGlvbiA9IHRhcmdldC5vZmZzZXQoKS50b3A7XHJcblx0XHRjb25zb2xlLmxvZyhwb3NpdGlvbik7XHJcblx0XHRpZiAoaHJlZiA9PT0gJyNjb250YWN0Jykge1xyXG5cdFx0XHQkKCdodG1sLGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiBwb3NpdGlvbiB9LCA3MDAsICdlYXNlSW5PdXRRdWFydCcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogcG9zaXRpb24gLSA1MCB9LCA3MDAsICdlYXNlSW5PdXRRdWFydCcpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cdCQoJyNzcE5hdkhlYWRlciBhW2hyZWZePVwiI1wiXScpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgaHJlZiA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG5cdFx0Y29uc3QgdGFyZ2V0ID0gJChocmVmID09ICcjJyB8fCBocmVmID09PSAnJyA/ICdodG1sJyA6IGhyZWYpO1xyXG5cdFx0Y29uc3QgcG9zaXRpb24gPSB0YXJnZXQub2Zmc2V0KCkudG9wO1xyXG5cdFx0aWYgKGhyZWYgPT09ICcjY29udGFjdCcpIHtcclxuXHRcdFx0JCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogcG9zaXRpb24gKyAxMDAgfSwgNzAwLCAnZWFzZUluT3V0UXVhcnQnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCQoJ2h0bWwsYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IHBvc2l0aW9uICsgNTAgfSwgNzAwLCAnZWFzZUluT3V0UXVhcnQnKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxufSk7XHJcbi8vLy8vLy8vLy8vL3Ntb290aFNjcm9sbC8vLy8vLy8vLy8vL1xyXG5cclxuLy8vLy8vLy8vLy8vb3RoZXJwYWdlIHRvIGZyb250cGFnZS8vLy8vLy8vLy8vL1xyXG4kKHdpbmRvdykub24oJ2xvYWQnLCAoKSA9PiB7XHJcblx0Y29uc3QgZml4UHggPSAtNTA7XHJcblx0Y29uc3QgdXJsID0gJChsb2NhdGlvbikuYXR0cignaHJlZicpO1xyXG5cdGlmICh1cmwuaW5jbHVkZXMoXCI/aWQ9XCIpKSB7XHJcblx0XHRjb25zdCBpZE5hbWUgPSB1cmwuc3BsaXQoXCI/aWQ9XCIpO1xyXG5cdFx0Y29uc3QgdGFyZ2V0ID0gJChgIyR7aWROYW1lW2lkTmFtZS5sZW5ndGggLSAxXX1gKTtcclxuXHRcdGlmICh0YXJnZXQubGVuZ3RoKSB7XHJcblx0XHRcdGNvbnN0IHBvcyA9IHRhcmdldC5vZmZzZXQoKS50b3AgKyBmaXhQeDtcclxuXHRcdFx0aWYgKChuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQaG9uZScpID4gMCAmJiAhbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcygnaVBhZCcpKSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQb2QnKSA+IDAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdBbmRyb2lkJykgPiAwKSB7XHJcblx0XHRcdFx0aWYgKHRhcmdldC5wcm9wKCdpZCcpID09IFwiY29udGFjdFwiKSB7XHJcblx0XHRcdFx0XHQkKFwiaHRtbCwgYm9keVwiKS5zY3JvbGxUb3AocG9zICsgMTUwKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JChcImh0bWwsIGJvZHlcIikuc2Nyb2xsVG9wKHBvcyArIDEwMCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmICh0YXJnZXQucHJvcCgnaWQnKSA9PSBcImNvbnRhY3RcIikge1xyXG5cdFx0XHRcdFx0JChcImh0bWwsIGJvZHlcIikuc2Nyb2xsVG9wKHBvcyArIDUwKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JChcImh0bWwsIGJvZHlcIikuc2Nyb2xsVG9wKHBvcyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59KTtcclxuLy8vLy8vLy8vLy8vb3RoZXJwYWdlIHRvIGZyb250cGFnZS8vLy8vLy8vLy8vL1xyXG5cclxuLy8vLy8vLy8vLy8vbW9kYWwvLy8vLy8vLy8vLy9cclxuJCgoKSA9PiB7XHJcblx0JCgnLm1vZGFsT3BlbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdGJvZHlTY3JvbGxQcmV2ZW50KHRydWUpO1xyXG5cdFx0aWYgKCQodGhpcykucGFyZW50cygnI3NwTmF2SGVhZGVyJylbMF0pIHtcclxuXHRcdFx0JCgnI21vZGFsQXJlYScpLnNob3coKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCQoJyNtb2RhbEFyZWEnKS5mYWRlSW4oKTtcclxuXHRcdH1cclxuXHRcdGlmICgkKCcjY29udGFjdCcpKSB7XHJcblx0XHRcdCQoJyNjb250YWN0JykudG9nZ2xlQ2xhc3MoJ2lzLXBhc3NpdmUnKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHQkKCcjbW9kYWxDbG9zZSwjbW9kYWxPdXRlcicpLm9uKCdjbGljaycsICgpID0+IHtcclxuXHRcdCQoJyNtb2RhbEFyZWEnKS5mYWRlT3V0KCgpID0+IHtcclxuXHRcdFx0Ym9keVNjcm9sbFByZXZlbnQoZmFsc2UpO1xyXG5cdFx0XHRpZiAoJCgnI2NvbnRhY3QnKSkge1xyXG5cdFx0XHRcdCQoJyNjb250YWN0JykudG9nZ2xlQ2xhc3MoJ2lzLXBhc3NpdmUnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn0pO1xyXG4vLy8vLy8vLy8vLy9tb2RhbC8vLy8vLy8vLy8vL1xyXG5cclxuLy8vLy8vLy8vLy8vc2Nyb2xsIGNvbnRyb2wgZm9yIGZ1Y2tpbidJRTExLy8vLy8vLy8vLy8vXHJcbi8vIGlmIChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9NU0lFIDEwL2kpIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1RyaWRlbnRcXC83XFwuLykgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvRWRnZVxcLzEyXFwuLykpIHtcclxuLy8gXHQkKCdib2R5Jykub24oXCJtb3VzZXdoZWVsXCIsICgpID0+IHtcclxuLy8gXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbi8vIFx0XHRjb25zdCB3ZCA9IGV2ZW50LndoZWVsRGVsdGE7XHJcbi8vIFx0XHRjb25zdCBjc3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbi8vIFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgY3NwIC0gd2QpO1xyXG4vLyBcdH0pO1xyXG4vLyB9XHJcbi8vLy8vLy8vLy8vL3Njcm9sbCBjb250cm9sIGZvciBmdWNraW4nSUUxMS8vLy8vLy8vLy8vL1xyXG5cclxuLy8vLy8vLy8vLy8vbW91c2Ugc3RhbGtlci8vLy8vLy8vLy8vL1xyXG4kKGZ1bmN0aW9uKCl7XHJcblx0aWYgKCFNb2Rlcm5penIudG91Y2hldmVudHMpIHsvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcblx0XHRjb25zdCBjdXJzb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3Vyc29yJyk7XHJcblx0XHRjb25zdCBzdGFsa2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YWxrZXInKTtcclxuXHRcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRyYW5zbGF0ZSk7XHJcblx0XHJcblx0XHRmdW5jdGlvbiB0cmFuc2xhdGUoZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcblx0XHRcdGN1cnNvci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKCcgKyBlLmNsaWVudFggKyAncHgsICcgKyBlLmNsaWVudFkgKyAncHgpJztcclxuXHRcdFx0c3RhbGtlci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKCcgKyBlLmNsaWVudFggKyAncHgsICcgKyBlLmNsaWVudFkgKyAncHgpJztcclxuXHRcdH1cclxuXHRcclxuXHRcdGNvbnN0IGxpbmtFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EsICNteXNsaWRlciAubmF2LCAubW91c2VTdGFsa2VyJyk7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpbmtFbC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsaW5rRWxbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGN1cnNvci5jbGFzc0xpc3QuYWRkKCdpcy1ob3ZlcmVkJyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRsaW5rRWxbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0Y3Vyc29yLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhvdmVyZWQnKTsgICAgICBcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG59KTtcclxuLy8vLy8vLy8vLy8vbW91c2Ugc3RhbGtlci8vLy8vLy8vLy8vL1xyXG5cclxuLy8vLy8vLy8vLy8vc2Nyb2xsVHJpZ2dlckFsbC1ib3R0b21GaXhBYnNvbHV0ZWx5ISEhLy8vLy8vLy8vLy8vXHJcbiQoKCkgPT4ge1xyXG5cdCQod2luZG93KS50cmlnZ2VyKCdzY3JvbGwnKTtcclxufSk7XHJcbi8vLy8vLy8vLy8vL3Njcm9sbFRyaWdnZXJBbGwtYm90dG9tRml4QWJzb2x1dGVseSEhIS8vLy8vLy8vLy8vL1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBib2R5U2Nyb2xsUHJldmVudChmbGFnKSB7XHJcblx0bGV0IHNjcm9sbFBvc2l0aW9uO1xyXG5cdGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xyXG5cdGNvbnN0IHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcclxuXHRjb25zdCBpc2lPUyA9IHVhLmluZGV4T2YoJ2lwaG9uZScpID4gLTEgfHwgdWEuaW5kZXhPZignaXBhZCcpID4gLTEgfHwgdWEuaW5kZXhPZignbWFjaW50b3NoJykgPiAtMSAmJiAnb250b3VjaGVuZCcgaW4gZG9jdW1lbnQ7XHJcblx0Y29uc3Qgc2Nyb2xsQmFyV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XHJcblx0aWYgKGZsYWcpIHtcclxuXHRcdGJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gc2Nyb2xsQmFyV2lkdGggKyAncHgnO1xyXG5cdFx0aWYgKGlzaU9TKSB7XHJcblx0XHRcdHNjcm9sbFBvc2l0aW9uID0gLXdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHRcdFx0Ym9keS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XHJcblx0XHRcdGJvZHkuc3R5bGUud2lkdGggPSAnMTAwJSc7XHJcblx0XHRcdGJvZHkuc3R5bGUudG9wID0gc2Nyb2xsUG9zaXRpb24gKyAncHgnO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ym9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG5cdFx0fVxyXG5cdH0gZWxzZSBpZiAoIWZsYWcpIHtcclxuXHRcdGJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJyc7XHJcblx0XHRpZiAoaXNpT1MpIHtcclxuXHRcdFx0c2Nyb2xsUG9zaXRpb24gPSBwYXJzZUludChib2R5LnN0eWxlLnRvcC5yZXBsYWNlKC9bXjAtOV0vZywgJycpKTtcclxuXHRcdFx0Ym9keS5zdHlsZS5wb3NpdGlvbiA9ICcnO1xyXG5cdFx0XHRib2R5LnN0eWxlLndpZHRoID0gJyc7XHJcblx0XHRcdGJvZHkuc3R5bGUudG9wID0gJyc7XHJcblx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCBzY3JvbGxQb3NpdGlvbik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcblx0XHR9XHJcblx0fVxyXG59IiwiLyogZXNsaW50LWRpc2FibGUgKi9cclxuLy8vLy8vLy8vLy8vLy90ZXh0aWxsYXRlLmpzLy8vLy8vLy8vLy8vLy9cclxuLypcclxuICogdGV4dGlsbGF0ZS5qc1xyXG4gKiBodHRwOi8vanNjaHIuZ2l0aHViLmNvbS90ZXh0aWxsYXRlXHJcbiAqIE1JVCBsaWNlbnNlZFxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTItMjAxMyBKb3JkYW4gU2Nocm90ZXJcclxuICovXHJcblxyXG4oZnVuY3Rpb24gKCQpIHtcclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHJcblx0ZnVuY3Rpb24gaXNJbkVmZmVjdChlZmZlY3QpIHtcclxuXHRcdHJldHVybiAvSW4vLnRlc3QoZWZmZWN0KSB8fCAkLmluQXJyYXkoZWZmZWN0LCAkLmZuLnRleHRpbGxhdGUuZGVmYXVsdHMuaW5FZmZlY3RzKSA+PSAwO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaXNPdXRFZmZlY3QoZWZmZWN0KSB7XHJcblx0XHRyZXR1cm4gL091dC8udGVzdChlZmZlY3QpIHx8ICQuaW5BcnJheShlZmZlY3QsICQuZm4udGV4dGlsbGF0ZS5kZWZhdWx0cy5vdXRFZmZlY3RzKSA+PSAwO1xyXG5cdH1cclxuXHJcblxyXG5cdGZ1bmN0aW9uIHN0cmluZ1RvQm9vbGVhbihzdHIpIHtcclxuXHRcdGlmIChzdHIgIT09IFwidHJ1ZVwiICYmIHN0ciAhPT0gXCJmYWxzZVwiKSByZXR1cm4gc3RyO1xyXG5cdFx0cmV0dXJuIChzdHIgPT09IFwidHJ1ZVwiKTtcclxuXHR9XHJcblxyXG5cdC8vIGN1c3RvbSBnZXQgZGF0YSBhcGkgbWV0aG9kXHJcblx0ZnVuY3Rpb24gZ2V0RGF0YShub2RlKSB7XHJcblx0XHR2YXIgYXR0cnMgPSBub2RlLmF0dHJpYnV0ZXMgfHwgW11cclxuXHRcdFx0LCBkYXRhID0ge307XHJcblxyXG5cdFx0aWYgKCFhdHRycy5sZW5ndGgpIHJldHVybiBkYXRhO1xyXG5cclxuXHRcdCQuZWFjaChhdHRycywgZnVuY3Rpb24gKGksIGF0dHIpIHtcclxuXHRcdFx0dmFyIG5vZGVOYW1lID0gYXR0ci5ub2RlTmFtZS5yZXBsYWNlKC9kZWxheXNjYWxlLywgJ2RlbGF5U2NhbGUnKTtcclxuXHRcdFx0aWYgKC9eZGF0YS1pbi0qLy50ZXN0KG5vZGVOYW1lKSkge1xyXG5cdFx0XHRcdGRhdGEuaW4gPSBkYXRhLmluIHx8IHt9O1xyXG5cdFx0XHRcdGRhdGEuaW5bbm9kZU5hbWUucmVwbGFjZSgvZGF0YS1pbi0vLCAnJyldID0gc3RyaW5nVG9Cb29sZWFuKGF0dHIubm9kZVZhbHVlKTtcclxuXHRcdFx0fSBlbHNlIGlmICgvXmRhdGEtb3V0LSovLnRlc3Qobm9kZU5hbWUpKSB7XHJcblx0XHRcdFx0ZGF0YS5vdXQgPSBkYXRhLm91dCB8fCB7fTtcclxuXHRcdFx0XHRkYXRhLm91dFtub2RlTmFtZS5yZXBsYWNlKC9kYXRhLW91dC0vLCAnJyldID0gc3RyaW5nVG9Cb29sZWFuKGF0dHIubm9kZVZhbHVlKTtcclxuXHRcdFx0fSBlbHNlIGlmICgvXmRhdGEtKi8udGVzdChub2RlTmFtZSkpIHtcclxuXHRcdFx0XHRkYXRhW25vZGVOYW1lLnJlcGxhY2UoL2RhdGEtLywgJycpXSA9IHN0cmluZ1RvQm9vbGVhbihhdHRyLm5vZGVWYWx1ZSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiBkYXRhO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gc2h1ZmZsZShvKSB7XHJcblx0XHRmb3IgKHZhciBqLCB4LCBpID0gby5sZW5ndGg7IGk7IGogPSBwYXJzZUludChNYXRoLnJhbmRvbSgpICogaSksIHggPSBvWy0taV0sIG9baV0gPSBvW2pdLCBvW2pdID0geCk7XHJcblx0XHRyZXR1cm4gbztcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGFuaW1hdGUoJHQsIGVmZmVjdCwgY2IpIHtcclxuXHRcdCR0LmFkZENsYXNzKCdhbmltYXRlZCAnICsgZWZmZWN0KVxyXG5cdFx0XHQuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKVxyXG5cdFx0XHQuc2hvdygpO1xyXG5cclxuXHRcdCR0Lm9uZSgnd2Via2l0QW5pbWF0aW9uRW5kIG1vekFuaW1hdGlvbkVuZCBNU0FuaW1hdGlvbkVuZCBvYW5pbWF0aW9uZW5kIGFuaW1hdGlvbmVuZCcsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0JHQucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkICcgKyBlZmZlY3QpO1xyXG5cdFx0XHRjYiAmJiBjYigpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBhbmltYXRlVG9rZW5zKCR0b2tlbnMsIG9wdGlvbnMsIGNiKSB7XHJcblx0XHR2YXIgdGhhdCA9IHRoaXNcclxuXHRcdFx0LCBjb3VudCA9ICR0b2tlbnMubGVuZ3RoO1xyXG5cclxuXHRcdGlmICghY291bnQpIHtcclxuXHRcdFx0Y2IgJiYgY2IoKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChvcHRpb25zLnNodWZmbGUpICR0b2tlbnMgPSBzaHVmZmxlKCR0b2tlbnMpO1xyXG5cdFx0aWYgKG9wdGlvbnMucmV2ZXJzZSkgJHRva2VucyA9ICR0b2tlbnMudG9BcnJheSgpLnJldmVyc2UoKTtcclxuXHJcblx0XHQkLmVhY2goJHRva2VucywgZnVuY3Rpb24gKGksIHQpIHtcclxuXHRcdFx0dmFyICR0b2tlbiA9ICQodCk7XHJcblxyXG5cdFx0XHRmdW5jdGlvbiBjb21wbGV0ZSgpIHtcclxuXHRcdFx0XHRpZiAoaXNJbkVmZmVjdChvcHRpb25zLmVmZmVjdCkpIHtcclxuXHRcdFx0XHRcdCR0b2tlbi5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoaXNPdXRFZmZlY3Qob3B0aW9ucy5lZmZlY3QpKSB7XHJcblx0XHRcdFx0XHQkdG9rZW4uY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjb3VudCAtPSAxO1xyXG5cdFx0XHRcdGlmICghY291bnQgJiYgY2IpIGNiKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBkZWxheSA9IG9wdGlvbnMuc3luYyA/IG9wdGlvbnMuZGVsYXkgOiBvcHRpb25zLmRlbGF5ICogaSAqIG9wdGlvbnMuZGVsYXlTY2FsZTtcclxuXHJcblx0XHRcdCR0b2tlbi50ZXh0KCkgP1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBhbmltYXRlKCR0b2tlbiwgb3B0aW9ucy5lZmZlY3QsIGNvbXBsZXRlKTsgfSwgZGVsYXkpIDpcclxuXHRcdFx0XHRjb21wbGV0ZSgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHR2YXIgVGV4dGlsbGF0ZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBvcHRpb25zKSB7XHJcblx0XHR2YXIgYmFzZSA9IHRoaXNcclxuXHRcdFx0LCAkZWxlbWVudCA9ICQoZWxlbWVudCk7XHJcblxyXG5cdFx0YmFzZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRiYXNlLiR0ZXh0cyA9ICRlbGVtZW50LmZpbmQob3B0aW9ucy5zZWxlY3Rvcik7XHJcblxyXG5cdFx0XHRpZiAoIWJhc2UuJHRleHRzLmxlbmd0aCkge1xyXG5cdFx0XHRcdGJhc2UuJHRleHRzID0gJCgnPHVsIGNsYXNzPVwidGV4dHNcIj48bGk+JyArICRlbGVtZW50Lmh0bWwoKSArICc8L2xpPjwvdWw+Jyk7XHJcblx0XHRcdFx0JGVsZW1lbnQuaHRtbChiYXNlLiR0ZXh0cyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGJhc2UuJHRleHRzLmhpZGUoKTtcclxuXHJcblx0XHRcdGJhc2UuJGN1cnJlbnQgPSAkKCc8c3Bhbj4nKVxyXG5cdFx0XHRcdC5odG1sKGJhc2UuJHRleHRzLmZpbmQoJzpmaXJzdC1jaGlsZCcpLmh0bWwoKSlcclxuXHRcdFx0XHQucHJlcGVuZFRvKCRlbGVtZW50KTtcclxuXHJcblx0XHRcdGlmIChpc0luRWZmZWN0KG9wdGlvbnMuaW4uZWZmZWN0KSkge1xyXG5cdFx0XHRcdGJhc2UuJGN1cnJlbnQuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGlzT3V0RWZmZWN0KG9wdGlvbnMub3V0LmVmZmVjdCkpIHtcclxuXHRcdFx0XHRiYXNlLiRjdXJyZW50LmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGJhc2Uuc2V0T3B0aW9ucyhvcHRpb25zKTtcclxuXHJcblx0XHRcdGJhc2UudGltZW91dFJ1biA9IG51bGw7XHJcblxyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRiYXNlLm9wdGlvbnMuYXV0b1N0YXJ0ICYmIGJhc2Uuc3RhcnQoKTtcclxuXHRcdFx0fSwgYmFzZS5vcHRpb25zLmluaXRpYWxEZWxheSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGJhc2Uuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcblx0XHRcdGJhc2Uub3B0aW9ucyA9IG9wdGlvbnM7XHJcblx0XHR9O1xyXG5cclxuXHRcdGJhc2UudHJpZ2dlckV2ZW50ID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuXHRcdFx0dmFyIGUgPSAkLkV2ZW50KG5hbWUgKyAnLnRsdCcpO1xyXG5cdFx0XHQkZWxlbWVudC50cmlnZ2VyKGUsIGJhc2UpO1xyXG5cdFx0XHRyZXR1cm4gZTtcclxuXHRcdH07XHJcblxyXG5cdFx0YmFzZS5pbiA9IGZ1bmN0aW9uIChpbmRleCwgY2IpIHtcclxuXHRcdFx0aW5kZXggPSBpbmRleCB8fCAwO1xyXG5cclxuXHRcdFx0dmFyICRlbGVtID0gYmFzZS4kdGV4dHMuZmluZCgnOm50aC1jaGlsZCgnICsgKChpbmRleCB8fCAwKSArIDEpICsgJyknKVxyXG5cdFx0XHRcdCwgb3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBiYXNlLm9wdGlvbnMsICRlbGVtLmxlbmd0aCA/IGdldERhdGEoJGVsZW1bMF0pIDoge30pXHJcblx0XHRcdFx0LCAkdG9rZW5zO1xyXG5cclxuXHRcdFx0JGVsZW0uYWRkQ2xhc3MoJ2N1cnJlbnQnKTtcclxuXHJcblx0XHRcdGJhc2UudHJpZ2dlckV2ZW50KCdpbkFuaW1hdGlvbkJlZ2luJyk7XHJcblx0XHRcdCRlbGVtZW50LmF0dHIoJ2RhdGEtYWN0aXZlJywgJGVsZW0uZGF0YSgnaWQnKSk7XHJcblxyXG5cdFx0XHRiYXNlLiRjdXJyZW50XHJcblx0XHRcdFx0Lmh0bWwoJGVsZW0uaHRtbCgpKVxyXG5cdFx0XHRcdC5sZXR0ZXJpbmcoJ3dvcmRzJyk7XHJcblxyXG5cdFx0XHQvLyBzcGxpdCB3b3JkcyB0byBpbmRpdmlkdWFsIGNoYXJhY3RlcnMgaWYgdG9rZW4gdHlwZSBpcyBzZXQgdG8gJ2NoYXInXHJcblx0XHRcdGlmIChiYXNlLm9wdGlvbnMudHlwZSA9PSBcImNoYXJcIikge1xyXG5cdFx0XHRcdGJhc2UuJGN1cnJlbnQuZmluZCgnW2NsYXNzXj1cIndvcmRcIl0nKVxyXG5cdFx0XHRcdFx0LmNzcyh7XHJcblx0XHRcdFx0XHRcdCdkaXNwbGF5JzogJ2lubGluZS1ibG9jaycsXHJcblx0XHRcdFx0XHRcdC8vIGZpeCBmb3IgcG9vciBpb3MgcGVyZm9ybWFuY2VcclxuXHRcdFx0XHRcdFx0Jy13ZWJraXQtdHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKDAsMCwwKScsXHJcblx0XHRcdFx0XHRcdCctbW96LXRyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCgwLDAsMCknLFxyXG5cdFx0XHRcdFx0XHQnLW8tdHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKDAsMCwwKScsXHJcblx0XHRcdFx0XHRcdCd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoMCwwLDApJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5lYWNoKGZ1bmN0aW9uICgpIHsgJCh0aGlzKS5sZXR0ZXJpbmcoKTsgfSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCR0b2tlbnMgPSBiYXNlLiRjdXJyZW50XHJcblx0XHRcdFx0LmZpbmQoJ1tjbGFzc149XCInICsgYmFzZS5vcHRpb25zLnR5cGUgKyAnXCJdJylcclxuXHRcdFx0XHQuY3NzKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpO1xyXG5cclxuXHRcdFx0aWYgKGlzSW5FZmZlY3Qob3B0aW9ucy5pbi5lZmZlY3QpKSB7XHJcblx0XHRcdFx0JHRva2Vucy5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XHJcblx0XHRcdH0gZWxzZSBpZiAoaXNPdXRFZmZlY3Qob3B0aW9ucy5pbi5lZmZlY3QpKSB7XHJcblx0XHRcdFx0JHRva2Vucy5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRiYXNlLmN1cnJlbnRJbmRleCA9IGluZGV4O1xyXG5cclxuXHRcdFx0YW5pbWF0ZVRva2VucygkdG9rZW5zLCBvcHRpb25zLmluLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0YmFzZS50cmlnZ2VyRXZlbnQoJ2luQW5pbWF0aW9uRW5kJyk7XHJcblx0XHRcdFx0aWYgKG9wdGlvbnMuaW4uY2FsbGJhY2spIG9wdGlvbnMuaW4uY2FsbGJhY2soKTtcclxuXHRcdFx0XHRpZiAoY2IpIGNiKGJhc2UpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH07XHJcblxyXG5cdFx0YmFzZS5vdXQgPSBmdW5jdGlvbiAoY2IpIHtcclxuXHRcdFx0dmFyICRlbGVtID0gYmFzZS4kdGV4dHMuZmluZCgnOm50aC1jaGlsZCgnICsgKChiYXNlLmN1cnJlbnRJbmRleCB8fCAwKSArIDEpICsgJyknKVxyXG5cdFx0XHRcdCwgJHRva2VucyA9IGJhc2UuJGN1cnJlbnQuZmluZCgnW2NsYXNzXj1cIicgKyBiYXNlLm9wdGlvbnMudHlwZSArICdcIl0nKVxyXG5cdFx0XHRcdCwgb3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBiYXNlLm9wdGlvbnMsICRlbGVtLmxlbmd0aCA/IGdldERhdGEoJGVsZW1bMF0pIDoge30pO1xyXG5cclxuXHRcdFx0YmFzZS50cmlnZ2VyRXZlbnQoJ291dEFuaW1hdGlvbkJlZ2luJyk7XHJcblxyXG5cdFx0XHRhbmltYXRlVG9rZW5zKCR0b2tlbnMsIG9wdGlvbnMub3V0LCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0JGVsZW0ucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKTtcclxuXHRcdFx0XHRiYXNlLnRyaWdnZXJFdmVudCgnb3V0QW5pbWF0aW9uRW5kJyk7XHJcblx0XHRcdFx0JGVsZW1lbnQucmVtb3ZlQXR0cignZGF0YS1hY3RpdmUnKTtcclxuXHRcdFx0XHRpZiAob3B0aW9ucy5vdXQuY2FsbGJhY2spIG9wdGlvbnMub3V0LmNhbGxiYWNrKCk7XHJcblx0XHRcdFx0aWYgKGNiKSBjYihiYXNlKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGJhc2Uuc3RhcnQgPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0YmFzZS50cmlnZ2VyRXZlbnQoJ3N0YXJ0Jyk7XHJcblxyXG5cdFx0XHRcdChmdW5jdGlvbiBydW4oaW5kZXgpIHtcclxuXHRcdFx0XHRcdGJhc2UuaW4oaW5kZXgsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0dmFyIGxlbmd0aCA9IGJhc2UuJHRleHRzLmNoaWxkcmVuKCkubGVuZ3RoO1xyXG5cclxuXHRcdFx0XHRcdFx0aW5kZXggKz0gMTtcclxuXHJcblx0XHRcdFx0XHRcdGlmICghYmFzZS5vcHRpb25zLmxvb3AgJiYgaW5kZXggPj0gbGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGJhc2Uub3B0aW9ucy5jYWxsYmFjaykgYmFzZS5vcHRpb25zLmNhbGxiYWNrKCk7XHJcblx0XHRcdFx0XHRcdFx0YmFzZS50cmlnZ2VyRXZlbnQoJ2VuZCcpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGluZGV4ID0gaW5kZXggJSBsZW5ndGg7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGJhc2UudGltZW91dFJ1biA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0YmFzZS5vdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRydW4oaW5kZXgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0fSwgYmFzZS5vcHRpb25zLm1pbkRpc3BsYXlUaW1lKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fShpbmRleCB8fCAwKSk7XHJcblx0XHRcdH0sIGJhc2Uub3B0aW9ucy5pbml0aWFsRGVsYXkpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRiYXNlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmIChiYXNlLnRpbWVvdXRSdW4pIHtcclxuXHRcdFx0XHRjbGVhckludGVydmFsKGJhc2UudGltZW91dFJ1bik7XHJcblx0XHRcdFx0YmFzZS50aW1lb3V0UnVuID0gbnVsbDtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRiYXNlLmluaXQoKTtcclxuXHR9O1xyXG5cclxuXHQkLmZuLnRleHRpbGxhdGUgPSBmdW5jdGlvbiAoc2V0dGluZ3MsIGFyZ3MpIHtcclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpXHJcblx0XHRcdFx0LCBkYXRhID0gJHRoaXMuZGF0YSgndGV4dGlsbGF0ZScpXHJcblx0XHRcdFx0LCBvcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sICQuZm4udGV4dGlsbGF0ZS5kZWZhdWx0cywgZ2V0RGF0YSh0aGlzKSwgdHlwZW9mIHNldHRpbmdzID09ICdvYmplY3QnICYmIHNldHRpbmdzKTtcclxuXHJcblx0XHRcdGlmICghZGF0YSkge1xyXG5cdFx0XHRcdCR0aGlzLmRhdGEoJ3RleHRpbGxhdGUnLCAoZGF0YSA9IG5ldyBUZXh0aWxsYXRlKHRoaXMsIG9wdGlvbnMpKSk7XHJcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIHNldHRpbmdzID09ICdzdHJpbmcnKSB7XHJcblx0XHRcdFx0ZGF0YVtzZXR0aW5nc10uYXBwbHkoZGF0YSwgW10uY29uY2F0KGFyZ3MpKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkYXRhLnNldE9wdGlvbnMuY2FsbChkYXRhLCBvcHRpb25zKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0JC5mbi50ZXh0aWxsYXRlLmRlZmF1bHRzID0ge1xyXG5cdFx0c2VsZWN0b3I6ICcudGV4dHMnLFxyXG5cdFx0bG9vcDogZmFsc2UsXHJcblx0XHRtaW5EaXNwbGF5VGltZTogMjAwMCxcclxuXHRcdGluaXRpYWxEZWxheTogMCxcclxuXHRcdGluOiB7XHJcblx0XHRcdGVmZmVjdDogJ2ZhZGVJbkxlZnRCaWcnLFxyXG5cdFx0XHRkZWxheVNjYWxlOiAxLjUsXHJcblx0XHRcdGRlbGF5OiA1MCxcclxuXHRcdFx0c3luYzogZmFsc2UsXHJcblx0XHRcdHJldmVyc2U6IGZhbHNlLFxyXG5cdFx0XHRzaHVmZmxlOiBmYWxzZSxcclxuXHRcdFx0Y2FsbGJhY2s6IGZ1bmN0aW9uICgpIHsgfVxyXG5cdFx0fSxcclxuXHRcdG91dDoge1xyXG5cdFx0XHRlZmZlY3Q6ICdoaW5nZScsXHJcblx0XHRcdGRlbGF5U2NhbGU6IDEuNSxcclxuXHRcdFx0ZGVsYXk6IDUwLFxyXG5cdFx0XHRzeW5jOiBmYWxzZSxcclxuXHRcdFx0cmV2ZXJzZTogZmFsc2UsXHJcblx0XHRcdHNodWZmbGU6IGZhbHNlLFxyXG5cdFx0XHRjYWxsYmFjazogZnVuY3Rpb24gKCkgeyB9XHJcblx0XHR9LFxyXG5cdFx0YXV0b1N0YXJ0OiB0cnVlLFxyXG5cdFx0aW5FZmZlY3RzOiBbXSxcclxuXHRcdG91dEVmZmVjdHM6IFsnaGluZ2UnXSxcclxuXHRcdGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7IH0sXHJcblx0XHR0eXBlOiAnY2hhcidcclxuXHR9O1xyXG5cclxufShqUXVlcnkpKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vTGV0dGVyaW5nLmpzLy8vLy8vLy8vLy8vLy9cclxuLypnbG9iYWwgalF1ZXJ5ICovXHJcbi8qIVx0XHJcbiogTGV0dGVyaW5nLkpTIDAuNi4xXHJcbipcclxuKiBDb3B5cmlnaHQgMjAxMCwgRGF2ZSBSdXBlcnQgaHR0cDovL2RhdmVydXBlcnQuY29tXHJcbiogUmVsZWFzZWQgdW5kZXIgdGhlIFdURlBMIGxpY2Vuc2UgXHJcbiogaHR0cDovL3NhbS56b3kub3JnL3d0ZnBsL1xyXG4qXHJcbiogVGhhbmtzIHRvIFBhdWwgSXJpc2ggLSBodHRwOi8vcGF1bGlyaXNoLmNvbSAtIGZvciB0aGUgZmVlZGJhY2suXHJcbipcclxuKiBEYXRlOiBNb24gU2VwIDIwIDE3OjE0OjAwIDIwMTAgLTA2MDBcclxuKi9cclxuKGZ1bmN0aW9uICgkKSB7XHJcblx0ZnVuY3Rpb24gaW5qZWN0b3IodCwgc3BsaXR0ZXIsIGtsYXNzLCBhZnRlcikge1xyXG5cdFx0dmFyIGEgPSB0LnRleHQoKS5zcGxpdChzcGxpdHRlciksIGluamVjdCA9ICcnO1xyXG5cdFx0aWYgKGEubGVuZ3RoKSB7XHJcblx0XHRcdCQoYSkuZWFjaChmdW5jdGlvbiAoaSwgaXRlbSkge1xyXG5cdFx0XHRcdGluamVjdCArPSAnPHNwYW4gY2xhc3M9XCInICsga2xhc3MgKyAoaSArIDEpICsgJ1wiPicgKyBpdGVtICsgJzwvc3Bhbj4nICsgYWZ0ZXI7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0LmVtcHR5KCkuYXBwZW5kKGluamVjdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR2YXIgbWV0aG9kcyA9IHtcclxuXHRcdGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGluamVjdG9yKCQodGhpcyksICcnLCAnY2hhcicsICcnKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHR3b3JkczogZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0aW5qZWN0b3IoJCh0aGlzKSwgJyAnLCAnd29yZCcsICcgJyk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0bGluZXM6IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHZhciByID0gXCJlZWZlYzMwMzA3OWFkMTc0MDVjODg5ZTA5MmUxMDViMFwiO1xyXG5cdFx0XHRcdC8vIEJlY2F1c2UgaXQncyBoYXJkIHRvIHNwbGl0IGEgPGJyLz4gdGFnIGNvbnNpc3RlbnRseSBhY3Jvc3MgYnJvd3NlcnMsXHJcblx0XHRcdFx0Ly8gKCphaGVtKiBJRSAqYWhlbSopLCB3ZSByZXBsYWNlcyBhbGwgPGJyLz4gaW5zdGFuY2VzIHdpdGggYW4gbWQ1IGhhc2ggXHJcblx0XHRcdFx0Ly8gKG9mIHRoZSB3b3JkIFwic3BsaXRcIikuICBJZiB5b3UncmUgdHJ5aW5nIHRvIHVzZSB0aGlzIHBsdWdpbiBvbiB0aGF0IFxyXG5cdFx0XHRcdC8vIG1kNSBoYXNoIHN0cmluZywgaXQgd2lsbCBmYWlsIGJlY2F1c2UgeW91J3JlIGJlaW5nIHJpZGljdWxvdXMuXHJcblx0XHRcdFx0aW5qZWN0b3IoJCh0aGlzKS5jaGlsZHJlbihcImJyXCIpLnJlcGxhY2VXaXRoKHIpLmVuZCgpLCByLCAnbGluZScsICcnKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdCQuZm4ubGV0dGVyaW5nID0gZnVuY3Rpb24gKG1ldGhvZCkge1xyXG5cdFx0Ly8gTWV0aG9kIGNhbGxpbmcgbG9naWNcclxuXHRcdGlmIChtZXRob2QgJiYgbWV0aG9kc1ttZXRob2RdKSB7XHJcblx0XHRcdHJldHVybiBtZXRob2RzW21ldGhvZF0uYXBwbHkodGhpcywgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcclxuXHRcdH0gZWxzZSBpZiAobWV0aG9kID09PSAnbGV0dGVycycgfHwgIW1ldGhvZCkge1xyXG5cdFx0XHRyZXR1cm4gbWV0aG9kcy5pbml0LmFwcGx5KHRoaXMsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSk7IC8vIGFsd2F5cyBwYXNzIGFuIGFycmF5XHJcblx0XHR9XHJcblx0XHQkLmVycm9yKCdNZXRob2QgJyArIG1ldGhvZCArICcgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LmxldHRlcmluZycpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHJcbn0pKGpRdWVyeSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vL0RyYXdTVkcuanMvLy8vLy8vLy8vLy8vL1xyXG4vKiEgalF1ZXJ5IERyYXdTVkcgdjEuMS4wICgyMDE2LTEwLTA1KSAtIGdpdC5pby92R0ZhNSAtIENvcHlyaWdodCAoYykgMjAxNiBMZW9uYXJkbyBTYW50b3MgLSBNSVQgTGljZW5zZSAqL1xyXG4hZnVuY3Rpb24gKHQpIHsgXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbXCJqcXVlcnlcIl0sIHQpIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgbW9kdWxlICYmIG1vZHVsZS5leHBvcnRzID8gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZSwgbikgeyByZXR1cm4gdm9pZCAwID09PSBuICYmIChuID0gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygd2luZG93ID8gcmVxdWlyZShcImpxdWVyeVwiKSA6IHJlcXVpcmUoXCJqcXVlcnlcIikoZSkpLCB0KG4pLCBuOyB9IDogdChqUXVlcnkpOyB9KGZ1bmN0aW9uICh0KSB7IFwidXNlIHN0cmljdFwiOyB2YXIgZSA9IFwiZHJhd3N2Z1wiLCBuID0geyBkdXJhdGlvbjogMWUzLCBzdGFnZ2VyOiAyMDAsIGVhc2luZzogXCJzd2luZ1wiLCByZXZlcnNlOiAhMSwgY2FsbGJhY2s6IHQubm9vcCB9LCBhID0gZnVuY3Rpb24gKCkgeyB2YXIgYSA9IGZ1bmN0aW9uIChhLCBvKSB7IHZhciBpID0gdGhpcywgciA9IHQuZXh0ZW5kKG4sIG8pOyBpLiRlbG0gPSB0KGEpLCBpLiRlbG0uaXMoXCJzdmdcIikgJiYgKGkub3B0aW9ucyA9IHIsIGkuJHBhdGhzID0gaS4kZWxtLmZpbmQoXCJwYXRoXCIpLCBpLnRvdGFsRHVyYXRpb24gPSByLmR1cmF0aW9uICsgci5zdGFnZ2VyICogaS4kcGF0aHMubGVuZ3RoLCBpLmR1cmF0aW9uID0gci5kdXJhdGlvbiAvIGkudG90YWxEdXJhdGlvbiwgaS4kcGF0aHMuZWFjaChmdW5jdGlvbiAodCwgZSkgeyB2YXIgbiA9IGUuZ2V0VG90YWxMZW5ndGgoKTsgZS5wYXRoTGVuID0gbiwgZS5kZWxheSA9IHIuc3RhZ2dlciAqIHQgLyBpLnRvdGFsRHVyYXRpb24sIGUuc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gW24sIG5dLmpvaW4oXCIgXCIpLCBlLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSBuOyB9KSwgaS4kZWxtLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbiAodCwgbikgeyByZXR1cm4gW24sIGUgKyBcIi1pbml0aWFsaXplZFwiXS5qb2luKFwiIFwiKTsgfSkpOyB9OyByZXR1cm4gYS5wcm90b3R5cGUuZ2V0VmFsID0gZnVuY3Rpb24gKGUsIG4pIHsgcmV0dXJuIDEgLSB0LmVhc2luZ1tuXShlLCBlLCAwLCAxLCAxKTsgfSwgYS5wcm90b3R5cGUucHJvZ3Jlc3MgPSBmdW5jdGlvbiAodCkgeyB2YXIgZSA9IHRoaXMsIG4gPSBlLm9wdGlvbnMsIGEgPSBlLmR1cmF0aW9uOyBlLiRwYXRocy5lYWNoKGZ1bmN0aW9uIChvLCBpKSB7IHZhciByID0gaS5zdHlsZTsgaWYgKDEgPT09IHQpIHIuc3Ryb2tlRGFzaG9mZnNldCA9IDA7IGVsc2UgaWYgKDAgPT09IHQpIHIuc3Ryb2tlRGFzaG9mZnNldCA9IGkucGF0aExlbiArIFwicHhcIjsgZWxzZSBpZiAodCA+PSBpLmRlbGF5ICYmIHQgPD0gYSArIGkuZGVsYXkpIHsgdmFyIHMgPSAodCAtIGkuZGVsYXkpIC8gYTsgci5zdHJva2VEYXNob2Zmc2V0ID0gZS5nZXRWYWwocywgbi5lYXNpbmcpICogaS5wYXRoTGVuICogKG4ucmV2ZXJzZSA/IC0xIDogMSkgKyBcInB4XCI7IH0gfSk7IH0sIGEucHJvdG90eXBlLmFuaW1hdGUgPSBmdW5jdGlvbiAoKSB7IHZhciBuID0gdGhpczsgbi4kZWxtLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbiAodCwgbikgeyByZXR1cm4gW24sIGUgKyBcIi1hbmltYXRpbmdcIl0uam9pbihcIiBcIik7IH0pLCB0KHsgbGVuOiAwIH0pLmFuaW1hdGUoeyBsZW46IDEgfSwgeyBlYXNpbmc6IFwibGluZWFyXCIsIGR1cmF0aW9uOiBuLnRvdGFsRHVyYXRpb24sIHN0ZXA6IGZ1bmN0aW9uICh0LCBlKSB7IG4ucHJvZ3Jlc3MuY2FsbChuLCB0IC8gZS5lbmQpOyB9LCBjb21wbGV0ZTogZnVuY3Rpb24gKCkgeyBuLm9wdGlvbnMuY2FsbGJhY2suY2FsbCh0aGlzKSwgbi4kZWxtLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbiAodCwgbikgeyByZXR1cm4gbi5yZXBsYWNlKGUgKyBcIi1hbmltYXRpbmdcIiwgXCJcIik7IH0pOyB9IH0pOyB9LCBhOyB9KCk7IHQuZm5bZV0gPSBmdW5jdGlvbiAobiwgbykgeyByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHsgdmFyIGkgPSB0LmRhdGEodGhpcywgZSk7IGkgJiYgXCJcIiArIG4gPT09IG4gJiYgaVtuXSA/IGlbbl0obykgOiB0LmRhdGEodGhpcywgZSwgbmV3IGEodGhpcywgbikpOyB9KTsgfTsgfSk7XHJcbi8qIGVzbGludC1lbmFibGUgKi8iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyohIG1vZGVybml6ciAzLjYuMCAoQ3VzdG9tIEJ1aWxkKSB8IE1JVCAqXG4gKiBodHRwczovL21vZGVybml6ci5jb20vZG93bmxvYWQvPy10b3VjaGV2ZW50cy1zZXRjbGFzc2VzICEqL1xuIWZ1bmN0aW9uKGUsbix0KXtmdW5jdGlvbiBvKGUsbil7cmV0dXJuIHR5cGVvZiBlPT09bn1mdW5jdGlvbiBzKCl7dmFyIGUsbix0LHMsYSxpLHI7Zm9yKHZhciBsIGluIGMpaWYoYy5oYXNPd25Qcm9wZXJ0eShsKSl7aWYoZT1bXSxuPWNbbF0sbi5uYW1lJiYoZS5wdXNoKG4ubmFtZS50b0xvd2VyQ2FzZSgpKSxuLm9wdGlvbnMmJm4ub3B0aW9ucy5hbGlhc2VzJiZuLm9wdGlvbnMuYWxpYXNlcy5sZW5ndGgpKWZvcih0PTA7dDxuLm9wdGlvbnMuYWxpYXNlcy5sZW5ndGg7dCsrKWUucHVzaChuLm9wdGlvbnMuYWxpYXNlc1t0XS50b0xvd2VyQ2FzZSgpKTtmb3Iocz1vKG4uZm4sXCJmdW5jdGlvblwiKT9uLmZuKCk6bi5mbixhPTA7YTxlLmxlbmd0aDthKyspaT1lW2FdLHI9aS5zcGxpdChcIi5cIiksMT09PXIubGVuZ3RoP01vZGVybml6cltyWzBdXT1zOighTW9kZXJuaXpyW3JbMF1dfHxNb2Rlcm5penJbclswXV1pbnN0YW5jZW9mIEJvb2xlYW58fChNb2Rlcm5penJbclswXV09bmV3IEJvb2xlYW4oTW9kZXJuaXpyW3JbMF1dKSksTW9kZXJuaXpyW3JbMF1dW3JbMV1dPXMpLGYucHVzaCgocz9cIlwiOlwibm8tXCIpK3Iuam9pbihcIi1cIikpfX1mdW5jdGlvbiBhKGUpe3ZhciBuPXUuY2xhc3NOYW1lLHQ9TW9kZXJuaXpyLl9jb25maWcuY2xhc3NQcmVmaXh8fFwiXCI7aWYocCYmKG49bi5iYXNlVmFsKSxNb2Rlcm5penIuX2NvbmZpZy5lbmFibGVKU0NsYXNzKXt2YXIgbz1uZXcgUmVnRXhwKFwiKF58XFxcXHMpXCIrdCtcIm5vLWpzKFxcXFxzfCQpXCIpO249bi5yZXBsYWNlKG8sXCIkMVwiK3QrXCJqcyQyXCIpfU1vZGVybml6ci5fY29uZmlnLmVuYWJsZUNsYXNzZXMmJihuKz1cIiBcIit0K2Uuam9pbihcIiBcIit0KSxwP3UuY2xhc3NOYW1lLmJhc2VWYWw9bjp1LmNsYXNzTmFtZT1uKX1mdW5jdGlvbiBpKCl7cmV0dXJuXCJmdW5jdGlvblwiIT10eXBlb2Ygbi5jcmVhdGVFbGVtZW50P24uY3JlYXRlRWxlbWVudChhcmd1bWVudHNbMF0pOnA/bi5jcmVhdGVFbGVtZW50TlMuY2FsbChuLFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixhcmd1bWVudHNbMF0pOm4uY3JlYXRlRWxlbWVudC5hcHBseShuLGFyZ3VtZW50cyl9ZnVuY3Rpb24gcigpe3ZhciBlPW4uYm9keTtyZXR1cm4gZXx8KGU9aShwP1wic3ZnXCI6XCJib2R5XCIpLGUuZmFrZT0hMCksZX1mdW5jdGlvbiBsKGUsdCxvLHMpe3ZhciBhLGwsZixjLGQ9XCJtb2Rlcm5penJcIixwPWkoXCJkaXZcIiksaD1yKCk7aWYocGFyc2VJbnQobywxMCkpZm9yKDtvLS07KWY9aShcImRpdlwiKSxmLmlkPXM/c1tvXTpkKyhvKzEpLHAuYXBwZW5kQ2hpbGQoZik7cmV0dXJuIGE9aShcInN0eWxlXCIpLGEudHlwZT1cInRleHQvY3NzXCIsYS5pZD1cInNcIitkLChoLmZha2U/aDpwKS5hcHBlbmRDaGlsZChhKSxoLmFwcGVuZENoaWxkKHApLGEuc3R5bGVTaGVldD9hLnN0eWxlU2hlZXQuY3NzVGV4dD1lOmEuYXBwZW5kQ2hpbGQobi5jcmVhdGVUZXh0Tm9kZShlKSkscC5pZD1kLGguZmFrZSYmKGguc3R5bGUuYmFja2dyb3VuZD1cIlwiLGguc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIixjPXUuc3R5bGUub3ZlcmZsb3csdS5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwiLHUuYXBwZW5kQ2hpbGQoaCkpLGw9dChwLGUpLGguZmFrZT8oaC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGgpLHUuc3R5bGUub3ZlcmZsb3c9Yyx1Lm9mZnNldEhlaWdodCk6cC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHApLCEhbH12YXIgZj1bXSxjPVtdLGQ9e192ZXJzaW9uOlwiMy42LjBcIixfY29uZmlnOntjbGFzc1ByZWZpeDpcIlwiLGVuYWJsZUNsYXNzZXM6ITAsZW5hYmxlSlNDbGFzczohMCx1c2VQcmVmaXhlczohMH0sX3E6W10sb246ZnVuY3Rpb24oZSxuKXt2YXIgdD10aGlzO3NldFRpbWVvdXQoZnVuY3Rpb24oKXtuKHRbZV0pfSwwKX0sYWRkVGVzdDpmdW5jdGlvbihlLG4sdCl7Yy5wdXNoKHtuYW1lOmUsZm46bixvcHRpb25zOnR9KX0sYWRkQXN5bmNUZXN0OmZ1bmN0aW9uKGUpe2MucHVzaCh7bmFtZTpudWxsLGZuOmV9KX19LE1vZGVybml6cj1mdW5jdGlvbigpe307TW9kZXJuaXpyLnByb3RvdHlwZT1kLE1vZGVybml6cj1uZXcgTW9kZXJuaXpyO3ZhciB1PW4uZG9jdW1lbnRFbGVtZW50LHA9XCJzdmdcIj09PXUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxoPWQuX2NvbmZpZy51c2VQcmVmaXhlcz9cIiAtd2Via2l0LSAtbW96LSAtby0gLW1zLSBcIi5zcGxpdChcIiBcIik6W1wiXCIsXCJcIl07ZC5fcHJlZml4ZXM9aDt2YXIgbT1kLnRlc3RTdHlsZXM9bDtNb2Rlcm5penIuYWRkVGVzdChcInRvdWNoZXZlbnRzXCIsZnVuY3Rpb24oKXt2YXIgdDtpZihcIm9udG91Y2hzdGFydFwiaW4gZXx8ZS5Eb2N1bWVudFRvdWNoJiZuIGluc3RhbmNlb2YgRG9jdW1lbnRUb3VjaCl0PSEwO2Vsc2V7dmFyIG89W1wiQG1lZGlhIChcIixoLmpvaW4oXCJ0b3VjaC1lbmFibGVkKSwoXCIpLFwiaGVhcnR6XCIsXCIpXCIsXCJ7I21vZGVybml6cnt0b3A6OXB4O3Bvc2l0aW9uOmFic29sdXRlfX1cIl0uam9pbihcIlwiKTttKG8sZnVuY3Rpb24oZSl7dD05PT09ZS5vZmZzZXRUb3B9KX1yZXR1cm4gdH0pLHMoKSxhKGYpLGRlbGV0ZSBkLmFkZFRlc3QsZGVsZXRlIGQuYWRkQXN5bmNUZXN0O2Zvcih2YXIgdj0wO3Y8TW9kZXJuaXpyLl9xLmxlbmd0aDt2KyspTW9kZXJuaXpyLl9xW3ZdKCk7ZS5Nb2Rlcm5penI9TW9kZXJuaXpyfSh3aW5kb3csZG9jdW1lbnQpO1xuLyogZXNsaW50LWVuYWJsZSAqLyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=