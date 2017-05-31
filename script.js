$(document).ready(function() {
	var heightBreakpoint;

	function setMainWidth() {
		$('.header, .container').css('max-width', $('.container').height() * 8 / 7 +'px');
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
			$(this).height($(this).width() / 2)
		});
	}

	setRect2x1();

	$(window).resize(function () {
		setMainWidth();
		setHeightBreakpoint();
		setRect2x1();
	});

	//hide loader

	setTimeout(function() {
		$('.loader').remove();
		$('body').removeClass('loading');
	}, 500);
});