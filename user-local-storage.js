// Sets a random username and stores it in localStorage and counts repeat visits
try {
    // Check if local storage is enabled
    if (window.localStorage) {

        // Check if localStorage has existing visitor-count
        if (!localStorage.getItem('visitor-count')) {
            populateLocalStorage(); // populate if it's the first visit
        } else {
            setVisitorCount(); // if it's repeat visit add to counter
        }
    } else {
        document.getElementById('toolbar').textContent = "Local Storage Disabled";
    }
} catch (e) {
    // Statement to handle errors
    document.getElementById('toolbar').textContent = "Unknown error";
}


function populateLocalStorage() {

    // Arrays to randomly mix together
    var colorArray = ['Blue',
        'Red',
        'Green',
        'Yellow',
        'Orange',
        'Purple'
    ];

    var emotionArray = ['Ticklish',
        'Thoughtful',
        'Loving',
        'Happy',
        'Playful',
        'Comforting',
        'Singing',
        'Greatful',
        'Humorous',
        'Forgiving',
        'Brave',
        'Curious'
    ];

    var animalArray = ['Elephant',
        'Rhino',
        'Shark',
        'Dragonfly',
        'Owl',
        'Bear',
        'Grasshopper',
        'Lion',
        'Dolphin',
        'Eagle',
        'Rooster',
        'Raven'
    ];

    var locationArray = ['Sirius',
        'Canopus',
        'Arcturus',
        'Rigil Kentaurus',
        'Vega',
        'Capella',
        'Rigel',
        'Procyon',
        'Achernar',
        'Betelgeuse',
        'Hadar',
        'Altair'
    ];

    // Assign random values from arrays
    var randomEmotion = emotionArray[Math.floor(Math.random() * emotionArray.length)];
    var randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    var randomAnimal = animalArray[Math.floor(Math.random() * animalArray.length)];
    var randomLocation = locationArray[Math.floor(Math.random() * locationArray.length)];

    // Concatenate random values from arrays
    var uniqueUserName = randomEmotion.concat(' ' + randomColor, ' ' + randomAnimal);

    // Welcome message
    var welcomeMessage = 'Welcome visitor, you shall be known as the: ' + " " +
        uniqueUserName + " " + ' from ' + " " + randomLocation;

    // Date object
    var localStorageTime = new Date();
    var pageCountTime = localStorageTime.getTime()

    localStorage.setItem('local-time', pageCountTime);
    localStorage.setItem('user-name', uniqueUserName);
    localStorage.setItem('user-location', randomLocation);
    localStorage.setItem('visitor-count', "1");
    var currentPageView = localStorage.getItem("visitor-count");

    document.getElementById('toolbar').textContent = welcomeMessage;
}

function setVisitorCount() {

    // Date object, time
    var localStorageTime = new Date();
    var pageCountTime = localStorageTime.getTime()

    // local storage, last page visit time
    var lastPageTime = localStorage.getItem("local-time");
    localStorage.setItem('local-time', pageCountTime);

    //Add to counter
    var currentPageView = localStorage.getItem("visitor-count");
    var addAPageView = ++currentPageView;
    localStorage.setItem('visitor-count', currentPageView);

    // Format so there are no decimal points
    var secondsSinceVisit = (pageCountTime - lastPageTime) / 1000;
    var secondsSinceVisitFixed = Number.parseFloat(secondsSinceVisit).toFixed(0);
    var minutesSinceVisit = Number.parseFloat(secondsSinceVisit / 60).toFixed(0);

    // Format based on seconds, minutes
    var grammarForTime = "";
    if (secondsSinceVisitFixed < 2 && secondsSinceVisitFixed >= 1) {
        // the grammar is 1 second, not 1 seconds
         grammarForTime= secondsSinceVisitFixed + " second";
    } 
   else if (secondsSinceVisitFixed < 60 || (secondsSinceVisitFixed > 0 && secondsSinceVisitFixed <1) ) {
       grammarForTime= secondsSinceVisitFixed +  " seconds";
    } 
   else if (secondsSinceVisitFixed > 60 && secondsSinceVisitFixed < 120 ) {
      grammarForTime= minutesSinceVisit + " minutes";
    }
   else if (secondsSinceVisitFixed >= 120 ) {
      grammarForTime= minutesSinceVisit + " minutes";
    }
        
// Display in browser
document.getElementById('toolbar').textContent =
            "Welcome back " + localStorage.getItem("user-name") +
            ". This is visit number " + currentPageView +
            ". It's been " +  grammarForTime +
            " since lasting visiting us from " + localStorage.getItem("user-location");
}
