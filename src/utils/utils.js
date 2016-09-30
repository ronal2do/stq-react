function initializeMaven() {

	//STICKY NAV
	(function() {
		function navigationSticky(){
			var st = $(window).scrollTop(),
				logoHeight = $('.header-inner').outerHeight(),
				navButton = $('.menu-button, .menu-button-grid'),
				wh = $('.nav-trigger').outerHeight() - logoHeight,
				navButtonMargin = (logoHeight - 12) / 2;

			if (st > wh) {
				$('.header-inner').addClass('scrolled');
				$('.Logo').addClass('scrolled');
			} else {
				$('.header-inner').removeClass('scrolled');
				$('.Logo').removeClass('scrolled');
			};

			navButton.css({
				"top": navButtonMargin + "px"
			});
		}

		$(document).on("ready", navigationSticky);
		$(window).on("scroll", navigationSticky);
		$(window).on("resize", navigationSticky);
	})();

	//CENTER CONTENT
	(function() {
		function contentCenter(){
			var hero = $('.hero'),
				windowHeight = $(window).height(),
				heroHeight = windowHeight,
				navigation = $('.navigation'),
				navigationHeight = navigation.height(),
				parentHeight = $('.push-nav').height(),
				topMargin = (parentHeight - navigationHeight) / 2,
				heroContent = $('.hero-content'),
				contentHeight = heroContent.height(),
				topContentMargin = (heroHeight - contentHeight) / 2,
				fullScreenHeight = $('.full-screen').height(),
				fullScreenContent = $('.full-screen-content'),
				fullScreenContentHeight = fullScreenContent.height(),
				fullScreenContentMargin = ( fullScreenHeight - fullScreenContentHeight ) / 2;



			hero.css({
				height: heroHeight+"px"
			});

			heroContent.css({
				"margin-top" : topContentMargin+"px"
			});

			fullScreenContent.css({
				"margin-top" : fullScreenContentMargin+"px"
			});
		}

		$(window).on("resize", contentCenter);
	    $(document).on("ready", contentCenter);
	})();

	//VIDEO
	// Exclude the iPad
	Modernizr.addTest('ipad', function () {
	return !!navigator.userAgent.match(/iPad/i);
	});
	// Exclude the iPhone
	Modernizr.addTest('iphone', function () {
	return !!navigator.userAgent.match(/iPhone/i);
	});
	// Exclude the iPod touch
	Modernizr.addTest('ipod', function () {
	return !!navigator.userAgent.match(/iPod/i);
	});
	// Exclude android phones and tablets
	Modernizr.addTest('android', function () {
	return !!navigator.userAgent.match(/android/i);
	});
	// Add a  test to Modernizr combining all platforms
	Modernizr.addTest('excludedplatforms', function () {
	return (Modernizr.ipad || Modernizr.ipod || Modernizr.iphone || Modernizr.android);
	});

	if (!Modernizr.excludedplatforms) {

	 $(function() {
	    var videobackground = new $.backgroundVideo($('#bgVideo'), {
	        "align" : "centerXY",
	        "path" : "video/",
	        "width": 854,
	        "height": 480,
	        "filename" : "video",
	        "types" : ["mp4", "ogg"]
	    });
	});
	} else {
		$('.video-background').addClass('no-video');
	}

    //LOCAL SCROLL
    $('.hero, .navigation, .call-to-action').localScroll({
		offset: - $().height(),
		duration:1000
	});

    //TRIGGER ANIMATIONS
	var wow = new WOW(
	  {
	    mobile: false
	  }
	);
	wow.init();

	//CONTACT-FORM

	//MAP
	$('.radio').click(function (){
		$(this).toggleClass('active');

		if ($('.radio').hasClass('active')) {
			$('.map-overlay').animate({
				opacity: 0
			}, 200);
			$('#map').css({
				"z-index" : 1
			});
		} else {
			$('.map-overlay').animate({
				opacity: 1
			}, 200);
			$('#map').css({
				"z-index" : - 100
			});
		}
	});

	//SWITCHER
	$('.trigger').click(function(){
		if ($('#customizer').hasClass('opened')){
			$('#customizer').animate({left:'-158px'}, 300, function(){
				$('#customizer').removeClass('opened');
			});
		} else {
			$('#customizer').animate({left:0}, 300, function(){
				$('#customizer').addClass('opened');
			});
		}
		return false;
	});

};
