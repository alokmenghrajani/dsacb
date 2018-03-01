const { signum } = require("../../utils");
const bubbleSort = (array, cb = signum) => {
  const sArray = [...array];
  for (let index = 0; index < sArray.length; index += 1) {
    for (let sIndex = sArray.length - 1; sIndex > index; sIndex -= 1) {
      if (cb.call(sArray, sArray[sIndex - 1], sArray[sIndex]) > 0) {
        [sArray[sIndex], sArray[sIndex - 1]] = [
          sArray[sIndex - 1],
          sArray[sIndex]
        ];
      }
    }
  }
  return sArray;
};

module.exports = bubbleSort;
