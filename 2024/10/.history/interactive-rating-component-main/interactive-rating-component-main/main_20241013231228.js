const LOCAL_STORAGE_KEY = "activeNam";

const submitBtn = document.querySelector(".submit-btn");
const btnsNum = document.querySelectorAll(".num-buttons");

btnsNum.forEach((btn) => {
  btn.addEventListener("click", () => {
    btnsNum.forEach((button) => {
      if (button.textContent === btn.textContent) {
        btn.classList.add("active");
      } else button.classList.remove("active");
    });
  });
});

submitBtn.addEventListener("click", (ev) => {
  const active = document.querySelector(".active");
  if (active !== null) {
    const activContent = active.textContent;
    localStorage.setItem(LOCAL_STORAGE_KEY, activContent);
  } else {
    ev.preventDefault();
    alert("choose first");
  }
});
console.log([1, 2] + [1, 2]);
