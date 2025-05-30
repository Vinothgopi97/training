class Person {
    String name;
    int age;

    // Default constructor
    Person() {
        name = "Unknown";
        age = 0;
    }

    // Parameterized constructor
    Person(String n, int a) {
        name = n;
        age = a;
    }

    void show() {
        System.out.println(name + " - " + age);
    }
}

public class ConstructorDemo {
    public static void main(String[] args) {
        Person p1 = new Person();
        Person p2 = new Person("Bob", 25);
        p1.show();
        p2.show();
    }
}
