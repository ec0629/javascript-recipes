const assert = require('assert');

class Employee {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  doWork() {
    return 'complete!';
  }

  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  }

  set fullname(fullname) {
    const [firstname, ...lastname] = fullname.split(' ');
    this.firstname = firstname;
    this.lastname = lastname.join(' ');
  }

  getFirstname() {
    // unlike other OOP languages the this keyword is required
    // to access object properties
    return this.firstname;
  }
}

let e1 = new Employee('Jeff', 'Sims');
let e2 = new Employee('Yasmin', 'Sims');

assert.equal(e1.doWork(), 'complete!');
assert.equal(Employee.prototype.doWork.call(e1), 'complete!');
assert.equal(e1.getFirstname(), 'Jeff');
assert.equal(e2.getFirstname(), 'Yasmin');
assert.equal(e1.fullname, 'Jeff Sims');

e2.fullname = 'Yasmin Ghande Sims';
assert.equal(e2.lastname, 'Ghande Sims');
