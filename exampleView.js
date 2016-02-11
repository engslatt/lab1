//ExampleView Object constructor
var ExampleView = function (container) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	//this.plusButton = container.find("#plusGuest");
	//this.minusButton = container.find("#minusGuest");
	this.createNewDinner = container.find("#createDinner");
	this.confirmDinner = container.find("#confirmButton");
	this.dinnerCost = container.find("#costDinner");
	this.searchArea = container.find("#selectedDish");
	this.searchButton = container.find("#searchbutton");
	this.foodButton1 = container.find("#1");
	this.foodButton2 = container.find("#2");
	this.foodButton3 = container.find("#3");
	this.foodButton4 = container.find("#4");
	this.foodButton5 = container.find("#5");

	
	//this.numberOfGuests.html("Hello world");
	//this.header.html("HOMELETTE - From the best chefs in the world directly into your kitchen");
}
