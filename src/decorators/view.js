exports.View = function(config) {
  return function(target) {
    target.template = config.template(config.styles || {})
    return target;
  };
};
