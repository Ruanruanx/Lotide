// FUNCTION IMPLEMENTATION

const middle = function(arr) {
  let result = [];
  const arrLength = arr.length;
  let middle = arrLength / 2;
  if (arrLength > 2 && arrLength % 2 === 0) {
    result.push(arr[middle - 1], arr[middle]);
  } else {
    result.push(arr[(arrLength - 1) / 2]);
  }
  console.log(result);
  return result;
};

module.exports = middle;

