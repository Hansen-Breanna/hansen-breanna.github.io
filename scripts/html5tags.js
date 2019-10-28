//Audio 
function poppingClick() {
    var snd = new Audio('sounds/tiny-button.mp3');
    snd.play();
}

function removeFromListSound() {
    var removeSnd = new Audio('sounds/sms-alert-5-daniel_simon.mp3');
    removeSnd.play();
}

//Canvas
function canvasLine() {
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();
}