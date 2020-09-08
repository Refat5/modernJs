const form = document.querySelector('.from');
const name = form.name.value;
const pattent = /^[a-z0-9]{6,10}$/


form.name.addEventListener('keyup', e => {
// console.log(e.target.value, form.name.value );

if(pattent.test(e.target.value)){
   // console.log('passed');
   form.name.setAttribute('class','success');
}
else{
    //console.log('failed');
    form.name.setAttribute('class','error');
}

});