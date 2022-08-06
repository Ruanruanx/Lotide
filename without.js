// FUNCTION IMPLEMENTATION

//iterate item in arr
//iterate item in iTR array
//push item to new array if 2nd item equals ele not in arr
const assertEqual = require('./assertEqual');

const without = function(arr, itemsToRemove) {
  let newArr = [];
  let arrLength = arr.length;
  let arr2Length = itemsToRemove.length;
  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arr2Length; j++) {
      if (assertEqual(arr[i], itemsToRemove[j]) === 'Failed') {
        newArr.push(arr[i]);
      }
    }
  }
  //console.log(newArr);
  return newArr;
};

module.exports = without;
