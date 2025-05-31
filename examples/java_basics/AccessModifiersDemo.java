// Example demonstrating Access Modifiers in Java

class DefaultClass {
    // Default access: accessible within the same package
    void defaultMethod() {
        System.out.println("Default access method");
    }
}

public class AccessModifiersDemo {
    public int publicVar = 1;        // Accessible everywhere
    private int privateVar = 2;      // Accessible only within this class
    protected int protectedVar = 3;  // Accessible in same package and subclasses
    int defaultVar = 4;              // Default (package-private) access

    public void publicMethod() {
        System.out.println("Public method");
    }

    private void privateMethod() {
        System.out.println("Private method");
    }

    protected void protectedMethod() {
        System.out.println("Protected method");
    }

    void defaultMethod() {
        System.out.println("Default (package-private) method");
    }

    public static void main(String[] args) {
        AccessModifiersDemo obj = new AccessModifiersDemo();
        // All methods except privateMethod() can be accessed here
        obj.publicMethod();
        obj.protectedMethod();
        obj.defaultMethod();
        // obj.privateMethod(); // Not accessible outside the class
    }
}
// Access Modifiers control the visibility of classes, variables, and methods.
