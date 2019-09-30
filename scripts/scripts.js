/* ----- Working Examples ----- */

//Object Reference Using Bracket Notation
var navMenu = {
    javascript: "javascript.html",
    object : "javascript-objects.html",
    json : "json.html"
};
    // Display some data from the object:
document.getElementById("objReference").innerHTML =
"Uses bracket notation to reference<br>&quot;" + navMenu["javascript"] + "&quot;";
document.getElementById("objReferenceDot").innerHTML =
"Uses dot method to reference<br>&quot;" + navMenu.javascript + "&quot;";

//Object Method Example
var navMenu2 = {
    name : "Javascript",
    url : "javascripts.html",
    createText : function(arg1, arg2, arg3) {
        return arg1 + this.url + arg2 + this.name + arg3;
    }
};
document.getElementById("objMethod").innerHTML = navMenu2.createText("&lt;a href&equals;&quot;", "&quot;&gt;", "&lt;&sol;a&gt");
