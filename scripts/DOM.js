// Paragraph stating how nav was made
var statement = document.createElement("p");                 // Create a <li> node
var textnode = document.createTextNode("This nav was built using DOM Manipulation.");         // Create a text node
statement.appendChild(textnode);                              // Append the text to <li>
document.getElementById("introPara").appendChild(statement); 
console.log(statement);

// Request JSON file to create nav with DOM Manipulation
var newNav = new XMLHttpRequest();
var requestURL = 'JSON/link-names.json';

//HTTP call using the requestURL variable
newNav.open("Get", requestURL, true);
newNav.send();

//Functions that parses string and displays output
newNav.onload = function parseNav() {
    var nav = JSON.parse(newNav.responseText);
    console.log(nav);
    var list = document.createElement("ul");
    for (var i = 0; i < nav.urlList.length; i++){
        var navItem = nav.urlList[i];
        list.appendChild(document.createElement("li"));
        i++;
    }
    document.getElementById("nav-menu").innerHTML = list;
}

// querySelector
var footerEL = document.querySelector("footer");
footerEL.innerHTML = "This footer is created using querySelector.<br><br>&copy; 2019 Breanna Hansen<br>CIT 261 Mobile Applications";

// createElement

