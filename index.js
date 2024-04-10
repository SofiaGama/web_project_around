let popupClose = document.querySelector(".popup");
let openPage = document.querySelector(".page");
let closeBtn = document.querySelector(".form");
let openForm = document.querySelector(".profile__button-form");
let closePg = document.querySelector(".popup__edit-div-button-close");
let closeButton = document.querySelector(".form__edit-content-button-close");
let submitPopup = document.querySelector(".popup__edit-pro-save");
let openB = document.querySelector("profile__button-fill");

function closePage() {
  openPage.style.opacity = "1";
}

function openPopup() {
  openB.disabled = true;
  popupClose.computedStyleMap.display = "block";
  openPage.computedStyleMap.opacity = "0.5";
}

function closePopup() {
  openB = disabled = false;
  popupClose.style.display = "none";
}

function photoOpen() {
  closeBtn.style.display = "block";
  openPage.style.opacity = "0.5";
}

function photoClose() {
  closeBtn.style.display = "none";
}

openB.addEventListener("click", photoOpen);
closeButton.addEventListener("click", photoClose);
closeButton.addEventListener("click", closePage);
closePg.addEventListener("click", closePage);
openForm.addEventListener("click", openPopup);
closePg.addEventListener("click", closePopup);

let popupfill = document.querySelector(".popup__edit-pro");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const inputName = document.querySelector(".popup__input-type-name");
  const inputText = document.querySelector(".popup__input-type-text");
  const popupEmpty = document.querySelector(".popup__empty");
  let name = inputName.value;
  let text = inputText.value;
  let printName = document.querySelector("#pro");
  let printText = document.querySelector("#protext");
  openForm.disabled = false;
  printName.textContent = name;
  printText.textContent = text;
  popupEmpty.style.display = "none";
}

popupfill.addEventListener("submit", handleProfileFormSubmit);

const buttons = document.querySelectorAll(".grid__card-button-like");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (button.classList.contains("grid__card-button-like")) {
      button.classList.remove("grid__card-button-like");
      button.classList.add("grid__card-button-like-active");
    } else {
      button.classList.add("grid__card-button-like");
      button.classList.remove("grid__card-button-like-active");
    }
  });
});
