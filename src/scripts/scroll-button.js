document.addEventListener("DOMContentLoaded", () => {
  const buttonDown = document.getElementById("button-down");
  if (buttonDown) {
    buttonDown.addEventListener("click", (e) => {
      e.preventDefault();
      const productosSection = document.querySelector("#productos");
      if (productosSection) {
        productosSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});
