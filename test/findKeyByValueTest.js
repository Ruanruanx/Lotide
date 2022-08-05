// test
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe("#find key by value",()=>{
  it("should return drama",()=>{
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"),"drama");
  });
  it("should return undefined",()=>{
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"),undefined);
  });
});