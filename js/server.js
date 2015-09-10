// $.get("http://api.openweathermap.org/data/2.5/weather?q=Boston,ma & units=imperial", function (data) {

// 	console.log(data);
// });

// $.get("http://google.com/robots.txt", function (data) {

// 	console.log(data);
// });

// var request = $.get("http://api.openweathermap.org/data/2.5/weather?q=Boston,ma & units=imperial");

// request.done(function(data) {
// 	console.log(data);
// });

// request.fail(function() {
// 	alert("Request failed. Try again")
// });

// OR Method chaining ///////////

$.get("http://api.openweathermap.org/data/2.5/weather?q=Boston,ma & units=imperial", null , null, "json")
	.done(function(data) {
	console.log(data);
})
	.fail(function() {
	console.log("try again, asshole!!");
});

$.get("http://omdbapi.com/?s=star wars&r=XML", null, null, "XML")
	.done(function(data) {
	console.log(data);
})
	.fail(function() {
	console.log("try again, asshole!!");
});	