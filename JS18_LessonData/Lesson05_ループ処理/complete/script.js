// TODO: for文で1から100まで表示しましょう
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// 割った余りを求める
console.log(15 % 3); // → 0
console.log(10 % 3); // → 1

// 九九表
let tableHtml = "<h2>九九表</h2><table>";
for (let i = 1; i <= 9; i++) {
  tableHtml += "<tr>";
  for (let j = 1; j <= 9; j++) {
    tableHtml += `<td>${i * j}</td>`;
  }
  tableHtml += "</tr>";
}
tableHtml += "</table>";
document.getElementById("multiplication").innerHTML = tableHtml;

// FizzBuzz
let fizzbuzzHtml = "<h2>FizzBuzz</h2><ol>";
for (let i = 1; i <= 30; i++) {
  if (i % 15 === 0) {
    fizzbuzzHtml += "<li>FizzBuzz</li>";
  } else if (i % 3 === 0) {
    fizzbuzzHtml += "<li>Fizz</li>";
  } else if (i % 5 === 0) {
    fizzbuzzHtml += "<li>Buzz</li>";
  } else {
    fizzbuzzHtml += `<li>${i}</li>`;
  }
}
fizzbuzzHtml += "</ol>";
document.getElementById("fizzbuzz").innerHTML = fizzbuzzHtml;
