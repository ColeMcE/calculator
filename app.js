//Declare buttons
const numberButtons = document.getElementsByClassName("number");
const operatorButtons = document.getElementsByClassName("operator");
const calcInput = document.getElementById("number-display");
const allClear = document.getElementById("ac-button");
const clear = document.getElementById("clear-button");
const equals = document.getElementById("equal");
//Declare operation variables
let storedNumber = '';
let clickedOperator = ''
let firstNumber = '';
let result = '';
//Logic flags
let equalsFlag = true;



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
clear.addEventListener("click", clearLast)
equals.addEventListener("click", equalsClick);

//Updates number display when number is clicked
function numbInput () {
    if (equalsFlag == true) {
        if (calcInput.innerText.length < 9)    
        if (calcInput.innerText == "0") {
            storedNumber = this.innerText;
            calcInput.innerText = storedNumber;
        }
        else {
            storedNumber += this.innerText;
            calcInput.innerText = storedNumber;
        }
    }
    else {
        clearAll();
        if (calcInput.innerText.length < 9)    
        if (calcInput.innerText == "0") {
            storedNumber = this.innerText;
            calcInput.innerText = storedNumber;
        }
        else {
            storedNumber += this.innerText;
            calcInput.innerText = storedNumber;
        }
    }
    
}

function operationClick () {
    if (firstNumber && storedNumber) {
        //equals function
        //oper[this.id](parseFloat(firstNumber), parseFloat(storedNumber));
        displayResult();
      }
    firstNumber = storedNumber;
    clickedOperator = this.id;
    console.log(this.id);
    calcInput.innerText = storedNumber + this.innerText;
    storedNumber = "";
    console.log('FirstNumber' + firstNumber + 'Stored' + storedNumber);

}

function displayResult () {
    result = parseFloat(oper[clickedOperator](parseFloat(firstNumber), parseFloat(storedNumber)));
    calcInput.innerText = result;
    storedNumber = result;
}

function equalsClick () {
    equalsFlag = false;
    displayResult();
    
}

//Sets display value back to zero
function clearAll () {
    storedNumber = "0";
    firstNumber = "";
    calcInput.innerText = storedNumber;
    equalsFlag = true;
    
    
}

//Removes last digit entered, resetting to zero if only one left
function clearLast () {
    let removeOne = storedNumber;
    console.log(storedNumber.length);
    if (removeOne.length > 1) {
        removeOne = removeOne.slice(0, -1);
        storedNumber = removeOne;
        calcInput.innerText = storedNumber;
    }
    else if (removeOne.length == 1) {
        clearAll();
    }
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



