const assertObjectsEqual = require('../assertObjectsEqual');
const assert = require('chai').assert;

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

let result1 = assertObjectsEqual(cd, dc);
let result2 = assertObjectsEqual(cd, cd2);

describe("#objects", () => {
  it("test 1", () => {
    assert.strictEqual(result1, true);
  });
  it("test 2", () => {
    assert.strictEqual(result2, false);
  });
});