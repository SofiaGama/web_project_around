// @ts-nocheck

import Section from "./components/Section.js";
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import PopupWithForms from "./components/PopupWithForms.js";
import PopupWithImage from "./components/PopupWithImage.js";
import { editUserInfo, initialCards } from "./scripts/utils.js";

function loadCards({ name, link }) {
  const card = new Card(name, link, "#card-template", {
    hander: (name, link) => popupViewImage.open(name, link),
  });
  section.addItems(card.generateCard());
}

const section = new Section(
  { items: initialCards, renderer: loadCards },
  ".grid"
);
section.renderItems();

const popupProfile = new PopupWithForms(
  editUserInfo,
  ".popup_type_edit-profile"
);
popupProfile.setEventListeners();

const createNewCard = (values) => {
  const card = new Card(values.title, values.link, "#card-template", () =>
    popupViewImage.open(values.link, values.title)
  );
  const cardElement = card.generateCard();

  section.addItems(cardElement);
};

const popupCreateCard = new PopupWithForms(
  createNewCard,
  ".popup_type_add-card"
);
popupCreateCard.setEventListeners();

export const popupViewImage = new PopupWithImage(".popup_type_view-card");
popupViewImage.setEventListeners();

const config = {
  form: ".form",
  input: ".form__input",
  submitButton: ".form__submit-button",
  buttonDisabledClass: "form__submit-button-inactive",
  errorClass: "form__error-invalid",
  inputErrorClass: ".form__input-invalid",
};

const formValidatorAddCard = new FormValidator(config, "form-values");
const formValidatorEditProfile = new FormValidator(config, "editp");

formValidatorAddCard.enableValidation();
formValidatorEditProfile.enableValidation();
