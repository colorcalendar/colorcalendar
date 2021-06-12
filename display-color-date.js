 // Displays Color Calendar date in div
// Global varibles set in color-calendar.js

function displayColorDate() {
		
    // Check to see if the clock is set before the epoch date
    if (timeRightNow < dec21_2016) {
        document.getElementById("color-date").textContent = "Clock is set too far in the past";
    }

    // Check is the clock is set too far in the future
    // Most clocks won't go 99 years ahead because of 2038 problem
    else if (timeRightNow > newYearEpochDate[99]) {
        document.getElementById("color-date").textContent = "Clock is set too far in the future";
    } 

   // Else display the current Color Calendar date 
    else {document.getElementById("color-date").textContent = "Year " + colorYear + ", " + colorMonth +
            " " + colorMonthDay + ", " + colorDay;
    }
}


// Set size of font based on screen size
if (window.innerHeight < window.innerWidth){

// If height is less than width, set for height
var d = document.getElementById('color-date');
d.style.fontSize = window.innerHeight/9+'px';
}else{

// else set for width
var d = document.getElementById('color-date');
d.style.fontSize = window.innerWidth/15+'px';
};

