const form = document.querySelector('.from');


form.addEventListener('submit', e => {
    e.preventDefault();

});
const name = '1334refat';
const pattern = /[a-z]{6,}/;



// let result = pattern.test(name);
// if(result){
//     console.log('this is a matched');
// }
// else{
//     console.log('not match');
// }

let result = name.search(pattern);
console.log(result);
