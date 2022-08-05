const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

// TEST CODE

describe("eqArray", () => {
  it("test 1", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 4, 3]), false);
  });
  it("test 2", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });
});

