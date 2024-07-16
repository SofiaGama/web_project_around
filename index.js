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

  if (popupElement == "pp") {
    let nameInput, jobInput, proName, proText;

    nameInput = document.getElementById("name");
    jobInput = document.getElementById("text");

    proName = document.getElementById("proname");
    proText = document.getElementById("protext");

    nameInput.value = proName.innerHTML;
    jobInput.value = proText.innerHTML;
  }

  if (popupElement == "card") {
    let nameCInput, jobCInput;

    nameCInput = document.getElementById("namec");
    jobCInput = document.getElementById("textc");

    nameCInput.value = "";
    jobCInput.value = "";
  }

  // Adiciona um evento para detectar clique fora do popup
  setTimeout(() => {
    document.addEventListener("click", handleClickOutsidePopup);
  }, 0);
}

function closePopup(popupElement) {
  console.log("oi");
  const formElement = document.getElementById(popupElement);
  document.getElementById("pagina").classList.remove("page-visible");

  nameInput = document.getElementById("name");
  jobInput = document.getElementById("text");

  nameInput.value = "";
  jobInput.value = "";

  formElement.style.display = "";

  //Remove o evento de clique fora do popup quando o popup é fechado
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

/*
function handleClickOutsideImage() {
  document.getElementById("imageview");
}*/

function handleClickOutsideImageClose(event) {
  const popup = document.getElementById("imageview");
  if (popup.style.display === "block") {
    console.log("ok");
  } else if (!popup.contains(event.target)) {
    console.log("yes");
  } else {
    closePopup("imageview");
  }
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

  document.addEventListener("click", handleClickOutsideImageClose);
}

function closeImageView() {
  console.log("fechar");
  const imageviewdiv = document.getElementById("imageview");
  document.getElementById("pagina").classList.remove("page-visible");
  imageviewdiv.style.display = "none";

  document.removeEventListener("click", handleClickOutsideImageClose);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closePopup("pp");
    closePopup("card");
    closeImageView();
  }
});

document.addEventListener("click", function (event) {
  if (event === "click") {
    closeImageView();
  }
});
