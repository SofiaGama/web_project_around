export default class Card {
  constructor(
    { name, link, _id, isLiked, owner },
    cardTemplate,
    { hander },
    likeCard,
    dislikeCard,
    popupConfirmation,
    cardDelete
  ) {
    this._name = name;
    this._link = link;
    this._id = _id;
    this._isLiked = isLiked;
    this._likeCard = likeCard;
    this._dislikeCard = dislikeCard;
    this._cardTemplate = document.querySelector(cardTemplate);
    this._cardOpenImage = hander;
    this._popupConfirmation = popupConfirmation;
    this._cardDelete = cardDelete;
  }

  _getTemplate() {
    const cardElement = this._cardTemplate.content
      .querySelector(".grid__card")
      .cloneNode(true);

    return cardElement;
  }

  _seteventListener() {
    this._buttonLike.addEventListener("click", () => {
      this._handleCardLike();
    });
    this._buttonDelete.addEventListener("click", (evt) => {
      this._handleCardDelete(evt);
    });
    this._cardImage.addEventListener("click", () => {
      this._cardOpenImage(this._name, this._link);
    });
  }

  _handleCardLike() {
    if (this._isLiked) {
      this._dislikeCard(this._id, (res) => {
        this._isLiked = res.isLiked;
        this._buttonLike.classList.toggle("grid__card-button-like-active");
      });
    } else {
      this._likeCard(this._id, (res) => {
        this._isLiked = res.isLiked;
        this._buttonLike.classList.toggle("grid__card-button-like-active");
      });
    }
  }

  _isCardLiked() {
    if (this._isLiked) {
      this._buttonLike.classList.add("grid__card-button-like-active");
    }
  }

  _handleCardDelete(evt) {
    this._popupConfirmation.open(() => {
      this._cardDelete(this._id);
      evt.target.parentElement.remove();
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".grid__card-image");
    this._cardText = this._element.querySelector(".grid__card-legend");
    this._buttonLike = this._element.querySelector(".grid__card-button-like");
    this._buttonDelete = this._element.querySelector(
      ".grid__card-button-trash"
    );
    this._isCardLiked();
    this._cardImage.setAttribute("src", this._link);
    this._cardImage.setAttribute("alt", this._name);
    this._cardText.textContent = this._name;

    this._seteventListener();

    return this._element;
  }
}
