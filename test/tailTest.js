// const tail = require('../tail');
// const assertEqual = require('../assertEqual');

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthous"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs");

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

const tail = require('../tail');
const assert = require("chai").assert;

describe("#tailTest", () => {
  it("return Lighthouse Labs", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("return Lighthouse Labs", () => {
    assert.deepEqual(tail(["Yo yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

});