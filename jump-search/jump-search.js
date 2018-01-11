const { signum, isCallable } = require('../utils');

const jumpSearch = (array, key, comparator = signum) => {

    // If array is an empty array
    if (!array.length) {
        return -1;
    }

    const step = Math.floor(Math.sqrt(array.length));
    let start = 0;
    let prev = 0;

    if (!isCallable(comparator)) {
        console.warn('Dsacb.jumpSearch: `comparator is not callable. signum is used as comparator.`');
    }

    let equality = comparator.apply(array, [array[start], key]);

    while (equality < 0) {
        prev = start;
        start += step;
        start = Math.min(start, array.length - 1);
        if (comparator.apply(array, [array[prev], key]) > 0) {
            return -1;
        }
        equality = comparator.apply(array, [array[start], key]);
    }

    // Linearly search backward 
    while (start >= prev) {
        equality = comparator.apply(array, [array[start], key]);
        if (equality === 0) {
            return start;
        }
        start -= 1;
    }
    return -1;

};

module.exports = jumpSearch;