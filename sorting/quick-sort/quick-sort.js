const { signum } = require("../../utils");
const partition = (array, cb, low, high) => {
  const pivot = array[high];
  let i = low - 1; // Smaller element index.
  for (let j = low; j < high; j += 1) {
    if (cb.call(array, array[j], pivot) <= 0) {
      i += 1;
      // swapping using es6
      [array[j], array[i]] = [array[i], array[j]];
    }
  }
  i += 1;
  [array[i], array[high]] = [array[high], array[i]];
  return i;
};
const quickSort = (array, cb = signum, low = 0, high = array.length - 1) => {
  if (low >= high) {
    return;
  }
  const pi = partition(array, cb, low, high);
  // sort left part.
  quickSort(array, cb, low, pi - 1);
  // sort right part.
  quickSort(array, cb, pi + 1, high);
};

module.exports = quickSort;
