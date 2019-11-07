//Fading Square
function fadeOut() {
    var square = document.getElementById("square");
    square.style.opacity = 0;
}

function fadeIn() {
    var showSquare =  document.getElementById("square");
    showSquare.style.opacity = 1;
}

//List Pop-up
function showList() {
    var showPopUp = document.getElementById('list');
    showPopUp.style.display = "block";
}

function hideList() {
    var hidePopUp = document.getElementById('list');
    hidePopUp.style.display = "none";
}

//Rolling Box
function rollingBox() {
    var shrinkBox = document.getElementById('rolling-box');
    shrinkBox.style.transition = "width 3s, height 3s, background-color 3s, border-radius 2s, transform 3s";
    shrinkBox.id = "rollingBox";
}

function rollingBoxBack() {
    var changeBox = document.getElementById('rollingBox');
    changeBox.style.transition = "all 2s";
    changeBox.id = "rolling-box";
}

//Transform Box
function scaleBox() {
    var scaleBox = document.getElementById('transform-box');
    scaleBox.style.transform = "scale(.5) skewY(45deg)";
}

function returnBox() {
    var scaleBox = document.getElementById('transform-box');
    scaleBox.style.transform = "none";
}