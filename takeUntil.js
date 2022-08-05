// FUNCTION IMPLEMENTATION

const takeUntil = function(array, callback) {
  // iterate in the loop
  //push item to result
  //if meets the callback condition
  //break loop
  let result = [];
  for (let ele of array) {
    if (callback(ele)) {
      break;
    } else {
      result.push(ele);
    }
  }
  return result;
};
module.exports = takeUntil;