////////////////////////////////////////
//ナビゲーション・コピーライト一括管理
////////////////////////////////////////

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
  <small>&copy; 2024 十勝豆知識</small>
  `,
});

new Vue({
  el: "#copyright",
});
