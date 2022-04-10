const quizData = [
  {
    Question: `What's the full meaning of PC `,
    a: "Personal Computer",
    b: "Personal Carriage",
    c: "Peace Company",
    d: "Parent Coat",
    correct: "a",
  },
  {
    Question: `What's the language of the browser`,
    a: "Java",
    b: "Python",
    c: "JavaScript",
    d: "PHP",
    correct: "c",
  },
  {
    Question: `One of the following does not belong`,
    a: "NodeJS",
    b: "React",
    c: "Python",
    d: "Deno",
    correct: "c",
  },
  {
    Question: `Who founded Apple Computer`,
    a: "Stephen Fry",
    b: "Bill Gates",
    c: "Steve Jobs",
    d: "Stephen Hawkings",
    correct: "c",
  },
  {
    Question: `Which of these is not a peripheral`,
    a: "Keyboard",
    b: "Monitor",
    c: "Mouse",
    d: "Motherboard",
    correct: "d",
  },
  {
    Question: `What's the meaning of WWW stand for`,
    a: "Wide Width Wickets",
    b: "World Wide Web",
    c: "World Wide Weather",
    d: "Western Washington World",
    correct: "b",
  },
  {
    Question: `Which of these is not a kind of computer`,
    a: "Apple",
    b: "Lenovo",
    c: "Toshiba",
    d: "Lada",
    correct: "d",
  },
  {
    Question: `Which of these is not made by Apple`,
    a: "IMAX",
    b: "iPhone",
    c: "iMac",
    d: "iPod",
    correct: "a",
  },
  {
    Question: `Who is the president of United States of America`,
    a: "Donald Trump",
    b: "Barrack Obama",
    c: "George Washington",
    d: "Joe Biden",
    correct: "d",
  },
  {
    Question: `What's the full meaning of CSS`,
    a: "Cascading Style Scheme",
    b: "Cascading Style System",
    c: "Cascading Style Sheet",
    d: "None of the above",
    correct: "c",
  },
  {
    Question: `RAM stands for `,
    a: "Random Access Megabyte",
    b: "Random Access Memory",
    c: "Read Access Memory",
    d: "None of the above",
    correct: "b",
  },
];

const quiz = document.querySelector("#quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.querySelector("#question-text");
const option_a = document.querySelector("#option_a");
const option_b = document.querySelector("#option_b");
const option_c = document.querySelector("#option_c");
const option_d = document.querySelector("#option_d");
const submitButton = document.querySelector("#submit");
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.Question;
  option_a.innerText = currentQuizData.a;
  option_b.innerText = currentQuizData.b;
  option_c.innerText = currentQuizData.c;
  option_d.innerText = currentQuizData.d;
  if (currentQuiz === quizData.length - 1) submitButton.innerText = "Submit";
}

function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) answer = answerEl.id;
  });
  return answer;
}

function deselectAnswer() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitButton.addEventListener("click", (button) => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      if (score <= 3) {
        quiz.innerHTML = `<h3 class="red-text">Better luck next time! <i class="fas fa-sad-cry"></i> You answered ${score} out of ${quizData.length} correctly!</h3>
        <button type="submit" onclick="location.reload()">Take Quiz Again</button>`;
      } else if (score <= 6) {
        quiz.innerHTML = `<h3 class="orange-red-text">Keep it Up! <i class="fas fa-smile"></i> You answered ${score} out of ${quizData.length} correctly!</h3>
        <button type="submit" onclick="location.reload()">Take Quiz Again</button>`;
      } else if (score <= 10) {
        quiz.innerHTML = `<h3 class="limegreen-text">Congrats! <i class="fas fa-smile-beam"></i> You answered ${score} out of ${quizData.length} correctly!</h3>
        <button type="submit" onclick="location.reload()">Take Quiz Again</button>`;
      } else {
        quiz.innerHTML = `<h3 class="green-text">Perfect score! <i class="fas fa-smile-wink"></i> You answered ${score} out of ${quizData.length} correctly!</h3>
        <button type="submit" onclick="location.reload()">Take Quiz Again</button>`;
      }
    }
  }
});
