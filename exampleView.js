//ExampleView Object constructor
var ExampleView = function (container) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	// this.createNewDinner = container.find("#createDinner");
	// this.confirmDinner = container.find("#confirmButton");
	// this.dinnerCost = container.find("#costDinner");
	// this.searchArea = container.find("#selectedDish");
	// this.searchButton = container.find("#searchbutton");

	model.setNumberOfGuests(0);
	this.numberOfGuests.html(model.getNumberOfGuests());
	
	//this.numberOfGuests.html("Hello world");
}
