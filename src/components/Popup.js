export default class Popup {
  constructor(selector) {
    this._popup = document.querySelector(selector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    document.addEventListener("keypress", this._handleEscClose);
    this._popup.classList.add("popup_opened");
  }

  close() {
    document.removeEventListener("keypress", this._handleEscClose);
    this._popup.classList.remove("popup_opened");
  }

  _handleEscClose(evt) {
    if (evt.key == "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    const buttonClose = document.querySelector(".popup__close-button");
    buttonClose.addEventListener("click", this.close);

    this._popup.addEventListener("click", (e) => {
      if (e.target.classList.contains("popup_opened")) {
        this.close();
      }
    });
  }
}
