const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe('#assertArraysEqual', () => {
  it("test 1", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 4]), true);
  });
});
