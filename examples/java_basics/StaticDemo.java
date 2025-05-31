// Example demonstrating static keyword in Java

class StaticDemo {
    static int staticVar = 10; // Static variable (shared by all objects)
    int instanceVar = 20;      // Instance variable (unique to each object)

    static void staticMethod() {
        System.out.println("Static method. staticVar = " + staticVar);
        // Cannot access instanceVar here directly
    }

    void instanceMethod() {
        System.out.println("Instance method. instanceVar = " + instanceVar);
        System.out.println("Static variable from instance method: " + staticVar);
    }

    public static void main(String[] args) {
        StaticDemo.staticMethod(); // Call static method without object

        StaticDemo obj1 = new StaticDemo();
        obj1.instanceMethod();

        StaticDemo obj2 = new StaticDemo();
        obj2.instanceVar = 30;
        obj2.staticVar = 50; // Changes staticVar for all objects

        obj1.instanceMethod(); // staticVar is now 50
        obj2.instanceMethod();
    }
}
// static keyword is used for class-level variables and methods.
