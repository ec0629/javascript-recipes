const assert = require('assert');

class Company {
  constructor() {
    this.employees = [];
  }

  addEmployees(...names) {
    this.employees = this.employees.concat(names);
  }

  // the method defined by Symbol.iterator is responsible for returning
  // the iterator, the iterator itself is responsible for implementing
  // the next method which returns an object with value and done properties
  [Symbol.iterator]() {
    return new ArrayIterator(this.employees);
  }
}

class ArrayIterator {
  constructor(array) {
    this.array = array;
    this.index = 0;
  }

  next() {
    const result = { value: undefined, done: true };
    if (this.index < this.array.length) {
      result.value = this.array[this.index];
      result.done = false;
      this.index += 1;
    }
    return result;
  }
}

let count = 0;
const company = new Company();
company.addEmployees('Tim', 'Sue', 'Joy', 'Tom');

for (let employee of company) {
  count += 1;
}

assert.equal(count, 4);