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

// While loop
function whileLoop() {
    var i = 1;
    while (i < 3) {
        window.alert(i);
        i++;
    }
    document.getElementById("whileLoop").innerHTML = "<pre><code>" + i + "</code></pre>";
}

// Do/while Loop
function doWhileLoop() {
    var text = ""
    var i = 0;
    do {
      text += "<br>Start at 0 and count by 2's to 10: " + i;
      i+=2;
    }
    while (i < 10);
    document.getElementById("doWhileLoop").innerHTML = text;
}

// Function using just variables.
function greetUser(){
    //This line prompts the user to type in his name.
    var name = window.prompt("Please enter your name");
    
    //Create a personalized greeting for the user.
    var greeting = "Hello, " + name + ". Welcome to my site!";
    
    //The next line causes the computer to display a greeting to the user in a popup window.
    window.alert(greeting);
}

// How to index a value in an array
function indexArray() {
    var colors = ["Blue", "Red", "Green", "Yellow"];
    document.getElementById("indexArray").innerHTML = "<pre><code>" + colors[3] + "</code></pre>";
}