class TodoList {
    constructor() {
      this.tasks = [];
      this.currentId = 1;
    }
  
    // Додавання нового завдання
    addTask(title) {
      if (!title) {
        throw new Error('Task title cannot be empty');
      }
      this.tasks.push({ id: this.currentId++, title, completed: false });
    }
  
    // Отримання всіх завдань
    getTasks() {
      return this.tasks;
    }
  
    // Позначення завдання як виконаного
    completeTask(id) {
      const task = this.tasks.find((task) => task.id === id);
      if (!task) {
        throw new Error('Task not found');
      }
      task.completed = true;
    }
  
    // Видалення завдання
    deleteTask(id) {
      const index = this.tasks.findIndex((task) => task.id === id);
      if (index === -1) {
        throw new Error('Task not found');
      }
      this.tasks.splice(index, 1);
    }
  }
  
  module.exports = TodoList;
  