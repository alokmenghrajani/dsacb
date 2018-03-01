const { signum } = require("../../utils");
/**
 *
 * @param {*} array
 * @param {Function} cb
 */
const selectionSort = (array, cb = signum) => {
  const sArray = [...array];

  for (let index = 0; index < array.length; index += 1) {
    let mIndex = index;

    // select minimum element.
    for (let subIndex = index + 1; subIndex < sArray.length; subIndex += 1) {
      if (cb.call(sArray, sArray[mIndex], sArray[subIndex]) > 0) {
        mIndex = subIndex;
      }
    }

    // Leveraing ES6 to swap values
    [sArray[mIndex], sArray[index]] = [sArray[index], sArray[mIndex]];
  }
  return sArray;
};

module.exports = selectionSort;
