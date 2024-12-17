import { TodoList } from "./classes/todo-list.class";
import { $todoCount, createTodoHtml } from "./components/index";
import "./css/styles.css";

export const todoList = new TodoList(); // Crea la clase

todoList.todos.forEach(createTodoHtml); // Crea todos los elementos HTML
$todoCount.textContent = todoList.getPendingTodos;
