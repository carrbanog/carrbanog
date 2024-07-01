const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
let todos = []; // 'let'으로 변경하여 재할당 가능하게 함
const TODOS_KEY = "todos";
const savedToDos = localStorage.getItem(TODOS_KEY);

function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text:newTodo,
    id: Date.now()
  }
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  // console.log(newTodoObj.id);
  saveToDos();
}

function paintTodo(newTodo){
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
  span.innerText = newTodo.text;
  button.innerText = "X";
  button.addEventListener("click", deleteTodo);
}

function deleteTodo(event){
  const li = event.target.parentElement;
  li.remove();
  console.log(li);
  console.log(li.id);
  todos = todos.filter((toDo) => toDo.id !== parseInt(li.id))
  saveToDos();
}

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  todos = parsedToDos; // localStorage에서 불러온 값으로 초기화
  parsedToDos.forEach(paintTodo);
}

todoForm.addEventListener("submit", handleToDoSubmit);
