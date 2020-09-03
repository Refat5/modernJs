 const cntent = document.querySelector('p');

// console.log(cntent.classList);
 cntent.classList.add('error');
// cntent.classList.remove('error');
// cntent.classList.add('success');

const hello = document.querySelectorAll('p');

hello.forEach(allp =>{
    // console.log(allp.textContent);
    allp.classList.add('success');
    allp.classList.remove('success');

    if(allp.innerText.includes('error'))
    {
        allp.classList.add('error');
    }  
 
    
});