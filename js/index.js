// modal back
const link = document.querySelector(".contacts-button");
const popup = document.querySelector(".modal-back");

if (popup) {
  const close = document.querySelector(".modal-close");
  const form = document.querySelector(".sender-form");
  const senderName = form.querySelector("[name=name]");
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    senderName.focus();
  });
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });
}

// modal map
const mapImage = document.querySelector(".map");
const mapPopup = document.querySelector(".modal-map");

if(mapPopup) {
  const mapClose = mapPopup.querySelector(".modal-close");
  mapImage.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });
}

// modal buy-btn
const buyBatons = document.querySelectorAll(".buy-btn");
const cartPopup = document.querySelector(".modal-cart");

if(cartPopup) {
  const modalCartClose = cartPopup.querySelector(".modal-close");
  const buttonToShopping = cartPopup.querySelector(".button-to-shopping")
  for (let i = 0; i < buyBatons.length; i++) {
    buyBatons[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      cartPopup.classList.add("modal-show");
    });
  }

  modalCartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show");
  });

  buttonToShopping.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show");
  });
}

// close modal windows by key esc
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup && popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
    if (mapPopup && mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
    if (cartPopup && cartPopup.classList.contains("modal-show")) {
      cartPopup.classList.remove("modal-show");
    }
  }
});
