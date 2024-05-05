class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null;
    }
}

// Example usage:
const list = new LinkedList();
console.log("Is the list empty?", list.isEmpty()); // Output: true
