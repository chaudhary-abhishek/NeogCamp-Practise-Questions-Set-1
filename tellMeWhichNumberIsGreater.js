// 1. Always use const unless required otherwise
// 2. use let when you want to change the value
// 3. Define all variables at the top of the scope
// 4. Name your variables differently.
// 5. Stop using var from now on.

//Without es6
// function tellMeWhichNumberIsGreater(numOne,numTwo){
//    if(numOne>numTwo)
//    return `${numOne} is greater than ${numTwo}`;
//    else
//    return `${numTwo} is greater than ${numOne}`;
// }
// const result = tellMeWhichNumberIsGreater(3,9);
// console.log(result);

//Lets convert this to es6 because I write industry standard code

const tellMeWhichNumberIsGreater = (numOne,numTwo)=>{
        if (numOne > numTwo) return `${numOne} is greater than ${numTwo}`;
        else return `${numTwo} is greater than ${numOne}`;
}

const result = tellMeWhichNumberIsGreater(12,4);
console.log(result);