const studentName = "小泉 春";
let age = 20;
const course = "Webデザインコース";
const hobby = "写真撮影";
const isStudent = true;
let futureGoal;
const club = null;

console.log(typeof studentName);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof futureGoal);
console.log(typeof club);

const profile = document.getElementById("profile");
profile.innerHTML = `
  <h2>プロフィール</h2>
  <p>名前：${studentName}</p>
  <p>年齢：${age}歳</p>
  <p>コース：${course}</p>
  <p>趣味：${hobby}</p>
`;

const height = 1.65;
const weight = 52;
const bmiValue = weight / (height * height);
const bmi = document.getElementById("bmi");
bmi.innerHTML = `<h2>BMI計算</h2><p>BMI：${bmiValue.toFixed(1)}</p>`;
const text = document.getElementById("text");
text.innerHTML = `<p>BMI 18.5未満：標準値よりも低く痩せていると判定<br>
BMI 18.5～25未満：標準値の範囲内<br>
BMI 25以上：標準値よりも高く肥満と判定</p>`;
