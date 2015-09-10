// var item0 = "hammer",
// 	item1 = "nails",
// 	item2 = "saw";

// function listItems() {
// 	console.log(item0);
// 	console.log(item1);
// 	console.log(item2);

// }    OR

var items =["hammer",
			"nails",
			"paper",
			"pen",
			"knifes",
			"wood"];
   
items.push("ropes");

items.sort();

function listItems() {
	for (var i = 0; i < items.length; i++) {
		console.log(items[i]);
	}

}

listItems();