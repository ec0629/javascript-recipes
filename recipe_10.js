const assert = require('assert');

// syntax for defining a generator
// generators are responsible for returning iterators
function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}

function* realGenerator(start, end) {
  // the generator always remembers it's the functions
  // state after it yields a value (and control back to the caller)
  for (let i = start; i < end; i++) {
    yield i;
  }
  // if function is exited without yielding a value the object
  // returned will have a done value equal to true
}

let sum = 0;
const iterator = realGenerator(1, 4);
// everytime the next method is invoked it will return 
// an object with a value equal to the subsequent yield
// statement
let next = iterator.next();
while (!next.done) {
  sum += next.value;
  next = iterator.next();
}

assert.equal(sum, 6);