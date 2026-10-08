function add(num1, num2) {
  return num1 + num2;
}

console.log(add(10, 5));

const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

function calculate(num1, num2, operator) {
  if (operator === "+") return add(num1, num2);
  if (operator === "-") return subtract(num1, num2);
  if (operator === "*") return multiply(num1, num2);
  if (operator === "/") return divide(num1, num2);
  return "使用できない演算子です";
}

document.getElementById("calculator").innerHTML = `
  <h2>電卓</h2>
  <p>10 + 5 = ${calculate(10, 5, "+")}</p>
  <p>10 - 5 = ${calculate(10, 5, "-")}</p>
  <p>10 * 5 = ${calculate(10, 5, "*")}</p>
  <p>10 / 5 = ${calculate(10, 5, "/")}</p>
`;

function getTaxIncludedPrice(price, taxRate = 0.1) {
  return Math.floor(price * (1 + taxRate));
}

document.getElementById("price").innerHTML =
  `<h2>税込計算</h2><p>1200円の税込価格：${getTaxIncludedPrice(1200)}円</p>`;
