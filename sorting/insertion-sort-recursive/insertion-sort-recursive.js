const { signum } = require("../../utils");
const insertionSortRecursive = (
  array,
  cb = signum,
  index = 1,
  n = array.length
) => {
  if (index >= n || index < 1) {
    return;
  }
  if (cb.call(array, array[index], array[index - 1]) < 0) {
    [array[index], array[index - 1]] = [array[index - 1], array[index]];
    insertionSortRecursive(array, cb, index - 1, n);
  } else {
    index += 1;
  }
  insertionSortRecursive(array, cb, index, n);
};

module.exports = insertionSortRecursive;
