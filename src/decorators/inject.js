var utils = require("./utils");

exports.Inject = function() {
  var dependencies = utils.toArray(arguments);
  return function(target) {
    target.$inject = dependencies;
    return target;
  };
}
