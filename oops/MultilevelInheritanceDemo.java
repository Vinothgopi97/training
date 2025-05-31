// Example demonstrating Multilevel Inheritance in Java

class Grandparent {
    void grandparentMethod() {
        System.out.println("Grandparent method");
    }
}

// Parent extends Grandparent
class Parent extends Grandparent {
    void parentMethod() {
        System.out.println("Parent method");
    }
}

// Child extends Parent (multilevel chain)
class Child extends Parent {
    void childMethod() {
        System.out.println("Child method");
    }

    public static void main(String[] args) {
        Child c = new Child();
        c.grandparentMethod(); // From Grandparent
        c.parentMethod();      // From Parent
        c.childMethod();       // Own method
    }
}
// Multilevel inheritance: a class is derived from another derived class.
