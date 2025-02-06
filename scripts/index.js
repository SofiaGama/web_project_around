// @ts-nocheck

import { Card } from "./Card.js";
import FormValidator from "./FormValidator.js";

const popupAddCard = document.querySelector(".popup_type_add-card");
const openAddCardPopupButton = document.querySelector(".profile__button-fill");
const closeAddCardPopupButton = document.querySelector(
  ".popup__close-button_add-card"
);
const formAddCard = document.querySelector(".form_type_add-card");
const cardsContainer = document.querySelector("#sectionCards");
const popupImage = document.querySelector(".popup__image");
const popupTitle = document.querySelector(".popup__title");
const formValidatorCard = document.getElementById("form-values");

const popupViewCard = document.querySelector(".popup_type_view-card");
const closeViewCardButton = document.querySelector(
  ".popup__close-button_view-card"
);

const initialCards = [
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

document.addEventListener("DOMContentLoaded", () => {
  loadCards(initialCards);
});

function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");
}

function closePopup(popupElement) {
  popupElement.classList.remove("popup_opened");
}

openAddCardPopupButton.addEventListener("click", () => openPopup(popupAddCard));

closeAddCardPopupButton.addEventListener("click", () =>
  closePopup(popupAddCard)
);

closeViewCardButton.addEventListener("click", () => closePopup(popupViewCard));

function loadCards(cards) {
  cards.forEach(({ name, link }) => {
    const card = new Card(
      name,
      link,
      "#card-template",
      handleCardClick,
      handleCardDelete,
      handleCardLike
    );
    const cardElement = card.generateCard();
    cardsContainer.prepend(cardElement);
  });
}

function handleCardClick(title, link) {
  popupImage.src = link;
  popupImage.alt = title;

  openPopup(popupViewCard);
}

function handleCardDelete(card) {
  card.removeCard();
}

function handleCardLike(card) {
  card.toggleLike();
}

formAddCard.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = formAddCard.title.value;
  const link = formAddCard.link.value;

  const card = new Card(
    title,
    link,
    "#card-template",
    handleCardClick,
    handleCardDelete,
    handleCardLike
  );
  const cardElement = card.generateCard();

  cardsContainer.prepend(cardElement);

  closePopup(popupAddCard);

  formAddCard.reset();
});

const config = {
  form: ".form",
  input: ".form__input",
  submitButton: ".form__submit-button",
  buttonDisabledClass: "form__submit-button-inactive",
  errorClass: "form__error-invalid",
  inputErrorClass: "form__input-invalid",
};

const formValidatorAddCard = new FormValidator(config, "form-values");
const formValidatorEditProfile = new FormValidator(config, "edit-profile");

formValidatorAddCard.enableValidation();
formValidatorEditProfile.enableValidation();
