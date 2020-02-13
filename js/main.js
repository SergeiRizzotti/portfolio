$(function () {
	$(".menu-btn").on("click", function () {
		$(".menu, .menu-btn").toggleClass("active");
	});
});

$(function () {

	$(".home__img-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		cssEase: "linear",
		speed: 100,
		fade: true,
		arrows: false,
	});

	$("#item1").on("mouseover", function () {
		$(".home__img-slider").slick("slickGoTo", 0);
	});

	$("#item2").on("mouseover", function () {
		$(".home__img-slider").slick("slickGoTo", 1);
	});

	$("#item3").on("mouseover", function () {
		$(".home__img-slider").slick("slickGoTo", 2);
	});

	$("#item4").on("mouseover", function () {
		$(".home__img-slider").slick("slickGoTo", 3);
	});

	$("#item5").on("mouseover", function () {
		$(".home__img-slider").slick("slickGoTo", 4);
	});
});

$(".gallery__title-slider").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	asNavFor: ".gallery__nav-slider, .gallery__img-slider, .gallery__descriptor-slider",
});

$(".gallery__img-slider").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	asNavFor: ".gallery__nav-slider, .gallery__title-slider, .gallery__descriptor-slider",
});

$(".gallery__descriptor-slider").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 1,
	cssEase: "linear",
	arrows: false,
	asNavFor: ".gallery__nav-slider, .gallery__title-slider, .gallery__img-slider",
	fade: true,
});

$(".gallery__nav-slider").slick({
	slidesToShow: 1,
	dots: true,
	slidesToScroll: 1,
	// autoplay: true,
	// autoplaySpeed: 5000,
	// pauseOnDotsHover: true,
	asNavFor: ".gallery__title-slider, .gallery__img-slider, .gallery__descriptor-slider",
	prevArrow: '<button class="slider-arrows slider-arrows__left animated fadeInLeft delay-2s" type="button"><img src="images/prevArrow.svg" alt=""></img></button>',
	nextArrow: '<button class="slider-arrows slider-arrows__right animated fadeInRight delay-2s" type="button"><img src="images/nextArrow.svg" alt=""></img></button>',
	customPaging: (slider, i) => `<a>${"0" + (i + 1)}</a>`,
});



$(document).ready(function () {
	$(".images-portfolio").magnificPopup({
		gallery: {
			enabled: true
		},
		delegate: "a",
		type: "image",
		closeOnContentClick: true,
		fixedContentPos: false,
		mainClass: "mfp-with-zoom",
		zoom: {
			enabled: true,
			duration: 300,
			easing: "ease-in-out",
			opener: function (openerElement) {
				return openerElement.is("a") ? openerElement : openerElement.find("a");
			},
		},
	});
});

var event = ('ontouchstart' in window) ? 'click' : 'mouseenter mouseleave';

$(".gallery-list__item-1").on(event, function () {
	$(".gallery-list__item-1 .item__box").toggleClass("active");
});

$(".gallery-list__item-2").on(event, function () {
	$(".gallery-list__item-2 .item__box").toggleClass("active");
});

$(".gallery-list__item-3").on(event, function () {
	$(".gallery-list__item-3 .item__box").toggleClass("active");
});

$(".gallery-list__item-4").on(event, function () {
	$(".gallery-list__item-4 .item__box").toggleClass("active");
});

$(".gallery-list__item-5").on(event, function () {
	$(".gallery-list__item-5 .item__box").toggleClass("active");
});

$(".gallery-list__item-6").on(event, function () {
	$(".gallery-list__item-6 .item__box").toggleClass("active");
});

$(".gallery-list__item-7").on(event, function () {
	$(".gallery-list__item-7 .item__box").toggleClass("active");
});


// document.getElementsByTagName('body')[0].addEventListener('mousemove', function (n) {
// 		t.style.left = n.clientX + 'px',
// 		t.style.top = n.clientY + 'px',
// 		e.style.left = n.clientX + 'px',
// 		e.style.top = n.clientY + 'px',
// 		i.style.left = n.clientX + 'px',
// 		i.style.top = n.clientY + 'px'
// });

// let t = document.getElementById('cursor'),
// 		e = document.getElementById('cursor2'),
// 		i = document.getElementById('cursor3');

// function n(t) {
// 	e.classList.add('hover'), i.classList.add('hover')
// }

// function s(t) {
// 	e.classList.remove('hover'), i.classList.remove('hover')
// }

// s();

// for (let r = document.querySelectorAll('.hover-target'),
// 	a = r.length -1; a >=0; a--) {
// 	o(r[a])
// }

// function o(t) {
// 	t.addEventListener('mouseover', n), t.addEventListener('mouseout', s)
// }