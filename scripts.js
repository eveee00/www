// i didn't want to rewrite the whole js file, so i'm gonna just remove stuff like the tab system later.
// update: i remade the tab system.
// i also removed some of the footer text about the windows OOBE, since it wasn't even remotely funny.

// i removed this and it broke a bunch of stuff, so i'll just deal with the shitty error i get in the console.
//stuff for randomized footer

/*
NOTE:
I definetly need to move this to some api of some sorts. maybe just another github pages website that gives the quote in plaintext. this js file is getting too big.
*/

/*
var messages = [
    { text: "note: :3" },
    { text: ":)", url: "/media/mystery.mp4" },
    { text: "tip: did you know? refreshing this site changes this text." },
    { text: "tip: don't mine at night" , url: "https://www.youtube.com/watch?v=X_XGxzMrq04"},
    { text: "note: well here we are again, it's always such a pleasure...", url: "https://www.youtube.com/watch?v=yGZr98GEs0U" },
    { text: "note: huge success" },
    { text: "note: sometimes it's ok to just guhhhhh" },
    { text: "note: in soviet russia, arch installs you." },
    { text: "note: ¯\\_(ツ)_/¯" },
    { text: "99 DAWWllers", url: "https://www.youtube.com/watch?v=vZOu7zhxGeI"},
    { text: "100 sachne 80", url: "https://www.youtube.com/watch?v=R-v2Ao8h8Tw"},
    { text: "note: i had to rewrite this whole mess since i didn't understand my own codebase" },
    { text: "note: some of the quotes here were stolen from the loadingquotes vencord plugin (sorry)" },
    { text: "thinking of a funny quote..." },
    { text: "welcome to nginx!" },
    { text: "�(repeat like 30 times)" },
    { text: "i don't remember this being in the ost", url: "https://www.youtube.com/watch?v=rGITOAjbABc" },
    { text: "one, two, uhhh... i forgot, 4...", url: "https://www.youtube.com/watch?v=jpw2ebhTSKs"},
    { text: "why did i even put this in?", url: "https://www.youtube.com/watch?v=WHkewGc9n58"},
    { text: "O-oooooooooo AAAAE-A-A-I-A-U- JO-oooooooooooo AAE-O-A-A-U-U-A- E-eee-ee-eee AAAAE-A-E-I-E-A-JO-ooo-oo-oo-oo EEEEO-A-AAA-AAAA", url: "https://www.youtube.com/watch?v=h-mUGj41hWA" },
    { text: "i67 was here", font: "Odibee Sans" },
    { text: "note: the fake geometry dash ost is fire", url: "https://www.youtube.com/watch?v=AS58aeJQI4Y" },
    { text: "ALL MY FELLAS", url: "https://www.youtube.com/watch?v=cygu65ytwTc"},
    { text: "note: it starts with one thing...", url: "https://www.youtube.com/watch?v=M9J6DKJXoKk" },
    { text: "nothing feels like home", url: "https://www.youtube.com/watch?v=20dIl2fl5GM" },
    { text: "GEOMETRY DASH", url: "/media/gd.mp3" },
    { text: "note: awaken cooked with this one", url: "https://www.youtube.com/watch?v=5kca9KVKy04"},
    { text: "ost 07", url: "https://www.youtube.com/watch?v=utP11PQEsZw"},
    { text: "my windows after i install free minecraft", url: "https://www.youtube.com/watch?v=5BZLz21ZS_Y" },
    { text: "the 4 peters if they were cool", url: "https://www.youtube.com/watch?v=Si8PyULlt7Q"},
    { text: "99 DAWWllers, but everywhere", url: "https://www.youtube.com/watch?v=FmW6RNT2jCs"},
    { text: "note: mobile view is only borken in safari, so i'm not bothering to fix it."},
    { text: "strawberries", url: "https://www.youtube.com/watch?v=1rwAvUvvQzQ"},
];

*/

var messages = [
    { text: "osu! free download mod apk 2028 no virus mcaffee clean 100%" }
];
function messagesindex() { //useful debugging function: check how many messages there are
    console.log("the messages array has " + (messages.length - 1) + " items");

    // Count and log the number of messages with a link
    var messagesWithLink = messages.filter(message => message.url).length;
    console.log("the messages array has " + messagesWithLink + " items with a link");
}

function showMessages() { //useful debugging function: show all messages in the console
    console.log("here are the messages: ");
    for (var i = 0; i < messages.length; i++) {
        var messageText = i + ": '" + messages[i].text + "'";
        if (messages[i].url) {
            messageText += " HAS LINK: " + messages[i].url;
        }
        console.log(messageText);
    }
}

// Define the function to update the footer message
function updateFooterMessage(index) {
    if (index === 'last') {
        index = messages.length - 1;
    }
    if (typeof index !== 'number') {
        console.error("Invalid input. Please provide a number as the index.");
        return;
    }
    if (index < 0 || index >= messages.length) {
        console.error("Invalid index. Please provide a valid index between 0 and " + (messages.length - 1));
        return;
    }
    
    var randomMessage = messages[index];
    var messageContainer = document.querySelector('.message-container');
    messageContainer.innerHTML = '';

    if (randomMessage.url) {
        var link = document.createElement('a');
        link.href = randomMessage.url;
        link.textContent = randomMessage.text;
        link.style.color = "white"; // Change the color if needed
        link.target = "_blank"; //makes link open in new tab hopefully
        messageContainer.appendChild(link);
    } else {
        messageContainer.appendChild(document.createTextNode(randomMessage.text));
    }
    if (randomMessage.font) {
        messageContainer.style.fontFamily = randomMessage.font;
        messageContainer.style.fontSize = "25px";
    }
    console.log("message updated to: " + index);
}
// Example usage: updateFooterMessage(0); // This will update the footer with the first message

document.addEventListener('DOMContentLoaded', function() {
    updateFooterMessage(Math.floor(Math.random() * messages.length));
});

document.addEventListener('DOMContentLoaded', function() {
    
    
    //tab stuff
    document.addEventListener('DOMContentLoaded', function() {
        // Open the "info" tab by default
        openTab(null, 'info');
    
        // Check if there's a last opened tab stored in localStorage
        var lastTab = localStorage.getItem('lastTab');
        console.log('last tab from localStorage:', lastTab)
        if (lastTab) {
            openTab(null, lastTab);
        } else {
            console.error('No last tab found in localStorage.');
        }
    
        // Add event listeners to tab buttons to store the last opened tab
        var tablinks = document.getElementsByClassName('tablinks');
        for (var i = 0; i < tablinks.length; i++) {
            tablinks[i].addEventListener('click', function(evt) {
                var cityName = evt.currentTarget.getAttribute('data-city');
                console.log('Clicked tab data-city:', cityName);
                localStorage.setItem('lastTab', cityName);
            });
        }
    });
});


function randomlink() {
    console.log("randomizing link for music...")
    window.open(randomlinks[Math.floor(Math.random() * randomlinks.length)]);
}

console.warn("you nosy little shit, now close the console! >:3")
// LMAOOOO I MADE A SPELLING MISTAKE AND ONLY NOW NOTICED IT
console.warn("unless you actually know what you're doing (unlike me)")
console.warn("by the way, you should NEVER paste stuff into here unless you exactly know what it does.")

// this is old stuff (for the old tab system.) Maybe I'll reuse this for the new hamburger menu.

function showSection(sectionId, element) {
    var sections = document.querySelectorAll('.main');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';

    var tabs = document.querySelectorAll('.tab-bar a');
    tabs.forEach(function(tab) {
        tab.classList.remove('active-tab');
    });
    element.classList.add('active-tab');
    
    toggleMenu()
}

function toggleMenu() {
    var tabs = document.querySelector('.tab-bar');
    tabs.classList.toggle('active'); // Toggle the active class to show/hide tabs
}

function showSection(sectionId, element) {
    // Hide all sections
    document.querySelectorAll('.main').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';

    // Remove active class from all tabs
    document.querySelectorAll('.tab-bar a').forEach(tab => {
        tab.classList.remove('active');
    });

    // Add active class to the clicked tab
    element.classList.add('active');
}