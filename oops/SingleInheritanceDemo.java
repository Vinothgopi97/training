// Example demonstrating Single Inheritance in Java

class Parent {
    void show() {
        System.out.println("Parent class method");
    }
}

// Child inherits from Parent (single inheritance)
class Child extends Parent {
    void display() {
        System.out.println("Child class method");
    }

    public static void main(String[] args) {
        Child c = new Child();
        c.show();    // Inherited from Parent
        c.display(); // Own method
    }
}
// Single inheritance: one class extends another class directly.
