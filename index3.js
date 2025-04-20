const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c"
    },
    {
        question: "Which language is used for web development?",
        a: "Python",
        b: "JavaScript",
        c: "Java",
        d: "C++",
        correct: "b"
    }
];

const quiz = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultDisplay = document.getElementById('result');

let currentQuestionIndex = 0;
let score = 0;

function loadQuiz() {
    const currentQuestion = quizData[currentQuestionIndex];
    quiz.innerHTML = `
<h2>${currentQuestion.question}</h2>
        <label><input type="radio" name="answer" value="a"> ${currentQuestion.a}</label><br>
        <label><input type="radio" name="answer" value="b"> ${currentQuestion.b}</label><br>
        <label><input type="radio" name="answer" value="c"> ${currentQuestion.c}</label><br>
        <label><input type="radio" name="answer" value="d"> ${currentQuestion.d}</label><br>
    `;
}

function getSelected() {
    const answers = document.querySelectorAll('input[name="answer"]');
    for (const answer of answers) {
        if (answer.checked) {
            return answer.value;
        }
    }
    return undefined;
}

submitButton.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuestionIndex].correct) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You scored ${score} out of ${quizData.length}</h2>`;
            submitButton.style.display = 'none';
        }
    }
});

loadQuiz();