/*=================================================
  メニューナビゲーション共通化
  ===================================================*/
function header_nav() {
  let html = "";
  html += '<li><a href="#">about kagamirock</a></li>';
  html += '<li><a href="#">news</a></li>';
  html += '<li><a href="#">acollections</a></li>';
  html += '<li><a href="#">kagamirock-channel</a></li>';
  html += '<li><a href="#">access</a></li>';
  html += '<li><a href="#">contact</a></li>';
  document.getElementById("main-navigation").innerHTML = html;
  document.getElementById("footer-navigation").innerHTML = html;
}

function header_nav_sns() {
  let html = "";
  html +=
    '<li><a href="https://x.com" target="_blank"><i class="fab fa-x-twitter"></i></a></li>';
  html +=
    '<li><a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a></li>';
  document.getElementById("sns-navigation").innerHTML = html;
}

/*=================================================
    フッター共通化
  ===================================================*/
function copyright() {
  let html = "";
  html += "Copyright 2025 kagamirock";
  document.getElementById("footer-copyright").innerHTML = html;
}

/*=================================================
    トップに戻る
  ===================================================*/
window.addEventListener("scroll", () => {
  const pageTop = document.getElementById("to-top");
  if (window.scrollY >= 400) {
    pageTop.classList.add("fadein");
  } else {
    pageTop.classList.remove("fadein");
  }
});
