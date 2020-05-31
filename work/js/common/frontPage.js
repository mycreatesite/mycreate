////////////imports////////////

import Rellax from '../module/rellax.min';

/////////////////////loading scripts/////////////////////
(function () {
	const accessFlag = sessionStorage.getItem('accessed');
	const loadingArea = $('#loadingArea');
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
})();
/////////////////////loading scripts/////////////////////

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
		show: { effect: 'fade', duration: 1500 },
		hide: { effect: 'fade', duration: 1500 },
	});
});
/////////////////////juicyslider.js

/////////////////////Rellax.js
$(function () {
	var rellax = new Rellax('.rellax');// eslint-disable-line
});
/////////////////////Rellax.js