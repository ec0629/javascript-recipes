const assert = require('assert');

const set = new Set();
assert.strictEqual(set.size, 0);

set.add("somevalue");
assert.strictEqual(set.size, 1);

// in JS when we can use an object as a key but JS
// will use the string representation of the object
// as the key. However, with a Set we can use an
// actual object as the key
const key = {};
set.add(key);
assert.strictEqual(set.has(key), true);

// sets will not add duplicate values to the set
assert.strictEqual(set.size, 2);
set.add(key);
assert.strictEqual(set.size, 2);

// Sets can be iterated through using the standard JS iterable methods
// 1. forEach
// 2. for...of
// 3. set.entries() which returns an iterator