// Calculates the current date on the Color Calendar (Chroma Celestial)
export {
    dayOfWeek,
    nameOfMonth,
    dayNumberMonth,
    leapYear,
    currentDayArray,
    colorCalendarDate
};

const secondsInDay = 86400;
const secondsInYear = secondsInDay * 365;
const secondsInLeapYear = secondsInDay * 366;

// Years to calculate ahead
const futureYears = 21;

// There are 11 months on the Color Calendar
// Months are named after the planets, moon and sun
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
      "Sun"];

// Every month is the same format, only Sun month is different
// Every month has 35 days, except on a leap year when it has 36 days
// Sun month is 15 days on a regular year, 6 days on a leap year
var monthLength = 35;

// Declare arrays and variables
var currentDayArray = [];
var dayOfMonthArray = [];
var monthNameArray = [];
var futureNewYears = [];
var isItLeapYear = [];
var leapYear = 0; // Boolian, 0 no 1 yes
var leapYearCount = 0;
var colorYear = 0;
var currentDay = 0;

// Get timezone offset, in seconds
var timezoneOffset = (new Date().getTimezoneOffset()) * 60;

//var timeNow = 1607998000; // for testing
//var timeNow = 1639555600; // for testing
var timeNow = Math.floor((new Date).getTime() / 1000) - timezoneOffset;

// The Color Calendar began midnight Decemeber 21, 2016 UTC
var startingDate = 1482278400;

// Array for New Year epoch positions, in seconds
// New years begin on Decemeber 21, not January 1
for (let i = 0; i <= futureYears; i++) {
    // Set starting position midnight Dec 21, 2016
    if (i === 0) {
        futureNewYears.push(startingDate);
        isItLeapYear.push(1); // Talley leap years
    } else if (i >= 1) {
        // Check for leap year and add to previous year position
        if (leapYearCount > 2) {
            futureNewYears.push(secondsInLeapYear + futureNewYears[i - 1]);
            isItLeapYear.push(1);
            leapYearCount = 0; // Reset leap year count
        } else {
            futureNewYears.push(secondsInYear + futureNewYears[i - 1]);
            isItLeapYear.push(0);
            leapYearCount++;
        }
    }
}

// Get year, get day of year
for (let i = 0; i <= futureYears; i++) {
    if (timeNow >= futureNewYears[i] && timeNow < futureNewYears[i + 1]) {
        // Plus 1 for array positioning, no year zero
        colorYear = (i + 1);
        // Negative 1 for array positioning, no day zero
        currentDay = Math.ceil(((timeNow - futureNewYears[i]) / secondsInDay) - 1);
    }
}

// Check for leap year
if (isItLeapYear[colorYear] > 0) {
    leapYear = 1;
} else {
    leapYear = 0;
}

// Array for days of the week
if (leapYear === 0) {
    // Standard year has 5 day week
    for (var i = 0; i <= 364; i++) {
        currentDayArray.push("Redday");
        i++;
        currentDayArray.push("Orangeday");
        i++;
        currentDayArray.push("Yellowday");
        i++;
        currentDayArray.push("Greenday");
        i++;
        currentDayArray.push("Blueday");
    }
} else {
    // Leap year has 6 day week
    for (var i = 0; i <= 365; i++) {
        currentDayArray.push("Redday");
        i++;
        currentDayArray.push("Orangeday");
        i++;
        currentDayArray.push("Yellowday");
        i++;
        currentDayArray.push("Greenday");
        i++;
        currentDayArray.push("Blueday");
        i++;
        currentDayArray.push("Violetday");
    }
}

// Arrays for day numbers per month, and names of month
if (leapYear === 0) {
    let j = 1; //  j starts at day 1, instead day 0
    let k = 0; // k tallys 11 months
    for (var i = 0; i <= 364; i++) {
        dayOfMonthArray.push(j++); // 35 day month
        monthNameArray.push(colorMonthName[k]); // Month of year
        if (j > 35) {
            j = 1;
            k++;
        }
    }
} else {
    // Day Numbers for 36 day month if leap year
    let j = 1;
    let k = 0;
    for (var i = 0; i <= 365; i++) {
        dayOfMonthArray.push(j++);
        monthNameArray.push(colorMonthName[k]);
        if (j > 36) {
            j = 1;
            k++;
        }
    }
}

// Set varables from arrays
var dayOfWeek = currentDayArray[currentDay];
var finalDate = futureNewYears[futureYears];
var dayNumberMonth = dayOfMonthArray[currentDay];
var nameOfMonth = monthNameArray[currentDay];

// Check if the clock is set before the starting date (dec 21, 2016)
if (timeNow < startingDate) {
    var colorCalendarDate = "Clock set too far in past";
}

// Check if the clock is set too far in the future
else if (timeNow > finalDate) {
    var colorCalendarDate = "Clock set too far in future";
}

// Set the current Color Calendar date
else {
  var colorCalendarDate  = dayOfWeek + ", " + nameOfMonth  +  " "  + dayNumberMonth + ", " + "Year " + colorYear;
}
