const assert = require('assert');

class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newValue) {
    if (newValue) {
      this._name = newValue;
    }
  }

  doWork() {
    return 'free';
  }
}

class Employee extends Person {
  constructor(name, title) {
    // super must be called before any references to this
    super(name);
    this._title = title;
  }

  get title() {
    return this._title;
  }

  doWork() {
    return `not ${super.doWork()}, paid`;
  }
}

const p1 = new Person('Yasmin');
const e1 = new Employee('Jeff', 'Developer');

assert.equal(p1.name, 'Yasmin');
assert.equal(e1.name, 'Jeff');
assert.equal(e1.title, 'Developer');
assert.equal(p1.doWork(), 'free');
assert.equal(e1.doWork(), 'not free, paid');