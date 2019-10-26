//NYT Best Seller Books

//Home page categories
let bestBooks = 'https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=diIY45XysDkQAiOZr6dGSPoNM5ARPGeg';
let books = new XMLHttpRequest();
books.open('GET', bestBooks);
books.send();
books.onload =  function () {
    let booksInfo = JSON.parse(books.responseText);
    console.log(booksInfo); 
    console.log(booksInfo.results[0].display_name);   
    var category = "";
    for (var i = 0; i < booksInfo.results.length; i++) {
      category += "<div class='categoryContent'>" 
      + "<button type='button' class='categoryItem' ontouchstart='poppingClick()' onclick='toggleDetails()'>" + booksInfo.results[i].display_name + "</button>"
      + "<div class='listDetails'></div></div>";
      //listInCategory(booksInfo.results[i].list_name_encoded) 
      document.getElementById("bookCategories").innerHTML = category;
    }
}

//Lists data
function listInCategory(categoryName) {
  let currentLists = 'https://api.nytimes.com/svc/books/v3/lists/current/' + categoryName + '?api-key=diIY45XysDkQAiOZr6dGSPoNM5ARPGeg';
  let lists = new XMLHttpRequest();
  lists.open('GET', currentLists);
  lists.send();
  lists.onload =  function () {
      let listData = JSON.parse(lists.responseText);
      console.log(listData); 
      console.log(listData.results.books[0].title);   
      var hardcoverFictionCategory = "";
      for (var i = 0; i < listData.results.books.length; i++) {
        hardcoverFictionCategory += "<button type='button' class='listData accordian'>" + listData.results.books[i].title + "<br>by: " 
          + listData.results.books[i].author + "</button>" 
          + "<div class='book-details'><img src='" + listData.results.books[i].book_image + "' /><br>" 
          + listData.results.books[i].description 
          + "<div class='button-trio'><button type='button' onclick='addToList()'>Add to list</button>" 
          + "<button type='button' onclick='removeFromList()'>Remove from list</button>"
          + "<button type='button' onclick='buyBook()'>Buy from Amazon</button></div></div>";

          document.getElementById("hardcover-fiction").innerHTML = hardcoverFictionCategory;
      }
  }
}