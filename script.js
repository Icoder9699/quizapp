const quizData = [
    {
        question: 'How old is Uzbekistan?',
        a: '10',
        b: '31',
        c: '29',
        d: '30',
        correct: 'c'
    },
    {
        question: 'Who is the President of Uzbekistan?',
        a: 'Shavkat Mirziyoyev',
        b: 'Islom Karimov',
        c: 'Sharof Rashidov',
        d: 'Adulla Aripov',
        correct: 'a'
    },
    {
        question: 'What is the most used programing language in 2020?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    },
];


//  для этого сначало получаем каждый элемент на странице тоесть вариант ответов и вопроса 
const question = document.getElementById('quiz__question');
const a__text = document.getElementById('a__text');
const b__text = document.getElementById('b__text');
const c__text = document.getElementById('c__text');
const d__text = document.getElementById('d__text');

// получаем h2 карты чтобы показать результат
const quizCard = document.querySelector('.quiz__card');

const answerEls = document.querySelectorAll('.answer');

// создаем переменную для определение номер вопроса в нащем случае это первый объект из массива quizData
let currentQuiz = 0;

// заполяем нашу карту вопросами из базы quizData
function loadQuiz(){
    deselectAnswers();

    question.innerText = quizData[currentQuiz].question;
    a__text.innerText = quizData[currentQuiz].a;
    b__text.innerText = quizData[currentQuiz].b;
    c__text.innerText = quizData[currentQuiz].c;
    d__text.innerText = quizData[currentQuiz].d;

}
loadQuiz();

// получаем ответь в отдельную переменную
let answer = undefined;

// функция для получение ответа с инпута 
// для этого мы зададим ид для инпута  чтобы получить ответь от элемента
function getSelected(){
    answerEls.forEach(answerEl => {
       if(answerEl.checked){
            answer = answerEl.id;
       }
    });
    return answer;
}

// набираем очки в отдельную переменную
let score = 0;

// функция для сброса ответов 

function deselectAnswers(){
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}

// тепер работаем с кнопкой сабмит 
const quizBtn = document.getElementById('quiz__btn');

quizBtn.addEventListener('click', () => {
    // получаем ответь в отделную константу 
    const answer = getSelected();


    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else {
            quizCard.innerHTML = `
                <h2> You answered correctly at ${score}/${quizData.length} questions</h2>
               <button
               onclick="location.reload()">reload</button>
            `;

        }
    }



 
});