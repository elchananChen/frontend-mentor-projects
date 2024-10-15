const minusSignsEL = document.querySelectorAll(".minus-container");
const plusBtnsEl = document.querySelectorAll(".plus-container");

plusBtnsEl.forEach((sign) => {
  sign.addEventListener("click", (ev) => {
    let current = "";
    let alt = ev.target.alt;
    if (alt === "plus-sign") {
      current = "minus";
      alt = "minus-sign";
      console.log(alt);
    } else if (alt === "minus-sign") {
      current = "plus";
      alt = "plus-sign";
    } else console.error("Error: sign path missing");
    ev.target.src = `./assets/images/icon-${current}.svg`;
  });
});
