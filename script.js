let a;
let b;
let operator;

function add(a,b) {
    return(a+b);
}

function subtract(a,b) {
    return(a-b);
}

function multiply(a,b) {
    return(a*b);
}

function divide(a,b) {
    return(a/b);
}

function operate(a,b,operator) {
    if(operator=="+") {
        return(add(a,b))
    }
    else if(operator=="-") {
        return(subtract(a,b))
    }
    else if(operator=="*") {
        return(multiply(a,b))
    }
    else if(operator=="/") {
        return(divide(a,b))
    }
    else {
        alert("enter a valid operator")
    }
}

function displayCopy(str) {
    let display=document.querySelector(".display");
    display.textContent=str;

}

document.querySelectorAll("button").forEach(button=> {
    button.addEventListener("click",function() {
        displayCopy(this.textContent)})});