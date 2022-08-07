//define extreme case
//define general case, then add condition to define specific case

const assertEqual = function(actual, expected) {
  let result = true;
  if (typeof (actual) === typeof (expected) && typeof (actual) === 'string') {
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
  } else if (actual !== expected) {
    result = 'Failed';
  }

  if (result === 'Failed') {
    console.log(`Assertion Failed: ${actual}  !== ${expected}`);
  } else {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
  //  console.log('result is: ' + result);
  return result;
};

module.exports = assertEqual;