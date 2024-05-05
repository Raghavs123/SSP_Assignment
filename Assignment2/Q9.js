function isArraySorted(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    }
    return true;
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5];
const unsortedArray = [6, 3, 8, 1, 9, 2];
console.log("Is sortedArray sorted?", isArraySorted(sortedArray)); // Output: true
console.log("Is unsortedArray sorted?", isArraySorted(unsortedArray)); // Output: false
