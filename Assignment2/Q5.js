function heapSort(array) {
    const n = array.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(array, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        const temp = array[0];
        array[0] = array[i];
        array[i] = temp;

        heapify(array, i, 0);
    }

    return array;
}

function heapify(array, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && array[left] > array[largest]) {
        largest = left;
    }

    if (right < n && array[right] > array[largest]) {
        largest = right;
    }

    if (largest !== i) {
        const temp = array[i];
        array[i] = array[largest];
        array[largest] = temp;

        heapify(array, n, largest);
    }
}

// Example usage:
const unsortedArray = [6, 3, 8, 1, 9, 2];
console.log("Sorted array using Heap Sort:", heapSort(unsortedArray));
