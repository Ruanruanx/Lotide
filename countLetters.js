const assertEqual = require('./assertEqual');

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