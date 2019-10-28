function toggleDetails() {
    var details = document.getElementsByClassName('listDetails');
    console.log("Hello");
    if (details.style.display == 'none') {
        details.style.display = 'block';
    } 
    else {
        details.style.display = 'none';
    }
}

