//Click
function clickListener() {
    document.getElementById('clickListener').addEventListener('click', clickList(event));
    console.log(event);
}

function clickList(event) {
    event.target.previousSibling.textContent = "Found using addEventListener('click', function(event)). Also, check the console!"
}

//Touchstart
function touchstart() {
    var paraChange = document.getElementById('touchstart');
    paraChange.addEventListener('touchstart', touchChange(event));
    console.log(event);
}

function touchChange(event) {
    event.target.id = "touchStartChange";
}

//Touchend
function touchend() {
    var endChange = document.getElementById('touchend');
    endChange.addEventListener('touchend', touchEndChange(event));
}

function touchEndChange(event) {
    event.target.id = "touchEndChange";
}

//Animation
window.onload = animateBall();

function animateBall() {
    var ballContainer = document.getElementById('ball-container');
    ballContainer.classList += 'ball-container';
    var ball = document.createElement('div');
    ball.classList += 'rolling-ball';
    ballContainer.appendChild(ball);
}

//Touchmove
window.onload = function () {
    //select the thing we wanna drag
    var butterfly = document.getElementById('touchmove');
    //listen to the touchmove event, every time it fires, grab the location of the touch
    //then assign it to mustachio
    butterfly.addEventListener('touchmove', function (ev) {
        //grab the location of the touch
        var touchLocation = ev.targetTouches[0];
        //assign mustachio new coordinates based on the touch
        butterfly.style.left = touchLocation.pageX + 'px';
        butterfly.style.top = touchLocation.pageY + 'px';
    })
    butterfly.addEventListener('touchend', function (ev) {
        //current mustachio position when dropped
        var x = parseInt(butterfly.style.left);
        var y = parseInt(butterfly.style.top);
        //check to see if that position meets our constraints
        if (x < 388 || x > 646) {
            butterfly.style.left = '450px';
            butterfly.style.top = '175px';
        }
        if (y < 100 || y > 356) {
            butterfly.style.left = '450px';
            butterfly.style.top = '175px';
        }
    })
}



//Toggle
function toggleBox() {
    alert('The toggle event has beenactivated.');
}
