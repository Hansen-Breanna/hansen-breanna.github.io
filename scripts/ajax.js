//Star Wars API
let apiURL = 'https://swapi.co/api/';
let starWars = new XMLHttpRequest;
starWars.open('GET', apiURL, true);
starWars.send();
starWars.onload =  function () {
    let starWarsInfo = JSON.parse(starWars.responseText);
    //getAllResponseHeaders()
    document.getElementById("AllResponseHeaders").innerHTML = starWars.getAllResponseHeaders();
    console.log(starWarsInfo);
}

//NYT Best Seller Books

let bestBooks = 'https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=diIY45XysDkQAiOZr6dGSPoNM5ARPGeg';
let books = new XMLHttpRequest();
books.open('GET', bestBooks);
books.send();
books.onload =  function () {
    let booksInfo = JSON.parse(books.responseText);
    console.log(booksInfo); 
    console.log(booksInfo.results[0].display_name);   
    var category = "";
    for (var i = 0; i < 10; i++) {
        category += booksInfo.results[i].display_name + "<br>"; 
    }
    console.log(booksInfo);
    document.getElementById("bookCategories").innerHTML = category;
    //getResponseHeader
    document.getElementById("ResponseHeader").innerHTML = books.getResponseHeader;
}
