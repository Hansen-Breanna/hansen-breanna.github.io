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

//Word Associations
let wordAssoc = "https://api.wordassociations.net/associations/v1.0/json/search?apikey=aededad4-caa8-4a00-b941-c7d2f3f311a6&text=welcome&lang=en&limit=6";
let words = new XMLHttpRequest();
words.open('GET', wordAssoc);
words.send();
words.onload =  function () {
    let wordGames = JSON.parse(words.responseText);
    console.log(wordGames);
}

//Spoonacular - doesn't work right yet
let minion = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=5a8cf887754042f4bf171395763c0f70?ingredients=apples,+flour,+sugar&number=2";
let minionSpeak = new XMLHttpRequest();
minionSpeak.open('GET', minion);
minionSpeak.send();
minionSpeak.onload =  function () {
    let minionTranslate = JSON.parse(minionSpeak.responseText);
    console.log(minionTranslate);
}

//Advice Slip API
fetch('https://api.adviceslip.com/advice')
    .then(resp => {
        resp.json()
            .then(
                console.log(resp)
            );
    });