const taskForm = document.querySelector(".task-form"),
  taskInput = taskForm.querySelector("input"),
  pendingList = document.querySelector(".pending-list"),
  finishedList = document.querySelector(".finished-list");

const TASK_LS = "tasks";
//task들을 담아둘 key
let tasks = [];

// taskInput.addEventListener("change", function (event) {
//   event.preventDefault();
//   window.localStorage.setItem(TASK_LS, taskInput.value);
//   taskInput.value = "";
// });

function finishedPaintTask(currentValue) {
  //pendingPaintTask와 기능이 같다.
  const li = document.createElement("li"),
    delBtn = document.createElement("button"),
    finishBtn = document.createElement("button"),
    span = document.createElement("span"),
    btnBox = document.createElement("span");

  delBtn.textContent = "❌";
  delBtn.addEventListener("click", deleteTaskBtn);
  finishBtn.textContent = "✅";
  finishBtn.addEventListener("click", finishTaskBtn);
  span.textContent = currentValue;
  finishedList.appendChild(li);
  li.appendChild(span);
  li.appendChild(btnBox);
  btnBox.appendChild(delBtn);
  btnBox.appendChild(finishBtn);
}

function deleteTaskBtn(event) {
  const btn = event.target,
    span = btn.parentNode,
    li = span.parentNode;
  li.remove();
}

function finishTaskBtn(event) {
  const btn = event.target,
    span = btn.parentNode,
    li = span.parentNode,
    currentValue = li.firstChild.innerText;
  li.remove();
  finishedPaintTask(currentValue);
}

function pendingPaintTask(currentValue) {
  //input의 value를 가지고, 화면에 보이게 나타냄.
  const li = document.createElement("li"),
    btnBox = document.createElement("span");

  //tesk를 보여주는 용도
  const span = document.createElement("span");
  span.innerText = currentValue;

  // delBtn 클릭할 때!
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteTaskBtn);

  // finishBtn 클릭할때,
  const finishBtn = document.createElement("button");
  finishBtn.innerText = "✅";
  finishBtn.addEventListener("click", finishTaskBtn);

  pendingList.appendChild(li);
  li.appendChild(span);
  li.appendChild(btnBox);
  btnBox.appendChild(delBtn);
  btnBox.appendChild(finishBtn);
}

function handleSubmit(event) {
  //인풋의 기본작동을 막는다.
  event.preventDefault();
  const currentValue = taskInput.value;
  pendingPaintTask(currentValue);
  taskInput.value = "";
}

function init() {
  taskForm.addEventListener("submit", handleSubmit);
}
init();
