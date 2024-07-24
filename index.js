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

initialCards.forEach((element) => {
  cardCreate(element);
});

function handleFormNewPbSubmit(evt) {
  evt.preventDefault();

  const nameInput = document.getElementById("namec");
  const linkInput = document.getElementById("textc");

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

  const nameInput = document.getElementById("name");
  const jobInput = document.getElementById("text");

  const proName = document.getElementById("proname");
  const proText = document.getElementById("protext");

  proName.innerHTML = nameInput.value;
  proText.innerHTML = jobInput.value;

  closePopup("pp");
}

function openPopup(popupElement) {
  const formElement = document.getElementById(popupElement);
  document.getElementById("pagina").classList.add("page-visible");

  formElement.style.display = "flex";

  if (popupElement == "pp") {
    const nameInput = document.getElementById("name");
    const jobInput = document.getElementById("text");

    const proName = document.getElementById("proname");
    const proText = document.getElementById("protext");

    nameInput.value = proName.innerHTML;
    jobInput.value = proText.innerHTML;
  }

  if (popupElement == "card") {
    const nameCInput = document.getElementById("namec");
    const jobCInput = document.getElementById("textc");

    nameCInput.value = "";
    jobCInput.value = "";
  }

  setTimeout(() => {
    document.addEventListener("click", handleClickOutsidePopup);
  }, 0);
}

function closePopup(popupElement) {
  const formElement = document.getElementById(popupElement);
  document.getElementById("pagina").classList.remove("page-visible");

  nameInput = document.getElementById("name");
  jobInput = document.getElementById("text");

  nameInput.value = "";
  jobInput.value = "";

  formElement.style.display = "";

  document.removeEventListener("click", handleClickOutsidePopup);
}

function handleClickOutsidePopup(event) {
  const popups = ["pp", "card"];
  popups.forEach((popupId) => {
    const popup = document.getElementById(popupId);
    if (popup.style.display === "flex" && !popup.contains(event.target)) {
      closePopup(popupId);
    }
  });
}

function handleClickOutsideImageClose(event) {
  closeImageView();
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
  const imageElement = divCard.querySelector(".grid__card-image");
  const btn = divCard.querySelector(".grid__card-button-trash");
  const butn = divCard.querySelector(".grid__card-button-like");
  imageElement.src = card.link;
  imageElement.alt = card.name;
  divCard.querySelector(".grid__card-legend").innerHTML = card.name;
  btn.addEventListener("click", function () {
    remove(btn);
  });
  imageElement.addEventListener("click", function () {
    ViewImage(imageElement);
  });
  butn.addEventListener("click", function () {
    curtir(butn);
  });
  document.getElementById("sectionCards").prepend(divCard);
}

function ViewImage(image) {
  const imageviewdiv = document.querySelector(".view");
  document.getElementById("pagina").classList.add("page-visible");
  imageviewdiv.classList.remove("view-close");
  imageviewdiv.querySelector(".view__image").src = image.src;
  imageviewdiv.querySelector(".view__title").innerHTML = image.alt;

  setTimeout(() => {
    document.addEventListener("click", handleClickOutsideImageClose);
  }, 0);
}

function closeImageView() {
  const imageviewdiv = document.querySelector(".view");
  document.getElementById("pagina").classList.remove("page-visible");
  imageviewdiv.classList.add("view-close");
  document.removeEventListener("click", handleClickOutsideImageClose);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closePopup("pp");
    closePopup("card");
    closeImageView();
  }
});

document
  .querySelector(".profile__button-form")
  .addEventListener("click", function () {
    openPopup("pp");
  });

document
  .querySelector(".profile__button-fill")
  .addEventListener("click", function () {
    openPopup("card");
  });

document
  .querySelector(".popup__edit-div-button-close")
  .addEventListener("click", function () {
    closePopup("pp");
  });

document
  .querySelector(".form__edit-content-button-close")
  .addEventListener("click", function () {
    closePopup("card");
  });

document.querySelector(".view__button").addEventListener("click", function () {
  closePopup("imageview");
});
