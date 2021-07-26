// Create and display the Color Calendar grid table
import {
    leapYear,
    currentDayArray,
    colorCalendarDate
} from "/color-calendar-date.js";
import {
    gregorianDate
} from "/gregorian-date.js";

// Check for leap year
if (leapYear === 0) {
    headerTable();
    weekdaysNonLeap();
    fiveBySevenGrid();
    footerTable();
} else {
    headerTable();
    weekdaysLeapYear();
    sixBySixGrid();
    footerTable();
};

// Responsive layout based on windows size and orientation
if (window.innerHeight < window.innerWidth) {
    // Horizontal
    document.getElementsByClassName("wrapper")[0].style.height = window.innerHeight + "px";
    document.getElementsByClassName("wrapper")[0].style.width = window.innerWidth + "px";
    document.getElementsByClassName("calendar")[0].style.height = window.innerHeight - 110 + "px";
    document.getElementsByClassName("calendar")[0].style.width = "750px";
    document.getElementsByClassName("header")[0].style.height = "20px";
    document.getElementsByClassName("weekdays")[0].style.height = "20px";
    document.getElementsByClassName("footer")[0].style.height = "20px";
} else {
    // Vertical
    document.getElementsByClassName("wrapper")[0].style.height = window.innerHeight + "px";
    document.getElementsByClassName("wrapper")[0].style.width = window.innerWidth + "px";
    document.getElementsByClassName("calendar")[0].style.width = window.innerWidth + "px";
    document.getElementsByClassName("calendar")[0].style.height = window.innerHeight / 1.25 + "px";
    document.getElementsByClassName("header")[0].style.height = "110px";
    document.getElementsByClassName("header")[0].style.fontSize = "3em";
    document.getElementsByClassName("weekdays")[0].style.height = "100px";
    document.getElementsByClassName("weekdays")[0].style.fontSize = "2.3em";
    document.getElementsByClassName("footer")[0].style.height = "110px";
    document.getElementsByClassName("footer")[0].style.fontSize = "2.3em";
};

// 5 x 7
function fiveBySevenGrid() {
    // reference for the body
    var gridBody = document.getElementById("calendar-div");

    // create <table> and <tbody> elements
    var gridTable = document.createElement("table");
    var gridTableBody = document.createElement("tbody");
    gridTable.setAttribute("id", "calendar-table");

    // day count
    var dayCount = 1;

    // create cells
    for (var j = 0; j < 7; j++) {
        // create <tr> element
        var cellR = document.createElement("tr");

        for (var i = 0; i < 5; i++) {
            // create <td> element
            var cellD = document.createElement("td");
            cellD.setAttribute("id", "d" + dayCount);
            cellD.classList.add("day");
            // create Text Node and add day number
            var textNode = document.createTextNode(dayCount);
            dayCount++;
            // append Text Node to cell <td>
            cellD.appendChild(textNode);
            // append cell <td> to row <tr>
            cellR.appendChild(cellD);
        }
        // appends row <tr> into <tbody>
        gridTableBody.appendChild(cellR);
    }

    // append <tbody> to <table>
    gridTable.appendChild(gridTableBody);
    // append <table> to <body>
    gridBody.appendChild(gridTable);
    // sets the border attribute of mytable to 2;
    gridTable.setAttribute("border", "1");

};

// 5 x 1
function weekdaysNonLeap() {
    // reference for the body
    var gridBody = document.getElementById("calendar-div");

    // create <table> and <tbody> elements
    var gridTable = document.createElement("table");
    var gridTableBody = document.createElement("tbody");
    gridTable.setAttribute("id", "calendar-days");
    gridTable.classList.add("weekdays")

    // day count
    var dayCount = 0;

    // create cells
    for (var j = 0; j < 1; j++) {
        // create <tr> element
        var cellR = document.createElement("tr");

        for (var i = 0; i < 5; i++) {
            // create <td> element
            var cellD = document.createElement("td");
            cellD.setAttribute("id", "c" + dayCount);
            cellD.classList.add("day-color");
            // create Text Node and add day number
            var textNode = document.createTextNode(currentDayArray[dayCount]);
            dayCount++;
            // append Text Node to cell <td>
            cellD.appendChild(textNode);
            // append cell <td> to row <tr>
            cellR.appendChild(cellD);
        }
        // appends row <tr> into <tbody>
        gridTableBody.appendChild(cellR);
    }

    // append <tbody> to <table>
    gridTable.appendChild(gridTableBody);
    // append <table> to <body>
    gridBody.appendChild(gridTable);
    // sets the border attribute
    gridTable.setAttribute("border", "1");

};

// 6 x 1
function weekdaysLeapYear() {
    // reference for the body
    var gridBody = document.getElementById("calendar-div");

    // create <table> and <tbody> elements
    var gridTable = document.createElement("table");
    var gridTableBody = document.createElement("tbody");
    gridTable.setAttribute("id", "calendar-days");
    gridTable.classList.add("weekdays")

    // day count
    var dayCount = 0;

    // create cells
    for (var j = 0; j < 1; j++) {
        // create <tr> element
        var cellR = document.createElement("tr");

        for (var i = 0; i < 6; i++) {
            // create <td> element
            var cellD = document.createElement("td");
            cellD.setAttribute("id", "c" + dayCount);
            cellD.classList.add("day-color");
            // create Text Node and add day number
            var textNode = document.createTextNode(currentDayArray[dayCount]);
            dayCount++;
            // append Text Node to cell <td>
            cellD.appendChild(textNode);
            // append cell <td> to row <tr>
            cellR.appendChild(cellD);
        }
        // appends row <tr> into <tbody>
        gridTableBody.appendChild(cellR);
    }

    // append <tbody> to <table>
    gridTable.appendChild(gridTableBody);
    // append <table> to <body>
    gridBody.appendChild(gridTable);
    // sets the border attribute
    gridTable.setAttribute("border", "1");

};

// 6 x 6
function sixBySixGrid() {
    // reference for the body
    var gridBody = document.getElementById("calendar-div");

    // create <table> and <tbody> elements
    var gridTable = document.createElement("table");
    var gridTableBody = document.createElement("tbody");
    gridTable.setAttribute("id", "calendar-table");

    // day count
    var dayCount = 1;

    // create cells
    for (var j = 0; j < 6; j++) {
        // create <tr> element
        var cellR = document.createElement("tr");

        for (var i = 0; i < 6; i++) {
            // create <td> element
            var cellD = document.createElement("td");
            cellD.setAttribute("id", "d" + dayCount);
            cellD.classList.add("day");
            // create Text Node and add day number
            var textNode = document.createTextNode(dayCount);
            dayCount++;
            // append Text Node to cell <td>
            cellD.appendChild(textNode);
            // append cell <td> to row <tr>
            cellR.appendChild(cellD);
        }
        // appends row <tr> into <tbody>
        gridTableBody.appendChild(cellR);
    }

    // append <tbody> to <table>
    gridTable.appendChild(gridTableBody);
    // append <table> to <body>
    gridBody.appendChild(gridTable);
    // sets the border attribute of mytable to 2;
    gridTable.setAttribute("border", "1");
};

// 1 x 1 header displaying Color Calandar date
function headerTable() {
    // reference for the body
    var gridBody = document.getElementById("calendar-div");

    // create <table> and <tbody> elements
    var gridTable = document.createElement("table");
    var gridTableBody = document.createElement("tbody");
    gridTable.setAttribute("id", "color-date");
    gridTable.classList.add("header");

    // day count
    var dayCount = 0;

    // create cells
    for (var j = 0; j < 1; j++) {
        // create <tr> element
        var cellR = document.createElement("tr");

        for (var i = 0; i < 1; i++) {
            // create <td> element
            var cellD = document.createElement("td");
            cellD.setAttribute("id", "c" + dayCount);
            cellD.classList.add("day-header");

            // create Text Node and add Color Calendar date
            var textNode = document.createTextNode(colorCalendarDate);
            dayCount++;
            // append Text Node to cell <td>
            cellD.appendChild(textNode);
            // append cell <td> to row <tr>
            cellR.appendChild(cellD);
        }
        // appends row <tr> into <tbody>
        gridTableBody.appendChild(cellR);
    }

    // append <tbody> to <table>
    gridTable.appendChild(gridTableBody);
    // append <table> to <body>
    gridBody.appendChild(gridTable);
    // sets the border attribute of mytable to 2;
    gridTable.setAttribute("border", "1");
};

// 1 x 1 footer, gregorian date
function footerTable() {
    // reference for the body
    var gridBody = document.getElementById("calendar-div");

    // create <table> and <tbody> elements
    var gridTable = document.createElement("table");
    var gridTableBody = document.createElement("tbody");
    gridTable.setAttribute("id", "gregorian-date");
    gridTable.classList.add("footer");

    // day count
    var dayCount = 0;

    // create cells
    for (var j = 0; j < 1; j++) {
        // create <tr> element
        var cellR = document.createElement("tr");

        for (var i = 0; i < 1; i++) {
            // create <td> element
            var cellD = document.createElement("td");
            cellD.setAttribute("id", "c" + dayCount);
            cellD.classList.add("day-footer");

            // create Text Node and add Color Calendar date
            var textNode = document.createTextNode(gregorianDate);
            dayCount++;
            // append Text Node to cell <td>
            cellD.appendChild(textNode);
            // append cell <td> to row <tr>
            cellR.appendChild(cellD);
        }
        // appends row <tr> into <tbody>
        gridTableBody.appendChild(cellR);
    }
    // append <tbody> to <table>
    gridTable.appendChild(gridTableBody);
    // append <table> to <body>
    gridBody.appendChild(gridTable);
    // sets the border attribute of mytable to 2;
    gridTable.setAttribute("border", "1");
};
