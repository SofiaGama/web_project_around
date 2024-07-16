function setErrorMessage(input, span) {
  span.textContent = input.validationMessage;
  if (input.validationMessage === "") {
    span.style.visibility = "hidden";
  } else {
    span.style.visibility = "visible";
  }
}

function ValidadeError(input) {
  // Identifique o botão de envio específico para o formulário do input atual
  const form = input.form;
  console.log(form.lastChild.previousSibling);
  const buttonSubmit = form.lastChild.previousSibling;

  let errorCount = 0;

  // Itere sobre todos os inputs dentro do mesmo formulário do input atual
  form.querySelectorAll("input").forEach((inputList) => {
    let isValid = inputList.checkValidity();
    let spanError = inputList.nextElementSibling;
    setErrorMessage(inputList, spanError);

    if (!isValid) {
      errorCount++;
    }
  });
  if (errorCount > 0) {
    buttonSubmit.disabled = true;
    if (buttonSubmit.classList.contains("form__submit-button")) {
      buttonSubmit.classList.add("form__submit-button-inactive");
      buttonSubmit.classList.remove("form__submit-button");
    } else if (buttonSubmit.classList.contains("popup__submit-button")) {
      buttonSubmit.classList.add("popup__submit-button-inactive");
      buttonSubmit.classList.remove("popup__submit-button");
    }
  } else {
    buttonSubmit.disabled = false;
    if (buttonSubmit.classList.contains("form__submit-button-inactive")) {
      buttonSubmit.classList.remove("form__submit-button-inactive");
      buttonSubmit.classList.add("form__submit-button");
    } else if (
      buttonSubmit.classList.contains("popup__submit-button-inactive")
    ) {
      buttonSubmit.classList.remove("popup__submit-button-inactive");
      buttonSubmit.classList.add("popup__submit-button");
    }
  }
}

// Adiciona o event listener para todos os inputs que devem ser validados
document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", () => ValidadeError(input));
});
