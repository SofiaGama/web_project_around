// @ts-nocheck

import Section from "./components/Section.js";
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import PopupWithForms from "./components/PopupWithForms.js";
import PopupWithImage from "./components/PopupWithImage.js";
import Api from "../src/components/Api.js";
import UserInfo from "./components/UserInfo.js";
import PopupWithConfirmation from "./components/PopupWithConfirmation.js";

const api = new Api({
  baseUrl: "https://around-api.pt-br.tripleten-services.com/v1",
  authorization: "1042dbaa-1f1e-4873-a497-11bd407a55f0",
});

let section;

api.getInitialCards().then((cards) => {
  section = new Section({ items: cards, renderer: loadCards }, ".grid");
  section.renderItems();
});

const userInfo = new UserInfo({
  name: "#proname",
  about: "#protext",
  avatar: "#profile__avatar",
});

const editUserInfo = (values) => {
  api
    .userInfoUpdate(values)
    .then(() => {
      userInfo.setUserInfo(values);
    })
    .catch((err) => console.log(err));
};

api
  .getUserInfo()
  .then((data) => {
    userInfo.setUserInfo(data);
    userInfo.setUserAvatar(data);
  })
  .catch((err) => console.log(err));

function cardDelete(cardId) {
  api
    .deleteCard(cardId)
    .then(() => {
      popupConfirmation.close();
    })
    .catch((err) => console.log(err));
}

const popupConfirmation = new PopupWithConfirmation(".popup_type_confirmation");
popupConfirmation.setEventListeners();

function handleLikeCard(cardId, process) {
  api
    .cardLike(cardId)
    .then((data) => {
      process(data);
    })
    .catch((err) => console.log(err));
}

function handleCardDislike(cardId, process) {
  api
    .deleteLike(cardId)
    .then((data) => process(data))
    .catch((err) => console.log(err));
}

function loadCards(cardData) {
  const card = new Card(
    cardData,
    "#card-template",
    {
      hander: (name, link) => popupViewImage.open(name, link),
    },
    handleLikeCard,
    handleCardDislike,
    popupConfirmation,
    cardDelete
  );
  section.addItems(card.generateCard());
}

const popupProfile = new PopupWithForms(
  editUserInfo,
  ".popup_type_edit-profile"
);
popupProfile.setEventListeners();

// atualizar novos cartoes

const createNewCard = (cardData) => {
  const newCard = api.createCard(cardData).then((createCard) => {
    const card = new Card(
      createCard,
      "#card-template",
      {
        hander: (name, link) => popupViewImage.open(name, link),
      },
      handleLikeCard,
      handleCardDislike,
      popupConfirmation,
      cardDelete
    );
    const cardElement = card.generateCard();
    section.addItems(cardElement);
  });
};

function updateAvatar(userData) {
  api.profileImageUpdate(userData).then((res) => {
    userInfo.setUserAvatar(res);
  });
}

const profileAvatar = new PopupWithForms(
  updateAvatar,
  ".popup_type_edit-avatar"
);
profileAvatar.setEventListeners();

const popupCreateCard = new PopupWithForms(
  createNewCard,
  ".popup_type_add-card"
);
popupCreateCard.setEventListeners();

// pegar o botão de abrir o popup de adicionar cartão

const openAddCardButton = document.querySelector(".profile__button-fill");
const openEditProfileButton = document.querySelector("#profile");
const openChangeAvatar = document.querySelector(".profile__avatar-edit-button");

// adicionar um evento de click nesse botão e chamar o metodo de abrir o popup

openAddCardButton.addEventListener("click", () => {
  popupCreateCard.open();
});
openEditProfileButton.addEventListener("click", () => {
  popupProfile.open();
});
openChangeAvatar.addEventListener("click", () => {
  profileAvatar.open();
});

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
const formValidatorAvatar = new FormValidator(config, "avatarform");

formValidatorAddCard.enableValidation();
formValidatorEditProfile.enableValidation();
formValidatorAvatar.enableValidation();

function updateProfilePicture() {}
