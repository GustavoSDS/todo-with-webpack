export class Todo {
  static fromJson(obj: object) {
    const { title, id, completed, createdAt } = obj as Todo;
    const tempTodo = new Todo(title);
    tempTodo.id = id;
    tempTodo.completed = completed;
    tempTodo.createdAt = createdAt;
    return tempTodo;
  }

  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;

  constructor(title: string) {
    this.title = title;
    this.id = crypto.randomUUID();
    this.completed = false;
    this.createdAt = new Date();
  }

  imprimirClase() {
    console.log(`${this.title} - ${this.id}`);
  }
}
