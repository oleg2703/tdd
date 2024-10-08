const TodoList = require('./todo');

describe('TodoList', () => {
  let todoList;

  beforeEach(() => {
    todoList = new TodoList();
  });

  test('should add a new task to the list', () => {
    todoList.addTask('Learn TDD');
    expect(todoList.getTasks()).toEqual([{ id: 1, title: 'Learn TDD', completed: false }]);
  });

  test('should not add a task with an empty title', () => {
    expect(() => todoList.addTask('')).toThrow('Task title cannot be empty');
  });

  test('should mark a task as completed', () => {
    todoList.addTask('Learn TDD');
    todoList.completeTask(1);
    expect(todoList.getTasks()).toEqual([{ id: 1, title: 'Learn TDD', completed: true }]);
  });

  test('should delete a task from the list', () => {
    todoList.addTask('Learn TDD');
    todoList.deleteTask(1);
    expect(todoList.getTasks()).toEqual([]);
  });

  test('should not complete a non-existent task', () => {
    expect(() => todoList.completeTask(99)).toThrow('Task not found');
  });
});
