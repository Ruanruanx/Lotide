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
    console.log('test' + assertEqual(arr1[i], arr2[i]));
    if (assertEqual(arr1[i], arr2[i]) === 'Failed') {
      result = false;
      break;
    }
  }
  return result;
};

console.log('result' + eqArrays([1, 2, 3], [1, 4, 3]));
module.exports = eqArrays;

