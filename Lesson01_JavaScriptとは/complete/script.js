console.log("Hello JavaScript");
console.log("はじめてのJavaScript実習です");

const studentName = "ジャンピエール小泉";
const department = "Web制作学科";
console.log(studentName);
console.log(department);

const helloButton = document.getElementById("helloButton");
const output = document.getElementById("output");

helloButton.addEventListener("click", () => {
  output.textContent = `こんにちは、${studentName}さん。JavaScriptの学習を始めましょう。`;
});

const imageButton = document.getElementById("imageButton");
const outputImage = document.getElementById("outputImage");

imageButton.addEventListener("click", () => {
  outputImage.src = "image.jpg";
  outputImage.style.display = "block";
});
