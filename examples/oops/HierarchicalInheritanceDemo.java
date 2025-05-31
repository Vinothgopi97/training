// Example demonstrating Hierarchical Inheritance in Java

// Base class
class Animal {
    void eat() {
        System.out.println("Animal eats");
    }
}

// Multiple subclasses inherit from Animal
class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks");
    }
}

class Cat extends Animal {
    void meow() {
        System.out.println("Cat meows");
    }

    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();  // Inherited from Animal
        d.bark(); // Own method

        Cat c = new Cat();
        c.eat();  // Inherited from Animal
        c.meow(); // Own method
    }
}
// Hierarchical inheritance: multiple classes inherit from a single parent class.
