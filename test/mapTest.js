
// //test 1
// const words = ["ground", "control", "to", "major", "tom", "will", "you"];
// const result1 = map(words, word => word[0]);
// assertArraysEqual(result1, ['g', 'c', 't', 'm', 't', 'w', 'y']);

// //test 2
// console.log("---------Test 2---------")
// const result2 = map(words, word => word.length);
// assertArraysEqual(result2, [6, 7, 2, 5, 3, 4, 3]);

// //test 3
// console.log("---------Test 3---------")
// const result3 = map(words, word => word + 's');
// assertArraysEqual(result3, ["grounds", "controls", "tos", "majors", "toms", "wills", "yous"]);

const map = require('../map');
const assert = require('chai').assert;

describe("#map", () => {
  const words = ["ground", "control", "to", "major", "tom", "will", "you"];
  it("test 1", () => {
    const result1 = map(words, word => word[0]);
    assert.deepEqual(result1,['g', 'c', 't', 'm', 't', 'w', 'y']);
  });

  it("test 2", () => {
    const  result2 = map(words, word => word.length);
    assert.deepEqual(result2,[6, 7, 2, 5, 3, 4, 3]);
  });

  it("test 3", () => {
    const result3 = map(words, word => word + 's');
    assert.deepEqual(result3,["grounds", "controls", "tos", "majors", "toms", "wills", "yous"]);
  });

});