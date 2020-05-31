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
 /////////////////////loading scripts/////////////////////

(function () {
  var accessFlag = sessionStorage.getItem('accessed');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi93b3JrL2pzL2NvbW1vbi9mcm9udFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vd29yay9qcy9tb2R1bGUvcmVsbGF4Lm1pbi5qcyJdLCJuYW1lcyI6WyJhY2Nlc3NGbGFnIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwibG9hZGluZ0FyZWEiLCIkIiwibG9hZGluZ1BhZ2VSZW1vdmUiLCJ3aW5kb3ciLCJvbiIsImxvYWRpbmdQYWdlU2hvdyIsInNldFRpbWVvdXQiLCJhZGRDbGFzcyIsImZhZGVPdXQiLCJzZXRJdGVtIiwicmVtb3ZlIiwibXlzbGlkZXIiLCJqdWljeXNsaWRlciIsIm1vZGUiLCJ3aWR0aCIsImhlaWdodCIsIm1hc2siLCJiZ2NvbG9yIiwiYXV0b3BsYXkiLCJzaHVmZmxlIiwic2hvdyIsImVmZmVjdCIsImR1cmF0aW9uIiwiaGlkZSIsInJlbGxheCIsIlJlbGxheCIsInEiLCJnIiwiZGVmaW5lIiwiZ2xvYmFsIiwidSIsIkMiLCJhIiwib3B0aW9ucyIsImJyZWFrcG9pbnRzIiwibGVuZ3RoIiwiQXJyYXkiLCJpc0FycmF5IiwiZiIsImMiLCJiIiwiZm9yRWFjaCIsImNvbnNvbGUiLCJ3YXJuIiwiT2JqZWN0IiwiY3JlYXRlIiwicHJvdG90eXBlIiwibCIsInYiLCJtIiwibiIsImQiLCJ3IiwiQSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib1JlcXVlc3RBbmltYXRpb25GcmFtZSIsInAiLCJ4IiwiayIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJEIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJtb3pDYW5jZWxBbmltYXRpb25GcmFtZSIsImNsZWFyVGltZW91dCIsIkUiLCJ0cmFuc2Zvcm1Qcm9wIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJzcGVlZCIsInZlcnRpY2FsU3BlZWQiLCJob3Jpem9udGFsU3BlZWQiLCJjZW50ZXIiLCJ3cmFwcGVyIiwicmVsYXRpdmVUb1dyYXBwZXIiLCJyb3VuZCIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsInZlcnRpY2FsU2Nyb2xsQXhpcyIsImhvcml6b250YWxTY3JvbGxBeGlzIiwiY2FsbGJhY2siLCJrZXlzIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1zIiwibm9kZVR5cGUiLCJxdWVyeVNlbGVjdG9yIiwiRiIsIkIiLCJjc3NUZXh0IiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwiSCIsImUiLCJnZXRBdHRyaWJ1dGUiLCJ5IiwidCIsImgiLCJMIiwiciIsInhzIiwic20iLCJtZCIsImxnIiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5Iiwib2Zmc2V0VG9wIiwieiIsIkkiLCJzY3JvbGxMZWZ0IiwicGFnZVhPZmZzZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJjbGllbnRIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJsZWZ0IiwiY2xpZW50V2lkdGgiLCJvZmZzZXRXaWR0aCIsInNjcm9sbFdpZHRoIiwiTnVtYmVyIiwiSiIsImV4ZWMiLCJzbGljZSIsImluZGV4IiwiaW5kZXhPZiIsInJlcGxhY2UiLCJwdXNoIiwiYmFzZVgiLCJiYXNlWSIsInppbmRleCIsIm1pbiIsIm1heCIsIm1pblgiLCJtYXhYIiwibWluWSIsIm1heFkiLCJLIiwiRyIsInBhcmVudE5vZGUiLCJNYXRoIiwicGFzc2l2ZSIsInRvTG93ZXJDYXNlIiwiZGVzdHJveSIsInJlZnJlc2giXSwibWFwcGluZ3MiOiI7UUFB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LENBQW5CO0FBQ0YsT0F2QnFPOztBQXdCck9OLE9BQUMsQ0FBQ3VILE9BQUYsR0FBWSxZQUFZO0FBQUUsYUFBSyxJQUFJakgsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR04sQ0FBQyxDQUFDMEQsS0FBRixDQUFRdkQsTUFBNUIsRUFBb0NHLENBQUMsRUFBckM7QUFBd0NOLFdBQUMsQ0FBQzBELEtBQUYsQ0FBUXBELENBQVIsRUFBV29DLEtBQVgsQ0FBaUJxQixPQUFqQixHQUEyQjVDLENBQUMsQ0FBQ2IsQ0FBRCxDQUFELENBQUtvQyxLQUFoQztBQUF4Qzs7QUFBK0V0QixTQUFDLEtBQUtqRCxNQUFNLENBQUM4RCxtQkFBUCxDQUEyQixRQUEzQixFQUFxQzZCLENBQXJDLEdBQXlDMUMsQ0FBQyxHQUFHLENBQUMsQ0FBbkQsQ0FBRDtBQUF3RGMsU0FBQyxDQUFDUCxDQUFELENBQUQ7QUFBTUEsU0FBQyxHQUFHLElBQUo7QUFBVSxPQUFqTDs7QUFBbUxtQyxPQUFDO0FBQUk5RCxPQUFDLENBQUN3SCxPQUFGLEdBQVkxRCxDQUFaO0FBQWUsYUFBTzlELENBQVA7QUFDdk07O0FBQUNVLFdBQU8sQ0FBQ0MsSUFBUixDQUFhLDJEQUFiO0FBQ0gsR0FqQ0Q7O0FBaUNHLFNBQU9qQixDQUFQO0FBQ0gsQ0FuQ0Q7QUFvQ0EsbUIiLCJmaWxlIjoiZnJvbnRQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi93b3JrL2pzL2NvbW1vbi9mcm9udFBhZ2UuanNcIik7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIvLy8vLy8vLy8vLy9pbXBvcnRzLy8vLy8vLy8vLy8vXHJcblxyXG5pbXBvcnQgUmVsbGF4IGZyb20gJy4uL21vZHVsZS9yZWxsYXgubWluJztcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vL2xvYWRpbmcgc2NyaXB0cy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4oZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IGFjY2Vzc0ZsYWcgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NlZCcpO1xyXG5cdGNvbnN0IGxvYWRpbmdBcmVhID0gJCgnI2xvYWRpbmdBcmVhJyk7XHJcblx0aWYgKGFjY2Vzc0ZsYWcpIHtcclxuXHRcdGxvYWRpbmdQYWdlUmVtb3ZlKCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdCQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0bG9hZGluZ1BhZ2VTaG93KCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0ZnVuY3Rpb24gbG9hZGluZ1BhZ2VTaG93KCkge1xyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGxvYWRpbmdBcmVhLmFkZENsYXNzKCdsb2FkaW5nRmFkZScpLmZhZGVPdXQoNjAwKTtcclxuXHRcdH0sIDE1MDApO1xyXG5cdFx0c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzZWQnLCB0cnVlKTtcclxuXHR9XHJcblx0ZnVuY3Rpb24gbG9hZGluZ1BhZ2VSZW1vdmUoKSB7XHJcblx0XHRsb2FkaW5nQXJlYS5yZW1vdmUoKTtcclxuXHR9XHJcbn0pKCk7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vL2xvYWRpbmcgc2NyaXB0cy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vanVpY3lzbGlkZXIuanNcclxuJChmdW5jdGlvbiAoKSB7XHJcblx0dmFyIG15c2xpZGVyID0gJCgnI215c2xpZGVyJyk7XHJcblx0bXlzbGlkZXIuanVpY3lzbGlkZXIoe1xyXG5cdFx0bW9kZTogXCJjb3ZlclwiLFxyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdGhlaWdodDogJzEwMCUnLFxyXG5cdFx0bWFzazogXCJub25lXCIsXHJcblx0XHRiZ2NvbG9yOiBcIiMwMDBcIixcclxuXHRcdGF1dG9wbGF5OiA4MDAwLFxyXG5cdFx0c2h1ZmZsZTogZmFsc2UsXHJcblx0XHRzaG93OiB7IGVmZmVjdDogJ2ZhZGUnLCBkdXJhdGlvbjogMTUwMCB9LFxyXG5cdFx0aGlkZTogeyBlZmZlY3Q6ICdmYWRlJywgZHVyYXRpb246IDE1MDAgfSxcclxuXHR9KTtcclxufSk7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vL2p1aWN5c2xpZGVyLmpzXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy9SZWxsYXguanNcclxuJChmdW5jdGlvbiAoKSB7XHJcblx0dmFyIHJlbGxheCA9IG5ldyBSZWxsYXgoJy5yZWxsYXgnKTsvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbn0pO1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy9SZWxsYXguanMiLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuKGZ1bmN0aW9uIChxLCBnKSB7IFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFtdLCBnKSA6IFwib2JqZWN0XCIgPT09IHR5cGVvZiBtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMgPyBtb2R1bGUuZXhwb3J0cyA9IGcoKSA6IHEuUmVsbGF4ID0gZygpIH0pKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiB3aW5kb3cgPyB3aW5kb3cgOiBnbG9iYWwsIGZ1bmN0aW9uICgpIHtcblx0dmFyIHEgPSBmdW5jdGlvbiAoZywgdSkge1xuXHRcdGZ1bmN0aW9uIEMoKSB7IGlmICgzID09PSBhLm9wdGlvbnMuYnJlYWtwb2ludHMubGVuZ3RoICYmIEFycmF5LmlzQXJyYXkoYS5vcHRpb25zLmJyZWFrcG9pbnRzKSkgeyB2YXIgZiA9ICEwLCBjID0gITAsIGI7IGEub3B0aW9ucy5icmVha3BvaW50cy5mb3JFYWNoKGZ1bmN0aW9uIChhKSB7IFwibnVtYmVyXCIgIT09IHR5cGVvZiBhICYmIChjID0gITEpOyBudWxsICE9PSBiICYmIGEgPCBiICYmIChmID0gITEpOyBiID0gYSB9KTsgaWYgKGYgJiYgYykgcmV0dXJuIH0gYS5vcHRpb25zLmJyZWFrcG9pbnRzID0gWzU3NiwgNzY4LCAxMjAxXTsgY29uc29sZS53YXJuKFwiUmVsbGF4OiBZb3UgbXVzdCBwYXNzIGFuIGFycmF5IG9mIDMgbnVtYmVycyBpbiBhc2NlbmRpbmcgb3JkZXIgdG8gdGhlIGJyZWFrcG9pbnRzIG9wdGlvbi4gRGVmYXVsdHMgcmV2ZXJ0ZWRcIikgfVxuXHRcdHZhciBhID0gT2JqZWN0LmNyZWF0ZShxLnByb3RvdHlwZSksIGwgPSAwLCB2ID0gMCwgbSA9IDAsIG4gPSAwLCBkID0gW10sIHcgPSAhMCwgQSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbiAoYSkgeyByZXR1cm4gc2V0VGltZW91dChhLCAxRTMgLyA2MCkgfSwgcCA9IG51bGwsIHggPSAhMTsgdHJ5IHsgdmFyIGsgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIFwicGFzc2l2ZVwiLCB7IGdldDogZnVuY3Rpb24gKCkgeyB4ID0gITAgfSB9KTsgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0UGFzc2l2ZVwiLCBudWxsLCBrKTsgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0ZXN0UGFzc2l2ZVwiLCBudWxsLCBrKSB9IGNhdGNoIChmKSB7IH0gdmFyIEQgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0XHRjbGVhclRpbWVvdXQsIEUgPSB3aW5kb3cudHJhbnNmb3JtUHJvcCB8fCBmdW5jdGlvbiAoKSB7IHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgaWYgKG51bGwgPT09IGEuc3R5bGUudHJhbnNmb3JtKSB7IHZhciBjID0gW1wiV2Via2l0XCIsIFwiTW96XCIsIFwibXNcIl0sIGI7IGZvciAoYiBpbiBjKSBpZiAodm9pZCAwICE9PSBhLnN0eWxlW2NbYl0gKyBcIlRyYW5zZm9ybVwiXSkgcmV0dXJuIGNbYl0gKyBcIlRyYW5zZm9ybVwiIH0gcmV0dXJuIFwidHJhbnNmb3JtXCIgfSgpOyBhLm9wdGlvbnMgPSB7IHNwZWVkOiAtMiwgdmVydGljYWxTcGVlZDogbnVsbCwgaG9yaXpvbnRhbFNwZWVkOiBudWxsLCBicmVha3BvaW50czogWzU3NiwgNzY4LCAxMjAxXSwgY2VudGVyOiAhMSwgd3JhcHBlcjogbnVsbCwgcmVsYXRpdmVUb1dyYXBwZXI6ICExLCByb3VuZDogITAsIHZlcnRpY2FsOiAhMCwgaG9yaXpvbnRhbDogITEsIHZlcnRpY2FsU2Nyb2xsQXhpczogXCJ5XCIsIGhvcml6b250YWxTY3JvbGxBeGlzOiBcInhcIiwgY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHsgfSB9OyB1ICYmIE9iamVjdC5rZXlzKHUpLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcblx0XHRcdGEub3B0aW9uc1tkXSA9XG5cdFx0XHRcdHVbZF1cblx0XHRcdH0pOyB1ICYmIHUuYnJlYWtwb2ludHMgJiYgQygpOyBnIHx8IChnID0gXCIucmVsbGF4XCIpOyBrID0gXCJzdHJpbmdcIiA9PT0gdHlwZW9mIGcgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGcpIDogW2ddOyBpZiAoMCA8IGsubGVuZ3RoKSB7XG5cdFx0XHRhLmVsZW1zID0gazsgaWYgKGEub3B0aW9ucy53cmFwcGVyICYmICFhLm9wdGlvbnMud3JhcHBlci5ub2RlVHlwZSkgaWYgKGsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGEub3B0aW9ucy53cmFwcGVyKSkgYS5vcHRpb25zLndyYXBwZXIgPSBrOyBlbHNlIHsgY29uc29sZS53YXJuKFwiUmVsbGF4OiBUaGUgd3JhcHBlciB5b3UncmUgdHJ5aW5nIHRvIHVzZSBkb2Vzbid0IGV4aXN0LlwiKTsgcmV0dXJuIH0gdmFyIEYsIEIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGZvciAodmFyIGYgPSAwOyBmIDwgZC5sZW5ndGg7IGYrKylhLmVsZW1zW2ZdLnN0eWxlLmNzc1RleHQgPSBkW2ZdLnN0eWxlOyBkID0gW107IHYgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7IG4gPSB3aW5kb3cuaW5uZXJXaWR0aDsgZiA9IGEub3B0aW9ucy5icmVha3BvaW50czsgRiA9IG4gPCBmWzBdID8gXCJ4c1wiIDogbiA+PSBmWzBdICYmIG4gPFxuXHRcdFx0XHRcdGZbMV0gPyBcInNtXCIgOiBuID49IGZbMV0gJiYgbiA8IGZbMl0gPyBcIm1kXCIgOiBcImxnXCI7IEgoKTsgZm9yIChmID0gMDsgZiA8IGEuZWxlbXMubGVuZ3RoOyBmKyspIHtcblx0XHRcdFx0XHRcdHZhciBjID0gdm9pZCAwLCBiID0gYS5lbGVtc1tmXSwgZSA9IGIuZ2V0QXR0cmlidXRlKFwiZGF0YS1yZWxsYXgtcGVyY2VudGFnZVwiKSwgeSA9IGIuZ2V0QXR0cmlidXRlKFwiZGF0YS1yZWxsYXgtc3BlZWRcIiksIHQgPSBiLmdldEF0dHJpYnV0ZShcImRhdGEtcmVsbGF4LXhzLXNwZWVkXCIpLCBnID0gYi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJlbGxheC1tb2JpbGUtc3BlZWRcIiksIGggPSBiLmdldEF0dHJpYnV0ZShcImRhdGEtcmVsbGF4LXRhYmxldC1zcGVlZFwiKSwgayA9IGIuZ2V0QXR0cmlidXRlKFwiZGF0YS1yZWxsYXgtZGVza3RvcC1zcGVlZFwiKSwgbCA9IGIuZ2V0QXR0cmlidXRlKFwiZGF0YS1yZWxsYXgtdmVydGljYWwtc3BlZWRcIiksIG0gPSBiLmdldEF0dHJpYnV0ZShcImRhdGEtcmVsbGF4LWhvcml6b250YWwtc3BlZWRcIiksIHAgPSBiLmdldEF0dHJpYnV0ZShcImRhdGEtcmVsbGF4LXZlcnRpY2FsLXNjcm9sbC1heGlzXCIpLFxuXHRcdFx0XHRcdFx0cSA9IGIuZ2V0QXR0cmlidXRlKFwiZGF0YS1yZWxsYXgtaG9yaXpvbnRhbC1zY3JvbGwtYXhpc1wiKSwgdSA9IGIuZ2V0QXR0cmlidXRlKFwiZGF0YS1yZWxsYXgtemluZGV4XCIpIHx8IDAsIHggPSBiLmdldEF0dHJpYnV0ZShcImRhdGEtcmVsbGF4LW1pblwiKSwgQSA9IGIuZ2V0QXR0cmlidXRlKFwiZGF0YS1yZWxsYXgtbWF4XCIpLCBDID0gYi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJlbGxheC1taW4teFwiKSwgRCA9IGIuZ2V0QXR0cmlidXRlKFwiZGF0YS1yZWxsYXgtbWF4LXhcIiksIEUgPSBiLmdldEF0dHJpYnV0ZShcImRhdGEtcmVsbGF4LW1pbi15XCIpLCBMID0gYi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJlbGxheC1tYXgteVwiKSwgciA9ICEwOyB0IHx8IGcgfHwgaCB8fCBrID8gYyA9IHsgeHM6IHQsIHNtOiBnLCBtZDogaCwgbGc6IGsgfSA6IHIgPSAhMTsgdCA9IGEub3B0aW9ucy53cmFwcGVyID8gYS5vcHRpb25zLndyYXBwZXIuc2Nyb2xsVG9wIDogd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7IGEub3B0aW9ucy5yZWxhdGl2ZVRvV3JhcHBlciAmJlxuXHRcdFx0XHRcdFx0XHQodCA9ICh3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCkgLSBhLm9wdGlvbnMud3JhcHBlci5vZmZzZXRUb3ApOyB2YXIgeiA9IGEub3B0aW9ucy52ZXJ0aWNhbCA/IGUgfHwgYS5vcHRpb25zLmNlbnRlciA/IHQgOiAwIDogMCwgSSA9IGEub3B0aW9ucy5ob3Jpem9udGFsID8gZSB8fCBhLm9wdGlvbnMuY2VudGVyID8gYS5vcHRpb25zLndyYXBwZXIgPyBhLm9wdGlvbnMud3JhcHBlci5zY3JvbGxMZWZ0IDogd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCA6IDAgOiAwOyB0ID0geiArIGIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wOyBnID0gYi5jbGllbnRIZWlnaHQgfHwgYi5vZmZzZXRIZWlnaHQgfHwgYi5zY3JvbGxIZWlnaHQ7IGggPSBJICsgYi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0OyBrID0gYi5jbGllbnRXaWR0aCB8fCBiLm9mZnNldFdpZHRoIHx8IGIuc2Nyb2xsV2lkdGg7XG5cdFx0XHRcdFx0XHR6ID0gZSA/IGUgOiAoeiAtIHQgKyB2KSAvIChnICsgdik7IGUgPSBlID8gZSA6IChJIC0gaCArIG4pIC8gKGsgKyBuKTsgYS5vcHRpb25zLmNlbnRlciAmJiAoeiA9IGUgPSAuNSk7IGMgPSByICYmIG51bGwgIT09IGNbRl0gPyBOdW1iZXIoY1tGXSkgOiB5ID8geSA6IGEub3B0aW9ucy5zcGVlZDsgbCA9IGwgPyBsIDogYS5vcHRpb25zLnZlcnRpY2FsU3BlZWQ7IG0gPSBtID8gbSA6IGEub3B0aW9ucy5ob3Jpem9udGFsU3BlZWQ7IHAgPSBwID8gcCA6IGEub3B0aW9ucy52ZXJ0aWNhbFNjcm9sbEF4aXM7IHEgPSBxID8gcSA6IGEub3B0aW9ucy5ob3Jpem9udGFsU2Nyb2xsQXhpczsgeSA9IEooZSwgeiwgYywgbCwgbSk7IGIgPSBiLnN0eWxlLmNzc1RleHQ7IHIgPSBcIlwiOyBpZiAoZSA9IC90cmFuc2Zvcm1cXHMqOi9pLmV4ZWMoYikpIHIgPSBiLnNsaWNlKGUuaW5kZXgpLCByID0gKGUgPSByLmluZGV4T2YoXCI7XCIpKSA/IFwiIFwiICsgci5zbGljZSgxMSwgZSkucmVwbGFjZSgvXFxzL2csIFwiXCIpIDogXCIgXCIgKyByLnNsaWNlKDExKS5yZXBsYWNlKC9cXHMvZywgXCJcIik7IGQucHVzaCh7XG5cdFx0XHRcdFx0XHRcdGJhc2VYOiB5LngsIGJhc2VZOiB5LnksIHRvcDogdCwgbGVmdDogaCwgaGVpZ2h0OiBnLCB3aWR0aDogaywgc3BlZWQ6IGMsIHZlcnRpY2FsU3BlZWQ6IGwsXG5cdFx0XHRcdFx0XHRcdGhvcml6b250YWxTcGVlZDogbSwgdmVydGljYWxTY3JvbGxBeGlzOiBwLCBob3Jpem9udGFsU2Nyb2xsQXhpczogcSwgc3R5bGU6IGIsIHRyYW5zZm9ybTogciwgemluZGV4OiB1LCBtaW46IHgsIG1heDogQSwgbWluWDogQywgbWF4WDogRCwgbWluWTogRSwgbWF4WTogTFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9IEsoKTsgdyAmJiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgQiksIHcgPSAhMSwgRygpKVxuXHRcdFx0fSwgSCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIGQgPSBsLCBjID0gbTsgbCA9IGEub3B0aW9ucy53cmFwcGVyID8gYS5vcHRpb25zLndyYXBwZXIuc2Nyb2xsVG9wIDogKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCBkb2N1bWVudC5ib2R5LnBhcmVudE5vZGUgfHwgZG9jdW1lbnQuYm9keSkuc2Nyb2xsVG9wIHx8IHdpbmRvdy5wYWdlWU9mZnNldDsgbSA9IGEub3B0aW9ucy53cmFwcGVyID8gYS5vcHRpb25zLndyYXBwZXIuc2Nyb2xsTGVmdCA6IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlIHx8IGRvY3VtZW50LmJvZHkpLnNjcm9sbExlZnQgfHwgd2luZG93LnBhZ2VYT2Zmc2V0O1xuXHRcdFx0XHRhLm9wdGlvbnMucmVsYXRpdmVUb1dyYXBwZXIgJiYgKGwgPSAoKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCBkb2N1bWVudC5ib2R5LnBhcmVudE5vZGUgfHwgZG9jdW1lbnQuYm9keSkuc2Nyb2xsVG9wIHx8IHdpbmRvdy5wYWdlWU9mZnNldCkgLSBhLm9wdGlvbnMud3JhcHBlci5vZmZzZXRUb3ApOyByZXR1cm4gZCAhPSBsICYmIGEub3B0aW9ucy52ZXJ0aWNhbCB8fCBjICE9IG0gJiYgYS5vcHRpb25zLmhvcml6b250YWwgPyAhMCA6ICExXG5cdFx0XHR9LCBKID0gZnVuY3Rpb24gKGQsIGMsIGIsIGUsIGcpIHsgdmFyIGYgPSB7fTsgZCA9IDEwMCAqIChnID8gZyA6IGIpICogKDEgLSBkKTsgYyA9IDEwMCAqIChlID8gZSA6IGIpICogKDEgLSBjKTsgZi54ID0gYS5vcHRpb25zLnJvdW5kID8gTWF0aC5yb3VuZChkKSA6IE1hdGgucm91bmQoMTAwICogZCkgLyAxMDA7IGYueSA9IGEub3B0aW9ucy5yb3VuZCA/IE1hdGgucm91bmQoYykgOiBNYXRoLnJvdW5kKDEwMCAqIGMpIC8gMTAwOyByZXR1cm4gZiB9LCBoID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoKTsgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLFxuXHRcdFx0XHRcdGgpOyAoYS5vcHRpb25zLndyYXBwZXIgPyBhLm9wdGlvbnMud3JhcHBlciA6IHdpbmRvdykucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoKTsgKGEub3B0aW9ucy53cmFwcGVyID8gYS5vcHRpb25zLndyYXBwZXIgOiBkb2N1bWVudCkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBoKTsgcCA9IEEoRylcblx0XHRcdH0sIEcgPSBmdW5jdGlvbiAoKSB7IEgoKSAmJiAhMSA9PT0gdyA/IChLKCksIHAgPSBBKEcpKSA6IChwID0gbnVsbCwgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaCksIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiwgaCksIChhLm9wdGlvbnMud3JhcHBlciA/IGEub3B0aW9ucy53cmFwcGVyIDogd2luZG93KS5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGgsIHggPyB7IHBhc3NpdmU6ICEwIH0gOiAhMSksIChhLm9wdGlvbnMud3JhcHBlciA/IGEub3B0aW9ucy53cmFwcGVyIDogZG9jdW1lbnQpLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgaCwgeCA/IHsgcGFzc2l2ZTogITAgfSA6ICExKSkgfSwgSyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0Zm9yICh2YXIgZixcblx0XHRcdFx0XHRjID0gMDsgYyA8IGEuZWxlbXMubGVuZ3RoOyBjKyspIHtcblx0XHRcdFx0XHRcdHZhciBiID0gZFtjXS52ZXJ0aWNhbFNjcm9sbEF4aXMudG9Mb3dlckNhc2UoKSwgZSA9IGRbY10uaG9yaXpvbnRhbFNjcm9sbEF4aXMudG9Mb3dlckNhc2UoKTsgZiA9IC0xICE9IGIuaW5kZXhPZihcInhcIikgPyBsIDogMDsgYiA9IC0xICE9IGIuaW5kZXhPZihcInlcIikgPyBsIDogMDsgdmFyIGcgPSAtMSAhPSBlLmluZGV4T2YoXCJ4XCIpID8gbSA6IDA7IGUgPSAtMSAhPSBlLmluZGV4T2YoXCJ5XCIpID8gbSA6IDA7IGYgPSBKKChmICsgZyAtIGRbY10ubGVmdCArIG4pIC8gKGRbY10ud2lkdGggKyBuKSwgKGIgKyBlIC0gZFtjXS50b3AgKyB2KSAvIChkW2NdLmhlaWdodCArIHYpLCBkW2NdLnNwZWVkLCBkW2NdLnZlcnRpY2FsU3BlZWQsIGRbY10uaG9yaXpvbnRhbFNwZWVkKTsgZSA9IGYueSAtIGRbY10uYmFzZVk7IGIgPSBmLnggLSBkW2NdLmJhc2VYOyBudWxsICE9PSBkW2NdLm1pbiAmJiAoYS5vcHRpb25zLnZlcnRpY2FsICYmICFhLm9wdGlvbnMuaG9yaXpvbnRhbCAmJiAoZSA9IGUgPD0gZFtjXS5taW4gPyBkW2NdLm1pbiA6IGUpLCBhLm9wdGlvbnMuaG9yaXpvbnRhbCAmJiAhYS5vcHRpb25zLnZlcnRpY2FsICYmXG5cdFx0XHRcdFx0XHRcdChiID0gYiA8PSBkW2NdLm1pbiA/IGRbY10ubWluIDogYikpOyBudWxsICE9IGRbY10ubWluWSAmJiAoZSA9IGUgPD0gZFtjXS5taW5ZID8gZFtjXS5taW5ZIDogZSk7IG51bGwgIT0gZFtjXS5taW5YICYmIChiID0gYiA8PSBkW2NdLm1pblggPyBkW2NdLm1pblggOiBiKTsgbnVsbCAhPT0gZFtjXS5tYXggJiYgKGEub3B0aW9ucy52ZXJ0aWNhbCAmJiAhYS5vcHRpb25zLmhvcml6b250YWwgJiYgKGUgPSBlID49IGRbY10ubWF4ID8gZFtjXS5tYXggOiBlKSwgYS5vcHRpb25zLmhvcml6b250YWwgJiYgIWEub3B0aW9ucy52ZXJ0aWNhbCAmJiAoYiA9IGIgPj0gZFtjXS5tYXggPyBkW2NdLm1heCA6IGIpKTsgbnVsbCAhPSBkW2NdLm1heFkgJiYgKGUgPSBlID49IGRbY10ubWF4WSA/IGRbY10ubWF4WSA6IGUpOyBudWxsICE9IGRbY10ubWF4WCAmJiAoYiA9IGIgPj0gZFtjXS5tYXhYID8gZFtjXS5tYXhYIDogYik7IGEuZWxlbXNbY10uc3R5bGVbRV0gPSBcInRyYW5zbGF0ZTNkKFwiICsgKGEub3B0aW9ucy5ob3Jpem9udGFsID8gYiA6IFwiMFwiKSArIFwicHgsXCIgKyAoYS5vcHRpb25zLnZlcnRpY2FsID8gZSA6IFwiMFwiKSArIFwicHgsXCIgKyBkW2NdLnppbmRleCArIFwicHgpIFwiICsgZFtjXS50cmFuc2Zvcm1cblx0XHRcdFx0fSBhLm9wdGlvbnMuY2FsbGJhY2soZilcblx0XHRcdH07XG5cdFx0XHRcdGEuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHsgZm9yICh2YXIgZiA9IDA7IGYgPCBhLmVsZW1zLmxlbmd0aDsgZisrKWEuZWxlbXNbZl0uc3R5bGUuY3NzVGV4dCA9IGRbZl0uc3R5bGU7IHcgfHwgKHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIEIpLCB3ID0gITApOyBEKHApOyBwID0gbnVsbCB9OyBCKCk7IGEucmVmcmVzaCA9IEI7IHJldHVybiBhXG5cdFx0XHR9IGNvbnNvbGUud2FybihcIlJlbGxheDogVGhlIGVsZW1lbnRzIHlvdSdyZSB0cnlpbmcgdG8gc2VsZWN0IGRvbid0IGV4aXN0LlwiKVxuXHR9OyByZXR1cm4gcVxufSk7XG4vKiBlc2xpbnQtZW5hYmxlICovIl0sInNvdXJjZVJvb3QiOiIifQ==