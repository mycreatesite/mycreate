!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=21)}([function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,n){var o=n(11),i="object"==typeof self&&self&&self.Object===Object&&self,a=o||i||Function("return this")();t.exports=a},function(t,e,n){var o=n(2).Symbol;t.exports=o},function(t,e,n){var o=n(9),i=n(1);t.exports=function(t,e,n){var a=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return i(n)&&(a="leading"in n?!!n.leading:a,r="trailing"in n?!!n.trailing:r),o(t,e,{leading:a,maxWait:e,trailing:r})}},,,function(t,e,n){var o,i,a;function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t){"use strict";function e(e){return/In/.test(e)||t.inArray(e,t.fn.textillate.defaults.inEffects)>=0}function n(e){return/Out/.test(e)||t.inArray(e,t.fn.textillate.defaults.outEffects)>=0}function o(t){return"true"!==t&&"false"!==t?t:"true"===t}function i(e){var n=e.attributes||[],i={};return n.length?(t.each(n,(function(t,e){var n=e.nodeName.replace(/delayscale/,"delayScale");/^data-in-*/.test(n)?(i.in=i.in||{},i.in[n.replace(/data-in-/,"")]=o(e.nodeValue)):/^data-out-*/.test(n)?(i.out=i.out||{},i.out[n.replace(/data-out-/,"")]=o(e.nodeValue)):/^data-*/.test(n)&&(i[n.replace(/data-/,"")]=o(e.nodeValue))})),i):i}function a(o,i,a){var r=o.length;r?(i.shuffle&&(o=function(t){for(var e,n,o=t.length;o;e=parseInt(Math.random()*o),n=t[--o],t[o]=t[e],t[e]=n);return t}(o)),i.reverse&&(o=o.toArray().reverse()),t.each(o,(function(o,s){var l=t(s);function c(){e(i.effect)?l.css("visibility","visible"):n(i.effect)&&l.css("visibility","hidden"),!(r-=1)&&a&&a()}var u=i.sync?i.delay:i.delay*o*i.delayScale;l.text()?setTimeout((function(){!function(t,e,n){t.addClass("animated "+e).css("visibility","visible").show(),t.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",(function(){t.removeClass("animated "+e),n&&n()}))}(l,i.effect,c)}),u):c()}))):a&&a()}var s=function(o,r){var s=this,l=t(o);s.init=function(){s.$texts=l.find(r.selector),s.$texts.length||(s.$texts=t('<ul class="texts"><li>'+l.html()+"</li></ul>"),l.html(s.$texts)),s.$texts.hide(),s.$current=t("<span>").html(s.$texts.find(":first-child").html()).prependTo(l),e(r.in.effect)?s.$current.css("visibility","hidden"):n(r.out.effect)&&s.$current.css("visibility","visible"),s.setOptions(r),s.timeoutRun=null,setTimeout((function(){s.options.autoStart&&s.start()}),s.options.initialDelay)},s.setOptions=function(t){s.options=t},s.triggerEvent=function(e){var n=t.Event(e+".tlt");return l.trigger(n,s),n},s.in=function(o,r){o=o||0;var c,u=s.$texts.find(":nth-child("+((o||0)+1)+")"),f=t.extend(!0,{},s.options,u.length?i(u[0]):{});u.addClass("current"),s.triggerEvent("inAnimationBegin"),l.attr("data-active",u.data("id")),s.$current.html(u.html()).lettering("words"),"char"==s.options.type&&s.$current.find('[class^="word"]').css({display:"inline-block","-webkit-transform":"translate3d(0,0,0)","-moz-transform":"translate3d(0,0,0)","-o-transform":"translate3d(0,0,0)",transform:"translate3d(0,0,0)"}).each((function(){t(this).lettering()})),c=s.$current.find('[class^="'+s.options.type+'"]').css("display","inline-block"),e(f.in.effect)?c.css("visibility","hidden"):n(f.in.effect)&&c.css("visibility","visible"),s.currentIndex=o,a(c,f.in,(function(){s.triggerEvent("inAnimationEnd"),f.in.callback&&f.in.callback(),r&&r(s)}))},s.out=function(e){var n=s.$texts.find(":nth-child("+((s.currentIndex||0)+1)+")"),o=s.$current.find('[class^="'+s.options.type+'"]'),r=t.extend(!0,{},s.options,n.length?i(n[0]):{});s.triggerEvent("outAnimationBegin"),a(o,r.out,(function(){n.removeClass("current"),s.triggerEvent("outAnimationEnd"),l.removeAttr("data-active"),r.out.callback&&r.out.callback(),e&&e(s)}))},s.start=function(t){setTimeout((function(){s.triggerEvent("start"),function t(e){s.in(e,(function(){var n=s.$texts.children().length;e+=1,!s.options.loop&&e>=n?(s.options.callback&&s.options.callback(),s.triggerEvent("end")):(e%=n,s.timeoutRun=setTimeout((function(){s.out((function(){t(e)}))}),s.options.minDisplayTime))}))}(t||0)}),s.options.initialDelay)},s.stop=function(){s.timeoutRun&&(clearInterval(s.timeoutRun),s.timeoutRun=null)},s.init()};t.fn.textillate=function(e,n){return this.each((function(){var o=t(this),a=o.data("textillate"),l=t.extend(!0,{},t.fn.textillate.defaults,i(this),"object"==r(e)&&e);a?"string"==typeof e?a[e].apply(a,[].concat(n)):a.setOptions.call(a,l):o.data("textillate",a=new s(this,l))}))},t.fn.textillate.defaults={selector:".texts",loop:!1,minDisplayTime:2e3,initialDelay:0,in:{effect:"fadeInLeftBig",delayScale:1.5,delay:50,sync:!1,reverse:!1,shuffle:!1,callback:function(){}},out:{effect:"hinge",delayScale:1.5,delay:50,sync:!1,reverse:!1,shuffle:!1,callback:function(){}},autoStart:!0,inEffects:[],outEffects:["hinge"],callback:function(){},type:"char"}}(jQuery),function(t){function e(e,n,o,i){var a=e.text().split(n),r="";a.length&&(t(a).each((function(t,e){r+='<span class="'+o+(t+1)+'">'+e+"</span>"+i})),e.empty().append(r))}var n={init:function(){return this.each((function(){e(t(this),"","char","")}))},words:function(){return this.each((function(){e(t(this)," ","word"," ")}))},lines:function(){return this.each((function(){var n="eefec303079ad17405c889e092e105b0";e(t(this).children("br").replaceWith(n).end(),n,"line","")}))}};t.fn.lettering=function(e){return e&&n[e]?n[e].apply(this,[].slice.call(arguments,1)):"letters"!==e&&e?(t.error("Method "+e+" does not exist on jQuery.lettering"),this):n.init.apply(this,[].slice.call(arguments,0))}}(jQuery),i=[n(8)],void 0===(a="function"==typeof(o=function(t){"use strict";var e="drawsvg",n={duration:1e3,stagger:200,easing:"swing",reverse:!1,callback:t.noop},o=function(){var o=function(o,i){var a=this,r=t.extend(n,i);a.$elm=t(o),a.$elm.is("svg")&&(a.options=r,a.$paths=a.$elm.find("path"),a.totalDuration=r.duration+r.stagger*a.$paths.length,a.duration=r.duration/a.totalDuration,a.$paths.each((function(t,e){var n=e.getTotalLength();e.pathLen=n,e.delay=r.stagger*t/a.totalDuration,e.style.strokeDasharray=[n,n].join(" "),e.style.strokeDashoffset=n})),a.$elm.attr("class",(function(t,n){return[n,e+"-initialized"].join(" ")})))};return o.prototype.getVal=function(e,n){return 1-t.easing[n](e,e,0,1,1)},o.prototype.progress=function(t){var e=this,n=e.options,o=e.duration;e.$paths.each((function(i,a){var r=a.style;if(1===t)r.strokeDashoffset=0;else if(0===t)r.strokeDashoffset=a.pathLen+"px";else if(t>=a.delay&&t<=o+a.delay){var s=(t-a.delay)/o;r.strokeDashoffset=e.getVal(s,n.easing)*a.pathLen*(n.reverse?-1:1)+"px"}}))},o.prototype.animate=function(){var n=this;n.$elm.attr("class",(function(t,n){return[n,e+"-animating"].join(" ")})),t({len:0}).animate({len:1},{easing:"linear",duration:n.totalDuration,step:function(t,e){n.progress.call(n,t/e.end)},complete:function(){n.options.callback.call(this),n.$elm.attr("class",(function(t,n){return n.replace(e+"-animating","")}))}})},o}();t.fn[e]=function(n,i){return this.each((function(){var a=t.data(this,e);a&&""+n===n&&a[n]?a[n](i):t.data(this,e,new o(this,n))}))}})?o.apply(e,i):o)||(t.exports=a)},function(t,e){t.exports=jQuery},function(t,e,n){var o=n(1),i=n(10),a=n(12),r=Math.max,s=Math.min;t.exports=function(t,e,n){var l,c,u,f,d,p,h=0,v=!1,m=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=l,o=c;return l=c=void 0,h=e,f=t.apply(o,n)}function b(t){return h=t,d=setTimeout(x,e),v?g(t):f}function $(t){var n=t-p;return void 0===p||n>=e||n<0||m&&t-h>=u}function x(){var t=i();if($(t))return w(t);d=setTimeout(x,function(t){var n=e-(t-p);return m?s(n,u-(t-h)):n}(t))}function w(t){return d=void 0,y&&l?g(t):(l=c=void 0,f)}function S(){var t=i(),n=$(t);if(l=arguments,c=this,p=t,n){if(void 0===d)return b(p);if(m)return clearTimeout(d),d=setTimeout(x,e),g(p)}return void 0===d&&(d=setTimeout(x,e)),f}return e=a(e)||0,o(n)&&(v=!!n.leading,u=(m="maxWait"in n)?r(a(n.maxWait)||0,e):u,y="trailing"in n?!!n.trailing:y),S.cancel=function(){void 0!==d&&clearTimeout(d),h=0,l=p=c=d=void 0},S.flush=function(){return void 0===d?f:w(i())},S}},function(t,e,n){var o=n(2);t.exports=function(){return o.Date.now()}},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(0))},function(t,e,n){var o=n(1),i=n(13),a=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return NaN;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var n=s.test(t);return n||l.test(t)?c(t.slice(2),n?2:8):r.test(t)?NaN:+t}},function(t,e,n){var o=n(14),i=n(17);t.exports=function(t){return"symbol"==typeof t||i(t)&&"[object Symbol]"==o(t)}},function(t,e,n){var o=n(3),i=n(15),a=n(16),r=o?o.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":r&&r in Object(t)?i(t):a(t)}},function(t,e,n){var o=n(3),i=Object.prototype,a=i.hasOwnProperty,r=i.toString,s=o?o.toStringTag:void 0;t.exports=function(t){var e=a.call(t,s),n=t[s];try{t[s]=void 0;var o=!0}catch(t){}var i=r.call(t);return o&&(e?t[s]=n:delete t[s]),i}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t,e,o){function i(t,e){return n(t)===e}function a(){return"function"!=typeof e.createElement?e.createElement(arguments[0]):d?e.createElementNS.call(e,"http://www.w3.org/2000/svg",arguments[0]):e.createElement.apply(e,arguments)}function r(){var t=e.body;return t||((t=a(d?"svg":"body")).fake=!0),t}var s=[],l=[],c={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(t,e){var n=this;setTimeout((function(){e(n[t])}),0)},addTest:function(t,e,n){l.push({name:t,fn:e,options:n})},addAsyncTest:function(t){l.push({name:null,fn:t})}},u=function(){};u.prototype=c,u=new u;var f=e.documentElement,d="svg"===f.nodeName.toLowerCase(),p=c._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];c._prefixes=p;var h=c.testStyles=function(t,n,o,i){var s,l,c,u,d="modernizr",p=a("div"),h=r();if(parseInt(o,10))for(;o--;)(c=a("div")).id=i?i[o]:d+(o+1),p.appendChild(c);return(s=a("style")).type="text/css",s.id="s"+d,(h.fake?h:p).appendChild(s),h.appendChild(p),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(e.createTextNode(t)),p.id=d,h.fake&&(h.style.background="",h.style.overflow="hidden",u=f.style.overflow,f.style.overflow="hidden",f.appendChild(h)),l=n(p,t),h.fake?(h.parentNode.removeChild(h),f.style.overflow=u,f.offsetHeight):p.parentNode.removeChild(p),!!l};u.addTest("touchevents",(function(){var n;if("ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch)n=!0;else{var o=["@media (",p.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");h(o,(function(t){n=9===t.offsetTop}))}return n})),function(){var t,e,n,o,a,r;for(var c in l)if(l.hasOwnProperty(c)){if(t=[],(e=l[c]).name&&(t.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(n=0;n<e.options.aliases.length;n++)t.push(e.options.aliases[n].toLowerCase());for(o=i(e.fn,"function")?e.fn():e.fn,a=0;a<t.length;a++)1===(r=t[a].split(".")).length?u[r[0]]=o:(!u[r[0]]||u[r[0]]instanceof Boolean||(u[r[0]]=new Boolean(u[r[0]])),u[r[0]][r[1]]=o),s.push((o?"":"no-")+r.join("-"))}}(),function(t){var e=f.className,n=u._config.classPrefix||"";if(d&&(e=e.baseVal),u._config.enableJSClass){var o=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");e=e.replace(o,"$1"+n+"js$2")}u._config.enableClasses&&(e+=" "+n+t.join(" "+n),d?f.className.baseVal=e:f.className=e)}(s),delete c.addTest,delete c.addAsyncTest;for(var v=0;v<u._q.length;v++)u._q[v]();t.Modernizr=u}(window,document)},,,function(t,e,n){"use strict";n.r(e);n(7);var o=n(4),i=n.n(o);function a(t){var e,n=document.getElementsByTagName("body")[0],o=window.navigator.userAgent.toLowerCase(),i=o.indexOf("iphone")>-1||o.indexOf("ipad")>-1||o.indexOf("macintosh")>-1&&"ontouchend"in document,a=window.innerWidth-document.body.clientWidth;t?(n.style.paddingRight=a+"px",i?(e=-window.pageYOffset,n.style.position="fixed",n.style.width="100%",n.style.top=e+"px"):n.style.overflow="hidden"):t||(n.style.paddingRight="",i?(e=parseInt(n.style.top.replace(/[^0-9]/g,"")),n.style.position="",n.style.width="",n.style.top="",window.scrollTo(0,e)):n.style.overflow="")}n(18);var r,s,l=$("body");r=sessionStorage.getItem("accessed"),s=$("#mycLogo").drawsvg({duration:1e3,stagger:80,easing:"swing",callback:function(){$("#mycLogo g").addClass("fillAnim")}}),!r&&l.hasClass("home")?setTimeout((function(){s.css("opacity",1).drawsvg("animate")}),1800):s.css("opacity",1).drawsvg("animate"),$((function(){var t=$("#navHeader").clone().attr("id","cloneNav").addClass("cloneNav").insertAfter("#navHeader"),e=$(".logoFollow:last"),n=[$(".forShow1"),$(".forShow2"),$(".forShow3"),$(".forShow4")],o=$(".heading"),a=$("#commentAnim"),r=$("#rollBack"),s=$("#mogiFooter"),l=$(document).height();$(window).on("scroll",i()((function(){var i=$(this).height(),c=$(this).scrollTop();c>700?(e.css("display","inline-block"),t.addClass("isShow")):t.removeClass("isShow");for(var u=n.length,f=0;f<u;f++)n[f].each((function(t){var e=$(this).offset().top-30;c>e-i&&$(this).delay(90*t).queue((function(){$(this).addClass("showUp")}))}));if(o.each((function(){var t=$(this).offset().top;c>t-i&&$(this).css("opacity",1).textillate({in:{effect:"fadeInUp",shuffle:!0,delay:20,delayScale:3}})})),a.length){var d=a.offset().top;c>d-i&&a.css("opacity",1).addClass("animated zoomInDown")}c>700?r.fadeIn(500):r.fadeOut(500),l-(c+i)<300?s.show((function(){$(this).addClass("helloMogi")})):s.hasClass("helloMogi")&&s.fadeOut(200,(function(){$(this).removeClass("helloMogi")}))}),150)),r.on("click",(function(){$("body,html").animate({scrollTop:0},700,"easeInOutQuart")}))})),$((function(){var t=$("#hambBtn"),e=$(".hambBtn1"),n=$(".hambBtn2"),o=$(".hambBtn3"),i=$("#spNavHeader"),r=$(".spNavHeader ul li"),s=$("#spNavHeader li a");function l(){i.hasClass("is-show")?i.fadeOut(200,(function(){$(this).removeClass("is-show")})):i.fadeIn(200).addClass("is-show"),e.toggleClass("hambMove1"),n.toggleClass("hambMove2"),o.toggleClass("hambMove3")}t.on("click",(function(){l(),"list-item"==r.css("display")?(r.fadeOut(200),a(!1)):(a(!0),r.each((function(t){$(this).delay(80*t).fadeIn(200)})))})),s.on("click",(function(){a(!1),l(),r.hide()}))})),$((function(){$('.navHeader a[href^="#"]').on("click",(function(){var t=$(this).attr("href"),e=$("#"==t||""===t?"html":t).offset().top;return"#contact"===t?$("html,body").animate({scrollTop:e},700,"easeInOutQuart"):$("html,body").animate({scrollTop:e-50},700,"easeInOutQuart"),!1})),$('#spNavHeader a[href^="#"]').on("click",(function(){var t=$(this).attr("href"),e=$("#"==t||""===t?"html":t).offset().top;return"#contact"===t?$("html,body").animate({scrollTop:e+100},700,"easeInOutQuart"):$("html,body").animate({scrollTop:e+50},700,"easeInOutQuart"),!1}))})),$(window).on("load",(function(){var t=$(location).attr("href");if(t.includes("?id=")){var e=t.split("?id="),n=$("#".concat(e[e.length-1]));if(n.length){var o=n.offset().top+-50;navigator.userAgent.indexOf("iPhone")>0&&!navigator.userAgent.includes("iPad")||navigator.userAgent.indexOf("iPod")>0||navigator.userAgent.indexOf("Android")>0?"contact"==n.prop("id")?$("html, body").scrollTop(o+150):$("html, body").scrollTop(o+100):"contact"==n.prop("id")?$("html, body").scrollTop(o+50):$("html, body").scrollTop(o)}}})),$((function(){$(".modalOpen").on("click",(function(){a(!0),$(this).parents("#spNavHeader")[0]?$("#modalArea").show():$("#modalArea").fadeIn(),$("#contact")&&$("#contact").toggleClass("is-passive")})),$("#modalClose,#modalOuter").on("click",(function(){$("#modalArea").fadeOut((function(){a(!1),$("#contact")&&$("#contact").toggleClass("is-passive")}))}))})),$((function(){Modernizr.touchevents||function(){var t=document.getElementById("cursor"),e=document.getElementById("stalker");document.addEventListener("mousemove",(function(n){t.style.transform="translate("+n.clientX+"px, "+n.clientY+"px)",e.style.transform="translate("+n.clientX+"px, "+n.clientY+"px)"}));for(var n=document.querySelectorAll("a, #myslider .nav, .mouseStalker"),o=0;o<n.length;o++)n[o].addEventListener("mouseover",(function(){t.classList.add("is-hovered")})),n[o].addEventListener("mouseout",(function(){t.classList.remove("is-hovered")}))}()})),$((function(){$(window).trigger("scroll")}))}]);