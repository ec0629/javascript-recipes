const assert = require("assert");

const unicorn = {
  legs: 4,
  color: "brown",
  horn: true,
  hornAttack: (target) => {
    return target.name + " was obliterated!";
  },
};

unicorn.hornAttack = new Proxy(unicorn.hornAttack, {
  apply: (target, context, args) => {
    if (context !== unicorn) {
      return "nobody can use unicorn horn but unicorn!";
    } else {
      return target.apply(context, args);
    }
  },
});

const thief = { name: "Rupert" };
thief.attack = unicorn.hornAttack;
assert.strictEqual(thief.attack(), "nobody can use unicorn horn but unicorn!");
assert.strictEqual(unicorn.hornAttack(thief), "Rupert was obliterated!");
