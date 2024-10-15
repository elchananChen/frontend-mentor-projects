const minusSignsEL = document.querySelectorAll(".minus-container");
const signBtnsEl = document.querySelectorAll(".sign-big-wrapper");
signBtnsEl.classlist.add("hidden");
signBtnsEl.forEach((sign) => {
  sign.addEventListener("click", (ev) => {
    let current = "";
    const alt = ev.target.alt;
    console.log(ev.target);
    const wrapperEL = ev.target.closest(".q-wrapper");
    const pEL = wrapperEL.querySelector("p");

    if (alt === "plus-sign") {
      current = "minus";
      console.log(pEL);
      ev.target.alt = "minus-sign";
      //   pEL.claslist.remove("hidden");
    } else if (alt === "minus-sign") {
      current = "plus";
      ev.target.alt = "plus-sign";
      console.log(pEL);
      //   pEL.claslist.add("hidden");
    } else console.error("Error: sign path missing");
    ev.target.src = `./assets/images/icon-${current}.svg`;
  });
});
