/* ----- Working Examples ----- */

//Object Reference Using Bracket Notation
var navMenu = {
    javascript: "javascript.html",
    object : "javascript-objects.html",
    json : "json.html"
};
    // Display some data from the object:
document.getElementById("objReference").innerHTML = "Uses bracket notation to reference<br>&quot;" + navMenu["javascript"] + "&quot;";
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

//Object Instantiation
function Books(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
}
var myBook = new Books("Pride and Prejudice", "Jane Austen", "fiction");
var jacksBook = new Books("Marvel Adventures", "Disney", "movies");
var janesBook = new Books("Chemistry for Beginner's", "Chris Hollis", "non-fiction");
var mine = JSON.stringify(myBook);
var jack = JSON.stringify(jacksBook);
var jane = JSON.stringify(myBook);
console.log(myBook);
console.log(jacksBook);
console.log(janesBook);
document.getElementById("objInstances").innerHTML = mine + "<br>" + jack + "<br>" + jane;

//Property Instantiation
Books.prototype.section = null;
myBook.section = "adult fiction";
jacksBook.section = 'teen';
janesBook.section = "adult non-fiction";
var mine = JSON.stringify(myBook);
var jack = JSON.stringify(jacksBook);
var jane = JSON.stringify(myBook);
console.log(myBook);
console.log(jacksBook);
console.log(janesBook);
document.getElementById("propInstance").innerHTML = mine + "<br>" + jack + "<br>" + jane;