const ul = document.querySelector('ul')
// ul.remove();


const button = document.querySelector('button');

button.addEventListener('click', ()=> {
    //ul.innerHTML +=    `<li>Hello Add</li>`;
    const li = document.createElement('li');
    console.log(li); 
    li.textContent = 'add HEllo';

    //adding text after content
    //ul.append(li);
    
    //adding text before content
    ul.prepend(li);

});



// const allLi = document.querySelectorAll('li')

// allLi.forEach(li => {
//     li.addEventListener('click', e => {
//         e.target.remove();
//     });

// });