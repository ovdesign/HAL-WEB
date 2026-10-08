const products = [
  { name: "ノートPC", price: 98000, category: "PC" },
  { name: "マウス", price: 2800, category: "周辺機器" },
  { name: "キーボード", price: 6800, category: "周辺機器" },
  { name: "モニター", price: 24800, category: "PC" }
];
const productList = document.getElementById("productList");
const categorySelect = document.getElementById("categorySelect");

function renderProducts(category = "all") {
  productList.innerHTML = "";
  const filtered = category === "all" ? products : products.filter((product) => product.category === category);
  filtered.forEach((product) => {
    const card = document.createElement("article");
    card.classList.add("card");
    card.innerHTML = `<h2>${product.name}</h2><p>${product.category}</p><p>${product.price.toLocaleString()}円</p>`;
    productList.appendChild(card);
  });
}

categorySelect.addEventListener("change", () => renderProducts(categorySelect.value));
renderProducts();
