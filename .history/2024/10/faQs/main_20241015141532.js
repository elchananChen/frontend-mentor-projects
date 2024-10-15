const minusSignsEL = document.querySelectorAll(".minus-container");
const plusBtnsEl = document.querySelectorAll(".plus-container");

plusBtnsEl.forEach((sign) => {
  sign.addEventListener("click", (ev) => {
    let current = "";
    console.log(ev.target.contains(""));
    console.log();

    if (
      ev.target.contains(img) ===
      "http://127.0.0.1:5501/2024/10/faQs/assets/images/icon-plus.svg"
    ) {
      current = "minus";
    } else if (ev.target.src === "./assets/images/icon-plus.svg") {
      current = "plus";
    } else console.error("Error: sign path missing");
    ev.target.src = `./assets/images/icon-${current}.svg`;
  });
});
