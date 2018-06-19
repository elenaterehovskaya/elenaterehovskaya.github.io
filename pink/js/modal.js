var form = document.querySelector(".feedback__form");
var surname = document.querySelector("[name=surname]");
var username = document.querySelector("[name=username]");
var email = document.querySelector("[name=email]");

var openError = document.querySelector(".modal-feedback--error");
var openSent = document.querySelector(".modal-feedback--sent");
var closeError = openError.querySelector(".modal-feedback__button");
var closeSent = openSent.querySelector(".modal-feedback__button");

form.addEventListener("submit", function (evt) {
  if (!surname.value || !username.value || !email.value) {
    evt.preventDefault();
    openError.classList.add("modal-feedback--show");
    surname.classList.add("form-info__input--error");
    username.classList.add("form-info__input--error");
    email.classList.add("form-info__input--error");
  } else {
    openSent.classList.add("modal-feedback--show");
  }
});

closeError.addEventListener("click", function () {
  openError.classList.remove("modal-feedback--show");
});

closeSent.addEventListener("click", function () {
  openSent.classList.remove("modal-feedback--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (openError.classList.contains("modal-feedback--show")) {
      openError.classList.remove("modal-feedback--show");
    }
    if (openSent.classList.contains("modal-feedback--show")) {
      openSent.classList.remove("modal-feedback--show");
    }
  }
});
