/*=================================================
  ヘッダーナビゲーション共通化
  ===================================================*/
function header_nav() {
  const html =
    `<li class="header__nav-item"><a class="header__nav-link" href="#">about kagamirock</a></li>` +
    `<li class="header__nav-item"><a class="header__nav-link" href="#">news</a></li>` +
    `<li class="header__nav-item"><a class="header__nav-link" href="#">collections</a></li>` +
    `<li class="header__nav-item"><a class="header__nav-link" href="#">kagamirock-channel</a></li>` +
    `<li class="header__nav-item"><a class="header__nav-link" href="#">access</a></li>` +
    `<li class="header__nav-item"><a class="header__nav-link" href="#">contact</a></li>`;

  const targets = document.querySelectorAll(".navigation__main");

  targets.forEach((el) => (el.innerHTML = html));
}

function header_nav_sns() {
  const html =
    `<li class="header__sns-item"><a class="header__sns-link" href="https://x.com" target="_blank"><i class="fab fa-x-twitter"></i></a></li>` +
    `<li class="header__sns-item"><a class="header__sns-link" href="https://x.com" target="_blank"><i class="fab fa-instagram"></i></a></li>`;

  const targets = document.querySelectorAll(".navigation__sns");

  targets.forEach((el) => (el.innerHTML = html));
}

/*=================================================
    フッターナビゲーション＆コピーライト共通化
  ===================================================*/
function footer_nav() {
  const html =
    `<li class="footer__nav-item"><a href="#" class="footer__nav-link">about kagamirock</a></li>` +
    `<li class="footer__nav-item"><a href="#" class="footer__nav-link">news</a></li>` +
    `<li class="footer__nav-item"><a href="#" class="footer__nav-link">collections</a></li>` +
    `<li class="footer__nav-item"><a href="#" class="footer__nav-link">kagamirock-channel</a></li>` +
    `<li class="footer__nav-item"><a href="#" class="footer__nav-link">access</a></li>` +
    `<li class="footer__nav-item"><a href="#" class="footer__nav-link">contact</a></li>`;

  const targets = document.querySelectorAll(".footer__navigation");
  targets.forEach((el) => (el.innerHTML = html));
}

function copyright() {
  const target = document.querySelector(".footer__copyright");
  if (!target) return;

  target.innerHTML = "Copyright 2025 kagamirock";
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

/*=================================================
    GoogleMap自動ズーム対策
  ===================================================*/
document.addEventListener("DOMContentLoaded", function () {
  const map = document.getElementById("map-iframe");
  const accessButton = document.getElementById("access-map");

  // 初期は地図操作を無効
  map.style.pointerEvents = "none";

  // ボタンを押したら地図操作を有効化
  accessButton.addEventListener("click", function () {
    map.style.pointerEvents = "auto";
  });

  // PC: 地図上から離れたら再び無効化
  map.addEventListener("mouseout", function () {
    map.style.pointerEvents = "none";
  });

  // SP: タッチ終了でも無効化
  map.addEventListener("touchend", function () {
    map.style.pointerEvents = "none";
  });
});
