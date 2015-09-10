function containsString(mainString, searchString) {

	if (mainString.indexOf(searchString) != -1 ) {

		console.log("true");
	}
	else {
		console.log("false");
	}
}

var months = [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"August",
				"September",
				"October",
				"November",
				"December"];

function getMonthName(i) {

		i--;
		console.log(months[i]);
}

var user = {

	fName : "Milan",
	lName : "Raai",
	email : "milanraai@gmail.com"
}

function logUserInfo() {
	console.log(user.fName + " " + user.lName + " : " + user.email)
};


document.addEventListener("keyup", function(event) {

	if(	String.fromCharCode(event.keyCode) === "Y"  ) {

		console.log ("You pressed Yes" );
	} 
	else if (String.fromCharCode(event.keyCode) === "N"  ) {
		console.log("You said No");
	}
	else {
		console.log("I don\’t understand.");
	}

});




//logUserInfo(user)

// getMonthName(3);

// containsString("independent", "depend");