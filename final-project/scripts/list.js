function showList() {
    var list = document.getElementById("list");
    if (list.style.display == "none") {
      list.style.display = "block";
    } else {
      list.style.display = "none";
    }
  }

function addItem(bookTitle, bookURL) {
  localStorage.setItem("title", bookTitle);  
  localStorage.setItem("url", bookURL);   
  var addItem = document.getElementById('addToList');
  var listItem = document.createElement('li');
  addItem.appendChild(listItem);
  listItem.textContent = bookTitle;
  var buyButton = document.createElement('button');
  buyButton.textContent = "<a href='" + bookURL + "'>Buy</a>";
  console.log(listItem);
}

//Remove Button
var c = document.getElementById("removeButtonBox");
var ctx = c.getContext("2d");
ctx.moveTo(60,75);
ctx.lineTo(230,75);
ctx.lineWidth = 6;
ctx.stroke();

//Buy Button
var c = document.getElementById("buyButtonBox");
var ctx = c.getContext("2d");
ctx.font = "110px Arial";
ctx.fillText("$", 120, 120);
ctx.moveTo(120,120);
ctx.lineTo(120,220);
ctx.stroke;