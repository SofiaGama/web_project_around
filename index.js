function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  let nameInput, jobInput, proName, proText;

  nameInput = document.getElementById("name");
  jobInput = document.getElementById("text");

  proName = document.getElementById("proname");
  proText = document.getElementById("protext");

  proName.innerHTML = nameInput.value;
  proText.innerHTML = jobInput.value;

  closePopup("pp");
}

function openPopup(popupElement) {
  let formElement = document.getElementById(popupElement);
  document.getElementById("pagina").classList.add("page-visible");

  formElement.style.display = "flex";
}

function closePopup(popupElement) {
  let formElement = document.getElementById(popupElement);
  document.getElementById("pagina").classList.remove("page-visible");

  nameInput = document.getElementById("name");
  jobInput = document.getElementById("text");

  nameInput.value = "";
  jobInput.value = "";

  formElement.style.display = "";
}

function curtir(btn) {
  if (btn.classList.contains("grid__card-button-like")) {
    btn.classList.add("grid__card-button-like-active");
    btn.classList.remove("grid__card-button-like");
  } else {
    btn.classList.add("grid__card-button-like");
    btn.classList.remove("grid__card-button-like-active");
  }
}
