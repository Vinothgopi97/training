class Parent {
    void show() {
        System.out.println("Parent show()");
    }
}

class Child extends Parent {
    void display() {
        System.out.println("Child display()");
    }
}

public class SingleInheritanceDemo {
    public static void main(String[] args) {
        Child c = new Child();
        c.show();
        c.display();
    }
}
