// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let len = actual.length;
  let result = 'Passsed';
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
  //   if (result === true) {
  //     console.log(`Assertion Passed: ${arr1} === ${arr2}`);
  //   } else {
  //     console.log(`Assertion Failed: ${arr1} !==${arr2}`);
  //   }
  return result;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);


