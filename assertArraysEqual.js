// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  if (assertEqual(eqArrays(arr1, arr2))) {
    console.log(`Assertion passed ${arr1} = ${arr2}`);
  }
};

module.exports = assertArraysEqual;


