// Formats Gregorian date
export {
    gregorianDate,
    gregorianDayOfMonth,
    monthPosition,
    monthLength,
    lastMonthLength,
    gregorianWeekdays,
    shortWeekdays
};

// Arrays for Gregorian calendar
let gregorianWeekdays = ["Sunday",//0
    "Monday",//1
    "Tuesday",//2
    "Wednesday",//3
    "Thursday",//4
    "Friday",//5
    "Saturday"//6
];

let shortWeekdays = ["SUN",
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT"
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
var g = new Date();
var gregorianYear = g.getFullYear();
var gregorianDayOfMonth = g.getDate();
var gregorianDay = g.getDay();
var gregorianMonth = g.getMonth();
var gregorianString = g.toString();

// Format like this: Friday, September 8, 2017
var gregorianDate = gregorianWeekdays[gregorianDay] +
    ", " + gregorianMonthOfYear[gregorianMonth] +
    " " + gregorianDayOfMonth +
    ", " + gregorianYear;

// Get first day of current month and set top row position
var firstDay = new Date(g.getFullYear(), g.getMonth(), 1);
var firstDayString = firstDay.toString();
//var monthStart = firstDayString.slice(0,3)

if (firstDayString.match(/sun/i)) {
  var monthPosition = 0;
};
if (firstDayString.match(/mon/i)) {
  var monthPosition = 1;
};
if (firstDayString.match(/tue/i)) {
  var monthPosition = 2;
};
if (firstDayString.match(/wed/i)) {
  var monthPosition = 3;
};
if (firstDayString.match(/thu/i)) {
  var monthPosition = 4;
};
if (firstDayString.match(/fri/i)) {
  var monthPosition = 5;
};
if (firstDayString.match(/sat/i)) {
  var monthPosition = 6;
};

// Check if leap year, returns true or false
function leapYear(year){
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
};

var gregorianLeap = leapYear();

// Set month length and previous month length values
if (gregorianString.match(/jan/i)) {
  var monthLength = 31;
  var lastMonthLength = 31;//dec
};
if (gregorianString.match(/feb/i) && gregorianLeap === false) {
  var monthLength = 28;
  var lastMonthLength = 31;//jan
};
if (gregorianString.match(/feb/i) && gregorianLeap === true) {
  var monthLength = 29;
  var lastMonthLength = 31;//jan
};
if (gregorianString.match(/mar/i) && gregorianLeap === false) {
  var monthLength = 31;
  var lastMonthLength = 28;//feb non leap
};
if (gregorianString.match(/mar/i) && gregorianLeap === true) {
  var monthLength = 31;
  var lastMonthLength = 29;//feb leap
};
if (gregorianString.match(/apr/i)) {
  var monthLength = 30;
  var lastMonthLength = 31;//mar
};
if (gregorianString.match(/may/i)) {
  var monthLength = 31;
  var lastMonthLength = 30;//apr
};
if (gregorianString.match(/jun/i)) {
  var monthLength = 30;
  var lastMonthLength = 31;//may
};
if (gregorianString.match(/jul/i)) {
  var monthLength = 31;
  var lastMonthLength = 30;//jun
};
if (gregorianString.match(/aug/i)) {
  var monthLength = 31;
  var lastMonthLength = 31;//jul
};
if (gregorianString.match(/sep/i)) {
  var monthLength = 30;
  var lastMonthLength = 31;//aug
};
if (gregorianString.match(/oct/i)) {
  var monthLength = 31;
  var lastMonthLength = 30;//sept
};
if (gregorianString.match(/nov/i)) {
  var monthLength = 30;
  var lastMonthLength = 31;//oct
};
if (gregorianString.match(/dec/i)) {
  var monthLength = 31;
  var lastMonthLength = 30;//nov
};
