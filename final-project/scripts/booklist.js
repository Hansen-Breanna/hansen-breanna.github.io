//Using class to instantiate object
class Books {
  constructor(title, url) {
      this.title = title;
      this.url = url;
  } 
}

//Array for book list
var yourBooks = [];
var storageArray = JSON.parse(localStorage.getItem("yourBooks"));
//console.log(storageArray.length);
if (localStorage.length > 0) {
  loadList();
}

function loadList () {
//Fill list with items from local storage
for (i = 0; i < storageArray.length; i++) {
    //create li
    var listItem = document.createElement("LI");
    //create remove button
    var removeBox = document.createElement('button');
    removeBox.classList += 'removeButtonBox';
    removeBox.textContent = "-";
    listItem.appendChild(removeBox);
    //create buy button
    var buyBox = document.createElement('button');
    buyBox.classList += 'buyButtonBox'; 
    buyBox.href = storageArray[i].url;
    buyBox.textContent = "$";
    //buyBox.onclick = removeItem(storageArray[i].title");
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
}

function addItem(bookTitle, bookURL) {
  if (localStorage.length == 0) {
    storageArray = [];
  }
  //Pull local storage to array
  yourBooks = storageArray;
  //Create new book instance
  var newBook = new Books(bookTitle, bookURL);
  //Push book to array
  yourBooks.push(newBook);

  //Reload list
  reloadList(yourBooks);
}

function removeItem(bookTitle) {
  console.log(bookTitle);
  var yourBooks = storageArray;
  console.log(yourBooks);
  for (var i = 0; i < yourBooks.length; i++) {
    if (yourBooks[i].title == bookTitle) {
      yourBooks.splice(i,1);
    }
  }
  //Reload list
  reloadList(yourBooks);
}

function reloadList(yourBooks) {
  // Save books to local storage
  localStorage.setItem("yourBooks", JSON.stringify(yourBooks));

  //Reload list
  if (localStorage.getItem("yourBooks")) {
    document.getElementById("addedToList").innerHTML = "";
    yourBooks = JSON.parse(localStorage.getItem("yourBooks"));
    loadList();
  }
}


/*
// //Remove Button
// var c = document.getElementById("removeButtonBox");
// var ctx = c.getContext("2d");
// ctx.moveTo(10,15);
// ctx.lineTo(20,15);
// ctx.lineWidth = 3;
// ctx.stroke();

//Buy Button
var c = document.getElementsByClassName("buyButtonBox");
var ctx = c.getContext("2d");
ctx.font = "110px Arial";
ctx.fillText("$", 120, 120);
ctx.moveTo(120,120);
ctx.lineTo(120,220);
ctx.stroke;
*/