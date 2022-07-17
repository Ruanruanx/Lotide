let input = process.argv;
let origin = input.slice(2);

const pigLatinWord = function(word) {
  let result = word.slice(1, word.length) + word[0] + 'ay';
  return result;
};

let result = [];
for (let i = 0; i < origin.length; i++) {
  result.push(pigLatinWord(origin[i]));
}

console.log(result.join(' '));


//use slice to select word
//use join to covert array to string
//define  input, output type