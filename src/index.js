// @ts-nocheck

import Section from "./components/Section.js";
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import PopupWithForms from "./components/PopupWithForms.js";
import PopupWithImage from "./components/PopupWithImage.js";
import { initialCards } from "./scripts/utils.js";
import Api from "../src/components/Api.js";
import UserInfo from "./components/UserInfo.js";

const api = new Api({
  baseUrl: "https://around-api.pt-br.tripleten-services.com/v1",
  headers: {
    authorization: "1042dbaa-1f1e-4873-a497-11bd407a55f0",
    "Content-Type": "application/json",
  },
});

const userInfo = new UserInfo({ name: "#proname", about: "#protext" });

export const editUserInfo = (values) => {
  userInfo.setUserInfo(values.name, values.about);
};

api
  .getUserInfo()
  .then((data) => {
    console.log("data", data);
    userInfo.setUserInfo({
      name: data.name,
      about: data.about,
    });
  })
  .catch((err) => console.log(err));

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

const createNewCard = ({ name, link }) => {
  const card = new Card(name, link, "#card-template", {
    hander: (name, link) => popupViewImage.open(name, link),
  });
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
