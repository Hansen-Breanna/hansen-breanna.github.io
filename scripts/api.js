/*let apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=4156210&APPID=ef96bb82b8c215e4ec5411a85a1e3c8e&units=imperial';
let weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURL);
weatherRequest.send();
weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
} */

//Star Wars API
let apiURL = 'https://swapi.co/api/';
let starWars = new XMLHttpRequest();
starWars.open('GET', apiURL);
starWars.send();
starWars.onload =  function () {
    let starWarsInfo = JSON.parse(starWars.responseText);
    console.log(starWarsInfo);
}

//NYT Best Seller Books
function getBookList() {
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
    }
}

//Advice Slip API
fetch('https://api.adviceslip.com/advice')
    .then(resp => {
        resp.json()
            .then(
                console.log(resp)
            );
    });