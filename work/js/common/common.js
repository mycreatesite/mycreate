import '../module/common.plugin';
import throttle from 'lodash/throttle';

////////////scrollEvents_start////////////
$(function () {

	//navHeaderShow_variables
	var cloneNav = $('#navHeader').clone().attr('id', 'cloneNav').addClass('cloneNav').insertAfter('#navHeader');
	var logoMove = $('.logoFollow:last');
	var showClass = 'isShow';
	//showUp_variables
	var forShow1 = $('.forShow1');
	var forShow2 = $('.forShow2');
	var forShow3 = $('.forShow3');
	var forShow4 = $('.forShow4');
	var forShows = [forShow1, forShow2, forShow3, forShow4];
	//textillate_variables
	var heading = $('.heading');
	//commentAnim_variables
	var commentAnim = $('#commentAnim');
	//rollBack_variables
	var rollBack = $('#rollBack');
	//helloMogi_variables
	var mogiFooter = $('#mogiFooter');
	var contentsHeight = $(document).height();

	////scrollEvents////
	$(window).on('scroll', throttle(function () {

		//common_variables
		var windowHeight = $(this).height();
		var scroll = $(this).scrollTop();

		//navHeaderShow_func
		if (scroll > 700) {
			logoMove.css('display', 'inline-block');
			cloneNav.addClass(showClass);
		} else {
			cloneNav.removeClass(showClass);
		}
		//showUp_func
		var len = forShows.length;
		for (var j = 0; j < len; j++) {
			forShows[j].each(function (i) {
				var forShowPoint = $(this).offset().top - 30;
				var delayTime = 90;
				if (scroll > forShowPoint - windowHeight) {
					$(this).delay(i * delayTime).queue(function () {
						$(this).addClass('showUp');
					});
				}
			});
		}
		//textillate_func
		heading.each(function () {
			var headingPoint = $(this).offset().top;
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
			var myCommentPoint = commentAnim.offset().top;
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
	rollBack.click(function () {
		$('body,html').animate({ scrollTop: 0 }, 700, 'easeInOutQuart');
	});
	////optional_func////

});
////////////scrollEvents_end////////////

////////////spNavHeader////////////
$(function () {
	var hambBtns = $('#hambBtn');
	var hambBtn1 = $('.hambBtn1');
	var hambBtn2 = $('.hambBtn2');
	var hambBtn3 = $('.hambBtn3');
	var spNav = $('#spNavHeader');
	var spNavLists = $('.spNavHeader ul li');
	var spNavLink = $('#spNavHeader li a');
	var delayTime = 80;
	var fadeTime = 200;
	hambBtns.click(function () {
		toggleNav();
		if (spNavLists.css('display') == 'list-item') {
			spNavLists.fadeOut(fadeTime);
		} else {
			spNavLists.each(function (i) {
				$(this).delay(i * delayTime).fadeIn(fadeTime);
			});
		}
	});
	spNavLink.click(function () {
		toggleNav();
		spNavLists.hide();
	});
	function toggleNav() {
		if (!spNav.hasClass('is-show')) {
			spNav.fadeToggle(fadeTime).toggleClass('is-show');
		} else {
			spNav.fadeToggle(fadeTime, function () {
				$(this).toggleClass('is-show');
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
$(function () {
	$('.navHeader a[href^="#"]').click(function () {
		var href = $(this).attr('href');
		var target = $(href == '#' || href === '' ? 'html' : href);
		var position = target.offset().top;
		if (href === '#contact') {
			$('html,body').animate({ scrollTop: position }, 700, 'easeInOutQuart');
		} else {
			$('html,body').animate({ scrollTop: position - 50 }, 700, 'easeInOutQuart');
		}
		return false;
	});
	$('#spNavHeader a[href^="#"]').click(function () {
		var href = $(this).attr('href');
		var target = $(href == '#' || href === '' ? 'html' : href);
		var position = target.offset().top;
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
$(window).on('load', function () {
	var fixPx = -50;
	var url = $(location).attr('href');
	if (url.indexOf("?id=") != -1) {
		var idName = url.split("?id=");
		var target = $('#' + idName[idName.length - 1]);
		if (target.length) {
			var pos = target.offset().top + fixPx;
			if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
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
$(function () {
	$('.modalOpen').click(function () {
		if ($(this).parents('#spNavHeader')[0]) {
			$('#modalArea').show();
		} else {
			$('#modalArea').fadeIn();
		}
	});
	$('#modalClose,#modalOuter').click(function () {
		$('#modalArea').fadeOut();
	});
});
////////////modal////////////

////////////scroll control for fuckin'IE11////////////
if (navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge\/12\./)) {
	$('body').on("mousewheel", function () {
		event.preventDefault();
		var wd = event.wheelDelta;
		var csp = window.pageYOffset;
		window.scrollTo(0, csp - wd);
	});
}
////////////scroll control for fuckin'IE11////////////

////////////scrollTriggerAll-bottomFixAbsolutely!!!////////////
$(function () {
	$(window).trigger('scroll');
});
////////////scrollTriggerAll-bottomFixAbsolutely!!!////////////
