// 1. Always use const unless required otherwise
// 2. use let when you want to change the value
// 3. Define all variables at the top of the scope
// 4. Name your variables differently.
// 5. Stop using var from now on.

const checkForPositiveAndNegativeNumber = (number)=>{
    if(number>=0) return `Positive Number`;
    else return `Negative Number`;
}
console.log(checkForPositiveAndNegativeNumber(10));
