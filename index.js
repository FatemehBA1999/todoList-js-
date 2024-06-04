// form :=> todoinput , create {id , createAt , title , isCompleted}
// const todos = []; push(todo)
const todoInput = document.querySelector(".todo-input");
const todoForm = document.querySelector(".todo-form");
const todoList = document.querySelector(".todolist");
const todos = [];
todoForm.addEventListener("submit", addNewTodo); //=>submit:به ما این کمک را میکند که اگر اینتر را هم بزنیم یا دکمه سابمیت باتن را هم بزنیم فرم ما  سابمیت میشود
function addNewTodo(e) {
  e.preventDefault(); //برای اینکه فرم ما رفرش نشود
  if (!todoInput.value) return null;
  const newTodo = {
    id: Date.now(),
    createAt: new Date().toISOString(),
    title: todoInput.value,
    isCompleted: false,
  };
  todos.push(newTodo);
  //create todos on DOM
  let result = "";
  todos.forEach((todo) => {
    result += `<li class="todo">
    <p class="todo__title ${todo.isCompleted && "compleleted"}">${
      todo.title
    }</p>
      <span class="todo__createAt">${new Date(
        todo.createdAt
      ).toLocaleDateString("fa-Ir")}</span>
      <button class="todo__check" data-todo-id=${
        todo.id
      }><i class="fas fa-check-square"></i></button>
      <button class="todo__edit" data-todo-id=${
        todo.id
      }><i class="fas fa-edit"></i></button>
      <button class="todo__remove" data-todo-id=${
        todo.id
      }><i class="fa fa-trash"></i></button>
    </li>`;
  });
  todoList.innerHTML = result;
  todoInput.value = "";
}
