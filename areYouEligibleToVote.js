// 1. Always use const unless required otherwise
// 2. use let when you want to change the value
// 3. Define all variables at the top of the scope
// 4. Name your variables differently.
// 5. Stop using var from now on.

// function isEligibleToVote(userAge){
//     if(userAge>=18){
//         console.log("Eligible to vote");
//     }
//     else{
//         console.log("Not eligible to vote");
//     }
// }

// isEligibleToVote(20);

// Now let's try to convert in ES6

const isEligibleToVote = (userAge)=>{
    if(userAge>=18)
    console.log("Eligible to vote");
    else
    console.log("Not eligible to vote");
}
isEligibleToVote(19);

