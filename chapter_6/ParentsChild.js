const artical = document.querySelector('article');

// console.log(artical.children);
// console.log(Array.from(artical.children));
// console.log(artical.children);

// Array.from(artical.children).forEach(child=>{
//     child.classList.add('aritical-element');
// });

const parent = document.querySelector('p');

// console.log(parent.parentElement);
// console.log(parent.parentElement.parentElement);
// console.log(parent.nextElementSibling);
console.log(parent.previousElementSibling);


//chaining

console.log(parent.nextElementSibling.parentElement.children);
