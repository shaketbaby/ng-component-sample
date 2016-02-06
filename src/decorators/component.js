var angular = require("./utils").angular;
var app = require("./app");

exports.Component = function(config) {
  return function(target) {
    app.addFactory(function(ngModule) {
      var result = parseSelector(config.selector);
      var name = result.name;
      ngModule.directive(name, function() {
        var ddo = {
          scope: {},
          controller: target,
          controllerAs: name,
          restrict: result.restrict,
          bindToController: config.properties || true
        };
        return angular.extend(ddo, target, config);
      });
    });
    return target;
  };
};

function parseSelector(selector) {
  var result = /\[(.+)\]/.exec(selector);
  return {
    restrict: result ? "A" : "E",
    name: normalize(result ? result[1] : selector)
  };
}

function normalize(name) {
  var parts = name.split("-");
  return parts[0] + parts.slice(1).map(capitalize).join("");
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.substr(1);
}
