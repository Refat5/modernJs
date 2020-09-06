const button = document.querySelector('button');

button.addEventListener('click',() => {
    const li = document.createElement('li');
    li.textContent = 'hello add  somthing';
    ul.append(li); 

});


// const allLi = document.querySelectorAll('li');

// allLi.forEach(li => {
//     li.addEventListener('click', e => {
//         console.log('hello LI');
//         e.stopPropagation();
//         e.target.remove();

//     });
// });
const ul = document.querySelector('ul');
ul.addEventListener('click', e => {
    //console.log('hello ul');
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }

});