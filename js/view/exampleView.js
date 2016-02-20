//ExampleView Object constructor

var ExampleView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.confirmDinner = container.find("#confirmButton");

	this.menuList = container.find("#menuList");

	
	this.numberOfGuests.html(model.getNumberOfGuests());
	//this.plusButton.click(model.setNumberOfGuests(1));
	//this.minusButton.click(model.setNumberOfGuests(-1));
	
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

	//this.foodInfo.html(model.removeDishFromMenu(1));    NOT WORKING?
}

var PicBox = function(container, model){
	this.foodDrop = container.find('#foodDrop');
	this.foodDetail = container.find('#foodDetail');
	

	var selectedFoodDrop = "all";
	var foodDropListTxt = "";
	var foodList = model.getAllDishes("dessert");
	var foodDetailTxt ="";

	//drop down list
	foodDropListTxt = "<option value ='starter'>Starters</option>"+
				"<option ='main dish'>Main</option>"+
				"<option ='dessert'>Dessert</option>"+
				"<option value ='all'>All</option>";
				
	//console.log(foodDropListTxt);
				
	this.foodDrop.html(foodDropListTxt);

	//food box
	for (var i=0 ;  i < foodList.length ; i++ ){

		foodDetailTxt +="<div class=\"col-md-4\">"+
								"<div class=\"thumbnail\">"+
									"<img src=\"images/"+foodList[i].image+"\" id=\""+foodList[i].name +"\" class=\"foodPics\" style=\"width:128px;height:128px;\">"+
									"<div class=\"caption\">"+
									"<p><a href=\"#\" class=\"btn btn-primary\" role=\"button\">"+foodList[i].name+"</a></p>"+
									"<p>"+foodList[i].description+"</p>"+
							"</div></div></div>";

		}
		
	this.foodDetail.html(foodDetailTxt);
	}
	
var DishDetails = function(container, model){
	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfGuests.html(model.getNumberOfGuests()+" people");
	
	this.pickedFoodDiv = container.find("#selectedDishDetails");

	var dishId = 2; //FOR TESTING
	
	var pickedFood = model.getDish(dishId);
	var foodDescription = "";
	foodDescription += "<h2>"+pickedFood.name+"</h2>"+
						"<img src=\"images/"+pickedFood.image+"\" id=\""+pickedFood.name+"\" class=\"foodPics\" style=\"width:128px;height:128px;\">"+
						"<div>"+ pickedFood.description+"</div>"
	
	foodDescription += '<br><button class="btn" id="backButton">Back to Select Dish</button>';

	this.pickedFoodDiv.html(foodDescription);
	

	this.prepDiv = container.find("#prepDiv");
	this.prepDiv.html("<p>"+pickedFood.description);


	this.ingredientsBox = container.find("#ingredientsBox");
	this.totalPriceIngr = container.find("#totalCostIngr");
	
	var ingredientList = model.getDishIngredients(dishId);
	var ingredientTxt = '<h4>Ingredients for '+model.getNumberOfGuests()+' people</h4><div><table class="table"><tbody>';
	
	for (var i=0 ;  i < ingredientList.length ; i++ ){
	
		ingredientTxt += "<tr>"+
					"<td>"+ingredientList[i].quantity*model.getNumberOfGuests() + ingredientList[i].unit+"</td>"+
					"<td>"+ingredientList[i].name+"</td>"+
					"<td>SEK</td>"+
					"<td>"+ingredientList[i].price*model.getNumberOfGuests()+"</td>"+
					"</tr>";
	}

	ingredientTxt += '</tbody><tfoot>'+
					'<tr><td><button class="btn" id="confirmDish">Confirm Dish</button></td>'+
					"<td></td>"+
					"<td>SEK</td>"+
					"<td>"+model.getFoodPrice(dishId)*model.getNumberOfGuests()+"</td>"+
					"</tr></tfoot></table>";
	
	//this.totalPriceIngr.html(model.getFoodPrice(dishId));
	this.ingredientsBox.html(ingredientTxt);
}

var Overview = function(container, model){
	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfGuests.html(model.getNumberOfGuests()+" people");

	this.overviewPics = container.find("#overviewPics");

	var fullMenu = model.getFullMenu();
	var foodDetailTxt ='<div class="container row center">';

	for (var i=0 ;  i < fullMenu.length ; i++ ){

		foodDetailTxt +="<div class=\"col-md-4\">"+
								"<div class=\"thumbnail\">"+
									"<img src=\"images/"+fullMenu[i].image+"\" id=\""+fullMenu[i].name +"\" class=\"foodPics\" style=\"width:128px;height:128px;\">"+
									"<div class=\"caption\">"+
									"<p><a href=\"#\" class=\"btn btn-primary\" role=\"button\">"+fullMenu[i].name+"</a></p>"+
									'<p class="costColor">SEK '+model.getFoodPrice(fullMenu[i].id)+'</p>'+
							"</div></div></div>";

	}
	
	foodDetailTxt += "</div>";

	foodDetailTxt += '<hr class="blackLine">'+
					'<div class="container row center costColor"><h4>Total price: SEK '+model.getTotalMenuPrice()+'</h4></div>'+
					'<hr class="blackLine">'+
					'<div class="container row center"><button class="btn" id="printButton">Print Full Recipe</button></div>';

	this.overviewPics.html(foodDetailTxt);

}

var Instructions = function(container, model){
	//this.overviewDiv = container.find("#dinnerOverview");
	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfGuests.html(model.getNumberOfGuests()+" people");

	this.prepView = container.find("#preparationView");
	var prepViewTxt = "";
	var fullMenu = model.getFullMenu();

	//console.log("fullMenu = "+fullMenu); //array of objects
	//console.log("fullMenu.length = "+fullMenu.length);
	
	for (var i=0; i<fullMenu.length; i++){
		var ingredientTxt ='<table class="table"><tbody>';
		//console.log("fullMenu[i].ingredients = "+fullMenu[i].ingredients);
		//console.log('fullMenu[i]["ingredients"].length = '+fullMenu[i]["ingredients"].length);
		
		for (var j=0; j<fullMenu[i]["ingredients"].length; j++){
			ingredientTxt += "<tr>"+
					"<td>"+fullMenu[i]["ingredients"][j].quantity + fullMenu[i]["ingredients"][j].unit +
					"</td>"+"<td>"+fullMenu[i]["ingredients"][j].name+"</td>"+
					"</tr>";
			//console.log('fullMenu[i]["ingredients"][j].name ='+fullMenu[i]["ingredients"][j].name);	
		}
		ingredientTxt += "</tbody></table>";

		//console.log("fullMenu[i] = "+fullMenu[i]);
		prepViewTxt += '<div class="row">'+
						'<div class="col-md-6">'+
						'<div class="col-md-4">'+
						'<img src="images/'+fullMenu[i].image+'" class="img-responsive">'+
						'</div>'+
						'<div class="col-md-8">'+
						'<h3>'+fullMenu[i].name+'</h3>'+
						ingredientTxt+
						'</div></div>'+
						'<div class="col-md-6">'+
						'<h4>Preparation</h4>'+
						'<p>'+fullMenu[i].description+'</p>'+
						'</div></div>';

	}

	//console.log("prepViewTxt = "+prepViewTxt);

	this.prepView.html(prepViewTxt);
}
