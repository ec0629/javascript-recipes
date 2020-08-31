const assert = require('assert');

function retVals() {
    return [1, 3, 2];
}

let = [, x, y] = retVals();
assert.equal(x, 3);
assert.equal(y, 2);