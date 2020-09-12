const correctAnswer = ['A','A','A','A'];
const form = document.querySelector('.quiz-form');

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
    console.log(score);

    });
});