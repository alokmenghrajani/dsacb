const { signum } = require("../utils");
const bubbleSortRecursive = (
  array,
  cb = signum,
  index = 0,
  n = array.length
) => {
  if (index >= n - 1) {
    return;
  }

  if (cb.call(array, array[index], array[index + 1]) > 0) {
    [array[index], array[index + 1]] = [array[index + 1], array[index]];
    bubbleSortRecursive(array, cb, index + 1, n);
  } else {
    index += 1;
  }

  bubbleSortRecursive(array, cb, index, n - 1);
};
module.exports = bubbleSortRecursive;
