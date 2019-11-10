function showList() {
    var list = document.getElementById("list");
    if (list.style.display == "none") {
      list.style.display = "block";
    } else {
      list.style.display = "none";
    }
  }

function addItem(bookTitle, bookURL) {
  var addItem = document.getElementById('addToList');
  var listItem = document.createElement('li');
  addItem.appendChild(listItem);
  listItem.textContent = bookTitle;
  var buyButton = document.createElement('button');
  buyButton.textContent = "<a href='" + bookURL + "'>Buy</a>";
  console.log(listItem);
}
