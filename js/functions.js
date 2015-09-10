function sayHello(name, useAlert) {
	console.log("Hello " + name);

	if (useAlert) {
		alert("Hello, " + name);
	}
	else {
		console.log("Hello, " + name);
	}
}

// Functions 
function randomInt(max) {
	var rand = Math.random() * max;
	rand = Math.round(rand);
	return rand;
}

//  sayHello("Milan", true);

console.log(randomInt(100));



function changeNumber(value) {
 var result = value * 2;
 return value;
}

var amount = changeNumber(10);