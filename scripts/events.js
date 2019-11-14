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
    ballContainer.addEventListener('animationstart', start(ballContainer));
}

function start(ballContainer) {
    ballContainer.classList += 'ball-container';
    var ball = document.createElement('div');
    ball.classList += 'rolling-ball';
    ballContainer.appendChild(ball);
}

//Touchmove
function touchmove() {
    //select the thing we wanna drag
    var butterfly = document.getElementById('touchmove');
    console.log(butterfly);
    //listen to the touchmove event, every time it fires, grab the location of the touch
    //then assign it to mustachio
    butterfly.addEventListener('touchmove', function (ev) {
        //grab the location of the touch
        var touchLocation = ev.targetTouches[0];
        //assign mustachio new coordinates based on the touch
        butterfly.style.left = touchLocation.pageX + 'px';
        butterfly.style.top = touchLocation.pageY + 'px';
    })
}

//Toggle
function toggleBox() {
    var toggleBox = document.getElementById('toggleBox');
    toggleBox.classList.toggle('toggleBoxChange');
}

//Transition
document.getElementById("transitionBox").addEventListener("transitionend", myFunction);

function myFunction() {
  this.innerHTML = "Transitionend event occured - The transition has completed";
  this.id = 'transitionEnd';
}