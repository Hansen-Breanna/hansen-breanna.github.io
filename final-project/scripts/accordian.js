//Lists data
function listInCategory(listID, categoryUrl) {
    let currentLists = 'https://api.nytimes.com/svc/books/v3/lists/current/' + categoryUrl + '?api-key=diIY45XysDkQAiOZr6dGSPoNM5ARPGeg';
    let lists = new XMLHttpRequest();
    lists.open('GET', currentLists);
    lists.send();
    lists.onload =  function (details) {
        let listData = JSON.parse(lists.responseText);
        var topBooks = "";
        for (var i = 0; i < 14; i++) {
            topBooks += "<div><h2 class='bookTitle'>" + listData.results.books[i].title + "</h2><br>by: " 
            + listData.results.books[i].author + "<br>"
            + "<img class='bookImage' src='" + listData.results.books[i].book_image + "' />" 
            + listData.results.books[i].description 
            + "<br><div id='buttons'><button class='button-trio' type='button' onclick='addItem()'>Add</button>"
            + "<button class='button-trio' type='button' onclick='removeItem()'>Remove</button>"
            + "<button class='button-trio' type='button' onclick='buyItem()'>Buy</button></div></div>";
        }
        var details = document.getElementById("catDetails" + listID);
        var booksContainer = document.createElement('div');
        booksContainer.className = "booksContainer";
        details.appendChild(booksContainer);
        console.log(booksContainer);
        sessionStorage.setItem(listID, "listID is " + listID);
        booksContainer.innerHTML = topBooks;
    }
  }

  function toggleDetails(listID, categoryUrl) {
    console.log(listID);
    var details = document.getElementById("catDetails" + listID);
    if (details.style.display == 'none') {
        details.style.display = 'block';
        if (!sessionStorage.getItem(listID)) {
            listInCategory(listID, categoryUrl);
        }
    } 
    else {
        details.style.display = 'none';
    }
}