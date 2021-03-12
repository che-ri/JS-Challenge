

// You're gonna need this
function getTime() {
  // Don't delete this.
  setInterval(() => {
    const xmasDay = new Date("2021-12-24:00:00:00+0900").getTime();
    const today = new Date().getTime();
    const gap = xmasDay - today;
    const day = Math.ceil(gap / (1000 * 60 * 60 * 24));
    const hour = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const min = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
    const sec = Math.ceil((gap % (1000 * 60)) / 1000);
    document.querySelector(
      "p"
    ).textContent = `${day}일 ${hour}시간 ${min}분 ${sec}초`;
  }, 1000);
}

function init() {
  getTime();
}
init();
