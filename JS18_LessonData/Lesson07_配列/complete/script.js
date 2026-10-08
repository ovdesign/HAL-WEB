const movies = ["千と千尋の神隠し", "君の名は。", "サマーウォーズ"];
movies.push("天気の子");
movies.unshift("となりのトトロ");
movies.splice(2, 1, "もののけ姫");

console.log(movies.length);

// リスト表示
document.getElementById("movieList").innerHTML = `
  <h2>映画リスト</h2>
  <ol>${movies.map((movie) => `<li>${movie}</li>`).join("")}</ol>
`;

// for文で表示
const movieLoop = document.getElementById("movieLoop");
let movieLoopHtml = "";
for (let i = 0; i < movies.length; i++) {
  movieLoopHtml += `<li>${movies[i]}</li>`;
}
movieLoop.innerHTML = `
  <h2>for文で表示</h2>
  <ul>${movieLoopHtml}</ul>
`;

// ランキング表示
const scores = [82, 91, 67, 75, 88];
scores.sort((a, b) => b - a);
document.getElementById("ranking").innerHTML = `
  <h2>ランキング</h2>
  <ol>${scores.map((score) => `<li>${score}点</li>`).join("")}</ol>
`;
