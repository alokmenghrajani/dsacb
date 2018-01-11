const isCallable = (fn) => {
    return typeof fn === 'function' || Object.prototype.toString.call(fn) === '[object Function]';
};
module.exports = isCallable;