const copy = document.querySelector('.copy-right');

copy.addEventListener('copy', () => {
   
    console.log('OI! You copy my Content');
});

// const box = document.querySelector('.box');

// box.addEventListener('mousemove', e => {
//     //console.log(e);
//     //console.log(e.offsetX, e.offsetY);
//     box.textContent = `x Position- ${e.offsetX} y Postion - ${e.offsetY}`;

// });
const body = document.querySelector('body');
body.addEventListener('wheel', e => {
   e.body.textContent = 'hello this is a text';
});
