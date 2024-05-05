function linearSearch(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return i; // Found the element, return its index
        }
    }
    return -1; // Element not found
}

// Example usage:
const array = [10, 5, 7, 2, 3, 8];
const element = 7;
const index = linearSearch(array, element);
if (index !== -1) {
    console.log(`First index of ${element} in the array: ${index}`);
} else {
    console.log(`${element} not found in the array.`);
}
