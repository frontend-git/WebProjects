// JavaScript for wave
(function($) {
$(document).ready(function() {
	"use strict";
	
	
		// Scroll down opacity
		var divs = $('.slider-inner');
		$(window).on('scroll', function() {
		var st = $(this).scrollTop();
		divs.css({ 'opacity' : (1 - st/700) });
		});
		
		
		

	
	
			
	
	
	
		// Hamburger Menu
		$('.hamburger-menu').on('click', function(e) {
		$(".hamburger-menu").toggleClass("menu-open");
		$(".navigation").toggleClass("show-me");
		$(".navigation ul li").toggleClass("show-me");
		});
	
	
	
		// Page transition
		$('.transition').on('click', function(e) {
      	$('.transition-overlay').toggleClass("show-me");
	    });
		
		
		// Transition delay
		$('.transition').on('click', function(e) {
    	e.preventDefault();                  
    	var goTo = this.getAttribute("href"); 
		setTimeout(function(){
         window.location = goTo;
    	},1000);       
		}); 
		
		
		
		// Hide Fixed Slider
		$(window).on("scroll touchmove", function () {
		$('.slider .slider-inner').toggleClass('hide', $(document).scrollTop() > 1500);
		});
	

		});
	
		
		// Wow animations
		wow = new WOW(
      	{
       		animateClass: 'animated',
        	offset:       50
      	}
    	);
    	wow.init();
		
		
		
		
	
		
	})(jQuery);


jQuery('[data-toggle="popover"]').popover();


jQuery(document).on('show.bs.popover', function (event) {
    // could use [data-toggle="popover"] instead
    // using a different selector allows to have different sets of single instance popovers.
    jQuery('[data-popover-type="singleton"]').not(event.target).each(function (key, el) {
        jQuery(el).popover('hide'); // this way everything gets propagated properly
    });
});

jQuery(document).on('click', function (event) {
    // choose to close all popovers if clicking on anything but a popover element.
    if (!($(event.target).data('toggle') === "popover" /* the trigger buttons */
          || jQuery(event.target).hasClass('popover') /* the popup menu */
          || jQuery(event.target).parents('.popover[role="tooltip"]').length /* this one is a bit fiddly but also catches child elements of the popup menu. */
    )) {
        jQuery('[data-toggle="popover"]').popover('hide');
    }
});


