/* ----- Working Examples ----- */

//Object Reference Using Bracket Notation
var navMenu = {
    javascript: "javascript.html",
    object : "javascript-objects.html",
    json     :  "json.html"
};
    // Display some data from the object:
document.getElementById("objReference").innerHTML =
"Uses bracket notation to reference<br>" + navMenu["javascript"];
document.getElementById("objReferenceDot").innerHTML =
"Uses dot method to reference<br>" + navMenu.javascript;
