// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  actual = actual.toString();
  expected = expected.toString();
  let len = actual.length;
  let result = 'Passed';
  for (let i = 0; i < len; i++) {
    if (actual[i] !== expected[i]) {
      result = 'Failed';
      break;
    }
  }
  if (len !== expected.length) {
    result = 'Failed';
  }
  // if (result === 'Failed') {
  //   console.log(`Assertion Failed: ${actual}  !== ${expected}`);
  // } else {
  //   console.log(`Assertion Passed: ${actual} === ${expected}`);
  // }
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
  console.log(result);
  return result;
};

//iterate item in arr
//iterate item in iTR array
//push item to new array if 2nd item equals ele not in arr
const without = function(arr, itemsToRemove) {
  let newArr = [];
  let arrLen = arr.length;
  let arr2Len = itemsToRemove.length;
  for (let i = 0; i < arrLen; i++) {
    for (let j = 0; j < arr2Len; j++) {
      if (assertEqual(arr[i], itemsToRemove[j]) === 'Failed') {
        newArr.push(arr[i]);
      }
    }
  }
  console.log(newArr);
  return newArr;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
eqArrays(words, ["hello", "world", "lighthouse"]);


