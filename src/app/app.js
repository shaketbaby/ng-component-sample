import "./app.css";
import {app} from "decorators";
import {pages} from "./pages";

angular.bootstrap(document, [
  app.build()
    .config(["$locationProvider", ($locationProvider) => {
      $locationProvider.html5Mode(true);
    }])
    .config(pages)
    .name
]);
