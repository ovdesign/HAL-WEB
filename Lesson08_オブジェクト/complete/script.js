const student = {
  name: "小泉しずく",
  age: 20,
  course: "Webデザイン",
  scores: {
    html: 85,
    css: 78,
    javascript: 92,
  },
  introduce: function () {
    return `私は${this.name}です。${this.course}を学んでいます。`;
  },
};

const average = Math.round(
  (student.scores.html + student.scores.css + student.scores.javascript) / 3,
);

document.getElementById("student").innerHTML = `
  <h2>学生情報</h2>
  <p>${student.introduce()}</p>
  <p>年齢：${student.age}歳</p>
  <p>専攻：${student.course}コース</p>
`;

document.getElementById("report").innerHTML = `
  <h2>成績表</h2>
  <p>HTML：${student.scores.html}点</p>
  <p>CSS：${student.scores.css}点</p>
  <p>JavaScript：${student.scores.javascript}点</p>
  <p>平均：${average}点</p>
`;
