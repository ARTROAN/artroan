$(document).ready(function() {
	var heightBreakpoint;
	var prevScrollPosition = 0;

	function setMainWidth() {
		$('.header, .container, .page').css('max-width', (($(window).height() - 250) * (8 / 7)) +'px');
	}

	setMainWidth();

	function setHeightBreakpoint() {
		heightBreakpoint = $('.break').offset().top - 65;
	}

	setHeightBreakpoint();

	function setLineColor() {
		if($(document).scrollTop() > heightBreakpoint) {
			$('.header').addClass('breakpoint');
		}
		else {
			$('.header').removeClass('breakpoint');
		}
	}

	setLineColor();

	$(window).scroll(function() {
		setLineColor();
	});

	function setRect2x1() {
		$('.rect-2x1').each(function () {
			$(this).height($(this).width() / 2);
		});
	}

	setRect2x1();

	$(window).resize(function () {
		setMainWidth();
		setHeightBreakpoint();
		setRect2x1();
	});

	function openPage(page) {
		prevScrollPosition = $(document).scrollTop();
		$('.header, .container').hide();
		$('.page.'+page).show();
		$(document).scrollTop(0);
	}

	$('.close-x').click(function() {
		setMainWidth();
		setHeightBreakpoint();
		$('.page').hide();
		$('.header, .container').show();
		$(document).scrollTop(prevScrollPosition);
		setRect2x1();
	});

	$('.tile-lander').click(function() {
		openPage('lander');
	});

	$('.tile-portfolio').click(function() {
		openPage('portfolio');
	});

	$('.tile-harddrive').click(function() {
		openPage('harddrive');
	});

	$('.tile-comics').click(function() {
		openPage('comics');
	});

	function openInfo(project) {
		$('.comics-info').slideUp(200);
		$('.comics-info').css('opacity', 0);
		if ($('.comics-info-'+project).css('display') === 'none') {
			$('.comics-info-'+project).slideDown(200);
			$('.comics-info-'+project).css('opacity', 1);
		}
	};

	$('.comics-aria').click(function() {
		openInfo('aria');
	});

	$('.comics-untitled').click(function() {
		openInfo('untitled');
	});

	$('.comics-hd').click(function() {
		openInfo('hd');
	});

	$('.comics-abc').click(function() {
		openInfo('abc');
	});

	$('.comics-hd2').click(function() {
		openInfo('hd2');
	});

	$('.comics-sunburn').click(function() {
		openInfo('sunburn');
	});

	$('.comics-friction').click(function() {
		openInfo('friction');
	})

	$('.comics-dd').click(function() {
		openInfo('dd');
	})

	$('.comics-asaan').click(function() {
		openInfo('asaan');
	})

	$('.portfolio-grid-item').each(function(i) {
		$(this).click(function() {
			openLightbox(i + 1);
		});
	})

	$('.lightbox').click(function() {
		$('.lightbox').hide();
	})

	function openLightbox(i) {
		$('.lightbox img').attr('src', 'images/portfolio/'+i+'-full.jpg');
		$('.lightbox').css('background-image', 'url(images/portfolio/'+i+'-full.jpg)');
		$('.lightbox').show();
	}

	//hide loader

	setTimeout(function() {
		$('.loader').remove();
		$('body').removeClass('loading');
	}, 500);
});
