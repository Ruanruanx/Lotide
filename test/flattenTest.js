

// console.log(assertArraysEqual(arr, [1, 2, 3, 4, 5, 6])); // => [1, 2, 3, 4, 5, 6]

const flatten = require('../flatten');
const assert = require('chai').assert;
let arr = flatten([1, 2, [3, 4], 5, [6]]);


describe("#flatten",()=>{
  it("should return flattened array",()=>{
    assert.deepEqual(arr,[1, 2, 3, 4, 5, 6]);
  });
});