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

const findKey = function(object, callback) {
  let result = '';
  for (let key in object) {
    let keyName = object[key];

    if (callback(keyName)) {
      result = key;
      break;
    } else {
      result = undefined;
    }
  }
  return result;
};
// //test
// let result = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri": { stars: 3 },
//   "noma": { stars: 2 },
//   "elBulli": { stars: 3 },
//   "Ora": { stars: 2 },
//   "Akelarre": { stars: 3 }
// }, x => x.stars === 2);

// console.log(result);

// assertEqual(result, 'noma');
module.exports = findKey;