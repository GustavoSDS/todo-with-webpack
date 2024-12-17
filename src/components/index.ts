import { $ } from "../libs/selectorHTMLElement";
import { Todo } from "../classes/todo.class";
import { todoList } from "../index";

const $divTodoList = $("#todo-list") as HTMLUListElement;
const $inputTodo = $("#new-todo") as HTMLInputElement;
const $btnRemoveTodos = $(".clear-completed") as HTMLButtonElement;
const $ulFilters = $(".filters") as HTMLUListElement;
export const $todoCount = $(".todo-count strong") as HTMLSpanElement;

export const createTodoHtml = (todo: Todo) => {
  const htmlTodo = `
    <li class="${todo.completed ? "completed" : ""}" data-id="${todo.id}">
        <div class="view">
          <input class="toggle" type="checkbox" ${
            todo.completed ? "checked" : ""
          }>
          <label>${todo.title}</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>
  `;

  return $divTodoList?.insertAdjacentHTML("beforeend", htmlTodo);
};

// Events
$inputTodo?.addEventListener("keyup", (event) => {
  const target = event.target as HTMLInputElement;

  if (
    (event.key === "Enter" || event.keyCode === 13) &&
    target.value.length > 5
  ) {
    const newTodo = new Todo(target.value);
    todoList.newTodo(newTodo);
    createTodoHtml(newTodo);
    target.value = "";
  }
});

$divTodoList?.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  const nameElement = target.localName;
  const todoElement = target.parentElement?.parentElement;

  const todoId = todoElement?.getAttribute("data-id");
  if (nameElement.includes("input") && todoId) {
    todoList.markCompleted(todoId);
    todoElement?.classList.toggle("completed");
    $todoCount.textContent = todoList.getPendingTodos;
  } else if (nameElement.includes("button") && todoId) {
    todoList.removeTodo(todoId);
    todoElement?.remove();
  }
});

$btnRemoveTodos?.addEventListener("click", () => {
  todoList.removeCompletedTodo();
  $divTodoList?.querySelectorAll(".completed").forEach((todo) => {
    todo.remove();
  });
});

$ulFilters?.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  $ulFilters?.querySelectorAll("a").forEach((element) => {
    element.classList.remove("selected");
  });
  target.classList.add("selected");

  const children = Array.from($divTodoList?.children || []) as HTMLElement[];
  for (const element of children) {
    element.classList.remove("hidden");
    const completed = element.classList.contains("completed");
    switch (target.textContent) {
      case "Pendientes":
        if (completed) {
          element.classList.add("hidden");
        }
        break;
      case "Completados":
        if (!completed) {
          element.classList.add("hidden");
        }
        break;
    }
  }
});
