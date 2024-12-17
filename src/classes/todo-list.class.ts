import { Todo } from "./todo.class";

export class TodoList {
  todos: Todo[] = [];

  constructor() {
    this.getLocalStorage();
  }

  newTodo(todo: Todo) {
    this.todos.push(todo);
    this.addLocalStorage();
  }

  markCompleted(id: string) {
    const todo = this.todos.find((todo) => todo.id === id);
    todo && (todo.completed = !todo.completed);
    this.addLocalStorage();
  }

  removeTodo(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.addLocalStorage();
  }

  removeCompletedTodo() {
    this.todos = this.todos.filter((todo) => !todo.completed);
    this.addLocalStorage();
  }

  addLocalStorage() {
    localStorage.setItem("todo", JSON.stringify(this.todos));
  }

  getLocalStorage() {
    this.todos = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo")!)
      : [];

    this.todos = this.todos.map(Todo.fromJson);
  }

  get getPendingTodos() {
    const pendingTodos = this.todos.filter((todo) => !todo.completed);
    return pendingTodos.length.toString();
  }
}
