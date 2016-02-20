$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"), model);
	//var exampleController = 

	var picBox = new PicBox($("#picBox"), model);
	
	var dishDetails = new DishDetails($("#dishDetails"), model);
	
	//var viewFour = new ViewFour($("#viewFour"), model);

});
