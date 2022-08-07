const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
// TEST CODE

describe("#equal test", () => {
  it("test 1", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"), false);
  });
  it("test 2", () => {
    assert.strictEqual(assertEqual(1, 1), true);
  });
});
