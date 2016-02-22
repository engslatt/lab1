var instructionView = function(container, model){

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
		"</div>"+"</div>";
	
	container.html(textString);
	
	//this.overviewDiv = container.find("#dinnerOverview");
	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfGuests.html(model.getNumberOfGuests()+" people");

	var addInstructionText = function(){
	
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

		this.prepView.html(prepViewTxt);
	}
	
	addInstructionText
	
	this.update = function(arg) {
		addInstructionText();
	}
	
	model.addObserver(this);
	
	addInstructionText();

};