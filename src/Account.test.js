const Account = require('./Account');

describe('Account', () => {
  /* eslint-disable-next-line no-unused-vars */
  let account;

  beforeEach(() => {
    account = new Account(1000);
  });

  describe('getBalance', () => {
    it('should get the current balance', () => {

    });
  });

  describe('deposit', () => {
    it('should increase the balance by the given amount', () => {

    });
  });

  describe('withdraw', () => {
    it('should decrease the balance by the given amount', () => {

    });

    it('should not decrease the balance if account has insufficient funds', () => {

    });
  });

  describe('recentTransactions', () => {
    it('should be empty if no transactions', () => {

    });

    it('should contain deposits as positive numbers', () => {

    });

    it('should contain withdrawals as negative numbers', () => {

    });

    it('should have the last transaction first', () => {

    });

    it('should contain the 3 most recent transactions', () => {

    });
  });
});
