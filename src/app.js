const Account = require('./Account');

const account = new Account(800);

/* eslint-disable-next-line no-console */
console.log(`Your balance is ${account.getBalance()}`);
