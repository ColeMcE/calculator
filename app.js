//Declare buttons
const numberButtons = document.getElementsByClassName("number");
const operatorButtons = document.getElementsByClassName("operator");
const calcInput = document.getElementById("number-display");
const allClear = document.getElementById("ac-button");
const clear = document.getElementById("clear-button");
const equals = document.getElementById("equal");

//Declare operation variables
let firstNumber = '';
let secondNumber = '';
let clickedOperator = '';
let result = '';

//Set initial display value
calcInput.innerText = "0";

//Add event listeners
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", numbInput);
    
}
for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener("click", operationClick);
    
}
allClear.addEventListener("click", clearAll);
clear.addEventListener("click", clearLast);
equals.addEventListener("click", equalsClick);

function clearAll () {
    calcInput.innerHTML = "0";
    firstNumber = '';
    secondNumber = '';
    clickedOperator = '';
    result = '';
}

function clearLast () {
    if (calcInput.innerHTML != "0" && calcInput.innerHTML.length > 1) {
        calcInput.innerHTML = calcInput.innerHTML.substring(0, calcInput.innerHTML.length-1);
        
    }
    else {
        calcInput.innerHTML = "0";
    }

}

function equalsClick () {

}

function numbInput () {
    if (calcInput.innerHTML != "0") {
        calcInput.innerHTML += this.innerText;
        
    }
    
    else {
        calcInput.innerHTML = this.innerText;
        
    }

}

function operationClick () {

}


let oper = {
    add: function(x,y) {
        return (x + y);
         console.log("add");
    },
    sub: function(x,y) {
        return (x - y);
         console.log("subtract");
    },
    mult: function(x,y) {
        return (x * y);
        console.log("multiply");
    },
    div: function(x,y) {
        return (x / y);
         console.log("divide");
    }
  }


