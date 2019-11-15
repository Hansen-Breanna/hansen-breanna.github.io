function showList() {
    var list = document.getElementById("list");
    if (list.style.display == "none") {
      list.style.display = "block";
    } else {
      list.style.display = "none";
    }
  }

// //Remove Button
// var c = document.getElementById("removeButtonBox");
// var ctx = c.getContext("2d");
// ctx.moveTo(60,75);
// ctx.lineTo(230,75);
// ctx.lineWidth = 6;
// ctx.stroke();

// //Buy Button
// var c = document.getElementById("buyButtonBox");
// var ctx = c.getContext("2d");
// ctx.font = "110px Arial";
// ctx.fillText("$", 120, 120);
// ctx.moveTo(120,120);
// ctx.lineTo(120,220);
// ctx.stroke;

var yourBooks = new Array();
console.log(yourBooks);

var urlList = new Array();
console.log(urlList);

function addItem(bookTitle, bookURL) {
  yourBooks.push(bookTitle);
  console.log(yourBooks);
  urlList.push(bookURL);
  console.log(urlList);
  for (var i = 0; i < yourBooks.length; i++) {
    localStorage.setItem("title"+ [i], yourBooks[i]);  
    localStorage.setItem("urlList" + [i], urlList[i]);
  }
  //create li
  var listItem = document.createElement("LI");
  //create span
  var spanTitle = document.createElement("span");
  spanTitle.innerHTML = bookTitle;
  spanTitle.classList += 'capitalizeText';
  //append span
  listItem.appendChild(spanTitle);
  //create remove canvas
  var removeBox = document.createElement('canvas');
  removeBox.classList += 'removeButtonBox';
  listItem.appendChild(removeBox);
  //create buy canvas
  var buyBox = document.createElement('canvas');
  buyBox.classList += 'buyButtonBox';
  listItem.appendChild(buyBox);
  console.log(listItem);
  //append li to ul
  var addItem = document.getElementById("addedToList");
  addItem.appendChild(listItem);
  /*   
  var addItem = document.getElementById("addToList");
  var listItem = document.createElement("li");
  listItem.textContent = localStorage.getItem("title");
  addItem.appendChild(listItem);
  console.log(listItem.textContent);
  */
} 