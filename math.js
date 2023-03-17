const  removeTrailingZeros = function(num) {
  const number = parseFloat(num)

  return parseFloat(number.toFixed(2))
} 
,mathOperation = function(num1, num2, operator ){
    switch(operator){
        case "+":
           return removeTrailingZeros((num1 + num2));
        
        case "-":
            return removeTrailingZeros((num1 - num2));
           
        case "*":
            return removeTrailingZeros((num1 * num2));

        case "/":
            return removeTrailingZeros((num1 / num2));
        default: 
            
    }
}



mathOperation(1,2,"*");


export {mathOperation};