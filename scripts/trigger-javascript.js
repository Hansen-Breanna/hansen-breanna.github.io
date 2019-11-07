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
    shrinkBox.style.transition = "all 2s";
    shrinkBox.id = "rollingBox";
}

function rollingBoxBack() {
    var changeBox = document.getElementById('rollingBox');
    changeBox.style.transition = "all 2s";
    changeBox.id = "rolling-box";
}

//Amazon Ad Animation
function amazonAd() {
    var ad = document.getElementById('verticalAmazonAd');
    ad.id = "verticalAd";
    var closeButton = document.getElementById('adButton');
    closeButton.style.display = "none";
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