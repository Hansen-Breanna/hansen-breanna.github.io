//Audio 
function poppingClick() {
    var snd = new Audio('sounds/tiny-button.mp3');
    snd.play();
}

function removeFromListSound() {
    var removeSnd = new Audio('sounds/sms-alert-5-daniel_simon.mp3');
    removeSnd.play();
}

//Canvas Line
var c = document.getElementById("canvasLine");
var ctx = c.getContext("2d");
ctx.moveTo(60,40);
ctx.lineTo(100,10);
ctx.lineTo(140,40);
ctx.lineTo(140,90);
ctx.lineTo(60,90);
ctx.lineTo(60,40);
ctx.stroke();

//Canvas Circle
var c = document.getElementById("canvasCircle");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

//Canvas Text
var c = document.getElementById("canvasText");
var ctx = c.getContext("2d");
ctx.font = "28px Arial";
ctx.fillStyle = "#2a5381";
ctx.fillText("This is blue", 30, 40);
ctx.font = "55px Arial";
ctx.fillStyle = "#2a5381";
ctx.fillText("TEXT", 30, 90);

//Canvas Stroke Text
var c = document.getElementById("canvasStrokeText");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("Hello World", 10, 30);

//Canvas Linear Gradient
var c = document.getElementById("canvasLinearGradient");
var ctx = c.getContext("2d");
    // Create gradient
    var grd = ctx.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "white");

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 150, 80);

//Canvas Circular Gradient
var c = document.getElementById("canvasCircularGradient");
var ctx = c.getContext("2d");
    //Create gradient
    var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "white");

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 150, 80);

//Canvas Image
var c = document.getElementById("canvasImage");
var ctx = c.getContext("2d");
var img = document.getElementById("imageForCanvas");
ctx.drawImage(img, 10, 10)

//Canvas Items
ctx.moveTo(60,40);
ctx.lineTo(100,10);
ctx.lineTo(140,40);
ctx.lineTo(140,90);
ctx.lineTo(60,90);
ctx.lineTo(60,40);
ctx.arc(70, 22, 15, 2, 2 * Math.PI);
ctx.stroke();