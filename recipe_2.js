const assert = require('assert');

function doWork(name = 'Jeff') {
  return name;
}

// only undefined variables receive the default value
// not falsy values
const result = doWork(null);

assert.equal(result, null);