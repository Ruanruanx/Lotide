const eqObjects = require('../eqObjects');
const assert = require('chai').assert;
//array test
console.log('array test');
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
let result1 = eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
let result2 = eqObjects(cd, cd2); // => false

describe("#eqObject",()=>{
  it("test 1",()=>{
    assert.strictEqual(result1, true);
  });
  it("test 2",()=>{
    assert.strictEqual(result2, false);
  });
});