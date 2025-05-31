// Example demonstrating Looping Statements in Java

public class LoopingStatementsDemo {
    public static void main(String[] args) {
        // for loop
        System.out.println("For loop:");
        for (int i = 1; i <= 3; i++) {
            System.out.println("i = " + i);
        }

        // while loop
        System.out.println("\nWhile loop:");
        int j = 1;
        while (j <= 3) {
            System.out.println("j = " + j);
            j++;
        }

        // do-while loop
        System.out.println("\nDo-While loop:");
        int k = 1;
        do {
            System.out.println("k = " + k);
            k++;
        } while (k <= 3);

        // Enhanced for loop (for-each)
        System.out.println("\nEnhanced For loop:");
        int[] arr = {10, 20, 30};
        for (int num : arr) {
            System.out.println("num = " + num);
        }
    }
}
// Java supports for, while, do-while, and enhanced for (for-each) loops.
