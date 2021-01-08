const assert = require("assert");

const unicorn = {
  legs: 4,
  color: "brown",
  horn: true,
};

const proxyUnicorn = new Proxy(unicorn, {
  get: (target, property) => {
    if (property === "color") {
      return "awesome " + target[property];
    } else {
      return target[property];
    }
  },

  set: function (target, property, value) {
    if (property === "horn" && value === false) {
      console.log("unicorn cannot ever lose its horn!");
    } else {
      target[property] = value;
    }
  },
});

assert.strictEqual(proxyUnicorn.legs, 4);
assert.strictEqual(proxyUnicorn.color, "awesome brown");

proxyUnicorn.color = "white";
proxyUnicorn.horn = false;
assert.strictEqual(proxyUnicorn.color, "awesome white");
assert.strictEqual(proxyUnicorn.horn, true);
