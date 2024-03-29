localStorage.clear();
localStorage.setItem("lastName", "Hansen");
localStorage.setItem("firstName", "Tyler");
localStorage.setItem("age", "18");
localStorage.setItem("height", "66 inches");
localStorage.removeItem("height");

//setItem
function setItem() {
    localStorage.clear();
    localStorage.setItem("lastName", "Hansen");
    localStorage.setItem("firstName", "Tyler");
    localStorage.setItem("age", "18");
    localStorage.setItem("height", "66 inches");
    document.getElementById("setItem").innerHTML = JSON.stringify(localStorage) + "<br><br>";
}

//getItem
function getItem() {
    document.getElementById("getItem").innerHTML = JSON.stringify(localStorage.getItem("lastName")) + "<br><br>";
}
//key
function key() {
    document.getElementById("key").innerHTML = localStorage.key(2) + "<br><br>";
}
console.log(localStorage.key(2));

//removeItem
function removeItem() {
    localStorage.clear();
    localStorage.setItem("lastName", "Hansen");
    localStorage.setItem("firstName", "Tyler");
    localStorage.setItem("age", "18");
    localStorage.setItem("height", "66 inches");
    localStorage.removeItem("height");
    document.getElementById("removeItem").innerHTML = JSON.stringify(localStorage) + "<br><br>";
}

//length
function length() {
    document.getElementById("length").innerHTML = JSON.stringify(localStorage.length) + "<br><br>";
}

//clear
function clearStorage() {
    localStorage.clear();
}

//storing and retrieving objects
var person = {name : "Tyler", age : "18", height: "66 inches"};
localStorage.setItem("storeObj", JSON.stringify(person));
console.log(localStorage.getItem("storeObj"));

//store and retrieve simple data 
function save() {
    var inputValue = document.getElementById("textfield").value;
    localStorage.setItem("text", inputValue);
    document.getElementById("simpleData").innerHTML = JSON.stringify(localStorage.text) + "<br><br>"; 
}

//remove saved data
function removeData() {
    localStorage.removeItem("text");
    document.getElementById("simpleData").innerHTML = JSON.stringify(localStorage.removeItem("text"));
}

//store and retrieve array
function storeArray() {
    var user = ["Tyler", "Braden", "Mary"];
    var stringifyUsers = JSON.stringify(user);
    sessionStorage.setItem("users", stringifyUsers);
    document.getElementById("userArray").innerHTML = sessionStorage.getItem("users");
    var retrieveUser = JSON.parse(sessionStorage["users"])
    document.getElementById("retrieveIndex").innerHTML = retrieveUser[0];
}

//store and retrieve object
function storeObject() {
    var firstPerson = {firstName : "Mary", lastName : "Allen", age : "20"};
    var personString = JSON.stringify(firstPerson);
    sessionStorage.setItem("newPerson", personString);
    document.getElementById("storeObj").innerHTML = sessionStorage.getItem("newPerson");
}

//associative arrays
function assocArray() {
array = {'make':'Honda','model':'Fit','color':'blue'};
var newCar = JSON.stringify(array);
sessionStorage.setItem("newCar", newCar);
var retrieveKey = JSON.parse(sessionStorage["newCar"]);
document.getElementById("assocArray").innerHTML = "<code>Array: " + sessionStorage.getItem("newCar") + "<br>" + "Referenced: <br>" + retrieveKey['make'] + "</code>";
}