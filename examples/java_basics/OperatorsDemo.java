// Example demonstrating Operators in Java

public class OperatorsDemo {
    public static void main(String[] args) {
        int a = 10, b = 5;

        // Arithmetic Operators
        System.out.println("Arithmetic Operators:");
        System.out.println("a + b = " + (a + b));
        System.out.println("a - b = " + (a - b));
        System.out.println("a * b = " + (a * b));
        System.out.println("a / b = " + (a / b));
        System.out.println("a % b = " + (a % b));

        // Relational Operators
        System.out.println("\nRelational Operators:");
        System.out.println("a == b: " + (a == b));
        System.out.println("a != b: " + (a != b));
        System.out.println("a > b: " + (a > b));
        System.out.println("a < b: " + (a < b));
        System.out.println("a >= b: " + (a >= b));
        System.out.println("a <= b: " + (a <= b));

        // Logical Operators
        System.out.println("\nLogical Operators:");
        boolean x = true, y = false;
        System.out.println("x && y: " + (x && y));
        System.out.println("x || y: " + (x || y));
        System.out.println("!x: " + (!x));

        // Assignment Operators
        System.out.println("\nAssignment Operators:");
        int c = 10;
        c += 5; // c = c + 5
        System.out.println("c += 5: " + c);
        c *= 2; // c = c * 2
        System.out.println("c *= 2: " + c);

        // Increment/Decrement Operators
        System.out.println("\nIncrement/Decrement Operators:");
        int d = 5;
        System.out.println("d++: " + (d++)); // prints 5, then d becomes 6
        System.out.println("++d: " + (++d)); // d becomes 7, then prints 7
    }
}
// Operators are special symbols that perform operations on operands.
