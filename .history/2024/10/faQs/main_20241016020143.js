const QHeadsEL = document.querySelectorAll(".q-head");

QHeadsEL.forEach((Q) => {
  Q.addEventListener("click", (ev) => {
    let current = "";
    const wrapperEL = Q.closest(".q-wrapper");
    const pEL = wrapperEL.querySelector("p");
    const currentImgEL = Q.querySelector("img");
    if (currentImgEL.alt === "plus-sign") {
      current = "minus";
      currentImgEL.alt = "minus-sign";
      pEL.classList.remove("hidden");
    } else if (currentImgEL.alt === "minus-sign") {
      current = "plus";
      currentImgEL.alt = "plus-sign";
      pEL.classList.add("hidden");
    } else console.error("Error: sign path missing");
    currentImgEL.src = `./assets/images/icon-${current}.svg`;
  });
});
