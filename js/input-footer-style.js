const input = document.querySelector(".form-footer__input");

input.addEventListener("focus", () => {
  input.style.color = "black";
  input.style.backgroundColor = "white";
  input.style.border = "3px solid #2196F3";
});

input.addEventListener("blur", () => {
  input.style.color = "white";
  input.style.backgroundColor = "transparent";
  input.style.border = "1px solid rgba(255, 255, 255, 0.3)";
});
