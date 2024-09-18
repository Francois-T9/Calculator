
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
    if(b===0) {
        displayCopy('div by 0');
    }
    else {
        return(a/b);
    }
    
}

function operate(a,b,operator) {
    
    a = parseFloat(a);
    b = parseFloat(b);
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
        if(b===0) {
            return('divide by 0')
        }
        else {
        return(divide(a,b))
        }
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



function separateStr(str) { //only handles single line of calculus (i.e a+b)
    
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

function evaluateExpression(str) {
    let numbers=[];
    let operators=[];
    let num="";
    for(let i=0;i<str.length;i++) {
        if(!isNaN(str[i])) {
            num+=str[i];
            
        }
        else { //when an operator is met
            numbers.push(num);
            operators.push(str[i]);
            num="";
        }
    }
    numbers.push(num);

    
    result=numbers[0];
  
    for (let i=0;i<operators.length;i++) {
        result=operate(result,numbers[i+1],operators[i])
    }
    return(result);

}



// console.log(separateStr("124+12"));

document.querySelectorAll("button").forEach(button=> {
    button.addEventListener("click",function() {
        
        if(this.textContent=="C") {
            screenValue="";
            displayCopy(screenValue);

        }
        else if(this.textContent=="=") {
            if(screenValue=='') {


            }
            else {
                // console.log(displayValue.textContent);
                // a=separateStr(displayValue.textContent)[0];
                // b=separateStr(displayValue.textContent)[1];

                // operator=separateStr(displayValue.textContent)[2];
                let resu=evaluateExpression(displayValue.textContent);
                // console.log(resu);
                displayCopy(resu);
                screenValue=resu;
            }

            
            
        }
        else {
            
            screenValue+=this.textContent;
            displayCopy(screenValue);
        }
        
        
        
    })});

