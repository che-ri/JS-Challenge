
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const text = document.querySelector("h2");
const superEventHandler = {
  mouseOver: function (event) {
    text.style.color = colors[0];
    text.textContent = "Mouse is here!";
  },
  mouseOut: function (event) {
    text.style.color = colors[1];
    text.textContent = "Mouse is gone!";
  },
  resize: function (event) {
    text.style.color = colors[2];
    text.textContent = "You just resize!";
  },
  contextMenu: function (event) {
    text.style.color = colors[colors.length - 1];
    text.textContent = "That was right click!";
  }
};

text.addEventListener("mouseover", superEventHandler.mouseOver);
text.addEventListener("mouseout", superEventHandler.mouseOut);
window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("contextmenu", superEventHandler.contextMenu);
