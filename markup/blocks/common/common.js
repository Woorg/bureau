(function () {

	var metaproNormal,
		metaproMed,
		metaproBld,
		metaproBook,
		intro;

	if (!sessionStorage.fontsloaded) {

		metaproNormal = new FontFaceObserver('MetaPro-Normal' , {
			weight: 'normal'
		});

		metaproMed = new FontFaceObserver('MetaPro-Med' , {
			weight: '500'
		});

		metaproBld = new FontFaceObserver('MetaPro-bld' , {
			weight: 'bold'
		});


		metaproBook = new FontFaceObserver('MetaPro-Book' , {
			weight: 'normal'
		});

		intro = new FontFaceObserver('Intro' , {
			weight: 'normal'
		});


		Promise.all([

		]).then(function () {
			document.documentElement.className += ' font';
			sessionStorage.fontsLoaded = true;
		});

	} else {
		document.documentElement.className += ' font';
	}


	$(function () {

		var $sync1 = $(".slider"),
			$sync2 = $(".thumbs"),
			flag = false,
			duration = 300;

		$sync1
			.owlCarousel({
				items: 1,
				margin: 0,
				nav: true,
				dots: true
				// mouseDrag: false
			})
			.on('changed.owl.carousel', function (e) {
				if (!flag) {
					flag = true;
					$sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
					flag = false;
				}
			});

		$sync2
			.owlCarousel({
				margin: 26,
				items: 8,
				nav: false,
				center: false,
				dots: false
			})
			.on('click', '.owl-item', function () {
				$sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);

			})
			.on('changed.owl.carousel', function (e) {
				if (!flag) {
					flag = true;
					$sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
					flag = false;
				}
			});

		$('.video__object').ntzYoutubeEmbed();


		$('.video__trigger').on('click', function( e, player ){
			e.preventDefault();
			$('.video__in').hide();
			$(this).hide();
			$('.video__object').trigger('player-play');

		});

		// Smooth scroll

		var menuLinks = $('.menu__link, .nav__link');

		menuLinks.on('click', function (e) {
			e.preventDefault();

		});

		$('.menu, .nav').smoothScroll();

		$('.button').magnificPopup({
			type: 'inline',
			midClick: true,
			closeBtnInside: true
		});

		$('.popup__close').on( "click", function(e) {
			e.preventDefault();
			$.magnificPopup.close();
		});

		// Gallery

		$('.slider__link').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});



	});

}) ();




