$(document).ready(function() {
	var heightBreakpoint;

	function setMainWidth() {
		$('.header, .container, .page').css('max-width', $('.container').height() * 8 / 7 +'px');
	}

	setMainWidth();

	function setHeightBreakpoint() {
		heightBreakpoint = $('.break').offset().top - 65;
	}

	setHeightBreakpoint();

	function setLineColor() {
		if($(window).scrollTop() > heightBreakpoint) {
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
		$('.header, .container').hide();
		$('.page.'+page).show();
		$(window).scrollTop(0);
	}

	$('.close-x').click(function() {
		$('.page').hide();
		$('.header, .container').show();
	});

	$('.tile-lander').click(function() {
		openPage('lander');
	});

	$('.tile-portfolio').click(function() {
		openPage('portfolio');
	});

	$('.tile-friction').click(function() {
		openPage('friction');
	});

	$('.tile-upcoming').click(function() {
		openPage('upcoming');
	});

	function openInfo(project) {
		$('.upcoming-info').slideUp(200);
		$('.upcoming-info').css('opacity', 0);
		if ($('.upcoming-info-'+project).css('display') === 'none') {
			$('.upcoming-info-'+project).slideDown(200);
			$('.upcoming-info-'+project).css('opacity', 1);
		}
	};

	$('.upcoming-aria').click(function() {
		openInfo('aria');
	});

	$('.upcoming-untitled').click(function() {
		openInfo('untitled');
	});

	$('.upcoming-hd').click(function() {
		openInfo('hd');
	});

	$('.upcoming-abc').click(function() {
		openInfo('abc');
	});

	$('.upcoming-hd2').click(function() {
		openInfo('hd2');
	});

	$('.upcoming-sunburn').click(function() {
		openInfo('sunburn');
	});

	//hide loader

	setTimeout(function() {
		$('.loader').remove();
		$('body').removeClass('loading');
	}, 500);
});