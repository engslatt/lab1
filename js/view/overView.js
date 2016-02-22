var overView = function(container, model){
	
	var textString = "";
	
	textString += "<div class=\"container row\" id=\"instructions\">"+
		"<div class=\"col-md-12\" id=\"dinnerOverview\">"+
			"<div class=\"col-md-6\">"+
				"<h3>My Dinner: <span id=\"numberOfGuests\"/></h3>"+
			"</div>"+
			"<div class=\"col-md-6\" align=\"right\">"+
				"<button id=\"backButton\" class=\"btn\">Go back and edit dinner</button>"+
			"</div>"+
		"</div>"+
		"<div  id=\"preparationView\">"+
		"</div>"+"</div>"+
		"<div id=\"overviewPics\">"+
		"</div>";
	
	container.html(textString);
	
	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfGuests.html(model.getNumberOfGuests()+" people");

	var addOverviewText = function (){
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
	
	this.update = function(arg) {
		addOverviewText();
	}
	
	model.addObserver(this);
	
	addOverviewText();
};