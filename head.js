// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  let len = actual.length;
  let result = '';
  for (let i = 0; i < len; i++) {
    if (actual[i] !== expected[i]) {
      result = 'Failed';
      break;
    }
  }
  if (len !== expected.length) {
    result = 'Failed';
  }
  if (result === 'Failed') {
    console.log(`Assertion Failed: ${actual}  !== ${expected}`)
  } else {
    console.log(`Assertion Passed: ${actual} === ${expected}`)
  }


};

const head=function(arr){
  if(arr.length===0){
    return "undefined";
  }else{
      return arr[0];
  }

}
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");