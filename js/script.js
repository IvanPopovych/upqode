$(document).ready(function(){

	// add class active  
	$('.navbar-nav li').on('click', 'a', function(){
		$('.navbar-nav li a').removeClass('active');
		$(this).addClass('active');

		$('.navbar-collapse').removeClass('in');


		var id  = $(this).attr('href'),

			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top}, 1000);
	});

	// main slider settings
	$('.main-slider').owlCarousel({
		loop:true,
		autoplay:true,
	    autoplayTimeout:5000,
	    autoplayHoverPause:true,
		items: 1,
		dots: true,
		nav: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
	});

	// products slider settings
	$('.product-slider').owlCarousel({
		loop:true,
		autoplay:true,
	    autoplayTimeout:2000,
	    autoplayHoverPause:true,
		items: 1,
		dots: true,
		nav: false
	});

});

// start animation when scroll to element
$(window).scroll(function(){
	var scroll_picca = $('.about-us_left h5').offset().top; 
		if ($(this).scrollTop() > scroll_picca) {
			$('.graph-bar').each(function() {
		     var dataWidth = $(this).data('value');
		     $(this).css("width", dataWidth + "%");
		  	});
		}	
}); 


$("body").niceScroll();





