// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

const eqArrays = function(arr1, arr2) {
  const arr1Length = arr1.length;
  let result = true;
  for (let i = 0; i < arr1Length; i++) {
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

