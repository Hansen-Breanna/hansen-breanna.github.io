//NYT Best Seller Books

//Home page categories
let bestBooks = 'https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=diIY45XysDkQAiOZr6dGSPoNM5ARPGeg';
let books = new XMLHttpRequest();
books.open('GET', bestBooks);
books.send();
books.onload =  function () {
    let booksInfo = JSON.parse(books.responseText);
    console.log(booksInfo); 
    var category = "";
    for (var i = 0; i < 1/*booksInfo.results.length*/; i++) {
      category += "<div class='categoryContent'><div class='buttonAndCategoryName'>" 
      + "<button type='button' class='categoryItem' ontouchstart='poppingClick()' onclick='toggleDetails()'><span class='down-arrow'></span></button>" 
      + booksInfo.results[i].display_name + "</div><div class='listDetails'>" + listInCategory(booksInfo.results[i].list_name_encoded) + "</div>";
      console.log(booksInfo.results[i].list_name_encoded); 
      console.log(category);
      document.getElementById("bookCategories").innerHTML = category;
    }
}

//Lists data
function listInCategory(categoryUrl) {
  let currentLists = 'https://api.nytimes.com/svc/books/v3/lists/current/' + categoryUrl + '?api-key=diIY45XysDkQAiOZr6dGSPoNM5ARPGeg';
  let lists = new XMLHttpRequest();
  lists.open('GET', currentLists);
  lists.send();
  lists.onload =  function () {
      let listData = JSON.parse(lists.responseText);
      console.log(listData); 
      var hardcoverFictionCategory = "";
      for (var i = 0; i < 1/* listData.results.books.length */; i++) {
        hardcoverFictionCategory += "<button type='button' class='listData accordian'>" + listData.results.books[i].title + "<br>by: " 
          + listData.results.books[i].author + "</button>" 
          + "<div class='book-details'><img src='" + listData.results.books[i].book_image + "' /><br>" 
          + listData.results.books[i].description 
          + "<div class='button-trio'><button type='button' onclick='addToList()'>Add to list</button>" 
          + "<button type='button' ontouchstart='removeFromListSound()'>Remove from list</button>"
          + "<button type='button' onclick='buyBook()'>Buy from Amazon</button></div></div>";
          console.log(hardcoverFictionCategory);
          return hardcoverFictionCategory;
      }
  }
}