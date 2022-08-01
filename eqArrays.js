// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

const eqArrays = function(arr1, arr2) {
  let len = arr1.length;
  let result = true;
  for (let i = 0; i < len; i++) {
    if (assertEqual(arr1[i], arr2[i]) === 'Failed') {
      result = false;
      break;
    }
  }
  return result;
};

module.exports = eqArrays;

