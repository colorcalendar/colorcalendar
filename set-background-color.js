// Set the background color of the day, and format sun month
import {leapYear,
        nameOfMonth,
        dayNumberMonth,
        dayOfWeek} 
  from "/color-calendar-date.js";

// Set background color based on Redday
if (dayOfWeek === "Redday") {
    document.getElementById("d" + dayNumberMonth).className = "redday";
}

// Orangeday
if (dayOfWeek === "Orangeday") {
    document.getElementById("d" + dayNumberMonth).className = "orangeday";
}

// Yellowday
if (dayOfWeek === "Yellowday") {
    document.getElementById("d" + dayNumberMonth).className = "yellowday";
}

// Greenday
if (dayOfWeek === "Greenday") {
    document.getElementById("d" + dayNumberMonth).className = "greenday";
}

// Blueday
if (dayOfWeek === "Blueday") {
    document.getElementById("d" + dayNumberMonth).className = "blueday";
}

// Violetday
if (dayOfWeek === "Violetday") {
    document.getElementById("d" + dayNumberMonth).className = "violetday";
    //elements.innerHTML = "<a href=" + "#" + ">" + currentNumber + "</a>";
}

// Sun month on leap year
if (nameOfMonth === "Sun" && leapYear === 1) {
    for (let i = 7; i <= 36; i++) {
        document.getElementById("d" + i).className = "day-gray";
    }
}

// Sun month on non leap year
if (nameOfMonth === "Sun" && leapYear === 0) {
    for (let i = 16; i <= 35; i++) {
        document.getElementById("d" + i).className = "day-gray";
    }
}
