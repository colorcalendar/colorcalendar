
// Calculates Gregorian date
export {
    gregorianDate,
};
// Arrays for days and month of Gregorian calendar
let gregorianDayOfWeek = ["Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];
let gregorianMonthOfYear = ["January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

// Get Gregorian date
var gregorianTime = new Date();
var gregorianYear = gregorianTime.getFullYear();
var gregorianDayOfMonth = gregorianTime.getDate();
var gregorianDay = gregorianTime.getDay();
var gregorianMonth = gregorianTime.getMonth();

// Format like this: Friday, September 8, 2017
var gregorianDate = gregorianDayOfWeek[gregorianDay] +
    ", " + gregorianMonthOfYear[gregorianMonth] +
    " " + gregorianDayOfMonth +
    ", " + gregorianYear
