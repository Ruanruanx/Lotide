//define extreme case
//define general case, then add condition to define specific case

const assertEqual = function(actual, expected) {
  let result = '';
  if (actual === undefined) {
    if (expected !== undefined) {
      result = 'Failed';
    }
  } else {
    if (typeof (actual) === 'number') {
      if (typeof (expected) === 'number') {
        if (actual !== expected) {
          result = 'Failed';
        }
      } else {
        result = 'Failed';
      }
    }
    const actualLength = actual.length;
    for (let i = 0; i < actualLength; i++) {
      if (actual[i] !== expected[i]) {
        result = 'Failed';
        break;
      }
    }
    if (actualLength !== expected.length) {
      result = 'Failed';
    }
  }
  if (result === 'Failed') {
    console.log(`Assertion Failed: ${actual}  !== ${expected}`);
  } else {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
  //  console.log('result is: ' + result);
  return result;
};

console.log(assertEqual(2, 4));

module.exports = assertEqual;