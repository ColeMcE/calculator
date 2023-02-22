//Declare Variables
let numberButtons = document.getElementsByClassName("number");
let calcInput = document.getElementById("number-display");
let allClear = document.getElementById("ac-button");

//Set initial display value
calcInput.innerHTML = "0";

//Add event listeners
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", numbInput);
    
}
allClear.addEventListener("click", clearAll);

//Updates number display when number is clicked
function numbInput () {
    console.log("numbah heya oh yeah wow cool lemmeseeit");
    if (calcInput.innerHTML.length < 9)    
        if (calcInput.innerHTML == "0") {
            calcInput.innerHTML = this.innerHTML
        }
        else {
            calcInput.innerHTML += this.innerHTML;
        }
}

function clearAll () {
    calcInput.innerHTML = "0";
}



