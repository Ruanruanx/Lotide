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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// //console.log(result1);
// //test 1
// const words = ["ground", "control", "to", "major", "tom", "will", "you"];
// const result1 = map(words, word => word[0]);
// assertArraysEqual(result1, ['g', 'c', 't', 'm', 't', 'w', 'y']);

// //test 2
// console.log("---------Test 2---------")
// const result2 = map(words, word => word.length);
// assertArraysEqual(result2, [6, 7, 2, 5, 3, 4, 3]);

// //test 3
// console.log("---------Test 3---------")
// const result3 = map(words, word => word + 's');
// assertArraysEqual(result3, ["grounds", "controls", "tos", "majors", "toms", "wills", "yous"]);

module.exports = map;