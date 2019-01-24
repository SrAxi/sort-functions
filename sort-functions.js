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
 * @returns {Array} arr
 */
export const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        const current = arr[i];
        let leftIndex = i - 1;

        while (leftIndex >= 0 && arr[leftIndex] > current) {
            arr[leftIndex + 1] = arr[leftIndex];
            leftIndex = leftIndex - 1;
        }
        arr[leftIndex + 1] = current;
    }
    return arr;
};
