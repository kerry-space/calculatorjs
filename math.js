let answer;

const  removeTrailingZeros = function(num) {
  const number = parseFloat(num)

  return parseFloat(number.toFixed(2))
} 
,mathOperation = function(num1, num2, operator ){
    switch(operator){
        case "+":
            answer = removeTrailingZeros((num1 + num2))
           return answer;
        
        case "-":
            answer = removeTrailingZeros((num1 - num2))
            return answer;
           
        case "*":
            answer = removeTrailingZeros((num1 * num2))
            return answer;

        case "/":
            answer = removeTrailingZeros((num1 / num2))
            return answer;
        default: 
            
    }
}



mathOperation(1,2,"*");


export {mathOperation, answer};