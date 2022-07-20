
const assertEqual = function(actual, expected) {
  let result = '';
  if (actual === undefined) {
    if (expected !== undefined) {
      result = 'Failed';
    }
  } else {
    actual = actual.toString();
    expected = expected.toString();
    let len = actual.length;

    for (let i = 0; i < len; i++) {
      if (actual[i] !== expected[i]) {
        result = 'Failed';
        break;
      }
    }
    if (len !== expected.length) {
      result = 'Failed';
    }
  }
  if (result === 'Failed') {
    //console.log(`Assertion Failed: ${actual}  !== ${expected}`);
    return 'Failed';
  } else {
    //console.log(`Assertion Passed: ${actual} === ${expected}`);
    return 'Passed';
  }

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

const eqObjects = function(object1, object2) {
  //iterate key in obj1, compare the values by key
  let count1 = Object.keys(object1).length;
  let count2 = Object.keys(object2).length;
  if (count1 !== count2) {
    return false;
  }
  let result = true;
  for (let key in object1) {
    if (Array.isArray(object1[key])) {
      let arrResult = eqArrays(object1[key], object2[key]);
      if (!arrResult) {
        result = false;
      }
    } else {
      if ((object1[key] !== object2[key])) {
        result = false;
      }
    }

  }
  return result;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual,expected)) {
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(cd,dc);
assertObjectsEqual(cd, cd2);