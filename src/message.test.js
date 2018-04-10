const { getMessage } = require('./message');

describe('getMessage()', () => {
  test('Message is Hello World!', () => {
    expect(getMessage()).toEqual('Hello World!');
  });
});
