//array filter 
// const number = [20,30,40,54,12,18];

// const filterNumber = number.filter(scor => {
//     return scor >= 20;
 

// });

// console.log(filterNumber);

const name = [
    {name:'refat', goodBoy: true},
    {name:'tanvir', goodBoy: false},
    {name:'komol', goodBoy: true},
    {name:'jubair', goodBoy: false},


];

const luckyUser = name.filter(user => user.goodBoy);
console.log(luckyUser);
