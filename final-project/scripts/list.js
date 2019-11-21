function showList() {
    var list = document.getElementById("list");
    if (list.style.display == "none") {
      list.style.display = "block";
    } else {
      list.style.display = "none";
    }
  }

//Arrays for books and urls
var yourBooks = new Array();
var urlList = new Array();

function addItem(bookTitle, bookURL) {
  yourBooks.push(bookTitle);
  urlList.push(bookURL);
  
  for (var i = 0; i < yourBooks.length; i++) {
    localStorage.setItem("title"+ [i], yourBooks[i]);  
    localStorage.setItem("urlList" + [i], urlList[i]);
  }
  //create li
  var listItem = document.createElement("LI");
  //create span
  var spanTitle = document.createElement("span");
  spanTitle.innerHTML = bookTitle;
  spanTitle.classList += 'titleText';
  //append span
  listItem.appendChild(spanTitle);
  //create remove canvas
  var removeBox = document.createElement('button');
  removeBox.classList += 'removeButtonBox';
  listItem.appendChild(removeBox);
  //create buy canvas
  var buyBox = document.createElement('button');
  buyBox.classList += 'buyButtonBox';
  listItem.appendChild(buyBox);
  //append li to ul
  var addItem = document.getElementById("addedToList");
  addItem.appendChild(listItem);
} 


function removeItem(bookTitle, bookUrl) {
  localStorage.removeItem(key);
}

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