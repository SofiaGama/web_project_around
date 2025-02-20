//@ts-nocheck
import UserInfo from "../components/UserInfo.js";
import Card from "../components/Card.js";
import { popupViewImage } from "../index.js";

const popupAddCard = document.querySelector(".popup_type_add-card");
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const popupViewCard = document.querySelector(".popup_type_view-card");
const openAddCardButton = document.querySelector(".profile__button-fill");
const openEditProfileButton = document.querySelector("#profile");
const closeButtons = document.querySelectorAll(".popup__close-button");
const profileName = document.querySelector("#proname");
const profileText = document.querySelector("#protext");
const editProfileForm = document.forms.editp;
const inputName = editProfileForm.elements["name"];
const inputJob = editProfileForm.elements["about"];
const popupOpen = document.querySelector(".popup_opened");

export const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  console.log(popup);
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

const userInfo = new UserInfo({ name: "#proname", about: "#protext" });

export const editUserInfo = (values) => {
  userInfo.setUserInfo(values.name, values.about);
};

document.addEventListener("click", (e) => {
  if (e.target.classList.contains(".popup_opened")) {
    closePopup(e.target);
  }
});
