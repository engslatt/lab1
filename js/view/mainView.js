var mainView = function(container, model){
	
	string = "";
	
	string += "<div class=\"col-md-10\" id=\"picBox\">"+
			"<div id=\"dishDiv\">"+
				"<h4>Select dish:</h4>"+
				"<hr class=\"blackLine\">"+
				"<span><input type=\"text\" placeholder=\"Enter key words\" id=\"selsectedDish\">"+
				"<button class=\"btn\" id=\"searchButton\">Search</button></span>"+
 				"<select id=\"foodDrop\">"+
				"</select>"+
				"</div>"+		
				"<div>"+
				"<div class=\"row\" id =\"foodDetail\">"+
				"</div>"+
			"</div>"+
		"</div>"
		
	container.html(string);
	
	this.foodDrop = container.find('#foodDrop');
	this.foodDetail = container.find('#foodDetail');
	
	this.addText = function(){
	
		var selectedFoodDrop = "all";
		var foodDropListTxt = "";
		var foodList = model.getAllDishes("dessert");
		var foodDetailTxt ="";

		//drop down list
		foodDropListTxt = "<option value ='starter'>Starters</option>"+
					"<option ='main dish'>Main</option>"+
					"<option ='dessert'>Dessert</option>"+
					"<option value ='all'>All</option>";
					
					
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
	
	this.update = function(arg) {
		addText();
	}
	
	model.addObserver(this);
	
	this.addText();
}