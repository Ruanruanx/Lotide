// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  actual = actual.toString();
  expected = expected.toString();
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
  let len1 = arr1.length;
  let len2 = arr2.length;
  let result = true;
  if (len1 !== len2) {
    result = false;
  } else {
    for (let i = 0; i < len1; i++) {
      if (assertEqual(arr1[i], arr2[i]) === 'Failed') {
        result = false;
        break;
      }
    }
  }
  return result;
};

const assertArraysEqual = function(arr1, arr2) {
  console.log(assertEqual(eqArrays(arr1, arr2), true));
};

const middle = function(arr) {
  let result = [];
  let len = arr.length;
  let middle = len / 2;
  if (len > 2 && len % 2 === 0) {
    result.push(arr[middle - 1], arr[middle]);
  } else {
    result.push(arr[(len - 1) / 2]);
  }
  console.log(result);
  return result;
};

//TEST CODE
let arr1 = middle([1, 2, 3, 5,9, 6]); // => [2, 3]
assertArraysEqual(arr1, [3,5]);

let arr2 = middle([1, 2, 3, 5,9]);
assertArraysEqual(arr2,[3]);