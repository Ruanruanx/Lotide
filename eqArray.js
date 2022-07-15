// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  actual = actual.toString();
  expected = expected.toString();
  let len = actual.length;
  let result = '';
  for (let i = 0; i < len; i++) {
    if (actual[i] !== expected[i]) {
      result = 'Failed';
      break;
    } else {
      result = 'Passed';
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
  return result;
};

const eqArrays = function(arr1, arr2) {
  let len = arr1.length;
  let result = true;
  for (let i = 0; i < len; i++) {
    if (assertEqual(arr1[i], arr2[i]) === 'Failed') {
      result = false;
      break;
    }
  }
  return result;
};


// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 4,3]), true);


