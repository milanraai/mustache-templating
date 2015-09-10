// var template = "<h1> Hello, {{firstname}} {{lastname}} ! </h1> <h1> Age : {{age}}";

//OR 

var template = document.getElementById("template").innerHTML;

var data = {

	firstname : "Bob", 
	lastname : "Smith",
	age : 30
};

var html = Mustache.render(template, data);

var div = document.createElement("div");
div.innerHTML = html;
document.body.appendChild(div);