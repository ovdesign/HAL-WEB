const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const count = document.getElementById("count");
let todos = [
  { text: "課題を提出する", done: false },
  { text: "ポートフォリオを更新する", done: true }
];

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = todoInput.value.trim();
  if (text === "") return;
  todos.push({ text, done: false });
  todoInput.value = "";
  renderTodos();
});

function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.classList.toggle("done", todo.done);
    li.innerHTML = `<span>${todo.text}</span>`;

    const toggleButton = document.createElement("button");
    toggleButton.textContent = todo.done ? "戻す" : "完了";
    toggleButton.addEventListener("click", () => {
      todos[index].done = !todos[index].done;
      renderTodos();
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";
    deleteButton.classList.add("secondary");
    deleteButton.addEventListener("click", () => {
      todos.splice(index, 1);
      renderTodos();
    });

    li.appendChild(toggleButton);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  });
  count.textContent = `残り：${todos.filter((todo) => !todo.done).length}件`;
}
renderTodos();
