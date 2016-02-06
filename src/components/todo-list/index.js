import {Component, View} from "decorators";
import {todoItem} from "./todo-item";
import {template} from "./todo-list.html"

@Component({
  selector: "todo-list",
  properties: {
    items: "=",
    itemStateChanged: "&onItemStateChanged"
  }
})
@View({
  template: template,
  directives: [todoItem]
})
export class TodoList {}
