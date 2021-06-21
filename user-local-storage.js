//  localStorage, sets username and visitor count

try {
    // Check if visitor count exist
    if (!localStorage.getItem('ColorCalendar.eth.visits')) {
        setFirstUser(); // populate if first visit
    } else {
        setVisitorCount();
    }
} catch (e) {
    // Statement to handle errors
    document.getElementById('toolbar').textContent = "Error. Local Storage Disabled";
}

function setFirstUser() {

    // Arrays to randomly mix visitor names together
    var colorArray = ["Blue", "Red", "Green", "Yellow", "Orange", "Purple"];
    var emotionArray = ["Ticklish", "Thoughtful", "Loving", "Happy", "Playful", "Comforting", "Singing", "Greatful", "Humorous", "Forgiving", "Brave", "Curious"];
    var animalArray = ["Elephant", "Rhino", "Shark", "Dragonfly", "Owl", "Bear", "Grasshopper", "Lion", "Dolphin", "Eagle","Rooster", "Raven"];
    var starArray = ["Sirius", "Canopus", "Arcturus", "Rigil Kentaurus", "Vega", "Capella", "Rigel", "Procyon", "Achernar", "Betelgeuse", "Hadar", "Altair"];

    // Assign random values from arrays
    var userEmotion = emotionArray[Math.floor(Math.random() * emotionArray.length)];
    var userColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    var userAnimal = animalArray[Math.floor(Math.random() * animalArray.length)];
    var userStar = starArray[Math.floor(Math.random() * starArray.length)];

    // Concatenate into username
    var emotionColorAnimal = userEmotion.concat(' ' + userColor, ' ' + userAnimal);

    // Date object in seconds
    var newDateObject = new Date();
    var firstVisitTimestamp = newDateObject.getTime()

    // Format as JSON
    const newUserName = {
        name: emotionColorAnimal,
        location: userStar,
        firstvisit: firstVisitTimestamp
    };
    const usernameJSON = JSON.stringify(newUserName);

    // Set localstorage
    localStorage.setItem('ColorCalendar.eth', usernameJSON);
    localStorage.setItem('ColorCalendar.eth.visits', "1");
    localStorage.setItem('ColorCalendar.eth.lastdate', firstVisitTimestamp);

    // Display in browser
    document.getElementById('toolbar').textContent = "Welcome visitor, you shall be known as the: " + emotionColorAnimal + " from " + userStar;
}


function setVisitorCount() {

    // Parse JSON
    let userStats = localStorage.getItem("ColorCalendar.eth");
    let randomUser = JSON.parse(userStats);

    // Date object, time
    var localStorageTime = new Date();
    var pageCountTime = localStorageTime.getTime()

    // local storage, over right time
    var lastPageTime = localStorage.getItem('ColorCalendar.eth.lastdate');
    localStorage.setItem('ColorCalendar.eth.lastdate', pageCountTime);

    //Add to counter
    var currentPageView = localStorage.getItem("ColorCalendar.eth.visits");
    var addAPageView = ++currentPageView;
    localStorage.setItem('ColorCalendar.eth.visits', currentPageView);

    // Format so there are no decimal points
    var secondsSinceVisit = (pageCountTime - lastPageTime) / 1000;
    var secondsSinceVisitFixed = Number.parseFloat(secondsSinceVisit).toFixed(0);
    var minutesSinceVisit = Number.parseFloat(secondsSinceVisit / 60).toFixed(0);

    // Format grammar based on seconds, minutes
    var grammarForTime = "";
    if (secondsSinceVisitFixed < 2 && secondsSinceVisitFixed >= 1) {
        // the grammar is 1 second, not 1 seconds
        grammarForTime = secondsSinceVisitFixed + " second";
    } else if (secondsSinceVisitFixed < 60 || (secondsSinceVisitFixed > 0 && secondsSinceVisitFixed < 1)) {
        grammarForTime = secondsSinceVisitFixed + " seconds";
    } else if (secondsSinceVisitFixed > 60 && secondsSinceVisitFixed < 120) {
        grammarForTime = minutesSinceVisit + " minute";
    } else if (secondsSinceVisitFixed >= 120) {
        grammarForTime = minutesSinceVisit + " minutes";
    }

    // Display in browser
// window.document.title = "hi";
    document.getElementById("toolbar").innerHTML =
        "Welcome back " + randomUser.name + ". This is visit number " + currentPageView +
        ". It's been " + grammarForTime + " since lasting visiting us from " + randomUser.location;
}