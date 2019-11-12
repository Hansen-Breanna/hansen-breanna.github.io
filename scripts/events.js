

function touchstart(ev) {
    document.getElementsByClassName('grayBg').addEventListener('touchstart', touchStartPractice);
    console.log( ev.touches );
}

function touchStartPractice() {

}

function touchAnimate() {
    document.getElementById('touchstart').classList.add('touchstart');

}