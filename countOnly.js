//define extreme case
//define general case, then add condition to define specific case

// const assertEqual = require('./assertEqual');
// const assertEqual = function(actual, expected) {
//   let result = '';
//   if (actual === undefined) {
//     if (expected !== undefined) {
//       result = 'Failed';
//     }
//   } else {
//     actual = actual.toString();
//     expected = expected.toString();
//     let len = actual.length;

//     for (let i = 0; i < len; i++) {
//       if (actual[i] !== expected[i]) {
//         result = 'Failed';
//         break;
//       }
//     }
//     if (len !== expected.length) {
//       result = 'Failed';
//     }
//   }
//   if (result === 'Failed') {
//     console.log(`Assertion Failed: ${actual}  !== ${expected}`);
//   } else {
//     console.log(`Assertion Passed: ${actual} === ${expected}`);
//   }

// };

const countOnly = function(allItems, itemsToCount) {
  const result = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (result[item]) {
        result[item] += 1;
      } else {
        result[item] = 1;
      }
    }

  }
  return result;
};

module.exports = countOnly;