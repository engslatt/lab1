var OverallStateCtrl= function(view, model){

	$("#indexView").show();

	this.hideAll = function(){
		$("#indexView").hide();
		$("#sideMenu").hide();
		$("#mainView").hide();
		$("#selectedDishView").hide();
		$("#overView").hide();
		$("#instructionView").hide();
	};

	$("#createDinner").click(function(){
		this.hideAll();
		$("#sideMenu").show();
		$("#mainView").show();
	});

}