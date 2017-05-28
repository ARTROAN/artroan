$(document).ready(function() {
	var heightBreakpoint;

	function setHeightBreakpoint() {
		heightBreakpoint = $('.break').offset().top - 65;
	}

	setHeightBreakpoint();

	$(window).resize(function () {
		setHeightBreakpoint();
	});

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
});