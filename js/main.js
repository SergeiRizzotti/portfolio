// 'use strict';

var args = {
	frequency: 50, // ( How often the object sends the values - milliseconds )
	gravityNormalized: true, // ( If the gravity related values to be normalized )
	orientationBase: GyroNorm.GAME, // Can be GyroNorm.GAME or GyroNorm.WORLD. gn.GAME returns orientation values with respect to the head direction of the device. gn.WORLD returns the orientation values with respect to the actual north direction of the world.
	decimalCount: 2, // ( How many digits after the decimal point will there be in the return values )
	logger: null, // ( Function to be called to log messages from gyronorm.js )
	screenAdjusted: false, // ( If set to true it will return screen adjusted values. )
};

var gn = new GyroNorm();

gn.init()
	.then(function () {
		gn.start(function (data) {
			// Process:
			// data.do.alpha	( deviceorientation event alpha value )
			// data.do.beta		( deviceorientation event beta value )
			// data.do.gamma	( deviceorientation event gamma value )
			// data.do.absolute	( deviceorientation event absolute value )
			// data.dm.x		( devicemotion event acceleration x value )
			// data.dm.y		( devicemotion event acceleration y value )
			// data.dm.z		( devicemotion event acceleration z value )
			// data.dm.gx		( devicemotion event accelerationIncludingGravity x value )
			// data.dm.gy		( devicemotion event accelerationIncludingGravity y value )
			// data.dm.gz		( devicemotion event accelerationIncludingGravity z value )
			// data.dm.alpha	( devicemotion event rotationRate alpha value )
			// data.dm.beta		( devicemotion event rotationRate beta value )
			// data.dm.gamma	( devicemotion event rotationRate gamma value )
		});
	})
	.catch(function (e) {
		// Catch if the DeviceOrientation or DeviceMotion is not supported by the browser or device
	});

var vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
	var vh = window.innerHeight * 0.01;

	document.documentElement.style.setProperty("--vh", `${vh}px`);
});

$(function () {
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

	$(".home__img-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1,
		cssEase: "linear",
		//speed: 100,
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

	$(".menu-btn").on("click", function () {
		$(".menu, .menu-btn").toggleClass("active");
	});
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


$(".gallery-list__item-1").mouseenter(function () {
	$(".gallery-list__item-1 .item__box")
		.addClass("active")
		.removeClass("disable");
});
$(".gallery-list__item-1").mouseleave(function () {
	$(".gallery-list__item-1 .item__box")
		.addClass("disable")
		.removeClass("active");
});


$(".gallery-list__item-2").mouseenter(function () {
	$(".gallery-list__item-2 .item__box")
		.addClass("active")
		.removeClass("disable");
});
$(".gallery-list__item-2").mouseleave(function () {
	$(".gallery-list__item-2 .item__box")
		.addClass("disable")
		.removeClass("active");
});


$(".gallery-list__item-3").mouseenter(function () {
	$(".gallery-list__item-3 .item__box")
		.addClass("active")
		.removeClass("disable");
});
$(".gallery-list__item-3").mouseleave(function () {
	$(".gallery-list__item-3 .item__box")
		.addClass("disable")
		.removeClass("active");
});


$(".gallery-list__item-4").mouseenter(function () {
	$(".gallery-list__item-4 .item__box")
		.addClass("active")
		.removeClass("disable");
});
$(".gallery-list__item-4").mouseleave(function () {
	$(".gallery-list__item-4 .item__box")
		.addClass("disable")
		.removeClass("active");
});


$(".gallery-list__item-5").mouseenter(function () {
	$(".gallery-list__item-5 .item__box")
		.addClass("active")
		.removeClass("disable");
});
$(".gallery-list__item-5").mouseleave(function () {
	$(".gallery-list__item-5 .item__box")
		.addClass("disable")
		.removeClass("active");
});


$(".gallery-list__item-6").mouseenter(function () {
	$(".gallery-list__item-6 .item__box")
		.addClass("active")
		.removeClass("disable");
});
$(".gallery-list__item-6").mouseleave(function () {
	$(".gallery-list__item-6 .item__box")
		.addClass("disable")
		.removeClass("active");
});


$(".gallery-list__item-7").mouseenter(function () {
	$(".gallery-list__item-7 .item__box")
		.addClass("active")
		.removeClass("disable");
});
$(".gallery-list__item-7").mouseleave(function () {
	$(".gallery-list__item-7 .item__box")
		.removeClass("active")
		.addClass("disable");
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