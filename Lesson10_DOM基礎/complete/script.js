const title = document.querySelector("#title");
const message = document.querySelector("#message");
const changeButton = document.querySelector("#changeButton");
const themeButton = document.querySelector("#themeButton");

changeButton.addEventListener("click", () => {
  title.textContent = "DOM操作の練習";
  message.textContent = "JavaScriptでHTMLの内容を書き換えました。";
  message.classList.add("success");
});

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// 要素の取得
console.log(title.textContent); // → Lesson10 DOM基礎
