//Using class to instantiate object
class Books {
  constructor(title, url, i) {
      this.title = title;
      this.url = url;
      this.i = i;
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
    var removeBox = document.createElement('canvas');
    removeBox.id = "removeBox" + i;
    removeBox.classList += "remove";
    removeBox.addEventListener('touchstart', function(event) {
      var removeTitle = event.target.parentNode.textContent;
      removeItem(removeTitle);
    });
    listItem.appendChild(removeBox);
    
    //create buy button
    var buyBox = document.createElement('canvas');
    buyBox.id = "buyBox" + i;
    var url = storageArray[i].url
    buyBox.ontouchstart = function() {
      window.location.href = url;
    };
    listItem.appendChild(buyBox); 
    
    // var buyBox = document.createElement('button');
    // buyBox.classList += 'buyButtonBox'; 
    // buyBox.href = storageArray[i].url;
    // buyBox.textContent = "$";
    // listItem.appendChild(buyBox); 

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
  var yourBooks = storageArray;
  for (var i = 0; i < yourBooks.length; i++) {
    if (yourBooks[i].title == bookTitle) {
      yourBooks.splice(i,1);
      break;
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


//Canvas Button
for (var count = 0; count < storageArray.length; count++) {
  //Remove Button
  var newID = "removeBox" + count;
  var c = document.getElementById(newID);
  var ctx = c.getContext("2d");
  ctx.moveTo(60,75);
  ctx.lineTo(230,75);
  ctx.lineWidth = 5;
  ctx.stroke();
  
  //Buy Button
  var newBuyId = "buyBox" + count;
  var b = document.getElementById(newBuyId);
  var buy = b.getContext("2d");
  ctx.font = "bold 120px Arial";
  ctx.textAlign = "center";
  ctx.fillText("$", 150, 120);
}
