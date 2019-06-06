# sort-functions
Creating sort functions with different algorithms in JavaScript and comparing their performance:
- `bubbleSort`
- `selectionSort`
- `insertionSort`
- `mergeSort`
- `quickSort`
- `heapSort` _(Not yet implemented, working on it)_

-------------------
To run the performance test: `node performance-test.js`

To run the Unit tests: `npm test` or `yarn test`

-------------------
Performance tests are done by running the functions with ascending parameters 100 times each and calculating an average for each parameter set.

They also return the maximum amount of comparisons for each algorithm for the given array size (`n`).

An example of the Performance test:

```
bubbleSort, size: 20, time: 0.0245ms
selectionSort, size: 20, time: 0.0305ms
insertionSort, size: 20, time: 0.0242ms
mergeSort, size: 20, time: 0.0620ms
quickSort, size: 20, time: 0.0227ms
prototypeSort, size: 20, time: 0.0252ms
---------------------
bubbleSort, size: 100, time: 0.0168ms
selectionSort, size: 100, time: 0.0194ms
insertionSort, size: 100, time: 0.0117ms
mergeSort, size: 100, time: 0.1116ms
quickSort, size: 100, time: 0.0204ms
prototypeSort, size: 100, time: 0.0490ms
---------------------
bubbleSort, size: 1000, time: 1.0647ms
selectionSort, size: 1000, time: 0.7153ms
insertionSort, size: 1000, time: 0.3501ms
mergeSort, size: 1000, time: 0.6837ms
quickSort, size: 1000, time: 0.1245ms
prototypeSort, size: 1000, time: 0.0973ms
---------------------
bubbleSort, size: 2500, time: 6.3165ms
selectionSort, size: 2500, time: 3.8384ms
insertionSort, size: 2500, time: 1.9337ms
mergeSort, size: 2500, time: 1.8618ms
quickSort, size: 2500, time: 0.3055ms
prototypeSort, size: 2500, time: 0.3594ms
---------------------
bubbleSort, size: 5000, time: 28.6884ms
selectionSort, size: 5000, time: 15.5233ms
insertionSort, size: 5000, time: 7.7650ms
mergeSort, size: 5000, time: 3.3976ms
quickSort, size: 5000, time: 0.6280ms
prototypeSort, size: 5000, time: 0.5932ms
---------------------
bubbleSort, size: 7500, time: 71.8745ms
selectionSort, size: 7500, time: 33.7437ms
insertionSort, size: 7500, time: 16.5783ms
mergeSort, size: 7500, time: 5.1131ms
quickSort, size: 7500, time: 0.9594ms
prototypeSort, size: 7500, time: 0.9097ms
---------------------
bubbleSort, size: 10000, time: 135.5337ms
selectionSort, size: 10000, time: 59.2515ms
insertionSort, size: 10000, time: 29.1070ms
mergeSort, size: 10000, time: 6.6718ms
quickSort, size: 10000, time: 1.2797ms
prototypeSort, size: 10000, time: 1.2711ms
---------------------
bubbleSort, size: 12500, time: 219.6577ms
selectionSort, size: 12500, time: 91.6613ms
insertionSort, size: 12500, time: 46.3462ms
mergeSort, size: 12500, time: 8.5087ms
quickSort, size: 12500, time: 1.6219ms
prototypeSort, size: 12500, time: 1.6286ms
---------------------
bubbleSort, size: 15000, time: 321.8279ms
selectionSort, size: 15000, time: 133.9341ms
insertionSort, size: 15000, time: 65.7065ms
mergeSort, size: 15000, time: 10.1555ms
quickSort, size: 15000, time: 1.9573ms
prototypeSort, size: 15000, time: 1.9429ms
---------------------
bubbleSort, size: 20000, time: 602.1705ms
selectionSort, size: 20000, time: 236.2664ms
insertionSort, size: 20000, time: 118.1693ms
mergeSort, size: 20000, time: 14.4923ms
quickSort, size: 20000, time: 2.8437ms
prototypeSort, size: 20000, time: 2.8451ms
---------------------
```
