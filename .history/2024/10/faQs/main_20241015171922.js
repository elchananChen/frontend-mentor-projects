const minusSignsEL = document.querySelectorAll(".minus-container");
const plusBtnsEl = document.querySelectorAll(".plus-container");
plusBtnsEl.ger;
plusBtnsEl.forEach((sign) => {
  sign.addEventListener("click", (ev) => {
    let current = "";
    const alt = ev.target.alt;
    console.log(ev.target);
    const wrapperEL = ev.target.closest(".q-wrapper");
    const p = wrapperEL.querySelector(".plus-container");
    console.log(wrapperEL);

    if (alt === "plus-sign") {
      current = "minus";
      ev.target.alt = "minus-sign";
      console.log(alt);
    } else if (alt === "minus-sign") {
      current = "plus";
      ev.target.alt = "plus-sign";
      console.log(alt);
    } else console.error("Error: sign path missing");
    ev.target.src = `./assets/images/icon-${current}.svg`;
  });
});
