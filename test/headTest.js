// const assertEqual = require('../assertEqual');
// const head = require('../head');


// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1,2,3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for '5'", () => {
    assert.strictEqual(head(['5']),'5');
  });

  it("should return Hello",()=>{
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it("should return undefined",()=>{
    assert.strictEqual(head([]),undefined);
  });

}

);