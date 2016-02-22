$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"), model);
	//var exampleController =
	
	//var IndexView = new indexView ($("#indexView"), model);
	//var IndexCtrl = new indexCtrl(IndexView,model);
	
	var SideMenuView = new sideMenuView($("#sideMenu"), model);
	var SideMenuViewCtrl = new sideMenuViewCtrl(SideMenuView,model);
	
	//var MainView = new mainView($("#mainView"), model);
	//var MainViewCtrl = new mainViewCtrl(MainView,model);
	
	//var SelectedDishView = new selectedDishView($("#selectedDishView"), model);
	//var SelectedDishViewCtrl = new selectedDishViewCtrl(SelectedDishView,model);
	
	//var OverView = new overView($("#overView"), model);
	//var OverViewCtrl = new overViewCtrl(OverView,model);
	
	//var InstructionView = new instructionView($("#instructionView"), model);
	//var InstructionViewCtrl = new instructionViewCtrl(InstructionView,model);
	
});
