let buttons = document.getElementsByClassName("button");
console.log(buttons);
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", onClick);
    
}

function onClick () {
    console.log("click");
}