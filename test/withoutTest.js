
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

const without = require('../without');
const assert = require('chai').assert;

describe("#without", () => {
  it('test', () => {
    const words = ["hello", "world", "lighthouse"];
    const result = without(words, ["lighthouse"]);
    assert.deepEqual(result,["hello", "world"]);
  });
});