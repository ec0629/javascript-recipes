const s_age = Symbol();

class Person {
  constructor(age) {
    this[s_age] = age;
  }

  howOldAreYou() {
    return `I am ${this[s_age]}`;
  }
}

module.exports = Person;
