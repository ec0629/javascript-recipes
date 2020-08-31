const assert = require('assert');

function sum(...rest) {
  return rest.reduce((prev, current) => prev + current, 0);
}

const vals = [1, 2];
const moreVals = [3, 4, 5];
// the spread operator can be used in the following ways
// 1. used to desctructure an array into function arguments
// 2. concatenating objects/arrays into new objects/arrays
// 3. making shallow copies of objects/arrays
assert.equal(sum(...vals, ...moreVals), 15);