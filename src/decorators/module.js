var angular = require("./utils").angular;
var app = require("./app");

exports.Module = function(ngModule, config) {
  app.addModule(ngModule);
  config && app.addFactory(function(ngModule) {
    ngModule.config(config);
  });
  return angular.identity;
};
