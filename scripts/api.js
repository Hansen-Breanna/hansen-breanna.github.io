//Star Wars API
let apiURL = 'https://swapi.co/api/';
let starWars = new XMLHttpRequest();
starWars.open('GET', apiURL);
starWars.send();
starWars.onload =  function () {
    let starWarsInfo = JSON.parse(starWars.responseText);
    console.log(starWarsInfo);
    //Get property names
    let categoryItems = Object.getOwnPropertyNames(starWarsInfo);
    var categoryList = "";
    for (var i = 0; i < categoryItems.length; i++) {
        var item = categoryItems[i];
        categoryList += item + "<br>";
        document.getElementById("starWarsInfo").innerHTML = categoryList;
    }
}

