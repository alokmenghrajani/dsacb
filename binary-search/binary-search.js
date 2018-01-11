const { signum } = require('../utils');

/**
 * @param  {Array} an sorted array.
 * @param  {key} any item in array.
 * @param  {Function} comaprator fuction which will be used to compare key
 * @return {[type]}
 */
const binarySearch = (array, key, comparator = signum) => {

    if (!Array.isArray(array)) {
        throw "Dsacb.binarySearch: First argument must be an array.";
    }

    let low = 0;
    let high = array.length - 1;

    while (low <= high) {

        const mid = Math.floor((low + high) / 2);
        const equality = comparator.apply(array, [array[mid], key]);

        if (equality === 0) {
            return mid;
        }

        if (equality > 0) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }

    }

    return -1;
};

module.exports = binarySearch;
