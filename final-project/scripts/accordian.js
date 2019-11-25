//Lists data
function listInCategory(listID, categoryUrl) {
    let currentLists = 'https://api.nytimes.com/svc/books/v3/lists/current/' + categoryUrl + '?api-key=diIY45XysDkQAiOZr6dGSPoNM5ARPGeg';
    let lists = new XMLHttpRequest();
    lists.open('GET', currentLists);
    lists.send();
    lists.onload =  function (details) {
        let listData = JSON.parse(lists.responseText);

        var topBooks = "";
        for (var i = 0; i < listData.results.books.length; i++) {
            var number = i + 1;

            //Get book title and change to capitalize
            var bookTitle = listData.results.books[i].title;
            var title = titleCase(bookTitle);
            function titleCase(str) { //Function obtained from the internet and altered
                var splitStr = str.toLowerCase().split(' ');
                for (var i = 0; i < splitStr.length; i++) {
                    // You do not need to check if i is larger than splitStr length, as your for does that for you
                    // Assign it back to the array
                    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
                }
                // Directly return the joined string
                return splitStr.join(' ');
            }

            //Get isbn
            if (listData.results.books[i].isbns.length > 0) {
                var isbn = listData.results.books[i].isbns[0].isbn10;
            }

            //Get URL and set to local storage
            var bookURL = listData.results.books[i].amazon_product_url + 
                "/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0399590501&linkCode=as2&tag=budgetmealrecipesfb-20&linkId=1cecfc480f866b384c941a1069a078f7";  

            //Loop through and create all book info
            topBooks += "<div><h2 class='bookTitle'>" + number + ". " + title + "</h2><p class='noBottomMg'><strong>by:</strong> " 
            + listData.results.books[i].author + "</p><p class='noTopMg'><strong>ISBN: </strong>"
            + isbn + "</p>"
            + "<img class='bookImage' src='" + listData.results.books[i].book_image + "' />"
            + "<p>" + listData.results.books[i].description + "</p>"
            + "<div id='buttons'>"
            + "<button class='button-trio' type='button' onclick='addItem(&quot;" + title + "&quot;, &quot;" + bookURL + "&quot;)'>Add</button>"
            + "<button class='button-trio' type='button' onclick='removeItem(&quot;" + title + "&quot;, &quot;" + bookURL + "&quot;)'>Remove</button>"
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

