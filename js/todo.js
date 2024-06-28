const toDoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

const toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  // console.log(li);
  li.remove();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  span.innerText = newTodo;
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function hadnleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  toDos.push(newTodo);
  paintTodo(newTodo);
  saveToDos();
}

function sayHello(item) {
  console.log(item);
}

toDoForm.addEventListener("submit", hadnleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if (saveToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  // console.log(parsedToDos);
  parsedToDos.forEach(paintTodo);
}
