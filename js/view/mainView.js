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
	
	var foodDropListTxt = "";
		
	//drop down list
	foodDropListTxt = "<option value ='starter'>Starters</option>"+
				"<option value ='main dish'>Main</option>"+
				"<option value ='dessert'>Dessert</option>";
							
	this.foodDrop.html(foodDropListTxt);
		
	this.updateType = function(type){
		
		var foodList = model.getAllDishes(type);
		var foodDetailTxt ="";
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
	
	this.updateType("starter");
	
	this.update = function(type) {
		this.updateType(type);
	}
	
	model.addObserver(this);
	

}