//Click
function clickListener() {
    document.getElementById('clickListener').addEventListener('click', clickList(event));
    console.log(event);
}

function clickList(event) {
    event.target.previousSibling.textContent = "Found using addEventListener('click', function(event)). Also, check the console!"
}

function touchstart() {
    var paraChange = document.getElementById('touchstart');
    paraChange.addEventListener('touch', touchChange());
}

function touchChange(paraChange) {
    paraChange.target.className = "touchstart";
}