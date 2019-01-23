/**********************************************
 *  Sorting arrays with different algorithms  *
 **********************************************/

// Insertion sort
// Max iterations: ((n-1) * n) / 2
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
