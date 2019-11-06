function fadeOut() {
    var square = document.getElementById("square");
    square.style.opacity = 0;
}

function fadeIn() {
    var showSquare =  document.getElementById("square");
    showSquare.style.opacity = 1;
}

function showList() {
    var showPopUp = document.getElementById('list');
    showPopUp.style.display = "block";
}

function hideList() {
    var hidePopUp = document.getElementById('list');
    hidePopUp.style.display = "none";
}

function rollingBox() {
    var changeBox = document.getElementById('rolling-box');
    changeBox.style.transition = "all 2s";
    changeBox.id = "rollingBox";
}