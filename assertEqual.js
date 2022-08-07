//define extreme case
//define general case, then add condition to define specific case

const assertEqual = function(actual, expected) {
  // let result = true;
  // //if the input is string
  // if (typeof (actual) === typeof (expected) && typeof (actual) === 'string') {
  //   const actualLength = actual.length;
  //   for (let i = 0; i < actualLength; i++) {
  //     if (actual[i] !== expected[i]) {
  //       result = false;
  //       break;
  //     }
  //   }
  //   if (actualLength !== expected.length) {
  //     result = false;
  //   }
  // //if the input is boolean, number or undefined
  // } else if (actual !== expected) {
  //   result = false;
  // }

  if (actual !== expected) {
    console.log(`Assertion Failed: ${actual}  !== ${expected}`);
    return false;
  } else {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
    return true;
  }

};

module.exports = assertEqual;