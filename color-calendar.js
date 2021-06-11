// Calculates and prints in browser the date on the Color Calendar 
window.onload = function getColorDate() {

    // The Color Calendar correlates with the Gregorian calendar
    // The Color Calendar started midnight Decemeber 21, 2016
    // UT in seconds is 1482278400
    const dec21_2016 = 1482278400;

    // There are 11 months in the Color Calendar (named after planets)
    var colorMonthName = ["Mercury",
        "Venus",
        "Earth",
        "Moon",
        "Mars",
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune",
        "Pluto",
        "Sun"
    ];

    // Initialize arrays and variables 
    var colorOfDayArray = [];
    var dayOfMonth = [];
    var monthOfYear = [];
    var epochDate = [];
    var isItLeapYear = [];
    var leapYear = 0;
    var colorYear = 0;
    var colorDay = 0;

    // Standard month has 35 days, 36 days on leap years
    // Every month is the same except Sun month
    var monthLength = 35;
    var secondsInDay = 86400;
    var secondsInYear = secondsInDay * 365;
    var secondsInLeapYear = secondsInDay * 366;
    j = 0;

    // Array for New Year epoch positions, 100 years ahead
    for (var i = 0; i <= 99; i++) {
        // Set starting position Dec 21, 2016

        if (i === 0) {
            epochDate.push(dec21_2016);
            // Talley leap years
            isItLeapYear.push(1);

        } else if (i >= 1) {
            // Check for leap year and add to previous year position
            if (j > 2) {
                epochDate.push(secondsInLeapYear + epochDate[i - 1]);
                isItLeapYear.push(1);
                // Reset leap year count 
                j = 0;
            } else {
                epochDate.push(secondsInYear + epochDate[i - 1]);
                isItLeapYear.push(0);
                j++;
            }

        }
    }

    // Get timezone offset, in seconds
    var timezoneOffset = (new Date().getTimezoneOffset()) * 60;

    // Get current time, minus timezone offset, in seconds
    var timeRightNow = Math.floor((new Date).getTime() / 1000) - timezoneOffset;

    // Get year, get day of year, up to 100 years ahead 
    for (var i = 0; i <= 99; i++) {
        if (timeRightNow >= epochDate[i] && timeRightNow < epochDate[i + 1]) {
            // Plus 1 for array positioning
            colorYear = (i + 1);
            // Negative 1 for array positioning	
            colorDay = Math.ceil(((timeRightNow - epochDate[i]) / secondsInDay) - 1);
        }
    }

    // Check for leap year
    if (isItLeapYear[colorYear] > 0) {
        leapYear = 1;
    } else {
        leapYear = 0;
    }

    // Array for day names of the week
    if (leapYear === 0) {
        // Standard year has 5 day week
        for (var i = 0; i <= 364; i++) {
            colorOfDayArray.push("Redday");
            i++;
            colorOfDayArray.push("Orangeday");
            i++;
            colorOfDayArray.push("Yellowday");
            i++;
            colorOfDayArray.push("Greenday");
            i++;
            colorOfDayArray.push("Blueday");
        }
    } else {
        // Leap year has 6 day week in reverse order
        for (var i = 0; i <= 365; i++) {
            colorOfDayArray.push("Violetday");
            i++;
            colorOfDayArray.push("Blueday");
            i++;
            colorOfDayArray.push("Greenday");
            i++;
            colorOfDayArray.push("Yellowday");
            i++;
            colorOfDayArray.push("Orangeday");
            i++;
            colorOfDayArray.push("Redday");
        }
    }

    // Array for numbers per month
    if (leapYear === 0) {
        var j = 1; //  j starts at day 1, instead day 0
        var k = 0; // k tallys 11 months
        for (var i = 0; i <= 364; i++) {
            dayOfMonth.push(j++); // 35 day month		
            monthOfYear.push(colorMonthName[k]); // Month of year
            if (j > 35) {
                j = 1;
                k++;
            }
        }
    } else {
        // Day Numbers for 36 day month if leap year
        var j = 1;
        var k = 0;
        for (var i = 0; i <= 365; i++) {
            dayOfMonth.push(j++);
            monthOfYear.push(colorMonthName[k]);
            if (j > 36) {
                j = 1;
                k++;
            }
        }
    }
    // Formatting			
    // Print Color date to div
    if (timeRightNow < dec21_2016) {
        document.getElementById("color-date").textContent = "Clock set too far in the past";
    }
    // Most computers won't go 100 years ahead because of 2038 32bit problem
    else if (timeRightNow > epochDate[99]) {
        document.getElementById("color-date").textContent = "Clock set too far ahead";
    } else {
        document.getElementById("color-date").textContent = "Year " + colorYear + ", " + monthOfYear[colorDay] +
            " " + dayOfMonth[colorDay] + ", " + colorOfDayArray[colorDay];
    }

    // Set background color based on the day color
    if (colorOfDayArray[colorDay] == "Redday") {
        document.body.style.backgroundColor = "red";
    }
    if (colorOfDayArray[colorDay] == "Orangeday") {
        document.body.style.backgroundColor = "orange";
    }
    if (colorOfDayArray[colorDay] == "Yellowday") {
        document.body.style.backgroundColor = "yellow";
    }
    if (colorOfDayArray[colorDay] == "Greenday") {
        document.body.style.backgroundColor = "green";
    }
    if (colorOfDayArray[colorDay] == "Blueday") {
        document.body.style.backgroundColor = "blue";
    }
    if (colorOfDayArray[colorDay] == "Violetday") {
        document.body.style.backgroundColor = "purple";
    }

}
