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
