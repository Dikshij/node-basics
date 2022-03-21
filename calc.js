function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

exports.mul = function multiply(a, b) {
  return a * b;
};

//way 1
//module.exports = add;

//way2

module.exports.add = add;
exports.sub = sub;
