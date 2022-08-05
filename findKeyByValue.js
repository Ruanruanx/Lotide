//define extreme case
//define general case, then add condition to define specific case

const findKeyByValue = function(obj, valueString) {
  let result = '';
  for (let key in obj) {
    if (obj[key] === valueString) {
      result = key;
    } else {
      result = undefined;
    }
  }
  return result;
};


module.exports = findKeyByValue;