!function(t){var n={};function e(i){if(n[i])return n[i].exports;var o=n[i]={i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(i,o,function(n){return t[n]}.bind(null,o));return i},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=19)}([function(t,n){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){var i=e(10),o="object"==typeof self&&self&&self.Object===Object&&self,a=i||o||Function("return this")();t.exports=a},function(t,n,e){var i=e(2).Symbol;t.exports=i},function(t,n,e){var i=e(8),o=e(0);t.exports=function(t,n,e){var a=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return o(e)&&(a="leading"in e?!!e.leading:a,r="trailing"in e?!!e.trailing:r),i(t,n,{leading:a,maxWait:n,trailing:r})}},,function(t,n,e){var i,o,a;function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t){"use strict";function n(n){return/In/.test(n)||t.inArray(n,t.fn.textillate.defaults.inEffects)>=0}function e(n){return/Out/.test(n)||t.inArray(n,t.fn.textillate.defaults.outEffects)>=0}function i(t){return"true"!==t&&"false"!==t?t:"true"===t}function o(n){var e=n.attributes||[],o={};return e.length?(t.each(e,(function(t,n){var e=n.nodeName.replace(/delayscale/,"delayScale");/^data-in-*/.test(e)?(o.in=o.in||{},o.in[e.replace(/data-in-/,"")]=i(n.nodeValue)):/^data-out-*/.test(e)?(o.out=o.out||{},o.out[e.replace(/data-out-/,"")]=i(n.nodeValue)):/^data-*/.test(e)&&(o[e.replace(/data-/,"")]=i(n.nodeValue))})),o):o}function a(i,o,a){var r=i.length;r?(o.shuffle&&(i=function(t){for(var n,e,i=t.length;i;n=parseInt(Math.random()*i),e=t[--i],t[i]=t[n],t[n]=e);return t}(i)),o.reverse&&(i=i.toArray().reverse()),t.each(i,(function(i,s){var l=t(s);function c(){n(o.effect)?l.css("visibility","visible"):e(o.effect)&&l.css("visibility","hidden"),!(r-=1)&&a&&a()}var u=o.sync?o.delay:o.delay*i*o.delayScale;l.text()?setTimeout((function(){!function(t,n,e){t.addClass("animated "+n).css("visibility","visible").show(),t.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",(function(){t.removeClass("animated "+n),e&&e()}))}(l,o.effect,c)}),u):c()}))):a&&a()}var s=function(i,r){var s=this,l=t(i);s.init=function(){s.$texts=l.find(r.selector),s.$texts.length||(s.$texts=t('<ul class="texts"><li>'+l.html()+"</li></ul>"),l.html(s.$texts)),s.$texts.hide(),s.$current=t("<span>").html(s.$texts.find(":first-child").html()).prependTo(l),n(r.in.effect)?s.$current.css("visibility","hidden"):e(r.out.effect)&&s.$current.css("visibility","visible"),s.setOptions(r),s.timeoutRun=null,setTimeout((function(){s.options.autoStart&&s.start()}),s.options.initialDelay)},s.setOptions=function(t){s.options=t},s.triggerEvent=function(n){var e=t.Event(n+".tlt");return l.trigger(e,s),e},s.in=function(i,r){i=i||0;var c,u=s.$texts.find(":nth-child("+((i||0)+1)+")"),f=t.extend(!0,{},s.options,u.length?o(u[0]):{});u.addClass("current"),s.triggerEvent("inAnimationBegin"),l.attr("data-active",u.data("id")),s.$current.html(u.html()).lettering("words"),"char"==s.options.type&&s.$current.find('[class^="word"]').css({display:"inline-block","-webkit-transform":"translate3d(0,0,0)","-moz-transform":"translate3d(0,0,0)","-o-transform":"translate3d(0,0,0)",transform:"translate3d(0,0,0)"}).each((function(){t(this).lettering()})),c=s.$current.find('[class^="'+s.options.type+'"]').css("display","inline-block"),n(f.in.effect)?c.css("visibility","hidden"):e(f.in.effect)&&c.css("visibility","visible"),s.currentIndex=i,a(c,f.in,(function(){s.triggerEvent("inAnimationEnd"),f.in.callback&&f.in.callback(),r&&r(s)}))},s.out=function(n){var e=s.$texts.find(":nth-child("+((s.currentIndex||0)+1)+")"),i=s.$current.find('[class^="'+s.options.type+'"]'),r=t.extend(!0,{},s.options,e.length?o(e[0]):{});s.triggerEvent("outAnimationBegin"),a(i,r.out,(function(){e.removeClass("current"),s.triggerEvent("outAnimationEnd"),l.removeAttr("data-active"),r.out.callback&&r.out.callback(),n&&n(s)}))},s.start=function(t){setTimeout((function(){s.triggerEvent("start"),function t(n){s.in(n,(function(){var e=s.$texts.children().length;n+=1,!s.options.loop&&n>=e?(s.options.callback&&s.options.callback(),s.triggerEvent("end")):(n%=e,s.timeoutRun=setTimeout((function(){s.out((function(){t(n)}))}),s.options.minDisplayTime))}))}(t||0)}),s.options.initialDelay)},s.stop=function(){s.timeoutRun&&(clearInterval(s.timeoutRun),s.timeoutRun=null)},s.init()};t.fn.textillate=function(n,e){return this.each((function(){var i=t(this),a=i.data("textillate"),l=t.extend(!0,{},t.fn.textillate.defaults,o(this),"object"==r(n)&&n);a?"string"==typeof n?a[n].apply(a,[].concat(e)):a.setOptions.call(a,l):i.data("textillate",a=new s(this,l))}))},t.fn.textillate.defaults={selector:".texts",loop:!1,minDisplayTime:2e3,initialDelay:0,in:{effect:"fadeInLeftBig",delayScale:1.5,delay:50,sync:!1,reverse:!1,shuffle:!1,callback:function(){}},out:{effect:"hinge",delayScale:1.5,delay:50,sync:!1,reverse:!1,shuffle:!1,callback:function(){}},autoStart:!0,inEffects:[],outEffects:["hinge"],callback:function(){},type:"char"}}(jQuery),function(t){function n(n,e,i,o){var a=n.text().split(e),r="";a.length&&(t(a).each((function(t,n){r+='<span class="'+i+(t+1)+'">'+n+"</span>"+o})),n.empty().append(r))}var e={init:function(){return this.each((function(){n(t(this),"","char","")}))},words:function(){return this.each((function(){n(t(this)," ","word"," ")}))},lines:function(){return this.each((function(){var e="eefec303079ad17405c889e092e105b0";n(t(this).children("br").replaceWith(e).end(),e,"line","")}))}};t.fn.lettering=function(n){return n&&e[n]?e[n].apply(this,[].slice.call(arguments,1)):"letters"!==n&&n?(t.error("Method "+n+" does not exist on jQuery.lettering"),this):e.init.apply(this,[].slice.call(arguments,0))}}(jQuery),o=[e(7)],void 0===(a="function"==typeof(i=function(t){"use strict";var n="drawsvg",e={duration:1e3,stagger:200,easing:"swing",reverse:!1,callback:t.noop},i=function(){var i=function(i,o){var a=this,r=t.extend(e,o);a.$elm=t(i),a.$elm.is("svg")&&(a.options=r,a.$paths=a.$elm.find("path"),a.totalDuration=r.duration+r.stagger*a.$paths.length,a.duration=r.duration/a.totalDuration,a.$paths.each((function(t,n){var e=n.getTotalLength();n.pathLen=e,n.delay=r.stagger*t/a.totalDuration,n.style.strokeDasharray=[e,e].join(" "),n.style.strokeDashoffset=e})),a.$elm.attr("class",(function(t,e){return[e,n+"-initialized"].join(" ")})))};return i.prototype.getVal=function(n,e){return 1-t.easing[e](n,n,0,1,1)},i.prototype.progress=function(t){var n=this,e=n.options,i=n.duration;n.$paths.each((function(o,a){var r=a.style;if(1===t)r.strokeDashoffset=0;else if(0===t)r.strokeDashoffset=a.pathLen+"px";else if(t>=a.delay&&t<=i+a.delay){var s=(t-a.delay)/i;r.strokeDashoffset=n.getVal(s,e.easing)*a.pathLen*(e.reverse?-1:1)+"px"}}))},i.prototype.animate=function(){var e=this;e.$elm.attr("class",(function(t,e){return[e,n+"-animating"].join(" ")})),t({len:0}).animate({len:1},{easing:"linear",duration:e.totalDuration,step:function(t,n){e.progress.call(e,t/n.end)},complete:function(){e.options.callback.call(this),e.$elm.attr("class",(function(t,e){return e.replace(n+"-animating","")}))}})},i}();t.fn[n]=function(e,o){return this.each((function(){var a=t.data(this,n);a&&""+e===e&&a[e]?a[e](o):t.data(this,n,new i(this,e))}))}})?i.apply(n,o):i)||(t.exports=a)},function(t,n){t.exports=jQuery},function(t,n,e){var i=e(0),o=e(9),a=e(11),r=Math.max,s=Math.min;t.exports=function(t,n,e){var l,c,u,f,d,p,h=0,v=!1,y=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(n){var e=l,i=c;return l=c=void 0,h=n,f=t.apply(i,e)}function $(t){return h=t,d=setTimeout(x,n),v?g(t):f}function b(t){var e=t-p;return void 0===p||e>=n||e<0||y&&t-h>=u}function x(){var t=o();if(b(t))return w(t);d=setTimeout(x,function(t){var e=n-(t-p);return y?s(e,u-(t-h)):e}(t))}function w(t){return d=void 0,m&&l?g(t):(l=c=void 0,f)}function O(){var t=o(),e=b(t);if(l=arguments,c=this,p=t,e){if(void 0===d)return $(p);if(y)return clearTimeout(d),d=setTimeout(x,n),g(p)}return void 0===d&&(d=setTimeout(x,n)),f}return n=a(n)||0,i(e)&&(v=!!e.leading,u=(y="maxWait"in e)?r(a(e.maxWait)||0,n):u,m="trailing"in e?!!e.trailing:m),O.cancel=function(){void 0!==d&&clearTimeout(d),h=0,l=p=c=d=void 0},O.flush=function(){return void 0===d?f:w(o())},O}},function(t,n,e){var i=e(2);t.exports=function(){return i.Date.now()}},function(t,n,e){(function(n){var e="object"==typeof n&&n&&n.Object===Object&&n;t.exports=e}).call(this,e(1))},function(t,n,e){var i=e(0),o=e(12),a=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(o(t))return NaN;if(i(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=i(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var e=s.test(t);return e||l.test(t)?c(t.slice(2),e?2:8):r.test(t)?NaN:+t}},function(t,n,e){var i=e(13),o=e(16);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==i(t)}},function(t,n,e){var i=e(3),o=e(14),a=e(15),r=i?i.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":r&&r in Object(t)?o(t):a(t)}},function(t,n,e){var i=e(3),o=Object.prototype,a=o.hasOwnProperty,r=o.toString,s=i?i.toStringTag:void 0;t.exports=function(t){var n=a.call(t,s),e=t[s];try{t[s]=void 0;var i=!0}catch(t){}var o=r.call(t);return i&&(n?t[s]=e:delete t[s]),o}},function(t,n){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},function(t,n){t.exports=function(t){return null!=t&&"object"==typeof t}},,,function(t,n,e){"use strict";e.r(n);e(6);var i=e(4),o=e.n(i);function a(t){var n,e=document.getElementsByTagName("body")[0],i=window.navigator.userAgent.toLowerCase(),o=i.indexOf("iphone")>-1||i.indexOf("ipad")>-1||i.indexOf("macintosh")>-1&&"ontouchend"in document,a=window.innerWidth-document.body.clientWidth;t?(e.style.paddingRight=a+"px",o?(n=-window.pageYOffset,e.style.position="fixed",e.style.width="100%",e.style.top=n+"px"):e.style.overflow="hidden"):t||(e.style.paddingRight="",o?(n=parseInt(e.style.top.replace(/[^0-9]/g,"")),e.style.position="",e.style.width="",e.style.top="",window.scrollTo(0,n)):e.style.overflow="")}var r,s=$("body"),l=sessionStorage.getItem("accessed");r=$("#mycLogo").drawsvg({duration:1e3,stagger:80,easing:"swing",callback:function(){$("#mycLogo g").addClass("fillAnim")}}),!l&&s.hasClass("home")?setTimeout((function(){r.css("opacity",1).drawsvg("animate")}),1800):r.css("opacity",1).drawsvg("animate"),$((function(){var t=$("#navHeader").clone().attr("id","cloneNav").addClass("cloneNav").insertAfter("#navHeader"),n=$(".logoFollow:last"),e=[$(".forShow1"),$(".forShow2"),$(".forShow3"),$(".forShow4")],i=$(".heading"),a=$("#commentAnim"),r=$("#rollBack"),s=$("#mogiFooter"),l=$(document).height();$(window).on("scroll",o()((function(){var o=$(this).height(),c=$(this).scrollTop();c>700?(n.css("display","inline-block"),t.addClass("isShow")):t.removeClass("isShow");for(var u=e.length,f=0;f<u;f++)e[f].each((function(t){var n=$(this).offset().top-30;c>n-o&&$(this).delay(90*t).queue((function(){$(this).addClass("showUp")}))}));if(i.each((function(){var t=$(this).offset().top;c>t-o&&$(this).css("opacity",1).textillate({in:{effect:"fadeInUp",shuffle:!0,delay:20,delayScale:3}})})),a.length){var d=a.offset().top;c>d-o&&a.css("opacity",1).addClass("animated zoomInDown")}c>700?r.fadeIn(500):r.fadeOut(500),l-(c+o)<300?s.show((function(){$(this).addClass("helloMogi")})):s.hasClass("helloMogi")&&s.fadeOut(200,(function(){$(this).removeClass("helloMogi")}))}),150)),r.on("click",(function(){$("body,html").animate({scrollTop:0},700,"easeInOutQuart")}))})),$((function(){var t=$("#hambBtn"),n=$(".hambBtn1"),e=$(".hambBtn2"),i=$(".hambBtn3"),o=$("#spNavHeader"),r=$(".spNavHeader ul li"),s=$("#spNavHeader li a");function l(){o.hasClass("is-show")?o.fadeOut(200,(function(){$(this).removeClass("is-show")})):o.fadeIn(200).addClass("is-show"),n.toggleClass("hambMove1"),e.toggleClass("hambMove2"),i.toggleClass("hambMove3")}t.on("click",(function(){l(),"list-item"==r.css("display")?(r.fadeOut(200),a(!1)):(a(!0),r.each((function(t){$(this).delay(80*t).fadeIn(200)})))})),s.on("click",(function(){a(!1),l(),r.hide()}))})),$((function(){$('.navHeader a[href^="#"]').on("click",(function(){var t=$(this).attr("href"),n=$("#"==t||""===t?"html":t).offset().top;return"#contact"===t?$("html,body").animate({scrollTop:n},700,"easeInOutQuart"):$("html,body").animate({scrollTop:n-50},700,"easeInOutQuart"),!1})),$('#spNavHeader a[href^="#"]').on("click",(function(){var t=$(this).attr("href"),n=$("#"==t||""===t?"html":t).offset().top;return"#contact"===t?$("html,body").animate({scrollTop:n+100},700,"easeInOutQuart"):$("html,body").animate({scrollTop:n+50},700,"easeInOutQuart"),!1}))})),$(window).on("load",(function(){var t=$(location).attr("href");if(t.includes("?id=")){var n=t.split("?id="),e=$("#".concat(n[n.length-1]));if(e.length){var i=e.offset().top+-50;navigator.userAgent.indexOf("iPhone")>0&&!navigator.userAgent.includes("iPad")||navigator.userAgent.indexOf("iPod")>0||navigator.userAgent.indexOf("Android")>0?"contact"==e.prop("id")?$("html, body").scrollTop(i+150):$("html, body").scrollTop(i+100):"contact"==e.prop("id")?$("html, body").scrollTop(i+50):$("html, body").scrollTop(i)}}})),$((function(){$(".modalOpen").on("click",(function(){a(!0),$(this).parents("#spNavHeader")[0]?$("#modalArea").show():$("#modalArea").fadeIn(),$("#contact")&&$("#contact").toggleClass("is-passive")})),$("#modalClose,#modalOuter").on("click",(function(){$("#modalArea").fadeOut((function(){a(!1),$("#contact")&&$("#contact").toggleClass("is-passive")}))}))})),$((function(){$(window).trigger("scroll")}))}]);