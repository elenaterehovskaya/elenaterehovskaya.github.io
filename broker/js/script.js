// Меню
let navMain = document.querySelector(".main-screen__nav");
let navToggle = document.querySelector(".main-screen__toggle");
let linkMain = document.querySelector(".site-list__link--main");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-screen__nav--closed")) {
    navMain.classList.remove("main-screen__nav--closed");
    navMain.classList.add("main-screen__nav--opened");
  } else {
    navMain.classList.add("main-screen__nav--closed");
    navMain.classList.remove("main-screen__nav--opened");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    if (navMain.classList.contains("main-screen__nav--opened")) {
      navMain.classList.add("main-screen__nav--closed");
      navMain.classList.remove("main-screen__nav--opened");
    }
  }
});

linkMain.addEventListener("click", function (evt) {
  evt.preventDefault();
  navMain.classList.add("main-screen__nav--closed");
  navMain.classList.remove("main-screen__nav--opened");
});
