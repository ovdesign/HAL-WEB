const itemPrice = 1200;
const quantityText = "3";
const quantity = Number(quantityText);
const taxRate = 0.1;
const subtotal = itemPrice * quantity;
const discount = subtotal >= 3000 ? 500 : 0;
const shippingFee = subtotal >= 5000 ? 0 : 600;
const total = Math.floor((subtotal - discount) * (1 + taxRate) + shippingFee);

// 上記のquantityの変換テスト
console.log(quantityText + 1);
console.log(quantity + 1);

const cart = document.getElementById("cart");
cart.innerHTML = `
  <h2>ショッピングカート</h2>
  <p>単価：${itemPrice}円</p>
  <p>数量：${quantity}</p>
  <p>小計：${subtotal}円</p>
  <p>割引：${discount}円</p>
  <p>送料：${shippingFee}円</p>
  <p><strong>合計：${total}円</strong></p>
`;

const score = 75;
const isPassed = score >= 60;
const isGood = score >= 80;
document.getElementById("judge").innerHTML = `
  <h2>判定</h2>
  <p>合格：${isPassed}</p>
  <p>優秀：${isGood}</p>
  <p>通常合格：${isPassed && !isGood}</p>
`;
