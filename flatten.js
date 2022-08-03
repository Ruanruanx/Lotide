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


const flatten = function(input) {
  let arr = [];
  for (let ele of input) {
    if (typeof (ele) === 'number') {
      arr.push(ele);
    } else if (Array.isArray(ele)) {
      for (let ele2 of ele) {
        arr.push(ele2);
      }
    }
  }
  //console.log(arr);
  return arr;
};

// let arr = flatten([1, 2, [3, 4], 5, [6]]);
// assertArraysEqual(arr, [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]

module.exports = flatten;