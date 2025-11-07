////////////////////////////////////////
//ナビゲーション・コピーライト一括管理
////////////////////////////////////////

// Vue JS パターン///////////////////////////////
//ナビゲーション部分
Vue.component("navigation-template", {
  template: `
<ul>
<li><a href="index.html">HOME</a></li>
<li><a href="azuki.html">豆のゆで方</a></li>
<li><a href="azuki.html">豆の力</a></li>
<li><a href="azuki.html">世界の豆</a></li>
<li><a href="azuki.html">このサイトについて</a></li>
</ul>
  `,
});

new Vue({
  el: "#main-navigation",
});

new Vue({
  el: "#footer-navigation",
});

//コピーライト部分
Vue.component("copyright-template", {
  template: `
  <small>&copy; 2025 十勝豆知識</small>
  `,
});

new Vue({
  el: "#copyright",
});

// バニラ JS パターン///////////////////////////////
// ナビゲーション部分
// const navHTML = `
//   <ul>
//     <li><a href="index.html">HOME</a></li>
//     <li><a href="azuki.html">豆のゆで方</a></li>
//     <li><a href="azuki.html">豆の力</a></li>
//     <li><a href="azuki.html">世界の豆</a></li>
//     <li><a href="azuki.html">このサイトについて</a></li>
//   </ul>
// `;

// // 対象の要素に挿入
// document.addEventListener("DOMContentLoaded", () => {
//   const mainNav = document.getElementById("main-navigation");
//   const footerNav = document.getElementById("footer-navigation");
//   const copyright = document.getElementById("copyright");

//   if (mainNav) mainNav.innerHTML = navHTML;
//   if (footerNav) footerNav.innerHTML = navHTML;
//   if (copyright) copyright.innerHTML = `<small>&copy; 2025 十勝豆知識</small>`;
// });
