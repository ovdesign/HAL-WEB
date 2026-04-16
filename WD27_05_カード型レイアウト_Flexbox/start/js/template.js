////////////////////////////////////////
//ナビゲーション・コピーライト一括管理
////////////////////////////////////////

// Vue JS パターン///////////////////////////////
//ヘッダーナビゲーション部分
Vue.component("header-navigation-template", {
  template: `
<ul class="header__nav-list">
  <li><a href="index.html" class="header__nav-link">HOME</a></li>
  <li><a href="azuki.html" class="header__nav-link">豆のゆで方</a></li>
  <li><a href="azuki.html" class="header__nav-link">豆の力</a></li>
  <li><a href="azuki.html" class="header__nav-link">世界の豆</a></li>
  <li><a href="azuki.html" class="header__nav-link">このサイトについて</a></li>
</ul>
  `,
});

new Vue({
  el: "#main-navigation",
});

Vue.component("footer-navigation-template", {
  template: `
<ul class="footer__nav-list">
  <li><a href="index.html" class="footer__nav-link">HOME</a></li>
  <li><a href="azuki.html" class="footer__nav-link">豆のゆで方</a></li>
  <li><a href="azuki.html" class="footer__nav-link">豆の力</a></li>
  <li><a href="azuki.html" class="footer__nav-link">世界の豆</a></li>
  <li><a href="azuki.html" class="footer__nav-link">このサイトについて</a></li>
</ul>
  `,
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
// document.addEventListener("DOMContentLoaded", () => {
//   // ヘッダー ナビ
//   const headerNavHTML = `
//     <ul class="header__nav-list">
//       <li><a href="index.html" class="header__nav-link">HOME</a></li>
//       <li><a href="azuki.html" class="header__nav-link">豆のゆで方</a></li>
//       <li><a href="azuki.html" class="header__nav-link">豆の力</a></li>
//       <li><a href="azuki.html" class="header__nav-link">世界の豆</a></li>
//       <li><a href="azuki.html" class="header__nav-link">このサイトについて</a></li>
//     </ul>
//   `;

//   // フッター ナビ
//   const footerNavHTML = `
//     <ul class="footer__nav-list">
//       <li><a href="index.html" class="footer__nav-link">HOME</a></li>
//       <li><a href="azuki.html" class="footer__nav-link">豆のゆで方</a></li>
//       <li><a href="azuki.html" class="footer__nav-link">豆の力</a></li>
//       <li><a href="azuki.html" class="footer__nav-link">世界の豆</a></li>
//       <li><a href="azuki.html" class="footer__nav-link">このサイトについて</a></li>
//     </ul>
//   `;

//   // コピーライト
//   const copyrightHTML = `
//     <small>&copy; 2025 十勝豆知識</small>
//   `;

//   // 挿入
//   const headerNav = document.getElementById("main-navigation");
//   const footerNav = document.getElementById("footer-navigation");
//   const copyright = document.getElementById("copyright");

//   if (headerNav) headerNav.innerHTML = headerNavHTML;
//   if (footerNav) footerNav.innerHTML = footerNavHTML;
//   if (copyright) copyright.innerHTML = copyrightHTML;
// });
