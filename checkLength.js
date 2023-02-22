// 1. Always use const unless required otherwise
// 2. use let when you want to change the value
// 3. Define all variables at the top of the scope
// 4. Name your variables differently.
// 5. Stop using var from now on.

const checkLength = (text)=>{
    if(text.length>5) return `more than 5 characters `;
    else return `less than 5 characters `
}

console.log(checkLength("Ram"));