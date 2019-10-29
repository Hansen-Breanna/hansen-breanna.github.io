//Lists data
function listInCategory(listID, categoryUrl) {
    let currentLists = 'https://api.nytimes.com/svc/books/v3/lists/current/' + categoryUrl + '?api-key=diIY45XysDkQAiOZr6dGSPoNM5ARPGeg';
    let lists = new XMLHttpRequest();
    lists.open('GET', currentLists);
    lists.send();
    lists.onload =  function (details) {
        let listData = JSON.parse(lists.responseText);
        var hardcoverFictionCategory = "";
        for (var i = 0; i < 15; i++) {
          hardcoverFictionCategory += listData.results.books[i].title + "<br>by: " 
            + listData.results.books[i].author + "<br>"
            + "<img class='bookImage' src='" + listData.results.books[i].book_image + "' /><br>" 
            + listData.results.books[i].description 
        }
        console.log(hardcoverFictionCategory);
        var details = document.getElementById("catDetails" + listID);
        sessionStorage.setItem(listID, "listID is " + listID);
        details.innerHTML = hardcoverFictionCategory;
    }
  }

  function toggleDetails(listID, categoryUrl) {
    console.log(listID);
    var details = document.getElementById("catDetails" + listID);
    if (details.style.display == 'none') {
        details.style.display = 'block';
        if (!sessionStorage.getItem(listID)) {
            listInCategory(listID, categoryUrl);
        }
    } 
    else {
        details.style.display = 'none';
    }
}