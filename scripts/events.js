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
    paraChange.addEventListener('touch', touchChange(event));
}

function touchChange(event) {
    event.target.className = "touchstart";
    console.log("hello");
}