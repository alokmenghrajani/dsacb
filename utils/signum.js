const signum = (x, y) => {
    if (x === y) {
        return 0;
    }
    if (x > y) {
        return 1;
    }
    return -1;
};

module.exports = signum;