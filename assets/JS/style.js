window.addEventListener("scroll", function () {
  const elm = document.querySelector(".pagetop");
  const scroll = window.pageYOffset;
  if (scroll > 500) {
    elm.classList.add("show");
  } else {
    elm.classList.remove("show");
  }
});
