// Example demonstrating Method Overriding in Java

class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

// Subclass overrides sound() method
class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks");
    }

    public static void main(String[] args) {
        Animal a = new Dog(); // Upcasting
        a.sound(); // Calls overridden method in Dog
    }
}

// Method overriding: subclass provides specific implementation of a method declared in parent class.
