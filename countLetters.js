
const assertEqual = function(actual, expected) {
  let result = '';
  if (actual === undefined) {
    if (expected !== undefined) {
      result = 'Failed';
    }
  } else {
    actual = actual.toString();
    expected = expected.toString();
    let len = actual.length;

    for (let i = 0; i < len; i++) {
      if (actual[i] !== expected[i]) {
        result = 'Failed';
        break;
      }
    }
    if (len !== expected.length) {
      result = 'Failed';
    }
  }
  if (result === 'Failed') {
    console.log(`Assertion Failed: ${actual}  !== ${expected}`);
  } else {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }

};

const countLetters = function(string) {
  //iterate the string, convert it to array
  //define result
  //iterate in the array, increase the count if it exists
  // if it doesn't exist, result[letter]=1;
  let result = {};
  let arr = string.split('');
  arr.pop(' ');
  for (let letter of arr) {
    if (result[letter]) {
      result[letter] += 1;
    } else if (!result[letter] && letter !== ' ') {
      result[letter] = 1;
    }
  }
  return result;
};

//console.log(countLetters("lighthouse in the house"));
module.exports = countLetters;