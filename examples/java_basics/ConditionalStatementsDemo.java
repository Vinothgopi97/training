// Example demonstrating Conditional Statements in Java

public class ConditionalStatementsDemo {
    public static void main(String[] args) {
        int num = 10;

        // if statement
        if (num > 0) {
            System.out.println("Number is positive");
        }

        // if-else statement
        if (num % 2 == 0) {
            System.out.println("Number is even");
        } else {
            System.out.println("Number is odd");
        }

        // if-else-if ladder
        if (num < 0) {
            System.out.println("Negative number");
        } else if (num == 0) {
            System.out.println("Zero");
        } else {
            System.out.println("Positive number");
        }

        // switch statement
        int day = 2;
        switch (day) {
            case 1:
                System.out.println("Monday");
                break;
            case 2:
                System.out.println("Tuesday");
                break;
            default:
                System.out.println("Other day");
        }
    }
}
// Conditional statements control the flow of execution based on conditions.
