const { signum } = require("../../utils");
const bubbleSortRecursive = (
  array,
  cb = signum,
  index = 0,
  n = array.length
) => {
  if (index >= n) {
    return;
  }

  if (cb.call(array, array[index], array[index + 1]) > 0) {
    [array[index], array[index + 1]] = [array[index + 1], array[index]];
    bubbleSortRecursive(array, cb, index + 1, n - 1);
  } else {
    index += 1;
  }
  bubbleSortRecursive(array, cb, index, n);
};
module.exports = bubbleSortRecursive;
