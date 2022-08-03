// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

const eqArrays = require('./eqArrays');
const middle = function(arr) {
  let result = [];
  let len = arr.length;
  let middle = len / 2;
  if (len > 2 && len % 2 === 0) {
    result.push(arr[middle - 1], arr[middle]);
  } else {
    result.push(arr[(len - 1) / 2]);
  }
  console.log(result);
  return result;
};

module.exports = middle;

