const assert = require('assert');

// hexademical literal - hexadecimal value preceeded with 0x
const hexd = 0xa;

// octal literal - number with a leading 0 (pre-ES6)
const octal = 071;
assert.strictEqual(octal, 57);

// in ES6 we can now precede the number with a 0o
const es6Octal = 0o71;
assert.strictEqual(es6Octal, 57);

// binary numbers
const bin = 0b1101;
assert.strictEqual(bin, 13);

// in ES6 parseInt and parseFloat can now be reference as static members
// on the Number object
assert.strictEqual(Number.parseInt('3'), 3);