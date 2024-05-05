function insertionSort(array) {
    const n = array.length;

    for (let i = 1; i < n; i++) {
        const key = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = key;
    }

    return array;
}

// Example usage:
const unsortedArray = [6, 3, 8, 1, 9, 2];
console.log("Sorted array using Insertion Sort:", insertionSort(unsortedArray));
