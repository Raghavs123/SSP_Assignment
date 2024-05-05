function swapCase(str) {
    return str.split('').map(char => {
        if (char === char.toUpperCase()) {
            return char.toLowerCase();
        } else {
            return char.toUpperCase();
        }
    }).join('');
}

// Example usage:
const mixedCaseString = "Hello World";
console.log(swapCase(mixedCaseString));
