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
/******/ 	return __webpack_require__(__webpack_require__.s = "./work/js/common/frontPage.js");
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
/*! exports provided: accessFlag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accessFlag", function() { return accessFlag; });
/* harmony import */ var _module_common_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../module/common.plugin */ "./work/js/module/common.plugin.js");
/* harmony import */ var _module_common_plugin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_module_common_plugin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_1__);

 ////////////global variable////////////

var accessFlag = sessionStorage.getItem('accessed');
var body = $('body'); ////////////Draw SVG////////////

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

/***/ "./work/js/common/frontPage.js":
/*!*************************************!*\
  !*** ./work/js/common/frontPage.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_rellax_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../module/rellax.min */ "./work/js/module/rellax.min.js");
/* harmony import */ var _module_rellax_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_module_rellax_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./work/js/common/common.js");

 /////////////////////loading scripts/////////////////////

(function () {
  var loadingArea = $('#loadingArea');

  if (_common__WEBPACK_IMPORTED_MODULE_1__["accessFlag"]) {
    loadingPageRemove();
  } else {
    $(window).on('load', function () {
      loadingPageShow();
    });
  }

  function loadingPageShow() {
    setTimeout(function () {
      loadingArea.addClass('loadingFade').fadeOut(600);
    }, 1500);
    sessionStorage.setItem('accessed', true);
  }

  function loadingPageRemove() {
    loadingArea.remove();
  }
})(); /////////////////////loading scripts/////////////////////
/////////////////////juicyslider.js


$(function () {
  var myslider = $('#myslider');
  myslider.juicyslider({
    mode: "cover",
    width: '100%',
    height: '100%',
    mask: "none",
    bgcolor: "#000",
    autoplay: 8000,
    shuffle: false,
    show: {
      effect: 'fade',
      duration: 1500
    },
    hide: {
      effect: 'fade',
      duration: 1500
    }
  });
}); /////////////////////juicyslider.js
/////////////////////Rellax.js

$(function () {
  var rellax = new _module_rellax_min__WEBPACK_IMPORTED_MODULE_0___default.a('.rellax'); // eslint-disable-line
}); /////////////////////Rellax.js

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

/***/ "./work/js/module/rellax.min.js":
/*!**************************************!*\
  !*** ./work/js/module/rellax.min.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable */
(function (q, g) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (g),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})("undefined" !== typeof window ? window : global, function () {
  var q = function q(g, u) {
    function C() {
      if (3 === a.options.breakpoints.length && Array.isArray(a.options.breakpoints)) {
        var f = !0,
            c = !0,
            b;
        a.options.breakpoints.forEach(function (a) {
          "number" !== typeof a && (c = !1);
          null !== b && a < b && (f = !1);
          b = a;
        });
        if (f && c) return;
      }

      a.options.breakpoints = [576, 768, 1201];
      console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted");
    }

    var a = Object.create(q.prototype),
        l = 0,
        v = 0,
        m = 0,
        n = 0,
        d = [],
        w = !0,
        A = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (a) {
      return setTimeout(a, 1E3 / 60);
    },
        p = null,
        x = !1;

    try {
      var k = Object.defineProperty({}, "passive", {
        get: function get() {
          x = !0;
        }
      });
      window.addEventListener("testPassive", null, k);
      window.removeEventListener("testPassive", null, k);
    } catch (f) {}

    var D = window.cancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout,
        E = window.transformProp || function () {
      var a = document.createElement("div");

      if (null === a.style.transform) {
        var c = ["Webkit", "Moz", "ms"],
            b;

        for (b in c) {
          if (void 0 !== a.style[c[b] + "Transform"]) return c[b] + "Transform";
        }
      }

      return "transform";
    }();

    a.options = {
      speed: -2,
      verticalSpeed: null,
      horizontalSpeed: null,
      breakpoints: [576, 768, 1201],
      center: !1,
      wrapper: null,
      relativeToWrapper: !1,
      round: !0,
      vertical: !0,
      horizontal: !1,
      verticalScrollAxis: "y",
      horizontalScrollAxis: "x",
      callback: function callback() {}
    };
    u && Object.keys(u).forEach(function (d) {
      a.options[d] = u[d];
    });
    u && u.breakpoints && C();
    g || (g = ".rellax");
    k = "string" === typeof g ? document.querySelectorAll(g) : [g];

    if (0 < k.length) {
      a.elems = k;
      if (a.options.wrapper && !a.options.wrapper.nodeType) if (k = document.querySelector(a.options.wrapper)) a.options.wrapper = k;else {
        console.warn("Rellax: The wrapper you're trying to use doesn't exist.");
        return;
      }

      var F,
          B = function B() {
        for (var f = 0; f < d.length; f++) {
          a.elems[f].style.cssText = d[f].style;
        }

        d = [];
        v = window.innerHeight;
        n = window.innerWidth;
        f = a.options.breakpoints;
        F = n < f[0] ? "xs" : n >= f[0] && n < f[1] ? "sm" : n >= f[1] && n < f[2] ? "md" : "lg";
        H();

        for (f = 0; f < a.elems.length; f++) {
          var c = void 0,
              b = a.elems[f],
              e = b.getAttribute("data-rellax-percentage"),
              y = b.getAttribute("data-rellax-speed"),
              t = b.getAttribute("data-rellax-xs-speed"),
              g = b.getAttribute("data-rellax-mobile-speed"),
              h = b.getAttribute("data-rellax-tablet-speed"),
              k = b.getAttribute("data-rellax-desktop-speed"),
              l = b.getAttribute("data-rellax-vertical-speed"),
              m = b.getAttribute("data-rellax-horizontal-speed"),
              p = b.getAttribute("data-rellax-vertical-scroll-axis"),
              q = b.getAttribute("data-rellax-horizontal-scroll-axis"),
              u = b.getAttribute("data-rellax-zindex") || 0,
              x = b.getAttribute("data-rellax-min"),
              A = b.getAttribute("data-rellax-max"),
              C = b.getAttribute("data-rellax-min-x"),
              D = b.getAttribute("data-rellax-max-x"),
              E = b.getAttribute("data-rellax-min-y"),
              L = b.getAttribute("data-rellax-max-y"),
              r = !0;
          t || g || h || k ? c = {
            xs: t,
            sm: g,
            md: h,
            lg: k
          } : r = !1;
          t = a.options.wrapper ? a.options.wrapper.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          a.options.relativeToWrapper && (t = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) - a.options.wrapper.offsetTop);
          var z = a.options.vertical ? e || a.options.center ? t : 0 : 0,
              I = a.options.horizontal ? e || a.options.center ? a.options.wrapper ? a.options.wrapper.scrollLeft : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0 : 0;
          t = z + b.getBoundingClientRect().top;
          g = b.clientHeight || b.offsetHeight || b.scrollHeight;
          h = I + b.getBoundingClientRect().left;
          k = b.clientWidth || b.offsetWidth || b.scrollWidth;
          z = e ? e : (z - t + v) / (g + v);
          e = e ? e : (I - h + n) / (k + n);
          a.options.center && (z = e = .5);
          c = r && null !== c[F] ? Number(c[F]) : y ? y : a.options.speed;
          l = l ? l : a.options.verticalSpeed;
          m = m ? m : a.options.horizontalSpeed;
          p = p ? p : a.options.verticalScrollAxis;
          q = q ? q : a.options.horizontalScrollAxis;
          y = J(e, z, c, l, m);
          b = b.style.cssText;
          r = "";
          if (e = /transform\s*:/i.exec(b)) r = b.slice(e.index), r = (e = r.indexOf(";")) ? " " + r.slice(11, e).replace(/\s/g, "") : " " + r.slice(11).replace(/\s/g, "");
          d.push({
            baseX: y.x,
            baseY: y.y,
            top: t,
            left: h,
            height: g,
            width: k,
            speed: c,
            verticalSpeed: l,
            horizontalSpeed: m,
            verticalScrollAxis: p,
            horizontalScrollAxis: q,
            style: b,
            transform: r,
            zindex: u,
            min: x,
            max: A,
            minX: C,
            maxX: D,
            minY: E,
            maxY: L
          });
        }

        K();
        w && (window.addEventListener("resize", B), w = !1, G());
      },
          H = function H() {
        var d = l,
            c = m;
        l = a.options.wrapper ? a.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
        m = a.options.wrapper ? a.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset;
        a.options.relativeToWrapper && (l = ((document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset) - a.options.wrapper.offsetTop);
        return d != l && a.options.vertical || c != m && a.options.horizontal ? !0 : !1;
      },
          J = function J(d, c, b, e, g) {
        var f = {};
        d = 100 * (g ? g : b) * (1 - d);
        c = 100 * (e ? e : b) * (1 - c);
        f.x = a.options.round ? Math.round(d) : Math.round(100 * d) / 100;
        f.y = a.options.round ? Math.round(c) : Math.round(100 * c) / 100;
        return f;
      },
          h = function h() {
        window.removeEventListener("resize", h);
        window.removeEventListener("orientationchange", h);
        (a.options.wrapper ? a.options.wrapper : window).removeEventListener("scroll", h);
        (a.options.wrapper ? a.options.wrapper : document).removeEventListener("touchmove", h);
        p = A(G);
      },
          G = function G() {
        H() && !1 === w ? (K(), p = A(G)) : (p = null, window.addEventListener("resize", h), window.addEventListener("orientationchange", h), (a.options.wrapper ? a.options.wrapper : window).addEventListener("scroll", h, x ? {
          passive: !0
        } : !1), (a.options.wrapper ? a.options.wrapper : document).addEventListener("touchmove", h, x ? {
          passive: !0
        } : !1));
      },
          K = function K() {
        for (var f, c = 0; c < a.elems.length; c++) {
          var b = d[c].verticalScrollAxis.toLowerCase(),
              e = d[c].horizontalScrollAxis.toLowerCase();
          f = -1 != b.indexOf("x") ? l : 0;
          b = -1 != b.indexOf("y") ? l : 0;
          var g = -1 != e.indexOf("x") ? m : 0;
          e = -1 != e.indexOf("y") ? m : 0;
          f = J((f + g - d[c].left + n) / (d[c].width + n), (b + e - d[c].top + v) / (d[c].height + v), d[c].speed, d[c].verticalSpeed, d[c].horizontalSpeed);
          e = f.y - d[c].baseY;
          b = f.x - d[c].baseX;
          null !== d[c].min && (a.options.vertical && !a.options.horizontal && (e = e <= d[c].min ? d[c].min : e), a.options.horizontal && !a.options.vertical && (b = b <= d[c].min ? d[c].min : b));
          null != d[c].minY && (e = e <= d[c].minY ? d[c].minY : e);
          null != d[c].minX && (b = b <= d[c].minX ? d[c].minX : b);
          null !== d[c].max && (a.options.vertical && !a.options.horizontal && (e = e >= d[c].max ? d[c].max : e), a.options.horizontal && !a.options.vertical && (b = b >= d[c].max ? d[c].max : b));
          null != d[c].maxY && (e = e >= d[c].maxY ? d[c].maxY : e);
          null != d[c].maxX && (b = b >= d[c].maxX ? d[c].maxX : b);
          a.elems[c].style[E] = "translate3d(" + (a.options.horizontal ? b : "0") + "px," + (a.options.vertical ? e : "0") + "px," + d[c].zindex + "px) " + d[c].transform;
        }

        a.options.callback(f);
      };

      a.destroy = function () {
        for (var f = 0; f < a.elems.length; f++) {
          a.elems[f].style.cssText = d[f].style;
        }

        w || (window.removeEventListener("resize", B), w = !0);
        D(p);
        p = null;
      };

      B();
      a.refresh = B;
      return a;
    }

    console.warn("Rellax: The elements you're trying to select don't exist.");
  };

  return q;
});
/* eslint-enable */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2RlYm91bmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3Rocm90dGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9OdW1iZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi93b3JrL2pzL2NvbW1vbi9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vd29yay9qcy9jb21tb24vZnJvbnRQYWdlLmpzIiwid2VicGFjazovLy8uL3dvcmsvanMvbW9kdWxlL2NvbW1vbi5wbHVnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vd29yay9qcy9tb2R1bGUvcmVsbGF4Lm1pbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJhY2Nlc3NGbGFnIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiYm9keSIsIiQiLCJteWNMb2dvIiwiZHJhd3N2ZyIsImR1cmF0aW9uIiwic3RhZ2dlciIsImVhc2luZyIsImNhbGxiYWNrIiwiYWRkQ2xhc3MiLCJoYXNDbGFzcyIsInNldFRpbWVvdXQiLCJjc3MiLCJjbG9uZU5hdiIsImNsb25lIiwiYXR0ciIsImluc2VydEFmdGVyIiwibG9nb01vdmUiLCJzaG93Q2xhc3MiLCJmb3JTaG93MSIsImZvclNob3cyIiwiZm9yU2hvdzMiLCJmb3JTaG93NCIsImZvclNob3dzIiwiaGVhZGluZyIsImNvbW1lbnRBbmltIiwicm9sbEJhY2siLCJtb2dpRm9vdGVyIiwiY29udGVudHNIZWlnaHQiLCJkb2N1bWVudCIsImhlaWdodCIsIndpbmRvdyIsIm9uIiwidGhyb3R0bGUiLCJ3aW5kb3dIZWlnaHQiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJyZW1vdmVDbGFzcyIsImxlbiIsImxlbmd0aCIsImoiLCJlYWNoIiwiaSIsImZvclNob3dQb2ludCIsIm9mZnNldCIsInRvcCIsImRlbGF5VGltZSIsImRlbGF5IiwicXVldWUiLCJoZWFkaW5nUG9pbnQiLCJ0ZXh0aWxsYXRlIiwiaW4iLCJlZmZlY3QiLCJzaHVmZmxlIiwiZGVsYXlTY2FsZSIsIm15Q29tbWVudFBvaW50IiwiZmFkZUluIiwiZmFkZU91dCIsInNob3ciLCJjbGljayIsImFuaW1hdGUiLCJoYW1iQnRucyIsImhhbWJCdG4xIiwiaGFtYkJ0bjIiLCJoYW1iQnRuMyIsInNwTmF2Iiwic3BOYXZMaXN0cyIsInNwTmF2TGluayIsImZhZGVUaW1lIiwidG9nZ2xlTmF2IiwiaGlkZSIsImZhZGVUb2dnbGUiLCJ0b2dnbGVDbGFzcyIsImhyZWYiLCJ0YXJnZXQiLCJwb3NpdGlvbiIsImZpeFB4IiwidXJsIiwibG9jYXRpb24iLCJpbmRleE9mIiwiaWROYW1lIiwic3BsaXQiLCJwb3MiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJwcm9wIiwicGFyZW50cyIsIm1hdGNoIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIndkIiwid2hlZWxEZWx0YSIsImNzcCIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG8iLCJ0cmlnZ2VyIiwibG9hZGluZ0FyZWEiLCJsb2FkaW5nUGFnZVJlbW92ZSIsImxvYWRpbmdQYWdlU2hvdyIsInNldEl0ZW0iLCJyZW1vdmUiLCJteXNsaWRlciIsImp1aWN5c2xpZGVyIiwibW9kZSIsIndpZHRoIiwibWFzayIsImJnY29sb3IiLCJhdXRvcGxheSIsInJlbGxheCIsIlJlbGxheCIsImlzSW5FZmZlY3QiLCJ0ZXN0IiwiaW5BcnJheSIsImZuIiwiZGVmYXVsdHMiLCJpbkVmZmVjdHMiLCJpc091dEVmZmVjdCIsIm91dEVmZmVjdHMiLCJzdHJpbmdUb0Jvb2xlYW4iLCJzdHIiLCJnZXREYXRhIiwibm9kZSIsImF0dHJzIiwiYXR0cmlidXRlcyIsImRhdGEiLCJub2RlTmFtZSIsInJlcGxhY2UiLCJub2RlVmFsdWUiLCJvdXQiLCJvIiwieCIsInBhcnNlSW50IiwiTWF0aCIsInJhbmRvbSIsIiR0IiwiY2IiLCJvbmUiLCJhbmltYXRlVG9rZW5zIiwiJHRva2VucyIsIm9wdGlvbnMiLCJ0aGF0IiwiY291bnQiLCJyZXZlcnNlIiwidG9BcnJheSIsInQiLCIkdG9rZW4iLCJjb21wbGV0ZSIsInN5bmMiLCJ0ZXh0IiwiVGV4dGlsbGF0ZSIsImVsZW1lbnQiLCJiYXNlIiwiJGVsZW1lbnQiLCJpbml0IiwiJHRleHRzIiwiZmluZCIsInNlbGVjdG9yIiwiaHRtbCIsIiRjdXJyZW50IiwicHJlcGVuZFRvIiwic2V0T3B0aW9ucyIsInRpbWVvdXRSdW4iLCJhdXRvU3RhcnQiLCJzdGFydCIsImluaXRpYWxEZWxheSIsInRyaWdnZXJFdmVudCIsIm5hbWUiLCJlIiwiRXZlbnQiLCJpbmRleCIsIiRlbGVtIiwiZXh0ZW5kIiwibGV0dGVyaW5nIiwidHlwZSIsImN1cnJlbnRJbmRleCIsInJlbW92ZUF0dHIiLCJydW4iLCJjaGlsZHJlbiIsImxvb3AiLCJtaW5EaXNwbGF5VGltZSIsInN0b3AiLCJjbGVhckludGVydmFsIiwic2V0dGluZ3MiLCJhcmdzIiwiJHRoaXMiLCJhcHBseSIsImNvbmNhdCIsImNhbGwiLCJqUXVlcnkiLCJpbmplY3RvciIsInNwbGl0dGVyIiwia2xhc3MiLCJhZnRlciIsImEiLCJpbmplY3QiLCJpdGVtIiwiZW1wdHkiLCJhcHBlbmQiLCJtZXRob2RzIiwid29yZHMiLCJsaW5lcyIsInIiLCJyZXBsYWNlV2l0aCIsImVuZCIsIm1ldGhvZCIsInNsaWNlIiwiYXJndW1lbnRzIiwiZXJyb3IiLCJkZWZpbmUiLCJuIiwibm9vcCIsIiRlbG0iLCJpcyIsIiRwYXRocyIsInRvdGFsRHVyYXRpb24iLCJnZXRUb3RhbExlbmd0aCIsInBhdGhMZW4iLCJzdHlsZSIsInN0cm9rZURhc2hhcnJheSIsImpvaW4iLCJzdHJva2VEYXNob2Zmc2V0IiwicHJvdG90eXBlIiwiZ2V0VmFsIiwicHJvZ3Jlc3MiLCJzIiwic3RlcCIsInEiLCJnIiwiZ2xvYmFsIiwidSIsIkMiLCJicmVha3BvaW50cyIsIkFycmF5IiwiaXNBcnJheSIsImYiLCJjIiwiYiIsImZvckVhY2giLCJjb25zb2xlIiwid2FybiIsIk9iamVjdCIsImNyZWF0ZSIsImwiLCJ2IiwibSIsImQiLCJ3IiwiQSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib1JlcXVlc3RBbmltYXRpb25GcmFtZSIsInAiLCJrIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJUaW1lb3V0IiwiRSIsInRyYW5zZm9ybVByb3AiLCJjcmVhdGVFbGVtZW50IiwidHJhbnNmb3JtIiwic3BlZWQiLCJ2ZXJ0aWNhbFNwZWVkIiwiaG9yaXpvbnRhbFNwZWVkIiwiY2VudGVyIiwid3JhcHBlciIsInJlbGF0aXZlVG9XcmFwcGVyIiwicm91bmQiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbFNjcm9sbEF4aXMiLCJob3Jpem9udGFsU2Nyb2xsQXhpcyIsImtleXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbXMiLCJub2RlVHlwZSIsInF1ZXJ5U2VsZWN0b3IiLCJGIiwiQiIsImNzc1RleHQiLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJIIiwiZ2V0QXR0cmlidXRlIiwieSIsImgiLCJMIiwieHMiLCJzbSIsIm1kIiwibGciLCJkb2N1bWVudEVsZW1lbnQiLCJvZmZzZXRUb3AiLCJ6IiwiSSIsInNjcm9sbExlZnQiLCJwYWdlWE9mZnNldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudEhlaWdodCIsIm9mZnNldEhlaWdodCIsInNjcm9sbEhlaWdodCIsImxlZnQiLCJjbGllbnRXaWR0aCIsIm9mZnNldFdpZHRoIiwic2Nyb2xsV2lkdGgiLCJOdW1iZXIiLCJKIiwiZXhlYyIsInB1c2giLCJiYXNlWCIsImJhc2VZIiwiemluZGV4IiwibWluIiwibWF4IiwibWluWCIsIm1heFgiLCJtaW5ZIiwibWF4WSIsIksiLCJHIiwicGFyZW50Tm9kZSIsInBhc3NpdmUiLCJ0b0xvd2VyQ2FzZSIsImRlc3Ryb3kiLCJyZWZyZXNoIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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QUtqQixLQUFoQztBQUF4Qzs7QUFBK0U2QixTQUFDLEtBQUt2TixNQUFNLENBQUNtTyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQzBCLENBQXJDLEdBQXlDdEMsQ0FBQyxHQUFHLENBQUMsQ0FBbkQsQ0FBRDtBQUF3RGEsU0FBQyxDQUFDTixDQUFELENBQUQ7QUFBTUEsU0FBQyxHQUFHLElBQUo7QUFBVSxPQUFqTDs7QUFBbUwrQixPQUFDO0FBQUkzRixPQUFDLENBQUN5SSxPQUFGLEdBQVk5QyxDQUFaO0FBQWUsYUFBTzNGLENBQVA7QUFDdk07O0FBQUM2QyxXQUFPLENBQUNDLElBQVIsQ0FBYSwyREFBYjtBQUNILEdBakNEOztBQWlDRyxTQUFPYixDQUFQO0FBQ0gsQ0FuQ0Q7QUFvQ0EsbUI7Ozs7Ozs7Ozs7OztBQ3JDQSx3QiIsImZpbGUiOiJmcm9udFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3dvcmsvanMvY29tbW9uL2Zyb250UGFnZS5qc1wiKTtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgbm93ID0gcmVxdWlyZSgnLi9ub3cnKSxcbiAgICB0b051bWJlciA9IHJlcXVpcmUoJy4vdG9OdW1iZXInKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0byBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS5cbiAqIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZVxuICogbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZFxuICogd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbi4gU3Vic2VxdWVudFxuICogY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2BcbiAqIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXguXG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIEludm9rZSBgc2VuZE1haWxgIHdoZW4gY2xpY2tlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzLlxuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gRW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxscy5cbiAqIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHsgJ21heFdhaXQnOiAxMDAwIH0pO1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBkZWJvdW5jZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgZGVib3VuY2VkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCBkZWJvdW5jZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lLFxuICAgICAgbGFzdEludm9rZVRpbWUgPSAwLFxuICAgICAgbGVhZGluZyA9IGZhbHNlLFxuICAgICAgbWF4aW5nID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHRpbWVXYWl0aW5nID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuXG4gICAgcmV0dXJuIG1heGluZ1xuICAgICAgPyBuYXRpdmVNaW4odGltZVdhaXRpbmcsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKVxuICAgICAgOiB0aW1lV2FpdGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTtcblxuICAgIC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG4gICAgcmV0dXJuIChsYXN0Q2FsbFRpbWUgPT09IHVuZGVmaW5lZCB8fCAodGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCkgfHxcbiAgICAgICh0aW1lU2luY2VMYXN0Q2FsbCA8IDApIHx8IChtYXhpbmcgJiYgdGltZVNpbmNlTGFzdEludm9rZSA+PSBtYXhXYWl0KSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0cmFpbGluZyAmJiBsYXN0QXJncykge1xuICAgICAgcmV0dXJuIGludm9rZUZ1bmModGltZSk7XG4gICAgfVxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcblxuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2U7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N5bWJvbDtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKipcbiAqIEdldHMgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZVxuICogdGhlIFVuaXggZXBvY2ggKDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IERhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHRpbWVzdGFtcC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBMb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBpbnZvY2F0aW9uLlxuICovXG52YXIgbm93ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByb290LkRhdGUubm93KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vdztcbiIsInZhciBkZWJvdW5jZSA9IHJlcXVpcmUoJy4vZGVib3VuY2UnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgdGhyb3R0bGVkIGZ1bmN0aW9uIHRoYXQgb25seSBpbnZva2VzIGBmdW5jYCBhdCBtb3N0IG9uY2UgcGVyXG4gKiBldmVyeSBgd2FpdGAgbWlsbGlzZWNvbmRzLiBUaGUgdGhyb3R0bGVkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYFxuICogbWV0aG9kIHRvIGNhbmNlbCBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0b1xuICogaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgXG4gKiBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGUgbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgXG4gKiB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWQgd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlXG4gKiB0aHJvdHRsZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnQgY2FsbHMgdG8gdGhlIHRocm90dGxlZCBmdW5jdGlvbiByZXR1cm4gdGhlXG4gKiByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8udGhyb3R0bGVgIGFuZCBgXy5kZWJvdW5jZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB0aHJvdHRsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aHJvdHRsZSBpbnZvY2F0aW9ucyB0by5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyB0aHJvdHRsZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGV4Y2Vzc2l2ZWx5IHVwZGF0aW5nIHRoZSBwb3NpdGlvbiB3aGlsZSBzY3JvbGxpbmcuXG4gKiBqUXVlcnkod2luZG93KS5vbignc2Nyb2xsJywgXy50aHJvdHRsZSh1cGRhdGVQb3NpdGlvbiwgMTAwKSk7XG4gKlxuICogLy8gSW52b2tlIGByZW5ld1Rva2VuYCB3aGVuIHRoZSBjbGljayBldmVudCBpcyBmaXJlZCwgYnV0IG5vdCBtb3JlIHRoYW4gb25jZSBldmVyeSA1IG1pbnV0ZXMuXG4gKiB2YXIgdGhyb3R0bGVkID0gXy50aHJvdHRsZShyZW5ld1Rva2VuLCAzMDAwMDAsIHsgJ3RyYWlsaW5nJzogZmFsc2UgfSk7XG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgdGhyb3R0bGVkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIHRocm90dGxlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgdGhyb3R0bGVkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxlYWRpbmcgPSB0cnVlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAnbGVhZGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy5sZWFkaW5nIDogbGVhZGluZztcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG4gIHJldHVybiBkZWJvdW5jZShmdW5jLCB3YWl0LCB7XG4gICAgJ2xlYWRpbmcnOiBsZWFkaW5nLFxuICAgICdtYXhXYWl0Jzogd2FpdCxcbiAgICAndHJhaWxpbmcnOiB0cmFpbGluZ1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0aHJvdHRsZTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvTnVtYmVyO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0ICcuLi9tb2R1bGUvY29tbW9uLnBsdWdpbic7XHJcbmltcG9ydCB0aHJvdHRsZSBmcm9tICdsb2Rhc2gvdGhyb3R0bGUnO1xyXG5cclxuLy8vLy8vLy8vLy8vZ2xvYmFsIHZhcmlhYmxlLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjb25zdCBhY2Nlc3NGbGFnID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzZWQnKTtcclxuY29uc3QgYm9keSA9ICQoJ2JvZHknKTtcclxuXHJcbi8vLy8vLy8vLy8vL0RyYXcgU1ZHLy8vLy8vLy8vLy8vXHJcbihmdW5jdGlvbiAoKSB7XHJcblx0dmFyIG15Y0xvZ28gPSAkKFwiI215Y0xvZ29cIikuZHJhd3N2Zyh7XHJcblx0XHRkdXJhdGlvbjogMTAwMCxcclxuXHRcdHN0YWdnZXI6IDgwLFxyXG5cdFx0ZWFzaW5nOiBcInN3aW5nXCIsXHJcblx0XHRjYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHQkKFwiI215Y0xvZ28gZ1wiKS5hZGRDbGFzcyhcImZpbGxBbmltXCIpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdGlmICghYWNjZXNzRmxhZyAmJiBib2R5Lmhhc0NsYXNzKCdob21lJykpIHtcclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRteWNMb2dvLmNzcyhcIm9wYWNpdHlcIiwgMSkuZHJhd3N2ZyhcImFuaW1hdGVcIik7XHJcblx0XHR9LCAxODAwKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0bXljTG9nby5jc3MoXCJvcGFjaXR5XCIsIDEpLmRyYXdzdmcoXCJhbmltYXRlXCIpO1xyXG5cdH1cclxufSkoKTtcclxuXHJcbi8vLy8vLy8vLy8vL3Njcm9sbEV2ZW50c19zdGFydC8vLy8vLy8vLy8vL1xyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHJcblx0Ly9uYXZIZWFkZXJTaG93X3ZhcmlhYmxlc1xyXG5cdHZhciBjbG9uZU5hdiA9ICQoJyNuYXZIZWFkZXInKS5jbG9uZSgpLmF0dHIoJ2lkJywgJ2Nsb25lTmF2JykuYWRkQ2xhc3MoJ2Nsb25lTmF2JykuaW5zZXJ0QWZ0ZXIoJyNuYXZIZWFkZXInKTtcclxuXHR2YXIgbG9nb01vdmUgPSAkKCcubG9nb0ZvbGxvdzpsYXN0Jyk7XHJcblx0dmFyIHNob3dDbGFzcyA9ICdpc1Nob3cnO1xyXG5cdC8vc2hvd1VwX3ZhcmlhYmxlc1xyXG5cdHZhciBmb3JTaG93MSA9ICQoJy5mb3JTaG93MScpO1xyXG5cdHZhciBmb3JTaG93MiA9ICQoJy5mb3JTaG93MicpO1xyXG5cdHZhciBmb3JTaG93MyA9ICQoJy5mb3JTaG93MycpO1xyXG5cdHZhciBmb3JTaG93NCA9ICQoJy5mb3JTaG93NCcpO1xyXG5cdHZhciBmb3JTaG93cyA9IFtmb3JTaG93MSwgZm9yU2hvdzIsIGZvclNob3czLCBmb3JTaG93NF07XHJcblx0Ly90ZXh0aWxsYXRlX3ZhcmlhYmxlc1xyXG5cdHZhciBoZWFkaW5nID0gJCgnLmhlYWRpbmcnKTtcclxuXHQvL2NvbW1lbnRBbmltX3ZhcmlhYmxlc1xyXG5cdHZhciBjb21tZW50QW5pbSA9ICQoJyNjb21tZW50QW5pbScpO1xyXG5cdC8vcm9sbEJhY2tfdmFyaWFibGVzXHJcblx0dmFyIHJvbGxCYWNrID0gJCgnI3JvbGxCYWNrJyk7XHJcblx0Ly9oZWxsb01vZ2lfdmFyaWFibGVzXHJcblx0dmFyIG1vZ2lGb290ZXIgPSAkKCcjbW9naUZvb3RlcicpO1xyXG5cdHZhciBjb250ZW50c0hlaWdodCA9ICQoZG9jdW1lbnQpLmhlaWdodCgpO1xyXG5cclxuXHQvLy8vc2Nyb2xsRXZlbnRzLy8vL1xyXG5cdCQod2luZG93KS5vbignc2Nyb2xsJywgdGhyb3R0bGUoZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdC8vY29tbW9uX3ZhcmlhYmxlc1xyXG5cdFx0dmFyIHdpbmRvd0hlaWdodCA9ICQodGhpcykuaGVpZ2h0KCk7XHJcblx0XHR2YXIgc2Nyb2xsID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuXHJcblx0XHQvL25hdkhlYWRlclNob3dfZnVuY1xyXG5cdFx0aWYgKHNjcm9sbCA+IDcwMCkge1xyXG5cdFx0XHRsb2dvTW92ZS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XHJcblx0XHRcdGNsb25lTmF2LmFkZENsYXNzKHNob3dDbGFzcyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjbG9uZU5hdi5yZW1vdmVDbGFzcyhzaG93Q2xhc3MpO1xyXG5cdFx0fVxyXG5cdFx0Ly9zaG93VXBfZnVuY1xyXG5cdFx0dmFyIGxlbiA9IGZvclNob3dzLmxlbmd0aDtcclxuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgbGVuOyBqKyspIHtcclxuXHRcdFx0Zm9yU2hvd3Nbal0uZWFjaChmdW5jdGlvbiAoaSkge1xyXG5cdFx0XHRcdHZhciBmb3JTaG93UG9pbnQgPSAkKHRoaXMpLm9mZnNldCgpLnRvcCAtIDMwO1xyXG5cdFx0XHRcdHZhciBkZWxheVRpbWUgPSA5MDtcclxuXHRcdFx0XHRpZiAoc2Nyb2xsID4gZm9yU2hvd1BvaW50IC0gd2luZG93SGVpZ2h0KSB7XHJcblx0XHRcdFx0XHQkKHRoaXMpLmRlbGF5KGkgKiBkZWxheVRpbWUpLnF1ZXVlKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnc2hvd1VwJyk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0Ly90ZXh0aWxsYXRlX2Z1bmNcclxuXHRcdGhlYWRpbmcuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHZhciBoZWFkaW5nUG9pbnQgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcclxuXHRcdFx0aWYgKHNjcm9sbCA+IGhlYWRpbmdQb2ludCAtIHdpbmRvd0hlaWdodCkge1xyXG5cdFx0XHRcdCQodGhpcykuY3NzKCdvcGFjaXR5JywgMSkudGV4dGlsbGF0ZSh7XHJcblx0XHRcdFx0XHRpbjoge1xyXG5cdFx0XHRcdFx0XHRlZmZlY3Q6ICdmYWRlSW5VcCcsXHJcblx0XHRcdFx0XHRcdHNodWZmbGU6IHRydWUsXHJcblx0XHRcdFx0XHRcdGRlbGF5OiAyMCxcclxuXHRcdFx0XHRcdFx0ZGVsYXlTY2FsZTogMyxcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHQvL2NvbW1lbnRBbmltX2Z1bmNcclxuXHRcdGlmIChjb21tZW50QW5pbS5sZW5ndGgpIHtcclxuXHRcdFx0dmFyIG15Q29tbWVudFBvaW50ID0gY29tbWVudEFuaW0ub2Zmc2V0KCkudG9wO1xyXG5cdFx0XHRpZiAoc2Nyb2xsID4gbXlDb21tZW50UG9pbnQgLSB3aW5kb3dIZWlnaHQpIHtcclxuXHRcdFx0XHRjb21tZW50QW5pbS5jc3MoJ29wYWNpdHknLCAxKS5hZGRDbGFzcygnYW5pbWF0ZWQgem9vbUluRG93bicpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQvL3JvbGxCYWNrX2Z1bmNcclxuXHRcdGlmIChzY3JvbGwgPiA3MDApIHtcclxuXHRcdFx0cm9sbEJhY2suZmFkZUluKDUwMCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyb2xsQmFjay5mYWRlT3V0KDUwMCk7XHJcblx0XHR9XHJcblx0XHQvL2hlbGxvTW9naV9mdW5jXHJcblx0XHRpZiAoY29udGVudHNIZWlnaHQgLSAoc2Nyb2xsICsgd2luZG93SGVpZ2h0KSA8IDEwMCkge1xyXG5cdFx0XHRtb2dpRm9vdGVyLnNob3coZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2hlbGxvTW9naScpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChtb2dpRm9vdGVyLmhhc0NsYXNzKCdoZWxsb01vZ2knKSkge1xyXG5cdFx0XHRcdG1vZ2lGb290ZXIuZmFkZU91dCgyMDAsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2hlbGxvTW9naScpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdH0sIDE1MCkpO1xyXG5cdC8vLy9zY3JvbGxFdmVudHMvLy8vXHJcblxyXG5cdC8vLy9vcHRpb25hbF9mdW5jLy8vL1xyXG5cdC8vcm9sbEJhY2tDbGlja2VkXHJcblx0cm9sbEJhY2suY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cdFx0JCgnYm9keSxodG1sJykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCA3MDAsICdlYXNlSW5PdXRRdWFydCcpO1xyXG5cdH0pO1xyXG5cdC8vLy9vcHRpb25hbF9mdW5jLy8vL1xyXG5cclxufSk7XHJcbi8vLy8vLy8vLy8vL3Njcm9sbEV2ZW50c19lbmQvLy8vLy8vLy8vLy9cclxuXHJcbi8vLy8vLy8vLy8vL3NwTmF2SGVhZGVyLy8vLy8vLy8vLy8vXHJcbiQoZnVuY3Rpb24gKCkge1xyXG5cdHZhciBoYW1iQnRucyA9ICQoJyNoYW1iQnRuJyk7XHJcblx0dmFyIGhhbWJCdG4xID0gJCgnLmhhbWJCdG4xJyk7XHJcblx0dmFyIGhhbWJCdG4yID0gJCgnLmhhbWJCdG4yJyk7XHJcblx0dmFyIGhhbWJCdG4zID0gJCgnLmhhbWJCdG4zJyk7XHJcblx0dmFyIHNwTmF2ID0gJCgnI3NwTmF2SGVhZGVyJyk7XHJcblx0dmFyIHNwTmF2TGlzdHMgPSAkKCcuc3BOYXZIZWFkZXIgdWwgbGknKTtcclxuXHR2YXIgc3BOYXZMaW5rID0gJCgnI3NwTmF2SGVhZGVyIGxpIGEnKTtcclxuXHR2YXIgZGVsYXlUaW1lID0gODA7XHJcblx0dmFyIGZhZGVUaW1lID0gMjAwO1xyXG5cdGhhbWJCdG5zLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHRcdHRvZ2dsZU5hdigpO1xyXG5cdFx0aWYgKHNwTmF2TGlzdHMuY3NzKCdkaXNwbGF5JykgPT0gJ2xpc3QtaXRlbScpIHtcclxuXHRcdFx0c3BOYXZMaXN0cy5mYWRlT3V0KGZhZGVUaW1lKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNwTmF2TGlzdHMuZWFjaChmdW5jdGlvbiAoaSkge1xyXG5cdFx0XHRcdCQodGhpcykuZGVsYXkoaSAqIGRlbGF5VGltZSkuZmFkZUluKGZhZGVUaW1lKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0c3BOYXZMaW5rLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHRcdHRvZ2dsZU5hdigpO1xyXG5cdFx0c3BOYXZMaXN0cy5oaWRlKCk7XHJcblx0fSk7XHJcblx0ZnVuY3Rpb24gdG9nZ2xlTmF2KCkge1xyXG5cdFx0aWYgKCFzcE5hdi5oYXNDbGFzcygnaXMtc2hvdycpKSB7XHJcblx0XHRcdHNwTmF2LmZhZGVUb2dnbGUoZmFkZVRpbWUpLnRvZ2dsZUNsYXNzKCdpcy1zaG93Jyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzcE5hdi5mYWRlVG9nZ2xlKGZhZGVUaW1lLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0JCh0aGlzKS50b2dnbGVDbGFzcygnaXMtc2hvdycpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdGhhbWJCdG4xLnRvZ2dsZUNsYXNzKCdoYW1iTW92ZTEnKTtcclxuXHRcdGhhbWJCdG4yLnRvZ2dsZUNsYXNzKCdoYW1iTW92ZTInKTtcclxuXHRcdGhhbWJCdG4zLnRvZ2dsZUNsYXNzKCdoYW1iTW92ZTMnKTtcclxuXHR9XHJcbn0pO1xyXG4vLy8vLy8vLy8vLy9zcE5hdkhlYWRlci8vLy8vLy8vLy8vL1xyXG4vL+KGkWNhbiBub3QgcmVwbGFjZeKGky8vXHJcbi8vLy8vLy8vLy8vL3Ntb290aFNjcm9sbC8vLy8vLy8vLy8vL1xyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHQkKCcubmF2SGVhZGVyIGFbaHJlZl49XCIjXCJdJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cdFx0dmFyIGhyZWYgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuXHRcdHZhciB0YXJnZXQgPSAkKGhyZWYgPT0gJyMnIHx8IGhyZWYgPT09ICcnID8gJ2h0bWwnIDogaHJlZik7XHJcblx0XHR2YXIgcG9zaXRpb24gPSB0YXJnZXQub2Zmc2V0KCkudG9wO1xyXG5cdFx0aWYgKGhyZWYgPT09ICcjY29udGFjdCcpIHtcclxuXHRcdFx0JCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogcG9zaXRpb24gfSwgNzAwLCAnZWFzZUluT3V0UXVhcnQnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCQoJ2h0bWwsYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IHBvc2l0aW9uIC0gNTAgfSwgNzAwLCAnZWFzZUluT3V0UXVhcnQnKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHQkKCcjc3BOYXZIZWFkZXIgYVtocmVmXj1cIiNcIl0nKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcblx0XHR2YXIgaHJlZiA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG5cdFx0dmFyIHRhcmdldCA9ICQoaHJlZiA9PSAnIycgfHwgaHJlZiA9PT0gJycgPyAnaHRtbCcgOiBocmVmKTtcclxuXHRcdHZhciBwb3NpdGlvbiA9IHRhcmdldC5vZmZzZXQoKS50b3A7XHJcblx0XHRpZiAoaHJlZiA9PT0gJyNjb250YWN0Jykge1xyXG5cdFx0XHQkKCdodG1sLGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiBwb3NpdGlvbiArIDEwMCB9LCA3MDAsICdlYXNlSW5PdXRRdWFydCcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogcG9zaXRpb24gKyA1MCB9LCA3MDAsICdlYXNlSW5PdXRRdWFydCcpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG59KTtcclxuLy8vLy8vLy8vLy8vc21vb3RoU2Nyb2xsLy8vLy8vLy8vLy8vXHJcblxyXG4vLy8vLy8vLy8vLy9vdGhlcnBhZ2UgdG8gZnJvbnRwYWdlLy8vLy8vLy8vLy8vXHJcbiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgZml4UHggPSAtNTA7XHJcblx0dmFyIHVybCA9ICQobG9jYXRpb24pLmF0dHIoJ2hyZWYnKTtcclxuXHRpZiAodXJsLmluZGV4T2YoXCI/aWQ9XCIpICE9IC0xKSB7XHJcblx0XHR2YXIgaWROYW1lID0gdXJsLnNwbGl0KFwiP2lkPVwiKTtcclxuXHRcdHZhciB0YXJnZXQgPSAkKCcjJyArIGlkTmFtZVtpZE5hbWUubGVuZ3RoIC0gMV0pO1xyXG5cdFx0aWYgKHRhcmdldC5sZW5ndGgpIHtcclxuXHRcdFx0dmFyIHBvcyA9IHRhcmdldC5vZmZzZXQoKS50b3AgKyBmaXhQeDtcclxuXHRcdFx0aWYgKChuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQaG9uZScpID4gMCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQYWQnKSA9PSAtMSkgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdpUG9kJykgPiAwIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQW5kcm9pZCcpID4gMCkge1xyXG5cdFx0XHRcdGlmICh0YXJnZXQucHJvcCgnaWQnKSA9PSBcImNvbnRhY3RcIikge1xyXG5cdFx0XHRcdFx0JChcImh0bWwsIGJvZHlcIikuc2Nyb2xsVG9wKHBvcyArIDE1MCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdCQoXCJodG1sLCBib2R5XCIpLnNjcm9sbFRvcChwb3MgKyAxMDApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAodGFyZ2V0LnByb3AoJ2lkJykgPT0gXCJjb250YWN0XCIpIHtcclxuXHRcdFx0XHRcdCQoXCJodG1sLCBib2R5XCIpLnNjcm9sbFRvcChwb3MgKyA1MCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdCQoXCJodG1sLCBib2R5XCIpLnNjcm9sbFRvcChwb3MpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufSk7XHJcbi8vLy8vLy8vLy8vL290aGVycGFnZSB0byBmcm9udHBhZ2UvLy8vLy8vLy8vLy9cclxuXHJcbi8vLy8vLy8vLy8vL21vZGFsLy8vLy8vLy8vLy8vXHJcbiQoZnVuY3Rpb24gKCkge1xyXG5cdCQoJy5tb2RhbE9wZW4nKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAoJCh0aGlzKS5wYXJlbnRzKCcjc3BOYXZIZWFkZXInKVswXSkge1xyXG5cdFx0XHQkKCcjbW9kYWxBcmVhJykuc2hvdygpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JCgnI21vZGFsQXJlYScpLmZhZGVJbigpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdCQoJyNtb2RhbENsb3NlLCNtb2RhbE91dGVyJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cdFx0JCgnI21vZGFsQXJlYScpLmZhZGVPdXQoKTtcclxuXHR9KTtcclxufSk7XHJcbi8vLy8vLy8vLy8vL21vZGFsLy8vLy8vLy8vLy8vXHJcblxyXG4vLy8vLy8vLy8vLy9zY3JvbGwgY29udHJvbCBmb3IgZnVja2luJ0lFMTEvLy8vLy8vLy8vLy9cclxuaWYgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL01TSUUgMTAvaSkgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVHJpZGVudFxcLzdcXC4vKSB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvMTJcXC4vKSkge1xyXG5cdCQoJ2JvZHknKS5vbihcIm1vdXNld2hlZWxcIiwgZnVuY3Rpb24gKCkge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHZhciB3ZCA9IGV2ZW50LndoZWVsRGVsdGE7XHJcblx0XHR2YXIgY3NwID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsIGNzcCAtIHdkKTtcclxuXHR9KTtcclxufVxyXG4vLy8vLy8vLy8vLy9zY3JvbGwgY29udHJvbCBmb3IgZnVja2luJ0lFMTEvLy8vLy8vLy8vLy9cclxuXHJcbi8vLy8vLy8vLy8vL3Njcm9sbFRyaWdnZXJBbGwtYm90dG9tRml4QWJzb2x1dGVseSEhIS8vLy8vLy8vLy8vL1xyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHQkKHdpbmRvdykudHJpZ2dlcignc2Nyb2xsJyk7XHJcbn0pO1xyXG4vLy8vLy8vLy8vLy9zY3JvbGxUcmlnZ2VyQWxsLWJvdHRvbUZpeEFic29sdXRlbHkhISEvLy8vLy8vLy8vLy9cclxuIiwiaW1wb3J0IFJlbGxheCBmcm9tICcuLi9tb2R1bGUvcmVsbGF4Lm1pbic7XHJcbmltcG9ydCB7IGFjY2Vzc0ZsYWcgfSBmcm9tICcuL2NvbW1vbic7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy9sb2FkaW5nIHNjcmlwdHMvLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgbG9hZGluZ0FyZWEgPSAkKCcjbG9hZGluZ0FyZWEnKTtcclxuXHRpZiAoYWNjZXNzRmxhZykge1xyXG5cdFx0bG9hZGluZ1BhZ2VSZW1vdmUoKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0JCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRsb2FkaW5nUGFnZVNob3coKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRmdW5jdGlvbiBsb2FkaW5nUGFnZVNob3coKSB7XHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0bG9hZGluZ0FyZWEuYWRkQ2xhc3MoJ2xvYWRpbmdGYWRlJykuZmFkZU91dCg2MDApO1xyXG5cdFx0fSwgMTUwMCk7XHJcblx0XHRzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdhY2Nlc3NlZCcsIHRydWUpO1xyXG5cdH1cclxuXHRmdW5jdGlvbiBsb2FkaW5nUGFnZVJlbW92ZSgpIHtcclxuXHRcdGxvYWRpbmdBcmVhLnJlbW92ZSgpO1xyXG5cdH1cclxufSkoKTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vbG9hZGluZyBzY3JpcHRzLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy9qdWljeXNsaWRlci5qc1xyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgbXlzbGlkZXIgPSAkKCcjbXlzbGlkZXInKTtcclxuXHRteXNsaWRlci5qdWljeXNsaWRlcih7XHJcblx0XHRtb2RlOiBcImNvdmVyXCIsXHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0aGVpZ2h0OiAnMTAwJScsXHJcblx0XHRtYXNrOiBcIm5vbmVcIixcclxuXHRcdGJnY29sb3I6IFwiIzAwMFwiLFxyXG5cdFx0YXV0b3BsYXk6IDgwMDAsXHJcblx0XHRzaHVmZmxlOiBmYWxzZSxcclxuXHRcdHNob3c6IHsgZWZmZWN0OiAnZmFkZScsIGR1cmF0aW9uOiAxNTAwIH0sXHJcblx0XHRoaWRlOiB7IGVmZmVjdDogJ2ZhZGUnLCBkdXJhdGlvbjogMTUwMCB9LFxyXG5cdH0pO1xyXG59KTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vanVpY3lzbGlkZXIuanNcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vL1JlbGxheC5qc1xyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgcmVsbGF4ID0gbmV3IFJlbGxheCgnLnJlbGxheCcpOy8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxufSk7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vL1JlbGxheC5qcyIsIi8qIGVzbGludC1kaXNhYmxlICovXHJcbi8vLy8vLy8vLy8vLy8vdGV4dGlsbGF0ZS5qcy8vLy8vLy8vLy8vLy8vXHJcbi8qXHJcbiAqIHRleHRpbGxhdGUuanNcclxuICogaHR0cDovL2pzY2hyLmdpdGh1Yi5jb20vdGV4dGlsbGF0ZVxyXG4gKiBNSVQgbGljZW5zZWRcclxuICpcclxuICogQ29weXJpZ2h0IChDKSAyMDEyLTIwMTMgSm9yZGFuIFNjaHJvdGVyXHJcbiAqL1xyXG5cclxuKGZ1bmN0aW9uICgkKSB7XHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdGZ1bmN0aW9uIGlzSW5FZmZlY3QoZWZmZWN0KSB7XHJcblx0XHRyZXR1cm4gL0luLy50ZXN0KGVmZmVjdCkgfHwgJC5pbkFycmF5KGVmZmVjdCwgJC5mbi50ZXh0aWxsYXRlLmRlZmF1bHRzLmluRWZmZWN0cykgPj0gMDtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGlzT3V0RWZmZWN0KGVmZmVjdCkge1xyXG5cdFx0cmV0dXJuIC9PdXQvLnRlc3QoZWZmZWN0KSB8fCAkLmluQXJyYXkoZWZmZWN0LCAkLmZuLnRleHRpbGxhdGUuZGVmYXVsdHMub3V0RWZmZWN0cykgPj0gMDtcclxuXHR9XHJcblxyXG5cclxuXHRmdW5jdGlvbiBzdHJpbmdUb0Jvb2xlYW4oc3RyKSB7XHJcblx0XHRpZiAoc3RyICE9PSBcInRydWVcIiAmJiBzdHIgIT09IFwiZmFsc2VcIikgcmV0dXJuIHN0cjtcclxuXHRcdHJldHVybiAoc3RyID09PSBcInRydWVcIik7XHJcblx0fVxyXG5cclxuXHQvLyBjdXN0b20gZ2V0IGRhdGEgYXBpIG1ldGhvZFxyXG5cdGZ1bmN0aW9uIGdldERhdGEobm9kZSkge1xyXG5cdFx0dmFyIGF0dHJzID0gbm9kZS5hdHRyaWJ1dGVzIHx8IFtdXHJcblx0XHRcdCwgZGF0YSA9IHt9O1xyXG5cclxuXHRcdGlmICghYXR0cnMubGVuZ3RoKSByZXR1cm4gZGF0YTtcclxuXHJcblx0XHQkLmVhY2goYXR0cnMsIGZ1bmN0aW9uIChpLCBhdHRyKSB7XHJcblx0XHRcdHZhciBub2RlTmFtZSA9IGF0dHIubm9kZU5hbWUucmVwbGFjZSgvZGVsYXlzY2FsZS8sICdkZWxheVNjYWxlJyk7XHJcblx0XHRcdGlmICgvXmRhdGEtaW4tKi8udGVzdChub2RlTmFtZSkpIHtcclxuXHRcdFx0XHRkYXRhLmluID0gZGF0YS5pbiB8fCB7fTtcclxuXHRcdFx0XHRkYXRhLmluW25vZGVOYW1lLnJlcGxhY2UoL2RhdGEtaW4tLywgJycpXSA9IHN0cmluZ1RvQm9vbGVhbihhdHRyLm5vZGVWYWx1ZSk7XHJcblx0XHRcdH0gZWxzZSBpZiAoL15kYXRhLW91dC0qLy50ZXN0KG5vZGVOYW1lKSkge1xyXG5cdFx0XHRcdGRhdGEub3V0ID0gZGF0YS5vdXQgfHwge307XHJcblx0XHRcdFx0ZGF0YS5vdXRbbm9kZU5hbWUucmVwbGFjZSgvZGF0YS1vdXQtLywgJycpXSA9IHN0cmluZ1RvQm9vbGVhbihhdHRyLm5vZGVWYWx1ZSk7XHJcblx0XHRcdH0gZWxzZSBpZiAoL15kYXRhLSovLnRlc3Qobm9kZU5hbWUpKSB7XHJcblx0XHRcdFx0ZGF0YVtub2RlTmFtZS5yZXBsYWNlKC9kYXRhLS8sICcnKV0gPSBzdHJpbmdUb0Jvb2xlYW4oYXR0ci5ub2RlVmFsdWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gZGF0YTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHNodWZmbGUobykge1xyXG5cdFx0Zm9yICh2YXIgaiwgeCwgaSA9IG8ubGVuZ3RoOyBpOyBqID0gcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIGkpLCB4ID0gb1stLWldLCBvW2ldID0gb1tqXSwgb1tqXSA9IHgpO1xyXG5cdFx0cmV0dXJuIG87XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBhbmltYXRlKCR0LCBlZmZlY3QsIGNiKSB7XHJcblx0XHQkdC5hZGRDbGFzcygnYW5pbWF0ZWQgJyArIGVmZmVjdClcclxuXHRcdFx0LmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJylcclxuXHRcdFx0LnNob3coKTtcclxuXHJcblx0XHQkdC5vbmUoJ3dlYmtpdEFuaW1hdGlvbkVuZCBtb3pBbmltYXRpb25FbmQgTVNBbmltYXRpb25FbmQgb2FuaW1hdGlvbmVuZCBhbmltYXRpb25lbmQnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdCR0LnJlbW92ZUNsYXNzKCdhbmltYXRlZCAnICsgZWZmZWN0KTtcclxuXHRcdFx0Y2IgJiYgY2IoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYW5pbWF0ZVRva2VucygkdG9rZW5zLCBvcHRpb25zLCBjYikge1xyXG5cdFx0dmFyIHRoYXQgPSB0aGlzXHJcblx0XHRcdCwgY291bnQgPSAkdG9rZW5zLmxlbmd0aDtcclxuXHJcblx0XHRpZiAoIWNvdW50KSB7XHJcblx0XHRcdGNiICYmIGNiKCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAob3B0aW9ucy5zaHVmZmxlKSAkdG9rZW5zID0gc2h1ZmZsZSgkdG9rZW5zKTtcclxuXHRcdGlmIChvcHRpb25zLnJldmVyc2UpICR0b2tlbnMgPSAkdG9rZW5zLnRvQXJyYXkoKS5yZXZlcnNlKCk7XHJcblxyXG5cdFx0JC5lYWNoKCR0b2tlbnMsIGZ1bmN0aW9uIChpLCB0KSB7XHJcblx0XHRcdHZhciAkdG9rZW4gPSAkKHQpO1xyXG5cclxuXHRcdFx0ZnVuY3Rpb24gY29tcGxldGUoKSB7XHJcblx0XHRcdFx0aWYgKGlzSW5FZmZlY3Qob3B0aW9ucy5lZmZlY3QpKSB7XHJcblx0XHRcdFx0XHQkdG9rZW4uY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGlzT3V0RWZmZWN0KG9wdGlvbnMuZWZmZWN0KSkge1xyXG5cdFx0XHRcdFx0JHRva2VuLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y291bnQgLT0gMTtcclxuXHRcdFx0XHRpZiAoIWNvdW50ICYmIGNiKSBjYigpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgZGVsYXkgPSBvcHRpb25zLnN5bmMgPyBvcHRpb25zLmRlbGF5IDogb3B0aW9ucy5kZWxheSAqIGkgKiBvcHRpb25zLmRlbGF5U2NhbGU7XHJcblxyXG5cdFx0XHQkdG9rZW4udGV4dCgpID9cclxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgYW5pbWF0ZSgkdG9rZW4sIG9wdGlvbnMuZWZmZWN0LCBjb21wbGV0ZSk7IH0sIGRlbGF5KSA6XHJcblx0XHRcdFx0Y29tcGxldGUoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0dmFyIFRleHRpbGxhdGUgPSBmdW5jdGlvbiAoZWxlbWVudCwgb3B0aW9ucykge1xyXG5cdFx0dmFyIGJhc2UgPSB0aGlzXHJcblx0XHRcdCwgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xyXG5cclxuXHRcdGJhc2UuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0YmFzZS4kdGV4dHMgPSAkZWxlbWVudC5maW5kKG9wdGlvbnMuc2VsZWN0b3IpO1xyXG5cclxuXHRcdFx0aWYgKCFiYXNlLiR0ZXh0cy5sZW5ndGgpIHtcclxuXHRcdFx0XHRiYXNlLiR0ZXh0cyA9ICQoJzx1bCBjbGFzcz1cInRleHRzXCI+PGxpPicgKyAkZWxlbWVudC5odG1sKCkgKyAnPC9saT48L3VsPicpO1xyXG5cdFx0XHRcdCRlbGVtZW50Lmh0bWwoYmFzZS4kdGV4dHMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRiYXNlLiR0ZXh0cy5oaWRlKCk7XHJcblxyXG5cdFx0XHRiYXNlLiRjdXJyZW50ID0gJCgnPHNwYW4+JylcclxuXHRcdFx0XHQuaHRtbChiYXNlLiR0ZXh0cy5maW5kKCc6Zmlyc3QtY2hpbGQnKS5odG1sKCkpXHJcblx0XHRcdFx0LnByZXBlbmRUbygkZWxlbWVudCk7XHJcblxyXG5cdFx0XHRpZiAoaXNJbkVmZmVjdChvcHRpb25zLmluLmVmZmVjdCkpIHtcclxuXHRcdFx0XHRiYXNlLiRjdXJyZW50LmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuXHRcdFx0fSBlbHNlIGlmIChpc091dEVmZmVjdChvcHRpb25zLm91dC5lZmZlY3QpKSB7XHJcblx0XHRcdFx0YmFzZS4kY3VycmVudC5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRiYXNlLnNldE9wdGlvbnMob3B0aW9ucyk7XHJcblxyXG5cdFx0XHRiYXNlLnRpbWVvdXRSdW4gPSBudWxsO1xyXG5cclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0YmFzZS5vcHRpb25zLmF1dG9TdGFydCAmJiBiYXNlLnN0YXJ0KCk7XHJcblx0XHRcdH0sIGJhc2Uub3B0aW9ucy5pbml0aWFsRGVsYXkpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRiYXNlLnNldE9wdGlvbnMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG5cdFx0XHRiYXNlLm9wdGlvbnMgPSBvcHRpb25zO1xyXG5cdFx0fTtcclxuXHJcblx0XHRiYXNlLnRyaWdnZXJFdmVudCA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcblx0XHRcdHZhciBlID0gJC5FdmVudChuYW1lICsgJy50bHQnKTtcclxuXHRcdFx0JGVsZW1lbnQudHJpZ2dlcihlLCBiYXNlKTtcclxuXHRcdFx0cmV0dXJuIGU7XHJcblx0XHR9O1xyXG5cclxuXHRcdGJhc2UuaW4gPSBmdW5jdGlvbiAoaW5kZXgsIGNiKSB7XHJcblx0XHRcdGluZGV4ID0gaW5kZXggfHwgMDtcclxuXHJcblx0XHRcdHZhciAkZWxlbSA9IGJhc2UuJHRleHRzLmZpbmQoJzpudGgtY2hpbGQoJyArICgoaW5kZXggfHwgMCkgKyAxKSArICcpJylcclxuXHRcdFx0XHQsIG9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB7fSwgYmFzZS5vcHRpb25zLCAkZWxlbS5sZW5ndGggPyBnZXREYXRhKCRlbGVtWzBdKSA6IHt9KVxyXG5cdFx0XHRcdCwgJHRva2VucztcclxuXHJcblx0XHRcdCRlbGVtLmFkZENsYXNzKCdjdXJyZW50Jyk7XHJcblxyXG5cdFx0XHRiYXNlLnRyaWdnZXJFdmVudCgnaW5BbmltYXRpb25CZWdpbicpO1xyXG5cdFx0XHQkZWxlbWVudC5hdHRyKCdkYXRhLWFjdGl2ZScsICRlbGVtLmRhdGEoJ2lkJykpO1xyXG5cclxuXHRcdFx0YmFzZS4kY3VycmVudFxyXG5cdFx0XHRcdC5odG1sKCRlbGVtLmh0bWwoKSlcclxuXHRcdFx0XHQubGV0dGVyaW5nKCd3b3JkcycpO1xyXG5cclxuXHRcdFx0Ly8gc3BsaXQgd29yZHMgdG8gaW5kaXZpZHVhbCBjaGFyYWN0ZXJzIGlmIHRva2VuIHR5cGUgaXMgc2V0IHRvICdjaGFyJ1xyXG5cdFx0XHRpZiAoYmFzZS5vcHRpb25zLnR5cGUgPT0gXCJjaGFyXCIpIHtcclxuXHRcdFx0XHRiYXNlLiRjdXJyZW50LmZpbmQoJ1tjbGFzc149XCJ3b3JkXCJdJylcclxuXHRcdFx0XHRcdC5jc3Moe1xyXG5cdFx0XHRcdFx0XHQnZGlzcGxheSc6ICdpbmxpbmUtYmxvY2snLFxyXG5cdFx0XHRcdFx0XHQvLyBmaXggZm9yIHBvb3IgaW9zIHBlcmZvcm1hbmNlXHJcblx0XHRcdFx0XHRcdCctd2Via2l0LXRyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCgwLDAsMCknLFxyXG5cdFx0XHRcdFx0XHQnLW1vei10cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoMCwwLDApJyxcclxuXHRcdFx0XHRcdFx0Jy1vLXRyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCgwLDAsMCknLFxyXG5cdFx0XHRcdFx0XHQndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKDAsMCwwKSdcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQuZWFjaChmdW5jdGlvbiAoKSB7ICQodGhpcykubGV0dGVyaW5nKCk7IH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQkdG9rZW5zID0gYmFzZS4kY3VycmVudFxyXG5cdFx0XHRcdC5maW5kKCdbY2xhc3NePVwiJyArIGJhc2Uub3B0aW9ucy50eXBlICsgJ1wiXScpXHJcblx0XHRcdFx0LmNzcygnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcclxuXHJcblx0XHRcdGlmIChpc0luRWZmZWN0KG9wdGlvbnMuaW4uZWZmZWN0KSkge1xyXG5cdFx0XHRcdCR0b2tlbnMuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGlzT3V0RWZmZWN0KG9wdGlvbnMuaW4uZWZmZWN0KSkge1xyXG5cdFx0XHRcdCR0b2tlbnMuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YmFzZS5jdXJyZW50SW5kZXggPSBpbmRleDtcclxuXHJcblx0XHRcdGFuaW1hdGVUb2tlbnMoJHRva2Vucywgb3B0aW9ucy5pbiwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGJhc2UudHJpZ2dlckV2ZW50KCdpbkFuaW1hdGlvbkVuZCcpO1xyXG5cdFx0XHRcdGlmIChvcHRpb25zLmluLmNhbGxiYWNrKSBvcHRpb25zLmluLmNhbGxiYWNrKCk7XHJcblx0XHRcdFx0aWYgKGNiKSBjYihiYXNlKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGJhc2Uub3V0ID0gZnVuY3Rpb24gKGNiKSB7XHJcblx0XHRcdHZhciAkZWxlbSA9IGJhc2UuJHRleHRzLmZpbmQoJzpudGgtY2hpbGQoJyArICgoYmFzZS5jdXJyZW50SW5kZXggfHwgMCkgKyAxKSArICcpJylcclxuXHRcdFx0XHQsICR0b2tlbnMgPSBiYXNlLiRjdXJyZW50LmZpbmQoJ1tjbGFzc149XCInICsgYmFzZS5vcHRpb25zLnR5cGUgKyAnXCJdJylcclxuXHRcdFx0XHQsIG9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB7fSwgYmFzZS5vcHRpb25zLCAkZWxlbS5sZW5ndGggPyBnZXREYXRhKCRlbGVtWzBdKSA6IHt9KTtcclxuXHJcblx0XHRcdGJhc2UudHJpZ2dlckV2ZW50KCdvdXRBbmltYXRpb25CZWdpbicpO1xyXG5cclxuXHRcdFx0YW5pbWF0ZVRva2VucygkdG9rZW5zLCBvcHRpb25zLm91dCwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdCRlbGVtLnJlbW92ZUNsYXNzKCdjdXJyZW50Jyk7XHJcblx0XHRcdFx0YmFzZS50cmlnZ2VyRXZlbnQoJ291dEFuaW1hdGlvbkVuZCcpO1xyXG5cdFx0XHRcdCRlbGVtZW50LnJlbW92ZUF0dHIoJ2RhdGEtYWN0aXZlJyk7XHJcblx0XHRcdFx0aWYgKG9wdGlvbnMub3V0LmNhbGxiYWNrKSBvcHRpb25zLm91dC5jYWxsYmFjaygpO1xyXG5cdFx0XHRcdGlmIChjYikgY2IoYmFzZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fTtcclxuXHJcblx0XHRiYXNlLnN0YXJ0ID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGJhc2UudHJpZ2dlckV2ZW50KCdzdGFydCcpO1xyXG5cclxuXHRcdFx0XHQoZnVuY3Rpb24gcnVuKGluZGV4KSB7XHJcblx0XHRcdFx0XHRiYXNlLmluKGluZGV4LCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdHZhciBsZW5ndGggPSBiYXNlLiR0ZXh0cy5jaGlsZHJlbigpLmxlbmd0aDtcclxuXHJcblx0XHRcdFx0XHRcdGluZGV4ICs9IDE7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIWJhc2Uub3B0aW9ucy5sb29wICYmIGluZGV4ID49IGxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChiYXNlLm9wdGlvbnMuY2FsbGJhY2spIGJhc2Uub3B0aW9ucy5jYWxsYmFjaygpO1xyXG5cdFx0XHRcdFx0XHRcdGJhc2UudHJpZ2dlckV2ZW50KCdlbmQnKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRpbmRleCA9IGluZGV4ICUgbGVuZ3RoO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRiYXNlLnRpbWVvdXRSdW4gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGJhc2Uub3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cnVuKGluZGV4KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH0sIGJhc2Uub3B0aW9ucy5taW5EaXNwbGF5VGltZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0oaW5kZXggfHwgMCkpO1xyXG5cdFx0XHR9LCBiYXNlLm9wdGlvbnMuaW5pdGlhbERlbGF5KTtcclxuXHRcdH07XHJcblxyXG5cdFx0YmFzZS5zdG9wID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAoYmFzZS50aW1lb3V0UnVuKSB7XHJcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChiYXNlLnRpbWVvdXRSdW4pO1xyXG5cdFx0XHRcdGJhc2UudGltZW91dFJ1biA9IG51bGw7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0YmFzZS5pbml0KCk7XHJcblx0fTtcclxuXHJcblx0JC5mbi50ZXh0aWxsYXRlID0gZnVuY3Rpb24gKHNldHRpbmdzLCBhcmdzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKVxyXG5cdFx0XHRcdCwgZGF0YSA9ICR0aGlzLmRhdGEoJ3RleHRpbGxhdGUnKVxyXG5cdFx0XHRcdCwgb3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHt9LCAkLmZuLnRleHRpbGxhdGUuZGVmYXVsdHMsIGdldERhdGEodGhpcyksIHR5cGVvZiBzZXR0aW5ncyA9PSAnb2JqZWN0JyAmJiBzZXR0aW5ncyk7XHJcblxyXG5cdFx0XHRpZiAoIWRhdGEpIHtcclxuXHRcdFx0XHQkdGhpcy5kYXRhKCd0ZXh0aWxsYXRlJywgKGRhdGEgPSBuZXcgVGV4dGlsbGF0ZSh0aGlzLCBvcHRpb25zKSkpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBzZXR0aW5ncyA9PSAnc3RyaW5nJykge1xyXG5cdFx0XHRcdGRhdGFbc2V0dGluZ3NdLmFwcGx5KGRhdGEsIFtdLmNvbmNhdChhcmdzKSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZGF0YS5zZXRPcHRpb25zLmNhbGwoZGF0YSwgb3B0aW9ucyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdCQuZm4udGV4dGlsbGF0ZS5kZWZhdWx0cyA9IHtcclxuXHRcdHNlbGVjdG9yOiAnLnRleHRzJyxcclxuXHRcdGxvb3A6IGZhbHNlLFxyXG5cdFx0bWluRGlzcGxheVRpbWU6IDIwMDAsXHJcblx0XHRpbml0aWFsRGVsYXk6IDAsXHJcblx0XHRpbjoge1xyXG5cdFx0XHRlZmZlY3Q6ICdmYWRlSW5MZWZ0QmlnJyxcclxuXHRcdFx0ZGVsYXlTY2FsZTogMS41LFxyXG5cdFx0XHRkZWxheTogNTAsXHJcblx0XHRcdHN5bmM6IGZhbHNlLFxyXG5cdFx0XHRyZXZlcnNlOiBmYWxzZSxcclxuXHRcdFx0c2h1ZmZsZTogZmFsc2UsXHJcblx0XHRcdGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7IH1cclxuXHRcdH0sXHJcblx0XHRvdXQ6IHtcclxuXHRcdFx0ZWZmZWN0OiAnaGluZ2UnLFxyXG5cdFx0XHRkZWxheVNjYWxlOiAxLjUsXHJcblx0XHRcdGRlbGF5OiA1MCxcclxuXHRcdFx0c3luYzogZmFsc2UsXHJcblx0XHRcdHJldmVyc2U6IGZhbHNlLFxyXG5cdFx0XHRzaHVmZmxlOiBmYWxzZSxcclxuXHRcdFx0Y2FsbGJhY2s6IGZ1bmN0aW9uICgpIHsgfVxyXG5cdFx0fSxcclxuXHRcdGF1dG9TdGFydDogdHJ1ZSxcclxuXHRcdGluRWZmZWN0czogW10sXHJcblx0XHRvdXRFZmZlY3RzOiBbJ2hpbmdlJ10sXHJcblx0XHRjYWxsYmFjazogZnVuY3Rpb24gKCkgeyB9LFxyXG5cdFx0dHlwZTogJ2NoYXInXHJcblx0fTtcclxuXHJcbn0oalF1ZXJ5KSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vL0xldHRlcmluZy5qcy8vLy8vLy8vLy8vLy8vXHJcbi8qZ2xvYmFsIGpRdWVyeSAqL1xyXG4vKiFcdFxyXG4qIExldHRlcmluZy5KUyAwLjYuMVxyXG4qXHJcbiogQ29weXJpZ2h0IDIwMTAsIERhdmUgUnVwZXJ0IGh0dHA6Ly9kYXZlcnVwZXJ0LmNvbVxyXG4qIFJlbGVhc2VkIHVuZGVyIHRoZSBXVEZQTCBsaWNlbnNlIFxyXG4qIGh0dHA6Ly9zYW0uem95Lm9yZy93dGZwbC9cclxuKlxyXG4qIFRoYW5rcyB0byBQYXVsIElyaXNoIC0gaHR0cDovL3BhdWxpcmlzaC5jb20gLSBmb3IgdGhlIGZlZWRiYWNrLlxyXG4qXHJcbiogRGF0ZTogTW9uIFNlcCAyMCAxNzoxNDowMCAyMDEwIC0wNjAwXHJcbiovXHJcbihmdW5jdGlvbiAoJCkge1xyXG5cdGZ1bmN0aW9uIGluamVjdG9yKHQsIHNwbGl0dGVyLCBrbGFzcywgYWZ0ZXIpIHtcclxuXHRcdHZhciBhID0gdC50ZXh0KCkuc3BsaXQoc3BsaXR0ZXIpLCBpbmplY3QgPSAnJztcclxuXHRcdGlmIChhLmxlbmd0aCkge1xyXG5cdFx0XHQkKGEpLmVhY2goZnVuY3Rpb24gKGksIGl0ZW0pIHtcclxuXHRcdFx0XHRpbmplY3QgKz0gJzxzcGFuIGNsYXNzPVwiJyArIGtsYXNzICsgKGkgKyAxKSArICdcIj4nICsgaXRlbSArICc8L3NwYW4+JyArIGFmdGVyO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dC5lbXB0eSgpLmFwcGVuZChpbmplY3QpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dmFyIG1ldGhvZHMgPSB7XHJcblx0XHRpbml0OiBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRpbmplY3RvcigkKHRoaXMpLCAnJywgJ2NoYXInLCAnJyk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0d29yZHM6IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGluamVjdG9yKCQodGhpcyksICcgJywgJ3dvcmQnLCAnICcpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdGxpbmVzOiBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR2YXIgciA9IFwiZWVmZWMzMDMwNzlhZDE3NDA1Yzg4OWUwOTJlMTA1YjBcIjtcclxuXHRcdFx0XHQvLyBCZWNhdXNlIGl0J3MgaGFyZCB0byBzcGxpdCBhIDxici8+IHRhZyBjb25zaXN0ZW50bHkgYWNyb3NzIGJyb3dzZXJzLFxyXG5cdFx0XHRcdC8vICgqYWhlbSogSUUgKmFoZW0qKSwgd2UgcmVwbGFjZXMgYWxsIDxici8+IGluc3RhbmNlcyB3aXRoIGFuIG1kNSBoYXNoIFxyXG5cdFx0XHRcdC8vIChvZiB0aGUgd29yZCBcInNwbGl0XCIpLiAgSWYgeW91J3JlIHRyeWluZyB0byB1c2UgdGhpcyBwbHVnaW4gb24gdGhhdCBcclxuXHRcdFx0XHQvLyBtZDUgaGFzaCBzdHJpbmcsIGl0IHdpbGwgZmFpbCBiZWNhdXNlIHlvdSdyZSBiZWluZyByaWRpY3Vsb3VzLlxyXG5cdFx0XHRcdGluamVjdG9yKCQodGhpcykuY2hpbGRyZW4oXCJiclwiKS5yZXBsYWNlV2l0aChyKS5lbmQoKSwgciwgJ2xpbmUnLCAnJyk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQkLmZuLmxldHRlcmluZyA9IGZ1bmN0aW9uIChtZXRob2QpIHtcclxuXHRcdC8vIE1ldGhvZCBjYWxsaW5nIGxvZ2ljXHJcblx0XHRpZiAobWV0aG9kICYmIG1ldGhvZHNbbWV0aG9kXSkge1xyXG5cdFx0XHRyZXR1cm4gbWV0aG9kc1ttZXRob2RdLmFwcGx5KHRoaXMsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XHJcblx0XHR9IGVsc2UgaWYgKG1ldGhvZCA9PT0gJ2xldHRlcnMnIHx8ICFtZXRob2QpIHtcclxuXHRcdFx0cmV0dXJuIG1ldGhvZHMuaW5pdC5hcHBseSh0aGlzLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkpOyAvLyBhbHdheXMgcGFzcyBhbiBhcnJheVxyXG5cdFx0fVxyXG5cdFx0JC5lcnJvcignTWV0aG9kICcgKyBtZXRob2QgKyAnIGRvZXMgbm90IGV4aXN0IG9uIGpRdWVyeS5sZXR0ZXJpbmcnKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblxyXG59KShqUXVlcnkpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy9EcmF3U1ZHLmpzLy8vLy8vLy8vLy8vLy9cclxuLyohIGpRdWVyeSBEcmF3U1ZHIHYxLjEuMCAoMjAxNi0xMC0wNSkgLSBnaXQuaW8vdkdGYTUgLSBDb3B5cmlnaHQgKGMpIDIwMTYgTGVvbmFyZG8gU2FudG9zIC0gTUlUIExpY2Vuc2UgKi9cclxuIWZ1bmN0aW9uICh0KSB7IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoW1wianF1ZXJ5XCJdLCB0KSA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cyA/IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGUsIG4pIHsgcmV0dXJuIHZvaWQgMCA9PT0gbiAmJiAobiA9IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHdpbmRvdyA/IHJlcXVpcmUoXCJqcXVlcnlcIikgOiByZXF1aXJlKFwianF1ZXJ5XCIpKGUpKSwgdChuKSwgbjsgfSA6IHQoalF1ZXJ5KTsgfShmdW5jdGlvbiAodCkgeyBcInVzZSBzdHJpY3RcIjsgdmFyIGUgPSBcImRyYXdzdmdcIiwgbiA9IHsgZHVyYXRpb246IDFlMywgc3RhZ2dlcjogMjAwLCBlYXNpbmc6IFwic3dpbmdcIiwgcmV2ZXJzZTogITEsIGNhbGxiYWNrOiB0Lm5vb3AgfSwgYSA9IGZ1bmN0aW9uICgpIHsgdmFyIGEgPSBmdW5jdGlvbiAoYSwgbykgeyB2YXIgaSA9IHRoaXMsIHIgPSB0LmV4dGVuZChuLCBvKTsgaS4kZWxtID0gdChhKSwgaS4kZWxtLmlzKFwic3ZnXCIpICYmIChpLm9wdGlvbnMgPSByLCBpLiRwYXRocyA9IGkuJGVsbS5maW5kKFwicGF0aFwiKSwgaS50b3RhbER1cmF0aW9uID0gci5kdXJhdGlvbiArIHIuc3RhZ2dlciAqIGkuJHBhdGhzLmxlbmd0aCwgaS5kdXJhdGlvbiA9IHIuZHVyYXRpb24gLyBpLnRvdGFsRHVyYXRpb24sIGkuJHBhdGhzLmVhY2goZnVuY3Rpb24gKHQsIGUpIHsgdmFyIG4gPSBlLmdldFRvdGFsTGVuZ3RoKCk7IGUucGF0aExlbiA9IG4sIGUuZGVsYXkgPSByLnN0YWdnZXIgKiB0IC8gaS50b3RhbER1cmF0aW9uLCBlLnN0eWxlLnN0cm9rZURhc2hhcnJheSA9IFtuLCBuXS5qb2luKFwiIFwiKSwgZS5zdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gbjsgfSksIGkuJGVsbS5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24gKHQsIG4pIHsgcmV0dXJuIFtuLCBlICsgXCItaW5pdGlhbGl6ZWRcIl0uam9pbihcIiBcIik7IH0pKTsgfTsgcmV0dXJuIGEucHJvdG90eXBlLmdldFZhbCA9IGZ1bmN0aW9uIChlLCBuKSB7IHJldHVybiAxIC0gdC5lYXNpbmdbbl0oZSwgZSwgMCwgMSwgMSk7IH0sIGEucHJvdG90eXBlLnByb2dyZXNzID0gZnVuY3Rpb24gKHQpIHsgdmFyIGUgPSB0aGlzLCBuID0gZS5vcHRpb25zLCBhID0gZS5kdXJhdGlvbjsgZS4kcGF0aHMuZWFjaChmdW5jdGlvbiAobywgaSkgeyB2YXIgciA9IGkuc3R5bGU7IGlmICgxID09PSB0KSByLnN0cm9rZURhc2hvZmZzZXQgPSAwOyBlbHNlIGlmICgwID09PSB0KSByLnN0cm9rZURhc2hvZmZzZXQgPSBpLnBhdGhMZW4gKyBcInB4XCI7IGVsc2UgaWYgKHQgPj0gaS5kZWxheSAmJiB0IDw9IGEgKyBpLmRlbGF5KSB7IHZhciBzID0gKHQgLSBpLmRlbGF5KSAvIGE7IHIuc3Ryb2tlRGFzaG9mZnNldCA9IGUuZ2V0VmFsKHMsIG4uZWFzaW5nKSAqIGkucGF0aExlbiAqIChuLnJldmVyc2UgPyAtMSA6IDEpICsgXCJweFwiOyB9IH0pOyB9LCBhLnByb3RvdHlwZS5hbmltYXRlID0gZnVuY3Rpb24gKCkgeyB2YXIgbiA9IHRoaXM7IG4uJGVsbS5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24gKHQsIG4pIHsgcmV0dXJuIFtuLCBlICsgXCItYW5pbWF0aW5nXCJdLmpvaW4oXCIgXCIpOyB9KSwgdCh7IGxlbjogMCB9KS5hbmltYXRlKHsgbGVuOiAxIH0sIHsgZWFzaW5nOiBcImxpbmVhclwiLCBkdXJhdGlvbjogbi50b3RhbER1cmF0aW9uLCBzdGVwOiBmdW5jdGlvbiAodCwgZSkgeyBuLnByb2dyZXNzLmNhbGwobiwgdCAvIGUuZW5kKTsgfSwgY29tcGxldGU6IGZ1bmN0aW9uICgpIHsgbi5vcHRpb25zLmNhbGxiYWNrLmNhbGwodGhpcyksIG4uJGVsbS5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24gKHQsIG4pIHsgcmV0dXJuIG4ucmVwbGFjZShlICsgXCItYW5pbWF0aW5nXCIsIFwiXCIpOyB9KTsgfSB9KTsgfSwgYTsgfSgpOyB0LmZuW2VdID0gZnVuY3Rpb24gKG4sIG8pIHsgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7IHZhciBpID0gdC5kYXRhKHRoaXMsIGUpOyBpICYmIFwiXCIgKyBuID09PSBuICYmIGlbbl0gPyBpW25dKG8pIDogdC5kYXRhKHRoaXMsIGUsIG5ldyBhKHRoaXMsIG4pKTsgfSk7IH07IH0pO1xyXG4vKiBlc2xpbnQtZW5hYmxlICovIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbihmdW5jdGlvbiAocSwgZykgeyBcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbXSwgZykgOiBcIm9iamVjdFwiID09PSB0eXBlb2YgbW9kdWxlICYmIG1vZHVsZS5leHBvcnRzID8gbW9kdWxlLmV4cG9ydHMgPSBnKCkgOiBxLlJlbGxheCA9IGcoKSB9KShcInVuZGVmaW5lZFwiICE9PSB0eXBlb2Ygd2luZG93ID8gd2luZG93IDogZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG5cdHZhciBxID0gZnVuY3Rpb24gKGcsIHUpIHtcblx0XHRmdW5jdGlvbiBDKCkgeyBpZiAoMyA9PT0gYS5vcHRpb25zLmJyZWFrcG9pbnRzLmxlbmd0aCAmJiBBcnJheS5pc0FycmF5KGEub3B0aW9ucy5icmVha3BvaW50cykpIHsgdmFyIGYgPSAhMCwgYyA9ICEwLCBiOyBhLm9wdGlvbnMuYnJlYWtwb2ludHMuZm9yRWFjaChmdW5jdGlvbiAoYSkgeyBcIm51bWJlclwiICE9PSB0eXBlb2YgYSAmJiAoYyA9ICExKTsgbnVsbCAhPT0gYiAmJiBhIDwgYiAmJiAoZiA9ICExKTsgYiA9IGEgfSk7IGlmIChmICYmIGMpIHJldHVybiB9IGEub3B0aW9ucy5icmVha3BvaW50cyA9IFs1NzYsIDc2OCwgMTIwMV07IGNvbnNvbGUud2FybihcIlJlbGxheDogWW91IG11c3QgcGFzcyBhbiBhcnJheSBvZiAzIG51bWJlcnMgaW4gYXNjZW5kaW5nIG9yZGVyIHRvIHRoZSBicmVha3BvaW50cyBvcHRpb24uIERlZmF1bHRzIHJldmVydGVkXCIpIH1cblx0XHR2YXIgYSA9IE9iamVjdC5jcmVhdGUocS5wcm90b3R5cGUpLCBsID0gMCwgdiA9IDAsIG0gPSAwLCBuID0gMCwgZCA9IFtdLCB3ID0gITAsIEEgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgZnVuY3Rpb24gKGEpIHsgcmV0dXJuIHNldFRpbWVvdXQoYSwgMUUzIC8gNjApIH0sIHAgPSBudWxsLCB4ID0gITE7IHRyeSB7IHZhciBrID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCBcInBhc3NpdmVcIiwgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgeCA9ICEwIH0gfSk7IHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidGVzdFBhc3NpdmVcIiwgbnVsbCwgayk7IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwidGVzdFBhc3NpdmVcIiwgbnVsbCwgaykgfSBjYXRjaCAoZikgeyB9IHZhciBEID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuXHRcdFx0Y2xlYXJUaW1lb3V0LCBFID0gd2luZG93LnRyYW5zZm9ybVByb3AgfHwgZnVuY3Rpb24gKCkgeyB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IGlmIChudWxsID09PSBhLnN0eWxlLnRyYW5zZm9ybSkgeyB2YXIgYyA9IFtcIldlYmtpdFwiLCBcIk1velwiLCBcIm1zXCJdLCBiOyBmb3IgKGIgaW4gYykgaWYgKHZvaWQgMCAhPT0gYS5zdHlsZVtjW2JdICsgXCJUcmFuc2Zvcm1cIl0pIHJldHVybiBjW2JdICsgXCJUcmFuc2Zvcm1cIiB9IHJldHVybiBcInRyYW5zZm9ybVwiIH0oKTsgYS5vcHRpb25zID0geyBzcGVlZDogLTIsIHZlcnRpY2FsU3BlZWQ6IG51bGwsIGhvcml6b250YWxTcGVlZDogbnVsbCwgYnJlYWtwb2ludHM6IFs1NzYsIDc2OCwgMTIwMV0sIGNlbnRlcjogITEsIHdyYXBwZXI6IG51bGwsIHJlbGF0aXZlVG9XcmFwcGVyOiAhMSwgcm91bmQ6ICEwLCB2ZXJ0aWNhbDogITAsIGhvcml6b250YWw6ICExLCB2ZXJ0aWNhbFNjcm9sbEF4aXM6IFwieVwiLCBob3Jpem9udGFsU2Nyb2xsQXhpczogXCJ4XCIsIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7IH0gfTsgdSAmJiBPYmplY3Qua2V5cyh1KS5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRhLm9wdGlvbnNbZF0gPVxuXHRcdFx0XHR1W2RdXG5cdFx0XHR9KTsgdSAmJiB1LmJyZWFrcG9pbnRzICYmIEMoKTsgZyB8fCAoZyA9IFwiLnJlbGxheFwiKTsgayA9IFwic3RyaW5nXCIgPT09IHR5cGVvZiBnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChnKSA6IFtnXTsgaWYgKDAgPCBrLmxlbmd0aCkge1xuXHRcdFx0YS5lbGVtcyA9IGs7IGlmIChhLm9wdGlvbnMud3JhcHBlciAmJiAhYS5vcHRpb25zLndyYXBwZXIubm9kZVR5cGUpIGlmIChrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhLm9wdGlvbnMud3JhcHBlcikpIGEub3B0aW9ucy53cmFwcGVyID0gazsgZWxzZSB7IGNvbnNvbGUud2FybihcIlJlbGxheDogVGhlIHdyYXBwZXIgeW91J3JlIHRyeWluZyB0byB1c2UgZG9lc24ndCBleGlzdC5cIik7IHJldHVybiB9IHZhciBGLCBCID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRmb3IgKHZhciBmID0gMDsgZiA8IGQubGVuZ3RoOyBmKyspYS5lbGVtc1tmXS5zdHlsZS5jc3NUZXh0ID0gZFtmXS5zdHlsZTsgZCA9IFtdOyB2ID0gd2luZG93LmlubmVySGVpZ2h0OyBuID0gd2luZG93LmlubmVyV2lkdGg7IGYgPSBhLm9wdGlvbnMuYnJlYWtwb2ludHM7IEYgPSBuIDwgZlswXSA/IFwieHNcIiA6IG4gPj0gZlswXSAmJiBuIDxcblx0XHRcdFx0XHRmWzFdID8gXCJzbVwiIDogbiA+PSBmWzFdICYmIG4gPCBmWzJdID8gXCJtZFwiIDogXCJsZ1wiOyBIKCk7IGZvciAoZiA9IDA7IGYgPCBhLmVsZW1zLmxlbmd0aDsgZisrKSB7XG5cdFx0XHRcdFx0XHR2YXIgYyA9IHZvaWQgMCwgYiA9IGEuZWxlbXNbZl0sIGUgPSBiLmdldEF0dHJpYnV0ZShcImRhdGEtcmVsbGF4LXBlcmNlbnRhZ2VcIiksIHkgPSBiLmdldEF0dHJpYnV0ZShcImRhdGEtcmVsbGF4LXNwZWVkXCIpLCB0ID0gYi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJlbGxheC14cy1zcGVlZFwiKSwgZyA9IGIuZ2V0QXR0cmlidXRlKFwiZGF0YS1yZWxsYXgtbW9iaWxlLXNwZWVkXCIpLCBoID0gYi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJlbGxheC10YWJsZXQtc3BlZWRcIiksIGsgPSBiLmdldEF0dHJpYnV0ZShcImRhdGEtcmVsbGF4LWRlc2t0b3Atc3BlZWRcIiksIGwgPSBiLmdldEF0dHJpYnV0ZShcImRhdGEtcmVsbGF4LXZlcnRpY2FsLXNwZWVkXCIpLCBtID0gYi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJlbGxheC1ob3Jpem9udGFsLXNwZWVkXCIpLCBwID0gYi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJlbGxheC12ZXJ0aWNhbC1zY3JvbGwtYXhpc1wiKSxcblx0XHRcdFx0XHRcdHEgPSBiLmdldEF0dHJpYnV0ZShcImRhdGEtcmVsbGF4LWhvcml6b250YWwtc2Nyb2xsLWF4aXNcIiksIHUgPSBiLmdldEF0dHJpYnV0ZShcImRhdGEtcmVsbGF4LXppbmRleFwiKSB8fCAwLCB4ID0gYi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJlbGxheC1taW5cIiksIEEgPSBiLmdldEF0dHJpYnV0ZShcImRhdGEtcmVsbGF4LW1heFwiKSwgQyA9IGIuZ2V0QXR0cmlidXRlKFwiZGF0YS1yZWxsYXgtbWluLXhcIiksIEQgPSBiLmdldEF0dHJpYnV0ZShcImRhdGEtcmVsbGF4LW1heC14XCIpLCBFID0gYi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJlbGxheC1taW4teVwiKSwgTCA9IGIuZ2V0QXR0cmlidXRlKFwiZGF0YS1yZWxsYXgtbWF4LXlcIiksIHIgPSAhMDsgdCB8fCBnIHx8IGggfHwgayA/IGMgPSB7IHhzOiB0LCBzbTogZywgbWQ6IGgsIGxnOiBrIH0gOiByID0gITE7IHQgPSBhLm9wdGlvbnMud3JhcHBlciA/IGEub3B0aW9ucy53cmFwcGVyLnNjcm9sbFRvcCA6IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wOyBhLm9wdGlvbnMucmVsYXRpdmVUb1dyYXBwZXIgJiZcblx0XHRcdFx0XHRcdFx0KHQgPSAod2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3ApIC0gYS5vcHRpb25zLndyYXBwZXIub2Zmc2V0VG9wKTsgdmFyIHogPSBhLm9wdGlvbnMudmVydGljYWwgPyBlIHx8IGEub3B0aW9ucy5jZW50ZXIgPyB0IDogMCA6IDAsIEkgPSBhLm9wdGlvbnMuaG9yaXpvbnRhbCA/IGUgfHwgYS5vcHRpb25zLmNlbnRlciA/IGEub3B0aW9ucy53cmFwcGVyID8gYS5vcHRpb25zLndyYXBwZXIuc2Nyb2xsTGVmdCA6IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgOiAwIDogMDsgdCA9IHogKyBiLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDsgZyA9IGIuY2xpZW50SGVpZ2h0IHx8IGIub2Zmc2V0SGVpZ2h0IHx8IGIuc2Nyb2xsSGVpZ2h0OyBoID0gSSArIGIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDsgayA9IGIuY2xpZW50V2lkdGggfHwgYi5vZmZzZXRXaWR0aCB8fCBiLnNjcm9sbFdpZHRoO1xuXHRcdFx0XHRcdFx0eiA9IGUgPyBlIDogKHogLSB0ICsgdikgLyAoZyArIHYpOyBlID0gZSA/IGUgOiAoSSAtIGggKyBuKSAvIChrICsgbik7IGEub3B0aW9ucy5jZW50ZXIgJiYgKHogPSBlID0gLjUpOyBjID0gciAmJiBudWxsICE9PSBjW0ZdID8gTnVtYmVyKGNbRl0pIDogeSA/IHkgOiBhLm9wdGlvbnMuc3BlZWQ7IGwgPSBsID8gbCA6IGEub3B0aW9ucy52ZXJ0aWNhbFNwZWVkOyBtID0gbSA/IG0gOiBhLm9wdGlvbnMuaG9yaXpvbnRhbFNwZWVkOyBwID0gcCA/IHAgOiBhLm9wdGlvbnMudmVydGljYWxTY3JvbGxBeGlzOyBxID0gcSA/IHEgOiBhLm9wdGlvbnMuaG9yaXpvbnRhbFNjcm9sbEF4aXM7IHkgPSBKKGUsIHosIGMsIGwsIG0pOyBiID0gYi5zdHlsZS5jc3NUZXh0OyByID0gXCJcIjsgaWYgKGUgPSAvdHJhbnNmb3JtXFxzKjovaS5leGVjKGIpKSByID0gYi5zbGljZShlLmluZGV4KSwgciA9IChlID0gci5pbmRleE9mKFwiO1wiKSkgPyBcIiBcIiArIHIuc2xpY2UoMTEsIGUpLnJlcGxhY2UoL1xccy9nLCBcIlwiKSA6IFwiIFwiICsgci5zbGljZSgxMSkucmVwbGFjZSgvXFxzL2csIFwiXCIpOyBkLnB1c2goe1xuXHRcdFx0XHRcdFx0XHRiYXNlWDogeS54LCBiYXNlWTogeS55LCB0b3A6IHQsIGxlZnQ6IGgsIGhlaWdodDogZywgd2lkdGg6IGssIHNwZWVkOiBjLCB2ZXJ0aWNhbFNwZWVkOiBsLFxuXHRcdFx0XHRcdFx0XHRob3Jpem9udGFsU3BlZWQ6IG0sIHZlcnRpY2FsU2Nyb2xsQXhpczogcCwgaG9yaXpvbnRhbFNjcm9sbEF4aXM6IHEsIHN0eWxlOiBiLCB0cmFuc2Zvcm06IHIsIHppbmRleDogdSwgbWluOiB4LCBtYXg6IEEsIG1pblg6IEMsIG1heFg6IEQsIG1pblk6IEUsIG1heFk6IExcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fSBLKCk7IHcgJiYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIEIpLCB3ID0gITEsIEcoKSlcblx0XHRcdH0sIEggPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZhciBkID0gbCwgYyA9IG07IGwgPSBhLm9wdGlvbnMud3JhcHBlciA/IGEub3B0aW9ucy53cmFwcGVyLnNjcm9sbFRvcCA6IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlIHx8IGRvY3VtZW50LmJvZHkpLnNjcm9sbFRvcCB8fCB3aW5kb3cucGFnZVlPZmZzZXQ7IG0gPSBhLm9wdGlvbnMud3JhcHBlciA/IGEub3B0aW9ucy53cmFwcGVyLnNjcm9sbExlZnQgOiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IGRvY3VtZW50LmJvZHkucGFyZW50Tm9kZSB8fCBkb2N1bWVudC5ib2R5KS5zY3JvbGxMZWZ0IHx8IHdpbmRvdy5wYWdlWE9mZnNldDtcblx0XHRcdFx0YS5vcHRpb25zLnJlbGF0aXZlVG9XcmFwcGVyICYmIChsID0gKChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlIHx8IGRvY3VtZW50LmJvZHkpLnNjcm9sbFRvcCB8fCB3aW5kb3cucGFnZVlPZmZzZXQpIC0gYS5vcHRpb25zLndyYXBwZXIub2Zmc2V0VG9wKTsgcmV0dXJuIGQgIT0gbCAmJiBhLm9wdGlvbnMudmVydGljYWwgfHwgYyAhPSBtICYmIGEub3B0aW9ucy5ob3Jpem9udGFsID8gITAgOiAhMVxuXHRcdFx0fSwgSiA9IGZ1bmN0aW9uIChkLCBjLCBiLCBlLCBnKSB7IHZhciBmID0ge307IGQgPSAxMDAgKiAoZyA/IGcgOiBiKSAqICgxIC0gZCk7IGMgPSAxMDAgKiAoZSA/IGUgOiBiKSAqICgxIC0gYyk7IGYueCA9IGEub3B0aW9ucy5yb3VuZCA/IE1hdGgucm91bmQoZCkgOiBNYXRoLnJvdW5kKDEwMCAqIGQpIC8gMTAwOyBmLnkgPSBhLm9wdGlvbnMucm91bmQgPyBNYXRoLnJvdW5kKGMpIDogTWF0aC5yb3VuZCgxMDAgKiBjKSAvIDEwMDsgcmV0dXJuIGYgfSwgaCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaCk7IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIixcblx0XHRcdFx0XHRoKTsgKGEub3B0aW9ucy53cmFwcGVyID8gYS5vcHRpb25zLndyYXBwZXIgOiB3aW5kb3cpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaCk7IChhLm9wdGlvbnMud3JhcHBlciA/IGEub3B0aW9ucy53cmFwcGVyIDogZG9jdW1lbnQpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgaCk7IHAgPSBBKEcpXG5cdFx0XHR9LCBHID0gZnVuY3Rpb24gKCkgeyBIKCkgJiYgITEgPT09IHcgPyAoSygpLCBwID0gQShHKSkgOiAocCA9IG51bGwsIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGgpLCB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsIGgpLCAoYS5vcHRpb25zLndyYXBwZXIgPyBhLm9wdGlvbnMud3JhcHBlciA6IHdpbmRvdykuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoLCB4ID8geyBwYXNzaXZlOiAhMCB9IDogITEpLCAoYS5vcHRpb25zLndyYXBwZXIgPyBhLm9wdGlvbnMud3JhcHBlciA6IGRvY3VtZW50KS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGgsIHggPyB7IHBhc3NpdmU6ICEwIH0gOiAhMSkpIH0sIEsgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGZvciAodmFyIGYsXG5cdFx0XHRcdFx0YyA9IDA7IGMgPCBhLmVsZW1zLmxlbmd0aDsgYysrKSB7XG5cdFx0XHRcdFx0XHR2YXIgYiA9IGRbY10udmVydGljYWxTY3JvbGxBeGlzLnRvTG93ZXJDYXNlKCksIGUgPSBkW2NdLmhvcml6b250YWxTY3JvbGxBeGlzLnRvTG93ZXJDYXNlKCk7IGYgPSAtMSAhPSBiLmluZGV4T2YoXCJ4XCIpID8gbCA6IDA7IGIgPSAtMSAhPSBiLmluZGV4T2YoXCJ5XCIpID8gbCA6IDA7IHZhciBnID0gLTEgIT0gZS5pbmRleE9mKFwieFwiKSA/IG0gOiAwOyBlID0gLTEgIT0gZS5pbmRleE9mKFwieVwiKSA/IG0gOiAwOyBmID0gSigoZiArIGcgLSBkW2NdLmxlZnQgKyBuKSAvIChkW2NdLndpZHRoICsgbiksIChiICsgZSAtIGRbY10udG9wICsgdikgLyAoZFtjXS5oZWlnaHQgKyB2KSwgZFtjXS5zcGVlZCwgZFtjXS52ZXJ0aWNhbFNwZWVkLCBkW2NdLmhvcml6b250YWxTcGVlZCk7IGUgPSBmLnkgLSBkW2NdLmJhc2VZOyBiID0gZi54IC0gZFtjXS5iYXNlWDsgbnVsbCAhPT0gZFtjXS5taW4gJiYgKGEub3B0aW9ucy52ZXJ0aWNhbCAmJiAhYS5vcHRpb25zLmhvcml6b250YWwgJiYgKGUgPSBlIDw9IGRbY10ubWluID8gZFtjXS5taW4gOiBlKSwgYS5vcHRpb25zLmhvcml6b250YWwgJiYgIWEub3B0aW9ucy52ZXJ0aWNhbCAmJlxuXHRcdFx0XHRcdFx0XHQoYiA9IGIgPD0gZFtjXS5taW4gPyBkW2NdLm1pbiA6IGIpKTsgbnVsbCAhPSBkW2NdLm1pblkgJiYgKGUgPSBlIDw9IGRbY10ubWluWSA/IGRbY10ubWluWSA6IGUpOyBudWxsICE9IGRbY10ubWluWCAmJiAoYiA9IGIgPD0gZFtjXS5taW5YID8gZFtjXS5taW5YIDogYik7IG51bGwgIT09IGRbY10ubWF4ICYmIChhLm9wdGlvbnMudmVydGljYWwgJiYgIWEub3B0aW9ucy5ob3Jpem9udGFsICYmIChlID0gZSA+PSBkW2NdLm1heCA/IGRbY10ubWF4IDogZSksIGEub3B0aW9ucy5ob3Jpem9udGFsICYmICFhLm9wdGlvbnMudmVydGljYWwgJiYgKGIgPSBiID49IGRbY10ubWF4ID8gZFtjXS5tYXggOiBiKSk7IG51bGwgIT0gZFtjXS5tYXhZICYmIChlID0gZSA+PSBkW2NdLm1heFkgPyBkW2NdLm1heFkgOiBlKTsgbnVsbCAhPSBkW2NdLm1heFggJiYgKGIgPSBiID49IGRbY10ubWF4WCA/IGRbY10ubWF4WCA6IGIpOyBhLmVsZW1zW2NdLnN0eWxlW0VdID0gXCJ0cmFuc2xhdGUzZChcIiArIChhLm9wdGlvbnMuaG9yaXpvbnRhbCA/IGIgOiBcIjBcIikgKyBcInB4LFwiICsgKGEub3B0aW9ucy52ZXJ0aWNhbCA/IGUgOiBcIjBcIikgKyBcInB4LFwiICsgZFtjXS56aW5kZXggKyBcInB4KSBcIiArIGRbY10udHJhbnNmb3JtXG5cdFx0XHRcdH0gYS5vcHRpb25zLmNhbGxiYWNrKGYpXG5cdFx0XHR9O1xuXHRcdFx0XHRhLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7IGZvciAodmFyIGYgPSAwOyBmIDwgYS5lbGVtcy5sZW5ndGg7IGYrKylhLmVsZW1zW2ZdLnN0eWxlLmNzc1RleHQgPSBkW2ZdLnN0eWxlOyB3IHx8ICh3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBCKSwgdyA9ICEwKTsgRChwKTsgcCA9IG51bGwgfTsgQigpOyBhLnJlZnJlc2ggPSBCOyByZXR1cm4gYVxuXHRcdFx0fSBjb25zb2xlLndhcm4oXCJSZWxsYXg6IFRoZSBlbGVtZW50cyB5b3UncmUgdHJ5aW5nIHRvIHNlbGVjdCBkb24ndCBleGlzdC5cIilcblx0fTsgcmV0dXJuIHFcbn0pO1xuLyogZXNsaW50LWVuYWJsZSAqLyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=