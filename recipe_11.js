const assert = require('assert');

class Company {
  constructor() {
    this.employees = [];
  }

  addEmployees(...names) {
    this.employees = this.employees.concat(names);
  }

  // asterisk marks this as a generator method
  *[Symbol.iterator]() {
    for (let e of this.employees) {
      yield e;
    }
  }
}

let count = 0;
const company = new Company();
company.addEmployees('Tim', 'Sue', 'Joy', 'Tom');

for (let employee of company) {
  count += 1;
}

assert.equal(count, 4);