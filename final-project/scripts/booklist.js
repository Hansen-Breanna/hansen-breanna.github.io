//Using class to instantiate object
class Books {
  constructor(title, url) {
      this.title = title;
      this.url = url;
  } 
}

//Array for book list
var yourBooks = new Array();
var storageArray = JSON.parse(localStorage.getItem("yourBooks"));
console.log(storageArray.length)

//Fill list with items from local storage
for (i = 0; i < storageArray.length; i++) {
    //create li
    var listItem = document.createElement("LI");
    //create remove button
    var removeBox = document.createElement('button');
    removeBox.classList += 'removeButtonBox';
    listItem.appendChild(removeBox);
    //create buy button
    var buyBox = document.createElement('button');
    buyBox.classList += 'buyButtonBox';
    listItem.appendChild(buyBox); 
    //create span
    var spanTitle = document.createElement("span");
    spanTitle.innerHTML = storageArray[i].title;
    spanTitle.classList += 'titleText';
    //append span
    listItem.appendChild(spanTitle);
    //append li to ul
    var addItem = document.getElementById("addedToList");
    addItem.appendChild(listItem);
}

function addItem(bookTitle, bookURL) {
  console.log(bookTitle);
  var newBook = new Books(bookTitle, bookURL);
  yourBooks.push(newBook);

  // Save books to local storage
  localStorage.setItem("yourBooks", JSON.stringify(yourBooks));

  // load books from localStorage
  if (localStorage.getItem("yourBooks")) {
       yourBooks = JSON.parse(localStorage.getItem("yourBooks"));
       console.log(yourBooks);
  }
}

function removeItem(bookTitle, bookUrl) {
  var bookKey = bookTitle;
  var urlKey = bookUrl;
  localStorage.removeItem(bookKey);
  localStorage.removeItem(urlKey);
  console.log("Is this working?");
}

// //Arrays for books and urls
// var yourBooks = new Array();
// var urlList = new Array();

// function addItem(bookTitle, bookURL) {
 
//   yourBooks.push(bookTitle);
//   urlList.push(bookURL);
  
//   for (var i = 0; i < yourBooks.length; i++) {
//     localStorage.setItem("title"+ [i], yourBooks[i]);  
//     localStorage.setItem("urlList" + [i], urlList[i]);
//   }
//   //create li
//   var listItem = document.createElement("LI");
//   //create span
//   var spanTitle = document.createElement("span");
//   spanTitle.innerHTML = bookTitle;
//   spanTitle.classList += 'titleText';
//   //append span
//   listItem.appendChild(spanTitle);
//   //create remove button
//   var removeBox = document.createElement('button');
//   removeBox.classList += 'removeButtonBox';
//   listItem.appendChild(removeBox);
//   //create buy button
//   var buyBox = document.createElement('button');
//   buyBox.classList += 'buyButtonBox';
//   listItem.appendChild(buyBox);
//   //append li to ul
//   var addItem = document.getElementById("addedToList");
//   addItem.appendChild(listItem);
// } 

/*

function GetFromLocalStorage(){
    for (var i = 0; i < localStorage.length; i++) {
    var listItem = document.createElement("LI");
    //create span
    var spanTitle = document.createElement("span");
    var key = '"bookObj" + i + ".title"';
    console.log(key);
    var itemTitle = JSON.parse(localStorage.getItem("bookObj"));
    console.log(itemTitle);
    spanTitle.innerHTML = JSON.stringify(itemTitle);
    spanTitle.classList += "bookObj" + i;
    //append span
    listItem.appendChild(spanTitle);
    //append li to ul
    var addItem = document.getElementById("addedToList");
    addItem.appendChild(listItem);
  }
} 
*/
/*
function addItem(bookTitle, bookUrl) {
  var i = localStorage.length;
  var bookObj = {title: bookTitle, url: bookUrl};
  localStorage.setItem('bookObj' + i, JSON.stringify(bookObj));
  console.log(bookObj);

  for (var i = 0; i < localStorage.length; i++) {
    var listItem = document.createElement("LI");
    //create span
    var spanTitle = document.createElement("span");
    var key = '"bookObj" + i + ".title"';
    console.log(key);
    var itemTitle = JSON.parse(localStorage.getItem(key));
    console.log(itemTitle);
    spanTitle.innerHTML = JSON.stringify(itemTitle);
    spanTitle.classList += "bookObj" + i;
    //append span
    listItem.appendChild(spanTitle);
    //append li to ul
    var addItem = document.getElementById("addedToList");
    addItem.appendChild(listItem);
  }

  document.getElementById("testList").innerHTML = addItem;
  //document.getElementById("testList").innerHTML = JSON.stringify(localStorage) + "<br>Hello<br>";
}
*/

// for (var a in localStorage) {
//   console.log(a, ' = ', localStorage[a]);
// }



/*
//Remove Button
var c = document.getElementsByClassName("removeButtonBox");
var ctx = c.getContext("2d");
ctx.moveTo(60,75);
ctx.lineTo(230,75);
ctx.lineWidth = 6;
ctx.stroke();

//Buy Button
var c = document.getElementsByClassName("buyButtonBox");
var ctx = c.getContext("2d");
ctx.font = "110px Arial";
ctx.fillText("$", 120, 120);
ctx.moveTo(120,120);
ctx.lineTo(120,220);
ctx.stroke;
*/