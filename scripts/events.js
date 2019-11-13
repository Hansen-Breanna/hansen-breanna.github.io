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