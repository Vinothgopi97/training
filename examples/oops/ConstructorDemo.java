// Example demonstrating all types of Constructors in Java

class Person {
    String name;
    int age;

    // 1. Default Constructor (no arguments)
    // If not defined, Java provides a default constructor automatically.
    Person() {
        name = "Unknown";
        age = 0;
    }

    // 2. Parameterized Constructor
    Person(String n, int a) {
        name = n;
        age = a;
    }

    // 3. Copy Constructor (not built-in, but can be simulated)
    Person(Person p) {
        this.name = p.name;
        this.age = p.age;
    }

    // Method to display person details
    void show() {
        System.out.println("Name: " + name + ", Age: " + age);
    }

    public static void main(String[] args) {
        // Using default constructor
        Person p1 = new Person();
        p1.show(); // Output: Name: Unknown, Age: 0

        // Using parameterized constructor
        Person p2 = new Person("Bob", 25);
        p2.show(); // Output: Name: Bob, Age: 25

        // Using copy constructor
        Person p3 = new Person(p2);
        p3.show(); // Output: Name: Bob, Age: 25
    }
}

// Constructors are special methods used to initialize objects.
// Types:
// 1. Default Constructor: No parameters.
// 2. Parameterized Constructor: With parameters.
// 3. Copy Constructor: Creates a new object as a copy of an existing object (user-defined in Java).
