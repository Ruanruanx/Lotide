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

const letterPositions = function(sentence) {
  const result = {};
  //convert string to array by split
  let arr = sentence.split('');
  //remove space
  arr.filter((ele) => ele !== ' ');
  //iterate in array
  //difine new position array
  //push indexof to position array

  //new position
  for (let i of arr) {
    if (result[i]) {
      let len = result[i].length;
      let lastPosition = result[i][len - 1] + 1;
      result[i].push(arr.indexOf(i, lastPosition));
    } else {
      result[i] = [];
      result[i].push(arr.indexOf(i));
    }
  }
  return result;
};

assertArraysEqual(letterPositions("hello").e, [1]);
