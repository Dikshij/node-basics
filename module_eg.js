var calc = require('./calc.js');
//way 1
//result = calc(3,4)
//way 2
result = calc.add(3, 4);
result1 = calc.sub(3, 4);
result2 = calc.mul(3, 4);

console.log(typeof result);

console.log('sun is' + result);
console.log('difference is' + result1);
console.log('multiplication is' + result2);
