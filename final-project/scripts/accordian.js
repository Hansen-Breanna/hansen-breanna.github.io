//Lists data
function listInCategory(listID, categoryUrl) {
    let currentLists = 'https://api.nytimes.com/svc/books/v3/lists/current/' + categoryUrl + '?api-key=diIY45XysDkQAiOZr6dGSPoNM5ARPGeg';
    let lists = new XMLHttpRequest();
    lists.open('GET', currentLists);
    lists.send();
    lists.onload =  function (details) {
        let listData = JSON.parse(lists.responseText);
        console.log(listData);

        var topBooks = "";
        for (var i = 0; i < 14; i++) {
            var number = i + 1;

            //Get book title and set to local storage
            var bookTitle = listData.results.books[i].title;
            localStorage.setItem("title" + [i], bookTitle);           

            //Get URL and set to local storage
            var bookURL = listData.results.books[i].amazon_product_url +  "/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0399590501&linkCode=as2&tag=budgetmealrecipesfb-20&linkId=1cecfc480f866b384c941a1069a078f7";
            localStorage.setItem("url" + [i], bookURL);   

            //Loop through and create all book info
            topBooks += "<div><h2 class='bookTitle'>" + number + ". " + localStorage.getItem("title" + [i]) + "</h2><p class='noBottomMg'><strong>by:</strong> " 
            + listData.results.books[i].author + "</p>"
            + "<img class='bookImage' src='" + listData.results.books[i].book_image + "' />"
            + "<p>" + listData.results.books[i].description + "</p>"
            + "<div id='buttons'>"
            + "<button class='button-trio' type='button' onclick='addItem('" + bookTitle + "', '" + bookURL + "')'>Add</button>"
            + "<button class='button-trio' type='button' onclick='removeItem()'>Remove</button>"
            + "<a href='" + bookURL
            + "'><button class='button-trio' type='button' onclick='buyItem()'>Buy</button></a></div></div>";
        }
        var details = document.getElementById("catDetails" + listID);
        var booksContainer = document.createElement('div');
        booksContainer.className = "booksContainer";
        details.appendChild(booksContainer);
        booksContainer.innerHTML = topBooks;
    }
  }

  function toggleDetails(listID, categoryUrl) {
    var details = document.getElementById("catDetails" + listID);
    if (details.style.display == 'none') {
        details.style.display = 'block';
        listInCategory(listID, categoryUrl);
    } 
    else {
        details.style.display = 'none';
    }
}