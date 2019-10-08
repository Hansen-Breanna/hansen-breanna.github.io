//For/in loop

function cars() {
    var car = {year:"2010", make:"Ford", model:"Mustang"};

    var text = "";
    var x;
    for (x in car) {
        text += car[x] + " ";
    }
    document.getElementById("for-in--loop-cars").innerHTML = "<pre><code>" + text + "</code></pre>";
}

// For/of loop
function forOfLoop() {
    var cars = ['BMW', 'Volvo', 'Mini'];
    var x;
    
    for (var x of cars) {
      document.getElementById("forOfLoop").innerHTML += "<pre><code>" + (x + "<br >") + "</code></pre>";
      console.log(x);
    }
}