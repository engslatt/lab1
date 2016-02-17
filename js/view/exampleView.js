//ExampleView Object constructor
var ExampleView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.foodPictures = container.find(".foodPics");
	this.foodMenu = container.find("#menuList");
	this.createDinner = container.find("#createDinner");
	this.confirmDinner = container.find("#confirmButton");
	this.searchField = container.find("#searchDish");
	this.searchButton = container.find("#searchButton");
	this.dropDown = container.find("#dishDrop");
	this.thumb1 = container.find("#thumb1");
	this.thumb2 = container.find("#thumb2");
	this.thumb3 = container.find("#thumb3");
	this.thumb4 = container.find("#thumb2");
	this.thumb5 = container.find("#thumb3");
	this.pickedFood = container.find("#lasagneDiv");
	this.ingridients = container.find("#ingredients");
	this.confirmDish = container.find ("#confirmDish");
	this.backButton = container.find ("#backButton");
	this.preparation = container.find ("#preparation");
	this.dinnerOverview = container.find("#dinnerOverview");
	this.overviewPics = container.find("#overviewPics");
	this.printButton = container.find("#printButton");
	this.preparationView = container.find("#preparationView");
	this.foodName = container.find("#foodName");


	this.numberOfGuests.html(model.getNumberOfGuests());
	this.foodName.html(model.addDishToMenu(1));
}


var PicBox = function(container, model){
		this.foodDetail = container.find('#foodDetail');
		//this.picBox = container.find('#picBox');

		var foodList = model.getAllDishes('starter');
		var foodDetailTxt ="";

		//for (key in foodList){
		for (var i=0 ;  i < foodList.length ; i++ ){

			console.log(foodList[i].name);
			//foodDetailTxt += foodList[i].name + foodList[i].image + foodList[i].description;
			//console.log(foodDetailTxt);

			foodDetailTxt +="<div class=\"col-md-3\">"+
								"<div class=\"thumbnail\">"+
									"<img src=\"images/"+foodList[i].image+"\" id=\""+foodList[i].name +"\" class=\"foodPics\" style=\"width:128px;height:128px;\">"+
									"<div class=\"caption\">"+
									"<p><a href=\"#\" class=\"btn btn-primary\" role=\"button\">"+foodList[i].name+"</a></p>"+
									"<p>"+foodList[i].description+"</p>"+
							"</div></div></div>"

		}
		//console.log(foodList);
		this.foodDetail.html(foodDetailTxt);
		//this.picBox.html(foodDetailTxt);

	}