// 1. Always use const unless required otherwise
// 2. use let when you want to change the value
// 3. Define all variables at the top of the scope
// 4. Name your variables differently.
// 5. Stop using var from now on.

const evenOrOdd = (number)=>{
    if(number%2==0) return `Even Number`;
    else return `Odd Number`;
}

console.log(evenOrOdd(13));