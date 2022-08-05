// assertArraysEqual(letterPositions("hello").e, [1]);
const letterPositions = require('../letterPositions');
const assert = require('chai').assert;
console.log(letterPositions("hello").e);
describe("#letter position", () => {
  it("should return [1]", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
});