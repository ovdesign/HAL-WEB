////////////////////////////////////////
//ナビゲーション・コピーライト一括管理
////////////////////////////////////////

// Vue JS パターン///////////////////////////////

// ■ 共通ナビゲーションデータ
const navigationLinks = [
  { href: "index.html", label: "HOME" },
  { href: "azuki.html", label: "豆のゆで方" },
  { href: "azuki.html", label: "豆の力" },
  { href: "azuki.html", label: "世界の豆" },
  { href: "azuki.html", label: "このサイトについて" },
];

// ■ ヘッダーナビゲーション
const headerApp = Vue.createApp({});
headerApp.provide("navigationLinks", navigationLinks);
headerApp.component("header-navigation-template", {
  inject: ["navigationLinks"],
  template: `
<ul class="header__nav-list">
  <li v-for="link in navigationLinks" :key="link.label">
    <a :href="link.href" class="header__nav-link">{{ link.label }}</a>
  </li>
</ul>
  `,
});
headerApp.mount("#main-navigation"); // new Vue({ el: ... }) の代わり

// ■ フッターナビゲーション
const footerApp = Vue.createApp({});
footerApp.provide("navigationLinks", navigationLinks);
footerApp.component("footer-navigation-template", {
  inject: ["navigationLinks"],
  template: `
<ul class="footer__nav-list">
  <li v-for="link in navigationLinks" :key="link.label">
    <a :href="link.href" class="footer__nav-link">{{ link.label }}</a>
  </li>
</ul>
  `,
});
footerApp.mount("#footer-navigation");

// ■ コピーライト部分
const copyrightApp = Vue.createApp({});
copyrightApp.component("copyright-template", {
  template: `
  <small>&copy; 2026 十勝豆知識</small>
  `,
});
copyrightApp.mount("#copyright");

// バニラ JS パターン///////////////////////////////
// document.addEventListener("DOMContentLoaded", () => {
//   // ■ 共通ナビゲーションデータ
//   const navigationLinks = [
//     { href: "index.html", label: "HOME" },
//     { href: "azuki.html", label: "豆のゆで方" },
//     { href: "azuki.html", label: "豆の力" },
//     { href: "azuki.html", label: "世界の豆" },
//     { href: "azuki.html", label: "このサイトについて" },
//   ];

//   // ■ ナビゲーション生成関数
//   const createNavHTML = (links, navClass) => {
//     const liItems = links
//       .map(
//         (link) =>
//           `<li><a href="${link.href}" class="${navClass}-link">${link.label}</a></li>`,
//       )
//       .join("");
//     return `<ul class="${navClass}-list">${liItems}</ul>`;
//   };

//   // ■ ヘッダー ナビ
//   const headerNavHTML = createNavHTML(navigationLinks, "header__nav");

//   // ■ フッター ナビ
//   const footerNavHTML = createNavHTML(navigationLinks, "footer__nav");

//   // ■ コピーライト
//   const copyrightHTML = `<small>&copy; 2026 十勝豆知識</small>`;

//   // ■ 挿入
//   const headerNav = document.getElementById("main-navigation");
//   const footerNav = document.getElementById("footer-navigation");
//   const copyright = document.getElementById("copyright");

//   if (headerNav) headerNav.innerHTML = headerNavHTML;
//   if (footerNav) footerNav.innerHTML = footerNavHTML;
//   if (copyright) copyright.innerHTML = copyrightHTML;
// });
