const  mathOperation = function(num1, num2, operator ){
    switch(operator){
        case "+":
           return (num1 + num2).toPrecision(2);
        
        case "-":
            return (num1 - num2).toPrecision(2);
           
        case "*":
            return (num1 * num2).toPrecision(2);

        case "/":
            return (num1 / num2).toPrecision(2);
        default: 
    }
}






export {mathOperation};