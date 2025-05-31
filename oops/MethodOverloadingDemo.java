// Example demonstrating Method Overloading in Java

class Overload {
    // Method with int parameter
    void show(int a) {
        System.out.println("Argument: " + a);
    }
    // Overloaded method with String parameter
    void show(String b) {
        System.out.println("Argument: " + b);
    }

    public static void main(String[] args) {
        Overload o = new Overload();
        o.show(10);      // Calls method with int argument
        o.show("Hello"); // Calls method with String argument
    }
}
// Method overloading: multiple methods with same name but different parameters.
