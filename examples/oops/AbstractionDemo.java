// Example demonstrating Abstraction in Java using abstract class

// Abstract class with abstract method
abstract class Shape {
    abstract void draw(); // Abstract method (no body)
}

// Concrete subclass implementing abstract method
class Circle extends Shape {
    void draw() {
        System.out.println("Drawing Circle");
    }
}

// Another concrete subclass
class Rectangle extends Shape {
    void draw() {
        System.out.println("Drawing Rectangle");
    }

    public static void main(String[] args) {
        Shape s1 = new Circle();
        s1.draw(); // Calls Circle's draw()
        Shape s2 = new Rectangle();
        s2.draw(); // Calls Rectangle's draw()
    }
}
// Abstraction: hiding implementation details and showing only functionality (using abstract classes or interfaces).
