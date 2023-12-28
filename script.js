
const buttons = document.querySelectorAll('.btn');


buttons.forEach((button, index) => {
    button.addEventListener('click', () =>{
        const answer = document.querySelectorAll('.ans');
        const currentAnswer = answer[index];
        currentAnswer.classList.toggle('active');
        button.classList.toggle('active');
    })

})



