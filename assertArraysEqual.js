// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  //console.log(assertEqual('Failed',true));
  if (assertEqual(eqArrays(arr1, arr2),true)) {
    console.log(`Assertion passed ${arr1} = ${arr2}`);
    return true;
  } else {
    console.log(`Assertion failed ${arr1} != ${arr2}`);
    return false;
  }
};

module.exports = assertArraysEqual;


