
// создаем статичное база данных 
const quizData = [
    {
        question: 'Who is the first President of Uzbekistan?',
        a: 'Shavkat Mirziyoyev',
        b: 'Nigmatulla Yoldoshev',
        c: 'Islom Karimov',
        d: 'Sharof Rashidov',
        correct: 'c'
    },
    {
        question: 'Popular programming language in 2021 ?',
        a: 'JavaScript',
        b: 'C++',
        c: 'Python',
        d: 'C#',
        correct: 'a'
    },
    {
        question: 'Where is Amir Temur from ?',
        a: 'India',
        b: 'Kazakhistan',
        c: 'Tadjikistan',
        d: 'Uzbekistan',
        correct: 'd'
    }
];

// расположем всё с базны данных на сайт 
const questionEl = document.getElementById('question');
const answerA    = document.querySelector('.answer__a');
const answerB    = document.querySelector('.answer__b');
const answerC    = document.querySelector('.answer__c');
const answerD    = document.querySelector('.answer__d');

// счетчик 
let currentQuestion = 0;

function createQuiz() {
    questionEl.innerText = quizData[currentQuestion].question;
    answerA.innerText    = quizData[currentQuestion].a;
    answerB.innerText    = quizData[currentQuestion].b;
    answerC.innerText    = quizData[currentQuestion].c;
    answerD.innerText    = quizData[currentQuestion].d;

}
createQuiz();

const answerEls = document.querySelectorAll('input');



// функция для определение правильного ответа :
function getSelected(){
    // создаем отдельную локальную переменную для хранение ответа
    let answer = undefined;

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    });
    // возврощаем ответь чтобы использовать в дальнейшем 
    return answer
}

function clearSelected(){
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}

// переменная для набора очков 
let score = 0;

const submitBtn = document.querySelector('.quiz__btn');
const quiz  = document.querySelector('.quiz');

submitBtn.addEventListener('click', () => {
    // получаем выбранный ответь 
    let answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuestion].correct){
            score++;
        }

        currentQuestion++;
        if(quizData.length > currentQuestion){
            createQuiz();
            clearSelected();
        }else {
            quiz.innerHTML = `
                <h2 >Congratulations!!! <br/> You have finished! Your score is ${score}/${quizData.length}</h2>
                <button 
                    class="quiz__btn"
                    onClick="location.reload()"
                >                
                Reload</button>
            `;
        }
    }
});


