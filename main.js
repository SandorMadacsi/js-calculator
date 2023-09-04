
let firstNum = 0;
let secNum = 0;
let operatorSign = '';

let placeHolder = document.querySelector('.place-holder');
let input = document.querySelector('.input');


const nums = document.querySelectorAll('.num');
nums.forEach( num => num.addEventListener('click', function(){
    if(placeHolder.innerText === '0' || placeHolder.innerText === 'ERROR')
    {
        placeHolder.innerText = this.innerText;
    }
    else{
        placeHolder.innerText += this.innerText;
    }

}

));


const operators = document.querySelectorAll('.op');
operators.forEach(operator => operator.addEventListener('click', function(){
    if(firstNum !== 0)
    {
        secNum = Number(placeHolder.innerText);
        input.innerText = `${firstNum}  ${operatorSign} ${secNum}`;
        operate(firstNum, secNum, operatorSign);
        placeHolder.innerText = firstNum;
        operatorSign = this.innerText;
        input.innerText = `${firstNum}  ${operatorSign}`;
        placeHolder.innerText = '';
    }
    else{
        firstNum = Number(placeHolder.innerText);
        operatorSign = this.innerText;
        input.innerText = `${firstNum}  ${operatorSign}`;
        placeHolder.innerText = '';
    }
    

}));

let equal = document.querySelector('.equal');
equal.addEventListener('click', function(){
    if(firstNum === 0 && secNum === 0)
    {
        console.log("Hello");
        placeHolder.innerText = "ERROR";
    }
    else{
        secNum = Number(placeHolder.innerText);
        input.innerText = `${firstNum}  ${operatorSign} ${secNum}`;
        operate(firstNum, secNum, operatorSign);
        placeHolder.innerText = firstNum;
    }



});

let clear = document.querySelector('.clear');
clear.addEventListener('click', function(){
    placeHolder.innerText = '0';
    input.innerText = '0';
    operatorSign = '';
    firstNum = 0;
    secNum = 0;

})


function operate(a,b,o){
    switch (o) {
        case '+':
           firstNum = add(a,b);
           secNum = 0;
           operatorSign = '';
            break;
        case '-':
           firstNum = subtract(a,b);
           secNum = 0;
           operatorSign = '';
            break;
        case 'x':
          firstNum =  multiply(a,b);
          secNum = 0;
          operatorSign = '';
            break;
        case '/':
          firstNum =  divide(a,b);
          secNum = 0;
          operatorSign = '';
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
    if(b === 0) return 'ERROR'
    return a / b;
}