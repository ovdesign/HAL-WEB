const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  message.className = "error";

  if (nameInput.value.trim() === "") {
    message.textContent = "名前を入力してください。";
    return;
  }
  if (!emailInput.value.includes("@")) {
    message.textContent = "メールアドレスに@を含めてください。";
    return;
  }
  if (passwordInput.value.length < 8) {
    message.textContent = "パスワードは8文字以上にしてください。";
    return;
  }

  message.className = "success";
  message.textContent = "送信できました。";
});
