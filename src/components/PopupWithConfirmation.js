import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(selector, cardDelete) {
    super(selector);
    this._buttonConfirm = document.querySelector(
      ".form__submit-button-confirmation"
    );
    this._cardDelete = cardDelete;
  }

  open(removeCard) {
    super.open();
    this._removeCard = removeCard;
    this._buttonConfirm.addEventListener("click", this._removeCard);
  }
}
