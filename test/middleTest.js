// const middle = require('../middle');

// const assertArraysEqual = require('../assertArraysEqual');

// //TEST CODE
// let arr1 = middle([1, 2, 3, 5,9, 6]); // => [2, 3]
// assertArraysEqual(arr1, [3,5]);

// let arr2 = middle([1, 2, 3, 5,9]);
// assertArraysEqual(arr2,[3]);

const middle = require('../middle');
const assert = require("chai").assert;

describe("#middleTest", () => {
  it("should return [3,5]", () => {
    assert.deepEqual(middle([1, 2, 3, 5, 9, 6]), [3, 5]);
  });
  it("should return [3]", () => {
    assert.deepEqual(middle([1, 2, 3, 5, 9,]), [3]);
  });
});