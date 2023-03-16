
import { mathOperation } from "./math.js"
const calculatorButtons = document.querySelectorAll('button')
, display = document.getElementById('display');


let numString = ''
 , operator = ''
, num1
, num2;

display.innerText = ''


const inputZero = function(eKey) {
    if (operator === '/' && !numString ) {
        console.log('error message')
    } else {
        display.innerText += eKey;
            numString += eKey;
    }

}
,handleBackspace = function() {
  display.innerText =  display.innerText.slice(0, -1);
  numString = numString.slice(0, -1);
  if (!display.innerText) {
    return;
  } 

} 
,handleDelete = function() {
    numString = '';
        operator = '';
        num1 = undefined;
        num2 = undefined;
        display.innerText = '';
}
,equalOperator = function() {
     if (!display.innerText) {
            console.log('error Input');
        }
      else if (!operator) {
        return console.log('error message')
      } else { 
        num2 = Number(numString);
        console.log({numString, num1, num2})

        numString = '';
        display.innerText = mathOperation(num1, num2, operator);
        operator = ''
        numString = display.innerText;
    }
}
, InputHandling = function(eKey) { calculatorButtons.forEach((button) => {
        if (eKey !== button.value) return;
        if ((/[-+*\/\=]/).test(eKey)) {
            insertOperator(eKey)
        } else if (eKey === 'Delete') {
      handleDelete();
    } else if (eKey === 'Backspace') {
        handleBackspace()
    }
    else if (display.innerText === '0') {
        console.log('error message')

    } else if (eKey === '0'){
        inputZero(eKey)
    }
        else if (eKey === button.value) {
            display.innerText += button.value;
            numString += button.value; 
            
        } 
        else if (!(/\d/).test(eKey) && !(/[-+*\/\=]/).test(eKey)) console.log('error input')
    })
}
, insertOperator = function(eKey) {
    if ((/[-+*\/\=]$/).test(display.innerText)) {
        console.log('error Input');
    }
    else if (eKey === '=') {
       equalOperator();
    } else if ((/[-+*\/\=]/).test(display.innerText)) {
        num2 = Number(numString);
        numString = '';
        display.innerText = mathOperation(num1, num2, operator);
        num1 = Number(numString);
        operator = eKey;
    } else if (display.innerText === '') {
        num1 = 0;
        operator = eKey;
        display.innerText = `0 ${eKey}`;
    }  else {
        console.log(numString)
        num1 = Number(numString);
        numString = ''
        console.log(num1)
        display.innerText += eKey;
        operator = eKey;
    }
}

document.addEventListener('keypress', (e) => {
    console.log(e.key)
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