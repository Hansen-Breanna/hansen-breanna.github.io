/* ----- Working Examples ----- */

//Object Reference Using Bracket Notation
var navMenu = {
    javascript: "javascript.html",
    object : "javascript-objects.html",
    json : "json.html"
};

// Display some data from the object:
document.getElementById("objReference").innerHTML = "<pre><code>Uses bracket notation to reference<br>&quot;" 
    + navMenu["javascript"] + "&quot;</pre></code>";
document.getElementById("objReferenceDot").innerHTML =
"<pre><code>Uses dot method to reference<br>&quot;" + navMenu.javascript + "&quot;</pre></code>";

//Object Method Example
var navMenu2 = {
    name : "Javascript",
    url : "javascripts.html",
    createText : function(arg1, arg2, arg3) {
        return "<code><pre>The object method with arguments returns&colon;<br>" + arg1 + this.url + arg2 + this.name + arg3 
            + "</code></pre>";
    }
};
document.getElementById("objMethod").innerHTML = navMenu2.createText("&lt;a href&equals;&quot;", 
    "&quot;&gt;", "&lt;&sol;a&gt");

//Using class to instantiate object
import { Books } from './classes.js';

var myBook = new Books("Pride and Prejudice", "Jane Austen", "fiction");
var jacksBook = new Books("Marvel Adventures", "Disney", "movies");
var janesBook = new Books("Chemistry for Beginner's", "Chris Hollis", "non-fiction");
console.log(myBook);

var mine = JSON.stringify(myBook);
var jack = JSON.stringify(jacksBook);
var jane = JSON.stringify(janesBook);
console.log(myBook);
console.log(jacksBook);
console.log(janesBook);
var mineSlice1 = mine.slice(0, 30);
var mineSlice2 = mine.slice (30, 53);
var mineSlice3 = mine.slice (53, 72);
var jackSlice1 = jack.slice(0, 28);
var jackSlice2 = jack.slice (28, 46);
var jackSlice3 = jack.slice (46, 64);
var janeSlice1 = jane.slice(0, 35);
var janeSlice2 = jane.slice (35, 59);
var janeSlice3 = jane.slice (59, 82);
document.getElementById("objInstances").innerHTML = "<pre><code>Display new instances&colon;<br>" + mineSlice1 + "<br>&nbsp;&nbsp;" + mineSlice2 
    + "<br>&nbsp;&nbsp;" + mineSlice3 + "<br>" + jackSlice1 + "<br>&nbsp;&nbsp;" + jackSlice2 
    + "<br>&nbsp;&nbsp;" + jackSlice3 + "<br>" + janeSlice1 + "<br>&nbsp;&nbsp;" + janeSlice2 
    + "<br>&nbsp;&nbsp;" + janeSlice3 + "</code></pre>";

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
var mineSlice1 = mine.slice(0, 30);
var mineSlice2 = mine.slice (30, 53);
var mineSlice3 = mine.slice (53, 71);
var mineSlice4 = mine.slice (71, 98);
var jackSlice1 = jack.slice(0, 28);
var jackSlice2 = jack.slice (28, 46);
var jackSlice3 = jack.slice (46, 63);
var jackSlice4 = jack.slice (63, 81);
var janeSlice1 = jane.slice(0, 35);
var janeSlice2 = jane.slice (35, 59);
var janeSlice3 = jane.slice (59, 81);
var janeSlice4 = jane.slice (81, 112);
document.getElementById("propInstance").innerHTML = "<pre><code>New properties added&colon;<br>" + mineSlice1 + "<br>&nbsp;&nbsp;" + mineSlice2 
    + "<br>&nbsp;&nbsp;" + mineSlice3 + "<br>&nbsp;&nbsp;" + mineSlice4 + "<br>" + jackSlice1 
    + "<br>&nbsp;&nbsp;" + jackSlice2 + "<br>&nbsp;&nbsp;" + jackSlice3 + "<br>&nbsp;&nbsp;" + jackSlice4 
    + "<br>" + janeSlice1 + "<br>&nbsp;&nbsp;" + janeSlice2 + "<br>&nbsp;&nbsp;" + janeSlice3 
    + "<br>&nbsp;&nbsp;" + janeSlice4 + "</code></pre>";

//Object Inheritence
function fruits() {
this.name = "fruit 1";
}
fruits.prototype.color = "green";

function apple() {
fruits.call(this);
}

apple.prototype = Object.create(fruits.prototype);
const app = new apple();

document.getElementById("inherit").innerHTML = "<code> " + app.name + " is " + app.color + "</code>";