// Background color based on day, and make day clickable
// Global varibles set in color-calendar.js

function setBackgroundColor() {

	var currentNumber = window.colorMonthDay;
	  // Set background color based on day color
	    if (colorDay == "Redday") {
		elements = document.getElementById("d"+currentNumber);
		elements.bgColor="red";
		elements.innerHTML = "<a href=" + "#" + ">" + currentNumber + "</a>";
	    }
	    if (colorDay == "Orangeday") {
		elements = document.getElementById("d"+currentNumber);
		elements.bgColor="orange";
		elements.innerHTML = "<a href=" + "#" + ">" + currentNumber + "</a>";
	    }
	    if (colorDay == "Yellowday") {
		elements = document.getElementById("d"+currentNumber);
		elements.bgColor="yellow";
		elements.innerHTML = "<a href=" + "#" + ">" + currentNumber + "</a>";
	    }
	    if (colorDay == "Greenday") {
		elements = document.getElementById("d"+currentNumber);
		elements.bgColor="green";
		elements.innerHTML = "<a href=" + "#" + ">" + currentNumber + "</a>";
	    }
	    if (colorDay == "Blueday") {
		elements = document.getElementById("d"+currentNumber);
		elements.bgColor="blue";
		elements.innerHTML = "<a href=" + "#" + ">" + currentNumber + "</a>";
	    }
	    if (colorDay == "Violetday") {
		elements = document.getElementById("d"+currentNumber);
		elements.bgColor="purple";
		elements.innerHTML = "<a href=" + "#" + ">" + currentNumber + "</a>";
	    }   
}
