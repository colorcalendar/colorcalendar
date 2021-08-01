// Create and display the calendar tables
import {
    leapYear,
    currentDayArray,
    nameOfMonth,
    dayNumberMonth,
    dayOfWeek,
    shortDayNames,
    colorCalendarDate
} from "/color-calendar-date.js";
import {
    gregorianDate,
    gregorianDayOfMonth,
    monthPosition,
    monthLength,
    lastMonthLength,
    gregorianWeekdays,
    shortWeekdays
} from "/gregorian-date.js";

// Varables for tables
var tableRows = 1;
var tableColumns = 1;
var tableName = "";
var tableClass = "";
var cellName = "";
var counter = 0;
var defaultCalendar = "color";

displayColorCalander();

//console.log(gregorianWeekdays);
//function abbreviatedWeekdays() {
  //
//}



function displayColorCalander() {
    headerTable();
    // Check for leap year
    if (leapYear === 0) {
        weekdaysTable();
        grid5x7();
    } else {
        weekdaysTableLeap();
        grid6x6();
    };
    footerTable();
    dayBackgroundColor();
    resizeStage();
}

function displayGregorianCalander() {
    gregorianHeader();
    weekdaysGregorian();
    grid7x6();
    gregorianFormat();
    dayBackgroundColor();
    gregorianFooter();
    resizeStage();
}

function dayBackgroundColor() {
    if (defaultCalendar === "color") {
        // Months start on 1 not 0
        var n = dayNumberMonth - 1;
    } else {
        // Gregorian
        var n = gregorianDayOfMonth + monthPosition - 1;
    }
    // Set background based on color
    if (dayOfWeek === "Redday") {
        document.getElementById("d" + n).className = "redday";
    }
    if (dayOfWeek === "Orangeday") {
        document.getElementById("d" + n).className = "orangeday";
    }
    if (dayOfWeek === "Yellowday") {
        document.getElementById("d" + n).className = "yellowday";
    }
    if (dayOfWeek === "Greenday") {
        document.getElementById("d" + n).className = "greenday";
    }
    if (dayOfWeek === "Blueday") {
        document.getElementById("d" + n).className = "blueday";
    }
    if (dayOfWeek === "Violetday") {
        document.getElementById("d" + n).className = "violetday";
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
}

// remove nodes
function clearNodes() {
    var id = ["#header-table",
        "#weekdays-table",
        "#calendar-table",
        "#footer-table"
    ];
    // loop through array and remove
    for (var i = 0; i < id.length; i++) {
        var element = document.querySelector(id[i]);
        element.remove();
    }
}

function gregorianHeader() {
    tableRows = 1;
    tableColumns = 1;
    tableName = "header-table";
    tableClass = "header";
    cellName = "header"; // name plus i++
    renderTable();
    //
    var body = document.getElementById("header0");
    var textNode = document.createTextNode(gregorianDate);
    body.appendChild(textNode);
}

function weekdaysGregorian() {
    tableRows = 1;
    tableColumns = 7;
    tableName = "weekdays-table";
    tableClass = "weekdays";
    cellName = "weekdays";
    renderTable();
    for (var i = 0; i < tableRows * tableColumns; i++) {
        var body = document.getElementById(cellName + i);
        // Abbreviate the weekdays if vertical, Monday is MON, etc..
        if (window.innerHeight < window.innerWidth) {
            //horizontal
            var textNode = document.createTextNode(gregorianWeekdays[i]);
        } else {
          //vertical
            var textNode = document.createTextNode(shortWeekdays[i]);
        };
        body.appendChild(textNode);
    }
}

function gregorianFormat() {
    // main month, plus 1 for position, days start on 1 not 0
    var startPlace = monthPosition;
    for (var i = 0; i < monthLength; i++) {
        document.getElementById("d" + startPlace).textContent = i + 1;
        startPlace++;
    }

    // top row, fill from previous month
    var remainTopRow = monthPosition - 1;
    var topRowLength = lastMonthLength;
    for (var i = remainTopRow; i >= 0; i--) {
        document.getElementById("d" + remainTopRow).textContent = topRowLength;
        document.getElementById("d" + remainTopRow).className = "day-gray";
        remainTopRow--;
        topRowLength--;
    }

    // bottom row
    // 42 size is grid, but plus 1 for position
    var remainingDays = 43 - monthLength - monthPosition;
    var lastRow = monthPosition + monthLength;
    // Days start on 1 not 0
    for (var i = 1; i < remainingDays; i++) {
        document.getElementById("d" + lastRow).textContent = i;
        document.getElementById("d" + lastRow).className = "day-gray";
        lastRow++;
    }
};

function gregorianFooter() {
    tableRows = 1;
    tableColumns = 1;
    tableName = "footer-table";
    tableClass = "footer";
    cellName = "footer";
    renderTable();
    var body = document.getElementById("footer0");
    // Create anchor element.
    var a = document.createElement('a');
    a.setAttribute("id", "footer-link");
    a.title = "Click to change formats";
    a.href = "#";
    // create Text Node, add date
    var textNode = document.createTextNode(colorCalendarDate);
    a.appendChild(textNode);
    body.appendChild(a);
    // Add function to link
    // Changes calendar from Color to standard Gregorian
    document.getElementById("footer-link").onclick = function() {
        clearNodes();
        defaultCalendar = "color";
        displayColorCalander();
    };
};

function headerTable() {
    tableRows = 1;
    tableColumns = 1;
    tableName = "header-table";
    tableClass = "header";
    cellName = "header"; // name plus i++
    renderTable();
    //
    var body = document.getElementById("header0");
    var textNode = document.createTextNode(colorCalendarDate);
    body.appendChild(textNode);
};

function weekdaysTable() {
    tableRows = 1;
    tableColumns = 5;
    tableName = "weekdays-table";
    tableClass = "weekdays";
    cellName = "weekdays";
    renderTable();
    for (var i = 0; i < tableRows * tableColumns; i++) {
        var body = document.getElementById(cellName + i);
        // Abbreviate if vertical, Redday is RED, etc..
        if (window.innerHeight < window.innerWidth) {
            //horizontal
            var textNode = document.createTextNode(currentDayArray[i]);
        } else {
          //vertical
            var textNode = document.createTextNode(shortDayNames[i]);
        };
        body.appendChild(textNode);
    }
};

function weekdaysTableLeap() {
    tableRows = 1;
    tableColumns = 6;
    tableName = "weekdays-table";
    tableClass = "weekdays";
    cellName = "weekdays";
    renderTable();
    for (var i = 0; i < tableRows * tableColumns; i++) {
        var body = document.getElementById(cellName + i);
        var textNode = document.createTextNode(currentDayArray[i]);
        body.appendChild(textNode);
    }
};

function grid5x7() {
    tableRows = 7;
    tableColumns = 5;
    tableName = "calendar-table";
    tableClass = "day";
    cellName = "d";
    renderTable();
    for (var i = 0; i < tableRows * tableColumns; i++) {
        var body = document.getElementById(cellName + i);
        var textNode = document.createTextNode(i + 1);
        body.appendChild(textNode);
    }
};

function grid6x6() {
    tableRows = 6;
    tableColumns = 6;
    tableName = "calendar-table";
    tableClass = "day";
    cellName = "d";
    renderTable();
    for (var i = 0; i < tableRows * tableColumns; i++) {
        var body = document.getElementById(cellName + i);
        var textNode = document.createTextNode(i + 1);
        body.appendChild(textNode);
    }
};

function grid7x6() {
    tableRows = 6;
    tableColumns = 7;
    tableName = "calendar-table";
    tableClass = "day";
    cellName = "d";
    renderTable();
    for (var i = 0; i < tableRows * tableColumns; i++) {
        var body = document.getElementById(cellName + i);
        var textNode = document.createTextNode(i + 1);
        body.appendChild(textNode);
    }
};

function footerTable() {
    tableRows = 1;
    tableColumns = 1;
    tableName = "footer-table";
    tableClass = "footer";
    cellName = "footer";
    renderTable();
    var body = document.getElementById("footer0");
    // Create anchor element.
    var a = document.createElement('a');
    a.setAttribute("id", "footer-link");
    a.title = "Click to change formats";
    a.href = "#";
    // create Text Node, add date
    var textNode = document.createTextNode(gregorianDate);
    a.appendChild(textNode);
    body.appendChild(a);
    // Add function to link
    // Changes calendar from Color to standard Gregorian
    document.getElementById("footer-link").onclick = function() {
        clearNodes();
        defaultCalendar = "gregorian";
        displayGregorianCalander();
    };
};

// table builder
function renderTable() {
    var body = document.getElementById("calendar-div"); //parent node
    var counter = 0; //counter
    var table = document.createElement("table"); // create <table>
    var tbody = document.createElement("tbody"); // create <tbody>
    table.setAttribute("id", tableName); // attach ID
    //table.classList.add(tableClass) // attach Class
    for (var j = 0; j < tableRows; j++) {
        var tr = document.createElement("tr"); // create <tr> element
        for (var i = 0; i < tableColumns; i++) {
            var td = document.createElement("td"); // create <td> element
            td.setAttribute("id", cellName + counter); // attach ID
            td.classList.add(tableClass); // attach Class
            tr.appendChild(td); // append cell <td> to row <tr>
            counter++;
        }
        tbody.appendChild(tr); // append <tr> to <tbody>
    }
    table.appendChild(tbody); // append <tbody> to <table>
    table.setAttribute("border", "1"); // sets the border attribute
    body.appendChild(table); // append <table> to <parent>
};

function resizeStage() {
    // Responsive layout based on windows size and orientation, not perfect but good enough
    if (window.innerHeight < window.innerWidth) {
        // Horizontal
        document.getElementsByClassName("wrapper")[0].style.height = window.innerHeight + "px";
        document.getElementsByClassName("wrapper")[0].style.width = window.innerWidth + "px";
        document.getElementsByClassName("calendar")[0].style.height = window.innerHeight - 110 + "px";
        document.getElementsByClassName("calendar")[0].style.width = "750px";
        document.getElementById("header-table").style.height = "20px";
        document.getElementById("weekdays-table").style.height = "20px";
        document.getElementById("footer-table").style.height = "20px";
    } else {
        // Vertical
        document.getElementsByClassName("wrapper")[0].style.height = window.innerHeight + "px";
        document.getElementsByClassName("wrapper")[0].style.width = window.innerWidth + "px";
        document.getElementsByClassName("calendar")[0].style.width = window.innerWidth + "px";
        document.getElementsByClassName("calendar")[0].style.height = window.innerHeight / 1.25 + "px";
        document.getElementById("header-table").style.height = "20px";
        document.getElementById("header-table").style.fontSize = "3em";
        document.getElementById("weekdays-table").style.height = "20px";
        document.getElementById("weekdays-table").style.fontSize = "1.5em";
        document.getElementById("footer-table").style.height = "20px";
        document.getElementById("footer-table").style.fontSize = "2.3em";
    };
}
