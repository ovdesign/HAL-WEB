const score = 82;
let rank = "";

// 成績判定
if (score >= 90) {
  rank = "S";
} else if (score >= 80) {
  rank = "A";
} else if (score >= 70) {
  rank = "B";
} else if (score >= 60) {
  rank = "C";
} else {
  rank = "再提出";
}

document.getElementById("grade").innerHTML =
  `<h2>成績判定</h2><p>${score}点：評価 ${rank}</p>`;

// ジャンケン
const player = "グー";
const computer = "チョキ";
let result = "";

if (player === computer) {
  result = "あいこ";
} else if (
  (player === "グー" && computer === "チョキ") ||
  (player === "チョキ" && computer === "パー") ||
  (player === "パー" && computer === "グー")
) {
  result = "勝ち";
} else {
  result = "負け";
}

document.getElementById("janken").innerHTML =
  `<h2>じゃんけん</h2><p>あなた：${player}</p><p>相手：${computer}</p><p>結果：${result}</p>`;
