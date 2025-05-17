const screen = document.querySelector('#screen')
let num1 = ''
let num2 = ''
let operator = ''

function add(num1,num2){
    return num1 + num2
}

function sub(num1,num2){
    return num1 - num2
}

function multiply(num1,num2){
    return num1 * num2
}

function divide(num1,num2){
    return num1 / num2
}

function operate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return sub(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            if (num2 === 0) {
                throw new Error("Can't divide by zero");
            }
            return divide(num1, num2);
    }
}