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
    var sortedCategories = booksInfo.results.sort((a, b) => (a.list_name > b.list_name) ? 1 : -1);
    for (var i = 0; i < sortedCategories.length; i++) {
      //Create new category div
      var bookCategories = document.getElementById('bookCategories');
      var containerDiv = document.createElement('div');
      containerDiv.className = "categoryContent";
      bookCategories.append(containerDiv);

      //Add second div
      var catDetails = document.createElement('div');
      catDetails.classList += "listDetails";
      catDetails.id = "catDetails" + [i];
      var categoryUrl = sortedCategories[i].list_name_encoded;
      catDetails.style.display = "none";
      bookCategories.appendChild(catDetails);

      //Add sub div to containerDiv, assign class, and append to containerDiv
      var innerDiv = document.createElement('div');
      innerDiv.className = "buttonAndCategoryName";

      // //Create button
      // var categoryButton = document.createElement('button');
      // categoryButton.classList += "categoryItem";
      // var categoryID = "categoryButton" + i;
      // categoryButton.id = categoryID;
      // //categoryButton.addEventListener('touch', toggleDetails(i, categoryUrl));
      // // Get the element, add a click listener...
      // document.getElementById(categoryID).addEventListener("touchstart", function openBox(i, categoryUrl) {
      //     console.log("List opened.");
      //     openCategory.addEventListener('touch', toggleDetails(i, categoryUrl));
      // });
      // innerDiv.appendChild(categoryButton);

      // //Create arrow for button
      // var arrowButton = document.createElement('span');
      // arrowButton.classList += "down-arrow";
      // categoryButton.appendChild(arrowButton);

      // //Add category name
      // var categoryName = document.createElement('span');
      // categoryName.textContent = sortedCategories[i].list_name;
      // innerDiv.appendChild(categoryName);


      innerDiv.innerHTML = "<button type='button' class='categoryItem' ontouchstart='poppingClick(), toggleDetails(" 
      + i + ",&apos;" + categoryUrl + "&apos;)'><span class='down-arrow'></span></button>" + sortedCategories[i].list_name;
      containerDiv.appendChild(innerDiv);
    }
}
