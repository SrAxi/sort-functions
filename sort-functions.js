/**********************************************
 *  Sorting arrays with different algorithms  *
 **********************************************/

const { defaultComparator } = require('./helpers');

/**
 * Array.prototype.sort
 *
 * @param {Array} arr
 * @returns {Array}
 */
const prototypeSort = (arr) => arr.sort(defaultComparator);

/**
 * Bubble sort
 *
 * Compares the first element of the array with the second element,
 * if the first element is greater than the second element, it will swap both the elements,
 * and then move on to compare the second and the third element, and so on.
 *
 * Max iterations: ((n-1) * n) / 2
 * [Big-O]: O(n^2)
 * [Big-omega]: O(n)
 * [Big-theta]: O(n^2)
 *
 * @param {Array} arr
 * @returns {Array} newArr
 */
const bubbleSort = (arr) => {
    if (arr.length <= 1) return arr;

    const newArr = [...arr];
    const lastIndex = newArr.length - 1;

    for (let i = 0; i < newArr.length; i++) {
        let swapped = false;

        for (let j = 0; j < lastIndex - i; j++) {
            const current = newArr[j];
            const next = newArr[j + 1];
            let rightIndex = j + 1;

            if (current > next) {
                newArr[j] = next;
                newArr[rightIndex] = current;
                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }

    return newArr;
};

/**
 * Selection sort
 *
 * This algorithm will first find the smallest element in the array and swap it with the element in the first position,
 * then it will find the second smallest element and swap it with the element in the second position,
 * and it will keep on doing this until the entire array is sorted.
 *
 * Max iterations: ((n-1) * n) / 2
 * [Big-O]: O(n^2)
 * [Big-omega]: O(n^2)
 * [Big-theta]: O(n^2)
 *
 * @param {Array} arr
 * @returns {Array} newArr
 */
const selectionSort = (arr) => {
    if (arr.length <= 1) return arr;

    const newArr = [...arr];

    const swap = (arr, currentIndex, minIndex) => {
        [arr[currentIndex], arr[minIndex]] = [arr[minIndex], arr[currentIndex]];
    };

    for (let i = 0; i < newArr.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < newArr.length; j++) {
            if (newArr[minIndex] > newArr[j]) {
                minIndex = j;
            }
        }

        if (i !== minIndex) {
            swap(newArr, i, minIndex);
        }
    }

    return newArr;
};

/**
 * Insertion sort
 *
 * Iterates through an input array and removes one element per iteration,
 * finds the place the element belongs in the array, and then places it there
 *
 * Max iterations: ((n-1) * n) / 2
 * [Big-O]: O(n^2)
 * [Big-omega]: O(n)
 * [Big-theta]: O(n^2)
 *
 * @param {Array} arr
 * @returns {Array} newArr
 */
const insertionSort = (arr) => {
    if (arr.length <= 1) return arr;

    const newArr = [...arr];
    for (let i = 1; i < newArr.length; i++) {
        const current = newArr[i];
        let leftIndex = i - 1;

        while (leftIndex >= 0 && newArr[leftIndex] > current) {
            newArr[leftIndex + 1] = newArr[leftIndex];
            leftIndex = leftIndex - 1;
        }
        newArr[leftIndex + 1] = current;
    }

    return newArr;
};

/**
 * Merge sort
 *
 * Uses `Divide and Conquer` for breaking down the main array into atomic arrays,
 * ordering them and then, merge their results
 *
 * Max iterations: n(log n + 1)
 * [Big-O]: O(n*log n)
 * [Big-omega]: O(n*log n)
 * [Big-theta]: O(n*log n)
 *
 * @param {Array} arr
 * @returns {Array}
 */
const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    const merge = (left, right) => {
        let resultArray = [], leftIndex = 0, rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                resultArray.push(left[leftIndex]);
                leftIndex++; // move left array cursor
            } else {
                resultArray.push(right[rightIndex]);
                rightIndex++; // move right array cursor
            }
        }

        return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
    };

    return merge(
        mergeSort(left), mergeSort(right)
    );
};

/**
 * Quick sort
 *
 * Uses `Divide and Conquer` for breaking down the main array into atomic arrays,
 * ordering them while splitting
 *
 * Max iterations: n(log n + 1)
 * [Big-O]: O(n2)
 * [Big-omega]: O(n*log n)
 * [Big-theta]: O(n*log n)
 *
 * @param {Array} arr
 * @param {Function} comparator
 * @returns {Array} newArr
 */
const quickSort = (
    arr,
    comparator = defaultComparator
) => {
    if (arr.length <= 1) return arr;

    const newArr = [...arr];

    // Recursively sort sub-arrays.
    const recursiveSort = (start, end) => {
        // If this sub-array is empty, it's sorted.
        if (end - start < 1) {
            return;
        }

        const pivotValue = newArr[end];
        let smallestIndex = start;
        for (let i = start; i < end; i++) {
            const sort = comparator(newArr[i], pivotValue);
            // Current element is less than the pivot value.
            if (sort === -1) {
                // If the element just to the right of the smallest index,
                // isn't this element, swap them.
                if (smallestIndex !== i) {
                    const temp = newArr[smallestIndex];
                    newArr[smallestIndex] = newArr[i];
                    newArr[i] = temp;
                }

                // Move the smallest index to the right by one,
                // denoting an increase in the less-than sub-array size.
                smallestIndex++;
            }
        }

        // Move the pivot value to between the split.
        newArr[end] = newArr[smallestIndex];
        newArr[smallestIndex] = pivotValue;

        // Recursively sort the less-than and greater-than arrays.
        recursiveSort(start, smallestIndex - 1);
        recursiveSort(smallestIndex + 1, end);
    };

    // Sort the entire array.
    recursiveSort(0, arr.length - 1);
    return newArr;
};

/**
 * Heap sort
 *
 * Creates a Max-Heap out of the unordered array.
 * Then a sorted array is created by repeatedly removing the largest element from the heap,
 * and inserting it into the array.
 * The heap is reconstructed after each removal.
 *
 * Max iterations: n(log n + 1)
 * [Big-O]: O(n*log n)
 * [Big-omega]: O(n*log n)
 * [Big-theta]: O(n*log n)
 *
 * @param {Array} arr
 * @returns {Array} newArr
 */
const heapSort = (arr) => {
    if (arr.length <= 1) return arr;

    const newArr = [...arr];

    const buildMaxHeap = (array) => {
        let i;
        i = array.length / 2 - 1;
        i = Math.floor(i);

        // Build a max heap out of
        // all the array elements passed in.
        while (i >= 0) {
            heapify(array, i, array.length);
            i -= 1;
        }
    };

    const heapify = (heap, i, max) => {
        let index, leftChild, righChild;

        while (i < max) {
            index = i;

            leftChild = 2 * i + 1;
            righChild = leftChild + 1;

            if (leftChild < max && heap[leftChild] > heap[index]) {
                index = leftChild;
            }

            if (righChild < max && heap[righChild] > heap[index]) {
                index = righChild;
            }

            if (index === i) {
                return;
            }

            swap(heap, i, index);

            i = index;
        }
    };

    const swap = (array, firstItemIndex, lastItemIndex) => {
        let tmp = array[firstItemIndex];

        // Swap first and last items in the array.
        array[firstItemIndex] = array[lastItemIndex];
        array[lastItemIndex] = tmp;
    };

    // Build our max heap.
    buildMaxHeap(newArr);

    // Find last element.
    let lastElement = newArr.length - 1;

    // Continue heap sorting until we have
    // just one element left in the array.
    while (lastElement > 0) {
        swap(newArr, 0, lastElement);
        heapify(newArr, 0, lastElement);
        lastElement -= 1
    }

    return newArr;
};

module.exports = {
    insertionSort,
    bubbleSort,
    selectionSort,
    mergeSort,
    quickSort,
    prototypeSort,
    heapSort,
};
