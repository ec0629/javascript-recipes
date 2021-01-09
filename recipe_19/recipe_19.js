const assert = require("assert");
const Person = require("./Person");

const person = new Person(16);

person.privateAge = 18;
assert.strictEqual(person.howOldAreYou(), "I am 16");
