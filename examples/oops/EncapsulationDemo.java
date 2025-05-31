// Example demonstrating Encapsulation in Java

class Account {
    // Private field (data hiding)
    private int balance;

    // Public setter for balance
    public void setBalance(int amount) {
        balance = amount;
    }

    // Public getter for balance
    public int getBalance() {
        return balance;
    }
}

class Student {
    // Private fields (data hiding)
    private String name;
    private int age;

    // Public setter for name
    public void setName(String n) {
        name = n;
    }
    // Public getter for name
    public String getName() {
        return name;
    }
    // Public setter for age
    public void setAge(int a) {
        age = a;
    }
    // Public getter for age
    public int getAge() {
        return age;
    }

    public static void main(String[] args) {
        Student s = new Student();
        s.setName("John");
        s.setAge(20);
        System.out.println("Name: " + s.getName() + ", Age: " + s.getAge());
    }
}

// Encapsulation: wrapping data (fields) and code (methods) together, restricting direct access to some components.

public class EncapsulationDemo {
    public static void main(String[] args) {
        Account acc = new Account();
        acc.setBalance(1000);
        System.out.println(acc.getBalance());
    }
}
