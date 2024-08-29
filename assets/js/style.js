// window.addEventListener("scroll", function () {
//   const elm = document.querySelector(".pagetop");
//   const scroll = window.pageYOffset;
//   if (scroll > 500) {
//     elm.classList.add("show");
//   } else {
//     elm.classList.remove("show");
//   }
// });


window.addEventListener("scroll", function () {
  const elm = document.querySelector(".pagetop");
  const scroll = window.pageYOffset;
  const windowHeight = window.innerHeight;
  const documentHeight = document.body.offsetHeight;

  // 現在の画面幅を取得
  const windowWidth = window.innerWidth;

  // スマホ画面の幅の定義（例：768px以下をスマホとみなす）
  const isMobile = windowWidth <= 600;

  if (scroll > 500) {
    elm.classList.add("show");

    // スマホでのみ、ページ下部に達したらボタンを消す
    if (isMobile && scroll + windowHeight >= documentHeight - 100) {
      elm.classList.remove("show");
    }
  } else {
    elm.classList.remove("show");
  }
});
