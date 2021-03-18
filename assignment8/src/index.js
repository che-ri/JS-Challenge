const playBtn = document.querySelector(".play-btn"),
  rangeNum = document.querySelector("#range-num"),
  rangeText = document.querySelector(".range-text"),
  userNum = document.querySelector("#user-num-js"),
  userNumText = document.querySelector(".user-num-text"),
  randomText = document.querySelector(".random-text"),
  resultText = document.querySelector("strong"),
  resultBox = document.querySelector(".game-result");

function printRangeNum() {
  let rangeNumValue = this.value;
  rangeText.innerHTML = rangeNumValue;
}

function printRandomNum() {
  const rangeValue = rangeText.innerHTML;
  const randomValue = Math.floor(Math.random() * `${rangeValue}`);
  randomText.innerHTML = randomValue;
  resultBox.classList.add("showing");
  printResultText();
}

function printUserNum() {
  const userNumValue = this.value;
  userNumText.textContent = userNumValue;
}

function printResultText() {
  if (userNumText.innerHTML === randomText.innerHTML) {
    resultText.innerHTML = "You Win!";
  } else {
    resultText.innerHTML = "You lose!";
  }
}

function init() {
  rangeNum.addEventListener("change", printRangeNum);
  userNum.addEventListener("change", printUserNum);
  playBtn.addEventListener("click", printRandomNum);
}

init();
