const textInput = document.getElementById("textInput");
const countText = document.getElementById("countText");

textInput.addEventListener("input", () => {
  countText.textContent = `${textInput.value.length}文字`;
});

const words = ["JavaScript", "HTML", "CSS", "Vue", "React", "DOM", "イベント", "配列"];
const searchInput = document.getElementById("searchInput");
const resultList = document.getElementById("resultList");

function renderResults(keyword = "") {
  resultList.innerHTML = "";
  const results = words.filter((word) => word.toLowerCase().includes(keyword.toLowerCase()));
  for (const word of results) {
    const li = document.createElement("li");
    li.textContent = word;
    resultList.appendChild(li);
  }
}

searchInput.addEventListener("input", () => renderResults(searchInput.value));
renderResults();
