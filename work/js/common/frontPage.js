////////////imports////////////

import Rellax from '../module/rellax.min';

////////////global variable////////////

const accessFlag = sessionStorage.getItem('accessed');

/////////////////////loading scripts/////////////////////
$(() => {
	const loadingArea = $('#loadingArea');
	if (accessFlag) {
		loadingPageRemove();
	} else {
		$(window).on('load', () => {
			loadingPageShow();
		});
	}
	function loadingPageShow() {
		setTimeout(() => {
			loadingArea.addClass('loadingFade').fadeOut(600);
		}, 1500);
		sessionStorage.setItem('accessed', true);
	}
	function loadingPageRemove() {
		loadingArea.remove();
	}
});
/////////////////////loading scripts/////////////////////

/////////////////////juicyslider.js
$(() => {
	const myslider = $('#myslider');
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
$(() => {
	const rellax = new Rellax('.rellax');// eslint-disable-line
});
/////////////////////Rellax.js