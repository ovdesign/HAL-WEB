window.onload = function () {
  // Vue.createApp を使ってアプリを作成
  const sliderApp = Vue.createApp({
    // Vue 3では data は必ず関数にしてオブジェクトを return します
    data() {
      return {
        current_slide: 0,
        slides: [
          { img: "images/top-image001.jpg" },
          { img: "images/top-image002.jpg" },
          { img: "images/top-image003.jpg" },
          { img: "images/top-image004.jpg" },
        ],
      };
    },
    // mounted の書き方は Vue 2 と同じで大丈夫です
    mounted() {
      setInterval(() => {
        this.current_slide =
          this.current_slide < this.slides.length - 1
            ? this.current_slide + 1
            : 0;
      }, 4000);
    },
  });

  // #slider 要素にマウント（適用）
  sliderApp.mount("#slider");
};
