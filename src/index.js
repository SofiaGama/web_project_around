// @ts-nocheck

import Section from "./components/Section.js";
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import PopupWithForms from "./components/PopupWithForms.js";
import PopupWithImage from "./components/PopupWithImage.js";
import { editUserInfo, createNewCard } from "./scripts/utils.js";

const popupProfile = new PopupWithForms(
  editUserInfo,
  ".popup_type_edit-profile"
);
popupProfile.setEventListeners();

const popupCreateCard = new PopupWithForms(
  createNewCard,
  ".popup_type_add-card"
);
popupCreateCard.setEventListeners();

export const popupViewImage = new PopupWithImage(".popup_type_view-card");
popupViewImage.setEventListeners();

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

const section = new Section(
  { items: initialCards, renderer: loadCards },
  ".grid"
);
section.renderItems();

function loadCards({ name, link }) {
  const card = new Card(name, link, "#card-template", {
    hander: (name, link) => popupViewImage.open(name, link),
  });
  section.addItems(card.generateCard());
}

const config = {
  form: ".form",
  input: ".form__input",
  submitButton: ".form__submit-button",
  buttonDisabledClass: "form__submit-button-inactive",
  errorClass: "form__error-invalid",
  inputErrorClass: "form__input-invalid",
};

const formValidatorAddCard = new FormValidator(config, "form-values");
const formValidatorEditProfile = new FormValidator(config, "editp");

formValidatorAddCard.enableValidation();
formValidatorEditProfile.enableValidation();
