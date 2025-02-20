import Popup from "./Popup.js";

export default class PopupWithForms extends Popup {
  constructor(submitFormCallback, selector) {
    super(selector);
    this._submitFormCallback = submitFormCallback;
    this._popup = document.querySelector(selector);
    this._form = this._popup.querySelector(".form");
  }

  _getInputValues() {
    const inputs = Array.from(this._form.querySelectorAll(".form__input"));

    const values = {};

    inputs.forEach((input) => {
      values[input.name] = input.value;
    });

    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
      const values = this._getInputValues();
      this._submitFormCallback(values);
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
