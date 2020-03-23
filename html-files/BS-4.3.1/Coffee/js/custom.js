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

  newItem.innerHTML = `
	Chapter: <select class="chapters" name="new-chapter ${position}>">
									<option selected="selected" value=""> New</option>
                                  <option value=" Salad / Sałatki"> Salad / Sałatki</option>
                                  <option value="Hot soup / Gorąca zupa">Hot soup / Gorąca zupa</option>
                                  <option value="Veg and Nonveg Snacks / Przekąski Wegetariańskie i Niewegetariańskie">Veg and Nonveg Snacks / Przekąski Wegetariańskie i Niewegetariańskie</option>
                                  <option value="Vege dishes / Potrawy wegetariańskie z ryżem">Vege dishes / Potrawy wegetariańskie z ryżem</option>
                                  <option value="Non Vegetarian Dishes / Potrawy niewegetariańskie z ryżem">Non Vegetarian Dishes / Potrawy niewegetariańskie z ryżem</option>
                                  <option value="Lamb dishes with with Rice / dania z jagnięciny z ryżem">Lamb dishes with with Rice / dania z jagnięciny z ryżem</option>
                                  <option value="Dishes with Fish &amp; Seafood / Ryby i owoce morza">Dishes with Fish &amp; Seafood / Ryby i owoce morza</option>
                                  <option value="Biryani / Potrawy ze smażonym ryżem">Biryani / Potrawy ze smażonym ryżem</option>
                                  <option value="Special order (wait 20 min) / Specjalne zamówienie (należy czekać 20 min)">Special order (wait 20 min) / Specjalne zamówienie (należy czekać 20 min)</option>
                                  <option value="Rolls / Rolowane">Rolls / Rolowane</option>
                                  <option value="Hot and cold drinks / Gorące i zimne napoje">Hot and cold drinks / Gorące i zimne napoje</option>
                                  <option value="Desserts / Desery">Desserts / Desery</option>      
                                  <option value="Polecamy">Polecamy</option>
                         </select>
                      
	id: <input type="text" class="id" name="new-id ${position}>" value="">
	eng_name: <input type="text" name="new-eng-name ${position}>" value="">
	pol_name: <input type="text" name="new-pol-name ${position}>" value="">
	price: <input type="text" class ="price" name="new-price ${position}>" value="">
	<button type="submit">Save & Quit</button>
`;
  let newPosition = position + 2;
  let list = document.getElementById("myformlist");
  list.insertBefore(newItem, list.children[newPosition]);

}

function DeleteRow(listItem) {
	let result = confirm("Really want to delete?");
if (result) {
    listItem.parentNode.removeChild(listItem);
}

}