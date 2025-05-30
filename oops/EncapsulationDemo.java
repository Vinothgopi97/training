class Account {
    private int balance;

    public void setBalance(int amount) {
        balance = amount;
    }

    public int getBalance() {
        return balance;
    }
}

public class EncapsulationDemo {
    public static void main(String[] args) {
        Account acc = new Account();
        acc.setBalance(1000);
        System.out.println(acc.getBalance());
    }
}
