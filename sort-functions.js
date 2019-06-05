/**********************************************
 *  Sorting arrays with different algorithms  *
 **********************************************/

/**
 * Insertion sort
 *
 * Iterates through an input array and removes one element per iteration,
 * finds the place the element belongs in the array, and then places it there
 *
 * Max iterations: ((n-1) * n) / 2
 * Algorithm complexity: Quadratic time complexity = O(n^2)
 *
 * @param {Array} arr
 * @returns {Array} newArr
 */
const insertionSort = (arr) => {
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
 * Bubble sort
 *
 * Compares the first element of the array with the second element,
 * if the first element is greater than the second element, it will swap both the elements,
 * and then move on to compare the second and the third element, and so on.
 *
 * Max iterations: ((n-1) * n) / 2
 * Algorithm complexity: Quadratic time complexity = O(n^2)
 *
 * @param {Array} arr
 * @returns {Array} newArr
 */
const bubbleSort = (arr) => {
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
 * Algorithm complexity: Quadratic time complexity = O(n^2)
 *
 * @param {Array} arr
 * @returns {Array} newArr
 */
const selectionSort = (arr) => {
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

module.exports = {
    insertionSort,
    bubbleSort,
    selectionSort,
};
