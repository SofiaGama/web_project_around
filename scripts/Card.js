export class Card {
  constructor(
    name,
    link,
    templateSelector,
    handleCardClick,
    handleCardDelete,
    handleCardLike
  ) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleCardLike = handleCardLike;
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector).content;
    return cardTemplate.querySelector(".grid__card").cloneNode(true);
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".grid__card-legend").textContent = this._name;
    const cardImage = this._element.querySelector(".grid__card-image");
    cardImage.src = this._link;
    cardImage.alt = this._name;

    return this._element;
  }

  _setEventListeners() {
    this._element
      .querySelector(".grid__card-button-trash")
      .addEventListener("click", () => {
        this._handleCardDelete(this);
      });

    this._element
      .querySelector(".grid__card-button-like")
      .addEventListener("click", () => {
        this._handleCardLike(this);
      });

    this._element
      .querySelector(".grid__card-image")
      .addEventListener("click", () => {
        this._handleCardClick(this._name, this._link);
      });
  }

  toggleLike() {
    this._element
      .querySelector(".grid__card-button-like")
      .classList.toggle("grid__card-button-like-active");
  }

  removeCard() {
    this._element.remove();
    this._element = null;
  }
}
