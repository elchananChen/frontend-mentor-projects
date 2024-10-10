const LOCAL_STORAGE_KEY = "activeNam";

const resulte = localStorage.getItem(LOCAL_STORAGE_KEY) || "none";
const resulteEl = document.querySelector(".resulte");
resulteEl.textContent = resulte;
