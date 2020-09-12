const correctAnswer = ['A','A','A','A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAns = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //check Answer 

    userAns.forEach((answer, index) => {
        //console.log(answer);

        if(answer === correctAnswer[index]){
            score += 25;
        }
    //console.log(score);
    });
    //window.scrollTo(0,0);
    scrollTo(0,0);
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');

    //animating 

    let output = 0;

    const timer = setInterval(() =>{
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        }
        else{
            output++;
        }

    },20);

});

//window object (global object)

// console.log('refat');
// window.console.log('hi');

// console.log(document.querySelector('form'));
// console.log(window.document.querySelector('form'));

// alert('hey');
// window.alert('hello');

// setTimeout(() => {
//     alert('hello');
// },4000)

//setInterval

// let  i = 0;
// const time = setInterval(()=>{
//     console.log('hello');
//     i++;
//     if(i === 9){
//         clearInterval(time);
//     }
// },1000);