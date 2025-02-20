export default class Card {
  constructor(name, link, cardTemplate, { hander }, handleCardClick) {
    this._name = name;
    this._link = link;
    this._cardTemplate = document.querySelector(cardTemplate);
    this._handleCardClick = handleCardClick;
    this._cardOpenImage = hander;
  }

  _getTemplate() {
    const cardElement = this._cardTemplate.content
      .querySelector(".grid__card")
      .cloneNode(true);

    return cardElement;
  }

  toggleLike() {
    this._element
      .querySelector(".grid__card-button-like")
      .classList.toggle("grid__card-button-like-active");
  }

  _seteventListener() {
    this._buttonLike.addEventListener("click", () => {
      this._handleCardLike();
    });
    this._buttonDelete.addEventListener("click", () => {
      this._handleCardDelete();
    });
    this._cardImage.addEventListener("click", () => {
      this._cardOpenImage(this._name, this._link);
    });
  }

  _handleCardDelete() {
    this._element.remove();
    this._element = null;
  }

  _handleCardLike() {
    this._buttonLike.classList.toggle("grid__card-button-like-active");
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".grid__card-image");
    this._cardText = this._element.querySelector(".grid__card-legend");
    this._buttonLike = this._element.querySelector(".grid__card-button-like");
    this._buttonDelete = this._element.querySelector(
      ".grid__card-button-trash"
    );

    this._cardImage.setAttribute("src", this._link);
    this._cardImage.setAttribute("alt", this._name);
    this._cardText.textContent = this._name;

    this._seteventListener();

    return this._element;
  }
}
