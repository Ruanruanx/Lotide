// FUNCTION IMPLEMENTATION

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// //console.log(result1);

module.exports = map;