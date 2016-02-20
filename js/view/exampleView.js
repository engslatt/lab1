//ExampleView Object constructor

var ExampleView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.foodInfo = container.find("#foodInfo");
	this.totalPriceMenu = container.find("#totalCost");
	this.confirmDinner = container.find("#confirmButton");

	
	this.numberOfGuests.html(model.getNumberOfGuests());
	//this.plusButton.click(model.setNumberOfGuests(1));
	//this.minusButton.click(model.setNumberOfGuests(-1));
	
	var foodInformation = model.addDishToMenu(1);
	var priceInformation = model.getFoodPrice(1);
	var foodInfoTxt = "";


	foodInfoTxt += "<td>"+foodInformation.name+"</td>"+
							"<td>SEK </td>" + 
							"<td>"+priceInformation +"</td>"	
						//priceInformation[1].price

	this.foodInfo.html(foodInfoTxt);	
	this.totalPriceMenu.html("SEK " + model.getTotalMenuPrice());
	
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
				
	console.log(foodDropListTxt);
				
	this.foodDrop.html(foodDropListTxt);

	//food box
	for (var i=0 ;  i < foodList.length ; i++ ){

		foodDetailTxt +="<div class=\"col-md-3\">"+
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
	
	this.pickedFoodDiv = container.find("#selectedDishDetails");
	
	var pickedFood = model.getDish(2);
	var foodDescription = "";
		foodDescription += "<h2>"+pickedFood.name+"</h2>"+
						"<img src=\"images/"+pickedFood.image+"\" id=\""+pickedFood.name+"\" class=\"foodPics\" style=\"width:128px;height:128px;\">"+
						"<div>"+ pickedFood.description+"</div>"
					

		
	this.pickedFoodDiv.html(foodDescription);
	
	this.ingredientBox = container.find("#ingredients");
	this.totalPriceIngr = container.find("#totalCostIngr");
	
	var ingredientList = model.getDishIngredients(2);
	var ingredientTxt = ""
	
	for (var i=0 ;  i < ingredientList.length ; i++ ){
	
		ingredientTxt += "<table class=\"table\">"+"<tbody>"+"<tr>"+
					"<td>"+ingredientList[i].quantity + ingredientList[i].unit +
					"</td>"+"<td>"+ingredientList[i].name+"</td>"+
					"<td>SEK</td>"+
					"<td>"+ingredientList[i].price+"</td>"+
					"</tr>"+"</tbody>"+ "</table>"
	}
	
	this.totalPriceIngr.html(model.getFoodPrice(2));
	this.ingredientBox.html(ingredientTxt);
}

	
