const rightArrow = document.querySelector(".arrowRight");
const leftArrow = document.querySelector(".arrowLeft");
const inactive = document.querySelector(".inactive");
const active = document.querySelector(".active");
const slides = document.querySelectorAll(".slide");
let posActiveSlide = 3;

function changeActiveSlides() {
  slides[posActiveSlide].classList.remove("inactive");
  slides[posActiveSlide].classList.add("active");
  slides.forEach((slide, index) => {
    if (index !== posActiveSlide) {
      slide.classList.add("inactive");
      slide.classList.remove("active");
    }
  });
}

const clickOnRight = () => {
  if (posActiveSlide == 3) {
    posActiveSlide = 0;
  } else {
    posActiveSlide++;
  }
  changeActiveSlides(posActiveSlide);
};

const clickOnLeft = () => {
  if (posActiveSlide == 0) {
    posActiveSlide = 3;
  } else {
    posActiveSlide--;
  }
  changeActiveSlides(posActiveSlide);
};

rightArrow.addEventListener("click", clickOnRight);
leftArrow.addEventListener("click", clickOnLeft);
