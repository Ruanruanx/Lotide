// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(input) {
  let arr = [];
  for (let ele of input) {
    if (typeof (ele) === 'number') {
      arr.push(ele);
    } else if (Array.isArray(ele)) {
      for (let ele2 of ele) {
        arr.push(ele2);
      }
    }
  }
  //console.log(arr);
  return arr;
};

module.exports = flatten;