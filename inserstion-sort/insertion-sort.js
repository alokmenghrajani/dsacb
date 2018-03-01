const { signum } = require("../utils");
const insertionSort = (array, cb = signum) => {
  for (let index = 1; index < array.length; index += 1) {
    let j = index - 1;
    const key = array[index];
    while (j >= 0 && cb.call(array, key, array[j]) < 0) {
      array[j + 1] = array[j];
      j -= 1;
    }
    array[j + 1] = key;
  }
};

module.exports = insertionSort;
