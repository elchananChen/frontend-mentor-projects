const minusSignsEL = document.querySelectorAll(".minus-container");
const plusBtnsEl = document.querySelectorAll(".plus-container");

plusBtnsEl.forEach((sign) => {
  sign.addEventListener("click", (ev) => {
    let current = "";
    // console.log(ev.target.contains(""));
    console.log(ev.target.alt);

    if (ev.target.alt === "plus-sign") {
      current = "minus";
    } else if (ev.target.src === "minus-sign") {
      current = "plus";
    } else console.error("Error: sign path missing");
    ev.target.src = `./assets/images/icon-${current}.svg`;
  });
});
