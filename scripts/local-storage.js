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
    document.getElementById("getItem").innerHTML = JSON.stringify(localStorage.getItem("lastName", "Hansen")) + "<br><br>";
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