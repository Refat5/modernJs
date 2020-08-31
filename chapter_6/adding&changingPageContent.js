// const pTag = document.querySelector('p');
// console.log(pTag.innerText);
// //= overright html content
// pTag.innerText='Hey who are you';
// //+= adding html content 
// pTag.innerText+='Boy';

//const pTagAll = document.querySelectorAll('p');

// pTagAll.forEach(pta =>{
//     console.log(pta.innerText);
//     pta.innerText += 'hello';

// });

//add and change div content 
const  hello = document.querySelector('.hello');
console.log(hello)
// console.log(content);
const name = ['refat','shefat','tanvir','komol'];

name.forEach(people => {
    

    hello.innerHTML += `<p>${people}</p>`
    
    
    
});