var items = [

	{	name : "hammer",
		cost : 9.99,
		ID : 001,
		picture : "hammer.jpg"
	},

	{	name : "nail",
		cost : 0.99,
		ID : 002,
		picture : "nail.jpg"
	},

	{	name : "spear",
		cost : 19.99,
		ID : 003,
		picture : "spear.jpg"
	}
];

function listItems(){
	for (var i = 0 ; i < items.length ; i++) {

		console.log(items[i].name + " is $ " + items[i].cost);
	}
}

listItems();