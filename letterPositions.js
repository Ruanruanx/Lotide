// FUNCTION IMPLEMENTATION

const letterPositions = function(sentence) {
  const result = {};
  //convert string to array by split
  let arr = sentence.split('');
  //remove space
  arr.filter((ele) => ele !== ' ');
  //iterate in array
  //difine new position array
  //push indexof to position array

  //new position
  for (let i of arr) {
    if (result[i]) {
      let len = result[i].length;
      let lastPosition = result[i][len - 1] + 1;
      result[i].push(arr.indexOf(i, lastPosition));
    } else {
      result[i] = [];
      result[i].push(arr.indexOf(i));
    }
  }
  return result;
};

module.exports = letterPositions;
