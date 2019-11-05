//Audio 
function poppingClick() {
    var snd = new Audio('../sounds/tiny-button.mp3');
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
    var grd = ctx.createLinearGradient(0, 50, 200, 0);
    grd.addColorStop(0, "red");
    grd.addColorStop(0.2, "orange");
    grd.addColorStop(0.4, "yellow");
    grd.addColorStop(0.6, "green");
    grd.addColorStop(0.8, "blue");
    grd.addColorStop(1, "purple");

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 180, 80);

//Canvas Circular Gradient
var c = document.getElementById("canvasCircularGradient");
var ctx = c.getContext("2d");
    //Create gradient
    var grd = ctx.createRadialGradient(80, 50, 5, 90, 60, 150);
    grd.addColorStop(0, "#cc0000");
    grd.addColorStop(0.5, "#660000");
    grd.addColorStop(1, "#654321");

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 180, 80);

//Canvas Image
var c = document.getElementById("canvasImage");
var ctx = c.getContext("2d");
var img = document.getElementById("imageForCanvas");
ctx.drawImage(img, 5, 5);

//Canvas Mashups
//House with rainbow
var c = document.getElementById("houseOnRainbow");
var ctx = c.getContext("2d");
    // Create gradient
    var grd = ctx.createLinearGradient(0, 50, 200, 0);
    grd.addColorStop(0, "red");
    grd.addColorStop(0.2, "orange");
    grd.addColorStop(0.4, "yellow");
    grd.addColorStop(0.6, "green");
    grd.addColorStop(0.8, "blue");
    grd.addColorStop(1, "purple");

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(3, 3, 195, 95);

    //House
    ctx.moveTo(60,40);
    ctx.lineTo(100,10);
    ctx.lineTo(140,40);
    ctx.lineTo(140,90);
    ctx.lineTo(60,90);
    ctx.lineTo(60,40);
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 5;
    ctx.arc(70, 22, 15, 2, 2 * Math.PI);
    ctx.stroke();

//Peak games
var c = document.getElementById("gradientWithText");
var ctx = c.getContext("2d");
    //Create gradient
    var grd = ctx.createRadialGradient(80, 50, 5, 90, 60, 150);
    grd.addColorStop(0, "#cc0000");
    grd.addColorStop(0.5, "#660000");
    grd.addColorStop(1, "#654321");

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 180, 80);

    // Add text
    ctx.font = "700 oblique 35px Arial";
    ctx.fillStyle = "#fff";
    ctx.fillText("peak", 60, 45);
    ctx.font = "27px Arial";
    ctx.fillStyle = "#fff";
    ctx.fillText("games", 60, 75);

//Add Button
var add = document.getElementById("addButton");
var ctx = add.getContext("2d");
ctx.moveTo(60,75);
ctx.lineTo(230,75);
ctx.lineWidth = 8;
ctx.stroke();
ctx.moveTo(145,30);
ctx.lineTo(145,125);
ctx.lineWidth = 8;
ctx.stroke();

//Remove Button
var c = document.getElementById("removeButton");
var ctx = c.getContext("2d");
ctx.moveTo(60,75);
ctx.lineTo(230,75);
ctx.lineWidth = 8;
ctx.stroke();

//Buy Button
var c = document.getElementById("buyButton");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(150, 55, 25, 1.5, 1.8 * Math.PI);
ctx.lineWidth = 8;
ctx.stroke();
ctx.beginPath();
ctx.arc(150, 100, 25, 4.5, 2.75 * Math.PI);
ctx.lineWidth = 8;
ctx.stroke();
ctx.moveTo(160,20);
ctx.lineTo(160,135);
ctx.stroke();
ctx.moveTo(145,20);
ctx.lineTo(145,135);
ctx.stroke();

