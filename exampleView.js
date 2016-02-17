//ExampleView Object constructor
var ExampleView = function (container) {
	
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
	this.pickedFood = container.find("#lasagneDiv");
	this.ingridients = container.find("#ingredients");
	this.confirmDish = container.find ("#confirmDish");
	this.backButton = container.find ("#backButton");
	this.preparation = container.find ("#preparation");
	this.dinnerOverview = container.find("#dinnerOverview");
	this.overviewPics = container.find("#overviewPics");
	this.printButton = container.find("#printButton");
	this.preparationView = container.find("#preparationView");


	
	dinnerModel.setNumberOfGuests(1);
	this.numberOfGuests.html(dinnerModel.getNumberOfGuests());
	
	//this.numberOfGuests.html("Hello world");
}
