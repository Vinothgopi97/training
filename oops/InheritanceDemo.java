// Example demonstrating Inheritance in Java

// Parent class (superclass)
class Animal {
    void eat() {
        System.out.println("Animal eats");
    }
}

// Child class (subclass) inheriting from Animal
class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks");
    }

    public static void main(String[] args) {
        // Creating object of subclass
        Dog d = new Dog();
        d.eat();  // Inherited method
        d.bark(); // Own method
    }
}
// Inheritance allows a class to acquire properties and methods of another class.
