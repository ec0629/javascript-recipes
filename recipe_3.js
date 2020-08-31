const assert = require('assert');

// rest operator is always the last parameter in either
// 1. a function signature
// 2. an array/object destructuring expression
function sum(...rest) {
  return rest.reduce((prev, current) => prev + current, 0);
}

assert.equal(sum(1, 2, 3, 4, 5), 15);