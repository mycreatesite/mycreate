import '../module/common.plugin';
import throttle from 'lodash/throttle';
import bodyScrollPrevent from '../module/bodyScrollPrevent';

////////////global variable////////////

const body = $('body');
const accessFlag = sessionStorage.getItem('accessed');

////////////Draw SVG////////////
(() => {
	const mycLogo = $("#mycLogo").drawsvg({
		duration: 1000,
		stagger: 80,
		easing: "swing",
		callback() {
			$("#mycLogo g").addClass("fillAnim");
		}
	});
	if (!accessFlag && body.hasClass('home')) {
		setTimeout(() => {
			mycLogo.css("opacity", 1).drawsvg("animate");
		}, 1800);
	} else {
		mycLogo.css("opacity", 1).drawsvg("animate");
	}
})();

////////////scrollEvents_start////////////
$(() => {

	//navHeaderShow_variables
	const cloneNav = $('#navHeader').clone().attr('id', 'cloneNav').addClass('cloneNav').insertAfter('#navHeader');
	const logoMove = $('.logoFollow:last');
	const showClass = 'isShow';
	//showUp_variables
	const forShow1 = $('.forShow1');
	const forShow2 = $('.forShow2');
	const forShow3 = $('.forShow3');
	const forShow4 = $('.forShow4');
	const forShows = [forShow1, forShow2, forShow3, forShow4];
	//textillate_variables
	const heading = $('.heading');
	//commentAnim_variables
	const commentAnim = $('#commentAnim');
	//rollBack_variables
	const rollBack = $('#rollBack');
	//helloMogi_variables
	const mogiFooter = $('#mogiFooter');
	const contentsHeight = $(document).height();

	////scrollEvents////
	$(window).on('scroll', throttle(function () {

		//common_variables
		const windowHeight = $(this).height();
		const scroll = $(this).scrollTop();

		//navHeaderShow_func
		if (scroll > 700) {
			logoMove.css('display', 'inline-block');
			cloneNav.addClass(showClass);
		} else {
			cloneNav.removeClass(showClass);
		}
		//showUp_func
		const len = forShows.length;
		for (let j = 0; j < len; j++) {
			forShows[j].each(function (i) {
				const forShowPoint = $(this).offset().top - 30;
				const delayTime = 90;
				if (scroll > forShowPoint - windowHeight) {
					$(this).delay(i * delayTime).queue(function () {
						$(this).addClass('showUp');
					});
				}
			});
		}
		//textillate_func
		heading.each(function () {
			const headingPoint = $(this).offset().top;
			if (scroll > headingPoint - windowHeight) {
				$(this).css('opacity', 1).textillate({
					in: {
						effect: 'fadeInUp',
						shuffle: true,
						delay: 20,
						delayScale: 3,
					}
				});
			}
		});
		//commentAnim_func
		if (commentAnim.length) {
			const myCommentPoint = commentAnim.offset().top;
			if (scroll > myCommentPoint - windowHeight) {
				commentAnim.css('opacity', 1).addClass('animated zoomInDown');
			}
		}
		//rollBack_func
		if (scroll > 700) {
			rollBack.fadeIn(500);
		} else {
			rollBack.fadeOut(500);
		}
		//helloMogi_func
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

	}, 150));
	////scrollEvents////

	////optional_func////
	//rollBackClicked
	rollBack.on('click',() => {
		$('body,html').animate({ scrollTop: 0 }, 700, 'easeInOutQuart');
	});
	////optional_func////

});
////////////scrollEvents_end////////////

////////////spNavHeader////////////
$(() => {
	const hambBtns = $('#hambBtn');
	const hambBtn1 = $('.hambBtn1');
	const hambBtn2 = $('.hambBtn2');
	const hambBtn3 = $('.hambBtn3');
	const spNav = $('#spNavHeader');
	const spNavLists = $('.spNavHeader ul li');
	const spNavLink = $('#spNavHeader li a');
	const delayTime = 80;
	const fadeTime = 200;
	hambBtns.on('click', () => {
		toggleNav();
		if (spNavLists.css('display') == 'list-item') {
			spNavLists.fadeOut(fadeTime);
			bodyScrollPrevent(false);
		} else {
			bodyScrollPrevent(true);
			spNavLists.each(function (i) {
				$(this).delay(i * delayTime).fadeIn(fadeTime);
			});
		}
	});
	spNavLink.on('click', () => {
		bodyScrollPrevent(false);
		toggleNav();
		spNavLists.hide();
	});
	function toggleNav() {
		if (!spNav.hasClass('is-show')) {
			spNav.fadeIn(fadeTime).addClass('is-show');
		} else {
			spNav.fadeOut(fadeTime, function () {
				$(this).removeClass('is-show');
			});
		}

		hambBtn1.toggleClass('hambMove1');
		hambBtn2.toggleClass('hambMove2');
		hambBtn3.toggleClass('hambMove3');
	}
});
////////////spNavHeader////////////
//↑can not replace↓//
////////////smoothScroll////////////
$(() => {
	$('.navHeader a[href^="#"]').on('click',function () {
		const href = $(this).attr('href');
		const target = $(href == '#' || href === '' ? 'html' : href);
		const position = target.offset().top;
		if (href === '#contact') {
			$('html,body').animate({ scrollTop: position }, 700, 'easeInOutQuart');
		} else {
			$('html,body').animate({ scrollTop: position - 50 }, 700, 'easeInOutQuart');
		}
		return false;
	});
	$('#spNavHeader a[href^="#"]').on('click',function () {
		const href = $(this).attr('href');
		const target = $(href == '#' || href === '' ? 'html' : href);
		const position = target.offset().top;
		if (href === '#contact') {
			$('html,body').animate({ scrollTop: position + 100 }, 700, 'easeInOutQuart');
		} else {
			$('html,body').animate({ scrollTop: position + 50 }, 700, 'easeInOutQuart');
		}
		return false;
	});
});
////////////smoothScroll////////////

////////////otherpage to frontpage////////////
$(window).on('load', () => {
	const fixPx = -50;
	const url = $(location).attr('href');
	if (url.includes("?id=")) {
		const idName = url.split("?id=");
		const target = $(`#${idName[idName.length - 1]}`);
		if (target.length) {
			const pos = target.offset().top + fixPx;
			if ((navigator.userAgent.indexOf('iPhone') > 0 && !navigator.userAgent.includes('iPad')) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
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
});
////////////otherpage to frontpage////////////

////////////modal////////////
$(() => {
	$('.modalOpen').on('click', function () {
		bodyScrollPrevent(true);
		if ($(this).parents('#spNavHeader')[0]) {
			$('#modalArea').show();
		} else {
			$('#modalArea').fadeIn();
		}
		if ($('#contact')) {
			$('#contact').toggleClass('is-passive');
		}
	});
	$('#modalClose,#modalOuter').on('click', () => {
		$('#modalArea').fadeOut(() => {
			bodyScrollPrevent(false);
			if ($('#contact')) {
				$('#contact').toggleClass('is-passive');
			}
		});
	});
});
////////////modal////////////

////////////scroll control for fuckin'IE11////////////
if (navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge\/12\./)) {
	$('body').on("mousewheel", () => {
		event.preventDefault();
		const wd = event.wheelDelta;
		const csp = window.pageYOffset;
		window.scrollTo(0, csp - wd);
	});
}
////////////scroll control for fuckin'IE11////////////

////////////scrollTriggerAll-bottomFixAbsolutely!!!////////////
$(() => {
	$(window).trigger('scroll');
});
////////////scrollTriggerAll-bottomFixAbsolutely!!!////////////
