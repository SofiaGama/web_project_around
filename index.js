let openPage = document.querySelector(".page");
let submiTform = document.querySelector(".popup__submit-button");
let openBut = document.querySelector(".profile__button-fill");
let openP = document.querySelector(".profile__button-form");
let closeP = document.querySelector(".popup__edit-div-button-close");
let closeBut = document.querySelector(".form__edit-content-button-close");
let formClose = document.querySelector(".popup");
let closeB = document.querySelector(".form");
let buttonForm = document.querySelector(".form__submit-button");

function openForm() {
  formClose.style.display = "block";
  openPage.style.opacity = "0.4";
  openBut.disabled = true;
}

function openImg() {
  closeB.style.display = "block";
  openPage.style.opacity = "0.4";
}
function closeImg() {
  closeB.style.display = "none";
  openPage.style.opacity = "1";
}

function closeForm() {
  formClose.style.display = "none";
  openBut.disabled = false;
}

function closePage() {
  openPage.style.opacity = "1";
}

openBut.addEventListener("click", openImg);
closeBut.addEventListener("click", closeImg);
submiTform.addEventListener("click", closePage);
buttonForm.addEventListener("click", closeImg);
openP.addEventListener("click", openForm);
closeP.addEventListener("click", closeForm);
closeP.addEventListener("click", closePage);

const buttons = document.querySelectorAll(".local__img-btn-heart");

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

let formElment = document.querySelector(".popup__edit-pro");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  let nameInput = document.querySelector("#name");
  let jobInput = document.querySelector("#text");
  let formClean = document.querySelector(".popup__empty");

  let name = nameInput.value;
  let job = jobInput.value;

  let nameDisplay = document.querySelector("#pro");
  let jobDisplay = document.querySelector("#protext");

  nameDisplay.textContent = name;
  jobDisplay.textContent = job;
  formClean.style.display = "none";
  openBut.disabled = false;
}

formElment.addEventListener("submit", handleProfileFormSubmit);
