// Get elements from the DOM
// const display = document.querySelector('.display');
// const clearButton = document.querySelector('.clear');
// const backspaceButton = document.querySelector('.backspace');
// const operatorButtons = document.querySelectorAll('.operator');
// const numberButtons = document.querySelectorAll('.number');
// const equalsButton = document.querySelector('.equals');

// Define global variables for the calculator
let firstNumber = '';
let secondNumber = '';
let operator = '';
let displayValue = '';
let decimalPressed = false;

// let decimalButton = document.querySelector('.decimal');
// decimalButton.addEventListener('click', decimalButton);

// let equalsButton = document.querySelector('.equals');
// equalsButton.addEventListener('click', equalsButton);

// let clearButton = document.querySelector('.clear');
// clearButton.addEventListener('click', clearButton);


// Define functions for the basic math operators
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    displayError();
    return null;
  } else {
    return num1 / num2;
  }
}

// Define function to operate on two numbers with a given operator
function operate(operator, num1, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
  }
}

// Define function to update the display with the current value
function updateDisplay() {
  let display = document.getElementById('display');
  display.textContent = displayValue;
}

// Define function to add a number to the current value
function appendNumber(number) {
  if (displayValue === '0') {
    displayValue = number;
  } else {
    displayValue += number;
  }
  updateDisplay();
}

// Define function to handle decimal point button press
function decimalButton() {
  if (!decimalPressed) {
    displayValue += '.';
    decimalPressed = true;
    updateDisplay();
  }
}

// Define function to handle operator button press
function operatorButton(operatorInput) {
  if (firstNumber === '') {
    firstNumber = displayValue;
    operator = operatorInput;
    displayValue = '';
    decimalPressed = false;
  } else {
    secondNumber = displayValue;
    let result = operate(operator, firstNumber, secondNumber);
    firstNumber = result;
    operator = operatorInput;
    secondNumber = '';
    displayValue = '';
    decimalPressed = false;
    updateDisplay();
  }
}

// Define function to handle equals button press
function equalsButton() {
  if (firstNumber !== '' && operator !== '' && displayValue !== '') {
    secondNumber = displayValue;
    let result = operate(operator, firstNumber, secondNumber);
    firstNumber = result;
    operator = '';
    secondNumber = '';
    displayValue = result.toString();
    decimalPressed = false;
    updateDisplay();
  }
}

// Function to handle clear button when pressing it
function clearButton() {
  firstNumber = '';
  secondNumber = '';
  operator = '';
  displayValue = '0';
  decimalPressed = false;
  updateDisplay();
}

// Defining function to display error message
function displayError() {
  displayValue = 'Error: Cannot divide by zero';
  updateDisplay();
}

// Adding event listeners to the calculator buttons
let numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    appendNumber(button.textContent);
  });
});

let operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    operatorButton(button.textContent);
  });
});

