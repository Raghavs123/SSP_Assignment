function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[0];
    const left = [];
    const right = [];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
}

// Example usage:
const unsortedArray = [6, 3, 8, 1, 9, 2];
console.log("Sorted array using Quick Sort:", quickSort(unsortedArray));
