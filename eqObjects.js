const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  //iterate key in obj1, compare the values by key
  let count1 = Object.keys(object1).length;
  let count2 = Object.keys(object2).length;
  if (count1 !== count2) {
    return false;
  }
  let result = true;
  for (let key in object1) {
    if (Array.isArray(object1[key])) {
      let arrResult = eqArrays(object1[key], object2[key]);
      if (!arrResult) {
        result = false;
      }
    } else if (typeof (object1[key]) === 'object') {
      result = eqObjects(object1[key], object2[key]);
    } else {
      if ((object1[key] !== object2[key])) {
        result = false;
      }
    }

  }
  return result;
};
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }) );

module.exports = eqObjects;