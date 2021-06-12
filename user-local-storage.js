// Sets a random username and stores it in localStorage
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


    // Date object
    var localStorageTime = new Date();
    var pageCountTime = localStorageTime.getTime()

    var lastPageTime = localStorage.getItem("local-time");

    localStorage.setItem('local-time', pageCountTime);

    //Add to counter
    var currentPageView = localStorage.getItem("visitor-count");
    var addAPageView = ++currentPageView;
    localStorage.setItem('visitor-count', currentPageView);

    // Format the seconds and minutes to 1 decimal
    var secondsSinceVisit = (pageCountTime - lastPageTime) / 1000;
    var secondsSinceVisitFixed = Number.parseFloat(secondsSinceVisit).toFixed(1);
    var minutesSinceVisit = Number.parseFloat(secondsSinceVisit / 60).toFixed(1);

    if (secondsSinceVisit < 60) {
        // seconds
        document.getElementById('toolbar').textContent =
            "Welcome back " + localStorage.getItem("user-name") +
            ". This is visit number " + currentPageView +
            ". It's been " + secondsSinceVisitFixed +
            " seconds since lasting visiting us from " + localStorage.getItem("user-location");
    } else
    // minutes
    {
        document.getElementById('toolbar').textContent =
            "Welcome back " + localStorage.getItem("user-name") +
            ". This is visit number " + currentPageView +
            ". It's been " + minutesSinceVisit +
            " minutes since lasting visiting us from " + localStorage.getItem("user-location");
    }
}