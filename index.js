import { mathOperation, answer } from "./math.js";
const calculatorButtons = document.querySelectorAll('button');
const decimalButton = document.querySelector('.decimal');
const display = document.getElementById('display');
const wornings = document.getElementById('worn')


let numString = ''
    , operator = ''
    , num1
    , num2;

display.innerText = ''


const warningMessage = function(message) {
    wornings.innerText = message;
    wornings.classList.add('worned')
        setTimeout(function(){
            document.getElementById('worn').classList.remove('worned')
        },2000)
},
inputZero = function(eKey) {
    if (operator === '/' && !numString ) {
        warningMessage("Can't divide by 0!")
        
    } else {
        display.innerText += eKey;
            numString += eKey;
    }

},
handleBackspace = function() {
console.log(display.innerText.slice( -1))
    if (display.innerText.slice(-1) === '+' || display.innerText.slice(-1) === '-' || display.innerText.slice(-1) === '*' || display.innerText.slice(-1) === '/') {
        display.innerText =  display.innerText.slice(0, -1);
        numString = num1.toString();
    } else if (!display.innerText) {
    return;
    } else {
    display.innerText =  display.innerText.slice(0, -1);
    numString = numString.slice(0, -1);
    }
},
handleDecimal = function(eKey) {
    if (!numString) {
        numString += `0.`
        display.innerHTML += '0.'
    }
    if(!numString.includes(".")) {
        numString += eKey;
        display.innerHTML += eKey    
    } else {
        warningMessage("Can't put two of those!");    
    }
    return numString;
},
handleDelete = function() {
    numString = '';
        operator = '';
        num1 = undefined;
        num2 = undefined;
        display.innerText = '';
},
equalOperator = function() {
     if (!display.innerText) {
            warningMessage('Equal to what?');
        }
      else if (!operator) {
        return warningMessage('I think you know the answer.')
      } else { 
        num2 = Number(numString);
        console.log({numString, num1, num2})

        numString = '';
        display.innerText = mathOperation(num1, num2, operator);
        operator = ''
        numString = display.innerText;
    }
},
InputHandling = function(eKey) { calculatorButtons.forEach((button) => {
    if (eKey !== button.value) return;
    else if (eKey === 'Delete') {
      handleDelete();
    } else if (eKey === 'Backspace') {
        handleBackspace()
    } else if (eKey === 'Enter') {
        if (answer) { 
            display.innerText += answer
            numString += answer.toString();
        }
        else return;
    }
    else if (display.innerText.length === 13) warningMessage('Too long operation for me :(')
    else if ((/[-+*\/\=]/).test(eKey)) {
        insertOperator(eKey)
    } else if (display.innerText === '0' && eKey !== '.') {
        warningMessage('After Zero ?')
    } else if (eKey === '0'){
        inputZero(eKey)
    } else if (eKey === '.') {
        handleDecimal(eKey);
    } else if (eKey === button.value) {
        display.innerText += button.value;
        numString += button.value; 
    } else if (!(/\d/).test(eKey) && !(/[-+*\/\=]/).test(eKey)) warningMessage('Numbers or operators please!')
    })
},
insertOperator = function(eKey) {
    if ((/[-+*\/\=]$/).test(display.innerText)) {
        warningMessage('You need only one of those.');
    }
    else if (eKey === '=') {
       equalOperator();
    } else if ((/[-+*\/\=]/).test(display.innerText) && !(/^[-+*\/\=]/).test(display.innerText)) {
        num2 = Number(numString);
        numString = '';
        display.innerText = `${mathOperation(num1, num2, operator)}${eKey}`;
        num1 = mathOperation(num1, num2, operator);
        operator = eKey;
    } else if (display.innerText === '') {
        num1 = 0;
        operator = eKey;
        display.innerText = `0 ${eKey}`;
    }  else {
        num1 = Number(numString);
        numString = ''
        display.innerText += eKey;
        operator = eKey;
    }
}

document.addEventListener('keypress', (e) => {
   InputHandling(e.key,);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Delete') {
        handleDelete();
    } else if (e.key === 'Backspace') {
        handleBackspace();
    }
   
});

document.addEventListener('click', (e) => {
  InputHandling(e.target.value)
});



 

//test