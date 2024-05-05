function sortStringAlphabetically(str) {
    return str.split('').sort().join('');
}

// Example usage:
const stringToSort = "javascript";
console.log("Sorted string:", sortStringAlphabetically(stringToSort));
