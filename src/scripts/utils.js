//@ts-nocheck
// import UserInfo from "../components/UserInfo.js";
import Card from "../components/Card.js";
import { popupViewImage } from "../index.js";

const popupEditAvatar = document.querySelector(".popup_type_edit-avatar");
const popupAddCard = document.querySelector(".popup_type_add-card");
const popupViewCard = document.querySelector(".popup_type_view-card");
const openChangeAvatar = document.querySelector(".profile__avatar-edit-button");
const closeButtons = document.querySelectorAll(".popup__close-button");
const profileName = document.querySelector("#proname");
const profileText = document.querySelector("#protext");
const editProfileForm = document.forms.editp;
const inputName = editProfileForm.elements["name"];
const inputJob = editProfileForm.elements["about"];
const popupOpen = document.querySelector(".popup_opened");
const avatarInput = document.querySelector(".form__input-avatar");
export const ownerId = "";

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

openChangeAvatar.addEventListener("click", () => openPopup(popupEditAvatar));
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

document.addEventListener("click", (e) => {
  if (e.target.classList.contains(".popup_opened")) {
    closePopup(e.target);
  }
});
