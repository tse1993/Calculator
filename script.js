const display = document.querySelector('#screen')
let firstNum = ''
let secondNum = ''
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

function handleNumberClick(number) {
  if (operator === '') {
    firstNum += number;
  } else {
    secondNum += number;
  }
  updateDisplay();
}

function handleOperatorClick(op) {
  if (firstNum !== '') {
    operator = op;
    updateDisplay();
  }
}

function handleEqualsClick() {
  if (firstNum !== '' && secondNum !== '' && operator !== '') {
    const num1 = parseFloat(firstNum);
    const num2 = parseFloat(secondNum);
    let result;

    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          alert("Cannot divide by zero");
          return;
        }
        break;
      default:
        return;
    }

    firstNum = result.toString();
    secondNum = '';
    operator = '';
    updateDisplay();
  }
}


function updateDisplay() {
  if (operator === '') {
    display.textContent = firstNum;
  } else {
    display.textContent = `${firstNum} ${operator} ${secondNum}`;
  }
}

document.querySelectorAll('.numbers').forEach(button => {
  button.addEventListener('click', () => handleNumberClick(button.textContent));
});

document.querySelectorAll('.operators').forEach(button => {
  button.addEventListener('click', () => handleOperatorClick(button.textContent));
});

document.querySelector('#equals').addEventListener('click', handleEqualsClick);

document.querySelector('#clearScreen').addEventListener('click', function() {
    display.textContent = '0';
    firstNum = ''
    secondNum = ''
    operator = ''
});


