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


const takeUntil = function(array, callback) {
  // iterate in the loop
  //push item to result
  //if meets the callback condition
  //break loop
  let result = [];
  for (let ele of array) {
    if (callback(ele)) {
      break;
    } else {
      result.push(ele);
    }
  }
  return result;
};
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
