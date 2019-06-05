const { performance } = require('perf_hooks');

const { createUnorderedArray } = require('./helpers');
const {
    bubbleSort,
    insertionSort,
} = require('./sort-functions');

// Logging tests
function functionsTester(length) {
    console.log(`insertionSort(), size: ${length}, time: ${testIterator(insertionSort, length)}ms`);
    console.log(`bubbleSort(), size: ${length}, time: ${testIterator(bubbleSort, length)}ms`);
    console.log('---------------------');
}

// Testing performance
function testPerformance() {
    functionsTester(20);
    functionsTester(100);
    functionsTester(1000);
    functionsTester(2500);
    functionsTester(5000);
    functionsTester(6000);
    functionsTester(7000);
    // functionsTester(10000);
    // functionsTester(100000);
    // functionsTester(1000000);
}

function testIterator(fn, size) {
    let durationArr = [], t0, t1;
    const arr = createUnorderedArray(size);
    for (let i = 0; i < 100; i++) {
        t0 = performance.now();
        fn(arr);
        t1 = performance.now();
        durationArr.push(+(t1 - t0));
    }
    const durationsSum = durationArr.reduce((a, b) => a + b, 0);
    const averageDuration = durationsSum / durationArr.length;
    return averageDuration.toFixed(4);
}

testPerformance();