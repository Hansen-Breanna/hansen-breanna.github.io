/* ----- Working Examples ----- */

//Object Reference Using Bracket Notation
var navMenu = {
    javascript: "javascript.html",
    object : "javascript-objects.html",
    json : "json.html"
};

    // Display some data from the object:
document.getElementById("objReference").innerHTML = "Uses bracket notation to reference<br>&quot;" 
    + navMenu["javascript"] + "&quot;";
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
document.getElementById("objMethod").innerHTML = navMenu2.createText("&lt;a href&equals;&quot;", 
    "&quot;&gt;", "&lt;&sol;a&gt");

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
var mineSlice1 = mine.slice(0, 31);
var mineSlice2 = mine.slice (31, 54);
var mineSlice3 = mine.slice (55, 72);
var jackSlice1 = jack.slice(0, 29);
var jackSlice2 = jack.slice (30, 47);
var jackSlice3 = jack.slice (48, 64);
var janeSlice1 = jane.slice(0, 36);
var janeSlice2 = jane.slice (37, 60);
var janeSlice3 = jane.slice (61, 82);
document.getElementById("objInstances").innerHTML = mineSlice1 + "<br>&nbsp;&nbsp;" + mineSlice2 
    + "<br>&nbsp;&nbsp;" + mineSlice3 + "<br>" + jackSlice1 + "<br>&nbsp;&nbsp;" + jackSlice2 
    + "<br>&nbsp;&nbsp;" + jackSlice3 + "<br>" + janeSlice1 + "<br>&nbsp;&nbsp;" + janeSlice2 
    + "<br>&nbsp;&nbsp;" + janeSlice3;

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
var mineSlice1 = mine.slice(0, 31);
var mineSlice2 = mine.slice (32, 54);
var mineSlice3 = mine.slice (55, 72);
var mineSlice4 = mine.slice (73, 98);
var jackSlice1 = jack.slice(0, 29);
var jackSlice2 = jack.slice (30, 47);
var jackSlice3 = jack.slice (48, 64);
var jackSlice4 = jack.slice (65, 81);
var janeSlice1 = jane.slice(0, 36);
var janeSlice2 = jane.slice (37, 60);
var janeSlice3 = jane.slice (61, 82);
var janeSlice4 = jane.slice (83, 112);
document.getElementById("propInstance").innerHTML = mineSlice1 + "<br>&nbsp;&nbsp;" + mineSlice2 
    + "<br>&nbsp;&nbsp;" + mineSlice3 + "<br>&nbsp;&nbsp;" + mineSlice4 + "<br>" + jackSlice1 
    + "<br>&nbsp;&nbsp;" + jackSlice2 + "<br>&nbsp;&nbsp;" + jackSlice3 + "<br>&nbsp;&nbsp;" + jackSlice4 
    + "<br>" + janeSlice1 + "<br>&nbsp;&nbsp;" + janeSlice2 + "<br>&nbsp;&nbsp;" + janeSlice3 
    + "<br>&nbsp;&nbsp;" + janeSlice4;