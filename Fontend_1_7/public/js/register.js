const btnSelect = document.querySelector(".btn-select");
const currentValue = document.querySelector(".btn-select span");
const valueSelect = document.querySelector(".value-select");
if (btnSelect && valueSelect) {
  btnSelect.addEventListener("click", () => {
    valueSelect.classList.toggle("active");
    const values = document.querySelectorAll(".value-select-item");
    values.forEach((e, i) => {
      e.addEventListener("click", () => {
        currentValue.innerText = e.innerText;
      });
    });
  });
}
