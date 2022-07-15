// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let len = actual.length;
  let result = '';
  for (let i = 0; i < len; i++) {
    if (actual[i] !== expected[i]) {
      result = 'Failed';
      break;
    }
  }
  if (len !== expected.length) {
    result = 'Failed';
  }
  if (result === 'Failed') {
    console.log(`Assertion Failed: ${actual}  !== ${expected}`);
  } else {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }

};

const tail = function(arr) {
  let result = arr.slice(1);
  return result;
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!