import {Module, Inject} from "decorators";
import uiRouter from "angular-ui-router";
import {MainPage} from "./main-page";

Module(uiRouter)
Inject("$stateProvider", "$urlRouterProvider")(pages)
export function pages($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state("root", {
      url: "/", controller: MainPage, template: MainPage.template
    });
}
