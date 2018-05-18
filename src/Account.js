class Account {
  constructor(initialBalance) {
    this.balance = initialBalance;
    this.transactions = [];
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.unshift(amount);
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.transactions.unshift(-amount);
    }
  }

  recentTransactions() {
    return this.transactions.slice(0, 3);
  }
}

module.exports = Account;
