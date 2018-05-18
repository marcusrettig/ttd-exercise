const Account = require('./Account');

describe('Account', () => {
  let account;

  beforeEach(() => {
    account = new Account(1000);
  });

  describe('getBalance', () => {
    it('should get the current balance', () => {
      expect(account.getBalance()).toEqual(1000);
    });
  });

  describe('deposit', () => {
    it('should increase the balance by the given amount', () => {
      account.deposit(500);
      expect(account.getBalance()).toEqual(1500);
    });
  });

  describe('withdraw', () => {
    it('should decrease the balance by the given amount', () => {
      account.withdraw(1000);
      expect(account.getBalance()).toEqual(0);
    });

    it('should not decrease the balance if account has insufficient funds', () => {
      account.withdraw(1001);
      expect(account.getBalance()).toEqual(1000);
    });
  });

  describe('recentTransactions', () => {
    it('should be empty if no transactions', () => {
      expect(account.recentTransactions()).toEqual([]);
    });

    it('should contain deposits as positive numbers', () => {
      account.deposit(300);
      expect(account.recentTransactions()).toEqual([300]);
    });

    it('should contain withdrawals as negative numbers', () => {
      account.withdraw(300);
      expect(account.recentTransactions()).toEqual([-300]);
    });

    it('should have the last transaction first', () => {
      account.deposit(200);
      account.deposit(300);
      expect(account.recentTransactions()).toEqual([300, 200]);
    });

    it('should contain the 3 most recent transactions', () => {
      account.deposit(100);
      account.deposit(200);
      account.deposit(300);
      account.deposit(100);
      expect(account.recentTransactions()).toEqual([100, 300, 200]);
    });
  });
});
