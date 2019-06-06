const {
    bubbleSort,
    selectionSort,
    insertionSort,
    mergeSort,
    quickSort,
    prototypeSort,
} = require('./sort-functions');

const UNORDERED_ARRAY = [3, 2, 5, 9, 1, 10, 4, 7, 6, 8];
const ORDERED_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe('bubbleSort', () => {
    it('should return an ordered array when an unsorted array is passed', () => {
        expect(bubbleSort(UNORDERED_ARRAY)).toEqual(ORDERED_ARRAY);
    });
    it('should return an empty array if an empty array is passed', () => {
        expect(bubbleSort([])).toEqual([]);
    });
});

describe('selectionSort', () => {
    it('should return an ordered array when an unsorted array is passed', () => {
        expect(selectionSort(UNORDERED_ARRAY)).toEqual(ORDERED_ARRAY);
    });
    it('should return an empty array if an empty array is passed', () => {
        expect(selectionSort([])).toEqual([]);
    });
});

describe('insertionSort', () => {
    it('should return an ordered array when an unsorted array is passed', () => {
        expect(insertionSort(UNORDERED_ARRAY)).toEqual(ORDERED_ARRAY);
    });
    it('should return an empty array if an empty array is passed', () => {
        expect(insertionSort([])).toEqual([]);
    });
});

describe('mergeSort', () => {
    it('should return an ordered array when an unsorted array is passed', () => {
        expect(mergeSort(UNORDERED_ARRAY)).toEqual(ORDERED_ARRAY);
    });
    it('should return an empty array if an empty array is passed', () => {
        expect(mergeSort([])).toEqual([]);
    });
});

describe('quickSort', () => {
    it('should return an ordered array when an unsorted array is passed', () => {
        expect(quickSort(UNORDERED_ARRAY)).toEqual(ORDERED_ARRAY);
    });
    it('should return an empty array if an empty array is passed', () => {
        expect(quickSort([])).toEqual([]);
    });
});

describe('prototypeSort', () => {
    it('should return an ordered array when an unsorted array is passed', () => {
        expect(prototypeSort(UNORDERED_ARRAY)).toEqual(ORDERED_ARRAY);
    });
});

