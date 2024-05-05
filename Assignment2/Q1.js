function findWordIndices(inputString, word) {
    const indices = [];
    let index = inputString.indexOf(word);
    while (index !== -1) {
        indices.push(index);
        index = inputString.indexOf(word, index + 1);
    }
    return indices;
}

// Example usage and output:
const inputString = "This is a string with the word 'string' multiple times in it.";
const word = "string";
const wordIndices = findWordIndices(inputString, word);
console.log("Indices of the word \"" + word + "\" in the string: " + wordIndices.join(", "));
