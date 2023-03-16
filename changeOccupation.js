const person = {
    name : "Rajat",
    age : 26,
    occupation : "Software Engineer"
}

const changeOccupation = (personObj,newOccupation)=>{
    personObj.occupation = newOccupation;
}

console.log(person);
changeOccupation(person,"Product Manager");
console.log(person);

