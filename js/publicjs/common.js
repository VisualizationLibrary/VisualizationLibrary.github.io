$(document).ready(function() {
	$("li").click(function() {
		$(this).siblings().removeClass("test");
		$(this).addClass("test");
	});
	
	
});