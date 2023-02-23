//Declare Variables
let numberButtons = document.getElementsByClassName("number");
let calcInput = document.getElementById("number-display");
let allClear = document.getElementById("ac-button");
let clear = document.getElementById("clear-button");

//Set initial display value
calcInput.innerHTML = "0";

//Add event listeners
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", numbInput);
    
}
allClear.addEventListener("click", clearAll);
clear.addEventListener("click", clearLast)

//Updates number display when number is clicked
function numbInput () {
    if (calcInput.innerHTML.length < 6)    
        if (calcInput.innerHTML == "0") {
            calcInput.innerHTML = this.innerHTML
        }
        else {
            calcInput.innerHTML += this.innerHTML;
        }
}

//Sets display value back to zero
function clearAll () {
    calcInput.innerHTML = "0";
    //May need to add a reset for a stored value later
}

//Removes last digit entered, resetting to zero if only one left
function clearLast () {
    let removeOne = calcInput.innerHTML;
    console.log(removeOne);
    if (removeOne.length > 1) {
        removeOne = removeOne.slice(0, -1);
        calcInput.innerHTML = removeOne;
    }
    else if (removeOne.length == 1) {
        clearAll();
    }
}



