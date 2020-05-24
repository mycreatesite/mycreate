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

 ////////////scrollEvents_start////////////

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
  hambBtns.click(function () {
    toggleNav();

    if (spNavLists.css('display') == 'list-item') {
      spNavLists.fadeOut(fadeTime);
    } else {
      spNavLists.each(function (i) {
        $(this).delay(i * delayTime).fadeIn(fadeTime);
      });
    }
  });
  spNavLink.click(function () {
    toggleNav();
    spNavLists.hide();
  });

  function toggleNav() {
    if (!spNav.hasClass('is-show')) {
      spNav.fadeToggle(fadeTime).toggleClass('is-show');
    } else {
      spNav.fadeToggle(fadeTime, function () {
        $(this).toggleClass('is-show');
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
  $('.modalOpen').click(function () {
    if ($(this).parents('#spNavHeader')[0]) {
      $('#modalArea').show();
    } else {
      $('#modalArea').fadeIn();
    }
  });
  $('#modalClose,#modalOuter').click(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2RlYm91bmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3Rocm90dGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9OdW1iZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi93b3JrL2pzL2NvbW1vbi9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vd29yay9qcy9tb2R1bGUvY29tbW9uLnBsdWdpbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyIkIiwiY2xvbmVOYXYiLCJjbG9uZSIsImF0dHIiLCJhZGRDbGFzcyIsImluc2VydEFmdGVyIiwibG9nb01vdmUiLCJzaG93Q2xhc3MiLCJmb3JTaG93MSIsImZvclNob3cyIiwiZm9yU2hvdzMiLCJmb3JTaG93NCIsImZvclNob3dzIiwiaGVhZGluZyIsImNvbW1lbnRBbmltIiwicm9sbEJhY2siLCJtb2dpRm9vdGVyIiwiY29udGVudHNIZWlnaHQiLCJkb2N1bWVudCIsImhlaWdodCIsIndpbmRvdyIsIm9uIiwidGhyb3R0bGUiLCJ3aW5kb3dIZWlnaHQiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJjc3MiLCJyZW1vdmVDbGFzcyIsImxlbiIsImxlbmd0aCIsImoiLCJlYWNoIiwiaSIsImZvclNob3dQb2ludCIsIm9mZnNldCIsInRvcCIsImRlbGF5VGltZSIsImRlbGF5IiwicXVldWUiLCJoZWFkaW5nUG9pbnQiLCJ0ZXh0aWxsYXRlIiwiaW4iLCJlZmZlY3QiLCJzaHVmZmxlIiwiZGVsYXlTY2FsZSIsIm15Q29tbWVudFBvaW50IiwiZmFkZUluIiwiZmFkZU91dCIsInNob3ciLCJoYXNDbGFzcyIsImNsaWNrIiwiYW5pbWF0ZSIsImhhbWJCdG5zIiwiaGFtYkJ0bjEiLCJoYW1iQnRuMiIsImhhbWJCdG4zIiwic3BOYXYiLCJzcE5hdkxpc3RzIiwic3BOYXZMaW5rIiwiZmFkZVRpbWUiLCJ0b2dnbGVOYXYiLCJoaWRlIiwiZmFkZVRvZ2dsZSIsInRvZ2dsZUNsYXNzIiwiaHJlZiIsInRhcmdldCIsInBvc2l0aW9uIiwiZml4UHgiLCJ1cmwiLCJsb2NhdGlvbiIsImluZGV4T2YiLCJpZE5hbWUiLCJzcGxpdCIsInBvcyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInByb3AiLCJwYXJlbnRzIiwibWF0Y2giLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwid2QiLCJ3aGVlbERlbHRhIiwiY3NwIiwicGFnZVlPZmZzZXQiLCJzY3JvbGxUbyIsInRyaWdnZXIiLCJpc0luRWZmZWN0IiwidGVzdCIsImluQXJyYXkiLCJmbiIsImRlZmF1bHRzIiwiaW5FZmZlY3RzIiwiaXNPdXRFZmZlY3QiLCJvdXRFZmZlY3RzIiwic3RyaW5nVG9Cb29sZWFuIiwic3RyIiwiZ2V0RGF0YSIsIm5vZGUiLCJhdHRycyIsImF0dHJpYnV0ZXMiLCJkYXRhIiwibm9kZU5hbWUiLCJyZXBsYWNlIiwibm9kZVZhbHVlIiwib3V0IiwibyIsIngiLCJwYXJzZUludCIsIk1hdGgiLCJyYW5kb20iLCIkdCIsImNiIiwib25lIiwiYW5pbWF0ZVRva2VucyIsIiR0b2tlbnMiLCJvcHRpb25zIiwidGhhdCIsImNvdW50IiwicmV2ZXJzZSIsInRvQXJyYXkiLCJ0IiwiJHRva2VuIiwiY29tcGxldGUiLCJzeW5jIiwidGV4dCIsInNldFRpbWVvdXQiLCJUZXh0aWxsYXRlIiwiZWxlbWVudCIsImJhc2UiLCIkZWxlbWVudCIsImluaXQiLCIkdGV4dHMiLCJmaW5kIiwic2VsZWN0b3IiLCJodG1sIiwiJGN1cnJlbnQiLCJwcmVwZW5kVG8iLCJzZXRPcHRpb25zIiwidGltZW91dFJ1biIsImF1dG9TdGFydCIsInN0YXJ0IiwiaW5pdGlhbERlbGF5IiwidHJpZ2dlckV2ZW50IiwibmFtZSIsImUiLCJFdmVudCIsImluZGV4IiwiJGVsZW0iLCJleHRlbmQiLCJsZXR0ZXJpbmciLCJ0eXBlIiwiY3VycmVudEluZGV4IiwiY2FsbGJhY2siLCJyZW1vdmVBdHRyIiwicnVuIiwiY2hpbGRyZW4iLCJsb29wIiwibWluRGlzcGxheVRpbWUiLCJzdG9wIiwiY2xlYXJJbnRlcnZhbCIsInNldHRpbmdzIiwiYXJncyIsIiR0aGlzIiwiYXBwbHkiLCJjb25jYXQiLCJjYWxsIiwialF1ZXJ5IiwiaW5qZWN0b3IiLCJzcGxpdHRlciIsImtsYXNzIiwiYWZ0ZXIiLCJhIiwiaW5qZWN0IiwiaXRlbSIsImVtcHR5IiwiYXBwZW5kIiwibWV0aG9kcyIsIndvcmRzIiwibGluZXMiLCJyIiwicmVwbGFjZVdpdGgiLCJlbmQiLCJtZXRob2QiLCJzbGljZSIsImFyZ3VtZW50cyIsImVycm9yIiwiZGVmaW5lIiwibiIsImR1cmF0aW9uIiwic3RhZ2dlciIsImVhc2luZyIsIm5vb3AiLCIkZWxtIiwiaXMiLCIkcGF0aHMiLCJ0b3RhbER1cmF0aW9uIiwiZ2V0VG90YWxMZW5ndGgiLCJwYXRoTGVuIiwic3R5bGUiLCJzdHJva2VEYXNoYXJyYXkiLCJqb2luIiwic3Ryb2tlRGFzaG9mZnNldCIsInByb3RvdHlwZSIsImdldFZhbCIsInByb2dyZXNzIiwicyIsInN0ZXAiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxXQUFXLG1CQUFPLENBQUMsK0NBQVM7O0FBRTVCO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ0xBLGFBQWEsbUJBQU8sQ0FBQyxtREFBVztBQUNoQyxnQkFBZ0IsbUJBQU8sQ0FBQyx5REFBYztBQUN0QyxxQkFBcUIsbUJBQU8sQ0FBQyxtRUFBbUI7O0FBRWhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNIQSxhQUFhLG1CQUFPLENBQUMsbURBQVc7O0FBRWhDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzdDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDckJBLGlCQUFpQixtQkFBTyxDQUFDLDJEQUFlOztBQUV4QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ1JBLGVBQWUsbUJBQU8sQ0FBQyxxREFBWTtBQUNuQyxVQUFVLG1CQUFPLENBQUMsMkNBQU87QUFDekIsZUFBZSxtQkFBTyxDQUFDLHFEQUFZOztBQUVuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPLFlBQVk7QUFDOUIsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsOENBQThDLGtCQUFrQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUM5TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUM5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IFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vd29yay9qcy9jb21tb24vY29tbW9uLmpzXCIpO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG4iLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBub3cgPSByZXF1aXJlKCcuL25vdycpLFxuICAgIHRvTnVtYmVyID0gcmVxdWlyZSgnLi90b051bWJlcicpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgdGltZVdhaXRpbmcgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG5cbiAgICByZXR1cm4gbWF4aW5nXG4gICAgICA/IG5hdGl2ZU1pbih0aW1lV2FpdGluZywgbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZva2UpXG4gICAgICA6IHRpbWVXYWl0aW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lO1xuXG4gICAgLy8gRWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwsIGFjdGl2aXR5IGhhcyBzdG9wcGVkIGFuZCB3ZSdyZSBhdCB0aGVcbiAgICAvLyB0cmFpbGluZyBlZGdlLCB0aGUgc3lzdGVtIHRpbWUgaGFzIGdvbmUgYmFja3dhcmRzIGFuZCB3ZSdyZSB0cmVhdGluZ1xuICAgIC8vIGl0IGFzIHRoZSB0cmFpbGluZyBlZGdlLCBvciB3ZSd2ZSBoaXQgdGhlIGBtYXhXYWl0YCBsaW1pdC5cbiAgICByZXR1cm4gKGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8ICh0aW1lU2luY2VMYXN0Q2FsbCA+PSB3YWl0KSB8fFxuICAgICAgKHRpbWVTaW5jZUxhc3RDYWxsIDwgMCkgfHwgKG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVyRXhwaXJlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfVxuICAgIC8vIFJlc3RhcnQgdGhlIHRpbWVyLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgcmVtYWluaW5nV2FpdCh0aW1lKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFpbGluZ0VkZ2UodGltZSkge1xuICAgIHRpbWVySWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBPbmx5IGludm9rZSBpZiB3ZSBoYXZlIGBsYXN0QXJnc2Agd2hpY2ggbWVhbnMgYGZ1bmNgIGhhcyBiZWVuXG4gICAgLy8gZGVib3VuY2VkIGF0IGxlYXN0IG9uY2UuXG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gICAgbGFzdEludm9rZVRpbWUgPSAwO1xuICAgIGxhc3RBcmdzID0gbGFzdENhbGxUaW1lID0gbGFzdFRoaXMgPSB0aW1lcklkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgcmV0dXJuIHRpbWVySWQgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRyYWlsaW5nRWRnZShub3coKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKSxcbiAgICAgICAgaXNJbnZva2luZyA9IHNob3VsZEludm9rZSh0aW1lKTtcblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lO1xuXG4gICAgaWYgKGlzSW52b2tpbmcpIHtcbiAgICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdFZGdlKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW5nKSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnZvY2F0aW9ucyBpbiBhIHRpZ2h0IGxvb3AuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZTtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbm93O1xuIiwidmFyIGRlYm91bmNlID0gcmVxdWlyZSgnLi9kZWJvdW5jZScpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKipcbiAqIENyZWF0ZXMgYSB0aHJvdHRsZWQgZnVuY3Rpb24gdGhhdCBvbmx5IGludm9rZXMgYGZ1bmNgIGF0IG1vc3Qgb25jZSBwZXJcbiAqIGV2ZXJ5IGB3YWl0YCBtaWxsaXNlY29uZHMuIFRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgXG4gKiBtZXRob2QgdG8gY2FuY2VsIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvXG4gKiBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS4gUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2BcbiAqIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZSBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGBcbiAqIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZCB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGVcbiAqIHRocm90dGxlZCBmdW5jdGlvbi4gU3Vic2VxdWVudCBjYWxscyB0byB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uIHJldHVybiB0aGVcbiAqIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2AgaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIHRocm90dGxlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy50aHJvdHRsZWAgYW5kIGBfLmRlYm91bmNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHRocm90dGxlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRocm90dGxlIGludm9jYXRpb25zIHRvLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHRocm90dGxlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgZXhjZXNzaXZlbHkgdXBkYXRpbmcgdGhlIHBvc2l0aW9uIHdoaWxlIHNjcm9sbGluZy5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdzY3JvbGwnLCBfLnRocm90dGxlKHVwZGF0ZVBvc2l0aW9uLCAxMDApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHJlbmV3VG9rZW5gIHdoZW4gdGhlIGNsaWNrIGV2ZW50IGlzIGZpcmVkLCBidXQgbm90IG1vcmUgdGhhbiBvbmNlIGV2ZXJ5IDUgbWludXRlcy5cbiAqIHZhciB0aHJvdHRsZWQgPSBfLnRocm90dGxlKHJlbmV3VG9rZW4sIDMwMDAwMCwgeyAndHJhaWxpbmcnOiBmYWxzZSB9KTtcbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCB0aHJvdHRsZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgdGhyb3R0bGVkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCB0aHJvdHRsZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGVhZGluZyA9IHRydWUsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICdsZWFkaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLmxlYWRpbmcgOiBsZWFkaW5nO1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cbiAgcmV0dXJuIGRlYm91bmNlKGZ1bmMsIHdhaXQsIHtcbiAgICAnbGVhZGluZyc6IGxlYWRpbmcsXG4gICAgJ21heFdhaXQnOiB3YWl0LFxuICAgICd0cmFpbGluZyc6IHRyYWlsaW5nXG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRocm90dGxlO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9OdW1iZXI7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgJy4uL21vZHVsZS9jb21tb24ucGx1Z2luJztcclxuaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC90aHJvdHRsZSc7XHJcblxyXG4vLy8vLy8vLy8vLy9zY3JvbGxFdmVudHNfc3RhcnQvLy8vLy8vLy8vLy9cclxuJChmdW5jdGlvbiAoKSB7XHJcblxyXG5cdC8vbmF2SGVhZGVyU2hvd192YXJpYWJsZXNcclxuXHR2YXIgY2xvbmVOYXYgPSAkKCcjbmF2SGVhZGVyJykuY2xvbmUoKS5hdHRyKCdpZCcsICdjbG9uZU5hdicpLmFkZENsYXNzKCdjbG9uZU5hdicpLmluc2VydEFmdGVyKCcjbmF2SGVhZGVyJyk7XHJcblx0dmFyIGxvZ29Nb3ZlID0gJCgnLmxvZ29Gb2xsb3c6bGFzdCcpO1xyXG5cdHZhciBzaG93Q2xhc3MgPSAnaXNTaG93JztcclxuXHQvL3Nob3dVcF92YXJpYWJsZXNcclxuXHR2YXIgZm9yU2hvdzEgPSAkKCcuZm9yU2hvdzEnKTtcclxuXHR2YXIgZm9yU2hvdzIgPSAkKCcuZm9yU2hvdzInKTtcclxuXHR2YXIgZm9yU2hvdzMgPSAkKCcuZm9yU2hvdzMnKTtcclxuXHR2YXIgZm9yU2hvdzQgPSAkKCcuZm9yU2hvdzQnKTtcclxuXHR2YXIgZm9yU2hvd3MgPSBbZm9yU2hvdzEsIGZvclNob3cyLCBmb3JTaG93MywgZm9yU2hvdzRdO1xyXG5cdC8vdGV4dGlsbGF0ZV92YXJpYWJsZXNcclxuXHR2YXIgaGVhZGluZyA9ICQoJy5oZWFkaW5nJyk7XHJcblx0Ly9jb21tZW50QW5pbV92YXJpYWJsZXNcclxuXHR2YXIgY29tbWVudEFuaW0gPSAkKCcjY29tbWVudEFuaW0nKTtcclxuXHQvL3JvbGxCYWNrX3ZhcmlhYmxlc1xyXG5cdHZhciByb2xsQmFjayA9ICQoJyNyb2xsQmFjaycpO1xyXG5cdC8vaGVsbG9Nb2dpX3ZhcmlhYmxlc1xyXG5cdHZhciBtb2dpRm9vdGVyID0gJCgnI21vZ2lGb290ZXInKTtcclxuXHR2YXIgY29udGVudHNIZWlnaHQgPSAkKGRvY3VtZW50KS5oZWlnaHQoKTtcclxuXHJcblx0Ly8vL3Njcm9sbEV2ZW50cy8vLy9cclxuXHQkKHdpbmRvdykub24oJ3Njcm9sbCcsIHRocm90dGxlKGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHQvL2NvbW1vbl92YXJpYWJsZXNcclxuXHRcdHZhciB3aW5kb3dIZWlnaHQgPSAkKHRoaXMpLmhlaWdodCgpO1xyXG5cdFx0dmFyIHNjcm9sbCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcblxyXG5cdFx0Ly9uYXZIZWFkZXJTaG93X2Z1bmNcclxuXHRcdGlmIChzY3JvbGwgPiA3MDApIHtcclxuXHRcdFx0bG9nb01vdmUuY3NzKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpO1xyXG5cdFx0XHRjbG9uZU5hdi5hZGRDbGFzcyhzaG93Q2xhc3MpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y2xvbmVOYXYucmVtb3ZlQ2xhc3Moc2hvd0NsYXNzKTtcclxuXHRcdH1cclxuXHRcdC8vc2hvd1VwX2Z1bmNcclxuXHRcdHZhciBsZW4gPSBmb3JTaG93cy5sZW5ndGg7XHJcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGxlbjsgaisrKSB7XHJcblx0XHRcdGZvclNob3dzW2pdLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuXHRcdFx0XHR2YXIgZm9yU2hvd1BvaW50ID0gJCh0aGlzKS5vZmZzZXQoKS50b3AgLSAzMDtcclxuXHRcdFx0XHR2YXIgZGVsYXlUaW1lID0gOTA7XHJcblx0XHRcdFx0aWYgKHNjcm9sbCA+IGZvclNob3dQb2ludCAtIHdpbmRvd0hlaWdodCkge1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5kZWxheShpICogZGVsYXlUaW1lKS5xdWV1ZShmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ3Nob3dVcCcpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdC8vdGV4dGlsbGF0ZV9mdW5jXHJcblx0XHRoZWFkaW5nLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR2YXIgaGVhZGluZ1BvaW50ID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XHJcblx0XHRcdGlmIChzY3JvbGwgPiBoZWFkaW5nUG9pbnQgLSB3aW5kb3dIZWlnaHQpIHtcclxuXHRcdFx0XHQkKHRoaXMpLmNzcygnb3BhY2l0eScsIDEpLnRleHRpbGxhdGUoe1xyXG5cdFx0XHRcdFx0aW46IHtcclxuXHRcdFx0XHRcdFx0ZWZmZWN0OiAnZmFkZUluVXAnLFxyXG5cdFx0XHRcdFx0XHRzaHVmZmxlOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRkZWxheTogMjAsXHJcblx0XHRcdFx0XHRcdGRlbGF5U2NhbGU6IDMsXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0Ly9jb21tZW50QW5pbV9mdW5jXHJcblx0XHRpZiAoY29tbWVudEFuaW0ubGVuZ3RoKSB7XHJcblx0XHRcdHZhciBteUNvbW1lbnRQb2ludCA9IGNvbW1lbnRBbmltLm9mZnNldCgpLnRvcDtcclxuXHRcdFx0aWYgKHNjcm9sbCA+IG15Q29tbWVudFBvaW50IC0gd2luZG93SGVpZ2h0KSB7XHJcblx0XHRcdFx0Y29tbWVudEFuaW0uY3NzKCdvcGFjaXR5JywgMSkuYWRkQ2xhc3MoJ2FuaW1hdGVkIHpvb21JbkRvd24nKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ly9yb2xsQmFja19mdW5jXHJcblx0XHRpZiAoc2Nyb2xsID4gNzAwKSB7XHJcblx0XHRcdHJvbGxCYWNrLmZhZGVJbig1MDApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cm9sbEJhY2suZmFkZU91dCg1MDApO1xyXG5cdFx0fVxyXG5cdFx0Ly9oZWxsb01vZ2lfZnVuY1xyXG5cdFx0aWYgKGNvbnRlbnRzSGVpZ2h0IC0gKHNjcm9sbCArIHdpbmRvd0hlaWdodCkgPCAxMDApIHtcclxuXHRcdFx0bW9naUZvb3Rlci5zaG93KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdoZWxsb01vZ2knKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAobW9naUZvb3Rlci5oYXNDbGFzcygnaGVsbG9Nb2dpJykpIHtcclxuXHRcdFx0XHRtb2dpRm9vdGVyLmZhZGVPdXQoMjAwLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdoZWxsb01vZ2knKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHR9LCAxNTApKTtcclxuXHQvLy8vc2Nyb2xsRXZlbnRzLy8vL1xyXG5cclxuXHQvLy8vb3B0aW9uYWxfZnVuYy8vLy9cclxuXHQvL3JvbGxCYWNrQ2xpY2tlZFxyXG5cdHJvbGxCYWNrLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHRcdCQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgNzAwLCAnZWFzZUluT3V0UXVhcnQnKTtcclxuXHR9KTtcclxuXHQvLy8vb3B0aW9uYWxfZnVuYy8vLy9cclxuXHJcbn0pO1xyXG4vLy8vLy8vLy8vLy9zY3JvbGxFdmVudHNfZW5kLy8vLy8vLy8vLy8vXHJcblxyXG4vLy8vLy8vLy8vLy9zcE5hdkhlYWRlci8vLy8vLy8vLy8vL1xyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgaGFtYkJ0bnMgPSAkKCcjaGFtYkJ0bicpO1xyXG5cdHZhciBoYW1iQnRuMSA9ICQoJy5oYW1iQnRuMScpO1xyXG5cdHZhciBoYW1iQnRuMiA9ICQoJy5oYW1iQnRuMicpO1xyXG5cdHZhciBoYW1iQnRuMyA9ICQoJy5oYW1iQnRuMycpO1xyXG5cdHZhciBzcE5hdiA9ICQoJyNzcE5hdkhlYWRlcicpO1xyXG5cdHZhciBzcE5hdkxpc3RzID0gJCgnLnNwTmF2SGVhZGVyIHVsIGxpJyk7XHJcblx0dmFyIHNwTmF2TGluayA9ICQoJyNzcE5hdkhlYWRlciBsaSBhJyk7XHJcblx0dmFyIGRlbGF5VGltZSA9IDgwO1xyXG5cdHZhciBmYWRlVGltZSA9IDIwMDtcclxuXHRoYW1iQnRucy5jbGljayhmdW5jdGlvbiAoKSB7XHJcblx0XHR0b2dnbGVOYXYoKTtcclxuXHRcdGlmIChzcE5hdkxpc3RzLmNzcygnZGlzcGxheScpID09ICdsaXN0LWl0ZW0nKSB7XHJcblx0XHRcdHNwTmF2TGlzdHMuZmFkZU91dChmYWRlVGltZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzcE5hdkxpc3RzLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuXHRcdFx0XHQkKHRoaXMpLmRlbGF5KGkgKiBkZWxheVRpbWUpLmZhZGVJbihmYWRlVGltZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdHNwTmF2TGluay5jbGljayhmdW5jdGlvbiAoKSB7XHJcblx0XHR0b2dnbGVOYXYoKTtcclxuXHRcdHNwTmF2TGlzdHMuaGlkZSgpO1xyXG5cdH0pO1xyXG5cdGZ1bmN0aW9uIHRvZ2dsZU5hdigpIHtcclxuXHRcdGlmICghc3BOYXYuaGFzQ2xhc3MoJ2lzLXNob3cnKSkge1xyXG5cdFx0XHRzcE5hdi5mYWRlVG9nZ2xlKGZhZGVUaW1lKS50b2dnbGVDbGFzcygnaXMtc2hvdycpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3BOYXYuZmFkZVRvZ2dsZShmYWRlVGltZSwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ2lzLXNob3cnKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRoYW1iQnRuMS50b2dnbGVDbGFzcygnaGFtYk1vdmUxJyk7XHJcblx0XHRoYW1iQnRuMi50b2dnbGVDbGFzcygnaGFtYk1vdmUyJyk7XHJcblx0XHRoYW1iQnRuMy50b2dnbGVDbGFzcygnaGFtYk1vdmUzJyk7XHJcblx0fVxyXG59KTtcclxuLy8vLy8vLy8vLy8vc3BOYXZIZWFkZXIvLy8vLy8vLy8vLy9cclxuLy/ihpFjYW4gbm90IHJlcGxhY2XihpMvL1xyXG4vLy8vLy8vLy8vLy9zbW9vdGhTY3JvbGwvLy8vLy8vLy8vLy9cclxuJChmdW5jdGlvbiAoKSB7XHJcblx0JCgnLm5hdkhlYWRlciBhW2hyZWZePVwiI1wiXScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHRcdHZhciBocmVmID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcblx0XHR2YXIgdGFyZ2V0ID0gJChocmVmID09ICcjJyB8fCBocmVmID09PSAnJyA/ICdodG1sJyA6IGhyZWYpO1xyXG5cdFx0dmFyIHBvc2l0aW9uID0gdGFyZ2V0Lm9mZnNldCgpLnRvcDtcclxuXHRcdGlmIChocmVmID09PSAnI2NvbnRhY3QnKSB7XHJcblx0XHRcdCQoJ2h0bWwsYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IHBvc2l0aW9uIH0sIDcwMCwgJ2Vhc2VJbk91dFF1YXJ0Jyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkKCdodG1sLGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiBwb3NpdGlvbiAtIDUwIH0sIDcwMCwgJ2Vhc2VJbk91dFF1YXJ0Jyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblx0JCgnI3NwTmF2SGVhZGVyIGFbaHJlZl49XCIjXCJdJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cdFx0dmFyIGhyZWYgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuXHRcdHZhciB0YXJnZXQgPSAkKGhyZWYgPT0gJyMnIHx8IGhyZWYgPT09ICcnID8gJ2h0bWwnIDogaHJlZik7XHJcblx0XHR2YXIgcG9zaXRpb24gPSB0YXJnZXQub2Zmc2V0KCkudG9wO1xyXG5cdFx0aWYgKGhyZWYgPT09ICcjY29udGFjdCcpIHtcclxuXHRcdFx0JCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogcG9zaXRpb24gKyAxMDAgfSwgNzAwLCAnZWFzZUluT3V0UXVhcnQnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCQoJ2h0bWwsYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IHBvc2l0aW9uICsgNTAgfSwgNzAwLCAnZWFzZUluT3V0UXVhcnQnKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxufSk7XHJcbi8vLy8vLy8vLy8vL3Ntb290aFNjcm9sbC8vLy8vLy8vLy8vL1xyXG5cclxuLy8vLy8vLy8vLy8vb3RoZXJwYWdlIHRvIGZyb250cGFnZS8vLy8vLy8vLy8vL1xyXG4kKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0dmFyIGZpeFB4ID0gLTUwO1xyXG5cdHZhciB1cmwgPSAkKGxvY2F0aW9uKS5hdHRyKCdocmVmJyk7XHJcblx0aWYgKHVybC5pbmRleE9mKFwiP2lkPVwiKSAhPSAtMSkge1xyXG5cdFx0dmFyIGlkTmFtZSA9IHVybC5zcGxpdChcIj9pZD1cIik7XHJcblx0XHR2YXIgdGFyZ2V0ID0gJCgnIycgKyBpZE5hbWVbaWROYW1lLmxlbmd0aCAtIDFdKTtcclxuXHRcdGlmICh0YXJnZXQubGVuZ3RoKSB7XHJcblx0XHRcdHZhciBwb3MgPSB0YXJnZXQub2Zmc2V0KCkudG9wICsgZml4UHg7XHJcblx0XHRcdGlmICgobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdpUGhvbmUnKSA+IDAgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdpUGFkJykgPT0gLTEpIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignaVBvZCcpID4gMCB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0FuZHJvaWQnKSA+IDApIHtcclxuXHRcdFx0XHRpZiAodGFyZ2V0LnByb3AoJ2lkJykgPT0gXCJjb250YWN0XCIpIHtcclxuXHRcdFx0XHRcdCQoXCJodG1sLCBib2R5XCIpLnNjcm9sbFRvcChwb3MgKyAxNTApO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkKFwiaHRtbCwgYm9keVwiKS5zY3JvbGxUb3AocG9zICsgMTAwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKHRhcmdldC5wcm9wKCdpZCcpID09IFwiY29udGFjdFwiKSB7XHJcblx0XHRcdFx0XHQkKFwiaHRtbCwgYm9keVwiKS5zY3JvbGxUb3AocG9zICsgNTApO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkKFwiaHRtbCwgYm9keVwiKS5zY3JvbGxUb3AocG9zKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn0pO1xyXG4vLy8vLy8vLy8vLy9vdGhlcnBhZ2UgdG8gZnJvbnRwYWdlLy8vLy8vLy8vLy8vXHJcblxyXG4vLy8vLy8vLy8vLy9tb2RhbC8vLy8vLy8vLy8vL1xyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHQkKCcubW9kYWxPcGVuJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKCQodGhpcykucGFyZW50cygnI3NwTmF2SGVhZGVyJylbMF0pIHtcclxuXHRcdFx0JCgnI21vZGFsQXJlYScpLnNob3coKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCQoJyNtb2RhbEFyZWEnKS5mYWRlSW4oKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHQkKCcjbW9kYWxDbG9zZSwjbW9kYWxPdXRlcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHRcdCQoJyNtb2RhbEFyZWEnKS5mYWRlT3V0KCk7XHJcblx0fSk7XHJcbn0pO1xyXG4vLy8vLy8vLy8vLy9tb2RhbC8vLy8vLy8vLy8vL1xyXG5cclxuLy8vLy8vLy8vLy8vc2Nyb2xsIGNvbnRyb2wgZm9yIGZ1Y2tpbidJRTExLy8vLy8vLy8vLy8vXHJcbmlmIChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9NU0lFIDEwL2kpIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1RyaWRlbnRcXC83XFwuLykgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvRWRnZVxcLzEyXFwuLykpIHtcclxuXHQkKCdib2R5Jykub24oXCJtb3VzZXdoZWVsXCIsIGZ1bmN0aW9uICgpIHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR2YXIgd2QgPSBldmVudC53aGVlbERlbHRhO1xyXG5cdFx0dmFyIGNzcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLCBjc3AgLSB3ZCk7XHJcblx0fSk7XHJcbn1cclxuLy8vLy8vLy8vLy8vc2Nyb2xsIGNvbnRyb2wgZm9yIGZ1Y2tpbidJRTExLy8vLy8vLy8vLy8vXHJcblxyXG4vLy8vLy8vLy8vLy9zY3JvbGxUcmlnZ2VyQWxsLWJvdHRvbUZpeEFic29sdXRlbHkhISEvLy8vLy8vLy8vLy9cclxuJChmdW5jdGlvbiAoKSB7XHJcblx0JCh3aW5kb3cpLnRyaWdnZXIoJ3Njcm9sbCcpO1xyXG59KTtcclxuLy8vLy8vLy8vLy8vc2Nyb2xsVHJpZ2dlckFsbC1ib3R0b21GaXhBYnNvbHV0ZWx5ISEhLy8vLy8vLy8vLy8vXHJcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXHJcbi8vLy8vLy8vLy8vLy8vdGV4dGlsbGF0ZS5qcy8vLy8vLy8vLy8vLy8vXHJcbi8qXHJcbiAqIHRleHRpbGxhdGUuanNcclxuICogaHR0cDovL2pzY2hyLmdpdGh1Yi5jb20vdGV4dGlsbGF0ZVxyXG4gKiBNSVQgbGljZW5zZWRcclxuICpcclxuICogQ29weXJpZ2h0IChDKSAyMDEyLTIwMTMgSm9yZGFuIFNjaHJvdGVyXHJcbiAqL1xyXG5cclxuKGZ1bmN0aW9uICgkKSB7XHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdGZ1bmN0aW9uIGlzSW5FZmZlY3QoZWZmZWN0KSB7XHJcblx0XHRyZXR1cm4gL0luLy50ZXN0KGVmZmVjdCkgfHwgJC5pbkFycmF5KGVmZmVjdCwgJC5mbi50ZXh0aWxsYXRlLmRlZmF1bHRzLmluRWZmZWN0cykgPj0gMDtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGlzT3V0RWZmZWN0KGVmZmVjdCkge1xyXG5cdFx0cmV0dXJuIC9PdXQvLnRlc3QoZWZmZWN0KSB8fCAkLmluQXJyYXkoZWZmZWN0LCAkLmZuLnRleHRpbGxhdGUuZGVmYXVsdHMub3V0RWZmZWN0cykgPj0gMDtcclxuXHR9XHJcblxyXG5cclxuXHRmdW5jdGlvbiBzdHJpbmdUb0Jvb2xlYW4oc3RyKSB7XHJcblx0XHRpZiAoc3RyICE9PSBcInRydWVcIiAmJiBzdHIgIT09IFwiZmFsc2VcIikgcmV0dXJuIHN0cjtcclxuXHRcdHJldHVybiAoc3RyID09PSBcInRydWVcIik7XHJcblx0fVxyXG5cclxuXHQvLyBjdXN0b20gZ2V0IGRhdGEgYXBpIG1ldGhvZFxyXG5cdGZ1bmN0aW9uIGdldERhdGEobm9kZSkge1xyXG5cdFx0dmFyIGF0dHJzID0gbm9kZS5hdHRyaWJ1dGVzIHx8IFtdXHJcblx0XHRcdCwgZGF0YSA9IHt9O1xyXG5cclxuXHRcdGlmICghYXR0cnMubGVuZ3RoKSByZXR1cm4gZGF0YTtcclxuXHJcblx0XHQkLmVhY2goYXR0cnMsIGZ1bmN0aW9uIChpLCBhdHRyKSB7XHJcblx0XHRcdHZhciBub2RlTmFtZSA9IGF0dHIubm9kZU5hbWUucmVwbGFjZSgvZGVsYXlzY2FsZS8sICdkZWxheVNjYWxlJyk7XHJcblx0XHRcdGlmICgvXmRhdGEtaW4tKi8udGVzdChub2RlTmFtZSkpIHtcclxuXHRcdFx0XHRkYXRhLmluID0gZGF0YS5pbiB8fCB7fTtcclxuXHRcdFx0XHRkYXRhLmluW25vZGVOYW1lLnJlcGxhY2UoL2RhdGEtaW4tLywgJycpXSA9IHN0cmluZ1RvQm9vbGVhbihhdHRyLm5vZGVWYWx1ZSk7XHJcblx0XHRcdH0gZWxzZSBpZiAoL15kYXRhLW91dC0qLy50ZXN0KG5vZGVOYW1lKSkge1xyXG5cdFx0XHRcdGRhdGEub3V0ID0gZGF0YS5vdXQgfHwge307XHJcblx0XHRcdFx0ZGF0YS5vdXRbbm9kZU5hbWUucmVwbGFjZSgvZGF0YS1vdXQtLywgJycpXSA9IHN0cmluZ1RvQm9vbGVhbihhdHRyLm5vZGVWYWx1ZSk7XHJcblx0XHRcdH0gZWxzZSBpZiAoL15kYXRhLSovLnRlc3Qobm9kZU5hbWUpKSB7XHJcblx0XHRcdFx0ZGF0YVtub2RlTmFtZS5yZXBsYWNlKC9kYXRhLS8sICcnKV0gPSBzdHJpbmdUb0Jvb2xlYW4oYXR0ci5ub2RlVmFsdWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gZGF0YTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHNodWZmbGUobykge1xyXG5cdFx0Zm9yICh2YXIgaiwgeCwgaSA9IG8ubGVuZ3RoOyBpOyBqID0gcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIGkpLCB4ID0gb1stLWldLCBvW2ldID0gb1tqXSwgb1tqXSA9IHgpO1xyXG5cdFx0cmV0dXJuIG87XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBhbmltYXRlKCR0LCBlZmZlY3QsIGNiKSB7XHJcblx0XHQkdC5hZGRDbGFzcygnYW5pbWF0ZWQgJyArIGVmZmVjdClcclxuXHRcdFx0LmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJylcclxuXHRcdFx0LnNob3coKTtcclxuXHJcblx0XHQkdC5vbmUoJ3dlYmtpdEFuaW1hdGlvbkVuZCBtb3pBbmltYXRpb25FbmQgTVNBbmltYXRpb25FbmQgb2FuaW1hdGlvbmVuZCBhbmltYXRpb25lbmQnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdCR0LnJlbW92ZUNsYXNzKCdhbmltYXRlZCAnICsgZWZmZWN0KTtcclxuXHRcdFx0Y2IgJiYgY2IoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYW5pbWF0ZVRva2VucygkdG9rZW5zLCBvcHRpb25zLCBjYikge1xyXG5cdFx0dmFyIHRoYXQgPSB0aGlzXHJcblx0XHRcdCwgY291bnQgPSAkdG9rZW5zLmxlbmd0aDtcclxuXHJcblx0XHRpZiAoIWNvdW50KSB7XHJcblx0XHRcdGNiICYmIGNiKCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAob3B0aW9ucy5zaHVmZmxlKSAkdG9rZW5zID0gc2h1ZmZsZSgkdG9rZW5zKTtcclxuXHRcdGlmIChvcHRpb25zLnJldmVyc2UpICR0b2tlbnMgPSAkdG9rZW5zLnRvQXJyYXkoKS5yZXZlcnNlKCk7XHJcblxyXG5cdFx0JC5lYWNoKCR0b2tlbnMsIGZ1bmN0aW9uIChpLCB0KSB7XHJcblx0XHRcdHZhciAkdG9rZW4gPSAkKHQpO1xyXG5cclxuXHRcdFx0ZnVuY3Rpb24gY29tcGxldGUoKSB7XHJcblx0XHRcdFx0aWYgKGlzSW5FZmZlY3Qob3B0aW9ucy5lZmZlY3QpKSB7XHJcblx0XHRcdFx0XHQkdG9rZW4uY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGlzT3V0RWZmZWN0KG9wdGlvbnMuZWZmZWN0KSkge1xyXG5cdFx0XHRcdFx0JHRva2VuLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y291bnQgLT0gMTtcclxuXHRcdFx0XHRpZiAoIWNvdW50ICYmIGNiKSBjYigpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgZGVsYXkgPSBvcHRpb25zLnN5bmMgPyBvcHRpb25zLmRlbGF5IDogb3B0aW9ucy5kZWxheSAqIGkgKiBvcHRpb25zLmRlbGF5U2NhbGU7XHJcblxyXG5cdFx0XHQkdG9rZW4udGV4dCgpID9cclxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgYW5pbWF0ZSgkdG9rZW4sIG9wdGlvbnMuZWZmZWN0LCBjb21wbGV0ZSk7IH0sIGRlbGF5KSA6XHJcblx0XHRcdFx0Y29tcGxldGUoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0dmFyIFRleHRpbGxhdGUgPSBmdW5jdGlvbiAoZWxlbWVudCwgb3B0aW9ucykge1xyXG5cdFx0dmFyIGJhc2UgPSB0aGlzXHJcblx0XHRcdCwgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xyXG5cclxuXHRcdGJhc2UuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0YmFzZS4kdGV4dHMgPSAkZWxlbWVudC5maW5kKG9wdGlvbnMuc2VsZWN0b3IpO1xyXG5cclxuXHRcdFx0aWYgKCFiYXNlLiR0ZXh0cy5sZW5ndGgpIHtcclxuXHRcdFx0XHRiYXNlLiR0ZXh0cyA9ICQoJzx1bCBjbGFzcz1cInRleHRzXCI+PGxpPicgKyAkZWxlbWVudC5odG1sKCkgKyAnPC9saT48L3VsPicpO1xyXG5cdFx0XHRcdCRlbGVtZW50Lmh0bWwoYmFzZS4kdGV4dHMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRiYXNlLiR0ZXh0cy5oaWRlKCk7XHJcblxyXG5cdFx0XHRiYXNlLiRjdXJyZW50ID0gJCgnPHNwYW4+JylcclxuXHRcdFx0XHQuaHRtbChiYXNlLiR0ZXh0cy5maW5kKCc6Zmlyc3QtY2hpbGQnKS5odG1sKCkpXHJcblx0XHRcdFx0LnByZXBlbmRUbygkZWxlbWVudCk7XHJcblxyXG5cdFx0XHRpZiAoaXNJbkVmZmVjdChvcHRpb25zLmluLmVmZmVjdCkpIHtcclxuXHRcdFx0XHRiYXNlLiRjdXJyZW50LmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuXHRcdFx0fSBlbHNlIGlmIChpc091dEVmZmVjdChvcHRpb25zLm91dC5lZmZlY3QpKSB7XHJcblx0XHRcdFx0YmFzZS4kY3VycmVudC5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRiYXNlLnNldE9wdGlvbnMob3B0aW9ucyk7XHJcblxyXG5cdFx0XHRiYXNlLnRpbWVvdXRSdW4gPSBudWxsO1xyXG5cclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0YmFzZS5vcHRpb25zLmF1dG9TdGFydCAmJiBiYXNlLnN0YXJ0KCk7XHJcblx0XHRcdH0sIGJhc2Uub3B0aW9ucy5pbml0aWFsRGVsYXkpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRiYXNlLnNldE9wdGlvbnMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG5cdFx0XHRiYXNlLm9wdGlvbnMgPSBvcHRpb25zO1xyXG5cdFx0fTtcclxuXHJcblx0XHRiYXNlLnRyaWdnZXJFdmVudCA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcblx0XHRcdHZhciBlID0gJC5FdmVudChuYW1lICsgJy50bHQnKTtcclxuXHRcdFx0JGVsZW1lbnQudHJpZ2dlcihlLCBiYXNlKTtcclxuXHRcdFx0cmV0dXJuIGU7XHJcblx0XHR9O1xyXG5cclxuXHRcdGJhc2UuaW4gPSBmdW5jdGlvbiAoaW5kZXgsIGNiKSB7XHJcblx0XHRcdGluZGV4ID0gaW5kZXggfHwgMDtcclxuXHJcblx0XHRcdHZhciAkZWxlbSA9IGJhc2UuJHRleHRzLmZpbmQoJzpudGgtY2hpbGQoJyArICgoaW5kZXggfHwgMCkgKyAxKSArICcpJylcclxuXHRcdFx0XHQsIG9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB7fSwgYmFzZS5vcHRpb25zLCAkZWxlbS5sZW5ndGggPyBnZXREYXRhKCRlbGVtWzBdKSA6IHt9KVxyXG5cdFx0XHRcdCwgJHRva2VucztcclxuXHJcblx0XHRcdCRlbGVtLmFkZENsYXNzKCdjdXJyZW50Jyk7XHJcblxyXG5cdFx0XHRiYXNlLnRyaWdnZXJFdmVudCgnaW5BbmltYXRpb25CZWdpbicpO1xyXG5cdFx0XHQkZWxlbWVudC5hdHRyKCdkYXRhLWFjdGl2ZScsICRlbGVtLmRhdGEoJ2lkJykpO1xyXG5cclxuXHRcdFx0YmFzZS4kY3VycmVudFxyXG5cdFx0XHRcdC5odG1sKCRlbGVtLmh0bWwoKSlcclxuXHRcdFx0XHQubGV0dGVyaW5nKCd3b3JkcycpO1xyXG5cclxuXHRcdFx0Ly8gc3BsaXQgd29yZHMgdG8gaW5kaXZpZHVhbCBjaGFyYWN0ZXJzIGlmIHRva2VuIHR5cGUgaXMgc2V0IHRvICdjaGFyJ1xyXG5cdFx0XHRpZiAoYmFzZS5vcHRpb25zLnR5cGUgPT0gXCJjaGFyXCIpIHtcclxuXHRcdFx0XHRiYXNlLiRjdXJyZW50LmZpbmQoJ1tjbGFzc149XCJ3b3JkXCJdJylcclxuXHRcdFx0XHRcdC5jc3Moe1xyXG5cdFx0XHRcdFx0XHQnZGlzcGxheSc6ICdpbmxpbmUtYmxvY2snLFxyXG5cdFx0XHRcdFx0XHQvLyBmaXggZm9yIHBvb3IgaW9zIHBlcmZvcm1hbmNlXHJcblx0XHRcdFx0XHRcdCctd2Via2l0LXRyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCgwLDAsMCknLFxyXG5cdFx0XHRcdFx0XHQnLW1vei10cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoMCwwLDApJyxcclxuXHRcdFx0XHRcdFx0Jy1vLXRyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCgwLDAsMCknLFxyXG5cdFx0XHRcdFx0XHQndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKDAsMCwwKSdcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQuZWFjaChmdW5jdGlvbiAoKSB7ICQodGhpcykubGV0dGVyaW5nKCk7IH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQkdG9rZW5zID0gYmFzZS4kY3VycmVudFxyXG5cdFx0XHRcdC5maW5kKCdbY2xhc3NePVwiJyArIGJhc2Uub3B0aW9ucy50eXBlICsgJ1wiXScpXHJcblx0XHRcdFx0LmNzcygnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcclxuXHJcblx0XHRcdGlmIChpc0luRWZmZWN0KG9wdGlvbnMuaW4uZWZmZWN0KSkge1xyXG5cdFx0XHRcdCR0b2tlbnMuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGlzT3V0RWZmZWN0KG9wdGlvbnMuaW4uZWZmZWN0KSkge1xyXG5cdFx0XHRcdCR0b2tlbnMuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YmFzZS5jdXJyZW50SW5kZXggPSBpbmRleDtcclxuXHJcblx0XHRcdGFuaW1hdGVUb2tlbnMoJHRva2Vucywgb3B0aW9ucy5pbiwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGJhc2UudHJpZ2dlckV2ZW50KCdpbkFuaW1hdGlvbkVuZCcpO1xyXG5cdFx0XHRcdGlmIChvcHRpb25zLmluLmNhbGxiYWNrKSBvcHRpb25zLmluLmNhbGxiYWNrKCk7XHJcblx0XHRcdFx0aWYgKGNiKSBjYihiYXNlKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGJhc2Uub3V0ID0gZnVuY3Rpb24gKGNiKSB7XHJcblx0XHRcdHZhciAkZWxlbSA9IGJhc2UuJHRleHRzLmZpbmQoJzpudGgtY2hpbGQoJyArICgoYmFzZS5jdXJyZW50SW5kZXggfHwgMCkgKyAxKSArICcpJylcclxuXHRcdFx0XHQsICR0b2tlbnMgPSBiYXNlLiRjdXJyZW50LmZpbmQoJ1tjbGFzc149XCInICsgYmFzZS5vcHRpb25zLnR5cGUgKyAnXCJdJylcclxuXHRcdFx0XHQsIG9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB7fSwgYmFzZS5vcHRpb25zLCAkZWxlbS5sZW5ndGggPyBnZXREYXRhKCRlbGVtWzBdKSA6IHt9KTtcclxuXHJcblx0XHRcdGJhc2UudHJpZ2dlckV2ZW50KCdvdXRBbmltYXRpb25CZWdpbicpO1xyXG5cclxuXHRcdFx0YW5pbWF0ZVRva2VucygkdG9rZW5zLCBvcHRpb25zLm91dCwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdCRlbGVtLnJlbW92ZUNsYXNzKCdjdXJyZW50Jyk7XHJcblx0XHRcdFx0YmFzZS50cmlnZ2VyRXZlbnQoJ291dEFuaW1hdGlvbkVuZCcpO1xyXG5cdFx0XHRcdCRlbGVtZW50LnJlbW92ZUF0dHIoJ2RhdGEtYWN0aXZlJyk7XHJcblx0XHRcdFx0aWYgKG9wdGlvbnMub3V0LmNhbGxiYWNrKSBvcHRpb25zLm91dC5jYWxsYmFjaygpO1xyXG5cdFx0XHRcdGlmIChjYikgY2IoYmFzZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fTtcclxuXHJcblx0XHRiYXNlLnN0YXJ0ID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGJhc2UudHJpZ2dlckV2ZW50KCdzdGFydCcpO1xyXG5cclxuXHRcdFx0XHQoZnVuY3Rpb24gcnVuKGluZGV4KSB7XHJcblx0XHRcdFx0XHRiYXNlLmluKGluZGV4LCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdHZhciBsZW5ndGggPSBiYXNlLiR0ZXh0cy5jaGlsZHJlbigpLmxlbmd0aDtcclxuXHJcblx0XHRcdFx0XHRcdGluZGV4ICs9IDE7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIWJhc2Uub3B0aW9ucy5sb29wICYmIGluZGV4ID49IGxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChiYXNlLm9wdGlvbnMuY2FsbGJhY2spIGJhc2Uub3B0aW9ucy5jYWxsYmFjaygpO1xyXG5cdFx0XHRcdFx0XHRcdGJhc2UudHJpZ2dlckV2ZW50KCdlbmQnKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRpbmRleCA9IGluZGV4ICUgbGVuZ3RoO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRiYXNlLnRpbWVvdXRSdW4gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGJhc2Uub3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cnVuKGluZGV4KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH0sIGJhc2Uub3B0aW9ucy5taW5EaXNwbGF5VGltZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0oaW5kZXggfHwgMCkpO1xyXG5cdFx0XHR9LCBiYXNlLm9wdGlvbnMuaW5pdGlhbERlbGF5KTtcclxuXHRcdH07XHJcblxyXG5cdFx0YmFzZS5zdG9wID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAoYmFzZS50aW1lb3V0UnVuKSB7XHJcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChiYXNlLnRpbWVvdXRSdW4pO1xyXG5cdFx0XHRcdGJhc2UudGltZW91dFJ1biA9IG51bGw7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0YmFzZS5pbml0KCk7XHJcblx0fTtcclxuXHJcblx0JC5mbi50ZXh0aWxsYXRlID0gZnVuY3Rpb24gKHNldHRpbmdzLCBhcmdzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKVxyXG5cdFx0XHRcdCwgZGF0YSA9ICR0aGlzLmRhdGEoJ3RleHRpbGxhdGUnKVxyXG5cdFx0XHRcdCwgb3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHt9LCAkLmZuLnRleHRpbGxhdGUuZGVmYXVsdHMsIGdldERhdGEodGhpcyksIHR5cGVvZiBzZXR0aW5ncyA9PSAnb2JqZWN0JyAmJiBzZXR0aW5ncyk7XHJcblxyXG5cdFx0XHRpZiAoIWRhdGEpIHtcclxuXHRcdFx0XHQkdGhpcy5kYXRhKCd0ZXh0aWxsYXRlJywgKGRhdGEgPSBuZXcgVGV4dGlsbGF0ZSh0aGlzLCBvcHRpb25zKSkpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBzZXR0aW5ncyA9PSAnc3RyaW5nJykge1xyXG5cdFx0XHRcdGRhdGFbc2V0dGluZ3NdLmFwcGx5KGRhdGEsIFtdLmNvbmNhdChhcmdzKSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZGF0YS5zZXRPcHRpb25zLmNhbGwoZGF0YSwgb3B0aW9ucyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdCQuZm4udGV4dGlsbGF0ZS5kZWZhdWx0cyA9IHtcclxuXHRcdHNlbGVjdG9yOiAnLnRleHRzJyxcclxuXHRcdGxvb3A6IGZhbHNlLFxyXG5cdFx0bWluRGlzcGxheVRpbWU6IDIwMDAsXHJcblx0XHRpbml0aWFsRGVsYXk6IDAsXHJcblx0XHRpbjoge1xyXG5cdFx0XHRlZmZlY3Q6ICdmYWRlSW5MZWZ0QmlnJyxcclxuXHRcdFx0ZGVsYXlTY2FsZTogMS41LFxyXG5cdFx0XHRkZWxheTogNTAsXHJcblx0XHRcdHN5bmM6IGZhbHNlLFxyXG5cdFx0XHRyZXZlcnNlOiBmYWxzZSxcclxuXHRcdFx0c2h1ZmZsZTogZmFsc2UsXHJcblx0XHRcdGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7IH1cclxuXHRcdH0sXHJcblx0XHRvdXQ6IHtcclxuXHRcdFx0ZWZmZWN0OiAnaGluZ2UnLFxyXG5cdFx0XHRkZWxheVNjYWxlOiAxLjUsXHJcblx0XHRcdGRlbGF5OiA1MCxcclxuXHRcdFx0c3luYzogZmFsc2UsXHJcblx0XHRcdHJldmVyc2U6IGZhbHNlLFxyXG5cdFx0XHRzaHVmZmxlOiBmYWxzZSxcclxuXHRcdFx0Y2FsbGJhY2s6IGZ1bmN0aW9uICgpIHsgfVxyXG5cdFx0fSxcclxuXHRcdGF1dG9TdGFydDogdHJ1ZSxcclxuXHRcdGluRWZmZWN0czogW10sXHJcblx0XHRvdXRFZmZlY3RzOiBbJ2hpbmdlJ10sXHJcblx0XHRjYWxsYmFjazogZnVuY3Rpb24gKCkgeyB9LFxyXG5cdFx0dHlwZTogJ2NoYXInXHJcblx0fTtcclxuXHJcbn0oalF1ZXJ5KSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vL0xldHRlcmluZy5qcy8vLy8vLy8vLy8vLy8vXHJcbi8qZ2xvYmFsIGpRdWVyeSAqL1xyXG4vKiFcdFxyXG4qIExldHRlcmluZy5KUyAwLjYuMVxyXG4qXHJcbiogQ29weXJpZ2h0IDIwMTAsIERhdmUgUnVwZXJ0IGh0dHA6Ly9kYXZlcnVwZXJ0LmNvbVxyXG4qIFJlbGVhc2VkIHVuZGVyIHRoZSBXVEZQTCBsaWNlbnNlIFxyXG4qIGh0dHA6Ly9zYW0uem95Lm9yZy93dGZwbC9cclxuKlxyXG4qIFRoYW5rcyB0byBQYXVsIElyaXNoIC0gaHR0cDovL3BhdWxpcmlzaC5jb20gLSBmb3IgdGhlIGZlZWRiYWNrLlxyXG4qXHJcbiogRGF0ZTogTW9uIFNlcCAyMCAxNzoxNDowMCAyMDEwIC0wNjAwXHJcbiovXHJcbihmdW5jdGlvbiAoJCkge1xyXG5cdGZ1bmN0aW9uIGluamVjdG9yKHQsIHNwbGl0dGVyLCBrbGFzcywgYWZ0ZXIpIHtcclxuXHRcdHZhciBhID0gdC50ZXh0KCkuc3BsaXQoc3BsaXR0ZXIpLCBpbmplY3QgPSAnJztcclxuXHRcdGlmIChhLmxlbmd0aCkge1xyXG5cdFx0XHQkKGEpLmVhY2goZnVuY3Rpb24gKGksIGl0ZW0pIHtcclxuXHRcdFx0XHRpbmplY3QgKz0gJzxzcGFuIGNsYXNzPVwiJyArIGtsYXNzICsgKGkgKyAxKSArICdcIj4nICsgaXRlbSArICc8L3NwYW4+JyArIGFmdGVyO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dC5lbXB0eSgpLmFwcGVuZChpbmplY3QpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dmFyIG1ldGhvZHMgPSB7XHJcblx0XHRpbml0OiBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRpbmplY3RvcigkKHRoaXMpLCAnJywgJ2NoYXInLCAnJyk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0d29yZHM6IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGluamVjdG9yKCQodGhpcyksICcgJywgJ3dvcmQnLCAnICcpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdGxpbmVzOiBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR2YXIgciA9IFwiZWVmZWMzMDMwNzlhZDE3NDA1Yzg4OWUwOTJlMTA1YjBcIjtcclxuXHRcdFx0XHQvLyBCZWNhdXNlIGl0J3MgaGFyZCB0byBzcGxpdCBhIDxici8+IHRhZyBjb25zaXN0ZW50bHkgYWNyb3NzIGJyb3dzZXJzLFxyXG5cdFx0XHRcdC8vICgqYWhlbSogSUUgKmFoZW0qKSwgd2UgcmVwbGFjZXMgYWxsIDxici8+IGluc3RhbmNlcyB3aXRoIGFuIG1kNSBoYXNoIFxyXG5cdFx0XHRcdC8vIChvZiB0aGUgd29yZCBcInNwbGl0XCIpLiAgSWYgeW91J3JlIHRyeWluZyB0byB1c2UgdGhpcyBwbHVnaW4gb24gdGhhdCBcclxuXHRcdFx0XHQvLyBtZDUgaGFzaCBzdHJpbmcsIGl0IHdpbGwgZmFpbCBiZWNhdXNlIHlvdSdyZSBiZWluZyByaWRpY3Vsb3VzLlxyXG5cdFx0XHRcdGluamVjdG9yKCQodGhpcykuY2hpbGRyZW4oXCJiclwiKS5yZXBsYWNlV2l0aChyKS5lbmQoKSwgciwgJ2xpbmUnLCAnJyk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQkLmZuLmxldHRlcmluZyA9IGZ1bmN0aW9uIChtZXRob2QpIHtcclxuXHRcdC8vIE1ldGhvZCBjYWxsaW5nIGxvZ2ljXHJcblx0XHRpZiAobWV0aG9kICYmIG1ldGhvZHNbbWV0aG9kXSkge1xyXG5cdFx0XHRyZXR1cm4gbWV0aG9kc1ttZXRob2RdLmFwcGx5KHRoaXMsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XHJcblx0XHR9IGVsc2UgaWYgKG1ldGhvZCA9PT0gJ2xldHRlcnMnIHx8ICFtZXRob2QpIHtcclxuXHRcdFx0cmV0dXJuIG1ldGhvZHMuaW5pdC5hcHBseSh0aGlzLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkpOyAvLyBhbHdheXMgcGFzcyBhbiBhcnJheVxyXG5cdFx0fVxyXG5cdFx0JC5lcnJvcignTWV0aG9kICcgKyBtZXRob2QgKyAnIGRvZXMgbm90IGV4aXN0IG9uIGpRdWVyeS5sZXR0ZXJpbmcnKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblxyXG59KShqUXVlcnkpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy9EcmF3U1ZHLmpzLy8vLy8vLy8vLy8vLy9cclxuLyohIGpRdWVyeSBEcmF3U1ZHIHYxLjEuMCAoMjAxNi0xMC0wNSkgLSBnaXQuaW8vdkdGYTUgLSBDb3B5cmlnaHQgKGMpIDIwMTYgTGVvbmFyZG8gU2FudG9zIC0gTUlUIExpY2Vuc2UgKi9cclxuIWZ1bmN0aW9uICh0KSB7IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoW1wianF1ZXJ5XCJdLCB0KSA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cyA/IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGUsIG4pIHsgcmV0dXJuIHZvaWQgMCA9PT0gbiAmJiAobiA9IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHdpbmRvdyA/IHJlcXVpcmUoXCJqcXVlcnlcIikgOiByZXF1aXJlKFwianF1ZXJ5XCIpKGUpKSwgdChuKSwgbjsgfSA6IHQoalF1ZXJ5KTsgfShmdW5jdGlvbiAodCkgeyBcInVzZSBzdHJpY3RcIjsgdmFyIGUgPSBcImRyYXdzdmdcIiwgbiA9IHsgZHVyYXRpb246IDFlMywgc3RhZ2dlcjogMjAwLCBlYXNpbmc6IFwic3dpbmdcIiwgcmV2ZXJzZTogITEsIGNhbGxiYWNrOiB0Lm5vb3AgfSwgYSA9IGZ1bmN0aW9uICgpIHsgdmFyIGEgPSBmdW5jdGlvbiAoYSwgbykgeyB2YXIgaSA9IHRoaXMsIHIgPSB0LmV4dGVuZChuLCBvKTsgaS4kZWxtID0gdChhKSwgaS4kZWxtLmlzKFwic3ZnXCIpICYmIChpLm9wdGlvbnMgPSByLCBpLiRwYXRocyA9IGkuJGVsbS5maW5kKFwicGF0aFwiKSwgaS50b3RhbER1cmF0aW9uID0gci5kdXJhdGlvbiArIHIuc3RhZ2dlciAqIGkuJHBhdGhzLmxlbmd0aCwgaS5kdXJhdGlvbiA9IHIuZHVyYXRpb24gLyBpLnRvdGFsRHVyYXRpb24sIGkuJHBhdGhzLmVhY2goZnVuY3Rpb24gKHQsIGUpIHsgdmFyIG4gPSBlLmdldFRvdGFsTGVuZ3RoKCk7IGUucGF0aExlbiA9IG4sIGUuZGVsYXkgPSByLnN0YWdnZXIgKiB0IC8gaS50b3RhbER1cmF0aW9uLCBlLnN0eWxlLnN0cm9rZURhc2hhcnJheSA9IFtuLCBuXS5qb2luKFwiIFwiKSwgZS5zdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gbjsgfSksIGkuJGVsbS5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24gKHQsIG4pIHsgcmV0dXJuIFtuLCBlICsgXCItaW5pdGlhbGl6ZWRcIl0uam9pbihcIiBcIik7IH0pKTsgfTsgcmV0dXJuIGEucHJvdG90eXBlLmdldFZhbCA9IGZ1bmN0aW9uIChlLCBuKSB7IHJldHVybiAxIC0gdC5lYXNpbmdbbl0oZSwgZSwgMCwgMSwgMSk7IH0sIGEucHJvdG90eXBlLnByb2dyZXNzID0gZnVuY3Rpb24gKHQpIHsgdmFyIGUgPSB0aGlzLCBuID0gZS5vcHRpb25zLCBhID0gZS5kdXJhdGlvbjsgZS4kcGF0aHMuZWFjaChmdW5jdGlvbiAobywgaSkgeyB2YXIgciA9IGkuc3R5bGU7IGlmICgxID09PSB0KSByLnN0cm9rZURhc2hvZmZzZXQgPSAwOyBlbHNlIGlmICgwID09PSB0KSByLnN0cm9rZURhc2hvZmZzZXQgPSBpLnBhdGhMZW4gKyBcInB4XCI7IGVsc2UgaWYgKHQgPj0gaS5kZWxheSAmJiB0IDw9IGEgKyBpLmRlbGF5KSB7IHZhciBzID0gKHQgLSBpLmRlbGF5KSAvIGE7IHIuc3Ryb2tlRGFzaG9mZnNldCA9IGUuZ2V0VmFsKHMsIG4uZWFzaW5nKSAqIGkucGF0aExlbiAqIChuLnJldmVyc2UgPyAtMSA6IDEpICsgXCJweFwiOyB9IH0pOyB9LCBhLnByb3RvdHlwZS5hbmltYXRlID0gZnVuY3Rpb24gKCkgeyB2YXIgbiA9IHRoaXM7IG4uJGVsbS5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24gKHQsIG4pIHsgcmV0dXJuIFtuLCBlICsgXCItYW5pbWF0aW5nXCJdLmpvaW4oXCIgXCIpOyB9KSwgdCh7IGxlbjogMCB9KS5hbmltYXRlKHsgbGVuOiAxIH0sIHsgZWFzaW5nOiBcImxpbmVhclwiLCBkdXJhdGlvbjogbi50b3RhbER1cmF0aW9uLCBzdGVwOiBmdW5jdGlvbiAodCwgZSkgeyBuLnByb2dyZXNzLmNhbGwobiwgdCAvIGUuZW5kKTsgfSwgY29tcGxldGU6IGZ1bmN0aW9uICgpIHsgbi5vcHRpb25zLmNhbGxiYWNrLmNhbGwodGhpcyksIG4uJGVsbS5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24gKHQsIG4pIHsgcmV0dXJuIG4ucmVwbGFjZShlICsgXCItYW5pbWF0aW5nXCIsIFwiXCIpOyB9KTsgfSB9KTsgfSwgYTsgfSgpOyB0LmZuW2VdID0gZnVuY3Rpb24gKG4sIG8pIHsgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7IHZhciBpID0gdC5kYXRhKHRoaXMsIGUpOyBpICYmIFwiXCIgKyBuID09PSBuICYmIGlbbl0gPyBpW25dKG8pIDogdC5kYXRhKHRoaXMsIGUsIG5ldyBhKHRoaXMsIG4pKTsgfSk7IH07IH0pO1xyXG4vKiBlc2xpbnQtZW5hYmxlICovIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==