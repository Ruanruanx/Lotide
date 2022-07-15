const flatten = function(input) {
  let arr = [];
  for (let ele of input) {
    if (typeof (ele) === 'number') {
      arr.push(ele);
    } else if (Array.isArray(ele)) {
      for (let ele2 of ele) {
        arr.push(ele2);
      }
    }
  }
  console.log(arr);
};

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]