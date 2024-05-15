const helloWorld = require('../src/helloworld');

test('returns the string "Hello Stuart"', () => {
    expect(helloWorld()).toBe("Hello Stuart");
})