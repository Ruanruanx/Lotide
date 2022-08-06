// FUNCTION IMPLEMENTATION
const findKey = function(object, callback) {
  let result = '';
  for (let key in object) {
    let keyName = object[key];

    if (callback(keyName)) {
      result = key;
      break;
    } else {
      result = undefined;
    }
  }
  return result;
};
// //test
// let result = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri": { stars: 3 },
//   "noma": { stars: 2 },
//   "elBulli": { stars: 3 },
//   "Ora": { stars: 2 },
//   "Akelarre": { stars: 3 }
// }, x => x.stars === 2);

// console.log(result);

// assertEqual(result, 'noma');
module.exports = findKey;