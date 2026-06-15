/*=================================================
  ヘッダーナビゲーション共通化
  ===================================================*/
// 1. メイン（ヘッダー）とフッターで使い回す、共通の「メニュー名」と「リンク先」のデータ
const NAV_ITEMS = [
  { text: "about kagamirock", url: "#" },
  { text: "news", url: "#" },
  { text: "collections", url: "#" },
  { text: "kagamirock-channel", url: "#" },
  { text: "access", url: "#" },
  { text: "contact", url: "#" },
];

document.addEventListener("DOMContentLoaded", () => {
  // ページ読み込み完了後にすべての処理を実行
  initHeaderNav();
  initFooterNav();
  initCopyright();
});

// ヘッダーナビゲーションの生成
function initHeaderNav() {
  const target = document.getElementById("js-nav-main");
  if (!target) return;

  // ヘッダー専用のクラス名（header__nav-item など）を組み立てる
  const html = NAV_ITEMS.map(
    (item) => `
    <li class="header__nav-item"><a class="header__nav-link" href="${item.url}">${item.text}</a></li>
  `,
  ).join("");

  target.innerHTML = html;

  // ヘッダーのSNSもここで一緒に処理
  const navSns = document.getElementById("js-nav-sns");
  if (navSns) {
    navSns.innerHTML = `
      <li class="header__sns-item"><a class="header__sns-link" href="https://x.com" target="_blank"><i class="fa-brands fa-x-twitter"></i></a></li>
      <li class="header__sns-item"><a class="header__sns-link" href="https://instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
    `;
  }
}

// フッターナビゲーションの生成
function initFooterNav() {
  const targets = document.querySelectorAll(".footer__navigation");
  if (targets.length === 0) return;

  // フッター専用のクラス名（footer__nav-item など）を組み立てる
  const html = NAV_ITEMS.map(
    (item) => `
    <li class="footer__nav-item"><a href="${item.url}" class="footer__nav-link">${item.text}</a></li>
  `,
  ).join("");

  targets.forEach((el) => (el.innerHTML = html));
}

// コピーライトの生成
function initCopyright() {
  const target = document.getElementById("js-copyright");
  if (!target) return;
  target.innerHTML = "Copyright 2026 kagamirock";
}

/*=================================================
    GoogleMap自動ズーム対策
  ===================================================*/
document.addEventListener("DOMContentLoaded", function () {
  const mapOverlay = document.getElementById("map-overlay");
  const mapIframe = document.getElementById("map-iframe");

  // iframe自体は常に触れる状態にしておき、上のカバー(overlay)で制御する
  mapIframe.style.pointerEvents = "auto";

  // 1. カバーをクリックしたら、カバーを非表示にして地図を触れるようにする
  mapOverlay.addEventListener("click", function () {
    mapOverlay.style.opacity = "0";
    mapOverlay.style.pointerEvents = "none";
  });

  // 2. マウスが地図エリアから離れたらカバーを復活（PC用）
  document
    .getElementById("access-map")
    .addEventListener("mouseleave", function () {
      mapOverlay.style.opacity = "1";
      mapOverlay.style.pointerEvents = "auto";
    });

  // 3. 画面がスクロールされたらカバーを復活（スマホでのスタック防止）
  window.addEventListener(
    "scroll",
    function () {
      mapOverlay.style.opacity = "1";
      mapOverlay.style.pointerEvents = "auto";
    },
    { passive: true },
  );
});
