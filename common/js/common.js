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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2RlYm91bmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3Rocm90dGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9OdW1iZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi93b3JrL2pzL2NvbW1vbi9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vd29yay9qcy9tb2R1bGUvY29tbW9uLnBsdWdpbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJhY2Nlc3NGbGFnIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiYm9keSIsIiQiLCJteWNMb2dvIiwiZHJhd3N2ZyIsImR1cmF0aW9uIiwic3RhZ2dlciIsImVhc2luZyIsImNhbGxiYWNrIiwiYWRkQ2xhc3MiLCJoYXNDbGFzcyIsInNldFRpbWVvdXQiLCJjc3MiLCJjbG9uZU5hdiIsImNsb25lIiwiYXR0ciIsImluc2VydEFmdGVyIiwibG9nb01vdmUiLCJzaG93Q2xhc3MiLCJmb3JTaG93MSIsImZvclNob3cyIiwiZm9yU2hvdzMiLCJmb3JTaG93NCIsImZvclNob3dzIiwiaGVhZGluZyIsImNvbW1lbnRBbmltIiwicm9sbEJhY2siLCJtb2dpRm9vdGVyIiwiY29udGVudHNIZWlnaHQiLCJkb2N1bWVudCIsImhlaWdodCIsIndpbmRvdyIsIm9uIiwidGhyb3R0bGUiLCJ3aW5kb3dIZWlnaHQiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJyZW1vdmVDbGFzcyIsImxlbiIsImxlbmd0aCIsImoiLCJlYWNoIiwiaSIsImZvclNob3dQb2ludCIsIm9mZnNldCIsInRvcCIsImRlbGF5VGltZSIsImRlbGF5IiwicXVldWUiLCJoZWFkaW5nUG9pbnQiLCJ0ZXh0aWxsYXRlIiwiaW4iLCJlZmZlY3QiLCJzaHVmZmxlIiwiZGVsYXlTY2FsZSIsIm15Q29tbWVudFBvaW50IiwiZmFkZUluIiwiZmFkZU91dCIsInNob3ciLCJjbGljayIsImFuaW1hdGUiLCJoYW1iQnRucyIsImhhbWJCdG4xIiwiaGFtYkJ0bjIiLCJoYW1iQnRuMyIsInNwTmF2Iiwic3BOYXZMaXN0cyIsInNwTmF2TGluayIsImZhZGVUaW1lIiwidG9nZ2xlTmF2IiwiaGlkZSIsImZhZGVUb2dnbGUiLCJ0b2dnbGVDbGFzcyIsImhyZWYiLCJ0YXJnZXQiLCJwb3NpdGlvbiIsImZpeFB4IiwidXJsIiwibG9jYXRpb24iLCJpbmRleE9mIiwiaWROYW1lIiwic3BsaXQiLCJwb3MiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJwcm9wIiwicGFyZW50cyIsIm1hdGNoIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIndkIiwid2hlZWxEZWx0YSIsImNzcCIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG8iLCJ0cmlnZ2VyIiwiaXNJbkVmZmVjdCIsInRlc3QiLCJpbkFycmF5IiwiZm4iLCJkZWZhdWx0cyIsImluRWZmZWN0cyIsImlzT3V0RWZmZWN0Iiwib3V0RWZmZWN0cyIsInN0cmluZ1RvQm9vbGVhbiIsInN0ciIsImdldERhdGEiLCJub2RlIiwiYXR0cnMiLCJhdHRyaWJ1dGVzIiwiZGF0YSIsIm5vZGVOYW1lIiwicmVwbGFjZSIsIm5vZGVWYWx1ZSIsIm91dCIsIm8iLCJ4IiwicGFyc2VJbnQiLCJNYXRoIiwicmFuZG9tIiwiJHQiLCJjYiIsIm9uZSIsImFuaW1hdGVUb2tlbnMiLCIkdG9rZW5zIiwib3B0aW9ucyIsInRoYXQiLCJjb3VudCIsInJldmVyc2UiLCJ0b0FycmF5IiwidCIsIiR0b2tlbiIsImNvbXBsZXRlIiwic3luYyIsInRleHQiLCJUZXh0aWxsYXRlIiwiZWxlbWVudCIsImJhc2UiLCIkZWxlbWVudCIsImluaXQiLCIkdGV4dHMiLCJmaW5kIiwic2VsZWN0b3IiLCJodG1sIiwiJGN1cnJlbnQiLCJwcmVwZW5kVG8iLCJzZXRPcHRpb25zIiwidGltZW91dFJ1biIsImF1dG9TdGFydCIsInN0YXJ0IiwiaW5pdGlhbERlbGF5IiwidHJpZ2dlckV2ZW50IiwibmFtZSIsImUiLCJFdmVudCIsImluZGV4IiwiJGVsZW0iLCJleHRlbmQiLCJsZXR0ZXJpbmciLCJ0eXBlIiwiY3VycmVudEluZGV4IiwicmVtb3ZlQXR0ciIsInJ1biIsImNoaWxkcmVuIiwibG9vcCIsIm1pbkRpc3BsYXlUaW1lIiwic3RvcCIsImNsZWFySW50ZXJ2YWwiLCJzZXR0aW5ncyIsImFyZ3MiLCIkdGhpcyIsImFwcGx5IiwiY29uY2F0IiwiY2FsbCIsImpRdWVyeSIsImluamVjdG9yIiwic3BsaXR0ZXIiLCJrbGFzcyIsImFmdGVyIiwiYSIsImluamVjdCIsIml0ZW0iLCJlbXB0eSIsImFwcGVuZCIsIm1ldGhvZHMiLCJ3b3JkcyIsImxpbmVzIiwiciIsInJlcGxhY2VXaXRoIiwiZW5kIiwibWV0aG9kIiwic2xpY2UiLCJhcmd1bWVudHMiLCJlcnJvciIsImRlZmluZSIsIm4iLCJub29wIiwiJGVsbSIsImlzIiwiJHBhdGhzIiwidG90YWxEdXJhdGlvbiIsImdldFRvdGFsTGVuZ3RoIiwicGF0aExlbiIsInN0eWxlIiwic3Ryb2tlRGFzaGFycmF5Iiwiam9pbiIsInN0cm9rZURhc2hvZmZzZXQiLCJwcm90b3R5cGUiLCJnZXRWYWwiLCJwcm9ncmVzcyIsInMiLCJzdGVwIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsV0FBVyxtQkFBTyxDQUFDLCtDQUFTOztBQUU1QjtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNMQSxhQUFhLG1CQUFPLENBQUMsbURBQVc7QUFDaEMsZ0JBQWdCLG1CQUFPLENBQUMseURBQWM7QUFDdEMscUJBQXFCLG1CQUFPLENBQUMsbUVBQW1COztBQUVoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDSEEsYUFBYSxtQkFBTyxDQUFDLG1EQUFXOztBQUVoQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUM3Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3JCQSxpQkFBaUIsbUJBQU8sQ0FBQywyREFBZTs7QUFFeEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNSQSxlQUFlLG1CQUFPLENBQUMscURBQVk7QUFDbkMsVUFBVSxtQkFBTyxDQUFDLDJDQUFPO0FBQ3pCLGVBQWUsbUJBQU8sQ0FBQyxxREFBWTs7QUFFbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTyxZQUFZO0FBQzlCLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLDhDQUE4QyxrQkFBa0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDOUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0FBQ0UsSUFBRixDQUFPdEwsSUFBUCxDQUFZLE9BQVosRUFBcUIsVUFBVW1ILENBQVYsRUFBYWlFLENBQWIsRUFBZ0I7QUFBRSxtQkFBT0EsQ0FBQyxDQUFDbkYsT0FBRixDQUFVeUMsQ0FBQyxHQUFHLFlBQWQsRUFBNEIsRUFBNUIsQ0FBUDtBQUF5QyxXQUFoRixDQUEvQjtBQUFtSDtBQUFwUCxPQUFsQyxDQUFuRjtBQUErVyxLQUEzM0IsRUFBNjNCMEIsQ0FBcDRCO0FBQXc0QixHQUF6NkMsRUFBNUc7O0FBQXloRGpELEdBQUMsQ0FBQy9CLEVBQUYsQ0FBS3NELENBQUwsSUFBVSxVQUFVMEMsQ0FBVixFQUFhaEYsQ0FBYixFQUFnQjtBQUFFLFdBQU8sS0FBSzFFLElBQUwsQ0FBVSxZQUFZO0FBQUUsVUFBSUMsQ0FBQyxHQUFHd0YsQ0FBQyxDQUFDcEIsSUFBRixDQUFPLElBQVAsRUFBYTJDLENBQWIsQ0FBUjtBQUF5Qi9HLE9BQUMsSUFBSSxLQUFLeUosQ0FBTCxLQUFXQSxDQUFoQixJQUFxQnpKLENBQUMsQ0FBQ3lKLENBQUQsQ0FBdEIsR0FBNEJ6SixDQUFDLENBQUN5SixDQUFELENBQUQsQ0FBS2hGLENBQUwsQ0FBNUIsR0FBc0NlLENBQUMsQ0FBQ3BCLElBQUYsQ0FBTyxJQUFQLEVBQWEyQyxDQUFiLEVBQWdCLElBQUkwQixDQUFKLENBQU0sSUFBTixFQUFZZ0IsQ0FBWixDQUFoQixDQUF0QztBQUF3RSxLQUF6SCxDQUFQO0FBQW9JLEdBQWhLO0FBQW1LLENBQTcvRCxDQUFEO0FBQ0EsbUI7Ozs7Ozs7Ozs7O0FDM1dBLHdCIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vd29yay9qcy9jb21tb24vY29tbW9uLmpzXCIpO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG4iLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBub3cgPSByZXF1aXJlKCcuL25vdycpLFxuICAgIHRvTnVtYmVyID0gcmVxdWlyZSgnLi90b051bWJlcicpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgdGltZVdhaXRpbmcgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG5cbiAgICByZXR1cm4gbWF4aW5nXG4gICAgICA/IG5hdGl2ZU1pbih0aW1lV2FpdGluZywgbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZva2UpXG4gICAgICA6IHRpbWVXYWl0aW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lO1xuXG4gICAgLy8gRWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwsIGFjdGl2aXR5IGhhcyBzdG9wcGVkIGFuZCB3ZSdyZSBhdCB0aGVcbiAgICAvLyB0cmFpbGluZyBlZGdlLCB0aGUgc3lzdGVtIHRpbWUgaGFzIGdvbmUgYmFja3dhcmRzIGFuZCB3ZSdyZSB0cmVhdGluZ1xuICAgIC8vIGl0IGFzIHRoZSB0cmFpbGluZyBlZGdlLCBvciB3ZSd2ZSBoaXQgdGhlIGBtYXhXYWl0YCBsaW1pdC5cbiAgICByZXR1cm4gKGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8ICh0aW1lU2luY2VMYXN0Q2FsbCA+PSB3YWl0KSB8fFxuICAgICAgKHRpbWVTaW5jZUxhc3RDYWxsIDwgMCkgfHwgKG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVyRXhwaXJlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfVxuICAgIC8vIFJlc3RhcnQgdGhlIHRpbWVyLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgcmVtYWluaW5nV2FpdCh0aW1lKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFpbGluZ0VkZ2UodGltZSkge1xuICAgIHRpbWVySWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBPbmx5IGludm9rZSBpZiB3ZSBoYXZlIGBsYXN0QXJnc2Agd2hpY2ggbWVhbnMgYGZ1bmNgIGhhcyBiZWVuXG4gICAgLy8gZGVib3VuY2VkIGF0IGxlYXN0IG9uY2UuXG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gICAgbGFzdEludm9rZVRpbWUgPSAwO1xuICAgIGxhc3RBcmdzID0gbGFzdENhbGxUaW1lID0gbGFzdFRoaXMgPSB0aW1lcklkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgcmV0dXJuIHRpbWVySWQgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRyYWlsaW5nRWRnZShub3coKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKSxcbiAgICAgICAgaXNJbnZva2luZyA9IHNob3VsZEludm9rZSh0aW1lKTtcblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lO1xuXG4gICAgaWYgKGlzSW52b2tpbmcpIHtcbiAgICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdFZGdlKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW5nKSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnZvY2F0aW9ucyBpbiBhIHRpZ2h0IGxvb3AuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZTtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbm93O1xuIiwidmFyIGRlYm91bmNlID0gcmVxdWlyZSgnLi9kZWJvdW5jZScpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKipcbiAqIENyZWF0ZXMgYSB0aHJvdHRsZWQgZnVuY3Rpb24gdGhhdCBvbmx5IGludm9rZXMgYGZ1bmNgIGF0IG1vc3Qgb25jZSBwZXJcbiAqIGV2ZXJ5IGB3YWl0YCBtaWxsaXNlY29uZHMuIFRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgXG4gKiBtZXRob2QgdG8gY2FuY2VsIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvXG4gKiBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS4gUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2BcbiAqIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZSBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGBcbiAqIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZCB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGVcbiAqIHRocm90dGxlZCBmdW5jdGlvbi4gU3Vic2VxdWVudCBjYWxscyB0byB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uIHJldHVybiB0aGVcbiAqIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2AgaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIHRocm90dGxlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy50aHJvdHRsZWAgYW5kIGBfLmRlYm91bmNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHRocm90dGxlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRocm90dGxlIGludm9jYXRpb25zIHRvLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHRocm90dGxlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgZXhjZXNzaXZlbHkgdXBkYXRpbmcgdGhlIHBvc2l0aW9uIHdoaWxlIHNjcm9sbGluZy5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdzY3JvbGwnLCBfLnRocm90dGxlKHVwZGF0ZVBvc2l0aW9uLCAxMDApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHJlbmV3VG9rZW5gIHdoZW4gdGhlIGNsaWNrIGV2ZW50IGlzIGZpcmVkLCBidXQgbm90IG1vcmUgdGhhbiBvbmNlIGV2ZXJ5IDUgbWludXRlcy5cbiAqIHZhciB0aHJvdHRsZWQgPSBfLnRocm90dGxlKHJlbmV3VG9rZW4sIDMwMDAwMCwgeyAndHJhaWxpbmcnOiBmYWxzZSB9KTtcbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCB0aHJvdHRsZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgdGhyb3R0bGVkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCB0aHJvdHRsZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGVhZGluZyA9IHRydWUsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICdsZWFkaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLmxlYWRpbmcgOiBsZWFkaW5nO1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cbiAgcmV0dXJuIGRlYm91bmNlKGZ1bmMsIHdhaXQsIHtcbiAgICAnbGVhZGluZyc6IGxlYWRpbmcsXG4gICAgJ21heFdhaXQnOiB3YWl0LFxuICAgICd0cmFpbGluZyc6IHRyYWlsaW5nXG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRocm90dGxlO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9OdW1iZXI7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgJy4uL21vZHVsZS9jb21tb24ucGx1Z2luJztcclxuaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC90aHJvdHRsZSc7XHJcblxyXG4vLy8vLy8vLy8vLy9nbG9iYWwgdmFyaWFibGUvLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNvbnN0IGFjY2Vzc0ZsYWcgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NlZCcpO1xyXG5jb25zdCBib2R5ID0gJCgnYm9keScpO1xyXG5cclxuLy8vLy8vLy8vLy8vRHJhdyBTVkcvLy8vLy8vLy8vLy9cclxuKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgbXljTG9nbyA9ICQoXCIjbXljTG9nb1wiKS5kcmF3c3ZnKHtcclxuXHRcdGR1cmF0aW9uOiAxMDAwLFxyXG5cdFx0c3RhZ2dlcjogODAsXHJcblx0XHRlYXNpbmc6IFwic3dpbmdcIixcclxuXHRcdGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdCQoXCIjbXljTG9nbyBnXCIpLmFkZENsYXNzKFwiZmlsbEFuaW1cIik7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0aWYgKCFhY2Nlc3NGbGFnICYmIGJvZHkuaGFzQ2xhc3MoJ2hvbWUnKSkge1xyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdG15Y0xvZ28uY3NzKFwib3BhY2l0eVwiLCAxKS5kcmF3c3ZnKFwiYW5pbWF0ZVwiKTtcclxuXHRcdH0sIDE4MDApO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRteWNMb2dvLmNzcyhcIm9wYWNpdHlcIiwgMSkuZHJhd3N2ZyhcImFuaW1hdGVcIik7XHJcblx0fVxyXG59KSgpO1xyXG5cclxuLy8vLy8vLy8vLy8vc2Nyb2xsRXZlbnRzX3N0YXJ0Ly8vLy8vLy8vLy8vXHJcbiQoZnVuY3Rpb24gKCkge1xyXG5cclxuXHQvL25hdkhlYWRlclNob3dfdmFyaWFibGVzXHJcblx0dmFyIGNsb25lTmF2ID0gJCgnI25hdkhlYWRlcicpLmNsb25lKCkuYXR0cignaWQnLCAnY2xvbmVOYXYnKS5hZGRDbGFzcygnY2xvbmVOYXYnKS5pbnNlcnRBZnRlcignI25hdkhlYWRlcicpO1xyXG5cdHZhciBsb2dvTW92ZSA9ICQoJy5sb2dvRm9sbG93Omxhc3QnKTtcclxuXHR2YXIgc2hvd0NsYXNzID0gJ2lzU2hvdyc7XHJcblx0Ly9zaG93VXBfdmFyaWFibGVzXHJcblx0dmFyIGZvclNob3cxID0gJCgnLmZvclNob3cxJyk7XHJcblx0dmFyIGZvclNob3cyID0gJCgnLmZvclNob3cyJyk7XHJcblx0dmFyIGZvclNob3czID0gJCgnLmZvclNob3czJyk7XHJcblx0dmFyIGZvclNob3c0ID0gJCgnLmZvclNob3c0Jyk7XHJcblx0dmFyIGZvclNob3dzID0gW2ZvclNob3cxLCBmb3JTaG93MiwgZm9yU2hvdzMsIGZvclNob3c0XTtcclxuXHQvL3RleHRpbGxhdGVfdmFyaWFibGVzXHJcblx0dmFyIGhlYWRpbmcgPSAkKCcuaGVhZGluZycpO1xyXG5cdC8vY29tbWVudEFuaW1fdmFyaWFibGVzXHJcblx0dmFyIGNvbW1lbnRBbmltID0gJCgnI2NvbW1lbnRBbmltJyk7XHJcblx0Ly9yb2xsQmFja192YXJpYWJsZXNcclxuXHR2YXIgcm9sbEJhY2sgPSAkKCcjcm9sbEJhY2snKTtcclxuXHQvL2hlbGxvTW9naV92YXJpYWJsZXNcclxuXHR2YXIgbW9naUZvb3RlciA9ICQoJyNtb2dpRm9vdGVyJyk7XHJcblx0dmFyIGNvbnRlbnRzSGVpZ2h0ID0gJChkb2N1bWVudCkuaGVpZ2h0KCk7XHJcblxyXG5cdC8vLy9zY3JvbGxFdmVudHMvLy8vXHJcblx0JCh3aW5kb3cpLm9uKCdzY3JvbGwnLCB0aHJvdHRsZShmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0Ly9jb21tb25fdmFyaWFibGVzXHJcblx0XHR2YXIgd2luZG93SGVpZ2h0ID0gJCh0aGlzKS5oZWlnaHQoKTtcclxuXHRcdHZhciBzY3JvbGwgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG5cclxuXHRcdC8vbmF2SGVhZGVyU2hvd19mdW5jXHJcblx0XHRpZiAoc2Nyb2xsID4gNzAwKSB7XHJcblx0XHRcdGxvZ29Nb3ZlLmNzcygnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcclxuXHRcdFx0Y2xvbmVOYXYuYWRkQ2xhc3Moc2hvd0NsYXNzKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNsb25lTmF2LnJlbW92ZUNsYXNzKHNob3dDbGFzcyk7XHJcblx0XHR9XHJcblx0XHQvL3Nob3dVcF9mdW5jXHJcblx0XHR2YXIgbGVuID0gZm9yU2hvd3MubGVuZ3RoO1xyXG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBsZW47IGorKykge1xyXG5cdFx0XHRmb3JTaG93c1tqXS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcblx0XHRcdFx0dmFyIGZvclNob3dQb2ludCA9ICQodGhpcykub2Zmc2V0KCkudG9wIC0gMzA7XHJcblx0XHRcdFx0dmFyIGRlbGF5VGltZSA9IDkwO1xyXG5cdFx0XHRcdGlmIChzY3JvbGwgPiBmb3JTaG93UG9pbnQgLSB3aW5kb3dIZWlnaHQpIHtcclxuXHRcdFx0XHRcdCQodGhpcykuZGVsYXkoaSAqIGRlbGF5VGltZSkucXVldWUoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdzaG93VXAnKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHQvL3RleHRpbGxhdGVfZnVuY1xyXG5cdFx0aGVhZGluZy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dmFyIGhlYWRpbmdQb2ludCA9ICQodGhpcykub2Zmc2V0KCkudG9wO1xyXG5cdFx0XHRpZiAoc2Nyb2xsID4gaGVhZGluZ1BvaW50IC0gd2luZG93SGVpZ2h0KSB7XHJcblx0XHRcdFx0JCh0aGlzKS5jc3MoJ29wYWNpdHknLCAxKS50ZXh0aWxsYXRlKHtcclxuXHRcdFx0XHRcdGluOiB7XHJcblx0XHRcdFx0XHRcdGVmZmVjdDogJ2ZhZGVJblVwJyxcclxuXHRcdFx0XHRcdFx0c2h1ZmZsZTogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0ZGVsYXk6IDIwLFxyXG5cdFx0XHRcdFx0XHRkZWxheVNjYWxlOiAzLFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdC8vY29tbWVudEFuaW1fZnVuY1xyXG5cdFx0aWYgKGNvbW1lbnRBbmltLmxlbmd0aCkge1xyXG5cdFx0XHR2YXIgbXlDb21tZW50UG9pbnQgPSBjb21tZW50QW5pbS5vZmZzZXQoKS50b3A7XHJcblx0XHRcdGlmIChzY3JvbGwgPiBteUNvbW1lbnRQb2ludCAtIHdpbmRvd0hlaWdodCkge1xyXG5cdFx0XHRcdGNvbW1lbnRBbmltLmNzcygnb3BhY2l0eScsIDEpLmFkZENsYXNzKCdhbmltYXRlZCB6b29tSW5Eb3duJyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC8vcm9sbEJhY2tfZnVuY1xyXG5cdFx0aWYgKHNjcm9sbCA+IDcwMCkge1xyXG5cdFx0XHRyb2xsQmFjay5mYWRlSW4oNTAwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJvbGxCYWNrLmZhZGVPdXQoNTAwKTtcclxuXHRcdH1cclxuXHRcdC8vaGVsbG9Nb2dpX2Z1bmNcclxuXHRcdGlmIChjb250ZW50c0hlaWdodCAtIChzY3JvbGwgKyB3aW5kb3dIZWlnaHQpIDwgMTAwKSB7XHJcblx0XHRcdG1vZ2lGb290ZXIuc2hvdyhmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnaGVsbG9Nb2dpJyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKG1vZ2lGb290ZXIuaGFzQ2xhc3MoJ2hlbGxvTW9naScpKSB7XHJcblx0XHRcdFx0bW9naUZvb3Rlci5mYWRlT3V0KDIwMCwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnaGVsbG9Nb2dpJyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0fSwgMTUwKSk7XHJcblx0Ly8vL3Njcm9sbEV2ZW50cy8vLy9cclxuXHJcblx0Ly8vL29wdGlvbmFsX2Z1bmMvLy8vXHJcblx0Ly9yb2xsQmFja0NsaWNrZWRcclxuXHRyb2xsQmFjay5jbGljayhmdW5jdGlvbiAoKSB7XHJcblx0XHQkKCdib2R5LGh0bWwnKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIDcwMCwgJ2Vhc2VJbk91dFF1YXJ0Jyk7XHJcblx0fSk7XHJcblx0Ly8vL29wdGlvbmFsX2Z1bmMvLy8vXHJcblxyXG59KTtcclxuLy8vLy8vLy8vLy8vc2Nyb2xsRXZlbnRzX2VuZC8vLy8vLy8vLy8vL1xyXG5cclxuLy8vLy8vLy8vLy8vc3BOYXZIZWFkZXIvLy8vLy8vLy8vLy9cclxuJChmdW5jdGlvbiAoKSB7XHJcblx0dmFyIGhhbWJCdG5zID0gJCgnI2hhbWJCdG4nKTtcclxuXHR2YXIgaGFtYkJ0bjEgPSAkKCcuaGFtYkJ0bjEnKTtcclxuXHR2YXIgaGFtYkJ0bjIgPSAkKCcuaGFtYkJ0bjInKTtcclxuXHR2YXIgaGFtYkJ0bjMgPSAkKCcuaGFtYkJ0bjMnKTtcclxuXHR2YXIgc3BOYXYgPSAkKCcjc3BOYXZIZWFkZXInKTtcclxuXHR2YXIgc3BOYXZMaXN0cyA9ICQoJy5zcE5hdkhlYWRlciB1bCBsaScpO1xyXG5cdHZhciBzcE5hdkxpbmsgPSAkKCcjc3BOYXZIZWFkZXIgbGkgYScpO1xyXG5cdHZhciBkZWxheVRpbWUgPSA4MDtcclxuXHR2YXIgZmFkZVRpbWUgPSAyMDA7XHJcblx0aGFtYkJ0bnMuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cdFx0dG9nZ2xlTmF2KCk7XHJcblx0XHRpZiAoc3BOYXZMaXN0cy5jc3MoJ2Rpc3BsYXknKSA9PSAnbGlzdC1pdGVtJykge1xyXG5cdFx0XHRzcE5hdkxpc3RzLmZhZGVPdXQoZmFkZVRpbWUpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3BOYXZMaXN0cy5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcblx0XHRcdFx0JCh0aGlzKS5kZWxheShpICogZGVsYXlUaW1lKS5mYWRlSW4oZmFkZVRpbWUpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRzcE5hdkxpbmsuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cdFx0dG9nZ2xlTmF2KCk7XHJcblx0XHRzcE5hdkxpc3RzLmhpZGUoKTtcclxuXHR9KTtcclxuXHRmdW5jdGlvbiB0b2dnbGVOYXYoKSB7XHJcblx0XHRpZiAoIXNwTmF2Lmhhc0NsYXNzKCdpcy1zaG93JykpIHtcclxuXHRcdFx0c3BOYXYuZmFkZVRvZ2dsZShmYWRlVGltZSkudG9nZ2xlQ2xhc3MoJ2lzLXNob3cnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNwTmF2LmZhZGVUb2dnbGUoZmFkZVRpbWUsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy1zaG93Jyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0aGFtYkJ0bjEudG9nZ2xlQ2xhc3MoJ2hhbWJNb3ZlMScpO1xyXG5cdFx0aGFtYkJ0bjIudG9nZ2xlQ2xhc3MoJ2hhbWJNb3ZlMicpO1xyXG5cdFx0aGFtYkJ0bjMudG9nZ2xlQ2xhc3MoJ2hhbWJNb3ZlMycpO1xyXG5cdH1cclxufSk7XHJcbi8vLy8vLy8vLy8vL3NwTmF2SGVhZGVyLy8vLy8vLy8vLy8vXHJcbi8v4oaRY2FuIG5vdCByZXBsYWNl4oaTLy9cclxuLy8vLy8vLy8vLy8vc21vb3RoU2Nyb2xsLy8vLy8vLy8vLy8vXHJcbiQoZnVuY3Rpb24gKCkge1xyXG5cdCQoJy5uYXZIZWFkZXIgYVtocmVmXj1cIiNcIl0nKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcblx0XHR2YXIgaHJlZiA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG5cdFx0dmFyIHRhcmdldCA9ICQoaHJlZiA9PSAnIycgfHwgaHJlZiA9PT0gJycgPyAnaHRtbCcgOiBocmVmKTtcclxuXHRcdHZhciBwb3NpdGlvbiA9IHRhcmdldC5vZmZzZXQoKS50b3A7XHJcblx0XHRpZiAoaHJlZiA9PT0gJyNjb250YWN0Jykge1xyXG5cdFx0XHQkKCdodG1sLGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiBwb3NpdGlvbiB9LCA3MDAsICdlYXNlSW5PdXRRdWFydCcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogcG9zaXRpb24gLSA1MCB9LCA3MDAsICdlYXNlSW5PdXRRdWFydCcpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cdCQoJyNzcE5hdkhlYWRlciBhW2hyZWZePVwiI1wiXScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHRcdHZhciBocmVmID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcblx0XHR2YXIgdGFyZ2V0ID0gJChocmVmID09ICcjJyB8fCBocmVmID09PSAnJyA/ICdodG1sJyA6IGhyZWYpO1xyXG5cdFx0dmFyIHBvc2l0aW9uID0gdGFyZ2V0Lm9mZnNldCgpLnRvcDtcclxuXHRcdGlmIChocmVmID09PSAnI2NvbnRhY3QnKSB7XHJcblx0XHRcdCQoJ2h0bWwsYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IHBvc2l0aW9uICsgMTAwIH0sIDcwMCwgJ2Vhc2VJbk91dFF1YXJ0Jyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkKCdodG1sLGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiBwb3NpdGlvbiArIDUwIH0sIDcwMCwgJ2Vhc2VJbk91dFF1YXJ0Jyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcbn0pO1xyXG4vLy8vLy8vLy8vLy9zbW9vdGhTY3JvbGwvLy8vLy8vLy8vLy9cclxuXHJcbi8vLy8vLy8vLy8vL290aGVycGFnZSB0byBmcm9udHBhZ2UvLy8vLy8vLy8vLy9cclxuJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG5cdHZhciBmaXhQeCA9IC01MDtcclxuXHR2YXIgdXJsID0gJChsb2NhdGlvbikuYXR0cignaHJlZicpO1xyXG5cdGlmICh1cmwuaW5kZXhPZihcIj9pZD1cIikgIT0gLTEpIHtcclxuXHRcdHZhciBpZE5hbWUgPSB1cmwuc3BsaXQoXCI/aWQ9XCIpO1xyXG5cdFx0dmFyIHRhcmdldCA9ICQoJyMnICsgaWROYW1lW2lkTmFtZS5sZW5ndGggLSAxXSk7XHJcblx0XHRpZiAodGFyZ2V0Lmxlbmd0aCkge1xyXG5cdFx0XHR2YXIgcG9zID0gdGFyZ2V0Lm9mZnNldCgpLnRvcCArIGZpeFB4O1xyXG5cdFx0XHRpZiAoKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignaVBob25lJykgPiAwICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignaVBhZCcpID09IC0xKSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQb2QnKSA+IDAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdBbmRyb2lkJykgPiAwKSB7XHJcblx0XHRcdFx0aWYgKHRhcmdldC5wcm9wKCdpZCcpID09IFwiY29udGFjdFwiKSB7XHJcblx0XHRcdFx0XHQkKFwiaHRtbCwgYm9keVwiKS5zY3JvbGxUb3AocG9zICsgMTUwKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JChcImh0bWwsIGJvZHlcIikuc2Nyb2xsVG9wKHBvcyArIDEwMCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmICh0YXJnZXQucHJvcCgnaWQnKSA9PSBcImNvbnRhY3RcIikge1xyXG5cdFx0XHRcdFx0JChcImh0bWwsIGJvZHlcIikuc2Nyb2xsVG9wKHBvcyArIDUwKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JChcImh0bWwsIGJvZHlcIikuc2Nyb2xsVG9wKHBvcyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59KTtcclxuLy8vLy8vLy8vLy8vb3RoZXJwYWdlIHRvIGZyb250cGFnZS8vLy8vLy8vLy8vL1xyXG5cclxuLy8vLy8vLy8vLy8vbW9kYWwvLy8vLy8vLy8vLy9cclxuJChmdW5jdGlvbiAoKSB7XHJcblx0JCgnLm1vZGFsT3BlbicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmICgkKHRoaXMpLnBhcmVudHMoJyNzcE5hdkhlYWRlcicpWzBdKSB7XHJcblx0XHRcdCQoJyNtb2RhbEFyZWEnKS5zaG93KCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkKCcjbW9kYWxBcmVhJykuZmFkZUluKCk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0JCgnI21vZGFsQ2xvc2UsI21vZGFsT3V0ZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcblx0XHQkKCcjbW9kYWxBcmVhJykuZmFkZU91dCgpO1xyXG5cdH0pO1xyXG59KTtcclxuLy8vLy8vLy8vLy8vbW9kYWwvLy8vLy8vLy8vLy9cclxuXHJcbi8vLy8vLy8vLy8vL3Njcm9sbCBjb250cm9sIGZvciBmdWNraW4nSUUxMS8vLy8vLy8vLy8vL1xyXG5pZiAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvTVNJRSAxMC9pKSB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9UcmlkZW50XFwvN1xcLi8pIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8xMlxcLi8pKSB7XHJcblx0JCgnYm9keScpLm9uKFwibW91c2V3aGVlbFwiLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dmFyIHdkID0gZXZlbnQud2hlZWxEZWx0YTtcclxuXHRcdHZhciBjc3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgY3NwIC0gd2QpO1xyXG5cdH0pO1xyXG59XHJcbi8vLy8vLy8vLy8vL3Njcm9sbCBjb250cm9sIGZvciBmdWNraW4nSUUxMS8vLy8vLy8vLy8vL1xyXG5cclxuLy8vLy8vLy8vLy8vc2Nyb2xsVHJpZ2dlckFsbC1ib3R0b21GaXhBYnNvbHV0ZWx5ISEhLy8vLy8vLy8vLy8vXHJcbiQoZnVuY3Rpb24gKCkge1xyXG5cdCQod2luZG93KS50cmlnZ2VyKCdzY3JvbGwnKTtcclxufSk7XHJcbi8vLy8vLy8vLy8vL3Njcm9sbFRyaWdnZXJBbGwtYm90dG9tRml4QWJzb2x1dGVseSEhIS8vLy8vLy8vLy8vL1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG4vLy8vLy8vLy8vLy8vL3RleHRpbGxhdGUuanMvLy8vLy8vLy8vLy8vL1xyXG4vKlxyXG4gKiB0ZXh0aWxsYXRlLmpzXHJcbiAqIGh0dHA6Ly9qc2Noci5naXRodWIuY29tL3RleHRpbGxhdGVcclxuICogTUlUIGxpY2Vuc2VkXHJcbiAqXHJcbiAqIENvcHlyaWdodCAoQykgMjAxMi0yMDEzIEpvcmRhbiBTY2hyb3RlclxyXG4gKi9cclxuXHJcbihmdW5jdGlvbiAoJCkge1xyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHRmdW5jdGlvbiBpc0luRWZmZWN0KGVmZmVjdCkge1xyXG5cdFx0cmV0dXJuIC9Jbi8udGVzdChlZmZlY3QpIHx8ICQuaW5BcnJheShlZmZlY3QsICQuZm4udGV4dGlsbGF0ZS5kZWZhdWx0cy5pbkVmZmVjdHMpID49IDA7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBpc091dEVmZmVjdChlZmZlY3QpIHtcclxuXHRcdHJldHVybiAvT3V0Ly50ZXN0KGVmZmVjdCkgfHwgJC5pbkFycmF5KGVmZmVjdCwgJC5mbi50ZXh0aWxsYXRlLmRlZmF1bHRzLm91dEVmZmVjdHMpID49IDA7XHJcblx0fVxyXG5cclxuXHJcblx0ZnVuY3Rpb24gc3RyaW5nVG9Cb29sZWFuKHN0cikge1xyXG5cdFx0aWYgKHN0ciAhPT0gXCJ0cnVlXCIgJiYgc3RyICE9PSBcImZhbHNlXCIpIHJldHVybiBzdHI7XHJcblx0XHRyZXR1cm4gKHN0ciA9PT0gXCJ0cnVlXCIpO1xyXG5cdH1cclxuXHJcblx0Ly8gY3VzdG9tIGdldCBkYXRhIGFwaSBtZXRob2RcclxuXHRmdW5jdGlvbiBnZXREYXRhKG5vZGUpIHtcclxuXHRcdHZhciBhdHRycyA9IG5vZGUuYXR0cmlidXRlcyB8fCBbXVxyXG5cdFx0XHQsIGRhdGEgPSB7fTtcclxuXHJcblx0XHRpZiAoIWF0dHJzLmxlbmd0aCkgcmV0dXJuIGRhdGE7XHJcblxyXG5cdFx0JC5lYWNoKGF0dHJzLCBmdW5jdGlvbiAoaSwgYXR0cikge1xyXG5cdFx0XHR2YXIgbm9kZU5hbWUgPSBhdHRyLm5vZGVOYW1lLnJlcGxhY2UoL2RlbGF5c2NhbGUvLCAnZGVsYXlTY2FsZScpO1xyXG5cdFx0XHRpZiAoL15kYXRhLWluLSovLnRlc3Qobm9kZU5hbWUpKSB7XHJcblx0XHRcdFx0ZGF0YS5pbiA9IGRhdGEuaW4gfHwge307XHJcblx0XHRcdFx0ZGF0YS5pbltub2RlTmFtZS5yZXBsYWNlKC9kYXRhLWluLS8sICcnKV0gPSBzdHJpbmdUb0Jvb2xlYW4oYXR0ci5ub2RlVmFsdWUpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKC9eZGF0YS1vdXQtKi8udGVzdChub2RlTmFtZSkpIHtcclxuXHRcdFx0XHRkYXRhLm91dCA9IGRhdGEub3V0IHx8IHt9O1xyXG5cdFx0XHRcdGRhdGEub3V0W25vZGVOYW1lLnJlcGxhY2UoL2RhdGEtb3V0LS8sICcnKV0gPSBzdHJpbmdUb0Jvb2xlYW4oYXR0ci5ub2RlVmFsdWUpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKC9eZGF0YS0qLy50ZXN0KG5vZGVOYW1lKSkge1xyXG5cdFx0XHRcdGRhdGFbbm9kZU5hbWUucmVwbGFjZSgvZGF0YS0vLCAnJyldID0gc3RyaW5nVG9Cb29sZWFuKGF0dHIubm9kZVZhbHVlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIGRhdGE7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBzaHVmZmxlKG8pIHtcclxuXHRcdGZvciAodmFyIGosIHgsIGkgPSBvLmxlbmd0aDsgaTsgaiA9IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiBpKSwgeCA9IG9bLS1pXSwgb1tpXSA9IG9bal0sIG9bal0gPSB4KTtcclxuXHRcdHJldHVybiBvO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYW5pbWF0ZSgkdCwgZWZmZWN0LCBjYikge1xyXG5cdFx0JHQuYWRkQ2xhc3MoJ2FuaW1hdGVkICcgKyBlZmZlY3QpXHJcblx0XHRcdC5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpXHJcblx0XHRcdC5zaG93KCk7XHJcblxyXG5cdFx0JHQub25lKCd3ZWJraXRBbmltYXRpb25FbmQgbW96QW5pbWF0aW9uRW5kIE1TQW5pbWF0aW9uRW5kIG9hbmltYXRpb25lbmQgYW5pbWF0aW9uZW5kJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHQkdC5yZW1vdmVDbGFzcygnYW5pbWF0ZWQgJyArIGVmZmVjdCk7XHJcblx0XHRcdGNiICYmIGNiKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGFuaW1hdGVUb2tlbnMoJHRva2Vucywgb3B0aW9ucywgY2IpIHtcclxuXHRcdHZhciB0aGF0ID0gdGhpc1xyXG5cdFx0XHQsIGNvdW50ID0gJHRva2Vucy5sZW5ndGg7XHJcblxyXG5cdFx0aWYgKCFjb3VudCkge1xyXG5cdFx0XHRjYiAmJiBjYigpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKG9wdGlvbnMuc2h1ZmZsZSkgJHRva2VucyA9IHNodWZmbGUoJHRva2Vucyk7XHJcblx0XHRpZiAob3B0aW9ucy5yZXZlcnNlKSAkdG9rZW5zID0gJHRva2Vucy50b0FycmF5KCkucmV2ZXJzZSgpO1xyXG5cclxuXHRcdCQuZWFjaCgkdG9rZW5zLCBmdW5jdGlvbiAoaSwgdCkge1xyXG5cdFx0XHR2YXIgJHRva2VuID0gJCh0KTtcclxuXHJcblx0XHRcdGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xyXG5cdFx0XHRcdGlmIChpc0luRWZmZWN0KG9wdGlvbnMuZWZmZWN0KSkge1xyXG5cdFx0XHRcdFx0JHRva2VuLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChpc091dEVmZmVjdChvcHRpb25zLmVmZmVjdCkpIHtcclxuXHRcdFx0XHRcdCR0b2tlbi5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNvdW50IC09IDE7XHJcblx0XHRcdFx0aWYgKCFjb3VudCAmJiBjYikgY2IoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIGRlbGF5ID0gb3B0aW9ucy5zeW5jID8gb3B0aW9ucy5kZWxheSA6IG9wdGlvbnMuZGVsYXkgKiBpICogb3B0aW9ucy5kZWxheVNjYWxlO1xyXG5cclxuXHRcdFx0JHRva2VuLnRleHQoKSA/XHJcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7IGFuaW1hdGUoJHRva2VuLCBvcHRpb25zLmVmZmVjdCwgY29tcGxldGUpOyB9LCBkZWxheSkgOlxyXG5cdFx0XHRcdGNvbXBsZXRlKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHZhciBUZXh0aWxsYXRlID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuXHRcdHZhciBiYXNlID0gdGhpc1xyXG5cdFx0XHQsICRlbGVtZW50ID0gJChlbGVtZW50KTtcclxuXHJcblx0XHRiYXNlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGJhc2UuJHRleHRzID0gJGVsZW1lbnQuZmluZChvcHRpb25zLnNlbGVjdG9yKTtcclxuXHJcblx0XHRcdGlmICghYmFzZS4kdGV4dHMubGVuZ3RoKSB7XHJcblx0XHRcdFx0YmFzZS4kdGV4dHMgPSAkKCc8dWwgY2xhc3M9XCJ0ZXh0c1wiPjxsaT4nICsgJGVsZW1lbnQuaHRtbCgpICsgJzwvbGk+PC91bD4nKTtcclxuXHRcdFx0XHQkZWxlbWVudC5odG1sKGJhc2UuJHRleHRzKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YmFzZS4kdGV4dHMuaGlkZSgpO1xyXG5cclxuXHRcdFx0YmFzZS4kY3VycmVudCA9ICQoJzxzcGFuPicpXHJcblx0XHRcdFx0Lmh0bWwoYmFzZS4kdGV4dHMuZmluZCgnOmZpcnN0LWNoaWxkJykuaHRtbCgpKVxyXG5cdFx0XHRcdC5wcmVwZW5kVG8oJGVsZW1lbnQpO1xyXG5cclxuXHRcdFx0aWYgKGlzSW5FZmZlY3Qob3B0aW9ucy5pbi5lZmZlY3QpKSB7XHJcblx0XHRcdFx0YmFzZS4kY3VycmVudC5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XHJcblx0XHRcdH0gZWxzZSBpZiAoaXNPdXRFZmZlY3Qob3B0aW9ucy5vdXQuZWZmZWN0KSkge1xyXG5cdFx0XHRcdGJhc2UuJGN1cnJlbnQuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YmFzZS5zZXRPcHRpb25zKG9wdGlvbnMpO1xyXG5cclxuXHRcdFx0YmFzZS50aW1lb3V0UnVuID0gbnVsbDtcclxuXHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGJhc2Uub3B0aW9ucy5hdXRvU3RhcnQgJiYgYmFzZS5zdGFydCgpO1xyXG5cdFx0XHR9LCBiYXNlLm9wdGlvbnMuaW5pdGlhbERlbGF5KTtcclxuXHRcdH07XHJcblxyXG5cdFx0YmFzZS5zZXRPcHRpb25zID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuXHRcdFx0YmFzZS5vcHRpb25zID0gb3B0aW9ucztcclxuXHRcdH07XHJcblxyXG5cdFx0YmFzZS50cmlnZ2VyRXZlbnQgPSBmdW5jdGlvbiAobmFtZSkge1xyXG5cdFx0XHR2YXIgZSA9ICQuRXZlbnQobmFtZSArICcudGx0Jyk7XHJcblx0XHRcdCRlbGVtZW50LnRyaWdnZXIoZSwgYmFzZSk7XHJcblx0XHRcdHJldHVybiBlO1xyXG5cdFx0fTtcclxuXHJcblx0XHRiYXNlLmluID0gZnVuY3Rpb24gKGluZGV4LCBjYikge1xyXG5cdFx0XHRpbmRleCA9IGluZGV4IHx8IDA7XHJcblxyXG5cdFx0XHR2YXIgJGVsZW0gPSBiYXNlLiR0ZXh0cy5maW5kKCc6bnRoLWNoaWxkKCcgKyAoKGluZGV4IHx8IDApICsgMSkgKyAnKScpXHJcblx0XHRcdFx0LCBvcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sIGJhc2Uub3B0aW9ucywgJGVsZW0ubGVuZ3RoID8gZ2V0RGF0YSgkZWxlbVswXSkgOiB7fSlcclxuXHRcdFx0XHQsICR0b2tlbnM7XHJcblxyXG5cdFx0XHQkZWxlbS5hZGRDbGFzcygnY3VycmVudCcpO1xyXG5cclxuXHRcdFx0YmFzZS50cmlnZ2VyRXZlbnQoJ2luQW5pbWF0aW9uQmVnaW4nKTtcclxuXHRcdFx0JGVsZW1lbnQuYXR0cignZGF0YS1hY3RpdmUnLCAkZWxlbS5kYXRhKCdpZCcpKTtcclxuXHJcblx0XHRcdGJhc2UuJGN1cnJlbnRcclxuXHRcdFx0XHQuaHRtbCgkZWxlbS5odG1sKCkpXHJcblx0XHRcdFx0LmxldHRlcmluZygnd29yZHMnKTtcclxuXHJcblx0XHRcdC8vIHNwbGl0IHdvcmRzIHRvIGluZGl2aWR1YWwgY2hhcmFjdGVycyBpZiB0b2tlbiB0eXBlIGlzIHNldCB0byAnY2hhcidcclxuXHRcdFx0aWYgKGJhc2Uub3B0aW9ucy50eXBlID09IFwiY2hhclwiKSB7XHJcblx0XHRcdFx0YmFzZS4kY3VycmVudC5maW5kKCdbY2xhc3NePVwid29yZFwiXScpXHJcblx0XHRcdFx0XHQuY3NzKHtcclxuXHRcdFx0XHRcdFx0J2Rpc3BsYXknOiAnaW5saW5lLWJsb2NrJyxcclxuXHRcdFx0XHRcdFx0Ly8gZml4IGZvciBwb29yIGlvcyBwZXJmb3JtYW5jZVxyXG5cdFx0XHRcdFx0XHQnLXdlYmtpdC10cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoMCwwLDApJyxcclxuXHRcdFx0XHRcdFx0Jy1tb3otdHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKDAsMCwwKScsXHJcblx0XHRcdFx0XHRcdCctby10cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoMCwwLDApJyxcclxuXHRcdFx0XHRcdFx0J3RyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCgwLDAsMCknXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LmVhY2goZnVuY3Rpb24gKCkgeyAkKHRoaXMpLmxldHRlcmluZygpOyB9KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0JHRva2VucyA9IGJhc2UuJGN1cnJlbnRcclxuXHRcdFx0XHQuZmluZCgnW2NsYXNzXj1cIicgKyBiYXNlLm9wdGlvbnMudHlwZSArICdcIl0nKVxyXG5cdFx0XHRcdC5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XHJcblxyXG5cdFx0XHRpZiAoaXNJbkVmZmVjdChvcHRpb25zLmluLmVmZmVjdCkpIHtcclxuXHRcdFx0XHQkdG9rZW5zLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuXHRcdFx0fSBlbHNlIGlmIChpc091dEVmZmVjdChvcHRpb25zLmluLmVmZmVjdCkpIHtcclxuXHRcdFx0XHQkdG9rZW5zLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGJhc2UuY3VycmVudEluZGV4ID0gaW5kZXg7XHJcblxyXG5cdFx0XHRhbmltYXRlVG9rZW5zKCR0b2tlbnMsIG9wdGlvbnMuaW4sIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRiYXNlLnRyaWdnZXJFdmVudCgnaW5BbmltYXRpb25FbmQnKTtcclxuXHRcdFx0XHRpZiAob3B0aW9ucy5pbi5jYWxsYmFjaykgb3B0aW9ucy5pbi5jYWxsYmFjaygpO1xyXG5cdFx0XHRcdGlmIChjYikgY2IoYmFzZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fTtcclxuXHJcblx0XHRiYXNlLm91dCA9IGZ1bmN0aW9uIChjYikge1xyXG5cdFx0XHR2YXIgJGVsZW0gPSBiYXNlLiR0ZXh0cy5maW5kKCc6bnRoLWNoaWxkKCcgKyAoKGJhc2UuY3VycmVudEluZGV4IHx8IDApICsgMSkgKyAnKScpXHJcblx0XHRcdFx0LCAkdG9rZW5zID0gYmFzZS4kY3VycmVudC5maW5kKCdbY2xhc3NePVwiJyArIGJhc2Uub3B0aW9ucy50eXBlICsgJ1wiXScpXHJcblx0XHRcdFx0LCBvcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sIGJhc2Uub3B0aW9ucywgJGVsZW0ubGVuZ3RoID8gZ2V0RGF0YSgkZWxlbVswXSkgOiB7fSk7XHJcblxyXG5cdFx0XHRiYXNlLnRyaWdnZXJFdmVudCgnb3V0QW5pbWF0aW9uQmVnaW4nKTtcclxuXHJcblx0XHRcdGFuaW1hdGVUb2tlbnMoJHRva2Vucywgb3B0aW9ucy5vdXQsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHQkZWxlbS5yZW1vdmVDbGFzcygnY3VycmVudCcpO1xyXG5cdFx0XHRcdGJhc2UudHJpZ2dlckV2ZW50KCdvdXRBbmltYXRpb25FbmQnKTtcclxuXHRcdFx0XHQkZWxlbWVudC5yZW1vdmVBdHRyKCdkYXRhLWFjdGl2ZScpO1xyXG5cdFx0XHRcdGlmIChvcHRpb25zLm91dC5jYWxsYmFjaykgb3B0aW9ucy5vdXQuY2FsbGJhY2soKTtcclxuXHRcdFx0XHRpZiAoY2IpIGNiKGJhc2UpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH07XHJcblxyXG5cdFx0YmFzZS5zdGFydCA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRiYXNlLnRyaWdnZXJFdmVudCgnc3RhcnQnKTtcclxuXHJcblx0XHRcdFx0KGZ1bmN0aW9uIHJ1bihpbmRleCkge1xyXG5cdFx0XHRcdFx0YmFzZS5pbihpbmRleCwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHR2YXIgbGVuZ3RoID0gYmFzZS4kdGV4dHMuY2hpbGRyZW4oKS5sZW5ndGg7XHJcblxyXG5cdFx0XHRcdFx0XHRpbmRleCArPSAxO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCFiYXNlLm9wdGlvbnMubG9vcCAmJiBpbmRleCA+PSBsZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoYmFzZS5vcHRpb25zLmNhbGxiYWNrKSBiYXNlLm9wdGlvbnMuY2FsbGJhY2soKTtcclxuXHRcdFx0XHRcdFx0XHRiYXNlLnRyaWdnZXJFdmVudCgnZW5kJyk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0aW5kZXggPSBpbmRleCAlIGxlbmd0aDtcclxuXHJcblx0XHRcdFx0XHRcdFx0YmFzZS50aW1lb3V0UnVuID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRiYXNlLm91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJ1bihpbmRleCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHR9LCBiYXNlLm9wdGlvbnMubWluRGlzcGxheVRpbWUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KGluZGV4IHx8IDApKTtcclxuXHRcdFx0fSwgYmFzZS5vcHRpb25zLmluaXRpYWxEZWxheSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGJhc2Uuc3RvcCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKGJhc2UudGltZW91dFJ1bikge1xyXG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwoYmFzZS50aW1lb3V0UnVuKTtcclxuXHRcdFx0XHRiYXNlLnRpbWVvdXRSdW4gPSBudWxsO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGJhc2UuaW5pdCgpO1xyXG5cdH07XHJcblxyXG5cdCQuZm4udGV4dGlsbGF0ZSA9IGZ1bmN0aW9uIChzZXR0aW5ncywgYXJncykge1xyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcylcclxuXHRcdFx0XHQsIGRhdGEgPSAkdGhpcy5kYXRhKCd0ZXh0aWxsYXRlJylcclxuXHRcdFx0XHQsIG9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB7fSwgJC5mbi50ZXh0aWxsYXRlLmRlZmF1bHRzLCBnZXREYXRhKHRoaXMpLCB0eXBlb2Ygc2V0dGluZ3MgPT0gJ29iamVjdCcgJiYgc2V0dGluZ3MpO1xyXG5cclxuXHRcdFx0aWYgKCFkYXRhKSB7XHJcblx0XHRcdFx0JHRoaXMuZGF0YSgndGV4dGlsbGF0ZScsIChkYXRhID0gbmV3IFRleHRpbGxhdGUodGhpcywgb3B0aW9ucykpKTtcclxuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2Ygc2V0dGluZ3MgPT0gJ3N0cmluZycpIHtcclxuXHRcdFx0XHRkYXRhW3NldHRpbmdzXS5hcHBseShkYXRhLCBbXS5jb25jYXQoYXJncykpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGRhdGEuc2V0T3B0aW9ucy5jYWxsKGRhdGEsIG9wdGlvbnMpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHQkLmZuLnRleHRpbGxhdGUuZGVmYXVsdHMgPSB7XHJcblx0XHRzZWxlY3RvcjogJy50ZXh0cycsXHJcblx0XHRsb29wOiBmYWxzZSxcclxuXHRcdG1pbkRpc3BsYXlUaW1lOiAyMDAwLFxyXG5cdFx0aW5pdGlhbERlbGF5OiAwLFxyXG5cdFx0aW46IHtcclxuXHRcdFx0ZWZmZWN0OiAnZmFkZUluTGVmdEJpZycsXHJcblx0XHRcdGRlbGF5U2NhbGU6IDEuNSxcclxuXHRcdFx0ZGVsYXk6IDUwLFxyXG5cdFx0XHRzeW5jOiBmYWxzZSxcclxuXHRcdFx0cmV2ZXJzZTogZmFsc2UsXHJcblx0XHRcdHNodWZmbGU6IGZhbHNlLFxyXG5cdFx0XHRjYWxsYmFjazogZnVuY3Rpb24gKCkgeyB9XHJcblx0XHR9LFxyXG5cdFx0b3V0OiB7XHJcblx0XHRcdGVmZmVjdDogJ2hpbmdlJyxcclxuXHRcdFx0ZGVsYXlTY2FsZTogMS41LFxyXG5cdFx0XHRkZWxheTogNTAsXHJcblx0XHRcdHN5bmM6IGZhbHNlLFxyXG5cdFx0XHRyZXZlcnNlOiBmYWxzZSxcclxuXHRcdFx0c2h1ZmZsZTogZmFsc2UsXHJcblx0XHRcdGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7IH1cclxuXHRcdH0sXHJcblx0XHRhdXRvU3RhcnQ6IHRydWUsXHJcblx0XHRpbkVmZmVjdHM6IFtdLFxyXG5cdFx0b3V0RWZmZWN0czogWydoaW5nZSddLFxyXG5cdFx0Y2FsbGJhY2s6IGZ1bmN0aW9uICgpIHsgfSxcclxuXHRcdHR5cGU6ICdjaGFyJ1xyXG5cdH07XHJcblxyXG59KGpRdWVyeSkpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy9MZXR0ZXJpbmcuanMvLy8vLy8vLy8vLy8vL1xyXG4vKmdsb2JhbCBqUXVlcnkgKi9cclxuLyohXHRcclxuKiBMZXR0ZXJpbmcuSlMgMC42LjFcclxuKlxyXG4qIENvcHlyaWdodCAyMDEwLCBEYXZlIFJ1cGVydCBodHRwOi8vZGF2ZXJ1cGVydC5jb21cclxuKiBSZWxlYXNlZCB1bmRlciB0aGUgV1RGUEwgbGljZW5zZSBcclxuKiBodHRwOi8vc2FtLnpveS5vcmcvd3RmcGwvXHJcbipcclxuKiBUaGFua3MgdG8gUGF1bCBJcmlzaCAtIGh0dHA6Ly9wYXVsaXJpc2guY29tIC0gZm9yIHRoZSBmZWVkYmFjay5cclxuKlxyXG4qIERhdGU6IE1vbiBTZXAgMjAgMTc6MTQ6MDAgMjAxMCAtMDYwMFxyXG4qL1xyXG4oZnVuY3Rpb24gKCQpIHtcclxuXHRmdW5jdGlvbiBpbmplY3Rvcih0LCBzcGxpdHRlciwga2xhc3MsIGFmdGVyKSB7XHJcblx0XHR2YXIgYSA9IHQudGV4dCgpLnNwbGl0KHNwbGl0dGVyKSwgaW5qZWN0ID0gJyc7XHJcblx0XHRpZiAoYS5sZW5ndGgpIHtcclxuXHRcdFx0JChhKS5lYWNoKGZ1bmN0aW9uIChpLCBpdGVtKSB7XHJcblx0XHRcdFx0aW5qZWN0ICs9ICc8c3BhbiBjbGFzcz1cIicgKyBrbGFzcyArIChpICsgMSkgKyAnXCI+JyArIGl0ZW0gKyAnPC9zcGFuPicgKyBhZnRlcjtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHQuZW1wdHkoKS5hcHBlbmQoaW5qZWN0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHZhciBtZXRob2RzID0ge1xyXG5cdFx0aW5pdDogZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0aW5qZWN0b3IoJCh0aGlzKSwgJycsICdjaGFyJywgJycpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdHdvcmRzOiBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRpbmplY3RvcigkKHRoaXMpLCAnICcsICd3b3JkJywgJyAnKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRsaW5lczogZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dmFyIHIgPSBcImVlZmVjMzAzMDc5YWQxNzQwNWM4ODllMDkyZTEwNWIwXCI7XHJcblx0XHRcdFx0Ly8gQmVjYXVzZSBpdCdzIGhhcmQgdG8gc3BsaXQgYSA8YnIvPiB0YWcgY29uc2lzdGVudGx5IGFjcm9zcyBicm93c2VycyxcclxuXHRcdFx0XHQvLyAoKmFoZW0qIElFICphaGVtKiksIHdlIHJlcGxhY2VzIGFsbCA8YnIvPiBpbnN0YW5jZXMgd2l0aCBhbiBtZDUgaGFzaCBcclxuXHRcdFx0XHQvLyAob2YgdGhlIHdvcmQgXCJzcGxpdFwiKS4gIElmIHlvdSdyZSB0cnlpbmcgdG8gdXNlIHRoaXMgcGx1Z2luIG9uIHRoYXQgXHJcblx0XHRcdFx0Ly8gbWQ1IGhhc2ggc3RyaW5nLCBpdCB3aWxsIGZhaWwgYmVjYXVzZSB5b3UncmUgYmVpbmcgcmlkaWN1bG91cy5cclxuXHRcdFx0XHRpbmplY3RvcigkKHRoaXMpLmNoaWxkcmVuKFwiYnJcIikucmVwbGFjZVdpdGgocikuZW5kKCksIHIsICdsaW5lJywgJycpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0JC5mbi5sZXR0ZXJpbmcgPSBmdW5jdGlvbiAobWV0aG9kKSB7XHJcblx0XHQvLyBNZXRob2QgY2FsbGluZyBsb2dpY1xyXG5cdFx0aWYgKG1ldGhvZCAmJiBtZXRob2RzW21ldGhvZF0pIHtcclxuXHRcdFx0cmV0dXJuIG1ldGhvZHNbbWV0aG9kXS5hcHBseSh0aGlzLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xyXG5cdFx0fSBlbHNlIGlmIChtZXRob2QgPT09ICdsZXR0ZXJzJyB8fCAhbWV0aG9kKSB7XHJcblx0XHRcdHJldHVybiBtZXRob2RzLmluaXQuYXBwbHkodGhpcywgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDApKTsgLy8gYWx3YXlzIHBhc3MgYW4gYXJyYXlcclxuXHRcdH1cclxuXHRcdCQuZXJyb3IoJ01ldGhvZCAnICsgbWV0aG9kICsgJyBkb2VzIG5vdCBleGlzdCBvbiBqUXVlcnkubGV0dGVyaW5nJyk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cclxufSkoalF1ZXJ5KTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vRHJhd1NWRy5qcy8vLy8vLy8vLy8vLy8vXHJcbi8qISBqUXVlcnkgRHJhd1NWRyB2MS4xLjAgKDIwMTYtMTAtMDUpIC0gZ2l0LmlvL3ZHRmE1IC0gQ29weXJpZ2h0IChjKSAyMDE2IExlb25hcmRvIFNhbnRvcyAtIE1JVCBMaWNlbnNlICovXHJcbiFmdW5jdGlvbiAodCkgeyBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFtcImpxdWVyeVwiXSwgdCkgOiBcIm9iamVjdFwiID09IHR5cGVvZiBtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMgPyBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChlLCBuKSB7IHJldHVybiB2b2lkIDAgPT09IG4gJiYgKG4gPSBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiB3aW5kb3cgPyByZXF1aXJlKFwianF1ZXJ5XCIpIDogcmVxdWlyZShcImpxdWVyeVwiKShlKSksIHQobiksIG47IH0gOiB0KGpRdWVyeSk7IH0oZnVuY3Rpb24gKHQpIHsgXCJ1c2Ugc3RyaWN0XCI7IHZhciBlID0gXCJkcmF3c3ZnXCIsIG4gPSB7IGR1cmF0aW9uOiAxZTMsIHN0YWdnZXI6IDIwMCwgZWFzaW5nOiBcInN3aW5nXCIsIHJldmVyc2U6ICExLCBjYWxsYmFjazogdC5ub29wIH0sIGEgPSBmdW5jdGlvbiAoKSB7IHZhciBhID0gZnVuY3Rpb24gKGEsIG8pIHsgdmFyIGkgPSB0aGlzLCByID0gdC5leHRlbmQobiwgbyk7IGkuJGVsbSA9IHQoYSksIGkuJGVsbS5pcyhcInN2Z1wiKSAmJiAoaS5vcHRpb25zID0gciwgaS4kcGF0aHMgPSBpLiRlbG0uZmluZChcInBhdGhcIiksIGkudG90YWxEdXJhdGlvbiA9IHIuZHVyYXRpb24gKyByLnN0YWdnZXIgKiBpLiRwYXRocy5sZW5ndGgsIGkuZHVyYXRpb24gPSByLmR1cmF0aW9uIC8gaS50b3RhbER1cmF0aW9uLCBpLiRwYXRocy5lYWNoKGZ1bmN0aW9uICh0LCBlKSB7IHZhciBuID0gZS5nZXRUb3RhbExlbmd0aCgpOyBlLnBhdGhMZW4gPSBuLCBlLmRlbGF5ID0gci5zdGFnZ2VyICogdCAvIGkudG90YWxEdXJhdGlvbiwgZS5zdHlsZS5zdHJva2VEYXNoYXJyYXkgPSBbbiwgbl0uam9pbihcIiBcIiksIGUuc3R5bGUuc3Ryb2tlRGFzaG9mZnNldCA9IG47IH0pLCBpLiRlbG0uYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uICh0LCBuKSB7IHJldHVybiBbbiwgZSArIFwiLWluaXRpYWxpemVkXCJdLmpvaW4oXCIgXCIpOyB9KSk7IH07IHJldHVybiBhLnByb3RvdHlwZS5nZXRWYWwgPSBmdW5jdGlvbiAoZSwgbikgeyByZXR1cm4gMSAtIHQuZWFzaW5nW25dKGUsIGUsIDAsIDEsIDEpOyB9LCBhLnByb3RvdHlwZS5wcm9ncmVzcyA9IGZ1bmN0aW9uICh0KSB7IHZhciBlID0gdGhpcywgbiA9IGUub3B0aW9ucywgYSA9IGUuZHVyYXRpb247IGUuJHBhdGhzLmVhY2goZnVuY3Rpb24gKG8sIGkpIHsgdmFyIHIgPSBpLnN0eWxlOyBpZiAoMSA9PT0gdCkgci5zdHJva2VEYXNob2Zmc2V0ID0gMDsgZWxzZSBpZiAoMCA9PT0gdCkgci5zdHJva2VEYXNob2Zmc2V0ID0gaS5wYXRoTGVuICsgXCJweFwiOyBlbHNlIGlmICh0ID49IGkuZGVsYXkgJiYgdCA8PSBhICsgaS5kZWxheSkgeyB2YXIgcyA9ICh0IC0gaS5kZWxheSkgLyBhOyByLnN0cm9rZURhc2hvZmZzZXQgPSBlLmdldFZhbChzLCBuLmVhc2luZykgKiBpLnBhdGhMZW4gKiAobi5yZXZlcnNlID8gLTEgOiAxKSArIFwicHhcIjsgfSB9KTsgfSwgYS5wcm90b3R5cGUuYW5pbWF0ZSA9IGZ1bmN0aW9uICgpIHsgdmFyIG4gPSB0aGlzOyBuLiRlbG0uYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uICh0LCBuKSB7IHJldHVybiBbbiwgZSArIFwiLWFuaW1hdGluZ1wiXS5qb2luKFwiIFwiKTsgfSksIHQoeyBsZW46IDAgfSkuYW5pbWF0ZSh7IGxlbjogMSB9LCB7IGVhc2luZzogXCJsaW5lYXJcIiwgZHVyYXRpb246IG4udG90YWxEdXJhdGlvbiwgc3RlcDogZnVuY3Rpb24gKHQsIGUpIHsgbi5wcm9ncmVzcy5jYWxsKG4sIHQgLyBlLmVuZCk7IH0sIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7IG4ub3B0aW9ucy5jYWxsYmFjay5jYWxsKHRoaXMpLCBuLiRlbG0uYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uICh0LCBuKSB7IHJldHVybiBuLnJlcGxhY2UoZSArIFwiLWFuaW1hdGluZ1wiLCBcIlwiKTsgfSk7IH0gfSk7IH0sIGE7IH0oKTsgdC5mbltlXSA9IGZ1bmN0aW9uIChuLCBvKSB7IHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkgeyB2YXIgaSA9IHQuZGF0YSh0aGlzLCBlKTsgaSAmJiBcIlwiICsgbiA9PT0gbiAmJiBpW25dID8gaVtuXShvKSA6IHQuZGF0YSh0aGlzLCBlLCBuZXcgYSh0aGlzLCBuKSk7IH0pOyB9OyB9KTtcclxuLyogZXNsaW50LWVuYWJsZSAqLyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=