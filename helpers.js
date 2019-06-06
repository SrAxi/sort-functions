/*************
 *  Helpers  *
 ************/
/**
 * Generates a random number within a range
 *
 * @param min
 * @param max
 * @returns {*}
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Creates an unordered Array with a given length
 * Using for loop for increasing performance
 *
 * @param n
 * @returns {Array}
 */
function createUnorderedArray(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(getRandomInt(1, n));
    }
    return arr;
}

/**
 * Default comparator for sorting
 *
 * @param a
 * @param b
 * @returns {number}
 */
const defaultComparator = (a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
};

module.exports = {
    createUnorderedArray,
    defaultComparator,
};
