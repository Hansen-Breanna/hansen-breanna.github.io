// //Using class to instantiate object
// class Categories {
//   constructor(name, url) {
//       this.name = name;
//       this.url = url;
//   } 
// }
//NYT Best Seller Books

//Home page categories
let bestBooks = 'https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=diIY45XysDkQAiOZr6dGSPoNM5ARPGeg';
let books = new XMLHttpRequest();
books.open('GET', bestBooks);
books.send();
books.onload =  function () {
    let booksInfo = JSON.parse(books.responseText);
    for (var i = 0; i < booksInfo.results.length; i++) {
      //Instantiate new category
      //var categories = new Categories(booksInfo.results[i].display_name, booksInfo.results[i].list_name_encoded);
      //console.log(categories);
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