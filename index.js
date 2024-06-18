const formElement = document.querySelector("#ppep");
const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

formElement.addEventListener("submit", handleProfileFormSubmit);
document
  .getElementById("formnewpb")
  .addEventListener("submit", handleFormNewPbSubmit);

function loadForm(form) {
  initialCards.forEach((element) => {
    cardCreate(element);
  });
}

function handleFormNewPbSubmit(evt) {
  evt.preventDefault();

  let nameInput, linkInput;

  nameInput = document.getElementById("namec");
  linkInput = document.getElementById("textc");

  const card = { name: nameInput.value, link: linkInput.value };
  cardCreate(card);

  nameInput.value = "";
  linkInput.value = "";

  closePopup("card");
}

function closePopup(popupElement) {
  const formElement = document.getElementById(popupElement);
  document.getElementById("pagina").classList.remove("page-visible");

  nameInput = document.getElementById("name");
  jobInput = document.getElementById("text");

  nameInput.value = "";
  jobInput.value = "";

  formElement.style.display = "";
}

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
  const formElement = document.getElementById(popupElement);
  document.getElementById("pagina").classList.add("page-visible");

  formElement.style.display = "flex";
}

function closePopup(popupElement) {
  const formElement = document.getElementById(popupElement);
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

function remove(btn) {
  const divParent = btn.closest("div .grid__card");
  divParent.remove();
}

function cardCreate(card) {
  const template = document.querySelector("#div-cards").content;
  const divCard = template.cloneNode(true);
  divCard.querySelector(".grid__card-image").src = card.link;
  divCard.querySelector(".grid__card-image").alt = card.name;
  divCard.querySelector(".grid__card-legend").innerHTML = card.name;
  document.getElementById("sectionCards").prepend(divCard);
}

function ViewImage(img) {
  const image = img;
  const imageviewdiv = document.getElementById("imageview");
  document.getElementById("pagina").classList.add("page-visible");
  imageviewdiv.style.left =
    window.innerWidth / 2 - imageviewdiv.offsetWidth / 2;
  imageviewdiv.style.top =
    window.offsetHeight / 2 - imageviewdiv.offsetHeight / 2;
  imageviewdiv.style.display = "block";
  imageviewdiv.querySelector(".view__image").src = image.src;
  imageviewdiv.querySelector(".view__title").innerHTML = image.alt;
}
