var slideShowTimeout;

$(document).ready(function(){
	if(screen.width >= 699){
		$('.rollover').css('display', 'none');
	    $('#work-slider ul li').hover(function() {
	        $(this).children('.rollover').slideDown(300);
	        window.clearTimeout(slideShowTimeout);
	    }, function() {
	        $(this).children('.rollover').slideUp(300);
	        slideShowTimeout = window.setTimeout(slideShow, 5000);
	    });
		slideShowTimeout = window.setTimeout(slideShow, 5000);
	}
});

function slideShow(){
	nextSlide();
	slideShowTimeout = window.setTimeout(slideShow, 5000);
}

function nextSlide(){
	var currentSlide = $('#work-slider').find('ul li.active');
	var nextSlide = ($(currentSlide).next().length != 0) ? $(currentSlide).next() : $('#work-slider').children('ul').children('li').first();
	
	currentSlide.removeClass('active').fadeOut(500);
	nextSlide.addClass('active').fadeIn(500);
}

function prevSlide(){
	var currentSlide = $('#work-slider').find('ul li.active');
	var nextSlide = ($(currentSlide).prev().length != 0) ? $(currentSlide).prev() : $('#work-slider').children('ul').children('li').last();
	
	currentSlide.removeClass('active').fadeOut(500);
	nextSlide.addClass('active').fadeIn(500);
}