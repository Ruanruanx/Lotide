const countOnly = require('../countOnly');
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

//test code
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

describe("count only", () => {
  it("test 1", () => {
    assert.strictEqual(result1["Jason"], 1);
  });
  it("test 2",()=>{
    assert.strictEqual(result1["Karima"], undefined);
  });
});