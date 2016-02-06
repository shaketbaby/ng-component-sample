import {View} from "decorators";
import {template} from "./main-page.html";
import {Todo} from "components/todo";

@View({
  template: template,
  directives: [ Todo ]
})
export class MainPage {
}
