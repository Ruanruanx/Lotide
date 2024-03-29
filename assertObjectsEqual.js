// const assertEqual = require('./assertEqual');
// const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    return true;
  } else {
    console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    return false;
  }
};

module.exports = assertObjectsEqual;