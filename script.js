$(document).ready(function() {
	var heightBreakpoint;

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
		setHeightBreakpoint();
		setRect2x1();
	});

	//hide loader

	setTimeout(function() {
		$('.loader').remove();
		$('.section').each(function() {
			$(this).css('opacity', '1');
		})
	}, 500);
});