//Primitive Values

let numberOne = 2;
let numberTwo = numberOne;
 
console.log(`numberOne:${numberOne}`, `The numbertow":${numberTwo}`);

 numberOne = 45;
 
console.log(`numberOne:${numberOne}`, `The numbertow":${numberTwo}`);


//refernce vallues 

let userone = {name:'refat', age:49};
let userTwo = userone;

console.log(userone,userTwo);

userone.age=40;
console.log(userone);
console.log(userTwo);
