//define extreme case
//define general case, then add condition to define specific case

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