// <⚠️ DONT DELETE THIS ⚠️>
// <⚠️ /DONT DELETE THIS ⚠️>

let select = document.querySelector("select");

function handleSelectCountry() {
  const h1 = document.querySelector("h1");
  let value = select.options[select.selectedIndex].value;
  window.localStorage.setItem("country", value);

  if (value === "Korea") {
    h1.textContent = "안녕하세요";
  } else if (value === "Greece") {
    h1.textContent = "γεια";
  } else if (value === "Turkey") {
    h1.textContent = "Selam";
  } else if (value === "Finland") {
    h1.textContent = "Hei";
  } else {
    h1.textcontent = "Where are you from?";
  }
}
select.addEventListener("change", handleSelectCountry);
