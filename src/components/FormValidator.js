export default class FormValidator {
  constructor(config, formSelector) {
    this._config = config;
    this._formElement = document.getElementById(formSelector);
    this._inputs = Array.from(
      this._formElement.querySelectorAll(this._config.input)
    );
    this._buttonSubmit = this._formElement.querySelector(
      this._config.submitButton
    );
  }

  _showInputError(input, errorMessage, { errorClass, inputErrorClass }) {
    const errorElementId = `#${input.id}-error`;
    const errorElement = this._formElement.querySelector(errorElementId);
    input.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  }

  _hideInputError(input, { errorClass, inputErrorClass }) {
    const errorElementId = `#${input.id}-error`;
    const errorElement = this._formElement.querySelector(errorElementId);
    input.classList.remove(inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(errorClass);
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }

  _hasInvalidInput() {
    return this._inputs.some((input) => {
      return !input.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonSubmit.disabled = true;
      this._buttonSubmit.classList.add(this._config.buttonDisabledClass);
    } else {
      this._buttonSubmit.disabled = false;
      this._buttonSubmit.classList.remove(this._config.buttonDisabledClass);
    }
  }

  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage, {
        errorClass: this._config.errorClass,
        inputErrorClass: this._config.inputErrorClass,
      });
    } else {
      this._hideInputError(input, {
        errorClass: this._config.errorClass,
        inputErrorClass: this._config.inputErrorClass,
      });
    }
  }

  _setEventListeners() {
    this._toggleButtonState();

    this._inputs.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }
}
