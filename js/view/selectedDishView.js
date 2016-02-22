var selectedDishView = function(container, model){
	
	var textString = "";
	
	textString += "<div id=\"dishDetails\">"+
			"<div id=\"selectedDishDetails\" class=\"col-md-5\">"+
			"</div>"+
			"<div id=\"ingredientsBox\" class=\"col-md-4\">"+
			"</div>"+
			"<div id=\"preparation\" class=\"col-md-9 col-md-offset-3\">"+
				"<h2>Preparation</h2>"+
				"<div id=\"prepDiv\">"+
				"</div>"+
			"</div>"+
		"</div>"
		
	container.html(textString);
	
	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfGuests.html(model.getNumberOfGuests()+" people");
	
	var dishInfo = function(){
	
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
	
	this.update = function(arg) {
		dishInfo();
	}
	
	model.addObserver(this);
	
	dishInfo();
}