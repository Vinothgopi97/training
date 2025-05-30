class Grandparent {
    void greet() {
        System.out.println("Hello from Grandparent");
    }
}

class Parent extends Grandparent {
    void hello() {
        System.out.println("Hello from Parent");
    }
}

class Child extends Parent {
    void hi() {
        System.out.println("Hi from Child");
    }
}

public class MultilevelInheritanceDemo {
    public static void main(String[] args) {
        Child c = new Child();
        c.greet();
        c.hello();
        c.hi();
    }
}
