// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let result = true;
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i])) {
      if (Array.isArray(arr2[i])) {
        result = eqArrays(arr1[i], arr2[i]);
      } else {
        return false;
      }
    }
    if (assertEqual(arr1[i], arr2[i]) === false) {
      result = false;
      break;
    }
  }
  return result;
};

module.exports = eqArrays;

