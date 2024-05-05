function isRegExp(value) {
    return value instanceof RegExp;
}

// Example usage:
const regex1 = /hello/;
const regex2 = new RegExp('world');
const notRegex = "this is not a regex";
console.log("Is regex1 a RegExp?", isRegExp(regex1)); // Output: true
console.log("Is regex2 a RegExp?", isRegExp(regex2)); // Output: true
console.log("Is notRegex a RegExp?", isRegExp(notRegex)); // Output: false
