const backdrop = document.querySelector(".backdrop");
const cardImage = document.querySelectorAll(".card-image");
const overlayImage = document.querySelectorAll(".overlay");
const closeIcon = document.querySelectorAll(".close-icon");

for (let i = 0; i < cardImage.length; i++) {
  let openImageOverlay = function () {
    backdrop.classList.remove("visually-hidden");
    overlayImage[i].classList.remove("hidden");
  };

  let closeImageOverlay = function () {
    backdrop.classList.add("visually-hidden");
    overlayImage[i].classList.add("hidden");
  };
  cardImage[i].addEventListener("click", openImageOverlay);

  closeIcon[i].addEventListener("click", closeImageOverlay);

  backdrop.addEventListener("click", closeImageOverlay);
}
