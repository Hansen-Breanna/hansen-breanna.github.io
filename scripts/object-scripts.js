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
var jane = JSON.stringify(janesBook);
console.log(myBook);
console.log(jacksBook);
console.log(janesBook);
var mineSplit1 = mine.slice(0, 31);
var mineSplit2 = mine.slice (32, 54);
var mineSplit3 = mine.slice (55, 72);
var jackSplit1 = jack.slice(0, 29);
var jackSplit2 = jack.slice (30, 47);
var jackSplit3 = jack.slice (48, 64);
var janeSplit1 = jane.slice(0, 36);
var janeSplit2 = jane.slice (37, 60);
var janeSplit3 = jane.slice (61, 82);
document.getElementById("objInstances").innerHTML = mineSplit1 + "<br>&nbsp;&nbsp;" + mineSplit2 
    + "<br>&nbsp;&nbsp;" + mineSplit3 + "<br>" + jackSplit1 + "<br>&nbsp;&nbsp;" + jackSplit2 
    + "<br>&nbsp;&nbsp;" + jackSplit3 + "<br>" + janeSplit1 + "<br>&nbsp;&nbsp;" + janeSplit2 
    + "<br>&nbsp;&nbsp;" + janeSplit3;

//Property Instantiation
Books.prototype.section = null;
myBook.section = "adult fiction";
jacksBook.section = 'teen';
janesBook.section = "adult non-fiction";
var mine = JSON.stringify(myBook);
var jack = JSON.stringify(jacksBook);
var jane = JSON.stringify(janesBook);
console.log(myBook);
console.log(jacksBook);
console.log(janesBook);
var mineSplit1 = mine.slice(0, 31);
var mineSplit2 = mine.slice (32, 54);
var mineSplit3 = mine.slice (55, 72);
var mineSplit4 = mine.slice (73, 98);
var jackSplit1 = jack.slice(0, 29);
var jackSplit2 = jack.slice (30, 47);
var jackSplit3 = jack.slice (48, 64);
var jackSplit4 = jack.slice (65, 81);
var janeSplit1 = jane.slice(0, 36);
var janeSplit2 = jane.slice (37, 60);
var janeSplit3 = jane.slice (61, 82);
var janeSplit4 = jane.slice (83, 112);
document.getElementById("propInstance").innerHTML = mineSplit1 + "<br>&nbsp;&nbsp;" + mineSplit2 
    + "<br>&nbsp;&nbsp;" + mineSplit3 + "<br>&nbsp;&nbsp;" + mineSplit4 + "<br>" + jackSplit1 
    + "<br>&nbsp;&nbsp;" + jackSplit2 + "<br>&nbsp;&nbsp;" + jackSplit3 + "<br>&nbsp;&nbsp;" + jackSplit4 
    + "<br>" + janeSplit1 + "<br>&nbsp;&nbsp;" + janeSplit2 + "<br>&nbsp;&nbsp;" + janeSplit3 
    + "<br>&nbsp;&nbsp;" + janeSplit4;