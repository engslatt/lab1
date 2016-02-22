var sideMenuView = function(container, model){
		
	container.append('<div><h4>My dinner</h4><p>People:<span id="numberOfGuests"/></span></p></div>');
	container.append(model.getNumberOfGuests());
	container.append('<div><button id="minusGuest" class="btn"><span class="glyphicon glyphicon-minus"></span></button><button id="plusGuest" class="btn"><span class="glyphicon glyphicon-plus"></span></button></div>');

	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	function createMenu(menu) {
        var table = $('<table class="table table-hover"></table>');
        table.append('<th>dish</th><th>cost</th>');
        var length = menu.length;
        for(i=0; i < length; i++){
            var row = $('<tr></tr>');
            var cost = 0;
            for(j=0;j<menu[i].ingredients.length;j++){
                cost += menu[i].ingredients[j].price;
            }
            row.append('<td>'+menu[i].name+'</td>');
            row.append('<td>'+cost+'</td>');
            table.append(row);
        }
		
	container.append(table);
	
	
	var fullMenu = model.getFullMenu();
	for (var i=0; i<fullMenu.length; i++){
		var fullPrice = model.getFoodPrice(fullMenu[i].id);
	}
	
	container.append('<table id="totalCost">Total cost</table>');
	container.append(fullPrice);
	container.append('<button id="#confirmButton" class="btn">Confirm Dinner</button>');
}
	this.update = function(arg) {
		createMenu(model.getFullMenu());
	}
	
	model.addObserver(this);
	
	createMenu(model.getFullMenu());
}