(function($) {

    "use strict";
    
    // REMOVE # FROM URL
	$( 'a[href="#"]' ).click( function(e) {
		e.preventDefault();
	});
	
	// DatePicker For Reservation Form On Home Page
	$("#reservation-date").datetimepicker({
		format: 'MM/DD/YYYY'
	});
	
	// TimePicker For Reservation From On Home Page
	$("#reservation-time").datetimepicker({
		format: 'LT'
	});
	
	// Gallery FILTERS
	var $grid = $('#gallery-grid');
	$grid.shuffle({
		itemSelector: '.gallery-grid-item', // the selector for the items in the grid
		speed: 500 // Transition/animation speed (milliseconds)
	});
	/* reshuffle when user clicks a filter item */
	$('#gallery-filter li a').click(function (e) {
		// set active class
		$('#gallery-filter li a').removeClass('active');
		$(this).addClass('active');
		// get group name from clicked item
		var groupName = $(this).attr('data-group');
		// reshuffle grid
		$grid.shuffle('shuffle', groupName );
	});
	
	//MAGNIFIC POPUP
	$('#gallery-grid').magnificPopup({
		delegate: 'a.zoom', 
		type: 'image',
		gallery: {
			enabled: true
		}
	});
	
	// Event Map Height
	var setMapHeight = $(".event-box-img").height();
	$(".map-box").height(setMapHeight);


	
})(window.jQuery);

function AddRow(position) {
  let newItem = document.createElement("LI");
//   let textnode = document.createTextNode(`
// 	Chapter: <input type="text" name="new-chapter ${position}>" value="">
// 	id: <input type="text" name="new-id ${position}>" value="">
// 	eng_name: <input type="text" name="new-eng-name ${position}>" value="">
// 	pol_name: <input type="text" name="new-pol-name ${position}>" value="">
// 	price: <input type="text" name="new-price ${position}>" value="">
//
// `);


  newItem.innerHTML = `
	Chapter: <input type="text" name="new-chapter ${position}>" value="">
	id: <input type="text" name="new-id ${position}>" value="">
	eng_name: <input type="text" name="new-eng-name ${position}>" value="">
	pol_name: <input type="text" name="new-pol-name ${position}>" value="">
	price: <input type="text" name="new-price ${position}>" value="">

`;
  let newPosition = position + 2;
  let list = document.getElementById("myformlist");
  list.insertBefore(newItem, list.children[newPosition]);

}