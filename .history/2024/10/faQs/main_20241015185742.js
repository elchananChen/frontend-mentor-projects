const minusSignsEL = document.querySelectorAll(".minus-container");
const BtnsEl = document.querySelectorAll(".sign-big-wrapper");
BtnsEl.ger;
BtnsEl.forEach((sign) => {
  sign.addEventListener("click", (ev) => {
    let current = "";
    const alt = ev.target.alt;
    console.log(ev.target);
    const wrapperEL = ev.target.closest(".q-wrapper");
    const p = wrapperEL.querySelector(".p");
    console.log(p);

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
