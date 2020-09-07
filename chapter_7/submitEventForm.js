const form = document.querySelector('.from');
// const input = document.querySelector('#name');

form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(input.value);
    console.log(form.name.value);
});