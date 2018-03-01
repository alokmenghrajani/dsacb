const { signum } = require("../../utils");
const merge = (array, cb = signum, l, m, r) => {
  // Populate subarray to array to temp arrays.
  const left = [];
  while (left.length < m - l + 1) {
    left.push(array[left.length + l]);
  }
  const right = [];
  while (right.length < r - m) {
    right.push(array[right.length + m + 1]);
  }

  // Merging left and right arrays to main array.
  let i = 0;
  let j = 0;
  let k = l; // start index for merge to start.
  while (i < left.length && j < right.length) {
    if (cb.call(array, left[i], right[j]) < 0) {
      array[k] = left[i];
      i += 1;
    } else {
      array[k] = right[j];
      j += 1;
    }
    k += 1;
  }

  // Populating remaining items.
  while (i < left.length) {
    array[k] = left[i];
    i += 1;
    k += 1;
  }

  while (j < right.length) {
    array[k] = right[j];
    j += 1;
    k += 1;
  }
};
const mergeSort = (array, cb = signum, l = 0, r = array.length - 1) => {
  if (l >= r) {
    return;
  }
  const m = Math.floor(l + (r - l) / 2);
  mergeSort(array, cb, l, m);
  mergeSort(array, cb, m + 1, r);
  merge(array, cb, l, m, r);
};
module.exports = mergeSort;
