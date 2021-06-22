// Background color based on the Color Calendar day
// Global varibles set in color-calendar-date.js

function setBackgroundColor() {

	var currentNumber = window.colorMonthDay;

	  // Set background color based on day color
	    if (colorDay == "Redday") {
		    elements = document.getElementsByClassName("d"+currentNumber);
		    for (var i = 0; i < elements.length; i++) {
			elements[i].bgColor="red";
		    }
	    }
	    if (colorDay == "Orangeday") {
		    elements = document.getElementsByClassName("d"+currentNumber);
		    for (var i = 0; i < elements.length; i++) {
			elements[i].bgColor="orange";
		    }
	    }
	    if (colorDay == "Yellowday") {
		    elements = document.getElementsByClassName("d"+currentNumber);
		    for (var i = 0; i < elements.length; i++) {
			elements[i].bgColor="yellow";
		    }
	    }
	    if (colorDay == "Greenday") {
		    elements = document.getElementsByClassName("d"+currentNumber);
		    for (var i = 0; i < elements.length; i++) {
			elements[i].bgColor="green";
		    }
	    }
	    if (colorDay == "Blueday") {
		    elements = document.getElementsByClassName("d"+currentNumber);
		    for (var i = 0; i < elements.length; i++) {
			elements[i].bgColor="blue";
		    }
	    }
	    if (colorDay == "Violetday") {
		//document.body.style.backgroundColor = "purple";
		    elements = document.getElementsByClassName("d"+currentNumber);
		    for (var i = 0; i < elements.length; i++) {
			elements[i].bgColor="purple";
		    }
	    }   
}
