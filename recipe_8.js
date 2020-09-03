const assert = require('assert');

let sum = 0;
const numbers = [1, 2, 3, 4];

// for loops
sum = 0;
for (let i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
}
assert.equal(sum, 10);

// for-in loop
sum = 0;
for (let i in numbers) {
  sum += numbers[i];
}
assert.equal(sum, 10);

// iterator - low level
sum = 0;
// values is a special function that implements the Symbol.iterator
// therefore values == numbers[Symbol.iterator]
const iterator = numbers.values();
let next = iterator.next();
while (!next.done) {
  sum += next.value;
  next = iterator.next();
}
assert.equal(sum, 10);

// for-of loop - utlizes the iterator api
// any data structure that implements the iterator api
// can be enumerated using the for-of loop
sum = 0;
for (let n of numbers) {
  sum += n;
}
assert.equal(sum, 10);