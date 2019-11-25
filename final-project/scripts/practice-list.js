//Array for book list
var yourBooks = [];
var storageArray = JSON.parse(localStorage.getItem("yourBooks"));
console.log(storageArray.length);
loadList();

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
  //Pull local storage to array
  yourBooks = storageArray;
  //Create new book instance
  var newBook = new Books(bookTitle, bookURL);
  //Push book to array
  yourBooks.push(newBook);
  // Save books to local storage
  localStorage.setItem("yourBooks", JSON.stringify(yourBooks));

  // load books from localStorage
  if (localStorage.getItem("yourBooks")) {
    document.getElementById("addedToList").innerHTML = "";
    yourBooks = JSON.parse(localStorage.getItem("yourBooks"));
    console.log(yourBooks);
    loadList();
  }
}

function removeItem(bookTitle, bookUrl) {
  console.log(bookTitle);
  console.log(bookUrl);
  var yourBooks = storageArray;
  console.log(yourBooks);
  for (var i = 0; i < yourBooks.length; i++) {
    if (yourBooks[i].title = bookTitle) {
      delete yourBooks[i];
      // Save books to local storage
      localStorage.setItem("yourBooks", JSON.stringify(yourBooks));
    }
  }

  if (localStorage.getItem("yourBooks")) {
    document.getElementById("addedToList").innerHTML = "";
    yourBooks = JSON.parse(localStorage.getItem("yourBooks"));
    loadList();
  }
}