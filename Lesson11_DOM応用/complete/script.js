const addButton = document.getElementById("addButton");
const newsList = document.getElementById("newsList");
const newsItems = [
  "オープンキャンパスを開催します",
  "作品展示会のお知らせ",
  "夏季特別講座の申込を開始しました",
];
let index = 0;

addButton.addEventListener("click", () => {
  if (index >= newsItems.length) {
    addButton.textContent = "追加できるお知らせはありません";
    return;
  }

  const li = document.createElement("li");
  li.textContent = newsItems[index];
  li.classList.add("news-item");

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "削除";
  deleteButton.classList.add("secondary");
  deleteButton.addEventListener("click", () => li.remove());

  li.appendChild(deleteButton);
  newsList.appendChild(li);
  index++;
});
