var angular = require("./utils").angular;

var modules = [];
var factories = [];

exports.app = {
  build: build,
  addModule: addModule,
  addFactory: addFactory
};
exports.addModule = addModule;
exports.addFactory = addFactory;

function addModule(moduleOrName) {
    modules.push(angular.isString(moduleOrName) ? moduleOrName : moduleOrName.name);
}

function addFactory(factory) {
  factories.push(factory);
}

function build() {
  return factories.reduce(function(m, factory) {
    return factory(m), m;
  }, ngModule());
}

function ngModule() {
  var appName = `ng-module-${new Date().getTime().toString(32)}`;
  return angular.module(appName, modules);
}
