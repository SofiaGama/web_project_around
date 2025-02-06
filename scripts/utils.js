//@ts-nocheck
const popupAddCard = document.querySelector(".popup_type_add-card");
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const popupViewCard = document.querySelector(".popup_type_view-card");

const openAddCardButton = document.querySelector(".profile__button-fill");
const openEditProfileButton = document.querySelector("#profile");

const closeButtons = document.querySelectorAll(
  ".popup__close-button, .popup__close-button, .popup__close-button"
);

const profileName = document.querySelector("#proname");
const profileText = document.querySelector("#protext");

const editProfileForm = document.forms["edit-profile"];
const inputName = editProfileForm.elements["nome"];
const inputJob = editProfileForm.elements["cargo"];

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

openAddCardButton.addEventListener("click", () => openPopup(popupAddCard));
openEditProfileButton.addEventListener("click", () => {
  inputName.value = profileName.textContent;
  inputJob.value = profileText.textContent;

  openPopup(popupEditProfile);
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = button.closest(".popup");
    closePopup(popup);
  });
});

editProfileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileText.textContent = inputJob.value;
  closePopup(popupEditProfile);
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("popup_opened")) {
    closePopup(event.target);
  }
});
