//!use minified at footer.php!
/////////////////////loading scripts/////////////////////
jQuery(window).on('load',function(){
  var loadingArea = jQuery('#loadingArea');
  setTimeout(function(){
    loadingArea.addClass('loadingFade').fadeOut(600);
  },1500);
});
/////////////////////loading scripts/////////////////////

/////////////////////juicyslider.js
jQuery(function () {
  var myslider = jQuery('#myslider');
  myslider.juicyslider({
    mode: "cover",
  	width: '100%',
  	height: '100%',
  	mask: "none",
  	bgcolor: "#000",
  	autoplay: 8000,
    shuffle: false,
    show: {effect: 'fade', duration: 1500},
    hide: {effect: 'fade', duration: 1500},
  });
});
/////////////////////juicyslider.js

/////////////////////Rellax.js
jQuery(function () {
  var rellax = new Rellax('.rellax');
});
/////////////////////Rellax.js