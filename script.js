const slides = document.querySelectorAll(".slide");

slides.forEach((oneSlide) => {
  oneSlide.addEventListener("click", () => {
    // Delete active calss
    deleteActiveClass();
    oneSlide.classList.add("active");
  });
});

function deleteActiveClass() {
  slides.forEach((oneSlide) => {
    oneSlide.classList.remove("active");
  });
}
