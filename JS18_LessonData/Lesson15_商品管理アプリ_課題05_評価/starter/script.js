/*
 Lesson15 評価課題 Starter版
 TODO を埋めて完成させてください
*/

const products = [
  { id: 1, name: 'MacBook Air', category: 'PC', price: 150000 },
  { id: 2, name: 'iPhone', category: 'スマートフォン', price: 120000 },
  { id: 3, name: 'Windows PC', category: 'PC', price: 98000 }
];

const nameInput = document.querySelector('#name');
const categoryInput = document.querySelector('#category');
const priceInput = document.querySelector('#price');
const addButton = document.querySelector('#addButton');
const keywordInput = document.querySelector('#keyword');
const searchButton = document.querySelector('#searchButton');
const showAllButton = document.querySelector('#showAllButton');
const productList = document.querySelector('#productList');
const count = document.querySelector('#count');
const message = document.querySelector('#message');

function render(data) {
  // TODO: 商品一覧を表示する
  // TODO: 件数を表示する
}

function deleteProduct(id) {
  // TODO: 指定された商品を削除する
}

addButton.addEventListener('click', () => {
  // TODO: 入力値を取得する
  // TODO: 入力チェックをする
  // TODO: 商品を配列へ追加する
  // TODO: 再描画する
});

searchButton.addEventListener('click', () => {
  // TODO: 商品名の部分一致検索を実装する
});

showAllButton.addEventListener('click', () => {
  // TODO: 全件表示する
});

// TODO: 初期表示を行う
