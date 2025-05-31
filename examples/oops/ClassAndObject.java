// Example demonstrating Class and Object in Java

// Class definition
class Student {
    // Fields (properties)
    String name;
    int rollNo;

    // Method to display student details
    void display() {
        System.out.println("Name: " + name + ", Roll No: " + rollNo);
    }

    // Main method to create and use objects
    public static void main(String[] args) {
        // Creating an object of Student class
        Student s1 = new Student();
        // Assigning values to object fields
        s1.name = "Alice";
        s1.rollNo = 101;
        // Calling method using object
        s1.display();
    }
}
// In this example, 'Student' is a class, and 's1' is an object (instance) of the class.
