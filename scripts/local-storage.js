//clear
localStorage.clear();

//setItem
function setItem() {
    localStorage.setItem("lastName", "Hansen");
    localStorage.setItem("firstName", "Tyler");
    localStorage.setItem("age", "18");
    localStorage.setItem("height", "66 inches");
    document.getElementById("setItem").innerHTML = JSON.stringify(localStorage) + "<br><br>";
}

function getItem() {
    localStorage.setItem("lastName", "Hansen");
    document.getElementById("getItem").innerHTML = JSON.stringify(localStorage.getItem("lastName", "Hansen"));
}
//key
console.log(localStorage.key(1));

//removeItem
function removeItem() {
localStorage.removeItem("height");
console.log(localStorage);
}

//getItem
localStorage.getItem("age");

//length