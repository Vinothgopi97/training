// Example demonstrating Multiple Inheritance using Interfaces in Java

// First interface
interface Printable {
    void print();
}

// Second interface
interface Showable {
    void show();
}

// Class implements multiple interfaces
class Demo implements Printable, Showable {
    public void print() {
        System.out.println("Printable interface");
    }
    public void show() {
        System.out.println("Showable interface");
    }

    public static void main(String[] args) {
        Demo d = new Demo();
        d.print();
        d.show();
    }
}
// Java does not support multiple inheritance with classes, but it is achieved using interfaces.
