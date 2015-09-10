var distanceInput = document.getElementById("distance"),
	hoursInput = document.getElementById("hours"),
	minutesInput = document.getElementById("minutes"),
	secondsInput = document.getElementById("seconds"),
	calculateBtn = document.getElementById("calculate_btn"),
	paceText = document.getElementById("pace");

	// function sum(a,b) {
			
	// var total = a + b ;
	// console.log(total);
	// }

	// sum(10, 10);

	// function postMsg(){
	// 	console.log("answer is " )
	// }
	// postMsg();


calculateBtn.addEventListener("click", function(event) {
	var miles = parseFloat(distanceInput.value),
		hours = parseFloat(hoursInput.value),
		minutes =parseFloat(minutesInput.value),
		seconds = parseFloat(secondsInput.value);

function validateInput (value, input)
{
		if (isNaN(value)) {
		input.style.borderColor= "red";
		return false;
	}
	else{

		input.style.borderColor ="initial";
		return true;
	}
}

function displayMsg(value){
	if(isNaN(value)) {
		console.log("put some numbers")
	}
}



	var totalTime = hours * 60 + minutes + 	seconds / 60,
		pace = totalTime / miles;
		paceMinutes = Math.floor(pace),
		paceSeconds = Math.round((pace - paceMinutes) * 60);

		if (!validateInput(miles, distanceInput)) {return;}
		if (!validateInput(hours, hoursInput)) {return;}
		if (!validateInput(minutes, minutesInput)) {return;}
		if (!validateInput(seconds, secondsInput)) {return;}
		displayMsg();


		if (paceSeconds < 10) {

			paceSeconds = "0" + paceSeconds;
		};

	paceText.textContent = "You need to run " + paceMinutes + ":" +paceSeconds +
							" minutes per mile";

});

