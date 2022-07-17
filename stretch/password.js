let input = process.argv;
let wordArray = input.slice(2);
//reverse a string
const password = function(string) {
  let result = '';
  let splitedWordArray = string.split('');
  let len = splitedWordArray.length;
  for (let i = 0; i < len; i++) {
    let letter = splitedWordArray[i];
    if (letter === 'a') {
      letter = 4;
    } else if (letter === 'e') {
      letter = 3;
    } else if (letter === 'o') {
      letter = 0;
    } else if (letter === 'l') {
      letter = 1;
    }
    result += letter;
  }
  return result;
};
console.log(password(wordArray[0]));
//test
//node password.js abracadabra
//node password.js audaciously