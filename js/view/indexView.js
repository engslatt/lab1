var indexView = function(container, model){
	
	container.html('<div id="indexBox"><h2>A Home Dinner Service</h2><hr class="blackLine"><p>Lorem ipsum dolor.....</p><p>start quickly</p><button class="btn" id="createDinner">Create new dinner</button></div>');

	model.addObserver(this);
}	
	