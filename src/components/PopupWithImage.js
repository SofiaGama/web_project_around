import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._imageElement = this._popup.querySelector(".popup__image");
    this._captionElement = this._popup.querySelector(".popup__title");
  }

  open(imageText, imageSrc) {
    this._imageElement.setAttribute("src", imageSrc);
    this._imageElement.setAttribute("alt", imageText);

    this._captionElement.textContent = imageText;

    super.open();
  }

  close() {
    super.close();
    document.removeEventListener("keypress", this._handleEscClose);
  }

  setEventListeners() {
    super.setEventListeners();
  }
}
