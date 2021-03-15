const taskForm = document.querySelector(".task-form"),
  taskInput = document.querySelector("#task"),
  taskList = document.querySelector("form div"),
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

function deleteTask(event) {
  const btn = event.target,
    li = btn.parentNode;
  pendingList.removeChild(li);
}

function finishTask(event) {}

function paintTask(currentValue) {
  //input의 value를 가지고, 화면에 보이게 나타냄.
  const li = document.createElement("li"),
    delBtn = document.createElement("button"),
    finishBtn = document.createElement("button"),
    span = document.createElement("span"),
    btnBox = document.createElement("span");

  //pending또는 finished의 ul에 들어갈 요소다.
  //tast를 지울 용도이다.
  delBtn.textContent = "❌";
  delBtn.addEventListener("click", deleteTask);
  finishBtn.textContent = "✅";
  finishBtn.addEventListener("click", finishTask);
  span.textContent = currentValue;
  pendingList.appendChild(li);
  li.appendChild(span);
  li.appendChild(btnBox);
  btnBox.appendChild(delBtn);
  btnBox.appendChild(finishBtn);
}

function handleSubmit(event) {
  //submit 이벤트가 동작했을때 사용된다.
  event.preventDefault();
  //인풋의 기본작동을 막는다.
  const currentValue = taskInput.value;
  paintTask(currentValue);
  taskInput.value = "";
}

function init() {
  taskForm.addEventListener("submit", handleSubmit);
}
init();
