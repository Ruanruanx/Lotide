// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  console.log(assertEqual(false,true));
  if (assertEqual(eqArrays(arr1, arr2),true)) {
    console.log(`Assertion passed ${arr1} = ${arr2}`);
  } else {
    console.log(`Assertion failed ${arr1} != ${arr2}`);
  }
};

module.exports = assertArraysEqual;


