// 1. Always use const unless required otherwise
// 2. use let when you want to change the value
// 3. Define all variables at the top of the scope
// 4. Name your variables differently.
// 5. Stop using var from now on.

// const checkForAlphabetA = (text)=>{
//     if(text.toLowerCase().includes("a",0)) return `Includes a`;
//     else return `Does not include a`;
// }


// console.log(checkForAlphabetA("Abhishek"));


const checkForAlphabetA = (text)=>{
    let count = 0;
    for(let i = 0;i<text.length;i++){
        if(text[i]=='a'||text[i]=='A')
         count++
        
    }
    if(count>0)
    return `Includes a`;
    else
    return `Does not includes a`;
}
console.log(checkForAlphabetA("bhishek"));
