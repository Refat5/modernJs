// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     console.log('hey you really Touch me OWWO');

// });

const  alllist = document.querySelectorAll('li');

alllist.forEach(list => {
    list.addEventListener('click', (e) =>{
        // console.log(e);
        // console.log('hello');
        // console.log(e.target);
        // console.log(list);

        e.target.style.textDecoration = 'line-through';
    });
});