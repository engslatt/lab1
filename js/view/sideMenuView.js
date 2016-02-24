var sideMenuView = function(container, model){
	
	string = "";
	
	string += "<div id=\"exampleView\">"+
			"<div>"+
				"<h4>My dinner</h4>"+
				"<p>People: <span id=\"numberOfGuests\"/></span></p>"+
			"</div>"+
 			"<div>"+
            "<button id=\"minusGuest\" class=\"btn\"><span class=\"glyphicon glyphicon-minus\"></span></button>"+
				"<button id=\"plusGuest\" class=\"btn\"><span class=\"glyphicon glyphicon-plus\"></span></button>"+
			"</div>"+
			"<div>"+
				"<div id=\"menuList\">"+
				"</div>"+
			"</div>"+
			"<button id=\"#confirmButton\" class=\"btn\">Confirm Dinner</button>"+
		"</div>";
		
	container.html(string);
	
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.confirmDinner = container.find("#confirmButton");

	this.menuList = container.find("#menuList");

	this.numberOfGuests.html(model.getNumberOfGuests());
	
	this.updateTable = function(){
	
		var fullMenu = model.getFullMenu();
		var menuListTxt = '<table class="table">'+
							'<thead><tr>'+
								'<th>Dish name</th>'+
								'<th>Cost</th>'+
								'<th></th>'+
							'</tr></thead><tbody>';
		for (var i=0; i<fullMenu.length; i++){
			var fullPrice = model.getFoodPrice(fullMenu[i].id);

			menuListTxt += 	'<tr class="costColor"><td>'+fullMenu[i].name+"</td>"+
						"<td>SEK </td>" + 
						"<td>"+fullPrice+"</td></tr>";	
		}

		menuListTxt += '</tbody><tfoot><tr>'+
							'<td>Total price (x '+model.getNumberOfGuests()+')</td>'+
							'<td>SEK</td>'+
							'<td>'+model.getTotalMenuPrice()+'</td></tr></tfoot></table>';

		this.menuList.html(menuListTxt);
	}
	
	this.updateTable();
	
	this.update = function(arg) {
		if (arg == "newGuestNumber"){
			this.numberOfGuests.html(model.getNumberOfGuests());
		}
		if (arg == "newMenu"){
			this.updateTable();
		}
	}
	
	model.addObserver(this);

}	
	
