!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=18)}({0:function(t,e){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(t){"object"==typeof window&&(i=window)}t.exports=i},18:function(t,e,i){"use strict";i.r(e);var n=i(5),o=i.n(n),r=i(6),s=i.n(r),a=sessionStorage.getItem("accessed");$((function(){var t=$("#loadingArea");a?t.remove():$(window).on("load",(function(){t.addClass("loadingStart"),setTimeout((function(){t.addClass("loadingFadeTo").fadeOut(600)}),1500),sessionStorage.setItem("accessed",!0)}))})),$((function(){var t=document.querySelectorAll(".scene"),e=$("#myslider");t.forEach((function(t){new s.a(t,{scalarX:.5,scalarY:.5})})),e.juicyslider({mode:"cover",width:"100%",height:"100%",mask:"none",bgcolor:"#000",autoplay:8e3,shuffle:!1,show:{effect:"fade",duration:1500},hide:{effect:"fade",duration:1500}})})),$((function(){new o.a(".rellax")}))},5:function(t,e,i){(function(i){var n,o,r;"undefined"!=typeof window&&window,o=[],void 0===(r="function"==typeof(n=function(){return function t(e,i){var n=Object.create(t.prototype),o=0,r=0,s=0,a=0,l=[],h=!0,u=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){return setTimeout(t,1e3/60)},c=null,d=!1;try{var p=Object.defineProperty({},"passive",{get:function(){d=!0}});window.addEventListener("testPassive",null,p),window.removeEventListener("testPassive",null,p)}catch(t){}var m=window.cancelAnimationFrame||window.mozCancelAnimationFrame||clearTimeout,f=window.transformProp||function(){var t=document.createElement("div");if(null===t.style.transform){var e,i=["Webkit","Moz","ms"];for(e in i)if(void 0!==t.style[i[e]+"Transform"])return i[e]+"Transform"}return"transform"}();if(n.options={speed:-2,verticalSpeed:null,horizontalSpeed:null,breakpoints:[576,768,1201],center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,verticalScrollAxis:"y",horizontalScrollAxis:"x",callback:function(){}},i&&Object.keys(i).forEach((function(t){n.options[t]=i[t]})),i&&i.breakpoints&&function(){if(3===n.options.breakpoints.length&&Array.isArray(n.options.breakpoints)){var t,e=!0,i=!0;if(n.options.breakpoints.forEach((function(n){"number"!=typeof n&&(i=!1),null!==t&&n<t&&(e=!1),t=n})),e&&i)return}n.options.breakpoints=[576,768,1201]}(),e||(e=".rellax"),0<(p="string"==typeof e?document.querySelectorAll(e):[e]).length){if(n.elems=p,n.options.wrapper&&!n.options.wrapper.nodeType){if(!(p=document.querySelector(n.options.wrapper)))return;n.options.wrapper=p}var v,w=function t(){for(var e=0;e<l.length;e++)n.elems[e].style.cssText=l[e].style;for(l=[],r=window.innerHeight,a=window.innerWidth,e=n.options.breakpoints,v=a<e[0]?"xs":a>=e[0]&&a<e[1]?"sm":a>=e[1]&&a<e[2]?"md":"lg",y(),e=0;e<n.elems.length;e++){var i=void 0,o=n.elems[e],s=o.getAttribute("data-rellax-percentage"),u=o.getAttribute("data-rellax-speed"),c=o.getAttribute("data-rellax-xs-speed"),d=o.getAttribute("data-rellax-mobile-speed"),p=o.getAttribute("data-rellax-tablet-speed"),m=o.getAttribute("data-rellax-desktop-speed"),f=o.getAttribute("data-rellax-vertical-speed"),w=o.getAttribute("data-rellax-horizontal-speed"),g=o.getAttribute("data-rellax-vertical-scroll-axis"),X=o.getAttribute("data-rellax-horizontal-scroll-axis"),T=o.getAttribute("data-rellax-zindex")||0,k=o.getAttribute("data-rellax-min"),S=o.getAttribute("data-rellax-max"),C=o.getAttribute("data-rellax-min-x"),O=o.getAttribute("data-rellax-max-x"),E=o.getAttribute("data-rellax-min-y"),A=o.getAttribute("data-rellax-max-y"),M=!0;c||d||p||m?i={xs:c,sm:d,md:p,lg:m}:M=!1,c=n.options.wrapper?n.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,n.options.relativeToWrapper&&(c=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)-n.options.wrapper.offsetTop);var R=n.options.vertical&&(s||n.options.center)?c:0,z=n.options.horizontal&&(s||n.options.center)?n.options.wrapper?n.options.wrapper.scrollLeft:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0;c=R+o.getBoundingClientRect().top,d=o.clientHeight||o.offsetHeight||o.scrollHeight,p=z+o.getBoundingClientRect().left,m=o.clientWidth||o.offsetWidth||o.scrollWidth,R=s||(R-c+r)/(d+r),s=s||(z-p+a)/(m+a),n.options.center&&(R=s=.5),i=M&&null!==i[v]?Number(i[v]):u||n.options.speed,f=f||n.options.verticalSpeed,w=w||n.options.horizontalSpeed,g=g||n.options.verticalScrollAxis,X=X||n.options.horizontalScrollAxis,u=b(s,R,i,f,w),o=o.style.cssText,M="",(s=/transform\s*:/i.exec(o))&&(M=(s=(M=o.slice(s.index)).indexOf(";"))?" "+M.slice(11,s).replace(/\s/g,""):" "+M.slice(11).replace(/\s/g,"")),l.push({baseX:u.x,baseY:u.y,top:c,left:p,height:d,width:m,speed:i,verticalSpeed:f,horizontalSpeed:w,verticalScrollAxis:g,horizontalScrollAxis:X,style:o,transform:M,zindex:T,min:k,max:S,minX:C,maxX:O,minY:E,maxY:A})}Y(),h&&(window.addEventListener("resize",t),h=!1,x())},y=function(){var t=o,e=s;return o=n.options.wrapper?n.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset,s=n.options.wrapper?n.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset,n.options.relativeToWrapper&&(o=((document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset)-n.options.wrapper.offsetTop),!!(t!=o&&n.options.vertical||e!=s&&n.options.horizontal)},b=function(t,e,i,o,r){var s={};return t=100*(r||i)*(1-t),e=100*(o||i)*(1-e),s.x=n.options.round?Math.round(t):Math.round(100*t)/100,s.y=n.options.round?Math.round(e):Math.round(100*e)/100,s},g=function t(){window.removeEventListener("resize",t),window.removeEventListener("orientationchange",t),(n.options.wrapper?n.options.wrapper:window).removeEventListener("scroll",t),(n.options.wrapper?n.options.wrapper:document).removeEventListener("touchmove",t),c=u(x)},x=function t(){y()&&!1===h?(Y(),c=u(t)):(c=null,window.addEventListener("resize",g),window.addEventListener("orientationchange",g),(n.options.wrapper?n.options.wrapper:window).addEventListener("scroll",g,!!d&&{passive:!0}),(n.options.wrapper?n.options.wrapper:document).addEventListener("touchmove",g,!!d&&{passive:!0}))},Y=function(){for(var t,e=0;e<n.elems.length;e++){var i=l[e].verticalScrollAxis.toLowerCase(),h=l[e].horizontalScrollAxis.toLowerCase();t=-1!=i.indexOf("x")?o:0,i=-1!=i.indexOf("y")?o:0;var u=-1!=h.indexOf("x")?s:0;h=-1!=h.indexOf("y")?s:0,h=(t=b((t+u-l[e].left+a)/(l[e].width+a),(i+h-l[e].top+r)/(l[e].height+r),l[e].speed,l[e].verticalSpeed,l[e].horizontalSpeed)).y-l[e].baseY,i=t.x-l[e].baseX,null!==l[e].min&&(n.options.vertical&&!n.options.horizontal&&(h=h<=l[e].min?l[e].min:h),n.options.horizontal&&!n.options.vertical&&(i=i<=l[e].min?l[e].min:i)),null!=l[e].minY&&(h=h<=l[e].minY?l[e].minY:h),null!=l[e].minX&&(i=i<=l[e].minX?l[e].minX:i),null!==l[e].max&&(n.options.vertical&&!n.options.horizontal&&(h=h>=l[e].max?l[e].max:h),n.options.horizontal&&!n.options.vertical&&(i=i>=l[e].max?l[e].max:i)),null!=l[e].maxY&&(h=h>=l[e].maxY?l[e].maxY:h),null!=l[e].maxX&&(i=i>=l[e].maxX?l[e].maxX:i),n.elems[e].style[f]="translate3d("+(n.options.horizontal?i:"0")+"px,"+(n.options.vertical?h:"0")+"px,"+l[e].zindex+"px) "+l[e].transform}n.options.callback(t)};return n.destroy=function(){for(var t=0;t<n.elems.length;t++)n.elems[t].style.cssText=l[t].style;h||(window.removeEventListener("resize",w),h=!0),m(c),c=null},w(),n.refresh=w,n}}})?n.apply(e,o):n)||(t.exports=r)}).call(this,i(0))},6:function(t,e,i){(function(e){t.exports=function t(e,i,n){function o(s,a){if(!i[s]){if(!e[s]){if(r)return r(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var h=i[s]={exports:{}};e[s][0].call(h.exports,(function(t){return o(e[s][1][t]||t)}),h,h.exports,t,e,i,n)}return i[s].exports}for(var r=!1,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(t,e,i){"use strict";function n(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var i,a,l=n(t),h=1;h<arguments.length;h++){for(var u in i=Object(arguments[h]))r.call(i,u)&&(l[u]=i[u]);if(o){a=o(i);for(var c=0;c<a.length;c++)s.call(i,a[c])&&(l[a[c]]=i[a[c]])}}return l}},{}],2:[function(t,e,i){(function(t){(function(){var i,n,o,r,s,a;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(i()-s)/1e6},n=t.hrtime,r=(i=function(){var t;return 1e9*(t=n())[0]+t[1]})(),a=1e9*t.uptime(),s=r-a):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,t("_process"))},{_process:3}],3:[function(t,e,i){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(t){if(u===setTimeout)return setTimeout(t,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function s(){f&&p&&(f=!1,p.length?m=p.concat(m):v=-1,m.length&&a())}function a(){if(!f){var t=r(s);f=!0;for(var e=m.length;e;){for(p=m,m=[];++v<e;)p&&p[v].run();v=-1,e=m.length}p=null,f=!1,function(t){if(c===clearTimeout)return clearTimeout(t);if((c===o||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(t);try{c(t)}catch(e){try{return c.call(null,t)}catch(e){return c.call(this,t)}}}(t)}}function l(t,e){this.fun=t,this.array=e}function h(){}var u,c,d=e.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(t){u=n}try{c="function"==typeof clearTimeout?clearTimeout:o}catch(t){c=o}}();var p,m=[],f=!1,v=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];m.push(new l(t,e)),1!==m.length||f||r(a)},l.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=h,d.addListener=h,d.once=h,d.off=h,d.removeListener=h,d.removeAllListeners=h,d.emit=h,d.prependListener=h,d.prependOnceListener=h,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},{}],4:[function(t,i,n){(function(e){for(var n=t("performance-now"),o="undefined"==typeof window?e:window,r=["moz","webkit"],s="AnimationFrame",a=o["request"+s],l=o["cancel"+s]||o["cancelRequest"+s],h=0;!a&&h<r.length;h++)a=o[r[h]+"Request"+s],l=o[r[h]+"Cancel"+s]||o[r[h]+"CancelRequest"+s];if(!a||!l){var u=0,c=0,d=[];a=function(t){if(0===d.length){var e=n(),i=Math.max(0,1e3/60-(e-u));u=i+e,setTimeout((function(){var t=d.slice(0);d.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(u)}catch(t){setTimeout((function(){throw t}),0)}}),Math.round(i))}return d.push({handle:++c,callback:t,cancelled:!1}),c},l=function(t){for(var e=0;e<d.length;e++)d[e].handle===t&&(d[e].cancelled=!0)}}i.exports=function(t){return a.call(o,t)},i.exports.cancel=function(){l.apply(o,arguments)},i.exports.polyfill=function(){o.requestAnimationFrame=a,o.cancelAnimationFrame=l}}).call(this,void 0!==e?e:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"performance-now":2}],5:[function(t,e,i){"use strict";var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=t("raf"),r=t("object-assign"),s={propertyCache:{},vendors:[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],clamp:function(t,e,i){return e<i?t<e?e:t>i?i:t:t<i?i:t>e?e:t},data:function(t,e){return s.deserialize(t.getAttribute("data-"+e))},deserialize:function(t){return"true"===t||"false"!==t&&("null"===t?null:!isNaN(parseFloat(t))&&isFinite(t)?parseFloat(t):t)},camelCase:function(t){return t.replace(/-+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))},accelerate:function(t){s.css(t,"transform","translate3d(0,0,0) rotate(0.0001deg)"),s.css(t,"transform-style","preserve-3d"),s.css(t,"backface-visibility","hidden")},transformSupport:function(t){for(var e=document.createElement("div"),i=!1,n=null,o=!1,r=null,a=null,l=0,h=s.vendors.length;l<h;l++)if(null!==s.vendors[l]?(r=s.vendors[l][0]+"transform",a=s.vendors[l][1]+"Transform"):(r="transform",a="transform"),void 0!==e.style[a]){i=!0;break}switch(t){case"2D":o=i;break;case"3D":if(i){var u=document.body||document.createElement("body"),c=document.documentElement,d=c.style.overflow,p=!1;document.body||(p=!0,c.style.overflow="hidden",c.appendChild(u),u.style.overflow="hidden",u.style.background=""),u.appendChild(e),e.style[a]="translate3d(1px,1px,1px)",o=void 0!==(n=window.getComputedStyle(e).getPropertyValue(r))&&n.length>0&&"none"!==n,c.style.overflow=d,u.removeChild(e),p&&(u.removeAttribute("style"),u.parentNode.removeChild(u))}}return o},css:function(t,e,i){var n=s.propertyCache[e];if(!n)for(var o=0,r=s.vendors.length;o<r;o++)if(n=null!==s.vendors[o]?s.camelCase(s.vendors[o][1]+"-"+e):e,void 0!==t.style[n]){s.propertyCache[e]=n;break}t.style[n]=i}},a={relativeInput:!1,clipRelativeInput:!1,inputElement:null,hoverOnly:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5,pointerEvents:!1,precision:1,onReady:null,selector:null},l=function(){function t(e,i){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.element=e;var n={calibrateX:s.data(this.element,"calibrate-x"),calibrateY:s.data(this.element,"calibrate-y"),invertX:s.data(this.element,"invert-x"),invertY:s.data(this.element,"invert-y"),limitX:s.data(this.element,"limit-x"),limitY:s.data(this.element,"limit-y"),scalarX:s.data(this.element,"scalar-x"),scalarY:s.data(this.element,"scalar-y"),frictionX:s.data(this.element,"friction-x"),frictionY:s.data(this.element,"friction-y"),originX:s.data(this.element,"origin-x"),originY:s.data(this.element,"origin-y"),pointerEvents:s.data(this.element,"pointer-events"),precision:s.data(this.element,"precision"),relativeInput:s.data(this.element,"relative-input"),clipRelativeInput:s.data(this.element,"clip-relative-input"),hoverOnly:s.data(this.element,"hover-only"),inputElement:document.querySelector(s.data(this.element,"input-element")),selector:s.data(this.element,"selector")};for(var o in n)null===n[o]&&delete n[o];r(this,a,n,i),this.inputElement||(this.inputElement=this.element),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depthsX=[],this.depthsY=[],this.raf=null,this.bounds=null,this.elementPositionX=0,this.elementPositionY=0,this.elementWidth=0,this.elementHeight=0,this.elementCenterX=0,this.elementCenterY=0,this.elementRangeX=0,this.elementRangeY=0,this.calibrationX=0,this.calibrationY=0,this.inputX=0,this.inputY=0,this.motionX=0,this.motionY=0,this.velocityX=0,this.velocityY=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onDeviceMotion=this.onDeviceMotion.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onMotionTimer=this.onMotionTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.windowWidth=null,this.windowHeight=null,this.windowCenterX=null,this.windowCenterY=null,this.windowRadiusX=null,this.windowRadiusY=null,this.portrait=!1,this.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),this.motionSupport=!!window.DeviceMotionEvent&&!this.desktop,this.orientationSupport=!!window.DeviceOrientationEvent&&!this.desktop,this.orientationStatus=0,this.motionStatus=0,this.initialise()}return n(t,[{key:"initialise",value:function(){void 0===this.transform2DSupport&&(this.transform2DSupport=s.transformSupport("2D"),this.transform3DSupport=s.transformSupport("3D")),this.transform3DSupport&&s.accelerate(this.element),"static"===window.getComputedStyle(this.element).getPropertyValue("position")&&(this.element.style.position="relative"),this.pointerEvents||(this.element.style.pointerEvents="none"),this.updateLayers(),this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)}},{key:"doReadyCallback",value:function(){this.onReady&&this.onReady()}},{key:"updateLayers",value:function(){this.selector?this.layers=this.element.querySelectorAll(this.selector):this.layers=this.element.children,this.layers.length,this.depthsX=[],this.depthsY=[];for(var t=0;t<this.layers.length;t++){var e=this.layers[t];this.transform3DSupport&&s.accelerate(e),e.style.position=t?"absolute":"relative",e.style.display="block",e.style.left=0,e.style.top=0;var i=s.data(e,"depth")||0;this.depthsX.push(s.data(e,"depth-x")||i),this.depthsY.push(s.data(e,"depth-y")||i)}}},{key:"updateDimensions",value:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.windowCenterX=this.windowWidth*this.originX,this.windowCenterY=this.windowHeight*this.originY,this.windowRadiusX=Math.max(this.windowCenterX,this.windowWidth-this.windowCenterX),this.windowRadiusY=Math.max(this.windowCenterY,this.windowHeight-this.windowCenterY)}},{key:"updateBounds",value:function(){this.bounds=this.inputElement.getBoundingClientRect(),this.elementPositionX=this.bounds.left,this.elementPositionY=this.bounds.top,this.elementWidth=this.bounds.width,this.elementHeight=this.bounds.height,this.elementCenterX=this.elementWidth*this.originX,this.elementCenterY=this.elementHeight*this.originY,this.elementRangeX=Math.max(this.elementCenterX,this.elementWidth-this.elementCenterX),this.elementRangeY=Math.max(this.elementCenterY,this.elementHeight-this.elementCenterY)}},{key:"queueCalibration",value:function(t){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,t)}},{key:"enable",value:function(){this.enabled||(this.enabled=!0,this.orientationSupport?(this.portrait=!1,window.addEventListener("deviceorientation",this.onDeviceOrientation),this.detectionTimer=setTimeout(this.onOrientationTimer,this.supportDelay)):this.motionSupport?(this.portrait=!1,window.addEventListener("devicemotion",this.onDeviceMotion),this.detectionTimer=setTimeout(this.onMotionTimer,this.supportDelay)):(this.calibrationX=0,this.calibrationY=0,this.portrait=!1,window.addEventListener("mousemove",this.onMouseMove),this.doReadyCallback()),window.addEventListener("resize",this.onWindowResize),this.raf=o(this.onAnimationFrame))}},{key:"disable",value:function(){this.enabled&&(this.enabled=!1,this.orientationSupport?window.removeEventListener("deviceorientation",this.onDeviceOrientation):this.motionSupport?window.removeEventListener("devicemotion",this.onDeviceMotion):window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("resize",this.onWindowResize),o.cancel(this.raf))}},{key:"calibrate",value:function(t,e){this.calibrateX=void 0===t?this.calibrateX:t,this.calibrateY=void 0===e?this.calibrateY:e}},{key:"invert",value:function(t,e){this.invertX=void 0===t?this.invertX:t,this.invertY=void 0===e?this.invertY:e}},{key:"friction",value:function(t,e){this.frictionX=void 0===t?this.frictionX:t,this.frictionY=void 0===e?this.frictionY:e}},{key:"scalar",value:function(t,e){this.scalarX=void 0===t?this.scalarX:t,this.scalarY=void 0===e?this.scalarY:e}},{key:"limit",value:function(t,e){this.limitX=void 0===t?this.limitX:t,this.limitY=void 0===e?this.limitY:e}},{key:"origin",value:function(t,e){this.originX=void 0===t?this.originX:t,this.originY=void 0===e?this.originY:e}},{key:"setInputElement",value:function(t){this.inputElement=t,this.updateDimensions()}},{key:"setPosition",value:function(t,e,i){e=e.toFixed(this.precision)+"px",i=i.toFixed(this.precision)+"px",this.transform3DSupport?s.css(t,"transform","translate3d("+e+","+i+",0)"):this.transform2DSupport?s.css(t,"transform","translate("+e+","+i+")"):(t.style.left=e,t.style.top=i)}},{key:"onOrientationTimer",value:function(){this.orientationSupport&&0===this.orientationStatus?(this.disable(),this.orientationSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onMotionTimer",value:function(){this.motionSupport&&0===this.motionStatus?(this.disable(),this.motionSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onCalibrationTimer",value:function(){this.calibrationFlag=!0}},{key:"onWindowResize",value:function(){this.updateDimensions()}},{key:"onAnimationFrame",value:function(){this.updateBounds();var t=this.inputX-this.calibrationX,e=this.inputY-this.calibrationY;(Math.abs(t)>this.calibrationThreshold||Math.abs(e)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.motionX=this.calibrateX?e:this.inputY,this.motionY=this.calibrateY?t:this.inputX):(this.motionX=this.calibrateX?t:this.inputX,this.motionY=this.calibrateY?e:this.inputY),this.motionX*=this.elementWidth*(this.scalarX/100),this.motionY*=this.elementHeight*(this.scalarY/100),isNaN(parseFloat(this.limitX))||(this.motionX=s.clamp(this.motionX,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.motionY=s.clamp(this.motionY,-this.limitY,this.limitY)),this.velocityX+=(this.motionX-this.velocityX)*this.frictionX,this.velocityY+=(this.motionY-this.velocityY)*this.frictionY;for(var i=0;i<this.layers.length;i++){var n=this.layers[i],r=this.depthsX[i],a=this.depthsY[i],l=this.velocityX*(r*(this.invertX?-1:1)),h=this.velocityY*(a*(this.invertY?-1:1));this.setPosition(n,l,h)}this.raf=o(this.onAnimationFrame)}},{key:"rotate",value:function(t,e){var i=(t||0)/30,n=(e||0)/30,o=this.windowHeight>this.windowWidth;this.portrait!==o&&(this.portrait=o,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.calibrationX=i,this.calibrationY=n),this.inputX=i,this.inputY=n}},{key:"onDeviceOrientation",value:function(t){var e=t.beta,i=t.gamma;null!==e&&null!==i&&(this.orientationStatus=1,this.rotate(e,i))}},{key:"onDeviceMotion",value:function(t){var e=t.rotationRate.beta,i=t.rotationRate.gamma;null!==e&&null!==i&&(this.motionStatus=1,this.rotate(e,i))}},{key:"onMouseMove",value:function(t){var e=t.clientX,i=t.clientY;if(this.hoverOnly&&(e<this.elementPositionX||e>this.elementPositionX+this.elementWidth||i<this.elementPositionY||i>this.elementPositionY+this.elementHeight))return this.inputX=0,void(this.inputY=0);this.relativeInput?(this.clipRelativeInput&&(e=Math.max(e,this.elementPositionX),e=Math.min(e,this.elementPositionX+this.elementWidth),i=Math.max(i,this.elementPositionY),i=Math.min(i,this.elementPositionY+this.elementHeight)),this.elementRangeX&&this.elementRangeY&&(this.inputX=(e-this.elementPositionX-this.elementCenterX)/this.elementRangeX,this.inputY=(i-this.elementPositionY-this.elementCenterY)/this.elementRangeY)):this.windowRadiusX&&this.windowRadiusY&&(this.inputX=(e-this.windowCenterX)/this.windowRadiusX,this.inputY=(i-this.windowCenterY)/this.windowRadiusY)}},{key:"destroy",value:function(){this.disable(),clearTimeout(this.calibrationTimer),clearTimeout(this.detectionTimer),this.element.removeAttribute("style");for(var t=0;t<this.layers.length;t++)this.layers[t].removeAttribute("style");delete this.element,delete this.layers}},{key:"version",value:function(){return"3.1.0"}}]),t}();e.exports=l},{"object-assign":1,raf:4}]},{},[5])(5)}).call(this,i(0))}});