const popup = document.querySelector(".popup");
const abrirPopup = document.querySelector(".profile__button-fill");
const editarPerfil = document.querySelector(".popup__edit-pro");
const botaoFecharPerfil = document.querySelector(
  ".popup__edit-div-button-close"
);
const pagina = document.querySelector(".page");

function abrirEditarPopup() {
  popup.classList.add("popup_visible");
  pagina.classList.remove("page");
}

function fecharEditarPopup() {
  editarPopup.classList.remove("popup_visible");
}

function handleSubmitProfileForm(event) {
  event.preventDefault();
  const nome = editarPerfil.querySelector(".popup__input-type-name").value;
  const about = editarPerfil.querySelector(".popup__input-type-text").value;
  closeEditarPopup();
}

abrirPopup.addEventListener("click", abrirEditarPopup);
botaoFecharPerfil.addEventListener("click", fecharEditarPopup);

const form = document.querySelector(".form");
const novaPostagemForm = document.querySelector(".form");
const editarForm = document.querySelector(".form__edit-pro");
const botaoFecharNovaPostagem = document.querySelector(
  ".form__edit-content-button-close"
);

function abrirNovaPostagemForm() {
  editarForm.classList.add("popup_visible");
}

function fecharNovaPostagemForm() {
  editarForm.classList.remove("popup_visible");
}

function handleSubmitProfileForm(event) {
  event.preventDefault();
  const novaPostagem = editarForm.querySelector(".form__input-type-name").value;
  const novaImagem = editarForm.querySelector(".form__input-type-author").value;
}

novaPostagemForm.addEventListener("submit", handleSubmitProfileForm);
botaoFecharNovaPostagem.addEventListener("click", fecharNovaPostagemForm);
