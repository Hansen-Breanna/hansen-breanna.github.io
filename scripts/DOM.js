// Request JSON file to create nav with DOM Manipulation
var newNav = new XMLHttpRequest();
var requestURL = 'JSON/link-names.json';

//HTTP call using the requestURL variable
newNav.open("Get", requestURL, true);
newNav.send();

//Functions that parses string and displays output
newNav.onload = function parseNav() {
    var nav = JSON.parse(newNav.responseText);
    var navIntro = 
    var list = document.createElement("ul");                 // Create a <li> node
    var textnode = document.createTextNode("Water");         // Create a text node
    list.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("nav-menu").appendChild(list); 
    console.log(nav);
}