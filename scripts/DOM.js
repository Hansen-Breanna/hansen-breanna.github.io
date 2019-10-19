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
    var list = document.createElement("li");
    var links = list.appendChild(document.createElement("a"));
    var string = "";
    for (var i = 0; i < nav.urlList.length; i++){
        var navItem = nav.urlList[i];
        var list = document.createElement("li");
        var links = list.appendChild(document.createElement("a"));
        links.href = navItem.url;
        var linkNodes = document.createTextNode(navItem.name);
        links.appendChild(linkNodes);
        console.log(list);
    }
    document.getElementById("nav-menu").innerHTML = JSON.stringify(list);
} 

/* // createElement for nav
newNav.onload = function parseNav() {
    var nav = JSON.parse(newNav.responseText);
    var list = document.createElement("li");
    var string = "";
    for (var i = 0; i < nav.urlList.length; i++){
        var navItem = nav.urlList[i];
        list.appendChild(document.createElement("a"));
        string += "<a style='color:#fff;' href='" + navItem.url + "'>" + navItem.name + "</a><br>";
        console.log(string);
    }
    document.getElementById("nav-menu").innerHTML = list;
}*/

// removeChild
function removeItem() {
    var removeEL = document.getElementById("removeEL");
    removeEL.removeChild(removeEL.childNodes[3]);
}

// replaceChild()
function replaceItem() {
    var replaceEL = document.getElementById("replaceEL");
    replaceEL.replaceChild(replaceEL.childNodes[1], replaceEL.childNodes[3]);
}

// cloneNode() 
var strong = document.querySelector('strong');
var copy = strong.cloneNode(true);
var cloneEL = document.getElementById('cloneEL');
cloneEL.appendChild(copy);

// insertBefore()
var para = document.createElement('p');
var newPara = document.querySelector('p');
var sectionID = document.getElementById('insertBeforeP');
para.textContent = 'This paragraph is created using <code>insertBefore()</code>.';
sectionID.insertBefore(para, sectionID);