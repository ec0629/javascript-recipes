const assert = require('assert');

function* range(start, end) {
  let current = start;
  while (current <= end) {
    const delta = yield current;
    current += delta || 1;
  }
}

const result = [];
const iterator = range(1, 10);
// the first call to next does not allow for params
// delta value in the function above is set on the
// subsequent call to next!!!
let next = iterator.next();
while (!next.done) {
  result.push(next.value);
  next = iterator.next(2);
}

assert.deepEqual(result, [1, 3, 5, 7, 9])