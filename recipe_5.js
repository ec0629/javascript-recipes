const assert = require('assert');

// the first parameter received is an array of strings
// that represent the template. Each piece is the length 
// of the string before/after/between the next value.
// i.e. ['', ' + ', ' IS ', '']
// The remaining function parameters are the values to be
// inserted into the string which we are collecting into
// an array using the rest operator
function upper(strings, ...values) {
  let result = "";
  strings.forEach((string, i) => {
    result += string;
    if (i < values.length) {
      result += values[i];
    }
  });
  return result.toUpperCase();
}

const x = 1;
const y = 3;
const result = upper`${x} + ${y} is ${x + y}`;

assert.equal(result, '1 + 3 IS 4');