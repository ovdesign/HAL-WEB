const products = [
  { name: "ノートPC", price: 98000, category: "PC" },
  { name: "マウス", price: 2800, category: "周辺機器" },
  { name: "キーボード", price: 6800, category: "周辺機器" },
  { name: "モニター", price: 24800, category: "PC" }
];

const productArea = document.getElementById("products");
for (let i = 0; i < products.length; i++) {
  const product = products[i];
  productArea.innerHTML += `
    <article class="card">
      <h2>${product.name}</h2>
      <p>カテゴリ：${product.category}</p>
      <p>価格：${product.price.toLocaleString()}円</p>
    </article>
  `;
}

const pcProducts = products.filter((product) => product.category === "PC");
const total = products.reduce((sum, product) => sum + product.price, 0);
document.getElementById("summary").innerHTML = `<h2>集計</h2><p>PC商品数：${pcProducts.length}</p><p>合計：${total.toLocaleString()}円</p>`;
