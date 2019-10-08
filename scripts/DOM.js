//Get JSON link-names.json file
var newMenu = new XMLHttpRequest();
var requestURL = '../JSON/sample.json';

//HTTP call using the requestURL variable
newMenu.open("Get", requestURL, true);
newMenu.send();

//Function that formats the string, parses, and outputs result
function parse() {
  var menu = JSON.parse(newMenu.responseText);
  document.getElementById('append-nav-menu').innerHTML = "<pre><code>The URL '" + menu.javascript + "' is from a JSON.</code></pre>";
  console.log(menu);
}

function createNav {
    // Create an li node
    var links = document.createElement('li');

    var text = document.createTextNode("Water");

}