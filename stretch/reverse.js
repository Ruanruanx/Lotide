let input = process.argv;
let wordArray = input.slice(2);
//reverse a string
const reverseStr = function(string) {
  let result = '';
  let splitedWordArray = string.split('');
  let len = splitedWordArray.length;
  for (let i = len - 1; i > -1; i--) {
    result += splitedWordArray[i];
  }
  return result;
};
//iterate each string in an array and use reverse function
for (let ele of wordArray) {
  console.log(reverseStr(ele));
}
//console.log every reversed string

