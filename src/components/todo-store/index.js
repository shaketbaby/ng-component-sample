// each item contains { title: "something to be done", completed: false }
let items = [];

export function allTodos() {
  return items;
}

export function addTodo(item) {
  items.push(item);
}
