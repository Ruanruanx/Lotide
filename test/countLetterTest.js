const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetter", () => {
  it("returns for lighthouse in the house", () => {
    assert.deepEqual(countLetters("lighthouse in the house"), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 2, n: 1});
  });
});

console.log(countLetters("lighthouse in the house"));