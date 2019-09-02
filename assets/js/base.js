(function ($) {
	'use strict'; // Start of use strict
	
	// Function Today Date
	function todayDate() {
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; 
		var yyyy = today.getFullYear();
		if(dd<10) {
			dd='0'+dd;
		} 
		if(mm<10) {
			mm='0'+mm;
		} 
		//today = mm+'-'+dd+'-'+yyyy;
		today = mm+'/'+dd+'/'+yyyy;
		//today = dd+'-'+mm+'-'+yyyy;
		//today = dd+'/'+mm+'/'+yyyy;
		$(".dynamic-date").text(today);	
		$(".dynamic-year").text((new Date).getFullYear());
	}
	
	// Function Navbar Toggle
	function appNavbarToggle() {
		var body = $("body"),
			bodyHtml = $("body, html"),
			btnToggler = $(".navbar-toggler"),
			btnPageOverlay = $(".page-overlay"),
			navCollapse = $(".navbar-collapse");
		btnToggler.on("click", function () {
			if ($(this).attr("aria-expanded") === "false") {
				btnToggler.addClass("open");
				body.addClass("navbar-open");			
				bodyHtml.addClass("overflow-hidden");
			} else {
				btnToggler.removeClass("open");
				body.removeClass("navbar-open");			
				setTimeout(function(){
                    bodyHtml.removeClass("overflow-hidden");
                }, 800);
			}		
		});		
		btnPageOverlay.click(function() {
			if (btnToggler.attr("aria-expanded") === "false") {
				btnToggler.addClass("open");
				body.addClass("navbar-open");			
				bodyHtml.addClass("overflow-hidden");
			} else {
				btnToggler.removeClass("open");
				body.removeClass("navbar-open");
				navCollapse.removeClass("show");
				btnToggler.attr("aria-expanded", false);
				setTimeout(function(){
                    bodyHtml.removeClass("overflow-hidden");
                }, 800);
			}
		});
	}
	
	// Material Forms
	function materialForm() {
		var input_selector = ".floating-labels .form-control, .floating-labels .custom-select";
		var update_text_fields = function update_text_fields($input) {
			var $label = $input.siblings("label");
			var hasValue = $input.val().length;
			var hasPlaceholder = $input.attr("placeholder");
			var addOrRemove = (hasValue || hasPlaceholder ? "add" : "remove") + "Class";
			$label[addOrRemove]("focused");
		};
		$(input_selector).each(function (index, input) {
			var $this = $(input);
			update_text_fields($this);
		});
		$(document)
			.on('focus', input_selector, function (e) {
				$(e.target).siblings('label').addClass('focused');
			})
			.on('blur', input_selector, function (e) {
				var $this = $(e.target);
				var noValue = !$this.val();
				var noPlaceholder = $this.attr("placeholder") === undefined;
				if (noValue && noPlaceholder) $this.siblings('label').removeClass('focused');
			})
			.on('change', input_selector, function (e) {
				var $this = $(e.target);
				update_text_fields($this);
			});
		$("input[autofocus]").siblings("label").addClass("focused");
	}
	
	// Link Page Scroll
	function linkPageScroll() {
		var ap_windowWidth = $(window).width(),
			ap_headerHeight = $(".header-navbar-content").outerHeight();
		$('.link-page-scroll').unbind('click').on('click', function () {
			if ($('body').hasClass('nav-sidebar-open')) {
				$(".navbar-toggler").removeClass("open");
				$("body").removeClass("nav-sidebar-open");
				$("body, html").removeClass("overflow-x-hidden");
				$(".navbar-collapse").removeClass("show");
			}			
			if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					if (ap_windowWidth >= 1900) {
						$('html, body').animate({
							scrollTop: target.offset().top
						}, 1000);
					}
					else {
						$('html, body').animate({
							scrollTop: target.offset().top - ap_headerHeight
						}, 1000, 
							function() {
								var ap_headerHeightMin = $(".header-navbar-content").outerHeight();
								//console.log((ap_headerHeight - ap_headerHeightMin));
								$('html, body').animate({
									scrollTop: target.offset().top - ap_headerHeightMin
								}, 500);
							}
						);
					}
				return false;
				}
			}
		});
	}
	
	// Function MatchHeight
	function initMatchHeight() {
		//$('.widget-2 .widget-title').matchHeight();		
	}
	
	


	// Document onload event
	jQuery(window).on('load', function(){
	});		
	
	// Document ready event
	jQuery(document).ready(function () {
		todayDate();
		appNavbarToggle();
		initMatchHeight();
		materialForm();
		linkPageScroll();

		
		// Boostrap Carousel
		$(".carousel").swiperight(function() {
			$(this).carousel('prev');
		});
		$(".carousel").swipeleft(function() {
			$(this).carousel('next');
		});
				
		$('#owl-logos-1').owlCarousel({			
			lazyLoad: true,
			margin: 15,
			nav: false,
			navText: [
			   "<i class='fa fa-angle-left'></i>",
			   "<i class='fa fa-angle-right'></i>"
			],		
			dots: false,
			responsive: {
				0: {
					items: 2,
					autoplay: true,    	
					loop: true
				},
				576: {
					items: 3,
					autoplay: true,    	
					loop: true
				},
				768: {
					items: 4,
					autoplay: true,    	
					loop: true
				},
				992: {
					items: 4,
					autoplay: true,    	
					loop: true
				},
				1200: {
					items: 5,
					autoplay: false,    	
					loop: false
				}
			}
		});
		
	});

	// Window Resize event
	jQuery(window).resize(function () {
		initMatchHeight();
		linkPageScroll();
	});

	jQuery(window).scroll(function () {
    });
	
})(jQuery);


