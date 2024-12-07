// Quiz data
const quizData = [
  {
    question: "Which conspiracy theory is real?",
    options: [
      {
        text: "The United States invaded Iraq because Saddam Hussein had a Stargate.",
        isReal: true,
      },
      {
        text: "An international secret society decides global fashion trends 20 years in advance.",
        isReal: false,
      },
    ],
  },
  {
    question: "Which conspiracy theory is real?",
    options: [
      { text: "Mother Teresa was an American undercover agent.", isReal: true },
      {
        text: "The world’s largest oil reserves are actually located beneath Antarctica, but drilling is banned by a global pact.",
        isReal: false,
      },
    ],
  },
  {
    question: "Which conspiracy theory is real?",
    options: [
      {
        text: "Chernobyl surviving scientists escaped to a remote island to resurrect ancient Greek theories and live forever.",
        isReal: true,
      },
      {
        text: "Mount Everest has a hidden chamber at its summit containing ancient scrolls written by a lost civilization.",
        isReal: false,
      },
    ],
  },
  {
    question: "Which conspiracy theory is real?",
    options: [
      {
        text: "There is an underground city beneath the Denver airport.",
        isReal: true,
      },
      {
        text: "The Amazon River was artificially created by an ancient alien race to power their spacecraft.",
        isReal: false,
      },
    ],
  },
  {
    question: "Which conspiracy theory is real?",
    options: [
      {
        text: "The Backstreet Boys were part of a mind control experiment.",
        isReal: true,
      },
      {
        text: "A rare type of crystal found in caves emits sounds that can influence dreams when placed under a pillow.",
        isReal: false,
      },
    ],
  },
];

const quizContainer = document.getElementById("quiz");

quizData.forEach((item, index) => {
  const questionBlock = document.createElement("div");
  questionBlock.className = "question";

  const questionTitle = document.createElement("h3");
  questionTitle.textContent = `${index + 1}. ${item.question}`;
  questionBlock.appendChild(questionTitle);

  const optionsBlock = document.createElement("div");
  optionsBlock.className = "options";

  item.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option.text;
    button.onclick = () => handleAnswer(button, option.isReal, optionsBlock);
    optionsBlock.appendChild(button);
  });

  questionBlock.appendChild(optionsBlock);

  const feedback = document.createElement("div");
  feedback.className = "feedback";
  questionBlock.appendChild(feedback);

  quizContainer.appendChild(questionBlock);
});

function handleAnswer(button, isCorrect, optionsBlock) {
  const buttons = optionsBlock.querySelectorAll("button");
  buttons.forEach((btn) => (btn.disabled = true));

  const feedback = optionsBlock.nextElementSibling;
  if (isCorrect) {
    button.classList.add("correct");
    feedback.textContent = "Correct!";
    feedback.style.color = "green";
  } else {
    button.classList.add("wrong");
    feedback.textContent = "Wrong!";
    feedback.style.color = "red";
  }
}
