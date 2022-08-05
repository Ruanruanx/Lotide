const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe('#assertArraysEqual', () => {
  it("test 1", () => {
    assert.deepEqual(assertArraysEqual([1, 2, 3], [1, 2, 4]), true);
  });
});
