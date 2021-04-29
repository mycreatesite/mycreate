////////////imports////////////

import Rellax from '../module/rellax.min';
import Parallax from 'parallax-js/dist/parallax.min.js';

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
		loadingArea.addClass('loadingStart');
		setTimeout(() => {
			loadingArea.addClass('loadingFadeTo').fadeOut(600);
		}, 1500);
		sessionStorage.setItem('accessed', true);
	}
	function loadingPageRemove() {
		loadingArea.remove();
	}
});
/////////////////////loading scripts/////////////////////

/////////////////////Parallax.js, juicyslider.js

$(() => {
	const scenes = document.querySelectorAll('.scene');
	const myslider = $('#myslider');
	//Parallax.js
	scenes.forEach((scene)=>{
		new Parallax(scene, {
			scalarX: 0.5,
			scalarY: 0.5
		});
	});
	//juicyslider.js
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

/////////////////////Parallax.js, juicyslider.js

/////////////////////Rellax.js
$(() => {
	const rellax = new Rellax('.rellax');// eslint-disable-line
});
/////////////////////Rellax.js