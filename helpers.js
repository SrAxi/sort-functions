/*************
 *  Helpers  *
 ************/

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

// Helper for creating an unordered Array with a given length
// Using for loop for increasing performance
function createUnorderedArray(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(getRandomInt(1, n));
    }
    return arr;
}

module.exports = {
    createUnorderedArray,
};
