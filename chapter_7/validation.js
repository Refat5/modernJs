 const form = document.querySelector('.from');
 const messege = document.querySelector('.messege');

 form.addEventListener('submit', e => {
     e.preventDefault();
   const  name = form.name.value;
    const pattent = /^[a-zA-Z0-9]{6,13}$/;

    if(pattent.test(name)){
        messege.textContent = 'the user name is valide';

    }
    else{
        messege.textContent = 'user name must contain letters only & be between 6 & 12 charactes long';

    }
 });

