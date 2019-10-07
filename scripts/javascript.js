function cars() {
    var car = {year:"2010", make:"Ford", model:"Mustang"};

    var text = "";
    var x;
    for (x in car) {
        text += car[x] + " ";
    }
    document.getElementById("for-in--loop-cars").innerHTML = "<pre><code>" + text + "</code></pre>";
}