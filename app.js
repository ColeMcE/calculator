let numberButtons = document.getElementsByClassName("number");
let calcInput = document.getElementById("number-display");

calcInput.innerHTML = "0";

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", numbInput);
    
}

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



