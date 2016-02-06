import * as store from "./index";

describe("Todo store", function() {

  it("can add new item to the store", function() {
    store.addTodo({title: "test item", completed: false});
    expect(store.allTodos()).toContain({title: "test item", completed: false});
  });

});
