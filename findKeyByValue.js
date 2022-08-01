//define extreme case
//define general case, then add condition to define specific case

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


const findKeyByValue = function(obj, valueString) {
  let result = '';
  for (let key in obj) {
    if (obj[key] === valueString) {
      result = key;
    } else {
      result = undefined;
    }
  }
  return result;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);