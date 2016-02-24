var mainViewCtrl = function(view, model) {
	
	foodDrop.onchange = function(){
		var type = document.getElementById("foodDrop").value;
		view.update(type);
	};
	
}