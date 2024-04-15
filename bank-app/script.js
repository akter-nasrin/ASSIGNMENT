class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} into account ${this.accountNumber}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from account ${this.accountNumber}`);
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: ${this.balance}`);
    }
}

// Creating instances of BankAccount
const account1 = new BankAccount(123456789, "John Doe", 1000);
const account2 = new BankAccount(987654321, "Jane Smith", 2000);

// Demonstrating functionality
console.log("Initial Account Information:");
account1.displayAccountInfo();
account2.displayAccountInfo();

console.log("\nDepositing into account 1...");
account1.deposit(500);

console.log("\nWithdrawing from account 2...");
account2.withdraw(1000);

console.log("\nUpdated Account Information:");
account1.displayAccountInfo();
account2.displayAccountInfo();
