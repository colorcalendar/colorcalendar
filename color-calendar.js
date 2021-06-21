// Calculates the current date on the Color Calendar

function getColorDate() {

    // The Color Calendar began midnight Decemeber 21, 2016 - in seconds
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

    // A standard month has 35 days, or 36 days on leap years
    // Every month is the same except Sun month
    var monthLength = 35;
    var secondsInDay = 86400;
    var secondsInYear = secondsInDay * 365;
    var secondsInLeapYear = secondsInDay * 366;

    // Initialize arrays and variables 
    var colorOfDayArray = [];
    var dayOfMonth = [];
    var monthOfYear = [];
    var newYearEpochDate = [];
    var isItLeapYear = [];
    var leapYear = 0;
    var colorYear = 0;
    var colorDay = 0;
    j = 0;

    // Array for New Year epoch positions, 17 years ahead
    // 17 years because of the 2038 problem
    for (var i = 0; i <= 17; i++) {
        // Set starting position midnight Dec 21, 2016
        if (i === 0) {
            newYearEpochDate.push(dec21_2016);
            // Talley leap years
            isItLeapYear.push(1);
        } else if (i >= 1) {
            // Check for leap year and add to previous year position
            if (j > 2) {
                newYearEpochDate.push(secondsInLeapYear + newYearEpochDate[i - 1]);
                isItLeapYear.push(1);
                // Reset leap year count 
                j = 0;
            } else {
                newYearEpochDate.push(secondsInYear + newYearEpochDate[i - 1]);
                isItLeapYear.push(0);
                j++;
            }
        }
    }

    // Get timezone offset, in seconds
    var timezoneOffset = (new Date().getTimezoneOffset()) * 60;

    // Get current time, minus timezone offset, in seconds
    var timeRightNow = Math.floor((new Date).getTime() / 1000) - timezoneOffset;

    // Get year, get day of year, up to 17 years ahead 
    for (var i = 0; i <= 17; i++) {
        if (timeRightNow >= newYearEpochDate[i] && timeRightNow < newYearEpochDate[i + 1]) {
            // Plus 1 for array positioning
            colorYear = (i + 1);
            // Negative 1 for array positioning	
            colorDay = Math.ceil(((timeRightNow - newYearEpochDate[i]) / secondsInDay) - 1);
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
        // Leap year has 6 day week 
        for (var i = 0; i <= 365; i++) {
            colorOfDayArray.push("Redday");
            i++;
            colorOfDayArray.push("Orangeday");
            i++;
            colorOfDayArray.push("Yellowday");
            i++;
            colorOfDayArray.push("Greenday");
            i++;
            colorOfDayArray.push("Blueday");
            i++;
            colorOfDayArray.push("Violetday");
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

	// Global varibles for year, month, day number, day color, time now, future years, time begin, 
	window.colorYear = colorYear;
	window.colorMonth = monthOfYear[colorDay] ;
	window.colorMonthDay = dayOfMonth[colorDay] ;
	window.colorDay = colorOfDayArray[colorDay];
	window.timeRightNow = timeRightNow;
	window.newYearEpochDate = newYearEpochDate;
	window.dec21_2016 = dec21_2016;
}