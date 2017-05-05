$(document).ready(function () {
	$(window).resize(function () {
		$('.page-1 .tiles-group').css('transform', 'scale('+$('body').height()/780+')');
	}).resize();

	$('.nav-right').hover(function () {
		$('#tiles-container').css('transform', 'translate(-5px, -8px)');
	}, function () {
		$('#tiles-container').css('transform', 'translate(0, 0)');
	});
});