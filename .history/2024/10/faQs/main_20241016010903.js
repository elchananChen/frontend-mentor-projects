const minusSignsEL = document.querySelectorAll(".minus-container");
const signBtnsEl = document.querySelectorAll(".sign-big-wrapper");
const QHeadsEL = document.querySelectorAll(".q-head");
console.log(QHeadsEL);

QHeadsEL.forEach((Q) => {
  Q.addEventListener("click", (ev) => {
    let current = "";
    const alt = ev.target.alt;
    console.log(ev.target);

    console.log(ev.target.closest("img").alt);
    const wrapperEL = ev.target.closest(".q-wrapper");
    const pEL = wrapperEL.querySelector("p");
    if (alt === "plus-sign") {
      current = "minus";
      ev.target.alt = "minus-sign";
      pEL.classList.remove("hidden");
    } else if (alt === "minus-sign") {
      current = "plus";
      ev.target.alt = "plus-sign";
      pEL.classList.add("hidden");
    } else console.error("Error: sign path missing");
    ev.target.src = `./assets/images/icon-${current}.svg`;
  });
});
