exports.angular = global.angular || (require("angular"), global.angular);

exports.toArray = function(arrayLike) {
  return Array.prototype.slice.call(arrayLike);
}
