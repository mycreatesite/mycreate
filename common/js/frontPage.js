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
////////////imports////////////
 ////////////global variable////////////

var accessFlag = sessionStorage.getItem('accessed'); /////////////////////loading scripts/////////////////////

(function () {
  var loadingArea = $('#loadingArea');

  if (accessFlag) {
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi93b3JrL2pzL2NvbW1vbi9mcm9udFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vd29yay9qcy9tb2R1bGUvcmVsbGF4Lm1pbi5qcyJdLCJuYW1lcyI6WyJhY2Nlc3NGbGFnIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwibG9hZGluZ0FyZWEiLCIkIiwibG9hZGluZ1BhZ2VSZW1vdmUiLCJ3aW5kb3ciLCJvbiIsImxvYWRpbmdQYWdlU2hvdyIsInNldFRpbWVvdXQiLCJhZGRDbGFzcyIsImZhZGVPdXQiLCJzZXRJdGVtIiwicmVtb3ZlIiwibXlzbGlkZXIiLCJqdWljeXNsaWRlciIsIm1vZGUiLCJ3aWR0aCIsImhlaWdodCIsIm1hc2siLCJiZ2NvbG9yIiwiYXV0b3BsYXkiLCJzaHVmZmxlIiwic2hvdyIsImVmZmVjdCIsImR1cmF0aW9uIiwiaGlkZSIsInJlbGxheCIsIlJlbGxheCIsInEiLCJnIiwiZGVmaW5lIiwiZ2xvYmFsIiwidSIsIkMiLCJhIiwib3B0aW9ucyIsImJyZWFrcG9pbnRzIiwibGVuZ3RoIiwiQXJyYXkiLCJpc0FycmF5IiwiZiIsImMiLCJiIiwiZm9yRWFjaCIsImNvbnNvbGUiLCJ3YXJuIiwiT2JqZWN0IiwiY3JlYXRlIiwicHJvdG90eXBlIiwibCIsInYiLCJtIiwibiIsImQiLCJ3IiwiQSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib1JlcXVlc3RBbmltYXRpb25GcmFtZSIsInAiLCJ4IiwiayIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJEIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJtb3pDYW5jZWxBbmltYXRpb25GcmFtZSIsImNsZWFyVGltZW91dCIsIkUiLCJ0cmFuc2Zvcm1Qcm9wIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJzcGVlZCIsInZlcnRpY2FsU3BlZWQiLCJob3Jpem9udGFsU3BlZWQiLCJjZW50ZXIiLCJ3cmFwcGVyIiwicmVsYXRpdmVUb1dyYXBwZXIiLCJyb3VuZCIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsInZlcnRpY2FsU2Nyb2xsQXhpcyIsImhvcml6b250YWxTY3JvbGxBeGlzIiwiY2FsbGJhY2siLCJrZXlzIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1zIiwibm9kZVR5cGUiLCJxdWVyeVNlbGVjdG9yIiwiRiIsIkIiLCJjc3NUZXh0IiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwiSCIsImUiLCJnZXRBdHRyaWJ1dGUiLCJ5IiwidCIsImgiLCJMIiwiciIsInhzIiwic20iLCJtZCIsImxnIiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5Iiwib2Zmc2V0VG9wIiwieiIsIkkiLCJzY3JvbGxMZWZ0IiwicGFnZVhPZmZzZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJjbGllbnRIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJsZWZ0IiwiY2xpZW50V2lkdGgiLCJvZmZzZXRXaWR0aCIsInNjcm9sbFdpZHRoIiwiTnVtYmVyIiwiSiIsImV4ZWMiLCJzbGljZSIsImluZGV4IiwiaW5kZXhPZiIsInJlcGxhY2UiLCJwdXNoIiwiYmFzZVgiLCJiYXNlWSIsInppbmRleCIsIm1pbiIsIm1heCIsIm1pblgiLCJtYXhYIiwibWluWSIsIm1heFkiLCJLIiwiRyIsInBhcmVudE5vZGUiLCJNYXRoIiwicGFzc2l2ZSIsInRvTG93ZXJDYXNlIiwiZGVzdHJveSIsInJlZnJlc2giXSwibWFwcGluZ3MiOiI7UUFB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LENBQW1CakQsQ0FBbkI7QUFDRixPQXZCcU87O0FBd0JyT04sT0FBQyxDQUFDdUgsT0FBRixHQUFZLFlBQVk7QUFBRSxhQUFLLElBQUlqSCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTixDQUFDLENBQUMwRCxLQUFGLENBQVF2RCxNQUE1QixFQUFvQ0csQ0FBQyxFQUFyQztBQUF3Q04sV0FBQyxDQUFDMEQsS0FBRixDQUFRcEQsQ0FBUixFQUFXb0MsS0FBWCxDQUFpQnFCLE9BQWpCLEdBQTJCNUMsQ0FBQyxDQUFDYixDQUFELENBQUQsQ0FBS29DLEtBQWhDO0FBQXhDOztBQUErRXRCLFNBQUMsS0FBS2pELE1BQU0sQ0FBQzhELG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDNkIsQ0FBckMsR0FBeUMxQyxDQUFDLEdBQUcsQ0FBQyxDQUFuRCxDQUFEO0FBQXdEYyxTQUFDLENBQUNQLENBQUQsQ0FBRDtBQUFNQSxTQUFDLEdBQUcsSUFBSjtBQUFVLE9BQWpMOztBQUFtTG1DLE9BQUM7QUFBSTlELE9BQUMsQ0FBQ3dILE9BQUYsR0FBWTFELENBQVo7QUFBZSxhQUFPOUQsQ0FBUDtBQUN2TTs7QUFBQ1UsV0FBTyxDQUFDQyxJQUFSLENBQWEsMkRBQWI7QUFDSCxHQWpDRDs7QUFpQ0csU0FBT2pCLENBQVA7QUFDSCxDQW5DRDtBQW9DQSxtQiIsImZpbGUiOiJmcm9udFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3dvcmsvanMvY29tbW9uL2Zyb250UGFnZS5qc1wiKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIi8vLy8vLy8vLy8vL2ltcG9ydHMvLy8vLy8vLy8vLy9cclxuXHJcbmltcG9ydCBSZWxsYXggZnJvbSAnLi4vbW9kdWxlL3JlbGxheC5taW4nO1xyXG5cclxuLy8vLy8vLy8vLy8vZ2xvYmFsIHZhcmlhYmxlLy8vLy8vLy8vLy8vXHJcblxyXG5jb25zdCBhY2Nlc3NGbGFnID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzZWQnKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vL2xvYWRpbmcgc2NyaXB0cy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4oZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IGxvYWRpbmdBcmVhID0gJCgnI2xvYWRpbmdBcmVhJyk7XHJcblx0aWYgKGFjY2Vzc0ZsYWcpIHtcclxuXHRcdGxvYWRpbmdQYWdlUmVtb3ZlKCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdCQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0bG9hZGluZ1BhZ2VTaG93KCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0ZnVuY3Rpb24gbG9hZGluZ1BhZ2VTaG93KCkge1xyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGxvYWRpbmdBcmVhLmFkZENsYXNzKCdsb2FkaW5nRmFkZScpLmZhZGVPdXQoNjAwKTtcclxuXHRcdH0sIDE1MDApO1xyXG5cdFx0c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzZWQnLCB0cnVlKTtcclxuXHR9XHJcblx0ZnVuY3Rpb24gbG9hZGluZ1BhZ2VSZW1vdmUoKSB7XHJcblx0XHRsb2FkaW5nQXJlYS5yZW1vdmUoKTtcclxuXHR9XHJcbn0pKCk7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vL2xvYWRpbmcgc2NyaXB0cy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vanVpY3lzbGlkZXIuanNcclxuJChmdW5jdGlvbiAoKSB7XHJcblx0dmFyIG15c2xpZGVyID0gJCgnI215c2xpZGVyJyk7XHJcblx0bXlzbGlkZXIuanVpY3lzbGlkZXIoe1xyXG5cdFx0bW9kZTogXCJjb3ZlclwiLFxyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdGhlaWdodDogJzEwMCUnLFxyXG5cdFx0bWFzazogXCJub25lXCIsXHJcblx0XHRiZ2NvbG9yOiBcIiMwMDBcIixcclxuXHRcdGF1dG9wbGF5OiA4MDAwLFxyXG5cdFx0c2h1ZmZsZTogZmFsc2UsXHJcblx0XHRzaG93OiB7IGVmZmVjdDogJ2ZhZGUnLCBkdXJhdGlvbjogMTUwMCB9LFxyXG5cdFx0aGlkZTogeyBlZmZlY3Q6ICdmYWRlJywgZHVyYXRpb246IDE1MDAgfSxcclxuXHR9KTtcclxufSk7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vL2p1aWN5c2xpZGVyLmpzXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy9SZWxsYXguanNcclxuJChmdW5jdGlvbiAoKSB7XHJcblx0dmFyIHJlbGxheCA9IG5ldyBSZWxsYXgoJy5yZWxsYXgnKTsvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbn0pO1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy9SZWxsYXguanMiLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuKGZ1bmN0aW9uIChxLCBnKSB7IFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFtdLCBnKSA6IFwib2JqZWN0XCIgPT09IHR5cGVvZiBtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMgPyBtb2R1bGUuZXhwb3J0cyA9IGcoKSA6IHEuUmVsbGF4ID0gZygpIH0pKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiB3aW5kb3cgPyB3aW5kb3cgOiBnbG9iYWwsIGZ1bmN0aW9uICgpIHtcblx0dmFyIHEgPSBmdW5jdGlvbiAoZywgdSkge1xuXHRcdGZ1bmN0aW9uIEMoKSB7IGlmICgzID09PSBhLm9wdGlvbnMuYnJlYWtwb2ludHMubGVuZ3RoICYmIEFycmF5LmlzQXJyYXkoYS5vcHRpb25zLmJyZWFrcG9pbnRzKSkgeyB2YXIgZiA9ICEwLCBjID0gITAsIGI7IGEub3B0aW9ucy5icmVha3BvaW50cy5mb3JFYWNoKGZ1bmN0aW9uIChhKSB7IFwibnVtYmVyXCIgIT09IHR5cGVvZiBhICYmIChjID0gITEpOyBudWxsICE9PSBiICYmIGEgPCBiICYmIChmID0gITEpOyBiID0gYSB9KTsgaWYgKGYgJiYgYykgcmV0dXJuIH0gYS5vcHRpb25zLmJyZWFrcG9pbnRzID0gWzU3NiwgNzY4LCAxMjAxXTsgY29uc29sZS53YXJuKFwiUmVsbGF4OiBZb3UgbXVzdCBwYXNzIGFuIGFycmF5IG9mIDMgbnVtYmVycyBpbiBhc2NlbmRpbmcgb3JkZXIgdG8gdGhlIGJyZWFrcG9pbnRzIG9wdGlvbi4gRGVmYXVsdHMgcmV2ZXJ0ZWRcIikgfVxuXHRcdHZhciBhID0gT2JqZWN0LmNyZWF0ZShxLnByb3RvdHlwZSksIGwgPSAwLCB2ID0gMCwgbSA9IDAsIG4gPSAwLCBkID0gW10sIHcgPSAhMCwgQSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbiAoYSkgeyByZXR1cm4gc2V0VGltZW91dChhLCAxRTMgLyA2MCkgfSwgcCA9IG51bGwsIHggPSAhMTsgdHJ5IHsgdmFyIGsgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIFwicGFzc2l2ZVwiLCB7IGdldDogZnVuY3Rpb24gKCkgeyB4ID0gITAgfSB9KTsgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0UGFzc2l2ZVwiLCBudWxsLCBrKTsgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0ZXN0UGFzc2l2ZVwiLCBudWxsLCBrKSB9IGNhdGNoIChmKSB7IH0gdmFyIEQgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0XHRjbGVhclRpbWVvdXQsIEUgPSB3aW5kb3cudHJhbnNmb3JtUHJvcCB8fCBmdW5jdGlvbiAoKSB7IHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgaWYgKG51bGwgPT09IGEuc3R5bGUudHJhbnNmb3JtKSB7IHZhciBjID0gW1wiV2Via2l0XCIsIFwiTW96XCIsIFwibXNcIl0sIGI7IGZvciAoYiBpbiBjKSBpZiAodm9pZCAwICE9PSBhLnN0eWxlW2NbYl0gKyBcIlRyYW5zZm9ybVwiXSkgcmV0dXJuIGNbYl0gKyBcIlRyYW5zZm9ybVwiIH0gcmV0dXJuIFwidHJhbnNmb3JtXCIgfSgpOyBhLm9wdGlvbnMgPSB7IHNwZWVkOiAtMiwgdmVydGljYWxTcGVlZDogbnVsbCwgaG9yaXpvbnRhbFNwZWVkOiBudWxsLCBicmVha3BvaW50czogWzU3NiwgNzY4LCAxMjAxXSwgY2VudGVyOiAhMSwgd3JhcHBlcjogbnVsbCwgcmVsYXRpdmVUb1dyYXBwZXI6ICExLCByb3VuZDogITAsIHZlcnRpY2FsOiAhMCwgaG9yaXpvbnRhbDogITEsIHZlcnRpY2FsU2Nyb2xsQXhpczogXCJ5XCIsIGhvcml6b250YWxTY3JvbGxBeGlzOiBcInhcIiwgY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHsgfSB9OyB1ICYmIE9iamVjdC5rZXlzKHUpLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcblx0XHRcdGEub3B0aW9uc1tkXSA9XG5cdFx0XHRcdHVbZF1cblx0XHRcdH0pOyB1ICYmIHUuYnJlYWtwb2ludHMgJiYgQygpOyBnIHx8IChnID0gXCIucmVsbGF4XCIpOyBrID0gXCJzdHJpbmdcIiA9PT0gdHlwZW9mIGcgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGcpIDogW2ddOyBpZiAoMCA8IGsubGVuZ3RoKSB7XG5cdFx0XHRhLmVsZW1zID0gazsgaWYgKGEub3B0aW9ucy53cmFwcGVyICYmICFhLm9wdGlvbnMud3JhcHBlci5ub2RlVHlwZSkgaWYgKGsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGEub3B0aW9ucy53cmFwcGVyKSkgYS5vcHRpb25zLndyYXBwZXIgPSBrOyBlbHNlIHsgY29uc29sZS53YXJuKFwiUmVsbGF4OiBUaGUgd3JhcHBlciB5b3UncmUgdHJ5aW5nIHRvIHVzZSBkb2Vzbid0IGV4aXN0LlwiKTsgcmV0dXJuIH0gdmFyIEYsIEIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGZvciAodmFyIGYgPSAwOyBmIDwgZC5sZW5ndGg7IGYrKylhLmVsZW1zW2ZdLnN0eWxlLmNzc1RleHQgPSBkW2ZdLnN0eWxlOyBkID0gW107IHYgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7IG4gPSB3aW5kb3cuaW5uZXJXaWR0aDsgZiA9IGEub3B0aW9ucy5icmVha3BvaW50czsgRiA9IG4gPCBmWzBdID8gXCJ4c1wiIDogbiA+PSBmWzBdICYmIG4gPFxuXHRcdFx0XHRcdGZbMV0gPyBcInNtXCIgOiBuID49IGZbMV0gJiYgbiA8IGZbMl0gPyBcIm1kXCIgOiBcImxnXCI7IEgoKTsgZm9yIChmID0gMDsgZiA8IGEuZWxlbXMubGVuZ3RoOyBmKyspIHtcblx0XHRcdFx0XHRcdHZhciBjID0gdm9pZCAwLCBiID0gYS5lbGVtc1tmXSwgZSA9IGIuZ2V0QXR0cmlidXRlKFwiZGF0YS1yZWxsYXgtcGVyY2VudGFnZVwiKSwgeSA9IGIuZ2V0QXR0cmlidXRlKFwiZGF0YS1yZWxsYXgtc3BlZWRcIiksIHQgPSBiLmdldEF0dHJpYnV0ZShcImRhdGEtcmVsbGF4LXhzLXNwZWVkXCIpLCBnID0gYi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJlbGxheC1tb2JpbGUtc3BlZWRcIiksIGggPSBiLmdldEF0dHJpYnV0ZShcImRhdGEtcmVsbGF4LXRhYmxldC1zcGVlZFwiKSwgayA9IGIuZ2V0QXR0cmlidXRlKFwiZGF0YS1yZWxsYXgtZGVza3RvcC1zcGVlZFwiKSwgbCA9IGIuZ2V0QXR0cmlidXRlKFwiZGF0YS1yZWxsYXgtdmVydGljYWwtc3BlZWRcIiksIG0gPSBiLmdldEF0dHJpYnV0ZShcImRhdGEtcmVsbGF4LWhvcml6b250YWwtc3BlZWRcIiksIHAgPSBiLmdldEF0dHJpYnV0ZShcImRhdGEtcmVsbGF4LXZlcnRpY2FsLXNjcm9sbC1heGlzXCIpLFxuXHRcdFx0XHRcdFx0cSA9IGIuZ2V0QXR0cmlidXRlKFwiZGF0YS1yZWxsYXgtaG9yaXpvbnRhbC1zY3JvbGwtYXhpc1wiKSwgdSA9IGIuZ2V0QXR0cmlidXRlKFwiZGF0YS1yZWxsYXgtemluZGV4XCIpIHx8IDAsIHggPSBiLmdldEF0dHJpYnV0ZShcImRhdGEtcmVsbGF4LW1pblwiKSwgQSA9IGIuZ2V0QXR0cmlidXRlKFwiZGF0YS1yZWxsYXgtbWF4XCIpLCBDID0gYi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJlbGxheC1taW4teFwiKSwgRCA9IGIuZ2V0QXR0cmlidXRlKFwiZGF0YS1yZWxsYXgtbWF4LXhcIiksIEUgPSBiLmdldEF0dHJpYnV0ZShcImRhdGEtcmVsbGF4LW1pbi15XCIpLCBMID0gYi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJlbGxheC1tYXgteVwiKSwgciA9ICEwOyB0IHx8IGcgfHwgaCB8fCBrID8gYyA9IHsgeHM6IHQsIHNtOiBnLCBtZDogaCwgbGc6IGsgfSA6IHIgPSAhMTsgdCA9IGEub3B0aW9ucy53cmFwcGVyID8gYS5vcHRpb25zLndyYXBwZXIuc2Nyb2xsVG9wIDogd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7IGEub3B0aW9ucy5yZWxhdGl2ZVRvV3JhcHBlciAmJlxuXHRcdFx0XHRcdFx0XHQodCA9ICh3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCkgLSBhLm9wdGlvbnMud3JhcHBlci5vZmZzZXRUb3ApOyB2YXIgeiA9IGEub3B0aW9ucy52ZXJ0aWNhbCA/IGUgfHwgYS5vcHRpb25zLmNlbnRlciA/IHQgOiAwIDogMCwgSSA9IGEub3B0aW9ucy5ob3Jpem9udGFsID8gZSB8fCBhLm9wdGlvbnMuY2VudGVyID8gYS5vcHRpb25zLndyYXBwZXIgPyBhLm9wdGlvbnMud3JhcHBlci5zY3JvbGxMZWZ0IDogd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCA6IDAgOiAwOyB0ID0geiArIGIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wOyBnID0gYi5jbGllbnRIZWlnaHQgfHwgYi5vZmZzZXRIZWlnaHQgfHwgYi5zY3JvbGxIZWlnaHQ7IGggPSBJICsgYi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0OyBrID0gYi5jbGllbnRXaWR0aCB8fCBiLm9mZnNldFdpZHRoIHx8IGIuc2Nyb2xsV2lkdGg7XG5cdFx0XHRcdFx0XHR6ID0gZSA/IGUgOiAoeiAtIHQgKyB2KSAvIChnICsgdik7IGUgPSBlID8gZSA6IChJIC0gaCArIG4pIC8gKGsgKyBuKTsgYS5vcHRpb25zLmNlbnRlciAmJiAoeiA9IGUgPSAuNSk7IGMgPSByICYmIG51bGwgIT09IGNbRl0gPyBOdW1iZXIoY1tGXSkgOiB5ID8geSA6IGEub3B0aW9ucy5zcGVlZDsgbCA9IGwgPyBsIDogYS5vcHRpb25zLnZlcnRpY2FsU3BlZWQ7IG0gPSBtID8gbSA6IGEub3B0aW9ucy5ob3Jpem9udGFsU3BlZWQ7IHAgPSBwID8gcCA6IGEub3B0aW9ucy52ZXJ0aWNhbFNjcm9sbEF4aXM7IHEgPSBxID8gcSA6IGEub3B0aW9ucy5ob3Jpem9udGFsU2Nyb2xsQXhpczsgeSA9IEooZSwgeiwgYywgbCwgbSk7IGIgPSBiLnN0eWxlLmNzc1RleHQ7IHIgPSBcIlwiOyBpZiAoZSA9IC90cmFuc2Zvcm1cXHMqOi9pLmV4ZWMoYikpIHIgPSBiLnNsaWNlKGUuaW5kZXgpLCByID0gKGUgPSByLmluZGV4T2YoXCI7XCIpKSA/IFwiIFwiICsgci5zbGljZSgxMSwgZSkucmVwbGFjZSgvXFxzL2csIFwiXCIpIDogXCIgXCIgKyByLnNsaWNlKDExKS5yZXBsYWNlKC9cXHMvZywgXCJcIik7IGQucHVzaCh7XG5cdFx0XHRcdFx0XHRcdGJhc2VYOiB5LngsIGJhc2VZOiB5LnksIHRvcDogdCwgbGVmdDogaCwgaGVpZ2h0OiBnLCB3aWR0aDogaywgc3BlZWQ6IGMsIHZlcnRpY2FsU3BlZWQ6IGwsXG5cdFx0XHRcdFx0XHRcdGhvcml6b250YWxTcGVlZDogbSwgdmVydGljYWxTY3JvbGxBeGlzOiBwLCBob3Jpem9udGFsU2Nyb2xsQXhpczogcSwgc3R5bGU6IGIsIHRyYW5zZm9ybTogciwgemluZGV4OiB1LCBtaW46IHgsIG1heDogQSwgbWluWDogQywgbWF4WDogRCwgbWluWTogRSwgbWF4WTogTFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9IEsoKTsgdyAmJiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgQiksIHcgPSAhMSwgRygpKVxuXHRcdFx0fSwgSCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIGQgPSBsLCBjID0gbTsgbCA9IGEub3B0aW9ucy53cmFwcGVyID8gYS5vcHRpb25zLndyYXBwZXIuc2Nyb2xsVG9wIDogKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCBkb2N1bWVudC5ib2R5LnBhcmVudE5vZGUgfHwgZG9jdW1lbnQuYm9keSkuc2Nyb2xsVG9wIHx8IHdpbmRvdy5wYWdlWU9mZnNldDsgbSA9IGEub3B0aW9ucy53cmFwcGVyID8gYS5vcHRpb25zLndyYXBwZXIuc2Nyb2xsTGVmdCA6IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlIHx8IGRvY3VtZW50LmJvZHkpLnNjcm9sbExlZnQgfHwgd2luZG93LnBhZ2VYT2Zmc2V0O1xuXHRcdFx0XHRhLm9wdGlvbnMucmVsYXRpdmVUb1dyYXBwZXIgJiYgKGwgPSAoKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCBkb2N1bWVudC5ib2R5LnBhcmVudE5vZGUgfHwgZG9jdW1lbnQuYm9keSkuc2Nyb2xsVG9wIHx8IHdpbmRvdy5wYWdlWU9mZnNldCkgLSBhLm9wdGlvbnMud3JhcHBlci5vZmZzZXRUb3ApOyByZXR1cm4gZCAhPSBsICYmIGEub3B0aW9ucy52ZXJ0aWNhbCB8fCBjICE9IG0gJiYgYS5vcHRpb25zLmhvcml6b250YWwgPyAhMCA6ICExXG5cdFx0XHR9LCBKID0gZnVuY3Rpb24gKGQsIGMsIGIsIGUsIGcpIHsgdmFyIGYgPSB7fTsgZCA9IDEwMCAqIChnID8gZyA6IGIpICogKDEgLSBkKTsgYyA9IDEwMCAqIChlID8gZSA6IGIpICogKDEgLSBjKTsgZi54ID0gYS5vcHRpb25zLnJvdW5kID8gTWF0aC5yb3VuZChkKSA6IE1hdGgucm91bmQoMTAwICogZCkgLyAxMDA7IGYueSA9IGEub3B0aW9ucy5yb3VuZCA/IE1hdGgucm91bmQoYykgOiBNYXRoLnJvdW5kKDEwMCAqIGMpIC8gMTAwOyByZXR1cm4gZiB9LCBoID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoKTsgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLFxuXHRcdFx0XHRcdGgpOyAoYS5vcHRpb25zLndyYXBwZXIgPyBhLm9wdGlvbnMud3JhcHBlciA6IHdpbmRvdykucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoKTsgKGEub3B0aW9ucy53cmFwcGVyID8gYS5vcHRpb25zLndyYXBwZXIgOiBkb2N1bWVudCkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBoKTsgcCA9IEEoRylcblx0XHRcdH0sIEcgPSBmdW5jdGlvbiAoKSB7IEgoKSAmJiAhMSA9PT0gdyA/IChLKCksIHAgPSBBKEcpKSA6IChwID0gbnVsbCwgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaCksIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiwgaCksIChhLm9wdGlvbnMud3JhcHBlciA/IGEub3B0aW9ucy53cmFwcGVyIDogd2luZG93KS5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGgsIHggPyB7IHBhc3NpdmU6ICEwIH0gOiAhMSksIChhLm9wdGlvbnMud3JhcHBlciA/IGEub3B0aW9ucy53cmFwcGVyIDogZG9jdW1lbnQpLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgaCwgeCA/IHsgcGFzc2l2ZTogITAgfSA6ICExKSkgfSwgSyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0Zm9yICh2YXIgZixcblx0XHRcdFx0XHRjID0gMDsgYyA8IGEuZWxlbXMubGVuZ3RoOyBjKyspIHtcblx0XHRcdFx0XHRcdHZhciBiID0gZFtjXS52ZXJ0aWNhbFNjcm9sbEF4aXMudG9Mb3dlckNhc2UoKSwgZSA9IGRbY10uaG9yaXpvbnRhbFNjcm9sbEF4aXMudG9Mb3dlckNhc2UoKTsgZiA9IC0xICE9IGIuaW5kZXhPZihcInhcIikgPyBsIDogMDsgYiA9IC0xICE9IGIuaW5kZXhPZihcInlcIikgPyBsIDogMDsgdmFyIGcgPSAtMSAhPSBlLmluZGV4T2YoXCJ4XCIpID8gbSA6IDA7IGUgPSAtMSAhPSBlLmluZGV4T2YoXCJ5XCIpID8gbSA6IDA7IGYgPSBKKChmICsgZyAtIGRbY10ubGVmdCArIG4pIC8gKGRbY10ud2lkdGggKyBuKSwgKGIgKyBlIC0gZFtjXS50b3AgKyB2KSAvIChkW2NdLmhlaWdodCArIHYpLCBkW2NdLnNwZWVkLCBkW2NdLnZlcnRpY2FsU3BlZWQsIGRbY10uaG9yaXpvbnRhbFNwZWVkKTsgZSA9IGYueSAtIGRbY10uYmFzZVk7IGIgPSBmLnggLSBkW2NdLmJhc2VYOyBudWxsICE9PSBkW2NdLm1pbiAmJiAoYS5vcHRpb25zLnZlcnRpY2FsICYmICFhLm9wdGlvbnMuaG9yaXpvbnRhbCAmJiAoZSA9IGUgPD0gZFtjXS5taW4gPyBkW2NdLm1pbiA6IGUpLCBhLm9wdGlvbnMuaG9yaXpvbnRhbCAmJiAhYS5vcHRpb25zLnZlcnRpY2FsICYmXG5cdFx0XHRcdFx0XHRcdChiID0gYiA8PSBkW2NdLm1pbiA/IGRbY10ubWluIDogYikpOyBudWxsICE9IGRbY10ubWluWSAmJiAoZSA9IGUgPD0gZFtjXS5taW5ZID8gZFtjXS5taW5ZIDogZSk7IG51bGwgIT0gZFtjXS5taW5YICYmIChiID0gYiA8PSBkW2NdLm1pblggPyBkW2NdLm1pblggOiBiKTsgbnVsbCAhPT0gZFtjXS5tYXggJiYgKGEub3B0aW9ucy52ZXJ0aWNhbCAmJiAhYS5vcHRpb25zLmhvcml6b250YWwgJiYgKGUgPSBlID49IGRbY10ubWF4ID8gZFtjXS5tYXggOiBlKSwgYS5vcHRpb25zLmhvcml6b250YWwgJiYgIWEub3B0aW9ucy52ZXJ0aWNhbCAmJiAoYiA9IGIgPj0gZFtjXS5tYXggPyBkW2NdLm1heCA6IGIpKTsgbnVsbCAhPSBkW2NdLm1heFkgJiYgKGUgPSBlID49IGRbY10ubWF4WSA/IGRbY10ubWF4WSA6IGUpOyBudWxsICE9IGRbY10ubWF4WCAmJiAoYiA9IGIgPj0gZFtjXS5tYXhYID8gZFtjXS5tYXhYIDogYik7IGEuZWxlbXNbY10uc3R5bGVbRV0gPSBcInRyYW5zbGF0ZTNkKFwiICsgKGEub3B0aW9ucy5ob3Jpem9udGFsID8gYiA6IFwiMFwiKSArIFwicHgsXCIgKyAoYS5vcHRpb25zLnZlcnRpY2FsID8gZSA6IFwiMFwiKSArIFwicHgsXCIgKyBkW2NdLnppbmRleCArIFwicHgpIFwiICsgZFtjXS50cmFuc2Zvcm1cblx0XHRcdFx0fSBhLm9wdGlvbnMuY2FsbGJhY2soZilcblx0XHRcdH07XG5cdFx0XHRcdGEuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHsgZm9yICh2YXIgZiA9IDA7IGYgPCBhLmVsZW1zLmxlbmd0aDsgZisrKWEuZWxlbXNbZl0uc3R5bGUuY3NzVGV4dCA9IGRbZl0uc3R5bGU7IHcgfHwgKHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIEIpLCB3ID0gITApOyBEKHApOyBwID0gbnVsbCB9OyBCKCk7IGEucmVmcmVzaCA9IEI7IHJldHVybiBhXG5cdFx0XHR9IGNvbnNvbGUud2FybihcIlJlbGxheDogVGhlIGVsZW1lbnRzIHlvdSdyZSB0cnlpbmcgdG8gc2VsZWN0IGRvbid0IGV4aXN0LlwiKVxuXHR9OyByZXR1cm4gcVxufSk7XG4vKiBlc2xpbnQtZW5hYmxlICovIl0sInNvdXJjZVJvb3QiOiIifQ==