//Add classOne
function classOneAdd() {
    var createFirstClass = document.getElementById("addClassOne");
    createFirstClass.classList.add("classOne");
    createFirstClass.textContent = ".classOne added using .add()";
}

//Add classTwo
function classTwoAdd() {
    var createSecondClass = document.getElementById("addClassTwo");
    createSecondClass.classList += "classTwo";
    createSecondClass.textContent = ".classTwo added using +=";
}

//Remove classThree
function classThreeRemove() {
    var thirdClass = document.getElementById("classThree");
    thirdClass.classList.remove("classThree");
    thirdClass.textContent = ".classThree removed using .remove()";
}

//Remove classFour
function classFourRemove() {
    var fourthClass = document.getElementById("classFour");
    fourthClass.classList -= ("classFour");
    fourthClass.textContent = ".classFour removed using -=";
}

//Toggle class
function toggleClass() {
    var classFive = document.getElementById("toggleClass");
    classFive.classList.toggle("classFour");
}

//ClassName
function classNameChange() {
    var classSix = document.getElementById("classSix");
    classSix.className = "classFour";
    classSix.textContent = "overwritten by .classFour";
}