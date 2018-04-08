var link = document.querySelector(".contacts__button");

var popup = document.querySelector(".feedback");
var close = popup.querySelector(".feedback__close");
var overlay = document.querySelector(".modal__overlay");

var username = popup.querySelector("#feedback-username");
var email = popup.querySelector("#feedback-email");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("username");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("feedback--show");
  overlay.classList.add("modal__overlay--show");

  if (storage) {
    username.value = storage;
    email.focus();
  } else {
    username.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("feedback--show");
  overlay.classList.remove("modal__overlay--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("feedback--show")) {
      popup.classList.remove("feedback--show");
      overlay.classList.remove("modal__overlay--show");
    }
  }
});
