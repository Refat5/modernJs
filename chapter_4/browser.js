//get a reference to the ul
const ul = document.querySelector('.people');

const people = ['refat','tanvir','jubair'];

let html = ``;

people.forEach(function(name){
    html += `<li style="color: purple">${name}</li>`;

});
ul.innerHTML = html;
console.log(html);