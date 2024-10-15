const minusSignsEL = document.querySelectorAll(".minus-container");
const plusBtnsEl = document.querySelectorAll(".plus-container");

plusBtnsEl.forEach((sign) => {
  sign.addEventListener("click", (ev) => {
    let current = "";
    if (ev.target.src === "../assets/images/icon-minus.svg") {
      current = "minus";
    } else if (ev.target.src === "./assets/images/icon-plus.svg") {
      current = "plus";
    } else console.error("Error sign path missing");
    ev.target.src(`./assets/images/icon-${current}.svg`);
  });
});
