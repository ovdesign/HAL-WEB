const questions = [
  { question: "変数宣言に使うキーワードはどれですか？", choices: ["let", "href", "src", "alt"], answer: "let" },
  { question: "HTML要素を1つ取得する命令はどれですか？", choices: ["querySelector", "font-size", "border", "margin"], answer: "querySelector" },
  { question: "クリックイベントを設定する命令はどれですか？", choices: ["addEventListener", "push", "return", "typeof"], answer: "addEventListener" },
  { question: "配列に要素を追加するメソッドはどれですか？", choices: ["push", "trim", "floor", "toggle"], answer: "push" }
];
const questionText = document.getElementById("questionText");
const choiceList = document.getElementById("choiceList");
const resultText = document.getElementById("resultText");
const nextButton = document.getElementById("nextButton");
let currentIndex = 0;
let score = 0;
let answered = false;

function showQuestion() {
  answered = false;
  const current = questions[currentIndex];
  questionText.textContent = current.question;
  choiceList.innerHTML = "";
  resultText.textContent = "";
  current.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.addEventListener("click", () => checkAnswer(choice));
    choiceList.appendChild(button);
  });
}

function checkAnswer(choice) {
  if (answered) return;
  answered = true;
  const current = questions[currentIndex];
  if (choice === current.answer) {
    score++;
    resultText.textContent = "正解です。";
    resultText.className = "success";
  } else {
    resultText.textContent = `不正解です。正解は${current.answer}です。`;
    resultText.className = "error";
  }
}

nextButton.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= questions.length) {
    questionText.textContent = `終了です。${questions.length}問中${score}問正解でした。`;
    choiceList.innerHTML = "";
    resultText.textContent = "";
    nextButton.style.display = "none";
    return;
  }
  showQuestion();
});
showQuestion();
