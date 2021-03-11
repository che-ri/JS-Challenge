// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const body = document.querySelector("body");
const text = document.querySelector(".text");
const TEXT = "text";

window.addEventListener("resize", function () {
  let width = window.innerWidth;
  text.classList.remove(TEXT);
  if (width > 1000) {
    body.style.backgroundColor = "#fdcb6e";
  } else if (width > 700) {
    body.style.backgroundColor = "#a29bfe";
    text.classList.add(TEXT);
  } else {
    body.style.backgroundColor = "#74b9ff";
  }
});
