const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

const eqObjects = function(object1, object2) {
  //iterate key in obj1, compare the values by key
  const count1 = Object.keys(object1).length;
  const count2 = Object.keys(object2).length;
  if (count1 !== count2) {
    return false;
  }
  let result = true;
  for (const key in object1) {
    //use eqArrays if the elements are arrays
    if (Array.isArray(object1[key])) {
      let arrResult = eqArrays(object1[key], object2[key]);
      if (!arrResult) {
        result = false;
      }
      //recursive
    } else if (typeof (object1[key]) === 'object') {
      result = eqObjects(object1[key], object2[key]);
    } else {
      //if values are string, boolean or number
      if (!assertEqual(object1[key], object2[key])) {
        result = false;
      }
    }

  }
  return result;
};

module.exports = eqObjects;