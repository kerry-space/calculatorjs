const  mathOperation = function(num1, num2, operator ){
    switch(operator){
        case "+":
           return (num1 + num2).toFixed(2);
        
        case "-":
            return (num1 - num2).toFixed(2);
           
        case "*":
            return (num1 * num2).toFixed(2);

        case "/":
            return (num1 / num2).toFixed(2);
        default: 
            
    }
}






export {mathOperation};