const name = 'Abdur Rahim';
const roll = 50;
const clas = 'Seven';

//concatenation way 
// let result = 'My Name is ' + name + 'And my Roll number ' + roll + 'and i am readding class' + clas + '';
// console.log(result);

//Template String is the best way
// let result = `My Name is   ${name}  And my Roll number  ${roll}   and i am readding class  ${clas}  `;
// console.log(result);


//creatubg html templates 

let html = `
<h1>${name}</h1>
<p>${roll}</p>
<strong>${clas}</strong>
`;

console.log(html);
