/* ----- LINKS ----- */

var menuBar = document.getElementById("ham-menu");
menuBar.style.display = "none";

//Change all links to a certain color
var links = document.querySelectorAll("a");
for (var i= 0; i < links.length; i++) {
    links[i].style.color = "#2477CA";
}

var navli = document.querySelectorAll("nav * a");
for (var i = 0; i < navli.length; i++) {
    navli[i].style.color = "#ffffff";
}

//Change all visited links to a certain color
var visitedLinks = document.querySelectorAll("a:visited");
for (var i = 0; i < visitedLinks.length; i++) {
    visitedLinks[i].style.color = "#6e7822";
}

/* ----- HEADINGS ----- */

//Change all h2 tags to a certain color
var headings = document.querySelectorAll("main * h2, h3, h4, h5, h6");
for (var i = 0; i < headings.length; i++) {
    headings[i].style.color = "#244873";
}

/* ----- FOOTER ----- */
// querySelector
var footerEL = document.querySelector("footer");
footerEL.innerHTML = "&copy; 2019 Breanna Hansen<br>CIT 261 Mobile Applications";
