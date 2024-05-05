function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

// Example usage:
const value1 = 42;
const value2 = "42";
console.log("Is value1 a number?", isNumber(value1)); // Output: true
console.log("Is value2 a number?", isNumber(value2)); // Output: false
