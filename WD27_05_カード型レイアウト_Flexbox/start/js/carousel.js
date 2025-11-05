window.onload = function () {
  new Vue({
    el: "#slider",
    data: {
      current_slide: 0,
      slides: [
        { img: "images/top-image001.jpg" },
        { img: "images/top-image002.jpg" },
        { img: "images/top-image003.jpg" },
        { img: "images/top-image004.jpg" },
      ],
    },
    mounted() {
      setInterval(() => {
        this.current_slide =
          this.current_slide < this.slides.length - 1
            ? this.current_slide + 1
            : 0;
      }, 4000);
    },
  });
};
