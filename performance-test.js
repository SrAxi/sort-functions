const { performanceTest } = require('function-performance-test');
const { createUnorderedArray } = require('./helpers');
const {
    bubbleSort,
    insertionSort,
    selectionSort,
    mergeSort,
    quickSort,
    prototypeSort,
    heapSort,
} = require('./sort-functions');

// Logging tests
function functionsTester(length) {
    const arr = createUnorderedArray(length);
    const testSubjects = [
        { fn: bubbleSort, args: [arr], options: { iterations: 100 } },
        { fn: selectionSort, args: [arr], options: { iterations: 100 } },
        { fn: insertionSort, args: [arr], options: { iterations: 100 } },
        { fn: mergeSort, args: [arr], options: { iterations: 100 } },
        { fn: quickSort, args: [arr], options: { iterations: 100 } },
        { fn: heapSort, args: [arr], options: { iterations: 100 } },
        { fn: prototypeSort, args: [arr], options: { iterations: 100 } },
    ];
    const pt = performanceTest(testSubjects);
    const results = pt.run();
    results.forEach((result) => {
        console.log(`${result.functionName}, size: ${length}, average: ${result.averageTime}ms`);
    });
    console.log('---------------------');
}

// Testing performance
function testPerformance() {
    functionsTester(20);
    functionsTester(100);
    functionsTester(1000);
    functionsTester(2500);
    functionsTester(5000);
    functionsTester(7500);
    functionsTester(10000);
    functionsTester(12500);
    functionsTester(15000);
    // functionsTester(20000);
    // functionsTester(50000);
}

testPerformance();
