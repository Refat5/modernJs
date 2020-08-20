//Call back function

// const myFun = (callbackFun) => {
//     //do somthing
//     let number =90;
//     callbackFun(number);
// }

// myFun(number =>{
//     console.log(number);

// });

let name = ['refat','tanvir','jubair','komol'];
const logPerson = (person,index) =>{
    console.log(`${index} hi ${person}`);
}
name.forEach(logPerson);

