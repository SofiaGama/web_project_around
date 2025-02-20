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
  console.log("jfjvnfjv");
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = button.closest(".popup");
    closePopup(popup);
    console.log("dnbfbd");
  });
});

const userInfo = new UserInfo({ name: "#proname", about: "#protext" });

export const editUserInfo = (values) => {
  userInfo.setUserInfo(values.name, values.about);
};

export const createNewCard = (values) => {
  const card = new Card(values.title, values.link, "#card-template", () =>
    popupViewImage.open(values.link, values.title)
  );
  const cardElement = card.generateCard();

  cardsContainer.prepend(cardElement);

  closePopup(popupAddCard);
};

document.addEventListener("click", (e) => {
  if (e.target.classList.contains(".popup_opened")) {
    closePopup(e.target);
  }
});
