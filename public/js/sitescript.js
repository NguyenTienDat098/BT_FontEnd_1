const navbar = document.querySelector(".navbar");
console.log(navbar);
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (navbar) {
    if (window.scrollY > 60) {
      navbar.classList.add("active");
    } else {
      navbar.classList.remove("active");
    }
  }
});
