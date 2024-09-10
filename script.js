
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

let displayValue=document.querySelector(".display");
let evalButton=document.querySelector(".evalBtn");


evalButton.addEventListener("click",function() {
    // console.log("you pressed eval button");
    // operate()
})

let screenValue='';

let a;
let b;
let operator;

let strOperator="+-*/";

function separateStr(str) {
    
    for(let i=0;i<str.length;i++) {
        
        if(str[i]=="+" || str[i]=="-" || str[i]=="*" || str[i]=="/") {

            a=str.slice(0,i);
            operator=str[i];
            b=str.slice(i+1,str.length);
            // console.log(operator);
            return([a,b,operator]);

        }
    }


    // takes for example "12+1" and return a=12, b=1 and operand ="+"
}

// console.log(separateStr("124+12"));

document.querySelectorAll("button").forEach(button=> {
    button.addEventListener("click",function() {
        
        if(this.textContent=="C") {
            screenValue="";
            displayCopy(screenValue);

        }
        else if(this.textContent=="=") {
            // console.log(displayValue.textContent);
            a=separateStr(displayValue.textContent)[0];
            b=separateStr(displayValue.textContent)[1];
            
            operator=separateStr(displayValue.textContent)[2];
            let resu=operate(parseInt(a),parseInt(b),operator);
            console.log(resu);
            displayCopy(resu);
            
        }
        else {
            
            screenValue+=this.textContent;
            displayCopy(screenValue);
        }
        
        
        
    })});

