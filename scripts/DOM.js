// querySelector
var footerEL = document.querySelector("footer");
footerEL.innerHTML = "This footer is created using querySelector.<br><br>&copy; 2019 Breanna Hansen<br>CIT 261 Mobile Applications";

// createElement and appendChild - paragraph stating how nav was made
var statement = document.createElement("p");                 
var textnode = document.createTextNode("This nav was built using DOM Manipulation.");        
statement.appendChild(textnode);                        
document.getElementById("introPara").appendChild(statement); 
console.log(statement); 

// Request JSON file to create nav with DOM Manipulation
var newNav = new XMLHttpRequest();
var requestURL = 'JSON/link-names.json';

//HTTP call using the requestURL variable
newNav.open("Get", requestURL, true);
newNav.send();

// createElement for nav
newNav.onload = function parseNav() {
    var nav = JSON.parse(newNav.responseText);
    var myList = document.getElementById("navigation-menu");
    for (var i = 0; i < nav.urlList.length; i++) {
        //create <li>
        var list = document.createElement("li");
        list.style.padding = "10px";
        //create <a>
        var links = document.createElement("a");
        links.style.color = "#fff";
        links.href = nav.urlList[i].url;
        links.textContent = nav.urlList[i].name;
        //Add <a> to <li>
        list.appendChild(links);
        console.log(list);
        //Add <li> to #navigation-menu
        myList.appendChild(list);
    }
}

// removeChild
function removeItem() {
    var removeEL = document.getElementById("removeEL");
    removeEL.removeChild(removeEL.childNodes[3]);
}

// replaceChild()
function replaceItem() {
    var replaceEL = document.getElementById("replaceEL");
    var changeEL = replaceEL.children[1];
    var newListItem = document.createElement("li");
    newListItem.textContent = "Replaced item";
    replaceEL.replaceChild(newListItem, changeEL);
}

// cloneNode() 
var strong = document.querySelector('strong');
var copy = strong.cloneNode(true);
var cloneEL = document.getElementById('cloneEL');
cloneEL.appendChild(copy);