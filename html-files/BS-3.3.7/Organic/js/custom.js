$(function() {

    "use strict";
	
	// REMOVE # FROM URL
	$( 'a[href="#"]' ).click( function(event) {
		event.preventDefault();
	});	
	
	// STICKY NAV
	var stickyHeaderTop = $("#main-slider").height();
	//var stickyHeaderTop = $(window).height();
    $(window).scroll(function() {
        if ($(window).scrollTop() > stickyHeaderTop) {
            $(".sticky-nav").css({position: "fixed", top: "0px"});
            $(".sticky-nav").css("display", "block");
			$(".sticky-nav").addClass("fixednav");
        } else {
            $(".sticky-nav").css({position: "static", top: "0px"});
			$(".sticky-nav").removeClass("fixednav");
        }
    });
	
	// ONE PAGE NAV
	$("#nav").onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing',
		begin: function() {
			//I get fired when the animation is starting
		},
		end: function() {
			//I get fired when the animation is ending
		},
		scrollChange: function($currentListItem) {
			//I get fired when you enter a section and I pass the list item of the section
		}
	});
	
	// Dishes FILTERS
	var $grid = $('#dishes-grid');
	$grid.shuffle({
		itemSelector: '.dishes-grid-item', // the selector for the items in the grid
		speed: 500 // Transition/animation speed (milliseconds)
	});
	/* reshuffle when user clicks a filter item */
	$('#dishes-filters li a').click(function (e) {
		// set active class
		$('#dishes-filters li a').removeClass('active');
		$(this).addClass('active');
		// get group name from clicked item
		var groupName = $(this).attr('data-group');
		// reshuffle grid
		$grid.shuffle('shuffle', groupName );
	});
	
	// Blog Carousel
	$("#article-carousel").owlCarousel({
		autoPlay: true, //Set AutoPlay to 3 seconds
		items : 3,
		stopOnHover : true,
		navigation : true, // Show next and prev buttons
		pagination : false,
		navigationText : ["<span class='fa fa-angle-left animation'></span>","<span class='fa fa-angle-right animation'></span>"]
	});
	
	// GOOGLE MAP
	$(".map-wrap").height(300);
	function initialize($) {
		var mapOptions = {	
			zoom: 8,
			center: new google.maps.LatLng(17.421306, 78.457553),
			disableDefaultUI: true
		};
		var map = new google.maps.Map(document.querySelector('.map-wrap'), mapOptions);
	}
	google.maps.event.addDomListener(window, 'load', initialize);
	
});