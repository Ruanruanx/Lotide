const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

// TEST CODE

describe("eqArray", () => {
  it("test 1", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it("test 2", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });
  it("test 3", () => {
    assert.strictEqual(eqArrays(["1", "2", 3], ["1", "2", '3']), false);
  });
  it("test 4", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("test 5",()=>{
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", '3']), true);
  });
  it("test 6",()=>{
    assert.strictEqual(eqArrays([1,2],[1,2,3]),false);
  });
});

