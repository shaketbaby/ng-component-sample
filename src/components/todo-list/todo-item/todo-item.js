import styles from "./todo-item.css";
import {template} from "./todo-item.html";
import {Component, View} from "decorators";

@Component({
  selector : "todo-item",
  properties: {
    item: "=",
    stateChanged: "&onStateChanged"
  }
})
@View({
  styles: styles,
  template: template
})
export class TodoItem {}
