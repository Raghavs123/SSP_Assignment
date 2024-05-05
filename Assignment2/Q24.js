try {
    const invalidJSONString = '{name: "John", age: 30}';
    const parsedObject = JSON.parse(invalidJSONString);
    console.log(parsedObject);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log("Invalid JSON string:", error.message);
    } else {
        throw error; // Re-throw the error if it's not a SyntaxError
    }
}
