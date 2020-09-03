const assert = require('assert');

class Company {
  constructor() {
    this.employees = [];
  }

  addEmployees(...names) {
    this.employees = this.employees.concat(names);
  }

  *[Symbol.iterator]() {
    for (let e of this.employees) {
      yield e;
    }
  }
}

function* filter(items, predicate) {
  for (let item of items) {
    if (predicate(item)) {
      yield item;
    }
  }
}

function* take(items, number) {
  let count = 0;
  if (number < 1) return;
  for (let item of items) {
    yield item;
    count += 1;
    if (count >= number) {
      return; // returning undefined set done property equal to true
    }
  }
}

let count = 0;
const company = new Company();
company.addEmployees('Tim', 'Sue', 'Joy', 'Tom');

// first letter of name string is capital T
for (let employee of take(filter(company, (e) => e[0] === 'T'), 1)) {
  count += 1;
}

assert.equal(count, 1);