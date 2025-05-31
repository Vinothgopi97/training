// Example demonstrating Polymorphism in Java

class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

// Subclass Cat
class Cat extends Animal {
    void sound() {
        System.out.println("Cat meows");
    }
}

// Subclass Dog
class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks");
    }

    public static void main(String[] args) {
        Animal a;
        a = new Cat(); // Reference of Animal, object of Cat
        a.sound();     // Calls Cat's sound()
        a = new Dog(); // Reference of Animal, object of Dog
        a.sound();     // Calls Dog's sound()
    }
}
// Polymorphism: ability of an object to take many forms (method to behave differently based on object).
