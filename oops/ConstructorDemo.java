// Example demonstrating Constructor in Java

class Person {
    String name;
    int age;

    // Constructor: called when an object is created
    Person(String n, int a) {
        name = n;
        age = a;
    }

    // Method to display person details
    void show() {
        System.out.println("Name: " + name + ", Age: " + age);
    }

    public static void main(String[] args) {
        // Creating object using constructor
        Person p = new Person("Bob", 25);
        p.show();
    }
}

// Constructors are special methods used to initialize objects.
