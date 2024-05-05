class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}

// Example usage:
const rectangle = new Rectangle(5, 4);
console.log("Area:", rectangle.area()); // Output: 20
console.log("Perimeter:", rectangle.perimeter()); // Output: 18
