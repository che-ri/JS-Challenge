const taskForm = document.querySelector(".task-form"),
  taskInput = taskForm.querySelector("input"),
  pendingList = document.querySelector(".pending-list"),
  finishedList = document.querySelector(".finished-list");

const TASK_LS = "tasks";
//task들을 담아둘 key
let tasks = [];

function finishedPaintTask(text) {
  //pendingPaintTask와 기능이 같다.
  //finish버튼을 누르면 finished에 task가 나타난다.
  const li = document.createElement("li"),
    delBtn = document.createElement("button"),
    finishBtn = document.createElement("button"),
    span = document.createElement("span"),
    btnBox = document.createElement("span");

  delBtn.textContent = "🙅‍♀️";
  delBtn.addEventListener("click", deleteTaskBtn);
  finishBtn.textContent = "🙆‍♀️";
  finishBtn.addEventListener("click", finishTaskBtn);
  span.textContent = text;
  finishedList.appendChild(li);
  li.appendChild(span);
  li.appendChild(btnBox);
  btnBox.appendChild(delBtn);
  btnBox.appendChild(finishBtn);
}

function deleteTaskBtn(event) {
  //task에 delete버튼을 누르면 삭제
  const btn = event.target,
    span = btn.parentNode,
    li = span.parentNode;
  li.remove();
}

function finishTaskBtn(event) {
  //task에 finish버튼을 누르면 finished로 이동
  const btn = event.target,
    span = btn.parentNode,
    li = span.parentNode,
    currentValue = li.firstChild.innerText;

  li.remove();
  finishedPaintTask(currentValue);
}

function saveTask() {
  //로컬스토리지에 저장하기위해, string으로 변환한다.
  localStorage.setItem(TASK_LS, JSON.stringify(tasks));
}

function pendingPaintTask(text) {
  //input에서 값을 입력하면 먼저 pending에 나타나게 한다.
  const li = document.createElement("li"),
    btnBox = document.createElement("span"),
    newId = tasks.length + 1;

  //tesk를 보여주는 용도
  const span = document.createElement("span");
  span.innerText = text;

  // delBtn 클릭할 때!
  const delBtn = document.createElement("button");
  delBtn.textContent = "‍🙅‍♀️";
  delBtn.addEventListener("click", deleteTaskBtn);

  // finishBtn 클릭할때,
  const finishBtn = document.createElement("button");
  finishBtn.textContent = "🙆‍♀️";
  finishBtn.addEventListener("click", finishTaskBtn);

  pendingList.appendChild(li);
  li.appendChild(span);
  li.appendChild(btnBox);
  btnBox.appendChild(delBtn);
  btnBox.appendChild(finishBtn);

  li.id = newId;
  const taskObj = {
    text,
    //텍스트라는 키에 text(painttodo의 인자)
    id: newId,
    //id라는 키에 newId 변수
  };
  tasks.push(taskObj);
  saveTask();
}

function handleSubmit(event) {
  //인풋의 기본작동을 막는다.
  event.preventDefault();
  const currentValue = taskInput.value;
  pendingPaintTask(currentValue);
  taskInput.value = "";
}

function init() {
  //새로고침하면 로컬스토리지의 tasks를 비운다.
  window.onbeforeunload = function () {
    localStorage.tasks = [];
  };
  taskForm.addEventListener("submit", handleSubmit);
}
init();
