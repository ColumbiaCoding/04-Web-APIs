//here are declaring out variables
const todoInput = document.querySelector("#todo-text");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoCountSpan = document.querySelector("#todo-count");

const todos = [];

// TODO: What is the purpose of this function?
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code. elimateing any html that is within that 
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  //the context bring back the text was entered in the html

  // TODO: Describe the functionality of the following `for` loop.

  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
// makes this section listed and a document index. Everything inside the arrary that will prompt that we've completed or not.
    const li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);
// creates a buton that states complete
    const button = document.createElement("button");
    button.textContent = "Complete ✔️";
// provides confirmation that you actually did somehting.
    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function? 
// pulls the toDos from local storage, if there are some sets them in working memory, and calls the renderTodos function

function init() {
  // TODO: What is the purpose of the following line of code?
  const storedTodos = JSON.parse(localStorage.getItem("todos"));
  // TODO: Describe the functionality of the following `if` statement.
// cheks whether there are any todos, and if so, puts them into working memory (state)
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // TODO: Describe the purpose of the following line of code.
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  //stringifies the data into JSOn and sets it into localStorage under the key 'todos'
  localStorage.setItem("todos", JSON.stringify(todos));
}
// TODO: Describe the purpose of the following line of code.
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
// Grand the data the user input and removes any leading/trailing whitespace
  const todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  //
  if (todoText === "") {
    return;
  }
  // TODO: Describe the purpose of the following lines of code.
  // adding the input to the end of the array
  todos.push(todoText);
  todoInput.value = "";

  // TODO: What will happen when the following functions are called?
  // sets todos into local storage and render to page.
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
// 
todoList.addEventListener("click", function (event) {
  const element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  if (element.matches("button") === true) {
    const index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    storeTodos();
    renderTodos();
  }
});

init();
