import Popup from "./Popup.js";

export default class PopupWithForms extends Popup {
  constructor(submitFormCallback, selector, config) {
    super(selector);
    this._submitFormCallback = submitFormCallback;
    this._popup = document.querySelector(selector);
    this._form = this._popup.querySelector(".form");
    this._submitButton = this._popup.querySelector(config.submitButton);
    this._disabledButton = config.buttonDisabledClass;
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

  savingProcess(save) {
    if (save) {
      this._submitButton.removeAttribute("disabled");
      this._submitButton.classList.remove(this._disabledButton);
      this._submitButton.textContent = "Salvando...";
    } else {
      this._submitButton.setAttribute("disabled", true);
      this._submitButton.classList.add(this._disabledButton);
      this._submitButton.textContent = "";
    }
  }
}
