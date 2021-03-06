import {Todo} from "./todo";
import {app} from "decorators";
import * as store from "components/todo-store";

describe("Todo controller", function() {
  let items = [
    {title: "test todo",      completed: true},
    {title: "test completed", completed: false}
  ];

  beforeEach(function() {
    spyOn(store, "allTodos").and.returnValue(items);
  });

  it("initializes itself", function() {
    let todo = new Todo();
    expect(todo.items).toEqual(items);
    expect(todo.remaining).toEqual(1);
  });

  it("updates remaining count when item status changed", function() {
      let todo = new Todo()
      todo.itemStateChanged({completed: true});
      expect(todo.remaining).toEqual(0);
      todo.itemStateChanged({completed: false});
      expect(todo.remaining).toEqual(1);
  })

  it("adds new item to the list when ENTER is pressed", function() {
      spyOn(store, "addTodo");
      let todo = new Todo()
      todo.newItem = "new test item";
      todo.onKeyPressed({keyCode: 13});
      expect(todo.newItem).toEqual("");
      expect(store.addTodo).toHaveBeenCalledWith({title: "new test item", completed: false});
      expect(todo.remaining).toEqual(2);
  })
});

ngDescribe({
  name: "Todo component",
  modules: app.build().name,
  element: `<todo></todo>`,
  tests: function(deps) {
    it("renders todo items", function() {
      let items = Array.from(
        deps.element[0].querySelectorAll("todo-item"),
        (item) => { return item.textContent.trim(); }
      )
      expect(items).toEqual([
        'New UI Architecture discussion',
        'Sample Project',
        'UI tech talk',
        'New HQ FE APP'
      ]);
    });
  }
});
