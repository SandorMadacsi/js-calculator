
let firstNum = null;
let secNum = null;
let operator = '';

let display = document.querySelector('.display');


const nums = document.querySelectorAll('.num');
nums.forEach( num => num.addEventListener('click', function(){
    if(!firstNum == null)
    {
        firstNum = Number(this.innerText);
    }else{
        secondNum = Number(this.innerText);
    }
    
    display.innerText = firstNum;
}

));

let equal = document.querySelector('.equal');
equal.addEventListener('click', function(){

});


function operate(a,b,o){
    switch (o) {
        case '+':
          firstNum = add(a,b);
            break;
        case '-':
          firstNum = subtract(a,b);
            break;
        case '*':
          firstNum = multiply(a,b);
            break;
        case '/':
          firstNum = divide(a,b);    
            break;
        default:
            break;
    }
}

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}