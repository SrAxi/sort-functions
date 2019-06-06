# sort-functions
Creating sort functions with different algorithms in JavaScript and comparing their performance:
- `bubbleSort`
- `selectionSort`
- `insertionSort`
- `mergeSort`
- `quickSort`
- `heapSort`
- `bucketSort` _(Not yet implemented)_
- `radixSort` _(Not yet implemented)_
- `countingSort` _(Not yet implemented)_

-------------------
To run the performance test: `node performance-test.js`

To run the Unit tests: `npm test` or `yarn test`

-------------------
Performance tests are done by running the functions with ascending parameters 100 times each and calculating an average for each parameter set.

They also return the maximum amount of comparisons for each algorithm for the given array size (`n`).

An example of the Performance test:

```
bubbleSort, size: 20, time: 0.0266ms
selectionSort, size: 20, time: 0.0345ms
insertionSort, size: 20, time: 0.0316ms
mergeSort, size: 20, time: 0.0612ms
quickSort, size: 20, time: 0.0210ms
heapSort, size: 20, time: 0.0397ms
prototypeSort, size: 20, time: 0.0269ms
---------------------
bubbleSort, size: 100, time: 0.0212ms
selectionSort, size: 100, time: 0.0222ms
insertionSort, size: 100, time: 0.0190ms
mergeSort, size: 100, time: 0.1173ms
quickSort, size: 100, time: 0.0190ms
heapSort, size: 100, time: 0.0384ms
prototypeSort, size: 100, time: 0.0562ms
---------------------
bubbleSort, size: 1000, time: 1.1603ms
selectionSort, size: 1000, time: 0.7915ms
insertionSort, size: 1000, time: 0.3992ms
mergeSort, size: 1000, time: 0.7684ms
quickSort, size: 1000, time: 0.1470ms
heapSort, size: 1000, time: 0.1891ms
prototypeSort, size: 1000, time: 0.0319ms
---------------------
bubbleSort, size: 2500, time: 6.6856ms
selectionSort, size: 2500, time: 4.0737ms
insertionSort, size: 2500, time: 1.9582ms
mergeSort, size: 2500, time: 1.7792ms
quickSort, size: 2500, time: 0.3163ms
heapSort, size: 2500, time: 0.4895ms
prototypeSort, size: 2500, time: 0.3695ms
---------------------
bubbleSort, size: 5000, time: 29.4046ms
selectionSort, size: 5000, time: 15.2932ms
insertionSort, size: 5000, time: 7.6892ms
mergeSort, size: 5000, time: 3.5845ms
quickSort, size: 5000, time: 0.6391ms
heapSort, size: 5000, time: 1.0170ms
prototypeSort, size: 5000, time: 0.6480ms
---------------------
bubbleSort, size: 7500, time: 74.8611ms
selectionSort, size: 7500, time: 33.9444ms
insertionSort, size: 7500, time: 19.9142ms
mergeSort, size: 7500, time: 5.5396ms
quickSort, size: 7500, time: 1.0129ms
heapSort, size: 7500, time: 1.6278ms
prototypeSort, size: 7500, time: 0.9575ms
---------------------
bubbleSort, size: 10000, time: 140.4983ms
selectionSort, size: 10000, time: 61.9216ms
insertionSort, size: 10000, time: 30.0909ms
mergeSort, size: 10000, time: 7.1316ms
quickSort, size: 10000, time: 1.3354ms
heapSort, size: 10000, time: 2.1697ms
prototypeSort, size: 10000, time: 1.2969ms
---------------------
bubbleSort, size: 12500, time: 226.7690ms
selectionSort, size: 12500, time: 97.7987ms
insertionSort, size: 12500, time: 48.1837ms
mergeSort, size: 12500, time: 8.8496ms
quickSort, size: 12500, time: 1.6705ms
heapSort, size: 12500, time: 2.7578ms
prototypeSort, size: 12500, time: 1.6187ms
---------------------
bubbleSort, size: 15000, time: 332.6970ms
selectionSort, size: 15000, time: 137.7163ms
insertionSort, size: 15000, time: 68.3814ms
mergeSort, size: 15000, time: 10.5763ms
quickSort, size: 15000, time: 2.0045ms
heapSort, size: 15000, time: 3.3426ms
prototypeSort, size: 15000, time: 2.0357ms
---------------------
bubbleSort, size: 20000, time: 611.2214ms
selectionSort, size: 20000, time: 243.2717ms
insertionSort, size: 20000, time: 120.8312ms
mergeSort, size: 20000, time: 14.6156ms
quickSort, size: 20000, time: 2.7241ms
heapSort, size: 20000, time: 4.6056ms
prototypeSort, size: 20000, time: 2.8483ms
---------------------
bubbleSort, size: 50000, time: 4044.0472ms
selectionSort, size: 50000, time: 1496.9957ms
insertionSort, size: 50000, time: 727.5606ms
mergeSort, size: 50000, time: 36.6104ms
quickSort, size: 50000, time: 6.9871ms
heapSort, size: 50000, time: 12.0079ms
prototypeSort, size: 50000, time: 7.3410ms
---------------------
```
