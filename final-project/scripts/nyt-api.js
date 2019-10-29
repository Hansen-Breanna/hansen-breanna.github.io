/*

//NYT Best Seller Books

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
      for (var i = 0; i < 1; i++) {
        hardcoverFictionCategory += "<button type='button' class='listData accordian'>" + listData.results.books[i].title + "<br>by: " 
          + listData.results.books[i].author + "</button>" 
          + "<div class='book-details'><img src='" + listData.results.books[i].book_image + "' /><br>" 
          + listData.results.books[i].description 
          + "<div class='button-trio'><button type='button' onclick='addToList()'>Add to list</button>" 
          + "<button type='button' ontouchstart='removeFromListSound()'>Remove from list</button>"
          + "<button type='button' onclick='buyBook()'>Buy from Amazon</button></div></div>";
          //console.log(listData.results.books[i].hard);
      }
      console.log(hardcoverFictionCategory);
      return hardcoverFictionCategory;
  }
}

//Home page categories
let bestBooks = 'https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=diIY45XysDkQAiOZr6dGSPoNM5ARPGeg';
let books = new XMLHttpRequest();
books.open('GET', bestBooks);
books.send();
books.onload =  function () {
    let booksInfo = JSON.parse(books.responseText);
    //console.log(booksInfo); 
    var category = "";
    for (var i = 0; i < 5 booksInfo.results.length; i++) {
      var bookCategories = document.getElementById('text');
      var div = document.createElement('div');
      div.innerHTML = "my <b>new</b> skill - <large>DOM maniuplation!</large>";
      //console.log(div);
      bookCategories.appendChild(div);
      category += "<div class='categoryContent'><div class='buttonAndCategoryName'>" 
      + "<button type='button' class='categoryItem' ontouchstart='poppingClick()' onclick='toggleDetails()'><span class='down-arrow'></span></button>" 
      + booksInfo.results[i].display_name + "</div></div>"
      + "<div class='listDetails'>" + listInCategory(booksInfo.results[i].list_name_encoded) + "</div>";
      //console.log(booksInfo.results[i].display_name); 
      //console.log(listInCategory(booksInfo.results[i].list_name_encoded));
    }
    document.getElementById("bookCategories").innerHTML = category;
    //console.log(category);
}


*/

//NYT Best Seller Books

//Home page categories
let bestBooks = 'https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=diIY45XysDkQAiOZr6dGSPoNM5ARPGeg';
let books = new XMLHttpRequest();
books.open('GET', bestBooks);
books.send();
books.onload =  function () {
    let booksInfo = JSON.parse(books.responseText);
    //console.log(booksInfo); 
    var category = "";
    for (var i = 0; i < booksInfo.results.length; i++) {
      var bookCategories = document.getElementById('bookCategories');
      //Create first div and assign class
      var containerDiv = document.createElement('div');
      containerDiv.className = "categoryContent";
      bookCategories.append(containerDiv);

      //Add second div
      var catDetails = document.createElement('div');
      catDetails.className = "listDetails";
      catDetails.id = "catDetails" + [i];
      var categoryUrl = booksInfo.results[i].list_name_encoded;
      //catDetails.innerHTML = listInCategory(categoryUrl);
      catDetails.style.display = "none";
      bookCategories.appendChild(catDetails);

      //Add sub div to containerDiv, assign class, and append to containerDiv
      var innerDiv = document.createElement('div');
      innerDiv.className = "buttonAndCategoryName";
      innerDiv.innerHTML = "<button type='button' class='categoryItem' ontouchstart='poppingClick()' onclick='toggleDetails(" 
      + i + ",&apos;" + categoryUrl + "&apos;)'><span class='down-arrow'></span></button>" + booksInfo.results[i].display_name;
      containerDiv.appendChild(innerDiv);
    }
}