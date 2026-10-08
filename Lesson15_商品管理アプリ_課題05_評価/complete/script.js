const products = [
 {id:1,name:'MacBook Air',category:'PC',price:150000},
 {id:2,name:'iPhone',category:'スマートフォン',price:120000},
 {id:3,name:'Windows PC',category:'PC',price:98000}
];
const nameInput=document.querySelector('#name');
const categoryInput=document.querySelector('#category');
const priceInput=document.querySelector('#price');
const addButton=document.querySelector('#addButton');
const keywordInput=document.querySelector('#keyword');
const searchButton=document.querySelector('#searchButton');
const showAllButton=document.querySelector('#showAllButton');
const productList=document.querySelector('#productList');
const count=document.querySelector('#count');
const message=document.querySelector('#message');
function render(data){
 productList.innerHTML='';
 data.forEach(product=>{
  const li=document.createElement('li');
  li.innerHTML=`<span>${product.name} (${product.category}) ${product.price}円</span><button data-id="${product.id}">削除</button>`;
  productList.appendChild(li);
 });
 count.textContent=`商品数：${data.length}件`;
 document.querySelectorAll('[data-id]').forEach(btn=>{
  btn.addEventListener('click',()=>deleteProduct(Number(btn.dataset.id)));
 });
}
function deleteProduct(id){
 const index=products.findIndex(p=>p.id===id);
 if(index!==-1) products.splice(index,1);
 render(products);
}
addButton.addEventListener('click',()=>{
 const name=nameInput.value.trim();
 const category=categoryInput.value.trim();
 const price=priceInput.value.trim();
 if(name===''||category===''||price===''){
  message.textContent='すべて入力してください';
  message.className='error';
  return;
 }
 products.push({id:Date.now(),name,category,price:Number(price)});
 message.textContent='登録しました';
 message.className='success';
 nameInput.value='';categoryInput.value='';priceInput.value='';
 render(products);
});
searchButton.addEventListener('click',()=>{
 const keyword=keywordInput.value.trim().toLowerCase();
 const filtered=products.filter(p=>p.name.toLowerCase().includes(keyword));
 render(filtered);
});
showAllButton.addEventListener('click',()=>{
 keywordInput.value='';
 render(products);
});
render(products);
